# Google Workspace Current Config Inventory REV01

Status: Current Config Inventory
Task: RUNTIME-AUDIT-005
Date: 2026-06-10
Customer-facing: No
Implementation authority: No

---

## Purpose

This document records a read-only Google Workspace Current Config Inventory for WNY Home Security domain identity, email aliases/groups, calendar ownership, account roles, security posture, and integration boundaries.

This is an inventory artifact only. It does not authorize or perform Google Workspace configuration, user, group, alias, calendar, routing, security setting, scheduling behavior, email routing behavior, code, runtime behavior, Cloudflare, HubSpot, Stripe, Resend, or secret changes.

No configuration changes were made. No secret values were recorded.

---

## Authority Boundary

- Google Calendar scheduling runtime authority remains in `docs/runtime/google_calendar_runtime.md` and `docs/runtime/scheduling_ownership.md`.
- Inbound email routing authority remains in `docs/runtime/cloudflare_email_routing.md`.
- Outbound email authority remains in `docs/runtime/resend_runtime.md`.
- Protected runtime boundaries remain in `docs/runtime/protected_runtime_contract.md`.
- This inventory does not create a new runtime contract and does not change scheduling or email routing behavior.

---

## Evidence Inspected

Repo documentation inspected:

- `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`
- `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`
- `docs/governance/AUTHORITY-MAP-REV01.md`
- `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/cloudflare_email_routing.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/resend_current_config_inventory_rev01.md`

Repo source paths inspected as read-only evidence:

- `functions/api/scheduling/googleCalendarAvailability.ts`
- `functions/api/scheduling/googleCalendarEvents.ts`
- `functions/api/scheduling/availability.ts`
- `functions/api/scheduling/confirm.ts`
- `src/content/wnyhsContact.ts`
- `api/_email.ts`

Live Google Workspace areas were `Not inspected` because no Google Admin access, Google Workspace export, Google Calendar admin export, OAuth console export, operator screenshots, or read-only administrative credentials were available in this task.

---

## Inventory Summary

| Area | Inventory status | Notes |
| --- | --- | --- |
| Domain identity | Repo-documented domain references only | `wnyhomesecurity.com` is referenced in site, email, and runtime docs. Live Google Workspace domain status was Not inspected. |
| Users/accounts | Not inspected | Requires Google Admin access or operator export. |
| Admin roles | Not inspected | Requires Google Admin access or operator export. |
| Groups | Not inspected | Requires Google Admin access or operator export. |
| Email aliases | Repo-documented address references only | Address references are listed below. Live aliases/groups/routing were Not inspected. |
| Calendar ownership | Repo-documented partial inventory | Runtime docs identify Google Calendar availability and post-owner-confirmation event-write boundaries. Live calendar owner/sharing settings were Not inspected. |
| Integration posture | Repo-documented partial inventory | Google Calendar env variable names and server-side integration boundaries are listed without values. |
| Retention/security settings | Not inspected | Requires Google Admin access or operator export. |
| Scheduling behavior | Unchanged | No scheduling behavior changed. |
| Email routing behavior | Unchanged | No email routing behavior changed. |

---

## Domain Identity

Live Google Workspace domain identity was `Not inspected` because Google Admin access, operator screenshots, or an administrative export were unavailable.

Repo-documented domain references:

- `wnyhomesecurity.com`
- `www.wnyhomesecurity.com`

This inventory does not confirm whether `wnyhomesecurity.com` is a primary Google Workspace domain, secondary domain, alias domain, verified domain, suspended domain, or unmanaged external domain in Google Workspace.

No domain configuration was changed.

---

## Users, Accounts, And Roles

Live Google Workspace user accounts, suspended users, super admins, delegated admins, service accounts, mailbox owners, and role assignments were `Not inspected` because Google Admin access or operator export was unavailable.

Repo evidence does not provide a reliable live Google Workspace user/account roster.

No user, account, or role changes were made.

---

## Groups And Aliases

Live Google Workspace groups, aliases, routing rules, mailbox routing, catch-all routing, group membership, and forwarding destinations were `Not inspected` because Google Admin access or operator export was unavailable.

Repo-documented address references only:

- `hello@wnyhomesecurity.com`
- `quotes@wnyhomesecurity.com`
- `schedule@wnyhomesecurity.com`
- `support@wnyhomesecurity.com`
- `billing@wnyhomesecurity.com`
- `install@wnyhomesecurity.com`
- `privacy@wnyhomesecurity.com`
- `partners@wnyhomesecurity.com`
- `sales@wnyhomesecurity.com`
- `admin@wnyhomesecurity.com`
- `audit@wnyhomesecurity.com`
- `no-reply@wnyhomesecurity.com`

These are repository references only. This inventory does not confirm that any listed address is an active Google Workspace user, group, alias, mailbox, forwarding address, or verified route.

No group, alias, mailbox, forwarding, or routing changes were made.

---

## Calendar Ownership

Live Google Calendar ownership, shared calendar identity, access control lists, resource calendars, appointment schedules, business hours, time zone settings, external sharing posture, event-default settings, and calendar audit logs were `Not inspected` because Google Admin/Calendar access or operator export was unavailable.

Repo-documented Calendar posture:

- `docs/runtime/google_calendar_runtime.md` identifies read-only availability lookup via `GET /api/scheduling/availability`.
- `docs/runtime/google_calendar_runtime.md` identifies post-owner-confirmation Calendar event creation attempts through `POST /api/scheduling/confirm`.
- `docs/runtime/scheduling_ownership.md` preserves the boundary that Calendar event creation is allowed only after owner confirmation transitions a request to `CONFIRMED`.
- Calendar write failure must not roll back confirmed appointment state or audit fields.
- Customer confirmation email attempts occur only after owner confirmation and after the Calendar write attempt.

No calendar changes were made.

---

## Integration Posture

Repo-documented Google Calendar environment variable names only:

- `GOOGLE_CALENDAR_ICAL_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `GOOGLE_CALENDAR_ID`

Values were not inspected or recorded.

Repo-documented integration boundaries:

- `GOOGLE_CALENDAR_ICAL_SECRET` supports read-only iCal availability lookup.
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, and `GOOGLE_CALENDAR_ID` support post-owner-confirmation event creation attempts.
- Credentials remain server-side only.
- Availability lookup is advisory and not booking authority.
- Calendar event creation is not allowed during availability lookup or request capture.

OAuth app ownership, consent screen settings, API enablement state, token status, scopes, service account posture, delegated domain-wide authority, and Google Cloud project ownership were `Not inspected`.

No secrets or token values were recorded.

---

## Retention And Security Settings

Live Google Workspace security and retention settings were `Not inspected` because Google Admin access or operator export was unavailable.

Not inspected areas include:

- Two-step verification enforcement.
- Security keys/passkeys policy.
- Admin role assignments and audit logs.
- Login/session controls.
- OAuth app access controls.
- API controls and domain-wide delegation.
- Gmail compliance, routing, spam, quarantine, and attachment rules.
- Vault, retention, legal hold, and eDiscovery posture.
- External sharing settings for Drive, Calendar, and Groups.
- DKIM, DMARC alignment, and Gmail authentication status.

No security, retention, routing, or compliance settings were changed.

---

## Email Routing Boundary

Inbound domain email routing remains governed by `docs/runtime/cloudflare_email_routing.md`.

Outbound application email remains governed by Resend runtime documentation.

This inventory records Google Workspace address references only and does not confirm live mailbox, group, alias, forwarding, Gmail, or routing configuration.

No email routing behavior changed.

---

## Scheduling Boundary

Scheduling authority remains governed by `docs/runtime/google_calendar_runtime.md`, `docs/runtime/scheduling_ownership.md`, and `docs/runtime/protected_runtime_contract.md`.

This inventory preserves the current boundary:

- Availability is advisory.
- Customer request capture is not confirmed booking authority.
- Owner/manual confirmation remains required before confirmed appointment state.
- Calendar event creation may occur only after owner confirmation.
- Calendar failure does not roll back confirmed state.

No scheduling behavior changed.

---

## Not Inspected Areas

The following Google Workspace areas were Not inspected because no Google Admin access, Google Workspace export, Google Calendar admin export, OAuth console export, operator screenshots, or read-only administrative credentials were available:

- Primary/secondary/alias domain status.
- User account list, suspended accounts, and mailbox status.
- Admin roles, delegated roles, and super-admin roster.
- Groups, group membership, aliases, distribution lists, and forwarding destinations.
- Gmail routing, compliance, spam, quarantine, catch-all, DKIM, DMARC, and authentication settings.
- Calendar ownership, sharing ACLs, resources, business hours, appointment schedules, and audit logs.
- Google Cloud project, OAuth app, consent screen, enabled APIs, scopes, token status, and service account posture.
- Vault, retention, legal hold, Drive sharing, mobile/device management, session policies, and two-step verification enforcement.

---

## Protected-System Confirmation

- No configuration changes were made.
- No Google Workspace configuration changes were made.
- No user changes were made.
- No group changes were made.
- No alias changes were made.
- No calendar changes were made.
- No routing changes were made.
- No security setting changes were made.
- No scheduling behavior changed.
- No email routing behavior changed.
- No code changes were made.
- No runtime behavior changed.
- No secret values were recorded.
- No Cloudflare, HubSpot, Stripe, or Resend changes were made.
