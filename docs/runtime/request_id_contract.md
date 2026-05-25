# requestId Contract — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/request_id_contract.md`

Primary owner:
- WNYHS operators and maintainers responsible for lead-event traceability.

Secondary owner(s):
- API maintainers for `/api/lead-signal` response envelope and diagnostics.

## Purpose

Define canonical request/correlation identifier behavior for lead-signal flow, including generation, propagation boundaries, diagnostics usage, and failure handling.

This is documentation-only authority and does not change runtime behavior.

## Applies To

- `requestId` generated in `functions/api/lead-signal.ts`.
- `requestId` surfaced to QRLanding client and failure UI.
- `requestId` usage in lead notification content and HubSpot payload fields where implemented.

## Authority

Governing docs:

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`

Integration references:

- `/docs/runtime/lead_signal_contract.md`
- `/docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `/docs/codex/QA_CHECKLIST.md`

## Identifier Model

Confirmed in source:

- `requestId` is server-generated inside `functions/api/lead-signal.ts` via `createRequestId()`.
- Format is `lead_${Date.now()}_${random6}` (timestamp + random suffix).
- `requestId` is generated before request-method and payload validation, so both success and failure responses can include it.
- `requestId` appears in:
  - API response (`ok:true/false`)
  - Resend notification text payload (`requestId: ...`)
  - HubSpot fields/notes/tasks/deal naming in lead-signal function flow
  - Server logs for lead-signal warnings/errors
  - QRLanding failure state display path (`setFailureRequestId`)

UNKNOWN / NEEDS VERIFICATION:

- Global uniqueness guarantees across concurrent/edge regions beyond current generation logic.
- Whether any other endpoints generate/consume the same requestId format.
- Scheduling request/confirm persistence lookup is now durable-ready through Cloudflare KV when configured.

## Environment Variables

| Variable | Required | Environment | Purpose | Owner Doc | Verification Status | Notes |
|---|---|---|---|---|---|---|
| `NODE_ENV` | Runtime-default | Production + Preview | Controls whether diagnostics object is returned publicly. | `/docs/runtime/cloudflare_env.md` | CONFIRMED IN SOURCE | In production mode diagnostics field is omitted. |
| `RESEND_API_KEY` | Conditional | Production (+ Preview if email tested) | Required for propagation of requestId into actual outbound emails. | `/docs/runtime/resend_runtime.md` | CONFIRMED IN SOURCE | If missing, notification becomes `skipped`. |
| `HUBSPOT_ACCESS_TOKEN` | Conditional | Production (+ Preview if CRM-tested) | Required for propagation into HubSpot objects through sync path. | `/docs/crm/hubspot/hubspot_kb_rev03.md` | CONFIRMED IN SOURCE | Used via HubSpot request helper. |
| `HUBSPOT_PRIVATE_APP_TOKEN` | Conditional | Production (+ Preview if CRM-tested) | Alternate/preferred HubSpot token alias. | `/docs/crm/hubspot/hubspot_kb_rev03.md` | CONFIRMED IN SOURCE | Alias normalization deferred to HubSpot contracts. |
| `APPOINTMENT_REQUESTS_KV` | Conditional (required for durable production scheduling state) | Production + Preview | Durable scheduling appointment-request storage keyed by requestId. | `/docs/runtime/scheduling_ownership.md` | CONFIRMED IN SOURCE | Used by scheduling request/confirm APIs and lead-signal scheduling capture path. |

## External Services

- Cloudflare Pages Functions for request handling and logging.
- Resend for outbound notification correlation visibility.
- HubSpot for downstream CRM correlation visibility.

## Inbound Flow

1. POST arrives at `/api/lead-signal`.
2. Server generates `requestId` immediately.
3. Request validation executes; failures include same `requestId` in response.

## Outbound Flow

1. Success/failure API response includes `requestId`.
2. Notification attempt includes `requestId` in email body text.
3. HubSpot sync path embeds `requestId` in selected fields/notes/deal name/task body.
4. Client (QRLanding) stores/displays `requestId` on failure states.

## Data Contract

Confirmed requestId-adjacent fields in current flow:

- Response: `requestId`
- Notification payload: `requestId`, `event`, `timestampISO`, `customerEmail`
- Potential external correlation field: `referenceId` exists in inventory/docs and payment lead-signal caller context.

UNKNOWN / NEEDS VERIFICATION:

- Canonical cross-route contract for `referenceId` outside QRLanding flow.

## Relationship Between requestId and referenceId

Confirmed:

- `requestId` is server-generated in lead-signal function.
- `referenceId` appears in inventory documentation/email payload references and in non-QR lead-signal caller usage.

UNKNOWN / NEEDS VERIFICATION:

- Whether `referenceId` is always client-generated, optional, or mapped from quote/deal identifiers.
- Whether `referenceId` must equal, contain, or remain independent from `requestId`.
- Whether user-facing references should display `requestId`, `referenceId`, or both.

## Failure Modes

- Missing requestId in API response (regression risk).
- Duplicate requestId collision risk from timestamp/random generator.
- Mismatch between requestId and referenceId across systems.
- requestId not propagated to email when notification fails/skips.
- requestId not propagated to HubSpot when token missing or HubSpot sync fails.
- requestId not visible in diagnostics/logs due to logging/observability gaps.
- User-facing reference not matching operator-visible reference (requestId vs referenceId ambiguity).

## Fallback Behavior

Confirmed behavior:

- Even when response is `ok:false`, requestId is still returned.
- Notification and HubSpot paths can fail independently while response still preserves requestId.

UNKNOWN / NEEDS VERIFICATION:

- Whether manual operator procedure exists to reconcile failed downstream propagation using only API response requestId.
- Whether duplicate requestId handling exists beyond best-effort randomization.

## Diagnostics

- Capture requestId from API response payload.
- Check Cloudflare lead-signal logs for matching requestId entries.
- Verify requestId presence in Resend sent message body when notification status is `sent`.
- Verify requestId presence in HubSpot notes/deal/task/contact properties when sync succeeds.
- Validate QRLanding failure UI surfaces requestId.
- Compare requestId vs any referenceId in correlated records to detect drift.

## Validation Checklist

- [ ] Test lead submission creates/returns `requestId`.
- [ ] requestId appears in server logs.
- [ ] requestId appears in email when notification is expected.
- [ ] requestId appears in HubSpot when sync is expected.
- [ ] Partial sync outcomes still preserve requestId in API response.
- [ ] Duplicate-submission behavior is understood and documented.
- [ ] No secrets are exposed.
- [ ] `npm run build` passes.

## Change Procedure

1. Update this contract before changing requestId generation or propagation rules.
2. Update `lead_signal_contract.md` if payload or diagnostics envelope changes.
3. Keep referenceId relationship section explicit; mark unknowns until verified evidence exists.
4. Run required validation commands and document evidence.
5. Update task lifecycle in master task register after successful validation.

## Related Docs

- `/docs/runtime/runtime_contract_template.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/runtime_ownership_map.md`
- `/docs/runtime/resend_runtime.md`
- `/docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `/docs/codex/QA_CHECKLIST.md`

## Last Verified

- Date (UTC): 2026-05-16
- Branch/commit: NEEDS VERIFICATION (record at merge/release time)
- Verified by: Codex execution for T-RUNTIME005-001
- Evidence:
  - Source audit of `functions/api/lead-signal.ts` and `src/pages/QrLanding.tsx` for generation and propagation points.

## SCHED-IMPL001 requestId Boundary Note

SCHED-IMPL001 introduces additive scheduling namespace placeholders under `/api/scheduling/*` for future scheduling implementation tasks.

No requestId generation behavior changed in this task:
- `requestId` remains generated by `/api/lead-signal`.
- Scheduling placeholder endpoints do not introduce new requestId contract semantics yet.


## SCHED-IMPL003 requestId Correlation Update

- `requestId` now correlates to a canonical appointment request record created at intake time in API runtime code.
- The appointment request record stores `requestId`, preferred estimate window metadata, and `PENDING_OWNER_CONFIRMATION` scheduling status.
- No change to requestId generation algorithm was introduced.


## SCHED-HARDEN001

- Confirmation endpoint now preserves original `confirmedBy`/`confirmedAt` on idempotent retries.
- `requestId` remains the correlation key across request creation and idempotent confirmation responses.

## RUNTIME008 Attribution Alignment Addendum

- QR campaign attribution documentation now defines the expected event chain: `qrlanding_view` → `estimate_form_started` → `estimate_form_submitted`.
- `requestId` remains authoritative only when generated by `/api/lead-signal` at submission time.
- `entryRoute` value `/qrlanding` is attribution context and should be retained where available for reporting joins.
- This addendum is documentation-only and does not change runtime requestId generation behavior.

## RUNTIME009 QRLanding Attribution requestId Addendum

- QRLanding now creates/persists a session-scoped runtime request identifier in browser `sessionStorage` (`qrlanding_request_id_v1`) for bounded attribution events.
- This runtime request identifier is included in QRLanding attribution event payload metadata (`qrlanding_view`, `estimate_form_started`, `estimate_form_submitted`) as `requestId`.
- Canonical server authority remains unchanged: `/api/lead-signal` still generates the authoritative server `requestId` used for backend correlation and responses.
- This addendum is additive and does not modify server requestId generation behavior.


## RUNTIME010 requestId Attribution Validation Addendum

Distinction for QR attribution runtime documentation:

- Client QR attribution `requestId` is a session-scoped correlation identifier used for directional funnel telemetry.
- Server authoritative `requestId` is generated by `/api/lead-signal` and remains the backend source of truth for lead request correlation.
- Lead submission lifecycle authority remains at submission time; attribution events before submission are directional and must not be interpreted as CRM identity.

Validation expectations for future implementation:

- Preserve client attribution `requestId` continuity through `qrlanding_view` → `estimate_form_started` → `estimate_form_submitted` when available.
- Do not treat missing optional attribution metadata as a lead-submission failure condition.
- Keep server-generated `requestId` semantics unchanged and authoritative for API response/log correlation.

This addendum is documentation-only and does not modify requestId generation or runtime behavior.
