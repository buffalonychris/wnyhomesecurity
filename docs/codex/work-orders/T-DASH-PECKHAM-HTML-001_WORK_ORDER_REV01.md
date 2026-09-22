# T-DASH-PECKHAM-HTML-001 - Isolated Functional Peckham HTML Approval Prototype

**Revision:** REV01

**Status:** PREPARED - NOT DISPATCHED OR EXECUTED

**Category:** GOV

**Primary Workstream:** Dashboard / Interactive Experience System

**Related Workstreams:** Project Governance; Visual System; Automation System; Infrastructure / Deployment System

**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

READ MODE: TARGETED

Search the exact task ID, authority headings, owner sections, and Peckham evidence fields. Do not broadly load catalogs, manifests, backups, inventories, or unrelated dashboard history.

## 1. Dispatch gate

This repository-owned work order is implementation-ready but is not dispatched by `DASH-GOV-REFRESH-001`. A later explicit operator instruction must authorize execution. At execution start, add only the missing bounded MTR task record if current governance permits prompt-created child tasks under `DASHBOARD-CAMPAIGN-001`.

Do not infer authorization from this file's existence. Execute one task, one branch, and one draft PR. Do not merge or deploy.

## 2. Objective

Create an isolated, functional, deterministic browser-rendered Peckham dashboard approval prototype using plain HTML, CSS, and JavaScript. The prototype is not connected to Home Assistant, an API, a production route, customer authentication, or live devices.

## 3. Required precheck and reads

Before edits:

1. Confirm a clean branch based on synchronized `origin/main`.
2. Confirm `DASHBOARD-CAMPAIGN-001` remains ACTIVE and still does not authorize implementation by itself.
3. Confirm this exact work order is operator-dispatched.
4. Confirm no newer active owner supersedes the named REV02 standards.
5. Confirm PR #578 remains deferred and do not modify its branch.

Required targeted reads:

- root `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
- `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
- `docs/design-system/customer-dashboard-design-standard-rev02.md`
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
- `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md`
- `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md`

Reference only: PR #578 summary/diff and current Peckham dashboard YAML. Do not edit or import implementation from the deferred branch.

## 4. Owner Routing Matrix

| Concern | Canonical owner | Prototype action | Boundary | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- |
| Status, tile, action, typography, brand semantics | DESIGN001 REV02 | Implement governed components and states | No live or authoritative state | NO | HIGH |
| Compact/Default/Large and equal grids | DASHBOARD001 REV02 | Implement deterministic responsive modes | No arbitrary zoom | NO | HIGH |
| Navigation, footer, dashboard class, approval proof | INSTALL006 REV02 | Implement local functional shell and proof harness | No auth, route, or registration authority | NO | HIGH |
| Product hierarchy and customer-safe experience | Customer Dashboard Design Standard REV02 | Implement customer approval composition | No new product behavior | NO | HIGH |
| Peckham inventory | Peckham binding register | Use sanitized verified inventory only | No invented entity/location/state | NO | HIGH |
| Prototype implementation | This work order | Create exact isolated allowlist below | No production or HA integration | NO | HIGH |

STOP if any row is no longer correct or a newer owner creates a conflict.

## 5. Exact target and file allowlist

Prototype root: `prototypes/dashboard/peckham/`

Implementation files:

- `prototypes/dashboard/peckham/index.html`
- `prototypes/dashboard/peckham/styles.css`
- `prototypes/dashboard/peckham/app.js`
- `prototypes/dashboard/peckham/peckham-fixture.js`
- `prototypes/dashboard/peckham/README.md`

Governance bookkeeping:

- `docs/system/master-task-register.md` only to add/update the `T-DASH-PECKHAM-HTML-001` task record when authorized.

No other file may be created or modified. Browser screenshots are temporary ignored review evidence and must not be committed. Do not alter ignore rules merely to store them.

## 6. Required prototype behavior

- Functional local navigation in this exact order: Home, Systems, Activity, Explore WNYHS, Support, Property, Settings.
- `Explore WNYHS` is visibly marked `COMING SOON`.
- Dark, Light, and Auto theme switching.
- Compact, Default, and Large switching using those exact labels.
- Inter, Atkinson Hyperlegible, and System font switching.
- Initial/default presentation is Default size plus Inter.
- Available/Off, Hover/Focus, Momentary Pressed, Command Pending, Selected/On, and Disabled button states.
- Persistent depressed state for stateful demo controls only after the prototype's explicit simulated-state confirmation; click alone must not be represented as live authoritative confirmation.
- Equal-size governed tiles, standardized circular-icon headers/dividers, and right-justified chiseled Status Value Fields.
- One customer action-button family with 48 px height in Compact/Default and 56 px in Large.
- Functional footer buttons for Support, Call WNYHS, and Email Support.
- Footer current-weather location plus date/time. Any fixture weather/time behavior must be clearly documented as simulated in developer/prototype context.
- `WNY HOME SECURITY` appears on one line where width permits.
- No backend, API, live Home Assistant, production route, or external write.

## 7. Status and visual rules

Customer status values are limited to Normal, Active, Attention, Alert, and Unavailable. Actual status values are the only text that may use their semantic accent colors. Unavailable/unknown uses governed neutral gray. Titles, descriptions, labels, navigation, timestamps, button labels, helper text, and prose remain neutral/identity/action-role text.

Red `• LIVE` may appear only if the prototype explicitly represents a confirmed simulated media condition in its developer fixture state and the customer-facing output cannot be mistaken for actual live service. Omitting it is preferred when that distinction cannot be made cleanly.

Blue identifies executable action surfaces; WNYHS gold identifies brand, governed tile icons, tile titles, and restrained identity accents. No primary/secondary visual button split is allowed.

## 8. Peckham fixture contract

- Use only sanitized repository-authorized Peckham evidence.
- Persistent site identity is `PK | PECKHAM` and the customer surface includes Building Status scoped truthfully to represented contact coverage.
- Sensor 13 is Main Entrance Door where currently authoritative.
- Represent the remaining verified installed contact inventory as 15 generic first-floor window contacts without inventing physical window locations.
- Do not expose raw entity IDs in normal customer UI.
- Doorbell and lock are separate placeholders/capabilities; do not invent a binding or combine them as one device.
- Do not claim live lock, camera, sensor, weather, or device state.
- Preserve separation between registry-known capability, unresolved binding, and simulated UI state.
- Developer/prototype documentation must visibly declare simulated data; clean customer screenshot output remains non-technical and must not imply live state.

## 9. Functional and accessibility expectations

- Navigation buttons change the visible local panel without a page error.
- Theme, size, and font selectors visibly update the governed tokens/components.
- Stateful demo controls expose selected/depressed behavior and can demonstrate pending/disabled states without implying device execution.
- Keyboard navigation and visible focus work for all interactive controls.
- Semantic HTML, accessible names, adequate contrast, and reduced-motion safety are preserved.
- Layout remains usable at representative phone, tablet, and desktop widths without horizontal scrolling or clipped primary controls.

## 10. Forbidden scope and protected systems

Do not:

- edit Home Assistant YAML or connect to live Home Assistant;
- register, assign, deploy, or bind a dashboard;
- invent entity IDs, window locations, logo paths, capabilities, or live state;
- alter locks/access, cameras/Reolink, automations/scripts/helpers, notifications, or device behavior;
- change production website source, routes, navigation, SEO, or runtime;
- change Cloudflare/network/DNS/environment, CRM/HubSpot, Stripe/payment, scheduling, email, APIs, customer data, or secrets;
- add dependencies or modify package/package-lock files;
- use custom-card, theme, logo, external-font, or network dependencies;
- copy Bailey/BKLF-specific customer data into Peckham;
- modify or merge PR #578;
- merge this task PR, enable auto-merge, mark ready, or deploy.

## 11. Validation

Required:

1. Exact six-file changed allowlist and no deletions.
2. Direct local browser-load smoke test of `index.html` with no console errors or failed local resources.
3. Functional checks for all seven navigation destinations and all footer buttons.
4. Checks for Dark / Light / Auto, Compact / Default / Large, and Inter / Atkinson Hyperlegible / System.
5. Default state check: Default + Inter.
6. Checks for available, hover/focus, pressed, pending, selected, and disabled behavior.
7. Geometry checks for equal comparable tiles and 48/48/56 px action heights.
8. Content checks for exact navigation, COMING SOON, status-text exclusivity, Status Value Fields, governed headers/dividers, brand treatment, footer weather/date-time placement, and scoped Building Status.
9. Peckham checks for Main Entrance Door plus 15 generic windows, separate doorbell/lock placeholders, no invented location/binding/capability, and no raw entity IDs in customer UI.
10. Responsive checks at representative phone, tablet, and desktop widths; keyboard/focus and accessibility review.
11. Deterministic browser screenshots for operator/customer visual approval, retained only as ignored temporary evidence.
12. Confirm no production route/runtime, live system, dependency, package-lock, protected-system, or PR #578 change.
13. `git diff --check`, changed-file audit, unexpected-delete check, and applicable local static-source validation.

Do not run or install a new dependency merely for validation. If a required browser capability is unavailable, stop and report the exact blocker.

## 12. Git and delivery

- Start from clean synchronized `main` and create a fresh `task/t-dash-peckham-html-001` branch.
- Use one bounded task, one implementation commit, and one draft PR to `main`.
- Suggested commit: `prototype: add isolated Peckham dashboard approval harness`
- Suggested PR title: `T-DASH-PECKHAM-HTML-001 - build isolated Peckham dashboard prototype`
- Commit only the exact allowlist. Push the task branch and open the PR as DRAFT.
- Do not merge, mark ready, enable auto-merge, or deploy.

## 13. Closeout / RSI

Report branch, commit SHA, draft PR URL, exact files, interactions implemented, fixture/evidence posture, validation results, screenshots produced and cleanup/ignore posture, protected-system confirmation, no-production/no-live-system confirmation, no-merge/no-deploy confirmation, unresolved risks, and the canonical Token Utilization / RSI Report.

Explicitly state that PR #578 remains deferred and unmerged.

## 14. Stop conditions

STOP if authorization is absent; the standing campaign is closed; a newer owner conflicts; exact evidence cannot support a fixture claim; the file allowlist must expand; a production/live/protected system is required; browser validation is unavailable; secrets/private data appear; or any requested behavior requires a new dependency.

## 15. Exit criteria

Complete only when the isolated five-file prototype and one MTR record are the sole changes; all required local interactions and visual rules work; deterministic browser validation and screenshots pass; customer output contains no raw IDs or false live claims; protected systems and PR #578 remain untouched; one draft PR is open; and no merge or deployment occurred.
