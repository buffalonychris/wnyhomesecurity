# SITEARCH004 WNYHS Legacy Category Route Transition Plan REV01

## 1. Purpose

This document defines the future treatment of legacy flat category routes after canonical category routes have been created.

This is a docs-only governance plan. It does not implement redirects, change routes, modify navigation, update page content, change search, edit sitemap or robots files, change canonical tags, generate images, or touch protected runtime systems.

## 2. Authority

Controlling task: `T-SITEARCH002-002 - Legacy Flat Route Redirect/Alias Plan`.

Current operational context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.

Primary authority and source documents:

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/codex/CODEX_RUN_CONTRACT.md`
- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`

If this plan conflicts with higher-authority repository governance, the higher-authority source controls.

## 3. Relationship to SITEARCH001

`SITEARCH001` records the current public information architecture and identifies a route conflict: `/home-security` functions as the effective WNYHS homepage while also looking like a Home Security category route.

## 3A. T-CATEGORYRECON001 successor note

`docs/site-architecture/SITEARCH005_WNYHS_SIX_CATEGORY_RECONCILIATION_DECISION_REV01.md` is the current six-category reconciliation. It preserves this plan's staged treatment of the five existing flat legacy routes, confirms Home Safety at `/categories/home-safety`, and recommends the deferred sixth canonical route `/categories/property-management`. This plan remains authoritative for transition handling of the five existing legacy routes; it does not establish a legacy Property Management route.

`SITEARCH004` uses that finding to define how legacy flat category routes should be treated in a future bounded route task.

## 4. Relationship to SITEARCH002

`SITEARCH002` establishes the target category route pattern:

```text
/categories/<category-slug>
```

It also states that `/` is the canonical homepage and that `/home-security` must not remain the long-term homepage. `SITEARCH004` defines the transition model needed before any legacy flat category route is redirected or retained as an alias.

## 5. Relationship to SITEARCH003

`SITEARCH003` defines Phase 2 as legacy flat-route redirect/alias handling after canonical category routes exist.

`SITEARCH004` is the Phase 2 governance plan. It does not perform Phase 2 implementation.

## 6. Current Route Inventory

Current category-related route systems:

| Role | Route pattern | Current status |
| --- | --- | --- |
| Canonical category routes | `/categories/<category-slug>` | Added by `T-SITEARCH002-001`; current target pattern. |
| Legacy flat category routes | `/<category-slug>` | Still preserved; future treatment needs explicit implementation authorization. |
| Homepage route | `/` | Canonical homepage decision in `SITEARCH002`; current runtime behavior may still preserve historical host entry behavior until a bounded task changes it. |

## 7. Canonical Category Route Inventory

Canonical category routes:

| Category | Canonical route |
| --- | --- |
| Home Security | `/categories/home-security` |
| Home Automation | `/categories/home-automation` |
| Home Safety | `/categories/home-safety` |
| Home Lighting | `/categories/home-lighting` |
| Aging in Place | `/categories/aging-in-place` |

## 8. Legacy Route Inventory

Legacy flat category routes:

| Legacy route | Canonical target |
| --- | --- |
| `/home-security` | `/categories/home-security` |
| `/home-automation` | `/categories/home-automation` |
| `/home-safety` | `/categories/home-safety` |
| `/home-lighting` | `/categories/home-lighting` |
| `/aging-in-place` | `/categories/aging-in-place` |

## 9. Legacy Route Ownership

Legacy flat category routes are owned by Site Architecture governance until a future bounded implementation task assigns final runtime behavior.

Ownership rules:

- Canonical category ownership belongs to `/categories/<category-slug>`.
- Legacy flat route ownership is transitional, not permanent category ownership.
- `/home-security` requires special handling because of its previous homepage role.
- Campaign, QR, support, quote, planner, payment, scheduling, and API routes are outside this plan.

## 10. Route Transition Principles

- Preserve working access until a future task explicitly authorizes redirects.
- Promote canonical routes before redirecting legacy flat routes.
- Do not remove a legacy route without a tested redirect or a documented alias decision.
- Do not combine route transition with navigation, footer, sitemap, search, canonical tag, or page-content work unless a future task explicitly authorizes that combined scope.
- Treat `/home-security` as the highest-risk legacy flat route because of homepage-history concerns.
- Use reversible, narrow implementation tasks.

## 11. Redirect Strategy Options

| Option | Description | Recommended use |
| --- | --- | --- |
| Immediate permanent redirects | Legacy flat routes redirect directly to canonical `/categories/*` routes. | Not recommended as the next step because internal links, campaign links, and indexing context need review first. |
| Staged permanent redirects | Legacy flat routes remain aliases while canonical links are promoted, then redirect after validation. | Recommended transition model. |
| Temporary redirects | Legacy flat routes use temporary redirects during validation. | Possible for a short technical validation window, but not the preferred final state. |
| No redirects | Legacy flat routes stay as independent aliases indefinitely. | Not recommended for all routes because it preserves duplicate category URLs. |

Future implementation should prefer server/static-host redirect handling where appropriate for public URL canonicalization, but this plan does not choose a specific implementation file or platform mechanism.

## 12. Alias Strategy Options

| Option | Description | Recommended use |
| --- | --- | --- |
| Temporary aliases | Legacy routes render the same category pages while canonical links are promoted. | Recommended for Phase A and Phase B. |
| Permanent aliases | Legacy routes remain live indefinitely without redirecting. | Consider only when a specific route has durable campaign, partner, printed-material, or operational need. |
| Route-specific exception alias | One legacy route remains an alias longer than others. | Recommended only if evidence shows a route still receives important direct traffic or has unresolved homepage-history risk. |

The default alias posture should be temporary, not indefinite.

## 13. SEO Considerations

Search engines should be given time to process canonical route promotion before legacy flat routes are redirected.

Future SEO-related tasks should:

- Promote canonical `/categories/*` links in internal navigation and page links before redirecting legacy routes.
- Align sitemap and canonical tags only in a dedicated SEO/canonical task.
- Avoid duplicate long-term category URLs.
- Preserve access for direct visitors during the transition.
- Verify status codes and canonical destinations after implementation.

This plan does not update sitemap, robots, canonical tags, metadata, or SEO policy.

## 14. Existing Backlink Considerations

Legacy flat routes may exist in bookmarks, shared messages, local references, older campaign materials, or third-party backlinks.

Future redirect implementation must:

- Keep every legacy flat route reachable through either alias or redirect behavior.
- Avoid 404 outcomes for the five listed legacy routes.
- Validate each legacy route individually.
- Preserve query strings unless a future task documents a route-specific reason not to.
- Record any known campaign or print-source references before changing behavior.

## 15. Campaign Considerations

Campaign routes are outside this plan, but flat category links may have been used in informal campaign contexts.

Future implementation should:

- Audit known QR, print, local marketing, and referral materials before redirecting legacy flat category routes.
- Preserve query parameters where practical.
- Avoid changing `/qrlanding` or campaign attribution behavior.
- Avoid changing navigation, CTA behavior, forms, or lead intake during route transition.

## 16. Homepage Conflict Considerations

Previous conflict:

- `/home-security` has served as the effective WNYHS homepage and also reads as a Home Security category route.
- `SITEARCH002` resolves the target ownership by defining `/` as the canonical homepage and `/categories/home-security` as the canonical Home Security category route.

Risks of future confusion:

- Redirecting `/home-security` too early could surprise visitors who still expect the broader homepage experience.
- Leaving `/home-security` as a long-term independent alias could keep the homepage/category conflict alive.
- Changing `/home-security` in the same task as homepage canonicalization, navigation updates, or SEO updates would make rollback harder.

Recommended permanent ownership model:

- `/` owns homepage entry.
- `/categories/home-security` owns the Home Security category.
- `/home-security` becomes a legacy route that eventually redirects to `/categories/home-security` after canonical homepage behavior and canonical category links are stable.

## 17. Recommended Transition Model

### Phase A

- Canonical `/categories/*` routes remain active.
- Legacy flat routes remain aliases.
- No redirects are added.
- No navigation, footer, search, sitemap, robots, canonical tags, or page content is changed.
- Validate that each canonical route and legacy route renders the expected existing category page.

### Phase B

- Canonical category routes are promoted everywhere through separately authorized navigation, footer, embedded-link, sitemap, and canonical tasks.
- Legacy flat routes remain aliases during this promotion period.
- Search engines are given time to process the canonical route structure.
- `/home-security` receives extra validation against homepage-history expectations.

### Phase C

- Legacy flat routes are redirected to their canonical `/categories/*` targets through a separately authorized implementation task.
- Redirects should be validated route by route.
- Query-string preservation should be verified.
- Rollback must restore alias behavior quickly if direct traffic, campaign traffic, or homepage-history behavior regresses.

## 18. Validation Requirements

Future implementation validation should include:

- `git diff --stat`
- `git diff --name-only`
- `git diff --check`
- `git diff --cached --stat`
- `git diff --cached --name-only`
- `git diff --cached --check`
- `npm run build`
- Route inventory verification for the five canonical category routes.
- Route inventory verification for the five legacy flat routes.
- Redirect status and target verification when redirects are implemented.
- Query-string preservation check when redirects are implemented.
- Changed-file scan confirming protected systems remain untouched.

Docs-only tasks for this plan must run the validation required by the work order.

## 19. Rollback Requirements

Future redirect implementation must include a rollback plan before changes are made.

Rollback requirements:

- Restore legacy flat routes to alias behavior if redirect behavior causes problems.
- Keep redirect or alias changes isolated from navigation, sitemap, robots, search, and page-content changes.
- Preserve canonical `/categories/*` routes during rollback unless the future task explicitly authorizes otherwise.
- Document the exact files and route declarations or redirect rules changed by the implementation task.
- Confirm no protected runtime systems changed during rollback.

## 20. Future Implementation Task Definition

Recommended future task:

```text
Task ID: T-SITEARCH002-002B
Task Name: Legacy Flat Category Route Redirect Implementation
Purpose: Implement redirects from approved legacy flat category routes to canonical `/categories/*` routes after canonical links and SEO readiness are validated.
Allowed Scope: Redirect or alias implementation for `/home-security`, `/home-automation`, `/home-safety`, `/home-lighting`, and `/aging-in-place`; route validation; task-register evidence.
Forbidden Scope: No navigation, footer, search, sitemap, robots, canonical tags, page content, category content, solution content, image, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API, Resend/email, Cloudflare dashboard/config, environment, dependency, or package-lock changes unless explicitly authorized by that future task.
```

Recommended prerequisite tasks before final redirects:

- Navigation and embedded-link canonical promotion.
- Sitemap/canonical readiness review.
- Direct-link and campaign-reference audit.
- `/home-security` homepage-history validation.

## 21. Codex Restrictions

Codex must not use this document as authority to:

- Add redirects.
- Remove routes.
- Rename routes.
- Modify navigation.
- Modify footer links.
- Modify breadcrumbs.
- Modify search.
- Modify sitemap.
- Modify robots.
- Modify canonical tags.
- Modify category pages.
- Modify solution pages.
- Modify page content.
- Modify image pipelines.
- Generate images.
- Touch HubSpot.
- Touch Stripe/payment.
- Touch scheduling.
- Touch planner.
- Touch quote flow.
- Touch backend/API runtime.
- Touch Resend/email.
- Touch Cloudflare configuration.
- Touch environment variables or secrets.
- Change dependencies or package-lock.

Every implementation task must have its own active task-register entry or explicitly bounded prompt-created work order permitted by higher-authority governance.

## 22. Success Criteria

This plan is successful when:

- `SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md` exists.
- Ownership, redirect strategy, alias strategy, migration sequence, validation requirements, and rollback requirements are documented.
- Current, canonical, and legacy route inventories are documented.
- `/home-security` homepage-history risk and permanent ownership model are documented.
- Phase A, Phase B, and Phase C recommendations are documented.
- Future implementation task boundaries are documented.
- `docs/system/master-task-register.md` is updated.
- `docs/DOCUMENT_CATALOG.md` is updated.
- `docs/MARKDOWN_MANIFEST.md` is updated if required by repository convention.
- No redirects, route changes, navigation changes, footer changes, search changes, page-content changes, image generation, protected-system changes, dependency changes, or package-lock changes are made.
