# T-HA-DASH-PECKHAM-003 — Peckham Customer Dashboard Visual Production Pass

## Task Identity

- **Task ID:** T-HA-DASH-PECKHAM-003
- **Task Name:** Peckham Customer Dashboard Visual Production Pass
- **Status:** IN PROGRESS — CUSTOMER GUI PRODUCTION PASS
- **Category:** OPS / Home Assistant / Customer Dashboard
- **Primary Workstream:** Dashboard / Interactive Experience System
- **Related Workstreams:** Visual System; Project Governance
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Execution Posture:** DIRECT repository implementation only
- **Read Mode:** TARGETED, with full reads of the current Peckham customer dashboard and directly governing dashboard standards.

## Purpose

Transform the proven Peckham customer dashboard into a polished WNY Home Security customer interface for Mr. Lewis while preserving all working entity bindings, state semantics, seven-view navigation, status-only locks, and unbound planned-camera positions.

## Runtime Evidence Accepted for This Task

The operator confirmed that the current repository YAML loads at the manually registered `peckham-control-center` route and that Mushroom, card-mod, weather, the Main Entrance contact, both verified locks, all 16 contacts, Activity, both camera placeholders, and all seven views render. This repository task does not reconnect to, validate against, register, deploy to, or otherwise modify live Home Assistant.

## Owner Routing Matrix

| Concern | Canonical owner | Task treatment | Editable here |
| --- | --- | --- | --- |
| Customer behavior, status meaning, navigation, and control boundaries | `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` | Preserve | No |
| Visual tokens, hierarchy, component anatomy, and accessibility presentation | `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` | Implement as site-local dashboard styling | No |
| Responsive delivery, binding preservation, and acceptance | `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` | Implement and validate | No |
| Peckham customer dashboard | `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml` | Modify | Yes |
| Task lifecycle | `docs/system/master-task-register.md` | Add this single bounded task record | Yes |
| Task authority | This work order | Create | Yes |

## Required Implementation

- Retain the exact top-level destinations: Home, Systems, Activity, Explore WNYHS, Support, Property, and Settings.
- Replace icon-only top navigation with readable native destination titles while preserving native active-view behavior.
- Build a strong WNYHS/property header and dominant property-health hierarchy on Home.
- Present Main Entrance as one coherent status unit with separate Door, Deadbolt, Lever Lock, and Overall rows.
- Present large Closed, Open, and Unavailable contact counts without treating planned cameras as property-health inputs.
- Preserve the current weather entity and integrate its presentation into the customer composition.
- Organize Systems into Main Entrance, Opening Contacts, and Cameras; keep all 16 contacts visible, view-only, and neutrally labeled.
- Keep both locks status-only with no lock/unlock service calls.
- Present the six approved Activity sources as readable state and recency cards without audit-log claims.
- Present both camera positions in stable 16:9 planned-state geometry with no binding or simulated capability.
- Turn Support, Property, Settings, and Explore WNYHS into intentional customer pages without engineering language or unsupported controls.
- Use only native Lovelace, Sections, Mushroom, button-card, and card-mod as materially useful; add no dependency.
- Use deliberate site-local mappings to current DESIGN001 roles without modifying universal theme files.

## Binding and State Contract

- Main Entrance Door: `binary_sensor.sensor13`
- Deadbolt: `lock.door_lock_deadbolt_main_door`
- Lever Lock: `lock.door_lock_lower_lever_handle_main`
- Weather: `weather.forecast_home`
- Preserve the other 15 contact entity IDs and labels exactly.
- Contacts: `off = Closed`, `on = Open`, all other states = `Unavailable`.
- Main Entrance: door closed and both locks locked = `Normal`; any open/unlocked required state = `Attention`; otherwise any unknown/unavailable required state = `Unavailable`.
- Never infer Safe, Secure, Protected, or All Clear from incomplete state.

## Exact File Allowlist

Only these files may change:

1. `docs/codex/work-orders/T-HA-DASH-PECKHAM-003_WORK_ORDER_REV01.md`
2. `docs/system/master-task-register.md`
3. `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml`

## Forbidden Scope

Do not modify PR #620, reusable WNYHS themes, BKLF themes, the expanded Peckham dashboard, canonical standards, `configuration.yaml`, HACS, frontend resources, live Home Assistant, dashboard registration, automations, notification routing, Cloudflare, users, lock programming, Z-Wave, Zigbee, secrets, or customer accounts. Do not add dependencies, merge, deploy, enable auto-merge, or mark the draft PR ready.

## Validation

- Parse the dashboard YAML.
- Confirm all seven exact views and `COMING SOON`.
- Confirm all 16 contact entities and neutral customer labels.
- Confirm exact door, lock, and weather bindings.
- Confirm locks and contacts remain status-only and contain no service calls.
- Confirm camera placeholders remain unbound and use no service or entity binding.
- Confirm no new dependency, visible raw entity ID, engineering terminology, or unsafe state claim.
- Confirm responsive phone/tablet/desktop composition is explicitly represented without horizontal scrolling or a second customer dashboard.
- Confirm the exact three-file allowlist, no unexpected deletes, and `git diff --check`.
- Commit and push one task branch, then open one draft PR to `main`; do not merge or deploy.

## Operator Decision

Operator review of the repository artifact and any later live paste, runtime acceptance, assignment, merge, or deployment remain separate explicit actions.
