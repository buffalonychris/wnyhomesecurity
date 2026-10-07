# INSTALL008 - Home Assistant Green Bootstrap Standard REV01

Status: Active installer-platform standard
Customer-facing: No
Implementation authority: No
Task ID: INSTALL-BOOTSTRAP-STANDARD-001
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
Descriptive alias: INSTALL008-BOOTSTRAP

## 1. Purpose

This standard documents the first-pass setup pattern for every WNYHS Home Assistant Green customer deployment.

It defines the expected manual bootstrap order, required Home Assistant apps and integrations, required HACS foundation, approved WNYHS Customer Control Center UI stack, validation checklist, and future automation plan.

This document does not create scripts, Home Assistant YAML, dashboard YAML, Lovelace card files, themes, automations, customer-specific configuration, runtime code, source code, or protected-system changes.

## 2. Operating Principle

Manual first, automate second.

BK Lewis is the golden reference build for this bootstrap standard. Future scripting should happen only after the manual process is proven, documented, repeated, and validated on a non-customer or development Home Assistant environment.

The initial goal is a repeatable technician checklist, not a one-click installer. WNYHS should learn from the BK Lewis manual bootstrap, preserve the exact order that works, document exceptions, and only then promote safe steps into scripts.

## 3. Target Hardware / Platform

Standard bootstrap target:

- Home Assistant Green.
- Home Assistant Green is the current BKLF reference hardware.
- Home Assistant OS / Supervisor is the current supported installation model.
- Customer deployment model.
- WNYHS admin account.
- Technician accounts for setup and service work.
- Customer accounts for normal customer use.

Account setup must keep technician and customer visibility separate. Customer accounts should receive only the dashboards, controls, and settings appropriate to the approved customer scope.

Home Assistant UI navigation changes over time. Technicians must treat older Add-ons documentation as reference only when the live HA 2026 UI differs, and should record the current navigation path used during bootstrap or recovery.

File Editor visible root note:

- In the File Editor add-on, the visible root is `homeassistant/`.
- Repo config source: `home-assistant/bklf/configuration.yaml`.
- HA Green config destination: `homeassistant/configuration.yaml`.
- Repo BKLF dashboard source: `home-assistant/bklf/dashboards/bklf-main-dashboard.yaml`.
- HA Green dashboard destination: `homeassistant/dashboards/bklf-main-dashboard.yaml`.

## 4. Required HA Apps / Add-ons

Standard required/current Home Assistant apps and add-ons:

| App / add-on | Purpose | Notes |
| --- | --- | --- |
| File Editor | In-browser configuration file review and controlled edits. | Install early so configuration files can be inspected without external file access. |
| Matter Server | Matter device support when applicable. | Keep available as part of the baseline platform even when no Matter device is active yet. |
| Samba Share | Local network file access for controlled technician file transfer. | Use only on trusted setup networks; do not expose credentials in repo docs. |
| Terminal & SSH | Command-line access for HACS installation and technician diagnostics. | Required before HACS installation. |
| Z-Wave JS | Z-Wave controller integration when Z-Wave hardware is used. | Install only for systems with Z-Wave scope. |
| Backup | Manual and scheduled backup foundation. | Create a backup after bootstrap validation. |
| Home Assistant Cloud | Temporary remote access when Nabu Casa is used. | Temporary access only; future target remains controlled remote access through approved WNYHS infrastructure. |

Future candidate / optional apps:

- Frigate and MQTT may be evaluated later when an approved architecture requires local camera/event processing or message-bus behavior.
- Candidate apps must not become baseline requirements without a later bounded governance update.

## 5. Required Built-In Integrations

Expected or default integrations where applicable:

- Mobile App.
- Sun.
- Weather / Meteorologisk institutt.
- Radio Browser.
- Reolink.
- Google Cast when detected and useful.
- Matter.
- Z-Wave.
- Zigbee Home Automation.

Not every customer deployment uses every integration. Integrations should be enabled based on actual hardware, approved scope, and supportability.

## 6. Required HACS Foundation

HACS is installed after Terminal & SSH is available.

HACS requirements:

- GitHub authorization is required.
- HACS is for custom integrations and frontend resources.
- HACS is not a Home Assistant OS add-on source.
- HACS content is community-maintained.
- HACS packages must be treated as managed customer dependencies.

Technicians must document which HACS packages are installed for each customer build. Future removal, upgrade, replacement, or troubleshooting depends on knowing the HACS dependency surface.

## 7. Required HACS Frontend/UI Stack

The approved WNYHS Customer Control Center UI stack is:

| HACS package | Purpose | Why WNYHS uses it | Notes / cautions |
| --- | --- | --- | --- |
| HACS | HACS management foundation. | Enables governed custom frontend resources. | Install before the frontend stack and document package versions in the customer install record. |
| Mushroom | Clean, mobile-friendly dashboard cards. | Supports calm customer controls with readable state and actions. | Keep customer cards simple; avoid exposing technical state. |
| Bubble Card | Mobile-friendly navigation and compact controls. | Supports app-like customer navigation and quick interaction surfaces. | Validate behavior in the Home Assistant Companion App. |
| button-card | Highly configurable action and status buttons. | Supports large task-based controls for locks, views, modes, and key actions. | Do not make status meaning color-only. |
| auto-entities | Dynamic entity lists for controlled internal views. | Supports installer and operator views that collect relevant states. | Avoid exposing noisy dynamic lists in normal customer dashboards. |
| card-mod | Controlled card styling. | Enables WNYHS product polish when theme-ready styling is needed. | Use carefully; avoid fragile one-off styling. |
| layout-card | Responsive card layout control. | Supports predictable mobile-first dashboard structure. | Validate no horizontal scrolling or zoom dependency. |
| Swipe Card | Swipeable camera or status groups. | Supports compact mobile review where useful. | Do not hide primary actions behind swipe-only interaction. |
| browser_mod | Browser/device-aware dashboard behavior. | Supports display-specific behavior and customer experience refinement. | Add the browser_mod integration after restart. |

These packages support the WNYHS Customer Control Center product layer. They do not by themselves authorize any customer dashboard implementation.

### 7.1 Frontend Dependency Qualification and Lifecycle

The descriptive alias `INSTALL008-BOOTSTRAP` must be used when a citation could be confused with the commissioning document that also carries the historical `INSTALL008` identifier. This document remains the narrow owner for HACS/custom-frontend compatibility and lifecycle governance; it does not replace INSTALL006, DESIGN001, DASHBOARD001, or INSTALL011.

No universal package version is approved by this revision. Site inventory versions are evidence for that site only. Until a bounded qualification record supplies WNYHS-tested evidence, the tested-version field remains `NOT YET QUALIFIED`.

| Dependency | Posture | Intended use | Current WNYHS-tested version |
| --- | --- | --- | --- |
| HACS | Required baseline foundation | Technician-managed custom integration and frontend resource management | NOT YET QUALIFIED |
| Mushroom | Required baseline frontend | Customer-readable mobile cards | NOT YET QUALIFIED |
| Bubble Card | Required baseline frontend; per-view use conditional | Customer navigation and compact controls | NOT YET QUALIFIED |
| button-card | Required baseline frontend | Governed customer actions and status presentation | NOT YET QUALIFIED |
| Card Mod | Required baseline frontend; styling use conditional | Technician-managed governed styling | NOT YET QUALIFIED |
| Layout Card | Required baseline frontend | Responsive delivery support | NOT YET QUALIFIED |
| Swipe Card | Required installed stack; per-view use optional | Compact camera/status groups without hiding primary actions | NOT YET QUALIFIED |
| Browser Mod | Required installed stack; use conditional on approved device behavior | Technician-managed device-aware experience support | NOT YET QUALIFIED |
| Auto-Entities | Required installed stack; service/installer use by default | Controlled dynamic internal lists | NOT YET QUALIFIED |

For every installed dependency, the customer install or qualification record must capture:

- exact installed version and evidence date;
- Home Assistant version and compatibility evidence used for the decision;
- WNYHS-tested version or explicit `NOT YET QUALIFIED`;
- applicable Customer, Installer / Commissioning, or Service / Operator use;
- resource-load and applicable Companion/browser validation result;
- update candidate, test evidence, and approval outcome before promotion;
- pre-change backup and the exact rollback target or removal/recovery posture; and
- supported, deferred, blocked, unsupported, or EOL posture with owner and next action.

An update is qualified only after non-customer or separately authorized bounded testing confirms resource loading, applicable dashboards/components, responsive behavior, and rollback evidence. Failed or incomplete qualification remains blocked and does not become a baseline. Unsupported or EOL dependencies must not be newly promoted; affected capabilities must be replaced, retired, or explicitly blocked through a separate bounded decision without silently removing customer functionality.

## 8. Install Order

Current manual order:

1. Confirm HA OS running.
2. Install/start File Editor.
3. Install/start Samba Share.
4. Install/start Terminal & SSH.
5. Install/start Z-Wave JS if Z-Wave is used.
6. Confirm Zigbee integration.
7. Install HACS.
8. Authorize HACS through GitHub.
9. Install HACS UI stack.
10. Restart HA once after UI stack install.
11. Add Browser Mod integration after restart.
12. Verify resources loaded.
13. Verify dashboard still loads.
14. Create encrypted backup.
15. Record emergency key handling in the customer install record.

Encrypted backup workflow:

- Create an encrypted backup after initial bootstrap, after dashboard/config validation, and after onsite customer validation.
- Store backup evidence and restore notes in the customer install record.
- Do not store backup passwords, encryption keys, emergency keys, private URLs, or credential values in repository docs.
- Emergency key handling must be documented for the customer/job record before handoff so recovery does not depend on installer memory.
- Any backup restore or destructive recovery step requires operator confirmation and a current backup.

## 9. Future Automation / Scripting Plan

Future WNYHS bootstrap automation should eventually create:

- `home-assistant/scripts/wnyhs-ha-green-bootstrap.sh`.
- Optional validation script.
- Install report output.

Future automation may eventually:

- Install required HA OS apps/add-ons through `ha` CLI.
- Install HACS.
- Install approved HACS packages where safe.
- Validate resources.
- Apply WNYHS themes.
- Deploy WNYHS component library.
- Deploy customer dashboard files.
- Run validation checklist.
- Create final backup.

This future automation plan is documentation only. No script is created or authorized by this task.

## 10. Script Safety Rules

Future scripts must:

- Never contain secrets or tokens.
- Never overwrite customer config without backup.
- Require operator confirmation before destructive steps.
- Log what changed.
- Support dry-run where practical.
- Be tested on non-customer or development Home Assistant before standard use.
- Avoid blindly installing optional modules not sold or installed.

Script output should identify the Home Assistant version, target hardware, installed add-ons, HACS packages, resource validation results, backup status, and any skipped optional modules.

## 11. Customer-Specific Optional Modules

Optional modules are installed only by customer need and approved scope:

- Lighting.
- Climate.
- Utilities.
- Pool.
- Irrigation.
- Generator.
- Elder Care.
- Vacation.
- Funeral Home / Commercial modules.

Optional modules must not appear as active customer features unless the related devices, integrations, dashboard controls, and support posture are actually present.

Customer-facing AI Assist constraint:

- AI Assist may be evaluated later for customer-readable help, status explanation, or guided navigation only.
- AI Assist must not control locks, alarms, security-sensitive actions, shutoff devices, access workflows, or other protected actions unless later explicitly authorized by governance.
- AI Assist must not become a substitute for customer confirmation, installer commissioning, or operator-approved safety checks.

## 12. Validation Checklist

Bootstrap validation must confirm:

- HA starts cleanly.
- Add-ons/apps running.
- HACS available.
- HACS packages installed.
- Browser Mod integration added if used.
- Dashboards load.
- No red configuration errors.
- Mobile Companion App loads dashboard.
- No horizontal scrolling or zoom dependency.
- Encrypted backup created.
- Emergency key handling documented outside repository docs.

Validation evidence should be captured in the customer install record or installer notes, not as secrets or customer-private values in repository docs.

## 13. BK Lewis Reference Notes

BK Lewis manual bootstrap is the first reference deployment.

Reference notes:

- Nabu Casa temporary remote access was used for first-pass remote access.
- Future target is Cloudflare Tunnel / Access or another approved WNYHS remote access model.
- Dashboard UI stack was installed manually first.
- Future deployments should become scriptable only after this build is validated.
- BK Lewis remains the practical reference for order, package selection, mobile validation, and backup timing.

These notes document installer learning only. They do not authorize BK Lewis dashboard YAML edits or live Home Assistant changes.

## 14. Non-Goals

This task does not authorize:

- Script creation.
- Live Home Assistant changes.
- Dashboard YAML changes.
- Cloudflare setup.
- Notification setup.
- Entity remapping.
- Source, route, UI, CSS, public asset, runtime, API, or dependency changes.
- HubSpot schema, property, pipeline, workflow, or write-path changes.
- Stripe/payment verification or checkout changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Environment or secret changes.

## 15. Standard Context and Environmental Layer

Every WNYHS HA Green deployment should include or plan for a baseline context layer. This layer helps dashboards and future automations make smarter decisions without exposing raw technical detail to customers.

The context layer should translate device state, weather, power, network, and environmental readings into customer-readable outcomes. Normal customer dashboards should stay calm and outcome-focused. Technician Mode may show raw values, diagnostics, and sensor details.

Baseline/default context integrations:

| Integration | Standard use | Installation rule |
| --- | --- | --- |
| Sun | Day/night and sun-position context. | Default baseline integration. |
| Weather / Meteorologisk institutt | Weather context for dashboards and future logic. | Default baseline integration where available. |
| Mobile App | Companion App access, device association, and mobile validation. | Required for customer mobile validation. |
| Backup | Backup status and restore-readiness context. | Required baseline capability. |
| Radio Browser | Standard Home Assistant default media integration. | Keep when useful and harmless. |
| Reolink | Camera and doorbell context. | Include when cameras are installed. |
| Z-Wave JS | Z-Wave device context. | Include when Z-Wave devices are installed. |
| Zigbee Home Automation or selected Zigbee stack | Zigbee device context. | Include when Zigbee devices are installed. |

Recommended future hardware and sensor categories:

- Outdoor lux / illuminance sensor.
- Outdoor temperature and humidity.
- Indoor temperature and humidity by key zone.
- Leak sensors at water heater, utility sink, bathroom, basement low point, HVAC condensate, and sump area when applicable.
- UPS / backup power status.
- Network health status.
- Internet/remote access path status.
- Equipment room or HA/network closet temperature.

Optional environmental modules:

| Module | Typical signals | Customer outcome |
| --- | --- | --- |
| Basic Environment | Indoor temp/humidity. | Comfort and basic building condition. |
| Property Protection | Leak, freeze, utility-room temp. | All Dry, freeze-risk review, utility-room review. |
| Comfort | Thermostat and room climate. | Comfortable zones and room climate. |
| Air Quality | CO2, VOC, PM2.5. | Air Quality review where sensors are installed. |
| Commercial Care | Lobby climate, equipment room temp, UPS/network status. | Business-ready condition and support review. |
| Outdoor Logic | Outdoor lux, weather, sun elevation, wind/rain. | Smarter lighting, weather-aware context, and exterior logic. |

Customer-facing dashboard rule:

- Show outcomes only in normal customer dashboards.
- Use plain-language status such as Everything Looks Good, System Online, All Dry, No Motion, Building Secure, and Backup Power Ready.
- Keep raw values, diagnostics, entity detail, and sensor tables in Technician Mode or installer/service views.
- Do not expose technical noise to customers unless it directly supports a customer action or clearly explains an attention state.

## 16. Protected-System Boundaries

This standard is documentation only.

It does not authorize changes to HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare configuration, Lead Signal, requestId, quote/payment flow, public website routes, customer-facing public copy, dependencies, package-lock, Home Assistant YAML, dashboard YAML, automations, scripts, themes, or live customer systems.
