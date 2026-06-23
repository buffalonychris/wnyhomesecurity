# SEO001 REV01 - WNYHS SEO Foundation Standard

Task ID: T-SEO001-001
Status: Active governance standard
Date: 2026-06-23
Customer-facing: No
Implementation authority: No

## 1. Purpose

This document defines the WNY Home Security SEO foundation standard for future bounded SEO tasks.

SEO001 is a governing framework, not a remediation task. It records ownership, classification, policy, review gates, known risks, and future implementation tracks. It does not change metadata, title tags, canonical tags, sitemap files, robots files, structured data, routes, navigation, public page content, images, or runtime behavior.

## 2. Authority

Controlling task: `T-SEO001-001 - SEO Foundation Standard`.

Current operational context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.

Primary source documents:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/codex/CODEX_RUN_CONTRACT.md`
- `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`
- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`
- `docs/seo/SEO-BASELINE001_WNYHS_PUBLIC_ROUTE_INVENTORY_AND_SEO_BASELINE_REV01.md`

If this standard conflicts with higher-authority repository governance, the higher-authority source controls.

## 3. Relationship to SITEARCH001/SITEARCH002/SEARCH001

`SITEARCH001` is the public information architecture audit. It records current route ownership, navigation, embedded links, search status, SEO/canonical observations, package visibility, WNYHS Core visibility, route conflicts, and recommended future decisions.

`SITEARCH002` is the public information architecture decision standard. It defines the target public hierarchy as Homepage -> Category -> Solution -> Estimate / Contact, sets `/` as the canonical homepage, defines canonical category and solution route patterns, keeps packages contextual by default, and defers SEO implementation to future bounded tasks.

`SEARCH001` is the public search architecture and index plan. It defines search as human navigation/discovery, recommends `/search`, keeps query result URLs under future noindex review, and keeps package, protected, internal, runtime, and private data out of search.

`SEO001` translates those architecture and search decisions into SEO governance. It sets classification, ownership, index, sitemap, robots review, metadata, canonical, schema, image, internal-linking, measurement, and future remediation rules.

## 4. SEO Positioning Model

WNYHS SEO should support local homeowner discovery for smart-property, home security, home automation, environmental safety, lighting, aging-in-place, support, and estimate/contact needs.

The SEO model should follow the public journey:

```text
Homepage
-> Category
-> Solution
-> Estimate / Contact
```

SEO must reinforce WNYHS Core as the customer-owned platform foundation across the site. SEO must not convert internal catalog, package, hardware, cost, quote, CRM, payment, scheduling, or operator systems into public search targets.

## 5. Known SEO Baseline Risks

The prior SEO baseline identified known risks and gaps. These are documented for future remediation only:

- 119 public route candidates were found: 118 React route declarations plus 1 static public HTML file candidate.
- `public/sitemap.xml` contained 7 URLs.
- Many likely indexable current WNYHS routes were missing from the sitemap.
- The sitemap contained legacy/review URLs.
- `public/robots.txt` was structurally acceptable but did not solve index policy.
- Many public WNYHS routes appeared to fall through to client-side `noindex, nofollow`.
- SPA pages lacked route-specific static metadata and content in initial HTML.
- Title metadata was generic.
- Route-specific title, description, canonical, Open Graph, and schema coverage was missing or incomplete.
- No clear app-level schema implementation was found for Organization, LocalBusiness, Service, BreadcrumbList, or FAQPage.
- Route ownership, index policy, sitemap policy, robots policy, metadata ownership, schema ownership, and search inclusion need governance before broad remediation.

These risks must not be fixed under SEO001. They require separate bounded implementation or audit tasks.

## 6. Homepage SEO Ownership

Homepage SEO owner: WNYHS public site / homepage governance.

Homepage route decision from SITEARCH002: `/` is the canonical homepage.

Homepage SEO posture:

- The homepage owns broad local smart-property and service positioning.
- The homepage must not be treated as only a home-security package page.
- The homepage should reinforce the WNYHS Core/platform model.
- The homepage should link visitors toward category, solution, trust, support, and estimate/contact paths.
- Homepage metadata and schema require a future bounded implementation task.

## 7. Category SEO Ownership

Category SEO owner: WNYHS category governance.

Canonical category routes:

- `/categories/home-security`
- `/categories/home-automation`
- `/categories/home-safety`
- `/categories/home-lighting`
- `/categories/aging-in-place`

Category SEO posture:

- Category pages target broad local category intent.
- Category pages should help homeowners choose a need area before entering specific solution or estimate paths.
- Category pages should use claim-safe summaries and clear internal links to relevant solutions.
- Legacy flat category routes need future classification and canonical/redirect decisions before sitemap or metadata remediation.

## 8. Solution SEO Ownership

Solution SEO owner: WNYHS solution-page governance.

Solution SEO posture:

- Solution pages target specific homeowner problems and outcomes.
- Solution pages are first-class SEO destinations.
- Solution pages should use canonical `/solutions/<solution-slug>` routes.
- Package anchors may provide context, but route-backed solution pages should be the preferred SEO destination when a solution is approved for public discovery.
- Solution metadata, canonical URLs, schema, and internal linking require future bounded tasks.

## 9. Route Classification Model

Every new route/page must declare its SEO classification before implementation or merge.

Allowed route classifications:

| Classification | Meaning | Default index posture |
| --- | --- | --- |
| Public Indexed | Approved public discovery route with owner, metadata, canonical, sitemap, and search policy. | Index after implementation task |
| Public Review | Public-reachable route requiring owner/index/sitemap/canonical decision. | Noindex until decided |
| Public NoIndex | Public route intended for users but not search discovery. | Noindex |
| Private/Internal | Internal, operator, admin, prototype, or private route. | Noindex and exclusion review |
| Transactional | Quote, agreement, payment, schedule, token, print, or similar flow route. | Noindex |
| Experimental | Demo, prototype, staging, or test route not approved as a public experience. | Noindex |
| Legacy | Historical route requiring retention, redirect, archive, or removal decision. | Review/noindex unless explicitly approved |

## 10. Index/Noindex Governance

Index approval requires:

- route owner
- SEO owner
- public/private classification
- canonical target
- metadata owner
- sitemap decision
- robots review decision
- search inclusion decision
- internal-linking plan
- claims-safe public copy

Default posture:

- New public routes start as Public Review until classified.
- Private/Internal, Transactional, Experimental, and unresolved Legacy routes must not be treated as indexable discovery content.
- Query-result URLs, campaign variants, token URLs, print views, transaction pages, and operator routes require noindex or stronger exclusion review.

## 11. Sitemap Governance

Sitemap inclusion is an explicit decision, not automatic route discovery.

A route may be added to the sitemap only when:

- classification is Public Indexed
- canonical target is declared
- route is stable
- metadata ownership is assigned
- route is not a redirect/alias unless explicitly approved
- protected/runtime/private data is not exposed

Legacy, package, demo, campaign, and dynamic route families require concrete URL review before sitemap inclusion.

## 12. Robots Review Governance

Robots review must decide whether `robots.txt`, meta robots, route protection, sitemap exclusion, canonical strategy, or a combination is the right control.

Robots review is required for:

- internal/operator routes
- transaction routes
- token/resume/verify routes
- print routes
- payment status routes
- prototype routes
- static demo files
- campaign routes
- legacy route families

Robots.txt must not be treated as the only protection for sensitive or transactional routes.

## 13. Metadata Governance

Every Public Indexed route needs owner-approved metadata:

- title
- meta description
- canonical URL
- Open Graph title
- Open Graph description
- Open Graph image decision, when applicable
- robots directive
- schema requirement decision

Metadata must match the page's actual content and claims guardrails. Metadata must not overstate services, coverage, response authority, pricing, outcomes, or capabilities.

## 14. Canonical URL Governance

Canonical URLs must follow declared public information architecture.

Rules:

- The canonical homepage is `/` unless future governance changes it.
- Canonical category routes use `/categories/*`.
- Canonical solution routes use `/solutions/*`.
- Redirect/alias routes should generally canonicalize to their approved destination.
- Query parameters should not create independent canonical URLs unless a future task explicitly approves them.
- Sitemap URLs and canonical URLs must use the same hostname strategy after future alignment.

## 15. Structured Data Governance

Structured data is future implementation scope. SEO001 recommends future governance for:

- Organization
- LocalBusiness
- Service
- WebSite/SearchAction
- BreadcrumbList
- FAQPage only where real FAQ content exists
- ImageObject where useful later

Schema must be accurate, route-specific where needed, and aligned to actual public content. Do not implement schema in SEO001.

## 16. Image SEO Governance

Image SEO should support public page clarity without changing image assets casually.

Future image SEO tasks should govern:

- descriptive public asset filenames where practical
- meaningful alt text for content images
- empty alt text for decorative images when intentional
- page-specific Open Graph image selection
- image dimensions/performance review
- ImageObject schema only when useful and accurate

No image files, image references, image metadata, or visual assets are changed by SEO001.

## 17. Internal Linking Governance

Internal linking should support the public journey:

```text
Homepage
-> Category
-> Solution
-> Estimate / Contact
```

Rules:

- Homepage links should promote category discovery and selected first-class solution paths.
- Category pages should link to relevant solution pages and estimate/contact paths.
- Solution pages should link back to related category and next-step estimate/contact paths.
- Packages may be referenced contextually but should not override category/solution discovery.
- Internal links must not expose protected runtime, operator, private, or unapproved legacy routes as discovery content.

## 18. Site Search Inclusion Governance

Site search inclusion follows SEARCH001.

Rules:

- `/search` is primarily a human navigation/discovery page.
- Query-result URLs should be reviewed for noindex treatment in future SEO implementation.
- Search should include approved public categories, route-backed solutions, major public marketing/trust/support/contact pages, and approved public education/demo pages only when classified.
- Search must not include internal BOMs, package IDs as primary public objects, part numbers, private docs, protected runtime routes, API endpoints, CRM data, quote data, payment data, scheduling data, operator data, secrets, or deployment details.

## 19. Package SEO Visibility Decision

Packages are not primary SEO objects by default.

Package SEO posture:

- Packages may be referenced contextually.
- Package pages should not outrank category or solution pages unless later governance changes this.
- Package IDs, internal package structure, BOMs, cost basis, and margin assumptions must not become public SEO targets.
- Any package route metadata or sitemap inclusion requires a future bounded decision.

## 20. QR/Campaign SEO Treatment

QR and campaign routes are campaign-owned, not normal public SEO-owned by default.

Rules:

- `/qrlanding` indexing requires explicit campaign governance.
- QR source parameters must not create indexed URL variants.
- SEO changes must not alter QR attribution, requestId behavior, source parsing, or lead-signal behavior.
- Printed QR destinations must not be changed by SEO work unless a separate bounded campaign task authorizes it.

## 21. Demo/Interactive Experience SEO Treatment

Demo and interactive experience routes require explicit classification.

Rules:

- Approved public demos may be treated as Public Indexed or Public NoIndex depending on owner decision.
- Prototype, hidden, test, or experimental demos remain noindex by default.
- Static demo files must not be indexed merely because they are reachable.
- Demo metadata must accurately identify the experience and avoid implying operational service authority.

## 22. Local SEO Strategy

WNYHS local SEO should emphasize real service-area relevance and local context for:

- Buffalo
- Western New York
- West Seneca
- nearby service areas

Local SEO rules:

- Use local context where it is accurate and useful.
- Avoid fake service-area doorway pages.
- Avoid keyword stuffing.
- Avoid pages for services or locations WNYHS does not actually support.
- Use LocalBusiness and Service schema only after a future structured-data task validates the exact content.

## 23. Service-Area Strategy

Service-area SEO should be conservative and owner-reviewed.

Approved strategy:

- Use genuine service-area references on relevant pages.
- Build service-area detail only when there is real local value, route ownership, unique copy, and owner approval.
- Keep pages useful to homeowners, not thin variants of the same page.

Forbidden strategy:

- duplicated thin location pages
- bulk generated local pages without review
- fake local proof
- unsupported service or capability targeting

## 24. SPA Crawlability Risk Management

The baseline found that route-specific content and metadata were not present in initial built HTML for React routes.

Future tasks must decide how to manage SPA crawlability risk. Options may include:

- client SEO policy correction only
- route-specific metadata implementation
- pre-render/static generation strategy
- selective static route outputs
- server-rendered metadata support if architecture later changes

SEO001 does not choose or implement a rendering strategy.

## 25. Measurement and Reporting Standards

Future SEO reporting should define sources, filters, and route groups before interpreting results.

Reporting needs:

- Cloudflare traffic
- Google Search Console
- Bing Webmaster Tools
- category page visits
- solution page visits
- search usage
- estimate/contact starts
- QR attribution
- internal/operator traffic exclusion

Reports should separate:

- organic search
- direct/local referral
- QR/campaign traffic
- internal/operator traffic
- estimate/contact conversion starts
- support usage

## 26. Forbidden SEO Shortcuts

WNYHS SEO must avoid:

- keyword stuffing
- fake service-area doorway pages
- fake urgency
- unsupported claims
- hidden text
- duplicated thin pages
- AI-generated bulk pages without owner review
- metadata that conflicts with claims guardrails
- pages targeting services WNYHS does not actually sell/support
- sitemap inclusion without classification
- schema that describes content or services not actually present

## 27. New Route Pre-Merge SEO Checklist

Every new route/page must declare before implementation or merge:

- route path
- route owner
- SEO owner
- public/private status
- index/noindex/review status
- sitemap yes/no/review status
- robots review yes/no
- canonical target
- metadata owner
- schema requirement
- search inclusion status
- header navigation status
- footer navigation status
- internal linking requirement

If these fields are missing, the route should remain Public Review or noindex until a future bounded task completes classification.

## 28. Future Remediation Tracks

Known remediation tracks:

- route classification
- metadata and canonical coverage
- sitemap cleanup and expansion
- robots/noindex hardening
- structured data planning
- homepage SEO implementation
- category SEO implementation
- solution SEO implementation
- internal linking cleanup
- image SEO standardization
- local SEO/service-area governance
- measurement/reporting setup
- internal traffic exclusion
- Google/Bing submission process

Each track requires its own bounded task. SEO001 does not implement any track.

## 29. Required Future Implementation Tasks

Future bounded tasks should include:

- `T-SEO001-002 - Metadata and Canonical Audit`
- `T-SEO001-003 - Sitemap/Robots/Canonical Alignment`
- `T-SEO001-004 - Public Route Classification Audit`
- `T-SEO001-005 - Homepage SEO Metadata Implementation`
- `T-SEO001-006 - Category SEO Metadata Implementation`
- `T-SEO001-007 - Solution SEO Metadata Implementation`
- `T-SEO001-008 - Structured Data Implementation Plan`
- `T-SEO001-009 - Internal Linking Audit`
- `T-SEO-IMAGE001-001 - Image SEO Metadata Standard`
- `T-ANALYTICS001-001 - Internal Traffic Exclusion Flag`
- `T-SEO-SUBMIT001-001 - Google/Bing Submission Procedure`

This list does not authorize implementation. Each future task needs its own active task-register entry or explicitly bounded prompt-created work order permitted by higher governance.

## 30. Codex Restrictions

Codex must not use SEO001 as authority to:

- change metadata
- change title tags
- change meta descriptions
- change canonical tags
- change sitemap files
- change robots files
- add structured data
- change routes
- change navigation
- change search implementation
- change category page content
- change solution page content
- change package content
- change images
- generate images
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

## 31. Success Criteria

SEO001 is successful when:

- `docs/seo/SEO001_WNYHS_SEO_FOUNDATION_STANDARD_REV01.md` exists.
- Known SEO baseline risks are documented as risks, gaps, and future remediation tracks.
- Route classification model is documented.
- New route pre-merge SEO checklist is documented.
- Homepage, category, solution, package, search, QR/campaign, demo, local, service-area, structured-data, image, internal-linking, and measurement governance are documented.
- Required future implementation tasks are listed without implementation.
- Master Task Register, Document Catalog, and Markdown Manifest are updated.
- No metadata, sitemap, robots, canonical, schema, route, navigation, page-content, image, runtime, protected-system, dependency, package-lock, or Cloudflare changes are made.
