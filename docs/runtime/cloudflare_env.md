# Cloudflare Runtime / Environment Contract — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/cloudflare_env.md`

Primary owner:
- WNYHS operators maintaining Cloudflare Pages deployment/runtime configuration.

Secondary owner(s):
- Application maintainers for `/functions` and `/api` runtime compatibility.

## Purpose

Define the canonical Cloudflare Pages runtime/environment contract for WNY Home Security, including:

- production and preview runtime assumptions,
- environment variable ownership boundaries,
- Pages Functions/API runtime behavior assumptions,
- operational diagnostics and validation checks.

This document is documentation-only authority and does not change runtime behavior.

## Applies To

- Cloudflare Pages deployment for WNY Home Security.
- Production deployment target for site and API surface.
- Preview deployments (where configured).
- Pages Functions behavior for `/functions/api/*`.
- API endpoints exposed as `/api/*` through Functions mapping.
- Environment variable/secrets presence and scope tracking.
- QRLanding runtime dependency on deployment/API availability.
- Stripe runtime dependency references (link-only).
- HubSpot/Resend dependency references (link-only).

## Authority

This document is the canonical owner contract for Cloudflare runtime/environment expectations.

Governing docs:

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`

Controlling context/Step alignment:

- Current context: `CTX-STEP102-QRLANDING-REV01`.
- This runtime contract is operational hardening documentation and does not alter Step102 feature authority.

## Production Runtime Model

Confirmed assumptions from repository docs:

- Production deployment target is Cloudflare Pages.
- Production API routes are served through Pages Functions mapping from `/functions` to `/api/*`.
- Stripe webhook endpoint is expected at `https://wnyhomesecurity.com/api/stripe-webhook`.
- Build verification required before completion is `npm run build`.

UNKNOWN / NEEDS VERIFICATION:

- Confirmed production branch name used by Cloudflare Pages.
- Confirmed build output directory configured in Cloudflare Pages settings.
- Whether both root-domain and `www` hostnames are attached and active in Pages project settings.

## Preview Runtime Model

Confirmed assumptions:

- Preview environment variables are expected for Stripe runtime per Cloudflare Pages environment variable guidance.

UNKNOWN / NEEDS VERIFICATION:

- Exact preview branch rules/patterns (all branches vs selected branches).
- Whether preview deployments expose all `/api/*` routes identically to production.
- Preview domain routing policy and access controls.

## Environment Variables

| Variable | Required | Environment | Purpose | Owner Doc | Verification Status | Notes |
|---|---|---|---|---|---|---|
| `PUBLIC_SITE_URL` | Yes | Production (+ Preview if used in preview links) | Canonical public URL used by runtime flows. | `/docs/runtime/cloudflare_env.md` | NEEDS VERIFICATION | Referenced in docs request scope; variable usage location should be validated in runtime/source audit before REV02. |
| `STRIPE_PUBLISHABLE_KEY` | Yes (frontend payment paths) | Production + Preview | Stripe publishable key for frontend payment initialization. | `/docs/stripe-cloudflare.md` | CONFIRMED IN DOCS | Must not include secret values in documentation. |
| `STRIPE_SECRET_KEY` | Yes | Production + Preview | Server-side Stripe API authentication. | `/docs/stripe-cloudflare.md` | CONFIRMED IN DOCS | Stored as Cloudflare Pages secret; server-side only. |
| `STRIPE_WEBHOOK_SECRET` | Yes | Production + Preview | Stripe webhook signature verification. | `/docs/stripe-cloudflare.md` | CONFIRMED IN DOCS | Required by webhook endpoint; never expose value. |
| `HUBSPOT_PRIVATE_APP_TOKEN` | UNKNOWN | UNKNOWN | Potential HubSpot auth variable alias in operator docs. | `/docs/runtime/cloudflare_env.md` | NEEDS VERIFICATION | Repo audit shows `HUBSPOT_ACCESS_TOKEN` in inventory docs; token naming must be reconciled in HubSpot runtime contract. |
| `HUBSPOT_ACCESS_TOKEN` | Yes (for HubSpot sync path) | Production (Preview if CRM-tested) | HubSpot private app access token used by server API helper. | `/docs/audits/qrlanding_crm_notification_inventory_rev01.md` | CONFIRMED IN DOCS | HubSpot write path remains API-mediated only (`/api/lead-signal`). |
| `RESEND_API_KEY` | Conditional (when EMAIL_PROVIDER=resend) | Production (+ Preview if email tested) | Outbound Resend authentication for lead notifications. | `/docs/audits/qrlanding_crm_notification_inventory_rev01.md` | CONFIRMED IN DOCS | Keep server-side only; never committed. |
| `EMAIL_PROVIDER` | Conditional | Production (+ Preview if email tested) | Selects outbound email provider behavior in API layer. | `/docs/audits/qrlanding_crm_notification_inventory_rev01.md` | CONFIRMED IN DOCS | Values and fallback behavior documented in inventory; operational details belong to email runtime contract. |
| `NODE_ENV` | Runtime-default | Production + Preview | Runtime mode flag read by server/API layer. | `/docs/audits/qrlanding_crm_notification_inventory_rev01.md` | CONFIRMED IN DOCS | Presence/value management in Cloudflare Pages needs operator verification. |

## Pages Functions / API Runtime

Confirmed understanding:

- Cloudflare Pages uses `/functions` directory to expose `/api/*` routes.
- `functions/api/stripe-webhook.ts` exists as Cloudflare-function webhook path.
- CRM write architecture requires API-layer mediation via `/api/lead-signal`.
- Inventory docs identify `api/lead-signal.ts` as server validation/orchestration layer for CRM and notification behavior.

UNKNOWN / NEEDS VERIFICATION:

- Whether `/api/lead-signal` is currently deployed from `api/` directly, mirrored in `/functions`, or bridged by build/runtime tooling.
- Full list of active `/functions/api/*` routes currently mapped in production.
- Confirmed request/timeout/body-size limits currently applied by Pages Functions project settings.

## External Services Connected Through Cloudflare

Reference-only connections:

- Stripe (payment + webhook runtime dependency): `/docs/stripe-cloudflare.md`.
- HubSpot (CRM sync dependency through API layer): `/docs/crm/hubspot/hubspot_kb_rev03.md`.
- Resend (outbound notification dependency): `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`.
- Cloudflare Email Routing (inbound mail path): `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`.
- Production domain reference: `https://wnyhomesecurity.com` (webhook endpoint doc reference).

## Failure Modes

- Missing required env vars in Cloudflare Pages production environment.
- Missing or mismatched preview env vars causing preview-only runtime failures.
- Pages build failure (`npm run build` or platform build step failure).
- Pages Functions runtime error in `/api/*` endpoint execution.
- Domain/DNS misconfiguration causing unreachable production host.
- Stripe webhook endpoint unreachable or signature verification failure due to env/config mismatch.
- `/api/lead-signal` endpoint unavailable, causing CRM/notification path failure.

## Diagnostics

Operator-facing validation points:

- Run local build command: `npm run build`.
- Confirm Cloudflare Pages deployment status in project dashboard.
- Inspect Cloudflare Pages deployment logs for build/runtime errors.
- Inspect Pages Functions logs for `/api/*` request failures (if logging enabled in project).
- Execute smoke tests for critical runtime routes:
  - `/qrlanding`
  - `/api/lead-signal` (safe non-destructive health validation method)
  - `/api/stripe-webhook` reachability (do not fake-success payment state)
- Validate required env var presence in Cloudflare Pages settings without exposing values.

## Validation Checklist

- [ ] `npm run build` passes.
- [ ] Cloudflare Pages production deployment succeeds.
- [ ] Required production env vars are present (values not exposed).
- [ ] Preview env vars are present where preview runtime is expected.
- [ ] Public URL/domain configuration is correct.
- [ ] `/qrlanding` loads in deployment target.
- [ ] `/api/lead-signal` route is reachable (non-destructive check).
- [ ] `/api/stripe-webhook` route is reachable.
- [ ] No secrets are exposed in logs, docs, or client payloads.

## Change Procedure

1. Update `/docs/runtime/cloudflare_env.md` for Cloudflare runtime/env contract changes.
2. Update related runtime owner docs (Stripe/Email/HubSpot/lead-signal) when integration-specific ownership changes.
3. Update `/docs/system/master-task-register.md` when change is task-scoped and needs lifecycle/status tracking.
4. Run validation checklist (including `npm run build` and deployment/runtime checks).
5. Update `/docs/DOCUMENT_CATALOG.md` only when document location/authority metadata changes.

## Related Docs

- `/docs/runtime/README.md`
- `/docs/runtime/runtime_contract_template.md`
- `/docs/runtime/runtime_ownership_map.md`
- `/docs/specs/full-stack-spec.md`
- `/docs/stripe-cloudflare.md`
- `/docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `/docs/codex/QA_CHECKLIST.md`
- `/docs/crm/hubspot/hubspot_kb_rev03.md`

## Last Verified

- Date (UTC): 2026-05-16
- Branch/commit: NEEDS VERIFICATION (record at merge/release time)
- Verified by: Codex execution for T-RUNTIME002-001
- Evidence:
  - Documentation cross-reference audit via `rg` across `docs/`.
  - Runtime-contract field completion using `/docs/runtime/runtime_contract_template.md` structure.
  - Local build command execution recorded in task output.
