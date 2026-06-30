# Brian K. Lewis Funeral Home Home Assistant Live Build Checklist

Status: Active
Customer: Brian K. Lewis Funeral Home
Scope: First-floor Home Assistant Green bench-build checklist

---

## 1. Purpose

This is the operator checklist for bench-configuring the physical Home Assistant Green before onsite installation at Brian K. Lewis Funeral Home.

It converts the approved area model, entity register, dashboard specification, and sensor allocation notes into a setup sequence for areas, labels, integrations, devices, entities, dashboard shells, backups, and validation checkpoints.

This is documentation and checklist guidance only. It does not authorize live Home Assistant configuration files, app code changes, website copy changes, route changes, Stripe/payment changes, scheduling changes, API/backend changes, customer proposal changes, deployment config changes, dependency changes, or package-lock changes.

---

## 2. Deployment Context

- Customer: Brian K. Lewis Funeral Home
- Address: 2528 Bailey Ave Suite 1, Buffalo, NY 14215
- Scope: First-floor-only security, access, and building awareness
- Controller: Home Assistant Green
- HA version: 16.3
- Storage: 32GB built-in
- Network Closet: Physically located in Conference Room
- Primary owner-managed remote-entry workflow: South Entrance

---

## 3. Bench-Build Rules

- [ ] Build and test as much as possible before install day.
- [ ] Do not mount sensors during bench build.
- [ ] Do not finalize window numbering until onsite verification.
- [ ] Use physical labels on every sensor before pairing.
- [ ] Pair one device at a time.
- [ ] Rename each device/entity immediately after pairing.
- [ ] Assign area and labels immediately after pairing.
- [ ] Record every paired device in the entity register.
- [ ] Take backups at defined checkpoints.

---

## 4. Physical Staging Checklist

- [ ] Lay out Home Assistant Green.
- [ ] Lay out Zooz ZST39.
- [ ] Lay out Sonoff Zigbee dongle.
- [ ] Lay out Reolink doorbell.
- [ ] Lay out Reolink camera.
- [ ] Lay out Kwikset lock.
- [ ] Lay out contact sensors.
- [ ] Lay out motion sensors.
- [ ] Label 14 contact sensors C01-C14.
- [ ] Label 2 motion sensors M01-M02.
- [ ] Keep each contact sensor magnet with its matching sensor.
- [ ] Confirm batteries are installed.
- [ ] Confirm each device powers on.
- [ ] Keep packaging until device pairing is confirmed.
- [ ] Create physical staging table.

Physical staging table:

| Item | Physical Label | Power Confirmed | Packaging Retained | Pairing Status | Notes |
|---|---|---|---|---|---|
| Home Assistant Green | Network Closet Home Assistant Green |  |  |  |  |
| Zooz ZST39 | Network Closet Z-Wave Controller |  |  |  |  |
| Sonoff Zigbee dongle | Network Closet Zigbee Controller |  |  |  |  |
| Reolink doorbell | South Wall Doorbell |  |  |  |  |
| Reolink camera | South Wall Corner Camera |  |  |  |  |
| Kwikset lock | South Wall Lock |  |  |  |  |
| Contact sensors | C01-C14 |  |  |  |  |
| Motion sensors | M01-M02 |  |  |  |  |

---

## 5. Physical Sensor Allocation Table

| Physical ID | Device Model | Planned Location | HA Friendly Name | Status | Notes |
|---|---|---|---|---|---|
| C01 | Sonoff SenseGuard Gen 2 Contact Sensor | East Wall double door, left leaf | East Wall Door Contact Left | Confirmed on hand / assigned | Pair as first East Wall double-door contact. |
| C02 | Sonoff SenseGuard Gen 2 Contact Sensor | East Wall double door, right leaf | East Wall Door Contact Right | Confirmed on hand / assigned | Pair as second East Wall double-door contact. |
| C03 | Sonoff SenseGuard Gen 2 Contact Sensor | South Wall door | South Wall Door Contact | Confirmed on hand / assigned | South Entrance workflow member. |
| C04 | Sonoff SenseGuard Gen 2 Contact Sensor | West Wall door | West Wall Door Contact | Confirmed on hand / assigned | West service entrance contact. |
| C05 | Sonoff SenseGuard Gen 2 Contact Sensor | Initial North/South operable-window coverage; final wall/window assignment onsite | North/South Wall Window Contact 01 | Confirmed on hand / assigned | Do not finalize wall/window number until onsite verification. |
| C06 | Sonoff SenseGuard Gen 2 Contact Sensor | Initial North/South operable-window coverage; final wall/window assignment onsite | North/South Wall Window Contact 02 | Confirmed on hand / assigned | Do not finalize wall/window number until onsite verification. |
| C07 | Sonoff SenseGuard Gen 2 Contact Sensor | Initial North/South operable-window coverage; final wall/window assignment onsite | North/South Wall Window Contact 03 | Confirmed on hand / assigned | Do not finalize wall/window number until onsite verification. |
| C08 | Sonoff SenseGuard Gen 2 Contact Sensor | Initial North/South operable-window coverage; final wall/window assignment onsite | North/South Wall Window Contact 04 | Confirmed on hand / assigned | Do not finalize wall/window number until onsite verification. |
| C09 | Sonoff SenseGuard Gen 2 Contact Sensor | Initial North/South operable-window coverage; final wall/window assignment onsite | North/South Wall Window Contact 05 | Confirmed on hand / assigned | Do not finalize wall/window number until onsite verification. |
| C10 | Sonoff SenseGuard Gen 2 Contact Sensor | Initial North/South operable-window coverage; final wall/window assignment onsite | North/South Wall Window Contact 06 | Confirmed on hand / assigned | Do not finalize wall/window number until onsite verification. |
| C11 | Sonoff SenseGuard Gen 2 Contact Sensor | Initial North/South operable-window coverage; final wall/window assignment onsite | North/South Wall Window Contact 07 | Confirmed on hand / assigned | Do not finalize wall/window number until onsite verification. |
| C12 | Sonoff SenseGuard Gen 2 Contact Sensor | Initial North/South operable-window coverage; final wall/window assignment onsite | North/South Wall Window Contact 08 | Confirmed on hand / assigned | Do not finalize wall/window number until onsite verification. |
| C13 | Sonoff SenseGuard Gen 2 Contact Sensor | Initial North/South operable-window coverage; final wall/window assignment onsite | North/South Wall Window Contact 09 | Confirmed on hand / assigned | Do not finalize wall/window number until onsite verification. |
| C14 | Sonoff SenseGuard Gen 2 Contact Sensor | Initial North/South operable-window coverage; final wall/window assignment onsite | North/South Wall Window Contact 10 | Confirmed on hand / assigned | Do not finalize wall/window number until onsite verification. |
| M01 | Sonoff SNZB-03P Motion Sensor | Main Hallway | Main Hallway Motion 01 | Confirmed on hand / assigned | Final placement to verify onsite. |
| M02 | Sonoff SNZB-03P Motion Sensor | Viewing Room | Viewing Room Motion 01 | Confirmed on hand / assigned | Final placement to verify onsite. |

Notes:

- 14 Sonoff SenseGuard Gen 2 contact sensors are confirmed on hand.
- 2 Sonoff SNZB-03P motion sensors are confirmed on hand.
- 4 contact sensors are assigned to exterior doors.
- 10 contact sensors are assigned to initial North/South operable-window coverage.
- 2 operable-window contacts are deferred.
- Two additional operable-window contacts are deferred until more contact sensors arrive.
- Two East Wall fixed picture windows are future impact/shock-type sensor placeholders.

---

## 6. HA Green Base Setup

- [ ] Power Home Assistant Green.
- [ ] Confirm network connection.
- [ ] Access Home Assistant locally.
- [ ] Create/admin owner account.
- [ ] Confirm timezone `America/New_York`.
- [ ] Confirm unit system.
- [ ] Confirm HA version `16.3`.
- [ ] Confirm storage is 32GB built-in.
- [ ] Confirm local IP.
- [ ] Record network details.
- [ ] Confirm local dashboard access.

Network details:

| Field | Value / Notes |
|---|---|
| Local IP |  |
| Local URL |  |
| Network connection type |  |
| Reserved DHCP/static-IP plan |  |
| Timezone confirmed |  |
| Unit system confirmed |  |
| HA version confirmed |  |
| Storage confirmed |  |

---

## 7. Areas Creation Checklist

Create exactly these areas.

Exterior:

- [ ] North Wall
- [ ] South Wall
- [ ] East Wall
- [ ] West Wall

Interior:

- [ ] Viewing Room
- [ ] Conference Room
- [ ] Main Hallway
- [ ] Private Room
- [ ] West Hallway Jog
- [ ] Restroom East
- [ ] Restroom West

Infrastructure:

- [ ] Network Closet

Note: Network Closet is operationally its own area but physically located inside Conference Room.

---

## 8. Labels Creation Checklist

Create exactly these labels.

- [ ] Camera
- [ ] Door Lock
- [ ] Door Contact
- [ ] Window Contact
- [ ] Motion Sensor
- [ ] Infrastructure
- [ ] Z-Wave
- [ ] Zigbee
- [ ] Ethernet
- [ ] PoE
- [ ] Critical
- [ ] Battery Powered
- [ ] Exterior
- [ ] Interior
- [ ] Deferred

---

## 9. Integration Setup Sequence

Build in this exact order:

1. [ ] Home Assistant core confirmation
2. [ ] Z-Wave JS UI for Zooz ZST39
3. [ ] Zigbee integration: Zigbee2MQTT preferred, ZHA acceptable if simpler
4. [ ] Reolink integration
5. [ ] Home Assistant mobile app
6. [ ] Backup/export tools
7. [ ] Optional HACS only after core devices are stable

---

## 10. Device Pairing Sequence

Pair and verify in this exact order:

1. [ ] Zooz ZST39
2. [ ] Sonoff Zigbee dongle
3. [ ] Reolink PoE doorbell
4. [ ] Reolink dual-lens PoE camera
5. [ ] Kwikset Home Connect 620 lock
6. [ ] Sonoff SenseGuard Gen 2 contact sensors one at a time
7. [ ] Sonoff SNZB-03P motion sensors one at a time

Per-device pairing rule:

- [ ] Pair one device.
- [ ] Rename device.
- [ ] Rename primary entity/entities.
- [ ] Assign area.
- [ ] Assign labels.
- [ ] Confirm primary state updates.
- [ ] Record in entity register.
- [ ] Continue to next device only after the current device is clean.

---

## 11. Naming Rules During Pairing

- Use wall-based names for exterior envelope devices.
- Use room-based names for interior devices.
- Use Network Closet names for infrastructure.
- Use no generic entity names.
- Do not leave default names.
- Do not rename after dashboards/automations are built unless documented.

Examples:

- Network Closet Z-Wave Controller
- Network Closet Zigbee Controller
- South Wall Doorbell
- South Wall Corner Camera
- South Wall Lock
- South Wall Door Contact
- East Wall Door Contact Left
- East Wall Door Contact Right
- Main Hallway Motion 01
- Viewing Room Motion 01

---

## 12. Initial Dashboard Shell Checklist

Create dashboard shells only at this phase.

### Overview

- [ ] Building Secure placeholder for installed sensors only
- [ ] South Entrance status placeholder
- [ ] Active alerts placeholder
- [ ] Camera status placeholder
- [ ] Infrastructure health placeholder
- [ ] Recent activity placeholder

### Exterior

- [ ] South Wall section
- [ ] North Wall section
- [ ] East Wall section
- [ ] West Wall section
- [ ] Active contact sensor placeholders
- [ ] Deferred operable-window contact placeholders
- [ ] Future fixed picture window sensor placeholders

### Entrances

- [ ] South Entrance section
- [ ] East Entrance section
- [ ] West Service Entrance section
- [ ] Door contact placeholders
- [ ] Lock state placeholder
- [ ] Recent access activity placeholder

### Cameras

- [ ] South Wall Doorbell placeholder
- [ ] South Wall Corner Camera placeholder
- [ ] Camera online/offline status placeholder
- [ ] Recent camera activity placeholder

### Security

- [ ] Door contact status placeholder
- [ ] Window contact status placeholder
- [ ] Motion status placeholder
- [ ] Lock state placeholder
- [ ] Battery status placeholder
- [ ] Deferred coverage note section

### Activity

- [ ] Doorbell event placeholder
- [ ] Lock event placeholder
- [ ] Door/window event placeholder
- [ ] Motion event placeholder
- [ ] System event placeholder
- [ ] Low battery/offline device placeholder

### Infrastructure / Administration

- [ ] Home Assistant Green status placeholder
- [ ] Z-Wave controller status placeholder
- [ ] Zigbee controller status placeholder
- [ ] Reolink integration status placeholder
- [ ] Network status placeholder
- [ ] Backup checkpoint placeholder
- [ ] Storage/update status placeholder

---

## 13. South Entrance Bench Workflow Checklist

- [ ] Confirm South Wall Doorbell is online.
- [ ] Confirm South Wall Lock is online.
- [ ] Confirm South Wall Door Contact is online.
- [ ] Create dashboard card showing doorbell, lock state, and door state.
- [ ] Prepare notification workflow for mobile app.
- [ ] Prepare remote unlock workflow.
- [ ] Prepare re-lock timer workflow.
- [ ] Do not claim or describe response-center or public-safety agency workflows.

---

## 14. Backup Checkpoints

- [ ] Backup after base HA setup.
- [ ] Backup after areas/labels.
- [ ] Backup after integrations.
- [ ] Backup after cameras.
- [ ] Backup after lock.
- [ ] Backup after contact sensors.
- [ ] Backup after motion sensors.
- [ ] Backup after dashboard shell.
- [ ] Backup before onsite install.

Backup log:

| Checkpoint | Backup Name / Timestamp | Verified Restore Point | Notes |
|---|---|---|---|
| Base HA setup |  |  |  |
| Areas/labels |  |  |  |
| Integrations |  |  |  |
| Cameras |  |  |  |
| Lock |  |  |  |
| Contact sensors |  |  |  |
| Motion sensors |  |  |  |
| Dashboard shell |  |  |  |
| Before onsite install |  |  |  |

---

## 15. Bench Validation Checklist

- [ ] Home Assistant Green reachable locally.
- [ ] Areas created.
- [ ] Labels created.
- [ ] Z-Wave controller online.
- [ ] Zigbee controller online.
- [ ] Reolink doorbell online.
- [ ] Reolink corner camera online.
- [ ] Lock paired and reports status.
- [ ] Each paired contact sensor reports open/closed.
- [ ] Each paired motion sensor reports motion/clear.
- [ ] Dashboard shell loads.
- [ ] Backup created.
- [ ] Entity register updated.

Validation notes:

| Item | Pass / Fail / Deferred | Notes |
|---|---|---|
| Local HA access |  |  |
| Areas |  |  |
| Labels |  |  |
| Z-Wave controller |  |  |
| Zigbee controller |  |  |
| Reolink doorbell |  |  |
| Reolink corner camera |  |  |
| Kwikset lock |  |  |
| Contact sensors |  |  |
| Motion sensors |  |  |
| Dashboard shell |  |  |
| Backup |  |  |
| Entity register |  |  |

---

## 16. Onsite Carry-Forward Items

- [ ] Final window numbering.
- [ ] Final C05-C14 placement.
- [ ] Two deferred operable-window contacts.
- [ ] Future East Wall fixed picture impact/shock sensors.
- [ ] PoE/network switch finalization.
- [ ] UPS availability.
- [ ] Owner mobile app login/authentication.
- [ ] Final notification testing.
- [ ] Final dashboard cleanup.

---

## 17. Safe Scope Boundaries

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
