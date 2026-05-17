# FUNNEL-CLEANUP002 — Context Persistence + Intake Display (REV01)

## Purpose
Bounded hardening task to preserve package-tier context from funnel route parameters into intake display and existing lead-signal downstream context paths.

## Files changed
- `src/pages/Contact.tsx`
- `functions/api/lead-signal.ts`
- `src/lib/siteVersion.ts`
- `docs/system/master-task-register.md`
- `docs/audits/funnel_cleanup002_rev01.md`

## Route behavior
- Preserved canonical route behavior from FUNNEL-CLEANUP001:
  - `/contact?vertical=home-security&tier=bronze|silver|gold`
- No funnel route order or routing architecture changes were introduced.

## Tier display behavior
- Contact/intake page now conditionally shows `Selected package: Bronze|Silver|Gold` when query param `tier` is one of `bronze|silver|gold`.
- If `tier` is missing or invalid, no selected-package block is rendered.

## Payload propagation behavior
- Contact page now forwards validated selected tier in `deal.packageTier` on lead submission.
- Allowed values are normalized in runtime handling to: `bronze|silver|gold|unknown`.

## Email/HubSpot propagation behavior
- Added additive line in lead notification email body: `selected package: <tier>`.
- Added additive line in customer acknowledgement email body: `selected package: <tier>`.
- Added additive package context to HubSpot note body and contact note summary text.
- Added additive package context to QR detail summary used in existing HubSpot context fields.

## Protected runtime confirmation
- `/api/lead-signal` changes were minimal and additive only.
- No contact/deal create flow refactor.
- No requestId generation/propagation changes.
- No HubSpot schema/property/pipeline changes.
- No Stripe or scheduling confirmation logic changes.
- No email delivery control-flow behavior changes.

## Known remaining gap (deferred)
### FUNNEL-CLEANUP003 — Discovery Context Persistence
Deferred future scope (not implemented in this task):
- `discoverySource`
- `fitCheckCompleted`
- `recommendedTier`
- `selectedAnswers`
- `coverageNeed`
- `entryPointCount`
- `recordingNeed`
- `priorityConcerns`

## Manual QA checklist
1. `/contact?vertical=home-security&tier=bronze`
   - Shows `Selected package: Bronze`
   - Intake submit succeeds
   - Customer acknowledgement email includes package line
   - Operator notification email includes package line
   - HubSpot note includes selected package line
2. `/contact?vertical=home-security&tier=silver`
   - Shows `Selected package: Silver`
3. `/contact?vertical=home-security&tier=gold`
   - Shows `Selected package: Gold`
4. `/contact?vertical=home-security`
   - No selected-package block shown
5. Intake runtime protection checks
   - `/api/lead-signal` returns 200
   - Email sends continue under existing behavior
   - HubSpot contact/deal/note/task path remains intact
   - Deal still lands in New Estimate Request stage
