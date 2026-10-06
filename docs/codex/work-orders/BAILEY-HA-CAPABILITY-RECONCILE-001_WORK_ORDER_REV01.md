# BAILEY-HA-CAPABILITY-RECONCILE-001 Work Order REV01

Status: OPERATOR AUTHORIZED

## 1. Repository and controlling context

- Repository: `buffalonychris/wnyhomesecurity`
- Local repository: `C:\\dev\\wnyhomesecurity`
- Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`
- Standing campaign relationship: `DASHBOARD-CAMPAIGN-001` is planning/task-creation authority only and does not itself authorize this runtime edit.

## 2. Task

- ID: `BAILEY-HA-CAPABILITY-RECONCILE-001`
- Name: Bailey smoke/fire semantic-source correction and contact-sensor registry reconciliation
- Status: PROMPT-CREATED / operator authorized; Codex must add the missing ACTIVE MTR record before implementation under CODEX_EXECUTION_STANDARD_REV01 prompt-created-task authority
- Category: RUNTIME
- Primary workstream: Automation System
- Related workstreams: Dashboard / Interactive Experience System; Runtime System; Project Governance

## 3. Read mode

READ MODE: TARGETED

Search exact task IDs, headings, entity IDs, and target paths first. Read only the minimum authority and source ranges required.

## 4. Objective

Correct Bailey's repository-controlled smoke/fire semantic aggregate to use the three actual currently registered smoke entities, and reconcile the Bailey contact-sensor inventory against the operator-provided 2026-10-06 Home Assistant registry export so the later dashboard prototype is built from truthful semantic sources.

This task must not implement the new dashboard.

## 5. Authorization and required precheck

Before edits:

1. Confirm branch is `task/bailey-ha-capability-reconcile-001`.
2. Confirm draft PR for this task is the only PR to continue.
3. Confirm `main` contains merged PR #594 / commit `e804eac2d02ae5bbb8467f303e50d1f14c4693c5`.
4. Confirm Primary Workstream `Automation System` exactly matches OPS004.
5. Confirm the controlling context remains `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.
6. Confirm no existing MTR record with this exact task ID already conflicts. If absent, add only this task record as ACTIVE before implementation, using the bounded scope in this work order.
7. Stop if any requested runtime/dashboard expansion is required beyond the exact files below.

## 6. Required authority / owner documents

Read only applicable sections of:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/step-current.md`
- exact `BAILEY-HA-CAPABILITY-RECONCILE-001` MTR record after Codex creates it if absent
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- applicable OPS004 Automation System routing
- `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`
- `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md`
- `docs/home-assistant/bklf/inventory/sensor-register.md`
- target range in `home-assistant/bklf/packages/bklf_security.yaml`

Dashboard visual standards are reference context only; no dashboard implementation is authorized.

## 7. Operator-approved Owner Routing Matrix

| Approved concept | Canonical owner | Exact target | Behavior / section | Action | Reason | Alternate-owner exclusion | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Correct smoke/fire semantic source IDs | Automation System / BKLF security package | `home-assistant/bklf/packages/bklf_security.yaml` | `BKLF Smoke Fire Attention` template only | MODIFY | This package owns Bailey semantic security/safety aggregation | Dashboard files must consume, not redefine, semantic source logic | NO | HIGH |
| Reconcile current contact-sensor mapping evidence | HA evidence / BKLF sensor inventory | `docs/home-assistant/bklf/inventory/sensor-register.md` | Door/Window Contacts and smoke evidence | MODIFY | This register owns sanitized sensor mapping/evidence | Do not use dashboard YAML or raw registry files as durable customer mapping authority | NO | HIGH |
| Lifecycle bookkeeping | Project Governance | `docs/system/master-task-register.md` | Exact task record only | MODIFY | Required task lifecycle/evidence | No adjacent task edits | NO | HIGH |

## 8. Required work

### A. Smoke/fire aggregate correction

In `home-assistant/bklf/packages/bklf_security.yaml`, modify only the `BKLF Smoke Fire Attention` semantic aggregate so its source list is exactly:

- `binary_sensor.network_closet_smoke_01`
- `binary_sensor.viewing_room_smoke_02`
- `binary_sensor.west_hallway_jog_smoke_03`

Preserve fail-safe behavior: any source not exactly `off` must continue to produce attention. Do not weaken unknown/unavailable handling.

Update the adjacent status note only as needed to remove obsolete wording that claims expected `smoke_01_smoke`-style entities or otherwise conflicts with the current source list. Do not create new notification/response claims.

### B. Contact-sensor reconciliation

Update `docs/home-assistant/bklf/inventory/sensor-register.md` from the operator-provided 2026-10-06 registry evidence promoted into this work order.

Current registry evidence:

| Physical registry device name | Registry area | Enabled opening entity | Reconciliation posture |
| --- | --- | --- | --- |
| C01 South Entrance Door | south_wall | `binary_sensor.c01_south_entrance_door` | confirmed registry mapping; physical contact is being restored onsite |
| C02 South Wall Window 2 | south_wall | `binary_sensor.east_door_left` | NAME/AREA CONFLICT — entity indicates East Door Left; physical mapping must remain unresolved until onsite verification |
| C03 South Wall Window 3 | south_wall | `binary_sensor.c03_east_door_right` | NAME/AREA CONFLICT — entity indicates East Door Right; physical mapping must remain unresolved until onsite verification |
| C04 South Wall Window 4 | south_wall | `binary_sensor.c04_west_door` | NAME/AREA CONFLICT — entity indicates West Door; physical mapping must remain unresolved until onsite verification |
| C05 South Wall Window 5 | south_wall | `binary_sensor.c05_north_wall_window_1` | NAME/AREA CONFLICT — entity indicates North Wall Window 1; physical mapping must remain unresolved until onsite verification |
| C06 North Wall Window 2 | north_wall | `binary_sensor.c06_north_wall_window_2` | registry-consistent |
| C07 North Wall Window 3 | north_wall | `binary_sensor.c07_north_wall_window_3` | registry-consistent |
| C08 North Wall Window 4 | north_wall | `binary_sensor.c08_north_wall_window_4` | registry-consistent |
| C09 North Wall Window 5 | north_wall | `binary_sensor.c09_north_wall_window_5` | current registry shows enabled; supersedes stale inventory statement that C09 was removed, but does not prove live state |
| C10 South Wall Window 1 | south_wall | `binary_sensor.c10_south_wall_window_1` | registry-consistent |
| C11 South Wall Window 2 | south_wall | `binary_sensor.c11_south_wall_window_2` | registry-consistent |
| C12 South Wall Window 3 | south_wall | `binary_sensor.c12_south_wall_window_3` | current registry shows enabled; supersedes stale inventory statement that C12 was removed, but does not prove live state |
| C13 South Wall Window 4 | south_wall | `binary_sensor.c13_south_wall_window_4` | current registry shows enabled; live physical state still requires validation |
| C14 South Wall Window 5 | south_wall | `binary_sensor.c14_south_wall_window_5` | current registry shows enabled; live physical state still requires validation |

Requirements:

1. Preserve the distinction between registry evidence and physical/live proof.
2. Do not silently assert physical placement where device name/area and entity naming conflict.
3. Replace stale statements that C09 or C12 are removed with truthful current registry posture.
4. Record that all C01-C14 device records have an enabled opening entity in the 2026-10-06 registry snapshot.
5. Keep diagnostic battery/firmware/RSSI/LQI material classified as support/service detail.
6. Do not expand `BKLF Windows Attention`, `BKLF Doors Attention`, notification rules, or dashboard bindings in this task. That requires separately verified physical mapping and/or a later bounded task.

### C. Smoke detector inventory reconciliation

In the same sensor register, replace the obsolete expected service entity names with the actual registry entities:

- SMOKE 01 Network Closet -> `binary_sensor.network_closet_smoke_01`
- SMOKE 02 Viewing Room -> `binary_sensor.viewing_room_smoke_02`
- SMOKE 03 West Hallway Jog -> `binary_sensor.west_hallway_jog_smoke_03`

State explicitly that registry presence is not live alarm-state proof.

### D. Task lifecycle

If the exact task record is absent at start, add only `BAILEY-HA-CAPABILITY-RECONCILE-001` to the MTR as ACTIVE using this work order as the bounded source of truth. When validation and exit criteria pass, update only that exact record to DONE and record draft PR evidence. Do not modify adjacent task records.

## 9. Allowed scope / target files

Only these implementation/lifecycle files may change:

1. `home-assistant/bklf/packages/bklf_security.yaml`
2. `docs/home-assistant/bklf/inventory/sensor-register.md`
3. `docs/system/master-task-register.md`

The controlling work-order file is reference-only during Codex implementation unless ChatGPT issues a revised work order.

## 10. Reference-only inputs

- The operator-provided 2026-10-06 Bailey registry export summarized/promoted in Section 8.
- `docs/home-assistant/bklf/inventory/last-known-live-state-summary.md`
- `docs/home-assistant/bklf/inventory/dashboard-inventory.md`
- `docs/home-assistant/bklf/inventory/runtime-notes.md`
- existing dashboard YAML
- existing notification package

Do not commit raw registry exports.

## 11. Forbidden scope / protected systems

Do not:

- access or mutate the live Bailey Home Assistant instance;
- reload/restart Home Assistant;
- modify Z-Wave or Zigbee devices;
- exclude the South HC620;
- edit `.storage`, registry/cache/database/history/trace files;
- commit raw registry exports, backups, secrets, credentials, private URLs, lock codes, or customer-private evidence;
- change notification routing;
- add/remove contact sensors from live semantic aggregates;
- change Close/Arm behavior;
- modify dashboard YAML;
- implement the next-generation dashboard;
- change camera, doorbell, lock, relay, lighting, smoke notification, or response behavior beyond the exact smoke aggregate source-ID correction;
- modify website, CRM, payment, scheduling, Cloudflare, dependencies, or unrelated repo surfaces;
- merge the PR.

## 12. Change posture / version

Surgical corrective edit. Preserve existing architecture. No destructive redesign. No new semantic owner is created.

## 13. Validation

Tier: protected Home Assistant source / evidence documentation.

Required checks:

1. Exact three-file implementation/lifecycle allowlist.
2. No deleted files.
3. `git diff --check` for the implementation commit.
4. YAML parse `home-assistant/bklf/packages/bklf_security.yaml` with safe YAML parser.
5. Verify zero references in `bklf_security.yaml` to:
   - `binary_sensor.smoke_01_smoke`
   - `binary_sensor.smoke_02_smoke`
   - `binary_sensor.smoke_03_smoke`
6. Verify exactly one source reference each to:
   - `binary_sensor.network_closet_smoke_01`
   - `binary_sensor.viewing_room_smoke_02`
   - `binary_sensor.west_hallway_jog_smoke_03`
   within the smoke aggregate source list, unless comments/attributes make exact count unsuitable; report actual count transparently.
7. Verify fail-safe non-`off` attention semantics remain.
8. Verify sensor register contains C01-C14 current registry mapping rows and marks C02-C05 naming/area conflicts unresolved rather than inventing placement.
9. Verify sensor register no longer states C09 or C12 were removed.
10. Verify raw export/private identifiers were not committed.
11. Verify no dashboard or notification file changed.
12. Use repository-native HA validation only if available and safe/non-live. If not available, state that clearly.
13. `npm run build` is a governed skip because no website/application source changes.

## 14. Git / delivery

- Continue branch: `task/bailey-ha-capability-reconcile-001`
- Continue the existing draft PR created for this task.
- One implementation commit or a minimal coherent commit sequence.
- Push branch.
- Do not merge.
- Do not mark ready for review unless explicitly instructed by operator.

## 15. Required closeout / RSI

Report:

- exact files changed;
- exact smoke entity substitution;
- contact-sensor reconciliation summary;
- unresolved physical mappings;
- validation evidence;
- confirmation that live HA was not mutated;
- confirmation no raw registry evidence was committed;
- PR URL/state;
- merge/deployment not performed;
- concise Context Efficiency / Token Utilization / RSI report required by the current execution standard when material friction is observed.

## 16. Stop conditions

Stop and report before editing outside scope if:

- an additional implementation file is required;
- any smoke entity in the promoted evidence cannot be confirmed in repo/context;
- correcting the smoke aggregate requires notification or dashboard changes;
- contact placement would require guessing from conflicting device/entity names;
- C02-C05 physical placement must be asserted without onsite evidence;
- C09/C12 live state must be asserted from registry presence alone;
- a new helper/entity/template is required;
- authority/workstream/context conflict is found;
- safe YAML validation cannot be performed after changes.

## 17. Exit criteria

Repository-side task is complete only when:

- smoke aggregate uses the three promoted actual registry entities;
- old smoke source IDs are gone from the target package;
- fail-safe attention semantics remain;
- sensor register truthfully reconciles C01-C14 registry evidence and unresolved conflicts;
- smoke inventory uses current registry entity IDs;
- all validations pass or governed skips are explicitly documented;
- exact MTR task record is DONE;
- draft PR contains only authorized scope.

Live Home Assistant deployment, live smoke testing, contact physical mapping, and dashboard prototype work remain separate operator-controlled follow-up.
