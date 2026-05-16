# Scheduling Backend Authority Reconciliation — REV01

## 1. Executive Summary

**Classification: MANUAL CONFIRMATION REQUIRED**

Based on current source/runtime evidence, scheduling behavior is split across two request-capture paths:

- **Core `/schedule` flow**: gated by agreement acceptance + completed deposit, submits request payload to `/api/schedule`.
- **QR/newsite scheduling intent flow**: posts “schedule initiated” intent to `/api/stripe/schedule-initiated` and/or embeds pending-confirmation scheduling metadata in `/api/lead-signal` payloads.

However, neither `/api/schedule` nor `/api/stripe/schedule-initiated` is implemented in `functions/api`, and no proven server path creates/updates confirmed appointment records or calendar events. Therefore, manual operator confirmation remains the only defensible authority posture.

## 2. Route / Page Inventory

| Route/Page | File | Purpose | Status | Scheduling Semantics | Notes |
|---|---|---|---|---|---|
| `/schedule` | `src/pages/Schedule.tsx` | Main funnel scheduling step after quote/agreement/payment | Implemented route/page | Request submission only; copy indicates operator follow-up/confirmation | Gated by `agreementAcceptance.accepted` and `depositStatus === 'completed'`; posts to `/api/schedule` which is not implemented in `functions/api`. |
| `/newsite/schedule` | `src/newsite/pages/NewSiteSchedule.tsx` | Newsite schedule-intent page in `/newsite/*` route family | Implemented route/page | “Initiated/request” semantics, not confirmed booking | Posts to `/api/stripe/schedule-initiated`; page copy says concierge confirms timing and self-serve calendar is “preparing.” |
| `/qrlanding` estimate request window fields | `src/pages/QrLanding.tsx` | QR funnel intake with preferred estimate time window | Implemented route/page | Explicit pending confirmation semantics | Payload sets `scheduleStatus: requested_pending_confirmation` and `calendarProvider: google_business_pending_confirmation` sent through `/api/lead-signal`. |
| `/payment` schedule handoff behavior | `src/pages/Payment.tsx` | Deposit/payment step that can emit scheduling-related lead-signal metadata | Implemented route/page | Request handoff metadata; not appointment confirmation | Uses `/api/lead-signal`; no direct booking confirmation implementation observed. |

## 3. API Endpoint Inventory

| Endpoint | Referenced By | Implemented File | Status | Purpose | Notes |
|---|---|---|---|---|---|
| `/api/schedule` | `src/pages/Schedule.tsx` | None found under `functions/api` | **Referenced, not implemented** | Intended schedule request submission endpoint | Blocking ambiguity: UI assumes endpoint exists for request capture, but function file is absent. |
| `/api/stripe/schedule-initiated` | `src/newsite/pages/NewSiteSchedule.tsx` | None found under `functions/api` | **Referenced, not implemented** | Intended deposit-adjacent scheduling initiation signal | Absent endpoint means no proven backend authority path. |
| `/api/lead-signal` | `src/pages/QrLanding.tsx`, `src/pages/Payment.tsx`, `src/lib/hubspotLeadSignal.ts` | `functions/api/lead-signal.ts` | Implemented | Lead/scheduling-intent intake + notification + HubSpot sync orchestration | Confirmed runtime endpoint with server-generated `requestId`, notification status, and HubSpot status response objects. |
| `/api/create-checkout-session` | Payment flow usage | `functions/api/create-checkout-session.ts` | Implemented | Stripe checkout session creation | Payment authority only; not scheduling confirmation authority. |
| `/api/verify-checkout-session` | Payment success verification usage | `functions/api/verify-checkout-session.ts` | Implemented | Server-side payment verification | Payment truth boundary only. |
| `/api/stripe-webhook` | Stripe webhook runtime | `functions/api/stripe-webhook.ts` | Implemented | Webhook-authoritative payment status updates | Can update deposit status/CRM flags, not appointment confirmation. |

## 4. Scheduling State Model

| State | Implemented? | Evidence | Authority | Notes |
|---|---|---|---|---|
| Requested | **Yes** | `scheduleStatus: 'requested'` in retail flow and `requested_pending_confirmation` in QR payload | Frontend request capture + lead-signal ingestion | Multiple request-mode signals are explicit. |
| Pending Operator Review | **Yes (semantic/operational)** | Copy: “coordinator will review...confirm”; runtime docs explicitly define pending confirmation | Operator/manual | Explicitly documented and surfaced in copy. |
| Confirmed | **Not proven** | No implemented `/api/schedule` confirmation backend; no confirmed-state persistence contract found | Manual only (outside proven automation) | Cannot claim system-confirmed booking. |
| Rescheduled | **Not proven** | No endpoint/state model evidence in source | Unknown/manual | No reschedule state machinery observed. |
| Cancelled | **Not proven** | No endpoint/state model evidence in source | Unknown/manual | No cancellation state machinery observed. |
| In Route | **Not proven** | No runtime endpoint/state evidence | Unknown | Copy/runtime should avoid implying this exists. |
| Completed | **Not proven** | No appointment lifecycle completion backend found | Unknown/manual | Out of current proven scope. |

## 5. Current Authority Decision

### Safe claims now
- Customer can submit a **preferred appointment/estimate request window**.
- Scheduling request may be captured and routed through lead-signal tooling.
- Final appointment timing is **manually confirmed** by WNYHS operator follow-up.

### Must not claim
- Automatic confirmed booking after form submit/payment.
- Guaranteed calendar-event creation.
- Automatic operator assignment or in-route/reminder lifecycle automation.

### Ownership boundaries
- **Final appointment confirmation owner:** Human operator (manual process).
- **Backend owner (proven):** Request capture/lead orchestration (`/api/lead-signal`), payment verification endpoints.
- **Operator owner:** Review pending requests and communicate final confirmation.
- **Stripe owner:** Deposit/payment truth only (session + webhook verification), not appointment truth.
- **HubSpot owner:** CRM sync target for lead/deal/task artifacts via `/api/lead-signal`, not definitive appointment confirmation authority in current proof set.
- **Email owner:** Notification transport/attempt visibility; no proven “appointment confirmed” automation source-of-truth.
- **Google Calendar owner:** **Not yet proven/implemented** as authoritative appointment system in runtime code.

## 6. Customer Communication Risk Review

| Location | Copy / Behavior | Risk | Recommended Resolution |
|---|---|---|---|
| `src/pages/Schedule.tsx` success + helper text | Mentions coordinator review/confirmation (good), but user reaches “Schedule Installation” page after deposit flow | Medium confusion risk if users infer auto-booking from funnel progression alone | Add explicit “request submitted, not confirmed” confirmation banner requirement in future scoped task. |
| `src/newsite/pages/NewSiteSchedule.tsx` | Mentions “scheduling concierge to confirm” and future self-serve calendar | Low-medium | Keep explicit pending language; ensure no “booked” terminology appears before backend authority exists. |
| `src/pages/QrLanding.tsx` success copy | “requested estimate window... confirm availability” | Low | Already aligned with safe posture; preserve as canonical phrase pattern. |
| Step/spec references to Google Business calendar request integration | May be read as implemented by non-technical stakeholders | Medium-high governance interpretation risk | Add explicit “planned/not implemented” note in runtime + audit docs and task queue. |

## 7. Deposit / Agreement Boundary

- **Deposit-gated scheduling exists for `/schedule`:** yes. `schedulingAllowed` requires quote context + accepted agreement + completed deposit.
- **Agreement acceptance required before `/schedule` submission:** yes in `Schedule.tsx` gate logic.
- **Server-side payment verification boundary exists:** yes via `/api/verify-checkout-session` and `/api/stripe-webhook`.
- **Consistency across flows:** no.
  - Core `/schedule` requires deposit + agreement.
  - QR/newsite request-capture flows capture scheduling intent without proving the same gate.
  - Therefore scheduling semantics are mixed by entry path and require harmonization.

## 8. Operator Ownership Model

Current evidence:
- Manual ownership is implied/required for confirmation in UI copy and runtime docs.
- Named operator ownership (Lou/Chris) is **not** proven as a formal runtime assignment model.
- HubSpot may receive contact/deal/task artifacts via `/api/lead-signal`, but automatic owner assignment is not proven.
- Calendar ownership/assignment flow is not implemented/proven.
- Customer confirmation authority remains operator-manual.

## 9. requestId / referenceId Traceability

- **requestId:** confirmed in `/api/lead-signal` responses and internal downstream artifacts.
- **referenceId:** documented as present in broader docs/inventory context, but relationship to requestId remains unresolved.
- **quoteRef:** present in payment/deal and lead-signal contexts; used in Stripe + HubSpot related flows.
- **customer email:** propagated in lead-signal/email content paths.
- **appointment request data:** present in QR payload (`scheduleStatus`, preferred windows, etc.) and schedule request payloads, but authoritative confirmed appointment ID model is not proven.

## 10. Production-Safe Current Posture

Safe production posture:

1. Customer may request a preferred appointment time/window.
2. WNY Home Security must manually confirm any appointment.
3. No appointment is confirmed until operator confirmation occurs.
4. Google Calendar integration should be treated as planned/future unless implementation evidence is added.
5. CRM/email traces may assist operations but do not supersede manual confirmation authority.

## 11. Gaps / Blockers

- **BLOCKER:** `/api/schedule` referenced but not implemented.
- **BLOCKER:** `/api/stripe/schedule-initiated` referenced but not implemented.
- **HIGH:** No canonical confirmed/rescheduled/cancelled appointment backend lifecycle state contract.
- **HIGH:** No proven backend operator assignment authority for scheduling confirmations.
- **MEDIUM:** Mixed gate semantics between core funnel and QR/newsite request flows.
- **MEDIUM:** requestId/referenceId relationship remains unresolved for cross-system trace consistency.
- **LOW:** Stakeholder interpretation risk around “Google calendar integration” language in Step docs vs implemented runtime.

## 12. Recommended Implementation Task Queue

### SCHED001
- **Task ID:** SCHED001
- **Task Name:** Scheduling Confirmation Claim Safety Lock
- **Category:** SCHED
- **Purpose:** Eliminate any remaining UI/runtime ambiguity that could imply auto-confirmed booking.
- **Allowed Scope:** Copy/state-label hardening in scheduling success states only.
- **Forbidden Scope:** Calendar integration, Stripe/HubSpot logic changes, route changes.
- **Target Files:** `src/pages/Schedule.tsx`, `src/newsite/pages/NewSiteSchedule.tsx`, relevant docs.
- **Runtime Systems Affected:** Frontend messaging only.
- **Validation Required:** `npm run build`, copy-risk grep audit.
- **Exit Criteria:** All scheduling success language explicitly says request pending manual confirmation.
- **Dependencies:** None.
- **Operator Decision Required:** No.

### SCHED002
- **Task ID:** SCHED002
- **Task Name:** Dead Scheduling Endpoint Reconciliation
- **Category:** SCHED
- **Purpose:** Prove, implement, or remove dead scheduling endpoint references.
- **Allowed Scope:** Endpoint inventory hardening and reference cleanup decisions.
- **Forbidden Scope:** New calendar system integration.
- **Target Files:** `src/pages/Schedule.tsx`, `src/newsite/pages/NewSiteSchedule.tsx`, `functions/api/*`, docs.
- **Runtime Systems Affected:** API route integrity.
- **Validation Required:** endpoint existence audit + `npm run build`.
- **Exit Criteria:** Every referenced scheduling endpoint has an implemented handler or is removed with approved fallback.
- **Dependencies:** Operator endpoint decision.
- **Operator Decision Required:** Yes.

### SCHED003
- **Task ID:** SCHED003
- **Task Name:** `/api/schedule` Authority Definition
- **Category:** SCHED
- **Purpose:** Define and implement bounded request-capture contract for `/api/schedule` (no auto-confirm).
- **Allowed Scope:** Request intake + response contract + diagnostics.
- **Forbidden Scope:** Automatic confirmation or calendar write authority.
- **Target Files:** `functions/api/schedule.ts`, runtime docs/contracts.
- **Runtime Systems Affected:** Scheduling intake API.
- **Validation Required:** contract tests/manual POST checks + `npm run build`.
- **Exit Criteria:** `/api/schedule` exists with explicit requested/pending semantics.
- **Dependencies:** SCHED002.
- **Operator Decision Required:** Yes.

### SCHED004
- **Task ID:** SCHED004
- **Task Name:** Operator Confirmation Workflow Contract
- **Category:** SCHED
- **Purpose:** Define authoritative manual confirmation workflow and audit trail requirements.
- **Allowed Scope:** Docs/contracts + optional non-invasive status model definitions.
- **Forbidden Scope:** Unapproved automation rollout.
- **Target Files:** `/docs/runtime/scheduling_ownership.md`, `/docs/runtime/deployment_validation.md`, future API contract docs.
- **Runtime Systems Affected:** Operational process governance.
- **Validation Required:** governance doc diff + `npm run build`.
- **Exit Criteria:** Clear owner, trigger, evidence, and customer notification authority documented.
- **Dependencies:** SCHED003 design.
- **Operator Decision Required:** Yes.

### SCHED005
- **Task ID:** SCHED005
- **Task Name:** Google Calendar Integration Design Gate
- **Category:** SCHED
- **Purpose:** Prepare a design-only integration plan with explicit fallback/degrade mode.
- **Allowed Scope:** Design/spec and security/runtime contract updates.
- **Forbidden Scope:** Implementing calendar writes or credential rollout.
- **Target Files:** Step/spec/runtime docs only.
- **Runtime Systems Affected:** Planned future calendar subsystem.
- **Validation Required:** governance review checklist.
- **Exit Criteria:** Approved implementation-ready design with explicit authority boundaries.
- **Dependencies:** SCHED004.
- **Operator Decision Required:** Yes.

### SCHED006
- **Task ID:** SCHED006
- **Task Name:** Post-Confirmation Customer Notification Flow
- **Category:** SCHED
- **Purpose:** Define and later implement confirmed-appointment notification trigger source of truth.
- **Allowed Scope:** Notification authority design and bounded API/event contract.
- **Forbidden Scope:** Copy promises before backend authority exists.
- **Target Files:** `functions/api/*` (future), runtime docs, email contracts.
- **Runtime Systems Affected:** Email/CRM scheduling communications.
- **Validation Required:** end-to-end trace test plan + `npm run build`.
- **Exit Criteria:** Confirmed appointment notification only fires after operator-confirmed state.
- **Dependencies:** SCHED004.
- **Operator Decision Required:** Yes.

## 13. Recommended Immediate Patch Scope

Smallest safe future patch (not implemented in this task):

1. Reconcile or stub missing scheduling endpoints with explicit `requested_pending_confirmation` response model.
2. Standardize success-state copy to “request received; manual confirmation required.”
3. Add runtime contract addendum that `/api/schedule` cannot emit “confirmed” without explicit operator authority evidence.

## 14. Final Self-Check

- [x] No implementation was performed.
- [x] No runtime code was changed.
- [x] No UI was changed.
- [x] No routes were changed.
- [x] No env vars were changed.
- [x] No secrets were exposed.
- [x] Scheduling authority was classified.
- [x] `/api/schedule` status was checked.
- [x] `/api/stripe/schedule-initiated` status was checked.
- [x] Customer confirmation risk was reviewed.
- [x] Recommended tasks are bounded.
