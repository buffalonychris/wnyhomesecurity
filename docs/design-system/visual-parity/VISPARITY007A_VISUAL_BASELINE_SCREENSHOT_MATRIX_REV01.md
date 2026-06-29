# VISPARITY007A Visual Baseline Screenshot Matrix REV01

Task ID: VISPARITY007A
Task Name: Visual Baseline Screenshot Matrix
Status: Screenshot matrix/spec only
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Boundary

This document defines the future visual baseline screenshot matrix for the future kitchen-sink visual QA reference page.

It is a screenshot matrix only.
It creates no implementation.
It creates no screenshot generation.
It creates no Playwright tests.
It makes no route/source/CSS/token/image edits.
It creates no routes.
It creates no React components.
It creates no CSS.
It creates no tokens.
It creates no hooks.
It activates no QA automation.
It creates no screenshots.
It creates no baseline folders.
It does not approve final visual implementation.
It does not create an Active KAOS Rule.

Protected systems and forbidden implementation surfaces remain out of scope:

- HubSpot / CRM
- Stripe/payment
- scheduling/calendar
- Lead Signal and requestId
- QRLanding attribution/runtime behavior
- Resend/email runtime
- Cloudflare configuration
- secrets and environment values
- source files, routes, UI components, CSS, tokens, images/assets, sitemap, robots, dependencies, and package-lock

## Source Inputs

Primary VISPARITY inputs:

- `VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`
- `VISPARITY002_PUBLIC_MARKETING_VISUAL_PARITY_TARGET_MATRIX_REV01.md`
- `VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md`
- `VISPARITY004_CSS_TOKEN_MAPPING_AND_GAP_REGISTER_REV01.md`
- `VISPARITY005_IMAGE_PARITY_AND_ASSET_USAGE_REGISTER_REV01.md`
- `VISPARITY006_PUBLIC_MARKETING_PAGE_COMPLIANCE_PLAN_REV01.md`
- `VISPARITY007_KITCHEN_SINK_VISUAL_QA_REFERENCE_PAGE_SPEC_REV01.md`

Targeted governing inputs:

- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

## 1. Purpose

The Visual Baseline Screenshot Matrix is the future capture contract for the kitchen-sink visual QA reference page.

The matrix defines:

- the visual baseline contract for future screenshot review
- future Playwright/Chromium screenshot coverage expectations
- future before/after visual comparisons
- future visual QA/eval baseline planning
- viewport, region, state, filename, priority, and storage rules

The matrix does not create screenshots or automation. It only defines what a later bounded task should capture after the reference page exists and after operator approval authorizes baseline work.

## 2. Definitions

| Term | Definition |
| --- | --- |
| viewport | A fixed browser width and height used for a future screenshot capture. |
| full-page screenshot | A capture of the complete rendered kitchen-sink page from top to bottom at one viewport. |
| section screenshot | A capture clipped to one named page section, such as hero, forms, QR components, or footer. |
| component screenshot | A capture clipped to one component example, such as a button, card, field, tile, or image block. |
| state screenshot | A capture of a component in a specific visual or interaction state, such as hover, focus, active, disabled, error, success, loading, open, or expanded. |
| baseline filename | A stable kebab-case PNG filename that identifies page, viewport, region, capture type, and state. |
| comparison region | The exact future page area or component bounding region used for visual comparison. |

## 3. Viewport / Breakpoint Contract

Future screenshot capture should use these viewport codes and sizes.

| Code | Viewport name | Size | Primary use |
| --- | --- | --- | --- |
| v1 | Mobile Small | 375 x 812 | Narrow mobile layout, small tap targets, text wrapping. |
| v2 | Mobile Large | 414 x 896 | Common large-phone layout, form and CTA stack checks. |
| v3 | Tablet | 768 x 1024 | Tablet portrait layout, grid transitions, nav/footer wrapping. |
| v4 | Laptop | 1280 x 900 | Standard desktop review and most section baselines. |
| v5 | Desktop Large | 1440 x 900 | Large desktop layout and hero/card density review. |
| v6 | Desktop XL | 1920 x 1080 | High-resolution desktop, wide hero and full-page review. |
| v7 | Desktop Wide | 2560 x 1440 | Wide-screen stress check for max-width and centered composition. |

Minimum initial baseline set:

- P0 full-page captures: v1, v3, v4, v6
- P0 section captures: v1, v4, v6
- P0 component/state captures: v2, v4
- P1 desktop/wide verification: v5, v7
- P2 supplemental captures: any viewport needed to diagnose a layout risk

## 4. Screenshot Strategy

Future screenshot capture should use a layered strategy:

- full-page captures for global layout, section order, footer reach, and unexpected overflow
- section captures for stable visual areas such as navigation, hero, typography, panels, forms, QR, Core, package blocks, gallery, and footer
- component captures for reusable visual atoms and molecules such as buttons, cards, tiles, fields, badges, alerts, proof cards, and image frames
- state captures for interactive and validation states such as hover, focus, active, disabled, error, success, loading, open, and expanded
- mobile/desktop-specific captures where a component changes structure across breakpoints
- before/after captures only after a later task defines the current-state and proposed-standard comparison flow

Full-page captures should catch whole-page drift. Section captures should be the main design-review evidence. Component and state captures should support precise regression checks when later implementation changes touch a visual component.

## 5. Screenshot Matrix

This matrix defines future captures for the kitchen-sink visual QA reference page only.

| Screenshot ID | Section/component | Capture type | Region description | States to capture | Viewports | Baseline filename convention | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VB-001 | Full page | full-page screenshot | Complete kitchen-sink page from top to bottom. | default | v1, v3, v4, v6, v7 | `kitchen-sink-{viewport}-full-page.png` | P0 | Primary visual baseline for whole-page drift, section order, spacing, and overflow. |
| VB-002 | Navigation | section screenshot | Main-site navigation plus any conceptual mobile drawer reference area. | default, hover, focus, open/expanded | v1, v2, v4, v6 | `kitchen-sink-{viewport}-navigation-section-{state}.png` | P0 | Must preserve header/footer standard posture and not test route behavior. |
| VB-003 | Global header | section screenshot | Brand mark, text lockup, top-level action area, and phone/contact action if present. | default, focus | v1, v4, v6 | `kitchen-sink-{viewport}-global-header-section-{state}.png` | P0 | Separate from full navigation when the future page distinguishes header from menu. |
| VB-004 | Hero | section screenshot | Primary hero reference section including heading, support copy, CTA row, proof elements, and image/panel area. | default, hover, focus | v1, v3, v4, v6, v7 | `kitchen-sink-{viewport}-hero-section-{state}.png` | P0 | Include mobile stack, laptop standard, and wide max-width behavior. |
| VB-005 | Typography | section screenshot | Eyebrow, H1, H2, H3, H4, body, muted, fine print, legal, labels, help, and error text examples. | default, long-text | v1, v4, v6 | `kitchen-sink-{viewport}-typography-section-{state}.png` | P0 | Verifies Inter/Manrope posture, hierarchy, wrapping, and contrast. |
| VB-006 | Buttons | component screenshot | Primary CTA, secondary CTA, text link CTA, phone CTA, submit button, and compact button group. | default, hover, focus, active, disabled, loading | v2, v4 | `kitchen-sink-{viewport}-buttons-component-{state}.png` | P0 | Must include `kitchen-sink-v4-primary-button-hover-component.png` as an example-specific candidate. |
| VB-007 | Panels | section screenshot | Light, dark, campaign, legal, form, Core, package, and final CTA panel examples. | default, focus-within where applicable | v1, v4, v6 | `kitchen-sink-{viewport}-panels-section-{state}.png` | P0 | Confirms surface, border, radius, text contrast, and no excessive nested borders. |
| VB-008 | Cards | section screenshot | Feature card, proof card, search result card, support card, package card, and gallery card examples. | default, hover, focus | v1, v3, v4, v6 | `kitchen-sink-{viewport}-cards-section-{state}.png` | P0 | Grid wrapping and equal-height behavior should be visible. |
| VB-009 | Tiles | section screenshot | Category, routine, suggestion, and compact tile examples. | default, hover, focus, active | v1, v2, v4 | `kitchen-sink-{viewport}-tiles-section-{state}.png` | P1 | Captures stable dimensions and small-label wrapping. |
| VB-010 | Core Panel | section screenshot | WNYHS Core reference section with dashboard, phone, logo/support image hierarchy, copy, and CTA. | default, focus | v1, v4, v6 | `kitchen-sink-{viewport}-core-panel-section-{state}.png` | P0 | Must show dashboard/phone legibility without relying on image text as the only meaning. |
| VB-011 | Vault Tiles | section screenshot | Custom/review-only Vault tile examples with caveat/status posture. | default, hover, focus | v1, v4 | `kitchen-sink-{viewport}-vault-tiles-section-{state}.png` | P1 | No private BOM, cost, or internal pricing detail. |
| VB-012 | Package blocks | section screenshot | Starting-point block, detail/review block, package caveat/status text, and package CTA examples. | default, hover, focus | v1, v3, v4, v6 | `kitchen-sink-{viewport}-package-blocks-section-{state}.png` | P0 | Must preserve no BOM exposure and no unapproved pricing authority. |
| VB-013 | Forms | section screenshot | Form shell with text, email, phone, textarea, select, checkbox, radio, submit, helper, validation, and status examples. | default, focus, disabled, error, success, loading | v1, v2, v4, v6 | `kitchen-sink-{viewport}-forms-section-{state}.png` | P0 | Visual-only; no payload, CRM, support API, consent, or requestId behavior. |
| VB-014 | Alerts/banners | component screenshot | Info, empty, warning candidate, error, success, and review-only status blocks. | default, error, success, warning | v1, v4 | `kitchen-sink-{viewport}-alerts-banners-component-{state}.png` | P1 | Status taxonomy is future candidate only. |
| VB-015 | Proof/trust cards | section screenshot | Proof-safe card set, example captions, safe-label posture, and CTA/link focus examples. | default, hover, focus | v1, v4, v6 | `kitchen-sink-{viewport}-proof-trust-cards-section-{state}.png` | P1 | Must not imply unverified proof, fake metrics, or unsupported outcomes. |
| VB-016 | Image gallery | section screenshot | Gallery image cards, captions, focus states, mobile crops, and proof/example labels. | default, hover, focus | v1, v3, v4, v6 | `kitchen-sink-{viewport}-image-gallery-section-{state}.png` | P1 | Checks image frame, caption readability, alt-role documentation, and crop safety. |
| VB-017 | Image roles | section screenshot | Hero, category, solution, QR, Core, Vault placeholder, dashboard, gallery, logo, and icon role examples. | default | v1, v4, v6 | `kitchen-sink-{viewport}-image-roles-section.png` | P0 | Aligns with VISPARITY005 image role names and CATEGORY003 image distinctions. |
| VB-018 | QR components | section screenshot | QR campaign nav, hero, proof strip, benefit cards, next-step cards, QR image, and contact path examples. | default, hover, focus | v1, v2, v4 | `kitchen-sink-{viewport}-qr-components-section-{state}.png` | P0 | Must preserve QR-specific structure and protected source/form boundaries. |
| VB-019 | Footer | section screenshot | Full public footer and reduced campaign close example. | default, hover, focus | v1, v3, v4, v6 | `kitchen-sink-{viewport}-footer-section-{state}.png` | P0 | Verifies one WNYHS footer pattern and footer link readability. |
| VB-020 | Accessibility states | section screenshot | Keyboard focus, tab order reference, contrast stress examples, long labels, short labels, links, form errors, and mobile target examples. | focus, long-text, error, open/expanded | v1, v2, v4 | `kitchen-sink-{viewport}-accessibility-states-section-{state}.png` | P0 | Required for future visual QA/eval baseline planning. |
| VB-021 | Mobile-specific navigation | section screenshot | Narrow-header and mobile drawer/collapsed reference state. | default, open/expanded, focus | v1, v2 | `kitchen-sink-{viewport}-mobile-navigation-section-{state}.png` | P1 | Mobile-only capture; no route or menu behavior implementation in this task. |
| VB-022 | Desktop-specific layout | section screenshot | Desktop grid, max-width, hero width, panel rhythm, and footer composition. | default | v4, v5, v6, v7 | `kitchen-sink-{viewport}-desktop-layout-section.png` | P1 | Detects overly wide stretched content at Desktop Wide. |
| VB-023 | Legal/review text | section screenshot | Legal section, fine print, review-only caveat, links, and readable measure. | default, hover, focus | v1, v4 | `kitchen-sink-{viewport}-legal-review-text-section-{state}.png` | P2 | Useful for future legal/review visual cleanup. |
| VB-024 | Comparison anchor set | section screenshot | Stable anchor regions for future before/after capture alignment. | default | v1, v4, v6 | `kitchen-sink-{viewport}-comparison-anchors-section.png` | P2 | Future candidate only; no screenshot capture in this task. |

## 6. Component State Capture Matrix

Future state captures should use the smallest stable component region that still shows surrounding context needed to judge the state.

| State | Required examples | Capture rule | Priority |
| --- | --- | --- | --- |
| default | All P0 components and sections | Capture the normal rendered component with no pointer or keyboard state. | P0 |
| hover | Buttons, links, cards, tiles, nav items, gallery cards, QR cards | Capture only where hover creates visible style change. | P0 for actions, P1 for cards/tiles |
| focus | Navigation, links, CTAs, cards if linked, tiles, form fields, search, QR actions, footer links | Keyboard-visible focus must be clear in the screenshot. | P0 |
| active | Buttons, tiles, navigation controls if applicable | Use only for components with a distinct active/pressed state. | P1 |
| disabled | Buttons, submit controls, form fields, select, textarea | Disabled text and surface must remain understandable. | P0 for form controls |
| error | Field error, form error, alert/error block | Capture field-level and form-level error examples. | P0 |
| success | Form success/status block and success/info candidate | Capture only visual status, not runtime submission behavior. | P1 |
| loading | Submit button, form section, card/list loading if future reference page includes examples | Capture as static state; no actual async behavior required. | P1 |
| open/expanded | Mobile navigation, disclosure, accordion, select-like visual example if present | Capture expanded state and focus boundary where applicable. | P1 |

State capture must not require real CRM writes, payment events, scheduling actions, support API calls, or route navigation.

## 7. Baseline Naming Rules

Future baseline filenames must use kebab-case and end in `.png`.

Required convention:

```text
kitchen-sink-{viewport}-{section}-{type}-{state}.png
```

Rules:

- `{viewport}` must use the viewport code from this matrix: `v1` through `v7`.
- `{section}` must be a kebab-case region name such as `hero`, `forms`, `qr-components`, or `core-panel`.
- `{type}` must be one of `full-page`, `section`, `component`, or `state`.
- `{state}` may be omitted for default section captures only when the filename remains unambiguous.
- Use stable component names, not transient CSS selectors.
- Do not include dates, branch names, commit hashes, environment names, or operator names in baseline filenames.
- Store only PNG baseline files in the future baseline folder.

Required examples:

- `kitchen-sink-v1-full-page.png`
- `kitchen-sink-v4-hero-section.png`
- `kitchen-sink-v4-primary-button-hover-component.png`
- `kitchen-sink-v2-form-error-section.png`

Additional examples:

- `kitchen-sink-v4-forms-section-focus.png`
- `kitchen-sink-v1-qr-components-section-default.png`
- `kitchen-sink-v6-core-panel-section-default.png`
- `kitchen-sink-v4-image-gallery-section-focus.png`

## 8. Baseline Storage Plan

Future candidate only. Do not create this folder in this task.

Suggested future folder:

```text
tests/visual-baselines/kitchen-sink/
```

Future storage rules:

- Store approved baseline PNG files only after operator approval.
- Keep generated comparison artifacts outside the approved baseline folder unless a later QA task defines otherwise.
- Do not store screenshots that contain secrets, private URLs, customer data, environment values, or protected operational data.
- Do not store screenshots of payment, CRM, scheduling, operator, or internal runtime flows as part of this kitchen-sink baseline folder.
- If baselines are regenerated, record the approval reason in the future task summary or PR.

## 9. Comparison Strategy

Future candidate only. No comparison tooling is activated by this document.

Recommended comparison layers:

- pixel diff threshold: start conservative and treat failures as review signals until a later QA task defines pass/fail policy
- layout shift detection: compare section bounding boxes, grid wrapping, CTA alignment, and footer placement
- color/contrast loss detection: flag major changes to text visibility, CTA contrast, field contrast, muted copy, and dark-panel readability
- missing content detection: flag absent canonical component examples, empty images, missing captions, missing labels, or missing footer/header regions
- manual side-by-side review: required before any baseline update is accepted

Comparison should prioritize stable reference regions over full-page pixel strictness. Full-page captures are valuable for global drift, but component and section regions should be the future source of detailed decisions.

## 10. Priority Rules

| Priority | Meaning | Required behavior |
| --- | --- | --- |
| P0 | Required for initial baseline | Must be captured before a future screenshot baseline is considered complete. |
| P1 | Strongly recommended | Should be captured unless a later bounded task documents why it is deferred. |
| P2 | Optional/nice-to-have | Useful for diagnostics, edge cases, or later maturity work. |

P0 coverage must include:

- full page
- navigation
- global header
- hero
- typography
- buttons
- panels
- cards
- Core Panel
- package blocks
- forms
- image roles
- QR components
- footer
- accessibility states

P1 coverage should include:

- tiles
- Vault Tiles
- alerts/banners
- proof/trust cards
- image gallery
- mobile-specific navigation
- desktop-specific layout

P2 coverage may include:

- legal/review text
- comparison anchors
- extra breakpoint-specific evidence
- additional future component variants

## 11. Before/After Visual Decision Workflow

Future usage should follow this decision workflow:

1. Current-state captures: capture the existing rendered reference or current page target before a visual change.
2. Proposed-standard captures: capture the proposed kitchen-sink reference or changed page after the proposed visual standard is applied.
3. Side-by-side comparison: compare current-state captures and proposed-standard captures by viewport and region.
4. Operator design approval: require operator approval before treating the proposed standard as accepted.
5. Implementation only after approval: make route/source/CSS/token/image implementation changes only in a later bounded task that explicitly authorizes those files and surfaces.

This workflow is a future review model only. It does not approve implementation or baseline regeneration in this task.

## 12. Future Source Documents

Future docs only:

- `VISPARITY007B - Current State Reference`
- `VISPARITY007C - Proposed Visual Standard Reference`
- `VISPARITY007D - Before/After Comparison Matrix`

Those future documents should remain docs-only unless a later bounded work order explicitly authorizes implementation or screenshot generation.

## 13. Recommended Next Task

Recommended next task:

`VISPARITY007B - Current State Reference`

VISPARITY007B should define the future current-state visual reference inventory for the kitchen-sink comparison workflow without creating screenshots, automation, source edits, routes, CSS, tokens, images, hooks, or QA checks unless separately authorized.

## Scope Compliance

VISPARITY007A creates the Visual Baseline Screenshot Matrix only.

It includes:

- Purpose
- Boundary
- Definitions
- Viewport / breakpoint contract
- Screenshot strategy
- Screenshot matrix
- Component state capture matrix
- Baseline naming rules
- Baseline storage plan
- Comparison strategy
- Priority rules
- Before/after visual decision workflow
- Future source documents
- Recommended next task

It does not:

- edit source code
- edit route files
- edit CSS
- edit tokens
- edit UI components
- edit images or assets
- create screenshots
- create Playwright tests
- create hooks
- create QA checks
- create baseline folders
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
