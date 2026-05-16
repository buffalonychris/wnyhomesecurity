# HubSpot Properties Contract — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/hubspot_properties.md`

Primary owner:
- WNYHS operators maintaining CRM field governance and runtime documentation alignment.

Secondary owner(s):
- API maintainers for `functions/api/lead-signal.ts` and `api/_hubspot.ts` mapping behavior.

## Purpose

Define canonical HubSpot property and enum ownership boundaries used by WNYHS runtime integrations.

## Applies To

- API-mediated HubSpot writes via `/api/lead-signal`.
- Contact/deal property mapping in runtime server code.
- Runtime env-var/token naming for HubSpot auth.

## Authority

Governing docs:
- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`
- `/docs/crm/hubspot/hubspot_kb_rev03.md`

Controlling context/Step alignment:
- `CTX-STEP102-QRLANDING-REV01` (documentation-only runtime hardening under GOV004).

## Property Ownership Model

- This document is the canonical runtime owner doc for HubSpot properties used by repository code paths.
- `/docs/crm/hubspot/hubspot_kb_rev03.md` remains the locked architecture authority and controls allowed integration path/scope.
- This runtime document **derives from** REV03 and implementation evidence; it does not supersede REV03 architectural constraints.
- Future property additions/changes must be documented here and cross-checked against REV03 before implementation.

## Environment Variables

| Variable | Required | Environment | Purpose | Owner Doc | Verification Status | Notes |
|---|---|---|---|---|---|---|
| `HUBSPOT_PRIVATE_APP_TOKEN` | Conditional | Production (+ Preview if CRM-tested) | HubSpot auth token alias used by runtime helper/API paths. | `/docs/runtime/hubspot_properties.md` | CONFIRMED IN SOURCE | Present in `api/_hubspot.ts` and `functions/api/lead-signal.ts`. |
| `HUBSPOT_ACCESS_TOKEN` | Conditional | Production (+ Preview if CRM-tested) | Alternate HubSpot auth token alias used in lead-signal function. | `/docs/runtime/hubspot_properties.md` | CONFIRMED IN SOURCE | `functions/api/lead-signal.ts` supports fallback from PRIVATE_APP_TOKEN. |
| `NODE_ENV` | Runtime-default | Production + Preview | Controls diagnostics exposure in lead-signal response. | `/docs/runtime/cloudflare_env.md` | CONFIRMED IN SOURCE | Included for runtime behavior context. |
| `PUBLIC_SITE_URL` | UNKNOWN / NEEDS VERIFICATION | UNKNOWN / NEEDS VERIFICATION | Cross-runtime reference only. | `/docs/runtime/cloudflare_env.md` | NEEDS VERIFICATION | Not confirmed as HubSpot property dependency. |

## External Services

- HubSpot CRM API (`https://api.hubapi.com`).

## Inbound Flow

1. Lead payload enters `/api/lead-signal`.
2. Server normalizes/selects property values.
3. HubSpot contact/deal operations executed with token when configured.

## Outbound Flow

- Contact search/create/update.
- Deal search/create/update.
- Deal-to-contact association attempt.
- Note and task creation attempts.

## Data Contract

Confirmed repo-evidence fields mapped into HubSpot write payloads include core contact identity fields, QR attribution fields, consent summary fields, request/requestId metadata, and deal tracking fields (`wny_*` and standard HubSpot properties).

## Property Registry

Confirmed property names from repository source/docs:

- Contact/core: `email`, `firstname`, `lastname`, `phone`, `address`, `city`, `state`, `zip`, `lifecyclestage`, `hs_lead_status`.
- Contact/custom (confirmed in source): `wny_preferred_contact_method`, `wny_best_time_to_contact`, `wny_contact_notes`, `wny_preferred_walkthrough_window`, `wny_vertical_interest`, `wny_funnel_stage_current`, `wny_walkthrough_interest`, `wny_last_walkthrough_request_at`, `wny_first_landing_page`, `wny_first_touch_url`, `wny_last_touch_url`, `wny_first_touch_date`.
- Deal/custom confirmed by source/docs: `wny_quote_ref`, `dealname`, `dealstage`, `amount` plus additional `wny_*` fields used by lead-signal payload mapping.

UNKNOWN / NEEDS VERIFICATION:
- Full canonical list of every `wny_*` property currently active in production schema.
- HubSpot-side required/optional flags and type constraints per property.

## Enum Registry

Confirmed normalized enum-like values in source mapping logic:

- `wny_preferred_contact_method`: `sms`, `phone`, `email`, `any`, `unknown`.
- `wny_vertical_interest`: `home_security`, `unknown`.
- `wny_walkthrough_interest`: `requested`, `unknown`.
- `wny_funnel_stage_current`: `landing_viewed`, `quote_generated`, `unknown`.
- Time bucket mapping output: `anytime`, `morning`, `afternoon`, `evening`.

PARTIAL / NEEDS VERIFICATION:
- Whether each mapped value is fully allowed by current HubSpot enum property configuration.

## Token Naming / Environment Ownership

- Both `HUBSPOT_PRIVATE_APP_TOKEN` and `HUBSPOT_ACCESS_TOKEN` exist in repository references.
- `api/_hubspot.ts` reads `HUBSPOT_PRIVATE_APP_TOKEN` only.
- `functions/api/lead-signal.ts` reads `HUBSPOT_PRIVATE_APP_TOKEN || HUBSPOT_ACCESS_TOKEN`.
- Canonical single name is currently **UNKNOWN / NEEDS VERIFICATION** pending operator normalization decision.

## Failure Modes

- Missing HubSpot token.
- Wrong HubSpot token variable name set (token ambiguity risk).
- Invalid token / unauthorized HubSpot API response.
- Missing property in HubSpot schema.
- Invalid enum value for property.
- Contact write failure.
- Deal write failure.
- Association write failure.
- Note/task write failure.
- Partial success where some objects sync and others fail/skipped.

## Fallback Behavior

Confirmed:
- Property sanitization removes null/empty fields before submit.
- On property-level errors, lead-signal safe-set logic can remove failing property and retry for contact/deal writes.

UNKNOWN / NEEDS VERIFICATION:
- Operator policy for schema drift remediation windows.

## Diagnostics

- Cloudflare Pages Function logs with HubSpot stage/error metadata.
- `hubspot` object in `/api/lead-signal` response including stage/status/failingProperty/skippedProperties.
- HubSpot API status/category/message details.
- requestId correlation in logs and API responses.

## Validation Checklist

- [ ] Verify token variable naming policy (`HUBSPOT_PRIVATE_APP_TOKEN` vs `HUBSPOT_ACCESS_TOKEN`).
- [ ] Verify each documented property exists in HubSpot with expected type/enum.
- [ ] Verify property-level failure behavior returns diagnostics with `failingProperty` and `skippedProperties`.
- [ ] Verify no secrets/token values appear in docs/logs.
- [ ] Run `npm run build`.

## Change Procedure

1. Update this contract before any HubSpot property/enum mapping changes.
2. Reconcile with `/docs/crm/hubspot/hubspot_kb_rev03.md` and `/docs/runtime/hubspot_sync_contract.md`.
3. Update task lifecycle in `/docs/system/master-task-register.md` when scoped task completes.
4. Run required validation commands.

## Related Docs

- `/docs/crm/hubspot/hubspot_kb_rev03.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/runtime/cloudflare_env.md`
- `/docs/audits/qrlanding_crm_notification_inventory_rev01.md`

## Last Verified

- Date (UTC): 2026-05-16
- Branch/commit: NEEDS VERIFICATION (record at merge/release time)
- Verified by: Codex execution for T-RUNTIME006-001
- Evidence: Source/doc audit of `functions/api/lead-signal.ts`, `api/_hubspot.ts`, and runtime governance docs.
