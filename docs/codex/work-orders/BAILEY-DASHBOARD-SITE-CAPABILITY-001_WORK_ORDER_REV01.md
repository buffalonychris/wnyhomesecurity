# BAILEY-DASHBOARD-SITE-CAPABILITY-001 — Bailey Site Capability Model and Dashboard Binding Preparation

**Revision:** REV01
**Status:** OPERATOR AUTHORIZED
**Category:** GOV
**Primary Workstream:** Dashboard / Interactive Experience System
**Related Workstreams:** Project Governance; Automation System; Runtime System
**Task ID:** BAILEY-DASHBOARD-SITE-CAPABILITY-001
**Standing Campaign:** DASHBOARD-CAMPAIGN-001
**Implementation authority:** Repository-only evidence analysis and sanitized documentation. No dashboard implementation or live/runtime authority.
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

READ MODE: TARGETED

Search exact task IDs, headings, filenames, evidence keys, entity/device names, lifecycle states, and owner sections first. Read only the smallest applicable authority, Bailey evidence, lineage, and owner-document sections needed to produce and validate the three authorized artifacts. Do not fully load the Master Task Register, catalogs, manifests, inventories, historical documents, or unrelated dashboard/HA material.

REASONING POSTURE: ADAPTIVE
- LOW: repository convergence, exact-path and task-state checks, allowlist validation, mechanical scans, Git delivery, and closeout.
- MEDIUM: evidence normalization, semantic-capability mapping, conservative lifecycle classification, provenance/freshness review, and exception routing.
- HIGH: only material evidence conflicts, ambiguous physical mappings, uncertain owner routing, or a proposed conclusion that could overstate installed/verified capability.
- De-escalate after the ambiguity is resolved. Reasoning depth never expands the targeted-read boundary.

EXECUTION POSTURE: DIRECT

## 1. Objective

Consume the operator-authorized transient Bailey Home Assistant registry export and applicable current repository evidence to create three sanitized, repository-owned preparation artifacts:

1. `docs/home-assistant/bklf/inventory/BAILEY_SITE_CAPABILITY_MODEL_REV01.md`
2. `docs/home-assistant/bklf/inventory/BAILEY_DASHBOARD_BINDING_CANDIDATES_REV01.md`
3. `docs/home-assistant/bklf/inventory/BAILEY_DASHBOARD_EVIDENCE_EXCEPTIONS_REV01.md`

The result must establish an evidence cutoff, model truthful semantic capabilities under the canonical variable/evidence contract, identify internal binding candidates, and preserve discrepancies and unresolved mappings for later owner action. It prepares evidence for a subsequent separately authorized Home Assistant-native dashboard build. It does not create or modify dashboard YAML and does not access or mutate the live Bailey Home Assistant runtime.

## 2. Authorization and required precheck

Before analysis or editing, Codex must:

1. Confirm this work order is `OPERATOR AUTHORIZED`.
2. Confirm the exact `BAILEY-DASHBOARD-SITE-CAPABILITY-001` Master Task Register record is `ACTIVE`.
3. Confirm `DASHBOARD-CAMPAIGN-001` remains the standing campaign; it does not independently authorize implementation.
4. Confirm the current context remains `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.
5. Confirm the governance/setup delivery containing this work order and task record has been merged to `main` and the later execution starts from a clean, synchronized `main`.
6. Create one fresh later-execution branch from the then-current `origin/main`; do not reuse the governance/setup branch.
7. Confirm all five transient evidence paths exist exactly as named and remain outside the repository.
8. Read the manifest first and verify site slug `BAILEY` and extraction timestamp `20261006T160742Z` before reading any registry JSON.
9. Confirm the absence of optional `core.floor_registry` is recorded by the manifest and is not treated as a blocker.
10. Confirm the three output files do not already contain conflicting unmerged work. If they do, stop rather than overwrite or combine work by inference.
11. Confirm no raw export, registry, backup, secret, auth, database, log, trace, private URL, or customer-private evidence will be copied into Git.

If repository authority, task status, evidence identity, site identity, allowed files, or protected-system boundaries conflict, stop before analysis or editing.

## 3. Required authority and owner documents

Read applicable current sections only from:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- exact `BAILEY-DASHBOARD-SITE-CAPABILITY-001`, `DASHBOARD-CAMPAIGN-001`, and `BAILEY-HA-SOUTH-LOCK-RETIRE-001` records in `docs/system/master-task-register.md`
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- applicable routing in `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md`
- `docs/home-assistant/WNYHS_DASHBOARD_CREATION_AND_LIFECYCLE_STANDARD_REV01.md`
- `docs/home-assistant/WNYHS_SITE_CAPABILITY_EVIDENCE_AND_BINDING_STANDARD_REV01.md`
- `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md`
- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
- `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
- `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`
- applicable BPI records already routed by the canonical Site Capability and Dashboard standards
- `docs/codex/work-orders/BAILEY-HA-SOUTH-LOCK-RETIRE-001_WORK_ORDER_REV01.md` as lineage for the South HC620 disposition only

Do not modify, expand, duplicate, or reinterpret the Business Process Interdependency Register. Do not load OPS005 unless current workstream status becomes materially necessary.

## 4. Operator-approved Owner Routing Matrix

| Approved concept | Canonical owner | Exact target | Section / behavior | Action | Reason | Alternate-owner exclusion | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sanitized Bailey Site Capability Model | Site Capability, Evidence & Binding Standard | `docs/home-assistant/bklf/inventory/BAILEY_SITE_CAPABILITY_MODEL_REV01.md` | Canonical variable/evidence contract, semantic capability, lifecycle, provenance, freshness, visibility, actions, and unresolved conditions | CREATE | This is the canonical durable layer between source evidence and dashboard assembly | Raw HA exports and dashboard YAML are evidence/runtime surfaces, not the model owner | NO | HIGH |
| Internal Bailey dashboard binding candidates | Site Capability, Evidence & Binding Standard with DASHBOARD001 binding contract | `docs/home-assistant/bklf/inventory/BAILEY_DASHBOARD_BINDING_CANDIDATES_REV01.md` | Minimum necessary technical candidate mapping and readiness, classified `INTERNAL_ONLY` | CREATE | Binding candidates must remain separate from customer-safe capability truth and later runtime authority | INSTALL006 owns meaning; AUTOMATION001 owns behavior; neither grants bindings here | NO | HIGH |
| Bailey evidence exceptions and unresolved mappings | Site Capability standard and Dashboard lifecycle exception gate | `docs/home-assistant/bklf/inventory/BAILEY_DASHBOARD_EVIDENCE_EXCEPTIONS_REV01.md` | Discrepancy, blocker, owner, next evidence, affected capability/stage, and permitted work | CREATE | Ambiguity must be preserved and routed instead of guessed | MTR is task bookkeeping and BPI is cross-business dependency authority, not a site exception register | NO | HIGH |
| Transient registry evidence and safe interpretation | HA-BACKUP001 REV02 | Five exact operator evidence paths outside Git | Evidence identity, raw-evidence safety, active/deleted/disabled/hidden interpretation, sanitization | REFERENCE ONLY | Extraction and transient raw-evidence safety stay with HA-BACKUP001 | The Site Capability Model consumes sanitized conclusions only | NO | HIGH |
| Customer-safe dashboard meaning and capability visibility | INSTALL006 REV02 | Applicable sections only | Installed/unavailable/degraded/unresolved meaning and semantic dashboard contract | REFERENCE ONLY | Later artifacts must use canonical meaning without building a dashboard | DESIGN001 does not own functional state semantics | NO | HIGH |
| Dashboard delivery/binding evidence posture | DASHBOARD001 REV02 | Applicable sections only | Evidence binding, candidate classification, and later HA-native preparation gates | REFERENCE ONLY | This task prepares evidence but grants no binding or YAML authority | The Site Capability standard owns the durable model | NO | HIGH |
| Visual/component rules | DESIGN001 REV02 | Applicable owner boundary only | Preserve owner boundary for later presentation | REFERENCE ONLY | No visual design or component work is authorized | Capability analysis must not invent presentation rules | NO | HIGH |
| Automation semantics | AUTOMATION001 REV01 and truthful existing Bailey semantic repository sources | Applicable current Bailey semantic sources | Identify existing semantic interfaces without redefining triggers, consequences, overrides, or recovery | REFERENCE ONLY | Dashboard preparation may describe evidenced interfaces only | Dashboard owners do not own automation behavior | NO | HIGH |
| South HC620 physical disposition | Operator-confirmed fact with `BAILEY-HA-SOUTH-LOCK-RETIRE-001` lineage | All three output artifacts where applicable | Classify the former South Entrance HC620 as `RETIRED_NOT_INSTALLED`; preserve independent South Entrance capabilities | REFERENCE / RECORD | The replacement South door is incompatible with the former lock | Registry/runtime residue is discrepancy evidence and cannot restore installed status | NO | HIGH |
| Cross-business dependencies | Existing BPI authority | Applicable existing BPI records only | Consume documented current/manual/future/unresolved and stage-gate distinctions | REFERENCE ONLY | The Dashboard System consumes BPI and does not create a parallel dependency model | No BPI modification or expansion is authorized | NO | HIGH |
| Task lifecycle bookkeeping | Project Governance | Exact `BAILEY-DASHBOARD-SITE-CAPABILITY-001` block in `docs/system/master-task-register.md` | Later execution lifecycle and evidence fields only | MODIFY | MTR owns task lifecycle | Do not edit adjacent tasks or priorities | NO | HIGH |

If a matrix row proves materially wrong, stop for an operator-approved work-order revision rather than silently rerouting authority.

## 5. Reference-only evidence inputs

### 5.1 Transient operator evidence outside the repository

The later execution may read only these raw evidence files:

```text
C:\Users\Dell\Downloads\BAILEY_HA_EXPORT_MANIFEST.txt
C:\Users\Dell\Downloads\BAILEY_ENTITY_REGISTRY.json
C:\Users\Dell\Downloads\BAILEY_DEVICE_REGISTRY.json
C:\Users\Dell\Downloads\BAILEY_AREA_REGISTRY.json
C:\Users\Dell\Downloads\BAILEY_LABEL_REGISTRY.json
```

Operator-verified manifest identity:

- Site slug: `BAILEY`
- Extraction timestamp: `20261006T160742Z`
- Optional `core.floor_registry`: absent; not a blocker

These files are transient, read-only, non-commit-ready evidence. They must remain outside Git, must never be copied into the repository, and must not be treated as live-state proof.

### 5.2 Repository evidence

Use targeted exact-name/key searches to locate applicable current Bailey evidence under:

- `docs/home-assistant/bklf/inventory/`
- `home-assistant/bklf/packages/`
- `home-assistant/bklf/dashboards/`
- the exact South HC620 work-order/MTR lineage named above

Read only evidence needed to corroborate or challenge a candidate capability. Repository YAML and inventory documents are evidence, not live-state proof. Preserve contradictions between older inventory evidence and newer operator-confirmed or merged repository evidence as explicit discrepancy/cleanup evidence.

Do not load the Bailey standalone prototype unless a specific semantic claim requires it and no current canonical Bailey source establishes the fact. Prototype presentation is not installed-capability authority.

## 6. Required work

### A. Establish the evidence manifest, cutoff, provenance, and freshness

- Record the exact five evidence paths, site slug, extraction timestamp, missing optional floor registry, evidence cutoff, preparer posture, and limitations in the sanitized artifacts without copying raw payloads.
- Distinguish transient registry evidence, repository evidence, operator-confirmed physical fact, and historical lineage.
- Identify stale, conflicting, incomplete, disabled, hidden, deleted, diagnostic, and unresolved evidence explicitly.
- Never infer live availability, current physical state, permission, acceptance, or `INSTALLED_VERIFIED` from registry presence.

### B. Create the Bailey Site Capability Model

- Follow the complete variable definition and minimum Site Capability Model contracts in `WNYHS_SITE_CAPABILITY_EVIDENCE_AND_BINDING_STANDARD_REV01.md`.
- Distinguish raw device/entity facts from stable semantic capabilities.
- Classify installation/availability conservatively using, as applicable: `PROPOSED`, `QUOTED`, `CUSTOMER_APPROVED`, `INSTALLED`, `INSTALLED_UNVERIFIED`, `INSTALLED_VERIFIED`, `UNAVAILABLE`, `DEGRADED`, `DEFERRED`, and `RETIRED_NOT_INSTALLED`.
- Use only the canonical input-source states: `AVAILABLE_FROM_CURRENT_EVIDENCE`, `MANUAL_OPERATOR_INPUT`, `FUTURE_BUSINESS_SYSTEM_INPUT`, `UNRESOLVED`, and `NOT_APPLICABLE`.
- Keep `CUSTOMER_SAFE`, `INTERNAL_ONLY`, and `SPLIT_PROJECTION` information separable.
- Exclude service diagnostics, raw technical noise, raw identifiers, and unsupported or non-customer-safe details from customer-safe projection.
- Reuse truthful existing Bailey semantic sources where evidenced; do not redefine automation, notification, permission, media, mode, or other domain logic.

### C. Apply the South HC620 disposition exactly

- Classify the former South Entrance Kwikset HC620 as `RETIRED_NOT_INSTALLED`.
- Record that the physical South door was replaced and is incompatible with that lock.
- Preserve South Entrance as a monitored entrance.
- Preserve any separately evidenced South door contact, doorbell, camera, light, or other legitimate semantic capability independently.
- Treat any remaining registry or repository runtime reference to the retired HC620 as discrepancy/cleanup evidence only; it does not restore installed-capability status.
- Do not invent, propose, model, bind, or create a placeholder for a future South mag lock. Future South mag-lock work is out of scope.

### D. Create the INTERNAL_ONLY binding-candidate register

- Mark the complete artifact `INTERNAL_ONLY`.
- Map semantic capabilities to the minimum necessary candidate technical evidence only when supported.
- Record evidence source, freshness, candidate state source, area/device/entity relationship, disabled/hidden/deleted posture, limitations, confidence, and later verification need.
- Separate candidate binding from authorized binding and from authoritative live state.
- Preserve unresolved physical and semantic mappings; never guess locations or relationships from generic names.
- Exclude service diagnostics and raw technical noise unless the minimum necessary record is required to explain a binding blocker.
- State explicitly that the register grants no runtime binding, permission, action, dashboard YAML, or live-state authority.

### E. Create the evidence exception/unresolved register

For each material exception or unresolved item, record:

- stable exception ID and concise description;
- affected semantic capability and lifecycle stage;
- conflicting/missing evidence and current safe classification;
- exact owner or `UNRESOLVED OWNER` when no current owner is established;
- next evidence or decision required;
- `required_for_execution: YES` or `NO` for the affected stage only;
- work allowed while unresolved; and
- disposition/closure field without inventing future evidence.

Include stale repository-versus-current evidence, unresolved physical mappings, raw registry noise that must not project to customers, and any exact blocker to a subsequent HA-native dashboard build.

### F. Prepare the later dashboard-build handoff without implementation

- Identify which semantic capabilities and candidate bindings are ready, unresolved, unavailable/degraded, deferred, or retired/not installed.
- Identify exact blockers, owner, next evidence, and affected stage.
- State that a subsequent separately authorized task must create and validate the Home Assistant-native dashboard and bindings.
- Do not create dashboard YAML, UI designs, components, routes, runtime assignments, or placeholder integrations.

### G. Update only this MTR record at later closeout

After the three artifacts pass validation and one later implementation draft PR exists, update only the exact `BAILEY-DASHBOARD-SITE-CAPABILITY-001` record with truthful lifecycle, publication/evidence, branch, commit, draft-PR, validation, build-skip, protected-boundary, and unresolved-risk evidence. Do not modify adjacent records or priorities.

## 7. Later implementation write allowlist

Only these paths may change during the later capability-analysis execution:

1. `docs/home-assistant/bklf/inventory/BAILEY_SITE_CAPABILITY_MODEL_REV01.md`
2. `docs/home-assistant/bklf/inventory/BAILEY_DASHBOARD_BINDING_CANDIDATES_REV01.md`
3. `docs/home-assistant/bklf/inventory/BAILEY_DASHBOARD_EVIDENCE_EXCEPTIONS_REV01.md`
4. `docs/system/master-task-register.md` — exact `BAILEY-DASHBOARD-SITE-CAPABILITY-001` lifecycle/evidence record only

This work-order file is controlling input and reference-only during later implementation. Revision requires a separate explicitly authorized governance change.

## 8. Forbidden scope and protected systems

The later execution must not perform or create:

- live Home Assistant access or mutation;
- Home Assistant restart or reload;
- `.storage` modification;
- entity renaming;
- Z-Wave or Zigbee changes;
- device exclusion or removal;
- dashboard YAML creation or modification;
- dashboard redesign;
- automation or notification behavior changes;
- user, permission, or backend assignment changes;
- media-access changes;
- future South mag-lock implementation or placeholder;
- Cloudflare, runtime, or network changes;
- website or API changes;
- HubSpot or CRM changes;
- scheduling changes;
- Stripe or payment changes;
- quote or funnel changes;
- schema or database creation;
- HA Evidence Processor implementation;
- Skill, GPT, agent, or service architecture decisions;
- BPI modification or expansion;
- physical-location invention;
- inference of live state from registry presence;
- raw registry, backup, secret, auth, database, log, trace, private-data, or private-URL commits;
- merge, deployment, auto-merge, or ready-for-review transition.

Bailey Home Assistant is a protected customer runtime. Capability analysis and repository documentation grant no live/runtime authority.

## 9. Change posture and version rule

- Documentation-only, additive, and sanitized.
- The three new artifacts may document discrepancies but must not repair source/runtime configuration.
- Existing canonical standards, BPI authority, Bailey YAML, inventories, and historical lineage are reference-only.
- No site version bump applies because no site/application source changes.
- No destructive change, file rename, deletion, supersession, or retirement is authorized.

## 10. Validation

Tier: governance / docs-only / sanitized evidence derivative.

Required later-execution validation:

1. Exact changed-file allowlist contains only the three new Bailey artifacts and this exact MTR record.
2. Exactly three Bailey capability artifacts exist at the authorized paths.
3. Exactly one `BAILEY-DASHBOARD-SITE-CAPABILITY-001` MTR record exists.
4. Work order remains `OPERATOR AUTHORIZED`; task begins `ACTIVE` and is updated only truthfully at closeout.
5. `READ MODE: TARGETED` is preserved and reported.
6. All five transient Downloads paths are recorded exactly, but none is copied or added to Git.
7. Manifest identity records site slug `BAILEY` and extraction timestamp `20261006T160742Z`; optional missing floor registry is non-blocking.
8. The South HC620 is classified exactly `RETIRED_NOT_INSTALLED`.
9. South Entrance remains a monitored entrance and separately evidenced capabilities remain independent.
10. Future South mag lock is explicitly out of scope with no implementation, candidate binding, or placeholder.
11. Registry presence never produces `INSTALLED_VERIFIED` by itself.
12. Lifecycle and input-source states use only the canonical values.
13. The binding-candidate register is explicitly `INTERNAL_ONLY` and distinguishes candidate, authorized, and live-state posture.
14. Evidence exceptions identify blocker, owner, next evidence, affected stage, and stage-scoped `required_for_execution` posture.
15. Customer-safe projection excludes raw identifiers, service diagnostics, and raw technical noise.
16. No unresolved physical mapping is guessed.
17. No raw HA export, backup, secret, auth, database, log, trace, private URL, or private/customer data is tracked or staged.
18. No Bailey dashboard/package/runtime YAML changes.
19. No canonical standard, BPI, website/runtime/protected-system, dependency, configuration, or adjacent MTR record changes.
20. No unexpected deletion: `git diff --diff-filter=D --name-only` returns empty.
21. `git diff --check` passes.
22. Docs-only application build is skipped under `CODEX_EXECUTION_STANDARD_REV01.md` Section 16 because no source or build configuration changes.
23. One later execution draft PR to `main`; no merge or deployment.

Use focused literal checks or normalized-line checks where CRLF-sensitive regex behavior could mislead. Validation must inspect staged/committed content before push and PR creation.

## 11. Git and delivery for later execution

- Start only after this governance/setup change is merged and `main` is clean and synchronized.
- Create one fresh branch for this task from the then-current `origin/main`.
- Use one bounded implementation commit containing only the four allowed paths.
- Push the branch and open one draft PR to `main`.
- Do not merge, enable auto-merge, mark ready, deploy, or mutate live/protected systems.
- Do not combine this task with dashboard construction or runtime cleanup.

## 12. Required closeout

Report:

- repository path and controlling context;
- task/category/workstreams;
- read, reasoning, and execution posture;
- branch, commit SHA, and draft PR URL/state;
- exact files created/changed;
- evidence manifest identity, cutoff, provenance, and freshness posture without exposing raw/private contents;
- capability-state summary and the exact South HC620 disposition;
- binding-candidate readiness summary;
- exception/blocker summary with owners, next evidence, and affected stages;
- validation results and governed docs-only build skip;
- confirmation raw HA evidence was not copied, tracked, staged, or committed;
- confirmation no dashboard YAML, runtime, live HA, protected system, canonical standard, BPI, merge, or deployment change occurred;
- assumptions and unresolved risks;
- canonical Token Utilization / RSI Report and Context Efficiency Report required by `CODEX_EXECUTION_STANDARD_REV01.md`.

## 13. Stop conditions

Stop and report before analysis or editing if:

- repository convergence fails;
- the task is not `ACTIVE` or this work order is not `OPERATOR AUTHORIZED`;
- the setup delivery is not present on the synchronized base;
- evidence paths, site slug, extraction timestamp, or manifest identity differ;
- a required raw file other than optional floor registry is missing or unreadable;
- raw evidence appears inside the repository or would need to be copied/committed;
- required authority or an Owner Routing Matrix row materially conflicts;
- truthful classification would require invented physical mapping, permission, live state, customer acceptance, or owner;
- the three output paths contain conflicting unmerged work;
- the task would require dashboard YAML, runtime cleanup, live access, protected-system mutation, BPI change, canonical-standard change, or architecture selection;
- the changed-file allowlist expands or a deletion appears.

## 14. Exit criteria

The task is complete only when:

1. the transient evidence identity, cutoff, provenance, freshness, and limitations are recorded without committing raw evidence;
2. the sanitized Bailey Site Capability Model conforms to the canonical variable/evidence contract;
3. installation/availability classifications are conservative and registry presence alone produces no live or installed-verified claim;
4. the South HC620 is `RETIRED_NOT_INSTALLED`, South Entrance remains monitored, independent capabilities remain separate, and no future mag-lock concept is invented;
5. the binding-candidate register is `INTERNAL_ONLY` and grants no runtime/binding authority;
6. the exception register preserves unresolved mappings and identifies exact blockers, owner, next evidence, and affected stage;
7. the artifacts provide a truthful handoff for a separate later HA-native dashboard-build task without creating dashboard YAML;
8. only the four later-execution allowlisted paths changed, no deletion occurred, and all validation passed;
9. one later draft PR is open for operator review; and
10. no live HA, runtime/protected-system, canonical-standard, BPI, merge, or deployment change occurred.
