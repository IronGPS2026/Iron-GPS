'use client';

import { useEffect, useRef, useState } from 'react';

/** Cuenta ascendente cuando el número entra en pantalla. */
export function AnimatedNumber({
  value,
  suffix,
  duration = 1300,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setDisplay(value); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          let t0: number | null = null;
          const step = (ts: number) => {
            if (t0 === null) t0 = ts;
            const p = Math.min((ts - t0) / duration, 1);
            setDisplay(Math.floor((1 - Math.pow(1 - p, 3)) * value));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });

    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString('es-CO')}
      {suffix ? <span className="u">{suffix}</span> : null}
    </span>
  );
}
