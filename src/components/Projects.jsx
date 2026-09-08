import { PROJECTS, MORE_PROJECTS } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Icon, ArrowUpRight } from "./icons";

const featured = PROJECTS.filter((p) => p.featured);
const rest = PROJECTS.filter((p) => !p.featured);

/** Renders as an <a> when a link exists, otherwise a plain <div>. */
function cardProps(link) {
  return link ? { as: "a", href: link, target: "_blank", rel: "noreferrer" } : { as: "div" };
}

function Tags({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] font-medium text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function FeaturedCard({ project, index }) {
  const { as: Tag, ...linkAttrs } = cardProps(project.link);
  return (
    <Tag
      {...linkAttrs}
      className="group relative block overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="grid gap-0 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-accent-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-6 bg-border" />
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              Featured
            </span>
          </div>

          <div className="mt-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl font-bold text-ink sm:text-4xl">{project.title}</h3>
              <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">
                {project.role}
              </p>
            </div>
            {project.link && (
              <ArrowUpRight className="h-6 w-6 shrink-0 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            )}
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{project.description}</p>

          <div className="mt-7">
            <Tags items={project.tags} />
          </div>
        </div>

        {/* Metric panel — only rendered when the project has a hard number. */}
        {project.metric && (
          <div className="relative flex flex-col justify-center gap-2 overflow-hidden border-t border-border bg-accent p-8 text-white lg:border-l lg:border-t-0 lg:p-10">
            <div className="grid-lines absolute inset-0 opacity-25" />
            <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-white/15">
              <Icon name={project.icon} className="h-5 w-5" />
            </span>
            <p className="relative mt-3 font-display text-5xl font-bold leading-none">
              {project.metric.value}
            </p>
            <p className="relative text-sm leading-relaxed text-white/85">{project.metric.label}</p>
          </div>
        )}
      </div>
    </Tag>
  );
}

function ProjectCard({ project, index }) {
  const { as: Tag, ...linkAttrs } = cardProps(project.link);
  return (
    <Tag
      {...linkAttrs}
      className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-lift"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent-ink transition-colors group-hover:bg-accent group-hover:text-white">
          <Icon name={project.icon} className="h-5.5 w-5.5" />
        </span>
        <span className="font-mono text-xs font-semibold text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">
        {project.role}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <div className="mt-6">
        <Tags items={project.tags} />
      </div>

      {project.link && (
        <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-ink">
          View project <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      )}
    </Tag>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="03"
            label="Projects"
            title="Selected work"
            description="Production systems built for real clients — telecom, retail, education and NGOs."
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-4">
          {featured.map((project, i) => (
            <Reveal key={project.title}>
              <FeaturedCard project={project} index={i} />
            </Reveal>
          ))}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 90}>
                <ProjectCard project={project} index={featured.length + i} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-4 rounded-3xl border border-dashed border-border p-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Also built
            </p>
            <ul className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {MORE_PROJECTS.map(({ title, detail }) => (
                <li key={title} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    <span className="font-semibold text-ink">{title}</span> — {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
