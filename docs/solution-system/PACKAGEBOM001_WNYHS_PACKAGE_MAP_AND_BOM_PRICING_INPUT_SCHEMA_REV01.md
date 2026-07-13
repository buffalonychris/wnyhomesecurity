# PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01

## Metadata

- **Title:** WNYHS Package Map and BOM/Pricing Input Schema
- **Revision:** REV01
- **Status:** Active Governance Draft
- **Owner Area:** Solution System / Package + BOM Governance
- **Task Reference:** T-PACKAGEBOM001
- **Scope:** Docs-only package/BOM/pricing-input governance
- **Last Updated:** 2026-06-11
- **Implementation Status:** This document authorizes no implementation, public pricing, purchasing, installation, public copy, payment, HubSpot, scheduling, or runtime change. It does not authorize application/source files, routes, pages, components, styles, CSS, tokens, Cloudflare/environment changes, hardware purchase orders, customer installation, final quotes, Stripe products, checkout changes, or CRM writes.

---

## 1. Purpose

This document defines WNYHS package structure, BOM input structure, pricing-input fields, WNYHS Core inclusion logic, existing-customer add-on logic, and Vault/custom quote inputs.

This document defines structure only. It does not set final prices, supplier costs, customer-facing package prices, internal floor prices, Stripe products, checkout amounts, or customer quote authorization.

---

## 2. Source Basis

This document is based on:

1. `SOLUTION_CATALOG_RECONCILIATION_REV01`
2. `HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01`
3. `CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01`
4. `OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01`

The source documents remain authoritative for solution status, hardware status, claims boundaries, WNYHS Core rules, and The Vault/custom quote governance.

---

## 3. Package Architecture Rules

1. Packages are bundled customer outcomes.
2. Solutions are sellable customer-recognizable units inside packages.
3. Devices and capabilities do not automatically become public packages.
4. First-time customers include WNYHS Core when needed.
5. Existing WNYHS Core customers are quoted only for add-on hardware, installation, dashboard/configuration work, alerts, automations, tests, and handoff items needed for the new scope.
6. Core is not double-charged.
7. Vault/custom work is quote-only and must stay site-reviewed, compatibility-reviewed, claims-reviewed, and operator-approved.
8. Package concepts in this REV01 are governance candidates, not final public offers.

---

## 4. Initial Package Concepts

### 4.1 Front Door Protection Package

| Field | Governance Value |
|---|---|
| Package ID | PKG-FRONT-DOOR-PROTECTION |
| Package Name | Front Door Protection Package |
| Primary Customer Problem | The customer wants better front-door and package-area awareness without a scattered device/app setup. |
| Included Governed Solutions | Front Door Package Protection; Entry Lighting Automation; Notification & Alert Routing Setup |
| Optional Add-Ons | Smart Lock & Guest Access; Door / Window Left-Open Awareness; Local Camera Property Awareness; Away / Night / Vacation Modes |
| Core Requirement | Core required for first-time WNYHS customers unless operator approves a non-Core exception. |
| First-Time Customer BOM Treatment | Include Core controller, required radio(s), doorbell/camera path, eligible entry-lighting controls, dashboard/configuration, selected alerts, field testing, and customer handoff. |
| Existing-Customer Add-On Treatment | Include only new front-door hardware, lighting hardware if needed, dashboard additions, alert/routine updates, field testing, and handoff. Do not include Core again. |
| Claims Notes | Use front-door awareness, package-area awareness, selected alerts, and supported hardware language. Do not claim theft prevention, crime prevention, universal event capture, or professional alarm service. |
| Custom Escalation Notes | Escalate for PoE doorbell, complex chime/transformer conditions, specialty camera placement, privacy/recording requirements, exterior wiring, or custom dashboard requests. |
| Status | Standard Candidate |

### 4.2 Home Security Starter Package

| Field | Governance Value |
|---|---|
| Package ID | PKG-HOME-SECURITY-STARTER |
| Package Name | Home Security Starter Package |
| Primary Customer Problem | The customer wants a first practical layer of entry, garage, and door/window awareness. |
| Included Governed Solutions | Front Door Package Protection; Garage Door Awareness; Door / Window Left-Open Awareness; Notification & Alert Routing Setup |
| Optional Add-Ons | Entry & Perimeter Awareness; Entry Lighting Automation; Smart Lock & Guest Access; Away / Night / Vacation Modes |
| Core Requirement | Core required for first-time WNYHS customers unless operator approves a non-Core exception. |
| First-Time Customer BOM Treatment | Include Core, required radio(s), front-door hardware, garage status hardware, contact sensors, dashboard setup, selected alerts, field testing, and customer handoff. |
| Existing-Customer Add-On Treatment | Include only new sensors/camera/doorbell/garage hardware, dashboard additions, alert updates, testing, and handoff. |
| Claims Notes | Keep language to awareness, open/closed status, selected alerts, and visibility. Do not claim intrusion prevention, response service, or universal detection. |
| Custom Escalation Notes | Escalate active garage control, detached garage connectivity, unsupported doorbell wiring, or expanded camera coverage. |
| Status | Standard Candidate |

### 4.3 Entry & Access Package

| Field | Governance Value |
|---|---|
| Package ID | PKG-ENTRY-ACCESS |
| Package Name | Entry & Access Package |
| Primary Customer Problem | The customer wants cleaner access for family, guests, cleaners, contractors, or caregivers. |
| Included Governed Solutions | Smart Lock & Guest Access; Entry / Exit Awareness for Older Adult; Notification & Alert Routing Setup |
| Optional Add-Ons | Caregiver / Family Access Control; Entry Lighting Automation; Door / Window Left-Open Awareness; Family Check-In Dashboard |
| Core Requirement | Core required for first-time WNYHS customers unless operator approves a non-Core exception. |
| First-Time Customer BOM Treatment | Include Core, required radio(s), lock hardware, contact/access sensors where needed, access setup, dashboard/configuration, selected alerts, field testing, and customer handoff. |
| Existing-Customer Add-On Treatment | Include only new access hardware, door/contact hardware, dashboard additions, access-code setup, alert updates, testing, and handoff. |
| Claims Notes | Use access management, entry/exit awareness, selected notifications, and customer-code responsibility language. Do not imply medical, emergency, or caregiver replacement functionality. |
| Custom Escalation Notes | Escalate door prep/rekey complexity, unusual lock hardware, caregiver consent issues, multi-household access rules, or custom family dashboards. |
| Status | Standard Candidate |

### 4.4 Basement / Utility Protection Package

| Field | Governance Value |
|---|---|
| Package ID | PKG-BASEMENT-UTILITY-PROTECTION |
| Package Name | Basement / Utility Protection Package |
| Primary Customer Problem | The customer wants earlier awareness of water, temperature, and humidity conditions in basement or utility areas. |
| Included Governed Solutions | Water Leak Alerts; Freeze Risk Awareness; Basement & Utility Room Alerts; Humidity & Moisture Awareness |
| Optional Add-Ons | Sump Area Awareness; Power Outage & Freezer Alerts; Automatic Water Shutoff as custom-only; Notification & Alert Routing Setup |
| Core Requirement | Core required for first-time WNYHS customers unless operator approves a non-Core exception. |
| First-Time Customer BOM Treatment | Include Core, required radio(s), leak sensors, temperature/humidity sensors, mounting/accessories, dashboard/configuration, selected alerts, field testing, and handoff. |
| Existing-Customer Add-On Treatment | Include only new environmental sensors, mounting/accessories, dashboard additions, alert updates, testing, and handoff. |
| Claims Notes | Use earlier awareness and selected-area visibility language. Do not claim water-damage prevention, leak prevention, frozen-pipe prevention, mold prevention, or certain sump behavior. |
| Custom Escalation Notes | Escalate water shutoff, hardwired sump sensing, freezer/outage paths, inaccessible utility areas, or required trade review. |
| Status | Standard Candidate |

### 4.5 Property Watch Package

| Field | Governance Value |
|---|---|
| Package ID | PKG-PROPERTY-WATCH |
| Package Name | Property Watch Package |
| Primary Customer Problem | The customer wants a broader property-status view while away, at night, or between visits. |
| Included Governed Solutions | Entry & Perimeter Awareness; Garage Door Awareness; Away / Night / Vacation Modes; Water Leak Alerts; Notification & Alert Routing Setup |
| Optional Add-Ons | Entry Lighting Automation; Exterior Security Lighting where eligible; Local Camera Property Awareness; Freeze Risk Awareness |
| Core Requirement | Core required for first-time WNYHS customers unless operator approves a non-Core exception. |
| First-Time Customer BOM Treatment | Include Core, required radio(s), entry/perimeter sensors, garage status hardware, water sensors, dashboard/mode configuration, selected alerts, field testing, and handoff. |
| Existing-Customer Add-On Treatment | Include only new sensors, lighting/camera hardware if scoped, dashboard/mode additions, alert updates, testing, and handoff. |
| Claims Notes | Use status, awareness, dashboard, and selected alert language. Do not claim complete property coverage, crime prevention, or certain event capture. |
| Custom Escalation Notes | Escalate cameras, detached structures, driveway/vehicle awareness, exterior wiring, or complex vacation-mode logic. |
| Status | Premium Candidate |

### 4.6 Daily Lighting & Routines Package

| Field | Governance Value |
|---|---|
| Package ID | PKG-DAILY-LIGHTING-ROUTINES |
| Package Name | Daily Lighting & Routines Package |
| Primary Customer Problem | The customer wants everyday lighting and routines to be easier to manage from one local-first setup where supported. |
| Included Governed Solutions | Smarter Everyday Lighting; Scene Button / Wall Control Setup; Away / Night / Vacation Modes; Notification & Alert Routing Setup |
| Optional Add-Ons | Family Routine Lighting Scenes; Smart Plug / Appliance Routine Control for rated plug-in loads; Entry Lighting Automation; Night Path Lighting |
| Core Requirement | Core required for first-time WNYHS customers unless operator approves a non-Core exception. |
| First-Time Customer BOM Treatment | Include Core, required radio(s), approved lighting controls, scene controls, rated smart plugs where scoped, dashboard/routine configuration, testing, and handoff. |
| Existing-Customer Add-On Treatment | Include only new controls/devices, dashboard/routine additions, configuration labor, testing, and handoff. |
| Claims Notes | Use convenience, routines, scene controls, and eligible circuit language. Do not claim energy savings, universal circuit compatibility, or safety outcomes. |
| Custom Escalation Notes | Escalate no-neutral circuits, exterior circuits, specialty fixtures, line-voltage uncertainty, or complex automations. |
| Status | Standard Candidate |

### 4.7 Night Safety & Comfort Package

| Field | Governance Value |
|---|---|
| Package ID | PKG-NIGHT-SAFETY-COMFORT |
| Package Name | Night Safety & Comfort Package |
| Primary Customer Problem | The customer wants easier night movement and practical comfort awareness without a medical or emergency-service promise. |
| Included Governed Solutions | Night Path Lighting; Comfort & Temperature Awareness for Older Adult; Notification & Alert Routing Setup |
| Optional Add-Ons | Help Button / Assistance Trigger; Entry / Exit Awareness for Older Adult; Scene Button / Wall Control Setup |
| Core Requirement | Core required for first-time WNYHS customers unless operator approves a non-Core exception. |
| First-Time Customer BOM Treatment | Include Core, required radio(s), eligible lighting controls, temperature/humidity sensors, fixed button if scoped, dashboard/configuration, selected alerts, testing, and handoff. |
| Existing-Customer Add-On Treatment | Include only new lighting/sensor/button hardware, dashboard additions, routine/alert updates, testing, and handoff. |
| Claims Notes | Use visibility, comfort awareness, fixed in-home assistance trigger, and selected notifications. Do not imply medical service, urgent-service workflow, incident detection, or caregiver replacement. |
| Custom Escalation Notes | Escalate room presence, wall tablets, family dashboards, multi-recipient alert policies, or support-heavy routines. |
| Status | Standard Candidate |

### 4.8 Aging-in-Place Awareness Package

| Field | Governance Value |
|---|---|
| Package ID | PKG-AGING-IN-PLACE-AWARENESS |
| Package Name | Aging-in-Place Awareness Package |
| Primary Customer Problem | The customer wants non-medical household awareness for an older adult, with consent-aware family visibility. |
| Included Governed Solutions | Entry / Exit Awareness for Older Adult; Help Button / Assistance Trigger; Comfort & Temperature Awareness for Older Adult; Family Check-In Dashboard |
| Optional Add-Ons | Smart Lock & Guest Access; Caregiver / Family Access Control; Night Path Lighting; Non-Medical Routine Awareness |
| Core Requirement | Core required for first-time WNYHS customers unless operator approves a non-Core exception. |
| First-Time Customer BOM Treatment | Include Core, required radio(s), contact/access sensors, fixed button, comfort sensors, dashboard/configuration, selected family notifications, disclosures, testing, and handoff. |
| Existing-Customer Add-On Treatment | Include only new awareness/access/button/dashboard items, configuration updates, disclosures, testing, and handoff. |
| Claims Notes | Must remain non-medical and consent-aware. Do not claim medical service, urgent-service workflow, incident detection, caregiver replacement, or certain elder safety. |
| Custom Escalation Notes | Escalate routine/presence logic, wall tablets, multi-family access rules, privacy concerns, or caregiver workflow customization. |
| Status | Premium Candidate |

### 4.9 Garage / Workshop Awareness Package

| Field | Governance Value |
|---|---|
| Package ID | PKG-GARAGE-WORKSHOP-AWARENESS |
| Package Name | Garage / Workshop Awareness Package |
| Primary Customer Problem | The customer wants awareness and easier lighting control for garage, detached garage, or workshop spaces. |
| Included Governed Solutions | Garage Door Awareness; Garage / Workshop Lighting Automation; Detached Garage Freeze Awareness |
| Optional Add-Ons | Door / Window Left-Open Awareness; Entry & Perimeter Awareness; Smart Plug / Appliance Routine Control for rated plug-in loads; Local Camera Property Awareness |
| Core Requirement | Core required for first-time WNYHS customers unless operator approves a non-Core exception. Detached structures may require custom network/radio review. |
| First-Time Customer BOM Treatment | Include Core, required radio(s), garage status hardware, lighting controls where eligible, temperature sensors where scoped, mounting/accessories, dashboard/configuration, testing, and handoff. |
| Existing-Customer Add-On Treatment | Include only new garage/workshop hardware, dashboard additions, routine/alert updates, connectivity testing, and handoff. |
| Claims Notes | Use status, awareness, lighting convenience, and selected-area temperature language. Do not claim certain closure, freeze prevention, tool/equipment protection, or universal opener compatibility. |
| Custom Escalation Notes | Escalate active garage control, detached structures, weak connectivity, exterior wiring, workshop equipment control, or hardwired/current-monitor concepts. |
| Status | Needs Review |

### 4.10 Local Property Camera Package

| Field | Governance Value |
|---|---|
| Package ID | PKG-LOCAL-PROPERTY-CAMERA |
| Package Name | Local Property Camera Package |
| Primary Customer Problem | The customer wants local-first property camera visibility where site conditions, privacy, wiring, and support scope are reviewed. |
| Included Governed Solutions | Front Door Package Protection; Local Camera Property Awareness; Notification & Alert Routing Setup |
| Optional Add-Ons | Multi-Camera Local NVR Package; Entry & Perimeter Awareness; Exterior Security Lighting where eligible; Whole-Home Status Dashboard |
| Core Requirement | Core required for first-time WNYHS customers unless operator approves a non-Core exception. NVR/camera-heavy scope may require custom Core or network assumptions. |
| First-Time Customer BOM Treatment | Include Core, required radio(s) if sensor or lighting scope is included, camera hardware, power/network assumptions, storage/retention inputs where scoped, dashboard/configuration, disclosures, testing, and handoff. |
| Existing-Customer Add-On Treatment | Include only camera/NVR/network/mounting hardware, dashboard additions, privacy/retention configuration, testing, and handoff. |
| Claims Notes | Use property awareness, supported camera visibility, privacy/retention disclosures, and site-reviewed coverage language. Do not claim complete coverage, universal detection, or crime prevention. |
| Custom Escalation Notes | Escalate all multi-camera NVR, PoE cabling, Frigate/local analytics, retention requirements, advanced dashboards, or unusual privacy/field-of-view constraints. |
| Status | Custom Candidate |

---

## 5. WNYHS Core Pricing/Input Rule

### 5.1 First-Time Customer Core Inputs

First-time customer package inputs must identify whether Core is required and, when required, include:

- Core controller
- required Z-Wave radio
- any additional conditional radio approved for the package scope
- dashboard setup
- supported integration setup
- initial notification/routing configuration
- customer handoff/training
- future expansion readiness
- Core disclosures and assumptions

### 5.2 Existing-Customer Add-On Inputs

Existing customers who already have Core must not be charged for Core again. Add-on inputs should include only:

- new hardware
- required additional radio only if the add-on requires one and the existing Core lacks it
- installation work
- dashboard additions
- alert/routine/configuration updates
- integration testing
- customer handoff/training for the new scope

### 5.3 Vault/Custom Core Handling

Vault/custom quote inputs must identify whether the customer already has Core.

If the customer does not have Core, the quote must include Core unless the operator explicitly approves a pass-through/non-Core service path. That exception must be documented in operator notes and may not become a default public package rule.

### 5.4 No Double-Charge Rule

Core is installed and priced once per customer relationship unless a later replacement, upgrade, site split, second property, or materially different controller requirement is separately approved by the operator.

---

## 6. BOM Input Schema

Every future package/BOM worksheet should include these fields.

| Field | Required Input |
|---|---|
| Package ID | Governed package identifier. |
| Solution IDs | Governed solution names/IDs included in the package. |
| Customer Type | First-time WNYHS customer; existing Core customer; Vault/custom; pass-through exception if approved. |
| Required Core Hardware | Core controller and baseline Core components if required. |
| Required Radios | Z-Wave radio, plus conditional Zigbee/Thread/Matter/Wi-Fi/other radio only when approved for scope. |
| Required Devices | Devices required for the base package scope. |
| Optional Devices | Add-ons and selectable extras that do not change the base package definition. |
| Mounting/Accessories | Mounts, brackets, enclosures, plates, adapters, batteries, labels, fasteners, and similar materials. |
| Cable/Power/Network Assumptions | Ethernet, Wi-Fi, PoE, outlet, transformer, neutral, exterior-rated, UPS, or customer-network assumptions. |
| Battery/Backup Assumptions | Battery devices, replacement expectations, UPS/back-up path, outage limitations, and unsupported conditions. |
| Dashboard/Configuration Items | Dashboard cards/views, integrations, automations, scenes, modes, access codes, camera views, and labels. |
| Notification/Routing Items | Recipients, quiet hours, alert categories, escalation rules inside the household, and test messages. |
| Customer Handoff/Training | Walkthrough, account/app handoff, local dashboard overview, code ownership, and support expectations. |
| Required Disclosures | Cloud/app/subscription, privacy/recording, lock/access, non-medical, environmental, camera, water shutoff, outdoor/electrical, or custom-scope disclosures. |
| Field-Test Dependencies | Any hardware, placement, radio, sensor, camera, or automation item requiring field validation before standard use. |
| Custom Quote Flags | Site review, compatibility review, trade boundary, manufacturer dependency, premium/custom support, and operator approval flags. |
| Operator Notes | Internal notes, assumptions, exclusions, open questions, and approval record. |

---

## 7. Pricing Input Schema

Pricing worksheets may use these fields to collect inputs. REV01 does not set final prices.

| Field | Required Input / REV01 Boundary |
|---|---|
| Hardware Cost Input | Internal current-cost entry by approved source at time of quote preparation. No supplier costs are set in REV01. |
| Accessories/Materials Input | Mounting, cabling, batteries, adapters, plates, enclosures, and consumables. No costs are set in REV01. |
| Install Labor Input | Internal planning input for installation effort. Not public pricing. |
| Configuration Labor Input | Dashboard, integration, notification/routing, automation, testing, and handoff planning input. |
| Travel/Visit Input If Needed | Visit planning, return-trip risk, distance/time assumptions, and scheduling constraints when applicable. |
| Margin Input | Operator-entered margin target or margin range. No margin is set in REV01. |
| Installer/Per-Diem Planning Input | 1099 or installer-day planning assumption where separately authorized by operator. |
| Warranty/Support Allowance | Internal allowance for support, warranty risk, replacement risk, and follow-up. |
| Custom Contingency Allowance | Custom/Vault contingency for unknown site, equipment, wiring, manufacturer, weather, or support complexity. |
| Sales Tax/Tax-Handling Placeholder If Applicable | Placeholder for future tax treatment. REV01 does not set tax rules. |
| Final Public Price | NOT SET IN REV01. |
| Internal Floor Price | NOT SET IN REV01. |
| Existing-Customer Add-On Price | NOT SET IN REV01. |

---

## 8. Install / Labor Input Rules

1. Do not default to generic hourly burdened labor unless separately authorized.
2. 1099 installer planning may use per-diem logic.
3. Normal installer day heuristic: $200-$225 per installer day.
4. A full-day package with two installers should model at least $400 install expense, with $450 optional when margin supports it.
5. SLAM/simple installs may use per-stop or per-solution planning, but actual installer compensation is discretionary.
6. These are internal planning inputs only, not public prices, not final customer pricing, and not final compensation policy.
7. Package pricing work must separately review installation assumptions before public pricing, quote templates, Stripe products, or checkout flows are created.

---

## 9. Vault / Custom Quote Input Rules

The following capabilities are quote-only and require custom quote flags:

- hot tub control/awareness
- fire pit control/outdoor living automation
- pool equipment awareness/control
- gate control
- irrigation control
- detached structure controls
- specialty lighting
- workshops
- custom dashboards
- advanced Node-RED automations

Every Vault/custom quote must require:

1. Site review.
2. Equipment compatibility review.
3. Safety/trade boundary review.
4. Manufacturer dependency review.
5. Cloud/app/subscription disclosure if needed.
6. Claims review.
7. Custom quote flag.
8. Operator approval.

Vault/custom inputs must not become public fixed-price package rules without a later governance revision and operator approval.

---

## 10. Explicit Non-Pricing Statement

REV01 creates package/BOM/pricing input structure only.

REV01 sets:

- no final package prices
- no public pricing
- no Stripe products
- no checkout changes
- no customer quote authorization by itself
- no supplier costs
- no invented hardware prices
- no hardware purchasing authorization
- no customer installation authorization

---

## 11. Required Follow-Up

Before any package, BOM, price, quote, page, or payment work proceeds, WNYHS needs:

1. Final first-wave package selection.
2. Supplier cost entry.
3. Installation assumption review.
4. Quote template creation.
5. HubSpot/service item mapping.
6. Public package page task.
7. Stripe/payment task only after final pricing approval.
8. Vault/custom quote worksheet or operator catalog task.

Each follow-up requires its own bounded task and protected-system review where applicable.

---

## 12. Implementation Hold

This document does not authorize:

- app/source changes
- public pages
- route changes
- component changes
- style/CSS/token changes
- package card changes
- public copy deployment
- quote flow changes
- runtime behavior
- HubSpot behavior
- Stripe/payment behavior
- scheduling behavior
- Cloudflare/environment changes
- public pricing
- final internal pricing
- supplier-cost publication
- hardware purchasing
- customer installation
- site version bump

Each future implementation, public-copy, pricing, payment, HubSpot, scheduling, purchasing, installation, or runtime change must receive its own bounded task and work order.

## T-SMARTRESEARCH001 Addendum - Hardware Eligibility From Transcript / CATALOG004 Evidence

Transcript-derived research and CATALOG004 master-parts records may inform future package and BOM worksheets, but they do not make a device BOM-eligible by themselves. PACKAGEBOM001 continues to defer hardware authority to HARDWARE001.

BOM eligibility rules:

1. Approved Standard HARDWARE001 rows may be considered for standard package BOM input only within their documented scope and after site compatibility review.
2. Conditional HARDWARE001 rows may appear only as conditional BOM candidates with explicit dependencies, disclosures, and validation tasks.
3. Pilot HARDWARE001 rows may appear only in field-test or controlled pilot BOM notes. They must not be used for standard package pricing or public package copy.
4. Premium / Custom rows may appear only in custom-quote BOM notes with site review and operator approval.
5. Research-Only and Excluded rows are not BOM-eligible for standard package worksheets.
6. Transcript-only, web-research-only, or import-only product claims must include missing-evidence notes before any package, quote, installer, or purchasing workflow uses them.

CATALOG004 doorbell candidate treatment:

| Candidate | BOM-consideration status | Required BOM notes |
| --- | --- | --- |
| Reolink Video Doorbell PoE D340P | Conditional candidate | PoE path, chime workflow, storage path, event exposure, local-only/restart validation. |
| Reolink Video Doorbell WiFi D340W | Conditional exact-model candidate | Transformer/chime compatibility, Wi-Fi quality threshold, event exposure, restart recovery. |
| Reolink Battery Video Doorbell D340B | Pilot only | Hub/NVR bridge, battery maintenance, wake/sleep behavior, notification timing. |
| Ubiquiti G4 Doorbell Pro PoE Kit | Premium / Custom only | UniFi Protect controller/NVR, firmware policy, event exposure, support burden. |
| Aqara Doorbell Camera G400 Wired DB-C03E | Pilot only | Exact HA path, ecosystem dependency, stream/event behavior, local-vs-cloud proof. |
