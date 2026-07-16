'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { PAIRINGS } from '@/lib/site';
import { asset } from '@/lib/asset';
import { Reveal } from './motion';
import { Bubbles } from './Bubbles';
import { cn } from '@/lib/cn';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Pairings() {
  const trackRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const accentInView = useInView(accentRef, { amount: 0.6, margin: '-10% 0px' });
  const reduce = useReducedMotion();

  // Mouse drag-to-scroll (touch + trackpad scroll natively).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let down = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      down = true;
      moved = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add('is-dragging');
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      if (Math.abs(e.clientX - startX) > 4) moved = true;
      el.scrollLeft = startScroll - (e.clientX - startX);
    };
    const onUp = () => {
      down = false;
      el.classList.remove('is-dragging');
    };
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerup', onUp);
    el.addEventListener('click', onClick, true);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('click', onClick, true);
    };
  }, []);

  return (
    <section id="pairings" className="paper-grain relative overflow-hidden bg-cream py-24 md:py-32">
      {/* faint bubble thread tying sections together */}
      <Bubbles count={8} seed={21} intensity={0.5} className="z-0 opacity-70" />

      <div className="relative z-[2] mx-auto mb-12 max-w-[1300px] px-5 md:mb-16 md:px-8">
        <Reveal>
          <p className="micro text-coral">Pick Your Pairing</p>
        </Reveal>
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal delay={0.08}>
            <h2 className="max-w-2xl font-serif text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.04] text-ink">
              A little menu of <span className="italic text-coral">indulgence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="micro flex items-center gap-3 text-ink-faint">
              <span className="hidden md:inline">Drag</span>
              <span className="md:hidden">Swipe</span>
              <svg width="30" height="9" viewBox="0 0 30 9" fill="none" aria-hidden>
                <path d="M0 4.5h26m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </p>
          </Reveal>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar snap-x-mandatory relative z-[2] flex touch-pan-x gap-5 overflow-x-auto px-5 pb-6 pt-10 md:gap-6 md:px-8 [&.is-dragging]:cursor-grabbing"
        style={{ cursor: 'grab' }}
      >
        {PAIRINGS.map((p) => {
          const isAccent = p.accent;
          return (
            <div
              key={p.title}
              ref={isAccent ? accentRef : undefined}
              className="snap-start relative w-[76vw] shrink-0 sm:w-[54vw] md:w-[38vw] lg:w-[27vw]"
            >
              {/* The "poured right now" card lifts up with a bubble trail */}
              {isAccent && !reduce && (
                <Bubbles count={10} seed={5} intensity={1.1} className="z-0 -inset-x-2" />
              )}
              <motion.div
                className={cn(
                  'relative z-[1] overflow-hidden rounded-[24px] bg-ivory float-shadow',
                  isAccent && 'ring-1 ring-merlot/20',
                )}
                animate={
                  reduce
                    ? undefined
                    : { y: isAccent && accentInView ? -26 : 0 }
                }
                transition={{ duration: 1, ease: EASE }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={asset(p.image)}
                    alt={p.alt}
                    fill
                    sizes="(max-width:768px) 76vw, 30vw"
                    loading="lazy"
                    draggable={false}
                    className="warm-grade object-cover"
                  />
                  <span
                    className={cn(
                      'absolute left-4 top-4 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]',
                      isAccent ? 'bg-merlot text-ivory' : 'bg-ivory/85 text-ink-soft backdrop-blur',
                    )}
                  >
                    {p.kind}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[1.7rem] leading-tight text-ink">{p.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{p.copy}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.options.map((o) => (
                      <li
                        key={o}
                        className="rounded-full bg-blush-soft px-3 py-1 text-[0.72rem] font-medium text-merlot"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-6 max-w-[1300px] px-5 md:px-8">
        <Reveal>
          <p className="text-[0.85rem] text-ink-faint">
            Every service includes one complimentary drink and a homemade sugar scrub. Ask your
            tech about seasonal pours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
