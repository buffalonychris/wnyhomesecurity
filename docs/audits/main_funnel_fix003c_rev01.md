# MAIN-FUNNEL-FIX003C REV01 — Planner CTA Positioning / Low-Friction Nav Minimization

## Purpose
Reduce main-funnel conversion friction by keeping estimate-request actions primary and positioning Planner as an optional advanced/later path.

## Files changed
- `src/lib/siteVersion.ts`
- `src/content/wnyhsNavigation.ts`
- `src/components/FitCheck.tsx`
- `docs/system/master-task-register.md`
- `docs/audits/main_funnel_fix003c_rev01.md`

## UX issue fixed
Planner access appeared too prominent during primary acquisition flow and could be interpreted as required before requesting an estimate.

## Before behavior
- Top nav primary group showed Planner with equal prominence to core conversion links.
- Recommendation-state Planner CTA said `Precision Planner (optional)` without guidance that most users should request estimate first.

## After behavior
- Top nav keeps core conversion path items prioritized, with Planner moved to a clearly secondary optional position and labeled `Planner (Optional)`.
- Recommendation-state Planner CTA now reads `Precision Planner (optional, usually later)` to reinforce estimate-request-first behavior.

## Planner positioning decision
Planner remains fully reachable and functional but is explicitly framed as optional/advanced/later. No Planner routes or component behaviors were removed.

## Navigation minimization decision
Navigation was minimally adjusted to reduce distraction while preserving trust/support access and all existing route availability.

## Route/runtime preservation notes
- Preserved `/home-security` → `/discovery` → recommendation → `/contact` path and query propagation behavior.
- No changes to `/api/lead-signal`.
- No HubSpot runtime logic/requestId lifecycle modifications.
- No Stripe/payment/scheduling authority changes.

## Explicit forbidden items not implemented
- NAV-BUG001 not implemented.
- QUOTE-GEN001 not implemented.
- CRM-STAGEFLOW001 not implemented.
- No quote generation feature work.
- No quote artifact rendering fix.
- No browser back/forward black-screen fix.

## Validation results
- `npm run lint` executed (known pre-existing unrelated failures remain).
- `npm run test -- --run` executed (known pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure remains).
- `npm run build` executed.
- Required diff/grep checks executed.

## Last verified
- Date (UTC): 2026-05-17
- Task: MAIN-FUNNEL-FIX003C
