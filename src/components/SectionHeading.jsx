/**
 * Section header. `index` renders a monospace ordinal (01, 02, …) which
 * gives the page a consistent editorial rhythm as you scroll.
 * `align="left"` is used where the section body is asymmetric.
 */
export default function SectionHeading({ index, label, title, description, align = "center" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        {index && <span className="font-mono text-xs font-semibold text-accent-ink">{index}</span>}
        <span className="h-px w-8 bg-border" />
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {label}
        </span>
      </div>

      <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.1] text-ink sm:text-[2.75rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}
