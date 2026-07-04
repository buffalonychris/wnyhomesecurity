# WNYHS Cloudflare Customer Access Runbook

Status: Active runbook
Scope: Customer Home Assistant remote-access setup and validation

---

## 1. Purpose

This runbook defines the standard WNYHS customer access sequence for Cloudflare Tunnel based Home Assistant remote access.

It covers pre-work, onsite prerequisites, Cloudflare setup steps, Companion App setup, WNYHS admin setup, validation, customer handoff, offboarding/revocation, and troubleshooting.

This is documentation only. It does not authorize live Cloudflare changes, DNS changes, tunnel creation, Home Assistant configuration changes, customer credential handling, app code changes, website changes, HubSpot changes, Stripe/payment changes, scheduling changes, API/backend changes, dependency changes, package-lock changes, or secret storage.

---

## 2. Pre-Work

Before setup:

1. Confirm `wnyhomesecurity.com` is active in Cloudflare.
2. Select the approved customer slug.
3. Confirm the target hostname in the standard format:
   - `<customer>.remote.wnyhomesecurity.com`
4. Confirm customer approval for remote access.
5. Confirm whether Cloudflare Access policy is required for customer, WNYHS admin, or technician access.
6. Confirm no tunnel tokens, passwords, Home Assistant credentials, Cloudflare tokens, mobile private details, or customer secrets will be stored in repo files.
7. Prepare the non-secret customer URL inventory entry if a governed inventory exists.

BKLF example:

- Customer slug: `bklewis`
- Target hostname: `bklewis.remote.wnyhomesecurity.com`

---

## 3. Onsite Prerequisites

Confirm onsite:

- Home Assistant Green is reachable locally.
- Home Assistant Green internet access works.
- Home Assistant Green has a static IP address or DHCP reservation.
- Cameras have DHCP reservations.
- Customer business LAN boundaries are understood.
- Customer VoIP, MEMS, VPN, office, point-of-sale, guest, or business networks will not be disrupted.
- WNYHS admin Home Assistant user exists.
- Technician Home Assistant user exists if needed.
- Customer non-admin Home Assistant user exists.
- Home Assistant backup is created before tunnel setup.
- Local dashboard access works before remote setup starts.

Do not continue if customer network ownership, routing, VLAN, firewall, or VPN impact is unclear.

---

## 4. Cloudflare Setup Steps

Standard sequence after customer approval:

1. Create the customer tunnel in Cloudflare Zero Trust.
2. Install or configure `cloudflared` on the Home Assistant Green or an approved local host.
3. Authenticate the tunnel using the approved Cloudflare flow.
4. Map the customer public hostname to the internal Home Assistant service.
5. Apply Cloudflare Access policy where appropriate.
6. Verify the remote URL loads.
7. Verify Home Assistant login is still required.
8. Verify local Home Assistant access still works.
9. Create a post-success Home Assistant backup.

BKLF example internal target:

- `http://192.168.2.106:8123`

BKLF example hostname:

- `bklewis.remote.wnyhomesecurity.com`

Do not commit tunnel token, tunnel UUID, connector credential, Cloudflare token, Home Assistant password, or customer private device detail to the repo.

---

## 5. Companion App Setup

Customer Companion App setup:

1. Customer opens or installs the Home Assistant Companion App.
2. Customer connects using the customer remote URL.
3. Customer logs in with the customer non-admin Home Assistant account.
4. Customer allows notifications if notifications are part of the approved handoff.
5. Verify the customer dashboard loads.
6. Verify camera views load if included.
7. Verify lock control works if included.
8. Capture the `notify.mobile_app_*` service in private operator notes only.

Do not store private phone names, push identifiers, personal device details, or actual mobile notify target values in public repo docs.

---

## 6. WNYHS Admin Setup

WNYHS admin setup:

1. WNYHS admin logs in with the WNYHS admin Home Assistant account.
2. Verify dashboard editing access if dashboard support is included.
3. Verify remote support access.
4. Verify WNYHS admin access is separate from customer access.
5. Verify technician accounts are separate where needed.
6. Confirm no shared customer credentials are used.
7. Confirm MFA is enabled for WNYHS admin accounts where available.

Technician access should be time-bounded or removed when the support task is complete.

---

## 7. Validation Checklist

Remote access is not complete until applicable checks pass:

- [ ] Remote URL loads.
- [ ] Home Assistant login works.
- [ ] Customer non-admin login works.
- [ ] Customer dashboard loads.
- [ ] Cameras load.
- [ ] Lock control works where included.
- [ ] Local Home Assistant access still works.
- [ ] Companion App works offsite.
- [ ] Notifications are tested if enabled.
- [ ] WNYHS admin login works separately from customer login.
- [ ] Technician account is removed or disabled when no longer needed.
- [ ] Pre-change backup exists.
- [ ] Post-success backup is created.
- [ ] No tunnel token, password, Cloudflare token, Home Assistant credential, or mobile private detail was committed to the repo.

---

## 8. Customer Handoff

Handoff steps:

1. Give the customer their remote URL.
2. Confirm the customer can log in with the customer account.
3. Confirm customer dashboard access.
4. Confirm lock, camera, and doorbell access where included in the deployment.
5. Explain local-first operation.
6. Explain that remote access depends on internet, Cloudflare path health, and Home Assistant availability.
7. Explain the support path for phone replacement or account changes.
8. Confirm the customer understands that WNYHS does not need the customer Home Assistant password for admin or technician support.

Do not include passwords, recovery codes, tunnel tokens, Cloudflare tokens, mobile private details, or other secrets in customer handoff docs.

---

## 9. Offboarding And Revocation

When offboarding or revoking access:

1. Disable customer hostname if needed.
2. Remove or disable customer Home Assistant users when appropriate.
3. Remove or disable WNYHS admin access unless retained by written agreement.
4. Revoke technician accounts.
5. Remove temporary Cloudflare Access policy exceptions where applicable.
6. Rotate tunnel credentials when appropriate.
7. Update private operator notes outside the public repo.

Do not leave temporary setup accounts active after handoff or offboarding.

---

## 10. Troubleshooting

### Tunnel Offline

- Confirm Home Assistant Green or approved host has internet access.
- Confirm `cloudflared` is running.
- Confirm the local internal Home Assistant target is reachable from the `cloudflared` host.
- Confirm no customer firewall or VLAN rule changed.
- Do not paste tunnel tokens or connector secrets into repo docs or issue comments.

### DNS Not Resolving

- Confirm the hostname matches the approved customer slug.
- Confirm Cloudflare DNS record status in the Cloudflare dashboard.
- Confirm the hostname uses `<customer>.remote.wnyhomesecurity.com`.
- Confirm no typo in the customer URL.

### Home Assistant Login Works Locally But Not Remotely

- Confirm the tunnel target points to the correct internal Home Assistant service.
- Confirm Home Assistant is listening at the expected local URL.
- Confirm any reverse-proxy or trusted-proxy settings are appropriate for the approved setup.
- Confirm Cloudflare Access policy is not blocking the intended user.

### Companion App Cannot Connect

- Confirm the customer remote URL opens in a browser first.
- Confirm the customer is using the customer non-admin Home Assistant user.
- Confirm the app server URL is the remote URL.
- Confirm the phone has internet access.
- Re-register the app only after confirming account and URL details.

### Camera Stream Issues

- Confirm cameras still have DHCP reservations.
- Confirm camera streams work locally in Home Assistant.
- Confirm the dashboard camera entities load for the customer user.
- Confirm the customer network path has not changed.

### Notification Service Missing

- Confirm the customer logged into the Companion App with the customer account.
- Confirm notifications were allowed on the phone.
- Confirm Home Assistant created the expected `notify.mobile_app_*` service.
- Record the actual service name only in private operator notes.
- Keep notification automations disabled until the correct private notify target is inserted onsite.

---

## 11. Scope Boundary

This runbook does not authorize:

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
