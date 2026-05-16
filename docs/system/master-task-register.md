# Master Task Register

Status: Active  
Current Operational Context: CTX-STEP102-QRLANDING-REV01  
Controlling Step: Step102 — WNYHS ScanCode / QRLanding Funnel Spec — REV01

---

## Active Tasks (Execution Driver)

Only tasks in this section with `Status: ACTIVE` are executable by Codex.

### T-STEP102-QR-001
- **Task ID:** T-STEP102-QR-001
- **Task Name:** Implement additive /qrlanding route
- **Status:** ACTIVE
- **Category:** QR
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01
- **Purpose:** Add the QR landing route required by Step102 without disrupting existing flows.
- **Allowed Scope:** Additive route and related QR landing implementation per Step102.
- **Forbidden Scope:** Stripe logic changes, HubSpot schema/pipeline changes, unrelated route/funnel changes.
- **Target Files:** `src/App.tsx`, `src/routes/*`, `src/pages/*` (as required by Step102).
- **Runtime Systems Affected:** Router/UI, API calls for lead capture (through approved layer only).
- **Documentation Updates Required:** Update task status in this register; update task notes as needed.
- **Validation Required:** `npm run build` plus Step102 validation checks.
- **Exit Criteria:** /qrlanding route is reachable, in-scope behavior works, existing protected flows preserved.
- **Dependencies:** Step102 requirements; active context alignment.
- **Operator Decision Required:** No.

### T-STEP102-QR-002
- **Task ID:** T-STEP102-QR-002
- **Task Name:** Build mobile-first QR landing funnel experience
- **Status:** ACTIVE
- **Category:** QR
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01
- **Purpose:** Implement Step102 mobile-first QR funnel UX.
- **Allowed Scope:** In-scope QR landing UX and copy implementation per approved Step.
- **Forbidden Scope:** Claims outside approved copy guardrails; unrelated UI/route changes.
- **Target Files:** QRLanding-related route/page/components in Step102 scope.
- **Runtime Systems Affected:** Frontend funnel UX only.
- **Documentation Updates Required:** Maintain task lifecycle updates in register.
- **Validation Required:** `npm run build` and Step102 UX checks.
- **Exit Criteria:** Mobile-first QR funnel experience matches Step102 requirements.
- **Dependencies:** T-STEP102-QR-001.
- **Operator Decision Required:** No.

### T-STEP102-LEAD-001
- **Task ID:** T-STEP102-LEAD-001
- **Task Name:** Implement estimate-request intake form fields from Step102
- **Status:** ACTIVE
- **Category:** LEAD
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01
- **Purpose:** Capture required intake fields for estimate request flow.
- **Allowed Scope:** Form field capture defined in Step102.
- **Forbidden Scope:** Out-of-scope data collection; schema changes outside authorized API contracts.
- **Target Files:** QR landing intake form files in Step102 scope.
- **Runtime Systems Affected:** Lead intake frontend and approved API request payloads.
- **Documentation Updates Required:** Update register status and validation notes.
- **Validation Required:** `npm run build` and intake field validation checks.
- **Exit Criteria:** Required fields captured and sent through approved flow.
- **Dependencies:** T-STEP102-QR-001, T-STEP102-QR-002.
- **Operator Decision Required:** No.

### T-STEP102-CRM-001
- **Task ID:** T-STEP102-CRM-001
- **Task Name:** Capture QR attribution source family and default source
- **Status:** ACTIVE
- **Category:** CRM
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01
- **Purpose:** Preserve QR attribution metadata for downstream CRM onboarding.
- **Allowed Scope:** Attribution fields and payload mapping through approved API layer.
- **Forbidden Scope:** Direct frontend-to-HubSpot writes; HubSpot schema/pipeline/property changes.
- **Target Files:** In-scope frontend payload mapping and server API adapters.
- **Runtime Systems Affected:** Lead attribution data mapping, approved API integration.
- **Documentation Updates Required:** Register task status updates.
- **Validation Required:** `npm run build` and payload mapping verification.
- **Exit Criteria:** Attribution source family/default source captured and delivered through approved API path.
- **Dependencies:** T-STEP102-LEAD-001.
- **Operator Decision Required:** No.

### T-STEP102-CRM-002
- **Task ID:** T-STEP102-CRM-002
- **Task Name:** Integrate CRM onboarding through approved API layer
- **Status:** ACTIVE
- **Category:** CRM
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01
- **Purpose:** Ensure CRM onboarding follows locked integration architecture.
- **Allowed Scope:** Writes through `/api/lead-signal` path only.
- **Forbidden Scope:** Any direct HubSpot write, schema change, or pipeline/property mutation.
- **Target Files:** API route and integration files within Step102 scope.
- **Runtime Systems Affected:** Server API integration path for CRM onboarding.
- **Documentation Updates Required:** Register lifecycle updates and notes.
- **Validation Required:** `npm run build` and API path verification.
- **Exit Criteria:** CRM onboarding path uses only approved API route.
- **Dependencies:** T-STEP102-CRM-001; HubSpot REV03 constraints.
- **Operator Decision Required:** No.

### T-STEP102-SCHED-001
- **Task ID:** T-STEP102-SCHED-001
- **Task Name:** Implement scheduling request capture with graceful degradation
- **Status:** ACTIVE
- **Category:** SCHED
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01
- **Purpose:** Collect scheduling request intent while preserving funnel resiliency.
- **Allowed Scope:** Scheduling request capture in Step102-defined flow.
- **Forbidden Scope:** Out-of-scope calendar architecture rewrites; payment or CRM contract violations.
- **Target Files:** Scheduling capture files in Step102 scope.
- **Runtime Systems Affected:** Scheduling request capture behavior.
- **Documentation Updates Required:** Update task status and validation notes.
- **Validation Required:** `npm run build` and scheduling degrade-path check.
- **Exit Criteria:** Scheduling request capture works with graceful fallback.
- **Dependencies:** T-STEP102-LEAD-001.
- **Operator Decision Required:** No.

### T-STEP102-QA-001
- **Task ID:** T-STEP102-QA-001
- **Task Name:** Validate /qrlanding funnel build and preserve existing flows
- **Status:** ACTIVE
- **Category:** QA
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01
- **Purpose:** Verify new QR funnel behavior does not break protected chain.
- **Allowed Scope:** Validation of Step102 funnel and regression checks for protected flows.
- **Forbidden Scope:** Runtime behavior changes beyond fixes explicitly authorized by active scope.
- **Target Files:** Validation artifacts and any minimal fixes explicitly authorized.
- **Runtime Systems Affected:** QA verification only unless bounded fixes are approved.
- **Documentation Updates Required:** Move completed tasks to DONE with evidence.
- **Validation Required:** `npm run build` and required funnel/protected-flow checks.
- **Exit Criteria:** Step102 acceptance checks pass and protected flows remain intact.
- **Dependencies:** All other Step102 ACTIVE tasks.
- **Operator Decision Required:** No.

---

### T-RUNTIME002-001
- **Task ID:** T-RUNTIME002-001
- **Task Name:** RUNTIME002 — Cloudflare Runtime Contract
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** Current operational context defined by `/docs/system/step-current.md`; authorized by operator after GOV001–GOV003 and RUNTIME001 completion.
- **Purpose:** Create the canonical Cloudflare runtime/environment contract for deployment model, Pages runtime assumptions, environment variable ownership, diagnostics, and validation.
- **Allowed Scope:**
  - Update `/docs/system/master-task-register.md` only for this task promotion.
  - Promote only T-RUNTIME002-001 from BACKLOG to ACTIVE.
  - Preserve all existing GOV001–GOV003 and RUNTIME001 governance semantics.
- **Forbidden Scope:**
  - Do not modify source code.
  - Do not change Cloudflare settings.
  - Do not change environment variables.
  - Do not modify Stripe, HubSpot, Resend, UI, routes, or runtime behavior.
- **Target Files:** `/docs/runtime/cloudflare_env.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/DOCUMENT_CATALOG.md`, `/docs/system/master-task-register.md`
- **Runtime Systems Affected:** Cloudflare documentation only; no runtime behavior affected.
- **Documentation Updates Required:** Create/update runtime contract docs + task lifecycle note in register.
- **Validation Required:**
  - `git diff -- docs/system/master-task-register.md`
  - `rg -n "T-RUNTIME002-001|RUNTIME002|Status: ACTIVE|Status: BACKLOG" docs/system/master-task-register.md`
- **Exit Criteria:**
  - T-RUNTIME002-001 appears under Active Tasks with Status: ACTIVE.
  - T-RUNTIME002-001 no longer appears as executable BACKLOG work.
  - No other tasks are promoted.
  - No runtime contract docs are created.
- **Dependencies:** GOV001 complete; GOV002 complete; GOV003 complete; RUNTIME001 complete.
- **Operator Decision Required:** Operator explicitly authorized promotion in chat.


## Ready Tasks

No READY tasks are currently promoted.

---

## Backlog Tasks



---


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

No READY tasks are currently promoted.

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
