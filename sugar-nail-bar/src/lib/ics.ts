// Build and download a minimal .ics calendar file entirely client-side.

function pad(n: number) {
  return String(n).padStart(2, '0');
}

/** Parse "10:00 AM" / "1:30 PM" → { h, m } in 24h. */
function parseTime(t: string): { h: number; m: number } {
  const match = t.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return { h: 10, m: 0 };
  let h = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);
  const mer = match[3].toUpperCase();
  if (mer === 'PM' && h !== 12) h += 12;
  if (mer === 'AM' && h === 12) h = 0;
  return { h, m };
}

/** Local floating time stamp: YYYYMMDDTHHMMSS */
function fmt(d: Date) {
  return (
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}` +
    `T${pad(d.getHours())}${pad(d.getMinutes())}00`
  );
}

export function downloadAppointmentICS(opts: {
  isoDate: string;
  time: string;
  service: string;
  durationMinutes?: number;
}) {
  const [y, mo, da] = opts.isoDate.split('-').map(Number);
  const { h, m } = parseTime(opts.time);
  const start = new Date(y, mo - 1, da, h, m, 0);
  const end = new Date(start.getTime() + (opts.durationMinutes ?? 60) * 60000);

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sugar Nail Bar//Booking//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@sugarnailbar`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Sugar Nail Bar — ${opts.service}`,
    'LOCATION:409 US-1, Ormond Beach, FL 32174',
    'DESCRIPTION:Your appointment at Sugar Nail Bar. See you soon!',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sugar-nail-bar-appointment.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
