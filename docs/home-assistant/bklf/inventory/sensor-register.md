# BKLF Sensor Register

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

## Door Contacts

| Entity group | Device | Area | Integration | Operational entities | Diagnostic entities | Restore-state note |
| --- | --- | --- | --- | --- | --- | --- |
| C01 South Entrance Door | C01 South Entrance Door | South Wall | ZHA | `binary_sensor.c01_south_entrance_door` | battery, firmware, identify, LQI/RSSI | Requires live verification for final state. |
| C03 East Door Right | C03 East Door Right | East Wall / unresolved from live naming | ZHA | Contact entity present in registry evidence | `sensor.c03_east_door_right_battery` | Battery restore state showed unavailable; live verification required. |
| C09 West Service Door / North Wall Window 5 naming conflict | C09 device evidence | North/West naming requires live verification | ZHA | Contact entity evidence present | battery, firmware, identify, LQI/RSSI | C09 restore-state evidence includes unavailable entries; live verification required. |

## Window Contacts

| Entity group | Area | Integration | Operational entities | Diagnostic entities | Restore-state note |
| --- | --- | --- | --- | --- | --- |
| C05-C09 North Wall Windows | North Wall | ZHA | `binary_sensor.c05_north_wall_window_1` through `binary_sensor.c09_north_wall_window_5` | battery, firmware, identify, LQI/RSSI | C09 showed unavailable in restore state. |
| C10-C14 South Wall Windows | South Wall | ZHA | `binary_sensor.c10_south_wall_window_1` through `binary_sensor.c14_south_wall_window_5` | battery, firmware, identify, LQI/RSSI | C13/C14 showed unavailable in restore state. |

## Motion / Occupancy

| Entity group | Device | Area | Integration | Operational entities | Diagnostic entities |
| --- | --- | --- | --- | --- | --- |
| M01 Main Hallway Motion | M01 Main Hallway Motion | Main Hallway | ZHA | `binary_sensor.m01_main_hallway_motion`, `binary_sensor.m01_main_hallway_motion_occupancy` | battery, firmware, identify, LQI/RSSI |
| M02 Viewing Room Motion | M02 Viewing Room Motion | Viewing Room | ZHA | `binary_sensor.m02_viewing_room_motion`, `binary_sensor.m02_viewing_room_motion_occupancy` | battery, firmware, identify, LQI/RSSI |

## South Entrance Lamp Diagnostics

| Device | Area | Integration | Customer-facing entity | Diagnostic/control entities |
| --- | --- | --- | --- | --- |
| South Entrance Lamp | Main Hallway | ZHA | `switch.south_entrance_lamp` | power, voltage, current, energy/summation, AC frequency, power factor, power-on behavior, turn-on/off delays, identify/reset, LQI/RSSI |

## Notes

Operational entities are customer/support state entities. Diagnostic noise includes firmware, identify, LQI/RSSI, and detailed Companion/device diagnostic entities. Backup restore-state unavailable entries require live HA verification before support action.
