# DASH-GOV-POSTINSTALL-AUDIT-001 — Post-Install Dashboard Requirements and Governance Audit

**Revision:** REV01
**Status:** PREPARED — NOT DISPATCHED OR EXECUTED
**Category:** GOV / AUDIT
**Primary Workstream:** Dashboard / Interactive Experience System
**Related Workstreams:** Home Assistant Platform; Automation System; Visual System; Installer Platform; Project Governance
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
**Standing Campaign:** DASHBOARD-CAMPAIGN-001

READ MODE: FULL

Justification: the future task is a bounded, comprehensive requirements and governance reconciliation. It must compare current canonical, supporting, site-specific, superseded, historical, conflicting, and missing requirements across the post-install dashboard source universe. Begin with exact-ID and exact-heading searches, then fully read only the bounded candidate documents established by Section 8. Do not hydrate unrelated repository areas, the full Master Task Register, catalogs, manifests, raw customer evidence, or implementation assets by default.

REASONING POSTURE: ADAPTIVE

- STANDARD: authority, routing, bounded-source inventory, extraction, classification, and evidence-table construction.
- ELEVATED only when source precedence, ownership, or materially conflicting requirements cannot be classified deterministically.
- Return to STANDARD for validation and closeout. Do not resolve conflicts or invent missing doctrine.

EXECUTION POSTURE: DIRECT

Use repository-local, read-only discovery and inspection plus normal Git/GitHub delivery commands. No browser, live Home Assistant, connected service, MCP, application-control, customer-system, or deployment access is required or authorized.

## 1. Objective

Create one repository-owned audit that identifies, traces, and classifies every materially relevant requirement affecting post-install WNYHS Home Assistant dashboard creation.

The audit must distinguish current authority from supporting, site-specific, superseded, historical, conflicting, and missing requirements. It must expose gaps and conflicts without resolving them, changing ownership, promoting historical material, or authorizing implementation.

## 2. Authorization and execution gate

This REV01 is prepared only. Do not execute it until all of the following are true:

1. the work-order creation PR containing this file and the matching MTR record is merged to `main`;
2. local `main` is clean and synchronized with `origin/main`;
3. `DASHBOARD-CAMPAIGN-001` remains ACTIVE and non-implementing;
4. the exact MTR record `DASH-GOV-POSTINSTALL-AUDIT-001` is present once and is explicitly dispatched for execution;
5. current context remains `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01` or a higher-authority revision explicitly reauthorizes the task;
6. the dashboard owner map still routes architecture/behavior to INSTALL006, visuals/components to DESIGN001, delivery/binding/validation to DASHBOARD001, and cross-site orchestration to INSTALL011; and
7. no other open task or PR owns this exact audit deliverable.

If any gate fails, stop and request a work-order/context revision. Do not infer authorization from this prepared document alone.

## 3. Required precheck

Before audit reads:

1. verify repository convergence under the Codex Execution Standard;
2. verify the exact OPS004 primary-workstream label `Dashboard / Interactive Experience System`;
3. read only the exact current-context, standing-campaign, and task-record sections needed for the gate;
4. repeat the exact-task and audit-deliverable duplicate-owner search locally and in open PRs;
5. inventory candidate files by path and exact headings before opening them;
6. confirm that no secret, raw backup, raw registry export, private URL, credential, token, or non-repository customer evidence is required; and
7. create a fresh execution branch from `origin/main` only after the work-order creation PR is merged.

The immediately preceding deployment gate is not applicable unless a later source/runtime task becomes the direct predecessor and materially changes the audit evidence. This audit is docs-only and must not reconstruct unrelated deployment history.

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

Repository authority and current owner documents outrank chat context and historical materials. The audit may report an apparent conflict with higher authority but may not override it.

## 5. Owner Routing Matrix

| Approved concept | Current canonical owner | Exact target | Section / behavior | Action | Reason | Why not elsewhere | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cross-owner post-install dashboard requirement audit | Dashboard / Interactive Experience System under the standing campaign | `docs/audits/DASH-GOV-POSTINSTALL-AUDIT-001_AUDIT_REV01.md` | Evidence inventory, classification, conflict/gap register, coverage matrix | CREATE | No current artifact owns this bounded cross-source audit; it is an evidence report, not a new standard | Domain standards retain their doctrine; INSTALL011 retains orchestration; the Governance Map remains routing-only | NO, subject to execution precheck | HIGH |
| Task lifecycle and evidence | Project Governance | `docs/system/master-task-register.md` | Exact `DASH-GOV-POSTINSTALL-AUDIT-001` record only | MODIFY | MTR owns operational task status and closeout evidence | The audit deliverable must not become task-state authority | NO | HIGH |
| Current functional, visual, delivery, and orchestration doctrine | INSTALL006 REV02; DESIGN001 REV02; DASHBOARD001 REV02; INSTALL011 REV01 | Current owner documents named in Section 8 | Requirement evidence only | REFERENCE ONLY | These owners already hold stable doctrine | Duplicating or rewriting doctrine in the audit would create owner drift | NO | HIGH |
| Supporting, site-specific, superseded, and historical material | Its existing source owner or historical lineage | Bounded candidate set in Section 8 | Requirement evidence and classification only | REFERENCE ONLY | The task must surface material value, conflicts, and gaps without promotion | Promotion or correction requires a separate owner-routed task | Potential findings only | HIGH |
| Conflicts and missing ownership | Unresolved until a later reconciliation task | Audit conflict/gap registers only | Record source evidence, impact, and candidate owners without choosing a resolution | CREATE | The requested output is diagnostic | Resolving ownership would exceed audit authority | YES by finding, not by task authority | HIGH |

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

Do not treat an unmerged branch or PR as current repository authority. If a historical artifact is referenced but absent from the synchronized repository, record the absence and available lineage; do not fetch or reconstruct it unless a revised work order explicitly authorizes that external evidence.

### 8.4 Site-specific reference set

Inspect only repository-owned, text-based requirement/governance evidence needed to characterize Bailey/BKLF and Peckham:

- Bailey/BKLF dashboard, capability-reconciliation, notification, retirement, and prototype work orders;
- Bailey/BKLF dashboard follow-up, installation/specification, validation, and sanitized inventory summaries when they contain material requirements;
- Peckham dashboard work orders, pre-onsite binding register, and related requirement/specification documents;
- deterministic prototype documentation and validation evidence where it records requirements not already captured by canonical owners.

Do not default to raw YAML, CSV inventories, backup extracts, live-state records, screenshots, binaries, or customer data. Open an implementation artifact only when an exact requirement cannot otherwise be classified, document why it was necessary, and quote no secret, raw identifier, private URL, credential, or sensitive customer detail.

### 8.5 Discovery limits

- Search exact task IDs, titles, predecessor/supersession fields, headings, and coverage terms first.
- Use file/path inventories to locate candidates; do not fully load the repository.
- Do not read the full MTR, document catalog, Markdown manifest, broad status board, or unrelated audit.
- Do not use GitHub, browser, live HA, Cloudflare, customer systems, or other external sources for requirement evidence. The only permitted GitHub use is bounded duplicate-PR precheck and final PR delivery.
- Record excluded candidates and the reason for exclusion so “all” means all materially relevant sources within the declared boundary, not indiscriminate repository hydration.

## 9. Required audit deliverable

Create exactly:

`docs/audits/DASH-GOV-POSTINSTALL-AUDIT-001_AUDIT_REV01.md`

The deliverable must contain:

1. executive summary and audit boundary;
2. authority and revision map;
3. source register with path, document status, owner, revision/lineage, inclusion decision, and evidence date;
4. coverage matrix for all Section 7 topics;
5. normalized requirement register;
6. conflict register;
7. gap register;
8. superseded-but-unpromoted value register;
9. site-specific reference register separating Bailey/BKLF and Peckham facts from universal doctrine;
10. excluded/unavailable evidence register;
11. risk and dependency summary; and
12. non-resolving follow-up candidates for operator review.

Each normalized requirement row must include at least:

- stable finding ID;
- topic/domain;
- concise requirement statement;
- source path and exact section/heading (line numbers when stable and useful);
- source status/revision and owner;
- primary classification from Section 6;
- applicability: universal, role-specific, lifecycle-stage-specific, or site-specific;
- relationship to current canonical owner;
- conflict/gap linkage when applicable;
- confidence and evidence note; and
- proposed review owner only when classification requires later reconciliation.

Consolidate duplicate statements into one normalized requirement with multiple source citations. Summarize stable doctrine and cite its owner rather than reproducing large passages. Keep observations, requirements, gaps, and recommendations visibly distinct.

## 10. Conflict and gap handling

For each conflict, record:

- the exact competing sources and requirements;
- why both appear materially applicable;
- operational/dashboard consequence;
- current precedence evidence, if any;
- the owner(s) required for later reconciliation; and
- what evidence or decision is missing.

For each gap, record:

- uncovered topic or lifecycle stage;
- evidence that current owners do not sufficiently own it;
- likely impact;
- plausible owner candidates without selecting one; and
- whether the gap blocks future implementation, acceptance, support, or retirement.

Do not edit a standard, choose a winning rule, invent a requirement, assign permanent ownership, activate a follow-up, or characterize a gap as resolved.

## 11. Allowed scope and exact target files

Future audit execution may create or modify only:

1. `docs/audits/DASH-GOV-POSTINSTALL-AUDIT-001_AUDIT_REV01.md`
2. `docs/system/master-task-register.md` — only the exact `DASH-GOV-POSTINSTALL-AUDIT-001` record for lifecycle and evidence

All other files are read-only inputs. The work order itself is read-only during execution unless the operator authorizes a revision in a separate bounded change.

## 12. Forbidden scope and protected systems

Do not:

- execute the audit during work-order creation;
- modify dashboard standards, governance maps, installer standards, HA documentation owners, business-process documents, or historical sources;
- modify Home Assistant YAML, dashboards, themes, components, cards, buttons, fonts, packages, scripts, helpers, automations, notifications, integrations, registry-export tooling, backups, or runtime configuration;
- access or mutate live Home Assistant, customer devices, customer accounts, remote access, permissions, authentication, users, Cloudflare, networks, DNS, environments, or deployment systems;
- modify website/application source, routes, APIs, dependencies, lockfiles, build configuration, CRM/HubSpot, Lead Signal/requestId, Stripe/payment, scheduling, Resend/email, quote/agreement/payment/schedule flows, Precision Planner, secrets, or customer data;
- create a new canonical standard, resolve conflicts, promote historical content, rename duplicate identifiers, implement missing requirements, or create/activate follow-up tasks;
- merge, enable auto-merge, mark ready for review, or deploy.

If protected or unavailable evidence appears necessary, record the limitation and stop that line of inquiry. Capability access is not authorization.

## 13. Change posture and version rule

The future execution is additive and docs-only. It creates one REV01 audit and updates one existing task record. No site/application version bump applies. No destructive change, source deletion, owner modification, or supersession is authorized.

## 14. Validation

**Tier:** Governance / docs-only audit

Required checks:

1. changed-file set equals the exact two-file execution allowlist in Section 11;
2. zero deleted files;
3. exact MTR heading `### DASH-GOV-POSTINSTALL-AUDIT-001` appears once and its exact `Task ID` field appears once;
4. audit includes all seven classification labels exactly as defined and every finding uses one primary classification;
5. every Section 7 coverage topic has an explicit coverage result;
6. source register distinguishes current, supporting, site-specific, superseded, historical, unavailable, and excluded evidence;
7. every `CURRENT_CANONICAL` row cites a current owner and exact section;
8. every conflict cites at least two materially competing sources and remains unresolved;
9. every gap includes evidence of missing/insufficient ownership and remains unresolved;
10. Bailey/BKLF and Peckham material is explicitly site-specific unless a current canonical owner independently supports the universal requirement;
11. predecessor/supersession and current-owner claims agree with current repository metadata;
12. no raw secrets, credentials, private URLs, customer-identifying data, raw registry content, or live-state claims appear;
13. no conflict markers or unexpected binary files;
14. `git diff --check` passes;
15. protected-system changed-boundary scan confirms no prohibited file changed; and
16. governed docs-only build skip is recorded under `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` Section 16 because no source or build configuration changes.

Do not run `npm run build`, browser tests, Home Assistant validation, or runtime checks. They are outside the audit and cannot validate a documentation-only classification artifact.

## 15. Git and delivery

- After this prepared work order is merged and execution is explicitly dispatched, create fresh branch `task/dash-gov-postinstall-audit-001-execution` from synchronized `origin/main`.
- Use commit message: `docs: audit post-install dashboard governance`.
- Push only the task branch.
- Open one draft PR to `main` containing the audit deliverable and exact MTR record update.
- PR body must state scope, read boundary, classification method, validation, governed build skip, protected-system posture, unresolved conflicts/gaps, and risks.
- Do not merge, enable auto-merge, mark ready, or deploy.

## 16. Required closeout

Report:

- repository, base, branch, commit SHA, draft PR URL/state;
- controlling context, category/workstreams, read mode, reasoning posture, execution posture;
- exact files created/changed and intentionally untouched owners/protected systems;
- source count by classification and excluded/unavailable count;
- conflict and gap counts without resolving them;
- validation commands/results and governed build skip;
- assumptions, unresolved evidence limits, and operator decisions required;
- no-merge/no-deploy confirmation; and
- the canonical Token Utilization / RSI Report, including essential reads, unnecessary reads, full-read justification, retries/failures, context pressure, prompt compression, and all ten required RSI headings.

## 17. Stop conditions

Stop and request revision if:

- current context, campaign authority, exact task record, primary workstream, source boundary, or target files conflict;
- another task/PR already owns the same audit;
- a required source is outside the repository or requires protected/customer/live access;
- material classification cannot be supported without secrets or sensitive data;
- the audit would need to modify, supersede, promote, or resolve an owner standard;
- a third changed file is required;
- raw/unavailable evidence is being mistaken for current or live proof; or
- required validation cannot be completed.

## 18. Exit criteria

The future task is complete only when:

- the single audit deliverable exists and covers every required topic;
- every material finding is traceable and uses exactly one approved classification;
- conflicts, gaps, historical value, and site-specific references remain explicit and unresolved;
- stable doctrine is cited rather than duplicated;
- exact two-file scope, no-deletion, protected-boundary, task-count, content, and `git diff --check` validation pass;
- the exact MTR record truthfully records completion evidence;
- one draft PR to `main` exists for audit execution; and
- no standard, runtime, protected system, merge, or deployment change occurred.
