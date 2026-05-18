# ESTIMATE-EMAIL001 Audit — REV01

## Purpose
Refine the customer estimate-request acknowledgement email copy for stronger professionalism, local trust tone, mobile readability, and clear next-step expectations without changing protected runtime behavior.

## Current email behavior found
- Send path: `sendCustomerAcknowledgementEmail` in `functions/api/lead-signal.ts`.
- Subject before: `[WNYHS] Request received — ${requestId}`.
- Greeting/body before: terse plain-text receipt + summary fields + “An operator will review this request and follow up to confirm next steps.”
- Dynamic fields in use before: requestId, customer name/phone/email, source route, vertical, requested help, selected package, fit-check completed/recommended package (if discovery context exists), preferred estimate window.
- Footer/contact details before: no explicit business phone/reply guidance beyond plain receipt line items.
- Quote/recommendation/discovery context before: selected package + discovery context lines already included when available.

## Delivery path verification
- Customer acknowledgement is sent from protected `/api/lead-signal` path via `sendCustomerAcknowledgementEmail`.
- Operator notification is separate via `sendLeadSignalEmail`.
- Scope is text/template-only and does not alter request lifecycle, runtime orchestration, HubSpot flow, or operator notification behavior.

## Files changed
- `src/lib/siteVersion.ts`
- `functions/api/lead-signal.ts`
- `docs/system/master-task-register.md`
- `docs/audits/estimate_email001_rev01.md`

## Before behavior
- Customer acknowledgement subject and body were functional but terse and less polished.
- Clear local-contact footer and formal next-step disclaimer language were not explicitly included.

## After behavior
- Subject updated to: **We received your WNY Home Security estimate request**.
- Greeting updated to personalized `Hi <name>,` fallback `Hi there,`.
- Body rewritten into short, mobile-readable paragraphs.
- Local professional trust language added while avoiding overpromises.
- Required expectation/disclaimer added (selected package/recommendation is a starting point; final equipment/scope/pricing confirmed before work scheduling).
- Safe response-time wording added: “We’ll review your request and follow up as soon as we can.”
- Reply/contact guidance added: reply-to-email or phone contact.
- Request ID and source-route traceability retained.

## Subject line selected
- `We received your WNY Home Security estimate request`

## Dynamic context preserved
- Selected package context preserved.
- Discovery context lines preserved when available (`fit check completed`, `recommended package`).
- Requested help and preferred estimate window preserved.
- requestId and source route preserved.

## Runtime preservation notes
- `/api/lead-signal` runtime control flow unchanged.
- requestId lifecycle unchanged.
- HubSpot sync behavior unchanged.
- Operator notification behavior unchanged.
- Resend mechanics unchanged except customer acknowledgement text/subject content.
- `/api/support` and quote send paths untouched.

## Forbidden claims avoided
- No monitoring/dispatch/police/emergency/guarantee/insurance/finalized-scope claims introduced.
- No final-price or final-agreement promise language introduced.

## Validation results
- `npm run lint` (pre-existing unrelated failures unchanged baseline).
- `npm run test -- --run` (pre-existing failing test unchanged baseline: `src/pages/__tests__/operatorNavbar.test.tsx`).
- `npm run build` passed.
- Required diff and grep audits completed.

## Manual QA checklist
1. Submit estimate request from direct Estimate page.
2. Confirm customer acknowledgement email sends.
3. Confirm subject line is professional.
4. Confirm email reads correctly on mobile.
5. Confirm selected package/recommendation context is preserved when present.
6. Confirm disclaimer/expectation language is present.
7. Confirm customer can reply/contact business.
8. Confirm operator notification still sends.
9. Confirm HubSpot sync still works.
10. Confirm `/api/lead-signal` returns success.
11. Confirm no scheduling, Stripe, SMS, quote-generation, or support-flow behavior changed.

## Last verified
2026-05-18 (UTC)
