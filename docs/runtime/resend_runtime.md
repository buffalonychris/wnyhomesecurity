# Resend Runtime Contract — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/resend_runtime.md`

Primary owner:
- WNYHS operators maintaining outbound email runtime configuration.

Secondary owner(s):
- Application maintainers for server/API lead notification behavior.

## Purpose

Define the canonical outbound email runtime contract for Resend usage in WNY Home Security, including ownership boundaries, env var references, expected flow, failure handling, diagnostics, and change governance.

This is documentation-only authority and does not change runtime behavior.

## Applies To

- Outbound server/API notifications using Resend.
- Lead-signal notification path in server API layer.
- Cloudflare runtime environments where outbound email is executed.
- Operational checks for recipient routing and audit-copy behavior.

## Authority

Governing docs:

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`

Email architecture references:

- `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md` (Step lineage/supporting reference)
- `/docs/audits/qrlanding_crm_notification_inventory_rev01.md` (current repo evidence)

## Outbound Email Model

Confirmed in repo docs:

- Resend is designated as outbound-only email provider model.
- API layer supports provider selection using `EMAIL_PROVIDER`.
- Lead-signal notifications can use Resend when provider selection is set accordingly.
- Internal notification recipient and audit recipient are env-configurable in API inventory docs.
- Scheduling owner-confirmation flow sends customer confirmation email through the same Resend API runtime path when `RESEND_API_KEY` and sender config are present.
- Scheduling confirmation copy must use request/owner-confirmed language and must not imply automatic booking, dispatch, or reminder automation.

UNKNOWN / NEEDS VERIFICATION:

- Whether all Step201-defined mail flows are currently implemented in this repository branch.
- Whether current production runtime is configured to use Resend as active provider at this time.

## Environment Variables

| Variable | Required | Environment | Purpose | Owner Doc | Verification Status | Notes |
|---|---|---|---|---|---|---|
| `RESEND_API_KEY` | Conditional (required when `EMAIL_PROVIDER` selects Resend) | Production + Preview (if email tested) | Authenticates outbound sends through Resend API. | `/docs/runtime/resend_runtime.md` | CONFIRMED IN DOCS | Must remain server-side secret; no value documented. |
| `EMAIL_PROVIDER` | Yes for provider routing behavior | Production (+ Preview if email tested) | Selects outbound email provider path used by API layer. | `/docs/runtime/resend_runtime.md` | CONFIRMED IN DOCS | Inventory indicates provider switching behavior exists. |
| `FROM_EMAIL` | UNKNOWN | UNKNOWN | Generic sender alias requested for runtime doc normalization. | `/docs/runtime/resend_runtime.md` | UNKNOWN / NEEDS VERIFICATION | Repo inventory references `RESEND_FROM_EMAIL`; `FROM_EMAIL` not confirmed in audited runtime files. |
| `TO_EMAIL` | UNKNOWN | UNKNOWN | Generic operator recipient alias requested for runtime doc normalization. | `/docs/runtime/resend_runtime.md` | UNKNOWN / NEEDS VERIFICATION | Repo inventory references `LEAD_SIGNAL_TO_EMAIL`; `TO_EMAIL` not confirmed in audited runtime files. |
| `SUPPORT_EMAIL` | UNKNOWN | UNKNOWN | Generic support mailbox alias. | `/docs/runtime/resend_runtime.md` | UNKNOWN / NEEDS VERIFICATION | `support@wnyhomesecurity.com` appears as documented default address reference in inventory, but variable alias not confirmed. |
| `ADMIN_EMAIL` | UNKNOWN | UNKNOWN | Generic admin mailbox alias. | `/docs/runtime/resend_runtime.md` | UNKNOWN / NEEDS VERIFICATION | `admin@wnyhomesecurity.com` appears in Step201 reply-to mapping, not validated as active env var alias in runtime inventory. |
| `PUBLIC_SITE_URL` | Conditional | Production (+ Preview as needed) | Canonical site URL for runtime-generated links/context. | `/docs/runtime/cloudflare_env.md` | CONFIRMED IN DOCS | Referenced in Cloudflare runtime contract variable table. |

Additional confirmed outbound-related variables in current inventory evidence:

- `RESEND_FROM_EMAIL`
- `LEAD_SIGNAL_TO_EMAIL`
- `LEAD_SIGNAL_AUDIT_EMAIL`

## External Services

- Resend outbound email API.
- Cloudflare Pages Functions runtime where API sends execute.
- Optional SMTP fallback provider path documented in inventory.

## Inbound Flow

Resend scope in this contract is outbound only.

- Inbound mail ownership is outside Resend runtime and belongs to Cloudflare Email Routing contract.
- Reference: `/docs/runtime/cloudflare_email_routing.md`.

## Outbound Flow

Documented outbound flow (repo-evidence level):

1. Client submits lead/request payload.
2. Server API (`/api/lead-signal`) validates and orchestrates.
3. API notification layer chooses provider based on `EMAIL_PROVIDER`.
4. If Resend path is active, server sends outbound notification using Resend auth and configured sender/recipient env values.
5. Result is logged/returned according to server API behavior.

UNKNOWN / NEEDS VERIFICATION:

- Exact production recipient distribution list and final sender identity currently configured.
- Whether BCC-style audit copy vs explicit duplicate send is used in all live flows.

## Data Contract

Confirmed notification payload fields in inventory docs include:

- `event`
- `timestampISO`
- `customerEmail`
- `referenceId`

UNKNOWN / NEEDS VERIFICATION:

- Complete payload schema for each submission category beyond listed inventory fields.

## Failure Modes

- Missing `RESEND_API_KEY` when Resend provider path is selected.
- Sender/domain not verified in Resend account.
- Recipient misconfigured (wrong, empty, or malformed target env values).
- Resend API failure (network/provider error, auth rejection, rate-limit, or service outage).
- Partial lead sync where email fails but another integration succeeds.
- Silent notification failure risk when errors are not surfaced to operators.
- Wrong production/preview value causing unexpected recipient routing.

## Fallback Behavior

Confirmed/allowed behavior from current docs:

- Provider selection supports non-Resend path (SMTP/stub patterns documented in inventory) when configured.
- Errors must not be treated as silent success in operational flows.

UNKNOWN / NEEDS VERIFICATION:

- Whether current production policy prefers hard-fail vs degraded-success for each email category.
- Whether alerting exists for notification failure events.

## Diagnostics

Operator-facing diagnostics to validate outbound email behavior:

- Inspect Cloudflare Pages Functions logs for `/api/*` request failures.
- Correlate request-level diagnostics using `requestId` when available in runtime logs/payloads.
- Check Resend dashboard/log events for provider-accepted/rejected sends.
- Execute controlled test lead submission behavior and verify expected operator notification arrival.
- Validate operator notification routing and audit recipient behavior.

UNKNOWN / NEEDS VERIFICATION:

- Standardized requestId field presence in every outbound notification log/event.

## Validation Checklist

- [ ] Confirm `EMAIL_PROVIDER` expected value in target environment (without exposing value).
- [ ] Confirm `RESEND_API_KEY` exists in environment when Resend path is active.
- [ ] Confirm sender variable(s) are present and mapped to verified identity.
- [ ] Confirm primary recipient and audit recipient variables are present and correct.
- [ ] Submit safe test lead and confirm operator notification delivery.
- [ ] Confirm no client/runtime secret exposure.
- [ ] Confirm failure path behavior is operator-visible (not silent).

## Change Procedure

1. Update this contract first for any outbound email ownership/flow changes.
2. Cross-check Cloudflare runtime and Cloudflare Email Routing contracts for boundary consistency.
3. If behavior/design scope changes are requested, ensure request is ACTIVE in Master Task Register before execution.
4. Run `npm run build` and required docs validation commands.
5. Update `/docs/system/master-task-register.md` task status only after successful documentation completion.

## Related Docs

- `/docs/runtime/runtime_contract_template.md`
- `/docs/runtime/runtime_ownership_map.md`
- `/docs/runtime/cloudflare_env.md`
- `/docs/runtime/cloudflare_email_routing.md`
- `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `/docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `/docs/specs/full-stack-spec.md`

## Last Verified

- Date (UTC): 2026-05-16
- Branch/commit: NEEDS VERIFICATION (record at merge/release time)
- Verified by: Codex execution for T-RUNTIME004-001
- Evidence:
  - Documentation audit of runtime/system/step/spec references in `docs/`.
  - Runtime-contract completion using `/docs/runtime/runtime_contract_template.md` structure.
