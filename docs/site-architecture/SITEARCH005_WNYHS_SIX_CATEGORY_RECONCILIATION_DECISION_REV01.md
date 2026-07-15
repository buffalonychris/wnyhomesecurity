# SITEARCH005 WNYHS Six-Category Reconciliation Decision REV01

Status: Active site-architecture reconciliation decision

Task ID: `T-CATEGORYRECON001`

Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

Customer-facing: No

Implementation authority: No

## 1. Purpose and authority

This document reconciles current WNYHS category, route, homepage, navigation, footer, Solution, SEO, sitemap, search, alias, funnel, and future marketing ownership around the operator-approved six-category model.

It is subordinate to repository governance, the current context, the Master Task Register, and the `T-CATEGORYRECON001` work order. It applies the category identity decisions in `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md` to Site Architecture.

This decision does not change source or runtime behavior. Existing routes remain intact.

## 2. Current-state and conflict summary

Current governance and source represent a mostly five-category system:

- CATEGORY001 REV01 names five categories, uses `Aging-In-Place`, and treats `Environmental Safety` as public-canonical.
- SITEARCH002 defines five canonical `/categories/<slug>` routes, already uses `/categories/home-safety`, and leaves the public-name conflict unresolved.
- SITEARCH004 preserves five flat legacy routes and recommends staged alias-to-redirect handling.
- The homepage explorer shows five entries and uses `Environmental Safety` for `/categories/home-safety`.
- Header navigation does not enumerate the complete category set; its Solutions link points to Home Security.
- The footer enumerates five category links and uses `Home Safety` plus `Aging In Place`.
- SEO metadata, sitemap, and public search index cover five canonical category routes.
- Solution and offer data use reusable category identifiers, including internal `environmental-safety`, but do not contain a complete Property Management public Category.
- No Property Management Category page or route is currently registered.

The conflict is resolved in governance without pretending that source implementation already exists.

## 3. Six-category decision

The canonical public labels and exact order are:

1. Home Security
2. Aging in Place
3. Home Safety
4. Home Automation
5. Home Lighting
6. Property Management

`Home Safety` is public-canonical. `Environmental Safety` is limited to internal classification, historical lineage, SEO-supporting language, or alias documentation under Home Safety.

## 4. Preservation of existing architecture

The current public architecture remains the base system. Future implementation must reconcile it additively:

- preserve `/` as the canonical homepage;
- preserve all five existing canonical category routes;
- preserve all five existing flat legacy category routes until a bounded redirect task changes them;
- preserve existing Solution routes and shared Solution objects;
- preserve the homepage explorer, category-page structure, navigation/footer components, SEO policy, sitemap, and search index as the owner surfaces to extend;
- preserve all funnel, planner, quote, agreement, payment, scheduling, lead-intake, attribution, and runtime behavior.

No parallel category router, catalog, navigation system, SEO registry, search index, or marketing taxonomy is authorized.

## 5. Canonical route decisions

| Category | Canonical route decision | Current implementation |
| --- | --- | --- |
| Home Security | `/categories/home-security` | Implemented |
| Aging in Place | `/categories/aging-in-place` | Implemented |
| Home Safety | `/categories/home-safety` | Implemented |
| Home Automation | `/categories/home-automation` | Implemented |
| Home Lighting | `/categories/home-lighting` | Implemented |
| Property Management | `/categories/property-management` | Recommended canonical route; deferred |

The route pattern remains `/categories/<category-slug>`. Property Management does not receive a separate route family.

## 6. Redirect and alias posture

### Existing flat legacy routes

The current aliases remain supported:

- `/home-security`
- `/aging-in-place`
- `/home-safety`
- `/home-automation`
- `/home-lighting`

SITEARCH004 staged-transition rules continue to apply. This task adds no redirects and removes no route.

### Home Safety and Environmental Safety

- `/categories/home-safety` is canonical.
- `/home-safety` remains the existing legacy alias until separately authorized redirect work.
- No `/environmental-safety` or `/categories/environmental-safety` source route currently exists.
- This task does not invent either route.
- If verified backlinks, print assets, campaign history, or search evidence later justify an Environmental Safety alias, a bounded route/SEO task may redirect the approved alias to `/categories/home-safety`; it must not render a separate category page.
- Internal `environmental-safety` identifiers may remain until a bounded source task can map them safely to public `Home Safety` labeling.

### Property Management

No legacy Property Management route is established. A future implementation should add only `/categories/property-management` unless evidence supports a separately reviewed legacy alias. A flat `/property-management` route is not authorized by this decision.

## 7. Homepage explorer reconciliation

The existing homepage explorer in `src/components/homeSecurity/HomeSecurityLanding.tsx` remains the owner surface.

A future bounded implementation should:

1. use the exact six labels and order;
2. change the public `Environmental Safety` card label to `Home Safety` without changing its canonical destination;
3. normalize the public Aging in Place label;
4. add Property Management as position six using approved content and approved assets;
5. preserve the existing Category -> Package -> Solution discovery order and CTA behavior;
6. update related featured-Solution category labels only where the canonical public label is displayed.

These source changes are deferred because Property Management page content, assets, Solution ownership, SEO metadata, search data, and route tests must be approved together.

## 8. Navigation and footer reconciliation

### Header/navigation

Current owner surfaces are `src/content/wnyhsNavigation.ts` and `src/components/homeSecurity/WnyhsTopNav.tsx`. The header currently uses a single Solutions destination rather than a complete category menu.

This reconciliation does not invent a new header interaction. A future navigation task must decide whether the existing Solutions entry opens a governed discovery destination or exposes categories through the existing component model. If a complete category list is presented, it must use the exact six labels and order.

### Footer

Current owner surfaces are `src/components/homeSecurity/WnyhsSiteFooter.tsx` and `src/content/wnyhsOfferCatalog.ts` category paths.

A future bounded implementation should normalize the five displayed labels/order and add Property Management in position six after its canonical route exists. The current footer remains unchanged in this task.

## 9. Category-page reconciliation

Current page ownership is split across:

- `src/pages/CategoryLandingPage.tsx` for shared Category configuration and layout;
- `src/pages/HomeSafety.tsx`, `src/pages/HomeLighting.tsx`, and `src/pages/AgingInPlace.tsx` as shared-layout wrappers;
- `src/pages/HomeAutomation.tsx` as a specialized Category implementation;
- `src/pages/HomeSecurity.tsx` and its landing components for Home Security.

Future Property Management work should extend the governed Category landing-page system under CATEGORY002. It must not create a parallel page framework. Any specialized implementation requires explicit justification against the shared structure and visual owners.

Current Home Safety content already uses public `Home Safety` at its route/page layer. Internal image filenames and internal identifiers containing `environmental-safety` may remain; renaming assets or identifiers is not required for public canonical naming and could create unnecessary churn.

## 10. Solution-page and ownership reconciliation

Current public Solution routes are registered in `src/App.tsx` and rendered from `src/pages/SolutionOpportunity.tsx`. Broader offer/Solution relationships are represented in `src/content/wnyhsOfferCatalog.ts` and governed by the current Solution and Offering owner set.

Future implementation must:

- retain one canonical Solution object;
- add Primary Category and Secondary Categories through the existing owner system rather than duplicating Solutions;
- map internal `environmental-safety` classification to public Home Safety display;
- classify Property Management as primary only when the property-operations concern is the clearest customer problem;
- use Property Management as secondary for remote, seasonal, outbuilding, infrastructure, or recurring property-care contexts when supported by the approved Solution record;
- preserve current Solution routes unless a separate route task authorizes a change.

The current Solution catalog contains Property Management-related research/classification evidence, but that evidence does not itself approve a public Property Management offer or page.

## 11. Property Management boundaries and relationships

Property Management is the sixth Category, not a standalone business system. It organizes approved Solutions for second homes, seasonal properties, outbuildings, shared or managed properties, and property infrastructure concerns.

Relationship examples:

- Home Security owns entry or perimeter awareness; Property Management may be secondary for an unattended or multi-structure property.
- Home Safety owns water or temperature awareness; Property Management may be secondary for remote-property oversight.
- Home Automation owns coordinated routines; Property Management may be secondary when routines support recurring property operations.
- Home Lighting owns lighting outcomes; Property Management may be secondary for exterior, seasonal, or shared-property use.
- Aging in Place owns independence and household-support outcomes; Property Management should not absorb those concerns merely because another person helps manage the home.

Role permissions, tenancy, privacy, access administration, record retention, and operational responsibility remain unresolved owner areas. Future source work must not infer those rules.

## 12. SEO, canonical metadata, sitemap, and search posture

Current owner surfaces are:

- `src/lib/seoPolicy.ts` for route metadata, canonical path, and index posture;
- `public/sitemap.xml` for listed canonical public URLs;
- `src/content/publicSearchIndex.ts` and `src/lib/publicSearch.ts` for public search data/behavior;
- `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md` and supporting SEO/Site Architecture standards for governance.

Future implementation requirements:

1. Add Property Management metadata only when the canonical page and approved content exist.
2. Add `/categories/property-management` to indexable policy and sitemap only after route/page readiness validation.
3. Add one Property Management category search item using the existing index model.
4. Use `environmental safety` as a Home Safety synonym where useful; never create a separate indexed category item.
5. Preserve canonical Home Safety at `/categories/home-safety`.
6. Update canonical route tests, search-index tests, and sitemap checks in the same bounded implementation.
7. Keep unimplemented or unclassified routes out of the sitemap and public search index.

This task makes no SEO, sitemap, or search source change.

## 13. Funnel and analytics protections

Category reconciliation must not alter:

- the public discovery-to-estimate journey;
- Fit Check, planner, quote, agreement, payment, or scheduling order;
- CTA destinations or form submission behavior without explicit funnel authority;
- `/api/lead-signal`, request correlation, CRM writes, email behavior, payment verification, or scheduling ownership;
- QR or campaign attribution behavior;
- analytics identifiers, events, or third-party tracking without a separate owner and bounded task.

Future category pages and campaigns must enter the existing approved estimate/contact path. A new Category is not authority for new lead, CRM, scheduling, or analytics behavior.

## 14. Exact source implementation inventory

| Surface | Current source | Reconciliation need | This task |
| --- | --- | --- | --- |
| Route registration | `src/App.tsx` | Add deferred Property Management page/route; preserve all existing routes | Deferred |
| Homepage explorer | `src/components/homeSecurity/HomeSecurityLanding.tsx` | Six exact labels/order; add approved sixth card | Deferred |
| Navigation data | `src/content/wnyhsNavigation.ts` | Future category-discovery decision | Deferred |
| Header component | `src/components/homeSecurity/WnyhsTopNav.tsx` | Reuse existing component model after navigation decision | Deferred |
| Footer | `src/components/homeSecurity/WnyhsSiteFooter.tsx` | Normalize order/labels and add sixth link after route readiness | Deferred |
| Category path data | `src/content/wnyhsOfferCatalog.ts` | Add Property Management path/category; map public Home Safety label | Deferred |
| Shared Category page | `src/pages/CategoryLandingPage.tsx` | Add approved Property Management configuration through existing system | Deferred |
| Existing Category wrappers/pages | `src/pages/HomeSecurity.tsx`, `src/pages/AgingInPlace.tsx`, `src/pages/HomeSafety.tsx`, `src/pages/HomeAutomation.tsx`, `src/pages/HomeLighting.tsx` | Preserve; targeted public-label normalization only if separately authorized | Deferred |
| Solution pages | `src/pages/SolutionOpportunity.tsx` | Preserve routes; reconcile category relationships through owners | Deferred |
| Public search data | `src/content/publicSearchIndex.ts` | Add sixth Category and Home Safety synonym posture | Deferred |
| SEO/canonical policy | `src/lib/seoPolicy.ts` | Add sixth route metadata/index posture after page readiness | Deferred |
| Sitemap | `public/sitemap.xml` | Add sixth canonical route after page readiness | Deferred |
| Redirect fallback | `public/_redirects` | Preserve SPA/API behavior; no category redirect in this task | Unchanged |
| Focused tests | `src/content/__tests__/publicSearchIndex.test.ts`, `src/lib/__tests__/publicSearch.test.ts`, `src/lib/__tests__/seoPolicy.test.ts` | Extend with sixth-category behavior in implementation task | Deferred |

No source file is changed by `T-CATEGORYRECON001`.

## 15. Source changes made and deferred

Made now:

- none.

Deferred to one or more separately bounded implementation tasks:

- approved Property Management page content and assets;
- route registration and route tests;
- homepage explorer labels/order/sixth card;
- category path and offer/Solution relationship data;
- navigation and footer reconciliation;
- SEO metadata, indexability, sitemap, and search inclusion;
- legacy alias or redirect implementation supported by evidence;
- focused public-label cleanup on existing source surfaces.

Deferral is required because a partial source edit would expose an incomplete sixth Category or create inconsistent route, SEO, search, and navigation state.

## 16. Required validation for future implementation

Future source implementation must validate, at minimum:

- exact six-category labels and order on every changed complete-list surface;
- route rendering for all six canonical category routes;
- continued access for all five current flat legacy routes;
- Home Safety canonical metadata and Environmental Safety synonym/alias behavior;
- Property Management metadata, canonical URL, sitemap entry, and search result;
- homepage, header/navigation, footer, Category page, and Solution-link integrity;
- focused SEO and public-search tests;
- no changed funnel or protected-system files;
- no unsupported public copy;
- successful repository build and applicable checks.

## 17. Documentation reconciliation performed

This task:

- creates CATEGORY001 REV02 as the current Category identity owner;
- creates SITEARCH005 as the six-category Site Architecture reconciliation;
- adds successor pointers to CATEGORY002, SITEARCH002, and SITEARCH004;
- updates the Document Catalog and Markdown Manifest;
- closes only `T-CATEGORYRECON001` after validation.

Historical REV01 and earlier Site Architecture documents remain preserved.

## 18. T-NEWSOLUTIONS001 unblock condition

`T-NEWSOLUTIONS001` remains `ACTIVE` and operationally blocked during this draft PR. It may resume only after:

1. this reconciliation is reviewed and merged;
2. local `main` is synchronized with the merge;
3. its separate repo-native work order is dispatched;
4. future Solution and marketing classification follows CATEGORY001 REV02 and this SITEARCH005 decision.

This document does not activate, modify, execute, or close `T-NEWSOLUTIONS001`.

## 19. Protected systems and non-goals

No source, runtime, route, UI, public copy, funnel, planner, quote, agreement, payment, scheduling, lead-intake, CRM, email, Home Assistant, Cloudflare, dependency, package-lock, environment, secret, or external platform change is authorized or performed here.

No adjacent task is activated. No merge or deployment action is authorized.
