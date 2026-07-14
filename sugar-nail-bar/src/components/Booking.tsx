'use client';

import { SITE } from '@/lib/site';
import { Reveal } from './motion';
import { Bubbles } from './Bubbles';

export function Booking() {
  return (
    <section id="book" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-merlot px-6 py-16 text-center text-ivory float-shadow md:px-16 md:py-24">
            <Bubbles count={16} seed={13} intensity={0.9} className="opacity-80" />

            <div className="relative z-[2] mx-auto flex max-w-2xl flex-col items-center">
              <p className="micro text-gold-soft">Book Your Appointment</p>
              <h2 className="mt-6 font-serif text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.03]">
                Your table for one is <span className="italic text-gold-soft">poured and waiting.</span>
              </h2>
              <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-ivory/80">
                Reserve online through our booking studio, or send a quick text — we&apos;re
                appointment only, so your slot (and your drink) is always ready for you.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <a
                  href={SITE.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-merlot border border-gold-soft/40 !bg-ivory !text-merlot"
                >
                  Book Online
                </a>
                <a href={SITE.smsHref} className="btn-ghost text-ivory">
                  <span className="underline-grow">Text {SITE.phone}</span>
                </a>
              </div>

              <a
                href={SITE.services}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-[0.8rem] uppercase tracking-[0.2em] text-ivory/60 underline-offset-4 hover:text-gold-soft hover:underline"
              >
                View services & pricing →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
