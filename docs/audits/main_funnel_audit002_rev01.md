# MAIN-FUNNEL-AUDIT002 REV01 — Main Funnel UX/Conversion Audit

## Executive summary
Main funnel is functionally working, but conversion friction remains from internal wording ("Submit intake"/"Generate Quote"), mixed step-state visibility in fit-check/recommendation rendering, and early Precision Planner prominence.

## Current working funnel path
`/home-security` → `/discovery` (fit-check) → recommendation state with CTA routing to `/contact?vertical=home-security&tier=<recommended>&recommended=<recommended>&fit=complete` → form submit to `/api/lead-signal`.

## UX issues found
- Contact hero and submit CTA use internal intake language.
- Recommendation appears as same-page continuation beneath questionnaire (weak "new step" clarity).
- Planner CTA is visible on recommendation screen before estimate request completion.

## CTA language findings
- Replace `Submit intake` with `Request My Estimate`.
- Replace `Generate Quote` with `View Recommended System` (or `See My Recommendation`).
- Keep `Request Estimate` as final-stage wording for contact routing.

## Funnel progression findings
Recommend explicit 3-step copy model across discovery/contact surfaces:
1. Find Your Fit
2. Recommended System
3. Request Estimate

## Navigation findings
- Active funnel surfaces should minimize distractions.
- Recommendation: temporary reduced nav model on discovery/contact (Home, Packages, Support) or Back + Support only in fit-check/recommendation-active state.

## Recommendation screen findings
- Keep same route for bounded scope, but convert to clearer state transition:
  - auto-scroll to top after recommendation generation
  - collapse/hide questionnaire once recommendation appears
  - keep one primary CTA to estimate request

## Planner positioning findings
- Precision Planner is currently exposed before estimate request completion.
- Recommendation: demote to optional advanced path or post-contact/operator-guided step to protect primary conversion flow.

## Contact form wording findings
- Internal phrasing currently used:
  - hero line: "Start the intake..."
  - submit button: "Submit intake"
- Package/recommendation summary should remain customer-guidance style and avoid debug tone.

## Conversion friction findings
- Mixed CTA lexicon across steps (recommendation vs quote vs intake).
- Secondary path options can compete with estimate request on mobile when stacked.

## Mobile findings
- Recommendation step and CTA stacking can feel dense after fit-check completion.
- Suggested bounded improvements: top-anchor after recommendation, tighter CTA hierarchy, and reduced low-priority secondary actions.

## Prioritized fix list
1. CTA wording cleanup (discovery + contact)
2. Recommendation-state visibility improvement (same-route state separation)
3. Planner demotion in acquisition flow
4. Reduced active-funnel navigation model

## Proposed bounded implementation tasks
- **MAIN-FUNNEL-FIX003A**: Copy-only CTA normalization (no runtime logic).
- **MAIN-FUNNEL-FIX003B**: Discovery recommendation render-state clarity updates.
- **MAIN-FUNNEL-FIX003C**: Planner CTA positioning and low-friction nav minimization.

## Forbidden changes
- No `/api/lead-signal` changes under this audit task.
- No HubSpot/Stripe/scheduling/SMS/runtime-protected changes.
- No schema/property/pipeline modifications.

## Validation checklist
- `npm run lint`
- `npm run test -- --run`
- `npm run build`
- `git diff -- src docs`
- `rg -n "Generate Quote|Submit Intake|Continue With Recommendation|intake|planner|Precision Planner|request estimate|recommendation" src docs`
- `rg -n "guarantee|guaranteed|police|insurance|monitoring|contract|required subscription" src docs`

## Implementation recommendation
Use **multiple bounded tasks** (A/B/C) to reduce risk to funnel routing/runtime protections and allow staged QA verification.
