# BKLF Automation Register

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

| Automation ID | Friendly name | Source file | Trigger summary | Condition summary | Action summary | Enabled/disabled state | Helper dependencies | Notification target | Known gap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `bklf_cam01_after_hours_person_notification` | BKLF Parking Lot After-Hours Person Notification | `packages/bklf_notifications.yaml` | Parking Lot person/linger person entities | Installer/maintenance/building-mode guards | Notify placeholder and persistent notification action | Disabled scaffold | `input_boolean.bklf_installer_mode`, `input_boolean.bklf_maintenance_mode`, `input_select.bklf_building_mode` | Placeholder Companion notify service | Live validation required before enablement. |
| `bklf_south_entrance_doorbell_visitor_notification` | BKLF South Entrance Doorbell Visitor Notification | `packages/bklf_notifications.yaml` | South Entrance visitor entity | Installer/maintenance guards | Notify placeholder and persistent notification action | Disabled scaffold | `input_boolean.bklf_installer_mode`, `input_boolean.bklf_maintenance_mode` | Placeholder Companion notify service | Live validation required before enablement. |
| `bklf_south_entrance_active_notification` | BKLF South Entrance Active Notification | `packages/bklf_notifications.yaml` | South Entrance active template | Installer/maintenance guards | Notify placeholder and persistent notification action | Disabled scaffold | `binary_sensor.bklf_south_entrance_active`, installer/maintenance booleans | Placeholder Companion notify service | Live validation required before enablement. |
| `bklf_low_battery_notification` | BKLF Low Battery Notification | `packages/bklf_notifications.yaml` | Battery/replace-battery entities | Installer-mode guard | Notify placeholder and persistent notification action | Disabled scaffold | `input_boolean.bklf_installer_mode` | Placeholder Companion notify service | Live validation required before enablement. |
| `bklf_device_offline_notification` | BKLF Device Offline Notification | `packages/bklf_notifications.yaml` | Camera, lock, contact, and motion availability | Installer/maintenance guards | Notify placeholder and persistent notification action | Disabled scaffold | installer/maintenance booleans | Placeholder Companion notify service | Live validation required before enablement. |

## Notes

- The existing notification scaffold is present and disabled.
- This extraction does not enable automations, change routing, or define customer notification policy.
