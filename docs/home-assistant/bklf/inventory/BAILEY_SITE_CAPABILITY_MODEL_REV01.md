# Bailey Site Capability Model REV01

Status: Sanitized preparation evidence

Information class: `SPLIT_PROJECTION` — the model contains customer-safe semantic capability statements and internal-only evidence/exception references. Raw registry payloads and unnecessary identifiers are excluded.

Task: `BAILEY-DASHBOARD-SITE-CAPABILITY-001`

Site reference: `BAILEY` / BK Lewis Funeral Home — Bailey

Controlling standard: `docs/home-assistant/WNYHS_SITE_CAPABILITY_EVIDENCE_AND_BINDING_STANDARD_REV01.md`

## 1. Purpose and authority boundary

This document is the sanitized Bailey model between authorized source evidence and a later separately authorized dashboard assembly task.

`SOURCE EVIDENCE -> SANITIZED SITE CAPABILITY MODEL -> SEMANTIC CAPABILITY -> AUTHORIZED BINDING -> CUSTOMER-SAFE STATE/ACTION`

It does not authorize dashboard YAML, runtime binding, entity renaming, Home Assistant access, permissions, notifications, automations, media access, deployment, or customer acceptance. `INSTALL006` owns dashboard meaning, `DASHBOARD001` owns delivery/binding validation, and the applicable domain owners retain automation, notification, privacy, remote-access, commissioning, and handoff decisions.

## 2. Evidence manifest, cutoff, provenance, and freshness

### 2.1 Transient raw evidence

The following operator-supplied files were read in place and remain outside Git:

```text
C:\Users\Dell\Downloads\BAILEY_HA_EXPORT_MANIFEST.txt
C:\Users\Dell\Downloads\BAILEY_ENTITY_REGISTRY.json
C:\Users\Dell\Downloads\BAILEY_DEVICE_REGISTRY.json
C:\Users\Dell\Downloads\BAILEY_AREA_REGISTRY.json
C:\Users\Dell\Downloads\BAILEY_LABEL_REGISTRY.json
```

| Evidence property | Sanitized result |
| --- | --- |
| Site slug | `BAILEY` |
| Extraction timestamp | `20261006T160742Z` |
| Evidence cutoff | Registry relationships as of `2026-10-06 16:07:42 UTC`; repository evidence as of starting commit `b619bb9a0d5a12d7525acdec40a8b873a9dbada3`; operator-confirmed South HC620 disposition from the controlling work order |
| Required registry files | Entity, device, and area registries present |
| Optional registry files | Label registry present; `core.floor_registry` absent and non-blocking |
| Sanitized counts | 1,139 active entity records; 47 deleted entity records; 63 active device records; 2 deleted device records; 12 areas; 12 labels |
| Live-state posture | Not a live poll. No current state, availability, permission, assignment, customer acceptance, or physical placement is inferred from registry presence. |
| Freshness result | Current enough for this bounded registry reconciliation at task start; not sufficient for later live binding. Re-export after a material HA change or before a later task when its freshness gate requires it. |

### 2.2 Repository and operator evidence

| Evidence class | Source | Use in this model |
| --- | --- | --- |
| Current repository semantic source | `home-assistant/bklf/packages/bklf_security.yaml` and applicable current Bailey package/dashboard references | Establishes current repository-defined semantic relationships and exclusions; not live-state proof. |
| Current sanitized Bailey evidence | Applicable records under `docs/home-assistant/bklf/inventory/` | Corroborates naming, device class, known limitations, and prior unresolved mappings; stale contradictions remain exceptions. |
| Physical disposition | `BAILEY-HA-SOUTH-LOCK-RETIRE-001` work-order/MTR lineage and this task's controlling work order | Authoritative for the former South Entrance HC620 being `RETIRED_NOT_INSTALLED`. |
| Cross-business gate | Applicable BPI-003, BPI-005 through BPI-009, BPI-014 through BPI-020, BPI-022 through BPI-034, and BPI-036 | Referenced only for owner, source, freshness, information-class, and stage-scoped blocker rules. No BPI row is modified or duplicated here. |

Evidence precedence for this model is: operator-confirmed physical fact and current merged repository source for the exact bounded fact; then the sanitized registry snapshot for registration/relationship evidence; then older inventory summaries as corroboration or discrepancy evidence. No source in this task establishes authoritative live state.

## 3. Variable definition contract

The following variables govern every capability record below. They are logical fields, not a physical schema.

| Variable | Business meaning / logical type | Applicability and source of truth | Current source / future source | Manual entry | Validation and fallback | Blocking effect | Information class | Freshness / provenance |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `site_reference` | Stable non-secret site identity / text | `REQUIRED`; Property/site owner, with this bounded work order authorizing `BAILEY` | Manifest + work order / future governed Property owner | `YES`, operator with dated evidence | Must match manifest and task; otherwise stop | Blocks the complete model and all site-bound stages | `SPLIT_PROJECTION` | Revalidate on property/site context change; manifest/work order |
| `model_revision` | Model identity and revision / text | `REQUIRED`; Site Capability standard | This file / future governed model service | `NO` | Must be unique and versioned; otherwise no handoff | Blocks later assembly handoff | `INTERNAL_ONLY` | Current repository revision |
| `evidence_cutoff_utc` | Latest included evidence instant / UTC timestamp | `REQUIRED`; HA-BACKUP001/operator | Manifest / future authorized ingestion | `NO` | Exact manifest match; stale becomes unknown/unverified | Blocks claims requiring newer evidence, not unrelated documentation | `INTERNAL_ONLY` | `20261006T160742Z`; manifest |
| `semantic_capability_id` | Stable model identifier / text | `REQUIRED`; Site Capability model | This model / future governed model service | `YES`, preparer under bounded task | Unique `BAI-CAP-*`; duplicate is invalid | Blocks only duplicate/ambiguous record | `INTERNAL_ONLY` | Revalidate on model revision; this file |
| `customer_safe_label` | Plain capability label / text | `REQUIRED`; INSTALL006 meaning constrained by source-domain evidence | Current repo/evidence / exact future domain owner | `YES`, operator-approved only | Must avoid raw identifiers and unsupported claims; otherwise omit | Blocks customer projection of affected capability | `CUSTOMER_SAFE` | Revalidate on semantic/name change; cited record sources |
| `lifecycle_state` | Installation/availability posture / controlled value | `REQUIRED`; Site Capability standard plus exact source owner | Evidence reconciliation / future source owner | `YES`, owner disposition with evidence | One canonical lifecycle value; uncertainty falls back to `INSTALLED_UNVERIFIED`, `DEFERRED`, or `UNAVAILABLE`, never verified | Blocks only affected stage/capability | `SPLIT_PROJECTION` | Revalidate on installation, removal, commissioning, or evidence change |
| `evidence_class` | Evidence/conflict posture / controlled value | `REQUIRED`; Site Capability standard | This reconciliation / future governed assessor | `YES`, bounded reviewer | One canonical evidence class; conflict becomes `DISCREPANCY_REQUIRES_RESOLUTION` | Blocks only affected disposition/binding | `INTERNAL_ONLY` | Re-run when either evidence source changes |
| `input_source_state` | Current source availability / controlled value | `REQUIRED`; Site Capability standard | This evidence set / future exact source | `YES`, exact owner only | One canonical input-source state; missing/ambiguous becomes `UNRESOLVED` | Blocks only variables/capabilities dependent on the source | `INTERNAL_ONLY` | Revalidate on source/freshness change |
| `authoritative_state_source` | Source permitted to drive current state / reference | `CONDITIONAL`; runtime/domain owner | No live source authorized here / later bounded HA binding | `NO` in this task | Must have authorized binding and update semantics; fallback is unknown/unavailable | Blocks live state/action for affected capability | `SPLIT_PROJECTION` | Must be current at later binding/acceptance; binding record |
| `visibility_class` | Eligible audience/projection / controlled set | `REQUIRED`; Site Capability standard and INSTALL006 | This model / later approved dashboard task | `YES`, bounded reviewer | Customer visibility requires safe label and sufficient evidence; fallback hidden/internal | Blocks only customer projection | `SPLIT_PROJECTION` | Revalidate on evidence/permission/privacy change |
| `allowed_action_posture` | Whether an action may be considered / structured text | `CONDITIONAL`; functional/domain owner | Current repository behavior only / later authorized live binding | `NO` for authorization in this task | Requires capability, binding, permission, confirmation/result, and fallback evidence; otherwise disabled/omitted | Blocks affected control only | `SPLIT_PROJECTION` | Revalidate before preview/implementation and after behavior change |
| `permission_posture` | Backend authorization evidence / structured text | `CONDITIONAL`; authorized identity/backend owner | Absent from registry export / future authorized assignment evidence | `YES`, authorized owner only | UI presence is never permission; absent evidence falls back read-only/hidden | Blocks affected action and audience assignment | `INTERNAL_ONLY` | At assignment/change/revocation/acceptance; BPI-020 |
| `freshness_result` | Whether evidence meets the affected use / controlled value | `REQUIRED`; evidence owner/task | This reconciliation / later re-export or live verification | `YES`, bounded reviewer | Must state cutoff and trigger; stale falls back unverified/unknown | Blocks only uses requiring fresher evidence | `INTERNAL_ONLY` | Manifest plus repository starting SHA |
| `exception_refs` | Linked unresolved conditions / list | `CONDITIONAL`; exception register | `BAILEY_DASHBOARD_EVIDENCE_EXCEPTIONS_REV01.md` / future owner disposition | `YES`, bounded reviewer | Every material conflict has an ID, owner, next evidence, and stage | Blocks as declared per exception only | `INTERNAL_ONLY` | Revalidate when exception evidence changes |

## 4. Capability summary

No record is `INSTALLED_VERIFIED` in this model. The evidence set establishes registry-known and repository-defined capability candidates but does not include authorized live-state, backend permission, commissioning, or customer-acceptance proof.

| Capability ID | Customer-safe semantic capability | Lifecycle state | Evidence class | Input-source state | Projection posture | Exception refs |
| --- | --- | --- | --- | --- | --- | --- |
| `BAI-CAP-001` | Building operating mode and facility attention | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Customer-safe read-only preview candidate; actions blocked | `BAI-EXC-005`, `BAI-EXC-006`, `BAI-EXC-012` |
| `BAI-CAP-002` | South Entrance monitored opening | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Customer-safe state candidate after live verification | `BAI-EXC-005` |
| `BAI-CAP-003` | South Entrance access control — former HC620 | `RETIRED_NOT_INSTALLED` | `DISCREPANCY_REQUIRES_RESOLUTION` | `MANUAL_OPERATOR_INPUT` | Excluded from all live/customer capability projection | `BAI-EXC-001` |
| `BAI-CAP-004` | South Entrance doorbell and visitor media | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Media/control blocked; non-live capability label only | `BAI-EXC-005`, `BAI-EXC-006`, `BAI-EXC-007`, `BAI-EXC-008` |
| `BAI-CAP-005` | South Entrance light control | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Read-only status candidate; action blocked | `BAI-EXC-005`, `BAI-EXC-006` |
| `BAI-CAP-006` | Bailey Double Doors access control | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Read-only lock posture candidate; actions blocked | `BAI-EXC-005`, `BAI-EXC-006`, `BAI-EXC-012` |
| `BAI-CAP-007` | Bailey Double Doors doorbell and visitor media | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Media/control blocked; non-live capability label only | `BAI-EXC-005`, `BAI-EXC-006`, `BAI-EXC-007`, `BAI-EXC-008` |
| `BAI-CAP-008` | Parking-lot camera and person/vehicle awareness | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Media/control blocked; event state candidate after verification | `BAI-EXC-005`, `BAI-EXC-006`, `BAI-EXC-007`, `BAI-EXC-008` |
| `BAI-CAP-009` | Current repository-defined exterior opening coverage | `DEGRADED` | `DISCREPANCY_REQUIRES_RESOLUTION` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Grouped customer-safe state only after exception resolution/live verification | `BAI-EXC-002`, `BAI-EXC-003`, `BAI-EXC-004`, `BAI-EXC-005` |
| `BAI-CAP-010` | Additional exterior contact candidates C02-C04 | `DEFERRED` | `DISCREPANCY_REQUIRES_RESOLUTION` | `UNRESOLVED` | Hidden from customer projection | `BAI-EXC-002` |
| `BAI-CAP-011` | Disputed contact candidates C09 and C12 | `DEFERRED` | `DISCREPANCY_REQUIRES_RESOLUTION` | `UNRESOLVED` | Hidden from customer projection | `BAI-EXC-003` |
| `BAI-CAP-012` | Deferred contact candidates C13 and C14 | `DEFERRED` | `UNRESOLVED` | `UNRESOLVED` | Hidden from customer projection | `BAI-EXC-004` |
| `BAI-CAP-013` | Interior motion awareness | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Customer-safe state candidate after live verification | `BAI-EXC-005` |
| `BAI-CAP-014` | Smoke-device presence and local smoke state | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Installation-only projection; no monitoring/response claim | `BAI-EXC-005`, `BAI-EXC-009` |
| `BAI-CAP-015` | Viewing-room temperature and humidity | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Read-only environmental state candidate | `BAI-EXC-005` |
| `BAI-CAP-016` | Audible alarm/strobe output | `INSTALLED_UNVERIFIED` | `UNRESOLVED` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | `INTERNAL_ONLY`; no customer control | `BAI-EXC-005`, `BAI-EXC-010` |
| `BAI-CAP-017` | Repository-defined notifications and automation interfaces | `INSTALLED_UNVERIFIED` | `DISCREPANCY_REQUIRES_RESOLUTION` | `AVAILABLE_FROM_CURRENT_EVIDENCE` | Relationship metadata only; Dashboard does not own behavior | `BAI-EXC-001`, `BAI-EXC-006`, `BAI-EXC-011`, `BAI-EXC-012` |

## 5. Capability records

### `BAI-CAP-001` — Building operating mode and facility attention

- Semantic scope / Dashboard classes: building mode, armed posture, facility-status/attention aggregates, and repository-defined Open/Disarm/Close-and-Arm interfaces; Customer and Installer/Commissioning candidates.
- Provenance: current `bklf_security.yaml`; active registry records for the named helpers, templates, and scripts at the registry cutoff.
- Freshness: current for repository/registration reconciliation only; state values and action results are not live-authoritative.
- State source: later authorized binding to the site mode/armed helpers and semantic templates; current/recent/resolved behavior remains unverified.
- Visibility: mode/status labels may be customer-safe after source verification; implementation internals remain internal.
- Actions: all mode/arming actions are blocked in this task. Later work needs actual permission, confirmation/risk posture, result source, denial test, and safe fallback.
- Relationships: Notification and Automation behavior remains with their owners; site-specific Bailey mode values are not universal policy.
- Unresolved / acceptance: `BAI-EXC-005`, `BAI-EXC-006`, and `BAI-EXC-012`; not ready for site-bound implementation or production acceptance.

### `BAI-CAP-002` — South Entrance monitored opening

- Semantic scope / Dashboard classes: a monitored entrance opening/contact and customer-safe open/closed/unknown presentation; Customer and Installer/Commissioning candidates.
- Provenance: operator-confirmed monitored-entrance fact; current repository semantic sources; registry-known C01 contact with `Exterior`, `Installed`, `Zigbee`, and `Contact Sensor` labels.
- Freshness: relationship evidence at cutoff; no current open/closed or availability claim.
- State source: later authorized binding to the C01 opening source; unknown/unavailable must remain attention, never closed/safe.
- Visibility: customer-safe semantic label; raw IDs and diagnostics internal.
- Actions: none owned by the contact.
- Relationships: may feed current repository attention/notification interfaces, whose behavior remains with AUTOMATION001/Notification owners.
- Spatial posture: South Entrance / South Wall is supported by current operator/repository/registry evidence; live placement/function still requires later validation.
- Unresolved / acceptance: live state and commissioning absent (`BAI-EXC-005`); not production-ready.

### `BAI-CAP-003` — South Entrance access control — former HC620

- Semantic scope: historical South Entrance lock capability only.
- Provenance: operator-confirmed door replacement incompatibility and `BAILEY-HA-SOUTH-LOCK-RETIRE-001` lineage override the older registry/inventory residue.
- Installation/availability: `RETIRED_NOT_INSTALLED`; never render as live, planned, available, or actionable.
- State/action/permission: no binding, state source, control, permission, notification, automation, media, or spatial action is eligible.
- Unresolved / acceptance: stale registry and inventory references are cleanup/discrepancy evidence under `BAI-EXC-001`; they do not restore installed status.
- Explicit exclusion: no future South mag-lock capability or placeholder is modeled.

### `BAI-CAP-004` — South Entrance doorbell and visitor media

- Semantic scope / Dashboard classes: doorbell camera plus visitor/person/motion event awareness; Customer and Installer/Commissioning candidates.
- Provenance: active registry relationships and current Bailey package/dashboard references.
- Freshness: registry-known at cutoff; stream, event, two-way talk, snapshot, local/remote reachability, and live availability are unverified.
- State source: later authorized camera/event bindings; update behavior must be verified.
- Visibility: customer-safe capability label; private streams, URLs, technical controls, and diagnostics excluded.
- Actions: view/snapshot/talk/siren/quick-reply controls are not authorized here and remain omitted until privacy, permission, capability, and result evidence exists.
- Relationships: notification routes remain with the Notification owner; media privacy/retention/audio/access remains with the Media Privacy owner.
- Unresolved / acceptance: `BAI-EXC-005` through `BAI-EXC-008`; not ready for media implementation or customer acceptance.

### `BAI-CAP-005` — South Entrance light control

- Semantic scope / Dashboard classes: entrance light state and later authorized control; Customer and Installer/Commissioning candidates.
- Provenance: active registry relationship and current repository dashboard/security references.
- Freshness: registration/configuration evidence only; current on/off/availability unknown.
- State source: later authorized binding; diagnostics such as power/voltage/energy are service noise unless separately scoped.
- Visibility/actions: read-only customer-safe status may proceed after live verification; control requires permission/result/fallback evidence.
- Unresolved / acceptance: `BAI-EXC-005` and `BAI-EXC-006`; not production-ready.

### `BAI-CAP-006` — Bailey Double Doors access control

- Semantic scope / Dashboard classes: Bailey Double Doors lock state, jam attention, and later authorized lock/unlock controls; Customer and Installer/Commissioning candidates.
- Provenance: active registry relationships and current repository security/dashboard sources after South-lock retirement.
- Freshness: registration and current source configuration only; current lock/jam/availability state unverified.
- State source: later authorized lock and jam bindings; unknown/unavailable cannot become locked/safe.
- Visibility/actions: read-only semantic state candidate; lock/unlock and Close-and-Arm actions require backend authorization, confirmation, result, denial, and fallback evidence.
- Relationships: current repository automation interface may consume the lock; this model does not redefine that behavior.
- Spatial posture: East Wall / Bailey Double Doors is registry/repository-supported; exact related door-contact pairing remains unresolved.
- Unresolved / acceptance: `BAI-EXC-005`, `BAI-EXC-006`, `BAI-EXC-012`; not production-ready.

### `BAI-CAP-007` — Bailey Double Doors doorbell and visitor media

- Same evidence, visibility, action, privacy, permission, availability, and acceptance posture as `BAI-CAP-004`, using the Bailey Double Doors registry/repository relationship.
- Spatial posture: East Wall / Bailey Double Doors is supported; no live stream/event claim is made.
- Unresolved / acceptance: `BAI-EXC-005` through `BAI-EXC-008`.

### `BAI-CAP-008` — Parking-lot camera and person/vehicle awareness

- Semantic scope / Dashboard classes: parking-lot camera, person/vehicle/linger event awareness, and floodlight presence; Customer read-only and Service/Operator candidates.
- Provenance: active registry relationships and current repository semantic sources.
- Freshness: registration/configuration only; live stream, analytics, event duration, floodlight, local/remote reachability, and availability unverified.
- State source: later authorized camera/event binding; current/recent/resolved semantics require validation.
- Visibility/actions: customer-safe event/status candidate; stream, history, floodlight, siren, recording, and notification actions blocked pending privacy/permission/capability evidence.
- Unresolved / acceptance: `BAI-EXC-005` through `BAI-EXC-008`; not production-ready.

### `BAI-CAP-009` — Current repository-defined exterior opening coverage

- Semantic scope / Dashboard classes: grouped exterior-opening attention currently defined by C01, C05-C08, and C10-C11; Customer and Installer/Commissioning candidates.
- Provenance: current `bklf_security.yaml` plus active registry records.
- Lifecycle: `DEGRADED` because a repository-defined subset exists while physical mappings and omitted/disputed contacts remain unresolved.
- State source: later authorized individual bindings plus current semantic aggregate; any unknown/unavailable input must remain attention, not secure.
- Visibility: grouped customer-safe status only after validating the included set; individual raw mappings internal.
- Actions: none; notification/automation interfaces remain with their owners.
- Spatial posture: group labels are repository-defined; C05 has a device/entity naming conflict and cannot independently prove location.
- Unresolved / acceptance: `BAI-EXC-002` through `BAI-EXC-005`; affected coverage is not ready for installed-verified or whole-property claims.

### `BAI-CAP-010` — Additional exterior contact candidates C02-C04

- Provenance: active registry entities; C03/C04 also appear in current repository notification relationships.
- Lifecycle/evidence: `DEFERRED` / `DISCREPANCY_REQUIRES_RESOLUTION` because device names/areas conflict with entity names and physical mapping is not established.
- Visibility/state/actions: internal-only candidate records; no customer label, location, state, or control may be inferred.
- Next evidence: onsite mapping and current live availability under the installer/commissioning owner (`BAI-EXC-002`).

### `BAI-CAP-011` — Disputed contact candidates C09 and C12

- Provenance: active enabled registry entities conflict with current repository comments/exclusions and older removal assertions.
- Lifecycle/evidence: `DEFERRED` / `DISCREPANCY_REQUIRES_RESOLUTION`; registry presence does not restore installed capability.
- Visibility/state/actions: hidden/internal only.
- Next evidence: operator/installer physical disposition plus current runtime availability (`BAI-EXC-003`).

### `BAI-CAP-012` — Deferred contact candidates C13 and C14

- Provenance: active enabled registry entities; current repository source intentionally omits them from active secure/attention aggregates pending mapping/evidence.
- Lifecycle/evidence: `DEFERRED` / `UNRESOLVED`.
- Visibility/state/actions: hidden/internal only.
- Next evidence: onsite placement and live availability validation (`BAI-EXC-004`).

### `BAI-CAP-013` — Interior motion awareness

- Semantic scope: Main Hallway and Viewing Room motion/occupancy plus current semantic aggregate.
- Provenance: active registry records and current repository semantic source.
- Lifecycle: `INSTALLED_UNVERIFIED`; live motion/occupancy state and commissioning absent.
- Visibility: customer-safe grouped state candidate; diagnostics internal.
- Automation relationship: current secured-mode interfaces remain owned by AUTOMATION001 and require controlled acceptance testing.
- Unresolved / acceptance: `BAI-EXC-005`; not production-ready.

### `BAI-CAP-014` — Smoke-device presence and local smoke state

- Semantic scope: three registry-known smoke devices/semantic states at Network Closet, Viewing Room, and West Hallway Jog.
- Provenance: active registry records and current repository scoped handler/attention source.
- Lifecycle: `INSTALLED_UNVERIFIED`; registry/source evidence supports device presence, not commissioned alarm detection or response.
- Visibility: customer-safe projection is limited to truthful installation/unverified posture. Unknown/unavailable/non-off remains attention.
- Actions/notifications: no monitoring, dispatch, emergency-response, listener, notification-delivery, or customer-response claim is authorized.
- Unresolved / acceptance: live alarm-state validation and onsite commissioning under `BAI-EXC-009`; not production-ready for alarm-status claims.

### `BAI-CAP-015` — Viewing-room temperature and humidity

- Provenance: active registry records and current repository environmental-attention source.
- Lifecycle: `INSTALLED_UNVERIFIED`; live readings, units, freshness, accuracy, and availability unverified.
- Visibility: read-only customer-safe environmental candidate after validation; diagnostics excluded.
- Actions: none.
- Unresolved / acceptance: `BAI-EXC-005`; not production-ready.

### `BAI-CAP-016` — Audible alarm/strobe output

- Provenance: registry-known relay/output and current repository attention dependency.
- Lifecycle: `INSTALLED_UNVERIFIED`; physical load, safe activation, result state, permission, and commissioning unverified.
- Visibility/actions: `INTERNAL_ONLY`; no customer control or emergency-response implication.
- Unresolved / acceptance: controlled installer validation required under `BAI-EXC-010`.

### `BAI-CAP-017` — Repository-defined notifications and automation interfaces

- Semantic scope: repository-defined doorbell, camera availability, opening, motion, lock-jam, building-mode, and related interfaces only; behavior remains with AUTOMATION001 and Notification owners.
- Provenance: current repository package sources plus registry snapshot of registered automation/helper records.
- Lifecycle/evidence: `INSTALLED_UNVERIFIED` / `DISCREPANCY_REQUIRES_RESOLUTION`; the registry snapshot predates merged South-lock retirement and retains obsolete South-lock records.
- Visibility: customer-safe event labels only after applicable event-source/routing/privacy decisions; routing, recipients, internal helpers, and diagnostics remain internal.
- Actions: this model grants none and does not redefine triggers, consequences, interlocks, override, recovery, routing, quiet hours, retention, or delivery.
- Unresolved / acceptance: `BAI-EXC-001`, `BAI-EXC-006`, `BAI-EXC-011`, and `BAI-EXC-012`; not production-ready.

## 6. Customer-safe projection rules

- Customer-safe output may use only semantic labels and truthful lifecycle/availability language from this model.
- No raw entity/device/area IDs, unique IDs, connections, MAC addresses, private URLs, credentials, user records, or diagnostic/config entities enter customer projection.
- The registry contains substantial service noise: 605 diagnostic-category and 211 config-category active entity records. Those records are excluded from customer capability projection.
- Planned, deferred, unresolved, retired/not-installed, or unsupported items do not appear as live customer functions.
- `UNKNOWN`, stale, conflicting, or unverified evidence never becomes Normal, secure, closed, locked, available, authorized, or installed-verified.
- Overall/building status may describe only the represented verified scope; this model does not establish whole-property protection.
- No statement in this model implies professional monitoring, dispatch, emergency-services response, guaranteed prevention, or continuous service.

## 7. Later dashboard-build handoff

The later HA-native dashboard task may use this model only with `BAILEY_DASHBOARD_BINDING_CANDIDATES_REV01.md` and `BAILEY_DASHBOARD_EVIDENCE_EXCEPTIONS_REV01.md`.

- Registry-known/repository-defined but unverified candidates: `BAI-CAP-001`, `002`, `004` through `008`, and `013` through `017`.
- Degraded grouped coverage: `BAI-CAP-009`.
- Deferred/unresolved contact candidates: `BAI-CAP-010` through `012`.
- Permanently excluded historical capability: `BAI-CAP-003` (`RETIRED_NOT_INSTALLED`).
- No capability is ready for authoritative live state or customer control solely from this task.
- A separate bounded task must authorize any HA-native YAML, preview, runtime binding, permission assignment, media exposure, implementation, acceptance, or deployment.
