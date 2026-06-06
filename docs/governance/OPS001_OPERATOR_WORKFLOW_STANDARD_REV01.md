# OPS001 — Operator Workflow Standard REV01

Status: Proposed
Target location: `/docs/ops/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md` or `/docs/system/ops001_operator_workflow_standard_rev01.md` after governance approval.

## Purpose

Define the standard operating workflow for WNY Home Security execution using ChatGPT, local Codex CLI, GitHub Web UI, and Cloudflare Web UI.

## Local Repo Locations

Local parent directory:

```text
C:\dev
```

WNY Home Security repo:

```text
C:\dev\wnyhomesecurity
```

## Roles

| Role | Responsibility |
|---|---|
| Operator | Makes business decisions, approves promotion, reviews PRs/deployments |
| ChatGPT | Dispatcher, governance interpreter, prompt architect, summary reviewer |
| Codex CLI | Executes one bounded work order in the local repo |
| GitHub Web UI | PR review and merge control |
| Cloudflare Web UI | Deployment verification |

## Standard Workflow

### 1. Idea Intake

The operator brings an idea to ChatGPT.

ChatGPT classifies it as:

- rough idea
- approved decision
- documentation update
- implementation candidate
- runtime-sensitive task
- protected-system task

### 2. Promotion Decision

If the idea is approved, ChatGPT identifies the correct repo owner document.

Examples:

| Idea Type | Repo Owner |
|---|---|
| Visual/page standard | `/docs/design-system/` or `/docs/solution-system/` |
| HubSpot field/runtime behavior | `/docs/runtime/hubspot_properties.md` and `/docs/runtime/hubspot_sync_contract.md` |
| Funnel behavior | `/docs/specs/funnel-spec.md` or route-specific contract |
| Payment behavior | `/docs/runtime/stripe_runtime.md` |
| Deployment behavior | `/docs/runtime/deployment_validation.md` |
| Task execution | `/docs/system/master-task-register.md` |

### 3. Task Register Dispatch

ChatGPT creates or updates a bounded task in `/docs/system/master-task-register.md`.

A valid task must include:

- task ID
- status
- category
- controlling context
- purpose
- controlling docs
- allowed scope
- forbidden scope
- target files
- runtime systems affected
- validation required
- exit criteria

### 4. Codex Work Order

ChatGPT generates one bounded Codex prompt.

The prompt must include:

- system context
- objective
- precheck
- controlling docs
- target files
- forbidden modifications
- validation commands
- required output
- self-check

### 5. Local Codex Execution

Operator runs:

```powershell
cd C:\dev\wnyhomesecurity
codex
```

Operator pastes the bounded work order into Codex.

### 6. Codex Summary Review

Operator pastes Codex summary back into ChatGPT.

ChatGPT reviews summary against:

- task scope
- forbidden scope
- target files
- validation evidence
- protected systems
- version bump requirements if applicable

### 7. GitHub Workflow

ChatGPT provides exact PowerShell/GitHub next steps.

Operator reviews the PR in GitHub Web UI.

Operator merges only after scope and validation are acceptable.

### 8. Cloudflare Deployment Review

Operator reviews Cloudflare deployment.

For customer-facing changes, confirm:

- deployed version if applicable
- target routes render
- protected routes remain intact
- runtime-sensitive flows still behave as expected

### 9. Closeout

After deployment validation, close or update the task status.

Codex closeout summaries become evidence, not strategy.

## Hard Rule

No additional Codex implementation starts until the previous task is reviewed and either accepted, rejected, or corrected.

One bounded task per PR unless explicitly approved.
