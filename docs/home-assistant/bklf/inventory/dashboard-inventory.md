# BKLF Dashboard Inventory

Task ID: BKLF-HA-INVENTORY-001
Inventory version: REV01

## Dashboard Summary

| Field | Value |
| --- | --- |
| Dashboard title | WNYHS Customer Control Center |
| Dashboard source file | `dashboards/bklf-main-dashboard.yaml` |
| Current customer-priority workflow | South Entrance / Front Door with Talk, Unlock, View, Snapshot, and Lock |
| Dashboard-referenced entity source | `data/dashboard_referenced_entities.csv` |

## Views / Routes

| Route | Title | Icon | Type |
| --- | --- | --- | --- |
| `home` | Home | `mdi:home` | `masonry` |
| `doorbell` | Doorbell | `mdi:doorbell-video` | `masonry` |
| `cameras` | Cameras | `mdi:cctv` | `masonry` |
| `locks` | Locks | `mdi:lock` | `masonry` |
| `security` | Security | `mdi:shield-check` | `masonry` |
| `activity` | Activity | `mdi:history` | `masonry` |
| `more` | More | `mdi:dots-horizontal-circle` | `masonry` |

## Customer-Facing Dashboard Entities

These 17 entities are referenced by the customer dashboard source according to `dashboard_referenced_entities.csv`.

| Entity | Role indicated by ID |
| --- | --- |
| `binary_sensor.bklf_building_secure` | Composite building secure / attention status |
| `binary_sensor.bklf_exterior_secure` | Composite exterior secure status |
| `binary_sensor.bklf_interior_motion_active` | Composite interior motion status |
| `binary_sensor.c01_south_entrance_door` | South Entrance door contact |
| `binary_sensor.c05_north_wall_window_1` | North wall window contact |
| `binary_sensor.c06_north_wall_window_2` | North wall window contact |
| `binary_sensor.c07_north_wall_window_3` | North wall window contact |
| `binary_sensor.c08_north_wall_window_4` | North wall window contact |
| `binary_sensor.c10_south_wall_window_1` | South wall window contact |
| `binary_sensor.c11_south_wall_window_2` | South wall window contact |
| `binary_sensor.south_wall_home_connect_620_connected_smart_lock_lock_jammed` | Smart lock jam status |
| `binary_sensor.south_wall_south_entrance_doorbell_person` | South Entrance doorbell person status |
| `binary_sensor.south_wall_south_entrance_doorbell_visitor` | South Entrance doorbell visitor status |
| `camera.south_wall_cam01_southwest_corner_parking_lot_fluent` | Parking Lot camera stream |
| `camera.south_wall_south_entrance_doorbell_fluent` | South Entrance doorbell camera stream |
| `input_select.bklf_building_mode` | Building mode helper |
| `lock.south_wall_home_connect_620_connected_smart_lock` | South Entrance / Front Door lock |

## Dashboard Status Notes

- Current dashboard priority is the South Entrance / Front Door workflow.
- Doorbell and parking lot camera streams are explicit customer dashboard entities.
- The lock, lock jam status, door contact, visitor/person status, building mode, exterior secure, interior motion, and building secure composites are dashboard dependencies.
- Broader HA entity inventory is documented separately in `entity-inventory.md` so customer-facing dashboard dependencies remain distinct from service, diagnostic, and integration-created entities.
- BKLF mobile dashboard follow-up notes are preserved in `docs/home-assistant/bklf/BKLF_DASHBOARD_FOLLOWUP_NOTES_REV01.md` as documentation/planning only. They do not authorize dashboard YAML, live Home Assistant, package, theme, automation, or customer handoff changes.
