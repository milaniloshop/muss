'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { getTierProducts } from '@/lib/products';
import { formatPrice } from '@/lib/cn';

const STEPS = [
  {
    title: 'Put it on',
    desc: 'Black sleeveless tank. Scoop neck. Pull on like any undershirt — takes 10 seconds.',
  },
  {
    title: 'Button up',
    desc: 'Your polo, tee, or dress shirt goes over it. Nobody sees the tank. You see the difference.',
  },
  {
    title: 'Own the silhouette',
    desc: 'Flatter chest. Tighter core. Invisible under every shirt you already wear.',
  },
];

const DIFF = {
  amazon: [
    'One tight tube — no chest vs core zones',
    'Rolls up, bunches under dress shirts',
    'Thin fabric loses compression in weeks',
  ],
  tiktok: [
    'Foam fake abs — not real compression',
    'Obvious under fitted tees',
    'Built for views, not daily wear',
  ],
  corefit: [
    'Dual-zone chest + core engineering',
    'Four premium tiers — $49 to $229',
    'Invisible tank cut under polos & dress shirts',
    'Discreet matte-black US packaging',
  ],
};

const REVIEWS = [
  {
    quote:
      'The material feels thick and durable. It stretches but holds tight. I followed the size chart — best compression shirt I\'ve owned. Flattens my chest under every tee.',
    name: 'Charles J.',
    meta: 'Verified · CoreFit Pro',
  },
  {
    quote:
      'Long enough to stay tucked. 100% confidence boost under fitted shirts. I\'ve bought multiple times — shows how much I like them. Quality holds up after many washes.',
    name: 'Jacob C.',
    meta: 'Verified · Pro · Ohio',
  },
  {
    quote:
      'I carry extra weight around my stomach. Adding this under my shirts has been a lifesaver. Same polo — completely different silhouette.',
    name: 'Z. Brown',
    meta: 'Verified · Texas',
  },
];

const HOME_FAQS = [
  {
    q: 'Is this a fake muscle / padded shirt like on TikTok?',
    a: 'No. CoreFit is a men\'s chest + core compression tank — it compresses and smoothes your natural body. No foam pads, no fake abs, no gimmicks.',
  },
  {
    q: 'Will anyone know I\'m wearing it?',
    a: 'No. CoreFit is designed as an invisible undershirt with a low neckline and seamless construction that stays hidden under dress shirts, polos, and knits.',
  },
  {
    q: 'Which tier should I start with?',
    a: 'Most men choose Pro ($89) for the best balance of Italian microfiber, reinforced chest compression, and silver-ion odor control.',
  },
  {
    q: 'Is shipping discreet?',
    a: 'Yes. Every order ships in plain, unmarked packaging with no product branding on the exterior.',
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-white/8 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">How it works</p>
          <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">
            Wear it. Forget it. Look sharper.
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-10 md:grid-cols-3" delay={0.1}>
          {STEPS.map((step, i) => (
            <StaggerItem key={step.title}>
              <p className="font-display text-5xl text-white/15">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 font-display text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver/75">{step.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Differentiation() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">Why Milan Hype</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl text-white md:text-5xl">
            Built to be #1 — not another cheap tank.
          </h2>
          <p className="mt-4 max-w-2xl text-silver/75">
            Thousands of compression shirts on Amazon. Padded muscle gimmicks on TikTok. CoreFit is
            neither — dual-zone compression engineered only for men&apos;s chest + core confidence.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal className="border-t border-white/10 pt-6">
            <h3 className="text-sm uppercase tracking-[0.16em] text-silver/50">Cheap Amazon tanks</h3>
            <ul className="mt-4 space-y-3 text-sm text-silver/70">
              {DIFF.amazon.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="border-t border-white/10 pt-6">
            <h3 className="text-sm uppercase tracking-[0.16em] text-silver/50">TikTok padded shirts</h3>
            <ul className="mt-4 space-y-3 text-sm text-silver/70">
              {DIFF.tiktok.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16} className="border-t border-blue-glow/30 pt-6">
            <h3 className="text-sm uppercase tracking-[0.16em] text-blue-glow/90">Milan Hype CoreFit</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              {DIFF.corefit.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="text-blue-glow">◆</span>
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TierCompare() {
  const products = getTierProducts();
  return (
    <section className="border-y border-white/8 bg-[#07080c] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">Compare</p>
          <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">Find your tier</h2>
        </Reveal>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 pr-4 font-medium text-silver/50"> </th>
                {products.map((p) => (
                  <th key={p.id} className="px-3 py-4 font-display text-lg text-white">
                    {p.tier}
                    <div className="mt-1 font-sans text-sm font-normal text-silver/70">
                      {formatPrice(p.price)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-silver/80">
              {(
                [
                  ['Fabric', products.map((p) => p.fabric)],
                  ['Compression', products.map((p) => p.details.Compression)],
                  ['Colors', products.map((p) => p.details.Colors)],
                  ['Fit', products.map((p) => p.fit)],
                ] as const
              ).map(([label, values]) => (
                <tr key={label} className="border-b border-white/8">
                  <th className="py-4 pr-4 font-medium text-silver/50">{label}</th>
                  {values.map((value, i) => (
                    <td key={`${label}-${i}`} className="px-3 py-4">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <ButtonLink href="/collection" variant="secondary">
            Shop all tiers
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">
            What men won&apos;t post — but will tell us.
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-8 md:grid-cols-3" delay={0.1}>
          {REVIEWS.map((review) => (
            <StaggerItem key={review.name} className="border-t border-white/10 pt-6">
              <p className="text-xs tracking-[0.2em] text-blue-glow/80">★★★★★</p>
              <blockquote className="mt-4 text-base leading-relaxed text-silver/85">
                “{review.quote}”
              </blockquote>
              <p className="mt-5 text-sm text-white">{review.name}</p>
              <p className="text-xs text-silver/50">{review.meta}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function HomeFaq() {
  return (
    <section className="border-t border-white/8 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-blue-glow/80">FAQ</p>
          <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">Common questions</h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {HOME_FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-white/10 px-5 py-4 open:bg-white/[0.03]"
            >
              <summary className="cursor-pointer list-none text-sm text-white md:text-base">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-silver/75">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/faq" variant="ghost">
            View all FAQs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
