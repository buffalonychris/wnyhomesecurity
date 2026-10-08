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

## 10A. Approved Dashboard System decisions

These records capture the Operator-approved 2026-10-08 Dashboard decisions and their repository promotion. The owner documents below, not this register, are active domain authority.

```yaml
decision_id: DECISION-DASH001
decision_name: Canonical dashboard compaction
kaos_object_type: Decision
decision_type: Governance Decision
status: Repo Documented
domain: Dashboard / Interactive Experience System
summary: Compact the complete Dashboard corpus into six non-conflicting canonical owners after newest-to-oldest lost-value review.
decision_statement: Preserve unique value, assign one primary owner per concept, supersede redundant predecessors only after dependency review, and preserve lineage.
rationale: Duplicate and conflicting owners increased routing and implementation risk.
source_classification: Operator Approved
source_reference: DASHBOARD-SYSTEM-CANONICALIZATION-001 work order REV02 Section 3
owner_document: docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md
owner_document_status: Active canonical thin map
authority_level: Operator-approved work order promoted to canonical owners
operator_decision_required: No
promotion_recommendation: Complete
parent_authority: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
related_objects: [Dashboard owner set, predecessor lineage]
related_processes: [Dashboard creation lifecycle]
related_runtime_contracts: []
related_tasks: [DASHBOARD-SYSTEM-CANONICALIZATION-001]
affected_systems: [Repository Dashboard governance]
affected_artifacts: [Dashboard Authority Map, Lifecycle Standard, Site Capability Standard, INSTALL006, DESIGN001, DASHBOARD001]
impact_analysis: {upstream_inputs: full Dashboard corpus and audits, downstream_outputs: compact owner routing, shared_data: owner and lineage references, ripple_risks: stale predecessor citations}
existing_decision_check: {equivalent_decision: Partial prior governance-map consolidation, owner_document_already_contains: Partial, check_result: Refine and promote, checked_references: [Governance Map REV02, post-install audits], existing_authority_requires_reconsideration: No}
validation_required: Six-owner uniqueness, predecessor dispositions, no competing owner
validation_artifacts: Dashboard canonicalization reconciliation and task diff
supersedes: Prior fragmented owner routing
superseded_by: NONE
reconsideration_required: No
date_recorded: 2026-10-08
last_reviewed_date: 2026-10-08
notes: No runtime authority.
---
decision_id: DECISION-DASH002
decision_name: Sanitized Site Capability Model
kaos_object_type: Decision
decision_type: Governance Decision
status: Repo Documented
domain: Dashboard evidence and binding
summary: Raw HA exports and registries are evidence only; dashboards consume a durable sanitized Site Capability Model.
decision_statement: The model records semantic capability, provenance, freshness, state source, visibility, actions, permissions, availability, Notification/Automation relationships, unresolved conditions, and acceptance posture.
rationale: Raw technical evidence cannot safely or truthfully define customer presentation or authority.
source_classification: Operator Approved
source_reference: DASHBOARD-SYSTEM-CANONICALIZATION-001 work order REV02 DECISION-DASH002
owner_document: docs/home-assistant/WNYHS_SITE_CAPABILITY_EVIDENCE_AND_BINDING_STANDARD_REV01.md
owner_document_status: Active canonical standard
authority_level: Operator-approved work order promoted to canonical owner
operator_decision_required: No
promotion_recommendation: Complete
parent_authority: WNYHS Dashboard System Authority & Lifecycle Map REV02
related_objects: [Site Capability Model, evidence assertion, binding]
related_processes: [Evidence intake, dashboard assembly]
related_runtime_contracts: [HA-BACKUP001]
related_tasks: [DASHBOARD-SYSTEM-CANONICALIZATION-001]
affected_systems: [Dashboard preparation and delivery]
affected_artifacts: [Site Capability Model, preparation packet, binding record]
impact_analysis: {upstream_inputs: sanitized HA and domain evidence, downstream_outputs: customer-safe capability projection, shared_data: capability and evidence assertions, ripple_risks: raw identifiers or stale evidence leaking into UI}
existing_decision_check: {equivalent_decision: Partial INSTALL011 and DASHBOARD_PREP001 model, owner_document_already_contains: No single owner, check_result: Merge into new owner, checked_references: [INSTALL011, DASHBOARD_PREP001, Assembly Profile, BPI register], existing_authority_requires_reconsideration: No}
validation_required: Raw evidence boundary, freshness, visibility, permissions, unresolved and acceptance fields
validation_artifacts: Site Capability Standard and BPI updates
supersedes: DASHBOARD_PREP001 preparation/model ownership
superseded_by: NONE
reconsideration_required: No
date_recorded: 2026-10-08
last_reviewed_date: 2026-10-08
notes: Raw evidence remains transient under HA-BACKUP001.
---
decision_id: DECISION-DASH003
decision_name: Variable-schema-first preparation and assembly
kaos_object_type: Decision
decision_type: Governance Decision
status: Repo Documented
domain: Dashboard evidence and lifecycle
summary: Govern reusable variables and generate per-site preparation/assembly working artifacts from the canonical schema.
decision_statement: Every variable defines meaning, type, applicability, source, current/future/manual posture, validation, fallback, blocker, information class, freshness, and provenance.
rationale: Current manual evidence must work now while future systems populate the same governed fields later.
source_classification: Operator Approved
source_reference: DASHBOARD-SYSTEM-CANONICALIZATION-001 work order REV02 DECISION-DASH003
owner_document: docs/home-assistant/WNYHS_SITE_CAPABILITY_EVIDENCE_AND_BINDING_STANDARD_REV01.md
owner_document_status: Active canonical standard
authority_level: Operator-approved work order promoted to canonical owner
operator_decision_required: No
promotion_recommendation: Complete
parent_authority: WNYHS Dashboard System Authority & Lifecycle Map REV02
related_objects: [Variable definition, generated checklist]
related_processes: [Preparation, assembly, validation]
related_runtime_contracts: []
related_tasks: [DASHBOARD-SYSTEM-CANONICALIZATION-001]
affected_systems: [Dashboard preparation, future business-source enrichment]
affected_artifacts: [Site Capability Model, per-site working artifacts]
impact_analysis: {upstream_inputs: current evidence and manual operator input, downstream_outputs: deterministic model and generated checklists, shared_data: governed field meanings, ripple_risks: working artifact becoming competing authority}
existing_decision_check: {equivalent_decision: Partial packet and A-S profile, owner_document_already_contains: Fragmented, check_result: Merge and normalize, checked_references: [DASHBOARD_PREP001, Post-Install Assembly Profile], existing_authority_requires_reconsideration: No}
validation_required: Five allowed input-source states and complete variable contract
validation_artifacts: Site Capability Standard Sections 3-5
supersedes: Separate active packet/profile ownership
superseded_by: NONE
reconsideration_required: No
date_recorded: 2026-10-08
last_reviewed_date: 2026-10-08
notes: No physical schema is selected.
---
decision_id: DECISION-DASH004
decision_name: Preserve narrow cross-system authorities
kaos_object_type: Decision
decision_type: Governance Decision
status: Repo Documented
domain: Dashboard owner boundaries
summary: Notification, Automation, Media Privacy, Remote Access, HA extraction, Commissioning, and Handoff remain separate owners.
decision_statement: Dashboard standards consume their contracts and outputs without duplicating doctrine.
rationale: Domain separation prevents Dashboard governance from granting cross-system authority.
source_classification: Operator Approved
source_reference: DASHBOARD-SYSTEM-CANONICALIZATION-001 work order REV02 DECISION-DASH004
owner_document: docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md
owner_document_status: Active canonical thin map
authority_level: Operator-approved work order promoted to canonical map and standards
operator_decision_required: No
promotion_recommendation: Complete
parent_authority: Repository authority chain
related_objects: [Cross-system owner map]
related_processes: [Dashboard lifecycle]
related_runtime_contracts: [Notification Engine, AUTOMATION001, Media Privacy, remote-access owners, HA-BACKUP001, INSTALL008-COMMISSIONING, INSTALL009]
related_tasks: [DASHBOARD-SYSTEM-CANONICALIZATION-001]
affected_systems: [Dashboard and adjacent domains]
affected_artifacts: [Authority Map, Lifecycle Standard, Site Capability Standard]
impact_analysis: {upstream_inputs: domain contracts, downstream_outputs: owner-safe dashboard consumption, shared_data: references and evidence outputs, ripple_risks: duplicated doctrine or unauthorized behavior}
existing_decision_check: {equivalent_decision: Existing narrow-owner boundaries, owner_document_already_contains: Yes in fragments, check_result: Normalize references, checked_references: [Governance Map REV02, INSTALL011, BPI register], existing_authority_requires_reconsideration: No}
validation_required: Cross-system boundary scan
validation_artifacts: Canonical owner map and standards
supersedes: NONE
superseded_by: NONE
reconsideration_required: No
date_recorded: 2026-10-08
last_reviewed_date: 2026-10-08
notes: Related workstreams do not expand task scope.
---
decision_id: DECISION-DASH005
decision_name: Building and Household Mode integration contract
kaos_object_type: Decision
decision_type: Automation Decision
status: Repo Documented
domain: Dashboard, Notification, and Automation interface
summary: One authoritative per-site mode source is shared by Dashboard, Notification, and Automation consumers.
decision_statement: Dashboard may display and expose authorized transitions but does not own routing, escalation, suppression, quiet hours, automation consequences, or mode business logic.
rationale: A shared state must not acquire three conflicting owners.
source_classification: Operator Approved
source_reference: DASHBOARD-SYSTEM-CANONICALIZATION-001 work order REV02 DECISION-DASH005
owner_document: docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md
owner_document_status: Active canonical dashboard standard
authority_level: Operator-approved interface promoted to Dashboard owners; domain owners retained
operator_decision_required: No for interface; Yes when a site source/transition decision is missing
promotion_recommendation: Complete with BPI-030 unresolved owner/source retained
parent_authority: WNYHS Dashboard System Authority & Lifecycle Map REV02
related_objects: [Building/Household Mode, transition, role]
related_processes: [Dashboard presentation, Notification behavior, Automation behavior]
related_runtime_contracts: [Notification Engine, AUTOMATION001]
related_tasks: [DASHBOARD-SYSTEM-CANONICALIZATION-001]
affected_systems: [Dashboard, Notification, Automation]
affected_artifacts: [INSTALL006, Lifecycle Standard, Site Capability Standard, BPI-030]
impact_analysis: {upstream_inputs: verified site mode source and domain contracts, downstream_outputs: authorized presentation/control, shared_data: mode state and transition evidence, ripple_risks: site-specific values becoming universal or Dashboard redefining consequences}
existing_decision_check: {equivalent_decision: Partial mode interfaces, owner_document_already_contains: Partial, check_result: Refine and cross-reference, checked_references: [INSTALL006, Notification Engine, AUTOMATION001, BPI-030], existing_authority_requires_reconsideration: No}
validation_required: Single-source and domain-exclusion checks
validation_artifacts: INSTALL006 Section 17, lifecycle/site-capability mode sections, BPI-030
supersedes: NONE
superseded_by: NONE
reconsideration_required: Yes if a universal mode owner/value set is proposed
date_recorded: 2026-10-08
last_reviewed_date: 2026-10-08
notes: BPI-030 remains UNRESOLVED for standalone owner/source.
---
decision_id: DECISION-DASH006
decision_name: Mandatory RETIRED filename rule
kaos_object_type: Decision
decision_type: Governance Decision
status: Repo Documented
domain: Dashboard document lifecycle
summary: Any document explicitly approved for retirement must use RETIRED_ plus its complete original filename.
decision_statement: Retirement requires inbound dependency review, reference migration, active-implementation check, successor mapping, and preserved lineage before rename.
rationale: Retirement must be visible, reversible through lineage, and dependency-safe.
source_classification: Operator Approved
source_reference: DASHBOARD-SYSTEM-CANONICALIZATION-001 work order REV02 DECISION-DASH006
owner_document: docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md
owner_document_status: Active canonical thin map
authority_level: Operator-approved work order promoted to canonical map
operator_decision_required: Yes for each retirement
promotion_recommendation: Complete
parent_authority: Codex Execution Standard REV01 documentation/supersession rules
related_objects: [Document, predecessor, successor, dependency]
related_processes: [Document supersession and retirement]
related_runtime_contracts: []
related_tasks: [DASHBOARD-SYSTEM-CANONICALIZATION-001]
affected_systems: [Repository documentation]
affected_artifacts: [Retirement candidates and inbound references]
impact_analysis: {upstream_inputs: explicit retirement approval and dependency evidence, downstream_outputs: renamed historical artifact and migrated references, shared_data: lineage pointers, ripple_risks: broken active links}
existing_decision_check: {equivalent_decision: Existing supersession/lineage policy, owner_document_already_contains: Partial, check_result: Add retirement naming rule, checked_references: [Codex Execution Standard REV01, Dashboard work order REV02], existing_authority_requires_reconsideration: No}
validation_required: Inbound references, active implementation, successor and filename checks
validation_artifacts: Authority Map Section 8 and canonicalization reconciliation
supersedes: NONE
superseded_by: NONE
reconsideration_required: No
date_recorded: 2026-10-08
last_reviewed_date: 2026-10-08
notes: Canonicalization approved no specific retirement; supersession was used instead.
---
decision_id: DECISION-DASH007
decision_name: HA-native approval prototype and evolving customer workspace
kaos_object_type: Decision
decision_type: Customer Artifact Decision
status: Repo Documented
domain: Dashboard prototype and delivery
summary: Prefer actual HA-compatible Lovelace/YAML rendered in Home Assistant; keep generic HTML secondary and evolve the property workspace through evidenced maturity states.
decision_statement: Preview workspaces may include governed spatial artifacts, but spatial data does not prove installed capability.
rationale: Customer approval should test the intended platform while preserving truthful non-live and site-bound stages.
source_classification: Operator Approved
source_reference: DASHBOARD-SYSTEM-CANONICALIZATION-001 work order REV02 DECISION-DASH007
owner_document: docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md
owner_document_status: Active canonical dashboard standard
authority_level: Operator-approved work order promoted to delivery and lifecycle owners
operator_decision_required: No for general posture; site approval remains required
promotion_recommendation: Complete
parent_authority: WNYHS Dashboard System Authority & Lifecycle Map REV02
related_objects: [Preview workspace, HA-native prototype, spatial artifact]
related_processes: [Quote/design review, site preview, approval]
related_runtime_contracts: [HA dependency qualification and exact runtime task]
related_tasks: [DASHBOARD-SYSTEM-CANONICALIZATION-001]
affected_systems: [Dashboard delivery and customer approval]
affected_artifacts: [Lovelace/YAML preview, HTML engineering aid, spatial review links]
impact_analysis: {upstream_inputs: Site Capability Model and spatial evidence, downstream_outputs: approval/revision evidence, shared_data: workspace maturity and fixture posture, ripple_risks: simulated state or spatial plan misrepresented as live}
existing_decision_check: {equivalent_decision: Prior deterministic HTML preference, owner_document_already_contains: Conflicting predecessor posture, check_result: Supersede prototype preference, checked_references: [DASHBOARD001 REV02, INSTALL011, Bailey and Peckham prototype evidence], existing_authority_requires_reconsideration: Yes and operator approved}
validation_required: HA-native preference, simulation disclosure, maturity states, spatial-authority boundary
validation_artifacts: DASHBOARD001 Section 8 and Lifecycle Standard Sections 2-4
supersedes: Generic deterministic HTML as preferred customer approval surface
superseded_by: NONE
reconsideration_required: No
date_recorded: 2026-10-08
last_reviewed_date: 2026-10-08
notes: No Gaussian-splat implementation stack is selected.
---
decision_id: DECISION-DASH008
decision_name: Additive deployment, rollback, soak, and separate retirement
kaos_object_type: Decision
decision_type: Runtime Contract Decision
status: Repo Documented
domain: Dashboard delivery lifecycle
summary: Deploy new dashboards beside a known-working dashboard, prove rollback, validate and soak, and retire legacy separately.
decision_statement: Deployment never automatically retires the prior dashboard.
rationale: Additive delivery preserves continuity and separates reversible rollout from destructive retirement.
source_classification: Operator Approved
source_reference: DASHBOARD-SYSTEM-CANONICALIZATION-001 work order REV02 DECISION-DASH008
owner_document: docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md
owner_document_status: Active canonical dashboard standard
authority_level: Operator-approved work order promoted to delivery and lifecycle owners
operator_decision_required: Yes for runtime task and later retirement
promotion_recommendation: Complete
parent_authority: WNYHS Dashboard Creation & Lifecycle Standard REV01
related_objects: [Dashboard release, rollback, soak, retirement]
related_processes: [Bounded implementation, additive production, validation, handoff, retirement]
related_runtime_contracts: [Exact future Home Assistant runtime task]
related_tasks: [DASHBOARD-SYSTEM-CANONICALIZATION-001]
affected_systems: [Dashboard delivery]
affected_artifacts: [Release evidence, rollback plan, validation/soak record, retirement proposal]
impact_analysis: {upstream_inputs: approved implementation and rollback evidence, downstream_outputs: accepted release and optional retirement eligibility, shared_data: version and acceptance lineage, ripple_risks: replacement-first outage or premature retirement}
existing_decision_check: {equivalent_decision: INSTALL011 additive rollout, owner_document_already_contains: Partial, check_result: Merge into canonical delivery/lifecycle owners, checked_references: [INSTALL011, DASHBOARD001 REV02, BPI-021], existing_authority_requires_reconsideration: No}
validation_required: Separate route/name, rollback, validation, soak, handoff, and separate retirement authority
validation_artifacts: DASHBOARD001 Section 10.2 and Lifecycle Standard Section 8
supersedes: Replacement-first or deployment-implies-retirement posture
superseded_by: NONE
reconsideration_required: No
date_recorded: 2026-10-08
last_reviewed_date: 2026-10-08
notes: This record grants no runtime implementation authority.
```

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
