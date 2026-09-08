import { STATS } from "../data";
import { useCountUp } from "../hooks";
import Reveal from "./Reveal";

function Stat({ value, suffix, label }) {
  const [ref, current] = useCountUp(value);
  return (
    <div ref={ref} className="px-2 text-center lg:px-8 lg:text-left">
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
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-border">
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
