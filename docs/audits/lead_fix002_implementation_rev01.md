# LEAD-FIX002 Implementation Audit — REV01

**Task ID:** LEAD-FIX002

**Date:** 2026-09-25

**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

**Branch:** `codex/lead-fix002-lead-signal-reliability`

**Draft PR:** #584 — `https://github.com/buffalonychris/wnyhomesecurity/pull/584`

## Pre-change defect

The production-authoritative Cloudflare Pages handler in `functions/api/lead-signal.ts` applied actionable scheduling, operator email, customer acknowledgement, and HubSpot orchestration to every accepted event. It also returned `ok:true` and HTTP 200 when required core HubSpot persistence failed. The initiating audit found no confirmed historical lost actionable lead in the reviewed sample.

The separate `api/lead-signal.ts` implementation is not the documented Cloudflare Pages production handler and did not require parity for this bounded task.

## Final event classification

- Telemetry only: `qrlanding_view`, `estimate_form_started`, `fit_check_completed`, `quote_generated`.
- Actionable intake: `qr_estimate_requested`, `callback_requested`.
- Existing lifecycle signals: `walkthrough_requested`, `walkthrough_scheduled`, `agreement_accepted`, `install_scheduled`.
- Unknown or malformed events are rejected before side effects.

## Notification behavior

Telemetry and existing lifecycle events do not generate a new operator lead notification or customer lead acknowledgement. Actionable estimate and callback events retain both email paths when configured. Email attempts occur only after core durable persistence succeeds. Operator or customer email failure after durable persistence is reported as degraded status but does not turn the retained lead into a failed submission.

## Persistence success boundary

For actionable intake, successful core HubSpot contact and deal persistence is the current durable lead-retention boundary. Missing HubSpot configuration or failed core contact/deal persistence returns HTTP 503 with `ok:false`, `LEAD_PERSISTENCE_FAILED`, safe alternate-contact guidance, and the canonical server-generated `requestId`. Provider internals are excluded from the customer response. Auxiliary association, note, or task failure may produce `partial` status after the lead is durably retained.

## Scheduling behavior

Telemetry events create no appointment record. `qr_estimate_requested` creates a `PENDING_OWNER_CONFIRMATION` appointment request only after core persistence succeeds. `callback_requested` creates no estimate appointment record. No automatic confirmation, new calendar authority, reminder automation, or scheduling ownership redesign was introduced.

## RequestId behavior

The backend continues to generate the canonical `requestId` before validation. Success and safe failure responses preserve it. Browser/session attribution identifiers remain non-authoritative metadata.

## Files changed

- `docs/audits/lead_fix002_implementation_rev01.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/system/master-task-register.md`
- `functions/api/lead-signal.regression.test.ts`
- `functions/api/lead-signal.ts`
- `src/lib/hubspotLeadSignal.test.ts`
- `src/lib/siteVersion.ts`
- `src/newsite/pages/NewSiteCallback.tsx`

## Validation results

- Main synchronization: PASS. Current `origin/main` at `7d4c75d29bdee2950f53c14f73d386d1ec9479fc` was merged without rebase or force-push in merge commit `aeff53a1a1627c324cb00b227f3edcb83ccd38d0`; the completed `TEST-RUNNER-FIX001` MTR record and the `LEAD-FIX002` record were both preserved.
- Exact `npm test -- --run`: PASS. Thirty-three test files and 167 tests passed after the synchronized test-runner correction from `main`.
- Focused LEAD-FIX002 suite: PASS. Fourteen handler and frontend failure-path tests passed.
- `npm run typecheck:test`: PASS.
- `npm run build`: PASS. Vite reported the existing mixed static/dynamic import warning for `GovernanceViewer.tsx`; the build completed successfully.
- `git diff --check`: PASS.
- Required event-policy, side-effect-order, requestId, protected-scope, changed-file, unexpected-delete, and actual conflict-marker checks: PASS.

## Protected-scope confirmation

- HubSpot schema, properties, canonical pipeline `2282258169`, and stage IDs are untouched.
- Stripe and payment code are untouched.
- No new persistence provider, database, dependency, environment variable, or secret was added.
- No route, funnel order, visual system, navigation, pricing, package, or unrelated customer-copy change was made.
- Telemetry acceptance and QR attribution continuity are preserved.

## Remaining unknowns and operator smoke tests

No deployment or live external-system validation was authorized. After a later operator-authorized deployment:

1. Submit `qrlanding_view`, `estimate_form_started`, `fit_check_completed`, and `quote_generated`; confirm each is accepted as telemetry and produces no operator lead email, customer acknowledgement, HubSpot actionable write, or appointment request.
2. Submit one `qr_estimate_requested`; confirm one HubSpot contact/deal result, one operator lead email, the expected customer acknowledgement when an email is supplied, a canonical server `requestId`, and one `PENDING_OWNER_CONFIRMATION` appointment request.
3. Submit one `callback_requested`; confirm HubSpot persistence and operator/customer notifications, callback-specific acknowledgement copy, and no estimate appointment request.
4. In a controlled preview environment, make required HubSpot persistence unavailable; confirm a safe non-2xx response with the server `requestId`, no normal frontend success state, alternate phone/text guidance, no appointment request, and no lead-intake email attempt.
5. In a controlled preview environment after successful HubSpot persistence, make each Resend path fail independently; confirm the response remains successful with the corresponding degraded notification status and the HubSpot lead remains traceable by `requestId`.
6. Confirm the estimate deal remains in `WNYHS Sales Pipeline` (`2282258169`) at `New Estimate Request` (`3680633583`) and that no schema or stage mutation occurred.
