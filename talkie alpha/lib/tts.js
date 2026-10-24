'use strict';
/* Voix de Mika : synthèse vocale neuronale (OpenAI), uniquement pour ses phrases d'accueil.
   Sans clé OPENAI_API_KEY, la fonction est coupée et l'appli utilise la voix « gazouillis » de Mika (WebAudio, dans le navigateur). */
const BASE = (process.env.TTS_BASE_URL || 'https://api.openai.com').replace(/\/$/, '');
const KEY = process.env.OPENAI_API_KEY || '';
const MODEL = process.env.TTS_MODEL || 'gpt-4o-mini-tts';
const VOICE = process.env.TTS_VOICE || 'coral';
const DAILY_CAP = parseInt(process.env.TTS_DAILY_CAP, 10) || 400;
const INSTRUCTIONS = process.env.TTS_STYLE || [
  'Voice Affect: une adorable petite mascotte d’anime kawaii, voix jeune, aiguë, douce et cristalline, toute mignonne.',
  'Tone: tendre, câlin, ultra enthousiaste, avec un sourire permanent dans la voix ; jamais froid, jamais robotique, jamais plat.',
  'Pacing: vif et sautillant, avec de petites pauses espiègles ; les phrases montent en fin de question et chantonnent un peu.',
  'Emotion: émerveillée et affectueuse ; sur les exclamations, de petits éclats de joie ; sur « hihi », un vrai petit rire timide.',
  'Pronunciation: français naturel et très fluide, articulation douce, sons arrondis ; « kyaa » se dit « kiya » aigu et joyeux.'
].join('\n');
// Hauteur de la voix : 1.12 la rend un peu plus aiguë et plus pétillante, 1 la laisse telle quelle.
const PITCH = Math.max(0.9, Math.min(1.3, parseFloat(process.env.TTS_PITCH) || 1.12));
const MAX_CACHE_BYTES = 30 * 1024 * 1024;

const cache = new Map(); // texte -> Buffer (le plus ancien d'abord)
let cacheBytes = 0;
let day = '';
let used = 0;
let running = 0;
const hits = new Map(); // ip -> [timestamps]

function enabled() { return !!KEY; }
function budgetLeft() {
  const d = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Paris' });
  if (d !== day) { day = d; used = 0; }
  return used < DAILY_CAP;
}
function speakable(t) {
  return String(t || '').replace(/@mika/gi, 'Mika').replace(/[\p{Extended_Pictographic}️‍]/gu, '')
    .replace(/hwaiting/gi, 'oué-tingue').replace(/daebak/gi, 'dé-bak').replace(/kyaa+/gi, 'kiya').replace(/\s+/g, ' ').trim().slice(0, 220);
}
function ipOk(ip) {
  const now = Date.now();
  const a = (hits.get(ip) || []).filter((x) => now - x < 60000);
  if (a.length >= 20) { hits.set(ip, a); return false; }
  a.push(now); hits.set(ip, a);
  if (hits.size > 5000) hits.clear();
  return true;
}
async function synth(text, ip) {
  if (!KEY) throw Object.assign(new Error('voix indisponible'), { code: 503 });
  const t = speakable(text);
  if (t.length < 2) throw Object.assign(new Error('texte vide'), { code: 400 });
  const hit = cache.get(t);
  if (hit) { cache.delete(t); cache.set(t, hit); return hit; }
  if (!ipOk(ip || '')) throw Object.assign(new Error('trop de demandes'), { code: 429 });
  if (!budgetLeft()) throw Object.assign(new Error('plafond quotidien'), { code: 503 });
  if (running >= 3) throw Object.assign(new Error('occupé'), { code: 503 });
  used++; running++;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    const body = { model: MODEL, voice: VOICE, input: t, response_format: 'mp3' };
    if (/gpt-4o/.test(MODEL)) body.instructions = INSTRUCTIONS;
    const r = await fetch(BASE + '/v1/audio/speech', {
      method: 'POST', signal: ctrl.signal,
      headers: { 'content-type': 'application/json', authorization: 'Bearer ' + KEY },
      body: JSON.stringify(body)
    });
    if (!r.ok) throw Object.assign(new Error('API voix ' + r.status), { code: 503 });
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length < 200) throw Object.assign(new Error('audio vide'), { code: 503 });
    cache.set(t, buf); cacheBytes += buf.length;
    while (cacheBytes > MAX_CACHE_BYTES && cache.size) { const k = cache.keys().next().value; cacheBytes -= cache.get(k).length; cache.delete(k); }
    return buf;
  } finally { clearTimeout(timer); running--; }
}
module.exports = { enabled, PITCH, synth, usedToday: () => { budgetLeft(); return used; }, DAILY_CAP };
