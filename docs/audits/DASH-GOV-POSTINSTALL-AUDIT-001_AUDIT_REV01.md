# DASH-GOV-POSTINSTALL-AUDIT-001 — Post-Install Dashboard Requirements and Governance Audit REV01

Status: COMPLETE AUDIT — FINDINGS UNRESOLVED

Task ID: `DASH-GOV-POSTINSTALL-AUDIT-001`

Audit date: 2026-10-06

Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

Primary workstream: Dashboard / Interactive Experience System

Implementation authority: None

## 1. Executive summary and boundary

This audit identifies and classifies the repository-owned requirements that materially affect post-install WNYHS Home Assistant dashboard creation. The current WNYHS repository is the controlling source. No live Home Assistant instance, customer account, raw backup, registry export, Cloudflare surface, private URL, credential, secret, or customer-private record was accessed.

The current dashboard authority is coherent at its core: INSTALL006 REV02 owns behavior, DESIGN001 REV02 owns visual/component rules, DASHBOARD001 REV02 owns delivery/binding/validation, and INSTALL011 owns the cross-site implementation sequence. Supporting installer, automation, notification, backup, handoff, service, and remote-access standards add operative requirements without replacing those owners.

The audit records 52 normalized findings:

| Classification | Count |
| --- | ---: |
| `CURRENT_CANONICAL` | 12 |
| `CURRENT_SUPPORTING_REQUIREMENT` | 19 |
| `SITE_SPECIFIC_REFERENCE` | 6 |
| `SUPERSEDED_WITH_UNPROMOTED_VALUE` | 2 |
| `HISTORICAL_NO_LONGER_APPLICABLE` | 3 |
| `CONFLICT_RECONCILIATION_REQUIRED` | 4 |
| `GAP_REQUIREMENT_NOT_YET_OWNED` | 6 |
| **Total** | **52** |

Four conflicts and six gaps remain unresolved. The most material are: no governed HACS/custom-frontend version and compatibility matrix; active reference drift to retired/superseded dashboard sources; the duplicate INSTALL008 identifier; missing implementable retention/audit-log and camera/media privacy rules; incomplete role/permission and performance/dependency-lifecycle requirements; and a placeholder-only hardware/BOM-to-dashboard preparation packet.

No historical or site-specific source is promoted by this audit. Bailey/BKLF and Peckham evidence remains site-specific unless a current canonical source independently establishes the same rule.

## 2. Authority and revision map

| Domain | Current owner | Revision/status | Predecessor or boundary |
| --- | --- | --- | --- |
| Architecture and functional behavior | `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` | REV02; active canonical | REV01 superseded; narrow automation, notification, service, and extraction owners retained |
| Visual and component system | `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` | REV02; active canonical | REV01 and overlapping design/theme lineage superseded or absorbed |
| Delivery, binding, and validation | `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` | REV02; active canonical | REV01 superseded |
| Cross-site implementation orchestration | `docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md` | REV01; active standard | Does not supersede domain owners |
| Routing and lineage | `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md` | REV02; active thin map | REV01 superseded; no functional ownership |
| Registry/backup evidence handling | `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md` | REV02; active standard | REV01 superseded |
| Automation | `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md` | REV01; active supporting owner | Native-HA-first and supportability only |
| Notification behavior | `docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md` | REV01; approved/current supporting owner | Customer profile and live validation remain required |
| Commissioning, handoff, and support | INSTALL008 commissioning; INSTALL009; INSTALL010 | REV01; active supporting owners | Duplicate INSTALL008 identifier is unresolved |

Authority precedence used in this audit is repository governance, current context and MTR, the dispatched work order, current canonical/narrow owners, then historical and site-specific lineage. `docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md` is used only for cross-domain ownership and gap-discovery evidence; its older dashboard revision pointers are not treated as current authority.

## 3. Source register

All access/evidence dates are 2026-10-06. `Repository` means current-repository evidence; no secondary source was used.

| ID | Source | Tier/status and owner | Revision/lineage | Decision | Basis |
| --- | --- | --- | --- | --- | --- |
| SRC-001 | `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` | Canonical; Dashboard / Interactive Experience System | REV02; supersedes REV01 | Include/full read | Behavior and architecture owner; full read required to classify cross-topic doctrine |
| SRC-002 | `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` | Canonical; Dashboard / Interactive Experience System | REV02; supersedes REV01 | Include/full read | Visual/component owner; full read required for conflict comparison |
| SRC-003 | `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` | Canonical; Dashboard / Interactive Experience System | REV02; supersedes REV01 | Include/full read | Binding/delivery owner; full read required for evidence and lifecycle boundaries |
| SRC-004 | `docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md` | Canonical orchestration owner | REV01 | Include/full read | Whole end-to-end sequence materially spans all coverage topics |
| SRC-005 | `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md` | Canonical thin routing/lineage map | REV02; supersedes REV01 | Include/full read | Establishes owner and retirement map |
| SRC-006 | `docs/installer/INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md` | Current supporting; Installer Platform | REV01 | Include/targeted sections | Platform layers, audiences, backup, handoff, service |
| SRC-007 | `docs/installer/INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md` | Current supporting; Installer Platform | REV01 | Include/targeted sections | Pre-install readiness and evidence outputs |
| SRC-008 | `docs/installer/INSTALL003_GOLDEN_HOME_ASSISTANT_BUILD_STANDARD_REV01.md` | Current supporting; Installer Platform | REV01 | Include/targeted sections | Baseline, update, network, recovery, privacy |
| SRC-009 | `docs/installer/INSTALL004_DEVICE_NAMING_STANDARD_REV01.md` | Current supporting; Installer Platform | REV01 | Include/targeted sections | Device naming and customer/service boundary |
| SRC-010 | `docs/installer/INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md` | Current supporting; Installer Platform | REV01 | Include/targeted sections | Entity, area, visibility, uncertainty |
| SRC-011 | `docs/installer/INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md` | Current supporting architecture | REV01 | Include/targeted sections | Downstream record relationships only; protected CRM proposals not adopted |
| SRC-012 | `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md` | Historical per current governance map; file status is stale | REV01; absorbed into DESIGN001 REV02 | Include/targeted lineage | Required to expose stale-reference conflict |
| SRC-013 | `docs/installer/INSTALL008_HA_GREEN_BOOTSTRAP_STANDARD_REV01.md` | Current supporting; Installer Platform | REV01 | Include/targeted sections | HA Green, HACS, add-ons, UI dependencies, install order |
| SRC-014 | `docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md` | Current supporting; Installer Platform | REV01 | Include/targeted sections | Commissioning, readiness, acceptance; identifier collision noted |
| SRC-015 | `docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md` | Current supporting; Installer Platform | REV01 | Include/targeted sections | Orientation, training, signoff, limitations |
| SRC-016 | `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md` | Current supporting; Installer Platform | REV01 | Include/targeted sections | Service dashboard and authorized support boundaries |
| SRC-017 | `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md` | Current supporting; Automation System | REV01 | Include/targeted sections | Overrides, failure, dependencies, service observability |
| SRC-018 | `docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md` | Current supporting; Notification System | REV01 | Include/targeted sections | Notification lifecycle, routing, recovery, validation |
| SRC-019 | `docs/home-assistant/notification-system/WNYHS_ADAPTIVE_NOTIFICATION_CONFIGURATION_QUESTIONNAIRE_REV01.md` | Current supporting business-process authority | REV01 | Include/targeted sections | Customer decisions, recipients, channels, signoff |
| SRC-020 | `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md` | Current supporting narrow owner | REV02; supersedes REV01 | Include/full read | Evidence safety and interpretation required across the audit |
| SRC-021 | `docs/home-assistant/cloudflare-remote-access-standard.md` | Current supporting remote-access owner | Current undated standard | Include/targeted sections | Local-first, roles, authentication, revocation, offboarding |
| SRC-022 | `docs/home-assistant/wnyhs-cloudflare-remote-support-architecture.md` | Current supporting architecture | Current undated architecture | Include/targeted sections | Layered access and ownership boundary |
| SRC-023 | `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md` | Placeholder; no implementation authority | REV01 placeholder | Include/full read | Evidence of an unowned preparation-packet requirement |
| SRC-024 | `docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md` | Non-authoritative supporting audit reference | REV01; contains older dashboard pointers | Include/targeted gap sections only | Cross-domain gap discovery; not dashboard doctrine |
| SRC-025 | `home-assistant/wnyhs/themes/README.md` | Declared theme usage contract | Foundation v0.1.0 | Include/full read | Dependency/usage and visual drift evidence only |
| SRC-026 | `home-assistant/wnyhs/components/README.md` | Declared component usage contract | Library v0.1.0 | Include/full read | HACS assumptions, customer/service separation, compatibility warning |
| SRC-027 | INSTALL006, DESIGN001, DASHBOARD001, governance-map, and HA-BACKUP001 REV01 predecessors | Superseded historical lineage | REV01 predecessors | Include/targeted metadata/sections | Supersession and unpromoted-value comparison |
| SRC-028 | `docs/design-system/customer-dashboard-design-standard-rev01.md` | Superseded/historical design lineage | REV01 | Include/targeted sections | Older action/navigation/layout rules |
| SRC-029 | `docs/design-system/customer-dashboard-philosophy.md` | Historical/reference only | Four-level severity retired | Include/targeted sections | Explicitly non-operative lineage |
| SRC-030 | `docs/design-system/customer-dashboard-mobile-wireframes-001.md` | Draft historical/site reference | Draft | Include/targeted sections | Five-tab and BKLF mobile lineage |
| SRC-031 | Bailey capability, retirement, prototype, refinement, follow-up, notification, and MTR records | Site-specific repository evidence | Mixed completed work orders/records | Include/targeted sections | Bailey constraints and proven prototype patterns only |
| SRC-032 | Peckham dashboard work orders and exact MTR records | Site-specific repository evidence | REV02 execution lineage | Include/targeted sections | Pre-onsite/unbound and deterministic prototype requirements |
| SRC-033 | `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md` | Site-specific sanitized evidence | Pre-onsite/unbound | Include/targeted sections | Unresolved binding and composite-entry rules without raw IDs |
| SRC-034 | `docs/system/master-task-register.md` | Operational task authority | Current exact records only | Include/targeted records | Audit, campaign, and materially cited site lineage |
| SRC-035 | `docs/codex/work-orders/DASH-GOV-POSTINSTALL-AUDIT-001_WORK_ORDER_REV01.md` | Active bounded execution contract after explicit dispatch | REV01 | Include/full read | Defines audit boundary, vocabulary, coverage, and validation |

Current-repository source-register entries: 35. Secondary-source entries: 0. The grouped lineage entries contain only repository-owned text sources and do not change that count.

## 4. Mandatory coverage matrix

| # | Required topic | Result | Primary findings | Coverage posture |
| ---: | --- | --- | --- | --- |
| 1 | HA prerequisites, versions, add-ons, HACS, custom frontend | HA Green/OS, add-ons, HACS, and nine named items are documented; versions and compatibility are not governed | DEP-01–DEP-09, AUD-GAP-01 | Covered with gap |
| 2 | Installation, golden build, bootstrap, update, network, readiness | Baseline, install order, update posture, network assumptions, backups, and readiness gates exist | AUD-CS-01, AUD-CS-04, AUD-CC-12 | Covered |
| 3 | Device/capability/entity/area/state models and semantic binding | Naming, visibility, evidence classes, sanitized model, and semantic binding are explicit | AUD-CS-02, AUD-CS-03, AUD-CC-07, AUD-CC-10 | Covered |
| 4 | Building/security states, modes, priorities, routines, meanings | Five customer states and command/degraded semantics are canonical; automation priorities and modes are supporting | AUD-CC-03, AUD-CC-05, AUD-CS-07 | Covered |
| 5 | Customer/installer/support notifications and lifecycle | Notification generation/routing remains with Notification System; dashboard presentation is separate | AUD-CC-04, AUD-CS-08 | Covered |
| 6 | Customer, Installer/Commissioning, Service/Operator roles | Three classes are canonical and separately scoped; runtime permission matrix remains incomplete | AUD-CC-01, AUD-CS-06, AUD-GAP-02 | Covered with gap |
| 7 | Themes, tokens, components, typography, geometry, accessibility, motion, responsiveness | Current visual/delivery owners are explicit; older theme/component language conflicts | AUD-CC-08, AUD-CC-09, AUD-CON-01 | Covered with conflict |
| 8 | Privacy, auth, permissions, remote support, history/retention/audit log | Privacy/auth boundaries exist; retention and audit-log ownership are incomplete | AUD-CS-09, AUD-GAP-03, AUD-GAP-04 | Covered with gaps |
| 9 | Offline, unavailable, unknown, stale, degraded, recovery, restoration | Canonical state meanings, backup recovery, notification recovery, and service diagnostics exist | AUD-CC-06, AUD-CS-01, AUD-CS-06, AUD-CS-08 | Covered |
| 10 | Automation/control interlocks, high-impact commands, confirmation, timeout, failure, overrides | Command lifecycle and automation override/recovery rules exist | AUD-CC-05, AUD-CS-07 | Covered |
| 11 | Backup, restore, change, upgrades, drift, performance, commissioning, handoff, rollout, rollback, soak, support transition, retirement/EOL | Most lifecycle stages are covered; performance, dependency lifecycle, and EOL criteria remain incomplete | AUD-CC-11, AUD-CC-12, AUD-CS-04–AUD-CS-06, AUD-GAP-05 | Covered with gap |
| 12 | Bailey/BKLF, Peckham, campaign, governance, prototypes, work orders, superseded/withdrawn lineage | Bounded site/reference and historical registers are included without promotion | AUD-SITE-01–AUD-SITE-06, AUD-SUP-01–02, AUD-HIST-01–03 | Covered |

## 5. Normalized requirement register

### 5.1 Current canonical requirements

| ID | Topic and concise requirement | Source and exact heading | Source status/owner | Classification | Applicability and owner relationship | Conflict/gap | Confidence / later review owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AUD-CC-01 | Preserve exactly three separated dashboard classes: Customer, Installer/Commissioning, and Service/Operator. | INSTALL006 REV02 §2, “Product and audience model” | Active canonical; Dashboard | `CURRENT_CANONICAL` | Universal; core behavior owner | — | High |
| AUD-CC-02 | Customer UI must prioritize verified property status, attention, and safe common action, and use the exact seven-destination navigation. | INSTALL006 REV02 §§3–4 | Active canonical; Dashboard | `CURRENT_CANONICAL` | Universal customer shell | — | High |
| AUD-CC-03 | Use exactly Normal, Active, Attention, Alert, and Unavailable; keep Current, Recent, Resolved, acknowledged, dismissed, and stale meanings distinct. | INSTALL006 REV02 §§6–7 | Active canonical; Dashboard | `CURRENT_CANONICAL` | Universal customer semantics | — | High |
| AUD-CC-04 | Dashboard Activity/Alert presentation must remain customer-readable while notification generation, routing, delivery, escalation, and retention remain outside dashboard ownership. | INSTALL006 REV02 §§8–9 | Active canonical; Dashboard | `CURRENT_CANONICAL` | Universal; defers to Notification System | AUD-GAP-03 | High / Dashboard + Notification System |
| AUD-CC-05 | High-impact actions require verified capability/permission, a request-not-result model, confirmation where required, pending, confirmed success, failure, result-unknown, timeout, disabled, and safe recovery behavior. | INSTALL006 REV02 §10 | Active canonical; Dashboard | `CURRENT_CANONICAL` | Universal controls; runtime authority remains external | — | High |
| AUD-CC-06 | Offline, stale, degraded, unavailable, and unknown remain explicit and never silently become Normal or safe; local and remote availability are distinct. | INSTALL006 REV02 §§11–12 | Active canonical; Dashboard | `CURRENT_CANONICAL` | Universal state truthfulness | — | High |
| AUD-CC-07 | Dashboard inputs must follow evidence → sanitized model → semantic capability → authorized binding → customer-safe state/action; raw identifiers and registry presence cannot prove live capability. | INSTALL006 REV02 §13 | Active canonical; Dashboard | `CURRENT_CANONICAL` | Universal semantic contract | — | High |
| AUD-CC-08 | Use governed identity/action/status/surface tokens, typography, tile/status/action/media geometry, Light/Dark/Auto parity, visible focus, readable contrast, and reduced-motion behavior. | DESIGN001 REV02 §§2–11 | Active canonical; Dashboard visual/component owner | `CURRENT_CANONICAL` | Universal visual system | AUD-CON-01 | High / Visual System |
| AUD-CC-09 | Deliver Compact/Default/Large across scoped phone/tablet/desktop surfaces with equal comparable tiles, safe reflow, touch dimensions, accessibility, and deterministic validation. | DASHBOARD001 REV02 §§2–5, 8–9 | Active canonical; Dashboard delivery owner | `CURRENT_CANONICAL` | Universal delivery | — | High |
| AUD-CC-10 | Every fixture/binding must be registry-known, simulated approval state, authoritative live state, or unresolved, with provenance/freshness and no invented mappings. | DASHBOARD001 REV02 §§6–8 | Active canonical; Dashboard delivery owner | `CURRENT_CANONICAL` | Universal evidence binding | — | High |
| AUD-CC-11 | Repository approval is not registration/deployment; a later runtime task must own exact instance/resource, assignment, dependencies, backup/rollback, live validation, acceptance, and handoff. | DASHBOARD001 REV02 §10 | Active canonical; Dashboard delivery owner | `CURRENT_CANONICAL` | Every live implementation | — | High |
| AUD-CC-12 | Use the post-install export-to-audit-to-model-to-prototype-to-additive-rollout sequence; preserve fallback, rollback, acceptance, soak, handoff, and separately gated legacy retirement. | INSTALL011 §§3, 11–13 | Active canonical orchestration owner | `CURRENT_CANONICAL` | Cross-site lifecycle; domain owners preserved | — | High |

### 5.2 Current supporting requirements

| ID | Topic and concise requirement | Source and exact heading | Source status/owner | Classification | Applicability and owner relationship | Conflict/gap | Confidence / later review owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AUD-CS-01 | Golden builds must record controller/update/integration/network/access posture, separate reusable from customer-specific state, create backup evidence, and distinguish restore readiness from proven restore. | INSTALL003 §§3–7 | Active supporting; Installer Platform | `CURRENT_SUPPORTING_REQUIREMENT` | Baseline and recovery; complements pipeline | AUD-GAP-05 | High |
| AUD-CS-02 | Device names must be stable, plain-language, customer/service readable, provisionally marked until onsite confirmation, and free of secrets. | INSTALL004 §§3–6 | Active supporting; Installer Platform | `CURRENT_SUPPORTING_REQUIREMENT` | Naming input to semantic model | — | High |
| AUD-CS-03 | Areas/entities must be customer-readable and traceable; visibility classes separate customer, dashboard, automation, diagnostics, hidden/disabled, and unclear evidence. | INSTALL005 §§3–11 | Active supporting; Installer Platform | `CURRENT_SUPPORTING_REQUIREMENT` | Evidence normalization and binding | — | High |
| AUD-CS-04 | Bench and onsite commissioning must validate scope, controller, network, naming, entity/area readiness, dashboard classes, theme/readiness, offline posture, backups, exceptions, customer-view usability, and signoff readiness. | INSTALL008 commissioning §§4–9 | Active supporting; Installer Platform | `CURRENT_SUPPORTING_REQUIREMENT` | Acceptance/readiness | AUD-CON-02, AUD-CON-03 | High / Installer Platform |
| AUD-CS-05 | Handoff must provide customer-safe dashboard orientation, control expectations, known limitations, support path, training confirmation, and acceptance/deferral evidence. | INSTALL009 §§3–9 | Active supporting; Installer Platform | `CURRENT_SUPPORTING_REQUIREMENT` | Customer transition | — | High |
| AUD-CS-06 | Service dashboards are internal triage surfaces; remote support is customer-authorized, technically conditional, revocable, privacy-limited, and separated from customer daily use. | INSTALL010 §§3–11 | Active supporting; Installer Platform | `CURRENT_SUPPORTING_REQUIREMENT` | Service/operator class | AUD-GAP-02 | High |
| AUD-CS-07 | Automations default to native HA, provide customer-safe manual overrides/test/recovery, expose important failures to service views, and avoid silent optional dependency chains. | AUTOMATION001 §§5–12, 18 | Active supporting; Automation System | `CURRENT_SUPPORTING_REQUIREMENT` | Automation/control relationship | AUD-GAP-05 | High |
| AUD-CS-08 | Notifications require a data contract, modes, priorities, recipient/visibility separation, quiet hours, cooldown/repeat, acknowledgement, recovery, channel validation, customer approval, and ongoing revalidation. | Notification Engine §§1–18; Questionnaire §§2–23 | Current supporting; Notification System | `CURRENT_SUPPORTING_REQUIREMENT` | Notification generation/routing owner | AUD-GAP-03 | High |
| AUD-CS-09 | Remote access remains local-first, optional, customer-approved, layered with HA authentication, role-separated, revocable, and non-public; local access must survive remote-path failure. | Cloudflare remote-access standard §§2, 4–10; remote-support architecture §§7–12 | Current supporting; Home Assistant support/infrastructure | `CURRENT_SUPPORTING_REQUIREMENT` | Access/support boundary only | AUD-GAP-02 | High |
| AUD-CS-10 | Raw backup/registry evidence stays transient and non-commit-ready; derivatives record freshness and unresolved mappings; registry presence is not live-state proof. | HA-BACKUP001 REV02 §§2–10 | Active supporting narrow owner | `CURRENT_SUPPORTING_REQUIREMENT` | Evidence handling | — | High |

### 5.3 HACS and custom-frontend prerequisite findings

All nine rows are current supporting requirements for the HA Green bootstrap defined by INSTALL008. None is a dashboard canonical owner. No repository source pins a supported version, minimum Home Assistant version, compatibility matrix, update cadence, or rollback version. That common deficiency links to AUD-GAP-01.

| ID | Item and prerequisite/usage determination | Source and exact heading | Classification | Applicability and boundary | Version/compatibility posture | Link / confidence |
| --- | --- | --- | --- | --- | --- | --- |
| DEP-01 | HACS is the required management foundation installed after Terminal & SSH; per-customer packages/versions must be recorded. | INSTALL008 bootstrap §§6–8 | `CURRENT_SUPPORTING_REQUIREMENT` | Required baseline for the declared HA Green bootstrap; technician-managed, not customer authority | Unpinned; compatibility unowned | AUD-GAP-01 / High |
| DEP-02 | Mushroom supplies customer-friendly mobile cards. | INSTALL008 bootstrap §7 | `CURRENT_SUPPORTING_REQUIREMENT` | Required UI-stack baseline; customer presentation, technician-managed | Unpinned; validate in target HA/Companion environment | AUD-GAP-01 / High |
| DEP-03 | Bubble Card supplies compact/mobile navigation and controls. | INSTALL008 bootstrap §7; component README “Required HACS Stack” | `CURRENT_SUPPORTING_REQUIREMENT` | Required UI-stack baseline; customer usage; behavior varies by installed version | Unpinned; explicit variability warning | AUD-GAP-01 / High |
| DEP-04 | `button-card` supplies configurable large actions/status buttons. | INSTALL008 bootstrap §7 | `CURRENT_SUPPORTING_REQUIREMENT` | Required UI-stack baseline; customer controls subject to canonical action semantics | Unpinned; no compatibility matrix | AUD-GAP-01 / High |
| DEP-05 | Card Mod supplies controlled styling and must avoid fragile one-offs. | INSTALL008 bootstrap §7 | `CURRENT_SUPPORTING_REQUIREMENT` | Required UI-stack baseline; implementation/styling tool, not customer authority | Unpinned; no compatibility matrix | AUD-GAP-01 / High |
| DEP-06 | Layout Card supplies responsive layout control and must avoid horizontal scrolling/zoom dependence. | INSTALL008 bootstrap §7 | `CURRENT_SUPPORTING_REQUIREMENT` | Required UI-stack baseline; delivery support | Unpinned; no compatibility matrix | AUD-GAP-01 / High |
| DEP-07 | Swipe Card may provide compact camera/status groups but cannot hide primary actions behind swipe-only interaction. | INSTALL008 bootstrap §7 | `CURRENT_SUPPORTING_REQUIREMENT` | Required installed stack but optional per-view usage; customer presentation | Unpinned; no compatibility matrix | AUD-GAP-01 / High |
| DEP-08 | Browser Mod supports device-aware behavior and is added after restart. | INSTALL008 bootstrap §§7–8; component README “Usage Notes” | `CURRENT_SUPPORTING_REQUIREMENT` | Required installed stack; customer-experience support, technician-managed | Unpinned; explicit version variability warning | AUD-GAP-01 / High |
| DEP-09 | Auto-Entities supports dynamic lists for controlled internal views and should not expose noisy lists to normal customers. | INSTALL008 bootstrap §7 | `CURRENT_SUPPORTING_REQUIREMENT` | Required installed stack; installer/service use by default | Unpinned; no compatibility matrix | AUD-GAP-01 / High |

### 5.4 Site-specific findings

| ID | Topic and concise requirement | Source and exact heading | Classification | Applicability and canonical relationship | Link | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| AUD-SITE-01 | Bailey unresolved physical mappings and deferred smoke evidence must not be presented as authoritative live or Normal. | Bailey capability work order §§8, 16; Bailey prototype work order §2 | `SITE_SPECIFIC_REFERENCE` | Bailey only; demonstrates canonical uncertainty rules | — | High |
| AUD-SITE-02 | Bailey’s retired South electronic-lock capability must be absent rather than shown as live, unavailable, coming soon, or a replacement placeholder. | Bailey South-lock retirement work order §5 | `SITE_SPECIFIC_REFERENCE` | Bailey only; example of capability retirement truthfulness | — | High |
| AUD-SITE-03 | Bailey’s deterministic prototype preserves canonical views/settings/state simulation while remaining offline and non-authoritative. | Bailey prototype/refinement work orders and exact MTR records | `SITE_SPECIFIC_REFERENCE` | Bailey proof pattern; not universal capability scope | — | High |
| AUD-SITE-04 | Peckham’s pre-onsite register keeps 15 window locations unresolved and requires physical trigger evidence before final naming/binding. | Peckham binding register “Contact binding register” and “Onsite completion workflow” | `SITE_SPECIFIC_REFERENCE` | Peckham only; example of no invented mapping | — | High |
| AUD-SITE-05 | Peckham’s entrance may be called fully locked only when both separately verified lock states support that conclusion. | Peckham binding register “Composite Main Entrance rule” | `SITE_SPECIFIC_REFERENCE` | Peckham only; example of composite-state conservatism | — | High |
| AUD-SITE-06 | Peckham approval output must visibly separate simulated preview state from live binding and leave unverified doorbell/lock actions pending. | Peckham HTML REV02 §§7–14 | `SITE_SPECIFIC_REFERENCE` | Peckham only; conforms to current prototype doctrine | — | High |

### 5.5 Superseded, historical, conflicting, and gap findings

| ID | Topic and concise finding | Source and exact heading | Classification | Applicability and relationship | Conflict/gap linkage | Confidence / proposed review owner |
| --- | --- | --- | --- | --- | --- | --- |
| AUD-SUP-01 | The older Dashboard Readiness Sheet concept retains potentially useful auditable fields for view, audience, dependencies, theme readiness, status, and exceptions, but no current canonical owner expressly adopts the complete sheet. | INSTALL006 REV01 “Dashboard Readiness Sheet” | `SUPERSEDED_WITH_UNPROMOTED_VALUE` | Potential cross-site planning value; non-operative | — | Medium / Dashboard + Installer Platform |
| AUD-SUP-02 | The placeholder dashboard-prep packet identifies a potentially useful hardware/BOM/property-to-dashboard input boundary, but it remains incomplete and blocked. | DASHBOARD_PREP001 “Current Standard” and “Generation Boundary” | `SUPERSEDED_WITH_UNPROMOTED_VALUE` | Potential upstream preparation value; no promotion | AUD-GAP-06 | Medium / Quote + Installer + Dashboard |
| AUD-HIST-01 | The four-level customer severity model is retired and must not override the canonical five statuses. | Customer dashboard philosophy “Customer severity levels”; explicit reference note | `HISTORICAL_NO_LONGER_APPLICABLE` | Historical only | — | High |
| AUD-HIST-02 | Five-tab, BKLF-specific mobile navigation and “no PC/tablet optimization” assumptions are not universal current requirements. | Mobile wireframes §§2–4 | `HISTORICAL_NO_LONGER_APPLICABLE` | Draft/site lineage; superseded by seven-destination and multi-surface delivery rules | — | High |
| AUD-HIST-03 | REV01 dashboard architecture, visual, delivery, governance-map, and backup rules are historical where REV02 supplies current doctrine. | REV01 predecessor headers/supersession notices | `HISTORICAL_NO_LONGER_APPLICABLE` | Lineage only; cite REV02 for current requirements | — | High |
| AUD-CON-01 | Theme/component foundation docs retain burgundy/gold primary-action and older semantic styling language that conflicts with DESIGN001 REV02’s blue customer action family and restricted status-color use. | Theme README “Purpose/Mockup Relationship”; component README “Relationship To WNYHS Themes”; DESIGN001 REV02 §§2, 7 | `CONFLICT_RECONCILIATION_REQUIRED` | Current repository assets/usage docs versus canonical visual owner; do not choose a winner here | CON-01 | High / Visual System + Dashboard |
| AUD-CON-02 | The current commissioning checklist still requires review against INSTALL007, while the governance map declares INSTALL007 historical and absorbed into DESIGN001 REV02. | INSTALL008 commissioning §4.11; Governance Map REV02 §5 | `CONFLICT_RECONCILIATION_REQUIRED` | Active supporting checklist contains stale owner routing | CON-02 | High / Installer Platform + Dashboard |
| AUD-CON-03 | Two active standards use the `INSTALL008` identifier for different owners: HA Green bootstrap and bench testing/commissioning. | Both INSTALL008 document headers; GOVREF §12 | `CONFLICT_RECONCILIATION_REQUIRED` | Cross-site routing and citation ambiguity; no rename authorized | CON-03 | High / Installer Platform + Project Governance |
| AUD-CON-04 | Active supporting documents still point to INSTALL006 REV01 and other retired owner paths even though REV02 is canonical. | INSTALL006A §5; INSTALL009 §11; INSTALL010 §12; Governance Map REV02 §2 | `CONFLICT_RECONCILIATION_REQUIRED` | Reference drift can misroute later work; current precedence is documented but references remain unresolved | CON-04 | High / Installer Platform + Dashboard |
| AUD-GAP-01 | No owner defines tested versions, compatibility ranges, update sequencing, rollback versions, or a support/EOL matrix for HACS and the eight named frontend packages. | INSTALL008 bootstrap §§6–8; component README “Usage Notes” | `GAP_REQUIREMENT_NOT_YET_OWNED` | Blocks confident dependency upgrades and repeatable compatibility acceptance | GAP-01 | High / Installer Platform + Dashboard + Support |
| AUD-GAP-02 | No single implementable matrix defines runtime roles, permissions, dashboard assignment, role transitions, revocation, and authorization tests across customer, installer, service, and operator profiles. | INSTALL006 §5; INSTALL010 §§5, 10; remote-access standard §§4–7 | `GAP_REQUIREMENT_NOT_YET_OWNED` | May block live registration/acceptance; UI presentation is not backend authorization | GAP-02 | High / Home Assistant Platform + Installer + Dashboard |
| AUD-GAP-03 | Activity/notification retention windows, deletion/export, audit-log ownership, and the boundary between customer history and authoritative audit evidence are not governed end to end. | INSTALL006 §§7–9; Notification Engine §§4–5, 17 | `GAP_REQUIREMENT_NOT_YET_OWNED` | Blocks durable history/retention acceptance where required | GAP-03 | High / Notification + Data/Privacy + Dashboard |
| AUD-GAP-04 | Camera/doorbell media privacy, recording/audio retention, consent, access review, and customer-visible history have no single promoted owner. | GOVREF §7 “Cameras/recording/privacy”; INSTALL006 §§2, 16 | `GAP_REQUIREMENT_NOT_YET_OWNED` | Blocks universal media-history and privacy implementation | GAP-04 | High / Privacy + Home Assistant + Dashboard |
| AUD-GAP-05 | No owner defines dashboard performance budgets, dependency-health thresholds, upgrade/rollback qualification, drift monitoring cadence, or explicit component end-of-life criteria. | DASHBOARD001 §9; INSTALL011 §§12–13; AUTOMATION001 §12 | `GAP_REQUIREMENT_NOT_YET_OWNED` | May block repeatable lifecycle acceptance/support retirement | GAP-05 | High / Dashboard + Installer + Support |
| AUD-GAP-06 | The approved Property Model/BOM/inventory/installer-packet-to-dashboard requirements packet remains a placeholder rather than an implementation-ready current owner. | DASHBOARD_PREP001 §§“Current Standard,” “Generation Boundary,” “Future Expansion” | `GAP_REQUIREMENT_NOT_YET_OWNED` | Can block deterministic upstream scope handoff | GAP-06 | High / Quote + Installer + Dashboard |

## 6. Conflict register

| Conflict | Competing sources/requirements | Material consequence | Precedence evidence | Missing decision/evidence | Candidate later owners |
| --- | --- | --- | --- | --- | --- |
| CON-01 | DESIGN001 REV02 blue single-action family vs theme/component README burgundy/gold action language | Implementers could reproduce stale visual semantics or hardcoded drift | Governance Map REV02 and DESIGN001 REV02 identify the canonical owner | Decide whether usage docs/assets are historical, need a governed mapping, or require replacement | Visual System; Dashboard |
| CON-02 | INSTALL008 commissioning routes theme checks to INSTALL007; Governance Map retires INSTALL007 and routes visual rules to DESIGN001 REV02 | Commissioning can validate against the wrong owner | Current governance map gives lineage and owner precedence | Update route/reference through a separate bounded task; this audit does not edit it | Installer Platform; Dashboard |
| CON-03 | Bootstrap and commissioning standards both use INSTALL008 | Citations, task routing, and evidence can identify the wrong document | No current source assigns unique successor IDs | Identifier/alias policy and reference migration decision | Installer Platform; Project Governance |
| CON-04 | Active support/data/handoff docs cite superseded INSTALL006 REV01 while REV02 is canonical | Future tasks may hydrate historical behavior | Governance Map REV02 and supersession headers establish current precedence | Bounded reference reconciliation and validation of any semantic differences | Installer Platform; Dashboard |

All four conflicts remain unresolved. The precedence notes prevent accidental use during this audit but do not amend the competing sources.

## 7. Gap register

| Gap | Uncovered topic/lifecycle stage | Evidence of insufficient ownership | Likely impact | Blocks | Plausible owner candidates (not selected) |
| --- | --- | --- | --- | --- | --- |
| GAP-01 | HACS/frontend versions and compatibility | Required stack is named; only per-customer version recording and later validation are required | Non-repeatable installs, upgrade breakage, weak rollback | Upgrade acceptance/support | Installer Platform; Dashboard; Service |
| GAP-02 | Runtime role/permission/assignment matrix | Presentation and access principles exist, but backend grants/tests are deferred | Mis-scoped visibility or incomplete acceptance | Live implementation/acceptance | Home Assistant Platform; Installer Platform; Dashboard |
| GAP-03 | Activity/history retention and audit-log lifecycle | Current owners distinguish Activity from audit logs but do not own retention/deletion/export | Privacy and evidentiary ambiguity | Acceptance/support where history is required | Notification System; Privacy/Data; Dashboard |
| GAP-04 | Camera/doorbell recording, audio, consent, and retention | GOVREF identifies no single promoted owner | Privacy exposure and inconsistent customer history | Media implementation/acceptance | Privacy; Home Assistant Platform; Dashboard; Claims |
| GAP-05 | Performance, dependency drift, upgrade qualification, and EOL | Validation covers layout/function but no thresholds/cadence/EOL criteria | Degraded UX and unsupported component lifecycle | Lifecycle/support/retirement | Dashboard; Installer Platform; Service |
| GAP-06 | Upstream dashboard preparation packet | DASHBOARD_PREP001 is only a placeholder and explicitly blocks generation pending future authority | Incomplete scope/evidence transfer from quote/install planning | Pre-build readiness | Quote System; Installer Platform; Dashboard |

## 8. Superseded-but-unpromoted register

| Finding | Source | Potential value | Why not current | Required later action |
| --- | --- | --- | --- | --- |
| AUD-SUP-01 | INSTALL006 REV01 Dashboard Readiness Sheet | Reviewable dependency/status/exception fields before implementation | REV01 is superseded and the complete sheet is not explicitly adopted by current owners | Separate reconciliation may adopt, replace, or reject it |
| AUD-SUP-02 | DASHBOARD_PREP001 placeholder packet | Formal upstream translation from property/BOM/install evidence into dashboard requirements | Placeholder status and missing implementable field/owner contract | Separate owner/packet task is required |

## 9. Bailey/BKLF and Peckham site-reference register

| Site | Repository evidence used | Site-specific value | Universalization boundary |
| --- | --- | --- | --- |
| Bailey/BKLF | Capability reconciliation and South-lock retirement work orders/MTR records | Shows conservative unresolved mapping, registry-not-live-state posture, and truthful removal of retired capability | Device mix, mappings, smoke condition, entrance/lock topology, and runtime behavior remain Bailey-specific |
| Bailey/BKLF | Prototype and refinement work orders/MTR records; dashboard follow-up and notification decisions | Shows deterministic offline proof, explicit simulated/unavailable evidence, and separation from live runtime | Prototype composition and site priorities do not establish cross-site doctrine |
| Peckham | T-HA-DASH-PECKHAM-001/002 and T-DASH-PECKHAM-HTML-001 REV02 work orders/MTR records | Shows unbound/pre-onsite delivery, generic labels, deferred bindings, and approval-preview truthfulness | Window identities, entry devices, and supported actions remain Peckham-specific |
| Peckham | Pre-onsite binding register | Shows no invented physical mapping and conservative composite-lock status | Register slots and device composition are not universal |

## 10. Excluded and unavailable evidence

| Evidence | Decision | Reason |
| --- | --- | --- |
| Raw Home Assistant backups, registry exports, `.storage`, databases, logs, traces, live-state summaries | Excluded | Protected/raw evidence was unnecessary for governance classification |
| Raw YAML dashboards, packages, automations, themes, and component templates | Excluded except README usage contracts | Implementation artifacts were unnecessary; requirements were available in text owners/work orders |
| CSV inventories, raw entity/device exports, private identifiers, URLs, credentials, and customer records | Excluded | Privacy/protected boundary; no requirement needed them |
| Screenshots, PNGs, PDFs, prototype binaries, and visual artifacts | Excluded | Deterministic requirement/validation records supplied sufficient text evidence |
| Live Home Assistant, Cloudflare, customer accounts, network, auth, CRM, payment, scheduling, email, and deployment surfaces | Unavailable by scope | Explicitly prohibited and unnecessary |
| Withdrawn branch-only customer-dashboard-design REV02 draft and unmerged PR implementation content | Not expanded | Current owner metadata states absorption/removal; repository evidence resolved classification without secondary access |
| Prior ChatGPT Project/Project-knowledge conversations | Not expanded | No current-repository pointer or unresolved coverage gap required a precise secondary target |

No secondary-lineage expansion was performed. The open-PR query was used only for the required duplicate-owner check and did not contribute requirement evidence or classifications.

## 11. Risks and dependencies

- A live site task that assumes package compatibility without GAP-01 reconciliation can produce an unrepeatable or fragile dashboard.
- A runtime task that treats UI visibility as authorization can cross the GAP-02 boundary.
- Activity, media, and notification history must not be represented as a governed audit/retention system while GAP-03 and GAP-04 remain open.
- Old theme/component documentation can cause visible drift until CON-01 is reconciled.
- Ambiguous `INSTALL008` citations can load the wrong owner until CON-03 is reconciled.
- Bailey/BKLF and Peckham facts must remain site-bound; their presence in completed work orders does not make them baseline requirements.
- Registry or backup evidence must remain freshness-scoped and never substitute for live state, physical mapping, permission, or acceptance proof.

## 12. Non-resolving follow-up candidates

These are candidates only. This audit does not activate, prioritize, or assign them permanently.

1. Reconcile HACS/custom-frontend version, compatibility, update, rollback, and EOL ownership.
2. Reconcile stale INSTALL007 and INSTALL006 REV01 references in active supporting standards.
3. Resolve or alias the duplicate INSTALL008 identifier without rewriting lineage.
4. Define an implementable runtime role/permission/assignment acceptance matrix.
5. Define activity/history/audit-log retention and camera/media privacy ownership.
6. Define dashboard performance, dependency-drift, lifecycle, and retirement criteria.
7. Decide whether the older Dashboard Readiness Sheet and placeholder dashboard-prep packet have value worth promotion.

Every candidate requires a separate bounded task, owner-routing review, exact target files, and operator authorization. None authorizes dashboard implementation, customer access, conflict resolution, historical promotion, runtime change, merge, or deployment.

## 13. Audit evidence limits and completion statement

This audit classifies repository requirements, not installed runtime state. It does not prove that any customer Home Assistant instance, dashboard, dependency, notification path, remote-access path, backup, role, or device is configured, current, available, secure, or accepted.

All twelve mandatory coverage topics have an explicit result. Each normalized finding has exactly one primary classification. Conflicts and gaps remain unresolved. Current canonical authority remains with the existing owners, and the non-authoritative governance reference was used only for cross-domain ownership/gap discovery.

Governed docs-only build skip: no source or build configuration changed, and the work order plus Codex Execution Standard §16 prohibit an application build for this audit.
