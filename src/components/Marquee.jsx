import { MARQUEE } from "../data";

/**
 * Edge-to-edge scrolling tech ticker. The track holds two identical copies of
 * the list and translates by exactly -50%, so the loop is seamless.
 * `aria-hidden` on the duplicate keeps screen readers from reading it twice.
 */
export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/50 py-5">
      {/* Fades the strip out at both edges instead of cutting it off hard. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-canvas to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-canvas to-transparent sm:w-32" />

      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {MARQUEE.map((item) => (
              <li key={item} className="flex items-center">
                <span className="whitespace-nowrap px-6 font-display text-lg font-semibold text-muted sm:text-xl">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
