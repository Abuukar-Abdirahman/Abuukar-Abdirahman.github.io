import { PROFILE } from "../data";
import { LINKS, go } from "../nav";
import { Github, Linkedin, Mail } from "./icons";

export default function Footer() {
  const socials = [
    { label: "GitHub", href: PROFILE.github, Icon: Github },
    PROFILE.linkedin && { label: "LinkedIn", href: PROFILE.linkedin, Icon: Linkedin },
    { label: "Email", href: `mailto:${PROFILE.email}`, Icon: Mail },
  ].filter(Boolean);

  return (
    <footer className="border-t border-border bg-surface px-4 pt-16 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <button
              onClick={() => go("home")}
              className="font-display text-2xl font-bold tracking-tight text-ink"
            >
              {PROFILE.initials}
              <span className="text-accent">.</span>
            </button>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              {PROFILE.role} — {PROFILE.location}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
            {LINKS.filter((l) => l.id !== "home").map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="font-mono text-xs uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent-ink"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-7 text-center font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
