# CODEX TASK REGISTER RULES

Status: Active

Detailed Codex execution and work-order mechanics are owned only by `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`. This document retains the distinct task-register schema, taxonomy, lifecycle, and gating role.

---

## Purpose

`/docs/system/master-task-register.md` is the operational execution driver for Codex task work.

Codex execution authority requires **all** of the following:

1. Task is listed under **Active Tasks** in the Master Task Register, or is an explicitly bounded prompt-created task allowed by higher governance docs.
2. Task is authorized by the current operational context in `/docs/system/step-current.md`.
3. Task does not violate `/docs/system/guardrails.md` or root `AGENTS.md` constraints.

If any condition is not satisfied, Codex must stop and request task promotion or Step/context revision.

---

## Standard Task Schema (Required)

Every actionable task (READY, ACTIVE, BLOCKED, DONE) must include:

- Task ID
- Task Name
- Status
- Category
- Controlling Context
- Purpose
- Allowed Scope
- Forbidden Scope
- Target Files
- Runtime Systems Affected
- Documentation Updates Required
- Validation Required
- Exit Criteria
- Dependencies
- Operator Decision Required
- Publication/Evidence State
- Draft PR Evidence
- Merge Evidence
- Deployment Applicability / Status / Evidence
- Main-Sync Status / Evidence
- CTR Eligibility
- CTR Record / Pointer

Optional fields may be added, but required fields must remain present. Evidence fields may use an explicit pending, not-applicable, or not-yet-verified value; missing future evidence must never be invented.

---

## Standard Task Categories (Required Values)

Allowed Category values:

- GOV — governance/doc authority
- SITE — governed ChatGPT Sites prototype, validation, versioning/deployment, and production-reconciliation planning
- RUNTIME — runtime/environment
- CRM — HubSpot/CRM
- PAYMENT — Stripe/payment
- EMAIL — Resend/email routing
- LEAD — lead capture/lead signal
- QR — QRLanding/QR plaque funnel
- SCHED — scheduling/calendar/operator ownership
- QA — validation/testing/release checks
- COPY — brand/copy/claims
- FUNNEL — customer route/page flow
- HIST — archival/history cleanup

Use one primary category per task. Secondary tags are optional but non-authoritative.

---

## Standard Task Status Lifecycle (Required Values)

Allowed Status values:

- BACKLOG
- READY
- ACTIVE
- BLOCKED
- DONE
- ARCHIVED

Lifecycle guidance:

- BACKLOG → candidate idea, not yet ready for execution.
- READY → fully bounded and eligible for activation.
- ACTIVE → executable now; only ACTIVE tasks may be executed by Codex.
- BLOCKED → execution halted pending dependency/decision.
- DONE → the bounded executor completed the authorized work, validation passed, and the required draft PR and closeout delivery exist. It does not mean merged, deployed, main-synchronized, or CTR-eligible.
- ARCHIVED → the operative MTR record was safely transferred or reduced to a CTR pointer through weekly stewardship. It is retained for historical traceability.

---

## Publication/Evidence State (Required Values)

Publication and evidence are separate from execution Status. The allowed values are:

- NOT_STARTED
- VALIDATION_COMPLETE
- DRAFT_PR_OPEN
- MERGED
- DEPLOYMENT_NOT_APPLICABLE
- DEPLOYMENT_PENDING
- DEPLOYMENT_VERIFIED
- MAIN_SYNCED
- CTR_ELIGIBLE
- ARCHIVED_TO_CTR

Codex may record only states it verifies during its run. Normal draft-PR delivery may finish with `Status: DONE` and `Publication/Evidence State: DRAFT_PR_OPEN`. A later operator or bounded stewardship task records merge, deployment applicability/status, main synchronization, CTR eligibility, and archival.

The supporting evidence fields preserve facts after the primary Publication/Evidence State advances: draft PR URL/number; merge commit or merge evidence; deployment applicability and status/evidence; main-sync status/evidence; CTR eligibility; and CTR record/pointer. Publication/Evidence State labels never create task authority.

---

## Active Task Gating Rule (Execution Driver)

- Codex may execute only tasks with `Status: ACTIVE` in the **Active Tasks** section.
- Codex may also execute an explicitly bounded prompt-created work order when higher-authority governance permits it and the work order states the target files, forbidden scope, validation, and expected output.
- READY tasks are not executable until promoted to ACTIVE.
- BACKLOG, BLOCKED, DONE, and ARCHIVED are non-executable states.
- The register may contain more than one `ACTIVE` task record, but Codex still receives and executes one bounded task or work order at a time.
- No ACTIVE task may silently expand scope beyond its declared Allowed Scope.

---

## Promotion and Demotion Rules

- Promotion to ACTIVE requires:
  - alignment with controlling context,
  - complete required task schema,
  - explicit operator authorization when required.
- Demotion from ACTIVE to BLOCKED must record the blocking reason and required unlock action.
- Completion from ACTIVE to DONE requires the authorized work and validation to pass and the required draft PR and closeout delivery to exist. Merge, deployment, main sync, and CTR eligibility occur later and must not be inferred from `DONE`.

---

## Validation and Exit Discipline

- `Validation Required` must list exact commands/checks.
- `Exit Criteria` must be objective and verifiable.
- A task may not move to DONE until both validation and exit criteria are satisfied.

---

## Stop Rule (Mandatory)

Codex must stop when:

- requested work is neither an ACTIVE task nor an explicitly bounded prompt-created work order permitted by higher-authority governance,
- task schema is incomplete for an actionable task,
- requested work falls outside the controlling context,
- requested work violates guardrails.

When stopped, Codex must:

1. State the specific conflict.
2. Request operator action (task promotion, schema completion, or Step/context revision).
