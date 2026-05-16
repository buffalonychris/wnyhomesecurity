# HubSpot Sync Contract — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/hubspot_sync_contract.md`

Primary owner:
- WNYHS operators owning CRM sync runtime observability and policy.

Secondary owner(s):
- API maintainers for `/api/lead-signal` HubSpot orchestration path.

## Purpose

Define canonical HubSpot sync runtime behavior and integration boundaries for WNYHS.

## Applies To

- API lead intake sync path at `/api/lead-signal`.
- Contact/deal/note/task/association sync attempts performed by server runtime.

## Authority

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`
- `/docs/crm/hubspot/hubspot_kb_rev03.md`

Controlling context/Step alignment:
- `CTX-STEP102-QRLANDING-REV01`; documentation-only runtime hardening.

## HubSpot Sync Runtime Model

Confirmed evidence:
- HubSpot sync is triggered during POST processing in `/api/lead-signal`.
- CRM writes are server/API mediated; frontend does not directly call HubSpot.
- Contact creation/update is attempted.
- Deal creation/update is attempted.
- Deal-to-contact association is attempted.
- Note and task creation are attempted (status fields tracked in response object).
- Failures are represented in structured `hubspot` status object with stage/error metadata.
- Partial sync is represented by per-stage status fields and skippedProperties list.
- `requestId` is generated server-side and propagated in notes/detail summaries and response.

UNKNOWN / NEEDS VERIFICATION:
- Canonical `referenceId` propagation behavior and whether it is distinct from `requestId` in all downstream flows.

## Environment Variables

| Variable | Required | Environment | Purpose | Owner Doc | Verification Status | Notes |
|---|---|---|---|---|---|---|
| `HUBSPOT_PRIVATE_APP_TOKEN` | Conditional | Production (+ Preview if CRM-tested) | Primary HubSpot API auth token used by runtime. | `/docs/runtime/hubspot_sync_contract.md` | CONFIRMED IN SOURCE | Used in both helper/function paths. |
| `HUBSPOT_ACCESS_TOKEN` | Conditional | Production (+ Preview if CRM-tested) | Alternate HubSpot API auth token alias (lead-signal fallback). | `/docs/runtime/hubspot_sync_contract.md` | CONFIRMED IN SOURCE | Canonical naming unresolved. |
| `PUBLIC_SITE_URL` | UNKNOWN / NEEDS VERIFICATION | UNKNOWN / NEEDS VERIFICATION | Included for runtime table completeness. | `/docs/runtime/cloudflare_env.md` | NEEDS VERIFICATION | Not confirmed as HubSpot sync dependency. |
| `NODE_ENV` | Runtime-default | Production + Preview | Controls diagnostics exposure for lead-signal response. | `/docs/runtime/cloudflare_env.md` | CONFIRMED IN SOURCE | Non-production includes extra diagnostics block. |

## External Services

- HubSpot CRM API.
- Cloudflare Pages Functions runtime (execution host).

## Inbound Flow

1. Client sends lead payload to `/api/lead-signal`.
2. Server validates payload and generates `requestId`.
3. HubSpot sync branch executes if token configured.

## Outbound Flow

1. Search/create/update contact.
2. Search/create/update deal.
3. Associate deal-contact.
4. Create note/task with context metadata.
5. Return structured hubspot status in API response.

## Data Contract

- Sync receives normalized lead/contact/request payload from lead-signal contract.
- Sync returns `hubspot` object with `configured`, `attempted`, `status`, per-stage statuses, and error metadata (`errorCode`, `httpStatus`, `hubspotCategory`, `hubspotMessage`, `failingProperty`, `skippedProperties`).

## Sync Operation Boundaries

- Lead signal ownership: input validation, requestId, orchestration envelope.
- HubSpot CRM ownership: object persistence/schema/API acceptance.
- Resend/email ownership: notification delivery path and provider behavior.
- Stripe/payment ownership: webhook-authoritative payment state, out of HubSpot sync scope.
- Scheduling ownership: request-capture metadata only unless separately authorized.
- Dashboard/operator workflow ownership: manual verification/remediation of sync outcomes.

## Partial Sync Behavior

Confirmed:
- Response includes granular hubspot stage statuses enabling partial success visibility.
- Property-level failures can be skipped and retried for remaining properties in safe-set logic.

UNKNOWN / NEEDS VERIFICATION:
- Whether any automated retry queue exists beyond in-request property fallback.
- Operator-defined SLA for partial-sync remediation.

## Failure Modes

- Missing HubSpot token.
- Wrong HubSpot token variable name.
- Invalid token.
- Missing property.
- Invalid enum value.
- Contact creation/update/search failure.
- Deal creation/update/search failure.
- Note/task creation failure.
- Association failure.
- Partial sync success.
- Duplicate contact risk (email match behavior depends on existing CRM state).
- requestId/referenceId not propagated consistently.
- HubSpot API rate/error response.
- Silent CRM failure risk if diagnostics are not monitored.

## Fallback Behavior

Confirmed:
- Sync branch skipped when token missing (`configured:false`, attempted false/skipped states).
- Per-property fallback removes failing property during contact/deal set attempts.

UNKNOWN / NEEDS VERIFICATION:
- Global retry/backoff policy for transient HubSpot API errors.
- Dashboard-based escalation workflow definitions.

## Diagnostics

- Cloudflare Pages Function logs for lead-signal/HubSpot errors.
- Lead-signal response `hubspot` object.
- requestId correlation between response and logs.
- HubSpot API HTTP status/category/message inspection.
- HubSpot contact/deal lookup by email/quote reference.
- Property/enum validation against configured schema.
- Partial sync status review through response object and operator checks.
- Dashboard/operator verification of final CRM records.

## Validation Checklist

- [ ] Test lead submission returns structured `hubspot` status object.
- [ ] Verify missing-token behavior reports configured/attempted/skipped clearly.
- [ ] Verify contact/deal association and note/task stages are surfaced in status.
- [ ] Verify failing property diagnostics include `failingProperty` and `skippedProperties` when triggered.
- [ ] Verify requestId appears in response and log correlation path.
- [ ] Run `npm run build`.

## Change Procedure

1. Update this contract before any HubSpot sync runtime behavior changes.
2. Confirm alignment with REV03 and lead-signal/requestId contracts.
3. Update runtime ownership map status if contract maturity changes.
4. Update Master Task Register lifecycle state after successful completion/validation.

## Related Docs

- `/docs/runtime/hubspot_properties.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/runtime/cloudflare_env.md`
- `/docs/crm/hubspot/hubspot_kb_rev03.md`
- `/docs/audits/qrlanding_crm_notification_inventory_rev01.md`

## Last Verified

- Date (UTC): 2026-05-16
- Branch/commit: NEEDS VERIFICATION (record at merge/release time)
- Verified by: Codex execution for T-RUNTIME006-001
- Evidence: Source/doc audit of lead-signal HubSpot sync stages and runtime governance docs.
