# LEAD-FIX001 Implementation REV01

- Canonical lead path confirmed: frontend `sendLeadSignal(...)` -> `/api/lead-signal` -> `functions/api/lead-signal.ts`.
- Producer audit coverage: package/fit/planner/quote/review/contact/QR/newsite callback/newsite on-site quote.
- Continuity gaps found: several lead submissions did not consistently include pre-intake funnel intelligence when present in existing browser storage.
- Changes made: `src/lib/hubspotLeadSignal.ts` now appends `funnelContext` using existing `kaecRetailFlow`, `newsite_quote_v1`, URL params, and route metadata before canonical submission.
- Preserved fields into lead signal (where available): requestId lifecycle via API response, vertical/source/route, selectedPackage/packageTier, fitCheckAnswers, recommendedTier, plannerSelections/plannerSummary, quoteSelections, quoteRef.
- Context/notes behavior: no HubSpot schema/property changes; extra continuity context is serialized through existing lead payload object for API-layer note/context handling.
- Operator visibility expectations: operators should see higher continuity in lead context notes where API formatting already consumes payload context.
- Remaining risks: legacy funnel paths that do not store rich state in `kaecRetailFlow` cannot emit unavailable fields.
- Validation performed: build + required grep/status/diff commands.
