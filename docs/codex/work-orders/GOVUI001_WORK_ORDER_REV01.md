# GOVUI001 — KAOS Governance Viewer Read-Only Implementation — Work Order REV01

Status: PROMPT-CREATED / OPERATOR AUTHORIZED
Task ID: `GOVUI001`
Category: `GOV`
Primary workstream: KAOS Governance Viewer
Related workstreams: Project Governance; Codex Execution; Operator UI
Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`
Customer-facing: No
Runtime impact: Internal operator UI only
Implementation authority: Yes, only for the exact bounded read-only implementation scope defined below

## 1. Repository and controlling context

- Repository: `buffalonychris/wnyhomesecurity`
- Local repository: `C:\dev\wnyhomesecurity`
- Base branch: `main`
- Required merged baseline: PR `#562`, synchronized on local `main`
- Controlling context: `/docs/system/step-current.md`
- Task authorization basis: explicit operator approval of the GOVUI001 read-only scope and Owner Routing Matrix after merge and synchronization of PR #562.

This is one bounded implementation task for a read-only internal KAOS Governance Viewer. It does not authorize governance editing, task creation, MTR/CTR mutation, document promotion, reconciliation, external-system writes, deployment changes, protected-system changes, or public-site changes.

## 2. Objective

Implement the first usable read-only KAOS Governance Viewer inside the existing operator application so the operator can answer, in one or two clicks:

> Why does this rule exist?

The viewer must expose current governance relationships through a GitHub Insights / Azure DevOps-inspired internal interface that is:

- searchable;
- filterable;
- clickable;
- graph-driven; and
- relationship-driven.

The viewer must present governance owned by repository documents without becoming a governance authority itself.

## 3. Governing interaction principle

The viewer is a read-only projection.

It may:

- display governance metadata;
- filter, sort, search, group, and graph records;
- link records to related records;
- show document paths, authority relationships, provenance, last governance update, readiness, conflicts, controls, and exclusions;
- show clearly labeled static or repository-derived summary counts;
- navigate among internal viewer screens.

It must not:

- edit repository documents;
- write to GitHub;
- create, activate, change, or archive tasks;
- update MTR or CTR records;
- approve owner routing decisions;
- promote candidate governance;
- resolve conflicts;
- mutate runtime or protected systems;
- call external write APIs;
- present itself as authority;
- infer facts not present in the read model or explicitly approved local snapshot.

## 4. Read mode

`READ MODE: TARGETED`

Search exact routes, component names, operator layout classes, KAOS owner documents, semantic tokens, and read-model schema keys first.

Full-file reads are permitted only for:

- the controlling work order;
- the complete Governance Viewer REV02 machine-readable payload;
- exact existing KAOS/operator source files selected as implementation targets;
- exact active visual/token standards required to preserve the existing operator application.

Record each full read and its justification. Do not broadly reread the entire repository, public website, MTR, catalog, manifest, or historical governance audits.

## 5. Authority chain

Apply the current precedence exactly:

1. `/docs/system/project.md`
2. `/docs/system/guardrails.md`
3. `/docs/system/agent.md`
4. `/docs/system/plan.md`
5. `/docs/system/step-current.md`
6. `/docs/system/master-task-register.md`
7. this active bounded work order
8. locked standards, owner specifications, and runtime contracts
9. implementation/source evidence
10. historical documents as lineage only
11. chat-derived context only after promotion into repository authority

Higher authority controls. Same-level conflict is a stop condition.

## 6. Required precheck

Before editing:

1. confirm the working tree is clean;
2. confirm local `main` and `origin/main` contain merged PR #562;
3. confirm no existing branch or open PR already owns `GOVUI001`;
4. confirm `/docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md` contains the current internal `schema_version: REV02` contract;
5. confirm the existing internal operator UI route, layout, components, and style system;
6. identify the exact current KAOS/operator capability owner from repository evidence;
7. confirm no existing Governance Viewer route or component already implements the approved scope;
8. confirm the approved Owner Routing Matrix remains valid;
9. produce the final implementation routing table before edits;
10. create one fresh branch from synchronized `origin/main`;
11. add only the missing `GOVUI001` task record if current prompt-created-task governance permits it.

Stop if:

- PR #562 is absent from the synchronized base;
- the current Governance Viewer contract is not REV02;
- a conflicting active viewer implementation exists;
- the implementation would require governance writes, external APIs, secrets, authentication redesign, protected-system changes, or a new dependency not explicitly approved here;
- the actual KAOS/operator owner cannot be established;
- the existing architecture materially differs from the assumptions below and rerouting would be required.

## 7. Required authority and owner reads

### Governance and execution

- `/AGENTS.md`
- `/docs/system/project.md`
- `/docs/system/guardrails.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/step-current.md`
- `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `/docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `/docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`
- `/docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md`
- `/docs/governance/AUTHORITY-MAP-REV01.md`
- `/docs/kaos/WNYHS_REPO001_KAOS_OPERATING_SYSTEM_MASTER_CONTROL_REV03.md`

### Existing operator application

- `/src/App.tsx`
- `/src/layouts/OperatorLayout.tsx`
- `/src/pages/Operator.tsx`
- `/src/components/operator/`
- exact current operator style definitions in `/src/index.css` or the verified active operator stylesheet owner
- `/package.json`

### Visual and semantic standards

Use only active/controlling standards verified during precheck. Expected references include:

- `/docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`, if current and applicable;
- `/docs/brand/page_layout_standards_rev01.md`, only if applicable to the internal operator UI;
- `/docs/design-system/DESIGN004_WNYHS_COMPONENT_CATALOG_REV01.md`, if current and applicable;
- `/docs/design-system/visual-parity/VISPARITY003_VISUAL_COMPONENT_NAMING_STANDARD_REV01.md`, if current and applicable;
- `/docs/design-system/visual-parity/VISPARITY004_CSS_TOKEN_MAPPING_AND_GAP_REGISTER_REV01.md`, if current and applicable.

Do not load public-marketing visual standards that do not govern the internal operator application.

## 8. Approved Owner Routing Matrix

Codex must verify this matrix against the synchronized repository before editing. It may narrow an action to `REFERENCE ONLY` when the existing owner already satisfies the requirement. It may not reroute, add a target, create a parallel owner, or broaden scope without stopping for operator approval.

| Approved concept | Current canonical owner | Expected target | Exact implementation responsibility | Why this owner | Why not somewhere else | Action | Conflict | Confidence |
|---|---|---|---|---|---|---|---|---|
| Governance Viewer application capability | Existing KAOS/operator application owner | Existing operator route/layout/source structure identified during precheck | Add one internal read-only governance module under the existing operator application | The viewer is an internal operator capability that consumes governance | Not `project.md` or repository governance: those own authority, not application presentation | MODIFY EXISTING OWNER | NO | HIGH |
| Governance Viewer route | Existing React routing owner | `/src/App.tsx` | Add one internal operator route, expected `/operator/governance`, under `OperatorLayout` | `App.tsx` owns application routing | Not a public route or new router | MODIFY | NO | HIGH |
| Governance Viewer page and screen composition | Existing operator page/component layer | New page under the current operator source convention | Implement the approved screens and navigation using existing operator patterns | Operator source owns internal UI behavior | Not governance documents, which remain source authority only | CREATE WITHIN EXISTING LAYER | NO | HIGH |
| Operator navigation entry | Existing operator layout/navigation owner | `/src/layouts/OperatorLayout.tsx` or verified existing operator navigation component | Add a clear Governance entry without restructuring unrelated navigation | Existing operator navigation owns operator-route discovery | Not public navigation or business menus outside operator scope | MODIFY | NO | HIGH |
| Governance data contract | Governance Viewer read-model owner | `/docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md` | Reference/read only; do not change schema or records in this task | REV02 already defines authority, provenance, last update, dependencies, readiness, and controls | No new schema document or duplicate data owner | REFERENCE ONLY | NO | HIGH |
| Viewer runtime data | Existing application data layer | New local typed snapshot/adapter within the verified operator or data source structure | Create a deterministic read-only application representation of the REV02 records | The browser needs typed data available at build/runtime | Do not fetch GitHub or mutate docs; do not add a second governance authority | CREATE READ-ONLY ADAPTER | NO | HIGH |
| Search/filter/relationship logic | New Governance Viewer module | New module-local utilities/components | Implement client-side search, filters, selection, grouping, and relationship traversal | These are presentation/query behaviors | Not shared globally unless a verified existing shared utility already owns the behavior | CREATE/MODIFY | NO | HIGH |
| Graph visualization | Existing chart/UI stack | Governance Viewer module using existing React/Recharts capabilities | Implement a bounded relationship graph or node-link visualization without new dependencies | Recharts is already present and the operator UI already uses it | No new graph library or dependency without separate authorization | CREATE USING EXISTING STACK | NO | MEDIUM |
| Read-only enforcement | Repository governance architecture plus application boundary | Application module and route | No forms, mutations, write buttons, edit controls, POST/PUT/PATCH/DELETE calls, or external write actions | Governance architecture requires the viewer to remain a projection | Not an authentication redesign or API policy change | ENFORCE | NO | HIGH |
| Visual system | Existing operator visual/token owner | Existing operator component classes and active semantic tokens | Extend existing styles surgically; no hard-coded off-system palette | The operator UI already has a visual language | Not a new standalone theme or public-marketing redesign | MODIFY EXISTING STYLES | NO | HIGH |
| Future governance editing | No current implementation owner | None | Display a concise read-only boundary; do not create disabled edit workflows or placeholders that imply authority | Editing is intentionally out of scope | No speculative mutation UI | EXCLUDE | NO | HIGH |
| Task authorization/evidence | Master Task Register | `/docs/system/master-task-register.md` | Add one bounded `GOVUI001` record and update only that record during execution | MTR is the dispatch board | Not a separate task register | MODIFY | NO | HIGH |
| Version bump | Existing visible application-version owner, if verified | Exact current version source | Increment visible version as TASK 0 without changing unrelated version semantics | Operator uses the visible version to confirm deployment | Do not invent a second version source | CONDITIONAL MODIFY | NO | MEDIUM |

### Required final routing table

Before edits, Codex must print a final routing table with:

- approved concept;
- verified canonical owner;
- exact target file;
- exact section/component;
- action;
- reason;
- why not another plausible owner;
- conflict status;
- confidence.

Any `LOW` confidence, conflict, new target outside this work order, or owner mismatch is a stop condition.

## 9. Required product scope

### 9.1 Route and placement

Implement one internal route under the existing operator layout.

Expected route:

`/operator/governance`

Do not create a public route, public navigation link, alternate application shell, new authentication system, or external deployment target.

### 9.2 Approved screens

Implement the following within one bounded module. These may be route-level tabs, panels, or subviews; do not create unnecessary independent routes unless the existing operator architecture clearly requires them.

1. **Governance Overview**
   - total records;
   - canonical owners;
   - readiness counts;
   - conflict count;
   - governance-domain count;
   - clear statement that the viewer is read-only and source documents remain authoritative.

2. **Authority Explorer**
   - graph-driven display of upstream/downstream authority and dependency relationships;
   - clickable nodes;
   - selected-node detail panel;
   - no automatic conflict resolution.

3. **Governance Registry**
   - searchable and filterable record list/table;
   - filters for domain, status, readiness, canonical-owner posture, and conflict presence;
   - sort by title, domain, status, readiness, and last governance update when available;
   - each record clickable into detail.

4. **Owner Explorer**
   - group records by `authority_owner`;
   - show what each owner controls and does not control;
   - show upstream authority, downstream dependencies, supporting documents, and conflicts.

5. **Current Execution Authority Chain**
   - display current context, task authorization owner, work-order owner, execution owner, and evidence/CTR relationship only where the read model supports it;
   - do not infer live GitHub PR state or external deployment state;
   - label repository-derived information clearly.

6. **Owner Routing Viewer**
   - display approved routing concepts available in the current read-only dataset or explicitly local static GOVUI001 design data;
   - fields: concept, owner, target, section/component, action, reason, why not elsewhere, conflict, confidence;
   - do not write or approve routing decisions.

7. **RSI / Improvement View**
   - display the RSI governance owner and relationships available in the read model;
   - do not invent or mutate an RSI queue unless an existing repository-backed dataset already exists and is explicitly authorized by this task;
   - a simple owner/detail view is sufficient for REV01.

8. **OpenAI Current-Use Alignment**
   - display the existing alignment artifact content only if a safe, deterministic local read-only representation can be created without expanding file scope;
   - otherwise provide a clearly labeled link/reference to the authoritative document and defer structured ingestion.

9. **Governance Health**
   - derive only from current read-model facts;
   - show readiness distribution, conflicts, missing metadata, historical-only records, and owner-clarification needs;
   - no invented score, pass/fail certification, or auto-remediation.

### 9.3 Core record detail

Every record detail view must answer:

1. What is this record?
2. Who owns it?
3. What is its authority level?
4. What source path controls it?
5. What does it control?
6. What does it not control?
7. What sits above it?
8. What depends on it?
9. What supports it?
10. Are there conflicts?
11. What is its provenance?
12. What was its last verified governance update?
13. What is its viewer-readiness state?
14. Why does this rule or document exist, based only on available fields?

The final answer may be composed from `controls`, `does_not_control`, authority relationships, provenance, and source identity. Do not generate unsupported narrative.

## 10. Data implementation contract

The canonical authority remains:

`/docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md`

The current internal schema is REV02.

### Required approach

- Create a typed read-only application representation of all 11 current REV02 records.
- Preserve field meanings exactly.
- Do not change source governance documents.
- Do not add a GitHub runtime fetch.
- Do not add an API route.
- Do not add a database.
- Do not add a dependency solely to parse YAML.
- Do not expose filesystem or repository mutation capability.

### Permitted implementation patterns

Use the first safe pattern supported by the current toolchain:

1. a build-time raw import with a small deterministic parser for the constrained existing payload; or
2. a typed local snapshot generated from the REV02 payload and validated against the source during the task.

If pattern 2 is used:

- place the snapshot in the existing application data convention;
- add a source-path and schema-version provenance header;
- preserve all 11 records;
- validate record count, IDs, required fields, readiness enums, and source paths during implementation;
- label the UI as a repository snapshot rather than live external state;
- do not claim automatic synchronization.

Do not modify `package.json` or `package-lock.json`.

## 11. UX and visual requirements

Use the existing operator application's visual language. The approved aesthetic is comparable in information architecture to GitHub Insights or Azure DevOps, but it must remain visually consistent with the existing KAOS/operator UI.

Required qualities:

- dense but readable information hierarchy;
- restrained, professional visual treatment;
- responsive layout;
- keyboard-accessible controls;
- visible focus states;
- semantic headings;
- accessible labels for search, filters, tabs, and graph controls;
- no color-only status communication;
- status/readiness badges with text;
- clear selected-node state;
- clear empty-state and no-results messages;
- plain-language labels.

### Token rule

- Use existing semantic CSS variables/classes/tokens.
- Do not hard-code new palette values when an existing semantic token can be used.
- Reuse existing operator components where appropriate.
- Create module-local components only when existing components do not fit.
- Do not redesign unrelated operator pages.

### Graph rule

The relationship graph must be useful, not decorative.

Minimum behavior:

- show nodes for governance records;
- show directed upstream/downstream relationships;
- support click selection;
- highlight the selected node and directly related nodes;
- provide a text relationship list as an accessible equivalent;
- remain usable on smaller screens through scrolling, stacking, or a list fallback.

No new graph dependency is authorized. Use existing React, CSS, SVG, or Recharts capabilities.

## 12. Expected implementation files

The exact allowlist must be finalized by the required precheck. Expected files are:

### Expected modifications

- `/src/App.tsx`
- `/src/layouts/OperatorLayout.tsx` or the verified current operator navigation owner
- existing operator stylesheet owner, expected `/src/index.css`
- `/docs/system/master-task-register.md`
- existing visible version source, only if verified

### Expected creations

Use the repository's existing naming and folder conventions. Expected equivalents:

- `/src/pages/GovernanceViewer.tsx`
- `/src/components/governance/` module components
- `/src/data/governanceViewerData.ts` or verified equivalent
- focused tests under the existing test convention

### Reference only

- `/docs/governance/GOVERNANCE_VIEWER_READ_MODEL_REV01.md`
- `/docs/governance/OPENAI_CURRENT_USE_GOVERNANCE_ALIGNMENT_REV01.md`
- `/docs/governance/AUTHORITY-MAP-REV01.md`
- `/docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`
- `/docs/kaos/WNYHS_REPO001_KAOS_OPERATING_SYSTEM_MASTER_CONTROL_REV03.md`
- current visual standards
- `/docs/DOCUMENT_CATALOG.md`
- `/docs/MARKDOWN_MANIFEST.md`

### File-count boundary

Prefer no more than 12 changed source/test files plus the single MTR record and verified version file. If the implementation requires a larger file set, stop and request work-order revision.

## 13. TASK 0 — Version bump

Before implementation edits:

1. identify the existing visible application-version source used to confirm Cloudflare publication;
2. increment it according to the current repository convention;
3. do not create a new version source;
4. include the resulting visible version in closeout.

If no unambiguous existing visible version owner is found, record that finding and stop for operator direction rather than inventing one.

## 14. Allowed scope

- One internal operator route.
- One read-only Governance Viewer module.
- Client-side search, filter, sort, selection, grouping, relationship navigation, and graph display.
- Typed local representation of the existing REV02 read-model records.
- Focused operator navigation addition.
- Focused styles consistent with the existing operator UI.
- Focused tests and validation.
- One task record and required version bump.
- Draft PR only.

## 15. Forbidden scope

- No governance editing.
- No MTR or CTR writes from the application.
- No task creation or activation from the UI.
- No document promotion or status change.
- No GitHub writes or runtime GitHub API.
- No API routes.
- No database.
- No ingestion pipeline.
- No filesystem writes.
- No external-system reads or writes.
- No HubSpot, `/api/lead-signal`, Stripe, Klarna, scheduling, Resend, Google Workspace, Cloudflare, DNS, secrets, environment, analytics, or customer-data changes.
- No public-route or public-navigation changes.
- No authentication redesign.
- No new dependencies or package-lock changes.
- No hard-coded off-token color system.
- No speculative governance-management controls.
- No broad KAOS module restructure.
- No unrelated cleanup.
- No deployment.
- No merge, auto-merge, or ready-for-review transition.

## 16. Protected systems

Confirm unchanged:

- `/api/lead-signal`;
- HubSpot schemas, properties, pipelines, IDs, and write paths;
- Stripe checkout, secrets, webhook, verification, and deposit logic;
- Klarna or other financing integrations;
- scheduling/calendar authority;
- Resend/email runtime;
- requestId and attribution lifecycle;
- quote/agreement/payment/schedule chain;
- public routes, funnel order, claims, SEO, sitemap, robots;
- Cloudflare configuration and deployment;
- dependencies and package-lock;
- customer data, environment values, and secrets;
- governance source documents and registers, except the single authorized MTR task record.

## 17. Additive/destructive posture

Default posture: additive and surgical.

Authorized changes are limited to adding the new internal module and the smallest necessary route/navigation/style/test integrations.

Do not delete, rename, supersede, or broadly refactor existing source files. Do not rewrite the operator shell. Do not remove existing functionality.

## 18. Validation tier

Validation tier: `SOURCE/UI` with governance-boundary checks.

### Required commands/checks

1. `git status --short`
2. exact changed-file audit against the final allowlist
3. `git diff --check`
4. focused diff review for every authorized file
5. `npm run check:tokens`
6. `npm run lint`
7. `npm run build`
8. focused tests for:
   - all 11 records load;
   - record IDs are unique;
   - required REV02 fields are present;
   - search returns expected title/path/domain matches;
   - domain, status, readiness, canonical-owner, and conflict filters work;
   - record selection shows authority, controls, exclusions, provenance, and last update;
   - graph/list relationship selection works;
   - read-only boundary contains no mutation controls;
   - route renders under the operator layout.
9. protected-path audit
10. no dependency/package-lock changes
11. no public-route changes except confirmation that the new route is nested under `OperatorLayout`
12. browser/visual review at desktop and narrow viewport
13. keyboard-navigation and accessible-label review
14. source-data validation against the REV02 record count, IDs, required fields, and readiness enums
15. verify visible version bump

### Visual review expectations

Capture or report evidence for:

- Governance Overview;
- registry search/filter state;
- selected record detail;
- authority graph selected-node state;
- narrow/mobile layout;
- no-results state;
- read-only boundary label.

Do not use production deployment for validation.

## 19. Git and delivery

- Branch: `codex/govui001-governance-viewer-read-only`
- Commit message: `feat(kaos): add read-only governance viewer`
- Base: `main`
- Open one draft PR.
- Do not merge.
- Do not enable auto-merge.
- Do not mark ready for review.
- Do not deploy.
- Stage only authorized files.

The draft PR must include:

- objective;
- final Owner Routing Matrix;
- exact files changed;
- route and module structure;
- read-only data approach;
- visual/token compliance;
- test/build results;
- protected-system confirmation;
- screenshots or precise visual-review evidence;
- risks and deferred items;
- version;
- no-merge/no-deployment confirmation.

## 20. Required closeout

Report:

- repository;
- branch;
- commit SHA;
- draft PR URL/state;
- controlling context;
- task/category/workstreams;
- read mode;
- final Owner Routing Matrix;
- files read;
- files created/modified;
- route created;
- data-adapter/snapshot method;
- all implemented screens;
- search/filter/graph behavior;
- accessibility behavior;
- visible version;
- validation commands/results;
- visual-review evidence;
- protected-system confirmation;
- intentionally untouched files/systems;
- unresolved risks;
- follow-up candidates without activation;
- token/context report;
- mandatory RSI report.

## 21. Recursive Self Improvement — mandatory

End the closeout with:

### 1. Repository improvements
What repository structure or ownership changes would reduce ambiguity for future KAOS modules?

### 2. Governance improvements
Did the Owner Routing Matrix prevent owner drift, parallel capability creation, or misplaced implementation?

### 3. Context optimization
Which files were essential, unnecessary, or broader than needed?

### 4. Token optimization
What reduced or increased context usage? Report exact metrics if visible; otherwise say they were not visible.

### 5. Execution efficiency
What made the task deterministic? What slowed it?

### 6. Promotion candidates
Identify possible improvements without implementing or activating them.

### 7. Future prevention
How can future read-only governance modules avoid stale data, unsupported inference, or authority confusion?

### 8. Risks observed
List unresolved architectural, data-freshness, accessibility, or UI risks.

### 9. Operator experience
Can the operator answer “Why does this rule exist?” in one or two clicks? Identify any remaining friction.

### 10. Confidence
`HIGH`, `MEDIUM`, or `LOW`, with a brief reason.

RSI may recommend but may not expand scope, activate tasks, change governance, or add features.

## 22. Stop conditions

Stop before editing or before publication if:

- the approved Owner Routing Matrix is contradicted by current repository ownership;
- exact source targets cannot be established;
- a new dependency appears necessary;
- the REV02 contract cannot be represented without changing governance source documents;
- a required data field would need unsupported inference;
- a live GitHub/API/database ingestion path appears necessary;
- the route would be public or outside the operator layout;
- existing operator navigation would require broad restructuring;
- token compliance cannot be maintained;
- tests/build fail and cannot be corrected within the allowlist;
- protected systems or package-lock would change;
- the file-count boundary would be exceeded;
- the version owner is ambiguous;
- secrets or customer data would be exposed;
- a clean draft-PR boundary cannot be maintained.

State the exact blocker and request a revised work order. Do not improvise around a stop condition.

## 23. Exit criteria

The task is complete only when:

1. the existing operator application contains one internal read-only Governance Viewer route;
2. the viewer uses all 11 current REV02 records through a deterministic local read-only adapter;
3. the approved overview, registry, owner, authority, execution, routing, RSI, OpenAI-alignment reference, and health views are implemented to the bounded REV01 level described above;
4. search, filters, clickable relationships, and graph/list navigation work;
5. each record detail answers the approved governance questions using supported data only;
6. no governance edit or mutation function exists;
7. no protected-system, public-route, dependency, API, database, or deployment change occurred;
8. token, lint, build, focused tests, visual review, and accessibility checks pass;
9. the visible version is incremented through the existing owner;
10. one draft PR is open against `main`;
11. no merge, ready transition, auto-merge, or deployment occurred;
12. the required closeout, token/context report, and RSI are complete.

## 24. Minimal dispatch prompt

```text
Execute GOVUI001 using:

docs/codex/work-orders/GOVUI001_WORK_ORDER_REV01.md

Follow the approved Owner Routing Matrix and current authority chain exactly.
Use targeted reads.
Implement one internal read-only KAOS Governance Viewer only.
Do not add governance editing, writes, APIs, databases, dependencies, public routes, or protected-system changes.
Open one draft PR only.
Do not merge, mark ready, or deploy.
Return the required closeout, visual evidence, token/context report, and RSI.
```
