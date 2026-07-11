import type { Metadata } from 'next';
import { ContactForm } from '@/components/ui/ContactForm';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Milan Hype CoreFit for sizing, orders, and Signature consultations.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">Contact</p>
        <h1 className="mt-3 font-display text-4xl text-white md:text-6xl">We&apos;re here.</h1>
        <p className="mt-4 text-silver/75">
          Sizing help, order questions, Signature white-glove consultation — reach the CoreFit team.
        </p>
      </Reveal>
      <ContactForm />
      <p className="mt-8 text-sm text-silver/55">
        Or email{' '}
        <a className="text-white underline-offset-4 hover:underline" href="mailto:support@milanhype.com">
          support@milanhype.com
        </a>
      </p>
    </div>
  );
}
