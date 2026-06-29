# VISPARITY007E Current State Visual Board Spec REV01

Task ID: VISPARITY007E
Task Name: Current State Visual Board
Status: Docs-only visual board specification
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose

This document defines the Current State Visual Board specification for WNYHS visual parity.

It converts `VISPARITY007B_CURRENT_STATE_REFERENCE_REV01.md` current-state evidence and `VISPARITY007D_BEFORE_AFTER_VISUAL_COMPARISON_MATRIX_REV01.md` board planning into a future visual review artifact plan.

This is the before board specification. It prepares board generation for the current visual system and serves as the before board input for `VISPARITY007G - Operator Review Packet`.

## 2. Boundary

This is a docs-only visual board specification.

This task includes:

- current-state visual board planning
- board grouping rules
- board layout requirements
- current-state visual style rules
- future artifact output planning
- current board data requirements

This task does not include:

- no board generation
- no screenshots
- no image generation
- no implementation
- no source/CSS/token/image edits
- no Playwright
- no hooks/QA activation
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

- `VISPARITY007B_CURRENT_STATE_REFERENCE_REV01.md` - current-state visual reference and before-reference.
- `VISPARITY007D_BEFORE_AFTER_VISUAL_COMPARISON_MATRIX_REV01.md` - before/after visual comparison matrix and board planning.
- `VISPARITY007A_VISUAL_BASELINE_SCREENSHOT_MATRIX_REV01.md` - future viewport, state, and visual baseline matrix.
- `VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md` - canonical component names.
- `VISPARITY005_IMAGE_PARITY_AND_ASSET_USAGE_REGISTER_REV01.md` - image role, asset, and image parity evidence.

Supporting governing inputs:

- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

Read-only current evidence may be referenced later from:

- `src/styles/wnyhsVisualGovernance.css`
- `src/styles/homeSecurityPremium.css`
- `src/styles/qrLanding.css`
- `src/styles/canonicalEstimateForm.css`
- `src/index.css`
- `src/newsite/theme/tokens.css`

This task relies on existing VISPARITY007B evidence and does not inspect or edit source implementation.

## 4. Current State Board Set

Future Current State Visual Board artifacts must use exactly six board groups.

### Board 01 - Current Navigation / Shell / Hero

Components included:

- WNYHS Top Navigation
- WNYHS Mobile Navigation
- WNYHS Site Footer
- WNYHS QR Campaign Navigation
- WNYHS Page Shell
- WNYHS Hero Section
- WNYHS Page Intro
- WNYHS Final CTA Section

### Board 02 - Current Typography / Actions

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

### Board 03 - Current Containers / Cards / Tiles

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

### Board 04 - Current Forms

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

### Board 05 - Current Images / Assets / Proof

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

### Board 06 - Current Accessibility / States

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
- Current low-contrast / invisible-text examples if discoverable from existing evidence

## 5. Board Layout Specification

Each future board must use the same layout model so VISPARITY007G can compare and review boards consistently.

### Board 01 - Current Navigation / Shell / Hero

| Field | Requirement |
| --- | --- |
| Board title | Board 01 - Current Navigation / Shell / Hero |
| Objective | Show the current public page frame, top-level orientation, campaign navigation exception, page shell, hero, compact intro, and final CTA patterns. |
| Components included | WNYHS Top Navigation; WNYHS Mobile Navigation; WNYHS Site Footer; WNYHS QR Campaign Navigation; WNYHS Page Shell; WNYHS Hero Section; WNYHS Page Intro; WNYHS Final CTA Section. |
| Current-state evidence source | VISPARITY007B component table; VISPARITY007D board plan; header/footer standards; QR funnel standards. |
| Required labels | Canonical component name, current source/style evidence, current route family, current confidence level. |
| Required notes | Note where WNYHS main-site and QR/campaign navigation use different current vocabularies. |
| Current concern callouts | Mixed shell systems, QR divergence, footer parity uncertainty, mobile navigation evidence gaps, CTA duplication. |
| Screenshot/image placeholder requirements | Placeholder boxes only: `current screenshot placeholder`, `current cropped component placeholder`, and `source evidence note`. Do not create screenshots. |
| Operator review questions | Does this current shell represent the existing site honestly? Which route families need later current visual captures? Are QR navigation differences intentional current evidence or drift? |
| Future comparison target in VISPARITY007F | Proposed Navigation / Shell / Hero board. |

### Board 02 - Current Typography / Actions

| Field | Requirement |
| --- | --- |
| Board title | Board 02 - Current Typography / Actions |
| Objective | Show the current type hierarchy and action hierarchy across WNYHS, legacy, QR, and form vocabularies. |
| Components included | WNYHS Eyebrow; WNYHS Page Heading; WNYHS Section Heading; WNYHS Card Heading; WNYHS Body Copy; WNYHS Muted Copy; WNYHS Fine Print; WNYHS Primary CTA; WNYHS Secondary CTA; WNYHS Text Link CTA; WNYHS Phone CTA. |
| Current-state evidence source | VISPARITY007B typography reference and action/button reference; VISPARITY003 canonical names; DESIGN002 typography standard. |
| Required labels | Canonical component name, current selector/token vocabulary, surface context, state if applicable. |
| Required notes | Mark current differences among `.wnyhs-*`, `.hs-premium-*`, `.qr-*`, `.btn-*`, and form submit styles. |
| Current concern callouts | Low-contrast muted copy risk, duplicated button systems, inconsistent heading scale, small/fine-print readability risk, link affordance variance. |
| Screenshot/image placeholder requirements | Placeholder text samples only; no rendered screenshot, image, or generated board asset. |
| Operator review questions | Which current typography issues are most visible? Which action styles create confusion? Are current fine-print and muted-copy examples readable enough for review? |
| Future comparison target in VISPARITY007F | Proposed Typography / Actions board. |

### Board 03 - Current Containers / Cards / Tiles

| Field | Requirement |
| --- | --- |
| Board title | Board 03 - Current Containers / Cards / Tiles |
| Objective | Show current grouped surfaces, repeated cards, compact tiles, status blocks, package blocks, Core panel, and Vault tile evidence. |
| Components included | WNYHS Panel; WNYHS Feature Card; WNYHS Tile; WNYHS Proof Card; WNYHS Search Result Card; WNYHS Alert / Info Block; WNYHS Core Panel; WNYHS Package Tier Block; WNYHS Vault Tile. |
| Current-state evidence source | VISPARITY007B container/reference surfaces; VISPARITY003 canonical names; VISPARITY007D comparison matrix. |
| Required labels | Canonical component name, component family, current surface vocabulary, current concern summary. |
| Required notes | Mark where panel/card/tile terms overlap in current implementation evidence. |
| Current concern callouts | Panel/card boundary ambiguity, duplicated card systems, status taxonomy gaps, package/review posture mix, Vault image absence. |
| Screenshot/image placeholder requirements | Placeholder frames only for future current-state crops. Do not create component crops. |
| Operator review questions | Which current card families feel inconsistent? Is the current Core panel evidence enough for later comparison? Should Vault remain text-first in the current board? |
| Future comparison target in VISPARITY007F | Proposed Containers / Cards / Tiles board. |

### Board 04 - Current Forms

| Field | Requirement |
| --- | --- |
| Board title | Board 04 - Current Forms |
| Objective | Show current form shell, field, label, help, error, select, textarea, submit, and validation-state evidence without touching runtime behavior. |
| Components included | WNYHS Form Shell; WNYHS Form Field; WNYHS Form Label; WNYHS Form Help Text; WNYHS Form Error Text; WNYHS Select Field; WNYHS Textarea Field; WNYHS Submit Button; Validation states. |
| Current-state evidence source | VISPARITY007B form reference; QR funnel standards; PAGE_TOKEN_COMPLIANCE_GATE. |
| Required labels | Canonical component name, current form context, current state, current style/source evidence. |
| Required notes | State that form visuals are evidence only and do not authorize payload, field, consent, source tracking, or API changes. |
| Current concern callouts | Split form shells, label/helper contrast risk, incomplete field-state tokens, error mapping gaps, submit/button overlap. |
| Screenshot/image placeholder requirements | Static placeholders for default, focus, disabled, error, success, and loading states. Do not run forms. |
| Operator review questions | Which current form states need later captures? Are labels visibly distinct from help text? Do current error and submit states need special operator attention? |
| Future comparison target in VISPARITY007F | Proposed Forms board. |

### Board 05 - Current Images / Assets / Proof

| Field | Requirement |
| --- | --- |
| Board title | Board 05 - Current Images / Assets / Proof |
| Objective | Show current image roles, asset-role concerns, dashboard/Core proof visuals, gallery/proof posture, QR image separation, and logo/icon role evidence. |
| Components included | WNYHS Hero Image; WNYHS Category Image; WNYHS Solution Image; WNYHS Proof Image; WNYHS QR Image; WNYHS Logo Mark; WNYHS Icon Mark; WNYHS Dashboard Preview Block; WNYHS Category Image Block; WNYHS Solution Scenario Block; WNYHS Our Work Gallery Block; WNYHS QR Campaign Block. |
| Current-state evidence source | VISPARITY005 image register; VISPARITY007B image-role reference; brand asset standards; CATEGORY003. |
| Required labels | Canonical image/component name, current asset role, current source folder or reference source, current confidence level. |
| Required notes | Distinguish web image evidence, print/QR asset evidence, governed brand asset evidence, and inferred current image state. |
| Current concern callouts | Multi-role asset reuse, uneven category asset packages, QR web/print role split, Core image reuse, proof/story verification gap, icon/logo role inconsistency. |
| Screenshot/image placeholder requirements | Placeholder image slots only. Do not create, copy, resize, crop, replace, or generate images. |
| Operator review questions | Which image roles need later current screenshots? Are QR web and print assets separated clearly enough? Which asset-role uncertainties must be resolved before proposed comparison? |
| Future comparison target in VISPARITY007F | Proposed Images / Assets / Proof board. |

### Board 06 - Current Accessibility / States

| Field | Requirement |
| --- | --- |
| Board title | Board 06 - Current Accessibility / States |
| Objective | Show current interactive and accessibility-state evidence for later review of focus, hover, active, disabled, error, success, loading, mobile tap targets, and text contrast examples. |
| Components included | Focus state; Hover state; Active state; Disabled state; Error state; Success state; Loading state; Mobile tap targets; Text contrast examples; Current low-contrast / invisible-text examples if discoverable from existing evidence. |
| Current-state evidence source | VISPARITY007A component state matrix; VISPARITY007B issue summary and form/action references; PAGE_TOKEN_COMPLIANCE_GATE. |
| Required labels | State name, affected canonical component, current evidence source, confidence level, current concern summary. |
| Required notes | Mark unknown states as uncertainty instead of inventing evidence. |
| Current concern callouts | Low-contrast or invisible-text risk, inconsistent focus states, mobile tap target uncertainty, disabled/loading state gaps, error/success surface uncertainty. |
| Screenshot/image placeholder requirements | Placeholder state frames only. Do not run Playwright, create screenshots, or activate QA. |
| Operator review questions | Which current states need rendered confirmation later? Which contrast examples are severe enough to prioritize? Which unknown states should remain marked uncertain? |
| Future comparison target in VISPARITY007F | Proposed Accessibility / States board. |

## 6. Current State Visual Style Rules

Future current-state boards must represent current state honestly.

Current boards must:

- show current state honestly
- do not improve current state
- do not clean up current styles
- preserve current visual inconsistencies as review evidence
- use labels to identify current source/style vocabulary where possible
- mark uncertainty where current visual evidence is incomplete
- distinguish actual current evidence from inferred current state
- preserve current mixed vocabularies such as WNYHS, premium, QR, global button/card, form, and prototype token names when they are relevant evidence
- record current concern callouts without implying that a fix is approved
- avoid presenting current examples as approved final standards

Current boards must not:

- normalize current inconsistencies
- replace current labels with proposed labels except for canonical component names
- hide current low-contrast, wrapping, spacing, image-role, or state gaps
- generate idealized mockups of current components
- use VISPARITY007C proposed direction as current evidence

## 7. Current Board Artifact Plan

Future artifact outputs only:

- current-state board image set
- current-state board PDF section
- board thumbnails for KAOS dashboard later
- component-level cropped images if later generated

No artifacts are generated in this task.

Suggested future storage paths only; do not create them:

```text
docs/design-system/visual-parity/artifacts/current-state/
docs/design-system/visual-parity/artifacts/current-state/boards/
docs/design-system/visual-parity/artifacts/current-state/components/
```

Future artifact naming should include:

- board number
- board slug
- current-state marker
- viewport or component marker if relevant
- revision marker if later approved

Example future names only:

- `board-01-current-navigation-shell-hero.png`
- `board-02-current-typography-actions.png`
- `component-current-wnyhs-primary-cta-default.png`

These examples are naming guidance only. They do not create files.

## 8. Current Board Data Requirements

Every component later rendered in the current visual board must include:

- canonical component name
- board number
- component family
- current evidence source
- current style/token/class evidence
- current concern summary
- confidence level
- operator review note field

Recommended data row fields:

| Field | Requirement |
| --- | --- |
| canonical component name | Must match VISPARITY003 naming. |
| board number | Must be Board 01 through Board 06. |
| component family | Navigation / shell, Page structure, Text, Actions, Containers, Strategic / unique, Forms, Images / assets, or Accessibility / states. |
| current evidence source | Must cite VISPARITY007B, VISPARITY005, VISPARITY007A, VISPARITY007D, or a named governing standard/source evidence note. |
| current style/token/class evidence | Must preserve current vocabulary such as `.wnyhs-*`, `.hs-premium-*`, `.qr-*`, `.btn-*`, `.estimate-*`, global tokens, or current asset-role evidence when known. |
| current concern summary | Must describe current risks or gaps without approving a fix. |
| confidence level | Must be High, Medium, Low, or Unknown. |
| operator review note field | Must remain blank or placeholder-only until VISPARITY007G. |

## 9. Limitations

This spec does not prove rendered appearance.

Final current-state visuals require later artifact generation.

This spec is not an endorsement of current design.

This spec does not authorize implementation.

This spec does not approve visual standards.

This spec does not create a board image, screenshot, PDF, thumbnail, crop, Playwright baseline, hook, QA check, Active KAOS Rule, source change, CSS change, token change, image change, or route change.

## 10. Recommended Next Task

Recommended next task:

`VISPARITY007F - Proposed Visual Board`

VISPARITY007F should create the proposed visual board specification from `VISPARITY007C_PROPOSED_VISUAL_STANDARD_REFERENCE_REV01.md` and `VISPARITY007D_BEFORE_AFTER_VISUAL_COMPARISON_MATRIX_REV01.md` without creating source edits, CSS edits, token edits, screenshots, generated images, board image artifacts, PDFs, Playwright, hooks, QA automation, or implementation.

## 11. Scope Compliance

VISPARITY007E creates the Current State Visual Board specification only.

It includes:

- Purpose
- Boundary
- Source inputs
- Current State Board Set
- Board Layout Specification
- Current State Visual Style Rules
- Current Board Artifact Plan
- Current Board Data Requirements
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
- activate any KAOS rule
- merge
