# IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01

## Document Header

- **Title:** WNYHS Category Asset Manifest Standard
- **Revision:** REV01
- **Status:** ACTIVE / GOVERNING once adopted
- **Owner:** WNY Home Security category-level image inventory
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Document Type:** Governance-only category asset inventory, naming, grouping, priority, and future-task consumption standard
- **Customer-Facing:** No
- **Implementation Authority:** No

## 1. Purpose

IMG-CATEGORY002 defines the authoritative image inventory required for WNY Home Security category-level assets before any image assets are produced, replaced, or wired into category pages.

This manifest standard defines:

- what category-level assets are required
- how assets are grouped by category
- how assets are named
- how baseline counts are forecast
- how future image-production tasks should consume the manifest
- which manifest fields must be present before asset approval

This document is governance only. It does not authorize image production, image generation, image file changes, public page changes, CSS changes, route changes, runtime changes, or protected-system work.

## 2. Authority

IMG-CATEGORY002 operates under:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`

If this document conflicts with higher-authority repository governance, the higher-authority document controls.

## 3. Relationship to IMG-CATEGORY001

IMG-CATEGORY001 defines how category-level image assets must be produced, reviewed, organized, exported, accepted, or rejected.

IMG-CATEGORY002 defines what category-level assets are required before production starts.

Use the relationship this way:

- IMG-CATEGORY002 is the inventory and manifest standard.
- IMG-CATEGORY001 is the production and approval standard.
- Future production tasks must first identify the IMG-CATEGORY002 asset entries in scope, then produce or review assets under IMG-CATEGORY001.
- Neither document authorizes implementation, image creation, image replacement, page wiring, or source changes by itself.

## 4. Current category set

The current governed category set is:

- Home Security
- Home Automation
- Aging In Place
- Home Safety
- Home Lighting

No new business categories are authorized by this manifest. Category additions, removals, renames, or strategy changes require a separate bounded governance task.

## 5. Required baseline asset inventory

Each category must define this minimum baseline inventory before solution thumbnails:

- 1 hero image
- 1 dashboard image
- 1 mobile dashboard image
- 1 WNYHS Core panel image
- 1 reveal-before image
- 1 reveal-after image
- 4 routine thumbnails
- variable solution thumbnails, one per approved solution where applicable

Baseline count per category before solution thumbnails: 10 assets.

## 6. Category asset table

| Category | Category slug | Required baseline assets | Variable assets | Baseline folder path |
|---|---|---:|---|---|
| Home Security | `home-security` | 10 | One solution thumbnail per approved Home Security solution where applicable | `public/images/category-pages/home-security/` |
| Home Automation | `home-automation` | 10 | One solution thumbnail per approved Home Automation solution where applicable | `public/images/category-pages/home-automation/` |
| Aging In Place | `aging-in-place` | 10 | One solution thumbnail per approved Aging In Place solution where applicable | `public/images/category-pages/aging-in-place/` |
| Home Safety | `home-safety` | 10 | One solution thumbnail per approved Home Safety solution where applicable | `public/images/category-pages/home-safety/` |
| Home Lighting | `home-lighting` | 10 | One solution thumbnail per approved Home Lighting solution where applicable | `public/images/category-pages/home-lighting/` |

## 7. Hero asset requirements

Hero assets establish category identity in a residential context.

Filename pattern:

```text
hero-<category-slug>.jpg
```

Examples:

```text
hero-home-security.jpg
hero-home-automation.jpg
hero-aging-in-place.jpg
hero-home-safety.jpg
hero-home-lighting.jpg
```

Hero assets must include a category-specific hardware cluster when scoped for production. Hardware should remain visually supportive and should not turn the image into an ad graphic.

## 8. Dashboard asset requirements

Dashboard assets show the category-specific customer view.

Filename pattern:

```text
dashboard-<category-slug>.jpg
```

Dashboard assets must show realistic controls, status cards, awareness panels, and homeowner-readable hierarchy. Use claim-safe labels such as status, activity, awareness, visibility, condition status, property status, water status, environmental status, leak awareness, freeze protection status, scene, routine, zone, device, and schedule.

## 9. Mobile dashboard asset requirements

Mobile dashboard assets show the phone-sized category view.

Filename pattern:

```text
mobile-<category-slug>.jpg
```

Mobile dashboard assets must:

- remain secondary to the main dashboard asset
- show readable primary content at expected page size
- avoid dense technical panels
- avoid unsupported service or emergency language
- use supported and where-supported language in related manifest notes when behavior depends on configuration

## 10. WNYHS Core panel asset requirements

WNYHS Core panel assets show how the Core platform supports the selected category.

Filename pattern:

```text
core-<category-slug>.jpg
```

Core assets must be category-specific. They should not use generic whole-property or platform imagery if the rendered size makes category details hard to understand.

## 11. Reveal before/after asset requirements

Reveal assets show the category explainer pair.

Filename patterns:

```text
reveal-before-<category-slug>.jpg
reveal-after-<category-slug>.jpg
```

The pair must be visually related and must not imply a verified customer installation unless separately documented. "Before" and "after" are asset-role names only; they must not imply a promised outcome.

## 12. Routine thumbnail requirements

Each category requires four baseline routine thumbnails.

Filename pattern:

```text
routine-<routine-slug>-<category-slug>.jpg
```

Examples:

```text
routine-arrival-awareness-home-security.jpg
routine-package-protection-home-security.jpg
routine-good-morning-mode-home-automation.jpg
routine-evening-scene-home-lighting.jpg
```

Routine thumbnails must be bright, residential, clear at 150-220px width, and built around one recognizable routine context. They must not be dashboard screenshots, text-heavy graphics, or unrelated lifestyle filler.

## 13. Solution thumbnail requirements

Solution thumbnails are variable and must map one-to-one with approved solution inventory where applicable.

Filename pattern:

```text
solution-<solution-slug>-<category-slug>.jpg
```

Future tasks must not create solution thumbnails for unapproved solution inventory. If solution ownership is unclear, the asset remains out of scope until the solution record is approved or reconciled.

## 14. Category-specific asset requirements

### Home Security

Hero hardware cluster:

- Camera
- Video doorbell
- Smart lock
- Door/window sensor

Dashboard/Core content:

- Camera views
- Security status
- Entry awareness
- Recent activity
- Property status
- Event history

Routine thumbnails:

- Arrival awareness
- Package protection
- Away property awareness
- Night security routine

### Home Automation

Hero hardware cluster:

- Smart switch
- Presence sensor
- Motion sensor
- Smart plug

Dashboard/Core content:

- Lighting
- Climate
- Garage
- Modes
- Automations
- Presence
- Device controls

Routine thumbnails:

- Good morning mode
- Away mode
- Goodnight mode
- Everyday convenience routine

### Aging In Place

Hero hardware cluster:

- Presence sensor
- Activity sensor
- Safety device
- Caregiver awareness device

Dashboard/Core content:

- Light or white theme only
- Large text
- Large controls
- Wellness summary
- Daily activity summary
- Safety status
- Caregiver summary
- Check-in status

Routine thumbnails:

- Morning activity check
- Night pathway support
- Caregiver reassurance
- Safety check-in

### Home Safety

Hero hardware cluster:

- Leak sensor
- Freeze sensor
- Environmental sensor
- Utility awareness device

Dashboard/Core content:

- Water status
- Environmental status
- Leak awareness
- Freeze protection status
- Utility area status
- Property protection status

Routine thumbnails:

- Leak awareness response
- Freeze protection status
- Utility room awareness
- Environmental comfort status

### Home Lighting

Hero hardware cluster:

- Smart dimmer
- Motion sensor
- Lighting controller
- Pathway lighting device

Dashboard/Core content:

- Lighting zones
- Scenes
- Schedules
- Dimmers
- Pathway controls
- Exterior lighting status

Routine thumbnails:

- Evening scene
- SafePath pathway lighting
- Exterior arrival lighting
- Goodnight lighting routine

## 15. Generation priority matrix

| Priority | Required assets | Purpose |
|---|---|---|
| Priority 1 | Hero, dashboard, mobile dashboard, WNYHS Core panel | Required for each category page before production refresh |
| Priority 2 | Reveal before, reveal after | Required for full category visual parity |
| Priority 3 | Routine thumbnails, solution thumbnails | Required for expansion and supporting page content |

Future production tasks must state which priority level is in scope. A task may produce only a subset when explicitly bounded, but it must record remaining manifest entries as not yet produced.

## 16. Asset count forecast

Baseline forecast:

- 10 baseline assets per category before solution thumbnails
- 5 categories
- 50 baseline assets total before solution thumbnails
- solution thumbnail count remains variable and must be tied to approved solution inventory

This forecast is planning guidance only. It does not authorize adding image files.

## 17. Manifest field standard

Every manifest entry must include:

- Asset ID
- Category
- Asset class
- Filename
- Folder path
- Purpose
- Required content
- Hardware cluster requirement
- Dashboard/Core content requirement
- Priority
- Approval status
- Source/generation notes
- Replacement status
- Related page or component
- Review notes

Approval status values should be plain and audit-friendly, such as `not-started`, `draft`, `review-needed`, `approved`, `rejected`, or `replaced`.

Replacement status must make clear whether the asset is new, replacing an older asset, deferred, or not applicable.

## 18. Future generation task rules

Future image-production tasks must:

- cite IMG-CATEGORY002 and IMG-CATEGORY001
- identify exact manifest rows in scope
- preserve the current category set unless a separate governance task revises it
- use the category-specific hardware and dashboard/Core requirements in this document
- assign every output asset to a manifest entry
- record approval status and review notes
- keep source, draft, rejected, and approved assets organized under task-specific scope
- avoid creating assets for unapproved solution inventory
- avoid combining image production with page wiring unless a separate bounded task explicitly authorizes both

Future image-production tasks must not treat this document as approval to generate images, add files, replace files, or change public pages.

## 19. Codex restrictions

Codex must not use IMG-CATEGORY002 to:

- generate image assets
- add, remove, or replace image files
- modify public category pages
- modify CSS, tokens, components, routes, or layouts
- modify Stripe/payment logic
- modify HubSpot logic
- modify scheduling, planner, quote, runtime, environment, deployment, API/backend, Resend/email, dependency, or package-lock files
- create new categories
- change approved category strategy
- bypass repository guardrails

Codex may use IMG-CATEGORY002 only to plan, audit, or update manifest-governance entries under a separate bounded task.

## 20. Success criteria

IMG-CATEGORY002 is successful when:

- the current category-level asset inventory is explicit
- every category has a baseline ten-asset inventory before solution thumbnails
- required asset classes are named and grouped consistently
- filename patterns are stable and category-specific
- category-specific hardware and dashboard/Core content requirements are documented
- generation priority is clear
- asset count forecasting is documented
- required manifest fields are defined
- future image-production task rules are bounded
- Codex restrictions prevent implementation or asset changes without separate authorization
- protected systems remain outside the document scope

## Protected systems boundary

This document does not authorize changes to:

- application source code
- CSS or semantic tokens
- image files
- public category pages
- HubSpot
- Stripe/payment
- scheduling/calendar
- planner flows
- quote/estimate runtime
- APIs/backend
- Resend/email
- Cloudflare config
- package dependencies
- environment variables
- secrets

Public site version remains unchanged for this docs-only governance standard.
