# AUTOMATION001 — WNYHS Home Assistant Automation Standard — REV01

Status: Active standard
Owner: WNY Home Security
Applies To: WNYHS solution and package automation design
Runtime Authority: Home Assistant-native customer behavior where possible
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

---

## 1. Purpose

This document defines the repo-owned automation standard for WNY Home Security customer solution and package deployments.

WNYHS is evolving into a Smart Property Platform company. Customers buy outcomes, not devices. Solutions are the sellable units, solutions roll up into packages, and packages roll up into categories. This standard keeps that model supportable by establishing Home Assistant-native automation as the default automation posture for WNYHS Core deployments.

The standard also defines how C.A.F.E., Node-RED, and Homey may be evaluated or reserved without turning them into default customer-install dependencies.

---

## 2. Scope

This standard applies broadly to WNYHS solutions and packages that use automation logic, including but not limited to:

- Home Assistant-based WNYHS Core deployments.
- Lighting packages and SafePath-style lighting logic.
- Elder care and aging-in-place automations.
- Leak, freeze, sump, and environmental safety workflows.
- Smart entry and access workflows.
- Away, night, guest, and sleep mode behavior.
- Customer dashboard controls and manual override paths.
- Installer test and validation modes.

This document is a governance and architecture standard only. It does not implement automations or authorize runtime changes by itself.

---

## 3. Non-Scope

This standard does not define or authorize:

- Final product BOMs.
- Customer pricing.
- LED strip, controller, sensor, bridge, hub, or switch model selections.
- Installation SOPs.
- Home Assistant add-on installation.
- HACS installation.
- C.A.F.E. implementation.
- Node-RED installation.
- Homey installation.
- Customer dashboard creation.
- Runtime automation YAML, blueprints, scripts, scenes, helpers, or packages.
- App source-code changes, routes, CSS, package data, quote logic, scheduling logic, Stripe logic, HubSpot logic, environment variables, or secrets.

Future implementation requires a separate bounded task and the applicable runtime, claims, solution, hardware, package, supportability, and customer-safety review.

---

## 4. WNYHS Core Relationship

WNYHS Core is the Home Assistant-based customer control plane for standard WNYHS smart property deployments.

Automation behavior should be designed so the customer-facing outcome remains understandable, recoverable, and maintainable inside WNYHS Core. Where possible, the runtime authority for customer behavior should remain Home Assistant-native through Home Assistant automations, scripts, scenes, helpers, areas, devices, entities, dashboards, and integration-supported services.

Visual authoring tools may assist the operator or installer, but they must not obscure the customer runtime boundary or create an unsupported dependency chain.

---

## 5. Automation Layer Hierarchy

The recommended WNYHS automation hierarchy is:

1. **Native Home Assistant automations**
2. **C.A.F.E. as the preferred visual authoring layer for complex native Home Assistant automation flows**
3. **Node-RED only when native Home Assistant plus C.A.F.E. cannot cleanly support the required orchestration**
4. **Homey only for unusual customer-specific deployment cases, not standard WNYHS packages**

This hierarchy is mandatory for architecture evaluation. It does not make C.A.F.E., Node-RED, or Homey required production dependencies until a future bounded validation or implementation task approves them for a specific use case.

---

## 6. Native Home Assistant-First Rule

WNYHS should default to Home Assistant-native automations for standard customer installs.

Use native Home Assistant first when the required behavior can be expressed cleanly through Home Assistant-supported primitives such as:

- Automations.
- Scripts.
- Scenes.
- Helpers.
- Input booleans, selects, numbers, buttons, timers, schedules, and template sensors.
- Areas, devices, entities, labels, and integration-supported services.
- Dashboards suitable for customer control and installer support.

Native Home Assistant behavior is preferred because it keeps WNYHS Core supportable, minimizes dependencies, reduces customer-install complexity, and preserves a clearer recovery path if a visual authoring layer or optional orchestration tool is unavailable.

---

## 7. C.A.F.E. Evaluation and Adoption Rule

C.A.F.E. is an evaluation and adoption candidate, not an unvalidated hard dependency.

C.A.F.E. may be used for visual authoring and maintenance of complex Home Assistant automations when native Home Assistant logic becomes difficult to reason about in standard YAML or UI-only form. Core customer-facing behavior should remain Home Assistant-native where possible.

Before C.A.F.E. becomes a required production standard for WNYHS, it must be validated against real WNYHS automation patterns, including installer maintainability, customer-safe overrides, export or storage behavior, version-control expectations, recovery procedures, and support burden.

If C.A.F.E. generates or stores native Home Assistant automation logic, the repo should treat the native Home Assistant behavior as the runtime authority. C.A.F.E. may be the preferred authoring and maintenance layer, but the customer outcome must remain governed by the Home Assistant runtime behavior and the applicable WNYHS solution/package standard.

C.A.F.E. is appropriate to evaluate for complexity patterns such as:

- Multi-condition logic.
- Direction-aware triggers.
- Multiple-sensor all-clear rules.
- Time-of-day modes.
- Sleep, guest, and away suppression.
- Fade-in and fade-out timing.
- Multi-zone lighting sequences.
- Dashboard override controls.
- Customer-safe manual disable and enable paths.
- Installer test modes.

---

## 8. Node-RED Exception Rule

Node-RED must not be a default dependency for standard WNYHS customer installs.

Node-RED may be considered only when native Home Assistant plus the evaluated C.A.F.E. path cannot cleanly support the required orchestration. Any Node-RED use must be justified by a bounded solution or customer-specific deployment task and must document:

- Why native Home Assistant is insufficient.
- Why C.A.F.E. is insufficient or unavailable for the pattern.
- What logic runs in Node-RED.
- How the customer or operator recovers if Node-RED is unavailable.
- How flows are backed up, versioned, documented, and supported.
- Whether the deployment remains a standard package or becomes an advanced/custom deployment.

Node-RED use should be treated as an advanced exception path, not as the normal WNYHS automation architecture.

---

## 9. Homey Exception Rule

Homey must not be a default dependency for standard WNYHS customer installs or standard WNYHS packages.

Homey may be reserved for unusual customer-specific deployment cases where the customer environment, device ecosystem, or integration constraints make it the practical option and where native Home Assistant plus C.A.F.E. and Node-RED exception analysis do not cleanly satisfy the need.

Any Homey use must be documented as customer-specific or advanced/custom. It must not redefine the default WNYHS Core architecture without a future governance revision.

---

## 10. Dashboard and Override Requirements

Every standard WNYHS automation package should include a reasonable manual control path appropriate to the solution.

Acceptable control paths may include:

- Home Assistant dashboard toggle.
- Physical or wireless button where appropriate.
- Mode selector.
- Temporary disable control.
- Installer or test mode.
- Clear recovery behavior if automation logic fails.

Customer controls must be understandable and safe. A customer should not need to edit automation internals to temporarily disable, test, recover, or manually control an outcome.

For advanced/custom deployments, the override model must be documented before production use.

---

## 11. Customer-Install Dependency Standard

Standard WNYHS customer installs should minimize required dependencies.

Default customer-install dependency posture:

- Home Assistant / WNYHS Core: standard control plane.
- Native Home Assistant automations: default runtime automation layer.
- C.A.F.E.: evaluation/preferred visual authoring candidate for complex native Home Assistant flows, not a required production dependency until validated.
- Node-RED: exception-only advanced orchestration dependency.
- Homey: unusual customer-specific exception dependency.

A solution or package must not silently require Node-RED, Homey, or unvalidated C.A.F.E. production use unless a future bounded task, implementation standard, and support model explicitly approve that dependency.

---

## 12. Supportability Requirements

Automation designs must remain supportable for WNYHS operators, installers, and customers.

Supportable automation packages should document:

- Intended customer outcome.
- Trigger sources.
- Conditions and suppression rules.
- Manual override path.
- Expected recovery behavior.
- Installer test procedure at a high level.
- Required integrations and optional integrations.
- Runtime authority and dependency assumptions.
- Known failure modes.
- How configuration is backed up or recreated.

Complex automations should be readable by someone other than the original author. If a tool improves readability but adds dependency risk, the bounded task must balance both factors before adoption.

---

## 13. SafePath Lighting Reference Use Case

SafePath Lighting is a reference example for this standard, not the sole target of the standard.

A SafePath-style solution may require:

- WLED-based lighting behavior.
- Motion or presence sensing.
- Direction-aware hallway or stair flow logic.
- Fade-ahead and fade-behind behavior.
- Nighttime brightness and color rules.
- Suppression logic for sleep, guest, away, or manual-disable modes.
- Multi-zone sequencing.
- Dashboard controls.
- Manual override.

SafePath may be a strong candidate for C.A.F.E. evaluation because its logic can combine direction, time, occupancy, suppression, fade timing, and zone sequencing. However, this standard does not define the final SafePath BOM, pricing, LED strip choices, controller models, sensor models, installation SOP, customer-facing package copy, or production dashboard. Those belong in future SafePath-specific bounded documents or implementation tasks.

---

## 14. Future Applicable Solution Families

This standard should guide future automation planning for WNYHS solution families such as:

- Elder care and aging-in-place automations.
- Leak, freeze, sump, and environmental safety packages.
- Smart entry and access workflows.
- Away, night, guest, sleep, and service modes.
- Lighting packages.
- Environmental safety packages.
- Customer dashboard control packages.
- Installer support and test-mode workflows.

Each future solution family must still receive its own bounded solution, package, hardware, claims, support, and implementation review before production deployment.

---

## 15. Evaluation Checklist for New Solution Automations

Before promoting a new WNYHS solution automation, evaluate:

1. What customer outcome does the automation deliver?
2. Can the behavior be implemented cleanly with native Home Assistant automations, scripts, scenes, and helpers?
3. Does the automation require multi-condition, multi-zone, direction-aware, mode-dependent, or sequencing logic that becomes hard to maintain natively?
4. Would C.A.F.E. improve visual authoring and maintenance while preserving Home Assistant-native runtime authority?
5. Has C.A.F.E. been validated for this real WNYHS pattern before being required?
6. If Node-RED is proposed, why are native Home Assistant plus C.A.F.E. insufficient?
7. If Homey is proposed, why is this an unusual customer-specific deployment rather than a standard package?
8. What manual override path exists for the customer?
9. What dashboard, physical button, mode selector, temporary-disable, or installer/test path is appropriate?
10. What happens if sensors, integrations, the visual authoring layer, or the orchestration dependency fail?
11. Is the behavior documented well enough for another operator or installer to support?
12. Does the automation avoid unsupported public claims and protected runtime changes?
13. Does the automation avoid HubSpot, Stripe, scheduling, quote, route, CSS, dependency, environment, and secret changes unless separately authorized?
14. What future bounded task is required before implementation?

---

## 16. Forbidden Patterns

Do not use this standard to:

- Make Node-RED a default standard dependency.
- Make Homey a default standard dependency.
- Treat C.A.F.E. as a required production dependency before validation.
- Hide core customer behavior in an unsupported visual tool with no recovery path.
- Create automations that customers cannot reasonably disable, override, or recover from.
- Create package behavior that requires editing raw automation internals for routine customer control.
- Implement runtime automations without a bounded implementation task.
- Define final BOMs, pricing, or purchasing standards without a bounded hardware/package task.
- Modify HubSpot, Stripe, scheduling, quote, route, CSS, package, dependency, environment, or secret behavior through an automation-standard task.
- Promote future implementation work as complete merely because this standard exists.

---

## 17. Promotion and Implementation Rule

This standard is a governance artifact. It may guide future planning, architecture reviews, and bounded implementation prompts, but it does not authorize production automation changes by itself.

To implement any customer automation, future work must create or activate a bounded task that identifies:

- The specific solution or package.
- The customer outcome.
- The automation layer selected under this hierarchy.
- Required integrations and dependencies.
- Manual override and recovery behavior.
- Documentation and validation requirements.
- Protected systems confirmed untouched or explicitly authorized.

C.A.F.E., Node-RED, and Homey adoption must each remain traceable to the hierarchy and exception rules in this standard.
