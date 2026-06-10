# Cloudflare Current Config Inventory REV01

Status: Current Config Inventory
Owner: WNY Home Security
Task: RUNTIME-AUDIT-001
Date: 2026-06-10
Document Type: Docs-only runtime inventory

---

## Purpose

Create a read-only inventory of current Cloudflare configuration relevant to WNY Home Security runtime ownership, DNS, deployment, Pages/Workers, environment bindings, email routing, and security posture.

This inventory is documentation-only. It records repo-documented facts and explicitly marks live Cloudflare areas that were not inspected.

No configuration changes were made.

No secret values are recorded.

---

## Scope And Evidence Boundary

### Evidence inspected

- Repository governance and runtime docs listed by RUNTIME-AUDIT-001.
- Existing repository deployment references, including `docs/runtime/cloudflare_env.md`, `docs/runtime/cloudflare_email_routing.md`, `docs/runtime/deployment_validation.md`, `docs/runtime/protected_runtime_contract.md`, `docs/stripe-cloudflare.md`, `public/_redirects`, `package.json`, and the tracked `functions/api/` tree.

### Evidence not inspected

- Cloudflare dashboard was not inspected.
- Cloudflare API was not inspected.
- Cloudflare CLI output was not inspected.
- Operator screenshots or exports were not provided.
- DNS lookup output was not used as a substitute for dashboard verification.

Reason: this Codex run did not have Cloudflare dashboard credentials, Cloudflare API credentials, or operator-provided Cloudflare exports. Areas that require those sources are marked `Not inspected`.

---

## Inventory Summary

| Area | Inventory Status | Source / Reason |
|---|---|---|
| Cloudflare account | Not inspected | Requires Cloudflare dashboard/API access. |
| Zone ownership | Not inspected | `wnyhomesecurity.com` is repo-documented, but dashboard zone ownership was not inspected. |
| DNS records | Not inspected | Requires Cloudflare DNS dashboard/API or operator export. |
| MX records | Not inspected | Requires Cloudflare DNS/email routing dashboard/API or operator export. |
| Pages project linkage | Partial repo-documented | Repo references Cloudflare Pages and project name `wnyhomesecurity`; live project settings were not inspected. |
| Pages production branch | Not inspected | Requires Cloudflare Pages dashboard/API. |
| Build command | Repo-documented | `package.json` defines `npm run build`; live Cloudflare build command was not inspected. |
| Build output directory | Not inspected | Requires Cloudflare Pages dashboard/API. |
| Pages Functions / API routes | Repo-documented | Tracked `functions/api/` files exist; live deployment mapping was not inspected. |
| Workers outside Pages Functions | Not inspected | Requires Cloudflare dashboard/API. |
| Environment variable names | Repo-documented only | Names are recorded from repo docs/source; Cloudflare configured presence and values were not inspected. |
| Email Routing | Partial repo-documented | Inbound model is documented; live aliases, destinations, MX, and catch-all behavior were not inspected. |
| Security controls | Not inspected | Requires Cloudflare dashboard/API. |
| Deployment protection / preview controls | Not inspected | Requires Cloudflare Pages dashboard/API. |
| Logs / analytics | Not inspected | Requires Cloudflare dashboard/API. |

---

## Zone And DNS Inventory

### Zone

| Item | Status | Notes |
|---|---|---|
| Primary domain / zone candidate | Repo-documented | Repository docs reference `wnyhomesecurity.com` as production domain context. |
| Cloudflare zone ID | Not inspected | Requires Cloudflare dashboard/API access. |
| Account owner / account ID | Not inspected | Requires Cloudflare dashboard/API access. |
| Registrar / nameserver state | Not inspected | Requires operator export or Cloudflare/domain registrar inspection. |

### DNS records

Live DNS records were not inspected.

Reason: no Cloudflare dashboard/API access or operator DNS export was available in this run.

Required future inventory fields:

- Apex/root record type, proxied state, and target.
- `www` record type, proxied state, and target.
- Pages custom domain attachment state.
- MX record set for inbound mail.
- TXT records relevant to email routing, domain verification, SPF, DKIM, DMARC, and ownership verification.
- Any CNAME, worker route, or redirect records relevant to production traffic.

No DNS changes were made.

---

## Cloudflare Pages Inventory

| Item | Status | Notes |
|---|---|---|
| Hosting platform | Repo-documented | `docs/runtime/cloudflare_env.md` identifies Cloudflare Pages as the production deployment target. |
| Pages project name | Repo-documented candidate | `docs/stripe-cloudflare.md` references Cloudflare Pages project `wnyhomesecurity`; live dashboard linkage was not inspected. |
| Production URL | Repo-documented | `https://wnyhomesecurity.com` is referenced in runtime/deployment docs. |
| Production branch | Not inspected | Requires Cloudflare Pages dashboard/API. |
| Preview branch policy | Not inspected | Requires Cloudflare Pages dashboard/API. |
| Build command | Repo-documented | `package.json` defines `npm run build`. Live Cloudflare build command was not inspected. |
| Build output directory | Not inspected | Requires Cloudflare Pages dashboard/API. |
| Framework preset | Not inspected | Requires Cloudflare Pages dashboard/API. |
| Custom domains | Not inspected | Requires Cloudflare Pages dashboard/API. |
| Deployment protection | Not inspected | Requires Cloudflare Pages dashboard/API. |
| Environment-specific variables | Not inspected | Requires Cloudflare Pages dashboard/API. |

---

## Pages Functions / Workers Inventory

### Repo-documented Pages Functions

The repository contains tracked Cloudflare Pages Functions under `functions/api/`.

Current tracked API surfaces observed in the repository:

- `functions/api/create-checkout-session.ts`
- `functions/api/send-quote.ts`
- `functions/api/stripe-webhook.ts`
- `functions/api/support.ts`
- `functions/api/verify-checkout-session.ts`
- `functions/api/lead-signal.ts`
- `functions/api/scheduling/availability.ts`
- `functions/api/scheduling/confirm.ts`
- `functions/api/scheduling/request.ts`

Additional helper and test files are also present under `functions/api/`.

### Routing helper

`public/_redirects` contains:

```text
/api/*  /api/:splat  200
/*      /index.html 200
```

This is repo evidence only. Live Cloudflare routing, Pages Functions deployment state, and route behavior were not inspected.

### Workers outside Pages

Not inspected.

Reason: requires Cloudflare dashboard/API access. No standalone Worker inventory was provided.

No Worker, Pages, or route changes were made.

---

## Environment Bindings Inventory

This section records environment variable names found in repo docs/source. It does not confirm live Cloudflare presence, scope, or values.

No secret values are recorded.

| Variable Name | Repo-Documented Purpose | Live Cloudflare Status |
|---|---|---|
| `PUBLIC_SITE_URL` | Canonical public URL context. | Not inspected |
| `STRIPE_PUBLISHABLE_KEY` | Stripe frontend initialization. | Not inspected |
| `STRIPE_SECRET_KEY` | Server-side Stripe API auth. | Not inspected |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signature verification. | Not inspected |
| `HUBSPOT_PRIVATE_APP_TOKEN` | Server-side HubSpot private app auth alias. | Not inspected |
| `HUBSPOT_ACCESS_TOKEN` | Server-side HubSpot auth fallback/alias. | Not inspected |
| `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID` | HubSpot stage assignment runtime lock variable name. | Not inspected |
| `RESEND_API_KEY` | Server-side Resend outbound email auth. | Not inspected |
| `RESEND_FROM_EMAIL` | Resend sender identity. | Not inspected |
| `EMAIL_PROVIDER` | Outbound email provider selection. | Not inspected |
| `LEAD_SIGNAL_TO_EMAIL` | Operator notification recipient. | Not inspected |
| `LEAD_SIGNAL_AUDIT_EMAIL` | Audit-copy recipient. | Not inspected |
| `MAIL_FROM` | Email sender alias. | Not inspected |
| `MAIL_AUDIT_TO` | Audit-copy recipient alias. | Not inspected |
| `MAIL_SALES_TO` | Sales recipient alias. | Not inspected |
| `MAIL_SUPPORT_TO` | Support recipient alias. | Not inspected |
| `MAIL_QUOTES_TO` | Quotes recipient alias. | Not inspected |
| `MAIL_INSTALL_TO` | Install/schedule recipient alias. | Not inspected |
| `MAIL_ADMIN_TO` | Admin recipient alias. | Not inspected |
| `MAIL_BILLING_TO` | Billing recipient alias. | Not inspected |
| `EMAIL_FROM` | Email sender fallback alias. | Not inspected |
| `SMTP_HOST` | SMTP fallback host. | Not inspected |
| `SMTP_PORT` | SMTP fallback port. | Not inspected |
| `SMTP_USER` | SMTP fallback username. | Not inspected |
| `SMTP_PASS` | SMTP fallback password. | Not inspected |
| `SMTP_FROM_EMAIL` | SMTP sender fallback. | Not inspected |
| `SMTP_TO_EMAIL` | SMTP recipient fallback. | Not inspected |
| `SMTP_AUDIT_EMAIL` | SMTP audit recipient fallback. | Not inspected |
| `GOOGLE_CALENDAR_ICAL_SECRET` | Scheduling availability secret reference. | Not inspected |
| `NODE_ENV` | Runtime mode flag. | Not inspected |

Future inspection must confirm only variable names and presence/scope unless an authorized secret-management task explicitly permits secret handling. Secret values must not be copied into docs, logs, PR descriptions, screenshots, or chat.

---

## Cloudflare Email Routing Inventory

| Item | Status | Notes |
|---|---|---|
| Inbound routing owner | Repo-documented | `docs/runtime/cloudflare_email_routing.md` owns inbound email routing documentation. |
| Inbound model | Repo-documented | Customer to Cloudflare Email Routing to operator inbox destination. |
| Resend relationship | Repo-documented | Resend is outbound only; Cloudflare Email Routing owns inbound routing. |
| Alias list | Not inspected | Candidate aliases are documented, but live routes were not inspected. |
| Forwarding destinations | Not inspected | Requires Cloudflare Email Routing dashboard/API or operator export. |
| Destination verification | Not inspected | Requires Cloudflare Email Routing dashboard/API. |
| Catch-all behavior | Not inspected | Requires Cloudflare Email Routing dashboard/API. |
| MX record state | Not inspected | Requires Cloudflare DNS/email routing dashboard/API or operator export. |

Candidate aliases referenced in repository docs include:

- `admin@wnyhomesecurity.com`
- `support@wnyhomesecurity.com`
- `sales@wnyhomesecurity.com`
- `quotes@wnyhomesecurity.com`
- `install@wnyhomesecurity.com`
- `billing@wnyhomesecurity.com`
- `hello@wnyhomesecurity.com`
- `privacy@wnyhomesecurity.com`
- `partners@wnyhomesecurity.com`

These are repo-documented candidates only. This inventory does not confirm live route existence, forwarding destination, or verification state.

No email routing changes were made.

---

## Security And Access Controls Inventory

The following Cloudflare security controls were not inspected:

- WAF rules.
- DDoS settings.
- Bot controls.
- Rate limiting.
- Access policies.
- Turnstile or challenge configuration.
- Page Rules / Redirect Rules / Transform Rules.
- Cache rules.
- Security Level / SSL/TLS mode.
- HSTS settings.
- Origin certificate settings.
- Pages deployment protection.
- Preview deployment access controls.
- API token inventory.
- Audit log entries.

Reason: requires Cloudflare dashboard/API access or an operator-provided export.

No security configuration changes were made.

---

## Deployment And Observability Inventory

| Item | Status | Notes |
|---|---|---|
| Deployment logs | Not inspected | Requires Cloudflare dashboard/API. |
| Functions logs | Not inspected | Requires Cloudflare dashboard/API. |
| Analytics | Not inspected | Requires Cloudflare dashboard/API. |
| Deployment URL history | Not inspected | Requires Cloudflare dashboard/API. |
| Production deployment status | Not inspected | Requires Cloudflare dashboard/API. |
| Rollback settings/history | Not inspected | Requires Cloudflare dashboard/API. |

No deployment behavior changes were made.

---

## Unknowns / Required Follow-Up

Future read-only inspection should collect a non-secret Cloudflare export or dashboard checklist covering:

1. Account and zone identity at a non-secret level.
2. DNS records, proxied state, MX posture, and verification records without exposing secret values.
3. Pages project name, production branch, build command, output directory, custom domains, preview policy, and deployment protection settings.
4. Environment variable names and presence/scope only, with no values.
5. Pages Functions mapping and any standalone Worker routes.
6. Cloudflare Email Routing aliases, destination verification state, catch-all posture, and MX status.
7. Security posture at a high level: WAF/rate limiting/bot/access/SSL/cache settings.
8. Deployment and Functions log availability.

If live inspection reveals a conflict with current runtime docs, create a separate bounded reconciliation task before changing any configuration or runtime behavior.

---

## Protected-System Confirmation

- No Cloudflare configuration changes were made.
- No DNS changes were made.
- No deployment setting changes were made.
- No Worker, Pages, or route changes were made.
- No code changes were made.
- No runtime behavior changes were made.
- No secret values were recorded.
- No Stripe changes were made.
- No HubSpot changes were made.
- No Resend changes were made.
- No Google Workspace changes were made.
