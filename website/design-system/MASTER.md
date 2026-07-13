# Milan Hype CoreFit — Design System Master

Source: Cinematic performance-luxury landing (2026-07) + UI UX Pro Max density/motion dials.

## Dials
- Variance: 6/10
- Motion: 9/10 (cinematic scroll: aperture, rack-focus, parallax)
- Density: 2/10 (spacious luxury)

## Style
**Aggressive elegance / dark gym-gallery** — obsidian void, bone contrast, blood-orange ember as warning light, hairline etched UI, film grain.

## Colors
| Token | Hex | Role |
|-------|-----|------|
| `--obsidian` / `--black` | `#060607` | Void background |
| `--charcoal` | `#111214` | Surfaces |
| `--bone` / `--white` | `#ebe6dc` | Primary text (WCAG body) |
| `--gunmetal` / `--silver` | `#8b919a` | Secondary / whispered copy |
| `--ember` / `--accent` | `#e0451a` | Display accent + CTAs (large type / borders) |
| `--ember-deep` | `#b33412` | Hover / pressed |

**Rule:** Ember on black is for large display + borders only. Body copy uses bone/gunmetal on obsidian.

## Typography
- Display: **Oswald** (condensed fashion × race livery)
- Body: **Manrope** (quiet grotesk, generous line-height)
- Avoid: Inter / system defaults / filled pill UI

## Motion
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Section transitions: aperture / iris wipe (desktop)
- Headers: blur-to-focus rack resolve
- Hero fabric / imagery: scroll parallax (desktop only)
- Collection cards: loupe-style rotate scrub
- Left-edge ember scroll progress
- Post-Material: reticle cursor (desktop, fine pointer)
- Mobile: fade-ins only — no scroll-jacking
- Respect `prefers-reduced-motion`

## Landing sections
1. Hero — wordmark ignition, “Second skin. First weapon.”
2. The Material — spec sheet + macro fabric parallax
3. Fit Philosophy — blueprint zones
4. In Motion — cinematic loop block
5. Collection — hover reveal price/fit
6. Proof — museum placard quotes
7. The Standard — manifesto
8. Final CTA — inverted cooling wordmark

## UX checklist
- [x] cursor-pointer / reticle (contextual)
- [x] min 44px touch targets
- [x] hairline ghost CTAs
- [x] focus rings
- [x] reduced motion
- [x] dark mode only
