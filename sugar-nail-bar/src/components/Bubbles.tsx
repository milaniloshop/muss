'use client';

import { useMemo } from 'react';

type Bubble = {
  left: number;
  size: number;
  dur: number;
  delay: number;
  drift: number;
  max: number;
};

/**
 * The champagne-bubble motif: soft circles drifting upward. Reused in the hero
 * and faintly between sections to tie the page together as one sensory thread.
 */
export function Bubbles({
  count = 14,
  className,
  seed = 1,
  intensity = 1,
}: {
  count?: number;
  className?: string;
  seed?: number;
  intensity?: number;
}) {
  const bubbles = useMemo<Bubble[]>(() => {
    // Pure, deterministic pseudo-random so server + client markup match.
    const rand = (n: number) => {
      const x = Math.sin(n * 12.9898 + seed * 78.233) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => {
      const b = i * 7;
      return {
        left: rand(b + 1) * 100,
        size: 5 + rand(b + 2) * 16,
        dur: 9 + rand(b + 3) * 12,
        delay: -rand(b + 4) * 14,
        drift: (rand(b + 5) - 0.5) * 60,
        max: (0.25 + rand(b + 6) * 0.5) * intensity,
      };
    });
  }, [count, seed, intensity]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}
      aria-hidden
    >
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={
            {
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              '--dur': `${b.dur}s`,
              '--delay': `${b.delay}s`,
              '--drift': `${b.drift}px`,
              '--max': b.max,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
