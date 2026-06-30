# PAGE_TOKEN_COMPLIANCE_GATE_REV01

## Metadata

- **Title:** WNYHS Public Page Token Compliance Gate
- **Revision:** REV01
- **Status:** Working Standard
- **Owner Area:** Visual Governance / Public Website
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Related Standards:**
  - `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
  - `docs/governance/DESIGN003_WNYHS_SOLUTIONS_PAGE_VISUAL_PARITY_REV01.md`
  - `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
  - `docs/solution-system/SOLUTION002_WNYHS_SOLUTIONS_LISTING_PAGE_STANDARD_REV01.md`
- **Last Updated:** 2026-06-12
- **Implementation Authority:** This document does not authorize source, CSS, route, runtime, protected-system, pricing, content, asset-generation, or deployment changes by itself. Implementation requires a separate bounded task in the Master Task Register or an explicitly bounded work order.

---

## 1. Purpose

This standard creates a standing compliance gate for every future WNYHS public web-page edit.

The goal is to keep the website moving toward a fully token-governed visual system while preserving page-specific structure and avoiding one-off styling drift.

---

## 2. Standing Compliance Question

Before editing any public web page, Codex and the dispatcher must ask:

```text
Is this page compliant with the current Token CSS Governance being used by the Home Landing Page?
```

If the answer is no, the work order must either:

1. bring the touched page/surface into token-governed visual parity within the bounded task scope, or
2. explicitly document that visual parity is out of scope and create a follow-up task.

A public page task must not silently add new visual drift.

---

## 3. Two-Gate Page Review Model

Every public page task must pass two gates.

### Gate 1 — Page Structure Gate

Ask:

```text
Does this page follow its defined page-type structure?
```

Page structure is page-specific.

Examples:

- Home Landing Page has its own broad orientation / category / package / solution / Core / CTA structure.
- Solutions Landing Page has its own hero / image-led grid / Vault / Core / CTA structure.
- Solution Detail Pages have their own hero / problem / setup / outcome / pieces / sample / CTA structure.
- Vault/custom surfaces have their own custom quote-reviewed structure.

A page should not borrow another page's structure unless governance explicitly allows it.

### Gate 2 — Token Visual Parity Gate

Ask:

```text
Does this page visually comply with the homepage-derived WNYHS token CSS system?
```

Visual language is shared and token-governed.

The page should use the shared WNYHS visual system unless a page-specific governance document explicitly defines a compatible variant.

---

## 4. Homepage as Current Visual Proof Surface

The current Home Landing Page is the accepted public visual proof surface.

Future public page edits should visually align to its system, including:

- warm off-white public canvas
- dark rounded navigation/header treatment where applicable
- Manrope heading typography
- Inter body/UI typography
- image-led card language
- warm bordered light surfaces
- dark premium emphasis panels
- gold/black primary CTA treatment
- charcoal/outline secondary CTA treatment
- rounded section panels
- soft warm borders and shadows
- quiet structured footer and version display

This does not require every page to have the same sections. It requires every page to feel like the same site.

---

## 5. Required Token CSS Discipline

Future public page tasks must prefer existing governed WNYHS tokens and primitives.

Current governed token source:

```text
src/styles/wnyhsVisualGovernance.css
```

Preferred existing primitive classes include:

- `.wnyhs-page`
- `.wnyhs-shell`
- `.wnyhs-section`
- `.wnyhs-section-header`
- `.wnyhs-eyebrow`
- `.wnyhs-heading`
- `.wnyhs-description`
- `.wnyhs-card`
- `.wnyhs-card--category`
- `.wnyhs-card--package`
- `.wnyhs-card--solution`
- `.wnyhs-card-media`
- `.wnyhs-media`
- `.wnyhs-button`
- `.wnyhs-button--primary`
- `.wnyhs-button--secondary`
- `.wnyhs-section--dark`
- `.wnyhs-footer`

Page-specific selectors are allowed only when semantic and compatible with the token system.

Preferred naming pattern:

```text
.wnyhs-[page-or-surface]-[element]
```

Examples:

- `.wnyhs-solutions-listing`
- `.wnyhs-solution-grid`
- `.wnyhs-solution-card`
- `.wnyhs-vault-panel`
- `.wnyhs-core-value-panel`
- `.wnyhs-page-cta`
- `.wnyhs-solution-detail`
- `.wnyhs-solution-detail-sample`

---

## 6. Forbidden Visual Drift

Future public page tasks must not introduce:

- arbitrary one-off colors outside the token system
- new button styles that bypass WNYHS button primitives
- new card systems that bypass WNYHS card primitives
- new typography stacks outside the governed Inter/Manrope standard
- page-specific spacing systems that conflict with WNYHS section/card rhythm
- raw dark/blue/gradient treatments that recreate legacy visual drift
- new image treatments that stretch, distort, or visually conflict with WNYHS cards
- print or sticky header behavior that obscures page content

If a new token is required, it must be introduced through an explicit token-governance task or be explicitly authorized in a bounded work order.

---

## 7. Required Work Order Preflight Block

Every future public-page Codex prompt should include this preflight block or a direct reference to this document:

```text
TOKEN CSS GOVERNANCE PREFLIGHT

Before editing this page, inspect whether the target page is visually compliant with the current homepage-derived WNYHS token CSS system.

If it is not compliant, the task must either:
1. bring touched surfaces into token-governed visual parity within the bounded scope, or
2. explicitly document why visual parity is out of scope and create a follow-up task.

Do not introduce one-off colors, spacing systems, button styles, card systems, or typography outside the governed token system.

Page structure is page-specific. Visual language is shared and token-governed.
```

---

## 8. Public Page Task Acceptance Criteria

A future public page task is acceptable only when the final summary answers:

1. Which page type was touched?
2. Which page-structure standard controls that page?
3. Was the page compliant with current token CSS governance before the task?
4. What token/governed primitives were used or preserved?
5. Were any one-off styles added?
6. If one-off styles were added, why were they necessary and were they token-compatible?
7. Were any raw colors introduced?
8. Were button/card/typography systems kept aligned with the homepage visual system?
9. Were protected systems untouched?
10. Was a follow-up task created for any remaining visual parity gap?

---

## 9. Relationship to Page Structure Standards

This document governs cross-site visual compliance behavior.

It does not replace page-specific structure standards.

Examples:

- Home Landing Page structure belongs in homepage/page-layout governance.
- Solutions Landing Page structure belongs in `SOLUTION002_WNYHS_SOLUTIONS_LISTING_PAGE_STANDARD_REV01.md`.
- Solution Detail Page structure belongs in the current/future solution detail standard.
- Vault/custom visual rules belong in Vault/offer governance and related visual governance.

If a page-specific structure document and visual-token compliance appear to conflict, preserve the page structure and implement it using token-governed visual primitives.

---

## 10. Protected-System Boundary

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
- route/navigation behavior
- lead-signal behavior
- request/estimate runtime behavior

---

## 11. Pricing and Claims Boundary

Token compliance work must not introduce:

- public prices
- supplier costs
- BOM values
- Stripe product IDs
- checkout IDs
- quote calculations
- discount/urgency claims
- guaranteed outcomes
- theft/crime prevention claims
- water-damage/frozen-pipe prevention claims
- professional alarm monitoring claims
- police/fire/medical dispatch claims
- medical monitoring claims
- universal compatibility claims
- no-monthly-fees-in-every-case claims
- zero-cloud-in-every-case claims

---

## 12. Future Task-Pack Relationship

The companion task-pack file is:

```text
docs/system/PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01.md
```

That file records the next intended page-level tasks that should consume this compliance gate.

This document is the reusable compliance standard. The task-pack is the dispatch planning aid.

---

## 13. Automated Token / CSS Compliance Check

VISQA001 added a baseline-aware token/CSS compliance check for future public UI work:

```powershell
npm run check:tokens
```

The check scans:

- `src/**/*.css`
- `src/**/*.ts`
- `src/**/*.tsx`

The check reports file path, line number, violation type, matched value/snippet, and a remediation hint for:

- raw hex colors
- `rgb()` / `rgba()`
- `hsl()` / `hsla()`
- named CSS color literals on visual CSS properties
- inline TSX visual style properties such as `color`, `background`, `borderColor`, `boxShadow`, and `fontFamily`
- non-token `font-family` declarations outside token/theme files
- suspicious page-specific button/card/tile/panel classes that may bypass WNYHS primitives
- visual style constants in TS/TSX

Raw color values are allowlisted only for governed token/theme files where literal values are expected:

- `src/styles/wnyhsVisualGovernance.css`
- `src/index.css`
- `src/newsite/theme/tokens.css`
- `src/newsite/theme/presets/**`

The committed baseline is:

```text
scripts/checks/token-compliance-baseline.json
```

That baseline records pre-existing findings as of VISQA001. Normal runs fail only findings not present in the baseline, so future NAV, IA, and public-page tasks can detect newly introduced drift without requiring broad cleanup of existing legacy styles.

Future page tasks should run `npm run check:tokens` with their validation set. Updating the baseline is allowed only through a separately bounded governance or token-cleanup task, not as a routine bypass.
