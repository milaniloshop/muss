# Joyologie Boutique

Premium, cinematic landing page for **Joyologie Boutique** — a resort-and-beach-casual
women's boutique in **Fountain Square Shopping Village**, 142 E Granada Blvd Ste 4,
Ormond Beach, FL. Carrying Spartina 449, Hobo, Liverpool Denim, and beach-to-evening
resortwear.

Built as a capsule micro-brand launch page (tech-grade craft × quiet-luxury fashion),
not a storefront brochure.

## Run locally

```bash
cd joyologie-boutique
npm install
npm run dev
```

Open http://localhost:3000

## Build static export

```bash
cd joyologie-boutique
npm run build
```

Output lands in `joyologie-boutique/out/` (GitHub Pages / any static host).

## The build

Next.js 16 (static export) · Tailwind CSS v4 · Framer Motion.

### Section acts (numbered wayfinding system)

- **01 — Arrive** — two-beat cinematic hero: a blurred macro fabric detail racks
  out into the full hero photograph while the name reveals letter-by-letter.
- **02 — Statement** — one oversized editorial line with deliberate negative space.
- **03 — Collections** — horizontal scroll-snap panels (drag on desktop, swipe on
  mobile): Resort & Beach Casual, Spartina & Accessories, Evening & Occasion.
- **04 — Shop the Look** — asymmetric masonry linked to Instagram, with one
  hand-placed, slightly rotated tile.
- **05 — In Their Words** — auto-advancing serif pull-quotes attributed by
  neighborhood (repeat Nextdoor Neighborhood Favorite).
- **06 — Visit Fountain Square** — map embed, hours, address, and a mask-reveal
  storefront image.
- **07 — Footer** — minimal closing beat with generous whitespace.

### Motion

- Multi-plane parallax (`Parallax`), scroll-reveal (`Reveal`), and circle/wipe
  `MaskReveal` section flourishes live in `src/components/motion.tsx`.
- The `Wayfinder` pins the active section's number + label in the viewport corner.
- All motion respects `prefers-reduced-motion`.

### Design tokens

Palette and type layers are defined as CSS variables in `src/app/globals.css`
(bleached-sand base, desaturated clay/coral accent, umber type, a single muted
marigold "signature" moment on CTA hover). Fonts: Fraunces (display serif),
Oswald (condensed numerals/labels), Inter (body).

## Content notes

- Business info, hours, and phone are pulled from the Joyologie Boutique Google listing.
- Instagram: [@joyologieboutique](https://www.instagram.com/joyologieboutique/).
  The Shop-the-Look grid uses curated, color-graded resort photography, each frame
  wrapped in a link to Instagram. To wire a **live feed**, drop a Behold / SnapWidget /
  Elfsight embed into the marked "Live feed ready" slot in
  `src/components/ShopTheLook.tsx` — the container already matches the site's rounded
  corners, long-throw shadow, and warm grade. Swap the per-tile `href` values in
  `src/lib/site.ts` for specific post permalinks when available.
- Facebook URL in `src/lib/site.ts` is the expected page path — verify/update if the
  live page uses a different handle.
- Imagery is AI-generated placeholder photography matched to the brand grade; replace
  with real campaign/shop photography before launch.
- Review quotes are representative of the boutique's repeat Nextdoor "Neighborhood
  Favorite" standing — replace with live Google/Nextdoor text when available.
