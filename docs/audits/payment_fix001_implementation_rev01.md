# PAYMENT-FIX001 Implementation — REV01

## Scope
Bounded Stripe payment/deposit handoff verification and claim-safe hardening only.

## Stripe runtime path confirmed
- Checkout creation: `/api/create-checkout-session` (`api/create-checkout-session.ts`) and `/api/stripe/create-checkout-session` (`functions/api/create-checkout-session.ts`).
- Session verification: `/api/verify-checkout-session` and `/api/stripe/verify-session`.
- Webhook: `/api/stripe-webhook` in both `api/stripe-webhook.ts` and `functions/api/stripe-webhook.ts`.

## Payment/deposit routes inventoried
- Main pay deposit: `/home-security/pay-deposit` (`src/pages/HomeSecurityPayDeposit.tsx`).
- Main success: `/home-security/payment/success` (`src/pages/HomeSecurityPaymentSuccess.tsx`).
- Main canceled/cancel: `/home-security/payment/canceled`, `/home-security/payment/cancel`.
- Newsite pay deposit: `/newsite/home-security/pay-deposit` (`src/newsite/pages/HomeSecurityPayDeposit.tsx`).
- Newsite success: `/newsite/home-security/payment/success` (`src/newsite/pages/HomeSecurityPaymentSuccess.tsx`).
- Newsite cancel: `/newsite/home-security/payment/cancel`.

## Success/cancel/failure audit
- Success pages use server verification endpoint before showing verified success state.
- Cancel pages retain restart/help posture and do not claim payment completion.

## requestId/context behavior
- Payment flow consistently carries `quoteRef`/agreement metadata through checkout creation.
- Payment verification returns metadata used by success page to update local deposit status map by quote reference.
- requestId remains canonical in lead-signal path and was intentionally not re-architected in this task.

## Server-side verification posture
- Preserved. Success pages call server endpoints for session verification; no client-side redirect-only trust introduced.
- Webhook architecture and verification path untouched.

## Copy/CTA issues found
- Main success support copy over-implied scheduling coordination certainty wording.
- Newsite package tier copy used “reserve installation” phrasing.
- Verified success CTA context source param was generic; tightened to explicit payment-verified source label.

## Changes made
- Hardened post-payment copy to explicit owner-confirmation posture.
- Updated newsite package tier next-step claim to remove reservation implication.
- Updated verified schedule handoff source query value to `payment_verified`.
- Bumped visible site version to `v1.0.45`.
- Updated task register lifecycle to READY -> ACTIVE -> DONE for PAYMENT-FIX001.

## Intentionally preserved behavior
- Stripe checkout architecture unchanged.
- Existing checkout/session/webhook endpoints unchanged.
- No new products/prices/payment modes.
- No HubSpot schema/property/pipeline changes.
- No scheduling architecture changes.

## Remaining payment risks
- Legacy dual endpoint surface (`/api/create-checkout-session` vs `/api/stripe/create-checkout-session`) remains and may merit future convergence task.
- Full requestId-to-session canonical mapping across all payment variants remains documentation/architecture follow-up.

## Validation performed
- `npm run build`
- required grep scans for payment/stripe/CTA/scheduling claims
- `git diff -- src functions api docs`
- `git status --short`
