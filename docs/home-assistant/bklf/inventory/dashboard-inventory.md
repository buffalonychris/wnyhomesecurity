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

These customer-facing entities are referenced by the customer dashboard source. The list includes the original South Entrance workflow plus the newly confirmed Bailey Double Doors lock, Bailey Double Doors doorbell, and South Entrance Lamp.

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
| `binary_sensor.east_wall_bailey_double_door_motion` | Bailey Double Doors doorbell motion status |
| `binary_sensor.east_wall_bailey_double_door_person` | Bailey Double Doors doorbell person status |
| `binary_sensor.east_wall_bailey_double_door_visitor` | Bailey Double Doors doorbell visitor status |
| `binary_sensor.east_wall_bailey_double_doors_lock_jammed` | Bailey Double Doors lock jam status |
| `binary_sensor.south_wall_home_connect_620_connected_smart_lock_lock_jammed` | Smart lock jam status |
| `binary_sensor.south_wall_south_entrance_doorbell_person` | South Entrance doorbell person status |
| `binary_sensor.south_wall_south_entrance_doorbell_visitor` | South Entrance doorbell visitor status |
| `camera.east_wall_bailey_double_door_fluent` | Bailey Double Doors doorbell camera stream |
| `camera.south_wall_cam01_southwest_corner_parking_lot_fluent` | Parking Lot camera stream |
| `camera.south_wall_south_entrance_doorbell_fluent` | South Entrance doorbell camera stream |
| `input_select.bklf_building_mode` | Building mode helper |
| `lock.east_wall_bailey_double_doors` | Bailey Double Doors lock |
| `lock.south_wall_home_connect_620_connected_smart_lock` | South Entrance / Front Door lock |
| `switch.south_entrance_lamp` | South Entrance Lamp control |

## Dashboard Status Notes

- Current dashboard priority is the South Entrance / Front Door workflow.
- Doorbell and parking lot camera streams are explicit customer dashboard entities.
- Bailey Double Doors Doorbell is now an explicit customer dashboard camera and activity entity.
- Bailey Double Doors Lock is now an explicit customer dashboard lock/control entity.
- South Entrance Lamp is now an explicit customer-facing light/utility control.
- The lock, lock jam status, door contact, visitor/person status, building mode, exterior secure, interior motion, and building secure composites are dashboard dependencies.
- Broader HA entity inventory is documented separately in `entity-inventory.md` so customer-facing dashboard dependencies remain distinct from service, diagnostic, and integration-created entities.
- BKLF mobile dashboard follow-up notes are preserved in `docs/home-assistant/bklf/BKLF_DASHBOARD_FOLLOWUP_NOTES_REV01.md` as documentation/planning only. They do not authorize dashboard YAML, live Home Assistant, package, theme, automation, or customer handoff changes.

## HA-BACKUP002 Dashboard Refresh

Task ID: `HA-BACKUP002-BKLF-SANITIZED-SUPPORT-DATA-REFRESH-001`
Backup evidence date: `2026-07-09T19:47:29.850048-04:00`

Latest backup copies of `bklf-main-dashboard.yaml` and `bklf-desktop-dashboard.yaml` are byte-identical to the repo versions. No dashboard YAML synchronization was required. Current routes remain `bklf-main` and `bklf-desktop`; current theme references remain BKLF WNYHS Light, Dark, and Auto controls. Stale placeholders are not documented as live unless backed by current entity bindings in the dashboard YAML or latest backup entity registry.
