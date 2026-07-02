# BKLF Home Assistant Onsite Install Placement Sheet

Status: Active
Customer/project: Brian K. Lewis Funeral Home
Scope: BKLF onsite install placement sheet for active exterior contacts and first-floor devices

---

## Purpose

This printable sheet gives the technician the active exterior contact placement map, deferred sensor notes, South Entrance devices, final onsite test checklist, and open notes space.

---

## Install Coverage Note

This install sheet covers the first-floor deployment plus the active Upstairs Back Porch Door contact now being installed.

---

## Contact Sensor Placement Table

| Physical ID | Placement | Device type | Area | Installed | Tested | Notes |
|---|---|---|---|---|---|---|
| C01 | South Wall Door Contact | Sonoff SenseGuard Gen 2 Contact Sensor | South Wall |  |  | South Entrance workflow member |
| C02 | Deferred spare contact | Sonoff SenseGuard Gen 2 Contact Sensor | Deferred | No | No | Not part of the final customer dashboard |
| C03 | Deferred spare contact | Sonoff SenseGuard Gen 2 Contact Sensor | Deferred | No | No | Not part of the final customer dashboard |
| C04 | Deferred spare contact | Sonoff SenseGuard Gen 2 Contact Sensor | Deferred | No | No | Not part of the final customer dashboard |
| C05 | North Wall Window 1 | Sonoff SenseGuard Gen 2 Contact Sensor | North Wall |  |  |  |
| C06 | North Wall Window 2 | Sonoff SenseGuard Gen 2 Contact Sensor | North Wall |  |  |  |
| C07 | North Wall Window 3 | Sonoff SenseGuard Gen 2 Contact Sensor | North Wall |  |  |  |
| C08 | North Wall Window 4 | Sonoff SenseGuard Gen 2 Contact Sensor | North Wall |  |  |  |
| C09 | West Service Door | Sonoff SenseGuard Gen 2 Contact Sensor | West Wall |  |  | Active secure-status contact |
| C10 | Front Double Door - Left | Sonoff SenseGuard Gen 2 Contact Sensor | Front Entrance |  |  | Active secure-status contact |
| C11 | Front Double Door - Right | Sonoff SenseGuard Gen 2 Contact Sensor | Front Entrance |  |  | Active secure-status contact |
| C12 | Upstairs Back Porch Door | Sonoff SenseGuard Gen 2 Contact Sensor | Upstairs Back Porch |  |  | Active secure-status contact |
| C13 | Deferred | Sonoff SenseGuard Gen 2 Contact Sensor | Deferred | No | No | Hold out of customer handoff dashboard and secure-status helpers |
| C14 | Deferred | Sonoff SenseGuard Gen 2 Contact Sensor | Deferred | No | No | Hold out of customer handoff dashboard and secure-status helpers |

---

## Deferred Sensor Table

| Deferred item | Planned future coverage | Notes |
|---|---|---|
| C13 | Future operable-window coverage | Intentionally deferred from customer handoff |
| C14 | Future operable-window coverage | Intentionally deferred from customer handoff |
| Operable-window contact sensor 1 | Future additional contact sensor | Deferred until additional contact sensors are available |
| Operable-window contact sensor 2 | Future additional contact sensor | Deferred until additional contact sensors are available |
| East Wall fixed picture window 1 | Future impact/shock sensor | Not active in this deployment |
| East Wall fixed picture window 2 | Future impact/shock sensor | Not active in this deployment |
| Front double-door lock | Second Kwikset/Home Connect 620 lock | Planned after pairing; not active in dashboard status |

---

## Motion Placement Table

| Physical ID | Placement | Device type | Area | Installed | Tested | Notes |
|---|---|---|---|---|---|---|
| M01 | Main Hallway Motion | Sonoff SNZB-03P Motion Sensor | Main Hallway |  |  | Confirm expected path coverage onsite |
| M02 | Viewing Room Motion | Sonoff SNZB-03P Motion Sensor | Viewing Room |  |  | Confirm expected room coverage onsite |

---

## South Entrance Device Table

| Device | Placement | Area | Installed | Tested | Notes |
|---|---|---|---|---|---|
| South Wall Doorbell | South Entrance / South Wall | South Wall |  |  | Confirm `camera.south_wall_south_entrance_doorbell_fluent` live view after final network placement |
| Parking Lot Camera | Southwest Corner / Parking Lot view | South Wall |  |  | Confirm `camera.south_wall_cam01_southwest_corner_parking_lot_fluent` live view after final network placement |
| South Wall Lock | South Entrance / South Wall | South Wall |  |  | Confirm `lock.south_wall_home_connect_620_connected_smart_lock` lock/unlock and state updates |
| C01 South Wall Door Contact | South Entrance / South Wall door | South Wall |  |  | Confirm contact opens/closes after mounting |

---

## Final Onsite Test Checklist

- [ ] Mount active contact sensors C01, C05-C12.
- [ ] Confirm each active contact sensor opens/closes correctly after mounting.
- [ ] Confirm each active contact sensor magnet aligns correctly.
- [ ] Mount M01 Main Hallway Motion.
- [ ] Mount M02 Viewing Room Motion.
- [ ] Confirm motion sensors detect expected paths.
- [ ] Confirm motion sensors clear after motion stops.
- [ ] Confirm South Wall Doorbell remains reachable after final network placement.
- [ ] Confirm South Wall Corner Camera remains reachable after final network placement.
- [ ] Confirm South Wall Lock locks/unlocks after installation.
- [ ] Confirm South Wall Lock state updates in Home Assistant.
- [ ] Confirm dashboard reflects installed device state.
- [ ] Confirm mobile notification works from customer/operator phone.
- [ ] Confirm West Service Door appears correctly.
- [ ] Confirm Front Double Door - Left appears correctly.
- [ ] Confirm Front Double Door - Right appears correctly.
- [ ] Confirm Upstairs Back Porch Door appears correctly.
- [ ] Confirm deferred sensor notes remain marked as deferred.
- [ ] Confirm C13 and C14 do not appear as active dashboard issues.
- [ ] Create onsite backup after final install.
- [ ] Record onsite backup name and date.

---

## Safe Scope Boundaries

- First-floor deployment plus the Upstairs Back Porch Door contact.
- No additional upstairs device coverage beyond the Upstairs Back Porch Door contact.
- No HVAC or thermostat automation in this deployment.
- No lighting automation in this deployment.
- No Prepare for Funeral mode.
- No third-party response-center service.
- No public-safety agency response workflow.
- No outcome-promise language.
- Existing camera systems remain outside this deployment unless separately approved.
- No glass-break sensors in the active deployment.

---

## Notes

| Note | Owner / Tech Initials | Date |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
