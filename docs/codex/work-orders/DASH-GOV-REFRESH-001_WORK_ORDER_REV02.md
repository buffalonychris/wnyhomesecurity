# DASH-GOV-REFRESH-001 — Dashboard Governance Consolidation Correction

**Revision:** REV02

**Supersedes for execution:** `DASH-GOV-REFRESH-001_WORK_ORDER_REV01.md`

**Status:** OPERATOR AUTHORIZED — SAME TASK / SAME BRANCH / SAME PR CORRECTION

**Category:** GOV

**Primary Workstream:** Dashboard / Interactive Experience System

**Related Workstreams:** Project Governance; Visual System; Home Assistant Platform; Automation System

**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

READ MODE: TARGETED

This is a correction pass on the existing branch `task/dash-gov-refresh-001` and existing draft PR #579. Do not create a new branch or PR. Do not repeat broad dashboard-governance discovery. Use the current branch's REV02 owner drafts as the source material for the already-promoted 2026-09-22 decisions, then consolidate them as directed below.

## 1. Operator decision

The operator approves this final dashboard governance shape:

1. **Three canonical dashboard standards**
   - `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` = Dashboard Architecture & Functional Behavior.
   - `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` = Dashboard Visual & Component Standard.
   - `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` = Dashboard Delivery, Binding & Validation Standard.
2. **One thin governance map**
   - `WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md` = routing, lineage, current revisions, unresolved conflicts only.
3. Retire overlapping active dashboard owners where their durable rules are absorbed into the three canonical standards.
4. Keep `DASHBOARD-CAMPAIGN-001` ACTIVE and explicitly non-implementing.
5. Keep PR #578 deferred and unmerged.
6. Rewrite the prepared Peckham HTML work order to use the consolidated owner model and a strict low-context read budget.
7. Standardize a reusable Home Assistant registry-export workflow for every WNYHS install so the operator can run one script on a Home Assistant instance, provide the resulting files to ChatGPT/Codex, and have them consumed under a known evidence/sanitization contract.

## 2. Context-efficiency mandate

This correction exists partly to prevent future 40–50% context consumption.

For this run:
- Do not re-read all historical dashboard owners in full.
- Do not load the full Master Task Register.
- Do not inspect PR #578 beyond the already-established deferred status unless a direct conflict appears.
- Do not reload BKLF history.
- Do not perform broad repository searches after exact targets are resolved.
- Read only the minimum sections required for the files changed by this correction.

For future dashboard implementation work, the thin governance map must make the normal routing obvious:

- Functional behavior / information architecture / permissions / states -> INSTALL006.
- Visual appearance / components / tokens / typography -> DESIGN001.
- Customer-specific delivery / data binding / responsive targets / deterministic prototype / validation -> DASHBOARD001.
- Governance routing / lineage only -> Dashboard Governance Master.

The governance map is not a normal implementation read.

## 3. Final canonical owner responsibilities

### 3.1 INSTALL006 — Dashboard Architecture & Functional Behavior

Make `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` the canonical owner for what dashboards mean and how they behave.

It must own, at minimum:
- dashboard classes and audience separation;
- canonical customer navigation;
- customer vs technician presentation boundary;
- property/user context and property switching;
- authorization/permission presentation requirements without redefining auth runtime;
- canonical customer status meanings and priority;
- Activity Center behavioral model;
- Alert/Notification Center behavioral model where presentation is involved, while notification routing remains with its narrower owner;
- Current vs Recent vs Resolved semantics;
- high-impact control UX and confirmation/state-verification behavior;
- command pending / success / failure / result-unknown behavior;
- offline / stale / degraded / unavailable / unknown behavior;
- local-vs-remote availability distinction;
- installed / unavailable / not-installed visibility rules;
- capability and health semantics;
- semantic dashboard data-contract expectations;
- raw Home Assistant / technician evidence separation;
- footer functional composition and canonical navigation behavior;
- deterministic visual-approval proof requirement at the architecture level.

It should contain minimal pixel/token detail. Where exact visual geometry is needed, point to DESIGN001.

### 3.2 DESIGN001 — Dashboard Visual & Component Standard

Make `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` the canonical visual owner.

It must own, at minimum:
- dark/light surface roles;
- WNYHS gold identity treatment;
- blue interaction role;
- five semantic status-value text colors and exclusivity;
- red `• LIVE` media-only rule;
- Inter / Atkinson Hyperlegible / System typography and exact type tokens;
- tile geometry, padding, radius, borders and spacing tokens;
- standardized dark circular tile-icon container, icon size and placement;
- gold title, neutral subtitle, governed divider;
- governed recessed/chiseled right-justified Status Value Field;
- single customer action-button family;
- 48 px Compact, 48 px Default, 56 px Large action heights;
- width-only button variation and reflow rules;
- selected/depressed, pending, hover/focus and disabled visual states;
- 16:9 governed media region and unavailable-media footprint;
- header and footer visual treatment;
- single-line `WNY HOME SECURITY` treatment where width permits;
- Light / Dark / Auto visual parity;
- accessibility presentation, focus and reduced-motion rules;
- restrained borders/glows/depth;
- exact visual tokens necessary for deterministic HTML/browser rendering.

Do not duplicate functional permission, command-authority, notification-routing, or HA binding rules here.

### 3.3 DASHBOARD001 — Dashboard Delivery, Binding & Validation Standard

Refocus `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` into the canonical delivery owner.

It must own, at minimum:
- Compact / Default / Large exact customer-facing labels;
- Compact 4x3, Default 3x2, Large 2x2 desktop composition targets where viewport supports them;
- Default = Inter;
- phone/tablet/desktop/wall-display delivery expectations;
- equal comparable-tile geometry;
- responsive reflow;
- customer-specific capability assembly;
- entity/device/area evidence binding;
- fixture rules;
- distinction between registry-known capability, simulated state, and authoritative live state;
- deterministic HTML/CSS approval prototypes;
- browser-render screenshots as approval evidence;
- Home Assistant / Companion / browser delivery targets;
- customer-specific binding and acceptance evidence;
- validation contract;
- no raw entity IDs in customer-facing UI;
- no invented entity location/capability/state;
- dashboard registration/assignment/rollback/handoff relationship, without authorizing runtime changes itself.

It should reference INSTALL006 for behavior and DESIGN001 for visual tokens/components rather than restating them.

## 4. Thin dashboard governance map

Reduce `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md` to a thin routing/lineage document.

Target content:
- purpose and non-implementation boundary;
- four-row owner map: INSTALL006 / DESIGN001 / DASHBOARD001 / this governance map;
- current revisions and predecessors;
- narrow-owner references that remain outside the three canonical standards (automation, notification routing, service/support, HA backup extraction);
- resolved 2026-09-22 decision summary only as pointers, not duplicated full rules;
- PR #578 deferred lineage;
- DASHBOARD-CAMPAIGN-001 relationship;
- unresolved conflicts/gaps only;
- explicit instruction that normal dashboard implementation tasks should not load this map unless routing/authority is ambiguous.

Do not turn the governance map into a fourth full standard.

## 5. Retire overlapping dashboard owners

### 5.1 Customer Dashboard Design Standard

The unmerged branch-created file:
`docs/design-system/customer-dashboard-design-standard-rev02.md`

must not remain an active canonical owner.

Absorb its valid product concept, hierarchy, customer-first and customer/technician separation rules into INSTALL006 and/or DESIGN001 as appropriate.

Then:
- remove the unmerged REV02 file from this PR; and
- update `docs/design-system/customer-dashboard-design-standard-rev01.md` to `SUPERSEDED`, pointing to INSTALL006 REV02 for architecture/behavior and DESIGN001 REV02 for visual/component rules.

### 5.2 INSTALL007 Theme Readiness

Absorb reusable active theme/readability rules from:
`docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`

into DESIGN001 REV02.

Then mark INSTALL007 REV01 `SUPERSEDED` with successor DESIGN001 REV02. Preserve it for lineage; do not delete it.

### 5.3 Customer Dashboard Philosophy

`docs/design-system/customer-dashboard-philosophy.md` may remain as historical/reference philosophy only, not active implementation authority.

Update its header to make that status explicit and route current dashboard authority to INSTALL006 / DESIGN001 / DASHBOARD001.

Do not copy its old conflicting status taxonomy back into active standards.

## 6. Standardized Home Assistant registry export

The repository already has:
`docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV01.md`

This is the correct narrow owner for safe Home Assistant extraction. Do not place raw-registry extraction rules inside the dashboard standards.

Create:
`docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md`

and mark REV01 SUPERSEDED.

REV02 must preserve all safe-backup rules and add a canonical **WNYHS HA Registry Export** workflow.

### 6.1 Canonical reusable script

Create:
`home-assistant/wnyhs/tools/wnyhs-ha-registry-export.sh`

Purpose:
A read-only operator-run utility for a Home Assistant instance that exports only the registry evidence needed for WNYHS inventory/dashboard planning.

The script must:
- be POSIX-shell compatible where practical;
- require a site/customer slug argument, e.g. `PECKHAM`;
- default the Home Assistant configuration root to `/config`;
- allow an optional config-root override solely for local validation/testing;
- create a timestamped export folder under `/config/wnyhs-export/` by default;
- copy, without modifying the source, these exact registry files when present:
  - `.storage/core.entity_registry`
  - `.storage/core.device_registry`
  - `.storage/core.area_registry`
- optionally copy when present:
  - `.storage/core.floor_registry`
  - `.storage/core.label_registry`
- rename outputs predictably:
  - `<SITE>_ENTITY_REGISTRY.json`
  - `<SITE>_DEVICE_REGISTRY.json`
  - `<SITE>_AREA_REGISTRY.json`
  - `<SITE>_FLOOR_REGISTRY.json` when present
  - `<SITE>_LABEL_REGISTRY.json` when present
  - `<SITE>_HA_EXPORT_MANIFEST.txt`
- include in the manifest: site slug, extraction timestamp, source config root, exported filenames, missing optional registries, and a warning that these are registry snapshots rather than live-state evidence;
- fail clearly if the required entity or device registry is missing;
- never modify Home Assistant registry files;
- never restart Home Assistant;
- never require a Home Assistant access token;
- never read or copy auth, secrets, config entries, cloud data, databases, logs, credentials, keys, tokens, or backup archives.

Path documentation must preserve WNYHS path language:
- Terminal/SSH config root may be `/config`.
- HA File Editor visible root is described as `homeassistant/`, not as a visible `/config` folder.
- Repository paths use the `home-assistant/` prefix.

### 6.2 Operator use contract

HA-BACKUP001 REV02 must define the normal future workflow:

1. Operator runs the canonical script on the customer HA instance.
2. Operator supplies the resulting export files to ChatGPT/Codex as temporary input evidence.
3. Raw exported registry files are **not automatically repo-safe** and must not be committed merely because they came from the approved script.
4. ChatGPT/Codex uses them only under a bounded task/work order.
5. The bounded task produces sanitized, repo-safe derivative registers/fixtures/manifests as authorized.
6. Only sanitized derivative artifacts are committed.
7. Raw export attachments remain transient evidence and must not be copied into repository history.

### 6.3 GPT/Codex registry-consumption contract

HA-BACKUP001 REV02 and DASHBOARD001 REV02 must define how these standard files are interpreted.

At minimum:
- entity registry active records come from `data.entities`;
- deleted entity records are separate evidence and never treated as active installed entities;
- device registry active records come from `data.devices`;
- deleted device records are separate evidence;
- area/floor/label registries provide registry relationships only;
- `disabled_by`, `hidden_by`, entity category, platform, device ID, area ID, original name and customer/user name are evidence fields, not permission to expose raw technical data to customers;
- registry presence proves registration evidence, not current availability or current physical state;
- no current lock/open/closed/motion/leak/camera/live status may be inferred solely from registry files;
- no physical room/window/door location may be invented from generic registry names;
- unresolved mappings remain explicitly unresolved;
- unique IDs, MAC addresses/connections, device identifiers and other raw technical identifiers are retained only when the bounded technical task truly needs them and are omitted from customer-facing output and sanitized repo derivatives by default;
- disabled/deleted/noisy diagnostic entities are classified, not silently promoted to customer capability;
- evidence freshness must be recorded;
- when a dashboard task uses the data, it maps raw registry evidence -> sanitized property/device/entity model -> semantic capability -> customer-safe dashboard fixture/binding;
- unknown never defaults to normal, closed, locked, available, or safe.

### 6.4 Validation of the reusable script

Without touching a live HA system:
- run `sh -n` or equivalent syntax validation;
- use a temporary fake config root containing minimal mock registry files to prove deterministic naming and required/optional-file behavior;
- verify the script does not reference forbidden source paths such as auth, secrets, config entries, databases, logs, or cloud credentials;
- verify no output is committed from the local test run;
- do not add dependencies merely to test the script.

## 7. Rewrite the prepared Peckham HTML work order

Update:
`docs/codex/work-orders/T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md`

Do not execute it.

Replace the broad dashboard read list with a low-context targeted set:

Required normal reads:
- exact current-context/task gate;
- exact `DASHBOARD-CAMPAIGN-001` MTR block;
- exact relevant INSTALL006 REV02 sections;
- exact relevant DESIGN001 REV02 sections;
- exact relevant DASHBOARD001 REV02 sections;
- exact relevant Peckham sanitized binding-register section;
- exact relevant HA-BACKUP001 REV02 registry-consumption section only if raw standard export files are supplied for the task.

Do not normally read:
- Dashboard Governance Master;
- superseded dashboard standards;
- customer-dashboard-design-standard;
- customer-dashboard-philosophy;
- INSTALL007;
- BKLF history;
- PR #578 diff/history;
- full MTR;
- broad catalogs/manifests.

Add an explicit context budget:
- targeted reads only;
- no broad repository discovery after owner paths are known;
- no full owner-file reads unless exact headings cannot resolve the requirement;
- report any full read as a context-budget exception;
- target Context Pressure = LOW.

The work order must continue to require deterministic HTML/browser proof and must not authorize live HA/backend/runtime work.

## 8. Owner Routing Matrix

| Concept | Canonical owner / target | Action | Conflict | Confidence |
| --- | --- | --- | --- | --- |
| Dashboard architecture and functional behavior | `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` | MODIFY / CONSOLIDATE | NO | HIGH |
| Dashboard visual components/tokens/aesthetics | `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` | MODIFY / CONSOLIDATE | NO | HIGH |
| Dashboard delivery/binding/responsive/validation | `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` | MODIFY / CONSOLIDATE | NO | HIGH |
| Dashboard authority routing and lineage | `WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md` | MODIFY / REDUCE | NO | HIGH |
| Customer dashboard design REV02 draft | branch-only unmerged file | REMOVE FROM PR after absorption | NO | HIGH |
| Customer dashboard design REV01 | historical owner | MODIFY header -> SUPERSEDED; route to INSTALL006 + DESIGN001 | NO | HIGH |
| INSTALL007 theme readiness REV01 | historical owner | MODIFY header -> SUPERSEDED; route to DESIGN001 | NO | HIGH |
| Customer dashboard philosophy | reference-only philosophy | MODIFY header/status only | NO | HIGH |
| HA extraction / registry evidence contract | `HA-BACKUP001...REV02.md` | CREATE successor; supersede REV01 | NO | HIGH |
| Reusable HA registry export utility | `home-assistant/wnyhs/tools/wnyhs-ha-registry-export.sh` | CREATE | NO | HIGH |
| Peckham HTML prepared work order | `T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md` | MODIFY, do not execute | NO | HIGH |
| Standing dashboard campaign | MTR exact block | KEEP ACTIVE; update only if needed for truthful correction evidence | NO | HIGH |

## 9. Allowed files

This correction may modify/create only:

- `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV01.md`
- `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV02.md`
- `docs/codex/work-orders/T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md`
- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV01.md`
- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
- `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV01.md`
- `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
- `docs/design-system/customer-dashboard-design-standard-rev01.md`
- remove branch-only `docs/design-system/customer-dashboard-design-standard-rev02.md`
- `docs/design-system/customer-dashboard-philosophy.md`
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
- `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md`
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md`
- `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV01.md`
- `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md`
- `home-assistant/wnyhs/tools/wnyhs-ha-registry-export.sh`
- `docs/system/master-task-register.md` only if required to truthfully update DASH-GOV-REFRESH-001 completion evidence or campaign evidence.

Do not modify application, website, HA customer YAML, package, dependency, runtime, secret, or deployment files.

## 10. Validation

Required:
- exactly three active canonical dashboard standards plus one thin dashboard governance map;
- no active customer-dashboard-design-standard owner;
- INSTALL007 no longer active dashboard authority;
- customer-dashboard-philosophy is reference only;
- no loss of the approved 2026-09-22 granular visual/interaction rules;
- canonical nav, status semantics, Activity/Alert/high-impact/offline behavior routed to INSTALL006;
- component/token rules routed to DESIGN001;
- size/binding/prototype/validation rules routed to DASHBOARD001;
- thin map does not duplicate full standards;
- HA-BACKUP001 REV02 and script define one repeatable export process;
- script exports required entity/device and area evidence, optional floor/label evidence, and no forbidden auth/secret/config-entry/database/log material;
- raw export files are explicitly transient and non-commit-ready;
- registry presence is explicitly not live-state proof;
- prepared Peckham work order uses low-context owner routing and is still unexecuted;
- PR #578 remains deferred and unmerged;
- DASHBOARD-CAMPAIGN-001 remains ACTIVE and non-implementing;
- no conflict markers;
- `sh -n home-assistant/wnyhs/tools/wnyhs-ha-registry-export.sh`;
- local fake-config-root script test;
- `git diff --check`;
- application build remains a governed skip unless an unexpected source/build-config change outside the utility script occurs.

## 11. Git / delivery

Stay on:
`task/dash-gov-refresh-001`

Update existing draft PR:
`#579`

Do not create another branch or PR.

Commit the correction as a new bounded commit on the same branch. Push it. Leave PR #579 draft.

Do not merge or deploy.

## 12. Closeout / RSI

Report:
- correction commit SHA;
- updated PR #579 URL;
- exact files changed/created/removed from the PR;
- final three-owner + thin-map routing;
- HA registry export script path and operator invocation syntax;
- exact export filenames;
- script validation result;
- confirmation raw exports are transient/not committed;
- confirmation Peckham HTML task remains unexecuted;
- confirmation PR #578 remains deferred/unmerged;
- protected systems untouched;
- no merge/deploy;
- Token Utilization / RSI Report.

Context report must explicitly state:
- number of owner files read;
- any full-file reads and why;
- broad searches, if any;
- context pressure;
- whether the LOW-context target was met.

## 13. Stop conditions

STOP if:
- the three-owner consolidation would discard an approved 2026-09-22 rule rather than relocate it;
- a newer merged canonical owner exists;
- HA-BACKUP001 is superseded elsewhere;
- safe registry export requires reading auth/config-entry/secret/database/log material;
- script portability would require a new dependency;
- scope expands into live HA/runtime/customer dashboard implementation;
- an exact owner conflict cannot be resolved inside this approved consolidation.

## 14. Exit criteria

Complete only when:
- PR #579 contains three canonical active dashboard standards plus one thin map;
- overlapping dashboard owners are correctly superseded/reference-only;
- all approved granular dashboard decisions remain durable in the correct owner;
- HA-BACKUP001 REV02 plus the reusable export script establish a repeatable future-install evidence workflow;
- the prepared Peckham HTML work order is low-context and still unexecuted;
- validation passes;
- DASHBOARD-CAMPAIGN-001 remains ACTIVE;
- PR #578 remains deferred;
- PR #579 remains draft;
- no live/protected system, merge, or deployment change occurred.
