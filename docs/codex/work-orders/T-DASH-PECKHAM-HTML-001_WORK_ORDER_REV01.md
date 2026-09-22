# T-DASH-PECKHAM-HTML-001 - Isolated Functional Peckham HTML Approval Prototype

**Revision:** REV01

**Status:** PREPARED - NOT DISPATCHED OR EXECUTED

**Category:** GOV

**Primary Workstream:** Dashboard / Interactive Experience System

**Related Workstreams:** Project Governance; Visual System; Home Assistant Platform

**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

READ MODE: TARGETED

Context target: LOW. This work order is implementation-ready but does not authorize execution by itself.

## 1. Dispatch and branch gate

A later explicit operator instruction must dispatch this task. At execution start, confirm the exact current-context/task gate and exact `DASHBOARD-CAMPAIGN-001` block. Add only the missing bounded MTR child record if current governance permits it.

Use one fresh child-task branch and one draft PR when dispatched. Do not merge or deploy.

## 2. Objective

Create an isolated, functional, deterministic browser-rendered Peckham dashboard approval prototype using plain HTML, CSS, and JavaScript. It has no Home Assistant connection, backend, API, production route, authentication, live device binding, or deployment.

## 3. Low-context read contract

Required normal reads only:

1. Exact current-context/task gate.
2. Exact `DASHBOARD-CAMPAIGN-001` MTR block.
3. Relevant INSTALL006 REV02 sections for navigation, status/Activity/Alert behavior, capability visibility, command states, footer, and proof.
4. Relevant DESIGN001 REV02 sections for tokens, typography, tile/media/status/action components, themes, focus, and reduced motion.
5. Relevant DASHBOARD001 REV02 sections for size modes, responsive delivery, fixtures, deterministic proof, and validation.
6. Exact relevant Peckham sanitized binding-register section.
7. HA-BACKUP001 REV02 registry-consumption section only if canonical raw registry-export files are supplied for this task.

Do not normally read:

- Dashboard Governance Map/Master;
- superseded dashboard standards;
- customer-dashboard-design-standard;
- customer-dashboard-philosophy;
- INSTALL007;
- BKLF/Bailey history;
- PR #578 diff/history;
- the full MTR; or
- broad catalogs/manifests.

Use exact headings and fields. Do not perform broad repository discovery after owner paths resolve. Do not read a full owner file unless exact headings cannot resolve a requirement; report any such read as a context-budget exception. Target Context Pressure = LOW.

## 4. Owner Routing Matrix

| Need | Canonical owner | Prototype use | Boundary |
| --- | --- | --- | --- |
| Architecture and functional behavior | INSTALL006 REV02 | Customer hierarchy, navigation, status, Activity/Alert, controls, unavailable behavior, footer | No auth/runtime authority |
| Visual and components | DESIGN001 REV02 | Exact tokens, type, tiles, fields, media, buttons, themes, accessibility | No functional/binding authority |
| Delivery, binding and validation | DASHBOARD001 REV02 | Responsive modes, Peckham assembly, fixture classes, proof and validation | No live binding/registration authority |
| Peckham facts | Peckham pre-onsite binding register | Sanitized verified inventory only | No invented entity/location/state |
| Registry exports, if supplied | HA-BACKUP001 REV02 | Temporary evidence interpretation only | Raw exports remain transient and uncommitted |

STOP if these owners are superseded or conflict.

## 5. Exact file allowlist

Prototype root: `prototypes/dashboard/peckham/`

- `prototypes/dashboard/peckham/index.html`
- `prototypes/dashboard/peckham/styles.css`
- `prototypes/dashboard/peckham/app.js`
- `prototypes/dashboard/peckham/peckham-fixture.js`
- `prototypes/dashboard/peckham/README.md`
- `docs/system/master-task-register.md` only for the authorized child task record/closeout.

No other file may be created or modified. Screenshots are ignored temporary review evidence and are not committed.

## 6. Required prototype behavior

- Functional local navigation: Home, Systems, Activity, Explore WNYHS, Support, Property, Settings.
- `Explore WNYHS` visibly marked `COMING SOON`.
- Dark / Light / Auto switching.
- Compact / Default / Large switching with exact labels.
- Inter / Atkinson Hyperlegible / System switching.
- Initial state: Default + Inter.
- INSTALL006 Current/Recent/Resolved, Attention/Alert, unavailable/unknown, and command lifecycle behavior demonstrated through deterministic fixtures.
- Available/Off, Hover/Focus, Momentary Pressed, Command Pending, Selected/On, Failure/Result Unknown, and Disabled control presentation.
- Persistent Selected/On only after explicit simulated authoritative confirmation in the fixture model; click alone does not claim live confirmation.
- Equal governed tiles, standardized header/divider, 16:9 media footprint, right-justified Status Value Fields, and the single action family.
- Action heights: 48px Compact, 48px Default, 56px Large.
- Footer actions: Support, Call WNYHS, Email Support; plus weather and date/time in the governed region.
- `WNY HOME SECURITY` single-line where width permits.
- No backend, API, live HA, production route, external write, or network dependency.

## 7. Peckham fixture contract

- Persistent identity: `PK | PECKHAM`.
- Building Status truthfully scoped to represented contact coverage.
- Sensor 13 is Main Entrance Door where currently authoritative.
- Remaining verified installed inventory is 15 generic first-floor window contacts with no invented physical locations.
- Doorbell and lock remain separate placeholders/capabilities with no invented binding.
- No raw entity IDs in normal customer UI.
- No claim of live lock, camera, sensor, weather, or device state.
- Registry-known capability, simulated approval state, authoritative live state, and unresolved mapping remain distinct.
- Developer/prototype evidence declares simulated data; customer screenshots remain clean without implying live state.

If canonical raw registry exports are supplied, consume them only as temporary evidence under HA-BACKUP001 REV02. Do not copy them into the repository. Registry presence is not current-state proof.

## 8. Status and visual rules

Customer status values are Normal, Active, Attention, Alert, and Unavailable. Only actual status-value text uses its semantic accent; prose, labels, titles, navigation, timestamps, helpers, and button labels do not.

WNYHS gold is identity, blue is interaction, and `• LIVE` appears only for a confirmed live media condition. A prototype simulation should omit `• LIVE` unless the developer evidence and customer output make the simulation unmistakable.

Use DESIGN001 tokens rather than one-off visual values.

## 9. Accessibility and responsive behavior

- All controls support keyboard use and visible focus.
- Use semantic HTML, accessible names, readable contrast, and reduced-motion support.
- Phone, tablet, desktop, and applicable wall-display widths have no horizontal scrolling, clipped primary controls, or hidden current status.
- Theme, size, and font change presentation only; state, permissions, and action availability stay fixed.

## 10. Forbidden scope

Do not edit or connect Home Assistant YAML/live systems; register/assign/deploy dashboards; alter locks/access, cameras/Reolink, automations/scripts/helpers, notifications, Cloudflare/network, website/runtime/routes, CRM/HubSpot, Stripe/payment, scheduling/email/APIs, customer data, secrets, dependencies, package files, or package-lock.

Do not invent entity IDs, locations, logo paths, capabilities, bindings, permissions, or live state. Do not import Bailey/BKLF customer data. Do not modify/merge PR #578. Do not merge, mark ready, enable auto-merge, or deploy the child PR.

## 11. Validation

Required:

1. Exact six-file allowlist and no deletions.
2. Direct local browser load with no console or local-resource errors.
3. All seven navigation destinations and footer actions work locally.
4. All three themes, sizes, and fonts work; initial state is Default + Inter.
5. Required control and INSTALL006 behavior states are demonstrated without false live claims.
6. Equal tile geometry, 16:9 media, governed fields/headers/dividers, and 48/48/56px action heights.
7. Main Entrance Door plus 15 generic windows and separate doorbell/lock placeholders; no invented mapping/capability.
8. Responsive, keyboard/focus, contrast, semantics, names, and reduced-motion checks.
9. No raw entity IDs or raw registry exports in committed/customer output.
10. Deterministic browser screenshots as ignored temporary operator/customer review evidence.
11. No production, live, dependency, protected-system, or PR #578 change.
12. Changed-file audit, unexpected-delete check, conflict-marker scan, and `git diff --check`.

Do not install a dependency for validation. If required browser capability is unavailable, stop with the exact blocker.

## 12. Git and closeout

When dispatched, create `task/t-dash-peckham-html-001` from synchronized `main`, one bounded implementation commit, and one draft PR to `main`. Suggested commit: `prototype: add isolated Peckham dashboard approval harness`.

Report branch, commit, draft PR, exact files, fixture/evidence posture, validation, screenshot/cleanup posture, Context Pressure and exceptions, protected systems, PR #578 deferred/unmerged, and no merge/deploy.

## 13. Stop and exit

STOP if authorization is absent, campaign is closed, owners conflict, evidence cannot support a fixture claim, the allowlist must expand, a live/protected system or dependency is required, browser validation is unavailable, or secrets/private data appear.

Complete only when the five-file isolated prototype plus one MTR record are the sole changes; deterministic behavior/visual validation passes; customer output contains no raw IDs or false live claims; one draft PR is open; and no live-system change, merge, or deployment occurred.
