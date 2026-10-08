# WNYHS Dashboard Creation & Lifecycle Standard REV01

Status: Active canonical dashboard standard

Owner: Dashboard / Interactive Experience System

Customer-facing: No

Implementation authority: Governance and lifecycle process only; each prototype, implementation, runtime, acceptance, or retirement action requires its own bounded authority

Task ID: DASHBOARD-SYSTEM-CANONICALIZATION-001

Primary workstream: Dashboard / Interactive Experience System

Controlling context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

Predecessors: `docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md` and `docs/home-assistant/WNYHS_POSTINSTALL_DASHBOARD_ASSEMBLY_PROFILE_REV01.md` (SUPERSEDED)

## 1. Purpose and ownership

This standard owns the reusable end-to-end process for creating, approving, implementing, validating, handing off, and later retiring WNYHS dashboards. It coordinates stages and evidence gates; it does not absorb the doctrine of the owners it consumes.

The canonical functional, visual, delivery, and evidence owners are:

- `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` for dashboard classes, information architecture, status/action meaning, and functional behavior;
- `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` for visual, component, theme, interaction, and accessibility presentation;
- `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` for prototype, delivery, validation, acceptance evidence, and rollout behavior; and
- `WNYHS_SITE_CAPABILITY_EVIDENCE_AND_BINDING_STANDARD_REV01.md` for the sanitized Site Capability Model and variable/evidence contract.

The Business Process Interdependency Register owns cross-business relationships. This standard consumes BPI records; it does not create a dashboard-only dependency registry or physical database schema.

## 2. Lifecycle

The canonical lifecycle is:

`QUOTE/DESIGN -> CUSTOMER PREVIEW WORKSPACE -> DEMO HA DASHBOARD -> 3D PROPERTY REVIEW -> CUSTOMER DESIGN APPROVAL -> INSTALLATION -> EXPORT/EVIDENCE INTAKE -> SANITIZED SITE CAPABILITY MODEL -> EXCEPTION RESOLUTION -> SITE-BOUND HA PREVIEW -> OPERATOR/CUSTOMER APPROVAL -> BOUNDED IMPLEMENTATION -> ADDITIVE PRODUCTION -> VALIDATION/SOAK -> HANDOFF -> OPTIONAL SEPARATELY APPROVED LEGACY RETIREMENT`

Stages may be marked `NOT_APPLICABLE` only with an evidence-backed scope reason. A future enrichment source may be absent without blocking the present HA-evidence-first path unless an applicable BPI record and lifecycle gate make it required.

## 3. Stage contract

| Stage | Required inputs | Outputs / artifacts | Controlling owner(s) | Blocking conditions | Allowed manual fallback | Future automated source |
| --- | --- | --- | --- | --- | --- | --- |
| Quote / Design | Approved discovery/property evidence and proposed scope | Proposed/quoted capability expectation with revision and provenance | Quote System; PROPERTY001; applicable Floorplan owners | Missing approval for scope represented as customer proposal | Approved manual quote/design artifacts | Future Quote/Property system |
| Customer Preview Workspace | Proposed, quoted, or customer-approved scope clearly separated from installed truth | Customer-specific workspace in `PROPOSED` or `APPROVED` posture | Quote/Design owners; this lifecycle standard | Unlabeled simulation; invented property or capability facts | Labeled static workspace | Future customer portal/workspace |
| Demo HA Dashboard | Approved preview scope and governed fixture data | Actual HA-compatible Lovelace/YAML demo rendered in Home Assistant, clearly non-live | DASHBOARD001; INSTALL006; DESIGN001 | Unlabeled fixtures; unauthorized actions; missing dependency qualification for the preview surface | Generic deterministic HTML only as a secondary engineering aid | Future governed preview generator |
| 3D Property Review | Approved spatial/floorplan evidence when applicable | Linked or embedded 3D Walkthrough, System Layout, Camera Coverage, Sensor Locations, Lighting Plan, or Automation Areas artifact | Floorplan/Property/spatial owner | Spatial artifact presented as installed-capability proof; unapproved/private source | Approved 2D/vector/limited-evidence artifact or `NOT_APPLICABLE` | Future spatial property system |
| Customer Design Approval | Preview artifacts, limitations, simulated/authoritative classification, revision record | Approval, revision queue, deferral, or rejection evidence | Customer/Operator approval owner; DASHBOARD001 evidence contract | Ambiguous approval scope or material unresolved preview claim | Manual dated approval/disposition record | Future portal approval workflow |
| Installation | Approved scope, job packet, hardware/readiness evidence | Installed, deferred, substituted, unavailable, and exception evidence | Installer Platform; Commissioning owner | Critical install/readiness blocker; unapproved scope expansion | Governed installer checklist and exception log | Future Installer/Inventory systems |
| Export / Evidence Intake | Authorized post-install context and extraction authority | Transient raw export plus sanitized intake manifest/evidence cutoff | HA-BACKUP001; authorized operator | Missing authority; secrets/private data; stale or incomplete evidence affecting the stage | Operator-run canonical export and manual manifest | Future authorized ingestion workflow |
| Sanitized Site Capability Model | Sanitized evidence, proposed/quoted expectations when available, domain decisions | Versioned Site Capability Model with source states, provenance, freshness, visibility, actions, and unresolved conditions | Site Capability, Evidence & Binding Standard | No site identity/evidence cutoff; raw export used directly; required variable unresolved | Manual model following the canonical schema | Future governed assessor/model service |
| Exception Resolution | Unresolved mappings, discrepancies, missing approvals, domain blockers | Owner disposition, next evidence, affected stage/capability, and residual state | Exact source/domain owner | `required_for_execution: YES` evidence missing at the affected gate | Manual owner review and disposition | Future workflow/exception system |
| Site-Bound HA Preview | Approved Site Capability Model, qualified dependencies, site-specific bindings or fixtures | HA-native preview in `INSTALLED-UNVERIFIED` or `INSTALLED-VERIFIED` posture | DASHBOARD001; bounded site task | Invented binding; missing privacy/permission decision; false live state | Labeled fixtures for unresolved/non-live values | Future governed assembly tooling |
| Operator / Customer Approval | Site-bound preview, validation evidence, limitations, unresolved list | Approval, revision, rejection, or bounded implementation authorization recommendation | Operator/Customer; DASHBOARD001 | Missing reviewer evidence; unresolved critical claim/action | Manual recorded review | Future portal approval workflow |
| Bounded Implementation | Approved target, exact files/instance/resources/users, backup and rollback | Versioned implementation and binding evidence | Separate bounded task; runtime/domain owners | No task authority, backup/rollback, dependency qualification, permission evidence, or exact target | None for unauthorized runtime mutation; repository-only preparation may continue | Future Installer platform |
| Additive Production | Known-working dashboard, new separate route/name, verified bindings and assignments | Additive production candidate with preserved fallback | DASHBOARD001; bounded runtime task | Replacement-first plan; no rollback; unauthorized user/device assignment | Manual controlled registration under exact authority | Future deployment/orchestration tooling |
| Validation / Soak | Production candidate, exact test matrix, rollback and acceptance criteria | Validation result, defects/exceptions, soak result, rollback decision | DASHBOARD001; Commissioning; exact domain owners | Failed critical validation; unresolved result; insufficient task-defined soak evidence | Manual test evidence and observation log | Future validation harness |
| Handoff | Passed acceptance/soak, training material, limitations and support transition | Customer review, training, corrections, signoff/deferral, support handoff | INSTALL009; INSTALL010; Commissioning | Critical unresolved blocker or missing required acceptance evidence | Manual handoff package/signoff | Future Handoff/Portal system |
| Optional Legacy Retirement | Proven replacement, acceptance/soak, rollback history, inbound dependency review, separate authority | Retirement evidence and preserved lineage | Separate bounded retirement task | Any active dependency, missing successor mapping, or absent explicit approval | Leave legacy surface in place | Future governed retirement workflow |

## 4. Customer workspace maturity

A customer-specific workspace may evolve only through evidenced transitions:

`PROPOSED -> APPROVED -> INSTALLED-UNVERIFIED -> INSTALLED-VERIFIED -> PRODUCTION`

- `PROPOSED` and `APPROVED` may show proposed or quoted capabilities and simulated states when clearly labeled.
- Spatial property evidence may support placement and planning but does not establish installed capability.
- `INSTALLED-UNVERIFIED` means installation is asserted but the applicable evidence/binding/acceptance gate has not passed.
- `INSTALLED-VERIFIED` requires current governed installation evidence but does not itself mean production registration or assignment occurred.
- `PRODUCTION` requires separately authorized implementation, validation, assignment, acceptance, and rollback evidence.

## 5. Cross-system boundaries

This lifecycle consumes, and does not redefine:

- Notification generation, routing, escalation, suppression, quiet hours, recovery, delivery, and history policy;
- Automation triggers, conditions, mode consequences, interlocks, manual override, fallback, and recovery;
- camera/doorbell visibility, recording, audio, retention, consent/notice, media history, access, and revocation;
- remote-access architecture, customer authorization, technical availability, identity, grants, and revocation;
- HA export/extraction and transient raw-evidence rules;
- commissioning tests and readiness;
- customer training, acceptance, signoff, and support handoff;
- quote, CRM, payment, scheduling, inventory, procurement, asset, warranty, and support authority; and
- spatial-property/floorplan truth.

## 6. Building / Household Mode contract

One authoritative per-site Building/Household Mode source is shared by Dashboard, Notification, and Automation consumers.

The Dashboard may display the current mode and expose a transition only when the source, current value, allowed transition, role authorization, authoritative result state, freshness, and unknown/degraded behavior are evidenced. The Dashboard does not own notification routing/escalation/suppression/quiet hours, automation consequences, or mode business logic.

Until a standalone universal mode owner and a verified site source exist, mode-dependent behavior remains blocked only for the affected stage/capability under BPI-030.

## 7. Dependency integration

This lifecycle consumes BPI-001 through BPI-036 where applicable. Stage-critical `required_for_execution: YES` dependencies include BPI-003, BPI-005, BPI-008, BPI-014 through BPI-021, BPI-027, BPI-028, and BPI-036, scoped to their recorded lifecycle gates. BPI-030 is conditional for mode-dependent behavior.

Missing CRM, quote, fulfillment/inventory, asset, warranty, support, portal, scheduling, procurement, or handoff automation is not a universal blocker to current HA-evidence-first preparation. Their facts become authoritative only through their domain owners.

## 8. Additive rollout, rollback, soak, and retirement

New dashboards deploy beside a known-working dashboard under a separate route/name. The exact rollback path must exist and be testable before cutover. Production validation and a task-defined soak must pass before any legacy-retirement proposal.

Deployment never automatically retires a legacy dashboard. Retirement is a separate destructive action requiring explicit authority, an inbound-reference/dependency check, successor mapping, retained lineage, and the `RETIRED_<complete-original-filename>` rule for any document explicitly approved for retirement.

## 9. Protected boundary

This standard authorizes no live Home Assistant access or mutation, dashboard YAML, registration, assignment, authentication/permission change, notification/automation implementation, remote access, customer data, Cloudflare, CRM/HubSpot, Stripe/payment, scheduling, email, dependency, secret, database schema/migration, merge, deployment, or legacy retirement.
