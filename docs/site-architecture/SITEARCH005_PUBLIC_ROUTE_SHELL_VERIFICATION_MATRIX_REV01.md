# SITEARCH005 Public Route Shell Verification Matrix REV01

## 1. Purpose

This document records the NAV003 public route shell verification matrix for the operator-supplied NAV lane route list after NAV002 / PR #464.

This is an audit and documentation artifact only. It does not authorize route migration, route deletion, redirects, navigation changes, footer changes, page redesign, public copy changes, protected runtime changes, or legacy cleanup.

## 2. Authority

Controlling task: `NAV003 - Public Route Shell Verification Matrix`.

Current operational context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.

Primary authority and source documents:

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`
- `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`
- `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`
- `src/App.tsx`
- `src/components/Layout.tsx`
- `src/components/RouteTransitionManager.tsx`
- WNYHS public shell components under `src/components/homeSecurity/`
- Route owner pages needed to classify shell behavior

If this document conflicts with higher-authority repository governance, the higher-authority source controls.

## 3. Audit Scope And Method

The audit reviewed 118 public React route patterns declared in `src/App.tsx`, excluding the four `/operator` routes from shell scoring because they are internal operator routes rather than public-route shell targets. The audit also reviewed the static dashboard HTML noted in `SITEARCH001` as a separate public file candidate.

Shell evidence reviewed:

- `Layout.tsx` suppresses the generic footer for WNYHS marketing shell routes and for `/newsite`.
- `DefaultLayout.tsx` supplies only the route outlet and optional breadcrumb; it does not inject the WNYHS public shell.
- `WnyhsMarketingLayout.tsx` renders `WnyhsTopNav`, page content, and `WnyhsSiteFooter`.
- `WnyhsFunnelLayout.tsx` renders `WnyhsTopNav`, optional funnel step rail, page content, and `WnyhsSiteFooter`.
- `QrLanding.tsx` now renders `WnyhsTopNav` with the reduced QR navigation set and `WnyhsSiteFooter`.
- `RouteTransitionManager.tsx` resets scroll on pathname/search changes and intentionally skips hash-bearing routes.
- `NewSiteLayout.tsx` renders a separate `newsite-nav` / `newsite-footer` prototype shell.
- Legacy route families use mixed legacy, generic, or family-specific shells and are classified separately from WNYHS public shell failures.

## 4. Status Summary

| Status | Route patterns |
| --- | ---: |
| PASS | 42 |
| FOLLOW-UP | 10 |
| EXCEPTION CANDIDATE | 10 |
| LEGACY | 56 |
| Total reviewed | 118 |

Definitions:

- `PASS`: route currently renders inside the standard WNYHS public shell with top nav, page content, and footer, or is a canonical route using the same shell owner.
- `FOLLOW-UP`: current WNYHS/system route renders without the standard WNYHS public shell and should be reviewed by a later bounded task.
- `EXCEPTION CANDIDATE`: route intentionally redirects, aliases, prints, resumes, or anchors instead of rendering a normal public shell; retain or formalize the exception through later route governance.
- `LEGACY`: non-WNYHS, prototype, old brand, old vertical, business-demo, or family-specific route. These are not counted as WNYHS shell failures.

## 5. Public Route Shell Matrix

| Route | Route family | Component/page owner | Standard top nav present | Standard footer present | Embedded duplicate nav present | Scroll-to-top covered by NAV002 | Hash-anchor exception | Shell status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Core WNYHS public | `HomeSecurity` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Current root route renders WNYHS home content inside the standard marketing shell. |
| `/home-security` | Legacy flat category / WNYHS home history | `HomeSecurity` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Still a legacy flat route by architecture governance, but shell is standard. |
| `/packages` | Packages | `Packages` via `WnyhsMarketingLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Standard WNYHS shell for the current public package page. |
| `/packages/:id` | Package detail | `PackageDetail` via WNYHS shell for home-security package detail | yes | yes | no | yes | no | PASS | Dynamic route owner uses WNYHS shell for the current home-security package detail path. |
| `/comparison` | Public information | `Comparison` via `WnyhsMarketingLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Shell is standard when entered as a WNYHS route. |
| `/reliability` | Public information | `Reliability` via `WnyhsMarketingLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Shell is standard when entered as a WNYHS route. |
| `/contact` | Estimate/contact | `Contact` via `WnyhsMarketingLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Current estimate target uses the WNYHS shell. |
| `/about` | Public information | `About` via `WnyhsMarketingLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Standard shell when entered with home-security context. |
| `/our-work` | Public proof/trust | `OurWork` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Standard shell. |
| `/support` | Support | `Support` via `WnyhsMarketingLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Standard shell when entered as WNYHS support. |
| `/privacy` | Legal | `Privacy` via `WnyhsMarketingLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Standard shell when entered from WNYHS footer. |
| `/terms` | Legal | `Terms` via `WnyhsMarketingLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Standard shell when entered from WNYHS footer. |
| `/search` | Search placeholder route | `Search` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Route exists and uses the WNYHS public shell; functional search remains separate governance. |
| `/discovery` | Fit-check / discovery | `Discovery` via `WnyhsFunnelLayout` | yes | yes | no | yes | no | PASS | Standard WNYHS funnel shell. |
| `/quote` | Quote workflow | `Quote` via `WnyhsFunnelLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Protected flow route; shell is standard for home-security flow. |
| `/quoteReview` | Quote workflow | `QuoteReview` via `WnyhsFunnelLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Protected flow route; shell is standard for home-security flow. |
| `/agreementReview` | Agreement workflow | `AgreementReview` via `WnyhsFunnelLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Protected flow route; shell is standard for home-security flow. |
| `/payment` | Payment workflow | `Payment` via `WnyhsFunnelLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Protected payment route; shell is standard for home-security flow. |
| `/home-security/pay-deposit` | Payment workflow | `HomeSecurityPayDeposit` via `WnyhsFunnelLayout` | yes | yes | no | yes | no | PASS | Standard funnel shell. |
| `/home-security/payment/success` | Payment status | `HomeSecurityPaymentSuccess` via `WnyhsFunnelLayout` | yes | yes | no | yes | no | PASS | Standard funnel shell; payment authority remains webhook/server-side outside this audit. |
| `/home-security/payment/canceled` | Payment status | `HomeSecurityPaymentCanceled` via `WnyhsFunnelLayout` | yes | yes | no | yes | no | PASS | Standard funnel shell. |
| `/home-security/payment/cancel` | Payment status alias | `HomeSecurityPaymentCancel` via `WnyhsFunnelLayout` | yes | yes | no | yes | no | PASS | Standard funnel shell. |
| `/schedule` | Schedule workflow | `Schedule` via `WnyhsFunnelLayout` when home-security context applies | yes | yes | no | yes | no | PASS | Protected flow route; shell is standard for home-security flow. |
| `/home-security/planner` | Planner tool | `HomeSecurityPlanner` via `WnyhsFunnelLayout` | yes | yes | no | yes | no | PASS | Protected planner remains intact; shell is standard. |
| `/home-security/dashboard` | WNYHS dashboard/demo-like surface | `HomeSecurityDashboard` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Shell is standard; public/demo ownership remains a separate SITEARCH decision. |
| `/home-security/whats-included` | Public information | `HomeSecurityWhatsIncluded` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Standard shell. |
| `/home-automation` | Legacy flat category | `HomeAutomation` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Standard shell; route remains a legacy flat alias candidate per SITEARCH004. |
| `/aging-in-place` | Legacy flat category | `AgingInPlace` / `CategoryLandingPage` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Standard shell; route remains a legacy flat alias candidate. |
| `/home-safety` | Legacy flat category | `HomeSafety` / `CategoryLandingPage` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Standard shell; route remains a legacy flat alias candidate. |
| `/home-lighting` | Legacy flat category | `HomeLighting` / `CategoryLandingPage` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Standard shell; route remains a legacy flat alias candidate. |
| `/categories/home-security` | Canonical category | `HomeSecurity` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Canonical category route renders standard shell. |
| `/categories/home-automation` | Canonical category | `HomeAutomation` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Canonical category route renders standard shell. |
| `/categories/home-safety` | Canonical category | `HomeSafety` / `CategoryLandingPage` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Canonical category route renders standard shell. |
| `/categories/home-lighting` | Canonical category | `HomeLighting` / `CategoryLandingPage` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Canonical category route renders standard shell. |
| `/categories/aging-in-place` | Canonical category | `AgingInPlace` / `CategoryLandingPage` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Canonical category route renders standard shell. |
| `/solutions/senior-safety` | Solution detail | `SolutionOpportunity` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Standard solution shell. |
| `/solutions/water-protection` | Solution detail | `SolutionOpportunity` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Standard solution shell. |
| `/solutions/family-awareness` | Solution detail | `SolutionOpportunity` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Standard solution shell. |
| `/solutions/vacation-homes` | Solution detail | `SolutionOpportunity` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | PASS | Standard solution shell. |
| `/qrlanding` | QR campaign | `QrLanding` with `WnyhsTopNav` + `WnyhsSiteFooter` | yes | yes | no | yes | no | PASS | NAV002 corrected QR landing to the standard WNYHS shell with reduced QR nav. |
| `/home-security/legacy` | Legacy WNYHS page | `HomeSecurityLegacy` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | LEGACY | Shell is standard, but route/page is explicitly legacy and should not be mixed with current WNYHS shell failures. |
| `/home-security/legacy-premium` | Legacy WNYHS page | `HomeSecurityLegacyPremium` via `WnyhsMarketingLayout` | yes | yes | no | yes | no | LEGACY | Shell is standard, but route/page is explicitly legacy. |
| `/fit-check` | Alias | `Navigate` to `/discovery?vertical=home-security` | no | no | no | yes | no | EXCEPTION CANDIDATE | Redirect-only route; no shell is rendered before destination. |
| `/estimate` | Alias | `Navigate` to `/contact?vertical=home-security` | no | no | no | yes | no | EXCEPTION CANDIDATE | Redirect-only route; no shell is rendered before destination. |
| `/agreement` | Alias | `Agreement` redirects to `/agreementReview` | no | no | no | yes | no | EXCEPTION CANDIDATE | Redirect-only workflow route. |
| `/home-security/packages` | Alias | `Navigate` to `/packages?vertical=home-security` | no | no | no | yes | no | EXCEPTION CANDIDATE | Redirect-only category/package alias. |
| `/home-security/add-ons` | Alias | `Navigate` to `/quote?vertical=home-security#addons` | no | no | no | exception | yes | EXCEPTION CANDIDATE | Hash-bearing redirect destination is intentionally outside NAV002 scroll reset. |
| `/home-security/how-it-works` | Alias | `Navigate` to `/reliability?vertical=home-security` | no | no | no | yes | no | EXCEPTION CANDIDATE | Redirect-only public information alias. |
| `/home-automation/packages` | Alias | `Navigate` to `/packages` | no | no | no | yes | no | EXCEPTION CANDIDATE | Redirect-only legacy flat category package alias. |
| `/home-automation/add-ons` | Alias | `Navigate` to `/quote#addons` | no | no | no | exception | yes | EXCEPTION CANDIDATE | Hash-bearing redirect destination is intentionally outside NAV002 scroll reset. |
| `/home-automation/how-it-works` | Alias | `Navigate` to `/reliability` | no | no | no | yes | no | EXCEPTION CANDIDATE | Redirect-only legacy flat category information alias. |
| `/qrlanding.htm` | QR alias | `QrLandingAlias` redirects to `/qrlanding` | no | no | no | yes | no | EXCEPTION CANDIDATE | Alias preserved for older/static QR compatibility; destination shell passes. |
| `/funding` | Public information / older route | `Funding` through `DefaultLayout` | no | generic footer only | no | yes | no | FOLLOW-UP | WNYHS public shell not currently evident; classify as follow-up, not a NAV003 migration. |
| `/faq` | Public information / older route | `FAQ` through `DefaultLayout` | no | generic footer only | no | yes | no | FOLLOW-UP | WNYHS public shell not currently evident. |
| `/recommend` | Recommender/system | `Recommendation` through `DefaultLayout` | no | generic footer only | no | yes | no | FOLLOW-UP | Generic container/card route, not the standard WNYHS public shell. |
| `/quotePrint` | Print route | `QuotePrint` print-focused route | no | no | no | yes | no | FOLLOW-UP | Print route likely needs an explicit shell exception decision rather than migration by NAV003. |
| `/agreementPrint` | Print route | `AgreementPrint` print-focused route | no | no | no | yes | no | FOLLOW-UP | Print route likely needs an explicit shell exception decision rather than migration by NAV003. |
| `/esign` | Transaction/system | `ESign` through `DefaultLayout` | no | generic footer only | no | yes | no | FOLLOW-UP | Generic shell and older placeholder language; protected flow changes are out of scope here. |
| `/payment-processing` | Payment/system | `PaymentProcessing` through `DefaultLayout` | no | generic footer only | no | yes | no | FOLLOW-UP | Payment-adjacent route; document only, no Stripe changes. |
| `/resume` | Resume/system | `Resume` through `DefaultLayout` | no | generic footer only | no | yes | no | FOLLOW-UP | Resume redirect/status route lacks standard WNYHS shell when it renders an error/status state. |
| `/resume-verify` | Resume/system | `ResumeVerify` through `DefaultLayout` | unknown | unknown | unknown | yes | no | FOLLOW-UP | Needs separate owner review; included because it is public-reachable. |
| `/verify` | Verification/system | `Verify` through `DefaultLayout` | no | generic footer only | no | yes | no | FOLLOW-UP | Document verification route lacks standard WNYHS shell; may be intentional system exception. |
| `/halo-splash` | Legacy alternate splash | `Home` through `DefaultLayout` | no | generic footer only | unknown | yes | no | LEGACY | Legacy/alternate splash; not a current WNYHS shell failure. |
| `/uat` | System/internal-like | `UAT` through `DefaultLayout` | no | generic footer only | unknown | yes | no | LEGACY | Public-reachable system route; separate system-route exposure review needed. |
| `/launchUat` | System/internal-like | `LaunchUAT` through `DefaultLayout` | no | generic footer only | unknown | yes | no | LEGACY | Public-reachable system route; separate system-route exposure review needed. |
| `/sicar` | Certificate/system | `Certificate` through `DefaultLayout` | no | generic footer only | unknown | yes | no | LEGACY | System/certificate route; not a WNYHS public shell target without separate governance. |
| `/certificate` | Certificate/system | `Certificate` through `DefaultLayout` | no | generic footer only | unknown | yes | no | LEGACY | System/certificate route; not a WNYHS public shell target without separate governance. |
| `/health-homes`, `/health-homes/outcomes`, `/health-homes/funding`, `/health-homes/packages`, `/health-homes/pilot`, `/health-homes/operations`, `/health-homes/intake`, `/health-homes/packet` | Legacy vertical | `HealthHomes*` pages through `DefaultLayout` | no | mixed/generic/print | unknown | yes | no | LEGACY | Legacy vertical family must be treated separately from WNYHS shell failures. |
| `/lp/senior`, `/lp/family`, `/lp/agency` | Legacy campaign landing | `SeniorLanding`, `FamilyLanding`, `AgencyLanding` | no | generic footer only | unknown | yes | no | LEGACY | Legacy landing family. |
| `/halo`, `/halo/setup`, `/halo/support`, `/halo/privacy`, `/halo/terms`, `/halo/checkout`, `/halo-pushbutton`, `/halo-package` | Legacy product family | `Halo*` pages | no | family/generic | unknown | yes | no | LEGACY | Halo route family has separate legacy/product shell behavior. |
| `/vendors`, `/vendors/standards`, `/vendors/evaluation-toolkit`, `/vendors/questionnaire`, `/vendors/apply` | Legacy business/vendor family | `Vendor*` pages | no | generic/family | unknown | yes | no | LEGACY | Vendor/business route family has separate legacy ownership. |
| `/never-miss-another-estimate`, `/demo`, `/pricing`, `/5-day-demo`, `/partners` | Legacy business/demo family | Business/demo pages through `DefaultLayout` | no | generic footer only | unknown | yes | no | LEGACY | Legacy business/demo routes; classify outside WNYHS shell failures. |
| `/elder-care-tech`, `/elder-care-tech/packages`, `/elder-care-tech/add-ons`, `/elder-care-tech/how-it-works` | Legacy old vertical and aliases | `ElderCareTech` and `Navigate` aliases | mixed | mixed | unknown | mixed | yes for add-ons alias | LEGACY | Old vertical overlaps with current Aging in Place route family; separate migration task required. |
| `/newsite` and `/newsite/*` child routes | Prototype/new-site family | `NewSiteLayout` and `src/newsite/pages/*` | no | no | no duplicate WNYHS nav; separate prototype nav/footer present | yes | no | LEGACY | Uses separate `newsite-nav` / `newsite-footer`; classify as prototype/legacy family, not WNYHS shell failure. |
| `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html` | Static public demo file | Static HTML under `public/demos` | no | no | unknown | no | no | LEGACY | Public file candidate outside React route shell and outside NAV002. Included as static public route/file evidence from SITEARCH001. |

## 6. QR Landing Status After NAV002

QR landing status after NAV002: `PASS`.

Evidence:

- `/qrlanding` renders `WnyhsTopNav` with reduced QR nav labels: View Packages, See Our Work, Call/Text, and Schedule Estimate CTA.
- `/qrlanding` renders `WnyhsSiteFooter`.
- No `qr-topbar` embedded nav remains in the page owner.
- `/qrlanding.htm` redirects to `/qrlanding`.
- QR source tracking, `requestId`, and `sendLeadSignal` behavior remain source-owned and unchanged by NAV003.

## 7. Legacy Families To Keep Separate

These route families should not be mixed with WNYHS standard-shell failures:

- Halo product and Halo legal routes.
- Vendor/business routes.
- Health Homes routes.
- Legacy landing pages under `/lp/*`.
- Business-demo routes such as `/demo`, `/pricing`, `/5-day-demo`, `/partners`, and `/never-miss-another-estimate`.
- Old vertical routes under `/elder-care-tech`.
- Prototype routes under `/newsite/*`.
- Public-reachable system routes such as UAT, certificate, and static demo files.

Any migration, hiding, redirecting, or shell conversion for these families requires a separate bounded task.

## 8. Recommended Next Task

Recommended next bounded task:

```text
NAV004 - Public Route Shell Follow-Up Decision Plan
Purpose: Decide whether FOLLOW-UP and EXCEPTION CANDIDATE routes should adopt the standard WNYHS shell, stay as explicit exceptions, redirect, or move into a legacy/system route treatment plan.
Allowed Scope: Documentation-only decision plan for NAV003 follow-up routes.
Forbidden Scope: No source route/layout changes, no redirects, no page redesign, no copy changes, no protected runtime changes, no dependencies, no Cloudflare config, no merge.
```

## 9. Protected-System Boundary

NAV003 did not authorize and this document must not be used as authority to modify:

- HubSpot schema, pipeline, properties, or sync behavior.
- `/api/lead-signal` or request lifecycle behavior.
- Stripe checkout, payment verification, webhook behavior, or deposit logic.
- Scheduling behavior.
- Resend/email behavior.
- Quote, agreement, payment, schedule, planner, or operator runtime flows.
- Backend/API runtime behavior.
- Cloudflare configuration.
- Environment variables, secrets, private URLs, tokens, or credentials.
- Dependencies or package-lock.

## 10. RSI / Context Efficiency Notes

Essential docs and files loaded:

- System authority chain, current context, targeted Master Task Register search, OPS009, token gate, page/header/footer/public/QR standards, site architecture owner docs, `src/App.tsx`, `Layout.tsx`, `DefaultLayout.tsx`, `RouteTransitionManager.tsx`, WNYHS shell components, and targeted route owner pages.

Redundant or lower-value reads:

- Several route owner pages were read only to confirm absence of the standard WNYHS shell; future NAV shell audits could use a scripted import/layout classifier first, then manually inspect only unknowns.

Context pressure: medium.

Future prompt-shortening pattern:

```text
Run NAV shell audit for TASK-ID. Use AGENTS.md plus current step, targeted MTR search, OPS009, PAGE_TOKEN_COMPLIANCE_GATE, header/footer/page/public/QR standards, src/App.tsx, shell components, and only route owners needed to classify unknown shell behavior. Update docs/site-architecture owner doc and MTR only; no source edits.
```

Chat-derived context promoted into repo docs:

- NAV003 route shell classification, QR post-NAV002 status, legacy-family separation, and the recommended NAV004 decision-plan boundary are now recorded here.
