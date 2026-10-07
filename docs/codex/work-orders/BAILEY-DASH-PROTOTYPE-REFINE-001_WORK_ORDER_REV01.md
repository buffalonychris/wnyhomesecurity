# BAILEY-DASH-PROTOTYPE-REFINE-001 — Bailey Dashboard Visual Refinement Pass

**Revision:** REV01  
**Status:** OPERATOR AUTHORIZED — EXECUTE THIS REVISION  
**Category:** PROTOTYPE / VISUAL APPROVAL  
**Primary Workstream:** Dashboard / Interactive Experience System  
**Related Workstreams:** Visual System; Home Assistant Platform; Project Governance  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01  
**Standing campaign:** DASHBOARD-CAMPAIGN-001  
**Pipeline owner:** INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01

READ MODE: TARGETED  
CONTEXT TARGET: LOW

## 1. Objective

Refine the already-approved Bailey deterministic dashboard architecture into a stronger production-oriented visual prototype without changing capability scope, semantic behavior, runtime permissions, notification policy, or Home Assistant implementation.

Target artifact:

`prototypes/dashboard/bailey/Bailey_Dashboard_Review.html`

This is a visual/UX refinement pass only. Existing Bailey production dashboards remain untouched.

## 2. Operator-approved refinement goals

The operator reviewed the merged prototype at 100% browser zoom and authorized continued refinement before production conversion.

Implement these refinements:

1. Preserve the existing architecture, capability scope, simulated-state model, navigation, settings, themes, fonts, and role boundaries.
2. Change the main product title from `Bailey Control Center` to the canonical product name:
   - `WNY Home Security Customer Control Center`
3. Keep `BK LEWIS · BAILEY` as the property identity.
4. Reduce the vertical footprint of the header/navigation shell so operational status appears sooner.
5. Reduce approval/developer-oriented explanatory copy inside the operational Home view while preserving the persistent prototype truthfulness banner and enough fixture disclosure to prevent live-state confusion.
6. Strengthen status/value prominence relative to helper prose without changing semantic colors or status meanings.
7. Tighten tile internal hierarchy toward:
   - identity/header
   - primary state
   - supporting state
   - action
8. Preserve the Cameras tile governed 16:9 media region and neutral placeholder, but refine spacing so it visually balances with adjacent tiles.
9. Preserve all six Home tiles and capability scope.
10. In Compact desktop mode only, when the six Home tiles render in a 4-column grid, make the final two tiles each span two columns so the second row becomes balanced:
   - Row 1: Building Status | Entrances | Cameras | Smoke / Fire
   - Row 2: Environment & Lighting (2 columns) | Recent Activity / Support (2 columns)
11. Default remains 3 columns x 2 rows.
12. Large remains 2 columns with governed Large spacing/action height.
13. Reduce footer support-action visual dominance while preserving the required Support / Call WNYHS / Email Support surfaces and weather/date-time composition.
14. Preserve all truthfulness behavior:
   - SMOKE 02 remains deferred/unavailable in the prototype fixture;
   - Normal scenario must not falsely make Smoke / Fire Normal while that deferred condition is represented;
   - retired South HC620 remains absent;
   - unresolved contact mappings remain grouped and not invented;
   - no raw HA IDs or private data.
15. Do not introduce new capabilities, controls, claims, routes, notifications, or role permissions.

## 3. Repeatability / INSTALL011 requirement

This task is a Bailey proving pass under INSTALL011.

Do not silently convert Bailey-specific CSS choices into company-wide standards.

At closeout, classify each refinement as one of:

- `BAILEY_ONLY`
- `CROSS_SITE_PROMOTION_CANDIDATE`
- `ALREADY_CANONICAL`

Expected promotion candidates include, if validation supports them:

- compact final-row balancing rule;
- reduced shell/header vertical footprint;
- stronger status-value hierarchy;
- reduced approval/developer copy in customer-facing operational surfaces;
- lower footer support-action visual dominance;
- canonical product-title treatment.

Do not modify DESIGN001, DASHBOARD001, INSTALL006, or INSTALL011 in this task. Promotion occurs only in a later bounded governance task after operator approval.

## 4. Branch and task gate

Continue branch:

`task/bailey-dashboard-prototype-refine-001`

Do not create another branch.

Before implementation:

1. Confirm branch is based on main containing merged PR #597 / merge commit `d2e169232145faa0e6f9b1ddca2e867811555bd7` or later preserving it.
2. Confirm `DASHBOARD-CAMPAIGN-001` remains ACTIVE.
3. Confirm INSTALL011 is present and active as orchestration authority.
4. Confirm exact OPS004 Primary Workstream match: `Dashboard / Interactive Experience System`.
5. If this exact MTR task record is absent, add only `BAILEY-DASH-PROTOTYPE-REFINE-001` as ACTIVE under prompt-created-task authority.
6. Stop for a real higher-authority conflict or required scope expansion.

## 5. Required targeted reads

Read only applicable sections.

### Current authority
- `docs/system/step-current.md` — current context / dashboard protection
- exact `DASHBOARD-CAMPAIGN-001` MTR block
- exact `BAILEY-DASH-PROTOTYPE-REFINE-001` block after creation
- `docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md` §§3, 9, 11, 14, 15

### Canonical dashboard owners
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` §§2–6, 12–16
- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` §§2–11
- `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` §§2, 4–9, 11

### Existing Bailey prototype
- `prototypes/dashboard/bailey/Bailey_Dashboard_Review.html`

Do not read raw registry exports, prior prototype work orders, Bailey runtime YAML, notifications, or unrelated customer history unless a stop-condition conflict requires it.

## 6. Owner Routing Matrix

| Concept | Canonical owner | Target | Action | Boundary |
| --- | --- | --- | --- | --- |
| Customer architecture/status/navigation | INSTALL006 REV02 | Bailey prototype | CONFORM | Do not change semantics |
| Visual tokens/components/hierarchy | DESIGN001 REV02 | Bailey prototype | REFINE WITHIN STANDARD | No new visual system |
| Responsive grid/delivery | DASHBOARD001 REV02 | Bailey prototype | REFINE WITHIN STANDARD | Keep Compact/Default/Large rules |
| Cross-site orchestration/promotion feedback | INSTALL011 REV01 | Closeout only | REPORT CANDIDATES | Do not edit INSTALL011 |
| Task lifecycle | Project Governance | exact MTR record | MODIFY | No adjacent records |

## 7. Exact changed-file allowlist

Final PR may contain only:

1. `docs/codex/work-orders/BAILEY-DASH-PROTOTYPE-REFINE-001_WORK_ORDER_REV01.md`
2. `docs/system/master-task-register.md`
3. `prototypes/dashboard/bailey/Bailey_Dashboard_Review.html`

No dashboard YAML, package, notification, runtime, standard, script, dependency, image, screenshot, or generated asset may be committed.

Temporary screenshots may be generated for validation and removed before closeout.

## 8. Required visual behavior

### 8.1 Header / navigation
- Preserve WNYHS identity and `BK LEWIS · BAILEY`.
- Main page title must be `WNY Home Security Customer Control Center`.
- Reduce vertical padding/spacing while maintaining keyboard accessibility and 48px minimum nav interaction targets where governed.
- Preserve exact canonical navigation labels/order.
- Preserve current-view indication.
- Do not add a production user/profile dropdown in this task; runtime-backed user/profile behavior is a future implementation concern under INSTALL011. Prototype may retain current shell only.

### 8.2 Approval disclosure
- Keep persistent banner:
  `APPROVAL PREVIEW · SIMULATED DATA · NOT CONNECTED TO LIVE SYSTEMS`
- Keep one concise scope/fixture disclosure near the top.
- Remove or shorten redundant engineering-review prose from operational tiles.
- Do not reduce disclosure enough to imply the prototype is live.

### 8.3 Status hierarchy
- Preserve governed Status Value Field geometry and semantic colors.
- Increase visual priority of actual status values through allowed typography/spacing/field sizing only.
- Helper text must remain neutral and subordinate.
- Do not color ordinary prose with semantic colors.

### 8.4 Home tile balance
Preserve exactly six Home tiles:
1. Building Status
2. Entrances
3. Cameras
4. Smoke / Fire
5. Environment & Lighting
6. Recent Activity / Support

Compact desktop:
- first four tiles occupy four equal columns;
- tile 5 spans columns 1–2;
- tile 6 spans columns 3–4;
- no large empty half-row.

Default desktop:
- exactly 3 columns x 2 rows.

Large desktop:
- 2 columns.

Phone:
- single column, no horizontal scroll.

Tablet:
- 1–2 columns by width/orientation.

### 8.5 Footer
- Preserve Support / Call WNYHS / Email Support.
- Preserve weather and local date/time region.
- Make footer action treatment visually secondary to primary operational controls while retaining accessibility and governed action-family behavior.

## 9. Functional behavior to preserve

Do not regress:

- seven offline destinations;
- Explore WNYHS COMING SOON;
- Light / Dark / Auto;
- Compact / Default / Large;
- Inter / Atkinson Hyperlegible / System;
- Normal / Active / Attention / Alert / Unavailable review scenarios;
- Default + Inter initial state;
- local-only lighting/support actions;
- component-state review;
- reduced-motion handling;
- keyboard focus;
- no external network requests;
- no external assets/fonts;
- no raw HA IDs/private URLs;
- no South retired HC620;
- no `Standard` size label;
- no `LIVE` badge;
- Viewing Room smoke deferred/unavailable truthfulness.

## 10. Validation

Required:

1. Exact three-file allowlist.
2. No deleted files.
3. `git diff --check`.
4. Direct `file://` load in current Chromium/Edge.
5. Zero console/page errors and zero external network requests.
6. Validate Home at representative desktop viewport at 100% browser zoom for:
   - Compact / Dark / Inter
   - Default / Dark / Inter
   - Large / Dark / Inter
   - Default / Light / Inter
7. Validate representative phone portrait, tablet portrait, and tablet landscape.
8. Compact desktop must visibly produce the 4+2-span layout with no half-row void.
9. Default remains 3x2.
10. No horizontal overflow.
11. Status value fields remain aligned and semantically colored only on actual status text.
12. Header/nav total vertical footprint must be measurably lower than REV01 at the same desktop viewport; record before/after CSS-pixel measurement.
13. Home operational helper-copy character count must be reduced versus REV01; record approximate before/after count or equivalent deterministic evidence.
14. Footer action visual weight must be reduced without reducing accessibility or required functionality.
15. All existing settings/scenario behavior still works.
16. Existing capability scope unchanged.
17. No runtime/HA files changed.
18. Temporary screenshots removed before commit.
19. MTR exact task record set DONE after validation.
20. `npm run build` governed skip for standalone HTML unless repository tooling proves required.

## 11. Protected / forbidden scope

Do not:
- access or mutate live Bailey Home Assistant;
- modify existing Bailey production dashboard YAML;
- change packages, notifications, automations, entities, devices, Z-Wave/Zigbee, smoke logic, contact mapping, roles, users, auth, or permissions;
- add/remove dashboard capabilities;
- change canonical status meanings/navigation;
- add external assets/dependencies;
- edit INSTALL006, DESIGN001, DASHBOARD001, INSTALL011;
- deploy;
- merge;
- change Cloudflare/website/CRM/payment/scheduling/email/secrets.

## 12. Closeout / RSI

Report:

- exact files changed;
- before/after header/nav vertical footprint measurement;
- Compact final-row geometry evidence;
- helper-copy reduction evidence;
- status-hierarchy refinements;
- footer visual-weight refinements;
- all validation results;
- confirmation capability/behavior scope unchanged;
- promotion-candidate table with:
  - refinement
  - classification (`BAILEY_ONLY`, `CROSS_SITE_PROMOTION_CANDIDATE`, `ALREADY_CANONICAL`)
  - recommended canonical owner if promoted;
- confirmation no HA/runtime files changed;
- PR URL/state;
- merge/deployment not performed;
- concise context-efficiency/RSI notes only for new material friction or reusable improvement.

## 13. Exit criteria

Complete when:

- refined Bailey prototype exists at the same path;
- product title is canonical;
- shell is visibly denser;
- Compact final row is balanced;
- status values are more prominent;
- approval prose is reduced without weakening truthfulness;
- footer is visually secondary;
- all existing behavior remains intact;
- validation passes;
- promotion candidates are explicitly classified;
- exact MTR record is DONE;
- draft PR contains only authorized files.
