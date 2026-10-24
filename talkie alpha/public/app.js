(function () {
  'use strict';

  function $(id) { return document.getElementById(id); }
  var INVISIBLE = '\\u0000-\\u001f\\u007f-\\u009f\\u200b-\\u200f\\u202a-\\u202e\\u2060-\\u206f\\ufeff';
  var RE_CLEAN = new RegExp('[' + INVISIBLE + ']', 'g');
  // Pour les messages : on garde le joint de largeur nulle (U+200D) dont certains emojis ont besoin.
  var RE_CHAT = new RegExp('[\\u0000-\\u001f\\u007f-\\u009f\\u200b\\u200c\\u200e\\u200f\\u202a-\\u202e\\u2060-\\u206f\\ufeff]', 'g');
  function clean(s, n) { return String(s == null ? '' : s).replace(RE_CLEAN, ' ').replace(/\s+/g, ' ').trim().slice(0, n); }
  function chatClean(s, n) { return String(s == null ? '' : s).replace(RE_CHAT, ' ').replace(/[ \t]+/g, ' ').trim().slice(0, n); }
  function store(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v);
    } catch (e) { /* stockage indisponible */ }
    return null;
  }
  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    var a = new Uint8Array(16);
    (window.crypto || window.msCrypto).getRandomValues(a);
    return Array.prototype.map.call(a, function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  var NAMES = ['Hirondelle', 'Noisetier', 'Luciole', 'Marée', 'Brume', 'Cormoran', 'Sureau', 'Galet', 'Pervenche', 'Renard'];
  // Thèmes proposés en permanence (d'origine)
  var CHIPS = ['Les frites', 'Une journée difficile', 'Une série qui m’a marqué·e', 'Ce que je cuisine ce soir', 'Je veux juste discuter', 'Musique'];
  var TREND_ITEMS = [];
  var GIF_URL_RE = /^https:\/\/(?:media\d*|i)\.giphy\.com\/[A-Za-z0-9_\/.\-]{1,160}(?:\?[A-Za-z0-9_=&.\-%]{0,200})?$/;

  var cid = store('tablee.cid');
  if (!/^[A-Za-z0-9-]{16,64}$/.test(cid || '')) { cid = uuid(); store('tablee.cid', cid); }
  var nick = clean(store('tablee.nick'), 20) || (NAMES[Math.floor(Math.random() * NAMES.length)] + '-' + (10 + Math.floor(Math.random() * 90)));
  var blocked = [];
  try { blocked = JSON.parse(store('tablee.blocked') || '[]'); } catch (e) { blocked = []; }
  if (!Array.isArray(blocked)) blocked = [];

  var ws = null, open = false, replaced = false, retry = 0, retryTimer = null;
  var myPid = null, online = 0, invites = [], room = null, toastTimer = null, typingOn = false;
  var pushOn = false, aiOn = false, gifOn = false;
  var deferredInstall = null;
  var grp = { key: null, ts: 0 }, dayShown = false;

  /* ---------- Utilitaires ---------- */
  function toast(text) {
    var t = $('toast');
    t.textContent = text;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 5500);
  }
  function send(obj) {
    if (ws && ws.readyState === 1) { ws.send(JSON.stringify(obj)); return true; }
    return false;
  }
  function hhmm(ts) {
    try { return new Date(Number(ts) || Date.now()).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }); }
    catch (e) { return ''; }
  }
  function tint(str) {
    var n = 0, s = String(str || '');
    for (var i = 0; i < s.length; i++) n += s.charCodeAt(i);
    return ['b', 'g', 'y', 'p', '', 'b', 'g'][n % 7];
  }
  var ANIMALS = ['🦊', '🐼', '🐸', '🐙', '🦄', '🐧', '🐱', '🐰', '🐻', '🦋', '🐨', '🐯'];
  function animal(str) {
    var n = 0, s = String(str || '');
    for (var i = 0; i < s.length; i++) n += s.charCodeAt(i) * (i + 1);
    return ANIMALS[n % ANIMALS.length];
  }
  function initial(s) {
    var m = String(s || '').match(/[A-Za-z0-9À-ɏ]/);
    return (m ? m[0] : '?').toUpperCase();
  }
  function ago(ts) {
    var s = Math.max(0, Math.round((Date.now() - (Number(ts) || Date.now())) / 1000));
    if (s < 60) return 'à l’instant';
    var m = Math.round(s / 60);
    if (m < 60) return 'il y a ' + m + ' min';
    return 'il y a ' + Math.round(m / 60) + ' h';
  }

  /* ---------- Connexion ---------- */
  function connect() {
    clearTimeout(retryTimer);
    var proto = location.protocol === 'https:' ? 'wss:' : 'ws:';
    try { ws = new WebSocket(proto + '//' + location.host + '/ws'); } catch (e) { scheduleRetry(); return; }
    var mine = ws;
    ws.onopen = function () {
      if (ws !== mine) return;
      open = true; retry = 0;
      send({ t: 'hello', cid: cid, nick: nick, blocked: blocked, visible: document.visibilityState !== 'hidden', adult: store('talkie.adult') === '1' });
      renderLobby();
      if (room) renderConvState();
    };
    ws.onmessage = function (ev) {
      var m;
      try { m = JSON.parse(ev.data); } catch (e) { return; }
      onMessage(m);
    };
    ws.onclose = function () {
      if (ws !== mine) return;
      open = false;
      renderLobby();
      if (room) renderConvState();
      if (!replaced) scheduleRetry();
    };
    ws.onerror = function () {};
  }
  function scheduleRetry() {
    retry = Math.min(retry + 1, 6);
    retryTimer = setTimeout(connect, Math.min(8000, 400 * Math.pow(2, retry)));
  }

  function onMessage(m) {
    switch (m.t) {
      case 'welcome':
        myPid = m.pid;
        aiOn = !!m.ai;
        gifOn = !!m.gif;
        applyFlags();
        pushOn = !!m.push && 'Notification' in window && Notification.permission === 'granted';
        renderNotif();
        resyncPush();
        break;
      case 'lobby':
        online = m.online || 0;
        invites = Array.isArray(m.invites) ? m.invites : [];
        renderLobby();
        break;
      case 'joined':
        room = m.room;
        typingOn = false;
        showConv();
        replaying = true;
        (m.log || []).forEach(function (e) { addChat(e); });
        replaying = false;
        break;
      case 'room':
        if (room && m.room && m.room.id === room.id) { room = m.room; renderConvState(); }
        break;
      case 'chat': addChat(m); break;
      case 'typing': setTyping(!!m.on); break;
      case 'sys': addSys(m.text); sfx.join(); break;
      case 'left':
        stopSpeaking();
        room = null;
        typingOn = false;
        showLobby();
        if (m.reason) toast(m.reason);
        break;
      case 'needverify': startVerify(); break;
      case 'verified': break;
      case 'error':
        if (m.code === 'adult') { showAge(); break; }
        toast(m.text || 'Une erreur est survenue.');
        break;
      case 'reported': toast('Merci, le signalement est enregistré.'); break;
      case 'replaced':
        replaced = true;
        renderLobby();
        break;
    }
  }

  /* ---------- Majorité (18+) et vérification anti-bot ---------- */
  function showAge() { if ($('sheet-age')) $('sheet-age').hidden = false; }
  var tsKey = null, tsWidget = null, tsLoading = false;
  function startVerify() {
    if (!tsKey || tsWidget !== null || tsLoading) return;
    tsLoading = true;
    var go = function () {
      try {
        tsWidget = window.turnstile.render('#ts-box', {
          sitekey: tsKey,
          callback: function (token) {
            fetch('/api/verify', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ cid: cid, token: token }) })
              .then(function () { $('ts-box').textContent = ''; tsWidget = null; tsLoading = false; })
              .catch(function () { tsWidget = null; tsLoading = false; });
          }
        });
      } catch (e) { tsWidget = null; }
      tsLoading = false;
    };
    if (window.turnstile) { go(); return; }
    var sc = document.createElement('script');
    sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    sc.async = true;
    sc.onload = go;
    sc.onerror = function () { tsLoading = false; };
    document.head.appendChild(sc);
  }
  function loadConfig() {
    fetch('/api/config').then(function (r) { return r.json(); }).then(function (j) {
      if (j && j.turnstile) { tsKey = j.turnstile; startVerify(); }
    }).catch(function () { /* ignore */ });
  }

  function applyFlags() {
    $('foot-ai').hidden = !aiOn;
    $('foot-gif').hidden = !gifOn;
    $('btn-gif').hidden = !gifOn;
    $('tab-gif').hidden = !gifOn;
    updateTip();
    renderVoice();
  }

  /* ---------- Mika (dessin) ---------- */
  function mikaSvg() {
    return '<svg viewBox="0 0 64 64" aria-hidden="true">' +
      '<line x1="32" y1="14" x2="32" y2="8" stroke="#2A1B5E" stroke-width="2.4" stroke-linecap="round"/>' +
      '<circle cx="32" cy="6.5" r="3.6" fill="#FFCF3F"/>' +
      '<ellipse cx="32" cy="37" rx="24" ry="22" fill="#5DE3B4"/>' +
      '<ellipse cx="24" cy="27" rx="9" ry="5" fill="#fff" opacity=".35"/>' +
      '<g class="arm"><ellipse cx="7" cy="40" rx="5.5" ry="3.6" fill="#44CFA0" transform="rotate(-35 7 40)"/></g>' +
      '<ellipse cx="57" cy="42" rx="5.5" ry="3.6" fill="#44CFA0" transform="rotate(35 57 42)"/>' +
      '<ellipse class="eye" cx="24" cy="35" rx="3.4" ry="4.6" fill="#2A1B5E"/><ellipse class="eye" cx="40" cy="35" rx="3.4" ry="4.6" fill="#2A1B5E"/>' +
      '<circle cx="25.2" cy="33.2" r="1.2" fill="#fff"/><circle cx="41.2" cy="33.2" r="1.2" fill="#fff"/>' +
      '<ellipse cx="16.5" cy="43" rx="4.6" ry="3" fill="#FF8FC0" opacity=".75"/><ellipse cx="47.5" cy="43" rx="4.6" ry="3" fill="#FF8FC0" opacity=".75"/>' +
      '<path class="mouth" d="M27 44 Q32 50 37 44" stroke="#2A1B5E" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>';
  }
  function fillMika() {
    Array.prototype.forEach.call(document.querySelectorAll('#mika-av, #fab-orb, [data-mika]'), function (n) { n.innerHTML = mikaSvg(); });
  }

  /* ---------- Salon : thèmes ---------- */
  function renderChips() {
    var box = $('chips');
    box.textContent = '';
    CHIPS.forEach(function (t) {
      var b = el('button', 'chip', t);
      b.type = 'button';
      b.addEventListener('click', function () { pickTheme(t); });
      box.appendChild(b);
    });
  }

  var CATS_ORDER = ['Actu', 'Culture', 'Sport', 'Food', 'Jeux', 'Voyage', 'Société', 'Soutien'];
  var CAT_EMOJI = { 'Tendance': '🔥', 'Actu': '🗞️', 'Culture': '🎬', 'Sport': '⚽', 'Food': '🍟', 'Jeux': '🎮', 'Voyage': '✈️', 'Société': '💬', 'Soutien': '🫶' };
  var CATALOG = {
    'Actu': ['Une info qui m’a surpris', 'Ce qui change dans nos villes', 'Un sujet qui m’agace', 'Un truc qui m’a fait sourire'],
    'Culture': ['Une série dont je suis fan', 'Un film à voir ce week-end', 'Une chanson en boucle', 'Un livre qui m’a marqué·e'],
    'Sport': ['Le match de ce soir', 'Me remettre au sport', 'Un souvenir de stade', 'Courir, nager, marcher…'],
    'Food': ['Les frites', 'Ce que je cuisine ce soir', 'Le meilleur snack à 22 h', 'Ma recette de réconfort'],
    'Jeux': ['Mon jeu vidéo préféré', 'Un jeu de société à tester', 'Mon plus gros rage quit', 'Jeux rétro'],
    'Voyage': ['Ma prochaine destination', 'Un endroit qui m’a changé·e', 'Voyager seul·e', 'Les bons plans week-end'],
    'Société': ['Ce que je pense de l’IA', 'Ce qui nous rapproche', 'Habiter en ville ou ailleurs ?', 'Un truc qui a changé ma vie'],
    'Soutien': ['Une journée difficile', 'Je veux juste discuter', 'Je n’arrive pas à dormir', 'Un petit bonheur du jour']
  };
  var AI_ITEMS = [];
  var themesState = 'loading'; // loading | ready | none
  var catSel = null;

  function emojiOf(x) { return x.emoji || CAT_EMOJI[x.cat] || '💬'; }

  function exploreData() {
    var out = [];
    var trend = AI_ITEMS.filter(function (i) { return i.cat === 'Tendance'; });
    if (trend.length) out.push({ name: 'Tendance', list: trend });
    CATS_ORDER.forEach(function (k) {
      var seen = {}, list = [];
      function add(x) { var key = x.text.toLowerCase(); if (!seen[key]) { seen[key] = 1; list.push(x); } }
      AI_ITEMS.filter(function (i) { return i.cat === k; }).forEach(add);
      if (!AI_ITEMS.length) (CATALOG[k] || []).forEach(function (t) { if (list.length < 6) add({ cat: k, text: t, emoji: '' }); });
      out.push({ name: k, list: list });
    });
    return out;
  }
  function allThemes() {
    var all = [];
    exploreData().forEach(function (d) { d.list.forEach(function (x) { all.push(x); }); });
    return all;
  }
  function todayThemes() {
    var t = AI_ITEMS.filter(function (i) { return i.cat === 'Tendance'; });
    if (!t.length) t = AI_ITEMS.slice();
    if (!t.length && themesState === 'none') t = [{ cat: 'Culture', text: 'Une série dont je suis fan', emoji: '📺' }, { cat: 'Food', text: 'Les frites', emoji: '🍟' }, { cat: 'Soutien', text: 'Un petit bonheur du jour', emoji: '🌈' }, { cat: 'Société', text: 'Je veux juste discuter', emoji: '💬' }];
    return t;
  }

  function pickTheme(t) {
    $('theme').value = t;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    $('btn-publish').disabled = !open || replaced || !!room;
    loadBranches(t, []);
  }

  function themeCard(x) {
    var b = el('button', 'tcard');
    b.type = 'button';
    b.appendChild(el('span', 'em', emojiOf(x)));
    b.appendChild(el('span', 'txt', x.text));
    var go = el('span', 'go', 'Choisir');
    go.insertAdjacentHTML('beforeend', ARROW);
    b.appendChild(go);
    b.addEventListener('click', function () { pickTheme(x.text); });
    return b;
  }
  function renderTrends() {
    // Le haut de page : 4 thèmes précis du jour, et rien d'autre à lire.
    var box = $('themes');
    box.textContent = '';
    var today = todayThemes();
    if (!today.length) { for (var k = 0; k < 4; k++) box.appendChild(el('div', 'tcard tskel')); }
    today.slice(0, 4).forEach(function (x) { box.appendChild(themeCard(x)); });
    // « Plus de thèmes » : par catégorie, replié par défaut.
    var data = exploreData().filter(function (d) { return d.name !== 'Tendance'; });
    if (!catSel || !data.some(function (d) { return d.name === catSel; })) catSel = data[0].name;
    var tabs = $('cats');
    tabs.textContent = '';
    data.forEach(function (d) {
      var b = el('button');
      b.type = 'button';
      b.appendChild(el('span', 'e', CAT_EMOJI[d.name] || '💬'));
      b.appendChild(document.createTextNode(d.name));
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(d.name === catSel));
      b.addEventListener('click', function () { catSel = d.name; renderTrends(); });
      tabs.appendChild(b);
    });
    var box2 = $('themes2');
    box2.textContent = '';
    data.filter(function (d) { return d.name === catSel; })[0].list.slice(0, 4).forEach(function (x) { box2.appendChild(themeCard(x)); });
    $('place-txt').textContent = '📍 ' + placeLabel();
  }
  var ARROW = '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------- Lieu : pays (fuseau horaire ou langue) et ville (facultative) ---------- */
  var TZ_CC = { 'Europe/Paris': 'FR', 'Europe/Brussels': 'BE', 'Europe/Zurich': 'CH', 'Europe/Luxembourg': 'LU', 'Europe/London': 'GB', 'Europe/Dublin': 'IE', 'Europe/Madrid': 'ES', 'Europe/Berlin': 'DE', 'Europe/Rome': 'IT', 'Europe/Lisbon': 'PT', 'Europe/Amsterdam': 'NL', 'Africa/Casablanca': 'MA', 'Africa/Algiers': 'DZ', 'Africa/Tunis': 'TN', 'Africa/Dakar': 'SN', 'Africa/Abidjan': 'CI', 'America/Toronto': 'CA', 'America/Montreal': 'CA', 'America/Vancouver': 'CA', 'America/New_York': 'US', 'America/Chicago': 'US', 'America/Denver': 'US', 'America/Los_Angeles': 'US', 'America/Sao_Paulo': 'BR', 'America/Mexico_City': 'MX', 'Australia/Sydney': 'AU' };
  function guessCountry() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && TZ_CC[tz]) return TZ_CC[tz];
    } catch (e) { /* ignore */ }
    var m = /-([A-Za-z]{2})$/.exec(navigator.language || '');
    return m ? m[1].toUpperCase() : 'FR';
  }
  var place = (function () {
    try { var p = JSON.parse(store('talkie.place') || 'null'); if (p && /^[A-Z]{2}$/.test(p.cc)) return { cc: p.cc, city: clean(p.city, 40) }; } catch (e) { /* ignore */ }
    return { cc: guessCountry(), city: '' };
  })();
  function countryName(cc) {
    try { return new Intl.DisplayNames(['fr'], { type: 'region' }).of(cc) || cc; } catch (e) { return cc; }
  }
  function placeLabel() { return place.city || countryName(place.cc); }
  function savePlace(cc, city) {
    place = { cc: cc, city: clean(city, 40) };
    store('talkie.place', JSON.stringify(place));
    loadThemes();
  }

  var themesTry = 0, themesTimer = null;
  function loadThemes() {
    clearTimeout(themesTimer);
    if (!AI_ITEMS.length) themesState = 'loading';
    fetch('/api/themes?cc=' + encodeURIComponent(place.cc) + '&city=' + encodeURIComponent(place.city)).then(function (r) { return r.json(); }).then(function (d) {
      AI_ITEMS = [];
      if (d && (d.source === 'trends' || d.source === 'ai') && Array.isArray(d.items)) {
        AI_ITEMS = d.items.map(function (x) {
          var em = String(x.emoji || '');
          return { cat: clean(x.cat, 20) || 'Actu', text: clean(x.text, 64), emoji: em.length <= 12 && /\p{Extended_Pictographic}/u.test(em) ? em : '' };
        }).filter(function (x) { return x.text; }).slice(0, 40);
      }
      themesState = AI_ITEMS.length ? 'ready' : (d && d.pending ? 'loading' : 'none');
      renderTrends();
      // Les thèmes de ce lieu sont en préparation : on repasse dans quelques secondes.
      if (d && d.pending && themesTry < 8) { themesTry++; themesTimer = setTimeout(loadThemes, 6000); } else { if (themesState === 'loading') { themesState = 'none'; renderTrends(); } themesTry = 0; }
    }).catch(function () { if (themesState === 'loading') { themesState = 'none'; renderTrends(); } });
  }

  /* ---------- Arbre de pistes (Mika propose d'aller plus loin) ---------- */
  var brTopic = '', brPath = [], brSeq = 0, brTimer = null;
  function hideBranches() { brSeq++; brTopic = ''; brPath = []; $('branches').hidden = true; }
  function loadBranches(topic, path) {
    topic = clean(topic, 70);
    clearTimeout(brTimer);
    if (topic.length < 3) { hideBranches(); return; }
    brTopic = topic;
    brPath = path || [];
    var box = $('branches');
    box.hidden = false;
    box.textContent = '';
    var h = el('div', 'br-head');
    h.appendChild(el('strong', null, 'Mika cherche…'));
    box.appendChild(h);
    for (var i = 0; i < 3; i++) box.appendChild(el('div', 'br-skel'));
    var seq = ++brSeq;
    fetch('/api/branches?topic=' + encodeURIComponent(topic) + '&path=' + encodeURIComponent(brPath.join('|')))
      .then(function (r) { if (!r.ok) throw new Error('x'); return r.json(); })
      .then(function (d) { if (seq === brSeq) renderBranches(d); })
      .catch(function () { if (seq === brSeq) box.hidden = true; });
  }
  function renderBranches(d) {
    var items = d && Array.isArray(d.items) ? d.items : [];
    var box = $('branches');
    if (!items.length) { box.hidden = true; return; }
    box.textContent = '';
    var head = el('div', 'br-head');
    head.appendChild(el('strong', null, d.ai ? 'Mika te propose ✨' : 'Quelques pistes'));
    if (brPath.length) {
      var back = el('button', 'br-back');
      back.type = 'button';
      back.insertAdjacentHTML('beforeend', '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>');
      back.appendChild(document.createTextNode('Retour'));
      back.addEventListener('click', function () {
        var prev = brPath[brPath.length - 1];
        $('theme').value = prev;
        loadBranches(prev, brPath.slice(0, -1));
      });
      head.appendChild(back);
    }
    box.appendChild(head);
    if (brPath.length) box.appendChild(el('div', 'br-path', brPath.concat([brTopic]).join('  ›  ')));
    var parent = brTopic, parentPath = brPath;
    items.slice(0, 3).forEach(function (it, idx) {
      var b = el('button', 'br-item');
      b.type = 'button';
      b.style.animationDelay = (idx * 60) + 'ms';
      b.appendChild(el('span', 'em', it.e || '💬'));
      b.appendChild(el('span', 'tx', clean(it.t, 90)));
      b.insertAdjacentHTML('beforeend', ARROW);
      b.addEventListener('click', function () {
        $('theme').value = clean(it.t, 60);
        $('btn-publish').disabled = !open || replaced || !!room;
        loadBranches(it.t, parentPath.concat([parent]).slice(-3));
      });
      box.appendChild(b);
    });
  }

  /* ---------- Mika sur la première page ---------- */
  function greeting() {
    var h = new Date().getHours();
    if (h >= 5 && h < 11) return 'Coucou ! Un café et un thème ? ☕';
    if (h >= 11 && h < 18) return 'Hello ! De quoi tu as envie de parler ? 😄';
    if (h >= 18 && h < 23) return 'Salut toi ! On papote de quoi ce soir ? ✨';
    return 'Les couche-tard, c’est par ici 🌙 Un thème ?';
  }
  function mikaSay(text, silent) {
    var bub = $('mika-say');
    bub.classList.remove('thinking', 'say');
    bub.textContent = text;
    void bub.offsetWidth;
    bub.classList.add('say');
    if (!silent) speak(text);
  }
  function setQr(opts) {
    var qr = $('mika-qr');
    qr.textContent = '';
    opts.forEach(function (o) {
      var b = el('button', null, o[0]);
      b.type = 'button';
      b.addEventListener('click', o[1]);
      qr.appendChild(b);
    });
  }
  function surprise() {
    var all = allThemes();
    var x = all[Math.floor(Math.random() * all.length)];
    mikaSay('Et si on parlait de ça ? ' + emojiOf(x));
    pickTheme(x.text);
  }
  function mainQr() {
    setQr([
      ['🎲 Surprends-moi', surprise],
      ['🔥 Les thèmes du jour', showToday],
      ['💛 Juste discuter', function () { mikaSay('Avec plaisir, je te prépare ça !'); pickTheme('Je veux juste discuter'); }]
    ]);
  }
  function showToday() {
    mikaSay('Aujourd’hui, ça parle de ça :');
    var opts = todayThemes().slice(0, 3).map(function (x) {
      return [emojiOf(x) + ' ' + x.text, function () { mikaSay('Bon choix !'); pickTheme(x.text); }];
    });
    opts.push(['↩ Retour', function () { mikaSay('Qu’est-ce qui te ferait plaisir ?'); mainQr(); }]);
    setQr(opts);
  }
  function renderMika() {
    fillMika();
    var bub = $('mika-say');
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (bub.classList.contains('thinking')) {
      setTimeout(function () { mikaSay(greeting(), true); }, reduce ? 0 : 1000);
    }
    mainQr();
  }

  /* ---------- Voix de Mika (facultative, coupée par défaut) ---------- */
  var canSpeak = 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';
  var voiceOn = canSpeak && store('talkie.voice') === '1';
  var frVoice = null;
  function pickVoice() {
    if (!canSpeak) return;
    var vs = speechSynthesis.getVoices().filter(function (v) { return /^fr/i.test(v.lang); });
    if (!vs.length) return;
    var pref = /(amélie|amelie|audrey|aurélie|aurelie|marie|julie|céline|celine|google fran|female|femme)/i;
    frVoice = vs.filter(function (v) { return pref.test(v.name); })[0] || vs.filter(function (v) { return /FR/i.test(v.lang); })[0] || vs[0];
  }
  if (canSpeak) {
    pickVoice();
    if (speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', pickVoice);
  }
  function setTalking(on) {
    Array.prototype.forEach.call(document.querySelectorAll('#mika-av, #fab-orb'), function (n) { n.classList.toggle('talking', on); });
  }
  function speakable(t) {
    return String(t || '').replace(/@mika/gi, 'Mika').replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, '').replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim().slice(0, 300);
  }
  function speak(text) {
    if (!canSpeak || !voiceOn) return;
    var t = speakable(text);
    if (!t) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(t);
      u.lang = 'fr-FR';
      if (frVoice) u.voice = frVoice;
      u.pitch = 1.3;
      u.rate = 1.05;
      u.onstart = function () { setTalking(true); };
      u.onend = u.onerror = function () { setTalking(false); };
      speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
  }
  function stopSpeaking() { if (canSpeak) { try { speechSynthesis.cancel(); } catch (e) { /* ignore */ } } setTalking(false); }
  function renderVoice() {
    $('btn-voice').hidden = !canSpeak;
    $('row-voice').hidden = !canSpeak;
    $('btn-voice').setAttribute('aria-pressed', String(voiceOn));
    $('btn-voice').setAttribute('aria-label', voiceOn ? 'Couper la voix de Mika' : 'Activer la voix de Mika');
    $('voice-ico').textContent = voiceOn ? '🔊' : '🔇';
    $('btn-voice2').setAttribute('aria-pressed', String(voiceOn));
    $('btn-voice2').textContent = voiceOn ? 'Activée' : 'Coupée';
  }
  function toggleVoice() {
    voiceOn = !voiceOn;
    store('talkie.voice', voiceOn ? '1' : '0');
    renderVoice();
    if (voiceOn) speak('Coucou ! Me voilà, avec ma petite voix.'); else stopSpeaking();
  }

  /* ---------- Lieu : position facultative ---------- */
  function geolocate() {
    if (!navigator.geolocation) { toast('La localisation n’est pas disponible sur cet appareil.'); return; }
    var btn = $('btn-geo');
    btn.disabled = true;
    navigator.geolocation.getCurrentPosition(function (pos) {
      var lat = Math.round(pos.coords.latitude * 100) / 100, lon = Math.round(pos.coords.longitude * 100) / 100;
      fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat + '&longitude=' + lon + '&localityLanguage=fr')
        .then(function (r) { return r.json(); })
        .then(function (j) {
          var cc = /^[A-Za-z]{2}$/.test(j.countryCode || '') ? j.countryCode.toUpperCase() : place.cc;
          var city = clean(j.city || j.locality || '', 40);
          savePlace(cc, city);
          closeSheets();
          toast(city ? 'Thèmes de ' + city + ' ✨' : 'Thèmes mis à jour ✨');
        })
        .catch(function () { toast('Ville introuvable. Tu peux la taper à la main.'); })
        .then(function () { btn.disabled = false; });
    }, function () {
      btn.disabled = false;
      toast('Position refusée. Tu peux taper ta ville à la main.');
    }, { timeout: 10000, maximumAge: 600000 });
  }

  /* Mika flottant : toujours à portée quand l'accueil défile */
  var heroOut = false;
  function updateFab() { $('mika-fab').hidden = !(heroOut && !$('lobby').hidden); }
  function openMikaSheet() {
    var list = $('mika-sheet-list');
    list.textContent = '';
    todayThemes().slice(0, 4).forEach(function (x) {
      var b = el('button', 'br-item');
      b.type = 'button';
      b.appendChild(el('span', 'em', emojiOf(x)));
      b.appendChild(el('span', 'tx', x.text));
      b.insertAdjacentHTML('beforeend', ARROW);
      b.addEventListener('click', function () { closeSheets(); pickTheme(x.text); });
      list.appendChild(b);
    });
    $('sheet-mika').hidden = false;
    $('mika-fab').classList.add('seen');
    $('fab-lab').hidden = true;
  }
  function watchHero() {
    if (!('IntersectionObserver' in window)) return;
    new IntersectionObserver(function (es) {
      heroOut = !es[0].isIntersecting;
      updateFab();
    }, { threshold: 0 }).observe(document.querySelector('.hero'));
  }

  function renderLobby() {
    var text;
    if (replaced) text = 'Ouvert ailleurs';
    else if (!open) text = 'Connexion…';
    else if (online <= 1) text = 'Tu es seul·e ici';
    else text = online + ' en ligne';
    $('count').textContent = text;
    $('live').className = 'live' + (open && !replaced ? '' : ' off');
    $('btn-reconnect').hidden = !replaced;
    $('btn-publish').disabled = !open || replaced || !!room;

    var list = $('invites');
    list.textContent = '';
    var f = clean($('filter').value, 60).toLowerCase();
    var shown = invites.filter(function (i) { return !f || String(i.theme).toLowerCase().indexOf(f) !== -1; });
    $('filter').hidden = invites.length === 0;
    $('empty').hidden = shown.length > 0;
    var em = $('empty');
    em.textContent = '';
    em.appendChild(el('span', 'big', (f && invites.length > 0) ? '🔍' : '🌙'));
    em.appendChild(el('strong', null, (f && invites.length > 0) ? 'Aucun thème ne correspond' : 'Personne n’attend pour le moment'));
    em.appendChild(document.createTextNode((f && invites.length > 0) ? 'Efface le filtre ou lance le tien.' : 'Lance un thème : dès que quelqu’un l’ouvre, il apparaît ici.'));
    var cp = $('inv-count');
    cp.hidden = invites.length === 0;
    cp.textContent = String(invites.length);
    shown.forEach(function (inv) {
      var li = el('li', 'invite');
      li.appendChild(el('div', 'avatar ' + tint(inv.nick), animal(inv.nick)));
      var main = el('div', 'invite-main');
      main.appendChild(el('div', 'invite-theme', inv.theme));
      var meta = el('div', 'invite-meta');
      meta.appendChild(el('span', null, clean(inv.nick, 20) + ' · ' + ago(inv.ts)));
      var seats = el('span', 'seats');
      seats.setAttribute('aria-label', inv.here + ' sur ' + inv.max + ' places prises');
      for (var s = 0; s < inv.max; s++) seats.appendChild(el('i', s < inv.here ? 'on' : ''));
      meta.appendChild(seats);
      main.appendChild(meta);
      var b = el('button', 'primary', 'Rejoindre');
      b.type = 'button';
      b.addEventListener('click', function () { send({ t: 'join', id: inv.id }); });
      li.appendChild(main);
      li.appendChild(b);
      list.appendChild(li);
    });
  }

  function showLobby() {
    closePanel();
    closeSheets();
    $('conv').hidden = true;
    $('lobby').hidden = false;
    updateFab();
    document.documentElement.style.overflow = '';
    renderLobby();
  }

  /* ---------- Conversation ---------- */
  function fit() {
    var vv = window.visualViewport;
    var root = document.documentElement.style;
    if (!vv) return;
    root.setProperty('--vvh', Math.round(vv.height) + 'px');
    root.setProperty('--vvt', Math.round(vv.offsetTop) + 'px');
    $('conv').classList.toggle('kb', window.innerHeight - vv.height > 140);
  }
  if (window.visualViewport) {
    visualViewport.addEventListener('resize', fit);
    visualViewport.addEventListener('scroll', fit);
  }

  function showConv() {
    $('lobby').hidden = true;
    $('conv').hidden = false;
    updateFab();
    document.documentElement.style.overflow = 'hidden';
    $('log').textContent = '';
    grp = { key: null, ts: 0 };
    dayShown = false;
    closePanel();
    closeSheets();
    $('msg').value = '';
    $('conv-theme').textContent = room.theme;
    var av = $('conv-av');
    av.className = 'avatar ' + tint(room.theme);
    av.textContent = '💬';
    fit();
    renderConvState();
  }

  function othersInRoom() {
    return room ? room.members.filter(function (p) { return p.pid !== myPid; }) : [];
  }

  function renderConvState() {
    if (!room) return;
    $('conv-theme').textContent = room.theme;
    var o = othersInRoom();
    var present = o.filter(function (p) { return p.online; });
    var isHost = room.host === myPid;
    var sub = $('conv-sub');
    sub.className = '';
    if (typingOn) { sub.textContent = 'Mika écrit…'; sub.className = 'live-on'; }
    else if (present.length) {
      sub.textContent = present.map(function (p) { return clean(p.nick, 20); }).join(', ') + ' · en ligne';
      sub.className = 'live-on';
    } else if (o.length) sub.textContent = o.map(function (p) { return clean(p.nick, 20); }).join(', ') + ' · hors ligne';
    else if (room.ai) sub.textContent = 'Mika (IA) te tient compagnie';
    else sub.textContent = isHost ? 'En attente de quelqu’un…' : 'Personne d’autre pour l’instant';

    var w = $('wait');
    if (!o.length) {
      w.hidden = false;
      if (room.ai) {
        w.className = 'wait';
        w.textContent = 'Ton invitation est visible dans le salon. En attendant, Mika, ton assistant, te tient compagnie. Il s’efface dès que quelqu’un arrive.';
      } else {
        w.className = 'wait plain';
        w.textContent = isHost
          ? 'Ton invitation est visible dans le salon. Les personnes qui ont activé les notifications sont prévenues. Reste sur cette page.'
          : 'Plus personne d’autre n’est là. Tu peux quitter pour revenir au salon.';
      }
    } else { w.hidden = true; }

    var can = (present.length > 0 || !!room.ai) && open;
    $('msg').disabled = !can;
    $('btn-emoji').disabled = !can;
    $('btn-gif').disabled = !can;
    $('msg').placeholder = !open ? 'Reconnexion…' : (!can ? 'Tu pourras écrire dès que quelqu’un est là.' : 'Écris un message…');
    updateSend();
    renderSafety(o);
    updateTip();
  }

  function updateSend() {
    $('btn-send').disabled = $('msg').disabled || !chatClean($('msg').value, 500);
    updateMention();
  }

  /* ---------- @Mika ---------- */
  var MENTION_RE = /(^|[^\p{L}\p{N}_])(@mika)(?![\p{L}\p{N}_])/iu;
  function txtNode(text) {
    var span = el('span', 'txt');
    var re = /(^|[^\p{L}\p{N}_])(@mika)(?![\p{L}\p{N}_])/giu;
    var last = 0, m;
    while ((m = re.exec(text))) {
      var start = m.index + m[1].length;
      if (start > last) span.appendChild(document.createTextNode(text.slice(last, start)));
      span.appendChild(el('span', 'mention', m[2]));
      last = start + m[2].length;
    }
    if (last < text.length) span.appendChild(document.createTextNode(text.slice(last)));
    return span;
  }
  function updateTip() {
    var show = aiOn && !!room && !$('conv').hidden;
    $('mika-row').hidden = !show;
    if (show) fillMika();
  }
  function mentionQuery() {
    var inp = $('msg');
    var pos = inp.selectionStart == null ? inp.value.length : inp.selectionStart;
    var m = /(^|\s)@([\p{L}]{0,5})$/u.exec(inp.value.slice(0, pos));
    if (!m) return null;
    var q = m[2].toLowerCase();
    if (q === 'mika' || 'mika'.indexOf(q) !== 0) return null;
    return { pos: pos, len: q.length + 1 };
  }
  function updateMention() {
    $('mention-pop').hidden = !(aiOn && room && !room.ai && !$('msg').disabled && mentionQuery());
  }
  function pickMention() {
    var inp = $('msg'), q = mentionQuery();
    if (inp.disabled) return;
    if (!q && /@mika\b/i.test(inp.value)) { inp.focus(); return; }
    if (!q) { inp.value = (inp.value && !/\s$/.test(inp.value) ? inp.value + ' ' : inp.value) + '@Mika '; }
    else inp.value = inp.value.slice(0, q.pos - q.len) + '@Mika ' + inp.value.slice(q.pos);
    if (inp.value.length > 500) inp.value = inp.value.slice(0, 500);
    inp.focus();
    try { inp.setSelectionRange(inp.value.length, inp.value.length); } catch (x) { /* ignore */ }
    updateSend();
  }

  /* ---------- Messages ---------- */
  function scrollLog(force, nearBefore) {
    var log = $('log');
    if (force || nearBefore) log.scrollTop = log.scrollHeight;
  }
  function isNear(log) { return log.scrollHeight - log.scrollTop - log.clientHeight < 90; }

  function ensureDay() {
    if (dayShown) return;
    dayShown = true;
    var d = el('div', 'day');
    d.appendChild(el('span', null, 'Aujourd’hui'));
    $('log').appendChild(d);
  }

  function addSys(text) {
    var log = $('log');
    var near = isNear(log);
    removeTypingNode();
    ensureDay();
    var s = el('div', 'sys');
    s.appendChild(el('span', null, clean(text, 200)));
    log.appendChild(s);
    grp = { key: null, ts: 0 };
    if (typingOn) showTypingNode();
    scrollLog(false, near);
  }

  var EMOJI_ONLY = null;
  try { EMOJI_ONLY = new RegExp('^(?:[\\p{Extended_Pictographic}\\p{Emoji_Modifier}\\u200d\\ufe0f\\s])+$', 'u'); } catch (e) { EMOJI_ONLY = null; }
  function emojiOnly(text) {
    if (!EMOJI_ONLY || !EMOJI_ONLY.test(text)) return false;
    if (window.Intl && Intl.Segmenter) {
      var n = 0, it = new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text.replace(/\s/g, ''));
      for (var x of it) { void x; n++; if (n > 3) return false; }
      return n >= 1;
    }
    return text.replace(/\s/g, '').length <= 8;
  }

  /* ---------- Ambiance et sons ---------- */
  var BGS = [['', 'Classique'], ['aurore', 'Aurore'], ['ocean', 'Océan'], ['foret', 'Forêt'], ['soleil', 'Soleil'], ['nuit', 'Nuit']];
  var bgSel = store('talkie.bg') || '';
  if (!BGS.some(function (b) { return b[0] === bgSel; })) bgSel = '';
  var soundOn = store('talkie.sound') === '1';
  var audioCtx = null, replaying = false;

  function applyBg() {
    if (bgSel) $('log').setAttribute('data-bg', bgSel); else $('log').removeAttribute('data-bg');
    Array.prototype.forEach.call($('swatches').children, function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-bg') === bgSel)); });
  }
  function renderLook() {
    var box = $('swatches');
    box.textContent = '';
    BGS.forEach(function (b) {
      var btn = el('button');
      btn.type = 'button';
      btn.setAttribute('data-bg', b[0]);
      btn.appendChild(el('i'));
      btn.appendChild(document.createTextNode(b[1]));
      btn.addEventListener('click', function () { bgSel = b[0]; store('talkie.bg', bgSel); applyBg(); });
      box.appendChild(btn);
    });
    applyBg();
    var sb = $('btn-sound');
    sb.textContent = soundOn ? 'Activés' : 'Coupés';
    sb.setAttribute('aria-pressed', String(soundOn));
  }
  function unlockAudio() {
    try {
      if (!audioCtx) { var C = window.AudioContext || window.webkitAudioContext; if (C) audioCtx = new C(); }
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    } catch (e) { /* ignore */ }
  }
  function tone(freqs, dur, vol) {
    if (!soundOn || replaying || !audioCtx || audioCtx.state !== 'running') return;
    try {
      var t0 = audioCtx.currentTime;
      freqs.forEach(function (f, i) {
        var o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        var st = t0 + i * 0.09;
        g.gain.setValueAtTime(0.0001, st);
        g.gain.exponentialRampToValueAtTime(vol, st + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, st + dur);
        o.connect(g); g.connect(audioCtx.destination);
        o.start(st); o.stop(st + dur + 0.02);
      });
    } catch (e) { /* ignore */ }
  }
  var sfx = {
    recv: function () { tone([660, 880], 0.16, 0.10); },
    sent: function () { tone([520], 0.08, 0.05); },
    join: function () { tone([523, 659, 784], 0.2, 0.09); }
  };
  document.addEventListener('pointerdown', unlockAudio, { passive: true });
  document.addEventListener('keydown', unlockAudio);

  function addChat(m) {
    var gif = null;
    if (m.gif && typeof m.gif === 'object' && typeof m.gif.url === 'string' && GIF_URL_RE.test(m.gif.url)) {
      gif = { url: m.gif.url, title: clean(m.gif.title, 80) };
    }
    var text = chatClean(m.text, 500);
    if (!gif && !text) return;
    var log = $('log');
    var near = isNear(log);
    var ai = !!m.ai;
    var mine = !ai && m.pid === myPid;
    if (ai) { typingOn = false; if (!replaying) speak(text); }
    removeTypingNode();
    ensureDay();

    var ts = Number(m.ts) || Date.now();
    var key = ai ? 'ai' : m.pid;
    var first = key !== grp.key || ts - grp.ts > 180000;
    grp = { key: key, ts: ts };

    var row = el('div', 'msg' + (mine ? ' mine' : '') + (ai ? ' ai' : '') + (first ? ' first' : ''));
    var showName = first && !mine && (ai || (room && room.members.length > 2));
    if (showName) {
      var who = el('div', 'who', ai ? 'Mika' : (clean(m.nick, 20) || 'Quelqu’un'));
      if (ai) { var mini = el('span', 'mini'); mini.innerHTML = mikaSvg(); who.insertBefore(mini, who.firstChild); who.appendChild(el('span', 'badge', 'IA')); }
      row.appendChild(who);
    }
    var b = el('div', 'bubble');
    if (gif) {
      b.className = 'bubble gif';
      var img = el('img');
      img.src = gif.url;
      img.alt = gif.title || 'GIF';
      img.loading = 'lazy';
      img.addEventListener('load', function () { if (near) $('log').scrollTop = $('log').scrollHeight; });
      b.appendChild(img);
      b.appendChild(el('span', 'gtag', 'GIF'));
      b.appendChild(el('span', 'time', hhmm(ts)));
    } else {
      var big = emojiOnly(text);
      if (big) b.className = 'bubble big';
      b.appendChild(txtNode(text));
      b.appendChild(el('span', 'time', hhmm(ts)));
    }
    row.appendChild(b);
    log.appendChild(row);
    if (typingOn) showTypingNode();
    scrollLog(mine, near);
    if (mine) sfx.sent(); else sfx.recv();
  }

  function removeTypingNode() {
    var t = document.getElementById('typing');
    if (t && t.parentNode) t.parentNode.removeChild(t);
  }
  function showTypingNode() {
    removeTypingNode();
    var log = $('log');
    var row = el('div', 'msg ai typing first');
    row.id = 'typing';
    var b = el('div', 'bubble');
    b.setAttribute('aria-label', 'Mika écrit');
    b.innerHTML = '<i></i><i></i><i></i>';
    row.appendChild(b);
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
  }
  function setTyping(on) {
    typingOn = on;
    if (on) showTypingNode(); else removeTypingNode();
    renderConvState();
  }

  /* ---------- Envoi ---------- */
  // Garde le clavier ouvert après un envoi : on remet le focus dans le champ (sauf si le panneau emoji/GIF est ouvert).
  function keepKeyboard() {
    var m = $('msg');
    if (m.disabled || !$('panel').hidden) return;
    try { m.focus({ preventScroll: true }); } catch (e) { m.focus(); }
  }
  function sendText() {
    var text = chatClean($('msg').value, 500);
    if (!text) return;
    if (send({ t: 'chat', text: text })) {
      if (/@mika/i.test(text)) store('talkie.tipMika', '1');
      $('msg').value = '';
      updateSend();
      keepKeyboard();
    } else toast('Le message n’a pas pu partir. Réessaie.');
  }
  function sendGif(g) {
    if (!g || !GIF_URL_RE.test(g.url)) return;
    if (send({ t: 'chat', gif: { url: g.url, w: g.w, h: g.h, title: g.title } })) closePanel();
    else toast('Le GIF n’a pas pu partir. Réessaie.');
  }

  /* ---------- Emojis ---------- */
  var EMOJI = [
    ['😀', 'Smileys', '😀 😃 😄 😁 😆 😅 😂 🤣 🥲 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😋 😛 😜 🤪 😝 🤗 🤭 🤫 🤔 🫡 😐 😑 😶 🙄 😏 😬 😮 😯 😲 🥱 😴 😪 😷 🤒 🤕 🤢 🤮 🥵 🥶 🥴 😵 🤯 🤠 🥳 😎 🤓 🧐 😕 😟 🙁 😮‍💨 😢 😭 😱 😖 😞 😓 😩 😫 😤 😡 😠 🤬 😈 💀 🤡 👻 👽 🤖'],
    ['👍', 'Gestes', '👍 👎 👌 🤌 ✌️ 🤞 🫶 🤟 🤘 🤙 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐️ 👋 🤝 🙏 👏 🙌 💪 🫰 🫵 ✍️ 🤳 💅 👀 🧠 🫂'],
    ['❤️', 'Cœurs', '❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❤️‍🔥 💕 💞 💓 💗 💖 💘 💝 ✨ 💫 ⭐ 🌟 🔥 💥 💯 ✅ ❌ ❓ ❗'],
    ['🍟', 'Miam', '🍟 🍔 🌭 🍕 🌮 🌯 🥙 🥪 🥗 🍝 🍜 🍣 🍱 🍛 🍤 🥟 🧀 🥖 🥐 🥞 🧇 🍳 🥓 🍗 🍖 🥩 🥔 🍠 🥕 🌽 🍅 🥑 🍓 🍒 🍑 🍌 🍉 🍇 🍍 🥭 🍎 🍫 🍬 🍭 🍩 🍪 🎂 🍰 🧁 🍦 ☕ 🍵 🥤 🍺 🍷 🥂 🍸'],
    ['🎉', 'Fête', '🎉 🎊 🎈 🎁 🎂 🥂 🍾 🎶 🎵 🎤 🎧 🎸 🥁 🎹 🎬 🍿 🎮 🕹️ 🎲 🎯 🎨 📺 📸 🪩 💃 🕺'],
    ['🐶', 'Nature', '🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐸 🐵 🙈 🙉 🙊 🐔 🐧 🐦 🦆 🦉 🦄 🐝 🦋 🐢 🐙 🐬 🐳 🌸 🌹 🌻 🌈 ☀️ 🌙 ☁️ ⛈️ ❄️ 🌊 🌍'],
    ['⚽', 'Sport', '⚽ 🏀 🏈 ⚾ 🎾 🏐 🏉 🎱 🏓 🏸 🥊 🥋 ⛳ 🏊 🚴 🏃 🧘 🏆 🥇 🥈 🥉 🏅'],
    ['✈️', 'Voyage et objets', '✈️ 🚗 🚕 🚌 🚲 🛵 🚆 🚀 🏖️ 🏝️ ⛰️ 🏕️ 🗺️ 🧳 🏠 🌆 🌃 ⏰ 📱 💻 💡 📚 💰']
  ];
  var emojiCat = 0;

  function recents() {
    try { var r = JSON.parse(store('tablee.recent') || '[]'); return Array.isArray(r) ? r.slice(0, 24) : []; } catch (e) { return []; }
  }
  function pushRecent(e) {
    var r = recents().filter(function (x) { return x !== e; });
    r.unshift(e);
    store('tablee.recent', JSON.stringify(r.slice(0, 24)));
  }
  function categories() {
    var cats = EMOJI.map(function (c) { return { icon: c[0], name: c[1], list: c[2].split(' ') }; });
    var r = recents();
    if (r.length) cats.unshift({ icon: '🕘', name: 'Récents', list: r });
    return cats;
  }
  function renderEmoji() {
    var cats = categories();
    if (emojiCat >= cats.length) emojiCat = 0;
    var tabs = $('ecats');
    tabs.textContent = '';
    cats.forEach(function (c, i) {
      var b = el('button', 'ecat', c.icon);
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', c.name);
      b.setAttribute('aria-selected', String(i === emojiCat));
      b.addEventListener('click', function () { emojiCat = i; renderEmoji(); });
      tabs.appendChild(b);
    });
    var grid = $('egrid');
    grid.textContent = '';
    grid.scrollTop = 0;
    grid.appendChild(el('div', 'glabel', cats[emojiCat].name));
    cats[emojiCat].list.forEach(function (e) {
      var b = el('button', null, e);
      b.type = 'button';
      b.setAttribute('aria-label', e);
      b.addEventListener('click', function () { insertEmoji(e); });
      grid.appendChild(b);
    });
  }
  function insertEmoji(e) {
    var inp = $('msg');
    var max = 500;
    var s = inp.selectionStart == null ? inp.value.length : inp.selectionStart;
    var t = inp.selectionEnd == null ? s : inp.selectionEnd;
    var v = inp.value.slice(0, s) + e + inp.value.slice(t);
    if (v.length > max) return;
    inp.value = v;
    try { inp.setSelectionRange(s + e.length, s + e.length); } catch (x) { /* ignore */ }
    pushRecent(e);
    updateSend();
  }

  /* ---------- GIF ---------- */
  var gifTimer = null, gifLoaded = false, gifSeq = 0;
  function loadGifs(q) {
    var grid = $('ggrid');
    var seq = ++gifSeq;
    grid.textContent = '';
    grid.appendChild(el('div', 'gmsg', 'Chargement…'));
    fetch('/api/gifs?q=' + encodeURIComponent(q || '')).then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); }).then(function (res) {
      if (seq !== gifSeq) return;
      grid.textContent = '';
      var list = (res.d && Array.isArray(res.d.gifs)) ? res.d.gifs : [];
      if (!res.ok) { grid.appendChild(el('div', 'gmsg', 'Les GIF ne répondent pas pour le moment. Réessaie dans un instant.')); return; }
      if (!list.length) { grid.appendChild(el('div', 'gmsg', 'Aucun GIF trouvé. Essaie un autre mot.')); return; }
      gifLoaded = true;
      list.forEach(function (g) {
        if (!GIF_URL_RE.test(g.url) || !GIF_URL_RE.test(g.preview)) return;
        var b = el('button');
        b.type = 'button';
        b.setAttribute('aria-label', g.title || 'GIF');
        var img = el('img');
        img.src = g.preview;
        img.alt = g.title || '';
        img.loading = 'lazy';
        if (g.w && g.h) { img.width = g.w; img.height = g.h; }
        b.appendChild(img);
        b.addEventListener('click', function () { sendGif(g); });
        grid.appendChild(b);
      });
    }).catch(function () {
      if (seq !== gifSeq) return;
      grid.textContent = '';
      grid.appendChild(el('div', 'gmsg', 'Les GIF ne répondent pas pour le moment. Réessaie dans un instant.'));
    });
  }

  /* ---------- Panneau ---------- */
  var panelTab = 'emoji';
  function selectTab(name) {
    panelTab = name;
    $('tab-emoji').setAttribute('aria-selected', String(name === 'emoji'));
    $('tab-gif').setAttribute('aria-selected', String(name === 'gif'));
    $('pane-emoji').hidden = name !== 'emoji';
    $('pane-gif').hidden = name !== 'gif';
    if (name === 'emoji') renderEmoji();
    else if (!gifLoaded) loadGifs(clean($('gq').value, 50));
  }
  function openPanel(name) {
    if ($('msg').disabled) return;
    $('panel').hidden = false;
    $('btn-emoji').classList.toggle('on', name === 'emoji');
    $('btn-gif').classList.toggle('on', name === 'gif');
    $('btn-emoji').setAttribute('aria-expanded', String(name === 'emoji'));
    $('btn-gif').setAttribute('aria-expanded', String(name === 'gif'));
    $('msg').blur();
    selectTab(name);
    var log = $('log');
    setTimeout(function () { log.scrollTop = log.scrollHeight; }, 30);
  }
  function closePanel() {
    $('panel').hidden = true;
    $('btn-emoji').classList.remove('on');
    $('btn-gif').classList.remove('on');
    $('btn-emoji').setAttribute('aria-expanded', 'false');
    $('btn-gif').setAttribute('aria-expanded', 'false');
  }
  function togglePanel(name) {
    if (!$('panel').hidden && panelTab === name) closePanel(); else openPanel(name);
  }

  /* ---------- Feuilles ---------- */
  function closeSheets() { $('sheet-safety').hidden = true; $('sheet-leave').hidden = true; $('sheet-mika').hidden = true; $('sheet-place').hidden = true; }

  function renderSafety(o) {
    var ul = $('safety-list');
    ul.textContent = '';
    $('safety-none').hidden = o.length > 0;
    o.forEach(function (p) {
      var li = el('li');
      li.appendChild(el('span', null, clean(p.nick, 20)));
      var btns = el('div', 'btns');
      var rep = el('button', 'ghost', 'Signaler');
      rep.type = 'button';
      rep.addEventListener('click', function () {
        send({ t: 'report', pid: p.pid, reason: 'Signalé depuis la conversation' });
        closeSheets();
      });
      var blk = el('button', 'ghost danger', 'Bloquer et quitter');
      blk.type = 'button';
      blk.addEventListener('click', function () {
        if (blocked.indexOf(p.pid) === -1) blocked.push(p.pid);
        blocked = blocked.slice(-200);
        store('tablee.blocked', JSON.stringify(blocked));
        send({ t: 'block', pid: p.pid });
        send({ t: 'leave' });
        closeSheets();
        toast('Personne bloquée. Tu ne verras plus ses invitations.');
      });
      btns.appendChild(rep);
      btns.appendChild(blk);
      li.appendChild(btns);
      ul.appendChild(li);
    });
  }

  /* ---------- Installation et notifications ---------- */
  var isStandalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  function pushSupported() {
    return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  }

  function renderNotif() {
    $('install-ios').hidden = !(isIOS && !isStandalone);
    $('install-android').hidden = !deferredInstall || isStandalone;
    var canAsk = pushSupported() && !pushOn && Notification.permission !== 'denied' && !(isIOS && !isStandalone);
    $('notif').hidden = !canAsk;
    if (pushSupported() && Notification.permission === 'denied') {
      // Rien à proposer : l'autorisation doit être rétablie dans les réglages du téléphone.
      $('notif').hidden = true;
    }
  }

  function b64ToBytes(s) {
    var pad = '='.repeat((4 - s.length % 4) % 4);
    var raw = atob((s + pad).replace(/-/g, '+').replace(/_/g, '/'));
    var out = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
    return out;
  }

  function enableNotifications() {
    if (!pushSupported()) { toast('Ton navigateur ne gère pas les notifications.'); return; }
    Notification.requestPermission().then(function (perm) {
      if (perm !== 'granted') { toast('Notifications refusées. Tu peux les rétablir dans les réglages du téléphone.'); renderNotif(); return; }
      return navigator.serviceWorker.ready.then(function (reg) {
        return fetch('/api/vapid').then(function (r) { return r.json(); }).then(function (k) {
          return reg.pushManager.getSubscription().then(function (existing) {
            return existing || reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToBytes(k.key) });
          });
        });
      }).then(function (sub) {
        return fetch('/api/push', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cid: cid, sub: sub.toJSON() })
        });
      }).then(function (r) {
        if (!r.ok) throw new Error('push');
        pushOn = true;
        renderNotif();
        toast('C’est activé. Tu seras prévenu·e quand quelqu’un publie un thème.');
      });
    }).catch(function () {
      toast('Impossible d’activer les notifications pour le moment.');
    });
  }

  // Le serveur gratuit peut oublier les abonnements quand il se rendort : on les lui redonne à chaque ouverture.
  function resyncPush() {
    if (!pushSupported() || Notification.permission !== 'granted') return;
    navigator.serviceWorker.ready.then(function (reg) { return reg.pushManager.getSubscription(); }).then(function (sub) {
      if (!sub) return;
      return fetch('/api/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cid: cid, sub: sub.toJSON() })
      }).then(function (r) { if (r.ok) { pushOn = true; renderNotif(); } });
    }).catch(function () {});
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredInstall = e;
    renderNotif();
  });
  window.addEventListener('appinstalled', function () { deferredInstall = null; renderNotif(); });
  $('btn-install').addEventListener('click', function () {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    deferredInstall.userChoice.then(function () { deferredInstall = null; renderNotif(); });
  });
  $('btn-notif').addEventListener('click', enableNotifications);

  /* ---------- Événements ---------- */
  $('invite-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var theme = clean($('theme').value, 60);
    if (!theme) { $('theme').focus(); return; }
    var checked = document.querySelector('input[name="size"]:checked');
    if (send({ t: 'invite', theme: theme, max: checked ? parseInt(checked.value, 10) : 2 })) { $('theme').value = ''; hideBranches(); }
    else toast('Connexion en cours, réessaie dans un instant.');
  });
  $('msg-form').addEventListener('submit', function (e) { e.preventDefault(); sendText(); });
  // Toucher « Envoyer » ne doit pas faire perdre le focus au champ (sinon le clavier se ferme).
  $('btn-send').addEventListener('pointerdown', function (e) { if (document.activeElement === $('msg')) e.preventDefault(); });
  $('btn-send').addEventListener('mousedown', function (e) { if (document.activeElement === $('msg')) e.preventDefault(); });
  $('theme').addEventListener('input', function () {
    var v = clean($('theme').value, 60);
    $('btn-publish').disabled = !open || replaced || !!room;
    clearTimeout(brTimer);
    if (v.length < 4) { if (!v.length) hideBranches(); return; }
    if (v === brTopic) return;
    brTimer = setTimeout(function () { loadBranches(v, []); }, 900);
  });
  $('mika-fab').addEventListener('click', openMikaSheet);
  $('btn-voice').addEventListener('click', toggleVoice);
  $('btn-voice2').addEventListener('click', toggleVoice);
  $('btn-place').addEventListener('click', function () { $('city').value = place.city; $('sheet-place').hidden = false; });
  $('btn-place-close').addEventListener('click', closeSheets);
  $('place-form').addEventListener('submit', function (e) { e.preventDefault(); savePlace(place.cc, $('city').value); closeSheets(); });
  $('btn-geo').addEventListener('click', geolocate);
  $('btn-more').addEventListener('click', function () {
    var openIt = $('more').hidden;
    $('more').hidden = !openIt;
    $('btn-more').setAttribute('aria-expanded', String(openIt));
    $('btn-more').childNodes[0].nodeValue = openIt ? 'Moins de thèmes ' : 'Plus de thèmes ';
  });
  $('btn-mika-close').addEventListener('click', closeSheets);
  $('btn-surprise').addEventListener('click', function () { closeSheets(); surprise(); });
  $('msg').addEventListener('input', updateSend);
  $('msg').addEventListener('click', updateMention);
  $('msg').addEventListener('keyup', function (e) { if (e.key !== 'Enter') updateMention(); });
  $('mention-pick').addEventListener('mousedown', function (e) { e.preventDefault(); });
  $('mention-pick').addEventListener('click', pickMention);
  $('mika-pill').addEventListener('pointerdown', function (e) { e.preventDefault(); });
  $('mika-pill').addEventListener('mousedown', function (e) { e.preventDefault(); });
  $('mika-pill').addEventListener('click', function () { pickMention(true); });
  $('msg').addEventListener('focus', function () { closePanel(); setTimeout(function () { $('log').scrollTop = $('log').scrollHeight; }, 250); });
  $('btn-emoji').addEventListener('click', function () { togglePanel('emoji'); });
  $('btn-gif').addEventListener('click', function () { togglePanel('gif'); });
  $('tab-emoji').addEventListener('click', function () { selectTab('emoji'); });
  $('tab-gif').addEventListener('click', function () { selectTab('gif'); });
  $('gq').addEventListener('input', function () {
    clearTimeout(gifTimer);
    gifTimer = setTimeout(function () { loadGifs(clean($('gq').value, 50)); }, 400);
  });

  $('btn-back').addEventListener('click', function () { closePanel(); $('sheet-leave').hidden = false; });
  $('btn-leave-no').addEventListener('click', closeSheets);
  $('btn-leave-yes').addEventListener('click', function () { closeSheets(); send({ t: 'leave' }); });
  $('btn-safety').addEventListener('click', function () { closePanel(); $('sheet-safety').hidden = false; });
  $('btn-safety-close').addEventListener('click', closeSheets);
  $('btn-age-yes').addEventListener('click', function () {
    store('talkie.adult', '1');
    $('sheet-age').hidden = true;
    send({ t: 'adult', v: true });
  });
  $('btn-age-no').addEventListener('click', function () { $('age-no').hidden = false; });
  if (store('talkie.adult') !== '1') showAge();
  loadConfig();
  $('btn-sound').addEventListener('click', function () { soundOn = !soundOn; store('talkie.sound', soundOn ? '1' : '0'); renderLook(); if (soundOn) { unlockAudio(); setTimeout(sfx.recv, 60); } });
  ['sheet-safety', 'sheet-leave'].forEach(function (id) {
    $(id).addEventListener('click', function (ev) { if (ev.target === $(id)) closeSheets(); });
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') { closeSheets(); closePanel(); }
  });

  $('filter').addEventListener('input', renderLobby);
  $('btn-reconnect').addEventListener('click', function () { replaced = false; retry = 0; connect(); });

  var nickInput = $('nick');
  nickInput.value = nick;
  nickInput.addEventListener('input', function () {
    var v = clean(nickInput.value, 20);
    if (!v) return;
    nick = v;
    store('tablee.nick', nick);
    send({ t: 'nick', nick: nick });
  });
  nickInput.addEventListener('blur', function () { nickInput.value = nick; });

  document.addEventListener('visibilitychange', function () {
    var visible = document.visibilityState !== 'hidden';
    send({ t: 'vis', v: visible });
    // Au retour sur l'écran, on vérifie que la connexion est vivante
    if (visible && !replaced && (!ws || ws.readyState > 1)) { retry = 0; connect(); }
  });
  window.addEventListener('online', function () { if (!replaced && (!ws || ws.readyState > 1)) { retry = 0; connect(); } });

  /* ---------- Démarrage ---------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js').catch(function () {}); });
  }
  renderChips(); renderMika(); renderTrends(); renderLook(); watchHero(); fillMika(); renderVoice();
  renderTrends();
  loadThemes();
  setInterval(loadThemes, 30 * 60 * 1000);
  setInterval(function () { if (!room) renderLobby(); }, 30000);
  renderLobby();
  renderNotif();
  connect();
})();
