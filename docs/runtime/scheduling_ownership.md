# Scheduling Ownership Contract — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/scheduling_ownership.md`

Primary owner:
- WNYHS operators responsible for appointment review, confirmation, and customer communication.

Secondary owner(s):
- Runtime/API maintainers for request-capture payload handling via `/api/lead-signal`.

## Purpose

Define the canonical scheduling ownership boundary for WNYHS request-capture flows, including distinction between appointment requests and confirmed appointments, operator responsibility, communication boundaries, and system integration limits.

## Applies To

- QR landing scheduling request capture metadata.
- Home security `/schedule` funnel step state and copy boundaries.
- Lead signal scheduling metadata handed through `/api/lead-signal`.
- Operator-facing diagnostics for scheduling request traceability.

## Authority

- Governing docs:
  - `/docs/system/project.md`
  - `/docs/system/agent.md`
  - `/docs/system/plan.md`
  - `/docs/system/guardrails.md`
  - `/docs/system/step-current.md`
  - `/docs/system/master-task-register.md`
- Controlling context/Step alignment:
  - `CTX-STEP102-QRLANDING-REV01` with GOV004 documentation-only runtime hardening authorization.

## Scheduling Ownership Model

Confirmed from repository evidence:
- Customers can submit preferred estimate date/time as a **request** (not authoritative booking) through QR flow (`preferredEstimateDate`, `preferredEstimateTimeSlot`).
- QR payload explicitly identifies scheduling as pending confirmation (`scheduleStatus: requested_pending_confirmation`).
- Existing runtime docs state request-capture mode with graceful degradation when direct calendar confirmation is unavailable.
- Step102 requires no false appointment confirmation and requires degrade-to-request mode if direct calendar confirmation is unavailable.
- `/schedule` UI copy states review/confirmation by phone or email and gates scheduling after agreement acceptance plus confirmed deposit.
- Payment/deposit is a gating boundary for `/schedule` in the home-security funnel.

UNKNOWN / NEEDS VERIFICATION:
- Whether any production path performs automatic operator assignment.
- Whether Lou/Chris named ownership exists as a formal runtime assignment model.
- Whether scheduling is confirmed in CRM only, calendar only, or dual-system confirmation.
- Whether any non-QR route bypasses request-capture semantics.

## Appointment State Model

Confirmed states in repo evidence:
- `Requested` (explicit values include `requested`, `requested_pending_confirmation`).
- `Pending Operator Review` (inferred from “requested pending confirmation” wording; requires operator acceptance to become confirmed).

Proposed conservative operational states (UNKNOWN / NEEDS VERIFICATION unless explicitly logged in runtime records):
- `Confirmed`
- `Rescheduled`
- `Cancelled`
- `In Route`
- `Completed`

Boundary rule:
- No customer-facing path may represent `Confirmed` unless operator-confirmed evidence exists.

## Environment Variables

| Variable | Required | Environment | Purpose | Owner Doc | Verification Status | Notes |
|---|---|---|---|---|---|---|
| `PUBLIC_SITE_URL` | UNKNOWN / NEEDS VERIFICATION | UNKNOWN / NEEDS VERIFICATION | Base URL context for cross-linking in funnel/runtime artifacts. | `/docs/runtime/cloudflare_env.md` | NEEDS VERIFICATION | Not confirmed as direct scheduling-logic dependency. |
| `HUBSPOT_PRIVATE_APP_TOKEN` | Conditional | Production (+ Preview if CRM-tested) | Enables API-mediated CRM sync of scheduling-request metadata. | `/docs/runtime/hubspot_sync_contract.md` | CONFIRMED IN SOURCE | CRM writes remain via `/api/lead-signal` only. |
| `HUBSPOT_ACCESS_TOKEN` | Conditional | Production (+ Preview if CRM-tested) | Alternate HubSpot token alias used in lead-signal path. | `/docs/runtime/hubspot_sync_contract.md` | CONFIRMED IN SOURCE | Naming normalization remains open. |
| `RESEND_API_KEY` | Conditional | Production (+ Preview if email-tested) | Enables outbound notification sends that may include scheduling-request context. | `/docs/runtime/resend_runtime.md` | CONFIRMED IN SOURCE | Appointment-confirmation notification behavior is not confirmed. |
| `LEAD_SIGNAL_TO_EMAIL` | Conditional | Production (+ Preview if email-tested) | Operator notification recipient for lead/scheduling-request intake. | `/docs/runtime/resend_runtime.md` | CONFIRMED IN SOURCE | Recipient policy/operator escalation path needs verification. |
| `GOOGLE_CALENDAR_ID` | Conditional | Production (+ Preview if calendar-tested) | Google Calendar target for availability read and post-owner-confirmation event create attempt. | `/docs/runtime/google_calendar_runtime.md` | CONFIRMED IN SOURCE | Used by scheduling availability and scheduling confirm calendar write path. |
| `GOOGLE_CLIENT_ID` | Conditional | Production (+ Preview if calendar-tested) | OAuth client id used for Google token exchange. | `/docs/runtime/google_calendar_runtime.md` | CONFIRMED IN SOURCE | Required for both availability and post-confirmation event creation. |
| `GOOGLE_CLIENT_SECRET` | Conditional | Production (+ Preview if calendar-tested) | OAuth client secret used for Google token exchange. | `/docs/runtime/google_calendar_runtime.md` | CONFIRMED IN SOURCE | Server-side only. |
| `GOOGLE_REFRESH_TOKEN` | Conditional | Production (+ Preview if calendar-tested) | OAuth refresh token used for Google token exchange. | `/docs/runtime/google_calendar_runtime.md` | CONFIRMED IN SOURCE | Server-side only. |
| `APPOINTMENT_REQUESTS_KV` | Conditional (required for durable production scheduling state) | Production + Preview | Cloudflare KV namespace binding used by scheduling appointment request store for durable request/confirmation state by `requestId`. | `/docs/runtime/scheduling_ownership.md` | CONFIRMED IN SOURCE | Falls back to in-memory map only when KV binding is absent (local/test fallback only). |

## External Services

- Cloudflare Pages Functions runtime.
- HubSpot CRM API (API-mediated only).
- Resend outbound email service.
- Google Calendar integration status: read-only availability for `GET /api/scheduling/availability` plus post-owner-confirmation event creation in `POST /api/scheduling/confirm` only; no automatic booking authority.

## Inbound Flow

1. Customer submits scheduling preference request via QR intake (`preferredEstimateDate`, `preferredEstimateTimeSlot`).
2. Frontend posts payload to `/api/lead-signal`.
3. Server validates request and generates `requestId`.
4. Scheduling-related request metadata is included in notification/CRM payload branches when configured.

## Outbound Flow

1. API returns structured response including `requestId`, notification status, and HubSpot sync status.
2. Notification branch may send operator email with request context when configured.
3. HubSpot branch may write scheduling-request metadata as CRM record context.
4. Operator follow-up (phone/email/manual scheduling confirmation) occurs outside confirmed automation evidence.

## Data Contract

Confirmed scheduling-adjacent fields from audited repo evidence:
- `request.preferredEstimateDate`
- `request.preferredEstimateTimeSlot`
- `request.requestedHelp`
- `request.requestDetails`
- `request.preferredContactMethod`
- `request.walkthroughInterest`
- `scheduleStatus` (request-mode value documented as `requested_pending_confirmation`)
- `calendarProvider` (documented request-mode value includes `google_business_pending_confirmation`)
- `contact.firstName`
- `contact.lastName`
- `contact.email`
- `contact.phone`
- `contact.address` / `city` / `state` / `zip`
- `deal.quoteRef` (when present)
- `requestId`
- `referenceId` (present in docs/inventory context; relationship to requestId remains unresolved)

UNKNOWN / NEEDS VERIFICATION:
- Canonical persisted field for operator owner assignment.
- Canonical persisted appointment confirmation status field across all systems.
- Timezone field standard for scheduling requests.
- Consent/contact modality enforcement policy for reminder workflows.

## Operator Assignment / Ownership

Confirmed:
- Current evidence supports manual operator review/confirmation posture; no proven automatic owner-assignment workflow.
- HubSpot sync path can create CRM records/tasks/notes, but definitive owner-assignment automation is not confirmed in this contract scope.

UNKNOWN / NEEDS VERIFICATION:
- Who (specific role/person) is final appointment confirmer in every operational case.
- Whether HubSpot record owner assignment is required/automated.
- Whether calendar event ownership is system-assigned or manual.
- Whether customer gets explicit owner-confirmed notice automatically.

## Customer Communication Boundaries

Confirmed:
- Request submission acknowledgment path exists via API response and UI success/failure patterns.
- `/schedule` page copy indicates operator review and confirmation by phone or email.
- Guardrails disallow false appointment confirmation claims.

UNKNOWN / NEEDS VERIFICATION:
- Formal reschedule/cancel communication SLA/process.
- In-route notification behavior.
- Reminder cadence/content/channel rules.
- SMS usage and consent enforcement details.
- Customer communication trigger source of truth (CRM, calendar, manual operator action).

## Google Calendar Boundary

Confirmed:
- Step102 contains planned/required intent language around Google Business calendar request integration and graceful degradation.
- Runtime audit confirms server-side Google Calendar OAuth variable usage in scheduling availability and post-confirmation event-create modules.

Boundary:
- Availability endpoint remains read-only advisory (FreeBusy only).
- Calendar event creation is allowed only after owner confirmation transitions request status to `CONFIRMED`.
- Customer confirmation email send attempts are allowed only after owner confirmation transitions request status to `CONFIRMED` and after the post-confirmation calendar write attempt completes.
- Customer confirmation email failures must not roll back `CONFIRMED` status or remove persisted calendar metadata.
- Calendar write failure cannot roll back confirmed state or audit fields.

UNKNOWN / NEEDS VERIFICATION:
- Shared calendar ownership model.
- Automatic vs manual calendar writes.
- Whether calendar updates trigger customer communications automatically.

## HubSpot Boundary

Confirmed:
- HubSpot writes are API-mediated via `/api/lead-signal` boundary.
- Scheduling/request context can be stored as CRM metadata fields (request-level context), subject to current contract evidence.
- HubSpot REV03 constraints remain authoritative; no direct frontend HubSpot writes.

UNKNOWN / NEEDS VERIFICATION:
- Whether HubSpot is authoritative owner of appointment confirmation status.
- Whether HubSpot task/reminder automation is active for scheduling follow-up.
- Whether HubSpot record owner assignment is mandatory in live operations.

## Stripe Boundary

Confirmed:
- Stripe payment/deposit verification is server-side + webhook-authoritative per Stripe runtime contract.
- Scheduling step in home-security funnel is gated after agreement acceptance and confirmed deposit.
- Stripe does not own appointment truth/confirmation state.

UNKNOWN / NEEDS VERIFICATION:
- Whether QR estimate-request scheduling capture is always independent of deposit gate in all operational paths.

## Email / Notification Boundary

Confirmed:
- Resend outbound notifications exist for lead-signal when configured.
- Cloudflare Email Routing is documented as inbound ownership boundary in separate runtime contract.
- Operator notification path is env-configurable for lead-signal email recipients.

UNKNOWN / NEEDS VERIFICATION:
- Appointment-confirmed notification automation existence.
- Reminder notification automation existence.
- Guaranteed delivery/alerting escalation on notification failures.

## Failure Modes

- Customer interprets request submission as confirmed appointment.
- Operator does not claim or review request promptly.
- Double-booking risk in manual coordination.
- Calendar event not created (if calendar flow expected operationally).
- Calendar event created but customer not notified.
- Customer notified but operator not assigned.
- HubSpot updated but calendar not updated.
- Calendar updated but HubSpot not updated.
- Payment/deposit status unclear before scheduling handoff.
- Email notification failure or skipped notification due to missing config.
- SMS/phone consent mismatch (UNKNOWN / NEEDS VERIFICATION controls).
- Timezone mismatch in requested window interpretation.
- `requestId`/`referenceId` missing or misaligned in trace chain.
- Manual operator error in confirmation workflow.

## Fallback Behavior

Confirmed:
- Graceful degrade to request-capture mode when direct calendar confirmation is unavailable.
- No false confirmation posture is explicitly required by Step102 and runtime audit docs.
- API returns structured status objects for downstream branch visibility (notification/hubspot).

UNKNOWN / NEEDS VERIFICATION:
- Canonical operator fallback checklist when notification or CRM sync fails.
- Escalation owner and SLA for unresolved pending requests.

## Diagnostics

- `requestId` capture from `/api/lead-signal` response.
- `referenceId` correlation where present (relationship to `requestId` unresolved).
- HubSpot record lookup by email/quote reference/request context.
- Cloudflare Pages Function logs for lead-signal processing.
- Resend logs for notification delivery attempts.
- Calendar event lookup only if/when calendar integration is verified.
- Operator notification evidence (recipient inbox/audit mailbox where configured).
- Customer confirmation evidence (manual communication records; automation status unknown).
- Manual checklist review for requested vs confirmed state consistency.

## Validation Checklist

- [ ] Scheduling state clearly distinguishes requested vs confirmed semantics.
- [ ] Operator ownership path is documented.
- [ ] Customer confirmation path is documented with confirmed-vs-unknown boundaries.
- [ ] Payment/deposit boundary is documented.
- [ ] HubSpot boundary is documented.
- [ ] Calendar boundary is documented.
- [ ] Email/notification boundary is documented.
- [ ] requestId/referenceId traceability boundary is documented.
- [ ] No unsupported automation claims are introduced.
- [ ] No customer-facing promise exceeds implemented behavior evidence.
- [ ] `npm run build` passes.

## Change Procedure

1. Update `/docs/runtime/scheduling_ownership.md` first for any scheduling ownership boundary changes.
2. Update `/docs/runtime/hubspot_sync_contract.md` and/or `/docs/runtime/hubspot_properties.md` only if CRM ownership semantics change.
3. Update `/docs/runtime/resend_runtime.md` and `/docs/runtime/cloudflare_email_routing.md` only if notification behavior ownership changes.
4. Update `/docs/runtime/stripe_runtime.md` only if payment/scheduling unlock boundary changes.
5. Update `/docs/runtime/cloudflare_env.md` only if runtime/env behavior ownership changes.
6. Update `/docs/system/master-task-register.md` for task lifecycle impacts.
7. Run validation checklist including `npm run build`.
8. Update `/docs/DOCUMENT_CATALOG.md` only if authority/location metadata changes.

## Related Docs

- `/docs/runtime/runtime_contract_template.md`
- `/docs/runtime/runtime_ownership_map.md`
- `/docs/runtime/scheduling_future_model.md`
- `/docs/runtime/cloudflare_env.md`
- `/docs/runtime/resend_runtime.md`
- `/docs/runtime/cloudflare_email_routing.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/runtime/stripe_runtime.md`
- `/docs/runtime/hubspot_properties.md`
- `/docs/runtime/hubspot_sync_contract.md`
- `/docs/specs/full-stack-spec.md`
- `/docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `/docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `/docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `/docs/codex/QA_CHECKLIST.md`

## Future Model Lock-In

- Future scheduling model canon is documented in `/docs/runtime/scheduling_future_model.md`.
- Current production posture remains request-first with manual confirmation required.

## Last Verified

- Date (UTC): 2026-05-16
- Branch/commit: NEEDS VERIFICATION (record at merge/release time)
- Verified by: Codex execution for T-RUNTIME007-001
- Evidence: Runtime doc + source-reference audit focused on scheduling request-capture, confirmation boundaries, and cross-system ownership limits.

## SCHED-IMPL001 Topology Baseline (REV01 Addendum)

Implemented additive topology boundary in runtime source:
- `GET /api/scheduling/availability` (placeholder boundary for SCHED-IMPL002)
- `POST /api/scheduling/request` (placeholder boundary for SCHED-IMPL003)
- `POST /api/scheduling/confirm` (placeholder boundary for SCHED-IMPL004)

Current production-safe posture remains unchanged:
- Estimate scheduling intent remains request-capture only.
- Owner/manual confirmation is still required before any confirmed appointment claim.
- No Google Calendar reads/writes are implemented in these boundaries.
- No reminders, SMS, or install self-scheduling automation is implemented.

Internal status constants normalized for future drift prevention:
- `REQUESTED`
- `PENDING_OWNER_CONFIRMATION`
- `CONFIRMED`
- `DECLINED`
- `CANCELLED`


## SCHED-IMPL003 Implementation Note (REV02)

- Canonical estimate appointment request creation now occurs server-side with `requestId` correlation and status `PENDING_OWNER_CONFIRMATION`.
- Request creation remains request/pending-confirmation only; no confirmed booking state, no SMS/reminders, and no install scheduling automation are introduced.
- Persistence boundary now supports Cloudflare KV-backed durable storage in `functions/api/scheduling/appointmentRequestStore.ts` via `APPOINTMENT_REQUESTS_KV` binding. In-memory map remains local/test fallback only when KV binding is missing.

## SCHED-IMPL004 Implementation Note (REV03)

- `POST /api/scheduling/confirm` is now implemented as an owner/manual confirmation boundary that requires `requestId` + `confirmedBy`.
- Appointment requests transition from `PENDING_OWNER_CONFIRMATION` to `CONFIRMED` only after owner action.
- Confirmation audit fields are persisted on the appointment request record: `confirmedBy` and `confirmedAt`.
- `requestId` remains the correlation key for create/read/update in the appointment request store; durable authority is KV when binding is configured.
- No customer-facing auto-confirm behavior and no SMS/reminders/install scheduling automation are introduced in this task.

## SCHED-IMPL008 Validation Note (REV04)

- End-to-end scheduling MVP validation confirms implemented flow: availability lookup → appointment request creation (`PENDING_OWNER_CONFIRMATION`) → owner confirmation (`CONFIRMED`) → post-confirmation calendar write attempt → post-confirmation customer email attempt.
- `POST /api/scheduling/confirm` attempts Google Calendar event creation only after owner-confirmed transition and does not roll back `CONFIRMED` when calendar write fails.
- Customer confirmation email attempt occurs only after owner confirmation and after the calendar write attempt, and email failure does not roll back `CONFIRMED`.
- `requestId` remains traceable across lead intake, scheduling request creation, confirm transitions, and confirmation-email payload content.
- Duplicate confirm behavior remains idempotency-sensitive and should be tracked as follow-up hardening (risk: repeated confirm may trigger duplicate calendar/email attempts).
