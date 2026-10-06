# BAILEY-HA-SOUTH-LOCK-RETIRE-001 — Bailey South Lock Retirement and Dashboard Truth Cleanup

**Work Order Revision:** REV01  
**Status:** OPERATOR AUTHORIZED  
**Category:** RUNTIME  
**Primary Workstream:** Automation System  
**Related Workstreams:** Dashboard / Interactive Experience System; Runtime System; Project Governance  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01  
**Standing Campaign:** DASHBOARD-CAMPAIGN-001  
**Repository:** buffalonychris/wnyhomesecurity  
**Local Repo:** C:\\dev\\wnyhomesecurity  
**Branch:** task/bailey-ha-south-lock-retire-001  
**Delivery:** Continue this same branch and same draft PR created for this task. Do not create a second branch or PR.

READ MODE: TARGETED

Search exact task IDs, entity IDs, helpers, headings, and target paths first. Load only the authority and owner sections needed for this task. Do not broadly reread BKLF history, the full Master Task Register, superseded dashboard standards, or unrelated runtime documentation.

## 1. Objective

Retire the physically obsolete South Wall Kwikset Home Connect 620 lock from the Bailey Home Assistant repository configuration while preserving the South Entrance as an actively monitored entrance and preserving all unrelated Bailey security, automation, notification, camera, doorbell, lighting, and East/Bailey Double Doors lock behavior.

The operator has confirmed that the replacement South door is incompatible with the Kwikset HC620 and the lock is permanently removed from the intended Bailey infrastructure.

Known retired device:
- Customer/site: BK Lewis Funeral Home — Bailey
- Device: Kwikset Home Connect 620 Connected Smart Lock / HC620
- Area/location: South Wall / South Entrance
- Entity: `lock.south_wall_home_connect_620_connected_smart_lock`
- Home Assistant device ID observed in operator evidence: `b447c85e4ab7dc3a694466a383503efd`

The future South Entrance mag-lock project is explicitly out of scope.

## 2. Authorization and required precheck

Before editing:

1. Confirm this work order is `OPERATOR AUTHORIZED`.
2. Confirm the exact `BAILEY-HA-SOUTH-LOCK-RETIRE-001` Master Task Register record is `ACTIVE`.
3. Confirm `DASHBOARD-CAMPAIGN-001` remains `ACTIVE`; use it only as standing dashboard campaign authority, not as implementation authority.
4. Confirm current operational context remains `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.
5. Confirm the working branch is `task/bailey-ha-south-lock-retire-001` and the existing draft PR belongs only to this task.
6. Confirm the branch started from main commit `3127352a1e1ede6d2d8bfed3e6fafabbb5214edd` or is safely rebased/updated to a later main without losing this task definition.
7. Confirm no raw Home Assistant backup, registry export, `secrets.yaml`, auth data, database, logs, traces, private URLs, lock codes, credentials, or customer-private raw evidence will be committed.
8. Search the exact retired entity and South-lock helper/entity prefixes in the four target YAML files before editing.
9. If repository source differs materially from the operator-approved scope below, STOP and report the conflict rather than inferring a new implementation.

## 3. Required authority and owner documents

Read only the applicable sections of:

- `/docs/system/step-current.md`
- exact `BAILEY-HA-SOUTH-LOCK-RETIRE-001` block in `/docs/system/master-task-register.md`
- exact `DASHBOARD-CAMPAIGN-001` block in `/docs/system/master-task-register.md`
- `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `/docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `/docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `/docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`
- `/docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
- `/docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
- `/docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
- `/docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md`

Targeted current BKLF evidence may be read from:
- `docs/home-assistant/bklf/inventory/last-known-live-state-summary.md`
- `docs/home-assistant/bklf/inventory/lock-access-register.md`
- `docs/home-assistant/bklf/inventory/runtime-notes.md`
- `docs/home-assistant/bklf/inventory/dashboard-inventory.md`

These evidence files are reference-only in this task unless a later work-order revision explicitly adds them to the write allowlist.

## 4. Operator-approved Owner Routing Matrix

| Approved concept | Canonical owner | Exact target | Section / behavior | Action | Reason | Alternate-owner exclusion | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bailey close/arm and secure-state logic must no longer depend on the retired South HC620 | AUTOMATION001 + bounded customer implementation | `home-assistant/bklf/packages/bklf_security.yaml` | Native HA script/template/security logic | MODIFY | This is Home Assistant-native customer automation/runtime behavior | Dashboard standards do not own automation execution | NO | HIGH |
| South-lock retry, jam, battery, secure-failure helpers/notifications must be removed while East-lock and South-door alerts remain | AUTOMATION001 + bounded customer implementation | `home-assistant/bklf/packages/bklf_notifications.yaml` | Native HA automations/helpers/notifications | MODIFY | Retired hardware-specific behavior is no longer valid | Dashboard standards only govern presentation | NO | HIGH |
| BKLF Main must stop presenting the retired lock as installed capability | INSTALL006 + DASHBOARD001; DESIGN001 constrains local presentation | `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml` | Capability visibility, customer-safe state/action, local reflow | MODIFY | Not-installed capabilities must not appear as live customer functions | Full dashboard migration is a separate task | NO | HIGH |
| BKLF Desktop must stop presenting the retired lock as installed capability | INSTALL006 + DASHBOARD001; DESIGN001 constrains local presentation | `home-assistant/bklf/dashboards/bklf-desktop-dashboard.yaml` | Capability visibility, customer-safe state/action, local reflow | MODIFY | Same customer truth requirement as BKLF Main | Full responsive consolidation is deferred | NO | HIGH |
| Raw backup/registry evidence remains transient and non-commit-ready | HA-BACKUP001 REV02 | Operator-supplied evidence only | Evidence handling | REFERENCE ONLY | Raw HA evidence is not repository-safe implementation content | Do not copy raw backup/registry material into repo | NO | HIGH |

## 5. Required work

### A. `home-assistant/bklf/packages/bklf_security.yaml`

Modify only the logic that depends on the retired South HC620.

Required outcome:
- Remove the South HC620 from any `lock.lock`, `lock.unlock`, wait, readiness, secure-state, or availability dependency.
- Preserve `lock.east_wall_bailey_double_doors` as the remaining installed lock requirement wherever the current Bailey workflow requires it.
- Preserve `binary_sensor.c01_south_entrance_door` as a South Entrance opening/closing security prerequisite.
- Preserve unrelated exterior contacts, motion, cameras, alarm-output checks, building-mode behavior, and arm/close sequencing.
- A closed South door must still matter.
- A missing South electronic lock must no longer prevent the building from reaching the intended closed/armed state.
- Do not weaken unrelated safety prerequisites to make the workflow pass.
- Do not introduce any future mag-lock entity, helper, placeholder, or assumed capability.

### B. `home-assistant/bklf/packages/bklf_notifications.yaml`

Remove only retired-HC620-specific behavior and branches.

Required outcome:
- Remove South HC620-specific battery-low / battery-restored behavior.
- Remove South HC620-specific jam/recovery branches while preserving East/Bailey Double Doors lock jam behavior.
- Remove South HC620 retry/lock loops in secure-building workflows.
- Remove South-lock secure-failure behavior and its recovery behavior.
- Remove helpers that exist only for the retired South lock, including when present:
  - `input_boolean.bklf_south_lock_jam_alert_active`
  - `input_boolean.bklf_south_lock_battery_alert_active`
  - `input_boolean.bklf_south_lock_secure_failure_active`
- Preserve South Entrance door-open alerting based on the South door contact.
- Preserve unrelated notifications and disabled scaffolds unless directly coupled to the retired South lock.
- Preserve East/Bailey Double Doors lock notification behavior.

### C. `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml`

Remove or rewrite all customer-facing presentation that treats the South HC620 as installed capability.

Required outcome:
- Remove South Entrance Lock/Unlock controls.
- Remove South-lock status, jam, battery, failure, history/logbook references, and more-info actions.
- Remove/rewrite wording such as `Both entrances locked`, `both locks`, `Door is closed and locked`, or equivalent where it relies on the retired South lock.
- Rewrite combined readiness/security calculations around actual installed capabilities.
- South Entrance remains visible through its real installed capability: door contact, doorbell, camera, entrance light, and valid activity/security state.
- Do not show the retired lock as `Unavailable`, `Offline`, `Coming Soon`, `Not Installed`, or as a future mag-lock placeholder.
- Preserve East/Bailey Double Doors lock controls/status.
- Preserve existing dashboard architecture and visual structure except for bounded local reflow required by removal.

### D. `home-assistant/bklf/dashboards/bklf-desktop-dashboard.yaml`

Apply the same truth-cleanup requirements as BKLF Main.

Required outcome:
- No South HC620 control, state, failure, activity, history, or capability presentation remains.
- Combined lock wording/status becomes accurate for the actual installed East/Bailey lock.
- South Entrance remains a monitored entrance with door/contact, doorbell, camera, light, and valid activity/security functions.
- Preserve unrelated functionality.
- Do not perform the full current WNYHS responsive dashboard migration in this task.

### E. Master Task Register lifecycle

Codex may update only the `BAILEY-HA-SOUTH-LOCK-RETIRE-001` record in `docs/system/master-task-register.md` for truthful task lifecycle and draft-PR evidence.

Do not alter adjacent task priorities, campaign status, or historical records.

## 6. Allowed scope / target files

Codex may modify only:

- `home-assistant/bklf/packages/bklf_security.yaml`
- `home-assistant/bklf/packages/bklf_notifications.yaml`
- `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml`
- `home-assistant/bklf/dashboards/bklf-desktop-dashboard.yaml`
- `docs/system/master-task-register.md` — only the exact task record for lifecycle/evidence

This work order file is controlling input and should not be modified during implementation unless the operator issues a revision.

## 7. Reference-only inputs

- Current canonical dashboard standards listed above.
- AUTOMATION001.
- HA-BACKUP001 REV02.
- Current BKLF inventory/evidence docs listed above.
- Operator-confirmed physical change: South Kwikset HC620 is no longer compatible with the replaced South door and is being retired.
- Operator-provided October 2026 Home Assistant backup/audit evidence may be used transiently if supplied to Codex, but raw evidence must not enter Git history.

## 8. Forbidden scope / protected systems

Forbidden:

- No live Home Assistant access or mutation by Codex.
- No Z-Wave exclusion/removal by Codex.
- No Home Assistant restart/reload by Codex.
- No direct edit of `.storage/core.device_registry`, `.storage/core.entity_registry`, Z-Wave JS cache, database, restore state, traces, or history.
- No raw backup, registry export, secrets, auth, token, password, lock code, private URL, customer-private data, log, database, or trace committed.
- No future South mag-lock implementation or placeholder.
- No full Bailey dashboard redesign or migration.
- No new Light/Dark/Auto implementation.
- No Compact/Default/Large implementation.
- No user/profile switcher implementation.
- No canonical-navigation migration.
- No BKLF Main/Desktop consolidation.
- No theme/token overhaul.
- No unrelated automation, notification, helper, entity, integration, device, camera, doorbell, light, sensor, or lock change.
- No East/Bailey Double Doors lock removal or weakening.
- No Cloudflare, network, DNS, environment, dependency, package-lock, website, route, CRM/HubSpot, Stripe/payment, scheduling, email, API, quote, funnel, public copy, claim, or deployment change.
- No merge or auto-merge.

Protected-system rule:
Bailey Home Assistant is a customer protected runtime. This work order authorizes repository-side preparation of the exact bounded change only. Live application remains an operator-controlled post-merge step.

## 9. Additive/destructive posture and version rule

This task is surgical retirement of obsolete hardware-specific references.

Destructive removal is authorized only for configuration/presentation branches whose sole purpose is the retired South HC620. Preserve all unrelated Bailey logic and customer capabilities.

No application/site version bump is required.

Do not delete historical governance/evidence documents.

## 10. Validation

**Tier:** Protected-system repository preparation + Home Assistant YAML/source validation.

Required checks:

1. Changed-file audit: only the five allowed implementation/lifecycle files may differ.
2. `git diff --check`.
3. No unexpected deletes.
4. Exact retired-entity scan across the four target YAML files:
   - `lock.south_wall_home_connect_620_connected_smart_lock`
   - `south_wall_home_connect_620_connected_smart_lock`
   - `bklf_south_lock_`
5. Customer wording scan in both dashboards for stale South-lock phrases, including:
   - `Both entrances locked`
   - `both locks`
   - `South Entrance Lock`
   - `Lock needs review` where the phrase is specifically driven by the retired South lock
6. Confirm these preserved entities remain referenced where appropriate:
   - `binary_sensor.c01_south_entrance_door`
   - `lock.east_wall_bailey_double_doors`
7. Confirm no future mag-lock placeholder or invented entity was introduced.
8. Confirm no raw entity IDs are newly exposed to customer-facing text; technical YAML bindings are allowed internally.
9. Validate YAML syntax with an already available repository/system parser. Do not install dependencies merely for validation. If no safe YAML parser is available, report that limitation and STOP before claiming syntax validation.
10. If repository-native Home Assistant configuration validation tooling exists and does not require live credentials or mutation, use it. Otherwise do not fabricate a Home Assistant runtime validation result.
11. No `npm run build` is required because no website/application source is changed.
12. Protected-system scope scan: confirm no Cloudflare, CRM, payment, scheduling, email, API, env, secret, dependency, or unrelated HA files changed.

Required manual runtime acceptance is **not performed by Codex** and must be listed in closeout:
- operator has a current full Bailey backup;
- deploy approved YAML only after PR review/merge;
- run Home Assistant configuration validation before restart/reload;
- verify South contact closed/open behavior;
- verify East lock behavior;
- verify Close/Arm succeeds when legitimate conditions are satisfied;
- verify Close/Arm still blocks on an open South door;
- verify South doorbell/camera/light remain functional;
- verify both customer dashboards contain no South electronic-lock capability;
- only after successful logic validation, perform supported Z-Wave exclusion/removal of HC620;
- verify generated/built-in HA surfaces no longer present the retired device;
- perform final Close/Arm test.

## 11. Git / delivery

- Continue branch: `task/bailey-ha-south-lock-retire-001`.
- Continue the existing draft PR created for this task. Do not create a second PR.
- One task only.
- Commit only authorized files.
- Push the branch.
- Keep the PR in draft until operator review.
- Do not merge, mark ready, enable auto-merge, or deploy.

Suggested implementation commit message:

`BAILEY-HA-SOUTH-LOCK-RETIRE-001: retire South HC620 dependencies`

## 12. Required closeout

Report:

- repository;
- branch;
- commit SHA;
- draft PR URL/number;
- exact files modified;
- exact South-lock dependencies removed;
- preserved South Entrance capabilities;
- preserved East/Bailey lock behavior;
- validation commands/results;
- YAML parser/runtime-validation limitation if any;
- no raw backup/secrets/private evidence committed;
- no live HA/Z-Wave mutation performed;
- no full dashboard migration performed;
- manual runtime deployment/acceptance checklist;
- unresolved risks or discrepancies;
- no-merge confirmation.

Include the canonical Token Utilization / Recursive Self Improvement report required by `CODEX_EXECUTION_STANDARD_REV01.md`.

## 13. Stop conditions

STOP and request operator/dispatcher revision if:

- the active task record or current context does not authorize this exact work;
- target files materially differ from the audited Bailey configuration;
- removing the HC620 would require weakening an unrelated security prerequisite;
- the South door contact appears to be physically removed or no longer represents the replacement South door;
- the East/Bailey lock mapping is ambiguous;
- an additional file must be modified to achieve the required behavior;
- dashboard cleanup would require a full architecture migration;
- a new helper/entity/device/integration is needed;
- secrets/private evidence would need to be read or committed;
- YAML/configuration validity cannot be established safely;
- a conflict with higher authority or a canonical owner is discovered.

## 14. Exit criteria

Repository implementation is complete only when:

1. The retired HC620 no longer participates in active Bailey package logic in the two authorized package files.
2. The retired HC620 no longer appears as a customer capability in either authorized dashboard file.
3. South Entrance door/contact monitoring remains intact.
4. South Entrance doorbell, camera, light, and valid activity/security presentation remain intact.
5. East/Bailey Double Doors lock behavior remains intact.
6. No future mag-lock capability was invented.
7. No unrelated Bailey behavior was changed.
8. Validation passes or the task stops with an explicit validation blocker.
9. Draft PR evidence is recorded in the task record.
10. No live Home Assistant or Z-Wave mutation occurred through Codex.
11. No merge occurred.
12. Closeout provides the exact operator runtime acceptance sequence.

The task may become `DONE` after repository execution/validation and required draft-PR closeout are complete. Live Bailey deployment, Z-Wave exclusion, and final field validation remain separate publication/runtime evidence and must not be inferred from repository completion.
