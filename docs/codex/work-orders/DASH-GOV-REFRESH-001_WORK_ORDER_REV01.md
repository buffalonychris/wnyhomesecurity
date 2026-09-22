# DASH-GOV-REFRESH-001 — Dashboard Governance Refresh + Standing Dashboard Campaign Authorization

**Revision:** REV01  
**Status:** OPERATOR AUTHORIZED  
**Category:** GOV  
**Primary Workstream:** Dashboard / Interactive Experience System  
**Related Workstreams:** Project Governance; Visual System; Automation System; Infrastructure / Deployment System  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

READ MODE: TARGETED  
Search exact IDs/headings first; load only applicable authority and owner sections. Do not broadly scan the repository unless a named target cannot be resolved.

## 1. Repository / execution posture

Repo: `buffalonychris/wnyhomesecurity`  
Local repo: `C:\dev\wnyhomesecurity`

Operator decision:
- PR #578 is DEFERRED for now.
- Do not merge or continue Phase B from PR #578.
- Preserve PR #578 and its branch as lineage/reference only.
- The current objective is to refresh durable dashboard governance first, establish a standing dashboard campaign authorization, and prepare the next bounded interactive HTML prototype work order.

This is a docs/governance task only. It does not implement the HTML prototype.

## 2. Objective

Do all of the following in one bounded governance PR:

1. Reconcile the active dashboard owner documents with the operator-approved 2026-09-22 dashboard visual and interaction decisions.
2. Create one ACTIVE standing campaign authorization in the Master Task Register so Dashboard / Interactive Experience System work remains an open governed category for the coming dashboard-development campaign.
3. Preserve the rule that every actual implementation still executes through one bounded task/work order and one branch/PR.
4. Record PR #578 as deferred lineage, not current approval authority.
5. Create the next repository-owned work order:
   `docs/codex/work-orders/T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md`
   for the isolated functional Peckham HTML approval prototype.
6. Do not execute the HTML prototype in this task.

## 3. Required precheck

Before edits:

1. Confirm branch is based on current synchronized `origin/main`.
2. Confirm Primary Workstream exactly matches OPS004: `Dashboard / Interactive Experience System`.
3. Confirm PR #578 is still open and operator-deferred; do not modify its implementation branch.
4. Confirm no newer merged dashboard-governance revision already supersedes the named owner docs below.
5. Load only targeted sections required to reconcile the named decisions.
6. If an exact target owner has moved or been superseded, stop and report the conflict rather than inventing a duplicate owner.

## 4. Required authority / owner documents

Required targeted reads:

- `/AGENTS.md`
- `/docs/system/project.md`
- `/docs/system/guardrails.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/step-current.md`
- `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `/docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `/docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `/docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV01.md`
- `/docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV01.md`
- `/docs/design-system/customer-dashboard-design-standard-rev01.md`
- `/docs/design-system/customer-dashboard-philosophy.md`
- `/docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`
- `/docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`
- `/docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md`
- `/docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md`
- `/docs/codex/work-orders/T-HA-DASH-PECKHAM-002_WORK_ORDER_REV02.md`

Reference only:
- PR #578 and its diff/summary
- current Peckham dashboard YAML as implementation lineage only
- BKLF/Bailey dashboard evidence only where an existing owner already cites it

## 5. Operator-approved decisions to promote

The following decisions are authoritative for this work order and must be promoted into the correct dashboard owner documents without weakening higher-authority safety/runtime rules.

### 5.1 Customer-facing dashboard size names

Customer-visible size choices are exactly:

- Compact
- Default
- Large

`Standard` is retired as the customer-facing size label and replaced by `Default`.

Desktop composition targets:
- Compact: 4 tiles wide × 3 visible rows where the target viewport supports it.
- Default: 3 tiles wide × 2 visible rows.
- Large: 2 tiles wide × 2 visible rows.

Comparable tiles in the same grid row use equal dimensions. A size mode changes grid density, spacing, typography, and governed component dimensions; it is not arbitrary zoom.

### 5.2 Typeface choices

Approved customer typefaces:
- Inter — default
- Atkinson Hyperlegible — easy-read option
- System — device/system option

Typography is tokenized and consistent. Arbitrary fonts are prohibited.

### 5.3 Color-role discipline

Brand / identity:
- WNYHS gold is for identity: logo, governed tile icon, tile title, restrained identity accents.

Action:
- Blue identifies executable interaction surfaces.

Status text:
- Actual status values are the only dashboard text allowed to use semantic status text colors.
- Semantic accent text colors:
  - Normal / Good: `#22C55E`
  - Active: `#0A84FF`
  - Attention: `#F5A524`
  - Alert: `#EF4444`
- Unavailable / unknown uses governed neutral unavailable gray `#94A3B8`.
- Titles, descriptions, labels, helper text, navigation, timestamps, button labels, and general prose do not use semantic status text colors.

Red `• LIVE` remains a narrowly defined media/broadcast indicator and is shown only when live state is confirmed. It is not an alert-state label.

### 5.4 Status Value Field

Every displayed customer status value uses the governed WNYHS Status Value Field:

- status label on the left in neutral text
- value field on the right
- status-value boxes right-justified consistently
- fixed governed geometry within the active size mode
- recessed / chiseled / dimensional field treatment inspired by classic desktop input fields
- controlled border contrast, inset shadow, and depth/drop-shadow cues
- same field geometry regardless of severity
- semantic color applies to actual status value text
- plain-language value remains mandatory
- multiple status rows align to the same right-side value column

### 5.5 Tile header

Every dashboard tile uses one standardized header anatomy:

- dark filled circular icon container
- governed circle diameter
- governed icon size
- icon precisely centered
- identical icon placement across tiles
- icon uses WNYHS gold
- tile title uses WNYHS gold
- subtitle/description uses governed muted-neutral text
- title/subtitle typography and spacing are standardized
- a governed divider line sits immediately below the complete icon/title/subtitle header region
- divider thickness, inset, opacity, and spacing are standardized

Canonical tile anatomy:
Header identity → divider → content/media → status → actions, omitting only regions that do not apply.

### 5.6 Action buttons

There is one visual customer action-button family.

Do not create primary-vs-secondary button appearance differences.

Normal dashboard button heights:
- Compact: 48 px
- Default: 48 px
- Large: 56 px

Only width may vary according to available layout and number of actions.

Prohibit:
- arbitrary-height buttons
- double-height action buttons
- square icon-over-label action buttons
- module-specific button heights
- special Quick Actions geometry
- special Climate geometry
- special Support geometry
- separate primary/secondary visual button families

When width is insufficient, reflow layout rather than shrinking button height/anatomy.

Button states:
- Available / Off
- Hover / Focus
- Momentary Pressed
- Command Pending
- Selected / On
- Disabled

Selected / On:
- remains visually depressed only when the underlying authoritative state confirms it
- uses altered/darker blue fill plus inset/chiseled/depth treatment
- external dimensions do not change
- multiple stateful buttons may remain depressed when simultaneous states are valid
- mutually exclusive controls display only the authoritative active mode
- a user click alone must not permanently assert selected state before authoritative confirmation

### 5.7 Header / brand treatment

WNY HOME SECURITY must be presented as a single-line brand wordmark treatment where horizontal space permits.

Do not use a visual treatment where `WNY` is oversized and `HOME SECURITY` is materially smaller on a second line as the default dashboard header composition.

Branding remains subordinate to operational clarity.

### 5.8 Canonical customer navigation

Preserve the approved canonical customer navigation:

- Home
- Systems
- Activity
- Explore WNYHS
- Support
- Property
- Settings

`Explore WNYHS` remains COMING SOON until separately implemented.

Navigation is functional in prototypes and implementations but actual permissions/auth enforcement remains governed separately.

### 5.9 Footer

Footer customer actions are represented as governed actionable button surfaces rather than loose icon/text fragments.

The footer includes:
- Support
- Call WNYHS
- Email Support
- current local weather widget
- current date/time

The footer region previously used for the tagline `Protecting Western New York Since 2024` is repurposed for the current weather widget.

Footer controls use governed interaction styling and do not create a separate arbitrary button family.

### 5.10 Equal tiles and layout consistency

Within a governed dashboard grid:
- comparable tiles use equal width and equal height
- card geometry is tokenized
- title/header anatomy is identical
- action geometry is identical
- status field geometry is identical
- image/media regions follow governed geometry where present
- content may vary; component geometry does not drift per tile

### 5.11 Deterministic approval-render method

Once governance compliance matters, generative image rendering is reference/inspiration only.

Customer visual-approval proofs should be generated from deterministic browser-rendered HTML/CSS/component output using the same governed tokens and component rules intended for implementation.

Generated concept art must not become implementation authority.

## 6. Standing dashboard campaign authorization

Create one MTR record:

**Task ID:** `DASHBOARD-CAMPAIGN-001`  
**Task Name:** Dashboard Development Standing Campaign Authorization  
**Status:** ACTIVE  
**Category:** GOV  
**Primary Workstream:** Dashboard / Interactive Experience System  
**Related Workstreams:** Project Governance; Visual System; Automation System; Infrastructure / Deployment System  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

Purpose:
Keep the Dashboard / Interactive Experience System workstream operationally open during the current dashboard-development campaign so ChatGPT/Codex do not need a new category-opening governance task for each dashboard task.

Allowed standing authority:
- create and sequence bounded dashboard governance, prototype, visual-validation, customer-dashboard, installer-dashboard, service-dashboard, responsive, theme, component, token, and customer-specific dashboard tasks
- create repository-owned work orders for those bounded tasks
- use prompt-created child tasks where the Codex Execution Standard permits them
- keep dashboard design/development planning active

This standing authorization does NOT itself authorize implementation.

Every implementation run still requires:
- one named bounded child task/work order
- exact allowed scope
- exact target files
- protected-system boundaries
- validation
- one task per branch/PR

Protected work remains individually gated:
- live Home Assistant changes
- dashboard registration/assignment
- automations/scripts/helpers
- lock/access/security-sensitive controls
- camera/privacy-sensitive access
- Cloudflare/network
- customer data/secrets
- CRM/HubSpot
- Stripe/payment
- scheduling/email/runtime/API
- production website/route changes
- dependency/package-lock changes

The campaign task remains ACTIVE until the operator explicitly closes it. Do not mark it DONE merely because one child task completes.

Use the current required MTR schema from `CODEX_TASK_REGISTER_RULES.md`, including publication/evidence fields. For the standing authorization, evidence fields should truthfully show governance-only standing authority and no implementation/deployment.

## 7. Owner Routing Matrix

| Approved concept | Canonical owner | Target | Action | Reason | Alternate-owner exclusion | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Customer visual semantics, status field, button family/state, tile header, typography/color roles | Customer Interface Standard | Create `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`; mark REV01 superseded | SUPERSEDE | DESIGN001 owns customer-facing semantics/components | Public-site visual standards do not own HA/customer-dashboard UI behavior | NO after reconciliation | HIGH |
| Responsive size modes, equal tile grid, Compact/Default/Large behavior | Responsive Dashboard Delivery Standard | Create `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`; mark REV01 superseded | SUPERSEDE | DASHBOARD001 owns responsive delivery | DESIGN001 owns component semantics, not viewport/delivery composition | NO | HIGH |
| Canonical customer nav, dashboard classes, footer composition, deterministic approval proof method | Dashboard Architecture Standard | Create `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`; mark REV01 superseded | SUPERSEDE | INSTALL006 owns dashboard architecture and navigation | DESIGN001 should not become architecture owner | NO | HIGH |
| Product concept wording that conflicts with new action/nav/visual rules | Customer Dashboard Design Standard | Create `docs/design-system/customer-dashboard-design-standard-rev02.md`; mark REV01 superseded | SUPERSEDE | This owner contains outdated exact screen/action assumptions | Do not duplicate component details; reference DESIGN001/DASHBOARD001/INSTALL006 | NO | HIGH |
| Prior dashboard reconciliation conflict records and lineage | Dashboard Governance Master | Create `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md`; mark REV01 superseded | SUPERSEDE | Master owns reconciliation/lineage, not implementation | Do not turn reconciliation master into primary component owner | NO | HIGH |
| Open dashboard workstream authority | Master Task Register | `docs/system/master-task-register.md` | MODIFY | MTR owns execution queue / standing campaign record | Do not use step-current as a task list | NO | HIGH |
| Next bounded Peckham HTML prototype | Codex work order | Create `docs/codex/work-orders/T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md` | CREATE | Work order owns bounded next implementation instructions | Do not execute prototype in this governance task | NO | HIGH |
| Document registration for new REV02 owners/work order | Catalog/manifest only if current repository rules require task-authorized registration | Resolve exact current required targets before write | MODIFY or REFERENCE ONLY | Keep durable docs discoverable if current rules require it | Do not edit broad catalogs merely from habit | NO | MEDIUM |

If current owner/status evidence makes any row incorrect, STOP and report the specific conflict before rerouting.

## 8. Required work

1. Add the current task record `DASH-GOV-REFRESH-001` to the MTR as the bounded prompt-created task, using the current required schema.
2. Add `DASHBOARD-CAMPAIGN-001` to the MTR as ACTIVE standing campaign authorization using the current required schema.
3. Create the REV02 successor owner documents named in the matrix.
4. Mark each superseded REV01 owner clearly SUPERSEDED and point to its exact successor. Preserve historical content for lineage.
5. Resolve obsolete dashboard visual/navigation/action rules in successors; do not leave contradictory active instructions.
6. Preserve higher-authority security/privacy/runtime behavior and all protected-system rules.
7. In the dashboard governance master successor:
   - record the new canonical status semantics and status-text exclusivity
   - treat hidden/noise as visibility, not a customer severity
   - record the operator-approved five customer status states: Normal, Active, Attention, Alert, Unavailable
   - record that the four semantic accent text colors are reserved for actual status values, with unavailable using neutral gray
   - record PR #578 as deferred lineage
   - record deterministic HTML/browser rendering as the preferred visual-approval proof method
8. Create `T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md` with the bounded requirements in Section 9 below.
9. Update only required task/catalog/manifest references that current repository governance explicitly requires.
10. Validate and open one draft PR. Do not merge.

## 9. Requirements for the next work order: T-DASH-PECKHAM-HTML-001

The new work order must be implementation-ready but must NOT be executed in this task.

Objective:
Create an isolated, functional, browser-rendered Peckham dashboard approval prototype that is not wired to live Home Assistant or production runtime.

Required prototype behavior:
- actual functional nav
- Dark / Light / Auto theme switching
- Compact / Default / Large switching using those exact customer labels
- Inter / Atkinson Hyperlegible / System font switching
- working normal/pressed/selected/disabled button states
- persistent selected/depressed behavior for stateful demo controls
- deterministic layout and tokens
- equal-size governed tiles
- standardized tile headers/icons/dividers
- governed right-justified chiseled status value fields
- standardized action-button heights
- functional footer buttons
- current-weather widget location in footer
- customer nav: Home, Systems, Activity, Explore WNYHS, Support, Property, Settings
- `Explore WNYHS` visually marked COMING SOON
- WNY HOME SECURITY single-line brand treatment where width permits
- Default mode = Default size + Inter font
- no backend, no live HA, no API, no production route
- static/simulated control behavior only
- no claim that simulated state is live

Peckham fixture requirements:
- derive device/entity inventory only from repo-authorized sanitized Peckham evidence
- Sensor13 = Main Entrance Door where currently authoritative
- represent verified installed contact inventory without inventing physical window locations
- do not expose raw entity IDs in normal customer UI
- do not claim live lock/camera/device state unless authoritative current state exists
- simulated approval states must be visibly prototype/demo data in developer/prototype context, while customer screenshot output remains clean and non-technical
- preserve separation between registry-known capability and simulated UI state

Isolation:
Prefer a self-contained repository prototype location that does not alter production routes/build/runtime, for example:
`prototypes/dashboard/peckham/`
Exact path must be fixed in the work order and allowlisted.

Recommended files:
- `index.html`
- `styles.css`
- `app.js`
- `peckham-fixture.js` or JSON
- `README.md`

Avoid new dependencies unless the work order explicitly authorizes them. Prefer plain HTML/CSS/JS for the approval harness unless current repo architecture provides a safer isolated existing harness.

Validation must include:
- browser-load smoke test
- no console errors
- nav interaction
- all three theme states
- all three size states
- all three font states
- selected/depressed button behavior
- equal-tile geometry checks
- 48 px buttons in Compact/Default and 56 px in Large
- semantic status text restricted to actual status values
- no raw entity IDs visible in customer UI
- no production route/runtime changes
- screenshot(s) from deterministic browser render for operator/customer visual approval
- `git diff --check`
- applicable source/UI validation without touching live systems
- one draft PR, no merge/deploy

## 10. Allowed scope / target files

Allowed:
- named dashboard governance owner REV01/REV02 files from the Owner Routing Matrix
- `docs/system/master-task-register.md`
- `docs/codex/work-orders/T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md`
- only catalog/manifest/index files proven required by current governance for registering the new documents
- this work order file

No application/source/prototype implementation files may be created or modified in this task.

## 11. Forbidden scope / protected systems

Do not:
- implement the HTML prototype
- edit Peckham dashboard YAML
- edit live Home Assistant
- register/assign/deploy dashboards
- alter lock/access behavior
- alter Reolink/camera behavior
- alter automations/scripts/helpers
- change Cloudflare/network/DNS
- change website source/routes
- change HubSpot/CRM
- change Stripe/payment
- change scheduling/email/runtime/API
- change dependencies/package-lock
- expose secrets/customer private data
- merge PR #578
- merge this task PR
- deploy anything
- silently close `DASHBOARD-CAMPAIGN-001`

## 12. Change posture / versioning

Docs/governance only.

Use successor revisions rather than destructive historical rewrites where the current owner is versioned.

Preserve lineage.

No public-site version bump.

## 13. Validation

Tier: Governance / docs-only.

Required:
- exact changed-file allowlist
- no source/runtime files changed
- no deletions unless only an explicitly superseded reference is being updated in-place; historical docs themselves remain
- confirm each REV01 supersession header points to exact REV02 successor
- confirm no active owner still states `Standard` as the customer size label
- confirm current successors define Compact / Default / Large
- confirm Default = Inter
- confirm one button family and 48/48/56 heights
- confirm status text exclusivity and status-value field rules
- confirm tile header circle + divider rules
- confirm canonical nav
- confirm footer weather rule
- confirm deterministic browser approval-render rule
- confirm `DASHBOARD-CAMPAIGN-001` is ACTIVE and explicitly does not authorize implementation by itself
- confirm `T-DASH-PECKHAM-HTML-001_WORK_ORDER_REV01.md` exists and is not executed
- confirm PR #578 is described as deferred lineage only
- check conflict markers
- `git diff --check`
- governed docs-only build skip unless current authority unexpectedly requires a build

## 14. Git / delivery

- Continue on the dedicated task branch for this work order.
- One bounded task / one PR.
- Commit only authorized files.
- Push branch.
- Open one DRAFT PR to `main`.
- PR title: `DASH-GOV-REFRESH-001 — refresh dashboard governance and open campaign`
- Do not merge, mark ready, enable auto-merge, or deploy.

## 15. Closeout / RSI

Follow `CODEX_EXECUTION_STANDARD_REV01.md`.

Report:
- branch
- commit SHA
- draft PR URL
- exact files changed/created
- MTR records created/updated
- owner docs superseded/created
- validation results
- docs-only build decision
- explicit protected-system confirmation
- explicit statement that PR #578 remains deferred/unmerged
- explicit statement that HTML prototype was not executed
- Token Utilization / RSI Report
- shorter next-run dispatch pattern

## 16. Stop conditions

STOP if:
- a newer dashboard owner already supersedes any named REV01 target
- MTR schema differs materially from the current task-register rules and cannot be satisfied surgically
- the exact canonical owner for a decision cannot be established
- a required change would touch application/source/runtime/HA implementation
- a conflict with higher authority appears
- target scope must expand beyond the approved routing matrix

## 17. Exit criteria

Complete only when:
- durable REV02 dashboard governance is created and contradictory active REV01 instructions are superseded
- `DASHBOARD-CAMPAIGN-001` is ACTIVE and remains standing
- PR #578 is documented as deferred lineage
- the bounded Peckham HTML prototype work order exists in-repo for the next run
- validation passes
- one draft PR is open
- no implementation, merge, or deployment occurred
