# WNYHS-ASSET-SYSTEM-001 — Implement Unified Cross-Channel Asset System

**Revision:** REV01  
**Status:** PREPARED — NOT DISPATCHED  
**Category:** DESIGN SYSTEM / GOVERNANCE / ASSET FOUNDATION  
**Primary Workstream:** WNYHS Unified Visual Asset System  
**Related Workstreams:** Dashboard; Website; Documents; Contracts; Social Media; Merchandise; Print  
**Controlling Standard:** `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md`

READ MODE: TARGETED  
CONTEXT TARGET: LOW

## 1. Objective

Implement the reusable cross-channel WNYHS asset system defined by ASSET001 so future assets are created by extending an established grammar instead of redesigning colors, geometry, naming, transparency, typography, or export behavior.

This task establishes the shared repository structure, manifest, validation tooling, initial dashboard/UI assets, preview/contact-sheet tooling, and the first proved consumer integration.

## 2. Required targeted reads

Read only:

1. `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md`
2. `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
   - §§2–4, 9–11 only
3. `docs/brand/brand_asset_standards_rev01.md`
   - approved asset locations and prohibited asset behavior only
4. exact MTR task block after creation

Do not load historical asset/design standards, full MTR, old dashboard drafts, PR #578 history, broad catalogs, or unrelated workstreams.

## 3. Required implementation

Create the governed WNYHS asset root:

```text
assets/wnyhs/
  manifest.json
  core/
    brand/
    colors/
    shared/
  digital/
    icons/
      navigation/
      capability/
      status/
      utility/
    placeholders/
    illustrations/
  website/
    icons/
    graphics/
    media/
  documents/
    headers/
    footers/
    marks/
    templates/
  social/
    templates/
    overlays/
    exports/
  merch/
    masters/
    production/
    mockups/
  validation/
```

Create only the initial assets required for the current dashboard shell and reusable WNYHS system. Do not fill empty channel folders with speculative art.

## 4. Initial reusable asset set

### Navigation
- home.svg
- systems.svg
- activity.svg
- alerts.svg
- support.svg
- property.svg
- settings.svg

### Utility
- user.svg
- theme.svg
- layout-size.svg
- chevron-down.svg

### Capability
- building-status.svg
- main-entrance.svg
- door.svg
- window.svg
- doorbell.svg
- lock.svg
- recent-activity.svg

### Status
- normal.svg
- active.svg
- attention.svg
- alert.svg
- unavailable.svg

### Placeholder
- media-unavailable.svg
- weather-unavailable.svg

Reuse one canonical semantic asset across channels when appropriate. Do not duplicate a semantic icon into another folder merely because another surface consumes it.

## 5. Icon grammar

Normal UI icons:
- SVG
- `viewBox="0 0 24 24"`
- width/height 24
- 2-unit safe area
- target envelope 20×20
- optical adjustment max ±0.5 unit
- `fill="none"`
- `stroke="currentColor"`
- `stroke-width="1.8"`
- `stroke-linecap="round"`
- `stroke-linejoin="round"`
- transparent background
- 100% primary geometry opacity
- no text
- no gradients
- no shadows
- no filters
- no external resources
- no hardcoded colors

Placeholder illustrations:
- SVG
- `viewBox="0 0 64 64"`
- width/height 64
- 8-unit safe area
- target envelope 48×48
- stroke 2.5
- round caps/joins
- transparent background
- `currentColor`
- no text/fake imagery

## 6. Color behavior

Use the canonical digital roles from DESIGN001/ASSET001.

Do not hardcode palette values in normal reusable SVG assets.

Consumers assign color.

Do not create separate Light/Dark/gold/white versions of the same normal reusable icon.

Print/physical color equivalents remain unresolved until process-specific proofing. Do not invent CMYK/Pantone/thread/vinyl values.

## 7. Transparency/background

Reusable source assets default to transparent canvas.

No baked:
- white background
- black background
- checkerboard
- tile background
- icon-circle background
- button surface
- shadow/glow

Backgrounds belong to the consuming composition unless explicitly part of the approved asset.

## 8. Naming

Use lowercase kebab-case.

Do not use:
- final
- final-final
- v2
- new
- dark
- light
- gold
- white
- pixel-size suffixes
- customer names

Revision/state belongs in manifest/history.

## 9. Manifest

Create `assets/wnyhs/manifest.json`.

Each entry records:
- id
- file
- asset class
- channel/profile
- semantic purpose
- master format
- dimensions/viewBox
- stroke/safe area where applicable
- background/transparency
- color mode
- theme mode
- revision
- approval state
- derivative/export relationships
- notes/limitations

Future agents must check the manifest before asset creation.

## 10. Cross-channel profile scaffolding

Document within ASSET001 and/or profile metadata that:

- dashboard/UI uses the 24×24 grammar;
- website may reuse UI icons but hero/media assets use responsive/crop-safe specs;
- documents/contracts use approved brand assets, vector-safe marks, governed typography, print-safe margins;
- social uses governed templates by aspect ratio with logo/text/image safe areas;
- merch uses vector masters, transparent background where appropriate, production-safe dimensions/line weights, and process-proofed color mappings.

Do not force UI-icon geometry onto non-icon asset classes.

## 11. Validator

Create:

`scripts/checks/check-wnyhs-assets.mjs`

Node built-ins only. No new dependency.

Validate at minimum:
- every canonical SVG is in manifest;
- manifest files exist;
- no duplicate IDs;
- allowed folders/categories only;
- lowercase kebab-case naming;
- normal icon viewBox/size/stroke/currentColor;
- placeholder viewBox/size/stroke/currentColor;
- no hardcoded colors in normal SVGs;
- no background canvas rect;
- no text/tspan/script/image/style/external URL/base64/gradient/filter/animation/event handlers;
- no theme/color/size duplicate filename variants.

If robust safe-area coordinate validation cannot be done without new dependency, require manual preview inspection instead of unreliable parsing.

## 12. Preview/contact sheet

Create:

`assets/wnyhs/validation/asset-preview.html`

Show every created canonical asset on:
- Light surface
- Dark surface
- gold identity treatment where appropriate
- neutral/muted treatment
- transparency checkerboard inspection

Normal icons:
- 20px
- 22px
- 24px
- 32px inspection

Placeholders:
- 64px
- 96px
- 128px

The checkerboard is preview-only and never part of an asset.

## 13. Initial consumer integration

After the library validates, update the Peckham standalone approval demo to consume the canonical asset sources while remaining a single self-contained HTML artifact.

Target:
`prototypes/dashboard/peckham/Peckham_Dashboard_Review.html`

Required shell alignment:
- top masthead
- horizontal customer navigation
- no desktop left-sidebar shell
- header utilities left-to-right: THEME | SIZE | USER
- USER is far upper-right
- review-only Font / Scenario / Component State controls remain in Settings
- canonical asset library supplies navigation, header utility, tile, and placeholder icons
- standalone HTML inlines needed SVG so email/file:// delivery still has no external dependency

Preserve all existing truthfulness, offline, accessibility, scenario, responsive, and no-live-state constraints.

## 14. Exact allowed paths

- `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md`
- `docs/codex/work-orders/WNYHS-ASSET-SYSTEM-001_WORK_ORDER_REV01.md`
- `docs/system/master-task-register.md`
- `assets/wnyhs/**`
- `scripts/checks/check-wnyhs-assets.mjs`
- `prototypes/dashboard/peckham/Peckham_Dashboard_Review.html`

`package.json` may be modified only for one additive convenience validator script if current governance permits it.

`package-lock.json` must not change.

## 15. Forbidden scope

Do not:
- alter existing locked public brand assets
- redraw/trace/replace WNYHS crest/logo
- modify DESIGN001
- invent new palette roles
- invent new fonts
- invent print color conversions
- modify production site/runtime
- modify Home Assistant
- modify Cloudflare
- modify Stripe
- modify HubSpot
- modify scheduling/API/auth/notification systems
- install dependencies
- merge
- deploy
- modify PR #578

## 16. Validation

Run:
- `node scripts/checks/check-wnyhs-assets.mjs`
- direct browser load of asset preview
- Light/Dark visual inspection
- transparency inspection
- manifest completeness
- duplicate-semantic review
- Peckham copied-file `file://` validation
- desktop/tablet/phone responsive validation
- keyboard/focus validation
- no-network validation
- changed-file audit
- no unexpected deletion
- conflict-marker scan
- `git diff --check`
- package-lock unchanged

## 17. MTR

Create exactly one bounded task:
`WNYHS-ASSET-SYSTEM-001`

Status during execution: ACTIVE.  
Status after successful validation and draft PR: DONE.

Record:
- ASSET001 as asset-system owner
- existing brand standard remains owner of locked public brand assets
- DESIGN001 remains dashboard visual-token/component owner
- exact allowed paths
- validation evidence
- no runtime/HA/production/deployment impact
- draft PR evidence
- operator review required

## 18. Git delivery

Branch:
`task/wnyhs-unified-asset-system-001`

One DRAFT PR to main.

Suggested commit:
`design: establish unified WNYHS asset system`

Suggested PR:
`WNYHS-ASSET-SYSTEM-001 — establish unified WNYHS asset system`

Do not merge. Do not deploy.

## 19. Future extension rule

Normal future asset creation must be mechanical:

1. check manifest
2. reuse if semantic match exists
3. select existing asset class/profile
4. use existing geometry/color/transparency rules
5. add canonical master
6. add manifest entry
7. add/update required derivative only
8. preview
9. validate
10. commit bounded addition

If a new asset appears to require changing palette, typography, viewBox, stroke, safe area, naming, taxonomy, theme model, transparency, source-of-truth model, or profile architecture: STOP.

That is an ASSET SYSTEM REDESIGN and requires explicit operator authorization.

## 20. Exit criteria

Complete only when:
- unified repository structure exists;
- initial canonical assets exist;
- manifest exists;
- validator passes;
- preview passes;
- no duplicate semantic assets exist;
- transparency and theme rules pass;
- cross-channel profiles are documented;
- future extension contract is explicit;
- Peckham demonstrates library consumption with the approved top-header shell;
- standalone email HTML remains self-contained;
- one draft PR is open;
- no production/runtime/HA/Cloudflare/protected-system change occurred.
