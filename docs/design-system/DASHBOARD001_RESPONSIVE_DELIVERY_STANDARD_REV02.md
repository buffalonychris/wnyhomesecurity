# DASHBOARD001 - Dashboard Delivery, Binding & Validation Standard - REV02

Status: Active canonical dashboard standard

Customer-facing: No

Implementation authority: Governance and delivery standard only; implementation requires a separate bounded task

Task ID: DASHBOARD001-RESPONSIVE-DELIVERY-STANDARD-001

Primary workstream: Dashboard / Interactive Experience System

Predecessor: `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV01.md` (SUPERSEDED)

Work order: `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV02.md`

## 1. Purpose and ownership

This is the canonical owner for customer-specific dashboard delivery: responsive size modes, device targets, capability assembly, Home Assistant evidence binding, fixtures, deterministic browser prototypes, acceptance evidence, and the relationship to dashboard registration, assignment, rollback, and handoff.

`INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` owns functional behavior and semantic meaning. `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` owns visual tokens and components. This standard binds those owners to verified customer evidence without restating their full rules.

This standard does not authorize Home Assistant YAML, live binding, registration, assignment, runtime changes, customer-data publication, dependencies, or deployment.

## 2. Customer-visible size modes

Customer-visible size choices are exactly:

- `Compact`
- `Default`
- `Large`

`Standard` is retired as a customer size label. Initial presentation is `Default` size plus `Inter`.

Desktop composition targets, where the viewport supports them, are:

| Size mode | Target composition |
| --- | --- |
| Compact | 4 tiles wide x 3 visible rows |
| Default | 3 tiles wide x 2 visible rows |
| Large | 2 tiles wide x 2 visible rows |

A size mode changes governed density, spacing, typography, and component dimensions. It is not arbitrary browser zoom.

## 3. Delivery targets

Each bounded task addresses applicable customer surfaces:

- Home Assistant Companion phone portrait;
- Companion tablet portrait and landscape;
- browser phone and tablet;
- desktop/PC browser; and
- wall display/kiosk only when explicitly in customer scope.

The task and handoff identify daily-use, secondary, and out-of-scope surfaces. Customers must not need to choose an internal dashboard variant. Assignment behavior and fallbacks are documented when platform limits prevent an intended default.

## 4. Responsive and equal-tile delivery

- Phone remains single-column, touch-safe, free of horizontal scrolling, and focused on current status and common actions.
- Tablet may use one or two columns according to orientation and available width.
- Desktop/wall display uses the selected governed composition and does not stretch phone cards arbitrarily.
- Comparable tiles in a grid row use equal width and height.
- Header, divider, media, Status Value Field, and action geometry remain consistent within the active mode.
- Insufficient width causes governed reflow, never reduced button height or hidden primary action.
- The DESIGN001 action-height contract is 48px Compact, 48px Default, and 56px Large.

## 5. Customer-specific capability assembly

Every customer dashboard is assembled from verified scope, not a universal device catalog.

- Include only installed and verified capabilities authorized for the customer surface.
- Keep planned, unsupported, unbound, or not-installed capabilities out of live customer presentation.
- Represent installed but unavailable/degraded capability truthfully when customer understanding benefits.
- Preserve INSTALL006 navigation and semantic behavior even when capability modules vary.
- Do not infer capability from a vendor name, registry presence, historical example, or another customer install.

## 6. Evidence binding contract

Dashboard delivery maps evidence through:

`raw registry or authorized source evidence -> sanitized property/device/entity model -> semantic capability -> customer-safe fixture/binding -> rendered dashboard`

Binding records include, as applicable:

- evidence date/freshness and source classification;
- property/site, area, device, and entity relationship;
- customer-safe label and semantic capability;
- installed, available, unresolved, disabled, hidden, deleted, or not-installed posture;
- authoritative state source and update behavior;
- permission and action availability;
- local/remote availability distinction;
- acceptance evidence and unresolved mappings; and
- rollback/handoff notes.

When canonical WNYHS HA Registry Export files are supplied, interpret them under `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md`:

- active entity records come from `data.entities`; deleted entity records are separate evidence;
- active device records come from `data.devices`; deleted device records are separate evidence;
- area/floor/label registries establish registry relationships only;
- `disabled_by`, `hidden_by`, entity category, platform, device ID, area ID, original name, and customer/user name are evidence fields;
- registry presence proves registration evidence, not current availability, physical state, permission, or live capability;
- raw unique IDs, connections/MACs, and technical identifiers are omitted from customer output and sanitized derivatives by default; and
- unknown never defaults to Normal, closed, locked, available, or safe.

No physical room, window, door, capability, entity mapping, or live state may be invented from generic registry names.

## 7. Evidence classes and fixture rules

Every fixture/binding value is classified as one of:

1. **Registry-known capability** - supported by current sanitized registry/source evidence, but not necessarily live.
2. **Simulated approval state** - deterministic prototype-only state, visibly declared in developer/prototype context.
3. **Authoritative live state** - available only when an explicitly authorized live/runtime task establishes the binding and state source.
4. **Unresolved** - evidence is incomplete or ambiguous and remains labeled unresolved.

Customer screenshot output may remain clean and non-technical, but its accompanying evidence must identify simulated versus authoritative posture. A prototype must never imply that simulated state is live.

Raw entity IDs do not appear in normal customer UI. Technical bindings may retain them only in authorized internal records.

## 8. Deterministic approval prototypes

Once compliance matters, approval prototypes use deterministic browser-rendered HTML/CSS/JavaScript or the governed implementation component system. They use INSTALL006 behavior and DESIGN001 tokens/components.

Evidence records:

- source commit;
- fixture version and evidence date;
- viewport and device class;
- theme, size, and font;
- simulated/registry-known/live classification;
- interaction state demonstrated;
- browser/renderer; and
- known limitations.

Generated concept art is inspiration only. Browser screenshots from the deterministic output are the approval proof.

## 9. Validation contract

Each implementation validates the applicable set:

- exact file/task scope and no unexpected deletes;
- direct load without console or local-resource errors;
- canonical navigation and customer-safe labels;
- Light, Dark, and Auto;
- Compact, Default, and Large;
- Inter, Atkinson Hyperlegible, and System;
- Default + Inter initial state;
- equal comparable-tile geometry and 48/48/56px actions;
- available, hover/focus, pressed, pending, selected, failure/result-unknown, and disabled states;
- responsive phone, tablet, desktop, and authorized wall-display widths;
- keyboard/focus, contrast, semantic HTML, accessible names, and reduced motion;
- installed/unavailable/not-installed visibility;
- Current/Recent/Resolved and offline/stale/degraded/unknown behavior;
- no raw IDs or invented location/capability/state;
- fixture/provenance/freshness truthfulness;
- no production/live/protected-system changes beyond exact authority; and
- deterministic screenshots and task-specific acceptance evidence.

## 10. Registration, assignment, rollback, and handoff

Repository approval does not register or deploy a dashboard. A separate bounded runtime task must identify:

- exact Home Assistant instance and dashboard resource;
- authorized registration and user/device assignment;
- dependency/resource readiness;
- backup and rollback procedure;
- live binding validation;
- customer acceptance surfaces;
- installer/service visibility;
- handoff/training updates; and
- post-change evidence.

If registration, assignment, binding, or validation fails, the runtime task follows its approved rollback and does not treat repository prototype approval as live acceptance.

## 11. Privacy, safety, and acceptance

Do not expose secrets, credentials, private URLs, raw export attachments, customer-private data, unique IDs, connections/MACs, or diagnostic internals in customer output or committed sanitized derivatives unless an exact technical task requires a specific field.

Delivery is on-standard when responsive modes, verified assembly, evidence binding, fixture classification, deterministic proof, validation, and registration/rollback/handoff boundaries preserve INSTALL006 meaning and DESIGN001 presentation without inventing facts or authorizing runtime work.
