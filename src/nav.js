import { PROFILE } from "./data";

export const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const WHATSAPP = `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
  `Hi ${PROFILE.firstName}, I'd like to talk about a project.`
)}`;

export const go = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
