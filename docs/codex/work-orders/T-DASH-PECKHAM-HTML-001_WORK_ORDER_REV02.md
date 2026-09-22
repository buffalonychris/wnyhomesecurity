# T-DASH-PECKHAM-HTML-001 — Standalone Email-Ready Peckham Dashboard Approval Demo

**Revision:** REV02  
**Status:** OPERATOR AUTHORIZED — EXECUTE THIS REVISION  
**Supersedes for execution:** `docs/codex/work-orders/T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md`  
**Category:** PROTOTYPE / VISUAL APPROVAL  
**Primary Workstream:** Dashboard / Interactive Experience System  
**Related Workstreams:** Visual System; Home Assistant Platform; Project Governance  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01  
**Standing campaign:** DASHBOARD-CAMPAIGN-001

READ MODE: TARGETED  
CONTEXT TARGET: LOW

## 1. Operator decision and objective

The operator requires an approval artifact immediately for customer review.

Create one **standalone, email-attachable, self-contained HTML dashboard demo** for BK Lewis Funeral Home — Peckham:

`prototypes/dashboard/peckham/Peckham_Dashboard_Review.html`

The file must work by itself when a reviewer:

1. receives the HTML file as an email attachment or ZIP attachment;
2. saves it anywhere on a Windows or macOS computer;
3. double-clicks it;
4. opens it directly in a current Chrome or Edge browser using a `file://` URL.

No local server, npm command, Home Assistant instance, backend, API, Cloudflare route, network connection, external stylesheet, external script, image file, font file, package installation, or repository checkout may be required by the reviewer.

This is a deterministic **approval demo**, not a live dashboard and not a deployment artifact.

## 2. Execution posture

PR #580 is merged into `main`, and the operator has confirmed local `main` synchronization.

The stale visual-task routing conflict is resolved. Dashboard-only UI work routes through:

- INSTALL006 REV02 — architecture and functional behavior;
- DESIGN001 REV02 — visuals and components;
- DASHBOARD001 REV02 — delivery, binding, and validation.

Do not load the public-site/public-funnel visual standards unless a genuine public-site/shared-public-brand dependency appears. None is expected for this standalone dashboard task.

PR #578 remains deferred and unmerged. It is lineage only and must not be read, modified, continued, copied, or merged.

## 3. Branch and task gate

Use the existing task branch:

`task/t-dash-peckham-html-001`

Do not create another branch.

Before implementation:

1. Confirm the branch is based on synchronized `main` containing merged PR #580 or a later main that preserves its routing correction.
2. Confirm `DASHBOARD-CAMPAIGN-001` remains ACTIVE using only its exact MTR block.
3. Confirm this REV02 work order is `OPERATOR AUTHORIZED`.
4. Add the bounded `T-DASH-PECKHAM-HTML-001` MTR child record using the current required schema if it does not already exist.
5. Do not load the full MTR.
6. Stop only for a real higher-authority conflict, missing required evidence, or required scope expansion.

## 4. Strict LOW-context read contract

### Required targeted reads only

Read these exact current sections, not whole documents unless a section cannot be resolved:

### A. Current execution gate
- `docs/system/step-current.md`
  - Enforcement Rules
  - Locked Standards Documents / dashboard routing clarification
  - Operational Authority Clarification

### B. Task gate
- `docs/system/master-task-register.md`
  - exact `DASHBOARD-CAMPAIGN-001` block only
  - exact `T-DASH-PECKHAM-HTML-001` block after creation/update only

### C. INSTALL006 REV02
`docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`

Read only:
- §2 Product and audience model
- §3 Customer information hierarchy
- §4 Canonical customer navigation
- §6 Canonical customer status meanings and priority
- §7 Current, Recent, and Resolved semantics
- §8 Activity Center behavior
- §9 Alert / Notification Center presentation
- §10 High-impact controls and command lifecycle
- §11 Offline, stale, degraded, unavailable, and unknown
- §12 Installed and capability visibility
- §14 Header, footer, and functional composition
- §15 Deterministic approval proof
- §16 Access, privacy, claims, and acceptance

### D. DESIGN001 REV02
`docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`

Read only:
- §2 Canonical visual tokens
- §3 Typography
- §4 Spacing and geometry tokens
- §5 Standard tile anatomy
- §6 WNYHS Status Value Field
- §7 One customer action-button family
- §8 Governed media region
- §9 Header, footer, and brand treatment
- §10 Theme parity and accessibility
- §11 Deterministic implementation and acceptance

### E. DASHBOARD001 REV02
`docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`

Read only:
- §2 Customer-visible size modes
- §4 Responsive and equal-tile delivery
- §5 Customer-specific capability assembly
- §7 Evidence classes and fixture rules
- §8 Deterministic approval prototypes
- §9 Validation contract
- §11 Privacy, safety, and acceptance

### F. Peckham evidence
`docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md`

Read only:
- Purpose and boundary
- Contact binding register
- Main Entrance planned-device register
- Composite Main Entrance rule
- Deferred bindings

### Explicitly do not read

Unless a stop-condition conflict makes one necessary, do not read:

- Dashboard Governance Map/Master
- superseded dashboard standards
- customer-dashboard-design-standard
- customer-dashboard-philosophy
- INSTALL007
- BKLF/Bailey dashboard history
- PR #578 diff/history
- full MTR
- broad document catalogs
- manifests
- public-site/funnel visual standards
- HA backup data
- raw registry exports
- live Home Assistant data

Report any exception and why it was required.

## 5. Exact changed-file allowlist

Final PR may contain changes only to:

1. `docs/codex/work-orders/T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md`
2. `docs/codex/work-orders/T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV02.md`
3. `docs/system/master-task-register.md`
4. `prototypes/dashboard/peckham/Peckham_Dashboard_Review.html`

No README is required. No CSS, JavaScript, JSON, image, SVG, font, screenshot, ZIP, test, config, package, or generated file may be committed separately.

Temporary screenshots or test artifacts may be created outside the commit and must be removed before closeout.

## 6. Standalone-file technical contract

The committed HTML must contain everything required for the review experience in that one file.

Required:

- valid HTML5 document;
- `<meta charset="utf-8">`;
- responsive viewport meta;
- `<meta name="robots" content="noindex,nofollow">`;
- all CSS inside one inline `<style>`;
- all JavaScript inside one inline `<script>`;
- all icons drawn with inline SVG or pure CSS;
- all fixture data embedded directly in the HTML/JavaScript;
- no ES module imports;
- no `fetch`;
- no XMLHttpRequest;
- no WebSocket;
- no external image request;
- no external font request;
- no external CSS;
- no external JS;
- no CDN;
- no analytics;
- no iframe;
- no service worker;
- no browser extension dependency;
- no local relative-file dependency.

The demo must remain fully functional after the single HTML file is copied by itself to a different local directory.

Use only browser-native HTML/CSS/JavaScript APIs.

### Font behavior

Do not embed or distribute font files.

Use the governed stacks:

- Inter: `Inter, Arial, sans-serif`
- Atkinson Hyperlegible: `"Atkinson Hyperlegible", Arial, sans-serif`
- System: `system-ui, -apple-system, "Segoe UI", Arial, sans-serif`

The selector must function even if Inter or Atkinson is not installed; the browser may fall back to Arial. Explain this only in the prototype's review/help area, not as a claim that the missing font is installed.

## 7. Review/demo truthfulness

The demo must make its non-live status unmistakable without turning the interface into a developer console.

Display a restrained persistent review indicator in the shell such as:

`APPROVAL PREVIEW · SIMULATED DATA · NOT CONNECTED TO LIVE SYSTEMS`

Requirements:

- no live-state claim;
- no raw entity IDs;
- no internal HA registry IDs;
- no credentials/private URLs;
- no fabricated current weather;
- no fabricated camera image;
- no `• LIVE` indicator;
- no claim that locks are currently locked/unlocked;
- no claim that contacts are currently open/closed based on registry data;
- no monitoring/dispatch/emergency-response claim.

Prototype state may be simulated solely to demonstrate approved visual/interaction behavior.

## 8. Peckham evidence that may appear

Site identity:

`PK | PECKHAM`

Known install evidence:

- 16 installed Zigbee contact sensors total.
- Main Entrance Door contact is Sensor 13 in the current sanitized evidence.
- Remaining 15 contacts are first-floor windows with unresolved individual physical locations.
- Customer-safe temporary labels are `Window Sensor 01` through `Window Sensor 15`.
- Main Entrance planned-device evidence includes:
  - Main Entrance Doorbell;
  - Main Entrance Lever Lock — Kwikset SmartCode 912;
  - Main Entrance Deadbolt — Kwikset Home Connect 620.
- Exact live bindings and supported doorbell/lock actions remain unresolved.

Never display `Sensor 13` as a raw technical identifier in normal customer UI. Customer UI label is `Main Entrance Door`.

Never invent room names, compass directions, window locations, entity IDs, device state, camera availability, or lock control authority.

## 9. Required customer shell

The demo must visibly look like a WNYHS customer dashboard, not a developer prototype.

### Header

Include:

- WNYHS identity using text/inline CSS/SVG only;
- single-line `WNY HOME SECURITY` where width permits;
- visible property identity `PK | PECKHAM`;
- persistent approval-preview indicator;
- clear current view title.

Do not invent an external logo asset path.

### Canonical navigation

Exact order and wording:

1. Home
2. Systems
3. Activity
4. Explore WNYHS
5. Support
6. Property
7. Settings

`Explore WNYHS` must visibly display `COMING SOON`.

All seven destinations must work offline in the one file.

Use local hash navigation or equivalent self-contained state. Browser refresh/direct file open must not cause an error.

## 10. Required Settings controls

The Settings view must contain functioning presentation controls for:

### Theme
- Light
- Dark
- Auto

Auto must respond to `prefers-color-scheme` without a page reload.

### Layout size
- Compact
- Default
- Large

Exact labels only. Never use `Standard`.

Initial/default mode: `Default`.

### Font
- Inter
- Atkinson Hyperlegible
- System

Initial/default font: `Inter`.

Changing theme, size, or font must update the dashboard immediately without changing fixture facts, permissions, or simulated scenario meaning.

## 11. Required deterministic scenario reviewer

Because this is an approval artifact, include a clearly separated `Review Scenario` control in Settings so the operator/customer can see governed states without pretending they are live.

Provide exactly these scenario choices:

- Normal
- Active
- Attention
- Alert
- Unavailable

Changing scenario may update simulated Building Status, representative contact summary, Activity examples, and attention/alert presentation.

The shell must continue to display the approval-preview indicator.

Scenario state is local in-memory demo state only and must not write anywhere externally.

No scenario may cause an actual call, email, lock command, Home Assistant command, network request, or filesystem write.

## 12. Home view composition

The Home view must preserve INSTALL006 hierarchy:

1. Building/property status
2. current Alert/Attention area when applicable
3. primary entry workflow
4. common safe local actions/navigation
5. system summary/activity
6. support access

Default desktop layout should visually demonstrate the governed 3-column / 2-row target where enough review tiles are present.

Use six comparable approval tiles in Default desktop mode:

1. **Building Status**
   - Overall simulated review status
   - clearly scoped helper text: represented entry/window contact coverage only
   - Status Value Field

2. **Main Entrance**
   - Main Entrance Door as the customer-safe contact label
   - separate status rows for Door Contact, Lever Lock, Deadbolt
   - lock rows remain `Unavailable` or otherwise clearly unresolved in the approval fixture unless the review scenario is demonstrating generic component behavior; never imply authoritative live lock state
   - safe local navigation action only, not lock/unlock

3. **First Floor Windows**
   - summary of 15 installed window contacts
   - customer-safe labels only
   - status summary is explicitly simulated
   - a local `View Windows` action may navigate to Systems

4. **Main Entrance Doorbell**
   - governed 16:9 media region
   - neutral placeholder only
   - no fabricated image
   - no LIVE indicator
   - state `Unavailable` / `Pending onsite binding` presentation
   - no talk/record/snapshot buttons unless they are inert component-review examples outside this operational tile

5. **Recent Activity**
   - 2–3 clearly simulated, customer-readable examples
   - distinguish Current / Recent / Resolved
   - timestamps may be relative demo text rather than fabricated historical facts
   - local action navigates to Activity

6. **Support**
   - Support, Call WNYHS, Email Support using the governed action-button family
   - in this offline review artifact, these buttons must not place calls or send email;
   - clicking them displays a local `Preview only — no external action was sent` message or navigates locally to Support.

Comparable Home tiles must have equal dimensions at the active desktop size mode.

## 13. Systems view

Systems must show only the Peckham evidence relevant to the approval.

Required groups:

### Main Entrance
- Main Entrance Door
- Main Entrance Doorbell
- Main Entrance Lever Lock
- Main Entrance Deadbolt

Doorbell and locks must remain clearly pending/unavailable/unbound where current evidence does not establish live binding.

### First Floor Windows
Show all 15 customer-safe labels:

- Window Sensor 01
- Window Sensor 02
- Window Sensor 03
- Window Sensor 04
- Window Sensor 05
- Window Sensor 06
- Window Sensor 07
- Window Sensor 08
- Window Sensor 09
- Window Sensor 10
- Window Sensor 11
- Window Sensor 12
- Window Sensor 13
- Window Sensor 14
- Window Sensor 15

Do not invent physical locations.

The scenario control may simulate representative visual status for approval, but all simulation is governed by the persistent approval-preview context.

## 14. Activity view

Show deterministic simulated examples sufficient to review:

- Current
- Recent
- Resolved
- Attention/Alert prioritization

Each example must use customer-safe wording and avoid raw entities/technical diagnostics.

Examples must be clearly part of the approval simulation, not historical claims about Peckham.

Do not imply notification delivery to SMS/email/app or WNYHS staff.

## 15. Explore WNYHS view

Show a clean `COMING SOON` treatment.

Do not add sales claims, packages, pricing, upsells, links, forms, or public-site content.

## 16. Support view

Provide customer-facing support layout using governed buttons.

Because the file is offline and self-contained:

- Support button interactions are local preview interactions only;
- Call WNYHS does not invoke `tel:`;
- Email Support does not invoke `mailto:`;
- no external URL opens;
- clicking shows local preview feedback.

Do not invent phone numbers, email addresses, hours, SLAs, monitoring, or response-time claims.

## 17. Property view

Show only safe known property context:

- `PK | PECKHAM`
- approval/review status
- represented scope: Main Entrance + 15 first-floor window contacts
- doorbell and two entry locks pending final onsite binding/verification

Do not expose customer address, network information, HA URL, IP address, raw IDs, credentials, or private operational data.

## 18. Visual implementation requirements

Implement DESIGN001 tokens directly as CSS custom properties.

Required key tokens include:

- gold `#D4AF37`
- action blue `#0A84FF`
- action hover `#0876E4`
- action selected `#075EBA`
- disabled `#64748B`
- Normal `#22C55E`
- Active `#0A84FF`
- Attention `#F5A524`
- Alert `#EF4444`
- Unavailable `#94A3B8`

Use the governed Light/Dark surface values from DESIGN001 §2.3.

Use the governed typography, spacing, geometry, shadows, radii, icon sizes, Status Value Field geometry, media geometry, and focus treatment from DESIGN001 §§3–10.

Hardcoded values are allowed only where they directly instantiate governed tokens or ordinary structural necessities not governed elsewhere. Do not introduce alternate visual systems.

### Semantic-color enforcement

Actual status values are the only text allowed to use the five semantic status colors.

Do not color:

- titles
- descriptions
- labels
- helper text
- navigation
- timestamps
- ordinary prose
- button text

with semantic status colors.

## 19. Tile and Status Value Field contract

Every standard tile uses:

`header identity -> divider -> content/media -> status -> actions`

Tile header:

- dark circular icon container;
- centered gold inline SVG icon;
- gold title;
- neutral subtitle;
- full governed divider below the complete header block.

Status rows:

- neutral label left;
- right-justified recessed/chiseled Status Value Field;
- aligned value column within comparable content;
- semantic color only on actual status-value text;
- same geometry regardless of severity.

## 20. Action-button contract

All executable review actions use one blue action-button family.

Heights:

- Compact: 48px
- Default: 48px
- Large: 56px

Required demonstrable visual states:

- Available / Off
- Hover / Focus
- Momentary Pressed
- Command Pending
- Selected / On
- Failure
- Result Unknown
- Disabled

Do not use double-height, square icon-over-label, gold-action, red-action, or module-specific button families.

### Component-state review panel

Settings must include a clearly labeled `Component State Review` section that displays examples of all required button states without pretending they are operational device controls.

For interactive demo buttons:

- click may enter `Command Pending`;
- after a short deterministic delay, it may enter a simulated confirmed Selected/On state;
- another demo path may show Failure or Result Unknown;
- no state may trigger external effects;
- dimensions remain fixed.

Honor `prefers-reduced-motion`.

## 21. Media contract

Doorbell tile uses a stable 16:9 media footprint.

Since no approved media asset/live camera is available:

- use a neutral placeholder surface;
- show customer-safe unavailable/pending text;
- do not fabricate a camera image;
- do not show `• LIVE`;
- do not collapse the media region;
- do not make the media tile a different outer size from comparable tiles in the same grid.

## 22. Footer contract

Footer contains:

- Support
- Call WNYHS
- Email Support
- Weather preview region
- current date/time region

All three support actions use the governed action-button family and are local preview interactions only.

Weather must not be fabricated. Use a treatment equivalent to:

- `WEATHER PREVIEW`
- `--°`
- `Current conditions unavailable in approval preview`

Date/time may use the review device's browser-local time and must not imply a live Peckham telemetry feed.

## 23. Responsive contract

Desktop targets where viewport supports them:

- Compact: 4 tiles wide
- Default: 3 tiles wide
- Large: 2 tiles wide

Phone:

- single column;
- no horizontal scrolling;
- touch-safe;
- current status and common actions remain clear.

Tablet:

- one or two columns according to width/orientation.

Use CSS Grid/Flexbox and responsive media/container logic. Do not implement size modes as browser zoom.

Changing Compact/Default/Large changes governed density, spacing, typography, and component dimensions.

## 24. Accessibility contract

Required:

- semantic HTML landmarks;
- buttons are actual `button` elements;
- navigation accessible by keyboard;
- visible `:focus-visible`;
- meaningful accessible names;
- status meaning includes text, never color alone;
- contrast consistent with governed Light/Dark roles;
- no keyboard trap;
- no hover-only information;
- reduced-motion support;
- appropriate `aria-current` on active navigation;
- live local preview feedback may use a polite ARIA live region.

## 25. Email / handoff requirements

The primary customer-review deliverable is exactly:

`Peckham_Dashboard_Review.html`

It must be safe to copy out of the repository and email as one file.

Do not commit a ZIP.

At closeout, report the exact local repository path so the operator can attach the HTML directly.

Also state:

- some email systems may block `.html` attachments;
- if that occurs, the operator may ZIP the single HTML file manually before sending;
- the ZIP is a transport wrapper only and is not a governed repository artifact.

Do not create or commit a font file or any other binary handoff asset.

## 26. Validation — mandatory before commit/PR

Use existing repository/browser tooling only. Do not install dependencies.

### A. Single-file integrity

Verify:

- exactly one committed prototype file;
- no external resource dependency;
- no relative-file dependency;
- no `fetch`, XMLHttpRequest, WebSocket, import, external script, external stylesheet, CDN, iframe, or service worker;
- no raw entity IDs;
- no external URL required for interaction.

Copy the HTML alone to a temporary directory and open/test that copy to prove standalone behavior.

### B. Browser load

Open the file directly using `file://` in an available Chromium/Chrome/Edge-compatible browser.

Verify:

- no console errors;
- no failed external/local resource requests;
- all seven nav destinations work;
- browser refresh/direct reopen works;
- no local server is required.

### C. Functional interaction

Verify:

- Light / Dark / Auto;
- Compact / Default / Large;
- Inter / Atkinson / System;
- Review Scenario: Normal / Active / Attention / Alert / Unavailable;
- Component State Review;
- local Support / Call / Email preview interactions;
- hash/local navigation;
- approval preview indicator remains visible.

### D. Geometry

At a representative desktop viewport, verify:

- Default = 3 columns where supported;
- Compact = 4 columns where supported;
- Large = 2 columns where supported;
- equal comparable Home tile bounds;
- action height = 48px Compact;
- action height = 48px Default;
- action height = 56px Large;
- 16:9 doorbell media region;
- status value fields right-aligned.

### E. Responsive

Verify at minimum:

- desktop: 1440x1000
- tablet: 1024x768
- phone: 390x844

At each:

- no horizontal scroll;
- no clipped primary controls;
- readable status values;
- functioning nav;
- usable settings controls.

### F. Content and evidence

Verify:

- exact canonical nav order;
- `COMING SOON`;
- `PK | PECKHAM`;
- Main Entrance Door customer label;
- all 15 generic Window Sensor labels;
- separate Doorbell / Lever Lock / Deadbolt;
- no invented window locations;
- no raw entity IDs;
- no fabricated camera image;
- no LIVE indicator;
- no fabricated weather;
- no live lock/camera/contact claim;
- no unsupported monitoring/dispatch claim.

### G. Semantic visual checks

Verify:

- status semantic colors occur only on actual status-value text;
- gold used for identity/tile identity, not status/action authority;
- blue action family used consistently;
- no alternate button family;
- governed Status Value Field present;
- governed tile header/divider present;
- Light/Dark/Auto parity.

### H. Accessibility

Verify:

- keyboard traversal of nav, selectors, scenarios, and actions;
- visible focus;
- `aria-current`;
- accessible button/select labels;
- polite preview-feedback region;
- reduced-motion handling.

### I. Git / scope

Verify:

- final changed files match the four-file allowlist;
- no unexpected deletion;
- no conflict markers;
- `git diff --check`;
- no package/package-lock changes;
- no production website/runtime changes;
- no live HA changes;
- no Cloudflare/network changes;
- no PR #578 change.

Temporary screenshots may be captured for operator review but are not committed and must be removed before final clean-status check.

## 27. MTR record requirements

Create/update exactly one `T-DASH-PECKHAM-HTML-001` MTR record using the current schema.

Record:

- this REV02 work order as controlling task definition;
- purpose = standalone email-ready approval demo;
- exact four-file task allowlist;
- runtime systems affected = none;
- Home Assistant affected = none;
- production website affected = none;
- deployment applicability = not applicable;
- raw/live state = none;
- validation listed above;
- operator review required;
- PR evidence when draft PR exists.

Do not close `DASHBOARD-CAMPAIGN-001`.

## 28. Git and PR delivery

Use existing branch:

`task/t-dash-peckham-html-001`

Create the implementation changes and one task commit after validation.

Suggested implementation commit:

`prototype: add standalone Peckham dashboard approval demo`

Push the existing branch.

Open exactly one **DRAFT PR** to `main`.

Suggested PR title:

`T-DASH-PECKHAM-HTML-001 — standalone Peckham dashboard approval demo`

PR body must state:

- standalone single-file HTML approval artifact;
- no live HA/backend/API;
- simulated review states only;
- no production route/deployment;
- exact validation performed;
- customer-review artifact path;
- PR #578 remains deferred/unmerged.

Do not:

- mark PR ready;
- merge;
- enable auto-merge;
- deploy;
- publish a production URL;
- modify Cloudflare.

Automatic unrelated CI/Cloudflare preview behavior triggered by GitHub is not authority to deploy or publish this prototype and need not be used for customer review.

## 29. Closeout / RSI

At closeout report:

1. branch;
2. commit SHA;
3. draft PR number/URL;
4. exact changed files;
5. exact standalone HTML path;
6. approximate HTML file size;
7. confirmation it works from a copied `file://` location;
8. browsers/viewports tested;
9. functional controls tested;
10. fixture/evidence posture;
11. no-network/external-resource result;
12. accessibility checks;
13. geometry checks;
14. confirmation no raw IDs/false live claims;
15. confirmation no live HA/production/runtime/Cloudflare change;
16. PR #578 remains deferred/unmerged;
17. no merge/no deploy;
18. Token Utilization / RSI Report.

RSI report must include:

- exact token metrics when visible;
- model/reasoning level when visible;
- files read;
- whether any owner file was fully read;
- commands run;
- validation commands;
- retries/failures;
- broad searches;
- redundant reads;
- context pressure;
- recommended future prompt compression.

Target Context Pressure: LOW.

## 30. Stop conditions

STOP and report rather than expanding scope if:

- current canonical dashboard owners conflict;
- `DASHBOARD-CAMPAIGN-001` is no longer ACTIVE;
- `step-current.md` no longer contains the merged dashboard routing correction;
- required Peckham evidence is missing;
- exact allowlist must expand;
- a live Home Assistant/backend/API/Cloudflare/production route is required;
- a dependency must be installed;
- an external asset/font is required;
- a secret/customer-private value appears;
- browser validation is unavailable;
- standalone `file://` execution cannot be made reliable without changing the architecture.

## 31. Exit criteria

Task is complete only when:

- one self-contained `Peckham_Dashboard_Review.html` exists at the governed path;
- it opens directly from `file://` with no server/network dependency;
- all seven navigation destinations work;
- theme/size/font/scenario controls work;
- component-state review works;
- Peckham facts remain truthful and unresolved items remain unresolved;
- governed visual tokens/components validate;
- responsive/accessibility checks pass;
- no raw IDs or false live claims appear;
- exact four-file allowlist passes;
- one DRAFT PR is open;
- PR #578 remains deferred/unmerged;
- no live HA, production website/runtime, Cloudflare change, merge, or deployment occurred.
