# WNYHS Authority and Systems of Record Standard REV01

Status: ACTIVE
Task ID: GOVFOUNDASOR001
Owner: Project Governance
Primary authority: Repository-wide authority and systems-of-record designation rules
Implementation authority: No
Customer-facing: No
Effective date: 2026-07-25
Revision: REV01
Predecessor: None. This fills the prerequisite owner path identified by GOVFOUNDRECON001.
Successor: None.

## 1. Purpose

This standard defines how WNY Home Security identifies durable authority, assigns systems of record, resolves conflicts, promotes evidence into repository authority, and controls execution across operator decisions, ChatGPT, Work, Codex, GitHub, connected systems, implementation, and observed runtime.

It consolidates existing repository rules without changing business doctrine, domain policy, runtime contracts, implementation, external-system configuration, or the current operational context.

## 2. Scope

This standard applies to:

- repository governance, owner documents, standards, specifications, contracts, task records, work orders, and historical evidence;
- ChatGPT Project conversations, Project KB material, uploaded sources, and Work-mode analysis;
- local-only `.local-intake/`, `.local-output/`, and `.local-review/` artifacts;
- source-authority records stored under `docs/governance/source-authority/`;
- implementation and configuration evidence;
- Git branches, commits, pull requests, merge evidence, and deployment evidence;
- connected applications and external systems when a domain owner or runtime contract expressly designates them;
- observed runtime and operational evidence.

This standard does not assign new business doctrine, change any domain owner's policy, establish new external integrations, or authorize implementation.

## 3. Definitions

- **Authority:** An active rule, policy, contract, authorization, standard, schema, or requirement owned by an identified source.
- **System of record:** The designated source that owns the current authoritative record for a defined subject or operational fact.
- **Owner document:** The active repository document assigned to govern one defined subject or domain.
- **Durable repository authority:** Merged repository content whose status and authority boundary identify it as current and controlling for its subject.
- **Evidence:** Material that records a decision, input, observation, implementation state, validation, or historical event but does not independently create active authority.
- **Frozen source:** A byte-verified, immutable source whose identity and provenance are established. A frozen source is not promoted repository policy or execution authority unless a separate task expressly performs that promotion.
- **Promotion:** The governed process that converts approved evidence or a contract into the applicable repository owner document.
- **Current operational context:** The single implementation context named by `docs/system/step-current.md`.
- **Bounded task:** A current-schema Master Task Register record or permitted prompt-created task with exact scope, files, protections, validation, and exit criteria.
- **Work order:** Task-specific execution instructions subordinate to the active task and higher authority.
- **Observed runtime:** Verified evidence of what a system is currently doing. It is not automatically the approved rule for what the system should do.
- **Protected system:** A system or flow that may change only under explicit bounded authority and applicable owner/runtime-contract controls.

## 4. Authority hierarchy

For repository execution, apply this precedence:

1. `docs/system/project.md`
2. `docs/system/guardrails.md`
3. `docs/system/agent.md`
4. `docs/system/plan.md`
5. `docs/system/step-current.md`
6. `docs/system/master-task-register.md`
7. the active bounded task record or permitted prompt-created work order
8. active owner standards, locked specifications, and runtime contracts
9. implementation and source evidence
10. pull-request, validation, merge, deployment, and observed-runtime evidence
11. historical or superseded documents as lineage only
12. chat-derived context only after promotion into an authorized repository document or bounded work order

The ChatGPT Project KB and Project Instructions form the ChatGPT control layer. They guide dispatch but do not independently authorize Codex implementation or override repository authority.

The hierarchy answers execution-precedence questions. Within a domain, the active canonical owner answers the question assigned to that owner. Lower authority may add necessary implementation detail but may not weaken, contradict, or silently replace higher authority.

## 5. Document classes

Repository documents must be interpreted by their declared status, owner, authority boundary, implementation-authority posture, revision, and predecessor/successor relationship.

| Class | Function | Authority posture |
| --- | --- | --- |
| Core system governance | Defines repository-wide operating and execution rules. | Highest durable repository authority within its stated subject. |
| Current operational context | Defines the single current execution frame. | Controls current implementation context; does not authorize a task by itself. |
| Master Task Register record | Defines bounded task authorization and lifecycle. | Controls only the named task. |
| Work order | Directs execution of one authorized task. | Subordinate execution authority; cannot create its own task or policy. |
| Active owner standard or specification | Owns current rules for one subject or domain. | Controls within its declared boundary. |
| Runtime contract | Defines required runtime behavior and protected technical boundaries. | Controls the governed runtime subject. |
| Frozen source authority | Preserves verified source identity and provenance. | Source-identity authority only unless separately promoted. |
| Audit, reconciliation, validation, or decision evidence | Records findings, decisions, or verification. | Evidence only unless a bounded promotion changes the applicable owner document. |
| Catalog, manifest, index, or status board | Routes readers and inventories documents or state. | Supporting index/status authority only; never substitutes for the source owner. |
| Proposed, draft, candidate, historical, superseded, or reference document | Preserves planning or lineage. | Non-controlling unless explicitly promoted by current authority. |

File location alone does not confer authority. Repetition, citation frequency, tool availability, or implementation existence does not promote a document.

## 6. Systems of record

Systems of record are assigned by subject. No single tool owns every kind of truth.

| Subject | System of record | Boundary |
| --- | --- | --- |
| Repository governance and standards | Active merged owner documents in this repository | Durable policy and governance truth. |
| Current execution context | `docs/system/step-current.md` | Exactly one current context. |
| Task authorization and lifecycle | `docs/system/master-task-register.md` | Named bounded task state only. |
| Task execution instructions | Canonical issued work order for the active task | How one authorized task is performed. |
| Document discovery and inventory | `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md` | Supporting indexes; source documents control content and status. |
| Source identity | Frozen source plus its provenance/fingerprint record | Exact bytes and lineage only; no automatic policy or execution authority. |
| Runtime requirements | Applicable active runtime contract and domain owner | What the system is required to do. |
| Implementation state | Tracked source/configuration and merged Git history | What was implemented; does not override policy or runtime contracts. |
| Review and change lineage | GitHub branch, commit, pull request, review, and merge evidence | What changed and how it entered main; merge is not deployment authority. |
| Deployed or observed state | Verified deployment and observed-runtime evidence | What is currently present or occurring; mismatch creates reconciliation, not automatic policy change. |
| Live external operational records | The external system expressly designated by the applicable owner or runtime contract | Exact designation is domain-specific. Connector output is evidence unless the owner explicitly makes the connected system authoritative for that record. |
| ChatGPT Project context | ChatGPT Project conversations, sources, and instructions | Planning, interview, dispatch, and context support only. |
| Local intake, output, and review | Ignored `.local-*` directories | Evidence and staging only; never durable authority by location. |

Examples already designated by active domain authority remain in force, including locked HubSpot records and the protected `/api/lead-signal` CRM write boundary. This standard does not broaden or replace any domain-specific designation.

When no active owner designates a system of record for a subject, record the gap and stop affected work rather than selecting one by convenience.

## 7. Ownership and amendment authority

Each active subject should have one canonical owner document. An owner must state:

- its subject and authority boundary;
- status and revision;
- implementation-authority posture;
- predecessor and successor relationship;
- governing documents and subordinate consumers;
- amendment and validation requirements.

The operator owns business priority, policy approval, exceptions, task authorization, manual merge decisions, and deployment readiness.

Repository owner documents may be amended only through a bounded task that names the owner and exact files. ChatGPT or Work may prepare decisions and work orders. Codex may implement only the authorized amendment. GitHub records review and merge. None of these roles may silently redefine another owner's boundary.

## 8. Promotion lifecycle

Use this minimum lifecycle:

```text
Idea or evidence
→ authoritative source identified
→ intake and evidence review
→ operator decision
→ affected owner identified
→ bounded task and work order
→ dedicated branch and bounded change
→ validation
→ draft pull request
→ operator review and manual merge
→ active owner authority
→ separately authorized deployment when applicable
→ closeout and drift monitoring
```

A decision is not promoted merely because it appears in chat, an audit, a review file, a frozen source, a commit, or a pull request. Promotion is complete only when the applicable authorized owner document is merged with required status, lineage, and validation.

## 9. Intake and review artifact rules

`docs/system/WNYHS_LOCAL_STAGING_AND_FILE_TRANSFER_STANDARD_REV01.md` owns the local staging process.

- `.local-intake/` holds explicitly transferred task inputs.
- `.local-output/` holds generated, unapproved local outputs.
- `.local-review/` holds comparisons, decision packages, and review evidence.
- All three remain ignored by Git unless a separate bounded promotion explicitly copies an approved artifact to an authorized tracked destination.
- Their contents are evidence or staging only.
- Exact-byte tasks must use the actual local source bytes and independently verify identity.
- Customer data, credentials, backups, secrets, and private system details require separately authorized handling controls.

## 10. Chat-derived information rules

Chat, Project KB, uploaded sources, interviews, summaries, and Work-mode analysis may:

- discover requirements;
- identify evidence;
- prepare operator decisions;
- route workstreams;
- draft bounded tasks and work orders;
- review repository and pull-request evidence.

They may not:

- create durable repository authority by themselves;
- authorize implementation, merge, or deployment;
- override an active owner;
- invent missing strategy, priorities, scope, policy, or business rules;
- silently turn prior conversation into a requirement.

Chat-derived information becomes actionable only when the operator approves it and it is promoted into the correct repository owner, active task, or permitted bounded work order.

## 11. Repository authority rules

- Repository documents are the durable source of truth.
- Current operational context plus the active bounded task controls implementation.
- A work order is subordinate to the MTR, current context, core governance, owner standards, and runtime contracts.
- Catalog and manifest entries support discovery but do not override the indexed document.
- A merged change must preserve explicit status, authority boundary, revision, and lineage.
- A commit or PR does not create authority before merge.
- A merge does not authorize deployment.
- Implementation does not become governing policy merely because it exists.

## 12. Runtime and deployment authority rules

Runtime contracts own required behavior within their domains. Source code, configuration, infrastructure, workflows, and deployed components implement those requirements. Verified observed runtime records actual state.

When required behavior, implementation, and observed runtime disagree:

1. preserve evidence;
2. identify the active owner and runtime contract;
3. classify the mismatch as drift, defect, manual intervention, environmental behavior, customer-modified state, or unknown state;
4. stop protected or ambiguous work;
5. create a bounded reconciliation or correction task;
6. do not treat observed behavior as an automatic contract amendment.

Cloudflare, connected services, local tools, browser controls, or deployment access provide capability only. No automatic deployment authority exists. Deployment requires explicit bounded authorization and applicable validation.

## 13. Historical-document treatment

Historical Steps, audits, implementation records, completed work orders, superseded standards, and archived material remain preserved for lineage and evidence.

They do not override current authority unless `step-current.md` or another higher-authority promotion explicitly elevates them. A draft successor does not supersede an active predecessor. Material supersession must identify the predecessor, successor, scope, activation condition, preserved history, unresolved conflicts, and promotion evidence.

Do not delete historical material through routine reconciliation.

## 14. Conflict-resolution procedure

When sources conflict:

1. identify the exact question and affected subject;
2. apply the repository authority hierarchy;
3. identify the active canonical owner for that subject;
4. inspect status, revision, predecessor/successor lineage, task authority, and merge evidence;
5. distinguish policy, contract, implementation, and observed-state questions;
6. preserve the higher-authority rule;
7. document the lower or same-level conflict;
8. stop if the active owner cannot be determined;
9. require a separately bounded governance-reconciliation task when correction or operator judgment is needed.

Do not silently overwrite, average, merge, or choose between same-level authorities. Permission to use a tool is not authority to resolve the conflict.

## 15. Task and work-order authority

No implementation proceeds without a controlling task.

The task must comply with `docs/codex/CODEX_TASK_REGISTER_RULES.md`. Detailed execution and work-order construction are owned by `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`.

- Only an `ACTIVE` task or a permitted explicitly bounded prompt-created task is executable.
- One work order normally controls one task, branch, bounded commit, and draft PR.
- Codex may add the authorized prompt-created task to the MTR and later mark only that record `DONE` after validation.
- A work order cannot create its own authorization, revise policy, expand scope, or authorize adjacent tasks.
- Work, ChatGPT, Codex, skills, plugins, connectors, and external tools may not infer missing requirements from capability or context.

## 16. Git branch, commit, PR, merge, and deployment controls

- Start from clean synchronized `main`.
- Use a dedicated task branch.
- Stage only allowlisted files.
- Use bounded, accurate commits.
- Open a draft pull request with scope, validation, protected-system posture, and unresolved decisions.
- Do not push directly to `main`.
- Do not automatically merge, enable auto-merge, mark a draft ready, or deploy.
- The operator reviews and manually decides merge.
- Deployment is a separate authorized action and must not be inferred from merge.

An exception requires explicit higher-authority operator approval naming the exact action and boundary.

## 17. Protected-system boundaries

Unless expressly authorized by the active task and applicable owner/runtime contracts, preserve:

- customer-facing pages, claims, copy, navigation, routes, and funnels;
- Quote Review → Agreement Review → Payment → Payment Success/Cancel → Schedule;
- Precision Planner;
- HubSpot and CRM schema, properties, pipeline, workflows, and `/api/lead-signal`;
- `requestId`, lead attribution, and protected write paths;
- Stripe secrets, checkout/session semantics, webhook verification, and deposit authority;
- scheduling/calendar ownership and operator-confirmed booking;
- Resend, inbound email routing, and audit-copy behavior;
- APIs, runtime, Cloudflare, DNS, environment, infrastructure, deployment, and dependencies;
- Home Assistant, Tailscale, customer systems, customer accounts, customer-controlled state, customer data, credentials, and secrets.

This standard changes none of those systems.

## 18. Exception and waiver rules

Exceptions and waivers must:

- identify the exact governing rule;
- state the reason, scope, owner, effective date, duration or reconsideration trigger, and affected files/systems;
- be explicitly approved by the operator;
- be recorded in an authorized repository owner or bounded task;
- preserve protected-system and secret-safety requirements;
- avoid implying broader precedent.

Silence, urgency, repeated behavior, tool permissions, prior conversation, or implementation drift does not create an exception. An exception to one rule does not waive adjacent controls.

## 19. Validation requirements

Governance changes under this standard must validate, as applicable:

- controlling context and task authority;
- exact allowed files and changed-file count;
- owner path, status, revision, authority boundary, and lineage;
- no duplicate active owner for the same subject;
- no unauthorized task activation;
- internal paths and references;
- catalog and manifest consistency;
- Markdown formatting and `git diff --check`;
- no deletions or unexpected changes;
- no protected-system, runtime, customer-facing, configuration, dependency, or deployment changes;
- governed docs-only build skip when permitted;
- clean final working tree after bounded commit.

## 20. Effective date and revision controls

This standard is effective on merge to `main` under GOVFOUNDASOR001.

REV01 establishes the missing Authority and Systems of Record prerequisite identified by GOVFOUNDRECON001. It does not supersede `docs/system/project.md`, the canonical Codex execution standard, domain owners, or runtime contracts. Existing proposed `docs/governance/AUTHORITY-MAP-REV01.md` and `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md` remain proposed/reference material and do not become active through this task.

Future amendments require a separately authorized bounded governance task, explicit revision and predecessor/successor treatment, catalog/manifest updates when required, validation, a draft PR, and operator-controlled merge.

The frozen source at `docs/governance/source-authority/GOVFOUND002_APPROVED_PROMOTION_SPEC_REV01_1.md` remains unchanged. Frozen source authority and promoted repository authority are distinct.

GOVFOUND002 remains:

> **PROPOSED — NOT AUTHORIZED — DO NOT EXECUTE**
