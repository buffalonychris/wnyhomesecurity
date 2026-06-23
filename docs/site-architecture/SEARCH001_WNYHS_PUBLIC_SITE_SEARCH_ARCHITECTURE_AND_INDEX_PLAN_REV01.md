# SEARCH001 WNYHS Public Site Search Architecture and Index Plan REV01

## 1. Purpose

This document defines the future public-site search architecture and index plan for WNY Home Security.

This is a docs-only architecture and index plan. It does not implement search, create a search route, change header or homepage search UI, modify navigation, update sitemap or robots files, change canonical tags, edit public page content, or touch protected runtime systems.

## 2. Authority

Controlling task: `T-SEARCH001-001 - Search Architecture and Index Plan`.

Current operational context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.

Primary authority and source documents:

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
- `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`

If this plan conflicts with higher-authority repository governance, the higher-authority source controls.

## 3. Relationship to SITEARCH001/SITEARCH002/SITEARCH003

`SITEARCH001` found that current search is placeholder/anchor behavior, not a functional discovery system.

`SITEARCH002` decides that search is navigation and discovery, not decorative UI. It also defines the target public hierarchy of Homepage -> Category -> Solution -> Estimate / Contact and keeps internal catalog objects out of public navigation by default.

`SITEARCH003` places search after route and content ownership stabilization. It identifies search as Phase 5, after canonical category routes, legacy-route planning, navigation correction, and footer/embedded link correction.

`SEARCH001` is the Phase 5 planning artifact. It defines the future searchable content model, excluded content model, result behavior, index-source options, recommended implementation model, and next bounded tasks.

## 4. Current search findings

Current findings from SITEARCH001:

- No dedicated `/search` React route exists.
- The WNYHS header Search item points to `/home-security#home-search`.
- The current homepage search surface is an access/placeholder section with example terms.
- Search does not currently query an index, filter public content, or route visitors to result objects.
- Current search behavior can create a discovery dead end because it signals a feature that is not yet functional.

No source inspection in this task changed or revalidated those findings. This task records the future plan only.

## 5. Search ownership

Search is public-site navigation and discovery.

Search is not:

- internal catalog search
- BOM search
- operations search
- quote-workspace search
- CRM search
- admin/operator search
- payment, scheduling, or protected-runtime search

Search should help a public visitor find the right category, solution, trust/support page, or approved public education page and then continue toward Estimate or Contact when appropriate.

## 6. Searchable content model

Future public search should index approved public content only:

- canonical category pages
- route-backed solution pages
- major public marketing and trust pages
- support and contact pages
- demo/dashboard pages only when intentionally approved as public experiences
- approved public education content if added later

Primary searchable content types should be:

| Type | Example route pattern | Search role |
| --- | --- | --- |
| Category | `/categories/home-security` | Broad need area and homeowner entry point |
| Solution | `/solutions/<solution-slug>` | Specific problem/answer page |
| Marketing/trust page | `/about`, `/our-work`, `/comparison`, `/reliability` | Confidence and decision support |
| Support/contact page | `/support`, `/contact` | Help, estimate, and service access |
| Demo/experience | Future approved demo route | Public product experience only if intentionally public |
| Education | Future approved public education route | Non-operational homeowner guidance |

## 7. Non-searchable content model

Search must not index:

- internal BOMs
- part numbers
- package IDs as primary objects
- protected runtime routes
- payment routes
- quote, agreement, planner, admin, and operator internals
- private operational docs
- governance docs
- environment/config/secrets
- HubSpot/internal CRM data
- API endpoints
- deployment details
- vendor cost basis or margin details
- internal catalog implementation records
- private customer, estimate, or scheduling data

Search must not expose a public path to content that is not already intentionally public.

## 8. Search result object model

Each indexed public item should use a stable result object:

| Field | Purpose |
| --- | --- |
| `title` | Human-readable result title |
| `type` | Category, Solution, Page, Support, Contact, Demo, or Education |
| `route` | Public route to navigate to |
| `summary` | Short claim-safe result description |
| `keywords` | Matching terms and phrase variants |
| `category` | Related public category, when applicable |
| `priority` | Manual ranking weight |
| `ctaLabel` | Result action label |
| `relatedTerms` | Synonyms and related homeowner terms |

Future implementation should keep result objects small, public, and generated from approved public route/content configuration rather than from runtime customer data.

## 9. Search result ranking model

Recommended initial ranking:

1. Exact title match.
2. Exact keyword or related-term match.
3. Category match for broad need terms.
4. Solution match for specific problem terms.
5. Support/contact match for help, service, estimate, and ownership terms.
6. Marketing/trust page match for company, work, comparison, and reliability terms.
7. Manual `priority` as a tie-breaker.

Recommended priority posture:

- Categories should rank highly for broad phrases such as home security, automation, lighting, safety, and aging in place.
- Solution pages should rank highly for specific needs such as water sensor, doorbell camera, driveway camera, family awareness, and vacation home.
- Contact and Support should always remain easy to reach when a query indicates help, estimate, service, price, or availability.
- Packages should not outrank categories or solutions as primary result objects.

## 10. Search UI behavior

Future search UI should:

- Accept typed queries from header/homepage/search-page entry points.
- Navigate to `/search?q=<query>` or open an accessible results surface that can also deep-link to `/search?q=<query>`.
- Group results by type when results are mixed.
- Show a clear empty state with suggested categories and a Contact/Estimate path.
- Avoid dead-end result pages.
- Preserve clear routes to Estimate and Contact.
- Keep mobile behavior usable with a full-width input, readable result cards, and predictable close/back behavior.
- Support keyboard entry, result focus, Enter activation, Escape close for overlays, and visible focus states.
- Avoid changing navigation or header behavior until a future implementation task explicitly authorizes it.

## 11. Search route decision

Recommended future public route:

```text
/search
```

Recommended query pattern:

```text
/search?q=<query>
```

This task does not create `/search` and does not modify current Search links. A future implementation task must decide whether the header search navigates directly to `/search?q=...`, opens an overlay that shares the same result logic, or uses a hybrid model.

## 12. Search index source options

Potential index sources:

| Option | Description | Assessment |
| --- | --- | --- |
| Static client-side index from approved public route/content config | Build or maintain a small public JSON/TS index from approved public content records. | Recommended first model. Fits current static public-site needs and avoids protected data. |
| Generated static index at build time | Generate a JSON index from route/content config during build. | Good later improvement if source ownership is stable. |
| Server/API search endpoint | Query a server endpoint for results. | Not recommended as first model unless future architecture requires server-side control. |
| External paid search tooling | Use a hosted search provider. | Not recommended as first implementation because current need is small, public, and controllable. |
| Runtime content crawl | Crawl rendered pages to produce index data. | Not recommended initially because it can blur source ownership and indexing exclusions. |

## 13. Recommended implementation model

Prefer a static client-side public search index generated from approved public route/content configuration.

Recommended first implementation characteristics:

- Public-only index committed or generated from public source config.
- No calls to HubSpot, Stripe, scheduling, quote, planner, API, or operator data.
- No dependency changes unless a future implementation task explicitly authorizes them.
- Small plain-text fields for title, type, route, summary, keywords, category, priority, CTA label, and related terms.
- Result grouping and ranking handled in local frontend code.
- `/search` route added only in a future bounded implementation task.
- Header/homepage search wiring changed only in a future bounded implementation task.

## 14. Data/source ownership

Search index ownership should follow public content ownership:

- Category records should be owned by category-page/content governance.
- Solution records should be owned by solution-page/content governance.
- Marketing/trust/support records should be owned by public page governance.
- Demo records should be included only after demo/public-experience governance approves them.
- Education records should be included only after they are approved as public content.

The search index should reference public routes and approved summaries. It should not become an alternate source of truth for packages, catalog data, pricing, runtime flows, or CRM records.

## 15. Category indexing rules

Category result objects should include:

- Home Security: `/categories/home-security`
- Home Automation: `/categories/home-automation`
- Home Safety: `/categories/home-safety`
- Home Lighting: `/categories/home-lighting`
- Aging in Place: `/categories/aging-in-place`

Rules:

- Canonical `/categories/*` routes should be primary category result routes.
- Legacy flat category routes should not be primary result routes unless a future transition task changes the route strategy.
- Category summaries must remain broad and claim-safe.
- Category result CTAs should send visitors to the category page, not directly into protected flows.

## 16. Solution indexing rules

Route-backed public solution pages should be indexed as solution results.

Known current route-backed solution examples from SITEARCH001:

- `/solutions/senior-safety`
- `/solutions/water-protection`
- `/solutions/family-awareness`
- `/solutions/vacation-homes`

Rules:

- Solution result objects should point to canonical `/solutions/<solution-slug>` routes.
- Package-page anchors may inform related terms but should not become primary search routes.
- Anchor-only solution objects should not be promoted as full solution results until a future task approves route-backed ownership or a result-route strategy.
- Solution summaries must avoid unsupported claims.

## 17. Marketing/support page indexing rules

Search should include major public marketing, trust, support, and contact pages when they are approved for public discovery.

Candidate result routes include:

- `/about`
- `/our-work`
- `/comparison`
- `/reliability`
- `/support`
- `/contact`
- `/privacy`
- `/terms`

Rules:

- Support and Contact should be easy to find for help, estimate, service, and question-oriented terms.
- Legal pages may be searchable by direct legal terms, but they should not dominate normal homeowner need queries.
- Marketing/trust pages should rank below exact category or solution matches for specific homeowner needs.

## 18. Package visibility rules

Packages may appear only as contextual related results if public pages already expose them.

Rules:

- Packages should not become primary search objects unless later governance explicitly says so.
- Package IDs must not be indexed as primary public objects.
- Search should not expose internal package structure, margin assumptions, BOMs, or part-number details.
- If package context appears, it should route through existing approved public package or category context and stay secondary to categories and solutions.

## 19. Demo/dashboard indexing rules

Demo/dashboard pages should be included only if intentionally approved as public experiences.

Rules:

- Prototype, internal, or experimental demo routes should not be indexed.
- `/newsite/*` should not be treated as public search content without a future visibility decision.
- Static demo files should not be indexed merely because they are reachable.
- A demo result must have an approved public route, title, summary, and CTA before inclusion.

## 20. QR/campaign indexing rules

QR and campaign routes are campaign-owned, not normal public search-owned by default.

Rules:

- `/qrlanding` should not be added to public search unless campaign governance explicitly approves it.
- Search must not change QR attribution behavior, source parsing, requestId behavior, or lead-signal payload behavior.
- Search must not create alternate campaign destinations for printed QR materials.
- Campaign query strings should not become indexed result variants.

## 21. Legal/system indexing rules

Legal pages:

- `/privacy`
- `/terms`

Legal pages may be searchable by legal/help terms if future SEO/search implementation chooses to include them.

System and protected routes must not be searchable, including:

- quote, agreement, payment, schedule, resume, verify, print, planner, operator, admin, prototype, UAT, API, and internal tool routes
- payment success/cancel routes
- protected runtime routes
- private docs or operational records

## 22. Accessibility requirements

Future search implementation must:

- Provide a visible label or accessible name for the search input.
- Preserve keyboard-only operation.
- Support Enter to submit and predictable result activation.
- Provide visible focus states for inputs, buttons, and result links.
- Announce or expose result counts in an accessible way.
- Keep result headings and groups semantically structured.
- Avoid trapping focus unless an overlay/modal pattern is intentionally implemented.
- Ensure mobile result controls remain reachable and readable.

## 23. SEO considerations

Recommended SEO posture:

- The search route itself should likely be `noindex, follow` unless a future SEO task decides otherwise.
- Result pages with arbitrary query parameters should not create crawl bloat.
- Category and solution pages should be the indexable destination pages, not search result pages.
- Search results should use canonical public routes from SITEARCH002 and SITEARCH004.
- Sitemap, robots, canonical, and metadata changes must remain separate until a bounded SEO task authorizes them.

## 24. Privacy/protected-system restrictions

Search must remain public-data-only.

Search must not:

- query HubSpot or CRM records
- query Stripe or payment records
- query scheduling or calendar data
- query quote, agreement, planner, operator, or customer records
- expose requestId, token, resume, payment, or private workflow details
- expose environment variables, config, secrets, private URLs, tokens, or credentials
- use backend/API runtime unless a future task explicitly authorizes that architecture

## 25. Future implementation tasks

Required future bounded tasks:

- `T-SEARCH001-002 - Public Search Index Source Creation`
- `T-SEARCH001-003 - Functional Search UI Implementation`
- `T-SEARCH001-004 - Search Result Validation and Navigation QA`

Recommended task boundaries:

| Task | Purpose | Forbidden adjacent scope |
| --- | --- | --- |
| `T-SEARCH001-002` | Create the approved public search index source from public route/content config. | No UI wiring, no `/search` route unless explicitly included, no protected data, no dependencies unless authorized. |
| `T-SEARCH001-003` | Implement functional search UI and route behavior using the approved index source. | No new content model decisions, no sitemap/robots/canonical changes, no protected systems. |
| `T-SEARCH001-004` | Validate query behavior, result routing, empty states, accessibility, mobile behavior, and protected-scope exclusions. | No feature expansion beyond fixes required for validation unless explicitly authorized. |

Optional later tasks may cover search analytics, SEO handling, or expanded public education content only after the first functional search implementation is stable.

## 26. Codex restrictions

Codex must not use this document as authority to:

- implement search
- add `/search`
- modify header search UI
- modify homepage search UI
- modify navigation
- modify routes
- modify category pages
- modify solution pages
- modify package pages
- modify sitemap
- modify robots
- modify canonical tags
- touch HubSpot
- touch Stripe/payment
- touch scheduling
- touch planner
- touch quote flow
- touch backend/API runtime
- touch Resend/email
- touch Cloudflare config
- touch `.env` or secrets
- change dependencies or package-lock
- generate images

Every future implementation task must have its own active task-register entry or explicitly bounded prompt-created work order permitted by higher-authority governance.

## 27. Success criteria

This plan is successful when:

- `SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md` exists.
- Search ownership is documented as public-site navigation/discovery.
- Searchable and non-searchable content models are documented.
- Search result object, ranking, and UI behavior models are documented.
- `/search` is recommended as a future route without route creation in this task.
- Static client-side public index from approved public route/content config is recommended as the first implementation model.
- Category, solution, marketing/support, package, demo/dashboard, QR/campaign, and legal/system indexing rules are documented.
- Accessibility, SEO, privacy, and protected-system restrictions are documented.
- Future tasks `T-SEARCH001-002`, `T-SEARCH001-003`, and `T-SEARCH001-004` are defined.
- `docs/system/master-task-register.md` is updated.
- `docs/DOCUMENT_CATALOG.md` is updated.
- `docs/MARKDOWN_MANIFEST.md` is updated if required by repository convention.
- No search implementation, route changes, navigation changes, page-content changes, sitemap/robots/canonical changes, protected-system changes, dependency changes, package-lock changes, or image generation occurs.
