# BKLF Last-Known Live-State Summary

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Backup evidence date: `2026-07-09T19:47:29.850048-04:00`
Extraction date: `2026-07-09T23:14:00-04:00`
Customer-facing: No
Implementation authority: No

## Data Freshness Statement

This summary is confirmed from the latest operator-provided Home Assistant backup, plus repo-controlled BKLF source files where noted. It is not a live Home Assistant poll. Items marked unresolved require live Home Assistant verification.

## Confirmed From Latest Backup

- Home Assistant version: 2026.6.4.
- Areas: 12.
- Devices: 56.
- Entities: 1,026.
- Config entries/integrations: 27.
- Persons: 2.
- Companion app entries: Chris Cell, Luis Cell, Me Lewis Cell, SM-S931U1 Helen Cell.
- Major integrations: Reolink, Z-Wave JS, ZHA, Mobile App, Home Assistant Cloud, HACS, Google Cast, Matter, Supervisor, Home Assistant Green, Backup.
- Critical devices: South Entrance Doorbell, Bailey Double Door Doorbell, CAM01 Southwest corner Parking Lot, South Entrance lock, Bailey Double Doors lock, South Entrance Lamp, Zigbee contact sensors C01-C14, motion sensors M01/M02, Zigbee coordinator, Z-Wave controller.
- Disabled notification scaffold automations are present in `packages/bklf_notifications.yaml`.

## Confirmed From Repo

- BKLF main dashboard route: `bklf-main` from `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml`.
- BKLF desktop dashboard route: `bklf-desktop` from `home-assistant/bklf/dashboards/bklf-desktop-dashboard.yaml`.
- Theme files: `wnyhs-light.yaml` and `wnyhs-dark.yaml`.
- Package files: `bklf_security.yaml` and `bklf_notifications.yaml`.
- Backup copies of repo-controlled YAML files are byte-identical to the repo versions.

## Dashboard Inventory

- BKLF Main: customer/mobile-first dashboard with Home, Doorbell, Cameras, Locks, Security, Activity, and More views.
- BKLF Desktop: desktop/wide-screen dashboard with Dashboard, Cameras, Doors & Locks, Security / Activity, and System / More views.
- Both dashboards reference current South Entrance, Bailey Double Doors, Parking Lot, lock, lamp, helper, and status entities documented in the registers.

## Current User / Person / Companion Routing Posture

- `person.wny_home_security` maps to `device_tracker.luis_cell` and `device_tracker.chris_cell`.
- `person.blewis` maps to `device_tracker.me_lewis_cell` and `device_tracker.sm_s931u1_helen_cell`.
- Notify services confirmed by entity registry: `notify.luis_cell`, `notify.chris_cell`, `notify.me_lewis_cell`, and `notify.sm_s931u1_helen_cell`.
- No implemented routing policy is inferred from the backup.

## Existing Notification Automation Posture

Five notification automations are present as disabled scaffolds. Each uses placeholder notify target syntax in package YAML and persistent notification scaffolding. Live routing and target tests are still required before enablement.

## Known Disabled Or Unavailable Entities

Backup restore state shows `unavailable` for `binary_sensor.c09_north_wall_window_5`, `binary_sensor.c13_south_wall_window_4`, `binary_sensor.c14_south_wall_window_5`, `sensor.c03_east_door_right_battery`, and related battery/firmware/identify entities. Several ping/identify buttons and device trackers are `unknown` in restore state; live verification is required.

## Known Support Gaps

- Auth/user role details are intentionally excluded.
- Notification routing is not live-validated.
- Disabled automations are not customer-live behavior.
- Camera two-way talk support is evidenced by Reolink speak/volume entities, not by a live call test.
