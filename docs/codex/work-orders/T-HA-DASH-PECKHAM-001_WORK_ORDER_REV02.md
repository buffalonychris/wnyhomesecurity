Task ID: T-HA-DASH-PECKHAM-001
Work Order Revision: REV02
Supersedes for execution: T-HA-DASH-PECKHAM-001_WORK_ORDER_REV01.md
Status: OPERATOR AUTHORIZED
Category: OPS
Primary Workstream: Dashboard / Interactive Experience System
Related Workstreams: Automation System; Project Governance

# T-HA-DASH-PECKHAM-001 — Peckham Pre-Onsite Customer Dashboard Foundation REV02

## 1. Objective
Create a repo-controlled, unbound pre-onsite Peckham Home Assistant customer-dashboard foundation using current WNYHS dashboard governance and Bailey only as sanitized reference evidence. The foundation must be reviewable before onsite binding and must not invent entity IDs, room locations, device bindings, or unsupported capabilities.

## 2. Execution gates
1. Confirm exact OPS004 primary workstream match: `Dashboard / Interactive Experience System`.
2. Follow the Owner Routing Matrix in Section 8 exactly.
3. Use only the exact file allowlist in Section 9.
4. If any target file already exists with conflicting authority, stop and report.
5. Do not infer missing entity IDs, logo assets, areas, or device capabilities.

## 3. Sanitized Peckham inventory authorized for this task
Operator-approved inventory from the current Peckham backup and onsite planning:
- 16 installed Zigbee contact sensors total.
- `Sensor 13` is the Main Entrance Door contact.
- The other 15 installed contacts are first-floor windows.
- Individual window locations are intentionally unresolved until onsite trigger testing.
- Reolink doorbell is confirmed planned for Main Entrance but is not yet bound in repo.
- Kwikset SmartCode 912 lever is confirmed planned for Main Entrance but is not yet Z-Wave-bound in repo.
- Kwikset Home Connect 620 deadbolt is confirmed planned for Main Entrance but is not yet Z-Wave-bound in repo.
- Exact Home Assistant entity IDs are intentionally unavailable for this pre-onsite task.

## 4. Delivery model
This REV02 explicitly authorizes an **unbound foundation**.

The dashboard YAML may contain only static/customer-facing shell content and clearly marked placeholders for unresolved bindings. It must not contain invented `entity:` references.

Binding to live entities is a later onsite task after sensor identification and lock/doorbell inclusion.

## 5. Dashboard variants and assignment posture
Create two repo-controlled customer variants:
- Mobile/customer primary: `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml`
- Expanded/tablet/desktop: `home-assistant/peckham/dashboards/peckham-expanded-dashboard.yaml`

Both variants must present the same customer meaning and site identity. This task does not authorize live HA dashboard registration, user assignment, kiosk enforcement, or deployment.

Fallback behavior before onsite binding: unresolved capabilities must display as clearly labeled setup placeholders or be omitted from active controls; they must never present false live status.

## 6. Required UX
Both variants must prepare:
- Gold-logo placement area at top, but do not reference an image file because no approved repo logo asset path has been established.
- Persistent site identity: `PK | PECKHAM`.
- Persistent Building Status area.
- Light / Dark / Auto appearance guidance consistent with existing WNYHS theme governance; do not invent a new theme file in this task.
- Main Entrance workflow.
- Windows view showing 15 generic entries: `Window Sensor 01` through `Window Sensor 15`.
- Main Entrance Door represented separately from the windows.
- Reolink doorbell placeholder/card region patterned from Bailey at a structural level only.
- Separate placeholders for Kwikset 912 lever and Kwikset 620 deadbolt.
- Composite Main Entrance status rule: never claim the entrance is fully locked unless both lock states later support that conclusion.
- Lower branding area with `WNY Home Security`, `wnyhomesecurity.com`, and `716-201-0364`.
- Customer-facing status vocabulary: Normal, Information, Attention, Critical. Hidden/noise is visibility behavior, not a fifth severity.

## 7. Onsite binding register
Create `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md` containing:
- 16 contact slots.
- Main Entrance Door row identified as Sensor 13.
- 15 generic window rows.
- columns for temporary label, live entity ID, final physical label, area, tested state, and onsite notes.
- doorbell row.
- Kwikset 912 row.
- Kwikset 620 row.
- explicit instruction that entity IDs and final physical names are filled only after onsite verification.

## 8. OWNER ROUTING MATRIX — OPERATOR APPROVED
| Approved concept | Current canonical owner | Exact target file | Exact behavior | Action | Why this owner | Why not another owner | Conflict | Confidence |
|---|---|---|---|---|---|---|---|---|
| Peckham mobile customer dashboard shell | Dashboard / Interactive Experience System | `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml` | Mobile-first unbound customer dashboard shell | CREATE | Dashboard owner governs customer dashboard structure | Automation owns behavior, not presentation | NO | HIGH |
| Peckham expanded customer dashboard shell | Dashboard / Interactive Experience System | `home-assistant/peckham/dashboards/peckham-expanded-dashboard.yaml` | Tablet/desktop unbound customer dashboard shell | CREATE | Dashboard owner governs responsive/expanded presentation | Visual rules constrain but do not own site implementation | NO | HIGH |
| Peckham binding inventory and onsite handoff | Dashboard / Interactive Experience System with commissioning constraints | `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md` | Sanitized unbound inventory and onsite mapping register | CREATE | This task needs one site-specific binding artifact for dashboard completion | MTR is task control, not device mapping | NO | HIGH |
| Task lifecycle/evidence | Project Governance | `docs/system/master-task-register.md` | T-HA-DASH-PECKHAM-001 record only | MODIFY | MTR is dispatch board | Dashboard files do not own task status | NO | HIGH |

## 9. Exact file allowlist
Codex may change only:
1. `home-assistant/peckham/dashboards/peckham-main-dashboard.yaml`
2. `home-assistant/peckham/dashboards/peckham-expanded-dashboard.yaml`
3. `docs/home-assistant/peckham/PECKHAM_PREONSITE_BINDING_REGISTER_REV01.md`
4. `docs/system/master-task-register.md`

No other file may be created, modified, renamed, or deleted.

## 10. Bailey reference boundary
Bailey may be read only for reusable layout/interaction lessons such as building-status structure, doorbell composition, lock presentation, Light/Dark/Auto posture, customer/service separation, and responsive layout.

Do not copy Bailey customer names, entity IDs, rooms, private URLs, notify targets, secrets, funeral-home modes, or exact site-specific bindings.

## 11. Logo boundary
No approved Peckham/WNYHS gold logo asset path is established in current repo evidence. Therefore:
- create a clearly marked logo placement region or comment/documented placeholder only;
- do not invent, redraw, copy, or reference a nonexistent logo file;
- final logo binding is deferred to a later task after an approved asset path exists.

## 12. Reolink and lock boundary
Doorbell and lock sections are structure-only placeholders until live entity IDs exist.
- Do not create fake camera, binary_sensor, button, switch, or lock entity IDs.
- Do not claim two-way audio, spotlight, snapshot, recording, or event controls are active until the deployed model/integration confirms them.
- Prepare the UI region and binding notes only.

## 13. Screenshot / review plan
Because this is repo-only and unbound:
- perform YAML/structural validation where available;
- provide a concise PR description of mobile and expanded view structure;
- no fabricated runtime screenshots are required;
- final phone/tablet screenshots are deferred to post-deployment onsite acceptance after bindings exist.

## 14. Rollback posture
Rollback is repository-only for this task: revert the task commit/PR. No live HA rollback is needed because Codex must not deploy or modify live Home Assistant.

## 15. Acceptance criteria
REV02 is complete when:
1. Both exact dashboard YAML files exist and are structurally valid.
2. Both show persistent `PK | PECKHAM` identity and Building Status shell.
3. Both provide a Light/Dark/Auto-compatible presentation approach without creating a new theme file.
4. Main Entrance Door is represented as Sensor 13 in the binding register.
5. Fifteen generic first-floor window rows exist with no invented locations or entity IDs.
6. Main Entrance has unbound doorbell, 912 lever, and 620 deadbolt regions/placeholders.
7. Composite entry logic is documented and does not falsely imply fully locked state.
8. No invented entity IDs appear anywhere.
9. No Bailey-specific customer/private data appears.
10. Lower WNYHS branding/contact information is present.
11. MTR task record is current-schema and limited to this task.
12. Exact four-file allowlist passes with no deletions.

## 16. Forbidden scope
- No live HA changes or deployment.
- No dashboard registration in live HA.
- No user/dashboard assignment changes.
- No Zigbee/Z-Wave inclusion, renaming, or lock programming.
- No Reolink provisioning.
- No notification/automation implementation.
- No new themes or custom-card dependencies.
- No logo asset creation/copying.
- No Cloudflare/network changes.
- No KAOS implementation.
- No website, CRM, Stripe/payment, scheduling, email, package/dependency, environment, or secret changes.
- No merge or deployment.

## 17. Git / PR requirements
- Start from synchronized `origin/main`.
- Create one task-specific branch.
- Stage only the four allowlisted files.
- Use one task-specific implementation commit plus an MTR evidence commit only if required by current execution governance.
- Push and open one draft PR.
- Do not merge or deploy.

## 18. Closeout
Report branch, commit SHA(s), draft PR URL, four-file diff, dashboard view structure, placeholder strategy, binding-register contents, validation, unresolved onsite dependencies, and context-efficiency findings.

Stop on authority conflict instead of inferring a resolution.