# WNY Home Security — Full Stack Spec

Status: Active supporting spec

---

## Purpose

Define the standalone WNY Home Security site as separate from the old hub/source repo.

---

## Correct Repository

```txt
buffalonychris/wnyhomesecurity
```

Wrong repo for implementation:

```txt
KAECRetailWebsite
```

---

## Required Runtime

- Cloudflare Pages frontend
- Cloudflare Pages Functions or existing API layer
- Resend outbound email
- Cloudflare Email Routing inbound email
- Stripe for payment/deposit flow

---

## Protected Backend Areas

Do not modify without explicit Step scope:

- Stripe checkout/session creation
- Stripe webhook verification
- Quote/agreement verification
- Email provider secrets
- CRM/HubSpot writes

---

## Deployment Verification

Bump visible version badge for deploy-impacting work.

Run build before completion.

