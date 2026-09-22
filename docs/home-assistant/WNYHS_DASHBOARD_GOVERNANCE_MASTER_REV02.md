# WNYHS Dashboard Governance Map REV02

Status: Active thin routing and lineage map

Owner: Dashboard / Interactive Experience System

Customer-facing: No

Implementation authority: No

Task ID: DASH-GOV-001

Controlling context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

Predecessor: `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md` (SUPERSEDED)

Work order: `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV02.md`

## 1. Purpose and normal read rule

This is a thin authority-routing and lineage map. It is not a fourth dashboard standard and does not authorize implementation.

Normal dashboard implementation tasks should not load this map when the correct owner is already known. Load it only when routing, revision, lineage, or an unresolved authority conflict is ambiguous.

## 2. Current canonical owner map

| Need | Canonical owner | Current revision | Predecessor / boundary |
| --- | --- | --- | --- |
| Architecture and functional behavior | `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` | REV02 | REV01 superseded; owns classes, navigation, semantic behavior, permissions presentation, status, Activity/Alert, command and degraded-state behavior. |
| Visual and component system | `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` | REV02 | REV01 superseded; owns tokens, typography, colors, tile/media/status/action components, themes and accessibility presentation. |
| Delivery, binding and validation | `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` | REV02 | REV01 superseded; owns responsive delivery, customer assembly, evidence binding, fixtures, deterministic prototypes, validation and handoff relationship. |
| Routing and lineage | This map | REV02 | REV01 superseded; no functional, visual, binding, or implementation ownership. |

## 3. Narrow owners outside the three standards

- Automation behavior remains with the current Automation System owner.
- Notification generation, routing, channel delivery, escalation, and deep-link contracts remain with the current Notification System owner.
- Service/remote-support behavior remains with INSTALL010 and current support owners.
- Home Assistant backup/registry extraction and transient raw-evidence handling remain with `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md`.

## 4. 2026-09-22 decision pointers

The operator-approved decisions are durable in the three owners:

- INSTALL006: exact navigation, five customer status meanings, customer-first hierarchy, high-impact/command lifecycle, Activity/Alert, degraded-state behavior, footer functions, and deterministic-proof requirement.
- DESIGN001: WNYHS gold identity, blue actions, exclusive status-value colors, Inter/Atkinson/System, tile/field/button/media geometry, 48/48/56px actions, Light/Dark/Auto, brand and accessibility presentation.
- DASHBOARD001: Compact/Default/Large, 4x3/3x2/2x2 desktop targets, Default + Inter, equal tiles, customer evidence binding, fixture classes, deterministic browser screenshots, no raw IDs, and validation/acceptance.

This section points to owners; it does not restate their complete rules.

## 5. Retired overlapping owners

- `docs/design-system/customer-dashboard-design-standard-rev01.md` is historical and routes architecture/behavior to INSTALL006 and visual/components to DESIGN001.
- The branch-only customer-dashboard-design REV02 draft was removed after absorption and never became a canonical owner.
- `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md` is historical; reusable rules moved to DESIGN001.
- `docs/design-system/customer-dashboard-philosophy.md` is reference philosophy only; its four-level severity model is not active authority.

## 6. PR and campaign lineage

PR #578 remains open, operator-deferred, and unmerged. It is implementation lineage only, not current approval authority. Do not continue or merge it through this governance task.

`DASHBOARD-CAMPAIGN-001` remains ACTIVE and keeps dashboard planning/task creation open. It does not authorize implementation; each child task still requires exact scope, files, protected boundaries, validation, one branch, and one PR.

The prepared child work order `docs/codex/work-orders/T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md` remains undispatched and unexecuted.

## 7. Unresolved gaps only

- Live dashboard registration, assignment, binding, rollback, and customer acceptance require a separately authorized runtime task.
- Customer-specific unresolved physical mappings remain unresolved until authoritative onsite/current evidence exists.
- Registry evidence does not prove live availability or physical state.

No unresolved item in this map authorizes implementation, live Home Assistant access, protected-system change, merge, or deployment.
