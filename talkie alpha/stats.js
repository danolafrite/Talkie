'use strict';
/* Statistiques anonymes : aucun message, aucun pseudo, seulement des compteurs par jour. */
const fs = require('fs');
const path = require('path');

const KEEP_DAYS = 90;
const VISIT_GAP_MS = 30 * 60 * 1000; // une même personne compte une nouvelle visite après 30 min d'absence

function dayKey(d) { return (d || new Date()).toLocaleDateString('sv-SE', { timeZone: 'Europe/Paris' }); }

function create(dataDir) {
  const file = path.join(dataDir, 'stats.json');
  let state = { days: {}, firstSeen: {} };
  try { state = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { /* premier lancement */ }
  if (!state.days) state.days = {};
  if (!state.firstSeen) state.firstSeen = {};
  const lastSeen = new Map();
  let dirty = false;

  function today() {
    const k = dayKey();
    if (!state.days[k]) {
      state.days[k] = { pages: 0, visits: 0, visitors: [], returning: [], invites: 0, joins: 0, convos: 0, convoSeconds: 0, messages: 0, aiMessages: 0, pushes: 0 };
    }
    return state.days[k];
  }
  function prune() {
    const keys = Object.keys(state.days).sort();
    while (keys.length > KEEP_DAYS) delete state.days[keys.shift()];
    const limit = Object.keys(state.firstSeen).length;
    if (limit > 20000) state.firstSeen = {};
  }
  function touch() { dirty = true; }

  const api = {
    page() { today().pages++; touch(); },
    visit(pid) {
      const now = Date.now();
      const last = lastSeen.get(pid) || 0;
      lastSeen.set(pid, now);
      const d = today();
      const k = dayKey();
      if (!d.visitors.includes(pid)) {
        d.visitors.push(pid);
        if (!state.firstSeen[pid]) state.firstSeen[pid] = k;
        else if (state.firstSeen[pid] < k) d.returning.push(pid);
      }
      if (now - last > VISIT_GAP_MS) d.visits++;
      touch();
    },
    invite() { today().invites++; touch(); },
    join() { today().joins++; touch(); },
    convoStart() { today().convos++; touch(); },
    convoEnd(seconds) { today().convoSeconds += Math.max(0, Math.round(seconds)); touch(); },
    message() { today().messages++; touch(); },
    aiMessage() { today().aiMessages++; touch(); },
    push() { today().pushes++; touch(); },
    snapshot() {
      const days = Object.keys(state.days).sort().reverse().slice(0, 30).map((k) => {
        const d = state.days[k];
        return {
          day: k, pages: d.pages, visits: d.visits, visitors: d.visitors.length, returning: d.returning.length,
          invites: d.invites, joins: d.joins, convos: d.convos,
          avgConvoMin: d.convos ? Math.round((d.convoSeconds / d.convos) / 60 * 10) / 10 : 0,
          messages: d.messages, aiMessages: d.aiMessages, pushes: d.pushes
        };
      });
      return { days, knownVisitors: Object.keys(state.firstSeen).length };
    },
    flush() {
      if (!dirty) return;
      dirty = false;
      prune();
      try { fs.writeFileSync(file, JSON.stringify(state)); } catch (e) { /* disque indisponible */ }
    }
  };
  setInterval(api.flush, 30000).unref();
  return api;
}

module.exports = { create, dayKey };
