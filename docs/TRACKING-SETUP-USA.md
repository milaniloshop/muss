# Milan Hype — Tracking Setup (USA / Hamza Method)

Install pixels **before** you spend on ads. This repo ships deferred Meta, GA4, Google Ads, and TikTok tracking — same idea as Hamza Lamoudni's course, tuned for **milanhype.com** on GitHub Pages.

---

## 1. Paste your pixel IDs

Edit **`website/assets/js/tracking-config.js`**:

```javascript
window.MH_TRACKING = {
  metaPixelId: 'YOUR_META_PIXEL_ID',
  ga4MeasurementId: 'G-XXXXXXXXXX',
  googleAdsId: 'AW-XXXXXXXXX',
  googleAdsConversionLabel: 'AbCdEfGhIj',
  tiktokPixelId: 'YOUR_TIKTOK_PIXEL_ID',
  // ...
};
```

Commit and push — GitHub Pages redeploys in ~1 minute.

Leave fields empty until you have IDs. The site works without them.

---

## 2. What fires automatically

| Event | When | Platforms |
|-------|------|-----------|
| **PageView** | Every page | Meta, GA4, TikTok |
| **ViewContent** | Product page load | Meta, GA4, TikTok |
| **AddToCart** | Add to bag | Meta, GA4, TikTok |
| **InitiateCheckout** | Buy Now / Secure Checkout | Meta, GA4, TikTok |
| **Purchase** | `success.html` after Stripe | Meta, GA4, Google Ads, TikTok |

**Payment Links:** Before redirect to Stripe, the site saves order value + product IDs in `sessionStorage`. On `success.html`, `firePurchaseFromSession()` fires **Purchase** once (deduped by transaction ID).

**Stripe Checkout API** (via `server.js`): If `session_id` is in the URL, purchase value comes from `/api/order/:sessionId`.

---

## 3. Google Search ads (start here — USA)

1. **Google Ads** → Goals → Conversions → New → Website → `https://milanhype.com/success.html`
2. Copy **Conversion ID** (`AW-…`) and **Label** into `tracking-config.js`
3. **GA4** (recommended): Link GA4 property to Google Ads for richer reporting
4. Launch **Search** campaigns on keywords from `docs/winner-product-playbook.md` and `docs/milanhype-seo-keywords-from-course.md`
5. Target **CPA under $25–30** on Pro tier ($89) before scaling

---

## 4. Meta (Instagram @Milanhype_)

1. [Meta Events Manager](https://business.facebook.com/events_manager) → Connect data → Web → Pixel
2. Paste Pixel ID in `tracking-config.js`
3. **Test:** Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper) → visit product page → should see ViewContent
4. **Test purchase:** Complete a Stripe **test** payment → land on success → Purchase in Events Manager (may take a few minutes)

### Server-side CAPI (optional, stronger signal)

When you run **`website/server.js`** on Render/Railway with Stripe webhooks:

1. Events Manager → Settings → **Generate access token**
2. Add to `website/.env`:
   ```
   META_PIXEL_ID=your_pixel_id
   META_CAPI_ACCESS_TOKEN=your_token
   ```
3. Webhook `checkout.session.completed` sends **Purchase** to Meta Graph API

Static GitHub Pages alone cannot run CAPI — browser pixel on `success.html` is enough to start.

---

## 5. TikTok + Meta UGC (AdSkull — Hamza's tool)

After Google Search proves your angle:

1. Sign up at **[adskull.io](https://adskull.io/en)** (Hamza's AI media buyer)
2. Paste `https://milanhype.com/product.html?id=corefit-pro`
3. Generate UGC videos (Sora / Veo / Kling) — **not** the same as website photos
4. Bulk launch Meta + TikTok when CPA &lt; $30

Full guide: **`docs/ADSKULL-SETUP-USA.md`**

---

## 6. Verify before spending

- [ ] Pixel Helper shows events on product + success pages
- [ ] Google Ads → Tag diagnostics → conversion tag active
- [ ] One full **test checkout** → Purchase fires once (not twice)
- [ ] Stripe **live** keys + live Payment Links when ready to sell real units

---

## 7. Hamza AI loop (keep using this)

```
Run Google Search ads → check CPA + add-to-cart rate
→ Screenshot low conversion → paste to Cursor/ChatGPT
→ Fix product page copy or offer → push → test again
→ Scale when CPA < $25–30
```

See **`docs/hamza-method-usa-playbook.md`** for the full USA playbook.
