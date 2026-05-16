# Cloudflare Email Routing Contract — REV01

## Owner

Canonical owner doc:

- `/docs/runtime/cloudflare_email_routing.md`

Primary owner:
- WNYHS operators maintaining Cloudflare Email Routing and mailbox forwarding configuration.

Secondary owner(s):
- Application maintainers for alignment with support/admin mailbox references in runtime docs.

## Purpose

Define the canonical inbound email runtime contract for Cloudflare Email Routing, including documented ownership boundaries, env-var references, routing expectations, failure modes, diagnostics, and change procedure.

This is documentation-only authority and does not change runtime behavior.

## Applies To

- Domain inbound email routing on Cloudflare.
- Alias and forwarding behavior for operational mailboxes.
- Relationship boundary between inbound routing (Cloudflare) and outbound sending (Resend/API).

## Authority

Governing docs:

- `/docs/system/project.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/guardrails.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`

Supporting references:

- `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `/docs/specs/full-stack-spec.md`
- `/docs/runtime/cloudflare_env.md`

## Inbound Email Model

Confirmed in repo docs:

- Inbound architecture model is documented as: Customer → Cloudflare Email Routing → operator inbox destination.
- Cloudflare Email Routing is runtime dependency for inbound email ownership.
- Resend is outbound only in architectural references.

UNKNOWN / NEEDS VERIFICATION:

- Exact domain aliases/routes currently configured in Cloudflare dashboard.
- Exact forwarding destinations currently configured for each alias.
- Catch-all behavior (enabled/disabled) in production.
- Confirmed routing rules and priority order.
- Confirmed DNS/MX record state in production.
- Confirmed operator inbox access ownership and backup coverage.

Documented mailbox candidates found in repository references (verification status required):

- `admin@wnyhomesecurity.com` — referenced in Step201 reply-to mapping; active inbound route UNKNOWN / NEEDS VERIFICATION.
- `support@wnyhomesecurity.com` — referenced in Step201 and inventory docs; active inbound route UNKNOWN / NEEDS VERIFICATION.
- `sales@wnyhomesecurity.com` — referenced in Step201 reply-to mapping; active inbound route UNKNOWN / NEEDS VERIFICATION.
- `vendors@wnyhomesecurity.com` — not confirmed in audited docs; UNKNOWN / NEEDS VERIFICATION.
- `chris@wnyhomesecurity.com` — not confirmed in audited docs; UNKNOWN / NEEDS VERIFICATION.
- `lou@wnyhomesecurity.com` — not confirmed in audited docs; UNKNOWN / NEEDS VERIFICATION.

## Environment Variables

| Variable | Required | Environment | Purpose | Owner Doc | Verification Status | Notes |
|---|---|---|---|---|---|---|
| `SUPPORT_EMAIL` | UNKNOWN | UNKNOWN | Generic alias for support mailbox reference in app/runtime docs. | `/docs/runtime/cloudflare_email_routing.md` | UNKNOWN / NEEDS VERIFICATION | Variable name requested for contract completeness; not confirmed in audited runtime inventory. |
| `ADMIN_EMAIL` | UNKNOWN | UNKNOWN | Generic alias for admin mailbox reference in app/runtime docs. | `/docs/runtime/cloudflare_email_routing.md` | UNKNOWN / NEEDS VERIFICATION | Variable name requested for contract completeness; not confirmed in audited runtime inventory. |
| `PUBLIC_SITE_URL` | Conditional | Production + Preview | Site URL context that may appear in operator email content/workflows. | `/docs/runtime/cloudflare_env.md` | CONFIRMED IN DOCS | Confirmed in Cloudflare runtime variable table, not a routing control itself. |

Inbound Cloudflare routing itself is primarily dashboard/DNS configured and may not rely on repository env vars.

## External Services

- Cloudflare Email Routing.
- DNS/MX provider path for domain inbound mail.
- Destination mailbox provider(s) receiving forwarded inbound mail (provider unspecified in audited docs).

## Inbound Flow

Documented architectural flow:

1. External sender sends mail to WNYHS domain alias.
2. Cloudflare Email Routing evaluates configured route.
3. Message is forwarded to configured destination mailbox.
4. Operator mailbox receives message for response/workflow handling.

UNKNOWN / NEEDS VERIFICATION:

- Alias-to-destination map per mailbox.
- Whether multiple destinations or failover forwarding is configured.
- Whether spam/abuse handling or rejection rules are configured.

## Outbound Flow

Cloudflare Email Routing contract does not own outbound application sends.

- Outbound app/server email ownership belongs to Resend runtime contract.
- Any operator mailbox replies generated from destination inboxes are mailbox-provider behavior and outside repository runtime control.

## Data Contract

Inbound routing contract data handled at operational level:

- Recipient alias at domain.
- Forwarding destination mailbox.
- Message headers/body forwarded by Cloudflare routing service.

UNKNOWN / NEEDS VERIFICATION:

- Any canonical normalization/filtering rules applied by operator mailbox destinations.

## Failure Modes

- Domain/MX not configured or misconfigured.
- Route missing for expected alias.
- Forwarding destination not verified in Cloudflare routing settings.
- Mailbox destination wrong or stale.
- Support/admin alias mismatch between documented ownership and active routing configuration.
- Inbound email delivered to wrong person.
- Email route exists but is not documented.

## Fallback Behavior

UNKNOWN / NEEDS VERIFICATION:

- Defined backup inbox/failover routing policy.
- Defined operator escalation policy when routing fails.

Minimum documentation-safe fallback expectation:

- Routing issues should be operator-visible and trigger manual correction workflow; avoid silent loss.

## Diagnostics

- Validate Cloudflare Email Routing route list and destination verification status in dashboard.
- Validate DNS/MX state for domain mail flow.
- Send controlled inbound test message to each documented alias and confirm destination delivery.
- Confirm recipient mailbox ownership for support/admin/sales operational workflows.
- Cross-check runtime docs so alias ownership and destinations are documented.

## Validation Checklist

- [ ] Confirm domain MX/routing prerequisites are configured in production.
- [ ] Confirm each expected alias route exists.
- [ ] Confirm each forwarding destination is verified and current.
- [ ] Confirm support/admin/sales ownership alignment between docs and dashboard.
- [ ] Confirm no undocumented catch-all route introduces misdelivery risk.
- [ ] Confirm inbound test deliveries reach intended operator inboxes.

## Change Procedure

1. Update this contract before or alongside any inbound email routing ownership change.
2. Update `/docs/runtime/runtime_ownership_map.md` if status/ownership state changes.
3. Update `/docs/DOCUMENT_CATALOG.md` when doc catalog entries change.
4. Track task lifecycle in `/docs/system/master-task-register.md` under ACTIVE task governance.
5. Perform validation checks and `npm run build` before completion.

## Related Docs

- `/docs/runtime/runtime_contract_template.md`
- `/docs/runtime/runtime_ownership_map.md`
- `/docs/runtime/cloudflare_env.md`
- `/docs/runtime/resend_runtime.md`
- `/docs/specs/full-stack-spec.md`
- `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`

## Last Verified

- Date (UTC): 2026-05-16
- Branch/commit: NEEDS VERIFICATION (record at merge/release time)
- Verified by: Codex execution for T-RUNTIME004-001
- Evidence:
  - Documentation audit of runtime/system/spec/step references in `docs/`.
  - Runtime-contract completion using `/docs/runtime/runtime_contract_template.md` structure.
