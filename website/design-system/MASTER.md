# Milan Hype CoreFit — Design System Master

Source: UI UX Pro Max (`--design-system`) adapted for brand constraints.

## Dials
- Variance: 7/10
- Motion: 9/10 (complex cinematic)
- Density: 2/10 (spacious luxury)

## Style
**Modern Dark Cinema** — deep black surfaces, ambient light blobs, glass headers, gold CTA accent, blue rim light for tech/performance.

## Colors
| Token | Hex | Role |
|-------|-----|------|
| `--black` | `#080808` | Background (avoid pure #000 OLED smear) |
| `--charcoal` | `#121216` | Surfaces |
| `--white` | `#f5f5f4` | Primary text |
| `--silver` | `#b8bdc8` | Secondary text |
| `--accent` | `#c9a227` | CTA / Signature gold |
| `--blue-glow` | `#6ea0ff` | Tech rim / Pro accent |
| Elite accent | `#4fd1c5` | Cooling yarn |
| Essential accent | `#9aa3b5` | Matte utility |

## Typography
- Display: **Barlow Condensed** (athletic impact — Sports/Fitness pairing from Pro Max)
- Body: **Barlow**
- Avoid: Inter / system defaults

## Motion
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo.out)
- Press scale: 0.97
- Stagger reveals ≤ 8 children
- Respect `prefers-reduced-motion`

## 3D Tank Models (distinct per tier)
| Tier | Model language |
|------|----------------|
| Essential | Matte nylon, thinner panels, simpler silhouette |
| Pro | Reinforced dual chest, silver-ion sheen, seamless sides |
| Elite | Extended length, cooling yarn veins, precision panels |
| Signature | Gold-thread seam, luxury clearcoat, Swiss weave sheen |

## UX checklist
- [x] cursor-pointer on interactive elements
- [x] min 44px touch targets
- [x] hover 150–300ms
- [x] focus rings
- [x] reduced motion
- [x] touch-action: manipulation
