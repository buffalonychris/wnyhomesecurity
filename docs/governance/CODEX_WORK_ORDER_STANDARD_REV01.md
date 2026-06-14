# Codex Work Order Standard REV01

Status: Active
Owner: WNY Home Security
Document Type: Governance Standard

---

## 1. Purpose

This standard defines the reusable structure for future Codex work orders in the WNY Home Security repository.

It replaces scattered or implicit prompt defaults with a consistent work order format that makes authority, scope, protected systems, validation, and expected output explicit before Codex changes files.

---

## 2. Scope

This standard applies to Codex work orders for governance, documentation, UI, runtime, CRM, payment, Cloudflare, email, scheduling, planner, and customer funnel work in this repository.

It does not authorize implementation by itself. Every task still requires a current controlling context and either an ACTIVE task-register entry or an explicitly bounded prompt-created task permitted by higher-authority governance.

---

## 3. Required Codex Work Order Sections

Future Codex work orders should include these sections in this order unless the operator intentionally marks a section as not applicable.

### SYSTEM CONTEXT

Define the repository, current operational context, controlling Step or context document, protected-system posture, and any execution constraints.

### TASK ID / TASK NAME

Provide the exact task ID and a concise task name. The task ID should match the task register when one exists.

### TASK TYPE

Classify the task as one or more of:

- docs-only
- governance
- UI
- route/funnel
- runtime
- CRM
- payment
- Cloudflare
- email
- scheduling
- planner
- QA
- deployment support

### REQUIRED AUTHORITY DOCS

List the documents Codex must read before editing. At minimum, include the applicable current governance chain:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`

Add locked specs, runtime contracts, CRM docs, payment docs, or brand standards when relevant.

### OBJECTIVE

State the concrete result the task must produce.

### REQUIRED PRECHECK

List required checks before edits, such as:

- confirm repository and branch
- confirm controlling context
- confirm task is ACTIVE or explicitly prompt-created within allowed governance
- confirm protected-system boundaries
- inspect target files
- confirm PR base branch will be `main` if a PR is authorized

### REQUIRED WORK

Describe the exact work Codex must perform.

Use bounded, file-aware instructions. Do not include optional improvements unless they are explicitly in scope.

### TARGET FILES

List every file Codex may edit.

If only one file may change, say so explicitly.

### REFERENCE ONLY FILES

List files Codex may read but must not edit.

### FORBIDDEN MODIFICATIONS

List files, systems, behaviors, and content categories that must remain untouched.

Include protected systems when relevant.

### VALIDATION

List exact commands or checks Codex must run.

Validation must match task risk and scope. Do not require broad build or browser checks for docs-only tasks unless the work order explicitly requires them.

### EXPECTED OUTPUT

Define the final response fields Codex must report, including files changed, validation, protected-system confirmation, and PR status.

### SELF-CHECK

Require Codex to confirm:

- work stayed within allowed scope
- only target files changed
- protected systems were untouched
- required validation ran
- no unauthorized PR or merge occurred
- any unresolved issue is clearly stated

---

## 4. Branch Rules

- Start from current `main` unless the operator explicitly authorizes another base.
- Use one task per branch.
- Branch name should match the task ID and scope.
- Do not bundle unrelated work into the branch.
- If the branch does not trace cleanly to the requested task or expected base, stop and ask for operator direction.

---

## 5. PR Rules

- Codex may create a PR only when explicitly authorized.
- PR base branch must be `main`.
- Codex must not merge PRs.
- Operator reviews and merges manually.
- If the PR base branch is not `main`, Codex must stop and request correction before opening or updating the PR.

Codex final summary must report:

- PR created: yes/no
- PR number
- PR link
- source branch
- base branch
- merge target
- files changed
- validation run
- protected systems confirmation
- Context Usage Report

Use `not applicable` for PR number and PR link when no PR was created.

---

## 6. Validation Level Rules

- Docs-only tasks should not run `npm run build` unless specifically required by the work order.
- UI tasks may require `npm run build`, focused lint/type checks, route checks, and visual or operator review.
- Runtime tasks require validation against the relevant runtime contract, affected endpoints, and expected request/response behavior.
- Payment/Stripe tasks require server-side verification checks and must not rely on frontend redirects as proof of payment state.
- HubSpot tasks require CRM property, payload, API-layer, and failure-mode validation against the locked authoritative HubSpot docs.
- Playwright, browser, or webview checks should only be used when the task requires automated visual, interaction, or route validation.
- Validation should be scoped to the task, but protected-system drift checks should be included when the task is near protected boundaries.

---

## 7. Protected Systems

The following systems are protected and must not be changed unless a work order explicitly authorizes that system and lists the required authority docs and validation:

- Stripe
- HubSpot
- Cloudflare runtime/config
- email routing
- scheduling
- planner
- payment/deposit flow
- customer funnel routes

Protected-system confirmation is required in every final Codex response.

---

## 8. Stop Conditions

Codex must stop execution and request operator revision or clarification when any of these occur:

- missing controlling task
- unclear authority docs
- conflict between higher-authority docs
- requested change exceeds allowed scope
- required runtime contract missing
- PR base branch is not `main`
- protected system would be touched without explicit authorization
- requested validation contradicts higher-authority safety rules
- target file list is ambiguous for an implementation task

---

## 9. Model Guidance

- Use the strongest available reasoning/coding model for governance, runtime, CRM, payment, protected-system, and multi-file implementation tasks.
- A lighter or faster model may be used for simple single-file docs or copy cleanup when protected systems are not implicated.
- When a task has uncertain authority, protected-system overlap, or multi-step validation, prefer the stronger model.

---

## 10. Context Usage Report

Every Codex final summary must include:

```text
Context Usage Report:

Approximate prompt/context load:
Docs actually used:
Docs loaded but not useful:
Repeated instructions that should move into repo docs:
Prompt sections that can be shortened next time:
Missing repo docs that would reduce future prompt size:
Suggested reusable validation/script improvements:
```

Purpose:

- Create a recursive prompt improvement loop.
- Reduce pasted context over time.
- Increase reliance on repo-native governance and standards.
- Improve accuracy while minimizing token use.
- Identify repeated validation or reporting work that should become reusable scripts.

---

## 11. Prompt Delivery and Reuse

ChatGPT should deliver Codex work orders in a format that supports direct copy/paste into Codex.

Rules:

- Deliver the entire Codex work order inside one copyable code block whenever practical.
- Avoid nested markdown code fences inside a larger work order.
- Represent example shell commands inside the work order as plain text or clearly escaped examples.
- Prefer prompt formats that survive copy/paste without manual editing.
- Optimize for one-click copy behavior.

Before generating a new work order, ChatGPT should prefer existing repository governance documents, standards, runtime contracts, work-order templates, and authority maps over re-explaining the same context repeatedly.

Future prompt minimization should move from long explicit lists such as `Read these 12 documents...` toward source-map routing such as `Load governance source map and task-referenced standards.`

---

## 12. Reusable Codex Prompt Template

```text
SYSTEM CONTEXT

You are working inside the WNY Home Security repo.

Current operational context:
- [context ID / Step name]

Required authority docs:
- docs/system/project.md
- docs/system/guardrails.md
- docs/system/agent.md
- docs/system/plan.md
- docs/system/step-current.md
- docs/system/master-task-register.md
- [additional locked specs/contracts, if any]

TASK ID / TASK NAME

- Task ID: [TASK-ID]
- Task Name: [short task name]

TASK TYPE

- [docs-only | governance | UI | route/funnel | runtime | CRM | payment | Cloudflare | email | scheduling | planner | QA | deployment support]

OBJECTIVE

[State the exact outcome.]

REQUIRED PRECHECK

- Confirm repo path and remote.
- Confirm current branch and expected base.
- Read required authority docs.
- Confirm task is ACTIVE or explicitly prompt-created within allowed governance.
- Confirm protected-system boundaries.
- Confirm target files exist or must be created.

REQUIRED WORK

- [Step 1]
- [Step 2]
- [Step 3]

TARGET FILES

Codex may edit only:
- [path]
- [path]

REFERENCE ONLY FILES

Codex may read but must not edit:
- [path]
- [path]

FORBIDDEN MODIFICATIONS

- No code changes unless explicitly listed in TARGET FILES.
- No runtime behavior changes unless explicitly authorized.
- No Stripe changes unless explicitly authorized.
- No HubSpot changes unless explicitly authorized.
- No Cloudflare runtime/config changes unless explicitly authorized.
- No email routing changes unless explicitly authorized.
- No scheduling changes unless explicitly authorized.
- No planner changes unless explicitly authorized.
- No payment/deposit flow changes unless explicitly authorized.
- No customer funnel route changes unless explicitly authorized.
- No edits outside TARGET FILES.

VALIDATION

Run:
- [command]
- [command]

Do not run:
- [command/tool, if forbidden]

EXPECTED OUTPUT

Codex must report:
- Files changed
- Summary of changes
- Confirmation no unauthorized files were edited
- Confirmation protected systems were untouched
- Validation run
- Build result, if applicable
- PR created: yes/no
- PR number
- PR link
- Source branch
- Base branch
- Merge target
- Context Usage Report:
  - Approximate prompt/context load:
  - Docs actually used:
  - Docs loaded but not useful:
  - Repeated instructions that should move into repo docs:
  - Prompt sections that can be shortened next time:
  - Missing repo docs that would reduce future prompt size:
  - Suggested reusable validation/script improvements:

SELF-CHECK

Before final response, Codex must confirm:
- Allowed scope was followed.
- Only TARGET FILES changed.
- Reference-only files were not edited.
- Protected systems were untouched.
- Required validation ran.
- No unauthorized PR was created.
- No merge was performed.
```
