# CODEX001 Codex Work Order Specification REV01

Status: Active Codex / KAOS operating standard
Task ID: CODEX001
Customer-facing: No
Implementation authority: No

## 1. Purpose

This specification defines the standard structure for bounded Codex work orders in the WNY Home Security repository.

ChatGPT frames work. Codex executes bounded repository tasks. Repository documents are the durable authority. The Master Task Register is the execution board. Codex does not define strategy, create product direction, infer roadmap priority, or expand scope beyond the active task. One work order should contain one bounded task unless higher-authority governance and the active task explicitly authorize a combined task.

This specification does not authorize source, runtime, route, public-site, hook, automation, protected-system, dependency, package-lock, Cloudflare, CRM, payment, scheduling, email, or secret changes by itself.

Existing predecessor context: `/docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md` defines the earlier work-order standard. This CODEX001 specification adds the current KAOS/event/hook alignment, context-efficiency rules, protected-system confirmations, closeout standard, and compact template set for future task routing.

## 2. Work Order Definition

A Codex work order is a bounded execution instruction that tells Codex what authority to load, what task to execute, what files may be changed, what files must not be changed, what validation to run, what closeout evidence to produce, and what PR state to leave for operator review.

A work order is not a strategy document, product roadmap, automatic task activation, protected-system exception, merge approval, deployment approval, or authority to perform adjacent cleanup.

## 3. Required Work Order Sections

Every future work order must include or explicitly mark not applicable for these sections:

- Recommended Codex Model
- Context Efficiency Instruction
- Token Utilization / RSI Report requirement
- System Context
- Authority Order
- Task ID
- Task Type
- Objective
- Required Precheck
- Required Docs To Load
- Required Work
- Allowed Scope
- Forbidden Scope
- Version Bump Rule
- Validation
- Required Output Summary
- Self-Check
- Event / Hook Readiness Notes
- Protected Systems Confirmation

The sections should be compact. Stable governance should be referenced by path instead of copied into the prompt unless task safety requires a quoted rule.

## 4. Work Order Scope Rules

Scope must be explicit. Capability availability is not authorization.

- Docs-only scope: may create or edit named documentation files only. It must not change source, runtime behavior, public pages, dependencies, protected systems, deployment config, or customer-facing version badges unless explicitly authorized.
- Source/site scope: may change named source, page, route, component, CSS, asset, and version files only when the active task authorizes those surfaces. It must preserve route ownership, funnel order, claims guardrails, and semantic token rules.
- Runtime/API scope: requires explicit runtime authorization, relevant runtime contracts, request/response validation, protected-system checks, and secret-safety confirmation.
- Protected-system scope: HubSpot, Stripe/payment, scheduling, Resend/email, APIs/runtime, secrets/env, Cloudflare config, quote flow, planner, dashboard behavior, SEO behavior, sitemap, robots, and dependencies/package-lock require explicit authorization when touched.
- Dependency/package-lock scope: requires explicit dependency authorization and validation explaining why a dependency or lockfile change is necessary.
- Cloudflare/deployment scope: requires explicit deployment/config authorization and must not expose secrets or alter DNS/environment settings by implication.
- CRM/HubSpot scope: requires explicit CRM authorization, locked REV03 review, and must keep CRM writes through `/api/lead-signal`.
- Stripe/payment scope: requires explicit payment authorization and must preserve server-side verification and webhook-backed payment authority.

When scope is unclear, Codex must stop and request a task revision instead of inventing behavior.

## 5. Context Efficiency Rules

Context efficiency reduces prompt bloat; it never weakens governance.

- Load targeted sections first when the task identifies specific docs or sections.
- Use `rg` or focused search before full-file reads when the doc is large and the needed section is known.
- Avoid broad full-docs scans unless the task is an audit, reconciliation, or safety check that requires one.
- Report redundant context loads in the closeout.
- Report a shorter future prompt pattern when useful.
- Require a Token Utilization / RSI Report at closeout.
- Report exact token metrics when visible and proxy metrics when exact token metrics are not visible.
- Do not skip required authority docs.
- Do not use context efficiency to bypass repository governance, task-register gating, protected-system contracts, claims guardrails, or validation.

## 6. Event Alignment

Work order stages should align with EVENT001 event language:

| Work order stage | EVENT001 event |
| --- | --- |
| Task is activated by Active Tasks or bounded prompt | `TASK_ACTIVATED` |
| Codex begins after authority and scope checks | `TASK_STARTED` |
| Codex completes bounded edits and validation | `TASK_COMPLETED_BY_CODEX` |
| Closeout summary is received | `CODEX_SUMMARY_RECEIVED` |
| Draft PR is opened | `PR_CREATED` |
| PR receives review | `PR_REVIEWED` |
| Operator approves merge | `PR_APPROVED_FOR_MERGE` |
| Operator merges PR | `PR_MERGED` |
| Deployment completes, if applicable | `DEPLOYMENT_COMPLETED` |
| Local main sync completes | `MAIN_SYNC_COMPLETED` |
| Task is closed in the register | `TASK_CLOSED` |
| Repeatable improvement is identified | `RSI_CANDIDATE_IDENTIFIED`, if applicable |

Events describe facts. They do not implement hooks, automate work, create authority, or approve merges.

## 7. Hook Readiness

Future hooks may evaluate work orders and Codex closeouts, but no hooks are implemented by this specification.

Relevant candidate hooks:

- `HOOK-KAOS-INTAKE001`: may later evaluate closeouts for candidate KAOS intake.
- `HOOK-RSI001`: may later capture repeated friction or improvement candidates.
- `HOOK-CONTEXT001`: may later review context efficiency and prompt shape.
- `HOOK-PROTECTED001`: may later flag unauthorized protected-system risk.
- `HOOK-CLAIMS001`: may later flag public claims guardrail risk.
- `HOOK-MTR001`: may later suggest task-register updates without automatic activation or completion.

Future hook evaluation must produce candidate output only unless a later bounded implementation task defines stricter behavior with owner docs, trust review, input/output contracts, and validation.

## 8. Work Order Templates

### A. Docs-Only Governance Task

```text
Recommended Codex model:
- Model: GPT-5.5
- Reasoning: Medium
- Why: Docs-only governance task.

CONTEXT EFFICIENCY INSTRUCTION
Use targeted reads after confirming governing authority.
Prefer rg/search for task-specific sections.
Report redundant context loads and a shorter future prompt pattern.

TOKEN UTILIZATION / RSI REPORT -- REQUIRED
At closeout, report exact token metrics when visible.
If exact token metrics are not visible, report proxy metrics including files read, commands run, redundant reads, context pressure, and next-prompt compression recommendation.

SYSTEM CONTEXT
Repo: buffalonychris/wnyhomesecurity
Primary workstream: Project Governance

AUTHORITY ORDER
Load /docs/system/project.md, /docs/system/guardrails.md, /docs/system/agent.md, /docs/system/plan.md, /docs/system/step-current.md, /docs/system/master-task-register.md, and task-specific docs.

TASK ID
[TASK-ID]

TASK TYPE
Docs-only governance.

OBJECTIVE
[Exact docs outcome.]

REQUIRED PRECHECK
Confirm branch, status, task authority, existing equivalent docs, and docs-only scope.

REQUIRED DOCS TO LOAD
[Exact docs.]

REQUIRED WORK
[Exact docs to create/update.]

ALLOWED SCOPE
[Named docs only.]

FORBIDDEN SCOPE
No source, runtime, protected systems, dependencies, hooks, automation, version bump, or unrelated docs rewrite.

VERSION BUMP RULE
No version bump.

VALIDATION
git status --short
git diff --stat
git diff --name-only
git diff --check
targeted rg checks

REQUIRED OUTPUT SUMMARY
Branch, files changed, summary, validation, protected systems, PR URL, Token Utilization / RSI Report.

SELF-CHECK
Confirm only allowed docs changed and no protected systems changed.

EVENT / HOOK READINESS NOTES
Map closeout to TASK_COMPLETED_BY_CODEX, CODEX_SUMMARY_RECEIVED, PR_CREATED; no hooks implemented.

PROTECTED SYSTEMS CONFIRMATION
Confirm all protected systems untouched.
```

### B. Source/Site Implementation Task

```text
TASK TYPE
Source/site implementation.

OBJECTIVE
[Exact user-visible or source outcome.]

REQUIRED DOCS TO LOAD
Authority docs, current context, active task, affected owner standards, visual/token standards, claims guardrails, and route/SEO docs if touched.

ALLOWED SCOPE
Only named source/docs/version files.

FORBIDDEN SCOPE
No protected systems, routes, SEO, sitemap, robots, dependencies, or adjacent pages unless named.

VERSION BUMP RULE
Patch bump required for customer-facing site behavior.

VALIDATION
npm run build plus focused tests/lint/route/claims/token checks named by the task.

PROTECTED SYSTEMS CONFIRMATION
Confirm HubSpot, Stripe/payment, scheduling, Resend/email, APIs/runtime, secrets/env, dependencies, package-lock, and Cloudflare config untouched unless explicitly authorized.
```

### C. Protected-System Task

```text
TASK TYPE
Protected-system task.

OBJECTIVE
[Exact protected-system outcome.]

REQUIRED DOCS TO LOAD
Authority docs, active task, all relevant runtime contracts, locked CRM/payment/scheduling/email/Cloudflare owner docs, and current config inventories where applicable.

ALLOWED SCOPE
Only explicitly named protected-system files and docs.

FORBIDDEN SCOPE
No adjacent protected systems, no direct HubSpot writes outside /api/lead-signal, no client-side payment authority, no secrets exposure, no dependency changes unless explicitly authorized.

VERSION BUMP RULE
Use explicit task-specific version rule.

VALIDATION
Contract checks, focused tests, build, secret-safety scan, changed-file scan, and runtime behavior checks named by the task.

SELF-CHECK
Confirm exact protected behavior authorized, changed, and validated; stop on ambiguity.
```

### D. QA/Validation Task

```text
TASK TYPE
QA / validation.

OBJECTIVE
[Exact validation surface and evidence.]

REQUIRED DOCS TO LOAD
Authority docs, active task, affected workstream status docs, and owner standards for the surfaces under test.

ALLOWED SCOPE
Validation commands, evidence docs, and named task-register updates only unless fixes are explicitly authorized.

FORBIDDEN SCOPE
No implementation fixes, source changes, protected-system changes, dependency changes, or deployment changes unless the task says so.

VERSION BUMP RULE
No version bump for audit-only validation.

VALIDATION
Run the named validation commands; separate pre-existing failures from task findings.

REQUIRED OUTPUT SUMMARY
Findings, evidence, commands, failures, protected systems, and follow-up candidates.
```

### E. Hook Implementation Task Candidate

```text
TASK TYPE
Hook implementation candidate.

OBJECTIVE
[Exact hook design or implementation outcome.]

REQUIRED DOCS TO LOAD
Authority docs, EVENT001, HOOK001, HOOKCAT001 record for the hook, OPS003, task-register rules, and protected-system owner docs if the hook evaluates protected systems.

ALLOWED SCOPE
Only named hook docs/config/scripts if explicitly authorized.

FORBIDDEN SCOPE
No hooks.json, config.toml, hook scripts, automation, Playwright, Sites, protected-system checks, or dependency changes unless explicitly named.

VERSION BUMP RULE
No site version bump unless customer-facing behavior changes.

VALIDATION
Trust review evidence, input/output contract checks, dry-run or non-destructive tests, changed-file scan, and protected-system confirmation.

EVENT / HOOK READINESS NOTES
Confirm candidate vs implemented status and whether any hook is trusted, validated, or still advisory.
```

## 9. Closeout Summary Standard

Codex closeouts for repository work should report:

- Branch name
- PR URL
- Files changed
- Summary of work
- Existing docs found / not found
- Validation run
- Build/test results
- Version bump status
- Protected systems confirmation
- Scope confirmation
- Events / KAOS intake candidates
- RSI candidates
- Token Utilization / RSI Report
- Commands executed summary

The Token Utilization / RSI Report must include exact token metrics when visible. If exact token metrics are not visible, it must state that clearly and report proxy metrics: files read, files modified, commands run, validation commands run, failed/retried commands, broad searches, large docs loaded, redundant reads, context pressure, and next-prompt compression recommendation.

If a field does not apply, say `Not applicable` and explain briefly when useful.

## 10. Protected Systems Confirmation

Use explicit language in closeouts:

- HubSpot: Untouched, or explicitly authorized changes with files and validation.
- Stripe/payment: Untouched, or explicitly authorized changes with server-side verification evidence.
- Scheduling: Untouched, or explicitly authorized changes with owner-confirmation and calendar-authority evidence.
- Resend/email: Untouched, or explicitly authorized changes with server-side secret and audit-copy evidence.
- APIs/runtime: Untouched, or explicitly authorized changed endpoints/contracts.
- Secrets/env: No secrets or environment values exposed; env files untouched unless explicitly authorized.
- Dependencies/package-lock: Untouched unless dependency work was explicitly authorized.
- Cloudflare config: Untouched unless deployment/config work was explicitly authorized.
- Quote flow: Untouched unless quote flow work was explicitly authorized.
- Planner: Untouched unless planner work was explicitly authorized.
- Dashboard: Untouched unless dashboard work was explicitly authorized.
- SEO behavior: Untouched unless SEO behavior work was explicitly authorized.
- Sitemap/robots: Untouched unless explicitly authorized.
- Source/runtime files: Untouched for docs-only work; otherwise list exactly what changed.

## 11. PR Review / Merge Boundary

Codex opens draft PRs by default when repository governance requires a PR. The user reviews manually. ChatGPT may review the Codex summary and give merge guidance. The user merges manually, verifies Cloudflare manually, and runs local main sync manually.

Codex must not merge, enable auto-merge, mark a draft PR ready, approve deployment, or push directly to main unless explicitly instructed by the operator and allowed by current governance.

## 12. Version Bump Rules

- Docs-only: no version bump.
- Customer-facing source/site behavior: patch bump.
- Runtime/API behavior: explicit version rule required by the task.
- Metadata/SEO visible behavior: patch bump unless controlling docs say otherwise.
- Dependency changes: explicit authorization required; version behavior must be stated in the work order.

If a version rule is missing for source, runtime, or SEO-visible behavior, stop and request clarification.

## 13. Prohibited Behavior

Codex work orders must not:

- expand scope
- infer strategy
- edit protected systems without explicit authority
- bypass claims guardrails
- hardcode colors outside the token system
- expose secrets
- merge PRs
- silently change architecture
- mark unrelated tasks DONE
- delete, move, or rename historical docs without authorization
- create hooks, scripts, tooling, automation, or config unless the task explicitly allows it
- treat candidate KAOS, RSI, decision, process, or hook records as implementation authority
- trust redirect URLs as payment confirmation
- bypass `/api/lead-signal` for CRM writes

## 14. Future Use

This specification supports:

- first hook implementation tasks
- SITE001
- SITEQA001
- weekly engineering summary
- KAOS intake hooks
- task-register automation
- reusable KAOS framework extraction

Each future use still requires a bounded task, owner-document review, protected-system review when relevant, validation, and operator review before implementation.
