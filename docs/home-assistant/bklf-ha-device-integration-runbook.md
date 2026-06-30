# BKLF Home Assistant Device Integration Runbook

Status: Active
Customer: Brian K. Lewis Funeral Home
Scope: First-floor remaining device integration operator runbook

---

## 1. Purpose

This runbook walks the operator through completing the remaining live device integrations after Zigbee sensors are paired and before dashboard import/testing.

It covers live entity ID verification, Reolink doorbell integration, Reolink South Wall corner camera integration, Kwikset Z-Wave lock pairing, Home Assistant mobile app notification target setup, and dashboard/package import readiness.

This is documentation/runbook work only. It does not authorize live Home Assistant config file edits, app code changes, website copy changes, route changes, Stripe/payment changes, scheduling changes, API/backend changes, customer proposal changes, HubSpot/CRM changes, Cloudflare config changes, dependency changes, package-lock changes, secrets, or environment files.

## 2. Current Live Bench Status

- HA Green running.
- ZHA configured with Sonoff Zigbee coordinator.
- Z-Wave JS configured with Zooz ZST39.
- Areas created.
- Labels created.
- 14 Sonoff SenseGuard Gen 2 contact sensors paired.
- 2 Sonoff SNZB-03P motion sensors paired.
- Basic open/close and motion status verified during pairing.
- Remaining integrations: Reolink doorbell, Reolink South Wall corner camera, Kwikset lock, mobile app notification target, dashboard import.

## 3. Required Integration Order

1. Verify current live entity IDs for C01-C14 and M01-M02.
2. Add Reolink integration.
3. Add Reolink PoE Doorbell as South Wall Doorbell.
4. Add Reolink dual-lens/corner camera as South Wall Corner Camera.
5. Pair Kwikset Home Connect 620 using Z-Wave JS.
6. Add/configure Home Assistant mobile app owner device.
7. Identify mobile notify service.
8. Update package/dashboard YAML placeholders with actual entity IDs before import.

## 4. Live Entity ID Verification

Use the live Home Assistant entity registry as the authority before importing or enabling package/dashboard YAML.

Checklist:

- [ ] Navigate to Settings > Devices & Services > Entities.
- [ ] Search each friendly name.
- [ ] Record actual entity ID.
- [ ] Compare against expected IDs in `bklf-ha-config-package-entity-id-checklist.md`.
- [ ] Update YAML only after actual IDs are confirmed.
- [ ] Do not assume Home Assistant generated exact expected slugs.

| Device Label | Friendly Name | Expected Entity ID | Actual Entity ID | Match? | Action Needed |
|---|---|---|---|---|---|
| C01 | C01 South Entrance Door | `binary_sensor.c01_south_entrance_door` |  |  | Verify/update YAML if different |
| C02 | C02 East Door Left | `binary_sensor.c02_east_door_left` |  |  | Verify/update YAML if different |
| C03 | C03 East Door Right | `binary_sensor.c03_east_door_right` |  |  | Verify/update YAML if different |
| C04 | C04 West Door | `binary_sensor.c04_west_door` |  |  | Verify/update YAML if different |
| C05 | C05 North Wall Window 1 | `binary_sensor.c05_north_wall_window_1` |  |  | Verify/update YAML if different |
| C06 | C06 North Wall Window 2 | `binary_sensor.c06_north_wall_window_2` |  |  | Verify/update YAML if different |
| C07 | C07 North Wall Window 3 | `binary_sensor.c07_north_wall_window_3` |  |  | Verify/update YAML if different |
| C08 | C08 North Wall Window 4 | `binary_sensor.c08_north_wall_window_4` |  |  | Verify/update YAML if different |
| C09 | C09 North Wall Window 5 | `binary_sensor.c09_north_wall_window_5` |  |  | Verify/update YAML if different |
| C10 | C10 South Wall Window 1 | `binary_sensor.c10_south_wall_window_1` |  |  | Verify/update YAML if different |
| C11 | C11 South Wall Window 2 | `binary_sensor.c11_south_wall_window_2` |  |  | Verify/update YAML if different |
| C12 | C12 South Wall Window 3 | `binary_sensor.c12_south_wall_window_3` |  |  | Verify/update YAML if different |
| C13 | C13 South Wall Window 4 | `binary_sensor.c13_south_wall_window_4` |  |  | Verify/update YAML if different |
| C14 | C14 South Wall Window 5 | `binary_sensor.c14_south_wall_window_5` |  |  | Verify/update YAML if different |
| M01 | M01 Main Hallway Motion | `binary_sensor.m01_main_hallway_motion` |  |  | Verify/update YAML if different |
| M02 | M02 Viewing Room Motion | `binary_sensor.m02_viewing_room_motion` |  |  | Verify/update YAML if different |

## 5. Reolink Integration Runbook

Prechecks:

- [ ] Confirm Reolink doorbell/camera are powered and network-reachable.
- [ ] Confirm they are on the same network as HA Green during bench setup.
- [ ] Confirm the operator has the Reolink device credentials needed for Home Assistant integration.

Integration steps:

- [ ] In Home Assistant, navigate to Settings > Devices & Services > Add Integration.
- [ ] Search for and select Reolink.
- [ ] Authenticate with Reolink device credentials.
- [ ] Add the Reolink PoE Doorbell.
- [ ] Rename device to South Wall Doorbell.
- [ ] Assign South Wall Doorbell to South Wall.
- [ ] Apply labels to South Wall Doorbell:
  - Camera
  - Doorbell
  - PoE
  - Ethernet
  - Exterior
  - Critical
  - Installed
- [ ] Add the Reolink dual-lens/corner camera.
- [ ] Rename device to South Wall Corner Camera.
- [ ] Assign South Wall Corner Camera to South Wall.
- [ ] Apply labels to South Wall Corner Camera:
  - Camera
  - PoE
  - Ethernet
  - Exterior
  - Critical
  - Installed
- [ ] Record camera entity IDs.

Reolink entity record:

| Device | Expected Primary Entity | Actual Primary Entity | Supporting Entities | Notes |
|---|---|---|---|---|
| South Wall Doorbell | `camera.south_wall_doorbell` |  | Button/visitor/motion entities if exposed |  |
| South Wall Corner Camera | `camera.south_wall_corner_camera` |  | Motion/person entities if exposed |  |

## 6. Kwikset Z-Wave Lock Runbook

Prechecks:

- [ ] Confirm Zooz ZST39 / Z-Wave JS is online.
- [ ] Confirm lock is powered and near HA Green for bench pairing.
- [ ] If lock was previously paired, perform manufacturer exclusion/reset first.

Pairing steps:

- [ ] In Home Assistant, open Z-Wave JS.
- [ ] Start inclusion/add device.
- [ ] Put the Kwikset Home Connect 620 into inclusion mode using the manufacturer procedure.
- [ ] Use secure inclusion when prompted.
- [ ] Confirm the lock appears in Z-Wave JS.
- [ ] Rename device to South Wall Lock.
- [ ] Assign area: South Wall.
- [ ] Apply labels:
  - Door Lock
  - Z-Wave
  - Exterior
  - Critical
  - Installed
  - Battery Powered
- [ ] Record lock entity ID.
- [ ] Record battery/status entity IDs if Home Assistant exposes them.
- [ ] Test lock/unlock on bench before onsite install.

Kwikset entity record:

| Device | Expected Primary Entity | Actual Primary Entity | Supporting Entities | Bench Test Result |
|---|---|---|---|---|
| South Wall Lock | `lock.south_wall_lock` |  | Battery/status entities if exposed |  |

## 7. Mobile App Notification Target

Setup steps:

- [ ] Install Home Assistant mobile app on owner/operator device.
- [ ] Log in to BKLF HA instance.
- [ ] Confirm device appears under Mobile App integration.
- [ ] Record notify service name.
- [ ] Replace placeholder: `notify.mobile_app_OWNER_DEVICE_TO_REPLACE`.
- [ ] Do not hardcode personal/private phone details in repo docs.
- [ ] Verify notification delivery with a test automation or Developer Tools service call.

Notification target record:

| Item | Placeholder | Actual Value | Verified? | Notes |
|---|---|---|---|---|
| Mobile notify service | `notify.mobile_app_OWNER_DEVICE_TO_REPLACE` |  |  | Do not record personal/private phone details |

## 8. Dashboard Import Readiness

Before importing dashboard/package YAML:

- [ ] All live entity IDs verified.
- [ ] Reolink entity IDs recorded.
- [ ] Lock entity ID recorded.
- [ ] Mobile notify service identified.
- [ ] `bklf_security.yaml` updated locally/import copy with actual entity IDs.
- [ ] `bklf_notifications.yaml` updated locally/import copy with actual notify service.
- [ ] `bklf-main-dashboard.yaml` updated locally/import copy with actual entity IDs.
- [ ] Backup created before import.

Import readiness record:

| Readiness Item | Complete? | Notes |
|---|---|---|
| C01-C14 actual IDs verified |  |  |
| M01-M02 actual IDs verified |  |  |
| South Wall Doorbell entity IDs verified |  |  |
| South Wall Corner Camera entity IDs verified |  |  |
| South Wall Lock entity IDs verified |  |  |
| Mobile notify service verified |  |  |
| Local/import copy of `bklf_security.yaml` updated |  |  |
| Local/import copy of `bklf_notifications.yaml` updated |  |  |
| Local/import copy of `bklf-main-dashboard.yaml` updated |  |  |
| Backup created before import |  |  |

## 9. South Entrance Readiness

Required devices:

- South Wall Doorbell
- South Wall Lock
- South Wall Door Contact
- Mobile app notification target

Readiness test:

- [ ] Door contact reports open/closed.
- [ ] Doorbell camera loads.
- [ ] Lock reports locked/unlocked.
- [ ] Mobile app receives notification.
- [ ] Dashboard can show all four pieces.

South Entrance readiness record:

| Component | Expected Entity / Service | Actual Entity / Service | Test Result | Notes |
|---|---|---|---|---|
| South Wall Door Contact | `binary_sensor.c01_south_entrance_door` |  |  |  |
| South Wall Doorbell | `camera.south_wall_doorbell` |  |  |  |
| South Wall Lock | `lock.south_wall_lock` |  |  |  |
| Mobile app notification target | `notify.mobile_app_OWNER_DEVICE_TO_REPLACE` |  |  |  |

## 10. Bench Validation Checklist

- [ ] Reolink Doorbell online.
- [ ] Reolink Corner Camera online.
- [ ] South Wall Lock paired.
- [ ] Lock/unlock tested.
- [ ] Lock battery status visible if supported.
- [ ] Mobile app connected.
- [ ] Notify service identified.
- [ ] Test notification delivered.
- [ ] Entity checklist updated.
- [ ] Backup created.

Validation notes:

| Item | Pass / Fail / Deferred | Notes |
|---|---|---|
| Reolink Doorbell online |  |  |
| Reolink Corner Camera online |  |  |
| South Wall Lock paired |  |  |
| Lock/unlock tested |  |  |
| Lock battery status visible if supported |  |  |
| Mobile app connected |  |  |
| Notify service identified |  |  |
| Test notification delivered |  |  |
| Entity checklist updated |  |  |
| Backup created |  |  |

## 11. Safe Scope Boundaries

- First-floor deployment only.
- No second-floor device coverage in this deployment.
- No HVAC or thermostat automation in this deployment.
- No lighting automation in this deployment.
- No Prepare for Funeral mode.
- No third-party response-center service.
- No public-safety agency response workflow.
- No prevention guarantee language.
- Existing camera systems remain outside this deployment unless separately approved.
- No glass-break sensors in the active deployment.
