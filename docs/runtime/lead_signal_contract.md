# Lead Signal Contract — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/lead_signal_contract.md`

Primary owner:
- WNYHS operators maintaining lead intake runtime behavior and operational diagnostics.

Secondary owner(s):
- Application maintainers for `functions/api/lead-signal.ts` behavior alignment.

## Purpose

Define the canonical runtime contract for lead signal intake through `/api/lead-signal`, including payload expectations, integration boundaries, failure handling, diagnostics, and change governance.

This is documentation-only authority and does not change runtime behavior.

## Applies To

- Cloudflare Pages Function endpoint `functions/api/lead-signal.ts` exposed as `/api/lead-signal`.
- QRLanding lead-event submissions that target `/api/lead-signal`.
- Lead notification handoff to Resend path when configured.
- HubSpot sync orchestration through API layer only.

## Authority

Governing docs:

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`
- `/docs/crm/hubspot/hubspot_kb_rev03.md`

Controlling context/Step alignment:

- Current context: `CTX-STEP102-QRLANDING-REV01`.
- Runtime documentation hardening authority per GOV004 notes in `step-current.md`.

## Lead Signal Runtime Model

Confirmed in repository evidence:

- Endpoint path is `/api/lead-signal`.
- Cloudflare Pages Functions dependency is confirmed via `functions/api/lead-signal.ts`.
- QRLanding submits lead requests to `/api/lead-signal`.
- Lead signal function orchestrates notification attempt and HubSpot sync attempt.

Dependency references (ownership external to this contract):

- Resend outbound path reference: `/docs/runtime/resend_runtime.md`.
- HubSpot sync constraints reference: `/docs/crm/hubspot/hubspot_kb_rev03.md`.

UNKNOWN / NEEDS VERIFICATION:

- Whether any non-QR routes currently post to `/api/lead-signal` in production.
- Whether an `api/lead-signal.ts` runtime path is active in deployment in addition to `functions/api/lead-signal.ts`.

## Environment Variables

| Variable | Required | Environment | Purpose | Owner Doc | Verification Status | Notes |
|---|---|---|---|---|---|---|
| `NODE_ENV` | Runtime-default | Production + Preview | Production-mode gate for diagnostics exposure. | `/docs/runtime/cloudflare_env.md` | CONFIRMED IN SOURCE | Used by `isProduction` logic in `functions/api/lead-signal.ts`. |
| `RESEND_API_KEY` | Conditional | Production (+ Preview if email tested) | Enables outbound notification send from lead signal path. | `/docs/runtime/resend_runtime.md` | CONFIRMED IN SOURCE | Missing value causes `notification_not_configured` skip behavior. |
| `RESEND_FROM_EMAIL` | Conditional | Production (+ Preview if email tested) | Sender identity for lead notification email. | `/docs/runtime/resend_runtime.md` | CONFIRMED IN SOURCE | Fallback aliases also supported (`MAIL_FROM`, `EMAIL_FROM`). |
| `LEAD_SIGNAL_TO_EMAIL` | Conditional | Production (+ Preview if email tested) | Primary notification recipient list. | `/docs/runtime/resend_runtime.md` | CONFIRMED IN SOURCE | Comma-delimited parsing supported. |
| `LEAD_SIGNAL_AUDIT_EMAIL` | Conditional | Production (+ Preview if email tested) | Audit-copy recipient list (BCC in Resend call). | `/docs/runtime/resend_runtime.md` | CONFIRMED IN SOURCE | Fallback alias `MAIL_AUDIT_TO` supported. |
| `EMAIL_PROVIDER` | UNKNOWN / NEEDS VERIFICATION | UNKNOWN / NEEDS VERIFICATION | Referenced in inventory docs for provider selection behavior. | `/docs/runtime/resend_runtime.md` | CONFIRMED IN DOCS ONLY | Not referenced directly in `functions/api/lead-signal.ts`. |
| `HUBSPOT_ACCESS_TOKEN` | Conditional | Production (+ Preview if CRM-tested) | HubSpot API auth token for sync helper request calls. | `/docs/crm/hubspot/hubspot_kb_rev03.md` | CONFIRMED IN SOURCE | Used as token fallback behind `HUBSPOT_PRIVATE_APP_TOKEN`. |
| `HUBSPOT_PRIVATE_APP_TOKEN` | Conditional | Production (+ Preview if CRM-tested) | Preferred/alternate HubSpot auth token alias. | `/docs/crm/hubspot/hubspot_kb_rev03.md` | CONFIRMED IN SOURCE | Token names require operator normalization in RUNTIME006. |
| `PUBLIC_SITE_URL` | UNKNOWN / NEEDS VERIFICATION | UNKNOWN / NEEDS VERIFICATION | Included for cross-runtime consistency checks. | `/docs/runtime/cloudflare_env.md` | NEEDS VERIFICATION | Not referenced in lead-signal function file. |

## External Services

- Cloudflare Pages Functions runtime.
- Resend outbound email API (notification side effect).
- HubSpot CRM API (contact/deal/note/task operations through server API layer).

## Inbound Flow

1. Client submits POST request to `/api/lead-signal`.
2. Function generates server `requestId` before validation.
3. Function enforces JSON parse and payload validation (`event` required; extra required fields for `qr_estimate_requested`).
4. Function derives normalized summary fields and consent summary for downstream operations.

## Outbound Flow

1. Notification send attempt via Resend API if required notification env vars exist.
2. HubSpot sync attempt if HubSpot token exists.
3. Response returns `ok`, `requestId`, notification status object, and HubSpot status object.
4. Non-production responses include diagnostics object (`event`, `route`).

## Data Contract

Confirmed request payload fields referenced in `functions/api/lead-signal.ts`:

- `event`
- `submittedAt`
- `route`
- `sourceFamily`
- `source`
- `assetSource`
- `whereDidYouSeeUs`
- `textConsent`
- `emailConsent`
- `contactTimeAcknowledgement`
- `contact.firstName`
- `contact.lastName`
- `contact.fullName`
- `contact.phone`
- `contact.email`
- `contact.address.street`
- `contact.address.city`
- `contact.address.state`
- `contact.address.zip`
- `request.requestedHelp`
- `request.requestDetails`
- `request.preferredContactMethod`
- `request.preferredEstimateDate`
- `request.preferredEstimateTimeSlot`
- `request.verticalInterest`
- `request.walkthroughInterest`
- `deal.quoteRef`

Confirmed response fields:

- `ok`
- `requestId`
- `errorCode` (failure path)
- `userMessage` (failure path)
- `notification.{configured,attempted,status,provider,error?}`
- `hubspot.{configured,attempted,status,...}`
- `diagnostics` (non-production only)

## Downstream Integration Boundaries

- Lead signal ownership: request validation, requestId generation, orchestration, and response envelope in `/api/lead-signal`.
- Scheduling request capture side effect writes appointment-request state through scheduling storage boundary; durable authority is Cloudflare KV when `APPOINTMENT_REQUESTS_KV` binding is configured, with in-memory fallback for local/test only.
- Resend ownership: outbound delivery/runtime account settings and provider health.
- HubSpot ownership: schema and CRM constraints remain governed by REV03 and future RUNTIME006 docs.
- Stripe/payment ownership: out of scope for lead signal contract; payment authority remains Stripe webhook/server flow.
- Scheduling ownership: lead signal may carry request metadata only; scheduling confirmation authority is separate.

## Failure Modes

- Missing required payload field (`event` or QR-required fields).
- Malformed request/invalid JSON body.
- Missing env var(s) causing notification skip (`notification_not_configured`).
- Resend failure during outbound call.
- HubSpot sync failure (contact/deal/note/task stage errors).
- Partial sync success (notification sent while HubSpot failed, or inverse when notification skipped/failed).
- Duplicate submission behavior: UNKNOWN / NEEDS VERIFICATION.
- requestId/referenceId mismatch: `requestId` server-generated; `referenceId` usage relationship is UNKNOWN / NEEDS VERIFICATION.
- Endpoint unavailable (route not reachable).
- Cloudflare function error/uncaught exception.
- Silent operator notification failure risk if notification is skipped/failed and not monitored.

## Fallback Behavior

Confirmed behavior:

- Invalid payloads fail with structured `ok:false` response including `requestId` and standardized `userMessage`.
- Notification path can degrade to `skipped` when email configuration is missing.
- HubSpot path can degrade to skipped/failed states while still returning structured response.

UNKNOWN / NEEDS VERIFICATION:

- Whether upstream UI or operators treat partial success as blocking vs non-blocking.
- Whether retries are performed externally by caller, queue, or operator workflow.

## Diagnostics

- Correlate using server `requestId` returned in API response.
- Cloudflare Pages Function logs for `[lead-signal]` errors/warnings.
- Resend delivery logs when notification is attempted.
- HubSpot response details surfaced in `hubspot` response object and server logs.
- Browser network inspection for `/api/lead-signal` responses.
- QRLanding test submissions for end-to-end validation.
- Operator notification arrival confirmation via configured recipient/audit inboxes.

## Validation Checklist

- [ ] Submit test POST to `/api/lead-signal` with valid payload and confirm `ok:true` response.
- [ ] Submit malformed payload and confirm structured `ok:false` response.
- [ ] Confirm `requestId` is present in success and failure responses.
- [ ] Confirm notification status shape is returned.
- [ ] Confirm HubSpot status shape is returned.
- [ ] Confirm no secrets or token values are exposed in docs or responses.
- [ ] Run `npm run build`.

## Change Procedure

1. Update this contract first before/with any lead-signal ownership or payload contract change.
2. Cross-check `request_id_contract.md`, `resend_runtime.md`, and future HubSpot runtime contracts for consistency.
3. Keep HubSpot write-path constraint (`/api/lead-signal`) aligned with REV03.
4. Run required validation commands including `npm run build`.
5. Update master-task-register lifecycle status only after doc completion and validation.

## Related Docs

- `/docs/runtime/runtime_contract_template.md`
- `/docs/runtime/runtime_ownership_map.md`
- `/docs/runtime/cloudflare_env.md`
- `/docs/runtime/resend_runtime.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/crm/hubspot/hubspot_kb_rev03.md`
- `/docs/audits/qrlanding_crm_notification_inventory_rev01.md`

## Last Verified

- Date (UTC): 2026-05-16
- Branch/commit: NEEDS VERIFICATION (record at merge/release time)
- Verified by: Codex execution for T-RUNTIME005-001
- Evidence:
  - Source/doc audit of `functions/api/lead-signal.ts`, `src/pages/QrLanding.tsx`, runtime docs, and inventory docs.

## SCHED-IMPL001 Runtime Alignment Addendum

Lead-signal scheduling-window extraction is now normalized through a dedicated scheduling boundary helper:
- `functions/api/scheduling/_boundary.ts` provides request-window extraction and bounded scheduling status semantics.
- `functions/api/lead-signal.ts` now reads preferred window fields through that helper.

Behavior remains unchanged:
- `/api/lead-signal` is still the only CRM write path.
- Customer-facing posture remains request submitted + pending manual confirmation.


## SCHED-IMPL003 Lead Intake Update

- `/api/lead-signal` now creates an appointment request record as part of intake orchestration.
- Response envelope now includes `schedulingStatus` and `appointmentRequest` for request-level traceability.
- Confirmation posture remains manual-owner confirmation; no automatic booking claim is returned.

## RUNTIME008 Analytics Alignment Addendum

- `/api/lead-signal` remains the canonical submission boundary for QRLanding estimate leads and campaign conversion measurement.
- Campaign analytics should interpret Cloudflare request metrics as directional top-of-funnel signal and not as direct lead totals.
- Attribution joins should use submission-level `requestId` plus route context where available; no direct HubSpot write bypass is authorized.
- This addendum is documentation-only and does not change API behavior.

## RUNTIME009 QRLanding Attribution Metadata Addendum

- QRLanding now submits bounded attribution metadata through existing `/api/lead-signal` requests for early-funnel events.
- Implemented metadata fields: `eventName`, `requestId` (client runtime attribution id), `timestamp`, and `entryRoute` (`/qrlanding`).
- `estimate_form_submitted` is represented as `eventName` metadata on the existing `qr_estimate_requested` submission event to preserve lead-signal runtime compatibility.
- No changes were made to HubSpot schema/pipeline behavior or Stripe/payment runtime logic.


## RUNTIME010 QR Attribution Schema Validation Addendum

For QR attribution metadata associated with lead-signal events, future validation behavior should follow this contract:

- Accept canonical `eventName` values: `qrlanding_view`, `estimate_form_started`, `estimate_form_submitted`.
- Reject or ignore unknown attribution `eventName` values.
- Require attribution payload keys `eventName`, `requestId`, `timestamp`, and `entryRoute` for QR attribution events.
- Require `entryRoute` value `/qrlanding` for QR placard attribution context.
- Preserve request-correlation context when metadata is valid, while keeping submitted lead handling authoritative at `/api/lead-signal`.
- Do not block lead submissions solely because optional attribution metadata is absent.
- Prefer bounded diagnostics/logging for malformed attribution metadata instead of silent ambiguity.

This addendum is governance documentation only and introduces no runtime implementation changes.
