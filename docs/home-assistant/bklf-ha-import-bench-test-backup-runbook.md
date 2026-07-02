# BKLF Home Assistant Import, Bench Test, and Backup Runbook

Status: Active
Customer: Brian K. Lewis Funeral Home
Scope: First-floor install-ready Home Assistant operator runbook

---

## 1. Purpose

This is the final operator runbook for moving from paired bench sensors to an install-ready BKLF Home Assistant system.

It tells the operator what repo files to transfer to the Home Assistant Green, how to transfer them, how to connect remaining devices, how to import and configure the package and dashboard, how to bench test the complete first-floor system, how to create and archive the final backup, and what physical sensor goes on what wall, window, or door during onsite installation.

This is documentation/runbook work only. It does not modify live Home Assistant configuration files directly.

---

## 2. Current Starting Point

- HA Green is powered and running.
- ZHA is configured with the Sonoff Zigbee coordinator.
- Z-Wave JS is configured with the Zooz ZST39.
- Areas are created.
- Labels are created.
- 14 Sonoff SenseGuard Gen 2 contact sensors are paired and labeled C01-C14.
- C09, C12, C13, and C14 are intentionally deferred for customer handoff and must not appear as active dashboard issues.
- 2 Sonoff SNZB-03P motion sensors are paired and labeled M01-M02.
- Basic open/close and motion testing was completed during pairing.
- Remaining: Reolink doorbell, Reolink South Wall corner camera, Kwikset lock, mobile app, entity verification, package import, dashboard import, bench test, backup, onsite install.

---

## 3. Files To Transfer From PC/Repo To HA Green

Source files on the PC/repo:

| Source file | Destination path on HA Green |
|---|---|
| `C:\dev\wnyhomesecurity\home-assistant\bklf\packages\bklf_security.yaml` | `/config/packages/bklf_security.yaml` |
| `C:\dev\wnyhomesecurity\home-assistant\bklf\packages\bklf_notifications.yaml` | `/config/packages/bklf_notifications.yaml` |
| `C:\dev\wnyhomesecurity\home-assistant\bklf\dashboards\bklf-main-dashboard.yaml` | `/config/dashboards/bklf-main-dashboard.yaml` |

Reference docs to print or keep open:

- `/docs/home-assistant/bklf-ha-config-package-install.md`
- `/docs/home-assistant/bklf-ha-config-package-entity-id-checklist.md`
- `/docs/home-assistant/bklf-ha-device-integration-runbook.md`
- `/docs/home-assistant/bklf-ha-onsite-install-placement-sheet.md`

---

## 4. Recommended Transfer Method

Use the Home Assistant Samba Share add-on.

1. In Home Assistant, go to Settings > Add-ons > Add-on Store.
2. Install Samba Share.
3. Configure username/password if required.
4. Start the add-on.
5. Enable Start on boot if desired.
6. From Windows File Explorer, connect to `\\homeassistant.local\config` or `\\<HA_IP>\config`.
7. Create `/packages` if missing.
8. Create `/dashboards` if missing.
9. Copy `bklf_security.yaml` into `/config/packages/`.
10. Copy `bklf_notifications.yaml` into `/config/packages/`.
11. Copy `bklf-main-dashboard.yaml` into `/config/dashboards/`.

Fallback method:

- If Samba is unavailable, install and use the File Editor add-on for manual copy/paste into supported Home Assistant YAML files.
- Do not edit hidden `.storage` files directly.

---

## 5. Pre-Import Backup

1. Go to Settings > System > Backups.
2. Create a backup before copying or importing YAML.
3. Name the backup `BKLF_PRE_PACKAGE_IMPORT_YYYY-MM-DD`.
4. Download the backup to the PC if possible.
5. Record the backup filename, date, and storage location in operator notes.

---

## 6. Entity ID Verification Before Import

Use the live Home Assistant entity registry as the authority.

1. Go to Settings > Devices & Services > Entities.
2. Search active installed devices: C01-C08, C10-C11, and M01-M02. Record C09, C12, C13, and C14 as intentionally deferred.
3. Record the actual entity IDs.
4. Compare actual IDs with the expected IDs used in `bklf_security.yaml` and `bklf-main-dashboard.yaml`.
5. If actual IDs differ from the live-export-backed repo files, update the local import-copy YAML before import.
6. Do not assume entity IDs match friendly names.

| Device label | Friendly name | Expected entity ID | Actual entity ID | Verified | Action needed |
|---|---|---|---|---|---|
| C01 | C01 South Entrance Door | `binary_sensor.c01_south_entrance_door` |  |  |  |
| C02 | C02 East Door Left | `binary_sensor.east_door_left` |  |  |  |
| C03 | C03 East Door Right | `binary_sensor.c03_east_door_right` |  |  |  |
| C04 | C04 West Door | `binary_sensor.c04_west_door` |  |  |  |
| C05 | C05 North Wall Window 1 | `binary_sensor.c05_north_wall_window_1` |  |  |  |
| C06 | C06 North Wall Window 2 | `binary_sensor.c06_north_wall_window_2` |  |  |  |
| C07 | C07 North Wall Window 3 | `binary_sensor.c07_north_wall_window_3` |  |  |  |
| C08 | C08 North Wall Window 4 | `binary_sensor.c08_north_wall_window_4` |  |  |  |
| C09 | Deferred | Not active for customer handoff |  | Deferred | Do not add to customer dashboard or secure-status helpers. |
| C10 | C10 South Wall Window 1 | `binary_sensor.c10_south_wall_window_1` |  |  |  |
| C11 | C11 South Wall Window 2 | `binary_sensor.c11_south_wall_window_2` |  |  |  |
| C12 | Deferred | Not active for customer handoff |  | Deferred | Do not add to customer dashboard or secure-status helpers. |
| C13 | Deferred | Not active for customer handoff |  | Deferred | Do not add to customer dashboard or secure-status helpers. |
| C14 | Deferred | Not active for customer handoff |  | Deferred | Do not add to customer dashboard or secure-status helpers. |
| M01 | M01 Main Hallway Motion | `binary_sensor.m01_main_hallway_motion` |  |  |  |
| M02 | M02 Viewing Room Motion | `binary_sensor.m02_viewing_room_motion` |  |  |  |

---

## 7. Pair Reolink Doorbell

1. Power/network the Reolink PoE Doorbell.
2. Confirm it is reachable from the same network as HA Green.
3. Go to Settings > Devices & Services > Add Integration.
4. Search Reolink.
5. Add using device credentials.
6. Rename device South Wall Doorbell.
7. Assign Area: South Wall.
8. Apply labels: Camera, Doorbell, PoE, Ethernet, Exterior, Critical, Installed.
9. Record camera entity ID.
10. Verify live view loads.

Record:

| Device | Expected primary entity | Actual primary entity | Supporting entities | Live view verified |
|---|---|---|---|---|
| South Wall Doorbell | `camera.south_wall_south_entrance_doorbell_fluent` |  | Person, motion, visitor, vehicle, pet sensors |  |

---

## 8. Pair Reolink South Wall Corner Camera

1. Power/network the Reolink dual-lens/corner camera.
2. Confirm it is reachable from the same network as HA Green.
3. Add through Reolink integration or device discovery.
4. Rename South Wall Corner Camera.
5. Assign Area: South Wall.
6. Apply labels: Camera, PoE, Ethernet, Exterior, Critical, Installed.
7. Record camera entity ID.
8. Verify live view loads.
9. Note that it was added outside original camera scope but is part of the current internal build.

Record:

| Device | Expected primary entity | Actual primary entity | Supporting entities | Live view verified |
|---|---|---|---|---|
| South Wall Corner Camera | `camera.south_wall_cam01_southwest_corner_parking_lot_fluent` |  | Person, vehicle, motion, animal, and linger-area sensors |  |

---

## 9. Pair Kwikset Home Connect 620 Lock

1. Confirm Z-Wave JS and Zooz ZST39 are online.
2. Bring the lock near HA Green for bench pairing.
3. If previously paired, perform exclusion/reset per manufacturer instructions.
4. In Z-Wave JS, choose Add Device / Inclusion.
5. Use secure inclusion when prompted.
6. Rename device South Wall Lock.
7. Assign Area: South Wall.
8. Apply labels: Door Lock, Z-Wave, Exterior, Critical, Installed, Battery Powered.
9. Record lock entity ID.
10. Test lock/unlock on bench.
11. Confirm lock state updates in Home Assistant.

Record:

| Device | Expected primary entity | Actual primary entity | Supporting entities | Bench test result |
|---|---|---|---|---|
| South Wall Lock | `lock.south_wall_home_connect_620_connected_smart_lock` |  | Battery level, node status, last seen, jammed, and battery-warning entities |  |

---

## 10. Install Home Assistant Mobile App

1. Install the Home Assistant mobile app on the owner/operator phone.
2. Connect to the BKLF HA instance.
3. Log in with an authorized account.
4. Confirm the mobile device appears in Home Assistant.
5. Identify the notify service under Developer Tools > Services.
6. Record notify service name in private operator notes.
7. Replace the `persistent_notification.create` actions in the local import-copy `bklf_notifications.yaml` with the verified private `notify.mobile_app_*` service.
8. Send a test notification.
9. Confirm the notification is received.

Record:

| Item | Placeholder | Actual service recorded privately | Verified | Notes |
|---|---|---|---|---|
| Mobile notify service | `notify.mobile_app_*` |  |  | Do not store private phone details in the repo. |

---

## 11. Update YAML Before Import

1. Update `bklf_security.yaml` entity IDs if actual IDs differ.
2. Update `bklf_notifications.yaml` with the verified notify service name.
3. Update `bklf-main-dashboard.yaml` entity IDs for sensors, lock, and cameras.
4. Keep original repo files as scaffold if not ready to commit live customer-specific entity IDs.
5. Do not store secrets or private phone details in the repo.

---

## 12. Enable Packages In Home Assistant

1. Use File Editor or Samba to open `/config/configuration.yaml`.
2. Add this if not already present:

```yaml
homeassistant:
  packages: !include_dir_named packages
```

3. Save.
4. Check configuration if the option is available.
5. Restart Home Assistant if required.

---

## 13. Import Package Files

1. Copy `bklf_security.yaml` to `/config/packages/`.
2. Copy `bklf_notifications.yaml` to `/config/packages/`.
3. Restart or reload YAML as required.
4. Verify input booleans exist:
   - `input_boolean.bklf_building_armed`
   - `input_boolean.bklf_maintenance_mode`
   - `input_boolean.bklf_installer_mode`
5. Verify input select exists:
   - `input_select.bklf_building_mode`
6. Verify template binary sensors exist:
   - `binary_sensor.bklf_building_secure`
   - `binary_sensor.bklf_exterior_secure`
   - `binary_sensor.bklf_interior_motion_active`
   - `binary_sensor.bklf_south_entrance_active`
7. Verify automations are present and disabled/safe if intended.

---

## 14. Import Dashboard

1. Copy `bklf-main-dashboard.yaml` to `/config/dashboards/`.
2. Create dashboard from Settings > Dashboards if using a UI-managed dashboard.
3. Use YAML dashboard mode or manual card YAML import as appropriate.
4. Do not edit `.storage` directly.
5. Confirm dashboard views exist:
   - Overview
   - Cameras
   - Entrances
   - Motion
   - System Ready
   - Doorbell
   - Lock
6. Verify every card resolves.
7. Fix missing entity IDs in dashboard YAML or UI cards.

---

## 15. Bench Test The Complete System

### Doors

- [ ] C01 South Entrance Door open/closed.
- [ ] C02 East Door Left open/closed.
- [ ] C03 East Door Right open/closed.
- [ ] C04 West Door open/closed.

### Windows

- [ ] C05 North Wall Window 1 open/closed.
- [ ] C06 North Wall Window 2 open/closed.
- [ ] C07 North Wall Window 3 open/closed.
- [ ] C08 North Wall Window 4 open/closed.
- [ ] C10 South Wall Window 1 open/closed.
- [ ] C11 South Wall Window 2 open/closed.
- [ ] Confirm C09, C12, C13, and C14 remain deferred and do not appear as active customer-facing issues.

### Motion

- [ ] M01 Main Hallway Motion detects/clears.
- [ ] M02 Viewing Room Motion detects/clears.

### Cameras

- [ ] South Wall Doorbell live view loads using `camera.south_wall_south_entrance_doorbell_fluent`.
- [ ] CAM01 Southwest Corner Parking Lot live view loads using `camera.south_wall_cam01_southwest_corner_parking_lot_fluent`.

### Lock

- [ ] South Wall Lock locks/unlocks.
- [ ] Lock state updates in Home Assistant.

### Notifications

- [ ] Mobile app receives test notification.
- [ ] South Entrance notification skeleton can be safely tested if enabled.

### Dashboard

- [ ] Overview loads.
- [ ] Cameras loads.
- [ ] Entrances loads.
- [ ] Motion loads.
- [ ] System Ready loads.
- [ ] Doorbell loads.
- [ ] Lock loads.
- [ ] Building Secure changes correctly based on installed sensors only.
- [ ] No customer-facing card displays Entity not found or Configuration error.

### South Entrance Workflow

- [ ] Door contact state changes.
- [ ] Doorbell camera loads.
- [ ] Lock can be controlled.
- [ ] Mobile notification target works.
- [ ] Recent activity/logbook shows events.

---

## 16. Create Final Bench Backup / Gold Image

1. Create backup after all integrations, dashboard, helpers, and tests pass.
2. Name backup `BKLF_GOLD_BENCH_READY_YYYY-MM-DD`.
3. Download backup to PC.
4. Archive backup under local secure storage outside the public repo.
5. Do not commit HA backup tar files to the repository unless repo policy explicitly allows.
6. Record backup filename and date in project notes or a future handoff document.

---

## 17. Onsite Install Placement Sheet Reference

Use `/docs/home-assistant/bklf-ha-onsite-install-placement-sheet.md` as the separate printable sheet.

Install placement:

- C01: South Wall Door Contact
- C02: East Wall Door Contact Left
- C03: East Wall Door Contact Right
- C04: West Wall Door Contact
- C05: North Wall Window 1
- C06: North Wall Window 2
- C07: North Wall Window 3
- C08: North Wall Window 4
- C09: Deferred
- C10: South Wall Window 1
- C11: South Wall Window 2
- C12: Deferred
- C13: Deferred
- C14: Deferred
- M01: Main Hallway Motion
- M02: Viewing Room Motion

Deferred:

- C09, C12, C13, and C14 are deferred from customer handoff.
- 2 additional operable-window contact sensors pending future sensors.
- East Wall fixed picture window 1 future impact/shock sensor.
- East Wall fixed picture window 2 future impact/shock sensor.

---

## 18. Onsite Final Test

- [ ] Mount active sensors only.
- [ ] Confirm each contact opens/closes correctly after mounting.
- [ ] Confirm magnets align correctly.
- [ ] Confirm motion sensors detect expected paths.
- [ ] Confirm cameras still reachable after final network placement.
- [ ] Confirm lock works after installation.
- [ ] Confirm dashboard reflects installed state.
- [ ] Confirm mobile notification works from customer/operator phone.
- [ ] Create onsite backup after final install.

---

## 19. Safe Scope Boundaries

- First-floor deployment only.
- No second-floor device coverage in this deployment.
- No HVAC or thermostat automation in this deployment.
- No lighting automation in this deployment.
- No Prepare for Funeral mode.
- No third-party response-center service.
- No public-safety agency response workflow.
- No outcome-promise language.
- Existing camera systems remain outside this deployment unless separately approved.
- No glass-break sensors in the active deployment.
