# graphics_brief.md — Visual identity for creatives

> Colors, type, motion, and image rules for Milan Hype CoreFit.
> Use for site, ads, Canva, Nano Banana prompts, packaging, and decks.
> Aligns with `website/design-system/MASTER.md`.
> Last updated: 2026-07-13

---

## Visual intention

Keywords: **dark cinema, precision, confidence, discreet luxury, athletic restraint.**

The brand should feel Apple/Nike/Tesla-adjacent premium fitness — not loud gym-bro, not medical shapewear clinic, not purple AI-saas gradients.

First viewport test: if you remove the nav and the brand name isn’t still the hero signal, branding is too weak.

---

## Palette

| Role | Token / name | Hex | Usage |
|------|--------------|-----|-------|
| Background | `--black` | `#080808` | Page ground (avoid pure `#000` OLED smear) |
| Surface | `--charcoal` | `#121216` | Panels, sections |
| Primary text | `--white` | `#f5f5f4` | Headlines, body |
| Secondary text | `--silver` | `#b8bdc8` | Supporting copy |
| CTA / Signature | `--accent` gold | `#c9a227` | Buttons, key accents — sparingly |
| Tech rim / Pro | `--blue-glow` | `#6ea0ff` | Rim light, Pro cues |
| Elite accent | teal | `#4fd1c5` | Cooling yarn cue |
| Essential accent | matte silver | `#9aa3b5` | Utility / entry tier |

**Rule:** Black/charcoal dominate. Gold is for action and Signature moments only. Too much gold kills gold.

---

## Typography

- **Display:** Barlow Condensed (athletic impact) — weights 600/700
- **Body:** Barlow — weights 400/500
- **Avoid:** Inter, Roboto, Arial, system UI stacks as brand voice

Hierarchy: one big brand/display line, one short support line, then UI chrome. Don’t let a generic headline overpower **Milan Hype** / **CoreFit**.

---

## Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo.out)
- Press scale: ~0.97
- Stagger reveals ≤ 8 children
- Ship 2–3 intentional motions on visually led pages; respect `prefers-reduced-motion`
- Motion for presence and hierarchy — not noise, glow spam, or endless loop gimmicks

---

## 3D / product model language (per tier)

| Tier | Model language |
|------|----------------|
| Essential | Matte nylon, thinner panels, simpler silhouette |
| Pro | Reinforced dual chest, silver-ion sheen, seamless sides |
| Elite | Extended length, cooling yarn veins, precision panels |
| Signature | Gold-thread seam, luxury clearcoat, Swiss-weave sheen |

Never use one generic tank mesh for all tiers.

---

## Photography & generative image direction

**Do**
- Full-bleed hero planes (edge-to-edge), dark charcoal studio, subtle blue rim light
- Lean athletic male silhouette; confident posture; premium campaign energy
- Product cutouts with visible fabric texture; macro weave studies
- Lifestyle: dress shirt / tee over invisible compression — city night or editorial studio

**Don’t**
- Inset hero cards, collages, floating sticker badges on hero media
- Foam-pad / fake-abs product visuals
- Cliché handshake / hologram stock
- Warm cream broadsheet looks or purple-on-white SaaS gradients

**Nano Banana / prompt anchors** (from site pipeline):
> Premium luxury fitness brand photography, cinematic lighting, charcoal and silver palette, subtle blue rim light, high-end editorial, photorealistic, men’s compression apparel.

---

## Layout rules (marketing surfaces)

- One composition in the first viewport — not a dashboard
- Hero budget: brand, one headline, one support sentence, one CTA group, one dominant image
- Default: no cards — cards only when they contain a real interaction
- One job per section
- Mobile and desktop both must load clean; 44px+ touch targets on CTAs

---

## Logo & naming lockups

- **Brand:** Milan Hype  
- **Line:** CoreFit  
- **Product type:** Men’s Chest + Core Compression Tank  
- Site: https://milanhype.com  

On CoreFit PDPs and collection: product line can lead; brand still present in chrome / lockup.

---

## CSS anchors (site)

```css
:root {
  --black: #080808;
  --charcoal: #121216;
  --white: #f5f5f4;
  --silver: #b8bdc8;
  --accent: #c9a227;
  --blue-glow: #6ea0ff;
}
```

Prefer theme tokens (`bg-charcoal`, `bg-accent`, `text-silver`) over Tailwind arbitrary hex strings in app code.

---

## Creative checklist

- [ ] Dark cinema palette (not light generic fitness)
- [ ] Barlow Condensed / Barlow only for brand surfaces
- [ ] Gold CTA reserved, not rainbow accents
- [ ] No fake-muscle imagery
- [ ] Tier-accurate product visuals
- [ ] Full-bleed hero (no inset card hero)
- [ ] Brand readable without nav
- [ ] One primary CTA
