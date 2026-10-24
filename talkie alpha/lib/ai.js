'use strict';
/* Appels à l'API Claude, avec plafond quotidien pour maîtriser le coût. */
const BASE = (process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com').replace(/\/$/, '');
const KEY = process.env.ANTHROPIC_API_KEY || '';
const MODEL = process.env.AI_MODEL || 'claude-haiku-5-5';
const DAILY_CAP = parseInt(process.env.AI_DAILY_CAP, 10) || 1000;

let day = '';
let used = 0;
function budgetLeft() {
  const d = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Paris' });
  if (d !== day) { day = d; used = 0; }
  return used < DAILY_CAP;
}
function enabled() { return !!KEY && budgetLeft(); }
function configured() { return !!KEY; }
function usedToday() { budgetLeft(); return used; }

// L'API accepte des rôles qui alternent : on fusionne les messages consécutifs et on commence par "user".
function normalize(messages, firstUserText) {
  const out = [];
  messages.forEach((m) => {
    const last = out[out.length - 1];
    if (last && last.role === m.role) last.content += '\n' + m.content;
    else out.push({ role: m.role, content: m.content });
  });
  if (!out.length || out[0].role !== 'user') out.unshift({ role: 'user', content: firstUserText || '(La conversation commence.)' });
  return out;
}

async function complete(opts) {
  const { system, messages, maxTokens, timeoutMs, tools } = opts;
  if (!KEY) throw new Error('clé absente');
  if (!budgetLeft()) throw new Error('plafond quotidien atteint');
  used++;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs || 20000);
  try {
    const r = await fetch(BASE + '/v1/messages', {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'content-type': 'application/json', 'x-api-key': KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify(Object.assign({ model: MODEL, max_tokens: maxTokens || 220, system, messages }, tools ? { tools } : {}))
    });
    if (!r.ok) throw new Error('API ' + r.status);
    const j = await r.json();
    const out = (j.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('').trim();
    if (!out && !opts.allowEmpty) throw new Error('réponse vide (stop_reason=' + j.stop_reason + ', blocs=' + (j.content || []).map((b) => b.type).join('+') + ')');
    return out;
  } finally { clearTimeout(timer); }
}

module.exports = { enabled, configured, usedToday, complete, normalize, MODEL, DAILY_CAP };
