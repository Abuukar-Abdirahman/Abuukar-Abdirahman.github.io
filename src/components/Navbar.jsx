import { useEffect, useState } from "react";
import { PROFILE } from "../data";
import { LINKS, WHATSAPP, go } from "../nav";
import { useScrollProgress } from "../hooks";
import { Sun, Moon, Send, Menu, X } from "./icons";

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlights whichever section currently occupies the middle of the viewport.
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Locks background scrolling while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navigate = (id) => {
    setOpen(false);
    go(id);
  };

  const iconButton =
    "grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-ink transition-colors hover:border-accent hover:text-accent";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-3 sm:pl-6 ${
          scrolled ? "border-border bg-card/80 shadow-soft" : "border-transparent bg-card/30"
        }`}
      >
        <button
          onClick={() => navigate("home")}
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          {PROFILE.initials}
          <span className="text-accent">.</span>
        </button>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => navigate(l.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === l.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {active === l.id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-accent-soft" />
              )}
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle colour theme" className={iconButton}>
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Let's talk <Send className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className={`${iconButton} lg:hidden`}
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Reading progress — a hairline that fills as you move down the page. */}
      <div
        className={`mx-auto mt-1.5 h-px max-w-6xl origin-left bg-accent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `scaleX(${progress})` }}
      />

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-card/95 p-3 shadow-lift backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => navigate(l.id)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                  active === l.id ? "bg-accent-soft text-accent-ink" : "text-muted hover:bg-surface hover:text-ink"
                }`}
              >
                {l.label}
                <span className="font-mono text-[10px] text-muted">
                  {String(LINKS.indexOf(l) + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3.5 text-sm font-semibold text-canvas"
            >
              Let's talk <Send className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
