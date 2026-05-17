# MAIN-FUNNEL-FIX003A REV01 — Main Funnel Copy and CTA Cleanup

## Purpose
Apply bounded, customer-facing copy and CTA wording cleanup across the main funnel while preserving all existing runtime behavior, routes, and protected CRM/payment/scheduling systems.

## Files Changed
- `src/lib/siteVersion.ts`
- `src/content/fitCheckConfigs.ts`
- `src/components/FitCheck.tsx`
- `src/pages/Contact.tsx`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/system/master-task-register.md`

## Copy Issues Fixed
- Removed customer-facing "Submit intake" wording from Contact submit flow.
- Replaced recommendation/follow-through wording that read like internal funnel language.
- Replaced "Generate Quote" call-to-action in fit-check recommendation path with recommendation/estimate-oriented phrasing.
- Improved package context labels on Contact to read as customer guidance instead of intake/debug context.

## Before / After Wording Table
| Location | Before | After |
|---|---|---|
| Fit check submit CTA | `Show recommendation` | `See My Recommendation` |
| Fit check secondary CTA | `Generate Quote` | `View Recommended System` |
| Recommendation primary CTA label | `Continue With Recommendation` | `Continue To Estimate Request` |
| Recommendation estimate CTA label | `Request Estimate` | `Request My Estimate` |
| Contact helper copy | `Start the intake...` | `Share a few details so we can prepare your estimate request...` |
| Contact submit button | `Submit intake` | `Request My Estimate` |
| Contact selected package context | `Selected package` | `System you selected` |
| Contact recommended context | `Recommended package` | `Recommended system` |

## Explicit Forbidden Items Not Implemented
- No quote generation implementation was added.
- No quote artifact rendering fix was implemented.
- No browser back/forward black-screen fix was implemented.
- No `/api/lead-signal` modifications were made.
- No HubSpot schema/properties/pipeline updates were made.
- No requestId lifecycle changes were made.
- No Resend delivery flow changes were made.
- No Stripe verification/payment behavior changes were made.
- No scheduling authority model changes were made.
- No SMS/reminder/autonomous booking behavior was added.

## Deferred Backlog Items (Recorded, Not Implemented)
- `NAV-BUG001` — Back/forward black screen + quote artifact render issue.
- `QUOTE-GEN001` — Quote generation, HubSpot quote-stage update, customer/operator quote email delivery.
- `CRM-STAGEFLOW001` — Deal pipeline advancement rules after quote/deposit/scheduling events.

## Validation Results
- `npm run lint` run (pre-existing unrelated failures remain).
- `npm run test -- --run` run (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure remains).
- `npm run build` run.
- Required grep/diff validation commands run.

## Last Verified
- Date (UTC): 2026-05-17
- Task: MAIN-FUNNEL-FIX003A
