# Hamza Method → Milan Hype USA Playbook

**What to steal from Hamza Lamoudni's course** (Episode 2 + playlist) — adapted for **USA**, **CoreFit**, **milanhype.com**.

Ignore his Saudi demo (COD, Arabic, biotin niche). Copy his **system**.

---

## What Hamza actually does (the system)

| Step | What he did | Your USA version |
|------|-------------|------------------|
| 1 | **AI finds winner product** | ✅ Done — CoreFit compression tank |
| 2 | **Buys domain + hosts without Shopify** | ✅ Done — milanhype.com on GitHub Pages |
| 3 | **Talks to AI (Cursor + GPT/Gemini)** — one big master prompt | Use same loop to fix site + copy |
| 4 | **Branded store**, not generic dropship look | ✅ Done — 4 tiers, luxury site |
| 5 | **Product pages that convert**, not only landing page | ✅ product.html — keep improving |
| 6 | **Stripe / payments** | ✅ Payment Links (test) → live keys when ready |
| 7 | **Tracking pixels** (Meta, TikTok + **server-side CAPI**) | ✅ **Done** — see `docs/TRACKING-SETUP-USA.md` |
| 8 | **AI product photos** | ⏳ Samples ordered — replace mockups |
| 9 | **UGC video ads** (Sora / AI tools) | After Google proves sales |
| 10 | **Launch ads → read data → ask AI to fix conversion** | Your scaling loop |

---

## The AI loop (copy Hamza exactly)

This is the **technique** — not KSA, not Arabic:

```
1. Tell AI your market (USA), product (CoreFit), customer (overweight men, chest insecurity)
2. AI builds / fixes store + copy
3. Run traffic (Google Search first)
4. If conversion sucks → screenshot + ask AI: "Why is add-to-cart low? Fix product page."
5. Push fix → redeploy → test again
6. When CPA < ~$25–30 → scale budget
```

**Tools Hamza uses:** Cursor + Claude/GPT/Gemini  
**You can use:** Cursor on this repo OR paste site issues to ChatGPT — same idea.

---

## Master prompt idea (USA CoreFit version)

When you talk to AI next, paste this style (Hamza's structure):

```
Market: USA
Product: Milan Hype CoreFit — men's chest + core compression tank (NOT fake muscle)
Price: $49 / $89 / $149 / $229
Customer: Men 25–45, overweight, hate how they look in fitted shirts, buy privately
Goal: High conversion product page, discreet DTC brand, not cheap dropship

Stack: Static site milanhype.com, Stripe Payment Links, ship from USA (or 3PL later)

Fix: [your problem — e.g. "product page doesn't feel premium enough" or "need Google ad angles"]
```

---

## Tech to add from Hamza (USA priority order)

### 1. Tracking before ads (critical)
Hamza installs **Meta Pixel + TikTok Pixel + server-side CAPI** so ads optimize.

**Your move:** ✅ Already wired — paste IDs in `website/assets/js/tracking-config.js` → follow **`docs/TRACKING-SETUP-USA.md`**

### 2. Orders in one place
Hamza sends orders to **Google Sheet** via webhook.

**Your move (pick one):**
- Stripe Dashboard emails you on every sale (easiest now)
- Stripe webhook → Google Sheet (Zapier/Make free tier)
- Or run `website/server.js` on Render when you need full backend

### 3. Fake / junk orders
Hamza uses **MaxMind** to block non-Saudi IPs.

**Your move for USA:**
- Stripe Radar (built-in fraud) — turn on in live mode
- Optional: block checkout from obvious VPN countries if you see fraud

### 4. Page speed + pixels
Hamza **defers pixels** until user scrolls — faster site = better conversion.

**Your move:** Add pixels in footer, load after page interactive (or use Google Tag Manager).

### 5. No Shopify (Hamza's point)
Custom site = faster, you control layout, better conversion than generic Shopify theme.

**You already won this** with milanhype.com. Don't move to Shopify unless you need apps.

---

## Ads: Hamza vs your best path (USA)

| Hamza (Gulf demo) | **You (USA CoreFit)** |
|-------------------|------------------------|
| Often Facebook broad + UGC | **Google Search first** — guy searches at night |
| COD trust badges | Stripe + discreet shipping + returns copy |
| Arabic emotional copy | English: embarrassment → confidence, not gym bro |
| $30 micro-test Gulf | **$100–200 / 5 days** US Search minimum |
| AdSkull + Sora UGC | Phase 2 after Search works |

**Hamza's scaling rule:** Don't scale until **cost per purchase** makes sense.  
**Your math:** Product $49–89, target **ad cost under $25–30 per sale** to profit.

---

## Google Search keywords (USA — this IS your "keywords")

Not SEO meta tags — **these are what Hamza would run in Google Ads:**

**Buy these searches:**
```
gynecomastia compression shirt
men compression tank top
chest compression shirt men
slimming undershirt men
hide man boobs shirt
men body shaper tank
compression undershirt men
```

**Block these (negative keywords):**
```
women, female, surgery, free, fake muscle, padded, costume
```

---

## What Hamza does on product page (steal for CoreFit)

His store had these conversion pieces — mirror on yours:

| Element | Hamza | CoreFit site |
|---------|-------|--------------|
| Bundle offers (1 / 2 / 3 pack) | ✅ | Add later on product page |
| Cross-sell other products | ✅ | ✅ related tiers on product page |
| Social proof / reviews | ✅ | Add real reviews after samples |
| Problem → emotion → solution copy | ✅ | ✅ science section — strengthen |
| Trust: shipping, returns, discreet box | ✅ | ✅ announcement bar + FAQ |
| Sticky buy button mobile | ✅ | ✅ sticky ATC on product page |
| Premium brand, not AliExpress look | ✅ | ✅ — real photos = final step |

---

## Your roadmap (same order Hamza would do for USA)

### Phase 1 — Now (no ads yet)
- [x] Winner product: CoreFit
- [x] Site live: milanhype.com
- [x] Stripe test checkout
- [ ] Samples arrive → real photos → `import-photos.js` → push
- [ ] Stripe **live** keys + rotate test key

### Phase 2 — Before spending $1 on ads
- [ ] Meta Pixel + Google conversion tag on site
- [ ] Google Merchant Center (if running Shopping)
- [ ] 3–5 **real** photos (under shirt, flat lay)

### Phase 3 — Test ($100–200)
- [ ] Google Search campaign, keywords above
- [ ] $25–40/day, 5–7 days
- [ ] Track: clicks → buy now → Stripe sale

### Phase 4 — AI iterate (Hamza loop)
- [ ] CPA too high? → paste analytics to AI → fix headline, price anchor, hero
- [ ] Winner ad angle? → make 3 UGC-style videos (phone or AI)

### Phase 5 — Scale
- [ ] CPA under $30 → raise budget 20% every 3 days
- [ ] Order 50 units bulk from Taobao supplier you tested
- [ ] US shipping: ship yourself or Simple Fulfillment / ShipBob

---

## What NOT to copy from Hamza

| Skip | Why |
|------|-----|
| Saudi COD | USA = card checkout (Stripe) |
| Arabic copy | Your buyer is English USA |
| His product (biotin, collagen) | You have CoreFit |
| TikTok first | Search intent wins for this product |
| $30 Gulf test as "validation" | US needs ~$100+ for real data |
| AdSkull required day 1 | Optional later for UGC volume |

---

## One sentence

**Hamza = AI finds product → AI builds branded store → pixels → ads → AI fixes conversion → scale.**

**You = product ✅ store ✅ → samples → pixels → Google USA → scale together.**

---

## Course link (reference)

Playlist: https://www.youtube.com/playlist?list=PL0gC0bvqdZT-AglVMjGBkq9aE8pwYKbep  
Episode 2 (build store with AI): https://www.youtube.com/watch?v=SekxQbvQ838

Watch for **method**, not his niche.
