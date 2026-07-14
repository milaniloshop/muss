import { SITE } from '@/lib/site';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.5 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V3.1C16.6 3 15.8 3 14.9 3c-2 0-3.3 1.2-3.3 3.4v2.1H9.5V11h2.1v8h2.6v-8h2.1l.4-2.5h-2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="paper-grain relative bg-cream pt-32 md:pt-44">
      <div className="relative z-[2] mx-auto max-w-[1300px] px-5 pb-12 md:px-8">
        <div className="flex flex-col gap-10 border-t border-ink/12 pt-14 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="font-serif text-[2.2rem] leading-none tracking-tight text-ink">
              Sugar<span className="text-coral"> Nail Bar</span>
            </a>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-ink-soft">{SITE.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="micro mb-4 text-ink-soft">Visit</p>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-thin block text-[0.9rem] leading-relaxed">
                409 US-1
                <br />
                {SITE.city}, {SITE.state} {SITE.zip}
              </a>
              <a href={SITE.phoneHref} className="link-thin mt-3 block text-[0.9rem]">
                {SITE.phone}
              </a>
            </div>
            <div>
              <p className="micro mb-4 text-ink-soft">Follow</p>
              <div className="flex items-center gap-4 text-ink">
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="link-thin">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="link-thin">
                  <FacebookIcon className="h-6 w-6" />
                </a>
              </div>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="link-thin mt-4 block text-[0.82rem]">
                {SITE.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/12 pt-6 text-[0.72rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. {SITE.city}, {SITE.state}.</p>
          <p className="uppercase tracking-[0.2em]">By appointment · {SITE.phone}</p>
        </div>
      </div>
    </footer>
  );
}
