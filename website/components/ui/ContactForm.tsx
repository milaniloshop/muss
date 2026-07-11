'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <p className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-silver/85">
        Message received. We typically reply within one business day.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-4">
      <input
        required
        name="name"
        placeholder="Name"
        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-glow/50"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-glow/50"
      />
      <textarea
        required
        name="message"
        rows={5}
        placeholder="How can we help?"
        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-glow/50"
      />
      <Button type="submit" magnetic>
        Send message
      </Button>
    </form>
  );
}
