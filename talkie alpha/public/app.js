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
      if (typeof schedSync === 'function' && /^(talkie\.(cmp|mem|game|care|equip|av|avset|bob|friends|vx|voice|ui)|tablee\.nick)$/.test(k)) schedSync();
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
      send({ t: 'hello', cid: cid, nick: nick, av: myAv, blocked: blocked, friends: friends.map(function (f) { return f.pid; }), visible: document.visibilityState !== 'hidden', adult: store('talkie.adult') === '1' });
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
    if (m.t === 'plaza' || m.t === 'pj' || m.t === 'pl' || m.t === 'pm' || m.t === 'pe' || m.t === 'ps') { plazaMsg(m); return; }
    if (/^(hsent|hinv|hjoin|hg\+|hg-|hend|hp|he|hs)$/.test(m.t)) { homeMsg(m); return; }
    switch (m.t) {
      case 'welcome':
        myPid = m.pid;
        if (plazaScene) { plazaMe = null; send({ t: 'plaza', on: true }); }
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
        renderSocial(m);
        break;
      case 'joined':
        progressQuest('salon'); bump('s', 5);
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
        destroyStage3d();
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
    { id: 'scarf', label: 'Écharpe', need: 3, price: 30 }, { id: 'bow', label: 'Nœud', need: 6, price: 50 }, { id: 'glasses', label: 'Lunettes', price: 80 },
    { id: 'pj', label: 'Bonnet dodo', price: 100 }, { id: 'crown', label: 'Couronne', need: 12, price: 250 },
    { id: 'hat', label: 'Sorcier', premium: '1,99 €' }, { id: 'wings', label: 'Ailes', premium: '2,49 €' }
  ];
  var HEAD = ['crown', 'hat', 'pj'];
  var DECOR = [
    { id: 'plushbear', label: 'Ours en peluche', e: '🧸', price: 60 }, { id: 'starrug', label: 'Tapis étoile', e: '⭐', price: 80 }, { id: 'poster', label: 'Affiche', e: '🖼️', price: 50 },
    { id: 'beanbag', label: 'Pouf', e: '🛋️', price: 90 }, { id: 'neon', label: 'Néon cœur', e: '💗', price: 120 }, { id: 'catbed', label: 'Panier du chat', e: '🐱', price: 110 },
    { id: 'cloud', label: 'Nuage', e: '☁️', price: 130 }, { id: 'bookshelf', label: 'Bibliothèque', e: '📚', price: 140 }, { id: 'disco', label: 'Boule disco', e: '🪩', price: 160 },
    { id: 'aquarium', label: 'Aquarium', e: '🐠', price: 220 }, { id: 'piano', label: 'Piano', e: '🎹', price: 260 }, { id: 'arcade', label: 'Borne d’arcade', e: '🕹️', price: 300 }
  ];
  var equip = (function () { try { var e = JSON.parse(store('talkie.equip') || 'null'); if (Array.isArray(e)) return e.slice(0, 8); } catch (er) { /* ignore */ } return null; })();
  var game = (function () {
    var g = { petals: 0, q: { d: '', ids: [], done: [] }, owned: [], decorOwn: [], decorOn: [], bown: [], bobOn: [] };
    try {
      var j = JSON.parse(store('talkie.game') || '{}');
      g.petals = Math.max(0, Number(j.petals) || 0);
      if (j.q && typeof j.q.d === 'string') g.q = { d: j.q.d, ids: Array.isArray(j.q.ids) ? j.q.ids.slice(0, 5) : [], done: Array.isArray(j.q.done) ? j.q.done.slice(0, 5) : [] };
      if (typeof j.park === 'string') g.park = j.park.slice(0, 12);
      if (j.sing && typeof j.sing === 'object') { g.sing = {}; Object.keys(j.sing).slice(0, 12).forEach(function (x) { if (typeof j.sing[x] === 'string') g.sing[x.slice(0, 12)] = j.sing[x].slice(0, 12); }); }
      ['owned', 'decorOwn', 'decorOn', 'bown', 'bobOn'].forEach(function (k) { if (Array.isArray(j[k])) g[k] = j[k].filter(function (x) { return typeof x === 'string'; }).slice(0, 20); });
    } catch (er) { /* ignore */ }
    return g;
  })();
  function saveGame() { store('talkie.game', JSON.stringify(game)); }
  function unlocked(w) { return !w.premium && (game.owned.indexOf(w.id) >= 0 || (w.need && ((mem && mem.visits) || 0) >= w.need)); }
  function accList() { return WARD.filter(function (w) { return unlocked(w) && (equip ? equip.indexOf(w.id) >= 0 : true); }).map(function (w) { return w.id; }); }
  function accClasses(force) {
    var list = force ? [force] : accList(), out = '';
    list.forEach(function (id) { out += ' has-' + id; });
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
  var ST = ['st-happy', 'st-wow', 'st-sleep', 'st-love', 'st-sad', 'st-worry', 'st-proud', 'st-shy', 'st-angry'];
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
    if (m3d) { var j = list.join(''); m3d.emit(/[💖💚🌸💛]/.test(j) ? 'heart' : /💧/.test(j) ? 'drop' : 'star', 6); }
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
    if (m3d) m3d.look(dx / 2.4, dy / 1.8);
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
  function mikaSay(text, silent, state, vo) {
    var bub = $('mika-say');
    var tok = ++sayTok;
    clearInterval(sayTimer);
    stopSpeaking();
    pet.lastSpoke = Date.now();
    if (m3d && m3d.say && curTab === 'chambre') m3d.say(clean(text, 220), 'mk');
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
      else if (wantVoice && !(cloudTts && voiceEl)) {
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
      if (audio && isFinite(audio.duration) && audio.duration > 0) {
        // Le texte suit la voix à la milliseconde près (fini le décalage) : on lit la position réelle de l'audio.
        var finished = false;
        var endIt = function () {
          if (finished) return; finished = true;
          node.nodeValue = String(text);
          if (cur.parentNode) cur.parentNode.removeChild(cur);
          talkFlags.t = false; applyTalk();
        };
        var step = function () {
          if (finished) return;
          if (tok !== sayTok) { finished = true; return; }
          if (audio.ended || (audio.paused && audio.currentTime > 0)) { endIt(); return; }
          var p = Math.min(1, (audio.currentTime / audio.duration) * 1.04);
          var n = Math.ceil(len * p);
          if (node.nodeValue.length !== n) node.nodeValue = String(text).slice(0, n);
          requestAnimationFrame(step);
        };
        audio.addEventListener('ended', endIt, { once: true });
        requestAnimationFrame(step);
        return;
      }
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
      var emoX = (vo && vo.emo) || (state === false || state === 'sleep' ? '' : state), txtX = (vo && vo.voice) || text;
      // Une seule voix : si le serveur rate, on réessaie une fois, puis on reste muet (jamais la voix par défaut du téléphone).
      var tryCloud = function (n) {
        cloudLine(txtX, emoX).then(function (a) {
          if (tok !== sayTok) return;
          var pr = a.play();
          if (pr && pr.then) pr.then(function () { start(a); }).catch(function () { start(null); });
          else start(a);
        }).catch(function () { if (tok !== sayTok) return; if (n < 1) tryCloud(n + 1); else start(null); });
      };
      tryCloud(0);
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
    if (room || $('lobby').hidden || curTab !== 'chambre' || m3d) { actor.style.display = 'none'; shadow.style.display = 'none'; pet.last = 0; return; }
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
  var VOX = [
    { id: 'kawaii', fr: 'Kawaii ✨', en: 'Kawaii ✨', tts: 'coral', pitch: 1.7, rate: 1.1, cr: 1.08 },
    { id: 'douce', fr: 'Douce', en: 'Soft', tts: 'shimmer', pitch: 1.45, rate: 1.02, cr: 1.04 },
    { id: 'petillante', fr: 'Pétillante', en: 'Bubbly', tts: 'nova', pitch: 1.75, rate: 1.1, cr: 1.06 },
    { id: 'calme', fr: 'Calme', en: 'Calm', tts: 'sage', pitch: 1.15, rate: 0.96, cr: 1.0 },
    { id: 'grave', fr: 'Grave', en: 'Deep', tts: 'onyx', pitch: 0.85, rate: 0.95, cr: 0.93 }
  ];
  function vox() { var id = store('talkie.vx'); for (var i = 0; i < VOX.length; i++) if (VOX[i].id === id) return VOX[i]; return VOX[0]; }
  var cloudTts = false, cloudRate = 1, cloudProv = '';
  var gesture = false;
  var actx = null, seq = null;
  var voiceEl = null;
  fetch('/api/config').then(function (r) { return r.json(); }).then(function (d) { cloudTts = !!(d && d.tts); if (d && d.ttsRate) cloudRate = d.ttsRate; cloudProv = String((d && d.ttsProv) || '').replace(/[^a-zA-Z0-9]/g, '').slice(0, 40); }).catch(function () {});

  var voiceUnlocked = false, voiceUrl = null;
  var SILENT = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0AAAAAA==';
  function unlockVoice(ev) {
    gesture = true;
    if (voiceUnlocked) return;
    if (ev && ev.type === 'pointerdown') return; // iOS n'accepte le son qu'au toucher relâché / au clic
    try {
      if (!voiceEl) { voiceEl = new Audio(); voiceEl.setAttribute('playsinline', ''); voiceEl.setAttribute('webkit-playsinline', ''); voiceEl.preload = 'auto'; }
      voiceEl.src = SILENT; voiceEl.volume = 1;
      var pr = voiceEl.play();
      if (pr && pr.then) pr.then(function () { voiceUnlocked = true; }).catch(function () { /* on réessaiera au prochain toucher */ }); else voiceUnlocked = true;
    } catch (e) { /* ignore */ }
    try { if (AC && !actx) actx = new AC(); if (actx && actx.state === 'suspended') actx.resume(); } catch (e) { /* ignore */ }
  }
  ['touchend', 'click', 'keydown', 'pointerdown'].forEach(function (ev) { document.addEventListener(ev, unlockVoice, { passive: true, capture: true }); });

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
    return String(t || '').replace(/@mika/gi, 'Mika').replace(/\*[^*]{1,40}\*/g, ' ').replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}]/gu, '').replace(/https?:\/\/\S+/g, '')
      .replace(/\b(?:a+w+h*|aww+e*)\b/gi, 'aaah').replace(/\b[uo]w[uo]\b/gi, 'hihi').replace(/\bw{2,}\b/gi, '').replace(/\bwow\b/gi, 'waou').replace(/hwaiting/gi, 'oué-tingue').replace(/kyaa+/gi, 'kiya')
      .replace(/[~♪♫♥❤]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 340);
  }
  function stopChirps() {
    if (seq) { try { seq.gain.cancelScheduledValues(0); seq.gain.value = 0; seq.disconnect(); } catch (e) { /* ignore */ } seq = null; }
  }
  var frVoice = null;
  function pickVoice() {
    if (!canTTS) return;
    var wantEn = window.I18N && I18N.lang === 'en';
    var vs = speechSynthesis.getVoices().filter(function (v) { return (wantEn ? /^en/i : /^fr/i).test(v.lang); });
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
      u.lang = frVoice.lang || 'fr-FR'; u.voice = frVoice; u.pitch = vox().pitch; u.rate = vox().rate; u.volume = 1;
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
  function cloudLine(text, emo) {
    return new Promise(function (resolve, reject) {
      if (!voiceEl) { reject(new Error('audio')); return; }
      var a = voiceEl, ctl = window.AbortController ? new AbortController() : null;
      var to = setTimeout(function () { try { if (ctl) ctl.abort(); } catch (e) { /* ignore */ } reject(new Error('lent')); }, 12000);
      var url = '/api/tts?t=' + encodeURIComponent(speakable(text)) + '&v=' + vox().tts + '&l=' + (window.I18N && I18N.lang === 'en' ? 'en' : 'fr') + '&k=' + cloudProv + '&e=' + encodeURIComponent(String(emo || '').replace(/[^a-z]/g, '').slice(0, 10));
      // On télécharge la phrase en entier AVANT de la jouer : sur iPhone, un son qui se charge en route est souvent coupé.
      fetch(url, ctl ? { signal: ctl.signal } : undefined).then(function (r) { if (!r.ok) throw new Error('voix'); return r.blob(); }).then(function (bl) {
        clearTimeout(to);
        if (!bl || bl.size < 200) throw new Error('vide');
        try { a.pause(); } catch (e) { /* ignore */ }
        if (voiceUrl) { try { URL.revokeObjectURL(voiceUrl); } catch (e) { /* ignore */ } }
        voiceUrl = URL.createObjectURL(bl.type ? bl : new Blob([bl], { type: 'audio/mpeg' }));
        a.onended = function () { setTalking(false); };
        a.src = voiceUrl; a.volume = 1; a.muted = false;
        try { a.playbackRate = 1; a.defaultPlaybackRate = 1; } catch (e) { /* ignore */ }
        resolve(a);
      }).catch(function (e) { clearTimeout(to); reject(e); });
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
    destroyStage3d();
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
  function closeSheets() { if (typeof closeAvSheet === 'function' && !$('sheet-av').hidden && store('talkie.avset')) closeAvSheet(); $('sheet-safety').hidden = true; $('sheet-leave').hidden = true; $('sheet-mika').hidden = true; $('sheet-place').hidden = true; $('sheet-settings').hidden = true; }

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
  var AV_COLORS = ['#5DE3B4', '#B9A6FF', '#FFB89A', '#8EDBFF', '#FFE27A', '#FFA8CF', '#A8E86B', '#E0E4F2', '#FF9AA2', '#C7A98F', '#9EC5FF', '#F6A6FF'];
  var AV_EARS = ['Chat', 'Ours', 'Lapin', 'Aucune', 'Renard', 'Souris'];
  var AV_FACE = ['Rond', 'Content', 'Étoiles', 'Grands yeux', 'Sieste'];
  var AV_ACC = ['Rien', 'Nœud', 'Lunettes', 'Bonnet', 'Fleur', 'Couronne', 'Soleil', 'Casque', 'Bandana', 'Papillon', 'Ailes', 'Chapeau'];
  var AV_SHAPE = ['Rond', 'Grand', 'Potelé', 'Haricot'];
  var AV_TAIL = ['Aucune', 'Chat', 'Lapin', 'Renard'];
  function normAv(c) { c = String(c == null ? '' : c); if (/^[0-7][0-3][0-2][0-4]$/.test(c)) c += '00'; return /^[0-9a-b][0-5][0-4][0-9a-b][0-3][0-3]$/.test(c) ? c : ''; }
  function hash(str) { var h = 0; str = String(str); for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0; return Math.abs(h); }
  function defaultAv(seed) { var h = hash(seed); return (h % 12).toString(12) + (Math.floor(h / 12) % 6) + (Math.floor(h / 72) % 5) + (Math.floor(h / 360) % 6).toString(12) + (Math.floor(h / 2160) % 4) + (Math.floor(h / 8640) % 4); }
  function avatarSvg(code) {
    code = normAv(code) || defaultAv(code || 'x');
    if (m3d && window.Mika3DMod) { var u = Mika3DMod.avatarPng(code); if (u) return '<img alt="" src="' + u + '">'; }
    var c = AV_COLORS[parseInt(code[0], 12)], ear = +code[1], face = +code[2], acc = parseInt(code[3], 12), shape = +code[4], tail = +code[5];
    var ink = '#2A1B5E', g = '', rx = [31, 27, 35, 28][shape], ry = [28, 31, 25, 30][shape];
    if (tail === 1) g += '<path d="M66 62 q14 -2 10 -18" stroke="' + c + '" stroke-width="6" fill="none" stroke-linecap="round"/>';
    else if (tail === 2) g += '<circle cx="70" cy="64" r="6" fill="#fff"/>';
    else if (tail === 3) g += '<ellipse cx="71" cy="58" rx="6" ry="12" fill="' + c + '" transform="rotate(25 71 58)"/><ellipse cx="74" cy="48" rx="3" ry="5" fill="#fff4ec" transform="rotate(25 74 48)"/>';
    if (ear === 0 || ear === 4) g += '<path d="M12 36 L14 8 L32 22Z" fill="' + c + '"/><path d="M68 36 L66 8 L48 22Z" fill="' + c + '"/><path d="M16 28 L17 15 L26 22Z" fill="' + (ear === 4 ? '#FFF4EC' : '#FFB3D1') + '"/><path d="M64 28 L63 15 L54 22Z" fill="' + (ear === 4 ? '#FFF4EC' : '#FFB3D1') + '"/>';
    else if (ear === 1) g += '<circle cx="17" cy="21" r="10" fill="' + c + '"/><circle cx="63" cy="21" r="10" fill="' + c + '"/><circle cx="17" cy="21" r="5" fill="#FFB3D1"/><circle cx="63" cy="21" r="5" fill="#FFB3D1"/>';
    else if (ear === 5) g += '<circle cx="14" cy="26" r="14" fill="' + c + '"/><circle cx="66" cy="26" r="14" fill="' + c + '"/><circle cx="14" cy="26" r="8" fill="#FFB3D1"/><circle cx="66" cy="26" r="8" fill="#FFB3D1"/>';
    else if (ear === 2) g += '<ellipse cx="26" cy="12" rx="7" ry="16" fill="' + c + '" transform="rotate(-8 26 12)"/><ellipse cx="54" cy="12" rx="7" ry="16" fill="' + c + '" transform="rotate(8 54 12)"/><ellipse cx="26" cy="13" rx="3.4" ry="10" fill="#FFB3D1" transform="rotate(-8 26 13)"/><ellipse cx="54" cy="13" rx="3.4" ry="10" fill="#FFB3D1" transform="rotate(8 54 13)"/>';
    else g += '<circle cx="40" cy="14" r="6" fill="' + c + '"/><circle cx="40" cy="14" r="2.6" fill="#fff" opacity=".6"/>';
    g += '<ellipse cx="40" cy="' + (76 - ry) + '" rx="' + rx + '" ry="' + ry + '" fill="' + c + '"/><ellipse cx="29" cy="30" rx="8" ry="4" fill="#fff" opacity=".4" transform="rotate(-25 29 30)"/>';
    g += '<ellipse cx="19" cy="55" rx="5.5" ry="3.4" fill="#FF8FC0" opacity=".8"/><ellipse cx="61" cy="55" rx="5.5" ry="3.4" fill="#FF8FC0" opacity=".8"/>';
    if (face === 0) g += '<ellipse cx="29" cy="47" rx="4.6" ry="5.8" fill="' + ink + '"/><ellipse cx="51" cy="47" rx="4.6" ry="5.8" fill="' + ink + '"/><circle cx="30.4" cy="44.8" r="1.8" fill="#fff"/><circle cx="52.4" cy="44.8" r="1.8" fill="#fff"/>';
    else if (face === 1) g += '<g fill="none" stroke="' + ink + '" stroke-width="3" stroke-linecap="round"><path d="M23.5 49 Q29 41 34.5 49"/><path d="M45.5 49 Q51 41 56.5 49"/></g>';
    else if (face === 3) g += '<ellipse cx="29" cy="47" rx="6.6" ry="8" fill="' + ink + '"/><ellipse cx="51" cy="47" rx="6.6" ry="8" fill="' + ink + '"/><circle cx="31" cy="44" r="2.6" fill="#fff"/><circle cx="53" cy="44" r="2.6" fill="#fff"/>';
    else if (face === 4) g += '<g fill="none" stroke="' + ink + '" stroke-width="3" stroke-linecap="round"><path d="M23.5 46 Q29 52 34.5 46"/><path d="M45.5 46 Q51 52 56.5 46"/></g>';
    else g += '<ellipse cx="29" cy="47" rx="6" ry="7" fill="' + ink + '"/><ellipse cx="51" cy="47" rx="6" ry="7" fill="' + ink + '"/><circle cx="31" cy="44" r="2.5" fill="#fff"/><circle cx="27" cy="50" r="1.2" fill="#fff"/><circle cx="53" cy="44" r="2.5" fill="#fff"/><circle cx="49" cy="50" r="1.2" fill="#fff"/>';
    g += '<path d="M35.5 57 Q40 62 44.5 57" stroke="' + ink + '" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
    if (acc === 1) g += '<path d="M54 20 l10 -6 v13z M54 20 l-10 -6 v13z" fill="#FF6FAE"/><circle cx="54" cy="20" r="3.2" fill="#FFB3D1"/>';
    else if (acc === 2) g += '<g fill="none" stroke="' + ink + '" stroke-width="2.4"><circle cx="29" cy="47" r="9"/><circle cx="51" cy="47" r="9"/><path d="M38 47 H42"/></g>';
    else if (acc === 3) g += '<path d="M14 28 Q40 -2 66 28 Q40 20 14 28Z" fill="#FF6F8E"/><circle cx="40" cy="6" r="4.5" fill="#fff"/>';
    else if (acc === 4) g += '<g transform="translate(58 18)"><circle r="3" fill="#FFCF3F"/><g fill="#FFB3D1"><circle cx="0" cy="-6" r="3.6"/><circle cx="6" cy="0" r="3.6"/><circle cx="0" cy="6" r="3.6"/><circle cx="-6" cy="0" r="3.6"/></g><circle r="3" fill="#FFCF3F"/></g>';
    else if (acc === 5) g += '<path d="M27 24 L29 10 L35 18 L40 8 L45 18 L51 10 L53 24Z" fill="#FFCF3F"/>';
    else if (acc === 6) g += '<g fill="#1D1640"><ellipse cx="29" cy="47" rx="9" ry="7"/><ellipse cx="51" cy="47" rx="9" ry="7"/><rect x="36" y="45" width="8" height="2.4"/></g>';
    else if (acc === 7) g += '<path d="M12 44 Q40 -6 68 44" stroke="#FF8FC0" stroke-width="4" fill="none"/><rect x="8" y="40" width="9" height="14" rx="4" fill="#fff"/><rect x="63" y="40" width="9" height="14" rx="4" fill="#fff"/>';
    else if (acc === 8) g += '<path d="M12 30 Q40 18 68 30 L66 36 Q40 25 14 36Z" fill="#FF5A6E"/>';
    else if (acc === 9) g += '<g fill="#E0457B"><ellipse cx="32" cy="71" rx="8" ry="5"/><ellipse cx="48" cy="71" rx="8" ry="5"/></g><circle cx="40" cy="71" r="3" fill="#FFD1E3"/>';
    else if (acc === 10) g += '<ellipse cx="6" cy="44" rx="6" ry="14" fill="#fff" opacity=".9" transform="rotate(-20 6 44)"/><ellipse cx="74" cy="44" rx="6" ry="14" fill="#fff" opacity=".9" transform="rotate(20 74 44)"/>';
    else if (acc === 11) g += '<path d="M24 24 L40 -6 L56 24Z" fill="#7C5CFF"/><ellipse cx="40" cy="24" rx="22" ry="4" fill="#5B3FD6"/>';
    return '<svg viewBox="0 0 80 80" aria-hidden="true">' + g + '</svg>';
  }
  var myAv = (function () { var v = store('talkie.av'); return normAv(v) || defaultAv(cid); })();
  var avDraft = myAv;
  var avPrev = null;
  function renderAvEditor(changed) {
    if (avPrev) { if (changed) avPrev.rebuild(); } else $('avprev').innerHTML = avatarSvg(avDraft);
    function row(id, labels, idx, swatch) {
      var box = $(id); box.textContent = '';
      labels.forEach(function (l, i) {
        var b = el('button', (swatch ? 'sw ' : '') + (parseInt(avDraft[idx], 12) === i ? 'on' : ''), swatch ? '' : l);
        b.type = 'button';
        if (swatch) { b.style.background = l; b.setAttribute('aria-label', 'Couleur ' + (i + 1)); }
        b.addEventListener('click', function () { var a = avDraft.split(''); a[idx] = i.toString(12); avDraft = a.join(''); renderAvEditor(true); });
        box.appendChild(b);
      });
    }
    row('av-shape', AV_SHAPE, 4); row('av-colors', AV_COLORS, 0, true); row('av-ears', AV_EARS, 1); row('av-tail', AV_TAIL, 5); row('av-face', AV_FACE, 2); row('av-acc', AV_ACC, 3);
  }
  function closeAvSheet() { if (avPrev) { avPrev.destroy(); avPrev = null; } $('avprev').classList.remove('is3d'); $('avprev').textContent = ''; $('sheet-av').hidden = true; }
  function openAvEditor() {
    closeSheets(); avDraft = myAv; $('sheet-av').hidden = false;
    $('av-name').value = store('talkie.avset') ? nick : ''; $('sheet-av-h').textContent = store('talkie.avset') ? 'Le look de ton Mika' : 'Crée ton Mika'; $('av-intro').hidden = !!store('talkie.avset');
    if (m3d && window.Mika3DMod && Mika3DMod.initPreview) {
      $('avprev').classList.add('is3d'); $('avprev').textContent = '';
      avPrev = Mika3DMod.initPreview($('avprev'), function () { return Mika3DMod.avatarOpts(avDraft); });
      if (!avPrev) $('avprev').classList.remove('is3d');
    }
    renderAvEditor(false);
  }
  function saveAv() {
    var first = !store('talkie.avset');
    var nm = clean($('av-name').value, 20);
    if (first && !nm) { toast('Donne-lui un prénom pour continuer 💚'); $('av-name').focus(); return; }
    myAv = avDraft; store('talkie.av', myAv); store('talkie.avset', '1');
    if (nm) { nick = nm; store('tablee.nick', nick); $('nick').value = nick; }
    send({ t: 'nick', nick: nick, av: myAv });
    closeAvSheet(); renderMoi();
    if (m3d) { m3d.setLook(Mika3DMod.avatarOpts(myAv)); m3d.emit('heart', 8); }
    if (first) { if (store('talkie.voice') == null && canSpeak) { voiceOn = true; store('talkie.voice', '1'); renderVoice(); } toast('Bienvenue, ' + nick + ' ! 💚'); setTab('chambre'); cmpOpen(); setTimeout(maybeTuto, 2500); } else toast('Mika a changé de look ✨');
  }
  $('btn-edit-av').addEventListener('click', openAvEditor);
  $('me-av').addEventListener('click', openAvEditor);
  $('av-save').addEventListener('click', saveAv);
  $('av-rand').addEventListener('click', function () { avDraft = defaultAv('r' + Math.random()); renderAvEditor(true); });
  $('sheet-av').addEventListener('click', function (ev) { if (ev.target === $('sheet-av') && store('talkie.avset')) closeAvSheet(); });

  /* ---------- Onglets ---------- */
  var curTab = 'chambre';
  function setTab(name) {
    if (name === 'salon' || name === 'bobby') name = 'chambre';
    curTab = name;
    ['chambre', 'monde', 'salon', 'bobby', 'boutique', 'moi'].forEach(function (t) {
      $('pane-' + t).hidden = t !== name;
      document.body.classList.toggle('tab-' + t, t === name);
    });
    Array.prototype.forEach.call(document.querySelectorAll('#tabbar button'), function (b) {
      if (b.getAttribute('data-tab') === name) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    updateFab();
    if (name === 'moi') renderMoi();
    if (name === 'boutique') openShop(); else closeShopPreview();
    if (name === 'bobby') openBobby(); else closeBobby();
    if (name === 'monde') openPlaza(); else closePlaza();
    if (name !== 'bobby') bobMicStop(true);
    if (name === 'chambre') renderHostBar();
    if (name === 'chambre' && !cmpOpened) cmpOpen();
    window.scrollTo(0, 0);
  }
  Array.prototype.forEach.call(document.querySelectorAll('#tabbar button'), function (b) {
    b.addEventListener('click', function () { setTab(b.getAttribute('data-tab')); });
  });


  /* ---------- iPhone : pas de zoom involontaire, clavier propre ---------- */
  (function () {
    ['gesturestart', 'gesturechange', 'gestureend'].forEach(function (n) { document.addEventListener(n, function (e) { e.preventDefault(); }, { passive: false }); });
    var lastT = 0;
    document.addEventListener('touchend', function (e) {
      var now = Date.now();
      if (now - lastT < 320 && !/^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || '')) e.preventDefault();
      lastT = now;
    }, { passive: false });
    document.addEventListener('touchmove', function (e) { if (e.touches && e.touches.length > 1) e.preventDefault(); }, { passive: false });
    var vv = window.visualViewport;
    function kbState() {
      var open = vv ? window.innerHeight - vv.height > 140 : false;
      document.body.classList.toggle('kb', open && /^(INPUT|TEXTAREA)$/.test((document.activeElement || {}).tagName || ''));
    }
    if (vv) { vv.addEventListener('resize', kbState); vv.addEventListener('scroll', kbState); }
    document.addEventListener('focusin', function (e) {
      if (!/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
      setTimeout(function () { kbState(); try { if (e.target.id === 'cmp-in') window.scrollTo({ top: 0, behavior: 'smooth' }); else e.target.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (er) { /* ignore */ } }, 320);
    });
    document.addEventListener('focusout', function () { setTimeout(function () { kbState(); if (!document.body.classList.contains('kb')) window.scrollTo(window.scrollX, window.scrollY); }, 120); });
  })();

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

  var EMO = { happy: 'happy', love: 'love', wow: 'wow', sad: 'sad', worried: 'worry', sleepy: 'sleep', proud: 'proud', shy: 'shy', silly: 'happy', cheer: 'happy', angry: 'angry' };
  function feel(e) {
    mood(EMO[e] || 'happy', (e === 'sad' || e === 'worried') ? 9000 : 3600);
    if (e === 'cheer' || e === 'proud') { anim('jump'); burst(['🎉', '✨', '💚']); }
    else if (e === 'love') { anim('jump'); burst(['💖', '💚', '🌸']); }
    else if (e === 'shy') anim('shy');
    else if (e === 'worried' || e === 'sad') burst(['💧']);
    else if (e === 'angry') { anim('jump'); burst(['💢', '🔥']); }
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
      speak: !!(voiceOn && cloudTts && gesture), vox: vox().tts, kind: kind, ui: (window.I18N && I18N.lang === 'en') ? 'en' : 'fr', name: nick, hour: new Date().getHours(), day: new Date().toLocaleDateString(uiLang() === 'en' ? 'en-GB' : 'fr-FR', { weekday: 'long' }),
      awayH: kind === 'open' ? last : null, visits: mem.visits, streak: mem.streak, bond: cmp.bond,
      life: lifeText(), moods: cmp.moods.slice(-5).map(function (x) { return x.m; }), facts: cmp.facts, follow: cmp.follow, quests: questSummary(), pet: nick, needs: needsText(),
      messages: cmp.thread.slice(-16).map(function (x) { return { r: x.r, t: x.t }; })
    };
  }
  function questSummary() {
    ensureQuests();
    return game.q.done.length + '/' + game.q.ids.length + ' faites' + (game.q.done.length ? ' (' + game.q.done.map(function (i) { return QPOOL[i] ? QPOOL[i].t : ''; }).join(' ; ') + ')' : '') + '. Programme du jour : ' + game.q.ids.map(function (i) { return QPOOL[i] ? QPOOL[i].t : ''; }).join(' ; ');
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
      .catch(function () { return kind === 'story' ? null : localFallback(kind); })
      .then(function (r) {
        clearTimeout(to);
        if (tok !== cmpTok) return;
        cmpBusy = false;
        if (!r || !r.say) { var b = $('mika-say'); if (b) b.classList.remove('thinking'); return; }
        applyReply(r, kind);
      });
  }
  function applyReply(r, kind) {
    var say = clean(r.say, 320).replace(/^\s*(say|voice)\s*:\s*/i, '').replace(/\s*\bvoice\s*:.*$/i, '').trim();
    if (!say) return;
    addThread('m', say);
    feel(r.e);
    mikaSay(say, false, false, { voice: clean(r.voice, 360), emo: r.e });
    if (r.mood && kind === 'reply' && !moodToday()) recordMood(r.mood);
    (r.remember || []).forEach(function (f) {
      f = clean(f, 90);
      if (f && cmp.facts.every(function (x) { return x.toLowerCase() !== f.toLowerCase(); })) cmp.facts.push(f);
    });
    cmp.facts = cmp.facts.slice(-30);
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
    if (talkMode && cmpSpoken) afterSpeech(cmpListen);
  }
  function cmpOpen() {
    if (!store('talkie.avset')) return;
    cmpOpened = true; renderLife(); scheduleStory(); setInterval(renderLife, 60000);
    renderQuests(); renderNeeds();
    $('thread').textContent = '';
    pendingM = '';
    cmp.thread.slice(-6).forEach(function (x) { $('thread').appendChild(el('div', 'tmsg ' + x.r, x.t)); });
    $('thread').scrollTop = $('thread').scrollHeight;
    renderBond();
    setTimeout(function () { if (!reduceMotion) { mood('love', 1600); anim('jump'); } callCompanion('open'); }, reduceMotion ? 0 : 700);
  }
  function cmpSend(text) {
    text = clean(text, 400);
    if (!text || cmpBusy) return;
    lastUserAt = Date.now();
    dir.engaged = true; cmpNudges = 0; bump('s', 2);
    addThread('u', text);
    userBubble(text);
    cmp.bond++;
    saveCmp();
    $('mood-row').hidden = true;
    setQr([]);
    callCompanion('reply');
    backchannel(text);
  }
  function userBubble(text) {
    var host = $('mika-stage'); if (!host || !document.body.classList.contains('has3d')) return;
    var old = host.querySelector('.ub'); if (old) old.remove();
    var b = el('div', 'st3-b me ub', clean(text, 90)); host.appendChild(b);
    setTimeout(function () { if (b.parentNode) b.remove(); }, Math.min(6000, 2500 + text.length * 50));
  }
  /* ---------- Parler à Boubou : micro, conversation vocale, réaction immédiate ---------- */
  var cmpRec = null, cmpRecTimer = 0, talkMode = false, cmpSpoken = false;
  var CMP_SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (CMP_SR) $('cmp-mic').hidden = false;
  function cmpMicUi(on) { $('cmp-mic').classList.toggle('rec', !!on); $('cmp-mic').classList.toggle('talk', talkMode); try { if (m3d && m3d.listening) m3d.listening(!!on); } catch (e) { /* ignore */ } }
  function cmpMicStop(abort) {
    clearTimeout(cmpRecTimer);
    var r = cmpRec; cmpRec = null; cmpMicUi(false);
    if (r) { r.onresult = r.onerror = r.onend = null; try { abort ? r.abort() : r.stop(); } catch (e) { /* ignore */ } }
  }
  function cmpListen() {
    if (!CMP_SR || cmpRec || cmpBusy || curTab !== 'chambre' || document.hidden) return;
    try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { /* ignore */ }
    stopSpeaking();
    var rec; try { rec = new CMP_SR(); } catch (e) { return; }
    cmpRec = rec; var final = '';
    try { rec.lang = uiLang() === 'en' ? 'en-US' : 'fr-FR'; rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1; } catch (e) { /* ignore */ }
    cmpMicUi(true);
    rec.onresult = function (ev) { try { var t = ''; for (var i = 0; i < ev.results.length; i++) t += ev.results[i][0].transcript; final = t; $('cmp-in').value = t; $('cmp-send').disabled = !t.trim(); } catch (e) { /* ignore */ } };
    rec.onerror = function (ev) {
      var er = ev && ev.error;
      if (er === 'not-allowed' || er === 'service-not-allowed') toast('Autorise le micro pour parler à Boubou 🎤 (Réglages du navigateur)');
      else if (er === 'no-speech') { if (talkMode) toast('Je ne t’entends plus : touche 🎤 pour reprendre'); }
      else if (er !== 'aborted') toast('Le micro a eu un souci, tu peux écrire ✍️');
      talkMode = false; cmpMicStop(true);
    };
    rec.onend = function () {
      var t = clean(final, 400); cmpMicStop(true);
      if (t) { cmpSpoken = true; $('cmp-in').value = ''; $('cmp-send').disabled = true; cmpSend(t); }
      else talkMode = false, cmpMicUi(false);
    };
    cmpRecTimer = setTimeout(function () { if (cmpRec === rec) { try { rec.stop(); } catch (e) { cmpMicStop(true); } } }, 15000);
    try { rec.start(); } catch (e) { cmpMicStop(true); talkMode = false; toast('Le micro n’a pas pu démarrer 🎤'); }
  }
  $('cmp-mic').addEventListener('click', function () {
    if (cmpRec || talkMode) { talkMode = false; cmpMicStop(true); stopSpeaking(); return; }
    talkMode = true; cmpListen();
  });
  document.addEventListener('visibilitychange', function () { if (document.hidden && cmpRec) { talkMode = false; cmpMicStop(true); } });
  function afterSpeech(cb) {
    var n = 0, iv = setInterval(function () {
      n++;
      if ((!talkFlags.v && !talkFlags.t && !cmpBusy) || n > 100) { clearInterval(iv); if (n <= 100) setTimeout(cb, 450); }
      if (!talkMode) clearInterval(iv);
    }, 300);
  }
  var BACK = {
    sad: ['Oh… mmh.', 'Oh non…', 'Mmh… je suis là.'], angry: ['Quoi ?! Attends…', 'Non mais attends, quoi ?!'],
    happy: ['Ooh !', 'Waaah, vraiment ?', 'Hihi, dis-moi !'], ask: ['Mmh… alors…', 'Hmm, bonne question…'], plain: ['Mmh.', 'Ah, d’accord…', 'Hmm, je vois.']
  };
  function backchannel(text) {
    if (!voiceOn || !cloudTts || !voiceEl || !gesture || uiLang() === 'en') return;
    var t = String(text).toLowerCase(), k = 'plain';
    if (/triste|nul|fatigu|pleur|stress|angoiss|d[ée]prim|seul|mal |peur|d[ée]cu|craqu/.test(t)) k = 'sad';
    else if (/[ée]nerv|rage|col[eè]re|marre|patron|chef|insupport|saoul|ras le bol|injuste/.test(t)) k = 'angry';
    else if (/content|heureu|super|g[ée]nial|r[ée]ussi|gagn|bravo|youpi|trop bien|promu|!/.test(t)) k = 'happy';
    else if (/\?\s*$/.test(t)) k = 'ask';
    var line = pick(BACK[k]), emo = k === 'ask' || k === 'plain' ? 'neutral' : k;
    cloudLine(line, emo).then(function (a) { if (cmpBusy) { setTalking(true); a.play().catch(function () { setTalking(false); }); } }).catch(function () {});
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
      completeQuest('mood');
      $('mood-row').hidden = true;
      addThread('u', b.textContent + ' ' + ['Au plus bas', 'Bof', 'Bof, ça va', 'Plutôt bien', 'Au top'][m - 1]);
      cmp.bond++; saveCmp();
      callCompanion('mood', { mood: m });
    });
  });
  $('cmp-help').addEventListener('click', function () { mikaSay(CARE_LOCAL, false, 'worry'); });
  var CARE_LOCAL = 'Si ça ne va vraiment pas : le 3114 répond jour et nuit, gratuitement (France). Je suis une IA et je reste là, mais une vraie personne peut mieux t’aider 💚';

  /* ---------- La vie de Mika : elle a sa journée, ses envies, ses petites histoires ---------- */
  var LIFE_ACT = [
    [[0, 5], ['dort en boule sous sa couette', '😴']], [[5, 8], ['s’étire et rêve encore de frites', '🥱']], [[8, 10], ['prépare son petit-déj (des mochis, évidemment)', '🍡']],
    [[10, 12], ['arrose Basilic, sa plante', '🌱']], [[12, 14], ['mange des onigiris devant la fenêtre', '🍙']], [[14, 16], ['fait des origamis ratés', '📄']],
    [[16, 18], ['écoute sa playlist en boucle', '🎧']], [[18, 20], ['cuisine un truc qui sent bon (et un peu brûlé)', '🍳']], [[20, 22], ['se blottit avec un plaid et une série', '🛋️']], [[22, 24], ['compte les étoiles par la fenêtre', '🌙']]
  ];
  var LIFE_EVT = [
    'Basilic a sorti une nouvelle feuille et elle est super fière', 'elle a essayé de faire un gâteau, il ressemble à un nuage plat', 'elle a trouvé un pétale tout rose derrière le radiateur',
    'un oiseau est venu sur sa fenêtre et ils se sont regardés 10 minutes', 'elle s’est fâchée toute seule contre un puzzle de 500 pièces, puis a gagné', 'elle a appris une chanson et la chante faux avec beaucoup d’amour',
    'elle a rêvé qu’elle était un onigiri géant', 'elle a rangé sa chambre… et ne retrouve plus rien', 'elle a failli avoir une crise de nerfs devant sa boîte mail imaginaire, puis a mangé un mochi',
    'elle a inventé un nouveau mot : « douxtranquille »', 'elle a cru que la lune la suivait (c’est vrai, elle la suit)', 'elle a fait un concours de bulles avec le canapé (le canapé a perdu)'
  ];
  var LIFE_WISH = [
    { id: 'feed', t: 'un bon petit plat', e: '🍙' }, { id: 'hug', t: 'un gros câlin', e: '🤗' }, { id: 'play', t: 'jouer un peu avec toi', e: '🎈' },
    { id: 'nap', t: 'une petite sieste', e: '😴' }, { id: 'water', t: 'arroser Basilic', e: '🌱' }, { id: 'wash', t: 'un bain moussant', e: '🛁' }
  ];
  function lifeNow() {
    var d = new Date(), h = d.getHours(), key = todayKey(), hs = hash(key + (nick || ''));
    var act = LIFE_ACT[0][1];
    for (var i = 0; i < LIFE_ACT.length; i++) if (h >= LIFE_ACT[i][0][0] && h < LIFE_ACT[i][0][1]) act = LIFE_ACT[i][1];
    var evt = LIFE_EVT[hs % LIFE_EVT.length], wish = LIFE_WISH[(hs >> 3) % LIFE_WISH.length];
    return { act: act[0], e: act[1], evt: evt, wish: wish, wishDone: game.wish === key };
  }
  function lifeText() { var l = lifeNow(); return 'En ce moment, Mika ' + l.act + '. Ce qui lui est arrivé aujourd’hui : ' + l.evt + '. Son envie du jour : ' + l.wish.t + (l.wishDone ? ' (déjà exaucée, elle est ravie)' : '') + '.'; }
  function renderLife() {
    var b = $('life-line'); if (!b) return;
    var l = lifeNow();
    b.className = 'life-line' + (l.wishDone ? ' done' : '');
    b.textContent = '';
    b.appendChild(el('b', null, l.e + ' Mika ' + l.act));
    b.appendChild(el('small', null, l.wishDone ? '✅ Envie exaucée : ' + l.wish.t : 'Son envie du jour : ' + l.wish.e + ' ' + l.wish.t));
  }
  function wishCheck(id) {
    var l = lifeNow();
    if (l.wishDone || l.wish.id !== id) return;
    game.wish = todayKey(); saveGame(); renderLife();
    earn(5);
    setTimeout(function () { mikaSay(pick(['Tu as deviné mon envie du jour ?! 🥹 Merci, +5 pétales pour toi 🌸', 'C’était exactement ce dont j’avais envie… tu me connais trop bien 💚 (+5 🌸)']), false, 'happy'); }, 1200);
  }
  var storyT = null;
  function scheduleStory() {
    clearTimeout(storyT);
    storyT = setTimeout(function () {
      if (!room && !document.hidden && curTab === 'chambre' && !cmpBusy && cmpOpened && !asleep() && !document.body.classList.contains('kb')) callCompanion('story');
      scheduleStory();
    }, 110000 + Math.random() * 70000);
  }
  function nudge() {
    if (room || document.hidden || curTab !== 'chambre' || cmpBusy || asleep()) return;
    if (cmpNudges >= 2 || !cmpOpened || !cmp.thread.length || cmp.thread[cmp.thread.length - 1].r !== 'm') return;
    cmpNudges++;
    callCompanion('nudge');
  }


  /* ---------- Quêtes du jour, pétales, boutique (la boucle à la Finch) ---------- */
  var QPOOL = {
    mood: { t: 'Dire à ton Mika comment tu te sens', e: '🫶', auto: true }, salon: { t: 'Retrouver du monde dans le Monde', e: '🌍', auto: true },
    feed: { t: 'Nourrir ton Mika', e: '🍙', need: 2 }, nap: { t: 'Lui faire faire une sieste', e: '😴' }, hug: { t: 'Lui faire un câlin', e: '🤗' },
    play: { t: 'Jouer ensemble', e: '🎈' }, wave: { t: 'Dire coucou à quelqu’un', e: '👋', auto: true }, bobby: { t: 'Papoter avec Professeur Bobby', e: '🎓', auto: true }, wash: { t: 'Lui faire prendre un bain', e: '🛁' }, water: { t: 'Arroser les plantes', e: '🌱' }
  };
  function ensureQuests() {
    var d = todayKey();
    if (game.q.d === d && game.q.ids.length) return;
    var pool = ['feed', 'nap', 'hug', 'play', 'salon', 'wave', 'bobby', 'wash', 'water'], h = hash(d + cid), ids = ['mood'];
    var i = h % pool.length; ids.push(pool[i]);
    var j = (h >> 3) % (pool.length - 1); if (j >= i) j++; ids.push(pool[j]);
    game.q = { d: d, ids: ids, done: [], prog: {} };
    saveGame();
  }
  function renderPetals() { ['petals', 'petals2', 'petals3'].forEach(function (k) { if ($(k)) $(k).textContent = String(game.petals); }); }
  function renderQuests() {
    ensureQuests();
    var box = $('quests'); box.textContent = '';
    var n = game.q.done.length, tot = game.q.ids.length;
    var h = el('div', 'qh'); h.appendChild(el('span', null, n >= tot ? '🎉 Journée complète !' : '🎯 Défis du jour')); h.addEventListener('click', function () { box.classList.toggle('open'); });
    h.appendChild(el('b', null, n + '/' + tot)); box.appendChild(h);
    var bar = el('div', 'qb'); var bi = el('i'); bi.style.width = Math.round(n / tot * 100) + '%'; bar.appendChild(bi); box.appendChild(bar);
    game.q.ids.forEach(function (id) {
      var q = QPOOL[id]; if (!q) return;
      var done = game.q.done.indexOf(id) >= 0, pr = (game.q.prog && game.q.prog[id]) || 0;
      var b = el('button', 'q' + (done ? ' done' : '') + (q.auto ? ' auto' : '')); b.type = 'button';
      b.appendChild(el('span', 'ck', done ? '✓' : ''));
      b.appendChild(el('span', 'tx', q.e + ' ' + q.t + (q.need && !done ? ' (' + pr + '/' + q.need + ')' : '')));
      b.appendChild(el('span', 'rw', '+10 🌸'));
      b.addEventListener('click', function () {
        if (done) return;
        if (id === 'mood') { mikaSay('Choisis un visage juste en dessous, je veux savoir comment tu vas 🫶', false, 'happy'); if (!moodToday()) $('mood-row').hidden = false; return; }
        if (id === 'salon' || id === 'wave') { mikaSay('Va faire un tour dans le Monde : mes copains mochis t’y attendent 🌍', false, 'happy'); return; }
        if (id === 'bobby') { setTab('bobby'); return; }
        var act = { feed: openFood, nap: doNap, hug: doHug, play: doPlay, wash: doWash, water: function () { doWater(0); } }[id]; if (act) act();
      });
      box.appendChild(b);
    });
    renderPetals();
  }
  function earn(n) { game.petals += n; saveGame(); renderPetals(); }
  var CHEERS = ['Yesss, bravo toi ! Je suis trop fier·ère 🥹', 'Kyaa ! Un pas de plus vers une belle journée ✨', 'Tu gères ! Tiens, des pétales pour toi 🌸', 'Hwaiting ! Ça, c’est du soin 💚'];
  function progressQuest(id) {
    wishCheck(id);
    ensureQuests();
    if (game.q.ids.indexOf(id) < 0 || game.q.done.indexOf(id) >= 0) return;
    game.q.prog = game.q.prog || {};
    game.q.prog[id] = (game.q.prog[id] || 0) + 1;
    if (game.q.prog[id] < (QPOOL[id].need || 1)) { saveGame(); renderQuests(); return; }
    completeQuest(id);
  }
  function completeQuest(id) {
    ensureQuests();
    if (game.q.ids.indexOf(id) < 0 || game.q.done.indexOf(id) >= 0) return;
    game.q.done.push(id);
    earn(10);
    var all = game.q.done.length >= game.q.ids.length;
    if (all) earn(15);
    saveGame(); renderQuests();
    toast(all ? '+25 🌸 Journée complète !' : '+10 🌸');
    if (curTab === 'chambre' && !cmpBusy && id !== 'mood') {
      setTimeout(function () {
        if (cmpBusy) return;
        feel(all ? 'proud' : 'cheer');
        mikaSay(all ? 'Trois sur trois ! Je suis tellement fier·ère de nous 🥹 Voilà un bonus de pétales !' : pick(CHEERS), false, false);
        if (m3d) m3d.emit('heart', 5);
      }, 2200);
    }
  }

  /* ---------- Soins : faim, énergie, compagnie (jamais punitifs : une jauge basse, c'est juste un câlin à demander) ---------- */
  var care = (function () {
    var c = { h: 70, e: 80, s: 60, p: 78, pl: 70, t: Date.now() };
    try { var j = JSON.parse(store('talkie.care') || '{}'); ['h', 'e', 's', 'p', 'pl'].forEach(function (k) { if (isFinite(j[k])) c[k] = Math.max(0, Math.min(100, Number(j[k]))); }); if (j.t > 0) c.t = Number(j.t); } catch (e) { /* ignore */ }
    return c;
  })();
  function decayCare() {
    var now = Date.now(), hrs = Math.max(0, Math.min(48, (now - care.t) / 3600000));
    care.t = now;
    care.h = Math.max(12, care.h - 5 * hrs); care.e = Math.max(12, care.e - 3 * hrs); care.s = Math.max(12, care.s - 4 * hrs); care.p = Math.max(15, care.p - 3 * hrs); care.pl = Math.max(8, care.pl - 4 * hrs);
    store('talkie.care', JSON.stringify(care));
  }
  function bump(k, n) { decayCare(); care[k] = Math.max(0, Math.min(100, care[k] + n)); store('talkie.care', JSON.stringify(care)); renderNeeds(); }
  function renderNeeds() {
    var box = $('needs'); box.textContent = '';
    [['h', '🍙', 'Faim'], ['e', '⚡', 'Énergie'], ['s', '💞', 'Compagnie'], ['p', '🫧', 'Propreté']].forEach(function (x) {
      var d = el('div', 'nd' + (care[x[0]] < 30 ? ' low' : '')); d.title = x[2] + ' : ' + Math.round(care[x[0]]) + '%';
      d.appendChild(el('span', null, x[1]));
      var bar = el('i'); var b = el('b'); b.style.width = Math.round(care[x[0]]) + '%'; bar.appendChild(b); d.appendChild(bar);
      box.appendChild(d);
    });
    if (m3d && m3d.setPlants) m3d.setPlants(care.pl / 100);
  }
  function needsText() { return 'faim ' + Math.round(care.h) + '%, énergie ' + Math.round(care.e) + '%, compagnie ' + Math.round(care.s) + '%, propreté ' + Math.round(care.p) + '%'; }
  var FOODS = [
    { id: 'onigiri', e: '🍙', t: 'Onigiri', d: 'Le classique, toujours gratuit', price: 0, gain: 25 },
    { id: 'mochi', e: '🍡', t: 'Mochi', d: 'Petit et moelleux', price: 10, gain: 22 },
    { id: 'dango', e: '🍢', t: 'Dango', d: 'Trois boules sucrées', price: 15, gain: 30 },
    { id: 'boba', e: '🧋', t: 'Bubble tea', d: 'Il adore ça', price: 25, gain: 35 },
    { id: 'ramen', e: '🍜', t: 'Ramen', d: 'Le repas qui réchauffe', price: 40, gain: 45 }
  ];
  var careBusy = false;
  function setCareBusy(on) { careBusy = on; Array.prototype.forEach.call(document.querySelectorAll('#care button'), function (b) { b.disabled = on; }); }
  function openFood() {
    if (careBusy) return;
    var box = $('foods'); box.textContent = '';
    FOODS.forEach(function (f) {
      var b = el('button', 'food'); b.type = 'button';
      b.appendChild(el('span', 'fe', f.e));
      var t = el('span', 'ft', f.t); t.appendChild(el('small', null, f.d)); b.appendChild(t);
      b.appendChild(el('span', 'fp', f.price ? '🌸 ' + f.price : 'Gratuit'));
      b.addEventListener('click', function () { feed(f); });
      box.appendChild(b);
    });
    $('sheet-food').hidden = false;
  }
  function feed(f) {
    decayCare();
    if (care.h >= 96) { $('sheet-food').hidden = true; mikaSay('Je suis tout rond, je n’ai plus de place ! 🥹 Merci, c’est adorable.', false, 'shy'); return; }
    if (game.petals < f.price) { toast('Il te manque ' + (f.price - game.petals) + ' 🌸 : l’onigiri est gratuit !'); return; }
    $('sheet-food').hidden = true;
    game.petals -= f.price; saveGame(); renderPetals();
    bump('h', f.gain);
    setCareBusy(true);
    if (m3d) m3d.act('eat'); else { mood('happy', 2500); anim('jump'); }
    mikaSay(pick(['Miam miam ! ' + f.e + ' Merci, c’est délicieux 🥹', 'Itadakimasu ! ' + f.e + ' Oh que c’est bon…', 'Hmmm ' + f.e + ' tu prends tellement soin de moi 💚']), true, false);
    progressQuest('feed');
    setTimeout(function () { setCareBusy(false); }, m3d ? 2900 : 1500);
  }
  function doNap() {
    decayCare();
    if (careBusy) return;
    if (care.e >= 88) { mikaSay('Je suis en pleine forme, regarde ! ✨ Mais merci d’y penser 💚', false, 'happy'); return; }
    setCareBusy(true);
    mikaSay('Oh oui, une petite sieste… Bonne nuit, ou presque 😴', true, 'sleep');
    var done = function () { bump('e', 45); setCareBusy(false); progressQuest('nap'); mood('happy', 3000); mikaSay(pick(['Ahhh, ça fait un bien fou ! 😴➡️✨ Merci de m’avoir laissé dormir.', 'J’ai rêvé de frites géantes… et de toi 🍟💚']), false, false); };
    if (m3d) { napDone = done; m3d.act('nap', 7000); setTimeout(function () { if (napDone === done) { napDone = null; done(); } }, 16000); } else setTimeout(done, 3000);
  }
  var napDone = null;
  var hugAt = 0;
  function doHug() {
    if (careBusy || Date.now() - hugAt < 2500) return;
    hugAt = Date.now();
    bump('s', 7);
    if (m3d) m3d.act('hug'); else { mood('love', 2500); anim('jump'); burst(['💖', '💚']); }
    mikaSay(pick(['Câlin ! 🤗 Je me sens tout chaud…', 'Kyaaa, encore, encore ! 🥹', 'Tu es mon humain préféré 💚']), false, false);
    progressQuest('hug');
  }
  function doPlay() {
    decayCare();
    if (careBusy) return;
    if (care.e < 20) { mikaSay('Je suis trop fatigué pour jouer… une sieste d’abord ? 😪', false, 'sleep'); return; }
    bump('e', -10); bump('h', -6); bump('s', 4);
    setCareBusy(true);
    if (m3d) m3d.act('play'); else { mood('happy', 3000); anim('jump'); }
    mikaSay(pick(['Youhouuu ! 🎈 On s’amuse trop !', 'Attrape-moi si tu peux ! ✨', 'Hihihi, je tourbillonne ! 🌀']), true, false);
    earn(2); progressQuest('play');
    setTimeout(function () { setCareBusy(false); }, 3600);
  }
  var jobDone = {};
  function runJob(kind, ms, extra, fin, fbMs) {
    if (!m3d) { setTimeout(fin, 1800); return; }
    jobDone[kind] = fin; m3d.act(kind, ms, extra);
    setTimeout(function () { if (jobDone[kind] === fin) { jobDone[kind] = null; fin(); } }, fbMs || 16000);
  }
  function doWash() {
    decayCare();
    if (careBusy) return;
    if (care.p >= 90) { mikaSay('Je suis déjà tout propre, je sens la fleur de cerisier 🌸', false, 'happy'); return; }
    setCareBusy(true);
    mikaSay(pick(['Splash ! Un bon bain moussant 🫧', 'Oh oui, des bulles ! Tu es adorable 🛁']), true, 'happy');
    runJob('wash', null, null, function () { bump('p', 60); setCareBusy(false); progressQuest('wash'); mood('love', 2600); mikaSay('Tout propre, tout doux ! ✨ Merci de prendre soin de moi.', false, false); });
  }
  function doToilet() {
    if (careBusy) return;
    setCareBusy(true);
    mikaSay('Euh… j’ai un petit besoin, ne regarde pas 🙈', true, 'shy');
    runJob('toilet', null, null, function () { setCareBusy(false); bump('p', -4); mood('happy', 2200); mikaSay('Ouf, ça va mieux ! Merci de m’avoir laissé de l’intimité 🚽💚', false, false); }, 9000);
  }
  function doWater(idx) {
    decayCare();
    if (careBusy) return;
    if (care.pl >= 85) { mikaSay('Mes plantes sont toutes contentes, regarde comme elles brillent 🌱', false, 'happy'); return; }
    setCareBusy(true);
    mikaSay(pick(['Allez Basilic, à boire ! 🌱💧', 'Glou glou… elles ont soif, les petites 🌿']), true, 'happy');
    runJob('water', null, { idx: idx || 0 }, function () { bump('pl', 55); setCareBusy(false); progressQuest('water'); mood('happy', 2600); mikaSay('Elles se redressent ! 🌿✨ Merci, tu as la main verte.', false, false); });
  }
  function goMonde() { mikaSay('Allons voir qui est là ! 🌍', false, 'happy'); setTimeout(function () { setTab('monde'); }, 700); }
  var OBJ = {
    fridge: function () { openFood(); }, bath: doWash, toilet: doToilet, bed: doNap, pc: goMonde, door: goMonde,
    plant: function (d) { doWater(d && d.idx); }
  };
  Array.prototype.forEach.call(document.querySelectorAll('#care button'), function (b) {
    b.addEventListener('click', function () { dir.engaged = true; bumpIdle(); ({ feed: openFood, nap: doNap, hug: doHug, play: doPlay })[b.getAttribute('data-act')](); });
  });
  $('food-close').addEventListener('click', function () { $('sheet-food').hidden = true; });
  $('sheet-food').addEventListener('click', function (ev) { if (ev.target === $('sheet-food')) $('sheet-food').hidden = true; });
  var lastSelfTalk = Date.now();
  function selfTalk() {
    decayCare(); renderNeeds();
    if (curTab !== 'chambre' || room || document.hidden || cmpBusy || careBusy || asleep() || Date.now() - lastSelfTalk < 90000 || Date.now() - lastUserAt < 20000) return;
    var k = care.h < 30 ? 'h' : care.e < 25 ? 'e' : care.s < 25 ? 's' : null;
    if (!k) return;
    lastSelfTalk = Date.now();
    if (k === 'h') { if (m3d) m3d.act('rumble'); mikaSay('Gloup… mon ventre fait des bruits de frites 🍟 Tu aurais un petit quelque chose ?', false, 'worry'); setQr([['🍙 Nourrir', openFood, 'yes']]); }
    else if (k === 'e') { mikaSay('*bâille* Je commence à avoir les yeux qui piquent… 😪', false, 'sleep'); setQr([['😴 Sieste', doNap, 'yes']]); }
    else { mikaSay('Je me sens un peu seul… et si on allait voir du monde ? 💞', false, 'sad'); setQr([['🌍 Aller au Monde', function () { setTab('monde'); }, 'yes'], ['🤗 Câlin', doHug]]); }
  }
  setInterval(selfTalk, 30000);
  setInterval(function () { decayCare(); renderNeeds(); }, 60000);

  /* ---------- Boutique : tenues, maison, premium (maquette) ---------- */
  var shopSeg = 'outfit', shopSel = null, shopPrev = null;
  function shopLook() {
    if (shopSel && (shopSel.kind === 'bout' || shopSel.kind === 'bfeat')) {
      var bl = ['glasses', 'bowtie'].concat(game.bobOn.filter(function (x) { return !(shopSel.kind === 'bout' && x === shopSel.id); }));
      if (shopSel.kind === 'bout' && !(game.bobOn.indexOf(shopSel.id) >= 0 && shopSel.own)) bl.push(shopSel.id);
      return { mika: true, color: 0xf2b27a, ears: 'bear', eyes: 'dot', acc: bl };
    }
    var o = Mika3DMod.avatarOpts(myAv), list = accList().slice();
    if (shopSel && shopSel.kind === 'outfit') { if (HEAD.indexOf(shopSel.id) >= 0) list = list.filter(function (x) { return HEAD.indexOf(x) < 0; }); if (list.indexOf(shopSel.id) < 0) list.push(shopSel.id); }
    o.acc = list; return o;
  }
  function openShop() {
    renderShop();
    if (m3d && window.Mika3DMod && Mika3DMod.initPreview && !shopPrev) {
      $('shop-prev').textContent = '';
      shopPrev = Mika3DMod.initPreview($('shop-prev'), shopLook);
    }
  }
  function closeShopPreview() { if (shopPrev) { shopPrev.destroy(); shopPrev = null; } }
  function items() {
    if (shopSeg === 'outfit') return WARD.filter(function (w) { return !w.premium; }).map(function (w) { return { kind: 'outfit', id: w.id, label: w.label, price: w.price, need: w.need, own: unlocked(w), on: unlocked(w) && accList().indexOf(w.id) >= 0 }; });
    if (shopSeg === 'decor') return DECOR.map(function (d) { return { kind: 'decor', id: d.id, label: d.label, e: d.e, price: d.price, own: game.decorOwn.indexOf(d.id) >= 0, on: game.decorOn.indexOf(d.id) >= 0 }; });
    if (shopSeg === 'bobby') return BFEATS.map(function (f) { return { kind: 'bfeat', id: f.id, label: f.label, e: f.e, price: f.price, d: f.d, own: bHas(f.id), on: false }; })
      .concat(BOUT.map(function (f) { return { kind: 'bout', id: f.id, label: 'Bobby : ' + f.label, e: f.e, price: f.price, own: bHas(f.id), on: game.bobOn.indexOf(f.id) >= 0 }; }));
    return WARD.filter(function (w) { return w.premium; }).map(function (w) { return { kind: 'outfit', id: w.id, label: w.label, premium: w.premium, own: false, on: false }; })
      .concat([{ kind: 'pack', id: 'bobpro', label: 'Bobby Pro', e: '🎓', premium: '4,99 €/mois' }, { kind: 'pack', id: 'sakura', label: 'Pack Sakura', e: '🌸', premium: '3,99 €' }, { kind: 'pack', id: 'pyjama', label: 'Pack Nuit étoilée', e: '🌙', premium: '3,99 €' }]);
  }
  function renderShop() {
    renderPetals();
    Array.prototype.forEach.call(document.querySelectorAll('#shop-seg button'), function (b) { b.classList.toggle('on', b.getAttribute('data-seg') === shopSeg); });
    var g = $('shop-grid'); g.textContent = '';
    g.classList.toggle('decor', shopSeg !== 'outfit');
    items().forEach(function (it) {
      var b = el('button', 'ward' + (it.on ? ' on' : '') + (it.own ? '' : ' locked') + (shopSel && shopSel.id === it.id ? ' sel' : '')); b.type = 'button';
      if (it.kind === 'outfit') {
        var img = (m3d && window.Mika3DMod) ? Mika3DMod.mikaPng(it.id) : '';
        if (img) b.innerHTML = '<img alt="" src="' + img + '">'; else b.innerHTML = mikaSvg(it.id).replace('class="mk', 'class="mk mini-m');
      } else b.appendChild(el('span', 'em', it.e));
      b.appendChild(el('span', null, it.label));
      b.appendChild(el('span', 'px', it.premium ? '💎 ' + it.premium : it.own ? (it.on ? 'Actif' : 'Dans l’armoire') : (it.need ? '🌸 ' + it.price + ' · ' + it.need + ' j' : '🌸 ' + it.price)));
      if (!it.own) b.appendChild(el('span', 'lk', it.premium ? '💎' : '🔒'));
      b.addEventListener('click', function () { shopSel = it; if (shopPrev) { shopPrev.setDecor(it.kind === 'decor' ? it.id : null); shopPrev.rebuild(); } renderShop(); });
      g.appendChild(b);
    });
    renderShopAct();
  }
  function renderShopAct() {
    var box = $('shop-act'); box.textContent = '';
    var it = shopSel;
    if (!it) { var h = el('div', 'sn', 'Touche un article pour l’essayer'); h.appendChild(el('small', null, 'Ton Mika te montre ce que ça donne.')); box.appendChild(h); return; }
    var n = el('div', 'sn', it.label); n.appendChild(el('small', null, it.d && !it.own ? it.d + ' · 🌸 ' + it.price : it.premium ? 'Maquette : bientôt disponible' : it.own ? (it.on ? 'Il le porte' : 'Dans ton armoire') : '🌸 ' + it.price)); box.appendChild(n);
    var b = el('button', 'primary', it.premium ? '💎 Bientôt' : (it.kind === 'bfeat' && it.own) ? 'Ouvrir la classe' : it.own ? (it.on ? (it.kind === 'decor' ? 'Retirer' : 'Retirer') : (it.kind === 'decor' ? 'Poser' : 'Porter')) : 'Acheter'); b.type = 'button';
    b.addEventListener('click', function () { shopAction(it); });
    box.appendChild(b);
  }
  function shopAction(it) {
    if (it.premium) { toast('💎 Bientôt disponible !'); return; }
    if (it.kind === 'bfeat' || it.kind === 'bout') { bobShopAction(it); return; }
    if (!it.own) {
      if (it.need && ((mem && mem.visits) || 0) >= it.need) { /* cadeau de fidélité : déjà possédé */ }
      if (game.petals < it.price) { toast('Il te manque ' + (it.price - game.petals) + ' 🌸 : prends soin de ton Mika pour en gagner !'); return; }
      game.petals -= it.price;
      if (it.kind === 'decor') { game.decorOwn.push(it.id); game.decorOn.push(it.id); if (m3d) m3d.setDecor(game.decorOn); }
      else { game.owned.push(it.id); equip = accList().filter(function (x) { return HEAD.indexOf(it.id) < 0 || HEAD.indexOf(x) < 0; }).concat(it.id); store('talkie.equip', JSON.stringify(equip)); fillMika(); }
      saveGame(); toast('Acheté ! ' + it.label + ' 🎉'); shopSel = null; if (shopPrev) { shopPrev.setDecor(null); shopPrev.rebuild(); } renderShop(); return;
    }
    if (it.kind === 'decor') { var k = game.decorOn.indexOf(it.id); if (k >= 0) game.decorOn.splice(k, 1); else game.decorOn.push(it.id); saveGame(); if (m3d) m3d.setDecor(game.decorOn); }
    else {
      var cur = accList().slice(), i2 = cur.indexOf(it.id);
      if (i2 >= 0) cur.splice(i2, 1); else { if (HEAD.indexOf(it.id) >= 0) cur = cur.filter(function (x) { return HEAD.indexOf(x) < 0; }); cur.push(it.id); }
      equip = cur; store('talkie.equip', JSON.stringify(equip)); fillMika();
    }
    shopSel = null; if (shopPrev) { shopPrev.setDecor(null); shopPrev.rebuild(); } renderShop();
  }
  Array.prototype.forEach.call(document.querySelectorAll('#shop-seg button'), function (b) { b.addEventListener('click', function () { shopSeg = b.getAttribute('data-seg'); shopSel = null; if (shopPrev) { shopPrev.setDecor(null); shopPrev.rebuild(); } renderShop(); }); });


  /* ---------- La Place (monde 3D partagé) ---------- */
  var plazaScene = null, plazaMe = null, plazaNames = {};
  function plazaCount() { if (plazaScene) { var n = plazaScene.count() - 1 - 1; $('plaza-count').textContent = n > 0 ? '🌍 ' + n + ' autre' + (n > 1 ? 's' : '') + ' sur la Place' : '🌍 Tu es seul·e sur la Place… pour l’instant 💚'; } }
  function plazaP(p) { return { pid: p.pid, nick: clean(p.nick, 14), code: normAv(p.av) || defaultAv(p.nick || p.pid), x: Number(p.x) || 0, z: Number(p.z) || 0 }; }
  function openPlaza() {
    if (!m3d || !window.Mika3DMod || !Mika3DMod.initPlaza) return;
    $('plaza').hidden = false;
    if (!plazaScene) {
      var host = $('plaza-stage'); host.textContent = '';
      plazaScene = Mika3DMod.initPlaza(host);
      if (!plazaScene) { $('plaza').hidden = true; return; }
      plazaScene.add({ pid: 'mika', npc: true, x: 1.5, z: 1.2, acc: accList() });
      host.addEventListener('plaza3d', function (ev) {
        var d = ev.detail || {};
        if (d.kind === 'walk' && plazaMe) { plazaScene.moveTo(plazaMe, d.x, d.z); send({ t: 'wpos', x: d.x, z: d.z }); }
        else if (d.kind === 'tap') {
          if (d.me) { plazaScene.emote(plazaMe, 'happy'); return; }
          if (d.pid === 'mika') { plazaScene.emote('mika', 'happy'); toast(uiLang() === 'en' ? '💚 Your buddy wanders around the Square' : '💚 Ton Mika se promène sur la Place'); return; }
          plazaPop(d.pid);
        }
        else if (d.kind === 'building') plazaBuilding(d.id);
      });
      Array.prototype.forEach.call(document.querySelectorAll('#plaza-emotes button'), function (b) { b.addEventListener('click', function () { plazaEmote(b.getAttribute('data-k')); }); });
    }
    plazaMe = null; send({ t: 'plaza', on: true }); plazaCount();
  }
  function plazaEmote(k) {
    if (!plazaScene || !plazaMe) return;
    plazaScene.emote(plazaMe, k); send({ t: 'emote', k: k });
    if (k === 'wave' && plazaScene.count() > 2) progressQuest('wave');
  }
  function closePlaza() {
    if (plazaScene) { send({ t: 'plaza', on: false }); plazaScene.destroy(); plazaScene = null; plazaMe = null; plazaNames = {}; }
    if ($('plaza')) $('plaza').hidden = true;
  }
  function plazaMsg(m) {
    if (!plazaScene) return;
    switch (m.t) {
      case 'plaza':
        plazaScene.reset(); plazaMe = m.me.pid;
        plazaScene.add({ pid: m.me.pid, nick: nick, code: myAv, x: m.me.x, z: m.me.z, me: true });
        (m.list || []).forEach(function (p) { var q = plazaP(p); plazaNames[q.pid] = q.nick; plazaScene.add(q); });
        plazaCount(); break;
      case 'pj': { var q = plazaP(m.p || {}); plazaNames[q.pid] = q.nick; plazaScene.add(q); plazaCount(); break; }
      case 'pl': plazaScene.remove(m.pid); plazaCount(); break;
      case 'pm': plazaScene.moveTo(m.pid, Number(m.x) || 0, Number(m.z) || 0); break;
      case 'pe': plazaScene.emote(m.pid, clean(m.k, 8)); break;
      case 'ps': plazaScene.say(m.pid, clean(m.text, 80)); break;
    }
  }

  /* ---------- Classe du Professeur Bobby ---------- */
  var BLANG = { de: { n: 'Deutsch', f: '🇩🇪', sr: 'de-DE' }, en: { n: 'English', f: '🇬🇧', sr: 'en-US' }, es: { n: 'Español', f: '🇪🇸', sr: 'es-ES' }, it: { n: 'Italiano', f: '🇮🇹', sr: 'it-IT' } };
  var BSCENES = [{ id: 'intro', t: '👋 Se présenter' }, { id: 'cafe', t: '☕ Au café' }, { id: 'free', t: '💬 Libre' }, { id: 'travel', t: '🧳 Voyage', feat: 'scen_travel' }, { id: 'job', t: '💼 Entretien', feat: 'scen_job' }];
  var BFEATS = [
    { id: 'scen_travel', label: 'Pack Voyage', e: '🧳', price: 80, d: 'Leçon : gare, hôtel, restaurant' },
    { id: 'scen_job', label: 'Pack Entretien', e: '💼', price: 120, d: 'Leçon : entretien d’embauche' },
    { id: 'pron', label: 'Prononciation+', e: '🗣️', price: 150, d: 'Mika ajoute un conseil de prononciation' },
    { id: 'book', label: 'Carnet de mots', e: '📒', price: 60, d: 'Retrouve tout ton vocabulaire' },
    { id: 'lvl_b', label: 'Niveaux B1 / B2', e: '🚀', price: 100, d: 'Des échanges plus avancés' },
    { id: 'lang_en', label: 'Anglais', e: '🇬🇧', price: 250, d: 'Bobby parle anglais' },
    { id: 'lang_es', label: 'Espagnol', e: '🇪🇸', price: 250, d: 'Bobby parle espagnol' },
    { id: 'lang_it', label: 'Italien', e: '🇮🇹', price: 250, d: 'Bobby parle italien' }
  ];
  var BOUT = [{ id: 'mortar', label: 'Toque de diplômé', e: '🎓', price: 90 }, { id: 'labcoat', label: 'Blouse de prof', e: '🥼', price: 70 }];
  function bHas(id) { return game.bown.indexOf(id) >= 0; }
  var bob = (function () {
    var d = { xp: 0, last: '', streak: 0, vocab: [], lang: 'de', lvl: 'A1', scen: 'intro', day: '', n: 0 };
    try { var j = JSON.parse(store('talkie.bob') || '{}');
      d.xp = Math.max(0, Number(j.xp) || 0); d.last = clean(j.last, 12); d.streak = Math.max(0, Number(j.streak) || 0); d.day = clean(j.day, 12); d.n = Math.max(0, Number(j.n) || 0);
      d.vocab = (Array.isArray(j.vocab) ? j.vocab : []).map(function (v) { return { w: clean(v && v.w, 50), fr: clean(v && v.fr, 50), l: clean(v && v.l, 3) }; }).filter(function (v) { return v.w; }).slice(-150);
      if (BLANG[j.lang]) d.lang = j.lang; if (/^(A1|A2|B1|B2)$/.test(j.lvl)) d.lvl = j.lvl; if (j.scen) d.scen = clean(j.scen, 10);
    } catch (e) { /* ignore */ }
    return d;
  })();
  function saveBob() { store('talkie.bob', JSON.stringify(bob)); }
  var bobThread = [], bobBusy = false, bobStage = null, bobStarted = false, bobTok = 0, bobSpeak = false;
  function bobAcc() { return ['glasses', 'bowtie'].concat(game.bobOn); }
  function bobLevel() { return Math.floor(bob.xp / 40) + 1; }
  function bobEnsureOk() {
    if (bob.lang !== 'de' && !bHas('lang_' + bob.lang)) bob.lang = 'de';
    if ((bob.lvl === 'B1' || bob.lvl === 'B2') && !bHas('lvl_b')) bob.lvl = 'A1';
    var sc = BSCENES.filter(function (x) { return x.id === bob.scen; })[0];
    if (!sc || (sc.feat && !bHas(sc.feat))) bob.scen = 'intro';
  }
  function bobRenderHead() {
    bobEnsureOk();
    var ls = $('bob-lang'); ls.textContent = '';
    Object.keys(BLANG).forEach(function (k) { var o = el('option', null, BLANG[k].f + ' ' + BLANG[k].n + (k !== 'de' && !bHas('lang_' + k) ? ' 🔒' : '')); o.value = k; if (k === bob.lang) o.selected = true; ls.appendChild(o); });
    $('bob-lvl').value = bob.lvl;
    var sc = $('bob-scenes'); sc.textContent = '';
    BSCENES.forEach(function (x) {
      var locked = x.feat && !bHas(x.feat);
      var b = el('button', (x.id === bob.scen ? 'on ' : '') + (locked ? 'lock' : ''), x.t + (locked ? ' 🔒' : '')); b.type = 'button'; b.setAttribute('data-sc', x.id);
      b.addEventListener('click', function () {
        if (locked) { toast('🔒 Disponible dans la Boutique › Bobby'); return; }
        bob.scen = x.id; saveBob(); bobRenderHead(); bobNewLesson();
      });
      sc.appendChild(b);
    });
    var lv = bobLevel(), into = bob.xp % 40;
    var p = $('bob-prog'); p.textContent = '';
    p.appendChild(el('span', null, '🎓 Niveau ' + lv));
    var bar = el('div', 'bar'); var bi = el('i'); bi.style.width = Math.round(into / 40 * 100) + '%'; bar.appendChild(bi); p.appendChild(bar);
    p.appendChild(el('span', null, '🔥 ' + (bob.streak || 0) + ' j · 📒 ' + bob.vocab.length));
  }
  function bobLog(node) { var l = $('bob-log'); l.appendChild(node); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }
  function bobSpeakText(t) {
    try {
      if (!window.speechSynthesis) return;
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(t); u.lang = BLANG[bob.lang].sr; u.rate = bob.lvl === 'A1' ? 0.85 : 0.95; u.pitch = 0.9;
      var vs = speechSynthesis.getVoices().filter(function (v) { return v.lang && v.lang.indexOf(bob.lang) === 0; });
      if (vs.length) u.voice = vs[0];
      u.onstart = function () { if (bobStage) bobStage.bobbyListen(false); };
      speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
  }
  function bobAddBobby(r) {
    var m = el('div', 'bm b', r.bobby);
    if (r.fr) { var tr = el('small', null, (uiLang() === 'en' ? '🇬🇧 ' : '🇫🇷 ') + r.fr); tr.hidden = true; m.appendChild(tr);
      var tools = el('div', 'tools'); var b1 = el('button', null, uiLang() === 'en' ? '🔊 Listen' : '🔊 Écouter'); b1.type = 'button'; b1.addEventListener('click', function () { bobSpeakText(r.bobby); });
      var b2 = el('button', null, uiLang() === 'en' ? '🌐 Translate' : '🇫🇷 Traduire'); b2.type = 'button'; b2.addEventListener('click', function () { tr.hidden = !tr.hidden; });
      tools.appendChild(b1); tools.appendChild(b2); m.appendChild(tools); }
    bobLog(m);
  }
  function bobAddMika(r, start) {
    if (!r.say && !r.corr) return;
    var c = el('div', 'mc' + (r.corr || start ? '' : ' ok'));
    c.appendChild(el('b', 'who', '🌿 Mika'));
    if (r.corr) {
      var line = el('div'); var d = document.createElement('del'); d.textContent = r.corr.orig; var i = document.createElement('ins'); i.textContent = r.corr.fixed;
      line.appendChild(d); line.appendChild(document.createTextNode(' → ')); line.appendChild(i); c.appendChild(line);
      if (r.corr.why) c.appendChild(el('div', 'why', r.corr.why));
      c.appendChild(el('span', 'ktag', '✏️ ' + r.corr.kind));
    } else if (r.say) c.appendChild(el('div', null, r.say));
    if (r.corr && r.say) c.insertBefore(el('div', null, r.say), c.children[1]);
    bobLog(c);
  }
  function bobGain(r) {
    var gain = 2 + (r.ok ? 3 : 0);
    bob.xp += gain;
    var d = todayKey();
    if (bob.day !== d) { bob.day = d; bob.n = 0; var y = new Date(Date.now() - 86400000).toLocaleDateString('sv-SE'); bob.streak = bob.last === y ? bob.streak + 1 : 1; bob.last = d; }
    bob.n++;
    if (bob.n === 4) { earn(5); toast('+5 🌸 Bravo, tu travailles ton ' + BLANG[bob.lang].n + ' !'); }
    if (bob.n === 3) progressQuest('bobby');
    (r.vocab || []).forEach(function (v) { if (!bob.vocab.some(function (x) { return x.w.toLowerCase() === v.w.toLowerCase(); })) bob.vocab.push({ w: v.w, fr: v.fr, l: bob.lang }); });
    bob.vocab = bob.vocab.slice(-150);
    saveBob(); bobRenderHead();
  }
  function bobApply(r, start) {
    bobBusy = false; $('bob-send').disabled = !$('bob-in').value.trim();
    var care = !!r.care;
    if (r.corr || r.say) { bobAddMika(r, start); if (bobStage && r.say) bobStage.mikaSay(r.say, r.corr ? 'worried' : (r.ok ? 'proud' : 'happy')); }
    setTimeout(function () {
      bobThread.push({ r: 'b', t: r.bobby });
      bobAddBobby(r);
      if (bobStage) { bobStage.bobbySay(r.bobby, r.e); }
      if (bobSpeak && !care) bobSpeakText(r.bobby);
    }, care ? 100 : 900);
    if (bobStage) {
      if (r.corr) bobStage.board([{ t: '✗ ' + r.corr.orig, c: '#ffb3c1', s: 26 }, { t: '✓ ' + r.corr.fixed, c: '#bdf3dc', s: 34 }]);
      else if (r.vocab && r.vocab.length) bobStage.board([{ t: r.vocab[0].w, c: '#fff6c2', s: 46 }, { t: r.vocab[0].fr, c: '#cfe9ff', s: 28 }]);
    }
    if (!care && !start) bobGain(r);
    var ch = $('bob-chips'); ch.textContent = '';
    (r.chips || []).forEach(function (t) { var b = el('button', null, t); b.type = 'button'; b.addEventListener('click', function () { bobSend(t, false); }); ch.appendChild(b); });
    if (r.degraded) $('bob-note').textContent = 'Mode hors-ligne : Bobby suit un petit script et Mika ne peut pas corriger pour l’instant.';
  }
  function bobCall(kind, spoken) {
    var tok = ++bobTok; bobBusy = true; $('bob-send').disabled = true;
    if (bobStage) bobStage.thinking(true);
    var body = { kind: kind, ui: uiLang(), lang: bob.lang, level: bob.lvl, scen: bob.scen, name: nick, pron: bHas('pron'), spoken: !!spoken, messages: bobThread };
    var ctrl = window.AbortController ? new AbortController() : null; var to = setTimeout(function () { if (ctrl) ctrl.abort(); }, 30000);
    fetch('/api/bobby', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body), signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { if (!r.ok) throw new Error('http'); return r.json(); })
      .catch(function () { return { bobby: 'Oh là là… ich habe ein kleines Problem. Versuch es gleich noch einmal!', fr: 'Petit souci de mon côté, réessaie dans un instant !', e: 'worried', corr: null, ok: true, vocab: [], chips: [], say: 'Bobby a un petit souci de connexion 🥹', degraded: true }; })
      .then(function (r) { clearTimeout(to); if (tok !== bobTok) return; bobApply(r, kind === 'start'); });
  }
  function bobSend(text, spoken) {
    text = clean(text, 300); if (!text || bobBusy) return;
    $('bob-in').value = ''; $('bob-chips').textContent = '';
    bobThread.push({ r: 'u', t: text });
    bobLog(el('div', 'bm u', text));
    if (bobStage) bobStage.userSay(text);
    bobCall('reply', spoken);
  }
  function bobNewLesson() {
    bobTok++; bobBusy = false; bobThread = []; $('bob-log').textContent = ''; $('bob-chips').textContent = '';
    $('bob-note').textContent = 'Bobby parle uniquement dans la langue choisie. Mika corrige tes phrases et t’explique en français. Ce sont des IA : elles peuvent se tromper.';
    if (bobStage) bobStage.board([]);
    bobCall('start');
  }
  function openBobby() {
    bobRenderHead();
    var host = $('bob-stage');
    if (!bobStage && m3d && window.Mika3DMod && Mika3DMod.initClass) { host.textContent = ''; bobStage = Mika3DMod.initClass(host, { code: myAv, mikaAcc: accList(), bobAcc: bobAcc() }); }
    if (!bobStage && !host.firstChild) host.appendChild(el('div', 'bob-2d', '🐻🎓'));
    if (bobStage) { bobStage.setMikaAcc(accList()); bobStage.setBobAcc(bobAcc()); }
    if (!bobStarted) { bobStarted = true; bobNewLesson(); }
  }
  function closeBobby() { if (bobStage) { bobStage.destroy(); bobStage = null; } try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { /* ignore */ } }
  $('bob-lang').addEventListener('change', function () {
    var v = $('bob-lang').value;
    if (v !== 'de' && !bHas('lang_' + v)) { toast('🔒 Cette langue s’achète dans la Boutique › Bobby'); bobRenderHead(); return; }
    bob.lang = v; saveBob(); bobNewLesson();
  });
  $('bob-lvl').addEventListener('change', function () {
    var v = $('bob-lvl').value;
    if ((v === 'B1' || v === 'B2') && !bHas('lvl_b')) { toast('🔒 Niveaux B1/B2 : Boutique › Bobby'); $('bob-lvl').value = bob.lvl; return; }
    bob.lvl = v; saveBob(); bobNewLesson();
  });
  $('bob-in').addEventListener('input', function () { $('bob-send').disabled = bobBusy || !$('bob-in').value.trim(); });
  $('bob-form').addEventListener('submit', function (e) { e.preventDefault(); bobSend($('bob-in').value, false); });
  $('bob-new').addEventListener('click', bobNewLesson);
  $('bob-book').addEventListener('click', function () {
    if (!bHas('book')) { toast('🔒 Le carnet s’achète dans la Boutique › Bobby (' + bob.vocab.length + ' mot' + (bob.vocab.length > 1 ? 's' : '') + ' t’attendent)'); return; }
    var c = el('div', 'mc'); c.appendChild(el('b', 'who', '📒 Ton carnet (' + bob.vocab.length + ')'));
    var rows = bob.vocab.slice(-12).reverse();
    c.appendChild(el('div', null, rows.length ? rows.map(function (v) { return (BLANG[v.l] ? BLANG[v.l].f + ' ' : '') + v.w + ' = ' + v.fr; }).join(' · ') : 'Vide pour l’instant : parle avec Bobby !'));
    bobLog(c);
  });
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition, bobRec = null, bobRecTimer = 0;
  function bobMicStop(abort) {
    clearTimeout(bobRecTimer);
    var r = bobRec; bobRec = null;
    try { $('bob-mic').classList.remove('rec'); } catch (e) { /* ignore */ }
    try { if (bobStage && bobStage.bobbyListen) bobStage.bobbyListen(false); } catch (e) { /* ignore */ }
    if (r) { r.onresult = r.onerror = r.onend = null; try { abort ? r.abort() : r.stop(); } catch (e) { /* ignore */ } }
  }
  if (!SR) { try { $('bob-mic').style.display = 'none'; } catch (e) { /* ignore */ } }
  $('bob-mic').addEventListener('click', function () {
    if (!SR) { toast('Ton navigateur ne gère pas la dictée : utilise le micro de ton clavier 🎤'); return; }
    if (bobRec) { var done = bobRec; bobRec._fin = true; try { done.stop(); } catch (e) { bobMicStop(true); } return; }
    if (typeof bobBusy !== 'undefined' && bobBusy) { toast('Bobby réfléchit… un instant 🧸'); return; }
    try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { /* ignore */ }
    try { if (voiceEl && !voiceEl.paused) voiceEl.pause(); } catch (e) { /* ignore */ }
    var rec;
    try { rec = new SR(); } catch (e) { toast('La dictée n’est pas disponible ici 🎤'); return; }
    bobRec = rec;
    var final = '', sent = false;
    try { rec.lang = BLANG[bob.lang].sr; rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1; } catch (e) { /* ignore */ }
    $('bob-mic').classList.add('rec');
    try { if (bobStage && bobStage.bobbyListen) bobStage.bobbyListen(true); } catch (e) { /* ignore */ }
    rec.onresult = function (ev) {
      try { var t = ''; for (var i = 0; i < ev.results.length; i++) t += ev.results[i][0].transcript; final = t; $('bob-in').value = t; $('bob-send').disabled = !t.trim(); } catch (e) { /* ignore */ }
    };
    rec.onerror = function (ev) {
      var er = ev && ev.error;
      if (er === 'not-allowed' || er === 'service-not-allowed') toast('Autorise le micro pour parler à Bobby 🎤 (Réglages du navigateur)');
      else if (er === 'no-speech') toast('Je n’ai rien entendu… réessaie 🎤');
      else if (er !== 'aborted') toast('Le micro a eu un souci, tu peux écrire à la place ✍️');
      bobMicStop(true);
    };
    rec.onend = function () {
      var t = final; bobMicStop(true);
      if (t.trim() && !sent) { sent = true; bobSpeak = true; try { bobSend(t, true); } catch (e) { /* ignore */ } }
    };
    bobRecTimer = setTimeout(function () { if (bobRec === rec) { try { rec.stop(); } catch (e) { bobMicStop(true); } } }, 12000);
    try { rec.start(); } catch (e) { bobMicStop(true); toast('Le micro n’a pas pu démarrer 🎤'); }
  });
  document.addEventListener('visibilitychange', function () { if (document.hidden && bobRec) bobMicStop(true); });
  function bobShopAction(it) {
    if (!it.own) {
      if (game.petals < it.price) { toast('Il te manque ' + (it.price - game.petals) + ' 🌸 : prends soin de ton Mika et papote avec Bobby !'); return; }
      game.petals -= it.price;
      if (it.kind === 'bout') { game.bown.push(it.id); game.bobOn.push(it.id); } else game.bown.push(it.id);
      saveGame(); toast('Acheté ! ' + it.label + ' 🎉'); shopSel = null; if (shopPrev) { shopPrev.setDecor(null); shopPrev.rebuild(); } renderShop(); return;
    }
    if (it.kind === 'bout') { var k = game.bobOn.indexOf(it.id); if (k >= 0) game.bobOn.splice(k, 1); else game.bobOn.push(it.id); saveGame(); shopSel = null; if (shopPrev) { shopPrev.setDecor(null); shopPrev.rebuild(); } renderShop(); return; }
    setTab('bobby');
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
  $('btn-me-shop').addEventListener('click', function () { shopSeg = 'bobby'; setTab('boutique'); });

  /* ---------- Scène d'avatars dans la conversation ---------- */
  var stageNodes = {};
  function stageMembers() {
    if (!room) return [];
    return room.members.filter(function (p) { return p.online || p.pid === myPid; });
  }
  var stage3d = null, stageWired = false;
  function ensureStage3d() {
    if (stage3d || !m3d || !window.Mika3DMod || !Mika3DMod.initStage) return;
    var box = $('perch');
    box.classList.add('is3d');
    try { stage3d = Mika3DMod.initStage(box, accList()); } catch (e) { stage3d = null; }
    if (!stage3d) { box.classList.remove('is3d'); return; }
    if (!stageWired) {
      stageWired = true;
      box.addEventListener('mika3d', function () {
        var m = $('msg');
        if (!m.disabled) { if (!m.value) { m.value = 'Mika, '; m.dispatchEvent(new Event('input')); } m.focus(); }
      });
    }
  }
  function destroyStage3d() { if (stage3d) { try { stage3d.destroy(); } catch (e) { /* ignore */ } stage3d = null; } $('perch').classList.remove('is3d'); }
  function validAv(p) { return normAv(p.av) || defaultAv(p.nick); }
  function renderStage() {
    ensureStage3d();
    if (stage3d) {
      stage3d.setMembers(stageMembers().map(function (p) { return { id: p.pid, code: p.pid === myPid ? myAv : validAv(p), nick: clean(p.nick, 14), me: p.pid === myPid }; }));
      stage3d.setMikaAcc(accList());
      return;
    }
    renderStageLegacy();
  }
  function renderStageLegacy() {
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
    if (stage3d) { var tx = chatClean(m.text, 120) || (m.gif ? 'GIF 🎞️' : ''); if (!tx) return; if (m.ai) { stage3d.mikaSay(tx); } else stage3d.say(m.pid, tx); return; }
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


  /* ---------- Mika en 3D : la chambre (si l'appareil sait faire de la 3D, sinon on garde le 2D) ---------- */
  var m3d = null, m3dPrev = { emo: '', jump: false, talk: false, acc: '' };
  var ROOM_LINES = {
    lamp: ['Clic ! La lumière douce, c’est mon petit câlin du soir 💡', 'Oh, tu règles mon ambiance ? Merci, c’est parfait ✨'],
    plant: ['Ma plante s’appelle Basilic. Elle ne dit rien, mais je sens qu’elle m’aime 🌱', 'Chut, Basilic fait sa sieste 🌿'],
    fries: ['Hé ! C’est ma peluche frites, on ne la mange pas ! 🍟', 'Mon trésor… la seule frite qui ne refroidit jamais 🥹']
  };
  function syncMika3d() {
    if (!m3d) return;
    var c = $('mika-av').classList, emo = 'neutral';
    ['happy', 'wow', 'sleep', 'love', 'sad', 'worry', 'proud', 'shy', 'angry'].forEach(function (k) { if (c.contains('st-' + k)) emo = k; });
    if (c.contains('shy') && emo === 'neutral') emo = 'shy';
    if (emo !== m3dPrev.emo) { m3d.setEmotion(emo); m3dPrev.emo = emo; }
    var j = c.contains('jump'); if (j && !m3dPrev.jump) m3d.hop(4.4); m3dPrev.jump = j;
    var t = c.contains('talking'); if (t !== m3dPrev.talk) { m3d.talking(t); m3dPrev.talk = t; }
    var svg = $('mika-av').querySelector('.mk'), acc = [];
    if (svg) WARD.forEach(function (w) { if (svg.classList.contains('has-' + w.id)) acc.push(w.id); });
    var key = acc.join(',');
    if (key !== m3dPrev.acc) { m3d.setAccessories(acc); m3dPrev.acc = key; }
    if (m3d.setDecor) m3d.setDecor(game.decorOn);
  }
  function init3d() {
    if (!window.Mika3DMod || /[?&]no3d/.test(location.search)) return;
    try { m3d = Mika3DMod.init($('mika-stage'), { preserve: /[?&]shot/.test(location.search), look: Mika3DMod.avatarOpts(myAv) }); } catch (e) { m3d = null; }
    if (!m3d) return;
    document.body.classList.add('has3d');
    new MutationObserver(syncMika3d).observe($('mika-av'), { attributes: true, childList: true, subtree: true, attributeFilter: ['class'] });
    syncMika3d();
    $('mika-stage').addEventListener('mika3d', function (ev) {
      var n = ev.detail && ev.detail.name;
      dir.engaged = true; bumpIdle();
      if (n === 'done-nap') { if (napDone) { var f = napDone; napDone = null; f(); } return; }
      if (n && n.indexOf('done-') === 0) { var k2 = n.slice(5); if (jobDone[k2]) { var f2 = jobDone[k2]; jobDone[k2] = null; f2(); } return; }
      if (n === 'mika') { $('mika-av').click(); return; }
      if (n === 'walk') return;
      if (OBJ[n]) { OBJ[n](ev.detail); return; }
      if (ROOM_LINES[n]) { mood('happy', 2200); mikaSay(pick(ROOM_LINES[n]), false, false); }
    });
    var busyT = null;
    $('cmp-in').addEventListener('input', function () { m3d.busy(true); clearTimeout(busyT); busyT = setTimeout(function () { m3d.busy(false); }, 4000); });
  }

  /* ---------- v18 · iPhone (zoom), clavier, langue, amis, visites, tutoriel ---------- */
  var I = window.I18N || { lang: 'fr', t: function (x) { return x; }, set: function () {}, chosen: function () { return true; } };
  (function antiZoom() {
    ['gesturestart', 'gesturechange', 'gestureend'].forEach(function (ev) { document.addEventListener(ev, function (e) { e.preventDefault(); }, { passive: false }); });
    document.addEventListener('touchmove', function (e) { if (e.touches && e.touches.length > 1) e.preventDefault(); }, { passive: false });
    var lt = { t: 0, x: 0, y: 0 };
    document.addEventListener('touchend', function (e) {
      var tg = e.target && e.target.tagName, c = e.changedTouches && e.changedTouches[0]; if (!c) return;
      var now = Date.now(), near = Math.abs(c.clientX - lt.x) < 30 && Math.abs(c.clientY - lt.y) < 30;
      if (now - lt.t < 320 && near && !/^(INPUT|TEXTAREA|SELECT)$/.test(tg || '')) e.preventDefault();
      lt = { t: now, x: c.clientX, y: c.clientY };
    }, { passive: false });
    document.addEventListener('dblclick', function (e) { if (!/^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || '')) e.preventDefault(); });
  })();
  (function keyboard() {
    var vv = window.visualViewport, isIn = function (n) { return n && /^(INPUT|TEXTAREA)$/.test(n.tagName); };
    function vh() { document.documentElement.style.setProperty('--vvh', (vv ? vv.height : window.innerHeight) + 'px'); }
    vh();
    if (vv) { vv.addEventListener('resize', function () { vh(); document.body.classList.toggle('kb', window.innerHeight - vv.height > 120 || isIn(document.activeElement)); if (!isIn(document.activeElement)) window.scrollTo(0, 0); }); vv.addEventListener('scroll', function () { if ($('visit') && !$('visit').hidden) window.scrollTo(0, 0); }); }
    document.addEventListener('focusin', function (e) {
      if (!isIn(e.target)) return;
      document.body.classList.add('kb');
      setTimeout(function () { try { if (e.target.id === 'cmp-in') window.scrollTo({ top: 0, behavior: 'smooth' }); else e.target.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (er) { /* ignore */ } }, 320);
    });
    document.addEventListener('focusout', function () { setTimeout(function () { if (!isIn(document.activeElement)) { document.body.classList.remove('kb'); vh(); } }, 150); });
  })();

  /* langue de l'interface */
  function uiLang() { return I.lang === 'en' ? 'en' : 'fr'; }
  function syncLangButtons() { Array.prototype.forEach.call(document.querySelectorAll('.js-lang'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-l') === uiLang())); }); }
  Array.prototype.forEach.call(document.querySelectorAll('.js-lang'), function (b) { b.addEventListener('click', function () { I.set(b.getAttribute('data-l')); syncLangButtons(); renderQuests(); if (curTab === 'boutique') renderShop(); if (curTab === 'bobby') bobRenderHead(); renderNeeds(); }); });
  syncLangButtons();

  /* amis (stockés sur le téléphone) et compteur du Monde */
  var friends = (function () { try { var a = JSON.parse(store('talkie.friends') || '[]'); return (Array.isArray(a) ? a : []).filter(function (f) { return f && /^[A-Za-z0-9_-]{1,12}$/.test(f.pid); }).map(function (f) { return { pid: f.pid, nick: clean(f.nick, 14) }; }).slice(0, 100); } catch (e) { return []; } })();
  function saveFriends() { store('talkie.friends', JSON.stringify(friends)); send({ t: 'friends', list: friends.map(function (f) { return f.pid; }) }); }
  function isFriend(pid) { return friends.some(function (f) { return f.pid === pid; }); }
  function toggleFriend(pid, name) {
    if (isFriend(pid)) friends = friends.filter(function (f) { return f.pid !== pid; }); else friends.push({ pid: pid, nick: clean(name, 14) });
    saveFriends(); toast(isFriend(pid) ? '💛 ' + clean(name, 14) + (uiLang() === 'en' ? ' is now a friend' : ' est maintenant ton ami·e') : (uiLang() === 'en' ? 'Removed from friends' : 'Retiré de tes amis'));
  }
  var social = { plaza: 0, friends: [], seen: {} };
  function renderSocial(d) {
    social.plaza = Math.max(0, Number(d.plaza) || 0); var fr = Array.isArray(d.friends) ? d.friends : [];
    var btn = document.querySelector('#tabbar [data-tab=salon]'), bd = btn && btn.querySelector('.tbadge');
    if (btn) {
      var n = social.plaza - (plazaScene ? 1 : 0);
      if (!bd && (n > 0 || fr.length)) { bd = el('span', 'tbadge'); btn.appendChild(bd); }
      if (bd) { bd.hidden = !(n > 0 || fr.length); bd.textContent = fr.length ? '💛' + (n > 0 ? n : '') : String(n); bd.classList.toggle('fr', !!fr.length); }
    }
    fr.forEach(function (f) { if (!social.seen[f.pid] && curTab !== 'monde') toast('💛 ' + clean(f.nick, 14) + (uiLang() === 'en' ? (f.plaza ? ' is on the Square' : ' is online') : (f.plaza ? ' est sur la Place' : ' est en ligne'))); social.seen[f.pid] = 1; });
    Object.keys(social.seen).forEach(function (k) { if (!fr.some(function (f) { return f.pid === k; })) delete social.seen[k]; });
    social.friends = fr;
    var bar = $('friends-bar');
    if (!bar && $('plaza')) { bar = el('div', 'friends-bar'); bar.id = 'friends-bar'; $('plaza').appendChild(bar); }
    if (bar) { bar.textContent = ''; fr.forEach(function (f) { var b = el('button', null, '💛 ' + clean(f.nick, 14) + (uiLang() === 'en' ? (f.plaza ? ' is on the Square' : ' is online') : (f.plaza ? ' est sur la Place' : ' est en ligne'))); b.type = 'button'; b.addEventListener('click', function () { if (curTab !== 'salon') setTab('salon'); }); bar.appendChild(b); }); }
    plazaCount();
  }

  /* fenêtre « quelqu'un sur la Place » : saluer, inviter, ami */
  function plazaPop(pid) {
    var host = $('plaza-stage'), old = host.querySelector('.plaza-pop'); if (old) old.remove();
    var nm = plazaNames[pid] || '?', pop = el('div', 'plaza-pop'); pop.appendChild(el('b', null, nm));
    function b(txt, cls, fn) { var x = el('button', cls || null, txt); x.type = 'button'; x.addEventListener('click', function () { fn(); pop.remove(); }); pop.appendChild(x); }
    b('👋 Saluer', null, function () { plazaEmote('wave'); toast('👋 ' + (uiLang() === 'en' ? 'You said hi to ' : 'Tu as salué ') + nm); });
    b('🏠 Inviter dans ma chambre', 'pr', function () { send({ t: 'hinv', to: pid, decor: usableDecor(game.decorOn), acc: accList() }); });
    b(isFriend(pid) ? '💛 Ami·e' : '💛 Ajouter en ami', null, function () { toggleFriend(pid, nm); });
    host.appendChild(pop); setTimeout(function () { if (pop.parentNode) pop.remove(); }, 8000);
  }
  function usableDecor(l) { var ok = (window.Mika3DMod && Mika3DMod.DECOR_IDS) || []; return (l || []).filter(function (x) { return ok.indexOf(x) >= 0; }); }
  function plazaSay(text) {
    text = clean(text, 80); if (!text || !plazaScene || !plazaMe) return;
    plazaScene.say(plazaMe, text); send({ t: 'psay', text: text });
  }
  $('plaza-form').addEventListener('submit', function (ev) {
    ev.preventDefault(); var i = $('plaza-say'); plazaSay(i.value); i.value = '';
  });
  function plazaBuilding(id) {
    if (id === 'home') { mikaSay('Retour à la maison ! 🏠', false, 'happy'); setTab('chambre'); }
    else if (id === 'bakery' || id === 'thrift' || id === 'deco' || id === 'karaoke') openStore(id);
    else if (id === 'park') {
      if (plazaScene) plazaScene.rideWheel();
      var d = todayKey();
      if (game.park !== d) { game.park = d; earn(5); saveGame(); toast(uiLang() === 'en' ? '🎡 Wheeee! +5 🌸 for your first ride today' : '🎡 Wouiii ! +5 🌸 pour ton premier tour du jour'); sfx.join(); }
      else toast(uiLang() === 'en' ? '🎡 Wheeee! Come back tomorrow for petals' : '🎡 Wouiii ! Reviens demain pour des pétales');
    }
  }

  /* ---------- Magasins en 3D : boulangerie, friperie, déco, karaoké ---------- */
  var STORE = {
    bakery: { t: '🥐 Boulangerie', hi: 'Bonjour ! Choisis une douceur pour ton Mika 🥐' },
    thrift: { t: '👗 Friperie', hi: 'Bienvenue ! Essaie ce que tu veux, le miroir est à toi ✨' },
    deco: { t: '🪴 Déco', hi: 'Pose-toi, regarde : tout peut aller dans ta chambre 🏡' },
    karaoke: { t: '🎤 Karaoké', hi: 'Choisis une chanson, on chante ensemble ! 🎶' }
  };
  var BAKERY_EXTRA = [
    { id: 'croissant', e: '🥐', t: 'Croissant', d: 'Beurré et doré', price: 12, gain: 26 },
    { id: 'macaron', e: '🍬', t: 'Macaron', d: 'Rose, bien sûr', price: 18, gain: 28 },
    { id: 'gateau', e: '🍰', t: 'Gâteau', d: 'Une part de rêve', price: 35, gain: 42 }
  ];
  var SONGS = [
    { id: 'jacques', t: 'Frère Jacques', e: '🔔', bpm: 100, lines: [
      ['Frère Jacques, frère Jacques,', [[0, 1], [2, 1], [4, 1], [0, 1], [0, 1], [2, 1], [4, 1], [0, 1]]],
      ['Dormez-vous ? Dormez-vous ?', [[4, 1], [5, 1], [7, 2], [4, 1], [5, 1], [7, 2]]],
      ['Sonnez les matines, sonnez les matines,', [[7, .5], [9, .5], [7, .5], [5, .5], [4, 1], [0, 1], [7, .5], [9, .5], [7, .5], [5, .5], [4, 1], [0, 1]]],
      ['Ding, dang, dong. Ding, dang, dong.', [[0, 1], [-5, 1], [0, 2], [0, 1], [-5, 1], [0, 2]]] ] },
    { id: 'lune', t: 'Au clair de la lune', e: '🌙', bpm: 88, lines: [
      ['Au clair de la lune, mon ami Pierrot,', [[0, 1], [0, 1], [0, 1], [2, 1], [4, 2], [2, 2]]],
      ['Prête-moi ta plume pour écrire un mot.', [[0, 1], [4, 1], [2, 1], [2, 1], [0, 3]]],
      ['Ma chandelle est morte, je n’ai plus de feu,', [[0, 1], [0, 1], [0, 1], [2, 1], [4, 2], [2, 2]]],
      ['Ouvre-moi ta porte, pour l’amour de Dieu.', [[0, 1], [4, 1], [2, 1], [2, 1], [0, 3]]] ] },
    { id: 'anniv', t: 'Joyeux anniversaire', e: '🎂', bpm: 96, lines: [
      ['Joyeux anniversaire,', [[7, .75], [7, .25], [9, 1], [7, 1], [12, 1], [11, 2]]],
      ['Joyeux anniversaire,', [[7, .75], [7, .25], [9, 1], [7, 1], [14, 1], [12, 2]]],
      ['Joyeux anniversaire, mon ami·e,', [[7, .75], [7, .25], [19, 1], [16, 1], [12, 1], [11, 1], [9, 2]]],
      ['Joyeux anniversaire !', [[17, .75], [17, .25], [16, 1], [12, 1], [14, 1], [12, 3]]] ] },
    { id: 'vous', t: 'Ah ! vous dirai-je, maman', e: '⭐', bpm: 104, lines: [
      ['Ah ! vous dirai-je, maman,', [[0, 1], [0, 1], [7, 1], [7, 1], [9, 1], [9, 1], [7, 2]]],
      ['Ce qui cause mon tourment ?', [[5, 1], [5, 1], [4, 1], [4, 1], [2, 1], [2, 1], [0, 2]]],
      ['Papa veut que je raisonne,', [[7, 1], [7, 1], [5, 1], [5, 1], [4, 1], [4, 1], [2, 2]]],
      ['Comme une grande personne.', [[7, 1], [7, 1], [5, 1], [5, 1], [4, 1], [4, 1], [2, 2]]],
      ['Moi, je dis que les bonbons', [[0, 1], [0, 1], [7, 1], [7, 1], [9, 1], [9, 1], [7, 2]]],
      ['Valent mieux que les raisons !', [[5, 1], [5, 1], [4, 1], [4, 1], [2, 1], [2, 1], [0, 2]]] ] },
    { id: 'jingle', t: 'Jingle Bells', e: '🛷', bpm: 130, lines: [
      ['Jingle bells, jingle bells,', [[4, 1], [4, 1], [4, 2], [4, 1], [4, 1], [4, 2]]],
      ['Jingle all the way !', [[4, 1], [7, 1], [0, 1.5], [2, .5], [4, 3]]],
      ['Oh what fun it is to ride', [[5, 1], [5, 1], [5, 1.5], [5, .5], [5, 1], [4, 1], [4, 1], [4, .5], [4, .5]]],
      ['In a one-horse open sleigh, hey !', [[4, 1], [2, 1], [2, 1], [4, 1], [2, 2], [7, 2]]] ] },
    { id: 'joie', t: 'Hymne à la joie', e: '🎻', bpm: 108, lines: [
      ['La joie fait chanter le monde,', [[4, 1], [4, 1], [5, 1], [7, 1], [7, 1], [5, 1], [4, 1], [2, 1]]],
      ['Chante avec moi, chante !', [[0, 1], [0, 1], [2, 1], [4, 1], [4, 1.5], [2, .5], [2, 2]]],
      ['La joie fait chanter le monde,', [[4, 1], [4, 1], [5, 1], [7, 1], [7, 1], [5, 1], [4, 1], [2, 1]]],
      ['Tous ensemble, chantons !', [[0, 1], [2, 1], [4, 1], [2, 1], [0, 1.5], [0, .5], [0, 2]]] ] },
    { id: 'kawaii', t: 'Kawaii Girl', e: '💖', premium: '0,99 €' },
    { id: 'sakura', t: 'Sakura Night', e: '🌸', premium: '0,99 €' },
    { id: 'boba', t: 'Boba Dreams', e: '🧋', premium: '0,99 €' }
  ];
  var st = { theme: null, scene: null, sel: null, singing: false, timer: 0, srcs: [] };
  function storeItems() {
    var th = st.theme;
    if (th === 'bakery') return FOODS.concat(BAKERY_EXTRA).map(function (f) { return { kind: 'food', id: f.id, label: f.t, e: f.e, d: f.d, price: f.price, gain: f.gain, own: false }; });
    if (th === 'thrift') { shopSeg = 'outfit'; return items().filter(function (i) { return i.kind === 'outfit'; }); }
    if (th === 'deco') { shopSeg = 'decor'; return items(); }
    return SONGS.map(function (g) { return { kind: 'song', id: g.id, label: g.t, e: g.e, premium: g.premium, own: !g.premium, song: g }; });
  }
  function storeMsg(t) { $('store-msg').textContent = t; }
  function renderStore() {
    $('store-pet').textContent = '🌸 ' + game.petals;
    var list = $('store-list'); list.textContent = '';
    storeItems().forEach(function (it) {
      var b = el('button', (st.sel && st.sel.id === it.id ? 'sel ' : '') + (it.own || it.kind === 'food' ? '' : 'locked')); b.type = 'button';
      if (it.kind === 'outfit') { var img = (m3d && window.Mika3DMod) ? Mika3DMod.mikaPng(it.id) : ''; if (img) { var im = el('img'); im.alt = ''; im.src = img; b.appendChild(im); } else b.appendChild(el('span', 'em', '👗')); }
      else b.appendChild(el('span', 'em', it.e));
      b.appendChild(el('b', null, it.label.replace(/^Bobby : /, '')));
      var sub = it.premium ? '💎 ' + it.premium : it.kind === 'song' ? 'Gratuit' : it.kind === 'food' ? (it.price ? '🌸 ' + it.price : 'Gratuit') : it.own ? (it.on ? 'Porté' : 'À toi') : '🌸 ' + it.price;
      b.appendChild(el('small', null, sub));
      b.addEventListener('click', function () { storePick(it); });
      list.appendChild(b);
    });
    renderStoreAct();
  }
  function renderStoreAct() {
    var box = $('store-act'); box.textContent = '';
    var it = st.sel; if (!it) return;
    var lab;
    if (it.kind === 'song') lab = it.premium ? '💎 Bientôt' : (st.singing ? '⏹ Arrêter' : '🎤 Chanter');
    else if (it.kind === 'food') lab = it.price ? 'Offrir · 🌸 ' + it.price : 'Offrir (gratuit)';
    else lab = it.premium ? '💎 Bientôt' : it.own ? (it.on ? 'Retirer' : (it.kind === 'decor' ? 'Poser dans ma chambre' : 'Porter')) : 'Acheter · 🌸 ' + it.price;
    var b = el('button', 'primary', lab); b.type = 'button'; b.addEventListener('click', function () { storeDo(it); }); box.appendChild(b);
  }
  function storePick(it) {
    st.sel = it;
    if (it.kind === 'outfit' || it.kind === 'decor') { shopSel = it; if (st.scene) { st.scene.setItem(it.kind, it.kind === 'decor' ? it.id : null); st.scene.rebuild(); } storeMsg(it.label + (it.own ? (it.on ? ' · il le porte' : ' · dans ton armoire') : ' · 🌸 ' + it.price)); }
    else if (it.kind === 'food') { storeMsg(it.label + ' : ' + it.d); if (st.scene) st.scene.emote('happy'); }
    else storeMsg(it.premium ? it.label + ' · chanson originale, bientôt 💎' : it.label);
    renderStore();
  }
  function storeDo(it) {
    if (it.premium) { toast('💎 Bientôt disponible !'); return; }
    if (it.kind === 'song') { if (st.singing) stopSong(); else playSong(it.song); return; }
    if (it.kind === 'food') {
      decayCare();
      if (care.h >= 96) { storeMsg('Mika est tout rond, il n’a plus de place ! 🥹'); if (st.scene) st.scene.emote('shy'); return; }
      if (game.petals < it.price) { storeMsg('Il te manque ' + (it.price - game.petals) + ' 🌸 : l’onigiri est gratuit !'); return; }
      game.petals -= it.price; saveGame(); renderPetals(); bump('h', it.gain); progressQuest('feed');
      if (st.scene) { st.scene.emote('love'); }
      storeMsg(pick(['Miam ! ' + it.e + ' Merci, c’est délicieux 🥹', 'Hmmm ' + it.e + ' tu prends tellement soin de moi 💚', 'Itadakimasu ! ' + it.e]));
      renderStore(); return;
    }
    var had = game.petals, wasOwn = it.own;
    shopAction(it);
    st.sel = null; shopSel = null;
    if (st.scene) { st.scene.setItem(null, null); st.scene.rebuild(); }
    storeMsg(!wasOwn && game.petals < had ? 'Acheté ! ' + it.label + ' 🎉' : wasOwn ? 'C’est fait ✨' : storeMsg.t || '');
    renderStore();
  }
  function openStore(theme) {
    if (!m3d || !window.Mika3DMod || !Mika3DMod.initInterior) { toast(uiLang() === 'en' ? 'The 3D shops need a more recent phone.' : 'Les magasins 3D demandent un téléphone plus récent.'); return; }
    st.theme = theme; st.sel = null; shopSel = null;
    $('store').hidden = false; $('store-t').textContent = STORE[theme].t; storeMsg(STORE[theme].hi);
    var host = $('store-stage'); host.textContent = '';
    st.scene = Mika3DMod.initInterior(host, theme, function () { return theme === 'thrift' ? shopLook() : Mika3DMod.avatarOpts(myAv); });
    if (st.scene && theme === 'bakery') { /* le gâteau du jour */ }
    if (!st.scene) { $('store').hidden = true; toast('😢'); return; }
    if (theme !== 'thrift') { /* l'avatar porte déjà son look */ }
    renderStore(); sfx.join();
  }
  function closeStore() {
    stopSong();
    if (st.scene) { st.scene.destroy(); st.scene = null; }
    $('store').hidden = true; st.sel = null; shopSel = null; renderShop();
  }
  $('store-x').addEventListener('click', closeStore);
  if (/[?&]shot/.test(location.search)) { window.__openStore = openStore; window.__setTab = setTab; window.__dbg = function () { return m3d && m3d.debug ? m3d.debug() : null; }; }

  /* karaoké : mélodies du domaine public jouées en WebAudio, paroles qui s’allument */
  function stopSong() {
    st.singing = false; clearInterval(st.timer);
    st.srcs.forEach(function (o) { try { o.stop(); } catch (e) { /* ignore */ } }); st.srcs = [];
    if (st.scene) { st.scene.sing(false); st.scene.lyrics('', '', 0, '♪ Choisis une chanson ♪'); }
    if (!$('store').hidden) renderStoreAct();
  }
  function playSong(song) {
    if (!canSpeak) { toast('Ton navigateur ne peut pas jouer de musique ici 😢'); return; }
    try { if (!actx) actx = new AC(); if (actx.state === 'suspended') actx.resume(); } catch (e) { toast('Le son est bloqué : touche l’écran puis réessaie 🔊'); return; }
    stopSong(); stopSpeaking();
    var beat = 60 / song.bpm, t0 = actx.currentTime + 0.4, t = t0, marks = [];
    var master = actx.createGain(); master.gain.value = 0.5; master.connect(actx.destination);
    song.lines.forEach(function (ln) {
      var start = t;
      ln[1].forEach(function (nd) {
        var f = 523.25 * Math.pow(2, nd[0] / 12), dur = nd[1] * beat;
        var o = actx.createOscillator(), o2 = actx.createOscillator(), g = actx.createGain(), lp = actx.createBiquadFilter(), lfo = actx.createOscillator(), lg = actx.createGain();
        o.type = 'triangle'; o2.type = 'sine'; o.frequency.value = f; o2.frequency.value = f * 2; lp.type = 'lowpass'; lp.frequency.value = 2600;
        lfo.frequency.value = 5.5; lg.gain.value = f * 0.006; lfo.connect(lg); lg.connect(o.frequency); lg.connect(o2.frequency);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.32, t + 0.04); g.gain.setValueAtTime(0.28, t + dur * 0.7); g.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.97);
        o.connect(g); o2.connect(g); g.connect(lp); lp.connect(master);
        [o, o2, lfo].forEach(function (x) { x.start(t); x.stop(t + dur); st.srcs.push(x); });
        t += dur;
      });
      marks.push({ a: start, b: t, txt: ln[0] });
    });
    st.singing = true; if (st.scene) st.scene.sing(true);
    var total = t, ti = song.t;
    st.timer = setInterval(function () {
      var now = actx.currentTime, cur = -1;
      for (var i = 0; i < marks.length; i++) if (now >= marks[i].a - 0.3 && now < marks[i].b) { cur = i; break; }
      if (cur >= 0 && st.scene) { var m = marks[cur]; st.scene.lyrics(m.txt, marks[cur + 1] ? marks[cur + 1].txt : '', Math.max(0, (now - m.a) / (m.b - m.a)), '♪ ' + ti + ' ♪'); }
      if (now > total + 0.4) { var dn = true; stopSong(); if (dn) songDone(song); }
    }, 120);
    renderStoreAct();
  }
  function songDone(song) {
    var d = todayKey(); game.sing = game.sing || {};
    if (game.sing[song.id] !== d) { game.sing[song.id] = d; earn(4); saveGame(); toast('🎤 Bravo ! +4 🌸 pour ta première chanson du jour'); } else toast('🎤 Bravo ! Encore ? 🎶');
    if (st.scene) st.scene.emote('love'); storeMsg('Bravo, quelle voix ! 💖');
  }

  /* visites de chambre à deux */
  var vis = { scene: null, hostPid: null, mine: false, guests: {} };
  var inviteTimer = null;
  function showInvite(from) {
    $('hinv-t').textContent = clean(from.nick, 14) + (uiLang() === 'en' ? ' invites you to their room 🏠' : ' t’invite dans sa chambre 🏠');
    $('hinv').hidden = false; $('hinv-go').onclick = function () { $('hinv').hidden = true; send({ t: 'hacc', host: from.pid }); };
    $('hinv-no').onclick = function () { $('hinv').hidden = true; };
    clearTimeout(inviteTimer); inviteTimer = setTimeout(function () { $('hinv').hidden = true; }, 30000);
    if (curTab === 'chambre' && vis.mine) return; sfx.join();
  }
  function visScene() { return vis.scene || m3d; }
  function visitStart(m) {
    if (!window.Mika3DMod) return;
    closeVisit(true);
    var h = m.host || {};
    vis.hostPid = h.pid; vis.mine = false; vis.guests = {};
    $('visit').hidden = false; document.body.classList.add('in-visit');
    $('visit-t').textContent = (uiLang() === 'en' ? clean(h.nick, 14) + '’s room' : 'Chez ' + clean(h.nick, 14));
    var host = $('visit-stage'); host.textContent = '';
    try { vis.scene = Mika3DMod.init(host, { visit: true, look: Mika3DMod.avatarOpts(normAv(h.av) || defaultAv(h.nick)), acc: (h.acc || []), start: [Number(h.x) || 0.2, Number(h.z) || 1.2], label: clean(h.nick, 14) }); } catch (e) { vis.scene = null; }
    if (!vis.scene) { toast(uiLang() === 'en' ? 'Your phone cannot show the 3D room' : 'Ton téléphone ne sait pas afficher la chambre 3D'); send({ t: 'hleave' }); $('visit').hidden = true; return; }
    vis.scene.setDecor(usableDecor(h.decor));
    vis.scene.addGuest(myPid, { code: myAv, nick: uiLang() === 'en' ? 'Me' : 'Moi', x: m.me.x, z: m.me.z, acc: accList() });
    (m.others || []).forEach(function (p) { vis.scene.addGuest(p.pid, { code: normAv(p.av) || defaultAv(p.nick), nick: clean(p.nick, 14), x: p.x, z: p.z }); });
    host.addEventListener('mika3d', function (ev) { var d = ev.detail || {}; if (d.name === 'walk' && vis.scene) { vis.scene.moveGuest(myPid, d.x, d.z); send({ t: 'hpos', x: d.x, z: d.z }); } });
    progressQuest('wave');
  }
  function closeVisit(silent) {
    if (vis.scene) { try { vis.scene.destroy(); } catch (e) { /* ignore */ } vis.scene = null; }
    if (!vis.mine && vis.hostPid && !silent) send({ t: 'hleave' });
    if (!vis.mine) vis.hostPid = null;
    $('visit').hidden = true; document.body.classList.remove('in-visit');
  }
  function hostBar() {
    var b = $('hostbar'); if (b) return b;
    b = el('div', 'hostbar'); b.id = 'hostbar'; b.hidden = true;
    b.innerHTML = '<span class="hb-t"></span><div class="hb-e"><button type="button" data-k="wave">👋</button><button type="button" data-k="heart">💗</button><button type="button" data-k="dance">💃</button></div><form class="hb-f" autocomplete="off"><input type="text" maxlength="80" placeholder="Dis quelque chose…" aria-label="Message"><button type="submit" class="primary" aria-label="Envoyer">➤</button></form><button type="button" class="hb-x">Terminer la visite</button>';
    $('pane-chambre').insertBefore(b, $('pane-chambre').firstChild);
    Array.prototype.forEach.call(b.querySelectorAll('.hb-e button'), function (x) { x.addEventListener('click', function () { visEmote(x.getAttribute('data-k')); }); });
    b.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); var i = b.querySelector('input'); visSay(i.value); i.value = ''; });
    b.querySelector('.hb-x').addEventListener('click', function () { send({ t: 'hleave' }); endHostVisit(); });
    return b;
  }
  function renderHostBar() {
    var n = Object.keys(vis.guests).length, b = hostBar();
    b.hidden = !(vis.mine && n > 0);
    var names = Object.keys(vis.guests).map(function (k) { return vis.guests[k]; }).join(', ');
    b.querySelector('.hb-t').textContent = '👥 ' + names + (uiLang() === 'en' ? (n > 1 ? ' are in your room' : ' is in your room') : (n > 1 ? ' sont dans ta chambre' : ' est dans ta chambre'));
  }
  function endHostVisit() { Object.keys(vis.guests).forEach(function (k) { if (m3d) m3d.removeGuest(k); }); vis.guests = {}; vis.mine = false; vis.hostPid = null; renderHostBar(); }
  function visSay(text) {
    text = clean(text, 80); if (!text) return;
    send({ t: 'hsay', text: text });
  }
  function visEmote(k) { send({ t: 'hemo', k: k }); var S = visScene(); if (!S) return; if (vis.mine) S.emote(k); else S.guestEmote(myPid, k); }
  $('visit-x').addEventListener('click', function () { closeVisit(); });
  $('visit-in').addEventListener('input', function () { $('visit-send').disabled = !$('visit-in').value.trim(); });
  $('visit-form').addEventListener('submit', function (e) { e.preventDefault(); visSay($('visit-in').value); $('visit-in').value = ''; $('visit-send').disabled = true; });
  Array.prototype.forEach.call(document.querySelectorAll('#visit-emo button'), function (b) { b.addEventListener('click', function () { visEmote(b.getAttribute('data-k')); }); });
  var hostPosT = setInterval(function () { if (vis.mine && Object.keys(vis.guests).length && m3d && m3d.pos) { var p = m3d.pos(); send({ t: 'hpos', x: p.x, z: p.z }); } }, 1500);
  function homeMsg(m) {
    switch (m.t) {
      case 'hsent': toast(uiLang() === 'en' ? 'Invitation sent to ' + clean(m.to, 14) + ' 💌' : 'Invitation envoyée à ' + clean(m.to, 14) + ' 💌'); vis.mine = true; vis.hostPid = myPid; break;
      case 'hinv': if ((m.from || {}).pid) showInvite(m.from); break;
      case 'hjoin': visitStart(m); break;
      case 'hg+': {
        var p = m.p || {}, S = visScene(); if (!S) { vis.guests[p.pid] = clean(p.nick, 14); renderHostBar(); break; }
        S.addGuest(p.pid, { code: normAv(p.av) || defaultAv(p.nick), nick: clean(p.nick, 14), x: p.x, z: p.z });
        if (vis.mine) { vis.guests[p.pid] = clean(p.nick, 14); renderHostBar(); toast('🏠 ' + clean(p.nick, 14) + (uiLang() === 'en' ? ' is visiting your room!' : ' visite ta chambre !')); if (curTab !== 'chambre') { $('hinv-t').textContent = clean(p.nick, 14) + (uiLang() === 'en' ? ' is in your room 🏠' : ' est dans ta chambre 🏠'); $('hinv').hidden = false; $('hinv-go').textContent = uiLang() === 'en' ? 'See' : 'Voir'; $('hinv-go').onclick = function () { $('hinv').hidden = true; $('hinv-go').textContent = 'Visiter'; setTab('chambre'); }; $('hinv-no').onclick = function () { $('hinv').hidden = true; }; } }
        break; }
      case 'hg-': { var S2 = visScene(); if (S2) S2.removeGuest(m.pid); var nm = vis.guests[m.pid]; delete vis.guests[m.pid]; if (vis.mine) renderHostBar(); if (nm) toast((uiLang() === 'en' ? nm + ' left' : nm + ' est parti·e') + ' 👋'); break; }
      case 'hend': closeVisit(true); toast(uiLang() === 'en' ? 'The visit is over 💚' : 'La visite est terminée 💚'); break;
      case 'hp': { var S3 = visScene(); if (!S3) break; if (!vis.mine && m.pid === vis.hostPid) S3.walkTo(m.x, m.z); else S3.moveGuest(m.pid, m.x, m.z); break; }
      case 'he': { var S4 = visScene(); if (!S4) break; if (!vis.mine && m.pid === vis.hostPid) S4.emote(m.k); else S4.guestEmote(m.pid, m.k); break; }
      case 'hs': { var S5 = visScene(); if (!S5) break; var txt = chatClean(m.text, 80); if (!txt) break; if (m.pid === vis.hostPid) S5.say(txt, 'me'); else S5.guestSay(m.pid, txt); break; }
    }
  }
  function leaveAllVisits() { if (vis.scene) closeVisit(); if (vis.mine && Object.keys(vis.guests).length) { send({ t: 'hleave' }); endHostVisit(); } }

  /* tutoriel */
  var TUTO = [
    { tab: 'chambre', sel: '#mika-stage', h: 'Ta chambre 🏠', p: 'Ton Mika vit ici. Touche un objet : il y va tout seul. Écris-lui en bas pour papoter.' },
    { tab: 'monde', sel: '#plaza-stage', h: 'Monde 🌍', p: 'Marche, écris, salue les autres. Les boutiques et le karaoké sont dans les bâtiments : touche-en un.' },
    { tab: 'salon', sel: '#compose', h: 'Salon 💬', p: 'Écris un thème : dès que quelqu’un le rejoint, vous papotez à deux, trois ou quatre.' },
    { tab: 'bobby', sel: '#bob-stage', h: 'Classe 🎓', p: 'Professeur Bobby te fait pratiquer une langue. Mika corrige et t’explique.' },
    { tab: 'moi', sel: '#me-av', h: 'Moi 🫧', p: 'Ton avatar, tes réglages et ton compte. Tu peux tout effacer quand tu veux.' }
  ];
  var tutoI = 0;
  function tutoShow() {
    var s = TUTO[tutoI]; if (!s) return tutoEnd();
    if (curTab !== s.tab) setTab(s.tab);
    $('tuto').hidden = false;
    setTimeout(function () {
      var t = document.querySelector(s.sel); if (!t) { tutoI++; return tutoShow(); }
      try { t.scrollIntoView({ block: 'center' }); } catch (e) { /* ignore */ }
      setTimeout(function () {
        var r = t.getBoundingClientRect(), ring = $('tuto-ring'), card = $('tuto-card');
        ring.style.left = Math.max(4, r.left - 6) + 'px'; ring.style.top = Math.max(4, r.top - 6) + 'px'; ring.style.width = Math.min(window.innerWidth - 8, r.width + 12) + 'px'; ring.style.height = Math.min(window.innerHeight - 8, r.height + 12) + 'px';
        $('tuto-h').textContent = I.t(s.h); $('tuto-p').textContent = I.t(s.p);
        var d = ''; for (var i = 0; i < TUTO.length; i++) d += i === tutoI ? '● ' : '○ '; $('tuto-d').textContent = d.trim();
        $('tuto-next').textContent = I.t(tutoI === TUTO.length - 1 ? 'C’est parti !' : 'Suivant');
        var below = r.top + r.height / 2 < window.innerHeight / 2; card.style.top = below ? Math.min(window.innerHeight - 190, r.bottom + 16) + 'px' : 'auto'; card.style.bottom = below ? 'auto' : Math.max(12, window.innerHeight - r.top + 16) + 'px';
      }, 250);
    }, 200);
  }
  function tutoEnd() { $('tuto').hidden = true; store('talkie.tuto', '1'); setTab('chambre'); }
  function tutoStart() { tutoI = 0; tutoShow(); }
  $('tuto-next').addEventListener('click', function () { tutoI++; if (tutoI >= TUTO.length) tutoEnd(); else tutoShow(); });
  $('tuto-skip').addEventListener('click', tutoEnd);
  (function () {
    var sec = $('btn-me-settings').parentNode, b = el('button', 'ghost', '🎓 Revoir le tutoriel'); b.type = 'button'; b.addEventListener('click', tutoStart); sec.appendChild(b);
  })();
  function maybeTuto() { if (store('talkie.tuto') !== '1' && store('talkie.avset') && store('talkie.adult') === '1' && $('sheet-av').hidden && $('sheet-age').hidden) setTimeout(tutoStart, 900); }


  function renderVox() {
    ['av-vox', 'vox-set'].forEach(function (id) {
      var box = $(id); if (!box) return; box.textContent = '';
      VOX.forEach(function (v) {
        var b = el('button', 'voxchip', (uiLang() === 'en' ? v.en : v.fr)); b.type = 'button'; b.setAttribute('aria-pressed', String(vox().id === v.id));
        b.addEventListener('click', function () { store('talkie.vx', v.id); if (!voiceOn && canSpeak) { voiceOn = true; store('talkie.voice', '1'); renderVoice(); } renderVox(); previewVox(); });
        box.appendChild(b);
      });
    });
  }
  function previewVox() {
    var s = uiLang() === 'en' ? 'Hi! This is my voice. Do you like it?' : 'Coucou ! Voilà ma voix. Tu aimes bien ?';
    gesture = true;
    if (cloudTts && voiceEl) { cloudLine(s).then(function (au) { au.play().catch(function () {}); }).catch(function () { ttsSpeak(s); }); } else ttsSpeak(s);
  }

  $('btn-vox-test').addEventListener('click', function () {
    var out = $('vox-test-res'); out.textContent = uiLang() === 'en' ? 'Checking…' : 'Je vérifie…';
    fetch('/api/voice-check').then(function (r) { return r.json(); }).then(function (d) {
      if (d.ok) { cloudTts = true; if (!voiceOn && canSpeak) { voiceOn = true; store('talkie.voice', '1'); renderVoice(); } out.textContent = '✅ ' + (d.provider === 'elevenlabs' ? 'ElevenLabs' : 'OpenAI') + (uiLang() === 'en' ? ' voice is working (' : ' : la voix fonctionne (') + d.ms + ' ms).'; previewVox(); }
      else out.textContent = '⚠️ ' + d.msg + (uiLang() === 'en' ? ' → your phone’s robotic voice is used meanwhile.' : ' → en attendant, la voix du téléphone est utilisée.');
    }).catch(function () { out.textContent = '⚠️ ' + (uiLang() === 'en' ? 'Cannot reach the server.' : 'Serveur injoignable.'); });
  });
  window.addEventListener('talkie:lang', function () { renderVox(); if (canTTS) pickVoice(); });
  renderVox();
  /* ---------- Compte (Supabase) : connexion par lien e-mail + sauvegarde du Mika ---------- */
  var SYNC_KEYS = ['talkie.cmp', 'talkie.mem', 'talkie.game', 'talkie.care', 'talkie.equip', 'talkie.av', 'talkie.avset', 'talkie.bob', 'talkie.friends', 'talkie.vx', 'talkie.voice', 'talkie.ui', 'tablee.nick'];
  var sb = null, sbUser = null, syncTimer = 0, syncState = { msg: '', conflict: null, at: Number(store('talkie.syncAt')) || 0, sent: false };
  function schedSync() { if (!sb || !sbUser || syncState.conflict) return; clearTimeout(syncTimer); syncTimer = setTimeout(pushNow, 4000); }
  function snapshot() { var d = {}; SYNC_KEYS.forEach(function (k) { var v = store(k); if (v != null) d[k] = v; }); return d; }
  function pushNow() {
    if (!sb || !sbUser) return Promise.resolve();
    return sb.from('profiles').upsert({ id: sbUser.id, data: snapshot(), updated_at: new Date().toISOString() }).then(function (r) {
      if (r.error) { syncState.msg = 'La sauvegarde a échoué (' + (r.error.message || 'erreur') + ')'; } else { syncState.at = Date.now(); store('talkie.syncAt', String(syncState.at)); syncState.msg = ''; }
      renderAcct();
    });
  }
  function applyCloud(data) {
    SYNC_KEYS.forEach(function (k) { try { if (data && typeof data[k] === 'string') localStorage.setItem(k, data[k]); else localStorage.removeItem(k); } catch (e) { /* ignore */ } });
    try { localStorage.setItem('talkie.syncAt', String(Date.now())); } catch (e) { /* ignore */ }
    location.reload();
  }
  function pullThenSync() {
    if (!sb || !sbUser) return;
    sb.from('profiles').select('data,updated_at').eq('id', sbUser.id).maybeSingle().then(function (r) {
      if (r.error) { syncState.msg = /relation|does not exist|schema cache/i.test(r.error.message || '') ? 'Compte prêt, mais la table de sauvegarde n’est pas encore créée (voir supabase.sql).' : 'Lecture impossible : ' + (r.error.message || ''); renderAcct(); return; }
      var row = r.data, local = !!store('talkie.avset');
      if (!row || !row.data || !Object.keys(row.data).length) { pushNow(); return; }
      var cloudNewer = !syncState.at || new Date(row.updated_at).getTime() > syncState.at + 5000;
      if (!local) { applyCloud(row.data); return; }
      if (cloudNewer) { syncState.conflict = row; renderAcct(); } else pushNow();
    });
  }
  function renderAcct() {
    var sec = $('acct'), box = $('acct-body'); if (!sec || !box) return;
    sec.hidden = !sb; if (!sb) return;
    box.textContent = '';
    if (!sbUser) {
      box.appendChild(el('p', 'me-hint', syncState.sent ? 'Lien envoyé ! Ouvre ton e-mail sur ce téléphone et touche le lien 💌' : 'Sauvegarde ton Mika et retrouve-le sur tous tes appareils.'));
      if (!syncState.sent) {
        var f = el('form', 'plaza-say'); f.autocomplete = 'on';
        var i = el('input'); i.type = 'email'; i.id = 'acct-mail'; i.required = true; i.placeholder = 'ton@email.com'; i.autocomplete = 'email'; i.setAttribute('aria-label', 'Ton e-mail');
        var b = el('button', 'primary', '💌'); b.type = 'submit'; b.setAttribute('aria-label', 'Recevoir un lien de connexion');
        f.appendChild(i); f.appendChild(b);
        f.addEventListener('submit', function (ev) {
          ev.preventDefault(); b.disabled = true;
          sb.auth.signInWithOtp({ email: i.value.trim(), options: { emailRedirectTo: location.origin + '/' } }).then(function (r) {
            if (r.error) { toast('Oups : ' + (r.error.message || 'envoi impossible')); b.disabled = false; return; }
            syncState.sent = true; renderAcct();
          });
        });
        box.appendChild(f);
      }
      if (syncState.msg) box.appendChild(el('p', 'me-hint', syncState.msg));
      return;
    }
    box.appendChild(el('p', 'me-hint', '✅ ' + (sbUser.email || 'Connecté·e') + (syncState.at ? ' · sauvegardé à ' + new Date(syncState.at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) : '')));
    if (syncState.conflict) {
      box.appendChild(el('p', 'me-hint', 'Une sauvegarde plus récente existe sur ton compte. Laquelle garder ?'));
      var row = el('div', 'stack');
      var a = el('button', 'primary', '☁️ Prendre la sauvegarde'); a.type = 'button'; a.addEventListener('click', function () { applyCloud(syncState.conflict.data); });
      var c = el('button', 'ghost', '📱 Garder cet appareil'); c.type = 'button'; c.addEventListener('click', function () { syncState.conflict = null; pushNow(); });
      row.appendChild(a); row.appendChild(c); box.appendChild(row);
    } else {
      var r2 = el('div', 'stack');
      var s1 = el('button', 'ghost', '☁️ Sauvegarder maintenant'); s1.type = 'button'; s1.addEventListener('click', function () { pushNow().then(function () { toast('Sauvegardé ✨'); }); });
      var s2 = el('button', 'ghost', 'Se déconnecter'); s2.type = 'button'; s2.addEventListener('click', function () { sb.auth.signOut().then(function () { sbUser = null; syncState.sent = false; renderAcct(); }); });
      var s3 = el('button', 'ghost danger', '🗑️ Supprimer ma sauvegarde'); s3.type = 'button'; s3.addEventListener('click', function () { sb.from('profiles').delete().eq('id', sbUser.id).then(function () { syncState.at = 0; store('talkie.syncAt', null); toast('Sauvegarde supprimée'); renderAcct(); }); });
      r2.appendChild(s1); r2.appendChild(s2); r2.appendChild(s3); box.appendChild(r2);
    }
    if (syncState.msg) box.appendChild(el('p', 'me-hint', syncState.msg));
  }
  function initAuth(cfg) {
    if (!cfg || !cfg.url || !cfg.key) return;
    var sc = document.createElement('script'); sc.src = '/supa.js?v=22';
    sc.onload = function () {
      try { sb = window.TalkieSupa.create(cfg.url, cfg.key); } catch (e) { sb = null; return; }
      renderAcct();
      sb.auth.getSession().then(function (r) { sbUser = r.data && r.data.session ? r.data.session.user : null; renderAcct(); if (sbUser) pullThenSync(); });
      sb.auth.onAuthStateChange(function (ev, session) {
        var u = session ? session.user : null;
        if (u && (!sbUser || sbUser.id !== u.id)) { sbUser = u; renderAcct(); pullThenSync(); if (ev === 'SIGNED_IN') toast('Connecté·e 💚'); }
        else if (!u && sbUser) { sbUser = null; renderAcct(); }
      });
    };
    document.head.appendChild(sc);
  }
  fetch('/api/config').then(function (r) { return r.json(); }).then(function (d) { initAuth(d && d.supabase); }).catch(function () {});

  /* ---------- Démarrage ---------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js').catch(function () {}); });
  }
  init3d();
  renderChips(); fillMika(); renderTrends(); renderLook(); watchHero(); fillMika(); renderVoice();
  renderTrends();
  loadThemes();
  setInterval(loadThemes, 30 * 60 * 1000);
  setInterval(function () { if (!room) renderLobby(); }, 30000);
  renderLobby();
  renderNotif();
  renderNeeds();
  setTab('chambre');
  if (!store('talkie.avset')) setTimeout(openAvEditor, 500); else setTimeout(maybeTuto, 1800);
  connect();
})();
