# INSTALL006 - Dashboard Architecture Standard - REV02

Status: Active standard

Customer-facing: No

Implementation authority: No; implementation requires a separate bounded task

Task ID: INSTALL006

Primary workstream: Dashboard / Interactive Experience System

Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

Predecessor: `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` (SUPERSEDED)

Work order: `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV01.md`

## 1. Purpose and ownership

This standard is the canonical owner for dashboard classes, audience separation, customer navigation, footer composition, access/visibility posture, and deterministic visual-approval proof. It supersedes REV01 in full.

`DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` owns customer component and status semantics. `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` owns responsive size modes and grid delivery. Automation, notification, theme-readiness, commissioning, handoff, and service owners retain their respective behaviors.

This standard does not create or authorize dashboard YAML, live Home Assistant changes, bindings, automations, registration, assignment, deployment, customer data, or protected-system changes.

## 2. Dashboard classes

WNYHS uses three separated classes:

1. **Customer Dashboard** - normal daily-use status, verified controls, activity, help, and settings in plain language.
2. **Installer / Commissioning Dashboard** - temporary internal setup, pairing, naming, validation, exception, and readiness detail.
3. **Service / Operator Dashboard** - internal support and diagnostics, actionable triage, known limitations, and onsite follow-up.

Customer users do not receive setup noise, raw entities, service diagnostics, secrets, private URLs, or unsupported functionality. Access and permissions remain governed by Home Assistant and task-specific authorization; visible navigation does not grant authority.

## 3. Canonical customer navigation

Customer dashboards use this canonical order and wording:

1. Home
2. Systems
3. Activity
4. Explore WNYHS
5. Support
6. Property
7. Settings

`Explore WNYHS` is visibly marked `COMING SOON` until separately implemented. A prototype may make navigation function locally, but must not claim backend, permission, route, or live-system behavior that is absent.

Capability-specific detail belongs under the canonical structure and appears only when the approved install supports it. Do not create vendor-based navigation or add empty speculative views.

## 4. Header and brand architecture

`WNY HOME SECURITY` is presented as a single-line wordmark where horizontal space permits. The default header must not make `WNY` oversized over a materially smaller second-line `HOME SECURITY`. Site/property identity may accompany the brand when authorized, but branding remains subordinate to operational clarity.

## 5. Footer composition

The customer footer contains governed actionable surfaces for:

- Support
- Call WNYHS
- Email Support

It also contains current local weather and current date/time. The former `Protecting Western New York Since 2024` tagline region is assigned to the weather widget. Footer actions use the single DESIGN001 customer button family; loose icon/text fragments do not substitute for action surfaces.

Weather and time must be labeled accurately. A prototype may use visibly declared deterministic fixture data in developer context, but customer output must not imply that simulated data is live.

## 6. Status and visibility architecture

Customer-visible status uses the DESIGN001 five-state set: Normal, Active, Attention, Alert, and Unavailable. `Hidden/noise` is a visibility classification, not severity. Installer/service screens may retain technical classifications, but customer mapping must preserve truth and may not convert unknown or unverified state to normal.

Overall or building status must describe the verified scope. It must not imply whole-property protection when planned, unbound, unavailable, or unsupported capabilities remain.

## 7. Layout and readiness

Customer dashboards prioritize the daily overview, important exceptions, and common actions. Comparable tiles and size modes follow DASHBOARD001; component anatomy follows DESIGN001. Installer and service surfaces may be denser but preserve clear priority and audience separation.

Every implementation maintains a readiness record covering dashboard class, view, audience, purpose, required status, entity/area dependencies, automation dependencies, customer visibility, theme readiness, evidence, exceptions, and next action without secrets.

## 8. Deterministic approval proof

Once governance compliance matters, the preferred visual-approval method is deterministic browser-rendered HTML/CSS/component output using the same governed tokens, geometry, labels, and states intended for implementation.

Approval evidence must identify viewport, theme, size mode, font, fixture/data posture, and whether state is simulated or authoritative. Generated concept art is reference/inspiration only and must not become implementation authority or compliance proof.

## 9. Access, privacy, and claims

- Do not expose credentials, tokens, network details, private URLs, raw entity IDs, or customer-private data.
- Do not imply monitoring, dispatch, emergency response, continuous service, promised prevention, or unsupported capability.
- Do not expose or enable lock/access, camera/privacy, automation, network, or deployment behavior without exact bounded authority.
- Keep setup, test, installer, and service surfaces outside normal customer navigation.

## 10. Acceptance

Architecture is on-standard when dashboard classes remain separated, the exact canonical customer navigation and COMING SOON state are present, footer/weather composition follows this standard, brand treatment is governed, status/visibility boundaries are truthful, and deterministic approval evidence is used without granting implementation authority.
