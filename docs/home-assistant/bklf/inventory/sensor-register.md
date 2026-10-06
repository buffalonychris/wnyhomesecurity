# BKLF Sensor Register

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

## Door/Window Contacts

The sanitized 2026-10-06 Home Assistant registry snapshot shows an enabled opening entity for every C01-C14 device record. Registry presence proves registration evidence only; it does not prove current availability, live open/closed state, or physical placement. Device/entity naming conflicts remain unresolved pending onsite verification.

| Registry device name | Registry area | Enabled opening entity | Reconciliation posture |
| --- | --- | --- | --- |
| C01 South Entrance Door | `south_wall` | `binary_sensor.c01_south_entrance_door` | Confirmed registry mapping; the physical contact is being restored onsite. Live state is not established by the registry snapshot. |
| C02 South Wall Window 2 | `south_wall` | `binary_sensor.east_door_left` | **NAME/AREA CONFLICT — UNRESOLVED.** The entity name indicates East Door Left; do not assert physical placement until onsite verification. |
| C03 South Wall Window 3 | `south_wall` | `binary_sensor.c03_east_door_right` | **NAME/AREA CONFLICT — UNRESOLVED.** The entity name indicates East Door Right; do not assert physical placement until onsite verification. |
| C04 South Wall Window 4 | `south_wall` | `binary_sensor.c04_west_door` | **NAME/AREA CONFLICT — UNRESOLVED.** The entity name indicates West Door; do not assert physical placement until onsite verification. |
| C05 South Wall Window 5 | `south_wall` | `binary_sensor.c05_north_wall_window_1` | **NAME/AREA CONFLICT — UNRESOLVED.** The entity name indicates North Wall Window 1; do not assert physical placement until onsite verification. |
| C06 North Wall Window 2 | `north_wall` | `binary_sensor.c06_north_wall_window_2` | Registry-consistent; live state and physical placement still require onsite verification. |
| C07 North Wall Window 3 | `north_wall` | `binary_sensor.c07_north_wall_window_3` | Registry-consistent; live state and physical placement still require onsite verification. |
| C08 North Wall Window 4 | `north_wall` | `binary_sensor.c08_north_wall_window_4` | Registry-consistent; live state and physical placement still require onsite verification. |
| C09 North Wall Window 5 | `north_wall` | `binary_sensor.c09_north_wall_window_5` | Current registry shows the entity enabled and supersedes the prior stale removal classification; this does not prove live state. |
| C10 South Wall Window 1 | `south_wall` | `binary_sensor.c10_south_wall_window_1` | Registry-consistent; live state and physical placement still require onsite verification. |
| C11 South Wall Window 2 | `south_wall` | `binary_sensor.c11_south_wall_window_2` | Registry-consistent; live state and physical placement still require onsite verification. |
| C12 South Wall Window 3 | `south_wall` | `binary_sensor.c12_south_wall_window_3` | Current registry shows the entity enabled and supersedes the prior stale removal classification; this does not prove live state. |
| C13 South Wall Window 4 | `south_wall` | `binary_sensor.c13_south_wall_window_4` | Current registry shows the entity enabled; live state and physical placement still require onsite verification. |
| C14 South Wall Window 5 | `south_wall` | `binary_sensor.c14_south_wall_window_5` | Current registry shows the entity enabled; live state and physical placement still require onsite verification. |

Battery, firmware, identify, RSSI, and LQI entities remain support/service diagnostics rather than customer capability or physical/live-state evidence.

## Motion / Occupancy

| Entity group | Device | Area | Integration | Operational entities | Diagnostic entities |
| --- | --- | --- | --- | --- | --- |
| M01 Main Hallway Motion | M01 Main Hallway Motion | Main Hallway | ZHA | `binary_sensor.m01_main_hallway_motion`, `binary_sensor.m01_main_hallway_motion_occupancy` | battery, firmware, identify, LQI/RSSI |
| M02 Viewing Room Motion | M02 Viewing Room Motion | Viewing Room | ZHA | `binary_sensor.m02_viewing_room_motion`, `binary_sensor.m02_viewing_room_motion_occupancy` | battery, firmware, identify, LQI/RSSI |

## South Entrance Lamp Diagnostics

| Device | Area | Integration | Customer-facing entity | Diagnostic/control entities |
| --- | --- | --- | --- | --- |
| South Entrance Lamp | Main Hallway | ZHA | `switch.south_entrance_lamp` | power, voltage, current, energy/summation, AC frequency, power factor, power-on behavior, turn-on/off delays, identify/reset, LQI/RSSI |

## Smoke Detectors

| Device | Area | Model / manufacturer | Integration path | Registry entity | Customer landing-page status |
| --- | --- | --- | --- | --- | --- |
| SMOKE 01 Network Closet | Network Closet | `TS0601` / `_TZE284_vawy74yh` | ZHA scoped handler, Tuya DP 1 | `binary_sensor.network_closet_smoke_01` | Smoke Detectors — Installed (green) |
| SMOKE 02 Viewing Room | Viewing Room | `TS0601` / `_TZE284_vawy74yh` | ZHA scoped handler, Tuya DP 1 | `binary_sensor.viewing_room_smoke_02` | Smoke Detectors — Installed (green) |
| SMOKE 03 West Hallway Jog | West Hallway Jog | `TS0601` / `_TZE284_vawy74yh` | ZHA scoped handler, Tuya DP 1 | `binary_sensor.west_hallway_jog_smoke_03` | Smoke Detectors — Installed (green) |

The registry snapshot confirms registered entities only; it is not proof of current availability or live alarm state. The green customer tile confirms installed detectors only. Alarm-event monitoring, listener behavior, notifications, and response actions are not commissioned by this task and require separate onsite acceptance.

## Notes

Operational entities are customer/support state entities. Diagnostic noise includes firmware, identify, LQI/RSSI, and detailed Companion/device diagnostic entities. Backup restore-state unavailable entries require live HA verification before support action.
