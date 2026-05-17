# Deployment Validation SOP — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/deployment_validation.md`

Primary owner:
- WNYHS operators responsible for release validation and runtime health verification.

Secondary owner(s):
- Runtime/API maintainers for deployment diagnostics support.

## Purpose

Define the canonical deployment-validation process for WNY Home Security using confirmed repository/runtime contracts, with explicit UNKNOWN / NEEDS VERIFICATION markers where live-environment evidence is not confirmed.

## Applies To

- Cloudflare Pages deployment validation.
- Cloudflare Functions/API route validation (`/api/*`).
- Runtime contract verification for Cloudflare, Stripe, HubSpot, lead-signal, requestId, email routing/outbound, and scheduling ownership.
- Operator release readiness decisions.

## Authority

Governing docs:
- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`

Controlling context/Step alignment:
- `CTX-SCHED-MVP-REV01` with Step-SCHED-MVP controls for scheduling MVP tasks (including SCHED-IMPL002).

## Deployment Validation Philosophy

- Deployment must not rely on assumptions.
- Runtime contracts are authoritative operational references.
- Server-side verification is required for payment truth.
- Requested appointment ≠ confirmed appointment.
- Graceful degradation is preferred over silent failure.
- Partial sync visibility is required.
- UNKNOWN / NEEDS VERIFICATION items must remain documented until operator-verified.
- Deployment readiness requires operational validation, not only successful build completion.

## Pre-Deployment Validation

1. Governance + scope checks
   - Confirm QA001 is governance-authorized in Master Task Register.
   - Confirm deployment validation scope is documentation/runtime verification only.
   - Confirm no forbidden scope drift (no source-code/runtime behavior changes unless separately authorized).
2. Runtime contract review
   - Review all runtime contracts under `/docs/runtime` relevant to release.
3. Environment-variable presence validation (without exposing values)
   - Validate required variables are present for target environment(s).
   - Confirm production vs preview separation posture is reviewed.
4. Stripe/HubSpot/request tracing posture review
   - Stripe live/test separation reviewed.
   - HubSpot token-name ambiguity reviewed (`HUBSPOT_PRIVATE_APP_TOKEN` vs `HUBSPOT_ACCESS_TOKEN`).
   - requestId propagation expectations reviewed.
5. Repository and release hygiene
   - No unresolved merge conflicts.
   - Deployment scope/changelog documented.
   - Rollback/freeze posture reviewed.
6. Build gate
   - `npm run build` passes before deployment execution.

## Deployment Validation

During deployment execution, validate:

- Deployment command/process succeeds.
- Cloudflare Pages deploy succeeds.
- Functions/API deployment is successful for expected `/api/*` endpoints.
- Expected routes are reachable.
- No secret values are exposed in output/logs.
- Production domain target is correct.
- Build artifacts are valid for deployed revision.
- Logs/diagnostics are accessible for operator follow-up.

UNKNOWN / NEEDS VERIFICATION:
- Exact CI/CD automation behavior and branch promotion model.
- Confirmed rollback automation availability.

## Post-Deployment Validation

Validate immediately after deployment:

- Homepage (`/`) loads.
- QRLanding (`/qrlanding`) loads.
- `/api/lead-signal` endpoint is reachable.
- Stripe endpoints reachable (`/api/create-checkout-session`, `/api/verify-checkout-session`, `/api/stripe-webhook`).
- HubSpot sync path reachable when token is configured.
- Email notification path reachable when provider is configured.
- Scheduling request flow remains request-capture (no false confirmation claims).
- Scheduling durable storage binding `APPOINTMENT_REQUESTS_KV` is present in target runtime when production durability is required.
- requestId appears in response diagnostics where applicable.
- No fatal runtime errors observed in deployment/runtime logs.

## Runtime Smoke Tests

| Area | Smoke Test | Expected Result | Operator Verification Needed | Status |
|---|---|---|---|---|
| Cloudflare runtime | Open deployed `/` and `/qrlanding` | Pages/routes load without fatal runtime errors | Yes | PARTIAL |
| Lead signal | Submit safe test payload to `/api/lead-signal` | Structured response with `ok` and `requestId` plus status objects | Yes | PARTIAL |
| requestId propagation | Correlate requestId in API response + logs (+ downstream where available) | Cross-surface correlation available | Yes | PARTIAL |
| Stripe session creation | Execute test-mode checkout session creation path | Session created via server endpoint | Yes | PARTIAL |
| Stripe webhook delivery | Inspect webhook deliveries in Stripe dashboard | Signed webhook deliveries visible and verifiable | Yes | PARTIAL |
| HubSpot sync | Validate structured `hubspot` status and CRM record effects | Partial/full sync outcomes visible and diagnosable | Yes | PARTIAL |
| Email notification | Validate notification attempt + inbox receipt for test event | Delivery result visible; failures surfaced | Yes | PARTIAL |
| Scheduling request flow | Submit scheduling-request metadata through lead flow | Request state remains pending confirmation until operator action, then may transition to CONFIRMED with post-confirmation calendar write attempt | Yes | PARTIAL |

No deployment/smoke automation is claimed in this SOP unless separately proven and documented.

## Runtime Contract Verification Matrix

| Runtime Contract | Validation Required | Operator Verification Needed | Status |
|---|---|---|---|
| `/docs/runtime/cloudflare_env.md` | Deploy target, env presence, route/log reachability checks | Yes | PARTIAL |
| `/docs/runtime/stripe_runtime.md` | Server-side verification + webhook truth + test/live separation checks | Yes | PARTIAL |
| `/docs/runtime/resend_runtime.md` | Outbound provider config + recipient/audit path checks | Yes | PARTIAL |
| `/docs/runtime/cloudflare_email_routing.md` | Inbound alias/routing + destination confirmation checks | Yes | PARTIAL |
| `/docs/runtime/lead_signal_contract.md` | Endpoint payload/response + partial-sync visibility checks | Yes | PARTIAL |
| `/docs/runtime/request_id_contract.md` | requestId generation/propagation/correlation checks | Yes | PARTIAL |
| `/docs/runtime/hubspot_properties.md` | Property/enum + token naming verification | Yes | PARTIAL |
| `/docs/runtime/hubspot_sync_contract.md` | CRM sync-stage visibility + partial failure diagnostics checks | Yes | PARTIAL |
| `/docs/runtime/scheduling_ownership.md` | Requested-vs-confirmed boundary + operator ownership verification | Yes | PARTIAL |
| `/docs/runtime/google_calendar_runtime.md` | Read-only availability config + safe fallback behavior checks | Yes | PARTIAL |

## Stripe Validation

Required:

- Server-side verification only for payment truth.
- Webhook verification required; signed webhook is authoritative payment evidence.
- No client-side payment truth based on redirect alone.
- Test/live separation reviewed before release.
- Webhook delivery inspection in Stripe dashboard.

## HubSpot Validation

Required:

- Token variable verification (`HUBSPOT_PRIVATE_APP_TOKEN` / `HUBSPOT_ACCESS_TOKEN`).
- Property/enum verification against live schema.
- Partial sync verification and diagnostics review.
- requestId propagation verification in CRM-adjacent records where implemented.

## Lead Signal Validation

Required:

- Successful submission path to `/api/lead-signal`.
- Downstream notification visibility.
- Partial failure visibility (notification/hubspot status objects).
- requestId presence in responses/logs.

## Email Validation

Required:

- Outbound notification verification (Resend path when configured).
- Inbound routing verification (Cloudflare Email Routing aliases/destinations).
- Alias ownership verification.
- Stale/dangling destination checks.

## Scheduling Validation

Required:

- Requested vs confirmed distinction preserved.
- Operator ownership visibility preserved.
- Payment boundary visibility preserved (scheduling does not redefine payment truth).
- No unsupported automation claims.

## requestId / referenceId Validation

Required:

- requestId visibility in response/log flow.
- referenceId relationship verification where present.
- Mismatch detection between requestId/referenceId traces.
- Cross-system traceability checks (API/log/email/CRM where available).

## Failure / Escalation Procedure

Deployment stop conditions:

- Build fails.
- Required runtime contract validations fail critically.
- Stripe payment-truth posture cannot be verified.
- HubSpot sync behavior is ambiguous for critical flow.
- Secrets appear exposed.
- Runtime errors block core routes/endpoints.

Escalation posture:

1. Stop release progression.
2. Capture diagnostics evidence (Cloudflare/Stripe/HubSpot/Resend/requestId correlations).
3. Escalate to operators/runtime owners for manual verification.
4. If ambiguity remains unresolved, recommend rollback/freeze until verified.

## Rollback / Freeze Procedure

Confirmed posture:

- Rollback/freeze decisions are operator-owned.
- Deployment must be frozen when critical validation gates fail.

UNKNOWN / NEEDS VERIFICATION:

- Automated rollback capability in deployment platform.

Operational assumption until verified:

- Manual rollback posture is assumed pending verification of automation tooling.

## Diagnostics

Use these diagnostics surfaces during validation:

- Cloudflare deployment/build/runtime logs.
- Stripe dashboard events + webhook delivery logs.
- HubSpot runtime diagnostics from lead-signal response + CRM record checks.
- Resend delivery/event diagnostics.
- requestId correlation across API response/logs/email/CRM.
- Runtime contract cross-reference procedure:
  1. Identify failing area.
  2. Open corresponding runtime contract owner doc.
  3. Verify expected behavior + failure modes.
  4. Record UNKNOWN / NEEDS VERIFICATION gaps for operator follow-up.

## Validation Checklist

- [ ] Governance authorization confirmed (task ACTIVE).
- [ ] Runtime contracts reviewed.
- [ ] Env presence validated without exposing secrets.
- [ ] Build passed (`npm run build`).
- [ ] Cloudflare deploy + route reachability validated.
- [ ] Lead-signal smoke test executed.
- [ ] Stripe server-side/webhook validation performed.
- [ ] HubSpot sync validation performed.
- [ ] Email outbound + inbound validation performed.
- [ ] Scheduling request boundary validated (requested != confirmed).
- [ ] `APPOINTMENT_REQUESTS_KV` binding configured for durable scheduling state in deployment target.
- [ ] requestId/referenceId traceability validated.
- [ ] Critical unknowns reviewed by operator.
- [ ] Rollback/freeze posture reviewed.

## Release Readiness Gate

A deployment is **NOT** production-ready unless all of the following are true:

- Runtime contracts reviewed.
- Required validations passed.
- Unresolved critical UNKNOWN / NEEDS VERIFICATION items are reviewed and explicitly accepted by operator.
- No unsupported automation assumptions remain.
- Payment verification posture is validated server-side/webhook-authoritative.
- Scheduling ownership posture is validated.

## Change Procedure

1. Update this SOP when deployment validation process/ownership changes.
2. Cross-check related runtime contracts for boundary consistency.
3. Update `/docs/runtime/runtime_ownership_map.md` status when maturity changes.
4. Update `/docs/system/master-task-register.md` lifecycle entries for QA001.
5. Update `/docs/DOCUMENT_CATALOG.md` if catalog metadata changes.
6. Run required validation commands and preserve evidence.

## Related Docs

- `/docs/runtime/README.md`
- `/docs/runtime/runtime_contract_template.md`
- `/docs/runtime/runtime_ownership_map.md`
- `/docs/runtime/cloudflare_env.md`
- `/docs/runtime/resend_runtime.md`
- `/docs/runtime/cloudflare_email_routing.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/runtime/stripe_runtime.md`
- `/docs/runtime/hubspot_properties.md`
- `/docs/runtime/hubspot_sync_contract.md`
- `/docs/runtime/scheduling_ownership.md`
- `/docs/codex/QA_CHECKLIST.md`
- `/docs/specs/full-stack-spec.md`

## Last Verified

- Date (UTC): 2026-05-16
- Branch/commit: NEEDS VERIFICATION (record at merge/release time)
- Verified by: Codex execution for T-QA001-001
- Evidence:
  - Runtime contracts + governance docs audit.
  - Required QA001 documentation validation commands.
  - `npm run build` execution evidence.

## SCHED-IMPL001 Validation Addendum

When validating scheduling topology after SCHED-IMPL001, include:
- `GET /api/scheduling/availability` returns bounded NOT_IMPLEMENTED placeholder response.
- `POST /api/scheduling/request` returns bounded NOT_IMPLEMENTED placeholder response with pending-owner-confirmation posture.
- `POST /api/scheduling/confirm` returns bounded NOT_IMPLEMENTED placeholder response.

These checks confirm namespace/boundary readiness without introducing premature calendar booking, owner acceptance automation, SMS, reminders, or install scheduling automation.


## SCHED-IMPL003 Validation Addendum

Add the following checks for scheduling MVP request creation:

- Submit estimate intake and verify appointment request record is created with the same `requestId`.
- Verify returned `schedulingStatus` equals `PENDING_OWNER_CONFIRMATION`.
- Verify no runtime surface claims confirmed booking, no SMS/reminder automation, and no install scheduling automation.

## SCHED-IMPL004 Validation Addendum

Add the following checks for owner/manual confirmation behavior:

- Create a scheduling appointment request and verify initial state is `PENDING_OWNER_CONFIRMATION`.
- Submit `POST /api/scheduling/confirm` with valid `requestId` and `confirmedBy`.
- Verify transition to `CONFIRMED` happens only after owner action.
- Verify `confirmedBy` and `confirmedAt` are present after transition.
- Verify invalid `requestId` returns not-found behavior.
- Verify customer confirmation email attempt occurs only after owner confirmation and after post-confirmation calendar write attempt completion.
- Verify email failure does not roll back `CONFIRMED` status and does not remove calendar metadata.
- Verify confirmation email includes `requestId` and does not claim calendar invite attachment when `calendarEventHtmlLink` is unavailable.
- Verify no automatic booking/customer self-confirm behavior is introduced.
- Verify no calendar write occurs before owner confirmation.

## SCHED-IMPL008 Scheduling MVP Validation Matrix (REV02)

| Validation Area | Expected Behavior | Evidence Source | Status | Notes |
|---|---|---|---|---|
| Availability read | `GET /api/scheduling/availability` accepts valid `date`, `timezone`, `durationMinutes` and returns normalized busy/free windows with optional `requestId`. | `functions/api/scheduling/availability.ts`, `functions/api/scheduling/googleCalendarAvailability.ts`, `tests/googleCalendarAvailability.test.ts` | PASS | Valid input and response shape verified in focused scheduling tests. |
| Missing/invalid Google env fallback | Availability fails safely with unavailable response when required Google vars are missing/invalid or Google API fails. | `functions/api/scheduling/googleCalendarAvailability.ts`, `tests/googleCalendarAvailability.test.ts` | PASS | Returns safe unavailable response; no crash and no false confirmation claim. |
| Appointment request creation | `/api/lead-signal` and `/api/scheduling/request` create appointment request records when scheduling fields/requestId exist. | `functions/api/lead-signal.ts`, `functions/api/scheduling/request.ts`, `tests/appointmentRequestCreation.test.ts` | PASS | Record created with `requestId` correlation and request window fields. |
| Pending owner state | New requests start in `PENDING_OWNER_CONFIRMATION`. | `functions/api/scheduling/appointmentRequestStore.ts`, `functions/api/scheduling/request.ts`, `tests/appointmentRequestCreation.test.ts` | PASS | Pending status enforced at creation. |
| KV durability boundary | Store uses `APPOINTMENT_REQUESTS_KV` when bound and in-memory fallback only for local/test fallback. | `functions/api/scheduling/appointmentRequestStore.ts`, `docs/runtime/scheduling_ownership.md` | PASS | Deployment must include KV binding for durable production behavior. |
| Owner confirmation gate | `POST /api/scheduling/confirm` requires owner action (`confirmedBy`) and valid `requestId` before confirm transition. | `functions/api/scheduling/confirm.ts`, `tests/appointmentOwnerConfirmation.test.ts` | PASS | Invalid `requestId` fails safely (`REQUEST_NOT_FOUND`). |
| Confirmation audit fields | `confirmedBy` and `confirmedAt` persist after owner confirmation. | `functions/api/scheduling/appointmentRequestStore.ts`, `tests/appointmentOwnerConfirmation.test.ts` | PASS | Audit fields verified persisted. |
| Post-confirmation calendar write | Calendar event write is attempted only after transition to `CONFIRMED`. | `functions/api/scheduling/confirm.ts`, `functions/api/scheduling/googleCalendarEvents.ts`, `tests/appointmentOwnerConfirmation.test.ts` | PASS | No pre-confirm calendar write path found. |
| Calendar failure handling | Calendar failure does not roll back `CONFIRMED` status. | `functions/api/scheduling/confirm.ts`, `tests/appointmentOwnerConfirmation.test.ts` | PASS | Failure logged; confirmation preserved. |
| Post-confirmation email attempt | Customer confirmation email attempt happens only after owner confirmation and after calendar write attempt. | `functions/api/scheduling/confirm.ts`, `tests/appointmentOwnerConfirmation.test.ts` | PASS | Sequencing and safe copy behavior validated. |
| Email failure handling | Email failure does not roll back `CONFIRMED` status. | `functions/api/scheduling/confirm.ts`, `tests/appointmentOwnerConfirmation.test.ts` | PASS | Failure logged; confirmed state preserved. |
| requestId traceability | `requestId` remains traceable from intake through request storage and confirmation/email payload. | `functions/api/lead-signal.ts`, `functions/api/scheduling/request.ts`, `functions/api/scheduling/confirm.ts`, `tests/appointmentOwnerConfirmation.test.ts` | PASS | Included in API responses/store and confirmation email text. |
| Forbidden-scope implementation check | No runtime implementation of automatic booking, customer self-confirmation, SMS/reminders/install/dispatch flows in scheduling MVP path. | `rg` repo searches, scheduling runtime/source audit | PASS | Matches owner-confirmation-only posture; terms in docs may appear as forbidden/planned references. |
| Known baseline failures | Lint, full test, and api typecheck failures separated from scheduling regressions. | Command outputs in SCHED-IMPL008 execution log | PASS (classified) | Baseline: lint errors, `operatorNavbar.test.tsx` assertion failure, and API typecheck issues are unrelated to scheduling MVP. |


## SCHED-HARDEN001 Validation Addendum

- Verify repeated owner confirm calls do not create duplicate calendar events.
- Verify repeated owner confirm calls do not send duplicate customer confirmation emails.
- Verify durable appointment contact fields are used for confirmation email when confirm payload contact fields are omitted.
