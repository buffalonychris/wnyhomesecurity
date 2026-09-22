# INSTALL006 - Dashboard Architecture & Functional Behavior Standard - REV02

Status: Active canonical dashboard standard

Customer-facing: No

Implementation authority: No; implementation requires a separate bounded task

Task ID: INSTALL006

Primary workstream: Dashboard / Interactive Experience System

Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

Predecessor: `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` (SUPERSEDED)

Absorbed lineage: Architecture, product hierarchy, customer-first, customer/technician separation, functional theme invariants, and behavior rules from the withdrawn branch-only customer-dashboard-design REV02 draft, customer-dashboard-design REV01, customer-dashboard philosophy, and INSTALL007 REV01.

Work order: `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV02.md`

## 1. Purpose and ownership

This is the canonical owner for what WNYHS dashboards mean and how they behave: dashboard classes, customer information architecture, navigation, property/user context, functional state semantics, permission presentation, activity and alert behavior, high-impact controls, degraded-state behavior, capability visibility, and the semantic dashboard data contract.

`DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` owns visual components, tokens, typography, exact geometry, and presentation states. `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` owns customer-specific assembly, evidence binding, responsive delivery, deterministic prototypes, validation, registration/assignment relationship, acceptance, rollback, and handoff. Narrow automation, notification-routing, service/support, and Home Assistant extraction owners retain their domains.

This standard does not authorize dashboard YAML, live Home Assistant changes, bindings, automations, registration, assignment, deployment, customer data, authentication/runtime changes, or protected-system work.

## 2. Product and audience model

The customer product is the WNY Home Security Customer Control Center, powered by Home Assistant where applicable but expressed in WNYHS customer language. It is a reassurance and control surface, not a raw entity browser, installer panel, hardware catalog, monitoring promise, or service-authority claim.

WNYHS uses three separated dashboard classes:

1. **Customer Dashboard** - normal daily-use status, verified controls, activity, alerts, help, property context, and settings in plain language.
2. **Installer / Commissioning Dashboard** - temporary internal setup, pairing, naming, binding, testing, exception, and readiness detail.
3. **Service / Operator Dashboard** - internal support, health evidence, diagnostic triage, known limitations, and onsite follow-up.

Customer users do not receive setup noise, raw entities, service diagnostics, credentials, private URLs, or unsupported functionality. Customer-first does not mean hiding an actionable fault; it means presenting verified state and action in understandable language.

## 3. Customer information hierarchy

The customer dashboard first answers:

1. What is the current verified property status?
2. Does anything need attention?
3. What common, safe action is available?

Normal priority is:

1. truthful overall/property status scoped to verified capabilities;
2. active alerts or attention items;
3. primary daily workflow such as entry/video when installed;
4. common customer actions;
5. system summaries and current/recent activity; and
6. support, property, and settings detail.

Do not lead with diagnostics, logs, firmware, signal strength, raw entities, setup exceptions, or low-value history. A verified video doorbell may be a primary interaction surface, but camera, talk, lock, or live capability is never inferred.

## 4. Canonical customer navigation

Customer dashboards use this exact order and wording:

1. Home
2. Systems
3. Activity
4. Explore WNYHS
5. Support
6. Property
7. Settings

`Explore WNYHS` is visibly marked `COMING SOON` until separately implemented. `Systems` contains only verified, installed capability groups. Empty, speculative, and not-installed modules remain absent from normal customer navigation.

Navigation may function locally in an approval prototype, but visible navigation never grants backend route, authentication, authorization, registration, or live-system authority.

## 5. Property, user, and permission presentation

- The active property/site identity remains visible and unambiguous.
- Multi-property switching appears only when the authenticated runtime and bounded task authorize it.
- A property switch must change the full visible context, never mix state or controls across properties, and require clear confirmation of the active property.
- Customer, installer, service, and operator roles see only the functions authorized by the actual runtime permission model.
- Hidden or disabled UI is not a substitute for backend authorization.
- Customer-facing text may explain that an action is unavailable or requires an authorized role, but must not expose permission internals.
- A prototype may simulate role/state presentation only when developer context clearly identifies it as simulation.

## 6. Canonical customer status meanings and priority

Customer-visible status values use exactly:

| Status | Customer meaning | Priority posture |
| --- | --- | --- |
| `Normal` | Verified expected state; no action currently required. | Calm baseline. |
| `Active` | Verified current activity or an intentional active mode. | Informational and visible, not automatically alarming. |
| `Attention` | Review or customer action is advisable. | Elevated, actionable. |
| `Alert` | A verified high-priority condition requires prompt attention. | Highest customer priority without unsupported response claims. |
| `Unavailable` | State or capability cannot currently be verified or used. | Explicit uncertainty; never normal by default. |

`Hidden/noise` is a visibility classification, not customer severity. Unknown, stale, unresolved, or unverified state never defaults to Normal, closed, locked, available, or safe. DESIGN001 owns status-value appearance; this standard owns meaning and priority.

## 7. Current, Recent, and Resolved semantics

- **Current** means the condition or activity remains authoritative now.
- **Recent** means a timestamped past event within the task-defined retention/display window; it is not current state.
- **Resolved** means a previously current condition has authoritative resolution evidence and a resolution timestamp.
- Acknowledged is not necessarily resolved. Dismissed presentation must not erase authoritative history.
- Stale data is not current. An old event must not remain visually active merely because no newer event is present.
- Timestamps use the property/customer context and clearly distinguish event time from last-updated time where both matter.

## 8. Activity Center behavior

Activity is a customer-readable chronological record of meaningful property events and command outcomes. It must:

- distinguish current conditions from historical events;
- identify affected capability/area in customer-safe language;
- provide time, status, and resolution context;
- support bounded filtering without hiding active high-priority items;
- omit raw entity IDs, debug logs, telemetry noise, and technician-only events; and
- preserve truthful ordering when delayed or backfilled events arrive.

Activity is not an audit-log replacement and does not authorize notification delivery or data retention policy.

## 9. Alert / Notification Center presentation

The customer Alert/Notification Center presents actionable current and recent notices while notification generation, routing, delivery channels, and escalation remain owned by the notification system.

- Active Alert items sort above Attention and informational activity.
- Each item states what happened, where when verified, when it occurred, current/resolved posture, and the available safe next action.
- Duplicate representations of the same authoritative event should be grouped or correlated when the data contract supports it.
- A displayed notification does not prove delivery to another channel.
- Acknowledgement, dismissal, silence, or resolution are separate semantics and must not be conflated.
- Unsupported dispatch, response, monitoring, prevention, or emergency-service claims are prohibited.

## 10. High-impact controls and command lifecycle

High-impact controls include lock/unlock, disarm, bypass, disable, alarm/access, shutoff, and other protection-changing actions.

- Render them only when capability, permission, and authoritative binding are verified.
- Use plain labels and the governed DESIGN001 action family, with separate confirmation where the bounded implementation requires it.
- A user click creates a request, not a confirmed result.
- Required lifecycle states are: Available/Off, Momentary Pressed, Command Pending, Success/Selected when confirmed, Failure, Result Unknown, and Disabled.
- `Command Pending` remains visible until authoritative confirmation, explicit failure, or task-defined timeout.
- `Success/Selected` appears only after authoritative state confirms the requested result.
- `Failure` states explain that the command did not complete and preserve a safe retry/support path where authorized.
- `Result Unknown` explicitly states that outcome cannot be verified; it must not imply success.
- External dimensions remain stable across states; visual treatment belongs to DESIGN001.

## 11. Offline, stale, degraded, unavailable, and unknown

- **Offline**: a verified connection/reporting failure under the relevant integration contract.
- **Stale**: evidence is older than its governed freshness threshold.
- **Degraded**: some function remains available, but capability or evidence is incomplete.
- **Unavailable**: the capability or state cannot currently be used or verified.
- **Unknown**: the evidence cannot support a more specific conclusion.

These states remain explicit and text-supported. They never silently become Normal. Customer wording should explain effect and safe next step without exposing diagnostics.

Local and remote availability are distinct. A function may work locally while remote access is unavailable, or vice versa. The dashboard must not claim universal availability when only one path is verified.

## 12. Installed and capability visibility

- **Installed and verified** capabilities may appear with authoritative binding.
- **Installed but unavailable/degraded** capabilities remain visible when customer understanding or action benefits, with truthful state.
- **Planned, not installed, unresolved, or unsupported** capabilities do not appear as live customer functions.
- Registry presence alone does not prove current availability, physical state, customer permission, or usable capability.
- Overall or building status describes only the verified represented scope and must not imply whole-property protection when coverage is incomplete.

## 13. Semantic dashboard data contract

Customer-facing dashboard inputs must resolve through:

`source evidence -> sanitized property/device/entity model -> semantic capability -> authorized binding -> customer-safe state/action`

Each rendered capability or action needs, as applicable:

- property/site identity;
- semantic capability and customer label;
- verified device/entity/area relationship;
- evidence source and freshness;
- installed/available posture;
- current/recent/resolved state and timestamp;
- permission/action posture;
- local/remote availability;
- unknown/degraded handling; and
- provenance sufficient for validation without exposing raw technical identifiers.

Raw Home Assistant registries, entity IDs, unique IDs, connections, device identifiers, diagnostic categories, and deleted/disabled records remain technician evidence. DASHBOARD001 owns how bounded delivery tasks bind and validate that evidence.

## 14. Header, footer, and functional composition

The active property identity and `WNY HOME SECURITY` brand remain clear without crowding operational status. DESIGN001 owns their visual treatment.

The customer footer contains governed actionable surfaces for Support, Call WNYHS, and Email Support plus current local weather and current date/time. The former `Protecting Western New York Since 2024` tagline region is assigned to weather. Fixture weather/time must be declared simulated in developer context and must not be mistaken for live data.

## 15. Deterministic approval proof

When governance compliance is being approved, visual proof must come from deterministic browser-rendered HTML/CSS/component output using governed behavior, tokens, labels, and fixtures. Evidence identifies viewport, theme, size, font, fixture/data posture, and simulated versus authoritative state. Generative images are inspiration only.

## 16. Access, privacy, claims, and acceptance

- Do not expose credentials, tokens, network details, private URLs, raw entity IDs, or customer-private data.
- Do not imply monitoring, dispatch, emergency response, continuous service, promised prevention, or unsupported capability.
- Do not expose or enable security-sensitive, camera/privacy, automation, network, or deployment behavior without exact bounded authority.
- Keep installer/service surfaces outside normal customer navigation.

Architecture and behavior are on-standard when audience classes stay separated; the exact navigation, hierarchy, property context, permissions posture, five status meanings, Activity/Alert semantics, command lifecycle, degraded-state handling, capability visibility, semantic contract, footer functions, and deterministic proof requirements are preserved without granting implementation authority.
