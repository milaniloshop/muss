# Paste Pixel IDs Before You Run Ads

PR #6 is **merged** — tracking code is live on milanhype.com after GitHub Pages deploys (~1–2 min).

You must paste **your** IDs from Meta + Google. We cannot generate these for you.

---

## File to edit

**`website/assets/js/tracking-config.js`**

```javascript
window.MH_TRACKING = {
  metaPixelId: 'PASTE_META_PIXEL_ID',
  ga4MeasurementId: 'G-PASTE_GA4_ID',
  googleAdsId: 'AW-PASTE_GOOGLE_ADS_ID',
  googleAdsConversionLabel: 'PASTE_CONVERSION_LABEL',
  tiktokPixelId: '',
  deferPixels: true,
  deferScrollPx: 120,
  deferMs: 2000,
  currency: 'USD',
  brand: 'Milan Hype CoreFit'
};
```

Commit + push → site updates automatically.

---

## Where to get each ID

| Platform | Where | Used for |
|----------|-------|----------|
| **Meta Pixel** | [business.facebook.com/events_manager](https://business.facebook.com/events_manager) → Data Sources → your Pixel → ID | Instagram @Milanhype_ ads |
| **GA4** | Google Analytics → Admin → Data Streams → Measurement ID | Traffic + e-commerce reports |
| **Google Ads** | Google Ads → Goals → Conversions → Tag setup → `AW-XXX` / label | **Start here** — Search ads |
| **TikTok** | TikTok Ads → Events → Web Events | Later, after Google wins |

**Google Ads conversion URL:** `https://milanhype.com/success.html`

---

## 5-minute test before spending money

1. Paste IDs → push to GitHub  
2. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper) (Chrome)  
3. Visit `milanhype.com/product.html?id=corefit-pro` → see **ViewContent**  
4. Click Buy Now → see **InitiateCheckout**  
5. Complete one Stripe **test** payment → land on success → see **Purchase**  

Full guide: **`docs/TRACKING-SETUP-USA.md`**

---

## Google Search first (USA)

Keywords to start (from playbook):

- men's chest compression tank  
- gynecomastia compression shirt men  
- men's core compression undershirt  
- flatten chest under shirt men  

Target **CPA under $25–30** on Pro ($89) before scaling budget.
