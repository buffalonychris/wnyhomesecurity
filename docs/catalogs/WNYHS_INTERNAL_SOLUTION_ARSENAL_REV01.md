# WNYHS Internal Solution Arsenal REV01

Status: Active governed commercial-planning catalog

Task: `T-NEWSOLUTIONS001`

Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

Customer-facing: No

Implementation authority: No

## 1. Purpose and authority

This arsenal normalizes accepted WNYHS solution, capability, hardware, Home Assistant, dashboard, notification, and claims evidence into one commercial-planning index. It supports discovery, estimate preparation, SOW design, BOM consideration, and campaign selection. It does not replace the status owners named below and does not authorize source changes, customer configuration, purchasing, pricing, publication, or external-system operation.

The six public categories are controlled by `CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md`, in this exact order:

1. Home Security
2. Aging in Place
3. Home Safety
4. Home Automation
5. Home Lighting
6. Property Management

`Home Safety` is the public label. Environmental terminology may be an internal/search synonym only. Property Management is a discovery category, not an operational service commitment.

## 2. Owner and evidence chain

| Concern | Controlling evidence |
| --- | --- |
| Category identity | `CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md`; `SITEARCH005_WNYHS_SIX_CATEGORY_RECONCILIATION_DECISION_REV01.md` |
| Solution classification | `SOLUTION_CATALOG_RECONCILIATION_REV01.md`; `wnyhs_capability_catalog_rev03.md` |
| Public eligibility | `OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md` |
| Hardware status | `HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`; accepted `T-SMARTRESEARCH001` addenda |
| BOM posture | `PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md` |
| Claims | `AGENTS.md`; `guardrails.md`; `CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md` |
| Home Assistant behavior | `INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md`; `AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md` |
| Dashboard and notifications | `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`; `WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md` |

Evidence codes used below:

- `SOL`: reconciled solution owner.
- `CAP`: capability catalog REV03.
- `HW`: hardware registry.
- `SR`: accepted `T-SMARTRESEARCH001` enrichment.
- `CAT6`: six-category owner/reconciliation.
- `AUTO`, `DASH`, `NOTIFY`: current Home Assistant behavior owners.

## 3. Status and BOM rules

Solution status is one of `RESEARCH_CANDIDATE`, `INTERNAL_CAPABILITY`, `PILOT`, `APPROVED_INSTALL_OPTION`, `PUBLICLY_MARKETABLE_OFFERING`, or `CUSTOMER_SPECIFIC_EXCEPTION`. Public visibility is independently `PUBLIC_STANDARD`, `PUBLIC_CUSTOM`, `INTERNAL_ONLY`, or `HOLD`. BOM posture is `NOT_EVALUATED`, `CONSIDERATION`, `CONDITIONAL`, `APPROVED_INPUT`, or `EXCLUDED`.

No row promotes hardware. A public solution may describe an outcome without naming equipment. Exact equipment selection remains controlled by HARDWARE001, site conditions, and a later estimate/BOM process.

## 4. Arsenal index

| ID | Internal name | Plain-language customer name | Category | Family | Evidence | Status | Visibility | BOM | Campaign |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HS-001 | Front Door Package Awareness | Know what is happening at the front door | Home Security | Entry | SOL/CAP/HW/SR | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 1 |
| HS-002 | Entry and Opening Awareness | See doors and windows left open | Home Security | Openings | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 2 |
| HS-003 | Garage Door Status | Check whether the garage appears open | Home Security | Garage | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | CONDITIONAL | Evergreen |
| HS-004 | Smart Lock and Guest Access | Easier reviewed access for family and guests | Home Security | Access | SOL/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | CONDITIONAL | Wave 2 |
| HS-005 | Local Camera Property Awareness | Local-first views for selected property areas | Home Security | Video | SOL/CAP/HW | APPROVED_INSTALL_OPTION | PUBLIC_CUSTOM | CONDITIONAL | Evergreen |
| HS-006 | Driveway and Vehicle Awareness | Know sooner when a vehicle enters | Home Security | Perimeter | SOL/CAP/HW | PILOT | HOLD | CONSIDERATION | Hold |
| HS-007 | Detached Structure Awareness | Bring a garage, shop, or shed into view | Home Security | Outbuilding | SOL/SR/CAT6 | PILOT | PUBLIC_CUSTOM | CONDITIONAL | Hold |
| HS-008 | Local Video Notification Intelligence | Fewer, more useful camera alerts | Home Security | Video intelligence | SR/HW/NOTIFY | PILOT | PUBLIC_CUSTOM | CONDITIONAL | Hold |
| AIP-001 | Night Path Lighting | Gentle light for nighttime movement | Aging in Place | Accessible lighting | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 1 |
| AIP-002 | Entry and Exit Awareness | Simple household entry and exit updates | Aging in Place | Household awareness | SOL/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 2 |
| AIP-003 | Fixed Assistance Trigger | A simple in-home button to notify chosen people | Aging in Place | Assistance | SOL/HW/NOTIFY | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Evergreen |
| AIP-004 | Simplified Physical Controls | Everyday actions without app hunting | Aging in Place | Accessibility | SR/HW/AUTO | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 2 |
| AIP-005 | Comfort and Temperature Awareness | Easier-to-read room comfort updates | Aging in Place | Comfort | SOL/SR/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Evergreen |
| AIP-006 | Family Check-In Dashboard | A consent-aware household summary | Aging in Place | Dashboard | SOL/DASH | APPROVED_INSTALL_OPTION | PUBLIC_CUSTOM | CONDITIONAL | Evergreen |
| AIP-007 | Non-Medical Routine Awareness | Notice selected changes in daily routine | Aging in Place | Routine | SOL/SR/NOTIFY | PILOT | PUBLIC_CUSTOM | CONDITIONAL | Hold |
| AIP-008 | Room Presence Awareness | More responsive rooms without cameras | Aging in Place | Presence | SOL/SR/HW | PILOT | HOLD | CONSIDERATION | Hold |
| AIP-009 | Contextual Voice Confirmation | Hear a brief confirmation for selected actions | Aging in Place | Voice/accessibility | SR/AUTO | RESEARCH_CANDIDATE | HOLD | NOT_EVALUATED | Hold |
| HSF-001 | Water Leak Awareness | Know sooner when water is detected | Home Safety | Water | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 1 |
| HSF-002 | Freeze-Risk Awareness | See when selected spaces get unusually cold | Home Safety | Temperature | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 1 |
| HSF-003 | Basement and Utility Awareness | One view for basement and utility concerns | Home Safety | Utility | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 2 |
| HSF-004 | Humidity Awareness | See persistent humidity trends | Home Safety | Moisture | SOL/CAP/HW | APPROVED_INSTALL_OPTION | PUBLIC_STANDARD | APPROVED_INPUT | Evergreen |
| HSF-005 | Sump Area Awareness | Add practical status near a sump area | Home Safety | Sump | SOL/CAP/HW | APPROVED_INSTALL_OPTION | PUBLIC_STANDARD | CONDITIONAL | Evergreen |
| HSF-006 | Power and Freezer Awareness | Notice selected power or freezer concerns | Home Safety | Resilience | SOL/CAP/HW | PILOT | PUBLIC_CUSTOM | CONDITIONAL | Hold |
| HSF-007 | Reviewed Water Shutoff | Add a site-reviewed shutoff option | Home Safety | Water control | SOL/HW | CUSTOMER_SPECIFIC_EXCEPTION | PUBLIC_CUSTOM | CONDITIONAL | Hold |
| HSF-008 | Indoor Air Quality Awareness | See selected indoor air trends | Home Safety | Air | SR/HW | PILOT | PUBLIC_CUSTOM | CONSIDERATION | Hold |
| HSF-009 | Secondary Smoke/CO Awareness | Research path for secondary device status | Home Safety | Life-safety adjacency | SOL/HW | RESEARCH_CANDIDATE | HOLD | EXCLUDED | Hold |
| HA-001 | WNYHS Core Dashboard | One clear place to see supported systems | Home Automation | Core | SOL/DASH | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 1 |
| HA-002 | Cross-Brand Unification | Fewer apps for supported equipment | Home Automation | Integration | SOL/AUTO | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | CONDITIONAL | Wave 1 |
| HA-003 | Notification Routing | Put useful updates in the right hands | Home Automation | Notifications | SOL/NOTIFY | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | CONDITIONAL | Wave 2 |
| HA-004 | Home, Away, Night, and Vacation Modes | Change several routines with one choice | Home Automation | Modes | SOL/CAP/AUTO | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | CONDITIONAL | Wave 2 |
| HA-005 | Smart Plug Routines | Put suitable plug-in loads on useful routines | Home Automation | Plug control | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Evergreen |
| HA-006 | Arrival and Departure Routines | Let supported lights and modes follow arrivals | Home Automation | Presence/modes | SOL/CAP/AUTO | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | CONDITIONAL | Evergreen |
| HA-007 | Thermostat Vacation Setback | Review compatible thermostat setback routines | Home Automation | Climate | SOL/HW | APPROVED_INSTALL_OPTION | PUBLIC_CUSTOM | CONDITIONAL | Evergreen |
| HA-008 | Device Health Visibility | Find low batteries and offline devices faster | Home Automation | Service visibility | SR/DASH | APPROVED_INSTALL_OPTION | PUBLIC_CUSTOM | CONSIDERATION | Evergreen |
| HA-009 | Legacy IR/RF Integration | Bring selected remote-controlled equipment together | Home Automation | Legacy bridge | SR/HW | PILOT | HOLD | CONSIDERATION | Hold |
| HA-010 | Automated Floor-Care Integration | Research selected floor-care status and controls | Home Automation | Appliances | SR/HW | RESEARCH_CANDIDATE | HOLD | EXCLUDED | Hold |
| HL-001 | Smarter Everyday Lighting | Lighting routines that fit daily life | Home Lighting | Everyday lighting | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 1 |
| HL-002 | Entry Lighting Automation | Light the right entry at useful times | Home Lighting | Entry lighting | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Wave 2 |
| HL-003 | Exterior Visibility Lighting | Coordinate eligible exterior lighting | Home Lighting | Exterior | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | CONDITIONAL | Wave 2 |
| HL-004 | Garage and Workshop Lighting | Easier lighting for garages and work areas | Home Lighting | Work area | SOL/CAP/HW | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Evergreen |
| HL-005 | Family and Scene Lighting | One-touch scenes for common routines | Home Lighting | Scenes | SOL/CAP/HW/AUTO | PUBLICLY_MARKETABLE_OFFERING | PUBLIC_STANDARD | APPROVED_INPUT | Evergreen |
| HL-006 | Patio and Outdoor Living Scenes | Reviewed lighting scenes for outdoor living | Home Lighting | Outdoor living | SOL/CAP | APPROVED_INSTALL_OPTION | PUBLIC_CUSTOM | CONDITIONAL | Evergreen |
| HL-007 | Room-Aware Lighting | Lighting that reacts to reviewed room use | Home Lighting | Presence lighting | SR/HW/AUTO | PILOT | PUBLIC_CUSTOM | CONDITIONAL | Hold |
| HL-008 | Permanent Exterior Lighting | Site-designed permanent exterior scenes | Home Lighting | Specialty exterior | SOL/HW | CUSTOMER_SPECIFIC_EXCEPTION | PUBLIC_CUSTOM | CONDITIONAL | Hold |
| PM-001 | Remote Property Status | A practical summary for a second or seasonal property | Property Management | Remote property | CAP/SR/CAT6 | APPROVED_INSTALL_OPTION | PUBLIC_CUSTOM | CONDITIONAL | Wave 1 |
| PM-002 | Outbuilding Status | Add a detached structure to the property view | Property Management | Outbuildings | SR/CAT6 | CUSTOMER_SPECIFIC_EXCEPTION | PUBLIC_CUSTOM | CONDITIONAL | Wave 2 |
| PM-003 | Seasonal Freeze and Water Awareness | Keep selected seasonal-property risks visible | Property Management | Seasonal readiness | CAP/SR/CAT6 | APPROVED_INSTALL_OPTION | PUBLIC_CUSTOM | CONDITIONAL | Wave 1 |
| PM-004 | Reviewed Access Coordination | Coordinate supported access for approved users | Property Management | Access | SOL/CAT6 | PILOT | PUBLIC_CUSTOM | CONDITIONAL | Hold |
| PM-005 | Network and Power Resilience | Improve visibility during selected outages | Property Management | Resilience | SR/HW | CUSTOMER_SPECIFIC_EXCEPTION | PUBLIC_CUSTOM | CONDITIONAL | Hold |
| PM-006 | Irrigation Awareness | Review selected irrigation status and schedules | Property Management | Exterior systems | CAP/SR/HW | PILOT | HOLD | CONSIDERATION | Hold |
| PM-007 | Equipment Condition Awareness | Surface selected utility or equipment conditions | Property Management | Equipment | CAP/SR | PILOT | PUBLIC_CUSTOM | CONSIDERATION | Hold |
| PM-008 | Property Digest | Summarize selected property exceptions | Property Management | Summary | CAP/DASH/NOTIFY | INTERNAL_CAPABILITY | INTERNAL_ONLY | NOT_EVALUATED | Hold |
| PM-009 | Pet Water-Level Awareness | Research a refill reminder path | Property Management | Pet care | SR/HW | RESEARCH_CANDIDATE | HOLD | EXCLUDED | Hold |

## 5. Solution behavior records

The table below completes the operating fields for every arsenal row. “Notify” always means selected customer-approved recipients and channels under the notification standard.

| ID | Problem, outcome, and typical fit | Trigger/input -> Home Assistant behavior -> output/action | Dashboard / notification need | Hardware classes; named evidence; protocol | Local-first, dependencies, limitations, and claim boundary | Related solutions / operator note |
| --- | --- | --- | --- | --- | --- | --- |
| HS-001 | Deliveries and visitors are easy to miss; surface front-entry events for homes with a suitable entry. | Doorbell/contact/camera event -> validate event and mode -> view, recording path, or approved alert. | Entry card; useful-event alert. | Doorbell/camera; H-014/H-015; LAN, PoE or Wi-Fi. | Local where supported; internet needed off-site; event exposure and placement vary; awareness only. | HL-002, HA-003; exact variant requires site review. |
| HS-002 | Open doors/windows go unnoticed; show selected opening state for most homes. | Contact state/duration -> delay and mode rules -> status/reminder. | Openings summary; delayed reminder. | Contact sensor; H-010; Z-Wave. | Local; battery/radio dependent; does not establish secured condition. | HA-004, PM-001. |
| HS-003 | Customer wonders if garage is open; provide reviewed status. | Tilt/contact -> validate stable state -> dashboard/reminder. | Garage card; optional duration alert. | Contact/tilt sensor; conditional class; Z-Wave/Zigbee. | Local by device; fit and WNY temperature testing required; active control is separate. | PM-002, HA-004. |
| HS-004 | Shared access is hard to coordinate; support reviewed codes and status. | Lock/code/manual state -> access rules -> lock state and approved notification. | Lock card; selected access event. | Smart lock; H-013/H-020; Z-Wave or ecosystem path. | Local preferred; door fit, batteries, keys, permissions, and privacy apply. | AIP-004, PM-004. |
| HS-005 | Property views are fragmented; provide selected local-first camera views. | Camera stream/event -> recorder/integration -> live/history view. | Camera view; optional validated alert. | Camera/NVR; H-016/H-023; LAN/PoE/ONVIF/vendor integration. | Wiring, storage, retention, privacy, bandwidth, and off-site internet apply; no assured capture. | HS-008, PM-001. |
| HS-006 | Driveway arrivals are hard to notice; surface selected vehicle events. | Motion/camera/sensor -> geometry and cooldown -> alert/lighting cue. | Driveway card; optional alert. | Motion/camera/presence class; H-019/H-016. | Pilot due weather, headlights, geometry, and false events; no assured detection. | HL-003. |
| HS-007 | Detached structures are out of view; add selected states to the property system. | Contacts/cameras/environment -> link health and mode -> status/alert. | Outbuilding view; fault alert. | Sensors, AP/bridge, PoE, UPS; mixed local protocols. | Requires power/connectivity/weatherproofing; site-specific only. | PM-002, PM-005. |
| HS-008 | Camera alerts are noisy; prioritize validated event types. | Camera analytic event -> filters/cooldown/mode -> selected notification. | Event review; delivery health. | Camera/NVR/analytics; H-016/H-023/H-024. | Premium pilot; privacy, false positives, updates, and support burden apply. | HA-003. |
| AIP-001 | Dark nighttime paths are difficult; add gentle, manually overridable light. | Motion/presence/time -> suppression and scene -> low-level lights. | Mode/disable control; usually no alert. | Motion/contact, dimmer; H-005/H-019; Z-Wave/Zigbee. | Local; manual switches remain; placement and household acceptance apply; no injury-prevention claim. | HL-001, HL-007. |
| AIP-002 | Family wants simple entry/exit context; surface selected door changes. | Contact/lock state -> consent and quiet-hours rules -> status/selected update. | Household summary; selected notification. | Contact/lock; H-010/H-013. | Local preferred; consent and multi-person ambiguity apply; non-medical. | HS-002, AIP-006. |
| AIP-003 | A person needs an easy way to request attention in the home; notify chosen people. | Fixed button -> verify press/cooldown -> approved in-home or mobile notice. | Visible test/status; chosen notification. | Wall remote/button; H-008. | Local trigger; remote delivery needs internet; not an emergency or medical service. | AIP-004, HA-003. |
| AIP-004 | Apps are difficult for routine actions; provide labeled physical controls. | Button/keypad -> scene/script -> lights, mode, or approved action. | Control status; no routine alert. | H-007/H-008 and conditional remotes; Z-Wave/Lutron. | Local preferred; labels, fallback, batteries, and radio coverage apply. | HL-005, HA-004. |
| AIP-005 | Room comfort is hard to track; show selected temperatures clearly. | Temp/humidity -> threshold and persistence -> dashboard/notice. | Large-readable comfort card; selected notice. | H-004; Z-Wave. | Local; placement/accuracy matter; no health or HVAC-performance claim. | HSF-002, HA-007. |
| AIP-006 | Family needs a concise shared view; show consent-approved exceptions. | Selected entities -> status hierarchy -> simple summary. | Customer dashboard; notification links only. | Existing sensors and dashboard device class. | Local dashboard; off-site use needs internet; roles, consent, and privacy must be documented. | AIP-002, AIP-007. |
| AIP-007 | Routine changes may matter; identify selected deviations without cameras where possible. | Contacts/motion -> time windows and baseline -> gentle check-in. | Trend/exception view; chosen notice. | Contact/motion/presence classes. | Pilot; consent, quiet hours, visitors, and false inference apply; non-medical. | AIP-006, AIP-008. |
| AIP-008 | Motion alone is coarse; evaluate room presence for smoother behavior. | mmWave/presence -> tuning and hold time -> room state. | Installer tuning plus customer status. | H-021/H-025; Wi-Fi/Zigbee/ESPHome paths. | Pilot; privacy, false presence, placement, and support burden. | HL-007. |
| AIP-009 | Visual confirmation may be inconvenient; research brief spoken confirmations. | Approved event -> priority/quiet-hours -> local or ecosystem voice. | Enable/disable; delivery diagnostics. | Voice endpoint class; model not approved. | Cloud/local varies; privacy and noise concerns; research only. | HA-003. |
| HSF-001 | Small leaks may go unseen; surface water at selected points sooner. | Water sensor -> validate wet state -> status and alert. | Water summary; high-priority selected alert. | H-003; Z-Wave. | Local sensing; remote delivery needs internet; coverage is limited to selected points. | HSF-005, PM-003. |
| HSF-002 | Cold spaces can become risky; show selected low-temperature trends. | Temperature -> duration threshold -> risk notice. | Temperature card; threshold alert. | H-004; Z-Wave. | Local; placement and power/network continuity apply; awareness does not prevent freezing. | PM-003, AIP-005. |
| HSF-003 | Basement signals are scattered; combine selected water, temperature, and humidity. | Multiple sensors -> area summary -> exception card/alert. | Utility overview; exception alerts. | H-003/H-004. | Local; only installed points are represented; site conditions vary. | HSF-004/005. |
| HSF-004 | Persistent humidity is hard to see; present trends and thresholds. | Humidity -> trend/persistence -> dashboard/reminder. | Trend card; optional notice. | H-004. | Local; not a mold assessment or certified measurement. | HSF-003/008. |
| HSF-005 | Sump areas need practical awareness; surface nearby water or reviewed pump clues. | Leak or approved power clue -> persistence -> status/alert. | Sump card; selected alert. | H-003; H-022 only in pilot. | Sensor placement and pump type matter; no assured pump-failure identification. | HSF-001/006. |
| HSF-006 | Freezer or power conditions may go unnoticed; pilot selected signals. | Temp/power/UPS -> persistence and recovery -> alert/restored notice. | Resilience view; alert and recovery. | H-022/H-026/H-027; Z-Wave/BLE/ESPHome. | Pilot; outage communications depend on backed-up network and internet; no uptime promise. | PM-005. |
| HSF-007 | Customer wants reviewed shutoff capability; add it only where valve/site fit. | Leak/manual command -> confirmation/safety logic -> actuator state. | Valve card and manual control; selected alert. | H-024; Z-Wave. | Custom; accessible compatible valve, manual fallback, plumbing/site review; no damage-prevention claim. | HSF-001. |
| HSF-008 | Indoor air trends are unclear; pilot selected CO2/particle/VOC/humidity readings. | IAQ sensor -> validated thresholds -> trend/notice. | Trend view; optional notice. | IAQ sensor class; exact model pending. | Calibration, placement, vendor path, and interpretation vary; not a health assessment. | HSF-004. |
| HSF-009 | Existing detector status may be technically exposable; keep secondary path in research. | Existing detector interface -> validation -> secondary status only. | Internal research only. | H-028; dry-contact/Z-Wave candidate. | Excluded from customer BOM pending dedicated code/liability authority; never replaces required devices. | None; hold. |
| HA-001 | Supported systems are scattered; provide one understandable daily-use view. | HA entities -> audience/status rules -> customer dashboard. | Core customer dashboard. | H-001/H-002 plus installed devices; Ethernet/Z-Wave. | Local control plane; remote access needs internet; scope reflects installed supported systems only. | All approved solutions. |
| HA-002 | Customers juggle apps; unify supported integrations where practical. | Supported integrations -> normalized entities/scenes -> shared controls. | Core dashboard; integration health. | HA Core plus conditional bridges. | Compatibility is model-specific; vendor accounts/cloud disclosed; no universal compatibility claim. | HA-001/008. |
| HA-003 | Too many alerts become noise; route useful events by priority and preference. | Approved event -> mode, quiet-hours, cooldown, recipient rules -> notification. | Notification settings/health. | HA Companion and approved channels. | Remote delivery depends on network/service; customer profile and validation required. | HS-008, AIP-003. |
| HA-004 | Many routines need coordinated state; expose clear household modes. | Customer mode choice -> governed scenes/automations -> selected device behavior. | Persistent mode control. | HA helpers/scenes; installed hardware. | Local; manual override and recovery required; behavior limited to configured devices. | HA-006, HL-005. |
| HA-005 | Suitable plug-in loads need simple schedules or modes. | Time/mode/button -> rating checks -> plug state. | Plug card/manual override. | H-009; Z-Wave. | Local; rated indoor loads only; not for high-risk or large-appliance use. | HL-005. |
| HA-006 | Arrival/departure involves repeated steps; coordinate supported modes and lights. | Approved presence/button/lock event -> confidence and delay -> scene/mode. | Mode and temporary-disable controls. | Existing sensors/locks/lighting. | Local logic; presence confidence and household acceptance vary; manual control remains. | HA-004, HL-002. |
| HA-007 | Vacation setbacks are repetitive; review compatible thermostat routines. | Mode/time -> bounds and manual intent -> thermostat setpoint. | Climate card/override. | H-018/H-029; vendor integration. | HVAC/model compatibility and cloud role vary; no savings or performance claim. | AIP-005. |
| HA-008 | Support issues hide in device lists; surface offline and low-battery exceptions. | Device health -> persistence/priority -> service view/customer-safe notice. | Service dashboard; maintenance notice. | Existing entity data. | Local; accuracy depends on integration reporting; does not create a proactive service commitment. | PM-008. |
| HA-009 | Legacy equipment uses remotes; pilot selected bridge control. | Button/scene -> learned command -> IR/RF action. | Custom control and fallback note. | H-030; Wi-Fi/LAN. | Pilot; line of sight, learning reliability, setup path, and manual remote fallback apply. | HL-005. |
| HA-010 | Floor-care devices may expose useful status; research supported paths. | Vendor integration -> status/approved commands -> dashboard. | Internal research view. | H-031; Wi-Fi/vendor cloud likely. | Research only; cloud, maintenance, consumables, maps, and privacy unresolved. | PM-008. |
| HL-001 | Lighting is inconsistent; create simple schedules/scenes with manual control. | Time/button/mode -> scene -> eligible lights. | Lighting view/manual override. | H-005/H-006/H-009; Z-Wave. | Local; circuit/load compatibility and electrical review required. | HA-004/005. |
| HL-002 | Entries are dark at useful moments; coordinate eligible entry lights. | Door/motion/time -> quiet/suppression rules -> lights. | Entry lighting control. | H-006/H-019; Z-Wave. | Local; existing circuit and nuisance behavior reviewed; no security-outcome claim. | HS-001. |
| HL-003 | Exterior areas need more usable visibility; coordinate reviewed circuits. | Motion/time/mode -> cooldown -> exterior lights. | Exterior lighting control. | H-006/H-019; Z-Wave. | Weather, circuit, fixture, and false-trigger review; no crime-prevention claim. | HS-006. |
| HL-004 | Garage/work area lighting is awkward; automate eligible loads with override. | Door/motion/button -> timeout -> lights. | Area card/manual switch. | H-006/H-019. | Local; electrical/load compatibility and manual operation required. | PM-002. |
| HL-005 | Repeated lighting setups take effort; create customer-readable scenes. | Button/dashboard/mode -> scene -> grouped lighting. | Scene buttons and status. | H-007/H-008 and lighting controls. | Local preferred; manual intent and fallback preserved. | AIP-004, HA-004. |
| HL-006 | Outdoor living uses repeated setups; coordinate reviewed patio lighting. | Button/time -> scene -> eligible outdoor controls. | Patio scene control. | Conditional exterior-rated control class. | Site and electrical review; weather-rated equipment; no savings claim. | HL-005. |
| HL-007 | Timers do not reflect actual room use; pilot presence-driven lighting. | Presence -> hold/suppression -> lighting scene. | Disable/tuning control. | H-021/H-025 plus H-005/H-006. | Pilot; tuning, privacy, false triggers, and household acceptance. | AIP-001/008. |
| HL-008 | Customer wants permanent decorative exterior lighting; design custom scope. | Time/scene/customer choice -> controller -> exterior system. | Custom scene controls. | H-032; vendor-specific. | Roofline, power injection, weatherproofing, access, vendor, and service burden require site design. | HL-006. |
| PM-001 | Remote/seasonal property status is fragmented; summarize selected exceptions. | Sensors/cameras/device health -> mode and persistence -> overview/alert. | Property overview; selected alerts. | Existing approved/conditional classes. | Local property control; off-site viewing needs internet; not human property oversight. | PM-003/005. |
| PM-002 | Detached assets lack shared visibility; connect selected outbuilding signals. | Structure sensors -> network health -> status/alert. | Outbuilding view. | Sensors, cameras, point-to-point link, PoE/UPS. | Custom connectivity/power/weather design; roles and access remain human-owned. | HS-007. |
| PM-003 | Seasonal freeze/water concerns need one plan; combine selected sensors. | Water/temp -> seasonal mode and thresholds -> status/alerts. | Seasonal property card. | H-003/H-004. | Local; off-site notification depends on internet; limited to installed points. | HSF-001/002. |
| PM-004 | Multiple approved users need access coordination; review roles and codes. | Lock/code/time window -> role rules -> access state/notice. | Access view; selected event. | H-013/H-020. | Pilot because role, tenancy, privacy, recordkeeping, and revocation owners are unresolved. | HS-004. |
| PM-005 | Outages can hide property state; design selected network/power resilience. | UPS/network/power entities -> persistence -> health/recovery status. | Infrastructure view; alert/recovery. | UPS/PoE/network classes; model-specific. | Custom; no uptime outcome; internet loss limits off-site delivery. | HSF-006. |
| PM-006 | Irrigation status is hard to review; pilot supported controllers. | Schedule/weather/controller -> bounded rules -> status/control. | Irrigation view/manual override. | H-033; vendor/local path varies. | Pilot; winterization, backflow, zones, weather, and vendor dependency. | PM-001. |
| PM-007 | Equipment conditions are scattered; surface selected temperature/power/state. | Approved sensor -> thresholds -> exception status. | Equipment view; selected alert. | Temp, contact, approved plug/relay class. | Pilot; equipment-specific ratings and fallback; no failure-prevention claim. | HSF-003/006. |
| PM-008 | Too much data obscures exceptions; prepare a concise internal digest pattern. | Selected entity summaries -> exception-first rules -> digest candidate. | Operator/service view. | Existing HA data only. | Internal capability; delivery channel, privacy, frequency, and owner approval unresolved. | HA-008. |
| PM-009 | Pet water may be missed; research a reliable refill cue. | Level/weight sensor -> persistence -> reminder candidate. | Research only. | H-034 class; model unknown. | Research only; waterproofing, false readings, power, cleaning, and animal-safety claims unresolved. | None. |

## 6. Hardware reconciliation snapshot

This snapshot records only named products used as evidence by this arsenal. HARDWARE001 remains the status owner. Part numbers are repeated only when established; otherwise the model identifier is used. “Substitution” means a future estimate may choose an equal-status alternative only after owner review.

| ID | Manufacturer / exact model / part | Class and purpose | Supported solution IDs | Protocol, power, HA path, and required accessories | Limitations, privacy/security, and customer restrictions | Evidence | Status | BOM | Substitution / validation still required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H-001 | Nabu Casa Home Assistant Green / NC-GREEN-1175 | Controller; WNYHS Core | HA-001-008 and linked solutions | Ethernet; mains/USB-C supply; Home Assistant; separate radio | No built-in radio; network, backups, updates, and credentials remain controlled | HW | APPROVED | APPROVED_INPUT | Default; validate network, backup, recovery. |
| H-002 | Nabu Casa Home Assistant Connect ZWA-2 / ZWA-2 | Z-Wave radio | Sensor, lock, lighting rows | USB; Z-Wave JS; suitable placement/extension as needed | RF placement, inclusion, firmware, and recovery testing | HW | APPROVED | APPROVED_INPUT | Default Z-Wave path; validate range. |
| H-003 | Zooz Water Leak XS / ZSE42 | Leak sensor | HSF-001/003/005, PM-003 | Z-Wave; battery; ZWA-2 | Point coverage, battery, placement, wet/dry test | HW | APPROVED | APPROVED_INPUT | Equal approved sensor only after registry review. |
| H-004 | Zooz Temp/Humidity XS / ZSE44 | Temp/humidity sensor | AIP-005, HSF-002-004, PM-003/007 | Z-Wave; battery; ZWA-2 | Placement, calibration tolerance, reporting interval | HW | APPROVED | APPROVED_INPUT | Equal approved sensor after validation. |
| H-005 | Zooz 800LR Dimmer / ZEN77 | In-wall dimmer | AIP-001, HL-001/002/005/007 | Z-Wave; line power; ZWA-2 | Circuit/load/neutral/electrical review; manual operation | HW | APPROVED | APPROVED_INPUT | Model-specific electrical fit. |
| H-006 | Zooz 800LR Switch / ZEN71 | In-wall switch | HL-001-004 | Z-Wave; line power; ZWA-2 | Load and circuit fit; exterior loads need separate review | HW | APPROVED | APPROVED_INPUT | Model-specific electrical fit. |
| H-007 | Zooz Scene Controller / ZEN32 | Wall scene control | AIP-004, HA-004, HL-005 | Z-Wave; line power; ZWA-2 | Labels, event mapping, manual fallback | HW | APPROVED | APPROVED_INPUT | Validate scene events and recovery. |
| H-008 | Zooz Wall Remote / ZEN37 | Fixed button/remote | AIP-003/004, HL-005 | Z-Wave; battery; ZWA-2 | Not for emergency-service use; battery/range/test process | HW | APPROVED | APPROVED_INPUT | Validate press patterns and recipient path. |
| H-009 | Zooz 800LR Smart Plug / ZEN04 | Plug control | HA-005, HL-001/005 | Z-Wave; line power; ZWA-2 | Rated indoor plug-in loads only; customer must retain manual path | HW | APPROVED | APPROVED_INPUT | Validate load and restore state. |
| H-010 | Zooz Contact Sensor / ZSE41 | Opening sensor | HS-002/003, AIP-002, PM-002 | Z-Wave; battery; ZWA-2 | Mount, magnet gap, temperature, battery, tamper expectations | HW | APPROVED | APPROVED_INPUT | Validate each opening. |
| H-013 | Kwikset Home Connect 620 | Smart lock | HS-004, PM-004 | Z-Wave; battery; ZWA-2; keyed/manual fallback | Door prep, handing, codes, battery, rekey, permissions | HW | APPROVED | CONDITIONAL | Door qualification required. |
| H-014 | Reolink Video Doorbell PoE / D340P | Doorbell camera | HS-001 | Ethernet/PoE; Reolink LAN integration; chime, mount, optional storage | Event/entity exposure, retention, privacy, firmware, restart | SR/HW | CONDITIONAL | CONDITIONAL | Validate exact events, stream, chime, recovery. |
| H-015 | Reolink Video Doorbell WiFi / D340W | Doorbell camera | HS-001 | Wi-Fi plus compatible low-voltage power; Reolink integration; chime | Transformer/chime fit, Wi-Fi strength, privacy, event exposure | SR/HW | CONDITIONAL | CONDITIONAL | Exact-model status remains conservative. |
| H-016 | Reolink CX410 | Exterior camera | HS-005/006/008 | PoE/LAN; Reolink/RTSP/ONVIF path; mount/storage | View, lighting, privacy, retention, network, firmware | HW | APPROVED | CONDITIONAL | Site camera design required. |
| H-018 | ecobee thermostat family | Thermostat | HA-007 | Wi-Fi/vendor integration; HVAC power/wiring | HVAC fit, account/cloud role, manual fallback, privacy | HW | CONDITIONAL | CONDITIONAL | Exact model and HVAC validation. |
| H-019 | Zooz Outdoor Motion / ZSE70 | Outdoor motion | HS-006, HL-002/003 | Z-Wave; battery/USB by configuration; ZWA-2 | WNY weather, placement, nuisance events, range | HW | CONDITIONAL | CONDITIONAL | Field test before standard use. |
| H-020 | Yale Assure Lock 2 Touch Z-Wave | Smart lock alternative | HS-004, PM-004 | Z-Wave; battery; ZWA-2 | Exact module, door fit, codes, battery, privacy | HW | CONDITIONAL | CONDITIONAL | Substitution only after door/ecosystem review. |
| H-021 | Aqara FP2 | Presence sensor | AIP-008, HL-007 | Wi-Fi/HomeKit/Aqara path; USB power | Zones, privacy, false presence, ecosystem, restart | HW/SR | PILOT | CONSIDERATION | Controlled pilot only. |
| H-022 | Zooz Heavy Duty Appliance Switch / ZEN15 | Power/activity clue | HSF-005/006, PM-007 | Z-Wave; line power; ZWA-2 | Plug-in rated loads only; inrush and nuisance logic | HW | PILOT | CONDITIONAL | Controlled pump/freezer pilot only. |
| H-023 | Reolink RLN8-410 | NVR | HS-005/008 | PoE/LAN; Reolink integration; drives/cameras | Storage sizing, retention, privacy, firmware, support | HW | CONDITIONAL | CONDITIONAL | Custom/site-reviewed only. |
| H-024 | Zooz Titan Valve Actuator / ZAC36 | Valve actuator | HSF-007 | Z-Wave; line power; ZWA-2; compatible accessible valve | Valve fit, manual fallback, plumbing/site access, test cadence | HW | CONDITIONAL | CONDITIONAL | Customer-specific only. |
| H-025 | Apollo MSR-2 | ESPHome multisensor | AIP-008, HL-007 | Wi-Fi/ESPHome; USB power | Placement, false presence, firmware, support burden | HW | PILOT | CONSIDERATION | Controlled pilot only. |
| H-026 | Govee H5075 | Temp/humidity pilot | HSF-006 | BLE; battery; HA Bluetooth/proxy | Freezer performance, range, scanning, battery | HW | PILOT | CONSIDERATION | No standard customer BOM until field evidence. |
| H-027 | DS18B20 + ESPHome node | Probe temperature pattern | HSF-006 | Wired probe; powered ESPHome node; enclosure | Build standard, condensation, cable, power, support | HW | PILOT | CONSIDERATION | Controlled custom pilot. |
| H-028 | Zooz DC Signal Sensor / ZEN55 | Secondary detector interface research | HSF-009 | Z-Wave/dry-contact concept | Code/liability, wiring, detector compatibility, false state | HW | RESEARCH_ONLY | EXCLUDED | Dedicated authority required before reconsideration. |
| H-029 | Google Nest thermostat family | Thermostat exception | HA-007 | Wi-Fi/vendor cloud integration | Cloud/account dependency, exact model/API, HVAC fit | HW | CONDITIONAL | CONDITIONAL | Existing-system exception only. |
| H-030 | BroadLink RM family | IR/RF bridge | HA-009 | Wi-Fi/LAN; HA Broadlink path; power | Setup/cloud role, learning, line of sight, RF support | SR/HW | PILOT | CONSIDERATION | Exact model and commands must be tested. |
| H-031 | Roborock platform, exact model TBD | Floor-care candidate | HA-010 | Wi-Fi/vendor integration | Cloud, maps, privacy, maintenance, consumables | SR/HW | RESEARCH_ONLY | EXCLUDED | No customer BOM. |
| H-032 | Permanent exterior lighting ecosystem, vendor TBD | Exterior specialty system | HL-008 | Vendor-specific controller/power | Roofline, weather, power injection, access, support | HW | CONDITIONAL | CONDITIONAL | Site-designed custom path only. |
| H-033 | Irrigation controller, exact model TBD | Irrigation candidate | PM-006 | Vendor/local integration varies; line power/zone wiring | Winterization, backflow, weather, zones, cloud role | SR/HW | PILOT | CONSIDERATION | Exact platform and field test required. |
| H-034 | Pet water sensor, exact model TBD | Water-level candidate | PM-009 | Unknown | Waterproofing, cleaning, false readings, power | SR | RESEARCH_ONLY | EXCLUDED | No named product or customer use yet. |
| H-035 | Ring camera/doorbell ecosystem | Cloud-first video ecosystem | None | Vendor cloud/app | Recurring service and cloud dependency conflict with default posture | HW | REJECTED | EXCLUDED | Not a standard substitution. |
| H-036 | myQ-dependent garage path | Proprietary garage path | None | Vendor cloud | Interoperability instability and vendor dependency | HW | REJECTED | EXCLUDED | Not a standard garage path. |

Hardware count in this snapshot: 33 records — `APPROVED` 12; `CONDITIONAL` 9; `PILOT` 7; `RESEARCH_ONLY` 3; `LEGACY_SUPPORTED` 0; `REJECTED` 2. No row is elevated beyond owner evidence.

## 7. Commercial readiness summary

| Measure | Count |
| --- | ---: |
| Total solution records | 53 |
| PUBLICLY_MARKETABLE_OFFERING | 23 |
| APPROVED_INSTALL_OPTION | 9 |
| PILOT | 12 |
| CUSTOMER_SPECIFIC_EXCEPTION | 4 |
| INTERNAL_CAPABILITY | 1 |
| RESEARCH_CANDIDATE | 4 |
| APPROVED_INPUT BOM posture | 17 |
| CONDITIONAL BOM posture | 24 |
| CONSIDERATION BOM posture | 7 |
| NOT_EVALUATED BOM posture | 2 |
| EXCLUDED BOM posture | 3 |

The catalog applies no arbitrary maximum. It consolidates materially distinct customer problems and avoids superficial duplicates. Future evidence may add records through a bounded revision.

## 8. Evidence gaps and promotion gates

- Doorbell event exposure, storage, chime behavior, restart recovery, and exact variant identity remain model-specific.
- Presence, vehicle, video intelligence, IAQ, irrigation, freezer, legacy bridge, and equipment-condition paths require controlled field evidence.
- Property Management role, permission, tenancy, privacy, recordkeeping, and operational-responsibility owners remain unresolved.
- Camera retention/privacy and cross-cutting network/power resilience lack single promoted owner documents.
- Notification delivery requires an approved customer profile and live validation.
- Public destination routes, category-source reconciliation, SEO, search, analytics ownership, and website implementation require separate tasks.
- Pricing, purchasing, customer BOMs, and customer-specific Home Assistant work are not authorized here.

## 9. Protected-system boundary

This document defines only classifications and recommendations. It makes no source/runtime changes and authorizes no CRM, payment, scheduling, email, Cloudflare, Home Assistant customer-instance, purchasing, inventory, pricing, or external-platform action. Future lead capture remains at the existing estimate/contact path and protected `/api/lead-signal` boundary. Scheduling remains request-based and operator-confirmed.
