import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-graphite text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="text-lg font-semibold tracking-[-0.02em]">{SITE.name}</p>
          <p className="mt-2 max-w-xs text-sm text-white/50">
            {SITE.fullAddress}
          </p>
          <a
            href={SITE.phoneHref}
            className="font-mono-spec mt-3 inline-block cursor-pointer text-sm text-white/70 transition-colors hover:text-white"
          >
            {SITE.phone}
          </a>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55">
          <a href="#certified" className="cursor-pointer transition-colors hover:text-white">
            Warranty Policy
          </a>
          <a href="#trade-in" className="cursor-pointer transition-colors hover:text-white">
            Trade-In Policy
          </a>
          <a href="#repair" className="cursor-pointer transition-colors hover:text-white">
            Repair
          </a>
          <a href="#visit" className="cursor-pointer transition-colors hover:text-white">
            Contact
          </a>
        </div>

        <div className="flex gap-4 text-sm text-white/55">
          <a
            href={SITE.instagram}
            className="cursor-pointer transition-colors hover:text-white"
            aria-label="Instagram"
          >
            IG
          </a>
          <a
            href={SITE.facebook}
            className="cursor-pointer transition-colors hover:text-white"
            aria-label="Facebook"
          >
            FB
          </a>
          <a
            href={SITE.whatsapp}
            className="cursor-pointer transition-colors hover:text-white"
            aria-label="WhatsApp"
          >
            WA
          </a>
        </div>
      </div>

      <div className="border-t border-white/8">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/35 md:px-8">
          © {new Date().getFullYear()} {SITE.name}. Placeholder business details —
          replace address, phone, and social links before go-live.
        </p>
      </div>
    </footer>
  );
}
