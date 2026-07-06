# DESIGN001 - WNYHS Customer Interface Standard - REV01

Status: Active design-system standard
Customer-facing: No
Implementation authority: Design and governance authority only; implementation requires a separate bounded task
Task ID: DESIGN001-WNYHS-CUSTOMER-INTERFACE-STANDARD-001
Primary workstream: Dashboard / Interactive Experience System
Related standards:

- `docs/design-system/customer-dashboard-philosophy.md`
- `docs/design-system/customer-dashboard-design-standard-rev01.md`
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`
- `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`
- `docs/home-assistant/bklf-ha-dashboard-and-entity-spec.md`

---

## 1. Purpose

This document defines the permanent WNY Home Security customer interface standard for customer-facing Home Assistant dashboards and customer control experiences.

It applies to BK Lewis Funeral Home, future residential installs, future commercial installs, and custom installs where the installed capability mix may differ by customer.

The standard governs the customer interface layer only: visible dashboard structure, customer-facing hierarchy, visual semantics, action meaning, accessibility, branding posture, customer versus technician separation, and adaptive capability handling.

This document does not create or modify Home Assistant YAML, dashboard YAML, themes, packages, website source files, runtime/source files, APIs, dependencies, live Home Assistant instances, customer-specific dashboards, automations, scripts, secrets, Stripe, HubSpot, scheduling, Cloudflare configuration, or customer data.

## 2. Core Philosophy

WNYHS customer interfaces are customer-first and technician-second.

The normal customer surface must be calm, simple, readable, and non-technical. It should show outcomes instead of entity IDs, raw states, integration labels, helper names, or setup artifacts.

The customer should quickly understand:

- whether the property looks okay;
- whether anything needs review;
- what action is available right now;
- how to reach the most common controls without hunting.

Customer dashboards must not overwhelm customers with options they do not need. Prioritize reassurance, clarity, and fast action over diagnostic density.

The interface must preserve WNYHS privacy, local-first, customer-owned-control, and no unsupported service-authority claim standards. The dashboard may show local status and customer controls, but it must not imply third-party response authority, outside agency action, promised prevention, or AI authority over security-sensitive actions.

## 3. Global Color Semantics

Customer interface colors carry locked operational meaning.

| Color role | Meaning |
| --- | --- |
| Green | Safe, clear, locked, closed, healthy, normal, completed, good-to-go. |
| Amber / yellow | Caution, needs review, attention, maintenance, offline, low battery, degraded. |
| Red / burgundy | Danger, alarm, unlock, disarm, security-sensitive action, critical issue. |
| Gold | WNYHS brand, navigation, selected state, accent, premium emphasis, non-risky primary action. |
| Neutral surfaces | Theme-controlled cards, backgrounds, dividers, and supporting surfaces. |
| Customer accent colors | Optional accents only when they do not conflict with safety colors. |

Color must support meaning alongside text and icons. It must not be the only way a customer understands state.

## 4. Non-Negotiable Safety-Color Rules

These rules apply to all customer-facing dashboard and control experiences:

- Never use green for unsafe, open, unlocked, disarmed, degraded, offline, or customer-review-needed states.
- Never use red or burgundy for normal, safe, locked, closed, healthy, or all-clear states.
- Never allow customer branding colors to override red, amber, or green safety semantics.
- Unlock, disarm, bypass, disable, and other security-sensitive actions must remain visually distinct and cautionary.
- Decorative themes, seasonal treatments, customer accents, and brand emphasis must not change safety meaning.
- Safety color semantics must remain stable in Light, Dark, and Auto modes.

## 5. Button Standards

Customer controls must be large enough for phone use in the Home Assistant Companion App.

Minimum touch targets:

- 56px preferred for primary controls.
- 48px absolute minimum for any customer action.
- Critical and security-sensitive controls should use larger tap areas when practical.

Button hierarchy:

| Button type | Purpose | Visual posture |
| --- | --- | --- |
| Primary customer action | Main normal task such as view entry, open camera, start talk, or run a safe scene. | Prominent, usually gold or brand-accented when not safety-sensitive. |
| Security-sensitive action | Unlock, disarm, bypass, disable, or other access/security action. | Cautionary, visually distinct, never green. |
| Safe / confirming action | Lock, close, confirm ready, acknowledge normal state, or complete a safe step. | May use green when it means safe, locked, closed, completed, or healthy. |
| Navigation / secondary action | Move between views, open details, see all cameras, view activity, or open support. | Neutral or gold-accented, lower emphasis than primary actions. |

Critical controls must use icon plus label. Icon-only buttons are not acceptable for lock, unlock, disarm, alarm, leak, smoke, CO, or security-sensitive controls.

Spacing and shape:

- Use generous padding for thumb reach.
- Keep related actions close, but do not crowd risky controls against safe controls.
- Use rounded corners consistently with the WNYHS dashboard theme.
- Avoid tiny row actions for primary customer workflows.
- Buttons must be understandable without Home Assistant or technician knowledge.

## 6. Card Hierarchy

Customer dashboards must place the highest-value customer information first.

Priority order:

1. Current critical status or active issue.
2. Main customer workflow: video, entry control, primary control, or primary status.
3. Common actions.
4. Summary status.
5. Recent activity or history.
6. Settings, technician, support, and low-frequency content.

Do not place history, raw logs, service diagnostics, firmware details, signal strength, entity lists, or technical setup details above primary customer controls.

Cards should have one job. They should use customer-readable titles such as `Front Entry`, `Building Looks Good`, `Needs Review`, `Parking Lot Activity`, or `Basement Leak Status`.

## 7. Adaptive Install Model

WNYHS customer interfaces must be designed around capability groups, not fixed pages that assume every customer owns the same devices.

Capability groups:

| Capability group | Examples |
| --- | --- |
| Entry control | Doorbell, lock, gate, garage, door contact. |
| Video | Doorbells, cameras, NVR streams, priority camera groups. |
| Perimeter / security | Doors, windows, motion, glass break, locks. |
| Environmental / property | Leak, smoke, CO, temperature, sump, pool, hot tub, irrigation. |
| Lighting / control | Indoor lighting, exterior lighting, scenes, plugs, switches. |
| Activity / history | Customer-readable event summaries. |
| Technician / support | Hidden or separated service, setup, and support content. |

Dashboard implementation tasks must map installed hardware and approved customer scope into these groups before choosing visible views or cards.

## 8. Custom-Install Rules

Every customer install can have a different mix of capabilities. The dashboard must adapt without looking empty or confusing.

Rules:

- If a capability does not exist, do not show empty panels for it.
- If one camera exists, show it prominently.
- If many cameras exist, show priority cameras first and provide simple access to the rest.
- If locks do not exist, do not show lock controls.
- If doorbells exist but no standalone cameras exist, doorbells may satisfy the video capability.
- If many sensors exist, summarize by customer-readable zones, areas, walls, floors, or groups instead of dumping every sensor.
- If a sensor is planned but not installed, do not present it as live customer status.
- Normal customer dashboards must remain simple even on large installs.
- Custom capabilities require customer-readable labels and clear purpose before appearing in normal customer views.

## 9. Icon Usage

Icons must reinforce meaning and remain consistent across installs.

Standard icon meanings:

| Icon concept | Standard use |
| --- | --- |
| Door | Entry, door contact, open/closed state. |
| Lock | Lock state or lock action. |
| Camera | Live view, camera group, video device. |
| Motion | Motion or activity sensing. |
| Window | Window contact or window group. |
| Shield | Overall safety/security summary. |
| Warning | Needs review, caution, attention, or critical issue. |
| Light | Lighting control or scene. |
| Water | Leak, sump, shutoff, pool, irrigation, or water-related state. |
| Activity | Recent events, customer-readable history, or timeline. |

Avoid decorative icons that compete with action meaning. Risky controls must not rely on decorative or ambiguous icons.

## 10. Typography and Language

Customer dashboards must use large, readable headings and short plain-language labels.

Typography rules:

- Use large readable headings for major screen and status context.
- Avoid oversized headings that push primary controls below the fold.
- Use concise labels on cards and controls.
- Avoid tiny text, dense data tables, and raw technical names.
- Do not show entity IDs, helper names, integration internals, YAML concepts, firmware strings, RSSI, raw logs, or diagnostic vocabulary in normal customer views.

Preferred status language:

- Everything Looks Good
- Needs Review
- Immediate Attention
- Door is closed and locked
- Parking Lot motion detected
- Front Entry is ready
- Basement leak sensor needs review
- Camera is offline

Customer-facing text should tell the customer what matters, not how Home Assistant names the entity.

## 11. Branding

WNYHS branding remains present on customer dashboards.

Branding rules:

- WNYHS identity should be visible in headers, settings/about surfaces, or appropriate shell areas.
- Customer name, customer logo, property name, or customer accent may be included when available and approved.
- WNYHS safety semantics always override customer branding.
- Branding must not crowd live video, primary controls, or urgent status.
- Customer branding colors may be accents only; they cannot replace safety colors.
- Do not add unsupported outside-response, third-party authority, promised-outcome, or service-capability claims.

The interface should feel like a WNYHS customer app powered by Home Assistant, not raw Home Assistant.

## 12. Theme and Customization Rules

Every customer dashboard must support Light, Dark, and Auto where technically feasible.

Theme rules:

- Theme changes may alter colors, backgrounds, card treatment, borders, shadows, and text colors.
- Theme changes must not alter navigation, permissions, card order, status meaning, customer language, or action availability.
- Customer preferred color schemes may be used only as accents.
- Red, amber, and green safety semantics are reserved and not customer-overridable.
- WNYHS branding remains visible across themes.
- Theme controls should be easy to access from customer dashboards.
- The customer should not have to enter technician or setup views to switch Light, Dark, or Auto.

## 13. Accessibility and Readability

Customer interfaces must be readable and usable on phones.

Requirements:

- Use minimum touch targets defined in this standard.
- Preserve strong contrast in light and dark modes.
- Use icon plus text for important status and controls.
- Avoid tiny text.
- Avoid dense grids.
- Avoid information overload.
- Keep important controls quickly reachable on phone.
- Make urgent states obvious without making normal dashboards feel alarming.
- Do not depend on color alone for status.
- Preserve phone portrait usability as the primary validation target.

## 14. Customer vs Technician Separation

The normal customer dashboard must not show:

- diagnostics;
- entity IDs;
- firmware;
- RSSI;
- logs;
- YAML concepts;
- setup clutter;
- integration internals;
- raw helper/template names;
- unavailable/unknown implementation language.

Technician and service views may exist separately when approved by a bounded task. They must be clearly separated from customer mode and should not be reachable as normal customer daily-use content.

Customer mode should answer daily-use questions. Technician mode should support setup, validation, troubleshooting, and service review.

## 15. BKLF Lessons Generalized

The BK Lewis Funeral Home Home Assistant Companion phone validation produced lessons that apply to all WNYHS customer interfaces:

- Header areas must not consume too much vertical space on phone.
- Camera and video content should dominate when video is part of the primary workflow.
- Primary actions should be large, colorful, and easy to reach.
- Status cards should not over-alarm customers unless the condition is truly critical.
- Activity cards must summarize events in short readable lines.
- Giant non-essential navigation cards should be avoided on phone.
- Doorbell workflows are customer interaction surfaces, not just camera thumbnails.
- Lock and access actions need clear cautionary treatment.
- Technical details belong below customer controls or in separated technician views.
- The dashboard should feel like a WNYHS customer app, not raw Home Assistant.

BKLF remains the pilot lesson source, but this standard is install-agnostic and applies to all future WNYHS customer control experiences.

## 16. Forbidden Claims and Protected Action Rules

Customer interfaces must not add unsupported service, response, or outcome claims.

Forbidden customer-interface posture:

- No public-safety agency action claims.
- No outside response-authority claims.
- No continuous third-party watch-service claims unless separately approved and legally, operationally, and contractually true.
- No promised prevention or promised outcome claims.
- No AI control over locks, disarm, bypass, alarm, access, or other security-sensitive actions.

AI Assist, voice control, scripts, automations, and customer shortcuts must not perform security-sensitive actions unless a future bounded governance and implementation task authorizes that exact behavior.

## 17. Implementation Boundary

This standard is documentation and governance only.

Future implementation tasks must identify:

- customer/site scope;
- target Home Assistant dashboard files;
- capability inventory;
- customer-visible views;
- technician/service views;
- theme behavior;
- validation plan;
- rollback posture;
- protected-system review;
- exact allowed files.

Do not infer implementation authority from this standard. Do not modify Home Assistant YAML, dashboard files, themes, packages, website source, runtime/source files, APIs, dependencies, package-lock files, live services, Stripe, HubSpot, scheduling, Cloudflare configuration, secrets, or customer-specific data without a separate bounded task.

## 18. Success Criteria

A WNYHS customer interface is on-standard when:

- the first customer screen is understandable in under two seconds;
- status colors follow locked safety semantics;
- risky actions are visually distinct and never green;
- customer branding does not override WNYHS safety semantics;
- installed capabilities appear and uninstalled capabilities stay hidden;
- video, entry, lock, and common controls are prioritized according to actual customer workflow;
- plain language replaces technical entity vocabulary;
- customer and technician content remain separated;
- Light, Dark, and Auto support preserves the same structure and meaning;
- protected claims and protected actions remain constrained;
- the experience feels like a WNYHS customer control app powered by Home Assistant.
