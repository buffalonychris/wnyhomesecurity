# QA CHECKLIST — QA001 REV02 (DEPLOYMENT VALIDATION)

Use this checklist before publishing and before expanding QR placard traffic.

## 1) Pre-Deploy Governance Gate

- [ ] Active bounded task is authorized in `/docs/system/master-task-register.md`.
- [ ] Scope is bounded and matches task authorization.
- [ ] Protected systems are identified (Stripe, HubSpot, routes, claims/copy).

## 2) Build Health

- [ ] `npm run build` passes.
- [ ] Any failing checks are documented as pre-existing vs introduced.

## 3) Route Availability Smoke

- [ ] `/` loads.
- [ ] `/qrlanding` loads.
- [ ] Any release-relevant funnel routes load.

## 4) QRLanding Attribution Validation

- [ ] `/qrlanding` load confirmed in target environment.
- [ ] `qrlanding_view` fires once per session entry/load as contracted.
- [ ] `estimate_form_started` fires once on first interaction.
- [ ] `estimate_form_submitted` appears in submission metadata.
- [ ] `eventName` values match runtime contract naming.
- [ ] `entryRoute` equals `/qrlanding` for QR sessions.
- [ ] submitted lead is treated as conversion boundary.

## 5) Lead Signal Validation

- [ ] submission path goes through `/api/lead-signal`.
- [ ] response envelope includes expected success/failure structure.
- [ ] submission metadata includes QR attribution context when applicable.

## 6) requestId / Correlation Validation

- [ ] requestId is returned for submitted lead requests.
- [ ] requestId persists across QRLanding submission lifecycle.
- [ ] requestId correlation evidence is captured for logs/notifications/CRM trace.

## 7) Protected-System Checks (Required)

### Stripe
- [ ] no Stripe code changed unless explicitly authorized.
- [ ] no client-side payment confirmation authority introduced.
- [ ] webhook/server-side verification remains authoritative.

### HubSpot
- [ ] no HubSpot schema/workflow changes unless explicitly authorized.
- [ ] no direct frontend/client HubSpot writes.
- [ ] CRM writes remain API-mediated via `/api/lead-signal`.

### Routes + Claims
- [ ] no route changes unless explicitly authorized.
- [ ] no forbidden claims/copy were introduced.

## 8) Email / Operator Notification Checks

- [ ] operator notification path validated with representative lead test.
- [ ] notification status captured (delivered/skipped/failed).
- [ ] no secret values exposed in logs/evidence artifacts.

## 9) Scheduling Ownership Checks

- [ ] scheduling remains request-capture unless separately authorized.
- [ ] no false appointment confirmation behavior/copy introduced.
- [ ] operator confirmation remains appointment truth boundary.

## 10) Cloudflare Deployment Checks

- [ ] build succeeded for deployed revision.
- [ ] deployment URL recorded.
- [ ] production URL recorded when applicable.
- [ ] environment variables validated only against documented runtime contracts.
- [ ] Cloudflare analytics treated as directional telemetry, not sole source of truth.

## 11) Evidence Capture (Required)

For each validation run capture:
- [ ] date/time (UTC)
- [ ] branch + commit
- [ ] environment
- [ ] commands run
- [ ] routes checked
- [ ] event names observed
- [ ] requestId evidence
- [ ] lead submission evidence
- [ ] operator notification evidence
- [ ] known failures/unknowns
- [ ] final recommendation (`GO`, `GO WITH RISKS`, `NO-GO`)

## 12) Rollback / Escalation Trigger

- [ ] Any blocking failure sets recommendation to `NO-GO`.
- [ ] Rollback/escalation owner identified.
- [ ] Follow-up bounded task created before remediation changes.
