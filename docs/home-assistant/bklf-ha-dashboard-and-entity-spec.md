# Brian K. Lewis Funeral Home Home Assistant Dashboard and Entity Mapping Specification

Status: Active
Customer: Brian K. Lewis Funeral Home
Scope: First-floor Home Assistant dashboard and entity mapping specification

---

## 1. Purpose

This document is the dashboard and entity mapping specification for the Brian K. Lewis Funeral Home Home Assistant build before live dashboard construction.

It converts the approved area model, entity register, and South Entrance workflow into a planning-level dashboard structure so the live Home Assistant dashboard can be built from stable names, areas, panel assignments, and workflow membership.

This is documentation and specification only. It does not authorize app code changes, website copy changes, route changes, Stripe/payment changes, scheduling changes, API/backend changes, customer proposal changes, live Home Assistant configuration files, dashboard YAML, automation YAML, dependencies, package-lock changes, or deployment configuration changes.

---

## 2. Deployment Context

- Customer: Brian K. Lewis Funeral Home
- Address: 2528 Bailey Ave Suite 1, Buffalo, NY 14215
- Deployment boundary: First-floor-only deployment
- Controller: Home Assistant Green
- Home Assistant version: HA 16.3
- Network Closet: Physically located in the Conference Room
- Primary owner-managed remote-entry workflow: South Entrance
- South Wall exterior devices: Reolink PoE Doorbell and South Wall Corner Camera

The Network Closet remains operationally separate for dashboard and administration purposes even though the hardware is physically located inside the Conference Room.

---

## 3. Corrected Building Envelope Counts

- Exterior doors: 3
- Total windows: 14
- Operable windows: 12
- Fixed picture windows: 2
- Motion sensors: 2
- Glass-break sensors: 0 active deployment

Window distribution:

- South Wall: 5 operable windows
- North Wall: 5 operable windows
- East Wall: 1 operable window + 2 fixed picture windows
- West Wall: 1 operable window

The 12 operable windows use contact sensors. The 2 fixed picture windows are documented as future impact/shock-type sensor placeholders and do not receive glass-break sensors in the active deployment.

---

## 4. Area Model

This deployment uses the WNYHS commercial Home Assistant area standard.

Exterior:

- North Wall
- South Wall
- East Wall
- West Wall

Interior:

- Viewing Room
- Conference Room
- Main Hallway
- Private Room
- West Hallway Jog
- Restroom East
- Restroom West

Infrastructure:

- Network Closet

The Network Closet is operationally its own area, but it is physically located inside the Conference Room.

---

## 5. Dashboard Navigation Model

The Home Assistant dashboard should use these panels:

- Overview
- Exterior
- Entrances
- Cameras
- Security
- Activity
- Infrastructure / Administration

The panels should favor owner and service clarity: high-priority state appears in Overview, physical envelope state appears by wall, and support hardware appears in Infrastructure / Administration.

---

## 6. Overview Dashboard Spec

The Overview panel should include:

- Building Secure status
- South Entrance quick status
- Active alerts
- Door/window summary
- Motion summary
- Camera online status
- Lock status
- Recent activity feed
- System health summary

The Overview panel should provide the shortest path to the current first-floor state without requiring the owner to navigate into each device group.

---

## 7. Exterior Dashboard Spec

The Exterior panel should be grouped by wall:

- South Wall
- North Wall
- East Wall
- West Wall

Each wall section should show:

- Door contacts where applicable
- Operable window contacts
- Fixed picture window future sensor placeholders where applicable
- Exterior cameras where applicable
- Active alerts
- Last activity

South Wall should include the South Wall Door Contact, South Wall Window 01 through South Wall Window 05, South Wall Doorbell, and South Wall Corner Camera.

North Wall should include North Wall Window 01 through North Wall Window 05.

East Wall should include the East Wall Door Contact, East Wall Window 01, and the two fixed picture window future impact/shock-type sensor placeholders.

West Wall should include the West Wall Door Contact and West Wall Window 01.

---

## 8. Entrances Dashboard Spec

The Entrances panel should include:

- South Entrance
- East Entrance
- West Service Entrance

South Entrance must include:

- Reolink PoE Doorbell live view/card
- South Wall Lock status/control
- South Wall Door Contact
- Remote-entry workflow status
- Recent access events
- Re-lock timer status

East Entrance should include:

- East Wall Door Contact status
- Recent activity
- Future lock/camera placeholders only if later marked as future/deferred

West Service Entrance should include:

- West Wall Door Contact status
- Recent activity
- Future lock/camera placeholders only if later marked as future/deferred

---

## 9. Cameras Dashboard Spec

The Cameras panel should include:

- South Wall Doorbell
- South Wall Corner Camera
- Online/offline status
- Motion/person event status where supported
- Recent camera activity

Do not include existing camera system integration.

---

## 10. Security Dashboard Spec

The Security panel should include:

- Door contacts
- Window contacts
- Motion sensors
- Fixed picture window future impact/shock placeholders
- Lock state
- Alert devices if later added
- Secure/insecure grouped status

Security grouping should remain first-floor-only and should treat the fixed picture windows as planned future sensor placeholders, not active glass-break devices.

---

## 11. Activity Dashboard Spec

The Activity panel should include:

- Doorbell events
- Lock events
- Door/window events
- Motion events
- System events
- Low battery events
- Offline device events

Activity should prioritize owner-reviewable first-floor events and service-relevant device health changes.

---

## 12. Infrastructure / Administration Dashboard Spec

The Infrastructure / Administration panel should include:

- Home Assistant Green status
- Z-Wave controller status
- Zigbee controller status
- Reolink integration status
- Network status
- Backup checkpoints
- Storage status
- Update status
- Device health summary

This panel should use Network Closet naming for infrastructure devices even though the Network Closet is physically in the Conference Room.

---

## 13. Entity-to-Dashboard Mapping Table

| Register ID | Friendly Name | Area | Dashboard Panel(s) | Primary Card Type | Secondary Card Type | Workflow Membership | Notes |
|---|---|---|---|---|---|---|---|
| BKLF-INF-001 | Network Closet Home Assistant Green | Network Closet | Infrastructure / Administration, Overview | System status | Backup/storage/update status | System health, backup checkpoints | HA Green, HA 16.3, 32GB built-in storage |
| BKLF-INF-002 | Network Closet Z-Wave Controller | Network Closet | Infrastructure / Administration, Overview | Integration/device status | Network health | Z-Wave network health | Used for Kwikset lock and any Z-Wave devices |
| BKLF-INF-003 | Network Closet Zigbee Controller | Network Closet | Infrastructure / Administration, Overview | Integration/device status | Network health | Zigbee network health | Zigbee2MQTT preferred; ZHA acceptable if simpler |
| BKLF-SW-001 | South Wall Doorbell | South Wall | Entrances, Cameras, Overview, Activity | Camera live view | Event history | South Entrance owner-managed access workflow | Reolink PoE Doorbell |
| BKLF-SW-002 | South Wall Lock | South Wall | Entrances, Security, Overview, Activity | Lock control | Lock event history | South Entrance owner-managed access workflow, door re-lock timer | Kwikset Home Connect 620 Z-Wave Plus LR |
| BKLF-SW-003 | South Wall Door Contact | South Wall | Entrances, Security, Exterior, Overview, Activity | Contact state | Last activity | South Entrance workflow, building secure status, door re-lock timer | Sensor type pending final hardware |
| BKLF-SW-004 | South Wall Corner Camera | South Wall | Cameras, Exterior, Overview, Activity | Camera live view | Camera status/event history | South Wall exterior activity awareness | Exact Reolink model to confirm |
| BKLF-SW-005 through BKLF-SW-009 | South Wall Window 01 through South Wall Window 05 | South Wall | Exterior, Security, Overview, Activity | Contact state group | Last activity / battery state | Building secure status, low battery notification | Five operable South Wall windows |
| BKLF-NW-001 through BKLF-NW-005 | North Wall Window 01 through North Wall Window 05 | North Wall | Exterior, Security, Overview, Activity | Contact state group | Last activity / battery state | Building secure status, low battery notification | Five operable North Wall windows |
| BKLF-EW-001 | East Wall Door Contact | East Wall | Entrances, Exterior, Security, Overview, Activity | Contact state | Last activity | Building secure status | East exterior entrance |
| BKLF-EW-002 | East Wall Window 01 | East Wall | Exterior, Security, Overview, Activity | Contact state | Last activity / battery state | Building secure status, low battery notification | One operable East Wall window |
| BKLF-WW-001 | West Wall Door Contact | West Wall | Entrances, Exterior, Security, Overview, Activity | Contact state | Last activity | Building secure status | West service entrance |
| BKLF-WW-002 | West Wall Window 01 | West Wall | Exterior, Security, Overview, Activity | Contact state | Last activity / battery state | Building secure status, low battery notification | One operable West Wall window |
| BKLF-INT-001 | Viewing Room Motion 01 | Viewing Room | Security, Activity, Overview | Motion state | Last activity / battery state | Interior activity awareness, after-hours activity notification, low battery notification | Final placement to verify onsite |
| BKLF-INT-002 | Main Hallway Motion 01 | Main Hallway | Security, Activity, Overview | Motion state | Last activity / battery state | Interior activity awareness, after-hours activity notification, low battery notification | Final placement to verify onsite |
| BKLF-FIXED-001 | Conference Room Fixed Picture Window 01 | East Wall / Conference Room | Exterior, Security | Placeholder/status note | Future sensor placeholder | Future impact/shock-type sensor placeholder | No active contact sensor; no glass-break sensor in active deployment |
| BKLF-FIXED-002 | Conference Room Fixed Picture Window 02 | East Wall / Conference Room | Exterior, Security | Placeholder/status note | Future sensor placeholder | Future impact/shock-type sensor placeholder | No active contact sensor; no glass-break sensor in active deployment |

---

## 14. South Entrance Workflow Panel Spec

The South Entrance workflow panel should document and display this sequence:

1. Visitor presses doorbell.
2. Owner receives mobile notification.
3. Owner views live doorbell camera.
4. Owner unlocks remotely or authenticates by mobile device onsite.
5. System logs event.
6. Door re-lock timer runs.
7. Dashboard shows current lock, door, and camera state.

The panel should include the South Wall Doorbell, South Wall Lock, South Wall Door Contact, recent access events, current lock state, current door state, current camera state, and re-lock timer status when exposed by the final Home Assistant configuration.

---

## 15. Desktop Layout Guidance

Planning-level desktop wireframe:

- Top row: Building Secure, South Entrance, Active Alerts
- Middle row: Cameras, Exterior Summary
- Lower row: Recent Activity, Infrastructure Health

Desktop layout should keep South Entrance state visible without hiding system health or active alerts.

---

## 16. Mobile Layout Guidance

Planning-level mobile wireframe:

- Top: Building Secure
- Next: South Entrance Access
- Next: Doorbell live view
- Next: Alerts
- Next: Recent Activity
- Next: System Health

Mobile layout should prioritize the owner’s fastest review path for entry, camera, alert, and recent activity state.

---

## 17. Tablet Layout Guidance

Planning-level tablet wireframe:

- Larger persistent South Entrance card
- Camera preview section
- Exterior wall summary
- Activity rail
- Admin section behind secondary navigation

Tablet layout should support quick owner review while preserving enough space for wall-level status summaries.

---

## 18. Naming and Label Rules

- Use wall-based names for exterior envelope devices.
- Use room-based names for interior devices.
- Use Network Closet names for infrastructure.
- Do not use generic entity names.
- Do not rename after dashboard/automation build unless recorded.

The entity register remains the source of truth for dashboard and workflow mapping.

---

## 19. Safe Scope Boundaries

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

## 20. Open Items Before Live HA Build

- Confirm final contact sensor model/protocol.
- Confirm final impact/shock sensor model for fixed picture windows.
- Confirm final onsite window numbering.
- Confirm final motion sensor placement.
- Confirm South Wall corner camera exact Reolink model.
- Confirm whether second Kwikset lock is in scope or spare/future expansion.
- Confirm final PoE/network switch plan.
- Confirm UPS availability.
- Confirm owner mobile app setup and authentication method.
