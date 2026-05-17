# ESTIMATE-FLOW001 Audit — REV01

## Purpose
Implement the Estimate page as the central estimate-request gateway across direct nav, recommended system, selected package, on-site walkthrough intent, and QR/flyer contexts, while preserving the protected `/api/lead-signal` runtime contract.

## Source authority used
- `/docs/audits/funnel_arch001_rev01.md`
- `/docs/audits/funnel_arch002_rev01.md`

## Current estimate/contact/QR behavior found
- Canonical estimate route is `/contact?vertical=home-security` (primary nav “Estimate” points there).
- `/contact` already submitted through `sendLeadSignal` with existing lead-signal envelope and discovery context passthrough.
- Recommended/fit context was already rendered when `fit=complete` + `recommended=*` (and related discovery params) are present.
- Selected package context was partially rendered via `tier` query and package links.
- QR path remains operational via existing source/query context; this task preserves detection/rendering without adding tracking fields.

## Context sources identified
- Fit Check: `/discovery` links route into `/contact` with `tier` + discovery context params.
- Package flow: package cards / package detail route into `/contact` with package/tier context.
- Direct nav Estimate: top nav routes directly to `/contact?vertical=home-security`.
- QR/flyer: source/utm context propagated when present.
- Planner remains preview/non-authoritative; no authority changes implemented.

## Files changed
- `src/lib/siteVersion.ts`
- `src/pages/Contact.tsx`
- `src/components/PackageCard.tsx`
- `src/pages/PackageDetail.tsx`
- `docs/system/master-task-register.md`
- `docs/audits/estimate_flow001_rev01.md`

## Before behavior
- Contact page copy/functionality worked but read as generic contact intake.
- Direct estimate visitors had less explicit estimate-path framing.
- On-site walkthrough intent was not explicitly framed in estimate gateway copy.

## After behavior
- Contact page messaging is estimate-first and framed as the central estimate request gateway.
- Direct estimate visitors now get explicit next-step options (fit check, packages, on-site walkthrough request).
- Selected package links include `estimateIntent=selected-package` for clearer context labels.
- On-site walkthrough intent is explicitly labeled when `estimateIntent=onsite-walkthrough` is present.
- QR/flyer source context is explicitly recognized in-page when present.

## Estimate gateway decisions
- Kept canonical route as `/contact?vertical=home-security`.
- Preserved existing form fields and lead-signal submission payload shape.
- Added only UI/context framing; no runtime contract expansion.

## On-site estimate/walkthrough decision
- Implemented as intent-level framing via query context (`estimateIntent=onsite-walkthrough`) and copy.
- No scheduling authority, booking behavior, or payload/schema changes added.

## QR context preservation decision
- Preserved by detecting existing source/UTM context when present and surfacing contextual label.
- No new tracking system or schema changes introduced.

## Runtime/API preservation notes
- `/api/lead-signal` path unchanged.
- `sendLeadSignal` envelope usage unchanged.
- No HubSpot schema/property/pipeline/stage changes.
- No Stripe/scheduling/Resend/requestId lifecycle changes.

## Explicit forbidden items not implemented
- QUOTE-GEN001 not implemented.
- CRM-STAGEFLOW001 not implemented.
- SCHED-FOLLOWUP001 not implemented.
- No quote artifact/PDF/proposal generation.
- No quote emails.
- No HubSpot stage-flow logic updates.

## Validation results
- `npm run lint` (pre-existing unrelated failures unchanged).
- `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged).
- `npm run build` passed.
- Required grep/diff checks completed.

## Manual QA checklist
1. Open `/home-security`.
2. Click Estimate from nav.
3. Confirm Estimate page opens as central gateway.
4. Confirm direct estimate visitor sees clear options.
5. Go to Packages.
6. Select/request estimate for a package.
7. Confirm selected package context appears.
8. Complete Fit Check.
9. Continue to Estimate Request.
10. Confirm recommended system / fit-check context appears.
11. Confirm discovery context preserved.
12. Visit QR/flyer path.
13. Confirm QR/local flyer context preserved.
14. Submit estimate form.
15. Confirm `/api/lead-signal` success path.
16. Confirm HubSpot/email behavior operational.
17. Confirm no quote generation appears.
18. Confirm no Stripe/scheduling/SMS/reminder behavior appears.
19. Confirm back/forward and route-top behavior remain stable.
20. Confirm mobile usability.

## Last verified
2026-05-17 UTC
