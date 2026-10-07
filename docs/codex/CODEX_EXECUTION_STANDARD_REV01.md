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
- **ChatGPT Architecture Steward and dispatcher:** protects repository-first governance, assesses governance impact, routes the task, frames a bounded repository-owned work order, reviews closeout/PR/RSI evidence, and recommends approve or hold. It does not invent strategy, merge, activate protected work, or substitute chat memory for repository authority.
- **Codex:** executes one authorized bounded task, preserves scope, validates, opens a draft PR, and reports evidence. It does not expand scope or merge.
- **GitHub:** branch, diff, checks, review, and manual-merge control surface.
- **Cloudflare:** production hosting/deployment surface; access does not authorize configuration or deployment changes.
- **ChatGPT Sites:** governed prototype, interactive validation, versioning, and hosted-preview surface; it is not WNYHS production authority.

External integrations, apps, MCPs, browser/application control, and connected services require explicit task need. Capability availability is not authorization.

The Architecture Steward role is technology-agnostic and independent of a specific model version. It preserves business-capability ownership, reconciles before creating or duplicating owners, prefers extending an existing owner, keeps implementation bounded, protects additive/destructive discipline, surfaces conflicts as stop conditions, uses targeted reads and compact dispatch, and routes approved improvement candidates into durable authority. Platform adapters may change without changing this operating doctrine.

## 4. Task authorization and prompt-created tasks

Execute only one named bounded task per run and PR. Authorization requires current-context alignment plus either:

- an `ACTIVE` record under Active Tasks; or
- a prompt-created work order permitted by higher governance that states task ID/name, category/workstreams, objective, allowed and forbidden scope, target files, validation, and closeout.

When explicitly authorized, Codex may add only the missing prompt-created task record, set it ACTIVE at work start, and set only that record DONE after all validation and exit criteria pass. Do not activate, complete, or reprioritize adjacent tasks.

Standing Campaign Authorization is category-level permission to create and sequence bounded tasks inside an approved campaign. It does not authorize source, website, runtime, protected-system, or multi-task implementation. Every implementation still requires one bounded task and repository-owned work order; website, runtime, and protected-system changes remain individually authorized.

## 4A. Owner Routing Matrix checkpoint

Applicable work must follow:

`Discussion -> GIA when required -> Draft Work Order -> Owner Routing Matrix -> Operator Approval -> Final Repository Work Order -> Codex Implementation`

Before implementation, the final repository work order must contain an operator-approved Owner Routing Matrix with:

- approved concept;
- current canonical owner;
- exact target file;
- exact section or target behavior;
- action: `MODIFY`, `CREATE`, `SUPERSEDE`, `REFERENCE ONLY`, or `STOP`;
- reason the selected owner is correct;
- why the concept does not belong in another plausible owner;
- authority conflict: `YES` or `NO`; and
- confidence: `HIGH`, `MEDIUM`, or `LOW`.

`CONFLICT: YES` requires reconciliation before implementation. `CONFIDENCE: LOW` requires operator review and explicit approval. Creating an owner requires a duplicate-owner search and a documented reason no existing owner can absorb the concept. Codex may verify or narrow an approved action to `REFERENCE ONLY`, but it must not silently reroute it. A newly discovered target outside the approved matrix requires a work-order revision.

Small, single-owner, non-governance tasks may use a compact one-row matrix. Cross-cutting, governance, architecture, protected-system, or multi-owner tasks require a detailed matrix.

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

Read breadth and reasoning effort are independent controls. An elevated reasoning posture does not authorize broader reads, full-register loading, historical-document loading, unrelated owner-document loading, prior-prototype loading, or broad repository search. Targeted reads remain the default at every reasoning posture unless one of the explicit full-read conditions below applies.

1. Immediately after reading the work-order header, verify that its Primary Workstream exactly matches a registered OPS004 workstream. If it does not, stop immediately and report the routing conflict before broader repository reads, authority discovery, or implementation.
2. Search exact task IDs, headings, status labels, paths, and references with `rg` or equivalent.
3. Read the smallest located section that establishes authority, scope, status, owner rules, or validation.
4. Load task-specific owner docs only for affected surfaces.
5. Do not fully load the Master Task Register, Document Catalog, Markdown Manifest, broad audits, inventories, or status boards by default.
6. Avoid broad repository searches after the needed reference set is known.

Every work order must name the minimum authority and owner-document set needed for the task. Detailed implementation reasoning, exact files, checks, stop conditions, and closeout requirements belong in the repository-owned work order. An external dispatch prompt should be a minimal pointer to that work order. Chat discussion and approval become durable implementation authority only after promotion into the repository authority chain.

Prefer directly executable, verifiable search and file-inspection operations for targeted reads. A surface-dependent selector, menu, or suggested command is not read evidence unless the active environment actually executes it and the result is verifiable under Section 20.

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
5. Reasoning posture and concise phase expectations
6. Execution posture and exact operator/surface handoffs when applicable
7. Objective
8. Authorization and required precheck
9. Required authority/owner documents
10. Operator-approved Owner Routing Matrix
11. Required work
12. Allowed scope and target files
13. Reference-only inputs
14. Forbidden scope and protected systems
15. Additive/destructive posture and version rule
16. Validation tier and exact checks
17. Git/branch/commit/draft-PR requirements
18. Required closeout and RSI report
19. Stop conditions and exit criteria

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

REASONING POSTURE: [STANDARD | ADAPTIVE | ELEVATED]
[For ADAPTIVE, identify concise phase-level expectations without duplicating Section 14.]

EXECUTION POSTURE: [DIRECT | MIXED | OPERATOR-MEDIATED]
[Default DIRECT. For MIXED or OPERATOR-MEDIATED, identify each exact operator/surface handoff and why direct execution is unavailable or inappropriate.]

OBJECTIVE
[One bounded outcome.]

PRECHECK / GOVERNING INPUTS
[Repository convergence; predecessor deployment verification only when materially applicable; existing branch/PR, authority, owner-doc, and protected-scope checks.]

OWNER ROUTING MATRIX
[Approved concept | canonical owner | exact file | section/behavior | action | reason | alternate-owner exclusion | conflict | confidence.]
[Use one compact row for a small single-owner task; use a detailed matrix for cross-cutting or higher-risk work.]

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

Do not hard-code a model name in durable work orders. Use the best currently approved full-capability Codex model available for the risk and complexity. Prefer capability requirements over product names so guidance does not stale quickly. If the selected surface cannot meet the task’s safety or tool needs, stop or move the task to a suitable surface.

### 14.1 Adaptive reasoning doctrine

Work orders may declare:

- `REASONING POSTURE: STANDARD` for a task that does not materially benefit from phase changes;
- `REASONING POSTURE: ADAPTIVE` when different execution phases benefit from different effort; or
- `REASONING POSTURE: ELEVATED` when protected-system or ambiguity-heavy work justifiably begins elevated.

For `ADAPTIVE`, use the lowest posture sufficient for the current phase:

- **LOW / lower effort:** deterministic or mechanical work such as repository status and branch inspection, exact file-existence checks, targeted search after targets are known, deterministic edits with settled requirements, formatting, allowlist checks, `git diff --check`, syntax/lint/build execution, repetitive validation, and commit/push/PR evidence collection.
- **STANDARD / medium effort:** bounded authority interpretation, ordinary owner-rule reconciliation, normal implementation decisions, cross-file dependency interpretation, and translation of approved specifications into implementation.
- **ELEVATED / high effort:** only when materially useful for ambiguous architecture, conflicting authority, protected-system implications, authentication/authorization/security behavior, semantic-state derivation, destructive-versus-additive decisions, unexpected root-cause debugging, runtime failure analysis, or significant implementation tradeoffs.

After the complex condition is resolved, de-escalate before returning to mechanical execution and closeout.

Do not elevate merely because a command returns a normal no-match result, a command fails once, output is long, validation is repetitive, or the task contains many mechanical steps. Elevate only when judgment, interpretation, reconciliation, or root-cause analysis could change the outcome.

### 14.2 Reasoning and context separation

Reasoning effort and context breadth are independent. Elevated reasoning does not authorize full MTR reads, broad repository searches, historical-document loading, unrelated owner-document loading, or prior-prototype loading. `READ MODE: TARGETED` remains the default. A full read still requires one of the explicit Section 6 conditions.

### 14.3 Surface capability and phase reporting

Do not assume every Codex surface or version can programmatically change its own reasoning effort. When the active environment supports mid-session adjustment, use it at the governed phase boundary. When it does not, report a concise phase transition such as `REASONING CHANGE: MEDIUM -> HIGH` or `REASONING CHANGE: HIGH -> LOW`, and do not pretend the underlying effort changed.

Do not hard-code product or interface keyboard shortcuts into durable governance; they are implementation details that may change.

For an adaptive work order, identify phase expectations compactly. For example:

```text
READ MODE: TARGETED
REASONING POSTURE: ADAPTIVE
- LOW: repository precheck, deterministic edits, validation/closeout
- MEDIUM: authority interpretation and normal implementation
- HIGH: only unresolved architecture/protected-system/root-cause issues
- return LOW/MEDIUM after resolution
```

Do not require every work order to repeat this doctrine. Stable policy stays here; work orders reference it compactly.

### 14.4 Reasoning and execution separation

Reasoning posture and execution posture are independent controls. Reasoning posture governs depth of interpretation; execution posture governs how actions are performed. Examples include LOW reasoning with DIRECT execution for mechanical Git validation, MEDIUM reasoning with DIRECT execution for normal implementation, HIGH reasoning with DIRECT execution for difficult debugging, and MEDIUM reasoning with MIXED execution when an operator must use a client selector. Do not equate interactive commands with higher reasoning.

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

- Precheck repository convergence first: confirm the repository is on `main`, the working tree is clean, and local `HEAD` equals `origin/main`. When all three conditions pass, repository convergence is satisfied and the previous task lifecycle is operationally closed unless historical or deployment evidence materially affects the current bounded task. If convergence fails, stop immediately and report the exact divergence before further task discovery or implementation.
- If the immediately preceding merged task had a deployment that materially affects the current bounded task, verify before mutation that the deployment completed successfully, preferring existing GitHub check evidence. If the relevant check is pending, wait and do not mutate; if it failed, stop and report the failure. If deployment is irrelevant, do not reconstruct or revalidate deployment history. This conditional verification does not require Cloudflare API access or credentials and is not a universal deployment gate for docs-only or unrelated tasks.
- Create one fresh branch from `origin/main`; one task per branch and PR.
- Stage only authorized files and use the task-specified commit message.
- Push the task branch and open a draft PR to `main` with scope, rationale, validation, build decision, protected-system posture, and risks.
- Prefer directly executable and verifiable Git or GitHub CLI operations under Section 20. When delivery requires an operator-interactive surface, declare the exact handoff and do not report the operation as executed until verified.
- Never merge, enable auto-merge, mark ready, approve deployment, or push directly to `main` unless explicitly authorized by the operator and higher governance.
- The operator performs manual review and merge. Post-merge sync and deployment are separate facts/actions.

## 18. Closeout output

Report, as applicable:

- version; repository; branch; commit SHA; draft PR URL/base;
- controlling context, task/category/workstreams, read mode, reasoning posture, and execution posture;
- files created, changed, and intentionally untouched;
- concise result and rules consolidated/superseded;
- validation commands/results and build decision;
- protected-system and scope confirmations;
- no-merge confirmation;
- assumptions, unresolved conflicts/risks, and follow-up tasks without activating them;
- command outcomes and any operator/surface handoffs material to completion;
- Token Utilization / RSI Report.

The read/context portion of closeout must identify essential reads, unnecessary or redundant reads, every full/broad-read justification, retries and failures, context pressure, and a shorter next-run dispatch pattern.

### 18.1 Optional post-run full-session evidence review

The normal closeout summary remains required. When the active surface supports and makes available a full-session export capability, the operator may export the completed Codex conversation after the run and provide both the normal closeout summary and the exported full conversation/transcript to ChatGPT for post-run evidence review.

ChatGPT may compare the bounded work order, exported transcript, closeout summary, PR/diff, and validation evidence to identify candidate durable findings such as missed RSI findings, command/tool failures, unnecessary or overly broad reads, reasoning-posture drift, execution-posture drift, governance gaps, reusable process improvements, unresolved risks, candidate business-process improvements, and prompt/work-order improvements.

The raw transcript is execution evidence only. It is not repository authority or implementation authority, is not committed to Git by default, and does not replace the required closeout summary. Durable findings must be promoted into the correct owner document and bounded task before becoming authority. Do not require permanent transcript retention unless a separately governed evidence-retention rule authorizes it.

Refer to the available full-session export capability generically; do not make any specific client or slash command durable governance because surface commands may change.

## 19. Token Utilization / Recursive Self Improvement Report

Use one canonical report. When exact metrics are visible, report total, input, output, cached-input, reasoning/compute tokens, model, and reasoning level. Otherwise state:

```text
Exact token metrics not visible in Codex.
```

Then report observable proxies:

- files read and which were essential;
- full/broad reads and their justification;
- files modified;
- tool/terminal and validation commands;
- execution posture, unavailable commands, approved equivalents, and operator handoffs;
- retries and failed commands;
- redundant/unnecessary reads;
- elapsed time when visible;
- context pressure: low, medium, or high;
- prompt compression lesson;
- chat-derived context promoted into repository docs;
- recommended shorter prompt pattern.

When reasoning posture transitions were observable and material, also report:

- the initial reasoning posture;
- material escalations and de-escalations and why they were required;
- whether adjustment was automatic or operator-mediated;
- whether higher reasoning caused unnecessary context expansion; and
- any future reasoning-efficiency optimization.

Do not force detailed transition reporting when no meaningful transition occurred.

Do not create a durable token log unless explicitly authorized.

Every applicable closeout must end with these RSI headings:

1. Repository improvements
2. Governance improvements
3. Context optimization
4. Token optimization
5. Execution efficiency
6. Promotion candidates
7. Future prevention
8. Risks observed
9. Operator experience
10. Confidence (`HIGH`, `MEDIUM`, or `LOW`, with a reason)

RSI may recommend candidate improvements, but it may not amend governance, activate work, or expand task scope without operator approval and durable authorization.

## 20. Desktop-app and CLI parity

The same authority, task, read-mode, retry, file-scope, validation, Git/PR, protected-system, Sites, and closeout rules apply in both surfaces. Surface-specific tools do not change authority. When a Windows path, command runner, or app control differs, use the safest equivalent while preserving evidence and boundaries.

### 20.1 Execution-posture field

Every work order must declare one of:

- `EXECUTION POSTURE: DIRECT` — the task should complete using executable tools and commands only; this is the default unless task requirements prove otherwise.
- `EXECUTION POSTURE: MIXED` — the task primarily uses executable operations but includes specifically identified operator or surface handoffs.
- `EXECUTION POSTURE: OPERATOR-MEDIATED` — material steps require operator interaction and must be explicitly identified.

For `MIXED` or `OPERATOR-MEDIATED`, name each exact handoff point and explain why direct execution is unavailable or inappropriate. Keep the controls distinct: `READ MODE` governs context breadth, `REASONING POSTURE` governs reasoning depth, and `EXECUTION POSTURE` governs how actions are performed.

### 20.2 Directly executable and preferred operations

When task-authorized and available, normal work-order primitives include shell/terminal and Git commands; `rg`, `grep`, and other targeted-search tools; PowerShell, Bash, Node, npm/package, and task-authorized Python commands or scripts; repository-owned scripts; authenticated GitHub CLI operations; authorized MCP/tool/API calls; explicitly required browser/application automation; and build, test, lint, typecheck, validation, export, or repository-owned checks.

Illustrative operations include `git status --short --branch`, `git branch --show-current`, `git fetch origin`, `git pull --ff-only`, `git diff --check`, `git diff --name-only`, `git diff --stat`, `git rev-parse HEAD`, `git rev-parse origin/main`, `git worktree list`, `rg`, `Get-Content`, `Test-Path`, `npm run build`, `npm test`, `npm run lint`, `node`, PowerShell, Bash, and authenticated/authorized `gh pr create`, `gh pr view`, `gh pr checks`, or `gh pr diff` operations. These examples are representative, not a complete inventory or unrestricted authorization list.

Every actual operation remains constrained by the active task, file allowlist, protected-system boundaries, destructive-action rules, repository state, tool availability, and operator authority.

### 20.3 Surface-dependent and operator-interactive operations

A command or capability available only in a particular Codex client, CLI version, desktop app, terminal surface, plugin, MCP, or environment is `SURFACE-DEPENDENT / CONDITIONAL`. Use it only when the active surface actually exposes it programmatically, the task permits it, execution is verifiable, and it does not require an undeclared operator selection.

Slash commands or controls that open selectors, menus, configuration panels, dialogs, or other operator-choice surfaces are `OPERATOR-INTERACTIVE / UI`. Representative examples include model, permissions, theme, keymap, or plugin selectors. Reference such a control only as an operator instruction, capability check, or clearly declared handoff. Do not assume it is autonomous or depend on it for normal deterministic completion when an executable equivalent exists.

Do not make the complete current slash-command inventory durable governance; client commands may change. A command's appearance in a menu or slash-command list is not evidence that Codex executed it.

### 20.4 Session-control commands

Commands affecting session state, conversation structure, context, worktrees, background terminals, or agent surfaces are separate from repository execution. Representative controls may compact or recap context, fork or change a conversation surface, manage worktrees or processes, stop activity, or display status, usage, and warnings. They may assist operations but do not create implementation authority, expand task scope, or modify protected-system permissions.

### 20.5 Preference and truthfulness rules

Future work orders should prefer, in order:

1. deterministic executable CLI/tool operation;
2. repository-owned script;
3. authenticated authorized tool/MCP/API action;
4. verified surface-dependent direct command;
5. operator-interactive UI handoff only when no appropriate autonomous mechanism exists.

Do not substitute an interactive UI command for a deterministic executable operation merely because the UI command is available.

Command reporting must distinguish `requested`, `available`, `executed`, `succeeded`, `failed`, `skipped`, and `required operator interaction`. Do not report execution when only a phase marker, textual intention, menu opening, or suggested slash command occurred.

### 20.6 Executable-command fallback

If a planned executable operation is unavailable:

1. verify the limitation once;
2. use an approved equivalent tool when it preserves scope and evidence;
3. use an operator handoff only when necessary;
4. stop when no safe equivalent exists.

Do not silently replace deterministic commands with destructive operations, broad automation, or UI actions.

## 21. Failure handling

For command-runner, sandbox, patch-helper, whitespace, or tool-startup faults:

1. capture the exact non-secret failure;
2. retry the same operation at most once when safe;
3. reduce to a smaller targeted command or patch;
4. use an approved equivalent tool when it does not expand scope;
5. re-check status/diff after partial operations;
6. stop if file integrity, authorization, secret safety, or validation cannot be established.

Apply the Section 20 executable-command fallback and truthfulness rules. Do not use repeated broad reads, repeated blind patches, destructive Git recovery, broad automation, undeclared UI substitution, or secret-revealing diagnostics. Separate unavailable capabilities, operator-interactive requirements, tooling faults, and repository defects in closeout.

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
