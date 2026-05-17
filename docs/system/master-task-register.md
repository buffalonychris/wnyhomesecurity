# Master Task Register

Status: Active  
Current Operational Context: CTX-SCHED-MVP-REV01  
Controlling Step: Step-SCHED-MVP — Estimate Scheduling MVP Implementation Authority — REV01

---

## Active Tasks (Execution Driver)

Only tasks in this section with `Status: ACTIVE` are executable by Codex.
Multiple ACTIVE tasks under CTX-SCHED-MVP-REV01 are pre-authorized for execution, but Codex may only execute the single task explicitly named in the current prompt. ACTIVE is authorization, not permission to bundle.


### FUNNEL-OPS001
- **Task ID:** FUNNEL-OPS001
- **Task Name:** Main Funnel + QR Funnel Link/Form/CRM/Artifact/Customer Timing Audit
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** Current WNY Home Security funnel/runtime audit context
- **Purpose:** Audit the full operational customer journey across the main WNYHomeSecurity.com funnel and QR landing funnel, from page entry through lead capture, CRM writes, scheduling handoffs, customer/operator notifications, generated artifacts, payment/deposit handoffs, timing expectations, and missing pipeline states.
- **Allowed Scope:**
  - documentation/task-register update only
  - add FUNNEL-OPS001 as audit-first task
  - preserve scheduling as open
  - preserve completed scheduling implementation task statuses
  - reference DESIGN-SKINNING as active under CTX-BRANDING-UX-REV01 without changing design scope
  - define audit deliverables and validation expectations
- **Forbidden Scope:**
  - do not implement runtime features
  - do not close scheduling
  - do not downgrade scheduling
  - do not add SMS
  - do not add reminders
  - do not add install scheduling
  - do not add dispatch behavior
  - do not add customer self-confirmation
  - do not change Stripe behavior
  - do not change HubSpot schema
  - do not change customer-facing claims
  - do not change routes
  - do not change UI
  - do not modify source runtime files
- **Required Audit Deliverables:**
  - full route/page inventory
  - full link/CTA inventory
  - full form/API inventory
  - CRM write map
  - scheduling handoff map
  - customer notification map
  - operator notification map
  - artifact/document generation map
  - customer timing/state map
  - missing pipeline state list
  - broken/mismatched behavior list
  - forbidden claim/copy risk list
  - exact next implementation queue
- **Validation Required:**
  - `git diff -- docs/system/master-task-register.md docs/system/step-current.md docs/DOCUMENT_CATALOG.md`
  - `rg -n "FUNNEL-OPS001|SCHED-IMPL|SCHED-HARDEN|DESIGN-SKINNING|CTX-BRANDING-UX-REV01" docs/system docs/DOCUMENT_CATALOG.md docs/specs docs/runtime`
  - confirm no source files changed

### DESIGN-SKINNING
- **Task Family ID:** DESIGN-SKINNING
- **Category:** DESIGN
- **Controlling Context:** CTX-BRANDING-UX-REV01
- **Status:** ACTIVE
- **Purpose:** Authorize ongoing bounded visual/branding/skinning refinement work across WNY Home Security funnels and operational UI surfaces without repeated governance activation overhead.
- **Allowed Scope:**
  - visual skinning
  - branding alignment
  - typography refinement
  - spacing/layout refinement
  - responsive polish
  - semantic-token-safe color/styling work
  - conversion-oriented UX refinement
  - visual hierarchy improvements
  - animation polish
  - landing page optimization
  - QR funnel visual refinement
  - yard sign / flyer / visual asset integration support
  - iconography refinement
  - component visual consistency
  - design-system refinement
  - token-safe accessibility improvements
- **Forbidden Scope:**
  - no Stripe/payment logic changes unless separately authorized
  - no scheduling architecture changes unless separately authorized
  - no HubSpot schema/runtime changes unless separately authorized
  - no backend security/auth changes unless separately authorized
  - no destructive repo cleanup
  - no silent architectural rewrites
  - no claims violating guardrails
  - no hardcoded styling outside approved semantic token system
  - no install scheduling implementation unless separately authorized
  - no SMS/reminder systems unless separately authorized
- **Execution Rule:** Multiple DESIGN-SKINNING subtasks may exist simultaneously, but Codex may execute only the explicitly named task in the active prompt.
- **Completion Rule:** This task family remains ACTIVE until the operator explicitly declares the branding/skinning initiative complete.
- **Example Subtasks (illustrative only):**
  - DESIGN-SKIN001 — Homepage visual refinement
  - DESIGN-SKIN002 — QR funnel conversion polish
  - DESIGN-SKIN003 — Mobile responsiveness polish
  - DESIGN-SKIN004 — Typography/system refinement
  - DESIGN-SKIN005 — Yard sign/print branding alignment
  - DESIGN-SKIN006 — Animation/motion polish
  - DESIGN-SKIN007 — Site-wide tactical brand system (VISUAL001 + VISUAL002)

### SCHED-IMPL002
- **Task ID:** SCHED-IMPL002
- **Task Name:** Shared Google Calendar Availability Read
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Implement read-only shared Google Calendar availability lookup through `GET /api/scheduling/availability` for estimate scheduling only.
- **Allowed Scope:**
  - implement Google Calendar read-only availability adapter
  - complete `GET /api/scheduling/availability`
  - normalize busy/free availability response
  - handle timezone safely
  - fail safely when Google Calendar config is missing or invalid
  - document required Google Calendar runtime variables
  - update scheduling runtime docs and deployment validation
- **Forbidden Scope:**
  - no Google Calendar event creation
  - no calendar writes
  - no appointment confirmation
  - no owner acceptance backend
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no automatic booking
  - no Stripe/payment changes
  - no confirmed appointment claims
- **Target Files:**
  - existing scheduling API route/service files discovered from `SCHED-IMPL001`
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/google_calendar_runtime.md`, create if absent
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
  - `/docs/DOCUMENT_CATALOG.md`, only if new docs are created
- **Runtime Systems Affected:**
  - Scheduling
  - Google Calendar read-only availability
  - Deployment/runtime env documentation
- **Documentation Updates Required:**
  - scheduling ownership contract
  - Google Calendar runtime contract
  - deployment validation checklist
  - document catalog only if new doc added
- **Validation Required:**
  - `npm run build`
  - `npm run lint`, if available
  - `npm run test`, if available
  - `npm run typecheck`, if available
  - `rg` searches proving no calendar writes, no booking claims, no SMS/reminders/install scheduling
- **Exit Criteria:**
  - `GET /api/scheduling/availability` returns normalized read-only availability response
  - missing/invalid Google config fails safely
  - no calendar write exists
  - no appointment confirmation exists
  - no customer-facing booking confirmation claim exists
  - docs updated
  - validation reported
- **Dependencies:**
  - `SCHED-IMPL001` complete
  - scheduling architecture spec REV01 available
  - Google Calendar credentials/config supplied out-of-band by operator before runtime validation
- **Operator Decision Required:**
  - provide actual Google Calendar ID and credentials in deployment environment only, never in repo

## Scheduling Queue (CTX-SCHED-MVP-REV01)

### SCHED-IMPL003
- **Task ID:** SCHED-IMPL003
- **Task Name:** Estimate Appointment Request Creation
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Create canonical estimate appointment request creation behavior tied to requestId and lead intake, while preserving pending owner/manual confirmation posture.
- **Allowed Scope:**
  - create appointment request data model or persistence boundary
  - connect estimate request submission to appointment request creation
  - preserve requestId correlation
  - set status to `PENDING_OWNER_CONFIRMATION`
  - notify operator if already supported by existing email/lead notification infrastructure
  - update HubSpot only if existing fields/supporting pattern already exists or documentation explicitly allows it
- **Forbidden Scope:**
  - no automatic booking
  - no confirmed appointment claim
  - no owner acceptance backend
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no Stripe/payment changes
  - no calendar event creation unless explicitly deferred to `SCHED-IMPL004` after owner confirmation
- **Target Files:**
  - existing estimate/lead/scheduling request handlers
  - existing scheduling service/module files
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/request_id_contract.md`
  - `/docs/runtime/lead_signal_contract.md`
  - `/docs/runtime/hubspot_sync_contract.md`, only if directly affected
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Runtime Systems Affected:**
  - Scheduling
  - requestId lifecycle
  - lead signal
  - HubSpot sync, if directly affected
  - email notification, if directly affected
- **Documentation Updates Required:**
  - scheduling ownership contract
  - requestId contract
  - lead signal contract
  - HubSpot sync contract only if behavior changes
  - deployment validation checklist
- **Validation Required:**
  - build/lint/test/typecheck where available
  - estimate request submission validation
  - requestId propagation validation
  - pending confirmation status validation
  - no confirmed booking claim search
- **Exit Criteria:**
  - estimate requests create or record appointment request state
  - appointment request is tied to requestId
  - status is pending owner/manual confirmation
  - no automatic booking exists
  - docs updated
  - validation reported
- **Dependencies:**
  - `SCHED-IMPL002` complete or explicitly not blocking
  - `SCHED-IMPL001` complete
- **Operator Decision Required:**
  - choose final persistence location if multiple viable repo patterns exist

### SCHED-IMPL004
- **Task ID:** SCHED-IMPL004
- **Task Name:** Owner Acceptance + Confirmation State
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Implement owner/manual confirmation state transition for estimate appointments after customer request creation.
- **Allowed Scope:**
  - create owner confirmation API/action
  - transition appointment request from `PENDING_OWNER_CONFIRMATION` to `CONFIRMED`
  - record `confirmedBy` and `confirmedAt`
  - send confirmation email only after owner/manual confirmation
  - optionally create Google Calendar event only after owner confirmation if scheduling architecture spec allows it and runtime docs define it
  - update HubSpot status only if existing sync contract supports it
- **Forbidden Scope:**
  - no automatic booking
  - no customer self-confirmation
  - no install scheduling
  - no SMS
  - no reminders
  - no technician dispatch
  - no route optimization
  - no Stripe/payment changes
  - no owner bypass without audit fields
- **Target Files:**
  - existing scheduling API/service files
  - existing email notification files, if directly required
  - existing HubSpot sync files, if directly required
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/google_calendar_runtime.md`, if calendar event creation after owner confirmation is included
  - `/docs/runtime/hubspot_sync_contract.md`, if directly affected
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Runtime Systems Affected:**
  - Scheduling
  - Email notification
  - Google Calendar only if post-confirmation event creation is included
  - HubSpot sync only if directly affected
- **Documentation Updates Required:**
  - scheduling ownership contract
  - deployment validation checklist
  - Google Calendar runtime contract only if event creation after owner confirmation is included
  - HubSpot sync contract only if behavior changes
- **Validation Required:**
  - build/lint/test/typecheck where available
  - owner confirmation route/action validation
  - state transition validation
  - customer confirmation email validation, if implemented
  - audit fields validation
  - forbidden scope search
- **Exit Criteria:**
  - owner can confirm requested estimate appointment
  - appointment state transitions only after owner action
  - confirmation audit fields are stored
  - customer confirmation is only sent after owner confirmation
  - no automatic booking exists
  - no SMS/reminder/install scheduling exists
  - docs updated
  - validation reported
- **Dependencies:**
  - `SCHED-IMPL003` complete
  - `SCHED-IMPL002` complete if confirmation depends on calendar availability or calendar event creation
- **Operator Decision Required:**
  - confirm whether `SCHED-IMPL004` should create a Google Calendar event after owner confirmation, or only update internal state first
- **Completion Notes:**
  - Owner confirmation endpoint/action implemented at `POST /api/scheduling/confirm`.
  - `requestId`-keyed appointment requests now transition from `PENDING_OWNER_CONFIRMATION` to `CONFIRMED` only after owner/manual action.
  - Audit fields `confirmedBy` and `confirmedAt` are persisted on confirmation.
  - Invalid `requestId` handling and no-auto-confirm behavior are covered by tests.
  - Google Calendar event creation intentionally deferred; no calendar writes introduced.

### SCHED-IMPL005
- **Task ID:** SCHED-IMPL005
- **Task Name:** Durable Appointment Request Storage
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Replace or supplement the temporary in-memory appointment request store with a durable repo-approved persistence boundary for estimate appointment requests.
- **Allowed Scope:**
  - evaluate existing repo storage patterns
  - implement durable storage for appointment request records
  - preserve requestId correlation
  - preserve scheduling statuses
  - preserve confirmedBy / confirmedAt audit fields
  - migrate API usage from in-memory-only store to durable boundary
  - maintain existing endpoint behavior
- **Forbidden Scope:**
  - no install scheduling
  - no SMS
  - no reminders
  - no automatic booking
  - no customer self-confirmation
  - no Stripe changes
  - no HubSpot schema changes unless explicitly required and separately documented
  - no calendar writes unless already implemented elsewhere and explicitly authorized
- **Target Files:**
  - `functions/api/scheduling/appointmentRequestStore.ts`
  - related scheduling API files
  - tests
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Exit Criteria:**
  - appointment requests survive beyond single in-memory process scope using approved durable boundary
  - requestId lookup works
  - confirmation audit fields persist
  - tests added/updated
  - docs updated
- **Completion Notes:**
  - Scheduling appointment-request storage now supports durable Cloudflare KV through `APPOINTMENT_REQUESTS_KV` with in-memory fallback limited to local/test scenarios.
  - `/api/lead-signal`, `/api/scheduling/request`, and `/api/scheduling/confirm` now read/write through the durable-ready boundary while preserving `requestId` correlation and owner-confirmation gating.
  - Confirmation metadata (`confirmedBy`, `confirmedAt`) and status transitions remain preserved with persisted updates.
  - Added/updated tests cover request creation, lookup, confirmation persistence, invalid `requestId`, and no-auto-confirm posture.
  - Runtime docs updated with required KV binding and deployment validation checklist updates.

### SCHED-IMPL006
- **Task ID:** SCHED-IMPL006
- **Task Name:** Post-Owner-Confirmation Calendar Event Creation
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** After owner confirmation only, create a Google Calendar event for the confirmed estimate appointment.
- **Allowed Scope:**
  - add Google Calendar write behavior only after owner confirmation
  - store calendarEventId on appointment request if supported
  - preserve confirmedBy / confirmedAt audit fields
  - fail safely if calendar write fails
  - keep appointment state behavior explicit and documented
- **Forbidden Scope:**
  - no calendar write before owner confirmation
  - no automatic booking
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no Stripe changes
  - no HubSpot schema changes unless explicitly required and separately documented
- **Target Files:**
  - `functions/api/scheduling/googleCalendarAvailability.ts` or new calendar write adapter
  - `functions/api/scheduling/confirm.ts`
  - `functions/api/scheduling/appointmentRequestStore.ts`
  - tests
  - `/docs/runtime/google_calendar_runtime.md`
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Exit Criteria:**
  - calendar event creation occurs only after owner confirmation
  - calendarEventId is recorded if event creation succeeds
  - failure is logged/safely returned without exposing secrets
  - no pre-confirmation calendar writes exist
  - tests added/updated
  - docs updated

### SCHED-IMPL007
- **Task ID:** SCHED-IMPL007
- **Task Name:** Customer Confirmation Email After Owner Acceptance
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Send customer confirmation email only after owner acceptance confirms the estimate appointment.
- **Allowed Scope:**
  - use existing email infrastructure
  - send confirmation only after `POST /api/scheduling/confirm` succeeds
  - include safe pending/confirmed language based on actual state
  - preserve requestId correlation
  - log/send failure safely
- **Forbidden Scope:**
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no automatic booking
  - no payment/Stripe changes
  - no marketing automation expansion
  - no unsupported claims
- **Target Files:**
  - existing email/resend runtime files
  - `functions/api/scheduling/confirm.ts`
  - tests
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/resend_runtime.md`
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Exit Criteria:**
  - customer confirmation email is sent only after owner confirmation
  - failure does not create false confirmation claims
  - requestId correlation is included
  - tests added/updated
  - docs updated
- **Completion Notes:**
  - `POST /api/scheduling/confirm` now performs customer confirmation email attempts only after owner confirmation succeeds and after the post-confirmation calendar write attempt completes.
  - Email copy uses bounded owner-confirmed estimate language and includes `requestId`, confirmed window text, timezone, and company contact details.
  - Calendar event link is included only when `calendarEventHtmlLink` is available; failure/no-link paths avoid false invite claims.
  - Email delivery failures are logged with safe diagnostics and do not roll back `CONFIRMED` status or calendar metadata.
  - Tests updated to cover sequencing, requestId inclusion, safe failure behavior, and invalid request handling without pre-confirmation email sends.

### SCHED-IMPL008
- **Task ID:** SCHED-IMPL008
- **Task Name:** Scheduling MVP End-to-End Validation Pass
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Validate the full estimate scheduling MVP path from lead intake through availability read, appointment request creation, owner confirmation, and allowed post-confirmation effects.
- **Allowed Scope:**
  - end-to-end validation only
  - test coverage updates
  - documentation corrections
  - deployment checklist updates
  - issue list for remaining defects
- **Forbidden Scope:**
  - no new features
  - no SMS
  - no reminders
  - no install scheduling
  - no dispatch
  - no Stripe changes
  - no HubSpot schema changes
  - no copy expansion beyond correcting unsafe claims
- **Target Files:**
  - tests
  - `/docs/runtime/deployment_validation.md`
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/system/master-task-register.md`
  - `/docs/DOCUMENT_CATALOG.md` only if needed
- **Exit Criteria:**
  - scheduling MVP validation matrix is complete
  - known baseline lint/test/typecheck failures are separated from task regressions
  - request/pending/confirmed behavior is validated
  - forbidden scope search passes
  - docs updated
- **Completion Notes:**
  - Validation pass confirmed implemented estimate scheduling MVP lifecycle: availability read, appointment request creation, pending-owner state, owner confirmation transition, post-confirmation calendar write attempt, and post-confirmation customer email attempt.
  - Focused scheduling tests pass (`appointmentRequestCreation`, `appointmentOwnerConfirmation`, `googleCalendarAvailability`).
  - Known repository baseline failures remain unrelated to scheduling scope: lint repo errors, full test suite failure in `src/pages/__tests__/operatorNavbar.test.tsx`, and api typecheck issues.
  - No forbidden-scope scheduling behavior (automatic booking, customer self-confirmation, SMS/reminders/install/dispatch runtime implementation) was introduced in scheduling API path.
  - Follow-up defects identified for MVP hardening: customer contact durability on confirm retries, duplicate calendar/email attempt risk on repeated confirm calls, and visibility/observability hardening for calendar/email failures.

---

## Historical / Supporting Tasks and Records

### T-RUNTIME003-001
- **Task ID:** T-RUNTIME003-001
- **Task Name:** RUNTIME003 — Stripe Runtime Contract
- **Status:** DONE
- **Category:** PAYMENT
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author the canonical Stripe runtime contract document to codify server-side verification and webhook-authoritative payment success semantics.
- **Allowed Scope:** Documentation-only updates for Stripe runtime contract and required register/catalog status updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes except documentation-only description; HubSpot logic/schema changes; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/stripe_runtime.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Stripe runtime documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update runtime contract doc from template, update ownership-map status, update task lifecycle in register.
- **Completion Notes:** REV01 Stripe runtime contract created; runtime ownership map updated to PARTIAL pending operator verification; DOCUMENT_CATALOG updated.
- **Validation Required:** `git diff -- docs/runtime/stripe_runtime.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Stripe runtime contract exists with template sections populated; ownership map reflects current status; register status and notes updated; no implementation code changes.
- **Dependencies:** RUNTIME005 documentation should be completed first per execution order guidance.
- **Operator Decision Required:** No.

### T-RUNTIME004-001
- **Task ID:** T-RUNTIME004-001
- **Task Name:** RUNTIME004 — Email Runtime Contracts
- **Status:** DONE
- **Category:** EMAIL
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author canonical email runtime contracts for Resend outbound and Cloudflare Email Routing inbound ownership boundaries.
- **Allowed Scope:** Documentation-only updates to runtime email contracts and required register/catalog status updates.
- **Completion Notes:** REV01 contracts created for Resend and Cloudflare Email Routing; ownership map updated to PARTIAL pending operator verification; DOCUMENT_CATALOG updated.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/resend_runtime.md`, `/docs/runtime/cloudflare_email_routing.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Email runtime documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update both email runtime contract docs from template, update ownership-map status, update task lifecycle in register.
- **Validation Required:** `git diff -- docs/runtime/resend_runtime.md docs/runtime/cloudflare_email_routing.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Both email runtime contracts exist with template coverage and clear inbound/outbound ownership boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME002 completed.
- **Operator Decision Required:** No.

### T-RUNTIME005-001
- **Task ID:** T-RUNTIME005-001
- **Task Name:** RUNTIME005 — Lead Signal + requestId Contracts
- **Status:** DONE
- **Category:** LEAD
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author canonical runtime contracts for `/api/lead-signal` and request-id lifecycle/diagnostics.
- **Allowed Scope:** Documentation-only updates to lead signal and request-id runtime contracts plus required register/catalog updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes except documentation-only reference to REV03; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/lead_signal_contract.md`, `/docs/runtime/request_id_contract.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Lead and diagnostics documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update lead-signal and request-id contract docs from template, update ownership-map status, update register task lifecycle.
- **Completion Notes:** REV01 contracts created for lead signal and requestId; ownership map updated to PARTIAL pending operator verification; DOCUMENT_CATALOG updated.
- **Validation Required:** `git diff -- docs/runtime/lead_signal_contract.md docs/runtime/request_id_contract.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Lead-signal and request-id contracts exist with clear API-path and diagnostics boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME004 recommended first.
- **Operator Decision Required:** No.

### T-RUNTIME006-001
- **Task ID:** T-RUNTIME006-001
- **Task Name:** RUNTIME006 — HubSpot Runtime Contracts
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author canonical HubSpot runtime property and sync contracts aligned to locked REV03 constraints.
- **Allowed Scope:** Documentation-only updates to HubSpot runtime contracts and required register/catalog updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes except documentation-only description; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/hubspot_properties.md`, `/docs/runtime/hubspot_sync_contract.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** CRM runtime documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update HubSpot runtime contract docs from template, preserve REV03 API-write constraints, update ownership-map status and task lifecycle.
- **Validation Required:** `git diff -- docs/runtime/hubspot_properties.md docs/runtime/hubspot_sync_contract.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** HubSpot runtime contracts exist and explicitly preserve `/api/lead-signal` write path and REV03 boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME005 and RUNTIME003 documentation should precede this task.
- **Operator Decision Required:** No.

### T-RUNTIME007-001
- **Task ID:** T-RUNTIME007-001
- **Task Name:** RUNTIME007 — Scheduling Ownership Contract
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author the canonical scheduling ownership runtime contract for request-capture/degrade ownership boundaries.
- **Allowed Scope:** Documentation-only updates for scheduling ownership contract and required register/catalog updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/scheduling_ownership.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Scheduling documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update scheduling ownership contract from template, update ownership-map status, update task lifecycle in register.
- **Completion Notes:** REV01 scheduling ownership contract created; runtime ownership map updated to PARTIAL; DOCUMENT_CATALOG entry added for scheduling runtime contract.
- **Validation Required:** `git diff -- docs/runtime/scheduling_ownership.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Scheduling ownership contract exists with documented ownership/fallback boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME006 documentation recommended first.
- **Operator Decision Required:** No.

## Ready Tasks

### FUNNEL-FIX001
- **Task ID:** FUNNEL-FIX001
- **Task Name:** Main Funnel Stage-Consistent CTA and Link Progression Hardening
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Eliminate wrong-stage CTA/link progression risk in the classic funnel without changing runtime architecture.
- **Allowed Scope:** Route/CTA target audit fixes and stage-accurate copy gating within existing funnel path.
- **Forbidden Scope:** No new features; no scheduling closure; no Stripe behavior change; no HubSpot schema/pipeline edits; no SMS/reminders/install scheduling/dispatch/self-confirmation.
- **Target Files:** `src/pages/**`, `src/routes/**`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Funnel navigation only.
- **Documentation Updates Required:** Update audit evidence and register status lifecycle.
- **Completion Notes:** Implemented in `docs/audits/funnel_fix001_implementation_rev01.md` with stage-correct CTA and route normalization.
- **Validation Required:** Build + route/CTA grep validation + no forbidden claim regressions.
- **Exit Criteria:** All audited classic-funnel CTAs/links map to stage-correct next steps with no broken-stage destinations.
- **Dependencies:** FUNNEL-OPS001 audit accepted.
- **Operator Decision Required:** No.

### QR-FIX001
- **Task ID:** QR-FIX001
- **Task Name:** QR/Newsite Stage-Safe Claim and Status Hardening
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Remove QR/newsite wording or status cues that imply confirmed scheduling/install readiness before owner confirmation.
- **Allowed Scope:** Bounded QR/newsite status/claim hardening aligned with manual-owner-confirmed scheduling posture.
- **Forbidden Scope:** No route changes; no scheduling automation; no Stripe logic change; no HubSpot schema change.
- **Target Files:** `src/pages/QrLanding.tsx`, `src/newsite/pages/**`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Funnel messaging only.
- **Documentation Updates Required:** Audit delta log and register lifecycle.
- **Completion Notes:** Implemented in `docs/audits/qr_fix001_implementation_rev01.md` with stage-safe QR/newsite copy hardening and CTA/status continuity checks.
- **Validation Required:** Build + forbidden-claims grep + payment/scheduling promise grep.
- **Exit Criteria:** QR/newsite payment/scheduling claims remain pending-owner-safe and guardrail-compliant.
- **Dependencies:** FUNNEL-OPS001 audit accepted.
- **Operator Decision Required:** No.

### COPY-FIX001
- **Task ID:** COPY-FIX001
- **Task Name:** Forbidden Claim Sweep and Approved Phrasing Matrix
- **Status:** DONE
- **Category:** COPY
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Normalize prohibited claim handling and define approved replacements for future funnel copy updates.
- **Allowed Scope:** Documentation-first claim matrix + bounded copy-risk inventory updates.
- **Forbidden Scope:** No new customer promises; no architecture/runtime behavior changes.
- **Target Files:** `docs/audits/**`, `docs/specs/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None (documentation/copy governance).
- **Documentation Updates Required:** Add approved-phrasing matrix reference and update audit register links.
- **Execution Lifecycle:** Promoted READY -> ACTIVE -> DONE in COPY-FIX001 implementation REV01 after bounded copy sweep and validation.
- **Completion Notes:** Implemented in `docs/audits/copy_fix001_implementation_rev01.md` with claim-safe copy rewrites across main, newsite, and shared customer-facing surfaces.
- **Validation Required:** Claim-term grep scans + build.
- **Exit Criteria:** Forbidden claims inventory resolved into approved phrasing matrix and actionable file-level remediation map.
- **Dependencies:** FUNNEL-OPS001 audit accepted.
- **Operator Decision Required:** Yes (final claim-language approvals).

### CRM-FIX001
- **Task ID:** CRM-FIX001
- **Task Name:** Lead-Signal Parity and API Write Reliability Alignment
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Ensure parity and reliability across lead-signal implementations while preserving REV03 API-layer-only write rules.
- **Allowed Scope:** API-layer parity/remediation within existing `/api/lead-signal` ownership boundaries.
- **Forbidden Scope:** No HubSpot schema/property/pipeline changes; no frontend direct HubSpot writes.
- **Target Files:** `functions/api/lead-signal.ts`, `api/lead-signal.ts`, `docs/runtime/lead_signal_contract.md`, `docs/runtime/hubspot_sync_contract.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Lead intake + CRM sync orchestration.
- **Documentation Updates Required:** Update runtime contracts with finalized parity ownership notes.
- **Validation Required:** Build + API diff review + CRM-write-path grep.
- **Exit Criteria:** Lead-signal paths are parity-audited with explicit owner path and no schema/pipeline drift.
- **Dependencies:** FUNNEL-OPS001 audit accepted; HubSpot REV03 lock maintained.
- **Operator Decision Required:** Yes (single-path consolidation vs dual-path parity policy).

### LEAD-FIX001
- **Task ID:** LEAD-FIX001
- **Task Name:** Lead Data Continuity / Funnel Intelligence Preservation
- **Status:** DONE
- **Category:** LEAD
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Normalize customer-visible pending-owner states and request lifecycle visibility across funnel variants.
- **Allowed Scope:** State presentation/persistence refinement that preserves manual owner confirmation posture.
- **Forbidden Scope:** No auto-booking; no customer self-confirmation; no install scheduling.
- **Target Files:** `src/pages/**schedule**`, `src/newsite/pages/**schedule**`, `functions/api/lead-signal.ts`, `docs/runtime/scheduling_ownership.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Lead + scheduling handoff state visibility.
- **Documentation Updates Required:** Scheduling ownership and requestId/lead contract deltas where affected.
- **Validation Required:** Build + request status grep + no confirmed-booking claim grep.
- **Exit Criteria:** Pending-owner lifecycle states are consistently represented without implying confirmed appointments.
- **Dependencies:** CRM-FIX001 recommended first.
- **Operator Decision Required:** No.

### EMAIL-FIX001
- **Task ID:** EMAIL-FIX001
- **Task Name:** Customer and Operator Notification Timing Matrix Alignment
- **Status:** DONE
- **Category:** EMAIL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Align outbound message timing/content to explicit runtime states for customer and operator notifications.
- **Allowed Scope:** Template/state-mapping hardening within existing Resend outbound constraints.
- **Forbidden Scope:** No inbound routing changes; no SMS/reminders automation.
- **Target Files:** `functions/api/lead-signal.ts`, `functions/utils/emailTemplates.ts`, `docs/runtime/resend_runtime.md`, `docs/runtime/scheduling_ownership.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Resend outbound notifications.
- **Documentation Updates Required:** Runtime state-to-notification matrix documentation updates.
- **Validation Required:** Build + notification template grep + protected-claim grep.
- **Exit Criteria:** Notification outputs map cleanly to pending-owner/confirmed states with no overstated scheduling promises.
- **Dependencies:** LEAD-FIX001 recommended first.
- **Operator Decision Required:** Yes (SLA/escalation policy thresholds).
- **Completion Notes:** EMAIL-FIX001 implemented bounded lead-signal customer acknowledgement + operator routing/context hardening using existing Resend runtime path; no HubSpot schema changes; no Stripe/scheduling architecture changes; version bumped to v1.0.44; validation + build completed.

### PAYMENT-FIX001
- **Task ID:** PAYMENT-FIX001
- **Task Name:** Post-Deposit Handoff Language and State Clarity
- **Status:** DONE
- **Category:** PAYMENT
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Ensure payment-success and post-deposit messaging do not imply automatic scheduling confirmation.
- **Allowed Scope:** Copy/state framing hardening after verified payment success.
- **Forbidden Scope:** No Stripe checkout/webhook/verification semantic changes.
- **Target Files:** `src/pages/**payment**`, `src/newsite/pages/**payment**`, `docs/runtime/stripe_runtime.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Payment handoff messaging only.
- **Documentation Updates Required:** Stripe runtime handoff note updates if messaging contracts are revised.
- **Validation Required:** Build + payment-claim grep + verification-route integrity check.
- **Exit Criteria:** Post-payment surfaces preserve verified payment success while clearly preserving pending-owner scheduling confirmation.
- **Dependencies:** QR-FIX001 and COPY-FIX001 recommended first.
- **Operator Decision Required:** No.
- **Execution Lifecycle:** Promoted READY -> ACTIVE -> DONE in PAYMENT-FIX001 implementation REV01 after bounded payment handoff verification and claim-safe hardening.
- **Completion Notes:** PAYMENT-FIX001 implemented bounded Stripe payment/deposit handoff copy/state hardening while preserving server-side verification posture and existing Stripe architecture; no HubSpot schema/Stripe product/webhook redesign changes; version bumped to v1.0.45; validation + build completed.

### ARTIFACT-FIX001
- **Task ID:** ARTIFACT-FIX001
- **Task Name:** Quote/Agreement Artifact Lifecycle and Owed-Document Checklist
- **Status:** READY
- **Category:** ARTIFACT
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Normalize artifact lifecycle expectations and define customer owed-document checklist consistency.
- **Allowed Scope:** Artifact handling documentation + bounded artifact flow consistency updates.
- **Forbidden Scope:** No legal-term re-authoring outside approved docs; no route removals.
- **Target Files:** `src/pages/**quote**`, `src/pages/**agreement**`, `src/newsite/pages/**quote**`, `src/newsite/pages/**agreement**`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Quote/agreement artifact generation and presentation.
- **Documentation Updates Required:** Artifact lifecycle map updates and register lifecycle updates.
- **Validation Required:** Build + artifact route/CTA checks + print/review flow verification.
- **Exit Criteria:** Artifact lifecycle is consistent, traceable, and customer-owed-document expectations are explicit.
- **Dependencies:** FUNNEL-FIX001 recommended first.
- **Operator Decision Required:** No.

### PIPELINE-FIX001
- **Task ID:** PIPELINE-FIX001
- **Task Name:** Intermediate Pipeline State Model Completion
- **Status:** READY
- **Category:** PIPELINE
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Define and align missing intermediate funnel/CRM/scheduling states identified by FUNNEL-OPS001.
- **Allowed Scope:** State-model documentation and bounded transition-mapping updates.
- **Forbidden Scope:** No HubSpot schema/pipeline mutations without explicit Step revision.
- **Target Files:** `docs/runtime/hubspot_sync_contract.md`, `docs/runtime/scheduling_ownership.md`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Pipeline/state governance documentation.
- **Documentation Updates Required:** Add state-transition map and ownership notes.
- **Validation Required:** State keyword grep + build.
- **Exit Criteria:** Missing states are documented with transition ownership and no schema mutations.
- **Dependencies:** CRM-FIX001 and LEAD-FIX001 recommended first.
- **Operator Decision Required:** Yes (future runtime exposure sequencing).

### QA-FIX001
- **Task ID:** QA-FIX001
- **Task Name:** Funnel Journey Validator Expansion
- **Status:** READY
- **Category:** QA
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Add repeatable validation coverage for links/CTAs/forms/API mappings against the normalized queue outcomes.
- **Allowed Scope:** QA script/checklist enhancement and audit validation documentation.
- **Forbidden Scope:** No funnel architecture changes; no runtime feature additions.
- **Target Files:** `docs/runtime/deployment_validation.md`, `docs/audits/**`, `package.json` (scripts only if needed), `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** QA validation process.
- **Documentation Updates Required:** Deployment validation and audit playbook updates.
- **Validation Required:** Build + QA command set execution evidence.
- **Exit Criteria:** Deterministic validation procedure exists for customer journey integrity and stage-safe claims.
- **Dependencies:** Completion of FUNNEL-FIX001 through PAYMENT-FIX001 recommended.
- **Operator Decision Required:** No.

---

## Active Tasks (Execution Driver)

Only tasks in this section with `Status: ACTIVE` are executable by Codex.

### T-QA001-001
- **Task ID:** T-QA001-001
- **Task Name:** QA001 — Deployment Validation SOP
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Prepare deployment validation SOP runtime documentation task for safe activation after core runtime contracts are complete.
- **Allowed Scope:** Documentation-only updates for deployment validation SOP once promoted to ACTIVE.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes except documentation-only notes; HubSpot logic/schema changes except documentation-only notes; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/deployment_validation.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** QA/deployment documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Task promoted by operator authorization and completed with SOP creation, ownership-map update, and catalog/register lifecycle updates.
- **Validation Required:** `git diff -- docs/system/master-task-register.md docs/runtime/runtime_ownership_map.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Deployment validation SOP exists with required sections, ownership-map status updated, catalog entry added, and no runtime/source behavior changes.
- **Dependencies:** RUNTIME004, RUNTIME005, RUNTIME003, RUNTIME006, RUNTIME007 documentation complete.
- **Operator Decision Required:** Satisfied via operator authorization in chat; task completed.

---

## Backlog Tasks

No BACKLOG tasks are currently recorded for runtime hardening queue scope.

---

## Runtime Hardening Queue (GOV004)

Runtime documentation hardening is authorized as documentation-only work under the current Step102 context. The following recommended execution order is approved to avoid repeated one-by-one promotion stops while preserving ACTIVE-task gating:

1. **RUNTIME004 — Email Runtime Contracts**
2. **RUNTIME005 — Lead Signal + requestId Contracts**
3. **RUNTIME003 — Stripe Runtime Contract**
4. **RUNTIME006 — HubSpot Runtime Contracts**
5. **RUNTIME007 — Scheduling Ownership Contract**
6. **QA001 — Deployment Validation SOP** (promote from READY when safe)

Rationale:
- Cloudflare runtime is already documented.
- Email delivery boundaries should be locked before downstream lead/payment/customer-notification assumptions.
- Lead/request-id contract definitions should precede Stripe and HubSpot dependency contracts.
- Stripe runtime documentation should be completed before full deployment validation SOP activation.
- HubSpot token/property ambiguity should be isolated in its own bounded runtime contracts.
- Scheduling ownership remains documentation-only until any future implementation authorization.

---

## Blocked Tasks

No BLOCKED tasks are currently recorded.

---

## Completed Tasks

### T-STEP103-QA-001
- **Task ID:** T-STEP103-QA-001
- **Task Name:** Diagnose and fix Quote Review quote generation/display failure
- **Status:** DONE
- **Category:** QA

### T-STEP102-HARDEN-001
- **Task ID:** T-STEP102-HARDEN-001
- **Task Name:** Fix Payment → Schedule quote-scoped deposit validation
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-002
- **Task ID:** T-STEP102-HARDEN-002
- **Task Name:** Replace hardcoded payment vertical metadata with validated vertical context
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-003
- **Task ID:** T-STEP102-HARDEN-003
- **Task Name:** Add Agreement → Payment binding metadata
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-004
- **Task ID:** T-STEP102-HARDEN-004
- **Task Name:** Strengthen Quote → Agreement validation
- **Status:** DONE
- **Category:** PAYMENT

---


### T-SCHED001-001
- **Task ID:** T-SCHED001-001
- **Task Name:** SCHED001 — Safe Scheduling Posture + Future Scheduling Model Lock-In
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Remove false-confirmation risk from current scheduling UX/copy and lock future scheduling model guidance for subsequent implementation tasks.
- **Allowed Scope:** Scheduling copy safety audit, minimal customer-facing copy hardening, runtime scheduling model documentation updates, bounded SCHED queue documentation, and register lifecycle update for this task only.
- **Forbidden Scope:** No Google Calendar implementation; no SMS/reminder/owner-acceptance implementation; no backend scheduling implementation; no Stripe/HubSpot/Resend/env-var/secret changes.
- **Target Files:** `docs/runtime/scheduling_future_model.md`, `docs/runtime/scheduling_ownership.md`, `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `src/pages/NeverMissAnotherEstimate.tsx`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Scheduling documentation and customer-facing scheduling safety copy only.
- **Documentation Updates Required:** Create future model doc, cross-link scheduling ownership/audit docs, update document catalog, and record task completion in register.
- **Validation Required:** `git branch --show-current`; `git rev-parse HEAD`; required `rg` audits for scheduling copy/semantics; `npm run build`; `git diff -- docs src functions`.
- **Exit Criteria:** Current copy does not imply auto-confirmed scheduling in audited customer-facing scheduling paths; future scheduling model is documented; bounded future SCHED queue recorded.
- **Dependencies:** IMPL009 completion context (manual-confirmation classification).
- **Operator Decision Required:** Yes (provided in operator prompt).

## Archived Tasks

No ARCHIVED tasks are currently recorded.

---

## Promotion Rule

- A task may be promoted to **ACTIVE** only when authorized by the current operational context in `/docs/system/step-current.md`.
- A promoted task must include the required task schema defined in `/docs/codex/CODEX_TASK_REGISTER_RULES.md`.
- If scope is unclear or outside the current context/controlling Step, stop and request a context revision before promotion.

---

## Codex Execution Rule

- Codex may execute only tasks in **Active Tasks** with `Status: ACTIVE`.
- Codex must not execute tasks in READY, BACKLOG, BLOCKED, DONE, or ARCHIVED states.
- Active Tasks are the operational execution driver within the current context.
- On completion, Codex must move finished work to DONE and preserve traceability.


### SCHED-HARDEN001
- **Task ID:** SCHED-HARDEN001
- **Task Name:** Owner Confirmation Idempotency + Durable Customer Contact Fields
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Completion Notes:** Added idempotency guards for repeated owner confirmation side effects, persisted durable customer contact fields at appointment request creation, and added calendar/email audit metadata persistence with focused tests.


- **Completion Notes:** LEAD-FIX001 implemented canonical sendLeadSignal funnelContext continuity capture from existing funnel/newsite storage and URL metadata without HubSpot schema changes; version bumped to v1.0.43; validation + build completed.
