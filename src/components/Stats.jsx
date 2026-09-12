import { STATS } from "../data";
import { useCountUp } from "../hooks";
import Reveal from "./Reveal";

function Stat({ value, suffix, label }) {
  const [ref, current] = useCountUp(value);
  return (
    <div ref={ref} className="px-2 text-center sm:px-8 sm:text-left">
      <p className="font-display text-4xl font-bold tabular-nums text-ink sm:text-5xl">
        {current}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal className="mx-auto max-w-6xl">
        {/* Columns follow the number of stats, so the row stays even if one
            is added or removed in data.js. */}
        <div
          className={`grid gap-y-10 sm:gap-y-0 sm:divide-x sm:divide-border ${
            STATS.length === 3 ? "sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
