# IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01

## Document Header

- **Title:** WNYHS Category Asset Source Manifest
- **Revision:** REV01
- **Status:** ACTIVE / PLANNED SOURCE MANIFEST
- **Owner:** WNY Home Security category-level asset planning
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Document Type:** Governance-only planned category asset source manifest
- **Customer-Facing:** No
- **Implementation Authority:** No

## 1. Purpose

IMG-CATEGORY003 defines the first concrete source manifest for planned WNY Home Security category-level visual assets.

This document creates planned asset records for future image-generation, audit, review, and replacement tasks to consume. It does not generate images, add image files, replace existing assets, wire assets into public pages, or authorize application changes.

## 2. Authority

IMG-CATEGORY003 operates under:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`

If this document conflicts with higher-authority repository governance, the higher-authority document controls.

## 3. Relationship to IMG-CATEGORY001 and IMG-CATEGORY002

IMG-CATEGORY001 defines how category assets must be produced, reviewed, organized, exported, accepted, or rejected.

IMG-CATEGORY002 defines the required category-level inventory model, category grouping, asset classes, naming patterns, priorities, and future production-task consumption rules.

IMG-CATEGORY003 defines the actual planned asset records for the current category set. Future generation tasks must cite the relevant IMG-CATEGORY003 rows and then follow IMG-CATEGORY001 production and review rules.

None of these documents authorizes image generation, asset-file changes, category-page wiring, source-code changes, protected-system work, or deployment by itself.

## 4. Manifest status definitions

Approval Status values:

- `PLANNED`
- `GENERATED`
- `REVIEW_REQUIRED`
- `APPROVED`
- `REJECTED`
- `REPLACED`

Generation Status values:

- `NOT_STARTED`
- `READY_FOR_GENERATION`
- `GENERATED`
- `NEEDS_REVISION`
- `APPROVED_FOR_USE`

For REV01, every asset record uses:

- **Approval Status:** `PLANNED`
- **Generation Status:** `NOT_STARTED`

## 5. Folder path standard

All planned category assets use this folder path pattern:

```text
/public/images/category-pages/{category-slug}/
```

Current category slugs:

- `home-security`
- `home-automation`
- `aging-in-place`
- `home-safety`
- `home-lighting`

## 6. Asset ID standard

Asset IDs use this pattern:

```text
IMG-CAT-{CATEGORY}-{NNN}
```

Examples:

- `IMG-CAT-HOME-SECURITY-001`
- `IMG-CAT-HOME-AUTOMATION-001`
- `IMG-CAT-AGING-IN-PLACE-001`
- `IMG-CAT-HOME-SAFETY-001`
- `IMG-CAT-HOME-LIGHTING-001`

## 7. Baseline asset inventory summary

Each current category has 10 baseline planned assets before solution thumbnails:

| Priority | Asset classes | Count per category |
|---|---|---:|
| Priority 1 | Hero, Dashboard, Mobile Dashboard, WNYHS Core Panel | 4 |
| Priority 2 | Reveal Before, Reveal After | 2 |
| Priority 3 | Routine Thumbnails | 4 |
| Total | Baseline planned assets before solution thumbnails | 10 |

Baseline forecast:

- 5 current categories
- 10 baseline planned assets per category
- 50 total baseline planned assets before solution thumbnails

Solution thumbnails are not included in REV01 because approved solution inventory mapping is outside this task. Solution thumbnails require a later solution-linked manifest task.

## 8. Home Security asset manifest

Folder path: `/public/images/category-pages/home-security/`

| Asset ID | Asset Class | Filename | Folder Path | Priority | Required Visual Content | Hardware Cluster Requirement | Dashboard/Core Content Requirement | Approval Status | Generation Status | Notes |
|---|---|---|---|---:|---|---|---|---|---|---|
| IMG-CAT-HOME-SECURITY-001 | Hero | hero-home-security.jpg | /public/images/category-pages/home-security/ | 1 | Residential Home Security hero scene with clear entry and property awareness context. | Camera; video doorbell; smart lock; door/window sensor. | Not applicable. | PLANNED | NOT_STARTED | Future generation must preserve calm residential tone. |
| IMG-CAT-HOME-SECURITY-002 | Dashboard | dashboard-home-security.jpg | /public/images/category-pages/home-security/ | 1 | Customer-facing Home Security dashboard view. | Not applicable. | Camera views; security status; entry awareness; recent activity; property status; event history. | PLANNED | NOT_STARTED | Use realistic homeowner-readable status panels. |
| IMG-CAT-HOME-SECURITY-003 | Mobile Dashboard | mobile-home-security.jpg | /public/images/category-pages/home-security/ | 1 | Phone-sized Home Security dashboard view. | Not applicable. | Camera views; security status; entry awareness; recent activity; property status; event history. | PLANNED | NOT_STARTED | Must remain readable at mobile proof size. |
| IMG-CAT-HOME-SECURITY-004 | WNYHS Core Panel | core-home-security.jpg | /public/images/category-pages/home-security/ | 1 | WNYHS Core panel supporting Home Security category context. | Camera; video doorbell; smart lock; door/window sensor where visible. | Camera views; security status; entry awareness; recent activity; property status; event history. | PLANNED | NOT_STARTED | Core content must be category-specific. |
| IMG-CAT-HOME-SECURITY-005 | Reveal Before | reveal-before-home-security.jpg | /public/images/category-pages/home-security/ | 2 | Before-state explainer image for limited entry and property visibility. | Door/window sensor or entry hardware may be shown if useful. | Not applicable. | PLANNED | NOT_STARTED | Role name only; do not imply promised outcome. |
| IMG-CAT-HOME-SECURITY-006 | Reveal After | reveal-after-home-security.jpg | /public/images/category-pages/home-security/ | 2 | After-state explainer image showing improved entry awareness and property visibility. | Camera; video doorbell; smart lock; door/window sensor. | Not applicable. | PLANNED | NOT_STARTED | Pair visually with reveal-before asset. |
| IMG-CAT-HOME-SECURITY-007 | Routine Thumbnail | routine-arrival-awareness-home-security.jpg | /public/images/category-pages/home-security/ | 3 | Arrival awareness routine context. | Camera or video doorbell if visible. | Not applicable. | PLANNED | NOT_STARTED | Bright residential thumbnail; no text dependency. |
| IMG-CAT-HOME-SECURITY-008 | Routine Thumbnail | routine-package-protection-home-security.jpg | /public/images/category-pages/home-security/ | 3 | Package protection routine context at entry area. | Video doorbell or camera if visible. | Not applicable. | PLANNED | NOT_STARTED | Use awareness/status posture only. |
| IMG-CAT-HOME-SECURITY-009 | Routine Thumbnail | routine-away-property-awareness-home-security.jpg | /public/images/category-pages/home-security/ | 3 | Away property awareness routine context. | Camera; smart lock; entry sensor as applicable. | Not applicable. | PLANNED | NOT_STARTED | Avoid panic-based scene. |
| IMG-CAT-HOME-SECURITY-010 | Routine Thumbnail | routine-night-security-home-security.jpg | /public/images/category-pages/home-security/ | 3 | Night security routine context with visible home exterior or entry. | Camera; smart lock; door/window sensor as applicable. | Not applicable. | PLANNED | NOT_STARTED | Must remain clear and not overly dark. |

## 9. Home Automation asset manifest

Folder path: `/public/images/category-pages/home-automation/`

Home Automation is the current reference implementation. Existing assets should be audited before any replacement decision.

| Asset ID | Asset Class | Filename | Folder Path | Priority | Required Visual Content | Hardware Cluster Requirement | Dashboard/Core Content Requirement | Approval Status | Generation Status | Notes |
|---|---|---|---|---:|---|---|---|---|---|---|
| IMG-CAT-HOME-AUTOMATION-001 | Hero | hero-home-automation.jpg | /public/images/category-pages/home-automation/ | 1 | Residential Home Automation hero scene showing everyday convenience. | Smart switch; presence sensor; motion sensor; smart plug. | Not applicable. | PLANNED | NOT_STARTED | Audit existing reference asset before replacement. |
| IMG-CAT-HOME-AUTOMATION-002 | Dashboard | dashboard-home-automation.jpg | /public/images/category-pages/home-automation/ | 1 | Customer-facing Home Automation dashboard view. | Not applicable. | Lighting; climate; garage; modes; automations; presence; device controls. | PLANNED | NOT_STARTED | Existing dashboard assets require audit first. |
| IMG-CAT-HOME-AUTOMATION-003 | Mobile Dashboard | mobile-home-automation.jpg | /public/images/category-pages/home-automation/ | 1 | Phone-sized Home Automation dashboard view. | Not applicable. | Lighting; climate; garage; modes; automations; presence; device controls. | PLANNED | NOT_STARTED | Existing mobile proof assets require audit first. |
| IMG-CAT-HOME-AUTOMATION-004 | WNYHS Core Panel | core-home-automation.jpg | /public/images/category-pages/home-automation/ | 1 | WNYHS Core panel supporting Home Automation category context. | Smart switch; presence sensor; motion sensor; smart plug where visible. | Lighting; climate; garage; modes; automations; presence; device controls. | PLANNED | NOT_STARTED | Audit current Core visual before replacement. |
| IMG-CAT-HOME-AUTOMATION-005 | Reveal Before | reveal-before-home-automation.jpg | /public/images/category-pages/home-automation/ | 2 | Before-state explainer image for manual or disconnected routines. | Smart switch or smart plug may be shown if useful. | Not applicable. | PLANNED | NOT_STARTED | Role name only; no promised outcome. |
| IMG-CAT-HOME-AUTOMATION-006 | Reveal After | reveal-after-home-automation.jpg | /public/images/category-pages/home-automation/ | 2 | After-state explainer image showing coordinated everyday convenience. | Smart switch; presence sensor; motion sensor; smart plug. | Not applicable. | PLANNED | NOT_STARTED | Existing reveal assets require audit first. |
| IMG-CAT-HOME-AUTOMATION-007 | Routine Thumbnail | routine-good-morning-home-automation.jpg | /public/images/category-pages/home-automation/ | 3 | Good morning routine context. | Smart switch or presence sensor if visible. | Not applicable. | PLANNED | NOT_STARTED | Audit existing routine thumbnail before replacement. |
| IMG-CAT-HOME-AUTOMATION-008 | Routine Thumbnail | routine-away-mode-home-automation.jpg | /public/images/category-pages/home-automation/ | 3 | Away mode routine context. | Presence sensor; smart plug; lighting control as applicable. | Not applicable. | PLANNED | NOT_STARTED | Audit existing routine thumbnail before replacement. |
| IMG-CAT-HOME-AUTOMATION-009 | Routine Thumbnail | routine-goodnight-home-automation.jpg | /public/images/category-pages/home-automation/ | 3 | Goodnight routine context. | Smart switch; motion sensor; smart plug as applicable. | Not applicable. | PLANNED | NOT_STARTED | Audit existing routine thumbnail before replacement. |
| IMG-CAT-HOME-AUTOMATION-010 | Routine Thumbnail | routine-everyday-convenience-home-automation.jpg | /public/images/category-pages/home-automation/ | 3 | Everyday convenience routine context. | Smart switch; presence sensor; motion sensor; smart plug as applicable. | Not applicable. | PLANNED | NOT_STARTED | Audit existing routine thumbnail before replacement. |

## 10. Aging In Place asset manifest

Folder path: `/public/images/category-pages/aging-in-place/`

| Asset ID | Asset Class | Filename | Folder Path | Priority | Required Visual Content | Hardware Cluster Requirement | Dashboard/Core Content Requirement | Approval Status | Generation Status | Notes |
|---|---|---|---|---:|---|---|---|---|---|---|
| IMG-CAT-AGING-IN-PLACE-001 | Hero | hero-aging-in-place.jpg | /public/images/category-pages/aging-in-place/ | 1 | Calm residential Aging In Place hero scene focused on daily independence and family reassurance. | Presence sensor; activity sensor; safety device; caregiver awareness device. | Not applicable. | PLANNED | NOT_STARTED | Avoid medical or urgent-service implications. |
| IMG-CAT-AGING-IN-PLACE-002 | Dashboard | dashboard-aging-in-place.jpg | /public/images/category-pages/aging-in-place/ | 1 | Light or white customer-facing Aging In Place dashboard view. | Not applicable. | Light or white theme only; large text; large controls; wellness summary; daily activity summary; safety status; caregiver summary; check-in status. | PLANNED | NOT_STARTED | Accessibility is required for this category. |
| IMG-CAT-AGING-IN-PLACE-003 | Mobile Dashboard | mobile-aging-in-place.jpg | /public/images/category-pages/aging-in-place/ | 1 | Phone-sized Aging In Place dashboard view with large controls. | Not applicable. | Light or white theme only; large text; large controls; wellness summary; daily activity summary; safety status; caregiver summary; check-in status. | PLANNED | NOT_STARTED | Must remain readable at mobile proof size. |
| IMG-CAT-AGING-IN-PLACE-004 | WNYHS Core Panel | core-aging-in-place.jpg | /public/images/category-pages/aging-in-place/ | 1 | WNYHS Core panel supporting Aging In Place category context. | Presence sensor; activity sensor; safety device; caregiver awareness device where visible. | Light or white theme only; large text; large controls; wellness summary; daily activity summary; safety status; caregiver summary; check-in status. | PLANNED | NOT_STARTED | Core image should feel calm and approachable. |
| IMG-CAT-AGING-IN-PLACE-005 | Reveal Before | reveal-before-aging-in-place.jpg | /public/images/category-pages/aging-in-place/ | 2 | Before-state explainer image for limited daily activity visibility. | Presence sensor or activity sensor may be shown if useful. | Not applicable. | PLANNED | NOT_STARTED | Role name only; no promised outcome. |
| IMG-CAT-AGING-IN-PLACE-006 | Reveal After | reveal-after-aging-in-place.jpg | /public/images/category-pages/aging-in-place/ | 2 | After-state explainer image showing clearer daily activity and check-in visibility. | Presence sensor; activity sensor; caregiver awareness device. | Not applicable. | PLANNED | NOT_STARTED | Avoid clinical or institutional tone. |
| IMG-CAT-AGING-IN-PLACE-007 | Routine Thumbnail | routine-morning-activity-aging-in-place.jpg | /public/images/category-pages/aging-in-place/ | 3 | Morning activity routine context. | Presence sensor or activity sensor if visible. | Not applicable. | PLANNED | NOT_STARTED | Bright residential thumbnail; no text dependency. |
| IMG-CAT-AGING-IN-PLACE-008 | Routine Thumbnail | routine-night-pathway-aging-in-place.jpg | /public/images/category-pages/aging-in-place/ | 3 | Night pathway routine context. | Motion sensor; pathway lighting device; safety device as applicable. | Not applicable. | PLANNED | NOT_STARTED | Must remain clear and not overly dark. |
| IMG-CAT-AGING-IN-PLACE-009 | Routine Thumbnail | routine-caregiver-reassurance-aging-in-place.jpg | /public/images/category-pages/aging-in-place/ | 3 | Caregiver reassurance routine context. | Caregiver awareness device; presence sensor as applicable. | Not applicable. | PLANNED | NOT_STARTED | Use family reassurance posture only. |
| IMG-CAT-AGING-IN-PLACE-010 | Routine Thumbnail | routine-safety-check-in-aging-in-place.jpg | /public/images/category-pages/aging-in-place/ | 3 | Safety check-in routine context. | Safety device; activity sensor as applicable. | Not applicable. | PLANNED | NOT_STARTED | Avoid medical-service language. |

## 11. Home Safety asset manifest

Folder path: `/public/images/category-pages/home-safety/`

| Asset ID | Asset Class | Filename | Folder Path | Priority | Required Visual Content | Hardware Cluster Requirement | Dashboard/Core Content Requirement | Approval Status | Generation Status | Notes |
|---|---|---|---|---:|---|---|---|---|---|---|
| IMG-CAT-HOME-SAFETY-001 | Hero | hero-home-safety.jpg | /public/images/category-pages/home-safety/ | 1 | Residential Home Safety hero scene focused on water, temperature, and utility awareness. | Leak sensor; freeze sensor; environmental sensor; utility awareness device. | Not applicable. | PLANNED | NOT_STARTED | Use property-care posture only. |
| IMG-CAT-HOME-SAFETY-002 | Dashboard | dashboard-home-safety.jpg | /public/images/category-pages/home-safety/ | 1 | Customer-facing Home Safety dashboard view. | Not applicable. | Water status; environmental status; leak awareness; freeze protection status; utility area status; property protection status. | PLANNED | NOT_STARTED | Use condition/status language. |
| IMG-CAT-HOME-SAFETY-003 | Mobile Dashboard | mobile-home-safety.jpg | /public/images/category-pages/home-safety/ | 1 | Phone-sized Home Safety dashboard view. | Not applicable. | Water status; environmental status; leak awareness; freeze protection status; utility area status; property protection status. | PLANNED | NOT_STARTED | Must remain readable at mobile proof size. |
| IMG-CAT-HOME-SAFETY-004 | WNYHS Core Panel | core-home-safety.jpg | /public/images/category-pages/home-safety/ | 1 | WNYHS Core panel supporting Home Safety category context. | Leak sensor; freeze sensor; environmental sensor; utility awareness device where visible. | Water status; environmental status; leak awareness; freeze protection status; utility area status; property protection status. | PLANNED | NOT_STARTED | Core content must be category-specific. |
| IMG-CAT-HOME-SAFETY-005 | Reveal Before | reveal-before-home-safety.jpg | /public/images/category-pages/home-safety/ | 2 | Before-state explainer image for limited water, freeze, or utility visibility. | Leak sensor or environmental sensor may be shown if useful. | Not applicable. | PLANNED | NOT_STARTED | Role name only; no promised outcome. |
| IMG-CAT-HOME-SAFETY-006 | Reveal After | reveal-after-home-safety.jpg | /public/images/category-pages/home-safety/ | 2 | After-state explainer image showing clearer water, freeze, and utility awareness. | Leak sensor; freeze sensor; environmental sensor; utility awareness device. | Not applicable. | PLANNED | NOT_STARTED | Pair visually with reveal-before asset. |
| IMG-CAT-HOME-SAFETY-007 | Routine Thumbnail | routine-leak-awareness-home-safety.jpg | /public/images/category-pages/home-safety/ | 3 | Leak awareness routine context. | Leak sensor if visible. | Not applicable. | PLANNED | NOT_STARTED | Avoid dramatic damage imagery. |
| IMG-CAT-HOME-SAFETY-008 | Routine Thumbnail | routine-freeze-protection-home-safety.jpg | /public/images/category-pages/home-safety/ | 3 | Freeze protection routine context. | Freeze sensor or environmental sensor if visible. | Not applicable. | PLANNED | NOT_STARTED | Use condition/status posture only. |
| IMG-CAT-HOME-SAFETY-009 | Routine Thumbnail | routine-utility-room-awareness-home-safety.jpg | /public/images/category-pages/home-safety/ | 3 | Utility room awareness routine context. | Utility awareness device; leak sensor as applicable. | Not applicable. | PLANNED | NOT_STARTED | Bright, clear utility-space thumbnail. |
| IMG-CAT-HOME-SAFETY-010 | Routine Thumbnail | routine-environmental-comfort-home-safety.jpg | /public/images/category-pages/home-safety/ | 3 | Environmental comfort routine context. | Environmental sensor as applicable. | Not applicable. | PLANNED | NOT_STARTED | Avoid unsupported health or outcome claims. |

## 12. Home Lighting asset manifest

Folder path: `/public/images/category-pages/home-lighting/`

| Asset ID | Asset Class | Filename | Folder Path | Priority | Required Visual Content | Hardware Cluster Requirement | Dashboard/Core Content Requirement | Approval Status | Generation Status | Notes |
|---|---|---|---|---:|---|---|---|---|---|---|
| IMG-CAT-HOME-LIGHTING-001 | Hero | hero-home-lighting.jpg | /public/images/category-pages/home-lighting/ | 1 | Residential Home Lighting hero scene with comfortable interior or exterior lighting context. | Smart dimmer; motion sensor; lighting controller; pathway lighting device. | Not applicable. | PLANNED | NOT_STARTED | Keep lighting premium and readable. |
| IMG-CAT-HOME-LIGHTING-002 | Dashboard | dashboard-home-lighting.jpg | /public/images/category-pages/home-lighting/ | 1 | Customer-facing Home Lighting dashboard view. | Not applicable. | Lighting zones; scenes; schedules; dimmers; pathway controls; exterior lighting status. | PLANNED | NOT_STARTED | Use scene, zone, and status labels. |
| IMG-CAT-HOME-LIGHTING-003 | Mobile Dashboard | mobile-home-lighting.jpg | /public/images/category-pages/home-lighting/ | 1 | Phone-sized Home Lighting dashboard view. | Not applicable. | Lighting zones; scenes; schedules; dimmers; pathway controls; exterior lighting status. | PLANNED | NOT_STARTED | Must remain readable at mobile proof size. |
| IMG-CAT-HOME-LIGHTING-004 | WNYHS Core Panel | core-home-lighting.jpg | /public/images/category-pages/home-lighting/ | 1 | WNYHS Core panel supporting Home Lighting category context. | Smart dimmer; motion sensor; lighting controller; pathway lighting device where visible. | Lighting zones; scenes; schedules; dimmers; pathway controls; exterior lighting status. | PLANNED | NOT_STARTED | Core content must be category-specific. |
| IMG-CAT-HOME-LIGHTING-005 | Reveal Before | reveal-before-home-lighting.jpg | /public/images/category-pages/home-lighting/ | 2 | Before-state explainer image for manual or inconsistent lighting scenes. | Smart dimmer or lighting controller may be shown if useful. | Not applicable. | PLANNED | NOT_STARTED | Role name only; no promised outcome. |
| IMG-CAT-HOME-LIGHTING-006 | Reveal After | reveal-after-home-lighting.jpg | /public/images/category-pages/home-lighting/ | 2 | After-state explainer image showing coordinated lighting scenes and pathway visibility. | Smart dimmer; motion sensor; lighting controller; pathway lighting device. | Not applicable. | PLANNED | NOT_STARTED | Pair visually with reveal-before asset. |
| IMG-CAT-HOME-LIGHTING-007 | Routine Thumbnail | routine-evening-scene-home-lighting.jpg | /public/images/category-pages/home-lighting/ | 3 | Evening scene routine context. | Smart dimmer or lighting controller if visible. | Not applicable. | PLANNED | NOT_STARTED | Bright enough to understand at thumbnail size. |
| IMG-CAT-HOME-LIGHTING-008 | Routine Thumbnail | routine-safepath-home-lighting.jpg | /public/images/category-pages/home-lighting/ | 3 | SafePath pathway lighting routine context. | Motion sensor; pathway lighting device. | Not applicable. | PLANNED | NOT_STARTED | Use pathway visibility posture only. |
| IMG-CAT-HOME-LIGHTING-009 | Routine Thumbnail | routine-exterior-arrival-home-lighting.jpg | /public/images/category-pages/home-lighting/ | 3 | Exterior arrival lighting routine context. | Motion sensor; pathway lighting device; lighting controller as applicable. | Not applicable. | PLANNED | NOT_STARTED | Residential exterior should remain calm. |
| IMG-CAT-HOME-LIGHTING-010 | Routine Thumbnail | routine-goodnight-lighting-home-lighting.jpg | /public/images/category-pages/home-lighting/ | 3 | Goodnight lighting routine context. | Smart dimmer; lighting controller as applicable. | Not applicable. | PLANNED | NOT_STARTED | Avoid overly dark scene. |

## 13. Cross-category naming review

Filenames in this manifest must be:

- lowercase
- hyphenated
- category-specific
- asset-class recognizable
- free of spaces
- free of date stamps unless versioning is explicitly required

REV01 naming uses consistent role-first filenames such as `hero-home-security.jpg`, `dashboard-home-safety.jpg`, and `routine-evening-scene-home-lighting.jpg`.

## 14. Generation readiness checklist

Before a future task generates or audits any planned asset, confirm:

- [ ] IMG-CATEGORY001 reviewed
- [ ] IMG-CATEGORY002 reviewed
- [ ] category manifest row exists
- [ ] prompt can be generated from row
- [ ] required hardware cluster is defined
- [ ] dashboard/Core requirements are defined where applicable
- [ ] approval status is `PLANNED`
- [ ] generation status is `NOT_STARTED`

## 15. Future task routing

Future bounded tasks may consume this manifest through these planned routes:

- `T-IMG-CATEGORY004-001` - Home Security Asset Generation
- `T-IMG-CATEGORY004-002` - Aging In Place Asset Generation
- `T-IMG-CATEGORY004-003` - Home Safety Asset Generation
- `T-IMG-CATEGORY004-004` - Home Lighting Asset Generation
- `T-IMG-CATEGORY004-005` - Home Automation Asset Audit / Replacement Decision

Each future task must identify exact rows in scope and must not combine generation, approval, replacement, and page wiring unless a separate bounded work order explicitly authorizes that combination.

## 16. Codex restrictions

Codex must not use IMG-CATEGORY003 to:

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

Codex may use IMG-CATEGORY003 only as a planned source manifest for future bounded asset-generation, audit, review, or replacement-decision tasks.

## 17. Success criteria

IMG-CATEGORY003 is successful when:

- the first concrete category asset source manifest exists
- all five current category groups are represented
- each category has 10 baseline planned assets
- all planned assets have stable asset IDs
- all planned assets have filenames and folder paths
- all planned assets have asset class, priority, visual content, hardware cluster, dashboard/Core, approval, generation, and notes fields
- every REV01 asset is `PLANNED` and `NOT_STARTED`
- solution thumbnails are explicitly deferred to a later solution-linked manifest task
- future generation task routing is documented
- Codex restrictions prevent this manifest from becoming implementation authority
- protected systems remain outside this document scope

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

Public site version remains unchanged for this docs-only governance source manifest.
