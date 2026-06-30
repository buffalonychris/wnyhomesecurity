# INSTALL003 - Golden Home Assistant Build Standard - REV01

Status: Active standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL003
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

The Golden Home Assistant Build is the reusable baseline controller state used before customer-specific customization.

This standard defines the WNYHS baseline controller preparation model for Home Assistant-based installs. It exists so bench work starts from a repeatable, recoverable, supportable controller posture before job-specific pairing, adoption, naming, dashboard binding, automation work, and customer handoff preparation begin.

This document does not create Home Assistant configuration files, dashboards, automations, scripts, backups, customer accounts, customer-specific install documents, or funeral-home-specific configuration.

## 2. What the Golden Build Is

The Golden Build is:

- a repeatable baseline for Home Assistant controller preparation
- a reusable starting state for WNYHS bench work
- a standard for what must be ready before customer-specific configuration begins
- a recovery reference for rebuilding the baseline controller posture
- a separation boundary between WNYHS baseline setup and customer/site-specific setup

The Golden Build is not:

- a customer configuration
- a backup of one customer's install
- a final dashboard package
- an automation library by itself
- a replacement for job intake, bench validation, commissioning, or customer handoff records
- a place to store secrets, customer credentials, or site-specific exceptions

## 3. Required Baseline Categories

### 3.1 Controller Identity

The Golden Build must define a controller identity posture that can be applied before a customer is assigned.

Baseline expectations:

- Use a non-customer-specific controller label or placeholder identity during Golden Build preparation.
- Record controller type, install media or OS channel, baseline date, and Golden Build revision reference.
- Avoid embedding customer name, property name, network name, account name, or site-specific location in the Golden baseline identity.
- Preserve enough controller identity information for later bench checklist and backup record correlation.

### 3.2 Admin/Operator Access Posture

The Golden Build must define the access posture needed for WNYHS bench preparation and later customer transfer planning.

Baseline expectations:

- Establish an operator/admin access model suitable for bench work.
- Keep access records outside public docs and outside this standard.
- Do not store passwords, recovery codes, tokens, or secrets in repository documentation.
- Distinguish bench/operator access from customer-owned accounts that may be created or transferred later.
- Record any unresolved access-transfer assumptions as bench exceptions, not as Golden Build facts.

### 3.3 Update Posture

The Golden Build must define how controller updates are handled before customer-specific work begins.

Baseline expectations:

- Record the Home Assistant core, supervisor, OS, and relevant integration update posture at the time the Golden baseline is prepared.
- Avoid starting customer-specific pairing or dashboard work while required baseline updates are unresolved.
- Treat optional or risky updates as operator decisions, not silent bench changes.
- Record known update blockers or deferred updates in bench notes.

### 3.4 Integration Readiness

The Golden Build may include a required integrations list and readiness checks, but it must not bind customer devices or customer accounts by itself.

Baseline expectations:

- Identify integrations expected for standard WNYHS Home Assistant installs.
- Confirm integration prerequisites are available or clearly marked for future job-specific setup.
- Keep integration readiness separate from customer credential entry, customer device adoption, and customer account linking.
- Document integration gaps as readiness exceptions for the bench checklist.

### 3.5 Network Assumptions

The Golden Build must define network assumptions without storing customer network details.

Baseline expectations:

- Assume a bench network for controller preparation.
- Record whether the controller expects wired Ethernet, local IP review, DNS availability, and internet access during setup.
- Treat onsite network names, passwords, router credentials, VLAN details, and customer internet constraints as customer-specific information.
- Mark onsite network dependencies for later validation rather than treating them as complete in the Golden baseline.

### 3.6 Remote Support Assumptions

The Golden Build may define support posture defaults, but remote access remains conditional on customer authorization and technical availability.

Baseline expectations:

- Document remote support as an assumption category, not a promise of continuous service.
- Separate service-review readiness from customer authorization, account ownership, and connectivity facts.
- Do not describe emergency response, third-party authority contact, or continuous staffed service.
- Record remote-access blockers or deferred decisions in bench/customer records, not in the Golden baseline.

### 3.7 Dashboard Placeholders

The Golden Build may include placeholder dashboard structure for future Customer, Installer, and Service Dashboard classes.

Baseline expectations:

- Use placeholders for dashboard audiences defined by `INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md`.
- Keep placeholders unbound to customer devices, customer rooms, customer names, and final card layouts.
- Avoid implementing final dashboards, permissions, navigation, or cards in this standard.
- Preserve dashboard placeholder notes for the bench checklist.

### 3.8 Area/Room Placeholder Model

The Golden Build must define an area/room placeholder model that supports future job-specific area assignment.

Baseline expectations:

- Use generic placeholders only where needed to support structure review.
- Do not create customer room names, site zones, floor labels, or final area assignments in the Golden baseline.
- Require customer-specific area/room mapping during bench build or onsite confirmation.
- Treat uncertain rooms, exterior areas, equipment areas, and shared areas as future area-standard topics.

### 3.9 Naming Placeholder Model

The Golden Build may define default naming structure, but final device and entity names are customer-specific.

Baseline expectations:

- Provide placeholder naming patterns that make later device and entity naming consistent.
- Avoid vendor-default names as final authority.
- Avoid customer names, property names, room names, and device placement names in the Golden baseline.
- Defer final device naming to `INSTALL004` and final entity/area naming to `INSTALL005`.

### 3.10 Backup Readiness

The Golden Build must be ready to produce or reference a baseline backup after the approved baseline state is reached.

Baseline expectations:

- Establish when the Golden baseline backup is expected to be created.
- Record backup name, date, Golden Build revision, controller identity reference, and storage location reference without exposing secrets.
- Keep the Golden baseline backup distinct from customer-specific backups.
- Treat missing backup evidence as a bench readiness blocker.

### 3.11 Recovery Readiness

The Golden Build must define recovery expectations, even when full restore testing is deferred to a later task.

Baseline expectations:

- Record what must be checked after restoring a Golden baseline backup.
- Confirm controller access, baseline integrations, placeholders, update posture, and backup record correlation after restore.
- Do not treat an untested backup as fully proven.
- Document restore testing as a future task rather than performing it in this standard.

### 3.12 Logging/Notes Posture

The Golden Build must define where baseline preparation notes belong.

Baseline expectations:

- Record baseline decisions, exceptions, update posture, integration readiness, backup references, and restore-readiness notes in the appropriate bench or internal operations artifact.
- Keep secrets, credentials, customer identifiers, and private network data out of repository docs.
- Avoid relying on installer memory as the only record of baseline state.
- Preserve notes in a way that supports later bench checklist review.

### 3.13 Security/Privacy Posture

The Golden Build must preserve security and privacy boundaries before customer-specific work begins.

Baseline expectations:

- Do not store secrets in this repository or in customer-facing docs.
- Do not include customer names, addresses, network credentials, account identifiers, or private device identifiers in the reusable baseline.
- Keep baseline service posture separate from customer authorization and account ownership.
- Treat any accidental customer data in a reusable baseline as a blocking exception that must be removed before reuse.

### 3.14 Customer-Specific Separation

The Golden Build must maintain a clear boundary between reusable baseline setup and customer-specific configuration.

Baseline expectations:

- Do not include customer-specific rooms, devices, accounts, dashboards, automations, network credentials, names, or exceptions in the Golden baseline.
- Move customer-specific facts into the bench checklist, customer install record, future handoff package, or site-specific exception log.
- Revalidate the boundary before creating the Golden baseline backup.

## 4. Golden vs Customer-Specific Boundary

### 4.1 Golden Baseline May Include

- default naming structure
- placeholder dashboards
- required integrations list
- installer/service dashboard placeholders
- backup procedure expectations
- support posture defaults
- validation checklist references
- controller identity placeholder posture
- update posture record expectations
- integration readiness expectations
- generic area/room placeholder model

### 4.2 Customer-Specific Configuration Includes

- customer names
- customer network credentials
- customer rooms/areas
- customer device names
- customer automations
- customer dashboards
- customer accounts
- site-specific exceptions
- property labels
- onsite network facts
- customer authorization decisions
- customer-specific backup records

Customer-specific configuration must not be folded back into the Golden baseline. If a customer install produces a useful repeatable pattern, it should become a future bounded standard or checklist update, not an unreviewed Golden baseline mutation.

## 5. Bench Build Relationship

`INSTALL003` defines the Golden baseline standard.

`INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md` verifies bench checklist execution for a specific controller or job.

The Golden baseline should be established before job-specific pairing/adoption begins. After the Golden baseline is ready, the bench checklist should verify customer-specific preparation steps such as hardware inventory, area/room planning, device naming, device pairing/adoption, entity cleanup, dashboard readiness notes, automation readiness notes, backup record creation, bench validation, install kit staging, exceptions, and installer handoff.

## 6. Backup and Restore Expectations

### 6.1 Golden Baseline Backup

A Golden baseline backup captures the approved reusable baseline controller state before customer-specific configuration begins.

Expected backup record fields:

- backup role: Golden baseline
- Golden Build revision
- controller identity reference
- creation date
- Home Assistant version posture reference
- storage location reference
- restore-readiness notes

The backup record must not include secrets or credential values.

### 6.2 Customer-Specific Backup

A customer-specific backup captures the state after customer-specific device adoption, naming, dashboard binding, automation work, and relevant bench or commissioning steps.

Customer-specific backups must be separate from the Golden baseline backup so a future restore does not confuse a reusable baseline with a completed customer install.

### 6.3 Backup Naming Pattern Concept

Future backup naming should use a consistent pattern that distinguishes:

- Golden baseline versus customer-specific backup
- Golden Build revision or customer/job reference
- controller identity reference
- date
- pre-install, post-bench, post-commissioning, or other lifecycle state

This standard defines the concept only. It does not create backup files, scripts, storage automation, or naming-enforcement tooling.

### 6.4 Restore Validation Requirement

Any restore from a Golden baseline or customer-specific backup must be validated before relying on the restored controller.

Restore validation should include:

- controller access
- baseline integration readiness
- placeholder/dashboard presence when applicable
- update posture
- backup record match
- absence of customer-specific data in a restored Golden baseline
- customer-specific device/entity/dashboard checks when restoring a customer-specific backup

Full restore testing is a future bounded task. Until that task exists, restore-readiness notes must distinguish expectation from proven restore evidence.

## 7. Theme Readiness

Golden Build dashboard placeholders should remain light/dark/theme-ready.

Theme readiness means placeholder dashboard structure should avoid decisions that would block future light, dark, or seasonal themes. It does not mean this task implements themes, theme switching, Home Assistant theme files, dashboard CSS, final card styles, icons, color palettes, or visual tokens.

Future dashboard and theme standards should define final visual behavior.

## 8. Funeral Home Pilot Relevance

The near-term funeral home pilot may use the Golden Build once this standard is defined.

This task does not create funeral-home-specific configuration, dashboards, automations, device names, customer rooms, customer accounts, onsite procedures, install documents, backups, or handoff materials. Funeral-home-specific work requires a separate bounded task.

## 9. Future Follow-Up Planning Notes

The following are planning notes only. They are not activated by this document:

- INSTALL004 - Device Naming Standard
- INSTALL005 - Entity and Area Standards
- INSTALL006 - Dashboard Architecture Standard
- INSTALL007 - Dashboard Theme Readiness Standard
- INSTALL008 - Bench Testing and Commissioning Checklist

Recommended next task: INSTALL004 - Device Naming Standard.

## 10. Protected-System Boundaries

INSTALL003 is documentation and installer-platform standard work only.

It does not authorize:

- Source, route, UI, CSS, public asset, or runtime changes.
- Home Assistant configuration implementation.
- Dashboard implementation.
- Automation, script, scene, helper, or blueprint implementation.
- Backup script creation or backup storage automation.
- Customer-specific install documentation.
- Funeral-home-specific configuration.
- Hardware purchasing, inventory automation, or ordering automation.
- HubSpot schema, properties, pipeline, workflow, or write-path changes.
- Stripe/payment verification or checkout changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.

Future implementation or installer-operation tasks must identify their own target files, validation, protected-system review, and rollback posture before work begins.
