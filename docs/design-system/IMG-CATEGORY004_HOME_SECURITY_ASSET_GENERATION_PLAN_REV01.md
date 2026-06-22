# IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01

## Document Header

- **Title:** Home Security Category Asset Generation Plan
- **Revision:** REV01
- **Status:** ACTIVE / PLANNING FOR REVIEW
- **Task:** T-IMG-CATEGORY004-001 - Home Security Category Asset Generation Plan
- **Owner:** WNY Home Security category-level visual assets
- **Current Category:** Home Security only
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Document Type:** Docs-only prompt-and-production plan for future image generation
- **Customer-Facing:** No
- **Implementation Authority:** No

## 1. Purpose

IMG-CATEGORY004 defines the exact Home Security category asset generation package before any image-generation task runs.

This document converts the Home Security rows from `IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md` into a concrete prompt-and-production plan for ten planned Home Security category assets.

This task does not generate, add, remove, replace, approve, or wire image files.

## 2. Authority

IMG-CATEGORY004 operates under:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

If this document conflicts with higher-authority repository governance, the higher-authority document controls.

## 3. Relationship to IMG-CATEGORY001/002/003

IMG-CATEGORY001 defines how category assets must be produced, reviewed, organized, exported, accepted, or rejected.

IMG-CATEGORY002 defines the baseline category asset inventory, naming patterns, asset classes, category-specific requirements, and future production-task rules.

IMG-CATEGORY003 defines the planned asset source rows. IMG-CATEGORY004 consumes only the Home Security rows from IMG-CATEGORY003 and expands them into reusable prompt packages and production sequencing.

IMG-CATEGORY004 does not authorize image generation, asset-file changes, category-page wiring, source-code changes, protected-system work, or deployment.

## 4. Scope

In scope:

- Home Security category assets only.
- The ten planned Home Security baseline assets from IMG-CATEGORY003.
- Future-generation prompts, output filenames, folder path, review criteria, and production sequence.
- Future-task routing to `T-IMG-CATEGORY005-001 - Home Security Category Asset Generation`.

Out of scope:

- Other categories except as future-task references.
- Image generation or image asset changes.
- Public category page implementation.
- CSS, tokens, components, routes, layouts, application code, runtime, environment, dependencies, deployment, or protected systems.
- HubSpot, Stripe/payment, scheduling, planner, quote, APIs/backend, Resend/email, or Cloudflare configuration.

## 5. Home Security asset list

Folder path for all planned outputs:

```text
/public/images/category-pages/home-security/
```

| Sequence | Asset ID | Filename | Asset class | Priority |
|---:|---|---|---|---:|
| 1 | IMG-CAT-HOME-SECURITY-001 | `hero-home-security.jpg` | Hero | 1 |
| 2 | IMG-CAT-HOME-SECURITY-002 | `dashboard-home-security.jpg` | Dashboard | 1 |
| 3 | IMG-CAT-HOME-SECURITY-003 | `mobile-home-security.jpg` | Mobile Dashboard | 1 |
| 4 | IMG-CAT-HOME-SECURITY-004 | `core-home-security.jpg` | WNYHS Core Panel | 1 |
| 5 | IMG-CAT-HOME-SECURITY-005 | `reveal-before-home-security.jpg` | Reveal Before | 2 |
| 6 | IMG-CAT-HOME-SECURITY-006 | `reveal-after-home-security.jpg` | Reveal After | 2 |
| 7 | IMG-CAT-HOME-SECURITY-007 | `routine-arrival-awareness-home-security.jpg` | Routine Thumbnail | 3 |
| 8 | IMG-CAT-HOME-SECURITY-008 | `routine-package-protection-home-security.jpg` | Routine Thumbnail | 3 |
| 9 | IMG-CAT-HOME-SECURITY-009 | `routine-away-property-awareness-home-security.jpg` | Routine Thumbnail | 3 |
| 10 | IMG-CAT-HOME-SECURITY-010 | `routine-night-security-home-security.jpg` | Routine Thumbnail | 3 |

## 6. Home Security visual direction

Home Security imagery should feel:

- local
- residential
- calm
- practical
- trustworthy
- professional
- not fear-based
- not alarm-company aggressive

Avoid:

- crime-scene imagery
- weapons
- public-safety-response imagery
- urgent panic scenes
- exaggerated danger
- dark unreadable houses
- cyber/futuristic UI
- fake surveillance-wall aesthetics

All assets should use a realistic WNY residential setting, clean professional composition, trustworthy local smart-property tone, web-ready image composition, no watermarks, no distorted devices, no impossible hardware, and no exaggerated claims.

## 7. Home Security hero hardware cluster standard

The Home Security hero image must include a lower-right hardware cluster with:

- Camera
- Video doorbell
- Smart lock
- Door/window sensor

The cluster should feel integrated with the residential scene. Hardware may include subtle WNYHS branding or small device marks. Do not include large marketing slogans, floating feature labels, pricing, CTA buttons, or dense dashboard UI inside the image.

The hardware cluster must remain visually supportive and must not turn the hero into an ad graphic.

## 8. Dashboard and WNYHS Core content requirements

Home Security dashboard and Core imagery must include category-relevant controls/status such as:

- Camera views
- Security status
- Entry awareness
- Recent activity
- Property status
- Event history

Dashboard and Core imagery must look like a realistic WNYHS/Home Assistant-style customer control panel. Use homeowner-readable cards and labels only. Avoid cyber/futuristic screens, dense operator consoles, random charts, tiny unreadable labels, or unrelated analytics.

Claim-safe label examples:

- Security status
- Entry awareness
- Camera views
- Property status
- Recent activity
- Event history
- Front door
- Garage entry
- Side door
- Porch camera

## 9. Asset-by-asset prompt package

### 9.1 IMG-CAT-HOME-SECURITY-001 - Hero

- **Filename:** `hero-home-security.jpg`
- **Folder path:** `/public/images/category-pages/home-security/`
- **Asset class:** Hero
- **Priority:** 1
- **Purpose:** Establish the Home Security category with a calm WNY residential exterior and clear category hardware identity.
- **Prompt intent:** Create the primary category hero image with lower-right hardware cluster.
- **Full generation prompt:** Realistic Western New York residential home exterior, calm evening or late-afternoon light, clean professional composition, trustworthy local smart-property tone, web-ready category hero image. Show an inviting front entry, porch, driveway edge, or sidewalk approach with clear property and entry awareness context. Include a lower-right integrated hardware cluster containing a camera, video doorbell, smart lock, and door/window sensor; hardware may include subtle WNYHS branding or small device marks. Keep the lifestyle home scene primary and the hardware cluster supportive. No text overlays, no slogans, no floating feature labels, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.
- **Negative prompt / avoid list:** Avoid crime-scene imagery, weapons, public-safety-response imagery, urgent panic scenes, exaggerated danger, dark unreadable houses, cyber UI, futuristic dashboards, surveillance-wall aesthetics, large logos, pricing, CTA buttons, and fake alert banners.
- **Review notes:** Confirm the lower-right cluster includes all four required hardware types and remains crop-safe for desktop, tablet, and mobile.

### 9.2 IMG-CAT-HOME-SECURITY-002 - Dashboard

- **Filename:** `dashboard-home-security.jpg`
- **Folder path:** `/public/images/category-pages/home-security/`
- **Asset class:** Dashboard
- **Priority:** 1
- **Purpose:** Show the customer-facing Home Security dashboard view for category page proof sections.
- **Prompt intent:** Create a realistic WNYHS/Home Assistant-style Home Security control panel.
- **Full generation prompt:** Realistic WNYHS/Home Assistant-style control panel for a Home Security category page, clean dark premium interface compatible with a WNYHS dark/gold visual system, homeowner-readable layout, web-ready dashboard composition. Include Home Security-relevant cards only: camera views, security status, entry awareness, recent activity, property status, and event history. Use calm status language and practical labels such as Front Door, Garage Entry, Porch Camera, Recent Activity, Property Status, and Event History. The interface should look usable, believable, and professionally configured for a WNY residential property. No text overlays outside the UI, no watermarks, no distorted UI, no cyber/futuristic screen, no unrelated analytics, no impossible controls, no exaggerated claims.
- **Negative prompt / avoid list:** Avoid surveillance-wall aesthetics, cybersecurity dashboards, dense operator consoles, stock market charts, unreadable tiny text, bright panic colors, fake service promises, and generic SaaS UI.
- **Review notes:** Confirm every visible card is Home Security-relevant and the primary labels remain readable at intended page size.

### 9.3 IMG-CAT-HOME-SECURITY-003 - Mobile Dashboard

- **Filename:** `mobile-home-security.jpg`
- **Folder path:** `/public/images/category-pages/home-security/`
- **Asset class:** Mobile Dashboard
- **Priority:** 1
- **Purpose:** Show the phone-sized Home Security dashboard view that pairs with the main dashboard image.
- **Prompt intent:** Create a believable phone interface for the same Home Security category controls.
- **Full generation prompt:** Realistic smartphone mockup showing a WNYHS/Home Assistant-style Home Security mobile dashboard, clean professional composition, trustworthy local smart-property tone, web-ready image. The phone screen should include Home Security-relevant cards only: security status, entry awareness, recent activity, property status, event history, and one or two compact camera views. Use clear homeowner-readable labels and calm status language. Place the phone in a subtle residential context, such as a kitchen counter or entry table, without clutter. No text overlays outside the phone UI, no watermarks, no distorted phone or screen, no cyber/futuristic UI, no impossible hardware, no exaggerated claims.
- **Negative prompt / avoid list:** Avoid unreadable tiny UI, fake app-store style advertising, panic colors, urgent scenes, surveillance-wall visuals, unrelated smart-home categories, and device distortion.
- **Review notes:** Confirm the phone remains secondary to dashboard proof usage but the primary Home Security content is recognizable.

### 9.4 IMG-CAT-HOME-SECURITY-004 - WNYHS Core Panel

- **Filename:** `core-home-security.jpg`
- **Folder path:** `/public/images/category-pages/home-security/`
- **Asset class:** WNYHS Core Panel
- **Priority:** 1
- **Purpose:** Show WNYHS Core as the customer-facing platform layer supporting Home Security.
- **Prompt intent:** Create a category-specific Core panel with dashboard content and supporting hardware context.
- **Full generation prompt:** Realistic WNYHS Core panel for the Home Security category, combining a believable WNYHS/Home Assistant-style customer control dashboard with subtle surrounding Home Security hardware context. Use a clean professional composition with trustworthy local smart-property tone and web-ready framing. Include category-relevant dashboard cards only: camera views, security status, entry awareness, recent activity, property status, and event history. If hardware is visible, show a camera, video doorbell, smart lock, or door/window sensor in a realistic residential context. The image should make Core feel like the platform behind Home Security without becoming a generic dashboard. No text overlays outside the interface, no watermarks, no distorted devices, no cyber/futuristic UI, no impossible hardware, no exaggerated claims.
- **Negative prompt / avoid list:** Avoid generic whole-property infographics, unrelated automation controls, dense technical panels, unreadable labels, panic scenes, weapons, public-safety-response imagery, and large marketing slogans.
- **Review notes:** Confirm the dashboard content is category-specific and the image does not look like a generic platform graphic.

### 9.5 IMG-CAT-HOME-SECURITY-005 - Reveal Before

- **Filename:** `reveal-before-home-security.jpg`
- **Folder path:** `/public/images/category-pages/home-security/`
- **Asset class:** Reveal Before
- **Priority:** 2
- **Purpose:** Show a limited-visibility entry or property context before Home Security awareness is added.
- **Prompt intent:** Create the first half of a before/after explainer pair without implying a promised outcome.
- **Full generation prompt:** Realistic WNY residential entry or side-door scene, calm daytime or early evening lighting, clean professional composition, web-ready reveal/explainer image. Show a normal home entry area with limited visible context, such as a front door, porch, side entry, or garage entry without prominent smart-property devices. The tone should be practical and calm, not unsafe or dramatic. Leave room for the paired after image to show clearer entry awareness. No text overlays, no watermarks, no distorted architecture, no impossible hardware, no exaggerated claims.
- **Negative prompt / avoid list:** Avoid crime scenes, forced-entry damage, weapons, public-safety-response imagery, urgent panic, dark unreadable exterior, scary shadows, fake warning banners, and fear-based staging.
- **Review notes:** Confirm this image is visually pairable with the reveal-after asset and does not imply a verified customer installation.

### 9.6 IMG-CAT-HOME-SECURITY-006 - Reveal After

- **Filename:** `reveal-after-home-security.jpg`
- **Folder path:** `/public/images/category-pages/home-security/`
- **Asset class:** Reveal After
- **Priority:** 2
- **Purpose:** Show improved entry awareness and property visibility in the paired reveal/explainer image.
- **Prompt intent:** Create the second half of the reveal pair with visible Home Security hardware and calm clarity.
- **Full generation prompt:** Realistic WNY residential entry or side-door scene matching the reveal-before composition, calm bright lighting, clean professional composition, trustworthy local smart-property tone, web-ready reveal/explainer image. Show clearer entry awareness and property visibility through visible Home Security hardware: camera, video doorbell, smart lock, and door/window sensor where composition allows. Hardware should look physically plausible and installed in reasonable locations. Keep the scene calm and residential. No text overlays, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.
- **Negative prompt / avoid list:** Avoid fear-based before/after transformation, dramatic danger cues, public-safety-response imagery, urgent panic, fake warning banners, oversized devices, large logos, and ad-style overlays.
- **Review notes:** Confirm the image pairs with reveal-before and uses awareness/visibility posture only.

### 9.7 IMG-CAT-HOME-SECURITY-007 - Arrival Awareness Routine

- **Filename:** `routine-arrival-awareness-home-security.jpg`
- **Folder path:** `/public/images/category-pages/home-security/`
- **Asset class:** Routine Thumbnail
- **Priority:** 3
- **Purpose:** Show an arrival awareness routine thumbnail for the Home Security category.
- **Prompt intent:** Create a bright thumbnail recognizable at 150-220px width.
- **Full generation prompt:** Realistic WNY residential arrival scene at a front entry or driveway, bright and clear, clean professional composition, trustworthy local smart-property tone, web-ready routine thumbnail. Show one clear focal subject: a homeowner arriving at the entry, with a visible video doorbell or camera if composition allows. The scene must remain recognizable at 150-220px width. No text overlays, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.
- **Negative prompt / avoid list:** Avoid dark scenes, panic expressions, suspicious figures, weapons, public-safety-response imagery, cluttered backgrounds, tiny UI screenshots, and text-dependent meaning.
- **Review notes:** Confirm arrival context is instantly understandable at thumbnail size.

### 9.8 IMG-CAT-HOME-SECURITY-008 - Package Protection Routine

- **Filename:** `routine-package-protection-home-security.jpg`
- **Folder path:** `/public/images/category-pages/home-security/`
- **Asset class:** Routine Thumbnail
- **Priority:** 3
- **Purpose:** Show a package-at-entry routine thumbnail with awareness/status posture.
- **Prompt intent:** Create a clear package context thumbnail for Home Security category support.
- **Full generation prompt:** Realistic WNY residential front porch with a package near the door, bright and clear, clean professional composition, trustworthy local smart-property tone, web-ready routine thumbnail. Include a visible video doorbell or entry camera if composition allows. The subject must remain recognizable at 150-220px width: package, doorway, and entry hardware should read clearly. Keep the scene calm and practical. No text overlays, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.
- **Negative prompt / avoid list:** Avoid theft scenes, suspicious figures, confrontation, public-safety-response imagery, urgent panic, dark unreadable porch, fake warning labels, and text-heavy graphics.
- **Review notes:** Confirm package and entry hardware are readable at thumbnail size without implying a promised outcome.

### 9.9 IMG-CAT-HOME-SECURITY-009 - Away Property Awareness Routine

- **Filename:** `routine-away-property-awareness-home-security.jpg`
- **Folder path:** `/public/images/category-pages/home-security/`
- **Asset class:** Routine Thumbnail
- **Priority:** 3
- **Purpose:** Show away-property awareness with calm property status context.
- **Prompt intent:** Create a recognizable away-property routine thumbnail without fear-based staging.
- **Full generation prompt:** Realistic WNY residential home exterior with driveway or front entry, calm daylight, clean professional composition, trustworthy local smart-property tone, web-ready routine thumbnail. Show one clear focal subject for away property awareness, such as a locked front door, driveway view, or side entry with a visible camera, smart lock, or entry sensor. The subject must remain recognizable at 150-220px width. No text overlays, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.
- **Negative prompt / avoid list:** Avoid abandoned-house tone, burglary imagery, public-safety-response imagery, urgent panic, dark unreadable exterior, surveillance-wall aesthetics, and cluttered multi-scene collages.
- **Review notes:** Confirm the thumbnail communicates calm property status and not fear.

### 9.10 IMG-CAT-HOME-SECURITY-010 - Night Security Routine

- **Filename:** `routine-night-security-home-security.jpg`
- **Folder path:** `/public/images/category-pages/home-security/`
- **Asset class:** Routine Thumbnail
- **Priority:** 3
- **Purpose:** Show a night routine thumbnail that remains clear and non-alarming.
- **Prompt intent:** Create a night Home Security routine thumbnail bright enough for small display.
- **Full generation prompt:** Realistic WNY residential night entry or exterior scene, warm porch lighting, clear visible home details, clean professional composition, trustworthy local smart-property tone, web-ready routine thumbnail. Show one clear focal subject such as a lit front door with smart lock, entry sensor, video doorbell, or camera. The image must remain recognizable at 150-220px width and must not be overly dark. No text overlays, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.
- **Negative prompt / avoid list:** Avoid blacked-out houses, scary shadows, suspicious figures, crime-scene mood, weapons, public-safety-response imagery, urgent panic, fake warning banners, and text-dependent meaning.
- **Review notes:** Confirm the image is bright enough for thumbnail use and keeps a calm residential tone.

## 10. Output filename and folder checklist

All outputs for the future generation task must use:

```text
/public/images/category-pages/home-security/
```

Checklist:

- [ ] `hero-home-security.jpg`
- [ ] `dashboard-home-security.jpg`
- [ ] `mobile-home-security.jpg`
- [ ] `core-home-security.jpg`
- [ ] `reveal-before-home-security.jpg`
- [ ] `reveal-after-home-security.jpg`
- [ ] `routine-arrival-awareness-home-security.jpg`
- [ ] `routine-package-protection-home-security.jpg`
- [ ] `routine-away-property-awareness-home-security.jpg`
- [ ] `routine-night-security-home-security.jpg`

This checklist is for the future image-generation task only. This REV01 planning task does not create these files.

## 11. Generation sequence

Priority 1:

1. Hero
2. Dashboard
3. Mobile Dashboard
4. WNYHS Core Panel

Priority 2:

5. Reveal Before
6. Reveal After

Priority 3:

7. Arrival Awareness Routine
8. Package Protection Routine
9. Away Property Awareness Routine
10. Night Security Routine

## 12. Review and approval checklist

Before any future Home Security asset is approved:

- [ ] Asset maps to an IMG-CATEGORY003 Home Security row.
- [ ] Filename exactly matches the planned filename.
- [ ] Folder path is `/public/images/category-pages/home-security/`.
- [ ] Image is realistic, residential, calm, local, and professional.
- [ ] No image relies on text overlays for meaning.
- [ ] No watermark is present.
- [ ] No device is distorted or physically impossible.
- [ ] No unsupported or exaggerated claim is implied.
- [ ] Hero includes camera, video doorbell, smart lock, and door/window sensor in the lower-right hardware cluster.
- [ ] Dashboard and Core images include Home Security-relevant cards only.
- [ ] Dashboard and Core images look like realistic WNYHS/Home Assistant-style customer panels.
- [ ] Reveal images are visually paired and use awareness/visibility posture only.
- [ ] Routine thumbnails remain recognizable at 150-220px width.
- [ ] Visual tone avoids fear-based, aggressive, cyber, or urgent-response-style imagery.
- [ ] Asset remains compatible with WNYHS dark/gold visual system and category-page image rhythm.

## 13. Rejection/revision workflow

Reject or revise any asset that:

- Uses the wrong category hardware.
- Omits required hero hardware.
- Shows unreadable dashboard content.
- Uses generic tech art, fake surveillance-wall aesthetics, or cyber/futuristic UI.
- Is too dark to understand at rendered size.
- Uses panic-based or aggressive Home Security imagery.
- Includes slogans, pricing, CTA buttons, large logos, watermarks, or floating feature labels.
- Depicts distorted devices or physically impossible placement.
- Implies unsupported outcomes or exaggerated claims.
- Does not remain recognizable at thumbnail size where applicable.

Rejected assets must not be wired into application code. Future production tasks should record rejection reason, revise the prompt, regenerate only within approved scope, and preserve the IMG-CATEGORY003 asset ID mapping.

## 14. Future implementation task routing

The next task after review and merge of this plan should be:

```text
T-IMG-CATEGORY005-001 - Home Security Category Asset Generation
```

That later task may generate or place actual image assets only if its bounded work order explicitly authorizes image generation and asset-file changes.

Any later page wiring, CSS adjustment, route update, or visual implementation remains a separate bounded implementation task unless explicitly authorized in that future work order.

## 15. Codex restrictions

Codex must not use IMG-CATEGORY004 to:

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

Codex may use IMG-CATEGORY004 only as a prompt-and-production planning source for a later bounded Home Security asset-generation task.

## 16. Success criteria

IMG-CATEGORY004 is successful when:

- the Home Security generation plan exists as a docs-only REV01 artifact
- exactly ten Home Security planned assets from IMG-CATEGORY003 are included
- each asset includes asset ID, filename, folder path, asset class, priority, purpose, prompt intent, full generation prompt, negative prompt / avoid list, and review notes
- hero hardware cluster requirements are explicit
- dashboard and WNYHS Core Home Security content requirements are explicit
- output filenames and folder path are listed
- generation sequence follows Priority 1, Priority 2, and Priority 3 ordering
- review, rejection, and revision workflows are documented
- future task routing points to `T-IMG-CATEGORY005-001 - Home Security Category Asset Generation`
- no image generation or asset-file change occurs in this planning task
- no application/runtime/protected-system files are modified

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

Public site version remains unchanged for this docs-only planning task.
