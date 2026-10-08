# WNYHS Business Process Interdependency Register REV01

Status: Active living governance register

Task ID: BPROC-INTERDEP-001

Customer-facing: No

Implementation authority: No

Last reviewed: 2026-10-08

## 1. Purpose and authority boundary

This register owns the durable statement of which WNYHS processes, records, evidence, lifecycle gates, and owner boundaries depend on one another. REV01 is deliberately seeded around dependencies that materially affect the Dashboard System and the adjacent quote-to-install-to-support lifecycle. It is not an exhaustive company-wide process audit.

The register records **what** must relate or be exchanged. It does not decide **how** a database, GitHub record, HubSpot object, API, portal, synchronization path, or runtime schema will represent those relationships. It creates no CRM objects, database tables, APIs, customer records, property facts, runtime integrations, or implementation authority.

Current repository authority outranks candidate extraction material. Candidate artifacts are used only as provenance for explicit candidate or unresolved relationships and never as proof that a process or technology is operational.

## 2. Register schema and controlled values

Each dependency record is the join of the same `dependency_id` across Tables A, B, and C in Section 5. Together the three rows contain every required field.

| Field | Meaning |
| --- | --- |
| `dependency_id` | Stable identifier; do not reuse a retired ID. |
| `upstream_process_or_system` | Producer, validator, or controlling upstream process/system. |
| `downstream_process_or_system` | Consumer or affected process/system. |
| `relationship_type` | The nature of the dependency or exchange. |
| `exact_data_artifact_or_state` | Documented record, evidence, state, or decision exchanged. |
| `producing_owner` | Current owner of the upstream fact or artifact. |
| `consuming_owner` | Current owner of its use. |
| `current_source_of_truth_or_evidence` | Best current governed source or evidence class; unknowns remain explicit. |
| `current_technology_state` | One controlled technology-state value below. |
| `future_intended_source` | Documented future owner/system, or `NONE DOCUMENTED`. |
| `lifecycle_gate_or_condition` | Stage or condition controlled or informed. |
| `dependency_class` | One controlled dependency-class value below. |
| `required_for_execution` | `YES`, `NO`, or `CONDITIONAL`, scoped by the notes/gate. |
| `current_manual_or_fallback_path` | Current evidence-safe path when automation is absent or unavailable. |
| `customer_safe_or_internal_only` | Handling boundary. |
| `freshness_requirement` | When evidence must be current or revalidated. |
| `provenance_or_source_reference` | Repository evidence supporting the record. |
| `status` | `ACTIVE`, `RESOLVED`, `RETIRED`, or `UNRESOLVED`. |
| `unresolved_owner_or_governance_gap` | Explicit ownership, policy, or source-of-truth gap. |
| `affected_records_or_entities` | Logical records/entities affected; not a physical schema declaration. |
| `database_architecture_relevance` | Structural requirement to hand off later, without implementation design. |
| `last_reviewed_date` | Last evidence review date. |
| `notes` | Scope, qualification, and non-inference notes. |

Allowed `dependency_class` values: `REQUIRED`, `CONDITIONAL`, `ENRICHMENT`, `VALIDATION`, `DOWNSTREAM`.

Allowed `current_technology_state` values:

- `IMPLEMENTED`: repository evidence identifies a current technical path; this does not prove any particular customer instance is live or current.
- `PARTIAL`: some technology or governed evidence path exists, but coverage, integration, or lifecycle persistence is incomplete.
- `MANUAL`: the current governed path is human-created or human-validated evidence.
- `FUTURE_SYSTEM`: the source/system is documented as future and is not represented as currently implemented.
- `UNRESOLVED`: current technology/source ownership cannot yet be established.
- `NOT_APPLICABLE`: the dependency is explicitly inapplicable in the stated scope.

## 3. Usage and maintenance rule

For each bounded engagement:

1. Inspect existing entries first; reuse an existing ID when the same relationship is being updated.
2. Examine only neighboring processes material to the engagement. Do not force a full company-wide audit.
3. Recover repository evidence before proposing a new relationship. Mark normalization or inference explicitly.
4. Classify current technology separately from a documented future system. Never promote a candidate object, field, integration, or customer fact by implication.
5. Update provenance, freshness, status, and review date when evidence changes.
6. Use `RETIRED` for a valid historical dependency that no longer applies. Delete only an erroneous duplicate and record the correction in task closeout.
7. Record new database/GitHub structural needs in the handoff section; do not choose tables, object technology, schemas, APIs, or synchronization design here.
8. Escalate `required_for_execution: YES` plus missing evidence as a blocker only for the affected lifecycle stage. A missing future enrichment system does not block the current HA-evidence-first dashboard-preparation baseline by itself.

This method is compatible with the future `business-interdependency-assessor` workflow: inspect, bound the neighboring-process sweep, classify maturity, reuse/update/retire/propose, preserve provenance, and hand structural requirements off without deciding implementation.

## 4. Dashboard coverage rule

For each recovered Dashboard variable/domain, the joined record below identifies its producer or validator, Dashboard consumer, present technology state, fallback, future source, lifecycle gate, dependency class, and provenance. `HA_INSTALLED_VERIFIED` remains the current preparation baseline. Quote, CRM, fulfillment/inventory, asset, warranty, support, portal, scheduling, procurement, and handoff sources are additive unless a later owner makes a specific item a stage gate.

## 5. Seed dependency records

### Table A — relationship and ownership

| dependency_id | upstream_process_or_system | downstream_process_or_system | relationship_type | exact_data_artifact_or_state | producing_owner | consuming_owner | dependency_class | required_for_execution |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BPI-001 | Lead intake / CRM contact | Dashboard preparation, handoff, and support context | Identity enrichment | Customer/contact identity and approved communication context | HubSpot/runtime owners for current lead persistence; customer owner for approval | DASHBOARD_PREP001, INSTALL009, INSTALL010 | ENRICHMENT | CONDITIONAL |
| BPI-002 | Household/account/company association | Property and Dashboard context | Association | Customer-to-household/account/company-to-property association, when governed | UNRESOLVED | Future CRM/portal owner; Dashboard consumer | ENRICHMENT | NO |
| BPI-003 | Property Model / site identification | All Dashboard classes and site capability model | Identity and scope binding | Stable non-secret property/site/install reference | PROPERTY001 / Quote System for planning; current site evidence owner for installed context | DASHBOARD_PREP001, INSTALL006, INSTALL011 | REQUIRED | YES |
| BPI-004 | Property assessment | Dashboard property context and location-dependent features | Metadata enrichment | Service/install address and approved location metadata | Property/quote process; CRM ownership unresolved beyond current intake fields | Dashboard preparation and future portal | CONDITIONAL | CONDITIONAL |
| BPI-005 | Property evidence and HA area/entity mapping | Dashboard capability assembly | Spatial/placement mapping | Floors, rooms, areas, zones, placement, detached structures, and unresolved mappings | FLOORPLAN owners; INSTALL005; authorized HA evidence | DASHBOARD_PREP001, INSTALL006, DASHBOARD001 | REQUIRED | YES |
| BPI-006 | Floorplan and spatial-property process | Quote/design preview and Dashboard property review | Spatial evidence | Approved/rough floorplan state, photos, LiDAR/3D/spatial artifact, placement context | FLOORPLAN000-004, PROPERTY001; future spatial-model owner unresolved | Dashboard preview workspace and site capability reconciliation | VALIDATION | CONDITIONAL |
| BPI-007 | Estimate / SOW / Quote / approved solution | Quote-stage preview and installed Dashboard reconciliation | Scope expectation | Proposed, quoted, customer-approved capability; package/options; instructions/exceptions | Quote System owners | Dashboard canonical lifecycle, DASHBOARD_PREP001 | VALIDATION | CONDITIONAL |
| BPI-008 | Customer scope approval / change handling | Quote, install, Dashboard preview, and commissioning | Approval gate | Approval, accepted scope, add-on/change-order state, and approved exception | Quote/operator approval owner; change-order owner unresolved | Installer, commissioning, Dashboard lifecycle | REQUIRED | YES |
| BPI-009 | BOM / hardware qualification | Inventory, bench, install, and Dashboard prep | Capability lineage | Approved product/part, quantity, location, capability, manufacturer/make/model/SKU where evidenced, compatibility, dashboard notes | Quote/Catalog/BOM owners | Inventory, installer, Dashboard preparation | VALIDATION | CONDITIONAL |
| BPI-010 | Protected payment verification | Procurement, inventory, and scheduling | Lifecycle gate | Deposit verified state or approved exception reference only | Stripe/payment runtime and GATES001 | Inventory readiness, scheduling, install readiness | REQUIRED | CONDITIONAL |
| BPI-011 | Procurement / ordering | Inventory allocation and install readiness | Fulfillment lineage | Supplier/vendor and order/procurement reference/status, without private vendor data | Operator/procurement owner unresolved | Inventory, installer, service lineage | CONDITIONAL | CONDITIONAL |
| BPI-012 | Inventory allocation | Bench build, install job, installed asset lineage | Allocation and identity | Allocated/staged/missing/substituted items; serialized-item requirement; serial where authorized | Inventory owner unresolved; INVENTORY001 is readiness governance only | INSTALL008-COMMISSIONING, future asset owner | REQUIRED | CONDITIONAL |
| BPI-013 | Scheduling / install-job planning | Installer execution and Dashboard lifecycle | Stage coordination | Install-job identity, approved scope, scheduled/onsite stage, access/readiness exceptions | Scheduling owner and future installer platform | INSTALL008-COMMISSIONING, Dashboard lifecycle | CONDITIONAL | CONDITIONAL |
| BPI-014 | Bench build, device naming, and HA setup | Dashboard preparation and commissioning | Technical readiness | Controller reference, staged device identity, customer-safe name, entity/area mapping, readiness/exceptions | INSTALL002, INSTALL004, INSTALL005, INSTALL008-COMMISSIONING | DASHBOARD_PREP001, INSTALL006, INSTALL011 | REQUIRED | YES |
| BPI-015 | Commissioning | Dashboard acceptance and handoff | Validation gate | Test results, installed/verified/degraded/deferred state, exceptions, dashboard readiness, handoff readiness | INSTALL008-COMMISSIONING | DASHBOARD001, INSTALL009, INSTALL011 | REQUIRED | YES |
| BPI-016 | Authorized sanitized HA export | Dashboard requirements preparation | Evidence intake | Registry-derived installed capability evidence, integrations/resources, areas/entities, evidence date | HA-BACKUP001 and canonical export process | DASHBOARD_PREP001, INSTALL011 | REQUIRED | YES |
| BPI-017 | Dashboard requirements preparation | Dashboard assembly | Sanitization and semantic mapping | Requirements packet and sanitized site capability model with evidence class, freshness, visibility, states/actions, and unresolved mappings | DASHBOARD_PREP001 | INSTALL006, DASHBOARD001, INSTALL011 | REQUIRED | YES |
| BPI-018 | Site capability model and owner standards | Customer, Installer/Commissioning, and Service/Operator Dashboard assembly | Governed capability binding | Semantic capability, customer label, installed/availability posture, authorized binding, class visibility | INSTALL006 plus exact domain owners | DASHBOARD001 / bounded site task | REQUIRED | YES |
| BPI-019 | Quote/design preview and deterministic prototype | Customer/operator design approval | Approval evidence | Preview posture, simulated versus authoritative state, review decision, revision queue, known limitations | DASHBOARD001 and canonical lifecycle task | Bounded implementation task | VALIDATION | YES |
| BPI-020 | Identity/permission backend and assignment process | Dashboard class access | Authorization binding | Authenticated identity/context, actual grants, assignment/change approval, denial tests, revocation evidence | Authorized backend identity owner; INSTALL010 acceptance contract | All Dashboard classes | REQUIRED | YES |
| BPI-021 | Bounded Dashboard implementation | Acceptance, soak, handoff, and retirement | Delivery lifecycle | Additive route/name, binding result, rollback evidence, acceptance/soak result, legacy-retirement eligibility | DASHBOARD001 and INSTALL011; bounded site task | INSTALL008, INSTALL009, service/handoff owners | REQUIRED | YES |
| BPI-022 | Installed-asset creation/maintenance | Handoff, warranty, service, and Dashboard support context | Asset lineage | Installed asset ID; property/location; make/model/serial/source; install/replacement/retirement state | Installed Asset owner unresolved | INSTALL009, INSTALL010, future Warranty/Support/Portal | DOWNSTREAM | CONDITIONAL |
| BPI-023 | Warranty activation and maintenance | Handoff and service review | Coverage relationship | Warranty term/start/end/status, eligibility, exception, extended coverage | Warranty owner unresolved; INSTALL009 is handoff-level only | INSTALL010 and future support/portal | DOWNSTREAM | CONDITIONAL |
| BPI-024 | Support intake / ticket / RMA | Service Dashboard and follow-up | Case linkage | Issue, affected asset/device/system, urgency, authorization, RMA/replacement, resolution, recurrence | Support-ticket owner/system unresolved | INSTALL010 Service/Operator Dashboard | DOWNSTREAM | CONDITIONAL |
| BPI-025 | Service diagnostics | Support resolution and onsite follow-up | Operational evidence | Offline/stale/low-battery/failure/integration/backup/update posture; next action; onsite need | INSTALL010 with exact runtime/domain owners | Support ticket/RMA and service handoff | VALIDATION | CONDITIONAL |
| BPI-026 | Customer authorization and remote-access governance | Customer access and Service/Operator Dashboard | Access authorization | Authorization/method/date, technical availability, access status, customer explanation, revocation/offboarding evidence | INSTALL010 and remote-access standard; actual backend/Cloudflare owners | Customer and Service/Operator Dashboard acceptance | REQUIRED | CONDITIONAL |
| BPI-027 | Local and remote availability evidence | Dashboard state and support triage | Availability state | Local reachable/unreachable, remote available/blocked, stale/degraded/unavailable/unknown posture | Authorized HA/network/remote-access evidence owners | INSTALL006, INSTALL010 | REQUIRED | YES |
| BPI-028 | Handoff, training, correction, and signoff | Dashboard closeout, warranty, and support transition | Acceptance gate | Training confirmation, dashboard review, discrepancies/corrections, customer acceptance, deferred items, signoff method | INSTALL009; customer/operator approval | INSTALL011, future Warranty/Support/Portal | REQUIRED | YES |
| BPI-029 | Notification Engine and customer profile | Dashboard Alert/Notification Center and activity | Cross-system state/event interface | Event identity, source/transition, current/recent/resolved posture, destination, customer/service visibility, routing/history boundary | WNYHS Notification Engine and customer profile | INSTALL006 presentation; Dashboard preparation | CONDITIONAL | CONDITIONAL |
| BPI-030 | Building/Household Mode source | Dashboard controls, notifications, and automations | Shared state/control contract | Authoritative mode, permitted transitions, role restrictions, timestamp/change evidence, unknown/degraded handling | Mode owner not yet a standalone promoted standard; Notification Engine owns its interface | INSTALL006, Notification Engine, AUTOMATION001 | REQUIRED | CONDITIONAL |
| BPI-031 | Automation/routine/scene process | Dashboard controls and state presentation | Behavior interface | Evidenced action/routine/mode, prerequisites, confirmation/failure/unknown state, manual fallback | AUTOMATION001 and authorized HA evidence | INSTALL006 / Dashboard preparation | CONDITIONAL | CONDITIONAL |
| BPI-032 | Camera/doorbell media privacy decisions | Dashboard media, notification media, and remote support | Privacy/authorization gate | Visibility, recording/audio posture, retention owner/config evidence, notice/consent, history, access/revocation | WNYHS Camera and Doorbell Media Privacy Standard | Customer, Installer, and Service Dashboard owners | REQUIRED | CONDITIONAL |
| BPI-033 | Property/site location and time configuration | Dashboard footer and location-sensitive behavior | Environmental context | Local weather, local date/time, timezone, sunrise/sunset source and freshness | Source owner unresolved; authorized site/HA evidence may supply some values | INSTALL006 customer shell and applicable automations | CONDITIONAL | CONDITIONAL |
| BPI-034 | Optional mapping, utility/environmental, or emergency-information feature owner | Applicable Dashboard widget/capability | Feature metadata | Location/utility/environmental metadata and approved customer-safe source; emergency-response integration is not implied | Exact feature owner unresolved | Dashboard preparation and applicable domain owner | CONDITIONAL | NO |
| BPI-035 | Installed-base review / customer request | Expansion or add-on quote lifecycle | Feedback loop | Existing capability/asset context, support finding, customer request, approved opportunity reference | Support/operator and Quote System | Quote, property, BOM, install, and later Dashboard preview | DOWNSTREAM | NO |
| BPI-036 | Future-business expectation versus HA-installed evidence reconciliation | Dashboard preparation, implementation, and acceptance | Discrepancy control | `FUTURE_BUSINESS_EXPECTATION`, `HA_INSTALLED_VERIFIED`, and `DISCREPANCY_REQUIRES_RESOLUTION` comparison/disposition | Source-domain owner plus DASHBOARD_PREP001 evidence classifier | Dashboard canonical lifecycle and affected domain owner | VALIDATION | YES |

### Table B — current/future state and lifecycle handling

| dependency_id | current_source_of_truth_or_evidence | current_technology_state | future_intended_source | lifecycle_gate_or_condition | current_manual_or_fallback_path | customer_safe_or_internal_only | freshness_requirement | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BPI-001 | API-mediated HubSpot contact/deal persistence is evidenced for lead intake; no Dashboard integration is evidenced | PARTIAL | Governed CRM/portal identity relationship | When identity is needed for customer access, handoff, or support; not a prerequisite to HA-only preparation | Approved non-secret site/install reference and manual customer confirmation | Split: minimum customer-safe identity; CRM/internal detail restricted | Reconfirm at access assignment, handoff, and support intake | ACTIVE |
| BPI-002 | INSTALL006A candidate architecture only | UNRESOLVED | Future governed CRM or portal association | Only when multi-person, household/account, company, or multi-property context is approved | Treat as absent; do not infer from surname, address, or company | Internal until customer-safe use is approved | Review when CRM/property architecture is defined | UNRESOLVED |
| BPI-003 | Approved Property Model for planning; authorized sanitized HA/site packet for current installed Dashboard context | PARTIAL | Durable Property record in future CRM/portal/database architecture | Required before site-bound capability/model assembly | Minimum approved non-secret site/install reference in the preparation packet | Customer-safe label allowed; internal identifiers restricted | Confirm per packet and revalidate on property/context change | ACTIVE |
| BPI-004 | Manual property evidence and handoff fields; current CRM property authority is not established for Dashboard use | MANUAL | Governed Property/CRM/portal source | Required only for a feature, service, or handoff artifact that depends on address/location | Operator-entered approved metadata with evidence reference | Customer-safe address/label only where authorized; otherwise internal | Confirm before customer display and on property change | ACTIVE |
| BPI-005 | Approved floorplan/property evidence plus authorized HA area/entity evidence | PARTIAL | Property/spatial model linked to site capability model | Required for any capability whose identity, view, or action depends on placement | Preserve unresolved mapping; omit or block only affected capability | Customer-safe room/area labels; raw identifiers internal | Revalidate after placement, naming, or area/entity changes | ACTIVE |
| BPI-006 | Quote-system floorplan artifacts are manual/local; no Gaussian-splat or durable 3D system is evidenced | MANUAL | Future governed spatial property model | Floorplan baseline approval before dependent placement; spatial view only when available/approved | Approved vector/floorplan or rough/limited-evidence disposition; no invented geometry | Customer-safe approved visual; raw evidence/internal notes restricted | Confirm revision and approval state before preview/reuse | ACTIVE |
| BPI-007 | Quote-system documents/local workspace and approved artifacts; integration to Dashboard is not evidenced | PARTIAL | Future Quote System/portal input | Preview may use proposed/quoted state; production needs installed/verified evidence | Manually reference approved quote/SOW/scope and keep it separate from installed state | Customer-safe approved scope; internal SOW/BOM detail restricted | Use latest approved revision; invalidate on scope change | ACTIVE |
| BPI-008 | Manual operator/customer approval and commissioning exception records | MANUAL | Future Quote/Change Order/Installer/Handoff systems | Scope expansion or deviation requires approval before execution; unresolved change blocks affected work | Stop expansion; record request, owner, disposition, and affected artifacts | Customer-safe approval/exception summary; internal rationale restricted | Reconfirm after every approved scope change | ACTIVE |
| BPI-009 | PROPERTY001/HARDWARE001/quote workspace evidence; HARDWARE001 remains placeholder | PARTIAL | Governed Quote/Catalog/BOM source | Before procurement/bench/install for affected capability; validates expected Dashboard feature | Manual BOM/hardware review with version and approval evidence | Internal; customer sees capability/outcome, not internal BOM/vendor details | Revalidate on BOM revision or substitution | ACTIVE |
| BPI-010 | Protected payment runtime/record governs actual verification; this register stores no payment facts | IMPLEMENTED | Protected payment reference integration only if separately authorized | Deposit before job-specific purchase or scheduling under GATES001 | Operator verifies through authorized payment evidence; do not trust browser redirect | Internal gate; customer-safe status only through payment owner | At each purchase/scheduling decision | ACTIVE |
| BPI-011 | Manual/operator procurement evidence; no automated source of truth documented | MANUAL | Future Procurement/Inventory system | Needed when ordered/missing item state affects install or Dashboard-capability readiness | Manual non-secret order reference and status; mark unknown explicitly | Internal only | Update on order/substitution/receipt events | ACTIVE |
| BPI-012 | Manual inventory/readiness and INSTALL008 checklists; no inventory runtime is authorized | MANUAL | Future Inventory/Asset system | Before bench/install for allocated hardware; serial capture only where required/authorized | Checklist/pick-list plus exception log | Internal; customer-safe installed summary later | Verify at allocation, staging, install, replacement | ACTIVE |
| BPI-013 | Manual scheduling/install packet and arrival/scope confirmation | MANUAL | Future Scheduling and Installer Platform | Coordinates readiness and onsite stage; absence does not manufacture installed status | Approved job packet and operator-confirmed schedule/context | Internal, with customer-safe appointment/status handled by owner | Confirm at scheduling, dispatch/arrival, and scope change | ACTIVE |
| BPI-014 | Installer checklists, naming/area standards, and authorized HA evidence | PARTIAL | Future Installer Platform | Required before affected capability can be assembled/bound | Record onsite-only, deferred, blocked, and exception states | Customer-safe names only; technical mappings internal | Revalidate after pairing, naming, area, or hardware change | ACTIVE |
| BPI-015 | INSTALL008 checklist/evidence produced manually | MANUAL | Future Installer/Handoff system | Critical blockers prevent affected implementation/acceptance/handoff | Checklist, test evidence, exception owner and disposition | Split customer-safe exception summary from internal evidence | Current at commissioning and after onsite changes | ACTIVE |
| BPI-016 | Canonical export tooling/process exists; no customer export is assumed present | PARTIAL | Future authorized evidence-ingestion workflow | Required before HA-evidence-driven preparation for a site | Operator-run export supplied transiently; use only authorized sanitized derivative | Internal evidence; customer-private/raw export prohibited | Evidence cutoff recorded; re-export after material HA change | ACTIVE |
| BPI-017 | DASHBOARD_PREP001 packet is the active manual governed path | MANUAL | Future governed preparation/assessor tooling | Deterministic handoff before assembly/build task | Complete packet with explicit unresolved/not-applicable entries | Sanitized internal model; customer-safe derivatives only | Record cutoff and revalidation triggers | ACTIVE |
| BPI-018 | Site capability model is assembled from governed evidence; binding remains separately authorized | MANUAL | Future Dashboard/Installer platform consuming durable capability model | Only installed/verified or truthfully degraded capability may bind to live customer UI | Omit planned/not-installed; isolate unresolved capability; use fixtures only in labeled prototype | Sanitized customer-safe state/action; bindings/raw IDs internal | Revalidate before implementation and after source/binding change | ACTIVE |
| BPI-019 | Deterministic prototype/review process is manual; preferred future HA-native approval path is specified in canonicalization work order | MANUAL | Governed Dashboard build/review workflow | Operator/customer design approval before bounded implementation | Labeled prototype with fixtures, review decision, and revision queue | Customer-safe preview; technical limitations may remain internal | Regenerate/reapprove after material model/design change | ACTIVE |
| BPI-020 | Actual backend evidence is site-specific; UI visibility is non-authoritative | MANUAL | Future identity/portal/installer system integration | Production assignment and acceptance; unresolved grants are blocking | Record intended role, then test actual allowed/denied paths and revocation | Internal evidence with customer-safe access explanation | At assignment/change/revocation and acceptance | ACTIVE |
| BPI-021 | Manual bounded delivery, validation, acceptance, and soak records | MANUAL | Future installer/handoff orchestration | Production must be additive; retirement only after acceptance/soak and separate authority | Preserve existing surface, explicit rollback, manual acceptance record | Customer-safe handoff; implementation/rollback detail internal | Current per release, acceptance, soak, and retirement decision | ACTIVE |
| BPI-022 | Handoff may summarize assets, but no current installed-asset register owner/system exists | FUTURE_SYSTEM | Future Installed Asset Register / Portal | Needed for durable replacement, warranty, and service lineage; not required for initial HA-only dashboard prep | Manual customer-safe installed summary plus internal commissioning evidence | Split customer-safe summary from serial/internal asset detail | Update at install, move, replacement, retirement | UNRESOLVED |
| BPI-023 | Warranty basics/manual notes only; exact trigger and legal policy unresolved | FUTURE_SYSTEM | Future Warranty system/record | Activation/eligibility must not be inferred; affects service and customer claims | State pending/unknown and route operator review | Customer-safe basic posture; internal/legal detail restricted | Review at handoff, support intake, coverage change/expiry | UNRESOLVED |
| BPI-024 | No governed ticket/RMA runtime is evidenced; planning fields only | FUTURE_SYSTEM | Future Support system or governed HubSpot Ticket/portal decision | Required only when a case exists; service Dashboard cannot invent ticket state | Manual support note/task under approved process; link by non-secret references | Split customer-visible status from internal diagnostics | Update at intake, triage, action, resolution, recurrence | UNRESOLVED |
| BPI-025 | INSTALL010 readiness sheet/manual authorized diagnostics | MANUAL | Future Support/Asset integration | Triage and resolution; onsite follow-up when remote review is insufficient | Manual evidence/note, next action, owner, and exception | Internal diagnostics; customer-safe explanation separate | At review and after each material action/state change | ACTIVE |
| BPI-026 | Standards define fields and review; actual access state is site evidence | PARTIAL | Future CRM/Portal/Support access record | Before remote access/support and at assignment/revocation/offboarding | Customer approval plus technical validation recorded without credentials | Customer-safe explanation plus internal non-secret evidence | Verify per session/task and on authorization/access change | ACTIVE |
| BPI-027 | Authorized HA/local/remote evidence is site-specific; no universal live state | PARTIAL | Future health/support integration | Affects displayed availability and support path; unknown never becomes normal | Explicit local versus remote status and last evidence date | Customer-safe effect/next step; diagnostics internal | Task-defined threshold; stale evidence becomes stale/unknown | ACTIVE |
| BPI-028 | INSTALL009 manual handoff/signoff fields; no persistence system implemented | MANUAL | Future Handoff/Portal/CRM record | After completed Dashboard review/corrections; before closeout where required | Record approval method or deferral with owner/reason | Customer-safe package and signoff; internal evidence separated | At handoff and after correction/re-acceptance | ACTIVE |
| BPI-029 | Company standard exists; customer profile/live validation may be absent per site | PARTIAL | Future governed Notification profile/config record | Only applicable events/routes may surface; routing is not owned by Dashboard | Show only evidenced event state; mark policy/profile gaps unresolved | Customer-safe event text; routing/diagnostic internals restricted | Live/current event plus governed history/retention window | ACTIVE |
| BPI-030 | Interface and mode classes are governed; a single standalone universal mode owner/source is not yet evidenced | PARTIAL | Future Building/Household Mode standard and site profile | Required for mode-dependent notification/control behavior only | Consume one verified site mode source; otherwise block affected behavior | Customer-safe mode label/control; internals restricted | Current state required; transitions timestamped where supported | UNRESOLVED |
| BPI-031 | HA evidence may show automations/modes/scenes; no behavior inferred without owner evidence | PARTIAL | Future governed automation profile/installer input | Control appears only when behavior, permission, and result semantics are verified | Manual/local fallback documented; omit or disable unresolved action | Customer-safe action/state; implementation internals restricted | Revalidate after automation/dependency/permission change | ACTIVE |
| BPI-032 | Mandatory site decision record is manual; no universal recording/audio/retention choices | MANUAL | Future privacy/portal/config evidence integration | Blocks affected media capability implementation/acceptance when required decisions are unknown | `OPERATOR_DECISION_REQUIRED` or `UNRESOLVED / BLOCKED`; omit affected media | Strict split; no private media/raw identifiers in repo | Revalidate on policy, config, user, platform, or access change | ACTIVE |
| BPI-033 | INSTALL006 requires weather/date-time presentation; exact authoritative source is not assigned | UNRESOLVED | Future governed site/location/environment source | Required only for enabled location/time-dependent feature | Use explicitly labeled fixture in prototype; omit/block live feature until source is verified | Customer-safe output; exact coordinates/config internal | Current enough for feature; timezone/property changes trigger review | UNRESOLVED |
| BPI-034 | No universal source or required feature set is documented | NOT_APPLICABLE | Feature-specific future owner if separately approved | Not required unless a bounded Dashboard/site scope includes the feature | Mark not applicable or unresolved; never infer emergency response/dispatch | Customer-safe only if separately approved; internal source details restricted | Feature-specific | ACTIVE |
| BPI-035 | Manual support/handoff/customer request context; no add-on system | MANUAL | Future CRM/Quote add-on opportunity | Starts a new bounded quote/approval lifecycle; does not silently alter installed Dashboard | Record customer request/finding and route to normal quote process | Customer-safe opportunity; internal sales/support notes separated | Confirm current installed context before quoting | ACTIVE |
| BPI-036 | DASHBOARD_PREP001 evidence classes and Assembly Profile reconciliation rule | MANUAL | Future automated reconciliation across governed business sources | Any material mismatch blocks or limits only affected capability/stage until disposition | Preserve both sources, identify owner/next evidence, and do not promote/discard silently | Customer-safe discrepancy only when needed; detailed evidence internal | Re-run when either expected or installed evidence changes | ACTIVE |

### Table C — provenance, gaps, affected records, and architecture relevance

| dependency_id | provenance_or_source_reference | unresolved_owner_or_governance_gap | affected_records_or_entities | database_architecture_relevance | last_reviewed_date | notes |
| --- | --- | --- | --- | --- | --- | --- |
| BPI-001 | `docs/runtime/hubspot_sync_contract.md` §§Current State, Data Contract, Sync Operation Boundaries; INSTALL006A §§6, 8; DASHBOARD_PREP001 Future Additive Enrichment | Dashboard identity consumption and field-level visibility are not implemented/assigned | Contact/Customer, Deal, site packet, user/role context | Durable identity links and privacy/visibility classifications must be representable | 2026-10-08 | Current CRM evidence is limited to the protected lead path; no new CRM field/object is asserted. |
| BPI-002 | INSTALL006A §§4.3, 6, 12 | Whether residential grouping uses Company, custom object, portal record, or no separate record | Contact/Customer, Household/Account/Company, Property | Optional association and cardinality must remain open | 2026-10-08 | Absence does not block current single-site HA evidence preparation. |
| BPI-003 | PROPERTY001 Purpose/Definition/Operating Chain; DASHBOARD_PREP001 Required Preparation Packet; INSTALL006 §§5, 13 | Canonical property ID and durable owner remain unresolved | Property, site/install reference, Site Capability Model | Stable identifier and cross-record property association are required later | 2026-10-08 | Planning property evidence and installed capability evidence remain distinct. |
| BPI-004 | INSTALL006A §§6, 8, 12; INSTALL009 §9; INSTALL006 §14 | Canonical address/location source and safe visibility rules are unresolved | Property, address/location metadata, handoff, widgets | Address/location data group needs ownership, privacy, and provenance | 2026-10-08 | No customer address or property fact is created here. |
| BPI-005 | PROPERTY001 Source Evidence Relationship; INSTALL008 §§4.9, 5.2, 5.5; DASHBOARD_PREP001 Required Preparation Packet | Reconciliation owner for conflicting property versus HA placement evidence | Property, Floor/Room/Area, Device, Entity, Capability | Hierarchical location relationships and versioned mappings are required | 2026-10-08 | Detached-structure modeling remains a later architecture choice. |
| BPI-006 | FLOORPLAN000-004; PROPERTY001; `DASHBOARD-SYSTEM-CANONICALIZATION-001_WORK_ORDER_REV01.md` §5 | Spatial-model owner/storage and 3D implementation are unresolved | Property Model, Floorplan, spatial artifact, placement | Versioned artifact references and property/capability associations must be accommodated | 2026-10-08 | Spatial model is not installed-capability authority. |
| BPI-007 | PROPERTY001 Operating Chain; DASHBOARD_PREP001 Evidence Classes/Future Additive Enrichment; INSTALL006A §§3-4 | Canonical durable quote/SOW integration fields remain unresolved | Estimate, SOW, Quote, approved solution, capability expectation | Versioned scope-to-property/capability associations are required | 2026-10-08 | Quoted state cannot manufacture installed state. |
| BPI-008 | INSTALL008 §§5.1, 5.18, 8-9; INSTALL009 §§8-10; BP001E §§11, 15-16 (candidate only) | Explicit change-order owner/process remains missing | Approval, exception, change/add-on request, Quote, Install Job | Approval history, supersession, affected-scope links, and human decision evidence are needed | 2026-10-08 | Candidate evidence supports the gap, not an active process. |
| BPI-009 | HARDWARE001; PROPERTY001; INSTALL006A §§3, 8; BP001D (candidate extraction only) | Final BOM maturity fields and source system are not yet owned | BOM, Product/Part, Capability, Property placement | Versioned BOM lines and part/capability/location associations are implied | 2026-10-08 | Manufacturer/model/SKU exist only when evidenced by governed product/BOM sources. |
| BPI-010 | GATES001 Deposit Gate; INSTALL006A §4.2 and §8 payment-reference boundary | No Dashboard-owned payment field; protected payment integration remains separate | Quote/payment reference, inventory readiness, schedule/install gate | Cross-system gate/reference must be durable without copying payment authority | 2026-10-08 | This record authorizes no payment read/write or schema change. |
| BPI-011 | INSTALL006A §§3, 6, 8, 12; INVENTORY001 Boundary; BP001D (candidate only) | Procurement owner/system and minimum record are unresolved | Order/Procurement, Vendor/Supplier, Inventory Allocation | Order-to-allocation-to-job associations and provenance are implied | 2026-10-08 | Private vendor details remain outside customer/dashboard surfaces. |
| BPI-012 | INVENTORY001; INSTALL008 §§4.2, 4.16; INSTALL006A §§3, 6, 8 | Inventory source of truth and serialized-item policy are unresolved | Inventory Item, Allocation, serialized item, job, asset | Planned-versus-allocated-versus-installed states and serial lineage require durable separation | 2026-10-08 | A BOM does not prove physical availability. |
| BPI-013 | INSTALL006A §§3, 6, 10; INSTALL008 §§5.1, 10; GATES001 | Scheduling-to-install record ownership and integration remain separately governed | Schedule reference, Install Job, job packet, exception | Stable job association and lifecycle state crossings must be supported | 2026-10-08 | Scheduling is coordination evidence, not Dashboard capability evidence. |
| BPI-014 | INSTALL006A §5; INSTALL008 §§4.1-4.12; INSTALL011 §§5-7 | Persistence owner for bench/name/entity readiness remains unresolved | Bench Build, Device, Entity, Area, Dashboard readiness | Device/job/property/capability mappings and exception states need durable linkage | 2026-10-08 | Customer-safe names must remain separate from raw identifiers. |
| BPI-015 | INSTALL008 §§5-10; Assembly Profile §3(P-R) | Long-term commissioning record storage is unresolved | Commissioning Record, test evidence, exception, handoff readiness | Versioned validation results and blocker/disposition history are required | 2026-10-08 | Checklist authority does not prove a site has passed. |
| BPI-016 | INSTALL011 §§3-6; DASHBOARD_PREP001 Current Standard/Evidence Classes; HA-BACKUP001 referenced owner | Automated ingestion/storage is intentionally not selected | Export package, evidence cutoff, sanitized derivative | Raw/transient versus sanitized/durable evidence boundaries and lineage must be represented | 2026-10-08 | No raw customer export was accessed for this register. |
| BPI-017 | DASHBOARD_PREP001 Required Preparation Packet and Handoff Gate; Post-Install Assembly Profile §§2-5 | Durable packet storage/format and assessor implementation remain future | Requirements Packet, Site Capability Model, unresolved mapping | Versioning, provenance, field classification, and per-capability blockers are structural needs | 2026-10-08 | Current process can operate manually. |
| BPI-018 | INSTALL006 §§2-13; INSTALL011 §§6-9; Assembly Profile §3(C-K) | Runtime binding mechanism remains site/task-specific | Capability, Device, Entity, Area, Dashboard Class, binding | Many-to-many capability/evidence/class/permission relationships must be representable | 2026-10-08 | The register does not choose a Dashboard data schema. |
| BPI-019 | INSTALL006 §15; INSTALL011 §11; canonicalization work order §§3(B,F) | Preferred HA-native approval implementation is pending canonicalization | Prototype, fixture, review decision, approval, revision | Artifact revision, evidence posture, reviewer decision, and supersession links are required | 2026-10-08 | Generic HTML remains secondary under the pending work order. |
| BPI-020 | INSTALL006 §5; INSTALL010 §10A; Assembly Profile §3(N) | Actual backend roles/grants are site evidence; no universal role schema is defined | User/person, role, property, Dashboard Class, assignment, revocation | Time-bounded assignments, approvals, and test evidence must be durable | 2026-10-08 | UI state never substitutes for authorization. |
| BPI-021 | DASHBOARD001 REV02 delivery lifecycle; INSTALL011 §§12-13; Assembly Profile §3(Q-S) | Durable release/soak/retirement record system is unresolved | Dashboard version, binding release, rollback, acceptance, retirement | Version lineage and stage-gated status transitions need representation | 2026-10-08 | Retirement always remains separately authorized. |
| BPI-022 | INSTALL006A §§5-6, 12; INSTALL009 §§6, 10; INSTALL010 §8 | Installed Asset owner, ID format, and system are unresolved | Installed Asset, Device/Product, Property/Location, replacement, retirement | Asset identity and temporal install/replacement/retirement lineage are core future requirements | 2026-10-08 | `ASSET001` cited historically for this concept is not a current installed-asset implementation. |
| BPI-023 | INSTALL009 §7; INSTALL010 §8; BP001E §§7, 12, 16 (candidate only) | Warranty trigger, terms, coverage policy, owner, and system are unresolved | Warranty Record, Installed Asset, Customer Signoff, Support Case | Coverage periods, triggers, exceptions, and asset/customer associations must be supported | 2026-10-08 | Do not infer coverage or dates. |
| BPI-024 | INSTALL010 §§3-10, 14; BP001E §§8-10, 12, 16 (candidate only) | Ticket/RMA object/system, owner, and workflow are unresolved | Support Ticket/Case, RMA, Asset, Property, Resolution, recurrence | Case-to-asset/property/install/warranty links and status history are required | 2026-10-08 | HubSpot Ticket suitability is only a candidate question in INSTALL006A. |
| BPI-025 | INSTALL010 §§4, 6-9; INSTALL008 §§5.12, 5.14 | Live diagnostic sources and retention remain exact-domain/site decisions | Diagnostic observation, exception, support case, onsite follow-up | Timestamped observations, evidence source, next action, and resolution links are needed | 2026-10-08 | Service Dashboard is not continuous monitoring. |
| BPI-026 | INSTALL010 §§5, 9-10A; cloudflare remote-access standard §§2, 5-7, 10 | Record owner/storage and method-specific implementation remain separately governed | Authorization, user/account, role, access method/status, revocation | Consent/authorization and time-bounded access associations require durable auditability | 2026-10-08 | No credentials, private URLs, tunnel facts, or customer access facts are recorded here. |
| BPI-027 | INSTALL006 §11; INSTALL010 §§5-7; cloudflare remote-access standard §§4-8 | Universal health source/threshold is not defined | Availability observation, capability, local path, remote path | Distinct local/remote status, observation time, and freshness rules must be supported | 2026-10-08 | Repository standards are not live-state evidence. |
| BPI-028 | INSTALL009 §§3, 8-10; INSTALL011 §13; BP001E §§3-7, 11, 15-16 (candidate only) | Approval storage/signature authority and future Handoff system are unresolved | Customer Signoff, training, correction, handoff package, exception | Human approval evidence, document revision, deferral, and downstream warranty/support links are needed | 2026-10-08 | Training/signoff is post-completion, not initial preparation. |
| BPI-029 | Notification Engine §§1.2, 3-6, 8, 14-17.1; INSTALL006 §§8-9 | Customer-profile presence, site event sources, retention duration, and live validation are site decisions | Event, mode, recipient group, notification, history item, Dashboard destination | Event lifecycle, source, resolution, routing/visibility, and history/audit separation require representation | 2026-10-08 | Dashboard does not own routing or prove external delivery. |
| BPI-030 | Notification Engine §§2-6; INSTALL006 §§6, 10; Assembly Profile §3(E,H) | Standalone Building/Household Mode owner and universal values are not yet promoted | Mode, transition, user/role, notification, automation, Dashboard control | Shared state source and time-stamped transitions across consumers must be accommodated | 2026-10-08 | Site-specific BKLF values are not universalized. |
| BPI-031 | AUTOMATION001; DASHBOARD_PREP001 packet fields; INSTALL006 §10 | Site behavior, override, permission, and implementation evidence remain conditional | Automation/Routine/Scene, capability, control, command result | Control-to-behavior prerequisites and authoritative result state need durable linkage | 2026-10-08 | A discovered automation does not prove customer authorization or safe control. |
| BPI-032 | Camera Media Privacy Standard §§1-6; INSTALL010 §10A; DASHBOARD_PREP001 packet fields | Site policy choices remain operator decisions where not evidenced | Media capability, user/role, consent/notice, retention config, history, access | Policy/config/evidence versioning and per-audience authorization relationships are required | 2026-10-08 | No universal retention or recording posture is created. |
| BPI-033 | INSTALL006 §§7, 14; canonicalization work order §7A | Exact source, owner, and fallback for weather/timezone/sun data are unresolved | Property/site, timezone, weather observation, sun context, Dashboard footer | Location/time source provenance and freshness need representation if enabled | 2026-10-08 | Prototype fixtures must be labeled simulated. |
| BPI-034 | BPROC work order §4; canonicalization work order §7A; INSTALL009 §3 utility feature examples | No feature-wide owner/source or approved emergency-service integration is documented | Optional widget, property/location metadata, utility/environment reading | Extensible feature-source associations are needed only when separately scoped | 2026-10-08 | Emergency/dispatch metadata is `NOT_APPLICABLE` absent separate lawful authority. |
| BPI-035 | INSTALL006A shared chain; INSTALL009 §§3, 10; INSTALL010 §8; BP001E §10 (candidate only) | Add-on workflow owner and whether it reuses full lifecycle are unresolved | Expansion/Add-on Opportunity, Property, Asset, Quote, Scope | New opportunity must link to current installed context without mutating history | 2026-10-08 | Add-on discovery is not approval or implementation authority. |
| BPI-036 | DASHBOARD_PREP001 Evidence Classes/Generation Boundary; Assembly Profile §§2, 4-5; reconciliation audit §5 | Durable disposition owner/storage across source domains remains future | Expectation, installed evidence, discrepancy, disposition, affected capability | Parallel evidence assertions, conflicts, owner disposition, and non-destructive history are required | 2026-10-08 | This control prevents quoted scope and installed truth from being conflated. |

## 6. Dashboard-domain completeness summary

The initial seed covers:

- customer/contact identity and optional household/account relationships;
- property/site identity, address/location, rooms/areas, floorplans, LiDAR/3D/spatial context;
- estimate, SOW, quote, approved solution, preview, approval, change/add-on, and discrepancy states;
- BOM, products/parts, compatibility, vendor/procurement, inventory allocation, serialization, staging, and substitution;
- payment and scheduling only as protected upstream lifecycle gates that affect readiness;
- bench build, naming, HA entity/area mapping, job packet, install, commissioning, exceptions, and readiness;
- sanitized HA evidence, requirements packet, Site Capability Model, three Dashboard classes, prototype approval, authorization, additive rollout, rollback, soak, and retirement;
- installed assets, warranty, support/ticket/RMA, diagnostics, replacement, recurrence, and onsite follow-up;
- customer training, Dashboard review/correction, acceptance/signoff, handoff, and closeout;
- remote access authorization, technical availability, assignment, revocation, and local-versus-remote state;
- Notification, Building/Household Mode, Automation, and Media/Privacy cross-system contracts;
- weather/timezone/sunrise/sunset and optional mapping/utility/environmental feature metadata without inventing sources or emergency-service integration;
- future CRM, Quote, Installer, Inventory, Asset, Warranty, Support, Portal, Scheduling, Procurement, and Handoff ownership extension points.

No missing future system above is treated as a universal blocker to the present HA-evidence-first preparation path. The `YES` records that are stage-blocking apply only when their named lifecycle gate is reached.

## 7. Database/GitHub architecture handoff

This section is an input to later bounded GitHub/database architecture work. It is not a schema design.

### Shared records implied

The evidence implies durable concepts for Customer/Contact, optional Household/Account/Company, Property/Site, Deal/Opportunity, Estimate, SOW, Quote/Approved Scope, approval/change record, BOM, Product/Part, Order/Procurement, Inventory Item/Allocation, Bench Build, Install Job, Commissioning Record, Customer Signoff/Handoff, Site Capability Model, Dashboard artifact/version/assignment, Installed Asset, Warranty, Support Case/Ticket/RMA, Remote Access Authorization, and Expansion/Add-on Opportunity.

### Identifiers and associations requiring durable representation

- stable non-secret customer/contact, property/site, job, quote/scope, capability, dashboard artifact/version, installed-asset, warranty, and support-case identifiers;
- customer/account-to-property, property-to-job, job-to-scope/BOM/allocation, item-to-staged/installed/replaced asset, device/entity/area-to-semantic capability, and capability-to-Dashboard-class relationships;
- expected/quoted capability versus installed/verified capability assertions without overwriting either;
- user/role/property/Dashboard-class assignment plus approval, change, and revocation evidence;
- source artifact revision, evidence cutoff, provenance, freshness, supersession, and human disposition.

Identifier formats, cardinalities, object technology, repository locations, and database keys remain architecture decisions outside this task.

### Cross-system lifecycle states

Architecture must accommodate proposed, estimated, scoped, quoted, customer-approved, changed/deferred, BOM-ready, ordered, allocated, staged, bench-ready, scheduled, installed, installed-unverified, installed-verified, unavailable/degraded/stale/unknown, commissioned, accepted, handed off, supported, replaced, retired/not-installed, and discrepancy-required states. It must also keep request/pending/success/failure/result-unknown command states and current/recent/resolved event semantics distinct where they cross Dashboard boundaries.

### Ownership conflicts and unresolved source-of-truth questions

- canonical Property ID and whether Property lives in CRM, Quote, Portal, another store, or a combination;
- whether Household/Account/Company is represented at all and, if so, where;
- whether Estimate/SOW/BOM/Bench/Install/Commissioning are separate records or phases of a broader Job;
- owners and systems for Procurement, Inventory, Installed Asset, Warranty, Support Ticket/RMA, Handoff/signature storage, and Add-on lifecycle;
- a standalone Building/Household Mode owner and canonical per-site source;
- authoritative sources for weather/timezone/sun and other optional site metadata;
- retention, privacy, and visibility policies that remain site/operator decisions.

### Manual now, possible future automation

The preparation packet, capability model, approval/revision record, commissioning evidence, assignment tests, handoff/signoff, inventory/allocation evidence, asset/warranty/support lineage, remote-access authorization record, and cross-source discrepancy disposition are currently manual or partial. Later architecture should allow automation without erasing manual provenance, owner approval, exception history, or customer-safe/internal separation.

### Structural relationships to accommodate later

- multiple evidence assertions may describe the same capability at different times and maturity states;
- a capability may depend on multiple devices/entities/areas and may appear in multiple Dashboard classes with different permissions;
- an installed asset may replace another asset while preserving property/location, warranty, support, and retirement history;
- a support case may relate to multiple assets/capabilities and produce remote, onsite, RMA, replacement, resolution, recurrence, or add-on outcomes;
- a customer approval, exception, or discrepancy disposition may gate only one capability or lifecycle stage rather than the whole job;
- customer-safe projections must remain separable from internal technical, vendor, financial, diagnostic, credential, and raw-evidence data;
- GitHub-hosted governance/evidence artifacts need stable path/revision/provenance references without making GitHub the assumed runtime database.

## 8. Source review and evidence limits

Deep or material targeted review included:

- `docs/installer/INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md`
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
- `docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md`
- `docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md`
- `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md`
- `docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md`
- `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md`
- `docs/home-assistant/WNYHS_POSTINSTALL_DASHBOARD_ASSEMBLY_PROFILE_REV01.md`
- `docs/audits/DASH-GOV-BUILD-READINESS-001_AUDIT_REV01.md`
- `docs/audits/DASH-GOV-POSTINSTALL-AUDIT-001_AUDIT_REV01.md`
- `docs/audits/DASH-GOV-POSTINSTALL-RECONCILE-001_RECONCILIATION_REV01.md`
- `docs/quotesystem/PROPERTY001_Property_Model_Architecture_REV01.md`
- `docs/quotesystem/INVENTORY001_Quote_System_Inventory_Readiness_REV01.md`
- `docs/quotesystem/HARDWARE001_HA_COMPATIBILITY_AND_BOM_STANDARD_REV01.md`
- `docs/quotesystem/GATES001_Quote_To_Install_Operational_Gates_REV01.md`
- relevant Floorplan, quote-workspace, CRM/HubSpot runtime-contract, Notification, Automation, Camera/Media Privacy, and remote-access owner sections found through bounded concept search;
- `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/WNYHS-BP001C_Revenue_Records_Deep_Sweep.md`, `WNYHS-BP001D_BOM_Hardware_Inventory_Deep_Sweep.md`, and `WNYHS-BP001E_Handoff_Warranty_Support_Deep_Sweep.md` as candidate evidence only.

No live system, customer record, raw HA export, CRM record, payment record, scheduling system, database, Cloudflare surface, credential, secret, or private URL was accessed. Repository evidence establishes governance and documented implementation posture, not current customer-runtime truth.
