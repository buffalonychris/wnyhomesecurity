# KAOSWEB001 — Establish Canonical Online KAOS Command Center — Work Order REV01

Status: PROMPT-CREATED / OPERATOR AUTHORIZED
Task ID: `KAOSWEB001`
Category: `GOV`
Primary workstream: KAOS Application
Related workstreams: KAOS Governance; Operator UI; Approved Offerings; Procurement; HubSpot Readiness; Governance Viewer
Controlling context: `/docs/system/step-current.md`
Customer-facing: No
Runtime impact: Yes — additive internal KAOS application routes only
Implementation authority: Yes, only for the exact bounded scope below

---

## 1. Repository and execution context

- Repository: `buffalonychris/wnyhomesecurity`
- Local repository: `C:\dev\wnyhomesecurity`
- Base branch: `main`
- Current synchronized baseline at work-order creation: `2a4d0051ba9dc9a92be7f6b75d4a9da32fd1ba6e`
- Existing Governance Viewer implementation: merged GOVUI001 / PR #563
- Existing Governance Viewer route: `/operator/governance`
- Current visible site version at work-order creation: `v1.0.196`
- Operator requirement: move quickly; WNYHS must begin landing leads/customers within less than 24 hours. Do not expand this task into a full KAOS rebuild.

This task establishes one durable online KAOS application surface inside the existing deployable repository while preserving all protected business-process capabilities and avoiding new backend/integration architecture.

Authentication, Cloudflare Access policy, custom KAOS hostname configuration, HubSpot schema implementation, CRM migrations, and backend integration work are explicitly deferred.

---

## 2. Product / application / surface / deployment identity — mandatory

Before file routing or implementation, treat these identities as fixed for this task:

| Field | Controlling value |
|---|---|
| Product/System | KAOS — Kick Ass Operating System |
| Application | KAOS Command Center |
| Application purpose | Private operator-facing business operating system for WNYHS and future governed business capabilities |
| Target surface | Online internal KAOS command center |
| Canonical namespace for this task | `/kaos` |
| Deployment boundary | Existing WNYHS deployable web application, but logically separated as the KAOS application surface |
| Public customer website relationship | KAOS is NOT the WNYHS customer website; public routes/navigation must remain untouched |
| Current visual reference | Existing ChatGPT Sites KAOS prototype supplied by the operator; use its information architecture, density, dark command-center aesthetic, navigation model, and interaction patterns as the design baseline |
| Governance relationship | KAOS consumes governed sources; KAOS UI never becomes governance authority merely because it displays information |

**Mandatory routing rule:** no implementation target may be selected until Product -> Application -> Surface -> Deployment Boundary is confirmed. A correct file in the wrong application is a failed routing decision.

---

## 3. Objective

Establish the current KAOS Command Center as the canonical online KAOS application by combining:

1. the existing Sites prototype information architecture and UI/UX direction;
2. the existing functional/governed KAOS capabilities already present in the repository and operational systems;
3. the existing read-only Governance Viewer functionality from GOVUI001;
4. one canonical `/kaos` route namespace for future KAOS modules; and
5. a durable module-governance registry requirement so every KAOS menu module has a defined governance component before it can be considered locked or authoritative.

The first release must be usable quickly. It is not required to make every prototype screen fully backed by production data during this task.

---

## 4. Desired outcome

After merge/deployment, an operator can navigate to:

`/kaos`

and enter a KAOS-branded command-center experience that visually and structurally resembles the existing Sites prototype rather than the WNYHS Operator UI.

The KAOS shell must expose the current module set as appropriate for this bounded release:

- Today
- Leads
- Customers
- Approved Offerings
- Procurement
- Installations
- Money
- Automations
- Business Overview
- Governance

Governance must be available inside the KAOS shell at:

`/kaos/governance`

and must retain the read-only behavior, search, filters, relationships, provenance, health, authority, and "Why does this exist?" functionality established by GOVUI001.

---

## 5. Critical architecture rule — data model outranks prototype UI

The Sites prototype is not canonical data authority.

Use this precedence when implementation choices conflict:

1. governing repository authority and business rules;
2. approved master data model / canonical system-of-record ownership;
3. established business process and operational capability behavior;
4. existing functional implementation;
5. Sites prototype UI/UX and field layout;
6. filler/demo data.

Do **not** force canonical data structures to match prototype screen fields.

If the repository or an existing governed system defines a better data dictionary or data relationship than the prototype, preserve the canonical data model and adapt the interface.

---

## 6. System-of-record posture for this task

Do not implement new integrations, but preserve this architectural intent:

| Information class | Intended/canonical ownership posture |
|---|---|
| Governance, standards, tasks, work orders, architecture | Repository |
| Approved hardware / solution ingredient intelligence | Existing governed approved-offerings sources, including current Sheets/repository contracts |
| Procurement operational process/data | Existing governed procurement sources/processes |
| Leads, contacts, customers, deals, customer journey/pipeline state | HubSpot is the intended CRM/system-of-record direction; implementation deferred |
| Working business documents, research, controlled sheets | Google Workspace where already established |
| Payments | Stripe / existing payment authority |
| Scheduling | Existing Google Calendar/scheduling architecture |
| Runtime/website events | Existing WNYHS runtime contracts |
| KAOS | Presentation, orchestration, relationships, business-process visibility; not universal data ownership |

Prototype/filler data may remain where needed to preserve UI demonstration, but must not be mislabeled as live production truth.

---

## 7. Approved Offerings — PROTECTED OPERATIONAL CAPABILITY

Approved Offerings is not a simple parts list and must not be rebuilt as one.

It represents the governed ingredient/capability layer used to create homeowner and commercial solutions across the WNYHS pillars.

Conceptual relationship:

`Approved Hardware -> Capabilities / Constraints / Compatibility -> Solution Building Blocks -> Homeowner + Commercial Solutions -> Configured Customer Solution -> SOW / Quote / Install / Support / Expansion`

Current underlying governed sources include, at minimum, operator-established structured data such as:

- Approved Parts
- Approved Pending Promotion
- Category Matrix
- Inventory Intake Template
- Control Coverage
- Controlled Lists
- Source Notes
- Camera Specifications
- other related controlled source tabs/contracts discovered during targeted review

### Approved Offerings protection rule

Codex may inspect Approved Offerings only to:

- identify current route/component ownership;
- preserve existing functionality;
- preserve navigation placement;
- integrate it into the KAOS shell without changing its business behavior;
- verify it still works after shell migration;
- understand shared shell/layout dependencies when strictly necessary.

Codex must NOT:

- rewrite Approved Offerings business logic;
- flatten it into a product/parts list;
- replace approved hardware sources;
- change approval/promotion status rules;
- change solution composition logic;
- change category/pillar relationships;
- change quote/SOW/install/support relationships;
- change controlled lists or capability intelligence;
- alter current Sheets/data contracts;
- invent substitute data;
- rebuild or normalize its governance;
- change it merely to match Sites filler fields;
- refactor it for aesthetic consistency beyond unavoidable shell integration.

**Owner-routing action for Approved Offerings: `REFERENCE / PRESERVE ONLY` unless a verified shell dependency requires a minimal additive wrapper.**

Any business-logic change is a STOP condition and requires a separate bounded task.

---

## 8. Procurement — PROTECTED OPERATIONAL CAPABILITY

Procurement already has established business-process and governance work.

Codex may inspect Procurement only to:

- identify current route/component ownership;
- preserve its current behavior/data relationships;
- preserve navigation placement;
- integrate its existing surface into the KAOS shell;
- verify it still functions after shell migration.

Codex must NOT:

- alter procurement workflow stages;
- change job readiness rules;
- change inventory/procurement calculations;
- change supplier/vendor logic;
- change source-of-truth ownership;
- replace existing operational data with filler data;
- redesign the underlying process;
- rewrite established procurement governance.

**Owner-routing action for Procurement: `REFERENCE / PRESERVE ONLY` unless a verified shell dependency requires a minimal additive wrapper.**

Any business-process change is a STOP condition and requires a separate bounded task.

---

## 9. Prototype-module classification

Before implementation, classify every KAOS menu module into exactly one posture:

### A. OPERATIONAL / GOVERNED
Existing real capability, real governed data/process, or both.

Treatment: preserve behavior and source ownership; migrate only presentation/shell placement.

Known examples at task creation:

- Approved Offerings
- Procurement
- Governance Viewer

### B. PROTOTYPE WITH USEFUL UX / DATA REQUIREMENTS
UI demonstrates useful fields, workflow, relationships, or desired operator behavior, but underlying source-of-truth/data process is not fully productionized.

Treatment: reproduce useful UI/UX and explicitly label/demo data appropriately. Do not invent permanent data authority.

Expected examples may include:

- Today
- Leads
- Customers
- Installations
- Money
- Automations
- Business Overview

Codex must verify actual repository state before assigning posture.

### C. FILLER / DEMO
No governed operational meaning yet.

Treatment: visual shell only; retain only where needed to preserve the approved prototype experience. Never promote filler values into canonical data or HubSpot properties during this task.

---

## 10. Mandatory KAOS Module Governance rule

From this task forward, every production KAOS menu option/module must have a canonical governance component before it may be considered `LOCKED`, `AUTHORITATIVE`, or eligible to drive downstream/public-facing behavior.

For speed, KAOSWEB001 must establish one consolidated **KAOS Module Governance Registry** rather than creating one document per module.

Create, only if no canonical equivalent exists after duplicate-owner check:

`docs/kaos/KAOS_MODULE_GOVERNANCE_REGISTRY_REV01.md`

Each module section/record must contain, at minimum:

- Module ID
- Module name
- Status / maturity posture
- Purpose
- Business/operator outcome
- Canonical owner
- Product/application/surface identity
- Canonical data source(s)
- System-of-record owner(s)
- Inputs
- Outputs
- Upstream dependencies
- Downstream dependencies
- Affected systems
- Allowed actions
- Forbidden actions
- Mutation rights
- Protected-system boundaries
- Data ownership
- HubSpot impact/posture
- Google Workspace impact/posture
- Repository impact/posture
- Website/runtime impact/posture
- Public-facing content impact
- Claims/copy implications
- Automation/integration boundaries
- Validation requirements
- Audit/evidence requirements
- Lifecycle/status model
- UI responsibilities
- Current prototype/production posture
- Existing business-process references
- Existing governance references
- Known unresolved decisions
- RSI / improvement candidates

### Module-governance requirement for this task

Create initial records for every menu module exposed by the new `/kaos` shell.

For modules whose governance is not yet defined, records must explicitly say `PROTOTYPE / NOT AUTHORITATIVE` and list missing decisions instead of inventing business rules.

For Approved Offerings and Procurement, reference existing owners/processes rather than duplicating their business governance.

For Governance, reference the existing Governance Viewer read model and governance owners.

---

## 11. Public-content promotion rule

KAOS may eventually drive dynamic public website solution/content data, but this task does not activate automatic public publishing.

Preserve the intended promotion chain:

`Governed Source Data -> Governed Solution Definition -> Commercially Approved Offering -> Customer-Facing Content Model -> Website Publication`

Raw operational data, prototype data, unapproved hardware, or unfinished module state must never publish directly to public-facing website content.

No public website copy/content generation or dynamic publication implementation is authorized in KAOSWEB001.

---

## 12. Customer journey / owner-business journey architecture

The existing prototype plus approved discussion establishes a two-sided conceptual navigation direction for future KAOS maturity:

### Customer journey perspective
The operator should eventually be able to understand a customer from cradle to grave, including relevant states such as lead, customer, solution configuration, quote/close, procurement, installation, service/support, expansion, and lifetime relationship.

### Owner/business journey perspective
The operator should eventually be able to understand what the business must do to support that journey, including governance, priorities, approved offerings, procurement, installation operations, money, automations, business health, and RSI.

KAOS sits between these views as the orchestration/presentation layer.

**KAOSWEB001 must not attempt to fully implement the complete dual-journey architecture.** Preserve space/navigation extensibility for it and avoid choices that block it.

---

## 13. Existing Sites visual/interaction baseline

The operator explicitly prefers the current Sites KAOS UI/UX over the GOVUI001 WNYHS Operator visual treatment.

The KAOS shell should follow the prototype characteristics:

- KAOS identity/branding, not WNY Home Security branding;
- dark, dense command-center aesthetic;
- left-side persistent navigation;
- compact top header/status area;
- high information density without looking like a public marketing page;
- operational cards, data tables, status chips, progress indicators, filters, compact metrics;
- business-console feel similar to an internal command system;
- modules should feel like one coherent operating system;
- responsive behavior must remain usable on standard desktop/laptop screens;
- avoid oversized public-site typography/spacing;
- no WNYHS sales CTAs inside KAOS shell.

Do not attempt pixel-perfect recreation from screenshots if doing so conflicts with semantic tokens, accessibility, current framework conventions, or canonical data structure.

---

## 14. Governance Viewer migration requirements

Reuse the functionality from GOVUI001; do not re-invent its governance data model.

Required outcome:

- `/kaos/governance` exists inside KAOS shell;
- Governance Viewer keeps its existing read-only contract;
- search/filter/sort/group/select behavior remains available;
- authority/owner relationships remain available;
- provenance and last-governance-update data remain visible;
- governance health remains visible;
- "Why does this exist?" remains reachable in one or two clicks;
- no governance mutation controls are introduced;
- no API/write path is introduced;
- canonical governance remains repository-owned.

The existing `/operator/governance` route may remain temporarily during KAOSWEB001 to minimize risk. Do not remove or redirect it unless duplicate route behavior can be changed safely within the exact allowlist and without breaking existing use. Cleanup can be a later bounded task.

---

## 15. Authentication and dedicated hostname — explicitly deferred

Do NOT implement during KAOSWEB001:

- Cloudflare Access
- email allowlist
- trusted-device/location policies
- IP-based authentication
- Zero Trust policies
- custom hostname routing such as `kaos.wnyhomesecurity.com`
- auth middleware
- login UI

This task establishes the canonical **application namespace and implementation location** first.

Security and dedicated hostname will be separate bounded work after the command center is operational.

---

## 16. HubSpot — discovery only, no implementation

The prototype screens provide useful evidence for future HubSpot data dictionary and CRM property design.

Codex may record field/source observations in module governance records when directly evident from existing repository implementation.

Codex must NOT during KAOSWEB001:

- create HubSpot properties;
- modify HubSpot objects;
- create workflows;
- migrate contacts/deals;
- invent CRM fields because a Sites prototype displayed them;
- call HubSpot APIs;
- add HubSpot credentials/configuration.

Any prototype field without a verified canonical source must remain prototype/non-authoritative.

---

## 17. Required targeted reads

Use `READ MODE: TARGETED`.

Load exact sections/owners first. Do not perform another full repository governance audit.

Required governance/system reads:

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`
- `docs/kaos/WNYHS_REPO001_KAOS_OPERATING_SYSTEM_MASTER_CONTROL_REV03.md`
- `docs/kaos/KAOS001_BUSINESS_PROCESS_REGISTRY_REV01.md`
- `docs/kaos/KAOS001_RELATIONSHIP_AND_DEPENDENCY_MODEL_REV01.md`
- `docs/kaos/KAOS001_INTAKE_AND_PROMOTION_WORKFLOW_REV01.md`
- `docs/kaos/KAOS001_DECISION_REGISTER_REV01.md`
- `docs/kaos/KAOS001_RECURSIVE_SELF_IMPROVEMENT_REGISTER_REV01.md`
- `docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md`
- `docs/codex/work-orders/GOVUI001_WORK_ORDER_REV01.md`

Required capability discovery searches:

- exact current Approved Offerings owner(s), routes, components, source adapters, Sheets/data contracts, governance, and business-process refs;
- exact current Procurement owner(s), routes, components, data sources, governance, and business-process refs;
- exact current KAOS-related routes/components/data already present in repo;
- current `OperatorLayout`, `App.tsx`, shared internal UI components, semantic tokens, version owner, package scripts, and tests only where required.

Full-file reads are allowed only when the exact target file is small or when section-level context is insufficient. Record why each full read was necessary.

---

## 18. Mandatory precheck

Before editing:

1. confirm working tree clean;
2. fetch `origin/main`;
3. confirm local `main` equals `origin/main` and contains merged GOVUI001 / PR #563;
4. confirm no open PR/branch already owns `KAOSWEB001`;
5. identify exact current implementation owners for Approved Offerings and Procurement;
6. identify whether a canonical KAOS module-governance registry already exists;
7. identify exact current KAOS/application route ownership;
8. verify Sites prototype concepts do not override repository authority;
9. produce the final Owner Routing Matrix below with any narrowed `REFERENCE ONLY` actions;
10. stop if a same-level owner conflict exists.

---

## 19. Approved Owner Routing Matrix

The following routing intent is operator-approved. Codex must verify exact implementation paths before editing. Codex may narrow actions to `REFERENCE ONLY`; it may not expand into additional business logic or reroute to a parallel owner without stopping.

| Approved concept | Canonical owner / target | Planned action | Why | Why not elsewhere | Conflict posture | Confidence |
|---|---|---|---|---|---|---|
| KAOS application identity | Existing KAOS architecture owner | MODIFY existing KAOS control/registry only if needed to record application identity | KAOS docs own KAOS application meaning | Not `project.md`; not public website architecture | Stop on duplicate active owner | High |
| Canonical online namespace | Existing React router / app shell | ADD `/kaos` namespace only | Current router owns application routes | No parallel router/repo | No | High |
| KAOS shell/layout | New or existing KAOS-specific application layer after duplicate check | CREATE/EXTEND | KAOS requires its own identity and navigation | Do not reuse WNYHS Operator visual identity as canonical KAOS UX | No | High |
| Sites prototype visual direction | KAOS shell/components | IMPLEMENT as visual/interaction reference | Operator explicitly chose Sites UX baseline | Prototype data model is not authority | No | High |
| Today | KAOS module surface | CREATE/PORT shell according to discovered posture | Prototype module | Do not invent live data ownership | No | Medium |
| Leads | KAOS module surface | CREATE/PORT shell according to discovered posture | Prototype reveals CRM/data requirements | HubSpot implementation deferred | No | Medium |
| Customers | KAOS module surface | CREATE/PORT shell according to discovered posture | Prototype reveals customer lifecycle requirements | HubSpot implementation deferred | No | Medium |
| Approved Offerings | EXISTING VERIFIED OWNER | REFERENCE / PRESERVE ONLY | Operational/governed capability already in use | No substitute implementation or normalized mock | Modification prohibited absent shell-only necessity | High |
| Procurement | EXISTING VERIFIED OWNER | REFERENCE / PRESERVE ONLY | Operational/governed capability already in use | No substitute implementation or process redesign | Modification prohibited absent shell-only necessity | High |
| Installations | KAOS module surface | CREATE/PORT shell according to discovered posture | Prototype operational view | Do not invent canonical install data | No | Medium |
| Money | KAOS module surface | CREATE/PORT shell according to discovered posture | Prototype operator view | Do not alter Stripe/accounting authority | No | Medium |
| Automations | KAOS module surface | CREATE/PORT shell according to discovered posture | Prototype operator view | Do not create workflows/integrations | No | Medium |
| Business Overview | KAOS module surface | CREATE/PORT shell according to discovered posture | Prototype aggregate view | Do not fabricate live totals as production truth | No | Medium |
| Governance | Existing GOVUI001 implementation + Governance Viewer contract | PORT/REUSE inside `/kaos/governance` | Existing functional module | Do not create new governance schema | No | High |
| Module governance registry | Existing KAOS governance layer; create only after duplicate check | CREATE if absent | Hard new architecture rule for every menu module | Do not create one doc per module in this fast pass | Stop on duplicate owner | High |
| Future public-content dynamic publishing | Existing website/content governance | REFERENCE ONLY / DEFER | Future downstream use | Not authorized now | No | High |
| HubSpot field/property implementation | HubSpot governance / future CRM task | DEFER | Needs data dictionary first | Prototype fields are not authority | No | High |
| Authentication / dedicated hostname | Cloudflare/security future task | DEFER | Explicit operator instruction | Do not slow KAOSWEB001 | No | High |
| Task evidence | MTR | MODIFY KAOSWEB001 record only | MTR owns execution evidence | No duplicate task doc | No | High |
| Version | Existing site version owner | BUMP once per current standard | User relies on visible version | Do not create alternate version source | No | High |

### Owner Routing Matrix stop rule

If Approved Offerings or Procurement require changes beyond shell/navigation containment, STOP and report the exact dependency. Do not cross the boundary silently.

If a current canonical KAOS application shell already exists under a different target path, STOP rather than create a parallel implementation.

---

## 20. Allowed implementation scope

Subject to verified owner routing, Codex may:

- add `/kaos` and child routes;
- create a KAOS-specific shell/layout/navigation using existing framework and semantic-token system;
- create presentation-only module pages for prototype modules;
- reuse/port the existing Governance Viewer into the KAOS shell;
- create module-local typed demo/prototype data only where no operational source exists, with explicit prototype labeling;
- create initial KAOS Module Governance Registry if duplicate-owner precheck confirms none exists;
- update MTR with one bounded KAOSWEB001 record/evidence;
- bump the existing visible site version once;
- add focused tests for route presence, module navigation, protected capability routing, governance read-only behavior, and no public-nav leakage;
- add minimal KAOS-specific styles using semantic tokens and existing standards.

---

## 21. Forbidden scope

Codex must NOT:

- redesign or rebuild Approved Offerings;
- redesign or rebuild Procurement;
- modify underlying Google Sheets structures or controlled lists;
- create HubSpot objects/properties/workflows;
- modify CRM data;
- alter Stripe/payment code;
- alter scheduling/calendar code;
- alter public website routes/navigation/content except the minimum shared-router import required to register internal `/kaos` routes;
- modify lead-signal/requestId contracts;
- modify QR attribution;
- modify Resend/email behavior;
- modify Cloudflare/DNS/environment/security/auth configuration;
- add secrets;
- add a database;
- add a new API;
- add dependencies unless absolutely required and operator-approved after STOP;
- create automatic public-content publishing;
- mark prototype data as live data;
- create parallel governance owners;
- delete historical KAOS docs;
- remove `/operator/governance` unless separately proven safe and explicitly within final allowlist;
- refactor unrelated application code;
- fix unrelated lint debt.

---

## 22. Implementation design requirements

### KAOS identity

The shell must visibly identify itself as KAOS, not WNY Home Security Operator.

### Navigation

Use one consistent KAOS navigation surface. Preserve extensibility for later customer-journey and owner/business-journey navigation evolution without implementing a complex new navigation architecture now.

### Module posture labeling

Where a module uses demo/prototype data, it must be visibly distinguishable from verified operational data. Avoid intrusive banners; use concise status labels or metadata.

### Data transparency

Do not display invented live CRM/customer/financial values as production truth.

### Governance visibility

Each module should provide a lightweight way to surface its governance posture (for example status/owner/source metadata or a governance link), but do not build a complex governance editor.

### Shared visual system

Use existing semantic tokens. No hardcoded color system outside approved token governance.

### Accessibility

Keyboard navigation, visible focus states, semantic landmarks, usable tables, no inaccessible graph-only representation.

---

## 23. Validation requirements

At minimum run and report:

1. `git diff --check`
2. exact changed-file allowlist audit
3. no-deletion audit
4. `npm run check:tokens`
5. changed-file ESLint
6. focused KAOS tests
7. `npm run build`
8. route audit confirming `/kaos` and `/kaos/governance`
9. public-navigation audit confirming KAOS is not added to customer-facing nav
10. Approved Offerings protected-scope audit
11. Procurement protected-scope audit
12. dependency/package-lock audit
13. mutation/API audit for Governance Viewer
14. version audit
15. MTR task-record count = exactly one KAOSWEB001 record
16. browser console check
17. desktop visual review
18. laptop/narrow responsive review
19. module navigation smoke test
20. Governance Viewer search/filter/detail smoke test

Repository-wide lint failure caused only by known unrelated baseline debt does not authorize unrelated repair. Report separately.

---

## 24. Required visual review

Use browser/Playwright review for:

- `/kaos` landing/default module;
- Today;
- Leads;
- Customers;
- Approved Offerings entry/path without changing its behavior;
- Procurement entry/path without changing its behavior;
- Installations;
- Money;
- Automations;
- Business Overview;
- Governance;
- left navigation active states;
- narrow viewport behavior;
- keyboard focus;
- no WNYHS public marketing header/CTA inside the KAOS shell.

Do not commit temporary screenshots unless an existing evidence standard explicitly requires repository storage.

---

## 25. Task lifecycle and publication

Use the current execution/publication evidence model.

During Codex execution:

- execution may reach `DONE` after implementation/validation;
- publication state may reach `DRAFT_PR_OPEN` after the draft PR exists;
- Codex must not merge;
- Codex must not mark ready for review;
- Codex must not deploy;
- CTR eligibility remains false until later operator merge/deployment-applicability/main-sync evidence is verified under current governance.

---

## 26. Required branch / PR behavior

- Create one fresh branch from synchronized `origin/main`.
- Suggested branch: `codex/kaosweb001-online-command-center`
- Commit only authorized changes.
- Push branch.
- Open exactly one DRAFT PR to `main`.
- Do not merge.
- Do not enable auto-merge.
- Do not mark ready for review.

Suggested commit message:

`feat(kaos): establish canonical online command center`

---

## 27. Stop conditions

STOP before implementation or before crossing the relevant boundary if:

- current branch/base is not synchronized;
- prior PR merge state is inconsistent;
- duplicate KAOSWEB001 branch/open PR exists;
- a canonical KAOS application already exists elsewhere and conflicts with `/kaos`;
- a module-governance owner already exists and conflicts with the proposed registry;
- Approved Offerings requires underlying business/data changes;
- Procurement requires underlying business/data changes;
- implementation requires new auth/security/backend architecture;
- implementation requires new HubSpot schema/API work;
- implementation requires public website route/content redesign;
- implementation requires a new dependency not already approved;
- a same-level authority conflict exists;
- exact target paths cannot be determined with high confidence.

Report the conflict and wait for operator decision.

---

## 28. Exit criteria

KAOSWEB001 is implementation-complete only when all applicable criteria are met:

- `/kaos` exists and renders a KAOS-branded command-center shell;
- KAOS does not present itself as WNY Home Security Operator UI;
- expected menu modules are present according to verified posture;
- Approved Offerings remains operational and unchanged in business/data behavior;
- Procurement remains operational and unchanged in business/data behavior;
- `/kaos/governance` reuses GOVUI001 read-only capability;
- prototype vs operational data posture is not misleading;
- module governance registry exists or verified canonical equivalent is updated;
- every exposed menu module has a governance record/component;
- no automatic public-content publication is added;
- no HubSpot implementation is added;
- no authentication/Cloudflare Access work is added;
- no protected system changes occurred;
- version bump completed using existing owner;
- focused tests pass;
- build passes;
- semantic-token check passes or only pre-existing findings remain;
- visual review passes;
- branch is pushed;
- one draft PR is open;
- worktree clean;
- required closeout and RSI returned.

---

## 29. Required closeout format

Return:

### Delivery
- repository
- task ID
- branch
- base SHA
- implementation commit SHA
- final evidence commit SHA if used
- draft PR number + URL
- PR state
- version

### Product/application boundary confirmation
- Product/System
- Application
- Surface
- Namespace
- Deployment boundary

### Final Owner Routing Matrix
Include actual verified paths and final actions.

### Module posture table
For every exposed KAOS module, report:
- module
- operational/prototype/filler posture
- canonical source
- governance record
- mutation authority
- HubSpot posture
- public-content posture

### Exact files read
Separate targeted vs full reads; justify full reads.

### Exact files changed
Created / modified / deleted.

### Approved Offerings protection evidence
Explain how current functionality/data contracts were preserved.

### Procurement protection evidence
Explain how current functionality/data contracts were preserved.

### Governance Viewer migration result
Route, reused functionality, read-only confirmation.

### Validation
Every required validation with PASS/FAIL/SKIP and reason.

### Visual evidence
Viewport(s), pages reviewed, defects corrected, console state.

### Protected-system confirmation
Explicitly confirm no unauthorized changes to public website, HubSpot, payments, scheduling, lead-signal, QR, email, Cloudflare/security, environment, secrets, dependencies, Approved Offerings business logic, or Procurement business logic.

### Risks / follow-up candidates
No automatic activation.

### Token / Context Utilization Report
- exact metrics if visible;
- files loaded;
- full reads and reasons;
- context pressure;
- redundant reads;
- targeted-read improvements;
- shortest safe future dispatch prompt.

---

## 30. Recursive Self Improvement — Mandatory

### 1. Repository improvements
What repository organization or owner registration would reduce future ambiguity?

### 2. Governance improvements
Did the Product -> Application -> Surface -> Deployment Boundary precheck prevent incorrect application routing? What should change?

### 3. Module governance improvements
Did the consolidated module-governance registry provide enough control without creating documentation sprawl?

### 4. Context optimization
Which reads were essential? Which could be eliminated next time?

### 5. Token optimization
What consumed the most context? Could module classification reduce future reads?

### 6. Execution efficiency
What slowed the online consolidation? What would make the next KAOS module deterministic?

### 7. Data architecture findings
What prototype fields clearly indicate future HubSpot/data-dictionary work? List candidates only; do not implement.

### 8. Protected capability findings
Did Approved Offerings or Procurement expose hidden dependencies that should be documented separately?

### 9. Public-content readiness
Which modules may eventually drive public website data, and what governance gate is still missing?

### 10. Operator experience
Can the operator understand where they are in KAOS, which data is live vs prototype, and how to reach Governance quickly?

### 11. Future prevention
How can future UI tasks prevent "correct file in the wrong application" routing errors?

### 12. Confidence
HIGH / MEDIUM / LOW with concise evidence.

Do not promote or implement RSI candidates without operator approval.

---

## 31. Minimal Codex dispatch prompt

After local `main` is synchronized with this work order:

```text
Execute KAOSWEB001 using:

docs/codex/work-orders/KAOSWEB001_WORK_ORDER_REV01.md

Follow the Product -> Application -> Surface -> Deployment Boundary and approved Owner Routing Matrix exactly.
Use targeted reads.
Preserve Approved Offerings and Procurement business/data behavior.
Establish the canonical online KAOS Command Center at /kaos and integrate the existing read-only Governance Viewer at /kaos/governance.
Do not implement authentication, HubSpot changes, public-content publishing, new backend systems, or protected-system changes.
Open one draft PR only.
Do not merge, mark ready, or deploy.
Return the complete work-order closeout, token/context report, and mandatory RSI.
```
