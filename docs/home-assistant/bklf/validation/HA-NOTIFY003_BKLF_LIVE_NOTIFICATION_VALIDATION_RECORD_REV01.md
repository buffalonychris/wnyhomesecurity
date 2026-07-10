# HA-NOTIFY003 BKLF Live Notification Validation Record REV01

| Field | Value |
| --- | --- |
| Task ID | HA-NOTIFY003-BKLF-LIVE-NOTIFICATION-VALIDATION-001 |
| Task type | Operator-assisted live-system validation / evidence capture / implementation-readiness assessment |
| Customer / site | BK Lewis Funeral Home |
| Date/time | 2026-07-10, America/New_York |
| Operator | Pending operator evidence |
| Codex role | Repository fact review and validation recorder only |
| Home Assistant version | Backup-confirmed: 2026.6.4; live-confirmed: pending |
| Supervisor version | Backup-confirmed: 2026.06.2; live-confirmed: pending |
| Hardware platform | Backup-confirmed: Home Assistant Green; live-confirmed: pending |
| Final readiness decision | BLOCKED pending operator live validation |
| Operator approval status | Pending |

## Scope Boundary

This record does not implement notification automations, create notify groups, enable routing, modify Home Assistant YAML, copy files to Home Assistant Green, restart Home Assistant, change dashboards, or change live configuration.

No live result is marked passed unless the evidence source is direct operator evidence from the live BKLF Home Assistant system.

## Evidence Source Classes

| Evidence class | Meaning | May satisfy live validation? |
| --- | --- | --- |
| backup-confirmed | Present in sanitized backup-derived registers. | No, corroboration only. |
| repository-configured | Present in source-controlled YAML or docs. | No, corroboration only. |
| live-confirmed | Direct operator observation or controlled live test. | Yes. |
| operator-approved policy | Approved business rule from BKLF REV06 or operator decision. | Policy only; still needs technical validation. |
| implementation assumption | Needed design input not yet proven live. | No. |
| unresolved capability | Capability exists in docs or entity names but needs live proof. | No. |

## Evidence Sources Reviewed

- `docs/home-assistant/bklf/BKLF_NOTIFICATION_CONFIGURATION_DECISIONS_REV06.md`
- `docs/home-assistant/notification-system/README.md`
- `docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md`
- `docs/home-assistant/notification-system/WNYHS_ADAPTIVE_NOTIFICATION_CONFIGURATION_QUESTIONNAIRE_REV01.md`
- `docs/home-assistant/bklf/inventory/notification-register.md`
- `docs/home-assistant/bklf/inventory/user-person-register.md`
- `docs/home-assistant/bklf/inventory/area-register.md`
- `docs/home-assistant/bklf/inventory/device-register.md`
- `docs/home-assistant/bklf/inventory/integration-register.md`
- `docs/home-assistant/bklf/inventory/automation-register.md`
- `docs/home-assistant/bklf/inventory/camera-doorbell-register.md`
- `docs/home-assistant/bklf/inventory/lock-access-register.md`
- `docs/home-assistant/bklf/inventory/sensor-register.md`
- `docs/home-assistant/bklf/inventory/helper-register.md`
- `docs/home-assistant/bklf/inventory/system-health-summary.md`
- `docs/home-assistant/bklf/inventory/last-known-live-state-summary.md`
- `docs/home-assistant/bklf/inventory/validation-log.md`
- `home-assistant/bklf/configuration.yaml` read-only
- `home-assistant/bklf/packages/bklf_notifications.yaml` read-only
- `home-assistant/bklf/packages/bklf_security.yaml` read-only
- `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml` targeted read-only route/entity context
- `home-assistant/bklf/dashboards/bklf-desktop-dashboard.yaml` targeted read-only route/entity context

## Repository Fact Review

| Fact | Evidence class | Source | Live status | Impact |
| --- | --- | --- | --- | --- |
| Phase 1 channel is Home Assistant Companion push. | operator-approved policy | BKLF REV06 | Pending | Required before implementation. |
| `notify.chris_cell` exists in backup-derived registry. | backup-confirmed | notification register | Pending push test | Service cannot be production-ready until received live. |
| `notify.luis_cell` exists in backup-derived registry. | backup-confirmed | notification register | Pending push test | Service cannot be production-ready until received live. |
| `notify.me_lewis_cell` exists in backup-derived registry. | backup-confirmed | notification register | Pending push test | Service cannot be production-ready until received live. |
| `notify.sm_s931u1_helen_cell` exists in backup-derived registry. | backup-confirmed | notification register | Pending exclusion confirmation | Technical presence must not become production routing. |
| Anthony has no confirmed Companion service in repository evidence. | backup-confirmed | notification register | Pending live/user review | Excluded until service is live-confirmed and approved. |
| Building Mode source appears to be `input_select.bklf_building_mode`. | repository-configured / backup-confirmed | helper register, `bklf_security.yaml` | Pending live state/options check | Authoritative helper must be live-confirmed. |
| Source-controlled Building Mode options are `Closed`, `After Hours`, `Open`, `Cleaning`, `Service`, `Maintenance`. | repository-configured | `bklf_security.yaml` | Pending live check | Does not exactly match BKLF REV06 required values. |
| Maintenance and Installer Mode also exist as booleans: `input_boolean.bklf_maintenance_mode`, `input_boolean.bklf_installer_mode`. | repository-configured / backup-confirmed | helper register, `bklf_security.yaml` | Pending live check | Implementation may require separate suppression guards, not only mode values. |
| Quiet Hours are 9:00 PM through 8:00 AM, seven days per week. | operator-approved policy | BKLF REV06 | Pending timezone/helper review | Implementation must calculate or consume a verified source. |
| No dedicated Quiet Hours helper is confirmed in repository evidence. | backup-confirmed | notification/helper registers | Pending live review | Likely implementation condition if no helper exists live. |
| BKLF main dashboard route is `bklf-main`; desktop route is `bklf-desktop`. | repository-configured | `configuration.yaml`, last-known summary | Pending live destination test | Notification links require Companion route testing. |
| Notification automations in `bklf_notifications.yaml` are disabled scaffolds using persistent notifications. | repository-configured | automation register, package YAML | Not live behavior | Must not be treated as production routing. |

## Companion Service Results

| Service | Recipient mapping | Production posture | Title/body used | Test time | Delivery result | Evidence source | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `notify.chris_cell` | Chris / service team | Active only after successful live test | `WNYHS notification validation test` / `no action required.` | Pending | Pending | operator evidence pending | blocked | Backup-confirmed only. |
| `notify.luis_cell` | Luis / service team | Active only after successful live test | Same | Pending | Pending | operator evidence pending | blocked | Backup-confirmed only. |
| `notify.me_lewis_cell` | Mr. Lewis / owner primary | Active only after successful live test | Same | Pending | Pending | operator evidence pending | blocked | Backup-confirmed only. |
| `notify.sm_s931u1_helen_cell` | Helen device under `person.blewis` | Excluded from production routing | Optional technical test only if operator approves | Pending | Pending | operator evidence pending | blocked | Must remain excluded unless profile revised. |
| Anthony | No confirmed service | Excluded | Not applicable | Not applicable | Not applicable | repository evidence | blocked | Requires future service confirmation before any routing. |

## Role And Recipient Results

| Role fact | Repository/backup evidence | Live-confirmed result | Status | Implementation impact |
| --- | --- | --- | --- | --- |
| Mr. Lewis is owner/customer primary recipient. | BKLF REV06 policy; `notify.me_lewis_cell`; `person.blewis` mapping also includes Helen device. | Pending | blocked | Need live user/person review and service test. |
| Chris and Luis are service-team recipients. | BKLF REV06 policy; `person.wny_home_security` maps to Chris/Luis trackers. | Pending | blocked | Need service tests and post-handoff route confirmation. |
| Helen remains excluded from production routing. | BKLF REV06 policy. | Pending | blocked | Need operator confirmation during live review. |
| Anthony excluded until service is confirmed. | Notification register. | Pending | blocked | No implementation route. |
| Auth roles and HA permissions are excluded from backup. | User/person register. | Pending | blocked | Operator must verify live without recording private auth details. |

## Building Mode Results

| Item | Repository/backup evidence | Live-confirmed result | Status | Implementation impact |
| --- | --- | --- | --- | --- |
| Authoritative source | `input_select.bklf_building_mode`; separate `input_boolean.bklf_maintenance_mode`; separate `input_boolean.bklf_installer_mode`. | Pending | blocked | Implementation must not assume a single REV06-compatible value set until live-confirmed. |
| Allowed values | Source YAML: `Closed`, `After Hours`, `Open`, `Cleaning`, `Service`, `Maintenance`. | Pending | blocked | Missing exact REV06 values `Consultation`, `Service / Event`, and `Installer Mode`; `After Hours` and `Cleaning` are extra repository-configured values. |
| Current state | Not live-polled. | Pending | blocked | Required before tests. |
| Who can change mode | Auth/permissions excluded from backup. | Pending | blocked | Operator must verify in live UI without recording secrets. |
| Dashboard access restrictions | Not proven by backup. | Pending | blocked | Future dashboard/permission task may be needed. |
| Automation observability | Helper exists in source YAML; logbook/history enabled in `configuration.yaml`. | Pending | blocked | Need live state-change/history confirmation. |

## Quiet Hours Inputs

| Input | Evidence | Live-confirmed result | Status | Implementation impact |
| --- | --- | --- | --- | --- |
| Approved window | 9:00 PM through 8:00 AM, seven days per week. | Pending | blocked | Policy ready; technical source pending. |
| Dedicated helper | No helper confirmed in reviewed repository/backup evidence. | Pending | blocked | If absent live, implementation must calculate Quiet Hours directly or require a prerequisite helper task. |
| Timezone | Not live-confirmed. | Pending | blocked | Must verify Buffalo/New York local timezone and DST behavior. |

## Doorbell Results

| Doorbell | Repository/backup evidence | Required live test | Live result | Status | Implementation impact |
| --- | --- | --- | --- | --- | --- |
| South Entrance Doorbell | Camera: `camera.south_wall_south_entrance_doorbell_fluent`; visitor: `binary_sensor.south_wall_south_entrance_doorbell_visitor`; person/motion entities referenced in templates. | Controlled press, state change, duration, duplicate behavior, image, destination route. | Pending | blocked | Doorbell press not ready. |
| Bailey Double Doors Doorbell | Camera: `camera.east_wall_bailey_double_door_fluent`; visitor/person/motion/vehicle/pet entities under `east_wall_bailey_double_door`. | Controlled press, state change, duration, duplicate behavior, image, destination route. | Pending | blocked | Doorbell press not ready. |

Talk, Snapshot, Unlock, Lock, and View Live dashboard controls are not notification requirements for this task.

## Camera And Doorbell Health Results

| Device/integration | Evidence | Live result | Status | Notes |
| --- | --- | --- | --- | --- |
| South Entrance Doorbell availability | Camera entity backup-confirmed. | Pending | blocked | Need sustained unavailable/restored observability. |
| Bailey Double Doors Doorbell availability | Camera entity backup-confirmed. | Pending | blocked | Need sustained unavailable/restored observability. |
| Parking Lot camera availability | `camera.south_wall_cam01_southwest_corner_parking_lot_fluent` backup-confirmed. | Pending | blocked | Need sustained unavailable/restored observability. |
| Reolink integration health | Integration backup-confirmed. | Pending | blocked | Need safe live observability source. |
| 180-second outage test | Not approved/performed. | Pending | blocked | Do not disconnect equipment without exact operator approval. |

## Lock Results

| Lock | Repository/backup evidence | Live result | Status | Implementation impact |
| --- | --- | --- | --- | --- |
| South Entrance Lock | `lock.south_wall_home_connect_620_connected_smart_lock`; jam `binary_sensor.south_wall_home_connect_620_connected_smart_lock_lock_jammed`; battery/replace/tamper/node entities under South Wall prefix. | Pending | blocked | Need state accuracy, battery/jam/tamper, delay, command timing, and recovery tests. |
| Bailey Double Doors Lock | `lock.east_wall_bailey_double_doors`; jam `binary_sensor.east_wall_bailey_double_doors_lock_jammed`; node `sensor.east_wall_bailey_double_doors_node_status`; battery/replace/tamper entities under Bailey prefix. | Pending | blocked | Need state accuracy, battery/jam/tamper, delay, command timing, and recovery tests. |

No lock commands have been executed by Codex. Five repeated lock attempts are not approved or performed in this task record.

## Door / Contact Mappings

| Lock | Repository/backup contact evidence | Live-confirmed mapping | Status | Implementation impact |
| --- | --- | --- | --- | --- |
| South Entrance Lock | `binary_sensor.c01_south_entrance_door` relates to South Entrance Lock. | Pending | blocked | Must physically verify open/closed and no-lock-while-open rule. |
| Bailey Double Doors Lock | Repository evidence points to front/double-door contacts `binary_sensor.c10_south_wall_window_1` and `binary_sensor.c11_south_wall_window_2`; lock register says current live contact pairing still requires verification. | Pending | blocked | Ambiguous until physical confirmation. |

## Motion Results

| Motion source | Evidence | Live result | Status | Notes |
| --- | --- | --- | --- | --- |
| Main Hallway | `binary_sensor.m01_main_hallway_motion`, `binary_sensor.m01_main_hallway_motion_occupancy`. | Pending | blocked | Need state-change, reset duration, noise, and closed-mode suppression feasibility. |
| Viewing Room | `binary_sensor.m02_viewing_room_motion`, `binary_sensor.m02_viewing_room_motion_occupancy`. | Pending | blocked | Need controlled test. |
| Template | `binary_sensor.bklf_interior_motion_active`. | Pending | blocked | Need live template response to source entities. |

## Parking-Lot Person / Linger Results

| Source | Evidence | Live result | Status | Notes |
| --- | --- | --- | --- | --- |
| Parking Lot camera | `camera.south_wall_cam01_southwest_corner_parking_lot_fluent`. | Pending | blocked | Need image and route test. |
| Person entity | `binary_sensor.south_wall_cam01_southwest_corner_parking_lot_person`. | Pending | blocked | Generic person detection alone does not prove five-minute linger support. |
| Linger-area person entity | `binary_sensor.south_wall_cam01_southwest_corner_parking_lot_linger_area_1_person`. | Pending | blocked | Need continuous-presence and reset behavior test. |
| Template | `binary_sensor.bklf_cam01_person_active`. | Pending | blocked | Need live response test. |

## Controller And Integration Health Results

| System | Evidence | Live result | Status | Implementation impact |
| --- | --- | --- | --- | --- |
| Zigbee/ZHA controller | Network Closet Zigbee Coordinator / ZHA backup-confirmed. | Pending | blocked | Need safe observable source, outage/recovery feasibility, and restart false-positive review. |
| Z-Wave controller | Zooz ZST39 LR / Z-Wave JS backup-confirmed. | Pending | blocked | Need safe observable source and recovery feasibility. |
| Reolink | Integration backup-confirmed. | Pending | blocked | Need integration health source. |
| Mobile App | Four Companion entries backup-confirmed. | Pending | blocked | Need push-service delivery tests. |
| Supervisor/Backup | Supervisor and backup integrations backup-confirmed. | Pending | blocked | Need reliable failure/staleness signal review. |

## Backup / Automation Observability

| Capability | Repository/backup evidence | Live result | Status | Implementation impact |
| --- | --- | --- | --- | --- |
| Backup failure or stale backup | Backup integration present; reliable signal not proven. | Pending | blocked | Future/conditional unless live source exists. |
| Critical automation failure | Disabled scaffold automations exist; HA failure signal not proven. | Pending | blocked | Future/conditional unless reliable source exists. |

## Suppression-Window Results

| Suppression need | Evidence | Live result | Status | Notes |
| --- | --- | --- | --- | --- |
| Maintenance Mode | `input_boolean.bklf_maintenance_mode`; mode option `Maintenance`. | Pending | blocked | Need exact intended source. |
| Installer Mode | `input_boolean.bklf_installer_mode`; no `Installer Mode` input_select value in source YAML. | Pending | blocked | Need implementation decision after live confirmation. |
| Approved update/restart window | No helper found in reviewed repository evidence. | Pending | blocked | If absent live, implementation needs design condition or prerequisite helper. |

## Destination / Media Results

| Destination/media item | Evidence | Live result | Status | Notes |
| --- | --- | --- | --- | --- |
| Main dashboard route | `bklf-main`. | Pending | blocked | Companion notification route open test required. |
| Desktop route | `bklf-desktop`. | Pending | blocked | Useful for desktop, not necessarily mobile push target. |
| Doorbell view | `/bklf-main/doorbell` appears in dashboard YAML. | Pending | blocked | Need Companion destination test. |
| Cameras view | `/bklf-main/cameras` appears in dashboard YAML. | Pending | blocked | Need route test. |
| Locks view | `/bklf-main/locks` appears in dashboard YAML. | Pending | blocked | Need route test. |
| Camera snapshot/media | Camera entities present. | Pending | blocked | Need image attachment test; core push must still work if media fails. |

## Recovery Results

No recovery behavior is live-confirmed. Recovery support remains blocked until the operator verifies that fault/offline and restored states are both observable, distinguishable, and suppressible during Maintenance, Installer Mode, and approved update/restart windows.

## Customer-Safe Message Review

Initial BKLF REV06 templates are generally calm, action-oriented, and use friendly names rather than entity IDs. Service-only messages must remain service-only. Customer-facing output in the next implementation must avoid unsupported emergency-response, professional-response, alarm-service, and outcome-promise wording.

## Failed Tests

None recorded. No live tests have been performed in this HA-NOTIFY003 record yet.

## Blocked Tests

All live validation groups are blocked pending operator action. The most important blockers are:

- Companion push delivery for Chris, Luis, and Mr. Lewis.
- Authoritative live Building Mode helper/options/current state.
- Doorbell press entities and image/destination behavior.
- Lock/contact physical mapping for both doors, especially Bailey Double Doors.
- Safe health/recovery observability for cameras, doorbells, ZHA, Z-Wave JS, Reolink, backup, and critical automations.

## Unsupported Capabilities

No capability is marked unsupported yet from live evidence. Backup failure and automation failure remain future/conditional unless a reliable live signal is found.

## Profile Corrections Required

No BKLF REV06 correction has been made in this task yet because no live evidence has been provided. Repository-configured evidence suggests the Building Mode values differ from REV06, but live confirmation is required before editing REV06 under the profile correction rule.

## Implementation Conditions

Before HA-NOTIFY004 or any implementation task can proceed, this record needs operator evidence for:

- Companion service delivery and recipient role mapping.
- Exact mode source, values, permissions, history/logbook behavior, and suppression inputs.
- Exact doorbell, camera, lock, contact, motion, person/linger, controller, integration, backup, and automation observability sources.
- Destination route and media behavior.
- Readiness classification for every BKLF REV06 event.

## Validation Matrix

| Test ID | Event/capability | Repository assumption | Live action required | Expected result | Actual result | Evidence source | Timestamp | Status | Implementation impact | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| G1-01 | Chris push | `notify.chris_cell` exists. | Call notify service. | Chris receives test push. | Pending | operator evidence pending | Pending | blocked | Cannot route service-team notifications. | Use calm test wording. |
| G1-02 | Luis push | `notify.luis_cell` exists. | Call notify service. | Luis receives test push. | Pending | operator evidence pending | Pending | blocked | Cannot route service-team notifications. |  |
| G1-03 | Mr. Lewis push | `notify.me_lewis_cell` exists. | Call notify service. | Mr. Lewis receives test push. | Pending | operator evidence pending | Pending | blocked | Cannot route owner notifications. |  |
| G1-04 | Helen exclusion | `notify.sm_s931u1_helen_cell` exists but excluded. | Verify policy and avoid production routing. | Exclusion confirmed. | Pending | operator evidence pending | Pending | blocked | Prevent accidental customer routing. |  |
| G2-01 | User/person roles | Persons map to service and customer devices. | Review People/Users/Persons without recording private auth data. | Operational role facts confirmed. | Pending | operator evidence pending | Pending | blocked | Recipient mapping not ready. |  |
| G3-01 | Building Mode source | `input_select.bklf_building_mode` plus booleans. | Inspect helper live. | Exact source/options/current state confirmed. | Pending | operator evidence pending | Pending | blocked | Mode gating not ready. | Source options differ from REV06. |
| G4-01 | Quiet Hours inputs | Policy is 9 PM to 8 AM. | Inspect timezone and helpers. | Technical source confirmed. | Pending | operator evidence pending | Pending | blocked | Quiet Hours design not ready. |  |
| G5-01 | South doorbell press | Visitor entity exists in repo YAML. | Controlled press. | State change and route/media behavior confirmed. | Pending | operator evidence pending | Pending | blocked | Doorbell event not ready. |  |
| G5-02 | Bailey doorbell press | Visitor/person entities exist in dashboard refs. | Controlled press. | State change and route/media behavior confirmed. | Pending | operator evidence pending | Pending | blocked | Doorbell event not ready. |  |
| G6-01 | Camera/doorbell health | Reolink/camera entities exist. | Inspect live availability and safe outage options. | Observable unavailable/restored source confirmed. | Pending | operator evidence pending | Pending | blocked | Offline/recovery events not ready. |  |
| G7-01 | South lock | Lock/jam/battery entities exist. | Inspect and optional controlled state change. | State accuracy and timing confirmed. | Pending | operator evidence pending | Pending | blocked | Lock events not ready. |  |
| G7-02 | Bailey lock | Lock/jam/battery entities exist. | Inspect and optional controlled state change. | State accuracy and timing confirmed. | Pending | operator evidence pending | Pending | blocked | Lock events not ready. |  |
| G8-01 | South contact mapping | `binary_sensor.c01_south_entrance_door`. | Physically confirm open/closed. | Correct match confirmed. | Pending | operator evidence pending | Pending | blocked | No-lock-while-open guard not ready. |  |
| G8-02 | Bailey contact mapping | Contact pairing unresolved. | Physically confirm matching contact(s). | Correct match confirmed. | Pending | operator evidence pending | Pending | blocked | Implementation blocker if ambiguous. |  |
| G9-01 | Door-left-open timing | 90-second policy. | Optional controlled open duration. | Stable contact supports timing/reset. | Pending | operator evidence pending | Pending | blocked | Repeat sequence not ready. |  |
| G10-01 | Interior motion while Closed | M01/M02 motion entities. | Controlled motion test. | State/reset/noise confirmed. | Pending | operator evidence pending | Pending | blocked | Motion event not ready. |  |
| G11-01 | Parking-lot linger | Person and linger-area entities. | Controlled/observed continuous presence. | Five-minute feasibility confirmed. | Pending | operator evidence pending | Pending | blocked | Loitering event not ready. |  |
| G12-01 | Controller/integration health | ZHA, Z-Wave JS, Reolink present. | Inspect observable status sources. | Reliable outage/recovery source confirmed. | Pending | operator evidence pending | Pending | blocked | Service-only health events not ready. |  |
| G13-01 | Backup/automation signals | Future/conditional in REV06. | Inspect live sources. | Reliable signal found or marked unsupported. | Pending | operator evidence pending | Pending | blocked | Must not implement by inference. |  |
| G14-01 | Suppression windows | Maintenance/Installer booleans present; no update helper found. | Inspect live helpers. | Suppression inputs confirmed. | Pending | operator evidence pending | Pending | blocked | Suppression not ready. |  |
| G15-01 | Destination/media | Dashboard routes and camera entities exist. | Test Companion route open and image attachment. | Core push works with or without media. | Pending | operator evidence pending | Pending | blocked | Actions/media not ready. |  |
| G16-01 | Recovery behavior | Policy requires recovery. | Safely test or inspect distinguishable restored states. | Recovery feasibility confirmed. | Pending | operator evidence pending | Pending | blocked | Recovery not ready. |  |
| G17-01 | Message review | REV06 templates exist. | Operator/customer wording review. | Customer-safe names confirmed. | Pending | operator evidence pending | Pending | blocked | Message catalog not final. |  |
| G18-01 | Final readiness | Events listed in REV06. | Complete matrix evidence review. | READY/BLOCKED/UNSUPPORTED classifications complete. | Pending | operator evidence pending | Pending | blocked | HA-NOTIFY004 not authorized. |  |
