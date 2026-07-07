# Codex Run Contract  REV01

Status: Active Codex governance contract  
Customer-facing: No  
Implementation authority: No  
Applies to: All future Codex tasks unless superseded by higher-authority governance  
Task ID: CODEX-CONTRACT001

## 1. Purpose
This contract defines the always-on Codex execution rules for this repository so future prompts can reference one stable governance document before stating task-specific scope.

This document is documentation/governance only. It does not authorize runtime, UI, route, form, CRM, payment, scheduling, QRLanding, Lead Signal, requestId, email, Cloudflare, or quote-flow changes.

## 2. Authority Chain
Codex must follow the authority chain defined by repository governance:

1. `/docs/system/project.md`
2. `/docs/system/guardrails.md`
3. `/docs/system/agent.md`
4. `/docs/system/plan.md`
5. `/docs/system/step-current.md`
6. `/docs/system/master-task-register.md`
7. The active bounded task definition or explicit bounded prompt task
8. Locked specs, runtime contracts, and CRM contracts
9. Historical Step documents as lineage/reference only
10. Project-source artifacts and visual references
11. Chat-derived context only after promotion into repository docs

If any lower-authority instruction conflicts with higher-authority governance, the higher-authority source controls.

## 3. Required Documents To Load For Every Codex Task
Every Codex task must load and follow these documents before implementation or documentation changes unless a newer higher-authority governance update explicitly permits targeted reads for the task type.

The default remains full-file loading of this required set. Targeted reads of large required documents are allowed only after OPS009 is merged and only under `/docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md` conditions. If targeted search fails, task authority is ambiguous, or protected-system scope is implicated, Codex must fall back to the full required read or stop and request clarification.

- `/AGENTS.md`
- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`
- `/docs/DOCUMENT_CATALOG.md`
- `/docs/MARKDOWN_MANIFEST.md`
- `/docs/system/document_status_reconciliation_rev01.md`
- `/docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `/docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`

If any required document is unavailable, Codex must stop and request a governance/context revision.

## 4. Task-Specific Documents
Individual prompts must add only the specific runtime, specification, audit, catalog, brand, CRM, payment, scheduling, QA, or implementation-review documents relevant to the task.

Task-specific review documents do not expand scope by themselves. They provide context and constraints for the explicitly named task.

## 4A. Required Model and Reasoning Guidance
Every future Codex work order must include this block:

```text
Recommended Codex model:
- Model:
- Reasoning:
- Why:
```

Default guidance:

- Model: GPT-5.5
- Reasoning: Medium
- Why: Standard bounded repo task with governance constraints.

Use Reasoning: High for:

- runtime bugs
- route failures
- protected systems
- architecture conflicts
- large refactors
- payment/scheduling/API work

Use Reasoning: Medium for:

- docs
- governance
- small route/link changes
- search planning
- CSS/token cleanup
- bounded component edits

Do not use Mini for WNYHS repo work.

## 4B. Required Workstream Context Routing

Before ChatGPT creates a Codex work order, and before Codex edits files, the task must be classified under `/docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`. When current-state workstream context is needed, ChatGPT/Codex must then check `/docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md` before loading deeper owner documents.

Required routing output:

- primary workstream
- related workstreams
- required current-state/status docs
- required owner/governing docs
- protected systems
- forbidden scope

OPS004 does not authorize implementation by itself. It tells ChatGPT/Codex where to look before applying this run contract, active task scope, owner standards, protected-system rules, and validation requirements.

OPS005 does not authorize implementation by itself. It records current workstream status, completed work, outstanding work, governing docs, related workstreams, and protected-system concerns after OPS004 classification.

## 5. Master Task Register Rules
- Codex may execute only the task explicitly named in the current prompt.
- ACTIVE status is authorization, not permission to bundle.
- If the requested task conflicts with the controlling context or register rules, Codex must stop and request revision.
- Prompt-created bounded tasks are allowed only when higher governance permits them.
- If a prompt-created bounded task is permitted by higher governance and the prompt explicitly authorizes adding a missing task record, Codex may add a bounded record for that task only instead of stopping solely because the task is missing.
- DONE status requires required validation plus exit-criteria satisfaction.

## 6. Current Context Rules
`/docs/system/step-current.md` defines the single current operational context.

Codex must treat historical Step documents as lineage/reference unless `step-current.md` explicitly promotes one as the current controller.

If the requested work is outside the current operational context, Codex must stop and request a context or task-register revision.

## 7. Allowed Scope Discipline
Codex must keep work bounded to:

- the task ID named in the current prompt
- the allowed files named in the prompt or active task record
- the allowed scope named in the prompt or active task record
- additive and surgical changes unless destructive authorization is explicit
- required documentation/index/register updates for the task
- validation commands needed to prove scope compliance

Codex must not silently expand a task into adjacent active tasks, backlog tasks, implementation ideas, cleanup work, or inferred follow-up work.

## 8. Forbidden Scope Defaults
Unless specifically authorized, Codex must not:

- modify runtime code
- modify UI components
- modify routes
- modify form components
- modify HubSpot code, schema, or workflows
- modify Stripe code, webhooks, or payment verification
- modify scheduling code or calendar writes
- modify lead-signal implementation
- modify QRLanding implementation
- add new features
- delete documents
- rename documents
- consolidate documents
- expose secrets
- hardcode colors outside semantic tokens
- create public claims not approved by guardrails

## 9. Protected Systems
The following systems are protected by default:

- HubSpot
- Stripe
- Scheduling / Google Calendar
- Lead Signal
- requestId
- QRLanding attribution
- Resend/email runtime
- Cloudflare runtime/environment
- Quote/payment flow
- Public claim/copy surfaces

Protected systems may be changed only through explicit bounded authorization and required review of the controlling runtime/spec documents.

## 10. File Change Rules
Codex must modify only files allowed by the current task.

For every task, Codex must confirm:

- files created
- files changed
- files intentionally untouched
- no forbidden file areas changed
- no unexpected deletes
- no unexpected renames
- no unrelated formatting churn

If unexpected changes appear, Codex must separate pre-existing work from task changes and avoid reverting user work unless explicitly instructed.

## 11. Documentation Update Rules
Documentation updates must preserve the existing document hierarchy.

Codex must not delete, rename, consolidate, or rewrite historical documents unless the active task explicitly authorizes that destructive action.

When a new governance, runtime, spec, catalog, or Codex document is added, Codex must update the appropriate catalog, manifest, register, or index files required by the task.

## 12. Runtime Contract Rules
Runtime contracts control implementation boundaries.

Codex must review the relevant runtime contract before changing lead intake, requestId behavior, HubSpot sync, QRLanding attribution, scheduling, Stripe, Resend/email behavior, Cloudflare runtime behavior, quote flow, payment flow, or deployment validation behavior.

Runtime contracts do not authorize implementation unless the active bounded task also authorizes it.

## 13. HubSpot Rules
HubSpot REV03 is locked and authoritative.

All CRM writes must go through `/api/lead-signal`. Codex must not create direct frontend/client HubSpot write paths, change HubSpot schema, alter pipeline/stage definitions, add properties, or change workflow behavior without explicit bounded authorization.

If a task touches CRM behavior, Codex must verify against REV03 and the HubSpot runtime contracts before making changes. If unclear, stop and request revision.

## 14. Stripe Rules
Stripe verification must remain server-side.

Payment success must be verified by webhook-backed/server-side authority. Codex must not trust redirect URLs as payment confirmation, expose Stripe secrets, change checkout/session semantics, alter deposit calculation, or modify webhook verification without explicit bounded authorization.

## 15. Scheduling Rules
Scheduling remains protected.

Codex must preserve the current request, owner/operator review, confirmation, and calendar-event ownership model unless an active bounded task explicitly authorizes scheduling changes.

Codex must not introduce direct customer-authoritative booking, calendar writes, or scheduling authority rewrites without explicit bounded authorization and relevant scheduling contract review.

## 16. QR / Attribution Rules
QRLanding attribution is protected.

Codex must not change QRLanding implementation, source parsing, campaign attribution, QR destination behavior, named source behavior, or attribution payload behavior unless an active bounded task explicitly authorizes that work.

QR, referral, and source-attribution ideas must remain documentation-only until implementation is separately approved.

## 17. Lead Signal / requestId Rules
`/api/lead-signal` is the protected Lead Signal write boundary.

Codex must not change lead-signal transport, payload semantics, server requestId generation, requestId propagation, dedupe behavior, or CRM/email side effects without explicit bounded authorization and review of relevant runtime contracts.

Client-created session identifiers must not be treated as replacements for server requestId.

## 18. Form / UI / Route Rules
Forms, UI components, and routes are protected by default.

Codex must not modify form submit logic, shared form components, route files, funnel order, CTA routing, QRLanding implementation, Quote Review, Agreement Review, Payment, Payment Success/Cancel, Schedule, or Precision Planner behavior unless the active task explicitly authorizes that scope.

## 19. Copy / Claims Rules
Public copy must remain within approved guardrails.

Codex must not create unsupported life-safety, emergency-response, prevention, service-authority, price, package, or capability claims. New public claim language requires task-specific authority and review against guardrails and relevant funnel/spec documents.

Internal documents may describe restrictions, but they must not authorize unapproved public-facing claims.

## 20. Semantic Token / Styling Rules
Codex must not hardcode colors or design primitives outside the semantic token system when changing UI or styles.

Styling changes require explicit bounded authorization and review of active brand, layout, visual, and public-funnel standards relevant to the task.

## 21. Secrets / Environment Variable Rules
Codex must never expose secrets, API keys, tokens, webhook secrets, private URLs, or environment variable values.

Environment variable names may be documented when already established in repository contracts, but values must remain private.

Cloudflare, Resend, Stripe, HubSpot, Google Calendar, and related runtime secrets must stay server-side or platform-side as defined by their runtime contracts.

## 22. Build / Validation Rules
Codex must run the validation required by the task.

Default validation includes:

- `git status`
- task-specific `git diff`
- `git diff --name-only`
- `git ls-files --deleted`
- targeted `rg` checks for the changed contract/index/register content
- `npm run build` unless the task or higher governance explicitly permits a docs-only skip

Known pre-existing failures must be separated from task regressions.

If required validation cannot be run, Codex must report the reason and the residual risk.

## 23. Git / PR Rules
Codex must create a new branch for repository changes and open a PR when required by root governance.

Codex must not merge its own PR.

Commits and PR descriptions must accurately state scope, validation, protected-system impact, and any known pre-existing failures.

## 24. Output Summary Requirements
Every Codex task must return:

1. New version number, if applicable
2. Files created
3. Files changed
4. Scope confirmation
5. Protected systems confirmation
6. Validation commands run
7. Build/test result
8. Known pre-existing failures separated from task regressions
9. Self-check
10. Token Utilization / RSI Report

The Token Utilization / RSI Report is required for every Codex task unless higher-authority governance supersedes this requirement. Codex must report exact token metrics when visible:

- total tokens
- input tokens
- output tokens
- cached input tokens
- reasoning tokens / compute usage
- model used
- reasoning level used

If exact token metrics are not visible, Codex must state:

```text
Exact token metrics not visible in Codex.
```

Codex must then report observable proxy metrics, including model turns, files read, files modified, terminal/tool commands run, validation commands run, failed/retried commands, broad searches performed, large docs loaded, redundant reads, elapsed runtime if visible, context pressure, and recommended next-prompt compression.

The report must also preserve RSI / Context Efficiency categories: essential docs loaded, unnecessary or redundant docs loaded, targeted-read opportunities, prompt-shortening recommendations, chat-derived context promoted into repository docs, and recommended next prompt pattern.

Do not store every token count in the repository unless a bounded task explicitly requests a durable audit record.

ChatGPT must evaluate every Codex summary for:

1. Scope compliance
2. Validation evidence
3. Protected-system compliance
4. Context Efficiency Report
5. Prompt improvement lesson
6. Whether governance should be updated

Future visual task summaries must also report semantic-token adoption quality and theme-readiness when visual or CSS/token surfaces are touched.

## 25. Stop Conditions
Codex must stop and request revision when any of these conditions apply:

- missing controlling task/context
- scope conflict
- required documents unavailable
- protected-system conflict
- destructive change request without destructive authorization
- Stripe/server-side verification conflict
- HubSpot direct-write/schema conflict
- scheduling direct-booking conflict
- unsupported public claim
- secret exposure risk
- inability to validate required changed files

No silent deviation is allowed.

## 26. Future Prompt Pattern
Future prompts can use this compact pattern:

```text
SYSTEM CONTEXT:
Load and follow /docs/codex/CODEX_RUN_CONTRACT.md.

Recommended Codex model:
- Model:
- Reasoning:
- Why:

TASK ID:
...

CONTEXT EFFICIENCY INSTRUCTION:
Use targeted reads after confirming governing authority.
Prefer rg/search for task-specific sections.
Do not read full large docs unless needed.
Report any redundant context loads.
Report a shorter future prompt pattern when useful.

TASK-SPECIFIC REVIEW DOCS:
...

ALLOWED FILES:
...

FORBIDDEN FILES:
...

OBJECTIVE:
...

VALIDATION:
...

EXPECTED OUTPUT:
...
```
