# BAILEY-DASH-PROTOTYPE-001 — Bailey Next-Generation Customer Dashboard Deterministic Prototype

**Revision:** REV01
**Status:** OPERATOR AUTHORIZED — EXECUTE THIS REVISION
**Category:** PROTOTYPE / VISUAL APPROVAL
**Primary Workstream:** Dashboard / Interactive Experience System
**Related Workstreams:** Visual System; Home Assistant Platform; Automation System; Project Governance
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
**Standing campaign:** DASHBOARD-CAMPAIGN-001

READ MODE: TARGETED
CONTEXT TARGET: LOW

## 1. Objective

Create one deterministic, self-contained Bailey customer-dashboard approval prototype:

`prototypes/dashboard/bailey/Bailey_Dashboard_Review.html`

This task is the design/prototype step only. It must not modify, register, replace, or deploy any Home Assistant dashboard.

The prototype must represent the intended WNY Home Security Customer Control Center for BK Lewis Funeral Home — Bailey using only approved architecture, visual standards, and sanitized Bailey capability evidence.

## 2. Operator decisions already made

The operator has explicitly decided:

- new dashboards are **additive**, not replacement-first;
- existing Bailey Main/Desktop dashboards remain untouched until a later separate production task and acceptance period;
- responsive targets are phone, tablet, and desktop;
- customer-visible size modes are exactly `Compact`, `Default`, and `Large`;
- fonts are `Inter`, `Atkinson Hyperlegible`, and `System`;
- themes are `Light`, `Dark`, and `Auto`;
- the prototype must preserve the important underlying Bailey semantics rather than recreate them visually;
- live smoke-device issue for SMOKE 02 is **deferred for onsite service** and is not a blocker to prototype creation;
- the prototype must not claim that deferred/unresolved live evidence is Normal.

## 3. Branch and task gate

Continue branch:

`task/bailey-dashboard-prototype-001`

Do not create another branch.

Before implementation:

1. Confirm branch is based on main containing merged PR #595 / merge commit `1884c7f1fad5a9e6d14bf0567bd3a39db449d04a` or later preserving it.
2. Confirm `DASHBOARD-CAMPAIGN-001` remains ACTIVE.
3. Confirm exact OPS004 Primary Workstream match: `Dashboard / Interactive Experience System`.
4. If this exact MTR task record is absent, add only `BAILEY-DASH-PROTOTYPE-001` as ACTIVE under prompt-created-task authority.
5. Stop only for a real authority conflict, required scope expansion, or missing evidence that prevents truthful prototype construction.

## 4. Required targeted reads

Read only applicable sections.

### A. Current gate
- `docs/system/step-current.md`
  - current controlling context
  - dashboard/runtime protection rules

### B. Task/campaign gate
- exact `DASHBOARD-CAMPAIGN-001` MTR block
- exact `BAILEY-DASH-PROTOTYPE-001` block after creation

### C. Canonical dashboard standards

`docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
- product/audience model
- hierarchy
- exact navigation
- five customer statuses
- Current/Recent/Resolved
- Activity and Alert behavior
- command states/high-impact controls
- unavailable/degraded/unknown behavior
- capability visibility
- header/footer
- deterministic proof
- privacy/acceptance

`docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
- canonical tokens
- typography
- spacing/geometry
- tile anatomy
- Status Value Field
- action-button family
- media region
- header/footer
- theme/accessibility
- deterministic implementation

`docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
- Compact/Default/Large
- responsive targets
- customer-specific assembly
- evidence classes / fixture rules
- deterministic prototype
- validation

### D. Bailey evidence

Read only current Bailey support/evidence owners needed for prototype truth:

- `docs/home-assistant/bklf/inventory/sensor-register.md`
- `docs/home-assistant/bklf/inventory/dashboard-inventory.md`
- `docs/home-assistant/bklf/inventory/lock-access-register.md`
- `docs/home-assistant/bklf/inventory/last-known-live-state-summary.md`
- `home-assistant/bklf/packages/bklf_security.yaml` semantic aggregate sections only

Do not read raw registry exports unless a stop-condition conflict makes it necessary.

## 5. Owner Routing Matrix

| Approved concept | Canonical owner | Exact target | Action | Reason | Why not elsewhere | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Customer dashboard architecture/navigation/status behavior | INSTALL006 REV02 | Prototype must conform | REFERENCE / CONFORM | Canonical behavior owner | Visual standard does not own navigation/meaning | NO | HIGH |
| Visual tokens/components/themes/typography | DESIGN001 REV02 | Prototype CSS/components | IMPLEMENT CONFORMING ARTIFACT | Canonical visual owner | INSTALL006 owns meaning, not appearance | NO | HIGH |
| Responsive modes/evidence binding/deterministic proof | DASHBOARD001 REV02 | Prototype responsive implementation | IMPLEMENT CONFORMING ARTIFACT | Canonical delivery owner | No HA runtime binding authorized | NO | HIGH |
| Bailey capability fixture | Sanitized Bailey evidence + current semantic owners | Embedded fixture in one HTML file | CREATE | Needed for truthful approval demo | Raw registries/live HA must not become prototype dependency | NO | HIGH |
| Task lifecycle | Project Governance | exact MTR task record | MODIFY | Required execution bookkeeping | No adjacent task edits | NO | HIGH |

## 6. Exact changed-file allowlist

Final PR may contain only:

1. `docs/codex/work-orders/BAILEY-DASH-PROTOTYPE-001_WORK_ORDER_REV01.md`
2. `docs/system/master-task-register.md`
3. `prototypes/dashboard/bailey/Bailey_Dashboard_Review.html`

No other repository files may change.

Temporary screenshots/test artifacts must not be committed.

## 7. Prototype technical contract

The HTML must be standalone and work from a local `file://` URL.

Required:

- HTML5
- UTF-8 meta
- responsive viewport
- `noindex,nofollow`
- all CSS inline
- all JS inline
- inline SVG or CSS icons only
- no external assets
- no external fonts
- no fetch/XHR/WebSocket
- no CDN
- no iframe
- no service worker
- no network dependency
- no HA connection
- no secret/private URL
- no raw entity ID in customer UI

Fonts:
- Inter: `Inter, Arial, sans-serif`
- Atkinson Hyperlegible: `"Atkinson Hyperlegible", Arial, sans-serif`
- System: `system-ui, -apple-system, "Segoe UI", Arial, sans-serif`

Do not embed font files.

## 8. Truthfulness / review indicator

Persistent shell indicator:

`APPROVAL PREVIEW · SIMULATED DATA · NOT CONNECTED TO LIVE SYSTEMS`

Never imply the HTML is live.

Do not display:
- raw Home Assistant IDs
- IPs
- private URLs
- credentials
- lock codes
- actual customer addresses
- fabricated camera images
- fabricated notification delivery
- emergency dispatch/monitoring claims
- a `LIVE` badge

## 9. Bailey capability fixture

The fixture may represent these verified or repository-supported Bailey capabilities:

### Building/property
- Building Status
- Building Mode / Armed state
- Attention/Alert summary

### Doors / openings
- South Entrance Door
- Bailey Double Doors
- North Wall Windows
- South Wall Windows

Important mapping boundary:
- C02-C05 physical naming/area conflicts remain unresolved.
- C09/C12 registry presence does not prove live state.
- Do not expose C-number technical labels in normal customer presentation unless inside an explicitly labeled review/evidence panel; default customer UI uses safe names.
- Do not invent physical locations for unresolved contacts.

### Locks
- Bailey Double Doors electronic lock is a valid installed capability.
- South HC620 is retired and must not appear as an active customer lock.
- Do not include a planned future South lock placeholder.

### Cameras / doorbells
- South Entrance Doorbell
- Bailey Double Door Doorbell
- Parking Lot Camera
- person/vehicle/visitor semantic activity may be represented
- parking-lot floodlight may be represented as a customer-safe lighting capability
- Quick Reply may appear only as a clearly labeled prototype capability candidate, not as a claim of approved production action
- siren control must not appear as a normal Home action

### Lighting
- South Entrance Light
- Parking Lot Floodlight

### Environment
- Temperature
- Humidity
- environmental attention

### Smoke / fire
- Network Closet Smoke Detector
- Viewing Room Smoke Detector
- West Hallway Jog Smoke Detector
- customer module must model `Normal`, `Attention`, and `Unavailable` correctly
- current onsite service issue for Viewing Room SMOKE 02 is deferred; prototype may use this as a representative unavailable fixture state but must label all fixture states as simulated
- do not claim live alarm monitoring/dispatch

### Motion/activity
- Main Hallway Motion
- Viewing Room Motion
- Current / Recent / Resolved semantic activity examples

### Alarm output
- status/attention only; no customer relay control

### Service-only/excluded
Do not surface normal customer controls for:
- Z-Wave diagnostics
- Zigbee diagnostics
- RSSI/LQI
- firmware
- HACS
- backup internals
- Cloudflared
- raw camera tuning
- raw relay endpoints
- mobile-device diagnostics/tracking
- South retired HC620 residue

## 10. Canonical navigation

Exact order and wording:

1. Home
2. Systems
3. Activity
4. Explore WNYHS
5. Support
6. Property
7. Settings

`Explore WNYHS` must show `COMING SOON`.

All seven destinations must work offline.

## 11. Header / identity

Include:
- WNY Home Security identity
- property identity: `BK LEWIS · BAILEY`
- current view title
- persistent approval-preview indicator

No external logo dependency.

## 12. Settings controls

Working controls:

### Theme
- Light
- Dark
- Auto

### Layout size
- Compact
- Default
- Large

Initial: `Default`

### Font
- Inter
- Atkinson Hyperlegible
- System

Initial: `Inter`

Theme/size/font changes must update immediately without changing fixture meaning.

## 13. Review scenarios

Settings must include a local-only Review Scenario selector:

- Normal
- Active
- Attention
- Alert
- Unavailable

Changing scenario may update simulated state across Building Status, doors/windows, smoke/fire, camera availability, activity, and alerts.

The scenario system must not perform external actions.

## 14. Home view

Default desktop should demonstrate governed 3-column / 2-row target with six comparable tiles:

1. **Building Status**
   - overall simulated status
   - Building Mode / Armed state
   - Status Value Field

2. **Entrances**
   - South Entrance
   - Bailey Double Doors lock
   - concise customer-safe status rows
   - no retired South lock

3. **Cameras**
   - South Entrance Doorbell
   - Bailey Doorbell
   - Parking Lot Camera
   - 16:9 neutral media placeholder
   - no fabricated camera image

4. **Smoke / Fire**
   - 3 installed detectors
   - aggregate semantic status
   - Unavailable scenario must clearly show that an unavailable detector prevents Normal

5. **Environment & Lighting**
   - temperature
   - humidity
   - South Entrance Light
   - Parking Lot Floodlight
   - safe local prototype controls only

6. **Recent Activity / Support**
   - 2–3 simulated Current/Recent/Resolved examples
   - local navigation to Activity/Support

Comparable Home tiles must maintain equal geometry for the active size mode.

## 15. Systems view

Required groups:

- Doors & Windows
- Locks
- Cameras & Doorbells
- Lighting
- Motion
- Environment
- Smoke / Fire
- Alarm Output (status only)

Use customer-safe labels.

Do not include raw HA entity names.

For unresolved contact mapping, use neutral grouped wording rather than invented room/door placement.

## 16. Activity view

Show deterministic simulated examples sufficient to review:

- Current
- Recent
- Resolved
- Attention
- Alert

Use customer-safe wording.

Do not imply notification delivery, monitoring response, dispatch, or historical truth.

## 17. Support view

Use governed button family.

Because this artifact is offline:
- buttons are preview-only;
- no `tel:`
- no `mailto:`
- no external URL
- local feedback: `Preview only — no external action was sent`

Do not invent support hours, SLA, phone number, email address, monitoring, or response-time claims.

## 18. Property view

Show safe property context only:

- `BK LEWIS · BAILEY`
- approval preview status
- represented systems/capability summary
- deferred/unresolved field items in customer-safe language

Do not expose network details or addresses.

## 19. Visual requirements

Use DESIGN001 governed tokens exactly, including:

- gold `#D4AF37`
- action blue `#0A84FF`
- hover `#0876E4`
- selected `#075EBA`
- disabled `#64748B`
- Normal `#22C55E`
- Active `#0A84FF`
- Attention `#F5A524`
- Alert `#EF4444`
- Unavailable `#94A3B8`

Status colors apply only to actual status-value text.

Use exact governed typography, spacing, radii, action heights, tile anatomy, media geometry, focus treatment, and theme parity.

Customer action-button heights:
- Compact 48px
- Default 48px
- Large 56px

No alternate button families.

## 20. Responsive targets

Validate representative viewports for:

- phone portrait
- tablet portrait
- tablet landscape
- desktop

Targets:
- Compact desktop: 4 tiles wide × 3 visible rows where enough content exists
- Default desktop: 3 tiles wide × 2 visible rows
- Large desktop: 2 tiles wide × 2 visible rows
- phone: single column, no horizontal scroll
- tablet: 1–2 columns by width/orientation

## 21. Component State Review

Settings must include a compact component-state review panel showing the governed action-button states:

- Available / Off
- Hover / Focus
- Pressed
- Command Pending
- Selected / On
- Failure
- Result Unknown
- Disabled

This panel is component review only and must not imply live control authority.

## 22. Accessibility

Validate:
- keyboard navigation
- visible focus
- semantic headings
- button labels
- sufficient contrast
- reduced-motion behavior
- no meaning conveyed by color alone
- no horizontal overflow at supported viewports

## 23. Validation

Required:

1. Exact three-file final allowlist.
2. No deletions.
3. `git diff --check`.
4. HTML parses/opens locally.
5. No external network references/dependencies.
6. All seven nav destinations work.
7. Explore WNYHS shows COMING SOON.
8. Light/Dark/Auto work.
9. Compact/Default/Large work; no `Standard` label.
10. Inter/Atkinson/System selectors work with fallbacks.
11. Default + Inter is initial state.
12. Review scenarios work without changing truthfulness banner.
13. Phone/tablet/desktop representative screenshots or deterministic browser evidence generated temporarily for validation, not committed unless separately authorized.
14. No raw HA IDs/private data in customer UI.
15. South HC620 does not appear as active.
16. Viewing Room smoke unavailable behavior is represented only as simulated/deferred review state, not a live claim.
17. No dashboard YAML or HA runtime file changes.
18. No external actions or network requests.
19. MTR task record is DONE after successful validation.
20. `npm run build` is a governed skip unless repository tooling explicitly requires it for this standalone artifact.

## 24. Protected / forbidden scope

Do not:
- touch live Home Assistant
- modify existing Bailey dashboards
- create HA YAML
- register or assign a dashboard
- retire Main/Desktop dashboards
- change packages/notifications/automations
- modify smoke logic
- modify contact mappings
- exclude Z-Wave devices
- alter camera/lock/light runtime behavior
- change Cloudflare
- deploy
- change website/public funnel
- change CRM/payment/scheduling
- add dependencies
- commit screenshots/raw exports/private customer data
- merge the PR

## 25. Git / delivery

- Continue branch: `task/bailey-dashboard-prototype-001`
- Continue the existing draft PR created for this task.
- Commit implementation.
- Push branch.
- Do not merge.
- Leave PR draft for operator/ChatGPT review.

## 26. Closeout

Report:
- exact files changed;
- prototype path;
- implemented nav/settings/scenarios;
- Bailey capability groups represented;
- deferred/unresolved evidence treatment;
- responsive/accessibility validation;
- screenshots/evidence generated and removed if temporary;
- confirmation no HA/runtime/dashboard YAML changed;
- PR URL/state;
- merge/deployment not performed;
- concise RSI/context-friction report if material friction occurred.

## 27. Stop conditions

Stop if:
- an additional repository file is required;
- prototype requires live HA access;
- truthful Bailey capability presentation requires inventing physical placement/state;
- a customer action would require unverified production permission;
- any canonical dashboard standard conflicts;
- implementation would require dependency/package changes.

## 28. Exit criteria

Complete only when:
- standalone Bailey HTML prototype exists at the exact path;
- it conforms to the three canonical dashboard standards;
- it truthfully represents Bailey capability evidence;
- deferred SMOKE 02 does not block prototype completion and is not falsely Normal;
- existing production dashboards remain untouched;
- validation passes;
- exact MTR task record is DONE;
- draft PR contains only authorized files.

Production Home Assistant implementation is a separate later bounded task after operator approval of this prototype.
