# QUOTE-SEND001 Audit — REV01

## Purpose
Verify and harden the quote send runtime before any HubSpot quote logging or quote-stage automation work.

## Current send-quote behavior found
- Endpoint exists at `POST /api/send-quote` (`functions/api/send-quote.ts`).
- It validates method/json/recipient and sends both customer and operator emails via Resend.
- QuoteReview already includes estimate-summary disclaimer copy and missing-context fallback.

## Files changed
- `src/lib/siteVersion.ts`
- `functions/api/send-quote.ts`
- `src/pages/QuoteReview.tsx`
- `docs/system/master-task-register.md`
- `docs/audits/quote_send001_rev01.md`

## Before behavior
- Runtime validated recipient email but allowed missing quote tier/review URL context.
- Home-security quote review relied on auto-send path and did not expose a clear manual send action.

## After behavior
- Runtime now rejects missing quote tier/package context.
- Runtime now rejects missing quote review URL.
- Delivery failure message now clearly indicates one-or-more recipient failure.
- Home-security quote review now shows explicit manual send action (`Send estimate summary`) with success/error states.

## Customer email behavior
- Sends estimate-summary review copy only when payload is valid.
- Includes package/tier context, review link, and required disclaimer.
- Avoids final-agreement wording.

## Operator/ownership email behavior
- Sends notification containing recipient, tier/package, review URL, resume URL (when present), and disclaimer trace.

## Validation/error handling
- `405` method guard.
- `400` invalid JSON guard.
- `400` invalid recipient guard.
- `400` missing quote tier/package context guard.
- `400` missing review URL guard.
- `503` runtime config guard.
- `502` Resend delivery failure guard.

## HubSpot/stage deferral notes
- `QUOTE-HUBSPOT001` remains deferred.
- `QUOTE-STAGE001` remains deferred.
- `CRM-STAGEFLOW001` remains deferred.

## Runtime preservation notes
- `/api/lead-signal` unchanged.
- `/api/support` unchanged.
- HubSpot schema/pipeline IDs unchanged.
- Stripe/payment runtime unchanged.

## Forbidden items not implemented
- No HubSpot quote logging changes.
- No HubSpot stage update changes.
- No Stripe/scheduling/SMS/reminder/autonomous booking/PDF/AI-proposal work.

## Validation results
- Ran lint/test/build and required diff/rg audits.
- Baseline lint + one test failure remain pre-existing.

## Manual QA checklist
1. Open `/home-security`.
2. Complete Fit Check.
3. Continue to Estimate Request.
4. Click Review Estimate Summary.
5. Confirm QuoteReview renders.
6. Enter customer email if needed.
7. Click Send estimate summary.
8. Confirm success/error state renders.
9. Confirm customer email received.
10. Confirm operator/ownership email received.
11. Confirm disclaimer present.
12. Confirm missing-context QuoteReview cannot send.
13. Confirm `/api/lead-signal` still works.
14. Confirm `/api/support` still works.
15. Confirm no HubSpot stage/logging automation was added.
16. Confirm no Stripe/scheduling/SMS behavior appears.

## Last verified
2026-05-18 (UTC)
