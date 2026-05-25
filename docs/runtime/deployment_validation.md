# Deployment Validation SOP — QA001 REV02

## Owner

Canonical owner doc:
- `/docs/runtime/deployment_validation.md`

Primary owner:
- WNYHS operators running release validation before publish and before QR placard traffic expansion.

## Purpose

Define a repeatable deployment validation SOP with required evidence capture for build health, route availability, QRLanding attribution events, lead signal submission, requestId correlation, Cloudflare runtime expectations, protected Stripe/HubSpot boundaries, operator notifications, scheduling ownership checks, and release recommendation.

## Authority and Scope

Governing docs loaded:
- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`

Runtime contracts loaded:
- `/docs/runtime/qrlanding_runtime.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/cloudflare_env.md`
- `/docs/runtime/stripe_runtime.md`
- `/docs/runtime/hubspot_properties.md`
- `/docs/runtime/hubspot_sync_contract.md`
- `/docs/runtime/scheduling_ownership.md`

Boundaries:
- This SOP is governance/QA only.
- No runtime implementation authority is granted by this document.
- Stripe verification remains server-side/webhook-authoritative.
- HubSpot writes remain API-mediated through `/api/lead-signal` only.

## Release Validation Gate

A release should be blocked until all required checks are complete or explicitly risk-accepted by operator.

Release recommendation values:
- `GO`: Required checks pass and evidence complete.
- `GO WITH RISKS`: Non-blocking unknowns documented and accepted.
- `NO-GO`: Blocking failures, missing protected checks, or incomplete evidence.

## Pre-Deploy Checks

1. Confirm active task authorization in `/docs/system/master-task-register.md`.
2. Confirm scope remains bounded to intended release (no unapproved route/runtime/claims drift).
3. Confirm protected-system boundaries are unchanged unless explicitly authorized:
   - Stripe behavior
   - HubSpot schema/workflow
   - route architecture
   - regulated copy/claims
4. Review open incidents/known failures that affect release quality.
5. Confirm rollback contact/escalation owner is assigned for the release window.

## Local Build and Repository Health

Required checks before deployment:
- `npm run build`
- `git diff` scope audit for allowed files and bounded changes
- targeted `rg` audits for contract/event names and protected-system markers

If build fails:
- classify failure as pre-existing vs newly introduced
- attach logs in evidence
- block release unless operator risk-accepts with remediation plan

## Route Smoke Validation

Minimum smoke list:
- `/`
- `/qrlanding`
- required funnel transaction routes relevant to release scope

For each route record:
- HTTP status or successful render
- console/network anomalies
- whether behavior matches expected flow boundaries

## QRLanding Attribution Validation

Required checks:
1. `/qrlanding` loads successfully.
2. `qrlanding_view` fires once per page load/session entry as defined by runtime contract.
3. `estimate_form_started` fires once on first meaningful form interaction.
4. `estimate_form_submitted` is present in submission metadata path.
5. `eventName` values match the documented contract set.
6. `requestId` persists across the QRLanding session lifecycle.
7. `entryRoute` equals `/qrlanding` for QRLanding-origin sessions.
8. Submitted lead remains conversion boundary (view/start do not count as conversion completion).

## Lead Signal Validation (`/api/lead-signal`)

Required checks:
- lead submission returns expected response envelope
- request acceptance/failure behavior matches contract
- submission metadata includes QR attribution context where applicable
- no direct frontend/client write path to HubSpot exists

## requestId / Correlation Validation

Required checks:
- requestId is returned on submission response per contract
- same requestId appears in downstream diagnostic context where documented
- evidence captures requestId used for operator follow-up
- unresolved referenceId/requestId mapping ambiguities are explicitly logged

## Protected-System Checks

### Stripe Protected-System Checks

Confirm:
- no Stripe code changed unless task explicitly permits Stripe work
- no client-side payment confirmation authority was introduced
- payment truth remains webhook/server verification authoritative

### HubSpot Protected-System Checks

Confirm:
- no HubSpot schema/pipeline/workflow changes unless task explicitly permits
- no direct frontend/client HubSpot writes
- CRM write boundary remains `/api/lead-signal`

### Route + Claims Protected Checks

Confirm:
- no route changes unless task explicitly permits
- no forbidden claims/copy additions

## Email / Operator Notification Checks

Required checks:
- operator notification path is exercised for representative lead submission
- success/failure status is captured in evidence
- no secrets exposed in logs/screenshots/docs
- notification outcomes are recorded as delivered, skipped (not configured), or failed

## Scheduling Ownership Checks

Required checks:
- scheduling remains request-capture boundary unless separately authorized
- no false appointment confirmation language/behavior introduced
- scheduling metadata remains correlated to requestId for operator follow-up
- operator-confirmed state remains authoritative boundary for confirmed appointments

## Cloudflare Deployment / Runtime Checks

Required checks:
1. Build succeeds for deployable revision.
2. Cloudflare deployment URL is recorded.
3. Production URL is recorded when release promotes to production.
4. Runtime env-variable presence is validated only against documented runtime contracts.
5. No secret values are copied into release notes/evidence/log snippets.
6. Cloudflare analytics is interpreted as directional telemetry (not sole source of business truth).

## Post-Deploy Evidence Capture (Required Format)

Every release validation record must include:
- Date/time (UTC)
- Branch + commit SHA
- Environment (local/preview/production)
- Commands run
- Routes checked
- Event names observed
- requestId evidence
- lead submission evidence
- operator notification evidence
- known failures/unknowns
- final release recommendation (`GO`, `GO WITH RISKS`, `NO-GO`)

Suggested evidence template:

```md
## Release Validation Evidence
- Date/Time (UTC):
- Branch:
- Commit:
- Environment:

### Commands Run
- `npm run build`
- ...

### Route Checks
- `/`: pass/fail + notes
- `/qrlanding`: pass/fail + notes

### Event Validation
- `qrlanding_view`:
- `estimate_form_started`:
- `estimate_form_submitted`:
- `eventName contract match`:

### Correlation
- requestId:
- entryRoute observed:

### Lead + Notification
- lead submission status:
- operator notification status:

### Protected-System Confirmation
- Stripe unchanged:
- HubSpot unchanged:
- Route changes absent/authorized:
- Claims guardrails preserved:

### Cloudflare
- deployment URL:
- production URL (if applicable):
- env contract check:

### Known Failures / Unknowns
- ...

### Final Recommendation
- GO / GO WITH RISKS / NO-GO
```

## Rollback and Escalation Guidance

If blocking failures occur:
1. Set recommendation to `NO-GO`.
2. Freeze traffic expansion and publication actions.
3. Escalate with requestId/log evidence bundle.
4. Roll back to last known good deployment revision per Cloudflare release controls.
5. Open bounded follow-up task before remediation changes.

## Validation Dependencies / Unknowns

Known dependency notes (document-only status):
- Exact analytics tooling UI workflow for event-count verification may vary by environment and must be validated by operator.
- Any runtime doc gaps discovered in future validations must be logged here before procedural expansion.

## Change Control

- Update this SOP only through bounded QA/GOV tasks.
- Keep revisions additive and preserve historical reasoning.
- Do not use this doc to authorize runtime behavior changes.
