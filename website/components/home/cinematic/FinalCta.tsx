'use client';

import { motion, useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { ApertureSection } from './ApertureSection';

const WORDMARK = 'MILAN HYPE';
const EASE = [0.16, 1, 0.3, 1] as const;

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const letters = useMemo(() => WORDMARK.split(''), []);

  return (
    <ApertureSection id="enter" className="relative overflow-hidden bg-obsidian pb-8 pt-28 md:pt-36">
      <div className="vignette" />
      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="text-[10px] uppercase tracking-[0.32em] text-gunmetal">Enter</p>
        <p
          aria-hidden
          className="mt-6 font-display text-[clamp(2.5rem,10vw,7rem)] leading-none tracking-[-0.03em]"
        >
          {letters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              initial={{ opacity: 0.35, color: '#e0451a' }}
              animate={
                inView
                  ? { opacity: 1, color: '#ebe6dc' }
                  : { opacity: 0.35, color: '#e0451a' }
              }
              transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: EASE }}
              className="inline-block"
              style={{ width: ch === ' ' ? '0.28em' : undefined }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </p>
        <p className="mx-auto mt-6 max-w-md text-sm text-gunmetal">
          Second skin. First weapon. Choose your hold.
        </p>
        <div className="mt-10">
          <a href="/collection" className="btn-ghost-ember">
            Enter the Collection
          </a>
        </div>
      </div>
    </ApertureSection>
  );
}
