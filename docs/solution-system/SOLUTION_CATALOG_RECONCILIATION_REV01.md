# SOLUTION_CATALOG_RECONCILIATION_REV01

## Metadata

- **Title:** WNYHS Solution Catalog Reconciliation Governance
- **Revision:** REV01
- **Status:** Active Governance Draft
- **Owner Area:** Solution System / Catalog Governance
- **Task Reference:** T-CATALOG001
- **Scope:** Docs-only catalog reconciliation
- **Last Updated:** 2026-06-11
- **Implementation Status:** No application implementation authorized by this document alone.

---

## 1. Purpose

This document reconciles the first three WNY Home Security solution research runs into one governed working catalog.

The source research areas are:

1. Home Safety / Environmental Safety
2. Home Security / Entry / Garage / Access
3. Home Lighting / Home Automation / Aging-in-Place

This document is not:

- a pricing document
- a public marketing-copy document
- a final hardware approval registry
- an implementation ticket
- a page-build specification
- a Stripe/payment specification
- a HubSpot workflow specification
- a scheduling/runtime specification

This document does not authorize implementation. Future implementation requires bounded Master Task Register tasks and separate work orders.

---

## 2. Source Basis

This reconciliation is based on three completed research outputs:

1. **Home Safety / Environmental Safety research** — environmental risk, water awareness, freeze awareness, sump awareness, outage/freezer boundaries, water shutoff boundaries, smoke/CO boundaries.
2. **Home Security / Entry / Garage / Access research** — front door/package awareness, entry/perimeter awareness, garage door awareness, locks, access, cameras, driveway, detached building boundaries.
3. **Home Lighting / Home Automation / Aging-in-Place research** — lighting, daily routines, dashboard unification, alert routing, non-medical aging awareness, help triggers, comfort awareness, presence boundaries.

This document preserves these governing WNYHS rules:

- Solutions are homeowner-recognizable outcomes, not hardware SKUs.
- Solutions roll up into packages.
- Packages roll up into categories.
- WNYHS Core is installed once per customer.
- First-time WNYHS customers receive/purchase WNYHS Core with their first solution or package.
- Existing WNYHS customers do not repurchase WNYHS Core for future add-ons.
- Existing-customer add-ons include only new hardware, install work, dashboard additions, alerts, automations, and configuration.
- Local-first supportability is preferred.
- Unsupported devices may only be treated as custom/pass-through with disclosure.
- Claims must remain awareness/control/convenience oriented, not guarantee-based.

---

## 3. Unified Technical Direction

The reconciled first-wave WNYHS Core standard direction is:

- **Home Assistant Green** as the first-wave controller.
- **Home Assistant Connect ZWA-2** as the default first-wave Z-Wave radio.
- **Z-Wave-first standard hardware fabric** for first-wave sensors, locks, lighting controls, remotes, and environmental devices.
- Selective Zigbee, Thread, Matter, Wi-Fi, ESPHome, HomeKit-exposed, cloud, or proprietary integrations only when specifically justified and disclosed.

ZBT/Zigbee/Thread should be secondary/conditional until separately standardized.

This document does not approve final hardware purchasing by itself. Final hardware approval belongs in a future hardware registry.

---

## 4. Governed Categories

The governed public catalog categories are:

1. Home Security
2. Elder Care / Aging-in-Place
3. Home Safety / Environmental Safety
4. Home Automation
5. Home Lighting

Every solution must have one primary category. A solution may have secondary categories, but it should generally not appear in more than three total categories.

---

## 5. Solution Status Definitions

- **Public:** Suitable for public-facing solution catalog once copy, assets, BOMs, and claims are approved.
- **Public / Core:** Foundational public Core/control-plane offer.
- **Public / Add-On:** Can stand alone in some cases but often attaches to another solution/package.
- **Add-On:** Usually attaches to existing Core or another base solution.
- **Add-On / Conditional:** Valid but requires compatibility review, disclosure, or dependency check.
- **Premium:** Valid but broader in scope or complexity; not a first-wave flat public item.
- **Premium / Pilot:** Potentially valuable but needs field validation.
- **Premium / Custom:** Valid but site-reviewed and not flat standard.
- **Custom-Only:** Quote/site-assessment only.
- **Pilot / Custom:** Test or quote only; not public standard.
- **Research-Only:** Do not sell as public standard yet.
- **Excluded:** Do not standardize or market as a WNYHS catalog offer.

---

## 6. Reconciled Master Solution List

### 6.1 Public / First-Wave Solutions

| # | Solution | Primary Category | Secondary Categories | Status | Reconciliation Decision |
|---:|---|---|---|---|---|
| 1 | WNYHS Core Dashboard Setup | Home Automation | Home Security, Home Safety | Public / Core | Foundational control plane. Installed once per customer. |
| 2 | Cross-Brand Smart Home Unification | Home Automation | Home Lighting | Public | Differentiator against app sprawl. |
| 3 | Notification & Alert Routing Setup | Home Automation | Home Security, Elder Care | Public | Foundational alert, recipient, and quiet-hours logic. |
| 4 | Away / Night / Vacation Modes | Home Automation | Home Lighting, Home Security | Public | Parent solution for vacation lighting and away-mode behavior. |
| 5 | Front Door Package Protection | Home Security | Home Lighting, Home Automation | Public | Doorbell, front-door, and package-awareness offer. |
| 6 | Entry & Perimeter Awareness | Home Security | Home Lighting | Public | Awareness only; not alarm monitoring. |
| 7 | Garage Door Awareness | Home Security | Home Automation | Public | Status-first only; active control remains custom. |
| 8 | Smart Lock & Guest Access | Home Security | Elder Care, Home Automation | Public / Add-On | Standard access solution; caregiver use is secondary. |
| 9 | Door / Window Left-Open Awareness | Home Security | Home Safety, Home Automation | Public | Open/closed awareness and reminders. |
| 10 | Water Leak Alerts | Home Safety / Environmental Safety | Home Automation | Public | Standalone environmental awareness solution. |
| 11 | Freeze Risk Awareness | Home Safety / Environmental Safety | Home Automation, Elder Care | Public | Awareness only; no freeze-prevention claim. |
| 12 | Basement & Utility Room Alerts | Home Safety / Environmental Safety | Home Automation | Public | Combined leak, temperature, and humidity utility-room visibility. |
| 13 | Smarter Everyday Lighting | Home Lighting | Home Automation | Public | Everyday lighting routines and controls. |
| 14 | Night Path Lighting | Home Lighting | Elder Care, Home Safety | Public | Absorbs stair, hall, bathroom route-lighting use cases. |
| 15 | Entry Lighting Automation | Home Lighting | Home Security, Home Automation | Public | Strong package fit with front-door and entry security. |
| 16 | Exterior Security Lighting | Home Lighting | Home Security | Public / Custom Split | Public only for eligible existing circuits; custom for rewiring/new fixtures. |
| 17 | Garage / Workshop Lighting Automation | Home Lighting | Home Security, Home Automation | Public | Lighting side of garage/workshop package. |
| 18 | Entry / Exit Awareness for Older Adult | Elder Care / Aging-in-Place | Home Security, Home Automation | Public | Non-medical, non-camera awareness. |
| 19 | Help Button / Assistance Trigger | Elder Care / Aging-in-Place | Home Automation | Public | Fixed in-home button only; not emergency or medical response. |

### 6.2 Add-On Solutions

| # | Solution | Primary Category | Secondary Categories | Status | Best Attached To |
|---:|---|---|---|---|---|
| 20 | Humidity & Moisture Awareness | Home Safety / Environmental Safety | Home Automation | Add-On | Basement & Utility Room Alerts |
| 21 | Sump Area Awareness | Home Safety / Environmental Safety | Home Automation | Add-On | Water Leak Alerts / Basement & Utility Room Alerts |
| 22 | Detached Garage Freeze Awareness | Home Safety / Environmental Safety | Home Security | Add-On | Freeze Risk Awareness / Detached Garage Awareness |
| 23 | Scene Button / Wall Control Setup | Home Automation | Home Lighting, Elder Care | Add-On | Lighting, modes, help-button workflows |
| 24 | Smart Plug / Appliance Routine Control | Home Automation | Home Lighting | Add-On | Everyday Lighting / Vacation Modes |
| 25 | Arrival / Departure Automations | Home Automation | Home Lighting, Home Security | Add-On | Entry Lighting / Away Modes |
| 26 | Smart Thermostat & Vacation Setback | Home Automation | Home Safety | Add-On / Conditional | Away / Vacation Modes |
| 27 | Comfort & Temperature Awareness for Older Adult | Elder Care / Aging-in-Place | Home Safety, Home Automation | Add-On | Aging-in-place / Freeze Risk |
| 28 | Family Check-In Dashboard | Elder Care / Aging-in-Place | Home Automation | Add-On / Premium | Routine Awareness / Entry-Exit Awareness |
| 29 | Caregiver / Family Access Control | Elder Care / Aging-in-Place | Home Security, Home Automation | Add-On / Conditional | Smart Lock & Guest Access |
| 30 | Outdoor Patio & Living Area Scenes | Home Lighting | Home Automation | Add-On | Smarter Everyday Lighting |
| 31 | Family Routine Lighting Scenes | Home Lighting | Home Automation | Add-On | Everyday Lighting / Scene Buttons |

### 6.3 Premium / Pilot / Custom Solutions

| # | Solution | Primary Category | Secondary Categories | Status | Reason |
|---:|---|---|---|---|---|
| 32 | Power Outage & Freezer Alerts | Home Safety / Environmental Safety | Home Automation | Premium / Pilot | Depends on UPS, network backup, and freezer sensor validation. |
| 33 | Automatic Water Shutoff | Home Safety / Environmental Safety | Home Automation | Custom-Only | Plumbing, valve, access, and site conditions vary. |
| 34 | Advanced Sump Pump Awareness | Home Safety / Environmental Safety | Home Automation | Pilot / Custom | Plug-in pump only; hardwired/current monitoring not standard. |
| 35 | Driveway & Vehicle Arrival Awareness | Home Security | Home Lighting | Add-On / Premium | Snow, headlights, false alerts, and geometry vary. |
| 36 | Detached Garage / Shed Awareness | Home Security | Home Safety, Home Lighting | Premium / Custom | Connectivity and outbuilding conditions vary. |
| 37 | Local Camera Property Awareness | Home Security | Home Automation | Premium / Custom | Privacy, retention, wiring, storage, and coverage expectations vary. |
| 38 | Multi-Camera Local NVR Package | Home Security | Home Automation | Premium / Custom | Site-specific camera count, PoE, storage, retention, and support burden. |
| 39 | Room Presence Awareness | Elder Care / Aging-in-Place | Home Automation | Premium / Pilot | mmWave tuning and support burden. |
| 40 | Non-Medical Routine Awareness | Elder Care / Aging-in-Place | Home Automation | Premium | Privacy, consent, quiet hours, and multi-person homes require controls. |
| 41 | Whole-Home Status Dashboard | Home Automation | Elder Care | Premium | Scope expands quickly, especially with wall tablets. |
| 42 | Room Comfort Balance | Home Automation | Elder Care, Home Safety | Premium / Custom | HVAC/site complexity and overclaim risk. |
| 43 | Permanent Exterior Lighting | Home Lighting | Home Automation | Custom-Only | Roofline, power injection, vendor ecosystem, ladder work. |
| 44 | Advanced Exterior / Landscape Lighting Control | Home Lighting | Home Security | Custom-Only | Exterior-rated controls, wiring, and transformer differences. |

### 6.4 Research-Only / Excluded Items

| # | Item | Status | Reason |
|---:|---|---|---|
| 45 | Remote Smoke / CO Secondary Awareness | Research-Only | Life-safety, code, and liability risk. |
| 46 | Standard Smoke / CO Productization | Excluded for standard catalog | WNYHS is not a life-safety monitoring company. |
| 47 | Cloud-required Camera Ecosystems as Standard | Excluded | Conflicts with local-first/default no-subscription posture. |
| 48 | Ring / Nest as Standard WNYHS Camera Stack | Excluded | Subscription/cloud-first ecosystem; custom/pass-through only if disclosed. |
| 49 | myQ-Dependent Garage Control | Excluded as standard | Third-party interoperability instability. |
| 50 | Professional Monitoring / Police Dispatch Claims | Excluded | Conflicts with WNYHS model. |
| 51 | Medical Monitoring / Fall Detection | Excluded | WNYHS is non-medical awareness only. |
| 52 | Stove / Large Appliance Left-On Awareness | Research-Only | Load, code, fire, and liability risk. |
| 53 | Hardwired Current-Monitor Retrofits | Excluded for now | Electrical/install variance too high. |
| 54 | Multiprotocol Single-Radio Zigbee+Thread Default | Excluded as standard | Not stable enough as default path. |

---

## 7. Duplicate / Overlap Cleanup

| Original Items | Final Reconciled Treatment |
|---|---|
| Security Lighting Response + Exterior Security Lighting | Use Exterior Security Lighting. |
| Vacation Lighting / Occupancy Simulation + Vacation / Away Mode Awareness | Use Away / Night / Vacation Modes as parent solution; lighting is one feature path. |
| Stair / Hall / Bathroom Lighting + Bathroom / Hallway Safety Awareness | Use Night Path Lighting as parent solution. |
| Family / Caregiver Entry Awareness + Caregiver / Family Access Control | Use Caregiver / Family Access Control. |
| Detached Garage Freeze Awareness + Detached Garage / Shed Awareness | Keep both, but split ownership: Detached Garage / Shed Awareness is security; Detached Garage Freeze Awareness is safety add-on. |
| Local Camera Property Awareness + Multi-Camera NVR Package | Keep separate: Local Camera Awareness is premium solution; NVR package is premium/custom implementation path. |
| Smart Lock & Guest Access + Caregiver Access | Keep Smart Lock & Guest Access as hardware/security solution; caregiver access is use-case add-on. |

---

## 8. Package Compatibility Map

The following are non-final package-building concepts. They are not final public packages and do not include final pricing.

| Package Concept | Included Solutions | Notes |
|---|---|---|
| Front Door Protection Package | Front Door Package Protection + Entry Lighting Automation + Notification Routing | Strongest public entry offer. |
| Home Security Starter | Front Door Package Protection + Garage Door Awareness + Door/Window Left-Open Awareness | Good starter security bundle. |
| Entry & Access Package | Smart Lock & Guest Access + Entry/Exit Awareness + Notification Routing | Good for family, contractors, cleaners, dog walkers, and caregivers. |
| Basement / Utility Protection Package | Water Leak Alerts + Freeze Risk Awareness + Basement & Utility Room Alerts + Humidity Add-On | Strong WNY safety offer. |
| Property Watch Package | Entry & Perimeter Awareness + Garage Door Awareness + Away/Night/Vacation Modes + Water Leak Alerts | Broad but understandable. |
| Daily Lighting & Routines Package | Smarter Everyday Lighting + Scene Buttons + Away/Night/Vacation Modes + Notification Routing | Home Automation / Lighting package. |
| Night Safety & Comfort Package | Night Path Lighting + stair/hall/bathroom route setup + optional Help Button | Elder-care crossover. |
| Aging-in-Place Awareness Package | Entry/Exit Awareness + Help Button + Comfort Awareness + Family Check-In Dashboard | Must remain non-medical. |
| Garage / Workshop Awareness Package | Garage Door Awareness + Garage/Workshop Lighting + Detached Garage Freeze Add-On | Strong WNY detached-garage use case. |
| Local Property Camera Package | Front Door Package Protection + Local Camera Property Awareness + optional NVR | Premium/custom only. |

---

## 9. Hardware Approval Summary

Final approval belongs in a future hardware registry task. The tables below summarize current reconciliation status only.

### 9.1 Approved Standard Hardware Candidates

| Hardware | Role | Standard Use |
|---|---|---|
| Home Assistant Green | WNYHS Core controller | Default controller |
| Home Assistant Connect ZWA-2 | Z-Wave radio | Default first-wave radio |
| Zooz ZSE42 | Water leak sensor | Water Leak Alerts |
| Zooz ZSE44 | Temperature/humidity sensor | Freeze, humidity, comfort |
| Zooz ZEN77 | Dimmer | Lighting control |
| Zooz ZEN71 | On/off switch | Lighting/load control |
| Zooz ZEN32 | Scene controller | Wall scene controls |
| Zooz ZEN37 | Wall remote / fixed help button | Scene control / help trigger |
| Zooz ZEN04 | Smart plug | Lamps/rated plug loads |
| Zooz ZSE41 | Contact sensor | Entry/exit, doors/windows |
| Reolink Video Doorbell WiFi | Doorbell camera | Front Door Package Protection |
| Reolink CX410 | Exterior camera | Entry/perimeter awareness |
| Kwikset Home Connect 620 | Smart lock | Smart Lock & Guest Access |

### 9.2 Conditional / Pilot Hardware Candidates

| Hardware | Role | Constraint |
|---|---|---|
| Home Assistant Connect ZBT-2 | Zigbee/Thread | Secondary only; not default. |
| Aqara Door/Window Sensor P2 | Contact sensor | Matter/Thread field test. |
| Aqara FP2 | Presence sensor | mmWave tuning/privacy burden. |
| Aqara Motion P1 | Motion sensor | Needs HA/Zigbee field test. |
| Aqara Wireless Mini Switch | Button | Needs field test. |
| Apollo MSR-2 | ESPHome presence/multisensor | Pilot only. |
| Zooz ZSE70 | Outdoor motion | Winter placement test required. |
| Shelly Flood | Leak/temp alternative | Conditional Wi-Fi alternative. |
| Shelly 1PM Gen4 | Relay/control | Custom/electrical review. |
| Yale Assure Lock 2 Z-Wave | Smart lock alternate | Conditional/pilot. |
| Aqara U100 | Smart lock exception | Apple/Aqara-specific. |
| Reolink Doorbell PoE | Doorbell variant | Premium where cabling exists. |
| Reolink RLC-810A | 4K PoE camera | Conditional. |
| Lutron Caséta | Premium lighting path | Conditional/premium. |
| ecobee thermostat | Thermostat | Conditional/cloud disclosure. |
| Google Nest thermostat | Thermostat | Custom/cloud setup burden. |

### 9.3 Premium / Custom / Research Hardware Candidates

| Hardware | Role | Status |
|---|---|---|
| Reolink RLN8-410 | NVR | Premium/custom. |
| Frigate stack | Local analytics/NVR | Custom-only. |
| Zooz ZEN15 | Plug-in sump/power monitor | Pilot/custom. |
| Zooz ZAC36 Titan | Water shutoff | Custom-only. |
| Zooz ZEN55 | Smoke/CO secondary bridge | Research-only. |
| Govee H5075 | Freezer/temp pilot | Pilot. |
| DS18B20 + ESPHome | Probe temp sensing | Pilot/custom. |
| Flic Hub Mini / LR | Button ecosystem | Pilot. |
| Permanent exterior lighting ecosystems | Outdoor lighting | Custom-only. |

---

## 10. BOM / Pricing Gaps

This document does not set final prices. The following gaps must be resolved by later bounded tasks.

| Gap | Affected Solutions | Needed Action |
|---|---|---|
| Final current supplier pricing | All | Pull current prices during BOM finalization. |
| Core baseline kit | All | Lock Home Assistant Green + ZWA-2 as baseline or document exceptions. |
| ZBT-2 inclusion rule | Zigbee/Thread devices | Define when secondary radio is included. |
| Contact sensor standard | Door/window, entry/exit, garage | Decide Zooz ZSE41 vs Aqara P2 vs mixed. |
| Garage status sensor SKU | Garage Door Awareness | Field test and select standard. |
| Garage control policy | Garage control custom path | Create opener compatibility and safety SOP. |
| Reolink doorbell variant | Front Door Package Protection | Confirm exact SKU/package-detection variant. |
| Camera privacy/retention model | Camera packages | Create disclosure and retention options. |
| No-neutral lighting path | Older homes | Field test / research no-neutral standard. |
| Outdoor motion winter reliability | Exterior lighting / driveway | Field test ZSE70 and camera-zone behavior. |
| Freezer sensor standard | Power/Freezer Alerts | Test Govee BLE vs ESPHome probe. |
| UPS shortlist | Outage packages | Research/field test NUT-supported UPS. |
| Sump pump ZEN15 viability | Sump Area Awareness | Field test plug-in pump monitoring. |
| Help button standard | Elder Care | Test ZEN37 vs Aqara/Flic paths. |
| mmWave presence standard | Routine/presence awareness | Pilot FP2 vs Apollo MSR-2. |
| Thermostat path | Vacation Setback / Comfort | Create compatibility matrix. |
| Wall tablet dashboard | Whole-Home Dashboard | Select device/mount/power/kiosk SOP. |

---

## 11. Field-Test Backlog Summary

Field testing should be managed by a future FIELDTEST governance task.

### Priority 1 — Must Resolve Before Standard Catalog Pricing

| Field Test | Why |
|---|---|
| Zooz ZSE41 vs Aqara P2 contact sensor | Determines door/window/entry standard. |
| Garage status sensor and opener review | Needed for Garage Door Awareness. |
| Reolink Video Doorbell WiFi variant | Needed for package-awareness claims. |
| ZEN37 as fixed help button | Needed for Elder Care public offer. |
| Zooz ZSE70 outdoor motion in WNY winter | Needed for exterior/security lighting. |
| No-neutral lighting option | Important for older WNY homes. |
| ZSE42/ZSE44 environmental placement | Needed for sensor placement SOP. |
| ZEN15 plug-in sump monitoring | Needed before advanced sump offer. |
| UPS + NUT outage detection | Needed for Power Outage / Freezer Alerts. |
| Govee H5075 vs ESPHome probe | Needed for freezer temperature standard. |

### Priority 2 — Pilot Before Premium Catalog

| Field Test | Why |
|---|---|
| Aqara FP2 room presence | Useful but tuning-heavy. |
| Apollo MSR-2 | Strong HA-native path; needs support validation. |
| Reolink NVR + HA dashboard | Premium camera/NVR path. |
| Frigate local analytics | Custom-only, high support burden. |
| Wall tablet dashboard | Needs power/kiosk/support SOP. |
| ecobee / Nest thermostat paths | Cloud/HVAC compatibility boundaries. |

---

## 12. SOP / Disclosure Document Queue

These documents are recommended follow-up governance tasks. They are not created by this task.

| Proposed Doc ID | Document | Purpose |
|---|---|---|
| CORE001 | WNYHS Core Hardware & Radio Standard | Lock Green + ZWA-2 baseline and exceptions. |
| CATALOG001 | Solution Status & Category Ownership Map | Govern public/add-on/premium/custom/research statuses. |
| HARDWARE001 | Approved Hardware Registry | Track approved/conditional/pilot/custom/excluded devices. |
| CLAIMS001 | Catalog Claims Guardrail Standard | Prevent unsafe claims. |
| QUOTE001 | New Customer vs Existing Customer Core Pricing Rule | Prevent re-selling Core to existing customers. |
| INSTALL001 | Sensor Placement SOP | Leak, freeze, humidity, contact, garage, door/window. |
| INSTALL002 | Lighting Circuit / Neutral / Exterior Review SOP | Control line-voltage and outdoor work risks. |
| INSTALL003 | Garage Awareness vs Control SOP | Separate status-only from active control. |
| PRIVACY001 | Camera Privacy / Audio / Retention Disclosure | Required before camera public expansion. |
| ACCESS001 | Smart Lock / Guest Code / Caregiver Access SOP | Control access-code and consent workflows. |
| ALERT001 | Notification Routing / Quiet Hours / Recipient SOP | Manage household/family alerts. |
| ELDER001 | Non-Medical Awareness Disclosure | Prevent medical/fall/emergency claims. |
| WATER001 | Water Shutoff Custom Quote Disclosure | Valve compatibility, manual override, limits. |
| POWER001 | Outage / Freezer Backup-Power Disclosure | UPS/network/sensor limits. |
| DEVICE001 | App / Cloud / Subscription Dependency Disclosure | Required for conditional devices. |
| FIELDTEST001 | Field-Test Backlog & Approval Procedure | Move pilot hardware into approved status. |

---

## 13. Unified Claims Guardrail Summary

A full claims document should follow under a separate CLAIMS task. This section is the immediate catalog-level summary.

### 13.1 Forbidden Claim Types

WNYHS must not claim that it:

- prevents crime
- prevents package theft
- stops intruders
- guarantees garage closure
- guarantees all visitors or vehicles are detected
- guarantees water-damage prevention
- prevents frozen pipes
- prevents mold
- protects freezer contents
- replaces smoke / CO alarms
- provides life-safety monitoring
- provides medical monitoring
- detects every fall
- replaces a caregiver
- provides emergency response
- guarantees HVAC performance
- guarantees energy savings
- works with every existing device
- operates zero-cloud in every case
- has no monthly fees in every possible hardware configuration

### 13.2 Safe Claim Direction

WNYHS may use language around:

- earlier awareness
- practical alerts
- selected monitored areas
- supported hardware
- local-first where supported
- customer-owned equipment
- no required monthly fees where selected hardware supports it
- professional installation
- local support
- dashboard visibility
- fewer apps
- future expansion through WNYHS Core
- site-reviewed custom options

---

## 14. Next Governance Task Candidates

| Task ID | Task | Type | Why |
|---|---|---|---|
| T-HARDWARE001 | Create Approved Hardware Registry REV01 | Docs / Governance | Needed before solution/BOM buildout. |
| T-CLAIMS001 | Create Unified Claims Guardrail Addendum REV01 | Docs / Governance | Prevents copy and marketing drift. |
| T-QUOTE001 | Create Core Pricing / New-vs-Existing Customer Rule REV01 | Docs / Business Logic | Protects Core model. |
| T-FIELDTEST001 | Create Field-Test Backlog REV01 | Docs / Ops | Controls pilot hardware decisions. |
| T-SOP001 | Create Required SOP / Disclosure Document Queue | Docs / Ops | Defines what must exist before implementation. |
| T-SOLUTIONCAT001 | Create Master Solution Object Index REV01 | Docs / Catalog | Prepares solution objects and later pages. |
| T-BOM001 | Create BOM / Pricing Input Schema REV01 | Docs / Business Logic | Sets quoting structure without final prices. |
| T-PACKAGE001 | Create Package Compatibility Map REV01 | Docs / Catalog | Allows packages to be built without duplicate solutions. |

---

## 15. Implementation Hold

This document does not authorize implementation of:

- public pages
- quote flows
- BOM pricing
- Stripe/payment behavior
- HubSpot workflows
- scheduling changes
- runtime behavior
- customer-facing package deployment
- source code changes
- route changes
- page/component/style changes
- visible site version bumps

Each future implementation must receive its own bounded task and work order.

## 16. T-SMARTRESEARCH001 Customer-Outcome Pattern Enrichment

These patterns enrich existing solution families without creating product-led offers. Each entry remains subordinate to HARDWARE001 status, claims guardrails, and future implementation/BOM tasks.

| Solution Idea / Pattern | Customer-Recognizable Outcome | Category | Status | Discovery Trigger | Hardware Relationships | Infrastructure Requirements | Home Assistant Relationship | Physical / Manual Fallback | Local / Cloud / Subscription Boundary | Support and Claims Boundary |
|---|---|---|---|---|---|---|---|---|---|---|
| Local garage-door control extension | See and optionally control a compatible garage door from WNYHS Core. | Security / Home Automation | Conditional / Custom | Customer asks “did I leave the garage open?” or has detached garage/shop. | ratgdo, ZEN17/ZEN16, garage tilt/contact sensors. | Opener compatibility, Wi-Fi/Ethernet or Z-Wave, safety sensors. | HA entities for state/control after validation. | Wall button, keypad, remotes remain primary. | Prefer local; disclose any vendor/cloud path. | Not a safety-system replacement; active control only after site review. |
| Vehicle presence and parking assistance | Know whether a vehicle is present or aligned in garage/driveway. | Security / Property Management | Pilot | Tight garage, shared driveway, older driver, workshop parking. | mmWave/contact/camera/ultrasonic candidates. | Power/mount/network at sensing point. | HA sensor/dashboard/notification pattern. | Visual parking aids/manual checking. | Varies by sensor; verification required. | Awareness only; no collision-prevention promise. |
| Local video notification intelligence | Reduce nuisance video alerts and surface useful events. | Security | Premium / Custom | Customer complains about too many camera alerts. | Reolink, UniFi Protect, Frigate, analytics patterns. | Camera placement, NVR/storage/PoE/network. | HA notifications/dashboards informed by validated events. | Vendor app/NVR review remains available. | Local preferred; cloud features disclosed if used. | No outside response or assured detection claims. |
| Local camera picture-in-picture | Show relevant camera view on a dashboard/control surface when useful. | Security / Home Automation | Premium / Custom | Customer wants front door/driveway view while using tablet/display. | Reolink, UniFi, dashboard hardware, kiosk/e-paper where appropriate. | Display, network, stream bandwidth, privacy design. | HA dashboard/browser display. | Open camera dashboard/app manually. | Depends on camera/display. | Privacy and support burden reviewed; not routine for first-wave. |
| Detached garage/shop/shed/gate awareness | Bring outbuilding status into the home dashboard. | Security / Property Management | Premium / Custom | Detached structures, tools, vehicles, gates, seasonal equipment. | Contacts, cameras, AP/bridge, PoE, UPS. | Point-to-point link or reliable mesh/AP, power, weatherproofing. | HA areas/devices for outbuilding. | Manual checks and existing locks. | Local if network link is local. | Awareness only; no property-loss prevention promise. |
| Hardwired alarm takeover using existing contacts | Reuse existing wired contacts for local status where appropriate. | Security | Pilot / Custom | Existing alarm panel/contact wiring, customer wants less battery maintenance. | Dry-contact/relay/contact-interface patterns. | Panel/cable identification, low-voltage enclosure. | HA binary sensors after validation. | Existing alarm functions only if separately maintained. | Local preferred; exact interface verified. | Supplemental awareness; not central-station or code alarm service. |
| Simplified physical controls | Make common actions easier with wall buttons, remotes, keypads, or fixed controls. | Aging-in-Place / Home Automation | Add-On | Customer avoids apps, guests/caregivers need simple operation. | ZEN32, ZEN37, Pico, IKEA buttons, NFC/RFID. | Radio coverage, labels, mount locations. | HA scenes/scripts/helpers. | Normal switches/keypads retained where practical. | Local preferred; bridge dependencies disclosed. | Not medical/emergency response. |
| Room-aware lighting | Lights respond to actual room use rather than timers alone. | Aging-in-Place / Lighting | Premium / Pilot | Night trips, dark halls, hands-full routines. | Aqara FP2/FP1E, wired mmWave, motion, ZEN77/ZEN71. | Sensor power/placement and switch compatibility. | HA occupancy/presence automations. | Manual switches remain usable. | Local preferred. | Household acceptance and false-trigger control required. |
| Exception-first status displays | Show only items needing attention instead of healthy-device clutter. | Aging-in-Place / Home Safety | Pilot / Premium | Customer wants quick “is everything okay?” view. | Wall tablet, kiosk mini-PC, e-paper, HA dashboard. | Mount/power/network/kiosk plan. | HA dashboard cards and device-health entities. | Mobile app or printed checklist. | Display vendor posture disclosed. | Routine status on dashboards; urgent exceptions use suitable notifications. |
| Automated shades and daylight management | Manage glare/privacy/heat using reviewed shade systems. | Aging-in-Place / Automation | Premium / Custom | Hard-to-reach windows, glare, privacy, seasonal sun. | Lutron shades, centralized shades, top-down/bottom-up candidates. | Window measurements, power/battery, bridge. | HA scenes/sun-angle logic where validated. | Manual shade control or vendor control retained. | Vendor ecosystem disclosed. | Comfort/privacy awareness only; no energy-savings promise. |
| Comfort and temperature awareness | Surface room/utility temperature concerns. | Aging-in-Place / Home Safety | Add-On | Older adult, pets, freezers, remote property. | ZSE44, thermostats, IAQ/temp sensors. | Sensor placement/radio coverage. | HA dashboards/notifications. | Thermostat/manual checks remain. | Varies by thermostat/sensor. | Awareness only; no health/HVAC outcome promise. |
| Non-medical routine awareness | Notice unusual household routines without cameras where possible. | Aging-in-Place | Premium | Family asks for gentle routine visibility. | Contacts, motion/presence, dashboards. | Consent, areas, quiet hours, privacy controls. | HA history/helpers/notifications. | Calls/check-ins remain human process. | Local preferred; remote access needs internet. | Non-medical; no fall detection or emergency response. |
| Reduced battery-maintenance designs | Prefer wired or powered sensors where support burden matters. | Aging-in-Place / Home Safety | Add-On | Customer cannot change batteries easily. | Wired mmWave, hardwired contacts, powered dashboards, PoE. | Power/wiring/network planning. | HA device health dashboards. | Manual checks. | Local preferred. | Does not eliminate all maintenance. |
| Contextual voice confirmations | Use voice confirmations only where they reduce confusion. | Aging-in-Place / Automation | Research / Pilot | Customer needs confirmation without checking app. | HA Assist/speakers/voice endpoints. | Voice hardware/network/privacy. | HA notifications/Assist after validation. | Dashboard/physical indicator first. | Cloud/local depends on voice stack. | Avoid routine noisy announcements; no emergency claim. |
| Indoor air-quality awareness | Show CO2/PM2.5/VOC/humidity/temp trends. | Home Safety | Pilot | Musty rooms, workshops, bedrooms, health sensitivity questions. | IAQ sensors. | Sensor power/network/calibration. | HA dashboards/threshold notifications. | Standalone sensor display/manual ventilation. | Varies; disclose. | Awareness only; no medical/environmental certification. |
| Automated bathroom humidity control | Reduce lingering humidity with reviewed fan/control pattern. | Home Safety | Conditional / Pilot | Steamy bathrooms, mold-risk concerns. | Humidity sensors, fan switch/relay. | Electrical/fan compatibility. | HA or standalone humidity behavior. | Wall switch/manual fan. | Varies. | No mold-prevention promise. |
| Equipment/enclosure temperature protection | Surface hot AV/network cabinets and run fans where safe. | Home Safety | Pilot | Media rack, closet rack, NVR, game room. | Temp sensors, fans, plugs/relays. | Rated power, ventilation path. | HA alerts/control. | Manual fan/door venting. | Local preferred. | Protective outcome not promised; electrical ratings required. |
| Pet-water-level awareness | Remind when pet water may need refill. | Home Safety / Property Management | Research-Only | Pet care concern. | Level/weight sensor candidates. | Sensor/power/waterproofing. | HA sensor/notification after validation. | Manual checking. | Unknown. | Research only; no pet safety promise. |
| Network/power resilience | Make WNYHS Core and network recover better during outages. | Home Safety / Property Management | Premium / Custom | Frequent outages, remote property, cameras/NVR. | UPS, PoE, dual WAN, rack design. | Electrical/network design. | HA/NUT/device health visibility. | Manual local device use. | Local for LAN; internet needs WAN. | Resilience improvement only; no uptime promise. |
| Battery and device-health visibility | Show low batteries/offline devices for support. | Home Safety / Automation | Add-On | Customer has many sensors or aging-in-place support needs. | HA device entities, dashboards. | Naming/area discipline. | HA service dashboard. | Manual inspection. | Local. | Support visibility, not proactive service promise. |
| Legacy IR/RF equipment integration | Bring remotes/fans/AV into scenes where practical. | Home Automation | Pilot | Customer has non-smart AV/fans/projectors. | Broadlink, IR/RF bridges, activity remotes. | Line-of-sight/range, learned codes. | HA Broadlink/scripts. | Original remotes remain. | Setup/cloud behavior disclosed. | Best-effort; not all RF/IR works. |
| Theater and entertainment control | One-button scenes for lights, shades, AV, and game room. | Home Automation | Premium / Custom | Theater/game room/man cave. | Broadlink, SofaBaton, Sonos, Lutron/Zooz, shades. | Network/IR/RF/lighting integration. | HA scenes/scripts. | Original remotes/switches. | Varies. | Custom support boundary required. |
| RFID/NFC scene control | Tap to trigger mode/scene. | Home Automation | Pilot | Customer wants quick modes without app. | NFC tags/readers. | Tag placement/phone or reader. | HA tags/helpers. | Wall controls/dashboard. | Local depends on phone/reader. | Control surface only, not runtime authority. |
| Automated floor care | Show robot cleaning status or start reviewed routines. | Home Automation / Property Management | Research-Only | Customer asks about cleaning robots. | Roborock or similar. | Dock/Wi-Fi/account. | HA integration after validation. | Robot/vendor app/manual cleaning. | Often cloud/app dependent. | Not customer-BOM eligible now. |
| Smart irrigation control | Seasonal irrigation awareness/control. | Property Management | Pilot | Irrigation zones, vacation homes, water bills. | Irrigation controller candidates. | Controller wiring, seasonal winterization. | HA schedule/status where validated. | Controller/manual valve. | Varies. | No landscape outcome promise. |
| Robotic lawn care | Status/control for reviewed mower systems. | Property Management | Research-Only | Customer asks for lawn automation. | Robotic mower platforms. | Outdoor safety/site design. | Vendor/HA path unknown. | Manual mowing/service. | Varies. | Research-only; safety/support burden. |
| Specialty PoE camera uses | Barn/driveway/shop/gate camera awareness. | Property Management / Security | Premium / Custom | Large property/outbuildings. | Reolink/UniFi/PoE cameras. | PoE/network/storage. | HA dashboards/events. | Manual inspection. | Local preferred. | Privacy/retention/support disclosure required. |
| Network and rack resilience upgrades | Make smart-property stack easier to support. | Property Management | Premium / Custom | Many devices/cameras/outbuildings. | UniFi/TP-Link/AP/PoE/UPS/rack. | Structured cabling/rack/power. | HA visibility where appropriate. | Local physical access. | Internet-dependent features disclosed. | Infrastructure relationship, not ordinary device offer. |

### 16.1 Follow-Up Integration Notes

Future discovery/estimate tooling should be able to retrieve these patterns from customer triggers such as detached outbuilding, garage uncertainty, app fatigue, glare/privacy, too many camera alerts, older-adult support, battery-maintenance burden, AV/theater complexity, pet-care reminders, and WNY outage concerns. A later runtime/discovery integration task is required before any website or quote-flow behavior changes.
