# Protected Runtime Contract — REV01

Date (UTC): 2026-05-17  
Task: GOV-HARDEN002

## Purpose

Lock the current known-good production runtime so future work cannot drift protected intake, CRM sync, payment verification, or owner-confirmation scheduling boundaries without explicit scoped authorization.

## Protected Runtime Systems

The following systems are protected production runtime:

- `/api/lead-signal`
- HubSpot contact/deal/note/task sync
- Resend customer acknowledgement flow
- Resend operator notification flow
- `requestId` generation and propagation lifecycle
- Stripe webhook verification
- Stripe checkout/session verification
- Scheduling owner-confirmation flow
- HubSpot pipeline/stage assignment for intake
- Cloudflare env var contract for HubSpot stage assignment (`HUBSPOT_ESTIMATE_INITIAL_STAGE_ID`)

## Known-Good Locked State

- `/api/lead-signal` returns 200 in production intake validation.
- QR intake flow works.
- Package-aware contact intake works.
- Customer acknowledgement email sends.
- Operator notification email sends.
- HubSpot contact creation/update works.
- HubSpot deal creation works.
- HubSpot note creation works.
- HubSpot task creation works.
- `requestId` propagates through runtime and CRM context.
- Intake deal stage lands in `New Estimate Request`.
- `WNYHS Sales Pipeline` is canonical.
- Package tier and discovery context propagation is active.
- Visible site version reached `v1.0.47` after `FUNNEL-CLEANUP003`.

## Allowed Change Categories (Only With Scoped Task)

- Bug fixes
- Security fixes
- Operational blocker resolution
- Logging and diagnostics improvements
- Test coverage additions
- Additive context propagation
- Dedupe hardening
- Stage-alignment hardening

## Forbidden Changes Without Explicit Task Scope

- Refactor `/api/lead-signal`
- Change `requestId` lifecycle
- Change HubSpot contact/deal creation logic
- Change Resend delivery control flow
- Change Stripe verification logic
- Change scheduling authority model
- Add SMS/reminder systems
- Add autonomous booking
- Add new HubSpot schema/properties
- Introduce AI/proposal/PDF generation systems
- Alter customer-facing claims

## HubSpot Pipeline/Stage/Env Lock

- Canonical pipeline: `WNYHS Sales Pipeline`
- Pipeline internal ID: `2282258169`
- Initial intake stage label: `New Estimate Request`
- Initial intake stage internal ID: `3680633583`
- Cloudflare env var lock: `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID=3680633583`
- Runtime must use internal IDs, never labels.

## Required QA for Any Protected Runtime Touch

Any task that touches protected runtime must run:

1. `npm run build`
2. targeted runtime grep
3. relevant unit tests if present
4. one live post-deploy intake test

Live post-deploy intake test must verify:

- `/api/lead-signal` returns 200
- customer email received
- operator email received
- HubSpot contact/deal/note/task created or updated
- `requestId` visible
- deal stage = `New Estimate Request` (`3680633583`)

## Enforcement Rule

No protected runtime modification is allowed unless the controlling Step and an active task in `docs/system/master-task-register.md` explicitly authorize that exact change scope.
