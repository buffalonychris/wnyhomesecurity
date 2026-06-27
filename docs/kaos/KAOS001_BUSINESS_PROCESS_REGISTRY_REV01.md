# KAOS001 Business Process Registry REV01

Status: Active KAOS foundation registry
Task ID: KAOS001-BPROC001
Customer-facing: No
Implementation authority: No

## 1. Purpose

The KAOS001 Business Process Registry defines how WNYHS business processes are represented as first-class KAOS Knowledge Objects.

This registry defines process structure, required fields, relationship expectations, maturity language, artifact categories, protected-review rules, and seed candidate processes. It does not implement automation, change operating workflows, or alter runtime systems.

Candidate processes do not become active operating authority until they are promoted to an owner document through a bounded task aligned with the repository authority chain. Process maturity is diagnostic. It helps identify clarity, traceability, validation, and automation readiness, but it is not a hard-stop gate unless a protected system, active task scope, customer-facing claim, or higher-authority document requires a stop.

## 2. Business Process Definition

A WNYHS business process is a repeatable workflow across people, systems, documents, customer interactions, inventory, devices, runtime systems, and validation artifacts.

Business processes may include manual operator steps, customer touchpoints, installer activities, source documents, generated artifacts, runtime evidence, protected-system boundaries, and future automation opportunities.

## 3. Process Record Schema

Business process records must use these fields:

| Field | Meaning |
| --- | --- |
| `process_id` | Stable process identifier. |
| `process_name` | Human-readable process name. |
| `kaos_object_type` | Must be `Business Process` unless a later schema revision says otherwise. |
| `status` | Lifecycle status. Seed entries in this registry use `Candidate`. |
| `domain` | Primary workstream or operating domain. |
| `owner_document` | Current or candidate owner document. |
| `owner_document_status` | Current owner status, candidate, missing, or needs decision. |
| `source_classification` | Source classification from the KAOS schema. |
| `trigger` | Event, decision, request, or condition that starts the process. |
| `start_state` | Required condition before the process begins. |
| `end_state` | Expected terminal condition or output. |
| `actors` | People, roles, or operators involved. |
| `systems_involved` | Docs, tools, apps, APIs, data stores, devices, or external systems involved. |
| `upstream_inputs` | Documents, data, artifacts, tasks, or events consumed by the process. |
| `downstream_outputs` | Documents, records, artifacts, tasks, or runtime states produced or affected. |
| `shared_data` | Records, fields, artifacts, or runtime states touched across processes. |
| `relationship_links` | Relationship fields from the KAOS relationship model. |
| `customer_touchpoints` | Customer-facing steps or artifacts, if any. |
| `installer_touchpoints` | Installer-facing steps or artifacts, if any. |
| `required_artifacts` | Artifacts required before execution. |
| `produced_artifacts` | Artifacts created by the process. |
| `validation_required` | Required review, test, evidence, or approval. |
| `validation_artifacts` | Proof that validation occurred. |
| `operator_decision_points` | Points requiring operator judgment or approval. |
| `failure_paths` | Known error, exception, fallback, or rejection paths. |
| `protected_systems_touched` | Protected systems touched, or `None`. |
| `automation_candidates` | Future automation opportunities. |
| `rsi_candidates` | Future improvement candidates. |
| `current_maturity_level` | Current BP-L maturity. |
| `target_maturity_level` | Desired BP-L maturity. |
| `impact_review_required` | Yes/No, with reason when Yes. |
| `notes` | Scope notes, assumptions, and unresolved risks. |

## 4. Process Lifecycle

Process lifecycle stages:

- Candidate
- Owner Document Needed
- Repo Documented
- Relationship Mapped
- Validation Defined
- Operationally Active
- Automation Candidate
- Automation Implemented
- Validated
- Superseded

These stages do not automatically block ordinary bounded work. They become blockers only when higher-authority governance, active task scope, protected systems, customer-facing claims, validation requirements, or operator decisions require a stop.

## 5. Relationship Integration

Business processes use `/docs/kaos/KAOS001_RELATIONSHIP_AND_DEPENDENCY_MODEL_REV01.md` to show how process inputs, outputs, artifacts, data, authority, and validation relate to the rest of the operating system.

Process relationship blocks must include:

```yaml
relationship_links:
  parent_authority:
  depends_on:
  required_by:
  produces:
  consumes:
  updates:
  affects:
  affected_by:
  validates:
  validated_by:
  triggers:
  triggered_by:
```

Unknown relationships must be marked `Unknown`, not invented.

## 6. Impact Analysis for Processes

Process impact analysis uses four questions:

- Upstream inputs: what feeds this process?
- Downstream outputs: what depends on this process?
- Shared data: what records, fields, artifacts, or runtime states are touched?
- Ripple risks: what hidden consequences should be checked?

Impact analysis is review evidence. It does not authorize implementation or changes to related systems.

## 7. Seed Candidate Process Map

These entries are seed candidate process entries only. They are not active operating authority and must not be treated as validated.

| process_id | process_name | status | domain | Short summary | Likely owner document | Key upstream inputs | Key downstream outputs | Likely protected systems touched | First promotion recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROCESS-LEAD001 | Lead Intake | Candidate | Fit Check / CRM | Capture a customer request and route it into the governed lead intake path. | Lead Signal/runtime owner docs | Customer inquiry, source/QR context, fit-check inputs | Request record, operator follow-up context, CRM sync candidate | Lead Signal, requestId, HubSpot/CRM, email runtime | Promote only through lead/runtime owner docs after protected-system review. |
| PROCESS-QUOTE001 | Quote Creation | Candidate | Estimate / Quote System | Convert approved property context into customer estimate and internal scope artifacts. | Quote-system owner docs | Lead context, property model, package/solution intent, catalog data | Customer estimate, internal SOW, quote review inputs | Quote flow, catalog, HubSpot/CRM, payment handoff | Promote through quote-system process owner document before automation. |
| PROCESS-PROPERTY001 | Property Model Creation | Candidate | Floorplan / Quote System | Create a structured property model from operator/customer evidence. | Quote/floorplan owner docs | Customer notes, property areas, photos or floorplan evidence | Property model, room/area concerns, quote inputs | Quote workspace, floorplan evidence | Promote through quote/floorplan governance with validation artifacts. |
| PROCESS-BOM001 | BOM Qualification | Candidate | Catalog / Quote System | Translate property needs into candidate hardware and installation materials. | Catalog and quote-system owner docs | Property model, solution needs, package rules, catalog evidence | BOM, pick list candidate, procurement inputs | Catalog, quote flow, inventory/procurement | Promote after catalog and quote ownership boundaries are reconciled. |
| PROCESS-CATALOG001 | Manufacturer Catalog Processing | Candidate | Catalog System | Convert source manufacturer or vendor information into validated catalog records. | Catalog owner docs | Manufacturer evidence, import files, validation notes | Catalog records, capability mappings, import evidence | Catalog, quote system | Promote through catalog owner docs with source-evidence validation. |
| PROCESS-PROCUREMENT001 | Procurement / Ordering | Candidate | Operations / Inventory | Turn qualified materials into purchase/order actions and receipt expectations. | Future operations/procurement owner doc | BOM, availability, substitution decisions | Purchase list, order status, receiving expectations | Procurement/inventory financial records | Create owner document before any operational or financial automation. |
| PROCESS-INVENTORY001 | Receiving and Staging | Candidate | Inventory / Install Ops | Receive, verify, and stage equipment for an install. | Future inventory/staging owner doc | Orders, BOM, installer packet, delivery evidence | Staged inventory, exceptions, install readiness evidence | Inventory/procurement financial records | Create owner document with validation and exception handling. |
| PROCESS-DASHBOARD001 | Pre-Install Dashboard Prep | Candidate | Dashboard / Automation | Prepare expected dashboard/control surfaces before install day. | Dashboard/automation owner docs | Quote/SOW, device plan, customer preferences | Dashboard prep checklist, configuration assumptions | Dashboard/runtime, automation, installed asset data | Promote after dashboard governance reconciliation. |
| PROCESS-INSTALL001 | Install-Day Execution | Candidate | Install Operations | Execute approved installation scope at the property. | Future install-day owner doc | Schedule, SOW, property model, BOM, staged inventory, installer packet | Installed devices, install notes, exceptions, validation inputs | Scheduling, installed assets, dashboard/customer validation | Create owner document before operational activation. |
| PROCESS-CERT001 | Dashboard Validation and Customer Signoff | Candidate | Validation / Dashboard | Validate installed devices and customer-facing control surfaces, then capture acceptance evidence. | Future validation/signoff owner doc | Installed devices, dashboard prep, installer notes | Validation checklist, customer artifact, support baseline | Dashboard, installed assets, CRM, warranty/support | Create validation owner document before treating process as active authority. |
| PROCESS-SUPPORT001 | Support / Warranty / RMA | Candidate | Support / Warranty | Handle post-install support, warranty, replacement, and return paths. | Future support/warranty owner doc | Customer issue, installed asset record, warranty status | Support record, RMA decision, replacement plan | CRM, installed assets, warranty/support commitments | Create owner document with protected commitment review. |
| PROCESS-HUBSPOT001 | Customer Record / Asset Association Lifecycle | Candidate | CRM / HubSpot | Maintain customer, deal, and installed asset associations through approved API-layer paths. | HubSpot REV03 and runtime owner docs | Lead signal, quote context, installed asset data | CRM records, association evidence, task/note context | HubSpot/CRM, Lead Signal, requestId | Promote only through REV03-aligned CRM/runtime task. |
| PROCESS-ASSET001 | Installed Asset Lifecycle | Candidate | Installed Assets / Support | Track installed devices from planned to installed to serviced or retired. | Future installed-asset owner doc | BOM, install validation, support/RMA records | Asset state, warranty/support context, dashboard assumptions | CRM, dashboard, support/warranty | Create owner document before asset lifecycle authority is used. |
| PROCESS-KAOS001 | KAOS Intake / Promotion Process | Candidate | Project Governance / KAOS | Route candidate knowledge through existing-object checks, impact analysis, and promotion decisions. | KAOS intake and promotion workflow | Task closeout, audits, operator decisions, source evidence | Candidate objects, owner-doc tasks, validation evidence | None by default | Promote by linking existing KAOS intake owner docs, not by creating automation. |
| PROCESS-CODEX001 | Codex Task Execution Process | Candidate | Project Governance / Codex | Execute bounded repository tasks through authority, scope, validation, and PR rules. | Codex run contract and task register rules | Active task/work order, governing docs, allowed scope | Code/doc changes, validation evidence, PR summary | Depends on task; protected systems remain locked unless authorized | Promote by documenting process ownership without changing execution tooling. |

## 8. Process Artifact Types

Business process records may reference these artifact categories:

- Customer Artifact
- Installer Artifact
- Validation Artifact
- Internal Operations Artifact
- Runtime Evidence
- Catalog / BOM Artifact
- HubSpot / CRM Artifact
- Dashboard Artifact
- Warranty / Support Artifact

Artifact references must avoid secrets, customer private data, internal margin detail, and unapproved public claims.

## 9. Protected Process Rules

A business process requires stricter review when it touches or could change:

- payment/deposit/refund changes
- scheduling changes
- HubSpot/CRM lifecycle changes
- customer-facing claims
- warranty/support commitments
- installed asset lifecycle changes
- dashboard/customer validation changes
- procurement/inventory financial changes
- runtime/API changes
- legal/compliance-sensitive artifacts

Stricter review means the process needs the relevant owner documents, protected-system contracts, validation evidence, and operator decision points before promotion or implementation.

## 10. Maturity Model

Business-process maturity levels:

| Level | Name | Meaning |
| --- | --- | --- |
| BP-L0 | Unknown / scattered | Process knowledge exists in fragments, chat, memory, or disconnected docs. |
| BP-L1 | Candidate identified | Process is named as a candidate but lacks an owner record. |
| BP-L2 | Owner doc exists | A process owner document or candidate owner document exists. |
| BP-L3 | Relationships mapped | Inputs, outputs, affected systems, and dependencies are documented. |
| BP-L4 | Validation defined | Required evidence, checks, approvals, and failure paths are defined. |
| BP-L5 | Operationally active and traceable | Process is active through owner authority and traceable artifacts. |
| BP-L6 | Automation-ready | Process is structured enough for future governed automation after separate authorization. |
| BP-L7 | Self-governing / KAOS-complete | A future technician can identify authority, scope, relationships, validation, decisions, and unresolved risks from repository documents. |

Maturity is diagnostic, not blocking. The target is efficient execution, not bureaucracy. Manual reconciliation should decrease as maturity improves.

## 11. Business Process Record Template

```yaml
process_id:
process_name:
kaos_object_type: Business Process
status: Candidate
domain:
owner_document:
owner_document_status:
source_classification:
trigger:
start_state:
end_state:
actors:
systems_involved:
upstream_inputs:
downstream_outputs:
shared_data:
relationship_links:
  parent_authority:
  depends_on:
  required_by:
  produces:
  consumes:
  updates:
  affects:
  affected_by:
  validates:
  validated_by:
  triggers:
  triggered_by:
customer_touchpoints:
installer_touchpoints:
required_artifacts:
produced_artifacts:
validation_required:
validation_artifacts:
operator_decision_points:
failure_paths:
protected_systems_touched:
automation_candidates:
rsi_candidates:
current_maturity_level:
target_maturity_level:
impact_review_required:
notes:
```

## 12. Prohibited Behavior

This registry must not:

- activate candidate processes automatically
- replace owner documents
- override runtime contracts
- change HubSpot, Stripe, scheduling, quote, catalog, or dashboard behavior
- create automation
- require excessive pre-task process documentation for small bounded tasks
- treat maturity gaps as blockers unless protected systems are touched
- delete, rename, or consolidate historical docs
- mark seed candidates as validated

## 13. Future Use

This registry prepares future bounded work for:

- Decision Register
- RSI Register
- Workflow Event Architecture
- KAOS Hook
- Codex Work Order Specification
- Installer packet generation
- Quote/SOW generation
- Inventory/procurement workflows
- HubSpot asset lifecycle
- Warranty/support tracking

Each future use requires its own bounded task, owner document, validation, and protected-system review before it can become authoritative or executable.
