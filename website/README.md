# Milan Hype CoreFit

Premium luxury fitness ecommerce experience — Next.js, React Three Fiber, GSAP, Framer Motion, and Nano Banana (Gemini) image generation.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Three.js / React Three Fiber / Drei
- GSAP ScrollTrigger + Framer Motion
- Stripe Checkout
- Nano Banana (`gemini-2.5-flash-image` / `gemini-3.1-flash-image`)

## Setup

```bash
cd website
cp .env.example .env.local
npm install
npm run dev
```

### Environment

| Variable | Purpose |
|---|---|
| `NANO_BANANA_API_KEY` or `GEMINI_API_KEY` | Gemini / Nano Banana image API |
| `NANO_BANANA_MODEL` | Optional model override |
| `STRIPE_SECRET_KEY` | Checkout |
| `STRIPE_PUBLISHABLE_KEY` | Client config |
| `BASE_URL` | Canonical site URL |

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — start production server
- `npm run lint` — ESLint

## Admin

Visit `/admin` to generate, cache, optimize, and regenerate premium lifestyle/product imagery via Nano Banana.

## Pages

- `/` Home (3D hero)
- `/collection` Full CoreFit tiers
- `/product/[id]` 3D viewer + hotspots
- `/about` `/contact` `/faq` `/shipping` `/returns`
- `/admin` AI image studio
