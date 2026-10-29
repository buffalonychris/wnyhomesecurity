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
| Peckham Dark customer dashboard | `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml` | Modify | Yes |
| Peckham Light customer dashboard | `home-assistant/peckham/dashboards/peckham-main-dashboard-light.yaml` | Create | Yes |
| Task lifecycle | `docs/system/master-task-register.md` | Add this single bounded task record | Yes |
| Task authority | This work order | Maintain | Yes |

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

## Operator-Approved Peckham-Specific Execution Exception

The operator authorizes this task to deliver explicit Light and Dark Peckham customer presentations without waiting for PR #620, universal WNYHS theme reconciliation, a universal action-label/on-blue token, a generalized dashboard-generation model, or generalized Light/Dark/Auto architecture. This exception applies only to the Peckham customer dashboard deliverable and does not amend, replace, or establish a reusable WNYHS design standard.

- `peckham-main-dashboard.yaml` is the standalone Dark customer artifact and remains the primary/live-paste source.
- `peckham-main-dashboard-light.yaml` is the standalone Light customer artifact.
- Both artifacts must preserve identical seven-view information architecture, entity bindings, state logic, functionality, control restrictions, customer content, and responsive structure. Differences are presentation only.
- Gold remains an identity/accent role. Blue is an action accent; customer actions use a site-local outlined treatment with high-contrast neutral labels instead of relying on an unresolved universal on-blue label token.
- Dark uses the applicable DESIGN001 Dark surface, text, border, and status values. Light uses the applicable DESIGN001 Light surface, text, and border values; its status text uses restrained Peckham-local darker semantic variants where the canonical bright status value would not provide readable contrast on the Light surface: Normal `#166534`, Attention `#92400E`, and Unavailable `#475569` on the `#E8EEF6` recessed surface.
- These site-local variables and accessible Light status choices must not be promoted as universal theme governance.

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
4. `home-assistant/peckham/dashboards/peckham-main-dashboard-light.yaml`

## Forbidden Scope

Do not modify PR #620, reusable WNYHS themes, BKLF themes, the expanded Peckham dashboard, canonical standards, `configuration.yaml`, HACS, frontend resources, live Home Assistant, dashboard registration, automations, notification routing, Cloudflare, users, lock programming, Z-Wave, Zigbee, secrets, or customer accounts. Do not add dependencies, merge, deploy, enable auto-merge, or mark the draft PR ready.

## Validation

- Parse both customer dashboard YAML artifacts.
- Confirm identical seven-view information architecture and `COMING SOON` across Light and Dark.
- Confirm all 16 contact entities and neutral customer labels in both artifacts.
- Confirm exact door, lock, and weather bindings.
- Confirm locks and contacts remain status-only and contain no service calls.
- Confirm camera placeholders remain unbound and use no service or entity binding.
- Confirm no new dependency, visible raw entity ID, engineering terminology, or unsafe state claim.
- Confirm responsive phone/Companion, tablet, and desktop/browser composition is equivalent and explicitly represented without horizontal scrolling.
- Confirm Light/Dark functional parity and readable contrast, including site-local status and action-accent treatments.
- Confirm the exact four-file allowlist, no unexpected deletes, and `git diff --check`.
- Commit and push the existing task branch, then update existing draft PR #621; do not create another PR, merge, or deploy.

## Operator Decision

Operator review of the repository artifact and any later live paste, runtime acceptance, assignment, merge, or deployment remain separate explicit actions.
