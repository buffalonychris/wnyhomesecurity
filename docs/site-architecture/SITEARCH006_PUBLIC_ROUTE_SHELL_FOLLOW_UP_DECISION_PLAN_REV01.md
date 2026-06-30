# SITEARCH006 Public Route Shell Follow-Up Decision Plan REV01

## 1. Executive Summary

This document converts the NAV003 route shell verification matrix into bounded future decisions and task candidates.

NAV003 reviewed 118 public React route patterns and classified them as:

| NAV003 status | Route patterns |
| --- | ---: |
| PASS | 42 |
| FOLLOW-UP | 10 |
| EXCEPTION CANDIDATE | 10 |
| LEGACY | 56 |

NAV004 does not implement shell, route, redirect, nav, footer, copy, visual, runtime, CRM, payment, scheduling, email, dependency, or Cloudflare changes. It only groups the non-PASS findings into safer future task boundaries.

Recommended next execution task: `NAV005 - Public System Route Shell Exception Plan`.

## 2. Source Matrix Reference

Source matrix:

- `docs/site-architecture/SITEARCH005_PUBLIC_ROUTE_SHELL_VERIFICATION_MATRIX_REV01.md`

Related site-architecture references:

- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`
- `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`

If this document conflicts with higher-authority repository governance or a later active bounded task, the higher-authority source controls.

## 3. Non-PASS Route Grouping

### FOLLOW-UP routes

NAV003 identified these 10 routes as WNYHS/system routes that do not clearly render in the standard WNYHS public shell or require an explicit exception decision:

- `/funding`
- `/faq`
- `/recommend`
- `/quotePrint`
- `/agreementPrint`
- `/esign`
- `/payment-processing`
- `/resume`
- `/resume-verify`
- `/verify`

### EXCEPTION CANDIDATE routes

NAV003 identified these 10 routes as aliases, redirects, hash destinations, print or compatibility routes where a normal page shell may not be the correct target:

- `/fit-check`
- `/estimate`
- `/agreement`
- `/home-security/packages`
- `/home-security/add-ons`
- `/home-security/how-it-works`
- `/home-automation/packages`
- `/home-automation/add-ons`
- `/home-automation/how-it-works`
- `/qrlanding.htm`

### LEGACY route families

NAV003 identified 56 route patterns as legacy, prototype, non-WNYHS, old vertical, business-demo, public-reachable system, or static public file candidates. These are not WNYHS public shell failures and should be handled by separate route-governance tasks.

Key families:

- WNYHS legacy page routes: `/home-security/legacy`, `/home-security/legacy-premium`
- Legacy alternate/system routes: `/halo-splash`, `/uat`, `/launchUat`, `/sicar`, `/certificate`
- Health Homes route family
- Legacy landing routes under `/lp/*`
- Halo product/legal route family
- Vendor/business route family
- Business-demo routes: `/never-miss-another-estimate`, `/demo`, `/pricing`, `/5-day-demo`, `/partners`
- Old vertical routes under `/elder-care-tech`
- Prototype routes under `/newsite/*`
- Static public demo file: `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html`

## 4. Decision Table

| Route / route family | Current NAV003 status | Recommended decision | Future task ID candidate | Risk level | Protected-system sensitivity | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `/funding`, `/faq` | FOLLOW-UP | Migrate to WNYHS public shell if still approved public information pages; otherwise mark for later noindex/review decision. | NAV006 | Medium | Low | These are public information/support-adjacent routes. Shell migration should not include copy expansion or nav changes. |
| `/recommend` | FOLLOW-UP | Keep as-is until ownership is confirmed, then either migrate to WNYHS shell or formalize as a system exception. | NAV005 | Medium | Possible quote/planner adjacency | Recommendation logic can overlap customer-fit and quote entry behavior, so review owner intent before shell changes. |
| `/quotePrint`, `/agreementPrint` | FOLLOW-UP | Formalize as print-flow exceptions. | NAV005 | High | Quote and agreement protected flow | Print pages should not receive normal public nav/footer treatment unless a protected-flow review explicitly authorizes it. |
| `/esign` | FOLLOW-UP | Formalize as protected transaction/system exception or migrate only after protected-flow review. | NAV005 | High | Agreement protected flow | Route may be transaction-adjacent. Do not change shell, copy, redirects, or behavior without specific authorization. |
| `/payment-processing` | FOLLOW-UP | Formalize as payment-system exception pending payment review. | NAV005 | High | Stripe/payment | No payment-state or Stripe authority may be inferred from shell governance. |
| `/resume`, `/resume-verify`, `/verify` | FOLLOW-UP | Formalize as token/document verification exceptions unless owner review says customer-facing shell is required. | NAV005 | High | Quote/agreement/resume or document verification | These routes may expose status/error states. Keep runtime behavior untouched. |
| `/fit-check`, `/estimate` | EXCEPTION CANDIDATE | Keep redirect aliases as-is and document as public funnel aliases. | NAV007 | Medium | Public funnel entry | Do not change redirect destinations or funnel order in a shell task. |
| `/agreement` | EXCEPTION CANDIDATE | Formalize as agreement-flow redirect exception. | NAV005 | High | Agreement protected flow | Protected-flow review required before any route behavior change. |
| `/home-security/packages`, `/home-security/how-it-works`, `/home-automation/packages`, `/home-automation/how-it-works` | EXCEPTION CANDIDATE | Keep as-is for now; later classify as legacy category aliases or redirect candidates under category-route governance. | NAV007 or T-SITEARCH002-002B | Medium | Low to medium | Related to SITEARCH004 legacy flat route transition; do not bundle with shell migration. |
| `/home-security/add-ons`, `/home-automation/add-ons` | EXCEPTION CANDIDATE | Keep hash-bearing redirect aliases as-is and review with quote/funnel owner before any change. | NAV007 | High | Quote/add-ons flow | NAV002 intentionally left hash destinations browser/anchor-controlled. |
| `/qrlanding.htm` | EXCEPTION CANDIDATE | Keep as QR compatibility alias. | NAV007 | Medium | QR attribution / lead-signal adjacency | Destination `/qrlanding` already passes shell review. Do not change QR source behavior here. |
| `/home-security/legacy`, `/home-security/legacy-premium` | LEGACY | Classify as legacy WNYHS pages; decide later whether to retain, hide, redirect, or noindex/review. | NAV008 | Medium | Low to medium | Shell currently passes, but route purpose is legacy. Avoid mixing with current WNYHS shell failures. |
| `/halo-splash`, `/uat`, `/launchUat`, `/sicar`, `/certificate` | LEGACY | Defer to public-reachable system route exposure review; likely remove/noindex/review later or formalize exceptions. | NAV009 | High | System/internal-like route exposure | Do not change route access in NAV004. Future work should audit index posture and exposure. |
| Health Homes route family | LEGACY | Defer to separate vertical/brand cleanup. | NAV010 | Medium | Possible old vertical business context | Treat as non-WNYHS vertical cleanup, not public shell work. |
| `/lp/senior`, `/lp/family`, `/lp/agency` | LEGACY | Defer to campaign/legacy landing cleanup. | NAV010 | Medium | Possible campaign-source behavior | Any removal or redirect needs campaign-reference review. |
| Halo product/legal route family | LEGACY | Defer to separate vertical/brand cleanup and SEO review. | NAV010 | High | Legacy product/legal surfaces | SITEARCH001 noted some Halo/vendor routes have clearer index posture than current WNYHS pages. Do not edit in NAV tasks without explicit scope. |
| Vendor/business route family | LEGACY | Defer to separate business/brand cleanup and SEO review. | NAV010 | High | Legacy business funnel surfaces | Keep separate from WNYHS homeowner route shell governance. |
| `/never-miss-another-estimate`, `/demo`, `/pricing`, `/5-day-demo`, `/partners` | LEGACY | Defer to separate business-demo cleanup. | NAV010 | High | Business-demo flow | Do not combine with WNYHS public shell migration. |
| `/elder-care-tech` and child aliases | LEGACY | Defer to separate vertical/brand cleanup; classify relationship to Aging in Place before route action. | NAV010 | High | Old brand/vertical risk | Old vertical overlap requires operator decision before redirect, removal, or copy changes. |
| `/newsite` and `/newsite/*` | LEGACY | Defer to prototype route cleanup. | NAV011 | High | Prototype/public exposure | Prototype shell is intentionally separate. Future task should decide public, internal, or retired status. |
| Static public demo HTML | LEGACY | Defer to demo/dashboard ownership cleanup. | NAV011 or T-DEMO001-001 | Medium | Demo/static asset exposure | Outside React route shell. Decide whether this remains public, hidden sales demo, prototype-only, or retired. |

## 5. Proposed Task Sequence

### NAV005 - Public System Route Shell Exception Plan

Purpose: Decide exception status for protected/system-adjacent FOLLOW-UP routes before any implementation.

Candidate routes:

- `/recommend`
- `/quotePrint`
- `/agreementPrint`
- `/esign`
- `/payment-processing`
- `/resume`
- `/resume-verify`
- `/verify`
- `/agreement`

Recommended decision target: formalize exceptions first, not migration.

Protected-flow review required before any route, shell, copy, redirect, print, token, payment, agreement, resume, verification, or runtime behavior change.

### NAV006 - Public Information Shell Migration Plan

Purpose: Decide whether `/funding` and `/faq` remain approved public information pages and, if yes, define a later bounded migration to the WNYHS public shell.

Recommended decision target: migrate only if still approved as WNYHS public pages.

Forbidden in NAV006 unless explicitly authorized: page copy expansion, nav changes, footer changes, route redirects, SEO work, visual redesign.

### NAV007 - Alias And Redirect Exception Register

Purpose: Convert redirect-only, hash-bearing, and compatibility aliases into a durable route exception register.

Candidate routes:

- `/fit-check`
- `/estimate`
- `/agreement`
- `/home-security/packages`
- `/home-security/add-ons`
- `/home-security/how-it-works`
- `/home-automation/packages`
- `/home-automation/add-ons`
- `/home-automation/how-it-works`
- `/qrlanding.htm`

Recommended decision target: keep as-is unless a separate route-transition task authorizes changes.

### NAV008 - WNYHS Legacy Page Treatment Plan

Purpose: Decide treatment for legacy WNYHS pages that currently pass shell review but are explicitly legacy.

Candidate routes:

- `/home-security/legacy`
- `/home-security/legacy-premium`

Recommended decision target: classify as legacy and decide retain, hide, noindex/review, or route-transition handling later.

### NAV009 - Public-Reachable System Route Exposure Review

Purpose: Review public-reachable system/internal-like routes separately from WNYHS shell governance.

Candidate routes:

- `/halo-splash`
- `/uat`
- `/launchUat`
- `/sicar`
- `/certificate`

Recommended decision target: remove/noindex/review later or formalize system exceptions, subject to a route exposure review.

### NAV010 - Legacy Vertical And Business Route Cleanup Plan

Purpose: Separate non-WNYHS, old vertical, vendor, business-demo, and campaign families from WNYHS public shell work.

Candidate families:

- Health Homes
- legacy `/lp/*` pages
- Halo product/legal routes
- vendor/business routes
- business-demo routes
- `/elder-care-tech` and child aliases

Recommended decision target: defer to separate vertical/brand cleanup with SEO and campaign-reference review.

### NAV011 - Prototype And Demo Route Ownership Plan

Purpose: Decide public status and ownership for prototype/demo route surfaces.

Candidate routes/files:

- `/newsite`
- `/newsite/*`
- `public/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html`

Recommended decision target: decide public, hidden sales demo, prototype-only, internal, or retired status before implementation.

## 6. Safest Execution Order

1. `NAV005 - Public System Route Shell Exception Plan`
2. `NAV006 - Public Information Shell Migration Plan`
3. `NAV007 - Alias And Redirect Exception Register`
4. `NAV008 - WNYHS Legacy Page Treatment Plan`
5. `NAV009 - Public-Reachable System Route Exposure Review`
6. `NAV010 - Legacy Vertical And Business Route Cleanup Plan`
7. `NAV011 - Prototype And Demo Route Ownership Plan`

Rationale: decide protected/system-adjacent exceptions first, then low-risk public information pages, then alias/redirect posture, then legacy/prototype cleanup. No route change should happen until the relevant decision task is complete and a separate implementation task is active.

## 7. Protected Routes That Must Not Be Touched Without Protected-Flow Review

These route families must not be changed by shell, nav, redirect, route cleanup, SEO, or legacy tasks unless the active task explicitly authorizes protected-flow review and implementation:

- Quote routes: `/quote`, `/quoteReview`, `/quotePrint`, add-ons hash destinations, and quote-related aliases.
- Agreement routes: `/agreement`, `/agreementReview`, `/agreementPrint`, `/esign`.
- Payment routes: `/payment`, `/payment-processing`, `/home-security/pay-deposit`, `/home-security/payment/success`, `/home-security/payment/canceled`, `/home-security/payment/cancel`.
- Schedule route: `/schedule`.
- Planner route: `/home-security/planner`.
- Resume/verification routes: `/resume`, `/resume-verify`, `/verify`.
- CRM-related routes or behavior, including any path that writes through `/api/lead-signal` or affects `requestId` lifecycle.

Protected-system review must explicitly confirm no HubSpot schema, pipeline, property, sync, CRM write path, Stripe checkout, payment verification, webhook, deposit, scheduling, Resend/email, backend/API, or secret/env behavior is being changed.

## 8. Do Not Implement In This Task

NAV004 does not authorize:

- Source implementation file changes.
- Route changes.
- Redirect changes.
- Navigation changes.
- Footer changes.
- Page copy changes.
- Visual, CSS, or token changes.
- Stripe/payment changes.
- HubSpot/CRM changes.
- Scheduling changes.
- Resend/email changes.
- Backend/API runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Version bump.
- Merge or ready-for-review PR.

## 9. Open Questions For Operator

1. Should `/funding` and `/faq` remain approved WNYHS public information pages, or should they be reviewed for retirement/noindex posture?
2. Should `/recommend` be treated as a public customer-facing recommendation page, a protected fit/quote helper, or a legacy system route?
3. Should print and verification routes remain intentionally plain/system-focused, or should they receive a constrained WNYHS shell after protected-flow review?
4. Should old non-WNYHS vertical and business route families be handled under NAV cleanup, SEO cleanup, or a separate brand/vertical retirement lane?
5. Should the static HA Gold dashboard demo remain public, move under a governed demo route, or be retired later?

## 10. Recommended Next Codex Task

Recommended next bounded task:

```text
NAV005 - Public System Route Shell Exception Plan
Purpose: Create a docs-only exception plan for NAV003 protected/system-adjacent FOLLOW-UP and EXCEPTION CANDIDATE routes before any shell, redirect, route, or runtime implementation.
Allowed Scope: Documentation-only review of `/recommend`, print routes, agreement/payment/resume/verify/system aliases, and protected-flow sensitivity; update task register; validation.
Forbidden Scope: No source implementation files, no route changes, no redirect changes, no nav/footer/page copy/CSS changes, no Stripe/payment, HubSpot/CRM, scheduling, Resend/email, backend/API, Cloudflare, dependency, package-lock, version, merge, or ready-for-review PR.
```

## 11. RSI / Context Efficiency Notes

Essential docs loaded:

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/guardrails.md`
- `docs/system/step-current.md`
- targeted `docs/system/master-task-register.md` NAV search
- `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`
- `docs/site-architecture/SITEARCH005_PUBLIC_ROUTE_SHELL_VERIFICATION_MATRIX_REV01.md`
- `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md`
- `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md`
- `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`

Redundant or lower-value reads:

- Broad standards discovery grep returned more visual/governance references than needed; SITEARCH005 already contained enough shell-status evidence for NAV004.

Context pressure: medium.

Future prompt-shortening pattern:

```text
Run NAV00X docs-only decision task. Use AGENTS.md, current step, targeted MTR search around NAV00X/NAV previous task, OPS009, SITEARCH005, and only named SITEARCH owner docs. Create/update the target site-architecture doc plus MTR only. No source/runtime changes.
```

Chat-derived context promoted into repo docs:

- NAV004 decision grouping, protected-route review sequence, and recommended NAV005/NAV006/NAV007/NAV008/NAV009/NAV010/NAV011 task sequence are recorded in this document.
