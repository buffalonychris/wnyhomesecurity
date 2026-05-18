# QUOTE-GEN001B Audit — REV01

## Purpose
Complete customer-facing estimate-to-quote routing so users can naturally move from estimate context into quote review and send quote copy without changing protected runtime, Stripe, scheduling, or HubSpot schema.

## Current gap found
- `/contact?vertical=home-security` functioned as estimate intake but lacked a clear quote-review CTA even when selected/recommended package context existed.
- `/quoteReview` fallback depended on saved quote state/token and did not accept a minimal durable query-based tier/recommendation bootstrap path.

## Files changed
- `src/lib/siteVersion.ts`
- `src/pages/Contact.tsx`
- `src/pages/QuoteReview.tsx`
- `docs/system/master-task-register.md`
- `docs/audits/quote_gen001b_rev01.md`

## Before behavior
- Estimate page only exposed estimate-form submit path.
- No explicit “Review Estimate Summary” action from estimate gateway.
- Quote review missing-context route offered generic recovery, not the required triad.

## After behavior
- Estimate gateway now shows **Review Estimate Summary** when selected-package or recommended-tier context is available.
- CTA routes to `/quoteReview` with durable query context (`tier`, `recommended`, `fit`, `vertical`).
- Quote review can hydrate from token, stored quote state, or query bootstrap for home-security tier mapping.
- Missing-context quote fallback now exposes required recovery options:
  - Find The Right System
  - Choose a Package
  - Request Estimate
- Required disclaimer remains present in quote review and quote email runtime.

## Quote route/context strategy
1. Keep existing preferred context sources (`t` token, saved `retailFlow.quote`).
2. Add bounded fallback for home-security query context:
   - `tier=bronze|silver|gold` or `recommended=bronze|silver|gold`
   - Map to package IDs `A1|A2|A3`
   - Build minimal quote context using canonical package base pricing and no add-ons.
3. If none available, show safe recovery UI.

## Send quote behavior
- Existing `/api/send-quote` path remains in use; no endpoint changes required.
- UI already enforces valid recipient email before send and continues to support operator/ownership copy through runtime config.

## Deferred items
- HubSpot quote logging (`QUOTE-HUBSPOT001`) remains deferred.
- Quote stage advancement (`QUOTE-STAGE001`) remains deferred.

## Forbidden items not implemented
- No `/api/lead-signal` changes.
- No `/api/support` changes.
- No Stripe/payment changes.
- No scheduling changes.
- No SMS/reminder/autonomous booking.
- No PDF/AI proposal generation.
- No HubSpot schema/property/pipeline changes.

## Validation
- `npm run lint`
- `npm run test -- --run`
- `npm run build`
- `git diff -- src docs functions`
- `rg` scoped audits required by task prompt

## Manual QA checklist
1. Open `/contact?vertical=home-security`.
2. Confirm direct estimate page still works.
3. Complete Fit Check and continue to estimate.
4. Confirm **Review Estimate Summary** appears with context.
5. Click CTA and verify quote review renders.
6. Confirm required disclaimer appears.
7. Open `/quoteReview` without context and verify recovery CTAs.
8. Test send quote with valid customer email.
9. Confirm `/api/lead-signal` flow still works.
10. Confirm `/api/support` flow still works.
11. Confirm no Stripe/scheduling/SMS behavior appears.

## Last verified
2026-05-18 (UTC)
