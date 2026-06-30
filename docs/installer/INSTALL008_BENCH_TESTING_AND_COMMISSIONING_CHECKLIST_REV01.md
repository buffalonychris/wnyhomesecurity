# INSTALL008 - Bench Testing and Commissioning Checklist - REV01

Status: Active checklist standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL008
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

Bench testing and commissioning confirm that the prepared WNYHS Home Assistant system is ready for field install, customer use, support, warranty, and future service.

This checklist is the internal validation gate after bench build preparation and before customer handoff. It verifies that the controller, hardware, devices, entities, areas, dashboards, automation readiness, local control posture, remote support readiness, backups, customer training readiness, signoff readiness, and exceptions have been reviewed before the job is closed.

This document does not create Home Assistant configuration files, dashboard YAML, Lovelace cards, themes, automations, scripts, customer-specific install docs, customer records, HubSpot fields, APIs, portal screens, runtime changes, or actual checklist instances.

## 2. Scope

This checklist covers:

- bench validation
- onsite commissioning
- device testing
- entity and area review
- dashboard readiness
- theme-readiness check
- automation readiness
- local control validation
- remote support readiness
- backup validation
- customer handoff readiness
- exception handling

Out of scope:

- Home Assistant configuration implementation
- dashboard YAML or Lovelace implementation
- Home Assistant theme files or theme YAML
- automations, scripts, scenes, helpers, or blueprints
- customer-specific install records or checklist instances
- actual customer data
- HubSpot schema, property, object, workflow, or write-path changes
- API, portal, source, route, UI, CSS, public asset, runtime, dependency, package-lock, Cloudflare, Stripe/payment, scheduling, Resend/email, or environment changes

## 3. Checklist Format

Each checklist section must use these fields:

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Specific validation action. | Whether the item is required for this job scope. | Accountable person or role. | Current status category from Section 6. | Evidence reference from Section 5. | Exception, deferral, customer confirmation need, or next action. |

The checklist must not store passwords, tokens, recovery codes, private URLs, customer network credential values, or other secrets.

## 4. Bench Testing Checklist

### 4.1 Job Packet Readiness

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm job packet exists and matches the approved scope for bench testing. | Yes | Operator | Not started | Installer observation |  |
| Confirm hardware inventory, device naming sheet, area/entity review notes, dashboard readiness notes, automation readiness notes, backup record, and exception log are present or marked not applicable. | Yes | Bench owner | Not started | Installer observation |  |
| Confirm onsite-only assumptions are listed separately from completed bench facts. | Yes | Bench owner | Not started | Support note |  |

### 4.2 Hardware Inventory Verification

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Verify staged controller, hubs, radios, sensors, cameras, doorbells, locks, plugs, switches, batteries, mounts, cables, and accessories against the hardware inventory. | Yes | Bench owner | Not started | Installer observation |  |
| Confirm serialized or labeled hardware maps back to the inventory and device naming sheet when applicable. | Yes | Bench owner | Not started | Photo reference, if appropriate |  |
| Record missing, substituted, damaged, or deferred hardware as exceptions. | Yes | Bench owner | Not started | Exception note |  |

### 4.3 Controller Readiness

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm the Home Assistant controller powers on and reaches the expected local access state. | Yes | Bench owner | Not started | HA entity state check |  |
| Confirm controller identity, update posture, and Golden Build reference are recorded without secrets. | Yes | Bench owner | Not started | Support note |  |
| Confirm unresolved controller access or update blockers are logged before field install. | Yes | Bench owner | Not started | Exception note |  |

### 4.4 Golden Build Baseline Check

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm the controller started from the approved Golden Build posture or a documented approved exception. | Yes | Bench owner | Not started | Installer observation |  |
| Confirm reusable baseline configuration remains separate from customer-specific configuration. | Yes | Bench owner | Not started | Support note |  |
| Confirm Golden baseline backup/reference and customer-specific backup/reference are not confused. | Yes | Bench owner | Not started | Backup filename/reference |  |

### 4.5 Network Bench Readiness

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm bench network access is sufficient for controller and device validation. | Yes | Bench owner | Not started | Installer observation |  |
| Confirm onsite network assumptions are marked for onsite validation and do not include credential values. | Yes | Operator | Not started | Support note |  |
| Confirm network-dependent devices or integrations are marked bench-passed, onsite-only, deferred, or not applicable. | Yes | Bench owner | Not started | Device test result |  |

### 4.6 Remote Support/Tailscale Readiness

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm remote support readiness posture is recorded as conditional on authorization and technical availability. | Yes | Operator | Not started | Support note |  |
| Confirm Tailscale or equivalent support-readiness status is recorded without keys, tokens, private URLs, or credentials. | No | Bench owner | Not applicable | Support note |  |
| Log remote support blockers or customer authorization needs before onsite commissioning. | Yes | Operator | Not started | Exception note |  |

### 4.7 Device Pairing/Adoption Verification

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm each bench-paired/adopted device appears in the controller or relevant hub. | Yes | Bench owner | Not started | Device test result |  |
| Confirm paired devices map to the hardware inventory and device naming sheet. | Yes | Bench owner | Not started | HA entity state check |  |
| Flag devices that require onsite pairing, replacement, reset, or deferred handling. | Yes | Bench owner | Not started | Exception note |  |

### 4.8 Device Naming Verification

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm physical device names follow `INSTALL004_DEVICE_NAMING_STANDARD_REV01.md`. | Yes | Bench owner | Not started | Installer observation |  |
| Confirm provisional names are marked for onsite confirmation. | Yes | Bench owner | Not started | Support note |  |
| Confirm customer-visible device names are plain-language and free of secrets or internal-only codes. | Yes | Bench owner | Not started | Installer observation |  |

### 4.9 Area/Entity Cleanup Verification

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm areas, rooms, zones, device-to-area assignments, and entities align with `INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md`. | Yes | Bench owner | Not started | HA entity state check |  |
| Confirm primary dashboard-ready and automation-ready entities are identified. | Yes | Bench owner | Not started | HA entity state check |  |
| Confirm unclear, duplicate, noisy, hidden, disabled, or do-not-touch entities are documented instead of silently removed. | Yes | Bench owner | Not started | Support note |  |

### 4.10 Dashboard Placeholder/Readiness Verification

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm Customer Dashboard readiness is recorded for approved scope. | Yes | Bench owner | Not started | Dashboard screenshot reference |  |
| Confirm Installer Dashboard readiness is recorded for setup and commissioning review. | Yes | Bench owner | Not started | Dashboard screenshot reference |  |
| Confirm Service Dashboard readiness is recorded for future support review. | Yes | Bench owner | Not started | Dashboard screenshot reference |  |
| Confirm dashboard notes do not imply implementation of dashboard YAML, Lovelace cards, themes, or customer-specific dashboards in this task. | Yes | Bench owner | Not started | Support note |  |

### 4.11 Dashboard Theme-Readiness Verification

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm dashboard readiness notes include theme-readiness review against `INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`. | Yes | Bench owner | Not started | Dashboard screenshot reference |  |
| Confirm status meaning is not color-only in planned customer, installer, or service views. | Yes | Bench owner | Not started | Installer observation |  |
| Confirm light, dark, and high-contrast concerns are documented as readiness notes or exceptions. | Yes | Bench owner | Not started | Support note |  |

### 4.12 Automation Readiness Review

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm automation candidates are listed as bench-testable, onsite-only, deferred, or not applicable. | Yes | Bench owner | Not started | Support note |  |
| Confirm required devices, entities, areas, modes, and customer decisions are identified for each candidate. | Yes | Bench owner | Not started | HA entity state check |  |
| Confirm automation readiness notes do not implement automations, scripts, scenes, helpers, or blueprints. | Yes | Bench owner | Not started | Support note |  |

### 4.13 Local Control/Offline Posture Check

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm sold local-control features operate locally where supported by approved hardware and configuration. | Yes | Bench owner | Not started | Device test result |  |
| Confirm internet-dependent features are identified and not described as local-only. | Yes | Bench owner | Not started | Support note |  |
| Confirm offline posture gaps are logged before field install. | Yes | Bench owner | Not started | Exception note |  |

### 4.14 Backup Creation and Restore-Readiness Check

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm a post-bench customer-specific backup is created or a documented blocker exists. | Yes | Bench owner | Not started | Backup filename/reference |  |
| Confirm backup record includes role, controller reference, date, and storage location reference without secrets. | Yes | Bench owner | Not started | Backup filename/reference |  |
| Confirm restore-readiness notes distinguish expectation from proven restore evidence. | Yes | Bench owner | Not started | Support note |  |

### 4.15 Exception Log Review

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Review all bench exceptions before hardware leaves the bench. | Yes | Operator | Not started | Exception note |  |
| Confirm each exception has severity, owner, next action, due date, and handoff-blocking status. | Yes | Operator | Not started | Exception note |  |
| Confirm customer-visible exceptions are identified for future handoff/signoff handling. | Yes | Operator | Not started | Support note |  |

### 4.16 Install Kit Staging

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm controller, staged hardware, labels, mounts, batteries, cables, tools, and reference sheets are ready for onsite work. | Yes | Bench owner | Not started | Photo reference, if appropriate |  |
| Confirm install kit contents match the job packet and hardware inventory. | Yes | Bench owner | Not started | Installer observation |  |
| Confirm onsite validation items are separated from completed bench validation. | Yes | Bench owner | Not started | Support note |  |

## 5. Onsite Commissioning Checklist

### 5.1 Arrival / Job Scope Confirmation

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm site arrival and review approved job scope before physical installation. | Yes | Installer | Not started | Installer observation |  |
| Confirm any customer-requested scope change is routed to operator decision before work expands. | Yes | Installer | Not started | Customer confirmation |  |
| Confirm unsafe or inaccessible work areas are logged before proceeding. | Yes | Installer | Not started | Exception note |  |

### 5.2 Hardware Placement Confirmation

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm each planned device placement against onsite conditions. | Yes | Installer | Not started | Installer observation |  |
| Confirm provisional bench names are updated or confirmed after actual placement is known. | Yes | Installer | Not started | Device test result |  |
| Record moved, omitted, substituted, or deferred placements as exceptions. | Yes | Installer | Not started | Photo reference, if appropriate |  |

### 5.3 Network/Site Connectivity Check

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm site network connectivity needed for approved system functions. | Yes | Installer | Not started | Installer observation |  |
| Confirm no credential values are stored in the checklist. | Yes | Installer | Not started | Support note |  |
| Record network blockers, customer decisions, or operator decisions needed before closeout. | Yes | Installer | Not started | Exception note |  |

### 5.4 Controller Power/Network Check

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm controller power is stable in the final location. | Yes | Installer | Not started | Installer observation |  |
| Confirm controller reaches the expected local access state onsite. | Yes | Installer | Not started | HA entity state check |  |
| Confirm controller placement, cables, and labeling support future service. | Yes | Installer | Not started | Photo reference, if appropriate |  |

### 5.5 Device Physical Install Verification

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm each installed device is physically mounted, powered, labeled when appropriate, and mapped to the job record. | Yes | Installer | Not started | Photo reference, if appropriate |  |
| Confirm installed device names, areas, and entities match actual onsite placement. | Yes | Installer | Not started | HA entity state check |  |
| Record any device that is not installed, not responding, or moved from planned placement. | Yes | Installer | Not started | Exception note |  |

### 5.6 Sensor Functional Testing

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Test each installed contact, motion, leak, environment, or other sensor in the approved scope. | Yes | Installer | Not started | Sensor trigger result |  |
| Confirm each tested sensor state appears correctly in Home Assistant. | Yes | Installer | Not started | HA entity state check |  |
| Record sensors that fail, are delayed, are noisy, or need customer confirmation. | Yes | Installer | Not started | Exception note |  |

### 5.7 Camera/Doorbell Functional Testing If Included

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm each included camera or doorbell reaches the expected view or event state. | No | Installer | Not applicable | Camera stream test |  |
| Confirm customer-visible labels and areas are plain-language and scope-accurate. | No | Installer | Not applicable | Dashboard screenshot reference |  |
| Record stream, placement, power, privacy, or connectivity issues as exceptions. | No | Installer | Not applicable | Exception note |  |

### 5.8 Lock/Access Functional Testing If Included

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm each included lock or access device reports expected state. | No | Installer | Not applicable | Lock test |  |
| Confirm local/manual operation remains available where applicable. | No | Installer | Not applicable | Installer observation |  |
| Record failed lock/access behavior, customer decision needs, or follow-up needs as exceptions. | No | Installer | Not applicable | Exception note |  |

### 5.9 Leak/Water/Environment Sensor Testing If Included

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm each included leak, water, temperature, humidity, freeze, or environment sensor reports expected state. | No | Installer | Not applicable | Leak sensor test |  |
| Confirm customer-visible labels describe the actual area or fixture. | No | Installer | Not applicable | HA entity state check |  |
| Record sensor placement limits, nuisance risks, or deferred testing as exceptions. | No | Installer | Not applicable | Exception note |  |

### 5.10 Lighting/Plug/Switch Testing If Included

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm each included plug, switch, dimmer, or lighting control reports and responds as expected. | No | Installer | Not applicable | Device test result |  |
| Confirm controlled load naming matches actual customer use. | No | Installer | Not applicable | Customer confirmation |  |
| Record failed controls, unclear load names, or deferred controls as exceptions. | No | Installer | Not applicable | Exception note |  |

### 5.11 Dashboard Customer-View Check

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm customer-visible dashboard views show approved features, names, areas, and status without setup noise. | Yes | Installer | Not started | Dashboard screenshot reference |  |
| Confirm daily-use controls are readable and usable on the intended customer device class. | Yes | Installer | Not started | Customer confirmation |  |
| Confirm customer-view content avoids unsupported service promises and secrets. | Yes | Installer | Not started | Installer observation |  |

### 5.12 Installer/Service Dashboard Check

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm installer dashboard can support final onsite validation. | Yes | Installer | Not started | Dashboard screenshot reference |  |
| Confirm service dashboard readiness notes capture offline devices, low batteries, failed tests, backup status, and follow-up items where applicable. | Yes | Installer | Not started | Support note |  |
| Confirm internal dashboards are not treated as the customer daily-use surface. | Yes | Installer | Not started | Installer observation |  |

### 5.13 Local Control Validation

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm sold local-control features operate locally after onsite placement. | Yes | Installer | Not started | Device test result |  |
| Confirm internet-dependent features are explained as internet-dependent before handoff. | Yes | Installer | Not started | Customer confirmation |  |
| Record any local-control gap for a sold feature as a blocker or operator-decision exception. | Yes | Installer | Not started | Exception note |  |

### 5.14 Remote Access/Support Validation

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm remote support readiness is validated only when authorized and technically available. | No | Installer | Not applicable | Support note |  |
| Confirm support access notes avoid secrets, keys, tokens, credential values, and private URLs. | Yes | Installer | Not started | Support note |  |
| Record remote support blockers or customer authorization gaps as exceptions. | Yes | Installer | Not started | Exception note |  |

### 5.15 Backup After Onsite Changes

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Create or confirm a post-commissioning backup after onsite changes are complete. | Yes | Installer | Not started | Backup filename/reference |  |
| Record backup role, date, controller reference, and storage location reference without secrets. | Yes | Installer | Not started | Backup filename/reference |  |
| Mark missing post-commissioning backup as a critical blocker unless operator approves a documented exception. | Yes | Installer | Not started | Exception note |  |

### 5.16 Customer Training Readiness

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm customer-ready daily-use functions and known limits are ready for handoff discussion. | Yes | Installer | Not started | Customer confirmation |  |
| Confirm customer-facing dashboard orientation can be completed without exposing internal setup details. | Yes | Installer | Not started | Customer confirmation |  |
| Record training gaps, customer questions, or follow-up needs for INSTALL009 handoff planning. | Yes | Installer | Not started | Support note |  |

### 5.17 Customer Signoff Readiness

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm required customer signoff items are ready for future INSTALL009 handling. | Yes | Installer | Not started | Customer confirmation |  |
| Confirm all customer-visible exceptions are documented before signoff. | Yes | Installer | Not started | Exception note |  |
| Confirm unresolved signoff blockers are escalated to the operator. | Yes | Installer | Not started | Support note |  |

### 5.18 Exceptions/Deferred Items

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Review all onsite exceptions and deferred items before closeout. | Yes | Installer | Not started | Exception note |  |
| Confirm each exception has severity, customer-visible status, handoff-blocking status, owner, next action, due date, and resolution notes. | Yes | Installer | Not started | Exception note |  |
| Confirm blocked or failed items are not hidden in informal notes. | Yes | Installer | Not started | Support note |  |

### 5.19 Closeout Readiness

| Task | Required yes/no | Owner | Status | Evidence / proof | Notes / exception |
| --- | --- | --- | --- | --- | --- |
| Confirm controller, sold core devices, customer dashboard, local control, post-commissioning backup, and signoff readiness are complete or documented exceptions exist. | Yes | Operator | Not started | Installer observation |  |
| Confirm no critical blocker remains unresolved before customer handoff. | Yes | Operator | Not started | Exception note |  |
| Confirm closeout packet can proceed to future customer handoff package workflow. | Yes | Operator | Not started | Support note |  |

## 6. Evidence / Proof Standards

Acceptable evidence types:

- installer observation
- customer confirmation
- dashboard screenshot reference
- device test result
- sensor trigger result
- camera stream test
- lock test
- leak sensor test
- HA entity state check
- backup filename/reference
- exception note
- photo reference, if appropriate
- support note

This task does not create actual screenshots, photos, customer records, backup files, support records, or checklist instances. Evidence references belong in separately authorized job records or operational artifacts.

## 7. Commissioning Status Categories

Commissioning status values:

| Status | Use |
| --- | --- |
| Not started | Item has not begun. |
| In progress | Item is being worked. |
| Passed | Item was validated successfully. |
| Failed | Item did not pass and needs action. |
| Deferred | Item is intentionally delayed with owner and due date. |
| Blocked | Item cannot proceed without dependency, decision, repair, access, or customer action. |
| Not applicable | Item does not apply to the approved job scope. |
| Needs customer confirmation | Customer decision, confirmation, or acknowledgement is required. |
| Needs service follow-up | Item can move to a service follow-up path if handoff is otherwise approved. |

## 8. Critical Blockers

These blockers prevent customer handoff unless the operator approves a documented exception:

- controller unavailable
- primary dashboard inaccessible
- local control unavailable for sold feature
- sold core device not responding
- critical sensor failed
- payment/scope issue requiring operator decision
- unsupported claim/service expectation discovered
- missing customer signoff
- unresolved unsafe install condition
- missing backup after onsite configuration

Critical blockers must be recorded in the exception log with owner, next action, due date, and resolution notes.

## 9. Exception Handling

Each exception must use these fields:

| Field | Required use |
| --- | --- |
| Exception ID | Stable identifier for the exception. |
| Related device/entity/area/dashboard | Affected hardware, entity, area, dashboard, backup, support item, or job phase. |
| Severity | Critical, high, medium, low, or informational. |
| Customer-visible yes/no | Whether the customer sees or needs to understand the exception. |
| Blocks handoff yes/no | Whether customer handoff is blocked. |
| Owner | Person or role responsible for next action. |
| Required next action | Specific required action, decision, replacement, test, or follow-up. |
| Due date | Date or event by which the next action is expected. |
| Resolution notes | Outcome, decision, deferral reason, or closeout note. |

Exceptions should distinguish:

- bench-only blockers
- onsite-only blockers
- customer-visible issues
- internal service follow-up
- warranty or asset follow-up candidates
- operator decisions
- items that can be deferred without blocking handoff

## 10. Relationship to Shared Data Model

`INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md` defines a candidate record chain that this checklist may inform in future bounded implementation tasks:

- Bench Build
- Install Job
- Commissioning Record
- Customer Signoff
- Installed Asset Register
- Warranty Record
- Support Ticket / RMA

This checklist should produce planning outputs that could later map to those candidate records. It does not create HubSpot properties, HubSpot objects, portal records, APIs, runtime sync, customer records, or durable storage.

The candidate mapping is:

| Checklist output | Future candidate record relationship |
| --- | --- |
| Bench validation status and exceptions | Bench Build |
| Onsite install facts and field exceptions | Install Job |
| Passed, failed, deferred, blocked, and not-applicable commissioning items | Commissioning Record |
| Customer confirmation, training readiness, and signoff readiness | Customer Signoff |
| Installed controller, serialized hardware, labels, and final placement notes | Installed Asset Register |
| Backup, warranty start readiness, and service-related exception posture | Warranty Record |
| Deferred service follow-up, replacement, or RMA candidates | Support Ticket / RMA |

All record relationships are planning only until separately authorized.

## 11. Funeral Home Pilot Relevance

The funeral home pilot may use this checklist during bench and onsite validation.

This document does not create funeral-home-specific records, checklist instances, area names, entity names, dashboard contents, automations, support notes, customer signoff records, installed asset records, Home Assistant configuration, or handoff material. Pilot-specific artifacts require a separate bounded customer/job task.

## 12. Future Follow-Up Planning Notes

The following future tasks are planning notes only. They are not activated by this checklist:

- INSTALL009 - Customer Handoff Package
- INSTALL010 - Service Dashboard and Remote Support Standard
- HUBSPOT-INSTALL001 - HubSpot Installer Property/Object Model Spec
- PORTAL001 - Installer Portal Architecture
- ASSET001 - Installed Asset Register Standard
- WARRANTY001 - Warranty and Support Ticket Model

Recommended next task: INSTALL009 - Customer Handoff Package.

## 13. Protected-System Boundaries

INSTALL008 is documentation and checklist governance only.

It does not authorize:

- Source, route, UI, CSS, public asset, or runtime changes.
- Home Assistant configuration implementation.
- Dashboard YAML or Lovelace card implementation.
- Home Assistant theme files or theme YAML.
- Frontend assets or dashboard styling implementation.
- Automations, scripts, scenes, helpers, or blueprints.
- Customer-specific install documents or checklist instances.
- Actual customer records or customer data.
- Funeral-home-specific configuration, records, dashboards, automations, signoff, handoff, or asset records.
- HubSpot schema, properties, objects, pipeline, workflow, or write-path changes.
- Direct HubSpot writes or any bypass of `/api/lead-signal`.
- API, portal, database, durable storage, or runtime sync implementation.
- Stripe/payment verification, checkout, webhook, payment state, or payment sync changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.

Future implementation, installer-operation, customer handoff, support, warranty, asset, portal, HubSpot, or Home Assistant configuration tasks must identify their own target files, validation, protected-system review, and rollback posture before work begins.
