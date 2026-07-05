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
2. Free plan: 1 ad account, 25 launches/month, 50 AI credits — enough to test
3. Connect **Meta** (Instagram @Milanhype_) when ready for Phase 2

---

## Step 2 — Generate ad creatives (not website photos)

1. In AdSkull → **Generate creatives**
2. Paste: `https://milanhype.com/product.html?id=corefit-pro`
3. Pick AI model: **Sora 2**, **Veo 3.1**, or **Kling 3.0** (Hamza uses these in course)
4. Prompt angle examples for CoreFit:

```
POV: guy putting on compression tank before work, looks in mirror, confidence under dress shirt. Discreet. Not gym bro. Premium USA brand.
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

## Website photos vs ad videos — clear split

| | Website | AdSkull ads |
|---|---------|-------------|
| **Purpose** | Trust + conversion | Clicks + emotion |
| **Style** | Clean product, lifestyle, color options | UGC, POV, hook in 3 seconds |
| **Real sample photos** | Yes — swap when Superbuy arrives | Optional — AI works without samples |
| **All black boring grid** | ❌ Fixed — Black/White/Charcoal now | ❌ Use dynamic AI scenes |

---

## Links

- AdSkull: https://adskull.io/en
- Hamza: https://lamoudni.com/
- Pixel setup: `docs/PIXEL-PASTE-NOW.md`
- Full USA playbook: `docs/hamza-method-usa-playbook.md`
