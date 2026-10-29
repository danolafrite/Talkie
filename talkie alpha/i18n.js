/* Mika · langue de l'interface (FR / EN pour l'instant).
   Principe : le texte français reste la référence dans le HTML et le JS ; en anglais, chaque texte exact trouvé dans
   le dictionnaire est remplacé à l'affichage (et restauré si on repasse en français). Les textes à variables passent par PATTERNS. */
(function () {
  'use strict';
  var LANGS = { fr: 'Français', en: 'English' };
  var KEY = 'talkie.ui';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  var lang = get();
  if (lang !== 'fr' && lang !== 'en') lang = /^en/i.test(navigator.language || '') ? 'en' : 'fr';

  var EN = {
    'Chambre': 'Room', 'Monde': 'World', 'Classe': 'Classroom', 'Bobby': 'Classroom', 'Boutique': 'Shop', 'Moi': 'Me', 'Navigation': 'Navigation',
    'Classe de Bobby': 'Classroom', '🎓 Bobby': '🎓 Classroom', 'Message à Bobby': 'Message to Professor Bobby',
    'Écris ou parle à Bobby…': 'Type or speak to Professor Bobby…', '📒 Mon carnet': '📒 My notebook', '🔄 Nouvelle leçon': '🔄 New lesson',
    'Bobby parle uniquement dans la langue choisie. Mika corrige tes phrases et t’explique en français. Ce sont des IA : elles peuvent se tromper.': 'Professor Bobby only speaks the language you chose. Your buddy corrects your sentences and explains in English. They are AIs: they can make mistakes.',
    'La Place': 'The Square', 'Le Salon': 'The Lounge', 'Les idées de Mika': 'Ideas from your buddy',
    'Un thème, et quelqu’un te rejoint. Ton avatar papote avec le sien.': 'Pick a topic and someone joins you. Your avatar chats with theirs.',
    'Un thème, une envie…': 'A topic, a mood…', 'Publier': 'Post', 'Commencer une discussion': 'Start a chat', 'De quoi as-tu envie de parler ?': 'What do you feel like talking about?',
    'Touche le sol pour te déplacer, touche un avatar pour le saluer. Sur la Place, on se voit et on se fait coucou : pour discuter, lance un thème ci-dessous 💬': 'Tap the ground to walk, tap an avatar to say hi. On the Square you can see each other and wave: to chat, start a topic below 💬',
    'Touche le frigo 🍙, les plantes 🌱, le bain 🛁, la porte 🚪 ou l’ordi 💻 : Mika y va tout seul.': 'Tap the fridge 🍙, the plants 🌱, the bath 🛁, the door 🚪 or the computer 💻: your buddy goes there by itself.',
    'Touche le sol pour marcher. Les messages restent courts et polis 💚': 'Tap the floor to walk. Messages stay short and kind 💚',
    'Parle à Mika…': 'Talk to your buddy…', 'Écrire à Mika': 'Write to your buddy', 'Dis quelque chose…': 'Say something…', 'Envoyer': 'Send', 'Message': 'Message',
    'Ton humeur ?': 'How are you feeling?', 'Au plus bas': 'Very low', 'Bof': 'Meh', 'Neutre': 'Okay', 'Bien': 'Good', 'Rayonnant·e': 'Glowing',
    'Nourrir': 'Feed', 'Sieste': 'Nap', 'Câlin': 'Hug', 'Jouer': 'Play',
    'Mika est une IA 💚': 'Your buddy is an AI 💚', 'En cas de détresse': 'If you are in distress',
    'Mika est une IA, pas un professionnel de santé. Ce qu’il retient reste sur ton téléphone (onglet Moi).': 'Your buddy is an AI, not a health professional. What it remembers stays on your phone (Me tab).',
    'Besoin d’idées ?': 'Need ideas?', 'Demander des idées à Mika': 'Ask your buddy for ideas',
    'Réglages': 'Settings', 'Apparence': 'Appearance', 'Clair': 'Light', 'Sombre': 'Dark', 'Auto': 'Auto', 'Sons': 'Sounds', 'Activés': 'On', 'Coupée': 'Off', 'Activée': 'On',
    'Voix de Mika': 'Buddy’s voice', 'Ma ville': 'My city', 'Changer': 'Change', 'Fermer': 'Close', 'Langue': 'Language', 'Passer': 'Skip', 'Suivant': 'Next', 'Terminer': 'Done', 'Ok': 'OK',
    '⚙️ Réglages (voix, thème, notifications)': '⚙️ Settings (voice, theme, notifications)',
    'Boutique ': 'Shop ', 'Tes pétales': 'Your petals', '👗 Tenues': '👗 Outfits', '🛋️ Maison': '🛋️ Home', '💎 Premium': '💎 Premium',
    'Touche un article pour l’essayer': 'Tap an item to try it', 'Ton Mika te montre ce que ça donne.': 'Your buddy shows you how it looks.',
    'Gagne des pétales 🌸 en prenant soin de ton Mika. Tout s’obtient en jouant : rien n’est jamais obligatoire.': 'Earn petals 🌸 by caring for your buddy. Everything can be earned by playing: nothing is ever required.',
    'Acheter': 'Buy', 'Porter': 'Wear', 'Retirer': 'Remove', 'Poser': 'Place', 'Actif': 'Worn', 'Dans l’armoire': 'In wardrobe', '💎 Bientôt': '💎 Soon',
    'Maquette : bientôt disponible': 'Mock-up: coming soon', 'Ouvrir la classe': 'Open the classroom',
    'Écharpe': 'Scarf', 'Nœud': 'Bow', 'Lunettes': 'Glasses', 'Bonnet dodo': 'Sleep cap', 'Couronne': 'Crown', 'Sorcier': 'Wizard', 'Ailes': 'Wings',
    'Ours en peluche': 'Teddy bear', 'Néon cœur': 'Heart neon', 'Pouf': 'Bean bag', 'Aquarium': 'Aquarium', 'Borne d’arcade': 'Arcade', 'Affiche': 'Poster', 'Panier du chat': 'Cat bed',
    'Boule disco': 'Disco ball', 'Bibliothèque': 'Bookshelf', 'Nuage': 'Cloud lamp', 'Piano': 'Piano', 'Tapis étoile': 'Star rug',
    'Pack Voyage': 'Travel pack', 'Pack Entretien': 'Interview pack', 'Prononciation+': 'Pronunciation+', 'Carnet de mots': 'Word notebook', 'Niveaux B1 / B2': 'Levels B1 / B2',
    'Anglais': 'English', 'Espagnol': 'Spanish', 'Italien': 'Italian', 'Allemand': 'German', 'Toque de diplômé': 'Graduation cap', 'Blouse de prof': 'Teacher coat',
    'Leçon : gare, hôtel, restaurant': 'Lesson: station, hotel, restaurant', 'Leçon : entretien d’embauche': 'Lesson: job interview', 'Mika ajoute un conseil de prononciation': 'Your buddy adds a pronunciation tip',
    'Retrouve tout ton vocabulaire': 'Find all your vocabulary', 'Des échanges plus avancés': 'More advanced conversations', 'Bobby parle anglais': 'Professor Bobby speaks English', 'Bobby parle espagnol': 'Professor Bobby speaks Spanish', 'Bobby parle italien': 'Professor Bobby speaks Italian',
    'Gagne des pétales 🌸 en prenant soin de ton Mika.': 'Earn petals 🌸 by caring for your buddy.',
    'Mon avatar': 'My avatar', '✏️ Mon avatar': '✏️ My avatar', 'Mon humeur': 'My mood', 'Ce que Mika sait de moi': 'What my buddy knows about me',
    'Tout reste sur ton téléphone. Tu peux supprimer chaque souvenir.': 'Everything stays on your phone. You can delete each memory.', '🗑️ Effacer toute la mémoire': '🗑️ Erase all memory',
    'Dis-moi chaque jour comment tu te sens : Mika s’en souvient et veille sur toi 💚': 'Tell me each day how you feel: your buddy remembers and looks after you 💚',
    '🔔 Me prévenir quand quelqu’un arrive': '🔔 Notify me when someone arrives', '📲 Installer l’app': '📲 Install the app', '🎓 Revoir le tutoriel': '🎓 Replay the tutorial',
    'Crée ton Mika': 'Create your buddy', 'C’est toi, version mochi. Prends soin de lui : il prendra soin de toi 💚': 'It’s you, mochi version. Take care of it: it will take care of you 💚',
    'Prénom': 'Name', 'Comment il s’appelle ?': 'What’s its name?', 'Prénom de ton Mika': 'Your buddy’s name', 'Couleur': 'Color', 'Oreilles': 'Ears', 'Regard': 'Eyes', 'Style': 'Style', 'Voix': 'Voice',
    'Faire sa connaissance 💚': 'Meet it 💚', '🎲 Au hasard': '🎲 Random', 'Parle-moi dans cette langue': 'Talk to me in this language',
    'Bienvenue sur Mika': 'Welcome to Mika', 'J’ai 18 ans ou plus': 'I am 18 or older', 'J’ai moins de 18 ans': 'I am under 18',
    'Désolé, Mika n’est pas accessible aux mineurs. Reviens à tes 18 ans !': 'Sorry, Mika is not available to minors. Come back when you’re 18!',
    'Le garde-manger': 'The pantry', 'Qu’est-ce que ton Mika va grignoter ? L’onigiri est toujours gratuit.': 'What will your buddy snack on? The onigiri is always free.',
    'Besoins de ton Mika': 'Your buddy’s needs', 'Visite guidée': 'Guided tour', 'Visiter': 'Visit', 'Plus tard': 'Later', 'Quitter': 'Leave', 'Visite': 'Visit',
    'Saluer': 'Say hi', 'Cœur': 'Heart', 'Content': 'Happy', 'Danser': 'Dance', 'Wow': 'Wow',
    'Quitter la conversation ?': 'Leave the chat?', 'Quitter la conversation': 'Leave the chat', 'Rester': 'Stay', 'Sécurité': 'Safety', 'Sécurité et options': 'Safety and options', 'Ambiance': 'Atmosphere',
    'Personne n’attend pour le moment': 'Nobody is waiting right now', 'Lance un thème : dès que quelqu’un l’ouvre, il apparaît ici.': 'Start a topic: as soon as someone opens it, it shows up here.',
    'Inviter un·e ami·e': 'Invite a friend', '💌 Inviter un·e ami·e': '💌 Invite a friend', 'Ce qui se dit aujourd’hui': 'What people are talking about today', 'Plus de thèmes': 'More topics', '🎲 Surprends-moi': '🎲 Surprise me',
    'Où es-tu ?': 'Where are you?', 'Ta ville': 'Your city', 'Ton pays': 'Your country', '📍 Utiliser ma position': '📍 Use my location', 'Changer de lieu': 'Change place',
    'Mika, touche-le pour lui parler': 'Tap your buddy to talk', 'Faire coucou à Mika': 'Wave at your buddy', 'Appeler Mika dans la conversation': 'Call your buddy into the chat',
    'Mon niveau': 'My level', 'Niveau 1': 'Level 1', 'Connexion…': 'Connecting…', 'En direct': 'Live', 'Personnes et pseudo': 'People and nicknames', 'À deux': 'Two of us', 'Jusqu’à 3': 'Up to 3', 'Jusqu’à 4': 'Up to 4',
    // lignes de Mika jouées en local (scriptées)
    'Va faire un tour dans le Monde : mes copains mochis t’y attendent 🌍': 'Go for a walk in the World: my mochi friends are waiting there 🌍',
    'Allons voir qui est là ! 🌍': 'Let’s see who’s around! 🌍',
    'Choisis un visage juste en dessous, je veux savoir comment tu vas 🫶': 'Pick a face just below, I want to know how you are 🫶',
    'Yesss, bravo toi ! Je suis trop fier·ère 🥹': 'Yesss, well done! I’m so proud 🥹', 'Kyaa ! Un pas de plus vers une belle journée ✨': 'Kyaa! One more step towards a great day ✨',
    'Tu gères ! Tiens, des pétales pour toi 🌸': 'You’re doing great! Here, petals for you 🌸', 'Hwaiting ! Ça, c’est du soin 💚': 'Hwaiting! That’s what I call care 💚',
    'Trois sur trois ! Je suis tellement fier·ère de nous 🥹 Voilà un bonus de pétales !': 'Three out of three! I’m so proud of us 🥹 Here’s a petal bonus!',
    'Aujourd’hui avec ton Mika': 'Today with your buddy', 'Journée complète, bravo ! 🎉': 'Day complete, well done! 🎉',
    'Dire à ton Mika comment tu te sens': 'Tell your buddy how you feel', 'Retrouver du monde dans le Monde': 'Meet people in the World', 'Nourrir ton Mika': 'Feed your buddy', 'Lui faire faire une sieste': 'Let it take a nap',
    'Lui faire un câlin': 'Give it a hug', 'Jouer ensemble': 'Play together', 'Dire coucou à quelqu’un': 'Say hi to someone', 'Papoter avec Professeur Bobby': 'Chat with Professor Bobby',
    'Laver ton Mika': 'Give your buddy a bath', 'Arroser les plantes': 'Water the plants',
    'Gloup… mon ventre fait des bruits de frites 🍟 Tu aurais un petit quelque chose ?': 'Gulp… my tummy is rumbling for fries 🍟 Got a little something?',
    '*bâille* Je commence à avoir les yeux qui piquent… 😪': '*yawns* My eyes are getting heavy… 😪',
    'Je me sens un peu seul… et si on allait voir du monde ? 💞': 'I feel a bit lonely… shall we go see people? 💞',
    'Splash ! Un bon bain moussant 🫧': 'Splash! A nice bubble bath 🫧', 'Oh oui, des bulles ! Tu es adorable 🛁': 'Oh yes, bubbles! You’re adorable 🛁',
    'Tout propre, tout doux ! ✨ Merci de prendre soin de moi.': 'All clean and soft! ✨ Thanks for taking care of me.',
    'Euh… j’ai un petit besoin, ne regarde pas 🙈': 'Um… I need a moment, don’t look 🙈', 'Ouf, ça va mieux ! Merci de m’avoir laissé de l’intimité 🚽💚': 'Phew, much better! Thanks for the privacy 🚽💚',
    'Je suis déjà tout propre, je sens la fleur de cerisier 🌸': 'I’m already spotless, I smell like cherry blossoms 🌸',
    'Mes plantes sont toutes contentes, regarde comme elles brillent 🌱': 'My plants are all happy, look how they shine 🌱',
    'Allez Basilic, à boire ! 🌱💧': 'Come on Basil, drink up! 🌱💧', 'Glou glou… elles ont soif, les petites 🌿': 'Glug glug… the little ones are thirsty 🌿', 'Elles se redressent ! 🌿✨ Merci, tu as la main verte.': 'They’re perking up! 🌿✨ Thanks, you have green thumbs.',
    // tutoriel
    'Ta chambre 🏠': 'Your room 🏠', 'Monde 🌍': 'World 🌍', 'Les rooms 💬': 'Chat rooms 💬', 'Classe 🎓': 'Classroom 🎓', 'Boutique 🛍️': 'Shop 🛍️', 'Moi 🫧': 'Me 🫧', 'C’est parti !': 'Let’s go!',
    'Ici vit ton Mika, c’est toi en version mochi. Touche le frigo, le lit, les plantes, le bain, l’ordi ou la porte : il y va tout seul. Écris-lui en bas pour papoter.': 'This is where your buddy lives, it’s you in mochi form. Tap the fridge, the bed, the plants, the bath, the computer or the door: it goes there by itself. Write to it below to chat.',
    'La Place : tous les avatars en ligne se retrouvent ici. Touche le sol pour marcher, touche quelqu’un pour le saluer ou l’inviter dans ta chambre. Les bâtiments mènent à la classe, à la boutique et à ta chambre.': 'The Square: every online avatar meets here. Tap the ground to walk, tap someone to say hi or invite them to your room. The buildings lead to the classroom, the shop and your room.',
    'Une room, c’est une petite discussion à 2, 3 ou 4. Écris un thème, publie-le : dès que quelqu’un l’ouvre, vous papotez, avatars à l’écran. Tu peux aussi rejoindre un thème déjà publié.': 'A room is a small chat for 2, 3 or 4 people. Write a topic and post it: as soon as someone opens it, you chat with your avatars on screen. You can also join a topic that’s already posted.',
    'Professeur Bobby t’aide à pratiquer une langue, à l’écrit ou à l’oral. Ton Mika, à côté de toi, corrige tes erreurs et t’explique.': 'Professor Bobby helps you practice a language, in writing or out loud. Your buddy, next to you, corrects your mistakes and explains.',
    'Gagne des pétales 🌸 en prenant soin de ton Mika, puis habille-le et décore ta chambre. Touche un article pour l’essayer avant de l’acheter.': 'Earn petals 🌸 by caring for your buddy, then dress it up and decorate your room. Tap an item to try it before buying.',
    'Ton profil, tes humeurs, ce que Mika retient de toi, les réglages et la langue. Tu peux tout effacer quand tu veux.': 'Your profile, moods, what your buddy remembers about you, settings and language. You can erase everything any time.',
    // amis & visites
    'Salut !': 'Hi!', '🏠 Inviter dans ma chambre': '🏠 Invite to my room', '💛 Ajouter en ami': '💛 Add as friend', '💛 Ami·e': '💛 Friend', '👋 Saluer': '👋 Say hi'
  };
  Object.assign(EN, {
    'Salon': 'Lounge', '🎯 Défis du jour': '🎯 Daily goals', '🎉 Journée complète !': '🎉 Day complete!', 'ℹ️ À propos et sécurité': 'ℹ️ About and safety',
    'Dis quelque chose…': 'Say something…', 'Écrire aux autres': 'Write to others', 'Sortir du magasin': 'Leave the shop',
    '🥐 Boulangerie': '🥐 Bakery', '👗 Friperie': '👗 Thrift shop', '🪴 Déco': '🪴 Home decor', '🎤 Karaoké': '🎤 Karaoke',
    'Bonjour ! Choisis une douceur pour ton Mika 🥐': 'Hello! Pick a treat for your buddy 🥐', 'Bienvenue ! Essaie ce que tu veux, le miroir est à toi ✨': 'Welcome! Try anything, the mirror is yours ✨',
    'Pose-toi, regarde : tout peut aller dans ta chambre 🏡': 'Take a look: everything can go in your room 🏡', 'Choisis une chanson, on chante ensemble ! 🎶': 'Pick a song, we sing together! 🎶',
    'Croissant': 'Croissant', 'Macaron': 'Macaron', 'Gâteau': 'Cake', 'Gratuit': 'Free', '🎤 Chanter': '🎤 Sing', '⏹ Arrêter': '⏹ Stop', 'Porté': 'Worn', 'À toi': 'Yours',
    'Poser dans ma chambre': 'Place in my room', 'Frère Jacques': 'Frère Jacques', 'Au clair de la lune': 'Au clair de la lune', 'Joyeux anniversaire': 'Happy birthday',
    '🛍️ Boutique (classe, 💎)': '🛍️ Shop (classroom, 💎)', 'Forme': 'Shape', 'Queue': 'Tail', 'Regard': 'Eyes', 'Style': 'Style', 'Couleur': 'Color', 'Oreilles': 'Ears',
    'Rond': 'Round', 'Grand': 'Tall', 'Potelé': 'Chubby', 'Haricot': 'Bean', 'Aucune': 'None', 'Chat': 'Cat', 'Lapin': 'Bunny', 'Renard': 'Fox', 'Ours': 'Bear', 'Souris': 'Mouse',
    'Grands yeux': 'Big eyes', 'Étoiles': 'Stars', 'Content': 'Happy', 'Rien': 'Nothing', 'Soleil': 'Sunglasses', 'Casque': 'Headphones', 'Papillon': 'Bow tie', 'Chapeau': 'Hat', 'Fleur': 'Flower', 'Bonnet': 'Beanie',
    'Compte': 'Account', 'Se connecter': 'Sign in', 'Se déconnecter': 'Sign out',
    'Bobby et Mika sont des IA : elles peuvent se tromper.': 'Bobby and Mika are AIs: they can make mistakes.', 'Mika est une IA 💚 ': 'Your buddy is an AI 💚 '
  });
  var PAT = [
    [/^Niveau (\d+) avec Mika · (\d+) jours? de suite$/, function (m) { return 'Level ' + m[1] + ' with your buddy · ' + m[2] + '-day streak'; }],
    [/^🎓 Niveau (\d+)$/, function (m) { return '🎓 Level ' + m[1]; }],
    [/^(\d+) en ligne$/, function (m) { return m[1] + ' online'; }],
    [/^🌍 (\d+) autres? sur la Place$/, function (m) { return '🌍 ' + m[1] + ' other' + (m[1] === '1' ? '' : 's') + ' on the Square'; }],
    [/^🌍 (\d+) sur la Place$/, function (m) { return '🌍 ' + m[1] + ' on the Square'; }],
    [/^🌍 Tu es seul·e sur la Place… pour l’instant 💚$/, function () { return '🌍 You’re alone on the Square… for now 💚'; }],
    [/^💛 (.+) est sur la Place$/, function (m) { return '💛 ' + m[1] + ' is on the Square'; }],
    [/^💛 (.+) est en ligne$/, function (m) { return '💛 ' + m[1] + ' is online'; }],
    [/^(.+) t’invite dans sa chambre 🏠$/, function (m) { return m[1] + ' invites you to their room 🏠'; }],
    [/^Chez (.+)$/, function (m) { return m[1] + '’s room'; }],
    [/^Bienvenue, (.+) ! 💚$/, function (m) { return 'Welcome, ' + m[1] + '! 💚'; }],
    [/^\+(\d+) 🌸$/, function (m) { return '+' + m[1] + ' 🌸'; }],
    [/^Acheté ! (.+) 🎉$/, function (m) { return 'Bought! ' + m[1] + ' 🎉'; }],
    [/^Il te manque (\d+) 🌸 : .*$/, function (m) { return 'You need ' + m[1] + ' more 🌸: take care of your buddy to earn some!'; }],
    [/^(\d+) jours?$/, function (m) { return m[1] + ' day' + (m[1] === '1' ? '' : 's'); }],
    [/^🌸 (\d+) · (\d+) j$/, function (m) { return '🌸 ' + m[1] + ' · ' + m[2] + ' d'; }],
    [/^(.+) \(🔒\)$/, function (m) { return m[1] + ' (🔒)'; }],
    [/^Étape (\d+)\/(\d+)$/, function (m) { return 'Step ' + m[1] + '/' + m[2]; }]
  ];
  var orig = new WeakMap(), attrOrig = new WeakMap();
  function tr(s) {
    var k = s.trim(); if (!k) return null;
    if (Object.prototype.hasOwnProperty.call(EN, k)) return s.replace(k, EN[k]);
    for (var i = 0; i < PAT.length; i++) { var m = PAT[i][0].exec(k); if (m) return s.replace(k, PAT[i][1](m)); }
    return null;
  }
  var busy = false;
  function node(n) {
    if (n.nodeType === 3) {
      var p = n.parentNode; if (p && (p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE' || p.nodeName === 'TEXTAREA')) return;
      var rec = orig.get(n), v = n.nodeValue;
      if (lang === 'en') {
        if (rec && v === rec.en) return;
        var t = tr(v); if (t != null && t !== v) { orig.set(n, { fr: v, en: t }); n.nodeValue = t; }
      } else if (rec && v === rec.en) { n.nodeValue = rec.fr; orig.delete(n); }
    } else if (n.nodeType === 1) {
      if (n.nodeName === 'SCRIPT' || n.nodeName === 'STYLE') return;
      ['placeholder', 'aria-label', 'title'].forEach(function (a) {
        var v = n.getAttribute(a); if (v == null) return;
        var key = a, store = attrOrig.get(n) || {}, r = store[key];
        if (lang === 'en') { if (r && v === r.en) return; var t = tr(v); if (t != null && t !== v) { store[key] = { fr: v, en: t }; attrOrig.set(n, store); n.setAttribute(a, t); } }
        else if (r && v === r.en) { n.setAttribute(a, r.fr); delete store[key]; }
      });
      for (var c = n.firstChild; c; c = c.nextSibling) node(c);
    }
  }
  function apply(root) { busy = true; try { node(root || document.body); } finally { busy = false; } }
  var mo = new MutationObserver(function (list) {
    if (busy) return; busy = true;
    try {
      list.forEach(function (m) {
        if (m.type === 'characterData') node(m.target);
        else if (m.type === 'attributes') node(m.target);
        else m.addedNodes.forEach(function (n) { node(n); });
      });
    } finally { busy = false; }
  });
  function start() {
    document.documentElement.lang = lang;
    apply(document.body); document.title = lang === 'en' ? 'Mika · chat with real people' : document.title;
    mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'aria-label', 'title'] });
  }
  window.I18N = {
    get lang() { return lang; }, LANGS: LANGS,
    t: function (fr) { if (lang !== 'en') return fr; var t = tr(fr); return t == null ? fr : t; },
    set: function (l) {
      if (!LANGS[l] || l === lang) return; lang = l;
      try { localStorage.setItem(KEY, l); } catch (e) { /* ignore */ }
      document.documentElement.lang = l; apply(document.body);
      window.dispatchEvent(new CustomEvent('talkie:lang', { detail: l }));
    },
    chosen: function () { var v = get(); return v === 'fr' || v === 'en'; }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
