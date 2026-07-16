// Real business hours: open 9:00 AM – 8:00 PM every day except Wednesday (closed).
export const businessHours: Record<string, { open: string; close: string } | null> = {
  Monday: { open: '9:00 AM', close: '8:00 PM' },
  Tuesday: { open: '9:00 AM', close: '8:00 PM' },
  Wednesday: null, // closed
  Thursday: { open: '9:00 AM', close: '8:00 PM' },
  Friday: { open: '9:00 AM', close: '8:00 PM' },
  Saturday: { open: '9:00 AM', close: '8:00 PM' },
  Sunday: { open: '9:00 AM', close: '8:00 PM' },
};

// Ordered for display (Mon → Sun).
export const HOURS_ORDER = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

export const CLOSED_DAY = 'Wednesday';
