# Tablée

Parle de ce que tu veux, avec quelqu'un qui est là maintenant.

Application web installable (PWA) : salon en direct, conversations de 2 à 4 personnes, notification quand quelqu'un publie un thème.

## Lancer en local

    npm install
    npm start

Puis ouvre http://localhost:3000. Les notifications demandent une adresse en https : elles ne marchent qu'une fois l'app en ligne.

## Variables d'environnement

| Nom | Rôle |
| --- | --- |
| `VAPID_PUBLIC` | Clé publique des notifications |
| `VAPID_PRIVATE` | Clé privée des notifications (à garder secrète, ne jamais la mettre dans le code) |
| `VAPID_SUBJECT` | `mailto:` suivi de ton adresse e-mail (recommandé) |
| `PORT` | Fourni par l'hébergeur |

Générer une paire de clés : `npm run keys`.

## Ce que ce prototype ne fait pas encore

- Pas de base de données : les invitations et les conversations vivent en mémoire et disparaissent au redémarrage.
- Les signalements sont écrits dans les journaux du serveur et dans `data/reports.jsonl`. Personne ne les examine automatiquement.
- Pas de comptes : chaque téléphone a un identifiant aléatoire. Quelqu'un qui vide les données de son navigateur change d'identité.
- Pas de vérification d'âge. À prévoir avant d'ouvrir au public.
