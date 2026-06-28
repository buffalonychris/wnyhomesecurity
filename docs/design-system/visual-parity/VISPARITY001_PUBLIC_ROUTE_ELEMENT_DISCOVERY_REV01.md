# VISPARITY001 Public Route and Visual Element Discovery REV01

Task ID: VISPARITY001
Task Name: Public Route and Visual Element Discovery Inventory
Status: Current-state discovery only
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Boundary

This document discovers and records current state only.

It does not create or change standards.
It does not approve any visual component.
It does not change public pages.
It does not activate hooks or QA checks.
It does not authorize route, CSS, token, source, image, sitemap, robots, runtime, HubSpot, Stripe/payment, scheduling, Cloudflare, dependency, package-lock, or protected-system changes.

## Discovery Method

Route and visual evidence was gathered from targeted reads and searches of:

- `src/App.tsx` for React route declarations.
- `src/content/wnyhsNavigation.ts` for WNYHS header navigation.
- `src/components/homeSecurity/WnyhsTopNav.tsx` and `src/components/homeSecurity/WnyhsSiteFooter.tsx` for header/footer rendering.
- `src/content/publicSearchIndex.ts` for public search inventory.
- `public/sitemap.xml` and `public/robots.txt` for crawl and public-index signals.
- `src/lib/seoPolicy.ts` for public/index/noindex/review posture.
- Public page owners including `HomeSecurityLanding.tsx`, `HomeAutomation.tsx`, `CategoryLandingPage.tsx`, `Packages.tsx`, `SolutionOpportunity.tsx`, `Search.tsx`, `QrLanding.tsx`, `About.tsx`, `OurWork.tsx`, `Contact.tsx`, and `Support.tsx`.
- Image references under `src/components`, `src/pages`, `src/content`, and `src/data`.
- Asset folders under `public/images` and `public/brand`.
- Token/style evidence in `src/styles/wnyhsVisualGovernance.css`, `src/styles/homeSecurityPremium.css`, `src/styles/qrLanding.css`, `src/styles/canonicalEstimateForm.css`, `src/index.css`, and `src/newsite/theme/tokens.css`.
- Existing governance and status docs listed in the governance section below.

QR Landing Page assumption to preserve for later work: `/qrlanding` may be the only public WNYHS entry that is intentionally not normally reached by clicking through from the homepage and subsequent pages. Its evidence source is QR/print/campaign configuration and route declarations rather than primary site navigation.

## Candidate complete public route list

The table below is a discovery list, not a new route standard. Public-facing means reachable by URL, sitemap, navigation, footer, embedded links, public search, QR print source, or current SEO policy. Transaction, internal, prototype, and legacy/system surfaces are listed where they are public-reachable but should not be treated as public marketing parity targets without later classification.

| Route | Source evidence | Current status already documented or inferable | Template/layout family |
| --- | --- | --- | --- |
| `/` | `src/App.tsx`, `public/sitemap.xml`, `src/lib/seoPolicy.ts` | Indexable canonical homepage; WNYHS host redirects to `/home-security` in `HomeRoute` | Host entry / redirect wrapper |
| `/home-security` | App route, header brand/Home, public search, SEO canonicalizes to `/` | Legacy homepage route; noindex/follow canonical to `/` | WNYHS marketing layout + homepage/category hybrid |
| `/categories/home-security` | App route, header Solutions, footer, sitemap, search index, category paths | Indexable category route | Same Home Security content owner as `/home-security` |
| `/categories/home-automation` | App route, footer, sitemap, search index, category paths | Indexable canonical category | Dedicated Home Automation category page |
| `/categories/home-safety` | App route, footer, sitemap, search index, category paths | Indexable canonical category | Shared `CategoryLandingPage` config |
| `/categories/home-lighting` | App route, footer, sitemap, search index, category paths | Indexable canonical category | Shared `CategoryLandingPage` config |
| `/categories/aging-in-place` | App route, footer, sitemap, search index, category paths | Indexable canonical category | Shared `CategoryLandingPage` config |
| `/home-automation` | App route, legacy category canonical in SEO policy | Noindex/follow legacy flat category | Dedicated Home Automation category page |
| `/home-safety` | App route, legacy category canonical in SEO policy | Noindex/follow legacy flat category | Shared `CategoryLandingPage` config |
| `/home-lighting` | App route, legacy category canonical in SEO policy | Noindex/follow legacy flat category | Shared `CategoryLandingPage` config |
| `/aging-in-place` | App route, legacy category canonical in SEO policy | Noindex/follow legacy flat category | Shared `CategoryLandingPage` config |
| `/solutions/senior-safety` | App route, sitemap, search index, category links | Indexable solution route | Shared solution opportunity detail |
| `/solutions/water-protection` | App route, sitemap, search index, category/home links | Indexable solution route | Shared solution opportunity detail |
| `/solutions/family-awareness` | App route, sitemap, search index, category/home links | Indexable solution route | Shared solution opportunity detail |
| `/solutions/vacation-homes` | App route, sitemap, search index, category links | Indexable solution route | Shared solution opportunity detail |
| `/packages` | App route, embedded links, offer catalog anchors, SEO package review prefix | Noindex/follow package review route | Solutions listing / packages / Vault / Core surface |
| `/packages/:id` | App route, package cards/details | Noindex/follow package review route | Package detail page |
| `/search` | App route, header, sitemap, search index, SEO policy | Indexable public search route; query URLs noindex/follow | WNYHS marketing layout search page |
| `/about` | App route, nav more menu, footer, sitemap, search index | Indexable marketing page | WNYHS marketing layout static page |
| `/our-work` | App route, header, sitemap, search index | Indexable proof/gallery page | WNYHS marketing layout gallery page |
| `/contact` | App route, header Estimate, footer, sitemap, search index | Indexable support/conversion page | WNYHS marketing layout with estimate form |
| `/support` | App route, header/footer, sitemap, search index | Indexable support page | WNYHS marketing layout with support form |
| `/privacy` | App route, footer, SEO metadata | Noindex/follow legal route | WNYHS marketing layout legal page |
| `/terms` | App route, footer, SEO metadata | Noindex/follow legal route | WNYHS marketing layout legal page |
| `/discovery` | App route, header Fit Check, CTA links | Conversion/public funnel; not in sitemap/search index | Fit Check / discovery form surface |
| `/fit-check` | App redirect to `/discovery?vertical=home-security` | Alias | Redirect |
| `/estimate` | App redirect to `/contact?vertical=home-security` | Alias | Redirect |
| `/qrlanding` | App route, QR print/campaign source, SEO metadata | Noindex/follow QR/campaign route | Dedicated QR landing layout |
| `/qrlanding.htm` | App alias to `/qrlanding` | Noindex/follow QR alias | Redirect alias |
| `/home-security/whats-included` | App route, SEO public review path | Noindex/follow public review route | Static WNYHS information page |
| `/home-security/dashboard` | App route, SEO public review path | Noindex/follow demo/review route | Dashboard/demo-like page |
| `/home-security/planner` | App route, header More item, SEO planner review prefix | Noindex/follow planner review route | Precision Planner tool |
| `/home-security/legacy` | App route, SEO public review path | Noindex/follow legacy route | Legacy WNYHS page |
| `/home-security/legacy-premium` | App route, SEO public review path | Noindex/follow legacy route | Legacy premium WNYHS page |
| `/demo` | App route, SEO public review path | Noindex/follow demo/review route | Legacy/demo page |
| `/5-day-demo` | App route, SEO public review path | Noindex/follow demo/review route | Legacy/demo page |
| `/newsite/demos/ha-gold-dashboard` | App route, SEO public review/protected prefix | Noindex/follow prototype/demo route | Newsite dashboard demo |
| `/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html` | SEO public review path from docs/source policy | Public static demo file candidate | Static HTML demo |
| `/quote`, `/quoteReview`, `/quotePrint` | App routes, funnel links | Protected transaction/review/print routes | Quote flow surfaces |
| `/agreement`, `/agreementReview`, `/agreementPrint` | App routes, funnel links | Protected transaction/review/print routes | Agreement flow surfaces |
| `/payment`, `/payment-processing`, `/home-security/pay-deposit`, `/home-security/payment/success`, `/home-security/payment/canceled`, `/home-security/payment/cancel` | App routes, funnel links | Protected payment routes | Payment/status surfaces |
| `/schedule` | App route, funnel links | Protected scheduling route | Scheduling request surface |
| `/resume`, `/resume-verify`, `/verify` | App routes, token/resume links | Protected token/system routes | Resume/verification surfaces |
| `/operator/*`, `/uat`, `/launchUat`, `/certificate`, `/sicar`, `/newsite/*` | App routes, robots/protected SEO prefixes where covered | Internal/prototype/system routes; public-reachable by URL but not public parity targets | Internal/prototype/system |
| Legacy non-WNYHS route families such as `/halo*`, `/vendors*`, `/health-homes*`, `/lp/*`, `/pricing`, `/partners`, `/never-miss-another-estimate` | App routes and/or historical SEO policy | Legacy/product/business route families; not WNYHS public parity targets without separate classification | Legacy vertical/business pages |

## Route Source Evidence Summary

- Navigation: `src/content/wnyhsNavigation.ts` exposes Home, Search, Solutions, Fit Check, Estimate, Support, and Our Work. More menu includes About, Our Work, Contact, Privacy, Terms, Support, and System Planner.
- Footer: `WnyhsSiteFooter.tsx` links About, Contact, Privacy, Terms, Support, and five canonical category routes.
- Embedded page links: homepage links to categories, package anchors, selected solution pages, Contact, and phone; category and solution pages link to Contact, Discovery, package anchors, selected solutions, and phone; QR links to packages, Our Work, phone, and Contact with source.
- Sitemap: `public/sitemap.xml` lists `/`, five canonical categories, four solution routes, About, Our Work, Contact, Support, and Search.
- Route file: `src/App.tsx` declares public marketing, category, solution, package, QR, transaction, prototype, operator, and legacy families.
- Known standalone QR route: `/qrlanding` and `/qrlanding.htm` are present in route/SEO policy and print/QR campaign context rather than header/footer.

## Public, Private, Review, And Protected Status

Observed classifications from `src/lib/seoPolicy.ts` and SEO004:

- Indexable: `/`, canonical `/categories/*`, four `/solutions/*`, `/about`, `/our-work`, `/contact`, `/support`, and `/search`.
- Noindex/follow review or canonicalized: legacy flat category routes, package routes, QR routes, legal routes, public review/demo routes, planner routes, and search query URLs.
- Noindex/follow transaction: quote, agreement, payment, schedule, resume, and selected conversion routes.
- Noindex/nofollow or protected: operator/admin/review/prototype/test/newsite prefixes, print/token/internal routes where classified, UAT/certificate routes, and unclassified route fallback.
- Robots disallow currently covers `/admin`, `/certificate`, `/operator`, `/prototype`, `/review`, `/test`, and `/uat`.

## Template And Layout Families

Current page/layout families inferred from source:

- WNYHS marketing shell: `WnyhsMarketingLayout`, `WnyhsTopNav`, `WnyhsSiteFooter`, `wnyhs-page`, `wnyhs-shell`, and related `wnyhs-*` primitives.
- Homepage / Home Security hybrid: `HomeSecurityLanding.tsx`, using `hs-home-*`, `wnyhs-*`, and some `hs-premium-*` class aliases.
- Category pages: `HomeAutomation.tsx` dedicated implementation plus `CategoryLandingPage.tsx` shared config for Home Security, Aging In Place, Home Safety, and Home Lighting content.
- Solutions listing / packages: `Packages.tsx` for image-led solutions, Vault/custom work, WNYHS Core, and package fallback cards.
- Solution detail pages: `SolutionOpportunity.tsx` shared opportunity-page template.
- Search page: `Search.tsx` with result groups, cards, type chips, empty state, and search form.
- Contact/support pages: WNYHS contact/support shell with canonical estimate/support forms.
- QR landing: `QrLanding.tsx` plus `src/styles/qrLanding.css`, separate but token-referenced.
- Protected funnel: quote, agreement, payment, schedule, resume/verify, planner, and operator routes.
- Legacy/prototype/business route families: present but not current WNYHS parity targets without future classification.

## Repeated Visual Elements Found Or Expected

Repeated current visual categories:

- Nav bars: `WnyhsTopNav` with brand icon, primary links, CTA, phone link, and mobile drawer; QR has a separate `.qr-topbar`.
- Footers: `WnyhsSiteFooter` with local/company columns, category/legal/support/contact links, and version badge.
- Hero sections: homepage hero, category hero, solution split hero, packages hero, QR hero, and contact/support hero.
- Page panels: `wnyhs-section`, `wnyhs-section--dark`, `hs-premium-section-panel`, `packages-context-panel`, `qr-panel`, and form panels.
- WNYHS Core Panel: homepage, packages, and category pages use dashboard/phone/logo Core visual treatment; solution details do not expose the same Core panel in the inspected template.
- Cards: category cards, solution cards, package/preview cards, reveal cards, life cards, vault cards, result cards, support cards, and gallery cards.
- Tiles: category explorer tiles, routine/scene thumbnails, package tiles, and result cards.
- Forms: contact estimate form, support form, discovery/Fit Check form, search form, QR contact CTA path, protected quote/payment/schedule forms.
- Buttons: `wnyhs-button` primary/secondary, legacy `btn` primary/secondary, top-nav CTA, QR CTA.
- Headings: `wnyhs-heading`, `hs-premium` heading contexts, form headings, section headers.
- Eyebrows: `wnyhs-eyebrow`, `hs-premium-eyebrow`, QR `.qr-kicker`, solution/category section labels.
- Body text: `wnyhs-description`, `wnyhs-card-copy`, muted/support text, form helper text.
- CTAs: hero CTA rows, inline action rows, final CTA panels, contact/support form CTAs, package/solution card CTAs.
- Badges/ribbons/chips: hero proof strips, `wnyhs-price-chip`, support/status chips, QR proof strip, package status/value rows.
- Alert/info blocks: guided setup notice, form validation messages, QR info/benefit cards, protected flow gate notices.
- Package/tier blocks: package cards, package detail hero media, package starting-point cards, package tier imagery.
- Image blocks: hero media, card media, reveal image pairs, dashboard/phone proof blocks, gallery images, solution hero/sample images, QR hero image.

## Unique Or Suspected Page-Specific Elements

- Homepage has category explorer, featured packages, featured solutions, WNYHS Core, search access, how-it-works, why-WNYHS, and final CTA composition.
- Home Automation has a full CATEGORY003 reference asset set including reveal pair, dashboard, phone, routine thumbnails, and solution thumbnails under `public/images/category-pages/home-automation/`.
- Shared category pages reuse homepage/category images for multiple asset roles, suggesting image parity review gaps for Home Security, Home Safety, Home Lighting, and Aging In Place.
- Packages route functions as a solutions listing, Vault/custom project panel, WNYHS Core panel, package comparison fallback, and conversion CTA surface.
- Solution detail pages have paired hero/sample images, proof pills, three-up problem/solution/outcome cards, WNY context, feature chips, scenario media, and final CTA links.
- Search page has a query form, suggested searches, grouped search result cards, type chips, result count, and empty state CTAs.
- Our Work uses gallery images from `public/images/our-work/` and may need separate proof/story asset governance before parity work.
- Contact and Support include forms and direct phone/SMS/email CTA blocks; they may require form readability/focus-state review in later tasks.
- QR Landing has a separate topbar, hero, proof strip, benefit cards, next-step cards, form/input styling, and QR source behavior; it should be reviewed as campaign-specific rather than forced into the homepage layout blindly.
- Protected quote/agreement/payment/schedule pages use their own transactional layouts and should not be included in public marketing visual parity without a protected-flow task.
- `/newsite/*`, `/operator/*`, and legacy vertical/business routes are public-reachable candidates but not current WNYHS public parity targets without classification.

## Image Asset Usage Candidates

Observed image groups:

- Approved brand assets: `public/brand/crest-system/CrestLogo.png`, `public/brand/crest-system/IconizedLogo.png`, and `public/brand/heros/HomePageHero.png`.
- Homepage/category assets: `public/images/home-security/homepage/*` including category images, category icons, package images, solution images, WNYHS Core dashboard/phone/logo, and a category icon reference.
- Home Security package/assets: `public/images/home-security/*` including hero, cards, diagram, coverage graphic, trust badges, and tier imagery.
- Home Automation category package: `public/images/category-pages/home-automation/*` including hero, reveal pair, dashboard, phone, routine thumbnails, and solution thumbnails.
- Solution detail assets: `public/images/home-security/solutions/*` with hero/sample image pairs for aging, awareness, vacation, and water routes.
- General solution assets: `public/images/solutions/*` for connected garage/workshop, front-door package protection, and smart-home-security.
- Our Work gallery assets: `public/images/our-work/*`.
- QR/print/brand assets: `public/brand/*` and `public/brand/print-assets/*`.
- SEO/Open Graph candidates: `src/lib/seoPolicy.ts` references WNYHS Core dashboard/phone and route/category/solution images.

Image governance docs discovered:

- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md`
- `docs/design-system/IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01.md`
- `docs/design-system/IMG-PIPELINE001_OPENAI_IMAGE_GENERATION_PIPELINE_SETUP_PLAN_REV01.md`
- `public/images/home-security/README.md`

Obvious image parity gaps to review later:

- Home Automation has a complete category-specific asset package; other canonical categories appear to reuse homepage or solution assets instead of full category-specific packages.
- Some image paths are split between `public/images/home-security/homepage`, `public/images/home-security/solutions`, `public/images/category-pages/home-automation`, and `public/images/solutions`, so later parity work should decide whether placement/naming should be normalized.
- QR Landing uses `/images/home-security/hero-1024w.webp`, visually separate from the newer WNYHS public primitive surfaces.
- Our Work images include many illustrative examples; later work should verify proof/story claims, alt text, naming, and image tone.
- Some asset names contain spaces or typos, such as `solution-sump-pump-awarenes.png` and Our Work filenames with spaces; this document does not authorize renaming.
- Later accessibility work should check whether dashboard/mobile screenshots remain readable at rendered sizes.

## CSS, Token, And Style Evidence

Current token/style sources:

- `src/styles/wnyhsVisualGovernance.css` defines governed WNYHS public visual primitives and tokens such as `--wnyhs-canvas`, `--wnyhs-surface`, `--wnyhs-ink`, `--wnyhs-border`, `--wnyhs-charcoal`, `--wnyhs-gold`, `--wnyhs-radius-shell`, `--wnyhs-radius-card`, `--wnyhs-shadow-soft`, `--wnyhs-focus`, and dark-surface aliases.
- `src/index.css` defines older/global semantic tokens including `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted-foreground`, `--border`, `--ring`, `--kaec-*`, and base `--wny-*` palette tokens.
- `src/styles/homeSecurityPremium.css` contains large WNYHS homepage/category/package/solution style surface rules, including `hs-home-*`, `hs-premium-*`, and `wnyhs-*` selectors.
- `src/styles/qrLanding.css` defines a QR-specific style layer that references semantic tokens like `--background`, `--foreground`, `--card`, `--border`, `--primary`, `--secondary`, and `--muted-foreground`.
- `src/styles/canonicalEstimateForm.css` governs estimate form controls and uses semantic tokens and color-mix values.
- `src/newsite/theme/tokens.css` defines a separate `--ns-*` prototype/newsite token family.

Existing token/primitives named in governance:

- `.wnyhs-page`, `.wnyhs-shell`, `.wnyhs-section`, `.wnyhs-section--category`, `.wnyhs-section--packages`, `.wnyhs-section--solutions`, `.wnyhs-section--dark`, `.wnyhs-section-header`, `.wnyhs-eyebrow`, `.wnyhs-heading`, `.wnyhs-description`, `.wnyhs-card`, `.wnyhs-card--category`, `.wnyhs-card--package`, `.wnyhs-card--solution`, `.wnyhs-card-title`, `.wnyhs-card-copy`, `.wnyhs-card-media`, `.wnyhs-media`, `.wnyhs-price-badge`, `.wnyhs-price-chip`, `.wnyhs-button`, `.wnyhs-button--primary`, `.wnyhs-button--secondary`, and `.wnyhs-footer`.

Obvious style risks to review later:

- There are multiple active visual vocabularies: `wnyhs-*`, `hs-home-*`, `hs-premium-*`, `qr-*`, `btn-*`, legacy `kaec-*`, and prototype `ns-*`.
- `src/index.css` and other styles still contain raw hex/rgba values and old blue/dark-gradient treatments; some are historical/current behavior, not approval for new usage.
- QR Landing uses token references but not the full newer `wnyhs-*` page primitive system.
- Contact/support forms should be checked for focus, contrast, helper text, error text, and field readability.
- Dashboard/mobile/proof images should be checked for text legibility at actual rendered dimensions.
- Category reveal hover/focus behavior should be checked for keyboard/mobile accessibility.

## Accessibility And Visibility Risks

Risks to audit in later implementation/QA tasks:

- Text contrast on dark panels, QR cards, muted descriptions, chips, footer links, and form helper/error text.
- Hidden or unreadable text in dashboard/mobile screenshots and small image thumbnails.
- Focus visibility on nav drawer controls, CTA buttons, category reveal media, search suggestions, form fields, and card links.
- Form readability and target sizes on Contact, Support, Discovery/Fit Check, QR, Quote, Payment, and Schedule surfaces.
- Mobile wrapping in top nav, CTA rows, hero proof strips, search result cards, category grids, and footer link lists.
- Decorative versus informative image alt-text decisions, especially logo marks, screenshots, gallery assets, and duplicated reveal images.
- Search empty-state and result grouping semantics.
- QR topbar stickiness and small-screen layout.

## Existing Governance Docs Discovered

Route, SEO, and search:

- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`
- `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`
- `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`
- `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`

Visual/page standards:

- `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/governance/DESIGN003_WNYHS_SOLUTIONS_PAGE_VISUAL_PARITY_REV01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

Images and assets:

- `docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md`
- `docs/design-system/IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01.md`
- `docs/design-system/IMG-PIPELINE001_OPENAI_IMAGE_GENERATION_PIPELINE_SETUP_PLAN_REV01.md`
- `public/images/home-security/README.md`

Hooks/QA context:

- `docs/kaos/hooks/README.md`
- `docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`
- Existing hook entries are candidate/advisory context only and do not authorize hooks or QA checks for this task.

## Gaps Requiring Later Tasks

- Decide the next visual parity target group: indexable marketing pages first, canonical categories first, QR/campaign first, or form-heavy support/contact/discovery surfaces first.
- Create a page-by-page visual parity checklist that maps current route families to existing `wnyhs-*` primitives without changing implementation in this task.
- Audit canonical category image parity against Home Automation's CATEGORY003 reference asset package.
- Audit QR Landing for visual parity while preserving QR attribution/runtime boundaries.
- Audit form readability and focus states across Contact, Support, Discovery, QR, Quote, Payment, and Schedule.
- Audit Our Work gallery image governance, proof/story posture, image naming, and alt text.
- Audit legacy/prototype/public-reachable route families for classification before any visual work.
- Reconcile old visual vocabularies and raw color usage only through a future bounded CSS/token task.
- Consider an image SEO and alt-text follow-up after route/image status is confirmed.

## Recommended Next Task Sequence

1. `VISPARITY002` - Public Marketing Visual Parity Target Matrix: docs-only page-by-page route/template/element checklist for indexable WNYHS public pages.
2. `VISPARITY003` - Canonical Category Image/Visual Gap Audit: docs-only comparison of the five canonical category routes against CATEGORY003 and the Home Automation reference.
3. `VISPARITY004` - QR Landing Visual Parity Audit: docs-only QR-specific route/visual/accessibility inventory that preserves QR runtime and attribution boundaries.
4. `VISPARITY005` - Form Surface Readability Audit: docs-only Contact, Support, Discovery, QR, Quote, Payment, and Schedule form-state inventory.
5. `VISPARITY006` - Token/CSS Drift Audit: docs-only selector/token/raw-value inventory and candidate remediation plan; no CSS edits.
6. Later bounded implementation tasks only after the relevant audit is complete and active.

## Scope Compliance

This VISPARITY001 document records:

- current-state discovery only
- candidate public route list
- route source evidence
- existing public/private/review/protected status where discoverable
- page template and layout families
- repeated visual elements
- unique or suspected page-specific elements
- image asset usage candidates and gaps
- CSS/token/style evidence
- accessibility and visibility risks
- governance docs discovered
- gaps and recommended future sequencing

It does not fix pages, refactor CSS, create hooks, create QA checks, change visual implementation, or approve a visual standard.
