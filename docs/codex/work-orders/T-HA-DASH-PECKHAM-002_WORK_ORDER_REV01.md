# T-HA-DASH-PECKHAM-002 — Peckham Onsite Dashboard Binding and Acceptance

**Revision:** REV01  
**Status:** OPERATOR-AUTHORIZED WORK ORDER — ONSITE EXECUTION PENDING  
**Primary Workstream:** Dashboard / Interactive Experience System  
**Related Workstreams:** Automation System; Infrastructure / Deployment System; Project Governance  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Objective

Complete the Peckham customer dashboard by replacing the merged unbound pre-onsite foundation with physically verified onsite bindings and acceptance evidence.

This task is intentionally field-gated. No unresolved entity ID, physical sensor location, device capability, or live-state conclusion may be invented before onsite verification.

## Preconditions

1. Start from synchronized current `origin/main` containing merged PR #575 and commit `431eb9f37617a95a41b0e62d0328fc3d9f144c52` or a later synchronized main that preserves that work.
2. `T-HA-DASH-PECKHAM-001` must remain complete.
3. Operator must be onsite at Peckham with access to the live Home Assistant instance and installed devices before binding work begins.
4. Preserve existing working Home Assistant, Cloudflare remote-access, customer, notification, and security behavior unless this work order explicitly authorizes a change.
5. If a required onsite fact cannot be verified, leave it unresolved and report it. Do not infer it.

## Approved Owner Routing Matrix

| Owner / Target | Action | Authority Boundary |
|---|---|---|
| `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md` | Update | Record only physically verified Peckham entity IDs, final labels/areas, tested states, supported device capabilities, and onsite notes. |
| `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml` | Update | Bind the mobile/customer dashboard only to verified Peckham entities and supported actions. |
| `home-assistant/peckham/dashboards/peckham-expanded-dashboard.yaml` | Update | Bind the expanded/tablet/desktop dashboard only to verified Peckham entities and supported actions. |
| `docs/system/master-task-register.md` | Update | Add/maintain only the current-schema `T-HA-DASH-PECKHAM-002` record and truthful execution evidence. |

No other repository file is authorized by this work order. If another file is required for safe implementation, STOP and request an operator-approved revision rather than expanding scope.

## Exact Repository Allowlist

Only these four repository files may change:

1. `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md`
2. `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml`
3. `home-assistant/peckham/dashboards/peckham-expanded-dashboard.yaml`
4. `docs/system/master-task-register.md`

## Sanitized Peckham Device Inventory

### Installed contacts

- Total installed contact sensors represented by the foundation: **16**.
- **Sensor 13 = Main Entrance Door**.
- Remaining **15 contacts = first-floor windows** whose individual physical locations must be established by onsite trigger testing.
- Temporary labels `Window Sensor 01` through `Window Sensor 15` may remain until each sensor is physically identified.

### Main Entrance devices

The dashboard must be prepared to bind and validate:

- Main Entrance contact — Sensor 13.
- Reolink Main Entrance doorbell — exact installed model and capabilities must be verified onsite.
- Kwikset SmartCode 912 lever lock.
- Kwikset Home Connect 620 deadbolt.

Exact entity IDs are deliberately absent from this work order and must come from live onsite verification.

## Onsite Verification Procedure

### A. Contacts

1. Confirm the live Home Assistant instance is the Peckham site before changing anything.
2. Physically trigger Sensor 13 and verify both open and closed state transitions.
3. Record its exact live entity ID as `Main Entrance Door` in the binding register.
4. Physically trigger the remaining contact sensors one at a time.
5. For each verified window sensor, record:
   - exact entity ID;
   - final physical/customer-facing label;
   - area/location;
   - tested open/closed state;
   - concise onsite note if needed.
6. Do not infer room, wall, compass direction, or opening from numbering or adjacency.

### B. Kwikset locks

1. Include/connect the Kwikset SmartCode 912 and Kwikset Home Connect 620 only through the approved Home Assistant/Z-Wave workflow available onsite.
2. Verify each lock independently before dashboard binding.
3. Record exact verified entity IDs in the binding register.
4. Verify state reporting for locked and unlocked conditions.
5. Verify any dashboard lock/unlock control deliberately and safely before customer exposure.
6. Do not alter access codes, lock programming, or customer credentials unless separately and explicitly authorized onsite.

### C. Reolink doorbell

1. Verify the exact installed Reolink doorbell model.
2. Integrate it through the approved Home Assistant method available onsite.
3. Record only capabilities actually exposed and tested.
4. The Main Entrance doorbell experience should follow the established Bailey customer pattern where the Peckham hardware supports it, including as verified:
   - live visitor/camera view;
   - doorbell/event status;
   - snapshot or recording action;
   - obvious customer-facing two-way communication action;
   - spotlight/light control only if the installed model exposes and supports it;
   - associated Main Entrance lock controls within the same entry workflow.
5. Do not fabricate unsupported Reolink services or controls to imitate Bailey.

## Dashboard Binding Requirements

Update both Peckham dashboard variants from the merged unbound foundation.

Preserve:

- `PK | PECKHAM` persistent site identity.
- Persistent Building Status presentation.
- Home, Main Entrance, Windows, Appearance, and More information architecture unless verified runtime constraints require a documented stop.
- Light / Dark / Auto customer guidance/behavior.
- WNY Home Security lower branding with `wnyhomesecurity.com` and `716-201-0364`.
- Plain customer-facing language.

Bind only verified entities.

### Main Entrance composite rule

The entrance contains both the 912 lever and 620 deadbolt.

The dashboard may represent the Main Entrance as **fully locked only when both verified lock states are locked**.

If either lock is unlocked, unavailable, unknown, stale, or otherwise unverified, the dashboard must not claim the entrance is fully locked.

Individual lock states and deliberate controls must remain separately visible.

### Building Status

Building Status must use verified live entities only. Do not claim a healthy/secure/closed state from incomplete or unavailable sensor data. Unknown/unavailable conditions must remain visibly non-conclusive.

## Dashboard Registration and Assignment

After bindings validate:

1. Register the Peckham dashboard using the existing supported Home Assistant dashboard mechanism.
2. Confirm the customer-facing mobile variant is usable in the Home Assistant Companion App.
3. Confirm the expanded variant is usable on the intended larger-screen/browser target.
4. Confirm users can clearly tell they are viewing **Peckham**, not Bailey, on every primary view.
5. Do not change Bailey dashboard assignments or behavior.
6. Do not create unrelated users or modify unrelated user permissions.

If repository-only artifacts cannot safely perform the live registration/assignment without changing an unauthorized file, perform the live HA action manually under operator supervision and document the verified result in the binding register/MTR. Do not add an unauthorized repository file.

## Appearance Acceptance

Validate customer-visible behavior in:

- Light mode;
- Dark mode;
- Auto/system behavior where supported by the actual Companion App/browser target.

The site identity, status meaning, critical entry controls, and readability must remain clear in all tested modes.

## Screenshot / Acceptance Evidence Plan

Capture sanitized acceptance evidence sufficient to confirm:

1. Peckham identity on Home.
2. Building Status presentation.
3. Main Entrance door contact.
4. Reolink doorbell card/experience.
5. 912 lever state/control.
6. 620 deadbolt state/control.
7. Composite Main Entrance state behavior.
8. Windows view with physically verified names.
9. Light mode.
10. Dark mode.
11. Mobile Companion App target.
12. Expanded/browser target.

Do not commit screenshots containing credentials, private URLs, tokens, customer personal data, or other secrets unless a later owner document explicitly authorizes an evidence location. Record acceptance results textually in the binding register and MTR under this task.

## Explicitly Deferred / Not Authorized

This task does **not** authorize:

- redesigning the dashboard governance standard;
- changing Bailey;
- building the KAOS dashboard-generation component;
- adding unrelated automations or notifications;
- changing Cloudflare tunnels/DNS;
- changing website/runtime funnels;
- CRM/HubSpot work;
- Stripe/payment work;
- scheduling/email changes;
- new Home Assistant custom-card dependencies unless already approved by controlling repository standards;
- access-code redesign or credential handling;
- guessing any missing entity, sensor location, device capability, or state.

## Logo Boundary

The merged foundation deliberately deferred the gold WNYHS logo because no approved repository asset path was established.

Do not invent or add a logo path in this task unless an already-approved repository-owned asset is discoverable under controlling standards without creating another file. If no approved asset exists, leave the logo deferred and report it as a follow-up rather than expanding scope.

## Validation Required

Before completion:

1. Confirm exact OPS004 routing remains `Dashboard / Interactive Experience System`.
2. Confirm only the exact four allowlisted repository files changed.
3. Confirm no deletions outside authorized edits.
4. Parse both dashboard YAML files successfully.
5. Confirm all 16 contacts are represented in the binding register and each bound contact has physical verification evidence.
6. Confirm Sensor 13 is recorded as Main Entrance Door.
7. Confirm all 15 windows have either verified final labels/bindings or are explicitly unresolved; no inferred locations.
8. Confirm Reolink capabilities shown on dashboard were actually verified.
9. Confirm both lock bindings and independent states were tested.
10. Confirm composite entrance status cannot falsely claim fully locked when either lock is not verified locked.
11. Confirm Peckham identity remains persistent.
12. Confirm Light/Dark/Auto acceptance results are recorded.
13. Confirm mobile and expanded targets were reviewed.
14. Scan for secrets, private URLs, credentials, Bailey-specific entity IDs/data, and unsupported capabilities.
15. Run `git diff --check`.
16. Report final diff stat and clean worktree status.

## Rollback Posture

- Preserve the merged PR #575 unbound foundation as Git history and rollback reference.
- If a live dashboard binding or registration causes incorrect state, unsafe control behavior, or customer confusion, remove/disable the affected live binding and return to the last verified safe dashboard state.
- Do not alter working lock programming, customer access codes, Cloudflare remote access, or unrelated Home Assistant behavior as a rollback shortcut.
- Repository rollback must remain bounded to this task's four-file allowlist unless separately authorized.

## Exit Criteria

This task is DONE only when:

- Sensor 13 is physically verified and bound as Main Entrance Door;
- the remaining 15 contacts are physically reconciled and recorded, or any genuinely unresolved sensor is explicitly documented without guessing;
- the 912 and 620 are independently verified and safely represented;
- the installed Reolink doorbell is verified and only supported capabilities are exposed;
- both dashboard variants are bound to verified entities;
- composite Main Entrance status follows the two-lock rule;
- Peckham site identity and Building Status remain clear;
- dashboard registration/assignment is verified;
- mobile and expanded acceptance is complete;
- Light/Dark/Auto behavior is reviewed;
- binding register and MTR contain truthful completion evidence;
- exact repository allowlist and validation pass;
- one bounded implementation PR is opened for operator review;
- no merge is performed by Codex.

## Codex Execution Rules

- Create one bounded task branch from synchronized `origin/main`.
- Execute only this work order.
- Do not infer missing onsite facts.
- Do not expand scope.
- Keep repository edits within the exact allowlist.
- Use live Home Assistant only for the onsite verification/binding actions expressly authorized above.
- Do not merge the resulting PR.
- Stop and report any authority conflict, unavailable required device, unsupported capability, unsafe control behavior, or need for an unauthorized file.
