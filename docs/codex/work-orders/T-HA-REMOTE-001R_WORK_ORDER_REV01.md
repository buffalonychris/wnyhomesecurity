Task ID: T-HA-REMOTE-001R
Work Order Revision: REV01
Supersedes for execution: stale PR #570 branch task/ha-remote-001-peckham-cloudflare
Status: OPERATOR AUTHORIZED
Category: GOV / OPS RECONCILIATION
Primary Workstream: Home Assistant Remote Access / Customer Deployment Operations
Related Workstreams: Project Governance; Home Assistant; Customer Handoff; Service / Remote Support

READ MODE: TARGETED
Search exact IDs/headings first; load only applicable authority and owner sections.

# T-HA-REMOTE-001R — Reconcile Peckham/Bailey Cloudflare Remote Access Governance

## 1. Objective

Replace the stale, unmergeable governance branch behind PR #570 with a current-main reconciliation task that records the remote-access work already completed onsite and aligns durable repository standards with the validated Peckham and Bailey Home Assistant Cloudflare Tunnel deployments.

This task is documentation/governance reconciliation only. It does not authorize new live Cloudflare, DNS, Home Assistant, router, Companion App, or customer-system changes.

## 2. Why This Reconciliation Exists

PR #570 was created before later Master Task Register changes landed on `main`, including DASH-GOV-001. Its only changed file was `/docs/system/master-task-register.md`, and it is now stale/conflicted against current `main`.

The onsite work that PR #570 was intended to authorize has already been completed and validated:

- Peckham remote access is operational at `https://peckham.wnyhomesecurity.com`.
- Bailey remote access is operational at `https://bailey.wnyhomesecurity.com`.
- Both use outbound Cloudflare Tunnel architecture with no inbound router port forwarding and no Nabu Casa dependency.
- Both preserve local Home Assistant access.
- Cloudflared is installed as a Home Assistant add-on and configured to start on boot with watchdog enabled.
- Home Assistant reverse-proxy trust is configured for the add-on network using `172.30.33.0/24`.
- The exact Home Assistant origin port is deployment/version dependent and must be validated rather than hardcoded globally:
  - Peckham validated origin: `http://homeassistant:80`.
  - Bailey validated origin: `http://homeassistant:8123`.
- Peckham exposes reverse-proxy configuration in the Home Assistant UI under Settings > System > Network > HTTP server.
- Bailey does not expose that UI and uses the equivalent top-level `http:` YAML configuration.
- Home Assistant Companion App access has been validated using the public Cloudflare hostname and normal HA credentials.
- Multi-site Companion App usage is required for WNYHS operators/technicians who manage more than one deployment.

This task must preserve these facts without copying secrets, tunnel tokens, passwords, private recovery data, or backup contents into the repository.

## 3. Execution Gates

1. Start from synchronized current `origin/main` containing the merged DASH-GOV-001 reconciliation.
2. Confirm PR #570 remains unmerged and treat it as stale lineage only; do not merge, rebase, cherry-pick, or resolve that branch into current work.
3. Read the current authority chain before edits:
   - `/docs/system/project.md`
   - `/docs/system/guardrails.md`
   - `/docs/system/agent.md`
   - `/docs/system/plan.md`
   - `/docs/system/step-current.md` or current successor
   - `/docs/system/master-task-register.md`
   - current Codex execution standard
4. Confirm the current canonical owners for Home Assistant remote access, customer access/runbook, bootstrap, service/remote support, and document registration before modifying them.
5. If current authority materially conflicts with this work order, stop and report the exact conflict.
6. Do not infer executable authority from chat history beyond the operator-approved facts explicitly recorded in this work order.

## 4. Task Registration

Register `T-HA-REMOTE-001R` in `/docs/system/master-task-register.md` using the current schema.

The task record must state that:

- PR #570 is superseded for execution by this reconciliation task and remains lineage only.
- Peckham implementation is complete and validated.
- Bailey is a second validated implementation reference.
- This task is documentation/governance reconciliation only.
- No live infrastructure changes are authorized.

Do not rewrite, reorder, truncate, replace, or normalize unrelated MTR records.

## 5. Canonical Sources To Reconcile

Use targeted reads of current versions/successors of:

- `/docs/home-assistant/cloudflare-remote-access-standard.md`
- `/docs/home-assistant/wnyhs-cloudflare-customer-access-runbook.md`
- `/docs/home-assistant/wnyhs-cloudflare-remote-support-architecture.md`
- `/docs/home-assistant/cloudflare-tunnel-customer-implementation-plan.md`
- `/docs/installer/INSTALL008_HA_GREEN_BOOTSTRAP_STANDARD_REV01.md`
- `/docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md`
- `/docs/system/master-task-register.md`
- current Document Catalog / Markdown Manifest owners if required by current governance

Use PR #570 only as historical lineage evidence for its original objective/constraints. Do not use the stale branch as a merge source.

## 6. Required Reconciliation Decisions

### 6.1 Hostname model

Update the reusable remote-access standard so the current default WNYHS customer-site hostname pattern is:

`<site-slug>.wnyhomesecurity.com`

Validated examples:

- `peckham.wnyhomesecurity.com`
- `bailey.wnyhomesecurity.com`

Do not retain `remote.wnyhomesecurity.com` as the required default parent zone if current repo authority does not independently require it. If it remains as an optional/legacy model, label that distinction explicitly.

### 6.2 Tunnel model

The reusable standard must preserve:

- outbound Cloudflare Tunnel only
- no inbound router port forwarding
- no DMZ exposure
- no required Nabu Casa dependency
- one customer/site-specific hostname per HA instance unless separately authorized
- Cloudflared add-on starts on boot and watchdog remains enabled
- WARP routing disabled for standard HA remote-access deployments unless a separate task authorizes network routing

### 6.3 Origin service model

Do not hardcode one universal Home Assistant internal port.

The standard must require validation of the reachable origin service from the Cloudflared add-on environment and record the deployment-specific value.

Validated reference values:

- Peckham: `http://homeassistant:80`
- Bailey: `http://homeassistant:8123`

Troubleshooting guidance should interpret `502 Bad Gateway` plus Cloudflared `connection refused` as an origin reachability/port problem before changing trusted-proxy settings.

### 6.4 Home Assistant reverse-proxy model

The standard must document both supported configuration paths observed in production:

**UI-managed path**
- Settings > System > Network > HTTP server > Reverse proxy
- Trust X-Forwarded-For: enabled
- Trusted proxies: `172.30.33.0/24`

**YAML-managed path**
```yaml
http:
  use_x_forwarded_for: true
  trusted_proxies:
    - 172.30.33.0/24
```

Use the Home Assistant UI when that installation has migrated HTTP settings there. Do not leave a duplicate/ignored YAML `http:` block after migration. If the UI section is absent, the YAML path may be used when supported by that installation.

Troubleshooting guidance should interpret `400 Bad Request` / reverse-proxy-not-trusted errors as evidence that the tunnel is reaching HA and trusted-proxy configuration is the next issue to resolve.

### 6.5 Companion App / customer-access model

Document the validated customer/technician access flow:

- Public site URL uses HTTPS, for example `https://peckham.wnyhomesecurity.com`.
- Cloudflare handles public TLS; the internal tunnel origin may remain HTTP.
- Home Assistant credentials authorize the user; no per-phone Cloudflare device approval is required in the current baseline.
- Home Assistant Companion App may register multiple HA servers for multi-site users.
- Each human gets an individual HA account; do not share the CLG Tech service/admin account.
- Customer users are non-admin daily-use users.
- Technician accounts are named individual accounts and are non-admin by default unless a separately authorized service action requires elevation.
- `CLG Tech` / username `clg` is the standardized WNYHS setup/admin account and remains controlled by the operator.
- Current baseline does not require MFA; do not add MFA requirements in this task.

### 6.6 Offboarding

Add/retain a clear offboarding requirement:

- disable/remove the user as appropriate
- revoke active HA sessions/tokens where applicable
- remove obsolete Mobile App device registrations/notification targets where appropriate
- remove technician access when no longer required
- do not rely only on changing a password

### 6.7 Secrets and customer data

Do not commit:

- Cloudflare tunnel tokens
- Cloudflare API credentials
- HA passwords
- long-lived access tokens
- backup tar files
- private recovery material
- customer email addresses or other unnecessary personal information

## 7. Allowed Scope

- Register/update only the `T-HA-REMOTE-001R` MTR record and its execution evidence.
- Update the current canonical Cloudflare/Home Assistant remote-access standard to reflect the validated implementation model.
- Update the current customer-access/runbook and remote-support architecture only where needed to remove stale hostname/origin/proxy assumptions and align onboarding/offboarding behavior.
- Update the current implementation plan only if it still presents stale required architecture that contradicts the validated deployments.
- Update Document Catalog / Markdown Manifest only if current governance requires registration changes because of a new revision/file.
- Record PR #570 as superseded lineage; do not delete historical evidence unless current governance explicitly requires it.
- Run documentation validation required by current repository governance.

## 8. Forbidden Scope

- No live Cloudflare dashboard, DNS, tunnel, Access, WARP, or API changes.
- No Home Assistant live configuration or add-on changes.
- No router/network changes.
- No Companion App live changes.
- No dashboard implementation.
- No automation/notification implementation.
- No device/entity renaming.
- No KAOS implementation.
- No website/source/runtime behavior changes.
- No HubSpot, CRM, Stripe/payment, scheduling, email, backend, dependency, package-lock, environment, or secret changes.
- No deletion/rewrite of unrelated MTR content.
- No broad documentation cleanup.
- No merge, auto-merge, or deployment by Codex.

## 9. Owner Routing Matrix

| Approved concept | Current canonical owner | Target | Action | Boundary | Conflict | Confidence |
|---|---|---|---|---|---|---|
| Bounded reconciliation task registration/status | Project Governance / Master Task Register | `/docs/system/master-task-register.md` | MODIFY | T-HA-REMOTE-001R record only | NO | HIGH |
| Reusable HA Cloudflare remote-access architecture and security rules | Current HA remote-access owner | `/docs/home-assistant/cloudflare-remote-access-standard.md` or current successor | MODIFY | Remote-access architecture only | NO | HIGH |
| Customer/Companion onboarding and offboarding workflow | Current HA customer-access owner | `/docs/home-assistant/wnyhs-cloudflare-customer-access-runbook.md` or current successor | MODIFY IF NEEDED | Access workflow only | NO | HIGH |
| WNYHS service/technician remote-support architecture | Current remote-support owner | `/docs/home-assistant/wnyhs-cloudflare-remote-support-architecture.md` or current successor | MODIFY IF NEEDED | Remote-support architecture only | NO | HIGH |
| Stale implementation-plan assumptions | Current HA tunnel implementation-plan owner | `/docs/home-assistant/cloudflare-tunnel-customer-implementation-plan.md` or current successor | MODIFY IF NEEDED | Only stale assumptions contradicted by validated deployments | NO | HIGH |
| HA Green bootstrap references to remote access | Installer/bootstrap owner | `/docs/installer/INSTALL008_HA_GREEN_BOOTSTRAP_STANDARD_REV01.md` or current successor | REFERENCE ONLY unless current owner explicitly requires synchronization | Bootstrap remains separate owner | NO | HIGH |
| Service dashboard / support policy | Service/support owner | `/docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md` or current successor | REFERENCE ONLY | Do not absorb service-dashboard policy into tunnel docs | NO | HIGH |
| Durable document registration | Project Governance catalog/manifest owner | current catalog/manifest file(s) | MODIFY IF REQUIRED | Registration only | NO | HIGH |

If targeted owner discovery identifies a different current successor, use the successor and record the substitution in closeout. If multiple plausible owners exist with no clear canonical owner, stop and report the ambiguity.

## 10. Validation / Acceptance

Before completion verify:

1. Branch started from current synchronized `main` after DASH-GOV-001 merge.
2. PR #570 content was not merged/cherry-picked into this task.
3. Only authorized documentation/governance files changed.
4. MTR unrelated content was preserved exactly outside the bounded task record.
5. Peckham and Bailey validated values are represented accurately and clearly separated from universal rules.
6. No universal origin port is invented.
7. Hostname model reflects current validated WNYHS practice.
8. UI-managed and YAML-managed reverse-proxy paths are both documented without duplication.
9. Companion App multi-site, individual-user, and offboarding rules are documented.
10. No MFA requirement was introduced.
11. No secrets, tokens, passwords, customer backup files, or private recovery values were added.
12. Run current docs validation/lint required by repository governance.
13. Run `git diff --check`.
14. Report changed files, `git diff --stat`, and `git status`.
15. Application build is a governed skip unless current repository authority explicitly requires it for docs-only changes.

## 11. Git / PR Requirements

- Fresh branch from synchronized current `origin/main`.
- One bounded reconciliation task per branch/PR.
- Stage only authorized files.
- One task-specific commit.
- Push branch and open one draft PR.
- PR title should identify `T-HA-REMOTE-001R` and Cloudflare remote-access reconciliation.
- PR body must state that PR #570 is stale/superseded and was not merged into the branch.
- Do not merge, enable auto-merge, mark ready, or deploy. Operator performs those actions manually after review.

## 12. Closeout Summary Required From Codex

Return:

- branch name
- commit SHA
- draft PR number/link
- exact files changed
- MTR task status/evidence added
- standards/runbooks updated
- any current-owner successor substitutions
- validation commands/results
- confirmation that no live systems changed
- confirmation that PR #570 was not merged/cherry-picked
- confirmation that no secrets/customer backup material were introduced
- any blockers or authority conflicts
