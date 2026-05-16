# Stripe Runtime Contract — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/stripe_runtime.md`

Primary owner:
- WNYHS operators maintaining Stripe runtime configuration and webhook operations.

Secondary owner(s):
- Application maintainers for `functions/api/create-checkout-session.ts`, `functions/api/verify-checkout-session.ts`, and `functions/api/stripe-webhook.ts`.

## Purpose

Define the canonical Stripe runtime/payment contract for WNY Home Security, including ownership boundaries, server-side verification requirements, webhook expectations, environment variable ownership, diagnostics, failure handling, and controlled change procedure.

This is documentation-only authority and does not change runtime behavior.

## Applies To

- Stripe checkout session creation via `/api/create-checkout-session`.
- Stripe checkout session verification via `/api/verify-checkout-session`.
- Stripe webhook handling via `/api/stripe-webhook`.
- Cloudflare Pages Functions runtime hosting Stripe API endpoints.
- Payment/deposit status truth boundaries and downstream handoff expectations.

## Authority

Governing docs:

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`

Controlling context/Step alignment:

- Current context: `CTX-STEP102-QRLANDING-REV01`.
- Runtime hardening authority: GOV004 documentation-only authorization in `step-current.md`.
- Stripe implementation behavior remains protected; this contract documents it only.

## Stripe Runtime Model

Confirmed in repository evidence:

- Stripe checkout session creation endpoint exists at `functions/api/create-checkout-session.ts` and is consumed from `/api/create-checkout-session`.
- Stripe checkout session verification endpoint exists at `functions/api/verify-checkout-session.ts` and checks Stripe session state server-side.
- Stripe webhook endpoint exists at `functions/api/stripe-webhook.ts`, with docs naming `/api/stripe-webhook` and production URL `https://wnyhomesecurity.com/api/stripe-webhook`.
- Cloudflare Pages Functions dependency is confirmed (`/functions` maps to `/api/*`).
- `create-checkout-session` includes Stripe metadata fields for payment context (`vertical`, `tier`, `payment_type`, `deposit_percent`, `total_cents`, `deposit_cents`, plus `quoteRef` in alternate path).
- Deposit assumptions are implemented as 50% in checkout-session creation logic in current repo paths.

UNKNOWN / NEEDS VERIFICATION:

- Which payment flow is currently authoritative in production across legacy `/payment` versus `/newsite/home-security/*` user journeys.
- Whether `/api/stripe/create-checkout-session` and `/api/stripe/verify-session` aliases are actively deployed or legacy references only.
- Whether webhook processing is currently updating downstream systems in production exactly as documented.
- Whether customer confirmation relies only on server verification route or additionally on webhook-confirmed state in all flows.
- Canonical requestId/referenceId linkage for Stripe payment events.

## Environment Variables

| Variable | Required | Environment | Purpose | Owner Doc | Verification Status | Notes |
|---|---|---|---|---|---|---|
| `STRIPE_PUBLISHABLE_KEY` | Yes (for frontend checkout initiation) | Production + Preview | Frontend Stripe initialization gate for checkout start. | `/docs/stripe-cloudflare.md` | CONFIRMED IN DOCS + SOURCE USAGE | Used in payment UI gating behavior; value not documented. |
| `STRIPE_SECRET_KEY` | Yes | Production + Preview | Server-side Stripe API authentication for session create/verify calls. | `/docs/stripe-cloudflare.md` | CONFIRMED IN DOCS + SOURCE | Required by `_stripe.ts`; missing value throws runtime error. |
| `STRIPE_WEBHOOK_SECRET` | Yes | Production + Preview | Webhook signature verification for `/api/stripe-webhook`. | `/docs/stripe-cloudflare.md` | CONFIRMED IN DOCS + SOURCE | Must remain server-side secret; never exposed. |
| `PUBLIC_SITE_URL` | UNKNOWN / NEEDS VERIFICATION | UNKNOWN / NEEDS VERIFICATION | Canonical URL variable tracked across runtime contracts. | `/docs/runtime/cloudflare_env.md` | NEEDS VERIFICATION | Not directly referenced in Stripe function files audited here. |
| `NODE_ENV` | Runtime-default | Production + Preview | Runtime mode flag (cross-runtime observability/behavior context). | `/docs/runtime/cloudflare_env.md` | CONFIRMED IN REPO (GLOBAL) | Stripe files do not directly gate by `NODE_ENV` in audited functions. |
| `HUBSPOT_PRIVATE_APP_TOKEN` | Conditional (webhook downstream update path) | Production (+ Preview if CRM tested) | Token used by webhook for HubSpot deal update attempt. | `/docs/crm/hubspot/hubspot_kb_rev03.md` | CONFIRMED IN SOURCE | Downstream dependency only; Stripe contract does not redefine HubSpot ownership. |

## External Services

- Stripe API (`https://api.stripe.com/v1`) via server-side fetch helper.
- Stripe webhook delivery/signing infrastructure.
- Cloudflare Pages Functions runtime.
- HubSpot API only as downstream effect from webhook logic (boundary reference).

## Inbound Flow

1. Client requests `/api/create-checkout-session` with package/payment context.
2. Server uses `STRIPE_SECRET_KEY` to create Stripe checkout session.
3. Stripe redirects customer to hosted checkout URL.
4. Stripe returns user to success/cancel URL after checkout completion/cancel action.
5. Stripe sends webhook event to `/api/stripe-webhook`.
6. Server verifies webhook signature using `STRIPE_WEBHOOK_SECRET` before trust.

## Outbound Flow

1. Server-side calls to Stripe `/checkout/sessions` for create and retrieval.
2. Server returns checkout session id/url to client during create flow.
3. Server-side verification endpoint returns payment status and selected session fields.
4. Webhook handler may trigger downstream HubSpot deal update for deposit status when `checkout.session.completed` with `metadata.quoteRef` is present.

## Data Contract

Confirmed checkout/create and verify data points in repository evidence:

- Checkout creation request/derived values: `amountCents`, `quoteRef`, `tier`, `tierLabel`, `isNewSite`, `customerEmail`, `successUrl`, `cancelUrl`.
- Stripe session create mode: `payment`.
- Metadata keys observed:
  - `vertical`
  - `tier`
  - `payment_type`
  - `deposit_percent`
  - `total_cents`
  - `deposit_cents`
  - `quoteRef`
- Verification response fields observed from `/api/verify-checkout-session`:
  - `verified`
  - `session_id`
  - `payment_status`
  - `status`
  - `amount_total`
  - `currency`
  - `metadata`
- Webhook event field usage includes `event.type`, `event.data.object.id`, and `event.data.object.metadata.quoteRef`.

UNKNOWN / NEEDS VERIFICATION:

- Canonical payment intent id usage in downstream systems.
- Canonical customer email persistence path for every checkout variant.
- Canonical referenceId/requestId correlation attached to Stripe session lifecycle.

## Payment / Deposit Boundaries

- Stripe owns: hosted checkout payment processing, payment status primitives, webhook event emission.
- Stripe does not own: lead capture authority, scheduling authority, CRM schema authority, outbound email policy authority.
- Lead-signal owns: `/api/lead-signal` intake/orchestration and requestId lifecycle boundaries.
- Scheduling owns: post-payment scheduling capture/operations boundaries (see scheduling runtime contract once authored).
- HubSpot owns: CRM object model and schema constraints under REV03; writes remain API-mediated policy boundary.
- Email owns: outbound notification delivery boundaries under Resend runtime contract.

## Webhook Verification Rules

- Webhook verification must be server-side only.
- `STRIPE_WEBHOOK_SECRET` must never be exposed client-side or in documentation output.
- Client-visible success page state cannot be treated as authoritative payment truth.
- Payment/deposit completion must be established from trusted server-side evidence (Stripe API verification and/or validated webhook event).
- If any production flow currently treats redirect completion as authoritative without server verification, that is UNKNOWN / NEEDS VERIFICATION and must be remediated only by future authorized implementation task.

## Server-Side Verification Requirements

- Stripe API calls requiring secret key must execute only in server runtime.
- Checkout session verification (`/api/verify-checkout-session`) must remain server-side.
- Webhook signature validation must occur before processing event payload.
- Payment truth for operational state transitions must rely on server-verified Stripe evidence, not client redirect query parameters alone.

## Downstream Integration Boundaries

- Stripe contract may reference downstream updates but does not redefine HubSpot schema/semantics.
- Any CRM state mutation tied to payment must remain bounded by governance rules and active Step/task authorization.
- Stripe contract does not redefine scheduling unlock policy; it only documents observed payment verification touchpoints.
- Lead-signal and requestId contracts remain canonical for lead/event correlation outside Stripe session identifiers.

## Failure Modes

- Missing `STRIPE_SECRET_KEY`.
- Missing `STRIPE_WEBHOOK_SECRET`.
- Publishable/secret key mismatch.
- Live/test key mismatch.
- Webhook signature verification failure.
- Webhook endpoint unreachable.
- Checkout session creation failure.
- Client success page reached without verified payment.
- Duplicate webhook event.
- Payment succeeded but downstream system failed.
- Downstream system succeeded but payment failed.
- Cloudflare Function error.
- Wrong `PUBLIC_SITE_URL`.
- Environment mismatch between preview and production.

## Fallback Behavior

Confirmed behavior:

- Session creation/verification endpoints return structured error payloads on failure.
- Webhook rejects invalid signature/timestamp data with error response.

UNKNOWN / NEEDS VERIFICATION:

- Idempotency strategy for duplicate webhook deliveries.
- Operator/manual reconciliation procedure when payment success and downstream update outcomes diverge.
- Exact user-facing fallback behavior when success page verification remains pending/failed in production.

## Diagnostics

- Stripe dashboard events (checkout + webhook events).
- Stripe webhook delivery logs.
- Cloudflare Pages Function logs for:
  - `/api/create-checkout-session`
  - `/api/verify-checkout-session`
  - `/api/stripe-webhook`
- Correlation via checkout session id where present.
- Correlation via requestId/referenceId where linked (UNKNOWN / NEEDS VERIFICATION for canonical mapping).
- Test payment path validation in Stripe test mode.
- Production webhook delivery validation.
- No-secret validation across docs/logs/client payloads.

## Validation Checklist

- [ ] Required Stripe env vars are present in target runtime without exposing values.
- [ ] Webhook endpoint is reachable.
- [ ] Webhook signing verification is confirmed.
- [ ] Checkout session creation path is documented.
- [ ] Success/cancel behavior is documented.
- [ ] Payment truth is server-side only.
- [ ] Live/test key separation is verified.
- [ ] Stripe dashboard webhook delivery is inspected.
- [ ] Cloudflare logs are inspected.
- [ ] No secrets are exposed.
- [ ] `npm run build` passes.

## Change Procedure

1. Update `/docs/runtime/stripe_runtime.md` first.
2. Update related runtime contracts only if boundaries change (`lead_signal_contract.md`, `request_id_contract.md`, HubSpot/Cloudflare docs).
3. Update `/docs/system/master-task-register.md` when change is task-related.
4. Validate server-side webhook verification behavior evidence.
5. Validate no secrets are exposed in docs/code/log snippets.
6. Update `/docs/DOCUMENT_CATALOG.md` only when authority/location metadata changes.

## Related Docs

- `/docs/runtime/runtime_contract_template.md`
- `/docs/runtime/runtime_ownership_map.md`
- `/docs/runtime/cloudflare_env.md`
- `/docs/runtime/lead_signal_contract.md`
- `/docs/runtime/request_id_contract.md`
- `/docs/runtime/resend_runtime.md`
- `/docs/stripe-cloudflare.md`
- `/docs/specs/full-stack-spec.md`
- `/docs/system/guardrails.md`
- `/docs/codex/QA_CHECKLIST.md`

## Last Verified

- Date (UTC): 2026-05-16
- Branch/commit: NEEDS VERIFICATION (record at merge/release time)
- Verified by: Codex execution for T-RUNTIME003-001
- Evidence:
  - Source/doc audit of Stripe function endpoints and runtime governance docs.
  - Runtime-contract completion using `/docs/runtime/runtime_contract_template.md` schema.
