# T-HA-DASH-PECKHAM-002 — Peckham Backup-Based Dashboard Preview + Onsite Completion

**Revision:** REV02  
**Status:** OPERATOR-AUTHORIZED WORK ORDER  
**Primary Workstream:** Dashboard / Interactive Experience System  
**Related Workstreams:** Automation System; Infrastructure / Deployment System; Project Governance  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Purpose

REV02 supersedes REV01 for execution sequencing.

The operator has provided a current Peckham Home Assistant backup specifically so the customer-facing dashboards can be substantially completed and visually reviewed **before** the onsite visit. The onsite visit remains required only for facts that cannot be verified from the backup: physical window identification, live lock inclusion/testing, Reolink installation/capability verification, final live registration/assignment, and acceptance.

Do not delay the pre-onsite dashboard preview merely because those final field facts remain unresolved.

## Current synchronized base

Start from synchronized `origin/main` containing merged PR #576 at commit `e5a0723433780abad4f00410906433f81ed44334` or a later synchronized main that preserves it.

## Backup-derived authoritative facts for Phase A

The supplied Peckham backup was inspected outside the repository and establishes the current Home Assistant entity registry and available dashboard dependencies.

### Contact entities present in the backup

There are 16 installed eWeLink contact devices. `Sensor13` is operator-confirmed as the Main Entrance Door. Its contact entity is:

- `binary_sensor.sensor13`

The other 15 installed contact entities are verified as present in the backup, but their physical window locations are intentionally unresolved:

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

For Phase A, assign these 15 entities to generic customer-facing labels `Window Sensor 01` through `Window Sensor 15`. Do **not** claim room, wall, direction, or exact opening.

### Available existing frontend dependencies in the backup

The backup contains these already-installed Lovelace/HACS resources and they may be used where consistent with current dashboard standards:

- Mushroom
- Bubble Card
- button-card
- card-mod
- layout-card
- auto-entities
- swipe-card

Do not add a new custom-card dependency under this task.

### Not present / not yet verified in the backup

The following must remain visually represented as planned/awaiting binding, not as live entities:

- Reolink Main Entrance doorbell
- Kwikset SmartCode 912 lever lock
- Kwikset Home Connect 620 deadbolt

Do not invent entity IDs or supported services for these devices.

## Execution phases

### Phase A — Execute now: pre-onsite bound preview

Create the best practical, customer-facing Peckham dashboard preview using the verified backup entities.

Phase A must:

1. Bind `binary_sensor.sensor13` to the Main Entrance Door card/status.
2. Bind all 15 verified remaining contact entities to generic `Window Sensor 01` through `Window Sensor 15` cards.
3. Build the Main Entrance visual experience now, including clearly marked planned placeholders for:
   - Reolink doorbell;
   - Kwikset 912 lever;
   - Kwikset 620 deadbolt.
4. Design the composite Main Entrance presentation now, but it must remain non-conclusive until both lock entities exist. It may explain that full lock status requires both locks.
5. Produce a polished mobile/customer dashboard and expanded/tablet/desktop dashboard that the operator can review before onsite.
6. Preserve persistent `PK | PECKHAM` site identity and Building Status on all primary views.
7. Preserve Home, Main Entrance, Windows, Appearance, and More navigation unless a higher-authority dashboard standard requires a different exact structure.
8. Preserve Light / Dark / Auto presentation and theme-safe styling.
9. Preserve lower WNY Home Security branding: `wnyhomesecurity.com` and `716-201-0364`.
10. Use plain customer-facing language.
11. Use existing installed dashboard cards where they materially improve the result, but do not introduce new dependencies.
12. Make the preview visually complete enough that the operator can judge layout, hierarchy, readability, site recognition, window presentation, entrance presentation, and future camera/lock placement before the field visit.

### Phase B — Deferred until onsite

Do not complete these items during Phase A:

- final physical naming of the 15 window sensors;
- Z-Wave inclusion and live entity binding for the 912 and 620;
- lock-state/control testing;
- Reolink installation, model verification, entity binding, two-way audio verification, snapshot/recording/light capability verification;
- final composite lock logic using live lock entities;
- final live dashboard registration/user assignment if it requires onsite validation;
- final mobile/browser acceptance screenshots.

Phase B remains controlled by this task after operator approval of the Phase A preview, unless a later revision explicitly supersedes it.

## Approved Owner Routing Matrix

| Owner / Target | Phase A Action | Boundary |
|---|---|---|
| `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml` | Update | Build and bind the mobile/customer preview to verified backup contact entities; retain placeholders for uninstalled/unverified entry devices. |
| `home-assistant/peckham/dashboards/peckham-expanded-dashboard.yaml` | Update | Build and bind the expanded preview to the same verified contact inventory. |
| `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md` | Update | Record backup-derived entity bindings and clearly distinguish backup-verified from onsite-verified facts. |
| `docs/system/master-task-register.md` | Update | Maintain `T-HA-DASH-PECKHAM-002` as Phase A complete / Phase B pending after truthful validation. |

## Exact repository allowlist

Only these four files may change during Phase A:

1. `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml`
2. `home-assistant/peckham/dashboards/peckham-expanded-dashboard.yaml`
3. `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md`
4. `docs/system/master-task-register.md`

No additional repository file is authorized.

## Dashboard content requirements

### Home

Show, at minimum:

- persistent Peckham identity;
- Building Status summary based only on the currently bound contact inventory;
- clear entry summary;
- clear windows summary;
- access to Appearance;
- concise indication that doorbell/locks are pending final onsite integration.

Building Status must not imply the entire building is fully secure when planned locks/camera remain unavailable. Use non-misleading language such as contact coverage status rather than a false whole-building security conclusion.

### Main Entrance

Show:

- live `Main Entrance Door` contact from `binary_sensor.sensor13`;
- visually complete Reolink doorbell placeholder in the intended final card position;
- visually complete Kwikset 912 lever placeholder;
- visually complete Kwikset 620 deadbolt placeholder;
- composite entry-status area explaining that full lock confirmation becomes active only after both locks are bound onsite.

The preview should make it obvious what the final Main Entrance experience will look like without pretending the uninstalled devices are live.

### Windows

Show all 15 verified backup entities using generic labels `Window Sensor 01` through `Window Sensor 15`.

The operator will physically trigger each onsite and replace generic labels with final names later.

### Appearance

Provide the established WNYHS Light / Dark / Auto guidance/presentation consistent with Bailey and current dashboard governance.

### More

Use this view for low-priority operational/help/context content only. Do not bury primary security status or controls here.

## Visual quality requirement

This is not another wireframe or text-only shell. Phase A exists specifically so the operator can inspect the dashboard before onsite.

Use the existing design system and installed HA card capabilities to create a credible near-final customer experience. Preserve semantic tokens/theme variables and avoid hardcoded visual drift.

The mobile variant should prioritize glanceability and touch targets. The expanded variant should use the additional width productively without becoming a different information architecture.

## Binding register rules

Update the binding register to distinguish evidence source explicitly:

- `Backup verified` for exact entity IDs confirmed in the supplied backup.
- `Operator confirmed` for Sensor13 = Main Entrance Door.
- `Pending onsite physical identification` for each window's final location.
- `Pending onsite device integration` for doorbell and locks.

Do not mark physical window identity or device capability as onsite-tested during Phase A.

## Validation required for Phase A

Before opening the implementation PR:

1. Confirm OPS004 primary workstream exactly matches `Dashboard / Interactive Experience System`.
2. Confirm exact four-file allowlist and no unauthorized files.
3. Parse both dashboard YAML files successfully.
4. Confirm `binary_sensor.sensor13` appears exactly as Main Entrance Door.
5. Confirm the other 15 verified backup contact entity IDs are each represented exactly once in the intended window inventory unless current dashboard architecture legitimately references an entity more than once for summary/detail views.
6. Confirm all 15 customer labels remain generic and do not invent physical locations.
7. Confirm Reolink, 912, and 620 remain placeholders without fabricated entity IDs or service calls.
8. Confirm persistent Peckham identity and Building Status presentation.
9. Confirm Light/Dark/Auto presentation remains theme-safe.
10. Confirm no Bailey-specific customer entities, private URLs, credentials, tokens, or secrets.
11. Confirm no new frontend dependencies.
12. Run `git diff --check`.
13. Report diff stat and clean worktree.
14. Open one draft PR for operator visual review.
15. Do not merge or deploy.

## Operator review gate after Phase A

After the draft PR is opened, STOP.

The operator will review the generated dashboard structure before onsite. Do not advance to Phase B until the operator explicitly approves the preview and the onsite visit is underway.

## Phase B acceptance requirements

When later authorized onsite under this same task/revision:

- physically identify and rename all 15 windows;
- include/test the Kwikset 912 and 620;
- install/integrate/test the Reolink doorbell;
- expose only verified Reolink capabilities;
- activate composite Main Entrance lock status only from verified lock entities;
- verify dashboard registration/assignment;
- validate mobile and expanded targets;
- validate Light/Dark/Auto;
- record truthful onsite evidence;
- open the final bounded PR without Codex merging it.

## Forbidden scope

No Bailey changes. No KAOS implementation. No Cloudflare/DNS changes. No website, HubSpot, Stripe/payment, scheduling, email, or unrelated automation work. No access-code changes. No invented entity IDs, locations, capabilities, or security claims.

## Codex execution instruction for the current run

Execute **Phase A only** from synchronized `origin/main`. Build the near-final Peckham dashboard preview using the backup-derived contact entity inventory above, update only the exact allowlist, validate, push one bounded task branch, and open one draft PR. Stop before Phase B, live device inclusion, live deployment, or merge.
