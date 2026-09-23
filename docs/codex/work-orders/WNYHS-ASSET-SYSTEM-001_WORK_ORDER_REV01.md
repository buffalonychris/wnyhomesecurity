# WNYHS-ASSET-SYSTEM-001 — Implement Unified Cross-Channel Asset System

**Revision:** REV02 — IN-PLACE OPERATOR-AUTHORIZED SCOPE REVISION
**Status:** ACTIVE — VISUAL APPROVAL PASS
**Category:** DESIGN SYSTEM / GOVERNANCE / ASSET FOUNDATION
**Primary Workstream:** Visual System
**Related Workstreams:** Image System; Dashboard / Interactive Experience System; Project Governance
**Controlling Standard:** `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md`

READ MODE: TARGETED
CONTEXT TARGET: LOW

## 1. Objective

Implement the reusable cross-channel WNYHS asset system defined by ASSET001 so future assets are created by extending an established grammar instead of redesigning colors, geometry, naming, transparency, typography, or export behavior.

This task establishes the shared repository structure, manifest, validation tooling, initial dashboard/UI assets, preview/contact-sheet tooling, and the first proved consumer integration.

Before final validation, complete one additional bounded visual/approval pass that adds an approval-artifact-only device preview, corrects the canonical asset preview's `currentColor` treatment rendering, and adds reusable governed Peckham visuals for property posture, the main entrance assembly, and first-floor window coverage. This revision does not authorize production/runtime work, invented customer data, new visual-system primitives, or a new task/branch/PR.

## 1A. Operator-authorized REV02 approval pass

The existing branch remains `task/wnyhs-unified-asset-system-001`. Do not create a new task, branch, or PR.

The Peckham standalone approval artifact must add a review-only device selector in this header utility order:

`DEVICE | THEME | SIZE | USER`

`USER` remains far upper-right. Device options are exactly:

- Desktop — 1440px approval viewport
- Tablet — 1024px approval viewport
- Phone — 390px approval viewport

The selected device mode must visibly constrain the emulated dashboard viewport and cause actual CSS responsive reflow at the selected width; it must not merely scale a desktop composition. The selector is approval-artifact-only and must not become a customer-facing production control. Preserve standalone, offline, `file://`, print, and capture behavior without requiring browser developer tools.

Correct `assets/wnyhs/validation/asset-preview.html` so Light, Dark, Gold, Muted, and Alpha panes each visibly render the same canonical `currentColor` SVG sources. Preserve source-SVG grammar and do not bake treatment colors into canonical assets.

Create and integrate reusable governed visual concepts for:

1. Property Status Hero — `PK | PECKHAM`, represented coverage posture, 16 installed contacts, preview/not-live state, and unresolved/pending bindings.
2. Main Entrance Assembly — Main Entrance Door Contact, Kwikset SmartCode 912 Lever Lock, Kwikset Home Connect 620 Deadbolt, and Main Entrance Doorbell shown as one assembly while preserving verified/unavailable/pending posture.
3. First-Floor Window Coverage — 15 installed window contacts with reusable indicators and an explicit statement that exact physical window locations remain unresolved; do not imply a floorplan or spatial placement.

Also improve the governed presentation of unavailable media, unavailable weather, and the footer/system-support strip where useful. Use DESIGN001 tokens and canonical WNYHS assets only. Do not add fonts, palette roles, gradients, fake imagery, fake weather, fake telemetry, floorplans, invented sensor locations, unsupported controls, or unsupported live/security claims.

## 2. Required targeted reads

Read only:

1. `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md`
2. `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
   - §§2–4, 9–11 only
3. `docs/brand/brand_asset_standards_rev01.md`
   - approved asset locations and prohibited asset behavior only
4. `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
   - §4 Canonical customer navigation
   - §14 Header, footer, and functional composition
5. `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
   - §2 Customer-visible size modes
   - §4 Responsive and equal-tile delivery
   - §8 Deterministic approval prototypes
   - §9 Validation contract
6. exact MTR task block after creation

Do not load historical asset/design standards, full MTR, old dashboard drafts, PR #578 history, broad catalogs, or unrelated workstreams.

## 3. Operator-Approved Owner Routing Matrix

This matrix is part of the controlling task definition. Codex must validate it before editing. The operator approves this routing when redispatching this revised work order.

| Approved concept | Canonical owner | Exact file | Section / behavior | Action | Reason | Alternate-owner exclusion | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cross-channel reusable WNYHS asset production grammar, repository asset taxonomy, manifest, export, validation, and future-extension rules | ASSET001 (created by this bounded task as the proposed canonical asset-system owner) | `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md` | Whole bounded standard | IMPLEMENT / ESTABLISH | This task exists specifically to establish one reusable WNYHS asset-production system across channels | DESIGN001 remains dashboard visual/component owner; Image System remains image/media-specific routing; existing brand standard remains owner of locked public brand assets | NO | HIGH |
| Dashboard colors, typography, semantic tokens, component geometry, Light/Dark behavior, status roles | DESIGN001 | `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` | §§2–4, 9–11 | REFERENCE / PRESERVE ONLY | New assets must consume existing dashboard visual tokens rather than redefine them | ASSET001 may encode reusable asset grammar but may not redefine these visual/component roles | NO | HIGH |
| Existing approved WNYHS public brand assets and prohibited brand-asset behavior | Brand Asset Standards REV01 | `docs/brand/brand_asset_standards_rev01.md` | Approved asset locations; prohibited asset behavior | REFERENCE / PRESERVE ONLY | Existing crest/iconized logo/hero remain locked source assets | ASSET001 must not redraw, trace, rename, move, recolor, or replace existing locked brand assets | NO | HIGH |
| Customer dashboard shell navigation and header/footer functional composition | INSTALL006 REV02 | `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` | §4; §14 | REFERENCE / CONFORM ONLY | Peckham shell cleanup must remain inside canonical dashboard behavior/navigation ownership | Visual System owns appearance, not customer-navigation behavior | NO | HIGH |
| Customer-visible size modes, responsive delivery, deterministic approval-prototype behavior, validation | DASHBOARD001 REV02 | `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` | §§2, 4, 8, 9 | REFERENCE / CONFORM ONLY | Peckham remains a standalone deterministic approval artifact across desktop/tablet/phone | ASSET001 does not replace responsive/delivery authority | NO | HIGH |
| Generic reusable image/media assets, naming/storage, and visual proof hierarchy when later image-class work is added | Image System | OPS004-registered Image System plus its applicable image standards when a future bounded task actually touches those classes | Boundary only for this task | REFERENCE / PRESERVE ONLY | Current task creates icon/placeholder grammar and channel scaffolding, not a new category/solution image rollout | Image System is related but is not primary because the task outcome is the cross-channel visual asset grammar, not image/media rollout | NO | HIGH |
| MTR lifecycle and bounded execution evidence | Project Governance | `docs/system/master-task-register.md` plus canonical Codex execution rules | Exact task block only | UPDATE ONLY AS REQUIRED | Task lifecycle/evidence must be durable without expanding governance scope | Project Governance does not become the visual/asset owner | NO | HIGH |

If any row resolves to `CONFLICT: YES`, `CONFIDENCE: LOW`, or materially contradicts current repository authority, STOP before implementation and report the exact conflict.

## 4. Required implementation

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

## 5. Initial reusable asset set

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
- device-preview.svg
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

### Reusable dashboard illustrations
- property-status-hero.svg
- main-entrance-assembly.svg
- window-coverage.svg

These illustrations use the existing large digital illustration/placeholder grammar: 64×64 SVG, transparent canvas, `currentColor`, no embedded text, no fake device imagery, and no spatial/floorplan implication.

Reuse one canonical semantic asset across channels when appropriate. Do not duplicate a semantic icon into another folder merely because another surface consumes it.

## 6. Icon grammar

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

## 7. Color behavior

Use the canonical digital roles from DESIGN001/ASSET001.

Do not hardcode palette values in normal reusable SVG assets.

Consumers assign color.

Do not create separate Light/Dark/gold/white versions of the same normal reusable icon.

Print/physical color equivalents remain unresolved until process-specific proofing. Do not invent CMYK/Pantone/thread/vinyl values.

## 8. Transparency/background

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

## 9. Naming

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

## 10. Manifest

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

## 11. Cross-channel profile scaffolding

Document within ASSET001 and/or profile metadata that:

- dashboard/UI uses the 24×24 grammar;
- website may reuse UI icons but hero/media assets use responsive/crop-safe specs;
- documents/contracts use approved brand assets, vector-safe marks, governed typography, print-safe margins;
- social uses governed templates by aspect ratio with logo/text/image safe areas;
- merch uses vector masters, transparent background where appropriate, production-safe dimensions/line weights, and process-proofed color mappings.

Do not force UI-icon geometry onto non-icon asset classes.

## 12. Validator

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

## 13. Preview/contact sheet

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

## 14. Initial consumer integration

After the library validates, update the Peckham standalone approval demo to consume the canonical asset sources while remaining a single self-contained HTML artifact.

Target:
`prototypes/dashboard/peckham/Peckham_Dashboard_Review.html`

Required shell alignment:
- top masthead
- horizontal customer navigation
- no desktop left-sidebar shell
- header utilities left-to-right: DEVICE | THEME | SIZE | USER
- USER is far upper-right
- DEVICE is review-only and offers Desktop 1440px, Tablet 1024px, and Phone 390px approval viewports
- the selected DEVICE mode constrains the rendered dashboard viewport and triggers genuine responsive reflow rather than visual scaling
- review-only Font / Scenario / Component State controls remain in Settings
- canonical asset library supplies navigation, header utility, tile, and placeholder icons
- canonical assets also supply the property-status, entry-assembly, window-coverage, unavailable-media, and unavailable-weather visual concepts
- standalone HTML inlines needed SVG so email/file:// delivery still has no external dependency

Preserve all existing truthfulness, offline, accessibility, scenario, responsive, and no-live-state constraints.

## 15. Exact allowed paths

- `docs/design-system/ASSET001_WNYHS_UNIFIED_ASSET_SYSTEM_STANDARD_REV01.md`
- `docs/codex/work-orders/WNYHS-ASSET-SYSTEM-001_WORK_ORDER_REV01.md`
- `docs/system/master-task-register.md`
- `assets/wnyhs/**`
- `scripts/checks/check-wnyhs-assets.mjs`
- `prototypes/dashboard/peckham/Peckham_Dashboard_Review.html`

`package.json` may be modified only for one additive convenience validator script if current governance permits it.

`package-lock.json` must not change.

## 16. Forbidden scope

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

## 17. Validation

Run:
- `node scripts/checks/check-wnyhs-assets.mjs`
- inline-JavaScript syntax validation for both standalone HTML artifacts
- direct browser load of asset preview
- asset-preview Light/Dark/Gold/Muted/Alpha treatment inspection
- manifest completeness
- duplicate-semantic review
- Peckham copied-file `file://` validation
- Desktop 1440px device-mode validation
- Tablet 1024px device-mode validation
- Phone 390px device-mode validation
- Light and Dark validation
- Compact, Default, and Large validation
- keyboard/focus validation
- no-network validation
- print/capture preservation check for the selected device presentation, as technically practical
- changed-file audit
- no unexpected deletion
- conflict-marker scan
- `git diff --check`
- package-lock unchanged

After these checks, STOP for operator visual approval. Do not mark the task `DONE`, commit, push, or open the draft PR until the operator explicitly approves the revised visual result.

## 18. MTR

Create exactly one bounded task:
`WNYHS-ASSET-SYSTEM-001`

Status during execution: ACTIVE.
Status after this REV02 validation pass: remain ACTIVE pending operator visual approval.
Status after later explicit operator approval, successful final validation, and draft PR: DONE.

Record:
- ASSET001 as asset-system owner
- existing brand standard remains owner of locked public brand assets
- DESIGN001 remains dashboard visual-token/component owner
- exact allowed paths
- validation evidence
- no runtime/HA/production/deployment impact
- draft PR evidence
- operator review required

## 19. Git delivery

Branch:
`task/wnyhs-unified-asset-system-001`

One DRAFT PR to main only after explicit operator approval of the revised visual result.

Suggested commit:
`design: establish unified WNYHS asset system`

Suggested PR:
`WNYHS-ASSET-SYSTEM-001 — establish unified WNYHS asset system`

Do not merge. Do not deploy.
For the current approval pass, do not commit, push, or open the PR.

## 20. Future extension rule

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

## 21. Exit criteria

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
