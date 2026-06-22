# SITEARCH001 WNYHS Public Information Architecture Audit REV01

## 1. Purpose

This document records the current public information architecture for WNY Home Security before any future route, search, homepage, category, solution, demo, or navigation decisions.

This is an audit/governance artifact only. It does not authorize source changes, route changes, navigation changes, search implementation, content rewrites, image generation, protected runtime changes, or deployment changes.

## 2. Authority

Controlling task: `T-SITEARCH001-001 - Complete Public Site Architecture Audit`.

Current operational context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.

Primary authority documents loaded:

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`
- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`
- `docs/governance/CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01.md`
- `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`
- `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`
- `docs/planning/SEARCH_UX_PLAN_REV01.md`
- `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`

## 3. Audit Method

The audit inspected:

- React route declarations in `src/App.tsx`.
- Route/page owner imports and route elements.
- Public marketing layout and WNYHS header/footer components.
- Current WNYHS navigation source in `src/content/wnyhsNavigation.ts`.
- Homepage category, package, solution, Core, and search access links in `src/components/homeSecurity/HomeSecurityLanding.tsx`.
- Category page owner components in `src/pages/HomeSecurity.tsx`, `src/pages/HomeAutomation.tsx`, `src/pages/AgingInPlace.tsx`, `src/pages/HomeSafety.tsx`, `src/pages/HomeLighting.tsx`, and `src/pages/CategoryLandingPage.tsx`.
- Solution page owner in `src/pages/SolutionOpportunity.tsx`.
- Offer/package/solution link sources in `src/content/wnyhsOfferCatalog.ts`.
- SEO policy in `src/lib/seoPolicy.ts`, sitemap in `public/sitemap.xml`, and robots in `public/robots.txt`.
- Static public demo file at `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html`.

## 4. Current Public Route Inventory

The app currently declares 117 React route entries in `src/App.tsx`. One additional static public HTML demo file exists under `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html`. This audit therefore found 118 public-reachable route/file candidates before governance classification.

| Route or file | Owner | Current purpose | Type | Index posture observed | Nav posture observed |
| --- | --- | --- | --- | --- | --- |
| `/` | `HomeRoute` | Host-based entry; WNYHS host redirects to `/home-security`, other host shows `RetailLanding`. | Marketing/system | `index, follow` in SEO policy | Brand/root link only |
| `/home-security` | `src/pages/HomeSecurity.tsx` + `HomeSecurityLanding` | Current WNYHS homepage and Home Security category/trust entry. | Marketing/category conflict | `noindex, nofollow` by default policy | Header Home, brand, homepage cards |
| `/halo-splash` | `src/pages/Home.tsx` | Legacy/alternate home splash. | System/legacy | `noindex, nofollow` | No WNYHS nav entry found |
| `/packages` | `src/pages/Packages.tsx` | Package/offer comparison and solution catalog anchor host. | Marketing/conversion | `noindex, nofollow` | Header Solutions, homepage packages, CTAs |
| `/packages/:id` | `src/pages/PackageDetail.tsx` | Dynamic package detail pages. | Marketing/conversion | `noindex, nofollow` | Package links/contextual |
| `/fit-check` | `Navigate` | Alias to `/discovery?vertical=home-security`. | Conversion alias | `noindex, nofollow` | Governance references only |
| `/discovery` | `src/pages/Discovery.tsx` | Current fit-check/needs discovery route. | Conversion | `noindex, nofollow` | Header Fit Check, CTA links |
| `/estimate` | `Navigate` | Alias to `/contact?vertical=home-security`. | Conversion alias | `noindex, nofollow` | CTA/governance reference |
| `/contact` | `src/pages/Contact.tsx` | Estimate/contact request path. | Conversion/public information | `noindex, nofollow` | Header Estimate, footer Contact, CTAs |
| `/support` | `src/pages/Support.tsx` | Help/support request path. | Support/public information | `noindex, nofollow` | Header Support, footer Support |
| `/about` | `src/pages/About.tsx` | Company/local trust page. | Marketing/public information | `noindex, nofollow` | More menu and footer |
| `/our-work` | `src/pages/OurWork.tsx` | Example work/trust gallery. | Marketing/proof | `noindex, nofollow` | Header Our Work and contextual links |
| `/comparison` | `src/pages/Comparison.tsx` | Comparison/trust page. | Marketing | `noindex, nofollow` | Contextual/legacy |
| `/funding` | `src/pages/Funding.tsx` | Funding information. | Marketing/legacy | `noindex, nofollow` | No primary WNYHS nav entry found |
| `/reliability` | `src/pages/Reliability.tsx` | How-it-works/reliability information. | Marketing/public information | `noindex, nofollow` | Redirect target from category aliases |
| `/faq` | `src/pages/FAQ.tsx` | FAQ page. | Support/public information | `noindex, nofollow` | No primary WNYHS nav entry found |
| `/privacy` | `src/pages/Privacy.tsx` | Privacy policy. | Legal | `noindex, nofollow` | Footer |
| `/terms` | `src/pages/Terms.tsx` | Terms. | Legal | `noindex, nofollow` | Footer |
| `/home-automation` | `src/pages/HomeAutomation.tsx` | Home Automation category landing page. | Category | `noindex, nofollow` | Homepage category card |
| `/aging-in-place` | `src/pages/AgingInPlace.tsx` + `CategoryLandingPage` | Aging-In-Place category landing page. | Category | `noindex, nofollow` | Homepage category card |
| `/home-safety` | `src/pages/HomeSafety.tsx` + `CategoryLandingPage` | Environmental/Home Safety category landing page. | Category | `noindex, nofollow` | Homepage category card |
| `/home-lighting` | `src/pages/HomeLighting.tsx` + `CategoryLandingPage` | Home Lighting category landing page. | Category | `noindex, nofollow` | Homepage category card |
| `/home-security/legacy` | `src/pages/HomeSecurityLegacy.tsx` | Legacy Home Security page. | Legacy/category conflict | `noindex, nofollow` | No primary nav entry found |
| `/home-security/legacy-premium` | `src/pages/HomeSecurityLegacyPremium.tsx` | Legacy premium Home Security page. | Legacy/category conflict | `noindex, nofollow` | No primary nav entry found |
| `/home-security/planner` | `src/pages/HomeSecurityPlanner.tsx` | Precision Planner preview. | Tool/conversion support | `noindex, nofollow` | More menu and funnel links |
| `/home-security/dashboard` | `src/pages/HomeSecurityDashboard.tsx` | WNYHS dashboard page/demo-like surface. | Demo/system | `noindex, nofollow` | No primary nav entry found |
| `/home-security/whats-included` | `src/pages/HomeSecurityWhatsIncluded.tsx` | Static information page. | Marketing/public information | `noindex, nofollow` | Contextual |
| `/home-security/packages` | `Navigate` | Alias to `/packages?vertical=home-security`. | Category/package alias | `noindex, nofollow` | Contextual/legacy |
| `/home-security/add-ons` | `Navigate` | Alias to `/quote?vertical=home-security#addons`. | Conversion alias | `noindex, nofollow` | Contextual/legacy |
| `/home-security/how-it-works` | `Navigate` | Alias to `/reliability?vertical=home-security`. | Public information alias | `noindex, nofollow` | Contextual/legacy |
| `/home-automation/packages` | `Navigate` | Alias to `/packages`. | Category/package alias | `noindex, nofollow` | No primary nav entry found |
| `/home-automation/add-ons` | `Navigate` | Alias to `/quote#addons`. | Conversion alias | `noindex, nofollow` | No primary nav entry found |
| `/home-automation/how-it-works` | `Navigate` | Alias to `/reliability`. | Public information alias | `noindex, nofollow` | No primary nav entry found |
| `/elder-care-tech` | `src/pages/ElderCare.tsx` | Older elder-tech vertical route. | Legacy/category conflict | `noindex, nofollow` | No primary nav entry found |
| `/elder-care-tech/packages` | `Navigate` | Alias to `/packages`. | Legacy alias | `noindex, nofollow` | No primary nav entry found |
| `/elder-care-tech/add-ons` | `Navigate` | Alias to `/quote#addons`. | Legacy alias | `noindex, nofollow` | No primary nav entry found |
| `/elder-care-tech/how-it-works` | `Navigate` | Alias to `/reliability`. | Legacy alias | `noindex, nofollow` | No primary nav entry found |
| `/solutions/senior-safety` | `src/pages/SolutionOpportunity.tsx` | Live solution detail page. | Solution | `noindex, nofollow` | Category/homepage/contextual |
| `/solutions/water-protection` | `src/pages/SolutionOpportunity.tsx` | Live solution detail page. | Solution | `noindex, nofollow` | Category/homepage/contextual |
| `/solutions/family-awareness` | `src/pages/SolutionOpportunity.tsx` | Live solution detail page. | Solution | `noindex, nofollow` | Category/homepage/contextual |
| `/solutions/vacation-homes` | `src/pages/SolutionOpportunity.tsx` | Live solution detail page. | Solution | `noindex, nofollow` | Category/contextual |
| `/qrlanding` | `src/pages/QrLanding.tsx` | QR/campaign landing page. | Campaign/conversion | `noindex, nofollow` | QR assets/contextual |
| `/qrlanding.htm` | `QrLandingAlias` | Alias to `/qrlanding`. | Campaign alias | `noindex, nofollow` | Legacy/static QR compatibility |
| `/quote` | `src/pages/Quote.tsx` | Quote workflow. | Transaction/conversion | `noindex, follow` | Funnel/contextual |
| `/quoteReview` | `src/pages/QuoteReview.tsx` | Quote review. | Transaction | `noindex, follow` | Funnel/contextual |
| `/quotePrint` | `src/pages/QuotePrint.tsx` | Quote print view. | System/transaction | `noindex, nofollow` | Token/contextual |
| `/agreement` | `src/pages/Agreement.tsx` | Agreement redirect/step. | Transaction | `noindex, nofollow` default | Funnel/contextual |
| `/agreementReview` | `src/pages/AgreementReview.tsx` | Agreement review. | Transaction | `noindex, follow` | Funnel/contextual |
| `/agreementPrint` | `src/pages/AgreementPrint.tsx` | Agreement print view. | System/transaction | `noindex, nofollow` | Token/contextual |
| `/esign` | `src/pages/ESign.tsx` | E-sign related route. | Transaction/system | `noindex, nofollow` | Contextual |
| `/payment` | `src/pages/Payment.tsx` | Deposit/payment step. | Transaction | `noindex, follow` | Funnel/contextual |
| `/home-security/pay-deposit` | `src/pages/HomeSecurityPayDeposit.tsx` | Deposit checkout entry. | Transaction | `noindex, nofollow` default | Contextual |
| `/home-security/payment/success` | `src/pages/HomeSecurityPaymentSuccess.tsx` | Payment success status. | System/transaction | `noindex, nofollow` default | Redirect/contextual |
| `/home-security/payment/canceled` | `src/pages/HomeSecurityPaymentCanceled.tsx` | Payment canceled status. | System/transaction | `noindex, nofollow` default | Redirect/contextual |
| `/home-security/payment/cancel` | `src/pages/HomeSecurityPaymentCancel.tsx` | Alternate payment cancel status. | System/transaction | `noindex, nofollow` default | Redirect/contextual |
| `/payment-processing` | `src/pages/PaymentProcessing.tsx` | Payment processing status. | System/transaction | `noindex, nofollow` default | Contextual |
| `/schedule` | `src/pages/Schedule.tsx` | Scheduling request step. | Transaction | `noindex, follow` | Funnel/contextual |
| `/resume` | `src/pages/Resume.tsx` | Resume token route. | System/transaction | `noindex, follow` | Token/contextual |
| `/resume-verify` | `src/pages/ResumeVerify.tsx` | Resume verification. | System/transaction | `noindex, follow` | Token/contextual |
| `/verify` | `src/pages/Verify.tsx` | Document verification. | System | `noindex, nofollow` | Token/contextual |
| `/uat` | `src/pages/UAT.tsx` | UAT route. | System/internal | `noindex, nofollow`, robots disallow | No public nav |
| `/launchUat` | `src/pages/LaunchUAT.tsx` | Launch UAT route. | System/internal | `noindex, nofollow` default | No public nav |
| `/sicar` | `src/pages/Certificate.tsx` | Certificate route. | System | `noindex, nofollow` default | No public nav |
| `/certificate` | `src/pages/Certificate.tsx` | Certificate route. | System | `noindex, nofollow`, robots disallow | No public nav |
| `/recommend` | `src/pages/Recommendation.tsx` | Recommendation route. | Conversion/system | `noindex, nofollow` default | Contextual/legacy |
| `/health-homes` and child routes | `src/pages/HealthHomes*.tsx` | Legacy health-homes vertical pages. | Legacy/vertical | `noindex, nofollow` default | No WNYHS nav |
| `/lp/senior`, `/lp/family`, `/lp/agency` | `src/pages/*Landing.tsx` | Legacy landing pages. | Campaign/legacy | `noindex, nofollow` default | No WNYHS nav |
| `/halo` and `/halo/*` | `src/pages/Halo*.tsx` | Halo product/legacy route family. | Legacy/product | `index, follow` for listed Halo routes | No WNYHS primary nav |
| `/halo-pushbutton` | `src/pages/HaloPushbutton.tsx` | Halo legacy product page. | Legacy/product | `index, follow`, sitemap listed | Sitemap only |
| `/halo-package` | `src/pages/HaloPackage.tsx` | Halo legacy package page. | Legacy/product | `index, follow`, sitemap listed | Sitemap only |
| `/vendors` and child routes | `src/pages/Vendor*.tsx` | Vendor pages. | Legacy/business | `index, follow` for several vendor routes | Sitemap only |
| `/vendors/apply` | `src/pages/VendorApply.tsx` | Vendor application. | Legacy/conversion | `noindex, follow` | Contextual vendor links |
| `/never-miss-another-estimate` | `src/pages/NeverMissAnotherEstimate.tsx` | Business/demo landing. | Legacy/business | `noindex, nofollow` default | No WNYHS nav |
| `/demo` | `src/pages/Demo.tsx` | Business demo page. | Demo/legacy business | `noindex, nofollow` default | Operator/business links |
| `/pricing` | `src/pages/Pricing.tsx` | Business pricing page. | Legacy/business | `noindex, nofollow` default | Business demo links |
| `/5-day-demo` | `src/pages/FiveDayDemo.tsx` | Business demo sign-up route. | Demo/legacy business | `noindex, nofollow` default | Business demo links |
| `/partners` | `src/pages/Partners.tsx` | Partner page. | Legacy/business | `noindex, nofollow` default | Business demo links |
| `/newsite` and child routes | `src/newsite/pages/*.tsx` | Prototype/new-site route family. | Prototype/system | `noindex, nofollow` default unless child code overrides | No current WNYHS public nav found |
| `/newsite/demos` | `src/newsite/pages/DemosIndex.tsx` | Demo index in prototype. | Demo/prototype | `noindex, nofollow` default | Prototype |
| `/newsite/demos/ha-gold-dashboard` | `src/newsite/pages/DemoHAGoldDashboard.tsx` | Interactive dashboard demo route. | Demo/prototype | `noindex, nofollow` default | Prototype |
| `/operator` and child routes | `src/pages/Operator.tsx`, `src/pages/PropertyModel*.tsx` | Internal/operator workspace routes. | System/internal | `noindex, nofollow` default | Operator only |
| `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html` | Static public file | Standalone HA Gold dashboard demo. | Demo/static file | Not covered by React SEO policy | Direct file path only |

## 5. Route Ownership Matrix

| Route family | Route owner | Governance owner inferred | Notes |
| --- | --- | --- | --- |
| Homepage/current public entry | `/home-security` via `HomeSecurity.tsx` | Homepage/category governance conflict | `/` redirects WNYHS host to `/home-security`; `/home-security` also functions as the Home Security category. |
| Category pages | `HomeAutomation.tsx`, `CategoryLandingPage.tsx`, `HomeSecurityLanding` | CATEGORY001/CATEGORY002 | Home Security category is not separated from homepage. |
| Solution pages | `SolutionOpportunity.tsx` | SOLUTION001 REV02 | Four live solution slugs are route-backed. Additional public solution objects exist as anchors on `/packages`. |
| Package pages | `Packages.tsx`, `PackageDetail.tsx`, `wnyhsOfferCatalog.ts` | PACKAGE/OFFER governance | `/packages` also hosts anchored categories, packages, public solutions, Core, and Vault content. |
| Conversion routes | `Discovery.tsx`, `Contact.tsx`, `Quote*.tsx`, `Agreement*.tsx`, `Payment.tsx`, `Schedule.tsx` | Public funnel/runtime governance | Must remain protected; no architecture change authorized here. |
| Campaign route | `QrLanding.tsx` | QR funnel governance | `/qrlanding.htm` alias preserved. |
| Demo/dashboard routes | `Demo.tsx`, `HomeSecurityDashboard.tsx`, `newsite/pages/DemoHAGoldDashboard.tsx`, static HTML | Demo/system governance needed | Multiple demo concepts exist. |
| Legal routes | `Privacy.tsx`, `Terms.tsx`, Halo legal pages | Legal/public information | Footer points to WNYHS legal pages with vertical query. |
| Legacy verticals | Health Homes, Halo, vendors, older landing pages | Legacy/system | Several legacy routes remain indexable in SEO policy and sitemap. |
| Internal/operator | `OperatorLayout`, `PropertyModel*` | Internal quote/workspace governance | Public-reachable by route, but no public nav entry found. |

## 6. Page/Component Ownership Matrix

| Page/component | Current role | Ownership finding |
| --- | --- | --- |
| `HomeSecurity.tsx` | `/home-security` wrapper | Current owner of `/home-security`. |
| `HomeSecurityLanding.tsx` | Current WNYHS homepage content | Owns homepage sections, category explorer, featured packages, featured solutions, WNYHS Core, placeholder search access. |
| `HomeAutomation.tsx` | Category page | Separate category implementation, not shared config. |
| `CategoryLandingPage.tsx` | Shared category page system | Owns Aging-In-Place, Home Safety/Environmental Safety, and Home Lighting configs. |
| `SolutionOpportunity.tsx` | Shared solution route owner | Owns four solution page slugs. |
| `Packages.tsx` + `wnyhsOfferCatalog.ts` | Package/offer hub | Owns package starting points, public solution anchors, Core and Vault content. |
| `WnyhsTopNav.tsx` + `wnyhsNavigation.ts` | WNYHS header/nav | Owns primary nav and more menu. |
| `WnyhsSiteFooter.tsx` | WNYHS footer | Owns footer links and version badge surface. |
| `Layout.tsx` | Outer layout and SEO | Suppresses generic footer for WNYHS marketing shell; injects SEO policy. |
| `Seo.tsx` + `seoPolicy.ts` | Metadata/canonical/robots | Most current WNYHS routes are unclassified and therefore noindex/nofollow. |

## 7. Header Navigation Inventory

Current WNYHS primary nav source: `src/content/wnyhsNavigation.ts`.

Primary items:

| Label | Href | Observed role |
| --- | --- | --- |
| Home | `/home-security` | Homepage/current Home Security page |
| Search | `/home-security#home-search` | Anchor to placeholder search access |
| Solutions | `/packages?vertical=home-security` | Currently points to packages/offer hub, not a dedicated solution catalog route |
| Fit Check | `/discovery?vertical=home-security` | Conversion discovery |
| Estimate | `/contact?vertical=home-security` | Conversion/contact |
| Support | `/support?vertical=home-security` | Support |
| Our Work | `/our-work?vertical=home-security` | Proof/trust |

More/drawer items include About, Our Work, Contact, Privacy, Terms, Support, and System Planner Preview.

Finding: current header differs from the older locked header/footer standard and the newer site/content architecture navigation model. This audit does not resolve that conflict; it recommends a future navigation governance decision.

## 8. Footer Navigation Inventory

Current WNYHS footer owner: `src/components/homeSecurity/WnyhsSiteFooter.tsx`.

Footer links:

- `/about?vertical=home-security`
- `/contact?vertical=home-security`
- `/privacy?vertical=home-security`
- `/terms?vertical=home-security`
- `/support?vertical=home-security`

Footer also shows WNY Home Security, Western New York, phone, email, and site version.

## 9. Embedded/Internal Link Inventory

High-value embedded links found:

| Source | Links |
| --- | --- |
| Homepage category explorer | `/home-security`, `/aging-in-place`, `/home-safety`, `/home-automation`, `/home-lighting` |
| Homepage featured packages | `/packages?vertical=home-security#package-starting-points` |
| Homepage featured solutions | `/packages?vertical=home-security#solution-front-door-package-protection`, `/packages?vertical=home-security#solution-driveway-watch`, `/solutions/water-protection`, `/packages?vertical=home-security#solution-sump-area-awareness`, `/solutions/family-awareness`, `/packages?vertical=home-security#solution-entry-lighting-automation` |
| Homepage CTAs | `/contact?vertical=home-security`, phone link |
| Category pages | `/contact?vertical=home-security`, phone link, `/packages?vertical=home-security#standard-planning-solutions`, multiple `/packages` anchors, selected `/solutions/*` links |
| Solution pages | `/contact?vertical=home-security`, `/discovery?vertical=home-security`, `/packages?vertical=home-security`, `/our-work?vertical=home-security` |
| Support | phone, SMS, support form, `/contact?vertical=home-security` |
| QR print source | `https://www.wnyhomesecurity.com/qrlanding?src=placard` in `public/brand/print-assets/pole-mall-flyer/source/pole-mall-flyer-config.json` |
| Prototype `/newsite` | Internal prototype links among `/newsite/*`, plus some links back to `/discovery` and `/packages` |

## 10. Homepage Ownership Findings

- `/` is not the direct WNYHS homepage on WNYHS host; `HomeRoute` sends WNYHS host traffic to `/home-security`.
- `/home-security` is the effective WNYHS homepage and also the Home Security category destination.
- `HomeSecurityLanding.tsx` includes the required homepage concepts from newer governance: search access, hero, trust bar, category explorer, featured packages, featured solutions, WNYHS Core, how it works, why WNYHS, and CTA.
- The architecture problem is that the page name and route imply Home Security category ownership, while its content acts as the full WNYHS homepage.

## 11. Category Route Findings

- Current category candidates are `/home-security`, `/aging-in-place`, `/home-safety`, `/home-automation`, and `/home-lighting`.
- CATEGORY001 names the approved category as Environmental Safety, but the implemented route is `/home-safety`.
- `/home-security` is overloaded as homepage plus category.
- `/home-automation` is independently implemented rather than using the shared `CategoryLandingPage` config owner.
- `CategoryLandingPage.tsx` owns Aging-In-Place, Home Safety, and Home Lighting.
- Several category-adjacent aliases exist under `/home-security`, `/home-automation`, and `/elder-care-tech`.

## 12. Solution Route Findings

Route-backed live solution pages:

- `/solutions/senior-safety`
- `/solutions/water-protection`
- `/solutions/family-awareness`
- `/solutions/vacation-homes`

Additional public solution objects exist in `src/content/wnyhsOfferCatalog.ts`, but many link to `/discovery?vertical=home-security`, `/contact?vertical=home-security`, or anchors inside `/packages?vertical=home-security` rather than dedicated `/solutions/:slug` routes.

Finding: the site currently has both route-backed solution pages and anchor-only solution entries on the package/offer page. Future governance should decide which solution objects deserve first-class routes.

## 13. Conversion Route Findings

Current conversion route family:

- `/fit-check` redirects to `/discovery?vertical=home-security`.
- `/discovery` is the current fit-check route.
- `/estimate` redirects to `/contact?vertical=home-security`.
- `/contact` is the current estimate/contact intake route.
- `/quote`, `/quoteReview`, `/quotePrint`, `/agreement`, `/agreementReview`, `/agreementPrint`, `/payment`, `/home-security/pay-deposit`, payment status routes, `/schedule`, `/resume`, `/resume-verify`, and `/verify` are protected transaction/system routes.

No conversion route changes are authorized by this audit.

## 14. Campaign Route Findings

- `/qrlanding` is the current QR campaign landing route.
- `/qrlanding.htm` aliases to `/qrlanding`.
- Print source configuration points to `/qrlanding?src=placard`.
- QR governance says QR Landing should be shorter and conversion-oriented, not a duplicate homepage.

## 15. Demo/Dashboard Route Findings

Located dashboard/demo surfaces:

- `/home-security/dashboard` -> `src/pages/HomeSecurityDashboard.tsx`.
- `/newsite/demos/ha-gold-dashboard` -> `src/newsite/pages/DemoHAGoldDashboard.tsx`.
- `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html` -> static interactive dashboard demo file with image assets.
- `/demo`, `/5-day-demo`, and `/newsite/demos` are additional demo/business-demo routes.

Finding: the interactive HA Gold dashboard demo exists in both a `/newsite` React route and a static public HTML file. The future architecture decision should choose whether it is public marketing, hidden sales demo, prototype-only, or internal.

## 16. Search Route and Search UI Findings

- No dedicated `/search` React route exists.
- The WNYHS header has a Search item pointing to `/home-security#home-search`.
- `HomeSecurityLanding.tsx` includes a search access section with example terms and text saying full search is coming soon.
- `SEARCH_UX_PLAN_REV01` says search should no longer be decorative and should index approved public Categories, Packages, Solutions, and Public Information Pages.

Current status: search is a placeholder/anchor UI, not functional search.

Expected searchable content groups from governance:

- Categories
- Packages
- Solutions
- Public information pages such as About, Contact, Support, How It Works, Why WNYHS

## 17. Support/About/Our-Work/Contact Findings

- `/support`, `/about`, `/our-work`, and `/contact` exist and use WNYHS marketing layout patterns.
- Header and footer link directly to these pages.
- SEO policy currently leaves them `noindex, nofollow` because they are unclassified.
- `/contact` is both a public information page and the estimate/contact conversion target.

## 18. Legal/System Route Findings

Legal:

- `/privacy`
- `/terms`
- `/halo/privacy`
- `/halo/terms`

System/transaction:

- Payment status routes.
- Token/resume/verify/print routes.
- `/uat`, `/launchUat`, `/certificate`, `/sicar`.
- `/operator/*`.

Robots currently disallows `/uat` and `/certificate`; many other system routes rely on React SEO policy only.

## 19. SEO/Canonical URL Observations

- `public/sitemap.xml` currently lists `/`, `/halo-pushbutton`, `/halo-package`, and several vendor routes, but does not list the main WNYHS category, package, solution, support, contact, about, privacy, terms, or QR routes.
- `src/lib/seoPolicy.ts` marks only legacy/root/Halo/vendor routes as `index, follow`.
- Most current WNYHS pages fall through to `noindex, nofollow`.
- Canonical base is `https://wnyhomesecurity.com`, while sitemap uses `https://www.wnyhomesecurity.com`.

Finding: SEO visibility is not aligned with the current WNYHS public architecture.

## 20. Breadcrumb and Internal Linking Observations

- WNYHS marketing pages generally set `showBreadcrumbs: false`.
- Generic `DefaultLayout` can render breadcrumbs when layout config enables them, but current WNYHS marketing/category/solution pages mostly suppress breadcrumbs.
- Internal linking is strong from homepage to categories and selected solutions, but several solution links resolve to `/packages` anchors rather than dedicated solution routes.
- The public journey should generally be Homepage -> Category -> Solution -> Estimate/Contact. The current site often uses Homepage -> Packages/Anchors -> Fit Check/Contact.

## 21. Package Visibility Observations

Packages are visible on:

- `/packages`
- `/packages/:id`
- Homepage featured package cards.
- Category pages through package/offer anchors and package-related copy.

Governance principle to preserve: Packages are sales/catalog constructs. They may be referenced on category and solution pages, especially to explain package pricing with multiple solutions and that WNYHS Core is purchased only once, but they should not be assumed to be first-class primary navigation objects unless later governance says so.

## 22. WNYHS Core Visibility Observations

WNYHS Core is visible on:

- Homepage WNYHS Core section.
- Category page Core sections.
- `/packages?vertical=home-security#wnyhs-core` through offer catalog content.
- Solution and offer copy as the local dashboard/control foundation.

Governance principle to preserve: WNYHS Core should be visible as the platform foundation on homepage, category pages, solution pages, and estimate flow, but should not be assumed to require a standalone primary-nav destination unless later governance decides it.

## 23. Route Conflict Findings

Major conflicts found:

1. `/home-security` is both the effective WNYHS homepage and a Home Security category route.
2. `/` behaves differently by hostname and is not the WNYHS content owner on the WNYHS host.
3. Header label "Solutions" points to `/packages?vertical=home-security`, not a dedicated solution catalog route.
4. `/home-safety` implements Environmental Safety under a different route name.
5. `elder-care-tech` and `aging-in-place` overlap conceptually.
6. Route-backed solution pages coexist with package-page solution anchors.
7. Interactive dashboard/demo has multiple locations and unclear public governance.
8. Search is required by governance but currently has no route and only placeholder UI.
9. Current sitemap and SEO policy index legacy/Halo/vendor routes more clearly than current WNYHS public routes.
10. `/newsite/*` prototype routes remain route-declared and public-reachable.
11. `/operator/*` routes are route-declared and public-reachable, though not public-nav-linked.

## 24. Recommended Future Architecture Decisions

Recommended decisions for future bounded tasks:

1. Decide whether WNYHS homepage should remain `/home-security`, move to `/`, or use another final route. Do not rename in this audit.
2. Decide whether Home Security category gets its own route separate from homepage.
3. Decide whether Environmental Safety route should remain `/home-safety` or receive a governance-supported alias/final route.
4. Decide whether `/packages` should remain the "Solutions" nav destination or whether a dedicated solution catalog/search route is needed.
5. Decide which public solution objects receive `/solutions/:slug` pages.
6. Decide the public status of `/newsite/*` and demo/dashboard routes.
7. Decide how search should be routed and which content objects should become searchable.
8. Decide SEO index/canonical policy for the current WNYHS public routes.
9. Decide whether operator/system routes require stronger non-public routing treatment beyond no public nav.

## 25. Recommended Next Tasks

Recommended bounded follow-up tasks:

- `T-SITEARCH001-002`: Final route ownership decision for homepage and Home Security category.
- `T-SITEARCH001-003`: Public navigation governance reconciliation.
- `T-SITEARCH001-004`: Search route and searchable content source specification.
- `T-SITEARCH001-005`: Solution route expansion decision matrix.
- `T-SITEARCH001-006`: Demo/dashboard public visibility decision.
- `T-SEO-BASELINE001-002`: SEO policy and sitemap reconciliation plan for current WNYHS routes.
- `T-SYSTEMROUTES001-001`: Public-reachable system/prototype route exposure review.

## 26. Codex Restrictions

This audit did not authorize and must not be used as authority to:

- Rename routes.
- Move routes.
- Add redirects.
- Implement search.
- Modify navigation.
- Modify footer links.
- Modify page content.
- Modify category pages.
- Modify solution pages.
- Generate image assets.
- Touch HubSpot.
- Touch Stripe/payment.
- Touch scheduling.
- Touch quote/planner runtime.
- Touch backend/API runtime.
- Touch Resend/email.
- Touch Cloudflare config.
- Touch environment variables or secrets.
- Change dependencies or package-lock.

## 27. Success Criteria

Success criteria for `T-SITEARCH001-001`:

- `SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md` exists.
- Current route inventory is documented.
- Current owner of `/home-security` is identified.
- Category, solution, conversion, campaign, demo, search, support, legal, and system findings are recorded.
- Header, footer, embedded links, SEO/canonical, breadcrumb, package, WNYHS Core, and route conflict observations are recorded.
- Recommended future decisions and next tasks are documented.
- Task register, document catalog, and markdown manifest are updated.
- No route, navigation, search, category, solution, image, runtime, protected-system, dependency, package-lock, or Cloudflare changes are made.
