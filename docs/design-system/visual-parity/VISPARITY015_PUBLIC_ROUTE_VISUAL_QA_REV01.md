# VISPARITY015 Public Route Visual QA REV01

Task ID: VISPARITY015
Task Name: Public Route Sweep / Visual QA
Status: Audit record
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose

Record route-by-route visual coverage after VISPARITY009 through VISPARITY014 and identify whether any public-facing WNYHS route family still needs visual-token follow-up.

This is a bounded visual QA and route coverage audit. It does not authorize route, page copy, CTA, image, form, payload, validation, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, or asset changes.

## 2. Scope

VISPARITY015 inspected route and visual coverage sources only:

- `src/App.tsx`
- `src/lib/seoPolicy.ts`
- `src/content/wnyhsNavigation.ts`
- `src/content/publicSearchIndex.ts`
- `src/content/wnyhsOfferCatalog.ts`
- `src/content/packages.ts`
- `public/sitemap.xml`
- `public/robots.txt`
- `docs/seo/SEO-BASELINE001_WNYHS_PUBLIC_ROUTE_INVENTORY_AND_SEO_BASELINE_REV01.md`
- `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`
- `docs/design-system/visual-parity/README.md`
- `docs/system/master-task-register.md`
- existing Site QA Playwright specs under `tests/site-qa/`
- public style/token files inspected by targeted `rg`

No source or style corrections were made in this task. Remaining issues below are audit findings only.

## 3. Coverage Model

Visual coverage source task meanings:

- VISPARITY009: shared WNYHS shell, header, mobile navigation, funnel shell, footer, and global wrapper rhythm.
- VISPARITY010: active homepage-specific surfaces.
- VISPARITY011: package landing/detail and package-adjacent visual surfaces.
- VISPARITY012: lead-generation and funnel/transaction visual surfaces.
- VISPARITY013: solution and category visual surfaces.
- VISPARITY014: remaining public informational and QR campaign surfaces, including FAQ, funding, and QR campaign selectors.

## 4. Route Coverage Table

| Route | Public / non-public / review | Route family | Visual coverage source task | Current visual status | Remaining issue, if any | Follow-up required yes/no | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Public | Homepage canonical entry | VISPARITY009, VISPARITY010 | Covered | None found in bounded audit | No | Router redirects WNYHS host to `/home-security`; SEO sitemap indexes `/`. |
| `/home-security` | Public / legacy homepage path | Homepage / legacy canonicalized path | VISPARITY009, VISPARITY010 | Covered | Legacy path remains `noindex, follow` and canonicalizes to `/` in SEO policy | No | Public search still lists `/home-security` as homepage route. |
| `/categories/home-security` | Public | Canonical category | VISPARITY009, VISPARITY013 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/categories/home-automation` | Public | Canonical category | VISPARITY009, VISPARITY013 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/categories/home-safety` | Public | Canonical category | VISPARITY009, VISPARITY013 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/categories/home-lighting` | Public | Canonical category | VISPARITY009, VISPARITY013 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/categories/aging-in-place` | Public | Canonical category | VISPARITY009, VISPARITY013 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/home-automation` | Review | Legacy flat category alias | VISPARITY009, VISPARITY013 | Covered as alias surface | SEO policy canonicalizes to `/categories/home-automation` | No | Preserved route, not a separate redesign target in this task. |
| `/home-safety` | Review | Legacy flat category alias | VISPARITY009, VISPARITY013 | Covered as alias surface | SEO policy canonicalizes to `/categories/home-safety` | No | Preserved route. |
| `/home-lighting` | Review | Legacy flat category alias | VISPARITY009, VISPARITY013 | Covered as alias surface | SEO policy canonicalizes to `/categories/home-lighting` | No | Preserved route. |
| `/aging-in-place` | Review | Legacy flat category alias | VISPARITY009, VISPARITY013 | Covered as alias surface | SEO policy canonicalizes to `/categories/aging-in-place` | No | Preserved route. |
| `/solutions/senior-safety` | Public | Solution detail | VISPARITY009, VISPARITY013 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/solutions/water-protection` | Public | Solution detail | VISPARITY009, VISPARITY013 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/solutions/family-awareness` | Public | Solution detail | VISPARITY009, VISPARITY013 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/solutions/vacation-homes` | Public | Solution detail | VISPARITY009, VISPARITY013 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/packages` | Public / review SEO | Packages landing | VISPARITY009, VISPARITY011 | Covered | Package routes remain noindex pending SEO visibility approval | No | Required public route; excluded from sitemap by current SEO policy. |
| `/packages/a1` | Public / review SEO | Package detail | VISPARITY009, VISPARITY011 | Covered | Package detail route family remains noindex pending SEO visibility approval | No | Concrete ID from `src/content/packages.ts`. |
| `/packages/a2` | Public / review SEO | Package detail | VISPARITY009, VISPARITY011 | Covered | Package detail route family remains noindex pending SEO visibility approval | No | Concrete ID from `src/content/packages.ts`. |
| `/packages/a3` | Public / review SEO | Package detail | VISPARITY009, VISPARITY011 | Covered | Package detail route family remains noindex pending SEO visibility approval | No | Concrete ID from `src/content/packages.ts`. |
| `/discovery` | Public | Fit Check / lead generation | VISPARITY009, VISPARITY012 | Covered | None found in bounded audit | No | Required public route. |
| `/fit-check` | Review / redirect | Fit Check alias | VISPARITY009, VISPARITY012 | Covered by destination | Alias redirects to `/discovery?vertical=home-security` | No | No route changes made. |
| `/contact` | Public | Contact / estimate request | VISPARITY009, VISPARITY012 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/estimate` | Review / redirect | Contact alias | VISPARITY009, VISPARITY012 | Covered by destination | Alias redirects to `/contact?vertical=home-security` | No | No route changes made. |
| `/support` | Public | Support | VISPARITY009, VISPARITY012, VISPARITY014 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/search` | Public | Public search | VISPARITY009, VISPARITY014 | Covered | Existing visual QA seed specs include `/search`; no source issue found | No | In sitemap and SEO index set. |
| `/about` | Public | Static public trust page | VISPARITY009, VISPARITY014 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/our-work` | Public | Public work examples | VISPARITY009, VISPARITY014 | Covered | None found in bounded audit | No | In sitemap and SEO index set. |
| `/privacy` | Public / noindex | Legal | VISPARITY009, VISPARITY014 | Covered | Legal routes remain noindex by SEO policy | No | Required public route; excluded from sitemap. |
| `/terms` | Public / noindex | Legal | VISPARITY009, VISPARITY014 | Covered | Legal routes remain noindex by SEO policy | No | Required public route; excluded from sitemap. |
| `/faq` | Review | Informational | VISPARITY009, VISPARITY014 | Covered | Not in sitemap or public search index | No | VISPARITY014 converted FAQ visual surface. |
| `/funding` | Review | Informational / adjacent | VISPARITY009, VISPARITY014 | Covered | Not in sitemap or public search index | No | VISPARITY014 converted Funding visual surface. |
| `/comparison` | Review | Informational / package context | VISPARITY009, VISPARITY011, VISPARITY014 | Covered | Not in sitemap or current public search index | No | Package/context styling covered by VISPARITY011. |
| `/reliability` | Review | Informational / trust context | VISPARITY009, VISPARITY014 | Covered | Not in sitemap or current public search index | No | No source changes made. |
| `/home-security/whats-included` | Review | Informational | VISPARITY009, VISPARITY014 | Covered | Review/noindex route; not in sitemap | No | Existing SEO policy treats as public review. |
| `/qrlanding` | Review / public campaign | QR campaign | VISPARITY009, VISPARITY014 | Covered | SEO policy keeps noindex; QR attribution remains protected | No | VISPARITY014 converted QR campaign visual selectors. |
| `/qrlanding.htm` | Review / alias | QR campaign alias | VISPARITY009, VISPARITY014 | Covered by alias | Alias canonicalizes to `/qrlanding` | No | No route or QR source behavior changes. |
| `/quote` | Public / transaction noindex | Quote flow | VISPARITY009, VISPARITY012 | Covered as funnel surface | Existing raw inline colors remain in transaction JSX; protected flow scope makes this follow-up only | Yes | Significant cleanup would touch protected quote UI; not safe for VISPARITY015. |
| `/quoteReview` | Transaction noindex | Quote review | VISPARITY009, VISPARITY012 | Covered as funnel surface | Raw inline colors remain in transaction/print-adjacent surfaces | Yes | Protected quote route; no source changes made. |
| `/quotePrint` | Transaction noindex | Quote print | VISPARITY012 | Intentionally out of scope for visual parity cleanup | Print route uses raw print colors intentionally | No | Print readability and browser output are separate route concerns. |
| `/agreementReview` | Transaction noindex | Agreement review | VISPARITY009, VISPARITY012 | Covered as funnel surface | Raw inline colors remain in agreement/print-adjacent surfaces | Yes | Protected agreement route; no source changes made. |
| `/agreementPrint` | Transaction noindex | Agreement print | VISPARITY012 | Intentionally out of scope for visual parity cleanup | Print route uses raw print colors intentionally | No | Print readability and browser output are separate route concerns. |
| `/payment` | Transaction noindex | Payment / deposit | VISPARITY009, VISPARITY012 | Covered as funnel surface | Payment route contains protected payment logic and raw inline colors | Yes | Payment behavior is protected; visual cleanup requires dedicated payment-safe task. |
| `/payment-processing` | Transaction noindex | Payment support | VISPARITY009, VISPARITY012 | Covered as funnel surface | Raw inline colors remain | Yes | Protected payment-adjacent route. |
| `/home-security/pay-deposit` | Transaction noindex | Deposit alias | VISPARITY009, VISPARITY012 | Covered as funnel surface | Payment-adjacent route remains protected | Yes | No source changes made. |
| `/home-security/payment/success` | Transaction noindex | Payment success | VISPARITY009, VISPARITY012 | Covered as funnel surface | Protected route | No | No issue requiring VISPARITY015 fix. |
| `/home-security/payment/canceled` | Transaction noindex | Payment cancel | VISPARITY009, VISPARITY012 | Covered as funnel surface | Protected route | No | No issue requiring VISPARITY015 fix. |
| `/home-security/payment/cancel` | Transaction noindex | Payment cancel alias | VISPARITY009, VISPARITY012 | Covered as funnel surface | Protected route | No | No issue requiring VISPARITY015 fix. |
| `/schedule` | Transaction noindex | Scheduling request | VISPARITY009, VISPARITY012 | Covered as funnel surface | Scheduling authority protected | No | No source changes made. |
| `/agreement` | Review / redirect-like agreement entry | Agreement | VISPARITY009, VISPARITY012 | Covered as funnel surface | Protected agreement path | No | No source changes made. |
| `/esign` | Transaction noindex | Signing-adjacent | VISPARITY012 | Covered as funnel surface | Raw inline colors remain | Yes | Protected route; cleanup needs dedicated task. |
| `/resume` | Transaction / token noindex | Resume token | VISPARITY012 | Covered as funnel surface | Tokenized route | No | Intentionally out of public visual sweep. |
| `/resume-verify` | Transaction / token noindex | Resume verification | VISPARITY012 | Covered as funnel surface | Tokenized route | No | Intentionally out of public visual sweep. |
| `/verify` | Transaction / token noindex | Verification | VISPARITY012 | Covered as funnel surface | Tokenized route | No | Intentionally out of public visual sweep. |
| `/home-security/planner` | Review / tool | Precision Planner | VISPARITY009 | Intentionally out of scope | Planner has complex tool-specific styling and raw colors | Yes | Protected Precision Planner; requires dedicated planner visual task. |
| `/home-security/dashboard` | Review / demo | Dashboard demo | VISPARITY009 | Intentionally out of scope | Dashboard/demo route remains review/noindex | Yes | Dashboard/interactive experience governance remains separate. |
| `/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html` | Review / static demo | Static demo asset | Intentionally out of scope | Not covered by React visual parity tasks | Yes | Static public HTML candidate; requires EXPERIENCE/demo task if retained. |
| `/demo` | Review / demo | Demo | Intentionally out of scope | Legacy/demo visual system with raw chart colors | Yes | Existing SEO policy review route. |
| `/5-day-demo` | Review / demo | Demo | Intentionally out of scope | Legacy/demo visual system with raw chart colors | Yes | Existing SEO policy review route. |
| `/home-security/legacy` | Review | Legacy homepage variant | Intentionally out of scope | Legacy route intentionally not adopted | Yes | Review/noindex legacy route. |
| `/home-security/legacy-premium` | Review | Legacy homepage variant | Intentionally out of scope | Legacy route intentionally not adopted | Yes | Review/noindex legacy route. |
| `/newsite/*` | Non-public / review | Experimental route family | Intentionally out of scope | Protected/review route family | No | Robots/SEO policy classify as prototype/review. |
| `/operator/*` | Non-public | Operator tools | Intentionally out of scope | Protected operational route family | No | Robots blocks `/operator`; not public visual parity scope. |
| `/uat` | Non-public | Test | Intentionally out of scope | Test route | No | Robots blocks `/uat`. |
| `/launchUat` | Non-public / review | Test | Intentionally out of scope | Raw dark surfaces remain | No | Not public WNYHS route. |
| `/certificate` | Non-public / review | Certificate/proof tool | Intentionally out of scope | Raw dark surfaces remain | No | Robots blocks `/certificate`. |
| `/sicar` | Review | Certificate alias | Intentionally out of scope | Raw dark surfaces remain | No | Existing review route. |
| `/health-homes/*` | Review / adjacent | Adjacent vertical | Intentionally out of scope | Raw dark inline colors remain | Yes | Adjacent vertical route family; needs owner decision before WNYHS visual adoption. |
| `/lp/senior` | Review / adjacent campaign | Campaign landing | Intentionally out of scope | Raw dark inline colors remain | Yes | Campaign family outside current WNYHS public route set. |
| `/lp/family` | Review / adjacent campaign | Campaign landing | Intentionally out of scope | Raw dark inline colors remain | Yes | Campaign family outside current WNYHS public route set. |
| `/lp/agency` | Review / adjacent campaign | Campaign landing | Intentionally out of scope | Raw dark inline colors remain | Yes | Campaign family outside current WNYHS public route set. |
| `/elder-care-tech` | Review / adjacent | Adjacent vertical | Intentionally out of scope | Legacy adjacent route | Yes | Needs owner decision before visual adoption. |
| `/elder-care-tech/*` | Review / redirect aliases | Adjacent vertical aliases | Intentionally out of scope | Alias routes | No | No route changes made. |
| `/halo*` and `/halo/*` | Review / legacy | Legacy HALO route family | Intentionally out of scope | Raw dark inline colors remain | Yes | Legacy route family in SEO policy; not current WNYHS public visual adoption scope. |
| `/vendors*` and `/vendors/*` | Review / vendor | Vendor route family | Intentionally out of scope | Raw dark inline colors remain | Yes | Vendor route family needs owner decision. |
| `/never-miss-another-estimate` | Review / business route | Business route | Intentionally out of scope | Raw chart and dark visual system remains | Yes | Not current WNYHS customer route. |
| `/pricing` | Review / business route | Business route | Intentionally out of scope | Raw chart colors remain | Yes | Not current WNYHS customer route. |
| `/partners` | Review / business route | Business route | Intentionally out of scope | Raw chart colors remain | Yes | Not current WNYHS customer route. |
| `/recommend` | Review / runtime-like | Recommendation | Intentionally out of scope | Review route; not sitemap/search | Yes | Needs owner decision before visual adoption. |

## 5. Visual / Token QA Findings

### Covered Current WNYHS Public Surfaces

The current WNYHS public route families are visually accounted for by VISPARITY009 through VISPARITY014:

- shared shell, header, footer, mobile navigation, and page rhythm
- homepage
- canonical category pages and legacy flat category aliases
- route-backed solution pages
- package landing and package details
- Fit Check, contact, and funnel surfaces
- search, about, our work, support, legal, FAQ, funding, and QR campaign surfaces

### Remaining Follow-Up Findings

The bounded audit found no small, safe token issue that should be fixed inside VISPARITY015.

Remaining raw color and dark-surface findings are not safe VISPARITY015 corrections because they are either:

- legacy/review/adjacent route families that need owner decisions before visual adoption
- transaction/payment/scheduling/quote/agreement surfaces with protected behavior boundaries
- print routes where black/white print colors are intentional
- the Precision Planner, which is protected and tool-specific
- static or interactive demo routes requiring dashboard/experience governance
- approved token definitions in `src/styles/wnyhsVisualGovernance.css`

## 6. Site QA Tooling Observation

Existing Playwright Site QA tooling is present:

- `tests/site-qa/routes/public-routes.spec.ts`
- `tests/site-qa/routes/public-route-inventory.spec.ts`
- `tests/site-qa/visual/public-screenshot-evidence.spec.ts`
- `tests/site-qa/visual/public-baseline-candidates.spec.ts`
- `playwright.config.ts`

The existing visual screenshot specs currently cover `/`, canonical category routes, `/about`, `/contact`, `/support`, and `/search`. They do not cover `/our-work`, route-backed solution pages, packages, legal pages, QR campaign pages, or review/demo route families. Expanding screenshot coverage should be a future bounded QA task because VISPARITY015 is audit-first and does not authorize test-source edits.

## 7. Scope Compliance

- One bounded task only: VISPARITY015.
- Route sweep/audit completed.
- Public routes classified.
- No source/style files changed.
- No page copy changed.
- No headings changed.
- No CTA wording changed.
- No links, routes, or destinations changed.
- No production images or public assets changed.
- No form fields, payloads, submit behavior, or validation changed.
- No HubSpot, Stripe/payment, scheduling, Resend/email, runtime/API, Cloudflare, dependency, package-lock, or secret files changed.
- No visible version bump was required because this task made no deployed visual/source/style change.

## 8. Recommended Next Task

Recommended next task from the work order:

`OPS009 - Codex Workflow + RSI Governance Update`

Additional visual QA follow-up candidates:

- `VISPARITY016 - Public Screenshot Coverage Expansion` for route families not currently in screenshot evidence specs.
- `EXPERIENCE001 - Dashboard / Interactive Experience Governance` before demo/dashboard route visual adoption.
- Dedicated protected-route visual-token cleanup tasks for quote/agreement/payment/scheduling surfaces, if operator approves protected-flow-safe visual-only work.
