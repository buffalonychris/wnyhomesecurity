Task ID: T-HA-DASH-PECKHAM-001
Work Order Revision: REV01
Status: OPERATOR AUTHORIZED
Category: OPS
Primary Workstream: Dashboard / Interactive Experience System
Related Workstreams: Automation System; Infrastructure / Deployment System; Project Governance

# T-HA-DASH-PECKHAM-001 — Peckham Pre-Onsite Customer Dashboard Foundation

## 1. Objective

Prepare the Peckham Home Assistant customer dashboard foundation before the next onsite visit, using current WNYHS dashboard governance and the Bailey implementation only as reference evidence.

The deliverable must be a safe pre-onsite dashboard configuration that is usable now, accommodates unresolved field mapping cleanly, and is structured for straightforward onsite completion without inventing device identities or physical locations.

This task is a site-specific implementation task for Peckham. It is not authority to redesign universal WNYHS dashboard governance or implement the future KAOS Dashboard Creation component.

## 2. Controlling Context

Use targeted reads of the current authority chain and exact applicable owner documents, including:

- `/docs/system/project.md`
- `/docs/system/guardrails.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/step-current.md` or current successor
- `/docs/system/master-task-register.md`
- `/docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` or current successor
- `/docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV01.md`
- `/docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md`
- `/docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`
- `/docs/design-system/customer-dashboard-philosophy.md`
- `/docs/design-system/customer-dashboard-design-standard-rev01.md`
- `/docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV01.md`
- current BKLF/Bailey dashboard implementation evidence and follow-up notes only as reference, not universal authority.

Repository authority controls over chat if conflict is discovered.

## 3. Known Peckham Device Facts

The following facts are operator-approved and must be treated as fixed for this task:

- `Sensor 13` is the **Main Entrance Door** contact sensor.
- Every other currently installed contact sensor is a **first-floor window sensor**.
- Unknown individual windows must use generic temporary labels such as `Window Sensor 01`, `Window Sensor 02`, etc.
- Do not infer room, wall, compass direction, or exact opening for any generic window sensor.
- Onsite, each window sensor will be physically triggered and renamed to its final location.
- Peckham will include a **Reolink Doorbell** at the Main Entrance.
- Peckham will include two Kwikset Z-Wave locks at the Main Entrance:
  - Kwikset SmartCode 912 lever handle
  - Kwikset Home Connect 620 deadbolt
- The two Kwikset locks are not yet paired at the time of this pre-onsite task. Do not invent entity IDs.

## 4. Approved WNYHS Site Identity Requirements

Peckham must implement the approved reusable Site Identity Layer:

- Gold WNYHS company logo at the top of the dashboard shell.
- Persistent site identity: `PK | PECKHAM` or an equivalent approved compact presentation that clearly and continuously identifies the current site.
- Persistent Building Status indicator.
- Site identity must remain clear in Light, Dark, and Auto modes.
- Do not rely on color alone for site identity.
- Consequential controls such as locks must repeat or otherwise make site identity unmistakable at the point of action.
- Company branding/contact information belongs in the standardized lower branding area rather than repeating the company name at the top.

## 5. Appearance Requirements

Implement the Bailey-proven appearance model:

- Light
- Dark
- Auto / follow device-system preference

The appearance control must be customer-usable and remain consistent with current WNYHS theme-readiness governance.

## 6. Customer Dashboard Information Architecture

Prepare a calm customer-facing dashboard shell suitable for phone and tablet use.

At minimum, prepare sections/views for installed or near-term confirmed capabilities:

- Building Status / Home
- Main Entrance
- Windows
- Locks
- Doorbell / Entry Camera
- Activity / Events where current governance and available entities support it
- More / Service only where appropriate and without exposing installer/admin noise to normal customer use

Do not create empty speculative categories beyond the confirmed Peckham deployment.

## 7. Main Entrance Experience

Treat the Main Entrance as one coherent customer workflow.

The Main Entrance experience should be prepared to include:

- Main Entrance Door contact state from Sensor 13
- Reolink doorbell live view/card
- Doorbell press/event state when supported
- Customer-facing action for two-way communication when supported by the deployed integration/workflow
- Snapshot/recording actions where supported and already governed
- Doorbell spotlight/light control if the installed Reolink model supports it
- Kwikset SmartCode 912 lever lock state/control
- Kwikset Home Connect 620 deadbolt lock state/control

Do not invent unsupported Reolink capabilities or entity IDs before the actual model/integration is known.

## 8. Composite Entry Status Rule

The Main Entrance must not present a misleading single `Locked` state when only one of the two Kwikset locks is locked.

Prepare the dashboard structure so the customer can understand:

- Lever lock state
- Deadbolt lock state
- Overall Main Entrance state

The overall state must represent the complete entry assembly rather than one lock alone. If final composite helper/entity implementation depends on onsite entity IDs, leave a clearly documented placeholder rather than guessing.

## 9. Window Sensor Pre-Onsite Handling

Use safe generic labels for all current first-floor window contacts except Sensor 13.

Requirements:

- Preserve technical/entity identifiers where needed internally.
- Customer-facing labels should be simple and sequential.
- Do not bind temporary labels to invented room/area names.
- The structure should tolerate later display-name/entity-area cleanup without requiring a dashboard redesign.
- Clearly document the onsite renaming workflow so field mapping can replace the generic names after each sensor is physically triggered.

## 10. Bailey Reference Use

Bailey may be used for proven interaction patterns, including where applicable:

- building-status presentation
- doorbell card composition
- lock/control presentation
- notification/deep-link behavior
- customer-vs-service separation
- Light/Dark/Auto behavior
- mobile/expanded layout lessons

Do not clone Bailey blindly.
Do not carry Bailey-specific customer names, rooms, entrances, entity IDs, modes, notification recipients, private URLs, or other customer-specific data into Peckham.

## 11. Status Vocabulary

For customer-facing severity/status presentation, use the operator-approved customer model:

- Normal
- Information
- Attention
- Critical

Treat hidden/noise as visibility behavior, not a fifth customer severity.

Internal installer/service surfaces may preserve richer diagnostic classifications where current governance allows.

## 12. Branding Requirements

Use the approved gold WNYHS company logo asset only if a current repository asset is clearly identified and authorized for this use.

Do not invent, redraw, or substitute a logo.

Where current dashboard architecture supports standardized lower branding, include:

- WNY Home Security
- `wnyhomesecurity.com`
- customer-facing business phone: `716-201-0364`

Keep this subordinate to the customer's operational information.

## 13. Allowed Scope

- Register this bounded task in the Master Task Register using the current schema.
- Create or modify Peckham-specific repo-controlled dashboard configuration/assets/documentation required for the pre-onsite customer dashboard foundation.
- Add safe placeholders for not-yet-paired confirmed devices without inventing entity IDs.
- Reuse existing approved WNYHS themes/custom-card dependencies already present in Peckham where current governance permits.
- Create Peckham-specific mapping/onsite completion notes if required.
- Update task evidence/status in the MTR.
- Update catalog/manifest only if current repository governance requires registration of a newly created durable document.

## 14. Forbidden Scope

- No live Home Assistant deployment or remote login changes from Codex.
- No direct Cloudflare, DNS, tunnel, network, or router changes.
- No Z-Wave inclusion or Zigbee pairing.
- No lock programming.
- No Reolink device provisioning.
- No invented device/entity IDs.
- No guessed window locations, rooms, or wall directions.
- No Bailey-specific secrets, credentials, private URLs, customer names, or notification recipients copied into Peckham.
- No KAOS source implementation.
- No universal dashboard-governance rewrite unless an authority conflict requires a separate task.
- No website, funnel, HubSpot/CRM, Stripe/payment, scheduling, email, dependency, package-lock, environment, or secret changes.
- No merge, auto-merge, or deployment.

## 15. Pre-Onsite Acceptance Criteria

The task is complete only when the repo-controlled Peckham dashboard foundation can be reviewed and shows all of the following:

1. Persistent Peckham site identity and Building Status shell.
2. Light / Dark / Auto support aligned with the approved theme approach.
3. Sensor 13 represented as Main Entrance Door.
4. All other current contact sensors represented as generic first-floor window sensors without invented physical locations.
5. Main Entrance view/card structure prepared for Reolink doorbell plus both Kwikset locks.
6. Composite entry-status design does not imply fully locked unless both lock states support that conclusion.
7. No invented entity IDs for not-yet-paired devices.
8. Bailey-specific customer data is absent.
9. Customer-facing controls and language remain plain and non-technical.
10. Onsite completion path is documented for sensor renaming and final device binding.

## 16. KAOS Future Handoff

Structure implementation and notes so reusable parameters are evident for future KAOS work, including:

- site name
- site code
- site identity/accent treatment
- logo reference
- building-status shell
- appearance mode support
- contact sensor inventory
- entry assembly model
- doorbell model/integration bindings
- lock bindings
- customer-facing footer/contact information

Do not implement KAOS in this task. Record only reusable observations that naturally emerge from the Peckham implementation.

## 17. Validation

Before completion:

- Confirm exact OPS004 Primary Workstream match.
- Confirm only authorized Peckham dashboard/task/documentation files changed.
- Confirm no live-system or protected-system files changed.
- Confirm no secrets or private customer data were introduced.
- Confirm no unknown window received an invented physical location.
- Confirm no unpaired lock/doorbell entity IDs were fabricated.
- Confirm all consequential customer actions preserve clear site context.
- Run applicable repository documentation/YAML validation.
- Run `git diff --check`.
- Report `git diff --stat` and final `git status`.
- Follow current governed build rules; do not run unrelated application builds for Home Assistant/dashboard-only repository artifacts unless required by current governance.

## 18. Git / PR Requirements

- Start from synchronized current `origin/main`.
- Create one task-specific branch.
- One task per branch and PR.
- Stage only authorized files.
- Use a task-specific commit.
- Push the branch and open one draft PR.
- Do not merge or deploy.

## 19. Closeout Report

Codex must report:

- exact task branch
- commit SHA
- draft PR number/URL
- files changed
- dashboard structure created/modified
- temporary sensor naming approach
- Main Entrance doorbell/lock placeholder approach
- Light/Dark/Auto implementation approach
- site-identity implementation approach
- validation results
- protected-system confirmation
- any onsite dependencies still unresolved
- any reusable KAOS-relevant parameters observed without implementing KAOS
- context-efficiency findings

Stop on authority conflict instead of expanding scope or inferring a resolution.
