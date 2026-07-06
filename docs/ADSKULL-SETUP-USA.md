# AdSkull Setup — Milan Hype USA (Hamza Method)

**AdSkull** is Hamza Lamoudni's AI media buyer — he built it during his live 30-day store challenge. It's **not** for website photos. It's for **ad creatives + bulk launching ads**.

- **Website** = product photos, lifestyle shots, trust (milanhype.com)
- **AdSkull** = AI UGC videos, bulk Meta/TikTok/Snap campaigns

---

## Why you need both

| Tool | Job |
|------|-----|
| **milanhype.com** | Convert visitors — color picker, tiers, Stripe checkout |
| **Tracking pixels** | Measure ViewContent → Purchase (`tracking-config.js`) |
| **Google Search** | Phase 1 ads — guy searches "chest compression shirt men" |
| **AdSkull** | Phase 2 — AI video ads at scale after Search proves sales |

Hamza doesn't film 50 videos himself. He pastes the product URL into AdSkull → AI generates UGC-style creatives → bulk launches 200+ ad variations.

---

## Step 1 — Sign up

1. Go to **[adskull.io](https://adskull.io/en)**
2. **Free plan:** 1 ad account · **25 ad launches/month** · **50 AI credits/month**
3. **Reality check:** 50 credits = only a few AI videos per month — **not unlimited free videos**
4. Connect **Meta** when ready for Phase 2

### Can't get free AdSkull videos? Use this instead (free)

| Method | Cost | Best for |
|--------|------|----------|
| **Google Search ads** | Pay per click | **Start here** — no video needed |
| **Phone UGC** | $0 | Film yourself when sample arrives — 15 sec mirror clip |
| **CapCut** | $0 | Templates + text hooks |
| **Meta static image ads** | $0 creative | Use `corefit-hero-duo.jpg` from your site |

**You do NOT need AdSkull to run your first ads.** Google Search + clean product photos on milanhype.com is enough to test.

---

## Step 2 — Generate ad creatives (not website photos)

1. In AdSkull → **Generate creatives**
2. Paste: `https://milanhype.com/product.html?id=corefit-pro`
3. Pick AI model: **Sora 2**, **Veo 3.1**, or **Kling 3.0** (Hamza uses these in course)
4. Prompt angle examples for CoreFit (**always include "no fake muscle, no padded abs, real compression tank"**):

```
POV: average guy puts on black compression tank before work, checks mirror in t-shirt — flatter chest, not fake abs. Discreet premium USA brand. No gym bro.
```

```
Before/after feeling — hates fitted tee, puts on CoreFit, same shirt looks sharper. No fake muscle pads. Real compression.
```

```
Unboxing Milan Hype — matte black discreet mailer, premium tank, man tries on under polo. Silent confidence.
```

5. Generate **10–20 variations** — AdSkull tests hooks, not one perfect video

---

## Step 3 — Bulk launch (after pixels live)

**Prerequisites:**
- Pixels pasted in `website/assets/js/tracking-config.js`
- Google Search already got 1–3 sales OR clear add-to-cart data

**Launch:**
1. Connect Meta ad account in AdSkull
2. Upload AI videos from Step 2
3. Target: USA, men 25–45, interests: men's fashion, business, fitness (broad)
4. Budget: start **$30–50/day** on best Search angle
5. **Smart Rules:** pause if CPA > $35, scale if CPA < $25

AdSkull bulk-launches across Meta + TikTok + Snap from one dashboard — Hamza's scaling weapon.

---

## Your USA order (Hamza adapted)

```
Week 1:  Google Search + pixels on site
Week 2:  Fix conversion with AI if CPA high
Week 3:  AdSkull — paste milanhype.com → 15 AI UGC videos
Week 4:  Bulk Meta campaign + scale winners
```

**Don't skip Search.** AdSkull Meta/TikTok works best when you already know the winning angle from Search data.

---

## Website photos vs AdSkull ads vs samples — read this

| | Website photos | AdSkull ad videos | Superbuy samples |
|---|----------------|-------------------|------------------|
| **When** | Now (clean product shots) | After Google Search test | When they arrive |
| **Style** | Flat lay, colors, styled shirt+tank | UGC POV, emotion, hooks | **Real factory photos — final upgrade** |
| **Fake abs / padded?** | **Never** — CoreFit is anti-gimmick | AdSkull prompts must say "no fake muscle" | Real product truth |
| **Wait for samples?** | Use clean shots now; swap when samples land | Can test ads while waiting | Worth waiting for **site** trust |

**Do NOT** put fake muscle / abs on the website — that kills your brand. Samples fix the site. AdSkull handles video ads separately.

---

## Links

- AdSkull: https://adskull.io/en
- Hamza: https://lamoudni.com/
- Pixel setup: `docs/PIXEL-PASTE-NOW.md`
- Full USA playbook: `docs/hamza-method-usa-playbook.md`
