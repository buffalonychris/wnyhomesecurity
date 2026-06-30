# INSTALL006 - Dashboard Architecture Standard - REV01

Status: Active standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL006
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

Dashboard architecture defines how WNYHS Home Assistant dashboards are organized for customer daily use, installer setup, and service support.

The purpose of this standard is to keep future dashboard planning consistent, supportable, theme-ready, and aligned with the WNYHS installer platform before any dashboard implementation begins.

This document defines dashboard classes, view structure, audience separation, customer personalization placeholders, navigation principles, card grouping principles, status hierarchy, mobile/tablet usability, theme readiness, access and visibility posture, and relationship to entities, areas, automations, and handoff.

This standard does not create Home Assistant dashboard YAML, Lovelace cards, frontend assets, themes, automations, scripts, customer-specific dashboards, customer-specific install records, or implementation files.

## 2. Scope

This standard covers dashboard architecture only.

Included:

- dashboard classes
- recommended view structure
- audience separation
- customer personalization placeholders
- navigation principles
- card grouping principles
- status hierarchy
- mobile/tablet usability
- theme readiness
- access and visibility posture
- relationship to entities, areas, automations, and handoff

Out of scope:

- Home Assistant dashboard YAML
- Lovelace card implementation
- frontend assets
- Home Assistant themes or theme files
- automations, scripts, scenes, helpers, or blueprints
- customer-specific dashboard contents
- customer-specific install documents
- runtime, source, route, page, CSS, or public-site changes

## 3. Dashboard Classes

WNYHS dashboard planning uses three dashboard classes. Each class has a different audience, purpose, and visibility posture.

### 3.1 Customer Dashboard

The Customer Dashboard is the daily-use surface.

It should be:

- customer-readable
- focused on simple controls and clear status
- personalized later with customer and property labels
- organized by customer-understandable areas, features, and outcomes
- free of setup noise, vendor defaults, and diagnostic clutter
- suitable for mobile and tablet use first
- ready for future light, dark, and seasonal themes

The Customer Dashboard may include status and controls for supported areas such as security, cameras, doors, locks, lighting, water/leak, climate/environment, utilities, modes, and support/help. It must not include customer secrets, setup-only diagnostics, or unsupported service promises.

### 3.2 Installer Dashboard

The Installer Dashboard is the bench setup, onsite commissioning, and validation surface.

It should support:

- bench setup
- onsite commissioning
- device, entity, and area validation
- automation testing
- network and controller readiness
- adoption review
- exception tracking
- backup and restore readiness review

The Installer Dashboard is not the customer's daily-use surface. It may include setup detail, diagnostic state, temporary bench placeholders, and test-oriented groupings that would be inappropriate for normal customer use.

### 3.3 Service Dashboard

The Service Dashboard is the support review surface.

It should support review of:

- offline devices
- low batteries
- failed automations
- integration health
- backup and update status
- support notes
- items that may require onsite follow-up

The Service Dashboard is internal unless explicitly authorized for a specific customer support posture. It should help a support reviewer find actionable service state without exposing unnecessary private detail or implying unsupported service obligations.

## 4. Recommended Customer Dashboard Views

Customer Dashboard views should be organized around daily-use outcomes and customer-recognizable feature groups.

Recommended view groups:

| View group | Purpose |
| --- | --- |
| Home / Overview | First-screen summary of normal status, important exceptions, and common controls. |
| Security | Customer-readable door, window, motion, siren, and related local security status. |
| Cameras | Camera and doorbell views when included in the approved system scope. |
| Doors / Locks | Door, lock, garage, and entry control/status when supported. |
| Lighting | Customer-facing lights, plugs, switches, dimmers, and grouped lighting controls. |
| Water / Leak | Leak, moisture, sump, shutoff, and water-related status when included. |
| Climate / Environment | Temperature, humidity, freeze, air, or comfort-related status when included. |
| Utilities | Utility-room, equipment, power, plug, or other non-security operational status. |
| Modes | Simple customer modes such as home, away, night, vacation, or other future approved modes. |
| Support / Help | Support contact display, basic system ownership notes, and customer-safe help links when authorized. |

Optional view groups:

- Vacation
- Seniors / Safety
- Outdoor / Yard
- Garage
- Pool / Hot Tub

Optional views must remain tied to actual customer scope and approved area/entity readiness. They should not be added as empty or speculative dashboards.

## 5. Recommended Installer Dashboard Views

Installer Dashboard views should support bench build and commissioning work without becoming the customer daily-use surface.

Recommended view groups:

| View group | Purpose |
| --- | --- |
| Setup Overview | Current bench or commissioning status, blockers, deferred items, and validation progress. |
| Device Adoption | Device pairing/adoption review, provisional names, and missing or duplicate device checks. |
| Zigbee Health | Zigbee coordinator, repeater, device health, and mesh-readiness review when applicable. |
| Z-Wave Health | Z-Wave controller, node, route, and health review when applicable. |
| Network / Controller | Controller access, network readiness, update posture, and integration prerequisites. |
| Areas / Entities | Area assignment, entity naming, visibility class, dashboard-ready, and automation-ready review. |
| Automation Testing | Test-mode status, automation candidate checks, and failed test review. |
| Backup / Restore | Golden, customer-specific, pre-install, and restore-readiness review. |
| Exceptions | Blocked, deferred, uncertain, onsite-only, or operator-decision items. |

## 6. Recommended Service Dashboard Views

Service Dashboard views should support quick service review and follow-up triage.

Recommended view groups:

| View group | Purpose |
| --- | --- |
| Service Overview | Summary of items needing review, healthy state, recent exceptions, and next action posture. |
| Offline Devices | Devices unavailable or not reporting as expected. |
| Low Batteries | Battery-powered devices needing battery review or replacement planning. |
| Failed Automations | Automations that failed, were disabled, or need support review. |
| Integration Health | Integration, hub, bridge, controller, or account-link health where review is authorized. |
| Backup / Update Status | Backup freshness, update posture, restore-readiness notes, and deferred update items. |
| Support Notes | Customer-safe support context, open exceptions, known limitations, and service history references. |
| Onsite Follow-up | Items that require field visit, customer confirmation, physical replacement, or hands-on review. |

## 7. Status Hierarchy

Dashboard status should follow a consistent visual and operational priority so users see the most important state first.

| Priority | Status class | Use |
| --- | --- | --- |
| 1 | Critical / blocked | A key control, device, integration, backup, or setup step is blocked or needs immediate operator/service review. |
| 2 | Warning / needs attention | The system is usable but has an exception such as low battery, deferred item, failed test, unavailable device, or naming gap. |
| 3 | Normal / healthy | Expected operating state with no current action needed. |
| 4 | Informational | Helpful context that should not compete with warnings or blocked items. |
| 5 | Hidden/noise | Vendor-default, noisy, duplicate, setup-only, or low-value data that should not appear in normal customer views. |

Customer views should emphasize Critical / blocked, Warning / needs attention, and Normal / healthy state. Installer and Service dashboards may expose more Informational and Hidden/noise review candidates when those items support setup or service work.

## 8. Customer Personalization

Customer personalization is placeholder-only in this standard.

Future customer dashboard planning may use placeholders for:

- customer name
- property label
- room/area names
- preferred view order
- selected visible features
- optional support contact display

This task does not create customer-specific dashboard contents, customer records, customer names, property labels, room lists, support contact content, or feature visibility settings.

## 9. Card Grouping Principles

Dashboard cards should be grouped by customer outcome, operational purpose, or service task, not by vendor.

Principles:

- Group by outcome, not vendor.
- Use area and entity standards from `INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md`.
- Trace customer cards back to reviewed areas, devices, and entities.
- Separate control cards from diagnostic cards.
- Keep customer cards plain-language.
- Keep installer and service diagnostics separate from daily-use customer controls.
- Avoid overwhelming the first screen.
- Make the mobile/tablet layout the first usability target.
- Preserve enough structure for future handoff material.
- Keep setup, test, and exception cards out of normal customer views unless explicitly needed for customer use.

Cards should not require installer memory to interpret. A future reviewer should be able to understand why a card exists from the view name, card label, area/entity relationship, and readiness sheet notes.

## 10. Navigation Principles

Dashboard navigation should stay predictable across customer systems.

Navigation principles:

- Put the daily overview first.
- Put customer-critical status ahead of lower-value information.
- Keep feature groups stable across installs where possible.
- Hide or omit views that do not apply to the approved customer scope.
- Avoid vendor-based navigation.
- Keep setup, test, and service views outside the normal customer navigation path.
- Use plain-language labels for customer-visible views.
- Keep installer/service labels concise and operational.
- Preserve mobile/tablet reachability for common controls.

## 11. Mobile and Tablet Usability

Customer dashboards should be planned for mobile and tablet use before desktop refinement.

Expectations:

- First-screen content should not be overloaded.
- Important status should be visible without deep navigation.
- Common controls should be easy to tap.
- Text labels should be short and readable.
- Diagnostic detail should not crowd customer controls.
- View order should reflect customer use frequency.
- Optional views should not push required daily-use views out of reach.

Installer and Service dashboards may be denser than customer dashboards, but they should still preserve scanability and clear priority.

## 12. Access / Visibility Posture

The Customer Dashboard is the normal customer-facing surface.

The Installer Dashboard is a bench, commissioning, and internal setup surface.

The Service Dashboard is a support/internal surface unless explicitly authorized for a specific customer posture.

Rules:

- Do not expose secrets in dashboard labels, notes, cards, or view names.
- Do not expose passwords, network names, private account details, tokens, or private URLs.
- Do not put setup-only noise into normal customer views.
- Do not make unsupported emergency-response, third-party response-authority, or continuous service promises.
- Do not imply that WNYHS provides services or capabilities not authorized by current guardrails and customer scope.
- Keep customer-visible views customer-readable and customer-safe.
- Keep installer/service diagnostics separate unless a specific customer-facing reason is approved.

## 13. Theme Readiness

Dashboards must be ready for future light, dark, and seasonal themes.

Theme readiness means dashboard architecture should separate:

- view purpose
- card purpose
- entity binding
- status meaning
- layout priority
- customer-visible language
- future visual style values

When dashboards are implemented later, they should rely on Home Assistant theme tokens, style variables, or equivalent theme-ready mechanisms. Status meaning should not depend on hardcoded one-off colors or dark-only assumptions.

This task does not implement themes, theme files, dashboard CSS, card styling, icon libraries, color palettes, seasonal visuals, or theme switching.

## 14. Dashboard Readiness Sheet

Each bench build or dashboard planning pass should maintain a Dashboard Readiness Sheet before dashboard implementation or customer handoff.

Required fields:

| Field | Required use |
| --- | --- |
| Dashboard Class | Customer Dashboard, Installer Dashboard, or Service Dashboard. |
| View Name | Planned view group or specific view name. |
| Audience | Customer, installer, service, operator, or mixed/internal. |
| Purpose | Why the view or card group exists. |
| Required yes/no | Whether the view/card group is required for this scope. |
| Depends on Areas / Entities | Areas, devices, or entities that must be ready before the item is dashboard-ready. |
| Depends on Automations | Automation candidates or confirmed automations required for the item. |
| Customer-visible yes/no | Whether the item may appear in customer-facing dashboard or handoff material. |
| Theme-ready yes/no | Whether the item can support light, dark, and seasonal theme treatment later. |
| Status | Not started, planned, ready, blocked, deferred, implemented later, or not applicable. |
| Notes / exception | Blockers, assumptions, onsite confirmation needs, scope exclusions, or support notes. |

The readiness sheet must not store secrets or private credential values.

## 15. Examples Table

These examples are architecture examples only. They do not create dashboard YAML, cards, entities, customer-specific content, or Home Assistant configuration.

| Dashboard Class | View / Card Example | Category | Audience | Customer-visible | Purpose |
| --- | --- | --- | --- | --- | --- |
| Customer Dashboard | Home / Overview status summary | Overview | Customer | Yes | Show normal, warning, and blocked status in one daily-use view. |
| Customer Dashboard | Security opening summary | Security | Customer | Yes | Summarize doors, windows, and motion status in customer-readable terms. |
| Customer Dashboard | Front Entry camera card | Cameras | Customer | Yes | Show an approved entry camera or doorbell view. |
| Customer Dashboard | Driveway camera card | Cameras | Customer | Yes | Show exterior driveway view when included in scope. |
| Customer Dashboard | Doors / Locks quick controls | Locks | Customer | Yes | Group customer-facing door and lock controls. |
| Customer Dashboard | Garage door status | Doors / Locks | Customer | Yes | Show garage state where supported by reviewed entities. |
| Customer Dashboard | Living Room lighting controls | Lighting | Customer | Yes | Group plain-language lighting controls for a common area. |
| Customer Dashboard | Vacation lighting mode | Lighting / Modes | Customer | Yes | Placeholder for a future approved mode without implementing it here. |
| Customer Dashboard | Basement leak status | Water / Leak | Customer | Yes | Show leak/moisture status from reviewed entities. |
| Customer Dashboard | Water shutoff status | Water / Leak | Customer | Yes | Show shutoff state when supported by approved hardware and entities. |
| Customer Dashboard | Utility temperature card | Climate / Environment | Customer | Yes | Show temperature status for utility or freeze-risk areas. |
| Customer Dashboard | Humidity review card | Climate / Environment | Customer | Yes | Show humidity status when customer-relevant. |
| Customer Dashboard | Support / Help contact display | Support | Customer | Yes | Placeholder for approved support contact information. |
| Installer Dashboard | Setup Overview blockers | Diagnostics | Installer | No | Show bench or commissioning blockers and deferred items. |
| Installer Dashboard | Device Adoption review | Diagnostics | Installer | No | Compare paired devices to the naming sheet and hardware inventory. |
| Installer Dashboard | Zigbee Health view | Diagnostics | Installer | No | Review Zigbee readiness where applicable. |
| Installer Dashboard | Z-Wave Health view | Diagnostics | Installer | No | Review Z-Wave readiness where applicable. |
| Installer Dashboard | Areas / Entities readiness | Diagnostics | Installer | No | Verify `INSTALL005` area/entity readiness before dashboard binding. |
| Installer Dashboard | Automation Testing results | Diagnostics | Installer | No | Review automation candidates and test outcomes. |
| Installer Dashboard | Backup / Restore readiness | Diagnostics | Installer | No | Verify backup state and restore-readiness notes. |
| Service Dashboard | Service Overview exceptions | Support | Service | No | Summarize service items needing review. |
| Service Dashboard | Offline Devices list | Diagnostics | Service | No | Identify unavailable devices for support review. |
| Service Dashboard | Low Batteries list | Diagnostics | Service | No | Identify devices needing battery follow-up. |
| Service Dashboard | Failed Automations list | Diagnostics | Service | No | Identify automations needing review. |
| Service Dashboard | Integration Health view | Diagnostics | Service | No | Review integration, bridge, hub, or controller health. |
| Service Dashboard | Backup / Update Status view | Diagnostics | Service | No | Review backup freshness and update posture. |
| Service Dashboard | Support Notes view | Support | Service | No | Preserve service context, known limitations, and exception notes. |
| Service Dashboard | Onsite Follow-up list | Support | Service | No | Separate remote-review items from field-service needs. |

## 16. Anti-Patterns

Avoid or forbid these dashboard patterns:

| Avoid / forbidden example | Problem |
| --- | --- |
| One dashboard for everyone | Customer, installer, and service audiences have different needs and visibility boundaries. |
| Customer dashboard full of diagnostic entities | Daily-use views become confusing and expose setup/service noise. |
| Vendor-based dashboard structure | Customers and service reviewers need outcomes, areas, and features, not vendor buckets. |
| Customer-visible setup noise | Pairing, test, bench, and exception artifacts should not crowd normal customer use. |
| Hardcoded customer secrets | Secrets, credentials, private network details, and private URLs must never appear in labels or notes. |
| Emergency-response or third-party authority claims | Dashboard language must not imply unsupported response services or outside authority contact. |
| Dark-only dashboard design | Future light, dark, and seasonal themes require theme-ready structure. |
| Cards that cannot be traced back to area/entity standards | Dashboard state must map back to `INSTALL005` area/entity readiness. |
| Dashboards requiring installer memory to interpret | Labels, grouping, and notes must be understandable without relying on one person's memory. |
| Customer controls mixed with service diagnostics | Control cards and diagnostics need separate audience posture. |
| Empty optional views | Optional views should appear only when the approved scope supports them. |

## 17. Relationship to Other INSTALL Docs

- `INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md` checks dashboard preparation readiness.
- `INSTALL003_GOLDEN_HOME_ASSISTANT_BUILD_STANDARD_REV01.md` defines Golden Build dashboard placeholders.
- `INSTALL004_DEVICE_NAMING_STANDARD_REV01.md` defines physical device names.
- `INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md` defines areas and entities consumed by dashboards.
- `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` defines dashboard architecture.
- `INSTALL007 - Dashboard Theme Readiness Standard` will define dashboard theme readiness.
- `INSTALL008 - Bench Testing and Commissioning Checklist` will validate dashboards during bench testing and commissioning.
- `INSTALL009 - Customer Handoff Package` will turn approved customer dashboard state into handoff material.
- `INSTALL010 - Service Dashboard and Remote Support Standard` will define Service Dashboard support posture.

## 18. Funeral Home Pilot Relevance

The funeral home pilot may use this architecture for dashboard planning.

This standard does not create funeral-home-specific dashboards, views, customer labels, room names, entity bindings, automations, support notes, Home Assistant configuration, handoff material, or onsite documentation. Pilot-specific dashboard contents require a separate bounded customer/job artifact.

## 19. Future Follow-Up Planning Notes

The following future tasks are planning notes only. They are not activated by this document:

- INSTALL007 - Dashboard Theme Readiness Standard
- INSTALL008 - Bench Testing and Commissioning Checklist
- INSTALL009 - Customer Handoff Package
- INSTALL010 - Service Dashboard and Remote Support Standard

Recommended next task: INSTALL006A - Shared Job Data Model & HubSpot Field Architecture.

## 20. Protected-System Boundaries

INSTALL006 is documentation and installer-platform standard work only.

It does not authorize:

- Source, route, UI, CSS, public asset, or runtime changes.
- Home Assistant configuration implementation.
- Dashboard implementation.
- Lovelace card implementation.
- Theme implementation.
- Automation, script, scene, helper, or blueprint implementation.
- Customer-specific dashboard contents.
- Customer-specific install documentation.
- Funeral-home-specific configuration, dashboards, or views.
- Hardware purchasing, inventory automation, or ordering automation.
- HubSpot schema, properties, pipeline, workflow, or write-path changes.
- Stripe/payment verification or checkout changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.

Future dashboard implementation, customer handoff, service posture, or theme tasks must identify their own target files, validation, protected-system review, and rollback posture before work begins.
