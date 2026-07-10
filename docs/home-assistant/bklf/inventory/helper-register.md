# BKLF Helper Register

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

| Entity ID | Purpose/name | Domain | Platform | Source | Dashboard dependency | Automation dependency | Notification dependency | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `input_select.bklf_building_mode` | BKLF Building Mode | `input_select` | `input_select` | Package/helper registry | Dashboard/package dependency | Automation/package dependency | Notification guard dependency where used | Enabled |
| `input_boolean.bklf_building_armed` | BKLF Building Armed | `input_boolean` | `input_boolean` | Package/helper registry | Dashboard/package dependency | Automation/package dependency | Indirect | Enabled |
| `input_boolean.bklf_maintenance_mode` | BKLF Maintenance Mode | `input_boolean` | `input_boolean` | Package/helper registry | Dashboard/package dependency | Automation/package dependency | Notification guard dependency where used | Enabled |
| `input_boolean.bklf_installer_mode` | BKLF Installer Mode | `input_boolean` | `input_boolean` | Package/helper registry | Dashboard/package dependency | Automation/package dependency | Notification guard dependency where used | Enabled |
| `binary_sensor.bklf_exterior_secure` | BKLF Exterior Secure | `binary_sensor` | `template` | `bklf_security.yaml` | Dashboard dependency | Automation/package dependency | Indirect | Enabled |
| `binary_sensor.bklf_interior_motion_active` | BKLF Interior Motion Active | `binary_sensor` | `template` | `bklf_security.yaml` | Dashboard dependency | Automation/package dependency | Indirect | Enabled |
| `binary_sensor.bklf_south_entrance_active` | BKLF South Entrance Active | `binary_sensor` | `template` | `bklf_security.yaml` | Dashboard dependency | Notification trigger dependency | Notification dependency | Enabled |
| `binary_sensor.bklf_building_secure` | BKLF Building Secure | `binary_sensor` | `template` | `bklf_security.yaml` | Dashboard dependency | Automation/package dependency | Indirect | Enabled |
| `binary_sensor.bklf_cam01_person_active` | BKLF CAM01 Person Active | `binary_sensor` | `template` | `bklf_security.yaml` | Dashboard/support dependency | Notification trigger dependency | Notification dependency | Enabled |

## Notes

No timer, schedule, counter, scene, or script entities were confirmed as active support dependencies in this extraction. Empty `scripts.yaml` and `scenes.yaml` files are present in the backup.
