# WNYHS Cloudflare Remote Support Architecture

Status: Active architecture document
Scope: WNY Home Security customer Home Assistant remote access and support

---

## 1. Purpose

This document defines the formal WNY Home Security remote support and customer remote-access architecture for customer Home Assistant deployments using Cloudflare Zero Trust, Cloudflare Tunnel, Cloudflare Access, and `cloudflared`.

It covers:

- Customer remote dashboard access.
- Home Assistant Companion App access.
- WNYHS remote admin/support access.
- Technician access.
- Future customer support scaling.

This is documentation only. It does not authorize live Cloudflare changes, DNS changes, tunnel creation, Home Assistant configuration changes, customer credential handling, app code changes, website changes, HubSpot changes, Stripe/payment changes, scheduling changes, API/backend changes, dependency changes, package-lock changes, or secret storage.

---

## 2. Definitions

### Cloudflare Zero Trust

Cloudflare Zero Trust is the Cloudflare control layer used to manage access policy, identity-aware application access, and administrative remote-access rules for protected customer services.

### Cloudflare Tunnel

Cloudflare Tunnel is the WNYHS target remote-access method for customer Home Assistant deployments. It uses outbound-only connections from the customer network to Cloudflare and avoids public IP exposure and inbound router port forwarding.

### Cloudflare Access

Cloudflare Access is the policy layer that can require identity verification before a user reaches a protected hostname. It may be used where appropriate for WNYHS admin, technician, or customer access, but it does not replace Home Assistant login.

### cloudflared

`cloudflared` is the daemon that runs on the Home Assistant Green or an approved local host and maintains the outbound tunnel connection from the customer network to Cloudflare.

---

## 3. Architecture Overview

Standard request path:

```text
Customer Home Assistant Green
-> cloudflared
-> Cloudflare Tunnel
-> Cloudflare Zero Trust / Access policy
-> <customer>.remote.wnyhomesecurity.com
-> Home Assistant login
```

The Home Assistant login remains required for every user. Cloudflare Access can add a policy layer before Home Assistant, but Home Assistant user accounts and permissions remain the system-of-record access boundary inside Home Assistant.

---

## 4. Standard Hostname Model

WNYHS owns and manages `wnyhomesecurity.com` in Cloudflare and uses the `remote.wnyhomesecurity.com` parent naming pattern for customer Home Assistant remote access.

Standard format:

- `<customer>.remote.wnyhomesecurity.com`

Examples:

- `bklewis.remote.wnyhomesecurity.com`
- `smith.remote.wnyhomesecurity.com`
- `jones.remote.wnyhomesecurity.com`

BKLF example:

- Customer: Brian K. Lewis Funeral Home
- Standard customer slug: `bklewis`
- Target hostname: `bklewis.remote.wnyhomesecurity.com`

Customer slugs should be short, stable, approved, and free of secrets, account IDs, tokens, passwords, or private device identifiers.

---

## 5. Tunnel Model

WNYHS standard is one Cloudflare Tunnel per customer deployment unless a future architecture task approves a different pattern.

One tunnel per deployment gives WNYHS:

- Clear ownership per customer site.
- Easier offboarding and revocation.
- Cleaner customer URL inventory.
- Reduced risk of cross-customer routing mistakes.
- Simpler tunnel health review.

Tunnel credentials, connector tokens, tunnel UUIDs, Cloudflare tokens, and `cloudflared` secret values must never be committed to the repository.

---

## 6. Customer Access Model

Customer access supports:

- Browser dashboard access at the customer-specific remote URL.
- Home Assistant Companion App access using the same remote URL.
- A customer non-admin Home Assistant user for normal owner use.

Customer users should have access only to the dashboards and controls appropriate for the installation. Installer-only views, maintenance helpers, admin settings, internal entity-maintenance views, and WNYHS technician surfaces should not be exposed through the standard customer user.

The Companion App should be configured only after the remote URL and Home Assistant login path are verified. Customer notification targets such as `notify.mobile_app_*` service names must be captured in private operator notes, not in public repo docs, unless a future privacy-reviewed standard authorizes a sanitized inventory format.

---

## 7. WNYHS Support Model

Each customer Home Assistant instance may include:

- A WNYHS admin Home Assistant account for support, backup/restore help, dashboard maintenance, and controlled troubleshooting.
- Separate technician Home Assistant accounts where needed.
- Customer non-admin accounts for owner use.

Rules:

- Do not use shared customer credentials.
- Do not ask the customer to provide their Home Assistant password for WNYHS admin or technician work.
- Do not store customer passwords in the repo.
- Do not store customer passwords in customer-facing handoff docs.
- Remove or disable technician accounts when the task is complete.
- Review whether WNYHS admin access is still appropriate during offboarding or access reviews.

Any direct live customer-system change still requires customer approval and a separately bounded work authorization when repository governance requires one.

---

## 8. Authentication Layers

Standard layers:

1. Cloudflare Tunnel provides the outbound connection from the customer network to Cloudflare.
2. Cloudflare Access may enforce identity-aware access where appropriate.
3. Home Assistant login always remains required.
4. Home Assistant permissions and dashboards define the user experience after login.

Recommendations:

- Use MFA for WNYHS admin accounts.
- Use separate accounts for WNYHS admin and technician access.
- Use non-admin customer accounts for normal owner access.
- Do not treat Cloudflare Access as a replacement for Home Assistant account hygiene.

---

## 9. Security Rules

Mandatory rules:

- No public port forwarding to Home Assistant.
- No exposed router admin surface.
- No tunnel tokens in the repo.
- No Cloudflare tokens in the repo.
- No Home Assistant credentials in the repo.
- No customer credentials in the repo.
- No secrets in documentation.
- No customer password storage in repo files.
- No private mobile device identifiers in repo files.
- Revoke access during customer offboarding.
- Rotate tunnel credentials when appropriate.
- Preserve local Home Assistant access as the primary operating model.

Remote access is optional and requires customer approval.

---

## 10. Network Assumptions

Remote access planning assumes:

- Home Assistant Green has internet access.
- Home Assistant Green has a static IP address or DHCP reservation.
- Cameras have DHCP reservations.
- Customer business LAN may be separate from WNYHS/security LAN.
- Customer VoIP, MEMS, VPN, office, point-of-sale, guest, or business networks may have separate ownership or routing.

Do not disrupt customer business networks. If routing, VLAN, firewall, VPN, or customer IT ownership is unclear, stop and document the unknown before making changes.

---

## 11. Temporary Remote Access

Nabu Casa may be used as a temporary bridge when needed for setup or interim support.

Cloudflare Tunnel is the preferred long-term WNYHS standard for customer Home Assistant remote access because it supports the WNYHS hostname model, outbound-only connectivity, customer-specific tunnel ownership, and future support operations.

Temporary access paths should be retired or reviewed after the Cloudflare Tunnel path is working and approved.

---

## 12. Operational Ownership

WNYHS owns:

- DNS naming convention.
- `remote.wnyhomesecurity.com` customer hostname pattern.
- Internal support architecture standards.
- Non-secret customer URL inventory process when created by a future task.

Customer owns:

- Customer equipment.
- Customer Home Assistant data.
- Customer approval for remote access.
- Customer account use and customer device access.

Remote access requires customer approval before setup or handoff.

---

## 13. Future Platform Direction

Future platform work may include:

- Support portal.
- Customer URL inventory.
- HubSpot customer remote URL field, if separately approved under the locked CRM authority and implemented only through the approved API path.
- QR code onboarding.
- Dashboard update support.
- Automation support.
- Phone replacement workflow.

These future items are not authorized by this document. Each item requires its own bounded task before any implementation, customer-facing page change, CRM change, Cloudflare change, Home Assistant live change, pricing change, portal work, runtime change, or secret-handling process.

---

## 14. Scope Boundary

This architecture does not authorize:

- Live Cloudflare dashboard changes.
- Cloudflare API or CLI calls.
- DNS changes.
- Tunnel creation.
- `cloudflared` installation or configuration.
- Home Assistant live configuration edits.
- Home Assistant backup commits.
- Customer credential handling.
- Secret storage.
- Website, app, route, API, HubSpot, Stripe/payment, scheduling, Resend/email, dependency, package-lock, or environment changes.
