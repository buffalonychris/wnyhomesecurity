# HA-NOTIFY003 BKLF Operator Test Checklist REV01

Task ID: HA-NOTIFY003-BKLF-LIVE-NOTIFICATION-VALIDATION-001

Purpose: provide exact, operator-performed Home Assistant validation steps for BKLF notification readiness. Codex must not mark a test passed without operator-provided evidence.

## Operator Evidence Rules

For each test, report:

- test ID
- exact entity or service inspected
- timestamp with timezone
- observed state before and after
- whether a phone received the push, when applicable
- screenshot reference if available
- notes about delay, duplicate behavior, or failure

Do not report or store tokens, private cloud URLs, mobile registration payloads, lock PINs, passwords, pairing codes, camera credentials, private keys, or raw push tokens.

## Group 1 - Companion Notification Services

Status: complete for HA-NOTIFY003. The operator accepted prior BKLF Companion setup validation for `notify.chris_cell`, `notify.luis_cell`, `notify.me_lewis_cell`, and `notify.sm_s931u1_helen_cell`. HA-NOTIFY003 also directly tested Chris, Luis, and Mr. Lewis. No additional Companion-device testing is required.

Safety: customer-visible push. Use only calm test wording.

Open: Home Assistant -> Developer Tools -> Services.

Service call for each approved active recipient:

```yaml
service: notify.chris_cell
data:
  title: WNYHS notification validation test
  message: no action required.
```

Repeat with `notify.luis_cell` and `notify.me_lewis_cell`.

Expected result: the matching phone receives exactly one calm test push.

Evidence to report: service name, recipient/person mapping, timestamp, delivery result, delay if any, and operator confirmation.

Restore: no restore action required.

Do not create routes or groups. Do not repeat Helen testing. Helen is technically configured and previously tested, but remains excluded from production routing. Anthony has no confirmed service and remains excluded.

### Group 1 Evidence Captured

| Test ID | Service | Recipient | Title/body | Operator result | Timestamp | Status |
| --- | --- | --- | --- | --- | --- | --- |
| G1-01 | `notify.chris_cell` | Chris / service team | `WNYHS Notification Validation Test` / `Test message for Chris  no action required.` | Received immediately; no delay; no Home Assistant errors reported. | 2026-07-10 13:01 -04:00 | passed |
| G1-02 | `notify.luis_cell` | Luis / service team | `WNYHS Notification Validation Test` / `Test message for Luis  no action required.` | Received; no delay; no Home Assistant errors reported. | 2026-07-10 13:02 -04:00 | passed |
| G1-03 | `notify.me_lewis_cell` | Mr. Lewis / owner primary | `WNYHS Notification Validation Test` / `Test message for Mr. Lewis  no action required.` | Received; no delay; no Home Assistant errors reported. | 2026-07-10 13:03 -04:00 | passed |
| G1-04 | `notify.sm_s931u1_helen_cell` | Helen / excluded | No HA-NOTIFY003 repeat test required. | Operator confirms service was previously configured and successfully tested during BKLF Companion setup; Helen remains excluded from production routing. | 2026-07-10 | accepted / excluded |
| G1-05 | Anthony | Excluded | Not applicable. | No confirmed service; excluded from production routing. | 2026-07-10 | excluded |

Companion services gate: READY.

## Group 2 - User, Person, And Role Mapping

Safety: read-only.

Open: Settings -> People, or Settings -> System -> Users if needed.

Inspect only operational role facts:

- Mr. Lewis owner/customer primary recipient.
- Chris and Luis service-team recipients.
- Helen excluded from production routing.
- Anthony excluded until a service is confirmed.
- Chris and Luis remain service-team/system-health recipients after handoff.

Expected result: the live user/person records support the intended mapping without exposing private auth data.

HA-NOTIFY003 readiness result: READY by operator decision for implementation routing. Mr. Lewis is the customer/owner operational recipient; Chris and Luis are service-team, system-health, and approved after-hours recipients; Helen and Anthony are excluded.

Evidence to report: role mapping, user/person names visible, device tracker relationships if visible, and any ambiguity.

Restore: no changes.

## Group 3 - Building Mode Source

Safety: read-only unless the operator explicitly approves a mode change.

Open: Developer Tools -> States.

Inspect:

- `input_select.bklf_building_mode`
- `input_boolean.bklf_maintenance_mode`
- `input_boolean.bklf_installer_mode`

Record:

- current state
- allowed values for `input_select.bklf_building_mode`
- whether these required modes exist: Open, Consultation, Service / Event, Closed, Maintenance, Installer Mode
- whether naming differs from BKLF REV06
- whether mode changes appear in Logbook/History
- who can change the mode from the dashboard or settings, if visible

Expected result: one authoritative source, exact values, and automation-observable state changes are identified.

HA-NOTIFY003 readiness result: READY WITH IMPLEMENTATION CONDITION. Use the current repository-configured operational contract for HA-NOTIFY004:

- `Open` = occupied
- `Service` = occupied service/event
- `Cleaning` = occupied/suppressed
- `Maintenance` = maintenance suppression/service routing
- `Closed` = secured
- `After Hours` = secured
- `input_boolean.bklf_installer_mode` = installer suppression/test routing

Do not block HA-NOTIFY004 because `Consultation` and `Service / Event` naming refinements are not present; defer those refinements to a later dashboard/building-mode task.

Restore: if a mode is changed with approval, set it back to the starting value and report both timestamps.

## Group 4 - Quiet Hours Inputs

Safety: read-only.

Open: Settings -> System -> General and Developer Tools -> States.

Validate:

- approved Quiet Hours are 9:00 PM through 8:00 AM, seven days per week
- timezone is correct for Buffalo, New York
- whether any Quiet Hours helper exists
- whether an update/restart or time-window helper exists

Expected result: implementation can either consume a verified helper or calculate Quiet Hours directly using the correct timezone.

HA-NOTIFY003 readiness result: READY WITH IMPLEMENTATION CONDITION. HA-NOTIFY004 may calculate Quiet Hours directly as 9:00 PM through 8:00 AM, seven days per week, and must acceptance-test local-time behavior before handoff.

Restore: no changes.

## Group 5 - Doorbell Press Events

Safety: customer-visible physical device test. Coordinate with funeral-home operations before pressing.

Open: Developer Tools -> States, filtered for each doorbell.

South Entrance entities to inspect:

- `binary_sensor.south_wall_south_entrance_doorbell_visitor`
- `binary_sensor.south_wall_south_entrance_doorbell_person`
- `binary_sensor.south_wall_south_entrance_doorbell_motion`
- `camera.south_wall_south_entrance_doorbell_fluent`

Bailey Double Doors entities to inspect:

- `binary_sensor.east_wall_bailey_double_door_visitor`
- `binary_sensor.east_wall_bailey_double_door_person`
- `binary_sensor.east_wall_bailey_double_door_motion`
- `camera.east_wall_bailey_double_door_fluent`

Action: press one doorbell at a time.

Expected result: the visitor/press entity changes state in a clear way, the event duration and duplicate behavior are observable, camera image is available, and the intended dashboard route can open.

Evidence to report: before/after state, duration, duplicate behavior, image availability, customer-facing name, route tested, timestamp.

Restore: no changes.

## Group 6 - Camera And Doorbell Health

Safety: read-only unless operator separately approves a controlled outage. Do not unplug equipment by default.

Open: Developer Tools -> States and Settings -> Devices & services -> Reolink.

Inspect:

- `camera.south_wall_south_entrance_doorbell_fluent`
- `camera.east_wall_bailey_double_door_fluent`
- `camera.south_wall_cam01_southwest_corner_parking_lot_fluent`
- Reolink integration status/diagnostics available in UI

Expected result: availability and restored states are observable or the capability is marked not live-tested.

Evidence to report: status source, current state, whether a 180-second sustained-outage test is safe/approved, restart/update false-positive risk, recovery source.

Restore: if an outage simulation is explicitly approved, restore the device/integration immediately and record restored state.

## Group 7 - Locks

Safety: lock commands affect customer access. Do not run repeated lock commands unless explicitly approved.

Open: Developer Tools -> States, and device pages for each lock.

Inspect South Entrance:

- `lock.south_wall_home_connect_620_connected_smart_lock`
- `binary_sensor.south_wall_home_connect_620_connected_smart_lock_lock_jammed`
- South Wall lock battery, replace-battery, tamper, and node status entities visible in live HA

Inspect Bailey Double Doors:

- `lock.east_wall_bailey_double_doors`
- `binary_sensor.east_wall_bailey_double_doors_lock_jammed`
- `sensor.east_wall_bailey_double_doors_node_status`
- Bailey lock battery, replace-battery, and tamper entities visible in live HA

Expected result: locked/unlocked state is accurate, diagnostics exist, and command response timing is known enough to judge the 15-second confirmation window.

Evidence to report: state accuracy, command response time if tested, state-change delay, battery/jam/tamper/node sources, recovery behavior.

Restore: return each lock to the starting state if any command was performed.

## Group 8 - Door Contact To Lock Mapping

Safety: physical door open/close test. Coordinate with operations.

Inspect:

- South Entrance likely contact: `binary_sensor.c01_south_entrance_door`
- Bailey Double Doors candidate contacts: `binary_sensor.c10_south_wall_window_1`, `binary_sensor.c11_south_wall_window_2`, and any live East/Bailey contact entities visible

Action: open and close one physical door at a time while watching candidate contacts.

Expected result: each smart lock has a physically verified matching contact, and the contact reports open/closed accurately.

Evidence to report: physical door name, contact entity, before/open/closed states, timestamp, ambiguity.

Restore: close doors and confirm contacts return to closed.

## Group 9 - Door-Left-Open Timing Inputs

Safety: customer-visible door-left-open duration if performed. Optional.

Action: with operator approval, hold a verified exterior contact open long enough to observe stability around 90 seconds.

Expected result: contact remains stable enough to support first alert at 90 seconds, repeats every 90 seconds, maximum five notifications, and immediate reset when closed.

Evidence to report: contact entity, open time, stability, close/reset behavior. Full five-alert duration is optional and not recommended unless approved.

Restore: close the door and confirm closed state.

## Group 10 - Interior Motion While Closed

Safety: do not switch building to Closed during active occupancy without operator approval.

Inspect:

- `binary_sensor.m01_main_hallway_motion`
- `binary_sensor.m01_main_hallway_motion_occupancy`
- `binary_sensor.m02_viewing_room_motion`
- `binary_sensor.m02_viewing_room_motion_occupancy`
- `binary_sensor.bklf_interior_motion_active`

Expected result: state changes, reset duration, duplicate/noise behavior, and five-minute cooldown feasibility are known.

Restore: wait for sensors to reset and confirm off/clear states.

## Group 11 - Parking-Lot Person / Loitering

Safety: controlled camera test if practical; avoid disturbing operations.

Inspect:

- `camera.south_wall_cam01_southwest_corner_parking_lot_fluent`
- `binary_sensor.south_wall_cam01_southwest_corner_parking_lot_person`
- `binary_sensor.south_wall_cam01_southwest_corner_parking_lot_linger_area_1_person`
- `binary_sensor.bklf_cam01_person_active`

Expected result: determine whether five-minute continuous presence is technically observable and whether a 15-minute cooldown is feasible.

Evidence to report: person state, linger-area state, reset behavior, image availability, route tested.

Restore: leave test area and confirm reset.

## Group 12 - Controller And Integration Health

Safety: read-only. Do not force controller outages unless separately approved.

Open: Settings -> Devices & services.

Inspect status or observable source for:

- ZHA / Zigbee controller
- Z-Wave JS controller
- Reolink
- critical doorbell/camera integration
- mobile_app if relevant to delivery

Expected result: exact status entity or UI source is known; sustained outage, startup false-positive risk, and recovery detection are characterized.

Restore: no changes.

## Group 13 - Backup And Automation Failure Observability

Safety: read-only.

Inspect whether reliable live signals exist for:

- backup failure or stale backup
- critical automation failure

Expected result: mark future/conditional if Home Assistant does not expose a reliable signal.

Restore: no changes.

## Group 14 - Suppression Windows

Safety: read-only unless mode/helper toggles are explicitly approved.

Inspect:

- `input_boolean.bklf_maintenance_mode`
- `input_boolean.bklf_installer_mode`
- `input_select.bklf_building_mode`
- any update/restart guard helper

Expected result: facts needed for Maintenance Mode, Installer Mode, and approved update/restart suppression are known.

Restore: if any helper was changed with approval, restore to starting state.

## Group 15 - Destination Links And Media

Safety: push route/media test may send customer-visible pushes.

Validate routes:

- `/bklf-main/doorbell`
- `/bklf-main/cameras`
- `/bklf-main/locks`
- `/bklf-main/security`
- `/bklf-main/activity`
- `/bklf-main/more`

Expected result: Companion notifications can open intended routes, image attachment works for supported camera events, and missing media does not prevent core delivery.

Restore: no changes.

## Group 16 - Recovery Behavior

Safety: only safely testable conditions.

For each approved condition, record:

- fault/offline state observed
- restored state observed
- whether recovery is distinguishable
- whether recovery routing should match original event routing
- whether Maintenance/Installer/update suppression is feasible

Restore: return device/integration/helper to starting state.

## Group 17 - Customer-Safe Wording

Safety: read-only review.

Review all initial-phase message templates in BKLF REV06 and any proposed implementation wording.

Expected result: customer-facing names are accurate, no entity IDs appear, wording is calm and actionable, and service-only technical messages are not routed to the owner.

## Group 18 - Implementation Readiness

Safety: documentation review.

Classify every BKLF REV06 event as:

- READY
- READY WITH IMPLEMENTATION CONDITION
- BLOCKED
- NOT SUPPORTED
- FUTURE / DEFERRED

HA-NOTIFY003 readiness result: complete for initial bounded implementation. Current backup/repository evidence may support HA-NOTIFY004 implementation inputs when paired with explicit acceptance tests. Do not relabel event behavior as live-confirmed unless HA-NOTIFY004 actually tests it.
