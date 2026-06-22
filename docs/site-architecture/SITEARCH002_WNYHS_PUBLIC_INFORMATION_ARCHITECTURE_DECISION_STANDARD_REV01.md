# SITEARCH002 WNYHS Public Information Architecture Decision Standard REV01

## 1. Purpose

This document converts `SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md` findings into public information architecture decisions for future bounded implementation tasks.

This is a docs-only decision standard. It does not rename routes, move routes, add redirects, implement search, change navigation, change footer links, change breadcrumbs, edit page content, edit category pages, edit solution pages, generate images, or change protected runtime systems.

## 2. Authority

Controlling task: `T-SITEARCH001-002 - Public Information Architecture Decision Standard`.

Current operational context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.

Primary sources:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/codex/CODEX_RUN_CONTRACT.md`
- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`
- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`
- `docs/governance/CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01.md`
- `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`
- `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`
- `docs/planning/SEARCH_UX_PLAN_REV01.md`
- `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`

If this standard conflicts with higher-authority repository governance, the higher-authority source controls.

## 3. Relationship to SITEARCH001

`SITEARCH001` is the audit record. It documents current route ownership, navigation, search status, demo/dashboard routes, SEO posture, package visibility, WNYHS Core visibility, and route conflicts.

`SITEARCH002` is the decision standard. It records the target public information architecture that future bounded implementation tasks should follow unless a higher-authority document revises it.

## 4. Core architecture decision

The public site should use a customer-facing discovery hierarchy:

```text
Homepage
-> Category
-> Solution
-> Estimate / Contact
```

The internal business/catalog hierarchy remains separate:

```text
Purpose
-> Part Number
-> Solution
-> Package
-> Category
-> Homepage
```

The internal hierarchy informs content governance and catalog ownership. It should not control public navigation order.

## 5. Public customer journey

The canonical public customer journey is:

```text
Homepage
-> Category
-> Solution
-> Estimate / Contact
```

Direct-entry journeys must still work. Visitors may arrive at a category page, solution page, campaign page, support page, or contact page without seeing the homepage first.

## 6. Internal catalog/business hierarchy

Internal ownership should follow:

```text
Purpose
-> Part Number
-> Solution
-> Package
-> Category
-> Homepage
```

This hierarchy is for planning, content ownership, catalog generation, and internal traceability. Public pages should remain homeowner-oriented and should not expose internal BOMs, part-number systems, package IDs, cost basis, or operational data.

## 7. Homepage ownership decision

The canonical homepage is `/`.

Do not move the homepage to `/home`, `/main`, or another alias.

`/home-security` must not serve as the long-term homepage. It should resolve into a category role or a legacy alias decision in a future bounded route cleanup task.

## 8. Category route decision

Canonical category routes should use:

- `/categories/home-security`
- `/categories/home-automation`
- `/categories/home-safety`
- `/categories/home-lighting`
- `/categories/aging-in-place`

Current legacy flat routes require later cleanup or redirect decisions:

- `/home-security`
- `/home-automation`
- `/home-safety`
- `/home-lighting`
- `/aging-in-place`

The `/home-safety` route name should be reconciled with the approved category name Environmental Safety in a future bounded implementation task.

## 9. Solution route decision

Canonical solution routes should use:

```text
/solutions/<solution-slug>
```

Solution pages are first-class SEO and content destinations. Package-page anchors may remain contextual references, but route-backed solution pages should be the canonical long-form destination for approved public solution objects.

## 10. Package visibility decision

Packages are internal sales/catalog constructs.

Packages may be referenced on category and solution pages when they help homeowners understand buying paths, combined-solution pricing eligibility, and future expansion.

Packages may explain that WNYHS Core is purchased once and reused across future supported additions.

Packages should not become primary public navigation objects unless a later governance decision explicitly changes this.

## 11. WNYHS Core visibility decision

WNYHS Core should appear on:

- Homepage
- Category pages
- Solution pages
- Estimate/contact context

WNYHS Core should be presented as the platform foundation. It should not automatically become a primary-nav destination unless a later governance decision explicitly says so.

## 12. Search ownership decision

Search is a navigation and discovery system, not decorative UI.

Search should become functional in a future bounded implementation task.

Searchable content should include:

- Categories
- Solutions
- Major support/about/our-work/contact pages
- Approved public education content

Search should not include internal BOMs, package IDs, part numbers, protected runtime pages, private operational data, internal docs, admin pages, API endpoints, deployment details, or secrets.

## 13. Demo/dashboard ownership decision

Interactive demo/dashboard routes should be classified as Demo/Experience pages.

Demo routes should be intentionally linked from relevant marketing, category, or solution contexts only when they are approved as public experiences.

`/newsite/*` demo routes require later visibility and canonical cleanup.

Demo pages should not remain scattered hidden routes without ownership.

## 14. Campaign route decision

`/qrlanding` is Campaign-owned.

It should remain intentionally separate from normal navigation when campaign attribution requires that separation.

Do not fold QR landing into normal category or solution routing without explicit campaign governance.

## 15. Support/about/our-work/contact decision

Support, About, Our Work, and Contact are Marketing/Trust/Support pages.

They should have stable public routes and appear in appropriate navigation and footer contexts.

`/contact` may remain both a public information page and the estimate/contact conversion path, as long as future implementation preserves protected runtime boundaries.

## 16. Legal/system route decision

`/privacy` and `/terms` are Legal-owned.

404, success, error, thank-you, confirmation, and payment-related public pages are System/Conversion-owned as applicable.

Operator, token, transaction, prototype, and other internal/system routes must not be treated as public discovery content.

## 17. Primary navigation decision

Recommended primary navigation should prefer:

- Categories or Solutions discovery entry
- Our Work
- Demo or Dashboard Experience, only if intentionally public
- Support
- Contact / Estimate CTA

Do not make packages the primary "Solutions" destination.

Future navigation implementation must reconcile this decision with existing locked header/footer standards through a separate bounded navigation task.

## 18. Footer navigation decision

Footer navigation should include:

- Core marketing pages
- Categories
- Key solution discovery links or a solutions index
- Support/contact
- Privacy/terms

Footer changes require a separate bounded navigation/footer task. This standard does not change footer links.

## 19. Breadcrumb decision

Canonical breadcrumb model:

```text
Home
-> Category
-> Solution
```

Breadcrumb implementation is deferred. This standard does not enable breadcrumbs or modify current breadcrumb behavior.

## 20. Internal linking decision

Internal linking should follow:

- Homepage links to category pages.
- Category pages link to relevant solution pages.
- Solution pages link to related solutions and estimate/contact.
- Package references appear contextually but do not control navigation.

Future implementation should reduce duplicate solution destinations and route package anchors toward canonical solution pages where approved.

## 21. Canonical URL and redirect decision

No immediate redirects are authorized by this task.

Future route cleanup must decide whether legacy flat category routes redirect to canonical `/categories/*` routes.

Future redirect planning must avoid breaking existing campaign traffic, QR traffic, shared links, or indexed URLs without explicit redirect planning.

## 22. SEO indexing decision

Category and solution pages should generally be indexable after canonical routes, metadata, and sitemap policy are implemented.

QR landing indexing depends on campaign governance.

Demo indexing depends on demo/public-experience governance.

Legal pages should be accessible.

Search result pages may require `noindex` depending on implementation details.

## 23. Route conflict resolution plan

Known conflicts and decisions:

| Conflict | Decision |
| --- | --- |
| `/home-security` conflict between homepage/history and category use | `/` is canonical homepage. `/home-security` requires future category/legacy alias resolution. |
| Header "Solutions" pointing to `/packages` | Future nav should not make packages the primary Solutions destination. |
| Search being placeholder/anchor only | Search should become functional through a separate bounded implementation task. |
| Demo/dashboard routes scattered across `/home-security/dashboard`, `/demo`, `/5-day-demo`, `/newsite/demos`, and static demo HTML | Classify as Demo/Experience and assign future visibility/canonical ownership. |
| `/home-safety` naming vs Environmental Safety governance | Reconcile route naming in a future category route task. |
| Route-backed solution pages coexisting with package-page solution anchors | Canonical solution pages should use `/solutions/<solution-slug>`; package anchors should become contextual references. |

## 24. Required future implementation tasks

Future bounded tasks should be created for:

- Homepage canonicalization plan for `/`.
- Category route implementation and legacy flat-route cleanup plan.
- Solution route expansion decision matrix.
- Navigation governance reconciliation.
- Footer navigation reconciliation.
- Breadcrumb implementation decision.
- Public search implementation specification.
- Demo/dashboard visibility and canonical ownership decision.
- SEO policy, canonical URL, sitemap, and robots reconciliation.
- System/prototype/internal route public exposure review.

No future task is authorized by this list alone. Each item requires its own bounded task-register entry or prompt-created work order permitted by higher governance.

## 25. Codex restrictions

Codex must not use this document as authority to:

- Rename routes.
- Move routes.
- Add redirects.
- Implement search.
- Modify navigation.
- Modify footer links.
- Modify breadcrumbs.
- Modify page content.
- Modify category pages.
- Modify solution pages.
- Modify image-generation pipeline.
- Generate image assets.
- Touch HubSpot.
- Touch Stripe/payment.
- Touch scheduling.
- Touch planner.
- Touch quote flow.
- Touch backend/API runtime.
- Touch Resend/email.
- Touch Cloudflare config.
- Touch environment variables or secrets.
- Change dependencies or package-lock.

## 26. Success criteria

This standard is successful when:

- `SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md` exists.
- Homepage ownership is documented as `/`.
- Category route pattern is documented as `/categories/<category-slug>`.
- Solution route pattern is documented as `/solutions/<solution-slug>`.
- Package visibility is documented as contextual, not primary navigation by default.
- WNYHS Core visibility is documented as platform-foundation visibility across key public contexts.
- Search is documented as future functional navigation/discovery.
- Demo/dashboard ownership is documented as Demo/Experience.
- Campaign, support/about/our-work/contact, legal/system, primary nav, footer, breadcrumbs, internal links, canonical/redirect, SEO, and route-conflict decisions are documented.
- Required future implementation tasks are listed.
- No source, route, navigation, footer, search, page-content, category, solution, image, protected runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, or secret files are changed.
