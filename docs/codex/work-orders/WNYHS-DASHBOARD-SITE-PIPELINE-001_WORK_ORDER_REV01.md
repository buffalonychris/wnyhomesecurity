# WNYHS-DASHBOARD-SITE-PIPELINE-001 — WNYHS Dashboard Site Implementation Pipeline Standard

**Revision:** REV01  
**Status:** OPERATOR AUTHORIZED — EXECUTE THIS REVISION  
**Category:** GOV / DESIGN  
**Primary Workstream:** Dashboard / Interactive Experience System  
**Related Workstreams:** Home Assistant Platform; Automation System; Visual System; Installer Platform; Project Governance  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01  
**Standing campaign:** DASHBOARD-CAMPAIGN-001

READ MODE: TARGETED  
CONTEXT TARGET: LOW

## 1. Objective

Promote the reusable WNYHS dashboard-site implementation pipeline into durable repository authority so Bailey becomes the proving/reference implementation rather than a one-off.

Create a company-wide orchestration standard for the repeatable path:

`HA instance -> canonical registry export -> transient evidence intake -> evidence normalization -> sanitized capability model -> semantic bindings -> role/class views -> deterministic approval prototype -> operator approval -> additive Home Assistant implementation -> validation/acceptance -> handoff -> optional legacy retirement`

The standard must make future site work easy to repeat without duplicating or overriding existing canonical owner standards.

## 2. Operator-approved durable intent

The finished pipeline must support this operating model for future WNYHS customer sites:

1. Post-install operator accesses the intended Home Assistant instance.
2. Operator runs the canonical WNYHS HA registry-export script.
3. Operator supplies the generated export set to ChatGPT as transient evidence.
4. ChatGPT performs a governed capability/entity utilization audit.
5. Evidence is normalized into a sanitized property/device/entity/capability model.
6. Every entity/device is classified conservatively, including unresolved/retired/service-only states.
7. Dashboard composition is generated from semantic capabilities, not directly from raw registry rows.
8. Existing notification logic and customer profile rules are consumed from their canonical owners rather than recreated ad hoc.
9. Deterministic approval dashboards are produced for operator review before live implementation.
10. Production dashboard rollout is additive: existing customer dashboards remain available as fallback until acceptance/soak is complete.
11. Production implementation binds only verified capabilities and authorized actions.
12. Customer, installer/commissioning, and service/operator surfaces remain separated.
13. User/owner/admin presentation differences may exist only within the authorized runtime permission model; a front-end selector must never fake authentication or backend authorization.
14. Theme modes are Light / Dark / Auto.
15. Customer-visible size labels are exactly Compact / Default / Large. `Standard` remains retired.
16. Font selectors may offer Inter / Atkinson Hyperlegible / System using governed fallbacks.
17. Responsive delivery covers phone portrait, tablet portrait/landscape, desktop, and kiosk only when separately scoped.
18. Header treatment supports WNYHS identity, property identity, current user/role context, current view, and a user/profile dropdown where the runtime can truthfully support it.
19. Improvements proven during Bailey must feed the reusable pipeline through governed standards rather than Bailey-only implementation hacks.
20. RSI/context-efficiency findings from completed tasks must be reviewed as process-improvement inputs for later work orders; only durable improvements are promoted into canonical standards.

## 3. No duplicate-owner rule

This task creates an orchestration/process owner, not a replacement owner for existing standards.

The new standard must reference, not restate or supersede:

- `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md` — registry export and raw-evidence handling
- `docs/installer/INSTALL004_DEVICE_NAMING_STANDARD_REV01.md` — device naming
- `docs/installer/INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md` — entity/area readiness
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md` — dashboard classes, navigation, statuses, permissions presentation, semantic behavior
- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md` — visual/component system
- `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md` — capability assembly, evidence binding, prototype/validation
- `docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md` — notification data contract/routing lifecycle
- `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md` — HA-native automation behavior
- `docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md` — commissioning/acceptance
- `docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md` — handoff
- `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md` — service/operator support surface
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md` — dashboard owner/routing map only

If any existing owner already fully owns the entire site implementation pipeline, stop and report instead of creating a duplicate owner.

## 4. Branch and task gate

Continue branch:

`task/wnyhs-dashboard-site-pipeline-001`

Do not create another branch.

Before edits:

1. Confirm branch is based on main containing merged PR #596 / commit `2dd378026def7ad407147fdda2d0ec94765950c8` or later preserving it.
2. Confirm exact OPS004 Primary Workstream match: `Dashboard / Interactive Experience System`.
3. Confirm `DASHBOARD-CAMPAIGN-001` remains ACTIVE and non-implementing.
4. Confirm the current controlling context remains `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.
5. Search specifically for an existing canonical dashboard-site implementation pipeline owner.
6. If this task record is absent, add only `WNYHS-DASHBOARD-SITE-PIPELINE-001` as ACTIVE under prompt-created-task authority.
7. Stop for a real owner conflict or scope expansion.

## 5. Required targeted reads

Read exact relevant sections only.

### Authority / routing
- `docs/system/step-current.md` — current context and dashboard/runtime protection
- exact `DASHBOARD-CAMPAIGN-001` MTR block
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` — prompt-created tasks, owner routing matrix, targeted reads
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV02.md` — Dashboard / Interactive Experience System registration

### Pipeline owner candidates / boundaries
- `docs/installer/INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md`
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md`

### Exact domain owners
Read only the purpose/boundary or relevant sections needed to prevent duplication:
- HA-BACKUP001 REV02 §§1, 5–7
- INSTALL005 entity/area readiness relationship
- INSTALL006 REV02 §§2, 5, 12–16
- DESIGN001 REV02 ownership/purpose and canonical tokens/components boundary
- DASHBOARD001 REV02 §§5–9, 11
- Notification Engine REV01 §§1–3 and downstream artifact requirements
- AUTOMATION001 purpose/implementation boundary
- INSTALL008 dashboard/commissioning readiness
- INSTALL009 dashboard orientation/handoff boundary
- INSTALL010 §§1–6

Do not broad-read the full MTR, document catalog, markdown manifest, Bailey raw registry exports, or unrelated customer implementation history.

## 6. Owner Routing Matrix

| Approved concept | Canonical owner | Exact target | Action | Reason | Why not elsewhere | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| End-to-end reusable dashboard-site implementation pipeline | New installer orchestration standard | `docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md` | CREATE | No existing single owner found for the end-to-end orchestration chain; this standard coordinates existing owners without duplicating them | INSTALL006 owns dashboard behavior; DASHBOARD001 owns delivery/binding; HA-BACKUP001 owns export/evidence; none alone owns the full operational sequence | NO if duplicate-owner search remains clear | HIGH |
| Installer-platform document map / relationship | Installer Platform architecture | `docs/installer/INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md` | MODIFY | INSTALL001 is the architecture map for repeatable HA customer-ready appliances | Do not restate detailed pipeline logic there | NO | HIGH |
| Dashboard governance routing reference | Dashboard governance master | `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md` | MODIFY | Routing map should point implementation-pipeline questions to INSTALL011 while preserving existing architecture/visual/delivery owners | Governance master remains routing/lineage, not pipeline implementation owner | NO | HIGH |
| Task lifecycle | Project Governance | `docs/system/master-task-register.md` | MODIFY exact task record only | Required lifecycle/evidence | No adjacent task edits | NO | HIGH |

## 7. Required new standard

Create:

`docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md`

Required document posture:

- Status: Active standard
- Customer-facing: No
- Implementation authority: No; individual customer runtime/dashboard work still requires its own bounded task
- Scope: orchestration and repeatable site workflow only
- Bailey: reference/proving implementation, not universal source of customer facts

Required sections:

### 7.1 Purpose and authority boundary
State that INSTALL011 turns the existing owner standards into one repeatable operator/ChatGPT/Codex sequence for WNYHS HA dashboard delivery. It must not itself authorize live HA changes, customer data publication, notification routing, dashboard YAML, runtime registration, user-role changes, remote access, or deployment.

### 7.2 Standard operator workflow
Define the normal future-site sequence:

`POST-INSTALL HA -> EXPORT -> TRANSIENT GPT INTAKE -> AUDIT -> SANITIZED MODEL -> SEMANTIC CAPABILITIES -> ROLE/CLASS ASSEMBLY -> DETERMINISTIC PROTOTYPE -> APPROVAL -> BOUNDED HA IMPLEMENTATION -> ADDITIVE PROD -> ACCEPTANCE/SOAK -> HANDOFF -> OPTIONAL LEGACY RETIREMENT`

### 7.3 Canonical export package
Reference the canonical script:

`home-assistant/wnyhs/tools/wnyhs-ha-registry-export.sh`

Reference HA-BACKUP001 for exact files and safety. Do not duplicate script code. Raw exports remain transient/non-commit-ready.

### 7.4 Evidence normalization and classification
Require every discovered device/entity/capability to be classified at minimum as:

- Customer capability
- Supporting state
- Activity / alert source
- Installer / commissioning
- Service / operator
- Diagnostic / noise
- Disabled / hidden
- Unresolved
- Retired
- Not applicable

Require:
- registry presence != live-state proof
- unknown/unavailable never defaults Normal/safe/closed/locked/available
- conflicting device/entity/area names remain unresolved
- retired/stale registry records cannot silently become live capability
- live state and physical mapping require their own evidence class/validation

### 7.5 Sanitized site capability model
Define the normalized intermediate model as the durable input to dashboards, not raw registry files.

At minimum the model records:
- site/property identity
- customer-safe capability label
- capability type
- evidence source/date/freshness
- device/entity/area relationship when verified
- installed posture
- availability posture
- state source posture
- permission/action posture
- notification relevance
- customer/installer/service visibility
- unresolved/deferred reason
- acceptance status
- rollback/handoff notes

Do not require raw unique IDs in customer-facing artifacts.

### 7.6 Semantic binding rule
Repeat only the pipeline relationship by reference:

`source evidence -> sanitized model -> semantic capability -> authorized binding -> customer-safe state/action`

Point to INSTALL006/DASHBOARD001 for authoritative meaning.

### 7.7 Dashboard classes and role presentation
Preserve the three canonical INSTALL006 dashboard classes:

1. Customer Dashboard
2. Installer / Commissioning Dashboard
3. Service / Operator Dashboard

Do not create a fourth canonical dashboard class in this task.

Within authorized runtime permissions, the pipeline may support customer presentation profiles such as:
- standard customer/user
- owner/admin customer profile
- technician/installer
- service/operator

A user/profile dropdown in the header may display/select only contexts the authenticated runtime truly authorizes. It must never simulate identity switching or replace backend authorization in production.

### 7.8 Reusable customer shell
Reference canonical owners and require, when applicable:
- WNYHS product identity
- property identity
- current user/role context
- current view
- governed user/profile dropdown where runtime-backed
- exact canonical customer navigation
- Light / Dark / Auto
- Compact / Default / Large
- Inter / Atkinson Hyperlegible / System
- phone/tablet/desktop responsive delivery
- five canonical customer statuses
- Current / Recent / Resolved
- governed action lifecycle
- governed 16:9 media treatment
- no raw HA IDs in normal customer UI

### 7.9 Notifications relationship
Require the pipeline to inspect notification readiness but never recreate notification policy from dashboard needs.

Notification behavior must come from:
- WNYHS Notification Engine Standard
- approved customer notification profile
- verified event sources/services
- separate bounded implementation/live validation

Dashboard UI may present notification-related state/preferences only when separately authorized.

### 7.10 Deterministic approval gate
Require a deterministic browser-rendered prototype before first production implementation for a new site/dashboard architecture unless a later standard explicitly waives it.

Prototype evidence includes:
- source commit
- sanitized fixture/evidence date
- viewport/device class
- theme
- size
- font
- role/class
- simulated vs registry-known vs authoritative state
- interaction states
- browser/renderer
- known limitations

### 7.11 Additive production rollout
Default production sequence:
1. preserve existing dashboard(s)
2. add new dashboard under separate route/name
3. bind only verified capabilities
4. assign/test authorized users/devices
5. validate phone/tablet/desktop as scoped
6. validate statuses/actions/notifications relationship
7. maintain rollback path
8. run field acceptance
9. soak period
10. legacy dashboard retirement only under a separate bounded task

No replacement-first rollout.

### 7.12 Acceptance and handoff
Reference INSTALL008/009/010.

Require acceptance evidence for:
- capability binding
- unavailable/unknown handling
- role/permission behavior
- action result lifecycle
- device/view responsiveness
- theme/size/font controls
- notification relationship
- support/service visibility
- rollback
- known deferred items

### 7.13 Process-improvement feedback loop
Codex/ChatGPT closeouts may identify RSI/context-efficiency/process improvements.

Rules:
- apply low-risk execution improvements immediately to later work-order construction where compatible with current governance;
- promote only durable, repeatable rules into repository authority;
- never let RSI advice override higher authority;
- Bailey-specific hacks do not become company standards without deliberate promotion;
- approved cross-site improvements should update the appropriate canonical owner or INSTALL011 orchestration only, depending on ownership.

Include current proven dispatch improvements:
- use separated targeted reads rather than oversized combined reads;
- avoid reading prior prototypes unless structure is genuinely needed;
- anchor MTR edits to exact task headings;
- filter hidden/non-rendered elements before geometry validation;
- keep external dispatch prompts compact and let repository work orders carry detail.

### 7.14 Future-site minimum operator experience
State the desired steady-state future workflow in simple terms:

`Run export -> upload export set -> receive audit/capability model -> resolve required exceptions -> review generated prototype -> approve bounded HA implementation -> deploy additively -> validate/handoff`

The standard must make clear that unresolved REQUIRED_FOR_EXECUTION exceptions may still block a site; repeatability does not permit guessing.

## 8. Required INSTALL001 update

Modify only the sections necessary to:

- add INSTALL011 to the installer-platform standards map after INSTALL010;
- identify INSTALL011 as the orchestration standard for post-install dashboard site implementation using existing export/evidence/dashboard/notification/commissioning/handoff owners;
- preserve all existing layer ownership.

Do not rewrite INSTALL001 broadly.

## 9. Required dashboard-governance-master update

Modify only the routing/owner table or equivalent minimal section to add:

- dashboard site implementation pipeline / cross-site orchestration -> INSTALL011
- explicit note that INSTALL011 does not supersede INSTALL006, DESIGN001, DASHBOARD001, HA-BACKUP001, Notification Engine, INSTALL008/009/010

Do not turn the governance master into the pipeline owner.

## 10. Exact changed-file allowlist

Final PR may contain only:

1. `docs/codex/work-orders/WNYHS-DASHBOARD-SITE-PIPELINE-001_WORK_ORDER_REV01.md`
2. `docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md`
3. `docs/installer/INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md`
4. `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md`
5. `docs/system/master-task-register.md`

No source/runtime/dashboard YAML/script changes are authorized.

## 11. Forbidden scope

Do not:
- modify the canonical export script
- modify Bailey runtime/dashboard/prototype files
- modify any customer HA instance
- create production dashboard YAML
- change dashboard status meanings, canonical navigation, visual tokens, or size labels
- create a new fourth canonical dashboard class
- change notification policy/recipients/channels
- change authentication or backend permissions
- create real user-switching behavior
- modify CRM/payment/scheduling/Cloudflare/runtime/dependencies/secrets
- update broad catalogs/manifests unless separately authorized
- merge the PR

## 12. Validation

Required:

1. Exact five-file allowlist.
2. No deleted files.
3. `git diff --check`.
4. Duplicate-owner search documented in closeout.
5. INSTALL011 references all required canonical owners and does not claim to supersede them.
6. INSTALL011 preserves exact Customer / Installer-Commissioning / Service-Operator class model.
7. INSTALL011 preserves exact Light/Dark/Auto, Compact/Default/Large, Inter/Atkinson/System naming.
8. INSTALL011 explicitly states `Standard` is retired.
9. INSTALL011 defines raw-export -> sanitized-model -> semantic-capability -> authorized-binding pipeline.
10. INSTALL011 includes the nine minimum classification outcomes in §7.4.
11. INSTALL011 includes additive deployment/rollback/soak/legacy-retirement separation.
12. INSTALL011 includes user/profile dropdown authorization boundary.
13. INSTALL011 includes Notification Engine/profile relationship without duplicating routing policy.
14. INSTALL011 includes RSI/process-improvement feedback loop and current proven dispatch improvements.
15. INSTALL001 update is minimal.
16. Dashboard Governance Master update is routing-only/minimal.
17. No implementation/runtime/customer-specific files changed.
18. MTR exact task record is DONE after validation.
19. `npm run build` governed skip; docs-only task.

## 13. Git / delivery

- Continue branch: `task/wnyhs-dashboard-site-pipeline-001`
- Continue the existing draft PR for this task.
- Push one coherent docs/governance implementation.
- Do not merge.
- Leave PR draft for ChatGPT/operator review.

## 14. Closeout

Report:
- exact files changed
- duplicate-owner search result
- new standard ownership boundary
- reusable workflow stages
- role/class treatment
- notification relationship
- additive rollout/acceptance/handoff sequence
- RSI improvements captured
- validation evidence
- protected-system confirmation
- PR URL/state
- merge/deployment not performed
- concise RSI/context-efficiency report only where new material friction/improvements were observed

## 15. Stop conditions

Stop if:
- an existing canonical owner already fully owns this exact end-to-end pipeline;
- creating INSTALL011 would duplicate/supersede an existing owner;
- a fourth dashboard class is required to satisfy the task;
- runtime/auth/notification behavior must change to document the pipeline;
- any file outside the allowlist is required;
- current context or OPS004 routing conflicts.

## 16. Exit criteria

Task is complete when:
- INSTALL011 exists as the orchestration standard;
- existing canonical owners remain intact and referenced;
- INSTALL001 and dashboard governance routing minimally point to INSTALL011;
- the future-site workflow is explicit and repeatable;
- Bailey is named only as reference/proving implementation, not a source of universal customer facts;
- validation passes;
- exact MTR record is DONE;
- draft PR contains only authorized files.
