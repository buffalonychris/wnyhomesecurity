# WNYHS Dashboard Governance Master REV01

Status: Active reconciliation and gap-analysis document
Owner: Dashboard / Interactive Experience System
Customer-facing: No
Implementation authority: No
Task ID: DASH-GOV-001
Controlling context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
Work order: `docs/codex/work-orders/DASH-GOV-001_WORK_ORDER_REV03.md`

This document consolidates and classifies WNY Home Security dashboard governance without replacing the functional owners cited below. `INSTALL006` continues to own installer-platform dashboard architecture; the active design-system dashboard standards continue to own customer-interface and responsive presentation rules; `INSTALL008`, `INSTALL009`, and `INSTALL010` continue to own commissioning, handoff, and service/remote-support obligations; Automation and Notification standards continue to own their behaviors. BKLF material remains customer-specific reference evidence unless separately promoted.

Classification vocabulary used by every substantive rule or subsection:

- `ESTABLISHED`: current reusable governance exists and is retained.
- `REVISE`: current governance exists but needs a bounded owner revision.
- `ADD`: a reusable rule or contract is genuinely missing.
- `DUPLICATE`: the same rule appears in multiple current sources and should be normalized by its owner without deleting lineage.
- `CONFLICT`: current authorities overlap incompatibly or lack an approved crosswalk; operator decision is required.
- `BKLF REFERENCE`: sanitized customer-specific evidence, not universal authority.
- `DEPRECATE`: retain as lineage but stop using the item as live-current or universal guidance.
- `UNKNOWN`: repository evidence is insufficient for a current conclusion.

## 1. Purpose and Authority

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Authority and disposition |
| --- | --- | --- | --- | --- |
| DG-001 | `ESTABLISHED` | Customer, installer/commissioning, and service/operator dashboards are distinct surfaces with different visibility and information-density requirements. | `INSTALL006` Sections 1-3; `DESIGN001` Section 14; `INSTALL010` Section 3 | Universal current governance; retain functional owners. |
| DG-002 | `ESTABLISHED` | This master reconciles sources and records lineage, duplication, conflicts, revisions, gaps, and downstream KAOS needs; it does not supersede or modify functional owners. | DASH-GOV-001 REV03 Owner Routing Matrix | Current bounded authority for this document only. |
| DG-003 | `ESTABLISHED` | No rule in this master authorizes Home Assistant YAML, dashboard implementation, runtime, automation, notification, KAOS, website, CRM, payment, scheduling, Cloudflare, dependency, environment, secret, or deployment changes. | DASH-GOV-001 REV03 Sections 6-8; all current functional-owner implementation boundaries | Retain as hard boundary. |
| DG-004 | `ESTABLISHED` | Customer-facing language must remain local-first, customer-owned, plain-language, and free of monitoring, dispatch, guaranteed response, prevention, or always-watched claims. | `INSTALL006` Sections 12 and 20; `INSTALL009` Section 4; `INSTALL010` Section 11; `DESIGN001` Section 16 | Universal current governance. |

## 2. Source Document Inventory

**Section classification:** `ESTABLISHED`

| Source ID | Classification | Source | Current role / authority | Applicability and recommended disposition |
| --- | --- | --- | --- | --- |
| SRC-001 | `ESTABLISHED` | `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` | Active installer dashboard-architecture standard | Universal functional owner; retain. |
| SRC-002 | `ESTABLISHED` | `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md` | Active HA dashboard theme-readiness standard | Universal visual/theme constraint; retain. |
| SRC-003 | `ESTABLISHED` | `docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md` | Active commissioning checklist standard | Universal acceptance/evidence owner; retain. |
| SRC-004 | `ESTABLISHED` | `docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md` | Active handoff-package standard | Universal customer handoff/training owner; retain. |
| SRC-005 | `ESTABLISHED` | `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md` | Active service-dashboard and remote-support standard | Universal service/support owner; retain. |
| SRC-006 | `ESTABLISHED` | `docs/design-system/customer-dashboard-philosophy.md` | Active reassurance-first customer-dashboard philosophy | Customer-facing philosophy owner; retain. |
| SRC-007 | `ESTABLISHED` | `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV01.md` | Active customer-interface standard | Universal customer semantics, controls, visual hierarchy, and accessibility owner; retain. |
| SRC-008 | `ESTABLISHED` | `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV01.md` | Active responsive-delivery standard | Universal device-target, assignment, responsive, and screenshot-acceptance owner; retain. |
| SRC-009 | `ESTABLISHED` | `docs/design-system/customer-dashboard-design-standard-rev01.md` | Active reusable customer-dashboard design standard | Universal customer shell, mobile-first hierarchy, action, and branding owner; retain. |
| SRC-010 | `ESTABLISHED` | `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md` | Active automation standard | Owns automation behavior, overrides, fallback, dependencies, and supportability; reference only here. |
| SRC-011 | `ESTABLISHED` | `docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md` | Active reusable notification standard | Owns event contract, priority, routing, deep-link destination, validation, and handoff; reference only here. |
| SRC-012 | `ESTABLISHED` | `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV01.md` | Active sanitized backup-extraction standard | Owns safe input/extraction boundary; reference only here. |
| SRC-013 | `ESTABLISHED` | `docs/installer/INSTALL008_HA_GREEN_BOOTSTRAP_STANDARD_REV01.md` | Active HA Green bootstrap standard | Owns baseline UI dependencies, bootstrap sequence, backup, and bootstrap validation; reference only here. |
| SRC-023 | `ESTABLISHED` | `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md` | Current registered Visual System standard for public marketing pages | Owner-boundary evidence only: its site CSS/token primitives do not become Home Assistant dashboard rules through this reconciliation. |
| SRC-024 | `ESTABLISHED` | `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md` | Current registered public-page token compliance gate | Owner-boundary evidence only: it governs public web-page edits and does not authorize Home Assistant theme, YAML, or dashboard implementation. |
| SRC-014 | `BKLF REFERENCE` | `docs/home-assistant/bklf-ha-dashboard-and-entity-spec.md` | Active BKLF planning/specification and later sanitized refresh notes | Customer-specific evidence; do not promote names, IDs, rooms, modes, or planned placeholders automatically. |
| SRC-015 | `BKLF REFERENCE` | `docs/home-assistant/bklf-ha-entity-register.md` | Active BKLF mapping register | Customer-specific device/entity/area/dashboard/workflow evidence; technical IDs remain non-customer-facing. |
| SRC-016 | `BKLF REFERENCE` | `docs/home-assistant/bklf-ha-live-build-checklist.md` | BKLF build/validation checklist | Customer-specific build lineage; use readiness and backup lessons only. |
| SRC-017 | `BKLF REFERENCE` | `docs/home-assistant/bklf-ha-green-config-checklist.md` | BKLF configuration checklist | Customer-specific area, naming, dashboard-plan, backup, and handoff evidence. |
| SRC-018 | `BKLF REFERENCE` | `docs/home-assistant/bklf/BKLF_DASHBOARD_FOLLOWUP_NOTES_REV01.md` | Non-executable validated follow-up notes | Sanitized phone-review evidence and future improvement queue; retain as reference. |
| SRC-019 | `BKLF REFERENCE` | `docs/home-assistant/bklf/inventory/dashboard-inventory.md` | Sanitized current dashboard inventory | Current routes, customer-facing dependency classes, and backup-refresh evidence. |
| SRC-020 | `BKLF REFERENCE` | `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml` | Repo-controlled BKLF mobile/customer implementation evidence | Read-only implementation evidence; nine views, three custom card types, no broken internal navigation found during DASH-GOV-001. |
| SRC-021 | `BKLF REFERENCE` | `home-assistant/bklf/dashboards/bklf-desktop-dashboard.yaml` | Repo-controlled BKLF expanded/desktop implementation evidence | Read-only implementation evidence; eight views, four custom card types, no broken internal navigation found during DASH-GOV-001. |
| SRC-022 | `DEPRECATE` | Pre-live placeholder shell instructions in BKLF planning checklists | Historical build-planning evidence | Retain in source lineage, but do not treat placeholder panels or pre-live assumptions as current runtime truth where current YAML/inventory exists. |

## 3. Dashboard Classes

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-030 | `ESTABLISHED` | Customer Dashboard is the calm daily-use surface: installed capabilities, plain language, outcome grouping, mobile-first controls, and no setup or diagnostic noise. | `INSTALL006` Section 3.1; `customer-dashboard-philosophy` Sections 1-2; `DESIGN001` Sections 2 and 7-8 | Universal; retain. |
| DG-031 | `ESTABLISHED` | Installer/Commissioning Dashboard is temporary/internal and may expose pairing, signal, entity, test, exception, and restore-readiness detail; it must be hidden or removed from normal customer use after commissioning. | `INSTALL006` Sections 3.2 and 5; `INSTALL008` Sections 4-5 | Universal; retain. |
| DG-032 | `ESTABLISHED` | Service/Operator Dashboard is internal by default and supports actionable diagnostics, warranty/support context, exception triage, and onsite follow-up without implying continuous service. | `INSTALL006` Sections 3.3 and 6; `INSTALL010` Sections 3-7 | Universal; retain. |
| DG-033 | `ESTABLISHED` | Customer delivery may use Mobile and Expanded variants while preserving one customer meaning and keeping technician/operator content separate. | `DASHBOARD001` Sections 3-6 | Universal; retain variant model. |
| DG-034 | `UNKNOWN` | A canonical permission/role implementation contract for enforcing the customer/installer/service separation is not identified in the reviewed governance. | `INSTALL008_HA_GREEN_BOOTSTRAP` Section 3; `DASHBOARD001` Section 4 | Record as a future access-model governance gap; do not infer permissions. |

## 4. User and Role Model

**Section classification:** `REVISE`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-040 | `ESTABLISHED` | Customer users receive only approved daily-use dashboards, controls, settings, and installed capability groups. | `INSTALL008_HA_GREEN_BOOTSTRAP` Section 3; `DESIGN001` Sections 7-8 and 14 | Universal. |
| DG-041 | `ESTABLISHED` | Technician/admin users may access setup and diagnostic detail only where authorized; customer users should not have to select an internal variant during normal use. | `DASHBOARD001` Sections 3.3-4 | Universal. |
| DG-042 | `ESTABLISHED` | Remote-support users require customer authorization, technical availability, a recorded high-level access status, and revocation handling without repository credentials or private URLs. | `INSTALL010` Sections 5 and 10 | Universal. |
| DG-043 | `REVISE` | A future owner revision should define a reusable role-to-dashboard assignment record, including customer, installer, service, admin, kiosk/tablet, fallback behavior, and handoff proof. | `DASHBOARD001` Sections 2-4; `INSTALL009` Sections 5 and 8 | Extend the responsive/access owners through a separate bounded task. |

## 5. Information Architecture

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-050 | `ESTABLISHED` | Customer information architecture is capability- and outcome-based, not vendor-based. Empty, future, speculative, or unsupported modules must not appear as active customer features. | `INSTALL006` Sections 4, 9-10, and 16; `DESIGN001` Sections 7-8 | Universal. |
| DG-051 | `ESTABLISHED` | The reusable customer shell may include Home, Doorbell, Cameras, Locks, Security, Activity, and More only where installed hardware and approved scope support them. | `customer-dashboard-design-standard` Sections 3-4 | Universal conditional shell, not a requirement to show empty screens. |
| DG-052 | `ESTABLISHED` | Installer information architecture groups setup, adoption, network/controller, areas/entities, automation tests, backups, and exceptions. | `INSTALL006` Section 5 | Universal. |
| DG-053 | `ESTABLISHED` | Service information architecture groups service overview, offline devices, low batteries, failed automations, integration health, backup/update state, assets/warranty, exceptions, and onsite follow-up. | `INSTALL010` Section 4 | Universal. |
| DG-054 | `BKLF REFERENCE` | BKLF demonstrates separate mobile and expanded route sets centered on building status, entry/doorbells, cameras, locks/doors, security/activity, and system/more. | BKLF dashboard inventory; both BKLF dashboard YAML top-level `views` blocks | Reference pattern only; exact routes and labels remain BKLF-specific. |

## 6. Landing / Property Status Page

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-060 | `ESTABLISHED` | The landing surface answers: Is the property okay, is action needed, and what are the common actions? | `customer-dashboard-philosophy` Section 2; `customer-dashboard-design-standard` Section 6 | Universal. |
| DG-061 | `ESTABLISHED` | Critical current state and the primary customer workflow precede summaries, history, settings, and diagnostics. | `DESIGN001` Section 6; `INSTALL006` Sections 7 and 10 | Universal. |
| DG-062 | `ESTABLISHED` | Normal state uses calm reassurance and progressive disclosure; detail appears when action is needed or intentionally requested. | `customer-dashboard-philosophy` Sections 2 and 7 | Universal. |
| DG-063 | `BKLF REFERENCE` | BKLF shows a building-status landing view and preserves entry/video/access as the primary customer workflow. | BKLF dashboard inventory; main/desktop YAML `status` and entry views; BKLF follow-up Sections 2-3 | Preserve lesson, not exact customer wording or layout. |
| DG-064 | `REVISE` | BKLF follow-up evidence says header and non-critical status weight should be reduced so live entry video and primary actions appear sooner on phone. | `BKLF_DASHBOARD_FOLLOWUP_NOTES_REV01` Sections 3-4 | BKLF-only candidate; requires a separate implementation task. |

## 7. Status Semantics and Visual Hierarchy

**Section classification:** `CONFLICT`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-070 | `ESTABLISHED` | Safety meaning is supported by text and icons, never color alone; green is safe/locked/healthy, amber is attention/degraded, red/burgundy is critical or security-sensitive, and gold is non-risk brand/navigation emphasis. | `DESIGN001` Sections 3-4; `INSTALL007` Sections 3 and 7 | Universal current visual semantics. |
| DG-071 | `CONFLICT` | The customer philosophy defines four severities (`Normal`, `Information`, `Attention`, `Critical`), while `INSTALL006` defines five dashboard status classes (`Critical/blocked`, `Warning/needs attention`, `Normal/healthy`, `Informational`, `Hidden/noise`). Both apply to customer-facing status, but no current approved crosswalk defines canonical customer labels or whether `Hidden/noise` is a severity versus visibility class. | `customer-dashboard-philosophy` Section 4; `INSTALL006` Section 7 | Operator decision required before a universal generated status schema is approved. Until then, preserve each owner in its scope and do not silently normalize. |
| DG-072 | `ESTABLISHED` | Security-sensitive actions such as unlock, disarm, bypass, or disable are visually distinct, deliberate, and never green. | `DESIGN001` Sections 4-5; `customer-dashboard-design-standard` Sections 8 and 13 | Universal. |
| DG-073 | `BKLF REFERENCE` | Current BKLF YAML uses theme variables, explicit labels/icons, and confirmation near all inspected `lock.unlock` calls. | Both BKLF dashboard YAML action/style blocks | Positive implementation evidence only; not a universal implementation guarantee. |

## 8. Customer Actions and Control Boundaries

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-080 | `ESTABLISHED` | Customer actions are large, plain-language, task-based, and understandable without editing automation internals. | `DESIGN001` Section 5; `AUTOMATION001` Section 10 | Universal. |
| DG-081 | `ESTABLISHED` | Supported automations retain a reasonable manual or physical fallback, mode selector, temporary disable/test posture, and documented recovery behavior. | `AUTOMATION001` Sections 10 and 12 | Automation owner controls behavior; dashboard may expose approved controls only. |
| DG-082 | `ESTABLISHED` | AI, voice, shortcuts, or notification actions do not control locks, disarm, bypass, alarms, access, or other protected actions without separate exact governance and implementation authority. | `DESIGN001` Section 16; BKLF dashboard spec Section 5; bootstrap Section 11 | Universal. |
| DG-083 | `ESTABLISHED` | Sensitive notification actions require explicit owner approval, authentication review, device/service/permission validation, and safe destination behavior. | Notification Engine Section 14.3 | Notification owner controls; dashboard does not inherit authorization. |
| DG-084 | `BKLF REFERENCE` | BKLF demonstrates task-based Talk/View/Snapshot/Lock/Unlock controls and confirmation for inspected unlock actions. | BKLF follow-up Section 2; both YAML action blocks | Reference evidence only. |

## 9. Camera and Doorbell UX

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-090 | `ESTABLISHED` | A video doorbell is a primary interaction surface, not merely another camera; it precedes secondary cameras when present. | `customer-dashboard-philosophy` Section 6; `customer-dashboard-design-standard` Section 7 | Universal where a doorbell is installed. |
| DG-091 | `ESTABLISHED` | Doorbell UX prioritizes validated live view, talk/speak, deliberate lock/unlock where supported, full view, and recent visitor activity. | `customer-dashboard-design-standard` Section 7; `DESIGN001` Sections 6-8 | Universal conditional capability rule. |
| DG-092 | `ESTABLISHED` | Media attachments or streams must be privacy-appropriate and validated; media failure should not erase the core notification unless explicitly required. | Notification Engine Sections 14.2-14.3 | Universal. |
| DG-093 | `BKLF REFERENCE` | BKLF phone evidence supports stronger live-camera prominence and reduced competing card weight for entry-centric customers. | BKLF follow-up Sections 3-4 | Reference lesson; future BKLF polish remains unauthorized. |

## 10. Mobile vs Desktop / Tablet Behavior

**Section classification:** `DUPLICATE`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-100 | `DUPLICATE` | Phone is single-column, large-control, low-scroll, no-horizontal-scroll, no-zoom, and primary-workflow-first across multiple current standards. | `INSTALL006` Section 11; `DASHBOARD001` Section 5; `customer-dashboard-design-standard` Section 5 | Canonical delivery owner should be `DASHBOARD001`; other owners should reference it in future revisions. |
| DG-101 | `ESTABLISHED` | Tablet portrait stays near mobile; tablet landscape and desktop may use expanded grouping without becoming diagnostic or overloaded. | `DASHBOARD001` Sections 3 and 5 | Universal. |
| DG-102 | `ESTABLISHED` | Dashboard assignment must not rely on automatic device detection alone; record default assignment and fallback where Home Assistant, Companion, browser, user, kiosk, or shortcut limits exist. | `DASHBOARD001` Section 4 | Universal. |
| DG-103 | `ESTABLISHED` | Validation evidence covers the customer-used Companion and browser targets, theme modes, first-screen readability, controls, and technical-clutter absence. | `DASHBOARD001` Sections 7-8 | Universal acceptance rule. |
| DG-104 | `BKLF REFERENCE` | BKLF maintains separate mobile and expanded YAML with consistent status, doorbell, camera, lock, security, and support concepts. | Both BKLF dashboard YAML view sets | Reference delivery evidence only. |

## 11. Installer / Commissioning Dashboard

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-110 | `ESTABLISHED` | Installer dashboards support setup overview, adoption, radios, controller/network, areas/entities, automation tests, backup/restore, and exceptions. | `INSTALL006` Section 5 | Universal. |
| DG-111 | `ESTABLISHED` | Commissioning records Customer, Installer, and Service dashboard readiness and uses screenshot references, device tests, entity-state checks, backup references, exception notes, and customer confirmation as applicable. | `INSTALL008` Sections 4.10-4.12, 5.11-5.17, and 6 | Universal. |
| DG-112 | `ESTABLISHED` | Primary dashboard inaccessibility, unavailable sold local control, unresolved critical devices/sensors, missing signoff, or missing post-commissioning backup blocks handoff absent an approved documented exception. | `INSTALL008` Section 8 | Universal. |
| DG-113 | `BKLF REFERENCE` | BKLF build checklists demonstrate explicit areas/labels, dashboard shell, workflow checks, backup milestones, and carry-forward items. | BKLF live-build Sections 7-17; green-config Sections 7-10 | Reference implementation process only. |

## 12. Service / Remote Support Dashboard

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-120 | `ESTABLISHED` | Service dashboards expose support-relevant diagnostics, asset/warranty context, exceptions, next action, and onsite-follow-up posture—not customer daily-use content. | `INSTALL010` Sections 3-9 | Universal. |
| DG-121 | `ESTABLISHED` | Remote support is conditional, authorized, technically available, revocable, and never described as continuous staffed service, dispatch, emergency response, or guaranteed detection/uptime. | `INSTALL010` Sections 5 and 11 | Universal. |
| DG-122 | `ESTABLISHED` | Readiness records include diagnostic category, related device/entity/area, asset/warranty/customer visibility, remote eligibility, status, evidence reference, next action, owner, and notes without secrets. | `INSTALL010` Section 9 | Universal. |
| DG-123 | `ADD` | No reviewed source defines a reusable service-dashboard data export/ingestion contract that a future generator can consume without coupling to a CRM or live HA instance. | `INSTALL010` planning relationships; DASH-GOV-001 KAOS gap list | Add only through a future owner-approved data-contract task. |

## 13. Notifications and Dashboard Deep Links

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-130 | `ESTABLISHED` | Notification contracts own event eligibility, verified trigger/resolution, modes, priority, visibility, recipients, channels, quiet hours, cooldown/repeat/recovery, message, optional destination, and validation evidence. | Notification Engine Sections 4-9 | Universal notification owner rule. |
| DG-131 | `ESTABLISHED` | A safe default notification action opens the relevant camera, doorbell, security, or system-health view; direct sensitive controls require separate approval and authentication review. | Notification Engine Section 14.3 | Universal. |
| DG-132 | `ESTABLISHED` | Deep links and media must be tested on the exact device, Companion behavior, permission model, and route; failures and unavailable sources must be validated. | Notification Engine Sections 14 and 16 | Universal. |
| DG-133 | `REVISE` | A future joint Notification/Dashboard revision should define stable semantic destination identifiers independent of customer-specific route strings, plus broken-destination validation. | Notification Engine `Destination` field; `DASHBOARD001` assignment/fallback rules | Missing cross-owner interface; no route scheme is invented here. |

## 14. Automation / Building-State Dashboard Interactions

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-140 | `ESTABLISHED` | Dashboard presentation and controls do not own automation orchestration; Automation System owns triggers, conditions, suppression, manual override, recovery, dependencies, and tests. | `AUTOMATION001` Sections 10-12 | Universal ownership boundary. |
| DG-141 | `ESTABLISHED` | Modes may be customer controls and notification inputs, but allowed values, authority, transitions, suppression, and recovery require verified contracts. | `AUTOMATION001` Section 10; Notification Engine Sections 6-9 | Universal. |
| DG-142 | `ESTABLISHED` | Aggregated property state includes only installed, verified inputs; planned/deferred hardware is not represented as live state. | `DESIGN001` Section 8; BKLF spec Sections 5-6 | Universal principle supported by BKLF evidence. |
| DG-143 | `BKLF REFERENCE` | BKLF demonstrates composite building/exterior/motion status and an owner-managed entry workflow, while its planned automation memberships remain separately status-labeled. | BKLF entity register Sections 5-6; dashboard inventory status notes | Reference only; planned items are not promoted as implemented. |
| DG-144 | `ADD` | A reusable building/property-state contract with inputs, freshness, degraded/unknown behavior, excluded/deferred inputs, and customer-safe output is not established in the reviewed universal owners. | `INSTALL008_HA_GREEN_BOOTSTRAP` Section 15; BKLF composite evidence | Future Dashboard/Automation owner decision required. |

## 15. Entity / Area / Device Mapping Requirements

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-150 | `ESTABLISHED` | Every customer card traces to reviewed installed devices, entities, areas, visibility, readiness, and approved customer labels; diagnostics remain separate. | `INSTALL006` Sections 9 and 14; `INSTALL008` Sections 4.7-4.10 | Universal. |
| DG-151 | `ESTABLISHED` | Customer-facing names are plain-language; raw entity IDs are limited to technical registers/YAML bindings and never used as normal customer labels. | `HA-BACKUP001` Section 4A; `INSTALL009` Sections 4-5; `DESIGN001` Section 10 | Universal. |
| DG-152 | `ESTABLISHED` | Renames after dashboard/automation binding require recorded mapping and impact review; unclear/duplicate/noisy entities are documented, not silently deleted. | `INSTALL008` Sections 4.8-4.9; BKLF entity register Section 2 | Universal rule with BKLF evidence. |
| DG-153 | `BKLF REFERENCE` | BKLF registers area, device/entity, dashboard-panel, automation-membership, status, and open-verification mappings. | BKLF entity register Sections 2, 4-7 | Reference schema evidence; exact customer fields and IDs are not universal. |

## 16. Dashboard Generation / Parameterization Requirements

**Section classification:** `ADD`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-160 | `ESTABLISHED` | Safe generator inputs may come only from repo-controlled configuration and sanitized derivatives produced under the backup-extraction standard; raw backups are not committed or treated as unrestricted inputs. | `HA-BACKUP001` Sections 1-4, 8-10 | Universal safe-input boundary. |
| DG-161 | `ADD` | Define a versioned, owner-approved WNYHS property/dashboard input model covering customer-safe property identity, areas, capabilities, devices/entities, roles, modes, dependencies, visibility, readiness, and evidence freshness. | `INSTALL006` readiness sheet; `HA-BACKUP001` sanitized registers; no current generator contract | Future governance only; no schema designed here. |
| DG-162 | `ADD` | Define template parameterization rules for customer mobile, expanded, installer, and service dashboards, including conditional capability inclusion and stable semantic destinations. | `DASHBOARD001` variant model; `INSTALL006` classes | Future Dashboard owner task. |
| DG-163 | `ADD` | Define deterministic output manifests identifying template/version, source evidence, bindings, dependencies, routes, resources, generated files, validation, backup, rollback, and acceptance evidence. | Bootstrap Sections 7-12; INSTALL008 evidence; no universal generation manifest | Future Dashboard/Installer owner task. |
| DG-164 | `UNKNOWN` | The repository does not establish which future KAOS module, serializer, template format, or execution boundary will generate dashboard artifacts. | REV03 KAOS gap analysis boundary | Remain unknown; do not design or implement KAOS here. |

## 17. Validation and Acceptance Requirements

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-170 | `ESTABLISHED` | Validate dashboard load, installed capability bindings, customer-safe language, role separation, primary workflow, controls, theme modes, device targets, local-control posture, backups, exceptions, and customer training/signoff. | `INSTALL008` Sections 4-8; `DASHBOARD001` Sections 7-8; `INSTALL009` Section 8 | Universal. |
| DG-171 | `ESTABLISHED` | Validation evidence may include screenshots, device/sensor/camera/lock tests, entity-state checks, backup references, exception notes, and customer confirmation, stored only in authorized job artifacts. | `INSTALL008` Section 6 | Universal. |
| DG-172 | `ESTABLISHED` | Every enabled notification route, destination, media/action path, failure mode, customer/service separation, and acceptance/training outcome is tested. | Notification Engine Section 16 | Universal. |
| DG-173 | `REVISE` | Add a reusable automated validation contract for missing entities, broken navigation/deep links, absent custom-card resources, unsupported card types, duplicate routes, and stale evidence; current reviewed sources require validation but do not define one universal checker. | Bootstrap Section 12; HA-BACKUP001 Section 9; current BKLF YAML structural evidence | Future owner revision; no validator implemented here. |
| DG-174 | `BKLF REFERENCE` | DASH-GOV-001 structural inspection found nine mobile views, eight desktop views, no broken internal navigation targets, and confirmation near all 11 inspected unlock service calls. | Both BKLF YAML files | Point-in-time repo evidence, not live HA acceptance. |

## 18. Customer Handoff and Training Requirements

**Section classification:** `ESTABLISHED`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-180 | `ESTABLISHED` | Handoff explains delivered views, common actions, status meanings, unavailable/offline behavior in plain language, support path, known limits, and non-customer surfaces. | `INSTALL009` Sections 3-5 | Universal. |
| DG-181 | `ESTABLISHED` | Training confirms dashboard access, primary views/actions, local-first ownership, support path, known exceptions, package receipt, and signoff or recorded deferral. | `INSTALL009` Sections 8-9 | Universal. |
| DG-182 | `ESTABLISHED` | Handoff excludes setup noise, entity IDs, diagnostics, credentials, private URLs, internal asset/cost/vendor details, and unsupported promises. | `INSTALL009` Sections 4-7 | Universal. |
| DG-183 | `ADD` | A reusable generated handoff artifact link between dashboard manifest/version and customer training/signoff evidence is not defined. | `INSTALL009`; generation gap DG-163 | Future Handoff/Dashboard owner task. |

## 19. Accessibility / Plain-Language Requirements

**Section classification:** `DUPLICATE`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-190 | `DUPLICATE` | Plain language, large touch targets, strong contrast, icon-plus-text, no color-only state, no tiny diagnostic grids, and phone readability recur across current architecture, theme, customer-interface, responsive, and handoff owners. | `INSTALL006` Sections 9-13; `INSTALL007` Section 7; `DESIGN001` Sections 5, 10, and 13; `DASHBOARD001` Sections 5-8; `INSTALL009` Sections 4-5 | Keep domain-specific enforcement; future revisions should cross-reference `DESIGN001`/`DASHBOARD001` rather than restating full rules. |
| DG-191 | `ESTABLISHED` | Important controls use at least 48px touch targets, with 56px preferred for primary controls; risky controls use icon plus label. | `DESIGN001` Section 5; customer design standard Section 13 | Universal. |
| DG-192 | `ESTABLISHED` | Light, Dark, Auto, and high-contrast considerations preserve structure, meaning, permissions, focus, and readable status. | `INSTALL007` Sections 3-9; `DASHBOARD001` Section 10 | Universal. |
| DG-193 | `ESTABLISHED` | The current registered Visual System sources govern public marketing pages and public-page token compliance. Their site CSS primitives and page gate are not Home Assistant dashboard implementation authority. | `DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02` Purpose and Token / Primitive Contract; `PAGE_TOKEN_COMPLIANCE_GATE_REV01` Metadata and Sections 1, 9-10 | Preserve the Visual System scope boundary. Dashboard presentation continues to use the applicable HA/dashboard design and theme owners cited above unless a future bounded cross-surface standard is approved. |

## 20. Dependency and Custom-Card Governance

**Section classification:** `REVISE`

| Rule ID | Classification | Rule / requirement | Source lineage | Applicability and disposition |
| --- | --- | --- | --- | --- |
| DG-200 | `ESTABLISHED` | HACS and custom frontend packages are managed customer dependencies; installed packages/resources and versions must be documented, validated, backed up, and supportable. | `INSTALL008_HA_GREEN_BOOTSTRAP` Sections 6-8 and 12 | Universal installer owner rule. |
| DG-201 | `ESTABLISHED` | Custom UI resources must not hide critical meaning, force swipe-only primary actions, create fragile one-off styling, or expose noisy dynamic lists to customers. | Bootstrap Section 7; `INSTALL007` Sections 7-8 | Universal. |
| DG-202 | `BKLF REFERENCE` | Current BKLF YAML depends on `button-card`, Mushroom template cards, WebRTC camera, and—on desktop—`grid-layout`; the repo YAML alone does not prove installed resource versions or live availability. | Both BKLF YAML `type: custom:*` blocks | Reference dependency evidence. |
| DG-203 | `UNKNOWN` | Exact current BKLF custom-card versions and live resource-registration health were not established by the authorized repo-only evidence. | Bootstrap dependency record requirement; BKLF YAML | Must be verified by a separately authorized customer-support/implementation task. |
| DG-204 | `REVISE` | Define a reusable dependency manifest and compatibility/availability validation contract for dashboard generation and handoff. | Bootstrap Sections 6-8; generation gap DG-163 | Future Installer/Dashboard owner revision. |

## 21. BKLF Reference Lessons

**Section classification:** `BKLF REFERENCE`

| Rule ID | Classification | Sanitized lesson | Source lineage | Disposition |
| --- | --- | --- | --- | --- |
| DG-210 | `BKLF REFERENCE` | WNYHS branding, building-status landing, entry/doorbell workflows, task-based controls, themes, and separated mobile/expanded layouts are proven repo-backed patterns. | BKLF follow-up Section 2; inventory; both YAML view/action blocks | Candidate reusable evidence only. |
| DG-211 | `BKLF REFERENCE` | Phone headers and secondary cards can consume too much space; primary video and entry actions should dominate where that is the customer’s core workflow. | BKLF follow-up Sections 3-4 | Candidate design refinement. |
| DG-212 | `BKLF REFERENCE` | Recent activity needs short customer-readable summaries; raw event/history detail belongs in separated views. | BKLF follow-up Sections 3-4 | Candidate reusable formatting lesson. |
| DG-213 | `BKLF REFERENCE` | Planned/deferred sensors are explicitly separated from installed inputs, and installed-only smoke presentation does not claim live alarm detection or response. | BKLF spec Sections 5-6 and later smoke synchronization; dashboard inventory status notes | Preserve claims-safe evidence; do not generalize exact labels without owner promotion. |
| DG-214 | `BKLF REFERENCE` | Entity/area mapping, backup checkpoints, unlock confirmations, and internal navigation integrity demonstrate useful validation evidence. | BKLF entity register; live-build checklist; both YAML files | Feed future validation governance, not implementation authority. |

## 22. Duplicate Rules

**Section classification:** `DUPLICATE`

| Duplicate ID | Classification | Duplicated rule | Current sources | Recommended controlling owner / disposition |
| --- | --- | --- | --- | --- |
| DUP-001 | `DUPLICATE` | Customer/installer/service separation | `INSTALL006`, `DESIGN001`, customer philosophy/design standard, `DASHBOARD001`, `INSTALL009`, `INSTALL010` | `INSTALL006` owns classes; each functional owner references it and retains domain-specific enforcement. |
| DUP-002 | `DUPLICATE` | Mobile-first, touch-safe, no clutter, expanded layout without overload | `INSTALL006`, `INSTALL007`, `DESIGN001`, `DASHBOARD001`, customer design standard | `DASHBOARD001` owns delivery behavior; `DESIGN001` owns customer interaction/accessibility. |
| DUP-003 | `DUPLICATE` | Light/Dark/Auto parity and no color-only meaning | `INSTALL006`, `INSTALL007`, `DESIGN001`, `DASHBOARD001`, customer design standard | `INSTALL007` owns HA theme readiness; `DESIGN001` owns customer semantics. |
| DUP-004 | `DUPLICATE` | Installed capabilities only; no empty/future panels | `INSTALL006`, `DESIGN001`, `DASHBOARD001`, customer design standard, bootstrap | `DESIGN001` owns customer-interface capability adaptation; installer docs enforce readiness. |
| DUP-005 | `DUPLICATE` | Plain-language, no raw IDs/diagnostics/secrets/unsupported claims | All dashboard, handoff, service, automation, notification, and extraction owners | Retain domain enforcement; avoid verbatim restatement in future revisions. |
| DUP-006 | `DUPLICATE` | Doorbell/entry workflow priority | customer philosophy, `DESIGN001`, customer design standard, BKLF spec/follow-up | Customer design owners control universal rule; BKLF remains evidence. |
| DUP-007 | `DUPLICATE` | Backup, validation, exception, and handoff proof | `INSTALL008`, `INSTALL009`, bootstrap, HA-BACKUP001, `DASHBOARD001`, Notification Engine | Installer/commissioning owners control acceptance; other owners provide domain checks. |

## 23. Conflicts Requiring Operator Decision

**Section classification:** `CONFLICT`

| Conflict ID | Classification | Conflict | Sources | Operator decision required |
| --- | --- | --- | --- | --- |
| CON-001 | `CONFLICT` | Customer-facing severity/status taxonomy is not canonically cross-walked: four customer severities versus five dashboard status/visibility classes. | Customer dashboard philosophy Section 4; `INSTALL006` Section 7 | Approve a canonical customer severity vocabulary and an explicit mapping for installer/service status and hidden/noise visibility. Decide whether `Hidden/noise` is removed from severity and governed solely as visibility. No source is changed by this task. |

No other same-level current-authority conflict was established by the reviewed sources. Differences in mobile versus expanded layouts, universal versus BKLF-specific rules, and dashboard versus notification/automation ownership were resolvable through scope rather than silent precedence choices.

## 24. Rules Requiring Revision

**Section classification:** `REVISE`

| Revision ID | Classification | Required bounded revision | Current owner(s) | Reason |
| --- | --- | --- | --- | --- |
| REV-001 | `REVISE` | Add the operator-approved severity/status crosswalk after CON-001 is decided. | Customer dashboard philosophy and `INSTALL006`, coordinated with `DESIGN001` | Prevent inconsistent generated labels and visual states. |
| REV-002 | `REVISE` | Define role-to-dashboard assignment and fallback evidence. | `DASHBOARD001` with installer/access constraints | Current rules describe assignment but not a reusable record contract. |
| REV-003 | `REVISE` | Define semantic notification destination IDs and broken-link validation. | Notification Engine plus Dashboard owner | Avoid customer-specific route coupling. |
| REV-004 | `REVISE` | Define automated entity/navigation/resource/dependency validation requirements. | Dashboard and Installer owners | Current sources require checks but no universal checker contract exists. |
| REV-005 | `REVISE` | Define a versioned custom-card/resource dependency manifest. | Bootstrap/Installer owner with Dashboard constraints | YAML evidence does not establish live versions or compatibility. |
| REV-006 | `REVISE` | Narrow future sources to canonical cross-references for repeated mobile/theme/plain-language rules. | Functional owners named in Section 22 | Reduce drift without deleting historical lineage. |

## 25. Missing Governance / Additions

**Section classification:** `ADD`

| Gap ID | Classification | Future KAOS Dashboard Creation/Management coverage | Current coverage | Genuine missing governance / disposition |
| --- | --- | --- | --- | --- |
| GAP-001 | `ESTABLISHED` | HA backup/inventory input and safe extraction boundary | HA-BACKUP001 prohibits committed raw backups and defines sanitized derivatives/manifests | Reuse current owner; no new rule needed. |
| GAP-002 | `ESTABLISHED` | Entity/device/area extraction | HA-BACKUP001 categories and BKLF sanitized registers | Reuse current extraction owner; BKLF schema is evidence only. |
| GAP-003 | `ADD` | Semantic normalization | Plain-language and capability rules exist, but no versioned normalization contract maps technical inventory to WNYHS semantic capability/status/action roles | Add future cross-owner contract; do not invent mappings here. |
| GAP-004 | `ADD` | WNYHS property model | Readiness sheets and BKLF registers are partial; no approved dashboard-generator property model exists | Add future Dashboard/Installer data-model governance. |
| GAP-005 | `ADD` | Template parameterization | Variant/class rules exist, but no versioned conditional template contract exists | Add future Dashboard owner standard. |
| GAP-006 | `ADD` | Customer mobile and desktop/tablet generation | Delivery targets/variants exist; generation rules and output ownership do not | Add future generation governance only. |
| GAP-007 | `ADD` | Installer and service/support dashboard generation | Required views/readiness exist; generator inputs/outputs do not | Add future Installer/Service owner contract. |
| GAP-008 | `ADD` | Automation and notification generation governance | Automation/Notification owners exist; no generator interface or authority handoff exists | Add cross-owner interface; generated behavior remains prohibited until authorized. |
| GAP-009 | `REVISE` | Broken/missing reference validation | Current commissioning, extraction, and responsive standards require validation; no universal machine-check contract | Revise owners to define checks before any KAOS implementation. |
| GAP-010 | `REVISE` | Dependency validation | Bootstrap governs packages/resources; no versioned dependency manifest/compatibility contract | Revise Installer/Dashboard owners. |
| GAP-011 | `ADD` | Deployment manifest | No approved generated-dashboard deployment manifest is identified | Add future owner contract including source/version/routes/resources/bindings/evidence. |
| GAP-012 | `REVISE` | Backup/rollback requirement | Backup milestones and restore-readiness are established, but atomic generator rollback and pre/post state proof are not | Extend Installer/Backup owners before generation. |
| GAP-013 | `REVISE` | Post-deployment acceptance | Commissioning, responsive screenshots, notification validation, and signoff exist, but no generated-output acceptance bundle is defined | Extend current acceptance owners. |
| GAP-014 | `ESTABLISHED` | Customer handoff/support baseline | INSTALL009 and INSTALL010 define handoff, training, service, and remote-support baseline | Reuse current owners. |
| GAP-015 | `UNKNOWN` | KAOS execution boundary, module architecture, storage, serializer, deployment mechanism, and approval workflow | Not established by this task’s authorized evidence | Remain deferred; DASH-GOV-001 does not design or implement KAOS. |

## 26. Proposed Final Ownership Structure

**Section classification:** `ESTABLISHED`

| Ownership ID | Classification | Capability | Recommended owner | Boundary |
| --- | --- | --- | --- | --- |
| OWN-001 | `ESTABLISHED` | Dashboard classes, cross-audience architecture, readiness relationship | `INSTALL006` under Dashboard / Interactive Experience System | Does not own commissioning, notification routing, automation behavior, or KAOS. |
| OWN-002 | `ESTABLISHED` | Customer philosophy, semantics, action hierarchy, accessibility, branding | Customer philosophy and `DESIGN001` | Does not own HA theme implementation or installer/service behavior. |
| OWN-003 | `ESTABLISHED` | Responsive variants, assignment, device targets, screenshot acceptance | `DASHBOARD001` | Does not own customer severity semantics or service policy. |
| OWN-004 | `ESTABLISHED` | HA theme readiness | `INSTALL007` | Presentation constraints only; no duplicate dashboards or permissions. |
| OWN-005 | `ESTABLISHED` | Commissioning and acceptance evidence | `INSTALL008` | Validates dashboard readiness; does not own dashboard architecture. |
| OWN-006 | `ESTABLISHED` | Customer handoff and training | `INSTALL009` | Owns handoff content, not dashboard implementation. |
| OWN-007 | `ESTABLISHED` | Service dashboard and remote-support posture | `INSTALL010` | Owns support policy/readiness, not continuous service or runtime access. |
| OWN-008 | `ESTABLISHED` | Automation behavior and overrides | `AUTOMATION001` | Dashboard exposes only approved controls. |
| OWN-009 | `ESTABLISHED` | Notification events, priorities, routing, actions/destinations, validation | Notification Engine | Dashboard owns destinations/views, not routing policy. |
| OWN-010 | `ESTABLISHED` | Sanitized backup extraction and freshness manifest | HA-BACKUP001 | Raw backup and live HA remain outside ordinary generator inputs. |
| OWN-011 | `BKLF REFERENCE` | BKLF implementation and sanitized evidence | BKLF specs, registers, inventory, checklists, YAML | Customer-specific; not universal governance. |
| OWN-012 | `ESTABLISHED` | Consolidated reconciliation, lineage, conflict/gap view | This master | Analysis owner only; no functional-owner transfer. |
| OWN-013 | `UNKNOWN` | Future KAOS Dashboard Creation/Management implementation | Future operator-approved KAOS work order and module owner | KAOS may consume approved governance but must not become the source of HA dashboard policy by inference. |

## 27. Deferred Decisions

**Section classification:** `UNKNOWN`

| Decision ID | Classification | Deferred decision | Required authority before action |
| --- | --- | --- | --- |
| DEF-001 | `CONFLICT` | Canonical customer severity vocabulary and crosswalk to installer/service/visibility statuses | Operator decision plus bounded owner revisions for CON-001. |
| DEF-002 | `UNKNOWN` | Exact role/permission model and dashboard assignment record | Future access/responsive governance task. |
| DEF-003 | `UNKNOWN` | Semantic destination identifier scheme for notifications and dashboards | Joint Notification/Dashboard governance task. |
| DEF-004 | `UNKNOWN` | Universal property model, normalization vocabulary, template format, and parameter contract | Future Dashboard/Installer governance task. |
| DEF-005 | `UNKNOWN` | Generator implementation, KAOS module boundary, storage, serializer, and deployment mechanism | Separate operator-approved KAOS architecture and implementation work. |
| DEF-006 | `UNKNOWN` | Dependency version policy and supported custom-card compatibility matrix | Future Bootstrap/Installer/Dashboard governance task. |
| DEF-007 | `UNKNOWN` | Atomic deployment, rollback, generated-output manifest, and acceptance-bundle format | Future Backup/Installer/Dashboard governance task. |
| DEF-008 | `BKLF REFERENCE` | BKLF mobile header, severity treatment, camera prominence, activity formatting, and expanded-layout refinements | Separate BKLF-specific bounded implementation tasks and manual visual approval. |

No deferred decision is executable from this document. Existing functional owners and implementation behavior remain unchanged until separately authorized.
