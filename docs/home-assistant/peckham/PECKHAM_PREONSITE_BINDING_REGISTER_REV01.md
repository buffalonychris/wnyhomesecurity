# Peckham Pre-Onsite Dashboard Binding Register REV01

Status: Phase A backup-bound preview complete; Phase B onsite completion pending

Task: `T-HA-DASH-PECKHAM-002`

Site identity: `PK | PECKHAM`

## Purpose and evidence boundary

This sanitized register records the exact Peckham contact entities verified from the operator-supplied Home Assistant backup for the Phase A dashboard preview. Backup verification establishes that each listed entity exists. It does not establish an individual window's room, wall, direction, exact opening, or onsite behavior.

`Sensor13` is separately operator-confirmed as the Main Entrance Door. The remaining 15 contacts retain generic customer-facing labels until onsite trigger testing establishes their physical locations.

The repository dashboards are Phase A preview artifacts. They are not registered or deployed by this task.

## Contact binding register

| Slot | Customer label | Backup-verified entity ID | Identity evidence | Final physical label / area | Onsite tested state | Phase B notes |
|---|---|---|---|---|---|---|
| Contact 01 | Main Entrance Door | `binary_sensor.sensor13` | Backup verified; operator confirmed as Main Entrance Door | Main Entrance Door / Main Entrance | Pending onsite verification | Trigger and verify open/closed behavior before final acceptance. |
| Contact 02 | Window Sensor 01 | `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 03 | Window Sensor 02 | `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003_2` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 04 | Window Sensor 03 | `binary_sensor.sensor03` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 05 | Window Sensor 04 | `binary_sensor.sensor04` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 06 | Window Sensor 05 | `binary_sensor.sensor05` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 07 | Window Sensor 06 | `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003_3` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 08 | Window Sensor 07 | `binary_sensor.sensor7` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 09 | Window Sensor 08 | `binary_sensor.sensor08` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 10 | Window Sensor 09 | `binary_sensor.sensor09` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 11 | Window Sensor 10 | `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003_4` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 12 | Window Sensor 11 | `binary_sensor.sensor11` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 13 | Window Sensor 12 | `binary_sensor.sensor12` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 14 | Window Sensor 13 | `binary_sensor.sensor14` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 15 | Window Sensor 14 | `binary_sensor.sensor15` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |
| Contact 16 | Window Sensor 15 | `binary_sensor.sensor16` | Backup verified | Pending onsite physical identification | Pending onsite verification | Trigger physically; do not infer location. |

`Contact 01` through `Contact 16` are register slots, not source device numbers. `Window Sensor 01` through `Window Sensor 15` are temporary customer-facing labels only.

## Main Entrance planned-device register

| Device slot | Intended customer label | Phase A binding | Evidence status | Phase B requirement |
|---|---|---|---|---|
| Doorbell 01 | Main Entrance Doorbell | No entity or service bound | Pending onsite device integration | Install and identify the Reolink model; verify only the live view, event, audio, snapshot, recording, and light capabilities actually supported before binding any of them. |
| Lock 01 | Lever Lock — Kwikset SmartCode 912 | No entity or service bound | Pending onsite device integration | Include through the authorized Z-Wave workflow and verify state, controls, fallback, and safe customer presentation. |
| Lock 02 | Deadbolt — Kwikset Home Connect 620 | No entity or service bound | Pending onsite device integration | Include through the authorized Z-Wave workflow and verify state, controls, fallback, and safe customer presentation. |

## Composite Main Entrance rule

Phase A includes the intended visual position and customer explanation for the composite Main Entrance state, but it does not implement a helper, template entity, automation, or lock service.

The Main Entrance may be presented as fully locked only after both the Kwikset 912 lever and Kwikset 620 deadbolt have verified live entities and both verified states support that conclusion. One verified lock alone is insufficient. An unresolved, stale, unavailable, or unlocked state must not produce a fully locked conclusion.

## Phase A validation posture

- All 16 contact entity IDs are backup verified.
- `binary_sensor.sensor13` is bound to the customer-facing Main Entrance Door card.
- The other 15 contact entities are bound to `Window Sensor 01` through `Window Sensor 15`.
- Generic window labels do not claim physical locations.
- Doorbell and locks are visual placeholders with no entity IDs or service calls.
- The mobile and expanded dashboards remain repository previews and were not registered, assigned, or deployed.

## Phase B onsite completion workflow

1. Confirm operator approval of the Phase A visual preview before field work.
2. Trigger `binary_sensor.sensor13` and verify Main Entrance Door open/closed behavior.
3. Trigger one generic window contact at a time.
4. Record each verified final physical label, area, and onsite-tested state without guessing.
5. Update customer-facing labels only after physical evidence establishes the location.
6. Include and test the Kwikset 912 and 620 through the separately governed Z-Wave workflow.
7. Install and verify the exact Reolink model and its supported integration capabilities.
8. Bind the two locks, doorbell, and composite presentation only from verified live entities and services.
9. Register and assign the mobile and expanded dashboards through the authorized live workflow.
10. Validate customer-used Companion App and browser targets, including Light, Dark, and Auto behavior.
11. Capture approved acceptance evidence without secrets, credentials, private URLs, access codes, or unnecessary customer data.

## Phase B deferred items

- Fifteen final window physical labels and areas.
- Onsite state testing for all 16 contacts.
- Approved WNYHS gold logo asset path and final placement.
- Reolink model, entity bindings, and supported actions.
- Kwikset SmartCode 912 inclusion, entity binding, state/control testing, and fallback review.
- Kwikset Home Connect 620 inclusion, entity binding, state/control testing, and fallback review.
- Composite Main Entrance live implementation.
- Live dashboard registration, user/device assignment, theme verification, screenshots, and acceptance.
