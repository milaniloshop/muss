/**
 * MOCK schedule data for the sales demo — no backend. Keys are ISO dates.
 * - Non-empty array  → available (shown in blush, clickable)
 * - Empty array []   → fully booked (shown grayed, not clickable)
 * - Missing date     → closed/unavailable
 *
 * Respects real business hours: open 9:00 AM–8:00 PM every day EXCEPT
 * Wednesday (closed) — so no Wednesday appears here, and all slots fall
 * within the 9 AM–8 PM window (last bookable slot ~7:30 PM).
 */
export const demoAvailability: Record<string, string[]> = {
  '2026-07-17': ['9:30 AM', '11:30 AM', '1:30 PM', '3:00 PM', '5:30 PM', '7:00 PM'],
  '2026-07-18': ['9:00 AM', '12:00 PM', '2:00 PM', '4:30 PM', '6:00 PM'],
  '2026-07-19': ['10:00 AM', '1:00 PM', '3:30 PM', '6:30 PM'], // Sunday — open
  '2026-07-20': ['9:00 AM', '10:45 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '6:00 PM', '7:30 PM'],
  '2026-07-21': ['9:45 AM', '12:15 PM', '3:15 PM', '5:00 PM'],
  // 2026-07-22 Wednesday — closed
  '2026-07-23': ['10:30 AM', '1:00 PM', '2:45 PM', '4:30 PM', '7:00 PM'],
  '2026-07-24': ['9:00 AM', '11:00 AM', '12:30 PM', '2:00 PM', '3:30 PM', '5:00 PM', '7:15 PM'],
  '2026-07-25': ['9:30 AM', '11:15 AM', '1:45 PM', '4:00 PM', '6:30 PM'],
  '2026-07-26': ['10:00 AM', '12:30 PM', '3:00 PM', '5:30 PM'], // Sunday — open
  '2026-07-27': ['9:15 AM', '10:15 AM', '12:00 PM', '3:00 PM', '6:00 PM'],
  '2026-07-28': [], // fully booked
  // 2026-07-29 Wednesday — closed
  '2026-07-30': ['9:45 AM', '1:30 PM', '4:00 PM', '6:45 PM'],
  '2026-07-31': ['9:00 AM', '11:45 AM', '2:15 PM', '3:45 PM', '5:30 PM', '7:30 PM'],
  '2026-08-01': ['9:30 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '5:00 PM'],
  '2026-08-02': ['10:00 AM', '2:00 PM', '4:30 PM'], // Sunday — open
  '2026-08-03': ['9:00 AM', '12:30 PM', '2:00 PM', '4:30 PM', '6:30 PM'],
  '2026-08-04': [], // fully booked
  // 2026-08-05 Wednesday — closed
  '2026-08-06': ['9:30 AM', '11:00 AM', '1:15 PM', '2:30 PM', '4:00 PM', '6:00 PM', '7:30 PM'],
};

export function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
