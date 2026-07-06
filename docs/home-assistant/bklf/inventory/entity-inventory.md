# BKLF Entity Inventory

Task ID: BKLF-HA-INVENTORY-001
Inventory version: REV01
CSV source: `data/entities.csv`

## Summary

The sanitized entity registry extract contains 790 entity rows. Entity rows include Home Assistant platform, domain, device class, area ID, device ID, entity category, disabled/hidden flags, original name, display name, and unit of measurement where present.

## Entities By Domain

| Domain | Count |
| --- | ---: |
| `sensor` | 489 |
| `binary_sensor` | 109 |
| `update` | 37 |
| `number` | 36 |
| `switch` | 31 |
| `button` | 24 |
| `select` | 24 |
| `camera` | 8 |
| `automation` | 6 |
| `media_player` | 4 |
| `notify` | 3 |
| `input_boolean` | 3 |
| `device_tracker` | 3 |
| `person` | 2 |
| `siren` | 2 |
| `tts` | 2 |
| `light` | 1 |
| `input_select` | 1 |
| `event` | 1 |
| `stt` | 1 |
| `todo` | 1 |
| `lock` | 1 |
| `weather` | 1 |

## Entities By Platform

| Platform | Count |
| --- | ---: |
| `mobile_app` | 383 |
| `zha` | 142 |
| `reolink` | 105 |
| `zwave_js` | 52 |
| `hassio` | 49 |
| `hacs` | 18 |
| `sun` | 9 |
| `automation` | 6 |
| `backup` | 5 |
| `template` | 5 |
| `cast` | 4 |
| `cloud` | 3 |
| `input_boolean` | 3 |
| `person` | 2 |
| `google_translate` | 1 |
| `met` | 1 |
| `shopping_list` | 1 |
| `input_select` | 1 |

## Entity Category Summary

| Category | Count |
| --- | ---: |
| `diagnostic` | 464 |
| blank / normal | 205 |
| `config` | 121 |

## Helpers Identified

Helpers identifiable from entity domains:

| Entity | Type |
| --- | --- |
| `input_boolean.bklf_building_armed` | Input boolean |
| `input_boolean.bklf_installer_mode` | Input boolean |
| `input_boolean.bklf_maintenance_mode` | Input boolean |
| `input_select.bklf_building_mode` | Input select |

## Automations / Scripts / Scenes

Automations present in the entity extract:

- `automation.bklf_after_hours_activity_notification`
- `automation.bklf_cam01_after_hours_person_notification`
- `automation.bklf_device_offline_notification`
- `automation.bklf_low_battery_notification`
- `automation.bklf_south_entrance_active_notification`
- `automation.bklf_south_entrance_doorbell_visitor_notification`

Scripts and scenes are present as safe source files in the backup (`scripts.yaml`, `scenes.yaml`), but no `script.*` or `scene.*` entities were present in the sanitized entity registry extract.

## Customer Dashboard Subset

The customer dashboard subset is intentionally documented in `dashboard-inventory.md`. The broader entity registry includes many diagnostic, config, mobile app, firmware update, network, and integration-created entities that should not be treated as customer-facing without separate review.
