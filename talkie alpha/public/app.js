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

  /* Mika se souvient de toi (sur ce téléphone uniquement) : dernière visite, thème, jours de suite. */
  var mem = (function () {
    try {
      var m = JSON.parse(store('talkie.mem') || '{}');
      return { visits: Number(m.visits) || 0, last: Number(m.last) || 0, streak: Number(m.streak) || 0, day: String(m.day || ''), theme: String(m.theme || '').slice(0, 60) };
    } catch (e) { return { visits: 0, last: 0, streak: 0, day: '', theme: '' }; }
  })();
  var prevVisit = { visits: mem.visits, last: mem.last, streak: mem.streak, theme: mem.theme };
  function saveMem() { store('talkie.mem', JSON.stringify(mem)); }
  (function () {
    var now = Date.now();
    var today = new Date(now).toLocaleDateString('sv-SE');
    if (mem.day !== today) {
      var y = new Date(now - 86400000).toLocaleDateString('sv-SE');
      mem.streak = mem.day === y ? mem.streak + 1 : 1;
      mem.day = today;
      mem.visits++;
    }
    mem.last = now;
    saveMem();
  })();
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
  var CHIPS = ['Les frites', 'Une journée difficile', 'Une série qui m’a marqué·e', 'Mon plat réconfort', 'Je veux juste discuter', 'Musique'];
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
      send({ t: 'hello', cid: cid, nick: nick, av: myAv, blocked: blocked, visible: document.visibilityState !== 'hidden', adult: store('talkie.adult') === '1' });
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
        tryJoinLink();
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
        if (room && m.room && m.room.id === room.id) { room = m.room; renderConvState(); renderStage(); }
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

  /* ---------- Mika (dessin kawaii) ---------- */
  var WARD = [
    { id: 'scarf', label: 'Écharpe', need: 3 }, { id: 'bow', label: 'Nœud', need: 6 }, { id: 'crown', label: 'Couronne', need: 12 },
    { id: 'glasses', label: 'Lunettes', premium: '1,49 €' }, { id: 'hat', label: 'Sorcier', premium: '1,99 €' },
    { id: 'wings', label: 'Ailes', premium: '2,49 €' }, { id: 'pj', label: 'Bonnet dodo', premium: '1,49 €' }
  ];
  var equip = (function () { try { var e = JSON.parse(store('talkie.equip') || 'null'); if (Array.isArray(e)) return e.slice(0, 8); } catch (er) { /* ignore */ } return null; })();
  function unlocked(w) { return !w.premium && ((mem && mem.visits) || 0) >= w.need; }
  function accClasses(force) {
    var out = '';
    WARD.forEach(function (w) {
      var on = force ? force === w.id : (equip ? equip.indexOf(w.id) >= 0 && unlocked(w) : unlocked(w));
      if (on) out += ' has-' + w.id;
    });
    return out;
  }
  function mikaSvg(force) {
    var eye = function (cx) {
      return '<g><ellipse cx="' + cx + '" cy="46" rx="6" ry="7.4" fill="#2A1B5E"/><g class="pupil"><circle cx="' + (cx + 2) + '" cy="43" r="2.9" fill="#fff"/><circle cx="' + (cx - 2) + '" cy="49.6" r="1.4" fill="#fff"/></g></g>';
    };
    return '<svg class="mk' + accClasses(force) + '" viewBox="0 0 80 80" aria-hidden="true">' +
      '<g class="ear ear-l"><circle cx="19" cy="24" r="12.5" fill="#5DE3B4"/><circle cx="19.5" cy="25" r="6.8" fill="#D9CCFF"/></g>' +
      '<g class="ear ear-r"><circle cx="61" cy="24" r="12.5" fill="#5DE3B4"/><circle cx="60.5" cy="25" r="6.8" fill="#D9CCFF"/></g>' +
      '<ellipse cx="28" cy="75" rx="8" ry="4" fill="#3FC79A"/><ellipse cx="52" cy="75" rx="8" ry="4" fill="#3FC79A"/>' +
      '<g class="body"><path d="M5 52 C5 30 20 17 40 17 C60 17 75 30 75 52 C75 68 59 77 40 77 C21 77 5 68 5 52Z" fill="#5DE3B4"/>' +
      '<ellipse cx="40" cy="64" rx="19" ry="10" fill="#C9FBE8" opacity=".8"/>' +
      '<ellipse cx="24" cy="30" rx="9" ry="4.5" fill="#fff" opacity=".5" transform="rotate(-25 24 30)"/></g>' +
      '<g class="leaf pom"><circle cx="35.5" cy="15" r="5" fill="#C7B8FF"/><circle cx="44.5" cy="15" r="5" fill="#C7B8FF"/><circle cx="40" cy="11" r="6" fill="#B3A2FF"/><circle cx="38.4" cy="9.4" r="1.8" fill="#fff" opacity=".7"/></g>' +
      '<g class="mk-arm-l"><ellipse cx="7.5" cy="57" rx="6" ry="4" fill="#44CFA0" transform="rotate(-35 7.5 57)"/></g>' +
      '<ellipse cx="72.5" cy="58" rx="6" ry="4" fill="#44CFA0" transform="rotate(35 72.5 58)"/>' +
      '<g class="ck"><ellipse cx="17.5" cy="57" rx="6" ry="3.8" fill="#FF8FC0" opacity=".85"/></g><g class="ck"><ellipse cx="62.5" cy="57" rx="6" ry="3.8" fill="#FF8FC0" opacity=".85"/></g>' +
      '<g class="eo">' + eye(27) + eye(53) + '</g>' +
      '<g class="eh" fill="none" stroke="#2A1B5E" stroke-width="3.2" stroke-linecap="round"><path d="M21 48.5 Q27 40 33 48.5"/><path d="M47 48.5 Q53 40 59 48.5"/></g>' +
      '<g class="ec" fill="none" stroke="#2A1B5E" stroke-width="3.2" stroke-linecap="round"><path d="M21 46 Q27 52 33 46"/><path d="M47 46 Q53 52 59 46"/></g>' +
      '<g class="ht" fill="#FF4F9A"><path d="M27 52 C20 47 22 40 27 44 C32 40 34 47 27 52Z"/><path d="M53 52 C46 47 48 40 53 44 C58 40 60 47 53 52Z"/></g>' +
      '<g class="bw" fill="none" stroke="#2A1B5E" stroke-width="2.6" stroke-linecap="round"><path d="M20.5 38.5 L33 34.5"/><path d="M47 34.5 L59.5 38.5"/></g>' +
      '<path class="ms" d="M35.5 58 Q37.8 61.6 40 58 Q42.2 61.6 44.5 58" stroke="#2A1B5E" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path class="mf" d="M35 62 Q40 56.5 45 62" stroke="#2A1B5E" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
      '<g class="mw"><path d="M33.5 56 Q40 69 46.5 56Z" fill="#7A2252"/><ellipse cx="40" cy="62.6" rx="3.4" ry="2" fill="#FF8FA3"/></g>' +
      '<ellipse class="mo" cx="40" cy="60" rx="3" ry="3.7" fill="#7A2252"/>' +
      '<ellipse class="mt" cx="40" cy="59.5" rx="4.2" ry="3" fill="#7A2252"/>' +
      '<path class="tr" d="M20 53 C17.5 57.5 17.5 60 20 60 C22.5 60 22.5 57.5 20 53Z" fill="#8EDBFF"/>' +
      '<path class="sw2" d="M66 30 C63.5 34.5 63.5 37 66 37 C68.5 37 68.5 34.5 66 30Z" fill="#8EDBFF"/>' +
      '<g class="sp" fill="#FFCF3F"><path d="M66 18 l1.6 4.4 l4.4 1.6 l-4.4 1.6 l-1.6 4.4 l-1.6 -4.4 l-4.4 -1.6 l4.4 -1.6z"/><path d="M12 14 l1.1 3 l3 1.1 l-3 1.1 l-1.1 3 l-1.1 -3 l-3 -1.1 l3 -1.1z"/></g>' +
      '<g class="acc acc-scarf"><path d="M16 67 Q40 79 64 67 L62 73 Q40 85 18 73Z" fill="#FF8FC0"/><path d="M52 75 l3 9 l5 -3 l-3 -8z" fill="#FF6FAE"/></g>' +
      '<g class="acc acc-bow"><path d="M19 12 l-9 -5 v11z M19 12 l9 -5 v11z" fill="#FF6FAE"/><circle cx="19" cy="12" r="3" fill="#FFB3D1"/></g>' +
      '<g class="acc acc-crown"><path d="M31 20 l2.5 -9 l5 5 l1.5 -8 l1.5 8 l5 -5 l2.5 9z" fill="#FFCF3F" stroke="#E5A800" stroke-width="1"/></g>' +
      '<g class="acc acc-glasses" fill="none" stroke="#2A1B5E" stroke-width="2.4"><circle cx="27" cy="46" r="9.5"/><circle cx="53" cy="46" r="9.5"/><path d="M36.5 46 H43.5"/></g>' +
      '<g class="acc acc-hat"><path d="M22 22 L40 -6 L58 22Z" fill="#7C5CFF"/><ellipse cx="40" cy="22" rx="22" ry="5" fill="#5B3FD6"/><circle cx="40" cy="2" r="2.4" fill="#FFCF3F"/></g>' +
      '<g class="acc acc-wings"><path d="M6 44 C-8 34 -6 52 8 56Z" fill="#fff" stroke="#D9CCFF" stroke-width="1.5"/><path d="M74 44 C88 34 86 52 72 56Z" fill="#fff" stroke="#D9CCFF" stroke-width="1.5"/></g>' +
      '<g class="acc acc-pj"><path d="M24 24 Q40 8 56 24 Q50 20 40 20 Q30 20 24 24Z" fill="#8EA2FF"/><circle cx="57" cy="24" r="4" fill="#fff"/></g>' +
      '<g class="zz" fill="#7C5CFF" font-family="sans-serif" font-weight="900"><text x="60" y="26" font-size="11">z</text><text x="67" y="16" font-size="8">z</text></g></svg>';
  }
  function fillMika() {
    Array.prototype.forEach.call(document.querySelectorAll('#mika-av, #fab-orb, #perch-mika, [data-mika]'), function (n) { n.innerHTML = mikaSvg(); });
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
    'Sport': ['Mon sport préféré à regarder', 'Me remettre au sport', 'Un souvenir de stade', 'Courir, nager, marcher…'],
    'Food': ['Les frites', 'Mon plat réconfort', 'Le meilleur snack à 22 h', 'Ma recette de réconfort'],
    'Jeux': ['Mon jeu vidéo préféré', 'Un jeu de société à tester', 'Mon plus gros rage quit', 'Jeux rétro'],
    'Voyage': ['Ma prochaine destination', 'Un endroit qui m’a changé·e', 'Voyager seul·e', 'Les bons plans week-end'],
    'Société': ['Ce que je pense de l’IA', 'Ce qui nous rapproche', 'Habiter en ville ou ailleurs ?', 'Un truc qui a changé ma vie'],
    'Soutien': ['Une journée difficile', 'Je veux juste discuter', 'Je n’arrive pas à dormir', 'Un petit bonheur']
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
    if (!t.length && themesState === 'none') t = [{ cat: 'Culture', text: 'Une série dont je suis fan', emoji: '📺' }, { cat: 'Food', text: 'Les frites', emoji: '🍟' }, { cat: 'Soutien', text: 'Un petit bonheur', emoji: '🌈' }, { cat: 'Société', text: 'Je veux juste discuter', emoji: '💬' }];
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
    if (typeof dir !== 'undefined' && dir && dir.waiting && todayThemes().length) propose(0);
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
  var UILANG = (function () { var l = String(navigator.language || 'fr').slice(0, 2).toLowerCase(); return /^(fr|en|es|de|it|pt|nl)$/.test(l) ? l : 'fr'; })();
  function savePlace(cc, city) {
    place = { cc: cc, city: clean(city, 40) };
    store('talkie.place', JSON.stringify(place));
    // On efface tout de suite l'ancien lieu : jamais l'actualité d'une autre ville le temps du chargement.
    AI_ITEMS = []; themesState = 'loading'; themesTry = 0;
    renderTrends();
    loadThemes();
  }

  var themesTry = 0, themesTimer = null;
  var themesSeq = 0;
  function loadThemes() {
    clearTimeout(themesTimer);
    var mySeq = ++themesSeq, askedKey = place.cc + '|' + place.city;
    if (!AI_ITEMS.length) themesState = 'loading';
    fetch('/api/themes?cc=' + encodeURIComponent(place.cc) + '&city=' + encodeURIComponent(place.city) + '&lang=' + UILANG).then(function (r) { return r.json(); }).then(function (d) {
      if (mySeq !== themesSeq || askedKey !== place.cc + '|' + place.city) return;
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

  /* ---------- Mika sur la première page : il parle, bouge et propose ---------- */
  var reduceMotion = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  var talkFlags = { t: false, v: false };
  function applyTalk() {
    var on = talkFlags.t || talkFlags.v;
    Array.prototype.forEach.call(document.querySelectorAll('#mika-av, #fab-orb'), function (n) { n.classList.toggle('talking', on); });
  }
  var ST = ['st-happy', 'st-wow', 'st-sleep', 'st-love', 'st-sad', 'st-worry', 'st-proud', 'st-shy'];
  var moodT = null;
  function mood(name, ms) {
    var a = $('mika-av');
    ST.forEach(function (c) { a.classList.remove(c); });
    clearTimeout(moodT);
    if (name) { a.classList.add('st-' + name); if (ms) moodT = setTimeout(function () { mood(null); }, ms); }
  }
  function anim(cls) {
    var a = $('mika-av');
    a.classList.remove(cls); void a.offsetWidth; a.classList.add(cls);
    setTimeout(function () { a.classList.remove(cls); }, 900);
  }
  function burst(list) {
    var fx = $('mika-fx');
    if (!fx || reduceMotion) return;
    for (var i = 0; i < 7; i++) {
      var sp = el('span', null, pick(list));
      sp.style.setProperty('--dx', Math.round(Math.random() * 110 - 55) + 'px');
      sp.style.setProperty('--rot', Math.round(Math.random() * 60 - 30) + 'deg');
      sp.style.animationDelay = (i * 70) + 'ms';
      fx.appendChild(sp);
      setTimeout(function (n) { if (n.parentNode) n.parentNode.removeChild(n); }.bind(null, sp), 1700);
    }
  }
  function look(dx, dy) {
    var sv = $('mika-av').querySelector('.mk');
    if (!sv) return;
    sv.style.setProperty('--lx', dx.toFixed(1) + 'px');
    sv.style.setProperty('--ly', dy.toFixed(1) + 'px');
  }
  var lastPtr = 0;
  document.addEventListener('pointermove', function (e) {
    if (room || e.pointerType === 'touch') return;
    var r = $('mika-av').getBoundingClientRect();
    if (!r.width) return;
    var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    lastPtr = Date.now();
    look(Math.max(-1, Math.min(1, (e.clientX - cx) / 160)) * 2.4, Math.max(-1, Math.min(1, (e.clientY - cy) / 160)) * 1.8);
  }, { passive: true });
  setInterval(function () { if (!room && Date.now() - lastPtr > 3500) look(Math.random() * 4.4 - 2.2, Math.random() * 2.4 - 1); }, 2600);

  function greeting() {
    var h = new Date().getHours();
    if (h >= 5 && h < 11) return pick(['Coucou toi ! 🌸 Bien dormi ? Prêt·e pour une petite dose de papote ?', 'Bonjouuur ! ☕ Moi c’est Mika, ton petit pote vert.']);
    if (h >= 11 && h < 18) return pick(['Hellooo ! 💚 Moi c’est Mika. Je te trouve quelqu’un avec qui papoter ?', 'Coucou ! ✨ Mika à ton service, version mochi.']);
    if (h >= 18 && h < 23) return pick(['Coucou ! 🌙 Soirée papote ? Je m’occupe de tout.', 'Hey toi ! ✨ On se fait une petite discussion ce soir ?']);
    return pick(['Oh, une âme de nuit… 🌙 Moi non plus je ne dors jamais !', 'Les couche-tard, c’est par ici 🌙 Je suis là, viens !']);
  }
  var sayTimer = null, sayTok = 0;
  function mikaSay(text, silent, state) {
    var bub = $('mika-say');
    var tok = ++sayTok;
    clearInterval(sayTimer);
    stopSpeaking();
    pet.lastSpoke = Date.now();
    if (pet.mode === 'roam') callHome();
    bub.setAttribute('aria-label', text);
    if (state !== false) mood(state || 'happy', 2600);
    var wantVoice = voiceOn && !silent && gesture;
    function start(audio) {
      if (tok !== sayTok) return;
      bub.classList.remove('thinking', 'say');
      void bub.offsetWidth;
      bub.classList.add('say');
      var len = String(text).length;
      var viaTts = false;
      var tickMs = audio && audio.duration ? Math.max(24, Math.min(120, audio.duration * 1000 / (audio.playbackRate || 1) / Math.max(1, len / 2))) : (wantVoice ? 70 : 26);
      if (audio) setTalking(true);
      else if (wantVoice) {
        viaTts = ttsSpeak(text);
        if (viaTts) tickMs = Math.max(55, Math.min(115, (len * 62) / Math.max(1, len / 2)));
        else { var ms = chirpSeq(text, tickMs); if (ms) setTalking(true); }
      }
      if (reduceMotion || len < 3) { bub.textContent = text; if (!audio && !viaTts) setTimeout(function () { if (tok === sayTok) setTalking(false); }, 600); return; }
      var node = document.createTextNode('');
      var cur = el('span', 'cursor');
      cur.setAttribute('aria-hidden', 'true');
      bub.textContent = '';
      bub.appendChild(node);
      bub.appendChild(cur);
      var i = 0;
      talkFlags.t = true; applyTalk();
      sayTimer = setInterval(function () {
        i += 2;
        node.nodeValue = String(text).slice(0, i);
        if (i >= len) {
          clearInterval(sayTimer);
          if (cur.parentNode) cur.parentNode.removeChild(cur);
          talkFlags.t = false; applyTalk();
          if (!audio && !viaTts) setTimeout(function () { if (tok === sayTok) setTalking(false); }, 350);
        }
      }, tickMs);
    }
    if (wantVoice && cloudTts && voiceEl) {
      bub.classList.add('thinking');
      bub.textContent = '';
      for (var d = 0; d < 3; d++) bub.appendChild(document.createElement('i'));
      cloudLine(text).then(function (a) {
        if (tok !== sayTok) return;
        var pr = a.play();
        if (pr && pr.then) pr.then(function () { start(a); }).catch(function () { start(null); });
        else start(a);
      }).catch(function () { start(null); });
    } else start(null);
  }
  function setQr(opts) {
    var qr = $('mika-qr');
    qr.textContent = '';
    opts.forEach(function (o) {
      var b = el('button', o[2] || null, o[0]);
      b.type = 'button';
      b.addEventListener('click', function () { dir.engaged = true; bumpIdle(); o[1](); });
      qr.appendChild(b);
    });
  }

  var dir = { i: 0, waiting: false, typed: false, engaged: false };
  var idleT = null, sleepT = null;
  function asleep() { return $('mika-av').classList.contains('st-sleep'); }
  function bumpIdle() {
    clearTimeout(idleT); clearTimeout(sleepT);
    idleT = setTimeout(nudge, 40000);
    sleepT = setTimeout(function () {
      if (room || document.hidden) return;
      mood('sleep'); $('mika-say').classList.remove('thinking');
      $('mika-say').textContent = 'Zzz… 💤 (touche-moi pour me réveiller)';
      stopSpeaking();
    }, 150000);
  }
  function publishNow() {
    var b = $('btn-publish');
    if (b && !b.disabled) b.click(); else mikaSay('Une seconde, je finis de me connecter… 🍃');
  }
  var OPENERS = ['Psst… chez toi, ça parle beaucoup de « %T ». Tu en dis quoi ? 👀', 'Gros sujet du jour : « %T ». On en discute ? 🌸', 'Là, tout le monde parle de « %T » ! Ça te tente ? ✨', 'Ooh, « %T »… ça ferait un super débat 🍿'];
  var YES = ['Kyaa ! Excellent choix, je suis trop contente 💖', 'Daebak ! On lance ça ✨', 'Hwaiting ! Tu vas faire de belles rencontres 🌸', 'Ouiii ! J’adore ton énergie 💚'];
  function voiceChip() { return (canSpeak && !voiceOn) ? [['🎵 Écoute ma voix', enableVoice, 'voice']] : []; }
  function propose(i) {
    var items = todayThemes();
    if (!items.length) { dir.waiting = true; setQr([]); mikaSay('Une seconde, je regarde ce qui buzz chez toi… 👀', true, 'wow'); return; }
    dir.waiting = false;
    dir.i = ((i % items.length) + items.length) % items.length;
    var x = items[dir.i];
    mikaSay(pick(OPENERS).replace('%T', x.text), false, 'happy');
    mainOffer();
  }
  function mainOffer() {
    var items = todayThemes();
    if (!items.length) return;
    var x = items[dir.i % items.length];
    setQr(voiceChip().concat([
      ['✨ Oui, on y va !', function () { accept(x); }, 'yes'],
      ['🔄 Une autre idée', function () { propose(dir.i + 1); }],
      ['🎲 Surprends-moi', surprise],
      ['💛 Juste discuter', calm]
    ]));
  }
  function readyToPublish() {
    setQr([['🚀 Publier maintenant', publishNow, 'yes'], ['🔄 Changer de thème', function () { propose(dir.i + 1); }]]);
  }
  function accept(x) {
    mood('love', 3500); anim('jump'); burst(['💖', '✨', '🎉', '🌸']);
    mikaSay(pick(YES) + ' Appuie sur Publier, je croise mes petites feuilles 🍃', false, 'love');
    pickTheme(x.text);
    readyToPublish();
  }
  function surprise() {
    var all = allThemes();
    if (!all.length) return;
    var x = all[Math.floor(Math.random() * all.length)];
    anim('jump'); burst(['🎲', '✨', '🎉']);
    mikaSay('Tadaaa ! « ' + x.text + ' » ? Je le sens bien 🎉', false, 'wow');
    pickTheme(x.text);
    readyToPublish();
  }
  function calm() {
    mood('love', 3000); burst(['💛', '🌸']);
    mikaSay('Avec plaisir ! Juste papoter, c’est le meilleur des thèmes 💛', false, 'love');
    pickTheme('Je veux juste discuter');
    readyToPublish();
  }
  function enableVoice() {
    voiceOn = true;
    store('talkie.voice', '1');
    renderVoice();
    anim('jump'); burst(['🎵', '💚', '✨']);
    mikaSay('Tadaa ! Tu m’entends ? Je suis encore plus mignon en vrai, non ? 🥹', false, 'happy');
    setTimeout(function () { if (!room && !dir.typed) mainOffer(); }, 3500);
  }
  var TAPS = ['Hihi, ça chatouille ! 🌸', 'Kyaa ! Doucement, je suis tout mou 🥹', 'Encore, encore ! …non, je rigole 💚', 'Aww, tu me fais rougir ✨', 'On papote, ou on joue à cache-cache ? 🍃'];
  $('mika-av').addEventListener('click', function () {
    if (pet.justDragged) return;
    dir.engaged = true;
    if (pet.mode !== 'home') { callHome(); pet.mode = 'home'; anim('jump'); burst(['💚', '✨']); mikaSay(pick(['Tu m’as trouvé ! 🌸', 'Cache-cache gagné… hihi 💚', 'Coucou, me revoilà ! ✨']), false, 'happy'); bumpIdle(); return; }
    bumpIdle();
    if (asleep()) { mood('wow', 1800); anim('shy'); mikaSay(pick(['Oh ! Je ne dormais pas, je méditais… 😳', 'Mmh ? Ah, tu es là ! Bonjour 🌸']), false, 'wow'); if (cmpTouch) cmpTouch(); return; }
    anim('jump'); burst(['💚', '✨', '🌸']);
    mikaSay(pick(TAPS), false, 'happy');
  });
  ['pointerdown', 'keydown'].forEach(function (ev) { document.addEventListener(ev, function () { if (!room) bumpIdle(); }, { passive: true }); });

  function visitGreeting() {
    var p = prevVisit, hrs = p.last ? (Date.now() - p.last) / 3600000 : 0;
    if (!p.visits) return { text: 'Coucou, enchanté·e ! 🌸 Moi c’est Mika. Je vis ici, et ma mission : te trouver quelqu’un de chouette avec qui papoter.', first: true };
    if (hrs < 3) return { text: pick(['Oh, te revoilà ! 🥹 J’adore quand tu reviens vite.', 'Re-coucou ! ✨ Tu m’as manqué… enfin, depuis tout à l’heure 😄']), back: true };
    var days = Math.floor(hrs / 24);
    var away = pick(['j’ai fait la sieste sur un nuage ☁️', 'j’ai compté les étoiles (il y en a beaucoup) ✨', 'j’ai rêvé de frites… encore 🍟', 'j’ai appris à faire des bulles de savon 🫧', 'j’ai rangé ma collection de pétales 🌸']);
    var t = days >= 2 ? 'Content de te revoir ! 🥹 Ça fait ' + days + ' jours… ' : 'Content de te revoir ! 🥹 ';
    return { text: t + 'Comment ça va depuis la dernière fois ?' + (days >= 1 ? ' Moi, ' + away + '.' : ''), checkin: true, streak: mem.streak, lastTheme: p.theme };
  }
  function checkin(g) {
    setQr([
      ['😄 Ça va super !', function () { mood('love', 3000); anim('jump'); burst(['💚', '✨']); mikaSay(pick(['Yesss, ça me fait trop plaisir ! 💚', 'Trop bien ! Garde cette énergie pour une bonne discussion ✨']), false, 'love'); afterCheckin(g, 2600); }, 'yes'],
      ['😮‍💨 Pas terrible', function () { mood('happy', 3000); burst(['🫂', '💛']); mikaSay('Oh, mon petit cœur… merci de me le dire 🫂 Une discussion douce peut aider. Je te trouve quelqu’un de sympa ?', false, 'happy'); afterCheckin(g, 3200, true); }],
      ['💬 Parlons-en', function () { mikaSay('Je suis tout ouïe 🥹 Écris ce qui te passe par la tête dans le champ en dessous, ou choisis un thème.', false, 'happy'); $('theme').focus(); setTimeout(mainOffer, 5000); }]
    ]);
  }
  function afterCheckin(g, wait, soft) {
    setTimeout(function () {
      if (room) return;
      if (g.lastTheme && !soft) {
        mikaSay('Et ta discussion sur « ' + g.lastTheme + ' », c’était chouette ?', false, 'happy');
        setQr([
          ['👍 Oui !', function () { mikaSay('Génial ! On remet ça aujourd’hui ? ✨', false, 'love'); setTimeout(function () { propose(0); }, 2200); }, 'yes'],
          ['🙈 Bof', function () { mikaSay('Ça arrive ! Cette fois, on tente un autre thème 🍀', false, 'happy'); setTimeout(function () { propose(0); }, 2200); }],
          ['🔁 Le même thème', function () { $('theme').value = g.lastTheme; $('btn-publish').disabled = !open || replaced || !!room; mikaSay('Allez, je te laisse relancer le même ! 🚀', false, 'happy'); readyToPublish(); }]
        ]);
      } else propose(0);
    }, wait);
  }
  function renderMika() {
    fillMika();
    var g = visitGreeting();
    mood(g.checkin || g.back ? 'love' : 'wow', 1800);
    setTimeout(function () {
      if (dir.engaged) return;
      anim('jump');
      if (g.checkin || g.back) burst(['💚', '✨', '🌸']);
      var extra = (g.checkin && g.streak >= 3) ? ' ' + g.streak + ' jours de suite, tu es adorable ✨' : '';
      mikaSay(g.text + extra, false, g.checkin || g.back ? 'love' : 'happy');
      setTimeout(function () {
        if (dir.engaged || room) return;
        if (g.checkin) checkin(g); else propose(0);
      }, reduceMotion ? 300 : 3600);
    }, reduceMotion ? 0 : 900);
    bumpIdle();
  }

  /* ---------- Le monde de Mika : ciel selon l'heure, Mika qui flotte et se promène ---------- */
  function setTod() {
    var h = new Date().getHours();
    var t = h >= 5 && h < 11 ? 'morning' : h >= 11 && h < 18 ? 'day' : h >= 18 && h < 22 ? 'evening' : 'night';
    var hero = document.querySelector('.hero');
    if (hero) hero.setAttribute('data-tod', t);
  }
  setTod();
  setInterval(setTod, 10 * 60 * 1000);

  /* Mika est un petit compagnon qui vit sur tout l'écran : il flotte chez lui, part se balader,
     se cache sur les bords, revient quand on lui parle, et on peut l'attraper pour le promener. */
  var PW = 104;
  var pet = { mode: 'home', x: 0, y: 0, s: 1, tilt: 0, hx: 0.1, htx: 0.55, nextHome: 0, wp: [], restUntil: 0, last: 0, init: false, drag0: null, drag: null, dropX: 0, dropY: 0, dropUntil: 0, nextTour: performance.now() + 15000, nextAct: performance.now() + 9000, lastSpoke: Date.now(), vis: 1, justDragged: false };
  document.body.appendChild($('mika-actor'));
  document.body.appendChild($('mika-shadow'));
  function callHome() { if (pet.mode === 'roam') { pet.mode = 'home'; pet.wp = []; pet.restUntil = 0; } }
  function startTour() {
    var vh = window.innerHeight, pts = [];
    for (var i = 0; i < 2; i++) pts.push({ side: Math.random() < 0.5 ? 'L' : 'R', y: 120 + Math.random() * Math.max(80, vh - 360) });
    pet.wp = pts; pet.mode = 'roam'; pet.restUntil = 0;
  }
  function petLoop(ts) {
    requestAnimationFrame(petLoop);
    var actor = $('mika-actor'), shadow = $('mika-shadow');
    if (document.hidden) { pet.last = 0; return; }
    if (room || $('lobby').hidden || curTab !== 'chambre') { actor.style.display = 'none'; shadow.style.display = 'none'; pet.last = 0; return; }
    actor.style.display = ''; shadow.style.display = '';
    var sr = $('mika-stage').getBoundingClientRect();
    var vw = window.innerWidth, vh = window.innerHeight;
    var stageVisible = sr.bottom > 60 && sr.top < vh - 60;
    var dt = pet.last ? Math.min(0.05, (ts - pet.last) / 1000) : 0.016;
    pet.last = ts;
    var sleeping = asleep(), busy = talkFlags.t || talkFlags.v;
    if (sleeping && pet.mode === 'roam') callHome();
    var range = Math.max(0, sr.width - PW);
    var bob = (sleeping || reduceMotion) ? 0 : 18 + 7 * Math.sin(ts / 620) + (busy ? 3 * Math.sin(ts / 150) : 0);
    var tx, ty, sc = 1, k = 14;
    if (pet.mode === 'drag' && pet.drag) {
      tx = pet.drag.px - PW / 2; ty = pet.drag.py - PW * 0.75; sc = 1.14; k = 22;
    } else if (pet.mode === 'roam' && pet.wp.length) {
      var w = pet.wp[0];
      sc = 0.72; k = 3.2;
      tx = w.side === 'L' ? -PW * sc * 0.4 : vw - PW * sc * 0.6;
      ty = w.y + bob * 0.4;
      var arrived = Math.abs(pet.x - tx) < 8 && Math.abs(pet.y - ty) < 14;
      if (arrived && !pet.restUntil) { pet.restUntil = ts + 3400; mood('happy', 2400); }
      else if (pet.restUntil && ts > pet.restUntil) { pet.wp.shift(); pet.restUntil = 0; if (!pet.wp.length) pet.mode = 'home'; }
    } else if (pet.mode === 'drop') {
      tx = pet.dropX; ty = pet.dropY + bob * 0.4; k = 8;
      if (ts > pet.dropUntil) pet.mode = 'home';
    } else {
      pet.mode = 'home';
      if (!sleeping && !busy && !reduceMotion && ts > pet.nextHome) { pet.htx = 0.02 + Math.random() * 0.96; pet.nextHome = ts + 3200 + Math.random() * 3800; }
      pet.hx += (pet.htx - pet.hx) * Math.min(1, dt * (busy ? 0.25 : 0.7));
      tx = sr.left + pet.hx * range;
      ty = sr.bottom - PW - 18 - bob;
      k = 9;
      var typing = document.activeElement && /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
      if (!reduceMotion && !sleeping && !busy && !typing && stageVisible && ts > pet.nextTour && Date.now() - pet.lastSpoke > 9000) { startTour(); pet.nextTour = ts + 26000 + Math.random() * 16000; }
    }
    if (!pet.init) { pet.x = tx; pet.y = ty; pet.init = true; }
    var px = pet.x;
    pet.x += (tx - pet.x) * Math.min(1, dt * k);
    pet.y += (ty - pet.y) * Math.min(1, dt * k);
    pet.s += (sc - pet.s) * Math.min(1, dt * 6);
    var vx = (pet.x - px) / Math.max(dt, 0.001);
    var tiltT = pet.mode === 'roam' && pet.restUntil ? (pet.wp[0] && pet.wp[0].side === 'L' ? 16 : -16) : Math.max(-10, Math.min(10, vx / 40));
    pet.tilt += (tiltT - pet.tilt) * Math.min(1, dt * 6);
    if (!reduceMotion && pet.mode === 'home' && !busy && !sleeping && stageVisible && ts > pet.nextAct) {
      pet.nextAct = ts + 16000 + Math.random() * 14000;
      var th = el('span', 'thought', pick(['🍡', '📖', '☁️', '🎧', '🍵', '🫧', '🌙', '🍓', '🎶']));
      actor.appendChild(th);
      setTimeout(function () { if (th.parentNode) th.parentNode.removeChild(th); }, 4400);
    }
    var show = pet.mode !== 'home' || stageVisible;
    pet.vis += ((show ? 1 : 0) - pet.vis) * Math.min(1, dt * 8);
    actor.style.opacity = pet.vis.toFixed(2);
    actor.style.pointerEvents = pet.vis < 0.5 || (pet.mode === 'roam' && !pet.restUntil) ? 'none' : 'auto';
    actor.style.transform = 'translate3d(' + pet.x.toFixed(1) + 'px,' + pet.y.toFixed(1) + 'px,0) rotate(' + pet.tilt.toFixed(1) + 'deg) scale(' + pet.s.toFixed(3) + ')';
    var onGround = pet.mode === 'home';
    shadow.style.opacity = onGround ? (Math.max(0, 0.85 - (sr.bottom - PW - 18 - pet.y - 0) / 70) * pet.vis).toFixed(2) : '0';
    shadow.style.transform = 'translate3d(' + pet.x.toFixed(1) + 'px,' + (sr.bottom - 24).toFixed(1) + 'px,0)';
    var bub = $('mika-say');
    bub.classList.toggle('away', pet.mode !== 'home');
    if (onGround) bub.style.setProperty('--mx', (pet.x + 52 - bub.getBoundingClientRect().left).toFixed(0) + 'px');
  }
  (function () {
    var A = $('mika-actor');
    A.addEventListener('pointerdown', function (e) {
      if (e.button > 0) return;
      pet.drag0 = { x: e.clientX, y: e.clientY, moved: false, id: e.pointerId };
    });
    A.addEventListener('pointermove', function (e) {
      var d = pet.drag0;
      if (!d) return;
      if (!d.moved && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 8) {
        d.moved = true;
        pet.mode = 'drag'; pet.drag = { px: e.clientX, py: e.clientY };
        try { A.setPointerCapture(d.id); } catch (er) { /* ignore */ }
        mood('wow'); dir.engaged = true; bumpIdle(); stopSpeaking();
      }
      if (d.moved) { pet.drag.px = e.clientX; pet.drag.py = e.clientY; e.preventDefault(); }
    });
    function end() {
      var d = pet.drag0;
      pet.drag0 = null;
      if (!d || !d.moved) return;
      pet.justDragged = true;
      setTimeout(function () { pet.justDragged = false; }, 80);
      var vw = window.innerWidth, vh = window.innerHeight;
      pet.mode = 'drop';
      pet.dropX = Math.max(-20, Math.min(vw - PW + 20, pet.x));
      pet.dropY = Math.max(70, Math.min(vh - PW - 20, pet.y));
      pet.dropUntil = performance.now() + 3200;
      anim('jump'); burst(['✨', '💚', '🌸']);
      mikaSay(pick(['Wouaaah ! Ça tourne ! 🎢', 'Hihi, une balade en l’air ! 🌸', 'Posé ! Merci pour le tour 💚', 'Encore, encore ! …ok non, je suis étourdi 🥴']), false, 'happy');
      pet.mode = 'drop';
    }
    A.addEventListener('pointerup', end);
    A.addEventListener('pointercancel', end);
  })();
  if (reduceMotion) { requestAnimationFrame(petLoop); } else requestAnimationFrame(petLoop);

  /* ---------- Mika dans la conversation : il se balade sur son perchoir et réagit ---------- */
  var perch = { x: -50, tx: 0.5, next: 0, last: 0, lastAct: Date.now(), asleep: false, nextThought: 0, moodT: null, entered: false };
  function perchMood(name, ms) {
    var a = $('perch-mika');
    ST.forEach(function (c) { a.classList.remove(c); });
    clearTimeout(perch.moodT);
    if (name) { a.classList.add('st-' + name); if (ms) perch.moodT = setTimeout(function () { if (!perch.asleep) perchMood(null); }, ms); }
  }
  function perchAnim(cls) {
    var a = $('perch-mika');
    a.classList.remove(cls); void a.offsetWidth; a.classList.add(cls);
    setTimeout(function () { a.classList.remove(cls); }, 900);
  }
  function perchLook(dx, dy) {
    var sv = $('perch-mika').querySelector('.mk');
    if (!sv) return;
    sv.style.setProperty('--lx', dx.toFixed(1) + 'px');
    sv.style.setProperty('--ly', dy.toFixed(1) + 'px');
  }
  function perchThought(emoji) {
    var t = $('perch-thought');
    t.textContent = emoji;
    t.style.left = Math.max(2, perch.x + 30) + 'px';
    t.style.top = '2px';
    t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
    t.hidden = false;
    clearTimeout(perch.thT);
    perch.thT = setTimeout(function () { t.hidden = true; }, 3700);
  }
  function perchWake() {
    perch.lastAct = Date.now();
    if (perch.asleep) { perch.asleep = false; perchMood('wow', 1200); perchAnim('shy'); }
  }
  function perchReact(kind) {
    if (replaying) return;
    perchWake();
    if (kind === 'ai') { perchAnim('jump'); perchMood('happy', 2000); perch.tx = 0.3 + Math.random() * 0.4; perchThought(pick(['💬', '✨', '💚'])); }
    else if (kind === 'human') { perchMood('wow', 800); perchLook(Math.random() < 0.5 ? -2.2 : 2.2, 1.4); if (Math.random() < 0.4) perchThought(pick(['👀', '👂', '💭'])); }
    else { perchLook(0, 1.6); }
  }
  function perchEnter() {
    perch.x = 120; perch.tx = 0.35; perch.next = performance.now() + 4000; perch.lastAct = Date.now(); perch.asleep = false;
    perchMood('happy', 2200);
    setTimeout(function () { if (room) perchThought('👋'); }, 900);
  }
  function perchLoop(ts) {
    requestAnimationFrame(perchLoop);
    if (!room || $('conv').hidden || document.hidden) { perch.last = 0; return; }
    var box = $('perch'), w = box.clientWidth;
    if (!w) return;
    var dt = perch.last ? Math.min(0.05, (ts - perch.last) / 1000) : 0.016;
    perch.last = ts;
    var lo = 56, hi = w - 56 * Math.max(1, perch.others || 1) - 46;
    var range = Math.max(0, hi - lo);
    if (!perch.asleep && Date.now() - perch.lastAct > 75000) { perch.asleep = true; perchMood('sleep'); }
    if (!perch.asleep && !reduceMotion && ts > perch.next) { perch.tx = Math.random(); perch.next = ts + 2600 + Math.random() * 4600; }
    var target = lo + perch.tx * range;
    var before = perch.x;
    if (!perch.asleep) perch.x += (target - perch.x) * Math.min(1, dt * 0.9);
    var moving = Math.abs(perch.x - before) / Math.max(dt, 0.001) > 8;
    var hop = (!perch.asleep && moving && !reduceMotion) ? Math.abs(Math.sin(ts / 105)) * 6 : 0;
    var tilt = moving ? Math.max(-8, Math.min(8, (perch.x - before) / Math.max(dt, 0.001) / 14)) : 0;
    $('perch-mika').style.transform = 'translate3d(' + perch.x.toFixed(1) + 'px,' + (-hop).toFixed(1) + 'px,0) rotate(' + tilt.toFixed(1) + 'deg)';
    if (!perch.asleep && !reduceMotion && ts > perch.nextThought) {
      perch.nextThought = ts + 15000 + Math.random() * 12000;
      perchThought(pick(['🍡', '🎶', '☁️', '🫧', '🍓', '💭']));
    }
  }
  requestAnimationFrame(perchLoop);
  $('perch-mika').addEventListener('click', function () {
    perchWake(); perchAnim('jump'); perchMood('happy', 1800); perchThought('💬');
    var m = $('msg');
    if (!m.disabled) {
      if (!m.value) { m.value = 'Mika, '; m.dispatchEvent(new Event('input')); }
      m.focus();
    }
  });

  /* ---------- Inviter des ami·e·s dans la conversation ---------- */
  function shareRoom() {
    if (!room) return;
    var full = room.members && room.max && room.members.length >= room.max;
    if (full) { toast('La conversation est déjà complète (' + room.max + ' personnes).'); return; }
    var url = location.origin + '/?r=' + encodeURIComponent(room.id);
    var text = 'Viens papoter de « ' + room.theme + ' » avec moi sur Talkie 💚';
    if (navigator.share) { navigator.share({ title: 'Talkie', text: text, url: url }).catch(function () {}); return; }
    var all = text + ' ' + url;
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(all).then(function () { toast('Lien copié ! Envoie-le à ton ami·e 💌'); }, function () { window.prompt('Copie ce lien :', all); });
    else window.prompt('Copie ce lien :', all);
  }
  $('btn-invite').addEventListener('click', shareRoom);
  var linkRoom = (function () {
    try { var r = new URLSearchParams(location.search).get('r'); return r && /^[A-Za-z0-9_-]{3,24}$/.test(r) ? r : null; } catch (e) { return null; }
  })();
  if (linkRoom) { try { history.replaceState(null, '', location.pathname); } catch (e) { /* ignore */ } }
  function tryJoinLink() {
    if (!linkRoom || room) return;
    var id = linkRoom;
    if (store('talkie.adult') !== '1') { showAge(); return; }
    linkRoom = null;
    if (send({ t: 'join', id: id })) toast('Je te connecte à l’invitation de ton ami·e… 💚');
  }

  /* ---------- Voix de Mika (facultative, coupée par défaut) ----------
     Deux voix : une vraie voix neuronale mignonne si le serveur en a une (clé OPENAI_API_KEY), sinon
     la voix « gazouillis » de Mika, fabriquée dans le navigateur (WebAudio), toujours douce et jamais robotique. */
  var AC = window.AudioContext || window.webkitAudioContext;
  var canTTS = 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';
  var canSpeak = !!AC || canTTS;
  var voiceOn = canSpeak && store('talkie.voice') === '1';
  var cloudTts = false, cloudRate = 1.12;
  var gesture = false;
  var actx = null, seq = null;
  var voiceEl = null;
  fetch('/api/config').then(function (r) { return r.json(); }).then(function (d) { cloudTts = !!(d && d.tts); if (d && d.ttsRate) cloudRate = d.ttsRate; }).catch(function () {});

  function unlockVoice() {
    if (gesture) return;
    gesture = true;
    try {
      voiceEl = new Audio();
      voiceEl.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=';
      var pr = voiceEl.play();
      if (pr && pr.catch) pr.catch(function () {});
    } catch (e) { /* ignore */ }
  }
  ['pointerdown', 'touchend', 'click', 'keydown'].forEach(function (ev) { document.addEventListener(ev, unlockVoice, { passive: true, capture: true }); });

  function audioReady() {
    if (!canSpeak || !gesture) return false;
    try {
      if (!actx) actx = new AC();
      if (actx.state === 'suspended') actx.resume();
      return true;
    } catch (e) { return false; }
  }
  function setTalking(on) { talkFlags.v = !!on; applyTalk(); }
  function speakable(t) {
    return String(t || '').replace(/@mika/gi, 'Mika').replace(/[\p{Extended_Pictographic}️‍]/gu, '').replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim().slice(0, 220);
  }
  function stopChirps() {
    if (seq) { try { seq.gain.cancelScheduledValues(0); seq.gain.value = 0; seq.disconnect(); } catch (e) { /* ignore */ } seq = null; }
  }
  var frVoice = null;
  function pickVoice() {
    if (!canTTS) return;
    var vs = speechSynthesis.getVoices().filter(function (v) { return /^fr/i.test(v.lang); });
    if (!vs.length) return;
    function score(v) {
      var n = v.name + ' ' + (v.voiceURI || '');
      var sc = 0;
      if (/natural|neural|online/i.test(n)) sc += 6;
      if (/enhanced|premium|siri|am[eé]lie|audrey|aur[eé]lie|marie|julie|c[eé]line|denise|eloise|[eé]lo[iï]se|hortense|vivienne|brigitte|jeanne|fem|woman/i.test(n)) sc += 3;
      if (/google/i.test(n)) sc += 2;
      if (/^fr[-_]FR/i.test(v.lang)) sc += 1;
      if (/thomas|henri|paul|claude|jean|male|homme|antoine|remy/i.test(n)) sc -= 3;
      return sc;
    }
    vs.sort(function (a, b) { return score(b) - score(a); });
    frVoice = vs[0];
  }
  if (canTTS) { pickVoice(); if (speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', pickVoice); }
  // Voix du téléphone (la plus naturelle trouvée), un peu plus aiguë : compréhensible, sans clé.
  function ttsSpeak(text) {
    if (!canTTS || !frVoice || !gesture) return false;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(speakable(text));
      u.lang = frVoice.lang || 'fr-FR'; u.voice = frVoice; u.pitch = 1.45; u.rate = 1.04; u.volume = 1;
      u.onstart = function () { setTalking(true); };
      u.onend = u.onerror = function () { setTalking(false); };
      speechSynthesis.speak(u);
      return true;
    } catch (e) { return false; }
  }
  function stopSpeaking() {
    stopChirps();
    if (canTTS) { try { speechSynthesis.cancel(); } catch (e) { /* ignore */ } }
    if (voiceEl) { try { voiceEl.pause(); voiceEl.onended = null; } catch (e) { /* ignore */ } }
    setTalking(false);
  }
  function blip(dest, f, t0, dur, vol) {
    var o = actx.createOscillator(), o2 = actx.createOscillator(), g = actx.createGain(), g2 = actx.createGain(), lp = actx.createBiquadFilter();
    o.type = 'sine'; o2.type = 'triangle';
    o.frequency.setValueAtTime(f, t0); o.frequency.exponentialRampToValueAtTime(f * 1.09, t0 + dur * 0.7);
    o2.frequency.setValueAtTime(f * 2, t0); o2.frequency.exponentialRampToValueAtTime(f * 2.18, t0 + dur * 0.7);
    g2.gain.value = 0.22;
    o2.connect(g2); g2.connect(g); o.connect(g);
    lp.type = 'lowpass'; lp.frequency.value = 3600;
    g.connect(lp); lp.connect(dest);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.start(t0); o2.start(t0); o.stop(t0 + dur + 0.03); o2.stop(t0 + dur + 0.03);
  }
  var SCALE = [0, 2, 4, 7, 9, 12, 14, 16];
  // Un petit gazouillis par groupe de 2 lettres, au rythme de la machine à écrire.
  function chirpSeq(text, tickMs) {
    if (!audioReady()) return 0;
    stopChirps();
    seq = actx.createGain();
    seq.gain.value = 0.85;
    seq.connect(actx.destination);
    var s = speakable(text).toLowerCase();
    var t = actx.currentTime + 0.04, k = 0, last = '';
    for (var i = 0; i < s.length; i += 2, k++) {
      var ch = s.charAt(i);
      if (!/[a-zà-ÿ0-9]/.test(ch)) continue;
      var step = SCALE[(s.charCodeAt(i) + s.charCodeAt(i + 1 < s.length ? i + 1 : i)) % SCALE.length] + (/[aeiouyàâéèêîôù]/.test(ch) ? 3 : 0);
      blip(seq, 600 * Math.pow(2, step / 12) * (1 + (Math.random() - 0.5) * 0.04), t + k * tickMs / 1000, tickMs / 1000 * 0.92, 0.1);
    }
    var end = t + k * tickMs / 1000;
    last = s.replace(/\s+$/, '').slice(-1);
    if (last === '?') { blip(seq, 880, end, 0.16, 0.1); blip(seq, 1180, end + 0.12, 0.2, 0.1); }
    else if (last === '!' || /[🎉💖]/u.test(String(text))) { blip(seq, 1046, end, 0.1, 0.1); blip(seq, 1318, end + 0.09, 0.1, 0.1); blip(seq, 1568, end + 0.18, 0.16, 0.1); }
    return k * tickMs;
  }
  // Vraie voix (serveur) : on charge la phrase, puis on la joue avec la bouche de Mika qui bouge.
  function cloudLine(text) {
    return new Promise(function (resolve, reject) {
      if (!voiceEl) { reject(new Error('audio')); return; }
      var a = voiceEl, done = false;
      var to = setTimeout(function () { finish(new Error('lent')); }, 6000);
      function finish(err) {
        if (done) return;
        done = true; clearTimeout(to);
        a.removeEventListener('canplaythrough', ok); a.removeEventListener('error', ko);
        if (err) reject(err); else resolve(a);
      }
      function ok() { finish(null); }
      function ko() { finish(new Error('voix')); }
      a.addEventListener('canplaythrough', ok);
      a.addEventListener('error', ko);
      a.onended = function () { setTalking(false); };
      // Un peu plus aigu et pétillant : la hauteur suit la vitesse, comme une petite voix d'anime.
      try { a.preservesPitch = false; a.mozPreservesPitch = false; a.webkitPreservesPitch = false; a.defaultPlaybackRate = cloudRate; a.playbackRate = cloudRate; } catch (e) { /* ignore */ }
      a.src = '/api/tts?t=' + encodeURIComponent(speakable(text));
      try { a.load(); } catch (e) { finish(e); }
    });
  }
  // Phrases de la conversation (texte écrit par des personnes ou par Mika en salon) : jamais envoyées au serveur de voix.
  function speak(text) {
    if (!canSpeak || !voiceOn) return;
    if (ttsSpeak(String(text).slice(0, 160))) return;
    var ms = chirpSeq(String(text).slice(0, 70), 80);
    if (ms) { setTalking(true); setTimeout(function () { setTalking(false); }, ms + 300); }
  }
  function renderVoice() {
    $('btn-voice').hidden = !canSpeak;
    $('btn-voice').setAttribute('aria-pressed', String(voiceOn));
    $('btn-voice').setAttribute('aria-label', voiceOn ? 'Couper la voix de Mika' : 'Activer la voix de Mika');
    $('voice-ico').textContent = voiceOn ? '🔊' : '🔇';
    Array.prototype.forEach.call(document.querySelectorAll('.js-voicerow'), function (r) { r.hidden = !canSpeak; });
    Array.prototype.forEach.call(document.querySelectorAll('.js-voice'), function (b) {
      b.setAttribute('aria-pressed', String(voiceOn));
      b.textContent = voiceOn ? 'Activée' : 'Coupée';
    });
  }
  function toggleVoice() {
    voiceOn = !voiceOn;
    store('talkie.voice', voiceOn ? '1' : '0');
    renderVoice();
    if (!voiceOn) { stopSpeaking(); return; }
    if (!room) mikaSay('Coucou ! Me voilà avec ma petite voix 🎵', false, 'happy'); else speak('Coucou ! Me voilà !');
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
  function updateFab() { $('mika-fab').hidden = !(curTab === 'salon' && !$('lobby').hidden); }
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
      var iav = el('div', 'avatar av-slot'); iav.innerHTML = avatarSvg(inv.av || defaultAv(inv.nick)); li.appendChild(iav);
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
    perchEnter();
    renderStage();
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
      if (isHost && !w.querySelector('.invite-box')) {
        var ib = el('div', 'invite-box');
        var bt = el('button', null, '💌 Inviter un·e ami·e');
        bt.type = 'button';
        bt.addEventListener('click', shareRoom);
        ib.appendChild(bt);
        w.appendChild(ib);
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
    Array.prototype.forEach.call(document.querySelectorAll('.js-sound'), function (sb) {
      sb.textContent = soundOn ? 'Activés' : 'Coupés';
      sb.setAttribute('aria-pressed', String(soundOn));
    });
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
    perchReact(ai ? 'ai' : (mine ? 'me' : 'human'));
    stageSay(m);
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
  function closeSheets() { $('sheet-safety').hidden = true; $('sheet-leave').hidden = true; $('sheet-mika').hidden = true; $('sheet-place').hidden = true; $('sheet-settings').hidden = true; }

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
    $('tips').hidden = false;
  }
  $('btn-share-app').addEventListener('click', function () {
    var url = location.origin + '/';
    var text = 'Viens papoter sur Talkie : un thème, quelqu’un te rejoint, et Mika met l’ambiance 💚';
    if (navigator.share) { navigator.share({ title: 'Talkie', text: text, url: url }).catch(function () {}); return; }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text + ' ' + url).then(function () { toast('Lien copié ! 💌'); }, function () { window.prompt('Copie ce lien :', text + ' ' + url); });
    else window.prompt('Copie ce lien :', text + ' ' + url);
  });
  $('btn-install-ios').addEventListener('click', function () { toast('Touche Partager dans Safari, puis « Sur l’écran d’accueil » 📲'); });

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
    if (send({ t: 'invite', theme: theme, max: checked ? parseInt(checked.value, 10) : 2 })) { mem.theme = theme; saveMem(); $('theme').value = ''; hideBranches(); }
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
  function applyScheme(v, save) {
    if (save) store('talkie.scheme', v);
    var dark = v === 'dark' || (v === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.setAttribute('data-scheme', 'dark'); else document.documentElement.removeAttribute('data-scheme');
    var tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute('content', dark ? '#17103A' : '#FFF8EE');
    Array.prototype.forEach.call(document.querySelectorAll('.seg button'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-scheme') === v)); });
  }
  applyScheme(store('talkie.scheme') || 'light', false);
  Array.prototype.forEach.call(document.querySelectorAll('.seg button'), function (b) { b.addEventListener('click', function () { applyScheme(b.getAttribute('data-scheme'), true); }); });
  $('btn-settings').addEventListener('click', function () { closeSheets(); renderVoice(); renderLook(); $('sheet-settings').hidden = false; });
  $('btn-settings-close').addEventListener('click', closeSheets);
  $('btn-settings-place').addEventListener('click', openPlace);
  Array.prototype.forEach.call(document.querySelectorAll('.js-voice'), function (b) { b.addEventListener('click', toggleVoice); });
  var COUNTRIES = ['FR', 'BE', 'CH', 'LU', 'CA', 'US', 'GB', 'IE', 'DE', 'ES', 'IT', 'PT', 'NL', 'MA', 'DZ', 'TN', 'SN', 'CI', 'BR', 'MX', 'AU'];
  function openPlace() {
    var sel = $('country');
    if (!sel.options.length) {
      COUNTRIES.forEach(function (c) { var o = document.createElement('option'); o.value = c; o.textContent = countryName(c); sel.appendChild(o); });
    }
    if (COUNTRIES.indexOf(place.cc) === -1) { var o2 = document.createElement('option'); o2.value = place.cc; o2.textContent = countryName(place.cc); sel.appendChild(o2); }
    sel.value = place.cc;
    $('city').value = place.city;
    $('place-results').hidden = true;
    closeSheets();
    $('sheet-place').hidden = false;
  }
  function applyPlace(cc, city) { savePlace(cc, city); closeSheets(); toast('📍 ' + (city || countryName(cc)) + ' : j’actualise les thèmes !'); }
  $('btn-place').addEventListener('click', openPlace);
  $('country').addEventListener('change', function () { applyPlace($('country').value, ''); });
  $('btn-place-close').addEventListener('click', closeSheets);
  $('place-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var q = clean($('city').value, 40);
    if (!q) { applyPlace(place.cc, ''); return; }
    var box = $('place-results');
    box.hidden = true;
    fetch('/api/place?q=' + encodeURIComponent(q) + '&lang=' + UILANG).then(function (r) { return r.json(); }).then(function (d) {
      var items = (d && d.items) || [];
      if (!items.length) { toast('Je ne trouve pas « ' + q + ' ». Vérifie l’orthographe ou choisis juste un pays.'); return; }
      if (items.length === 1) { applyPlace(items[0].cc, items[0].city); return; }
      box.textContent = '';
      items.forEach(function (it) {
        var b = el('button', null, it.city + ' · ' + (it.region ? it.region + ', ' : '') + it.country);
        b.type = 'button';
        b.addEventListener('click', function () { applyPlace(it.cc, it.city); });
        box.appendChild(b);
      });
      box.hidden = false;
    }).catch(function () { toast('La recherche de ville est indisponible, réessaie dans un instant.'); });
  });
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
    setTimeout(tryJoinLink, 400);
  });
  $('btn-age-no').addEventListener('click', function () { $('age-no').hidden = false; });
  if (store('talkie.adult') !== '1') showAge();
  loadConfig();
  Array.prototype.forEach.call(document.querySelectorAll('.js-sound'), function (b) { b.addEventListener('click', soundToggle); });
  function soundToggle() { soundOn = !soundOn; store('talkie.sound', soundOn ? '1' : '0'); renderLook(); if (soundOn) { unlockAudio(); setTimeout(sfx.recv, 60); } }
  ['sheet-safety', 'sheet-leave', 'sheet-settings'].forEach(function (id) {
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
    send({ t: 'nick', nick: nick, av: myAv });
  });
  nickInput.addEventListener('blur', function () { nickInput.value = nick; });

  document.addEventListener('visibilitychange', function () {
    var visible = document.visibilityState !== 'hidden';
    send({ t: 'vis', v: visible });
    // Au retour sur l'écran, on vérifie que la connexion est vivante
    if (visible && !replaced && (!ws || ws.readyState > 1)) { retry = 0; connect(); }
  });
  window.addEventListener('online', function () { if (!replaced && (!ws || ws.readyState > 1)) { retry = 0; connect(); } });

  /* ---------- Avatar de l'utilisateur ---------- */
  var AV_COLORS = ['#5DE3B4', '#B9A6FF', '#FFB89A', '#8EDBFF', '#FFE27A', '#FFA8CF', '#A8E86B', '#E0E4F2'];
  var AV_EARS = ['Chat', 'Ours', 'Lapin', 'Aucune'];
  var AV_FACE = ['Rond', 'Content', 'Étoiles'];
  var AV_ACC = ['Rien', 'Nœud', 'Lunettes', 'Bonnet', 'Fleur'];
  function hash(str) { var h = 0; str = String(str); for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0; return Math.abs(h); }
  function defaultAv(seed) { var h = hash(seed); return '' + (h % 8) + (Math.floor(h / 8) % 4) + (Math.floor(h / 32) % 3) + (Math.floor(h / 96) % 5); }
  function avatarSvg(code) {
    code = /^[0-7][0-3][0-2][0-4]$/.test(code || '') ? code : defaultAv(code || 'x');
    var c = AV_COLORS[+code[0]], ear = +code[1], face = +code[2], acc = +code[3];
    var ink = '#2A1B5E', g = '';
    if (ear === 0) g += '<path d="M12 36 L14 8 L32 22Z" fill="' + c + '"/><path d="M68 36 L66 8 L48 22Z" fill="' + c + '"/><path d="M16 28 L17 15 L26 22Z" fill="#FFB3D1"/><path d="M64 28 L63 15 L54 22Z" fill="#FFB3D1"/>';
    else if (ear === 1) g += '<circle cx="17" cy="21" r="10" fill="' + c + '"/><circle cx="63" cy="21" r="10" fill="' + c + '"/><circle cx="17" cy="21" r="5" fill="#FFB3D1"/><circle cx="63" cy="21" r="5" fill="#FFB3D1"/>';
    else if (ear === 2) g += '<ellipse cx="26" cy="12" rx="7" ry="16" fill="' + c + '" transform="rotate(-8 26 12)"/><ellipse cx="54" cy="12" rx="7" ry="16" fill="' + c + '" transform="rotate(8 54 12)"/><ellipse cx="26" cy="13" rx="3.4" ry="10" fill="#FFB3D1" transform="rotate(-8 26 13)"/><ellipse cx="54" cy="13" rx="3.4" ry="10" fill="#FFB3D1" transform="rotate(8 54 13)"/>';
    else g += '<circle cx="40" cy="14" r="6" fill="' + c + '"/><circle cx="40" cy="14" r="2.6" fill="#fff" opacity=".6"/>';
    g += '<ellipse cx="40" cy="48" rx="31" ry="28" fill="' + c + '"/><ellipse cx="29" cy="30" rx="8" ry="4" fill="#fff" opacity=".4" transform="rotate(-25 29 30)"/>';
    g += '<ellipse cx="19" cy="55" rx="5.5" ry="3.4" fill="#FF8FC0" opacity=".8"/><ellipse cx="61" cy="55" rx="5.5" ry="3.4" fill="#FF8FC0" opacity=".8"/>';
    if (face === 0) g += '<ellipse cx="29" cy="47" rx="4.6" ry="5.8" fill="' + ink + '"/><ellipse cx="51" cy="47" rx="4.6" ry="5.8" fill="' + ink + '"/><circle cx="30.4" cy="44.8" r="1.8" fill="#fff"/><circle cx="52.4" cy="44.8" r="1.8" fill="#fff"/>';
    else if (face === 1) g += '<g fill="none" stroke="' + ink + '" stroke-width="3" stroke-linecap="round"><path d="M23.5 49 Q29 41 34.5 49"/><path d="M45.5 49 Q51 41 56.5 49"/></g>';
    else g += '<ellipse cx="29" cy="47" rx="6" ry="7" fill="' + ink + '"/><ellipse cx="51" cy="47" rx="6" ry="7" fill="' + ink + '"/><circle cx="31" cy="44" r="2.5" fill="#fff"/><circle cx="27" cy="50" r="1.2" fill="#fff"/><circle cx="53" cy="44" r="2.5" fill="#fff"/><circle cx="49" cy="50" r="1.2" fill="#fff"/>';
    g += '<path d="M35.5 57 Q40 62 44.5 57" stroke="' + ink + '" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
    if (acc === 1) g += '<path d="M54 20 l10 -6 v13z M54 20 l-10 -6 v13z" fill="#FF6FAE"/><circle cx="54" cy="20" r="3.2" fill="#FFB3D1"/>';
    else if (acc === 2) g += '<g fill="none" stroke="' + ink + '" stroke-width="2.4"><circle cx="29" cy="47" r="9"/><circle cx="51" cy="47" r="9"/><path d="M38 47 H42"/></g>';
    else if (acc === 3) g += '<path d="M14 28 Q40 -2 66 28 Q40 20 14 28Z" fill="#FF6F8E"/><circle cx="40" cy="6" r="4.5" fill="#fff"/>';
    else if (acc === 4) g += '<g transform="translate(58 18)"><circle r="3" fill="#FFCF3F"/><g fill="#FFB3D1"><circle cx="0" cy="-6" r="3.6"/><circle cx="6" cy="0" r="3.6"/><circle cx="0" cy="6" r="3.6"/><circle cx="-6" cy="0" r="3.6"/></g><circle r="3" fill="#FFCF3F"/></g>';
    return '<svg viewBox="0 0 80 80" aria-hidden="true">' + g + '</svg>';
  }
  var myAv = (function () { var v = store('talkie.av'); return /^[0-7][0-3][0-2][0-4]$/.test(v || '') ? v : defaultAv(cid); })();
  var avDraft = myAv;
  function renderAvEditor() {
    $('avprev').innerHTML = avatarSvg(avDraft);
    function row(id, labels, idx, swatch) {
      var box = $(id); box.textContent = '';
      labels.forEach(function (l, i) {
        var b = el('button', (swatch ? 'sw ' : '') + (+avDraft[idx] === i ? 'on' : ''), swatch ? '' : l);
        b.type = 'button';
        if (swatch) { b.style.background = l; b.setAttribute('aria-label', 'Couleur ' + (i + 1)); }
        b.addEventListener('click', function () { var a = avDraft.split(''); a[idx] = String(i); avDraft = a.join(''); renderAvEditor(); });
        box.appendChild(b);
      });
    }
    row('av-colors', AV_COLORS, 0, true); row('av-ears', AV_EARS, 1); row('av-face', AV_FACE, 2); row('av-acc', AV_ACC, 3);
  }
  function openAvEditor() { closeSheets(); avDraft = myAv; renderAvEditor(); $('sheet-av').hidden = false; }
  function saveAv() {
    myAv = avDraft; store('talkie.av', myAv); store('talkie.avset', '1');
    send({ t: 'nick', nick: nick, av: myAv });
    $('sheet-av').hidden = true; renderMoi(); toast('Avatar enregistré ✨');
  }
  $('btn-edit-av').addEventListener('click', openAvEditor);
  $('me-av').addEventListener('click', openAvEditor);
  $('av-save').addEventListener('click', saveAv);
  $('av-rand').addEventListener('click', function () { avDraft = '' + Math.floor(Math.random() * 8) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + Math.floor(Math.random() * 5); renderAvEditor(); });
  $('sheet-av').addEventListener('click', function (ev) { if (ev.target === $('sheet-av')) $('sheet-av').hidden = true; });

  /* ---------- Onglets ---------- */
  var curTab = 'chambre';
  function setTab(name) {
    curTab = name;
    ['chambre', 'salon', 'moi'].forEach(function (t) {
      $('pane-' + t).hidden = t !== name;
      document.body.classList.toggle('tab-' + t, t === name);
    });
    Array.prototype.forEach.call(document.querySelectorAll('#tabbar button'), function (b) {
      if (b.getAttribute('data-tab') === name) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    updateFab();
    if (name === 'moi') renderMoi();
    if (name === 'chambre' && !cmpOpened) cmpOpen();
    window.scrollTo(0, 0);
  }
  Array.prototype.forEach.call(document.querySelectorAll('#tabbar button'), function (b) {
    b.addEventListener('click', function () { setTab(b.getAttribute('data-tab')); });
  });

  /* ---------- Mika compagnon : mémoire (sur le téléphone), conversation, émotions ---------- */
  var cmp = (function () {
    var d = { facts: [], follow: '', moods: [], thread: [], bond: 0 };
    try {
      var j = JSON.parse(store('talkie.cmp') || '{}');
      d.facts = (Array.isArray(j.facts) ? j.facts : []).map(function (x) { return clean(x, 90); }).filter(Boolean).slice(-20);
      d.follow = clean(j.follow, 100);
      d.moods = (Array.isArray(j.moods) ? j.moods : []).filter(function (x) { return x && /^\d{4}-\d\d-\d\d$/.test(x.d) && x.m >= 1 && x.m <= 5; }).slice(-30);
      d.thread = (Array.isArray(j.thread) ? j.thread : []).filter(function (x) { return x && (x.r === 'u' || x.r === 'm') && x.t; }).map(function (x) { return { r: x.r, t: clean(x.t, 400), ts: Number(x.ts) || 0 }; }).slice(-40);
      d.bond = Math.max(0, Number(j.bond) || 0);
    } catch (e) { /* mémoire illisible : on repart de zéro */ }
    return d;
  })();
  function saveCmp() { store('talkie.cmp', JSON.stringify(cmp)); }
  function todayKey() { return new Date().toLocaleDateString('sv-SE'); }
  function recordMood(m) {
    var d = todayKey();
    cmp.moods = cmp.moods.filter(function (x) { return x.d !== d; });
    cmp.moods.push({ d: d, m: m });
    cmp.moods = cmp.moods.slice(-30);
    saveCmp();
  }
  function moodToday() { var d = todayKey(); for (var i = 0; i < cmp.moods.length; i++) if (cmp.moods[i].d === d) return cmp.moods[i].m; return 0; }
  function level() {
    var xp = cmp.bond + (mem.visits || 0) * 3, lv = 1, need = 12, acc = 0;
    while (xp >= acc + need) { acc += need; lv++; need = Math.round(need * 1.5); }
    return { lv: lv, pct: Math.round((xp - acc) / need * 100) };
  }
  function renderBond() { var l = level(); $('bond-lv').textContent = 'Niv. ' + l.lv; $('bond-fill').style.width = Math.max(6, l.pct) + '%'; }

  var EMO = { happy: 'happy', love: 'love', wow: 'wow', sad: 'sad', worried: 'worry', sleepy: 'sleep', proud: 'proud', shy: 'shy', silly: 'happy', cheer: 'happy' };
  function feel(e) {
    mood(EMO[e] || 'happy', (e === 'sad' || e === 'worried') ? 9000 : 3600);
    if (e === 'cheer' || e === 'proud') { anim('jump'); burst(['🎉', '✨', '💚']); }
    else if (e === 'love') { anim('jump'); burst(['💖', '💚', '🌸']); }
    else if (e === 'shy') anim('shy');
    else if (e === 'worried' || e === 'sad') burst(['💧']);
  }
  var pendingM = '';
  function pushDom(r, t) {
    var box = $('thread');
    box.appendChild(el('div', 'tmsg ' + r, t));
    while (box.children.length > 30) box.removeChild(box.firstChild);
    box.scrollTop = box.scrollHeight;
  }
  function addThread(r, t) {
    cmp.thread.push({ r: r, t: t, ts: Date.now() });
    cmp.thread = cmp.thread.slice(-40);
    saveCmp();
    // la dernière phrase de Mika est dans sa bulle ; elle rejoint l'historique quand on lui répond
    if (r === 'm') { if (pendingM) pushDom('m', pendingM); pendingM = t; }
    else { if (pendingM) { pushDom('m', pendingM); pendingM = ''; } pushDom('u', t); }
  }
  var cmpBusy = false, cmpOpened = false, cmpNudges = 0, lastUserAt = 0, cmpTok = 0;
  function ctx(kind) {
    var last = prevVisit.last ? (Date.now() - prevVisit.last) / 3600000 : null;
    return {
      kind: kind, name: nick, hour: new Date().getHours(), day: new Date().toLocaleDateString('fr-FR', { weekday: 'long' }),
      awayH: kind === 'open' ? last : null, visits: mem.visits, streak: mem.streak, bond: cmp.bond,
      moods: cmp.moods.slice(-5).map(function (x) { return x.m; }), facts: cmp.facts, follow: cmp.follow,
      messages: cmp.thread.slice(-12).map(function (x) { return { r: x.r, t: x.t }; })
    };
  }
  function think(on) {
    var b = $('mika-say');
    if (on) { b.classList.add('thinking'); b.textContent = ''; for (var d = 0; d < 3; d++) b.appendChild(document.createElement('i')); look(0, 1.6); mood('wow', 1500); }
  }
  function localFallback(kind) {
    return { say: kind === 'open' ? 'Coucou, te voilà ! 💚 Comment tu te sens aujourd’hui ?' : 'Oh, je perds le fil… ma connexion de mochi capricieuse 🥹 Redis-moi ça dans un instant ?', e: 'shy', chips: ['😄 Ça va bien', '😮‍💨 Bof'], remember: [], follow: '', salon: false, mood: null };
  }
  function callCompanion(kind, extra) {
    var tok = ++cmpTok;
    cmpBusy = true;
    think(true);
    var body = ctx(kind);
    if (extra) for (var k in extra) body[k] = extra[k];
    var ctrl = window.AbortController ? new AbortController() : null;
    var to = setTimeout(function () { if (ctrl) ctrl.abort(); }, 25000);
    return fetch('/api/companion', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body), signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { if (!r.ok) throw new Error('http'); return r.json(); })
      .catch(function () { return localFallback(kind); })
      .then(function (r) {
        clearTimeout(to);
        if (tok !== cmpTok) return;
        cmpBusy = false;
        applyReply(r, kind);
      });
  }
  function applyReply(r, kind) {
    var say = clean(r.say, 320);
    if (!say) return;
    addThread('m', say);
    feel(r.e);
    mikaSay(say, false, false);
    if (r.mood && kind === 'reply' && !moodToday()) recordMood(r.mood);
    (r.remember || []).forEach(function (f) {
      f = clean(f, 90);
      if (f && cmp.facts.every(function (x) { return x.toLowerCase() !== f.toLowerCase(); })) cmp.facts.push(f);
    });
    cmp.facts = cmp.facts.slice(-20);
    if (kind !== 'nudge') cmp.follow = clean(r.follow, 100);
    saveCmp();
    var chips = (r.chips || []).slice(0, 3);
    var qr = [];
    chips.forEach(function (c) { qr.push([c, function () { cmpSend(c); }]); });
    if (r.care) qr = [['🫂 Merci Mika', function () { cmpSend('Merci Mika'); }], ['📞 Le 3114', function () { mikaSay('Le 3114 : gratuit, 24 h sur 24, en France. Tu peux les appeler ou leur écrire, ils sont là 💚', false, 'love'); }]];
    if (r.salon) qr.push(['💬 Aller au Salon', function () { setTab('salon'); }, 'yes']);
    if (!moodToday() && kind === 'open') $('mood-row').hidden = false;
    setQr(qr);
    renderBond();
    bumpIdle();
  }
  function cmpOpen() {
    cmpOpened = true;
    $('thread').textContent = '';
    pendingM = '';
    cmp.thread.slice(-6).forEach(function (x) { $('thread').appendChild(el('div', 'tmsg ' + x.r, x.t)); });
    $('thread').scrollTop = $('thread').scrollHeight;
    renderBond();
    if (!store('talkie.avset')) setTimeout(function () { if (curTab === 'chambre') { var q = $('mika-qr'); var b = el('button', null, '🎨 Crée ton avatar'); b.type = 'button'; b.addEventListener('click', openAvEditor); q.appendChild(b); } }, 6000);
    setTimeout(function () { if (!reduceMotion) { mood('love', 1600); anim('jump'); } callCompanion('open'); }, reduceMotion ? 0 : 700);
  }
  function cmpSend(text) {
    text = clean(text, 400);
    if (!text || cmpBusy) return;
    lastUserAt = Date.now();
    dir.engaged = true; cmpNudges = 0;
    addThread('u', text);
    cmp.bond++;
    saveCmp();
    $('mood-row').hidden = true;
    setQr([]);
    callCompanion('reply');
  }
  function cmpTouch() { if (!cmpBusy) callCompanion('nudge'); }
  $('cmp-in').addEventListener('input', function () { $('cmp-send').disabled = !clean($('cmp-in').value, 400); lastUserAt = Date.now(); });
  $('cmp-form').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var v = $('cmp-in').value;
    $('cmp-in').value = ''; $('cmp-send').disabled = true;
    cmpSend(v);
  });
  Array.prototype.forEach.call(document.querySelectorAll('#mood-row button'), function (b) {
    b.addEventListener('click', function () {
      var m = Number(b.getAttribute('data-m'));
      recordMood(m);
      $('mood-row').hidden = true;
      addThread('u', b.textContent + ' ' + ['Au plus bas', 'Bof', 'Bof, ça va', 'Plutôt bien', 'Au top'][m - 1]);
      cmp.bond++; saveCmp();
      callCompanion('mood', { mood: m });
    });
  });
  $('cmp-help').addEventListener('click', function () { mikaSay(CARE_LOCAL, false, 'worry'); });
  var CARE_LOCAL = 'Si ça ne va vraiment pas : le 3114 répond jour et nuit, gratuitement (France). Je suis une IA et je reste là, mais une vraie personne peut mieux t’aider 💚';
  function nudge() {
    if (room || document.hidden || curTab !== 'chambre' || cmpBusy || asleep()) return;
    if (cmpNudges >= 2 || !cmpOpened || !cmp.thread.length || cmp.thread[cmp.thread.length - 1].r !== 'm') return;
    cmpNudges++;
    callCompanion('nudge');
  }

  /* ---------- Moi ---------- */
  function renderMoi() {
    $('me-av').innerHTML = avatarSvg(myAv);
    if (document.activeElement !== $('me-nick')) $('me-nick').value = nick;
    var l = level();
    $('me-sub').textContent = 'Niveau ' + l.lv + ' avec Mika · ' + (mem.streak || 1) + ' jour' + ((mem.streak || 1) > 1 ? 's' : '') + ' de suite';
    var chart = $('mood-chart'); chart.textContent = '';
    for (var i = 6; i >= 0; i--) {
      var d = new Date(Date.now() - i * 86400000), k = d.toLocaleDateString('sv-SE'), v = 0;
      cmp.moods.forEach(function (x) { if (x.d === k) v = x.m; });
      var c = el('div', 'mc' + (v ? '' : ' none'));
      c.appendChild(el('span', null, v ? ['😞', '😕', '😐', '🙂', '🤩'][v - 1] : ''));
      var bar = el('i'); bar.style.height = (v ? 10 + v * 11 : 6) + 'px'; c.appendChild(bar);
      c.appendChild(el('span', null, d.toLocaleDateString('fr-FR', { weekday: 'narrow' })));
      chart.appendChild(c);
    }
    var ul = $('facts'); ul.textContent = '';
    if (!cmp.facts.length) ul.appendChild(el('li', 'none', 'Mika ne sait encore rien de toi. Raconte-lui ta journée 💚'));
    cmp.facts.forEach(function (f, idx) {
      var li = el('li'); li.appendChild(el('span', null, '💭 ' + f));
      var x = el('button', null, '✕'); x.type = 'button'; x.setAttribute('aria-label', 'Oublier ce souvenir');
      x.addEventListener('click', function () { cmp.facts.splice(idx, 1); saveCmp(); renderMoi(); });
      li.appendChild(x); ul.appendChild(li);
    });
    var w = $('wardrobe'); w.textContent = '';
    WARD.forEach(function (it) {
      var on = it.premium ? false : (equip ? equip.indexOf(it.id) >= 0 : unlocked(it));
      var ok = !it.premium && unlocked(it);
      var b = el('button', 'ward' + (on && ok ? ' on' : '') + (ok ? '' : ' locked')); b.type = 'button';
      b.innerHTML = mikaSvg(it.id).replace('class="mk', 'class="mk mini-m');
      b.appendChild(el('span', null, it.label));
      b.appendChild(el('span', 'px', it.premium ? '💎 ' + it.premium : (ok ? (on ? 'Portée' : 'Disponible') : '🔒 ' + it.need + ' jours')));
      if (!ok) b.appendChild(el('span', 'lk', '🔒'));
      b.addEventListener('click', function () {
        if (it.premium) { toast('💎 Tenue premium : bientôt disponible !'); return; }
        if (!ok) { toast('Débloquée après ' + it.need + ' jours avec Mika 🌸'); return; }
        var cur = equip || WARD.filter(unlocked).map(function (x) { return x.id; });
        var i2 = cur.indexOf(it.id);
        if (i2 >= 0) cur.splice(i2, 1); else cur.push(it.id);
        equip = cur; store('talkie.equip', JSON.stringify(equip));
        fillMika(); renderMoi(); burst(['✨', '💚']);
      });
      w.appendChild(b);
    });
  }
  $('me-nick').addEventListener('input', function () {
    var v = clean($('me-nick').value, 20);
    if (!v) return;
    nick = v; store('tablee.nick', nick); $('nick').value = nick;
    send({ t: 'nick', nick: nick, av: myAv });
  });
  $('me-nick').addEventListener('blur', function () { $('me-nick').value = nick; });
  $('btn-forget').addEventListener('click', function () {
    if (!window.confirm('Effacer tout ce que Mika sait de toi (souvenirs, humeurs, discussion) ?')) return;
    cmp.facts = []; cmp.follow = ''; cmp.moods = []; cmp.thread = []; cmp.bond = 0; saveCmp();
    $('thread').textContent = ''; pendingM = ''; renderMoi(); renderBond(); toast('Mémoire effacée 🫧');
  });
  $('btn-me-settings').addEventListener('click', function () { $('btn-settings').click(); });

  /* ---------- Scène d'avatars dans la conversation ---------- */
  var stageNodes = {};
  function stageMembers() {
    if (!room) return [];
    return room.members.filter(function (p) { return p.online || p.pid === myPid; });
  }
  function renderStage() {
    var box = $('perch');
    Object.keys(stageNodes).forEach(function (k) { if (stageNodes[k].parentNode) stageNodes[k].parentNode.removeChild(stageNodes[k]); });
    stageNodes = {};
    var list = stageMembers(), others = 0;
    list.sort(function (a, b) { return (a.pid === myPid ? -1 : 0) - (b.pid === myPid ? -1 : 0); });
    list.forEach(function (p) {
      var n = el('div', 'sa idle');
      var av = el('div', 'av'); av.innerHTML = avatarSvg(p.pid === myPid ? myAv : (p.av || defaultAv(p.nick)));
      n.appendChild(av);
      n.appendChild(el('span', 'sa-n', p.pid === myPid ? 'Moi' : clean(p.nick, 14)));
      if (p.pid === myPid) n.style.left = '6px'; else { n.style.right = (6 + others * 50) + 'px'; others++; }
      box.appendChild(n);
      stageNodes[p.pid] = n;
    });
    perch.others = others;
  }
  function stageSay(m) {
    if (replaying || !room) return;
    var box = $('perch'), n = m.ai ? null : stageNodes[m.pid];
    var text = chatClean(m.text, 80) || (m.gif ? 'GIF' : '');
    if (!text) return;
    if (n) { n.classList.remove('hop'); void n.offsetWidth; n.classList.add('hop'); }
    var old = box.querySelector('.sa-b[data-k="' + (m.ai ? 'ai' : m.pid) + '"]');
    if (old) old.parentNode.removeChild(old);
    var b = el('div', 'sa-b' + (m.ai ? ' mk-b' : ''), text); b.setAttribute('data-k', m.ai ? 'ai' : m.pid);
    var mine = !m.ai && m.pid === myPid;
    if (m.ai) b.style.left = Math.max(8, Math.min(box.clientWidth * 0.45, perch.x - 10)) + 'px';
    else if (mine) b.style.left = '4px';
    else { b.classList.add('r'); b.style.right = (n && n.style.right) || '4px'; }
    box.appendChild(b);
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, Math.min(6500, 2600 + text.length * 55));
  }

  /* ---------- Démarrage ---------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js').catch(function () {}); });
  }
  renderChips(); fillMika(); renderTrends(); renderLook(); watchHero(); fillMika(); renderVoice();
  renderTrends();
  loadThemes();
  setInterval(loadThemes, 30 * 60 * 1000);
  setInterval(function () { if (!room) renderLobby(); }, 30000);
  renderLobby();
  renderNotif();
  setTab('chambre');
  connect();
})();
