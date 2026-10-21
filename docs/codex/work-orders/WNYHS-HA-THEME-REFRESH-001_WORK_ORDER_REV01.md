# WNYHS-HA-THEME-REFRESH-001 Work Order REV01

## Task Identity

- **Task ID:** WNYHS-HA-THEME-REFRESH-001
- **Task Name:** WNYHS Home Assistant Theme Alignment to DESIGN001 REV02
- **Status:** IN PROGRESS — THEME RECONCILIATION
- **Category:** GOV / Home Assistant / Design System / Theme
- **Primary Workstream:** Dashboard / Interactive Experience System
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Execution Posture:** DIRECT; one bounded repository governance/implementation reconciliation task.
- **Read Mode:** TARGETED for governance and register authority; FULL for the three in-scope reusable theme artifacts and the explicitly required BKLF historical theme lineage.

## Purpose

Align the reusable Home Assistant WNYHS Light/Dark theme implementation with DESIGN001 REV02 so customer dashboards can consume current semantic visual roles without stale burgundy/action/status mappings.

## Governing Authority

This work follows the repository authority chain through `docs/system/step-current.md`, the Codex execution standard, `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`, `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`, and `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`. DESIGN001 REV02 is the canonical visual authority. Theme YAML is implementation mechanics only. BKLF theme files are historical/site-specific lineage and are not universal authority.

## Required End State

- Provide Home Assistant-compatible variables for WNYHS gold identity, the four action-blue states, the five canonical status roles, and governed surface/text/border roles.
- Map executable customer interaction to action blue; gold remains identity/accent.
- Preserve Normal, Active, Attention, Alert, and Unavailable as the governing customer status model in both themes.
- Retain legacy variables only where an existing reusable component needs a compatibility alias, and remap every retained alias to a current semantic role.
- Document Home Assistant and custom-card aliases as subordinate implementation mechanics.
- Preserve Light/Dark semantic parity and document Auto as platform/profile behavior rather than a third theme file.
- Preserve BKLF burgundy/gold theme history without promoting it into universal WNYHS action semantics.

## Exact File Allowlist

Only these files may change:

1. `docs/codex/work-orders/WNYHS-HA-THEME-REFRESH-001_WORK_ORDER_REV01.md`
2. `docs/system/master-task-register.md`
3. `home-assistant/wnyhs/themes/README.md`
4. `home-assistant/wnyhs/themes/wnyhs-light.yaml`
5. `home-assistant/wnyhs/themes/wnyhs-dark.yaml`

## Protected and Forbidden Scope

Do not modify Peckham dashboard YAML, Bailey/BKLF theme YAML, live Home Assistant configuration or runtime, `configuration.yaml`, HACS, frontend resources, the website, Cloudflare, CRM/HubSpot, payment, scheduling, email, notification routing, dependencies, secrets, or customer data. Do not deploy, merge, enable auto-merge, or mark the draft PR ready for review.

## Implementation Requirements

- Use the exact DESIGN001 REV02 values for `wnyhs-gold`, action blue states, canonical status roles, and light/dark surface, text, border, focus, radius, and shadow roles.
- Map Home Assistant base variables such as `primary-color` and `mdc-theme-primary` consistently with action blue, and document `accent-color` as gold identity/accent.
- Treat `success-color`, `warning-color`, `error-color`, and equivalent Mushroom variables as compatibility aliases only; they may not redefine the WNYHS status model.
- Remove unused obsolete universal-theme variables or retain/remap only those required by existing reusable components.
- Require dashboards to consume governed theme variables rather than hardcoded one-off colors.

## Validation and Delivery

- Parse both theme YAML files successfully.
- Confirm the exact five-file allowlist and no unexpected deletes.
- Verify exact DESIGN001 action, gold, status, and surface mappings.
- Verify Light/Dark key and semantic parity.
- Scan for burgundy-as-primary-action behavior and stale README semantics.
- Run `git diff --check` and report the diff stat.
- Commit and push `task/wnyhs-ha-theme-refresh-001`.
- Open one draft PR titled `WNYHS-HA-THEME-REFRESH-001: align HA themes to DESIGN001 REV02` against `main`.
- Do not merge or deploy.

## Operator Decision

Operator review and any later merge, live installation, reload, selection, or runtime validation remain separate explicit actions.
