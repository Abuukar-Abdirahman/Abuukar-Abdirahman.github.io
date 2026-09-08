import { useEffect, useRef, useState } from "react";

/**
 * Fades and lifts its children into place the first time they enter the
 * viewport. `prefers-reduced-motion` is handled in index.css, which pins
 * .reveal elements to their final state.
 */
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-[6px]"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
