# DASHBOARD001 - Responsive Dashboard Delivery Standard - REV02

Status: Active design-system standard

Customer-facing: No

Implementation authority: Governance and delivery standard only; implementation requires a separate bounded task

Task ID: DASHBOARD001-RESPONSIVE-DELIVERY-STANDARD-001

Primary workstream: Dashboard / Interactive Experience System

Predecessor: `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV01.md` (SUPERSEDED)

Work order: `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV01.md`

## 1. Purpose and ownership

This standard is the canonical owner for customer dashboard delivery targets, responsive size modes, grid density, comparable-tile geometry, and responsive validation. It supersedes REV01 in full. `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` owns component semantics; `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` owns navigation and dashboard architecture.

This standard does not authorize Home Assistant YAML, source, runtime, live-system, customer-data, dependency, or deployment changes.

## 2. Delivery targets

Each bounded customer-dashboard task must address the applicable daily-use and secondary surfaces from this set:

- Home Assistant Companion phone portrait;
- Home Assistant Companion tablet portrait and landscape;
- browser phone and tablet; and
- desktop/PC browser.

The task and handoff record identify which targets are in customer scope and document any technical fallback. Customer users must not need to understand internal dashboard variants.

## 3. Customer-visible size modes

Customer-visible size choices are exactly:

- `Compact`
- `Default`
- `Large`

`Standard` is retired as a customer size label. No active implementation or customer instruction may use it as the middle size choice.

Desktop composition targets, where the target viewport supports them, are:

| Size mode | Target composition |
| --- | --- |
| Compact | 4 tiles wide x 3 visible rows |
| Default | 3 tiles wide x 2 visible rows |
| Large | 2 tiles wide x 2 visible rows |

A size mode changes governed grid density, spacing, typography, and component dimensions. It is not arbitrary browser zoom.

## 4. Equal-tile and grid consistency

Within a governed grid:

- comparable tiles use equal width and equal height;
- card geometry is tokenized;
- header anatomy and divider geometry are identical;
- action and status-field geometry are identical within the size mode;
- media regions use governed geometry where present; and
- content may vary, but component geometry does not drift per tile.

The action-button height contract from DESIGN001 is 48 px in Compact, 48 px in Default, and 56 px in Large. Insufficient width causes reflow, not reduced height or altered anatomy.

## 5. Responsive behavior

Phone layouts remain single-column, touch-safe, free of horizontal scrolling, and focused on status and common actions. Tablet layouts may use one or two columns according to orientation. Desktop layouts use the active governed size-mode composition and must not stretch phone cards arbitrarily.

Across all widths and modes, preserve:

- customer language and canonical navigation;
- five-state customer status meaning;
- tile, Status Value Field, icon, and action semantics;
- Light, Dark, and Auto availability where technically feasible;
- keyboard focus and accessible touch targets;
- customer versus technician separation; and
- claims and protected-action boundaries.

## 6. Typography and mode defaults

The approved font choices are Inter, Atkinson Hyperlegible, and System. The initial/default presentation is `Default` size plus `Inter`. Font and size changes must be deterministic and must not alter permissions, bindings, state truth, or action availability.

## 7. Visual validation

Applicable implementation validation must demonstrate:

- direct rendering at representative phone, tablet, and desktop widths;
- Compact, Default, and Large modes using the exact customer labels;
- equal comparable-tile geometry and governed grid targets;
- 48/48/56 px action heights;
- no overlap, clipping, horizontal scrolling, or hidden primary action;
- readable Light, Dark, and Auto states;
- keyboard focus and customer-safe text; and
- no secrets, private URLs, raw entity IDs, or customer-private data in evidence.

Approval screenshots must come from deterministic browser/component rendering when governance compliance is being proved. Generated concept images may inspire design but are not responsive-compliance evidence.

## 8. Forbidden behavior

Do not create unrelated visual systems by device, show empty speculative panels, expose diagnostics in customer views, rely on unsupported detection, convert desktop into a service dashboard, use zoom as a size mode, or let theme/size/font selection change status meaning, permissions, or authoritative state.

## 9. Acceptance

Delivery is on-standard when every in-scope surface uses Compact / Default / Large, defaults to Default + Inter, preserves equal governed tile geometry, follows the 48/48/56 action-height contract, passes deterministic responsive review, and keeps all customer, security, privacy, and claims boundaries intact.
