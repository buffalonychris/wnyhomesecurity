# CODEX TASK REGISTER RULES

Status: Active

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

Optional fields may be added, but required fields must remain present.

---

## Standard Task Categories (Required Values)

Allowed Category values:

- GOV — governance/doc authority
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
- DONE → execution complete and validated.
- ARCHIVED → retained for historical traceability.

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
- Completion from ACTIVE to DONE requires all validation and exit criteria to pass.

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
