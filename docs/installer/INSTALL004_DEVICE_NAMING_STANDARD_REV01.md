# INSTALL004 - Device Naming Standard - REV01

Status: Active standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL004
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

Device naming gives every physical device a clear, stable, supportable identity before or during bench adoption.

The purpose of this standard is to keep Home Assistant-based WNYHS installs readable during bench build, field installation, support review, customer handoff, and future device replacement. A physical device name should identify what the device is, where it belongs, and why it exists without relying on pairing order, vendor-default names, installer memory, or private customer data.

This standard defines physical device names only. It does not create Home Assistant configuration files, dashboards, automations, scripts, customer-specific install documents, device inventory data, final entity names, or final area names.

## 2. Scope

This standard covers physical device naming for Home Assistant-based installs during bench adoption and field placement.

Included device classes:

- contact sensors
- motion sensors
- leak sensors
- smart plugs
- switches and dimmers
- locks
- cameras
- doorbells
- sirens
- hubs and controllers
- repeaters and radios
- utility and environment sensors

Out of scope:

- final entity naming
- final area/room standards
- dashboard card labels
- automation names
- script, scene, helper, or blueprint names
- customer-specific install documents
- hardware purchasing or inventory automation
- Home Assistant YAML, storage, or dashboard implementation

Entity naming belongs to `INSTALL005 - Entity and Area Standards`.

## 3. Naming Principles

Physical device names must follow these principles:

- Use plain language first.
- Prefer room or area, then function or placement, then device type.
- Keep names stable across the support life of the device.
- Do not leave vendor-default names as final device names.
- Do not use installer initials as final device names.
- Do not include customer secrets, private credentials, network names, passwords, or other private data.
- Use names that are customer-readable when shown on dashboards.
- Use names that are service-readable during troubleshooting.
- Avoid overlong names that become hard to scan in Home Assistant, notes, labels, or service records.
- Preserve enough location detail to distinguish similar devices without creating coded names that only one installer understands.

## 4. Naming Pattern

Recommended pattern:

```text
[Area / Room] [Function / Location] [Device Type]
```

Examples:

- Front Door Contact Sensor
- Basement Utility Leak Sensor
- Hallway Motion Sensor
- Living Room Lamp Plug
- Garage Interior Camera
- Main Entry Doorbell
- Basement Zigbee Repeater

The pattern may be shortened when the area, function, and device type remain obvious. For example, `Kitchen Sink Leak Sensor` is acceptable because `Kitchen` is the area, `Sink` is the placement, and `Leak Sensor` is the device type.

## 5. Internal vs Customer-Visible Names

Physical device names may be used in several contexts. The naming sheet must identify whether the current name is customer-visible.

### 5.1 Customer-Visible Names

Use customer-visible names when the name may appear on a customer dashboard, handoff note, support conversation, notification, or customer-facing status view.

Customer-visible names must be:

- plain-language
- free of private credentials or internal-only codes
- understandable without installer explanation
- appropriate for the customer's normal daily use

### 5.2 Installer/Service-Only Names

Installer/service-only names may include short internal distinctions when needed for setup, testing, or support review, but they still must avoid secrets and unclear codes.

Examples of acceptable service-only clarifiers:

- Bench Spare Plug
- Installer Test Contact Sensor
- Service Rack Zigbee Coordinator

These names must not become customer-visible unless reviewed and rewritten for customer readability.

### 5.3 Provisional Bench Names

Use provisional names when bench work begins before placement is fully confirmed.

Provisional names should be based on quote notes, floorplans, photos, planned openings, or operator notes. They must be marked as provisional in the device naming sheet and must be reviewed onsite before finalization.

### 5.4 Confirmed Onsite Names

After field placement is confirmed, update the device naming sheet and Home Assistant device name to the final physical device name. The final name should match the actual installed location and role, not the original bench assumption if the device moved.

## 6. Bench Naming Workflow

Device naming should follow these phases:

1. Assign a provisional name from the quote, floorplan, photos, or operator notes.
2. Apply a short physical label if appropriate.
3. Pair or adopt the device to the controller or hub.
4. Rename the physical device from its vendor-default or pairing name.
5. Match the renamed device to the hardware inventory.
6. Mark uncertain names for onsite confirmation.
7. Finalize the name after placement is confirmed.

The bench owner should not rely on pairing order alone. If two devices are similar, the naming sheet, physical label, and hardware inventory must be enough to re-identify each device during install and later support review.

## 7. Physical Labeling

Physical labels help installers connect bench records to real hardware.

Label expectations:

- A short physical label may differ from the Home Assistant display name.
- Every label must map back to the device naming sheet.
- Labels must not expose customer secrets, network names, passwords, or private credentials.
- Labels should support installer troubleshooting during pairing, placement, replacement, and service review.
- Labels should be durable enough for the expected install environment when practical.
- Labels should be short enough to fit on the device, packaging, or install kit reference.

Example mapping:

| Physical label | Home Assistant device name |
| --- | --- |
| FD-CS | Front Door Contact Sensor |
| BS-LK | Basement Utility Leak Sensor |
| GAR-CAM | Garage Interior Camera |

Physical labels are installer aids, not customer-facing naming authority.

## 8. Device Naming Sheet

Each bench build should maintain a device naming sheet before or during device pairing.

Required fields:

| Field | Required use |
| --- | --- |
| Proposed Device Name | Initial physical device name from the plan, quote, floorplan, photos, or operator notes. |
| Device Type | Physical class such as contact sensor, lock, camera, siren, plug, or repeater. |
| Manufacturer / Model | Hardware maker and model when known. |
| Serial / MAC if available | Device identifier when available and appropriate to record outside public docs. |
| Area / Room | Planned or confirmed area such as Front Entry, Basement, Garage, or Kitchen. |
| Function / Placement | Door, window, sink, lamp, interior view, utility room, or other role. |
| Customer-visible yes/no | Whether the name may appear in customer-facing views or handoff material. |
| Bench status | Not started, labeled, paired, renamed, blocked, deferred, or complete. |
| Onsite confirmation required yes/no | Whether the name depends on field placement confirmation. |
| Final name | Final physical device name after placement is confirmed. |
| Notes / exception | Uncertainty, substitution, damaged hardware, placement change, or support note. |

The device naming sheet must not store secrets or private credential values.

## 9. Examples Table

| Category | Device name | Device type | Customer-visible | Notes |
| --- | --- | --- | --- | --- |
| Security | Front Door Contact Sensor | Contact sensor | Yes | Main entry opening. |
| Security | Back Door Contact Sensor | Contact sensor | Yes | Rear entry opening. |
| Security | Basement Window Contact Sensor | Contact sensor | Yes | Specific opening where known. |
| Security | Garage Overhead Door Contact Sensor | Contact sensor | Yes | Large door contact. |
| Security | Hallway Motion Sensor | Motion sensor | Yes | Interior movement coverage. |
| Security | Upstairs Landing Motion Sensor | Motion sensor | Yes | Stair/landing coverage. |
| Security | Main Entry Lock | Lock | Yes | Door lock device. |
| Security | Side Entry Lock | Lock | Yes | Secondary entry lock. |
| Security | Mudroom Siren | Siren | Yes | Local alert device. |
| Safety | Basement Utility Leak Sensor | Leak sensor | Yes | Utility/mechanical area. |
| Safety | Kitchen Sink Leak Sensor | Leak sensor | Yes | Sink cabinet or nearby placement. |
| Safety | Laundry Washer Leak Sensor | Leak sensor | Yes | Washer area. |
| Safety | Utility Room Temperature Sensor | Environment sensor | Yes | Temperature review. |
| Safety | Basement Humidity Sensor | Environment sensor | Yes | Humidity review. |
| Lighting/control | Living Room Lamp Plug | Smart plug | Yes | Plug controlling a lamp. |
| Lighting/control | Bedroom Fan Plug | Smart plug | Yes | Plug controlling a fan. |
| Lighting/control | Kitchen Sink Light Switch | Switch | Yes | Switch location and controlled load. |
| Lighting/control | Dining Room Dimmer | Dimmer | Yes | Dimmer device. |
| Cameras | Garage Interior Camera | Camera | Yes | Interior garage view. |
| Cameras | Driveway Camera | Camera | Yes | Exterior camera placement. |
| Cameras | Rear Patio Camera | Camera | Yes | Exterior rear area. |
| Cameras | Main Entry Doorbell | Doorbell | Yes | Doorbell/camera device. |
| Utility | Network Rack Plug | Smart plug | No | Service-only infrastructure plug. |
| Infrastructure | Home Assistant Controller | Hub/controller | No | Controller identity. |
| Infrastructure | Basement Zigbee Repeater | Repeater/radio | No | Mesh support device. |
| Infrastructure | Utility Room Z-Wave Radio | Repeater/radio | No | Radio or bridge placement. |

## 10. Anti-Patterns

Avoid or forbid these naming patterns:

| Avoid / forbidden example | Problem |
| --- | --- |
| Sensor 1 | Pairing order only; no location or function. |
| Aqara Sensor | Vendor default; no customer or service meaning. |
| Chris Motion | Installer initial/name as final authority. |
| Funeral Home Camera 1 | Customer-specific pilot language must not become reusable Golden baseline naming. |
| Back Door Maybe | Uncertain final name; should be marked provisional and confirmed onsite. |
| ZB-RPT-03 | Overly coded without plain-language meaning. |
| MainWiFi Leak Sensor | Contains private network-related information. |
| Password Closet Camera | Contains private credential-related wording and unclear location logic. |
| Customer Safe Plug | Reveals private customer context that should not be encoded in device names. |

If a temporary bench name is unclear, keep it provisional and mark it for onsite confirmation rather than turning uncertainty into the final physical device name.

## 11. Relationship to Other INSTALL Docs

- `INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md` checks whether device naming is completed as part of bench build readiness.
- `INSTALL003_GOLDEN_HOME_ASSISTANT_BUILD_STANDARD_REV01.md` keeps Golden Build names generic or provisional and prevents customer-specific names from being folded into the reusable baseline.
- `INSTALL004_DEVICE_NAMING_STANDARD_REV01.md` defines physical device names.
- `INSTALL005 - Entity and Area Standards` will define entity naming and area standards.
- `INSTALL006 - Dashboard Architecture Standard` will consume customer-visible names for dashboards.

## 12. Funeral Home Pilot Relevance

The funeral home pilot may use this standard during bench naming for planned physical devices, labels, pairing, and onsite confirmation tracking.

This standard does not create funeral-home-specific device names, customer-specific install records, dashboard labels, Home Assistant configuration, automations, customer handoff material, or final onsite documentation. Any pilot-specific names must live in a separately authorized customer/job artifact, not in the reusable Golden Build or this standard.

## 13. Future Follow-Up Planning Notes

The following future tasks are planning notes only. They are not activated by this document:

- INSTALL005 - Entity and Area Standards
- INSTALL006 - Dashboard Architecture Standard
- INSTALL008 - Bench Testing and Commissioning Checklist

Recommended next task: INSTALL005 - Entity and Area Standards.

## 14. Protected-System Boundaries

INSTALL004 is documentation and installer-platform standard work only.

It does not authorize:

- Source, route, UI, CSS, public asset, or runtime changes.
- Home Assistant configuration implementation.
- Dashboard implementation.
- Automation, script, scene, helper, or blueprint implementation.
- Entity naming, final area naming, or dashboard card naming implementation.
- Customer-specific install documentation.
- Funeral-home-specific configuration or customer-specific device records.
- Hardware purchasing, inventory automation, or ordering automation.
- HubSpot schema, properties, pipeline, workflow, or write-path changes.
- Stripe/payment verification or checkout changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.

Future implementation or installer-operation tasks must identify their own target files, validation, protected-system review, and rollback posture before work begins.
