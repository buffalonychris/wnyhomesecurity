# QRLANDING REDESIGN PLAN REV01

## 1. Document Status

- **Task ID:** QRLANDING-REDESIGN-PLANNING-001
- **Status:** Planning Document
- **Scope:** QR Landing redesign implementation planning only.
- **Authority:** This plan translates promoted governance standards and QR runtime contracts into a future implementation-ready QR Landing plan.
- **implementation boundary:** This document does not authorize source, route, CSS, component, asset, Search, Homepage, QR Landing, qrlanding, attribution, requestId, lead-signal, runtime, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, analytics, or protected-system changes.

## 2. Controlling Sources

This plan is based only on promoted governance docs, the Homepage planning artifact, current QR runtime contracts, and existing repo documentation:

- `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`
- `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`
- `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`
- `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`
- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`
- `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`
- `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/runtime_ownership_map.md`

All four runtime docs named in the work order were present when this plan was created.

## 3. QR Landing Purpose

QR Landing exists to convert a visitor who has already scanned WNYHS material. It should quickly confirm legitimacy, acknowledge the scan, explain WNYHS in plain language, present a focused set of high-interest homeowner examples, reinforce WNYHS Core, and route the visitor toward Request Estimate or Call / Text.

QR Landing is not a duplicate Homepage. It should be shorter, more direct, and more conversion-oriented than the Homepage redesign plan.

## 4. QR Landing Section Order

Future implementation should use this section order:

1. Navigation
2. Search Access
3. Hero
4. Trust Bar
5. Popular Solutions
6. WNYHS Core Section
7. Why People Choose WNYHS
8. Primary CTA
9. Footer

## 5. Navigation Expectations

Navigation should remain simple and homeowner-focused. It may be more compact than Homepage navigation, but it must preserve easy access to:

- Search
- Request Estimate
- Call / Text
- Contact

Where full navigation is available, it should align with the approved public navigation model:

- Home
- Explore
- Packages
- Solutions
- Why WNYHS
- How It Works
- About
- Contact
- Search

Navigation planning does not authorize route changes, menu implementation, Search implementation, or runtime behavior changes.

## 6. Search Requirements

Search should be available from QR Landing and should support homeowner-language discovery without turning QR Landing into a full browsing page.

Search planning should include:

- Visible Search access near the top of the QR Landing experience.
- Search access from navigation or a compact Search Access section.
- Public-only results for approved categories, packages, solutions, and information pages.
- No internal, draft-only, administrative, runtime, or protected-system results.
- No implementation of Search indexing, query handling, routing, frontend behavior, or backend behavior in this planning task.

## 7. Scan Acknowledgment Requirements

QR Landing should acknowledge that the visitor scanned WNYHS material.

Approved direction:

- Use concise scan acknowledgment such as `Thank you for scanning.` or an equivalent claim-safe phrase.
- Confirm the visitor reached WNY Home Security.
- Keep the acknowledgment short enough that it does not delay the primary conversion path.
- Avoid implying exact scan source knowledge unless future source parameters provide that context.

## 8. Hero Section Requirements

The QR Landing Hero should be more direct than the Homepage Hero.

Hero requirements:

- Acknowledge the scan.
- Quickly explain WNYHS as a local smart property and home security provider.
- Establish trust immediately.
- Present Request Estimate immediately.
- Present Call / Text immediately.
- Support the Light Theme visual direction with strong brand contrast.
- Avoid unsupported claims or emergency-response implications.

## 9. Trust Bar Requirements

The Trust Bar should provide concise confidence signals immediately after the Hero.

Required trust concepts:

- Locally Owned
- Customer-Owned
- No Required Monthly Fees
- Professional Installation
- Built To Expand

These should be short, scannable, and claim-safe.

## 10. Popular Solutions Requirements

Popular Solutions should show a limited number of examples from `MASTER_SOLUTION_CATALOG_V1.md`.

Planning recommendation only; not implementation authority:

- Package Protection
- Driveway Watch
- Water Damage Prevention
- Sump Pump Awareness
- Security Lighting
- Family Awareness

If future implementation uses a smart lighting label, it must map back to the approved `Security Lighting` Solution or another approved catalog entry. Future implementation must not invent new categories outside:

- Home Security
- Aging-In-Place
- Environmental Safety
- Home Automation
- Home Lighting

Popular Solutions should provide examples of what is possible, not a full catalog or package-selection system.

## 11. WNYHS Core Section Requirements

The WNYHS Core Section should explain the platform behind WNYHS solutions in compact conversion-page language:

- Home Assistant-based local control.
- Unified dashboard.
- Customer-owned equipment and data.
- No required monthly fees.
- No vendor lock-in.
- Local-first, private-by-default posture.
- Future expansion readiness.

The section should be concise enough for a QR visitor who may be standing near a placard, sign, flyer, or referral material.

## 12. Why People Choose WNYHS Requirements

Why People Choose WNYHS should be compact and conversion-oriented.

Required focus:

- Customer-Owned
- No Required Monthly Fees
- Built To Expand
- Local Support

This section should reinforce why WNYHS differs from commodity-device-only purchases without adding unsupported guarantees, emergency-response claims, or unverifiable proof.

## 13. CTA Requirements

QR Landing should prioritize:

- Request Estimate
- Call / Text

CTA planning does not authorize funnel order changes, form changes, `/api/lead-signal` changes, HubSpot changes, Stripe changes, scheduling changes, analytics changes, attribution changes, or runtime behavior changes.

## 14. Footer Requirements

Footer planning should preserve clear access to essential public areas without turning QR Landing into a full Homepage duplicate.

Footer content may include:

- Home
- Explore
- Packages
- Solutions
- Why WNYHS
- How It Works
- About
- Contact
- Search

Footer content should reinforce local ownership, customer ownership, and consultation-oriented service without adding new runtime behavior or unsupported claims.

## 15. Visual-System Requirements

Future implementation should follow `DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`:

- Use Light Theme as the primary customer-facing mode.
- Use charcoal/black for structure and contrast.
- Use antique gold as the accent color.
- Use semantic tokens rather than hardcoded colors.
- Preserve premium residential photography expectations.
- Keep QR Landing shorter and more direct than Homepage.
- Keep Search, CTA, Popular Solutions, trust signals, WNYHS Core, and footer styling aligned to the visual-system standard.

This plan does not authorize CSS, token, component, image, asset, or visual implementation changes.

## 16. Content Source Mapping

| QR Landing area | Primary source |
| --- | --- |
| QR Landing purpose and conversion role | `SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md` and `UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md` |
| Section order | `UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md` |
| Homepage relationship | `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md` |
| Visual system and Light Theme | `DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md` |
| Search planning | `UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`, `SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, and `CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md` |
| Popular Solutions | `MASTER_SOLUTION_CATALOG_V1.md` |
| WNYHS Core | `SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md` |
| Solution media readiness | `SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md` |
| QR runtime and attribution preservation | `docs/runtime/qrlanding_runtime.md`, `docs/runtime/request_id_contract.md`, `docs/runtime/lead_signal_contract.md`, and `docs/runtime/runtime_ownership_map.md` |

## 17. QR Attribution Preservation Requirements

Future implementation must preserve current QR runtime and attribution behavior.

Required preservation statements:

- Do not break `/qrlanding` route behavior.
- Do not remove `src`/source parameter handling if present.
- Do not remove requestId behavior if present.
- Do not weaken lead-signal capture if present.
- Do not alter HubSpot, Cloudflare, analytics, or runtime behavior in this planning task.
- Future implementation must preserve QR campaign attribution.
- Preserve `/api/lead-signal` as the only CRM write path.
- Preserve the current QR attribution event chain where implemented: `qrlanding_view`, `estimate_form_started`, and `estimate_form_submitted`.
- Preserve client QR attribution requestId continuity where implemented.
- Preserve server-generated requestId authority from `/api/lead-signal`.
- Preserve `entryRoute=/qrlanding` attribution context where available.
- Treat Cloudflare analytics as directional traffic telemetry, not canonical conversion counts.

This planning task records preservation requirements only and does not authorize attribution, analytics, API, schema, route, or runtime changes.

## 18. Forbidden Scope

This planning task does not authorize:

- Application or source file edits.
- Route changes.
- Asset changes.
- Image generation.
- CSS, token, or component changes.
- Search implementation.
- Homepage implementation.
- QR Landing implementation.
- QR attribution behavior changes.
- requestId behavior changes.
- lead-signal behavior changes.
- Runtime behavior changes.
- Cloudflare changes.
- HubSpot changes.
- Stripe changes.
- Resend changes.
- Google Workspace changes.
- Scheduling changes.
- Analytics changes.
- Secrets or credential recording.
- Merge to `main`.

## 19. Implementation Readiness Checklist

A future implementation task should not begin until:

- This plan is merged through the repo PR process.
- The active task register entry explicitly authorizes QR Landing implementation.
- Target source, style, content, runtime-adjacent, and asset files are named in the implementation work order.
- Search implementation scope is either explicitly authorized or explicitly excluded.
- Final Popular Solutions are selected from approved catalog entries.
- Existing `/qrlanding` route behavior is verified before edits.
- Existing `src`/source parameter handling is verified before edits.
- Existing requestId behavior is verified before edits.
- Existing lead-signal capture behavior is verified before edits.
- QR campaign attribution preservation is listed as a release gate.
- Protected-system boundaries are restated in the implementation work order.
- Build, route-level validation, and attribution-regression checks are defined for implementation.

## 20. Follow-Up Implementation Task Recommendation

Recommended future task:

- **Task ID:** QRLANDING-REDESIGN-IMPLEMENTATION-001
- **Type:** Bounded QR Landing implementation.
- **Dependency:** `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`
- **Recommended scope:** Implement the approved QR Landing section order, scan acknowledgment, Search access, Hero, Trust Bar, Popular Solutions, WNYHS Core, Why People Choose WNYHS, CTA, footer treatment, and visual-system alignment.
- **Required exclusions unless separately authorized:** Search implementation, Homepage implementation, protected systems, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, secrets, route changes outside the approved QR Landing scope, requestId behavior changes, lead-signal behavior changes, analytics changes, and QR attribution behavior changes.

This recommendation is planning only and does not authorize implementation.
