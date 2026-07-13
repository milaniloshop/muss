import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-espresso/8 bg-linen-deep pt-20 pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="font-serif text-3xl text-espresso">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-sm text-espresso-soft">{SITE.tagline}</p>
          <p className="mt-4 text-sm text-espresso-soft">
            {SITE.fullAddress}
            <br />
            {SITE.phone}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-5">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="micro hover:text-terracotta"
            >
              Instagram
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="micro hover:text-terracotta"
            >
              Facebook
            </a>
            <a href="#look" className="micro hover:text-terracotta">
              Shop the Look
            </a>
          </div>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !normal-case !tracking-normal"
          >
            Follow {SITE.instagramHandle}
          </a>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-6xl px-5 text-center text-[11px] tracking-[0.14em] text-espresso/45 md:px-8">
        © {new Date().getFullYear()} {SITE.name} · {SITE.place} · Ormond Beach, FL
      </p>
    </footer>
  );
}
