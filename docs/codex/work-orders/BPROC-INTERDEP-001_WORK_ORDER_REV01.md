# BPROC-INTERDEP-001 — Initial WNYHS Business Process Interdependency Register

**Revision:** REV01
**Status:** OPERATOR AUTHORIZED — EXECUTE THIS REVISION
**Category:** GOVERNANCE / INTERDEPENDENCY RECONCILIATION
**Primary Workstream:** Business Process / KAOS / Shared Data Architecture
**Task ID:** BPROC-INTERDEP-001
**Implementation authority:** Repository documentation only. No runtime/system mutation.

## 1. Objective

Create the initial living WNYHS Business Process Interdependency Register and governing schema. Seed it deeply enough that the Dashboard System can proceed without knowingly omitting material upstream, downstream, shared-data, lifecycle-gate, ownership, or future-system dependencies.

This is not a complete company-wide audit. It is the first controlled register release, designed to expand over time as additional business processes are reconciled.

## 2. Core operating rule

The register owns **what relationships, shared records, data exchanges, lifecycle gates, dependencies, and unresolved future-source requirements exist**.

It does not decide the physical database schema, object technology, repository storage implementation, HubSpot configuration, API implementation, or runtime synchronization mechanism.

Those structural choices belong to the separate GitHub/database architecture work and later bounded system tasks.

## 3. Required source posture

Recover documented relationships before inventing anything.

Search current authority, current implementation evidence, current-session approved dashboard decisions, business-process candidate artifacts, audits/reconciliation records, installer/quote/support/warranty/asset/CRM architecture, and relevant historical material.

Use concept-based discovery, not filename matching alone.

Do not attempt an exhaustive cross-project/company-wide audit in this task. Deep-read sources materially affecting Dashboard dependencies; capture adjacent company-wide relationships only when encountered and useful.

## 4. Mandatory Dashboard dependency coverage

The initial register must capture all materially evidenced relationships needed now or later by the Dashboard System, including as applicable:

- customer/contact identity and communication records;
- household/account/company association where documented;
- property/site identity and canonical property relationship;
- service/install address and location metadata;
- floors, rooms, areas, placement, detached structures, floorplans, LiDAR/3D/spatial artifacts;
- Quote, Estimate, SOW, approved solution/package, proposed capability, customer approval, add-on/change-order state;
- BOM, approved products/parts, manufacturer/make, model, SKU/part number, supplier/vendor, procurement/order references;
- inventory allocation, serialized-item requirements, serial numbers, staged/installed/replaced asset lineage;
- bench build, device naming, HA entity/area mapping, installer packet, install job, installation state;
- commissioning, exceptions, readiness, dashboard readiness, handoff readiness;
- installed asset ID, property/location relationship, install date, replacement history, retirement state;
- warranty term/start/end/status, support eligibility, extended warranty, coverage relationship;
- support/service ticket, RMA, replacement, remote troubleshooting, truck-roll/on-site follow-up, resolution and recurrence;
- customer training, dashboard review, correction, acceptance/signoff, handoff and closeout evidence;
- remote access/tunnel availability, authorization, role assignment, revocation and support access;
- Building/Household Mode, Notification, Automation, Media/Privacy and other cross-system state/control contracts;
- weather, timezone, sunrise/sunset, mapping, utility/environmental, emergency-service or similar widgets/features requiring property/site metadata;
- future Quote, Installer, Inventory, Asset, Warranty, Support, CRM, Portal, Scheduling, Procurement and Handoff systems expected to populate required dashboard fields.

## 5. Required register schema

Each dependency record must include at minimum:

- dependency_id
- upstream_process_or_system
- downstream_process_or_system
- relationship_type
- exact_data_artifact_or_state
- producing_owner
- consuming_owner
- current_source_of_truth_or_evidence
- current_technology_state
- future_intended_source
- lifecycle_gate_or_condition
- dependency_class
- required_for_execution
- current_manual_or_fallback_path
- customer_safe_or_internal_only
- freshness_requirement
- provenance_or_source_reference
- status
- unresolved_owner_or_governance_gap
- affected_records_or_entities
- database_architecture_relevance
- last_reviewed_date
- notes

Allowed dependency classes must include:
- REQUIRED
- CONDITIONAL
- ENRICHMENT
- VALIDATION
- DOWNSTREAM

Allowed technology states must include:
- IMPLEMENTED
- PARTIAL
- MANUAL
- FUTURE_SYSTEM
- UNRESOLVED
- NOT_APPLICABLE

Allowed lifecycle/status states must support at least:
- ACTIVE
- RESOLVED
- RETIRED
- UNRESOLVED

Do not hard-delete a valid historical dependency solely because it is no longer active. Retire it unless it was erroneous/duplicate.

## 6. Known source material that must be reviewed

At minimum:

- `docs/installer/INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md`
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
- `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md`
- `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md`
- `docs/home-assistant/WNYHS_POSTINSTALL_DASHBOARD_ASSEMBLY_PROFILE_REV01.md`
- `docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md`
- dashboard audit/reconciliation/build-readiness records
- `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/WNYHS-BP001E_Handoff_Warranty_Support_Deep_Sweep.md`
- materially relevant quote/install/inventory/asset/warranty/support/CRM/business-process records found through concept search

Known candidate shared record chain from INSTALL006A must be evaluated, not blindly promoted:

`Contact/Customer -> Property -> Deal/Opportunity -> Estimate -> SOW -> Quote -> BOM -> Order/Procurement -> Inventory Allocation -> Bench Build -> Install Job -> Commissioning Record -> Customer Signoff -> Installed Asset Register -> Warranty Record -> Support Ticket/RMA -> Expansion/Add-on Opportunity`

## 7. Dashboard completeness criterion

The initial register is sufficient for this task when every material Dashboard variable/domain recovered from the bounded source sweep can answer:

1. what produces or validates it;
2. what Dashboard process/class/component consumes it;
3. whether that producer exists technologically today;
4. what current manual/evidence fallback exists;
5. what future system is expected to own it, if any;
6. what lifecycle gate it controls or informs;
7. whether its absence blocks, conditionally limits, validates, or merely enriches Dashboard behavior;
8. what source evidence supports the relationship.

Unknowns remain explicit. Do not fabricate technology, database, CRM, or record ownership.

## 8. Database/GitHub architecture handoff

Produce a bounded handoff section for the pending database architecture work containing:

- shared entities/records implied by the dependency map;
- identifiers/associations that require durable representation;
- lifecycle states that cross system boundaries;
- data ownership conflicts or unresolved source-of-truth questions;
- fields/data groups currently manual but intended for future automation;
- relationships that must be accommodated structurally later.

Do not design the database schema in this task.

## 9. Skill compatibility

The register must be usable by the companion `business-interdependency-assessor` Skill.

The Skill must be able to:
- inspect existing register entries first;
- examine relevant neighboring processes for the current engagement;
- identify upstream/downstream/shared-data/lifecycle-gate/authority impacts;
- classify current technology maturity;
- reuse/update/retire/propose dependency records;
- avoid forcing a full company-wide audit for every engagement;
- flag discovered database-architecture requirements without deciding implementation structure.

## 10. Required outputs

1. One living Business Process Interdependency Register in the appropriate repository governance/business-process location.
2. A concise register usage/maintenance section or companion standard if needed.
3. Dashboard-complete seed entries supported by evidence.
4. Database/GitHub architecture handoff section.
5. Explicit unresolved/future-system entries rather than invented implementations.
6. Updated references from `DASHBOARD-SYSTEM-CANONICALIZATION-001` so that task consumes the register.
7. Closeout summary listing sources reviewed, entries created/updated, unresolved gaps and any new materially discovered cross-business dependency.

## 11. Protected / forbidden scope

Do not:
- change HubSpot/CRM records, schema, properties, workflows or associations;
- change live Home Assistant or customer data/configuration;
- create or modify Cloudflare runtime/tunnels/DNS/Access;
- change payment/Stripe behavior;
- change scheduling;
- create database tables or migrations;
- implement APIs, syncs, portals, inventory automation, support automation or installer software;
- invent customer records or property facts;
- perform a broad unbounded company-wide archaeology project;
- merge.

## 12. Validation

Required:
- `git diff --check`
- docs-only changes
- no protected-system mutation
- Dashboard dependency coverage criterion satisfied
- every seeded dependency cites/supports provenance
- current versus future technology clearly distinguished
- register schema supports progressive company-wide expansion
- database-architecture handoff captures structural requirements without designing schema
- Dashboard canonicalization work order points to the new register as prerequisite/current input

## 13. Closeout

Report:
- exact files changed/created;
- register path;
- number of seeded dependency records;
- Dashboard domains covered;
- unresolved/future-system items;
- database/GitHub architecture handoff summary;
- confirmation no runtime/protected systems changed;
- any REQUIRED_FOR_EXECUTION blocker;
- PR URL/state if created;
- do not merge.
