# Peckham Pre-Onsite Dashboard Binding Register REV01

Status: REV03 current-backup repository binding record; runtime validation required

Task: `T-HA-DASH-PECKHAM-002 REV03`

Evidence date: `2026-10-21`

Backup platform evidence: Home Assistant Core `2026.8.2`

Site identity: `BK LEWIS · PECKHAM`

## Purpose and boundary

This sanitized internal register maps only the entity bindings and evidence facts explicitly authorized by REV03. It does not contain raw registries, unique IDs, network identifiers, credentials, secrets, or guessed physical locations. The October 21 backup establishes registry and recorder/restore-state evidence; it is not current runtime-state or commissioning proof.

The repository dashboards dynamically consume actual Home Assistant state only if later loaded under a separately authorized runtime task. They are not registered, assigned, deployed, or runtime-validated by this task.

## Contact binding register

There are 16 registered opening/contact binary sensors. Sensor13 is the operator-confirmed Main Entrance Door. The remaining 15 physical identities are unresolved and are not classified as windows.

| Customer label | Entity binding | Evidence classification | Backup restore-state observation | Physical identity / runtime posture |
|---|---|---|---|---|
| Main Entrance Door | `binary_sensor.sensor13` | Backup registry verified; Operator-confirmed physical identity; Restore-state evidence | `off` | Main Entrance Door; Runtime validation required |
| Opening Contact 01 | `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003` | Backup registry verified; Restore-state evidence | `off` | Physical identity unresolved; Runtime validation required |
| Opening Contact 02 | `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003_2` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 03 | `binary_sensor.sensor03` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 04 | `binary_sensor.sensor04` | Backup registry verified; Restore-state evidence | `off` | Physical identity unresolved; Runtime validation required |
| Opening Contact 05 | `binary_sensor.sensor05` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 06 | `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003_3` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 07 | `binary_sensor.sensor7` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 08 | `binary_sensor.sensor08` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 09 | `binary_sensor.sensor09` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 10 | `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003_4` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 11 | `binary_sensor.sensor11` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 12 | `binary_sensor.sensor12` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 13 | `binary_sensor.sensor14` | Backup registry verified; Restore-state evidence | `off` | Physical identity unresolved; Runtime validation required |
| Opening Contact 14 | `binary_sensor.sensor15` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |
| Opening Contact 15 | `binary_sensor.sensor16` | Backup registry verified; Restore-state evidence | `unavailable` | Physical identity unresolved; Runtime validation required |

Backup observation totals were four contacts reporting a valid `off` state and twelve contacts `unavailable`. These values are evidence posture only. Dashboard cards evaluate current runtime state dynamically: `off = Closed`, `on = Open`, and `unavailable` or `unknown = Unavailable`.

## Main Entrance capability register

| Customer label | Entity binding | Manufacturer / model | Evidence classification | Customer action posture |
|---|---|---|---|---|
| Main Entrance Deadbolt | `lock.door_lock_deadbolt_main_door` | Kwikset 914 | Backup registry verified; Recorder evidence; Runtime validation required | Status-only. Control activation is `RUNTIME_REQUIRED`. |
| Main Entrance Lever Lock | `lock.door_lock_lower_lever_handle_main` | Kwikset 912 | Backup registry verified; Recorder evidence; Runtime validation required | Status-only. Control activation is `RUNTIME_REQUIRED`. |
| Main Entrance Doorbell | Not yet bound | Reolink model/capabilities unresolved | Operator-confirmed planned device; Runtime validation required | Layout placeholder only; no service or media binding. |
| PTZ Camera | Not yet bound | Reolink model/capabilities unresolved | Operator-confirmed planned device; Runtime validation required | Layout placeholder only; no service, media, or PTZ binding. |

The former Peckham Kwikset 620 assumption is superseded by the backup-verified Kwikset 914 deadbolt. It is not a current device binding or customer-dashboard capability.

## Composite Main Entrance rule

The Main Entrance customer summary consumes `binary_sensor.sensor13`, `lock.door_lock_deadbolt_main_door`, and `lock.door_lock_lower_lever_handle_main`. It may show `Normal` only when the door is closed and both locks are locked. Door open or either lock unlocked maps to `Attention`. Any required unknown/unavailable state maps to `Unavailable` unless an open/unlocked state already supports `Attention`. No Alert condition is invented.

This rule documents presentation only. It does not create a helper, template, automation, or entity.

## Runtime-required follow-up

1. Physically trigger and identify Opening Contact 01 through Opening Contact 15; do not infer a room, wall, direction, window, door, or other opening before that evidence exists.
2. Validate all 16 contact entities against current runtime state and unavailable/unknown behavior.
3. Validate both lock entities, permissions, authoritative result state, failure/result-unknown behavior, and deliberate unlock confirmation before enabling customer controls.
4. Install/integrate each planned Reolink device under a separate bounded task; record the exact entity and only actually supported, privacy-approved capabilities.
5. Validate `weather.forecast_home`, property-local weather/time behavior, both dashboard artifacts, Light/Dark/Auto parity, Companion phone portrait, tablet portrait/landscape, and desktop browser.
6. Separately authorize any dashboard registration, assignment, customer acceptance, notification implementation, or deployment.

## Explicit unresolved conditions

- Physical identity and final customer label for 15 contacts.
- Current runtime availability and commissioning evidence for every represented entity.
- Lock-control lifecycle and backend permission/denial evidence; current repository cards remain status-only.
- Reolink Doorbell and PTZ entity bindings, media/privacy decisions, and supported capabilities.
- Compact/Default/Large and Inter/Atkinson Hyperlegible/System selection persistence; no helpers or fake controls are added by REV03.
- Live dashboard registration, assignment, acceptance evidence, and deployment.
