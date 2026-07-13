# T-GOVAUTH001 Work Order — Complete WNYHS Governance Authority Audit — REV01

Status: Ready for execution under active task `T-GOVAUTH001`
Customer-facing: No
Task type: Docs-only governance authority audit
Implementation authority: Limited to this work order and the active Master Task Register task
Repository: `buffalonychris/wnyhomesecurity`

---

## Recommended Codex Model

- Model: GPT-5.6 Sol
- Reasoning: Medium
- Why: Broad repository governance audit with structured synthesis; no implementation work.

## Context Efficiency Instruction

- Confirm authority first.
- Use targeted `rg`, `Select-String`, bounded line reads, manifests, and exact-path reads.
- Do not repeatedly load the full Master Task Register or other very large files.
- Broad repository scans are allowed only where this audit requires them.
- Treat truncated output as a display artifact, not proof a file is empty or missing.
- Stop or narrow any command that hangs or runs excessively long.
- Report redundant reads and a shorter future prompt pattern at closeout.

## Token Utilization / RSI Report — Required

At closeout, report exact token metrics when visible:

- total tokens
- input tokens
- output tokens
- cached input tokens
- reasoning tokens / compute usage
- model used
- reasoning level used

If exact metrics are not visible, state:

`Exact token metrics not visible in Codex.`

Then report observable proxy metrics:

- number of model turns
- files read
- files modified
- terminal/tool commands run
- validation commands run
- failed/retried commands
- broad searches performed
- large docs loaded
- redundant reads
- elapsed runtime if visible
- context pressure: low / medium / high
- recommended next-prompt compression
- essential docs loaded
- unnecessary/redundant docs loaded
- targeted-read opportunities
- chat-derived context promoted into repo docs
- recommended next prompt pattern

## System Context

- Local repo: `C:\dev\wnyhomesecurity`
- Repository identity: `buffalonychris/wnyhomesecurity`
- ChatGPT is the execution dispatcher.
- Codex is the bounded implementation technician.
- The Master Task Register is the dispatch board.
- Repository docs are the durable source of truth.
- Project KB is a small ChatGPT behavior/control layer only.
- Chat-derived context is not executable authority until promoted.
- One bounded task per branch and PR unless explicitly authorized.
- The operator reviews and merges PRs manually.
- Do not merge.

## Authority Order

Load and enforce the current repository authority chain in this order unless a higher-authority document explicitly states otherwise:

1. `/docs/system/project.md`
2. `/docs/system/guardrails.md`
3. `/docs/system/agent.md`
4. `/docs/system/plan.md`
5. `/docs/system/step-current.md`
6. `/docs/system/master-task-register.md`
7. Active task `T-GOVAUTH001`
8. This work order
9. Active owner standards, runtime contracts, and implementation specifications
10. Historical Step docs, archived docs, and audit lineage as reference only
11. ChatGPT Project KB summaries
12. Chat-derived context only after promotion

If two same-level authority sources conflict, stop and report the conflict. Do not silently reconcile it.

## Task ID

`T-GOVAUTH001`

## Task Type

Docs-only governance authority audit.

## Objective

Create one durable, repository-grounded audit of every governance authority, operational rule, execution rule, owner document, source-of-truth relationship, Codex instruction, prompt rule, skill, plugin, workflow, local configuration source, deployment rule, and business-rule owner controlling any WNY Home Security work.

The audit must establish what ChatGPT and Codex are expected to operate under for all WNYHS-related planning, documentation, implementation, marketing, website work, Home Assistant work, customer deployments, hardware selection, solution creation, estimates, quotes, SOWs, CRM, payments, scheduling, notifications, deployment, validation, support, PR review, merge, and closeout.

The result must allow the operator to answer:

- Which document controls this decision?
- What instruction source is influencing ChatGPT or Codex?
- Which owner document controls this domain?
- Which source is subordinate, historical, proposed, superseded, or reference-only?
- What rules govern prompts and work orders?
- What rules govern branches, commits, PRs, merge, deployment, and closeout?
- What skills, plugins, automatic workflows, local configs, or hidden execution layers are active?
- Which governance conflicts exist?
- Which domains have no clear owner?
- What must be loaded before future WNYHS tasks are dispatched?

## Required Precheck

Before editing:

1. Confirm repo path and repository identity.
2. Confirm current branch and working-tree state.
3. Confirm local `main` is synchronized with `origin/main`.
4. Confirm prior PR #514 is merged.
5. Confirm `T-GOVAUTH001` exists exactly once and is `ACTIVE`.
6. Confirm no equivalent audit branch or open PR already exists.
7. Read root `AGENTS.md` and the primary authority chain before lower-authority docs.
8. Use a targeted task lookup; do not load the full Master Task Register unless needed.
9. Stop without editing if:
   - `T-GOVAUTH001` is not `ACTIVE`
   - local `main` is stale
   - an equivalent open PR exists
   - higher-authority governance conflicts with this work order
   - unrelated tracked changes could contaminate the branch

Do not inspect, modify, move, delete, stage, or commit unrelated untracked files.

## Required Docs To Load

Read these first, using targeted sections where practical:

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- current OPS001 operator workflow standard
- `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`
- `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`
- `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`
- `docs/codex/CODEX_RUN_CONTRACT.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`

Follow references from these docs to current owner documents.

## Required Audit Domains

Audit and map all owner documents and rules for:

### Core governance and execution

- project authority
- current operational context
- Project KB versus repo authority
- chat-derived context promotion
- Codex prompt construction
- Codex work-order construction
- task creation, status, activation, blocking, dispatch, closeout
- one-task/one-branch/one-PR rules
- branch, commit, push, PR, draft/ready, review, merge, and conflict rules
- version-bump rules
- deployment validation and local-main synchronization

### Website, marketing, solutions, and claims

- website architecture, route ownership, navigation, search, SEO
- public marketing and public-solution eligibility
- claims and forbidden claims
- monitoring, dispatch, emergency, police, medical, and guarantee language
- solution catalog
- offering tiers, Vault, pilot, premium/custom, research visibility

### Hardware, BOM, procurement, and installed assets

- hardware approval/status
- package design
- BOM rules
- procurement, inventory, substitutions, installed assets
- property discovery and customer requirements

### Estimate, quote, SOW, and agreement

- estimates
- quotes
- pricing
- SOWs and agreements
- exclusions
- change orders

### Home Assistant and customer systems

- HA platform architecture
- WNYHS Core
- Golden Build
- HA Green bootstrap
- HACS and integrations
- automations, scenes, scripts
- physical controls and manual override
- automation lifecycle
- dashboards: customer, installer, operator/service
- notifications, recipients, quiet hours, alert routing, escalation

### Security, safety, aging in place, and property management

- home security
- cameras, NVR, recording, retention, audio, privacy
- entry, access, locks, garage
- aging in place and non-medical boundaries
- home safety and environmental monitoring
- leak, freeze, sump, air quality, temperature, humidity, power, equipment monitoring
- exterior lighting, irrigation, pool/hot tub, detached structures
- structured cabling, networking, PoE, backup power, resilience

### Installer and support

- installer workflow
- bench build
- commissioning
- testing and acceptance
- customer handoff
- service and support

### Protected systems and runtime

- HubSpot properties, pipelines, workflows, data ownership
- Stripe deposits and server-side verification
- scheduling and Google Calendar
- Resend/email
- lead intake and request IDs
- runtime contracts
- customer data, credentials, secrets, privacy
- local-first operation and customer ownership

### Documentation lifecycle

- revisioning
- supersession
- lineage
- manifests
- runtime truth versus documentation truth
- historical Step docs versus current context

### Additional domains

Include any other WNYHS governance domain discovered during the audit.

## Skills, Plugins, Workflows, and Instruction Sources — Mandatory

Audit all discoverable instruction and capability sources that may influence ChatGPT or Codex behavior for WNYHS.

### Repository instruction sources

Inspect and classify:

- root and nested `AGENTS.md`
- `.codex` directories
- project Codex configs
- work-order folders
- prompt templates
- workflow scripts
- GitHub workflow files
- local automation scripts
- repository policy files

### Local Codex configuration

Inspect only metadata and non-secret settings from:

- `%USERPROFILE%\.codex`
- relevant OpenAI/Codex AppData paths
- project-level Codex configuration
- skill manifests
- plugin manifests
- cached workflow definitions
- model, reasoning, permission, approval, and sandbox settings
- MCP or connector configuration
- any discoverable auto-loaded instruction source

Do not print or copy secret values.

### Skills

Inventory:

- user-created skills
- repository-provided skills
- workspace-provided skills
- bundled/internal skills
- GitHub publishing workflow skills
- automatic task-type workflows
- exact names or identifiers shown in logs
- exact local path or origin when visible
- invocation method
- whether auto-invoked
- whether operator-visible
- whether usage-dashboard-visible
- whether disableable
- governance impact

### Plugins, connectors, and MCP

Inventory:

- installed/enabled plugins
- workspace-provided plugins
- GitHub integration
- Cloudflare integration if present
- automatic connector use
- MCP servers
- repository-access connectors
- permission and credential boundaries

### ChatGPT project layer

Codex cannot inspect hidden ChatGPT project instructions directly.

Create a clearly marked section:

`CHATGPT PROJECT-LAYER RECONCILIATION REQUIRED`

List the repo facts that later must be compared against:

- WNYHS Project instructions
- WNYHS Project KB
- KAOS control documents
- ChatGPT Skills
- ChatGPT plugins
- user profile instructions
- workspace instructions
- conversation-derived assumptions
- enforcement-mode instructions

Do not speculate about hidden content.

## Required Classification

Classify every relevant source as one of:

- Primary authority
- Active owner standard
- Active runtime contract
- Active implementation specification
- Active operational checklist
- Active status board
- Task-specific authority
- Repository execution instruction
- Local Codex configuration
- User-created skill
- Repository-provided skill
- Workspace-provided skill
- Bundled/internal skill
- Plugin or connector
- Automatic workflow
- Proposed / not yet promoted
- Historical / lineage only
- Superseded
- Duplicate / conflicting
- Reference evidence only
- Generated inventory / manifest
- Unknown / operator decision required

## Required Work

1. Create one audit document:

   `docs/governance/GOVAUTH001_WNYHS_COMPLETE_GOVERNANCE_AUTHORITY_AUDIT_REV01.md`

2. Do not create parallel audit documents.
3. Do not alter owner standards during this audit.
4. Update `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md` only if required by repo rules.
5. Update `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md` only if its governance requires it.
6. Update only `T-GOVAUTH001` in the Master Task Register after completion and validation.
7. Record recommended remediation tasks without activating them.

## Required Report Sections

The audit document must contain:

1. Executive determination
2. Audit scope and limitations
3. Confirmed authority chain
4. Current operational context
5. ChatGPT operating authority
6. Codex operating authority
7. Repository instruction sources
8. Codex prompt rules
9. Codex work-order rules
10. Master Task Register rules
11. Branch, commit, PR, review, merge, deployment, and closeout rules
12. Versioning and deployment rules
13. Domain authority matrix
14. Website and public-marketing governance
15. Solution and offering governance
16. Hardware, BOM, procurement, inventory, and installed-asset governance
17. Home Assistant platform governance
18. Automation governance
19. Dashboard governance
20. Notification and alert-routing governance
21. Home-security governance
22. Camera, NVR, privacy, recording, and retention governance
23. Entry, access, locks, and garage governance
24. Aging-in-place and non-medical governance
25. Home-safety and environmental governance
26. Property-management governance
27. Networking, structured cabling, PoE, backup-power, and resilience governance
28. Installer, bench, commissioning, acceptance, handoff, and support governance
29. Property discovery, estimate, quote, SOW, agreement, and change-management governance
30. HubSpot governance
31. Stripe and payment governance
32. Scheduling, calendar, email, lead-intake, and runtime-contract governance
33. Customer data, privacy, secrets, customer ownership, and local-first governance
34. Documentation lifecycle, revision, supersession, and lineage rules
35. Skills inventory
36. Plugins and connectors inventory
37. Automatic workflow inventory
38. Local Codex configuration inventory
39. Instruction-source precedence map
40. Codex usage-dashboard visibility findings
41. ChatGPT project-layer reconciliation required
42. Conflict and duplicate-authority findings
43. Missing-owner findings
44. Stale, misleading, proposed, or superseded-document findings
45. Current practice versus documented governance findings
46. Required governance load set by task type
47. Recommended ChatGPT hydration set
48. Recommended Codex precheck set
49. Recommended prompt-template hierarchy
50. Recommended remediation tasks
51. Final governance confidence assessment
52. Audit evidence and validation summary

## Required Matrices

### Domain Authority Matrix

| Domain | Primary owner | Supporting docs | Authority type | Current status | Controls | Does not control | Conflict notes | Required task type |
|---|---|---|---|---|---|---|---|---|

### Instruction Source Matrix

| Instruction source | Exact path/origin | Owner | Type | Auto-loaded? | Operator-visible? | Usage-dashboard visible? | Precedence | Conflicts | Recommended treatment |
|---|---|---|---|---|---|---|---|---|---|

### Skill Inventory Matrix

| Skill/workflow name | Exact source/path | User-created? | Repo-provided? | Workspace-provided? | Bundled/internal? | Invocation method | Auto-invoked? | Can disable? | Usage reporting | Governance impact | Verification status |
|---|---|---|---|---|---|---|---|---|---|---|---|

## Codex Prompt Rule Audit

Explicitly identify:

- mandatory prompt sections
- model/reasoning requirements
- context-efficiency requirements
- Token Utilization / RSI requirements
- system-context and authority-order requirements
- task ID and task type requirements
- objective, precheck, and required-doc rules
- allowed/forbidden scope requirements
- version-bump requirements
- validation requirements
- protected-system confirmation
- task-status handling
- branch/commit/push/PR requirements
- merge restrictions
- one-task/one-PR rules
- work-order storage rules
- conflict-stop behavior
- missing-authority behavior
- completion-summary requirements
- ChatGPT review and merge-readiness rules
- deployment and local-main synchronization rules

## Conflict Analysis

For each conflict, record:

- higher-authority source
- lower-authority source
- exact conflicting rules
- operational risk
- observed practice
- recommended resolution
- whether a governance-reconciliation task is required

Do not resolve conflicts during this audit.

## Missing Owner Analysis

Identify where:

- no clear owner exists
- owner is incomplete
- task references a missing document
- several files claim authority
- active practice differs from documentation
- proposed docs are treated as active
- historical Step docs incorrectly influence current work
- skills or automatic workflows influence work without documented ownership
- plugins/local config affect behavior without governance
- usage reporting does not reflect actual automatic capability use

## Required Governance Load Sets

Define the minimum authority/owner-doc/precheck/validation load set for:

- rough idea review
- decision promotion
- docs-only governance task
- website implementation
- Home Assistant implementation
- automation implementation
- dashboard implementation
- hardware/BOM work
- solution/public-marketing work
- estimate/quote work
- SOW/agreement work
- HubSpot work
- Stripe/payment work
- scheduling work
- runtime-contract work
- Cloudflare/deployment work
- PR review
- production incident/hotfix
- governance audit/reconciliation

## Allowed Scope

- Read repo governance and documentation.
- Inspect non-secret local Codex configuration and discoverable skill/plugin/workflow metadata.
- Search local configuration paths required to identify instruction sources.
- Create the single audit document.
- Update required catalogs/manifests.
- Update only `T-GOVAUTH001` at closeout.
- Record future remediation tasks without activating them.
- Create branch, commit, push, and draft PR.
- Report unknowns honestly.

## Forbidden Scope

- No source code
- No website/UI/route/public-copy changes
- No solution-status or hardware-status changes
- No BOM, pricing, purchasing, inventory, or installed-asset changes
- No Home Assistant runtime, automation runtime, or dashboard implementation
- No HubSpot, Stripe, scheduling, Cloudflare, Resend, API, backend, or dependency changes
- No package-lock changes
- No environment-variable changes
- No secrets or credentials exposure
- No business-rule changes
- No governance reconciliation edits outside the audit report and required index/task closeout files
- No deletion, supersession, or promotion of proposed docs
- No task activation beyond `T-GOVAUTH001`
- No automatic remediation
- No merge

## Version Bump Rule

No public-site version bump. This is a docs-only audit.

## Security and Privacy Rules

When inspecting local config:

- Do not print secret values.
- Do not copy tokens, passwords, API keys, or credentials.
- Do not expose private credential-bearing URLs.
- Redact sensitive values.
- Report only paths, setting names, capability types, origins, and governance relevance.

## Validation

Run at minimum:

```powershell
git status --short
git branch --show-current
git diff --check
git diff --stat
git diff --name-only
rg -n "T-GOVAUTH001" docs/system/master-task-register.md
rg -n -i "authority|governance|owner|superseded|historical|proposed|runtime contract|work order|prompt|skill|plugin|workflow|MCP|Codex|ChatGPT" docs AGENTS.md
```

Also perform:

- duplicate authority search
- missing referenced-file checks
- nested `AGENTS.md` search
- `.codex` directory search
- local skill/config-path inventory
- plugin/MCP inventory
- task-ID uniqueness check
- conflict-marker check
- repository documentation validation if available

Run `npm run build` only if repository governance explicitly requires it for docs-only PRs. Otherwise state why it was not run.

Confirm:

- only permitted docs changed
- no source/runtime files changed
- no secrets were included
- no owner standards were modified
- no remediation was executed
- no proposed doc was promoted
- no hidden instruction source was treated as authoritative without evidence

## Event / Hook Readiness Notes

At closeout, map facts to existing event language where applicable:

- `TASK_STARTED`
- `TASK_COMPLETED_BY_CODEX`
- `CODEX_SUMMARY_RECEIVED`
- `PR_CREATED`

Do not implement or activate hooks.

## Protected Systems Confirmation

Explicitly confirm at closeout:

- HubSpot: Untouched
- Stripe/payment: Untouched
- Scheduling: Untouched
- Resend/email: Untouched
- APIs/runtime: Untouched
- Secrets/env: Untouched; no values exposed
- Dependencies/package-lock: Untouched
- Cloudflare config: Untouched
- Quote flow: Untouched
- Planner: Untouched
- Dashboard runtime: Untouched
- SEO behavior: Untouched
- Sitemap/robots: Untouched
- Home Assistant runtime: Untouched

## Task Closeout

After audit completion and validation:

1. Update `T-GOVAUTH001` according to Master Task Register lifecycle rules.
2. Record:
   - audit document created
   - authority chain confirmed
   - conflicts found
   - missing owners found
   - skills/plugins/workflows found
   - local configuration sources found
   - ChatGPT project-layer reconciliation still required
   - recommended remediation tasks
   - protected systems untouched
3. Do not activate remediation tasks.
4. Do not close unrelated tasks.

## Commit and PR

Follow `AGENTS.md`, `CODEX_RUN_CONTRACT`, `CODEX001`, and `OPS009`.

- Branch: create a fresh branch from synchronized `main`
- Commit message: `T-GOVAUTH001 audit complete WNYHS governance authority`
- PR title: `T-GOVAUTH001 — Audit complete WNYHS governance authority`
- PR type: Draft
- Do not merge

PR body sections:

- Purpose
- Audit Scope
- Confirmed Authority Chain
- Domain Owners
- ChatGPT and Codex Rules
- Skills, Plugins, and Automatic Workflows
- Conflicts and Missing Owners
- Current Practice vs Documented Governance
- Validation
- Protected Systems Confirmed Untouched
- Follow-Up Tasks

## Required Output Summary

Return:

1. Branch name
2. Commit SHA
3. Draft PR number and URL
4. Exact files changed
5. Audit document path
6. Confirmed authority chain
7. Primary domain owners
8. ChatGPT operating-rule findings
9. Codex operating-rule findings
10. Codex prompt-rule findings
11. Skills inventory findings
12. Plugin/connector findings
13. Automatic workflow findings
14. Local Codex configuration findings
15. Usage-dashboard visibility findings
16. Conflicts
17. Missing owners
18. Stale, misleading, proposed, or superseded docs
19. Current practice versus documented-governance findings
20. Recommended remediation tasks
21. Validation results
22. Protected systems confirmed untouched
23. Confirmation no merge occurred
24. Token Utilization / RSI Report

## Self-Check

Before responding, confirm:

- `T-GOVAUTH001` was `ACTIVE` before execution.
- `main` was synchronized.
- A fresh branch was created.
- Existing authority was preferred over invention.
- The audit remained docs-only.
- No conflict was silently resolved.
- No proposed doc was promoted.
- No owner standard was altered.
- Skills, plugins, workflows, local config, and precedence were audited.
- No secrets were exposed.
- Hidden ChatGPT project-layer content was not guessed.
- Unknowns were marked clearly.
- Only authorized files changed.
- Protected systems were untouched.
- The PR is draft.
- No merge occurred.
