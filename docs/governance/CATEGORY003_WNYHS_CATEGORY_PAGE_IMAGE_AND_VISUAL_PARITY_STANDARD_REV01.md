# CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01

## Document Header

- **Title:** WNYHS Category Page Image and Visual Parity Standard
- **Revision:** REV01
- **Status:** ACTIVE / GOVERNING once adopted
- **Owner:** WNY Home Security category landing pages
- **Reference Implementation:** Home Automation category landing page
- **Reference Route:** `/home-automation`
- **Reference Asset Folder:** `public/images/category-pages/home-automation/`
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Document Type:** Category landing page image, visual parity, and section-purpose governance

## Purpose

CATEGORY003 governs the reusable image and visual parity model for WNYHS category landing pages.

It defines:

- category landing page image usage
- visual parity expectations
- section image purpose
- thumbnail image standards
- dashboard/mobile proof section behavior
- WNYHS Core image and copy behavior
- repeatable category-page asset packages for future categories

This standard captures the approved Home Automation category landing page, after PRs #334 through #339, as the reference implementation for future category pages.

## Relationship To CATEGORY001 And CATEGORY002

- `CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01` governs category strategy, identity, metadata, and category role.
- `CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01` governs category landing page structure and required section order.
- `CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01` governs image usage, visual parity, and section-specific asset behavior.
- CATEGORY003 does not replace CATEGORY001 or CATEGORY002.

Implementation still requires a bounded task or work order. This document does not authorize application source, CSS, route, runtime, protected-system, image-generation, asset-replacement, deployment, or third-party integration changes by itself.

## Approved Reference Page Pattern

The approved Home Automation category page uses this flow:

1. **Hero** - establishes category identity, homeowner outcome, and premium trust immediately.
2. **Automation / Possibility Reveal** - shows the difference between the normal homeowner view and the hidden opportunities WNYHS can help organize.
3. **Dashboard / Mobile / Routine Proof** - shows that the category becomes understandable in daily use through a dashboard, a phone view, and recognizable routines.
4. **Popular Solutions** - presents exactly four image-led solution cards that make the most relatable category outcomes easy to choose from.
5. **WNYHS Core** - explains the category-specific foundation and how it can support future supported additions.
6. **Explore More Solutions** - preserves broader category browsing after the most important examples have been introduced.
7. **Custom Solutions** - makes room for practical property-specific ideas without promising unsupported outcomes.
8. **Primary CTA** - gives the homeowner a clear next step to request an estimate or call/text.

Future category pages should preserve this rhythm unless a later category standard explicitly revises it.

## Required Image Asset Classes

### A. Hero Image

**Purpose:** Immediate category identity and premium visual trust.

Rules:

- Use a large, clean, emotionally clear image.
- Keep imagery category-specific.
- Avoid unnecessary overlays.
- Ensure the image scales without awkward letterboxing.
- Do not depend on text inside the image for comprehension.

### B. Reveal / Explainer Image Pair

**Purpose:** Show what WNYHS sees versus what the homeowner sees.

Required behavior:

- The default image may show labels, glow treatment, or callouts where governed.
- The hover/focus image may show the same home clean and unlabeled.
- The pair should communicate non-invasive installation and hidden value.
- Hover and keyboard focus behavior must preserve accessibility.
- Tap/mobile behavior should remain usable when hover is unavailable.

### C. Dashboard Proof Image

**Purpose:** Show that the system becomes understandable in one dashboard.

Rules:

- Dashboard content must be clear enough to understand at page size.
- The image should show category-relevant controls or status.
- Avoid unreadable clutter.
- Use contained scaling when important UI text or callouts matter.

### D. Mobile App Proof Image

**Purpose:** Show that the customer can check or control supported systems from a phone.

Rules:

- Treat the mobile image as secondary to the dashboard image.
- Do not let the phone visual overpower the dashboard proof image.
- Caption or contextualize the mobile image.
- Use supported and where-supported language when describing remote or local behavior.

### E. Routine Thumbnail Images

**Purpose:** Represent everyday routines at small size.

Rules:

- Bright.
- Immediately recognizable at 150-220px wide.
- One clear subject.
- No text overlays.
- No dashboard screenshots.
- No complex infographics.
- No dark unreadable panels.
- The customer should understand the routine in under one second.

### F. Featured Solution Card Images

**Purpose:** Support solution navigation cards.

Rules:

- Use a single-scene outcome image.
- Avoid infographic panels.
- Avoid dense UI.
- Avoid unreadable text.
- Keep imagery bright enough to identify quickly.
- Align the image with the solution outcome.

### G. WNYHS Core Image

**Purpose:** Support Core as the foundation layer.

Rules:

- Homepage Core image equals platform overview image.
- Category Core image equals category-specific dashboard or platform proof image.
- Avoid dense whole-property infographic imagery inside a small category card unless it is displayed large enough to read.
- Use category-specific Core imagery when available.

### H. Optional Scenario / Education Image

**Purpose:** Used deeper on actual solution pages, not necessarily category cards.

Rules:

- May be infographic or sequence-style.
- May explain process or setup.
- Should not be used as a small thumbnail unless legible at the rendered size.

## Thumbnail Image Generation Standard

Thumbnail images must be:

- instantly recognizable
- bright and inviting
- built around a clear focal subject
- simple and clean in composition
- grounded in a real home context
- warm and premium in color tone
- high quality and consistent across the set
- readable at small size

Bad thumbnail patterns:

- too dark
- too much detail
- close-up with no context
- low exposure
- cluttered dashboard or UI
- text-heavy infographic

Recommended specs:

- Source image: 1920x1080 or 1920x1280.
- Display target: 150-220px wide.
- File type: JPG for photographic thumbnails.
- Quality: 85-92.
- Color space: sRGB.
- Transparency: not required.

## Image Placement And Scaling Rules

- Use `object-fit: cover` only when the subject remains safe at expected breakpoints.
- Use `object-fit: contain` where text, callouts, dashboards, or UI details matter.
- Avoid horizontal overflow.
- Avoid excessive letterboxing.
- Images must sit inside card bounds.
- No image should protrude outside a card unless explicitly designed and governed.
- Test desktop, tablet, and mobile layouts.

## Dashboard / Mobile / Routine Section Standard

The approved proof-section hierarchy is:

1. Dashboard equals primary proof.
2. Phone/mobile equals secondary proof.
3. Routine thumbnails equal supporting examples.

Required captions:

- Whole Home Dashboard
- Mobile App Access
- Popular Automation Routines

This section should explain daily use, not just software. The customer should understand how the category affects ordinary routines, decisions, and control points.

Approved benefit-card intent:

- Everything in one place
- Stay connected anywhere
- Let your home do more automatically

## WNYHS Core Panel Standard

### Homepage Core

Homepage Core messaging should explain:

- a platform-wide foundation
- one system built to grow with the home
- the ability to start with one solution and add more later
- support across Home Security, Home Automation, Aging In Place, Home Safety, and Home Lighting
- custom dashboards for chosen solutions
- easy controls with minimal tech learning
- Home Assistant as supporting technical proof
- local-first and privacy-conscious posture
- supported and where-supported language for offline or local claims

Do not claim official Home Assistant affiliation unless a higher-authority repository document authorizes it.

### Category Page Core

Category Core messaging should explain:

- how Core supports the current category now
- how Core can support future supported categories later
- the category-specific dashboard or platform proof image
- the difference between category-specific value and platform-wide expansion

Do not make a dense whole-property infographic the primary image if it is unreadable at the displayed size.

## Copy And Claims Guardrails

Category page image, caption, card, and Core copy must:

- avoid absolute safety or prevention claims
- avoid saying every feature works offline
- avoid saying every device requires no cloud
- use supported, local-first, and where-supported language
- avoid claiming official Home Assistant affiliation unless repo docs authorize it
- stay homeowner-friendly
- avoid hardware-first and protocol-first framing
- avoid fear-based imagery or copy

## Visual Parity Rules

Future category pages must preserve:

- same section rhythm
- same card logic
- same dark/gold visual language
- same token-governed styling
- same image hierarchy
- same CTA treatment
- same WNYHS Core logic
- no raw color drift

Future category page work must follow `PAGE_TOKEN_COMPLIANCE_GATE_REV01`, `DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02`, and the active WNYHS public visual primitives.

## Future Category Asset Package

Expected folder pattern:

```text
public/images/category-pages/<category-slug>/
```

Expected assets:

- hero image
- reveal/explainer image pair
- dashboard proof image
- mobile proof image
- 4-6 routine thumbnails
- 4 featured solution thumbnails
- category Core image
- optional scenario/education images

Asset names should be stable, descriptive, lowercase where practical, and specific to the category or solution outcome.

## CATEGORY003 Compliance Checklist

- [ ] Section structure matches CATEGORY002.
- [ ] Images follow asset class rules.
- [ ] Thumbnails are recognizable at 150-220px.
- [ ] Dashboard/phone/routine hierarchy is correct.
- [ ] Core panel uses the correct homepage/category distinction.
- [ ] No raw colors are introduced.
- [ ] No image overflow is introduced.
- [ ] No forbidden claims are introduced.
- [ ] Responsive behavior is verified.
- [ ] Build passes when required by the active task.

## Home Automation Reference Filenames

Home Automation reference files currently used:

- `homeautomationhero.png`
- `neonimage.png`
- `neonimagenoneon.png`
- `fullsizehomeautomationdashboard.png`
- `cellphonedashhomeautomation.png`
- `good-morning-thumb.jpg`
- `arrival-automation-thumb.jpg`
- `movie-night-thumb.jpg`
- `goodnight-routine-thumb.jpg`
- `vacation-mode-thumb.jpg`
- `solution-arrival-automation-thumb.jpg`
- `solution-movie-night-scenes-thumb.jpg`
- `solution-goodnight-routine-thumb.jpg`
- `solution-vacation-mode-thumb.jpg`

Larger scenario graphics may be reused on deeper solution pages when legible and appropriate. They should not automatically be used as small category card thumbnails.

## Repository Index Updates

When CATEGORY003 is created or revised, update repository documentation indexes if required by current repository convention:

- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`

## Master Task Register Update

Create or update a bounded docs-only task entry for CATEGORY003 governance in `docs/system/master-task-register.md`.

The task may be marked DONE when:

- this standard exists
- required sections are present
- repository indexes are updated
- validation passes
- protected systems remain untouched

## Version

Do not bump the public site version for docs-only CATEGORY003 governance unless a higher-authority repository convention or active work order explicitly requires it.

This REV01 task leaves the public site version unchanged.

## Protected Systems Boundary

CATEGORY003 does not authorize changes to:

- application source code
- CSS
- images
- homepage
- `/home-automation`
- HubSpot
- Stripe/payment
- scheduling/calendar
- Resend/email
- APIs/backend
- Cloudflare config
- package.json or package-lock
- quote/estimate runtime
- category page creation
