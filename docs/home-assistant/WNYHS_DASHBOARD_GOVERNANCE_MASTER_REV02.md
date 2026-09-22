# WNYHS Dashboard Governance Master REV02

Status: Active reconciliation and lineage document

Owner: Dashboard / Interactive Experience System

Customer-facing: No

Implementation authority: No

Task ID: DASH-GOV-001

Controlling context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

Predecessor: `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md` (SUPERSEDED)

Work order: `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV01.md`

## 1. Purpose and boundary

This document reconciles current dashboard owners and records approved cross-owner decisions and lineage. It does not replace functional owners or authorize implementation. It supersedes REV01's open conflict records where this revision records an operator-approved resolution; other historical analysis remains lineage only.

## 2. Active owner map

| Capability | Canonical owner |
| --- | --- |
| Customer status, color roles, Status Value Field, tile header, button family/states, typography | `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` |
| Responsive targets, Compact/Default/Large modes, equal-tile grid | `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` |
| Dashboard classes, customer navigation, footer, deterministic approval proof | `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` |
| Customer Control Center concept and hierarchy | `docs/design-system/customer-dashboard-design-standard-rev02.md` |
| Theme readiness | `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md` |
| Reconciliation and lineage | This document |

Automation, notification, commissioning, handoff, service/support, runtime, privacy, and security owners retain their domains. Public-site visual standards do not become Home Assistant/customer-dashboard authority through this reconciliation.

## 3. Resolved customer status semantics

The canonical customer states are:

- Normal
- Active
- Attention
- Alert
- Unavailable

`Hidden/noise` is a visibility classification, not customer severity. The prior four-severity versus five-class conflict recorded as `DG-071`, `CON-001`, `REV-001`, and `DEF-001` in REV01 is resolved for customer-facing dashboards by the five states above.

Only actual status values may use semantic status text colors:

- Normal / Good: `#22C55E`
- Active: `#0A84FF`
- Attention: `#F5A524`
- Alert: `#EF4444`
- Unavailable / unknown: neutral gray `#94A3B8`

Titles, labels, descriptions, navigation, helper text, timestamps, button labels, and prose remain neutral/identity/action-role text. Red `• LIVE` is a confirmed media/broadcast indicator only, not an alert state.

## 4. Resolved visual and interaction decisions

- Customer size labels are Compact, Default, and Large; `Standard` is retired.
- Default presentation is Default size plus Inter.
- Approved fonts are Inter, Atkinson Hyperlegible, and System.
- WNYHS gold is identity; blue is action; semantic accents are status-value text only.
- Each customer status uses the right-justified governed Status Value Field.
- Each tile uses the governed circular-icon header, title/subtitle spacing, divider, and canonical anatomy.
- Customer actions use one button family with 48 px heights in Compact/Default and 56 px in Large.
- Selected state requires authoritative confirmation; click alone does not assert persistent state.
- Comparable tiles use equal governed dimensions.
- The exact customer navigation is Home, Systems, Activity, Explore WNYHS, Support, Property, Settings; Explore WNYHS is COMING SOON.
- The footer uses actionable Support, Call WNYHS, and Email Support surfaces plus current weather and date/time.
- `WNY HOME SECURITY` is single-line where width permits.

## 5. Approval-render method

Deterministic browser-rendered HTML/CSS/component output using governed tokens and component rules is the preferred customer visual-approval proof. Evidence records viewport, theme, size, font, and fixture/state posture. Generative images are inspiration/reference only and are not implementation or compliance authority.

## 6. PR #578 lineage

PR #578, `T-HA-DASH-PECKHAM-002: build Phase A dashboard preview`, is open and operator-deferred as of this governance refresh. It and its branch are preserved as implementation lineage/reference only.

PR #578 is not current approval authority. Do not merge it, continue its Phase B, or treat its implementation decisions as superseding the active REV02 owners without a separate bounded operator-authorized task.

## 7. Peckham evidence boundary

`docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md` is sanitized customer-specific evidence. Sensor 13 is the Main Entrance Door contact; the remaining 15 contacts are first-floor window contacts with unresolved individual locations. Registry-known capability and simulated prototype state must remain distinct. No entity ID, physical location, live lock/camera state, or device capability may be invented.

## 8. Standing campaign relationship

`DASHBOARD-CAMPAIGN-001` keeps the Dashboard / Interactive Experience System category open for separately bounded work. It does not authorize implementation. Every child task still requires exact scope, files, protected boundaries, validation, one branch, and one PR.

The next prepared child work order is `docs/codex/work-orders/T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md`. Its prototype is not implemented by this governance refresh.

## 9. Protected boundaries

This reconciliation does not authorize live Home Assistant changes, dashboard registration/assignment, automations, locks/access, cameras/privacy-sensitive access, Cloudflare/network, customer data/secrets, CRM/HubSpot, Stripe/payment, scheduling/email/runtime/API, production website/route, dependency/package-lock, merge, or deployment changes.

## 10. Reconciliation result

The named REV02 documents are the active owners. Their divisions are complementary, and the previously conflicting status, action, navigation, size, typography, and approval-proof rules are resolved without weakening higher security, privacy, runtime, accessibility, or claims requirements.
