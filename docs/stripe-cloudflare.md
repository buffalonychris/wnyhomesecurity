# Stripe Cloudflare Pages Functions

## Required environment variables

Configure these in **Cloudflare Pages → Settings → Environment variables** for the production (and preview) deployments:

- `STRIPE_SECRET_KEY` — Stripe secret API key.
- `STRIPE_WEBHOOK_SECRET` — Webhook signing secret from the Stripe dashboard.
- `STRIPE_PUBLISHABLE_KEY` — Publishable key used by the frontend (if not already configured).

## Webhook endpoint

Point Stripe webhooks to:

```
https://wnyhomesecurity.com/api/stripe-webhook
```

## Cloudflare Pages setup

1. Open **Cloudflare Pages → wnyhomesecurity → Settings → Environment variables**.
2. Add the variables above as **Secrets** for production and preview.
3. Deploy; the `/functions` directory provides the `/api/*` routes via Pages Functions.
