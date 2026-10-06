# INSTALL011 - Dashboard Site Implementation Pipeline Standard - REV01

Status: Active standard
Customer-facing: No
Implementation authority: No
Task ID: WNYHS-DASHBOARD-SITE-PIPELINE-001
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose and authority boundary

INSTALL011 turns the existing WNYHS owner standards into one repeatable operator, ChatGPT, and Codex sequence for Home Assistant dashboard-site delivery. It owns orchestration and the cross-site workflow only. It does not replace or restate the domain rules owned by the standards listed in Section 2.

This standard does not authorize live Home Assistant changes, publication of customer data, notification routing, dashboard YAML, runtime registration or assignment, user or role changes, remote access, production implementation, deployment, or legacy retirement. Every customer runtime or dashboard implementation still requires its own bounded task, exact scope, verified evidence, validation, and operator approval.

Bailey is a reference and proving implementation. Bailey-specific facts, bindings, exceptions, and implementation choices are not universal customer facts and do not become company standards without deliberate promotion to the appropriate canonical owner.

## 2. Canonical owners preserved

INSTALL011 coordinates and references these owners without superseding them:

- `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md` owns registry export, raw-evidence safety, and registry interpretation.
- `docs/installer/INSTALL004_DEVICE_NAMING_STANDARD_REV01.md` owns device naming.
- `docs/installer/INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md` owns entity, area, readiness, and visibility rules.
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` owns dashboard classes, navigation, semantic behavior, permission presentation, statuses, actions, and degraded-state behavior.
- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` owns visual tokens, typography, themes, components, media, and accessibility presentation.
- `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` owns responsive delivery, capability assembly, evidence binding, deterministic prototypes, validation, registration/rollback boundaries, and acceptance.
- `docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md` owns notification data contracts, routing lifecycle, and downstream artifacts.
- `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md` owns Home Assistant-native automation behavior and implementation boundaries.
- `docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md` owns commissioning and acceptance readiness.
- `docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md` owns customer handoff and dashboard orientation.
- `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md` owns the service/operator support surface and remote-support boundaries.
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md` is the thin dashboard owner and routing map.

If a later canonical owner takes full ownership of this end-to-end process, governance reconciliation must resolve the overlap before this standard is revised or extended.

## 3. Standard operator workflow

The normal reusable workflow is:

`POST-INSTALL HA -> EXPORT -> TRANSIENT GPT INTAKE -> AUDIT -> SANITIZED MODEL -> SEMANTIC CAPABILITIES -> ROLE/CLASS ASSEMBLY -> DETERMINISTIC PROTOTYPE -> APPROVAL -> BOUNDED HA IMPLEMENTATION -> ADDITIVE PROD -> ACCEPTANCE/SOAK -> HANDOFF -> OPTIONAL LEGACY RETIREMENT`

The stages have these responsibilities:

1. The operator accesses the intended post-install Home Assistant instance under separately authorized access.
2. The operator runs the canonical WNYHS registry export.
3. The operator supplies the export package to ChatGPT as transient evidence.
4. ChatGPT performs a governed capability and entity-utilization audit.
5. The evidence is normalized into a sanitized site capability model.
6. Semantic capabilities are assembled into the applicable role and dashboard classes.
7. A deterministic browser-rendered approval prototype is produced and reviewed.
8. Operator approval gates a separately bounded Home Assistant implementation task.
9. Production delivery is additive, uses only verified capabilities and authorized actions, and preserves rollback.
10. Field acceptance, soak, customer handoff, and service handoff follow their canonical owners.
11. Legacy retirement, when justified after acceptance and soak, requires a separate bounded task.

## 4. Canonical export package

The canonical operator-run script is:

`home-assistant/wnyhs/tools/wnyhs-ha-registry-export.sh`

HA-BACKUP001 REV02 owns the exact inputs, output files, invocation, exclusions, safety rules, and registry interpretation. INSTALL011 does not duplicate or modify that script. Raw exports are transient evidence, are not commit-ready, and must remain outside repository history. Only task-authorized sanitized derivatives may become durable artifacts.

## 5. Evidence normalization and classification

Every discovered device, entity, and capability must be conservatively classified at minimum as one of:

1. Customer capability
2. Supporting state
3. Activity / alert source
4. Installer / commissioning
5. Service / operator
6. Diagnostic / noise
7. Disabled / hidden
8. Unresolved
9. Retired
10. Not applicable

The audit must preserve these evidence rules:

- Registry presence is registration evidence, not proof of live availability, physical state, customer permission, or usable capability.
- Unknown or unavailable never defaults to `Normal`, safe, closed, locked, or available.
- Conflicting device, entity, or area names remain unresolved until authoritative evidence reconciles them.
- Deleted, retired, stale, disabled, hidden, or noisy records cannot silently become live customer capability.
- Live state and physical mapping require their own evidence class and validation.
- Unresolved items remain explicit, with their execution impact and required next evidence recorded.

## 6. Sanitized site capability model

The normalized sanitized site capability model is the durable dashboard input. Raw registry files are not dashboard input and are not customer-facing artifacts.

At minimum, each model records, as applicable:

- site/property identity;
- customer-safe capability label;
- capability type;
- evidence source, date, and freshness;
- verified device/entity/area relationship;
- installed posture;
- availability posture;
- state-source posture;
- permission/action posture;
- notification relevance;
- customer, installer, and service visibility;
- unresolved or deferred reason;
- acceptance status; and
- rollback and handoff notes.

Raw unique IDs, connections, MAC addresses, private URLs, credentials, and other technical identifiers are not required in customer-facing artifacts. Any authorized internal binding record must follow HA-BACKUP001, INSTALL006, and DASHBOARD001 privacy and evidence rules.

## 7. Semantic binding rule

The pipeline relationship is:

`source evidence -> sanitized model -> semantic capability -> authorized binding -> customer-safe state/action`

INSTALL006 owns the authoritative semantic and behavior meaning. DASHBOARD001 owns delivery, evidence binding, fixtures, validation, and the boundary between simulated, registry-known, unresolved, and authoritative live state. INSTALL011 only requires the sequence and never promotes raw registry rows directly into customer UI.

## 8. Dashboard classes and role presentation

The pipeline preserves exactly the three canonical INSTALL006 classes:

1. **Customer Dashboard**
2. **Installer / Commissioning Dashboard**
3. **Service / Operator Dashboard**

No fourth canonical dashboard class is created by this standard.

Within the actual authorized runtime permission model, presentation profiles may include:

- standard customer/user;
- owner/admin customer profile;
- technician/installer; and
- service/operator.

A header user/profile dropdown may display or select only contexts that the authenticated runtime truly authorizes. It must never simulate identity switching, bypass permissions, or replace backend authentication or authorization in production. A deterministic prototype may simulate presentation only when its developer context clearly labels the simulation.

## 9. Reusable customer shell

When applicable to a bounded delivery, the reusable customer shell must consume INSTALL006, DESIGN001, and DASHBOARD001 and preserve:

- WNYHS product identity;
- property identity;
- current user/role context;
- current view;
- a governed user/profile dropdown only where runtime-backed;
- the exact canonical customer navigation from INSTALL006;
- theme modes `Light` / `Dark` / `Auto`;
- customer-visible size labels `Compact` / `Default` / `Large`;
- font choices `Inter` / `Atkinson Hyperlegible` / `System`, using governed fallbacks;
- phone portrait, tablet portrait/landscape, and desktop responsive delivery, with kiosk only when separately scoped;
- the five canonical customer statuses `Normal`, `Active`, `Attention`, `Alert`, and `Unavailable`;
- `Current` / `Recent` / `Resolved` semantics;
- the governed action lifecycle;
- governed 16:9 media treatment; and
- no raw Home Assistant IDs in normal customer UI.

`Standard` is retired as a customer-visible size label and must not be reintroduced.

## 10. Notifications relationship

The pipeline inspects notification readiness but never recreates notification policy from dashboard needs. Notification behavior comes from the WNYHS Notification Engine Standard, an approved Customer Notification Profile, verified event sources and services, and a separate bounded implementation with live validation.

Dashboard views may present notification-related state or preferences only when separately authorized. The dashboard does not own recipients, channels, timing, escalation, cooldown, recovery, delivery, or routing policy. Missing notification-profile or live-validation evidence remains an explicit readiness exception.

## 11. Deterministic approval gate

Before the first production implementation for a new site or dashboard architecture, a deterministic browser-rendered prototype is required unless a later canonical standard explicitly waives it.

Prototype evidence identifies:

- source commit;
- sanitized fixture and evidence date;
- viewport and device class;
- theme;
- size;
- font;
- role and dashboard class;
- simulated, registry-known, unresolved, or authoritative state posture;
- interaction states;
- browser/renderer; and
- known limitations.

Operator approval of the prototype is an approval gate, not runtime implementation authority.

## 12. Additive production rollout

The default production sequence is:

1. Preserve existing dashboard surfaces as fallback.
2. Add the new dashboard under a separate route or name.
3. Bind only verified capabilities and authorized actions.
4. Assign and test only authorized users and devices.
5. Validate phone, tablet, and desktop delivery as scoped; validate kiosk only when separately scoped.
6. Validate statuses, actions, and the notification relationship without recreating notification policy.
7. Maintain and prove a rollback path.
8. Run field acceptance.
9. Complete the task-defined soak period.
10. Retire a legacy dashboard only through a separate bounded task after acceptance and soak evidence.

Replacement-first rollout is prohibited. Additive rollout does not authorize implementation by itself.

## 13. Acceptance and handoff

INSTALL008 owns commissioning/acceptance readiness, INSTALL009 owns customer handoff and orientation, and INSTALL010 owns the service/operator support boundary. The site task must record applicable acceptance evidence for:

- capability binding;
- unavailable and unknown handling;
- role and permission behavior;
- action result lifecycle;
- responsive devices and views;
- theme, size, and font controls;
- notification relationship;
- support/service visibility;
- rollback; and
- known deferred items.

No site proceeds to handoff with an unresolved critical blocker. Customer and service handoff materials remain customer-safe, omit secrets and raw identifiers, and preserve known limitations and deferred work.

## 14. Process-improvement feedback loop

Codex and ChatGPT closeouts may identify RSI, context-efficiency, and process-improvement candidates. Apply low-risk execution improvements to later work-order construction where compatible with current governance. Promote only durable, repeatable rules into repository authority. RSI advice never overrides higher authority, and Bailey-specific workarounds do not become company standards without deliberate promotion.

Approved cross-site improvements update the canonical domain owner when they change domain rules, or INSTALL011 when they change orchestration only. Current proven dispatch practices are:

- use separated targeted reads instead of oversized combined reads;
- avoid reading prior prototypes unless their structure is genuinely needed;
- anchor MTR edits to exact task headings;
- filter hidden or non-rendered elements before geometry validation; and
- keep external dispatch prompts compact and let repository work orders carry detail.

## 15. Future-site minimum operator experience

The desired steady-state operator experience is:

`Run export -> upload export set -> receive audit/capability model -> resolve required exceptions -> review generated prototype -> approve bounded HA implementation -> deploy additively -> validate/handoff`

Repeatability does not permit guessing. Any unresolved `REQUIRED_FOR_EXECUTION` exception blocks the affected site stage until the required authoritative evidence or decision is supplied.

## 16. Protected-system and implementation boundary

INSTALL011 is documentation and orchestration authority only. It does not authorize changes to live Home Assistant, customer dashboards, prototypes, the registry export script, notification routing, authentication, permissions, remote access, runtime systems, deployment configuration, CRM/HubSpot, Stripe/payment, scheduling, email, Cloudflare, dependencies, secrets, or customer data.

Each implementation stage must be separately authorized, additive by default, evidence-backed, limited to its exact files and systems, and validated against the canonical owners referenced above.
