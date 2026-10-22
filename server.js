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

/* ---------- Clés de notification (VAPID) ---------- */
function loadVapid() {
  if (process.env.VAPID_PUBLIC && process.env.VAPID_PRIVATE) {
    return { publicKey: process.env.VAPID_PUBLIC, privateKey: process.env.VAPID_PRIVATE };
  }
  const file = path.join(DATA_DIR, 'vapid.json');
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { /* pas encore de fichier */ }
  const keys = webpush.generateVAPIDKeys();
  try { fs.writeFileSync(file, JSON.stringify(keys)); } catch (e) { /* ignore */ }
  console.warn('[tablee] Clés VAPID temporaires. Définis VAPID_PUBLIC et VAPID_PRIVATE pour que les notifications survivent aux redémarrages.');
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
const rooms = new Map();    // id -> { id, theme, max, hostPid, hostNick, members: Map<cid, {pid, nick, ws, timer}>, log: [] }
const blocksOf = new Map(); // pid -> Set<pid> (ceux que cette personne a bloqués)

const pidOf = (cid) => crypto.createHash('sha256').update('tablee:' + cid).digest('hex').slice(0, 12);

function clean(s, n) {
  return String(s == null ? '' : s)
    .replace(/[\u0000-\u001f\u007f-\u009f​-‏‪-‮⁠-⁯﻿]/g, ' ')
    .replace(/\s+/g, ' ').trim().slice(0, n);
}
function send(ws, obj) {
  if (ws && ws.readyState === 1) { try { ws.send(JSON.stringify(obj)); } catch (e) { /* ignore */ } }
}
function blockedEitherWay(a, b) {
  return (blocksOf.get(a) && blocksOf.get(a).has(b)) || (blocksOf.get(b) && blocksOf.get(b).has(a));
}
function roomMemberList(room) {
  return Array.from(room.members.values()).map((m) => ({ pid: m.pid, nick: m.nick, online: !!m.ws }));
}
function roomView(room) {
  return { id: room.id, theme: room.theme, max: room.max, host: room.hostPid, members: roomMemberList(room) };
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
      invites.push({ id: r.id, theme: r.theme, max: r.max, here: r.members.size, nick: r.hostNick });
    });
    send(ws, { t: 'lobby', online, invites });
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
  c.roomId = room.id;
  send(ws, { t: 'joined', room: roomView(room), log: room.log.filter((e) => !blockedEitherWay(c.pid, e.pid)) });
  sendRoom(room, { t: 'room', room: roomView(room) }, c.pid);
  return true;
}

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
    c.blocked = new Set((Array.isArray(msg.blocked) ? msg.blocked : []).slice(0, 200).map((x) => clean(x, 12)).filter(Boolean));
    blocksOf.set(c.pid, c.blocked);
    c.visible = msg.visible !== false;
    byCid.set(cid, ws);
    send(ws, { t: 'welcome', pid: c.pid, push: subs.has(c.pid) });
    // Reprise d'une conversation après une coupure
    let resumed = false;
    rooms.forEach((r) => { if (!resumed && r.members.has(cid)) resumed = attach(ws, r); });
    scheduleLobby();
    return;
  }
  if (!c.cid) return;

  switch (msg.t) {
    case 'nick': {
      const n = clean(msg.nick, 20);
      if (!n) return;
      c.nick = n;
      if (c.roomId) {
        const room = rooms.get(c.roomId);
        const m = room && room.members.get(c.cid);
        if (m) { m.nick = n; if (room.hostPid === c.pid) room.hostNick = n; sendRoom(room, { t: 'room', room: roomView(room) }); }
      }
      scheduleLobby();
      return;
    }
    case 'vis':
      c.visible = !!msg.v;
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
      const now = Date.now();
      if (c.lastInvite && now - c.lastInvite < INVITE_COOLDOWN_MS) { send(ws, { t: 'error', text: 'Attends quelques secondes avant de publier un autre thème.' }); return; }
      const theme = clean(msg.theme, 60);
      if (!theme) return;
      const max = Math.min(4, Math.max(2, parseInt(msg.max, 10) || 2));
      c.lastInvite = now;
      const id = 't' + crypto.randomBytes(5).toString('hex');
      const room = { id, theme, max, hostPid: c.pid, hostNick: c.nick, members: new Map(), log: [] };
      room.members.set(c.cid, { pid: c.pid, nick: c.nick, ws: null, timer: null });
      rooms.set(id, room);
      attach(ws, room);
      scheduleLobby();
      notifyInvite(room, c.pid);
      return;
    }
    case 'join': {
      if (c.roomId) return;
      const room = rooms.get(clean(msg.id, 20));
      if (!room || room.members.size === 0) { send(ws, { t: 'error', text: 'Cette invitation n’est plus disponible.' }); scheduleLobby(); return; }
      if (room.members.size >= room.max) { send(ws, { t: 'error', text: 'Cette conversation est déjà complète.' }); scheduleLobby(); return; }
      let blocked = false;
      room.members.forEach((m) => { if (blockedEitherWay(c.pid, m.pid)) blocked = true; });
      if (blocked) { send(ws, { t: 'error', text: 'Cette invitation n’est plus disponible.' }); return; }
      room.members.set(c.cid, { pid: c.pid, nick: c.nick, ws: null, timer: null });
      attach(ws, room);
      sendRoom(room, { t: 'sys', text: c.nick + ' a rejoint la conversation.' }, c.pid);
      scheduleLobby();
      return;
    }
    case 'leave':
      leaveCurrent(ws);
      send(ws, { t: 'left' });
      return;
    case 'chat': {
      const room = c.roomId && rooms.get(c.roomId);
      if (!room) return;
      const text = clean(msg.text, 500);
      if (!text) return;
      const now = Date.now();
      c.lastMsg = (c.lastMsg || []).filter((t) => now - t < 10000);
      if (c.lastMsg.length >= 15) { send(ws, { t: 'error', text: 'Doucement, tu écris trop vite.' }); return; }
      c.lastMsg.push(now);
      const entry = { t: 'chat', pid: c.pid, nick: c.nick, text, ts: now };
      room.log.push(entry);
      if (room.log.length > MAX_ROOM_LOG) room.log.shift();
      room.members.forEach((m) => {
        if (!m.ws) return;
        if (m.pid !== c.pid && blockedEitherWay(m.pid, c.pid)) return;
        send(m.ws, entry);
      });
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
      console.log('[tablee] SIGNALEMENT', JSON.stringify(line));
      fs.appendFile(path.join(DATA_DIR, 'reports.jsonl'), JSON.stringify(line) + '\n', () => {});
      send(ws, { t: 'reported' });
      return;
    }
  }
}

function onClose(ws) {
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
  '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon'
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

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'same-origin');

  if (url.pathname === '/healthz') { res.writeHead(200); res.end('ok'); return; }
  if (url.pathname === '/api/vapid' && req.method === 'GET') { json(res, 200, { key: VAPID.publicKey }); return; }

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
  const file = path.normalize(path.join(PUBLIC_DIR, rel));
  if (!file.startsWith(PUBLIC_DIR + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Introuvable'); return; }
    const ext = path.extname(file).toLowerCase();
    const noCache = rel === '/sw.js' || rel === '/index.html' || rel === '/manifest.webmanifest';
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': noCache ? 'no-cache' : 'public, max-age=86400'
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
    try { handle(ws, msg); } catch (e) { console.error('[tablee] erreur', e); }
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

server.listen(PORT, () => console.log('[tablee] http://localhost:' + PORT));

module.exports = { server };
