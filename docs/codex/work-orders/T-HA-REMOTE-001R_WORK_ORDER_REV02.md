Task ID: T-HA-REMOTE-001R
Work Order Revision: REV02
Supersedes for execution: T-HA-REMOTE-001R_WORK_ORDER_REV01.md
Status: OPERATOR AUTHORIZED FOR GOVERNANCE RECONCILIATION
Category: GOV
Primary Workstream: Infrastructure / Deployment System
Related Workstreams: Project Governance; Dashboard / Interactive Experience System; Automation System

READ MODE: TARGETED
Search exact IDs/headings first; load only applicable authority and owner sections.

# T-HA-REMOTE-001R — Reconcile Peckham/Bailey Cloudflare Remote Access Governance

## 1. Objective

Reconcile repository governance with the already-completed Home Assistant Cloudflare Tunnel work at Peckham and Bailey without making any live Cloudflare, DNS, Home Assistant, network, runtime, or customer-system changes.

This task replaces the stale, conflicting PR #570 lineage with a clean current-main reconciliation record. It must preserve all current Master Task Register content and the dashboard-governance additions already merged through PR #569.

## 2. Execution Gates

1. Verify that `Infrastructure / Deployment System` exactly matches the registered OPS004 Primary Workstream before editing.
2. Confirm current `origin/main` is synchronized and clean.
3. Confirm PR #570 and branch `task/ha-remote-001-peckham-cloudflare` are stale lineage only and remain unmerged.
4. Do not merge, rebase, cherry-pick, or copy content from PR #570 or its branch.
5. Confirm this REV02 work order exists on current `main` before executing implementation/reconciliation work. If it does not, stop.
6. Preserve higher-authority repository governance and current MTR schema/content.
7. If any authority conflict remains, stop and report it rather than inferring a resolution.

## 3. Controlling Context

Use targeted reads of applicable current sections of:

- `/docs/system/project.md`
- `/docs/system/guardrails.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/step-current.md` or current successor
- `/docs/system/master-task-register.md`
- `/docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` or current successor
- `/docs/home-assistant/cloudflare-remote-access-standard.md`
- `/docs/home-assistant/wnyhs-cloudflare-customer-access-runbook.md`
- `/docs/home-assistant/wnyhs-cloudflare-remote-support-architecture.md`

Use current repository authority over chat-derived context.

## 4. Known Completed Deployment Evidence

Repository reconciliation may record the following already-completed operational facts, provided no secrets or private credentials are introduced:

### Peckham

- Customer/site hostname: `peckham.wnyhomesecurity.com`
- Home Assistant remote access is operational through Cloudflare Tunnel.
- Public-side access uses HTTPS through Cloudflare.
- Cloudflare tunnel origin is internal HTTP to Home Assistant.
- Home Assistant reverse-proxy trust is configured through the current Home Assistant UI/network configuration path rather than retaining duplicate legacy YAML where the current UI owns the setting.
- Local Home Assistant access remains functional.
- Home Assistant Companion App access has been tested through the customer-specific hostname.

### Bailey

- Customer/site hostname: `bailey.wnyhomesecurity.com`
- Bailey was converted from expired Nabu Casa remote access to the same Cloudflare Tunnel model.
- Public-side access uses HTTPS through Cloudflare.
- Cloudflare tunnel origin reaches the Bailey Home Assistant instance over internal HTTP.
- Bailey local Home Assistant access remains functional.
- Bailey remote login through the customer-specific hostname was verified.

Do not record passwords, tunnel tokens, Cloudflare account identifiers, private recovery information, Home Assistant secrets, or other sensitive values.

## 5. Reconciliation Intent

This task is documentation/governance reconciliation only. Its purpose is to make current repository records accurately reflect the already-proven operating model and close out stale task lineage without disturbing newer governance.

The task must:

1. Register or update the current MTR record for `T-HA-REMOTE-001R` using the current MTR schema.
2. Mark PR #570 / `T-HA-REMOTE-001` as stale/superseded lineage in the narrowest repository-appropriate manner if current governance requires such lineage recording.
3. Record that Peckham and Bailey now use the WNYHS Cloudflare Tunnel remote-access pattern.
4. Update the applicable reusable Home Assistant Cloudflare remote-access standard/runbook only where current repository evidence and completed field validation support a correction.
5. Preserve site-specific differences rather than forcing one exact origin port, LAN address, or implementation detail across all deployments.
6. Preserve local-first operation and no-public-port-forwarding rules.
7. Preserve the rule that customer-facing access uses individual Home Assistant credentials and the customer-specific remote hostname.

## 6. Specific Reconciliation Requirement

The current `cloudflare-remote-access-standard.md` states a standard hostname model under `remote.wnyhomesecurity.com`. The proven current deployments use direct customer/site subdomains under `wnyhomesecurity.com`, specifically `peckham.wnyhomesecurity.com` and `bailey.wnyhomesecurity.com`.

Codex must inspect current authority and determine whether the reusable standard/runbook should be revised to reflect the validated direct-subdomain pattern. If a higher-authority document still mandates the `remote.` parent zone, stop and report the conflict instead of silently changing it.

## 7. Allowed Scope

- Modify `/docs/system/master-task-register.md` only as needed for this task's current-schema record/status/evidence and stale-lineage reconciliation.
- Modify the current canonical Home Assistant Cloudflare remote-access standard/runbook documents only where the completed Peckham/Bailey implementation provides validated reusable evidence and current owner routing permits it.
- Update Document Catalog / Markdown Manifest only if current governance requires registration of a new durable reconciliation artifact.
- Create at most one small reconciliation note only if no existing owner document can correctly absorb the completed deployment evidence.
- Run repository documentation validation applicable to changed documentation.

## 8. Forbidden Scope

- No live Cloudflare dashboard, DNS, tunnel, Zero Trust, Access policy, token, or API changes.
- No Home Assistant configuration changes.
- No Home Assistant YAML, dashboard, automation, notification, device, user, or integration changes.
- No router, LAN, DHCP, firewall, port-forwarding, or network changes.
- No website source/runtime changes.
- No CRM/HubSpot, Stripe/payment, scheduling, email, analytics, or protected runtime changes.
- No secrets, credentials, private URLs, tokens, recovery codes, or customer-sensitive values in repository files.
- No merge, auto-merge, deployment, or destructive branch operations.
- No rewriting unrelated MTR records.
- No broad documentation cleanup.

## 9. Owner Routing

| Concept | Canonical owner | Target | Action | Conflict | Confidence |
|---|---|---|---|---|---|
| Cloudflare hostname/deployment governance | Infrastructure / Deployment System | Current Cloudflare/Home Assistant remote-access standard and runbook | MODIFY IF CURRENT AUTHORITY SUPPORTS | NO | HIGH |
| Bounded task registration/status/evidence | Project Governance | `/docs/system/master-task-register.md` | MODIFY | NO | HIGH |
| Customer dashboard behavior | Dashboard / Interactive Experience System | Existing dashboard governance only | REFERENCE ONLY | NO | HIGH |
| Home Assistant automation behavior | Automation System | Existing automation standard only | REFERENCE ONLY | NO | HIGH |
| Live customer-system implementation | Not authorized in this task | None | FORBIDDEN | NO | HIGH |

If targeted owner discovery identifies a different current canonical owner or a same-level conflict, stop and report it.

## 10. Validation

Before completion:

1. Confirm `Infrastructure / Deployment System` matched OPS004 exactly.
2. Confirm execution began from synchronized current `origin/main` containing this REV02 work order.
3. Confirm PR #570 content was not merged, rebased, cherry-picked, or copied.
4. Confirm only authorized documentation/governance files changed.
5. Confirm current MTR content from PR #569 and all unrelated records were preserved.
6. Confirm no live systems or secrets were touched.
7. Confirm any hostname-standard correction is supported by current repository authority plus validated Peckham/Bailey evidence.
8. Run applicable documentation validation/lint.
9. Run `git diff --check`.
10. Report `git diff --stat` and `git status`.

## 11. Git / PR Requirements

- Fresh task branch from synchronized `origin/main` after this REV02 work order has been merged into `main`.
- One task per branch and PR.
- Stage only authorized files.
- Use a task-specific commit.
- Push the task branch.
- Open one draft PR for operator review.
- Do not merge, enable auto-merge, mark ready, or deploy.

## 12. Completion Report

Report:

- Primary workstream classification.
- Related workstreams.
- Authority/current-state docs loaded.
- Exact files changed.
- How PR #570 lineage was handled.
- Whether the direct `site.wnyhomesecurity.com` hostname pattern was promoted, retained as site-specific evidence, or blocked by authority conflict.
- Validation results.
- Protected-system confirmation.
- Draft PR URL.
- Context efficiency findings.
