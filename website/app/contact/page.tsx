import type { Metadata } from 'next';
import { ContactForm } from '@/components/ui/ContactForm';
import { Reveal } from '@/components/motion/Reveal';
import { BRAND } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Milan Hype for sizing, orders, shipping, and meetups.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-ember">Contact</p>
        <h1 className="mt-3 font-display text-4xl text-white md:text-6xl">DM or email.</h1>
        <p className="mt-4 text-silver/75">
          Sizing, availability, shipping, or local meetups — reach the Milan Hype plug team. Fastest
          reply is usually Instagram {BRAND.instagramHandle}.
        </p>
      </Reveal>
      <ContactForm />
      <p className="mt-8 text-sm text-silver/55">
        Or email{' '}
        <a className="text-white underline-offset-4 hover:underline" href="mailto:support@milanhype.com">
          support@milanhype.com
        </a>
        {' · '}
        <a
          className="text-ember underline-offset-4 hover:underline"
          href={BRAND.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          {BRAND.instagramHandle}
        </a>
      </p>
    </div>
  );
}
