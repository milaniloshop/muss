'use client';

import { useEffect, useState } from 'react';

/** Thin ember progress line — left edge heart-rate monitor */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress" aria-hidden>
      <div className="scroll-progress__bar" style={{ height: `${progress}%` }} />
    </div>
  );
}
