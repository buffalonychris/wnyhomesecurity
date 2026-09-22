# DESIGN001 - WNYHS Customer Interface Standard - REV02

Status: Active design-system standard

Customer-facing: No

Implementation authority: Design and governance authority only; implementation requires a separate bounded task

Task ID: DESIGN001-WNYHS-CUSTOMER-INTERFACE-STANDARD-001

Primary workstream: Dashboard / Interactive Experience System

Predecessor: `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV01.md` (SUPERSEDED)

Work order: `docs/codex/work-orders/DASH-GOV-REFRESH-001_WORK_ORDER_REV01.md`

## 1. Purpose and authority

This standard is the canonical owner for customer-facing dashboard visual semantics, status presentation, tile anatomy, customer action treatment, typography, accessibility, and brand posture. It supersedes REV01 in full. Historical REV01 language does not remain active where it conflicts with this revision.

`DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` owns responsive size modes and grid composition. `INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` owns dashboard classes, customer navigation, footer composition, and approval-proof architecture. Customer-specific files and examples are evidence only.

This document does not authorize dashboard implementation, live Home Assistant changes, entity binding, automation, deployment, or protected-system work.

## 2. Customer-first foundation

- Customer dashboards answer what is happening, whether attention is needed, and what safe action is available.
- Plain customer language replaces entity IDs, helper names, integration internals, YAML terms, logs, firmware strings, and diagnostic vocabulary.
- Only installed, verified, and authorized capabilities appear as live customer functionality.
- Customer, installer, and service content remain separated.
- Status meaning uses text and supporting icons; color is never the sole carrier of meaning.
- The interface must not imply monitoring, dispatch, emergency response, promised prevention, or third-party authority.

## 3. Canonical customer status states

Customer-facing status values use exactly these five states:

1. `Normal`
2. `Active`
3. `Attention`
4. `Alert`
5. `Unavailable`

`Hidden/noise` is a visibility classification, not a customer severity or status value. Technical or installer classifications may be mapped to the five customer states only by a bounded implementation rule grounded in authoritative state. Unknown state must not be presented as normal.

The earlier four-severity philosophy vocabulary and the REV01 installer five-class table are superseded for customer-visible status labels by this canonical set. The customer-dashboard philosophy remains active only for its non-conflicting reassurance and customer-first principles.

## 4. Color-role discipline

| Role | Governed use |
| --- | --- |
| WNYHS gold | Identity: logo, governed tile icon, tile title, and restrained identity accents. |
| Blue | Executable customer interaction surfaces. |
| Green `#22C55E` | Actual `Normal` / good status-value text only. |
| Blue `#0A84FF` | Actual `Active` status-value text only. |
| Amber `#F5A524` | Actual `Attention` status-value text only. |
| Red `#EF4444` | Actual `Alert` status-value text only. |
| Neutral unavailable gray `#94A3B8` | Actual `Unavailable` or unknown status-value text only. |

Titles, descriptions, labels, helper text, navigation, timestamps, button labels, and general prose must not use semantic status text colors. Status colors do not authorize risky actions, and risky actions must remain deliberate and clearly labeled.

Red `• LIVE` is reserved for a confirmed live media or broadcast state. It is not an alert label and must not appear when live state is simulated, unavailable, or unknown.

## 5. WNYHS Status Value Field

Every displayed customer status value uses the governed Status Value Field:

- a neutral status label on the left;
- a right-justified value field on the right;
- fixed, tokenized geometry within the active size mode;
- aligned right-side value columns for multiple rows;
- a recessed, chiseled, dimensional treatment using controlled border contrast, inset shadow, and depth cues;
- identical field geometry across severities;
- semantic color on the actual status value text only; and
- mandatory plain-language value text.

## 6. Standard tile anatomy

Every dashboard tile uses this sequence when applicable:

`header identity -> divider -> content/media -> status -> actions`

The header identity contains:

- a dark filled circular icon container with governed diameter;
- a precisely centered governed-size icon in WNYHS gold;
- a WNYHS-gold title;
- a muted-neutral subtitle or description; and
- standardized typography and spacing.

A governed divider sits immediately below the complete icon/title/subtitle region. Divider thickness, inset, opacity, and spacing are tokenized and consistent. Comparable tiles must not invent their own header, divider, status-field, media, or action geometry.

## 7. One customer action-button family

All customer actions use one visual button family. Primary-versus-secondary appearance families are retired. Width may vary with available layout and action count; the governed height and anatomy do not.

| Size mode | Button height |
| --- | --- |
| Compact | 48 px |
| Default | 48 px |
| Large | 56 px |

When width is insufficient, layout reflows rather than shrinking button height or anatomy. Arbitrary-height, double-height, square icon-over-label, module-specific, Quick Actions-specific, Climate-specific, and Support-specific button geometry is prohibited.

Required states are:

- Available / Off
- Hover / Focus
- Momentary Pressed
- Command Pending
- Selected / On
- Disabled

Selected / On uses a darker blue fill with inset/chiseled/depth treatment while external dimensions remain fixed. A stateful control stays depressed only when authoritative state confirms it. A click alone must not permanently assert selected state. Multiple controls may remain selected only when simultaneous states are valid; mutually exclusive controls show only the authoritative active mode.

Security-sensitive actions require plain labels, icon-plus-text where needed for safety, and any separately governed confirmation. They are not made safe merely by using the standard button family.

## 8. Typography, brand, and themes

Approved customer typefaces are:

- `Inter` - default;
- `Atkinson Hyperlegible` - easy-read option; and
- `System` - device/system option.

Typography is tokenized. Arbitrary fonts are prohibited. `Default` mode uses `Inter`.

`WNY HOME SECURITY` uses a single-line wordmark treatment where width permits. The default header must not oversize `WNY` above a materially smaller second-line `HOME SECURITY`. Branding remains subordinate to operational clarity.

Light, Dark, and Auto preserve structure, navigation, permissions, status meaning, language, action availability, focus visibility, and contrast. Theme changes do not reassign semantic roles.

## 9. Accessibility and protected behavior

- Preserve phone readability, keyboard focus, strong contrast, icon-plus-text meaning, and customer-readable labels.
- Do not expose secrets, credentials, private URLs, customer-private data, or technician-only detail.
- Do not permit AI, scripts, or shortcuts to perform lock, unlock, disarm, bypass, alarm, access, or other security-sensitive behavior without separate exact authorization.
- Do not claim outside response, agency action, continuous monitoring, guaranteed safety, or promised outcomes.

## 10. Implementation boundary and acceptance

An implementation task must name the customer/site, exact files, verified capability inventory, views, bindings, validation, rollback posture, and protected-system boundaries. It must not infer live state or capabilities from this standard.

The interface is on-standard only when the five customer statuses, status-text exclusivity, standardized Status Value Field, tile header/divider, one button family, approved typography, accessible themes, customer/technician separation, and claims boundaries are all preserved.
