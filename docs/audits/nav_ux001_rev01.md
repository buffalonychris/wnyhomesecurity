# NAV-UX001 REV01 — Route Transition Page-Top Normalization + Intentional Form Persistence/Reset

## Purpose
Normalize customer-facing route transitions so key funnel pages consistently open at page top, while preserving existing intentional fit-check persistence behavior and explicit reset controls.

## User-observed issues
- Navigating across major funnel routes could preserve prior scroll position and open the destination partway down.
- Scroll behavior did not consistently feel intentional during top-nav traversal.

## Route transition behavior found
- Route changes are handled by React Router (`BrowserRouter` + route tree in `src/App.tsx`).
- No global route-change scroll reset helper existed in `src/main.tsx` prior to this task.
- Top navigation links are `NavLink` components in `src/components/nav/WnyHomeSecurityNav.tsx`.
- Without an app-level reset hook, browser/SPA behavior may preserve scroll position across route transitions.

## Form persistence behavior found
- Fit-check answers + recommendation state are intentionally persisted through `loadRetailFlow` / `updateRetailFlow` (local retail-flow storage abstraction) in `src/components/FitCheck.tsx`.
- Fit-check already has a user-visible reset action, now normalized to customer-facing title case `Start Over`.
- Contact/estimate form fields are component state only in `src/pages/Contact.tsx` (no added storage persistence in this task).
- Discovery/estimate context is preserved through query params + derived context display in `src/pages/Contact.tsx`.

## Files changed
- `src/lib/siteVersion.ts`
- `src/components/RouteTransitionManager.tsx`
- `src/main.tsx`
- `src/components/FitCheck.tsx`
- `docs/audits/nav_ux001_rev01.md`
- `docs/system/master-task-register.md`

## Before behavior
- No global public-route top reset manager.
- Major route transitions could retain awkward prior scroll offsets.
- Fit-check reset wording appeared as `Start over`.

## After behavior
- Added global route transition manager that resets scroll to page top on major public funnel routes:
  - `/home-security`
  - `/packages`
  - `/discovery`
  - `/contact`
  - `/home-security/planner`
  - `/support`
- Hash-link navigation is respected (no forced top reset when `location.hash` is present).
- Fit-check reset remains available and now labeled `Start Over`.

## Reset behavior decision
- Retained existing fit-check scoped reset behavior only.
- Reset clears local fit-check answer/result state only and leaves protected runtime systems untouched.
- Contact route query context (`vertical`, `tier`, `recommended`, `fit`, discovery fields) remains preserved and is not silently removed by fit-check reset.

## Route/runtime preservation notes
- No route deletions or funnel order changes.
- No changes to `/api/lead-signal`.
- No HubSpot runtime/schema/pipeline updates.
- No Stripe/payment verification changes.
- No scheduling authority changes.
- No requestId lifecycle changes.

## Explicit forbidden items not implemented
- QUOTE-GEN001 not implemented.
- CRM-STAGEFLOW001 not implemented.
- No quote generation/artifact/PDF/email additions.
- No HubSpot stage-update automation additions.
- No SMS/reminder/autonomous booking additions.

## Validation results
- `npm run lint` (pre-existing unrelated lint failures remain).
- `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure remains).
- `npm run build` (pass).
- Required diff and `rg` checks executed.

## Manual QA checklist
1. Open `/home-security`.
2. Scroll down page.
3. Click each top-nav link one-by-one.
4. Confirm destination loads at page top.
5. Verify `/packages`, `/discovery`, `/contact`, `/home-security/planner`, `/support` open at top.
6. Confirm no destination opens midway due to prior scroll.
7. Complete partial fit-check.
8. Navigate away/back.
9. Confirm intended persisted fit-check answers remain.
10. Confirm `Start Over` is visible.
11. Click `Start Over`.
12. Confirm fit-check answers/results clear only for that flow.
13. Complete fit-check → recommendation → Continue To Estimate Request.
14. Confirm query/context still reaches contact page.
15. Fill part of contact form, navigate away/back; confirm intended current behavior.
16. Submit contact form.
17. Confirm no protected runtime regressions.
18. Use browser back/forward.
19. Confirm no black screen regressions and acceptable page-top behavior.

## Last verified
- 2026-05-17 (UTC)
- Task: NAV-UX001
