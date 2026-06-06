# Governance Reconciliation Task Plan — REV01

## Purpose

Define the bounded Codex task sequence required to implement governance/documentation reconciliation safely.

No giant cleanup task is allowed.

## Phase 0 — Freeze Implementation

### GOV-FREEZE-001 — Record Implementation Pause

Goal: document that implementation is paused during governance reconciliation.

Allowed scope:
- update current-context/task-register docs only
- mark reconciliation tasks as governance-only

Forbidden scope:
- no source code edits
- no runtime changes

## Phase 1 — Authority Chain

### GOV001 — Authority Chain Reconciliation

Goal: reconcile `/docs/system/project.md`, `agent.md`, `plan.md`, `guardrails.md`, and `step-current.md` around the current-context + task-register model.

Key correction:
- remove/resolve stale Step001-Step005-only enforcement if repo no longer uses that model.

## Phase 2 — Master Task Register Dispatch Model

### GOV002 — Master Task Register Dispatch Standard

Goal: update task register rules so tasks route Codex to controlling docs, standards, runtime contracts, allowed scope, forbidden scope, validation, and exit criteria.

Target docs:
- `/docs/system/master-task-register.md`
- `/docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `/docs/codex/CODEX_TASK_TEMPLATE.md`
- `/docs/codex/CODEX_RUN_CONTRACT.md`

## Phase 3 — OPS Standard

### OPS001 — Operator Workflow Standard

Goal: add the operator workflow standard covering local repo, Codex CLI, GitHub, Cloudflare, PR review, deployment review, summary review, and chat handoff.

Target location candidate:
- `/docs/ops/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`

## Phase 4 — Document Classification

### GOV003 — Documentation Classification + Catalog Reconciliation

Goal: classify all docs as Active Governance, Active Standards, Runtime Contracts, Historical, Archive Candidate, Duplicate, Superseded, or Project KB Candidate.

Target docs:
- `/docs/DOCUMENT_CATALOG.md`
- `/docs/MARKDOWN_MANIFEST.md`
- optional generated classification matrix

Forbidden:
- do not delete docs
- do not rewrite standards/runtime contracts

## Phase 5 — Runtime Ownership Confirmation

### RUNTIME-GOV001 — Runtime Owner Map Confirmation

Goal: confirm every runtime system has one canonical owner doc and no scattered conflicting source of truth.

Target docs:
- `/docs/runtime/runtime_ownership_map.md`
- `/docs/runtime/README.md`
- runtime owner docs only as needed for classification/reference

## Phase 6 — Project KB Replacement

### KB001 — Project KB Replacement Pack Finalization

Goal: generate the final small Project KB replacement set after repo governance model is confirmed.

Output:
- 5 to 10 markdown files only
- no duplicate repo library upload

## Phase 7 — Resume Implementation

### GOV-RESUME-001 — Implementation Resume Gate

Goal: confirm governance chain, task dispatch model, and Project KB replacement are accepted before new implementation tasks resume.

Exit criteria:
- Project KB is lean
- Project Instruction Block is updated
- repo governance recognizes dispatcher/work-order model
- Master Task Register contains valid active task schema
- Codex prompts are one bounded work order at a time
