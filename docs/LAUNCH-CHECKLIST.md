# Milan Hype — Launch Checklist

Everything below is done **except the DNS step** (only you can do that in Namecheap).

## Done for you

- [x] CoreFit store (4 tiers, luxury design)
- [x] Stripe test products + Payment Links (Buy Now works without a server)
- [x] GitHub Pages deploy workflow on `main`
- [x] `CNAME` file → `milanhype.com`
- [x] Custom domain added in GitHub repo Settings → Pages

## You must do (5 minutes) — Namecheap DNS

1. Log in at [namecheap.com](https://www.namecheap.com) → **Domain List** → **milanhype.com** → **Manage**
2. **Advanced DNS** tab
3. **Delete** all existing records (especially the parking A record `162.255.119.213`)
4. **Add** these records only:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| A     | `@`  | `185.199.108.153`        |
| A     | `@`  | `185.199.109.153`        |
| A     | `@`  | `185.199.110.153`        |
| A     | `@`  | `185.199.111.153`        |
| CNAME | `www`| `milaniloshop.github.io.`|

5. Save → wait **15–60 minutes**
6. GitHub → repo **Settings → Pages** → click **Check again** next to custom domain
7. When green ✓, open **https://milanhype.com**

> Until DNS propagates, the site redirects to `milanhype.com` but won't load (parking page). That's normal — fix DNS and it goes live.

## Test checkout (after site loads)

1. Open any product → **Buy Now**
2. Stripe test card: `4242 4242 4242 4242` · any future expiry · any CVC · any ZIP

## Stripe Payment Links (test mode)

| Tier       | Link |
|------------|------|
| Essential  | https://buy.stripe.com/test_8x214f40o9yq9dw9MP3AY00 |
| Pro        | https://buy.stripe.com/test_00w00b7cAcKCcpIf793AY01 |
| Elite      | https://buy.stripe.com/test_cNieV57cA5ia9dwbUX3AY02 |
| Signature  | https://buy.stripe.com/test_bJe00baoMh0SgFYe353AY03 |

## When ready for real sales

1. Stripe Dashboard → toggle **Live mode**
2. Create new live secret key (`sk_live_...`) — **never post in chat**
3. On your machine in `website/`:
   ```bash
   STRIPE_SECRET_KEY=sk_live_... npm run stripe:setup
   BASE_URL=https://milanhype.com node scripts/setup-payment-links.js
   ```
4. Commit updated `stripe-payment-links.json` and push

## Next: product photos

Order 3–4 samples from supplier → drop JPGs in `website/photos-to-import/` → run `node import-photos.js` locally → push images.

## Ads (when site + samples ready)

- **Google Search** first (intent keywords: "men compression tank", "chest compression shirt men")
- US validation: budget ~$100–200 over 3–5 days minimum
- Dubai/KSA micro-test ($30/2 days) = creative test only, not US proof
