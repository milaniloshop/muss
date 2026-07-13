'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WORDMARK = 'MILAN HYPE';
const EASE = [0.16, 1, 0.3, 1] as const;

let registered = false;

export function CinematicHero() {
  const letters = useMemo(() => WORDMARK.split(''), []);
  const imgWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const el = imgWrap.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    if (reduce || mobile) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-obsidian">
      <div className="absolute inset-0">
        <div ref={imgWrap} className="absolute inset-0 scale-110 will-change-transform">
          <Image
            src="/assets/images/products/tiers/tier-signature-back-model.jpg"
            alt="Athlete in Milan Hype compression tank under hard rim light"
            fill
            priority
            sizes="100vw"
            className="grade-skin object-cover object-[center_20%] opacity-80 md:object-[center_15%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/70" />
        <div className="vignette" />
        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
          aria-hidden
        >
          <div className="hero-light absolute left-1/2 top-1/4 h-[55vmax] w-[40vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,69,26,0.18),transparent_62%)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-28 md:justify-center md:px-8 md:pb-16">
        <div className="max-w-3xl">
          <h1 className="sr-only">Milan Hype — Second skin. First weapon.</h1>
          <p
            aria-hidden
            className="font-display text-[clamp(2.75rem,12vw,8.5rem)] leading-none tracking-[-0.03em] text-ember"
          >
            {letters.map((ch, i) => (
              <motion.span
                key={`${ch}-${i}`}
                initial={{ opacity: 0, filter: 'blur(8px)', color: '#1a0a06' }}
                animate={{ opacity: 1, filter: 'blur(0px)', color: '#e0451a' }}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.07, ease: EASE }}
                className="inline-block"
                style={{ width: ch === ' ' ? '0.28em' : undefined }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </motion.span>
            ))}
          </p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.55, ease: EASE }}
            className="mt-6 max-w-md text-sm tracking-[0.04em] text-bone/80 md:text-base"
          >
            Second skin. First weapon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.9, ease: EASE }}
            className="mt-10"
          >
            <a href="#collection" className="btn-ghost-ember">
              Enter the Collection
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#material"
          className="flex min-h-11 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-gunmetal"
        >
          Descend
          <span className="block h-10 w-px overflow-hidden bg-bone/15">
            <span className="scroll-line block h-full w-full bg-gradient-to-b from-transparent via-ember to-transparent" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
