# Resend Current Config Inventory REV01

Status: Current Config Inventory
Task: RUNTIME-AUDIT-003
Date: 2026-06-10
Customer-facing: No
Implementation authority: No

---

## Purpose

This document is a read-only Resend Current Config Inventory for WNY Home Security email sending, verified domains, sender identities, API key naming, webhook posture, suppression/bounce posture, and operator/customer email boundaries.

This inventory records non-secret repo-documented facts and explicitly marks live Resend-only areas as `Not inspected` where Resend dashboard access, Resend API metadata, operator screenshots, or operator exports were unavailable.

No configuration changes were made. No secret values were recorded.

---

## Authority Boundary

Current outbound email runtime authority lives in `docs/runtime/resend_runtime.md`.

Current inbound email routing authority lives in `docs/runtime/cloudflare_email_routing.md`.

`docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md` is supporting historical email lineage only. It does not authorize email runtime, Resend, endpoint, DNS, Cloudflare Email Routing, secret, or audit-copy changes by itself.

This inventory does not authorize Resend configuration changes, domain changes, sender changes, DNS changes, webhook changes, API key changes, email runtime behavior changes, code changes, or protected-system changes.

---

## Evidence Inspected

Repo documentation inspected:

- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/cloudflare_email_routing.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/request_id_contract.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`

Repo source paths inspected as read-only evidence:

- `functions/api/lead-signal.ts`
- `functions/api/support.ts`
- `functions/api/send-quote.ts`
- `functions/api/scheduling/confirm.ts`
- `api/_email.ts`

Live Resend areas were `Not inspected` because no Resend dashboard access, Resend API credential, operator screenshot, or operator export was available in this task.

---

## Inventory Summary

| Area | Inventory status | Notes |
| --- | --- | --- |
| Resend account identity | Not inspected | Requires Resend dashboard access or operator export. |
| Verified domains | Not inspected | Requires Resend dashboard/API metadata or operator export. |
| Sender identities | Repo-documented candidates only | Sender env names and historical sender examples are listed below. Live Resend verification status was not inspected. |
| API key names | Repo-documented variable names only | Names are listed without values. Live key names, scopes, status, and rotation metadata were not inspected. |
| Webhook settings | Not inspected | Requires Resend dashboard/API metadata or operator export. |
| Suppression/bounce posture | Not inspected | Requires Resend dashboard/API metadata or operator export. |
| Operator/customer email boundaries | Repo-documented partial inventory | Protected runtime and Resend runtime docs define customer acknowledgement and operator notification boundaries. Live delivery logs were not inspected. |
| Inbound routing | Out of Resend scope | Inbound routing belongs to Cloudflare Email Routing, not Resend. No DNS or routing changes were made. |

---

## Domains

Live verified Resend domains were `Not inspected` because Resend dashboard/API metadata or an operator export was unavailable.

Repo-documented domain references:

- `wnyhomesecurity.com`
- `www.wnyhomesecurity.com`

Historical Step201 lineage states that Resend is outbound only and that Resend receiving should not be enabled on the root domain. This inventory preserves that lineage as reference and does not change or verify live Resend domain configuration.

No domain or DNS setting was changed.

---

## Sender Identities

Live Resend sender identity verification was `Not inspected`.

Repo-documented sender identity candidates and references:

- `RESEND_FROM_EMAIL`
- `MAIL_FROM`
- `EMAIL_FROM`
- Historical sender example: `WNY Home Security <no-reply@wnyhomesecurity.com>`

Repo-documented reply-to or mailbox references from Step201 and runtime/source evidence:

- `sales@wnyhomesecurity.com`
- `quotes@wnyhomesecurity.com`
- `admin@wnyhomesecurity.com`
- `install@wnyhomesecurity.com`
- `billing@wnyhomesecurity.com`
- `support@wnyhomesecurity.com`
- `hello@wnyhomesecurity.com`

These are documented references only. This inventory does not confirm that any listed address is verified as a Resend sender identity.

No sender identity was created, changed, deleted, verified, or promoted.

---

## API Key And Environment Variable Names

Repo-documented names only:

- `RESEND_API_KEY`
- `EMAIL_PROVIDER`
- `RESEND_FROM_EMAIL`
- `MAIL_FROM`
- `EMAIL_FROM`
- `LEAD_SIGNAL_TO_EMAIL`
- `LEAD_SIGNAL_NOTIFY_TO`
- `LEAD_SIGNAL_AUDIT_EMAIL`
- `MAIL_TO`
- `MAIL_SALES_TO`
- `MAIL_SUPPORT_TO`
- `MAIL_QUOTES_TO`
- `MAIL_INSTALL_TO`
- `MAIL_ADMIN_TO`
- `MAIL_BILLING_TO`
- `MAIL_AUDIT_TO`
- `SUPPORT_NOTIFY_TO`
- `PUBLIC_SITE_URL`

Additional non-Resend fallback names documented in repo evidence:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM_EMAIL`
- `SMTP_TO_EMAIL`
- `SMTP_AUDIT_EMAIL`

No API key values were recorded. Live key names, values, scopes, labels, status, and rotation metadata were `Not inspected` because Resend dashboard/API access was unavailable.

---

## Outbound Email Runtime Touchpoints

Repo-documented outbound email paths:

- Lead operator notification and customer acknowledgement: `functions/api/lead-signal.ts`
- Support request operator notification and customer acknowledgement: `functions/api/support.ts`
- Quote send path: `functions/api/send-quote.ts`
- Owner-confirmed scheduling customer confirmation: `functions/api/scheduling/confirm.ts`
- Legacy/compatibility email helper: `api/_email.ts`

Repo-documented Resend API endpoint usage:

- `https://api.resend.com/emails`

Repo-documented email behavior categories:

- Operator notification.
- Customer acknowledgement.
- Quote/customer document delivery.
- Audit copy via BCC or configured audit recipient behavior where supported by the runtime path.
- Owner-confirmed scheduling customer confirmation.

No email runtime behavior was changed.

---

## Webhook Settings

Live Resend webhook settings were `Not inspected` because Resend dashboard/API metadata or an operator export was unavailable.

No repo-documented active Resend webhook endpoint was identified in the inspected RUNTIME-AUDIT-003 references. This inventory does not prove that no Resend webhook exists in the live Resend account.

No webhook was created, changed, deleted, enabled, disabled, or reconfigured.

---

## Suppression And Bounce Posture

Live Resend suppression, bounce, complaint, event, and delivery-log posture was `Not inspected`.

Reason: no Resend dashboard access, Resend API metadata, operator screenshot, or operator export was available.

No suppression list, bounce handling, complaint setting, event setting, or delivery-log configuration was changed.

---

## Operator And Customer Email Boundaries

Repo-documented protected boundaries:

- Resend customer acknowledgement flow is protected runtime.
- Resend operator notification flow is protected runtime.
- Resend delivery control flow must not change without explicit scoped authorization.
- `RESEND_API_KEY` must remain server-side.
- Inbound email routing belongs to Cloudflare Email Routing, not Resend.
- Step201 audit-copy language is historical/reference unless promoted by current operational context or an active bounded work order.

Repo-documented runtime behavior:

- When required Resend configuration is missing, source evidence reports skipped/not-configured states rather than exposing secret values.
- Operator notification paths use configured recipient env names.
- Customer acknowledgement paths use configured sender env names and submitted customer email when present.
- Audit-copy behavior is represented by configured audit recipient env names and BCC/duplicate-send patterns depending on path.

This inventory does not change customer acknowledgement, operator notification, audit-copy, scheduling, quote, support, or lead-signal behavior.

---

## Not Inspected Areas

The following areas remain `Not inspected`:

- Resend account identity.
- Verified domains and DNS verification status.
- Sender identities and sender verification status.
- API key labels, scopes, last-used metadata, status, and rotation metadata.
- Webhook endpoints, subscribed events, signing/secrets, and delivery status.
- Suppression lists, bounce handling, complaint handling, and delivery event posture.
- Production/preview Resend environment binding presence and values.
- Resend delivery logs for current customer/operator email flows.

Reason: no Resend dashboard access, Resend API credential, operator screenshot, or operator export was available for this task.

---

## Protected-System Confirmation

No configuration changes were made.

No secret values were recorded.

No Resend domain, sender, DNS, webhook, API key, suppression, bounce, delivery-log, email runtime behavior, or code changes were made.

Cloudflare, HubSpot, Stripe, Google Workspace, deployment, DNS, route, UI, and runtime systems were untouched.
