# BKLF Lock And Access Register

Task ID: HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001
Source: Latest sanitized Home Assistant backup extraction
Customer-facing: No
Implementation authority: No

| Lock/access device | Lock entities | Battery / replace-battery entities | Jam entities | Tamper entities | Node status | Dashboard placement | Notification relevance | Auto-lock / deferred behavior |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| South Entrance Lock | `lock.south_wall_home_connect_620_connected_smart_lock` | battery level, replace battery soon, replace battery now entities under South Wall lock prefix | `binary_sensor.south_wall_home_connect_620_connected_smart_lock_lock_jammed` | tamper/tampering entities under South Wall lock prefix | South Wall lock node status entity | BKLF Main and Desktop lock controls; unlock confirmation is dashboard-controlled | Low-battery and offline disabled scaffolds only | Auto-lock/relock remains deferred or requires live validation |
| Bailey Double Doors Lock | `lock.east_wall_bailey_double_doors` | battery level, replace battery soon, replace battery now entities under Bailey lock prefix | `binary_sensor.east_wall_bailey_double_doors_lock_jammed` | tamper/tampering entities under Bailey lock prefix | `sensor.east_wall_bailey_double_doors_node_status` | BKLF Main and Desktop lock controls; unlock confirmation is dashboard-controlled | Support relevance only; no enabled routing | Auto-lock/relock remains deferred or requires live validation |

## Related Door Contacts

- South Entrance Lock relates to `binary_sensor.c01_south_entrance_door`.
- Bailey Double Doors Lock should be reviewed against east double-door contact entities; current live contact pairing still requires live HA verification.

## Exclusions

No lock programming codes, lock PINs, Z-Wave inclusion security material, SmartStart codes, or pairing credentials are stored.
