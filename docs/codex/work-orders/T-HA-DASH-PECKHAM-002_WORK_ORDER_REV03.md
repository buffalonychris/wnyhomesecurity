# T-HA-DASH-PECKHAM-002 — Peckham Current-Backup Responsive Customer Dashboard

**Revision:** REV03
**Status:** OPERATOR AUTHORIZED — IN PROGRESS
**Category:** OPS
**Primary Workstream:** Dashboard / Interactive Experience System
**Related Workstreams:** Project Governance; Visual System; Automation System; Runtime System
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
**Authorization:** Christian A. Brzostowicz explicitly authorized this REV03 task on 2026-10-21.
**Supersession:** REV03 supersedes REV02 for this implementation run.

## Read, reasoning, and execution posture

**READ MODE: TARGETED**
Search exact task IDs, headings, owner sections, bindings, and validation assertions. Do not broadly load the Master Task Register, catalogs, manifests, raw backup contents, or unrelated historical material.

**REASONING POSTURE: ADAPTIVE**
Use standard reasoning for authority interpretation and semantic-state design; use lower effort for deterministic edits, parsing, allowlist checks, Git delivery, and closeout. Elevate only if a genuine authority, protected-system, or semantic-state conflict appears.

**EXECUTION POSTURE: DIRECT**
Repository and GitHub delivery only. No live Home Assistant, application-control, browser automation, Cloudflare, or other external integration is authorized except GitHub operations needed to push the bounded branch and open one draft PR.

## Purpose and objective

Replace stale Peckham Phase-A assumptions with a responsive, near-production customer dashboard based only on the sanitized facts from the operator-supplied Home Assistant backup created 2026-10-21 (Home Assistant Core 2026.8.2). Produce repository dashboard artifacts for operator review without live Home Assistant access, runtime mutation, registration, assignment, deployment, or merge.

The customer dashboard must truthfully represent all 16 registered opening/contact sensors, the two verified Main Entrance locks, two explicitly planned Reolink layout positions, the qualified weather source, and the current canonical seven-tab navigation across phone, tablet, and desktop.

## Required precheck and delivery continuity

1. Start from clean, fetched, synchronized `origin/main`.
2. Do not continue, rebase, modify, close, or merge stale draft PR #578 or its branch.
3. Use new branch `task/t-ha-dash-peckham-002-rev03-current-backup`.
4. Create this REV03 work order and activate the existing task ID in the Master Task Register before dashboard implementation edits.
5. Open one new draft PR to `main`; do not mark it ready, merge it, or deploy it.

## Required authority and owner documents

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md` (exact task record only)
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md` (exact workstream section)
- `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md` (exact workstream status only)
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md`
- `docs/home-assistant/WNYHS_DASHBOARD_CREATION_AND_LIFECYCLE_STANDARD_REV01.md`
- `docs/home-assistant/WNYHS_SITE_CAPABILITY_EVIDENCE_AND_BINDING_STANDARD_REV01.md`
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
- `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
- `docs/codex/work-orders/T-HA-DASH-PECKHAM-002_WORK_ORDER_REV02.md` (superseded implementation lineage only)

## Operator-approved Owner Routing Matrix

| Approved concept | Canonical owner / exact target | Action | Reason and alternate-owner exclusion | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- |
| REV03 bounded authority | `docs/codex/work-orders/T-HA-DASH-PECKHAM-002_WORK_ORDER_REV03.md` | CREATE | Durable task-specific authority; canonical standards remain unchanged. | NO | HIGH |
| Task lifecycle and scope | `docs/system/master-task-register.md`, one `T-HA-DASH-PECKHAM-002` block | MODIFY | MTR owns execution status; no duplicate task ID is permitted. | NO | HIGH |
| Sanitized Peckham evidence and bindings | `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md` | MODIFY | Site-specific internal binding evidence belongs here, not in customer YAML or canonical standards. | NO | HIGH |
| Primary responsive customer dashboard | `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml` | MODIFY | This is the single customer product across phone, tablet, and desktop. | NO | HIGH |
| Expanded QA companion | `home-assistant/peckham/dashboards/peckham-expanded-dashboard.yaml` | MODIFY | Internal expanded/desktop QA companion; not a second customer-selected product. | NO | HIGH |

## Sanitized authoritative evidence

Do not read, copy, or commit the backup TAR, secrets, raw registries, auth data, database, unique IDs, MAC addresses, credentials, or tokens. Use only these promoted facts:

- Evidence date: 2026-10-21; backup Core version: 2026.8.2.
- `binary_sensor.sensor13` is operator-confirmed as `Main Entrance Door`.
- The other 15 contact entities are installed/registered but physically unidentified and must be labeled `Opening Contact 01` through `Opening Contact 15` in the exact supplied order:
  1. `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003`
  2. `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003_2`
  3. `binary_sensor.sensor03`
  4. `binary_sensor.sensor04`
  5. `binary_sensor.sensor05`
  6. `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003_3`
  7. `binary_sensor.sensor7`
  8. `binary_sensor.sensor08`
  9. `binary_sensor.sensor09`
  10. `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003_4`
  11. `binary_sensor.sensor11`
  12. `binary_sensor.sensor12`
  13. `binary_sensor.sensor14`
  14. `binary_sensor.sensor15`
  15. `binary_sensor.sensor16`
- Restore-state evidence at backup time was `off` for `binary_sensor.ewelink_ck_tlsr8656_ss5_01_7003`, `binary_sensor.sensor04`, `binary_sensor.sensor13`, and `binary_sensor.sensor14`; the other twelve contacts were `unavailable`. This is evidence posture only, never a hardcoded runtime state.
- Runtime contact mapping is `off = Closed`, `on = Open`, and `unavailable` or `unknown = Unavailable`. Unknown/unavailable never becomes Normal, Closed, Safe, or Secure.
- `lock.door_lock_deadbolt_main_door` is the live registered `Main Entrance Deadbolt`, Kwikset 914.
- `lock.door_lock_lower_lever_handle_main` is the live registered `Main Entrance Lever Lock`, Kwikset 912.
- Recorder evidence includes recent locked/unlocked transitions for both locks. The prior Kwikset 620 assumption is superseded and must be removed from current customer presentation and the binding register.
- `weather.forecast_home` is the qualified property weather source. No external fallback is authorized.
- Installed frontend resources available for use are Mushroom, Bubble Card, button-card, card-mod, layout-card, auto-entities, swipe-card, and Browser Mod. Add no dependency and change no HACS package.

## Required dashboard behavior

### Navigation and views

Use exactly these visible top-level views in this order: `Home`, `Systems`, `Activity`, `Explore WNYHS`, `Support`, `Property`, `Settings`. `Explore WNYHS` must visibly say `COMING SOON`. Do not implement the pending dynamic-navigation architecture or modify INSTALL006.

Within `Systems`, provide customer-friendly sections/content for `Main Entrance`, `Opening Contacts`, and `Cameras` without adding top-level tabs.

### Home

Show `BK LEWIS · PECKHAM` (unless the existing governed artifact establishes an exact capitalization variant), a scoped Building Status, truthful Main Entrance summary, dynamic opening-contact counts for Closed/Open/Unavailable, property weather, and actionable attention/unavailable conditions. Do not show the raw 16-sensor list or technical setup noise. Planned camera positions do not contribute to health, status, coverage, or active-device counts.

### Opening contacts

Create a dedicated view-only presentation for all 16 contacts: `Main Entrance Door` plus `Opening Contact 01` through `Opening Contact 15`. Each card dynamically shows only `Closed`, `Open`, or `Unavailable`; contains no control action; exposes no entity ID, Zigbee term, LQI, RSSI, IEEE address, diagnostic, or integration detail; and remains visible when unavailable.

### Main Entrance and locks

Show customer-facing state cards for the door, Kwikset 914 deadbolt, and Kwikset 912 lever. The Main Entrance composite is fully good only when the door is closed and both locks are locked. If any required state is unknown/unavailable, overall status is `Unavailable`, never `Normal`. If the door is open or either lock is unlocked, show `Attention` unless an existing governed rule supports a higher status; do not invent an Alert.

Lock/unlock actions may appear only if the existing installed stack cleanly supports the canonical high-impact lifecycle: Available, Command Pending, Confirmed Success, Failure, Result Unknown, and Disabled/Unavailable, with deliberate confirmation for unlock and authoritative state confirmation before success. If that cannot be satisfied without helpers, scripts, automations, dependencies, or fake success behavior, keep locks status-only and record control activation as `RUNTIME_REQUIRED` follow-up.

### Cameras

Reserve media-style geometry for `Main Entrance Doorbell` and `PTZ Camera`, each visibly `Setup Pending` or `Not Connected Yet`. These operator-confirmed planned positions have no invented entity, stream, service, media, audio, recording, detection, talk, light, siren, PTZ, preset, zoom, or patrol capability. They are visually distinct from installed/live capabilities and affect no property-health conclusion.

### Activity, support, property, and settings

- Activity may use native customer-readable history/logbook presentation for the four contacts with backup reporting evidence and both lock entities. Use customer-safe names and exclude debug/diagnostic/user-code noise. Activity is not an audit log or proof of notification delivery.
- Support uses `716-201-0364`, `support@wnyhomesecurity.com`, and `wnyhomesecurity.com` without emergency response, monitoring, or dispatch claims.
- Property may summarize the site, 16 contacts, two locks, two planned Reolink positions, and support reference without technical identifiers or internals.
- Settings truthfully preserves Light/Dark/Auto presentation. Compact/Default/Large and Inter/Atkinson Hyperlegible/System may be documented as unavailable until separately supported; do not fake selection persistence or add helpers.

### Responsive and visual delivery

`peckham-main-dashboard.yaml` is one responsive customer dashboard for phone portrait, tablet portrait/landscape, and desktop. Phone is single-column with touch-safe status-first presentation and no horizontal scroll. Tablet reflows to one or two columns based on width/orientation. Desktop uses governed multi-column density instead of stretching phone cards. The expanded dashboard is an aligned internal QA companion only.

Follow DESIGN001 tokens and Home Assistant theme variables: WNYHS identity, gold identity accents, blue action family, semantic status colors only for actual status roles, consistent cards, readable contrast, and light/dark parity. Do not use burgundy as the universal action color. Canonical customer statuses are only Normal, Active, Attention, Alert, and Unavailable; do not use Information or Critical as status levels.

## Binding-register update

Record the evidence date, Sensor13 identity, 15 unresolved physical identities, four reporting and twelve unavailable backup observations, both exact lock bindings and models, superseded 620 assumption, planned/unbound Reolink Doorbell and PTZ, unresolved camera capabilities, and required runtime validation. Use evidence labels including `Backup registry verified`, `Recorder evidence`, `Restore-state evidence`, `Operator-confirmed planned device`, `Operator-confirmed physical identity`, `Physical identity unresolved`, and `Runtime validation required`.

## Exact file allowlist

Only these files may change:

1. `docs/codex/work-orders/T-HA-DASH-PECKHAM-002_WORK_ORDER_REV03.md`
2. `docs/system/master-task-register.md`
3. `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md`
4. `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml`
5. `home-assistant/peckham/dashboards/peckham-expanded-dashboard.yaml`

If another file is required, stop and request a work-order revision.

## Forbidden scope and protected systems

No live Home Assistant access or change; dashboard deployment, registration, or user assignment; Reolink integration/configuration; Z-Wave/Zigbee change; live entity rename; notification automation/routing/recipients/escalation/SMS/email/push/quiet-hours/suppression/recovery change; helper, script, automation, PIN/code-slot, access-code, dependency, HACS, Cloudflare, DNS, Bailey, website, CRM/HubSpot, Stripe/payment, scheduling, email, account, secret, merge, deployment, or stale PR #578 modification/closure. No invented location, binding, service, media capability, state, or customer claim.

## Validation

Validation tier: source/UI static repository artifact.

Before draft PR creation:

1. Confirm exact five-file allowlist and no unexpected deletions.
2. Parse both YAML files successfully.
3. Confirm seven visible top-level views in exact canonical order and visible `COMING SOON`.
4. Confirm exact door and two lock bindings; zero current Peckham Kwikset 620 customer/binding-register references except clearly marked superseded historical evidence where necessary.
5. Confirm all 16 contact entities and customer-safe labels are present, unavailable contacts remain visible, and contact cards have no controls.
6. Confirm unknown/unavailable never maps to Normal, Closed, Safe, Secure, or Locked.
7. Confirm both Reolink placeholders exist without entity/service bindings and do not affect Building Status.
8. Confirm lock actions, if any, bind only to the two verified locks, deliberate unlock confirmation exists, and no click-only success behavior exists.
9. Confirm no raw IDs or diagnostics are rendered as customer-facing text.
10. Confirm no new dependency and no notification-routing/automation change.
11. Review responsive structure for phone single-column/no horizontal scroll, tablet reflow, desktop density, and light/dark readability.
12. Confirm support data.
13. Run repository-provided relevant YAML/dashboard checks, `git diff --check`, changed-file/deletion audits, and diff stat.
14. Confirm the task worktree contains only intended branch changes.

## Git and draft PR

Commit the five-file bounded change, push `task/t-ha-dash-peckham-002-rev03-current-backup`, and open one draft PR titled `T-HA-DASH-PECKHAM-002 REV03: current-backup responsive dashboard`. The PR body must summarize the October 21 backup refresh, 16-contact view, four-reporting/twelve-unavailable backup evidence, Kwikset 914/912 bindings, both Reolink placeholders, responsive delivery, protected-system exclusions, no notification-routing change, no new dependencies, and unresolved physical/runtime work.

## Stop conditions and exit criteria

Stop on any authority conflict, required sixth file, unsupported custom-card behavior, ambiguous state mapping, invented capability requirement, secret/private evidence exposure, unexpected pre-existing change, failed required validation, or protected-system need.

Exit only when all five authorized files satisfy REV03, validation passes, one bounded commit is pushed, one new draft PR is open, stale PR #578 remains untouched, and no merge, deployment, live runtime, or protected-system change occurred.
