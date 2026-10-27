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
const EL_MODEL = process.env.ELEVEN_MODEL || 'eleven_multilingual_v2'; // modèle des aperçus de Voice Lab ; mets eleven_v3 pour tester les balises d’émotion
const EL_FALLBACK = 'eleven_multilingual_v2';
// Par défaut on garde les réglages enregistrés sur la voix (= ce que tu entends dans Voice Lab). Pour forcer : ELEVEN_STABILITY, ELEVEN_STYLE, ELEVEN_SIMILARITY (0 à 1), ELEVEN_SPEED (0.7 à 1.2).
const ENVN = (k) => { const v = parseFloat(process.env[k]); return isFinite(v) ? v : null; };
const EL_FORCE = { stability: ENVN('ELEVEN_STABILITY'), style: ENVN('ELEVEN_STYLE'), similarity_boost: ENVN('ELEVEN_SIMILARITY'), speed: ENVN('ELEVEN_SPEED') };
// Émotion -> balise v3 + réglages v2 (stabilité basse = plus d’intonations ; vitesse qui suit l’humeur)
const EMO = {
  happy: { tag: '[cheerful]', st: 0.28, sty: 0.65, sp: 1.06 }, love: { tag: '[softly] [affectionate]', st: 0.3, sty: 0.7, sp: 0.97 },
  wow: { tag: '[gasps] [excited]', st: 0.22, sty: 0.8, sp: 1.1 }, proud: { tag: '[proud] [excited]', st: 0.28, sty: 0.7, sp: 1.03 },
  silly: { tag: '[giggles]', st: 0.25, sty: 0.75, sp: 1.08 }, cheer: { tag: '[excited]', st: 0.25, sty: 0.8, sp: 1.1 },
  sad: { tag: '[sad] [sighs]', st: 0.4, sty: 0.6, sp: 0.9 }, worried: { tag: '[worried]', st: 0.35, sty: 0.6, sp: 0.96 }, worry: { tag: '[worried]', st: 0.35, sty: 0.6, sp: 0.96 },
  shy: { tag: '[shy] [softly]', st: 0.35, sty: 0.6, sp: 0.94 }, sleep: { tag: '[yawns] [sleepy]', st: 0.4, sty: 0.5, sp: 0.88 }, neutral: { tag: '', st: 0.32, sty: 0.55, sp: 1.0 }
};
function guessEmo(t) { return /[!]/.test(t) ? 'happy' : /\?$/.test(t) ? 'neutral' : 'neutral'; }
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
    .replace(/[~♪♫♥❤]+/g, ' ').replace(/\.{3,}|…/g, '... ').replace(/\s+/g, ' ').trim().slice(0, 340);
}
const TAG_WORD = { giggles: 'hihi', chuckles: 'hé hé', 'laughs softly': 'hihi', laughs: 'ahah', sighs: 'pfff...', gasps: 'oh !' };
function untag(t) { return t.replace(/\[([a-z ,]{2,24})\]/gi, (m, k) => TAG_WORD[k.toLowerCase().trim()] || ' ').replace(/\s+/g, ' ').trim(); }
function ipOk(ip) {
  const now = Date.now();
  const a = (hits.get(ip) || []).filter((x) => now - x < 60000);
  if (a.length >= 20) { hits.set(ip, a); return false; }
  a.push(now); hits.set(ip, a);
  if (hits.size > 5000) hits.clear();
  return true;
}
async function elSynth(text, id, signal, emo, model) {
  const e = EMO[emo] || EMO[guessEmo(text)] || EMO.neutral;
  const v3 = /v3/.test(model);
  let input = v3 ? text : untag(text);
  if (v3) { input = text.replace(/\bhi hi\b/gi, '[giggles]').replace(/\bhé hé\b/gi, '[chuckles]').replace(/\baaah\b/gi, '[gasps]'); if (e.tag) input = e.tag + ' ' + input; }
  let vs = null;
  if (v3) vs = { stability: EL_FORCE.stability != null ? EL_FORCE.stability : 0.5 };
  else { const f = {}; Object.keys(EL_FORCE).forEach((k) => { if (EL_FORCE[k] != null) f[k] = EL_FORCE[k]; }); if (Object.keys(f).length) vs = f; }
  const r = await fetch(EL_BASE + '/v1/text-to-speech/' + encodeURIComponent(id) + '?output_format=mp3_44100_128', {
    method: 'POST', signal,
    headers: { 'content-type': 'application/json', 'xi-api-key': EL_KEY },
    body: JSON.stringify(vs ? { text: input, model_id: model, voice_settings: vs } : { text: input, model_id: model })
  });
  if (!r.ok) { let detail = ''; try { detail = (await r.text()).slice(0, 240); } catch (e2) { /* ignore */ } throw Object.assign(new Error('API ElevenLabs ' + r.status), { code: 503, api: r.status, detail, provider: 'eleven' }); }
  return Buffer.from(await r.arrayBuffer());
}
async function elTry(text, id, signal, emo) {
  try { return await elSynth(text, id, signal, emo, EL_MODEL); }
  catch (e) { if (EL_MODEL !== EL_FALLBACK && e.api && e.api !== 401 && e.api !== 402 && e.api !== 429) return elSynth(text, id, signal, emo, EL_FALLBACK); throw e; }
}
async function synth(text, ip, opts) {
  opts = opts || {};
  const voice = VOICES.indexOf(opts.voice) >= 0 ? opts.voice : VOICE;
  const lang = opts.lang === 'en' ? 'en' : 'fr';
  const emo = EMO[opts.emo] ? opts.emo : '';
  if (!KEY && !EL_KEY) throw Object.assign(new Error('voix indisponible'), { code: 503 });
  const t = speakable(text);
  if (t.length < 2) throw Object.assign(new Error('texte vide'), { code: 400 });
  const ck = (EL_KEY ? 'e' : 'o') + voice + '|' + lang + '|' + emo + '|' + t;
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
      try { buf = await elTry(t, EL_VOICES[voice], ctrl.signal, emo); } catch (e) { elErr = e; if (!KEY) throw e; }
    }
    if (!buf) {
    const body = { model: MODEL, voice, input: untag(t), response_format: 'mp3' };
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
  const t0 = Date.now(); let elWhy = '';
  try {
    if (EL_KEY) {
      try { await elTry('Coucou, c’est moi !', EL_VOICES.coral, AbortSignal.timeout(15000), 'happy'); return { ok: true, ms: Date.now() - t0, model: EL_MODEL, provider: 'elevenlabs', msg: 'Voix ElevenLabs active ✅' }; }
      catch (e) { const dd = String(e.detail || ''); const why = e.api === 401 ? 'La clé ElevenLabs est refusée (401) : recopie-la.' : e.api === 402 || e.api === 429 || /quota|limit/i.test(dd) ? 'ElevenLabs dit que le quota est atteint : ajoute du crédit ou passe à un abonnement.' : e.api === 404 || /voice/i.test(dd) ? 'ElevenLabs refuse cette voix (' + (e.api || '?') + ') : ajoute-la d’abord à « My Voices », vérifie l’identifiant, et sache que les voix de la bibliothèque exigent un abonnement payant (le plan gratuit ne les autorise pas via l’API).' : 'Erreur ElevenLabs : ' + (e.message || '') + (dd ? ' — ' + dd : ''); elWhy = why; if (!KEY) return { ok: false, why: 'eleven', status: e.api || null, msg: why }; }
    }
    await synth('Coucou, c’est moi !', 'check', { voice: 'shimmer', lang: 'fr' });
    return { ok: true, ms: Date.now() - t0, model: MODEL, provider: 'openai', msg: 'Voix OpenAI active ✅' + (EL_KEY ? ' ⚠️ ElevenLabs ne marche PAS, OpenAI a pris le relais. Raison : ' + (elWhy || 'inconnue') : '') };
  } catch (e) {
    const d = String(e.detail || '');
    if (e.api === 401) return { ok: false, why: 'bad_key', status: 401, msg: 'OpenAI refuse la clé (401) : copie-la de nouveau, sans espace, ou crée-en une nouvelle.' };
    if (e.api === 429 || /insufficient_quota|billing/i.test(d)) return { ok: false, why: 'quota', status: e.api, msg: 'OpenAI dit que le crédit est insuffisant ou la limite atteinte (429). Vérifie Billing > crédit disponible, puis attends 1 à 2 minutes.' };
    if (e.api === 404 || /model/i.test(d)) return { ok: false, why: 'model', status: e.api, msg: 'Le modèle de voix n’est pas disponible sur ton compte (' + MODEL + '). Ajoute la variable TTS_MODEL = tts-1 sur Render.' };
    return { ok: false, why: 'other', status: e.api || null, msg: 'Erreur voix : ' + (e.message || 'inconnue') + (d ? ' — ' + d : '') };
  }
}
const provider = () => (EL_KEY ? 'el2:' + EL_MODEL + ':' + Object.values(EL_VOICES).join('').slice(0, 24) : 'oa');
module.exports = { provider, check, enabled, VOICES, PITCH, synth, usedToday: () => { budgetLeft(); return used; }, DAILY_CAP };
