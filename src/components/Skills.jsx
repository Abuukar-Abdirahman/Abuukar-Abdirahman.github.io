import { SKILLS } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Icon } from "./icons";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-surface px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="02"
            label="Skills"
            title="Tools and technologies I work with"
            description="A toolkit built on real client work — Laravel backends, Flutter apps and the infrastructure that runs them."
          />
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(({ icon, title, items, accent }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <div
                className={`group relative h-full overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                  accent ? "border-accent/40 bg-accent-soft" : "border-border bg-card"
                }`}
              >
                {/* Large ghosted ordinal in the corner. */}
                <span className="pointer-events-none absolute -right-2 -top-3 font-display text-6xl font-bold text-ink/[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors ${
                    accent
                      ? "bg-accent text-white"
                      : "bg-accent-soft text-accent-ink group-hover:bg-accent group-hover:text-white"
                  }`}
                >
                  <Icon name={icon} className="h-5.5 w-5.5" />
                </span>

                <p className="mt-6 font-display text-lg font-semibold text-ink">{title}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-3 py-1 font-mono text-[11px] font-medium ${
                        accent
                          ? "border-accent/30 bg-card/60 text-accent-ink"
                          : "border-border bg-surface text-muted"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
