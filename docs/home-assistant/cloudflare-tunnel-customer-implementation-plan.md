# WNYHS Cloudflare Tunnel Customer Implementation Plan

Status: Active implementation plan
Scope: Customer Home Assistant remote-access setup planning

---

## 1. Purpose

This plan defines the standard customer implementation sequence for using Cloudflare Tunnel with WNYHS Home Assistant deployments.

It separates offsite preparation, onsite verification, Cloudflare setup, Home Assistant Companion App setup, notification integration, validation, ongoing operation, risk controls, and future platform direction.

This document is planning guidance only. It does not authorize live Cloudflare changes, DNS changes, Home Assistant changes, token handling, secrets handling, or committed live configuration.

---

## 2. Pre-Work Offsite

Before onsite setup:

1. Register or confirm the WNYHS remote-access domain plan.
2. Confirm the relevant domain is in Cloudflare.
3. Choose the customer hostname.
4. Define the customer slug.
5. Prepare the Cloudflare Zero Trust account and tenant structure.
6. Decide whether Cloudflare Access policy is required for customer, WNYHS admin, technician, or support access.
7. Confirm the customer has approved optional remote access.
8. Confirm no tunnel tokens, Cloudflare API tokens, passwords, or Home Assistant credentials will be stored in the repo.
9. Prepare a non-secret DNS inventory entry for the customer hostname.

Standard hostname pattern:

- Parent zone: `remote.wnyhomesecurity.com`
- Customer hostname: `<customer-slug>.remote.wnyhomesecurity.com`

---

## 3. Pre-Work Onsite

Before tunnel setup onsite:

1. Confirm the Home Assistant Green IP address.
2. Confirm Home Assistant Green internet access.
3. Confirm local Home Assistant URL access.
4. Confirm camera IP reservations.
5. Confirm Home Assistant Green has a static IP address or DHCP reservation.
6. Create or verify Home Assistant users:
   - WNYHS admin user
   - Technician user if needed
   - Customer non-admin user
7. Install or verify Cloudflared add-on availability.
8. Create a Home Assistant backup before tunnel setup.
9. Confirm local dashboard access still works before remote setup starts.
10. Confirm the customer business LAN, VoIP, VPN, and office network should not be modified by this task.

---

## 4. BKLF Example

BKLF deployment example:

- Customer: Brian K. Lewis Funeral Home
- Home Assistant Green IP: `192.168.2.106`
- Security LAN: `192.168.2.0/24`
- Proposed hostname: `bklewis.remote.wnyhomesecurity.com`
- Doorbell and camera IPs should be reserved.
- Security LAN may remain separate from office, VoIP, or other customer network segments.

Internal Home Assistant service target options:

- Preferred when stable: `http://192.168.2.106:8123`
- Fallback only if reliable onsite: `http://homeassistant.local:8123`

Do not commit any BKLF tunnel token, tunnel UUID, Cloudflare credential, Home Assistant password, or mobile notify private detail to the repo.

---

## 5. Cloudflare Implementation Steps

Implementation should follow this sequence after customer approval:

1. Create the customer tunnel in Cloudflare.
2. Install or configure the Cloudflared add-on on Home Assistant.
3. Authenticate the tunnel using the approved Cloudflare flow.
4. Route the customer hostname to the Home Assistant internal service.
5. Use `http://192.168.2.106:8123` for BKLF unless `homeassistant.local` is proven reliable.
6. Verify the HTTPS remote URL loads.
7. Confirm Home Assistant login is still required.
8. Configure the Home Assistant Companion App with the remote URL.
9. Verify local access still works after remote access succeeds.
10. Create a Home Assistant backup after successful setup.

Cloudflare setup may include:

- Cloudflare Tunnel
- Cloudflare DNS
- Cloudflare Zero Trust Access policy where appropriate

Cloudflare Access must not replace Home Assistant login. Home Assistant user permissions remain required.

---

## 6. Companion App Setup

Companion App setup should use the customer user only.

Steps:

1. Install or open the Home Assistant Companion App.
2. Connect to the customer-specific remote URL.
3. Log in with the customer non-admin Home Assistant user.
4. Allow notifications if customer notifications are part of the handoff.
5. Verify the customer dashboard loads.
6. Verify lock control if included in the customer handoff.
7. Verify camera views load.
8. Capture the `notify.mobile_app_*` service name in private operator notes only.

Do not put private phone names, mobile notify service names tied to a specific person, push identifiers, or customer phone details in repo docs unless a future privacy-reviewed standard explicitly permits a sanitized pattern.

---

## 7. Notification Integration

Notification integration must avoid long-term dependence on a temporary admin phone.

Rules:

- Do not hardcode a temporary admin phone as the long-term notification target.
- Use the customer notify target after the owner phone is registered.
- Keep admin and technician notifications separate from customer notifications.
- Keep customer-facing notification automations disabled until the correct private notify target is inserted onsite.
- Store the actual private notify target outside the public repo.

For BKLF, the owner phone should become the long-term customer notify target after Companion App registration and customer approval.

---

## 8. Validation Checklist

Remote access setup is not complete until all applicable checks pass:

- [ ] Remote URL loads over HTTPS.
- [ ] Home Assistant login works.
- [ ] Customer non-admin user can log in.
- [ ] Customer dashboard loads.
- [ ] Doorbell camera loads.
- [ ] Parking lot camera loads.
- [ ] Lock/unlock works where lock control is included.
- [ ] Notifications deliver to the intended customer phone where enabled.
- [ ] Local Home Assistant access still works.
- [ ] Home Assistant backup existed before tunnel setup.
- [ ] Home Assistant backup was created after successful setup.
- [ ] WNYHS admin access remains separate from customer access.
- [ ] Technician access is disabled or removed when no longer needed.
- [ ] No tunnel token, password, Cloudflare token, Home Assistant credential, or mobile private detail was committed to the repo.

---

## 9. Ongoing Cloudflare Use Plan

Standard operating model:

- Use one tunnel per customer deployment unless architecture changes.
- Use one customer hostname per Home Assistant instance.
- Keep a non-secret DNS inventory.
- Document the customer URL in handoff docs.
- Revoke access on customer offboarding.
- Rotate tunnel credentials when needed.
- Review customer, WNYHS admin, technician, and Cloudflare Access policy state periodically.
- Create a backup before and after meaningful tunnel changes.

Customer handoff docs may include the customer URL, local access fallback, support contact path, and basic Companion App guidance. Handoff docs must not include passwords, recovery codes, tokens, or private device identifiers.

---

## 10. Risk Controls

Required controls:

- Do not expose Home Assistant without Home Assistant authentication.
- Avoid broad public admin access where possible.
- Do not place tunnel tokens in the repo.
- Do not store customer credentials in the repo.
- Do not modify customer business LAN, VoIP, VPN, or office routing unless separately authorized.
- Do not disrupt existing MEMS, VoIP, VPN, point-of-sale, office, or business-critical networks.
- Do not use port forwarding as the remote access model.
- Do not share customer passwords with WNYHS admin or technicians.
- Do not treat remote access as a substitute for local access.

If network segmentation or customer IT ownership is unclear, stop and document the unknown before making changes.

---

## 11. Future WNYHS Platform Direction

Future WNYHS platform work may include:

- A customer portal that links to the customer Home Assistant subdomain.
- A standard remote access module.
- A reusable deployment checklist.
- An optional customer-facing remote access package.
- A DNS inventory and access-review process.
- A support workflow for phone replacement, admin access, technician access, and offboarding.

Those future items require separate bounded tasks before implementation, customer-facing page changes, pricing, portal work, Cloudflare configuration, app code, CRM, payment, scheduling, or runtime changes.

---

## 12. Scope Boundaries

This plan does not authorize:

- Live Cloudflare dashboard, API, CLI, DNS, tunnel, or Access policy changes.
- Cloudflare config file creation.
- Home Assistant live configuration edits.
- Home Assistant backup file commits.
- Secret handling or secret storage.
- Website copy, route, or app code changes.
- HubSpot, Stripe/payment, scheduling, Resend/email, backend/API, dependency, package-lock, environment, or customer proposal changes.
