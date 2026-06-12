# SOLUTION002_WNYHS_SOLUTIONS_LISTING_PAGE_STANDARD_REV01

## Metadata

- **Title:** WNYHS Solutions Listing Page Standard
- **Revision:** REV01
- **Status:** Working Standard
- **Owner Area:** Solution System / Public Website
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Related Visual Standard:** `docs/governance/DESIGN003_WNYHS_SOLUTIONS_PAGE_VISUAL_PARITY_REV01.md`
- **Last Updated:** 2026-06-12
- **Implementation Authority:** This document does not authorize source, CSS, route, runtime, protected-system, pricing, hardware, asset-generation, or deployment changes by itself. Implementation requires a separate bounded task in the Master Task Register or an explicitly bounded work order.

---

## 1. Purpose

This standard defines the allowed public structure and content role for the WNY Home Security Solutions Landing Page.

The page's job is to present WNYHS solutions in a visually consistent, image-led public catalog format while preserving claims, pricing, package, Core, and Vault governance.

The Solutions Landing Page must be treated as a public solution-browsing surface, not a package catalog, category catalog, quote engine, BOM table, or hardware catalog.

---

## 2. Page Role

The Solutions Landing Page should answer:

1. What solutions does WNYHS offer?
2. Which solutions have full live detail pages?
3. Which solution topics are visible but still planning, standard-candidate, or quote-reviewed items?
4. What custom/Vault work can a homeowner ask about?
5. Why does WNYHS Core make adding solutions easier over time?
6. How does a homeowner start a Fit Check, estimate, or call/text conversation?

The page should not try to answer:

1. Which package should I buy?
2. What does every package include?
3. What is the price?
4. What exact hardware will be installed?
5. What BOM/input cost applies?
6. What internal operator workflow applies?

---

## 3. Required Page Structure

The Solutions Landing Page must use this section order unless a later revision supersedes it:

1. **Hero / Intro**
2. **Image-Led Solution Grid**
3. **Vault / Custom Section**
4. **WNYHS Core Value Panel**
5. **Homepage-Style CTA**
6. **Footer**

This order is intentional:

```text
Standard solutions first
Custom/Vault path second
Core/platform expansion value third
Clear call-to-action last
```

---

## 4. Hero / Intro Requirements

The hero must be short and homeowner-readable.

It should explain that WNYHS offers practical smart-property solutions that may be installed individually, combined into packages, or reviewed as custom work.

Allowed hero themes:

- Browse solutions by homeowner concern.
- Find live solution pages and planning topics.
- Ask for a Fit Check or estimate if unsure.
- WNYHS solutions can grow around a customer-owned Core foundation.

Forbidden hero themes:

- pricing promises
- fixed package commitments
- hardware-first product catalog framing
- professional alarm monitoring claims
- emergency response claims
- universal compatibility claims
- theft/crime/water-damage prevention claims

---

## 5. Image-Led Solution Grid

The image-led solution grid is the primary body of the page.

Each visible solution card should include:

1. Image
2. Image alt text
3. Category or category/status eyebrow
4. Solution title
5. Short outcome-focused description
6. CTA or destination state

Allowed CTA labels include:

- `View Solution`
- `Ask In Fit Check`
- `Request Estimate`
- `View Category` only if the destination is a filtered/anchored solution grouping and no detail page exists

Preferred card status labels:

- `Live Solution`
- `Standard Candidate`
- `Planning Topic`
- `Quote-Reviewed`
- `Custom / Vault`

Status labels must remain visually secondary. The page should not feel like an internal governance table.

---

## 6. Image Requirements

Every solution card on the public Solutions Landing Page should have an image.

Preferred image source order:

1. Existing approved solution-specific image
2. Existing approved homepage solution image
3. Existing approved category image
4. Existing approved neutral WNYHS smart-property image as temporary fallback

Do not generate or add new images inside a Solutions Listing implementation task unless explicitly authorized by a separate asset/image task.

If a solution lacks a specific image, the implementation may use the nearest approved fallback image and must document remaining image debt in the PR summary.

Image requirements:

- images must use the same card/media treatment as the Home Landing Page where practical
- images must have meaningful alt text
- images must not imply capabilities beyond the text claim boundaries
- images must not show emergency/medical/police/fire monitoring promises unless separately governed

---

## 7. Category Handling

Categories may be used as group headings, card eyebrows, filters, or anchors.

The Solutions Landing Page must not present large standalone category cards as the main page body.

The following categories may appear:

- Home Security
- Home Safety / Environmental Safety
- Home Lighting
- Home Automation
- Aging-in-Place / Elder Care
- The Vault / Custom Projects

Category cards belong on the Home Landing Page, category explorer surfaces, or future category pages, not as a primary section on the Solutions Landing Page.

---

## 8. Package Handling

Package starting-point cards must not appear on the Solutions Landing Page.

Packages belong on a Packages page or package-specific public surface.

The Solutions Landing Page may include a short text link such as:

```text
Looking for bundled starting points? View packages.
```

But it must not show the full package card matrix.

---

## 9. Vault / Custom Section

The Vault section must remain clearly custom, quote-only, and reviewed individually.

It should appear after the solution grid and before the Core value panel.

Allowed Vault framing:

- custom smart-property projects reviewed individually
- quote-only after review
- available where equipment and site conditions support it
- compatibility, wiring, weather exposure, safety/trade, manufacturer dependency, support-scope, and customer-goal review

Allowed Vault buckets:

- Outdoor Living Controls
- Pool / Hot Tub Awareness and Controls
- Specialty Lighting
- Detached Space Controls
- Gates / Access / Exterior Equipment
- Workshops and Utility Spaces
- Custom Dashboards
- Advanced Automation Design

The Vault section should be visually premium but not dense. It may use a premium dark panel with compact bucket cards/chips and a clear estimate CTA.

Forbidden Vault framing:

- standard installed package promise
- fixed price
- guaranteed compatibility
- code compliance or safety certification claims
- emergency/life-safety promise
- universal support promise

---

## 10. WNYHS Core Value Panel

The Solutions Landing Page must include a WNYHS Core value panel after the Vault section.

The Core panel should explain the platform/economic advantage of the WNYHS model:

```text
WNYHS Core is normally obtained with the customer's first WNYHS solution or package.
Once Core is in place, additional supported solutions can be added to the same dashboard/control-plane foundation without rebuilding the foundation each time.
```

Allowed Core themes:

- customer-owned foundation
- one dashboard for supported systems
- add-on solutions without starting over
- fewer scattered apps where supported
- local-first control where supported
- no required monthly fees where selected hardware supports that path
- future expansion through WNYHS Core

Preferred homeowner-safe wording:

```text
Buy the foundation once. Add solutions over time.
```

Avoid:

- `works with everything`
- `own it for life`
- `no monthly fees ever`
- `never need another app`
- `guaranteed future compatibility`
- `always local-only`

The Core panel may reuse the Home Landing Page Core visual treatment and image/media treatment, but the Solutions page copy should emphasize add-on expansion and avoiding repeated Core/control-plane setup.

---

## 11. Homepage-Style CTA

The final CTA section must visually and structurally match the Home Landing Page bottom CTA pattern where practical.

Required CTA intent:

```text
Ready to talk through your home?
Request an estimate or call/text WNYHS to discuss the solutions that fit your property.
```

Required actions:

- Request Estimate
- Call / Text 716-201-0364

Fit Check may remain available when appropriate, but the final public CTA should not bury the estimate/call path.

---

## 12. Footer

The page must use the existing WNYHS public footer pattern.

Footer version display must remain intact.

---

## 13. Claims Guardrails

All copy must remain aligned with `CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`.

Use:

- awareness
- visibility
- selected alerts
- supported equipment
- where supported
- reviewed after site details
- quote-only after review
- final scope confirmed after property review
- customer-owned equipment
- local dashboard
- future expansion through WNYHS Core

Avoid:

- prevention guarantees
- crime/theft/burglary prevention claims
- water-damage/frozen-pipe/mold prevention claims
- professional monitoring claims
- police/fire/medical dispatch claims
- medical monitoring claims
- caregiver replacement claims
- universal compatibility claims
- no-monthly-fees-in-every-case claims
- zero-cloud-in-every-case claims

---

## 14. Pricing Boundary

The Solutions Landing Page must not publish public prices, package prices, supplier costs, BOM costs, Stripe product IDs, checkout IDs, or internal floor prices.

Pricing placeholders are not needed on this page unless a later pricing-governed task authorizes them.

---

## 15. Protected-System Boundary

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

## 16. Implementation Boundary

This document governs future implementation but does not itself authorize implementation.

A future implementation task must define:

- route/page target
- source/content target files
- CSS/token target files
- image source/fallback rules
- validation commands
- claims grep
- no-pricing grep
- protected-system exclusions
- manual visual review requirements

---

## 17. Acceptance Criteria for Future Implementation

A future Solutions Listing implementation is acceptable only when:

1. The page follows the required section order.
2. The main body is an image-led solution grid.
3. Every solution card has an image or approved fallback image.
4. Category cards are removed from the main Solutions page body.
5. Package starting-point cards are removed from the Solutions page.
6. Vault appears as a quote-only custom section after the solution grid.
7. The Core value panel appears after Vault.
8. The final CTA matches the Home Landing Page CTA pattern.
9. The page uses governed WNYHS visual tokens and primitives.
10. No public prices are added.
11. No unsupported claims are added.
12. Protected systems remain untouched.
