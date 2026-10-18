# Portfolio — TONATO Sandro Eugène

Portfolio multi-pages (HTML/Tailwind CSS/JavaScript), bilingue FR/EN, thème clair/sombre, animé avec Anime.js, formulaire de contact relié à EmailJS.

## Structure du projet

```
index.html            Accueil (hero, stats, aperçu à-propos/services, méthode, valeurs, aperçu projets, CTA)
about.html             Page "À propos" complète (parcours, timeline)
services.html          Page "Services" complète (6 services)
skills.html            Page "Compétences" (stack technique)
projects.html          Page "Projets" (grille filtrable)
project-detail.html    Détail d'un projet (via ?id=slug-du-projet)
contact.html           Coordonnées + formulaire de contact (EmailJS)

css/style.css           Design tokens, effets, états d'animation

js/data.js              ⭐ Source unique du contenu (infos perso, stats, services,
                         compétences, projets, processus, valeurs, timeline)
js/translations.js      ⭐ Dictionnaire FR/EN pour tous les libellés d'interface
js/i18n.js               Moteur de traduction (data-i18n / data-i18n-attr)
js/icons.js              Icônes SVG en ligne
js/components.js         Navbar + footer partagés, thème clair/sombre, menu mobile
js/render.js              Génère le contenu dynamique à partir de data.js
js/animations.js          Toutes les animations Anime.js (reveal au scroll, hero,
                          compteurs de stats, micro-interactions), respecte
                          prefers-reduced-motion
js/contact.js             Validation du formulaire + envoi EmailJS
js/main.js                Bouton "retour en haut"

robots.txt / sitemap.xml  SEO technique (remplacer [À-RENSEIGNER-DOMAINE])
assets/favicon.svg        Favicon
```

## Ce qu'il reste à faire avant mise en ligne

1. **Fichiers CV (FR & EN)** — Placez simplement vos deux fichiers PDF dans le dossier `assets/` avec les noms :
   - `assets/cv-fr.pdf` (version française)
   - `assets/cv-en.pdf` (version anglaise)
   Le site détecte automatiquement la langue sélectionnée par le visiteur et ouvre le bon fichier.

2. **Formulaire de contact (EmailJS)** — Ouvrez `js/contact.js` et remplacez :
   ```js
   const EMAILJS_PUBLIC_KEY  = 'À_RENSEIGNER';
   const EMAILJS_SERVICE_ID  = 'À_RENSEIGNER';
   const EMAILJS_TEMPLATE_ID = 'À_RENSEIGNER';
   ```
   par vos identifiants créés sur [emailjs.com](https://www.emailjs.com/).
   Le template EmailJS doit utiliser les champs `from_name`, `reply_to`,
   `subject` et `message` (ce sont les `name` des champs du formulaire).
   Tant que ces valeurs ne sont pas renseignées, le formulaire affiche un message clair invitant à vous contacter directement par WhatsApp ou email.

3. **SEO** — Remplacez `[À-RENSEIGNER-DOMAINE]` dans `robots.txt` et
   `sitemap.xml` par votre nom de domaine réel ou votre URL une fois le site déployé.

## Lancer le site en local

Le site n'utilise aucune requête `fetch()` entre pages (le header/footer sont
injectés en JavaScript), il peut donc être ouvert directement en double-cliquant
sur `index.html`. Pour un rendu identique à la production (et pour tester le
formulaire), un petit serveur local est recommandé :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Modifier une traduction

Toutes les chaînes d'interface (navigation, boutons, titres de section, messages
du formulaire) sont centralisées dans `js/translations.js`, sous les clés `fr`
et `en`. Le contenu propre à chaque élément (services, compétences, projets,
processus, valeurs, parcours) est dans `js/data.js`, où chaque champ traduisible
est un objet `{ fr: "...", en: "..." }`.
