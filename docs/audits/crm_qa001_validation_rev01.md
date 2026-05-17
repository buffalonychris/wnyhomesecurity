# CRM-QA001 — End-to-End HubSpot Intake Validation (REV01)

Date (UTC): 2026-05-17
Scope: QA/runtime validation only

## Evidence Sources
- Source inspection across lead intake, scheduling, payment, and CRM integration paths.
- Automated validation commands (`lint`, `test`, `build`, targeted `rg` audits).
- Existing unit tests for HubSpot normalization and scheduling ownership boundaries.

## Path Validation Summary

### 1) QR On-Site Estimate Request
- Canonical event `qr_estimate_requested` flows through `/api/lead-signal` client helper to `functions/api/lead-signal.ts`.
- Runtime enforces required contact/request fields for QR estimate event.
- Deal metadata includes normalized path/source/funnel fields via normalization helpers.
- Contact lookup uses controlled strategy: email first, then phone, else skip.
- Request correlation includes `requestId` in response, notification payload, and HubSpot payload fields including `wny_request_id`.
- Operator notification and customer acknowledgement are both wired in lead-signal response status paths.

### 2) Main-Site Estimate Request
- Main-site contact flow now uses same canonical `sendLeadSignal` path (`/api/lead-signal`).
- Source metadata differs by payload context while runtime processing remains shared.
- Scheduling language and runtime remain request/pending-owner-confirmation, not self-confirmed booking.

### 3) Package Estimate / Quote Path
- Planner and fit-check summary objects are serialized using `stringifyHubSpotTextField` before HubSpot submission.
- Structured quote/deal context fields in lead-signal payload are serialized and included in CRM write payload.
- No direct frontend HubSpot writes were found.

### 4) Deposit Path
- Stripe webhook remains server-side endpoint and authoritative update path.
- No evidence of client-side payment confirmation authority being introduced.
- Current validation did not execute live Stripe checkout; verification is implementation/path inspection plus existing tests.

### 5) Scheduling Relationship Validation
- Scheduling request creation is explicitly `PENDING_OWNER_CONFIRMATION`.
- Owner confirmation endpoint transitions to `CONFIRMED`; customer cannot self-confirm install through public intake.
- Confirmation side effects (calendar/email) are post-owner-confirm and designed not to roll back confirmed state on downstream failures.

## Required Check Outcomes
1. Invalid enum write prevention: **Pass in runtime mapping layer** (`onsite`, `qr_scan`, `qr_estimate_requested`, `Text`, `Call`, `Any` mapped to allowed values before CRM writes).
2. Structured field serialization: **Pass** via `stringifyHubSpotTextField` for CRM text fields.
3. Contact lookup order: **Pass** (email -> phone -> controlled skip).
4. requestId continuity: **Pass (code-level)** across intake response, CRM payload fields, notifications, and scheduling request records.
5. Deal creation rules: **Pass (code-level)** for QR/main-site/package/deposit-related metadata routing through canonical lead-signal or payment/webhook paths.
6. Forbidden scope drift: **No drift found** (no new SMS/reminder/install-auto-booking/Stripe redesign changes in this validation task).

## Live Validation Status
- Live HubSpot contact creation: **Not executed in this environment** (no operational submission evidence captured in-repo).
- Live HubSpot deal creation: **Not executed in this environment**.
- Live `wny_request_id` verification in HubSpot UI: **Not executed in this environment**.

## Command Results Snapshot
- `npm run lint`: failed due to existing unrelated lint violations outside CRM-QA001 scope.
- `npm run test -- --run`: failed due to existing `operatorNavbar` test and emitted known scheduling warning logs in tests.
- `npm run build`: passed.
- Targeted `rg` scans completed; runtime mapping and canonical lead-signal paths verified.

## Remaining Runtime/CRM Issues
- Live-production proof for contact/deal creation and `wny_request_id` population remains pending manual operational validation.
- Repository currently contains pre-existing lint/test debt unrelated to this bounded QA task.
- Duplicate-contact behavior is implemented in code but still needs live operational confirmation against current HubSpot data.

## Recommended Next Bounded Task Queue
1. CRM-QA001-LIVE01: controlled live submission matrix (QR/main-site/package/deposit) with tagged test records and HubSpot evidence capture.
2. CRM-QA001-LIVE02: verify duplicate-contact resolution behavior against real repeated email/phone combinations.
3. CRM-QA001-HARDEN01: add deterministic integration tests for `wny_request_id` presence in deal payload mock assertions.
4. ENG-TEST-HYGIENE01: separate cleanup task for unrelated lint/test failures.

