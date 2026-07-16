/**
 * MOCK schedule data for the sales demo — no backend. Keys are ISO dates.
 * - Non-empty array  → available (shown in blush, clickable)
 * - Empty array []   → fully booked (shown grayed, not clickable)
 * - Missing date     → closed/unavailable (Sundays are intentionally omitted)
 *
 * Varied on purpose so the calendar feels like a living schedule when demoed.
 */
export const demoAvailability: Record<string, string[]> = {
  '2026-07-17': ['10:00 AM', '11:30 AM', '1:30 PM', '3:00 PM', '4:15 PM'],
  '2026-07-18': ['9:30 AM', '12:00 PM', '2:00 PM'],
  // 2026-07-19 Sunday — closed
  '2026-07-20': ['10:00 AM', '10:45 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'],
  '2026-07-21': ['9:45 AM', '12:15 PM', '3:15 PM'],
  '2026-07-22': [], // fully booked
  '2026-07-23': ['10:30 AM', '1:00 PM', '2:45 PM', '4:30 PM'],
  '2026-07-24': ['10:00 AM', '11:00 AM', '12:30 PM', '2:00 PM', '3:30 PM', '5:00 PM'],
  '2026-07-25': ['9:30 AM', '11:15 AM', '1:45 PM'],
  // 2026-07-26 Sunday — closed
  '2026-07-27': ['10:15 AM', '12:00 PM', '3:00 PM'],
  '2026-07-28': ['10:00 AM', '10:45 AM', '11:30 AM', '1:15 PM', '2:45 PM', '4:15 PM'],
  '2026-07-29': ['9:45 AM', '1:30 PM', '4:00 PM'],
  '2026-07-30': [], // fully booked
  '2026-07-31': ['10:00 AM', '11:45 AM', '2:15 PM', '3:45 PM'],
  '2026-08-01': ['9:30 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM'],
  // 2026-08-02 Sunday — closed
  '2026-08-03': ['10:00 AM', '12:30 PM', '2:00 PM', '4:30 PM'],
  '2026-08-04': ['9:45 AM', '11:15 AM', '1:00 PM', '3:15 PM'],
  '2026-08-05': ['10:00 AM', '10:45 AM', '11:30 AM', '1:15 PM', '2:30 PM', '4:00 PM'],
};

export function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
