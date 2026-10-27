'use strict';
/* Voix de Mika : synthèse vocale neuronale (OpenAI), uniquement pour ses phrases d'accueil.
   Sans clé OPENAI_API_KEY, la fonction est coupée et l'appli utilise la voix « gazouillis » de Mika (WebAudio, dans le navigateur). */
const BASE = (process.env.TTS_BASE_URL || 'https://api.openai.com').replace(/\/$/, '');
const KEY = process.env.OPENAI_API_KEY || '';
const MODEL = process.env.TTS_MODEL || 'gpt-4o-mini-tts';
const VOICE = process.env.TTS_VOICE || 'coral';
const VOICES = ['coral', 'shimmer', 'nova', 'sage', 'ballad', 'alloy', 'onyx', 'fable', 'echo', 'verse']; // voix proposées au joueur (création de l'avatar)
const DAILY_CAP = parseInt(process.env.TTS_DAILY_CAP, 10) || 400;
const INSTRUCTIONS = process.env.TTS_STYLE || [
  'Voice Affect: voix de petite héroïne d’anime kawaii, jeune, très aiguë et claire, douce, légèrement soufflée, avec un sourire constant ; adorable mais jamais agaçante.',
  'Tone: tendre, câline, espiègle ; un brin dramatique pour rire (petits « oh non ! », « kyaa ! »), toujours chaleureuse.',
  'Pacing: vive et sautillante, avec de petites respirations ; les fins de phrases montent un peu, comme une chanson ; les questions montent nettement.',
  'Emotion: émerveillée, affectueuse, timide par moments ; sur les exclamations de petits éclats de joie ; sur « hi hi » un vrai petit rire étouffé.',
  'Pronunciation: français naturel et très fluide, consonnes douces, voyelles arrondies ; « kiya » aigu et joyeux ; « oué-tingue » pour hwaiting.',
  'Never: ne lis jamais les lettres une à une, ne prononce pas les symboles, pas de ton de présentatrice ou de robot.'
].join('\n');
// Hauteur de la voix : 1.12 la rend un peu plus aiguë et plus pétillante, 1 la laisse telle quelle.
const PITCH = Math.max(0.9, Math.min(1.3, parseFloat(process.env.TTS_PITCH) || 1.0));
const INSTRUCTIONS_EN = process.env.TTS_STYLE_EN || [
  'Voice Affect: an adorable little anime mascot, young, bright, soft and crystal clear, super cute.',
  'Tone: tender, cuddly, enthusiastic, always smiling in the voice; never cold, never robotic.',
  'Pacing: lively and bouncy with playful little pauses; questions go up at the end.',
  'Pronunciation: natural, fluent, soft rounded sounds.'
].join('\n');
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
  return String(t || '')
    .replace(/@mika/gi, 'Mika')
    .replace(/\*[^*]{1,40}\*/g, ' ')                       // *bâille* : les actions ne se lisent pas
    .replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}]/gu, '')
    .replace(/\b(?:a+w+h*|aww+e*)\b/gi, 'aaah')            // « aww » se lisait « A double V »
    .replace(/\b[uo]w[uo]\b/gi, 'hihi')
    .replace(/\bw{2,}\b/gi, '')
    .replace(/\bhi(hi)+\b/gi, 'hi hi')
    .replace(/\bhe(he)+\b/gi, 'hé hé')
    .replace(/hwaiting/gi, 'oué-tingue').replace(/daebak/gi, 'dé-bak').replace(/kyaa+/gi, 'kiya').replace(/\bwow\b/gi, 'waou')
    .replace(/[~♪♫♥❤]+/g, ' ').replace(/\.{3,}|…/g, '… ').replace(/\s+/g, ' ').trim().slice(0, 220);
}
function ipOk(ip) {
  const now = Date.now();
  const a = (hits.get(ip) || []).filter((x) => now - x < 60000);
  if (a.length >= 20) { hits.set(ip, a); return false; }
  a.push(now); hits.set(ip, a);
  if (hits.size > 5000) hits.clear();
  return true;
}
async function synth(text, ip, opts) {
  opts = opts || {};
  const voice = VOICES.indexOf(opts.voice) >= 0 ? opts.voice : VOICE;
  const lang = opts.lang === 'en' ? 'en' : 'fr';
  if (!KEY) throw Object.assign(new Error('voix indisponible'), { code: 503 });
  const t = speakable(text);
  if (t.length < 2) throw Object.assign(new Error('texte vide'), { code: 400 });
  const ck = voice + '|' + lang + '|' + t;
  const hit = cache.get(ck);
  if (hit) { cache.delete(ck); cache.set(ck, hit); return hit; }
  if (!ipOk(ip || '')) throw Object.assign(new Error('trop de demandes'), { code: 429 });
  if (!budgetLeft()) throw Object.assign(new Error('plafond quotidien'), { code: 503 });
  if (running >= 3) throw Object.assign(new Error('occupé'), { code: 503 });
  used++; running++;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    const body = { model: MODEL, voice, input: t, response_format: 'mp3' };
    if (/gpt-4o/.test(MODEL)) body.instructions = lang === 'en' ? INSTRUCTIONS_EN : INSTRUCTIONS;
    const r = await fetch(BASE + '/v1/audio/speech', {
      method: 'POST', signal: ctrl.signal,
      headers: { 'content-type': 'application/json', authorization: 'Bearer ' + KEY },
      body: JSON.stringify(body)
    });
    if (!r.ok) { let detail = ''; try { detail = (await r.text()).slice(0, 240); } catch (e) { /* ignore */ } throw Object.assign(new Error('API voix ' + r.status), { code: 503, api: r.status, detail }); }
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length < 200) throw Object.assign(new Error('audio vide'), { code: 503 });
    cache.set(ck, buf); cacheBytes += buf.length;
    while (cacheBytes > MAX_CACHE_BYTES && cache.size) { const k = cache.keys().next().value; cacheBytes -= cache.get(k).length; cache.delete(k); }
    return buf;
  } finally { clearTimeout(timer); running--; }
}
/* Diagnostic pour le bouton « Tester la voix » : dit exactement pourquoi la vraie voix ne marche pas. */
async function check() {
  if (!KEY) return { ok: false, why: 'no_key', msg: 'La clé OPENAI_API_KEY est absente sur Render (ou le service n’a pas redémarré).' };
  const t0 = Date.now();
  try {
    await synth('Coucou, c’est moi !', 'check', { voice: 'shimmer', lang: 'fr' });
    return { ok: true, ms: Date.now() - t0, model: MODEL, msg: 'Voix OpenAI active ✅' };
  } catch (e) {
    const d = String(e.detail || '');
    if (e.api === 401) return { ok: false, why: 'bad_key', status: 401, msg: 'OpenAI refuse la clé (401) : copie-la de nouveau, sans espace, ou crée-en une nouvelle.' };
    if (e.api === 429 || /insufficient_quota|billing/i.test(d)) return { ok: false, why: 'quota', status: e.api, msg: 'OpenAI dit que le crédit est insuffisant ou la limite atteinte (429). Vérifie Billing > crédit disponible, puis attends 1 à 2 minutes.' };
    if (e.api === 404 || /model/i.test(d)) return { ok: false, why: 'model', status: e.api, msg: 'Le modèle de voix n’est pas disponible sur ton compte (' + MODEL + '). Ajoute la variable TTS_MODEL = tts-1 sur Render.' };
    return { ok: false, why: 'other', status: e.api || null, msg: 'Erreur voix : ' + (e.message || 'inconnue') + (d ? ' — ' + d : '') };
  }
}
module.exports = { check, enabled, VOICES, PITCH, synth, usedToday: () => { budgetLeft(); return used; }, DAILY_CAP };
