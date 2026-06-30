# BKLF Home Assistant Configuration Package Entity ID Checklist

Status: Active
Customer: Brian K. Lewis Funeral Home
Scope: Entity ID verification checklist for repo-owned Home Assistant package scaffold

---

## Purpose

Use this checklist before final package or dashboard binding. Expected entity IDs are scaffold defaults only. Actual entity IDs must be verified in live Home Assistant after pairing and naming.

## Entity ID Checklist

| Expected Friendly Name | Expected Entity ID | Actual Entity ID | Verified | Notes |
|---|---|---|---|---|
| C01 South Entrance Door | `binary_sensor.c01_south_entrance_door` |  |  | Active contact sensor on hand |
| C02 East Door Left | `binary_sensor.c02_east_door_left` |  |  | Active contact sensor on hand |
| C03 East Door Right | `binary_sensor.c03_east_door_right` |  |  | Active contact sensor on hand |
| C04 West Door | `binary_sensor.c04_west_door` |  |  | Active contact sensor on hand |
| C05 North Wall Window 1 | `binary_sensor.c05_north_wall_window_1` |  |  | Active contact sensor on hand |
| C06 North Wall Window 2 | `binary_sensor.c06_north_wall_window_2` |  |  | Active contact sensor on hand |
| C07 North Wall Window 3 | `binary_sensor.c07_north_wall_window_3` |  |  | Active contact sensor on hand |
| C08 North Wall Window 4 | `binary_sensor.c08_north_wall_window_4` |  |  | Active contact sensor on hand |
| C09 North Wall Window 5 | `binary_sensor.c09_north_wall_window_5` |  |  | Active contact sensor on hand |
| C10 South Wall Window 1 | `binary_sensor.c10_south_wall_window_1` |  |  | Active contact sensor on hand |
| C11 South Wall Window 2 | `binary_sensor.c11_south_wall_window_2` |  |  | Active contact sensor on hand |
| C12 South Wall Window 3 | `binary_sensor.c12_south_wall_window_3` |  |  | Active contact sensor on hand |
| C13 South Wall Window 4 | `binary_sensor.c13_south_wall_window_4` |  |  | Active contact sensor on hand |
| C14 South Wall Window 5 | `binary_sensor.c14_south_wall_window_5` |  |  | Active contact sensor on hand |
| M01 Main Hallway Motion | `binary_sensor.m01_main_hallway_motion` |  |  | Active motion sensor on hand |
| M02 Viewing Room Motion | `binary_sensor.m02_viewing_room_motion` |  |  | Active motion sensor on hand |
| South Wall Lock | `lock.south_wall_lock` |  |  | Placeholder until Z-Wave lock entity is verified |
| South Wall Doorbell | `camera.south_wall_doorbell` |  |  | Placeholder until Reolink doorbell entity is verified |
| South Wall Corner Camera | `camera.south_wall_corner_camera` |  |  | Placeholder until Reolink camera entity is verified |
| East Wall Window 01 Deferred Contact | `binary_sensor.east_wall_window_01_contact` |  |  | Deferred operable-window contact; not active until sensor is installed |
| West Wall Window 01 Deferred Contact | `binary_sensor.west_wall_window_01_contact` |  |  | Deferred operable-window contact; not active until sensor is installed |
| East Wall Fixed Picture Window Future Sensor 01 | `binary_sensor.east_wall_fixed_picture_window_01_impact` |  |  | Future impact/shock sensor placeholder |
| East Wall Fixed Picture Window Future Sensor 02 | `binary_sensor.east_wall_fixed_picture_window_02_impact` |  |  | Future impact/shock sensor placeholder |

## Verification Rules

- Verify C01-C14 and M01-M02 after pairing and renaming.
- Update `home-assistant/bklf/packages/bklf_security.yaml` if actual live IDs differ.
- Update `home-assistant/bklf/packages/bklf_notifications.yaml` before enabling any automation skeleton.
- Update `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml` before final dashboard use.
- Keep deferred and future placeholders documented but inactive until installed and verified.
- Do not edit hidden `.storage` files directly.
