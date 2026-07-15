# WNYHS Customer Solution Catalog REV01

Status: Approved content specification; not implemented

Task: `T-NEWSOLUTIONS001`

Customer-facing source set: Yes, after separate copy and implementation approval

## 1. Purpose

This catalog translates approved internal solution records into a plain-language, mobile-first discovery set. It uses the exact six-category model from CATEGORY001 REV02 and keeps hardware, protocols, internal status mechanics, and implementation detail out of the first view.

This file does not create routes, pages, navigation, metadata, search data, forms, analytics, or campaign publication.

## 2. Information architecture

`Six categories -> outcome family -> individual possibility -> optional How it can work -> Request On-Site Estimate`

Exact first-layer order:

1. Home Security
2. Aging in Place
3. Home Safety
4. Home Automation
5. Home Lighting
6. Property Management

Recommended entry points:

- **Popular solutions:** one strong, broadly relatable possibility from each category.
- **Explore more possibilities:** the complete approved set below, filterable by plain-language concern.
- **Search/filter recommendation:** match customer phrases such as “water in basement,” “dark hallway,” “second home,” “garage open,” “too many apps,” or “guest access.” Search is a recommendation only; current search ownership and implementation remain separate.
- **Related solutions:** every card should link to two or three related internal IDs or approved public destinations.
- **Persistent CTA:** `Request On-Site Estimate`, using the existing approved contact/estimate path.

## 3. Card content contract

Each implemented card should show, in order:

1. customer-facing name;
2. one-sentence problem;
3. one-sentence outcome;
4. up to three concise examples;
5. eligibility language (`Common starting point`, `Available after review`, or `Custom project`);
6. optional `How it can work` expansion;
7. `Request On-Site Estimate` CTA.

The collapsed view must not expose part numbers, protocols, entity IDs, configuration syntax, dense equipment lists, internal compatibility tables, or BOM detail. Optional detail should explain behavior and limitations, not implementation internals.

## 4. Customer catalog cards

### 4.1 Home Security

Category overview: Practical visibility for entries, openings, garages, selected camera areas, and access—planned around the property and the way the customer uses it.

| Internal ID | Customer-facing name | Problem | Outcome | Examples (maximum three) | Eligibility | Optional “How it can work” | CTA / related |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HS-001 | Front Door & Package Awareness | Deliveries and visitors can be easy to miss. | See useful front-entry events and approved alerts in one place. | Doorbell press; package-area view; entry light link | Common starting point | A suitable doorbell or camera can feed an entry view and selected notifications; placement, power, network, and event support are reviewed first. | Request On-Site Estimate; HL-002, HA-003 |
| HS-002 | Door & Window Awareness | An opening can stay open longer than intended. | Check selected door and window state and receive reviewed reminders. | Exterior door; patio door; selected windows | Common starting point | Small sensors can report open/closed state to the customer dashboard; only installed points are represented. | Request On-Site Estimate; HA-004, PM-001 |
| HS-003 | Garage Door Status | It is easy to wonder whether the garage was left open. | See whether the reviewed garage appears open or closed. | Main garage; detached garage; open-too-long reminder | Available after review | A compatible status sensor can add the garage to the dashboard; active control is a separate custom review. | Request On-Site Estimate; PM-002, HA-004 |
| HS-004 | Smart Lock & Guest Access | Keys and temporary access can be awkward to coordinate. | Use reviewed access codes and clear lock status for approved users. | Family code; guest code; selected access update | Available after review | Door preparation, lock fit, fallback keys, code ownership, and user permissions are reviewed before equipment is selected. | Request On-Site Estimate; AIP-004, PM-004 |
| HS-005 | Local-First Camera Views | Camera apps and storage choices can become fragmented. | Bring selected property views into a clearer, site-reviewed system. | Front entry; driveway; detached structure | Custom project | Camera placement, wiring, storage, privacy, retention, network capacity, and off-site access are designed for the property. | Request On-Site Estimate; HS-008, PM-001 |

### 4.2 Aging in Place

Category overview: Non-medical, consent-aware lighting, controls, comfort, and household visibility that can make everyday routines easier while preserving human judgment and normal controls.

| Internal ID | Customer-facing name | Problem | Outcome | Examples (maximum three) | Eligibility | Optional “How it can work” | CTA / related |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AIP-001 | Night Path Lighting | Dark nighttime routes can be difficult to navigate. | Add gentle, automatic light while keeping normal switches usable. | Bedroom to bathroom; hall; stairs | Common starting point | Reviewed sensors and dimmable lighting can run a low-level scene during selected hours, with a clear disable option. | Request On-Site Estimate; HL-001, HL-007 |
| AIP-002 | Entry & Exit Awareness | Selected household arrivals and departures may be useful context. | Share simple, consent-approved entry and exit updates. | Exterior door opens; lock state; quiet-hours routing | Common starting point | Reviewed opening or lock events can appear on a simple dashboard and notify chosen people when appropriate. | Request On-Site Estimate; HS-002, AIP-006 |
| AIP-003 | Simple Assistance Button | App navigation may be too slow for a simple request for attention. | Use a fixed in-home button to notify chosen people. | Bedside location; favorite chair; main living area | Common starting point | A labeled button can trigger a selected local or mobile notice after recipient and delivery testing. It is not a medical service. | Request On-Site Estimate; AIP-004, HA-003 |
| AIP-004 | Easy Physical Controls | Everyday smart-home actions should not require app hunting. | Put common scenes and modes on clear, labeled controls. | Good Night; All Off; Path Lights | Common starting point | Reviewed wall controls or remotes can call customer-readable scenes while ordinary switches remain available where practical. | Request On-Site Estimate; HL-005, HA-004 |
| AIP-005 | Comfort Awareness | Room or utility temperatures can be hard to track. | See selected temperature and humidity trends in a clearer view. | Bedroom comfort; utility temperature; seasonal room | Available after review | Suitable sensors can feed large, plain-language dashboard cards and selected notices; readings depend on placement and device limits. | Request On-Site Estimate; HSF-002, HA-007 |

### 4.3 Home Safety

Category overview: Practical awareness for water, cold spaces, humidity, basements, utility areas, and other selected household conditions common in Western New York.

| Internal ID | Customer-facing name | Problem | Outcome | Examples (maximum three) | Eligibility | Optional “How it can work” | CTA / related |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HSF-001 | Water Leak Awareness | Water at a problem point can remain unseen. | Know sooner when water is detected at selected sensor locations. | Water heater area; laundry area; basement | Common starting point | Small sensors can report water presence to the dashboard and selected recipients. Coverage is limited to installed points. | Request On-Site Estimate; HSF-005, PM-003 |
| HSF-002 | Freeze-Risk Awareness | Remote or utility spaces can become unusually cold. | See low-temperature trends and receive reviewed threshold notices. | Basement; utility room; seasonal property | Common starting point | Temperature sensors can use duration-based thresholds to reduce nuisance notices; placement and connectivity matter. | Request On-Site Estimate; PM-003, AIP-005 |
| HSF-003 | Basement & Utility Awareness | Several small household concerns are scattered across one area. | Combine selected water, temperature, and humidity status in one view. | Sump area; mechanical room; basement storage | Common starting point | The property review identifies useful sensor points and a simple exception-first dashboard layout. | Request On-Site Estimate; HSF-004, HSF-005 |
| HSF-004 | Humidity Awareness | Persistent humidity trends are easy to miss. | See selected humidity changes over time. | Basement; bathroom; storage area | Available after review | Reviewed sensors can show trends and optional reminders. The system is not an environmental certification. | Request On-Site Estimate; HSF-003, HSF-008 |
| HSF-005 | Sump Area Awareness | The area around a sump may need clearer status. | Add practical water and selected equipment clues where the site supports them. | Nearby water sensor; reviewed power clue; recovery notice | Available after review | Sensor placement and pump type determine what can be represented. The solution does not promise identification of every pump problem. | Request On-Site Estimate; HSF-001, HSF-006 |

### 4.4 Home Automation

Category overview: A local-first Home Assistant foundation, clear dashboards, useful modes, and supported routines that reduce app sprawl without hiding normal controls.

| Internal ID | Customer-facing name | Problem | Outcome | Examples (maximum three) | Eligibility | Optional “How it can work” | CTA / related |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HA-001 | WNYHS Core Dashboard | Supported systems can be scattered across apps and devices. | See selected status and controls in one customer-readable view. | Home overview; doors and lights; water and temperature | Common starting point | Home Assistant organizes supported devices into a mobile/tablet-first dashboard with customer, installer, and service views kept separate. | Request On-Site Estimate; HA-002, HA-008 |
| HA-002 | Supported Device Unification | Compatible equipment may live in separate apps. | Bring reviewed devices and routines into one clearer control plane. | Lights; locks; selected sensors | Common starting point | Each exact model and integration is reviewed; vendor apps or cloud services remain disclosed where they are still required. | Request On-Site Estimate; HA-001, HA-004 |
| HA-003 | Smarter Notification Routing | Too many low-value alerts cause people to ignore useful ones. | Route selected updates by priority, quiet hours, and recipient preference. | Water alert; door reminder; low battery | Common starting point | Every enabled event receives a purpose, priority, cooldown, recipient, recovery rule, and live delivery test. | Request On-Site Estimate; HS-008, AIP-003 |
| HA-004 | Home, Away, Night & Vacation Modes | Several devices and routines may need the same household context. | Change supported behavior with one understandable mode. | Good Night; Away; Vacation | Common starting point | Customer-controlled modes can call reviewed scenes and routines while keeping manual override and recovery paths. | Request On-Site Estimate; HA-006, HL-005 |
| HA-005 | Smart Plug Routines | Suitable lamps and plug-in devices are easy to leave on. | Put approved indoor loads on simple schedules, scenes, or modes. | Lamp schedule; holiday lights; bedtime off | Common starting point | Only equipment within the plug’s ratings is considered, and the customer keeps a normal manual path. | Request On-Site Estimate; HL-001, HL-005 |

### 4.5 Home Lighting

Category overview: Everyday, entry, pathway, exterior, garage, and scene lighting planned around compatible circuits, normal controls, and the way the property is used.

| Internal ID | Customer-facing name | Problem | Outcome | Examples (maximum three) | Eligibility | Optional “How it can work” | CTA / related |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HL-001 | Smarter Everyday Lighting | Lighting routines are inconsistent or inconvenient. | Add simple schedules and scenes while preserving normal control. | Morning scene; bedtime off; lamp schedule | Common starting point | Compatible switches, dimmers, and plugs can be organized around customer-readable scenes after circuit and load review. | Request On-Site Estimate; HA-004, HA-005 |
| HL-002 | Entry Lighting | Arriving or answering the door can mean reaching for lights. | Coordinate selected entry lights with useful events and times. | Door opens; doorbell event; evening arrival | Common starting point | Eligible lights can follow reviewed entry events with time limits, cooldowns, and manual override. | Request On-Site Estimate; HS-001, HA-006 |
| HL-003 | Exterior Visibility Lighting | Exterior lighting may not match how the property is used. | Coordinate eligible exterior circuits for clearer paths and property use. | Driveway; side entry; backyard | Available after review | Existing circuits, fixtures, weather exposure, motion placement, and customer preferences determine the design. | Request On-Site Estimate; HS-006, PM-002 |
| HL-004 | Garage & Workshop Lighting | Hands-full work areas make switches inconvenient. | Add reviewed door, motion, or button-based lighting with normal override. | Garage arrival; workbench; storage aisle | Common starting point | Compatible controls can use timeouts and manual-preservation rules suited to the space. | Request On-Site Estimate; PM-002, HL-005 |
| HL-005 | One-Touch Lighting Scenes | Recreating the same lighting setup takes time. | Run common lighting combinations from one labeled control. | Good Night; Movie; All Off | Common starting point | Physical controls, dashboard buttons, and household modes can call the same customer-readable scene. | Request On-Site Estimate; AIP-004, HA-004 |

### 4.6 Property Management

Category overview: Practical visibility for second homes, seasonal properties, outbuildings, and selected property infrastructure. WNYHS provides technology and configuration within an approved scope; people remain responsible for property decisions and follow-up.

| Internal ID | Customer-facing name | Problem | Outcome | Examples (maximum three) | Eligibility | Optional “How it can work” | CTA / related |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PM-001 | Remote Property Status | Important property details are scattered when the customer is away. | See selected exceptions in one practical overview. | Openings; water; temperature | Custom project | A site-reviewed mix of supported sensors and views can summarize the property; off-site access depends on internet service. | Request On-Site Estimate; PM-003, PM-005 |
| PM-002 | Outbuilding Awareness | A garage, shop, shed, or gate may sit outside the main home’s view. | Bring selected structure status into the shared property dashboard. | Entry state; temperature; camera view | Custom project | Power, connectivity, weatherproofing, and equipment placement are designed for the structure before devices are selected. | Request On-Site Estimate; HS-007, HL-004 |
| PM-003 | Seasonal Freeze & Water Awareness | A seasonal property may sit unattended during changing weather. | Keep selected cold-space and water concerns visible. | Utility temperature; basement water; recovery notice | Available after review | Reviewed sensors, thresholds, and recipient choices can support a seasonal mode; only installed points are represented. | Request On-Site Estimate; HSF-001, HSF-002 |
| PM-004 | Reviewed Access Coordination | Approved users may need time-bounded access without loose keys. | Coordinate supported access codes and selected status after role review. | Family visit; service visit; guest code | Custom project | Door fit, user roles, code ownership, revocation, privacy, and recordkeeping must be agreed before implementation. | Request On-Site Estimate; HS-004, AIP-004 |
| PM-005 | Network & Power Resilience Review | A remote property can lose visibility when network or power equipment fails. | Improve selected infrastructure status and recovery planning. | Core backup power; network health; restored status | Custom project | A site review may identify UPS, PoE, network, or connectivity needs. Off-site communication still depends on available services. | Request On-Site Estimate; HSF-006, HA-008 |

## 5. Progressive disclosure behavior

- Category landing view: category purpose, three Popular solutions, and `Explore more possibilities`.
- Family view: concise cards, concern filters, related solutions, and persistent estimate CTA.
- Expanded card: how it can work, site/dependency limitations, and whether it is a common, reviewed, or custom path.
- Estimate handoff: pass only the customer’s selected concerns and existing approved intake context; do not expose internal IDs or equipment assumptions as customer commitments.

## 6. Mobile and accessibility requirements

- Keep the six-category order consistent in complete-list surfaces.
- Use semantic headings and real buttons/links; do not rely on color alone for eligibility.
- Keep card summaries short enough to scan without opening details.
- Make expansions keyboard-operable and announce state to assistive technology.
- Keep the estimate CTA reachable without covering content.
- Provide descriptive image text when later assets are approved.
- Avoid auto-playing motion and respect reduced-motion preferences.

## 7. URL and destination recommendations

- Retain the implemented canonical category pattern `/categories/<category-slug>`.
- Existing five category routes remain as currently governed.
- Recommend `/categories/property-management` only after a separate coordinated route/content/SEO/search task approves and implements it.
- Future solution destinations should use one canonical Solution object and route; cross-category references must not duplicate the page.
- Until a destination is implemented and approved, campaign and catalog CTAs should use the existing estimate/contact path, not a placeholder or dead link.

## 8. Claims and protected boundaries

All copy describes selected awareness, visibility, control, or convenience subject to site conditions and supported equipment. It avoids certainty-based prevention, outside-response, clinical, caregiver-replacement, insurance, code, and universal-compatibility claims. Local-first language applies only where the selected path supports it. Off-site access generally requires internet service.

No source, route, form, lead payload, CRM, scheduling, payment, email, analytics, Home Assistant customer instance, or deployment behavior is changed or authorized by this catalog.
