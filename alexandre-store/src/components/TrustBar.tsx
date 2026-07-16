import { TRUST_ITEMS } from '@/lib/site';

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12.5l4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrustBar() {
  return (
    <section
      id="trust"
      className="border-y border-[var(--line)] bg-offwhite"
      aria-label="Trust signals"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 md:justify-between md:px-8 md:py-5">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item}
            className="micro flex items-center gap-2 text-ink/70"
          >
            <span className="text-blue">
              <CheckIcon />
            </span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
