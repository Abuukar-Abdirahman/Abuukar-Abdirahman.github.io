import { TIMELINE } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Briefcase, Graduation } from "./icons";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-border bg-surface px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading index="04" label="Experience" title="Work and education" align="left" />
        </Reveal>

        <div className="relative mt-16 pl-10 sm:pl-14">
          {/* Spine. Inset top and bottom so it stops at the first and last node. */}
          <span className="absolute left-[17px] top-3 bottom-3 w-px bg-border sm:left-[23px]" />

          <div className="flex flex-col gap-5">
            {TIMELINE.map(({ kind, title, org, period, points }, i) => {
              const NodeIcon = kind === "Education" ? Graduation : Briefcase;
              return (
                <Reveal key={title} delay={i * 110} className="relative">
                  <span className="absolute -left-10 top-6 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border border-border bg-card text-accent-ink shadow-soft sm:-left-14 sm:h-11 sm:w-11">
                    <NodeIcon className="h-4 w-4" />
                  </span>

                  <div className="rounded-3xl border border-border bg-card p-7 transition-colors hover:border-accent">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-ink">
                        {kind}
                      </span>
                      {period && (
                        <span className="font-mono text-xs text-muted">{period}</span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm text-muted">{org}</p>

                    {points.length > 0 && (
                      <ul className="mt-5 flex flex-col gap-2.5">
                        {points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
