# HA-NOTIFY003 BKLF Implementation Readiness Matrix REV01

Task ID: HA-NOTIFY003-BKLF-LIVE-NOTIFICATION-VALIDATION-001

Status: Complete for initial bounded implementation readiness.

Readiness rule: backup/repository evidence may support initial implementation only when paired with operator approval and an implementation acceptance-test condition. Backup/repository evidence is not relabeled as live-confirmed event behavior.

## Classification Key

| Classification | Meaning |
| --- | --- |
| READY | Operator evidence or approved repository contract is sufficient for initial implementation. |
| READY WITH IMPLEMENTATION CONDITION | Initial implementation may proceed, but HA-NOTIFY004 must include explicit acceptance tests or scoped limitations. |
| BLOCKED | Mandatory prerequisite is missing and prevents initial implementation. |
| NOT SUPPORTED | Evidence proves the capability is unavailable or unreliable. |
| FUTURE / DEFERRED | Capability lacks a reliable current signal, is outside phase 1, or requires a later bounded task. |

## Global Readiness Gates

| Gate | Status | Evidence | Implementation condition |
| --- | --- | --- | --- |
| Companion services | READY | Operator confirms prior BKLF Companion setup validation for `notify.chris_cell`, `notify.luis_cell`, `notify.me_lewis_cell`, and `notify.sm_s931u1_helen_cell`; HA-NOTIFY003 also directly tested Chris, Luis, and Mr. Lewis on 2026-07-10 with no delay and no Home Assistant errors. | HA-NOTIFY004 may route only to Mr. Lewis, Chris, and Luis. Helen remains excluded from production routing. Anthony remains excluded because no service is confirmed. |
| Production recipient routing | READY | Operator decision: Mr. Lewis receives customer/owner operational notifications; Chris and Luis receive service-team, system-health, and approved after-hours notifications; Helen technically configured but excluded; Anthony excluded. | Use role-based routing. Do not create a Helen or Anthony production route. |
| Building Mode source and values | READY WITH IMPLEMENTATION CONDITION | Operator accepts current repository-configured helper contract: `input_select.bklf_building_mode` values `Open`, `Service`, `Cleaning`, `Maintenance`, `Closed`, `After Hours`, plus `input_boolean.bklf_installer_mode`. | HA-NOTIFY004 must map modes as documented below. Consultation and Service / Event naming refinements are deferred to a later dashboard/building-mode refinement task. |
| Quiet Hours policy | READY WITH IMPLEMENTATION CONDITION | BKLF REV06 and operator-approved policy: 9:00 PM through 8:00 AM, seven days per week. No dedicated helper is repository-confirmed. | HA-NOTIFY004 may calculate Quiet Hours directly using local Home Assistant time; add acceptance test for High/Critical immediate and Normal/Low delayed behavior. |
| Entity availability for initial events | READY WITH IMPLEMENTATION CONDITION | Current backup/repository evidence provides the relevant doorbell, camera, lock, contact, motion, person/linger, controller, and integration entities used by the initial event set. | HA-NOTIFY004 must include implementation acceptance tests for state changes, timing, recovery, destination links, and media where implemented. |
| Production route creation | READY WITH IMPLEMENTATION CONDITION | Routing policy is now approved for initial implementation. | No production route is created by HA-NOTIFY003. HA-NOTIFY004 must implement and test routes separately. |

## Building Mode Operational Contract

| Current source/value | Initial notification meaning | Implementation use |
| --- | --- | --- |
| `input_select.bklf_building_mode = Open` | Occupied | Suppress occupied/noise-sensitive security events. |
| `input_select.bklf_building_mode = Service` | Occupied service/event | Suppress occupied/noise-sensitive security events. |
| `input_select.bklf_building_mode = Cleaning` | Occupied/suppressed | Suppress occupied/noise-sensitive security events. |
| `input_select.bklf_building_mode = Maintenance` | Maintenance suppression/service routing | Suppress customer-facing operational noise; retain service routing where appropriate. |
| `input_select.bklf_building_mode = Closed` | Secured | Enable Closed-mode security and after-hours events. |
| `input_select.bklf_building_mode = After Hours` | Secured | Treat as secured for initial notification logic. |
| `input_boolean.bklf_installer_mode = on` | Installer suppression/test routing | Suppress customer-facing notifications and use test/service routing only. |

## Event Readiness Matrix

| BKLF REV06 event | Classification | Current evidence | HA-NOTIFY004 acceptance condition |
| --- | --- | --- | --- |
| Doorbell press | READY WITH IMPLEMENTATION CONDITION | South visitor entity and Bailey doorbell visitor/person entities are repository/backup-confirmed. Companion routes are ready for approved recipients. | Test South and Bailey press behavior, duplicate suppression, customer-facing names, push delivery, and destination route. Image is optional and must not block core delivery. |
| Camera offline/restored | READY WITH IMPLEMENTATION CONDITION | Camera entities and Reolink integration are repository/backup-confirmed. | Implement sustained unavailable/restored logic only for confirmed camera entities; test or simulate safe state transitions where practical. Suppress expected update/restart noise. |
| Doorbell offline/restored | READY WITH IMPLEMENTATION CONDITION | Doorbell camera entities are repository/backup-confirmed. | Test sustained unavailable/restored behavior where practical. Route to Mr. Lewis, Chris, and Luis as approved. |
| Lock jam | READY WITH IMPLEMENTATION CONDITION | Jam/problem entities are repository/backup-confirmed for both locks. | Acceptance-test jam/problem entity state handling where possible; otherwise verify template/event behavior without forcing a physical jam. |
| Lock battery low | READY WITH IMPLEMENTATION CONDITION | Battery and replace-battery entities are repository/backup-confirmed. | Implement threshold/replace-flag logic and test with safe entity-state validation or developer-tool simulation if appropriate. |
| Failure to secure | READY WITH IMPLEMENTATION CONDITION | Lock entities, contact entities, and five-attempt/15-second policy are documented. | Implement with no-lock-while-open guard, five total attempts spaced 15 seconds apart, and final failure notification. Acceptance-test with safe controlled lock/contact scenarios. |
| Door left open | READY WITH IMPLEMENTATION CONDITION | Exterior contact entities and 90-second/five-notification policy are documented. | Implement first alert at 90 seconds, repeat every 90 seconds, five total notifications, immediate stop/reset when closed. Acceptance-test at least one safe contact. |
| Exterior opening while Closed | READY WITH IMPLEMENTATION CONDITION | Exterior contact entities and secured-mode contract are documented. | Use `Closed` and `After Hours` as secured modes. Acceptance-test one safe exterior contact. |
| Interior motion while Closed | READY WITH IMPLEMENTATION CONDITION | M01/M02 motion and occupancy entities plus `binary_sensor.bklf_interior_motion_active` are repository/backup-confirmed. | Use `Closed` and `After Hours` as secured modes; suppress occupied/service/cleaning/maintenance/installer contexts. Acceptance-test controlled motion/reset behavior. |
| Parking-lot person/loitering | READY WITH IMPLEMENTATION CONDITION | Parking Lot camera, person entity, linger-area person entity, and `binary_sensor.bklf_cam01_person_active` are repository/backup-confirmed. | Implement only if the linger-area person entity supports continuous-presence logic. Acceptance-test or mark loitering condition limited to available Reolink entity behavior. |
| Zigbee controller outage/restored | READY WITH IMPLEMENTATION CONDITION | ZHA integration and Zigbee coordinator are backup-confirmed. | Implement only against a reliable observable HA/ZHA/controller status or dependent-entity availability pattern found during HA-NOTIFY004. If no reliable signal is found during implementation, defer this event. |
| Z-Wave controller outage/restored | READY WITH IMPLEMENTATION CONDITION | Z-Wave JS integration and Z-Wave controller are backup-confirmed. | Implement only against a reliable observable HA/Z-Wave/controller status or dependent-entity availability pattern found during HA-NOTIFY004. If no reliable signal is found during implementation, defer this event. |
| Critical integration failure/restored | READY WITH IMPLEMENTATION CONDITION | Reolink, Mobile App, ZHA, Z-Wave JS, Supervisor, and Backup integrations are backup-confirmed. | Implement only integration failures with reliable current HA signals. Generic integration auth/setup failures without reliable entities are deferred. |
| Automation failure | FUTURE / DEFERRED | REV06 says future/conditional; no reliable current signal is confirmed. | Do not implement in HA-NOTIFY004 unless a reliable signal is discovered and explicitly scoped. |
| Backup failure | FUTURE / DEFERRED | Backup integration is present, but reliable failure/staleness signal is not confirmed. | Defer unless HA-NOTIFY004 finds a reliable current backup failure/staleness entity and includes acceptance testing. |
| Maintenance/test events | READY WITH IMPLEMENTATION CONDITION | Maintenance helper, Installer helper, and approved service-team recipients are documented. | Use implementation-test/service routing only; no broad all-active production route. |

## Deferred Items

| Deferred item | Reason |
| --- | --- |
| Automation failure notification | No reliable current automation-failure signal is confirmed. |
| Backup failure/stale backup notification | Reliable failure/staleness signal is not confirmed. |
| Generic critical integration failure beyond reliable entity/integration signals | Implement only where HA-NOTIFY004 identifies a reliable observable signal. |
| Consultation and Service / Event mode naming refinements | Operator assigned these to a later dashboard/building-mode refinement task. |
| Helen production routing | Technically configured and previously tested, but explicitly excluded. |
| Anthony production routing | No confirmed service. |

## Implementation-Ready Inputs

| Input | Status | Implementation input |
| --- | --- | --- |
| Companion production services | READY | `notify.me_lewis_cell`, `notify.chris_cell`, `notify.luis_cell`. |
| Production recipients | READY | Mr. Lewis owner/customer operational route; Chris and Luis service-team/system-health/approved after-hours route. |
| Excluded recipients | READY | Helen excluded despite technical configuration; Anthony excluded because no service is confirmed. |
| Building Mode helper | READY WITH IMPLEMENTATION CONDITION | Use `input_select.bklf_building_mode` and `input_boolean.bklf_installer_mode` mapping above. |
| Quiet Hours | READY WITH IMPLEMENTATION CONDITION | 9:00 PM through 8:00 AM, seven days per week; calculate directly unless HA-NOTIFY004 adds a separately authorized helper. |
| Initial event/entity set | READY WITH IMPLEMENTATION CONDITION | Use repository/backup-confirmed entities; HA-NOTIFY004 acceptance tests must validate behavior before handoff. |

## Next Task Recommendation

Proceed to `HA-NOTIFY004-BKLF-NOTIFICATION-IMPLEMENTATION-001` as the immediate next bounded task.

HA-NOTIFY004 must implement only the READY and READY WITH IMPLEMENTATION CONDITION items above, preserve Helen and Anthony exclusions, include acceptance tests for event/entity behavior, and defer any event whose reliable signal cannot be confirmed during implementation.
