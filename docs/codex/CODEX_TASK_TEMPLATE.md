# CODEX TASK TEMPLATE

Use this template for any new task entry intended for `/docs/system/master-task-register.md`.

---

## Task Metadata (Required)

- **Task ID:**
- **Task Name:**
- **Status:** BACKLOG | READY | ACTIVE | BLOCKED | DONE | ARCHIVED
- **Category:** GOV | RUNTIME | CRM | PAYMENT | EMAIL | LEAD | QR | SCHED | QA | COPY | FUNNEL | HIST
- **Controlling Context:** (must match `/docs/system/step-current.md` when ACTIVE)

---

## Task Definition (Required)

- **Purpose:**
- **Allowed Scope:**
- **Forbidden Scope:**
- **Target Files:**
- **Runtime Systems Affected:**
- **Documentation Updates Required:**
- **Validation Required:**
- **Exit Criteria:**
- **Dependencies:**
- **Operator Decision Required:**
- **Legacy/Historical Handling Note:** (optional; required when normalizing historical task records)

---

## Execution Guardrails (Required)

- Follow the current operational context from `/docs/system/step-current.md`.
- Follow root `AGENTS.md` and `/docs/system/guardrails.md`.
- Make minimal, surgical changes only.
- Do **NOT** modify HubSpot schema/pipeline.
- Do **NOT** bypass approved API write path for CRM.
- Do **NOT** modify Stripe/payment logic unless explicitly authorized.
- Do **NOT** introduce forbidden claims.
- Do **NOT** break funnel routing/order.
- No silent scope expansion beyond Allowed Scope.
- Use semantic token system only for UI styling changes.

---

## Status Use Rules

- BACKLOG: not ready for execution.
- READY: fully bounded but not yet executable.
- ACTIVE: executable now (only ACTIVE tasks may be executed).
- BLOCKED: stopped pending dependency/decision.
- DONE: completed and validated.
- ARCHIVED: historical retention.

---

## Output Requirements for Codex Execution

Return:

- Summary of changes
- Files modified
- Confirmation HubSpot untouched (unless explicitly authorized)
- Confirmation Stripe untouched (unless explicitly authorized)
- Build result, or explicit docs-only skip note when the work order says not to run build
