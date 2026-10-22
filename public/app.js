(function () {
  'use strict';

  function $(id) { return document.getElementById(id); }
  function clean(s, n) {
    return String(s == null ? '' : s)
      .replace(/[\u0000-\u001f\u007f-\u009f​-‏‪-‮⁠-⁯﻿]/g, ' ')
      .replace(/\s+/g, ' ').trim().slice(0, n);
  }
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

  var NAMES = ['Hirondelle', 'Noisetier', 'Luciole', 'Marée', 'Brume', 'Cormoran', 'Sureau', 'Galet', 'Pervenche', 'Renard'];
  var THEMES = ['Les frites', 'La série du moment', 'Ce que je cuisine ce soir', 'Une chanson en boucle', 'Je veux juste discuter', 'Un film à voir ce week-end'];
  var themeSource = 'default';

  var cid = store('tablee.cid');
  if (!/^[A-Za-z0-9-]{16,64}$/.test(cid || '')) { cid = uuid(); store('tablee.cid', cid); }
  var nick = clean(store('tablee.nick'), 20) || (NAMES[Math.floor(Math.random() * NAMES.length)] + '-' + (10 + Math.floor(Math.random() * 90)));
  var blocked = [];
  try { blocked = JSON.parse(store('tablee.blocked') || '[]'); } catch (e) { blocked = []; }
  if (!Array.isArray(blocked)) blocked = [];

  var ws = null, open = false, replaced = false, retry = 0, retryTimer = null;
  var myPid = null, online = 0, invites = [], room = null, toastTimer = null, typingOn = false;
  var pushOn = false;
  var deferredInstall = null;

  /* ---------- Utilitaires d'affichage ---------- */
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

  /* ---------- Connexion ---------- */
  function connect() {
    clearTimeout(retryTimer);
    var proto = location.protocol === 'https:' ? 'wss:' : 'ws:';
    try { ws = new WebSocket(proto + '//' + location.host + '/ws'); } catch (e) { scheduleRetry(); return; }
    var mine = ws;
    ws.onopen = function () {
      if (ws !== mine) return;
      open = true; retry = 0;
      send({ t: 'hello', cid: cid, nick: nick, blocked: blocked, visible: document.visibilityState !== 'hidden' });
      renderLobby();
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
        (m.log || []).forEach(function (e) { addChat(e); });
        break;
      case 'room':
        if (room && m.room && m.room.id === room.id) { room = m.room; renderConvState(); }
        break;
      case 'chat': addChat(m); break;
      case 'typing': setTyping(!!m.on); break;
      case 'sys': addLine('sys', m.text); break;
      case 'left':
        room = null;
        typingOn = false;
        showLobby();
        if (m.reason) toast(m.reason);
        break;
      case 'error': toast(m.text || 'Une erreur est survenue.'); break;
      case 'reported': toast('Merci, le signalement est enregistré.'); break;
      case 'replaced':
        replaced = true;
        renderLobby();
        break;
    }
  }

  /* ---------- Salon ---------- */
  function renderThemes() {
    var box = $('themes');
    box.textContent = '';
    THEMES.forEach(function (t) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tcard';
      var lab = document.createElement('span');
      lab.className = 'lab';
      lab.textContent = themeSource === 'trends' ? 'Tendance' : 'Idée';
      var txt = document.createElement('span');
      txt.className = 'txt';
      txt.textContent = t;
      var go = document.createElement('span');
      go.className = 'go';
      go.textContent = 'En parler →';
      var top = document.createElement('span');
      top.style.display = 'flex'; top.style.flexDirection = 'column'; top.style.gap = '6px';
      top.appendChild(lab); top.appendChild(txt);
      b.appendChild(top); b.appendChild(go);
      b.addEventListener('click', function () {
        $('theme').value = t;
        $('compose').scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(function () { $('btn-publish').focus({ preventScroll: true }); }, 350);
        toast('Thème choisi. Règle le nombre de personnes puis publie.');
      });
      box.appendChild(b);
    });
    var sub = $('themes-sub');
    if (themeSource === 'trends') {
      sub.textContent = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    } else {
      sub.textContent = 'Pour démarrer';
    }
  }

  function loadThemes() {
    fetch('/api/themes').then(function (r) { return r.json(); }).then(function (d) {
      if (d && Array.isArray(d.themes) && d.themes.length) {
        THEMES = d.themes.map(function (t) { return clean(t, 60); }).filter(Boolean).slice(0, 10);
        themeSource = d.source === 'trends' ? 'trends' : 'default';
        renderThemes();
      }
    }).catch(function () {});
  }

  function ago(ts) {
    var s = Math.max(0, Math.round((Date.now() - (Number(ts) || Date.now())) / 1000));
    if (s < 60) return 'à l’instant';
    var m = Math.round(s / 60);
    if (m < 60) return 'il y a ' + m + ' min';
    return 'il y a ' + Math.round(m / 60) + ' h';
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
    $('empty').textContent = (f && invites.length > 0)
      ? 'Aucun thème ne correspond. Efface le filtre ou lance le tien.'
      : 'Personne n’attend pour le moment. Lance un thème : dès que quelqu’un l’ouvre, il apparaît ici et vous pouvez discuter.';
    shown.forEach(function (inv) {
      var li = document.createElement('li');
      li.className = 'invite';
      var av = document.createElement('div');
      av.className = 'avatar';
      av.textContent = (clean(inv.nick, 20).charAt(0) || '?').toUpperCase();
      li.appendChild(av);
      var main = document.createElement('div');
      main.className = 'invite-main';
      var th = document.createElement('div');
      th.className = 'invite-theme';
      th.textContent = inv.theme;
      var meta = document.createElement('div');
      meta.className = 'invite-meta';
      meta.textContent = clean(inv.nick, 20) + ' · ' + ago(inv.ts) + ' · ' + inv.here + '/' + inv.max;
      main.appendChild(th);
      main.appendChild(meta);
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'primary';
      b.textContent = 'Rejoindre';
      b.addEventListener('click', function () { send({ t: 'join', id: inv.id }); });
      li.appendChild(main);
      li.appendChild(b);
      list.appendChild(li);
    });
  }

  function showLobby() {
    $('conv').hidden = true;
    $('lobby').hidden = false;
    $('app').classList.remove('chatting');
    renderLobby();
  }

  /* ---------- Conversation ---------- */
  function showConv() {
    $('lobby').hidden = true;
    $('conv').hidden = false;
    $('app').classList.add('chatting');
    $('log').textContent = '';
    $('safety').hidden = true;
    $('btn-safety').setAttribute('aria-expanded', 'false');
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
    $('conv-sub').textContent = o.length
      ? 'Avec ' + o.map(function (p) { return clean(p.nick, 20) + (p.online ? '' : ' (hors ligne)'); }).join(', ')
      : (isHost ? 'En attente de quelqu’un…' : 'Personne d’autre pour l’instant');
    var w = $('wait');
    if (!o.length) {
      w.hidden = false;
      if (room.ai) {
        w.className = 'wait';
        w.textContent = 'Ton invitation est visible dans le salon. En attendant, Talkie, une IA, te tient compagnie. Elle s’efface dès que quelqu’un arrive.';
      } else {
        w.className = 'wait plain';
        w.textContent = isHost
          ? 'Ton invitation est visible dans le salon. Les personnes qui ont activé les notifications sont prévenues. Reste sur cette page.'
          : 'Plus personne d’autre n’est là. Tu peux quitter pour revenir au salon.';
      }
    } else { w.hidden = true; }
    var aiHere = !!room.ai;
    var can = (present.length > 0 || aiHere) && open;
    $('msg').disabled = !can;
    $('btn-send').disabled = !can;
    $('msg').placeholder = !open ? 'Reconnexion…' : (!can ? 'Tu pourras écrire dès que quelqu’un est là.' : 'Écris un message…');
    renderSafety(o);
  }

  function renderSafety(o) {
    var ul = $('safety-list');
    ul.textContent = '';
    o.forEach(function (p) {
      var li = document.createElement('li');
      var name = document.createElement('span');
      name.textContent = clean(p.nick, 20);
      var btns = document.createElement('div');
      btns.className = 'btns';
      var rep = document.createElement('button');
      rep.type = 'button';
      rep.className = 'ghost';
      rep.textContent = 'Signaler';
      rep.addEventListener('click', function () {
        send({ t: 'report', pid: p.pid, reason: 'Signalé depuis la conversation' });
      });
      var blk = document.createElement('button');
      blk.type = 'button';
      blk.className = 'ghost danger';
      blk.textContent = 'Bloquer et quitter';
      blk.addEventListener('click', function () {
        if (blocked.indexOf(p.pid) === -1) blocked.push(p.pid);
        blocked = blocked.slice(-200);
        store('tablee.blocked', JSON.stringify(blocked));
        send({ t: 'block', pid: p.pid });
        send({ t: 'leave' });
        toast('Personne bloquée. Tu ne verras plus ses invitations.');
      });
      btns.appendChild(rep);
      btns.appendChild(blk);
      li.appendChild(name);
      li.appendChild(btns);
      ul.appendChild(li);
    });
  }

  function addLine(cls, text, who, isAi) {
    var log = $('log');
    var nearBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 80;
    var wasTyping = typingOn;
    removeTyping();
    var el = document.createElement('div');
    el.className = cls;
    if (cls.indexOf('msg') === 0) {
      var w = document.createElement('div');
      w.className = 'who';
      w.appendChild(document.createTextNode(who));
      if (isAi) {
        var badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = 'IA';
        w.appendChild(badge);
      }
      var b = document.createElement('div');
      b.className = 'bubble';
      b.textContent = text;
      el.appendChild(w);
      el.appendChild(b);
    } else {
      el.textContent = text;
    }
    log.appendChild(el);
    if (wasTyping) showTyping();
    if (nearBottom || cls.indexOf('mine') !== -1) log.scrollTop = log.scrollHeight;
  }
  function addChat(m) {
    var text = clean(m.text, 500);
    if (!text) return;
    if (m.ai) { typingOn = false; removeTyping(); addLine('msg ai', text, 'Talkie', true); }
    else if (m.pid === myPid) addLine('msg mine', text, nick);
    else addLine('msg', text, clean(m.nick, 20) || 'Quelqu’un');
  }

  function removeTyping() {
    var t = document.getElementById('typing');
    if (t && t.parentNode) t.parentNode.removeChild(t);
  }
  function showTyping() {
    removeTyping();
    var log = $('log');
    var el = document.createElement('div');
    el.className = 'msg ai typing';
    el.id = 'typing';
    var w = document.createElement('div');
    w.className = 'who';
    w.appendChild(document.createTextNode('Talkie'));
    var badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = 'IA';
    w.appendChild(badge);
    var b = document.createElement('div');
    b.className = 'bubble';
    b.innerHTML = '<i></i><i></i><i></i>';
    el.appendChild(w);
    el.appendChild(b);
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
  }
  function setTyping(on) {
    typingOn = on;
    if (on) showTyping(); else removeTyping();
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
  $('msg-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var text = clean($('msg').value, 500);
    if (!text) return;
    if (send({ t: 'chat', text: text })) $('msg').value = '';
    else toast('Le message n’a pas pu partir. Réessaie.');
  });
  $('btn-leave').addEventListener('click', function () { send({ t: 'leave' }); });
  $('btn-safety').addEventListener('click', function () {
    var panel = $('safety');
    panel.hidden = !panel.hidden;
    $('btn-safety').setAttribute('aria-expanded', String(!panel.hidden));
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
  renderThemes();
  loadThemes();
  setInterval(loadThemes, 30 * 60 * 1000);
  setInterval(function () { if (!room) renderLobby(); }, 30000);
  renderLobby();
  renderNotif();
  connect();
})();
