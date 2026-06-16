# Milan Hype — Collection Page Structure

---

## 1. Global Collection Page Layout (Prestige)

| Element | Setting |
|---------|---------|
| Grid | 3 columns desktop · 2 columns mobile |
| Products per page | 24 (load more) or 36 (pagination) |
| Image ratio | Portrait 2:3 (fashion standard) |
| Hover | Show second product image |
| Quick add | Enabled on mobile and desktop |
| Filters | Size, Color, Price, Availability |
| Sort | Featured, Best selling, Price low–high, Price high–low, Newest |

---

## 2. Collection Pages — Copy & Setup

### New Arrivals

| Field | Content |
|-------|---------|
| **Title** | New Arrivals |
| **Handle** | `new-arrivals` |
| **Banner heading** | New Arrivals |
| **Banner subtext** | Fresh styles. Just dropped. |
| **Description** | Discover the latest pieces from Milan Hype. Updated weekly with new drops across men's and women's collections. |
| **SEO title** | New Arrivals \| Milan Hype — Latest Fashion Drops |
| **Meta description** | Shop the latest new arrivals at Milan Hype. Fresh men's and women's styles dropped weekly. Free shipping over $75. |
| **Sort** | Newest |
| **Automation** | Product tag equals `new-arrival` OR created in last 30 days |

---

### Women

| Field | Content |
|-------|---------|
| **Title** | Women |
| **Handle** | `women` |
| **Banner heading** | Women |
| **Banner subtext** | Elevated style. Effortless confidence. |
| **Description** | Shop the full Milan Hype women's collection — from everyday essentials to statement pieces designed to move with you. |
| **SEO title** | Women's Fashion \| Milan Hype — Premium Contemporary Style |
| **Meta description** | Shop premium women's fashion at Milan Hype. Tops, bottoms, dresses, outerwear & more. Free shipping over $75 & 30-day returns. |
| **Sort** | Best selling |
| **Automation** | Product tag equals `women` |

**Sub-collections:**

| Sub-collection | Handle | Description |
|----------------|--------|-------------|
| Tops | `women-tops` | Essential tees, blouses, and elevated tops for every occasion. |
| Bottoms | `women-bottoms` | Tailored trousers, relaxed fits, and everyday bottoms. |
| Dresses | `women-dresses` | From casual day dresses to evening-ready silhouettes. |
| Outerwear | `women-outerwear` | Jackets, blazers, and coats that complete the look. |
| Accessories | `women-accessories` | Finishing touches that elevate every outfit. |

---

### Men

| Field | Content |
|-------|---------|
| **Title** | Men |
| **Handle** | `men` |
| **Banner heading** | Men |
| **Banner subtext** | Clean lines. Modern energy. |
| **Description** | The Milan Hype men's collection — contemporary pieces built for style, comfort, and confidence. |
| **SEO title** | Men's Fashion \| Milan Hype — Premium Contemporary Style |
| **Meta description** | Shop premium men's fashion at Milan Hype. Tops, bottoms, outerwear & accessories. Free shipping over $75 & 30-day returns. |
| **Sort** | Best selling |
| **Automation** | Product tag equals `men` |

**Sub-collections:**

| Sub-collection | Handle | Description |
|----------------|--------|-------------|
| Tops | `men-tops` | Premium tees, shirts, and layers for everyday and beyond. |
| Bottoms | `men-bottoms` | Tailored and relaxed fits designed for modern movement. |
| Outerwear | `men-outerwear` | Jackets and coats that finish the fit. |
| Accessories | `men-accessories` | Details that complete the look. |

---

### Best Sellers

| Field | Content |
|-------|---------|
| **Title** | Best Sellers |
| **Handle** | `best-sellers` |
| **Banner heading** | Best Sellers |
| **Banner subtext** | The pieces our customers love most. |
| **Description** | Our most-loved styles — tried, tested, and rated by the Milan Hype community. |
| **SEO title** | Best Sellers \| Milan Hype — Top Rated Fashion |
| **Meta description** | Shop Milan Hype best sellers. Top-rated men's and women's fashion loved by our community. Free shipping over $75. |
| **Sort** | Best selling |
| **Automation** | Product tag equals `best-seller` OR best selling (manual curation recommended) |

---

### Sale

| Field | Content |
|-------|---------|
| **Title** | Sale |
| **Handle** | `sale` |
| **Banner heading** | Sale |
| **Banner subtext** | Premium style. Limited-time pricing. |
| **Description** | Shop select Milan Hype styles at reduced prices. Same quality. Same easy returns. |
| **SEO title** | Sale \| Milan Hype — Premium Fashion at Reduced Prices |
| **Meta description** | Shop the Milan Hype sale. Premium men's and women's fashion at reduced prices. Free shipping over $75. |
| **Sort** | Price: low to high |
| **Automation** | Compare at price is set |

**Note:** Keep sale section minimal. Over-discounting hurts premium perception. Use for end-of-season or selective markdowns only.

---

## 3. Collection Banner Image Specs

| Spec | Value |
|------|-------|
| Size | 2400×800px (desktop banner) |
| Mobile crop | Center-weighted, key subject in middle 60% |
| Style | Lifestyle or editorial — not product grid |
| Text overlay | Use Prestige text overlay — white text on darkened image |
| Alt text | Milan Hype [collection name] collection |

---

## 4. Collection Filter Setup (Search & Discovery)

Enable filters:
- **Availability** — In stock / Out of stock
- **Price** — Range slider
- **Size** — XS, S, M, L, XL, XXL (from variant options)
- **Color** — From variant options or metafields

Enable sort:
- Featured
- Best selling
- Alphabetically, A–Z
- Price, low to high
- Price, high to low
- Date, new to old

---

## 5. Collection SEO Text (Bottom of Page)

Add collapsed SEO text at bottom of each main collection (visible on desktop, collapsed on mobile):

**Women — SEO footer:**
> Milan Hype offers premium women's fashion designed for the modern style-setter. From elevated everyday essentials to statement pieces for nights out, every item is crafted with intention. Shop with confidence — free shipping on US orders over $75 and easy 30-day returns. Follow us on Instagram @milanhype for daily styling inspiration.

**Men — SEO footer:**
> Discover Milan Hype men's fashion — contemporary pieces with clean lines and modern energy. Our collection includes premium tops, bottoms, outerwear, and accessories designed for comfort and confidence. Free US shipping on orders over $75. Easy 30-day returns.

---

## 6. Empty Collection State (Pre-Launch)

Until products are uploaded, set collection pages to:
- Show banner + description
- Hide product grid or show "Coming Soon" rich text block:

> **Coming Soon**  
> New pieces are on the way. Follow [@milanhype](https://instagram.com/milanhype) on Instagram for the first look.

---

## 7. Mobile Collection UX

1. Filters open as slide-out drawer (not new page)
2. 2-column product grid with large images
3. Product title max 2 lines, truncate with ellipsis
4. Price always visible — no hidden pricing
5. Quick-add button visible without hover
6. Sticky sort/filter bar at top when scrolling

---

*Next: `05-about-us.md` through `09-customer-support-templates.md`*
