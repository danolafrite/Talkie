# Talkie

Parle de ce que tu veux, avec quelqu'un qui est là maintenant.

Application web installable (PWA) : salon en direct, conversations de 2 à 4 personnes, notification quand quelqu'un publie un thème, assistant IA qui tient compagnie en attendant, sujets du jour, statistiques anonymes.

## Lancer en local

    npm install
    npm start

Puis ouvre http://localhost:3000. Les notifications demandent une adresse en https : elles ne marchent qu'une fois l'app en ligne.

## Variables d'environnement

| Nom | Rôle |
| --- | --- |
| `VAPID_PUBLIC`, `VAPID_PRIVATE` | Clés des notifications (la privée reste secrète). `npm run keys` en génère. |
| `VAPID_SUBJECT` | `mailto:` suivi de ton adresse e-mail |
| `ANTHROPIC_API_KEY` | Active l'assistant IA et les sujets du jour. Sans elle : liste de sujets fixe, pas d'assistant. |
| `AI_DAILY_CAP` | Nombre maximum d'appels à l'IA par jour (300 par défaut) pour maîtriser le coût |
| `AI_MODEL` | Modèle utilisé (`claude-haiku-5-5` par défaut) |
| `ADMIN_KEY` | Mot de passe de la page de statistiques : `/admin?key=ton-mot-de-passe` |
| `PORT` | Fourni par l'hébergeur |

## Limites actuelles

- Pas de base de données : invitations, conversations et statistiques vivent en mémoire et disparaissent au redémarrage.
- Les signalements sont écrits dans les journaux du serveur. Personne ne les examine automatiquement.
- Pas de comptes, pas de vérification d'âge. À prévoir avant d'ouvrir au public.

## Anti-bots (optionnel)
| Variable | Rôle |
|---|---|
| `TURNSTILE_SITE_KEY` | Clé publique Cloudflare Turnstile (gratuit) |
| `TURNSTILE_SECRET_KEY` | Clé secrète Turnstile (à ne jamais publier) |

Sans ces deux clés, la vérification anti-bot est désactivée. La confirmation « 18 ans et plus » reste obligatoire.

## Voix de Mika (facultative)

Sans réglage, Mika « gazouille » (voix synthétisée dans le navigateur, gratuite). Pour une vraie voix mignonne et fluide :

| Variable | Rôle |
|---|---|
| `OPENAI_API_KEY` | active la voix neuronale pour les phrases d'accueil de Mika (jamais pour les messages des gens) |
| `TTS_VOICE` | voix OpenAI, `coral` par défaut (essaie `nova`, `shimmer`) |
| `TTS_DAILY_CAP` | nombre maximum de phrases générées par jour, 400 par défaut |
| `TTS_PITCH` | hauteur de la voix : `1.12` par défaut (plus aigu et pétillant), `1` pour la voix brute, jusqu'à `1.3` |
| `TTS_STYLE` | consigne de style de la voix (texte libre) |

## Mika dans les conversations, lieux

| Variable | Rôle |
|---|---|
| `SPONT_DELAY_MS` / `SPONT_GAP_MS` | délai avant qu'il réagisse spontanément (3,5 s) et écart minimal entre deux interventions (50 s) |
| `GEOCODE_URL` | service de recherche de villes (Open-Meteo par défaut, gratuit, sans clé) |

## Mika compagnon (v13)

L'onglet « Mika » est la chambre de Mika : il accueille, pose des questions, se souvient, s'inquiète. Il utilise la même clé `ANTHROPIC_API_KEY` (endpoint `/api/companion`, limité à 30 messages/minute/IP, compté dans `AI_DAILY_CAP`). La mémoire (souvenirs, humeurs, discussion) est stockée **sur le téléphone** (`localStorage`) et envoyée à chaque message ; rien n'est gardé sur le serveur. Les messages de détresse déclenchent une réponse fixe (3114) sans appel à l'IA.
Onglets : Mika (chambre), Salon (le salon Talkie d'avant), Moi (avatar, humeurs, souvenirs, garde-robe en maquette).

## Chambre 3D (v14)

La chambre et Mika sont en 3D (three.js). Le code source est dans `src3d/scene3d.js` ; le fichier servi est `public/scene3d.js` (déjà généré, rien à faire pour déployer). Pour le modifier : `npm i three esbuild` dans un dossier à part, puis `esbuild scene3d.js --bundle --minify --format=iife --global-name=Mika3DMod --outfile=public/scene3d.js`. Si l'appareil ne sait pas faire de 3D, l'app garde le Mika en 2D. Ajoute `?no3d` à l'adresse pour tester ce mode.

## 3D partout, quêtes et boutique (v15)

- Avatars, scène du chat, aperçu du créateur d'avatar, tuiles de la garde-robe : tout est en 3D (même moteur que Mika, `src3d/scene3d.js`). Sans 3D sur l'appareil, l'app retombe sur les dessins 2D.
- **Quêtes du jour** (3 petits gestes d'auto-soin, dont « dire son humeur » et « papoter dans le Salon » qui se valident toutes seules) → **pétales 🌸** → tenues de Mika et décorations de la chambre (ours en peluche, néon cœur). Tenues 💎 premium : maquette, aucun paiement. Tout est stocké sur le téléphone (`talkie.game`).
- Mika connaît l'avancement des quêtes (champ `quests` envoyé à `/api/companion`) et félicite sans presser.

## v17 — Classe du Professeur Bobby + Place 3D

- **Onglet 🎓 Bobby** (entre Monde et Boutique) : scène 3D (ton avatar et Mika de dos, Bobby en face, tableau noir). Bobby parle uniquement la langue choisie (allemand par défaut ; anglais, espagnol, italien à débloquer), à l'écrit ou à l'oral (dictée du navigateur + voix de synthèse). **Mika corrige le dernier message** et explique en français (carte rouge → vert). Niveaux A1–B2, scénarios (se présenter, café, libre, voyage, entretien), carnet de vocabulaire, XP, série de jours. Progression dans `localStorage` (`talkie.bob`).
- Serveur : `POST /api/bobby` (`lib/bobby.js`) — un seul appel IA par tour, modération (coordonnées bloquées, détresse → 3114), limite 30/min/IP, mode scripté sans IA.
- **Boutique › 🎓 Bobby** : packs de scénarios, Prononciation+, carnet, niveaux B1/B2, langues, tenues de Bobby (toque, blouse). Payés en pétales 🌸 (gagnés en jouant). Les 💎 restent une maquette.
- **Monde 3D** : une Place (fontaine, sakuras) partagée par shards de 12. Messages WebSocket `plaza`, `wpos`, `emote` (+ `pj`/`pl`/`pm`/`pe` en retour). **Aucun texte libre** sur la Place : positions + 5 emotes seulement, majeurs uniquement, blocages respectés, limitations de débit. Mika se balade aussi sur la Place.
- Build 3D : `scene3d.js` (≈620 Ko) à remplacer en entier, comme `app.js`, `index.html`, `server.js` et le dossier `lib/`.

## v18 — retours de Steph

- **iPhone** : zoom par pincement / double-tap bloqué (gestes + `touch-action`), champs à 16 px, barre d'onglets masquée quand le clavier est ouvert, champ défilé dans la vue.
- **Langue** (FR/EN) : `public/i18n.js` (dictionnaire à compléter). Choix à l'écran d'âge, à la création de l'avatar et dans Réglages. Mika et Bobby répondent dans la langue de l'interface, et dans celle de l'utilisateur s'il écrit autrement.
- **Voix au choix** (Douce / Pétillante / Calme / Grave) à la création et dans Réglages ; `GET /api/tts?...&v=<voix>&l=<fr|en>`.
- **Tutoriel** guidé au premier lancement (rejouable dans Moi). Onglet « Bobby » renommé **Classe**.
- **Monde** : compteur sur l'onglet, amis (💛, stockés sur le téléphone), bâtiments cliquables (Chambre, Classe, Boba, Boutique, grande roue + bonus quotidien), fenêtre avatar (saluer / inviter / ami).
- **Visites** : invitation → visite de la chambre en 3D à deux, bulles courtes modérées (`hinv/hacc/hpos/hemo/hsay/hleave`).
- **Boutique** : aperçu en 3D du décor et des tenues de Bobby avant achat, 12 articles de décor.

## v19

- **Voix** : texte nettoyé avant lecture ("aww" ne se lit plus « A double V »), voix kawaii (coral par défaut), diagnostic Réglages › « Tester la voix » (`/api/voice-check`). iPhone : la phrase est téléchargée en entier puis jouée sur un élément audio « déverrouillé » au premier toucher.
- **Boubou** : nouveau prompt (naturel, varié, émotions, exemples), modèle `CHAT_MODEL` (défaut `claude-sonnet-5-5`) pour Boubou et le prof Bobby.
- **Bugs** : sieste (roulis/hauteur remis à zéro), micro de la Classe blindé (garde-fous, timeout 12 s, arrêt en quittant l'onglet).
- **Monde** : chat texte modéré (`psay` → `ps`, bulles au-dessus des avatars), bâtiments alignés : Chambre, Boulangerie, Friperie, Déco, Karaoké + grande roue. Chaque magasin ouvre un intérieur 3D (`initInterior`). Karaoké : 3 chansons gratuites (domaine public) + 3 « 💎 bientôt ».
- **Onglets** : Chambre · Monde · Salon (rooms) · Classe · Moi. La Boutique complète reste accessible depuis Moi.
- **Interface simplifiée** : défis du jour repliés, textes d'aide retirés, infos légales repliées, raccourcis (partager/notifs/installer) dans Réglages.
- **Polices** : DynaPuff (titres) + Fredoka (texte), embarquées.
- **Avatar** : code à 6 caractères (couleur ×12, oreilles ×6, regard ×5, accessoire ×12, forme ×4, queue ×4), anciens codes à 4 chiffres toujours valides.
- **Compte Supabase** : lien magique par e-mail, sauvegarde du Mika (table `profiles`, voir `supabase.sql`), choix en cas de conflit, suppression de la sauvegarde.
