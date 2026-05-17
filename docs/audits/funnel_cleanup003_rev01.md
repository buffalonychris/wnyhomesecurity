# FUNNEL-CLEANUP003 REV01 — Discovery Persistence + Recommendation Propagation

## Purpose
Preserve discovery/fit-check context through `/contact` submission and additive downstream `/api/lead-signal` operator email + HubSpot note context for intake continuity.

## Files Changed
- `src/components/FitCheck.tsx`
- `src/pages/Contact.tsx`
- `functions/api/lead-signal.ts`
- `src/lib/siteVersion.ts`
- `docs/system/master-task-register.md`

## Discovery Fields Preserved
`discoveryContext` canonical object persists:
- `fitCheckCompleted`
- `recommendedTier`
- `propertySize`
- `coverageExpectation`
- `recordingPreference`
- `monitoringPreference`
- `priorityConcerns`
- `entryPointCount`

## Recommendation Rule Summary
Deterministic recommendation remains local/frontend and non-AI. Existing fit-check recommendation output is used and normalized to `bronze|silver|gold|unknown` for propagation.

## Route Behavior
Discovery completion CTA now propagates contact-route context:
`/contact?vertical=home-security&tier=<tier>&recommended=<tier>&fit=complete` plus compact discovery query context values.

## Contact Display Behavior
Contact page now shows additive compact discovery summary block near selected package context when fit/recommendation context is present.

## Payload Propagation
Contact submit now sends optional `discoveryContext` inside canonical lead signal payload envelope (no alias fanout).

## Email + HubSpot Propagation
- Operator email: additive `Discovery Summary` lines.
- Customer acknowledgement: additive minimal fit/recommendation lines only.
- HubSpot note body: additive `Discovery Summary` lines.

## Protected Runtime Confirmation
No handler flow redesign; no requestId lifecycle changes; no stage/dedupe logic changes; no schema/pipeline writes added; no Stripe changes.

## Known Remaining Gaps
- Discovery context currently passed via query + payload; no dedicated durable storage migration in this bounded task.
- Proposal/quote generation context consumption intentionally deferred.

## Future Proposal Readiness
`discoveryContext` canonical payload object is now available for future quote/proposal consumers without schema expansion.

## Manual QA Checklist
1. Complete `/discovery?vertical=home-security` and verify Continue CTA lands on `/contact` with `tier/recommended/fit` context.
2. Verify contact discovery summary displays when context is present.
3. Submit contact and verify `/api/lead-signal` success.
4. Verify operator email discovery summary lines.
5. Verify customer email fit/recommendation lines (minimal).
6. Verify HubSpot note discovery summary lines.
7. Regression: direct `/contact?vertical=home-security&tier=silver` still works.
