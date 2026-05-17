# CRM-FIX001 Implementation — REV01

## Canonical QR Landing Intake Path Identified
Canonical path used as reference: frontend `sendLeadSignal(...)` -> `POST /api/lead-signal` -> Cloudflare Pages function `functions/api/lead-signal.ts` for requestId generation, lead summary normalization, pending-owner appointment request creation, notification handoff, and HubSpot API-layer orchestration.

## Intake Forms Audited
- `src/pages/QrLanding.tsx`
- `src/pages/Contact.tsx`
- `src/newsite/pages/NewSiteCallback.tsx`
- `src/newsite/pages/NewSiteOnSiteQuote.tsx`
- `src/newsite/pages/NewSiteContact.tsx` (navigation-only contact hub)

## API Paths Found
- `/api/lead-signal` (canonical)
- `/api/contact` (non-canonical for contact form; failing path)
- historical local-storage-only submit branches in newsite callback/on-site quote forms

## Broken/Divergent Paths Found
- Main contact form submitted to `/api/contact`, returning failure UX for intake submission.
- Newsite callback form did not call CRM path; only localStorage + mailto guidance.
- Newsite on-site quote form mixed localStorage + separate event flow; not normalized to the QR canonical payload/event shape.
- UI exposed potentially conflicting dual-submit posture (submit + email summary as parallel actions).

## Normalization Changes Made
- `Contact.tsx`: replaced `/api/contact` submit with canonical `sendLeadSignal` submit to `/api/lead-signal`.
- `NewSiteCallback.tsx`: replaced localStorage-only branch with canonical `sendLeadSignal` submission; preserved mailto as non-primary fallback on success screen.
- `NewSiteOnSiteQuote.tsx`: replaced localStorage + divergent submit branch with canonical `sendLeadSignal` submission payload.
- Removed explicit competing “Email intake summary” action from primary contact submit row.
- Added requestId-aware failure display for all normalized forms.

## Payload Fields Standardized
Normalized forms now send canonical core fields through `/api/lead-signal`:
- event
- source/sourceFamily
- landingRoute
- submittedAt
- contact (name/phone/email/address when collected)
- request (requestedHelp, requestDetails, preferredContactMethod, preferredEstimateTimeSlot)
- deal metadata where already present (newsite on-site quote)

## HubSpot / Lead-Signal Behavior
- HubSpot write path remains API-layer-only through `functions/api/lead-signal.ts`.
- No frontend direct HubSpot writes introduced.
- No HubSpot schema/property/pipeline edits introduced.

## Customer Success / Failure Behavior
- Success only shown when `/api/lead-signal` returns success.
- Failures show clear non-claiming retry message and include requestId when available.

## Remaining CRM Risks
- Optional-email forms still require synthesized fallback email when customer leaves email empty due existing canonical event validator requiring email.
- Broader event-model normalization across legacy non-QR event types remains a future hardening item.

## Validation Performed
- `npm run build`
- required `rg` CRM/API/intake scans
- `git diff -- src functions api server docs`
- `git status --short`
