# KAOS001 Intake and Promotion Workflow REV01

Status: Active KAOS workflow
Task ID: KAOS001-INTAKE001
Customer-facing: No
Implementation authority: No

## 1. Purpose

KAOS intake converts chat-derived, task-derived, repo-derived, audit-derived, runtime-derived, and operator-derived knowledge into structured candidate objects.

The workflow also supports intake from uploaded source documents, external vendor or manufacturer evidence, customer/project artifacts, implementation evidence, PR summaries, and validation artifacts.

This document defines the governed workflow for evaluating new knowledge, comparing it to existing repository authority, assessing impact, and routing it for promotion, rejection, merge, supersession, task creation, or reconsideration.

## 2. Non-Authority Rule

Intake creates candidate knowledge.

Intake does not automatically create repository authority.

Chat-derived knowledge remains candidate until promoted.

Repo-backed owner documents remain durable authority.

Promotion requires operator review or a bounded approved task.

Registry entries, candidate records, summaries, chat notes, PR summaries, runtime evidence, and implementation evidence do not override the repository authority chain unless a bounded task promotes the knowledge into the appropriate owner document.

## 3. Source Channels

Supported intake sources are:

- chat extraction
- Codex task closeout
- PR summary
- audit finding
- runtime evidence
- implementation evidence
- operator decision
- uploaded source document
- external vendor/manufacturer evidence
- customer/project artifact

Each intake record must name the source channel and cite the source reference. Unknown or unavailable source references must be marked `Unknown`, not inferred.

## 4. Intake Lifecycle

The full intake lifecycle is:

1. Discovery
2. Candidate Object
3. Existing Object Check
4. Impact Analysis
5. Classification
6. Reconsideration Check
7. Promotion Decision
8. Registry / Owner Doc / Task Routing
9. Validation
10. RSI Review

Lifecycle stages do not create authority by themselves. Authority is created only through the appropriate owner document, task record, and repository authority chain.

## 5. Existing Object Check

Every candidate must be evaluated against existing KAOS objects, owner documents, task records, standards, specifications, runtime contracts, implementation records, and validation artifacts.

Required questions:

- Does an equivalent KAOS object already exist?
- Does an owner document already define this?
- Is this a duplicate, refinement, contradiction, supersession, missing relationship, new object, or evidence update?
- Is existing authority still correct?
- Does the existing object require reconsideration?

Allowed result options:

- New Object
- Merge Into Existing Object
- Add Relationship Only
- Add Evidence Only
- Supersede Existing Object
- Flag Existing Object For Reconsideration
- Reject Duplicate
- Needs Operator Decision

The result must cite the checked object or document when one exists. If no equivalent is found, the record must state that the check found no existing equivalent.

## 6. Reconsideration Check

Newer knowledge may challenge existing authority, but it must not silently overwrite it.

Existing authority is preserved until reviewed.

Contradictions create reconsideration candidates.

Reconsideration may create a task.

Reconsideration must cite the existing object or owner document and the new evidence.

Operator decision is required before supersession of active authority.

Reconsideration outcomes are:

- No reconsideration needed
- Add evidence to existing authority
- Flag existing authority for operator review
- Create a candidate task for review
- Supersession candidate pending operator decision
- Reject challenge due to insufficient evidence

## 7. Impact Analysis

Every candidate object must include impact analysis.

Impact analysis fields:

- `system_interdependencies`: Other workstreams, systems, standards, runtime contracts, or owner docs that rely on or constrain the candidate.
- `downstream_impacts`: Work products, user flows, artifacts, records, or documents that may need updates if the candidate is promoted.
- `data_dependencies`: Data fields, source records, catalog inputs, CRM/API payloads, validation artifacts, or external evidence required by the candidate.
- `cause_effect_relationships`: The cause-and-effect chain the candidate may introduce or document.
- `ripple_risks`: Secondary effects that could appear outside the immediate owner document or task.
- `affected_objects`: KAOS IDs, task IDs, standards, specs, registry rows, or other objects likely affected.
- `affected_systems`: Workstreams or protected systems that may be implicated.
- `affected_artifacts`: Docs, customer/project artifacts, installer artifacts, validation artifacts, generated files, or operational outputs that may need review.
- `impact_review_required`: `Yes` when downstream or protected-system effects require review before promotion; otherwise `No`.

WNYHS examples:

- A quote BOM change can affect the agreement, pick list, installer packet, HubSpot asset association, warranty tracking, and dashboard template.
- A catalog schema change can affect imports, the quote system, procurement, installed assets, and support/RMA handling.
- A route or SEO change can affect sitemap, robots, canonical policy, site search, and internal links.
- An image asset standard can affect category pages, hover states, manifests, approved filenames, and responsive crop behavior.

If impact is unknown, mark the relevant field `Unknown` and set `impact_review_required` to `Yes`.

## 8. Classification

Allowed classification outputs:

- Candidate
- Duplicate
- Refinement
- Contradiction
- Supersession Candidate
- Relationship Update
- Evidence Update
- Needs Operator Decision
- Reject

Classification must follow the Existing Object Check and Impact Analysis. Classification does not authorize implementation or owner-document changes.

## 9. Promotion Decision

Allowed promotion decisions:

- Do Not Promote
- Promote To Existing Owner Doc
- Create New Owner Doc
- Add To Registry Only
- Add To Task Register
- Add To RSI Backlog
- Merge With Existing Object
- Supersede Existing Object
- Flag Existing Object For Reconsideration
- Needs Operator Decision

Promotion decisions are recommendations until executed through the Master Task Register or an explicitly bounded approved work order.

## 10. Routing Rules

Route candidates by object type:

| Object Type | Primary Routing |
| --- | --- |
| Decision | Candidate decision owner doc or operator decision task. |
| Governance | `/docs/system/`, `/docs/codex/`, or domain governance owner doc. |
| Business Process | Future business process owner doc only after bounded authorization. |
| Runtime Contract | `/docs/runtime/` or locked protected-system contract owner doc. |
| Standard | Relevant domain standard owner doc. |
| Specification | Relevant domain specification owner doc. |
| Task | `/docs/system/master-task-register.md`. |
| Automation | Automation standard or future bounded automation owner doc. |
| Dashboard | Dashboard/interactive experience owner doc. |
| Catalog Item | Catalog owner docs and import evidence. |
| Solution | Solution-system owner docs and catalog relationships. |
| Customer Artifact | Customer/project artifact owner path or candidate task. |
| Installer Artifact | Quote-system or installer packet owner docs. |
| Validation Artifact | Audit, validation, PR, or task record owner docs. |
| RSI Opportunity | Future RSI backlog only after bounded authorization. |

Routing must respect protected-system boundaries. A routed candidate does not authorize runtime, CRM, payment, scheduling, email, Cloudflare, dependency, route, source, public content, or secret changes.

## 11. Task Creation Rules

Intake creates a candidate task when:

- implementation is needed
- owner document is missing
- existing authority conflicts
- validation is missing
- impact analysis reveals downstream work
- operator decision is required before execution

Candidate tasks are not executable until added or promoted in the Master Task Register.

Task records must include allowed scope, forbidden scope, target files, protected systems, validation, dependencies, and operator decision requirements before activation.

## 12. Validation Rules

Every intake record must satisfy these validation expectations:

- source reference required
- owner document identified or marked missing
- existing-object check completed
- impact analysis completed
- authority level assigned
- promotion recommendation assigned
- operator decision requirement marked
- no automatic authority created

Validation must also confirm that duplicate, merge, supersession, and reconsideration recommendations cite evidence. Unknown fields must be marked `Unknown`, not filled by assumption.

## 13. Intake Record Template

Use this compact Markdown/YAML-style template for candidate intake records:

```yaml
kaos_id:
object_type:
name:
summary:
domain:
status: Candidate
authority_level:
source_classification:
source_channel:
source_reference:
owner_document:
owner_document_status:
existing_object_check:
  equivalent_object:
  owner_document_already_defines:
  check_result:
  checked_references:
  existing_authority_still_correct:
  reconsideration_required:
classification:
promotion_recommendation:
promotion_decision:
relationships:
  parent_authority:
  depends_on:
  supersedes:
  superseded_by:
  referenced_by:
  implements:
  implemented_by_tasks:
  validated_by:
  produces_artifacts:
  consumes_inputs:
  updates_systems:
  related_runtime_contracts:
  related_business_processes:
  related_decisions:
  related_rsi_items:
impact_analysis:
  system_interdependencies:
  downstream_impacts:
  data_dependencies:
  cause_effect_relationships:
  ripple_risks:
  affected_objects:
  affected_systems:
  affected_artifacts:
  impact_review_required:
operator_decision_required:
confidence:
last_reviewed_date:
validation:
  source_reference_checked:
  owner_document_checked:
  existing_object_check_completed:
  impact_analysis_completed:
  authority_level_assigned:
  promotion_recommendation_assigned:
  no_automatic_authority_created:
notes:
```

## 14. Prohibited Behavior

Intake must not:

- bypass the Master Task Register
- overwrite repo authority from chat
- silently supersede active documents
- create implementation work without a task
- merge duplicate objects without review
- treat vendor claims as WNYHS-approved claims
- treat runtime evidence as governance without promotion
- delete or rename historical docs
- implement hooks or automation

Intake must also not create source/runtime changes, protected-system changes, public claim approvals, route changes, dependency changes, package-lock changes, environment changes, or secret exposure.

## 15. Future Hook Relationship

Future HOOK001 / KAOS Hook work may automate intake prompts after task closeout.

This REV01 document only defines the manual and governed workflow. It does not create hook docs, implement hooks, configure automation, install integrations, create recurring jobs, or change runtime behavior.
