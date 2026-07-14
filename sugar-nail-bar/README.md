# Sugar Nail Bar

Premium, cinematic landing page for **Sugar Nail Bar** — an appointment-only nail bar at
409 US-1, Ormond Beach, FL, where every service comes with a complimentary mimosa, wine,
or coffee and a homemade sugar scrub.

A full brand home that upgrades their booking-only page, while keeping booking fully
functional via a deep link to their existing GlossGenius flow.

## Run locally

```bash
cd sugar-nail-bar
npm install
npm run dev
```

Open http://localhost:3000

## Build static export

```bash
cd sugar-nail-bar
npm run build
```

Output lands in `sugar-nail-bar/out/` (any static host).

## The build

Next.js 16 (static export) · Tailwind CSS v4 · Framer Motion.

### Sections
1. **Hero** — full-bleed macro manicure + mimosa still-life, rising champagne-bubble
   particles, name drift-in, staggered "Nails. Mimosas. Sugar Scrubs.", merlot CTA with a
   gold-shimmer hover sweep.
2. **The Experience** — warm pull-quote intro to the drink + sugar-scrub concept.
3. **Services** — soft photo card grid (Manicures, Pedicures, Gel-X/SNS/Acrylics, add-ons),
   pink-glow scale-up on hover.
4. **Pick Your Pairing** — horizontal drag/swipe row of pairing cards (mimosas, wines,
   coffee, sugar-scrub scents). The wine card breaks alignment and "pours" upward with a
   champagne-bubble trail as it scrolls into view.
5. **Reviews** — slow auto-advancing 5★ carousel, large serif quote, name + neighborhood.
6. **Book Your Appointment** — prominent, on-brand card deep-linking to the salon's live
   GlossGenius booking flow (booking logic is not rebuilt).
7. **Visit Us** — address, appointment-only note, map embed, Instagram + Facebook.
8. **Footer** — minimal closing beat with generous whitespace.

### Motion & texture
- Champagne-bubble particle motif (`Bubbles`) recurs from the hero through section
  backgrounds; two-plane parallax (`Parallax`); scroll reveals (`Reveal`). All motion
  respects `prefers-reduced-motion`.
- Palette tokens in `src/app/globals.css`: champagne/cream base, blush/coral accent,
  merlot CTA, pale-gold shimmer. Fonts: Fraunces (display), Inter (body). Paper grain,
  long-throw shadows, 20–28px rounding throughout.

## Content notes

- Business info from the salon's Google/GlossGenius listing: 409 US-1, Ormond Beach, FL
  32174 · (321) 948-4708 · Instagram [@sugar_nailbar](https://www.instagram.com/sugar_nailbar/)
  · Facebook @sugarnailbarormond.
- **Appointment only.** The salon states their published third-party hours are inaccurate,
  so the page intentionally shows "By appointment" with call/text/book rather than fixed
  hours. Update `hoursNote` / `hoursDetail` in `src/lib/site.ts` if they publish official hours.
- **Booking** deep-links to `https://sugarnailbar.glossgenius.com/booking-flow` and the
  services list to `.../services`. If GlossGenius later permits iframe embedding, the
  Booking section card can host it directly.
- Drink and sugar-scrub flavor names are the salon's real menu options.
- Imagery is AI-generated placeholder matched to the brand grade; replace with real salon
  photography before launch.
- Review quotes are representative of the salon's perfect 5.0 reputation and the themes
  guests mention — replace with live Google/Facebook text when available.
