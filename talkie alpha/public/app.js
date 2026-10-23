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
  var CHIPS = ['Les frites', 'Une journée difficile', 'La série du moment', 'Ce que je cuisine ce soir', 'Je veux juste discuter', 'Musique'];
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
    return ['b', 'g', 'y'][n % 3];
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
    $('mika-hero').hidden = !aiOn;
    $('hint-ai').hidden = !aiOn;
    $('foot-ai').hidden = !aiOn;
    $('foot-gif').hidden = !gifOn;
    $('btn-gif').hidden = !gifOn;
    $('tab-gif').hidden = !gifOn;
    if (typeof updateTip === 'function') updateTip();
  }

  /* ---------- Salon ---------- */
  function renderChips() {
    var box = $('chips');
    box.textContent = '';
    CHIPS.forEach(function (t) {
      var b = el('button', 'chip', t);
      b.type = 'button';
      b.addEventListener('click', function () { $('theme').value = t; $('theme').focus(); });
      box.appendChild(b);
    });
  }

  var CATALOG = {
    'Actu': ['Un événement dont tout le monde parle', 'La mode du moment', 'Une info qui m’a surpris', 'Ce qui change dans nos villes'],
    'Culture': ['La série du moment', 'Un film à voir ce week-end', 'Une chanson en boucle', 'Un livre qui m’a marqué·e'],
    'Sport': ['Le match de ce soir', 'Me remettre au sport', 'Un souvenir de stade', 'Courir, nager, marcher…'],
    'Food': ['Les frites', 'Ce que je cuisine ce soir', 'Le meilleur snack à 22 h', 'Ma recette de réconfort'],
    'Jeux': ['Un jeu vidéo du moment', 'Un jeu de société à tester', 'Mon plus gros rage quit', 'Jeux rétro'],
    'Voyage': ['Ma prochaine destination', 'Un endroit qui m’a changé·e', 'Voyager seul·e', 'Les bons plans week-end'],
    'Société': ['Un sujet dont on parle partout', 'Ce que je pense de l’IA', 'Les manifestations, vous y allez ?', 'Ce qui nous rapproche'],
    'Soutien': ['Une journée difficile', 'Je veux juste discuter', 'Je n’arrive pas à dormir', 'Un petit bonheur du jour']
  };
  var catSel = null;
  var ICONS = {
    'Tendance': '<path d="M12 3c1 3.2 4.5 5 4.5 9.3A4.5 4.5 0 0 1 12 17a4.5 4.5 0 0 1-4.5-4.7c0-1.7.8-2.8 1.7-3.8.2 1.2.8 2 1.6 2.3C10.6 8.2 11 5.6 12 3z"/><path d="M12 21c-2.6 0-4.5-1.4-4.5-3.5"/>',
    'Actu': '<path d="M4 5h13a1 1 0 0 1 1 1v13H6a2 2 0 0 1-2-2V5z"/><path d="M18 9h2v8a2 2 0 0 1-2 2"/><path d="M8 9h6M8 13h6"/>',
    'Culture': '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10.5 9.2v5.6l4.5-2.8-4.5-2.8z"/>',
    'Sport': '<circle cx="12" cy="12" r="9"/><path d="M3.5 9.5c3 .5 5.500 2.500 8.500 2.500s5.500-2 8.500-2.500M12 3v18M6 5.500c1.500 2 2 4.500 2 6.500s-.5 4.500-2 6.500M18 5.500c-1.500 2-2 4.500-2 6.500s.5 4.500 2 6.500"/>',
    'Food': '<path d="M7 3v8M4.500 3v5a2.500 2.500 0 0 0 5 0V3M7 11v10"/><path d="M17 21V3c-2.500 2-3.500 5-3.500 8H17"/>',
    'Jeux': '<rect x="2.500" y="7" width="19" height="11" rx="5.500"/><path d="M8 10.500v4M6 12.500h4"/><circle cx="15.500" cy="11.500" r="0.900" fill="currentColor"/><circle cx="18" cy="13.800" r="0.900" fill="currentColor"/>',
    'Voyage': '<path d="M21 3 3 10.500l6.500 2.500L12 20l2.500-6.500L21 3z"/><path d="M9.500 13 21 3"/>',
    'Société': '<circle cx="9" cy="8.500" r="3.200"/><path d="M3 20c.5-3.300 3-5 6-5s5.500 1.700 6 5"/><circle cx="17" cy="9.500" r="2.500"/><path d="M17.500 14.500c2.200.2 3.600 1.700 4 4.500"/>',
    'Soutien': '<path d="M12 20s-7.500-4.500-7.500-10A4.300 4.300 0 0 1 12 7.300 4.300 4.300 0 0 1 19.500 10c0 5.500-7.500 10-7.500 10z"/>'
  };
  function icon(name, cls) {
    var wrap = document.createElement('span');
    wrap.innerHTML = '<svg class="i ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS['Actu']) + '</svg>';
    return wrap.firstChild;
  }
  var ARROW = '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function pickTheme(t) {
    $('theme').value = t;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(function () { $('btn-publish').focus({ preventScroll: true }); }, 350);
    toast('Thème prêt. Appuie sur Publier.');
  }

  function exploreData() {
    var out = [];
    if (TREND_ITEMS.length) out.push({ name: 'Tendance', list: TREND_ITEMS });
    Object.keys(CATALOG).forEach(function (k) {
      out.push({ name: k, list: CATALOG[k].map(function (t) { return { cat: k, text: t }; }) });
    });
    return out;
  }

  function renderTrends() {
    var data = exploreData();
    if (!catSel || !data.some(function (d) { return d.name === catSel; })) catSel = data[0].name;
    var tabs = $('cats');
    tabs.textContent = '';
    data.forEach(function (d) {
      var b = el('button');
      b.type = 'button';
      b.appendChild(icon(d.name));
      b.appendChild(document.createTextNode(d.name));
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(d.name === catSel));
      b.addEventListener('click', function () { catSel = d.name; renderTrends(); });
      tabs.appendChild(b);
    });
    var box = $('themes');
    box.textContent = '';
    var cur = data.filter(function (d) { return d.name === catSel; })[0];
    cur.list.forEach(function (x) {
      var b = el('button', 'tcard');
      b.type = 'button';
      var cat = cur.name === 'Tendance' ? x.cat : cur.name;
      b.setAttribute('data-c', ICONS[cat] ? cat : 'Actu');
      var ico = el('span', 'ico');
      ico.appendChild(icon(ICONS[cat] ? cat : 'Actu'));
      b.appendChild(ico);
      b.appendChild(el('span', 'txt', x.text));
      var go = el('span', 'go', 'Lancer ce thème');
      go.insertAdjacentHTML('beforeend', ARROW);
      b.appendChild(go);
      b.addEventListener('click', function () { pickTheme(x.text); });
      box.appendChild(b);
    });
    $('themes-sub').textContent = TREND_ITEMS.length ? new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) : '';
  }

  function loadThemes() {
    fetch('/api/themes').then(function (r) { return r.json(); }).then(function (d) {
      TREND_ITEMS = [];
      if (d && d.source === 'trends') {
        var src = Array.isArray(d.items) && d.items.length ? d.items
          : (Array.isArray(d.themes) ? d.themes.map(function (t) { return { cat: 'Actu', text: t }; }) : []);
        TREND_ITEMS = src.map(function (x) { return { cat: clean(x.cat, 20) || 'Actu', text: clean(x.text, 60) }; })
          .filter(function (x) { return x.text; }).slice(0, 10);
        if (TREND_ITEMS.length) catSel = 'Tendance';
      }
      renderTrends();
    }).catch(function () {});
  }

  /* ---------- Mika sur la première page ---------- */
  function renderMika() {
    var qr = $('mika-qr');
    qr.textContent = '';
    var bub = $('mika-say');
    var greet = 'Salut ! De quoi as-tu envie de parler ce soir ?';
    if (bub && bub.classList.contains('thinking')) {
      var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      setTimeout(function () {
        bub.classList.remove('thinking');
        bub.classList.add('say');
        bub.textContent = greet;
      }, reduce ? 0 : 1100);
    }
    var opts = [
      ['Je m’ennuie 😅', function () { pickTheme('Je m’ennuie, on discute ?'); }],
      ['Un thème du moment', function () { var t = TREND_ITEMS.length ? 'Tendance' : 'Culture'; catSel = t; renderTrends(); $('explore').scrollIntoView({ behavior: 'smooth', block: 'start' }); }],
      ['Quelqu’un à qui parler', function () { pickTheme('Je veux juste discuter'); }]
    ];
    opts.forEach(function (o) {
      var b = el('button', null, o[0]);
      b.type = 'button';
      b.addEventListener('click', function () {
        var say = $('mika-say');
        say.classList.remove('thinking'); say.classList.add('say'); say.textContent = 'Avec plaisir ! Je te prépare ça.';
        o[1]();
      });
      qr.appendChild(b);
    });
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
    em.appendChild(el('strong', null, (f && invites.length > 0) ? 'Aucun thème ne correspond' : 'Personne n’attend pour le moment'));
    em.appendChild(document.createTextNode((f && invites.length > 0) ? 'Efface le filtre ou lance le tien.' : 'Lance un thème : dès que quelqu’un l’ouvre, il apparaît ici.'));
    var cp = $('inv-count');
    cp.hidden = invites.length === 0;
    cp.textContent = String(invites.length);
    shown.forEach(function (inv) {
      var li = el('li', 'invite');
      li.appendChild(el('div', 'avatar ' + tint(inv.nick), initial(inv.nick)));
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
    av.textContent = initial(room.theme);
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
  function tipDismissed() { return store('talkie.tipMika') === '1'; }
  function updateTip() {
    var show = aiOn && !!room && !room.ai && !tipDismissed() && !$('conv').hidden;
    $('mika-tip').hidden = !show;
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
    if (ai) typingOn = false;
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
      if (ai) who.appendChild(el('span', 'badge', 'IA'));
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
  function sendText() {
    var text = chatClean($('msg').value, 500);
    if (!text) return;
    if (send({ t: 'chat', text: text })) {
      $('msg').value = '';
      updateSend();
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
  function closeSheets() { $('sheet-safety').hidden = true; $('sheet-leave').hidden = true; }

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
    if (send({ t: 'invite', theme: theme, max: checked ? parseInt(checked.value, 10) : 2 })) $('theme').value = '';
    else toast('Connexion en cours, réessaie dans un instant.');
  });
  $('msg-form').addEventListener('submit', function (e) { e.preventDefault(); sendText(); });
  $('msg').addEventListener('input', updateSend);
  $('msg').addEventListener('click', updateMention);
  $('msg').addEventListener('keyup', function (e) { if (e.key !== 'Enter') updateMention(); });
  $('mention-pick').addEventListener('mousedown', function (e) { e.preventDefault(); });
  $('mention-pick').addEventListener('click', pickMention);
  $('tip-go').addEventListener('click', function () { pickMention(); });
  $('tip-x').addEventListener('click', function () { store('talkie.tipMika', '1'); updateTip(); });
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
  renderChips(); renderMika(); renderTrends(); renderLook();
  renderTrends();
  loadThemes();
  setInterval(loadThemes, 30 * 60 * 1000);
  setInterval(function () { if (!room) renderLobby(); }, 30000);
  renderLobby();
  renderNotif();
  connect();
})();
