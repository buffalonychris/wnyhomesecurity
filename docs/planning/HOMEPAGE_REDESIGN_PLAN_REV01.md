# HOMEPAGE REDESIGN PLAN REV01

## 1. Document Status

- **Task ID:** HOMEPAGE-REDESIGN-PLANNING-001
- **Status:** Planning Document
- **Scope:** Homepage redesign implementation planning only.
- **Authority:** This plan translates promoted governance standards into a future implementation-ready homepage plan.
- **implementation boundary:** This document does not authorize source, route, CSS, component, asset, Search, Homepage, QR Landing, runtime, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, or protected-system changes.

## 2. Controlling Sources

This plan is based only on promoted governance docs and existing repo documentation:

- `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`
- `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`
- `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`
- `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`
- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`
- `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`

## 3. Homepage Purpose

The Homepage should introduce WNY Home Security as a local, consultation-oriented smart home and security provider, explain the WNYHS Core model, support discovery through categories, packages, solutions, and Search, build trust, and route qualified homeowners toward a Request Estimate action or Call / Text contact option.

The Homepage is the broadest public entry point. It should not act like a single solution page, a package pricing page, or a technical catalog dump.

## 4. Homepage Section Order

Future implementation should use this section order:

1. Navigation
2. Search Access
3. Hero
4. Trust Bar
5. Category Explorer
6. Featured Packages
7. Featured Solutions
8. WNYHS Core Section
9. How It Works
10. Why WNYHS
11. Primary CTA
12. Footer

## 5. Navigation Expectations

Navigation should provide clear access to:

- Home
- Explore
- Packages
- Solutions
- Why WNYHS
- How It Works
- About
- Contact
- Search

Primary actions should remain aligned with governance language:

- Request Estimate
- Call / Text

Navigation planning does not authorize route changes, new pages, search implementation, or runtime behavior changes.

## 6. Search Requirements

Search should be visible from the Homepage and navigation. It should support homeowner-language discovery for categories, packages, solutions, and public informational pages.

Search planning should include:

- A clear Homepage Search Access area near the top of the page.
- Matching against approved category names and solution terms.
- No exposure of internal, draft-only, admin, protected-system, or runtime-only content.
- No implementation of search indexing, query handling, routing, or backend behavior in this planning task.

## 7. Hero Section Requirements

The Hero should communicate the broad WNYHS value proposition, not a single category. It should introduce a local smart home and security experience built around customer ownership, expansion readiness, and consultation.

Hero requirements:

- Include a primary Request Estimate action.
- Include a secondary Call / Text action.
- Support the Light Theme visual direction with strong brand contrast.
- Use approved content sources and claim-safe wording.
- Avoid implying emergency response authority or third-party service obligations.

## 8. Trust Bar Requirements

The Trust Bar should provide quick confidence signals after the Hero.

Required trust concepts:

- Locally Owned
- Customer-Owned
- No Required Monthly Fees
- Professional Installation
- Built To Expand

These trust concepts should be presented as concise proof points, not unsupported claims.

## 9. Category Explorer Requirements

The Category Explorer should present approved top-level categories in governance order:

1. Home Security
2. Aging-In-Place
3. Environmental Safety
4. Home Automation
5. Home Lighting

Category cards should help homeowners choose by concern or outcome. Future implementation should not introduce categories outside this list without a separate governance update.

## 10. Featured Packages Requirements

Featured Packages should present curated outcome groupings, not hardware bundles, pricing tiers, or Bronze/Silver/Gold-style offers.

Planning requirements:

- Use package structure from `PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`.
- Represent packages as expandable homeowner outcomes.
- Avoid pricing, required subscriptions, or final package commitments unless separately authorized.
- Treat any package names selected during implementation as content work that must trace back to approved repo content or a future approved package catalog.

Planning examples from governance may include package-style outcomes such as property awareness, family confidence, basement protection, home arrival, outdoor living, or holiday lighting. These are planning references only, not final Homepage implementation authority.

## 11. Featured Solutions Requirements

Featured Solutions should be drawn from `MASTER_SOLUTION_CATALOG_V1.md`, represent multiple categories, and remain a selected sample rather than a full catalog.

Planning recommendation only; not implementation authority:

- Package Protection
- Driveway Watch
- Smart Entry
- Water Damage Prevention
- Sump Pump Awareness
- Family Awareness
- Security Lighting
- Whole-Home Control

Future implementation may refine the featured set, but it must remain traceable to the promoted master solution catalog.

## 12. WNYHS Core Section Requirements

The WNYHS Core Section should explain the operating model behind the site:

- Local Home Assistant-based control.
- Unified dashboard.
- Customer-owned equipment and data.
- No required monthly fees.
- No vendor lock-in.
- Local-first, private-by-default posture.
- Expansion readiness.

This section should explain the model in customer-facing language without becoming a technical manual.

## 13. How It Works Requirements

The Homepage How It Works section should use the governance-approved flow:

1. Explore Solutions
2. Request Estimate
3. We Build The Right Plan

The section should set consultation expectations without adding scheduling automation, quote logic, payment logic, CRM logic, or protected-system behavior.

## 14. Why WNYHS Requirements

Why WNYHS should explain differentiators grounded in promoted governance:

- Local ownership.
- Professional installation.
- Ongoing support.
- Customer ownership.
- Expansion readiness.
- No required monthly fees.

This section should avoid unsupported claims, emergency-response implications, or competitor comparisons that are not backed by repo documentation.

## 15. CTA Requirements

Primary CTA language should remain:

- Request Estimate

Secondary contact language should remain:

- Call / Text

CTA planning does not authorize funnel order changes, form changes, HubSpot changes, Stripe changes, scheduling changes, or any runtime behavior change.

## 16. Footer Requirements

Footer planning should preserve access to major public areas and support the same content model as navigation:

- Home
- Explore
- Packages
- Solutions
- Why WNYHS
- How It Works
- About
- Contact
- Search

Footer content should reinforce local ownership, customer ownership, and consultation-oriented service without adding new protected-system behavior or unsupported claims.

## 17. Visual-System Requirements

Future implementation should follow `DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`:

- Use Light Theme as the primary customer-facing mode.
- Use charcoal/black for structure and contrast.
- Use antique gold as the accent color.
- Use semantic tokens rather than hardcoded colors.
- Preserve premium residential photography expectations.
- Maintain clear visual hierarchy: Category Explorer before Featured Packages before Featured Solutions.
- Keep cards, buttons, Search, navigation, CTA, and footer styling aligned to the visual-system standard.

This plan does not authorize CSS, token, component, image, asset, or visual implementation changes.

## 18. Content Source Mapping

| Homepage area | Primary source |
| --- | --- |
| Site purpose and public hierarchy | `SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md` |
| Section order and homepage/QR relationship | `UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md` |
| Visual system and Light Theme | `DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md` |
| Category Explorer | `CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md` |
| Featured Packages | `PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md` |
| Featured Solutions | `MASTER_SOLUTION_CATALOG_V1.md` and `SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md` |
| Solution media expectations | `SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md` |
| WNYHS Core | `SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md` |
| Search planning | `SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, and `CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md` |

## 19. Forbidden Scope

This planning task does not authorize:

- Application or source file edits.
- Route changes.
- Asset changes.
- Image generation.
- CSS, token, or component changes.
- Search implementation.
- Homepage implementation.
- QR Landing implementation.
- Runtime behavior changes.
- Cloudflare changes.
- HubSpot changes.
- Stripe changes.
- Resend changes.
- Google Workspace changes.
- Scheduling changes.
- Secrets or credential recording.
- Merge to `main`.

## 20. Implementation Readiness Checklist

A future implementation task should not begin until:

- This plan is merged through the repo PR process.
- The active task register entry explicitly authorizes homepage implementation.
- Target source, style, content, and asset files are named in the implementation work order.
- Search implementation scope is either explicitly authorized or explicitly excluded.
- Final Featured Packages and Featured Solutions are selected from approved sources.
- Required image assets are verified as existing, or a separate asset task is approved.
- Protected-system boundaries are restated in the implementation work order.
- Build and route-level validation expectations are defined for implementation.

## 21. Follow-Up Implementation Task Recommendation

Recommended future task:

- **Task ID:** HOMEPAGE-REDESIGN-IMPLEMENTATION-001
- **Type:** Bounded homepage implementation.
- **Dependency:** `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`
- **Recommended scope:** Implement the approved Homepage section order, content mapping, visual-system alignment, category explorer, featured packages, featured solutions, WNYHS Core, CTA, and footer treatment.
- **Required exclusions unless separately authorized:** Search implementation, QR Landing implementation, protected systems, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, secrets, and route changes outside the approved Homepage scope.

This recommendation is planning only and does not authorize implementation.
