'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { CERT_STEPS } from '@/lib/site';
import { EASE, Reveal } from '@/components/motion';

function StepIcon({ index }: { index: number }) {
  const paths = [
    'M4 7h16M4 12h10M4 17h14',
    'M7 17V7h4.5a3 3 0 010 6H7m7 4l3-10h1l3 10m-6.2-3h4.4',
    'M12 4l2.2 4.5L19 9.2l-3.5 3.4.8 4.9L12 15.2 7.7 17.5l.8-4.9L5 9.2l4.8-.7L12 4z',
    'M5 8h14v9a2 2 0 01-2 2H7a2 2 0 01-2-2V8zm3-3h8v3H8V5z',
    'M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z',
  ];
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={paths[index] ?? paths[0]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BatteryCounter({ target }: { target: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  const shown = reduce ? target : inView ? value : 0;

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target]);

  return (
    <div
      ref={ref}
      className="mt-5 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
      aria-live="polite"
    >
      <div className="relative h-7 w-12 rounded-[5px] border border-white/35 p-[2px]">
        <div
          className="h-full rounded-[3px] bg-gradient-to-r from-blue to-[#5b8fff] transition-[width] duration-100"
          style={{ width: `${shown}%` }}
        />
        <span className="absolute top-1/2 -right-[5px] h-2.5 w-[3px] -translate-y-1/2 rounded-r-sm bg-white/35" />
      </div>
      <span className="font-mono-spec text-2xl font-medium tracking-tight text-white tabular-nums">
        {shown}
        <span className="text-base text-white/55">%</span>
      </span>
      <span className="micro text-white/45">Battery Health</span>
    </div>
  );
}

export function CertifiedProcess() {
  const reduce = useReducedMotion();

  return (
    <section id="certified" className="brushed-metal text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="micro text-orange">Certified Pre-Owned</p>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.85rem,4vw,2.85rem)] leading-[1.08] font-semibold tracking-[-0.03em]">
            The Certified Used Process
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/65 md:text-lg">
            Every used device earns its place through the same inspection walkthrough —
            so buying certified feels as safe as buying new.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="micro text-white/45">Inspection Protocol</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                Five checks.
                <br />
                One guarantee.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60 md:text-base">
                Scroll the steps. Watch battery health resolve live — the same readout
                our bench uses before certification.
              </p>
              <div className="mt-8 hidden h-px w-24 bg-gradient-to-r from-orange to-transparent lg:block" />
            </Reveal>
          </div>

          <ol className="relative space-y-4 md:space-y-5">
            <div
              className="absolute top-3 bottom-3 left-[1.65rem] w-px bg-white/10 md:left-[1.9rem]"
              aria-hidden
            />
            {CERT_STEPS.map((step, i) => (
              <motion.li
                key={step.num}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
                className="relative grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm md:gap-5 md:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-graphite text-blue md:h-12 md:w-12">
                  <StepIcon index={i} />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono-spec text-sm text-orange">{step.num}</span>
                    <h4 className="text-lg font-semibold tracking-[-0.02em] md:text-xl">
                      {step.title}
                    </h4>
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/62 md:text-[0.95rem]">
                    {step.copy}
                  </p>
                  {'battery' in step && step.battery ? (
                    <BatteryCounter target={step.battery} />
                  ) : null}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
