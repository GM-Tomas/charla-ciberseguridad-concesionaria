import { useEffect, useRef, useState } from 'react';
import { useDeck } from '../deck/DeckContext';

/* A number that animates 0 → to when its slide becomes active, with a
   quintic ease-out so the last digits settle gently. Safe under React
   StrictMode and formats with es-AR thousands separators by default. */
export default function CountUp({
  to,
  from = 0,
  duration = 1100,
  decimals = 0,
  prefix = '',
  suffix = '',
  locale = 'es-AR',
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  locale?: string;
}) {
  const { isStatic } = useDeck();
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(isStatic ? to : from);

  useEffect(() => {
    if (isStatic) {
      setVal(to);
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(to);
      return;
    }
    let raf = 0;
    let t0: number | null = null;
    const tick = (now: number) => {
      if (t0 === null) t0 = now;
      const p = Math.max(0, Math.min(1, (now - t0) / duration));
      setVal(from + (to - from) * (1 - Math.pow(1 - p, 5)));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setVal(to);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isStatic, to, from, duration]);

  const rounded =
    decimals === 0 ? Math.round(val) : Number(val.toFixed(decimals));
  const text =
    prefix +
    rounded.toLocaleString(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    suffix;

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {text}
    </span>
  );
}
