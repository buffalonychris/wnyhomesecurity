# HOOKCAT001 KAOS Hook Catalog REV01

Status: Active KAOS foundation catalog
Task ID: HOOKCAT001
Customer-facing: No
Implementation authority: No

## 1. Purpose

The KAOS Hook Catalog is the governed list of candidate KAOS hooks.

This catalog does not implement hooks. Catalog records are not automation authority. Each hook remains `Candidate` until promoted through a separate bounded task with explicit owner documents, input/output contracts, trust review, validation, and operator review where required.

Hooks should reduce manual reconciliation and operator overhead. They must not create unnecessary administrative burden, automatic task churn, or parallel authority outside the repository governance chain.

## 2. Hook Catalog Definition

The Hook Catalog is:

> A governed registry of candidate hook objects that map Codex lifecycle events and WNYHS workflow events to narrowly scoped evaluators, candidate outputs, trust requirements, protected-system rules, and future implementation readiness.

Catalog entries are candidate KAOS objects. They may describe possible subscriptions, purpose, inputs, outputs, review posture, owner documents, and first promotion recommendations. They do not create scripts, configuration, runtime behavior, automation, task activation, deployment approval, or protected-system authority.

## 3. Relationship To HOOK001

`HOOK001_KAOS_HOOK_SUBSCRIPTION_ARCHITECTURE_REV01.md` defines the hook architecture.

HOOKCAT001 catalogs specific candidate hooks.

Future hook implementation tasks must reference both HOOK001 and the relevant HOOKCAT001 record. No hook may be implemented unless it has a catalog record or an explicit bounded exception approved by the active task and aligned with higher-authority governance.

## 4. Hook Record Schema

Every hook catalog record must include:

| Field | Meaning |
| --- | --- |
| `hook_id` | Stable hook identifier. |
| `hook_name` | Human-readable hook name. |
| `kaos_object_type` | Object type, normally `Automation` until a later schema revision creates a hook object type. |
| `status` | Hook lifecycle status. Seed entries use `Candidate`. |
| `hook_category` | Hook category from HOOK001 or a later bounded revision. |
| `subscribed_codex_events` | Codex lifecycle events the hook may later observe. |
| `mapped_wnyhs_events` | WNYHS workflow events from EVENT001 that the hook maps to. |
| `purpose` | Narrow reason the hook exists. |
| `trigger_conditions` | Conditions that make the hook relevant. |
| `inputs` | Explicit evidence-based inputs. |
| `allowed_outputs` | Candidate outputs the hook may produce after implementation. |
| `prohibited_outputs` | Outputs the hook must never produce. |
| `priority_level` | Informational, Conditional, Required Review, Protected-System Review, or Blocking Guardrail. |
| `protected_system_sensitivity` | Low, Medium, High, or Protected-System Review Required. |
| `protected_systems_touched` | Protected systems evaluated or touched, or `None`. |
| `owner_document` | Current or candidate owner document. |
| `owner_document_status` | Active, candidate, missing, or needs decision. |
| `related_kaos_objects` | Related KAOS records or owner docs. |
| `related_decisions` | Decision records or candidates. |
| `related_processes` | Business process records or candidates. |
| `related_rsi_candidates` | RSI records or candidates. |
| `related_tasks` | Related Master Task Register IDs or future candidate tasks. |
| `implementation_readiness` | Current readiness for script/config design. |
| `trust_review_required` | Yes/No, with reason when Yes. |
| `validation_required` | Required validation before promotion or implementation. |
| `success_metric` | Observable sign that the hook reduced risk or overhead. |
| `failure_modes` | Known failure, noise, stale-context, or false-positive modes. |
| `maturity_level` | H-L0 through H-L7. |
| `first_promotion_recommendation` | First bounded step if the hook is promoted later. |
| `notes` | Scope notes, assumptions, and unresolved risks. |

Unknown values must be marked `Unknown`, not invented.

## 5. Hook Lifecycle

Hook lifecycle stages:

- Candidate
- Needs Owner Document
- Input / Output Contract Needed
- Script Design Needed
- Implementation Task Candidate
- Implemented
- Trusted
- Validated
- Disabled
- Superseded
- Rejected

Lifecycle state does not authorize implementation by itself. Trust is required before non-managed hooks can run. Hook changes require renewed trust review. Hooks that evaluate or affect protected systems need stricter review before implementation and before any later trust renewal.

## 6. Hook Maturity Levels

| Level | Name | Meaning |
| --- | --- | --- |
| H-L0 | Concept only | Hook idea exists without durable owner record. |
| H-L1 | Candidate documented | Hook is named with candidate purpose and status. |
| H-L2 | Owner document identified | Owner document and authority boundary are identified. |
| H-L3 | Input/output contract defined | Inputs, outputs, prohibited outputs, trust, and failure handling are specified. |
| H-L4 | Script design approved | Implementation design is approved through a bounded task. |
| H-L5 | Implemented through bounded task | Hook code/config exists only after explicit implementation authorization. |
| H-L6 | Trusted and validated | Hook has trust review, validation evidence, and safe failure behavior. |
| H-L7 | Automation-ready / self-governing | Hook can support governed automation under mature owner docs and review rules. |

Maturity is diagnostic, not blocking. It helps identify readiness and risk without turning every candidate into overhead.

## 7. Hook Priority Levels

| Level | Meaning |
| --- | --- |
| Informational | Helpful context or low-risk observation. |
| Conditional | Review recommended when specific conditions are met. |
| Required Review | Human/operator review is required before promotion or follow-up. |
| Protected-System Review | Protected systems, claims, secrets, runtime, deployment, or financial behavior may be affected. |
| Blocking Guardrail | Clear unauthorized protected-system, destructive, secret-risk, or authority violation is detected. |

Most hooks should be informational or conditional. Blocking hooks must be rare and narrowly scoped. Hooks must reduce operator effort rather than increase it.

## 8. Candidate Hook Catalog

These records are candidate-only. They do not implement hooks, configure hooks, activate automation, or change runtime behavior.

| hook_id | hook_name | status | hook_category | subscribed_codex_events | mapped_wnyhs_events | purpose | trigger_conditions | inputs | allowed_outputs | prohibited_outputs | priority_level | protected_system_sensitivity | owner_document | implementation_readiness | first_promotion_recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `HOOK-KAOS-INTAKE001` | KAOS Intake Closeout Review | Candidate | KAOS Intake Hook | `Stop` | `TASK_COMPLETED_BY_CODEX`, `KAOS_INTAKE_REQUIRED` | Identify candidate Knowledge Objects, Decisions, Business Processes, Relationships, Runtime Contracts, Standards, Specs, Artifacts, Automations, or RSI entries after a bounded task. | Task completed and closeout summary exists. | Codex summary, changed files, validation results, task ID, PR URL, protected-system confirmation. | Candidate KAOS intake, candidate relationship update, candidate decision record, candidate process candidate, candidate task recommendation. | Automatic promotion, task activation, owner-document rewrite, implementation, broad docs rewrite. | Conditional | Medium; High when protected systems are touched. | `/docs/kaos/KAOS001_INTAKE_AND_PROMOTION_WORKFLOW_REV01.md` and this catalog. | H-L1 Candidate documented. | Define compact candidate-output template and owner review path before script design. |
| `HOOK-RSI001` | RSI Closeout Review | Candidate | RSI Review Hook | `Stop` | `CODEX_SUMMARY_RECEIVED`, `RSI_CANDIDATE_IDENTIFIED` | Capture repeated friction, missed validation, context waste, workflow inefficiency, or operator overhead candidates. | Closeout includes friction, repeated manual work, validation gap, or prompt-efficiency note. | Closeout summary, validation gaps, context-efficiency notes, operator feedback. | Candidate RSI record, candidate task recommendation, prompt-pattern recommendation. | Automatic workflow change, hook implementation, task activation, protected-system modification. | Informational | Medium; High if improvement affects protected systems. | `/docs/kaos/KAOS001_RECURSIVE_SELF_IMPROVEMENT_REGISTER_REV01.md` | H-L1 Candidate documented. | Define RSI output schema and duplicate check against existing RSI candidates. |
| `HOOK-CONTEXT001` | Context Efficiency Review | Candidate | Context Efficiency Hook | `Stop`, `PostCompact` | `CODEX_SUMMARY_RECEIVED` | Capture redundant context loads and shorter future prompt patterns. | Task closeout or context compaction reports loaded docs, broad searches, or prompt bloat. | Loaded-doc list, searches performed, compaction notes, prompt shape, files inspected. | Context-efficiency warning, shorter future prompt pattern, candidate RSI record. | Automatic governance rewrite, automatic prompt rewriting, task activation. | Informational | Low. | `/docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md` and RSI Register. | H-L1 Candidate documented. | Define compact closeout schema and false-positive handling. |
| `HOOK-PROTECTED001` | Protected System Guardrail | Candidate | Protected System Guardrail Hook | `PreToolUse`, `PermissionRequest`, `PostToolUse` | `TASK_STARTED`, `EXCEPTION_REVIEW_REQUIRED` | Flag or block risky commands, file targets, or elevated actions that touch protected systems without authority. | Proposed action touches protected paths, secrets, dependencies, destructive git, external services, runtime/API, payment, CRM, scheduling, or deployment config. | Proposed command, file paths, permission request, changed-file list, active task scope, protected-system list. | Protected-system warning, operator decision request, validation warning, supported block. | Secret exposure, direct protected-system change, automatic approval, automatic task activation. | Blocking Guardrail | Protected-System Review Required. | `/docs/codex/CODEX_RUN_CONTRACT.md`, `/docs/system/guardrails.md`, protected runtime contracts. | H-L1 Candidate documented; H-L3 needed before design. | Promote only after strict input/output contract, trust review, and supported block semantics are defined. |
| `HOOK-CLAIMS001` | Claims Guardrail Review | Candidate | Post-Tool Review Hook | `PostToolUse`, `Stop` | `CODEX_SUMMARY_RECEIVED`, `EXCEPTION_REVIEW_REQUIRED` | Flag customer-facing copy changes that may violate claims guardrails or approved public-copy posture. | Changed public-copy surfaces or closeout references claim-sensitive language. | Changed-file list, diffs, allowed public-copy owner docs, guardrails, closeout summary. | Claims warning, operator review request, candidate claims clarification. | Automatic public-copy rewrite, public-copy approval, task activation. | Required Review | High for public/customer-facing content. | `/docs/system/guardrails.md` and public funnel standards. | H-L1 Candidate documented; H-L3 needed before design. | Define scan terms, internal-doc exceptions, and review routing before implementation. |
| `HOOK-SITEQA001` | Deployment QA Routing | Candidate | Deployment QA Hook | None yet; future deployment event subscriber | `DEPLOYMENT_COMPLETED`, `DEPLOYMENT_VERIFIED` | Route future browser-rendered site QA evidence after deployment events without installing tooling here. | Deployment event exists and task requires browser-rendered validation. | Deployment URL, commit SHA, route list, version badge expectation, QA requirements. | QA task candidate, validation warning, RSI candidate, operator decision request. | Playwright installation, Sites configuration, deployment approval, automatic release approval. | Conditional | Medium; High if deployment config or protected routes are implicated. | Future SITE001 / SITEQA001 owner docs. | H-L0 Concept only; owner doc needed. | Create SITE001 standard before implementation. |
| `HOOK-MTR001` | Task Register Review | Candidate | Task Register Review Hook | `SessionStart`, `Stop` | `TASK_STARTED`, `TASK_COMPLETED_BY_CODEX`, `TASK_CLOSED` | Suggest task-register updates while avoiding excessive register admin. | Active task scope or closeout indicates missing status, completion note, validation, or future task candidate. | Task ID, current status, closeout summary, validation results, changed docs. | Candidate register update, missing completion-note warning, candidate task recommendation. | Automatic task activation, automatic DONE status, backlog completion, unrelated status changes. | Conditional | Medium. | `/docs/system/master-task-register.md` and `/docs/codex/CODEX_TASK_REGISTER_RULES.md` | H-L1 Candidate documented. | Keep advisory until task-register automation is separately authorized. |
| `HOOK-KB001` | Project KB Alignment Review | Candidate | Project KB Alignment Hook | `SessionStart` | `MONTHLY_KAOS_REVIEW_COMPLETED` | Flag drift between project instructions and repository authority. | Project KB or prompt context differs from current repo governance or owner docs. | Project instructions, repo governance pointers, recent changes, current context. | Candidate KB alignment note, operator review request, RSI candidate. | Automatic Project KB rewrite, repo authority change, task activation. | Informational | Medium; High if protected-system rules are implicated. | Future Project KB alignment owner doc. | H-L0 Concept only; owner doc needed. | Route through monthly review or separate KB alignment task. |
| `HOOK-RELATIONSHIP001` | Relationship / Dependency Review | Candidate | Relationship Review Hook | `Stop` | `RELATIONSHIP_UPDATE_REQUIRED`, `TASK_COMPLETED_BY_CODEX` | Identify relationship or dependency updates that may need review after a task. | New owner doc, task, standard, runtime contract, process, decision, or artifact changes relationships. | Changed docs, task scope, owner docs, validation evidence, related objects. | Candidate relationship update, affected-object warning, candidate task recommendation. | Automatic graph rewrite, automatic dependency promotion, task activation. | Conditional | Medium; High if protected systems are implicated. | `/docs/kaos/KAOS001_RELATIONSHIP_AND_DEPENDENCY_MODEL_REV01.md` | H-L1 Candidate documented. | Define relationship output template and existing-object check. |
| `HOOK-DECISION001` | Decision Candidate Review | Candidate | Decision Review Hook | `Stop` | `DECISION_APPROVED_IN_CHAT`, `DECISION_RECONSIDERATION_REQUIRED`, `TASK_COMPLETED_BY_CODEX` | Identify candidate decisions, reconsideration needs, or owner-doc decision gaps. | Closeout or task evidence includes a deliberate choice, new control posture, or conflict with existing decision. | Closeout summary, changed docs, operator decision notes, owner docs. | Candidate decision record, reconsideration warning, operator decision request. | Automatic decision promotion, owner-doc rewrite, task activation. | Conditional | Medium; High if protected decisions are implicated. | `/docs/kaos/KAOS001_DECISION_REGISTER_REV01.md` | H-L1 Candidate documented. | Define decision candidate template and duplicate/reconsideration check. |
| `HOOK-BPROC001` | Business Process Candidate Review | Candidate | Business Process Review Hook | `Stop` | `TASK_COMPLETED_BY_CODEX`, `KAOS_INTAKE_REQUIRED` | Identify candidate business processes, process maturity gaps, or owner-doc gaps. | Task evidence describes repeatable work across people, systems, artifacts, or validation. | Closeout summary, changed docs, process references, affected systems. | Candidate business process record, process owner-doc warning, RSI candidate. | Automatic workflow change, process activation, automation implementation. | Conditional | Medium; High if process touches protected systems. | `/docs/kaos/KAOS001_BUSINESS_PROCESS_REGISTRY_REV01.md` | H-L1 Candidate documented. | Define process candidate output and owner-doc review rules. |
| `HOOK-EVIDENCE001` | Evidence / Validation Capture Review | Candidate | Post-Tool Review Hook | `PostToolUse`, `Stop` | `TASK_COMPLETED_BY_CODEX`, `CODEX_SUMMARY_RECEIVED` | Identify missing validation evidence, weak closeout proof, or durable evidence worth preserving. | Validation is required, failed, skipped, or produces reusable evidence. | Validation commands, outputs, changed files, task exit criteria, PR summary. | Validation warning, evidence capture recommendation, RSI candidate. | Automatic validation pass, PR approval, task closure, deployment approval. | Conditional | Medium; High if protected-system validation is implicated. | EVENT001, Codex run contract, relevant owner docs. | H-L1 Candidate documented. | Define validation-evidence checklist before implementation. |
| `HOOK-EXCEPTION001` | Exception / Incident Review | Candidate | Exception / Incident Hook | `PostToolUse`, `Stop`, `PermissionRequest` | `INCIDENT_IDENTIFIED`, `EXCEPTION_REVIEW_REQUIRED` | Route failures, conflicts, validation exceptions, scope conflicts, or protected-system concerns for manual review. | Command failure, validation failure, governance conflict, unexpected file change, or protected-system ambiguity. | Error output, changed files, task scope, validation result, protected-system list. | Exception warning, operator decision request, incident candidate, task recommendation. | Automatic fix, automatic revert, task activation, protected-system modification. | Required Review | High when protected systems, secrets, destructive actions, or customer-impacting behavior are involved. | EVENT001, Codex run contract, guardrails, relevant owner docs. | H-L1 Candidate documented. | Define severity levels and safe default behavior before script design. |

## 9. Hook Input / Output Contract Rules

Inputs must be explicit and evidence-based. Hooks must consume task scope, repository paths, event names, validation artifacts, changed-file lists, closeout summaries, owner documents, and protected-system boundaries only when those inputs are available or marked `Unknown`.

Allowed outputs may include:

- additional developer context
- warning message
- candidate KAOS intake
- candidate RSI record
- candidate decision record
- candidate relationship update
- candidate business process candidate
- candidate task recommendation
- validation warning
- protected-system warning
- operator decision request

Prohibited outputs include:

- direct implementation authority
- automatic task activation
- automatic PR merge
- automatic deployment approval
- automatic owner-document rewrite
- automatic deletion/consolidation
- automatic protected-system modification
- automatic broad docs rewrite

## 10. Trust / Review Rules

Future hook implementation must follow these rules:

- Non-managed command hooks require review and trust before execution in normal WNYHS workflow.
- Project-local hooks require trusted project `.codex/` configuration before use.
- Changed hook command bodies, scripts, or hashes require renewed review.
- Plugin-bundled hooks require provenance, scope, and owner-doc review before use.
- Managed hooks may become a future path, but they are not implemented or assumed by this catalog.
- Safe default behavior is to warn, decline, or fall back to manual review rather than execute untrusted hook code.
- `--dangerously-bypass-hook-trust` is not part of normal WNYHS operations because it bypasses the review boundary that protects repository authority, protected systems, and operator control.

## 11. Protected-System Hook Rules

Hooks affecting or evaluating these require stricter rules:

- Stripe/payment/deposits/refunds
- scheduling
- HubSpot/CRM lifecycle
- customer-facing claims
- warranty/support commitments
- installed asset lifecycle
- dashboard/customer validation
- procurement/inventory financial behavior
- runtime/API behavior
- legal/compliance-sensitive artifacts
- Cloudflare deployment configuration
- secrets/environment variables
- dependencies/package-lock
- destructive git operations

Stricter rules mean the hook needs a defined owner document, input/output contract, trust posture, validation expectations, and explicit operator review path before implementation.

## 12. First Implementation Candidates

Safest later implementation candidates:

- `HOOK-CONTEXT001`
- `HOOK-RSI001`
- `HOOK-KAOS-INTAKE001`

These are recommended first because they are primarily informational or candidate-output hooks, can reduce repeated closeout overhead, and can be designed without touching runtime behavior.

Protected or blocking hooks such as `HOOK-PROTECTED001` and `HOOK-CLAIMS001` require stricter design and should not be first implementation candidates unless explicitly authorized by a bounded task.

## 13. Prohibited Behavior

This catalog must not:

- implement hooks
- create hooks.json
- create config.toml hook entries
- write hook scripts
- install Playwright
- configure Sites
- change source/runtime files
- change site behavior
- automatically create tasks
- automatically promote knowledge to authority
- automatically merge PRs
- automatically approve deployments
- treat every hook finding as a blocker
- create excessive hook-admin overhead
- mark future backlog tasks DONE

## 14. Future Use

This catalog supports future bounded work for:

- CODEX001 Codex Work Order Specification
- SITE001 Sites / Live Site QA Integration Standard
- SITEQA001 Playwright Site QA Harness
- First hook implementation tasks
- Weekly Engineering Summary
- Knowledge Graph Visualization
- Operating System Health Score

Each future use requires its own bounded task, owner document, validation, trust review where applicable, and protected-system review before becoming authoritative or executable.
