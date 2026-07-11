import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { ButtonLink } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Milan Hype CoreFit — premium men\'s compression engineered for confidence, not gimmicks.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-28 md:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">Our story</p>
        <h1 className="mt-3 font-display text-4xl text-white md:text-6xl">
          Built for men who want to look leaner — without looking like they&apos;re trying.
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-silver/80">
        <p>
          Milan Hype CoreFit exists for one reason: most men&apos;s compression products are either
          cheap tubes or padded fake-muscle gimmicks. We build targeted chest + core tanks that
          flatten, smooth, and disappear under clothes.
        </p>
        <p>
          From Essential to Signature, every tier shares the same purpose — a cleaner silhouette and
          quieter confidence — with materials and hold that scale with how you live.
        </p>
        <p>
          Premium. Modern. Powerful. Performance-driven. Technology woven into fabric you forget
          you&apos;re wearing.
        </p>
      </Reveal>
      <div className="mt-10">
        <ButtonLink href="/collection">Shop the collection</ButtonLink>
      </div>
    </div>
  );
}
