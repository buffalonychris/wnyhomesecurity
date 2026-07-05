# WNYHS Customer Dashboard Design Standard REV01

Status: Active design-system standard
Customer-facing: No
Implementation authority: Design authority only; implementation requires bounded task
Task ID: DASHBOARD-DESIGN-STANDARD-001
Related philosophy: docs/design-system/customer-dashboard-philosophy.md

---

## 1. Purpose

This document defines the reusable WNYHS design standard for customer-facing Home Assistant-based dashboards.

Home Assistant is the rendering and control substrate. The customer product is the WNY Home Security Customer Control Center.

This standard governs customer-facing dashboard design direction, information hierarchy, screen architecture, action hierarchy, theme parity, brand posture, and customer/technician separation before any dashboard implementation begins.

This standard does not create Home Assistant YAML, dashboard files, Lovelace cards, frontend assets, themes, automations, customer-specific dashboards, runtime files, source code, routes, CSS, tokens, or implementation changes.

## 2. Product Concept: WNYHS Customer Control Center

Customers should experience a WNY Home Security product from tip to tail.

The WNYHS Customer Control Center should feel like a finished customer product, not a raw Home Assistant interface. Home Assistant may power the system underneath, but the normal customer experience must use WNYHS structure, plain-language labels, customer-safe status, and WNYHS brand posture.

Normal customer-facing dashboards must not show Home Assistant branding, vocabulary, page names, error language, or technical diagnostics.

The customer should not need to understand Home Assistant concepts to answer basic daily-use questions such as whether the building is okay, who is at the door, whether a door is unlocked, or whether something needs attention.

The customer does not receive a generic Home Assistant dashboard. The customer receives a WNY Home Security control experience powered by Home Assistant. The product layer must hide Home Assistant implementation vocabulary unless the customer intentionally enters an approved technician/service surface.

## 3. Required Screen Architecture

The baseline customer shell should define these required screens when supported by installed hardware:

- Home
- Doorbell
- Cameras
- Locks
- Security
- Activity
- More

Not every customer gets every optional module. Required screens are the baseline customer shell where the installed hardware and approved customer scope support them. If a required screen is not supported by the customer system, implementation tasks must document the omission and the reason.

The required screen set should keep navigation predictable across WNYHS customer installs while allowing each customer dashboard to reflect the actual installed system.

Customer dashboards must include only installed, approved, customer-relevant capabilities. Do not show placeholder, future-feature, unused, or speculative panels in normal customer dashboards.

## 4. Optional Module Architecture

Optional modules may include:

- Lighting
- Climate
- Utilities
- Pool
- Irrigation
- Generator
- Elder Care
- Vacation
- Future customer-specific modules

Optional modules must live under More or become visible only when installed and customer-relevant.

Do not show empty or uninstalled modules as active customer features. Future customer-specific modules require bounded implementation authority and must be tied to actual installed hardware, approved customer scope, and customer-relevant outcomes.

## 5. Mobile-First Layout Rules

The Home Assistant Companion App mobile experience is the primary target.

Rules:

- Design for phone first.
- No horizontal scrolling.
- No pinch/zoom dependency.
- Minimize vertical scrolling.
- Primary actions reachable with one thumb.
- Each screen should have one obvious purpose.
- Avoid dense grids of raw sensors.
- Use large readable cards and buttons.
- Customer should understand Home screen state in under two seconds.

Desktop and tablet layouts may improve breathing room, but they must not become the design source of truth. Mobile readability, reachability, and short scan time control customer dashboard design.

## 6. Home Screen UX

The Home screen must answer:

- Am I OK?
- Is somebody at the door?
- Do I need to do anything?

Normal state:

- Everything Looks Good
- Nothing requires your attention.

Attention examples:

- Front Door Open
- Front Entrance Unlocked
- Motion Detected
- Someone is at the door.

Home screen order:

1. Overall reassurance/status card
2. Doorbell / front entry interaction
3. Primary lock control
4. Primary live camera(s)
5. Building summary
6. Recent meaningful activity

The Home screen should not be a raw entity list. It should lead with reassurance, then visitor/front-entry interaction, then common controls and summaries.

## 7. Doorbell-First Priority

For customers with a video doorbell, the doorbell is a primary interaction surface, not a secondary camera.

Doorbell content must come before secondary camera content.

Doorbell UI should prioritize:

- live view
- Talk / Speak
- Lock / Unlock where supported
- Full screen / View
- recent visitor activity

The doorbell card or screen should be visually and functionally easy to find. It should support the front-entry task without forcing the customer to hunt through camera grids or diagnostic status.

## 8. Action Hierarchy

Default action priority for BK Lewis and similar commercial security customers:

1. Doorbell
2. Talk / Speak
3. Unlock Door
4. Lock Door
5. View Cameras
6. Recent Activity
7. Security Detail
8. Everything else

Actions should be represented as large, plain-language, task-based controls.

Avoid tiny row actions for primary tasks. Avoid labels that expose implementation details. Customer actions should describe the task the customer intends to perform.

## 9. Information Hierarchy

Default customer-facing hierarchy:

1. Overall status
2. Active visitor/front-door state
3. Lock/access state
4. Live camera state
5. Doors/windows summary
6. Motion summary
7. Activity summary
8. System health
9. Technician diagnostics only in technician-facing views

Normal customer dashboards should hide:

- battery percentages unless attention is needed
- signal strength
- RSSI
- firmware
- logs
- raw entity names
- diagnostic entities
- integration internals
- YAML/template/helper details

Customer-facing information should be progressive. Show normal summaries when everything is okay, and reveal detail when something needs attention or when the customer intentionally enters a detail view.

## 10. Light/Dark Theme Parity

Every customer dashboard must provide persistent Light, Dark, and Auto theme control from every customer-facing screen.

Theme control must be one-tap or immediately accessible, not buried in settings. Customers must be able to switch presentation quickly in bright light, low light, normal daily use, and security-concern conditions.

Light and dark modes must preserve:

- same screens
- same navigation
- same card order
- same controls
- same spacing
- same icon placement
- same interaction model
- same status meaning

Only these may change:

- colors
- backgrounds
- card styling
- borders
- shadows
- text colors
- accent colors
- icon colors

Theme changes must not change dashboard structure, action availability, status meaning, customer language, or technician visibility boundaries.

## 11. WNYHS Brand and Gold Emblem Usage

WNY Home Security identity should appear throughout the product experience.

Rules:

- Use WNYHS gold emblem in tasteful header/loading/settings/about contexts.
- Emblem should reinforce product ownership without cluttering operational controls.
- Do not overuse the emblem inside every card.
- Do not let branding compete with urgent security status.
- Customer/site branding may appear alongside WNYHS branding where appropriate.
- Dashboard should feel co-branded for customer sites like BK Lewis while remaining clearly a WNYHS product.

Branding should support confidence and ownership. It must not crowd primary controls or make urgent status harder to understand.

## 12. No Home Assistant Branding Standard

Customer-facing dashboards must not show:

- Home Assistant branding
- HA logos
- Lovelace terminology
- entity
- helper
- binary_sensor
- YAML
- unavailable
- unknown
- node
- diagnostic
- template
- configuration error

Technical terms may exist only in technician views or documentation.

Normal customer dashboards should translate technical state into customer-safe language such as Everything Looks Good, Front Entrance Unlocked, Doorbell Ready, Please Check the Building, or Nothing requires your attention.

## 13. Button and Touch Target Standards

Minimum primary touch target:

- 56px preferred
- 48px absolute minimum

Button rules:

- Rounded buttons.
- Clear icons.
- One or two word labels.
- No tiny row actions for primary tasks.
- Primary action buttons should be visually distinct.
- Destructive or risky actions such as Unlock must be clear and deliberate.
- Emergency/critical controls must not be visually confused with normal actions.
- Do not use green for risky actions such as unlocking or disabling protection.

Touch targets should remain usable on phones in the Companion App. Primary actions should not depend on precise taps, small rows, or hidden overflow menus.

## 14. Card and Layout Standards

Card and layout rules:

- Cards should have one job.
- Avoid card clutter.
- Use customer outcomes as titles.
- Use minimal text.
- Prefer status + action over raw lists.
- Camera previews should use stable mobile-friendly aspect ratios, generally 16:9 unless a device requires otherwise.
- Top cards must carry the highest customer value.
- Avoid duplicate status cards that say the same thing.

The first screen should carry the highest-value customer information. Lower-value summaries, technical detail, and historical lists should move down the page or into detail screens.

## 15. Accessibility Rules

Customer dashboards must support:

- Large readable typography.
- Strong contrast in light and dark modes.
- Do not rely on color alone.
- Use icons plus labels.
- Avoid tiny text.
- Avoid overloaded pages.
- Support broad daylight and dark-room use.
- Support bright light, low light, security-concern conditions, and normal use.
- Keep urgent states visually obvious but not chaotic.
- Use plain language and large touch targets.

Accessibility is part of product quality. Dashboard status must remain understandable for customers who glance quickly, use the dashboard in poor lighting, or cannot rely on color-only meaning.

## 15A. Semantic Color Rules

Customer dashboard color semantics:

- Green means safe, normal, locked, secure, or all clear.
- Red/burgundy means caution, alert, destructive, unlock, or security-sensitive action.
- Gold means WNYHS brand, navigation, section accent, or premium emphasis.
- Gray/black/white surfaces are theme-controlled.

Color must support meaning, not carry meaning alone. Text and icons must remain present for customer-facing status and controls.

## 16. Technician Mode Separation

Customer dashboard:

- reassurance
- plain language
- visitor controls
- lock controls
- camera views
- simple summaries
- meaningful activity

Technician dashboard:

- batteries
- entity states
- offline diagnostics
- integration health
- raw history
- YAML/template/helper references
- troubleshooting detail

Technician diagnostics must not leak into normal customer experience.

Customer and technician views may be driven by the same underlying Home Assistant state, but the vocabulary, density, visibility posture, and action hierarchy must remain separate.

## 17. BK Lewis Design Direction

BK Lewis-specific design direction:

- Funeral-home appropriate tone.
- Calm, respectful, premium.
- Burgundy/charcoal/gold/ivory design influence.
- Doorbell, two-way communication, and remote deadbolt control are the primary value.
- Cameras, contact sensors, motion, batteries, and history are secondary.
- Mr. Lewis will use the HA Companion App on phone, not PC/tablet.
- Design must avoid zooming, horizontal scrolling, and excessive vertical hunting.

BK Lewis should feel co-branded for the site while remaining clearly a WNYHS product. The design should respect the setting, prioritize front-entry communication and access control, and avoid raw technical dashboard clutter.

## 18. Implementation Rules

This standard does not authorize implementation by itself.

Any implementation must be a separate bounded task in `docs/system/master-task-register.md`.

Implementation must identify:

- exact target dashboard files
- affected customer/site
- validation plan
- rollback posture
- protected-system boundaries

Codex may not infer implementation details from mockups alone.

Graphic references guide design intent. Repository standards and task work orders control implementation.

Future implementation must not modify Home Assistant YAML, dashboard files, themes, source UI/CSS/tokens, routes, runtime/API behavior, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, secrets, or customer-specific data unless the active bounded implementation task explicitly authorizes those exact surfaces.

## 19. Future Work

Recommended next bounded tasks:

- DASHBOARD-WIREFRAME-001: create static mobile wireframe/reference docs for required screens.
- BKLF-DASHBOARD-REDESIGN-001: implement BK Lewis customer dashboard redesign only after design standard and wireframe are accepted.
- BKLF-NOTIFICATIONS-001: customer notification target and mobile_app notify service capture.
- BKLF-CLOUDFLARE-REMOTE-001: Cloudflare Tunnel/Access implementation for bklewis.remote.wnyhomesecurity.com.

These future tasks are planning recommendations only. They are not active and do not authorize implementation.
