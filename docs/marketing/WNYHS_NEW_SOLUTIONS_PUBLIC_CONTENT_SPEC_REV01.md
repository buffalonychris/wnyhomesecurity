# WNYHS New Solutions Public Content Specification REV01

Status: Approved planning specification; not implemented or published

Task: `T-NEWSOLUTIONS001`

## 1. Page purpose and business outcome

Create a future discovery surface that helps Western New York homeowners and property decision-makers recognize practical possibilities beyond a single package. The surface should translate the governed customer catalog into relatable concerns, guide visitors through six categories, and move interested visitors to the existing on-site estimate request path.

The page is not an equipment store, technical compatibility matrix, fixed-price menu, or alternate funnel. It does not make every internal capability public.

## 2. Audience and customer problems

Primary audiences:

- homeowners who know the problem but not the technology;
- families exploring non-medical aging-in-place support;
- second-home and seasonal-property owners;
- customers who want supported devices organized around one local-first foundation;
- existing WNYHS customers considering an add-on;
- property owners with garages, workshops, outbuildings, basements, or utility concerns.

Common customer-language problems:

- “I keep wondering whether I left the garage open.”
- “I want to know sooner if there is water in the basement.”
- “The hall is too dark at night.”
- “I have too many apps.”
- “I want a clearer view when I am away from the property.”
- “I need easier controls for a family member or guest.”

## 3. Value proposition

WNYHS plans smart-property solutions around the customer’s concern, property, supported equipment, and preferred level of control. A Home Assistant-based WNYHS Core can organize selected security, aging-in-place, home-safety, automation, lighting, and property-management solutions while keeping normal controls and practical fallbacks in the design.

Local-first is the preferred design posture where supported. Exact equipment, local/cloud behavior, remote access, optional services, and site requirements are reviewed before an estimate becomes a customer commitment.

## 4. Hero options

### Option A — problem-first

Eyebrow: `New WNYHS Solutions`

Headline: `Start with the problem. Build the right smart-property solution.`

Body: `Explore practical ideas for entries, water, lighting, everyday routines, aging in place, and properties you cannot always be at in person.`

Primary CTA: `Explore Popular Solutions`

Secondary CTA: `Request On-Site Estimate`

### Option B — possibility-first

Eyebrow: `More Ways Your Home Can Help`

Headline: `One clear foundation. More useful possibilities.`

Body: `See how supported sensors, controls, dashboards, and routines can be planned around real concerns—not a pile of disconnected gadgets.`

Primary CTA: `Browse All Six Categories`

Secondary CTA: `Tell Us What You Want To Solve`

### Option C — local-property-first

Eyebrow: `Built for Western New York Properties`

Headline: `Practical awareness and control for the places that matter.`

Body: `From basements and cold utility rooms to front doors, garages, pathways, and seasonal properties, WNYHS helps plan supported solutions around the site.`

Primary CTA: `Explore Solutions`

Secondary CTA: `Request On-Site Estimate`

Recommended first choice: Option A. It keeps the page centered on customer problems and avoids implying that every capability is a standard product.

## 5. Page structure and category overview copy

Recommended section order:

1. Hero and primary CTA.
2. Popular solutions: one representative card from each category.
3. Six-category explorer.
4. “How WNYHS plans a solution” progressive explanation.
5. Additional possibilities by outcome family.
6. Local-first, privacy, and normal-control principles.
7. Common questions.
8. Final estimate CTA.

| Category | Overview copy | Recommended popular entry |
| --- | --- | --- |
| Home Security | `See practical entry, opening, garage, access, and selected camera possibilities planned around your property.` | HS-001 Front Door & Package Awareness |
| Aging in Place | `Explore non-medical lighting, comfort, controls, and consent-aware household visibility that can make everyday routines easier.` | AIP-001 Night Path Lighting |
| Home Safety | `Add practical awareness for selected water, cold-space, humidity, basement, and utility concerns.` | HSF-001 Water Leak Awareness |
| Home Automation | `Bring supported devices, dashboards, modes, and useful routines into a clearer control plane.` | HA-001 WNYHS Core Dashboard |
| Home Lighting | `Plan everyday, entry, pathway, exterior, garage, and scene lighting around compatible circuits and normal controls.` | HL-001 Smarter Everyday Lighting |
| Property Management | `Keep selected second-home, seasonal-property, outbuilding, and infrastructure concerns visible without replacing human property oversight.` | PM-003 Seasonal Freeze & Water Awareness |

## 6. Solution-family copy

| Family | Public copy direction | Internal trace |
| --- | --- | --- |
| Entries and openings | `Know more about selected doors, windows, front-entry events, and garage status.` | HS-001-004 |
| Water and cold spaces | `See selected water and low-temperature concerns sooner, with clear limits based on sensor placement and connectivity.` | HSF-001-005, PM-003 |
| Easier everyday control | `Put supported scenes, modes, and common actions on clearer dashboards and physical controls.` | HA-001-006, AIP-004 |
| Pathways and entries | `Coordinate eligible lighting for nighttime routes, arrivals, entries, and common routines.` | AIP-001, HL-001-005 |
| Family awareness | `Share selected non-medical household updates with chosen people and documented quiet hours.` | AIP-002/003/005/006 |
| Away-property visibility | `Bring selected second-home, seasonal-property, or outbuilding exceptions into one reviewed view.` | PM-001-005 |

## 7. Representative solution cards

Use the card content contract in `WNYHS_CUSTOMER_SOLUTION_CATALOG_REV01.md`. Initial Popular solutions:

| Category | Card title | Short copy | Eligibility | CTA |
| --- | --- | --- | --- | --- |
| Home Security | Front Door & Package Awareness | `See useful front-entry events and approved alerts in one place.` | Common starting point | Explore HS-001 / Request On-Site Estimate |
| Aging in Place | Night Path Lighting | `Add gentle light for selected nighttime routes while keeping normal switches usable.` | Common starting point | Explore AIP-001 / Request On-Site Estimate |
| Home Safety | Water Leak Awareness | `Know sooner when water is detected at selected sensor locations.` | Common starting point | Explore HSF-001 / Request On-Site Estimate |
| Home Automation | WNYHS Core Dashboard | `See selected status and controls in one customer-readable view.` | Common starting point | Explore HA-001 / Request On-Site Estimate |
| Home Lighting | Smarter Everyday Lighting | `Add simple schedules and scenes while preserving normal control.` | Common starting point | Explore HL-001 / Request On-Site Estimate |
| Property Management | Seasonal Freeze & Water Awareness | `Keep selected cold-space and water concerns visible when you are away.` | Available after review | Explore PM-003 / Request On-Site Estimate |

## 8. Trust, privacy, and ownership copy

Recommended trust block:

> `Planned around your property.` WNYHS reviews the concern, site, existing equipment, normal controls, connectivity, privacy preferences, and support needs before recommending a path.

> `Local-first where supported.` Core household behavior can stay inside the customer’s Home Assistant-based system when the selected equipment supports it. Off-site access and some vendor features may require internet service or a third-party account.

> `Customer-readable by design.` Daily-use dashboards focus on useful status and controls. Installer and service detail stays separate.

> `Privacy is part of the scope.` Camera views, event history, user access, notification recipients, and off-site use require explicit review. No customer data or private system detail belongs in public campaign content.

Subscription posture:

- Do not use an absolute “no monthly fees” statement.
- Preferred language: `WNYHS does not sell a required subscription for the standard local-first foundation. Selected devices, remote-access choices, or third-party services may have separate requirements, which are reviewed before the estimate.`

## 9. Installation and estimate CTA

Primary CTA label: `Request On-Site Estimate`

Recommended destination: existing canonical contact intake, `/contact?vertical=home-security`, unless a later funnel task approves a different existing destination.

Supporting copy: `Tell us what you want to solve. We will review the property, site conditions, supported options, and the right next step.`

Do not use booking language. Preferred dates or times are requests pending operator confirmation. Do not create a separate form, payload, API event, CRM property, or scheduling path from this specification.

## 10. FAQ recommendations

### Can I start with one solution?

`Yes. Many customers can begin with one approved concern and expand through the same WNYHS Core when later equipment and site conditions are compatible.`

### Does everything work without the internet?

`No. Local-first behavior is preferred where supported, but off-site access and some devices or third-party services require internet connectivity. The estimate should identify those dependencies.`

### Can WNYHS use equipment I already own?

`Sometimes. Exact manufacturer, model, integration path, supportability, and customer expectations must be reviewed before existing equipment is included.`

### Are these fixed packages?

`Some solutions are common starting points. Others require a site-reviewed custom scope. The customer catalog should label the difference clearly.`

### Can family members receive updates?

`Selected recipients can be considered after consent, event purpose, priority, quiet hours, channel availability, and delivery testing are documented.`

### Does water or temperature sensing eliminate property risk?

`No. Sensors provide information only at selected locations and depend on placement, power, network, device condition, and delivery paths. Human follow-up remains important.`

### Can Property Management solutions replace a caretaker or property manager?

`No. The category organizes selected property visibility and control. People remain responsible for access, inspections, decisions, and follow-up.`

## 11. Homepage and subpage support recommendations

These are future recommendations, not source authority:

- Homepage: add a concise “Explore more possibilities” support block only after the destination exists, using the six exact category labels and one CTA.
- Existing category pages: add a small related-solutions module using canonical Solution records, without duplicating content.
- Existing solution pages: show Primary Category, relevant Secondary Categories, limitations, and estimate CTA where approved.
- Search: index only approved customer catalog entries and public destinations; never index internal hardware/BOM/status detail.
- Footer/navigation: follow the separate six-category implementation decision; do not partially add Property Management before its route/content/SEO/search readiness is coordinated.

## 12. SEO recommendations

Recommended future route: `/solutions` or another route selected by a separate Site Architecture task. This specification does not choose or implement the canonical route.

Title options:

- `Smart Home & Property Solutions | WNY Home Security`
- `Explore Home Security, Safety & Automation Solutions | WNYHS`

Description option:

`Explore practical WNYHS solutions for home security, aging in place, home safety, automation, lighting, and property management in Western New York.`

Structured-data recommendation: after a canonical route and final content exist, review `CollectionPage` plus `ItemList` for visible category/solution links. Use `FAQPage` only if the final questions and answers are visible and current. Do not add product, price, rating, review, or service schema without separate evidence and owner approval.

SEO intake must separately decide route owner, canonical target, index status, sitemap inclusion, public-search inclusion, internal links, social metadata, images/alt text, and SPA rendering risk under SEO004 and SITEARCH005.

## 13. Attribution and analytics recommendation

No single promoted analytics owner exists. A future implementation task should define a privacy-safe plan before adding trackers or events.

Recommended planning fields only:

- campaign identifier;
- source, medium, campaign, and content labels;
- entry route and destination route;
- category and approved internal solution ID in campaign documentation, not necessarily in public payloads;
- estimate form started and submitted using existing governed event vocabulary where applicable;
- server `requestId` as the correlation authority after submission;
- aggregate views/clicks as directional signals, not lead totals.

Do not improvise a tracker, direct CRM write, new lead payload, or customer profile. `/api/lead-signal` remains the sole CRM write boundary.

## 14. Lead-intake and scheduling boundaries

Commercial path:

`Approved solution -> approved destination -> campaign asset -> tracked CTA -> existing intake -> /api/lead-signal -> estimate/sales follow-up`

- CTA leads to the existing contact/estimate journey.
- `/api/lead-signal` remains the protected server-side intake boundary and owns `requestId` generation/correlation after submission.
- CRM schema, properties, pipeline, workflow, and write behavior are unchanged.
- Scheduling preferences remain requests. Customer-facing confirmation requires operator-confirmed evidence under the scheduling contracts.
- Payment, agreement, and schedule routes are outside this content task.

## 15. Claims review checklist

- Every public possibility traces to a non-research internal record.
- Copy states selected locations, supported equipment, and site review where material.
- Local-first language is conditional on the chosen path.
- Camera, access, family-awareness, and off-site use include privacy/consent review.
- No certainty-based prevention, outside-response, clinical, caregiver-replacement, universal compatibility, universal fee, code, insurance, or savings assertion is present.
- Custom and pilot paths are not presented as flat standard products.
- No price, equipment list, route, form, or runtime behavior is implied by the copy.

## 16. Implementation hold

A separate ACTIVE implementation task and work order must name exact source files, route, navigation/homepage scope, final public copy, assets, metadata, search/sitemap treatment, CTA behavior, analytics plan, focused tests, and build/QA requirements. This specification does not activate that task.
