# VISPARITY006 Public Marketing Page Compliance Plan REV01

Task ID: VISPARITY006
Task Name: Public Marketing Page Compliance Plan
Status: Compliance plan only
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## Boundary

This document is a public marketing page compliance plan only.

It converts VISPARITY001 through VISPARITY005 into page-family and route-by-route planning for later bounded implementation batches.

This task authorizes no implementation.
It makes no route/source/CSS/token/image edits.
It creates no hooks/QA activation.
It performs no protected route cleanup.
It does not approve final visual implementation.
It does not create an Active KAOS Rule.

Allowed output for VISPARITY006 is limited to this plan, the visual-parity README, and the Master Task Register entry.

Protected systems and forbidden implementation surfaces remain untouched:

- HubSpot / CRM
- Stripe/payment
- scheduling/calendar
- Lead Signal and requestId
- QRLanding attribution/runtime behavior
- Resend/email runtime
- Cloudflare configuration
- secrets and environment values
- routes, source files, CSS, tokens, UI components, images/assets, sitemap, robots, dependencies, and package-lock

## Source Inputs

Primary VISPARITY inputs:

- `VISPARITY001_PUBLIC_ROUTE_ELEMENT_DISCOVERY_REV01.md`
- `VISPARITY002_PUBLIC_MARKETING_VISUAL_PARITY_TARGET_MATRIX_REV01.md`
- `VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md`
- `VISPARITY004_CSS_TOKEN_MAPPING_AND_GAP_REGISTER_REV01.md`
- `VISPARITY005_IMAGE_PARITY_AND_ASSET_USAGE_REGISTER_REV01.md`

Targeted governing and owner inputs:

- `docs/codex/CODEX_RUN_CONTRACT.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/governance/CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01.md`
- `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md`
- `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`
- `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`
- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`
- `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`
- `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md`
- `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

Read-only source evidence:

- `src/App.tsx`
- `src/content/wnyhsNavigation.ts`
- `src/components/homeSecurity/WnyhsTopNav.tsx`
- `src/components/homeSecurity/WnyhsSiteFooter.tsx`
- `src/components/homeSecurity/HomeSecurityLanding.tsx`
- `src/pages/CategoryLandingPage.tsx`
- `src/pages/HomeAutomation.tsx`
- `src/pages/SolutionOpportunity.tsx`
- `src/pages/Search.tsx`
- `src/pages/About.tsx`
- `src/pages/OurWork.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Support.tsx`
- `src/pages/QrLanding.tsx`
- `src/pages/Packages.tsx`
- `src/styles/wnyhsVisualGovernance.css`
- `src/styles/homeSecurityPremium.css`
- `src/styles/qrLanding.css`
- `src/styles/canonicalEstimateForm.css`
- `src/index.css`
- `src/newsite/theme/tokens.css`

## Page-family compliance model

| Page family | Required canonical components | Optional canonical components | Disallowed or review-only components | Image roles | Token/compliance dependencies | Accessibility requirements | Current suspected gaps | Future batch |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage / host entry | WNYHS Top Navigation, WNYHS Page Shell, WNYHS Hero Section, WNYHS Section Blocks, WNYHS Feature Cards, WNYHS Core Panel, WNYHS Primary CTA, WNYHS Site Footer | Search access, package preview, selected solution preview, proof/gallery preview | Protected transaction widgets, operator/demo content, unrelated legacy vertical content | WNYHS Hero Image, Category Image, Solution Image, Core Panel Image, Logo Mark | DESIGN002, PAGE_TOKEN_COMPLIANCE_GATE, header/footer standards, VISPARITY004 gaps | no invisible text / no text requiring highlighting; mobile CTA wrapping; focus visible | `/home-security` remains legacy/canonicalized while `/` is canonical; mixed `hs-home`, `hs-premium`, and `wnyhs` vocabulary | Batch 1, Batch 2 |
| Canonical category pages | Top Navigation, Page Shell, Category Hero, Category Image Block, Feature Cards, WNYHS Core Panel, Primary CTA, Site Footer | Reveal pair, dashboard/phone/routine proof, Custom Solutions CTA | Unapproved image replacement, unsupported route cleanup, package-first structure | Category Hero, Reveal, Dashboard Preview, Mobile, Routine, Solution Thumbnail, Core Panel Image | CATEGORY002, CATEGORY003, DESIGN002, VISPARITY004/005 gap IDs | category thumbnails recognizable; dashboard text not required for comprehension; hover/focus/tap reveal usable | Home Automation has reference asset package; other categories reuse homepage/solution assets | Batch 3, Batch 8 |
| Solution pages | Top Navigation, Page Shell, Solution Hero Section, Problem/Solution/Outcome cards, WNY Context, Solution Scenario Block, Next-Step CTA, Footer | WNYHS Core reference if later governed, selected proof card | Unvalidated pricing, package/BOM exposure, fabricated story language | Solution Hero Image, Solution Sample Image, future outcome/hardware/dashboard images if approved | SOLUTION001, SOLUTION_MEDIA001, DESIGN002, VISPARITY005-GAP-007 | image alt text; readable cards; CTA focus; no image-only meaning | Current route-backed solution pages use two-image system; production-ready four-image media remains future | Batch 3, Batch 8 |
| Search | Top Navigation, Page Shell, Search Form Shell, Search Result Card, Alert / Info Block, Primary/Secondary CTA, Footer | Suggested searches, type labels, grouped result sections | Internal data, package IDs as primary objects, protected route results | Usually none; optional image only after approval | SEARCH001, SEO004, DESIGN002, VISPARITY004 form/result-card gaps | accessible input name, result count clarity, keyboard operation, empty state clarity | Search is implemented but uses specialized result-card/form patterns needing parity checks | Batch 6 |
| About | Top Navigation, Page Shell, Page Intro, Section Blocks, Feature/Proof Cards where present, CTA, Footer | Timeline, service-area note, owner/local story if verified | Unrelated vertical copy, fabricated proof or metrics | Usually none; optional brand/proof image only if role-approved | public funnel standards, DESIGN002, PAGE_TOKEN_COMPLIANCE_GATE | heading order, body readability, link affordance | Static trust page needs parity check against current WNYHS primitives | Batch 6 |
| Our Work | Top Navigation, Page Shell, Page Intro, Our Work Gallery Block, Proof Image, CTA, Footer | Category filters or verified story cards | Fake reviews, invented metrics, stronger proof claims without source | Proof Image, Our Work Gallery Image | public funnel standards, VISPARITY005-GAP-008, DESIGN002 | image alt text, caption readability, keyboard access for gallery links/cards | Gallery assets exist with alt text; proof/story authority remains conservative | Batch 6, Batch 8 |
| Contact | Top Navigation, Page Shell, Page Intro, Form Shell, Form Fields, Submit Button, Phone CTA, Footer | Help routing, service area note | Runtime/form behavior changes, payload changes, low-contrast helper/error text | Usually none | PAGE_TOKEN_COMPLIANCE_GATE, canonical estimate form styles, protected Lead Signal/requestId boundary | labels visible; fields readable; focus/error states clear; mobile target size | Form visual styles span WNYHS and estimate-form layers; runtime is protected | Batch 4 |
| Support | Top Navigation, Page Shell, Page Intro, Support Form Shell, Support cards, Phone CTA, Alert / Info Block, Footer | FAQ cards, existing-customer guidance | Runtime/form behavior changes, promise language beyond support posture | Usually none | PAGE_TOKEN_COMPLIANCE_GATE, support form/API boundary | labels visible; status/error readable; form not treated as immediate-service channel | Support form has distinct behavior and status states; visual pass must not change API behavior | Batch 4 |
| Legal pages | Top Navigation or simple public shell, Legal Text Section, Site Footer | Contact/support link | Marketing-heavy CTA clutter, tiny low-contrast fine print | Usually none | SEO004 legal noindex posture, DESIGN002 readable text tokens | constrained measure, heading order, link affordance | Legal pages are simpler but still need WNYHS readable shell parity | Batch 6 |
| QR Landing | QR Campaign Navigation, QR Campaign Block, QR hero, benefit/next-step cards, CTA/contact path, campaign close | Reduced footer, campaign asset reference | Main-site layout forced blindly, QR attribution/source/form edits, campaign destination changes | QR Image, Icon Mark, campaign hero image | QR funnel standards, QR runtime boundary, VISPARITY004-GAP-006, VISPARITY005-GAP-006 | phone-first readability; tap targets; form labels/focus; source behavior preserved | QR uses separate CSS and legacy hero image; must remain campaign-specific | Batch 5 |
| Review-only public demo/planner candidates | Clear review-only classification before visual decisions | Visual audit notes only | Migration, cleanup, promotion, route deletion, source changes without separate task | Demo/dashboard images only after experience governance | SITEARCH002 demo/experience decision, SEO004 noindex/review posture | classify before any accessibility pass becomes implementation | Planner, dashboard, `/demo`, `/5-day-demo`, `/newsite/*`, and static demo candidates need ownership classification | Batch 7 |

## Required / optional / disallowed element matrix

| Page family | Required | Optional | Disallowed / review-only | Image required/optional | Token dependencies | Accessibility requirements | Current suspected gaps | Implementation batch candidate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage / host entry | Top Navigation; Hero; category path; Core Panel; final CTA; Footer | Search access; package preview; selected solution preview; proof preview | Protected route widgets; operator/prototype content | Required hero/Core/category/solution roles where already used; optional proof preview | `--wnyhs-*` primitives; old `hs-*` aliases mapped as evidence | no invisible text; focus visible; mobile wrapping | route role conflict and mixed style vocabularies | 1, 2 |
| Canonical category pages | Category hero; reveal/awareness section; featured solution cards; Core; global CTA | Routine proof; Custom Solutions CTA | unapproved category asset replacement | Required category role package in future; current reuse documented | CATEGORY002/003 plus DESIGN002 | image recognition at small sizes; reveal usable without hover-only dependence | uneven category image packages | 3, 8 |
| Solution pages | Solution hero; Who This Helps; Problem/Solution/Outcome; WNY context; possible pieces; scenario; next step | Related proof or Core reference | BOM/cost/pricing exposure; unsupported capability claims | Required current hero/sample; future four-image readiness remains separate | SOLUTION001/SOLUTION_MEDIA001 | alt text; readable scenario; CTA focus | two-image current state vs four-image future standard | 3, 8 |
| Search | Search form; result cards; empty state; support/contact path | suggested searches; type labels | internal/protected results; package IDs as primary objects | Optional none | SEARCH001 plus card/form tokens | input label; result count; keyboard navigation | specialized result cards need visual QA | 6 |
| About | Intro; local trust content; CTA/contact path; footer | timeline or service-area note | fabricated proof or unrelated vertical copy | Optional brand/proof image only if approved | public content + visual tokens | heading order; readable body | static page parity unknown | 6 |
| Our Work | Gallery/proof block; safe captions; CTA | verified story cards | fake reviews, fake metrics, stronger proof than source | Required proof/gallery alt posture if images are present | VISPARITY005 proof gap | captions and alt text | proof/story source status open | 6, 8 |
| Contact | Contact/estimate form; direct call/text path; footer | help routing | runtime/payload changes | Optional none | form/control/action/status tokens | label/focus/error readability | conversion form visual/runtime coupling risk | 4 |
| Support | Support form; FAQ/help cards; phone/text path; footer | existing-customer expansion path | runtime/API changes | Optional none | form/control/status tokens | form status readable; no low-contrast helpers | status and support form style divergence | 4 |
| Legal pages | legal title; legal sections; footer | support/contact link | marketing-heavy panels | Optional none | legal text/link tokens | readable measure; visible links | legal token mapping incomplete | 6 |
| QR Landing | QR campaign nav; campaign hero; benefit/next-step blocks; contact path | reduced footer | source/payload/form changes; main-site nav forced in | Required QR/campaign role if image present | QR/campaign and form tokens | phone-first; form focus; CTA tap size | QR CSS divergence | 5 |
| Review-only demos/planners | classification note | audit notes | route cleanup, promotion, migration | review-only | review/demo tokens only after classification | classify before changes | ownership unresolved | 7 |

## Route-by-route compliance planning table

Status values are planning labels only: `compliant candidate`, `partial`, `review-only`, `unknown`, or `out-of-scope`.

| Route | Page family | Current status | Required canonical components | Known visual gaps | Known token gaps | Known image gaps | Accessibility/readability risks | Recommended action | Batch |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Homepage / host entry | partial | Page Shell, homepage redirect/entry handling, SEO metadata | Host entry currently delegates WNYHS host to `/home-security` | homepage/canonical route role not visual-token resolved | depends on homepage image roles | route expectation confusion | plan visual parity with `/home-security` before homepage route cleanup | 1 |
| `/home-security` | Homepage / host entry / legacy category | partial | Top Nav, Hero, category cards, Core, CTA, Footer | homepage/category role conflict; mixed `hs-home`/`hs-premium`/`wnyhs` surfaces | VISPARITY004-GAP-001/002/005 | multi-role category/Core assets | dark panel and muted copy readability | treat as highest-risk homepage parity candidate, no route cleanup here | 1 |
| `/categories/home-security` | Canonical category | partial | Category Hero, reveal, featured solutions, Core, CTA | shares HomeSecurity owner; may inherit homepage structure | category/page shell mapping incomplete | reuses homepage assets for many roles | image role ambiguity | include in category parity batch after homepage readability triage | 3 |
| `/categories/home-automation` | Canonical category | compliant candidate | Category page structure, Home Automation reference assets, Core, CTA | reference page still needs final route-family parity check | local/category styles must map to tokens | full reference package exists | reveal hover/focus and mobile behavior | use as category reference, do not alter assets in planning task | 3 |
| `/categories/home-safety` | Canonical category | partial | shared category structure, Core, solution cards | category-specific media uneven | category cards/Core token mapping incomplete | reuses environmental/homepage and solution images | thumbnail/dashboard legibility | plan category/image parity remediation | 3, 8 |
| `/categories/home-lighting` | Canonical category | partial | shared category structure, Core, solution cards | routine thumbnails partly borrowed | category cards/Core token mapping incomplete | missing full lighting asset package | small thumbnail clarity | plan category/image parity remediation | 3, 8 |
| `/categories/aging-in-place` | Canonical category | partial | shared category structure, Core, solution cards | category-specific support image set incomplete | category cards/Core token mapping incomplete | reuses homepage and solution sample images | sensitive copy/image posture and alt text | plan category/image parity remediation | 3, 8 |
| `/home-automation` | Legacy flat category | review-only | same as canonical category if retained as alias | legacy route posture separate from visual target | same as canonical | same as canonical | duplicate-route confusion | keep as legacy alias/review posture; no cleanup | 7 |
| `/home-safety` | Legacy flat category | review-only | same as canonical category if retained as alias | legacy naming vs Home Safety/Environmental Safety governance | same as canonical | same as canonical | route-name clarity | keep as legacy alias/review posture; no cleanup | 7 |
| `/home-lighting` | Legacy flat category | review-only | same as canonical category if retained as alias | legacy flat route | same as canonical | same as canonical | duplicate-route confusion | keep as legacy alias/review posture; no cleanup | 7 |
| `/aging-in-place` | Legacy flat category | review-only | same as canonical category if retained as alias | legacy flat route | same as canonical | same as canonical | duplicate-route confusion | keep as legacy alias/review posture; no cleanup | 7 |
| `/solutions/senior-safety` | Solution pages | partial | Solution Hero, problem/setup/outcome, scenario, CTA, Footer | needs route-family parity check | solution/card/CTA token mapping | current hero/sample only | image alt/readability and card focus | include in solution parity batch | 3, 8 |
| `/solutions/water-protection` | Solution pages | partial | Solution Hero, problem/setup/outcome, scenario, CTA, Footer | needs route-family parity check | solution/card/CTA token mapping | current hero/sample only | no prevention overstatement; image readability | include in solution parity batch | 3, 8 |
| `/solutions/family-awareness` | Solution pages | partial | Solution Hero, problem/setup/outcome, scenario, CTA, Footer | needs route-family parity check | solution/card/CTA token mapping | current hero/sample reused elsewhere | image role ambiguity | include in solution parity batch | 3, 8 |
| `/solutions/vacation-homes` | Solution pages | partial | Solution Hero, problem/setup/outcome, scenario, CTA, Footer | needs route-family parity check | solution/card/CTA token mapping | current hero/sample reused across listings | image role ambiguity | include in solution parity batch | 3, 8 |
| `/search` | Search | partial | Search Form, result cards, empty state, Footer | specialized search UI needs parity check | search result/card/form tokens | usually none | result count, focus, mobile wrapping | include in search/proof/legal cleanup batch | 6 |
| `/about` | About | unknown | Page Intro, section blocks, CTA, Footer | static page parity not fully assessed | legal/static page text tokens | optional none | body readability | audit and align in cleanup batch | 6 |
| `/our-work` | Our Work | partial | Gallery/proof block, captions, CTA, Footer | proof/gallery visual consistency needs review | gallery/card/caption tokens | gallery proof images need role manifest | captions and proof posture | keep claims-safe; plan proof/gallery pass | 6, 8 |
| `/contact` | Contact | partial | Contact hero/intro, estimate form, direct CTA, Footer | form-heavy page requires readability triage | form/control/status/action tokens | usually none | label, helper, error, submit focus | batch with support/forms; no runtime edits | 4 |
| `/support` | Support | partial | Support intro, support form, FAQ cards, direct CTA, Footer | form/status/card parity needs review | support form/status tokens | usually none | status messages and helper copy readability | batch with contact/forms; no API edits | 4 |
| `/privacy` | Legal pages | partial | Legal Text Section, Footer | simple legal shell parity unknown | legal text/link tokens | none | fine print/link visibility | cleanup with legal/static pages | 6 |
| `/terms` | Legal pages | partial | Legal Text Section, Footer | simple legal shell parity unknown | legal text/link tokens | none | fine print/link visibility | cleanup with legal/static pages | 6 |
| `/packages` | Review-only packages / solution listing | review-only | Package Tier Block, solution cards, Core, Vault, CTA if later scoped | package/review posture and visual vocabulary mixed | package/vault/Core token gaps | package/Core/solution image role reuse | caveat/status readability | keep review-only; include only if future batch explicitly scopes proof/search/legal cleanup | 6 |
| `/packages/:id` | Review-only package detail | review-only | Package Tier Block if later scoped | package detail parity not target by default | package token gaps | package/tier image uncertainty | price/status/caveat readability | separate package task required before implementation | 7 |
| `/discovery` | Fit Check / conversion | out-of-scope | protected form/funnel components if later scoped | conversion form parity outside public marketing batch | form/runtime boundary | none | intake form readability | exclude from VISPARITY006 implementation batches unless future task expands scope | none |
| `/fit-check` | Redirect alias | out-of-scope | none | redirect only | none | none | none | protected funnel alias; no visual work | none |
| `/estimate` | Redirect alias | out-of-scope | none | redirect only | none | none | none | protected conversion alias; no visual work | none |
| `/qrlanding` | QR Landing | partial | QR Campaign Navigation, QR Campaign Block, QR form/contact path, campaign close | QR CSS differs from WNYHS primitives | QR/campaign/form token gaps | legacy hero and QR/print split | phone-first form and CTA readability | run QR-specific visual parity batch preserving runtime/source behavior | 5 |
| `/qrlanding.htm` | QR Landing alias | review-only | same as `/qrlanding` if rendered | alias only | same as QR | same as QR | alias behavior | keep alias; no route cleanup | 5 |
| `/home-security/whats-included` | Review-only public information | review-only | Page Intro, Legal/Info blocks if later classified | review route not parity target by default | review/demo tokens | unknown | readability unknown | classify before visual work | 7 |
| `/home-security/dashboard` | Review-only demo/dashboard | review-only | Dashboard Preview Block if later classified | demo ownership unresolved | dashboard/demo token gaps | dashboard image role unknown | UI preview legibility | classify as demo/experience before changes | 7 |
| `/home-security/planner` | Review-only planner | review-only | Planner-specific components if later scoped | protected Precision Planner route | planner styles outside marketing scope | unknown | tool accessibility outside scope | preserve; no visual cleanup without planner task | 7 |
| `/home-security/legacy` | Legacy WNYHS route | review-only | none unless classified | legacy surface | legacy token drift | legacy image pack | unknown | classify before changes | 7 |
| `/home-security/legacy-premium` | Legacy WNYHS route | review-only | none unless classified | legacy premium surface | legacy token drift | legacy image pack | unknown | classify before changes | 7 |
| `/demo` | Review-only demo/business | review-only | none unless classified | legacy/business demo leakage risk | legacy/prototype tokens | unknown | unknown | classify before changes | 7 |
| `/5-day-demo` | Review-only demo/business | review-only | none unless classified | legacy/business demo leakage risk | legacy/prototype tokens | unknown | unknown | classify before changes | 7 |
| `/newsite/demos/ha-gold-dashboard` | Prototype/demo | review-only | Demo/Experience components if later classified | prototype route | `ns-*` token vocabulary | demo assets | prototype accessibility unknown | classify before any public parity work | 7 |
| `/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html` | Static demo candidate | review-only | Demo/Experience components if later classified | static file outside React SEO policy | static/prototype styling | demo assets | unknown | classify before linking or cleanup | 7 |
| `/quote`, `/quoteReview`, `/quotePrint` | Protected quote/print | out-of-scope | none for this plan | protected transaction/review/print surfaces | protected flow | none | protected flow risk | separate protected-flow task only | none |
| `/agreement`, `/agreementReview`, `/agreementPrint` | Protected agreement/print | out-of-scope | none for this plan | protected transaction/review/print surfaces | protected flow | none | protected flow risk | separate protected-flow task only | none |
| `/payment`, `/payment-processing`, `/home-security/pay-deposit`, `/home-security/payment/success`, `/home-security/payment/canceled`, `/home-security/payment/cancel` | Protected payment | out-of-scope | none for this plan | protected payment/status surfaces | protected payment flow | none | payment authority risk | no visual work without payment task | none |
| `/schedule` | Protected schedule | out-of-scope | none for this plan | protected scheduling surface | protected scheduling flow | none | scheduling authority risk | no visual work without scheduling task | none |
| `/resume`, `/resume-verify`, `/verify` | Protected token/system | out-of-scope | none for this plan | protected token/system surfaces | protected system | none | token/security risk | no visual work without protected-system task | none |
| `/operator/*`, `/uat`, `/launchUat`, `/certificate`, `/sicar` | Internal/system | out-of-scope | none | not public marketing | internal/protected tokens | none | internal route exposure risk | preserve; no parity work | none |
| `/newsite/*` | Prototype/system | review-only | none unless classified | prototype vocabulary and public reachability | `ns-*` tokens | demo/prototype assets | unknown | classify before cleanup | 7 |
| `/halo*`, `/vendors*`, `/health-homes*`, `/lp/*`, `/pricing`, `/partners`, `/never-miss-another-estimate`, `/elder-care-tech*` | Legacy non-WNYHS vertical/business | out-of-scope | none | legacy vertical/business surfaces | legacy tokens | unknown | WNYHS brand leakage risk if exposed | exclude; separate legacy route task required | none |

## Protected/out-of-scope route handling

Protected routes are not public marketing visual parity targets in this plan.

Clearly separated protected route groups:

- quote, quoteReview, quotePrint
- agreement, agreementReview, agreementPrint
- payment, payment-processing, pay-deposit, payment success/cancel/canceled
- schedule
- resume, resume-verify, verify
- operator, admin, internal, UAT, certificate, prototype, system routes

Legacy non-WNYHS vertical/business routes are excluded from VISPARITY006 implementation planning:

- Halo route families
- vendor route families
- health-homes route families
- legacy landing pages under `/lp/*`
- business/demo/pricing/partners pages
- elder-care-tech route family

Review-only public demos/planners are not approved for migration, cleanup, promotion, or deletion:

- `/home-security/planner`
- `/home-security/dashboard`
- `/home-security/whats-included`
- `/demo`
- `/5-day-demo`
- `/newsite/demos/ha-gold-dashboard`
- static HA Gold dashboard demo file

Any future work on these groups requires a separate bounded task with explicit allowed files and protected-system boundaries.

## Implementation batch plan

These are proposed future batches only. They do not authorize implementation.

| Batch | Purpose | Candidate routes/surfaces | Primary risks | Required evidence before implementation |
| --- | --- | --- | --- | --- |
| Batch 1 | Highest-risk readability and CTA parity fixes | `/`, `/home-security`, homepage-equivalent surfaces | invisible/low-contrast text; CTA inconsistency; mobile wrapping | screenshot evidence; VISPARITY003 component names; VISPARITY004 token gaps |
| Batch 2 | Nav/footer/page shell and shared primitives | WNYHS Top Navigation, Site Footer, Page Shell across public marketing routes | route/link drift; duplicate footer; mobile drawer focus | header/footer standards; SITEARCH002 navigation decisions; no route changes unless scoped |
| Batch 3 | Category/solution parity | canonical `/categories/*`; four `/solutions/*` | uneven category assets; solution media readiness; card/hero drift | CATEGORY002/003; SOLUTION001/SOLUTION_MEDIA001; VISPARITY005 role/gap IDs |
| Batch 4 | Contact/support/forms | `/contact`, `/support` | form readability; focus/error states; accidental runtime/API changes | form visual scope separated from payload/API behavior; screenshot evidence |
| Batch 5 | QR landing parity | `/qrlanding`, `/qrlanding.htm` | QR source/form behavior; campaign nav; phone-first layout | QR funnel standards; QR runtime boundary; screenshot evidence |
| Batch 6 | Proof/gallery/search/legal cleanup | `/our-work`, `/search`, `/about`, `/privacy`, `/terms`, package review surfaces if scoped | proof posture; result-card readability; legal text readability; package review confusion | SEARCH001; SEO004; proof/image role decisions; no sitemap/robots edits unless scoped |
| Batch 7 | Review-only demo/planner classification | planner, dashboard, demo, newsite, static demo candidates | accidental public promotion or route deletion | SITEARCH002 demo/experience ownership decision; no implementation unless separately approved |
| Batch 8 | Image asset production/replacement if approved | category packages, solution media, proof/gallery, QR campaign images | asset role ambiguity; alt text; filename/path churn | VISPARITY005 role/gap IDs, image manifest, operator approval, source/reference validation |

## Acceptance criteria for future implementation tasks

Every later VISPARITY implementation task should include these acceptance criteria where relevant:

- no invisible text / no text requiring highlighting to read
- CSS values must use approved semantic tokens where available
- canonical component names from VISPARITY003 must be referenced in task summaries
- image changes must reference VISPARITY005 role/gap IDs
- public claims guardrails must remain intact
- protected systems untouched unless explicitly authorized
- build passes
- visual screenshot evidence required for changed public routes
- no source/runtime/UI files outside the bounded task scope
- no CSS/tokens/images/routes changed unless explicitly allowed by the future task
- no hook or QA implementation unless explicitly authorized
- no final visual implementation approved without route-specific review

## Future QA/hook/eval candidates

Candidates only. No QA, hook, eval, or enforcement is activated by this document.

| Candidate | Purpose | Future trigger |
| --- | --- | --- |
| visual token compliance eval | Detect public page surfaces that bypass approved semantic tokens | After at least one implementation batch proves the expected token mapping |
| contrast/readability eval | Detect text that fails readability expectations or needs highlighting | After screenshot workflow and route list are approved |
| image role/alt-text eval | Check image role mapping and accessible alt posture | After repo-local image manifest exists |
| page-family required-component eval | Confirm required page-family components are present | After VISPARITY007 reference spec defines expected examples |
| hardcoded color hook candidate | Flag new raw colors in public visual surfaces | After token exception policy is defined |
| missing canonical component reference hook candidate | Flag implementation tasks that do not name VISPARITY003 components | After task-summary convention is accepted |
| visual screenshot diff candidate | Compare changed public routes before/after | After baseline screenshot storage and review flow are approved |

## Recommended next task

Recommended next task:

`VISPARITY007 - Kitchen-Sink Visual QA Reference Page Spec`

VISPARITY007 should define a docs-only reference page/specification for future visual QA examples across canonical components, token states, image roles, form states, QR/campaign variants, legal/review variants, and accessibility states. It should not implement the page, create routes, create hooks, create QA checks, edit CSS, edit tokens, or change assets unless a future bounded task explicitly authorizes implementation.

## Scope compliance

VISPARITY006 creates a public marketing page compliance plan only.

It includes:

- Boundary
- Page-family compliance model
- Required / optional / disallowed element matrix
- Route-by-route compliance planning table
- Protected/out-of-scope route handling
- Implementation batch plan
- Acceptance criteria for future implementation tasks
- Future QA/hook/eval candidates
- Recommended next task

It does not:

- edit source code
- edit route files
- edit CSS
- edit tokens
- edit UI components
- edit images or assets
- edit sitemap or robots
- edit runtime/API files
- edit HubSpot behavior
- edit Stripe/payment behavior
- edit scheduling
- edit Cloudflare config
- edit dependencies or package-lock
- create Playwright tests
- create hooks
- create QA checks
- approve final visual implementation
- activate any KAOS rule
- merge
