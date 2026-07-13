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
7. **Transcript-only and import-only evidence is not approval.** Hardware named only by transcript-derived research, web research, or CATALOG004 import records must keep a conservative status until WNYHS validates exact model identity, Home Assistant support, dependencies, recovery behavior, and field-test results.
8. **Exact-model evidence can narrow a family-level row but cannot silently promote it.** If an exact model record is more conservative than an existing family-level status, the exact model keeps the conservative status until a later registry revision explicitly resolves the conflict.
9. **No device authorizes unsafe claims.** Claims are governed by solution standards and future claims guardrail documents.
10. **No device authorizes implementation.** Source code, page, runtime, payment, HubSpot, scheduling, or public copy changes require separate tasks.

### 12.1 Transcript / CATALOG004 Reconciliation Addendum

The records below reconcile transcript-derived smart-home research and `docs/catalog/imports/catalog004/wnyhs_master_parts_records.jsonl` into this registry without changing existing HARDWARE001 status meanings. These rows are not purchasing authorization, public-copy authorization, pricing input, or customer BOM approval.

| Hardware / Manufacturer | Exact Model / Candidate | Purpose | Protocol / Integration Path | Dependencies / Required Accessories | Conservative HARDWARE001 Status | Solution Relationships | Verification Required Before BOM or Promotion |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Reolink Video Doorbell PoE | D340P | Front-door visitor, package-area, live-view, and doorbell-event awareness | Reolink local-network integration; optional RTSP/ONVIF/NVR path | PoE-capable network path, included chime, mounting hardware, optional NVR or SD storage | Conditional | Front Door Package Protection; Package Protection; Front Door Awareness; Snapshot Notifications; Entry Lighting Automation | Doorbell press exposure, motion/person/package event exposure, local-only behavior, RTSP/ONVIF stream, restart recovery, chime and notification workflow. |
| Reolink Video Doorbell WiFi | D340W | Retrofit front-door visitor and package-area awareness | Reolink local-network integration over Wi-Fi; optional RTSP/ONVIF/NVR path | Compatible low-voltage doorbell power, reliable Wi-Fi at mounting location, included chime | Conditional exact-model status; existing family-level HARDWARE001 row remains preserved until separately reconciled | Front Door Package Protection; Package Protection; Front Door Awareness; Snapshot Notifications; Entry Lighting Automation | Transformer/chime compatibility matrix, Wi-Fi resilience threshold, restart recovery, event exposure, notification workflow. |
| Reolink Battery Video Doorbell | D340B | Exception-path no-wiring visitor awareness | Reolink hub/NVR bridge path into Home Assistant; vendor app for setup and battery support | Supported Reolink Home Hub or NVR bridge path, charging plan, included chime | Pilot | Front Door Package Protection exception; retrofit/no-wiring exception | Required bridge architecture, battery wake/sleep behavior, event exposure, notification timing, restart recovery, battery-maintenance burden. |
| Ubiquiti UniFi Protect G4 Doorbell Pro PoE Kit | UVC-G4 Doorbell Pro PoE Kit | Premium entry video and package-area awareness inside a UniFi Protect architecture | UniFi Protect controller/NVR with Home Assistant UniFi Protect integration | UniFi Protect controller or NVR, PoE network path, included PoE chime | Premium / Custom | Premium Front Door Package Protection; Local Property Camera Package; custom light-commercial entry awareness | WNYHS Protect architecture standard, event/entity exposure, supported firmware policy, restart recovery, notification workflow. |
| Aqara Doorbell Camera G400 (Wired) | DB-C03E | Field-test wired/PoE doorbell candidate where Aqara, Apple, HomeKit, or Matter ecosystem fit may matter | Exact Home Assistant path unverified; likely Aqara ecosystem, HomeKit, Matter, or bridge/controller path | Compatible wiring or PoE path, included chime, defined ecosystem/controller path | Pilot | Front Door Package Protection pilot; ecosystem-specific custom path | Exact Home Assistant support, local-vs-cloud dependency, doorbell press event, live stream path, restart recovery, support-burden assessment. |

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
