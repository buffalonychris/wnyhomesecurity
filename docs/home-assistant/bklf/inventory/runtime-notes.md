# BKLF Runtime Notes

Task ID: BKLF-HA-INVENTORY-001
Inventory version: REV01
Sources: Sanitized source markdown and `data/restore_states_summary.csv`

## Restore-State Summary

The sanitized restore-state extract contains 141 rows.

| Domain | Count |
| --- | ---: |
| `update` | 42 |
| `sensor` | 28 |
| `binary_sensor` | 27 |
| `button` | 21 |
| `automation` | 6 |
| `device_tracker` | 3 |
| `input_boolean` | 3 |
| `notify` | 3 |
| `person` | 2 |
| `tts` | 2 |
| `conversation` | 1 |
| `event` | 1 |
| `input_select` | 1 |
| `stt` | 1 |

## Restore-State Values

| State | Count |
| --- | ---: |
| `off` | 42 |
| `unknown` | 42 |
| `unavailable` | 16 |
| `100.0` | 14 |
| `on` | 13 |
| Other single or low-count values | 14 |

## Key Runtime Observations

- `binary_sensor.bklf_building_secure` is a composite attention/safety sensor.
- The sanitized source states that `binary_sensor.bklf_building_secure` appears to report attention when exterior secure is active, interior motion is active, or the front lock is not locked.
- The composite depends on `binary_sensor.bklf_exterior_secure`, `binary_sensor.bklf_interior_motion_active`, and `lock.south_wall_home_connect_620_connected_smart_lock`.
- In the restore-state extract, `binary_sensor.bklf_building_secure`, `binary_sensor.bklf_exterior_secure`, and `binary_sensor.bklf_interior_motion_active` were all `on` at `2026-07-05T20:48:47.821196+00:00`.
- `binary_sensor.bklf_south_entrance_active` was `off` at the same restore timestamp.
- The source observation notes that the lock was locked and motion summary was attention during screenshots, so `binary_sensor.bklf_interior_motion_active` or child motion sensors should be inspected next before changing dashboard behavior.

## Current Dashboard Status

The current customer-priority workflow is South Entrance / Front Door with Talk, Unlock, View, Snapshot, and Lock. Current dashboard dependencies include:

- South Entrance door contact.
- South Entrance doorbell visitor/person states.
- South Entrance doorbell camera stream.
- Parking Lot camera stream.
- South Entrance / Front Door smart lock.
- Smart lock jam status.
- Building mode helper.
- Building secure, exterior secure, and interior motion composite entities.

## Validation Boundary

These notes are restore-state and source-observation documentation only. They do not prove current live state and do not authorize live Home Assistant changes, dashboard YAML changes, package changes, theme changes, automation changes, or customer handoff changes.
