# Stripe Current Config Inventory REV01

Status: Current Config Inventory
Task: RUNTIME-AUDIT-004
Date: 2026-06-10
Customer-facing: No
Implementation authority: No

## Purpose

This document records a read-only Stripe Current Config Inventory for WNY Home Security payment ownership, products/prices, checkout posture, webhook endpoints, deposit/payment verification, and secret-management boundaries.

This is an inventory artifact only. It does not authorize or perform Stripe configuration, product, price, checkout, payment link, webhook, tax, payout, account, API key, code, runtime behavior, HubSpot, Cloudflare, Resend, Google Workspace, or secret changes.

## Authority Boundary

- `docs/runtime/stripe_runtime.md` remains the canonical Stripe runtime/payment contract.
- Server-side verification and webhook authority boundaries are preserved.
- Payment success must not be inferred from redirect URLs.
- Client-visible success state and redirect query parameters are not payment authority by themselves.
- Payment/deposit completion must rely on trusted server-side Stripe evidence, including Stripe API verification and/or validated webhook events.
- No configuration changes were made.
- No secret values were recorded.

## Evidence Inspected

The inventory used repo-side documentation and source references only:

- `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`
- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/stripe_runtime.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/stripe-cloudflare.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `functions/api/create-checkout-session.ts`
- `functions/api/verify-checkout-session.ts`
- `functions/api/stripe-webhook.ts`
- `functions/api/_stripe.ts`
- `api/create-checkout-session.ts`
- `api/verify-checkout-session.ts`
- `api/stripe/create-checkout-session.ts`
- `api/stripe/verify-session.ts`
- `api/stripe-webhook.ts`
- `src/newsite/pages/HomeSecurityPayDeposit.tsx`
- `src/newsite/pages/HomeSecurityPaymentSuccess.tsx`

Live Stripe dashboard, CLI, and API-only configuration areas were not inspected because no Stripe dashboard access, Stripe CLI access, API credential, operator export, or screenshots were available for this task.

## Inventory Summary

| Area | Inventory result | Source posture |
|---|---|---|
| Account mode | Not inspected. Live/test mode and account identity require Stripe dashboard/API access. | Not available in repo evidence. |
| Products | Not inspected live. No static Stripe product IDs were identified in inspected repo evidence. Checkout creation appears to use dynamic `price_data` with product data. | Repo-documented/source-observed partial evidence. |
| Prices | Not inspected live. No static Stripe price IDs were identified in inspected repo evidence. Checkout creation appears to calculate dynamic deposit amounts. | Repo-documented/source-observed partial evidence. |
| Checkout posture | Repo evidence identifies checkout session creation through server endpoints and hosted Stripe Checkout redirection. Live checkout dashboard settings were Not inspected. | Repo-documented/source-observed partial evidence. |
| Payment links | Not inspected. No live Stripe dashboard/API access was available to confirm whether payment links exist. | Not available in repo evidence. |
| Webhook endpoint | Repo evidence identifies `/api/stripe-webhook` and production URL `https://wnyhomesecurity.com/api/stripe-webhook`. Live Stripe webhook dashboard settings were Not inspected. | Repo-documented/source-observed partial evidence. |
| Webhook event names | Repo evidence identifies `checkout.session.completed`. Live subscribed event list and delivery logs were Not inspected. | Repo-documented/source-observed partial evidence. |
| Payment verification | Repo evidence preserves server-side verification via checkout-session verification endpoints and webhook signature verification. Redirect URLs are not payment authority. | Runtime contract evidence. |
| Environment variable names | Repo evidence identifies Stripe-related variable names without values. | Repo-documented/source-observed partial evidence. |
| Tax | Not inspected. Live Stripe Tax settings require Stripe dashboard/API access. | Not available in repo evidence. |
| Payouts | Not inspected. Live payout/account settings require Stripe dashboard/API access. | Not available in repo evidence. |

## Account Mode

Stripe account mode, live/test status, account identity, account country, account capabilities, payout configuration, tax configuration, and platform account posture were Not inspected because no Stripe dashboard, CLI, API access, operator export, or screenshots were available.

No Stripe account settings were changed.

## Products And Prices

Live Stripe products and prices were Not inspected because no Stripe dashboard, CLI, API access, operator export, or screenshots were available.

Repo evidence did not identify static Stripe product IDs or static Stripe price IDs in the inspected payment paths. The inspected checkout-session creation paths appear to use dynamic `price_data`, with product data for a home security deposit and calculated deposit amounts.

No Stripe product changes, price changes, payment link changes, tax changes, or payout changes were made.

## Checkout Posture

Repo evidence identifies these checkout creation paths:

- `/api/create-checkout-session`
- `/api/stripe/create-checkout-session`
- `functions/api/create-checkout-session.ts`
- `api/create-checkout-session.ts`
- `api/stripe/create-checkout-session.ts`

Repo evidence indicates hosted Stripe Checkout is used for payment collection. The checkout flow redirects the customer to Stripe-hosted checkout and then returns the customer to success or cancel URLs.

Observed metadata names in repo-side Stripe runtime evidence include:

- `vertical`
- `tier`
- `payment_type`
- `deposit_percent`
- `total_cents`
- `deposit_cents`
- `quoteRef`

The repo-side Stripe runtime contract records deposit assumptions as 50%.

Live checkout dashboard settings, payment method availability, branding settings, fraud controls, customer collection settings, invoice settings, and locale settings were Not inspected because no Stripe dashboard, CLI, API access, operator export, or screenshots were available.

Redirect URLs were not treated as payment authority.

## Webhook Posture

Repo evidence identifies:

- Webhook endpoint path: `/api/stripe-webhook`
- Production webhook URL: `https://wnyhomesecurity.com/api/stripe-webhook`
- Webhook source paths: `functions/api/stripe-webhook.ts` and `api/stripe-webhook.ts`
- Repo-observed event handling: `checkout.session.completed`
- Signature verification boundary: `stripe-signature` header with `STRIPE_WEBHOOK_SECRET`

Live Stripe webhook endpoint settings, subscribed event list, signing secret value, endpoint status, delivery logs, retry history, failure history, and endpoint mode were Not inspected because no Stripe dashboard, CLI, API access, operator export, or screenshots were available.

No webhook changes were made.

## Payment Verification Posture

Repo evidence identifies server-side payment verification through:

- `/api/verify-checkout-session`
- `/api/stripe/verify-session`
- `functions/api/verify-checkout-session.ts`
- `api/verify-checkout-session.ts`
- `api/stripe/verify-session.ts`

Repo evidence also identifies webhook signature verification before webhook payload trust.

Payment verification boundaries preserved by this inventory:

- Checkout session verification must remain server-side.
- Stripe API calls using secret keys must remain server-side.
- Webhook signature verification must occur before webhook event trust.
- Payment success must not be inferred from redirect URLs.
- Payment truth for operational state transitions must rely on server-verified Stripe evidence, not client redirect query parameters alone.

No client-side payment confirmation logic was added or changed.

## Environment Variable Names

The following variable names were identified in repo-side Stripe runtime evidence. Values were not inspected or recorded.

| Name | Inventory note |
|---|---|
| `STRIPE_PUBLISHABLE_KEY` | Frontend checkout initiation gate. Value not recorded. |
| `STRIPE_SECRET_KEY` | Server-side Stripe API authentication for session creation and verification. Value not recorded. |
| `STRIPE_WEBHOOK_SECRET` | Server-side webhook signature verification. Value not recorded. |
| `PUBLIC_SITE_URL` | Canonical site URL reference in runtime docs; exact deployed value Not inspected. |
| `NODE_ENV` | Runtime mode context; live value Not inspected. |
| `HUBSPOT_PRIVATE_APP_TOKEN` | Conditional downstream webhook update dependency only; HubSpot ownership is not redefined here. Value not recorded. |

No secret values were recorded.

## Not Inspected Areas

The following areas were Not inspected because no Stripe dashboard access, Stripe CLI access, API credential, operator export, or screenshots were available:

- Stripe account identity and account mode.
- Live/test key separation and active key status.
- Product list, product IDs, product status, product metadata, and product tax behavior.
- Price list, price IDs, price status, currency, tax behavior, recurring/one-time posture, and lookup keys.
- Payment link inventory.
- Checkout dashboard settings, branding, payment methods, fraud controls, and customer collection settings.
- Webhook dashboard endpoint settings, subscribed event names, signing secret value, endpoint status, delivery logs, retries, and failures.
- Stripe Tax settings.
- Payout, balance, bank account, dispute, and account capability settings.
- API key names, scopes, creation dates, expiration posture, and restricted key posture.
- Production session history, payment intent history, refunds, disputes, and event histories.

## Protected-System Confirmation

- No configuration changes were made.
- No Stripe product changes were made.
- No Stripe price changes were made.
- No checkout changes were made.
- No payment link changes were made.
- No webhook changes were made.
- No tax changes were made.
- No payout changes were made.
- No account changes were made.
- No code changes were made.
- No runtime behavior changed.
- No HubSpot, Cloudflare, Resend, or Google Workspace changes were made.
- No secret values were recorded.
- Server-side verification and webhook authority boundaries were preserved.
- Redirect URLs were not treated as payment authority.
