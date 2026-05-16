# Scheduling Architecture + Operational Workflow Spec — REV01

## 1. Purpose

This document defines the canonical, implementation-target scheduling architecture and operational workflow for WNY Home Security (WNYHS). It consolidates SCHED002 through SCHED008 into one authoritative pre-implementation specification.

## 2. Authority

This specification derives from:

- `/docs/runtime/scheduling_future_model.md`
- `/docs/runtime/scheduling_ownership.md`
- `/docs/audits/scheduling_backend_authority_reconciliation_rev01.md`

This specification does not override runtime guardrails, Stripe/payment verification authority, HubSpot architecture constraints, or the current production-safe posture until implementation tasks are explicitly authorized and completed.

## 3. Current Production Posture

Current production authority remains:

- Customer may request a preferred appointment time.
- WNY Home Security must manually confirm the appointment.
- No appointment is confirmed until operator confirmation occurs.

Google Calendar integration remains future/planned unless implementation evidence is introduced by a separately authorized implementation task.

## 4. Scheduling Goals

The intended scheduling system must:

- Show only realistic available estimate slots.
- Support business-owner-assisted scheduling by phone.
- Prevent double-booking.
- Preserve human owner acceptance.
- Confirm customer only after owner acceptance.
- Support consent-based communications.
- Record scheduling status in HubSpot.
- Keep Google Calendar as availability/event system.
- Keep operator as final owner of confirmation authority.

## 5. Appointment Types

Canonical appointment types:

- Estimate
- Install
- Follow-up / Service
- Other

Launch recommendation:

- Estimate self-scheduling first (after implementation tasks are completed and validated).
- Install scheduling remains manual until duration/travel/material and operational rules are mature.

## 6. Availability Model

Intended Google Calendar availability behavior should consider:

- Shared WNYHS business calendar
- Chris/Lou access
- Existing calendar events
- Blocked unavailable time
- Business hours
- Travel/setup buffer
- Appointment duration
- Appointment type
- Minimum lead time
- Timezone
- Blackout days
- Max appointments per day

Availability display must not expose private calendar details, event titles, attendee identities, or sensitive metadata.

## 7. Calendar Ownership Model

Canonical ownership model:

- Google Calendar owns availability and event placement.
- Shared business calendar is the canonical availability source.
- App/backend reads availability from that source.
- App/backend may create tentative/pending events in future implementation.
- Owner acceptance finalizes operational ownership of the appointment.
- Calendar event existence alone does not equal customer confirmation unless confirmation workflow is complete.

## 8. Scheduling State Model

Canonical states:

- REQUESTED
- OWNER_REVIEW
- OWNER_ACCEPTED
- CUSTOMER_CONFIRMED
- REMINDER_24H_PENDING
- REMINDER_24H_SENT
- REMINDER_1H_PENDING
- REMINDER_1H_SENT
- IN_ROUTE
- COMPLETED
- CANCELLED
- RESCHEDULED
- NO_SHOW

| State | Meaning | Customer Visible? | Owner | Required Transition Evidence |
|---|---|---|---|---|
| REQUESTED | Customer requested a time slot; not confirmed. | Yes (as pending/requested) | System + operator queue | Request payload stored with timestamp, appointment type, requestId/referenceId. |
| OWNER_REVIEW | Request awaits owner/operator review. | Optional (pending) | Chris/Lou/operator | Queue record with assigned reviewer or review status stamp. |
| OWNER_ACCEPTED | Owner/operator accepted operational ownership. | Usually no direct exposure until confirmed | Chris/Lou/operator | Acceptance action with owner identity + acceptance timestamp. |
| CUSTOMER_CONFIRMED | Customer has been explicitly confirmed after owner acceptance. | Yes | Chris/Lou/operator + system notification | Confirm event evidence (email and/or SMS/phone evidence per consent model). |
| REMINDER_24H_PENDING | 24-hour reminder due but not yet sent. | No | System workflow / operator fallback | Reminder schedule marker tied to confirmed appointment time. |
| REMINDER_24H_SENT | 24-hour reminder sent. | Yes (implicit by receipt) | System workflow / operator fallback | Delivery attempt result logged with channel and timestamp. |
| REMINDER_1H_PENDING | 1-hour reminder due but not yet sent. | No | System workflow / operator fallback | Reminder schedule marker tied to confirmed appointment time. |
| REMINDER_1H_SENT | 1-hour reminder sent. | Yes (implicit by receipt) | System workflow / operator fallback | Delivery attempt result logged with channel and timestamp. |
| IN_ROUTE | Team/operator is in-route to appointment. | Yes (if channel available) | Owner/operator | Operator in-route status update evidence. |
| COMPLETED | Appointment completed. | Optional | Owner/operator | Completion timestamp + owner notes. |
| CANCELLED | Appointment cancelled. | Yes | Owner/operator + customer/system | Cancellation evidence with who cancelled and reason (if captured). |
| RESCHEDULED | Appointment moved to a new slot. | Yes | Owner/operator + customer/system | Linked old/new slot evidence + reschedule reason. |
| NO_SHOW | Appointment not fulfilled due to no-show. | Optional | Owner/operator | No-show evidence with operator note/time. |

## 9. V1 MVP Scheduling Flow

First implementation target (not yet implemented):

1. Customer selects estimate appointment type.
2. App shows available estimate slots from shared calendar.
3. Customer chooses preferred available slot.
4. System records REQUESTED state.
5. Internal operator notification occurs.
6. Chris/Lou accepts ownership.
7. System marks OWNER_ACCEPTED.
8. Customer receives email confirmation.
9. If SMS consent exists and SMS provider is implemented, SMS confirmation may be sent.
10. HubSpot scheduling status updates.
11. Reminders may be future phase unless implemented separately.

V1 must not claim install self-scheduling.

## 10. Business-Owner-Assisted Scheduling Flow

Phone/operator flow target:

1. Owner is on phone with customer.
2. Owner checks same shared availability source.
3. Owner offers only currently available slots.
4. Owner creates or records appointment request.
5. If owner confirms verbally, CRM/calendar must record verbal confirmation evidence.
6. Confirmation status must reflect customer contact method.
7. Follow-up confirmation email should still be sent if email consent exists.

## 11. Owner Acceptance Workflow

Workflow requirements:

- Accepting ownership roles: Chris, Lou, or explicitly authorized operator.
- Owner acceptance is required before customer confirmation.
- Appointment ownership must be visible in calendar and/or HubSpot system of record.
- Customer notification occurs only after acceptance.
- Workflow must prevent ghost appointments (unowned but externally presented as confirmed).

No current automation is claimed by this specification.

## 12. Customer Communication Model

Consent-based channel model:

Email:
- Default/minimum confirmation channel if email is authorized/available.

SMS:
- Allowed only when explicit SMS consent exists.
- Allowed only after SMS provider implementation is completed.

Phone:
- Used for phone-only customers.
- Verbal confirmation evidence must be recorded.

Confirmation, reminder, reschedule/cancel, and in-route message templates/flows are defined as future implementation assets unless implementation evidence is introduced in authorized tasks.

## 13. Reminder Model

Target reminder cadence:

- 24 hours before appointment
- 1 hour before appointment

Channel rules:

- Email if authorized
- SMS if authorized and implemented
- Phone/manual fallback for phone-only cases

Reminder execution mechanism is future implementation unless current repository evidence later proves otherwise.

## 14. HubSpot Scheduling Sync Model

HubSpot should store:

- Appointment type
- Requested date/time
- Confirmed date/time
- Scheduling state
- Owner/operator
- Confirmation method
- Communication consent
- requestId/referenceId
- Notes
- Last reminder status
- Reschedule/cancel status (if applicable)

HubSpot does not own availability.

HubSpot does not replace Google Calendar.

## 15. Stripe / Deposit Boundary

Boundary rules:

- Stripe owns payment/deposit verification only.
- Payment truth is server-side only.
- Scheduling may be gated by deposit where applicable.
- Stripe does not own appointment truth.
- Appointment confirmation requires scheduling workflow completion, not client-side payment success indication.

## 16. requestId / referenceId Traceability

Scheduling traceability should carry:

- requestId
- referenceId or quoteRef
- Customer email
- Appointment request event
- Owner acceptance event
- Customer confirmation event
- Reminder events

Canonical relationship status:

- requestId propagation model: PARTIALLY DOCUMENTED
- referenceId/quoteRef canonical relationship across scheduling transitions: UNKNOWN / NEEDS VERIFICATION

## 17. API / Backend Topology Target

Intended future endpoint topology (planning only; no implementation in this spec):

- `GET /api/scheduling/availability`
- `POST /api/scheduling/request`
- `POST /api/scheduling/accept`
- `POST /api/scheduling/reschedule`
- `POST /api/scheduling/cancel`
- `POST /api/scheduling/reminder-status`

Unresolved current references requiring reconciliation task:

- `/api/schedule`
- `/api/stripe/schedule-initiated`

Recommendation:

- Reconcile these paths under a single `/api/scheduling/*` namespace via SCHED-IMPL001.
- Mark legacy paths for deprecation after backwards-compatibility and telemetry validation.
- Preserve `/api/lead-signal` as required CRM write path authority (no bypass).

## 18. Environment Variable Planning

Planning-only candidates (not current requirements):

- `GOOGLE_CALENDAR_ID` — PLANNED / NOT IMPLEMENTED
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` — PLANNED / NOT IMPLEMENTED
- `GOOGLE_PRIVATE_KEY` — PLANNED / NOT IMPLEMENTED
- SMS provider variable set (names TBD) — PLANNED / NOT IMPLEMENTED

No secrets are included in this document.

## 19. Install Scheduling Rules

Install scheduling is not V1 self-service because implementation requires mature operational constraints, including:

- Estimated job duration
- Equipment/material availability
- Travel time
- Technician availability
- Helper availability
- Customer prep readiness
- Scope confirmation
- Deposit/payment status
- Permit/HOA/building access constraints where relevant

V1 rule:

- Install scheduling remains manual until these rules are implemented and validated.

## 20. Failure Modes

Critical failure modes to design against:

- Customer thinks request is confirmed when it is not
- Owner does not accept ownership
- Slot becomes unavailable after request
- Double-booking
- Calendar event created but customer not confirmed
- Customer confirmed but calendar not updated
- HubSpot updated but calendar not updated
- Reminder not sent
- SMS sent without consent
- Payment/deposit mismatch
- Timezone mismatch
- requestId/referenceId missing
- Operator fails to record verbal confirmation

## 21. Validation Checklist

Implementation-readiness checklist:

- State model mapped to storage/update semantics.
- Availability rules mapped to shared calendar read model.
- Owner acceptance authority bounded to approved roles.
- Consent model mapped to channel gating.
- HubSpot field mapping validated against canonical property contract.
- Stripe/payment boundary preserved (server-side truth only).
- requestId/referenceId trace model validated end-to-end.
- Legacy endpoint reconciliation plan approved.
- Failure-mode mitigations defined with observable evidence points.
- Customer-facing copy remains safety-compliant (request/pending until acceptance).

## 22. Future Implementation Task Queue

### SCHED-IMPL001 — Scheduling API Topology Cleanup
- **Task ID:** SCHED-IMPL001
- **Purpose:** Consolidate scheduling API surface under canonical `/api/scheduling/*` namespace and reconcile legacy endpoint references.
- **Allowed Scope:** API topology/refactor planning and implementation for scheduling endpoints only.
- **Forbidden Scope:** Stripe truth-model changes; HubSpot schema changes; frontend confirmation claims without owner acceptance.
- **Target Files:** `functions/api/*` scheduling endpoints, scheduling API contracts in docs.
- **Runtime Systems Affected:** Scheduling API routing + diagnostics.
- **Validation Required:** Build + route-contract checks + compatibility verification for legacy paths.
- **Exit Criteria:** Canonical endpoints available; legacy references reconciled/deprecation plan documented.
- **Dependencies:** This spec (REV01), lead-signal contract preservation.
- **Operator Decision Required:** Yes.

### SCHED-IMPL002 — Shared Google Calendar Availability Read
- **Task ID:** SCHED-IMPL002
- **Purpose:** Implement read-only availability retrieval from shared business calendar.
- **Allowed Scope:** Availability read model, slot generation, privacy-safe response contract.
- **Forbidden Scope:** Exposing private event details; direct customer confirmation; install self-scheduling rollout.
- **Target Files:** Scheduling availability API/service modules + docs.
- **Runtime Systems Affected:** Calendar availability read path.
- **Validation Required:** Build + slot correctness + privacy redaction validation.
- **Exit Criteria:** Realistic slots returned using canonical constraints; no private detail leakage.
- **Dependencies:** SCHED-IMPL001.
- **Operator Decision Required:** Yes.

### SCHED-IMPL003 — Estimate Appointment Request Creation
- **Task ID:** SCHED-IMPL003
- **Purpose:** Persist estimate-slot requests as REQUESTED without implying confirmation.
- **Allowed Scope:** Request capture endpoint + state creation + requestId/referenceId linkage.
- **Forbidden Scope:** Auto-confirmation; reminder automation claims; install scheduling automation.
- **Target Files:** Scheduling request endpoint + state persistence layers + docs.
- **Runtime Systems Affected:** Scheduling request intake.
- **Validation Required:** Build + request-state persistence + copy safety checks.
- **Exit Criteria:** REQUESTED state created with trace fields and pending posture.
- **Dependencies:** SCHED-IMPL001, SCHED-IMPL002.
- **Operator Decision Required:** Yes.

### SCHED-IMPL004 — Owner Acceptance + Confirmation State
- **Task ID:** SCHED-IMPL004
- **Purpose:** Implement owner acceptance workflow and CUSTOMER_CONFIRMED transition controls.
- **Allowed Scope:** Role-restricted acceptance action + state transition + evidence logging.
- **Forbidden Scope:** Bypassing owner acceptance gate; unconsented SMS.
- **Target Files:** Scheduling accept endpoint + status model + operator UI/API hooks.
- **Runtime Systems Affected:** Scheduling state authority.
- **Validation Required:** Build + role-gate + state transition tests.
- **Exit Criteria:** CUSTOMER_CONFIRMED blocked until OWNER_ACCEPTED evidence exists.
- **Dependencies:** SCHED-IMPL003.
- **Operator Decision Required:** Yes.

### SCHED-IMPL005 — Confirmation Email Delivery
- **Task ID:** SCHED-IMPL005
- **Purpose:** Send customer confirmation email after owner acceptance/confirmation transition.
- **Allowed Scope:** Consent-aware email delivery integration and status logging.
- **Forbidden Scope:** SMS delivery implementation unless separately authorized; Resend runtime boundary violations.
- **Target Files:** Scheduling notification modules + email templates + docs.
- **Runtime Systems Affected:** Outbound confirmation email path.
- **Validation Required:** Build + delivery-result logging + consent-gate checks.
- **Exit Criteria:** Confirmations sent only after owner acceptance with traceable evidence.
- **Dependencies:** SCHED-IMPL004, resend runtime contract.
- **Operator Decision Required:** Yes.

### SCHED-IMPL006 — HubSpot Scheduling Status Sync
- **Task ID:** SCHED-IMPL006
- **Purpose:** Sync scheduling status fields to HubSpot through approved API pathway.
- **Allowed Scope:** HubSpot sync payload/status mapping via approved layer.
- **Forbidden Scope:** HubSpot schema/property/pipeline modifications; direct frontend HubSpot writes.
- **Target Files:** API integration modules + hubspot sync docs.
- **Runtime Systems Affected:** CRM scheduling status visibility.
- **Validation Required:** Build + payload mapping verification + partial-failure diagnostics.
- **Exit Criteria:** Scheduling states reflected in HubSpot status fields through approved write path.
- **Dependencies:** SCHED-IMPL003, SCHED-IMPL004, hubspot sync contract.
- **Operator Decision Required:** Yes.

### SCHED-IMPL007 — Reminder Workflow
- **Task ID:** SCHED-IMPL007
- **Purpose:** Implement reminder orchestration for 24h and 1h reminders with consent rules.
- **Allowed Scope:** Reminder scheduling/execution/status tracking aligned to confirmed appointments.
- **Forbidden Scope:** Unconsented SMS; reminders before owner acceptance confirmation.
- **Target Files:** Reminder jobs/services + scheduling status handlers + docs.
- **Runtime Systems Affected:** Notification orchestration.
- **Validation Required:** Build + timing logic tests + consent enforcement checks.
- **Exit Criteria:** Reminder states move from pending to sent with evidence and channel compliance.
- **Dependencies:** SCHED-IMPL004, SCHED-IMPL005.
- **Operator Decision Required:** Yes.

### SCHED-IMPL008 — Install Scheduling Rules
- **Task ID:** SCHED-IMPL008
- **Purpose:** Add operational rules engine needed before any install self-scheduling exposure.
- **Allowed Scope:** Install-duration/travel/material/resource rule modeling and decision gating.
- **Forbidden Scope:** Premature install self-booking claims; payment-truth model changes.
- **Target Files:** Scheduling rules modules + docs + potential operator tooling interfaces.
- **Runtime Systems Affected:** Install scheduling decision model.
- **Validation Required:** Build + rule-simulation tests + failure-mode checks.
- **Exit Criteria:** Install scheduling remains manual until rule confidence and operator sign-off thresholds are met.
- **Dependencies:** SCHED-IMPL001 through SCHED-IMPL007 as needed.
- **Operator Decision Required:** Yes.

## 23. Production Safety Rules

- Do not claim confirmed appointment until owner acceptance occurs.
- Do not claim SMS unless implemented and consented.
- Do not claim reminders unless implemented.
- Do not claim Google Calendar booking unless implemented.
- Do not claim install self-scheduling in V1.
- Do not expose calendar private details.
- Do not treat payment success as appointment confirmation.

## 24. Related Docs

- `/docs/runtime/scheduling_future_model.md`
- `/docs/runtime/scheduling_ownership.md`
- `/docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/runtime/stripe_runtime.md`
- `/docs/runtime/hubspot_sync_contract.md`
- `/docs/runtime/hubspot_properties.md`
- `/docs/runtime/resend_runtime.md`
- `/docs/runtime/cloudflare_env.md`
- `/docs/runtime/deployment_validation.md`
- `/docs/system/master-task-register.md`

## 25. Last Verified

- Date (UTC): 2026-05-16
- Branch: Recorded via validation command output in task execution log.
- Commit: Recorded via validation command output in task execution log.
- Evidence:
  - Presence checks for required scheduling docs/audit.
  - Register verification that SCHED001 is DONE.
  - Repository `rg` audit across docs/src/functions for scheduling, confirmation, Stripe, HubSpot, and communication references.
  - Documentation-only diff constrained to approved target files.
