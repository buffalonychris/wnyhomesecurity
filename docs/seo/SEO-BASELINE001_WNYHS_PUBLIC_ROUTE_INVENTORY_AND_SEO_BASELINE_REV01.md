# SEO-BASELINE001 REV01 - WNYHS Public Route Inventory And SEO Baseline

Task ID: T-SEO-BASELINE001-001
Status: DONE
Date: 2026-06-22
Customer-facing: No
Implementation authority: No

## 1. Purpose

Create a docs-only baseline inventory of current public-facing routes, sitemap state, robots.txt state, and SEO readiness before any sitemap, metadata, schema, page, route, rendering, or robots remediation work.

## 2. Scope

- Inspected React route declarations in `src/App.tsx`.
- Inspected navigation/footer/CTA links in `src/components/`, `src/pages/`, `src/newsite/`, and `src/content/`.
- Inspected `public/sitemap.xml`, `public/robots.txt`, `public/_redirects`, `index.html`, `dist/index.html`, `src/components/Seo.tsx`, and `src/lib/seoPolicy.ts`.
- Inspected public static HTML candidates under `public/`.
- Inspected route/SEO-related repository docs found by targeted search.

## 3. Non-scope

No fixes were made. This audit did not edit source code, routes, sitemap.xml, robots.txt, metadata, schema, images, content, UI, dependencies, package-lock, deployment config, HubSpot, Stripe/payment, scheduling, Resend/email, APIs, secrets, or environment variables.

## 4. Method Used To Discover Routes

Primary route source was `src/App.tsx`, which declares a React Router SPA route tree under `BrowserRouter`. Supporting route evidence came from:

- `src/content/wnyhsNavigation.ts`
- `src/components/homeSecurity/WnyhsTopNav.tsx`
- `src/components/homeSecurity/WnyhsSiteFooter.tsx`
- `src/components/Layout.tsx`
- `src/newsite/layout/NewSiteLayout.tsx`
- broad route-link search across `src`, `public`, and `docs`
- `public/sitemap.xml`
- `public/robots.txt`
- `public/_redirects`
- `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html`
- `index.html` and `dist/index.html`

## 5. Complete Discovered Route Inventory

Discovery found 118 React route declarations and 1 static public HTML file candidate. Nested `/newsite` child routes are listed as full paths.

### A. Discovered Route Inventory

| Route | Discovery Source | Public? | Index? | Sitemap? | Robots Review? | Current Sitemap Status | Current Robots Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | `src/App.tsx`, sitemap | YES | YES | YES | NO | PRESENT | ALLOWED | Root route redirects to `/home-security` on `wnyhomesecurity.com`; canonical strategy needs review because sitemap lists `/`. |
| `/home-security` | `src/App.tsx`, nav | YES | YES | YES | NO | MISSING | ALLOWED | Current WNYHS home route; likely highest sitemap priority. |
| `/packages` | `src/App.tsx`, nav | YES | YES | YES | NO | MISSING | ALLOWED | Required public route in project governance. |
| `/packages/:id` | `src/App.tsx`, package cards | YES | YES | YES | NO | MISSING | ALLOWED | Dynamic package detail route; sitemap needs concrete package URLs. |
| `/discovery` | `src/App.tsx`, nav | YES | YES | YES | NO | MISSING | ALLOWED | Required public Fit Check route. |
| `/contact` | `src/App.tsx`, nav/footer/CTAs | YES | YES | YES | NO | MISSING | ALLOWED | Required public estimate/contact route. |
| `/support` | `src/App.tsx`, nav/footer | YES | YES | YES | NO | MISSING | ALLOWED | Required public support route. |
| `/privacy` | `src/App.tsx`, footer | YES | YES | YES | NO | MISSING | ALLOWED | Required public legal route. |
| `/terms` | `src/App.tsx`, footer | YES | YES | YES | NO | MISSING | ALLOWED | Required public legal route. |
| `/about` | `src/App.tsx`, footer | YES | YES | YES | NO | MISSING | ALLOWED | Public trust route. |
| `/our-work` | `src/App.tsx`, nav/CTAs | YES | YES | YES | NO | MISSING | ALLOWED | Public examples route. |
| `/home-automation` | `src/App.tsx`, homepage category cards | YES | YES | YES | NO | MISSING | ALLOWED | Public category landing page. |
| `/aging-in-place` | `src/App.tsx`, homepage category cards | YES | YES | YES | NO | MISSING | ALLOWED | Public category landing page. |
| `/home-safety` | `src/App.tsx`, homepage category cards | YES | YES | YES | NO | MISSING | ALLOWED | Public category landing page. |
| `/home-lighting` | `src/App.tsx`, homepage category cards | YES | YES | YES | NO | MISSING | ALLOWED | Public category landing page. |
| `/home-security/whats-included` | `src/App.tsx` | YES | YES | YES | NO | MISSING | ALLOWED | Public informational page. |
| `/comparison` | `src/App.tsx`, navigation constants | YES | YES | YES | NO | MISSING | ALLOWED | Public comparison/trust route. |
| `/reliability` | `src/App.tsx`, redirects/CTAs | YES | YES | YES | NO | MISSING | ALLOWED | Public trust/education route. |
| `/faq` | `src/App.tsx` | YES | YES | YES | NO | MISSING | ALLOWED | Public educational route; not prominent in current WNYHS nav evidence. |
| `/solutions/senior-safety` | `src/App.tsx` | YES | YES | YES | NO | MISSING | ALLOWED | Public solution route; route purpose aligns with search if current. |
| `/solutions/water-protection` | `src/App.tsx` | YES | YES | YES | NO | MISSING | ALLOWED | Public solution route. |
| `/solutions/family-awareness` | `src/App.tsx` | YES | YES | YES | NO | MISSING | ALLOWED | Public solution route. |
| `/solutions/vacation-homes` | `src/App.tsx` | YES | YES | YES | NO | MISSING | ALLOWED | Public solution route. |
| `/fit-check` | `src/App.tsx` | YES | NO | NO | NO | MISSING | ALLOWED | Redirects to `/discovery?vertical=home-security`; exclude in favor of destination. |
| `/estimate` | `src/App.tsx` | YES | NO | NO | NO | MISSING | ALLOWED | Redirects to `/contact?vertical=home-security`; exclude in favor of destination. |
| `/home-security/packages` | `src/App.tsx` | YES | NO | NO | NO | MISSING | ALLOWED | Redirects to `/packages?vertical=home-security`. |
| `/home-security/add-ons` | `src/App.tsx` | YES | NO | NO | NO | MISSING | ALLOWED | Redirects to quote anchor; exclude. |
| `/home-security/how-it-works` | `src/App.tsx` | YES | NO | NO | NO | MISSING | ALLOWED | Redirects to `/reliability?vertical=home-security`. |
| `/home-automation/packages` | `src/App.tsx` | YES | NO | NO | NO | MISSING | ALLOWED | Redirect route; exclude. |
| `/home-automation/add-ons` | `src/App.tsx` | YES | NO | NO | NO | MISSING | ALLOWED | Redirect route; exclude. |
| `/home-automation/how-it-works` | `src/App.tsx` | YES | NO | NO | NO | MISSING | ALLOWED | Redirect route; exclude. |
| `/elder-care-tech` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Legacy/adjacent vertical route; needs owner decision. |
| `/elder-care-tech/packages` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Redirect route for adjacent vertical. |
| `/elder-care-tech/add-ons` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Redirect route for adjacent vertical. |
| `/elder-care-tech/how-it-works` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Redirect route for adjacent vertical. |
| `/quote` | `src/App.tsx`, funnel constants | YES | NO | NO | YES | MISSING | ALLOWED | Transaction/runtime page; meta noindex in policy. |
| `/quoteReview` | `src/App.tsx`, funnel constants | YES | NO | NO | YES | MISSING | ALLOWED | Transaction/runtime page; meta noindex in policy. |
| `/quotePrint` | `src/App.tsx`, print flow | YES | NO | NO | YES | MISSING | ALLOWED | Token/print page; meta noindex/nofollow in policy. |
| `/agreement` | `src/App.tsx` | YES | NO | NO | YES | MISSING | ALLOWED | Redirects to agreement review; exclude. |
| `/agreementReview` | `src/App.tsx`, funnel constants | YES | NO | NO | YES | MISSING | ALLOWED | Transaction/runtime page; meta noindex in policy. |
| `/agreementPrint` | `src/App.tsx`, print flow | YES | NO | NO | YES | MISSING | ALLOWED | Token/print page; meta noindex/nofollow in policy. |
| `/esign` | `src/App.tsx` | YES | NO | NO | YES | MISSING | ALLOWED | Runtime signing-adjacent page; no sitemap. |
| `/payment` | `src/App.tsx`, funnel constants | YES | NO | NO | YES | MISSING | ALLOWED | Protected transaction route; meta noindex in policy. |
| `/home-security/pay-deposit` | `src/App.tsx` | YES | NO | NO | YES | MISSING | ALLOWED | Payment route; exclude. |
| `/home-security/payment/success` | `src/App.tsx` | YES | NO | NO | YES | MISSING | ALLOWED | Success route; exclude. |
| `/home-security/payment/canceled` | `src/App.tsx` | YES | NO | NO | YES | MISSING | ALLOWED | Cancel route; exclude. |
| `/home-security/payment/cancel` | `src/App.tsx` | YES | NO | NO | YES | MISSING | ALLOWED | Cancel route; exclude. |
| `/payment-processing` | `src/App.tsx` | YES | NO | NO | YES | MISSING | ALLOWED | Payment support/runtime page; exclude. |
| `/schedule` | `src/App.tsx`, funnel constants | YES | NO | NO | YES | MISSING | ALLOWED | Transaction/scheduling route; meta noindex in policy. |
| `/resume` | `src/App.tsx` | YES | NO | NO | YES | MISSING | ALLOWED | Token/session route; meta noindex in policy. |
| `/resume-verify` | `src/App.tsx` | YES | NO | NO | YES | MISSING | ALLOWED | Token/session route; meta noindex in policy. |
| `/verify` | `src/App.tsx` | YES | NO | NO | YES | MISSING | ALLOWED | Token verification route; meta noindex/nofollow in policy. |
| `/sicar` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Certificate/internal proof route; exclude unless protected differently. |
| `/certificate` | `src/App.tsx`, robots | REVIEW | NO | NO | YES | MISSING | DISALLOWED | Internal proof route; robots blocks exact prefix. |
| `/uat` | `src/App.tsx`, robots | NO | NO | NO | YES | MISSING | DISALLOWED | Test route; robots blocks exact prefix. |
| `/launchUat` | `src/App.tsx` | NO | NO | NO | YES | MISSING | ALLOWED | Test route; not covered by robots disallow. |
| `/operator` | `src/App.tsx` | NO | NO | NO | YES | MISSING | ALLOWED | Internal operator route; should not index. |
| `/operator/property-model` | `src/App.tsx` | NO | NO | NO | YES | MISSING | ALLOWED | Internal operator route. |
| `/operator/property-model/quote-preview` | `src/App.tsx` | NO | NO | NO | YES | MISSING | ALLOWED | Internal operator route. |
| `/operator/property-model/installer-packet` | `src/App.tsx` | NO | NO | NO | YES | MISSING | ALLOWED | Internal operator route. |
| `/qrlanding` | `src/App.tsx`, QR docs/nav | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Public QR campaign landing; indexing decision should be separate because QR attribution is protected. |
| `/qrlanding.htm` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Alias redirect to `/qrlanding`; exclude if canonical route is kept. |
| `/halo-splash` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Legacy HALO/hub route; owner decision needed. |
| `/halo` | `src/App.tsx`, SEO policy | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | HALO-specific route; policy currently says index. |
| `/halo/setup` | `src/App.tsx`, SEO policy | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | HALO-specific route; policy currently says index. |
| `/halo/support` | `src/App.tsx`, SEO policy | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | HALO-specific route; policy currently says index. |
| `/halo/privacy` | `src/App.tsx`, SEO policy | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | HALO-specific route; policy currently says index. |
| `/halo/terms` | `src/App.tsx`, SEO policy | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | HALO-specific route; policy currently says index. |
| `/halo/checkout` | `src/App.tsx`, SEO policy | REVIEW | NO | NO | YES | MISSING | ALLOWED | HALO checkout route; policy currently says index but route appears transaction-like. |
| `/halo-pushbutton` | `src/App.tsx`, sitemap, SEO policy | REVIEW | REVIEW | REVIEW | YES | PRESENT | ALLOWED | Legacy/review sitemap URL. |
| `/halo-package` | `src/App.tsx`, sitemap, SEO policy | REVIEW | REVIEW | REVIEW | YES | PRESENT | ALLOWED | Legacy/review sitemap URL. |
| `/vendors` | `src/App.tsx`, sitemap, SEO policy | REVIEW | REVIEW | REVIEW | YES | PRESENT | ALLOWED | Vendor route; public purpose is not core WNYHS search. |
| `/vendors/standards` | `src/App.tsx`, sitemap, SEO policy | REVIEW | REVIEW | REVIEW | YES | PRESENT | ALLOWED | Vendor route in sitemap. |
| `/vendors/evaluation-toolkit` | `src/App.tsx`, sitemap, SEO policy | REVIEW | REVIEW | REVIEW | YES | PRESENT | ALLOWED | Vendor route in sitemap. |
| `/vendors/questionnaire` | `src/App.tsx`, sitemap, SEO policy | REVIEW | REVIEW | REVIEW | YES | PRESENT | ALLOWED | Vendor route in sitemap. |
| `/vendors/apply` | `src/App.tsx`, SEO policy | REVIEW | NO | NO | YES | MISSING | ALLOWED | Vendor application; policy noindex/follow. |
| `/health-homes` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Adjacent health-homes route family; not WNYHS core route. |
| `/health-homes/outcomes` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Adjacent route. |
| `/health-homes/funding` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Adjacent route. |
| `/health-homes/packages` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Adjacent route. |
| `/health-homes/pilot` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Adjacent route. |
| `/health-homes/operations` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Operations-like adjacent route. |
| `/health-homes/intake` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Intake route; exclude unless explicitly public. |
| `/health-homes/packet` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Packet route; exclude unless explicitly public. |
| `/lp/senior` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Campaign landing route; no sitemap. |
| `/lp/family` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Campaign landing route; no sitemap. |
| `/lp/agency` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Campaign landing route; no sitemap. |
| `/recommend` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Recommendation/runtime route; likely exclude. |
| `/funding` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Public-ish route, but not current WNYHS nav evidence. |
| `/never-miss-another-estimate` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Business/SaaS route; not WNYHS core. |
| `/demo` | `src/App.tsx`, operator nav | REVIEW | NO | NO | YES | MISSING | ALLOWED | Demo/tool route. |
| `/pricing` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Business/SaaS route; not WNYHS core. |
| `/5-day-demo` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Business/SaaS route; not WNYHS core. |
| `/partners` | `src/App.tsx` | REVIEW | REVIEW | REVIEW | YES | MISSING | ALLOWED | Business/SaaS or vendor route. |
| `/newsite` | `src/App.tsx`, `src/newsite/layout` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental/new-site route family; exclude until promoted. |
| `/newsite/demos` | `src/App.tsx`, newsite nav | REVIEW | NO | NO | YES | MISSING | ALLOWED | Demo index under experimental route. |
| `/newsite/demos/ha-gold-dashboard` | `src/App.tsx`, newsite nav | REVIEW | NO | NO | YES | MISSING | ALLOWED | Demo route. |
| `/newsite/home-security/packages` | `src/App.tsx`, newsite nav | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental duplicate package route. |
| `/newsite/home-security/packages/:tier` | `src/App.tsx`, newsite package cards | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental dynamic route. |
| `/newsite/home-security/fit-check` | `src/App.tsx`, newsite nav | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental duplicate funnel route. |
| `/newsite/home-security/planner` | `src/App.tsx`, newsite nav | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental duplicate planner route. |
| `/newsite/quote` | `src/App.tsx`, newsite nav | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental transaction route. |
| `/newsite/quote/review` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental transaction route. |
| `/newsite/quote/print` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental print route. |
| `/newsite/agreement/review` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental transaction route. |
| `/newsite/agreement/print` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental print route. |
| `/newsite/home-security/pay-deposit` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental payment route. |
| `/newsite/home-security/payment/success` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental success route. |
| `/newsite/home-security/payment/cancel` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental cancel route. |
| `/newsite/schedule` | `src/App.tsx` | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental scheduling route. |
| `/newsite/contact` | `src/App.tsx`, newsite nav | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental duplicate contact route. |
| `/newsite/callback` | `src/App.tsx`, newsite nav | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental callback route. |
| `/newsite/on-site-quote` | `src/App.tsx`, newsite nav | REVIEW | NO | NO | YES | MISSING | ALLOWED | Experimental quote route. |
| `/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html` | `public/` static HTML | REVIEW | NO | NO | YES | MISSING | ALLOWED | Static demo file is directly routable by path outside React Router. |

## 6. Sitemap.xml Inventory

Current sitemap source: `public/sitemap.xml`. It contains 7 URLs.

### B. Current Sitemap Inventory

| URL | Route | Lastmod | Classification | Recommendation |
| --- | --- | --- | --- | --- |
| `https://www.wnyhomesecurity.com/` | `/` | 2025-12-17 | VALID CURRENT INDEX PAGE | Keep only if canonical strategy intentionally keeps `/`; otherwise review `/home-security` redirect relationship. |
| `https://www.wnyhomesecurity.com/halo-pushbutton` | `/halo-pushbutton` | 2025-12-17 | LEGACY / REVIEW | Review/remove unless HALO pages remain intentionally indexable. |
| `https://www.wnyhomesecurity.com/halo-package` | `/halo-package` | 2025-12-17 | LEGACY / REVIEW | Review/remove unless HALO pages remain intentionally indexable. |
| `https://www.wnyhomesecurity.com/vendors` | `/vendors` | 2025-12-17 | LEGACY / REVIEW | Review/remove from core WNYHS sitemap unless vendor acquisition is intended for search. |
| `https://www.wnyhomesecurity.com/vendors/standards` | `/vendors/standards` | 2025-12-17 | LEGACY / REVIEW | Review/remove from core WNYHS sitemap unless vendor route is search-intended. |
| `https://www.wnyhomesecurity.com/vendors/evaluation-toolkit` | `/vendors/evaluation-toolkit` | 2025-12-17 | LEGACY / REVIEW | Review/remove from core WNYHS sitemap unless vendor route is search-intended. |
| `https://www.wnyhomesecurity.com/vendors/questionnaire` | `/vendors/questionnaire` | 2025-12-17 | LEGACY / REVIEW | Review/remove from core WNYHS sitemap unless vendor route is search-intended. |

## 7. Robots.txt Inventory

Current robots source: `public/robots.txt`.

- `User-agent: *`
- `Allow: /`
- `Disallow: /uat`
- `Disallow: /certificate`
- `Sitemap: https://www.wnyhomesecurity.com/sitemap.xml`

No likely-current WNYHS public index route is blocked by robots.txt. Internal/operator/transaction routes are mostly not blocked by robots.txt, so their exclusion depends on client-side meta robots from `Seo.tsx`/`seoPolicy.ts`, sitemap exclusion, or future route protection/removal.

## 8. Route Classification Table

Summary by route class:

| Class | Count | SEO Posture |
| --- | ---: | --- |
| Likely current WNYHS index routes | 23 | Should be reviewed for sitemap inclusion and page-specific metadata. |
| Redirect/alias routes | 11 | Should generally be excluded from sitemap; canonical destination should be indexed if appropriate. |
| Transaction/runtime/token/internal routes | 29 | Should not be in sitemap; robots/noindex/protection review required. |
| Legacy/adjacent/campaign/vendor/demo/review routes | 56 | Needs owner decision before any index/sitemap change. |

## 9. Sitemap Gap Analysis

### C. Missing From Sitemap

| Route | Reason It May Belong | Priority |
| --- | --- | --- |
| `/home-security` | Current WNYHS home route on WNYHS hostname. | High |
| `/packages` | Required public route. | High |
| `/packages/:id` concrete URLs | Required public package detail route family. | High |
| `/discovery` | Required public Fit Check route. | High |
| `/contact` | Required public estimate/contact route. | High |
| `/support` | Required public support route. | High |
| `/about` | Public trust route. | Medium |
| `/our-work` | Public examples route. | Medium |
| `/privacy` | Required public legal route. | Medium |
| `/terms` | Required public legal route. | Medium |
| `/home-automation` | Public category landing page. | High |
| `/aging-in-place` | Public category landing page. | High |
| `/home-safety` | Public category landing page. | High |
| `/home-lighting` | Public category landing page. | High |
| `/home-security/whats-included` | Public informational page. | Medium |
| `/comparison` | Public comparison/trust page. | Medium |
| `/reliability` | Public trust/education page. | Medium |
| `/faq` | Public educational page. | Medium |
| `/solutions/senior-safety` | Public solution page. | Medium |
| `/solutions/water-protection` | Public solution page. | Medium |
| `/solutions/family-awareness` | Public solution page. | Medium |
| `/solutions/vacation-homes` | Public solution page. | Medium |

Likely indexable missing route count: 22 rows, including one dynamic route family that needs concrete URL expansion.

### D. Possibly Should Not Be In Sitemap

| Route | Reason | Recommendation |
| --- | --- | --- |
| `/halo-pushbutton` | Legacy/HALO-specific route; not current WNYHS route in project governance. | Review and likely remove from WNYHS sitemap unless intentionally search-facing. |
| `/halo-package` | Legacy/HALO-specific route; not current WNYHS route in project governance. | Review and likely remove from WNYHS sitemap unless intentionally search-facing. |
| `/vendors` | Vendor route, not a current WNYHS customer route. | Review business intent before retaining. |
| `/vendors/standards` | Vendor route, not a current WNYHS customer route. | Review business intent before retaining. |
| `/vendors/evaluation-toolkit` | Vendor route, not a current WNYHS customer route. | Review business intent before retaining. |
| `/vendors/questionnaire` | Vendor route, not a current WNYHS customer route. | Review business intent before retaining. |

Sitemap URLs marked legacy/review/remove: 6.

## 10. Robots.txt Review Recommendations

- Do not use robots.txt as the only exclusion mechanism for transaction, print, payment, token, operator, and experimental pages.
- Review whether `/operator`, `/operator/property-model`, `/quotePrint`, `/agreementPrint`, `/home-security/payment/*`, `/payment-processing`, `/resume`, `/resume-verify`, `/verify`, `/launchUat`, `/sicar`, `/newsite/*`, and static demo HTML need stronger noindex/protection handling.
- Keep sitemap declaration after sitemap remediation.
- Review whether exact `Disallow: /certificate` also covers all proof/certificate aliases intended to be excluded.

## 11. Metadata Baseline

`index.html` and `dist/index.html` contain only generic SPA metadata:

- Generic title: `WNY Home Security`
- No static meta description.
- No static canonical.
- No static Open Graph title/description.
- No static route-specific structured data.

`src/components/Seo.tsx` updates robots, canonical, title, and description client-side. `src/lib/seoPolicy.ts` currently classifies only a small older set of routes as `index, follow`. Most current WNYHS routes fall through to `noindex, nofollow` with reason `Unclassified route`.

Only HALO/vendor pages were found passing explicit `<Seo title=... description=...>` props. Current WNYHS pages such as `/home-security`, `/packages`, `/contact`, `/about`, `/support`, category pages, and solution pages did not show page-specific `<Seo>` props in targeted search.

## 12. Crawlable-Content Baseline

- Static/pre-rendered HTML present? NO for React routes.
- Route-specific content visible in built HTML? NO.
- Public route content appears client-rendered after JavaScript.
- SEO risk level: HIGH for search engines or link previews that rely on initial HTML; MEDIUM for modern JavaScript-capable crawlers once noindex policy is fixed.

The built `dist/index.html` contains the root element and bundled assets only, not route-specific page content.

## 13. Internal-Linking Baseline

Header/footer evidence strongly links:

- `/home-security`
- `/packages`
- `/discovery`
- `/contact`
- `/support`
- `/our-work`
- `/about`
- `/privacy`
- `/terms`

Homepage/category/package evidence links category and solution destinations. Likely orphan/review routes include `/faq`, `/comparison`, `/reliability`, several legacy/adjacent routes, and most `/newsite/*` routes.

## 14. Image/Media SEO Baseline

Public marketing pages generally use meaningful `alt` text for visible images. Evidence includes:

- `HomeSecurityLanding.tsx` category/package/solution images with alt text.
- `HomeAutomation.tsx` hero, reveal, dashboard, routine, and solution images with alt text.
- `CategoryLandingPage.tsx` shared category images with config-driven alt text.
- `OurWork.tsx` gallery images with alt text.
- `SolutionOpportunity.tsx` hero/sample images with alt text.

Decorative images use empty `alt=""` in at least some places, which is appropriate when intentional. Asset naming quality is mixed: many current WNYHS assets are descriptive under `public/images/home-security/`, while older root and generated assets include inconsistent names and spaces. No assets were edited.

## 15. Schema/Structured-Data Baseline

Targeted search found no app-level structured data implementation for:

- `application/ld+json`
- `Organization`
- `LocalBusiness`
- `Service`
- `BreadcrumbList`
- `FAQPage`

Schema baseline: missing for likely indexable WNYHS pages.

## 16. SEO Baseline Signals

### E. SEO Baseline Signals

| Route | Title | Meta Description | Canonical | Schema | Crawlable HTML | Internal Links | Risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Generic/client | Missing/generic | Client generic | Missing | NO | Medium | High |
| `/home-security` | Generic/client | Missing | Client noindex fallback | Missing | NO | Strong | High |
| `/packages` | Generic/client | Missing | Client noindex fallback | Missing | NO | Strong | High |
| `/packages/:id` | Generic/client | Missing | Client noindex fallback | Missing | NO | Strong from packages | High |
| `/discovery` | Generic/client | Missing | Client noindex fallback | Missing | NO | Strong | High |
| `/contact` | Generic/client | Missing | Client noindex fallback | Missing | NO | Strong | High |
| `/support` | Generic/client | Missing | Client noindex fallback | Missing | NO | Strong | High |
| `/about` | Generic/client | Missing | Client noindex fallback | Missing | NO | Footer | High |
| `/our-work` | Generic/client | Missing | Client noindex fallback | Missing | NO | Header/CTA | High |
| `/privacy` | Generic/client | Missing | Client noindex fallback | Missing | NO | Footer | Medium |
| `/terms` | Generic/client | Missing | Client noindex fallback | Missing | NO | Footer | Medium |
| `/home-automation` | Generic/client | Missing | Client noindex fallback | Missing | NO | Homepage/category | High |
| `/aging-in-place` | Generic/client | Missing | Client noindex fallback | Missing | NO | Homepage/category | High |
| `/home-safety` | Generic/client | Missing | Client noindex fallback | Missing | NO | Homepage/category | High |
| `/home-lighting` | Generic/client | Missing | Client noindex fallback | Missing | NO | Homepage/category | High |
| `/home-security/whats-included` | Generic/client | Missing | Client noindex fallback | Missing | NO | Review | High |
| `/comparison` | Generic/client | Missing | Client noindex fallback | Missing | NO | Review | High |
| `/reliability` | Generic/client | Missing | Client noindex fallback | Missing | NO | Redirect/CTA evidence | High |
| `/faq` | Generic/client | Missing | Client noindex fallback | Missing | NO | Weak/review | High |
| `/solutions/*` | Generic/client | Missing | Client noindex fallback | Missing | NO | Category/package evidence | High |
| `/qrlanding` | Generic/client | Missing | Client noindex fallback | Missing | NO | QR/public evidence | Review |
| `/halo-*`, `/halo/*` | Some explicit client titles/descriptions | Some explicit client descriptions | Client index for several | Missing | NO | Legacy/review | Review |
| `/vendors/*` | Explicit client titles/descriptions | Explicit client descriptions | Client index/noindex mixed | Missing | NO | Vendor nav | Review |
| Transaction/internal/newsite routes | Generic/client | Missing | Client noindex mixed/fallback | Missing | NO | Mixed | Review/High |

## 17. Minimum Remediation List

### F. Minimum Remediation Backlog

| Priority | Issue | Affected Routes | Recommended Next Task |
| --- | --- | --- | --- |
| High | Current WNYHS public routes are absent from `seoPolicy.ts` index allowlist and fall through to client `noindex, nofollow`. | `/home-security`, `/packages`, `/discovery`, `/contact`, `/support`, category pages, solution pages, trust pages | `T-SEO-POLICY001-001 - Classify Current WNYHS Route Index Policy` |
| High | `sitemap.xml` is legacy and omits current WNYHS index routes. | 22 likely indexable rows listed above | `T-SEO-SITEMAP001-001 - Update WNYHS Sitemap From Approved Route Policy` |
| High | SPA built HTML does not include route-specific content or metadata. | All React routes | `T-SEO-RENDER001-001 - Decide SPA Metadata/Prerender Strategy` |
| High | Page-specific title/description/canonical coverage is missing for current WNYHS pages. | Current WNYHS public route set | `T-SEO-METADATA001-001 - Add Approved Metadata For Current Public Routes` |
| Medium | Structured data appears absent. | Home, Contact, About, Packages, category and solution routes | `T-SEO-SCHEMA001-001 - Define WNYHS Structured Data Scope` |
| Medium | Internal/operator/transaction/newsite routes need exclusion/protection review beyond sitemap omission. | `/operator/*`, transaction pages, `/newsite/*`, print/token pages | `T-SEO-NOINDEX001-001 - Harden Exclusion Policy For Non-Index Routes` |
| Medium | Sitemap currently includes HALO/vendor URLs that may not match current WNYHS search intent. | `/halo-pushbutton`, `/halo-package`, `/vendors/*` | `T-SEO-LEGACY001-001 - Decide Legacy/Vendor Route Search Posture` |

## 18. Recommended Next Bounded Tasks

1. `T-SEO-POLICY001-001 - Classify Current WNYHS Route Index Policy`
2. `T-SEO-SITEMAP001-001 - Update WNYHS Sitemap From Approved Route Policy`
3. `T-SEO-METADATA001-001 - Add Approved Metadata For Current Public Routes`
4. `T-SEO-NOINDEX001-001 - Harden Exclusion Policy For Non-Index Routes`
5. `T-SEO-RENDER001-001 - Decide SPA Metadata/Prerender Strategy`
6. `T-SEO-SCHEMA001-001 - Define WNYHS Structured Data Scope`
7. `T-SEO-LEGACY001-001 - Decide Legacy/Vendor Route Search Posture`

## 19. Assumptions And Unknowns

- Category `SEO / Audit / Governance` from the prompt was mapped to repo category `QA` in the Master Task Register because the register's allowed category taxonomy does not include SEO.
- `Public?`, `Index?`, and `Sitemap?` classifications are baseline recommendations only; they do not authorize implementation.
- Dynamic package detail URLs require package ID enumeration in a separate task.
- Current sitemap lastmod values were recorded as-is and not validated against release history.
- Live production response headers were not inspected because this task was repo-only and external integrations/browser automation were not authorized.

## 20. Self-Check

- No implementation files were edited.
- No sitemap or robots file was changed.
- No metadata/schema/page content was implemented.
- No public site behavior changed.
- HubSpot untouched.
- Stripe/payment untouched.
- Scheduling untouched.
- Resend/email untouched.
- APIs/backend untouched.
- Dependencies and package-lock untouched.
