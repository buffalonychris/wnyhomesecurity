# WNYHS Customer Dashboard Design Standard REV02

Status: Active design-system standard

Customer-facing: No

Implementation authority: Design authority only; implementation requires a separate bounded task

Task ID: DASHBOARD-DESIGN-STANDARD-001

Primary workstream: Dashboard / Interactive Experience System

Predecessor: `docs/design-system/customer-dashboard-design-standard-rev01.md` (SUPERSEDED)

Work order: `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV01.md`

## 1. Purpose and owner boundaries

This standard defines the WNYHS Customer Control Center product concept, information hierarchy, customer experience, and customer-versus-technician separation. It supersedes REV01 in full and removes outdated exact action, navigation, and visual assumptions.

Component semantics belong to `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`. Responsive modes and equal-grid behavior belong to `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`. Dashboard classes, exact navigation, footer, and approval proof belong to `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`. This document references those owners rather than creating parallel component rules.

## 2. Product concept

The customer product is the WNY Home Security Customer Control Center, powered by Home Assistant where applicable but presented in WNYHS customer language. It is a reassurance and control surface, not a raw entity browser, installer panel, hardware catalog, monitoring promise, or service-authority claim.

The first customer view should quickly answer:

- What is the current verified property status?
- Does anything need attention?
- What common, safe action is available?

## 3. Customer experience hierarchy

The normal customer hierarchy is:

1. truthful overall/property status scoped to verified capabilities;
2. active issue or attention item;
3. primary daily workflow such as entry/video when installed;
4. common customer actions;
5. system summaries and recent activity; and
6. support, property, and settings detail.

Do not lead with diagnostics, logs, firmware, signal strength, raw entity lists, setup exceptions, or low-value history. Video doorbells remain primary interaction surfaces when installed and verified, but no camera, lock, talk, or live-state capability may be inferred.

## 4. Navigation and screen model

Use the exact INSTALL006 customer navigation: Home, Systems, Activity, Explore WNYHS, Support, Property, Settings. `Explore WNYHS` remains `COMING SOON` until separately implemented.

`Systems` contains only applicable verified capability groups. Empty or speculative modules remain hidden. Navigation stays functional in prototypes, but authentication, authorization, registration, and live routes require separate authority.

## 5. Status, tiles, actions, and typography

Use DESIGN001 for:

- Normal, Active, Attention, Alert, and Unavailable customer status values;
- semantic status-text exclusivity and the neutral unavailable state;
- governed right-justified Status Value Fields;
- standardized circular-icon tile headers and dividers;
- the single blue customer action-button family and its states;
- 48/48/56 px action heights by size mode;
- WNYHS gold identity treatment; and
- Inter, Atkinson Hyperlegible, and System typefaces.

This design standard does not reinstate primary-versus-secondary visual button families, gold action buttons, green action confirmation, arbitrary card geometry, or alternate status taxonomies.

## 6. Responsive and theme posture

Use DASHBOARD001 Compact, Default, and Large modes, with Default + Inter as the initial presentation. Comparable tiles remain equal and deterministic within their governed grids.

Light, Dark, and Auto preserve information hierarchy, customer language, focus, permissions, bindings, status meaning, and action availability. Theme, font, and size controls change presentation only.

## 7. Brand, accessibility, and customer safety

- Present `WNY HOME SECURITY` on one line where width permits.
- Keep branding secondary to status, video, and safe controls.
- Use plain language, strong contrast, visible keyboard focus, icon-plus-text meaning, and governed touch targets.
- Do not show raw entity IDs or technician terms in normal customer output.
- Do not use color alone or semantic status colors on prose and labels.
- Do not claim monitoring, dispatch, response, prevention, guaranteed safety, or unsupported live/device capability.
- Keep installer and service data out of customer screens.

## 8. Customer-specific adaptation

Customer/site identity, installed modules, ordering emphasis, and authorized accents may vary. Canonical navigation, governed component anatomy, status meaning, claims posture, privacy, and protected-action rules do not. Customer-specific evidence never becomes universal authority unless promoted through a bounded governance task.

## 9. Implementation boundary

This document does not authorize Home Assistant YAML, source UI, routes, themes, automations, APIs, customer records, dependencies, deployment, or protected-system changes. Every implementation names exact files, verified capabilities, fixtures/bindings, validation, rollback posture, and protected boundaries.

## 10. Acceptance

The customer design is on-standard when it feels like a coherent WNYHS customer product; uses the canonical navigation and current component owners; defaults to Default + Inter; presents truthful status and capability; separates customer and technical surfaces; and passes deterministic responsive, theme, interaction, accessibility, privacy, and claims review.
