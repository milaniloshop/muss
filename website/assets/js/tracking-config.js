/**
 * Milan Hype — ad pixel IDs (USA)
 * Paste your IDs from Meta Events Manager + Google Ads + TikTok Ads.
 * Leave empty until ready — site works without them.
 */
window.MH_TRACKING = {
  // Meta (Facebook / Instagram) — Events Manager → Data Sources → Pixel ID
  metaPixelId: '',

  // Google Analytics 4 — Admin → Data Streams → Measurement ID (G-XXXXXXXX)
  ga4MeasurementId: '',

  // Google Ads conversion — Tools → Conversions → Tag setup → AW-XXXXXXXX/YYYYYYYY
  googleAdsId: '',
  googleAdsConversionLabel: '',

  // TikTok Ads — Events → Web Events → Pixel ID
  tiktokPixelId: '',

  // Defer pixel scripts until scroll or 2s (Hamza: faster first paint)
  deferPixels: true,
  deferScrollPx: 120,
  deferMs: 2000,

  currency: 'USD',
  brand: 'Milan Hype CoreFit'
};
