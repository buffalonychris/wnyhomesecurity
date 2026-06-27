# KAOS001 Decision Register REV01

Status: Active KAOS foundation register
Task ID: KAOS001-DECISION001
Customer-facing: No
Implementation authority: No

## 1. Purpose

The KAOS001 Decision Register defines how WNYHS decisions are captured as first-class KAOS Knowledge Objects.

This register captures both decision records and decision candidates. A decision recorded here is not automatically active authority. A decision becomes active implementation authority only when it is promoted to the appropriate owner document, Master Task Register task, or approved bounded work order under the repository authority chain.

Decision records must be traceable to source evidence. Source references may include repository documents, bounded task records, audit findings, implementation evidence, runtime evidence, operator decisions, or approved planning documents. Unknown sources must be marked `Unknown`, not inferred.

Decision maturity is diagnostic. It helps identify clarity, relationships, validation needs, and promotion readiness, but it is not a hard-stop gate for ordinary low-risk bounded work unless higher-authority governance, protected systems, customer-facing claims, active task scope, or operator decision requirements make it a stop condition.

## 2. Decision Definition

A WNYHS decision is a deliberate choice that affects governance, business process, runtime behavior, public/customer-facing claims, implementation direction, standards, specifications, catalog policy, quote flow, operations, or future automation.

## 3. Decision Types

Initial decision types are:

- Governance Decision
- Business Process Decision
- Runtime Contract Decision
- Product / Catalog Decision
- Quote / SOW Decision
- Customer Artifact Decision
- Installer Artifact Decision
- Visual / Brand Decision
- SEO / Route Decision
- Automation Decision
- Tooling / Codex Decision
- Project KB Decision
- Protected System Decision
- Reconsideration Decision

Later decision types require a bounded KAOS schema or decision-register revision.

## 4. Decision Record Schema

Decision records must use these fields:

| Field | Meaning |
| --- | --- |
| `decision_id` | Stable decision identifier. |
| `decision_name` | Human-readable decision name. |
| `kaos_object_type` | Must be `Decision` unless a later schema revision says otherwise. |
| `decision_type` | One decision type from this register. |
| `status` | Lifecycle status. Seed entries in this register use `Candidate`. |
| `domain` | Primary workstream, system, or knowledge domain. |
| `summary` | Concise description of the decision. |
| `decision_statement` | The actual choice, if approved or documented. Candidate records may state the proposed choice. |
| `rationale` | Why the decision exists or why it is proposed. |
| `source_classification` | Source classification from the KAOS schema. |
| `source_reference` | Document, task, evidence, or prompt source. |
| `owner_document` | Current or candidate owner document. |
| `owner_document_status` | Current owner status, candidate, missing, or needs decision. |
| `authority_level` | Authority classification from the KAOS schema. |
| `operator_decision_required` | Yes, No, or the specific decision needed. |
| `promotion_recommendation` | Promotion recommendation from the KAOS schema. |
| `parent_authority` | Higher authority governing the decision. |
| `related_objects` | Related KAOS objects, docs, standards, specs, or task records. |
| `related_processes` | Related business process records or candidate processes. |
| `related_runtime_contracts` | Related runtime contracts, if any. |
| `related_tasks` | Related Master Task Register task IDs. |
| `affected_systems` | Workstreams or protected systems affected by the decision. |
| `affected_artifacts` | Documents, customer artifacts, installer artifacts, validation artifacts, generated files, or operational outputs affected. |
| `upstream_inputs` | Evidence, documents, tasks, data, or decisions that feed this decision. |
| `downstream_outputs` | Documents, tasks, artifacts, systems, or processes that depend on this decision. |
| `shared_data` | Records, fields, artifacts, or runtime states touched across systems. |
| `ripple_risks` | Hidden consequences or secondary review concerns. |
| `validation_required` | Required review, check, evidence, or approval. |
| `validation_artifacts` | Proof that validation occurred. |
| `supersedes` | Prior decision or authority replaced by this decision, if any. |
| `superseded_by` | Successor decision or authority, if any. |
| `reconsideration_required` | Yes/No, with reason when Yes. |
| `date_recorded` | ISO date when recorded. |
| `last_reviewed_date` | ISO date of last review. |
| `notes` | Scope notes, assumptions, and unresolved risks. |

Unknown fields must be marked `Unknown`. Do not invent relationships, owner documents, validation artifacts, or operator decisions.

## 5. Decision Lifecycle

Decision lifecycle stages are:

- Candidate
- Approved In Chat
- Needs Existing Object Check
- Needs Impact Review
- Needs Operator Decision
- Repo Documented
- Implemented
- Validated
- Supersession Candidate
- Superseded
- Rejected
- Duplicate

Lifecycle stages do not create authority by themselves. `Approved In Chat` is still not repository authority until promoted into an owner document, Master Task Register task, or approved bounded work order.

Lifecycle gaps do not block ordinary low-risk bounded work. Protected systems, source authority, customer-facing claims, active task scope, and required operator decisions require stricter review.

## 6. Existing Decision Check

Every new decision candidate must ask:

- Does an equivalent decision already exist?
- Does an owner document already contain this decision?
- Is this a duplicate, refinement, contradiction, supersession, missing relationship, evidence update, or new decision?
- Does existing authority require reconsideration?
- Is operator approval required before promotion?

Allowed result options:

- New Decision
- Merge Into Existing Decision
- Add Evidence Only
- Add Relationship Only
- Supersede Existing Decision
- Flag Existing Decision For Reconsideration
- Reject Duplicate
- Needs Operator Decision

The check must cite the object, owner document, task record, or evidence reviewed when one exists. If no equivalent is found, the record must state that no equivalent was found.

## 7. Decision Impact Analysis

Decision impact analysis uses four questions:

- Upstream inputs: what feeds this decision?
- Downstream outputs: what depends on this decision?
- Shared data: what records, fields, artifacts, or runtime states are touched?
- Ripple risks: what hidden consequences should be checked?

Impact analysis should be proportional and useful, not bureaucratic. A narrow docs-only decision may need only a small impact note. A protected-system, customer-facing, financial, legal, quote, catalog, runtime, or deployment decision needs deeper review and clearer evidence.

Impact analysis is review evidence. It does not authorize implementation or changes to related systems.

## 8. Protected Decision Rules

Decisions require stricter review when they affect or could change:

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
- data ownership/privacy posture

Stricter review means the decision needs relevant owner documents, protected-system contracts, source evidence, validation evidence, and operator decision points before promotion or implementation.

## 9. Decision Authority Rules

Decisions captured in this register are not automatically implementation authority.

Decisions become implementation authority only when promoted through an owner document, Master Task Register task, or approved bounded work order.

A lower-authority decision cannot override higher-authority repository governance. Contradictions trigger reconsideration, not silent overwrite.

Supersession requires explicit evidence. Operator approval is required when active authority is affected.

## 10. Seed Candidate Decision Map

These entries are seed candidate categories only. They are not active authority and must not be treated as validated.

| decision_id | decision_name | status | domain | Short summary | Likely owner document | Key affected systems/processes | First promotion recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DECISION-KAOS001 | KAOS maturity is diagnostic | Candidate | Project Governance / KAOS | KAOS maturity levels guide review and improvement, but they are not hard-stop gates by default. | `/docs/kaos/WNYHS_REPO001_KAOS_OPERATING_SYSTEM_MASTER_CONTROL_REV03.md` | KAOS records, task routing, operating-system health review | Add evidence to KAOS owner docs only when a bounded task needs maturity language. |
| DECISION-KAOS002 | Relationships are first-class KAOS objects | Candidate | Project Governance / KAOS | Relationships should be explicit evidence, not incidental links. | `/docs/kaos/KAOS001_RELATIONSHIP_AND_DEPENDENCY_MODEL_REV01.md` | Dependency review, impact analysis, graph readiness | Preserve in relationship owner doc; add records only through bounded tasks. |
| DECISION-KAOS003 | Manual reconciliation should become exceptional | Candidate | Project Governance / KAOS | KAOS should reduce recurring manual reconciliation as docs mature. | `/docs/kaos/WNYHS_REPO001_KAOS_OPERATING_SYSTEM_MASTER_CONTROL_REV03.md` | Task register, catalog/manifest ownership, context efficiency | Keep as planning guidance until a bounded operating-system health task promotes it. |
| DECISION-KAOS004 | Hooks should reduce administrative overhead | Candidate | Project Governance / Automation | Future hooks should reduce repetitive admin work and must not add uncontrolled process load. | Future HOOK001 owner doc | KAOS intake, workflow event architecture, automation preconditions | Defer to HOOK001; do not implement hooks from this register. |
| DECISION-CODEX001 | ChatGPT routes; Codex executes bounded work orders | Candidate | Codex / Project Governance | ChatGPT frames bounded work; Codex executes repository tasks under repo authority. | `/docs/codex/CODEX_RUN_CONTRACT.md` | Codex task execution, task register, PR flow | Add evidence to Codex process owner docs if a future Codex work-order spec is activated. |
| DECISION-CODEX002 | Context Efficiency Reports are required for Codex tasks | Candidate | Codex / Context Efficiency | Codex closeouts should report context efficiency where useful or required. | `/docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md` | Codex summaries, future prompt design, governance learning | Preserve in OPS003; refine only through bounded OPS task. |
| DECISION-CODEX003 | One bounded Codex task per PR unless explicitly approved | Candidate | Codex / Task Execution | A PR should normally represent one bounded task to preserve review clarity. | `/docs/codex/CODEX_RUN_CONTRACT.md` | Branching, commits, PR review, task register | Promote to Codex work-order standard if a future CODEX task is activated. |
| DECISION-BPROC001 | Business processes are first-class KAOS objects | Candidate | Business Process / KAOS | Repeatable business processes should be durable KAOS objects with inputs, outputs, owners, and protected-system boundaries. | `/docs/kaos/KAOS001_BUSINESS_PROCESS_REGISTRY_REV01.md` | Business process registry, process maturity, automation readiness | Preserve as candidate until specific process owner docs are promoted. |
| DECISION-QUOTE001 | Customer Estimate and Internal SOW are separate artifacts | Candidate | Estimate / Quote System | Customer-facing estimate artifacts and internal scope/work artifacts should remain distinct. | Candidate quote-system owner document | Quote process, customer artifacts, installer artifacts, payment handoff | Route to quote-system owner docs through a future bounded quote task. |
| DECISION-CATALOG001 | Master parts are not automatically sellable solutions | Candidate | Catalog / Solution System | A validated part record does not automatically become a public solution or package. | Catalog and solution-system owner docs | Catalog, package system, solution pages, quote system | Promote only through catalog/solution reconciliation task. |
| DECISION-HARDWARE001 | No Approved Standard hardware status from web research alone | Candidate | Catalog / Hardware Policy | Web research alone is insufficient to mark hardware as approved standard. | Catalog owner docs | Catalog evidence, package qualification, procurement | Promote through catalog evidence standard if activated. |
| DECISION-SEO001 | Every public route needs explicit index/sitemap/search/metadata policy | Candidate | SEO / Site Architecture | Public route ownership should include crawl, sitemap, search, and metadata policy. | SEO and site-architecture owner docs | SEO, search, routes, sitemap, robots, metadata | Promote through SEO/site architecture task when route policy is revised. |
| DECISION-VISUAL001 | Category visual assets require governed parity and anti-crop standards | Candidate | Visual / Image / Category System | Category assets need consistent visual treatment and crop-safety rules before production placement. | Category image and visual-system owner docs | Category pages, image system, SEO image posture, visual QA | Promote through image/category standards task when authorized. |

## 11. Decision Record Template

Use this compact Markdown/YAML-style template for future decision records:

```yaml
decision_id:
decision_name:
kaos_object_type: Decision
decision_type:
status: Candidate
domain:
summary:
decision_statement:
rationale:
source_classification:
source_reference:
owner_document:
owner_document_status:
authority_level:
operator_decision_required:
promotion_recommendation:
parent_authority:
related_objects:
related_processes:
related_runtime_contracts:
related_tasks:
affected_systems:
affected_artifacts:
impact_analysis:
  upstream_inputs:
  downstream_outputs:
  shared_data:
  ripple_risks:
existing_decision_check:
  equivalent_decision:
  owner_document_already_contains:
  check_result:
  checked_references:
  existing_authority_requires_reconsideration:
validation_required:
validation_artifacts:
supersedes:
superseded_by:
reconsideration_required:
date_recorded:
last_reviewed_date:
notes:
```

## 12. Prohibited Behavior

This register must not:

- invent business decisions
- activate candidate decisions automatically
- override owner documents
- rewrite historical decisions
- silently supersede active authority
- treat chat approval as repository authority
- create implementation work without a Master Task Register task
- change HubSpot, Stripe, scheduling, quote, catalog, dashboard, SEO, or runtime behavior
- create automation
- require excessive pre-task decision documentation for small bounded tasks
- treat maturity gaps as blockers unless protected systems are touched
- delete, rename, or consolidate historical docs
- mark seed candidates as validated

## 13. Future Use

This register prepares future bounded work for:

- RSI Register
- Workflow Event Architecture
- KAOS Hook
- Codex Work Order Specification
- Knowledge Graph Visualization
- Project KB Alignment
- Business Process Registry
- Operating System Health Score

Each future use requires its own bounded task, owner document, validation, and protected-system review before it can become authoritative or executable.
