# KAOS001 Knowledge Object Schema REV01

Status: Active KAOS foundation schema
Task ID: KAOS001-REGISTRY001
Customer-facing: No
Implementation authority: No

## 1. Purpose

A Knowledge Object is a durable, reviewable record that describes a unit of repository knowledge and its relationship to governing documents, tasks, evidence, systems, artifacts, and operator decisions.

Knowledge Objects help distinguish repo-verified authority from source-documented material, runtime evidence, implementation evidence, operator-approved decisions, and chat-derived candidates.

This schema is documentation-only. It defines the shared object model for later KAOS work, but it does not create intake workflows, business process registries, RSI registers, decision registers, dependency maps, hooks, runtime behavior, or automation.

## 2. Object Lifecycle

Knowledge Objects move through a controlled lifecycle:

1. Candidate knowledge is identified from a source.
2. The source and authority classification are recorded.
3. Required fields and relationships are filled in.
4. Validation expectations are identified.
5. Operator decision requirements are marked.
6. The object is either left as a candidate, promoted into an owner document, merged with an existing object, superseded, rejected, or added to a future task queue.
7. Promoted objects remain traceable to source references and validation artifacts.

No lifecycle state creates authority by itself. Authority comes from the owner document and the repository authority chain.

## 3. Source Classification

Allowed source classifications:

- Repo Verified
- Source Documented
- Operator Approved
- Chat Inferred
- Chat-Derived Candidate
- Runtime Evidence
- Implementation Evidence
- Unknown

Source classification describes where the object came from. It does not describe whether the object is authoritative.

## 4. Authority Classification

Allowed authority levels:

- Project KB Behavior
- Repo System Governance
- Domain Governance
- Runtime Contract
- Standard
- Specification
- Business Process
- Task Register
- Implementation Evidence
- Chat-Derived Candidate

Authority level must match the owner document and current repository authority chain. Chat-derived candidates are never active authority until promoted by a bounded task.

## 5. Object Types

Allowed initial object types:

- Knowledge Object
- Decision
- Governance
- Business Process
- Runtime Contract
- Standard
- Specification
- Task
- Automation
- Dashboard
- Catalog Item
- Solution
- Customer Artifact
- Installer Artifact
- Validation Artifact
- RSI Opportunity

Later object types require a bounded KAOS schema revision.

## 6. Required Core Fields

Every Knowledge Object record must include:

| Field | Required Meaning |
| --- | --- |
| `kaos_id` | Stable object identifier. |
| `object_type` | One allowed object type. |
| `name` | Human-readable object name. |
| `summary` | Concise description of the object. |
| `domain` | Primary workstream, system, or knowledge domain. |
| `status` | One allowed object status. |
| `authority_level` | One allowed authority level. |
| `source_classification` | One allowed source classification. |
| `source_reference` | Document, task, evidence, or prompt source. |
| `owner_document` | Document that owns the object if promoted. |
| `owner_document_status` | Status of the owner document. |
| `promotion_recommendation` | One allowed recommendation. |
| `relationships` | Relationship fields for graph/dependency mapping. |
| `operator_decision_required` | Yes, No, or explicit decision needed. |
| `confidence` | High, Medium, Low, or Unknown. |
| `last_reviewed_date` | ISO date of last object review. |

## 7. Relationship Fields

Relationship fields must include:

- `parent_authority`
- `depends_on`
- `supersedes`
- `superseded_by`
- `referenced_by`
- `implements`
- `implemented_by_tasks`
- `validated_by`
- `produces_artifacts`
- `consumes_inputs`
- `updates_systems`
- `related_runtime_contracts`
- `related_business_processes`
- `related_decisions`
- `related_rsi_items`

Relationship values should use repository paths, task IDs, KAOS IDs, runtime contract names, or clear external evidence references. Unknown relationships must be marked `Unknown`, not invented.

## 8. Status Values

Allowed status values:

- Candidate
- Approved In Chat
- Repo Documented
- Implemented
- Validated
- Superseded
- Duplicate
- Rejected
- Needs Operator Decision

`Approved In Chat` is not repository authority by itself. It requires promotion into an owner document through a bounded task.

## 9. Promotion Recommendations

Allowed promotion recommendations:

- Do Not Promote
- Promote To Existing Owner Doc
- Create New Owner Doc
- Add To Task Register
- Add To RSI Backlog
- Merge With Existing Object
- Supersede Existing Object
- Needs Operator Decision

Promotion recommendations are advisory until acted on through the Master Task Register or an explicitly bounded work order permitted by higher-authority governance.

## 10. Validation Expectations

Knowledge Object validation should confirm:

- required fields are present
- source references exist or are marked `Unknown`
- authority level matches the owner document
- protected-system boundaries are identified
- relationship fields do not invent undocumented dependencies
- duplicate and supersession claims have evidence
- operator decisions are not silently assumed
- promotion recommendations do not expand active task scope

Validation artifacts may include task records, git diffs, build or docs checks, runtime contract references, implementation records, audit docs, screenshots, operator notes, or PR review evidence.

## 11. Prohibited Behavior

This schema prohibits:

- treating chat-derived objects as active authority without promotion
- using candidate objects to authorize source, runtime, route, CSS, public content, CRM, payment, scheduling, email, Cloudflare, dependency, package-lock, or secret changes
- creating intake workflows, business process registries, RSI registers, decision registers, dependency maps, or hooks in this task
- importing all historical objects in REV01
- classifying all historical docs in REV01
- deleting, moving, or renaming historical documents
- changing future task statuses outside the active bounded task
- bypassing the Master Task Register
- bypassing protected runtime contracts
- inventing relationships, owner documents, validation artifacts, or operator decisions
