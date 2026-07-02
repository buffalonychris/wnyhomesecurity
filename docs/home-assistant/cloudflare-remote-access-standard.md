# WNYHS Cloudflare Remote Access Standard

Status: Active standard
Scope: Customer Home Assistant remote-access governance

---

## 1. Purpose

This standard defines how WNY Home Security plans, documents, and governs Cloudflare Tunnel and Cloudflare Zero Trust use for customer Home Assistant deployments.

It covers customer remote dashboard access, WNYHS admin access, technician access, Home Assistant Companion App access, and future support workflows.

This is a governance and implementation standard only. It does not authorize live Cloudflare dashboard changes, DNS changes, tunnel creation, Home Assistant configuration changes, secrets handling, app code changes, website changes, or customer credential storage.

---

## 2. WNYHS Remote Access Philosophy

WNYHS Home Assistant deployments remain local-first. The local Home Assistant instance and local network access remain the primary operating model.

Remote access is optional and must be customer-approved before setup.

Remote access must not use public port forwarding.

Remote access must not rely on shared customer passwords.

Every deployment should use separate Home Assistant accounts for:

- WNYHS admin access
- Technician access when needed
- Customer access

Customer users should receive only the Home Assistant permissions and dashboards needed for normal owner use.

---

## 3. Standard Hostname Model

WNYHS should use `remote.wnyhomesecurity.com` as the parent remote-access zone for customer Home Assistant deployments.

Customer Home Assistant instances should use customer-specific subdomains under that parent zone.

Examples:

- `bklewis.remote.wnyhomesecurity.com`
- `smith.remote.wnyhomesecurity.com`
- `jones.remote.wnyhomesecurity.com`

Hostnames should use short, stable customer slugs. Avoid personal details beyond the approved customer slug. Do not place tunnel tokens, account IDs, passwords, or other secret values in hostnames, documentation, commit messages, screenshots, or handoff notes.

---

## 4. Recommended Access Layers

Standard remote access should use layered access controls:

- Cloudflare Tunnel for outbound-only connectivity from the customer site to Cloudflare.
- Cloudflare DNS for customer-specific hostnames.
- Cloudflare Zero Trust Access policy where appropriate for WNYHS admin or technician access.
- Home Assistant login for every user.

Home Assistant authentication remains required even when Cloudflare Access is enabled.

Cloudflare Access policy should not be treated as a replacement for Home Assistant user accounts, Home Assistant permissions, or customer dashboard scoping.

---

## 5. Customer Access Model

Customer remote access should use the customer-specific URL for that Home Assistant deployment.

The Home Assistant Companion App should point to the customer-specific remote URL after the tunnel is verified.

Customer access should use a non-admin Home Assistant user.

Customer dashboards should show the owner-facing controls and status needed for the installation, without exposing installer-only maintenance views, internal helpers, or admin-only configuration surfaces.

Customer phone replacement should be handled as an access-change event:

1. Confirm the customer identity through the approved operator process.
2. Remove or disable the old mobile device target where appropriate.
3. Register the new phone through the Home Assistant Companion App.
4. Confirm the correct customer Home Assistant user is used.
5. Update private handoff notes outside the public repo if a new notify service name is required.

---

## 6. WNYHS Admin Model

Each customer deployment may include a WNYHS admin Home Assistant account for deployment support, backup/restore support, dashboard maintenance, and controlled troubleshooting.

Technician accounts should be separate from the WNYHS admin account when technician access is needed.

Technician access should be time-bounded or removed when the onsite or remote support task is complete.

WNYHS admin and technician access should not share customer passwords and should not require the customer to provide their Home Assistant password to WNYHS.

Remote dashboard maintenance may include:

- Dashboard review and correction.
- Entity naming cleanup when separately authorized.
- Backup/restore support.
- Access troubleshooting.
- Companion App remote URL support.

Any direct live customer-system change still requires the applicable customer approval and bounded work authorization.

---

## 7. Security Rules

The following rules are mandatory:

- No public port forwarding to Home Assistant.
- No default/admin customer login for normal owner use.
- No shared customer passwords.
- No secrets committed to the repo.
- No tunnel tokens in docs.
- No customer credential storage in the repo.
- No Cloudflare API tokens, tunnel credentials, Zero Trust secrets, Home Assistant long-lived access tokens, passwords, recovery codes, private URLs, or mobile notify private details in source control.
- No live Cloudflare config files in this repo unless a future task explicitly authorizes a non-secret template or inventory artifact.
- No Home Assistant backup tar files committed unless a future governance task explicitly permits a safe storage model.

Access reviews should confirm:

- Active customer accounts still match current owners.
- WNYHS admin access is still needed.
- Technician accounts are removed when no longer needed.
- Customer URLs and DNS inventory remain accurate.
- No temporary setup account remains active after handoff.

---

## 8. Network Assumptions

Remote access planning assumes:

- Home Assistant Green has reliable internet access.
- Home Assistant Green has a static IP address or DHCP reservation.
- Cameras have DHCP reservations.
- The security LAN may be separate from the office, VoIP, or business LAN.
- The remote access setup must not disrupt customer business LAN, VoIP, VPN, or other existing networks.
- Local Home Assistant access should continue to work if remote access is unavailable.

If a customer network uses separate security, office, VoIP, guest, or VPN segments, document the assumption before making changes. Do not modify customer business routing unless a separate bounded task and customer approval authorize it.

---

## 9. Standard Device Prerequisites

Before tunnel setup, confirm:

- Home Assistant Green is online.
- Home Assistant local URL works.
- Home Assistant has a current backup.
- File Editor is installed when needed for supported configuration edits.
- Samba Share is installed when needed for file transfer.
- Terminal & SSH is installed when needed for authorized troubleshooting.
- The Cloudflared add-on is installed or available for installation.
- Cloudflared configuration is not committed with secrets.
- Required Home Assistant users exist before customer handoff.

Do not store Cloudflare tunnel credentials, Cloudflare tokens, Home Assistant credentials, or mobile device private identifiers in this repository.

---

## 10. Ongoing Operations

### Customer Onboarding

Customer onboarding should record:

- Approved customer slug.
- Customer-specific URL.
- Home Assistant customer user created.
- Customer dashboard verified.
- Companion App connected to the customer-specific URL.
- Local access still verified.
- Backup created before and after successful remote access setup.

### Technician Access Revocation

After technician work:

- Disable or remove technician accounts that are no longer needed.
- Remove temporary Cloudflare Access policy exceptions where applicable.
- Confirm WNYHS admin access remains separate.
- Record the access change in private operator notes outside the public repo.

### Customer Offboarding

When a customer offboards:

- Remove or disable WNYHS admin and technician access unless retained by written agreement.
- Remove customer-specific Cloudflare Access permissions where applicable.
- Retire or archive the customer hostname according to the DNS inventory process.
- Rotate tunnel credentials when needed.
- Preserve any required handoff or backup records outside the public repo.

### DNS Naming Conventions

Use one customer hostname per Home Assistant instance unless a future architecture task authorizes a different pattern.

Keep DNS inventory current. The inventory should identify customer slug, hostname, deployment owner, status, and non-secret operational notes.

### Backup And Review

Create a Home Assistant backup before tunnel changes and after successful setup.

Perform periodic access review for customer, WNYHS admin, technician, and Cloudflare Access policy state.

---

## 11. Scope Boundaries

This standard does not authorize:

- Live Cloudflare dashboard, DNS, tunnel, or Zero Trust changes.
- Cloudflare API or CLI usage.
- Cloudflare config file creation.
- Home Assistant live configuration changes.
- Home Assistant add-on installation.
- Customer credential handling.
- Secret storage.
- App code changes.
- Website route or copy changes.
- HubSpot, Stripe/payment, scheduling, Resend/email, API/backend, dependency, or package-lock changes.
