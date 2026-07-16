'use client';

import { useMemo, useState } from 'react';
import { demoAvailability, toISODate } from '@/lib/demoAvailability';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DOW = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function startMonth(): Date {
  // Anchor the calendar on the first month that has demo availability.
  const keys = Object.keys(demoAvailability).sort();
  const first = keys.length ? new Date(`${keys[0]}T00:00:00`) : new Date();
  return new Date(first.getFullYear(), first.getMonth(), 1);
}

export function Calendar({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (iso: string) => void;
}) {
  const [view, setView] = useState<Date>(() => startMonth());

  const { cells, monthLabel, canPrev, canNext } = useMemo(() => {
    const year = view.getFullYear();
    const month = view.getMonth();
    const firstDow = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const list: (Date | null)[] = [];
    for (let i = 0; i < firstDow; i++) list.push(null);
    for (let d = 1; d <= daysInMonth; d++) list.push(new Date(year, month, d));

    const keys = Object.keys(demoAvailability).sort();
    const minMonth = keys.length ? new Date(`${keys[0]}T00:00:00`) : view;
    const maxMonth = keys.length ? new Date(`${keys[keys.length - 1]}T00:00:00`) : view;

    return {
      cells: list,
      monthLabel: `${MONTHS[month]} ${year}`,
      canPrev: year * 12 + month > minMonth.getFullYear() * 12 + minMonth.getMonth(),
      canNext: year * 12 + month < maxMonth.getFullYear() * 12 + maxMonth.getMonth(),
    };
  }, [view]);

  const shift = (dir: number) =>
    setView((v) => new Date(v.getFullYear(), v.getMonth() + dir, 1));

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => canPrev && shift(-1)}
          disabled={!canPrev}
          aria-label="Previous month"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-ink/5 disabled:opacity-25"
        >
          ‹
        </button>
        <p className="font-serif text-xl text-ink">{monthLabel}</p>
        <button
          type="button"
          onClick={() => canNext && shift(1)}
          disabled={!canNext}
          aria-label="Next month"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-ink/5 disabled:opacity-25"
        >
          ›
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1 text-center">
        {DOW.map((d, i) => (
          <span key={i} className="text-[0.62rem] font-semibold uppercase tracking-widest text-ink-faint">
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {cells.map((date, i) => {
          if (!date) return <span key={`e${i}`} />;
          const iso = toISODate(date);
          const slots = demoAvailability[iso];
          const available = Array.isArray(slots) && slots.length > 0;
          const isSelected = selected === iso;
          return (
            <button
              key={iso}
              type="button"
              disabled={!available}
              onClick={() => available && onSelect(iso)}
              aria-label={`${MONTHS[date.getMonth()]} ${date.getDate()}${available ? ', available' : ', unavailable'}`}
              aria-pressed={isSelected}
              className={[
                'flex aspect-square items-center justify-center rounded-xl text-sm transition-all duration-200',
                isSelected
                  ? 'bg-merlot text-ivory shadow-[0_10px_24px_-12px_rgba(92,26,46,0.7)]'
                  : available
                    ? 'bg-blush/60 text-ink hover:bg-blush hover:scale-105'
                    : 'cursor-not-allowed bg-ink/[0.04] text-ink-faint/50 line-through',
              ].join(' ')}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-center gap-5 text-[0.68rem] text-ink-soft">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-blush" /> Available
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-ink/10" /> Booked / closed
        </span>
      </div>
    </div>
  );
}
