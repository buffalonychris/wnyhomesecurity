# WNYHS Customer Dashboard Philosophy

Status: Active design-system philosophy
Customer-facing: No
Implementation authority: No
Task ID: DASHBOARD-PHILOSOPHY-001

---

## 1. Purpose

This document governs customer-facing dashboard design philosophy for WNYHS Home Assistant deployments.

WNYHS customer dashboards are reassurance dashboards, not diagnostic dashboards. Their first job is to answer one customer question:

> Is my property okay?

Implementation details belong in task-specific dashboard files, Home Assistant work orders, installer records, and customer/job artifacts. This document does not create dashboard YAML, Lovelace cards, frontend assets, automations, themes, customer-specific dashboards, runtime files, or implementation changes.

## 2. Primary Design Principle

The dashboard exists to provide confidence, not diagnostics.

Customers should see a clear summary first. The first screen should make the current property state understandable without requiring a customer to interpret raw device, helper, or sensor states.

Technical state should be hidden unless it is needed for customer action or the user intentionally enters a details or technician-facing view.

The customer does not receive a generic Home Assistant dashboard. The customer receives a WNY Home Security control experience powered by Home Assistant.

Customer dashboards must be simple, non-technical, task-based, and outcome-based. They should show only installed capabilities that benefit that customer. They must not include placeholder panels, future-feature panels, unused modules, entity IDs, raw diagnostics, RSSI, firmware details, logs, YAML concepts, or irrelevant Home Assistant features.

The main dashboard should answer three questions:

1. Is my property okay?
2. Do I need to do anything?
3. What are my most common actions?

## 3. Reassurance-First Language Model

Preferred customer-facing language:

- Everything Looks Good
- Building Secure
- Please Check the Building
- Front Entrance Unlocked
- West Service Door Open
- Motion Detected After Hours
- Person at Front Door
- Doorbell Ready
- Lock Ready

Avoid this language on customer-facing dashboards:

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

These avoided terms may appear in technician-facing documentation or service views when they help setup, maintenance, or troubleshooting. They should not appear in the normal customer daily-use dashboard.

## 4. Severity Model

Customer dashboards should use four severity levels.

| Severity | Customer meaning | Examples |
| --- | --- | --- |
| Normal | Everything looks good. No action needed. | All doors secure; everything closed; no motion detected; cameras ready; lock ready. |
| Information | Something happened, but the condition is routine. | Visitor detected; package delivered; doorbell pressed; camera saw activity. |
| Attention | The customer or technician should review the condition. | Door left open; door unlocked longer than expected; device offline but not security-critical; battery review needed. |
| Critical | A genuinely urgent condition needs clear priority. | Motion detected after hours; Smoke/CO alarm; water leak; panic event; entry event while armed or after hours. |

UI language should remain calm and polite unless the condition is genuinely critical. Even critical language should be clear and actionable, not dramatic.

## 5. Information Hierarchy

Default customer-facing dashboard priority:

1. Overall building/property status
2. Doorbell / visitor interaction
3. Live cameras
4. Lock and access control
5. Doors/windows
6. Motion/activity
7. System health
8. Technician diagnostics, if available, only in technician-facing views

For BK Lewis Funeral Home specifically, the doorbell, two-way communication, and remote lock/unlock workflow are the primary product value. Cameras, doors/windows, motion, batteries, and history support that workflow but should not compete with it on the first customer screen.

## 6. Doorbell Priority Standard

For any customer site with a video doorbell:

- Doorbell card/page must appear before secondary cameras.
- Doorbell video should be visually dominant.
- Talk / Speak control should be prominent wherever reliably supported.
- Unlock/Lock controls should be prominent where an electronic lock is installed.
- Instructions should be minimized; task-based buttons should be preferred.

The doorbell is not just another camera. It is an interaction surface, and the dashboard should treat it as a primary customer task.

## 7. Progressive Disclosure

Normal customer pages should summarize:

- All doors secure
- Everything closed
- No motion detected
- Cameras ready
- Lock ready

Individual sensors and diagnostic details should appear only when:

- something needs attention, or
- the user enters a details/technician page.

Progressive disclosure keeps the customer dashboard calm during normal operation and makes exceptions easier to notice when they occur.

Customer-facing detail should appear only when it helps a customer understand or act on the current state. Installer/service detail belongs outside the normal customer dashboard.

## 8. Customer vs Technician Dashboard Separation

Customer dashboard content should include:

- large readable controls
- plain language
- reassurance summaries
- visitor/door/lock/camera actions
- minimal text

Technician dashboard content may include:

- entity states
- battery percentages
- integrations
- unavailable entities
- helper/template diagnostics
- YAML troubleshooting references
- raw event history

The customer dashboard and technician dashboard may reference the same system state, but they should not expose the same level of detail or vocabulary.

## 9. Layout Standard

Customer dashboard cards should prioritize:

- large touch targets
- simple card titles
- minimal rows per card
- clear visual hierarchy
- mobile-first layout
- consistent page order
- consistent light/dark layout
- phone portrait, tablet portrait, tablet landscape, desktop browser, and Home Assistant Companion App compatibility

Colors and styling may change between themes, but layout, interaction model, status meaning, and customer language should remain stable.

Responsive behavior:

- Phone: single-column, large controls, minimal scroll.
- Tablet: two-column where appropriate, larger camera/status cards.
- Desktop: wider layout without information overload.
- Navigation, terminology, colors, and control meaning must remain consistent across device classes.

## 10. BK Lewis Dashboard Notes

Current BK Lewis design direction:

- The current dashboard is technically functional but too Home Assistant-like for non-technical customers.
- Future redesign should reduce visible sensor clutter.
- Doorbell should always appear first among interaction cards.
- The front door / visitor workflow is the primary feature.
- Remote lock/unlock is a primary feature.
- Cameras, doors/windows, motion, batteries, and history are secondary support information.
- "Entity not found" or similar technical errors must never appear on customer-facing dashboards.

These notes document reusable design lessons from the BK Lewis Funeral Home dashboard review. They do not authorize BK Lewis dashboard implementation or customer-specific Home Assistant changes.

## 11. Implementation Rule

No implementation should occur from this philosophy document alone.

Any dashboard changes must be represented as a bounded task in `docs/system/master-task-register.md` and executed through a task-specific Codex work order.

Future dashboard implementation tasks must identify target files, customer/job scope, Home Assistant YAML boundaries, validation, rollback posture, protected-system checks, and customer versus technician visibility rules before work begins.

## 12. Protected-System Boundaries

This document does not authorize:

- Home Assistant YAML changes.
- Customer dashboard file changes.
- Dashboard implementation.
- UI, route, CSS, token, or public-site changes.
- Runtime/API changes.
- HubSpot schema, property, pipeline, workflow, or write-path changes.
- Stripe/payment verification or checkout changes.
- Scheduling/calendar authority changes.
- Resend/email runtime changes.
- Cloudflare configuration changes.
- Dependency or package-lock changes.
- Secret or environment-value exposure.
