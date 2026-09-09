const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round" };
// `rest` is spread last so callers can override stroke weight, fill, etc.
const I = ({ className, children, ...rest }) => <svg viewBox="0 0 24 24" className={className} {...base} {...rest}>{children}</svg>;

export const Sun = (p) => <I {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" /></I>;
export const Moon = (p) => <I {...p}><path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z" /></I>;
export const Send = (p) => <I {...p}><path d="M21 3 10.5 13.5M21 3l-6.8 18-4-8.2L2 10z" /></I>;
export const Menu = (p) => <I {...p}><path d="M4 7h16M4 12h16M4 17h16" /></I>;
export const X = (p) => <I {...p}><path d="M6 6l12 12M18 6 6 18" /></I>;
export const ArrowRight = (p) => <I {...p}><path d="M5 12h14M13 6l6 6-6 6" /></I>;
export const ArrowUpRight = (p) => <I {...p}><path d="M7 17 17 7M8 7h9v9" /></I>;
export const Download = (p) => <I {...p}><path d="M12 4v11M7 10l5 5 5-5M4 19h16" /></I>;
export const Github = (p) => <I {...p}><path d="M9 19c-4.5 1.4-4.5-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.9 2.7 5.9 3 5.9 3a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.5 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></I>;
export const Linkedin = (p) => <I {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></I>;
export const Mail = (p) => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></I>;
export const Phone = (p) => <I {...p}><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M11 18h2" /></I>;
export const Whatsapp = (p) => <I {...p}><path d="M3.5 20.5 5 15.8a8.5 8.5 0 1 1 3.2 3.2z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a4 4 0 0 1-2-2l1-1-1-2z" /></I>;
export const Pin = (p) => <I {...p}><path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" /><circle cx="12" cy="10" r="2.2" /></I>;
export const Graduation = (p) => <I {...p}><path d="m2 9 10-5 10 5-10 5z" /><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v5" /></I>;
export const Globe = (p) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></I>;
export const Code = (p) => <I {...p}><path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" /></I>;
export const Database = (p) => <I {...p}><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></I>;
export const Server = (p) => <I {...p}><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></I>;
export const Plug = (p) => <I {...p}><path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4" /></I>;
export const Sparkle = (p) => <I {...p}><path d="M12 3c.6 4.5 3.5 7.4 8 8-4.5.6-7.4 3.5-8 8-.6-4.5-3.5-7.4-8-8 4.5-.6 7.4-3.5 8-8z" /></I>;
export const Coffee = (p) => <I {...p}><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 10h1.5a2.5 2.5 0 0 1 0 5H17M7 4c0 1 1 1 1 2M11 4c0 1 1 1 1 2" /></I>;
export const Briefcase = (p) => <I {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" /></I>;
export const Check = (p) => <I {...p}><path d="m5 12 4.5 4.5L19 7" /></I>;
export const ArrowDown = (p) => <I {...p}><path d="M12 5v14M6 13l6 6 6-6" /></I>;
export const Copy = (p) => <I {...p}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" /></I>;
export const Clock = (p) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5.2l3.2 2" /></I>;
export const Alert = (p) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5M12 16.2v.3" /></I>;
export const Spinner = (p) => <I {...p}><path d="M12 3a9 9 0 1 0 9 9" /></I>;

const MAP = { code: Code, phone: Phone, database: Database, server: Server, plug: Plug, sparkle: Sparkle, coffee: Coffee, pin: Pin, graduation: Graduation, globe: Globe };
export const Icon = ({ name, className }) => { const C = MAP[name] || Code; return <C className={className} />; };
