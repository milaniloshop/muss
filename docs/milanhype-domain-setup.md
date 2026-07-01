# milanhype.com — Connect Domain (GitHub Pages)

The site deploys automatically from `main` via GitHub Actions.

## 1. GitHub Pages (already set up)

- Workflow: `.github/workflows/deploy-pages.yml`
- Source folder: `website/`
- Custom domain in repo: **Settings → Pages → Custom domain** = `milanhype.com`
- `website/CNAME` contains `milanhype.com`

## 2. Namecheap DNS (you do this)

1. [namecheap.com](https://www.namecheap.com) → **Domain List** → **milanhype.com** → **Manage**
2. **Advanced DNS** → delete parking / old records
3. Add:

```
A     @      185.199.108.153
A     @      185.199.109.153
A     @      185.199.110.153
A     @      185.199.111.153
CNAME www    milaniloshop.github.io.
```

4. Save → wait 15–60 min → GitHub Pages → **Check again**

## 3. Verify

```bash
dig +short milanhype.com A
# Should show the four 185.199.x.x IPs — NOT 162.255.119.213
```

Open **https://milanhype.com** → product page → **Buy Now** → test card `4242 4242 4242 4242`

## 4. Stripe (when going live)

Set `BASE_URL=https://milanhype.com` and re-run:

```bash
cd website
STRIPE_SECRET_KEY=sk_live_... npm run stripe:setup
BASE_URL=https://milanhype.com node scripts/setup-payment-links.js
```

In Stripe Dashboard → Settings → Checkout → add `milanhype.com` to allowed domains if prompted.

## Alternative: Render (optional)

If you want server-side cart checkout instead of Payment Links, use `render.yaml` blueprint. For static + Payment Links, GitHub Pages is enough and free.
