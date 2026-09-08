import { useEffect, useState } from "react";
import { PROFILE, CURRENTLY } from "../data";
import { go } from "../nav";
import { ArrowRight, ArrowDown, Download, Github, Linkedin, Mail, Check, Pin } from "./icons";

export default function Hero() {
  const [shown, setShown] = useState(false);

  // Waits one frame so the entrance transition has a state to animate from.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const enter = (delay) => ({
    // `block` matters because some of these wrap <span>s inside the <h1>.
    className: `block transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
      shown ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-[6px]"
    }`,
    style: { transitionDelay: `${delay}ms` },
  });

  const socials = [
    { label: "GitHub", href: PROFILE.github, Icon: Github },
    PROFILE.linkedin && { label: "LinkedIn", href: PROFILE.linkedin, Icon: Linkedin },
    { label: "Email", href: `mailto:${PROFILE.email}`, Icon: Mail },
  ].filter(Boolean);

  return (
    <section id="home" className="relative px-4 pt-32 pb-16 sm:px-6 sm:pt-40 lg:px-8 lg:pt-44 lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        {/* ── Left column ─────────────────────────────────────── */}
        <div>
          {PROFILE.available && (
            <div {...enter(0)}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted shadow-soft">
                <span className="relative grid h-1.5 w-1.5 place-items-center">
                  <span className="absolute h-1.5 w-1.5 animate-pulse-ring rounded-full bg-accent" />
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Available for new projects
              </span>
            </div>
          )}

          <h1 className="mt-7 font-display font-bold text-ink">
            <span {...enter(80)}>
              <span className="block text-[3.5rem] leading-[0.92] sm:text-[4.5rem] lg:text-[5.25rem]">
                {PROFILE.firstName}
              </span>
            </span>
            <span {...enter(150)}>
              <span className="text-outline mt-1 block text-[2.25rem] leading-[1.05] sm:text-[2.9rem] lg:text-[3.4rem]">
                {PROFILE.lastName}
              </span>
            </span>
          </h1>

          <div {...enter(220)}>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-accent-ink">
                {PROFILE.role}
              </p>
            </div>
          </div>

          <div {...enter(280)}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {PROFILE.tagline}
            </p>
          </div>

          <div {...enter(360)}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => go("projects")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-accent-2"
              >
                See my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={PROFILE.cv}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-ink"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </div>

          <div {...enter(430)}>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
              <div className="flex items-center gap-2.5">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted transition-all hover:-translate-y-1 hover:border-accent hover:text-accent-ink"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
              <span className="hidden h-8 w-px bg-border sm:block" />
              <p className="flex items-center gap-2 font-mono text-xs text-muted">
                <Pin className="h-3.5 w-3.5 text-accent" />
                {PROFILE.location}
                <span className="text-border">/</span>
                {PROFILE.timezone}
              </p>
            </div>
          </div>
        </div>

        {/* ── Right column: portrait ──────────────────────────── */}
        <div
          className={`relative mx-auto w-full max-w-sm transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:max-w-none ${
            shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "180ms" }}
        >
          {/* Offset composition: an accent slab sits behind and to the
              bottom-right, with the framed photo overlapping it top-left.
              Built for a rectangular photo — a cut-out PNG would instead
              want the photo sitting directly on the slab. */}
          <div className="relative aspect-[5/5.6]">
            <div className="absolute inset-y-8 left-10 right-0 rounded-[2rem] bg-accent" />
            <div className="grid-lines absolute inset-y-8 left-10 right-0 rounded-[2rem] opacity-25" />

            <div className="absolute inset-y-0 left-0 right-10 overflow-hidden rounded-[2rem] border border-border bg-card shadow-lift">
              <img
                src="/portrait.png"
                alt={`Portrait of ${PROFILE.name}`}
                className="h-full w-full object-cover object-top"
              />
              {/* Warms the cool studio backdrop so it sits with the palette. */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/25 via-transparent to-transparent" />
            </div>
          </div>

          {/* "Working with" card, floating over the bottom-left corner. */}
          <div className="absolute -bottom-6 -left-2 w-60 animate-float rounded-2xl border border-border bg-card/90 p-5 shadow-lift backdrop-blur-md sm:-left-6 sm:w-68">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              Working with
            </p>
            <ul className="mt-3.5 flex flex-col gap-2.5">
              {CURRENTLY.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                  <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-accent text-white">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`mx-auto mt-20 hidden max-w-6xl transition-opacity duration-1000 lg:block ${
          shown ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "700ms" }}
      >
        <button
          onClick={() => go("about")}
          className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent-ink"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors group-hover:border-accent">
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </span>
          Scroll
        </button>
      </div>
    </section>
  );
}
