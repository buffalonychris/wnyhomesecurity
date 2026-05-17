# SUPPORT-FLOW001 Audit — REV01

## Purpose
Make `/support` intake functional with a support-specific API path, operator notification, and customer acknowledgement while keeping support separate from estimate funnel runtime.

## Current support form behavior found
- Route: `/support` (also linked as `/support?vertical=home-security`).
- Fields present: name, email, topic, message.
- Submission target: `POST /api/support` from frontend form.
- Existing support endpoint: none found under `functions/api/`.

## Root cause of failure
- Frontend attempted to post to `/api/support`, but no `functions/api/support.ts` handler existed, causing failed submissions.

## Files changed
- `src/lib/siteVersion.ts`
- `src/pages/Support.tsx`
- `functions/api/support.ts`
- `docs/system/master-task-register.md`
- `docs/audits/support_flow001_rev01.md`

## Before behavior
- Support form appeared available but failed due to missing backend endpoint.
- Minimal error handling and no backend-config failure messaging.

## After behavior
- Added `POST /api/support` handler with required-field validation.
- Added operator support notification email via existing Resend env/runtime pattern.
- Added customer acknowledgement email attempt.
- Improved frontend success/error handling with clear user messages.
- Retained support form separate from estimate intake.

## Support handling path chosen
`/support` form → `POST /api/support` → operator email notification (required) + customer acknowledgement (best effort).

## Email behavior
- Operator notification includes name, email, topic, message, page route, timestamp, and support request ID.
- Customer acknowledgement confirms receipt, includes request ID, avoids instant-response promises.
- If customer acknowledgement fails, request still succeeds (operator notified); failure logged server-side.

## HubSpot decision
- Deferred HubSpot support write for this task to avoid estimate/CRM contract coupling and schema risk.
- Follow-up task added: `SUPPORT-HUBSPOT001` (READY/BACKLOG).

## Support-vs-estimate separation notes
- No changes to `/api/lead-signal`.
- No support submission path creates estimate deals/stage updates.
- No quote/scheduling/payment/Stripe/SMS/reminder behavior introduced.

## Explicit forbidden items not implemented
- QUOTE-GEN001 not implemented.
- CRM-STAGEFLOW001 not implemented.
- SCHED-FOLLOWUP001 not implemented.
- No quote artifact/PDF/proposal generation.
- No HubSpot stage automation or pipeline/stage ID changes.

## Validation results
- `npm run lint` executed (pre-existing unrelated failures may remain).
- `npm run test -- --run` executed (pre-existing `operatorNavbar.test.tsx` failure may remain).
- `npm run build` executed.
- Required diff/grep audits executed.

## Manual QA checklist
1. Open `/support?vertical=home-security`.
2. Confirm support copy and form labels are clear.
3. Confirm no irrelevant “Dashboard” default appears.
4. Fill form (Name, Email, What do you need help with?, Message).
5. Submit form.
6. Confirm clear success state.
7. Confirm operator notification (if email runtime enabled).
8. Confirm customer acknowledgement (if email runtime enabled).
9. Confirm no estimate funnel behavior is triggered.
10. Confirm no quote generation behavior is triggered.
11. Confirm no Stripe behavior is triggered.
12. Confirm no scheduling behavior is triggered.
13. Confirm no SMS/reminder/autonomous booking behavior appears.
14. Confirm `/home-security` → fit check → estimate flow remains operational.
15. Confirm back/forward navigation remains stable.

## Last verified
2026-05-17 (UTC)
