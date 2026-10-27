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
  'Voice: a Japanese anime heroine speaking French (like a gentle Japanese voice actress, light Japanese accent: soft rounded vowels, gentle consonants, even syllable rhythm). Young, high-pitched, soft, slightly breathy, sweet like Aggretsuko\'s cheerful side or a K-drama girl next door. Adorable, never shrill.',
  'Delivery: ONE smooth continuous flow, legato and melodic, like a sing-song. Never choppy, never staccato, no robotic pauses between words, no stressing every word. Sentences glide into each other; endings lift softly; questions rise sweetly.',
  'Emotion: warm, shy, affectionate, smiling in the voice; tiny delighted gasps on exclamations; a real soft giggle on "hi hi"; a gentle sigh on sadness.',
  'Never read symbols or letters one by one. Never sound like a presenter or a text-to-speech engine.'
].join('\n');
// Hauteur de la voix (réservé au navigateur)
const PITCH = Math.max(0.9, Math.min(1.3, parseFloat(process.env.TTS_PITCH) || 1.0));
const INSTRUCTIONS_EN = process.env.TTS_STYLE_EN || [
  'Voice: an adorable young Japanese anime heroine speaking English with a very light Japanese lilt. High-pitched, soft, slightly breathy, super cute, never shrill.',
  'Delivery: smooth, continuous and melodic, legato, sing-song; never choppy or robotic; questions rise sweetly.',
  'Emotion: warm, shy, affectionate, smiling in the voice, with a real soft giggle on "hi hi".'
].join('\n');
// ElevenLabs (facultatif, bien plus expressif) : ELEVENLABS_API_KEY + identifiants de voix (pas secrets) pris dans la Voice Library.
const EL_KEY = process.env.ELEVENLABS_API_KEY || '';
const EL_BASE = (process.env.ELEVEN_BASE_URL || 'https://api.elevenlabs.io').replace(/\/$/, '');
const EL_MODEL = process.env.ELEVEN_MODEL || 'eleven_multilingual_v2';
const EL_VOICES = { // nom de voix du jeu -> identifiant ElevenLabs (modifiables sur Render)
  coral: process.env.ELEVEN_VOICE_KAWAII || 'jBpfuIE2acCO8z3wKNLl',
  shimmer: process.env.ELEVEN_VOICE_DOUCE || 'MF3mGyEYCl7XYWbV9V6O',
  nova: process.env.ELEVEN_VOICE_PETILLANTE || 'jsCqWAovK2LkecY7zXl4',
  sage: process.env.ELEVEN_VOICE_CALME || 'EXAVITQu4vr4xnSDxMaL',
  onyx: process.env.ELEVEN_VOICE_GRAVE || 'pNInz6obpgDQGcFmaJgB'
};
const MAX_CACHE_BYTES = 30 * 1024 * 1024;

const cache = new Map(); // texte -> Buffer (le plus ancien d'abord)
let cacheBytes = 0;
let day = '';
let used = 0;
let running = 0;
const hits = new Map(); // ip -> [timestamps]

function enabled() { return !!KEY || !!EL_KEY; }
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
    .replace(/[~♪♫♥❤]+/g, ' ').replace(/\.{3,}|…/g, ', ').replace(/\s+/g, ' ').trim().slice(0, 220);
}
function ipOk(ip) {
  const now = Date.now();
  const a = (hits.get(ip) || []).filter((x) => now - x < 60000);
  if (a.length >= 20) { hits.set(ip, a); return false; }
  a.push(now); hits.set(ip, a);
  if (hits.size > 5000) hits.clear();
  return true;
}
async function elSynth(text, id, signal) {
  const r = await fetch(EL_BASE + '/v1/text-to-speech/' + encodeURIComponent(id) + '?output_format=mp3_44100_128', {
    method: 'POST', signal,
    headers: { 'content-type': 'application/json', 'xi-api-key': EL_KEY },
    body: JSON.stringify({ text, model_id: EL_MODEL, voice_settings: { stability: 0.32, similarity_boost: 0.8, style: 0.6, use_speaker_boost: true, speed: 1.04 } })
  });
  if (!r.ok) { let detail = ''; try { detail = (await r.text()).slice(0, 240); } catch (e) { /* ignore */ } throw Object.assign(new Error('API ElevenLabs ' + r.status), { code: 503, api: r.status, detail, provider: 'eleven' }); }
  return Buffer.from(await r.arrayBuffer());
}
async function synth(text, ip, opts) {
  opts = opts || {};
  const voice = VOICES.indexOf(opts.voice) >= 0 ? opts.voice : VOICE;
  const lang = opts.lang === 'en' ? 'en' : 'fr';
  if (!KEY && !EL_KEY) throw Object.assign(new Error('voix indisponible'), { code: 503 });
  const t = speakable(text);
  if (t.length < 2) throw Object.assign(new Error('texte vide'), { code: 400 });
  const ck = (EL_KEY ? 'e' : 'o') + voice + '|' + lang + '|' + t;
  const hit = cache.get(ck);
  if (hit) { cache.delete(ck); cache.set(ck, hit); return hit; }
  if (!ipOk(ip || '')) throw Object.assign(new Error('trop de demandes'), { code: 429 });
  if (!budgetLeft()) throw Object.assign(new Error('plafond quotidien'), { code: 503 });
  if (running >= 3) throw Object.assign(new Error('occupé'), { code: 503 });
  used++; running++;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    let buf = null, elErr = null;
    if (EL_KEY && EL_VOICES[voice]) {
      try { buf = await elSynth(t, EL_VOICES[voice], ctrl.signal); } catch (e) { elErr = e; if (!KEY) throw e; }
    }
    if (!buf) {
    const body = { model: MODEL, voice, input: t, response_format: 'mp3' };
    if (/gpt-4o/.test(MODEL)) body.instructions = lang === 'en' ? INSTRUCTIONS_EN : INSTRUCTIONS;
    const r = await fetch(BASE + '/v1/audio/speech', {
      method: 'POST', signal: ctrl.signal,
      headers: { 'content-type': 'application/json', authorization: 'Bearer ' + KEY },
      body: JSON.stringify(body)
    });
    if (!r.ok) { let detail = ''; try { detail = (await r.text()).slice(0, 240); } catch (e) { /* ignore */ } throw Object.assign(new Error('API voix ' + r.status), { code: 503, api: r.status, detail }); }
    buf = Buffer.from(await r.arrayBuffer());
    }
    if (buf.length < 200) throw Object.assign(new Error('audio vide'), { code: 503 });
    cache.set(ck, buf); cacheBytes += buf.length;
    while (cacheBytes > MAX_CACHE_BYTES && cache.size) { const k = cache.keys().next().value; cacheBytes -= cache.get(k).length; cache.delete(k); }
    return buf;
  } finally { clearTimeout(timer); running--; }
}
/* Diagnostic pour le bouton « Tester la voix » : dit exactement pourquoi la vraie voix ne marche pas. */
async function check() {
  if (!KEY && !EL_KEY) return { ok: false, why: 'no_key', msg: 'La clé OPENAI_API_KEY est absente sur Render (ou le service n’a pas redémarré).' };
  const t0 = Date.now();
  try {
    if (EL_KEY) {
      try { await elSynth('Coucou, c’est moi !', EL_VOICES.coral, AbortSignal.timeout(15000)); return { ok: true, ms: Date.now() - t0, model: EL_MODEL, provider: 'elevenlabs', msg: 'Voix ElevenLabs active ✅' }; }
      catch (e) { const dd = String(e.detail || ''); const why = e.api === 401 ? 'La clé ElevenLabs est refusée (401) : recopie-la.' : e.api === 402 || e.api === 429 || /quota|limit/i.test(dd) ? 'ElevenLabs dit que le quota est atteint : ajoute du crédit ou passe à un abonnement.' : e.api === 404 || /voice/i.test(dd) ? 'ElevenLabs ne trouve pas cette voix : vérifie les variables ELEVEN_VOICE_… (identifiants).' : 'Erreur ElevenLabs : ' + (e.message || '') + (dd ? ' — ' + dd : ''); if (!KEY) return { ok: false, why: 'eleven', status: e.api || null, msg: why }; }
    }
    await synth('Coucou, c’est moi !', 'check', { voice: 'shimmer', lang: 'fr' });
    return { ok: true, ms: Date.now() - t0, model: MODEL, provider: 'openai', msg: 'Voix OpenAI active ✅' + (EL_KEY ? ' (ElevenLabs a échoué, OpenAI prend le relais)' : '') };
  } catch (e) {
    const d = String(e.detail || '');
    if (e.api === 401) return { ok: false, why: 'bad_key', status: 401, msg: 'OpenAI refuse la clé (401) : copie-la de nouveau, sans espace, ou crée-en une nouvelle.' };
    if (e.api === 429 || /insufficient_quota|billing/i.test(d)) return { ok: false, why: 'quota', status: e.api, msg: 'OpenAI dit que le crédit est insuffisant ou la limite atteinte (429). Vérifie Billing > crédit disponible, puis attends 1 à 2 minutes.' };
    if (e.api === 404 || /model/i.test(d)) return { ok: false, why: 'model', status: e.api, msg: 'Le modèle de voix n’est pas disponible sur ton compte (' + MODEL + '). Ajoute la variable TTS_MODEL = tts-1 sur Render.' };
    return { ok: false, why: 'other', status: e.api || null, msg: 'Erreur voix : ' + (e.message || 'inconnue') + (d ? ' — ' + d : '') };
  }
}
module.exports = { check, enabled, VOICES, PITCH, synth, usedToday: () => { budgetLeft(); return used; }, DAILY_CAP };
