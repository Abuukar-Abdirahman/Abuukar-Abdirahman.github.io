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
  tagline: "Reliable backends, mobile apps, and the integrations that connect them.",
  email: "abuukarc.raxman12@gmail.com",
  phone: "+252 619 590 997",
  whatsapp: "252619590997",
  location: "Mogadishu, Somalia",
  timezone: "EAT · UTC+3",
  github: "https://github.com/Abuukar-Abdirahman",
  linkedin: "", // TODO: add your LinkedIn URL, e.g. https://linkedin.com/in/your-handle
  cv: "/Abukar_Abdirahman_CV.pdf",
  // Small pill above your name in the hero. Set to "" to hide it entirely.
  badge: "3+ years building production systems",
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

// The floating card over the hero portrait.
export const CURRENTLY_TITLE = "What I do";
export const CURRENTLY = [
  "Backend systems & REST APIs",
  "iOS & Android apps",
  "Telecom & payment integrations",
  "Deployment & hosting",
  "AI-assisted development",
];

// Scrolling ticker under the hero. Grouped backend → mobile → deploy →
// integrations → tools. Keep it a highlight reel: past ~20 items it starts
// reading as an inventory rather than a set of strengths.
export const MARQUEE = [
  "Laravel",
  "PHP",
  "Eloquent",
  "Composer",
  "MySQL",
  "REST APIs",
  "FilamentPHP",
  "Flutter",
  "Firebase",
  "Push notifications",
  "Google Play",
  "App Store",
  "DigitalOcean",
  "NGINX",
  "SSH",
  "USSD automation",
  "EVC-Plus",
  "Git & GitHub",
  "Mixpanel",
  "Claude Code",
];

export const STATS = [
  { value: 3, suffix: "+", label: "Years experience" },
  { value: 30, suffix: "+", label: "Projects delivered" },
  { value: 150, suffix: "+", label: "Apps deployed on Daato" },
];

// Heading shown above the About paragraphs.
export const ABOUT_TITLE = "Owning the whole stack, from schema to production";

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
  {
    icon: "code",
    title: "Backend",
    items: ["PHP", "Laravel", "Eloquent", "REST API design", "FilamentPHP", "Roles & permissions"],
  },
  {
    icon: "phone",
    title: "Mobile",
    items: ["Flutter", "Firebase", "Push notifications", "Google Play", "App Store"],
  },
  { icon: "database", title: "Databases", items: ["MySQL", "Schema design", "Migrations"] },
  { icon: "server", title: "Deployment", items: ["DigitalOcean", "NGINX", "SSH", "Git & GitHub"] },
  {
    icon: "plug",
    title: "Integrations",
    items: ["USSD automation", "SMS parsing", "EVC-Plus", "Mixpanel"],
    // Highlighted: the rarest of these skills, and the one the featured
    // project and the About copy both lead on.
    accent: true,
  },
  { icon: "sparkle", title: "AI & LLM APIs", items: ["Claude Code", "LLM APIs", "NVIDIA APIs"] },
];

export const PROJECTS = [
  {
    icon: "phone",
    title: "Daato",
    role: "Full-stack developer",
    summary: "Automated airtime, data and mobile-money top-ups for resellers.",
    description:
      "Automates top-ups for resellers who sell airtime, data bundles and mobile money. A sender app on the shop's phone forwards incoming EVC-Plus payment SMS to Daato, which identifies the customer and amount, matches the right package, and dials the USSD code to deliver the top-up — then records the transaction, confirms delivery, and retries failed sends. I built the Laravel and MySQL core and the FilamentPHP dashboard resellers run their business from.",
    metric: { value: "150+", label: "apps deployed in the platform ecosystem" },
    tags: ["Laravel", "MySQL", "FilamentPHP", "USSD automation", "SMS parsing"],
    link: "", // TODO: Play Store / website link
    featured: true,
  },
  {
    icon: "phone",
    title: "Dawrah",
    role: "Full-stack developer",
    summary: "Cycle tracking with Islamic guidance for Muslim women.",
    description:
      "An app for Muslim women that combines period tracking with Islamic guidance on prayer, fasting and Taharah. It predicts cycles, logs symptoms, and includes a Ghusl guide, daily Quran verses and duas, and an anonymous community forum, in Somali and English. I built the Flutter app and the Laravel and MySQL backend behind it.",
    tags: ["Flutter", "Firebase", "Laravel", "MySQL"],
    link: "https://apps.apple.com/ca/app/dawrah/id6759103526",
  },
  {
    icon: "coffee",
    title: "Ossob Coffee",
    role: "Full-stack developer",
    summary: "Coffee ordering app with cashback rewards and a membership tier.",
    description:
      "A mobile ordering app for a coffee shop. Customers browse the menu, order ahead, save favourite drinks, and earn 5% cashback on every purchase, with a paid membership tier for extra perks. Staff manage products and orders from a FilamentPHP back office. I built the Flutter app and the Laravel backend.",
    tags: ["Flutter", "Firebase", "Laravel", "FilamentPHP"],
    link: "https://apps.apple.com/ca/app/ossob-coffee/id6761236370",
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
    period: "2022 — 2026",
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
