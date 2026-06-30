# INSTALL002 - Bench Build Checklist - REV01

Status: Active checklist standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL002
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

This checklist provides a repeatable bench procedure for preparing a WNYHS Home Assistant controller before field installation.

It operationalizes `INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md` by turning the installer platform phase model into a reviewable bench build record. It does not create Home Assistant configuration files, dashboards, automations, scripts, customer-specific install documents, customer hardware records, purchasing records, or onsite procedures.

The checklist may be used for the near-term funeral home pilot as a bench readiness tool, but this document does not define funeral-home-specific install steps, customer-specific dashboard contents, customer-specific automation logic, or onsite commissioning steps.

## 2. Checklist Field Standard

Each bench checklist section uses the same fields:

| Field | Required use |
| --- | --- |
| Task | Specific bench action or verification item. |
| Required yes/no | Whether the task is required for this bench build. |
| Owner | Person or role accountable for completion. |
| Status | Not started, in progress, complete, blocked, or deferred. |
| Notes / exception | Evidence, decisions, unresolved questions, or deferred-item reason. |

## 3. Bench Build Phases

### 3.1 Job Intake Readiness

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Confirm the job has an approved bench-build trigger before controller work begins. | Yes | Operator | Not started |  |
| Confirm property name, customer name placeholder, and property label placeholder are available for internal bench labels. | Yes | Operator | Not started |  |
| Confirm the quoted or planned system scope is available for bench reference. | Yes | Operator | Not started |  |
| Identify known site constraints that may affect bench assumptions. | Yes | Operator | Not started |  |
| Record any missing intake information before device pairing begins. | Yes | Operator | Not started |  |

### 3.2 Hardware Inventory

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Create the hardware inventory for all controller, network, power, hub, sensor, control, and accessory items staged for the job. | Yes | Bench owner | Not started |  |
| Record model, quantity, serial number when available, and physical label status. | Yes | Bench owner | Not started |  |
| Confirm required cables, mounts, batteries, adapters, and install consumables are present. | Yes | Bench owner | Not started |  |
| Separate customer-ready hardware from spare, test, or replacement hardware. | Yes | Bench owner | Not started |  |
| Record damaged, missing, substituted, or deferred hardware as an exception. | Yes | Bench owner | Not started |  |

### 3.3 Controller Readiness

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Confirm the Home Assistant controller powers on and reaches the expected local setup state. | Yes | Bench owner | Not started |  |
| Confirm controller identity label is applied or ready to apply. | Yes | Bench owner | Not started |  |
| Confirm administrative access path is available for bench work. | Yes | Bench owner | Not started |  |
| Confirm update posture is recorded before customer-specific work begins. | Yes | Bench owner | Not started |  |
| Record controller readiness blockers as exceptions before device adoption. | Yes | Bench owner | Not started |  |

### 3.4 Network Readiness

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Confirm bench network access is available for controller preparation. | Yes | Bench owner | Not started |  |
| Record expected onsite network assumptions without storing secrets in this checklist. | Yes | Operator | Not started |  |
| Confirm any required local hubs, bridges, or radios are physically present. | Yes | Bench owner | Not started |  |
| Confirm remote-access assumptions are listed as prerequisites, not completed facts. | Yes | Operator | Not started |  |
| Record network-dependent items that must be verified onsite. | Yes | Bench owner | Not started |  |

### 3.5 Area/Room Planning

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Create an area/room map from the quote, floorplan, photos, or operator notes. | Yes | Operator | Not started |  |
| Identify exterior, entry, utility, equipment, and shared areas separately when relevant. | Yes | Operator | Not started |  |
| Confirm customer-visible room names are clear and plain-language. | Yes | Operator | Not started |  |
| Mark uncertain areas for onsite confirmation. | Yes | Operator | Not started |  |
| Preserve the area/room map as a bench output artifact. | Yes | Bench owner | Not started |  |

### 3.6 Device Naming Plan

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Create the device naming sheet before or during device pairing. | Yes | Bench owner | Not started |  |
| Assign names that map each device to area, function, and service role. | Yes | Bench owner | Not started |  |
| Avoid final names based only on vendor defaults, pairing order, or installer initials. | Yes | Bench owner | Not started |  |
| Mark names that require onsite confirmation. | Yes | Bench owner | Not started |  |
| Preserve the final or provisional Device naming sheet as a bench output artifact. | Yes | Bench owner | Not started |  |

### 3.7 Device Pairing/Adoption

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Pair or adopt each planned bench device to the controller or appropriate hub when bench pairing is authorized. | Yes | Bench owner | Not started |  |
| Confirm each adopted device maps to the hardware inventory and device naming sheet. | Yes | Bench owner | Not started |  |
| Record device pairing/adoption order when it helps troubleshooting. | No | Bench owner | Not started |  |
| Flag devices that cannot be paired on the bench and must be handled onsite. | Yes | Bench owner | Not started |  |
| Record replacement, reset, or re-pair needs as exceptions. | Yes | Bench owner | Not started |  |

### 3.8 Entity Cleanup

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Review created entities after device adoption. | Yes | Bench owner | Not started |  |
| Rename entities that are safe to normalize under the current naming plan. | Yes | Bench owner | Not started |  |
| Identify duplicate, disabled, noisy, or vendor-default entities for review. | Yes | Bench owner | Not started |  |
| Record entity cleanup decisions without deleting unclear entities silently. | Yes | Bench owner | Not started |  |
| Preserve entity review notes as a bench output artifact. | Yes | Bench owner | Not started |  |

### 3.9 Dashboard Preparation

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Record Customer Dashboard placeholder readiness. | Yes | Bench owner | Not started |  |
| Record Installer Dashboard placeholder readiness. | Yes | Bench owner | Not started |  |
| Record Service Dashboard placeholder readiness. | Yes | Bench owner | Not started |  |
| Add light/dark readiness notes for future dashboard standards. | Yes | Bench owner | Not started |  |
| Record customer name/property label placeholder for future dashboard personalization. | Yes | Operator | Not started |  |
| Record dashboard readiness notes without implementing dashboard cards, views, permissions, themes, or navigation. | Yes | Bench owner | Not started |  |

### 3.10 Automation Preparation

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Identify planned automation candidates from the job scope. | Yes | Operator | Not started |  |
| Confirm whether each candidate is bench-testable, onsite-only, or deferred. | Yes | Bench owner | Not started |  |
| Record required entities, devices, areas, and customer decisions needed before automation build. | Yes | Bench owner | Not started |  |
| Record automation readiness notes without implementing automations, scripts, scenes, helpers, or blueprints. | Yes | Bench owner | Not started |  |
| Flag automations requiring future standard review. | Yes | Bench owner | Not started |  |

### 3.11 Backup Creation

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Create a backup after the approved bench state is reached. | Yes | Bench owner | Not started |  |
| Record backup name, date, controller identity, and storage location reference without exposing secrets. | Yes | Bench owner | Not started |  |
| Confirm whether the backup is baseline, customer-specific, or pre-install. | Yes | Bench owner | Not started |  |
| Record restore-readiness notes or unresolved backup risks. | Yes | Bench owner | Not started |  |
| Preserve the backup record as a bench output artifact. | Yes | Bench owner | Not started |  |

### 3.12 Bench Validation

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Confirm controller access, device list, area/room map, device naming sheet, and entity review notes are internally consistent. | Yes | Bench owner | Not started |  |
| Confirm dashboard readiness notes exist for Customer, Installer, and Service Dashboard placeholders. | Yes | Bench owner | Not started |  |
| Confirm automation readiness notes exist and no automation implementation is implied by this checklist. | Yes | Bench owner | Not started |  |
| Confirm backup record exists before hardware leaves the bench. | Yes | Bench owner | Not started |  |
| Record validation blockers and deferred items in the exception log. | Yes | Bench owner | Not started |  |

### 3.13 Install Kit Staging

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Stage controller, paired devices, spare hardware, mounts, cables, batteries, labels, and tools for installer handoff. | Yes | Bench owner | Not started |  |
| Match staged hardware to the hardware inventory. | Yes | Bench owner | Not started |  |
| Attach or include device naming references needed for onsite placement. | Yes | Bench owner | Not started |  |
| Include area/room map and onsite confirmation notes. | Yes | Bench owner | Not started |  |
| Record missing or separately shipped items as exceptions. | Yes | Bench owner | Not started |  |

### 3.14 Exceptions/Deferred Items

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Maintain an exception log for unresolved, deferred, substituted, or onsite-only items. | Yes | Bench owner | Not started |  |
| Assign an owner to each exception. | Yes | Bench owner | Not started |  |
| Mark whether each exception blocks bench completion, blocks onsite installation, or can be handled during commissioning. | Yes | Bench owner | Not started |  |
| Confirm no exception is hidden in personal notes outside the bench outputs. | Yes | Bench owner | Not started |  |
| Review the exception log before installer handoff. | Yes | Operator | Not started |  |

### 3.15 Handoff To Installer

| Task | Required yes/no | Owner | Status | Notes / exception |
| --- | --- | --- | --- | --- |
| Prepare installer packet checklist for the job. | Yes | Operator | Not started |  |
| Include hardware inventory, device naming sheet, area/room map, entity review notes, dashboard readiness notes, automation readiness notes, backup record, and exception log. | Yes | Operator | Not started |  |
| Identify onsite verification items separately from completed bench items. | Yes | Operator | Not started |  |
| Confirm installer has a clear escalation path for bench exceptions. | Yes | Operator | Not started |  |
| Record handoff date, owner, and installer acknowledgement. | Yes | Operator | Not started |  |

## 4. Required Bench Output Artifacts

Each bench build should produce or update these artifacts before installer handoff:

- hardware inventory
- device naming sheet
- area/room map
- entity review notes
- dashboard readiness notes
- automation readiness notes
- backup record
- installer packet checklist
- exception log

## 5. Future Follow-Up Planning Notes

The following future tasks are planning notes only and are not activated by this checklist:

- INSTALL003 - Golden Home Assistant Build Standard
- INSTALL004 - Device Naming Standard
- INSTALL005 - Entity and Area Standards
- INSTALL006 - Dashboard Architecture Standard
- INSTALL008 - Bench Testing and Commissioning Checklist

## 6. Protected-System Boundaries

INSTALL002 is documentation and checklist governance only.

It does not authorize:

- Source, route, UI, CSS, public asset, or runtime changes.
- Home Assistant configuration implementation.
- Dashboard implementation.
- Automation, script, scene, helper, or blueprint implementation.
- Customer-specific install documentation.
- Hardware purchasing, inventory automation, or ordering automation.
- HubSpot schema, properties, pipeline, workflow, or write-path changes.
- Stripe/payment verification or checkout changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.

Future implementation or installer-operation tasks must identify their own target files, validation, protected-system review, and rollback posture before work begins.
