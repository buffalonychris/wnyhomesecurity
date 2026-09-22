# DASH-CTX-ROUTING-001 — Dashboard Visual-Task Context Routing Reconciliation

**Revision:** REV01
**Status:** OPERATOR-AUTHORIZED CORRECTION TASK
**Category:** GOV
**Primary Workstream:** Dashboard / Interactive Experience System
**Related Workstreams:** Project Governance; Visual System
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

READ MODE: TARGETED

## 1. Purpose

Resolve the higher-authority conflict that stopped `T-DASH-PECKHAM-HTML-001`.

`docs/system/step-current.md` currently requires every "visual/funnel task" to load five public brand/funnel standards. That wording predates the merged dashboard-governance consolidation in PR #579 and now unintentionally captures Dashboard / Interactive Experience System implementation solely because it is visual.

The operator-approved dashboard authority model merged in PR #579 is:

- INSTALL006 REV02 — dashboard architecture and functional behavior
- DESIGN001 REV02 — dashboard visuals and components
- DASHBOARD001 REV02 — dashboard delivery, binding and validation
- Dashboard Governance Map REV02 — thin routing/lineage only

This task reconciles `step-current.md` so public website/funnel visual work still loads its locked standards while dashboard visual work routes through the current dashboard owners without mandatory public-funnel context.

## 2. Required precheck

1. Start from synchronized `origin/main` containing merged PR #579 at merge commit `f570eb1f10759455485a25533625ad294886c84d` or a later synchronized main preserving it.
2. Confirm the exact conflict in `docs/system/step-current.md` under `Locked Standards Documents (Required Load for Visual/Funnel Tasks)`.
3. Confirm the three canonical dashboard REV02 owners remain active.
4. Confirm `DASHBOARD-CAMPAIGN-001` remains ACTIVE.
5. Do not execute `T-DASH-PECKHAM-HTML-001` in this task.

## 3. Required targeted reads

Read only:
- root `AGENTS.md` relevant execution-routing section
- `docs/system/step-current.md` around the locked visual/funnel standards section
- exact `DASHBOARD-CAMPAIGN-001` MTR block
- headers/purpose/ownership sections only of:
  - `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
  - `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
  - `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` targeted authority/context-routing section only

Do not load full dashboard standards, full MTR, historical dashboard docs, PR #578 history, catalogs, or manifests.

Target Context Pressure: LOW.

## 4. Required work

### 4.1 Update step-current routing language

Change the current heading:

`Locked Standards Documents (Required Load for Visual/Funnel Tasks)`

to language that clearly scopes the five listed standards to **public-site / public-funnel visual work**.

The revised section must preserve mandatory loading of these five documents for applicable public visual/funnel tasks:

- `/docs/brand/brand_asset_standards_rev01.md`
- `/docs/brand/page_layout_standards_rev01.md`
- `/docs/brand/header_footer_standards_rev01.md`
- `/docs/specs/qr_funnel_standards_rev01.md`
- `/docs/specs/public_funnel_standards_rev01.md`

Add an explicit dashboard routing clarification:

- A task in `Dashboard / Interactive Experience System` is **not** a public visual/funnel task merely because it renders visual UI.
- Dashboard tasks route through the current canonical dashboard owners:
  - INSTALL006 REV02 for architecture/functional behavior
  - DESIGN001 REV02 for visuals/components
  - DASHBOARD001 REV02 for delivery/binding/validation
- The Dashboard Governance Map is loaded only when routing/authority is ambiguous.
- Public brand/funnel standards are loaded for a dashboard task only when that bounded task also modifies or depends on the applicable public website/funnel surface or a shared public brand asset governed there.
- This clarification does not weaken claims, privacy, security, Stripe/payment, CRM, runtime, secret, or other protected-system rules.

Do not change the controlling-context identifier or unrelated operational authority.

### 4.2 MTR bookkeeping

Add/update only the bounded `DASH-CTX-ROUTING-001` task record using the current required schema.

This task should end DONE with draft-PR evidence after validation.
`DASHBOARD-CAMPAIGN-001` remains ACTIVE and unchanged except if an evidence pointer is strictly required by current schema.

## 5. Owner Routing Matrix

| Approved concept | Canonical owner | Target | Action | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- |
| Current-context read routing | Current operational context | `docs/system/step-current.md` | MODIFY | YES — stale wording conflicts with merged dashboard owner model | HIGH |
| Bounded execution record | Master Task Register | `docs/system/master-task-register.md` | MODIFY | NO | HIGH |
| Dashboard standards | INSTALL006 / DESIGN001 / DASHBOARD001 REV02 | Reference only | REFERENCE ONLY | NO | HIGH |

## 6. Exact file allowlist

Only:
- `docs/codex/work-orders/DASH-CTX-ROUTING-001_WORK_ORDER_REV01.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`

No other files may change.

## 7. Forbidden scope

Do not:
- change any dashboard implementation/source/prototype files
- edit the three canonical dashboard standards
- execute `T-DASH-PECKHAM-HTML-001`
- alter public-site source, routes, layout, funnel, QR behavior, or assets
- alter Home Assistant
- alter Cloudflare/network/DNS
- alter HubSpot/CRM
- alter Stripe/payment
- alter scheduling/email/runtime/API
- alter dependencies/package-lock
- expose customer data or secrets
- modify or merge PR #578
- merge or deploy this task

## 8. Validation

Tier: governance/docs-only.

Required:
1. Exact three-file allowlist.
2. Confirm the five public visual/funnel standards remain mandatory for applicable public visual/funnel tasks.
3. Confirm dashboard-only visual tasks are explicitly routed to INSTALL006 / DESIGN001 / DASHBOARD001 instead of automatically loading public funnel standards.
4. Confirm Dashboard Governance Map is not a normal implementation read.
5. Confirm no protected-system rule was weakened.
6. Confirm controlling context ID is unchanged.
7. Confirm `DASHBOARD-CAMPAIGN-001` remains ACTIVE.
8. Confirm `T-DASH-PECKHAM-HTML-001` remains unexecuted.
9. Conflict-marker scan.
10. `git diff --check`.
11. Governed docs-only build skip.

## 9. Git / delivery

Continue on the existing prepared branch:

`task/dash-context-routing-001`

Use one bounded commit and open one DRAFT PR to `main`.

Suggested commit:
`docs: reconcile dashboard visual task routing`

Suggested PR title:
`DASH-CTX-ROUTING-001 — reconcile dashboard visual-task context routing`

Do not merge, mark ready, enable auto-merge, or deploy.

## 10. Closeout

Report:
- branch
- commit SHA
- draft PR URL
- exact files changed
- exact step-current wording change
- confirmation five public visual/funnel standards remain protected for applicable work
- confirmation dashboard-only tasks route to the three canonical dashboard owners
- confirmation `T-DASH-PECKHAM-HTML-001` was not executed
- validation
- no-merge/no-deploy
- Context Efficiency / RSI report with target LOW

## 11. Exit criteria

Complete only when the stale current-context routing conflict is removed without weakening public funnel or protected-system governance, the exact three-file allowlist passes, one draft PR is open, and no dashboard implementation, merge, or deployment occurred.
