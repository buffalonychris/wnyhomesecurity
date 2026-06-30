# INSTALL001 - Installer Platform Architecture - REV01

Status: Active architecture standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL001
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

The WNYHS Installer Platform turns each Home Assistant controller into a repeatable customer-ready appliance, not a one-off custom install.

The platform exists to make bench-built, preconfigured, tested, installed, supported, and handed-off customer systems predictable for WNYHS operators, installers, and customers. It is an operating model for future bounded work, not an implementation of Home Assistant configuration, dashboards, automations, backups, device standards, or customer install documents by itself.

## 2. Scope

This architecture covers the intended operating model for:

- Bench-building Home Assistant-based controllers before field installation.
- Preconfiguring devices, entities, areas, dashboards, automations, backups, and validation checklists.
- Installing and commissioning customer systems onsite.
- Preparing customer handoff materials.
- Maintaining a remote support and service posture after handoff.

This document does not authorize app source changes, routes, styles, public copy, runtime integrations, Home Assistant configuration files, customer dashboards, device purchases, inventory automation, ordering automation, HubSpot changes, Stripe/payment changes, scheduling changes, Resend/email changes, Cloudflare changes, dependencies, package-lock changes, secrets, or customer-specific install documents.

## 3. Platform Layers

The Installer Platform should be organized into repeatable layers. Each layer needs its own future bounded standard or checklist before production use.

### Golden Home Assistant Build

The Golden Home Assistant build is the baseline controller image and configuration pattern used before customer-specific customization. It should define the controller baseline, required integrations, update posture, recovery expectations, backup prerequisites, dashboard prerequisites, and the rules for separating reusable baseline configuration from customer-specific configuration.

The Golden build must remain recoverable. It should be possible to recreate the baseline controller state without relying on one installer's memory.

### Device Naming Standards

Device names should be assigned before or during bench adoption so every physical device maps cleanly to its customer location, function, and service role.

Device naming should support:

- Installer recognition during pairing and troubleshooting.
- Clear mapping to rooms, openings, zones, or equipment.
- Customer handoff references without exposing unnecessary internal codes.
- Future service review when a device is offline, low on battery, replaced, or moved.

### Entity Naming Standards

Entity names should be normalized after device adoption so Home Assistant entities are readable, stable, and supportable.

Entity naming should support:

- Dashboard cards.
- Automations.
- Service diagnostics.
- Backup/restore review.
- Future import/export or documentation tooling.

Entity names should not depend on temporary pairing names, vendor defaults, or installer initials as the final naming authority.

### Area/Room Standards

Areas and rooms should be defined before dashboards and automations are finalized. The area model should reflect the customer property, not only the order in which devices were paired.

Area standards should define:

- Room and area naming.
- Exterior, entry, utility, and equipment-area treatment.
- How multi-room zones are represented.
- How customer-visible names differ from installer/service names when needed.

### Dashboard Architecture

Dashboard architecture should separate customer daily use from installer setup and service review. Dashboard classes are defined in Section 4.

Dashboards should be assembled from standard patterns so future customer dashboards can be personalized without recreating the whole interface from scratch.

### Automation Library

The automation library should contain reusable Home Assistant-native automation patterns, scripts, scenes, helpers, and test-mode conventions that can be adapted to customer systems through future bounded standards.

The library should align with `AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`: Home Assistant-native behavior first, visual authoring candidates only after validation, and advanced orchestration as an exception path.

### Backup/Restore Model

Every customer-ready controller should have a defined backup and restore model before leaving the bench.

The model should define:

- Baseline/golden backup timing.
- Customer-specific backup timing.
- Backup naming.
- Storage location expectations.
- Restore-readiness checks.
- What must be revalidated after restore.

### Bench Testing Workflow

Bench testing verifies that the controller, adopted devices, entities, dashboards, automations, and backups are coherent before onsite work begins.

Bench testing should catch naming gaps, missing entities, device adoption issues, automation logic gaps, dashboard card gaps, and backup gaps before the installer is onsite.

### Installation Workflow

Installation workflow translates bench-prepared hardware and configuration into onsite placement, power/network readiness, device placement, signal quality validation, customer-specific naming corrections, and final commissioning.

The workflow should preserve the distinction between bench assumptions and onsite facts.

### Commissioning Checklist

Commissioning is the final internal acceptance gate before customer handoff.

The checklist should verify:

- Controller access.
- Device presence.
- Entity health.
- Area/room alignment.
- Dashboard usability.
- Automation tests.
- Backup status.
- Customer handoff readiness.
- Known exceptions or deferred items.

### Customer Handoff Package

The customer handoff package should give the customer enough information to use and recover the system without exposing internal-only implementation detail.

It should include daily-use dashboard orientation, customer-specific names, basic control expectations, support contact posture, known limitations, and any customer-owned account or network prerequisites.

### Remote Support/Service Posture

The platform should define how WNYHS reviews service state after handoff when remote access is authorized and technically available.

The posture should distinguish:

- Customer-owned system authority.
- WNYHS service visibility and support boundaries.
- Offline or degraded device review.
- Low-battery review.
- Failed automation review.
- Integration health review.
- Backup and update-status review.
- Escalation to onsite service when remote correction is not appropriate.

This posture is not a promise of emergency response, third-party authority contact, or continuous staffed service.

## 4. Dashboard Audiences

The Installer Platform defines three dashboard classes. Future standards should define exact card structure, naming, permissions, and validation.

### 4.1 Customer Dashboard

The Customer Dashboard is for daily use.

It should prioritize:

- Simple controls.
- Customer name and property personalization.
- Clear room or area organization.
- Light/dark-ready presentation.
- Status and control language that customers can understand without editing Home Assistant internals.
- Manual override paths for supported automations.

The Customer Dashboard should hide setup noise unless the customer needs it for normal operation.

### 4.2 Installer Dashboard

The Installer Dashboard is for setup, diagnostics, adoption, and validation.

It should prioritize:

- Device adoption.
- Zigbee/Z-Wave health.
- Entity validation.
- Area/room validation.
- Automation testing.
- Installer test modes.
- Missing or duplicate entity review.
- Controller/network readiness checks.

The Installer Dashboard should be available during bench work and onsite commissioning, but it should not be the customer's daily-use surface.

### 4.3 Service Dashboard

The Service Dashboard is for remote support and service review when access is authorized and available.

It should prioritize:

- Offline devices.
- Low batteries.
- Failed automations.
- Integration health.
- Backup/update status.
- Recent service-relevant state changes.
- Items that may require onsite follow-up.

The Service Dashboard should support efficient review without exposing unnecessary customer-private detail or encouraging unsupported claims.

## 5. Theme Readiness

Dashboards should be designed so light, dark, and seasonal themes can be added later by changing theme/token values, not rebuilding dashboards.

This theme readiness posture keeps dashboard structure separate from future visual theme values.

Future dashboard standards should separate layout, card purpose, entity binding, typography scale, status color meaning, and icon usage from the theme values that render them. This task does not implement themes, theme switching, seasonal designs, CSS, tokens, or Home Assistant theme files.

## 6. Hardware Bench Workflow

Future bench procedures should follow architecture-level phases:

1. Inventory hardware.
2. Assign device names.
3. Define rooms/areas.
4. Prepare HA Green / controller baseline.
5. Pair/adopt devices.
6. Validate entities.
7. Build dashboards.
8. Test automations.
9. Backup golden/customer config.
10. Prepare install checklist.
11. Install onsite.
12. Commission.
13. Handoff.

Each phase should produce reviewable evidence or checklist status in a future bounded checklist. INSTALL001 only defines the phase model.

## 7. Funeral Home / Field Pilot Relevance

Near-term funeral home hardware arrival is a practical pilot use case for this architecture because it can exercise bench inventory, naming, controller preparation, dashboard class separation, automation test planning, backup expectations, onsite commissioning, and customer handoff structure.

This document does not create funeral-home-specific install docs, customer-specific dashboards, customer hardware records, purchase records, or onsite procedures. Those require separate bounded tasks.

## 8. Future Task Roadmap

The following are planning-only future tasks. They are not active tasks unless added separately to the Master Task Register or explicitly created as bounded prompt work orders under the repository execution gates.

- INSTALL002 - Bench Build Checklist
- INSTALL003 - Golden Home Assistant Build Standard
- INSTALL004 - Device Naming Standard
- INSTALL005 - Entity and Area Standards
- INSTALL006 - Dashboard Architecture Standard
- INSTALL007 - Dashboard Theme Readiness Standard
- INSTALL008 - Bench Testing and Commissioning Checklist
- INSTALL009 - Customer Handoff Package
- INSTALL010 - Service Dashboard and Remote Support Standard

Recommended next task: INSTALL002 - Bench Build Checklist.

## 9. Protected-System Boundaries

INSTALL001 is documentation and governance architecture only.

It does not authorize:

- Source, route, UI, CSS, public asset, or runtime changes.
- Home Assistant configuration implementation.
- Dashboard implementation.
- Automation implementation.
- Hardware purchasing or inventory automation.
- Customer-specific install documentation.
- HubSpot schema, properties, pipeline, workflow, or write-path changes.
- Stripe/payment verification or checkout changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.

Future implementation tasks must identify their own target files, validation, protected-system review, and rollback posture before work begins.
