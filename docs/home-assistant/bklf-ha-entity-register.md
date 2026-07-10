# Brian K. Lewis Funeral Home Home Assistant Entity Register

Status: Active
Customer: Brian K. Lewis Funeral Home
Scope: First-floor Home Assistant device and entity register

---

## 1. Register Purpose

This document tracks the Brian K. Lewis Funeral Home first-floor Home Assistant deployment before pairing, dashboard construction, and automation work.

The register records physical hardware, expected Home Assistant entities, area assignments, labels, dashboard panels, automation membership, install status, and notes so device setup, entity naming, dashboard mapping, and workflow mapping can remain stable and supportable.

---

## 2. Register Rules

- Every paired device must be entered in this register.
- Entity names must follow the approved naming convention from `bklf-ha-green-config-checklist.md`.
- Wall-based names are used for exterior envelope devices.
- Room-based names are used for interior devices.
- Network Closet is used for infrastructure devices even though physically located in the Conference Room.
- No generic entity names should remain in the final system.
- Do not rename entities after automations or dashboards are built unless the change is recorded here.
- This register is the source of truth for dashboard and automation mapping.
- Confirmed contact sensor model: Sonoff SenseGuard Gen 2.
- Confirmed motion sensor model: Sonoff SNZB-03P.
- Deferred operable-window contacts remain planned coverage and are not active sensors until additional contact sensors arrive.
- Fixed picture windows are future impact/shock-type sensor placeholders, not contact-sensor windows.

## Confirmed Sensor Inventory

- 14 Sonoff SenseGuard Gen 2 contact sensors confirmed on hand.
- 2 Sonoff SNZB-03P motion sensors confirmed on hand.
- 16 total contact sensors are needed for full exterior door + operable-window contact coverage:
  - 4 exterior door contacts
  - 12 operable window contacts
- 14 contact sensors are currently on hand:
  - 4 assigned to exterior doors
  - 10 assigned to initial operable-window coverage
- 2 operable-window contact sensors are deferred.

---

## 3. Master Entity Register Table

| Register ID | Physical Device | Expected HA Entity / Friendly Name | Area | Label(s) | Protocol / Integration | Power Type | Dashboard Panel | Automation Membership | Install Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| BKLF-INF-001 | Home Assistant Green | Network Closet Home Assistant Green | Network Closet | Infrastructure, Critical, Ethernet | Home Assistant Core | AC/Ethernet | Infrastructure / Administration | System health, backup checkpoints | Confirmed on hand | HA Green powered on, network-connected, HA 16.3, 32GB built-in storage |
| BKLF-INF-002 | Zooz ZST39 800LR USB Stick | Network Closet Z-Wave Controller | Network Closet | Infrastructure, Critical, Z-Wave | Z-Wave JS UI | USB | Infrastructure / Administration | Z-Wave network health | Confirmed on hand | Used for Kwikset lock and any Z-Wave devices |
| BKLF-INF-003 | Sonoff Zigbee 3.0 USB Dongle Plus-E / ZBDongle-E | Network Closet Zigbee Controller | Network Closet | Infrastructure, Critical, Zigbee | Zigbee2MQTT preferred / ZHA acceptable | USB | Infrastructure / Administration | Zigbee network health | Confirmed on hand | Substitute for Home Assistant Connect ZBT-2 |
| BKLF-SW-001 | Reolink PoE Video Doorbell | South Wall Doorbell | South Wall | Camera, PoE, Ethernet, Critical, Exterior | Reolink | PoE | Entrances, Cameras, Overview | South Entrance owner-managed access workflow | Confirmed on hand | Primary visitor awareness and remote entry camera |
| BKLF-SW-002 | Kwikset Home Connect 620 Z-Wave Plus LR Smart Lock | South Wall Lock | South Wall | Door Lock, Z-Wave, Critical, Exterior | Z-Wave JS UI | Battery | Entrances, Security, Overview | South Entrance owner-managed access workflow, auto-relock, access event logging | Confirmed on hand | Primary remote-entry lock |
| BKLF-SW-003 | Sonoff SenseGuard Gen 2 Contact Sensor | South Wall Door Contact | South Wall | Door Contact, Exterior | Zigbee / Sonoff SenseGuard Gen 2 | Battery | Entrances, Security, Overview | South Entrance workflow, building secure status | Confirmed on hand / assigned | South Wall exterior door contact |
| BKLF-SW-004 | Reolink Dual-Lens PoE Camera | South Wall Corner Camera | South Wall | Camera, PoE, Ethernet, Critical, Exterior | Reolink | PoE | Cameras, Exterior, Overview | South Wall exterior activity awareness | Confirmed on hand | Added outside original proposal scope |
| BKLF-SW-005 through BKLF-SW-009 | Sonoff SenseGuard Gen 2 Contact Sensors | South Wall Window 01 through South Wall Window 05 | South Wall | Window Contact, Exterior | Zigbee / Sonoff SenseGuard Gen 2 | Battery | Exterior, Security, Overview | Building secure status | Confirmed on hand / assigned | 5 operable South Wall windows included in initial operable-window coverage; final onsite numbering to verify |
| BKLF-NW-001 through BKLF-NW-005 | Sonoff SenseGuard Gen 2 Contact Sensors | North Wall Window 01 through North Wall Window 05 | North Wall | Window Contact, Exterior | Zigbee / Sonoff SenseGuard Gen 2 | Battery | Exterior, Security, Overview | Building secure status | Confirmed on hand / assigned | 5 operable North Wall windows included in initial operable-window coverage; final onsite numbering to verify |
| BKLF-EW-001 | Sonoff SenseGuard Gen 2 Contact Sensor | East Wall Double Door Left Contact | East Wall | Door Contact, Exterior | Zigbee / Sonoff SenseGuard Gen 2 | Battery | Exterior, Security, Overview | Building secure status | Confirmed on hand / assigned | East Wall double door; one contact sensor on left door leaf |
| BKLF-EW-002 | Sonoff SenseGuard Gen 2 Contact Sensor | East Wall Double Door Right Contact | East Wall | Door Contact, Exterior | Zigbee / Sonoff SenseGuard Gen 2 | Battery | Exterior, Security, Overview | Building secure status | Confirmed on hand / assigned | East Wall double door; one contact sensor on right door leaf |
| BKLF-EW-003 | Sonoff SenseGuard Gen 2 Contact Sensor | East Wall Window 01 | East Wall | Window Contact, Exterior, Deferred | Zigbee / Sonoff SenseGuard Gen 2 | Battery | Exterior, Security Notes | Deferred coverage | Deferred | 1 operable East Wall window; contact sensor deferred until additional contact sensors arrive |
| BKLF-EW-004 | Kwikset Home Connect 620 Z-Wave Lock | Bailey Double Doors Lock | East Wall / East Entrance | Door Lock, Z-Wave, Critical, Exterior | Z-Wave JS UI | Battery | Mobile Locks, Desktop Dashboard, Desktop Doors & Locks, Security / Activity | Bailey Double Doors owner-managed access workflow, access event logging | Paired / named / dashboard mapped | Entities: `lock.east_wall_bailey_double_doors`, `sensor.east_wall_bailey_double_doors_battery_level`, `binary_sensor.east_wall_bailey_double_doors_lock_jammed`, `binary_sensor.east_wall_bailey_double_doors_tampering_product_cover_removed`, `sensor.east_wall_bailey_double_doors_node_status` |
| BKLF-EW-005 | Reolink D340P PoE Doorbell / Camera | Bailey Double Doors Doorbell | East Wall / East Entrance | Camera, Doorbell, PoE, Ethernet, Critical, Exterior | Reolink | PoE | Mobile Cameras, Desktop Dashboard, Desktop Cameras, Desktop Doors & Locks, Security / Activity | Bailey Double Doors visitor/activity awareness | Paired / named / dashboard mapped | Entities: `camera.east_wall_bailey_double_door_fluent`, `binary_sensor.east_wall_bailey_double_door_visitor`, `binary_sensor.east_wall_bailey_double_door_person`, `binary_sensor.east_wall_bailey_double_door_motion`, `binary_sensor.east_wall_bailey_double_door_vehicle`, `binary_sensor.east_wall_bailey_double_door_pet`, `siren.east_wall_bailey_double_door_siren`, `switch.east_wall_bailey_double_door_record`, `switch.east_wall_bailey_double_door_push_notifications`, `switch.east_wall_bailey_double_door_doorbell_button_sound`, `number.east_wall_bailey_double_door_speak_volume`, `number.east_wall_bailey_double_door_doorbell_volume` |
| BKLF-MH-001 | Third Reality Zigbee Smart Plug | South Entrance Lamp | Main Hallway / South Entrance | Lamp Control, Zigbee, Utility | Zigbee / Third Reality | AC | Mobile More, Mobile Security, Desktop Dashboard, Desktop System / More | Customer-facing lamp on/off control | Paired / named / dashboard mapped | Entities: `switch.south_entrance_lamp`, `sensor.south_entrance_lamp_power`, `sensor.south_entrance_lamp_voltage`, `sensor.south_entrance_lamp_current`, `sensor.south_entrance_lamp_summation_delivered` |
| BKLF-WW-001 | Sonoff SenseGuard Gen 2 Contact Sensor | West Wall Door Contact | West Wall | Door Contact, Exterior | Zigbee / Sonoff SenseGuard Gen 2 | Battery | Exterior, Security, Overview | Building secure status | Confirmed on hand / assigned | West service entrance |
| BKLF-WW-002 | Sonoff SenseGuard Gen 2 Contact Sensor | West Wall Window 01 | West Wall | Window Contact, Exterior, Deferred | Zigbee / Sonoff SenseGuard Gen 2 | Battery | Exterior, Security Notes | Deferred coverage | Deferred | 1 operable West Wall window; contact sensor deferred until additional contact sensors arrive |
| BKLF-INT-001 | Sonoff SNZB-03P Motion Sensor | Viewing Room Motion 01 | Viewing Room | Motion Sensor, Interior | Zigbee / Sonoff SNZB-03P | Battery | Security, Activity, Overview | Interior activity awareness | Confirmed on hand / assigned | Planned viewing-room placement; covers a vulnerable interior movement area |
| BKLF-INT-002 | Sonoff SNZB-03P Motion Sensor | Main Hallway Motion 01 | Main Hallway | Motion Sensor, Interior | Zigbee / Sonoff SNZB-03P | Battery | Security, Activity, Overview | Interior activity awareness | Confirmed on hand / assigned | Planned hallway placement; covers a vulnerable interior movement path |
| BKLF-FIXED-001 | Fixed Picture Window | Conference Room Fixed Picture Window 01 | East Wall / Conference Room | Exterior, Fixed Window | Future impact/shock-type sensor placeholder | None | Exterior, Security Notes | Future impact/shock-type sensor placeholder | Existing building feature | East Wall fixed picture window; no contact sensor; no glass-break sensor in active deployment |
| BKLF-FIXED-002 | Fixed Picture Window | Conference Room Fixed Picture Window 02 | East Wall / Conference Room | Exterior, Fixed Window | Future impact/shock-type sensor placeholder | None | Exterior, Security Notes | Future impact/shock-type sensor placeholder | Existing building feature | East Wall fixed picture window; no contact sensor; no glass-break sensor in active deployment |

Count summary:

- 14 total windows exist.
- 12 operable windows require contact sensors for full operable-window coverage.
- 2 fixed picture windows are planned for future impact/shock-type sensors.
- 16 total contact sensors are needed for full exterior door + operable-window contact coverage:
  - 4 exterior door contacts
  - 12 operable window contacts
- 14 contact sensors are currently on hand:
  - 4 assigned to exterior doors
  - 10 assigned to initial operable-window coverage
- 2 operable-window contact sensors are deferred.
- 2 Sonoff SNZB-03P motion sensors confirmed on hand.
- 2 fixed picture windows planned for future impact/shock-type sensors.
- No glass-break sensors in the active deployment.

Corrected window distribution:

- South Wall: 5 operable windows.
- North Wall: 5 operable windows.
- East Wall: 1 operable window.
- West Wall: 1 operable window.
- East Wall: 2 fixed picture windows.

Contact sensor allocation:

- Exterior doors:
  - East Wall double door: 2 contact sensors, one per door leaf.
  - South Wall door: 1 contact sensor.
  - West Wall door: 1 contact sensor.
- Operable windows:
  - 10 contact sensors available for initial North Wall and South Wall operable-window coverage.
  - 2 additional operable-window contact sensors are deferred until additional contact sensors arrive.
- Future fixed picture window sensors:
  - 2 East Wall fixed picture windows are planned for future impact/shock-type sensors.
  - Fixed picture windows are not contact-sensor windows.
  - Fixed picture windows are not glass-break sensors in the active deployment.

---

## 4. Status Values

- Planned: Device or entity is expected but not yet confirmed onsite or configured.
- Confirmed on hand: Hardware is physically available for the deployment.
- Installed: Hardware is physically installed in the intended location.
- Paired: Device has been paired or added to Home Assistant.
- Named: Device and primary entities have been renamed according to the approved naming convention.
- Dashboard mapped: Device or entity has been placed on the intended dashboard panel.
- Automation mapped: Device or entity has been assigned to the intended automation or workflow.
- Tested: Device, entity, dashboard placement, and workflow behavior have been verified.
- Deferred: Device, entity, or mapping is intentionally held for later scope.
- Removed: Device or entity was removed from active deployment and the reason is recorded.

---

## 5. Dashboard Mapping Summary

| Dashboard Panel | Devices / Entities Included | Purpose |
|---|---|---|
| Overview | South Wall doorbell, South Wall lock, installed exterior contact status, deferred coverage summary, motion summary, camera status, infrastructure status | High-level first-floor status and owner-priority summary |
| Exterior | Active South Wall and North Wall window contacts, active exterior door contacts, deferred East/West operable-window contacts, South Wall corner camera, East Wall fixed picture window future sensor placeholders | Building-envelope status by wall orientation with Active / Deferred distinction |
| Entrances | South Wall doorbell, South Wall lock, South Wall door contact, East Wall double-door contacts, West Wall door contact | Exterior entry status and owner-managed South Entrance access workflow |
| Cameras | Reolink PoE Video Doorbell, Reolink Dual-Lens PoE Camera | Camera live view, camera status, and camera-related activity |
| Cameras / East Entrance | Bailey Double Doors Doorbell | East entrance live view, doorbell status, and visitor/person/motion activity |
| Security | Active door contacts, active window contacts, deferred window contacts as planned coverage, motion sensors, lock status, battery status | Owner-managed first-floor security and opening-state review |
| Lighting / Utility | South Entrance Lamp | Simple customer-facing lamp control and current on/off status |
| Activity | Doorbell events, lock events, door contact events, window contact events, motion events, relevant availability events | Recent activity history for owner and service review |
| Infrastructure / Administration | Home Assistant Green, Z-Wave controller, Zigbee controller, network/PoE hardware when visible, backups, integration health | System administration, support, and backup readiness |

---

## 6. Automation Membership Summary

| Automation / Workflow | Member Devices / Entities | Purpose | Status |
|---|---|---|---|
| South Entrance owner-managed access workflow | South Wall Doorbell, South Wall Lock, South Wall Door Contact | Visitor awareness, owner review, remote unlock, access event logging, and door state confirmation | Planned |
| Bailey Double Doors owner-managed access workflow | Bailey Double Doors Doorbell, Bailey Double Doors Lock, East Wall double-door contacts | Visitor awareness, owner review, remote unlock, access event logging, and door state confirmation | Dashboard mapped |
| Door re-lock timer | South Wall Lock, South Wall Door Contact | Return the South Entrance lock to locked state after the configured owner-approved interval | Planned |
| Building secure status | South Wall Door Contact, East Wall Double Door Left Contact, East Wall Double Door Right Contact, West Wall Door Contact, active South Wall Window 01-05, active North Wall Window 01-05 | Summarize installed first-floor opening status for owner review; deferred operable-window contacts are excluded until installed | Planned |
| After-hours activity notification | Viewing Room Motion 01, Main Hallway Motion 01, exterior door contacts, South Wall Doorbell | Notify owner of relevant after-hours activity based on final schedule settings | Planned |
| Device offline notification | Home Assistant Green, Z-Wave controller, Zigbee controller, Reolink cameras, paired battery sensors when available | Surface device availability problems for owner or service review | Planned |
| Low battery notification | South Wall Lock, door contacts, window contacts, motion sensors | Surface low-battery devices before failure | Planned |
| Backup checkpoint reminder | Home Assistant Green | Remind operator to create backups at defined configuration milestones | Planned |

---

## 7. Open Verification Items

- Confirm final contact sensor model/protocol.
- Confirm final onsite window numbering.
- Confirm final impact/shock sensor model for fixed picture windows.
- Confirm final motion sensor placement.
- Confirm South Wall corner camera exact model.
- Confirm whether second Kwikset lock is installed in scope or retained as spare/future expansion.
- Confirm final PoE/network switch plan.
- Confirm UPS availability.

---

## 8. Safe Scope Boundaries

- First-floor deployment only.
- No second-floor device coverage in this deployment.
- No HVAC or thermostat automation in this deployment.
- No lighting automation in this deployment.
- No Prepare for Funeral mode.
- No third-party response-center service.
- No public-safety agency response workflow.
- No prevention guarantee language.
- Existing camera systems remain outside this deployment unless separately approved.
- No glass-break sensors in the active deployment.

---

## HA-BACKUP002 Latest Backup Refresh

Task ID: `HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001`
Backup evidence date: `2026-07-09T23:47:29.850048+00:00`
Extraction date: `2026-07-09T23:14:00-04:00`

Latest backup extraction confirmed the repo-controlled BKLF YAML files are byte-identical to the backup copies:

| File | Backup vs repo | Result |
| --- | --- | --- |
| `configuration.yaml` | Same | No repo YAML update required. |
| `bklf-main-dashboard.yaml` | Same | No repo YAML update required. |
| `bklf-desktop-dashboard.yaml` | Same | No repo YAML update required. |
| `wnyhs-light.yaml` | Same | No repo YAML update required. |
| `wnyhs-dark.yaml` | Same | No repo YAML update required. |
| `bklf_notifications.yaml` | Same | No repo YAML update required. |
| `bklf_security.yaml` | Same | No repo YAML update required. |

Support-data updates from this extraction are recorded under `docs/home-assistant/bklf/inventory/`. Confirmed latest-backup facts include 12 areas, 56 devices, 1,026 entities, 27 config entries, four Companion app registrations, two person records, Bailey Double Doors lock and doorbell, South Entrance Lamp, both BKLF dashboards, both WNYHS HA themes, and the disabled notification scaffold package. No dashboard redesign, entity rename, notification routing change, automation enablement, user/permission change, or live Home Assistant change is authorized by this refresh.
