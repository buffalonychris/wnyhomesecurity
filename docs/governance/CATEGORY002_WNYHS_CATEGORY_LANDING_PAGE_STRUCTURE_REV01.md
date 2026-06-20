# CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01

## Status

Working Standard

## Owner

WNY Home Security

## Document Type

Category Landing Page Structure Standard

## Purpose

Define the standard structure for WNYHS public category landing pages.

Category landing pages sit between the homepage and solution pages.

They help homeowners recognize possibilities before choosing a specific solution.

## Authority / Implementation Boundary

This document is governance only.

It does not authorize implementation by itself.

Implementation requires an ACTIVE Master Task Register task and bounded Codex work order.

This document is subordinate to higher repository governance, the current operational context, the Master Task Register, protected runtime contracts, and active bounded work orders.

## Site Journey Role

The intended public journey is:

```text
Homepage
-> Category
-> Featured Solutions
-> Full Solution Catalog
-> Specific Solution Page
-> Estimate / Consultation
```

- Homepage helps visitors choose a broad concern.
- Category page helps visitors see possibilities.
- Solution page explains one specific outcome.
- Estimate / consultation talks through the actual property.

## Required Category Landing Page Section Order

Every category landing page should use this structure:

1. Hero
2. Automation / Awareness Reveal
3. What Life Could Be Like
4. Featured Solutions
5. WNYHS Core Foundation
6. Full Solution Catalog
7. Custom Solutions CTA
8. Global Primary CTA
9. Footer Trust Band / Footer

## Hero Requirements

Hero must include:

- category eyebrow
- category headline
- short outcome-first subheadline
- primary CTA: Request Estimate
- secondary CTA: Request Call

Hero must not include:

- extra trust badges if trust band/footer already covers them
- Fit Check as the primary hero CTA
- hardware-first copy
- protocol-first copy
- product-grid clutter

## Automation / Awareness Reveal Standard

The reveal section must:

- use normal lifestyle/home imagery
- show hidden automation, awareness, protection, or support opportunities
- lead with homeowner outcomes instead of device names
- support hover/click/tap reveal behavior where practical
- use token-governed styling
- avoid overloading the visitor with every possible technical device

Reveal labels should answer:

```text
What problem does this solve?
```

not merely:

```text
What device is this?
```

Safer examples:

- Keeps rooms comfortable automatically
- Knows when spaces are occupied
- Warns about water before damage spreads
- Helps routines happen automatically
- Lights respond to time of day and occupancy

Avoid labels that imply guaranteed prevention, emergency response, medical monitoring, police/fire/medical dispatch, or universal compatibility.

## What Life Could Be Like Bridge Section

This section must:

- translate the category possibilities into homeowner-relatable outcomes
- use concise outcome statements
- sit between the reveal section and featured solutions
- avoid hardware-first language

## Featured Solutions Rule

Exactly four featured solution cards per category.

Featured solutions should represent:

- most common
- most relatable
- most frequently purchased / highest likely buyer intent
- strong WNYHS differentiation
- expansion potential

Do not choose featured solutions only because they are:

- newest hardware
- technically impressive
- operator preference
- highest margin
- easiest to install

Featured solution cards should use the pattern:

```text
Problem:
[homeowner problem]

Solution:
[solution name]

Outcome:
[plain-language outcome]
```

## Full Solution Catalog Rule

The full catalog section should include the broader related solution set for the category.

Purpose:

- allow browsing all sellable WNYHS solution components for that category
- avoid overwhelming visitors before the four featured solutions
- preserve category-to-solution discovery flow

## WNYHS Core Foundation Requirement

Every category landing page must include a WNYHS Core section.

It should explain:

- one customer-owned foundation
- one dashboard/control surface
- local-first where supported
- no required monthly fees where selected hardware supports that path
- expansion over time
- customer-owned equipment/data language where claim-safe

Use category-specific headline variations when useful, but keep the Core meaning stable.

Examples:

Home Automation:

```text
A local-first foundation for the automations you choose.
```

Home Security:

```text
A local-first foundation for property awareness and security.
```

Aging-In-Place:

```text
A local-first foundation for family awareness and independence.
```

Environmental Safety:

```text
A local-first foundation for practical home protection.
```

Home Lighting:

```text
A local-first foundation for smarter lighting and visibility.
```

## Custom Solutions CTA Standard

Every category landing page should include a Custom Solutions CTA after the Full Solution Catalog and before the Global Primary CTA.

Approved base message:

```text
Not every useful automation fits neatly into a preset package.

If there is something in your home you wish worked differently - a routine you repeat every day, a room that never feels right, a door you keep checking, lights you want to behave a certain way, or a custom idea you have been thinking about - we can talk through it.

WNY Home Security builds practical custom smart-property solutions around real homes, real routines, and real homeowner goals.

If it can be safely automated, supported, and built around reliable equipment, we will help you figure out the right way to do it.
```

Category-specific wording changes are allowed, but must preserve:

- practical tone
- supportability boundary
- safety boundary
- no exaggerated "dream system" sales language

## Global Primary CTA Standard

Every category landing page must include the standard bottom CTA:

Headline:

```text
Ready to talk through your home?
```

Body:

```text
Request an estimate or call/text WNYHS to discuss categories, packages, and solutions that fit your property.
```

Actions:

- Request Estimate
- Call / Text 716-201-0364

Do not vary this global CTA without separate governance.

## Visual / Token Requirements

Implementation must comply with:

- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/DESIGN003_WNYHS_SOLUTIONS_PAGE_VISUAL_PARITY_REV01.md`
- `src/styles/wnyhsVisualGovernance.css`

Use existing governed primitives where practical:

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

Forbid:

- hardcoded colors
- separate visual system
- new button system
- new card system
- typography drift
- blue-dominant CTA system
- hardware-first category structure
- protocol-first category structure

## Claims Guardrails

Public category pages must not imply:

- guaranteed crime prevention
- guaranteed water damage prevention
- guaranteed frozen pipe prevention
- medical monitoring
- police/fire/medical dispatch
- universal device compatibility
- zero cloud in every case
- no monthly fees in every case
- guaranteed outcome regardless of site conditions

Use safer language:

- awareness
- visibility
- practical alerts
- where supported
- selected hardware
- local-first foundation
- professionally installed
- final recommendations depend on site conditions
- supported equipment

## Relationship To CATEGORY001

`docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md` defines category identity, metadata, category relationship rules, reuse rules, and broad category governance.

`CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01.md` defines landing-page structure and presentation flow.

CATEGORY002 does not replace CATEGORY001.
