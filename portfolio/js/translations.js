/**
 * translations.js — Dictionnaire FR / EN.
 * Toute chaîne visible dans l'interface doit passer par ce fichier.
 * i18n.js applique ces valeurs aux éléments marqués [data-i18n="clé.pointée"].
 */

const TRANSLATIONS = {
  fr: {
    meta: {
      titleHome: "TONATO Sandro Eugène — Développeur Web & Mobile Full-Stack au Bénin",
      titleAbout: "À propos — TONATO Sandro Eugène",
      titleServices: "Services — TONATO Sandro Eugène",
      titleSkills: "Compétences — TONATO Sandro Eugène",
      titleProjects: "Projets — TONATO Sandro Eugène",
      titleContact: "Contact — TONATO Sandro Eugène",
      description: "Développeur full-stack web & mobile basé à Cotonou, Bénin. Applications web, mobile, backend, APIs et automatisation, de la conception jusqu'au déploiement."
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      cta: "Me contacter",
      langSwitch: "EN"
    },
    hero: {
      badge: "Disponible pour de nouveaux projets",
      title: "Je transforme des idées en applications web & mobiles utiles, modernes et performantes.",
      subtitle: "Développeur full-stack basé à Cotonou (Bénin), je conçois des applications, backends et apps mobiles qui résolvent de vrais problèmes — de la première idée jusqu'à la mise en production.",
      ctaProjects: "Voir mes projets",
      ctaContact: "Discutons de votre projet",
      ctaCv: "Télécharger mon CV",
      cvUnavailable: "Le fichier CV n'est pas encore déposé dans le dossier.",
      typed: "développeur.buildProject()"
    },
    stats: {
      projects: "Projets réalisés",
      technologies: "Technologies maîtrisées",
      experience: "Expérience continue",
      clients: "Satisfaction & engagement"
    },
    about: {
      eyebrow: "À propos",
      title: "Qui suis-je ?",
      intro: "Je suis développeur full-stack basé à Cotonou (Bénin), formé au développement web et mobile assisté par IA. Je conçois et déploie des applications complètes, des plateformes de gestion aux applications mobiles et sites vitrines, avec Python, PHP, Angular, Ionic et Firebase. Je déploie mes projets sur un VPS (Hostinger) et j'intègre des API tierces, notamment de paiement. J'apprends vite et j'aime transformer des besoins réels en produits qui fonctionnent.",
      approachTitle: "Mon approche",
      approach: "Je privilégie une approche orientée problème : comprendre le besoin réel avant d'écrire la moindre ligne de code, concevoir une architecture propre et scalable, et accompagner chaque projet jusqu'au déploiement effectif.",
      interestsTitle: "Domaines d'intérêt",
      interests: "Développement d'applications web et mobiles, architectures backend robustes, intégration d'APIs et de services de paiement, gestion de bases de données relationnelles et NoSQL, et utilisation des outils d'IA pour accélérer et fiabiliser la livraison.",
      problemSolvingTitle: "Ma manière de résoudre les problèmes",
      problemSolving: "Face à un défi technique, je décompose le problème en sous-ensembles clairs, j'analyse les solutions éprouvées, et j'itère rapidement pour livrer une solution fiable, maintenable et performante.",
      visionTitle: "Ma vision",
      vision: "Mettre la technologie et le code au service des entreprises et des utilisateurs au Bénin et à l'international, en créant des solutions logicielles concrètes, utiles et immédiatement exploitables.",
      timelineTitle: "Parcours",
      viewMore: "En savoir plus sur mon parcours"
    },
    services: {
      eyebrow: "Services",
      title: "Ce que je peux faire pour vous",
      subtitle: "Six domaines dans lesquels je peux vous accompagner, de la conception à la mise en ligne.",
      viewAll: "Voir tous les services"
    },
    skills: {
      eyebrow: "Stack technique",
      title: "Compétences",
      subtitle: "Les technologies que j'utilise réellement au quotidien.",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile & Hybride",
      database: "Bases de données",
      tools: "Outils",
      deployment: "Déploiement & Cloud",
      languagesTitle: "Langues maîtrisées"
    },
    projects: {
      eyebrow: "Réalisations",
      title: "Mes réalisations",
      subtitle: "Une sélection de réalisations phares parmi plus de 15 projets conçus et déployés.",
      filterAll: "Tous",
      viewProject: "Voir le projet",
      viewCode: "Code source",
      viewDetail: "Voir le détail",
      viewAll: "Voir tous les projets",
      empty: "Aucun projet dans cette catégorie pour le moment.",
      detail: {
        back: "Retour aux projets",
        context: "Contexte",
        problem: "Problème",
        solution: "Solution",
        features: "Fonctionnalités",
        technologies: "Technologies",
        results: "Résultats",
        links: "Liens",
        galleryTitle: "Captures d'écran & Aperçus",
        notFoundTitle: "Projet introuvable",
        notFoundText: "Ce projet n'existe pas ou n'est plus disponible.",
        notFoundCta: "Retour aux projets"
      }
    },
    process: {
      eyebrow: "Méthode",
      title: "Comment je travaille",
      subtitle: "Un processus clair, du premier échange jusqu'au suivi post-lancement."
    },
    values: {
      eyebrow: "Pourquoi moi",
      title: "Pourquoi travailler avec moi"
    },
    ctaFinal: {
      title: "Un projet en tête ?",
      subtitle: "Transformons votre idée en une solution concrète.",
      ctaStart: "Démarrer un projet",
      ctaProjects: "Voir mes réalisations"
    },
    contact: {
      eyebrow: "Contact",
      title: "Vous avez une idée ? Construisons-la ensemble.",
      subtitle: "Parlons de votre projet et voyons comment lui donner vie.",
      infoTitle: "Coordonnées",
      formName: "Nom",
      formEmail: "Email",
      formSubject: "Sujet",
      formMessage: "Message",
      formSubmit: "Envoyer le message",
      formSending: "Envoi en cours…",
      formSuccess: "Votre message a été envoyé. Merci, je reviens vers vous rapidement.",
      formError: "Une erreur est survenue lors de l'envoi. Réessayez ou écrivez-moi directement par email.",
      formNotConfigured: "Le formulaire n'est pas encore relié à un service d'envoi. Écrivez-moi directement par WhatsApp ou par email en attendant.",
      errors: {
        required: "Ce champ est requis.",
        email: "Veuillez saisir une adresse email valide.",
        minLength: "Ce champ est trop court."
      }
    },
    footer: {
      description: "Développeur full-stack web & mobile basé à Cotonou (Bénin). Applications web, mobile, backend et automatisation, de la conception jusqu'au déploiement.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      techTitle: "Technologies principales",
      rights: "Tous droits réservés.",
      langLabel: "Français | English",
      locationInline: "Cotonou, Bénin"
    },
    common: {
      close: "Fermer",
      menu: "Menu",
      toggleTheme: "Changer de thème",
      toggleLang: "Changer de langue",
      backToTop: "Retour en haut"
    }
  },

  en: {
    meta: {
      titleHome: "TONATO Sandro Eugène — Full-Stack Web & Mobile Developer in Benin",
      titleAbout: "About — TONATO Sandro Eugène",
      titleServices: "Services — TONATO Sandro Eugène",
      titleSkills: "Skills — TONATO Sandro Eugène",
      titleProjects: "Projects — TONATO Sandro Eugène",
      titleContact: "Contact — TONATO Sandro Eugène",
      description: "Full-stack web & mobile developer based in Cotonou, Benin. Web apps, mobile apps, backend, APIs and automation, from concept to production."
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cta: "Contact me",
      langSwitch: "FR"
    },
    hero: {
      badge: "Available for new projects",
      title: "I turn ideas into useful, modern and high-performing web & mobile applications.",
      subtitle: "Full-stack developer based in Cotonou (Benin), I build web applications, backends and mobile apps that solve real problems — from the first idea to production.",
      ctaProjects: "View my projects",
      ctaContact: "Let's talk about your project",
      ctaCv: "Download my CV",
      cvUnavailable: "The CV file is not uploaded yet.",
      typed: "developer.buildProject()"
    },
    stats: {
      projects: "Projects delivered",
      technologies: "Technologies mastered",
      experience: "Continuous experience",
      clients: "Dedication & client satisfaction"
    },
    about: {
      eyebrow: "About",
      title: "Who am I?",
      intro: "I am a full-stack developer based in Cotonou, Benin, trained in web and mobile development with AI assistance. I design and deploy complete applications, from management platforms to mobile apps and business websites, using Python, PHP, Angular, Ionic and Firebase. I deploy my projects on a VPS (Hostinger) and integrate third-party APIs, including payments. I learn quickly and enjoy turning real needs into working products.",
      approachTitle: "My approach",
      approach: "I focus on a problem-oriented approach: understanding real-world needs before writing a single line of code, designing clean and scalable architectures, and supporting each product all the way to production.",
      interestsTitle: "Areas of interest",
      interests: "Full-stack web and mobile application development, robust backend systems, third-party and payment API integrations, relational and NoSQL databases, and leveraging AI tools to accelerate development cycles.",
      problemSolvingTitle: "How I solve problems",
      problemSolving: "When tackling technical challenges, I break problems down into manageable components, evaluate the best-suited technologies, and iterate quickly to deliver reliable, maintainable solutions.",
      visionTitle: "My vision",
      vision: "Empowering businesses and end-users in Benin and worldwide through practical, robust, and impactful digital solutions that solve everyday challenges.",
      timelineTitle: "Journey",
      viewMore: "Read more about my journey"
    },
    services: {
      eyebrow: "Services",
      title: "What I can do for you",
      subtitle: "Six areas where I can support you, from design to launch.",
      viewAll: "View all services"
    },
    skills: {
      eyebrow: "Tech stack",
      title: "Skills",
      subtitle: "The technologies I actually use day to day.",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile & Hybrid",
      database: "Databases",
      tools: "Tools",
      deployment: "Deployment & Cloud",
      languagesTitle: "Languages"
    },
    projects: {
      eyebrow: "Work",
      title: "My work",
      subtitle: "A curated selection of featured works among 15+ projects designed and shipped.",
      filterAll: "All",
      viewProject: "View project",
      viewCode: "Source code",
      viewDetail: "View details",
      viewAll: "View all projects",
      empty: "No project in this category yet.",
      detail: {
        back: "Back to projects",
        context: "Context",
        problem: "Problem",
        solution: "Solution",
        features: "Features",
        technologies: "Technologies",
        results: "Results",
        links: "Links",
        galleryTitle: "Screenshots & Previews",
        notFoundTitle: "Project not found",
        notFoundText: "This project doesn't exist or is no longer available.",
        notFoundCta: "Back to projects"
      }
    },
    process: {
      eyebrow: "Method",
      title: "How I work",
      subtitle: "A clear process, from the first conversation to post-launch follow-up."
    },
    values: {
      eyebrow: "Why me",
      title: "Why work with me"
    },
    ctaFinal: {
      title: "Got a project in mind?",
      subtitle: "Let's turn your idea into a real solution.",
      ctaStart: "Start a project",
      ctaProjects: "See my work"
    },
    contact: {
      eyebrow: "Contact",
      title: "Got an idea? Let's build it together.",
      subtitle: "Let's talk about your project and see how to bring it to life.",
      infoTitle: "Contact details",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Send message",
      formSending: "Sending…",
      formSuccess: "Your message has been sent. Thanks, I'll get back to you shortly.",
      formError: "Something went wrong while sending. Please try again or email me directly.",
      formNotConfigured: "The form isn't connected to a sending service yet. Please reach out via WhatsApp or email in the meantime.",
      errors: {
        required: "This field is required.",
        email: "Please enter a valid email address.",
        minLength: "This field is too short."
      }
    },
    footer: {
      description: "Full-stack web & mobile developer based in Cotonou (Benin). Web applications, mobile apps, backend and automation, from concept to deployment.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      techTitle: "Core technologies",
      rights: "All rights reserved.",
      langLabel: "Français | English",
      locationInline: "Cotonou, Benin"
    },
    common: {
      close: "Close",
      menu: "Menu",
      toggleTheme: "Toggle theme",
      toggleLang: "Switch language",
      backToTop: "Back to top"
    }
  }
};

/** Utilitaire : lit une clé pointée ("nav.home") dans un objet de traduction. */
function tGet(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : null, obj);
}
