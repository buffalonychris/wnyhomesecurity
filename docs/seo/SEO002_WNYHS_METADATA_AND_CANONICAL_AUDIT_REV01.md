# SEO002 REV01 - WNYHS Metadata and Canonical Audit

Task ID: T-SEO001-002
Status: Audit complete / implementation planning input
Date: 2026-06-23
Customer-facing: No
Implementation authority: No

## 1. Purpose

This document audits current WNY Home Security metadata, canonical, Open Graph, social metadata, robots, and route-level ownership coverage before implementation.

This is audit-only. It does not change metadata, title tags, meta descriptions, canonical tags, sitemap files, robots files, structured data, routes, navigation, page content, images, or runtime behavior.

## 2. Authority

Controlling task: `T-SEO001-002 - Metadata and Canonical Audit`.

Current operational context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.

Primary authority and source documents:

- `AGENTS.md`
- `docs/codex/CODEX_RUN_CONTRACT.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`
- `docs/seo/SEO001_WNYHS_SEO_FOUNDATION_STANDARD_REV01.md`
- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`

If this audit conflicts with higher-authority repository governance, the higher-authority source controls.

## 3. Relationship to SEO001

`SEO001` defines the foundation standard for route classification, metadata ownership, canonical URL policy, sitemap governance, robots review, structured data, search inclusion, package visibility, QR/campaign treatment, demo treatment, and future remediation tracks.

`SEO002` applies that standard to current source state. It records the observed gaps and recommends implementation sequence. It does not remediate those gaps.

## 4. Audit Method

The audit inspected:

- React route declarations in `src/App.tsx`.
- Global app shell metadata in `index.html`.
- Runtime SEO injection in `src/components/Seo.tsx`.
- Route SEO policy in `src/lib/seoPolicy.ts`.
- Layout-level SEO usage in `src/components/Layout.tsx`.
- Route-specific `Seo` usage found by targeted search.
- Search route implementation in `src/pages/Search.tsx` and `src/lib/publicSearch.ts`.
- Public search index routing in `src/content/publicSearchIndex.ts`.
- Package and solution content ownership sources in `src/content/packages.ts` and `src/content/wnyhsOfferCatalog.ts`.
- `public/sitemap.xml`.
- `public/robots.txt`.
- Static demo HTML at `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html`.

No browser automation, connected services, external integrations, or third-party systems were used.

## 5. Current Metadata System Overview

Current metadata is mostly app-shell/global with limited client-side route policy:

- `index.html` contains only charset, viewport, the global title `WNY Home Security`, font preconnects, and the app root script.
- `src/components/Layout.tsx` renders `<Seo />` globally without route-specific title or description props.
- `src/components/Seo.tsx` sets `meta[name="robots"]`, `link[rel="canonical"]`, optional `document.title`, and optional `meta[name="description"]` in a client-side effect.
- `src/lib/seoPolicy.ts` supplies robots and canonical path by pathname.
- Only Halo and vendor pages pass route-specific `<Seo title=... description=... />` props.
- Current priority WNYHS routes generally do not pass route-specific title or description props.
- No Open Graph or Twitter/social metadata tags were found in the app shell or `Seo` component.
- Structured data was not found in the inspected metadata system.

The current system means crawlers receive generic initial HTML for React routes, and route-specific robots/canonical updates are client-rendered rather than present in the static app shell.

## 6. Route Metadata Inventory

| Route group | Routes audited | Current title coverage | Current description coverage | Current robots policy | Current canonical policy | OG/social coverage | Severity |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage | `/`, `/home-security` | `/` app shell title; `/home-security` generic inherited title | Missing | `/` index/follow; `/home-security` noindex/nofollow | Client canonical to same path, base `https://wnyhomesecurity.com` | Missing | Critical |
| Canonical categories | `/categories/home-security`, `/categories/home-automation`, `/categories/home-safety`, `/categories/home-lighting`, `/categories/aging-in-place` | Generic inherited title | Missing | noindex/nofollow | Client canonical to same path | Missing | Critical |
| Legacy flat categories | `/home-security`, `/home-automation`, `/home-safety`, `/home-lighting`, `/aging-in-place` | Generic inherited title | Missing | noindex/nofollow | Client canonical to same path, not to canonical `/categories/*` | Missing | High |
| Solutions | `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, `/solutions/vacation-homes` | Generic inherited title | Missing | noindex/nofollow | Client canonical to same path | Missing | Critical |
| Search | `/search` | Generic inherited title | Missing | noindex/nofollow | Client canonical to `/search`, query ignored by path policy | Missing | Medium |
| Marketing/trust/support | `/about`, `/our-work`, `/contact`, `/support` | Generic inherited title | Missing | noindex/nofollow | Client canonical to same path | Missing | High |
| Campaign | `/qrlanding`, `/qrlanding.htm` | Generic inherited title | Missing | noindex/nofollow | Client canonical to same path; alias does not canonicalize to `/qrlanding` | Missing | Medium |
| Packages | `/packages`, `/packages/:id` | Generic inherited title | Missing | noindex/nofollow | Client canonical to `/packages` or dynamic package path | Missing | Medium |
| Legal/system | `/privacy`, `/terms`, status/error/confirmation routes | Generic inherited title for WNYHS legal; most system routes generic | Missing | legal noindex/nofollow; several transaction routes noindex/follow or noindex/nofollow | Client canonical to same path | Missing | Review |
| Demo/experience | `/home-security/dashboard`, `/newsite/demos/ha-gold-dashboard`, static HA Gold HTML | React routes generic; static HTML has standalone HA Gold title | Static HTML missing description | React noindex/nofollow; static HTML outside React policy | React same-path canonical; static HTML no canonical | Missing | Medium |

## 7. Homepage Metadata Findings

`SITEARCH002` defines `/` as the canonical homepage, but current source still has `/home-security` as a significant restored/effective homepage and category route.

Findings:

- `/` is the only WNYHS-adjacent priority route listed as `index, follow` in `seoPolicy.ts`.
- `/home-security` is `noindex, nofollow` because it falls through to the unclassified-route default.
- `/home-security` does not have route-specific title or description metadata.
- `/` and `/home-security` do not have Open Graph or Twitter metadata.
- `/` uses client-side host logic and app-shell title behavior, so the static HTML title is generic.
- `/home-security` canonicalizes to `/home-security`, not to `/`, despite SITEARCH002 selecting `/` as canonical homepage.

Severity: Critical.

## 8. Category Metadata Findings

Canonical category routes now exist in `src/App.tsx`:

- `/categories/home-security`
- `/categories/home-automation`
- `/categories/home-safety`
- `/categories/home-lighting`
- `/categories/aging-in-place`

Findings:

- All canonical category routes fall through to `noindex, nofollow`.
- None of the canonical category routes have route-specific title metadata.
- None have route-specific meta descriptions.
- Canonical tags point to the same path, using the non-www canonical base.
- Legacy flat routes still exist and canonicalize to themselves instead of canonical `/categories/*` destinations.
- Category pages are not included in the sitemap.
- Open Graph and Twitter metadata are missing.

Severity: Critical for canonical categories; High for legacy flat category confusion.

## 9. Solution Metadata Findings

Current route-backed solution pages:

- `/solutions/senior-safety`
- `/solutions/water-protection`
- `/solutions/family-awareness`
- `/solutions/vacation-homes`

Findings:

- All solution routes fall through to `noindex, nofollow`.
- They share the `SolutionOpportunity` component and do not pass route-specific SEO metadata.
- They do not have route-specific title or description tags.
- Canonical tags point to the current `/solutions/*` path, which aligns with SITEARCH002 route pattern.
- They are missing from sitemap.
- They have no Open Graph or Twitter metadata.
- Anchor-only solutions in `wnyhsOfferCatalog.ts` remain secondary and should not be promoted to metadata/index targets until route ownership is approved.

Severity: Critical for route-backed solution pages.

## 10. Search Metadata Findings

`/search` now exists in `src/App.tsx` and `src/pages/Search.tsx`, which is newer than the SEARCH001 plan's original "future route" posture.

Findings:

- `/search` falls through to `noindex, nofollow`.
- This is directionally compatible with SEO001/SEARCH001 caution that search result pages likely need noindex treatment.
- Query URLs such as `/search?q=water` canonicalize to `/search` because `seoPolicy.ts` uses pathname only.
- `/search` lacks route-specific title and description metadata.
- `/search` has no Open Graph or Twitter metadata.
- Search result pages are not in sitemap, which is appropriate until a future policy task decides otherwise.

Severity: Medium.

## 11. Marketing/Support Metadata Findings

Audited routes:

- `/about`
- `/our-work`
- `/contact`
- `/support`

Findings:

- All fall through to `noindex, nofollow`.
- None pass route-specific title or description metadata.
- All canonicalize to same path.
- Open Graph and Twitter metadata are missing.
- `/contact` is both public information and estimate/contact conversion; future metadata must avoid changing form behavior or runtime boundaries.
- `/about`, `/our-work`, `/contact`, and `/support` are not included in the sitemap.

Severity: High.

## 12. Campaign Metadata Findings

Audited routes:

- `/qrlanding`
- `/qrlanding.htm`

Findings:

- Both fall through to `noindex, nofollow`.
- Neither has route-specific title or description metadata.
- `/qrlanding.htm` redirects/aliases in React to `/qrlanding`, but SEO policy canonicalizes by current path if rendered.
- `/qrlanding` query parameters are ignored for canonical path because policy uses pathname only.
- Open Graph and Twitter metadata are missing.
- Campaign indexing remains a campaign-governance decision and should not be changed in metadata implementation without explicit scope.

Severity: Medium.

## 13. Package Metadata Findings

Audited routes:

- `/packages`
- `/packages/:id`

Observed package IDs in current content include `a1`, `a2`, and `a3` in `src/content/packages.ts`.

Findings:

- `/packages` and dynamic package routes fall through to `noindex, nofollow`.
- No package route-specific title or description metadata is passed.
- Dynamic package routes canonicalize to their path, but package index/review/noindex classification is unresolved.
- Package pages are not included in the sitemap.
- Open Graph and Twitter metadata are missing.
- SEO001 says packages are not primary SEO objects by default; package metadata needs a later index/review/noindex classification task.

Severity: Medium.

## 14. Legal/System Metadata Findings

Audited legal routes:

- `/privacy`
- `/terms`

Audited system/status families:

- payment success/cancel routes
- quote/agreement print and review routes
- `/verify`
- `/resume`
- `/resume-verify`
- 404-like unmatched behavior by absence of a catch-all route in the inspected route table

Findings:

- `/privacy` and `/terms` fall through to `noindex, nofollow`, which may be acceptable but should be explicitly classified.
- Transaction and token routes are mostly noindex/follow or noindex/nofollow through `seoPolicy.ts`.
- `robots.txt` only disallows `/uat` and `/certificate`; it does not cover the broader system/prototype/operator surface.
- No 404 route-specific metadata was identified in the inspected route table.
- No route-specific legal title/description metadata exists for WNYHS legal pages.

Severity: Review for legal pages; High for public-reachable system/prototype route policy needing separate classification.

## 15. Demo/Experience Metadata Findings

Audited routes/files:

- `/home-security/dashboard`
- `/newsite/demos/ha-gold-dashboard`
- `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html`
- `/demo`
- `/5-day-demo`

Findings:

- React demo routes fall through to `noindex, nofollow`.
- Static demo HTML has a title: `HA Gold Package - Interactive Demo Dashboard`.
- Static demo HTML has viewport metadata but no meta description, robots tag, canonical tag, Open Graph metadata, or Twitter metadata.
- The static title does not include WNY Home Security branding and uses a package/demo framing that should be reviewed before any public indexing.
- `/demo` and `/5-day-demo` remain non-authoritative legacy/business demo routes for this audit and should not be promoted by SEO work.

Severity: Medium.

## 16. Canonical Findings

Current canonical implementation:

- Canonical base: `https://wnyhomesecurity.com`.
- Sitemap URLs use `https://www.wnyhomesecurity.com`.
- Canonical path is normalized pathname only.
- Query strings do not create canonical variants.
- Legacy flat category routes canonicalize to themselves.
- `/qrlanding.htm` can canonicalize to itself if the SEO effect runs before/around alias behavior.

Conflicts:

- Hostname mismatch between canonical base and sitemap.
- `/home-security` does not canonicalize to `/` or to a final Home Security category decision.
- Legacy flat category routes do not canonicalize to SITEARCH002 canonical category routes.
- Canonical category and solution routes exist but are noindexed and absent from sitemap.
- Static demo HTML has no canonical tag.

Severity: Critical for hostname and priority-page canonical/index mismatch; High for legacy route canonical confusion.

## 17. Open Graph/Social Metadata Findings

No route-specific Open Graph or Twitter/social metadata implementation was found in:

- `index.html`
- `src/components/Seo.tsx`
- targeted metadata search across `src`

Current gaps:

- No `og:title`.
- No `og:description`.
- No `og:url`.
- No `og:image`.
- No `twitter:card`.
- No route-specific share image policy.

Severity: High for homepage, category, and solution pages; Medium for lower-priority pages.

## 18. Index/Noindex Findings

Current `seoPolicy.ts` index behavior:

- `index, follow`: `/`, Halo routes, Halo package/product routes, and selected vendor routes.
- `noindex, follow`: `/quote`, `/quoteReview`, `/agreementReview`, `/payment`, `/schedule`, `/resume`, `/resume-verify`, and `/vendors/apply`.
- `noindex, nofollow`: `/verify`, print routes, `/uat`, `/certificate`, and all unclassified routes.

Impact:

- Current public WNYHS category, solution, search, package, about, our-work, contact, support, QR, and demo routes are noindexed by default.
- Legacy Halo/vendor routes have clearer index permission than current WNYHS priority routes.
- This matches the prior baseline risk that many public WNYHS routes likely fall through to client-side noindex/nofollow behavior.

Severity: Critical for public priority routes.

## 19. SPA App-Shell Crawlability Findings

Current initial HTML is generic:

- `index.html` title: `WNY Home Security`.
- No app-shell meta description.
- No app-shell canonical.
- No app-shell robots.
- No app-shell Open Graph or Twitter metadata.

Route-specific SEO is set in a React `useEffect`. This creates SPA crawlability risk because route-specific metadata and content are not present in the initial HTML response for React routes.

Severity: High.

## 20. Missing Metadata Inventory

Priority missing fields:

| Route group | Missing metadata |
| --- | --- |
| Homepage | Route-specific title, description, canonical decision, OG title/description/image/url, Twitter card, sitemap alignment |
| Categories | Route-specific title, description, canonical-to-canonical route policy, OG/social metadata, sitemap classification |
| Solutions | Route-specific title, description, OG/social metadata, sitemap classification |
| Search | Title, description, explicit noindex policy, canonical query handling policy |
| Marketing/support | Title, description, OG/social metadata, sitemap/index classification |
| Campaign | Title, description, alias canonical policy, campaign noindex/index decision |
| Packages | Title, description, package noindex/review/index classification |
| Legal/system | Legal title/description, explicit system noindex/follow/nofollow classification |
| Demo/experience | Demo title/description/robots/canonical policy, static HTML metadata, brand alignment |

## 21. Duplicate/Generic Metadata Inventory

Generic/duplicate risk:

- Most WNYHS public React routes inherit the global `WNY Home Security` title.
- Most WNYHS public React routes lack descriptions entirely.
- Client-generated canonical tags are same-path defaults rather than route-ownership decisions.
- Open Graph/social metadata is globally absent, so social shares likely rely on generic crawler fallback behavior.
- Static demo HTML has a standalone title that does not align with WNYHS metadata ownership.

## 22. Route Ownership Gaps

Ownership gaps requiring future decisions:

- `/` vs `/home-security` homepage/category split.
- Canonical `/categories/*` routes vs legacy flat category routes.
- Dynamic package routes and whether they are Public Indexed, Public Review, or Public NoIndex.
- `/search` route and query result noindex/canonical policy.
- `/qrlanding` campaign index posture and `/qrlanding.htm` alias canonical policy.
- Demo/experience route ownership for `/home-security/dashboard`, `/newsite/demos/ha-gold-dashboard`, and static HA Gold HTML.
- Legacy `/demo` and `/5-day-demo` route classification.
- Public-reachable internal/prototype/system route classification beyond metadata alone.

## 23. Priority Risk Ranking

| Priority | Finding | Severity | Rationale |
| --- | --- | --- | --- |
| 1 | Public category and solution pages are noindexed by default | Critical | Priority public discovery routes cannot be treated as indexable until policy changes |
| 2 | Homepage canonical ownership conflict remains unresolved in metadata | Critical | SITEARCH002 says `/` is canonical, but `/home-security` still acts as restored/effective homepage/category |
| 3 | Canonical hostname mismatch between app policy and sitemap | Critical | Canonical uses non-www while sitemap uses www |
| 4 | Route-specific title and description metadata missing for WNYHS priority routes | High | Pages present generic metadata and weak search/share signals |
| 5 | Open Graph and Twitter metadata absent | High | Priority pages have no controlled social previews |
| 6 | SPA app-shell metadata is generic and client-injected | High | Initial HTML lacks route-specific SEO signals |
| 7 | Legacy flat category routes canonicalize to themselves | High | SITEARCH002 canonical category routes are not reflected |
| 8 | Sitemap contains 7 legacy/root URLs and excludes current WNYHS priority pages | High | Sitemap/index/canonical posture is not aligned |
| 9 | Search exists but lacks explicit route metadata and result noindex policy | Medium | Query canonical behavior is likely acceptable but not documented in code metadata policy |
| 10 | Static HA Gold demo HTML has incomplete metadata and brand mismatch | Medium | Public file is outside React SEO policy |

## 24. Recommended Implementation Sequence

Recommended order:

1. Confirm metadata implementation architecture and whether client-side `Seo` is sufficient or whether static/prerendered route metadata is required.
2. Resolve canonical hostname strategy against sitemap host.
3. Implement homepage metadata and canonical policy for `/` and `/home-security`.
4. Implement canonical category metadata for `/categories/*`.
5. Implement route-backed solution metadata for `/solutions/*`.
6. Implement explicit noindex/canonical policy for `/search` and query result URLs.
7. Classify package routes as Public Review, Public NoIndex, or Public Indexed before adding package metadata.
8. Implement Open Graph and Twitter metadata with approved image selection.
9. Align sitemap/robots/canonical policy after route classification.
10. Review demo/static HTML metadata and decide whether public demo indexing is approved.

## 25. Future Task Definitions

Recommended future bounded tasks:

- `T-SEO001-003 - Metadata Implementation Plan`
- `T-SEO001-004 - Homepage and Category Metadata Implementation`
- `T-SEO001-005 - Solution Metadata Implementation`
- `T-SEO001-006 - Canonical and NoIndex Policy Implementation`
- `T-SEO001-007 - Open Graph and Social Metadata Implementation`
- `T-SEO001-008 - Sitemap/Robots/Canonical Alignment`

Task notes:

- `T-SEO001-003` should decide implementation architecture and exact route metadata source ownership before code changes.
- `T-SEO001-004` should prioritize `/`, `/home-security`, and `/categories/*`.
- `T-SEO001-005` should handle only approved `/solutions/*` routes.
- `T-SEO001-006` should handle legacy routes, search query URLs, packages, campaign aliases, legal/system routes, and noindex policy.
- `T-SEO001-007` should add social metadata only after route-specific title/description ownership is settled.
- `T-SEO001-008` should align sitemap and robots only after route classification and canonical policy are approved.

## 26. Codex Restrictions

Codex must not use this audit as authority to:

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
- change image files
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

## 27. Success Criteria

This audit is successful when:

- `docs/seo/SEO002_WNYHS_METADATA_AND_CANONICAL_AUDIT_REV01.md` exists.
- Current metadata system ownership is documented.
- Route metadata inventory covers homepage, category, solution, search, marketing/support, campaign, package, legal/system, and demo/experience routes.
- Critical and high-priority metadata, canonical, social, robots, index, and SPA crawlability risks are recorded.
- Future implementation tasks are defined without implementation.
- Master Task Register, Document Catalog, and Markdown Manifest are updated.
- No metadata, sitemap, robots, canonical, schema, route, navigation, page-content, image, runtime, protected-system, dependency, package-lock, or Cloudflare changes are made.
