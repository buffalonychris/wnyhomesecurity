# WNY Home Security — Master Task Register

## T-HA-REMOTE-001 — Peckham Cloudflare Tunnel Remote Access

- Status: ACTIVE
- Category: OPS
- Controlling context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- Site: Peckham
- Public hostname: `peckham.wnyhomesecurity.com`
- Home Assistant LAN address: `192.168.0.102`

### Objective
Configure secure remote access to the Peckham Home Assistant Green through the existing `wnyhomesecurity.com` Cloudflare zone using an outbound Cloudflare Tunnel.

### Authorized scope
- Create/configure the Peckham outbound Cloudflare Tunnel.
- Bind `peckham.wnyhomesecurity.com` to the tunnel.
- Configure only the Home Assistant proxy/network settings required for the tunnel to operate securely.
- Preserve the router-side DHCP reservation for `192.168.0.102`.
- Validate remote Home Assistant access from outside the Peckham LAN.
- Capture the successful procedure as a candidate reusable WNYHS Home Assistant Green remote-access baseline.

### Required constraints
- No inbound router port forwarding.
- No DMZ exposure.
- No Nabu Casa dependency.
- No unrelated DNS, website, funnel, payment, CRM, scheduling, or Bailey changes.
- Do not expose Cloudflare credentials, tunnel tokens, Home Assistant credentials, or other secrets in repository documentation.
- Preserve existing Home Assistant functionality and local LAN access.

### Completion evidence
- `peckham.wnyhomesecurity.com` resolves through Cloudflare Tunnel.
- Remote HA login succeeds from a device outside the Peckham LAN.
- Local HA access remains functional.
- Reusable procedure and site-specific values are documented without secrets.
