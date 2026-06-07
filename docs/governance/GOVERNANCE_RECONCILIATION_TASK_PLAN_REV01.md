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

## Phase 4A — Conflicting Step Reconciliation Planning

### GOV004 — Conflicting Step Reconciliation Plan

Goal: create this bounded planning sequence for Step docs classified as `CONFLICTING / NEEDS RECONCILIATION` by GOV003.

Allowed scope:
- update this reconciliation plan
- update `/docs/DOCUMENT_CATALOG.md` only as needed to reference this plan
- read conflicting Step docs and current governance references

Forbidden scope:
- no Step doc edits
- no runtime contract edits
- no source code, UI, route, Stripe, HubSpot, Cloudflare config, deployment behavior, or task-register changes

Exit criteria:
- GOV005, GOV006, and GOV007 are defined as separate bounded reconciliation tasks
- each task includes purpose, target files, reference files, allowed scope, forbidden scope, validation expectations, and exit criteria
- Step docs remain unchanged in GOV004

### GOV005 — Step101 Reconciliation

Purpose:
- Reconcile `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md` so it is clearly historical/supporting funnel lineage unless explicitly promoted by the current operational context or an active bounded work order.
- Resolve the preserved legacy `Active / Controlling for UI, funnel, page structure, navigation, and visual cleanup` wording without changing implementation behavior.

Why it is conflicting:
- Header classification says `CONFLICTING / NEEDS RECONCILIATION`.
- The preserved body still contains legacy controlling-language that can be misread as current UI/funnel execution authority.
- Current governance assigns execution authority to Project KB as ChatGPT control layer, repository governance, `step-current.md`, the Master Task Register, and one active bounded task/work order.

Target files:
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/DOCUMENT_CATALOG.md`

Reference files:
- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`
- `docs/governance/MASTER_TASK_REGISTER_DISPATCH_STANDARD_REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- active funnel/public-funnel standards if named by the GOV005 work order

Allowed scope:
- documentation-only wording reconciliation in the Step101 doc and catalog entry
- preserve historical funnel intent, route order, copy posture, and lineage content
- mark legacy controller language as historical/reference language
- clarify that Step101 does not authorize implementation, UI, route, copy, or funnel changes by itself

Forbidden scope:
- no code, UI, route, runtime, Stripe, HubSpot, Cloudflare config, deployment behavior, task-register, design-system, solution-system, or runtime-doc edits
- no deletion of historical Step101 content
- no implementation-detail resolution beyond authority wording

Validation expectations:
- `git status`
- `git diff -- docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md docs/DOCUMENT_CATALOG.md`
- `rg -n "Step101|SUPPORTING REFERENCE|HISTORICAL BASELINE|CONFLICTING / NEEDS RECONCILIATION|Active / Controlling|Current Use|Do Not Use For" docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md docs/DOCUMENT_CATALOG.md`
- `git diff --check`
- do not run `npm run build` unless the work order explicitly requires it

Exit criteria:
- Step101 is unambiguously non-controlling unless promoted by current context or bounded work order
- catalog entry matches the Step101 classification
- historical content is preserved
- no protected systems or implementation files changed

### GOV006 — QR Step102 Reconciliation

Purpose:
- Reconcile `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md` so it is clearly historical/supporting QRLanding lineage unless explicitly promoted by the current operational context or an active bounded work order.
- Resolve preserved legacy `ACTIVE` and `Controlling Implementation Step` wording without changing QRLanding implementation behavior.

Why it is conflicting:
- Header classification says `CONFLICTING / NEEDS RECONCILIATION`.
- The preserved body still contains legacy active/controller language and broad implementation authorization for QR route, lead intake, CRM onboarding, scheduling, and attribution.
- Current governance requires protected runtime systems, HubSpot, Stripe, scheduling, route/UI, and deployment changes to be authorized by bounded active tasks/work orders and relevant contracts.

Target files:
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/DOCUMENT_CATALOG.md`

Reference files:
- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`
- `docs/governance/MASTER_TASK_REGISTER_DISPATCH_STANDARD_REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- QR/public-funnel standards and QRLanding runtime contracts only as read-only references if named by the GOV006 work order

Allowed scope:
- documentation-only wording reconciliation in the QR Step102 doc and catalog entry
- preserve QR acquisition intent, historical scope, completion criteria, and lineage content
- mark legacy active/controller implementation language as historical/reference language
- clarify that QR Step102 does not authorize route, CRM, lead-signal, scheduling, attribution, or runtime changes by itself

Forbidden scope:
- no code, UI, route, runtime, Stripe, HubSpot, Cloudflare config, deployment behavior, task-register, design-system, solution-system, or runtime-doc edits
- no deletion of historical QR Step102 content
- no implementation-detail resolution beyond authority wording

Validation expectations:
- `git status`
- `git diff -- "docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md" docs/DOCUMENT_CATALOG.md`
- `rg -n "Step102|SUPPORTING REFERENCE|HISTORICAL BASELINE|CONFLICTING / NEEDS RECONCILIATION|ACTIVE|Controlling Implementation Step|Current Use|Do Not Use For" "docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md" docs/DOCUMENT_CATALOG.md`
- `git diff --check`
- do not run `npm run build` unless the work order explicitly requires it

Exit criteria:
- QR Step102 is unambiguously non-controlling unless promoted by current context or bounded work order
- catalog entry matches the QR Step102 classification
- historical content is preserved
- no protected systems or implementation files changed

### GOV007 — Step201 Reconciliation

Purpose:
- Reconcile `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md` so it is clearly historical/supporting email lineage unless explicitly promoted by the current operational context or an active bounded work order.
- Resolve preserved legacy `Active / Controlling for outbound email, Resend, server email endpoints, and audit-copy behavior` wording without changing email runtime behavior.

Why it is conflicting:
- Header classification says `CONFLICTING / NEEDS RECONCILIATION`.
- The preserved body still contains legacy controlling-language for outbound email, server email endpoints, and audit-copy behavior.
- Current governance treats email routing and runtime behavior as protected systems that require bounded active work orders and relevant runtime contracts.

Target files:
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/DOCUMENT_CATALOG.md`

Reference files:
- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`
- `docs/governance/MASTER_TASK_REGISTER_DISPATCH_STANDARD_REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- email runtime contracts only as read-only references if named by the GOV007 work order

Allowed scope:
- documentation-only wording reconciliation in the Step201 doc and catalog entry
- preserve historical email architecture intent, audit-copy posture, and lineage content
- mark legacy controller language as historical/reference language
- clarify that Step201 does not authorize email runtime, Resend, endpoint, DNS, Cloudflare Email Routing, or secret changes by itself

Forbidden scope:
- no code, UI, route, runtime, Stripe, HubSpot, Cloudflare config, deployment behavior, task-register, design-system, solution-system, or runtime-doc edits
- no deletion of historical Step201 content
- no implementation-detail resolution beyond authority wording

Validation expectations:
- `git status`
- `git diff -- docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md docs/DOCUMENT_CATALOG.md`
- `rg -n "Step201|SUPPORTING REFERENCE|HISTORICAL BASELINE|CONFLICTING / NEEDS RECONCILIATION|Active / Controlling|Current Use|Do Not Use For" docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md docs/DOCUMENT_CATALOG.md`
- `git diff --check`
- do not run `npm run build` unless the work order explicitly requires it

Exit criteria:
- Step201 is unambiguously non-controlling unless promoted by current context or bounded work order
- catalog entry matches the Step201 classification
- historical content is preserved
- no protected systems or implementation files changed

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
