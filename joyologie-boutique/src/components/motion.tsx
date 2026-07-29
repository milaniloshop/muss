'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  amount = 0.25,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
  as?: 'div' | 'span' | 'li';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Multi-plane parallax. Uses distinct positive/negative speeds so background,
 * midground and foreground layers can travel at three different rates.
 */
export function Parallax({
  children,
  className,
  speed = 0.18,
  disableMobile = true,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  disableMobile?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    if (disableMobile && window.matchMedia('(max-width: 768px)').matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.parentElement?.getBoundingClientRect();
        if (!rect) return;
        const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed, reduce, disableMobile]);

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
}

/**
 * Section transition flourish — the next block is revealed through an
 * expanding soft-edged shape (circle grow or diagonal wipe) instead of a fade.
 */
export function MaskReveal({
  children,
  className,
  variant = 'circle',
  amount = 0.35,
}: {
  children: ReactNode;
  className?: string;
  variant?: 'circle' | 'wipe';
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const reduce = useReducedMotion();

  const hidden =
    variant === 'circle'
      ? { clipPath: 'circle(0% at 50% 60%)' }
      : { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' };
  const shown =
    variant === 'circle'
      ? { clipPath: 'circle(140% at 50% 60%)' }
      : { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : hidden}
      animate={inView || reduce ? shown : undefined}
      transition={{ duration: 1.3, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
