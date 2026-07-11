'use client';

import { motion } from 'framer-motion';
import { SceneCanvas } from '@/components/3d/SceneCanvas';
import { FloatingTank } from '@/components/3d/CompressionTank';
import { ButtonLink } from '@/components/ui/Button';
import { useState } from 'react';
import type { ProductTier } from '@/types';
import { cn } from '@/lib/cn';

const HERO_TIERS: { tier: ProductTier; label: string }[] = [
  { tier: 'Essential', label: 'Essential' },
  { tier: 'Pro', label: 'Pro' },
  { tier: 'Elite', label: 'Elite' },
  { tier: 'Signature', label: 'Signature' },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const [tier, setTier] = useState<ProductTier>('Signature');

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,39,0.12),transparent_42%),radial-gradient(ellipse_at_75%_65%,rgba(58,111,247,0.14),transparent_45%),linear-gradient(180deg,#080808_0%,#0c0d12_48%,#070708_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-45 mix-blend-screen">
          <div className="hero-light absolute -left-1/4 top-1/4 h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_60%)]" />
          <div className="hero-light-delayed absolute -right-1/5 bottom-0 h-[40vmax] w-[40vmax] rounded-full bg-[radial-gradient(circle,rgba(110,160,255,0.22),transparent_60%)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 px-5 pb-20 pt-28 md:grid-cols-2 md:px-8 md:pb-12">
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="font-display text-5xl leading-none tracking-[0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Milan Hype
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="mt-6 max-w-xl font-display text-3xl leading-tight text-white/95 sm:text-4xl md:text-5xl"
          >
            Elite Compression.
            <br />
            Built for Confidence.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-5 max-w-md text-base text-silver/80 md:text-lg"
          >
            Four distinct CoreFit tanks — each with its own silhouette, fabric response, and hold.
            Switch models. Feel the difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: EASE }}
            className="mt-6 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Tank model"
          >
            {HERO_TIERS.map((item) => (
              <button
                key={item.tier}
                type="button"
                role="tab"
                aria-selected={tier === item.tier}
                onClick={() => setTier(item.tier)}
                className={cn(
                  'min-h-11 cursor-pointer rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition duration-200',
                  tier === item.tier
                    ? 'bg-accent text-black'
                    : 'border border-white/15 bg-white/5 text-silver hover:border-white/30 hover:text-white',
                )}
              >
                {item.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ButtonLink href={`/product/corefit-${tier.toLowerCase()}`} magnetic>
              Shop {tier}
            </ButtonLink>
            <ButtonLink href="/collection" variant="outline" magnetic>
              Compare all tiers
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          key={tier}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="order-1 h-[48vh] md:order-2 md:h-[72vh]"
          aria-hidden
        >
          <SceneCanvas className="h-full" camera={{ position: [0, 0.1, 2.55], fov: 40 }} dpr={[1, 1.5]}>
            <FloatingTank tier={tier} color="#141418" scale={1.08} />
          </SceneCanvas>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#collection"
          className="group flex min-h-11 cursor-pointer flex-col items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-silver/60"
        >
          Scroll
          <span className="block h-10 w-px overflow-hidden bg-white/15">
            <span className="scroll-line block h-full w-full bg-gradient-to-b from-transparent via-white to-transparent" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
