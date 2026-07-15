# WNYHS New Solutions Commercial Traceability Matrix REV01

Status: Active documentation trace; no runtime implementation

Task: `T-NEWSOLUTIONS001`

## 1. Purpose

This matrix proves the governed commercial chain for every entry in `WNYHS_CUSTOMER_SOLUTION_CATALOG_REV01.md`:

`Internal classification -> customer catalog -> approved or future destination -> campaign selection -> CTA -> existing intake boundary -> estimate/sales follow-up`

No row changes a route, form, event, payload, CRM record, schedule, or external campaign. Hardware status is summarized from HARDWARE001 and the internal arsenal snapshot; exact selection remains estimate-specific.

## 2. Matrix

| Internal solution ID | Public catalog entry | Website category | Hardware status | BOM posture | Campaign wave | Video asset | CTA destination | Lead signal | Estimate/Sales next step |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HS-001 | Front Door & Package Awareness | Home Security | Approved camera family plus Conditional exact doorbell variants | APPROVED_INPUT | Wave 1 | C01 | `/categories/home-security` -> existing estimate CTA | Existing contact submission through `/api/lead-signal`; no new event | Entry, power, network, privacy, storage, and feature review |
| HS-002 | Door & Window Awareness | Home Security | Approved contact sensor | APPROVED_INPUT | Wave 2 | Future | `/categories/home-security` -> existing estimate CTA | Existing protected intake | Select openings, placement, reminder timing, and recipient review |
| HS-003 | Garage Door Status | Home Security | Conditional exact sensor after field fit | CONDITIONAL | Evergreen | Future | `/categories/home-security` -> existing estimate CTA | Existing protected intake | Garage/opener/site review; status-only baseline |
| HS-004 | Smart Lock & Guest Access | Home Security | Approved default lock; Conditional alternatives | CONDITIONAL | Wave 2 | Future | `/categories/home-security` -> existing estimate CTA | Existing protected intake | Door prep, handing, key/code, role, privacy, and battery review |
| HS-005 | Local-First Camera Views | Home Security | Approved/Conditional cameras; Conditional custom NVR | CONDITIONAL | Evergreen | Future | `/categories/home-security` -> existing estimate CTA | Existing protected intake | View, cabling, network, storage, retention, privacy, and support review |
| AIP-001 | Night Path Lighting | Aging in Place | Approved dimmer/switch; Pilot presence paths excluded from baseline | APPROVED_INPUT | Wave 1 | C03 | `/categories/aging-in-place` -> existing estimate CTA | Existing protected intake | Route, circuit, brightness, timing, sensor, and manual-control review |
| AIP-002 | Entry & Exit Awareness | Aging in Place | Approved contacts/lock path | APPROVED_INPUT | Wave 2 | Future | `/categories/aging-in-place` -> existing estimate CTA | Existing protected intake | Consent, selected openings, recipients, quiet hours, and test plan |
| AIP-003 | Simple Assistance Button | Aging in Place | Approved fixed button | APPROVED_INPUT | Evergreen | Future | `/categories/aging-in-place` -> existing estimate CTA | Existing protected intake | Button location, selected recipients, channel availability, and live test |
| AIP-004 | Easy Physical Controls | Aging in Place | Approved scene controls; Conditional ecosystem controls | APPROVED_INPUT | Wave 2 | Future | `/categories/aging-in-place` -> existing estimate CTA | Existing protected intake | Actions, labels, locations, radio coverage, and fallback review |
| AIP-005 | Comfort Awareness | Aging in Place | Approved temperature/humidity sensor | APPROVED_INPUT | Evergreen | Future | `/categories/aging-in-place` -> existing estimate CTA | Existing protected intake | Rooms, placement, thresholds, readability, and recipient review |
| HSF-001 | Water Leak Awareness | Home Safety | Approved leak sensor | APPROVED_INPUT | Wave 1 | C02 | `/categories/home-safety` -> existing estimate CTA | Existing protected intake | Select sensor points, network/radio, notification, and follow-up plan |
| HSF-002 | Freeze-Risk Awareness | Home Safety | Approved temperature sensor | APPROVED_INPUT | Wave 1 | C02 | `/categories/home-safety` -> existing estimate CTA | Existing protected intake | Select cold spaces, placement, duration thresholds, and follow-up plan |
| HSF-003 | Basement & Utility Awareness | Home Safety | Approved water and temperature/humidity classes | APPROVED_INPUT | Wave 2 | Future | `/categories/home-safety` -> existing estimate CTA | Existing protected intake | Area walkthrough and combined dashboard/notification scope |
| HSF-004 | Humidity Awareness | Home Safety | Approved humidity sensor | APPROVED_INPUT | Evergreen | Future | `/categories/home-safety` -> existing estimate CTA | Existing protected intake | Placement, trend/threshold, disclosure, and maintenance review |
| HSF-005 | Sump Area Awareness | Home Safety | Approved water sensor; power clue remains Pilot | CONDITIONAL | Evergreen | Future | `/categories/home-safety` -> existing estimate CTA | Existing protected intake | Sump type, safe sensor position, optional pilot clue, and follow-up plan |
| HA-001 | WNYHS Core Dashboard | Home Automation | Approved controller/radio baseline | APPROVED_INPUT | Wave 1 | C04 | `/categories/home-automation` -> existing estimate CTA | Existing protected intake | Supported-system inventory, dashboard class, network, backup, and access review |
| HA-002 | Supported Device Unification | Home Automation | Model-specific Approved/Conditional/Pilot mix | CONDITIONAL | Wave 1 | C04 | `/categories/home-automation` -> existing estimate CTA | Existing protected intake | Exact model/integration inventory and local/cloud/support classification |
| HA-003 | Smarter Notification Routing | Home Automation | Uses installed approved events/channels; profile approval required | CONDITIONAL | Wave 2 | C04 support | `/categories/home-automation` -> existing estimate CTA | Existing protected intake | Event purpose, priority, quiet hours, recipients, cooldown, recovery, live test |
| HA-004 | Home, Away, Night & Vacation Modes | Home Automation | Uses supported installed devices | CONDITIONAL | Wave 2 | Future | `/categories/home-automation` -> existing estimate CTA | Existing protected intake | Mode definitions, manual override, competing priority, and acceptance review |
| HA-005 | Smart Plug Routines | Home Automation | Approved rated indoor smart plug | APPROVED_INPUT | Evergreen | Future | `/categories/home-automation` -> existing estimate CTA | Existing protected intake | Load rating, restore behavior, schedule/scene, and manual path review |
| HL-001 | Smarter Everyday Lighting | Home Lighting | Approved switches/dimmers/plugs | APPROVED_INPUT | Wave 1 | C05 | `/categories/home-lighting` -> existing estimate CTA | Existing protected intake | Circuit/load/neutral review, scenes, labels, manual control, electrical scope |
| HL-002 | Entry Lighting | Home Lighting | Approved controls; Conditional outdoor motion | APPROVED_INPUT | Wave 2 | C01 support | `/categories/home-lighting` -> existing estimate CTA | Existing protected intake | Entry circuit, trigger, time window, cooldown, and override review |
| HL-003 | Exterior Visibility Lighting | Home Lighting | Approved eligible switch plus Conditional sensor/site path | CONDITIONAL | Wave 2 | Future | `/categories/home-lighting` -> existing estimate CTA | Existing protected intake | Circuit/fixture/weather/site review and customer-use scenario |
| HL-004 | Garage & Workshop Lighting | Home Lighting | Approved eligible switch/control | APPROVED_INPUT | Evergreen | Future | `/categories/home-lighting` -> existing estimate CTA | Existing protected intake | Circuit/load, entry/motion/button trigger, timeout, and manual-control review |
| HL-005 | One-Touch Lighting Scenes | Home Lighting | Approved scene controls and lighting controls | APPROVED_INPUT | Evergreen | C05 support | `/categories/home-lighting` -> existing estimate CTA | Existing protected intake | Scene names, devices, controls, mode relationships, and acceptance review |
| PM-001 | Remote Property Status | Property Management | Approved/Conditional mix selected by property | CONDITIONAL | Wave 1 | C06 | Existing `/contact?vertical=home-security` until approved category destination exists | Existing protected intake; no new property payload | Property/structure, selected exceptions, internet, roles, and follow-up discovery |
| PM-002 | Outbuilding Awareness | Property Management | Conditional/custom connectivity and sensor mix | CONDITIONAL | Wave 2 | Future | Existing contact path until approved category destination exists | Existing protected intake | Structure, distance, power, network, weather, access, and supported-signal review |
| PM-003 | Seasonal Freeze & Water Awareness | Property Management | Approved water/temp classes; system path Conditional | CONDITIONAL | Wave 1 | C02/C06 | Existing contact path until approved category destination exists | Existing protected intake | Seasonal mode, selected points, thresholds, connectivity, recipients, follow-up |
| PM-004 | Reviewed Access Coordination | Property Management | Approved/Conditional lock; overall pattern Pilot | CONDITIONAL | Hold | None until promotion | Existing contact path only as custom inquiry | Existing protected intake; no automated role workflow | Door fit, roles, permissions, code lifecycle, privacy, and recordkeeping decision |
| PM-005 | Network & Power Resilience Review | Property Management | Conditional/custom infrastructure; exact models site-specific | CONDITIONAL | Hold | C06 context only; not a standalone offer | Existing contact path only as custom inquiry | Existing protected intake | Network/power site assessment, selected recovery goals, and human follow-up plan |

## 3. Public-entry gate confirmation

- 30 customer-facing entries trace to 30 internal solution records.
- Category counts are exactly five entries each across the six canonical categories.
- No customer-facing entry has `RESEARCH_CANDIDATE` status.
- `PM-004` is retained as a clearly labeled custom/pilot catalog possibility only because the customer catalog explicitly requires role review; it is excluded from active campaign promotion.
- Every named hardware reference resolves to the internal arsenal hardware snapshot and HARDWARE001; public card copy does not name products.
- Campaign assets C01-C06 use only Wave 1 records or clearly identified supporting records.

## 4. Destination readiness

The five existing category destinations are recommendations subject to final page/copy review. Property Management has no implemented category route on current `main`; use the existing contact destination until a separate task implements and approves `/categories/property-management` with content, metadata, sitemap, public search, navigation/footer, and tests.

No campaign may publish with a dead, placeholder, private, internal, or unclassified destination.

## 5. Attribution and lead boundary

Recommended UTM values live in the asset pack and remain planning-only. View/click data is directional. Submitted estimate correlation remains under the existing server `requestId` and `/api/lead-signal` contracts. No row authorizes a new analytics SDK, CRM property, API event, form field, automated owner assignment, or scheduling behavior.

## 6. Protected-system confirmation

This matrix performs no CRM write, payment action, calendar action, email send, social action, Home Assistant change, source change, or deployment change. Estimate and sales steps are human/process recommendations constrained by the current protected contracts.
