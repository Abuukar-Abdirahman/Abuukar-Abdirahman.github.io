import { ABOUT, ABOUT_TITLE, HIGHLIGHTS, PROFILE } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Icon, Download } from "./icons";

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="01"
            label="About me"
            title={ABOUT_TITLE}
            align="left"
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            {/* First paragraph is set larger — it carries the section. */}
            <Reveal delay={60}>
              <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                {ABOUT[0]}
              </p>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{ABOUT[1]}</p>
            </Reveal>
            <Reveal delay={200}>
              <a
                href={PROFILE.cv}
                download
                className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink transition-colors hover:text-ink"
              >
                <Download className="h-3.5 w-3.5" /> Download full CV
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3">
            {HIGHLIGHTS.map(({ icon, title, detail }, i) => (
              <Reveal key={title} delay={140 + i * 90}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon name={icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
