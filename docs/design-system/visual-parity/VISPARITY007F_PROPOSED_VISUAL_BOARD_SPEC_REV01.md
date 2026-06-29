# VISPARITY007F Proposed Visual Board Spec REV01

Task ID: VISPARITY007F
Task Name: Proposed Visual Board
Status: Docs-only visual board specification
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose

This document defines the Proposed Visual Board specification for WNYHS visual parity.

It converts `VISPARITY007C_PROPOSED_VISUAL_STANDARD_REFERENCE_REV01.md` proposed-standard evidence and `VISPARITY007D_BEFORE_AFTER_VISUAL_COMPARISON_MATRIX_REV01.md` board planning into a future visual review artifact plan.

This is the after board specification. It prepares board generation for the proposed visual system and serves as the after board input for `VISPARITY007G - Operator Review Packet`.

## 2. Boundary

This is a docs-only visual board specification.

This task includes:

- proposed-state visual board planning
- board grouping rules
- board layout requirements
- proposed visual style rules
- future artifact output planning
- proposed board data requirements

This task does not include:

- no board generation
- no screenshots
- no image generation
- no implementation
- no source/CSS/token/image edits
- no Playwright
- no hooks/QA activation
- no operator approval yet
- no generated visual assets
- no PDF generation

This document does not edit source code, route files, CSS, tokens, UI components, images, assets, sitemap, robots, runtime/API files, HubSpot behavior, Stripe/payment behavior, scheduling, Cloudflare config, dependencies, or package-lock.

Protected systems remain untouched:

- HubSpot / CRM
- Stripe/payment
- Scheduling/calendar
- Lead Signal and requestId
- QRLanding attribution/runtime behavior
- Resend/email runtime
- Cloudflare configuration
- secrets and environment values

## 3. Source Inputs

Primary source inputs:

- `VISPARITY007C_PROPOSED_VISUAL_STANDARD_REFERENCE_REV01.md` - proposed visual standard reference and after-reference.
- `VISPARITY007D_BEFORE_AFTER_VISUAL_COMPARISON_MATRIX_REV01.md` - before/after visual comparison matrix and board planning.
- `VISPARITY007A_VISUAL_BASELINE_SCREENSHOT_MATRIX_REV01.md` - future viewport, state, and visual baseline matrix.
- `VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md` - canonical component names.
- `VISPARITY005_IMAGE_PARITY_AND_ASSET_USAGE_REGISTER_REV01.md` - image role, asset, and image parity direction.
- `VISPARITY007E_CURRENT_STATE_VISUAL_BOARD_SPEC_REV01.md` - current-state visual board spec for paired before/after review.

Supporting governing inputs:

- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

This task relies on existing proposed standard evidence and does not inspect or edit source implementation.

## 4. Proposed Visual Board Set

Future Proposed Visual Board artifacts must use exactly six board groups.

### Board 01 - Proposed Navigation / Shell / Hero

Components included:

- WNYHS Top Navigation
- WNYHS Mobile Navigation
- WNYHS Site Footer
- WNYHS QR Campaign Navigation
- WNYHS Page Shell
- WNYHS Hero Section
- WNYHS Page Intro
- WNYHS Final CTA Section

### Board 02 - Proposed Typography / Actions

Components included:

- WNYHS Eyebrow
- WNYHS Page Heading
- WNYHS Section Heading
- WNYHS Card Heading
- WNYHS Body Copy
- WNYHS Muted Copy
- WNYHS Fine Print
- WNYHS Primary CTA
- WNYHS Secondary CTA
- WNYHS Text Link CTA
- WNYHS Phone CTA

### Board 03 - Proposed Containers / Cards / Tiles

Components included:

- WNYHS Panel
- WNYHS Feature Card
- WNYHS Tile
- WNYHS Proof Card
- WNYHS Search Result Card
- WNYHS Alert / Info Block
- WNYHS Core Panel
- WNYHS Package Tier Block
- WNYHS Vault Tile

### Board 04 - Proposed Forms

Components included:

- WNYHS Form Shell
- WNYHS Form Field
- WNYHS Form Label
- WNYHS Form Help Text
- WNYHS Form Error Text
- WNYHS Select Field
- WNYHS Textarea Field
- WNYHS Submit Button
- Validation states

### Board 05 - Proposed Images / Assets / Proof

Components included:

- WNYHS Hero Image
- WNYHS Category Image
- WNYHS Solution Image
- WNYHS Proof Image
- WNYHS QR Image
- WNYHS Logo Mark
- WNYHS Icon Mark
- WNYHS Dashboard Preview Block
- WNYHS Category Image Block
- WNYHS Solution Scenario Block
- WNYHS Our Work Gallery Block
- WNYHS QR Campaign Block

### Board 06 - Proposed Accessibility / States

Components included:

- Focus state
- Hover state
- Active state
- Disabled state
- Error state
- Success state
- Loading state
- Mobile tap targets
- Text contrast examples
- Proposed resolution of low-contrast / invisible-text risks

## 5. Board Layout Specification

Each future board must use the same layout model so `VISPARITY007G` can compare the current board and proposed board consistently.

### Board 01 - Proposed Navigation / Shell / Hero

| Field | Requirement |
| --- | --- |
| Board title | Board 01 - Proposed Navigation / Shell / Hero |
| Objective | Show the proposed public page frame, top-level orientation, QR campaign navigation variant, page shell, hero, compact intro, and final CTA patterns. |
| Components included | WNYHS Top Navigation; WNYHS Mobile Navigation; WNYHS Site Footer; WNYHS QR Campaign Navigation; WNYHS Page Shell; WNYHS Hero Section; WNYHS Page Intro; WNYHS Final CTA Section. |
| Proposed-standard evidence source | VISPARITY007C component table; VISPARITY007D board plan; DESIGN002; header/footer standards; QR funnel standards. |
| Required labels | Canonical component name, proposed role, proposed surface/token/style direction, approval status. |
| Required notes | Note where main-site and QR/campaign navigation are compatible variants rather than separate visual systems. |
| Proposed improvement callouts | Stable WNYHS page shell, readable navigation, compatible QR campaign nav, clearer hero hierarchy, controlled final CTA hierarchy. |
| Screenshot/image placeholder requirements | Placeholder boxes only: `proposed board placeholder`, `proposed cropped component placeholder`, and `proposed standard source note`. Do not create screenshots. |
| Operator review questions | Does the proposed shell feel like WNYHS? Are QR campaign differences appropriate? Does the hero/final CTA hierarchy feel clear without approving implementation? |
| Future comparison target in VISPARITY007G | Current Navigation / Shell / Hero board from VISPARITY007E. |

### Board 02 - Proposed Typography / Actions

| Field | Requirement |
| --- | --- |
| Board title | Board 02 - Proposed Typography / Actions |
| Objective | Show the proposed type hierarchy and action hierarchy using Manrope heading posture, Inter body/UI posture, readable small text, and clear CTA roles. |
| Components included | WNYHS Eyebrow; WNYHS Page Heading; WNYHS Section Heading; WNYHS Card Heading; WNYHS Body Copy; WNYHS Muted Copy; WNYHS Fine Print; WNYHS Primary CTA; WNYHS Secondary CTA; WNYHS Text Link CTA; WNYHS Phone CTA. |
| Proposed-standard evidence source | VISPARITY007C typography direction and proposed component standard table; VISPARITY003 canonical names; DESIGN002 typography standard. |
| Required labels | Canonical component name, proposed type/action role, proposed contrast rule, proposed state if applicable. |
| Required notes | Mark all examples as proposed, not approved final CSS or token values. |
| Proposed improvement callouts | Safer mobile heading wrapping, readable muted/fine print, clearer primary/secondary/text/phone CTA separation, non-color-only link affordance. |
| Screenshot/image placeholder requirements | Placeholder text samples only; no rendered screenshot, image, or generated board asset. |
| Operator review questions | Are the proposed heading scales restrained enough? Are muted and fine-print examples visibly readable? Does the CTA hierarchy feel clear and local? |
| Future comparison target in VISPARITY007G | Current Typography / Actions board from VISPARITY007E. |

### Board 03 - Proposed Containers / Cards / Tiles

| Field | Requirement |
| --- | --- |
| Board title | Board 03 - Proposed Containers / Cards / Tiles |
| Objective | Show proposed grouped surfaces, repeated cards, compact tiles, status blocks, package blocks, Core panel, and Vault tile direction. |
| Components included | WNYHS Panel; WNYHS Feature Card; WNYHS Tile; WNYHS Proof Card; WNYHS Search Result Card; WNYHS Alert / Info Block; WNYHS Core Panel; WNYHS Package Tier Block; WNYHS Vault Tile. |
| Proposed-standard evidence source | VISPARITY007C proposed component standard table; VISPARITY007D comparison matrix; PAGE_TOKEN_COMPLIANCE_GATE. |
| Required labels | Canonical component name, component family, proposed surface direction, current issue addressed, approval status. |
| Required notes | Mark token decisions still pending for surface, border, radius, shadow, spacing, and status variants. |
| Proposed improvement callouts | Clear panel/card/tile boundaries, reduced nested-card clutter, readable status surfaces, review-safe package blocks, text-first Vault posture unless later image approval exists. |
| Screenshot/image placeholder requirements | Placeholder frames only for future proposed-state crops. Do not create component crops. |
| Operator review questions | Are the proposed surfaces distinct enough? Should Core be light, dark, or route-dependent? Should Vault remain text-first in the proposed board? |
| Future comparison target in VISPARITY007G | Current Containers / Cards / Tiles board from VISPARITY007E. |

### Board 04 - Proposed Forms

| Field | Requirement |
| --- | --- |
| Board title | Board 04 - Proposed Forms |
| Objective | Show proposed form shell, field, label, help, error, select, textarea, submit, and validation-state direction without touching runtime behavior. |
| Components included | WNYHS Form Shell; WNYHS Form Field; WNYHS Form Label; WNYHS Form Help Text; WNYHS Form Error Text; WNYHS Select Field; WNYHS Textarea Field; WNYHS Submit Button; Validation states. |
| Proposed-standard evidence source | VISPARITY007C proposed form components; VISPARITY007A state matrix; QR funnel standards; PAGE_TOKEN_COMPLIANCE_GATE. |
| Required labels | Canonical component name, proposed form context, proposed state, proposed accessibility goal. |
| Required notes | State that form visuals are proposal only and do not authorize payload, field, consent, source tracking, or API changes. |
| Proposed improvement callouts | Visible labels, stronger label/help hierarchy, clear focus ring, clear error/success/loading/disabled states, submit state adjacency. |
| Screenshot/image placeholder requirements | Static placeholders for default, focus, disabled, error, success, and loading states. Do not run forms. |
| Operator review questions | Are labels distinct from help text? Are error states calm and clear? Does the submit button feel related to WNYHS Primary CTA without hiding form status? |
| Future comparison target in VISPARITY007G | Current Forms board from VISPARITY007E. |

### Board 05 - Proposed Images / Assets / Proof

| Field | Requirement |
| --- | --- |
| Board title | Board 05 - Proposed Images / Assets / Proof |
| Objective | Show proposed image-role direction, asset-role rules, dashboard/Core proof visuals, gallery/proof posture, QR image separation, and logo/icon role direction. |
| Components included | WNYHS Hero Image; WNYHS Category Image; WNYHS Solution Image; WNYHS Proof Image; WNYHS QR Image; WNYHS Logo Mark; WNYHS Icon Mark; WNYHS Dashboard Preview Block; WNYHS Category Image Block; WNYHS Solution Scenario Block; WNYHS Our Work Gallery Block; WNYHS QR Campaign Block. |
| Proposed-standard evidence source | VISPARITY007C proposed image direction; VISPARITY005 image register; brand asset standards; CATEGORY003. |
| Required labels | Canonical image/component name, proposed image role, proposed source/asset rule, proposed alt/accessibility goal, image decision status. |
| Required notes | Distinguish web image roles, print/QR asset roles, governed brand assets, and future image decisions still pending. |
| Proposed improvement callouts | Role-specific image hierarchy, brighter and calmer asset tone, QR web/print role separation, dashboard readability, proof-safe gallery captions, logo/icon role discipline. |
| Screenshot/image placeholder requirements | Placeholder image slots only. Do not create, copy, resize, crop, replace, or generate images. |
| Operator review questions | Are the proposed image roles clear enough for later artifact generation? Which image decisions still need operator review? Are proof-safe and QR asset boundaries visible? |
| Future comparison target in VISPARITY007G | Current Images / Assets / Proof board from VISPARITY007E. |

### Board 06 - Proposed Accessibility / States

| Field | Requirement |
| --- | --- |
| Board title | Board 06 - Proposed Accessibility / States |
| Objective | Show proposed interactive and accessibility-state direction for focus, hover, active, disabled, error, success, loading, mobile tap targets, text contrast examples, and proposed resolution of low-contrast / invisible-text risks. |
| Components included | Focus state; Hover state; Active state; Disabled state; Error state; Success state; Loading state; Mobile tap targets; Text contrast examples; Proposed resolution of low-contrast / invisible-text risks. |
| Proposed-standard evidence source | VISPARITY007C accessibility direction; VISPARITY007A component state matrix; VISPARITY007D comparison matrix; PAGE_TOKEN_COMPLIANCE_GATE. |
| Required labels | State name, affected canonical component, proposed accessibility goal, current issue addressed, approval status. |
| Required notes | Mark states as proposed examples only; do not treat them as final QA thresholds or implemented behavior. |
| Proposed improvement callouts | Visible focus, non-color-only status, readable muted/fine print, mobile tap targets, no text requiring highlight, no image-only meaning. |
| Screenshot/image placeholder requirements | Placeholder state frames only. Do not run Playwright, create screenshots, or activate QA. |
| Operator review questions | Are proposed focus states prominent enough? Which contrast risks need highest priority? Which states should be approved, revised, deferred, or marked as implementation risk in VISPARITY007G? |
| Future comparison target in VISPARITY007G | Current Accessibility / States board from VISPARITY007E. |

## 6. Proposed Visual Style Rules

Future proposed boards must represent proposed state clearly while preserving approval boundaries.

Proposed boards must:

- show proposed state clearly
- do not treat proposed state as approved
- distinguish proposal from implementation
- use VISPARITY007C psychology principles
- use VISPARITY007D business/UX/accessibility reasons
- use VISPARITY005 image role direction
- use canonical VISPARITY003 names
- avoid adding ungoverned visual patterns
- mark items needing operator review
- mark token decisions still pending
- mark image decisions still pending
- mark approval status as Proposed / Needs Operator Review unless VISPARITY007G later records a different decision
- preserve the difference between main-site, QR campaign, review-only, and image/asset roles
- avoid presenting proposed examples as final CSS, token, image, or implementation authority

Proposed boards must not:

- approve final visual implementation
- approve proposed visual standard
- create final token values
- create final CSS values
- create or select final image assets
- change source, CSS, routes, tokens, images, runtime behavior, or protected systems
- hide implementation risks that should be routed to VISPARITY007G

## 7. Proposed Board Artifact Plan

Future artifact outputs only:

- proposed visual board image set
- proposed visual board PDF section
- board thumbnails for KAOS dashboard later
- component-level proposed cropped images if later generated

No artifacts are generated in this task.

Suggested future storage paths only; do not create them:

```text
docs/design-system/visual-parity/artifacts/proposed/
docs/design-system/visual-parity/artifacts/proposed/boards/
docs/design-system/visual-parity/artifacts/proposed/components/
```

Future artifact naming should include:

- board number
- board slug
- proposed-state marker
- viewport or component marker if relevant
- revision marker if later approved

Example future names only:

- `board-01-proposed-navigation-shell-hero.png`
- `board-02-proposed-typography-actions.png`
- `component-proposed-wnyhs-primary-cta-default.png`

These examples are naming guidance only. They do not create files.

## 8. Proposed Board Data Requirements

Every component later rendered in the proposed visual board must include:

- canonical component name
- board number
- component family
- proposed standard source
- proposed surface/token/style direction
- proposed image role if any
- current issue addressed
- psychological goal
- accessibility goal
- operator review note field
- approval status field

Recommended data row fields:

| Field | Requirement |
| --- | --- |
| canonical component name | Must match VISPARITY003 naming. |
| board number | Must be Board 01 through Board 06. |
| component family | Navigation / shell, Page structure, Text, Actions, Containers, Strategic / unique, Forms, Images / assets, or Accessibility / states. |
| proposed standard source | Must cite VISPARITY007C, VISPARITY007D, VISPARITY005, VISPARITY007A, DESIGN002, PAGE_TOKEN_COMPLIANCE_GATE, CATEGORY003, or a named governing standard. |
| proposed surface/token/style direction | Must describe proposed direction without inventing final CSS values. |
| proposed image role if any | Must cite a VISPARITY005 image role or mark `None`. |
| current issue addressed | Must map to VISPARITY007D current concern or current issue addressed. |
| psychological goal | Must use VISPARITY007C psychology principles such as Trust, Safety, Intelligence, Premium quality, Comfort, Local reliability, or Technology made simple. |
| accessibility goal | Must describe contrast, focus, labels, tap targets, alt text, status clarity, or no image-only meaning where relevant. |
| operator review note field | Must remain blank or placeholder-only until VISPARITY007G. |
| approval status field | Must default to Proposed / Needs Operator Review. |

## 9. Limitations

This spec does not generate rendered appearance.

Final proposed visuals require later artifact generation.

This spec is not operator approval.

This spec does not authorize implementation.

This spec does not approve final visual standards.

This spec does not approve proposed visual standard.

This spec does not create CSS/token values.

This spec does not create a board image, screenshot, PDF, thumbnail, crop, generated image, Playwright baseline, hook, QA check, Active KAOS Rule, source change, CSS change, token change, image change, or route change.

## 10. Recommended Next Task

Recommended next task:

`VISPARITY007G - Operator Review Packet`

VISPARITY007G should create the operator review packet that pairs the current-state board specification from `VISPARITY007E_CURRENT_STATE_VISUAL_BOARD_SPEC_REV01.md` with this proposed visual board specification and records operator decision fields for every board region and canonical component.

## 11. Scope Compliance

VISPARITY007F creates the Proposed Visual Board specification only.

It includes:

- Purpose
- Boundary
- Source inputs
- Proposed Visual Board Set
- Board Layout Specification
- Proposed Visual Style Rules
- Proposed Board Artifact Plan
- Proposed Board Data Requirements
- Limitations
- Recommended next task

It does not:

- edit source code
- edit route files
- edit CSS
- edit tokens
- edit UI components
- edit images or assets
- create screenshots
- create visual boards
- generate images
- generate PDFs
- create Playwright tests
- create baseline folders
- create hooks
- create QA checks
- edit sitemap or robots
- edit runtime/API files
- edit HubSpot behavior
- edit Stripe/payment behavior
- edit scheduling
- edit Cloudflare config
- edit dependencies or package-lock
- approve final visual implementation
- approve proposed visual standard
- activate any KAOS rule
- merge
