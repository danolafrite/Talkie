'use strict';
/*
 * Talkie : serveur temps réel.
 * - Fichiers statiques (public/)
 * - WebSocket : salon, invitations, conversations de 2 à 4 personnes
 * - Web Push : notification quand quelqu'un publie un thème
 * Tout l'état des salons vit en mémoire : un redémarrage vide les invitations en cours.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { WebSocketServer } = require('ws');
const webpush = require('web-push');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');

const GRACE_MS = 90 * 1000;          // un téléphone qui s'endort garde sa place 90 s
const PUSH_COOLDOWN_MS = 3 * 60 * 1000; // une notification maximum toutes les 3 minutes par personne
const INVITE_COOLDOWN_MS = 15 * 1000;
const MAX_ROOM_LOG = 30;

try { fs.mkdirSync(DATA_DIR, { recursive: true }); } catch (e) { /* lecture seule : on continue sans disque */ }

const ai = require('./lib/ai');
const tts = require('./lib/tts');
const place = require('./lib/place');
const mod = require('./lib/moderation');
const trends = require('./lib/trends');
const mika = require('./lib/mika');
const companion = require('./lib/companion');
const bobby = require('./lib/bobby');
const branches = require('./lib/branches');
const stats = require('./lib/stats').create(DATA_DIR);
const ADMIN_KEY = process.env.ADMIN_KEY || '';
const MAX_AI_REPLIES = 12; // réponses de l'assistant par conversation

/* ---------- GIF (GIPHY) et texte des messages ---------- */
const GIPHY_KEY = process.env.GIPHY_API_KEY || '';
const GIPHY_BASE = (process.env.GIPHY_API_URL || 'https://api.giphy.com').replace(/\/$/, '');
const GIF_URL_RE = /^https:\/\/(?:media\d*|i)\.giphy\.com\/[A-Za-z0-9_\/.\-]{1,160}(?:\?[A-Za-z0-9_=&.\-%]{0,200})?$/;
const gifCache = new Map(); // requête -> { at, data }
const gifHits = new Map();  // ip -> [horodatages]

// Nettoyage pour les messages : on retire les caractères de contrôle et invisibles, mais on garde
// le joint de largeur nulle (U+200D) et le sélecteur de variation (U+FE0F) dont les emojis ont besoin.
function cleanChat(s, n) {
  return String(s == null ? '' : s)
    .replace(/[\u0000-\u001f\u007f-\u009f​‌‎‏‪-‮⁠-⁯﻿]/g, ' ')
    .replace(/[ \t]+/g, ' ').trim().slice(0, n);
}

function validGif(g) {
  if (!g || typeof g !== 'object') return null;
  const url = typeof g.url === 'string' ? g.url : '';
  if (!GIF_URL_RE.test(url)) return null;
  const w = Math.min(600, Math.max(40, parseInt(g.w, 10) || 200));
  const h = Math.min(600, Math.max(40, parseInt(g.h, 10) || 200));
  return { url, w, h, title: clean(g.title, 80) };
}

async function searchGifs(q) {
  const key = q.toLowerCase();
  const hit = gifCache.get(key);
  if (hit && Date.now() - hit.at < 10 * 60 * 1000) return hit.data;
  const params = new URLSearchParams({ api_key: GIPHY_KEY, rating: 'g', limit: '24' });
  if (q) { params.set('q', q); params.set('lang', 'fr'); }
  const r = await fetch(GIPHY_BASE + '/v1/gifs/' + (q ? 'search' : 'trending') + '?' + params.toString(), { signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error('giphy ' + r.status);
  const j = await r.json();
  const out = [];
  (j.data || []).forEach((it) => {
    const im = it.images || {};
    const full = im.fixed_width || im.downsized;
    const prev = im.fixed_width_small || im.fixed_width;
    if (!full || !prev || !GIF_URL_RE.test(full.url || '') || !GIF_URL_RE.test(prev.url || '')) return;
    out.push({ id: String(it.id || '').slice(0, 40), preview: prev.url, url: full.url, w: parseInt(full.width, 10) || 200, h: parseInt(full.height, 10) || 200, title: clean(it.title, 80) });
  });
  if (gifCache.size > 200) gifCache.clear();
  gifCache.set(key, { at: Date.now(), data: out });
  return out;
}

/* ---------- Clés de notification (VAPID) ---------- */
function loadVapid() {
  if (process.env.VAPID_PUBLIC && process.env.VAPID_PRIVATE) {
    return { publicKey: process.env.VAPID_PUBLIC, privateKey: process.env.VAPID_PRIVATE };
  }
  const file = path.join(DATA_DIR, 'vapid.json');
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { /* pas encore de fichier */ }
  const keys = webpush.generateVAPIDKeys();
  try { fs.writeFileSync(file, JSON.stringify(keys)); } catch (e) { /* ignore */ }
  console.warn('[talkie] Clés VAPID temporaires. Définis VAPID_PUBLIC et VAPID_PRIVATE pour que les notifications survivent aux redémarrages.');
  return keys;
}
const VAPID = loadVapid();
webpush.setVapidDetails(process.env.VAPID_SUBJECT || 'mailto:tablee@example.com', VAPID.publicKey, VAPID.privateKey);

/* ---------- Abonnements aux notifications ---------- */
const SUBS_FILE = path.join(DATA_DIR, 'subs.json');
const subs = new Map(); // pid -> { sub, last }
try {
  const raw = JSON.parse(fs.readFileSync(SUBS_FILE, 'utf8'));
  Object.keys(raw).forEach((k) => subs.set(k, { sub: raw[k], last: 0 }));
} catch (e) { /* aucun abonnement enregistré */ }
let saveTimer = null;
function saveSubs() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const out = {};
    subs.forEach((v, k) => { out[k] = v.sub; });
    fs.writeFile(SUBS_FILE, JSON.stringify(out), () => {});
  }, 500);
}

/* ---------- État ---------- */
const clients = new Map();  // ws -> { cid, pid, nick, visible, blocked:Set, roomId, ip, lastMsg:[], lastInvite }
const byCid = new Map();    // cid -> ws
const rooms = new Map();    // id -> { id, theme, max, hostPid, hostNick, members: Map<cid, {pid, nick, av, ws, timer}>, log: [] }
const blocksOf = new Map(); // pid -> Set<pid> (ceux que cette personne a bloqués)

const pidOf = (cid) => crypto.createHash('sha256').update('tablee:' + cid).digest('hex').slice(0, 12);

function clean(s, n) {
  return String(s == null ? '' : s)
    .replace(/[\u0000-\u001f\u007f-\u009f​-‏‪-‮⁠-⁯﻿]/g, ' ')
    .replace(/\s+/g, ' ').trim().slice(0, n);
}
const rateHits = new Map();
function rateOk(key, max, windowMs) {
  const now = Date.now();
  const arr = (rateHits.get(key) || []).filter((t) => now - t < windowMs);
  if (arr.length >= max) { rateHits.set(key, arr); return false; }
  arr.push(now); rateHits.set(key, arr);
  if (rateHits.size > 5000) rateHits.clear();
  return true;
}
function avOf(x) { const v = String(x == null ? '' : x); return /^[a-z0-9]{3,12}$/.test(v) ? v : ''; }
function send(ws, obj) {
  if (ws && ws.readyState === 1) { try { ws.send(JSON.stringify(obj)); } catch (e) { /* ignore */ } }
}
function blockedEitherWay(a, b) {
  return (blocksOf.get(a) && blocksOf.get(a).has(b)) || (blocksOf.get(b) && blocksOf.get(b).has(a));
}
function roomMemberList(room) {
  return Array.from(room.members.values()).map((m) => ({ pid: m.pid, nick: m.nick, av: m.av || '', online: !!m.ws }));
}
function humansOnline(room) {
  let n = 0;
  room.members.forEach((m) => { if (m.ws) n++; });
  return n;
}
// L'assistant n'est présent que lorsque la personne est seule dans la room.
function aiActive(room) {
  return !!room.companion && ai.enabled() && room.companion.replies < MAX_AI_REPLIES &&
    room.members.size === 1 && humansOnline(room) === 1;
}
function roomView(room) {
  return { id: room.id, theme: room.theme, max: room.max, host: room.hostPid, members: roomMemberList(room), ai: aiActive(room) };
}
function sendRoom(room, obj, exceptPid) {
  room.members.forEach((m) => {
    if (!m.ws || m.pid === exceptPid) return;
    if (obj.pid && blockedEitherWay(m.pid, obj.pid)) return;
    send(m.ws, obj);
  });
}

/* ---------- Salon (liste des invitations) ---------- */
let lobbyTimer = null;
function scheduleLobby() {
  if (lobbyTimer) return;
  lobbyTimer = setTimeout(() => { lobbyTimer = null; broadcastLobby(); }, 120);
}
function broadcastLobby() {
  let online = 0;
  clients.forEach((c) => { if (c.cid) online++; });
  clients.forEach((c, ws) => {
    if (!c.cid) return;
    const invites = [];
    rooms.forEach((r) => {
      if (r.members.size >= r.max || r.members.size === 0) return;
      if (c.roomId === r.id) return;
      // Une invitation dont tout le monde est hors ligne reste en attente, mais n'est pas proposée
      let anyOnline = false;
      r.members.forEach((m) => { if (m.ws) anyOnline = true; });
      if (!anyOnline) return;
      let hidden = false;
      r.members.forEach((m) => { if (blockedEitherWay(c.pid, m.pid)) hidden = true; });
      if (hidden) return;
      let hostAv = ''; r.members.forEach((m) => { if (m.pid === r.hostPid) hostAv = m.av || ''; });
      invites.push({ id: r.id, theme: r.theme, max: r.max, here: r.members.size, nick: r.hostNick, av: hostAv, ts: r.createdAt });
    });
    const friendsOn = [];
    if (c.friends && c.friends.size) {
      const inPlaza = new Set(); plazas.forEach((sh) => sh.forEach((m) => inPlaza.add(m.pid)));
      clients.forEach((o) => { if (o.cid && o.pid && c.friends.has(o.pid) && !blockedEitherWay(c.pid, o.pid)) friendsOn.push({ pid: o.pid, nick: o.nick, plaza: inPlaza.has(o.pid) }); });
    }
    let plazaN = 0; plazas.forEach((sh) => { plazaN += sh.size; });
    send(ws, { t: 'lobby', online, invites, plaza: plazaN, friends: friendsOn.slice(0, 20) });
  });
}

/* ---------- Notifications ---------- */
function notifyInvite(room, hostPid) {
  const payload = JSON.stringify({
    title: 'Talkie',
    body: room.hostNick + ' veut parler de : ' + room.theme,
    url: '/'
  });
  const now = Date.now();
  subs.forEach((entry, pid) => {
    if (pid === hostPid) return;
    if (blockedEitherWay(pid, hostPid)) return;
    if (now - entry.last < PUSH_COOLDOWN_MS) return;
    // Inutile de notifier quelqu'un qui regarde déjà l'écran
    let watching = false;
    clients.forEach((c) => { if (c.pid === pid && c.visible) watching = true; });
    if (watching) return;
    entry.last = now;
    stats.push();
    try {
      webpush.sendNotification(entry.sub, payload, { TTL: 600, urgency: 'high' }).catch((err) => {
        if (err && (err.statusCode === 404 || err.statusCode === 410)) { subs.delete(pid); saveSubs(); }
      });
    } catch (e) {
      subs.delete(pid); saveSubs(); // abonnement mal formé
    }
  });
}

/* ---------- Conversations ---------- */
function removeMember(room, cid, reason) {
  const m = room.members.get(cid);
  if (!m) return;
  clearTimeout(m.timer);
  room.members.delete(cid);
  if (room.convoStart && room.members.size < 2) {
    stats.convoEnd((Date.now() - room.convoStart) / 1000);
    room.convoStart = null;
  }
  const c = m.ws ? clients.get(m.ws) : null;
  if (c) c.roomId = null;
  if (m.ws && reason) send(m.ws, { t: 'left', reason });
  if (room.members.size === 0) {
    rooms.delete(room.id);
  } else {
    sendRoom(room, { t: 'sys', text: m.nick + ' est parti·e.' });
    sendRoom(room, { t: 'room', room: roomView(room) });
  }
  scheduleLobby();
}

function leaveCurrent(ws, reason) {
  const c = clients.get(ws);
  if (!c || !c.roomId) return;
  const room = rooms.get(c.roomId);
  c.roomId = null;
  if (room) removeMember(room, c.cid, reason);
}

function attach(ws, room) {
  const c = clients.get(ws);
  const m = room.members.get(c.cid);
  if (!m) return false;
  clearTimeout(m.timer);
  m.timer = null;
  m.ws = ws;
  m.nick = c.nick;
  m.av = c.av;
  c.roomId = room.id;
  send(ws, { t: 'joined', room: roomView(room), log: room.log.filter((e) => !blockedEitherWay(c.pid, e.pid)) });
  sendRoom(room, { t: 'room', room: roomView(room) }, c.pid);
  return true;
}

/* ---------- Assistant IA (compagnon d'attente) ---------- */
const COMPANION_SYSTEM = [
  mika.PERSONA,
  'Situation : une personne a publié un thème et attend qu’un autre humain la rejoigne. Tu lui tiens compagnie en parlant de ce thème, avec une question de relance à chaque message ou presque.'
].join(' ');

function typing(room, on) {
  room.members.forEach((m) => { if (m.ws) send(m.ws, { t: 'typing', on: !!on }); });
}

function postAI(room, text, counts) {
  room.lastMikaAt = Date.now();
  room.sinceMika = 0;
  const entry = { t: 'chat', pid: 'ai', nick: 'Mika', ai: true, text, ts: Date.now() };
  room.log.push(entry);
  if (room.log.length > MAX_ROOM_LOG) room.log.shift();
  room.members.forEach((m) => { send(m.ws, entry); });
  if (counts !== false) {
    room.companion.replies++;
    room.companion.spoke = true;
    stats.aiMessage();
    sendRoom(room, { t: 'room', room: roomView(room) });
  }
}

async function companionTurn(room, kind) {
  const c = room.companion;
  if (!c || c.busy || !aiActive(room)) return;
  c.busy = true;
  typing(room, true);
  let ok = false;
  try {
    const system = COMPANION_SYSTEM + ' Thème choisi par la personne : « ' + room.theme + ' ». Son pseudo : ' + room.hostNick + '.';
    let messages;
    if (kind === 'open') {
      messages = [{ role: 'user', content: '[Système] La conversation vient de commencer. Écris ton premier message : salue ' + room.hostNick + ' avec chaleur, dis en une phrase que tu es Mika, l’IA de Talkie, et que tu tiens compagnie en attendant que quelqu’un arrive, puis pose une question facile et fun sur le thème. 30 mots maximum.' }];
    } else {
      messages = ai.normalize(
        room.log.slice(-14).map((e) => ({ role: e.ai ? 'assistant' : 'user', content: e.text })),
        '[Système] La conversation vient de commencer.'
      );
    }
    const text = clean(await ai.complete({ system, messages, maxTokens: 220 }), 600);
    // Quelqu'un est arrivé pendant la réponse, ou la room a disparu : on se tait.
    if (rooms.get(room.id) === room && room.members.size === 1 && text) { postAI(room, text); ok = true; }
  } catch (e) {
    console.warn('[talkie] assistant indisponible :', e.message);
  } finally {
    c.busy = false;
    if (rooms.get(room.id) === room) typing(room, false);
  }
  // Un message est arrivé pendant que l'assistant écrivait : il y répond ensuite.
  if (c.pending) {
    c.pending = false;
    if (ok && rooms.get(room.id) === room && aiActive(room)) setImmediate(() => companionTurn(room, 'reply'));
  }
}

/* ---------- Anti-bots (Cloudflare Turnstile) et majorité ---------- */
// Supabase : l'URL et la clé « publishable » sont publiques par conception (la sécurité vient des règles RLS, voir supabase.sql).
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://xbyablplpwuqnggoeekp.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_gZ4HTzxDwBD4Cx2isJyzhw_GFVZf3z6';
const TURNSTILE_SITE = process.env.TURNSTILE_SITE_KEY || '';
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || '';
const TURNSTILE_VERIFY_URL = process.env.TURNSTILE_VERIFY_URL || 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const verified = new Map(); // cid -> expiration
const VERIFY_TTL_MS = 12 * 60 * 60 * 1000;
function isVerified(cid) {
  if (!TURNSTILE_SITE || !TURNSTILE_SECRET) return true;
  const e = verified.get(cid);
  return !!e && e > Date.now();
}
async function verifyTurnstile(token, ip) {
  const body = new URLSearchParams({ secret: TURNSTILE_SECRET, response: String(token || '').slice(0, 2048) });
  if (ip) body.set('remoteip', ip);
  const r = await fetch(TURNSTILE_VERIFY_URL, { method: 'POST', body });
  const j = await r.json();
  return !!(j && j.success);
}
function modLog(kind, c, extra) {
  const line = Object.assign({ at: new Date().toISOString(), kind, pid: c.pid }, extra || {});
  console.log('[talkie] MODÉRATION', JSON.stringify(line));
  fs.appendFile(path.join(DATA_DIR, 'moderation.jsonl'), JSON.stringify(line) + '\n', () => {});
}
const CARE_TEXT = mika.CARE_TEXT;

/* ---------- Mika appelé avec @Mika dans une conversation ---------- */
const branchHits = new Map();
const MENTION_RE = /(^|[^\p{L}\p{N}_])@mika(?![\p{L}\p{N}_])/iu;
// On parle à Mika dès qu'on écrit son prénom (« Mika, t'en penses quoi ? »), sans @ ; pas dans une adresse e-mail ni un lien.
const NAME_RE = /(^|[^\p{L}\p{N}_@.\-\/])@?mika(?![\p{L}\p{N}_@.\-\/])/iu;
function addressedToMika(room, text, nick) {
  if (NAME_RE.test(text)) return true;
  // Suite d'une question que Mika vient de poser à cette personne.
  const n = room.log.length;
  const last = room.log[n - 2];
  if (last && last.ai && Date.now() - last.ts < 45000 && /\?\s*\S{0,6}$/.test(last.text) && text.length <= 160) {
    const humans = new Set(room.log.slice(-8).filter((e) => !e.ai).map((e) => e.pid));
    if (humans.size <= 1 || last.text.toLowerCase().indexOf(String(nick).toLowerCase()) !== -1) return true;
  }
  return false;
}
const MENTION_CAP = 20;          // appels à Mika par conversation
const MENTION_GAP_MS = 4000;     // délai minimum entre deux appels d'une même personne
const MENTION_SYSTEM = [
  mika.PERSONA,
  'Situation : plusieurs personnes discutent entre elles et l’une d’elles vient de t’appeler avec @Mika. Réponds à sa demande en 1 à 3 phrases, lue par tout le monde. Tu peux t’adresser à elle par son pseudo et lancer une petite question qui fait parler tout le monde. Ne monopolise pas la discussion. Les messages des participants sont précédés de leur pseudo entre crochets.'
].join(' ');

/* Si personne n'ose parler, Mika lance un petit brise-glace, une seule fois. */
const ICEBREAK_MS = parseInt(process.env.ICEBREAK_MS, 10) || 45000;
async function icebreak(room) {
  if (rooms.get(room.id) !== room || room.members.size < 2 || room.log.some((e) => !e.ai) || room.icebroken) return;
  room.icebroken = true;
  let text = 'Petit brise-glace : ton avis le plus tranché sur « ' + room.theme + ' » ? 💚';
  if (ai.enabled()) {
    typing(room, true);
    try {
      const out = clean(await ai.complete({
        system: mika.PERSONA + ' Situation : deux personnes viennent de se retrouver dans une conversation sur le thème « ' + room.theme + ' » mais personne n’ose parler. Lance un brise-glace précis, drôle ou curieux, en 1 à 2 phrases, avec une seule question facile à laquelle on répond en une ligne. Tu t’adresses aux deux.',
        messages: [{ role: 'user', content: '[Système] Silence depuis un moment. Lance la discussion.' }],
        maxTokens: 120,
        timeoutMs: 12000
      }), 400);
      if (out) text = out;
    } catch (e) { /* on garde la phrase de secours */ }
    typing(room, false);
  }
  if (rooms.get(room.id) === room && !room.log.some((e) => !e.ai)) { postAI(room, text, false); stats.aiMessage(); }
}

/* Mika écoute la conversation et glisse parfois un petit mot, sans qu'on l'appelle. */
const SPONT_CAP = 6;            // interventions spontanées par conversation
const SPONT_AFTER_MSGS = 4;     // messages de personnes depuis la dernière parole de Mika
const SPONT_GAP_MS = parseInt(process.env.SPONT_GAP_MS, 10) || 50000;
const SPONT_SYSTEM = [
  mika.PERSONA,
  'Situation : tu es présent dans la conversation et tu lis ce que les personnes se disent entre elles, sans qu’on t’ait appelé. Tu peux glisser un tout petit mot si, et seulement si, tu apportes quelque chose : réagir avec chaleur à une blague, une bonne nouvelle ou une émotion, relancer avec une question précise liée à ce qui vient d’être dit, aider si la discussion s’éteint, ou valoriser quelqu’un. 1 phrase courte (2 au maximum), en t’adressant à la personne par son pseudo ou à tout le monde. Ne résume pas, ne donne pas de leçon, ne coupe pas un échange qui va bien entre deux personnes. S’il n’y a rien d’utile à ajouter, réponds exactement : SILENCE. Les messages sont précédés du pseudo entre crochets.'
].join(' ');
async function spontaneousTurn(room) {
  if (rooms.get(room.id) !== room || !ai.enabled() || room.mentionBusy || room.spontBusy) return;
  if ((room.spont || 0) >= SPONT_CAP) return;
  room.spontBusy = true;
  try {
    const messages = ai.normalize(
      room.log.slice(-14).map((e) => (e.ai ? { role: 'assistant', content: e.text } : { role: 'user', content: '[' + clean(e.nick, 20) + '] ' + e.text })),
      '[Système] La conversation vient de commencer.'
    );
    if (messages[messages.length - 1].role !== 'user') return;
    const text = clean(await ai.complete({ system: SPONT_SYSTEM + ' Thème : « ' + room.theme + ' ».', messages, maxTokens: 120, timeoutMs: 12000 }), 400);
    if (!text || /^SILENCE\b/i.test(text) || rooms.get(room.id) !== room) { room.sinceMika = 2; return; }
    room.spont = (room.spont || 0) + 1;
    typing(room, true);
    await new Promise((r) => setTimeout(r, 700 + Math.min(1500, text.length * 25)));
    typing(room, false);
    if (rooms.get(room.id) === room) { postAI(room, text, false); stats.aiMessage(); }
  } catch (e) { console.warn('[talkie] Mika (spontané) :', e.message); } finally { room.spontBusy = false; }
}
function watchRoom(room) {
  room.sinceMika = (room.sinceMika || 0) + 1;
  const stamp = room.log.length;
  if (room.sinceMika < SPONT_AFTER_MSGS || Date.now() - (room.lastMikaAt || 0) < SPONT_GAP_MS || !ai.enabled()) return;
  // On attend un court instant : si la conversation continue vite, Mika reste discret.
  setTimeout(() => {
    if (rooms.get(room.id) !== room || room.log.length !== stamp) return;
    room.sinceMika = 0;
    spontaneousTurn(room);
  }, SPONT_DELAY_MS);
}
const SPONT_DELAY_MS = parseInt(process.env.SPONT_DELAY_MS, 10) || 3500;

async function mentionTurn(room, c, ws) {
  if (!ai.enabled()) return;
  const now = Date.now();
  if (c.lastMention && now - c.lastMention < MENTION_GAP_MS) { send(ws, { t: 'error', text: 'Laisse un instant à Mika avant de le rappeler.' }); return; }
  if ((room.mentions || 0) >= MENTION_CAP) { send(ws, { t: 'error', text: 'Mika a beaucoup parlé ici, il se repose pour cette conversation.' }); return; }
  if (room.mentionBusy) { send(ws, { t: 'error', text: 'Mika est déjà en train de répondre.' }); return; }
  c.lastMention = now;
  room.mentions = (room.mentions || 0) + 1;
  room.mentionBusy = true;
  typing(room, true);
  try {
    const system = MENTION_SYSTEM + ' Thème de la conversation : « ' + room.theme + ' ». Personne qui t’appelle : ' + c.nick + '.';
    const messages = ai.normalize(
      room.log.slice(-14).map((e) => (e.ai
        ? { role: 'assistant', content: e.text }
        : { role: 'user', content: '[' + clean(e.nick, 20) + '] ' + e.text })),
      '[Système] La conversation vient de commencer.'
    );
    if (messages[messages.length - 1].role !== 'user') return;
    const text = clean(await ai.complete({ system, messages, maxTokens: 260 }), 700);
    if (text && rooms.get(room.id) === room) { postAI(room, text, false); stats.aiMessage(); }
  } catch (e) {
    console.warn('[talkie] Mika (mention) indisponible :', e.message);
    send(ws, { t: 'error', text: 'Mika ne répond pas pour le moment.' });
  } finally {
    room.mentionBusy = false;
    if (rooms.get(room.id) === room) typing(room, false);
  }
}


/* ---------- La Place : monde 3D partagé. Positions, emotes et petits messages (80 caractères, mêmes filtres que les visites). ---------- */
const PLAZA_MAX = 12;

const PLAZA_EMOTES = ['wave', 'heart', 'happy', 'dance', 'wow'];
const plazas = []; // chaque shard : Map ws -> {pid,nick,av,x,z}
function plazaOf(ws) { return plazas.find((sh) => sh.has(ws)); }
function plazaSend(sh, from, obj) {
  const f = sh.get(from);
  sh.forEach((_m, w) => { const c = clients.get(w); if (w === from || (c && f && blockedEitherWay(c.pid, f.pid))) return; send(w, obj); });
}
function plazaLeave(ws) {
  const sh = plazaOf(ws); if (!sh) return;
  const m = sh.get(ws); sh.delete(ws);
  if (m) sh.forEach((_x, w) => send(w, { t: 'pl', pid: m.pid }));
  const i = plazas.indexOf(sh); if (!sh.size && i >= 0) plazas.splice(i, 1);
  scheduleLobby();
}
function plazaJoin(ws, c) {
  if (plazaOf(ws)) return;
  let sh = plazas.find((x) => x.size < PLAZA_MAX);
  if (!sh) { sh = new Map(); plazas.push(sh); }
  const me = { pid: c.pid, nick: c.nick, av: c.av || '', x: (Math.random() - 0.5) * 3, z: 1.5 + Math.random() * 2, last: 0, lastE: 0 };
  const list = [];
  sh.forEach((m, w) => { const oc = clients.get(w); if (oc && !blockedEitherWay(oc.pid, c.pid)) list.push({ pid: m.pid, nick: m.nick, av: m.av, x: m.x, z: m.z }); });
  sh.set(ws, me);
  send(ws, { t: 'plaza', me: { pid: me.pid, x: me.x, z: me.z }, list });
  scheduleLobby();
  plazaSend(sh, ws, { t: 'pj', p: { pid: me.pid, nick: me.nick, av: me.av, x: me.x, z: me.z } });
}

/* ---------- Visites : inviter quelqu'un dans sa chambre et la parcourir à deux (positions, emotes, petits messages modérés) ---------- */
const HOME_MAX_GUESTS = 3;
const homes = new Map(); // pid de l'hôte -> { ws, pid, nick, av, decor, acc, x, z, guests: Map(pid -> {ws,pid,nick,av,x,z}) }
function wsOfPid(pid) { let f = null; clients.forEach((c, w) => { if (c.cid && c.pid === pid) f = w; }); return f; }
function idList(a, n) { return (Array.isArray(a) ? a : []).slice(0, n).map((x) => String(x)).filter((x) => /^[a-z0-9_]{1,16}$/.test(x)); }
function homeOf(ws) {
  const c = clients.get(ws); if (!c) return null;
  if (homes.has(c.pid) && homes.get(c.pid).ws === ws) return { h: homes.get(c.pid), me: homes.get(c.pid), host: true };
  let f = null; homes.forEach((h) => { const g = h.guests.get(c.pid); if (g && g.ws === ws) f = { h, me: g, host: false }; });
  return f;
}
function homeSendAll(h, except, obj, fromPid) {
  const ok = (pid) => !fromPid || pid === fromPid || !blockedEitherWay(pid, fromPid);
  if (h.ws !== except && ok(h.pid)) send(h.ws, obj);
  h.guests.forEach((g) => { if (g.ws !== except && ok(g.pid)) send(g.ws, obj); });
}
function homeLeave(ws) {
  const r = homeOf(ws); if (!r) return;
  const { h } = r;
  if (r.host) { h.guests.forEach((g) => send(g.ws, { t: 'hend', pid: h.pid })); homes.delete(h.pid); }
  else { h.guests.delete(r.me.pid); homeSendAll(h, ws, { t: 'hg-', pid: r.me.pid }); }
}
const HOME_EMOTES = ['wave', 'heart', 'happy', 'dance', 'wow'];

function handle(ws, msg) {
  const c = clients.get(ws);
  if (!c || !msg || typeof msg.t !== 'string') return;

  if (msg.t === 'hello') {
    const cid = clean(msg.cid, 64);
    if (!/^[A-Za-z0-9-]{16,64}$/.test(cid)) { ws.close(); return; }
    const old = byCid.get(cid);
    if (old && old !== ws) { send(old, { t: 'replaced' }); try { old.close(); } catch (e) { /* ignore */ } }
    c.cid = cid;
    c.pid = pidOf(cid);
    c.nick = clean(msg.nick, 20) || 'Anonyme';
    c.av = avOf(msg.av);
    c.blocked = new Set((Array.isArray(msg.blocked) ? msg.blocked : []).slice(0, 200).map((x) => clean(x, 12)).filter(Boolean));
    blocksOf.set(c.pid, c.blocked);
    c.friends = new Set((Array.isArray(msg.friends) ? msg.friends : []).slice(0, 100).map((x) => clean(x, 12)).filter(Boolean));
    c.visible = msg.visible !== false;
    c.adult = msg.adult === true;
    byCid.set(cid, ws);
    stats.visit(c.pid);
    send(ws, { t: 'welcome', pid: c.pid, push: subs.has(c.pid), ai: ai.configured(), gif: !!GIPHY_KEY, verified: isVerified(cid) });
    // Reprise d'une conversation après une coupure
    let resumed = false;
    rooms.forEach((r) => { if (!resumed && r.members.has(cid)) resumed = attach(ws, r); });
    scheduleLobby();
    return;
  }
  if (!c.cid) return;

  switch (msg.t) {
    case 'friends': {
      c.friends = new Set((Array.isArray(msg.list) ? msg.list : []).slice(0, 100).map((x) => clean(x, 12)).filter(Boolean));
      scheduleLobby();
      return;
    }
    case 'hinv': {
      if (!c.adult) return;
      const to = clean(msg.to, 12), tw = wsOfPid(to), tc = tw && clients.get(tw);
      const now = Date.now();
      if (!tc || to === c.pid || blockedEitherWay(c.pid, to)) { send(ws, { t: 'error', text: 'Cette personne n’est plus là.' }); return; }
      if (c.lastHinv && now - c.lastHinv < 8000) { send(ws, { t: 'error', text: 'Doucement : une invitation à la fois 💚' }); return; }
      c.lastHinv = now;
      let h = homes.get(c.pid);
      if (!h) { h = { ws, pid: c.pid, nick: c.nick, av: c.av || '', decor: [], acc: [], x: 0.2, z: 1.2, guests: new Map() }; homes.set(c.pid, h); }
      h.ws = ws; h.nick = c.nick; h.av = c.av || ''; h.decor = idList(msg.decor, 20); h.acc = idList(msg.acc, 8);
      send(tw, { t: 'hinv', from: { pid: c.pid, nick: c.nick, av: c.av || '' } });
      send(ws, { t: 'hsent', to: tc.nick });
      return;
    }
    case 'hacc': {
      if (!c.adult) return;
      const h = homes.get(clean(msg.host, 12));
      if (!h || !h.ws || blockedEitherWay(c.pid, h.pid)) { send(ws, { t: 'error', text: 'La visite est terminée.' }); return; }
      if (h.guests.size >= HOME_MAX_GUESTS) { send(ws, { t: 'error', text: 'La chambre est pleine pour le moment.' }); return; }
      homeLeave(ws);
      const g = { ws, pid: c.pid, nick: c.nick, av: c.av || '', x: -1 + Math.random() * 2, z: 2 + Math.random() };
      const others = [];
      h.guests.forEach((o) => { if (!blockedEitherWay(c.pid, o.pid)) others.push({ pid: o.pid, nick: o.nick, av: o.av, x: o.x, z: o.z }); });
      h.guests.set(c.pid, g);
      send(ws, { t: 'hjoin', host: { pid: h.pid, nick: h.nick, av: h.av, decor: h.decor, acc: h.acc, x: h.x, z: h.z }, me: { x: g.x, z: g.z }, others });
      send(h.ws, { t: 'hg+', p: { pid: g.pid, nick: g.nick, av: g.av, x: g.x, z: g.z } });
      h.guests.forEach((o) => { if (o.ws !== ws && !blockedEitherWay(c.pid, o.pid)) send(o.ws, { t: 'hg+', p: { pid: g.pid, nick: g.nick, av: g.av, x: g.x, z: g.z } }); });
      return;
    }
    case 'hpos': {
      const r = homeOf(ws); if (!r) return;
      const now = Date.now(); if (now - (r.me.last || 0) < 90) return; r.me.last = now;
      const x = Number(msg.x), z = Number(msg.z); if (!isFinite(x) || !isFinite(z)) return;
      r.me.x = Math.max(-6.6, Math.min(6.6, x)); r.me.z = Math.max(-3.4, Math.min(3.6, z));
      homeSendAll(r.h, ws, { t: 'hp', pid: r.me.pid, x: r.me.x, z: r.me.z }, r.me.pid);
      return;
    }
    case 'hemo': {
      const r = homeOf(ws); if (!r || HOME_EMOTES.indexOf(msg.k) < 0) return;
      const now = Date.now(); if (now - (r.me.lastE || 0) < 900) return; r.me.lastE = now;
      homeSendAll(r.h, ws, { t: 'he', pid: r.me.pid, k: msg.k }, r.me.pid);
      return;
    }
    case 'hsay': {
      const r = homeOf(ws); if (!r) return;
      const text = clean(msg.text, 80); if (!text) return;
      const now = Date.now(); if (now - (r.me.lastS || 0) < 1200) return; r.me.lastS = now;
      const a = mod.analyse(text);
      if (a.level === 'care') { send(ws, { t: 'error', text: 'Je suis là si tu as besoin de parler 💚 Le 3114 (gratuit, 24 h sur 24) peut aussi t’écouter.' }); return; }
      if (a.level === 'block' || (a.level === 'suspect' && a.hard)) { send(ws, { t: 'error', text: a.msg || 'Ce message ne peut pas être envoyé ici.' }); return; }
      if (mod.botLike(c.cid, text)) return;
      homeSendAll(r.h, null, { t: 'hs', pid: r.me.pid, text, nick: c.nick }, r.me.pid);
      return;
    }
    case 'hleave': { homeLeave(ws); return; }
    case 'plaza': {
      if (!msg.on) { plazaLeave(ws); return; }
      if (!c.adult) { send(ws, { t: 'error', code: 'adult', text: 'Talkie est réservé aux personnes majeures (18 ans et plus).' }); return; }
      plazaJoin(ws, c);
      return;
    }
    case 'wpos': {
      const sh = plazaOf(ws); if (!sh) return;
      const m = sh.get(ws), now = Date.now();
      if (now - m.last < 90) return;
      m.last = now;
      const x = Number(msg.x), z = Number(msg.z);
      if (!isFinite(x) || !isFinite(z)) return;
      m.x = Math.max(-5.2, Math.min(5.2, x)); m.z = Math.max(-3.2, Math.min(4.2, z));
      plazaSend(sh, ws, { t: 'pm', pid: m.pid, x: m.x, z: m.z });
      return;
    }
    case 'psay': {
      const sh = plazaOf(ws); if (!sh) return;
      const m = sh.get(ws), text = clean(msg.text, 80); if (!text) return;
      const now = Date.now(); if (now - (m.lastS || 0) < 1500) return; m.lastS = now;
      const a = mod.analyse(text);
      if (a.level === 'care') { send(ws, { t: 'error', text: 'Je suis là si tu as besoin de parler 💚 Le 3114 (gratuit, 24 h sur 24) peut aussi t’écouter.' }); return; }
      if (a.level === 'block' || (a.level === 'suspect' && a.hard)) { send(ws, { t: 'error', text: a.msg || 'Ce message ne peut pas être envoyé ici.' }); return; }
      if (mod.botLike(c.cid, text)) return;
      plazaSend(sh, ws, { t: 'ps', pid: m.pid, text });
      return;
    }
    case 'emote': {
      const sh = plazaOf(ws); if (!sh) return;
      const m = sh.get(ws), now = Date.now();
      if (now - m.lastE < 900 || PLAZA_EMOTES.indexOf(msg.k) < 0) return;
      m.lastE = now;
      plazaSend(sh, ws, { t: 'pe', pid: m.pid, k: msg.k });
      return;
    }
    case 'nick': {
      const n = clean(msg.nick, 20);
      if (!n) return;
      c.nick = n;
      if (msg.av !== undefined) c.av = avOf(msg.av);
      if (c.roomId) {
        const room = rooms.get(c.roomId);
        const m = room && room.members.get(c.cid);
        if (m) { m.nick = n; m.av = c.av; if (room.hostPid === c.pid) room.hostNick = n; sendRoom(room, { t: 'room', room: roomView(room) }); }
      }
      scheduleLobby();
      return;
    }
    case 'vis':
      c.visible = !!msg.v;
      return;
    case 'adult':
      c.adult = msg.v === true;
      return;
    case 'block': {
      const pid = clean(msg.pid, 12);
      if (!pid || pid === c.pid) return;
      c.blocked.add(pid);
      scheduleLobby();
      return;
    }
    case 'invite': {
      if (c.roomId) return;
      if (!c.adult) { send(ws, { t: 'error', code: 'adult', text: 'Talkie est réservé aux personnes majeures (18 ans et plus).' }); return; }
      if (!isVerified(c.cid)) { send(ws, { t: 'needverify' }); send(ws, { t: 'error', text: 'Vérification en cours, réessaie dans un instant.' }); return; }
      const now = Date.now();
      if (c.lastInvite && now - c.lastInvite < INVITE_COOLDOWN_MS) { send(ws, { t: 'error', text: 'Attends quelques secondes avant de publier un autre thème.' }); return; }
      const theme = clean(msg.theme, 60);
      if (!theme) return;
      const max = Math.min(4, Math.max(2, parseInt(msg.max, 10) || 2));
      c.lastInvite = now;
      const id = 't' + crypto.randomBytes(5).toString('hex');
      const room = {
        id, theme, max, hostPid: c.pid, hostNick: c.nick, createdAt: now, convoStart: null,
        members: new Map(), log: [], companion: { replies: 0, busy: false, spoke: false }
      };
      room.members.set(c.cid, { pid: c.pid, nick: c.nick, av: c.av, ws: null, timer: null });
      rooms.set(id, room);
      stats.invite();
      attach(ws, room);
      scheduleLobby();
      notifyInvite(room, c.pid);
      // Si personne n'arrive en quelques secondes, l'assistant lance la discussion.
      setTimeout(() => {
        if (rooms.get(id) === room && room.members.size === 1 && room.companion.replies === 0) companionTurn(room, 'open');
      }, 4000);
      return;
    }
    case 'join': {
      if (c.roomId) return;
      if (!c.adult) { send(ws, { t: 'error', code: 'adult', text: 'Talkie est réservé aux personnes majeures (18 ans et plus).' }); return; }
      if (!isVerified(c.cid)) { send(ws, { t: 'needverify' }); send(ws, { t: 'error', text: 'Vérification en cours, réessaie dans un instant.' }); return; }
      const room = rooms.get(clean(msg.id, 20));
      if (!room || room.members.size === 0) { send(ws, { t: 'error', text: 'Cette invitation n’est plus disponible.' }); scheduleLobby(); return; }
      if (room.members.size >= room.max) { send(ws, { t: 'error', text: 'Cette conversation est déjà complète.' }); scheduleLobby(); return; }
      let blocked = false;
      room.members.forEach((m) => { if (blockedEitherWay(c.pid, m.pid)) blocked = true; });
      if (blocked) { send(ws, { t: 'error', text: 'Cette invitation n’est plus disponible.' }); return; }
      room.members.set(c.cid, { pid: c.pid, nick: c.nick, av: c.av, ws: null, timer: null });
      stats.join();
      if (room.members.size === 2 && !room.convoStart) { room.convoStart = Date.now(); stats.convoStart(); }
      attach(ws, room);
      sendRoom(room, { t: 'sys', text: c.nick + ' a rejoint la conversation.' }, c.pid);
      if (room.companion && room.companion.spoke) {
        room.companion.spoke = false;
        postAI(room, mika.WELCOME_HUMAN, false);
      }
      typing(room, false);
      scheduleLobby();
      if (room.members.size >= 2 && !room.icebreakSet) {
        room.icebreakSet = true;
        setTimeout(() => icebreak(room), ICEBREAK_MS);
      }
      return;
    }
    case 'leave':
      leaveCurrent(ws);
      send(ws, { t: 'left' });
      return;
    case 'chat': {
      const room = c.roomId && rooms.get(c.roomId);
      if (!room) return;
      const gif = validGif(msg.gif);
      const text = gif ? '[GIF] ' + gif.title : cleanChat(msg.text, 500);
      if (!text) return;
      const now = Date.now();
      const left = mod.mutedFor(c.cid);
      if (left) { send(ws, { t: 'error', text: 'Tes messages sont en pause pour ' + Math.ceil(left / 60000) + ' min, suite à des avertissements.' }); return; }
      c.lastMsg = (c.lastMsg || []).filter((t) => now - t < 10000);
      if (c.lastMsg.length >= 15) { send(ws, { t: 'error', text: 'Doucement, tu écris trop vite.' }); return; }
      c.lastMsg.push(now);
      const refuse = (why, text) => {
        const st = mod.addStrike(c.cid);
        modLog('refus', c, { why, strikes: st.n, texte: text.slice(0, 120) });
        send(ws, { t: 'error', text: (why === 'coordonnées' ? 'Pour ta sécurité, les liens et coordonnées (e-mail, téléphone) ne sont pas autorisés ici.' : 'Ce message ne respecte pas les règles de respect de Talkie.') + (st.n >= 2 ? ' Avertissement ' + st.n + '.' : '') });
      };
      const deliver = () => {
        const entry = { t: 'chat', pid: c.pid, nick: c.nick, av: c.av, text, ts: Date.now() };
        if (gif) entry.gif = gif;
        room.log.push(entry);
        if (room.log.length > MAX_ROOM_LOG) room.log.shift();
        room.members.forEach((m) => {
          if (!m.ws) return;
          if (m.pid !== c.pid && blockedEitherWay(m.pid, c.pid)) return;
          send(m.ws, entry);
        });
        stats.message();
        if (aiActive(room)) {
          if (room.companion.busy) room.companion.pending = true;
          else companionTurn(room, 'reply');
        } else if (!gif && addressedToMika(room, text, c.nick)) {
          mentionTurn(room, c, ws);
        } else if (!gif) {
          watchRoom(room);
        }
      };
      if (gif) { deliver(); return; }
      if (mod.botLike(c.cid, text)) { refuse('répétition', text); return; }
      const a = mod.analyse(text);
      if (a.level === 'block') { refuse(a.reason, text); return; }
      if (a.level === 'care') {
        deliver();
        if (!room.careAt || now - room.careAt > 30 * 60 * 1000) {
          room.careAt = now;
          modLog('soutien', c, {});
          setTimeout(() => { if (rooms.get(room.id) === room) postAI(room, CARE_TEXT, false); }, 1200);
        }
        return;
      }
      if (a.level === 'suspect') {
        const ctx = room.log.slice(-4).map((e) => '[' + clean(e.nick, 20) + '] ' + e.text);
        mod.verdict(ctx, text).then((v) => {
          if (v === 'BLOCK' || (v === null && a.hard)) refuse(a.reason, text);
          else deliver();
        });
        return;
      }
      deliver();
      return;
    }
    case 'report': {
      const room = c.roomId && rooms.get(c.roomId);
      const target = clean(msg.pid, 12);
      const line = {
        at: new Date().toISOString(),
        reporter: c.pid,
        reported: target,
        reason: clean(msg.reason, 200),
        context: room ? room.log.slice(-15).map((e) => ({ pid: e.pid, nick: e.nick, text: e.text })) : []
      };
      console.log('[talkie] SIGNALEMENT', JSON.stringify(line));
      fs.appendFile(path.join(DATA_DIR, 'reports.jsonl'), JSON.stringify(line) + '\n', () => {});
      send(ws, { t: 'reported' });
      return;
    }
  }
}

function onClose(ws) {
  plazaLeave(ws);
  homeLeave(ws);
  const c = clients.get(ws);
  clients.delete(ws);
  if (!c || !c.cid) return;
  if (byCid.get(c.cid) === ws) byCid.delete(c.cid);
  if (c.roomId) {
    const room = rooms.get(c.roomId);
    const m = room && room.members.get(c.cid);
    if (m && m.ws === ws) {
      m.ws = null;
      clearTimeout(m.timer);
      m.timer = setTimeout(() => removeMember(room, c.cid), GRACE_MS);
      sendRoom(room, { t: 'room', room: roomView(room) });
    }
  }
  scheduleLobby();
}

/* ---------- HTTP ---------- */
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon'
};
function readBody(req, limit) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', (d) => { size += d.length; if (size > limit) { reject(new Error('too large')); req.destroy(); } else chunks.push(d); });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}
function json(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(obj));
}

function adminOk(req, url) {
  if (!ADMIN_KEY) return false;
  const given = String(url.searchParams.get('key') || req.headers['x-admin-key'] || '');
  const a = crypto.createHash('sha256').update(given).digest();
  const b = crypto.createHash('sha256').update(ADMIN_KEY).digest();
  return crypto.timingSafeEqual(a, b);
}

function esc(v) { return String(v).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch])); }

function renderAdmin(live, snap) {
  const rows = snap.days.map((d) => '<tr><td>' + esc(d.day) + '</td><td>' + d.visitors + '</td><td>' + d.returning + '</td><td>' + d.visits + '</td><td>' + d.pages +
    '</td><td>' + d.invites + '</td><td>' + d.joins + '</td><td>' + d.convos + '</td><td>' + d.avgConvoMin + '</td><td>' + d.messages + '</td><td>' + d.aiMessages + '</td><td>' + d.pushes + '</td></tr>').join('');
  const kpi = (label, value) => '<div class="k"><div class="v">' + esc(value) + '</div><div class="l">' + esc(label) + '</div></div>';
  return '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<meta name="robots" content="noindex"><title>Talkie · statistiques</title><style>' +
    ':root{color-scheme:light dark;--bg:#FFF6CC;--fg:#14213D;--card:#fff;--line:#E3D27A;--acc:#2459E0}' +
    '@media(prefers-color-scheme:dark){:root{--bg:#0F1B3D;--fg:#F4F7FF;--card:#172A5C;--line:#2D478F;--acc:#8FB2FF}}' +
    'body{margin:0;padding:20px 16px;background:var(--bg);color:var(--fg);font:15px/1.5 system-ui,sans-serif}main{max-width:980px;margin:0 auto}' +
    'h1{margin:0 0 4px;color:var(--acc)}p{margin:0 0 14px;opacity:.8}.g{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:14px 0 22px}' +
    '.k{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:12px 14px}.v{font-size:26px;font-weight:700}.l{font-size:13px;opacity:.75}' +
    '.t{overflow-x:auto;background:var(--card);border:1px solid var(--line);border-radius:14px}table{border-collapse:collapse;width:100%;font-variant-numeric:tabular-nums}' +
    'th,td{padding:8px 10px;text-align:right;white-space:nowrap}th:first-child,td:first-child{text-align:left}th{font-size:12px;opacity:.75;border-bottom:1px solid var(--line)}' +
    'tr+tr td{border-top:1px solid var(--line)}small{display:block;margin-top:14px;opacity:.7}</style></head><body><main>' +
    '<h1>Talkie</h1><p>Statistiques anonymes (aucun message n’est lu ni conservé).</p><div class="g">' +
    kpi('En ligne maintenant', live.online) + kpi('Invitations ouvertes', live.openInvites) + kpi('Abonnés aux notifications', live.subscribers) +
    kpi('Assistant IA', live.aiEnabled ? 'actif' : 'sans clé') + kpi('Appels IA aujourd’hui', live.aiUsedToday + ' / ' + live.aiDailyCap) + kpi('Thèmes du jour', live.themesSource === 'trends' ? 'tendances' : 'liste fixe') +
    '</div><div class="t"><table><thead><tr><th>Jour</th><th>Visiteurs</th><th>Revenants</th><th>Visites</th><th>Pages vues</th><th>Invitations</th><th>Rejoints</th><th>Conversations</th><th>Durée moy. (min)</th><th>Messages</th><th>Réponses IA</th><th>Notifications</th></tr></thead><tbody>' +
    rows + '</tbody></table></div><small>Visiteurs : appareils distincts dans la journée. Revenants : visiteurs déjà venus un autre jour. Visite : nouvelle ouverture après 30 minutes d’absence. Les compteurs sont perdus si le serveur gratuit est réinitialisé. Serveur démarré il y a ' + live.uptimeMin + ' min. ' + snap.knownVisitors + ' appareils connus depuis le démarrage.</small></main></body></html>';
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'same-origin');

  if (url.pathname === '/healthz') { res.writeHead(200); res.end('ok'); return; }
  if (url.pathname === '/api/vapid' && req.method === 'GET') { json(res, 200, { key: VAPID.publicKey }); return; }
  if (url.pathname === '/api/themes' && req.method === 'GET') {
    const t = trends.forRegion(url.searchParams.get('cc'), url.searchParams.get('city'), url.searchParams.get('lang'));
    json(res, 200, { themes: t.themes, items: t.items || [], source: t.source, updatedAt: t.updatedAt, pending: !!t.pending, cc: t.cc, city: t.city });
    return;
  }
  if (url.pathname === '/api/place' && req.method === 'GET') {
    try {
      const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim();
      json(res, 200, { items: await place.search(url.searchParams.get('q'), url.searchParams.get('lang'), ip) });
    } catch (e) { json(res, e.code || 503, { items: [], error: 'indisponible' }); }
    return;
  }
  if (url.pathname === '/api/branches' && req.method === 'GET') {
    const ip = req.socket.remoteAddress || '?';
    const now = Date.now();
    const hits = (branchHits.get(ip) || []).filter((t) => now - t < 60000);
    if (hits.length >= 20) { json(res, 429, { error: 'trop de demandes' }); return; }
    hits.push(now); branchHits.set(ip, hits);
    if (branchHits.size > 5000) branchHits.clear();
    const topic = clean(url.searchParams.get('topic'), 70);
    const path = clean(url.searchParams.get('path'), 240).split('|').filter(Boolean);
    if (topic.length < 2) { json(res, 400, { error: 'sujet' }); return; }
    const r = await branches.get(topic, path);
    json(res, 200, { items: r.items, ai: r.ai });
    return;
  }
  if ((url.pathname === '/admin' || url.pathname === '/api/stats') && req.method === 'GET') {
    if (!adminOk(req, url)) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Introuvable'); return; }
    const snap = stats.snapshot();
    let online = 0;
    clients.forEach((c) => { if (c.cid) online++; });
    let open = 0;
    rooms.forEach((r) => { if (r.members.size < r.max) open++; });
    const live = {
      online, openInvites: open, rooms: rooms.size,
      aiEnabled: !!process.env.ANTHROPIC_API_KEY, aiModel: ai.MODEL, aiUsedToday: ai.usedToday(), aiDailyCap: ai.DAILY_CAP,
      themesSource: trends.get().source, subscribers: subs.size, uptimeMin: Math.round(process.uptime() / 60)
    };
    res.setHeader('X-Robots-Tag', 'noindex');
    if (url.pathname === '/api/stats') { json(res, 200, { live, ...snap }); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(renderAdmin(live, snap));
    return;
  }

  if (url.pathname === '/api/gifs' && req.method === 'GET') {
    if (!GIPHY_KEY) { json(res, 200, { enabled: false, gifs: [] }); return; }
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim();
    const now = Date.now();
    const hits = (gifHits.get(ip) || []).filter((t) => now - t < 60000);
    if (hits.length >= 25) { json(res, 429, { error: 'trop de recherches' }); return; }
    hits.push(now);
    gifHits.set(ip, hits);
    if (gifHits.size > 2000) gifHits.clear();
    try {
      json(res, 200, { enabled: true, gifs: await searchGifs(clean(url.searchParams.get('q'), 50)) });
    } catch (e) {
      console.warn('[talkie] GIF indisponibles :', e.message);
      json(res, 502, { enabled: true, gifs: [], error: 'indisponible' });
    }
    return;
  }

  if (url.pathname === '/api/companion' && req.method === 'POST') {
    const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
    try {
      if (!rateOk('cmp:' + ip, 30, 60000)) { json(res, 429, { error: 'trop vite' }); return; }
      const body = JSON.parse((await readBody(req, 12000)) || '{}');
      const last = Array.isArray(body.messages) && body.messages.length ? body.messages[body.messages.length - 1] : null;
      if (body.kind === 'reply' && last && last.r === 'u' && mod.analyse(last.t).level === 'care') {
        json(res, 200, { say: body.ui === 'en' ? mika.CARE_TEXT_EN : mika.CARE_TEXT, e: 'worried', chips: body.ui === 'en' ? ['🫂 Thanks', '📞 3114 (France)'] : ['🫂 Merci Mika', '📞 Le 3114'], remember: [], follow: '', salon: false, mood: 1, care: true });
        return;
      }
      if (!ai.enabled()) { json(res, 200, companion.fallback(body)); return; }
      try {
        const out = await companion.turn(body);
        json(res, 200, out);
        // On prépare déjà la voix pendant que le téléphone reçoit le texte : la phrase est prête (en cache) quand il la demande.
        if (body.speak === true && tts.enabled()) tts.synth(out.voice || out.say, ip, { voice: String(body.vox || ''), lang: body.ui === 'en' ? 'en' : 'fr', emo: out.e }).catch(() => {});
      }
      catch (e) { console.warn('[talkie] compagnon indisponible :', e.message); json(res, 200, companion.fallback(body)); }
    } catch (e) { json(res, 400, { error: 'requête invalide' }); }
    return;
  }
  if (url.pathname === '/api/bobby' && req.method === 'POST') {
    const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
    try {
      if (!rateOk('bob:' + ip, 30, 60000)) { json(res, 429, { error: 'trop vite' }); return; }
      const body = JSON.parse((await readBody(req, 12000)) || '{}');
      const last = Array.isArray(body.messages) && body.messages.length ? body.messages[body.messages.length - 1] : null;
      if (body.kind !== 'start' && last && last.r === 'u') {
        const a = mod.analyse(last.t);
        if (a.level === 'care') { json(res, 200, Object.assign(bobby.blocked(body, body.ui === 'en' ? mika.CARE_TEXT_EN : mika.CARE_TEXT), { care: true, e: 'worried' })); return; }
        if (a.level === 'block' || (a.level === 'suspect' && a.hard)) { json(res, 200, bobby.blocked(body, a.msg)); return; }
      }
      if (!ai.enabled()) { json(res, 200, bobby.fallback(body)); return; }
      try { json(res, 200, await bobby.turn(body)); }
      catch (e) { console.warn('[talkie] Bobby indisponible :', e.message); json(res, 200, bobby.fallback(body)); }
    } catch (e) { json(res, 400, { error: 'requête invalide' }); }
    return;
  }
  if (url.pathname === '/api/config' && req.method === 'GET') {
    json(res, 200, { turnstile: TURNSTILE_SITE && TURNSTILE_SECRET ? TURNSTILE_SITE : null, tts: tts.enabled(), ttsRate: tts.PITCH, ttsVoices: tts.VOICES, ttsProv: tts.provider(), supabase: SUPABASE_URL && SUPABASE_KEY ? { url: SUPABASE_URL, key: SUPABASE_KEY } : null });
    return;
  }
  if (url.pathname === '/api/voice-check' && req.method === 'GET') {
    try { json(res, 200, await tts.check()); } catch (e) { json(res, 200, { ok: false, why: 'other', msg: 'Erreur inattendue' }); }
    return;
  }
  if (url.pathname === '/api/tts' && req.method === 'GET') {
    try {
      const buf = await tts.synth(url.searchParams.get('t') || '', String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim(), { voice: url.searchParams.get('v') || '', lang: url.searchParams.get('l') || '', emo: url.searchParams.get('e') || '' });
      res.writeHead(200, { 'content-type': 'audio/mpeg', 'content-length': buf.length, 'cache-control': 'public, max-age=86400' });
      res.end(buf);
    } catch (e) {
      res.writeHead(e.code || 503, { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' });
      res.end(e.message || 'voix indisponible');
    }
    return;
  }
  if (url.pathname === '/api/verify' && req.method === 'POST') {
    try {
      const body = JSON.parse(await readBody(req, 4096));
      const cid = clean(body.cid, 64);
      if (!/^[A-Za-z0-9-]{16,64}$/.test(cid)) { json(res, 400, { error: 'cid' }); return; }
      const ok = await verifyTurnstile(body.token, req.socket.remoteAddress);
      if (ok) {
        verified.set(cid, Date.now() + VERIFY_TTL_MS);
        const ws = byCid.get(cid);
        if (ws) send(ws, { t: 'verified' });
      }
      json(res, ok ? 200 : 403, { ok });
    } catch (e) { json(res, 400, { error: 'bad request' }); }
    return;
  }

  if (url.pathname === '/api/push' && (req.method === 'POST' || req.method === 'DELETE')) {
    try {
      const body = JSON.parse(await readBody(req, 8192));
      const cid = clean(body.cid, 64);
      if (!/^[A-Za-z0-9-]{16,64}$/.test(cid)) { json(res, 400, { error: 'cid' }); return; }
      const pid = pidOf(cid);
      if (req.method === 'DELETE') { subs.delete(pid); saveSubs(); json(res, 200, { ok: true }); return; }
      const s = body.sub;
      if (!s || typeof s.endpoint !== 'string' || !/^https:\/\//.test(s.endpoint) || !s.keys || !s.keys.p256dh || !s.keys.auth) {
        json(res, 400, { error: 'sub' }); return;
      }
      subs.set(pid, { sub: { endpoint: s.endpoint, keys: { p256dh: String(s.keys.p256dh), auth: String(s.keys.auth) } }, last: 0 });
      saveSubs();
      json(res, 200, { ok: true });
    } catch (e) { json(res, 400, { error: 'bad request' }); }
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return; }
  let rel = decodeURIComponent(url.pathname);
  if (rel === '/') rel = '/index.html';
  if (rel === '/index.html' && req.method === 'GET' && !/bot|spider|uptime|crawl/i.test(req.headers['user-agent'] || '')) stats.page();
  const file = path.normalize(path.join(PUBLIC_DIR, rel));
  if (!file.startsWith(PUBLIC_DIR + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Introuvable'); return; }
    const ext = path.extname(file).toLowerCase();
    // Le code (html, js, css…) est toujours revalidé : une mise à jour est vue tout de suite, jamais un vieux mélange.
    const longCache = /\.(woff2|png|jpg|jpeg|webp|ico|svg)$/.test(ext ? rel : '');
    const etag = 'W/"' + data.length + '-' + require('crypto').createHash('md5').update(data).digest('hex').slice(0, 16) + '"';
    if (!longCache && req.headers['if-none-match'] === etag) { res.writeHead(304, { ETag: etag, 'Cache-Control': 'no-cache' }); res.end(); return; }
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': longCache ? 'public, max-age=86400' : 'no-cache',
      ...(longCache ? {} : { ETag: etag })
    });
    res.end(req.method === 'HEAD' ? undefined : data);
  });
});

/* ---------- WebSocket ---------- */
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 4096 });
wss.on('connection', (ws, req) => {
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim();
  let same = 0;
  clients.forEach((c) => { if (c.ip === ip) same++; });
  if (same >= 30) { ws.close(); return; }
  clients.set(ws, { cid: null, ip, roomId: null, visible: true, blocked: new Set(), lastMsg: [] });
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });
  ws.on('message', (raw) => {
    let msg;
    try { msg = JSON.parse(raw.toString()); } catch (e) { return; }
    try { handle(ws, msg); } catch (e) { console.error('[talkie] erreur', e); }
  });
  ws.on('close', () => onClose(ws));
  ws.on('error', () => {});
});
setInterval(() => {
  wss.clients.forEach((ws) => {
    if (!ws.isAlive) { ws.terminate(); return; }
    ws.isAlive = false;
    try { ws.ping(); } catch (e) { /* ignore */ }
  });
}, 25000);

server.listen(PORT, () => {
  console.log('[talkie] http://localhost:' + PORT + (ai.enabled() ? ' · assistant IA actif' : ' · assistant IA inactif (pas de clé)'));
  trends.start();
});
process.on('SIGTERM', () => { stats.flush(); process.exit(0); });

module.exports = { server };
