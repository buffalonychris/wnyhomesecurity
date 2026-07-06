# BKLF Dashboard Follow-Up Notes REV01

Status: Documentation / planning follow-up notes
Customer-facing: No
Implementation authority: No
Task ID: BKLF-DASHBOARD-STANDARD-PROMOTION-001
Primary workstream: Dashboard / Interactive Experience System

Related standards and source docs:

- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV01.md`
- `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV01.md`
- `docs/design-system/customer-dashboard-design-standard-rev01.md`
- `docs/design-system/customer-dashboard-philosophy.md`
- `docs/home-assistant/bklf/inventory/dashboard-inventory.md`
- `docs/home-assistant/bklf/inventory/runtime-notes.md`

---

## 1. Purpose

BKLF is the first public WNY Home Security Home Assistant customer-dashboard reference deployment.

This document preserves live Home Assistant Companion phone validation lessons from the BKLF customer dashboard and converts them into repo-durable follow-up notes tied to the WNYHS customer interface and responsive delivery standards.

These notes identify future improvement opportunities only. They do not authorize implementation, live Home Assistant changes, dashboard YAML changes, theme changes, package changes, automation changes, website changes, runtime/API changes, protected-system changes, or customer handoff changes.

## 2. Current Validated Strengths

The current BKLF mobile dashboard is close to the target WNYHS customer-control experience. The live phone review showed several strengths that should be preserved in future work:

- WNYHS brand identity is visible and the experience reads as a WNYHS customer surface instead of raw Home Assistant.
- The South Entrance / Front Door workflow is clear.
- The live doorbell view is present and supports the primary customer use case.
- Talk, Unlock, View, Snapshot, and Lock actions are visible and task-based.
- Light, Dark, and Auto controls are available.
- Semantic color direction is generally present, with green for safe/locked states, cautionary treatment for access-sensitive actions, and WNYHS gold for brand/navigation emphasis.
- The dashboard already feels closer to a customer-facing app than a technical Home Assistant default dashboard.

These strengths should be treated as preservation requirements for future BKLF polish tasks.

## 3. Mobile Screenshot Observations

Live Home Assistant Companion phone screenshots showed that the current experience is strong, but several mobile refinements should be captured for later bounded tasks:

- The header consumes too much vertical space on phone portrait.
- The top status card is visually too aggressive when the condition is not truly critical.
- The live camera should dominate more strongly when entry/video is the primary workflow.
- Primary action buttons are strong and should mostly be preserved.
- The large green lock/status card competes with video for first-screen priority.
- The View Cameras card is oversized and feels like a promotional card on phone.
- Recent Activity wraps poorly and needs short event summary formatting.
- Some headings are oversized for phone portrait.
- Phone layout should reduce visual weight above the primary workflow.

These observations align with the existing mobile-first dashboard standards: phone layouts should preserve clear status, make the primary workflow visible quickly, avoid low-value visual weight above primary actions, and keep event history short and readable.

## 4. Follow-Up Improvement Queue

The following queue is non-executable. Each item requires a separate bounded Codex implementation or planning task before any dashboard, theme, Home Assistant, or live-system work begins.

| Candidate task area | Follow-up intent | Implementation status |
| --- | --- | --- |
| BKLF mobile header compression | Reduce first-screen header height while preserving WNYHS/BKLF identity and status readability. | Not authorized. |
| BKLF status severity copy/state refinement | Make non-critical status calmer and reserve aggressive visual treatment for true attention or critical states. | Not authorized. |
| BKLF live camera prominence refinement | Let the doorbell/live entry video carry more of the first-screen workflow when visitor/entry interaction is the primary task. | Not authorized. |
| BKLF recent activity card redesign | Convert Recent Activity into short, phone-safe event summaries with less wrapping and better scanability. | Not authorized. |
| BKLF secondary navigation/card weight reduction | Reduce visual weight of secondary cards such as View Cameras when they compete with the primary workflow on phone. | Not authorized. |
| BKLF desktop/tablet expanded layout planning | Plan Customer Expanded Dashboard behavior for tablet and desktop surfaces without stretching the phone layout. | Not authorized. |
| BKLF event-history dashboard planning | Plan a customer-readable event-history surface separate from the first-screen mobile workflow. | Not authorized. |
| BKLF system-health/operator dashboard planning | Plan separated service/operator surfaces so normal customer views remain calm and non-technical. | Not authorized. |

## 5. Standards Linkage

These BKLF observations are a customer-specific continuation of existing WNYHS dashboard governance:

- `DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV01.md` controls customer-facing semantics, safety colors, action hierarchy, typography, branding, customer/technician separation, and protected-claim posture.
- `DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV01.md` controls phone, tablet, desktop, Companion App, and browser delivery expectations, including Customer Mobile Dashboard and Customer Expanded Dashboard variants.
- `customer-dashboard-design-standard-rev01.md` controls the WNYHS Customer Control Center product concept, mobile-first hierarchy, doorbell-first priority, action hierarchy, and BKLF-specific design direction.
- `customer-dashboard-philosophy.md` controls the reassurance-first dashboard posture and BKLF doorbell/front-entry priority.
- `docs/home-assistant/bklf/inventory/dashboard-inventory.md` records the current BKLF dashboard views, South Entrance / Front Door workflow, and customer-facing dashboard entities.
- `docs/home-assistant/bklf/inventory/runtime-notes.md` records sanitized runtime observations, composite status behavior, current customer-priority workflow, and validation boundaries.

If a future BKLF dashboard task conflicts with these standards or inventory facts, the task must stop and request a governance, inventory, or task-scope revision before implementation.

## 6. Implementation Boundary

This task does not change live Home Assistant.

This task does not change dashboard YAML.

Future visual/dashboard changes require separate bounded Codex implementation tasks with exact target files, validation, rollback posture, customer-versus-technician boundaries, and protected-system review.

No customer-facing outside-response, agency-contact, promised-outcome, continuous watch-service, or public-service-authority claims are authorized by these notes.

These notes do not authorize:

- Home Assistant YAML changes.
- Dashboard YAML changes.
- Theme changes.
- Package changes.
- Automation/script changes.
- Live BKLF Home Assistant changes.
- Website/source/runtime/API changes.
- Stripe, HubSpot, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, or secret changes.

## 7. Next Recommended Bounded Tasks

Recommended future bounded tasks:

- `BKLF-DASHBOARD-MOBILE-POLISH-003`: Compress the BKLF mobile header, refine status severity treatment, preserve primary actions, and rebalance the first-screen phone workflow around doorbell/live entry video.
- `BKLF-DASHBOARD-ACTIVITY-CARDS-001`: Redesign BKLF Recent Activity and event summary cards for short customer-readable phone formatting.
- `BKLF-DASHBOARD-EXPANDED-LAYOUT-001`: Plan BKLF Customer Expanded Dashboard behavior for tablet and desktop surfaces under DASHBOARD001.

These task IDs are recommendations only. They are not active and do not authorize implementation.
