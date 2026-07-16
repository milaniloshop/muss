'use client';

import { TRADE_STEPS } from '@/lib/site';
import { Reveal } from '@/components/motion';

export function TradeIn() {
  return (
    <section id="trade-in" className="bg-offwhite px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="micro text-muted">Trade-In</p>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-ink">
            Trade in your old device toward a new one.
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink/65">
            Transparent grading. Clear offers. Credit or cash — your choice.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {TRADE_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={0.08 * i}>
              <li className="relative h-full border-t border-[var(--line)] pt-6">
                <span className="font-mono-spec text-sm text-blue">{step.num}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 md:text-[0.95rem]">
                  {step.copy}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <a
            href="#visit"
            className="btn-primary mt-12 inline-flex cursor-pointer"
          >
            Start a Trade-In
          </a>
        </Reveal>
      </div>
    </section>
  );
}
