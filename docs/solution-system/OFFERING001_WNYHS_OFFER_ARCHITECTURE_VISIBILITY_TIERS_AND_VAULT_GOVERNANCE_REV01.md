# OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01

## Metadata

- **Title:** WNYHS Offer Architecture, Visibility Tiers, and The Vault Governance
- **Revision:** REV01
- **Status:** Active Governance Draft
- **Owner Area:** Solution System / Offer Architecture / Custom Catalog Governance
- **Task Reference:** T-OFFERING001
- **Scope:** Docs-only offer architecture governance
- **Last Updated:** 2026-06-11
- **Implementation Status:** No application implementation, page creation, public copy deployment, pricing, quote behavior, hardware purchasing, or customer installation authorization is authorized by this document alone.

---

## 1. Purpose

This document defines how WNY Home Security organizes what it sells, what it shows publicly, what remains operator-facing, and how custom or pilot capabilities can be preserved without creating public catalog chaos.

It creates the governance layer for:

1. Public standard catalog offers.
2. Public custom-project visibility.
3. Internal operator-facing custom/pilot capability tracking.
4. The Vault as the premium/custom public-facing concept.
5. WNYHS Core first-time vs existing-customer offer logic.
6. Specialty capabilities that WNYHS may quote but should not treat as common standard solutions.
7. Research-only or excluded items that must not be sold or marketed.

This document is not:

- a pricing document
- a final package document
- a public website copy document
- a page-build specification
- a final BOM document
- a hardware purchasing authorization
- a customer installation authorization
- a HubSpot workflow specification
- a Stripe/payment specification
- a scheduling/runtime specification
- a Codex implementation work order

Future implementation, pricing, public-copy deployment, page creation, quoting logic, hardware purchasing, or customer installation still requires a separate bounded Master Task Register task and work order.

---

## 2. Source Basis

This document is based on:

1. `SOLUTION_CATALOG_RECONCILIATION_REV01`.
2. `HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01`.
3. `CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01`.
4. Accepted WNYHS solution research across Home Security, Home Safety / Environmental Safety, Home Lighting, Home Automation, and Aging-in-Place.
5. The current WNYHS business model: WNYHS Core plus additive solutions, packages, and custom project work.
6. Operator decision that custom, premium, pilot, and quote-only capabilities should remain visible and usable even when they are not first-wave standard public catalog items.

---

## 3. Offer Architecture

WNYHS offers must be organized into four visibility tiers.

| Tier | Name | Purpose | Public Visibility | Operator Visibility |
|---|---|---|---|---|
| 1 | Public Standard Catalog | Common, repeatable, supportable first-wave solutions and packages. | Full public pages/cards allowed after approval. | Full details. |
| 2 | The Vault / Custom Projects | Premium, custom, site-reviewed, or quote-only capabilities WNYHS can discuss publicly without presenting as standard packages. | Controlled public teaser/landing section allowed after approval. | Full details, quoting notes, dependencies. |
| 3 | Internal Operator Catalog | Capabilities Lou/Chris can consider, quote, field test, or propose case-by-case. | Not publicly listed unless promoted to Tier 1 or Tier 2. | Full details. |
| 4 | Research / Excluded | Not ready, not safe, not aligned, or not authorized for standard WNYHS sale. | Not public. | Research notes only. |

This architecture prevents two failure modes:

1. Hiding real custom capabilities just because they are not standard packages.
2. Turning the public website into an unfocused list of every possible smart-device idea.

---

## 4. Tier 1: Public Standard Catalog

Tier 1 contains homeowner-recognizable, repeatable WNYHS offers that can be understood, quoted, installed, supported, and expanded.

Tier 1 examples include:

- WNYHS Core Dashboard Setup
- Front Door Package Protection
- Entry & Perimeter Awareness
- Garage Door Awareness
- Smart Lock & Guest Access
- Door / Window Left-Open Awareness
- Water Leak Alerts
- Freeze Risk Awareness
- Basement & Utility Room Alerts
- Smarter Everyday Lighting
- Night Path Lighting
- Entry Lighting Automation
- Entry / Exit Awareness for Older Adult
- Help Button / Assistance Trigger
- Notification & Alert Routing Setup
- Away / Night / Vacation Modes

Tier 1 requirements:

- Governed solution object exists or is approved for creation.
- Hardware path is Approved Standard or properly scoped Conditional.
- Claims are compliant with claims guardrails.
- New vs existing customer Core logic is defined.
- BOM/pricing inputs are defined before pricing is made public.
- Public copy and media are separately approved.
- The offer is repeatable enough to avoid custom quote sprawl.

Tier 1 does not require every install to be identical. It requires the offer to be standardized enough that WNYHS knows the normal scope, normal exclusions, and normal custom escalation path.

---

## 5. Tier 2: The Vault / Custom Projects

### 5.1 Definition

**The Vault** is the WNYHS public-facing concept for premium, custom, specialty, site-reviewed, or quote-only smart-property projects.

The Vault exists because some capabilities are real WNYHS opportunities but should not be presented as common flat-price solutions.

The Vault may include:

- hot tub control or awareness
- fire pit control or outdoor-living automation
- pool equipment awareness or control
- outdoor entertainment scenes
- specialty landscape lighting
- permanent exterior lighting
- gate control
- irrigation control
- detached structure controls
- workshop controls
- custom dashboards
- advanced Node-RED automations
- specialty one-device solutions
- custom Home Assistant integrations
- homeowner-specific device consolidation
- advanced outbuilding or exterior monitoring
- specialty seasonal-property automations

### 5.2 Public Positioning

The Vault may be described publicly as a custom smart-property project path.

Allowed public framing:

- “Custom smart-property projects reviewed individually.”
- “Specialty controls for outdoor living, detached spaces, lighting, gates, pools, hot tubs, workshops, and other site-specific needs.”
- “Designed around compatibility, safety, wiring, weather exposure, and customer goals.”
- “Quote-only after review.”
- “Available where equipment and site conditions support it.”

Avoid presenting The Vault as:

- a standard fixed-price package catalog
- a guaranteed compatibility list
- a safety-certified control system
- a life-safety system
- a universal automation system
- a DIY device menu
- a collection of unsupported promises

### 5.3 Visual / Brand Direction

The Vault should feel premium, controlled, and custom.

Suggested design feel:

- dark premium room
- mahogany / walnut tone
- brass accents
- deep red leather inspiration
- controlled lighting
- subtle smart-property interface
- local expert / private consultation mood
- high-end custom-project energy

The design should not feel gimmicky, adult-themed, horror-themed, nightclub-like, or fear-based.

The public concept should communicate:

> Not everything belongs in a standard package. Some smart-property ideas deserve a custom review.

### 5.4 Claims Boundaries

The Vault must obey the same claims guardrails as the public standard catalog.

The fact that something is custom does not allow WNYHS to claim:

- guaranteed safety
- emergency response
- crime prevention
- fire prevention
- water damage prevention
- universal compatibility
- code compliance
- medical monitoring
- professional alarm monitoring
- no monthly fees in all cases
- local-only operation in all cases

Custom work may require clearer disclosures, not fewer disclosures.

### 5.5 Safety / Trade Boundary

The following Vault work requires explicit site review and may require licensed trade involvement, equipment manufacturer review, or exclusion:

- gas fire pit control
- high-voltage hot tub / spa equipment control
- pool pumps, heaters, chlorinators, and other equipment
- exterior electrical controls
- irrigation valves/controllers
- landscape transformers
- gates and access motors
- hardwired current monitoring
- permanent exterior lighting
- outdoor weather-exposed devices
- detached structures with uncertain power/network conditions

WNYHS may design, integrate, coordinate, configure, or quote such work only within the bounds of licensing, safety, manufacturer instructions, customer disclosure, and operator approval.

---

## 6. Tier 3: Internal Operator Catalog

Tier 3 is the Lou/Chris-facing list of capabilities that WNYHS may want to remember, discuss, evaluate, or quote case-by-case.

Tier 3 is not a public promise.

It should track:

- capability name
- description
- customer problem
- likely hardware path
- Home Assistant integration path
- hardware registry status
- standard/custom/pilot/research status
- safety or trade boundary
- quoting complexity
- support complexity
- claim limitations
- required disclosures
- related public solution/package
- promotion path to Tier 2 or Tier 1
- operator notes

Tier 3 is where WNYHS should preserve ideas that are real but not ready for public standardization.

Examples:

| Capability | Tier 3 Reason |
|---|---|
| Hot Tub Control / Awareness | Valuable custom outdoor living feature; requires site/equipment review. |
| Fire Pit Control | Potentially attractive but safety/gas/control boundary requires strict custom handling. |
| Pool Equipment Awareness / Control | Viable custom area; equipment and electrical/plumbing dependencies vary. |
| Outdoor Entertainment Scenes | Good premium custom feature; wiring and device mix vary. |
| Gate Control | Site/equipment/access/safety review required. |
| Irrigation Control | Possible smart property add-on; seasonal, valve/controller/site dependent. |
| Workshop Equipment Awareness | Useful but load/safety/device ratings vary. |
| Advanced Node-RED Automations | Operator-facing advanced workflow layer; not public default. |
| Specialty Dashboard Builds | Good premium customization; support scope must be controlled. |

---

## 7. Tier 4: Research / Excluded

Tier 4 contains ideas, hardware, claims, or patterns that WNYHS should not sell, standardize, or publicize yet.

Tier 4 examples include:

- standard smoke/CO productization
- medical monitoring
- fall detection as a WNYHS promise
- professional alarm monitoring / police dispatch claims
- hardwired current-monitor retrofits as standard
- stove / large appliance left-on control as standard
- myQ-dependent garage control as standard
- cloud-required camera ecosystems as standard
- unsupported “works with everything” device claims
- unsupported “no cloud ever” or “no monthly fees ever” claims

Tier 4 may contain research notes, but it must not be used as sales material.

---

## 8. WNYHS Core Offer Rule

WNYHS Core is the control-plane foundation.

Core includes the Home Assistant-based local dashboard/control-plane setup and related configuration needed to support WNYHS solutions.

### 8.1 First-Time Customer Rule

A first-time WNYHS customer must receive/purchase WNYHS Core as part of their first standard solution, package, or custom project unless explicitly excluded by operator decision.

First-time customer offers must account for:

- Core controller
- required radio(s)
- initial dashboard/configuration
- supported integration path
- initial notification/configuration setup
- customer handoff/training
- future expansion readiness

### 8.2 Existing Customer Rule

An existing WNYHS customer who already has WNYHS Core should not be charged for Core again.

Existing-customer add-ons should include only:

- new hardware
- installation work
- dashboard additions
- alert/automation updates
- integration/configuration changes
- testing
- customer handoff for the new feature

### 8.3 Custom Project Rule

Vault/custom work must identify whether the customer already has Core.

If the customer does not have Core, the custom quote must include Core unless the project is intentionally handled as a pass-through/non-Core service with explicit operator approval.

---

## 9. Relationship Between Solutions, Packages, Capabilities, and Devices

WNYHS should use the following hierarchy:

| Level | Meaning | Example |
|---|---|---|
| Category | Broad customer-facing area. | Home Security, Home Safety, Home Lighting. |
| Package | Bundled customer outcome. | Basement / Utility Protection Package. |
| Solution | Sellable customer-recognizable outcome. | Water Leak Alerts. |
| Capability | More specific function or custom-use case. | Sump area awareness, hot tub status awareness. |
| Device | Hardware used to deliver the outcome. | Leak sensor, smart relay, contact sensor. |

Important rule:

> Not every device or capability deserves to become a public solution.

A device or capability may remain in the Internal Operator Catalog or The Vault if it is viable but too narrow, too custom, too site-dependent, too risky, or too support-heavy for the standard public catalog.

---

## 10. Promotion / Demotion Rules

### 10.1 Promotion to Public Standard Catalog

A Tier 2 or Tier 3 capability may move into Tier 1 only after:

- customer problem is repeatable
- hardware path is approved or conditionally governed
- claims-safe public language exists
- BOM/pricing inputs exist
- install assumptions exist
- support burden is understood
- required disclosures exist
- operator approves promotion
- document update records the change

### 10.2 Promotion to The Vault

A Tier 3 capability may move into The Vault public visibility when:

- WNYHS is comfortable publicly acknowledging it as custom/quote-only
- the capability can be described safely without overclaiming
- custom review requirements are clear
- operator-facing notes exist
- it does not require being sold as a standard package

### 10.3 Demotion

Any public or custom capability must be demoted if:

- hardware proves unreliable
- vendor ecosystem changes
- support burden is too high
- claims risk increases
- site requirements are too unpredictable
- licensing/trade boundary becomes unclear
- customer expectations cannot be controlled

---

## 11. Public Website Governance for The Vault

The Vault may eventually exist on the public website as:

- a section on a services page
- a premium custom-project landing page
- a CTA from solution/package pages
- an “Ask us about custom controls” module
- a gated/internal-linked operator reference, if later implemented

The public site may mention categories of custom work, but should avoid exhaustive detail until each claim is approved.

Allowed public buckets:

- Outdoor Living Controls
- Pool / Hot Tub Awareness and Controls
- Specialty Lighting
- Detached Space Controls
- Gates / Access / Exterior Equipment
- Workshops and Utility Spaces
- Custom Dashboards
- Advanced Automation Design

Each public bucket should say “reviewed individually” or equivalent.

---

## 12. Operator Access Requirement

WNYHS should eventually provide Lou and Chris with an operator-facing way to access Tier 2 and Tier 3 capabilities.

Acceptable future implementation options include:

1. repo-backed internal Markdown catalog
2. admin-only internal website route
3. private Notion/Google Doc/Workspace document
4. HubSpot internal product/service notes
5. local operator quoting worksheet
6. future internal dashboard

This document does not choose or implement the system. It establishes that the need exists.

Future implementation must define:

- access control
- edit authority
- source of truth
- relationship to public site
- relationship to HubSpot
- relationship to quote/proposal generation
- update process
- claims review process

---

## 13. Compressed Next-Task Model

To avoid turning this catalog buildout into dozens of unnecessary tasks, WNYHS should compress the next phase into four bounded work tracks:

| Track | Proposed Task | Purpose |
|---|---|---|
| Offer Architecture | T-OFFERING001 | Public/custom/internal/research tiers, The Vault, Core first-time/existing rule. |
| Package/BOM | T-PACKAGEBOM001 | Package map, BOM/pricing input schema, Core/add-on input rules. |
| Visual Site System | T-SITEVISUAL001 | Token CSS, visual system, sitewide styling, no business-logic drift. |
| Cleanup | T-CLEANUP001 | Legacy funnel, support form, layout remnants, stranded quote/Fit Check paths. |

Additional SOPs may still be needed later, but this compressed model keeps the immediate execution path manageable.

---

## 14. Implementation Hold

This offer architecture document does not authorize:

- app/source changes
- page changes
- route changes
- public website copy deployment
- The Vault page deployment
- internal admin implementation
- ad launch
- social media publishing
- printed collateral publication
- package card updates
- solution page updates
- quote flow changes
- pricing changes
- Stripe/payment behavior
- HubSpot workflows
- scheduling changes
- runtime behavior
- environment variable changes
- hardware purchasing
- customer installation
- legal/insurance/life-safety assertions

Each future public-copy, implementation, advertising, sales-collateral, pricing, package, runtime, or internal-access change must receive its own bounded task and work order.
