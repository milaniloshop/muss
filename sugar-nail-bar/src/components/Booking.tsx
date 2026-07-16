'use client';

import Image from 'next/image';
import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BOOKING_SERVICES, SITE, type BookingService } from '@/lib/site';
import { demoAvailability } from '@/lib/demoAvailability';
import { downloadAppointmentICS } from '@/lib/ics';
import { asset } from '@/lib/asset';
import { Reveal } from './motion';
import { Bubbles } from './Bubbles';
import { Stepper } from './booking/Stepper';
import { Calendar } from './booking/Calendar';

const EASE = [0.22, 1, 0.36, 1] as const;

// Master slot list — availability comes from demoAvailability; the rest render
// as already-booked so the schedule feels live.
const MASTER_SLOTS = [
  '9:30 AM', '10:00 AM', '10:45 AM', '11:00 AM', '11:30 AM', '12:00 PM',
  '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
];

function prettyDate(iso: string | null) {
  if (!iso) return '';
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

const variants = {
  enter: { opacity: 0, x: 28 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -28 },
};

export function Booking() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<BookingService | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [details, setDetails] = useState({ name: '', phone: '', email: '', note: '' });

  const reset = () => {
    setStep(0);
    setService(null);
    setDate(null);
    setTime(null);
    setDetails({ name: '', phone: '', email: '', note: '' });
  };

  const submitDetails = (e: FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  const availableForDate = date ? (demoAvailability[date] ?? []) : [];

  return (
    <section id="booking" className="relative overflow-hidden bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-5 md:px-8">
        <div className="mb-10 text-center">
          <Reveal>
            <p className="micro text-coral">Book Your Appointment</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.03] text-ink">
              Reserve your <span className="italic text-coral">seat & sip.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-5 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
              Pick a service, a day, and a time — your drink and sugar scrub come standard.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-cream p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] sm:p-8 md:p-10">
            <div className="mb-8">
              <Stepper current={step} />
            </div>

            <div className="relative min-h-[22rem]">
              <AnimatePresence mode="wait" initial={false}>
                {/* STEP 1 — Service */}
                {step === 0 && (
                  <motion.div
                    key="service"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <h3 className="mb-5 font-serif text-2xl text-ink">Choose a service</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {BOOKING_SERVICES.map((s) => {
                        const isSel = service?.id === s.id;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => {
                              setService(s);
                              setStep(1);
                            }}
                            className={`group flex items-center gap-4 rounded-2xl border-2 bg-ivory p-3 text-left transition-all duration-300 ${
                              isSel
                                ? 'border-merlot shadow-[0_0_0_3px_rgba(240,201,196,0.5)]'
                                : 'border-transparent hover:border-blush shadow-[0_14px_34px_-24px_rgba(0,0,0,0.4)]'
                            }`}
                          >
                            <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                              <Image
                                src={asset(s.image)}
                                alt={s.alt}
                                fill
                                sizes="80px"
                                className="warm-grade object-cover transition duration-500 group-hover:scale-105"
                              />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block font-serif text-lg leading-tight text-ink">{s.name}</span>
                              <span className="mt-1 flex items-center gap-2 text-[0.8rem] text-ink-soft">
                                <span>{s.duration}</span>
                                <span className="text-ink-faint">·</span>
                                <span className="font-semibold text-merlot">{s.price}</span>
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 — Date */}
                {step === 1 && (
                  <motion.div
                    key="date"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="font-serif text-2xl text-ink">Choose a date</h3>
                      <button type="button" onClick={() => setStep(0)} className="btn-ghost text-merlot">
                        ← Back
                      </button>
                    </div>
                    <Calendar
                      selected={date}
                      onSelect={(iso) => {
                        setDate(iso);
                        setTime(null);
                        setStep(2);
                      }}
                    />
                  </motion.div>
                )}

                {/* STEP 3 — Time */}
                {step === 2 && (
                  <motion.div
                    key="time"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-serif text-2xl text-ink">Choose a time</h3>
                      <button type="button" onClick={() => setStep(1)} className="btn-ghost text-merlot">
                        ← Back
                      </button>
                    </div>
                    <p className="mb-6 text-[0.9rem] text-ink-soft">{prettyDate(date)}</p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                      {MASTER_SLOTS.map((slot) => {
                        const open = availableForDate.includes(slot);
                        return (
                          <button
                            key={slot}
                            type="button"
                            disabled={!open}
                            onClick={() => {
                              setTime(slot);
                              setStep(3);
                            }}
                            className={`rounded-full py-2.5 text-sm font-medium transition-all duration-200 ${
                              open
                                ? 'bg-ivory text-ink shadow-[0_10px_26px_-18px_rgba(0,0,0,0.5)] hover:scale-105 hover:bg-merlot hover:text-ivory'
                                : 'cursor-not-allowed bg-ink/[0.04] text-ink-faint/50 line-through'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4 — Details */}
                {step === 3 && (
                  <motion.div
                    key="details"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="font-serif text-2xl text-ink">Your details</h3>
                      <button type="button" onClick={() => setStep(2)} className="btn-ghost text-merlot">
                        ← Back
                      </button>
                    </div>
                    <form onSubmit={submitDetails} className="mx-auto max-w-lg space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="micro mb-2 block text-ink-soft">Name</span>
                          <input
                            required
                            value={details.name}
                            onChange={(e) => setDetails({ ...details, name: e.target.value })}
                            className="w-full rounded-xl border border-ink/12 bg-ivory px-4 py-3 text-ink outline-none transition focus:border-merlot focus:ring-2 focus:ring-blush"
                            placeholder="First & last"
                          />
                        </label>
                        <label className="block">
                          <span className="micro mb-2 block text-ink-soft">Phone</span>
                          <input
                            required
                            type="tel"
                            value={details.phone}
                            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                            className="w-full rounded-xl border border-ink/12 bg-ivory px-4 py-3 text-ink outline-none transition focus:border-merlot focus:ring-2 focus:ring-blush"
                            placeholder="(___) ___-____"
                          />
                        </label>
                      </div>
                      <label className="block">
                        <span className="micro mb-2 block text-ink-soft">Email</span>
                        <input
                          required
                          type="email"
                          value={details.email}
                          onChange={(e) => setDetails({ ...details, email: e.target.value })}
                          className="w-full rounded-xl border border-ink/12 bg-ivory px-4 py-3 text-ink outline-none transition focus:border-merlot focus:ring-2 focus:ring-blush"
                          placeholder="you@email.com"
                        />
                      </label>
                      <label className="block">
                        <span className="micro mb-2 block text-ink-soft">Note (optional)</span>
                        <textarea
                          value={details.note}
                          onChange={(e) => setDetails({ ...details, note: e.target.value })}
                          rows={3}
                          className="w-full resize-none rounded-xl border border-ink/12 bg-ivory px-4 py-3 text-ink outline-none transition focus:border-merlot focus:ring-2 focus:ring-blush"
                          placeholder="Inspo, allergies, or anything we should know…"
                        />
                      </label>

                      <div className="rounded-2xl bg-blush-soft/60 p-4 text-[0.85rem] text-ink-soft">
                        <span className="font-semibold text-ink">{service?.name}</span> · {prettyDate(date)} · {time}
                      </div>

                      <button type="submit" className="btn-merlot w-full">
                        Confirm Appointment
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* STEP 5 — Confirmation */}
                {step === 4 && (
                  <motion.div
                    key="confirm"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: EASE }}
                    className="relative overflow-hidden rounded-2xl bg-merlot px-6 py-12 text-center text-ivory"
                  >
                    <Bubbles count={20} seed={99} intensity={1.1} />
                    <div className="relative z-[2]">
                      <p className="text-4xl">💅</p>
                      <h3 className="mt-4 font-serif text-[clamp(1.8rem,5vw,3rem)] leading-tight">
                        You&apos;re all set, {details.name.split(' ')[0] || 'friend'}!
                      </h3>
                      <p className="mx-auto mt-5 max-w-sm text-ivory/85">
                        We&apos;ll see you at Sugar Nail Bar — {SITE.fullAddress}.
                      </p>

                      <dl className="mx-auto mt-8 max-w-xs space-y-2 rounded-2xl bg-ivory/10 p-5 text-left text-sm backdrop-blur">
                        <div className="flex justify-between gap-4">
                          <dt className="text-ivory/60">Service</dt>
                          <dd className="font-medium">{service?.name}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-ivory/60">Date</dt>
                          <dd className="font-medium">{prettyDate(date)}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-ivory/60">Time</dt>
                          <dd className="font-medium">{time}</dd>
                        </div>
                      </dl>

                      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <button
                          type="button"
                          onClick={() =>
                            date &&
                            time &&
                            service &&
                            downloadAppointmentICS({
                              isoDate: date,
                              time,
                              service: service.name,
                            })
                          }
                          className="btn-merlot !bg-ivory !text-merlot"
                        >
                          + Add to Calendar
                        </button>
                        <button type="button" onClick={reset} className="btn-ghost text-ivory">
                          <span className="underline-grow">Book another</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
