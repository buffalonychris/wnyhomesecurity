# HA-NOTIFY003 BKLF Live Notification Validation Record REV01

| Field | Value |
| --- | --- |
| Task ID | HA-NOTIFY003-BKLF-LIVE-NOTIFICATION-VALIDATION-001 |
| Task type | Operator-assisted live-system validation / evidence capture / implementation-readiness assessment |
| Customer / site | BK Lewis Funeral Home |
| Date/time | 2026-07-10, America/New_York |
| Operator | BKLF operator via Codex thread |
| Codex role | Repository fact review and validation recorder only |
| Home Assistant version | Backup-confirmed: 2026.6.4; live-confirmed: not rechecked in HA-NOTIFY003 |
| Supervisor version | Backup-confirmed: 2026.06.2; live-confirmed: not rechecked in HA-NOTIFY003 |
| Hardware platform | Backup-confirmed: Home Assistant Green |
| Final readiness decision | READY for initial bounded notification implementation with implementation acceptance-test conditions |
| Operator approval status | Operator approved revised readiness model and HA-NOTIFY004 recommendation |

## Scope Boundary

This record does not implement notification automations, create notify groups, enable routing, modify Home Assistant YAML, copy files to Home Assistant Green, restart Home Assistant, change dashboards, or change live configuration.

This record distinguishes direct HA-NOTIFY003 live tests, operator-confirmed prior live validation during the BKLF Companion setup process, repository/backup evidence, and implementation acceptance-test conditions.

## Evidence Source Classes

| Evidence class | Meaning | May satisfy this readiness record? |
| --- | --- | --- |
| operator-confirmed prior live validation | Operator confirms the capability was configured and successfully tested during the BKLF Companion setup process before HA-NOTIFY003. | Yes, for the specific Companion service gate approved by the operator. |
| live-confirmed | Direct operator observation or controlled live test performed during HA-NOTIFY003. | Yes. |
| operator-approved policy | Approved business rule from BKLF REV06 or later operator decision. | Yes for routing/policy decisions; technical behavior still needs acceptance testing unless separately confirmed. |
| backup-confirmed | Present in sanitized backup-derived registers. | Supports implementation inputs when paired with an acceptance-test condition; not treated as live behavior proof. |
| repository-configured | Present in source-controlled YAML or docs. | Supports implementation inputs when paired with an acceptance-test condition; not treated as live behavior proof. |
| implementation acceptance condition | Behavior that HA-NOTIFY004 must verify while implementing. | Allows initial implementation to proceed without falsely marking event behavior live-confirmed. |
| future / deferred | Not implemented in HA-NOTIFY004 unless a reliable signal is found and explicitly scoped. | No current implementation route. |

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

| Fact | Evidence class | Source | Readiness status | Impact |
| --- | --- | --- | --- | --- |
| Phase 1 channel is Home Assistant Companion push. | operator-approved policy | BKLF REV06 | READY | Use Companion push in HA-NOTIFY004. |
| `notify.chris_cell` exists and delivered during HA-NOTIFY003. | live-confirmed | notification register plus operator live service test | READY | Chris may receive service-team, system-health, and approved after-hours notifications. |
| `notify.luis_cell` exists and delivered during HA-NOTIFY003. | live-confirmed | notification register plus operator live service test | READY | Luis may receive service-team, system-health, and approved after-hours notifications. |
| `notify.me_lewis_cell` exists and delivered during HA-NOTIFY003. | live-confirmed | notification register plus operator live service test | READY | Mr. Lewis may receive customer/owner operational notifications. |
| `notify.sm_s931u1_helen_cell` exists and was previously configured/tested. | operator-confirmed prior live validation | operator decision and notification register | READY for technical presence; excluded from production routing | Do not route production notifications to Helen in HA-NOTIFY004. |
| Anthony has no confirmed Companion service. | backup-confirmed plus operator decision | notification register and operator decision | Excluded | Do not route production notifications to Anthony. |
| Building Mode source is `input_select.bklf_building_mode` with installer suppression from `input_boolean.bklf_installer_mode`. | repository-configured plus operator decision | helper register, `bklf_security.yaml`, operator decision | READY WITH IMPLEMENTATION CONDITION | Use temporary operational contract below. Do not block on naming refinements. |
| Quiet Hours are 9:00 PM through 8:00 AM, seven days per week. | operator-approved policy | BKLF REV06 and operator decision | READY WITH IMPLEMENTATION CONDITION | HA-NOTIFY004 may calculate Quiet Hours directly using local Home Assistant time unless a helper is explicitly authorized. |
| BKLF main dashboard route is `bklf-main`; desktop route is `bklf-desktop`. | repository-configured | `configuration.yaml`, dashboard YAML, last-known summary | READY WITH IMPLEMENTATION CONDITION | HA-NOTIFY004 may use supported routes and must acceptance-test Companion route behavior. |
| Notification automations in `bklf_notifications.yaml` are disabled scaffolds using persistent notifications. | repository-configured | automation register, package YAML | Not implementation source | Must not be treated as production routing. |

## Companion Service Results

| Service | Recipient mapping | Production posture | Title/body used | Test time | Delivery result | Evidence source | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `notify.chris_cell` | Chris / service team | Approved for service-team, system-health, and approved after-hours routing | `WNYHS Notification Validation Test` / `Test message for Chris  no action required.` | 2026-07-10 13:01 -04:00 | Received immediately; no delay; no Home Assistant errors reported | Operator report in HA-NOTIFY003 live test; operator-confirmed prior Companion setup validation | passed | Group 1 service test G1-01 complete. |
| `notify.luis_cell` | Luis / service team | Approved for service-team, system-health, and approved after-hours routing | `WNYHS Notification Validation Test` / `Test message for Luis  no action required.` | 2026-07-10 13:02 -04:00 | Received; no delay; no Home Assistant errors reported | Operator report in HA-NOTIFY003 live test; operator-confirmed prior Companion setup validation | passed | Group 1 service test G1-02 complete. |
| `notify.me_lewis_cell` | Mr. Lewis / owner primary | Approved for customer/owner operational routing | `WNYHS Notification Validation Test` / `Test message for Mr. Lewis  no action required.` | 2026-07-10 13:03 -04:00 | Received; no delay; no Home Assistant errors reported | Operator report in HA-NOTIFY003 live test; operator-confirmed prior Companion setup validation | passed | Group 1 service test G1-03 complete. |
| `notify.sm_s931u1_helen_cell` | Helen / excluded | Technically configured and previously tested, but excluded from production routing | No HA-NOTIFY003 repeat test required by operator decision | Prior BKLF Companion setup process | Previously tested successfully per operator; no HA-NOTIFY003 push repeated | Operator-confirmed prior live validation during BKLF Companion setup process | accepted / excluded | Technical presence accepted. No Helen production route. |
| Anthony | No confirmed service | Excluded | Not applicable | Not applicable | No confirmed service | Repository evidence and operator decision | excluded | No Anthony production route. |

## Role And Recipient Results

| Role fact | Evidence | Status | Implementation impact |
| --- | --- | --- | --- |
| Mr. Lewis is owner/customer primary recipient. | BKLF REV06 policy, `notify.me_lewis_cell`, HA-NOTIFY003 push receipt, operator decision. | READY | Route owner/customer operational notifications to Mr. Lewis. |
| Chris and Luis are service-team recipients. | BKLF REV06 policy, `notify.chris_cell`, `notify.luis_cell`, HA-NOTIFY003 push receipt, operator decision. | READY | Route service-team, system-health, and approved after-hours notifications to Chris and Luis. |
| Helen remains excluded from production routing. | BKLF REV06 policy and explicit operator decision. | READY | Exclude Helen even though service is technically configured and previously tested. |
| Anthony excluded until service is confirmed. | Notification register and explicit operator decision. | READY | Exclude Anthony because no service is confirmed. |
| Auth roles and HA permissions are not recorded. | User/person register excludes private auth data. | Not required for HA-NOTIFY004 start | Do not record private auth details. |

## Building Mode Results

| Item | Evidence | Status | Implementation impact |
| --- | --- | --- | --- |
| Authoritative operational source | `input_select.bklf_building_mode`; installer suppression from `input_boolean.bklf_installer_mode`. | READY WITH IMPLEMENTATION CONDITION | HA-NOTIFY004 must use these sources unless live acceptance testing proves a factual mismatch. |
| Current operational values | `Open`, `Service`, `Cleaning`, `Maintenance`, `Closed`, `After Hours`; installer suppression via `input_boolean.bklf_installer_mode`. | READY WITH IMPLEMENTATION CONDITION | Use the mapping below. |
| REV06 naming gaps | `Consultation`, `Service / Event`, and `Installer Mode` as input-select values are not present in current repository-configured helper values. | Deferred refinement | Do not block HA-NOTIFY004. Refine in a later dashboard/building-mode task. |
| Automation observability | Helper exists in source YAML; `configuration.yaml` enables history/logbook. | READY WITH IMPLEMENTATION CONDITION | HA-NOTIFY004 must acceptance-test state changes or restrict mode-dependent logic if observation fails. |

### Building Mode Operational Contract

| Source value / helper | Initial HA-NOTIFY004 meaning |
| --- | --- |
| `Open` | occupied |
| `Service` | occupied service/event |
| `Cleaning` | occupied/suppressed |
| `Maintenance` | maintenance suppression/service routing |
| `Closed` | secured |
| `After Hours` | secured |
| `input_boolean.bklf_installer_mode` | installer suppression/test routing |

## Quiet Hours Inputs

| Input | Evidence | Status | Implementation impact |
| --- | --- | --- | --- |
| Approved window | 9:00 PM through 8:00 AM, seven days per week. | READY WITH IMPLEMENTATION CONDITION | Implement direct local-time calculation unless a helper is separately authorized. |
| Dedicated helper | No helper confirmed in reviewed repository/backup evidence. | Not required | Direct calculation is allowed for HA-NOTIFY004. |
| Timezone | Backup says BKLF Home Assistant system is in Buffalo/New York operating context; live timezone not rechecked in HA-NOTIFY003. | Acceptance-test condition | HA-NOTIFY004 must verify local time behavior before handoff. |

## Doorbell Results

| Doorbell | Repository/backup evidence | Status | HA-NOTIFY004 acceptance condition |
| --- | --- | --- | --- |
| South Entrance Doorbell | Camera: `camera.south_wall_south_entrance_doorbell_fluent`; visitor: `binary_sensor.south_wall_south_entrance_doorbell_visitor`; person/motion entities referenced in templates. | READY WITH IMPLEMENTATION CONDITION | Test press state change, duplicate behavior, customer-facing name, destination route, and optional image. |
| Bailey Double Doors Doorbell | Camera: `camera.east_wall_bailey_double_door_fluent`; visitor/person/motion/vehicle/pet entities under `east_wall_bailey_double_door`. | READY WITH IMPLEMENTATION CONDITION | Test press state change, duplicate behavior, customer-facing name, destination route, and optional image. |

Talk, Snapshot, Unlock, Lock, and View Live dashboard controls are not notification requirements for this task.

## Camera And Doorbell Health Results

| Device/integration | Evidence | Status | HA-NOTIFY004 acceptance condition |
| --- | --- | --- | --- |
| South Entrance Doorbell availability | Camera entity backup-confirmed. | READY WITH IMPLEMENTATION CONDITION | Implement only against reliable availability/restored observation. |
| Bailey Double Doors Doorbell availability | Camera entity backup-confirmed. | READY WITH IMPLEMENTATION CONDITION | Implement only against reliable availability/restored observation. |
| Parking Lot camera availability | `camera.south_wall_cam01_southwest_corner_parking_lot_fluent` backup-confirmed. | READY WITH IMPLEMENTATION CONDITION | Implement only against reliable availability/restored observation. |
| Reolink integration health | Integration backup-confirmed. | READY WITH IMPLEMENTATION CONDITION | Use reliable integration/entity status if available; otherwise defer generic integration failure. |
| 180-second outage test | Not approved/performed. | Not required for HA-NOTIFY004 start | Do not disconnect equipment unless a later task explicitly approves a safe test. |

## Lock Results

| Lock | Repository/backup evidence | Status | HA-NOTIFY004 acceptance condition |
| --- | --- | --- | --- |
| South Entrance Lock | `lock.south_wall_home_connect_620_connected_smart_lock`; jam `binary_sensor.south_wall_home_connect_620_connected_smart_lock_lock_jammed`; battery/replace/tamper/node entities under South Wall prefix. | READY WITH IMPLEMENTATION CONDITION | Test state accuracy, diagnostic entities, and whether the 15-second confirmation window is adequate. |
| Bailey Double Doors Lock | `lock.east_wall_bailey_double_doors`; jam `binary_sensor.east_wall_bailey_double_doors_lock_jammed`; node `sensor.east_wall_bailey_double_doors_node_status`; battery/replace/tamper entities under Bailey prefix. | READY WITH IMPLEMENTATION CONDITION | Test state accuracy, diagnostic entities, and whether the 15-second confirmation window is adequate. |

No lock commands were executed by Codex. Five repeated lock attempts are not approved or performed in this task record.

## Door / Contact Mappings

| Lock | Repository/backup contact evidence | Status | HA-NOTIFY004 acceptance condition |
| --- | --- | --- | --- |
| South Entrance Lock | `binary_sensor.c01_south_entrance_door` relates to South Entrance Lock. | READY WITH IMPLEMENTATION CONDITION | Confirm physical open/closed behavior before enabling any no-lock-while-open guard. |
| Bailey Double Doors Lock | Repository evidence points to front/double-door contacts `binary_sensor.c10_south_wall_window_1` and `binary_sensor.c11_south_wall_window_2`; lock register says current live contact pairing still requires verification. | READY WITH IMPLEMENTATION CONDITION | Implement cautiously only after confirming exact physical mapping; defer lock/contact-dependent actions if ambiguity remains. |

## Motion Results

| Motion source | Evidence | Status | HA-NOTIFY004 acceptance condition |
| --- | --- | --- | --- |
| Main Hallway | `binary_sensor.m01_main_hallway_motion`, `binary_sensor.m01_main_hallway_motion_occupancy`. | READY WITH IMPLEMENTATION CONDITION | Test state-change, reset duration, noise, and closed/secured-mode suppression. |
| Viewing Room | `binary_sensor.m02_viewing_room_motion`, `binary_sensor.m02_viewing_room_motion_occupancy`. | READY WITH IMPLEMENTATION CONDITION | Test state-change, reset duration, noise, and closed/secured-mode suppression. |
| Template | `binary_sensor.bklf_interior_motion_active`. | READY WITH IMPLEMENTATION CONDITION | Verify live template behavior before relying on it for routing. |

## Parking-Lot Person / Linger Results

| Source | Evidence | Status | HA-NOTIFY004 acceptance condition |
| --- | --- | --- | --- |
| Parking Lot camera | `camera.south_wall_cam01_southwest_corner_parking_lot_fluent`. | READY WITH IMPLEMENTATION CONDITION | Confirm image and route behavior if used. |
| Person entity | `binary_sensor.south_wall_cam01_southwest_corner_parking_lot_person`. | READY WITH IMPLEMENTATION CONDITION | Generic person detection may support a basic person event but does not by itself prove loitering. |
| Linger-area person entity | `binary_sensor.south_wall_cam01_southwest_corner_parking_lot_linger_area_1_person`. | READY WITH IMPLEMENTATION CONDITION | Test continuous five-minute presence and reset behavior before implementing loitering wording. |
| Template | `binary_sensor.bklf_cam01_person_active`. | READY WITH IMPLEMENTATION CONDITION | Verify live response before relying on it. |

## Controller And Integration Health Results

| System | Evidence | Status | HA-NOTIFY004 acceptance condition |
| --- | --- | --- | --- |
| Zigbee/ZHA controller | Network Closet Zigbee Coordinator / ZHA backup-confirmed. | READY WITH IMPLEMENTATION CONDITION | Implement only if a reliable observable HA/ZHA/controller status or dependent-entity availability pattern is found. |
| Z-Wave controller | Zooz ZST39 LR / Z-Wave JS backup-confirmed. | READY WITH IMPLEMENTATION CONDITION | Implement only if a reliable observable HA/Z-Wave/controller status or dependent-entity availability pattern is found. |
| Reolink | Integration backup-confirmed. | READY WITH IMPLEMENTATION CONDITION | Implement only reliable status/availability signals; defer generic integration failure if no signal exists. |
| Mobile App | Four Companion services accepted by operator evidence. | READY | Use only Mr. Lewis, Chris, and Luis in production routing. |
| Supervisor/Backup | Supervisor and backup integrations backup-confirmed. | FUTURE / DEFERRED for backup failure/stale backup | Do not implement backup failure unless HA-NOTIFY004 finds and scopes a reliable signal. |

## Backup / Automation Observability

| Capability | Evidence | Status | Implementation impact |
| --- | --- | --- | --- |
| Backup failure or stale backup | Backup integration present, but reliable failure/staleness signal is not confirmed. | FUTURE / DEFERRED | Do not implement in HA-NOTIFY004 unless a reliable signal is discovered and explicitly scoped. |
| Critical automation failure | Disabled scaffold automations exist; reliable current failure signal is not confirmed. | FUTURE / DEFERRED | Do not implement in HA-NOTIFY004 unless a reliable signal is discovered and explicitly scoped. |

## Suppression-Window Results

| Suppression need | Evidence | Status | HA-NOTIFY004 acceptance condition |
| --- | --- | --- | --- |
| Maintenance Mode | `input_boolean.bklf_maintenance_mode`; mode option `Maintenance`. | READY WITH IMPLEMENTATION CONDITION | Use `Maintenance` value and/or helper consistently with the Building Mode contract; acceptance-test suppression. |
| Installer Mode | `input_boolean.bklf_installer_mode`; no `Installer Mode` input-select value in source YAML. | READY WITH IMPLEMENTATION CONDITION | Use boolean for installer suppression/test routing. |
| Approved update/restart window | No helper found in reviewed repository evidence. | READY WITH IMPLEMENTATION CONDITION | Implement with a scoped condition or defer update/restart-specific suppression if no reliable guard exists. |

## Destination / Media Results

| Destination/media item | Evidence | Status | HA-NOTIFY004 acceptance condition |
| --- | --- | --- | --- |
| Main dashboard route | `bklf-main`. | READY WITH IMPLEMENTATION CONDITION | Acceptance-test Companion route open behavior. |
| Desktop route | `bklf-desktop`. | READY WITH IMPLEMENTATION CONDITION | Use only where appropriate; mobile push should prefer mobile-suitable route. |
| Doorbell view | `/bklf-main/doorbell` appears in dashboard YAML. | READY WITH IMPLEMENTATION CONDITION | Acceptance-test route from notification. |
| Cameras view | `/bklf-main/cameras` appears in dashboard YAML. | READY WITH IMPLEMENTATION CONDITION | Acceptance-test route from notification. |
| Locks view | `/bklf-main/locks` appears in dashboard YAML. | READY WITH IMPLEMENTATION CONDITION | Acceptance-test route from notification. |
| Camera snapshot/media | Camera entities present. | READY WITH IMPLEMENTATION CONDITION | Core push must still deliver if media attachment fails. |

## Recovery Results

Recovery support is READY WITH IMPLEMENTATION CONDITION only for events with a reliable observable restored state during HA-NOTIFY004. If an integration or entity does not expose a distinguishable recovered state, the recovery event must be deferred rather than inferred.

## Customer-Safe Message Review

Initial BKLF REV06 templates are calm, action-oriented, and use friendly names rather than entity IDs. Service-only technical messages must remain service-only. Customer-facing output in the next implementation must avoid unsupported alarm-service, public-safety, professional-response, or outcome-promise wording.

## Failed Tests

None recorded.

## Blocked Tests

No HA-NOTIFY003 blocker remains for starting an initial bounded notification implementation. Event/entity behavior not directly live-tested in HA-NOTIFY003 is explicitly moved to HA-NOTIFY004 implementation acceptance testing.

## Unsupported Capabilities

No currently requested event is marked NOT SUPPORTED from this record. Capabilities that lack reliable current signals are classified as FUTURE / DEFERRED instead of READY:

- backup failure or stale backup notification
- critical automation failure notification
- generic critical integration failure beyond reliable entity/integration signals

## Profile Corrections Required

No BKLF REV06 correction was made in HA-NOTIFY003. The operator approved using the current repository-configured Building Mode helper values as a temporary operational contract. Consultation and Service / Event naming refinements are deferred to a later dashboard/building-mode refinement task.

## Implementation Conditions

HA-NOTIFY004 may proceed if it:

- routes production notifications only to Mr. Lewis, Chris, and Luis according to the role policy above
- excludes Helen and Anthony from production routing
- uses the Building Mode operational contract documented above
- implements Quiet Hours as 9:00 PM through 8:00 AM, seven days per week, by direct local-time calculation unless a helper is separately authorized
- acceptance-tests each implemented event/entity trigger, timing rule, recovery rule, destination link, and media attachment behavior before handoff
- defers backup failure, automation failure, and any generic integration failure lacking a reliable signal

## Validation Matrix

| Test ID | Event/capability | Repository assumption | Live action required | Expected result | Actual result | Evidence source | Timestamp | Status | Implementation impact | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| G1-01 | Chris push | `notify.chris_cell` exists. | Call notify service. | Chris receives test push. | Received immediately; no delay; no Home Assistant errors reported. | Operator confirmed receipt on target phone; prior Companion setup validation also accepted. | 2026-07-10 13:01 -04:00 | passed | READY. Chris service may be used for approved service-team routing. | Test title/body: `WNYHS Notification Validation Test` / `Test message for Chris  no action required.` |
| G1-02 | Luis push | `notify.luis_cell` exists. | Call notify service. | Luis receives test push. | Received; no delay; no Home Assistant errors reported. | Operator confirmed receipt on target phone; prior Companion setup validation also accepted. | 2026-07-10 13:02 -04:00 | passed | READY. Luis service may be used for approved service-team routing. | Test title/body: `WNYHS Notification Validation Test` / `Test message for Luis  no action required.` |
| G1-03 | Mr. Lewis push | `notify.me_lewis_cell` exists. | Call notify service. | Mr. Lewis receives test push. | Received; no delay; no Home Assistant errors reported. | Operator confirmed receipt on target phone; prior Companion setup validation also accepted. | 2026-07-10 13:03 -04:00 | passed | READY. Mr. Lewis service may be used for owner/customer operational routing. | Test title/body: `WNYHS Notification Validation Test` / `Test message for Mr. Lewis  no action required.` |
| G1-04 | Helen technical service / exclusion | `notify.sm_s931u1_helen_cell` exists but is excluded. | No repeat HA-NOTIFY003 test required by operator decision. | Technical service accepted; production exclusion maintained. | Previously configured and successfully tested during BKLF Companion setup; excluded from production routing. | Operator-confirmed prior live validation during BKLF Companion setup process. | 2026-07-10 | accepted / excluded | READY for exclusion. Do not route to Helen. | No HA-NOTIFY003 repeat push. |
| G1-05 | Anthony exclusion | No confirmed Anthony service. | None. | Exclusion maintained. | No confirmed service. | Repository evidence and operator decision. | 2026-07-10 | excluded | READY for exclusion. Do not route to Anthony. |  |
| G2-01 | User/person roles | Persons map to service and customer devices. | No additional live user review required for HA-NOTIFY004 start. | Operational routing policy confirmed. | Mr. Lewis owner/customer; Chris and Luis service-team/system-health/approved after-hours; Helen and Anthony excluded. | Operator decision. | 2026-07-10 | passed | Recipient routing READY. | Do not record private auth data. |
| G3-01 | Building Mode source | `input_select.bklf_building_mode` plus `input_boolean.bklf_installer_mode`. | Acceptance-test during implementation. | Operational mode contract usable. | Operator approved current repository-configured values as temporary contract. | Repository configuration plus operator decision. | 2026-07-10 | ready with implementation condition | Use documented mapping in HA-NOTIFY004. | Consultation and Service / Event naming refinements deferred. |
| G4-01 | Quiet Hours inputs | Policy is 9:00 PM to 8:00 AM. | Acceptance-test local-time behavior during implementation. | Quiet Hours usable. | Operator-approved policy; no helper required. | BKLF REV06 plus operator decision. | 2026-07-10 | ready with implementation condition | Calculate directly unless helper is separately authorized. |  |
| G5-01 | South doorbell press | Visitor entity exists in repo/backup evidence. | Acceptance-test during implementation. | State change and route/media behavior confirmed before handoff. | Entity available from repository/backup evidence. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement with acceptance test. | Do not treat behavior as live-confirmed yet. |
| G5-02 | Bailey doorbell press | Visitor/person entities exist in repo/backup evidence. | Acceptance-test during implementation. | State change and route/media behavior confirmed before handoff. | Entity available from repository/backup evidence. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement with acceptance test. | Do not treat behavior as live-confirmed yet. |
| G6-01 | Camera/doorbell health | Reolink/camera entities exist. | Acceptance-test reliable availability/restored signals during implementation. | Only reliable signals implemented. | Entity/integration evidence available. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement reliable signals; defer generic failures lacking signal. |  |
| G7-01 | South lock | Lock/jam/battery entities exist. | Acceptance-test during implementation. | State accuracy, timing, and diagnostics validated before handoff. | Entity evidence available. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement with 15-second confirmation acceptance test. |  |
| G7-02 | Bailey lock | Lock/jam/battery entities exist. | Acceptance-test during implementation. | State accuracy, timing, and diagnostics validated before handoff. | Entity evidence available. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement with 15-second confirmation acceptance test. |  |
| G8-01 | South contact mapping | `binary_sensor.c01_south_entrance_door`. | Acceptance-test physical mapping before enabling guard. | Correct contact confirmed. | Entity evidence available. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement only after acceptance confirmation. |  |
| G8-02 | Bailey contact mapping | Candidate contacts exist but pairing needs confirmation. | Acceptance-test physical mapping before enabling guard. | Correct contact confirmed or guard deferred. | Candidate entity evidence available. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Defer lock/contact guard if ambiguity remains. |  |
| G9-01 | Door-left-open timing | 90-second policy. | Acceptance-test contact stability/timing. | 90-second first alert, repeat, max five notifications, reset behavior feasible. | Policy and contact evidence available. | BKLF REV06 plus repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement with timing acceptance test. |  |
| G10-01 | Interior motion while secured | M01/M02 motion entities. | Acceptance-test state/reset/noise. | Motion behavior supports cooldown and suppression. | Entity evidence available. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement with acceptance test. | Use current Building Mode contract. |
| G11-01 | Parking-lot person/loitering | Person and linger-area entities. | Acceptance-test continuous presence and reset. | Five-minute presence observable or event is scoped down/deferred. | Entity evidence available. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement only if linger signal behaves reliably. | Generic person detection alone cannot support loitering wording. |
| G12-01 | Controller/integration health | ZHA, Z-Wave JS, Reolink present. | Acceptance-test reliable observable status. | Reliable outage/restored source confirmed or event deferred. | Integration evidence available. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement only reliable signals. |  |
| G13-01 | Backup/automation signals | Future/conditional in REV06. | Inspect during implementation only if scoped. | Reliable signal found or event remains deferred. | No reliable current signal confirmed. | Repository/backup evidence and REV06. | 2026-07-10 | future / deferred | Do not implement by inference. |  |
| G14-01 | Suppression windows | Maintenance/Installer helpers present; no update helper found. | Acceptance-test helper behavior during implementation. | Suppression inputs work with mode contract. | Current sources accepted by operator. | Repository evidence plus operator decision. | 2026-07-10 | ready with implementation condition | Implement maintenance/installer suppression; handle update/restart only if reliable guard exists. |  |
| G15-01 | Destination/media | Dashboard routes and camera entities exist. | Acceptance-test notification route open and image behavior. | Core push works with or without media. | Route/entity evidence available. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement route/media with fallback behavior. |  |
| G16-01 | Recovery behavior | Policy requires recovery. | Acceptance-test distinguishable restored states. | Recovery implemented only where reliable. | Recovery behavior not live-confirmed in HA-NOTIFY003. | Repository/backup evidence. | 2026-07-10 | ready with implementation condition | Implement reliable recovery only; defer inferred recovery. |  |
| G17-01 | Message review | REV06 templates exist. | Review during implementation. | Customer-safe names and calm wording used. | Initial review complete. | BKLF REV06 review. | 2026-07-10 | passed | Use friendly names; keep service-only technical messages off owner routing. |  |
| G18-01 | Final readiness | Events listed in REV06. | Complete matrix evidence review. | Readiness classifications complete. | Matrix supports initial bounded implementation with conditions and deferred items. | Readiness matrix REV01 and operator decision. | 2026-07-10 | passed | Proceed to HA-NOTIFY004. |  |
