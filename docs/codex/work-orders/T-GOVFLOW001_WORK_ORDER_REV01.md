# T-GOVFLOW001 — Owner Routing and Governance Lifecycle Precision — Work Order REV01

Status: PROMPT-CREATED / OPERATOR AUTHORIZED
Task ID: `T-GOVFLOW001`
Category: `GOV`
Primary workstream: Project Governance
Related workstreams: Codex Execution; Task Authorization; KAOS Governance Viewer Readiness
Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`
Customer-facing: No
Runtime impact: None
Implementation authority: Yes, only for the exact bounded Markdown scope defined below

## 1. Repository and controlling context

- Repository: `buffalonychris/wnyhomesecurity`
- Local repository: `C:\dev\wnyhomesecurity`
- Base branch: `main`
- Current merged baseline: PR `#561`, synchronized at commit `94e1f8269bc03c3f948876f1431f27d44900334b`
- Controlling context: `/docs/system/step-current.md`
- Task authorization basis: explicit operator approval after merge and local synchronization of PR #561.

This is one bounded governance-only task. It does not authorize a KAOS GUI, application code, website code, runtime changes, integrations, CRM, payment, scheduling, deployment, or external-system changes.

## 2. Objective

Refine the governance operating model established by `T-GOVEXEC001` by completing three tightly related governance improvements:

1. make an operator-approved Owner Routing Matrix a mandatory pre-implementation checkpoint for applicable work;
2. refine the Governance Viewer read model so current authority, document provenance, and last governance update are distinct and unambiguous concepts; and
3. tighten the Master Task Register lifecycle so execution state and publication/evidence state are not conflated, and CTR eligibility is derived from verified evidence rather than a premature `DONE` label.

The task must preserve the existing authority chain, current canonical owners, repository-first execution model, manual merge boundary, and weekly MTR-to-CTR stewardship model.

## 3. Read mode

`READ MODE: TARGETED`

Search exact IDs, headings, lifecycle labels, schema keys, owner declarations, and referenced paths first. Load only the sections needed to establish ownership and make the authorized changes.

Full-file reads are permitted only for an exact target file when section context is insufficient. Record the reason for each full read. Do not repeat the broad governance audit performed before PR #561.

## 4. Authority chain

Apply the current precedence exactly:

1. `/docs/system/project.md`
2. `/docs/system/guardrails.md`
3. `/docs/system/agent.md`
4. `/docs/system/plan.md`
5. `/docs/system/step-current.md`
6. `/docs/system/master-task-register.md`
7. this active bounded work order
8. locked standards, owner specifications, and runtime contracts
9. implementation/source evidence
10. historical documents as lineage only
11. chat-derived context only after promotion into repository authority

Higher authority controls. Same-level conflict is a stop condition.

## 5. Required precheck

Before editing:

1. confirm the working tree is clean;
2. confirm local `main` and `origin/main` both contain merged PR #561;
3. confirm no existing branch or open PR already owns `T-GOVFLOW001`;
4. confirm the current canonical owners named below still have the same authority posture;
5. confirm no equivalent owner-routing checkpoint, authority/provenance schema, or publication-state model already exists under another active owner;
6. create one fresh task branch from synchronized `origin/main`;
7. add only the missing `T-GOVFLOW001` task record if permitted by current prompt-created-task governance.

Stop if PR #561 is not present in the synchronized base or if an active equivalent owner already exists.

## 6. Required owner documents

### Required targeted reads

- `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `/docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `/docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`
- `/docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md`
- `/docs/system/master-task-register.md`
- `/docs/system/completed-task-register.md`
- `/docs/system/agent.md`
- `/docs/system/step-current.md`
- `/AGENTS.md`

### Reference-only provenance

- `/docs/codex/work-orders/T-GOVEXEC001_WORK_ORDER_REV01.md`
- PR #561 closeout and merged diff
- `/docs/governance/AUTHORITY-MAP-REV01.md`
- `/docs/DOCUMENT_CATALOG.md`
- `/docs/MARKDOWN_MANIFEST.md`

Reference-only inputs must not be edited unless explicitly moved into the allowed target list by a verified current registration rule.

## 7. Approved Owner Routing Matrix

This matrix is the operator-approved routing decision for this task. Codex must verify it against the synchronized repository before editing. Codex may narrow an action to `REFERENCE ONLY` when the current owner already satisfies the requirement, but it may not reroute, create a parallel owner, or add a target without stopping for operator approval.

| Approved concept | Current canonical owner | Exact target file | Exact section/action | Why this owner | Why not another plausible owner | Action | Conflict | Confidence |
|---|---|---|---|---|---|---|---|---|
| Mandatory Owner Routing Matrix checkpoint | Canonical Codex execution and work-order owner | `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` | Add a required pre-implementation Owner Routing Matrix checkpoint and canonical matrix fields; update work-order structure/template | This file governs Codex execution, work-order construction, prechecks, and stop conditions | Not `project.md`: this is execution methodology, not project authority. Not `agent.md`: that file owns steward duties, while the detailed checkpoint mechanics belong to the execution standard | MODIFY | NO | HIGH |
| Architecture Steward responsibility to prepare and secure approval of the matrix | ChatGPT/Architecture Steward behavior owner | `docs/system/agent.md` | Add concise duty: prepare matrix before applicable implementation and obtain operator approval before final work-order dispatch | This file owns ChatGPT operating behavior | Not the Codex standard alone because the matrix must be completed before Codex implementation begins | MODIFY | NO | HIGH |
| Governance-level matrix review boundary | Repository governance architecture owner | `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md` | Add lifecycle placement and proportionality rule for compact vs detailed matrices | This file owns repository governance architecture and stewardship flow | Not MTR: the MTR records tasks, not the full architectural method | MODIFY | NO | HIGH |
| Viewer authority identity | Governance Viewer read-model owner | `docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md` | Replace ambiguous owner/authority representation with explicit authority fields | This file is the canonical machine-readable viewer contract | Not Authority Map: the map describes routing; it does not own viewer schema | MODIFY | NO | HIGH |
| Viewer provenance | Governance Viewer read-model owner | `docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md` | Replace `active_task_reference` and generic `work_order_reference` with provenance fields that remain historically true | Provenance is read-model metadata | Not MTR: current task state should be derived from MTR, not hard-coded into each governance record | MODIFY | NO | HIGH |
| Viewer last governance update | Governance Viewer read-model owner | `docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md` | Add distinct last-update task, work order, date, and revision fields | This is document-level viewer metadata | Not source documents: source headers should not be rewritten solely to support viewer display | MODIFY | NO | HIGH |
| Formal execution status vocabulary | Task-register schema owner | `docs/codex/CODEX_TASK_REGISTER_RULES.md` | Clarify execution-status lifecycle and separate it from publication/evidence state | This file owns task schema, taxonomy, lifecycle, and gating | Not Codex execution standard: it references task state but does not own the status taxonomy | MODIFY | NO | HIGH |
| Publication/evidence state model | Task-register schema owner with live-board implementation | `docs/codex/CODEX_TASK_REGISTER_RULES.md`; `docs/system/master-task-register.md` | Define publication/evidence fields and allowed values; update live-board header/rules | Task rules own schema; MTR is the operational record surface | Not CTR: CTR receives only fully evidenced history after the lifecycle is complete | MODIFY | NO | HIGH |
| CTR eligibility and weekly archival gate | Completed-history owner and repository architecture owner | `docs/system/completed-task-register.md`; `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md` | Align eligibility with verified merge, deployment applicability/status, main sync, and non-duplicate migration | These files own completed history and MTR/CTR relationship | Not Codex closeout: Codex cannot prove future operator merge, deployment, or main-sync events during its execution run | MODIFY | NO | HIGH |
| Task record and exact work authorization | Master Task Register | `docs/system/master-task-register.md` | Add one bounded `T-GOVFLOW001` record and update only that record during execution | The MTR is the live dispatch board | Not a separate task document: the repository-owned work order already supplies detailed execution instructions | MODIFY | NO | HIGH |
| Catalog/manifest registration | Existing repository indexes | `docs/DOCUMENT_CATALOG.md`; `docs/MARKDOWN_MANIFEST.md` | Update only if required by current registration rules for an amended canonical document or new revision | These files own repository discovery/indexing | Do not regenerate or broadly rewrite them during this task | CONDITIONAL MODIFY | NO | MEDIUM |

### Operator approval checkpoint rule being implemented

For future applicable tasks, the sequence becomes:

`Discussion -> GIA when required -> Draft Work Order -> Owner Routing Matrix -> Operator Approval -> Final Repository Work Order -> Codex Implementation`

The approved matrix must exist before Codex implementation begins. Codex may verify the matrix but may not originate unresolved business or architectural ownership decisions while editing.

## 8. Required work

### 8.1 Mandatory Owner Routing Matrix checkpoint

Amend the canonical execution standard so applicable work orders include an Owner Routing Matrix before implementation.

The matrix must contain at minimum:

- approved concept;
- current canonical owner;
- exact target file;
- exact section or target behavior;
- action: `MODIFY`, `CREATE`, `SUPERSEDE`, `REFERENCE ONLY`, or `STOP`;
- reason the selected owner is correct;
- why the concept does not belong in another plausible owner;
- authority conflict: `YES` or `NO`;
- confidence: `HIGH`, `MEDIUM`, or `LOW`.

Rules:

- `CONFLICT: YES` requires stop and reconciliation before implementation.
- `CONFIDENCE: LOW` requires operator review and explicit approval.
- A new owner may be created only after a duplicate-owner search and a documented reason an existing owner cannot absorb the concept.
- Codex may not silently change an operator-approved routing decision.
- A newly discovered target outside the approved matrix requires a work-order revision.
- Small, single-owner, non-governance tasks may use a compact one-row matrix.
- Cross-cutting, governance, architecture, protected-system, or multi-owner tasks require a detailed matrix.

Amend `docs/system/agent.md` only with the concise steward duty. Do not duplicate the full matrix specification there.

### 8.2 Governance Viewer schema refinement

Amend the canonical YAML contract to separate three concepts.

#### A. Current authority

Each record must identify:

- `authority_level`
- `is_canonical_owner`
- `authority_owner`
- `authority_source_path`
- `status`
- `controls`
- `does_not_control`
- `upstream_authority`

Current authority must reflect the source document and authority chain. It must not be inferred from the task that last edited the record.

#### B. Provenance

Each record must identify the durable origin/evidence for its inclusion in the read model:

- `provenance_task_reference`
- `provenance_work_order_reference`
- `provenance_pr_reference`

Provenance fields are historical and must remain true after the task closes.

#### C. Last governance update

Each record must identify:

- `last_governance_update_task`
- `last_governance_update_work_order`
- `last_governance_update_pr`
- `last_governance_update_date`
- `last_reviewed`
- `effective_revision`

Do not use `active_task_reference` in a static document record. Current active task information must be derived dynamically from the MTR by a future viewer implementation.

Required schema posture:

- increment the schema version from `REV01` to `REV02` within the document, or create a `REV02` successor only if current document-version governance requires immutable revision files;
- preserve all 11 currently governed domains unless repository evidence requires a bounded correction;
- keep the viewer read-only and non-authorizing;
- validate every required field, enum, path, document ID, and authority relationship;
- do not implement parser, UI, API, database, ingestion, or runtime code.

### 8.3 MTR lifecycle and publication evidence model

Do not overload one status field with facts that occur on different control surfaces.

#### Execution Status

Retain one primary execution status controlled by the task-register schema. The preferred values remain:

- `BACKLOG`
- `READY`
- `ACTIVE`
- `BLOCKED`
- `DONE`
- `ARCHIVED`

Clarify:

- `DONE` means the bounded executor completed the authorized work, task validation passed, and the required draft PR/closeout delivery exists.
- `DONE` does not mean merged, deployed, main-synchronized, or CTR-eligible.
- `ARCHIVED` means the operative MTR record has been safely transferred or reduced to a pointer under the weekly stewardship process.

#### Publication/Evidence State

Add a separate required or conditionally required field owned by the task-register schema. Use a controlled progression capable of representing:

- `NOT_STARTED`
- `VALIDATION_COMPLETE`
- `DRAFT_PR_OPEN`
- `MERGED`
- `DEPLOYMENT_NOT_APPLICABLE`
- `DEPLOYMENT_PENDING`
- `DEPLOYMENT_VERIFIED`
- `MAIN_SYNCED`
- `CTR_ELIGIBLE`
- `ARCHIVED_TO_CTR`

Codex may set only states it can verify during its run. In the normal draft-PR workflow, Codex may finish with:

- Execution Status: `DONE`
- Publication/Evidence State: `DRAFT_PR_OPEN`

The operator or a later bounded stewardship task records merge, deployment applicability/status, main synchronization, CTR eligibility, and archival.

Each task record must preserve or support these evidence fields:

- draft PR URL/number;
- merge commit or merge evidence;
- deployment applicability;
- deployment status/evidence;
- main-sync status/evidence;
- CTR eligibility;
- CTR record/pointer after archival.

Do not rewrite every historical task record in this task. Update the schema/rules, the MTR governance header, the new task record, and any small example/template section only. Historical normalization requires separate bounded work.

### 8.4 CTR alignment

Update the CTR eligibility language so a task is archived only after:

1. execution is `DONE`;
2. draft PR and merge evidence exist;
3. deployment is explicitly `NOT_APPLICABLE` or required deployment is `VERIFIED`;
4. `main` synchronization is evidenced;
5. the task is marked `CTR_ELIGIBLE`;
6. duplicate checks pass; and
7. the minimal CTR record can be created without losing proof-of-work identifiers.

The CTR remains historical evidence and never authorizes work.

### 8.5 Registration

Update catalog/manifest entries only when current repository rules require them. Do not perform a full catalog or manifest regeneration unless a higher current owner explicitly requires it.

## 9. Allowed scope and target files

### Authorized modifications

- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/system/agent.md`
- `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`
- `docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md`, or a correctly governed REV02 successor if immutable revision rules require it
- `docs/system/master-task-register.md`
- `docs/system/completed-task-register.md`

### Conditional registration modifications

- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`

### New files

No new owner document is expected. A REV02 successor for the viewer read model is allowed only if required by verified document-version governance; otherwise amend the existing canonical owner in place.

## 10. Forbidden scope

- No KAOS Governance Viewer UI.
- No application source, routes, components, API, database, ingestion, parser, or schema migration code.
- No website or public funnel changes.
- No HubSpot, CRM, `/api/lead-signal`, Stripe, payment, Klarna, scheduling, Google Workspace, Resend, email, Cloudflare, DNS, environment, analytics, secrets, or production changes.
- No deployment.
- No bulk MTR-to-CTR migration.
- No historical task normalization beyond the exact new task record and governance/schema headers authorized here.
- No deletion of historical documents.
- No parallel execution, task-register, read-model, or completed-history owner.
- No governance for unused OpenAI capabilities.
- No adjacent task activation or reprioritization.
- No automatic merge, auto-merge, ready-for-review transition, or deployment approval.

## 11. Protected systems

Confirm unchanged:

- `/api/lead-signal`
- HubSpot schemas, properties, pipelines, IDs, and writes
- Stripe checkout, secrets, webhook verification, deposit and payment authority
- scheduling/calendar authority
- Resend/email runtime
- `requestId` and attribution lifecycle
- quote/agreement/payment/schedule chain
- public routes, claims, SEO, sitemap, and robots
- dependencies and package-lock
- Cloudflare configuration and deployments
- customer data, environment values, and secrets

## 12. Change posture

Default posture: additive and surgical.

Allowed replacement is limited to schema-key renaming within the Governance Viewer read-model contract when necessary to eliminate ambiguity. Preserve lineage and explain the REV01-to-REV02 compatibility impact.

No destructive deletion is authorized.

## 13. Validation

Validation tier: `GOVERNANCE`

Required checks:

1. clean and synchronized base confirmation;
2. exact changed-file whitelist;
3. Markdown-only file-type check;
4. `git diff --check` and staged equivalent;
5. no unexpected deletions;
6. exact `T-GOVFLOW001` task-record count of one;
7. Owner Routing Matrix specification contains all required fields and stop rules;
8. no parallel execution/work-order owner;
9. no parallel task-status/lifecycle owner;
10. viewer YAML parses successfully;
11. every viewer record contains all required authority, provenance, last-update, readiness, identity, controls, and dependency fields;
12. no `active_task_reference` remains in static viewer records;
13. all document IDs are unique;
14. all source paths exist;
15. readiness enums remain valid;
16. no canonical upstream ownership cycle exists;
17. publication/evidence values are controlled and documented once by the task-register owner;
18. `DONE` is not defined as proof of merge, deployment, main sync, or CTR eligibility;
19. CTR eligibility requires explicit deployment applicability/status and main-sync evidence;
20. no historical MTR records were bulk rewritten or migrated;
21. protected-system path and diff audit;
22. governed docs-only build decision.

Do not run `npm run build` unless source/build configuration changes or a higher authority requires it. Otherwise record `Governed docs-only build skip`.

## 14. Git and delivery

- Branch: `codex/t-govflow001-owner-routing-lifecycle-precision`
- Commit message: `docs(governance): add owner routing checkpoint and lifecycle precision`
- Push the exact task branch.
- Open one draft PR to `main`.
- Do not merge.
- Do not enable auto-merge.
- Do not mark ready for review.
- Do not deploy.

The PR description must include:

- objective;
- approved Owner Routing Matrix;
- exact files changed;
- schema migration summary;
- lifecycle model summary;
- validation and build decision;
- protected-system confirmation;
- unresolved risks;
- no-merge confirmation.

## 15. Required closeout

Return:

- repository, branch, commit SHA, draft PR URL/number, base, and draft state;
- controlling context, task/category/workstreams, and read mode;
- exact files read, essential reads, full-read reasons, and unnecessary reads;
- exact files created/modified and intentionally untouched;
- final Owner Routing Matrix and any verified no-change decisions;
- viewer schema version and field changes;
- execution-status and publication/evidence-state rules;
- validation commands and results;
- docs-only build decision;
- protected-system confirmation;
- no-merge/no-deployment confirmation;
- unresolved risks and follow-up candidates without activation;
- complete Token Utilization / Recursive Self Improvement report required by the canonical execution standard.

The RSI section must specifically assess whether the approved pre-work and Owner Routing Matrix reduced Codex search, architectural inference, duplicate-owner risk, and context load.

## 16. Stop conditions

Stop before editing or publication when:

- the synchronized base does not contain merged PR #561;
- a target owner is no longer canonical;
- an equivalent active owner or schema already exists;
- the approved Owner Routing Matrix conflicts with current higher authority;
- implementation requires a file outside the approved matrix/allowlist;
- current document-version rules require a successor strategy not resolved by this work order;
- lifecycle changes would require bulk historical rewriting;
- viewer schema changes require application/parser implementation;
- protected-system changes are implicated;
- repository integrity, secret safety, or validation cannot be established.

State the exact blocker and request a work-order revision. Do not infer permission.

## 17. Exit criteria

The task is complete only when:

1. the mandatory Owner Routing Matrix checkpoint is durable in the correct current owners;
2. the Architecture Steward must prepare the matrix and obtain operator approval before applicable implementation;
3. the canonical work-order structure includes the matrix;
4. the viewer contract distinctly represents current authority, provenance, and last governance update;
5. static viewer records do not hard-code a permanently active task;
6. execution status is distinct from publication/evidence state;
7. `DONE` is not treated as merged, deployed, synchronized, or archive-eligible;
8. CTR eligibility is objectively evidence-gated;
9. no historical bulk migration or normalization occurred;
10. exact governance validation passes;
11. protected systems remain unchanged;
12. one draft PR is open;
13. no merge, ready transition, auto-merge, or deployment occurred; and
14. the required closeout and RSI are delivered.

## 18. Minimal Codex dispatch prompt

```text
Execute T-GOVFLOW001 using:

docs/codex/work-orders/T-GOVFLOW001_WORK_ORDER_REV01.md

Follow the approved Owner Routing Matrix and current authority chain exactly.
Use targeted reads.
Do not expand scope.
Open one draft PR only.
Do not merge, mark ready, or deploy.
Return the required closeout, token/context report, and RSI.
```
