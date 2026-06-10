# SEARCH UX PLAN REV01

## 1. Document Status

- **Task ID:** SEARCH-UX-PLANNING-001
- **Status:** Planning Document
- **Scope:** Public-site Search UX planning only.
- **Authority:** This plan translates promoted governance standards and existing Homepage / QR Landing planning docs into a future implementation-ready public Search plan.
- **implementation boundary:** This document does not authorize source, route, CSS, component, asset, Search implementation, indexing, Homepage, QR Landing, QR attribution, runtime, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, analytics, API, or protected-system changes.

## 2. Controlling Sources

This plan is based only on promoted governance docs and existing planning docs:

- `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`
- `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`
- `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`
- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`
- `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`
- `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`
- `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`

## 3. Search Purpose

Search exists to let homeowners find relevant public content using their own language.

Search must support:

- Homeowner problem language.
- Common product/device language.
- Category names.
- Package names.
- Solution names.
- Support, Contact, About, and help terms.

Search should help visitors move from common language such as `doorbell camera`, `basement leak`, `mom living alone`, or `holiday lights` into approved public content without exposing internal systems or technical documentation.

## 4. Search Scope

Search scope is limited to approved public content. It should support discovery across:

- Category Pages.
- Package Pages.
- Solution Pages.
- Public Information Pages.

Search is not a runtime diagnostics tool, internal knowledge base, admin navigation layer, API explorer, deployment viewer, or repository documentation browser.

## 5. Search Result Types

Allowed search result types:

- Category Pages
- Package Pages
- Solution Pages
- Public Information Pages

Public Information Pages may include:

- About
- Contact
- Support
- How It Works
- Why WNYHS

Each search result should clearly identify its type so homeowners understand whether they are opening a Category, Package, Solution, or Public Information page.

## 6. Search Placement

Search should be available from:

- Primary navigation.
- Homepage.
- QR Landing.
- Mobile menu.

Homepage Search may support broad discovery. QR Landing Search should remain compact and conversion-friendly. Mobile Search should be easy to find without overwhelming the primary Request Estimate and Call / Text paths.

## 7. Search Behavior

Search should support:

- Exact title/name matching.
- Homeowner problem-language matching.
- Common product/device language matching.
- Category, Package, and Solution name matching.
- Synonym and related phrase matching.
- Public Information terms such as `contact`, `support`, `about`, `help`, `how it works`, and `why WNYHS`.

Search behavior should prioritize customer-facing outcomes over device-first or technical-first language. A homeowner searching for a device term should still be routed to the appropriate outcome-based Solution where available.

This plan does not authorize implementation of query parsing, indexing, frontend behavior, backend behavior, search providers, search APIs, analytics, or ranking code.

## 8. Search Ranking Recommendations

Planning recommendations only:

1. Exact public page/title match.
2. Exact Solution/Package/Category match.
3. Synonym/problem-language match.
4. Related Category match.
5. Public Information/help match.

Do not implement ranking in this task.

## 9. Search Metadata Requirements

Future implementation planning should define metadata for each searchable public content object.

Recommended metadata:

- Title or name.
- Result type.
- Public URL or route.
- Short summary.
- Primary Category.
- Secondary Categories, if applicable.
- Related Packages.
- Related Solutions.
- Search terms and synonyms.
- Homeowner problem phrases.
- Common device/product terms.
- CTA type or suggested next step.
- Public visibility status.

Metadata must not include secrets, protected-system data, runtime diagnostics, admin-only content, draft-only content, repository docs, or deployment details.

## 10. Category Search Mapping

Category Search should map homeowner language to approved categories:

| Category | Example terms |
| --- | --- |
| Home Security | security, cameras, doorbells, package theft, driveway, smart locks, vacation watch |
| Aging-In-Place | aging parent, mom living alone, caregiver, nighttime movement, independent living |
| Environmental Safety | basement leak, water, sump pump, freeze protection, utility room, smoke, CO |
| Home Automation | smart home, garage status, arrival routine, whole-home dashboard, daily routine |
| Home Lighting | holiday lights, outdoor lighting, pathway lighting, arrival lighting, vacation lighting |

Future implementation must not invent categories outside:

- Home Security
- Aging-In-Place
- Environmental Safety
- Home Automation
- Home Lighting

## 11. Package Search Mapping

Package Search should map homeowner situations to outcome-based package concepts when approved package content exists.

Planning examples from package governance:

- Property Awareness
- Family Confidence
- Basement Protection
- Home Arrival
- Outdoor Living
- Holiday Lighting

Package results should remain subordinate to approved Package content. This plan does not create Package pages, final Package names, prices, package routes, or package implementation authority.

## 12. Solution Search Mapping

Solution Search should use `MASTER_SOLUTION_CATALOG_V1.md` and `SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`.

Required example mappings:

Search term:
`doorbell camera`

Possible results:

- Package Protection
- Smart Entry
- Property Awareness Cameras

Search term:
`basement leak`

Possible results:

- Water Damage Prevention
- Sump Pump Awareness
- Utility Room Protection
- Environmental Safety

Search term:
`mom living alone`

Possible results:

- Aging-In-Place
- Family Awareness
- Safer Night Movement
- Caregiver Access

Search term:
`holiday lights`

Possible results:

- Vacation Lighting
- Outdoor Living Lighting
- Home Lighting

These mappings are planning recommendations only and not implementation authority.

## 13. Public Information Page Search Mapping

Public Information Page Search should help visitors reach support and contact pathways without exposing internal documentation.

Required example mapping:

Search term:
`how do I reach you`

Possible results:

- Contact
- Support

Additional public terms may map to:

- About
- How It Works
- Why WNYHS

Public Information results should remain customer-facing and should not include technical docs, repository docs, runtime docs, deployment details, or internal operations pages.

## 14. Homepage Search Requirements

Homepage Search should support broad discovery.

Requirements:

- Search should be available from primary navigation.
- Homepage should include visible Search Access.
- Search should support category, package, solution, and public information discovery.
- Search should support homeowner problem language and device terms.
- Search placement should not replace Category Explorer, Featured Packages, Featured Solutions, WNYHS Core, or CTA requirements from `HOMEPAGE_REDESIGN_PLAN_REV01.md`.

This plan does not authorize Homepage implementation or Search implementation.

## 15. QR Landing Search Requirements

QR Landing Search should remain compact and conversion-friendly.

Requirements:

- Search should be available from QR Landing.
- Search should not turn QR Landing into a full browsing experience.
- Search should not weaken Request Estimate or Call / Text priority.
- Search should preserve QR Landing's conversion role.
- Search must not modify QR attribution behavior, `/qrlanding` behavior, requestId behavior, lead-signal behavior, analytics, or runtime behavior.

This plan does not authorize QR Landing implementation, QR attribution changes, or Search implementation.

## 16. Mobile Search Requirements

Mobile Search should be:

- Easy to find from the mobile menu.
- Touch-friendly.
- Legible on small screens.
- Keyboard accessible.
- Compatible with visible focus states.
- Clear about what can be searched.
- Secondary to critical conversion actions where space is limited.

Mobile Search must not require visitors to understand internal page structures or technical terminology.

## 17. Accessibility Requirements

Future Search implementation should plan for:

- Keyboard access.
- Visible focus states.
- Clear labels.
- Screen-reader-friendly input naming.
- Result type labels.
- Empty-state messaging.
- No-results guidance.
- Touch-friendly controls.
- High contrast aligned to the visual system.
- Mobile readability.

Accessibility must apply to Search input, result list, result type labels, keyboard navigation, and mobile menu access.

## 18. Forbidden Result Types

Search must not return:

- Runtime routes.
- Internal system pages.
- Admin pages.
- Hidden routes.
- Draft-only pages.
- Protected pages.
- API endpoints.
- Technical docs.
- Repository docs.
- Deployment/runtime information.
- Environment or secret references.
- HubSpot, Stripe, Resend, Cloudflare, Google Workspace, scheduling, analytics, or protected-system configuration details.

## 19. Forbidden Implementation Scope

This planning task does not authorize:

- Application or source file edits.
- Route changes.
- Asset changes.
- Image generation.
- CSS, token, or component changes.
- Search implementation.
- Search indexing implementation.
- Search provider selection.
- Search API creation.
- Runtime behavior changes.
- Homepage implementation.
- QR Landing implementation.
- QR attribution behavior changes.
- Cloudflare changes.
- HubSpot changes.
- Stripe changes.
- Resend changes.
- Google Workspace changes.
- Scheduling changes.
- Analytics changes.
- Secrets or credential recording.
- Merge to `main`.

## 20. Implementation Readiness Checklist

A future implementation task should not begin until:

- This plan is merged through the repo PR process.
- The active task register entry explicitly authorizes Search implementation.
- Target source, style, content, route, and data/index files are named in the implementation work order.
- Allowed result types are confirmed.
- Forbidden result types are restated as validation gates.
- Category, Package, Solution, and Public Information source ownership is defined.
- Search metadata fields are approved.
- Homepage Search placement is explicitly authorized or excluded.
- QR Landing Search placement is explicitly authorized or excluded.
- QR attribution preservation is listed as a release gate if QR Landing files are touched.
- Protected-system boundaries are restated in the implementation work order.
- Build, route-level validation, accessibility checks, and result-scope regression checks are defined for implementation.

## 21. Follow-Up Implementation Task Recommendation

Recommended future task:

- **Task ID:** SEARCH-UX-IMPLEMENTATION-001
- **Type:** Bounded public-site Search implementation.
- **Dependency:** `docs/planning/SEARCH_UX_PLAN_REV01.md`
- **Recommended scope:** Implement public Search access from primary navigation, Homepage, QR Landing, and mobile menu using approved public result types, metadata, result labeling, ranking guidance, accessibility requirements, and forbidden-result gates.
- **Required exclusions unless separately authorized:** Homepage redesign implementation, QR Landing redesign implementation, QR attribution behavior changes, runtime changes, protected systems, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, analytics, secrets, API changes outside approved Search scope, and route changes outside approved Search scope.

This recommendation is planning only and does not authorize implementation.
