# FUNNEL-ARCH002 REV01 — Implement approved nav/page-role cleanup

## Purpose
Implement the approved navigation and page-role cleanup decisions from FUNNEL-ARCH001 to reinforce the dominant customer journey: **Find The Right System → Review Recommendation → Request Estimate**.

## Source authority used
- `/docs/audits/funnel_arch001_rev01.md`

## Files changed
- `src/content/wnyhsNavigation.ts`
- `src/components/nav/WnyHomeSecurityNav.tsx`
- `src/components/FitCheck.tsx`
- `docs/system/master-task-register.md`
- `docs/audits/funnel_arch002_rev01.md`

## Implemented architecture decisions
- Primary customer nav now emphasizes Home, Packages, Fit Check, and Estimate.
- System Planner remains accessible but demoted to secondary utility navigation.
- Disruptive/low-priority primary items (comparison, what's included, dashboard, quote builder) were removed from top-level nav prominence.
- Fit Check recommendation CTA language retains estimate-request convergence while preserving existing `/contact` context propagation.

## Nav hierarchy before/after
### Before
Primary nav mixed conversion flow with broad tool links:
- Home, Packages, Comparison, What’s Included, Dashboard, Quote Builder, Fit Check, System Planner (Preview)

### After
Primary nav aligned to funnel conversion:
- Home, Packages, Fit Check, Estimate

Secondary utility nav:
- Support, System Planner (Preview), Contact, About Us, Legal

## CTA/page-role cleanup before/after
### Before
- Planner had equal visual/nav prominence with primary conversion actions.
- Quote Builder appeared in primary nav before QUOTE-GEN001 completion.

### After
- Planner remains accessible but utility-level.
- Primary emphasis remains guided path and estimate conversion.
- Fit Check recommendation area keeps estimate-request CTA and optional planner access labeled clearly as preview/optional.

## Links removed/demoted/renamed/repositioned
- **Removed from primary nav:** Comparison, What’s Included, Dashboard, Quote Builder.
- **Demoted from primary nav to utility:** System Planner (Preview).
- **Added to primary nav:** Estimate (explicit `/contact` entry).
- **Renamed utility dropdown summary:** `More` → `Support & More`.
- **Adjusted Fit Check optional CTA label:** `Precision Planner (optional, usually later)` → `System Planner (Preview, optional)`.

## Route/runtime preservation notes
- No routes were deleted.
- `/contact` intake remains the same route and receives existing propagated query context.
- No `/api/lead-signal` or CRM/Stripe/scheduling runtime logic changed.
- Route transition behavior from NAV-UX001 preserved (no route-transition logic changes in this task).

## Explicit forbidden items not implemented
- ESTIMATE-FLOW001 not implemented.
- QUOTE-GEN001 not implemented.
- CRM-STAGEFLOW001 not implemented.
- No quote artifact/PDF/email generation changes.
- No HubSpot runtime/schema/pipeline changes.
- No Stripe verification/payment behavior changes.
- No scheduling authority/SMS/reminder/autonomous-booking changes.

## Validation results
- `npm run lint` (pre-existing unrelated failures remain).
- `npm run test -- --run` (pre-existing failing test remains: `src/pages/__tests__/operatorNavbar.test.tsx`).
- `npm run build` passed.
- Required `git diff` and `rg` audits executed.

## Manual QA checklist
1. Open `/home-security`.
2. Confirm primary CTA supports Find The Right System.
3. Confirm nav hierarchy is clear and not overloaded.
4. Confirm Packages remains accessible and supports direct shopper path.
5. Confirm Fit Check / Discovery remains primary guided path.
6. Complete Fit Check → Recommendation → Continue To Estimate Request.
7. Confirm `/contact` route/query context is preserved.
8. Confirm System Planner (Preview) remains accessible but not required.
9. Confirm Support remains accessible.
10. Confirm Quote/Review Quote is not promoted as live quote generation.
11. Confirm route transitions still open at page top.
12. Confirm browser back/forward does not black-screen.
13. Confirm contact form still submits normally.
14. Confirm no HubSpot, Stripe, scheduling, SMS, reminder, or quote-generation behavior appears.

## Last verified
- Date (UTC): 2026-05-17
- Task: FUNNEL-ARCH002
