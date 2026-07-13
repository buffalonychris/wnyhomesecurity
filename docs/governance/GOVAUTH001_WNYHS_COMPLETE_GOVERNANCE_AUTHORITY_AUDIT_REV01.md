# GOVAUTH001 — WNYHS Complete Governance Authority Audit — REV01

Status: Completed audit / reference evidence
Task ID: T-GOVAUTH001
Customer-facing: No
Implementation authority: No
Audit date: 2026-07-13
Repository: `buffalonychris/wnyhomesecurity`

## 1. Executive determination

WNY Home Security has a workable repository-centered governance system with a clear high-level execution gate: repository governance controls, `step-current.md` supplies one current context, the Master Task Register supplies bounded task authority, and task-specific work orders constrain execution. Protected runtime boundaries are consistently conservative.

The environment is not yet a single clean authority graph. It contains active standards, active governance drafts, proposed operating standards, partial runtime contracts, planning controls, historical evidence, generated inventories, local Codex instructions, enabled plugins, and an advisory hook. Several sources describe the same domains at different status levels. Future work can proceed safely only when the high-authority chain is loaded first and lower-level owner documents are classified before use.

Confidence is **high** for the core execution chain and protected-system boundaries, **medium** for domain-owner selection, and **low-to-medium** for local capability usage reporting, live external configuration truth, and hidden ChatGPT project-layer reconciliation.

## 2. Audit scope and limitations

This was a documentation-only governance audit. It inspected repository governance, owner standards, runtime contracts, source-path evidence needed to compare documented and current route practice, repo-local Codex hooks, and non-secret local Codex metadata. It did not inspect secret values, customer data, hidden ChatGPT instructions, live Home Assistant, HubSpot, Stripe, Google Calendar, Resend, Cloudflare, or any other external system.

Installed or cached capability does not prove invocation, authorization, live connectivity, credential validity, or usage-dashboard attribution. Local files can show configuration and discoverability; they cannot prove hidden platform behavior.

## 3. Confirmed authority chain

The controlling order for execution is:

1. ChatGPT Project instructions/KB only as the ChatGPT control layer; they do not independently authorize Codex implementation.
2. `docs/system/project.md`, `docs/system/guardrails.md`, `docs/system/agent.md`, and `docs/system/plan.md`.
3. `docs/system/step-current.md`.
4. `docs/system/master-task-register.md`.
5. The named ACTIVE bounded task.
6. The task-specific work order.
7. Active owner standards, locked specifications, and runtime contracts.
8. Source and runtime artifacts as evidence of actual behavior.
9. PR, deployment, and validation evidence.
10. Historical Steps, audits, implementation records, and archived material as lineage only.
11. Chat-derived context only after promotion into repository docs or a permitted bounded work order.

`AGENTS.md` is a repository execution instruction loaded before changes. `docs/codex/CODEX_RUN_CONTRACT.md`, `docs/codex/CODEX_TASK_REGISTER_RULES.md`, `docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md`, OPS003, OPS004, OPS005, and OPS009 constrain execution but do not create task authority by themselves.

## 4. Current operational context

`CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01` is the sole ACTIVE current context. It opens bounded BRAND, PRINT, PRINT-ASSET, QR, LOCAL-MARKETING, BUSINESS-DEVELOPMENT, FUNNEL, COPY, QA, OPS, CRM, PAYMENT, and SCHED workstreams while retaining all runtime locks. Open categories are not authorization to bundle work.

Historical Step documents remain lineage unless `step-current.md` explicitly promotes them. The current task was valid because `T-GOVAUTH001` appeared exactly once under Active Tasks with `Status: ACTIVE`, and the separate work order supplied the deferred audit scope required by the activation record.

## 5. ChatGPT operating authority

ChatGPT is the execution dispatcher and reviewer. It may interpret the operator’s request, inspect repository facts when an authorized connector is available, classify workstreams, prepare bounded work orders, review Codex summaries and PR evidence, and recommend approve/hold. It does not acquire implementation, merge, deployment, roadmap, or business-priority authority from those activities.

The durable handoff is a repository task/work order, not a long conversation. Hidden ChatGPT Project instructions, Project KB material, user profile instructions, workspace instructions, and conversation assumptions require separate reconciliation; this audit does not guess their contents.

## 6. Codex operating authority

Codex is a bounded implementation technician. It must verify repository identity, clean/synchronized base state, controlling context, ACTIVE task, workstream route, owner docs, protected systems, allowed files, forbidden scope, and validation before editing. It must stop on same-level conflict, stale main, missing authority, contaminated worktree, equivalent open PR, protected-system ambiguity, or validation failure that prevents safe closeout.

Codex may use available tools only when the active task requires them. Capability availability is not authorization. It creates a fresh branch, stages only intended files, commits accurately, pushes the branch, opens a draft PR, and does not merge or mark the PR ready.

## 7. Repository instruction sources

| Source | Classification | Effect |
|---|---|---|
| `AGENTS.md` | Repository execution instruction | Root startup, stop, build, PR, protected-system, claims, and closeout rules. |
| `docs/system/project.md` | Primary authority | Authority chain, task gate, preservation, version, and conflict rules. |
| `docs/system/guardrails.md` | Primary authority | Hard stops, claims, BOM exposure, funnel, planner, payment, email, additive/destructive boundaries. |
| `docs/system/agent.md` | Primary authority | Technician behavior, current-context interpretation, routing, and return requirements. |
| `docs/system/plan.md` | Primary authority | Execution, route-audit, validation, and completion discipline. |
| `docs/system/step-current.md` | Primary authority | Single current operational context. |
| `docs/system/master-task-register.md` | Primary authority | Operational execution board. |
| `docs/codex/CODEX_RUN_CONTRACT.md` | Repository execution instruction | Always-on Codex contract. |
| `docs/codex/CODEX_TASK_REGISTER_RULES.md` | Repository execution instruction | Task schema and lifecycle. |
| `docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md` | Active implementation specification | Work-order and closeout shape; no implementation authority. |
| `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md` | Active owner standard | Context efficiency. |
| `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md` | Active owner standard | Workstream routing. |
| `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md` | Active status board | Current-state pointers; not owner authority. |
| `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md` | Active owner standard | Operator/ChatGPT/Codex workflow and RSI reporting. |
| `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md` | Proposed / not yet promoted | File says “Draft for repo promotion”; use as candidate guidance, not active authority. |
| `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md` | Proposed / not yet promoted | Useful end-to-end operator workflow; no current promoted OPS001 exists. |
| `.codex/README.md`, `.codex/hooks.json`, `.codex/hooks/artifact_authority_advisory.py` | Automatic workflow / repo-local config | Advisory candidate-artifact hook; non-blocking and non-authorizing. |
| Nested `AGENTS.md` | Repository execution instruction | Only the root file was found. |
| `.github/workflows/` | Automatic workflow | No repository GitHub workflow directory was found. |

### Instruction Source Matrix

| Instruction source | Exact path/origin | Owner | Type | Auto-loaded? | Operator-visible? | Usage-dashboard visible? | Precedence | Conflicts | Recommended treatment |
|---|---|---|---|---|---|---|---|---|---|
| Platform/system/developer instructions | Codex session control layer | OpenAI/workspace | Local execution control | Yes | Partially | Unknown | Above repository | Hidden portions cannot be reconciled here | Preserve; compare visible behavior with repo rules |
| User bounded request | Current T-GOVAUTH001 dispatch | Operator | Task dispatch | Yes | Yes | Conversation visible | Above lower repo task details, below repository conflicts | None found | Use only with repository authority checks |
| User-global bounded technician rules | `%USERPROFILE%/.codex/AGENTS.md` | Operator | Local Codex configuration | Yes for Codex home | Yes locally | Unknown | Above repo only where platform applies; cannot weaken repo | Duplicates repo rules | Keep compact and repo-first |
| Repository root rules | `AGENTS.md` | Repository/operator | Repository execution instruction | Yes in repo context | Yes | No evidence | Highest repository instruction | Build exception ambiguity | Clarify docs-only build hierarchy later |
| Core system authority | `docs/system/project.md`, `guardrails.md`, `agent.md`, `plan.md` | Repository/operator | Primary authority | Required load, not platform auto-load | Yes | No evidence | Highest durable repo authority | Some duplication | Preserve and reconcile by reference |
| Current context/task | `step-current.md`, Master Task Register | Repository/operator | Primary execution authority | Required targeted load | Yes | No evidence | Below core system, above work order | Register activation wording is historical | Preserve bounded lifecycle |
| Work order | `docs/codex/work-orders/T-GOVAUTH001_WORK_ORDER_REV01.md` | Operator/ChatGPT dispatch | Task-specific authority | Prompt-supplied | Yes | Conversation/context only | Below task, above owner docs | None material | Preserve with task evidence |
| Codex contracts | run contract, task-register rules, CODEX001 | Repository/operator | Repository execution instruction/spec | Required load | Yes | No evidence | Below core/task, above capability workflows | Predecessor overlap | Make successor relationship explicit later |
| OPS workflow/routing | OPS003/004/005/009 | Repository/operator | Active standards/status board | Required by run contract | Yes | No evidence | Supporting execution governance | OPS001/002 status ambiguity | Keep active set; classify candidates |
| Proposed workflow docs | governance OPS001; system OPS002 | Repository/operator | Proposed / not promoted | No | Yes | No evidence | Reference only | Often cited as current | Promote, supersede, or label consistently |
| Repo-local hook | `.codex/hooks.json` and advisory Python | Repository/operator | Automatic workflow | Conditional after trust/event match | Yes | Hook usage not visible | Below all authority/task rules | README says trust required; trusted hash exists | Advisory only; verify via `/hooks` |
| Skill instructions | `%USERPROFILE%/.codex/skills/**/SKILL.md`; plugin skill paths | OpenAI/plugin/local installer | Skill/workflow instruction | Conditional task match | Yes on disk/session list | Per-skill reporting unknown | Below authorized task/owner rules | Cache/exposure can differ | Invoke only when task authorizes capability |
| Plugin/connector manifests | `%USERPROFILE%/.codex/plugins/**/.codex-plugin/plugin.json` | Plugin publishers | Plugin or connector | Enabled/capability dependent | Yes locally | Unknown | Capability layer only | Cache does not prove enablement | Inventory metadata; never infer authority |
| Local command rules/policy | `%USERPROFILE%/.codex/rules/default.rules`, `policy/default.codexpolicy` | Operator/local Codex | Permission configuration | Yes for command policy | Yes locally | Unknown | Permission only, below governance | Allows commands repo forbids in context | Treat permission as capability, not authority |
| Local scheduled automations | `%USERPROFILE%/.codex/automations/*/automation.toml` | Operator | Automatic workflow | Schedule-driven | Yes locally | Unknown | Outside WNYHS authority unless separately dispatched | Scope/content not reconciled | Do not treat as WNYHS instruction authority |
| ChatGPT Project layer | Hidden Project instructions/KB/profile/workspace | Operator/OpenAI | Unknown / reconciliation required | Yes for ChatGPT | Not inspectable by Codex | Unknown | Must not override repo execution without promotion | Unknown | Perform explicit project-layer reconciliation |

## 8. Codex prompt rules

Prompts must identify model/reasoning guidance, task ID/type, authority order, workstream routing, objective, prechecks, required docs, exact work, allowed/forbidden scope, target files, version rule, validation, protected systems, output summary, RSI/token report, event notes, and self-check. Stable rules should be referenced by path rather than copied. Audit and protected-system tasks may require broad context; ordinary tasks should use targeted reads.

## 9. Codex work-order rules

One work order normally equals one bounded task, branch, commit series, and PR. A work order constrains execution; it is not strategy, task activation, merge authority, deployment authority, or a protected-system exception. It must be stored under a governed repository path when durable execution authority is needed. `docs/codex/work-orders/` currently contains the T-GOVAUTH001 work order; no general work-order index was found.

CODEX001 is the current detailed specification. `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md` remains active predecessor context and overlaps CODEX001. Future reconciliation should name CODEX001 as successor or explain the continuing division of ownership.

## 10. Master Task Register rules

Only ACTIVE tasks in the Active Tasks section are executable, except expressly permitted prompt-created bounded work orders. Required fields are Task ID, Task Name, Status, Category, Controlling Context, Purpose, Allowed Scope, Forbidden Scope, Target Files, Runtime Systems Affected, Documentation Updates Required, Validation Required, Exit Criteria, Dependencies, and Operator Decision Required.

Lifecycle is BACKLOG → READY → ACTIVE → DONE, with BLOCKED and ARCHIVED as governed alternatives. Completion requires validation and exit criteria. ACTIVE is authorization for the named task only and never authorizes adjacent tasks.

## 11. Branch, commit, PR, review, merge, deployment, and closeout rules

- Start from clean synchronized `main` after the prior PR is merged when required.
- Create a fresh task branch; use one bounded task per PR unless explicitly authorized.
- Stage only task files; never absorb unrelated work.
- Use an accurate terse commit and push the branch with upstream tracking.
- Open a draft PR with purpose, scope, impact, validation, protected-system confirmation, and follow-up information.
- ChatGPT/operator review the diff and checks; operator alone decides readiness and merge.
- Codex does not merge, enable auto-merge, approve deployment, or mark draft ready.
- Customer-facing tasks require manual deployment and route/version verification; docs-only tasks do not deploy.
- After merge, the operator/local workflow synchronizes `main` before the next task.
- Closeout must report branch, SHA, PR, files, validation, scope, protected systems, unresolved risks, and Token Utilization / RSI.

## 12. Versioning and deployment rules

Customer-facing site work requires a visible patch/version badge bump before implementation. Docs-only governance has no public-site version bump. Runtime/API and dependency work require explicit task-specific version rules. Cloudflare Pages is the documented deployment surface; deployment configuration, DNS, environment settings, and secrets are protected. `docs/runtime/deployment_validation.md` is the deployment validation owner target, but its operational verification status is inconsistent across status sources.

## 13. Domain authority matrix

| Domain | Primary owner | Supporting docs | Authority type | Current status | Controls | Does not control | Conflict notes | Required task type |
|---|---|---|---|---|---|---|---|---|
| Project execution | `docs/system/project.md` | guardrails, agent, plan | Primary authority | Active | authority/task gates | domain implementation | duplicated summaries elsewhere | GOV |
| Current context | `docs/system/step-current.md` | Master Task Register | Primary authority | Active | open bounded categories | task scope itself | none material | GOV |
| Task lifecycle | Master Task Register + `CODEX_TASK_REGISTER_RULES.md` | CODEX run contract | Primary/execution | Active | dispatch/status | strategy | register is large and structurally overloaded | GOV |
| Public IA/routes | `SITEARCH002...REV01.md` | SITEARCH001/003-007, SEO001/004 | Active owner standard | Active | canonical IA decisions | runtime without task | `project.md` route list is stale/incomplete | FUNNEL/QA |
| Brand/layout | brand asset/page/header-footer standards | visual/design standards | Active owner standards | Active | brand asset/layout use | task authority | several visual standards overlap | COPY/FUNNEL |
| Claims | guardrails + `CLAIMS001...REV01.md` | public funnel standards | Primary + active governance draft | Mixed | forbidden/qualified claims | deployment | “Active Governance Draft” status needs normalization | COPY/GOV |
| Solutions/offers | `OFFERING001...REV01.md`; `SOLUTION_CATALOG_RECONCILIATION_REV01.md` | SOLUTION001/002 | Active governance drafts | Mixed | eligibility, tiers, Vault, catalog posture | public launch alone | multiple SOLUTION001 families | GOV/COPY |
| Hardware | `HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md` | catalog, BOM, installer docs | Active governance draft | Mixed | approval/status evidence | purchasing/install authority | no dedicated procurement owner | GOV |
| Package/BOM/pricing inputs | `PACKAGEBOM001...REV01.md` | PACKAGE001, catalog docs | Active governance draft | Mixed | schema/status boundaries | final pricing/purchase/payment | quote/BOM owners overlap | GOV |
| Catalog/parts | `CATALOG001...REV01.md` | CATALOG002/003, IMPLEMENTATION001, catalog imports | Active owner standard | Active | canonical catalog source/model | purchasing/runtime changes | catalogs vs solution registry boundary is indirect | GOV |
| Property/discovery | `PROPERTY001...REV01.md` | FLOORPLAN000-004, discovery/funnel specs | Active architecture | Active | property model/evidence | live storage without task | customer requirements owner is distributed | GOV/QUOTE |
| Estimate/quote | quote packet standards + QUOTESYSTEM017 | quote map/playbook | Active standards | Active | packet/workspace model | payment/CRM | estimate vs proposal terminology needs consistent routing | GOV/QUOTE |
| SOW/agreement/change | internal SOW + customer estimate packet + GATES001 | main funnel contract | Active standards | Active | packet/gate boundaries | legal advice/live workflow | no single change-order owner | GOV/QUOTE |
| Home Assistant platform | INSTALL001 + INSTALL003 | bootstrap, naming, entity, backup | Active standards | Active | platform/golden baseline | live customer config | two INSTALL008 identities | INSTALL |
| Automations | `AUTOMATION001...REV01.md` | installer/notification docs | Active owner standard | Active | HA-native lifecycle | live automation without task | no separate scene/script owner | INSTALL |
| Dashboards | INSTALL006 | dashboard design standard, INSTALL007/010 | Active owner standard | Active | audience/view architecture | live YAML | website dashboard and HA dashboard terms can collide | INSTALL |
| Notifications | `WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md` | questionnaire, AUTOMATION001 | Active owner standard | Approved | recipients, quiet hours, routing/escalation concepts | customer implementation without profile/task | customer-specific decisions remain separate | INSTALL |
| Commissioning/handoff/support | INSTALL008 commissioning, INSTALL009, INSTALL010 | INSTALL002 | Active checklist/standards | Active | bench/acceptance/handoff/support posture | live records/portal | INSTALL008 collision | INSTALL |
| Cameras/NVR/privacy | claims + solution/hardware/catalog + installer docs | notification standard | Distributed owner set | Partial | claim/privacy constraints and device status | complete recording/retention policy | no dedicated camera/NVR owner | GOV/INSTALL |
| Entry/locks/garage | solution/hardware/automation/installer docs | catalog | Distributed owner set | Partial | device/status/control principles | full access-control policy | no dedicated access owner | GOV/INSTALL |
| Aging in place | claims + solution catalog/page standards | capability catalog | Distributed owner set | Partial | non-medical claims and solution eligibility | medical service authority | no dedicated domain owner | GOV/COPY |
| Environmental/property management | solution catalog + hardware + automation | package/BOM/catalog | Distributed owner set | Partial | capability and automation posture | complete property-management ops | no dedicated owner | GOV/INSTALL |
| Networking/PoE/power | hardware/catalog/installer standards | HA commercial docs | Distributed owner set | Partial | component and install considerations | full resilience standard | no dedicated owner | GOV/INSTALL |
| HubSpot | `hubspot_kb_rev03.md` | pipeline architecture, runtime contracts | Locked owner + runtime contracts | LOCKED/mixed | schema/write boundary | direct client writes | runtime status sources disagree | CRM |
| Stripe | `stripe_runtime.md` + root guardrails | protected runtime contract | Runtime contract | PARTIAL/active conflict | server/webhook authority | client success authority | status inconsistency | PAYMENT |
| Scheduling | scheduling ownership + Google Calendar runtime | scheduling spec | Runtime contracts | PARTIAL/active conflict | request/operator confirmation | customer-authoritative booking | status inconsistency | SCHED |
| Email | resend runtime + Cloudflare email routing | config inventories | Runtime contracts | PARTIAL/active conflict | outbound/inbound ownership | secret/config change | status inconsistency | EMAIL |
| Lead/request ID/QR | lead signal, request ID, QRLanding contracts | attribution specs | Runtime contracts | PARTIAL/active conflict | API boundary/correlation/attribution | bypass/direct CRM | status inconsistency | LEAD/QR |
| Deployment | cloudflare env + deployment validation | config inventory | Runtime/SOP | PARTIAL | validation boundaries | dashboard/DNS changes | verification incomplete | QA/RUNTIME |
| Documentation lifecycle | project + document status reconciliation | catalog, manifest, KAOS intake | Governance | Mixed | hierarchy/status/promotion | implementation | catalog/manifest drift | GOV |
| KAOS/events/hooks/RSI | KAOS schema/registries/event/hook standards | master control REV03 | Active foundation/planning | Mixed | candidate classification and future workflow shape | automatic authority | some older assessments are stale | GOV |

## 14. Website and public-marketing governance

Public work must combine current context/task authority with SITEARCH002, SEO001/004, public funnel standards, brand/layout/header-footer standards, claims guardrails, and task-specific page/solution/category owners. Public content cannot expose internal BOMs, margin math, private notes, secrets, unsupported response claims, or unapproved pricing/capability claims.

## 15. Solution and offering governance

OFFERING001 controls visibility tiers, public eligibility, Vault, pilot, premium/custom, and research posture. SOLUTION_CATALOG_RECONCILIATION controls the internal solution universe, while SOLUTION001/002 control solution page/listing shape. These are governance constraints, not launch authority. “Active Governance Draft” should be treated as active task input with explicit operator/status caution until normalized.

## 16. Hardware, BOM, procurement, inventory, and installed-asset governance

HARDWARE001 controls approval/status; PACKAGEBOM001 controls package/BOM input shape; CATALOG001-003 control canonical parts sources and data model; INSTALL006A proposes shared job/HubSpot architecture without implementation authority. Procurement, substitutions, ordering, inventory operations, and installed-asset lifecycle lack one promoted end-to-end owner. Current docs provide fields and boundaries but not a single operating contract.

## 17. Home Assistant platform governance

INSTALL001 owns installer-platform architecture; INSTALL003 owns the Golden Build; INSTALL008 bootstrap owns HA Green first-install posture; INSTALL004/005 own naming/entities/areas; HA-BACKUP001 owns backup extraction; customer-specific BKLF docs are deployment evidence and local specifications, not company-wide owner standards.

## 18. Automation governance

AUTOMATION001 makes Home Assistant-native behavior the default, prefers C.A.F.E. for complex visual authoring, reserves Node-RED for advanced/customer-specific cases, and requires lifecycle, manual override, failure, and validation posture. Scenes/scripts do not have distinct promoted owner documents; they inherit the automation standard.

## 19. Dashboard governance

INSTALL006 defines Customer, Installer, and Service Dashboard classes. INSTALL007 defines theme readiness; INSTALL010 defines service/support dashboard posture; customer-dashboard design standards support presentation. Live YAML, customer data, cards, themes, and remote access require separate tasks.

## 20. Notification and alert-routing governance

The Notification Engine Standard is the primary reusable owner. It covers recipient profiles, priority, quiet hours, delivery paths, escalation concepts, validation, and customer-specific approval. BKLF notification decisions and validation records are customer-specific evidence, not general authority.

## 21. Home-security governance

Home security is governed by claims, solution/offering, hardware, package/BOM, automation, installer, and notification owners. The system may describe self-monitored/local-first behavior where approved but must not imply unsupported monitoring, dispatch, emergency response, police/authority response, or guarantees.

## 22. Camera, NVR, privacy, recording, and retention governance

Camera devices and scenarios appear across hardware, solution, catalog, installer, notification, and customer-specific docs. Claims/privacy restrictions exist. No single active owner was found for recording retention, audio recording, NVR lifecycle, evidence access, deletion, legal consent, or customer/operator privacy responsibilities. This is a material missing-owner domain.

## 23. Entry, access, locks, and garage governance

Locks and entry behavior are covered indirectly by hardware, solution, automation, installer, notification, and customer records. Manual override and safe control principles exist, but no promoted end-to-end access-control/garage owner governs credentials, authorization, audit retention, fail-safe behavior, or handoff.

## 24. Aging-in-place and non-medical governance

Claims and solution standards establish non-medical boundaries and forbid medical/emergency authority. No dedicated aging-in-place owner standard was found. Public and solution tasks must load CLAIMS001 plus solution/offering owners and treat medical or guaranteed-response language as prohibited unless higher authority changes.

## 25. Home-safety and environmental governance

Leak, freeze, sump, air-quality, temperature, humidity, power, and equipment-monitoring concepts are represented in solution, hardware, package/BOM, catalog, automation, notification, and installer docs. No single environmental lifecycle owner covers thresholds, sensor placement, maintenance, alert responsibility, or acceptance across all capabilities.

## 26. Property-management governance

Property-management scenarios occur in solution and catalog material, but no dedicated active property-management operating standard was found for multi-property roles, tenant/privacy boundaries, access delegation, service responsibility, or record retention.

## 27. Networking, structured cabling, PoE, backup-power, and resilience governance

These topics appear in hardware, catalog, installer, commercial-area, bootstrap, and customer-specific docs. No promoted cross-cutting infrastructure owner was found for network segmentation, PoE budgets, cabling workmanship, UPS sizing, outage modes, recovery objectives, or customer ownership.

## 28. Installer, bench, commissioning, acceptance, handoff, and support governance

INSTALL001-010 provide the strongest coherent domain stack: architecture, bench build, Golden Build, naming, entity/area, dashboards, shared data proposal, theme readiness, commissioning, bootstrap, handoff, and service/support. The principal structural defect is the reused INSTALL008 label for both bootstrap and commissioning.

## 29. Property discovery, estimate, quote, SOW, agreement, and change-management governance

PROPERTY001 and FLOORPLAN000-004 control evidence and property modeling. Quote packet standards separate customer estimate/proposal from internal SOW. GATES001 controls quote-to-install gates. Main funnel/runtime specs constrain live behavior. Exclusions are represented; a single change-order lifecycle owner was not found.

## 30. HubSpot governance

HubSpot REV03 is locked and authoritative. All CRM writes must go through `/api/lead-signal`. Direct frontend/client writes, schema/property/pipeline/workflow changes, and unapproved field additions are forbidden. Pipeline `2282258169` and New Estimate Request stage `3680633583` remain locked. INSTALL006A is proposed architecture only and cannot change this boundary.

## 31. Stripe and payment governance

Payment verification is server-side and webhook-backed. Redirect/success pages are not authoritative. Secrets, deposit calculation, checkout/session semantics, and webhook verification are protected. The runtime owner map still marks the Stripe contract PARTIAL pending live verification.

## 32. Scheduling, calendar, email, lead-intake, and runtime-contract governance

Scheduling is request → operator/owner review → confirmation → calendar ownership; no customer-authoritative booking. Resend is outbound only and Cloudflare Email Routing remains inbound. `/api/lead-signal` is the protected intake/CRM write boundary, and server `requestId` is the correlation authority. Runtime contracts constrain behavior but do not authorize changes.

## 33. Customer data, privacy, secrets, customer ownership, and local-first governance

Secrets/env values, credential-bearing URLs, customer data, backups, access tokens, and private implementation notes are protected. Local-first and customer ownership are recurring approved principles, but remote access and support require explicit authorization. Local configuration metadata may be inventoried without copying values; live customer/runtime data was out of scope.

## 34. Documentation lifecycle, revision, supersession, and lineage rules

New standards should state status, revision, task ID, authority, implementation authority, and supersession. Historical Steps and audits remain evidence. Proposed docs do not become active by location or repeated citation. Higher revisions should expressly supersede lower revisions; this is not consistently done. Catalog and manifest are inventories/supporting indexes, not substitutes for source documents.

## 35. Skills inventory

| Skill/workflow name | Exact source/path | User-created? | Repo-provided? | Workspace-provided? | Bundled/internal? | Invocation method | Auto-invoked? | Can disable? | Usage reporting | Governance impact | Verification status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `imagegen`, `openai-docs`, `plugin-creator`, `skill-creator`, `skill-installer` | `%USERPROFILE%/.codex/skills/.system/*/SKILL.md` | No | No | No | Yes | task match/name | Conditional | platform/config dependent | not proven | tool-specific rules | manifests found |
| `cloudflare-deploy`, `playwright` | `%USERPROFILE%/.codex/skills/*/SKILL.md` | Local install unknown | No | No | No | task match/name | Conditional | removable/disableable locally | not proven | deploy/browser task rules | manifests found |
| `github`, `gh-address-comments`, `gh-fix-ci`, `yeet` | GitHub plugin cache `.../github/.../skills/*` | No | No | Plugin-provided | No | task match/name | Conditional | disable GitHub plugin | not independently itemized | GitHub review/publish rules | manifests found; `yeet` used for this task |
| Gmail, Google Calendar, Google Drive/Docs/Sheets/Slides, HubSpot skills | matching plugin cache skill paths | No | No | Plugin-provided | No | task match/name | Conditional | disable plugin | not proven | external-system workflow rules | manifests found |
| browser, Chrome, computer-use, Sites, visualize | `openai-bundled/*/skills/*` | No | No | Plugin-provided | Yes | task match/name | Conditional | config `enabled` | not proven | UI/app/site control | manifests found |
| documents, PDF, presentations, spreadsheets, template-creator | `openai-primary-runtime/*/skills/*` | No | No | Plugin-provided | Yes | task match/name | Conditional | config `enabled` | not proven | artifact generation/verification | manifests found |
| Figma and Vercel skill families | cached plugin skill manifests | No | No | Plugin-provided | No | task match/name | Conditional | disable plugin | not proven | design/deploy capability | cached manifests found; not exposed as WNYHS authority |
| repo advisory hook | `.codex/hooks.json` + Python hook | No | Yes | No | No | `PostToolUse` matcher `Bash` | Event-conditional after trust | remove config/review trust | no dashboard evidence | advisory candidate-label check only | trusted-hash metadata found; invocation not observed |

No repository-provided `SKILL.md` was found outside the repo hook/config area. Skill instructions constrain how a capability is used; they do not authorize WNYHS scope.

## 36. Plugins and connectors inventory

Enabled local config entries were found for Google Calendar, Figma, Vercel, GitHub, documents, spreadsheets, presentations, computer-use, Chrome, PDF, template-creator, Sites, browser, and visualize. Cached manifests additionally existed for Gmail, Google Drive, Google Contacts, HubSpot, OpenAI Developers, OpenAI Templates, and unidentified app-ID plugins. Cache presence does not prove enablement or authorization.

The GitHub CLI was authenticated and was explicitly authorized for precheck/publish in this task. No Cloudflare connector was used. A local `node_repl` MCP server section was present; its values were not printed. Plugin/connector credentials and environment values were not inspected.

## 37. Automatic workflow inventory

Repo-local automatic workflow: `KAOS-HOOK-ARTIFACT-AUTHORITY-001`, a non-blocking `PostToolUse`/`Bash` advisory. Local Codex automation metadata showed ACTIVE `daily-brief`, `follow-up-monitor`, `weekly-engineering-summary`, and `weekly-review` schedules. Their existence is not WNYHS execution authority, and their task bodies/memory were not treated as WNYHS governance.

No `.github/workflows/` directory was found. Repository scripts include Site QA preview and token compliance/image-generation helpers; scripts are tooling, not authority, and must be invoked only by bounded tasks.

## 38. Local Codex configuration inventory

Non-secret metadata showed: model `gpt-5.6-sol`, reasoning `medium`, approval policy `never`, sandbox mode `danger-full-access`, pragmatic personality, WNYHS project trust `trusted`, context-window usage display enabled, and `js_repl`, memories, and chronicle disabled. Current task runtime permissions matched the model/reasoning and no-approval posture.

`%USERPROFILE%/.codex/AGENTS.md` adds bounded-technician, repo-first, capability-not-authority, secret-safety, no-merge, and Context Efficiency Report instructions. `%USERPROFILE%/.codex/rules/default.rules` and `policy/default.codexpolicy` contain local command approvals, including broad Git actions; these permission rules do not override repository no-merge/no-main rules. AppData contained an OpenAI Codex application directory; no additional active WNYHS authority was established there.

## 39. Instruction-source precedence map

System/developer/platform instructions → user task/attached AGENTS instructions → repository `AGENTS.md` and higher repository authority → current context → ACTIVE task → work order → active owner standards/runtime contracts → local skill/plugin workflow instructions for an authorized capability → source evidence → proposed/historical/reference material. A lower capability instruction never expands repository scope.

## 40. Codex usage-dashboard visibility findings

The local UI setting `show-context-window-usage = true` indicates context-window visibility is enabled. Exact token metrics, per-skill automatic invocation, plugin-tool attribution, hook execution counts, and connector usage were not visible to this audit. No evidence showed that capability cache presence appears in usage reporting. Treat usage-dashboard coverage as **unknown / operator verification required**.

## 41. CHATGPT PROJECT-LAYER RECONCILIATION REQUIRED

Compare this audit against the WNYHS Project instructions, WNYHS Project KB, KAOS control documents supplied to ChatGPT, ChatGPT Skills, ChatGPT plugins, user profile instructions, workspace instructions, conversation-derived assumptions, and enforcement-mode instructions. Confirm that they preserve repo-first authority, task gating, protected systems, no merge, claims boundaries, and capability-not-authority. Hidden content was not inspected or inferred.

## 42. Conflict and duplicate-authority findings

| Finding | Higher authority | Lower/other source | Risk | Recommended resolution |
|---|---|---|---|---|
| Build rule differs for docs-only work | root `AGENTS.md` requires build | `plan.md`/work orders may narrow docs-only checks | medium | clarify root exception hierarchy; this audit runs build |
| OPS002 called current/required but self-labels Draft | project/run chain | OPS002 and catalog/work-order references | medium | bounded promotion/classification task |
| No active OPS001 at intended path | current system chain | proposed governance OPS001 | medium | execute `REPO001-OPS001-PROMOTE` or successor |
| Runtime status disagreement | runtime source docs + higher governance | runtime map says PARTIAL; reconciliation/OPS005 say active/existing | high | live-verified runtime status reconciliation |
| Route authority drift | `project.md` is higher authority | current App/site-architecture/SEO practice | high | bounded route-authority reconciliation; no route edits here |
| DESIGN002 REV01 and REV02 both “Working Standard” | task/owner routing | both revisions | medium | explicit supersession/status task |
| DESIGN001 identifier reused | design owner set | Customer Interface and draft Visual System docs | medium | normalize IDs/status without deleting history |
| SOLUTION001 reused for object and page standards | solution owner set | governance and solution-system docs | medium | document distinct owner roles and revision lineage |
| INSTALL008 reused | installer owner set | bootstrap and commissioning docs | high | assign non-colliding identifiers while preserving paths/lineage |
| CODEX work-order ownership overlaps | CODEX001 | predecessor active work-order standard | medium | explicit successor/supporting relationship |
| Catalog vs manifest ownership unresolved | source docs themselves | both index the same corpus differently | high | DOCSYNC successor task |
| Local allow rules include merge capability | repository no-merge rules | local command policy | low if precedence observed | document that permission is not authority; consider policy tightening |

No conflict was silently resolved.

## 43. Missing-owner findings

Material missing or incomplete owners: promoted operator workflow; camera/NVR/audio/recording/retention/privacy lifecycle; access/lock/garage lifecycle; aging-in-place domain; environmental sensing thresholds/maintenance/alert responsibility; property-management roles/privacy; networking/cabling/PoE/backup-power/resilience; procurement/substitution/inventory/installed-asset lifecycle; change orders; a current verified runtime-status owner; skill/plugin/MCP governance and usage attribution; and a canonical work-order registry/index.

## 44. Stale, misleading, proposed, or superseded-document findings

- `docs/MARKDOWN_MANIFEST.md` says 107 Markdown files; 381 were present during audit. Its addenda document drift but do not restore an exhaustive manifest.
- The catalog and manifest are addendum-heavy and can mislead automated readers about completeness.
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`, AUTHORITY-MAP, and REPO-GOVERNANCE-ARCHITECTURE remain proposed/candidate evidence.
- OPS002 remains Draft for promotion despite being routinely referenced.
- The runtime ownership map is stale relative to later contract/inventory work.
- Older governance assessment findings that say KAOS registries/RSI/business-process/decision records do not exist are superseded by current KAOS foundation docs.
- HubSpot REV01/REV02 are historical; REV03 is locked.
- Historical Step controller language is non-current.
- Missing references found in current docs include `docs/system/assistant_behavior.md` and three old system Step filenames; an expected repo `.codex/config.toml` reference is absent because configuration is user-local. The audit target reference was missing only because this document had not yet been created.

## 45. Current practice versus documented governance findings

Current source exposes a much larger route surface than the compact required-route list in `project.md`, including canonical category routes, redirects, legacy/vertical routes, demos, and operator routes. Site architecture, SEO, and PLAY016 evidence classify much of this, but the high-authority project route section has not been reconciled. Local Codex config also shows a trusted repo hook and enabled capabilities that repository governance does not centrally inventory. The actual workflow uses GitHub CLI successfully, while proposed OPS001 still describes a mostly manual Web UI sequence.

## 46. Required governance load set by task type

| Task type | Minimum load set |
|---|---|
| Rough idea review | project, guardrails, OPS004/005 pointer, relevant owner status; no execution |
| Decision promotion | project, task register, KAOS intake/schema/decision registry, domain owner |
| Docs-only governance | AGENTS, core system chain, current task, run contract, CODEX001, OPS003/004/005/009, affected indexes |
| Website implementation | core chain, active task, SITEARCH/SEO/public funnel, brand/layout/claims, affected source |
| HA implementation | core chain, active task, INSTALL001/003/004/005, affected customer spec, automation/notification/backup as applicable |
| Automation implementation | core chain, task, AUTOMATION001, notification owner, customer profile, installer standards |
| Dashboard implementation | core chain, task, INSTALL006/007/010, dashboard design, customer spec |
| Hardware/BOM | core chain, task, HARDWARE001, PACKAGEBOM001, CATALOG001-003, solution/offering/claims |
| Solution/public marketing | core chain, task, OFFERING001, solution catalog/page/listing, claims, public funnel, SEO/brand |
| Estimate/quote | core chain, task, PROPERTY/FLOORPLAN, quote packet standards, GATES001, relevant runtime locks |
| SOW/agreement | core chain, task, customer estimate/internal SOW, GATES001, funnel contract |
| HubSpot | full core chain, task, REV03, pipeline architecture, lead signal/request ID, properties/sync contracts |
| Stripe/payment | full core chain, task, stripe/protected runtime, funnel/payment contracts, webhook evidence |
| Scheduling | full core chain, task, scheduling ownership, Google Calendar runtime, scheduling spec, request ID |
| Runtime contract | full core chain, task, protected runtime, runtime owner map/current inventory, affected source/tests |
| Cloudflare/deployment | core chain, task, cloudflare env/inventory, deployment validation, secret-safety checks |
| PR review | work order, task, diff/files/checks, protected-system confirmation, no-merge boundary |
| Production incident/hotfix | full core chain, ACTIVE hotfix task, affected runtime owners, rollback/validation, high reasoning |
| Governance audit/reconciliation | core chain, run/CODEX rules, OPS001-009 statuses, catalog/manifest/status map, domain owners, local instruction metadata |

## 47. Recommended ChatGPT hydration set

Hydrate a compact stable set: authority-chain paths, current context ID, ACTIVE task lookup procedure, run contract/CODEX001, OPS004 route, OPS005 primary row, claims/protected-system locks, and exact task-specific owner paths. Do not hydrate the full Master Task Register, full catalog, full manifest, historical Steps, or every plugin description by default.

## 48. Recommended Codex precheck set

Verify repo identity/path; `gh` availability/auth only when publishing is required; clean `main`; fetch and compare `main...origin/main`; prior dependency PR state; exact task uniqueness/status; work-order existence/completeness; equivalent branch/PR; workstream/owner/protected boundaries; branch creation; allowed-file list; no unrelated untracked inspection; and explicit stop decision before edits.

## 49. Recommended prompt-template hierarchy

Use CODEX001 as the canonical task template; reference the run contract for stable rules; add OPS004/005 routing output; add task-specific owner docs; use protected-system template variants only when explicitly authorized; use a compact PR/closeout appendix; and keep Project-layer instructions limited to dispatcher behavior rather than duplicated repository policy.

## 50. Recommended remediation tasks

Record but do not activate:

1. `GOVAUTH-RECON001` — reconcile OPS001/OPS002/CODEX predecessor statuses and explicit supersession.
2. `DOCSYNC002` — define catalog versus manifest ownership and regenerate counts/inventory.
3. `RUNTIME-STATUS002` — reconcile PARTIAL/ACTIVE/LOCKED status using operator-verified live evidence.
4. `ROUTE-AUTH002` — reconcile `project.md` route authority with current SITEARCH/SEO/source evidence.
5. `ID-NORMALIZE001` — resolve DESIGN001/DESIGN002/SOLUTION001/INSTALL008 identifier and revision ambiguity without deleting history.
6. `DOMAIN-OWNER001` — create a decision plan for camera/privacy, access, aging-in-place, environmental, property-management, and infrastructure owners.
7. `OPS-CAPABILITY001` — govern skills/plugins/MCP/hooks/local-config inventory, authorization, disablement, and usage reporting.
8. `PROC-ASSET001` — define procurement, substitution, inventory, and installed-asset lifecycle ownership.
9. `CHANGEORDER001` — define change-order ownership across estimate, SOW, agreement, and install gates.

## 51. Final governance confidence assessment

Core execution authority: **High**. Protected-system boundaries: **High**. Workstream owner routing: **Medium-high**. Owner-document status and supersession: **Medium**. Runtime current-state truth: **Medium-low until live verification**. Capability/local-config governance: **Low-medium**. Hidden ChatGPT Project-layer alignment: **Unknown pending reconciliation**.

The safe operating posture is to keep the present high-authority chain, require one ACTIVE bounded task/work order, classify every lower owner by status, and stop rather than resolve contradictions in implementation turns.

## 52. Audit evidence and validation summary

Evidence included core governance, targeted T-GOVAUTH001 lookup, current context, Codex contracts, OPS001-005/009, document status reconciliation, catalog/manifest structure, KAOS foundation, runtime owner map, current owner-document metadata, route-source evidence, missing-reference scan, nested AGENTS scan, repo `.codex` hook files, GitHub workflow scan, local non-secret Codex config/skill/plugin/automation metadata, and Git/GitHub prechecks.

Pre-edit evidence: clean synchronized `main` at `aa3f7c8fecfa91a5a12f18c73468a2800105c1ec`; PR #514 merged; T-GOVAUTH001 exactly once and ACTIVE; complete work order present; no equivalent open PR. Validation and final commit/PR evidence are recorded in the task closeout and PR.

Event mapping: `TASK_STARTED` occurred after authority/prechecks; `TASK_COMPLETED_BY_CODEX` is represented by completed audit and validation; `CODEX_SUMMARY_RECEIVED` occurs when the closeout is returned; `PR_CREATED` occurs when the draft PR is opened. No hooks were implemented or activated by this audit.

Protected systems: HubSpot, Stripe/payment, scheduling, Resend/email, APIs/runtime, secrets/env, dependencies/package-lock, Cloudflare config, quote flow, planner, dashboard runtime, SEO behavior, sitemap/robots, and Home Assistant runtime were not modified. No secret values were copied into this document.
