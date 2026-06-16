# Milan Hype — Shopify Store Structure (Prestige Theme)

**Theme:** Prestige by Maestrooo  
**Instagram:** [@Milanhype_](https://instagram.com/Milanhype_)  
**Market:** United States  
**Shipping:** Free over $75 · Customer-paid below $75  
**Returns:** 30 days

---

## 1. Store Setup Checklist

### 1.1 Shopify Admin → Settings

| Setting | Value |
|---------|-------|
| **Store name** | Milan Hype |
| **Legal business name** | [Your legal entity] |
| **Store email** | support@milanhype.com (or your domain email) |
| **Customer email** | support@milanhype.com |
| **Currency** | USD |
| **Timezone** | Your local US timezone |
| **Order ID format** | `#MH{{ number }}` (customize in Settings → Checkout) |

### 1.2 Shipping (Settings → Shipping and delivery)

**Domestic — United States**

| Rate name | Condition | Price |
|-----------|-----------|-------|
| Standard Shipping | Order subtotal < $75 | $6.95 (adjust to your carrier cost) |
| Free Standard Shipping | Order subtotal ≥ $75 | $0.00 |

**Processing time:** 1–2 business days (display on Shipping Policy page)

**Optional upgrade (add later):**
| Express Shipping | All orders | $12.95 · 2–3 business days |

### 1.3 Payments

Enable:
- Shopify Payments (primary)
- Shop Pay
- Apple Pay
- Google Pay
- PayPal (optional — many fashion customers expect it)

### 1.4 Checkout Settings

- Guest checkout: **Enabled**
- Customer accounts: **Optional** (recommended — enables order history, faster repeat purchase)
- Tip: Disable unless you want it
- Marketing opt-in: **Pre-checked OFF** (better trust; higher-quality list when they opt in)

### 1.5 Taxes

- Enable Shopify Tax or connect TaxJar
- Collect sales tax in all applicable US states

---

## 2. Navigation Structure

### 2.1 Main Menu

```
New Arrivals          →  /collections/new-arrivals
Women                 →  /collections/women
  ├── All Women       →  /collections/women
  ├── Tops            →  /collections/women-tops
  ├── Bottoms         →  /collections/women-bottoms
  ├── Dresses         →  /collections/women-dresses
  ├── Outerwear       →  /collections/women-outerwear
  └── Accessories     →  /collections/women-accessories
Men                   →  /collections/men
  ├── All Men         →  /collections/men
  ├── Tops            →  /collections/men-tops
  ├── Bottoms         →  /collections/men-bottoms
  ├── Outerwear       →  /collections/men-outerwear
  └── Accessories     →  /collections/men-accessories
Best Sellers          →  /collections/best-sellers
Sale                  →  /collections/sale
```

**Shopify setup:** Online Store → Navigation → Main menu

### 2.2 Footer Menu

**Column 1 — Shop**
- Women
- Men
- New Arrivals
- Best Sellers
- Sale

**Column 2 — Help**
- FAQ
- Contact Us
- Track Order → /pages/track-order (or link to Shopify order status)
- Size Guide → /pages/size-guide

**Column 3 — Company**
- About Us
- Instagram → https://instagram.com/Milanhype_

**Column 4 — Legal**
- Shipping Policy
- Return Policy
- Privacy Policy
- Terms of Service

---

## 3. Collection Structure

Create these collections in **Products → Collections**:

| Collection | Handle | Type | Sort order |
|------------|--------|------|------------|
| New Arrivals | `new-arrivals` | Automated | Created date, newest first |
| Women | `women` | Automated | Best selling |
| Men | `men` | Automated | Best selling |
| Best Sellers | `best-sellers` | Automated | Best selling |
| Sale | `sale` | Automated | Compare at price is set |
| Women — Tops | `women-tops` | Automated | Tag = `women` + product type `Tops` |
| Women — Bottoms | `women-bottoms` | Automated | Tag = `women` + product type `Bottoms` |
| Women — Dresses | `women-dresses` | Automated | Tag = `women` + product type `Dresses` |
| Women — Outerwear | `women-outerwear` | Automated | Tag = `women` + product type `Outerwear` |
| Women — Accessories | `women-accessories` | Automated | Tag = `women` + product type `Accessories` |
| Men — Tops | `men-tops` | Automated | Tag = `men` + product type `Tops` |
| Men — Bottoms | `men-bottoms` | Automated | Tag = `men` + product type `Bottoms` |
| Men — Outerwear | `men-outerwear` | Automated | Tag = `men` + product type `Outerwear` |
| Men — Accessories | `men-accessories` | Automated | Tag = `men` + product type `Accessories` |

**Product tagging convention (when you upload):**
- Gender: `women`, `men`, `unisex`
- Type: `tops`, `bottoms`, `dresses`, `outerwear`, `accessories`
- Status: `new-arrival`, `best-seller`, `sale`

---

## 4. Pages to Create

| Page | Handle | Template |
|------|--------|----------|
| About Us | `about-us` | page |
| Contact Us | `contact` | page.contact (Prestige) |
| FAQ | `faq` | page |
| Size Guide | `size-guide` | page |
| Shipping Policy | `shipping-policy` | page |
| Return Policy | `return-policy` | page |
| Privacy Policy | `privacy-policy` | Shopify policy generator |
| Terms of Service | `terms-of-service` | Shopify policy generator |

**Create pages:** Online Store → Pages → Add page

---

## 5. Prestige Theme Configuration

### 5.1 Theme Settings → Colors

| Token | Hex | Use |
|-------|-----|-----|
| Background | `#FAFAFA` | Page background |
| Text | `#0A0A0A` | Body text |
| Heading | `#0A0A0A` | Headlines |
| Button background | `#0A0A0A` | Primary CTAs |
| Button text | `#FAFAFA` | CTA text |
| Accent | `#C9A96E` | Sale badges, subtle highlights |
| Border | `#E8E8E8` | Dividers, cards |

### 5.2 Theme Settings → Typography

| Element | Font | Weight |
|---------|------|--------|
| Headings | DM Sans | 500 |
| Body | Inter | 400 |
| Navigation | DM Sans | 500, letter-spacing +1px |

*If DM Sans / Inter aren't in Prestige, add via Theme Settings → Custom font or use similar: Outfit (headings) + Inter (body).*

### 5.3 Theme Settings → Logo

- Upload logo when ready (recommended: horizontal wordmark, transparent PNG)
- Favicon: "MH" monogram or full logo mark
- Logo width: 120–140px desktop, 100px mobile

### 5.4 Theme Settings → Cart

- Cart type: **Drawer** (recommended for fashion — keeps customer on page)
- Enable cart notes: Off
- Show free shipping bar: **On** — threshold `$75`
- Free shipping message: `You're {{ amount }} away from free shipping`

### 5.5 Theme Settings → Product

- Enable quick buy on collection pages: **On**
- Show vendor: **Off**
- Show SKU: **Off**
- Enable product reviews: **On** (install Judge.me or Loox)

### 5.6 Announcement Bar

**Default message:**
> Free shipping on orders over $75 · Easy 30-day returns

Rotate seasonally:
> New arrivals just dropped — Shop now
> Join us on Instagram @Milanhype_

---

## 6. Apps to Install (Recommended)

| App | Purpose | Priority |
|-----|---------|----------|
| **Klaviyo** | Email + SMS flows | Essential |
| **Judge.me** or **Loox** | Photo reviews | Essential |
| **Instafeed** or **Foursixty** | Instagram feed on homepage | High |
| **AfterShip** or Shopify native | Order tracking page | High |
| **Rebuy** or **Shopify Search & Discovery** | Upsells, cross-sells | Medium |
| **Privy** or Klaviyo popup | Newsletter capture | Medium |

**Avoid:** Too many apps — each one slows the store. Start with Klaviyo + reviews + Instagram feed.

---

## 7. SEO — Store-Level

**Homepage meta title:**
> Milan Hype | Premium Contemporary Fashion — Dress the Moment

**Homepage meta description:**
> Shop premium men's and women's fashion at Milan Hype. Elevated everyday style, free shipping over $75, and easy 30-day returns. Follow @Milanhype_ on Instagram.

**Social sharing image:** 1200×630px brand image with logo + tagline

---

## 8. Footer Content (Copy-Paste Ready)

**Newsletter heading:**
> Stay in the loop

**Newsletter subtext:**
> First access to new drops, styling edits, and exclusive offers.

**Footer tagline:**
> Dress the Moment.

**Copyright:**
> © {{ year }} Milan Hype. All rights reserved.

**Social links:**
- Instagram: https://instagram.com/Milanhype_
- TikTok: [add when ready]

---

## 9. Implementation Order

1. Install Prestige theme
2. Apply colors, typography, logo
3. Create all collections (empty is fine)
4. Build navigation menus
5. Create all pages (paste content from docs 02–09)
6. Build homepage sections (doc 02)
7. Configure shipping rates
8. Install Klaviyo + reviews + Instagram feed
9. Connect Instagram @Milanhype_ to Instafeed
10. Test mobile checkout end-to-end
11. Upload products when ready

---

*Next: See `02-homepage.md` for full homepage section copy and Prestige block mapping.*
