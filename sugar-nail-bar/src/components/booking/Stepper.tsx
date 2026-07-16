'use client';

const STEPS = ['Service', 'Date', 'Time', 'Details', 'Confirmed'];

export function Stepper({ current }: { current: number }) {
  return (
    <ol className="flex items-center gap-2 sm:gap-3" aria-label="Booking progress">
      {STEPS.map((label, i) => {
        const reached = i <= current;
        const active = i === current;
        return (
          <li key={label} className="flex flex-1 items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <span
                aria-current={active ? 'step' : undefined}
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-semibold transition-colors duration-300 ${
                  reached ? 'bg-merlot text-ivory' : 'bg-ink/10 text-ink-faint'
                }`}
              >
                {i < current ? '✓' : i + 1}
              </span>
              <span
                className={`hidden text-[0.66rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 sm:inline ${
                  reached ? 'text-merlot' : 'text-ink-faint'
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className={`h-px flex-1 transition-colors duration-500 ${
                  i < current ? 'bg-merlot/50' : 'bg-ink/12'
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
