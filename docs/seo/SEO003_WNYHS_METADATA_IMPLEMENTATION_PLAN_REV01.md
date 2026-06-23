# SEO003 REV01 - WNYHS Metadata Implementation Plan

Task ID: T-SEO001-003
Status: Implementation plan / docs-only
Date: 2026-06-23
Customer-facing: No
Implementation authority: No

## 1. Purpose

This document converts the SEO001 foundation standard and SEO002 metadata/canonical audit into a bounded implementation plan for future route-level metadata, canonical URL policy, index/noindex remediation, and social metadata work.

SEO003 is a planning document only. It does not change metadata, title tags, meta descriptions, canonical tags, robots/index behavior, sitemap files, robots files, structured data, routes, navigation, public page content, images, or runtime behavior.

## 2. Authority

Controlling task: `T-SEO001-003 - Metadata Implementation Plan`.

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
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`

If this plan conflicts with higher-authority repository governance, the higher-authority source controls.

## 3. Relationship to SEO001

SEO001 defines the SEO governance model: route classification, owner-approved metadata, index/noindex posture, sitemap rules, canonical URL rules, search inclusion, package visibility, QR/campaign treatment, demo treatment, SPA crawlability risk, and forbidden SEO shortcuts.

SEO003 uses SEO001 as the policy source. It narrows that policy into future implementation phases without implementing the policy in this task.

## 4. Relationship to SEO002

SEO002 audits current source behavior and records the main metadata gaps:

- priority WNYHS routes lack route-specific titles and descriptions;
- many public priority routes fall through to `noindex, nofollow`;
- the app canonical base uses `https://wnyhomesecurity.com` while the sitemap uses `https://www.wnyhomesecurity.com`;
- Open Graph and Twitter metadata are absent;
- route-specific metadata is client-side, creating SPA crawlability risk;
- legacy category, package, search, QR/campaign, legal/system, and demo routes require explicit classification.

SEO003 converts those findings into sequenced future tasks.

## 5. Implementation Principles

Future metadata implementation must follow these principles:

- Treat metadata as route-owned public content, not generic app-shell decoration.
- Keep implementation phases small and route-group specific.
- Make canonical, index/noindex, sitemap, and social metadata decisions explicit.
- Keep category and solution pages as the priority public discovery destinations after approval.
- Keep package, transaction, payment, print, admin, tokenized, test, prototype, internal, and unresolved legacy routes out of public discovery unless future governance says otherwise.
- Preserve protected systems and runtime contracts.
- Avoid claim language in metadata that is not already supported by public page content and guardrails.

## 6. Canonical Domain Decision

Recommendation: future canonical URLs should use `https://www.wnyhomesecurity.com`.

Rationale:

- SEO002 found the current app canonical base is `https://wnyhomesecurity.com`.
- SEO002 also found the sitemap uses `https://www.wnyhomesecurity.com`.
- The task requires alignment with current deployed/public preference and sitemap consistency.
- The safer future policy is to align canonical URLs, sitemap URLs, and public preferred hostname around the sitemap's `www` hostname unless a separate deployment/domain task changes the public hostname strategy first.

Do not implement this change in SEO003. A future canonical/noindex implementation task must verify the live deployment redirect behavior before changing canonical tags or sitemap URLs.

## 7. Index/Noindex Policy Decision

Future policy should be:

- Public priority pages should be indexable after metadata, canonical, owner, and sitemap classification are approved.
- Homepage, canonical category pages, route-backed solution pages, and major public marketing/support pages are the first candidates for indexable status.
- Transaction, payment, print, admin, tokenized, test, prototype, internal, and legacy review routes should remain noindex, review, or protected as applicable.
- Search query-result URLs should be noindex in future implementation to avoid crawl bloat.
- The `/search` route itself should remain noindex unless a later SEO task explicitly approves indexing the search landing page.
- Package routes should remain Public Review or Public NoIndex until package SEO visibility is decided.
- QR/campaign pages should remain campaign-governed and noindex by default unless campaign governance approves indexing.
- Legal pages should stay accessible and explicitly classified; indexability may be decided separately from system route treatment.

## 8. Metadata Field Requirements

Every future indexable priority page must define:

| Field | Requirement |
| --- | --- |
| `title` | Route-specific, concise, claim-safe, and aligned to the page's actual public content. |
| `meta description` | Route-specific summary that does not overstate service scope, outcomes, response authority, pricing, or capabilities. |
| `canonical URL` | Absolute URL using the approved canonical domain and route path. |
| `robots/index policy` | Explicit index/follow or noindex/follow/noindex/nofollow decision. |
| `Open Graph title` | Social title aligned to route title or approved variant. |
| `Open Graph description` | Social description aligned to route meta description or approved variant. |
| `Open Graph URL` | Absolute canonical social URL. |
| `Open Graph image` | Approved page/group image if available; otherwise record no image decision. |
| `Twitter card metadata` | Supported card type and title/description/image fields if supported by the implementation. |
| `page type / route owner` | Route group and owner classification for future maintenance. |

Future implementation should keep these fields in a structured source of truth rather than scattering one-off strings across unrelated components.

## 9. Page Group Implementation Order

Recommended implementation order:

1. Homepage.
2. Canonical category pages.
3. Route-backed solution pages.
4. Marketing/trust/support pages.
5. Search page.
6. QR/campaign page.
7. Legal pages.
8. Package/demo/legacy review routes.

This order prioritizes public discovery routes before review/noindex and edge-case routes.

## 10. Homepage Metadata Plan

Future homepage metadata should cover:

- canonical route: `/`;
- canonical URL using `https://www.wnyhomesecurity.com/`;
- route-specific title and description for the broad WNYHS public site;
- explicit index/follow policy after canonical confirmation;
- Open Graph and Twitter metadata;
- `/home-security` classification as legacy/category/alias review, not a competing homepage;
- validation that public page content supports the metadata.

Do not implement homepage metadata under SEO003.

## 11. Category Metadata Plan

Future category metadata should cover:

- `/categories/home-security`;
- `/categories/home-automation`;
- `/categories/home-safety`;
- `/categories/home-lighting`;
- `/categories/aging-in-place`;
- route-specific title and description for each category;
- canonical URLs on the `www` hostname;
- index/follow policy after category ownership is confirmed;
- Open Graph and Twitter metadata;
- legacy flat category route canonical/noindex/redirect review;
- sitemap inclusion only after index/canonical approval.

Do not implement category metadata under SEO003.

## 12. Solution Metadata Plan

Future solution metadata should cover current route-backed solution pages:

- `/solutions/senior-safety`;
- `/solutions/water-protection`;
- `/solutions/family-awareness`;
- `/solutions/vacation-homes`.

Each approved solution route needs route-specific title, description, canonical URL, index policy, social metadata, owner classification, and future sitemap decision.

Anchor-only solution references must not become metadata or sitemap targets until route ownership is approved.

## 13. Marketing/Support Metadata Plan

Future marketing/support metadata should cover:

- `/about`;
- `/our-work`;
- `/contact`;
- `/support`;
- other major public trust/support pages only when explicitly identified by the future task.

These pages should receive route-specific title, description, canonical URL, index policy, social metadata, and route owner classification. `/contact` metadata must remain public-information only and must not alter form behavior, lead-signal behavior, requestId behavior, CRM writes, scheduling, or quote flow.

## 14. Search Page Metadata Plan

Future search metadata should cover:

- `/search` route title and description;
- canonical URL without query parameters;
- noindex policy for query-result URLs such as `/search?q=...`;
- likely noindex/follow for `/search` unless a later SEO task approves indexing it;
- Open Graph/Twitter metadata only if useful for a search landing page;
- validation that search results link to canonical category, solution, and public information routes.

Do not change search implementation under SEO003.

## 15. Package Route Metadata/Noindex Plan

Future package route metadata should remain conservative:

- `/packages` and `/packages/:id` should not become primary SEO destinations by default.
- Package pages should remain Public Review or Public NoIndex until package visibility governance approves otherwise.
- Package IDs must not become primary public SEO objects.
- Package metadata, if added, should explain public context without exposing internal BOMs, margin assumptions, cost basis, private package structure, or unsupported claims.
- Dynamic package canonical behavior must be reviewed before sitemap inclusion.

Do not implement package metadata or index changes under SEO003.

## 16. QR/Campaign Metadata Plan

Future QR/campaign metadata should cover:

- `/qrlanding`;
- `/qrlanding.htm` alias/canonical treatment;
- campaign query parameters;
- explicit noindex-by-default policy unless campaign governance approves indexing;
- page title and description only if useful for direct visitor clarity and social fallback;
- canonical URL that does not create indexed variants from query parameters.

SEO work must not change printed QR destinations, QR attribution, source parsing, requestId behavior, lead-signal behavior, or protected runtime behavior.

## 17. Legal/System Metadata Plan

Future legal/system metadata should separate legal pages from protected/system routes.

Legal pages:

- `/privacy`;
- `/terms`;
- need explicit title, description, canonical URL, owner, and index/noindex decision.

System/protected routes:

- quote, agreement, payment, schedule, resume, verify, print, planner, operator, admin, prototype, UAT, API, tokenized, status, and internal tool routes should remain noindex/review/protected as applicable.
- Payment success/cancel and transaction routes must not become public discovery pages.

Do not change protected route behavior under SEO003.

## 18. Demo/Experience Metadata Plan

Future demo/experience metadata should cover:

- `/home-security/dashboard`;
- `/newsite/demos/ha-gold-dashboard`;
- `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html`;
- `/demo`;
- `/5-day-demo`;
- any other intentionally public demo only after visibility approval.

Prototype, test, legacy, static, or unapproved demo routes should remain noindex/review. Any public demo metadata must be brand-aligned, claim-safe, and tied to an approved public route.

## 19. Open Graph/Twitter Metadata Plan

Future Open Graph/Twitter implementation should:

- add route-specific `og:title`, `og:description`, `og:url`, and `og:image` when an approved image exists;
- add Twitter card metadata if the implementation supports it;
- use the same canonical domain policy as standard canonical URLs;
- define a default fallback image policy only if an approved brand/social image exists;
- avoid generating new images under metadata implementation tasks unless a separate asset task authorizes it;
- validate rendered tags for homepage, category, solution, marketing/support, search, QR/campaign, package, legal, and demo groups as applicable.

## 20. Client-Side SEO Component Strategy

Future implementation should first decide whether the current client-side `Seo` component is sufficient for the immediate task or whether a structured route metadata registry should feed it.

Recommended first implementation shape:

- centralize route metadata records by route group;
- make robots policy explicit per route group;
- make canonical host explicit and testable;
- support Open Graph and Twitter fields in the same route metadata source;
- keep the component responsible for rendering metadata, not inventing policy;
- avoid route/page component edits unless the future task specifically authorizes them.

If static/prerendered metadata becomes necessary, create a separate architecture task before changing the rendering model.

## 21. SPA Crawlability Mitigation Notes

SEO002 found route-specific metadata is client-injected after the SPA loads. Future implementation should treat this as a risk.

Mitigation options for later tasks:

- improve the current client-side metadata policy as a first bounded correction;
- evaluate static prerendering for priority public routes;
- evaluate route-specific static HTML generation if the deployment architecture supports it;
- keep sitemap/canonical/index changes aligned with whichever rendering model is chosen;
- validate crawler-visible output before expanding indexable route coverage.

SEO003 does not choose or implement a rendering architecture.

## 22. Validation Strategy

Future implementation tasks should validate:

- changed files remain inside the task's allowed scope;
- no protected systems or forbidden files are touched;
- route metadata source contains required fields for target routes;
- canonical URLs use the approved hostname;
- search query URLs do not create canonical/index variants;
- no metadata uses unsupported claims;
- Open Graph/Twitter tags render when included;
- sitemap/robots files are untouched unless that future task explicitly authorizes them;
- `npm run build` passes;
- `git diff --check` passes.

For SEO003 itself, validation is limited to the work-order-required docs/build checks.

## 23. Rollback Strategy

Future implementation tasks should remain rollback-friendly:

- keep metadata changes centralized where practical;
- phase by route group so a faulty group can be reverted without removing all SEO progress;
- avoid coupling metadata changes to route, navigation, content, sitemap, or runtime changes unless explicitly authorized;
- keep old route behavior intact until canonical/noindex changes are validated;
- document any temporary review/noindex decisions in the task register completion notes.

## 24. Future Implementation Tasks

Recommended future bounded tasks:

- `T-SEO001-004 - Homepage and Category Metadata Implementation`
- `T-SEO001-005 - Solution Metadata Implementation`
- `T-SEO001-006 - Marketing/Search/Support Metadata Implementation`
- `T-SEO001-007 - Canonical and NoIndex Policy Implementation`
- `T-SEO001-008 - Open Graph/Twitter Metadata Implementation`
- `T-SEO001-009 - Package/Legacy/Demo SEO Classification Cleanup`

Each task needs its own active task-register entry or explicitly bounded prompt-created work order before implementation.

## 25. Codex Restrictions

Codex must not use SEO003 as authority to:

- change metadata;
- change title tags;
- change meta descriptions;
- change canonical tags;
- change robots/index behavior;
- change sitemap files;
- change robots files;
- add structured data;
- change routes;
- change navigation;
- change search implementation;
- change category page content;
- change solution page content;
- change package content;
- change images;
- generate images;
- touch HubSpot;
- touch Stripe/payment;
- touch scheduling;
- touch planner;
- touch quote flow;
- touch backend/API runtime;
- touch Resend/email;
- touch Cloudflare config;
- touch `.env` or secrets;
- change dependencies or package-lock.

## 26. Success Criteria

SEO003 is successful when:

- `docs/seo/SEO003_WNYHS_METADATA_IMPLEMENTATION_PLAN_REV01.md` exists.
- The canonical domain recommendation is documented.
- The index/noindex policy decision is documented.
- Metadata field requirements are documented.
- The page group implementation order is documented.
- Homepage, category, solution, marketing/support, search, package, QR/campaign, legal/system, demo/experience, Open Graph/Twitter, client-side SEO, SPA crawlability, validation, and rollback plans are documented.
- Future implementation tasks are listed without implementation.
- Master Task Register, Document Catalog, and Markdown Manifest are updated.
- No metadata, sitemap, robots, canonical, schema, route, navigation, page-content, image, runtime, protected-system, dependency, package-lock, or Cloudflare changes are made.
