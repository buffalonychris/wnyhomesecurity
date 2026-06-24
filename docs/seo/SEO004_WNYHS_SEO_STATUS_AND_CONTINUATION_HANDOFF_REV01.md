# SEO004 REV01 - WNYHS SEO Status and Continuation Handoff

Task ID: T-SEO001-009
Status: Continuation checkpoint / docs-only handoff
Date: 2026-06-24
Customer-facing: No
Implementation authority: No

## 1. Purpose

This document records the current WNY Home Security SEO state after SEO001 through SEO003 and implementation tasks T-SEO001-004 through T-SEO001-008.

SEO004 is a continuation checkpoint. It is not a new SEO standard, not a new implementation plan, and not implementation authority. Its purpose is to let future bounded SEO work resume from the current repository state without rediscovering completed work.

## 2. Authority

Controlling task: `T-SEO001-009 - SEO Status and Continuation Handoff`.

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
- `docs/seo/SEO002_WNYHS_METADATA_AND_CANONICAL_AUDIT_REV01.md`
- `docs/seo/SEO003_WNYHS_METADATA_IMPLEMENTATION_PLAN_REV01.md`
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`
- `src/lib/seoPolicy.ts`
- `src/components/Seo.tsx`
- `public/sitemap.xml`
- `public/robots.txt`

If this handoff conflicts with higher-authority repository governance or current source state, higher-authority governance and current source state control.

## 3. Current SEO State Summary

The current SEO system is client-side and policy-driven through `src/lib/seoPolicy.ts` and `src/components/Seo.tsx`.

Current completed state:

- SEO governance, audit, and implementation planning exist in SEO001, SEO002, and SEO003.
- Homepage and canonical category route metadata are implemented.
- Route-backed solution metadata is implemented.
- Marketing, search, support, legal, and QR/campaign route metadata are implemented where scoped by T-SEO001-006.
- Canonical and noindex/index policy is implemented through the existing SEO policy system.
- Sitemap and robots files are aligned to the approved canonical/indexable route set from T-SEO001-008.
- Structured data is not implemented.
- Image SEO governance remains a follow-up standard/task.
- Search Console and Bing submission remain follow-up operational tasks.

## 4. Completed SEO Governance Docs

Completed SEO governance and planning documents:

- `docs/seo/SEO001_WNYHS_SEO_FOUNDATION_STANDARD_REV01.md`
- `docs/seo/SEO002_WNYHS_METADATA_AND_CANONICAL_AUDIT_REV01.md`
- `docs/seo/SEO003_WNYHS_METADATA_IMPLEMENTATION_PLAN_REV01.md`

Related architecture/search documents used by the SEO work:

- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`

## 5. Completed SEO Implementation Tasks

Completed implementation tasks recorded in the Master Task Register:

- `T-SEO001-004 - Homepage and Category Metadata Implementation`
- `T-SEO001-005 - Solution Metadata Implementation`
- `T-SEO001-006 - Marketing/Search/Support Metadata Implementation`
- `T-SEO001-007 - Canonical and NoIndex Policy Implementation`
- `T-SEO001-008 - Sitemap / Robots / Canonical Alignment`

## 6. Current Canonical Domain

Current canonical domain:

```text
https://www.wnyhomesecurity.com
```

`src/lib/seoPolicy.ts` defines this as `CANONICAL_BASE_URL`.

## 7. Current Indexed Sitemap URLs

The current sitemap includes only the approved indexable canonical public URL set:

- `https://www.wnyhomesecurity.com/`
- `https://www.wnyhomesecurity.com/categories/home-security`
- `https://www.wnyhomesecurity.com/categories/home-automation`
- `https://www.wnyhomesecurity.com/categories/home-safety`
- `https://www.wnyhomesecurity.com/categories/home-lighting`
- `https://www.wnyhomesecurity.com/categories/aging-in-place`
- `https://www.wnyhomesecurity.com/solutions/senior-safety`
- `https://www.wnyhomesecurity.com/solutions/water-protection`
- `https://www.wnyhomesecurity.com/solutions/family-awareness`
- `https://www.wnyhomesecurity.com/solutions/vacation-homes`
- `https://www.wnyhomesecurity.com/about`
- `https://www.wnyhomesecurity.com/our-work`
- `https://www.wnyhomesecurity.com/contact`
- `https://www.wnyhomesecurity.com/support`
- `https://www.wnyhomesecurity.com/search`

## 8. Current Noindex/Review/Protected Route Groups

Current noindex/review/protected groups include:

- Legacy flat category routes: `/home-security`, `/home-automation`, `/home-safety`, `/home-lighting`, `/aging-in-place`.
- Search query URLs: `/search?q=...`.
- QR/campaign routes: `/qrlanding`, `/qrlanding.htm`.
- Legal routes: `/privacy`, `/terms`.
- Package routes: `/packages`, `/packages/:id`, and current package alias families.
- Demo/experience/review routes, including `/home-security/dashboard`, `/demo`, `/5-day-demo`, `/newsite/demos/ha-gold-dashboard`, and the static HA Gold demo path when covered by React SEO policy.
- Planner review route families.
- Transaction, checkout, payment, schedule, resume, quote/agreement review, tokenized/verification, print, certificate, UAT/test/prototype, operator/admin/review, and `/newsite` route groups according to current `seoPolicy.ts` classification.
- Unclassified routes default to `noindex, nofollow`.

## 9. Current Metadata Coverage

Current policy-backed metadata coverage includes:

- Homepage: `/` and legacy `/home-security`.
- Canonical category pages: five `/categories/*` routes.
- Route-backed solution pages: four `/solutions/*` routes.
- Marketing/trust/support/search pages: `/about`, `/our-work`, `/contact`, `/support`, `/search`.
- QR/campaign and legal pages: `/qrlanding`, `/qrlanding.htm`, `/privacy`, `/terms`.

The current `Seo` component can emit:

- title
- meta description
- canonical link
- robots meta tag
- Open Graph title, description, URL, and image when present in policy
- Twitter card, title, description, and image when present in policy

Known limitation: metadata remains client-side React metadata, not route-specific static HTML or prerendered metadata.

## 10. Current Canonical/Noindex Policy

Current policy:

- Approved indexable public routes use `index, follow`.
- `/home-security` is `noindex, follow` and canonicalizes to `/`.
- Legacy flat category routes are `noindex, follow` and canonicalize to approved destinations.
- `/search?q=...` URLs are `noindex, follow` and canonicalize to `/search`.
- Package routes remain `noindex, follow` pending package SEO visibility approval.
- QR/campaign and legal routes remain `noindex, follow`.
- Internal/prototype/review/protected groups use `noindex` treatment according to `seoPolicy.ts`.
- Unclassified routes default to `noindex, nofollow`.

## 11. Current Robots.txt Policy

Current robots policy:

- Allows normal crawling from root.
- Points to `https://www.wnyhomesecurity.com/sitemap.xml`.
- Disallows crawler access to internal/prototype/tokenized route groups listed in `public/robots.txt`:
  - `/admin`
  - `/certificate`
  - `/operator`
  - `/prototype`
  - `/review`
  - `/test`
  - `/uat`

Robots policy does not replace route-level noindex/canonical policy or protected runtime safeguards.

## 12. Current Sitemap Policy

Current sitemap policy:

- Uses the `https://www.wnyhomesecurity.com` canonical hostname.
- Includes only approved indexable public canonical URLs.
- Excludes legacy flat category routes, search query URLs, QR/campaign routes, legal routes, package routes, demo/review routes, transaction/payment/checkout/agreement/schedule/quote routes, planner routes, operator/admin/review routes, tokenized/verification routes, print routes, certificate routes, UAT/test/prototype routes, `/newsite` routes, vendor routes, and legacy HALO URLs.

Future public routes must not be added to sitemap without route classification, metadata ownership, canonical target, and index approval.

## 13. Current Search SEO Policy

Current search SEO policy:

- `/search` is included in the sitemap and uses `index, follow`.
- Search query URLs such as `/search?q=water` are `noindex, follow` and canonicalize to `/search`.
- Search index scope must remain public-site-only and must not include internal BOMs, package IDs as primary objects, part numbers, protected runtime routes, API endpoints, CRM data, quote data, payment data, scheduling data, operator data, secrets, or private operational records.

## 14. Known Remaining SEO Gaps

Known remaining SEO gaps:

- Structured data plan is not complete.
- Structured data implementation is not complete.
- Google Search Console submission is not complete.
- Bing Webmaster Tools submission is not complete.
- Image SEO metadata standard is not complete.
- Internal traffic exclusion flag is not complete.
- Future new category/solution metadata updates remain required when new pages become public/indexable.
- Future sitemap updates remain required as new pages become indexable.
- Future search index updates remain required as new pages become searchable.
- Interactive experience/demo SEO cleanup remains deferred until EXPERIENCE governance/classification exists.
- SPA crawlability risk remains because metadata is client-side.

## 15. Outstanding SEO Tasks

Outstanding SEO tasks:

- Structured data plan.
- Structured data implementation.
- Google Search Console submission.
- Bing Webmaster Tools submission.
- Image SEO metadata standard.
- Internal traffic exclusion flag.
- Future new category/solution metadata updates.
- Future sitemap updates as new pages become indexable.
- Future search index updates as new pages become searchable.
- Interactive experience/demo SEO cleanup after EXPERIENCE governance.
- Optional future evaluation of static/prerendered metadata if SEO performance requires it.

## 16. New Content SEO Intake Checklist

Every new public page, category, or solution must declare:

- route path
- route owner
- SEO owner
- index/noindex/review status
- sitemap yes/no/review status
- robots review yes/no
- canonical target
- metadata owner
- schema requirement
- search index inclusion
- header/footer/internal-linking status
- image SEO requirements

Missing checklist fields should keep the page in review/noindex posture until a bounded task completes classification.

## 17. Category/Solution Expansion SEO Workflow

When adding a new category or solution:

1. Confirm the page is authorized by current governance and an active bounded task.
2. Declare route owner, SEO owner, route path, canonical target, and index status.
3. Add route-level metadata only inside the authorized implementation scope.
4. Decide whether the route belongs in the sitemap.
5. Decide whether the route belongs in public search.
6. Confirm image SEO requirements and approved social image use.
7. Run focused SEO policy tests and build validation.
8. Update the Master Task Register and any required catalog/manifest entries.

Do not add sitemap, search, metadata, schema, navigation, or route changes opportunistically.

## 18. Image SEO Follow-Up Requirements

Future image SEO work should define:

- image SEO ownership
- allowed image file naming rules
- alt text rules for content images
- decorative image treatment
- Open Graph image selection rules
- image dimension/performance review expectations
- ImageObject schema decision rules
- relationship to approved brand and page image governance

No image files or image references are changed by SEO004.

## 19. Search Console / Bing Next Steps

Future submission tasks should:

- Confirm the production hostname and sitemap URL before submission.
- Submit `https://www.wnyhomesecurity.com/sitemap.xml` to Google Search Console.
- Submit the same sitemap to Bing Webmaster Tools.
- Record submission date, account/tool used, and any reported indexing issues in a docs-only status note or task-register completion entry.
- Keep Search Console/Bing work separate from metadata, sitemap, robots, schema, route, navigation, search, or content implementation unless explicitly authorized.

## 20. Future SEO Chat Bootstrap Prompt

Copyable future prompt block:

```text
Load SEO004 first. Then load SEO001, SEO002, SEO003, SITEARCH002, and SEARCH001 only as needed. Current SEO state is summarized in SEO004. Do not rediscover completed SEO work unless repository state conflicts with SEO004.
```

## 21. Codex Restrictions

Codex must not use SEO004 as authority to:

- change metadata
- change title tags
- change meta descriptions
- change canonical tags
- change robots/index behavior
- change sitemap files
- change robots files
- add structured data
- change routes
- change redirects
- change navigation
- change search implementation
- change search index records
- change page content or layout
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

Each future SEO implementation task needs its own active task-register entry or explicitly bounded prompt-created work order permitted by higher-authority governance.

## 22. Success Criteria

SEO004 is successful when:

- `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md` exists.
- The current SEO state after SEO001-SEO003 and T-SEO001-004 through T-SEO001-008 is summarized.
- Current canonical domain, indexed sitemap URLs, noindex/review/protected route groups, metadata coverage, canonical/noindex policy, robots policy, sitemap policy, and search SEO policy are documented.
- Known remaining SEO gaps and outstanding SEO tasks are listed.
- New content SEO intake and category/solution expansion workflows are documented.
- Image SEO, Search Console, and Bing follow-up requirements are documented.
- The future SEO chat bootstrap prompt is included.
- Master Task Register, Document Catalog, and Markdown Manifest are updated.
- No metadata, sitemap, robots, canonical/noindex policy, schema, route, navigation, search, page content/layout, image, runtime, protected-system, dependency, package-lock, or Cloudflare changes are made.
