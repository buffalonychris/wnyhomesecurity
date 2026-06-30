# INSTALL005 - Entity and Area Standards - REV01

Status: Active standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL005
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

Entity and area standards make adopted Home Assistant devices readable, supportable, dashboard-ready, and automation-ready after physical device naming is established.

This standard defines how WNYHS should organize Home Assistant areas, rooms, zones, device-to-area assignment, and entities after adoption so each customer system remains clear during bench build, onsite confirmation, dashboard preparation, automation preparation, support review, and future service work.

This document does not create Home Assistant configuration files, dashboards, automations, scripts, customer-specific install documents, customer entity data, customer device data, or funeral-home-specific names.

## 2. Scope

This standard covers:

- Home Assistant areas.
- Rooms.
- Exterior areas.
- Utility and equipment areas.
- Shared zones.
- Device-to-area assignment.
- Entity naming principles.
- Entity cleanup after adoption.
- Entity visibility.
- Disabled, noisy, duplicate, and unclear entity handling.
- Dashboard and automation readiness.

This standard does not redefine physical device naming. Physical device naming belongs to `INSTALL004_DEVICE_NAMING_STANDARD_REV01.md`.

Out of scope:

- Home Assistant YAML, storage, dashboard, automation, script, scene, helper, or blueprint implementation.
- Customer-specific area lists, entity lists, device records, dashboards, or install packets.
- Funeral-home-specific area names or entity names.
- Hardware purchasing, inventory automation, ordering automation, or runtime integrations.

## 3. Area / Room Principles

Home Assistant areas and rooms should follow these principles:

- Use customer-readable names.
- Use plain-language names.
- Keep names stable across the support life of the system.
- Avoid overly coded room names that only one installer understands.
- Do not include customer secrets, credentials, network names, private account details, or private data.
- Separate interior, exterior, utility, and equipment areas when useful.
- Mark uncertain areas for onsite confirmation instead of pretending bench assumptions are final.
- Avoid using vendor names or device types as areas.
- Keep reusable standards free of customer-specific people names, property names, and pilot-specific labels.

Areas should describe where a customer, installer, or service reviewer expects to find the device or status. They should not describe the vendor, pairing method, or one-time adoption order.

## 4. Recommended Area Types

| Area type | Use | Examples |
| --- | --- | --- |
| Interior rooms | Normal rooms inside the property. | Living Room, Kitchen, Office, Upstairs Hallway |
| Entry/opening areas | Entries, doors, vestibules, mudrooms, and opening-focused areas. | Front Entry, Side Entry, Garage Entry, Mudroom |
| Exterior areas | Outdoor customer-visible or service-relevant places. | Back Patio, Driveway, Front Porch, Side Yard |
| Utility/equipment areas | Mechanical, utility, network, and equipment spaces. | Basement Utility, Network Closet, Mechanical Room |
| Detached structures | Buildings or structures separate from the main interior. | Detached Shed, Detached Garage, Pool House |
| Shared/multi-room zones | Areas that span more than one normal room or support grouped review. | Main Floor, Upstairs Hallway, Stairwell |
| Service-only areas | Installer or support areas not meant for normal customer dashboard focus. | Service Rack, Network Rack, Controller Shelf |
| Temporary bench areas | Short-lived bench setup areas used before final placement is known. | Bench Staging, Bench Test Area |

Temporary bench areas must be reviewed before customer handoff. They should not remain as final customer-facing areas unless a later task specifically authorizes that use.

## 5. Area Naming Pattern

Recommended pattern:

```text
[Plain Area / Room Name]
```

Examples:

- Front Entry
- Living Room
- Kitchen
- Basement Utility
- Garage
- Back Patio
- Detached Shed
- Service Rack
- Bench Staging

Names may be shortened when the result remains plain and stable. For example, `Garage` is acceptable when there is only one garage area, while `Detached Garage` is better when the property has more than one garage context.

## 6. Device-to-Area Assignment Rules

Assign each device to the most useful physical and customer context.

Rules:

- Door and window sensors usually belong to the room, entry, or opening they protect.
- Cameras belong to the view or location they represent, not only the room where power is available.
- Leak sensors belong to the utility, fixture, appliance, or nearby physical location.
- Plugs, switches, and dimmers belong to the area of the controlled load when that is clearer than the electrical box location.
- Locks belong to the door or entry they control.
- Doorbells belong to the entry they serve.
- Repeaters, radios, bridges, and controller-adjacent devices may be assigned to service-only areas if they are not customer-facing.
- Environmental sensors belong to the area whose temperature, humidity, or other condition they measure.
- Uncertain assignments require onsite confirmation and must be recorded as provisional.

If the physical device location and customer meaning differ, choose the area that makes support, dashboard use, and automation binding clearest. Record the exception when the choice is not obvious.

## 7. Entity Naming Principles

After device adoption, entity names should be readable and derived from the physical device name plus capability.

Entity names should:

- Avoid vendor-default final names.
- Avoid duplicate unclear names.
- Preserve capability clarity.
- Distinguish battery, signal, tamper, motion, contact, leak, temperature, humidity, power, switch, light, lock, camera, siren, and similar capabilities.
- Avoid customer secrets, private credentials, network names, account identifiers, or private data.
- Keep dashboard-facing entities customer-readable.
- Keep diagnostic entities service-readable.
- Stay consistent with `INSTALL004` physical device names.
- Remain useful for dashboard binding, automation binding, backup review, and service troubleshooting.

Entity names should not rely on temporary pairing names, vendor model strings, installer initials, or adoption order as final naming authority.

## 8. Entity Naming Pattern

Recommended pattern:

```text
[Device Name] [Capability]
```

Examples:

- Front Door Contact Sensor Contact
- Front Door Contact Sensor Battery
- Basement Utility Leak Sensor Moisture
- Hallway Motion Sensor Motion
- Living Room Lamp Plug Switch
- Garage Interior Camera Stream
- Main Entry Doorbell Button
- Basement Zigbee Repeater Signal

Shorter dashboard labels may be defined later by dashboard standards, but clear entity names should be preserved so dashboards, automations, support review, and future documentation tooling can trace the entity back to its parent device and capability.

## 9. Entity Cleanup Workflow

Entity cleanup after adoption should follow these phases:

1. Review entities created after adoption.
2. Identify primary control or status entities.
3. Identify diagnostic entities.
4. Rename safe entities.
5. Hide or disable noisy or non-useful entities only when safe.
6. Document unclear entities.
7. Validate dashboard and automation readiness.
8. Record exceptions.

Do not treat cleanup as a bulk deletion pass. The goal is a readable and supportable system, not the removal of every unfamiliar entity.

## 10. Entity Visibility Classes

| Visibility class | Use |
| --- | --- |
| Customer-visible | Safe and useful for normal customer dashboard or handoff context. |
| Dashboard-supporting | Needed to power dashboards, cards, badges, or status views, even if not always directly shown. |
| Automation-supporting | Needed for automation triggers, conditions, actions, or status checks. |
| Installer/service diagnostic | Useful for setup, commissioning, or support review, but not normal customer focus. |
| Hidden/disabled candidate | Noisy, duplicate, or low-value entity that may be hidden or disabled after review. |
| Do-not-touch / unclear | Entity purpose is uncertain or risk is unknown; defer changes until review. |

An entity may serve more than one role. The review sheet should record the most important visibility class for the current bench or commissioning phase.

## 11. Disabled / Duplicate / Noisy Entity Handling

Rules:

- Do not delete unclear entities silently.
- Disable only when safe and documented.
- Preserve diagnostics that are useful for service review.
- Document duplicate or vendor-created entities before hiding or disabling them.
- Defer uncertain cleanup to onsite or service review.
- Do not hide primary customer status or control entities merely because they are noisy during setup.
- Do not rename an entity in a way that breaks dashboard or automation readiness without recording the change.

When in doubt, classify the entity as `Do-not-touch / unclear` and record the review need.

## 12. Area and Entity Review Sheet

Each bench build should maintain an area and entity review sheet after device adoption begins.

### 12.1 Area Fields

| Field | Required use |
| --- | --- |
| Area Name | Plain Home Assistant area or room name. |
| Area Type | Interior room, entry/opening area, exterior area, utility/equipment area, detached structure, shared/multi-room zone, service-only area, or temporary bench area. |
| Customer-visible yes/no | Whether the area may appear in customer-facing dashboards or handoff material. |
| Devices assigned | Physical devices assigned to the area. |
| Onsite confirmation required yes/no | Whether the area or assignment is provisional. |
| Notes / exception | Uncertainty, customer naming concern, service-only rationale, or deferred review item. |

### 12.2 Entity Fields

| Field | Required use |
| --- | --- |
| Entity Display Name | Human-readable entity display name after review. |
| Entity ID if available | Home Assistant entity ID when appropriate to record. |
| Parent Device | Physical device name from `INSTALL004`. |
| Capability | Contact, motion, leak, moisture, battery, signal, tamper, temperature, humidity, power, switch, light, lock, camera, siren, or other capability. |
| Visibility Class | Customer-visible, dashboard-supporting, automation-supporting, installer/service diagnostic, hidden/disabled candidate, or do-not-touch / unclear. |
| Customer-visible yes/no | Whether the entity may appear in customer-facing views or handoff material. |
| Automation-ready yes/no | Whether the entity is clear and stable enough for automation binding. |
| Dashboard-ready yes/no | Whether the entity is clear and stable enough for dashboard binding. |
| Cleanup status | Needs review, renamed, hidden, disabled, retained, deferred, or do-not-touch. |
| Notes / exception | Duplicate, vendor-created, noisy, unclear, onsite confirmation, dashboard dependency, automation dependency, or support note. |

The review sheet must not store secrets or private credential values.

## 13. Examples Table

| Area type | Area Name | Device Name | Entity Display Name | Capability | Visibility Class | Customer-visible | Dashboard-ready | Automation-ready |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Entry/opening area | Front Entry | Front Door Contact Sensor | Front Door Contact Sensor Contact | Contact | Customer-visible | Yes | Yes | Yes |
| Entry/opening area | Front Entry | Front Door Contact Sensor | Front Door Contact Sensor Battery | Battery | Installer/service diagnostic | No | No | No |
| Entry/opening area | Back Entry | Back Door Contact Sensor | Back Door Contact Sensor Contact | Contact | Customer-visible | Yes | Yes | Yes |
| Interior room | Living Room | Living Room Window Contact Sensor | Living Room Window Contact Sensor Contact | Contact | Automation-supporting | No | Yes | Yes |
| Interior room | Hallway | Hallway Motion Sensor | Hallway Motion Sensor Motion | Motion | Customer-visible | Yes | Yes | Yes |
| Interior room | Upstairs Hallway | Upstairs Landing Motion Sensor | Upstairs Landing Motion Sensor Battery | Battery | Installer/service diagnostic | No | No | No |
| Utility/equipment area | Basement Utility | Basement Utility Leak Sensor | Basement Utility Leak Sensor Moisture | Leak/moisture | Customer-visible | Yes | Yes | Yes |
| Interior room | Kitchen | Kitchen Sink Leak Sensor | Kitchen Sink Leak Sensor Moisture | Leak/moisture | Dashboard-supporting | Yes | Yes | Yes |
| Utility/equipment area | Laundry | Laundry Washer Leak Sensor | Laundry Washer Leak Sensor Moisture | Leak/moisture | Customer-visible | Yes | Yes | Yes |
| Exterior area | Driveway | Driveway Camera | Driveway Camera Stream | Camera | Customer-visible | Yes | Yes | No |
| Exterior area | Back Patio | Rear Patio Camera | Rear Patio Camera Stream | Camera | Customer-visible | Yes | Yes | No |
| Entry/opening area | Front Entry | Main Entry Doorbell | Main Entry Doorbell Button | Doorbell button | Automation-supporting | Yes | Yes | Yes |
| Entry/opening area | Front Entry | Main Entry Doorbell | Main Entry Doorbell Camera Stream | Camera | Customer-visible | Yes | Yes | No |
| Interior room | Living Room | Living Room Lamp Plug | Living Room Lamp Plug Switch | Switch | Customer-visible | Yes | Yes | Yes |
| Interior room | Kitchen | Kitchen Sink Light Switch | Kitchen Sink Light Switch Light | Light | Customer-visible | Yes | Yes | Yes |
| Entry/opening area | Front Entry | Main Entry Lock | Main Entry Lock Lock | Lock | Customer-visible | Yes | Yes | Yes |
| Interior room | Mudroom | Mudroom Siren | Mudroom Siren Siren | Siren | Automation-supporting | No | Yes | Yes |
| Utility/equipment area | Basement Utility | Utility Room Temperature Sensor | Utility Room Temperature Sensor Temperature | Temperature | Dashboard-supporting | Yes | Yes | Yes |
| Utility/equipment area | Basement Utility | Basement Humidity Sensor | Basement Humidity Sensor Humidity | Humidity | Dashboard-supporting | Yes | Yes | Yes |
| Service-only area | Service Rack | Basement Zigbee Repeater | Basement Zigbee Repeater Signal | Signal | Installer/service diagnostic | No | No | No |
| Service-only area | Service Rack | Utility Room Z-Wave Radio | Utility Room Z-Wave Radio Signal | Signal | Installer/service diagnostic | No | No | No |
| Service-only area | Network Rack | Network Rack Plug | Network Rack Plug Power | Power | Installer/service diagnostic | No | No | No |

## 14. Anti-Patterns

Avoid or forbid these patterns:

| Avoid / forbidden example | Problem |
| --- | --- |
| Kitchen Sensor 1 | Capability is unclear and pairing order may become the only meaning. |
| lumi.sensor_magnet.aq2 | Vendor-default name is not customer-readable or service-readable. |
| All devices assigned to Home | Area model becomes useless for dashboards, automations, and support review. |
| Chris Room | Reusable standards must not encode a person-specific or installer-specific room name. |
| Delete every unknown diagnostic entity | Unknown entities may be needed for service or device health. |
| MainWiFi Battery | Uses private network-related language and lacks parent device context. |
| Battery | Parent device is unclear. |
| Sensor Battery 3 | Parent device and capability context are unclear. |
| Aqara Motion | Vendor name without area, role, or customer meaning. |
| Bench Staging left as customer-visible final area | Temporary bench areas require review before handoff. |
| Doorbell Button maybe | Uncertainty should be recorded as an onsite confirmation need, not embedded in the final name. |

## 15. Relationship to Other INSTALL Docs

- `INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md` checks whether entity cleanup and area planning are complete.
- `INSTALL003_GOLDEN_HOME_ASSISTANT_BUILD_STANDARD_REV01.md` keeps Golden Build areas and entities generic.
- `INSTALL004_DEVICE_NAMING_STANDARD_REV01.md` defines physical device names.
- `INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md` defines Home Assistant areas and entities.
- `INSTALL006 - Dashboard Architecture Standard` will consume areas and entities for dashboards.
- `INSTALL008 - Bench Testing and Commissioning Checklist` will validate entity and area readiness during bench testing and commissioning.

## 16. Funeral Home Pilot Relevance

The funeral home pilot may use this standard during bench entity and area setup after devices are adopted and physical device names are established.

This standard does not create funeral-home-specific area names, entity names, dashboards, automations, customer-specific install records, customer handoff material, Home Assistant configuration, or onsite documentation. Pilot-specific names must live in a separately authorized customer/job artifact.

## 17. Future Follow-Up Planning Notes

The following future tasks are planning notes only. They are not activated by this document:

- INSTALL006 - Dashboard Architecture Standard
- INSTALL007 - Dashboard Theme Readiness Standard
- INSTALL008 - Bench Testing and Commissioning Checklist
- INSTALL010 - Service Dashboard and Remote Support Standard

Recommended next task: INSTALL006 - Dashboard Architecture Standard.

## 18. Protected-System Boundaries

INSTALL005 is documentation and installer-platform standard work only.

It does not authorize:

- Source, route, UI, CSS, public asset, or runtime changes.
- Home Assistant configuration implementation.
- Dashboard implementation.
- Automation, script, scene, helper, or blueprint implementation.
- Customer-specific install documentation.
- Customer-specific area, device, or entity records.
- Funeral-home-specific configuration or naming.
- Hardware purchasing, inventory automation, or ordering automation.
- HubSpot schema, properties, pipeline, workflow, or write-path changes.
- Stripe/payment verification or checkout changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.

Future implementation or installer-operation tasks must identify their own target files, validation, protected-system review, and rollback posture before work begins.
