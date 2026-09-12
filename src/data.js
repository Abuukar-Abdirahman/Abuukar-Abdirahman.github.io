// ─────────────────────────────────────────────────────────────
// ALL YOUR CONTENT LIVES HERE. Edit this file, nothing else,
// to change what the site says.
//
// Search for "TODO" to find the few things still missing.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Abukar Abdirahman Ibrahim",
  firstName: "Abukar",
  lastName: "Abdirahman Ibrahim",
  initials: "AAI",
  role: "Full-Stack Developer",
  tagline:
    "I build Laravel backends, Flutter mobile apps and the telecom and payment integrations that connect them — and I own them from architecture to deployment.",
  email: "abuukarc.raxman12@gmail.com",
  phone: "+252 619 590 997",
  whatsapp: "252619590997",
  location: "Mogadishu, Somalia",
  timezone: "EAT · UTC+3",
  github: "https://github.com/Abuukar-Abdirahman",
  linkedin: "", // TODO: add your LinkedIn URL, e.g. https://linkedin.com/in/your-handle
  cv: "/Abukar_Abdirahman_CV.pdf",
  available: true, // set false to hide the "available for work" badge
};

// ── Contact form ─────────────────────────────────────────────
// Messages are relayed to PROFILE.email by FormSubmit. No account, no API key.
//
// ACTIVATION (once only): the first message ever sent through this form makes
// FormSubmit email you a confirmation link. Click it, and every later message
// is delivered straight to your inbox. Until you do, submissions are held.
//
// Optional: after activating, FormSubmit gives you a random alias like
// "a1b2c3d4e5f6". Swapping the email below for that alias keeps your address
// out of the page source. Not required — your email is already shown on the
// contact section anyway.
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${PROFILE.email}`;

export const CURRENTLY = [
  "Laravel & FilamentPHP",
  "Flutter & Firebase",
  "Telecom / payment APIs",
  "AI-assisted development",
];

// Scrolling ticker under the hero.
export const MARQUEE = [
  "Laravel",
  "PHP",
  "MySQL",
  "REST APIs",
  "FilamentPHP",
  "Flutter",
  "Firebase",
  "DigitalOcean",
  "NGINX",
  "Hormuud API",
  "Git & GitHub",
  "Mixpanel",
  "Claude Code",
];

export const STATS = [
  { value: 3, suffix: "+", label: "Years experience" },
  { value: 10, suffix: "+", label: "Projects delivered" },
  { value: 4, suffix: "", label: "Mobile apps shipped" },
  { value: 3, suffix: "", label: "Languages spoken" },
];

// First entry is set in large display type; the second is body text.
export const ABOUT = [
  `I'm a full-stack developer in Mogadishu. I build the systems businesses run on — the database, the API and the admin tools behind them — and the mobile apps people actually hold.`,
  `Most of my work is in Laravel, with Flutter on mobile. A lot of it is transactional — orders, payments, and integrations with telecom providers — where there's no undo button and it has to be right the first time. Over three years I've built these systems for clients in telecom, retail, education and the NGO sector. I like owning a project the whole way through, from designing the database to deploying the server it runs on — in-house, as a freelancer, and on systems for my university.`,
];

export const HIGHLIGHTS = [
  { icon: "graduation", title: "BSc Computer Science", detail: "SIMAD University, Mogadishu" },
  { icon: "pin", title: "Based in Mogadishu, Somalia", detail: "Open to remote and on-site work" },
  { icon: "globe", title: "Somali · English · Arabic", detail: "Native · Professional · Intermediate" },
];

export const SKILLS = [
  { icon: "code", title: "Backend", items: ["PHP", "Laravel", "REST API design", "FilamentPHP"] },
  { icon: "phone", title: "Mobile", items: ["Flutter", "Firebase", "Google Play", "App Store"] },
  { icon: "database", title: "Databases", items: ["MySQL", "Database design", "Query optimisation"] },
  { icon: "server", title: "Deployment", items: ["DigitalOcean", "NGINX", "SSH", "Git & GitHub"] },
  { icon: "plug", title: "Integrations", items: ["Hormuud API", "Payment gateways", "Mixpanel"] },
  { icon: "sparkle", title: "AI-assisted development", items: ["Claude Code"], accent: true },
];

export const PROJECTS = [
  {
    icon: "phone",
    title: "Daato",
    role: "Full-stack developer",
    summary: "Data-exchange platform for trading mobile bundles across telecom providers.",
    description:
      "A data-exchange app that lets users trade mobile data bundles across telecom providers including Hormuud and Somtel. Core logic in Laravel and MySQL, admin dashboard in FilamentPHP, and Hormuud API integration for telecom-side transactions.",
    metric: { value: "150+", label: "apps deployed in the platform ecosystem" },
    tags: ["Laravel", "MySQL", "FilamentPHP", "Hormuud API"],
    link: "", // TODO: Play Store / website link
    featured: true,
  },
  {
    icon: "phone",
    title: "Dawrah",
    role: "Full-stack developer",
    summary: "Course platform delivered end to end, from Flutter UI to Laravel API.",
    description:
      "Mobile app built with Flutter and Firebase on the front end, backed by a Laravel and MySQL system. Delivered end to end, from UI to backend API integration.",
    tags: ["Flutter", "Firebase", "Laravel", "MySQL"],
    link: "", // TODO: Play Store / website link
  },
  {
    icon: "coffee",
    title: "Ossob Coffee",
    role: "Full-stack developer",
    summary: "Ordering app with a FilamentPHP back office for products and orders.",
    description:
      "Flutter and Firebase mobile app connected to a Laravel and MySQL backend, with product and order data managed through a FilamentPHP admin panel.",
    tags: ["Flutter", "Firebase", "Laravel", "FilamentPHP"],
    link: "", // TODO: Play Store / website link
  },
  {
    icon: "code",
    title: "Beder Electronics",
    role: "Backend developer",
    summary: "Laravel REST API layer wiring business logic to the storefront.",
    description:
      "Laravel and MySQL backend with REST APIs connecting business logic to the application's front end.",
    tags: ["Laravel", "MySQL", "REST API"],
    link: "", // TODO: website link
  },
];

export const MORE_PROJECTS = [
  {
    title: "Institutional Digital Repository",
    detail: "Digital repository system for SIMAD University — Laravel, MySQL, FilamentPHP.",
  },
  { title: "SwiftPharmacy", detail: "Pharmacy management platform — Laravel, MySQL, FilamentPHP." },
  { title: "HelGuri", detail: "Real-estate mobile app — Flutter and Firebase, backed by Laravel and MySQL." },
  { title: "NGO systems", detail: "Custom systems for NGO clients built with Laravel and MySQL." },
];

export const TIMELINE = [
  {
    kind: "Work",
    title: "Backend Engineer",
    org: "Autosom ICT",
    period: "2023 — Present", // TODO: correct these dates
    points: [
      "Developed and maintained backend systems using Laravel, MySQL and REST APIs for company products.",
      "Collaborated on system design and contributed to ongoing feature development and bug fixes.",
    ],
  },
  {
    kind: "Work",
    title: "Freelance Full-Stack / Backend Developer",
    org: "Self-employed",
    period: "2022 — Present", // TODO: correct these dates
    points: [
      "Delivered Laravel-based backend systems and web applications for multiple independent clients.",
      "Provided technical support and development assistance to colleagues on their own company projects.",
    ],
  },
  {
    kind: "Education",
    title: "BSc, Computer Science",
    org: "SIMAD University — Mogadishu, Somalia",
    period: "", // TODO: add years
    points: [],
  },
];

// What you want to be hired for — shown in the contact section.
export const SERVICES = [
  "Laravel backend & REST API development",
  "FilamentPHP admin panels and dashboards",
  "Flutter mobile apps with Firebase",
  "Telecom & payment gateway integrations",
];
