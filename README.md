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
