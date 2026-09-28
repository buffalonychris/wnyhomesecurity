# FUNNEL-CTA001 Implementation Audit — REV01

**Task:** FUNNEL-CTA001 — Contact CTA and Intake Experience Finalization
**Status:** DONE — DRAFT PR OPEN
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
**Branch:** `codex/funnel-cta001-contact-intake-finalization`
**Implementation Commit:** `a8787981e54c659b2a37bf26047b0ca4a3c2dbc8`
**Draft PR:** [#592](https://github.com/buffalonychris/wnyhomesecurity/pull/592)
**Site Version:** `v1.0.200`

## Implemented Scope

- Replaced the contact hero description and intake-choice copy with the operator-approved locked strings.
- Preserved the callback path as Name and Phone required, with Email, referral, and notes optional.
- Added the locked callback trust statement, referral label, and `Call Me Back` submit label.
- Replaced the compact onsite Name field with separate required First Name and Last Name fields.
- Required onsite First Name, Last Name, Phone, Email, and Street address with the existing precise field-level validation behavior.
- Sent explicit onsite `contact.firstName` and `contact.lastName` values through the existing `qr_estimate_requested` client submission path without name splitting.
- Applied the locked estimate-section and communication copy, removed the directed marketing sentence, and preserved the revocation sentence.
- Added focused regression coverage for the callback and onsite requirements and bumped the visible patch version from `v1.0.199` to `v1.0.200`.

## Changed Files

- `src/pages/Contact.tsx`
- `src/components/CanonicalEstimateRequestForm.tsx`
- `src/components/CanonicalEstimateRequestForm.test.tsx`
- `src/lib/siteVersion.ts`
- `docs/system/master-task-register.md`
- `docs/audits/funnel_cta001_implementation_rev01.md`

`src/styles/canonicalEstimateForm.css` required no change because existing semantic form styles support the approved trust-copy placement and added fields.

## Validation Evidence

- `npm test -- --run src/components/CanonicalEstimateRequestForm.test.tsx` — PASS, 14/14 tests.
- `npm test -- --run` — task tests passed; default parallel execution finished 179/181 with two timeouts in untouched `src/pages/__tests__/GovernanceViewer.test.tsx`.
- `npm test -- --run src/pages/__tests__/GovernanceViewer.test.tsx` — PASS, 5/5 tests, confirming the two default-parallel failures were timing-only and outside this task's changed files.
- `npm test -- --run --maxWorkers=1 --minWorkers=1` — PASS, full suite 181/181 tests.
- `npm run typecheck:test` — PASS.
- `npm run build` — PASS.
- `git diff --check` and staged equivalent — PASS.
- Authorized changed-file allowlist — PASS; no files outside the seven work-order targets changed.
- Protected-scope diff — PASS; no API/runtime, HubSpot schema/pipeline, requestId, scheduling, event classification, Resend/email, Stripe/payment, QR attribution, routes/navigation, environment/secret, dependency/lockfile, or semantic-token-definition file changed.

## Protected-System Confirmation

The existing `callback_requested` and `qr_estimate_requested` paths remain in place. `/api/lead-signal`, HubSpot persistence semantics, scheduling authority, requestId authority, consent storage fields, notifications, and payment behavior were not modified. No external system was changed or exercised.

## Delivery State

Draft PR #592 is open for operator review. The PR remains draft. Nothing was merged or deployed, and post-merge main synchronization remains pending.
