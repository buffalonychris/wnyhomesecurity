# DESIGN003_WNYHS_SOLUTIONS_PAGE_VISUAL_PARITY_REV01

## Metadata

- **Title:** WNYHS Solutions Page Visual Parity Standard
- **Revision:** REV01
- **Status:** Working Standard
- **Owner Area:** Visual Governance / Public Website
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Related Structure Standard:** `docs/solution-system/SOLUTION002_WNYHS_SOLUTIONS_LISTING_PAGE_STANDARD_REV01.md`
- **Last Updated:** 2026-06-12
- **Implementation Authority:** This document does not authorize source, CSS, route, runtime, protected-system, pricing, asset-generation, or deployment changes by itself. Implementation requires a separate bounded task in the Master Task Register or an explicitly bounded work order.

---

## 1. Purpose

This standard defines how the WNYHS Solutions Landing Page must visually align with the approved Home Landing Page while maintaining its own page-specific structure.

The goal is visual parity, not identical content.

```text
Home Landing Page = accepted visual proof surface.
Solutions Landing Page = same visual language, different page structure.
```

---

## 2. Core Principle

All WNYHS public marketing pages should feel like one site.

The Solutions Landing Page must reuse the governed token CSS system and public visual primitives from `DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02` instead of drifting into a separate catalog/table/governance-report look.

Page-specific structure may differ, but the visual system must remain consistent.

---

## 3. Visual Proof Surface

The currently accepted proof surface is the Home Landing Page visual format, including:

- warm off-white page canvas
- dark rounded header/nav treatment
- large rounded content panels
- image-led cards
- warm bordered light cards
- dark premium Core panel
- gold/black CTA treatment
- soft warm borders and shadows
- Manrope heading / Inter body typography
- footer rhythm and version display

Future Solutions Landing Page work must visually reference that system.

---

## 4. Required Token / Primitive Usage

Solutions page implementation should use existing governed tokens and primitives wherever practical:

- `.wnyhs-page`
- `.wnyhs-shell`
- `.wnyhs-section`
- `.wnyhs-section-header`
- `.wnyhs-eyebrow`
- `.wnyhs-heading`
- `.wnyhs-description`
- `.wnyhs-card`
- `.wnyhs-card--solution`
- `.wnyhs-card-media`
- `.wnyhs-media`
- `.wnyhs-button`
- `.wnyhs-button--primary`
- `.wnyhs-button--secondary`
- `.wnyhs-section--dark`
- `.wnyhs-footer`

New selectors may be added for page-specific needs, but they should be semantic and reusable, such as:

- `.wnyhs-solutions-listing`
- `.wnyhs-solution-grid`
- `.wnyhs-solution-card`
- `.wnyhs-solution-card-media`
- `.wnyhs-solution-card-meta`
- `.wnyhs-vault-panel`
- `.wnyhs-core-value-panel`
- `.wnyhs-page-cta`

Avoid adding more one-off `packages-*` styling to the Solutions Listing page unless retained temporarily for route compatibility.

---

## 5. Required Visual Treatment

### 5.1 Page Shell

The Solutions Landing Page must use the same public shell rhythm as the Home Landing Page:

- centered page width
- warm off-white background
- consistent section spacing
- rounded panels
- warm-neutral borders
- no dense table/catalog appearance

### 5.2 Hero / Intro

The hero should be concise and visually similar to the Home Landing Page top-page treatment.

It may use a lighter intro panel rather than the full homepage hero image block, but it must not look like a plain admin/catalog page.

### 5.3 Solution Cards

Solution cards must be image-led.

Each solution card should visually use:

- image at top or side
- category/status eyebrow
- solution title
- short outcome copy
- CTA or link state
- warm light card surface
- rounded image corners
- hover/focus states consistent with Home Landing Page cards

Cards should not be dark mini-cards unless specifically inside a dark premium section.

### 5.4 Solution Grid

The solution grid should prioritize scannability:

- 2-column or 3-column desktop layout depending on available width
- 1-column mobile layout
- consistent image aspect ratios
- consistent card heights where practical
- clear category grouping or filtering without large standalone category cards

### 5.5 Vault Section

The Vault section should feel premium and custom, not like a second full catalog.

Preferred treatment:

- dark premium panel
- short explanatory headline/body
- compact bucket cards/chips
- quote-only/reviewed-individually language
- estimate CTA

### 5.6 Core Value Panel

The Core value panel appears after the Vault section.

It should visually align with the Home Landing Page Core panel and should include an image/media treatment where an approved Core image is available.

The Solutions page Core panel should emphasize:

- Core is normally obtained with the first WNYHS solution or package
- once Core exists, future supported solutions can be added to the same dashboard/control-plane foundation
- fewer scattered apps where supported
- customer-owned foundation
- expansion over time

### 5.7 Final CTA

The final CTA must visually match the Home Landing Page bottom CTA pattern where practical:

- centered/contained CTA panel
- clear headline
- short body copy
- Request Estimate primary action
- Call/Text action

---

## 6. Visual Non-Goals

The Solutions Landing Page should not visually behave like:

- a governance table
- a package matrix
- a hardware catalog
- a price sheet
- a BOM worksheet
- a dense internal operator catalog

It should feel like a homeowner-facing solution catalog.

---

## 7. Image Parity Requirement

Every public solution card should include an image or approved fallback image.

Image treatment must match Home Landing Page card behavior:

- consistent aspect ratio
- rounded corners
- object-fit crop behavior
- no stretched images
- no missing-image icons
- meaningful alt text

If an exact image does not exist, the implementation may use a closest-approved image and record image debt.

---

## 8. CSS Boundary

Implementation should avoid hardcoded colors outside the governed token system.

Preferred values should use existing CSS variables, such as:

- `--wnyhs-canvas`
- `--wnyhs-surface-raised`
- `--wnyhs-surface-soft`
- `--wnyhs-ink`
- `--wnyhs-ink-secondary`
- `--wnyhs-charcoal`
- `--wnyhs-gold`
- `--wnyhs-gold-strong`
- `--wnyhs-border-soft`
- existing `--kaec-*` aliases only where still part of current compatibility layer

If new tokens are needed, they must be added through a separate token-governance task or explicitly authorized by the implementation work order.

---

## 9. Relationship to Page Structure Governance

This visual parity standard governs the look and feel.

`SOLUTION002_WNYHS_SOLUTIONS_LISTING_PAGE_STANDARD_REV01.md` governs what appears on the page and in what order.

If visual parity and page structure appear to conflict, preserve both by using the required page structure with Home Landing Page visual primitives.

---

## 10. Claims and Pricing Boundaries

Visual implementation must not create or imply:

- public prices
- discount/urgency claims
- guaranteed outcomes
- theft/crime prevention
- water-damage/frozen-pipe prevention
- professional alarm monitoring
- police/fire/medical dispatch
- medical monitoring
- universal compatibility
- no-monthly-fees-in-every-case
- zero-cloud-in-every-case

Visual labels, badges, chips, and CTA text must remain claim-safe.

---

## 11. Protected Systems

This standard does not authorize changes to:

- HubSpot
- Stripe/payment
- Resend
- Gmail/Workspace
- scheduling
- API/runtime behavior
- Cloudflare configuration
- secrets
- dependencies
- package-lock
- protected routes
- lead-signal behavior
- request/estimate runtime behavior

---

## 12. Future Implementation Acceptance Criteria

A future Solutions page visual-parity implementation is acceptable only when:

1. The page looks visually related to the Home Landing Page.
2. Solution cards are image-led.
3. The page uses governed WNYHS tokens/primitives.
4. Package/category matrix styling is removed from the Solutions page body.
5. Vault appears as a premium but controlled custom section.
6. Core value panel appears after Vault and uses Home Landing Page-style panel/media treatment.
7. Final CTA matches the Home Landing Page CTA pattern.
8. Mobile and desktop layouts remain readable.
9. Footer/version display remain intact.
10. No pricing, unsupported claims, protected-system changes, or route/navigation behavior changes are introduced without separate authorization.
