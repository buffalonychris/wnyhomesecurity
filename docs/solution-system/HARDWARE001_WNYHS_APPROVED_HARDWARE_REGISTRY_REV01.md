# HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01

## Metadata

- **Title:** WNYHS Approved Hardware Registry
- **Revision:** REV01
- **Status:** Active Governance Draft
- **Owner Area:** Solution System / Hardware Governance
- **Task Reference:** T-HARDWARE001
- **Scope:** Docs-only hardware status registry
- **Last Updated:** 2026-06-11
- **Implementation Status:** No application implementation, customer installation, purchasing authorization, public pricing, or public copy deployment is authorized by this document alone.

---

## 1. Purpose

This document creates the first governed WNY Home Security hardware registry for solution catalog planning.

It classifies hardware candidates into controlled status groups so later WNYHS catalog, package, BOM, field-test, claims, and installation work does not drift into unsupported devices or unsupported claims.

This document is not:

- a purchasing authorization
- a final BOM document
- a pricing document
- a customer-facing product catalog
- a public copy source
- an installation SOP
- a claims approval document
- an implementation ticket
- a page-build specification
- a runtime specification
- a Stripe/payment specification
- a HubSpot workflow specification
- a scheduling specification

Future implementation, purchasing, pricing, public copy, page creation, or runtime work still requires a separate bounded Master Task Register task and work order.

---

## 2. Source Basis

This registry is derived from the accepted WNYHS solution research and catalog governance work, including:

1. Home Safety / Environmental Safety research.
2. Home Security / Entry / Garage / Access research.
3. Home Lighting / Home Automation / Aging-in-Place research.
4. `SOLUTION_CATALOG_RECONCILIATION_REV01`.
5. Existing WNYHS local-first, Home Assistant-centered solution model.
6. Existing WNYHS claim, supportability, additive-change, and protected-system guardrails.

This document preserves these governing assumptions:

- WNYHS Core is the foundational control plane.
- WNYHS Core should be purchased/installed once for a customer, not resold for every add-on.
- First-wave standard hardware should prioritize Home Assistant compatibility and local-first supportability.
- Hardware must support the customer-facing capability being sold through WNYHS Core or be explicitly treated as conditional/custom/pass-through.
- Devices that require vendor apps, clouds, subscriptions, proprietary ecosystems, or special compatibility conditions must be disclosed.
- No hardware status in this registry authorizes public claims by itself.
- No hardware status in this registry authorizes bypassing SOPs, field testing, site review, or customer disclosures where required.

---

## 3. Status Definitions

| Status | Meaning | Customer-Facing Use |
|---|---|---|
| **Approved Standard** | Strong first-wave standard candidate for WNYHS-supported installs when used within documented scope. | May support public/catalog solutions after BOM, SOP, copy, and claims approval. |
| **Conditional** | Valid candidate only when compatibility, site conditions, ecosystem dependencies, or installation conditions are verified. | May be used when disclosed and scoped. Not the default standard. |
| **Pilot** | Promising candidate requiring WNYHS field testing before standardization. | Not standard public catalog hardware. May be used in controlled testing or custom/pilot work. |
| **Premium / Custom** | Valid for higher-complexity, site-reviewed, custom, or premium jobs. | Not flat-price standard hardware. Requires site review, disclosure, and custom scope. |
| **Research-Only** | Do not sell or standardize yet. Requires further research, legal/code review, liability review, or compatibility proof. | Not public catalog hardware. |
| **Excluded** | Do not standardize as WNYHS catalog hardware or default ecosystem. | Not used in standard catalog; pass-through exception only if separately approved and disclosed. |

---

## 4. First-Wave Architecture Decision

The first-wave WNYHS Core hardware direction is:

- Home Assistant Green as the first-wave controller.
- Home Assistant Connect ZWA-2 as the default first-wave Z-Wave radio.
- Z-Wave-first standard hardware fabric for first-wave environmental sensors, contact sensors, smart locks, lighting controls, remotes/buttons, and selected alert/control devices.
- Selective Zigbee, Thread, Matter, Wi-Fi, ESPHome, HomeKit-exposed, cloud, or proprietary integrations only when specifically justified and disclosed.

Zigbee/Thread/Matter are not rejected. They are not the default first-wave standard until WNYHS separately standardizes when and why those radios/ecosystems are included.

---

## 5. Approved Standard Hardware

These devices are approved standard candidates for first-wave WNYHS catalog planning when used within their documented scope.

| Hardware | Model / Identifier | Role | Primary Solution Families | Protocol / Integration | Status | Standard Use Boundary |
|---|---|---|---|---|---|---|
| Home Assistant Green | NC-GREEN-1175 | WNYHS Core controller | All WNYHS Core installs | Ethernet / Home Assistant | Approved Standard | Default first-wave controller; no built-in radios. |
| Home Assistant Connect ZWA-2 | ZWA-2 | Z-Wave radio | Core, sensors, locks, lighting, environmental | Z-Wave / Z-Wave JS | Approved Standard | Default first-wave radio unless separate conditional path is approved. |
| Zooz Water Leak XS Sensor | ZSE42 | Water leak sensor | Water Leak Alerts, Sump Area Awareness, Basement & Utility Room Alerts | Z-Wave | Approved Standard | Water presence awareness in selected monitored areas only. |
| Zooz Temperature / Humidity XS Sensor | ZSE44 | Temperature and humidity sensor | Freeze Risk Awareness, Humidity & Moisture Awareness, Comfort Awareness | Z-Wave | Approved Standard | Temperature/humidity awareness only; no freeze, mold, or HVAC guarantees. |
| Zooz 800LR Dimmer | ZEN77 | In-wall dimmer | Smarter Everyday Lighting, Night Path Lighting, Entry Lighting | Z-Wave | Approved Standard | Eligible compatible lighting circuits only; electrical review still required. |
| Zooz 800LR On/Off Switch | ZEN71 | In-wall switch | Entry Lighting, Garage/Workshop Lighting, Exterior Lighting | Z-Wave | Approved Standard | Eligible compatible switched loads only; electrical review still required. |
| Zooz Scene Controller | ZEN32 | Wall scene controller | Scene Button Setup, Lighting Scenes, Modes | Z-Wave | Approved Standard | Scene/control use only; not a life-safety trigger. |
| Zooz Wall Remote | ZEN37 | Wall remote / fixed button | Help Button, Scene Control, Lighting Scenes | Z-Wave | Approved Standard | Fixed in-home help/scene trigger only; not medical, emergency, panic, or 911 response. |
| Zooz 800LR Smart Plug | ZEN04 | Smart plug | Smart Plug Routine Control, Lamp Control | Z-Wave | Approved Standard | Rated indoor plug-in loads only; not large appliance or life-safety use. |
| Zooz Contact Sensor | ZSE41 | Door/window/contact sensor | Door/Window Left-Open Awareness, Entry/Exit Awareness | Z-Wave | Approved Standard | Open/closed awareness only. |
| Reolink Video Doorbell WiFi | Reolink Video Doorbell WiFi | Doorbell camera | Front Door Package Protection | Reolink / Home Assistant path | Approved Standard | Front-door awareness; exact SKU/variant and transformer/chime review still required. |
| Reolink CX410 | CX410 | Exterior camera | Entry & Perimeter Awareness, Local Camera Awareness | Reolink / Home Assistant path | Approved Standard | Property awareness only; privacy/FOV/recording disclosures required. |
| Kwikset Home Connect 620 | Home Connect 620 | Smart lock | Smart Lock & Guest Access, Caregiver Access | Z-Wave | Approved Standard | Access control only after door/prep/rekey/customer-code review. |

---

## 6. Conditional Hardware

These devices may be valid but are not first-wave defaults. Each requires documented compatibility review, ecosystem disclosure, or site-specific reason.

| Hardware | Model / Identifier | Role | Possible Use | Status | Required Condition / Constraint |
|---|---|---|---|---|---|
| Home Assistant Yellow | HA Yellow | Premium controller path | Premium/custom Core alternative | Conditional | Use only when a defined premium/controller reason exists. |
| Home Assistant Connect ZBT-2 | ZBT-2 | Zigbee / Thread radio | Zigbee or Thread device support | Conditional | Secondary only. Do not use as default multiprotocol single-radio standard. |
| Home Assistant ZBT-1 / SkyConnect | ZBT-1 / SkyConnect | Legacy Zigbee/Thread radio path | Existing/legacy support | Conditional | Not preferred first-wave standard. |
| SONOFF Zigbee Dongle-E | ZBDongle-E | Zigbee coordinator fallback | Zigbee fallback | Conditional | Fallback only; not default coordinator. |
| Aqara Door/Window Sensor P2 | P2 | Contact sensor | Door/window awareness | Conditional | Matter/Thread path must be field validated and disclosed. |
| Zooz Outdoor Motion Sensor | ZSE70 | Outdoor motion sensor | Exterior lighting, driveway/entry triggers | Conditional | WNY winter placement and nuisance-alert testing required. |
| Shelly Flood | Shelly Flood | Leak/temp sensor alternative | Environmental awareness alternative | Conditional | Wi-Fi/battery behavior and app/setup dependency must be disclosed. |
| Shelly 1PM Gen4 | 1PM Gen4 | Relay / control module | Custom control or visibility | Conditional | Electrical review and custom scope required. |
| Yale Assure Lock 2 Touch Z-Wave | Yale Assure Lock 2 Touch Z-Wave | Smart lock alternative | Access control | Conditional | Pilot/compatibility review before standard use. |
| Aqara U100 | U100 | Smart lock exception | Apple/Aqara-specific access path | Conditional | Ecosystem-specific exception; disclose dependencies. |
| Reolink Video Doorbell PoE | Reolink Video Doorbell PoE | Doorbell camera | Premium front-door path | Conditional | Use where PoE cabling/site conditions support it. |
| Reolink RLC-810A | RLC-810A | 4K PoE camera | Premium camera path | Conditional | Use after PoE/storage/coverage review. |
| Lutron Caseta | Caseta family | Premium lighting path | Lighting control | Conditional | Premium/custom path where Lutron is justified. |
| ecobee thermostat | ecobee family | Smart thermostat | Thermostat / vacation setback | Conditional | HVAC compatibility and cloud/app disclosure required. |
| Google Nest thermostat | Nest thermostat family | Smart thermostat | Custom thermostat path | Conditional | Cloud/app dependency and compatibility burden; not default standard. |
| Generic ONVIF cameras | ONVIF-capable cameras | Camera fallback | Custom camera integrations | Conditional | Custom review only; not standard camera path. |

---

## 7. Pilot Hardware

These devices or patterns require field testing before WNYHS standardizes them.

| Hardware | Model / Identifier | Role | Possible Use | Status | Required Field Test |
|---|---|---|---|---|---|
| Aqara Motion Sensor P1 | P1 | Motion sensor | Night Path, route lighting, awareness | Pilot | Reliability, battery, Zigbee coverage, nuisance behavior. |
| Aqara Wireless Mini Switch | Mini Switch | Button | Scene/help trigger alternative | Pilot | Trigger reliability and support burden. |
| Aqara FP2 | FP2 | mmWave presence sensor | Room Presence Awareness, Routine Awareness | Pilot | Tuning, privacy, false presence, multi-person behavior. |
| Apollo MSR-2 | MSR-2 | ESPHome multisensor | Presence/comfort pilot | Pilot | ESPHome support, sensor accuracy, support process. |
| Apollo MTR-1 | MTR-1 | Presence/room sensor candidate | Presence/room awareness | Pilot | Same as MSR-2; not standard without testing. |
| Flic Hub Mini / LR | Flic Hub Mini / LR | Button ecosystem | Help button / simple trigger | Pilot | Hub dependency, subscription/app behavior, HA reliability. |
| Govee Bluetooth Hygrometer Thermometer | H5075 | Temperature/humidity sensor | Freezer/temp pilot | Pilot | BLE range, freezer performance, active scan behavior. |
| DS18B20 + ESPHome probe | DS18B20 probe + ESPHome node | Probe temp sensing | Freezer/custom probe sensing | Pilot | Standard node build, power, enclosure, supportability. |
| Zooz Heavy Duty Appliance Switch | ZEN15 | Plug-in power/activity monitor | Sump pump pilot / outage sentinel | Pilot | Plug-in pump only; inrush, ratings, nuisance logic, support value. |
| Reolink NVR + HA dashboard pattern | RLN8-410 path | Local camera storage | Premium NVR packages | Pilot | Dashboard integration, storage/retention SOP, support workflow. |
| Wall tablet dashboard hardware | TBD | Mounted dashboard | Whole-Home Status Dashboard | Pilot | Device, mount, power, kiosk mode, support lifecycle. |

---

## 8. Premium / Custom Hardware

These devices or patterns are valid only for site-reviewed premium/custom work. They are not flat-price standard catalog hardware.

| Hardware | Model / Identifier | Role | Possible Use | Status | Required Boundary |
|---|---|---|---|---|---|
| Reolink RLN8-410 | RLN8-410 | NVR | Multi-camera local NVR package | Premium / Custom | Site-specific camera count, storage, retention, wiring, and privacy review. |
| Frigate stack | Frigate / local NVR analytics | Local analytics/NVR | Advanced local camera analytics | Premium / Custom | Custom-only due configuration/support burden. |
| Zooz Titan Water Valve Actuator | ZAC36 | Water shutoff actuator | Automatic Water Shutoff | Premium / Custom | Compatible, accessible valves only after site validation and customer disclosure. |
| Permanent exterior lighting ecosystem | TBD | Exterior decorative/permanent lighting | Permanent Exterior Lighting | Premium / Custom | Vendor, roofline, power, mounting, ladder, and weather review. |
| Advanced exterior/landscape lighting controls | TBD | Exterior lighting control | Landscape/security lighting | Premium / Custom | Exterior-rated controls, transformer/wiring review, custom scope. |
| Hardwired/current-monitor custom designs | TBD | Electrical sensing/control | Advanced sump/electrical awareness | Premium / Custom | Do not standardize; electrician/site review required if ever pursued. |

---

## 9. Research-Only Hardware / Patterns

These items must not be used as public standard hardware until WNYHS creates a separate research, code/liability, or approval document.

| Hardware / Pattern | Role | Status | Reason |
|---|---|---|---|
| Zooz DC Signal Sensor for Smoke/CO bridge | ZEN55 | Research-Only | Secondary smoke/CO awareness has life-safety, code, and liability issues. |
| Remote Smoke / CO secondary awareness path | Existing detector integration path | Research-Only | Must not replace code-required alarms or imply monitoring. |
| Stove / large appliance left-on awareness | Various | Research-Only | Load, electrical, fire, and liability risk. |
| Medical/fall detection hardware | Various | Research-Only / Excluded from standard catalog | WNYHS is non-medical awareness, not medical monitoring. |
| Unvalidated freezer sensing as standard product | Various | Research-Only until field tested | Freezer sensor path not yet standardized. |
| Automatic shutoff as flat standard package | Various | Research-Only as flat package | Valve/site variability prevents standard flat cataloging. |

---

## 10. Excluded Standard Hardware / Ecosystems

These are not WNYHS standard catalog paths.

| Hardware / Ecosystem | Status | Reason |
|---|---|---|
| Ring as standard camera/doorbell stack | Excluded | Cloud/subscription-first and not aligned with local-first default. |
| Google Nest as standard camera/doorbell stack | Excluded | Cloud/subscription-first and not aligned with local-first default. |
| Cloud-required camera ecosystems as standard | Excluded | Conflicts with WNYHS local-first/default no-subscription posture. |
| myQ-dependent garage control as standard | Excluded | Interoperability instability and proprietary dependency. |
| Professional alarm monitoring / police dispatch hardware path | Excluded | Conflicts with WNYHS current model. |
| Standard smoke/CO productization | Excluded | Life-safety/code/liability boundaries. |
| Hardwired current-monitor retrofits as standard | Excluded | Electrical/install variance too high. |
| Multiprotocol single-radio Zigbee+Thread default | Excluded | Not stable enough as WNYHS default standard. |

---

## 11. Solution-to-Hardware Linkage Summary

| Solution Family | Hardware Candidates |
|---|---|
| WNYHS Core Dashboard Setup | Home Assistant Green, ZWA-2, conditional ZBT-2 |
| Water Leak Alerts | ZSE42, conditional Shelly Flood |
| Freeze Risk Awareness | ZSE44 |
| Basement & Utility Room Alerts | ZSE42, ZSE44 |
| Humidity & Moisture Awareness | ZSE44, conditional Shelly Flood, pilot Govee H5075 |
| Sump Area Awareness | ZSE42, ZSE44, pilot ZEN15 |
| Power Outage & Freezer Alerts | UPS/NUT future shortlist, pilot Govee H5075, pilot DS18B20 + ESPHome |
| Automatic Water Shutoff | ZAC36 custom path plus ZSE42 |
| Front Door Package Protection | Reolink Video Doorbell WiFi, conditional Reolink Doorbell PoE, Entry Lighting controls |
| Entry & Perimeter Awareness | ZSE41, Reolink CX410, conditional RLC-810A |
| Garage Door Awareness | Contact/status sensor standard still unresolved; active control remains custom |
| Smart Lock & Guest Access | Kwikset 620, conditional Yale Z-Wave, conditional Aqara U100 |
| Door / Window Left-Open Awareness | ZSE41, conditional Aqara P2 |
| Smarter Everyday Lighting | ZEN77, ZEN71, ZEN32, ZEN37, ZEN04 |
| Night Path Lighting | ZEN77, ZEN71, ZSE41, pilot motion/presence sensors |
| Entry Lighting Automation | ZEN77, ZEN71, ZSE41 |
| Exterior Security Lighting | ZEN71/ZEN77 where circuit eligible, conditional ZSE70, cameras if relevant |
| Garage / Workshop Lighting Automation | ZEN71/ZEN77, ZSE41, pilot motion |
| Entry / Exit Awareness for Older Adult | ZSE41, alert routing, optional lock/access hardware |
| Help Button / Assistance Trigger | ZEN37 approved fixed in-home path; pilot Aqara/Flic alternatives |
| Room Presence Awareness | Pilot Aqara FP2, Apollo MSR-2, Apollo MTR-1 |
| Whole-Home Status Dashboard | Core dashboard stack plus future wall tablet pilot |
| Thermostat / Vacation Setback | Conditional ecobee or Nest path after compatibility review |

---

## 12. Hardware Governance Rules

1. **Approved Standard does not mean every install is automatically compatible.** Site conditions, power, wiring, radio coverage, customer network, door prep, HVAC compatibility, camera privacy, and customer goals still control final scope.
2. **Conditional devices require disclosure.** Any device with app/cloud/vendor/ecosystem dependency must be disclosed before sale.
3. **Pilot devices require field-test notes.** Pilot hardware may not be promoted to Approved Standard without a later registry revision.
4. **Premium / Custom devices require site review.** Do not quote these as flat public products.
5. **Research-Only devices are not standard sales items.** Do not build public pages, copy, or price cards around them.
6. **Excluded devices are not standard catalog paths.** Any exception must be custom/pass-through with explicit customer sign-off.
7. **No device authorizes unsafe claims.** Claims are governed by solution standards and future claims guardrail documents.
8. **No device authorizes implementation.** Source code, page, runtime, payment, HubSpot, scheduling, or public copy changes require separate tasks.

---

## 13. Required Follow-Up Before Public Catalog Expansion

Before public deployment of hardware-specific solution pages or packages, WNYHS should create or complete:

| Follow-Up | Purpose |
|---|---|
| T-CLAIMS001 | Unified claims guardrail addendum. |
| T-FIELDTEST001 | Field-test backlog and approval procedure. |
| T-BOM001 | BOM/pricing input schema, without inventing public prices prematurely. |
| INSTALL001 | Sensor placement SOP. |
| INSTALL002 | Lighting circuit / neutral / exterior review SOP. |
| INSTALL003 | Garage awareness vs control SOP. |
| PRIVACY001 | Camera privacy / audio / retention disclosure. |
| ACCESS001 | Smart lock / guest code / caregiver access SOP. |
| ALERT001 | Notification routing / quiet hours / recipient SOP. |
| ELDER001 | Non-medical awareness disclosure. |
| WATER001 | Water shutoff custom quote disclosure. |
| POWER001 | Outage / freezer backup-power disclosure. |
| DEVICE001 | App / cloud / subscription dependency disclosure. |

---

## 14. Implementation Hold

This registry does not authorize:

- app/source changes
- public pages
- route changes
- package cards
- solution page deployment
- quote flow changes
- BOM pricing
- Stripe/payment behavior
- HubSpot workflows
- scheduling changes
- runtime behavior
- environment variable changes
- customer-facing hardware claims
- hardware purchasing
- customer installation

Each future implementation must receive its own bounded task and work order.

## 15. T-SMARTRESEARCH001 Home Assistant Ecosystem Enrichment

This additive section reconciles transcript-derived Home Assistant ecosystem research into the existing HARDWARE001 status model. Transcript appearance alone does not promote any product. Every row below remains subordinate to the status definitions in Section 3, customer-disclosure rules, field-test requirements, and future BOM governance.

### 15.1 Enriched Existing Hardware Records

| Existing Hardware / Pattern | Retained Status | Enrichment Notes | BOM Eligibility Posture |
|---|---|---|---|
| Home Assistant Green | Approved Standard | Default controller for WNYHS Core; no built-in Z-Wave/Zigbee/Thread radios; requires Ethernet, stable power, backup/restore plan, and external radios/bridges where needed. | Eligible when job conditions match. |
| Home Assistant Connect ZWA-2 | Approved Standard | Z-Wave radio path for Zooz and lock candidates; requires USB placement/extension planning, inclusion naming discipline, and restart-recovery validation. | Eligible with HA Green/Z-Wave scope. |
| Zooz ZEN32 | Approved Standard | Scene-first physical control; supports simplified lighting/mode/help workflows; not a life-safety trigger. | Eligible for scene/control outcomes. |
| Zooz ZEN71 | Approved Standard | In-wall on/off control for compatible loads; preserve normal switch operation and electrical review. | Eligible after circuit/load review. |
| Zooz ZEN77 | Approved Standard | In-wall dimmer for compatible dimmable loads; dim-to-warm bulb pairings require compatibility validation. | Eligible after circuit/load/bulb review. |
| Lutron Caseta | Conditional | Mature premium lighting path; requires Caseta bridge/ecosystem review and customer disclosure of bridge/vendor-app role. | Eligible only when stated conditions are satisfied. |
| ecobee thermostat path | Conditional | Thermostat integration can support comfort/vacation awareness; cloud/API posture, HVAC compatibility, and customer account dependency must be disclosed. | Conditional HVAC add-on only. |
| Reolink cameras, doorbells, and NVR path | Approved Standard / Conditional / Premium-Custom by model | Keep wired Reolink doorbell/camera paths local-first where validated; NVR/storage, transformer/chime, PoE, Wi-Fi, privacy, retention, and two-way-audio limits require disclosure. | Eligible according to model status; NVR custom reviewed. |
| Frigate stack | Premium / Custom | Local analytics/NVR pattern with high support burden; use only for custom analytics after hardware, storage, camera stream, and maintenance design. | Custom/site-reviewed only. |
| Kwikset Home Connect 620 | Approved Standard | Z-Wave lock path for standard smart-lock outcome; requires door-fit, handing, battery, key/fallback, and inclusion validation. | Eligible after door qualification. |
| Yale Z-Wave lock paths | Conditional | Use as door-fit/ecosystem exception where exact model/module is verified. | Conditional only. |
| Aqara U100 | Conditional | Ecosystem-specific lock exception; Matter/HomeKit/Aqara hub path and door-fit must be verified. | Conditional only. |
| Aqara FP2 | Pilot | mmWave presence remains tuning-heavy; validate privacy, false presence, zones, restart recovery, and household acceptance. | Controlled pilot only. |
| Wall-dashboard hardware | Pilot | Tablet/kiosk/e-paper displays require mount, power, kiosk lifecycle, fallback navigation, and support plan. | Controlled pilot/custom only. |
| Permanent exterior lighting | Premium / Custom | Site-designed roofline/power-injection/controller pattern; requires exterior power, weatherproofing, ladder/work-scope, customer disclosure, and support boundaries. | Custom/site-reviewed only. |

### 15.2 Additional Hardware and Hardware-Pattern Candidates

| Hardware / Pattern | Manufacturer | Verified Model When Known | Purpose | Protocol / HA Integration Path | Local / Cloud / Subscription Posture | Required Hubs / Wiring / Accessories | Limitations / Verification Required | Applicable Needs / Solution Families | Status | Future BOM Eligibility |
|---|---|---|---|---|---|---|---|---|---|---|
| Zooz MultiRelay | Zooz | ZEN16 | Dry-contact relay for garage, gate, chime, low-voltage, and legacy-contact patterns. | Z-Wave via ZWA-2. | Local Z-Wave; no WNYHS subscription. | HA Green, ZWA-2, enclosure/low-voltage wiring as needed. | Exact load/contact use, safety interlocks, code/electrical review required. | Garage Door Awareness, dry-contact integrations. | Pilot | Controlled pilot only. |
| Zooz Universal Relay | Zooz | ZEN17 | Dry-contact relay/sensor for garage doors, alarm contacts, gates, and low-voltage status/control. | Z-Wave via ZWA-2. | Local Z-Wave; no WNYHS subscription. | HA Green, ZWA-2, approved enclosure/wiring. | Validate opener compatibility, obstruction/safety behavior, restart recovery, and manual operation. | Local garage control, hardwired alarm takeover. | Pilot | Controlled pilot only. |
| Lutron RA3 | Lutron | RA3 family | Premium centralized lighting/keypad system. | Lutron integration path; exact bridge/processor path verification required. | Mostly local control path likely, but vendor account/app role must be disclosed. | RA3 processor, compatible dimmers/keypads, electrical design. | Dealer/programming/support burden and exact HA behavior require validation. | Premium lighting, aging-in-place simplified controls. | Premium / Custom | Custom/site-reviewed only. |
| Lutron Pico remotes | Lutron | Pico family | Physical scene/control surface. | Lutron bridge/integration path. | Depends on Lutron bridge path; disclose vendor role. | Caseta/RA bridge path, mounts. | Model/bridge compatibility and supported HA event path must be verified. | Scene Button / Wall Control, simplified controls. | Conditional | Conditional only with Lutron system. |
| IKEA Matter/Thread buttons | IKEA | Verification required | Low-cost scene buttons. | Matter/Thread via supported border router. | Local Matter goal; exact cloud posture verification required. | Thread border router; HA Matter readiness. | Exact model, battery, event exposure, and support burden unverified. | Scene controls, aging-in-place buttons. | Pilot | Controlled pilot only. |
| LIFX smart-bulb wall-control pattern | LIFX / compatible controls | Verification required | Preserve wall control for smart bulbs. | Wi-Fi/LAN LIFX path plus switch/button automation. | Local LAN possible by model; verify. | Compatible smart bulbs, always-powered circuit strategy, physical control. | Avoid disabling normal lighting; model and local behavior must be verified. | Lighting scenes, room-aware control. | Pilot | Controlled pilot only. |
| Dim-to-warm bulbs paired with smart dimmers | Multiple | Verification required | Warmer low-level lighting for comfort/night paths. | Depends on bulb/dimmer pair. | Varies; verify. | Compatible dimmer, bulb list, load test. | Do not assume compatibility; flicker/low-end behavior must be tested. | Night Path Lighting, comfort lighting. | Pilot | Controlled pilot only. |
| RFID/NFC scene controls | Multiple | Verification required | Tap-to-run scenes/modes. | HA tag/NFC or reader integration. | Local possible; phone/tag dependency varies. | NFC tags/readers/phone support. | Treat as control surface, not authority; guest/fallback required. | Scene control, modes, family routines. | Pilot | Controlled pilot only. |
| Aqara FP1E | Aqara | FP1E | mmWave presence candidate. | Zigbee/Aqara path; exact HA integration verification required. | Local goal; hub/cloud posture verify. | Zigbee coordinator or Aqara hub path; USB/power. | Presence tuning, zones, false triggers, restart behavior. | Room Presence Awareness. | Pilot | Controlled pilot only. |
| Third Reality R3 | Third Reality | R3 | Presence/motion/environment candidate. | Zigbee/Matter path verification required. | Verify. | Compatible radio/bridge. | Exact model capabilities and HA entities require validation. | Room-aware lighting, routine awareness. | Research-Only | Not customer-BOM eligible. |
| Wired mmWave presence pattern | Multiple | Verification required | Stable powered presence for rooms/hallways. | ESPHome/Zigbee/Wi-Fi depending device. | Prefer local; verify per device. | Power, mount, cable management. | False presence/privacy/acceptance and exact model validation required. | Room-aware lighting, aging-in-place. | Pilot | Controlled pilot only. |
| BLE room-presence pattern | Multiple | Verification required | Room-level presence by Bluetooth beacon/proxy. | HA Bluetooth/BLE proxies. | Local possible; device/app dependency varies. | BLE proxies/beacons/phones. | Household acceptance, phone behavior, privacy, battery, and false-location risk. | Room-aware automations. | Research-Only | Not customer-BOM eligible. |
| Indoor air-quality sensor pattern | Multiple | CO2/PM2.5/VOC/humidity/temp model TBD | IAQ awareness. | HA native/local integration preferred. | Varies; verify. | Sensor, power, network/radio. | Do not claim health diagnosis; calibration/support burden. | Indoor Air Quality Awareness. | Pilot | Controlled pilot only. |
| Lutron humidity-sensing fan switch | Lutron | Verification required | Bathroom humidity fan control. | HA visibility uncertain; may operate standalone. | Vendor/electrical posture verify. | Electrical review, fan compatibility. | Exact HA integration and manual override behavior required. | Humidity control. | Conditional | Conditional when electrical/standalone behavior fits. |
| Equipment/AV-cabinet temperature ventilation pattern | Multiple | Verification required | Protect equipment enclosures from heat. | Temp sensor + plug/fan/relay in HA. | Prefer local. | Temp sensor, rated fan/smart plug/relay, power. | Load ratings, nuisance logic, and fallback ventilation required. | Equipment temperature protection. | Pilot | Controlled pilot only. |
| ratgdo garage interface | ratgdo | ratgdo family | Local garage opener integration. | ESPHome/MQTT/Home Assistant path. | Local-first; verify per opener. | Compatible opener, wiring, enclosure, network. | Opener compatibility/safety/manual operation/internet outage behavior. | Garage Door Awareness/Control. | Pilot | Controlled pilot only. |
| Third Reality garage remote actuator | Third Reality | Verification required | Retrofit garage button actuator. | Zigbee/Matter path verification required. | Verify. | Actuator mount/power/radio. | Mechanical reliability and safety behavior unverified. | Garage control exception. | Research-Only | Not customer-BOM eligible. |
| Garage tilt/contact sensors | Multiple | Verification required | Garage open/closed state. | Z-Wave/Zigbee/Matter/contact. | Local by device. | Sensor, mount, radio. | WNY temperature/battery and door vibration testing. | Garage Door Awareness. | Conditional | Conditional when exact sensor validated. |
| Vehicle-presence and parking-assist patterns | Multiple | Verification required | Detect vehicle presence/parking position. | mmWave/ultrasonic/contact/camera analytics. | Varies; prefer local. | Sensor/mount/power, dashboard/indicator. | False triggers, vehicle variety, privacy, and weather/garage conditions. | Vehicle presence, parking assistance. | Pilot | Controlled pilot only. |
| Aqara Smart Lock U400 | Aqara | U400 | Gate/lever/deadbolt access candidate. | Matter/HomeKit/Aqara path verification required. | Ecosystem-dependent; verify. | Door/gate fit, batteries, hub/thread as required. | Exact fit and HA path unverified; nonstandard handlesets require qualification. | Smart Lock & Guest Access. | Pilot | Controlled pilot only. |
| Nonstandard handleset/door-fit qualification pattern | Multiple | N/A | Pre-quote door/access hardware qualification. | Not a device; governance pattern. | N/A. | Photos, measurements, bore/backset/handing review. | Required before lock quoting where doors are nonstandard. | Smart locks. | Conditional | Conditional design prerequisite. |
| Aqara thermostat | Aqara | Verification required | HVAC/room comfort candidate. | Zigbee/Matter/Aqara path verification required. | Verify; HVAC safety required. | HVAC compatibility, hub/radio. | Regional HVAC compatibility and HA support unverified. | Comfort/vacation setback. | Research-Only | Not customer-BOM eligible. |
| Eve thermostat | Eve | Verification required | Thermostat/radiator candidate. | Matter/Thread/HomeKit path. | Verify. | Thread border router; HVAC/radiator compatibility. | US/WNY HVAC fit unclear; exact HA behavior unverified. | Comfort awareness. | Research-Only | Not customer-BOM eligible. |
| Honeywell existing-system integration path | Honeywell/Resideo | Verification required | Integrate existing thermostat when practical. | Vendor cloud/local path varies. | Often cloud/account dependent; disclose. | Existing thermostat/account/network. | Do not promise local operation; exact model/API must be verified. | Comfort/vacation setback. | Conditional | Conditional when existing system supports it. |
| Centralized powered shades | Multiple | Verification required | Site-designed shade control. | Depends on shade controller. | Varies. | Power, low-voltage wiring, controllers. | Window measurements, wiring, support, manual fallback. | Smart shade/daylight management. | Premium / Custom | Custom/site-reviewed only. |
| Lutron powered blinds/shades | Lutron | Serena/Triathlon/RA path verify | Premium shade path. | Lutron bridge/integration. | Depends on Lutron ecosystem; disclose. | Lutron bridge/processor, power/batteries. | Exact product line and HA behavior must be verified. | Automated shades. | Premium / Custom | Custom/site-reviewed only. |
| Top-down/bottom-up powered shades | Multiple | Verification required | Privacy/daylight shade automation. | Vendor-specific. | Varies. | Custom shade measurements/power. | Availability, integration, support burden unverified. | Shade/daylight management. | Research-Only | Not customer-BOM eligible. |
| Solar-angle shade automation pattern | Multiple | N/A | Automate shades based on sun angle/heat/glare. | HA sun/weather/helpers. | Local logic with optional weather inputs. | Motorized shades, override controls. | Must preserve manual intent, quiet hours, and acceptance. | Smart shade/daylight management. | Pilot | Controlled pilot/custom only. |
| Broadlink IR/RF bridge family | BroadLink | RM family verify | Legacy IR/RF equipment control. | HA Broadlink integration. | Local path possible after setup; verify. | Bridge placement, IR/RF line-of-sight/range. | Learning reliability, RF code support, cloud/setup role. | Legacy IR/RF integration. | Pilot | Controlled pilot only. |
| Broadlink Matter Superbridge | BroadLink | Verification required | Future Matter bridge concept. | Matter path unverified. | Release/local posture unverified. | Verification required. | Do not claim release or HA support until validated. | Legacy bridge future path. | Research-Only | Not customer-BOM eligible. |
| Aqara M3 hub | Aqara | M3 | Aqara/Matter bridge candidate. | Aqara/Matter/Thread bridge path. | Ecosystem/cloud posture must be disclosed. | Hub, account/app, Thread/Matter design. | Verify local behavior, supported child devices, restart recovery. | Aqara device bridge. | Pilot | Controlled pilot only. |
| Dry-contact and relay integration patterns | Multiple | N/A | Integrate existing contacts, gates, bells, low-voltage equipment. | Z-Wave/ESPHome/Shelly/etc. | Prefer local. | Enclosures, power, wiring, electrician/low-voltage review. | Code/safety/manual fallback and exact device validation required. | Alarm takeover, garage, gates. | Pilot | Controlled pilot/custom only. |
| TRMNL e-paper display | TRMNL | Verification required | Low-clutter status display. | HA/API/MQTT path verification required. | Cloud/subscription posture verify. | Display, power/Wi-Fi/account as required. | Exact HA path and recurring cost unverified. | Exception-first status displays. | Research-Only | Not customer-BOM eligible. |
| Large-format e-paper status display pattern | Multiple | Verification required | Quiet dashboard/status surface. | Vendor/API/HA path varies. | Varies; verify. | Display, mount, power. | Refresh rate, cloud dependency, readability, support. | Dashboards/status. | Research-Only | Not customer-BOM eligible. |
| SofaBaton X2 | SofaBaton | X2 | Activity remote for theater/game rooms. | HA integration path verification required. | Cloud/app posture verify. | Remote/hub, controlled equipment. | HA support and local behavior unverified. | Theater/activity control. | Research-Only | Not customer-BOM eligible. |
| MQTT virtual-button control pattern | Multiple | N/A | Abstract control surface for remotes/displays. | MQTT/Home Assistant helpers. | Local if MQTT local. | MQTT broker, templates/helpers. | Runtime implementation not authorized; design only. | Control surfaces. | Pilot | Controlled pilot/software design only. |
| Kiosk mini-PC displays | Multiple | Verification required | Large fixed dashboards. | Browser/kiosk to HA dashboard. | Local dashboard possible; OS updates vary. | Mini-PC/display/mount/power/network. | Lifecycle, login, power recovery, physical fallback. | Whole-home dashboard. | Premium / Custom | Custom/site-reviewed only. |
| Music Assistant | Music Assistant project | N/A | Local music orchestration layer. | Home Assistant add-on/integration path. | Local-first goal; streaming services may be cloud/subscription. | HA resources, speakers/services. | Support burden and service-account posture. | Audio/entertainment. | Pilot | Controlled pilot/software only. |
| Sonos physical-control pattern | Sonos / controls | N/A | Buttons/remotes for Sonos scenes. | HA Sonos + button integration. | Sonos/local-cloud mix must be disclosed. | Sonos devices, button/control surface. | Exact local behavior and service dependencies. | Entertainment control. | Conditional | Conditional when existing Sonos scope supports it. |
| Theater/game-room activity control pattern | Multiple | N/A | One-button scenes for lights, AV, shades. | HA scenes/scripts plus IR/RF/IP integrations. | Varies. | Controls, AV bridges, lighting/shades. | Complexity/support burden. | Theater and game-room control. | Premium / Custom | Custom/site-reviewed only. |
| Digital movie-poster/sports-display systems | Multiple | Verification required | Specialty display content. | API/browser/HA path varies. | Often cloud/API dependent. | Display/player/mount/network. | Content licensing/API/support. | Entertainment displays. | Research-Only | Not customer-BOM eligible. |
| UniFi Protect camera/doorbell family | Ubiquiti | Model-specific | Premium camera/video ecosystem. | UniFi Protect integration via local controller. | Local controller; vendor account role disclose. | Protect controller/NVR, PoE/network. | Controller/storage/firmware/support architecture required. | Local video, specialty cameras. | Premium / Custom | Custom/site-reviewed only. |
| Reolink local AI appliance | Reolink | Verification required | Local AI/video appliance candidate. | Reolink/HA path verification required. | Verify. | Appliance/NVR/storage/network. | Exact release/features/HA entities unverified. | Local video analytics. | Research-Only | Not customer-BOM eligible. |
| TP-Link/Tapo solar cameras | TP-Link/Tapo | Verification required | No-wire exterior camera exception. | Tapo/ONVIF/HA path verification required. | Cloud/app/battery/solar dependencies likely; verify. | Solar panel, mount, Wi-Fi. | Battery wake behavior, winter solar, local recording, and HA support limitations. | Remote exterior awareness. | Research-Only | Not customer-BOM eligible. |
| Camera picture-in-picture pattern | Multiple | N/A | Show camera popups/status on dashboards/displays. | HA dashboard/browser/display integration. | Depends on camera/display path. | Cameras, dashboard display. | Privacy, bandwidth, customer acceptance, premium support. | Video awareness. | Premium / Custom | Custom/site-reviewed only. |
| Local notification-filtering and analytics patterns | Multiple | N/A | Reduce nuisance camera notifications. | HA/Reolink/Frigate/UniFi analytics. | Prefer local; varies. | Cameras, analytics source, dashboard/notification rules. | False positives, privacy, maintenance burden. | Local video notification intelligence. | Premium / Custom | Custom/site-reviewed only. |
| Roborock cleaning platforms | Roborock | Verification required | Automated floor-care status/control. | HA integration path varies. | Often cloud/app dependent; verify. | Robot dock, Wi-Fi/account. | Cloud dependency and maintenance consumables. | Automated floor care. | Research-Only | Not customer-BOM eligible. |
| Robotic lawn-mower platforms | Multiple | Verification required | Automated lawn-care status/control. | Vendor/API/HA path varies. | Varies; often cloud. | Outdoor install, boundary/RTK, safety setup. | Safety, weather, terrain, support, and vendor dependency. | Robotic lawn care. | Research-Only | Not customer-BOM eligible. |
| Smart irrigation controllers | Rachio/OpenSprinkler/etc. | Verification required | Irrigation scheduling/awareness. | HA integration path varies. | Local/cloud varies by platform. | Controller wiring, zones, backflow/winterization awareness. | WNY seasonal service and exact controller validation. | Smart irrigation. | Pilot | Controlled pilot only. |
| Detached-building connectivity and awareness pattern | Multiple | N/A | Extend awareness to garages/shops/sheds/gates. | Network bridge + HA sensors/cameras. | Local-first when network local. | Point-to-point link, AP/PoE/UPS/sensors. | Network design first; weather/power/support burden. | Outbuilding awareness. | Premium / Custom | Custom/site-reviewed only. |

### 15.3 Infrastructure Relationships, Not Ordinary Device Rows

UniFi networking, TP-Link mesh, wired access points, PoE switching, UPS, dual WAN, point-to-point outbuilding links, structured cabling, and centralized rack design are infrastructure dependencies. They should be referenced by solution/BOM planning where required, but not treated as ordinary customer device rows unless a future infrastructure owner document defines quoting and support boundaries.

### 15.4 Pilot Validation Evidence Required

Pilot promotion requires documented evidence for exact model, firmware, integration version, pairing path, local/cloud behavior, restart recovery, internet-outage behavior, battery/power behavior, false triggers, customer acceptance, support burden, accessory requirements, WNY environmental behavior, installer notes, field duration, and promotion recommendation. This is recorded as follow-up `T-FIELDTEST001`.
