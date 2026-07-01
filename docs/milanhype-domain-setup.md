# milanhype.com — Connect Domain

## 1. Deploy site (Render — free)

1. Go to [render.com](https://render.com) → Sign up with GitHub
2. **New +** → **Blueprint** → connect repo `milaniloshop/muss`
3. Branch: `cursor/serve-milan-hype-a3d6`
4. Add env var: `STRIPE_SECRET_KEY` = your `sk_test_...` key
5. Deploy → wait until **Live**

## 2. Add custom domain on Render

1. Render dashboard → your service → **Settings** → **Custom Domains**
2. Add: `milanhype.com`
3. Add: `www.milanhype.com`
4. Render shows DNS records — copy them

## 3. Namecheap DNS

1. [namecheap.com](https://www.namecheap.com) → **Domain List** → **milanhype.com** → **Manage**
2. **Advanced DNS** tab
3. Delete parking records if any
4. Add what Render tells you (usually):

| Type | Host | Value |
|------|------|-------|
| CNAME | `www` | `your-app.onrender.com` |
| ALIAS or A | `@` | Render IP or ALIAS target |

5. Save → wait 15–60 min

## 4. Update Stripe

In `website/.env` on Render, set:
```
BASE_URL=https://milanhype.com
```

In Stripe Dashboard → Settings → Checkout → add `milanhype.com` to allowed domains if asked.

## 5. Test

Open **https://milanhype.com** → Buy Now → test card `4242 4242 4242 4242`
