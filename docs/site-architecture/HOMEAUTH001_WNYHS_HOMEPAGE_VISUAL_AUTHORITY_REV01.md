# HOMEAUTH001 WNYHS Homepage Visual Authority REV01

## Document control

- **Task ID:** HOMEAUTH001
- **Revision:** REV01
- **Status:** Active on merge
- **Owner:** Site Architecture / Homepage / Visual Authority
- **Controlling context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Implementation authority:** None
- **Effective date:** After manual review and merge only

## 1. Purpose and scope

This is the page-specific authority for the replacement WNY Home Security homepage. It governs business message, hierarchy, visual direction, terminology, design identifiers, approval gates, and implementation handoff requirements.

The replacement site is a governed new public experience, not authority to destructively rewrite the current production application. This document creates no copy deployment, source code, route, redirect, component, CSS, asset, runtime, funnel, payment, scheduling, planner, CRM, analytics, Cloudflare, deployment, Drive, or BOKS change.

## 2. Authority and supersession

For the replacement homepage only, this document supersedes:

- the prior six-section homepage sequence in `docs/brand/page_layout_standards_rev01.md`;
- replacement-homepage structure, five-category/package-first discovery, and page-specific visual provisions in `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`;
- planning-only structures in `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`.

It preserves QR Landing authority in UX001, current production header/footer authority, canonical Site Architecture, sitewide visual and token owners, claims and copy owners, protected funnel/runtime owners, and the current production hero asset. Dedicated owner documents control detailed rules.

## 3. Business doctrine and public positioning

The replacement homepage must express Ownership, Privacy, Resilience, Simplicity, Customization, Expandability, and Professional Design and Integration.

WNY Home Security designs and installs complete intelligent-property solutions. It is not presented as a traditional monitored-alarm company, hardware retailer, box reseller, package seller, lease-based equipment provider, subscription platform, or cloud-first SaaS company.

Controlling positioning:

> WNY Home Security designs complete intelligent-property solutions that combine security, automation, safety, lighting, aging support, and property control in one professionally configured, customer-owned system.

Hardware supports the solution; it does not define the offering. “We do not sell hardware; we sell solutions” means the customer buys a professionally designed, installed, configured, tested, and functioning outcome. It does not falsely imply that physical equipment is never supplied or itemized where required.

## 4. Approved and restricted terminology

Preferred public terms include Solutions, Explore Solutions, View Solutions, Find the Right Solution, Design Your System, Schedule a Property Assessment, Recommended System, Custom Solution, Solution Overview, Capabilities, System Plan, Property Assessment, Design Recommendation, selected capabilities, project scope, and common solution design.

The replacement homepage must not present the core offering as packages, alarm packages, hardware packages, bundles, kits, Bronze/Silver/Gold tiers, fixed boxes, leased equipment, professional monitoring, emergency dispatch, or a cloud subscription.

Home Assistant must not be named on the public homepage. It may be named only in a separately approved technical, educational, support, or ownership context where the platform name materially helps the reader.

“Monitoring” may describe only explicit customer-controlled awareness, sensing, notifications, dashboard status, environmental conditions, or property observation. It must not imply central-station monitoring, emergency response, or dispatch.

## 5. Claims-qualified language

Final deployed wording remains subject to CLAIMS001 and the current copy owner.

Approved monthly-fee direction:

> No required monthly fees from WNY Home Security.

Nearby context must make clear that no WNY Home Security monitoring, cloud, or platform subscription is required for supported core local-control paths; equipment is not leased; optional third-party services may have separate costs; and not every possible configuration is subscription-free.

Approved local-operation direction:

> Core system functions are designed to continue working locally during an internet outage.

It must not imply every function always works without internet. Remote access, cloud notifications, vendor services, and other internet-dependent features may be unavailable.

Approved unified-control direction:

> One Dashboard. One App. One Place to Go.

This applies to supported and reviewed integrations; it is not universal compatibility authority.

WNY Home Security does not sell professional central-station monitoring or emergency dispatch. The homepage must not imply police, fire, medical, caregiver, or emergency-service response.

## 6. Core message direction

Approved headline directions include “Your Property. Your System. Your Data.” and “Your Property. Your System. Your Freedom.”

Approved supporting direction:

> Professionally designed security, automation, safety, lighting, and property-control solutions—all managed from one place, built to work locally, and owned by you.

Exact public copy requires later claims/copy approval. The homepage must not lead with package pricing, monthly tiers, professional monitoring, cloud subscriptions, protocols, hardware counts, or Bronze/Silver/Gold comparisons.

## 7. Canonical homepage hierarchy and IDs

1. **HOME-001 — Hero**
2. **HOME-002 — Core Promise**
3. **HOME-003 — Six Pillars**
4. **HOME-004 — Why WNY**
5. **HOME-005 — How Customization Works**
6. **HOME-006 — Real-Life Outcomes**
7. **HOME-007 — Expandable System**
8. **HOME-008 — Education**
9. **HOME-009 — Existing-Customer Path**
10. **HOME-010 — Primary CTA / Footer Transition**

Additional stable IDs are **NAV-001 — Primary Navigation**, **FOOTER-001 — Footer**, and **MOBILE-001 — Mobile Homepage**. IDs are permanent authority identifiers; revisions do not reuse an ID for a different object.

## 8. Six public pillars

The exact SITEARCH005 labels and order are:

1. Home Security
2. Aging in Place
3. Home Safety
4. Home Automation
5. Home Lighting
6. Property Management

They are interconnected parts of one intelligent-property solution, not six unrelated shelves. Additional capabilities must be assigned beneath an approved pillar, cross-related through approved secondary relationships, retained in education, retained in a governed custom/future structure, or preserved as internal taxonomy. They must not create a competing public category model.

## 9. Navigation relationship and wayfinding

Current production navigation remains controlled by `docs/brand/header_footer_standards_rev01.md`; HOMEAUTH001 does not replace it.

A future navigation/IA task must use Solutions rather than Packages as the future public offering label and address the six pillars, existing-customer support, breadcrumbs, contextual navigation, current-page state, parent-return paths, footer, mobile, direct entry, funnel boundaries, redirects, SEO, analytics, bookmarks, and legacy compatibility.

At every meaningful public location, visitors should know where they are, their broader section, how to return to the parent or homepage, the next logical step, where support lives, and where to request an assessment. This is a future requirement, not a production navigation change.

## 10. Sitewide visual relationship

The sitewide authority remains a warm light or creamy-white primary canvas, clean light surfaces, controlled charcoal/trust-navy emphasis, premium gold CTA/accent treatment, restrained borders/radius/elevation/motion, Manrope headings, Inter body text, and semantic tokens.

The homepage may use a controlled cinematic dark hero as a premium emphasis section. This is not authority for a dark-default site. The hero must transition coherently into lighter sections and avoid cold surveillance, tactical, gaming, neon, or black-on-black treatment.

## 11. HOME-001 hero authority

The future hero should use a premium Western New York residential or small-property setting at dusk or night, warm architectural lighting, restrained property-awareness cues, a phone and larger coherent dashboard, clear message hierarchy, and primary/secondary actions.

It must communicate ownership, privacy, resilience, simplicity, and customization without monthly prices, monitoring-center imagery, fake proof, cloud diagrams, multiple disconnected apps, keypad-centered alarm imagery, fear, or militarization.

`public/brand/heros/HomePageHero.png` remains the current production asset. Any successor requires a separate HOME-001 asset task and manual approval.

## 12. Dashboard visual authority

The dashboard is evidence of the business model. It may show understandable groupings such as security status, locks, cameras, lighting, safety/environmental conditions, rooms, property areas, scenes, property modes, and useful notifications. Future additions may appear as new tiles, tabs, controls, scenes, or automations.

It must not show raw entities, developer tools, engineering clutter, impossible controls, unrelated branded apps, Home Assistant branding, or obvious dependence on a branded cloud service.

## 13. Section requirements

- **HOME-002:** Explain coherent control, supported local operation, ownership, and expandability without universal claims.
- **HOME-003:** Use one icon/illustration family, equal importance, outcome-led language, consistent behavior, canonical order, and clear deeper-page paths.
- **HOME-004:** Direction: “Designed Around You. Not Around a Box.” Use concise proof around custom design, expandability, ownership, privacy, local independence, and professional support.
- **HOME-005:** Show Assessment → System Design → Installation and Configuration. The outcome is a functioning property and tailored dashboard, not a box.
- **HOME-006:** Show realistic door/lock awareness, easier routines, consent-aware aging support, meaningful environmental notifications, intelligent lighting, second-property awareness, and fewer disconnected apps.
- **HOME-007:** Direction: “Add what you need, when you need it.” Show a stable foundation expanding without forced immediate purchase.
- **HOME-008:** Direction: “Explore. Educate. Decide With Confidence.” Do not invent counts, credentials, readership, or awards.
- **HOME-009:** Provide a visible path for support, service, additions, automations, dashboard changes, upgrades, and expansion.
- **HOME-010:** Close with one clear primary path and subordinate alternative. Final wording and destinations require funnel/copy approval.

## 14. Desktop, mobile, and accessibility

Desktop must provide disciplined widths, generous spacing, clear hierarchy, coherent dark-to-light transitions, readable hero copy, useful dashboard scale, consistent pillar interactions, and no overflow.

MOBILE-001 must preserve message order and CTA priority, use accessible tap targets, keep dashboard evidence readable, stack pillars in canonical order, keep existing-customer support visible, avoid hover-only disclosure, and support clear menu state, reduced motion, and theme preference.

All future work must use semantic landmarks/headings, keyboard operation, visible focus, accessible contrast, meaningful alternative text, non-color-only meaning, practical tap targets, reduced motion, readable type, and no animation that blocks comprehension.

## 15. Photography, icons, and motion

Photography must be realistic, premium, calm, local, and warm. It must not imply nonexistent customer work, unsupported products, fake proof, fear, surveillance theater, or copied competitor artwork.

The six pillars must use one coherent, mobile-legible icon/illustration family with semantic tokens and accessible labels.

Permitted interaction qualities include subtle elevation, controlled illumination, soft border transitions, restrained scale/icon movement, and surface-depth change. Forbidden behavior includes neon glow, pulsing, bouncing, large jumps, long delays, gaming treatment, hover-only information, unreadable motion, or motion without reduced-motion support.

## 16. Theme and token requirements

Future theme authority must address system preference, persistent user override, light/dark semantic tokens, backgrounds, surfaces, text, borders, photography, dashboards, buttons, mobile, accessibility, and reduced motion. Light mode is not a crude inversion of dark mode. HOMEAUTH001 changes no runtime theme behavior.

All implementation must use the current semantic-token system. Raw one-off colors, shadows, typefaces, radii, or interaction values are prohibited unless separately approved. The dark hero must be expressible with approved semantic tokens before implementation.

## 17. Three levels of design authority

1. **Vision references:** quality, mood, typography, spacing, motion, photography, or polish; no copied layouts, brand, copy, or assets.
2. **Approved mockups:** canonical targets recording stable ID, state, revision, controlling authority, source assets, approved/rejected qualities, open notes, supersession, and operator approval.
3. **Implemented website:** accessible, responsive, maintainable code validated against approved authority.

Pipeline: Vision reference → Approved mockup → Bounded implementation → Validation → Manual deployment decision.

## 18. Visual-reference intake

Each future reference must record reference ID, filename/source, category, approved qualities, rejected qualities, affected HOME/NAV/FOOTER/MOBILE ID, desktop/mobile state, dark/light state, repository conflicts, and approval status.

Status values are Evidence Only, Directional, Approved Mockup, Rejected, or Superseded. References cannot authorize copying another company’s brand, layout, words, interface, or artwork.

## 19. CTA and implementation gates

Future CTA authority must distinguish the primary assessment/discovery action, secondary solution exploration, existing-customer support, and tertiary education. “Schedule” must not be deployed unless the destination performs scheduling. Current funnel contracts remain controlling.

Before implementation: HOMEAUTH001 must merge; terminology migration boundaries, navigation/IA, visual references/mockups, hero asset, and final claims/copy must be approved; then a bounded implementation task must name exact source files, acceptance tests, protected systems, rollback, and deployment review.

## 20. Rejection criteria

Reject a design or implementation that presents package/hardware/monitoring/SaaS positioning, uses a noncanonical category order, uses unsupported claims or fake proof, names Home Assistant on the homepage, makes the whole site dark-default, violates tokens/accessibility, shows impossible dashboard behavior, hides existing-customer support, changes protected routes/runtime without authority, replaces `HomePageHero.png`, or implements unapproved navigation.

## 21. Protected behavior

HOMEAUTH001 changes and authorizes no change to `/api/lead-signal`, HubSpot/CRM, Stripe/payment verification, agreements, scheduling/calendar, Fit Check, planner, quote/recommendation, forms, consent, attribution, request IDs, email, Cloudflare, secrets, deployment, routes, redirects, SEO, analytics events, runtime identifiers, navigation, or hero assets.

Legacy `/packages`, tier parameters, package identifiers, and contracts remain unchanged until a separate migration proves compatibility.

## 22. Unresolved questions and future tasks

HOMEAUTH001 does not decide final navigation, legacy route/identifier migration, CTA destinations, public pricing, proposal/agreement/Stripe/CRM/planner/analytics terminology, final hero asset, final mockups, theme implementation, motion values, or image-specific details.

Required future bounded tasks:

1. Package-to-Solution Terminology and Funnel Migration.
2. Replacement Navigation and Information Architecture.
3. Visual Reference Intake and Design Authority.
4. Homepage Hero Asset Approval.
5. Replacement Homepage Implementation after all gates pass.

## 23. Final authority statement

This document establishes replacement-homepage governance only. It creates no production copy, code, asset, route, runtime, merge, or deployment authority.
