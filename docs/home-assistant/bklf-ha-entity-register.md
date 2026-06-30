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

---

## 3. Master Entity Register Table

| Register ID | Physical Device | Expected HA Entity / Friendly Name | Area | Label(s) | Protocol / Integration | Power Type | Dashboard Panel | Automation Membership | Install Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| BKLF-INF-001 | Home Assistant Green | Network Closet Home Assistant Green | Network Closet | Infrastructure, Critical, Ethernet | Home Assistant Core | AC/Ethernet | Infrastructure / Administration | System health, backup checkpoints | Confirmed on hand | HA Green powered on, network-connected, HA 16.3, 32GB built-in storage |
| BKLF-INF-002 | Zooz ZST39 800LR USB Stick | Network Closet Z-Wave Controller | Network Closet | Infrastructure, Critical, Z-Wave | Z-Wave JS UI | USB | Infrastructure / Administration | Z-Wave network health | Confirmed on hand | Used for Kwikset lock and any Z-Wave devices |
| BKLF-INF-003 | Sonoff Zigbee 3.0 USB Dongle Plus-E / ZBDongle-E | Network Closet Zigbee Controller | Network Closet | Infrastructure, Critical, Zigbee | Zigbee2MQTT preferred / ZHA acceptable | USB | Infrastructure / Administration | Zigbee network health | Confirmed on hand | Substitute for Home Assistant Connect ZBT-2 |
| BKLF-SW-001 | Reolink PoE Video Doorbell | South Wall Doorbell | South Wall | Camera, PoE, Ethernet, Critical, Exterior | Reolink | PoE | Entrances, Cameras, Overview | South Entrance owner-managed access workflow | Confirmed on hand | Primary visitor awareness and remote entry camera |
| BKLF-SW-002 | Kwikset Home Connect 620 Z-Wave Plus LR Smart Lock | South Wall Lock | South Wall | Door Lock, Z-Wave, Critical, Exterior | Z-Wave JS UI | Battery | Entrances, Security, Overview | South Entrance owner-managed access workflow, auto-relock, access event logging | Confirmed on hand | Primary remote-entry lock |
| BKLF-SW-003 | Door Contact Sensor | South Wall Door Contact | South Wall | Door Contact, Exterior | TBD | Battery | Entrances, Security, Overview | South Entrance workflow, building secure status | Planned | Sensor type pending final hardware |
| BKLF-SW-004 | Reolink Dual-Lens PoE Camera | South Wall Corner Camera | South Wall | Camera, PoE, Ethernet, Critical, Exterior | Reolink | PoE | Cameras, Exterior, Overview | South Wall exterior activity awareness | Confirmed on hand | Added outside original proposal scope |
| BKLF-SW-005 through BKLF-SW-009 | Window Contact Sensors | South Wall Window 01 through South Wall Window 05 | South Wall | Window Contact, Exterior | TBD | Battery | Exterior, Security, Overview | Building secure status | Planned | 5 operable South Wall windows; final onsite numbering to verify |
| BKLF-NW-001 through BKLF-NW-005 | Window Contact Sensors | North Wall Window 01 through North Wall Window 05 | North Wall | Window Contact, Exterior | TBD | Battery | Exterior, Security, Overview | Building secure status | Planned | Final window count/location to verify onsite |
| BKLF-EW-001 | Door Contact Sensor | East Wall Door Contact | East Wall | Door Contact, Exterior | TBD | Battery | Exterior, Security, Overview | Building secure status | Planned | East exterior entrance |
| BKLF-EW-002 | Window Contact Sensor | East Wall Window 01 | East Wall | Window Contact, Exterior | TBD | Battery | Exterior, Security, Overview | Building secure status | Planned | 1 operable East Wall window; final onsite numbering to verify |
| BKLF-WW-001 | Door Contact Sensor | West Wall Door Contact | West Wall | Door Contact, Exterior | TBD | Battery | Exterior, Security, Overview | Building secure status | Planned | West service entrance |
| BKLF-WW-002 | Window Contact Sensor | West Wall Window 01 | West Wall | Window Contact, Exterior | TBD | Battery | Exterior, Security, Overview | Building secure status | Planned | Final window count/location to verify onsite |
| BKLF-INT-001 | Motion Sensor | Viewing Room Motion 01 | Viewing Room | Motion Sensor, Interior | TBD | Battery | Security, Activity, Overview | Interior activity awareness | Planned | Final placement to verify onsite |
| BKLF-INT-002 | Motion Sensor | Main Hallway Motion 01 | Main Hallway | Motion Sensor, Interior | TBD | Battery | Security, Activity, Overview | Interior activity awareness | Planned | Final placement to verify onsite |
| BKLF-FIXED-001 | Fixed Picture Window | Conference Room Fixed Picture Window 01 | East Wall / Conference Room | Exterior, Fixed Window | Future impact/shock-type sensor placeholder | None | Exterior, Security Notes | Future impact/shock-type sensor placeholder | Existing building feature | East Wall fixed picture window; no contact sensor; no glass-break sensor in active deployment |
| BKLF-FIXED-002 | Fixed Picture Window | Conference Room Fixed Picture Window 02 | East Wall / Conference Room | Exterior, Fixed Window | Future impact/shock-type sensor placeholder | None | Exterior, Security Notes | Future impact/shock-type sensor placeholder | Existing building feature | East Wall fixed picture window; no contact sensor; no glass-break sensor in active deployment |

Count summary:

- 14 total windows documented.
- 12 operable windows planned for contact sensors.
- 3 exterior doors planned for contact sensors.
- 2 motion sensors planned.
- 2 fixed picture windows planned for future impact/shock-type sensors.
- No glass-break sensors in the active deployment.

Corrected window distribution:

- South Wall: 5 operable windows.
- North Wall: 5 operable windows.
- East Wall: 1 operable window.
- West Wall: 1 operable window.
- East Wall: 2 fixed picture windows.

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
| Overview | South Wall doorbell, South Wall lock, exterior contact status, motion summary, camera status, infrastructure status | High-level first-floor status and owner-priority summary |
| Exterior | North Wall, South Wall, East Wall, and West Wall door/window contacts; South Wall corner camera; East Wall fixed picture window future sensor placeholders | Building-envelope status by wall orientation |
| Entrances | South Wall doorbell, South Wall lock, South Wall door contact, East Wall door contact, West Wall door contact | Exterior entry status and owner-managed South Entrance access workflow |
| Cameras | Reolink PoE Video Doorbell, Reolink Dual-Lens PoE Camera | Camera live view, camera status, and camera-related activity |
| Security | Door contacts, window contacts, motion sensors, lock status, battery status | Owner-managed first-floor security and opening-state review |
| Activity | Doorbell events, lock events, door contact events, window contact events, motion events, relevant availability events | Recent activity history for owner and service review |
| Infrastructure / Administration | Home Assistant Green, Z-Wave controller, Zigbee controller, network/PoE hardware when visible, backups, integration health | System administration, support, and backup readiness |

---

## 6. Automation Membership Summary

| Automation / Workflow | Member Devices / Entities | Purpose | Status |
|---|---|---|---|
| South Entrance owner-managed access workflow | South Wall Doorbell, South Wall Lock, South Wall Door Contact | Visitor awareness, owner review, remote unlock, access event logging, and door state confirmation | Planned |
| Door re-lock timer | South Wall Lock, South Wall Door Contact | Return the South Entrance lock to locked state after the configured owner-approved interval | Planned |
| Building secure status | South Wall Door Contact, East Wall Door Contact, West Wall Door Contact, all operable window contacts | Summarize first-floor opening status for owner review | Planned |
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
