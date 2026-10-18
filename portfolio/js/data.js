/**
 * data.js — Source unique des données du portfolio TONATO Sandro Eugène.
 * Contenu bilingue FR/EN extrait des CV officiels.
 */

const PORTFOLIO_DATA = {

  personal: {
    name: "TONATO Sandro Eugène",
    firstName: "Sandro",
    role: {
      fr: "Développeur Full-Stack (Web & Mobile)",
      en: "Full-Stack Developer (Web & Mobile)"
    },
    tagline: {
      fr: "Concevoir des solutions web et mobiles utiles",
      en: "Building Useful Web & Mobile Solutions"
    },
    location: {
      fr: "Cotonou, Bénin",
      en: "Cotonou, Benin"
    },
    nationality: {
      fr: "Béninoise",
      en: "Beninese"
    },
    email: "eugenetonato@gmail.com",
    phone: "+229 01 50 19 64 07",
    whatsapp: "+229 01 50 19 64 07",
    whatsappLink: "https://wa.me/2290150196407",
    github: "https://github.com/eugenetonato-ux",
    linkedin: "",
    cvUrl: {
      fr: "assets/cv-fr.pdf",
      en: "assets/cv-en.pdf"
    }
  },

  stats: [
    { value: "15", suffix: "+", key: "projects" },
    { value: "12", suffix: "+", key: "technologies" },
    { value: "1", suffix: " an+", key: "experience" },
    { value: "100", suffix: "%", key: "clients" }
  ],

  services: [
    {
      number: "01",
      icon: "code",
      title: { fr: "Développement Web", en: "Web Development" },
      desc: {
        fr: "Création d'applications web modernes, rapides et adaptées aux besoins réels avec Python (Django), PHP et JavaScript.",
        en: "Building modern, fast and reliable web applications tailored to real needs using Python (Django), PHP and JavaScript."
      }
    },
    {
      number: "02",
      icon: "rocket",
      title: { fr: "Développement Mobile", en: "Mobile Development" },
      desc: {
        fr: "Conception d'applications mobiles cross-platform réactives et fluides avec Angular, Ionic et Firebase.",
        en: "Designing responsive, smooth cross-platform mobile applications with Angular, Ionic and Firebase."
      }
    },
    {
      number: "03",
      icon: "server",
      title: { fr: "Backend & APIs REST", en: "Backend & REST APIs" },
      desc: {
        fr: "Développement d'architectures backend robustes, d'APIs sécurisées et intégration de services tiers (notamment paiements).",
        en: "Developing robust backend architectures, secure APIs, and integrating third-party services, including payment gateways."
      }
    },
    {
      number: "04",
      icon: "database",
      title: { fr: "Bases de Données", en: "Databases" },
      desc: {
        fr: "Modélisation, optimisation et administration de bases de données relationnelles et temps réel (PostgreSQL, MySQL, Supabase, Firebase).",
        en: "Modeling, optimizing and administering relational and real-time databases (PostgreSQL, MySQL, Supabase, Firebase)."
      }
    },
    {
      number: "05",
      icon: "workflow",
      title: { fr: "Applications Métier & Gestion", en: "Business & Management Apps" },
      desc: {
        fr: "Conception de logiciels de gestion sur mesure pour automatiser et fiabiliser les opérations quotidiennes de votre activité.",
        en: "Creating custom management platforms to automate and streamline daily business operations."
      }
    },
    {
      number: "06",
      icon: "briefcase",
      title: { fr: "Déploiement VPS & Cloud", en: "VPS & Cloud Deployment" },
      desc: {
        fr: "Mise en production, configuration de serveurs VPS (Hostinger), hébergement cloud et suivi continu jusqu'au lancement.",
        en: "Deploying applications to production, configuring VPS servers (Hostinger), cloud hosting and full support through launch."
      }
    }
  ],

  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "Anime.js"],
    backend: ["Python", "Django", "PHP", "APIs REST", "Intégration Paiements"],
    mobile: ["Ionic", "Angular", "Firebase"],
    database: ["PostgreSQL", "MySQL", "Supabase", "Firebase Realtime / Firestore"],
    tools: ["Git", "GitHub", "VS Code", "Android Studio"],
    deployment: ["VPS (Hostinger)", "Firebase Hosting", "Linux / Bash"]
  },

  languages: [
    { name: "Xwla", level: { fr: "Langue maternelle", en: "Native" } },
    { name: "Français", level: { fr: "Courant", en: "Fluent" } },
    { name: "Fon", level: { fr: "Courant", en: "Fluent" } },
    { name: "Mina", level: { fr: "Courant", en: "Fluent" } },
    { name: "Sahouè", level: { fr: "Courant", en: "Fluent" } },
    { name: "Anglais", level: { fr: "Professionnel", en: "Professional" } }
  ],

  process: [
    {
      number: "01",
      title: { fr: "Découverte & Analyse", en: "Discovery & Analysis" },
      desc: {
        fr: "Comprendre le problème réel, analyser le contexte et définir les objectifs concrets avant toute ligne de code.",
        en: "Understanding the real need, analyzing context, and defining actionable goals before writing any code."
      }
    },
    {
      number: "02",
      title: { fr: "Architecture & Conception", en: "Architecture & Design" },
      desc: {
        fr: "Structurer la base de données, modéliser les APIs et concevoir une interface utilisateur intuitive.",
        en: "Structuring the database, designing clean APIs, and crafting an intuitive user experience."
      }
    },
    {
      number: "03",
      title: { fr: "Développement & Intégration", en: "Development & Integration" },
      desc: {
        fr: "Développer le frontend et le backend avec un code propre, moderne et évolutif, assisté par l'IA.",
        en: "Building clean, scalable frontend and backend code, boosted by modern AI-assisted workflows."
      }
    },
    {
      number: "04",
      title: { fr: "Tests & Déploiement", en: "Testing & Deployment" },
      desc: {
        fr: "Valider le bon fonctionnement de l'application et la déployer en conditions réelles sur VPS ou Cloud.",
        en: "Rigorous testing and seamless deployment to production on VPS or Cloud infrastructure."
      }
    },
    {
      number: "05",
      title: { fr: "Suivi & Évolution", en: "Support & Evolution" },
      desc: {
        fr: "Accompagnement post-lancement, maintenance continue et ajouts de fonctionnalités selon les retours.",
        en: "Post-launch support, ongoing maintenance, and feature enhancements based on user feedback."
      }
    }
  ],

  values: [
    { fr: "Solutions adaptées au besoin réel", en: "Solutions built around real-world needs" },
    { fr: "Code propre, sécurisé et maintenable", en: "Clean, secure, and maintainable code" },
    { fr: "Interfaces ergonomiques et fluides", en: "Smooth, ergonomic user interfaces" },
    { fr: "Communication claire et transparence", en: "Clear communication and transparency" },
    { fr: "Apprentissage continu et veille IA", en: "Continuous learning and AI-driven workflows" },
    { fr: "Accompagnement complet jusqu'au déploiement", en: "End-to-end guidance all the way to deployment" }
  ],

  aboutTimeline: [
    {
      period: "2025",
      title: { fr: "Baccalauréat — Mention Bien", en: "High School Diploma (Baccalauréat) — Honours" },
      desc: {
        fr: "Obtention du Baccalauréat avec la mention Bien, sanctionnant un parcours scolaire solide et rigoureux.",
        en: "Graduated with honours (Mention Bien), reflecting strong academic focus and analytical skills."
      }
    },
    {
      period: "2026",
      title: { fr: "Formation en développement web et mobile (Assistée par IA)", en: "Web & Mobile Development Training (AI-assisted)" },
      desc: {
        fr: "Programme intensif axé sur la conception, l'architecture et le déploiement d'applications web et mobiles complètes avec intégration des outils IA.",
        en: "Intensive programme covering full-stack web and mobile application architecture, API integration and AI-assisted workflows."
      }
    },
    {
      period: "2026 (En cours)",
      title: { fr: "Développeur Full-Stack — Projets & Déploiements", en: "Full-Stack Developer — Projects & Deployments" },
      desc: {
        fr: "Conception et déploiement d'applications complètes : plateformes de gestion, applications mobiles, intégration d'APIs de paiement et mise en production sur VPS Hostinger.",
        en: "Designed and deployed full-stack web platforms, mobile apps, integrated third-party payment APIs, and managed Hostinger VPS deployments."
      }
    }
  ],

  projectCategories: ["Web", "Mobile", "Backend", "Vitrine"],

  projects: [
    {
      id: "delice-express",
      title: { fr: "Délice Express", en: "Délice Express" },
      shortDesc: {
        fr: "Plateforme complète de commande en ligne et livraison de restauration rapide avec panier interactif et menu dynamique.",
        en: "Full-featured online food ordering and fast delivery web application with interactive cart and dynamic menu."
      },
      problem: {
        fr: "Permettre aux clients de consulter facilement un menu varié et gourmand, de composer leur commande en direct et de commander rapidement sans friction ni attente téléphonique.",
        en: "Enabling customers to easily browse an extensive menu, build their order in real time, and place delivery or pickup orders without phone queue bottlenecks."
      },
      solution: {
        fr: "Une application web e-commerce réactive conçue en Python/Django, dotée d'une navigation fluide par catégories, d'un panier dynamique interactif et d'une interface chaleureuse et gourmande.",
        en: "A responsive e-commerce web app built with Python and Django, featuring seamless category navigation, a real-time shopping cart, and a modern food-ordering UX."
      },
      features: [
        { fr: "Catalogue interactif avec filtrage par catégories (Burgers, Pizzas, Plats, Desserts, Boissons)", en: "Interactive catalog with category filtering (Burgers, Pizzas, Dishes, Desserts, Drinks)" },
        { fr: "Système de panier d'achat interactif avec calcul automatique des totaux", en: "Interactive cart system with live total calculations and badge notifications" },
        { fr: "Interface responsive optimisée mobile pour une commande en quelques clics", en: "Mobile-first responsive interface designed for quick ordering on smartphones" },
        { fr: "Gestion backend complète des produits, prix (en FCFA) et commandes", en: "Full backend administration of menu items, pricing, and incoming customer orders" }
      ],
      context: {
        fr: "Projet complet de commande en ligne développé en Python / Django et déployé en production sur PythonAnywhere.",
        en: "Full-scale online ordering web platform developed in Python / Django and deployed live on PythonAnywhere."
      },
      results: {
        fr: "Application déployée en production, parcours d'achat fluide et expérience utilisateur attrayante.",
        en: "Successfully deployed in production, delivering a smooth checkout flow and engaging customer experience."
      },
      technologies: ["Python", "Django", "JavaScript", "HTML5", "CSS3", "FontAwesome", "PythonAnywhere"],
      category: "Web",
      url: "https://deliceexpress.pythonanywhere.com",
      github: "https://github.com/eugenetonato-ux",
      image: "assets/projects/delice-1.jpg",
      gallery: [
        "assets/projects/delice-1.jpg",
        "assets/projects/delice-2.jpg",
        "assets/projects/delice-3.jpg",
        "assets/projects/delice-pos.jpg"
      ]
    },
    {
      id: "archivex",
      title: { fr: "ArchivEx", en: "ArchivEx" },
      shortDesc: {
        fr: "Plateforme d'anciens sujets d'examen, de corrigés types et de fiches de révision structurées.",
        en: "Platform for past examination papers, verified solutions, and structured study summaries."
      },
      problem: {
        fr: "L'accès aux anciennes épreuves scolaires et aux corrigés fiables est souvent dispersé, lent et difficile pour les élèves et étudiants au Bénin.",
        en: "Access to quality past exam papers and verified answers is often scattered, slow, and hard to find for students in Benin."
      },
      solution: {
        fr: "Une plateforme web centralisée, rapide et intuitive permettant de rechercher, prévisualiser et télécharger instantanément des sujets d'examens et corrigés classés par matière et niveau.",
        en: "A centralized, fast web platform allowing learners to search, preview, and download past exam papers and answer keys categorized by subject and academic level."
      },
      features: [
        { fr: "Moteur de recherche et filtres multicritères (matière, niveau, année)", en: "Search engine with multi-criteria filters (subject, grade level, year)" },
        { fr: "Consultation en ligne et téléchargement optimisé des documents", en: "Online document preview and optimized downloading" },
        { fr: "Fiches synthétiques de résumés de cours", en: "Concise course revision summary sheets" },
        { fr: "Interface responsive optimisée pour les connexions mobiles", en: "Responsive interface optimized for low-bandwidth mobile connections" }
      ],
      context: {
        fr: "Projet conçu et développé en Python / Django pour faciliter l'accès aux ressources éducatives.",
        en: "Designed and built with Python / Django to make educational resources readily accessible to all students."
      },
      results: {
        fr: "Organisation claire des archives pédagogiques et navigation fluide facilitant les révisions des apprenants.",
        en: "Clean organization of educational archives and smooth navigation aiding student exam preparation."
      },
      technologies: ["Python", "Django", "PostgreSQL", "HTML5", "CSS3", "Git"],
      category: "Web",
      url: "https://archivex.online",
      github: "https://github.com/eugenetonato-ux",
      image: "assets/projects/archivex-1.jpg",
      gallery: [
        "assets/projects/archivex-1.jpg",
        "assets/projects/archivex-2.jpg",
        "assets/projects/archivex-3.jpg"
      ]
    },
    {
      id: "immolink",
      title: { fr: "iMMoLink", en: "iMMoLink" },
      shortDesc: {
        fr: "Plateforme immobilière reliant propriétaires et locataires à travers les 12 départements du Bénin.",
        en: "Real estate platform connecting landlords and tenants across all 12 departments of Benin."
      },
      problem: {
        fr: "Trouver un logement au Bénin est fastidieux : multiplication d'intermédiaires informels, frais élevés et manque d'offres centralisées et vérifiées.",
        en: "Finding housing in Benin is often hindered by informal middlemen, non-standardized fees, and a lack of verified listings."
      },
      solution: {
        fr: "Une plateforme immobilière moderne offrant un catalogue clair de biens géolocalisés à travers les 12 départements, avec contact direct entre propriétaires et locataires.",
        en: "A nationwide real estate web platform featuring verified listings across all 12 departments with direct landlord-tenant connections."
      },
      features: [
        { fr: "Filtrage avancé par département, commune, type de bien et budget", en: "Advanced filtering by department, municipality, property type, and budget" },
        { fr: "Fiches détaillées des biens avec photos, loyer et commodités", en: "Detailed property sheets with photo galleries, pricing, and amenities" },
        { fr: "Mise en relation directe propriétaire-locataire", en: "Direct contact mechanism between prospective tenants and property owners" },
        { fr: "Tableau de bord de gestion des annonces pour les bailleurs", en: "Landlord dashboard to easily publish and manage property listings" }
      ],
      context: {
        fr: "Solution développée avec Python et Django, conçue pour répondre à une problématique locale d'accès au logement.",
        en: "Developed with Python and Django, targeted at solving local rental market challenges in Benin."
      },
      results: {
        fr: "Plateforme performante, couvrant l'ensemble du territoire national avec une expérience utilisateur claire.",
        en: "Performant platform with nationwide coverage and an intuitive user onboarding experience."
      },
      technologies: ["Python", "Django", "PostgreSQL", "JavaScript", "HTML5", "CSS3", "PythonAnywhere"],
      category: "Web",
      url: "https://immolink.pythonanywhere.com",
      github: "https://github.com/eugenetonato-ux",
      image: "assets/projects/immolink-1.jpg",
      gallery: [
        "assets/projects/immolink-1.jpg",
        "assets/projects/immolink-2.jpg",
        "assets/projects/immolink-3.jpg"
      ]
    },
    {
      id: "pharma-gest",
      title: { fr: "Pharma-Gest", en: "Pharma-Gest" },
      shortDesc: {
        fr: "Application web de gestion d'officine pharmaceutique, suivi des stocks et des ventes.",
        en: "Web application for pharmacy dispensary operations, stock management, and sales tracking."
      },
      problem: {
        fr: "La gestion manuelle des officines engendre des erreurs d'inventaire, des ruptures de médicaments critiques et des pertes liées aux dates de péremption.",
        en: "Manual pharmacy inventory records lead to stock discrepancies, critical drug shortages, and expiration losses."
      },
      solution: {
        fr: "Un logiciel web de gestion centralisé pour suivre les stocks en temps réel, automatiser les alertes de réapprovisionnement et enregistrer les ventes au comptoir.",
        en: "A centralized web management system providing real-time stock tracking, automated reorder alerts, and counter sales logging."
      },
      features: [
        { fr: "Gestion complète du catalogue de médicaments et traçabilité des lots", en: "Drug catalog management with full batch and dosage traceability" },
        { fr: "Alertes automatiques de stock bas et suivi des dates de péremption", en: "Automated alerts for low stock levels and upcoming expiration dates" },
        { fr: "Module d'encaissement et suivi des transactions quotidiennes", en: "POS checkout module and daily sales transaction tracking" },
        { fr: "Rapports statistiques d'activité et d'inventaire", en: "Inventory valuation and statistical activity reports" }
      ],
      context: {
        fr: "Application métier robuste conçue avec Python, Django et MySQL pour la gestion d'officines.",
        en: "Robust business application engineered with Python, Django, and MySQL for pharmacy teams."
      },
      results: {
        fr: "Fiabilisation des inventaires, réduction des pertes et gain de temps substantiel au quotidien pour le personnel.",
        en: "Reliable inventory records, reduced expired waste, and substantial daily time savings for pharmacy staff."
      },
      technologies: ["Python", "Django", "MySQL", "Bootstrap", "JavaScript"],
      category: "Backend",
      url: "",
      github: "https://github.com/eugenetonato-ux",
      image: ""
    },
    {
      id: "cookly",
      title: { fr: "Cookly", en: "Cookly" },
      shortDesc: {
        fr: "Application mobile de recettes de cuisine, recherche par ingrédients et inspiration culinaire.",
        en: "Cross-platform mobile recipe app with ingredient-based search and culinary discovery."
      },
      problem: {
        fr: "Trouver rapidement des idées de recettes adaptées aux ingrédients qu'on a déjà sous la main peut être laborieux sur les sites classiques.",
        en: "Finding quick recipe ideas matched to what is already in one's kitchen is tedious on traditional websites."
      },
      solution: {
        fr: "Une application mobile moderne et fluide permettant de découvrir des recettes, de les préparer étape par étape et de sauvegarder ses favoris avec synchronisation temps réel.",
        en: "A modern, fluid mobile app offering step-by-step cooking instructions, ingredient filtering, and real-time favorites sync via Firebase."
      },
      features: [
        { fr: "Recherche intelligente par ingrédients, temps de préparation et difficulté", en: "Smart filtering by available ingredients, preparation time, and difficulty" },
        { fr: "Mode guidé pas-à-pas pour suivre la préparation en cuisine", en: "Interactive step-by-step guide for easy hands-on cooking" },
        { fr: "Gestion des recettes favorites et synchronisation instantanée Firebase", en: "Favorites list with instant Firebase cloud synchronization" },
        { fr: "Interface mobile tactile ergonomique et ultra-réactive", en: "Polished mobile touch interface built with Ionic and Angular" }
      ],
      context: {
        fr: "Application mobile développée avec le framework Ionic, Angular et Firebase pour offrir une expérience native fluide sur smartphone.",
        en: "Cross-platform mobile app built with Ionic, Angular, and Firebase delivering a native smartphone feel."
      },
      results: {
        fr: "Expérience utilisateur fluide, synchronisation instantanée et forte praticité en conditions d'usage réel.",
        en: "Smooth user experience, instant data sync, and high practical usability in daily kitchen use."
      },
      technologies: ["Ionic", "Angular", "Firebase", "TypeScript", "Android Studio"],
      category: "Mobile",
      url: "",
      github: "https://github.com/eugenetonato-ux",
      image: "assets/projects/cookly-1.jpg",
      gallery: [
        "assets/projects/cookly-1.jpg",
        "assets/projects/cookly-2.jpg",
        "assets/projects/cookly-3.jpg"
      ]
    },
    {
      id: "achatoo",
      title: { fr: "Achatoo", en: "Achatoo" },
      shortDesc: {
        fr: "Plateforme d'achats groupés pour mutualiser la demande et débloquer des tarifs de gros avantageux.",
        en: "Group-buying platform pooling orders to unlock bulk wholesale discounts for consumers."
      },
      problem: {
        fr: "Les consommateurs paient le prix fort au détail pour des produits de première nécessité ou des équipements, faute de pouvoir acheter en grande quantité.",
        en: "Individual buyers pay steep retail prices for essentials and equipment because they cannot meet bulk order minimums."
      },
      solution: {
        fr: "Une plateforme d'achats groupés où les acheteurs s'associent sur des campagnes ciblées. Une fois le quota d'acheteurs atteint, le tarif préférentiel est débloqué.",
        en: "A collective purchasing platform where buyers join campaigns to meet vendor order thresholds and unlock wholesale pricing."
      },
      features: [
        { fr: "Catalogue de campagnes d'achats groupés actives avec jauge de progression", en: "Active campaign catalog with live progress gauges toward minimum thresholds" },
        { fr: "Intégration d'APIs de paiement sécurisé pour valider les contributions", en: "Secure third-party payment API integration to handle buyer deposits" },
        { fr: "Gestion des statuts de campagne et notifications automatisées", en: "Automated campaign status tracking and participant notification alerts" },
        { fr: "Espace administrateur pour configurer les offres et fournisseurs", en: "Admin dashboard to manage product campaigns, tiers, and supplier orders" }
      ],
      context: {
        fr: "Projet alliant logique e-commerce, intégration d'APIs de paiement et gestion transactionnelle en Python / Django.",
        en: "Engineered in Python / Django combining transactional logic, e-commerce workflows, and payment gateway APIs."
      },
      results: {
        fr: "Parcours d'achat simplifié, sécurisation des fonds et concept à fort impact pour le pouvoir d'achat.",
        en: "Streamlined buying experience, secure transactions, and a high-impact model for community purchasing power."
      },
      technologies: ["Python", "Django", "PostgreSQL", "APIs Paiement", "JavaScript"],
      category: "Web",
      url: "",
      github: "https://github.com/eugenetonato-ux",
      image: ""
    },
    {
      id: "landing-pages",
      title: { fr: "Landing Pages — Hôtellerie & Services", en: "Landing Pages — Hospitality & Services" },
      shortDesc: {
        fr: "Conception de sites vitrines modernes et optimisés SEO pour Aurelia Hotel, Melhouse et Rayan Paysagiste.",
        en: "Modern, high-converting showcase websites for Aurelia Hotel, Melhouse and Rayan Paysagiste."
      },
      problem: {
        fr: "Les entreprises de services perdent des clients potentiels lorsqu'elles manquent d'une présence en ligne professionnelle et réactive.",
        en: "Service businesses lose prospective customers when they lack a fast, professional online presence."
      },
      solution: {
        fr: "Création de sites vitrines sur mesure, élégants, responsives et orientés conversion, intégrant des appels à l'action clairs (WhatsApp, formulaires, réservations).",
        en: "Crafting customized, elegant, and conversion-driven landing pages with clear call-to-actions (WhatsApp, inquiries, bookings)."
      },
      features: [
        { fr: "Design responsive sur mesure adapté à chaque identité de marque", en: "Tailor-made responsive design reflecting each client's unique brand identity" },
        { fr: "Intégration directe de boutons WhatsApp et formulaires de contact", en: "Direct WhatsApp contact and streamlined reservation inquiry forms" },
        { fr: "Optimisation du référencement naturel (SEO) et des temps de chargement", en: "Search Engine Optimization (SEO) and fast performance tuning" },
        { fr: "Mise en valeur visuelle des prestations et services", en: "High-impact visual showcasing of amenities, rooms, and landscaping projects" }
      ],
      context: {
        fr: "Réalisation de plusieurs sites vitrines professionnels pour des acteurs de l'hôtellerie, de la location et des services.",
        en: "Showcase websites delivered for clients in the hospitality, real estate rental, and landscaping sectors."
      },
      results: {
        fr: "Image de marque valorisée, augmentation des prises de contact directes et visibilité renforcée.",
        en: "Enhanced professional brand image, increased direct client inquiries, and stronger digital visibility."
      },
      technologies: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript", "SEO", "Firebase", "Netlify"],
      category: "Vitrine",
      url: "https://hotel-aurelia.web.app",
      extraLinks: [
        { label: { fr: "Visiter Aurelia Hotel", en: "Visit Aurelia Hotel" }, url: "https://hotel-aurelia.web.app" },
        { label: { fr: "Visiter Mel House", en: "Visit Mel House" }, url: "https://melhouse.netlify.app" }
      ],
      github: "https://github.com/eugenetonato-ux",
      image: "assets/projects/landing-1.jpg",
      gallery: [
        "assets/projects/landing-1.jpg",
        "assets/projects/landing-2.jpg",
        "assets/projects/landing-3.jpg",
        "assets/projects/landing-4.jpg"
      ]
    }
  ]
};
