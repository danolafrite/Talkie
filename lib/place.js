'use strict';
/* Trouve la ville (et son pays) que la personne a saisie : « Cologne » → Allemagne, pour que les actualités suivent.
   Utilise le service gratuit Open-Meteo (sans clé). */
const BASE = (process.env.GEOCODE_URL || 'https://geocoding-api.open-meteo.com/v1/search').replace(/\/$/, '');
const cache = new Map();
const hits = new Map();

function ipOk(ip) {
  const now = Date.now();
  const a = (hits.get(ip) || []).filter((t) => now - t < 60000);
  if (a.length >= 15) { hits.set(ip, a); return false; }
  a.push(now); hits.set(ip, a);
  if (hits.size > 3000) hits.clear();
  return true;
}
async function search(q, lang, ip) {
  const name = String(q || '').replace(/[^\p{L}\p{M}' .\-]/gu, '').trim().slice(0, 40);
  if (name.length < 2) return [];
  const l = /^(fr|en|es|de|it|pt|nl)$/.test(String(lang)) ? lang : 'fr';
  const key = name.toLowerCase() + '|' + l;
  if (cache.has(key)) return cache.get(key);
  if (!ipOk(ip || '')) throw Object.assign(new Error('trop de demandes'), { code: 429 });
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 6000);
  try {
    const r = await fetch(BASE + '?name=' + encodeURIComponent(name) + '&count=5&language=' + l + '&format=json', { signal: ctrl.signal });
    if (!r.ok) throw new Error('geocodage ' + r.status);
    const j = await r.json();
    const out = (j.results || []).filter((x) => x && /^[A-Za-z]{2}$/.test(x.country_code || '') && x.name).slice(0, 4).map((x) => ({
      city: String(x.name).slice(0, 40),
      cc: x.country_code.toUpperCase(),
      country: String(x.country || x.country_code).slice(0, 40),
      region: String(x.admin1 || '').slice(0, 40)
    }));
    if (cache.size > 500) cache.clear();
    cache.set(key, out);
    return out;
  } finally { clearTimeout(timer); }
}
module.exports = { search };
