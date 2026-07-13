'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/cn';

let registered = false;

function ensure() {
  if (typeof window === 'undefined' || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/** Section enters via camera iris / aperture wipe. Mobile: simple fade. */
export function ApertureSection({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ensure();
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 768px)').matches;

    const ctx = gsap.context(() => {
      if (reduce || mobile) {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
          },
        );
        return;
      }

      gsap.fromTo(
        el,
        { clipPath: 'circle(0% at 50% 50%)', autoAlpha: 1 },
        {
          clipPath: 'circle(150% at 50% 50%)',
          duration: 1.25,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={ref} className={cn('relative', className)}>
      {children}
    </section>
  );
}
