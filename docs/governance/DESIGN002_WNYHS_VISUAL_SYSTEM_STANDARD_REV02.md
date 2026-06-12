# DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02

## Status

Working Standard

## Owner

WNY Home Security

## Document Type

Visual System Standard

## Purpose

Define the governed sitewide public visual token system for WNY Home Security public marketing pages.

REV02 promotes the visual direction into shared implementation primitives while preserving the business, catalog, claims, pricing, HubSpot, Stripe, scheduling, and runtime boundaries established by repository governance.

## Source Note

The local input file was not available to this Codex run at `C:\dev\wnyhomesecurity_codex-input\DESIGN_TOKEN_SYSTEM_001\DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02_FINAL.md`. This REV02 document records the implementation standard applied from the bounded work order and current repository governance.

## Typography Standard

- Body/UI font: Inter.
- Heading/title font: Manrope.
- Headings must use `--wny-font-heading` / `--wnyhs-font-heading` rather than one-off font declarations.

## Public Visual Direction

Public marketing pages should use a warm off-white canvas, clean light surfaces, selective charcoal premium emphasis panels, gold/black primary CTA treatment, charcoal or outline secondary CTA treatment, warm-neutral borders, controlled card density, and a dark, quiet, structured footer.

Blue must not be the default public CTA color.

## Token / Primitive Contract

The governed implementation token file is:

```text
src/styles/wnyhsVisualGovernance.css
```

Required public primitives include `.wnyhs-page`, `.wnyhs-shell`, `.wnyhs-section`, `.wnyhs-section--category`, `.wnyhs-section--packages`, `.wnyhs-section--solutions`, `.wnyhs-section--dark`, `.wnyhs-section-header`, `.wnyhs-eyebrow`, `.wnyhs-heading`, `.wnyhs-description`, `.wnyhs-card`, `.wnyhs-card--category`, `.wnyhs-card--package`, `.wnyhs-card--solution`, `.wnyhs-card-title`, `.wnyhs-card-copy`, `.wnyhs-card-media`, `.wnyhs-media`, `.wnyhs-price-badge`, `.wnyhs-price-chip`, `.wnyhs-button`, `.wnyhs-button--primary`, `.wnyhs-button--secondary`, and `.wnyhs-footer`.

Existing homepage and marketing aliases may continue while pages are migrated toward the governed primitives.

## Claims and Catalog Boundary

Visual implementation must not invent prices, package prices, solution prices, supplier costs, BOM values, packages, solutions, hardware standardization, or public standard claims for pilot, custom-only, excluded, or research-only hardware.

Public copy should use awareness, visibility, selected alerts, supported hardware, local dashboard, customer-owned equipment, expandable system, and final quote after site review language.

## Pricing Boundary

Pricing-ready CSS primitives are allowed.

Real public pricing values are not authorized by this standard. Placeholder pricing styles may be used only when blank, blocked, or clearly non-production.

Preferred future public pricing pattern, when operator-approved:

```text
Starting at $____ installed. Final pricing confirmed after site review.
```

## Protected Systems

This standard does not authorize changes to HubSpot, Stripe, Resend, Gmail/Workspace, Cloudflare config, scheduling, APIs, runtime behavior, secrets, routes, or navigation behavior.

## Implementation Boundary

REV02 defines and records the visual token system applied by DESIGN-TOKEN-SYSTEM-001. Future changes to runtime behavior, catalog structure, pricing, protected systems, routes, navigation, or public claims require a separate bounded task.
