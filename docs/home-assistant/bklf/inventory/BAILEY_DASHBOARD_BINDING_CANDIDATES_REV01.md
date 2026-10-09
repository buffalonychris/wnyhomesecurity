# Bailey Dashboard Binding Candidates REV01

Status: Sanitized preparation evidence

Information class: `INTERNAL_ONLY`

Task: `BAILEY-DASHBOARD-SITE-CAPABILITY-001`

This entire artifact is internal technical preparation. It grants no runtime binding, current-state authority, permission, action authority, dashboard YAML authority, media access, assignment, registration, or deployment authority.

## 1. Evidence boundary

- Site: `BAILEY`
- Registry cutoff: `20261006T160742Z`
- Repository cutoff: starting commit `b619bb9a0d5a12d7525acdec40a8b873a9dbada3`
- Optional `core.floor_registry`: absent and non-blocking
- Raw evidence remains at the five exact transient Downloads paths named in the controlling work order and was not copied into Git.
- Registry presence is registration evidence only. `PRESENT`/enabled below never means live, available, physically verified, permitted, customer-approved, or production-bound.

Candidate posture values:

- `CANDIDATE_ONLY` — technical relationship is evidenced; later verification/authority is required.
- `BLOCKED` — do not bind until the referenced exception is resolved.
- `EXCLUDED` — must not bind under this model.

## 2. Semantic binding candidates

| Binding ID | Capability | Minimum technical candidate(s) | Evidence relationship | Registry posture at cutoff | Candidate state/update posture | Action / permission posture | Freshness, limitations, and later verification | Readiness |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `BAI-BIND-001` | Building mode | `input_select.bklf_building_mode` | Current repository helper and active primary registry record | Present; enabled; not hidden | Candidate current mode source; transition timestamp/history not established | Read-only until permitted transitions, roles, confirmation, denial, and result evidence exist | Revalidate live value/options and BPI-030 site-owner posture | `CANDIDATE_ONLY`; `BAI-EXC-005`, `006`, `012` |
| `BAI-BIND-002` | Armed posture | `input_boolean.bklf_building_armed` | Current repository helper and active primary registry record | Present; enabled; not hidden | Candidate armed/disarmed source; live update/result unverified | Read-only; no toggle authority | Revalidate live state, owner, permission, and recovery behavior | `CANDIDATE_ONLY`; `BAI-EXC-005`, `006` |
| `BAI-BIND-003` | Open / Disarm / Close-and-Arm interfaces | `script.bklf_open_building`; `script.bklf_disarm_building`; `script.bklf_close_and_arm` | Current repository scripts and active primary registry records | Present; enabled; not hidden | Repository-defined command interfaces; execution/result not observed | High-impact control; omit until backend grant, confirmation, prerequisite, failure/result, and rollback evidence exists | Revalidate against current repository source and controlled acceptance plan | `BLOCKED`; `BAI-EXC-005`, `006`, `011`, `012` |
| `BAI-BIND-004` | Facility status/date-time | `sensor.bklf_facility_status`; `sensor.bklf_facility_date_and_time` | Current repository templates and active primary registry records | Present; enabled; not hidden | Candidate read-only semantic values | No action | Validate current site time source/timezone and formatting before use | `CANDIDATE_ONLY`; `BAI-EXC-005`, `BAI-EXC-014` |
| `BAI-BIND-005` | Building/facility attention | `binary_sensor.bklf_building_secure`; `binary_sensor.bklf_doors_attention`; `binary_sensor.bklf_windows_attention`; `binary_sensor.bklf_cameras_attention`; `binary_sensor.bklf_environmental_attention`; `binary_sensor.bklf_alarm_output_attention`; `binary_sensor.bklf_smoke_fire_attention` | Current repository templates and active primary registry records | Present; enabled; not hidden | Candidate semantic attention sources; names ending in `secure` are interpreted by current source as problem/attention, not proof of safety | Read-only; no actions granted | Validate every dependency and unknown/unavailable path; do not imply whole-property protection | `BLOCKED` for authoritative display; multiple exceptions below |
| `BAI-BIND-006` | South Entrance opening | `binary_sensor.c01_south_entrance_door` | Registry device/contact/area relationship, installed label, operator-confirmed monitored entrance, current repository use | Present; enabled; not hidden; primary | Candidate open/closed/unknown state; no live observation | Read-only | Onsite/live validate placement, state polarity, availability, timestamps, and failure behavior | `CANDIDATE_ONLY`; `BAI-EXC-005` |
| `BAI-BIND-007` | South Entrance activity aggregate | `binary_sensor.bklf_south_entrance_active` | Current repository template combining the C01 contact and doorbell visitor/person/motion sources | Present; enabled; not hidden; primary | Candidate derived attention source; update semantics depend on all inputs | Read-only | Validate all dependencies and unknown/unavailable behavior | `BLOCKED`; `BAI-EXC-005`, `007` |
| `BAI-BIND-008` | South Entrance doorbell media | `camera.south_wall_south_entrance_doorbell_fluent` | Registry device/area relationship and current repository use | Present; enabled; not hidden; primary | Candidate stream source; live/local/remote availability unverified | View/snapshot/talk/quick-reply/siren omitted pending privacy, permission, and capability validation | Validate stream, fallback, privacy/retention/audio, roles, denial, local/remote availability | `BLOCKED`; `BAI-EXC-005` through `008` |
| `BAI-BIND-009` | South Entrance visitor events | `binary_sensor.south_wall_south_entrance_doorbell_visitor`; `binary_sensor.south_wall_south_entrance_doorbell_person`; `binary_sensor.south_wall_south_entrance_doorbell_motion` | Registry device/area relationship and current repository semantic use | Present; enabled; not hidden; primary | Candidate event sources; current/recent/resolved semantics unverified | Read-only event presentation only after privacy/routing decision | Validate event transitions, timestamps, reset, duplicate behavior, and privacy | `BLOCKED`; `BAI-EXC-005`, `007`, `011` |
| `BAI-BIND-010` | South Entrance light | `switch.south_entrance_lamp` | Registry device/area relationship and current repository use | Present; enabled; not hidden; primary | Candidate on/off/unavailable source | Control omitted until permission/result evidence | Validate live state, control result, fallback, and role | `CANDIDATE_ONLY` read-only; `BAI-EXC-005`, `006` |
| `BAI-BIND-011` | Bailey Double Doors lock | `lock.east_wall_bailey_double_doors` | Registry device/area relationship and current repository source after South-lock retirement | Present; enabled; not hidden; primary | Candidate locked/unlocked/unknown/unavailable source | Lock/unlock and Close-and-Arm use omitted until permission, confirmation, result, denial, and recovery evidence | Validate live state, physical door relationship, assignment, jam/failure handling, and fallback | `BLOCKED`; `BAI-EXC-005`, `006`, `012` |
| `BAI-BIND-012` | Bailey lock jam attention | `binary_sensor.east_wall_bailey_double_doors_lock_jammed` | Registry diagnostic relationship and current repository notification/dashboard use | Present; enabled; not hidden; diagnostic | Candidate service/attention source only | No direct action | Validate live transitions and recovery; keep diagnostic detail internal | `CANDIDATE_ONLY` internal; `BAI-EXC-005`, `011` |
| `BAI-BIND-013` | Bailey Double Doors doorbell media | `camera.east_wall_bailey_double_door_fluent` | Registry device/area relationship and current repository use | Present; enabled; not hidden; primary | Candidate stream source; live/local/remote availability unverified | Media controls omitted | Same validation as `BAI-BIND-008` | `BLOCKED`; `BAI-EXC-005` through `008` |
| `BAI-BIND-014` | Bailey Double Doors visitor events | `binary_sensor.east_wall_bailey_double_door_visitor`; `binary_sensor.east_wall_bailey_double_door_person`; `binary_sensor.east_wall_bailey_double_door_motion` | Registry device/area relationship and current repository semantic use | Present; enabled; not hidden; primary | Candidate event sources | Read-only after privacy/routing decision | Same event validation as `BAI-BIND-009` | `BLOCKED`; `BAI-EXC-005`, `007`, `011` |
| `BAI-BIND-015` | Parking-lot camera | `camera.south_wall_cam01_southwest_corner_parking_lot_fluent` | Registry device/area relationship and current repository use | Present; enabled; not hidden; primary | Candidate stream source; live/local/remote availability unverified | View/history/recording controls omitted | Validate stream, privacy, retention, access, and fallback | `BLOCKED`; `BAI-EXC-005` through `008` |
| `BAI-BIND-016` | Parking-lot activity | `binary_sensor.south_wall_cam01_southwest_corner_parking_lot_person`; `binary_sensor.south_wall_cam01_southwest_corner_parking_lot_vehicle`; `binary_sensor.south_wall_cam01_southwest_corner_parking_lot_linger_area_1_person`; `binary_sensor.bklf_cam01_person_active` | Active registry events plus current repository derived semantic source | Present; enabled; not hidden; primary | Candidate current/recent event sources; duration/reset unverified | Read-only after privacy/routing decision | Validate event transitions, linger duration, false-positive/fallback posture | `BLOCKED`; `BAI-EXC-005`, `007`, `011` |
| `BAI-BIND-017` | Parking-lot floodlight | `light.south_wall_cam01_southwest_corner_parking_lot_floodlight` | Active registry relationship | Present; enabled; not hidden; primary | Candidate light state | Control omitted pending permission/result/privacy relationship | Validate installed use, live state, result, role, and recovery | `BLOCKED`; `BAI-EXC-005`, `006`, `007` |
| `BAI-BIND-018` | Current exterior opening group | `binary_sensor.bklf_exterior_secure`; C01, C05-C08, C10-C11 source set from current repository | Current repository-defined aggregate plus active registry entities | Present; enabled; not hidden | Candidate grouped attention source; `on` means attention/problem in current template | Read-only | Resolve C05 conflict; validate every included contact and unknown/unavailable handling | `BLOCKED`; `BAI-EXC-002`, `005` |
| `BAI-BIND-019` | C02-C04 contact candidates | `binary_sensor.east_door_left`; `binary_sensor.c03_east_door_right`; `binary_sensor.c04_west_door` | Active registry records; C03/C04 appear in current notification source; device names/areas conflict | Present; enabled; not hidden; primary | No authoritative semantic/physical mapping | No customer projection or action | Onsite map device/entity/location and validate live availability/polarity | `BLOCKED`; `BAI-EXC-002` |
| `BAI-BIND-020` | C05-C08 north-window candidate set | `binary_sensor.c05_north_wall_window_1`; `binary_sensor.c06_north_wall_window_2`; `binary_sensor.c07_north_wall_window_3`; `binary_sensor.c08_north_wall_window_4` | Current repository group plus active registry records; C05 device name/area conflicts | Present; enabled; not hidden; primary | Candidate grouped state, not installed-verified | Read-only after mapping verification | Resolve C05; validate C06-C08 live placement/state and group completeness | `BLOCKED`; `BAI-EXC-002`, `005` |
| `BAI-BIND-021` | C10-C11 south-window candidate set | `binary_sensor.c10_south_wall_window_1`; `binary_sensor.c11_south_wall_window_2` | Current repository group plus active registry records | Present; enabled; not hidden; primary | Candidate grouped state | Read-only after live verification | Validate placement, polarity, availability, and timestamps | `CANDIDATE_ONLY`; `BAI-EXC-005` |
| `BAI-BIND-022` | C09/C12 disputed contacts | `binary_sensor.c09_north_wall_window_5`; `binary_sensor.c12_south_wall_window_3` | Active registry records conflict with repository removal/exclusion lineage | Present; enabled; not hidden; primary | No authoritative installed/state posture | None | Operator/installer physical disposition plus live availability required | `BLOCKED`; `BAI-EXC-003` |
| `BAI-BIND-023` | C13/C14 deferred contacts | `binary_sensor.c13_south_wall_window_4`; `binary_sensor.c14_south_wall_window_5` | Active registry records; current repository intentionally excludes from aggregates | Present; enabled; not hidden; primary | Deferred, no authoritative current state | None | Onsite mapping and live validation required | `BLOCKED`; `BAI-EXC-004` |
| `BAI-BIND-024` | Interior motion | `binary_sensor.m01_main_hallway_motion_occupancy`; `binary_sensor.m02_viewing_room_motion_occupancy`; `binary_sensor.bklf_interior_motion_active` | Active registry relationships and current repository aggregate | Present; enabled; not hidden; primary | Candidate motion/occupancy/derived state | Read-only; automation consequences remain with AUTOMATION001 | Controlled live transition, clear/reset, availability, and secured-mode acceptance tests | `CANDIDATE_ONLY`; `BAI-EXC-005`, `011` |
| `BAI-BIND-025` | Smoke-device state | `binary_sensor.network_closet_smoke_01`; `binary_sensor.viewing_room_smoke_02`; `binary_sensor.west_hallway_jog_smoke_03`; `binary_sensor.bklf_smoke_fire_attention` | Active registry records and current repository scoped semantic aggregate | Present; enabled; not hidden; primary | Candidate device/attention state; no commissioned alarm/response proof | Read-only installation/unverified posture only | Onsite commissioning and safe event/reset/failure validation; no monitoring/dispatch claim | `BLOCKED`; `BAI-EXC-005`, `009` |
| `BAI-BIND-026` | Environmental state | `sensor.environmental_monitor_temperature`; `sensor.environmental_monitor_humidity`; `binary_sensor.bklf_environmental_attention` | Active registry relationships and current repository attention source | Present; enabled; not hidden; primary | Candidate readings/attention | Read-only | Validate units, accuracy, timestamp, stale behavior, and availability | `CANDIDATE_ONLY`; `BAI-EXC-005` |
| `BAI-BIND-027` | Audible alarm/strobe output | `switch.network_closet_universal_relay_zooz_zen17_1`; `binary_sensor.bklf_alarm_output_attention` | Registry-known relay plus current repository attention source | Present; enabled; not hidden; primary | Candidate availability/attention only | No customer control; activation prohibited | Installer-controlled physical/output/result/safety validation required | `BLOCKED`; `BAI-EXC-010` |
| `BAI-BIND-028` | Former South HC620 | `lock.south_wall_home_connect_620_connected_smart_lock` and related stale registry records | Registry snapshot predates merged retirement; current repository has zero active references | Present in snapshot; obsolete for capability status | No state source eligible | No action or permission eligible | Operator-confirmed physical retirement is controlling | `EXCLUDED`; `BAI-EXC-001`; `RETIRED_NOT_INSTALLED` |

A later task must independently revalidate every exact target before implementation. Listing a candidate here is not binding or runtime authority.

## 3. Frontend/dependency evidence for a later HA-native build

The registry snapshot contains registered devices for HACS and the current Bailey inventory records these installed frontend repositories: Mushroom, Bubble Card, button-card, Card Mod, Layout Card, Swipe Card, Auto-Entities, and Browser Mod. WebRTC Camera is also registry-known as an integration.

This is dependency-discovery evidence only:

- registration or inventory presence does not prove current load, resource registration, compatibility, health, permission, or suitability;
- no component is universally required by this model;
- a later HA-native dashboard task must select only governed/qualified dependencies and provide native/fallback behavior;
- no HACS, frontend resource, integration, package, or dependency is changed here.

`BAI-EXC-013` records the later qualification gate.

## 4. Excluded technical noise

The following are excluded from customer-safe projection and from binding unless a later exact technical task separately authorizes a minimum field:

- 605 diagnostic-category and 211 config-category active entity records;
- battery, firmware, RSSI/LQI, voltage/current/power, identify, update, ping, node, host, supervisor, backup, add-on, controller, and similar service internals;
- raw device IDs, unique IDs, connections/MACs, config-entry IDs, private URLs, credentials, auth/user records, and mobile-device internals;
- disabled Reolink clear/snapshot derivative camera entities where the primary fluent camera candidate already represents the bounded media capability;
- unassigned consumer media devices and other records with no governed Bailey dashboard scope;
- obsolete South HC620 and South-lock helper/automation residue.

## 5. Handoff readiness

- `CANDIDATE_ONLY`, read-only after targeted verification: building mode/armed posture, C01, South light, C10/C11 contacts, motion, and environmental sources.
- `BLOCKED` by permission/action evidence: all commands and controls.
- `BLOCKED` by privacy/media evidence: all camera/doorbell media and related event presentation.
- `BLOCKED` by mapping/discrepancy: C02-C05, C09, C12, C13, C14, grouped exterior coverage, and Bailey lock-to-contact pairing.
- `BLOCKED` by commissioning/safety evidence: smoke-state claims and alarm/strobe output.
- `EXCLUDED`: former South Entrance HC620 and every future South mag-lock concept/placeholder.
- No row is an authorized binding or authoritative live state. A separate bounded task must verify exact entities and create any dashboard YAML.
