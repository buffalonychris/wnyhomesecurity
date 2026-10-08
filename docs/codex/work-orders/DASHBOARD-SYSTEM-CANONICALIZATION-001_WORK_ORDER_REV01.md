# DASHBOARD-SYSTEM-CANONICALIZATION-001 — Final Dashboard System Reconciliation and Canonicalization

**Revision:** REV01
**Status:** OPERATOR AUTHORIZED — BLOCKED ON BPROC-INTERDEP-001
**Category:** GOVERNANCE / DOCUMENTATION RECONCILIATION
**Primary Workstream:** Dashboard / Interactive Experience System
**Task ID:** DASHBOARD-SYSTEM-CANONICALIZATION-001
**Implementation authority:** Repository documentation only. No runtime/customer-system changes.

## 1. Objective

Reconcile the complete WNYHS dashboard documentation corpus newest-to-oldest and produce the final canonical dashboard-building document set. Preserve unique high-value historical concepts, eliminate superseded overlap, define one owner per concept, promote the approved decision set recorded in `KAOS001_DECISION_REGISTER_REV01.md`, and leave no competing dashboard authority.

Do not redesign from scratch. Recover and compact.

## 1A. Prerequisite

Before this work order executes, `BPROC-INTERDEP-001` must be completed and its approved Business Process Interdependency Register available on the working branch/main lineage. This task must consume that register as a required current input and update dashboard-related entries when reconciliation produces new evidence.

The register defines cross-business relationships/data/lifecycle requirements; this dashboard task must not create a competing dashboard-only dependency registry.

## 2. Operator-approved decisions

Codex must implement all decisions DECISION-DASH001 through DECISION-DASH008 exactly as recorded in the Decision Register.

Additional binding interpretation:

1. Newest source is the comparison baseline, not automatic truth.
2. Older sources are reviewed for unique surviving value before supersession.
3. Historical implementation evidence may contribute candidate patterns but does not become authority by existence.
4. Cross-system domain standards remain separate authorities and are referenced, not duplicated.
5. A dashboard predecessor may be retired only after active dependency verification.
6. Any approved retirement must rename the file using `RETIRED_<complete-original-filename>`.
7. No destructive runtime or customer-system work is authorized.

## 3. Required target canonical architecture

Reconcile the corpus into the smallest coherent set that satisfies these owner responsibilities. Exact filenames may preserve existing strong owners when practical; do not create unnecessary replacements merely to satisfy numbering.

### A. Dashboard System Authority and Lifecycle Map
Thin routing/lineage map only:
- canonical owner map
- cross-system dependency map
- lifecycle map
- predecessor/successor lineage
- conflict/supersession rule
- retirement/dependency rule

### B. Dashboard Creation and Lifecycle Standard
Must own the end-to-end reusable process from quote/design preview through handoff and optional retirement.

Required lifecycle:

`QUOTE/DESIGN -> CUSTOMER PREVIEW WORKSPACE -> DEMO HA DASHBOARD -> 3D PROPERTY REVIEW -> CUSTOMER DESIGN APPROVAL -> INSTALLATION -> EXPORT/EVIDENCE INTAKE -> SANITIZED SITE CAPABILITY MODEL -> EXCEPTION RESOLUTION -> SITE-BOUND HA PREVIEW -> OPERATOR/CUSTOMER APPROVAL -> BOUNDED IMPLEMENTATION -> ADDITIVE PRODUCTION -> VALIDATION/SOAK -> HANDOFF -> OPTIONAL SEPARATELY APPROVED LEGACY RETIREMENT`

Each stage must define:
- required inputs
- required outputs/artifacts
- owner
- blocking conditions
- allowed manual fallback
- future automated source where applicable

### C. Site Capability, Evidence and Binding Standard
Must define the durable sanitized model between raw evidence and dashboards.

Minimum variable-schema metadata for every field:
- variable name
- business meaning
- data type
- REQUIRED / CONDITIONAL / OPTIONAL / NOT_APPLICABLE
- source of truth
- current source available today
- future automated source
- manual entry allowed yes/no
- validation rule
- fallback behavior
- blocking/non-blocking effect
- customer-safe/internal-only classification
- freshness requirement
- provenance/evidence reference

Allowed input-source states:
- AVAILABLE_FROM_CURRENT_EVIDENCE
- MANUAL_OPERATOR_INPUT
- FUTURE_BUSINESS_SYSTEM_INPUT
- UNRESOLVED
- NOT_APPLICABLE

The model must distinguish at minimum:
- proposed
- quoted
- customer-approved
- installed
- installed-unverified
- installed-verified
- unavailable/degraded
- deferred
- retired/not-installed

Raw HA exports remain evidence inputs only and must not directly drive dashboard structure.

### D. Dashboard Architecture and Functional Behavior Standard
Use INSTALL006 REV02 as the current baseline and reconcile older unique value into it.

Must preserve:
- three dashboard classes
- canonical customer navigation
- five customer statuses
- Current / Recent / Resolved
- authoritative command lifecycle
- unavailable/degraded/unknown semantics
- reassurance-first property-status principle
- Building/Household Mode integration contract
- customer/installer/service separation
- high-impact control protections

### E. Dashboard Visual, Component and Interaction Standard
Use DESIGN001 REV02 as the current baseline and reconcile only unique surviving older value.

Must preserve:
- WNYHS gold identity role
- action blue family
- five status colors
- governed typography
- Compact / Default / Large
- one customer action family
- governed tile anatomy
- Status Value Field
- 16:9 media treatment
- Light / Dark / Auto
- accessibility/focus/reduced-motion
- qualified reusable HA component patterns

### F. Dashboard Delivery, Prototype, Validation and Acceptance Standard
Use DASHBOARD001 REV02 as the current baseline but revise the prototype model.

Preferred approval prototype is real Home Assistant-compatible Lovelace/YAML using WNYHS themes and qualified component/card stack, rendered in an actual HA environment where practical.

Generic deterministic HTML may remain only as a secondary engineering/review aid where useful; it is not the preferred customer approval surface.

Required prototype lifecycle:
- quote/design demo may use proposed/quoted capability plus simulated states;
- clearly mark preview/not-live posture;
- customer-specific HA environment becomes preferred build/approval host when available;
- site-bound preview uses verified Site Capability Model;
- high-impact actions remain simulated/disabled/safely bound until verified;
- customer review occurs against HA-rendered preview whenever practical;
- operator revision/approval gate precedes production;
- production deployment is additive;
- rollback and soak precede legacy retirement.

The review process must recover useful dashboard-specific and Visual Freeze review mechanics already documented, including explicit review decisions, revision queue, implementation-risk capture, responsive/state/accessibility validation, and approval evidence, without making unrelated Visual Parity documents dashboard authority.

## 4. Cross-system authorities that must remain separate

Do not duplicate or absorb the doctrine of:
- `WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md`
- `AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`
- `WNYHS_CAMERA_MEDIA_PRIVACY_STANDARD_REV01.md`
- Cloudflare Zero Trust / remote access standards
- `HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md`
- commissioning authority
- customer handoff authority
- service/remote-support authority

Dashboard docs define interfaces to these owners only.

## 5. 3D property review boundary

The customer preview workspace may host or link a governed 3D property-review artifact, including future Gaussian-splat indoor/outdoor models.

The spatial model owns/reports spatial representation and proposed/installed placement context; it is not the authoritative installed-capability record.

Required relationship:

`SITE CAPABILITY MODEL <-> SPATIAL PROPERTY MODEL <-> DASHBOARD`

The Site Capability Model remains authoritative for capability identity, verification, availability, permissions, and customer-safe state/action eligibility.

Do not invent a Gaussian-splat implementation stack in this task.

## 6. Historical/source review rule

Process dashboard-related documents newest-to-oldest within concept/domain clusters.

For each material concept use:
- KEEP
- KEEP_AND_NORMALIZE
- MERGE
- SPLIT
- REFINE
- SUPERSEDE
- RETIRE
- REJECT
- UNRESOLVED

Do not retire by age alone.

Before any file rename:
1. search active repository references;
2. identify implementation/tool/process dependencies;
3. identify cross-system reliance;
4. migrate active references to the correct successor where safe;
5. only then rename approved retired docs with `RETIRED_`.

If a document has active non-dashboard use that cannot be safely migrated inside this task, leave it in place and record the dependency.

## 7. Required source set

At minimum inspect the current and predecessor dashboard corpus identified by the completed dashboard audits, including:
- INSTALL006 REV02 and REV01
- DESIGN001 customer-interface REV02 and predecessors
- DASHBOARD001 REV02 and REV01
- INSTALL011
- DASHBOARD_PREP001
- WNYHS_POSTINSTALL_DASHBOARD_ASSEMBLY_PROFILE
- WNYHS_DASHBOARD_GOVERNANCE_MASTER REV02 and REV01
- customer-dashboard-philosophy
- customer-dashboard-design-standard-rev01
- customer-dashboard-mobile-wireframes-001
- INSTALL007 theme-readiness lineage
- WNYHS HA theme/component library docs
- Bailey prototype/refinement work orders and implementation evidence
- completed dashboard audit, reconciliation, and build-readiness records
- notification/building-mode interfaces
- automation interfaces
- media privacy
- service/remote support
- HA extraction
- commissioning/handoff
- relevant visual-freeze/operator-review process evidence for reusable review mechanics

Search for additional material dashboard sources; do not assume this list is exhaustive.

## 7A. Mandatory cross-business interdependency discovery sweep

This task must not define the dashboard system from dashboard-named documents alone. Before finalizing the canonical model, perform a targeted repository-wide discovery sweep for any document, candidate architecture, historical source, audit, implementation evidence, or business-process artifact that establishes a data, lifecycle, ownership, validation, support, customer-record, property-record, installed-asset, or operational dependency touching dashboards.

Search both direct dashboard references and adjacent concepts even when the source is not dashboard-owned.

At minimum search for and reconcile references involving:

- GitHub/repository-backed customer, property, job, configuration, or generated records;
- HubSpot / CRM contact, company/household/account, property, deal, ticket, association, pipeline, and lifecycle data;
- customer identity, primary contact, phone, email, preferred contact method, customer type, and customer-visible/internal-only data boundaries;
- property/site identity, canonical property ID, service/install address, floor/room/area/location, square footage, floors, detached structures, floorplans, LiDAR/3D scans, spatial models, and location-dependent dashboard widgets;
- quote, estimate, approved solution, SOW, package, add-on, scope, proposed capability, customer-approved capability, change order, payment/reference state, and quote-to-install lifecycle gates;
- BOM, approved part/product, manufacturer/make, model, part number/SKU, supplier/vendor, order/procurement reference, inventory allocation, serialized-item requirements, serial number, hardware identity, device naming, and staged/installed/replaced asset lineage;
- bench build, installer packet, install job, installer notes, scheduling relationship, installation status, commissioning status, exceptions, readiness gates, dashboard readiness, and handoff readiness;
- installed asset ID, asset-to-property/location relationship, make/model/serial/supplier lineage, install date, replacement history, warranty start/end/status/term, extended warranty, support eligibility, lifecycle status, and retirement/disposal state;
- support intake, service case/ticket, RMA, replacement, remote troubleshooting, truck-roll/on-site follow-up, issue type, affected asset/device/system, urgency, resolution, recurrence, and add-on/expansion opportunity;
- customer training, dashboard review, corrections, acceptance/signoff, handoff, closeout evidence, ownership/data explanation, support/warranty explanation, and customer satisfaction/acceptance evidence;
- remote-access/tunnel status, support authorization, access/revocation, user/role assignment, permission evidence, local-vs-remote availability, and service/operator visibility;
- notification, automation, Building/Household Mode, media/privacy, retention, consent, and other cross-system contracts whose state or controls appear in dashboards;
- weather, mapping, address/geolocation, sunrise/sunset, local-time/timezone, utility/environmental, emergency-service, or other widgets/features that require property/customer/site metadata;
- future Quote, Installer, Inventory, Asset, Warranty, Support, CRM, Portal, Scheduling, Procurement, Handoff, or other business systems expected to populate dashboard-required fields later;
- any lifecycle gate where dashboard state, visibility, controls, approval, customer access, support access, warranty/support state, installed-asset state, or handoff state is controlled by another system or record.

Known evidence already located and therefore mandatory review material includes:

- `docs/installer/INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md`, including the candidate chain `Contact/Customer -> Property -> Deal/Opportunity -> Estimate -> SOW -> Quote -> BOM -> Order/Procurement -> Inventory Allocation -> Bench Build -> Install Job -> Commissioning Record -> Customer Signoff -> Installed Asset Register -> Warranty Record -> Support Ticket/RMA -> Expansion/Add-on Opportunity`;
- `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md`;
- `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/WNYHS-BP001E_Handoff_Warranty_Support_Deep_Sweep.md`;
- dashboard audit/reconciliation/build-readiness records that reference future HubSpot identity/relationship data, quote/approved-solution expectations, fulfillment/inventory/warranty lineage, customer handoff/acceptance evidence, service/warranty facts, and site/customer records.

Do not assume the above list is exhaustive. Search by concept as well as filename because material dependencies may live in quote, installer, asset, warranty, support, CRM, business-process, runtime, portal, or historical documents that do not contain `dashboard` in the filename.

For each discovered dependency, record at minimum:

- producing process/system;
- consuming dashboard process/class/component;
- exact data/artifact/state exchanged;
- current source of truth or current evidence source;
- future intended source if not yet technologically implemented;
- lifecycle gate or condition controlled by the dependency;
- whether the dependency is REQUIRED, CONDITIONAL, ENRICHMENT, VALIDATION, or DOWNSTREAM;
- current fallback/manual-input path;
- customer-safe versus internal-only handling;
- freshness/provenance requirement;
- missing-owner or unresolved-governance state;
- recommended entry for the future Business Process Interdependency Register.

Do not invent fields merely because they seem useful. Recover documented concepts first. New fields may be added only when they are logically necessary to express an already documented relationship, and they must be identified as normalization rather than recovered history.

The final reconciliation summary must explicitly state whether this cross-business sweep materially changed the dashboard model and list all newly recovered interdependencies.

## 8. Required outputs

1. Updated canonical dashboard owner documents.
2. Updated thin authority/lifecycle routing map.
3. Explicit required variable schemas.
4. Updated predecessor/lineage/supersession references.
5. Dependency-safe retirement renames where justified.
6. Updated Decision Register statuses/references from Approved In Chat to Repo Documented only after promotion is complete.
7. No unresolved architecture conflict hidden by wording.
8. Final concise reconciliation summary listing:
   - files created
   - files updated
   - files renamed RETIRED_
   - historical concepts recovered
   - active dependencies that prevented retirement
   - any genuine unresolved item

## 9. Protected / forbidden scope

Do not:
- access or change live Home Assistant instances;
- modify customer dashboard YAML/runtime in this task;
- create Cloudflare tunnels, Access policies, DNS, or customer URLs;
- change notification runtime;
- change automations;
- change camera/NVR settings;
- change HubSpot, Stripe/payment, scheduling, email, APIs, or secrets;
- implement Gaussian splats;
- deploy;
- merge;
- invent missing customer/site facts;
- retire a file without dependency evidence.

## 10. Validation

Required:
- `git diff --check`
- no unexpected non-document changes
- no protected-runtime changes
- all active owner references point to current canonical files
- all retirement renames use exact `RETIRED_` prefix
- no active reference remains to a renamed predecessor unless explicitly historical and path-correct
- every canonical concept has one primary owner
- required variable schema supports current/manual/future/unresolved/not-applicable sourcing
- quote-stage preview is clearly distinguished from installed/verified capability
- preferred prototype path is HA-native YAML/rendering
- additive deployment/rollback/soak/retirement boundaries are explicit
- Decision Register records promoted owner references after completion
- cross-business interdependency sweep completed across dashboard and adjacent business-process documentation
- every recovered dashboard dependency identifies current source, future source where applicable, lifecycle gate, fallback, and proposed Business Process Interdependency Register entry

## 11. Closeout

Report:
- exact files changed/created/renamed;
- canonical document map;
- decision promotion results;
- retirement dependency checks;
- variable-schema summary;
- confirmation no runtime/customer systems changed;
- any remaining REQUIRED_FOR_EXECUTION blocker;
- PR URL/state if a PR is created;
- do not merge.
