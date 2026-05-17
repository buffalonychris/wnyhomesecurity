# FITCHECK-CTA001 — Recommendation-state CTA hierarchy cleanup (REV01)

## Purpose
Reduce CTA overload in the Fit Check recommendation state and reinforce the primary funnel path: Continue To Estimate Request.

## Current CTA hierarchy found
Before this task, recommendation state exposed multiple competing actions at the same level:
- Continue To Estimate Request
- Compare Packages
- Request My Estimate (duplicate estimate intent)
- Change package
- System Planner (Preview, optional)
- Edit/Review answers

## Files changed
- `src/lib/siteVersion.ts`
- `src/content/fitCheckConfigs.ts`
- `src/components/FitCheck.tsx`
- `docs/system/master-task-register.md`
- `docs/audits/fitcheck_cta001_rev01.md`

## Before behavior
- Duplicate estimate-intent CTA appeared (`Continue To Estimate Request` plus `Request My Estimate`).
- Utility actions were mixed with primary/secondary CTAs in a way that increased decision clutter.
- Start Over had higher visual weight than intended utility posture.

## After behavior
- Primary CTA: `Continue To Estimate Request`.
- Secondary CTA: `Compare Packages`.
- Utility/lower-emphasis actions: `Review my answers` / `Hide my answers`, `Start Over`, `System Planner (Preview, optional)`, `Change package`.
- Recommendation logic unchanged.

## CTAs removed/demoted/retained
- **Removed:** `Request My Estimate` from Fit Check tier CTA config.
- **Retained (primary):** `Continue To Estimate Request`.
- **Retained (secondary):** `Compare Packages`.
- **Demoted to utility style:** `Start Over`, `System Planner (Preview, optional)`, `Review my answers` toggles, `Change package`.

## Route/runtime preservation notes
- `Continue To Estimate Request` still routes to `/contact` and preserves context query params through existing `discoveryContextParams` assembly and tier propagation.
- No `/api/lead-signal` changes.
- No HubSpot/Stripe/requestId/Resend scheduling runtime behavior changes.

## Explicit forbidden items not implemented
- SUPPORT-FLOW001 not implemented.
- QUOTE-GEN001 not implemented.
- CRM-STAGEFLOW001 not implemented.
- SCHED-FOLLOWUP001 not implemented.
- No quote generation/PDF/artifact/proposal/email work added.
- No HubSpot schema/pipeline/stage/runtime changes.
- No Stripe/scheduling authority changes.

## Validation results
- `npm run lint` executed (pre-existing unrelated failures remain).
- `npm run test -- --run` executed (pre-existing `operatorNavbar.test.tsx` failure remains).
- `npm run build` executed and passing.
- Required grep/diff audits executed.

## Manual QA checklist
1. Open `/home-security`.
2. Click Find The Right System.
3. Complete Fit Check.
4. Generate/view recommendation.
5. Confirm primary visible action is Continue To Estimate Request.
6. Confirm Compare Packages is secondary.
7. Confirm Request My Estimate is removed/demoted (removed).
8. Confirm System Planner (Preview) is optional/lower-emphasis.
9. Confirm Start Over is available but not competing.
10. Confirm Review my answers / Hide my answers still works.
11. Click Continue To Estimate Request.
12. Confirm route/query context reaches Estimate/Contact gateway.
13. Confirm selected/recommended system context still appears.
14. Confirm browser back/forward remains stable.
15. Confirm mobile CTA stack is cleaner.
16. Confirm no quote/support/Stripe/scheduling/SMS/reminder/HubSpot-stage behavior appears.

## Last verified
2026-05-17 (UTC)
