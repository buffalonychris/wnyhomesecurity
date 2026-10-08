# WNYHS Dashboard System Authority & Lifecycle Map REV02

Status: Active canonical thin routing and lineage map

Owner: Dashboard / Interactive Experience System

Customer-facing: No

Implementation authority: No

Task ID: DASHBOARD-SYSTEM-CANONICALIZATION-001

Controlling context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

Predecessor: `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md` (SUPERSEDED)

Last reconciled: 2026-10-08

## 1. Purpose and normal read rule

This is the Dashboard System start-here map for owner routing, lifecycle routing, dependency boundaries, and predecessor lineage. It is not a seventh functional standard and does not authorize implementation.

When the responsible owner is already known, load that owner directly. Load this map when authority, lifecycle stage, predecessor status, cross-system boundary, or retirement posture is ambiguous.

## 2. Final canonical owner set

| Responsibility | Primary owner | Boundary |
| --- | --- | --- |
| Authority, routing, lifecycle summary, lineage, conflict/supersession/retirement rules | This map | Thin map only; no functional, visual, evidence, delivery, or domain doctrine. |
| End-to-end creation and lifecycle process | `docs/home-assistant/WNYHS_DASHBOARD_CREATION_AND_LIFECYCLE_STANDARD_REV01.md` | Coordinates stages/gates; does not absorb source-domain doctrine. |
| Sanitized Site Capability Model, variable schema, evidence and binding contract | `docs/home-assistant/WNYHS_SITE_CAPABILITY_EVIDENCE_AND_BINDING_STANDARD_REV01.md` | Owns durable sanitized dashboard input; raw extraction and source facts stay with their owners. |
| Dashboard architecture and functional behavior | `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` | Owns classes, navigation, hierarchy, status/action meaning, Building/Household Mode presentation contract, and degraded/permission behavior. |
| Dashboard visual, component, and interaction presentation | `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` | Owns tokens, typography, component anatomy, visual states, themes, accessibility, and qualified reusable presentation patterns. |
| Dashboard delivery, prototype, validation, and acceptance | `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` | Owns HA-native approval posture, responsive delivery, validation, additive rollout, rollback, soak, acceptance, and handoff evidence. |

Every surviving dashboard concept has one primary owner. Supporting domain standards remain authoritative only inside their own domains.

## 3. Cross-system owner boundaries

| Domain consumed by Dashboard | Preserved authority | Dashboard boundary |
| --- | --- | --- |
| Cross-business dependencies | `docs/kaos/business-processes/WNYHS_BUSINESS_PROCESS_INTERDEPENDENCY_REGISTER_REV01.md` | Dashboard owners reference BPI IDs and do not create a parallel dependency registry. |
| Notification | `docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md` and approved site profile | Dashboard presents authorized state/events; it does not own recipients, channels, routing, escalation, suppression, quiet hours, delivery, or retention policy. |
| Automation | `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md` | Dashboard invokes only evidenced authorized actions; it does not own triggers, consequences, interlocks, overrides, or recovery. |
| Camera/media privacy | `docs/home-assistant/WNYHS_CAMERA_MEDIA_PRIVACY_STANDARD_REV01.md` | Dashboard consumes approved visibility, recording, audio, retention, consent, history, access, and revocation decisions. |
| Remote access/service support | `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md` plus current remote-access owners | Dashboard does not own tunnel, identity, grant, authorization, or revocation architecture. |
| HA extraction | `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md` | Raw evidence remains transient; Dashboard consumes only sanitized governed derivatives. |
| Frontend dependency qualification | `INSTALL008-BOOTSTRAP` (`docs/installer/INSTALL008_HA_GREEN_BOOTSTRAP_STANDARD_REV01.md`) | Dashboard delivery consumes qualification evidence and owns presentation fallback only. |
| Commissioning | `INSTALL008-COMMISSIONING` (`docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md`) | Dashboard lifecycle consumes test/readiness evidence; it does not own field procedure. |
| Handoff | `docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md` | Dashboard lifecycle consumes training, corrections, acceptance/signoff, and transition evidence. |
| Quote/CRM/property/floorplan | Applicable Quote, CRM/runtime, PROPERTY001, and Floorplan owners | Proposed/quoted/customer-approved/spatial facts remain separate from installed/verified capability. |
| Payment/scheduling/inventory/assets/warranty/support | Exact protected/domain owners | Dashboard records only stage/dependency references allowed by BPI; it owns none of these systems. |

## 4. Lifecycle routing

The lifecycle owner governs:

`QUOTE/DESIGN -> CUSTOMER PREVIEW WORKSPACE -> DEMO HA DASHBOARD -> 3D PROPERTY REVIEW -> CUSTOMER DESIGN APPROVAL -> INSTALLATION -> EXPORT/EVIDENCE INTAKE -> SANITIZED SITE CAPABILITY MODEL -> EXCEPTION RESOLUTION -> SITE-BOUND HA PREVIEW -> OPERATOR/CUSTOMER APPROVAL -> BOUNDED IMPLEMENTATION -> ADDITIVE PRODUCTION -> VALIDATION/SOAK -> HANDOFF -> OPTIONAL SEPARATELY APPROVED LEGACY RETIREMENT`

The Site Capability Model mediates evidence and binding. INSTALL006 supplies meaning, DESIGN001 supplies presentation, and DASHBOARD001 supplies prototype/delivery/validation/acceptance rules.

## 5. Business Process Interdependency integration

The Dashboard System consumes BPI-001 through BPI-036 as applicable. The most direct dashboard-path records are BPI-003, BPI-005 through BPI-009, BPI-013 through BPI-021, BPI-026 through BPI-034, and BPI-036.

`HA_INSTALLED_VERIFIED` remains the present preparation baseline. Future CRM, quote, fulfillment/inventory, asset, warranty, support, portal, scheduling, procurement, and handoff sources are additive unless an applicable BPI lifecycle gate makes a specific item required.

## 6. Building / Household Mode integration

One authoritative per-site Building/Household Mode source is shared by Dashboard, Notification, and Automation consumers. Dashboard may display the mode and expose only authorized transitions. It does not own notification routing, escalation, suppression, quiet hours, automation consequences, or mode business logic. BPI-030 retains the unresolved standalone-owner/source question.

## 7. Predecessor dispositions

| Source | Disposition | Surviving value / successor |
| --- | --- | --- |
| `WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md` | `SUPERSEDE` | Source inventory, conflict/gap analysis, and lineage informed this map and the reconciliation record; REV01 remains historical. |
| `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` | `SUPERSEDE` | Three classes, outcome grouping, readiness fields, physical fallback, anti-patterns, and customer/service separation are represented by current owners. |
| `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV01.md` | `SUPERSEDE` | Reassurance-first, capability grouping, plain language, touch/accessibility, and branding value survive in INSTALL006/DESIGN001 REV02; obsolete color/action semantics do not. |
| `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV01.md` | `SUPERSEDE` | Device targets, assignment/fallback evidence, custom-install handling, and validation survive in DASHBOARD001 REV02; customer-facing variant choice does not. |
| `INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md` | `SUPERSEDE` | Theme parity, readable contrast, focus, high-contrast/reduced-motion posture, and no duplicate theme dashboards survive in DESIGN001 REV02. |
| `customer-dashboard-design-standard-rev01.md` | `SUPERSEDE` | Product concept, progressive disclosure, touch-safe actions, media ratio, and customer/technician separation survive; obsolete seven-screen/site-specific architecture does not. |
| `customer-dashboard-philosophy.md` | `SUPERSEDE` | Reassurance-first and progressive-disclosure principles survive; four-level severity is rejected in favor of the canonical five statuses. |
| `customer-dashboard-mobile-wireframes-001.md` | `SUPERSEDE` | Mobile-first task hierarchy and offline approval lessons survive as historical/site evidence; five-tab/BKLF navigation and no-tablet/desktop assumptions are rejected. |
| `INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md` | `SUPERSEDE` | Lifecycle/orchestration, Site Capability Model, approval, additive rollout, rollback, soak, and retirement gates move to the Lifecycle and Site Capability owners. |
| `DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md` | `SUPERSEDE` | HA-evidence-first packet, evidence classes, variable requirements, blockers, and future enrichment move to the Site Capability owner. |
| `WNYHS_POSTINSTALL_DASHBOARD_ASSEMBLY_PROFILE_REV01.md` | `SUPERSEDE` | A-S checklist value becomes generated working-artifact requirements under the Lifecycle and Site Capability owners. |
| Bailey/Peckham prototypes, work orders, and review evidence | `KEEP` as site-specific implementation/prototype evidence | Truthful simulation, no invented bindings, component-review, standalone proof, and customer-safe projection lessons inform current owners; no site fact becomes universal. |
| Post-install and build-readiness audits/reconciliation | `KEEP` as non-authoritative evidence | Findings and unresolved BR-GAP items remain evidence; audits do not become owners. |

## 8. Supersession, conflict, and retirement rules

- Newer treatment is the comparison baseline, not automatic truth.
- Lost-value review must precede supersession.
- Current owner authority, completeness, operational reality, evidence quality, and operator-approved decisions resolve conflicts.
- Superseded documents remain lineage only and must point to exact successors without appearing currently operative.
- No document is retired merely because it is old or redundant.
- A document explicitly approved for retirement must first pass inbound-reference and active-implementation checks, migrate required references, preserve lineage, and be renamed `RETIRED_<complete-original-filename>`.
- Dashboard deployment never authorizes dashboard or document retirement.

## 9. Current unresolved issues

The build-readiness audit's BR-GAP-01 through BR-GAP-14 are not silently resolved by canonicalization. They remain routed to their identified functional, visual, delivery, automation, authorization, media, and dependency owners. BPI also preserves unresolved owners/sources for property identity, Household/Account association, Building/Household Mode, weather/time/location data, installed assets, warranty, support cases, and future-system persistence.

No unresolved future enrichment system blocks the present HA-evidence-first preparation baseline by itself. A `required_for_execution: YES` dependency blocks only its affected lifecycle stage.

## 10. Protected boundary

This map authorizes no Home Assistant/customer dashboard mutation, CRM/HubSpot, Cloudflare, Stripe/payment, scheduling, customer data, runtime/API, secrets, website/public funnel, package/dependency, physical database schema/migration, merge, deployment, or legacy retirement.
