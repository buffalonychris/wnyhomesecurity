# Codex Execution Standard REV01

Status: ACTIVE AND CANONICAL
Task ID: T-CODEXGOVCONSOL001
Owner: Project Governance / Codex
Customer-facing: No
Implementation authority: No

## 1. Purpose and applicability

This is the sole active detailed owner for Codex execution and work-order construction in WNYHS. It applies equally to Codex CLI and the ChatGPT Windows app. It governs how authorized work is routed, read, executed, validated, delivered, and reported; it does not authorize implementation by itself.

Root `/AGENTS.md` is the concise always-on entrypoint. Domain owner standards and runtime contracts remain authoritative within their scopes.

## 2. Authority chain

Apply this precedence:

1. `/docs/system/project.md`
2. `/docs/system/guardrails.md`
3. `/docs/system/agent.md`
4. `/docs/system/plan.md`
5. `/docs/system/step-current.md`
6. `/docs/system/master-task-register.md`
7. active bounded task record or permitted prompt-created work order
8. locked standards, owner specifications, and runtime contracts
9. implementation/source evidence
10. historical documents as lineage only
11. chat context only when promoted into the work order or repository

Higher authority controls conflicts. `step-current.md` supplies the exact single controlling-context identifier.

## 3. Roles and control surfaces

- **Operator:** selects priority, authorizes bounded work, reviews PRs and Sites outcomes, manually merges, and decides deployment readiness.
- **ChatGPT dispatcher:** routes the task, frames a bounded work order, reviews closeout/PR evidence, and recommends approve or hold. It does not invent strategy or merge.
- **Codex:** executes one authorized bounded task, preserves scope, validates, opens a draft PR, and reports evidence. It does not expand scope or merge.
- **GitHub:** branch, diff, checks, review, and manual-merge control surface.
- **Cloudflare:** production hosting/deployment surface; access does not authorize configuration or deployment changes.
- **ChatGPT Sites:** governed prototype, interactive validation, versioning, and hosted-preview surface; it is not WNYHS production authority.

External integrations, apps, MCPs, browser/application control, and connected services require explicit task need. Capability availability is not authorization.

## 4. Task authorization and prompt-created tasks

Execute only one named bounded task per run and PR. Authorization requires current-context alignment plus either:

- an `ACTIVE` record under Active Tasks; or
- a prompt-created work order permitted by higher governance that states task ID/name, category/workstreams, objective, allowed and forbidden scope, target files, validation, and closeout.

When explicitly authorized, Codex may add only the missing prompt-created task record, set it ACTIVE at work start, and set only that record DONE after all validation and exit criteria pass. Do not activate, complete, or reprioritize adjacent tasks.

## 5. Category and workstream routing

Before edits, identify:

- task category from `CODEX_TASK_REGISTER_RULES.md`;
- one primary workstream under OPS004;
- related workstreams touched by constraints or validation;
- current-state documents, only when needed;
- owner/governing documents;
- protected systems and forbidden scope.

OPS004 routes. OPS005 summarizes current state. Neither authorizes implementation. Related workstreams never expand allowed scope.

## 6. Targeted-read execution

`READ MODE: TARGETED` is the default.

1. Search exact task IDs, headings, status labels, paths, and references with `rg` or equivalent.
2. Read the smallest located section that establishes authority, scope, status, owner rules, or validation.
3. Load task-specific owner docs only for affected surfaces.
4. Do not fully load the Master Task Register, Document Catalog, Markdown Manifest, broad audits, inventories, or status boards by default.
5. Avoid broad repository searches after the needed reference set is known.

Escalate to a full-file read only when:

- a higher-authority document explicitly requires it;
- the bounded task is an audit, reconciliation, or owner-document rewrite requiring whole-file comparison;
- targeted search fails to find the required section;
- task authority, precedence, or protected-system scope remains ambiguous;
- the complete file is itself the authorized review target.

Record the reason for each full read. A stalled or failed read/command gets at most one retry. If the retry fails, use a smaller targeted command, alternate non-destructive reader, or stop with the exact blocker. Never repeat broad read batches.

## 7. Required read-mode declaration

Every work order must declare one of:

```text
READ MODE: TARGETED
Search exact IDs/headings first; load only applicable authority and owner sections.
```

```text
READ MODE: FULL
Justification: [specific audit, reconciliation, higher-authority, ambiguity, or whole-file reason].
```

`FULL` without explicit justification is incomplete.

## 8. Canonical work-order structure

Use these sections, marking a section `Not applicable` only when justified:

1. Repository and controlling context
2. Task ID, name, status, and category
3. Primary and related workstreams
4. Read mode and justification if FULL
5. Objective
6. Authorization and required precheck
7. Required authority/owner documents
8. Required work
9. Allowed scope and target files
10. Reference-only inputs
11. Forbidden scope and protected systems
12. Additive/destructive posture and version rule
13. Validation tier and exact checks
14. Git/branch/commit/draft-PR requirements
15. Required closeout and RSI report
16. Stop conditions and exit criteria

Stable rules should be referenced by path, not pasted into every prompt.

## 9. Compact reusable work-order template

```text
REPOSITORY / CONTEXT
Repo: [owner/repository and local path]
Controlling context: [exact ID from step-current.md]

TASK
ID / name: [ID] / [name]
Status / category: [ACTIVE or prompt-created] / [category]
Primary workstream: [one]
Related workstreams: [only touched workstreams]

READ MODE: TARGETED
[Or FULL with explicit justification.]

OBJECTIVE
[One bounded outcome.]

PRECHECK / GOVERNING INPUTS
[Repo, main sync, existing branch/PR, authority, owner-doc, and protected-scope checks.]

REQUIRED WORK
[Exact bounded operations.]

ALLOWED SCOPE / TARGET FILES
[Exact files and allowed behavior.]

REFERENCE ONLY
[Exact read-only inputs.]

FORBIDDEN SCOPE / PROTECTED SYSTEMS
[Explicit exclusions.]

CHANGE POSTURE / VERSION
[Additive or explicitly authorized destructive action; version rule.]

VALIDATION
Tier: [docs-only | governance | source/UI | runtime/API | protected system | QA | Sites]
[Exact checks and build decision.]

GIT / DELIVERY
[Branch, commit, draft PR to main, no merge.]

CLOSEOUT
[Required evidence, protected-system confirmation, unresolved risks, Token Utilization / RSI Report.]

STOP / EXIT
[Ambiguities that require revision; objective exit criteria.]
```

## 10. Allowed and forbidden scope

Allowed work is limited to the named task, files, behaviors, documentation bookkeeping, and validation evidence. Unnamed active/backlog tasks, cleanup, features, architecture, routes, workflows, schemas, dependencies, integrations, or product direction are forbidden by default.

Reference-only inputs cannot be edited. If new evidence requires a file outside the allowlist, stop for work-order revision.

## 11. Protected systems

Protected by default:

- HubSpot REV03, CRM schema/properties/pipeline, and `/api/lead-signal` as the only CRM write path;
- Stripe secrets, checkout/session semantics, webhook verification, deposit calculation, and server-side payment authority;
- scheduling/calendar ownership and operator-confirmed booking;
- Lead Signal, requestId, QR/source attribution, Resend/email, APIs/runtime, Cloudflare/environment/DNS, secrets, customer data;
- quote → agreement → payment → success/cancel → schedule chain and Precision Planner;
- public claims, funnel order/routing, SEO/sitemap/robots, dependencies/package-lock, and production deployments when not explicitly named.

Protected work requires explicit bounded authority, owner/runtime-contract reads, task-specific validation, and exact closeout evidence. Ambiguity is a stop condition.

## 12. Additive and destructive rules

Default to additive, surgical edits that preserve working systems and lineage. Destructive changes include deletion, route removal, schema/contract replacement, working-flow rewrite, historical-doc removal, or broad consolidation. They require explicit task authorization and proof that affected references and rollback/review needs are handled.

Never revert or absorb unrelated user changes. Keep one task per branch and PR.

## 13. Documentation and supersession

New standards must name owner, status, authority, implementation-authority posture, and predecessor/successor relationship. Superseded files remain for lineage unless deletion is explicitly authorized. A superseded file must:

- state `SUPERSEDED` near the top;
- point to the exact successor;
- retain historical task/version lineage;
- contain no instructions that appear currently operative;
- avoid duplicating the successor.

Update only task-authorized catalogs, manifests, indexes, task records, and active references. Historical references may remain when clearly historical or automatically redirected by an explicit supersession notice.

## 14. Model and reasoning guidance

Do not hard-code a model name in durable work orders. Use the best currently approved full-capability Codex model available for the risk and complexity. State the reasoning effort and why:

- standard/medium effort for bounded docs, governance, focused UI, and small source tasks;
- elevated/high effort for runtime failures, architecture conflicts, large refactors, protected systems, payment, scheduling, API, or ambiguous authority.

Prefer capability requirements over product names so guidance does not stale quickly. If the selected surface cannot meet the task’s safety or tool needs, stop or move the task to a suitable surface.

## 15. Validation tiers

- **Docs-only:** changed-file audit, focused content/reference checks, `git diff --check`, unexpected-delete check, applicable docs/link validator; no build by default.
- **Governance:** docs-only checks plus authority/status/supersession/conflict/task-count checks and scope proof.
- **Source/UI:** focused tests, lint/typecheck as applicable, `npm run build`, route/claims/token checks, and visual/browser review only when required.
- **Runtime/API:** relevant owner/runtime contracts, focused unit/integration behavior, build/typecheck, request/response and failure-mode checks, secret-safety evidence.
- **Protected system:** runtime/API checks plus locked-owner verification, server-authority proof, changed-boundary audit, and manual review; never infer authorization.
- **QA:** execute the named evidence plan; do not implement fixes unless separately authorized; distinguish findings from regressions.
- **Sites:** source commit SHA, project ID handling, saved Site version, deployment traceability, visibility/boundary checks, and production-authority confirmation.

Validation is task-scaled. Browser automation, external services, or live application control are used only when explicitly required.

## 16. Docs-only build rule

Docs-only tasks do not run `npm run build` unless:

- source or build configuration changed;
- a higher authority explicitly requires it; or
- the work order explicitly justifies it.

Otherwise record `Governed docs-only build skip` and the controlling rule. A task-specific higher-authority instruction can narrow a context-default build expectation.

## 17. Git, commit, PR, and review

- Precheck a clean, synchronized `main` and any existing task branch/PR.
- Create one fresh branch from `origin/main`; one task per branch and PR.
- Stage only authorized files and use the task-specified commit message.
- Push the task branch and open a draft PR to `main` with scope, rationale, validation, build decision, protected-system posture, and risks.
- Never merge, enable auto-merge, mark ready, approve deployment, or push directly to `main` unless explicitly authorized by the operator and higher governance.
- The operator performs manual review and merge. Post-merge sync and deployment are separate facts/actions.

## 18. Closeout output

Report, as applicable:

- version; repository; branch; commit SHA; draft PR URL/base;
- controlling context, task/category/workstreams, and read mode;
- files created, changed, and intentionally untouched;
- concise result and rules consolidated/superseded;
- validation commands/results and build decision;
- protected-system and scope confirmations;
- no-merge confirmation;
- assumptions, unresolved conflicts/risks, and follow-up tasks without activating them;
- Token Utilization / RSI Report.

## 19. Token Utilization / RSI Report

Use one canonical report. When exact metrics are visible, report total, input, output, cached-input, reasoning/compute tokens, model, and reasoning level. Otherwise state:

```text
Exact token metrics not visible in Codex.
```

Then report observable proxies:

- files read and which were essential;
- full/broad reads and their justification;
- files modified;
- tool/terminal and validation commands;
- retries and failed commands;
- redundant/unnecessary reads;
- elapsed time when visible;
- context pressure: low, medium, or high;
- prompt compression lesson;
- chat-derived context promoted into repository docs;
- recommended shorter prompt pattern.

Do not create a durable token log unless explicitly authorized.

## 20. Desktop-app and CLI parity

The same authority, task, read-mode, retry, file-scope, validation, Git/PR, protected-system, Sites, and closeout rules apply in both surfaces. Surface-specific tools do not change authority. When a Windows path, command runner, or app control differs, use the safest equivalent while preserving evidence and boundaries.

## 21. Failure handling

For command-runner, sandbox, patch-helper, whitespace, or tool-startup faults:

1. capture the exact non-secret failure;
2. retry the same operation at most once when safe;
3. reduce to a smaller targeted command or patch;
4. use an approved equivalent tool when it does not expand scope;
5. re-check status/diff after partial operations;
6. stop if file integrity, authorization, secret safety, or validation cannot be established.

Do not use repeated broad reads, repeated blind patches, destructive Git recovery, or secret-revealing diagnostics. Separate tooling faults from repository defects in closeout.

## 22. ChatGPT Sites workflow and boundaries

`Category: SITE` and the `ChatGPT Sites` workstream cover governed source-backed website prototyping, interactive design validation, owner-only Site versioning and deployment, and controlled reconciliation into an authoritative production repository.

- Sites may use dedicated branches and managed worktrees.
- `.openai/hosting.json` may persist the exact Sites `project_id` only when a SITE task explicitly authorizes it.
- Source commit SHA, saved Site version, and deployment must remain traceable.
- Every Sites URL is a real hosted deployment even when private.
- Private prototypes are not customer production authority.
- `wnyhomesecurity.com` remains under this repository, GitHub, Cloudflare, funnel/runtime contracts, and protected-system governance.
- A separate bounded task is required before any prototype is reconciled into production.
- T-SITEPROTOTYPE001 may be activated only after the governance PR that establishes these rules is merged and `main` is synchronized.

The canonical public category order must remain:

1. Home Security
2. Aging in Place
3. Home Safety
4. Home Automation
5. Home Lighting
6. Property Management

Sites tools or hosting access do not authorize production deployment, Cloudflare changes, source reconciliation, or protected-system changes.

## 23. Supersession and future amendments

This standard supersedes as active execution owners:

- `/docs/codex/CODEX_RUN_CONTRACT.md`
- `/docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`
- `/docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `/docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md`

Those files remain lineage only. Existing historical references to them are interpreted through their successor notices and do not revive their instructions.

Future amendments must revise or supersede this standard explicitly; they must not create a parallel active Codex execution or work-order owner. A successor must update root `AGENTS.md`, status metadata, active references, catalog/manifest registration, and predecessor pointers in one bounded governance task.
