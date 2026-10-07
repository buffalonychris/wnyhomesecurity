# DASH-GOV-POSTINSTALL-AUDIT-001 — Post-Install Dashboard Requirements and Governance Audit

**Revision:** REV01
**Status:** PREPARED — NOT DISPATCHED OR EXECUTED
**Category:** GOV / AUDIT
**Primary Workstream:** Dashboard / Interactive Experience System
**Related Workstreams:** Home Assistant Platform; Automation System; Visual System; Installer Platform; Project Governance
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
**Standing Campaign:** DASHBOARD-CAMPAIGN-001

READ MODE: FULL

Justification: this is a bounded cross-source reconciliation. FULL authorizes breadth of relevant discovery, not full loading of every candidate file. Use this sequence:

`exact search -> candidate source inventory -> targeted section reads -> full document read only when classification or lineage requires it -> targeted secondary-source expansion only when current-repository evidence or a coverage gap justifies it`

Once the candidate universe is established, do not repeat broad repository searches or load unrelated registers, catalogs, manifests, raw customer evidence, or implementation assets.

REASONING POSTURE: ADAPTIVE

Use STANDARD for inventory, extraction, classification, validation, and closeout. Elevate only for genuinely ambiguous precedence, ownership, or conflicts; never use deeper reasoning to resolve a finding or invent doctrine.

EXECUTION POSTURE: DIRECT

Use read-only evidence inspection and authorized delivery commands. External or connected evidence access is permitted only for the targeted secondary-lineage cases in Section 8.4; live/customer/runtime access remains prohibited.

## 1. Objective

Create one repository-owned audit that identifies, traces, and classifies every materially relevant requirement affecting post-install WNYHS Home Assistant dashboard creation.

The audit must distinguish current authority from supporting, site-specific, superseded, historical, conflicting, and missing requirements. It must expose gaps and conflicts without resolving them, changing ownership, promoting historical material, or authorizing implementation.

## 2. Authorization and execution gate

This REV01 is prepared only. Execute only after its creation PR is merged, `main` is synchronized, the exact READY MTR record is explicitly dispatched, `DASHBOARD-CAMPAIGN-001` remains ACTIVE/non-implementing, the controlling context and dashboard owner map remain current, and no other task or PR owns the audit deliverable.

If any gate fails, stop and request a work-order/context revision. Do not infer authorization from this prepared document alone.

## 3. Required precheck

Follow the convergence and task gates in `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`. Task-specific prechecks are: exact OPS004 primary-workstream match; targeted current-context/campaign/task-record reads; exact-task and deliverable duplicate-owner search locally and in open PRs; candidate inventory before reads; and confirmation that protected, raw, secret, or live customer evidence is unnecessary. Unrelated deployment history is not applicable.

## 4. Governing authority and routing inputs

Read the minimum applicable sections first:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md` — exact current context, dashboard routing, protected boundaries
- `docs/system/master-task-register.md` — exact records only for this task, `DASHBOARD-CAMPAIGN-001`, and materially cited dashboard lineage
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` — audit read mode, owner routing, scope, validation, Git, closeout
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV02.md` with preserved REV01 dashboard registry section
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md` — current routing and lineage map

### 4.1 Source authority hierarchy

The current WNYHS repository is the authoritative implementation and governance source. Its current authority chain and domain owners control over chat context, other repositories, Project knowledge, and historical material.

The audit may inspect specifically identified secondary lineage sources when materially useful:

- other WNYHS-related repositories available to the operator or authorized tooling;
- prior ChatGPT Project / Project-knowledge material; and
- other durable historical sources explicitly referenced by current repository lineage.

These sources are discovery/lineage evidence only. They may reveal historical requirements, prior decisions, superseded concepts, unpromoted value, conflicts, or gaps, but they may not override the current repository, qualify as `CURRENT_CANONICAL` merely because they existed elsewhere, silently become implementation authority, or be promoted during the audit.

Every material secondary-source finding must use the Section 6 classification model and remain supporting, site-specific, historical, unpromoted, conflicting, or gap evidence until separately reconciled and promoted. Secondary expansion must be targeted and justified by a current-repository reference, known lineage, or an identified coverage gap; indiscriminate searches of past repositories or chats are prohibited.

## 5. Owner Routing Matrix

| Approved concept | Current canonical owner | Exact target | Section / behavior | Action | Reason | Why not elsewhere | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cross-owner audit | Dashboard / Interactive Experience System | `docs/audits/DASH-GOV-POSTINSTALL-AUDIT-001_AUDIT_REV01.md` | Evidence, classifications, coverage, conflicts/gaps | CREATE | No current artifact owns this audit | Domain owners retain doctrine; INSTALL011 owns orchestration | NO after precheck | HIGH |
| Task lifecycle | Project Governance | `docs/system/master-task-register.md` | Exact task record | MODIFY | MTR owns status/evidence | Audit is not task-state authority | NO | HIGH |
| Current dashboard doctrine | INSTALL006; DESIGN001; DASHBOARD001; INSTALL011 | Section 8 owner documents | Requirement evidence | REFERENCE ONLY | Existing canonical owners | Restatement would create drift | NO | HIGH |
| Supporting/governance-audit evidence | Existing narrow owners; GOVREF001 reference | Section 8 current-repository set | Ownership/gap discovery | REFERENCE ONLY | Cross-domain evidence | Does not replace dashboard owners | NO | HIGH |
| Site, historical, superseded, and secondary lineage | Source owner or recorded lineage | Section 8 bounded sources | Discovery/classification | REFERENCE ONLY | Surfaces value/conflicts/gaps | Promotion requires separate authority | Finding-dependent | HIGH |
| Conflicts and gaps | Unresolved | Audit registers | Evidence, impact, candidate review owners | CREATE | Diagnostic outcome | Resolution exceeds scope | YES by finding | HIGH |

The audit must not add, supersede, or modify a canonical owner. Any newly discovered write target requires work-order revision.

## 6. Required classification vocabulary

Every distinct finding must receive exactly one primary classification from this closed set:

- `CURRENT_CANONICAL` — operative requirement owned by the current canonical document for that domain.
- `CURRENT_SUPPORTING_REQUIREMENT` — operative requirement in a current narrow/supporting owner that complements, and does not replace, canonical dashboard doctrine.
- `SITE_SPECIFIC_REFERENCE` — Bailey, Peckham, or other site-specific evidence useful as an example or constraint but not universal authority.
- `SUPERSEDED_WITH_UNPROMOTED_VALUE` — requirement or insight in a superseded/retired source that appears materially useful but is not demonstrably absorbed into current authority.
- `HISTORICAL_NO_LONGER_APPLICABLE` — historical requirement that is obsolete, withdrawn, replaced, site-bound with no continuing value, or otherwise not applicable.
- `CONFLICT_RECONCILIATION_REQUIRED` — two or more materially applicable sources conflict, precedence is unclear, or current owners assign incompatible requirements.
- `GAP_REQUIREMENT_NOT_YET_OWNED` — a required topic has no sufficiently explicit current owner or implementable requirement.

Do not use `CURRENT_CANONICAL` merely because a file says “active.” Validate its scope, revision, predecessor/supersession chain, and owner boundary. Do not promote unowned value or resolve a conflict through classification wording.

## 7. Mandatory audit coverage

The audit must include an explicit coverage row for every topic below, even when the result is a gap or “no material requirement found”:

1. HA prerequisites (Home Assistant prerequisites), versions/platform assumptions, add-ons, HACS, and custom frontend dependencies.
2. Installation, golden-build, bootstrap, update, network, and post-install readiness requirements.
3. Device/capability/entity/area/state models, evidence classes, naming, visibility, and semantic binding.
4. Building/security states, modes, priorities, routines, and customer-safe meanings.
5. Customer, installer, and WNYHS support notification generation, presentation, routing, acknowledgement, recovery, and ownership boundaries.
6. Customer Dashboard, Installer / Commissioning Dashboard, and Service / Operator Dashboard roles, permissions, audiences, and separation.
7. Themes, semantic tokens, components, cards, buttons, fonts, geometry, accessibility, focus, motion, and responsive behavior.
8. Privacy, authentication/authorization presentation, permissions, remote access/support, customer-data boundaries, activity, history, retention, and audit-log boundaries.
9. Offline, unavailable, unknown, stale, degraded, recovery, restoration, and unresolved-state behavior.
10. Automation/control interlocks, high-impact command lifecycle, confirmation, timeout, failure observability, overrides, and safe fallback.
11. Backup, restore, lifecycle change, upgrades, dependency drift, performance, commissioning, acceptance, handoff, rollout, rollback, soak, support transition, legacy retirement, and end-of-life posture.
12. Bailey/BKLF, Peckham, dashboard campaign, prior dashboard governance, prototypes, implementation work orders, and materially relevant superseded/withdrawn lineage.

For item 1, explicitly research `HACS`, `Mushroom`, `Bubble Card`, `button-card`, `Card Mod`, `Layout Card`, `Swipe Card`, `Browser Mod`, and `Auto-Entities`. For each, determine the authoritative prerequisite status, version/compatibility expectations, and customer/installer usage boundary, then classify it as required baseline, optional/supporting, installer/service only, site-specific, historical, conflicting, or unowned. Presence in a site inventory or theme-readiness document does not by itself make an item universally required.

Coverage is about requirements and governance. It does not authorize runtime testing, UI inspection, dashboard implementation, or customer-system access.

## 8. Bounded source universe and discovery rules

### 8.1 Current canonical dashboard owners

- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
- `docs/design-system/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
- `docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md`
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md`

### 8.2 Current supporting owners and requirement candidates

At minimum inspect the applicable sections of:

- `docs/installer/INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md`
- `docs/installer/INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md`
- `docs/installer/INSTALL003_GOLDEN_HOME_ASSISTANT_BUILD_STANDARD_REV01.md`
- `docs/installer/INSTALL004_DEVICE_NAMING_STANDARD_REV01.md`
- `docs/installer/INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md`
- `docs/installer/INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md`
- `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md`
- both current `INSTALL008` documents: HA Green bootstrap and bench testing/commissioning
- `docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md`
- `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md`
- `docs/automation-system/AUTOMATION001_WNYHS_HOME_ASSISTANT_AUTOMATION_STANDARD_REV01.md`
- `docs/home-assistant/notification-system/WNYHS_NOTIFICATION_ENGINE_STANDARD_REV01.md`
- `docs/home-assistant/notification-system/WNYHS_ADAPTIVE_NOTIFICATION_CONFIGURATION_QUESTIONNAIRE_REV01.md`
- `docs/home-assistant/HA-BACKUP001_CUSTOMER_BACKUP_EXTRACTION_STANDARD_REV02.md`
- current Home Assistant remote-access/support standards and runbooks under `docs/home-assistant/`
- `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md`
- `docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md` — cross-domain ownership and gap-discovery evidence only; it is non-authoritative and does not supersede current dashboard owners
- `home-assistant/wnyhs/themes/README.md` and `home-assistant/wnyhs/components/README.md` for declared dependency/usage contracts only

The duplicate `INSTALL008` identifier is audit evidence to classify, not authority to rename or reconcile it.

### 8.3 Historical and superseded lineage

Use exact predecessor/supersedes pointers and targeted path searches to identify materially relevant:

- REV01 predecessors of the current dashboard, design, delivery, governance-map, and backup standards;
- `docs/design-system/customer-dashboard-design-standard-rev01.md`;
- `docs/design-system/customer-dashboard-philosophy.md`;
- `docs/design-system/customer-dashboard-mobile-wireframes-001.md`;
- dashboard-governance work orders, exact MTR records, and campaign lineage;
- withdrawn or branch-only work described by current repository lineage; and
- prior dashboard theme/readiness material absorbed, superseded, or left reference-only.

Do not treat an unmerged branch or PR as current repository authority. If referenced historical evidence is absent, record that fact and use Section 8.4 only when the evidence is materially necessary.

### 8.4 Targeted secondary lineage

Secondary lineage sources permitted by Section 4.1 may be inspected only when a current-repository reference, known lineage pointer, or unresolved coverage gap identifies a concrete target. For every expansion, record the source, access basis, reason, scope, and whether it changed a classification. Do not conduct open-ended repository, Project, chat, or account history searches.

Secondary evidence remains read-only and non-authoritative. If it cannot be accessed safely or precisely, record it as unavailable; do not reconstruct or infer its contents.

### 8.5 Site-specific reference set

Inspect only repository-owned, text-based requirement/governance evidence needed to characterize Bailey/BKLF and Peckham:

- Bailey/BKLF dashboard, capability-reconciliation, notification, retirement, and prototype work orders;
- Bailey/BKLF dashboard follow-up, installation/specification, validation, and sanitized inventory summaries when they contain material requirements;
- Peckham dashboard work orders, pre-onsite binding register, and related requirement/specification documents;
- deterministic prototype documentation and validation evidence where it records requirements not already captured by canonical owners.

Do not default to raw YAML, CSV inventories, backup extracts, live-state records, screenshots, binaries, or customer data. Open an implementation artifact only when an exact requirement cannot otherwise be classified, document why it was necessary, and quote no secret, raw identifier, private URL, credential, or sensitive customer detail.

### 8.6 Discovery limits

- Follow the read sequence declared at the top of this work order and record why each full-document read was needed.
- Do not read the full MTR, document catalog, Markdown manifest, broad status board, or unrelated audit.
- GitHub or authorized connected tooling may be used only for bounded duplicate checks, delivery, or the targeted secondary-lineage cases in Section 8.4; live HA, Cloudflare, customer systems, and runtime evidence remain prohibited.
- Record excluded candidates and the reason for exclusion so “all” means all materially relevant sources within the declared boundary, not indiscriminate repository hydration.

## 9. Required audit deliverable

Create exactly:

`docs/audits/DASH-GOV-POSTINSTALL-AUDIT-001_AUDIT_REV01.md`

Required sections: executive summary/boundary; authority and revision map; source register; Section 7 coverage matrix; normalized requirement register; conflict register; gap register; superseded-but-unpromoted register; Bailey/BKLF and Peckham site-reference register; excluded/unavailable evidence; risks/dependencies; and non-resolving follow-up candidates.

The source register must record path or durable identifier, authority tier, status, owner, revision/lineage, inclusion decision, access/evidence date, and whether the source is current-repository or secondary evidence.

Each requirement row must record: stable finding ID; topic; concise requirement; source and exact heading; source status/owner; one Section 6 classification; applicability; relationship to current canonical ownership; conflict/gap linkage; confidence/evidence note; and proposed review owner only when later reconciliation is required.

Consolidate duplicates with multiple citations. Cite stable doctrine instead of reproducing it, and keep observations, requirements, gaps, and recommendations distinct.

## 10. Conflict and gap handling

For each conflict, record the competing sources/requirements, material applicability, consequence, any precedence evidence, later reconciliation owners, and missing evidence/decision.

For each gap, record the uncovered topic/lifecycle stage, evidence of insufficient ownership, likely impact, plausible owner candidates without selecting one, and whether it blocks implementation, acceptance, support, or retirement.

Do not edit a standard, choose a winning rule, invent a requirement, assign permanent ownership, activate a follow-up, or characterize a gap as resolved.

## 11. Allowed scope and exact target files

Future audit execution may create or modify only:

1. `docs/audits/DASH-GOV-POSTINSTALL-AUDIT-001_AUDIT_REV01.md`
2. `docs/system/master-task-register.md` — only the exact `DASH-GOV-POSTINSTALL-AUDIT-001` record for lifecycle and evidence

All other files are read-only inputs. The work order itself is read-only during execution unless the operator authorizes a revision in a separate bounded change.

## 12. Forbidden scope and protected systems

Inherit the scope and protected-system rules in `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` Sections 10–12. Task-specific prohibitions:

- do not execute the audit or create its deliverable while this work order remains prepared/undispatched;
- do not edit any canonical/supporting owner, governance map, historical source, business-process document, Home Assistant/dashboard/theme/component/package/automation/notification/runtime artifact, application/API, dependency, lockfile, or protected-system file;
- do not access or mutate live Home Assistant, customer systems/data/accounts, authentication/permissions, remote access, Cloudflare/network/environment/deployment, CRM/HubSpot, Lead Signal/requestId, payment, scheduling, email, secrets, or other protected runtime;
- do not resolve conflicts, promote history, create/supersede an owner, rename identifiers, implement missing requirements, create `PROCESS-DASHBOARD002`, implement Bailey, or create/activate follow-up implementation authority; and
- do not merge, mark ready, or deploy.

If protected or unavailable evidence appears necessary, record the limitation and stop that line of inquiry. Capability access is not authorization.

## 13. Change posture and version rule

The future execution is additive and docs-only. It creates one REV01 audit and updates one existing task record. No site/application version bump applies. No destructive change, source deletion, owner modification, or supersession is authorized.

## 14. Validation

**Tier:** Governance / docs-only audit

Required checks:

1. exact Section 11 two-file allowlist, zero deletions, one exact MTR heading/Task ID field, no prohibited boundary change, no conflict markers/binaries, and `git diff --check`;
2. current WNYHS repository remains primary authority; every secondary expansion is justified/documented and every secondary finding remains evidence-only under one Section 6 classification;
3. `docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md` appears only as current supporting cross-domain ownership/gap evidence;
4. every Section 7 topic has a result, including individual authority/prerequisite/compatibility/usage classification for all nine named HACS/frontend items;
5. source register distinguishes authority tier, current/supporting/site-specific/superseded/historical/secondary/unavailable/excluded evidence, and every `CURRENT_CANONICAL` row cites a current-repository owner section;
6. every conflict cites competing sources and remains unresolved; every gap cites insufficient ownership and remains unresolved;
7. Bailey/BKLF and Peckham remain site-specific unless current canonical authority independently supports universality;
8. predecessor/supersession and ownership claims match current repository metadata;
9. no secret, credential, private URL, customer-identifying/raw registry content, or unsupported live-state claim; and
10. record the governed docs-only build skip under the Codex Execution Standard Section 16.

Do not run `npm run build`, browser tests, Home Assistant validation, or runtime checks. They are outside the audit and cannot validate a documentation-only classification artifact.

## 15. Git and delivery

Follow the Codex Execution Standard Section 17. After merge and explicit dispatch, use fresh branch `task/dash-gov-postinstall-audit-001-execution`, commit `docs: audit post-install dashboard governance`, and one draft PR to `main` containing only the Section 11 files. The PR must summarize the source hierarchy, classifications, unresolved conflicts/gaps, validation, build skip, boundaries, and risks.

## 16. Required closeout

Close out under the Codex Execution Standard Sections 18–19. In addition, report current-repository versus secondary-source counts, classification counts, excluded/unavailable sources, conflict/gap counts, each secondary expansion and justification, evidence limits, build skip, and operator decisions required.

## 17. Stop conditions

Stop and request revision if:

- current context, campaign authority, exact task record, primary workstream, source boundary, or target files conflict;
- another task/PR already owns the same audit;
- a necessary secondary source lacks a precise Section 8.4 justification or safe authorized access, or any source requires protected/customer/live access;
- material classification cannot be supported without secrets or sensitive data;
- the audit would need to modify, supersede, promote, or resolve an owner standard;
- a third changed file is required;
- raw/unavailable evidence is being mistaken for current or live proof; or
- required validation cannot be completed.

## 18. Exit criteria

The future task is complete only when the single audit covers every required topic; all findings are traceable and singly classified; conflicts, gaps, historical value, and site-specific references remain explicit/unresolved; stable doctrine is cited rather than duplicated; Section 14 passes; the exact MTR record is truthfully closed; one draft PR exists; and no owner, runtime, protected-system, merge, or deployment change occurred.
