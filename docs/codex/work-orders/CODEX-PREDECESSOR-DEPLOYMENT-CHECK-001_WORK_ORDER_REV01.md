# CODEX-PREDECESSOR-DEPLOYMENT-CHECK-001 Work Order REV01

Status: AUTHORIZED
Category: GOVERNANCE
Primary Workstream: Project Governance
Related Workstreams: Infrastructure / Deployment System
Customer-facing: No
Runtime impact: None

## Repository / Context

- Repository: `buffalonychris/wnyhomesecurity`
- Local path: `C:\Dev\wnyhomesecurity`
- Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

## Task

- ID: `CODEX-PREDECESSOR-DEPLOYMENT-CHECK-001`
- Name: Add conditional predecessor deployment verification to repository precheck
- Status: Prompt-created bounded task
- Category: GOVERNANCE
- Primary workstream: Project Governance
- Related workstream: Infrastructure / Deployment System

## Read Mode

`TARGETED`

Read only the exact current-context identifier, applicable MTR governance authority, §§8, 9, 17, and 18 of the canonical Codex execution standard, and enough of OPS004 to confirm routing. Do not broad-read the MTR, catalog, manifest, historical standards, deployment or Cloudflare documentation, or unrelated work orders.

## Reasoning Posture

`STANDARD`

## Execution Posture

`DIRECT`

All authorized repository, Git, and GitHub delivery operations are directly executable. Operator review and any later merge remain outside this task.

## Objective

Extend the existing repository convergence precheck with one conditional predecessor-deployment verification rule without creating a separate deployment framework, preflight system, automation mechanism, or governance owner.

## Precheck / Governing Inputs

- Confirm the repository is on `main`, the working tree is clean, and local `HEAD` equals `origin/main` before mutation.
- Starting convergence is `9d290292487062d259f042b4c4acc5ac8eac0018` for both local `HEAD` and `origin/main`, with ahead/behind `0 / 0`.
- Repository convergence is the primary precheck.
- Verify an immediately preceding merged task's deployment only when that deployment materially affects the current task.
- PR #600 is merged and its exact-commit Cloudflare deployment was operator-confirmed successful. Because this task is docs-only governance and does not depend on that deployment, no deployment-history reconstruction or revalidation is required.
- Confirm the current context, prompt-created-task authority, canonical owner, exact task-ID absence, exact file allowlist, and protected-system exclusions before editing.

## Owner Routing Matrix

| Approved concept | Canonical owner | Exact file | Section / behavior | Action | Reason | Alternate-owner exclusion | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Repository convergence with conditional predecessor-deployment verification | Project Governance / Codex | `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` | §9 compact template and §17 repository precheck | MODIFY | The existing standard solely owns Codex execution and repository convergence | Do not create a deployment/preflight standard or modify Cloudflare/deployment owners | None | High |

## Required Work

1. Preserve the existing three-part convergence gate: `main`, clean working tree, and local `HEAD` equal to `origin/main`.
2. Preserve convergence as sufficient to close the prior lifecycle operationally unless historical or deployment evidence materially affects the current task.
3. Require predecessor deployment verification only when the immediately preceding merged task had a deployment that materially affects the current task.
4. Prefer existing GitHub check evidence; wait without mutation while the relevant check is pending; stop and report a failed relevant check.
5. When deployment is irrelevant, prohibit deployment-history reconstruction or revalidation.
6. State that Cloudflare API access or credentials are not required and that the rule is not a universal gate for docs-only or unrelated tasks.
7. Make only the smallest compatible adjustment to the existing compact work-order template's `PRECHECK / GOVERNING INPUTS` guidance.
8. Add and maintain only the exact matching MTR task record, setting it to `DONE` only after validation.

## Allowed Scope / Target Files

Only these files may change:

1. `docs/codex/work-orders/CODEX-PREDECESSOR-DEPLOYMENT-CHECK-001_WORK_ORDER_REV01.md`
2. `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
3. `docs/system/master-task-register.md`

## Reference Only

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`

## Forbidden Scope / Protected Systems

- No script, GitHub Action, hook, polling, background automation, deployment state machine, separate deployment/preflight standard, or duplicate governance owner.
- No Cloudflare configuration or write API, credentials, DNS, tunnels, website/runtime/source, Home Assistant, HubSpot/CRM, Stripe/payment, scheduling, email, dependency, package-lock, environment, secret, or customer-data change.
- No universal deployment gate for docs-only or unrelated tasks.
- No unrelated MTR record, catalog, manifest, historical standard, deployment document, or Cloudflare document change.
- No reset, prune, branch deletion, merge, ready-for-review transition, or deployment.

## Change Posture / Version

Additive and surgical. Amend the current canonical owner in place; do not create a new governance or deployment owner. This docs-only governance task has no site version bump.

## Validation

Tier: governance / docs-only.

Confirm:

- starting convergence at `9d290292487062d259f042b4c4acc5ac8eac0018`;
- exact three-file allowlist and zero deletions;
- exact single MTR task record;
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` remains the sole active detailed execution owner;
- the existing repository convergence precheck remains intact and primary;
- predecessor deployment verification is conditional rather than universal;
- existing GitHub check evidence is preferred when deployment materially matters;
- no Cloudflare credentials or API requirement is added;
- no new script, hook, workflow, automation, polling, state machine, mandatory work-order field, or duplicate owner is added;
- `git diff --check` passes;
- `npm run build` is governed-skipped because only governance Markdown changes and no source or build configuration changes;
- the exact task is set to `DONE` only after validation;
- one task branch is committed and pushed and one draft PR is opened to `main` without merge or deployment.

## Git / Delivery

- Create one fresh branch from synchronized `origin/main`.
- Stage only the three authorized files.
- Commit and push the task branch.
- Open one draft PR to `main` with scope, rationale, validation, build decision, protected-system posture, and risks.
- Do not merge, enable auto-merge, mark ready, or deploy.

## Closeout

Report the branch, commits, draft PR, exact files changed, exact standard sections amended, final precheck rule, conditional deployment posture, convergence primacy, absence of new scripts/automation/Cloudflare credential requirements, validation results, actual reasoning and execution postures, protected-system and no-merge/no-deployment confirmations, unresolved risks, and the canonical Token Utilization / RSI and context-efficiency notes.

## Stop / Exit

Stop for a work-order revision if any file outside the three-file allowlist is required, owner conflict appears, required evidence is unavailable when materially applicable, protected-system work becomes necessary, or the requested rule cannot be added without creating a new system or universal deployment gate.

Exit only when the exact three-file delta validates, the task record is `DONE`, the branch is pushed, one draft PR is open to `main`, and no merge or deployment has occurred.
