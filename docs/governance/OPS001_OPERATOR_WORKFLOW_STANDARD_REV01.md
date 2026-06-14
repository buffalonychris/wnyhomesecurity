# OPS001 — Operator Workflow Standard REV01

Status: Proposed
Target location: `/docs/ops/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md` or `/docs/system/ops001_operator_workflow_standard_rev01.md` after governance approval.

## Purpose

Define the standard operating workflow for WNY Home Security execution using ChatGPT, local Codex CLI, GitHub Web UI, and Cloudflare Web UI.

## Relationship to Codex Work Order Standard

OPS001 governs the operator workflow: idea intake, promotion decision, task-register dispatch, local repo preflight, Codex execution, summary review, GitHub review, deployment review, and closeout.

`/docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md` governs Codex prompt and work-order structure for all future Codex tasks.

Future Codex tasks must follow the Codex Work Order Standard for work-order sections, scope boundaries, validation instructions, expected output, protected-system confirmation, branch rules, and PR rules.

OPS001 should reference the Codex Work Order Standard for Codex prompt and work-order requirements rather than duplicating that standard here.

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

## ChatGPT Command Formatting

When ChatGPT provides shell commands that the operator is expected to copy and run, commands must be presented in copy-friendly fenced code blocks.

Rules:

- Provide each logical command group in its own fenced code block.
- Avoid inline command sequences when the operator is expected to copy/paste.
- Prefer `powershell` fencing for Windows commands.
- Keep commands concise and executable.

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

### 4. Mandatory Local Repo Refresh Preflight

Before every new Codex work order, the operator must refresh the local repository state and start from a clean task branch.

The operator must:

1. Return to `main`.
2. Pull the latest `origin/main`.
3. Confirm the working tree is clean.
4. Create a fresh task branch.
5. Only then run Codex.

Required command pattern:

```powershell
cd C:\dev\wnyhomesecurity
git checkout main
git pull origin main
git status
git checkout -b <task-id-or-short-task-name>
codex
```

`git status` must report no pending local changes before the fresh branch is created. A local BAT helper may be used to run these steps, but this workflow rule is authoritative if the helper behavior ever differs.

When `mainsync.bat` is available and appropriate, ChatGPT may present it as Option A for local sync:

```powershell
.\mainsync.bat
```

Manual fallback remains:

```powershell
cd C:\dev\wnyhomesecurity
git checkout main
git pull origin main
git status
```

Use the manual fallback when there are pending local changes, branch uncertainty, or uncertainty about helper behavior.

### 5. Codex Work Order

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

### 6. Local Codex Execution

Operator runs:

```powershell
cd C:\dev\wnyhomesecurity
codex
```

Operator pastes the bounded work order into Codex.

### 7. Codex Summary Review

Operator pastes Codex summary back into ChatGPT.

ChatGPT reviews summary against:

- task scope
- forbidden scope
- target files
- validation evidence
- protected systems
- version bump requirements if applicable

### 8. GitHub Workflow

ChatGPT provides exact PowerShell/GitHub next steps.

Operator reviews the PR in GitHub Web UI.

Operator merges only after scope and validation are acceptable.

When user-authorized and governance-compliant, ChatGPT may use available GitHub connector tools to inspect repository files, read governance docs, create or update repository documentation, create branches, open pull requests, add PR comments, and inspect PR metadata. Connector usage does not replace operator PR review or manual merge control.

### 9. Cloudflare Deployment Review

Operator reviews Cloudflare deployment.

For customer-facing changes, confirm:

- deployed version if applicable
- target routes render
- protected routes remain intact
- runtime-sensitive flows still behave as expected

### 10. Closeout

After deployment validation, close or update the task status.

Codex closeout summaries become evidence, not strategy.

## Hard Rule

No additional Codex implementation starts until the previous task is reviewed and either accepted, rejected, or corrected.

One bounded task per PR unless explicitly approved.
