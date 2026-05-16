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
- **Status:** BACKLOG
- **Category:** RUNTIME

### T-RUNTIME004-001
- **Task ID:** T-RUNTIME004-001
- **Task Name:** RUNTIME004 — Email Runtime Contracts
- **Status:** BACKLOG
- **Category:** RUNTIME

### T-RUNTIME005-001
- **Task ID:** T-RUNTIME005-001
- **Task Name:** RUNTIME005 — Lead Signal + requestId Contracts
- **Status:** BACKLOG
- **Category:** RUNTIME

### T-RUNTIME006-001
- **Task ID:** T-RUNTIME006-001
- **Task Name:** RUNTIME006 — HubSpot Runtime Contracts
- **Status:** BACKLOG
- **Category:** RUNTIME

### T-RUNTIME007-001
- **Task ID:** T-RUNTIME007-001
- **Task Name:** RUNTIME007 — Scheduling Ownership Contract
- **Status:** BACKLOG
- **Category:** RUNTIME

### T-QA001-001
- **Task ID:** T-QA001-001
- **Task Name:** QA001 — Deployment Validation SOP
- **Status:** BACKLOG
- **Category:** QA

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
