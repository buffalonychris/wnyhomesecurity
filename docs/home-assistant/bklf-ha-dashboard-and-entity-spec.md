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
- Current BKLF reference hardware: Home Assistant Green
- Supported installation model: Home Assistant OS / Supervisor
- Home Assistant Core: 2026.6.4
- Home Assistant Supervisor: 2026.6.2
- Home Assistant OS: 16.3
- Home Assistant Frontend: 20260527.7
- Network Closet: Physically located in the Conference Room
- Primary owner-managed remote-entry workflow: South Entrance
- South Wall exterior devices: Reolink PoE Doorbell and South Wall Corner Camera

The Network Closet remains operationally separate for dashboard and administration purposes even though the hardware is physically located inside the Conference Room.

Current file placement:

- Repo dashboard file path: `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml`
- HA Green dashboard destination: `homeassistant/dashboards/bklf-main-dashboard.yaml`
- Repo config file path: `home-assistant/bklf/configuration.yaml`
- HA Green config destination: `homeassistant/configuration.yaml`

The File Editor visible root is `homeassistant/`. HA 2026 UI navigation may differ from older Add-ons documentation, so live setup notes should record the current UI path used for add-ons, dashboard resources, backup, and validation.

---

## 3. Corrected Building Envelope Counts

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
- No glass-break sensors in the active deployment.

Window distribution:

- South Wall: 5 operable windows
- North Wall: 5 operable windows
- East Wall: 1 operable window + 2 fixed picture windows
- West Wall: 1 operable window

The 12 operable windows require contact sensors for full operable-window coverage. Initial coverage assigns 10 contact sensors to North Wall and South Wall operable windows, while 2 operable-window contacts are deferred. The 2 fixed picture windows are documented as future impact/shock-type sensor placeholders and do not receive glass-break sensors in the active deployment.

Confirmed sensor inventory:

- 14 Sonoff SenseGuard Gen 2 contact sensors confirmed on hand.
- 2 Sonoff SNZB-03P motion sensors confirmed on hand.

Contact sensor allocation:

- East Wall double door: 2 contact sensors, one per door leaf.
- South Wall door: 1 contact sensor.
- West Wall door: 1 contact sensor.
- North Wall operable windows: 5 contact sensors assigned for initial coverage.
- South Wall operable windows: 5 contact sensors assigned for initial coverage.
- East Wall operable window: deferred contact sensor.
- West Wall operable window: deferred contact sensor.

Motion sensor allocation:

- Main Hallway Motion 01: planned hallway placement.
- Viewing Room Motion 01: planned viewing-room placement.
- Purpose: cover the most vulnerable interior movement paths/areas.

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

The dashboard should distinguish Active / Deferred sensors. Active sensors are installed or assigned from confirmed on-hand hardware. Deferred sensors are planned coverage and should not be treated as live device state.

The customer-facing BKLF dashboard must remain a WNY Home Security Customer Control Center experience powered by Home Assistant, not a generic Home Assistant dashboard. It must show only installed, customer-relevant capabilities and avoid placeholder, future-feature, unused, raw diagnostic, firmware, RSSI, log, entity ID, and YAML-oriented panels in normal customer use.

AI Assist, if evaluated later, must not control locks, alarms, security-sensitive actions, access workflows, or other protected actions unless governance later authorizes that exact behavior.

---

## 6. Overview Dashboard Spec

The Overview panel should include:

- Building Secure status for installed sensors only
- South Entrance quick status
- Active alerts
- Door/window summary
- Deferred coverage summary
- Motion summary
- Camera online status
- Lock status
- Recent activity feed
- System health summary

The Overview panel should provide the shortest path to the current first-floor state without requiring the owner to navigate into each device group.

Building Secure during initial deployment must account for installed sensors only. Deferred window contacts should appear as planned/deferred coverage, not active sensors.

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
- Deferred operable-window contact placeholders where applicable
- Fixed picture window future sensor placeholders where applicable
- Exterior cameras where applicable
- Active alerts
- Last activity

South Wall should include the South Wall Door Contact, South Wall Window 01 through South Wall Window 05, South Wall Doorbell, and South Wall Corner Camera.

North Wall should include North Wall Window 01 through North Wall Window 05.

East Wall should include East Wall Double Door Left Contact, East Wall Double Door Right Contact, East Wall Window 01 as deferred operable-window coverage, and the two fixed picture window future impact/shock-type sensor placeholders.

West Wall should include the West Wall Door Contact and West Wall Window 01 as deferred operable-window coverage.

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

- East Wall double-door contact status for both door leaves
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
- Bailey Double Doors Doorbell
- South Wall Corner Camera
- Online/offline status
- Motion/person event status where supported
- Recent camera activity

Do not include existing camera system integration.

---

## 10. Security Dashboard Spec

The Security panel should include:

- Door contacts
- Active window contacts
- Deferred window contacts as planned/deferred coverage
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
| BKLF-SW-003 | South Wall Door Contact | South Wall | Entrances, Security, Exterior, Overview, Activity | Contact state | Last activity | South Entrance workflow, building secure status, door re-lock timer | Sonoff SenseGuard Gen 2; active exterior door contact |
| BKLF-SW-004 | South Wall Corner Camera | South Wall | Cameras, Exterior, Overview, Activity | Camera live view | Camera status/event history | South Wall exterior activity awareness | Exact Reolink model to confirm |
| BKLF-SW-005 through BKLF-SW-009 | South Wall Window 01 through South Wall Window 05 | South Wall | Exterior, Security, Overview, Activity | Contact state group | Last activity / battery state | Building secure status, low battery notification | Sonoff SenseGuard Gen 2; five active operable South Wall window contacts |
| BKLF-NW-001 through BKLF-NW-005 | North Wall Window 01 through North Wall Window 05 | North Wall | Exterior, Security, Overview, Activity | Contact state group | Last activity / battery state | Building secure status, low battery notification | Sonoff SenseGuard Gen 2; five active operable North Wall window contacts |
| BKLF-EW-001 | East Wall Double Door Left Contact | East Wall | Entrances, Exterior, Security, Overview, Activity | Contact state | Last activity | Building secure status | Sonoff SenseGuard Gen 2; one contact sensor on left door leaf |
| BKLF-EW-002 | East Wall Double Door Right Contact | East Wall | Entrances, Exterior, Security, Overview, Activity | Contact state | Last activity | Building secure status | Sonoff SenseGuard Gen 2; one contact sensor on right door leaf |
| BKLF-EW-003 | East Wall Window 01 | East Wall | Exterior, Security Notes | Deferred coverage note | Future contact placeholder | Deferred coverage | One operable East Wall window; contact sensor deferred until additional contact sensors arrive |
| BKLF-EW-004 | Bailey Double Doors Lock | East Wall / East Entrance | Mobile Locks, Desktop Dashboard, Desktop Doors & Locks, Security / Activity, Activity | Lock control | Battery, jam, tamper, and node status when customer-safe | Bailey Double Doors owner-managed access workflow | Live entity `lock.east_wall_bailey_double_doors`; supporting entities `sensor.east_wall_bailey_double_doors_battery_level`, `binary_sensor.east_wall_bailey_double_doors_lock_jammed`, `binary_sensor.east_wall_bailey_double_doors_tampering_product_cover_removed`, and `sensor.east_wall_bailey_double_doors_node_status` |
| BKLF-EW-005 | Bailey Double Doors Doorbell | East Wall / East Entrance | Mobile Cameras, Desktop Dashboard, Desktop Cameras, Desktop Doors & Locks, Security / Activity, Activity | Camera live view | Visitor/person/motion activity and camera details | Bailey Double Doors visitor/activity awareness | Live entity `camera.east_wall_bailey_double_door_fluent`; supporting entities `binary_sensor.east_wall_bailey_double_door_visitor`, `binary_sensor.east_wall_bailey_double_door_person`, `binary_sensor.east_wall_bailey_double_door_motion`, `binary_sensor.east_wall_bailey_double_door_vehicle`, `binary_sensor.east_wall_bailey_double_door_pet`, `siren.east_wall_bailey_double_door_siren`, `switch.east_wall_bailey_double_door_record`, `switch.east_wall_bailey_double_door_push_notifications`, `switch.east_wall_bailey_double_door_doorbell_button_sound`, `number.east_wall_bailey_double_door_speak_volume`, and `number.east_wall_bailey_double_door_doorbell_volume` |
| BKLF-MH-001 | South Entrance Lamp | Main Hallway / South Entrance | Mobile More, Mobile Security, Desktop Dashboard, Desktop System / More, Security / Activity | Switch control | Power/voltage/current/energy status for service review when needed | Customer-facing utility/light control | Live entity `switch.south_entrance_lamp`; supporting entities `sensor.south_entrance_lamp_power`, `sensor.south_entrance_lamp_voltage`, `sensor.south_entrance_lamp_current`, and `sensor.south_entrance_lamp_summation_delivered` |
| BKLF-WW-001 | West Wall Door Contact | West Wall | Entrances, Exterior, Security, Overview, Activity | Contact state | Last activity | Building secure status | West service entrance |
| BKLF-WW-002 | West Wall Window 01 | West Wall | Exterior, Security Notes | Deferred coverage note | Future contact placeholder | Deferred coverage | One operable West Wall window; contact sensor deferred until additional contact sensors arrive |
| BKLF-INT-001 | Viewing Room Motion 01 | Viewing Room | Security, Activity, Overview | Motion state | Last activity / battery state | Interior activity awareness, after-hours activity notification, low battery notification | Sonoff SNZB-03P; planned viewing-room placement |
| BKLF-INT-002 | Main Hallway Motion 01 | Main Hallway | Security, Activity, Overview | Motion state | Last activity / battery state | Interior activity awareness, after-hours activity notification, low battery notification | Sonoff SNZB-03P; planned hallway placement |
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

The Bailey Double Doors workflow is live for dashboard display and should use the same customer-safe posture: camera view, visitor/person/motion activity, lock state, lock/unlock controls with unlock confirmation, and recent access events. Raw entity IDs remain implementation references only and should not appear as customer-facing labels.

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

## 17A. Responsive and Theme Requirements

Customer-facing dashboard behavior:

- Phone portrait: single-column, large controls, minimal scroll.
- Tablet portrait: two-column where appropriate with larger status and camera cards.
- Tablet landscape: wider layout without hiding the South Entrance workflow.
- Desktop browser: wider layout without information overload.
- Home Assistant Companion App: primary validation target for normal daily use.

Navigation, terminology, colors, and control meaning must remain consistent across device classes.

Every customer-facing screen must provide persistent Light, Dark, and Auto theme control. Theme control must be one-tap or immediately accessible, not buried in settings.

Semantic color rules:

- Green means safe, normal, locked, secure, or all clear.
- Red/burgundy means caution, alert, destructive, unlock, or security-sensitive action.
- Gold means WNYHS brand, navigation, section accent, or premium emphasis.
- Gray/black/white surfaces are theme-controlled.
- Do not use green for risky actions such as unlocking or disabling protection.

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
