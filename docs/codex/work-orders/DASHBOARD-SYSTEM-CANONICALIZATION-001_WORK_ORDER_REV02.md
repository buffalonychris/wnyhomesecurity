# DASHBOARD-SYSTEM-CANONICALIZATION-001 — Final Dashboard System Reconciliation and Canonicalization

**Revision:** REV02
**Status:** OPERATOR AUTHORIZED — EXECUTE THIS REVISION
**Category:** GOVERNANCE / DOCUMENTATION RECONCILIATION
**Primary Workstream:** Dashboard / Interactive Experience System
**Related Workstreams:** Project Governance; Automation System; Runtime System; Estimate / Quote System; Floorplan System; CRM / HubSpot System; Catalog System
**Task ID:** DASHBOARD-SYSTEM-CANONICALIZATION-001
**Implementation authority:** Repository documentation only. No live/customer/runtime-system mutation.
**Controlling context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

READ MODE: FULL
Justification: this is a bounded governance reconciliation/compaction task that must compare the complete materially relevant dashboard corpus newest-to-oldest and verify predecessor value before supersession.

REASONING POSTURE: ADAPTIVE
- LOW: repo/branch precheck, exact-path verification, mechanical validation, Git closeout.
- MEDIUM: ordinary authority interpretation, owner mapping, concept normalization, documentation edits.
- HIGH: only material authority conflicts, ambiguous ownership, destructive/supersession decisions, or cross-system contradictions.
- De-escalate after the ambiguity is resolved.

EXECUTION POSTURE: DIRECT

## 1. Objective

Reconcile the WNY Home Security dashboard documentation corpus into a compact canonical system without losing valuable historical concepts.

Do not redesign from scratch.

Recover, compare, normalize, merge, and compact.

The final result must:
- preserve surviving high-value concepts;
- eliminate conflicting or duplicate dashboard authority;
- assign one primary owner per concept;
- distinguish dashboard authority from cross-system domain authority;
- preserve lineage;
- use dependency-safe retirement;
- consume the merged Business Process Interdependency Register;
- leave the Dashboard System ready for later bounded implementation and database-architecture work.

## 2. Required prerequisite

The following merged authority is mandatory current input:

`docs/kaos/business-processes/WNYHS_BUSINESS_PROCESS_INTERDEPENDENCY_REGISTER_REV01.md`

The dashboard task must consume the existing BPI dependency records rather than create a competing dashboard-only dependency registry.

Where dashboard reconciliation reveals new evidence:
- update an existing BPI record when it is the same dependency;
- propose a new BPI record only when genuinely new;
- preserve provenance and current/manual/future/unresolved distinctions;
- identify any `required_for_execution: YES` blocker that materially affects the relevant lifecycle stage.

A missing future enrichment system is not by itself a blocker to the present HA-evidence-first baseline.

## 3. Approved dashboard decisions

The Operator approved the following decisions on 2026-10-08. They are binding for this task and must be promoted into the correct durable owner documents during this reconciliation.

### DECISION-DASH001 — Canonical dashboard compaction
Reconcile the full dashboard corpus newest-to-oldest, preserve unique surviving value, compact it into a minimal non-conflicting canonical document set, and demote redundant predecessors only after dependency verification.

Newest is the comparison baseline, not automatic truth.

### DECISION-DASH002 — Sanitized Site Capability Model
Raw Home Assistant exports/registries are evidence inputs only.

Dashboard generation must consume a durable sanitized Site Capability Model that records at minimum:
- semantic capability;
- provenance/evidence;
- freshness;
- authoritative state source;
- customer/internal visibility;
- allowed actions;
- permissions/authorization;
- availability/degraded/unknown posture;
- notification relationship;
- automation relationship;
- unresolved conditions;
- acceptance posture.

### DECISION-DASH003 — Variable-schema-first preparation and assembly
Absorb durable authority from DASHBOARD_PREP001 and the Post-Install Assembly Profile into the canonical creation/lifecycle process and Site Capability Model.

Per-site preparation/assembly checklists remain generated working artifacts/templates, not competing authority.

Every required variable must define:
- variable name;
- business meaning;
- data type;
- REQUIRED / CONDITIONAL / OPTIONAL / NOT_APPLICABLE;
- source of truth;
- current source available today;
- future automated source;
- manual entry allowed yes/no;
- validation rule;
- fallback behavior;
- blocking/non-blocking effect;
- customer-safe/internal-only classification;
- freshness requirement;
- provenance/evidence reference.

Allowed input-source states:
- AVAILABLE_FROM_CURRENT_EVIDENCE
- MANUAL_OPERATOR_INPUT
- FUTURE_BUSINESS_SYSTEM_INPUT
- UNRESOLVED
- NOT_APPLICABLE

The system must work today while future business systems populate the same governed fields later.

### DECISION-DASH004 — Preserve narrow cross-system authorities
Notification, Automation, Camera/Media Privacy, Zero Trust/Remote Support, HA extraction, Commissioning, and Handoff remain separate domain authorities.

Dashboard documents consume their contracts/outputs and do not duplicate their doctrine.

### DECISION-DASH005 — Building/Household Mode integration contract
One authoritative Building/Household Mode concept is shared across Dashboard, Notification, and Automation systems.

Dashboard may display the mode and expose authorized controls.

Dashboard does not own or redefine:
- notification routing;
- escalation;
- suppression;
- quiet hours;
- automation consequences;
- mode business logic.

### DECISION-DASH006 — Mandatory RETIRED_ rule
Any document explicitly approved for retirement from this point forward must be renamed:

`RETIRED_<complete-original-filename>`

Before retirement:
- verify inbound references/dependencies;
- migrate or preserve required references;
- confirm no active implementation relies on the file;
- preserve lineage.

Retired files remain historical/reference only.

### DECISION-DASH007 — Real Home Assistant approval prototype and evolving customer workspace
Preferred approval prototype is actual Home Assistant-compatible Lovelace/YAML using governed WNYHS themes and qualified reusable cards/components, rendered in Home Assistant.

Generic deterministic HTML may remain a secondary engineering aid but is not the preferred customer approval surface.

The customer-specific workspace may evolve through:

`PROPOSED -> APPROVED -> INSTALLED-UNVERIFIED -> INSTALLED-VERIFIED -> PRODUCTION`

At quote/design stage, a clearly labeled non-live demo dashboard may use proposed/quoted capabilities and simulated states.

When available, the same property workspace may include or link governed spatial/3D review artifacts such as:
- 3D Walkthrough
- System Layout
- Camera Coverage
- Sensor Locations
- Lighting Plan
- Automation Areas

Spatial property data supports location/planning; it does not become authoritative installed-capability evidence.

Conceptual relationship:

`SITE CAPABILITY MODEL <-> SPATIAL PROPERTY MODEL <-> DASHBOARD`

Do not invent a Gaussian-splat implementation stack in this task.

### DECISION-DASH008 — Additive deployment, rollback, soak, separate retirement
New dashboards deploy additively beside a known-working dashboard.

Rollback must exist before cutover.

Production behavior must be validated and soaked before legacy retirement.

Legacy retirement is a separate approved action and never an automatic result of deploying the new dashboard.

## 4. Approved target canonical document architecture

Produce the smallest coherent owner set satisfying these six responsibilities. Prefer strong existing owners when they can be normalized cleanly; create replacement owners only when necessary.

### A. Dashboard System Authority & Lifecycle Map
Thin start-here routing/lineage map:
- canonical owner map;
- cross-system dependency map;
- lifecycle map;
- predecessor/successor lineage;
- conflict/supersession rule;
- retirement/dependency rule.

### B. Dashboard Creation & Lifecycle Standard
Own the end-to-end reusable process.

Required lifecycle:

`QUOTE/DESIGN -> CUSTOMER PREVIEW WORKSPACE -> DEMO HA DASHBOARD -> 3D PROPERTY REVIEW -> CUSTOMER DESIGN APPROVAL -> INSTALLATION -> EXPORT/EVIDENCE INTAKE -> SANITIZED SITE CAPABILITY MODEL -> EXCEPTION RESOLUTION -> SITE-BOUND HA PREVIEW -> OPERATOR/CUSTOMER APPROVAL -> BOUNDED IMPLEMENTATION -> ADDITIVE PRODUCTION -> VALIDATION/SOAK -> HANDOFF -> OPTIONAL SEPARATELY APPROVED LEGACY RETIREMENT`

Each stage must define:
- inputs;
- outputs/artifacts;
- owner;
- blocking conditions;
- allowed manual fallback;
- future automated source when applicable.

### C. Site Capability, Evidence & Binding Standard
Own the durable sanitized model between raw evidence and dashboards.

Must distinguish at minimum:
- proposed;
- quoted;
- customer-approved;
- installed;
- installed-unverified;
- installed-verified;
- unavailable/degraded;
- deferred;
- retired/not-installed.

Raw HA evidence never directly becomes dashboard structure without sanitization/semantic mapping.

### D. Dashboard Architecture & Functional Behavior Standard
Use INSTALL006 REV02 as the current baseline and reconcile older surviving value into it.

Must preserve:
- three dashboard classes;
- canonical customer navigation;
- five customer statuses;
- Current / Recent / Resolved;
- authoritative command lifecycle;
- unavailable/degraded/unknown semantics;
- reassurance-first property-status principle;
- Building/Household Mode integration contract;
- customer/installer/service separation;
- high-impact control protections.

### E. Dashboard Visual, Component & Interaction Standard
Use DESIGN001 REV02 as the current baseline.

Must preserve:
- WNYHS gold identity role;
- action blue family;
- five status colors;
- governed typography;
- Compact / Default / Large;
- one customer action family;
- governed tile anatomy;
- Status Value Field;
- 16:9 media treatment;
- Light / Dark / Auto;
- accessibility/focus/reduced-motion;
- qualified reusable HA component patterns.

### F. Dashboard Delivery, Prototype, Validation & Acceptance Standard
Use DASHBOARD001 REV02 as current baseline but update the prototype/approval model to DECISION-DASH007.

Must own:
- HA-native preview/prototype posture;
- simulated vs authoritative evidence;
- customer/operator review;
- bounded implementation handoff;
- additive production;
- rollback;
- validation;
- soak;
- acceptance;
- handoff;
- separate legacy retirement.

## 5. Mandatory reconciliation method

For each dashboard concept/domain cluster:

1. Locate all materially relevant current, supporting, historical, audit, prototype, and implementation-evidence sources.
2. Order the sources newest -> oldest within the concept/domain cluster.
3. Extract atomic concepts rather than comparing whole documents only.
4. Treat the newest treatment as the baseline candidate, not automatic truth.
5. Walk backward source by source.
6. At every predecessor, perform an affirmative lost-value check:
   - Is there a requirement, distinction, safeguard, workflow, data field, state, interaction, validation rule, edge case, or implementation lesson not represented in the newer treatment?
7. Assign each atomic concept one disposition:
   - KEEP
   - KEEP_AND_NORMALIZE
   - MERGE
   - SPLIT
   - REFINE
   - SUPERSEDE
   - RETIRE
   - REJECT
   - UNRESOLVED
8. Resolve conflicts by authority, completeness, current operational reality, evidence quality, and operator-approved decisions.
9. Build the best-of concept model only after backward traversal.
10. Assign one canonical owner per surviving concept.
11. Migrate active references before retirement.
12. Preserve historical lineage without letting predecessor documents compete as current authority.

Historical age alone is not grounds for rejection.

Implementation evidence does not become authority merely because it exists.

Do not declare a gap until current authority, historical sources, implementation evidence, and the Interdependency Register have been checked.

## 6. Mandatory source set

At minimum, inspect and reconcile:

- `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV02.md`
- `docs/design-system/DESIGN001_WNYHS_CUSTOMER_INTERFACE_STANDARD_REV02.md`
- `docs/home-assistant/DASHBOARD001_RESPONSIVE_DELIVERY_STANDARD_REV02.md`
- `docs/installer/INSTALL011_DASHBOARD_SITE_IMPLEMENTATION_PIPELINE_STANDARD_REV01.md`
- `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md`
- `docs/home-assistant/WNYHS_POSTINSTALL_DASHBOARD_ASSEMBLY_PROFILE_REV01.md`
- `docs/home-assistant/WNYHS_DASHBOARD_GOVERNANCE_MASTER_REV02.md`
- `docs/audits/DASH-GOV-POSTINSTALL-AUDIT-001_AUDIT_REV01.md`
- `docs/audits/DASH-GOV-POSTINSTALL-RECONCILE-001_RECONCILIATION_REV01.md`
- `docs/audits/DASH-GOV-BUILD-READINESS-001_AUDIT_REV01.md`
- Bailey dashboard prototype work orders/review evidence where useful as implementation/prototype evidence;
- cross-system domain owners referenced by the BPI register when needed to preserve boundaries;
- older dashboard predecessors found through concept search.

Do not treat filenames as the only discovery method.

## 7. Interdependency register integration

Review all BPI entries materially affecting Dashboard.

The final Dashboard Authority/Lifecycle Map and relevant standards must reference dependency ownership rather than duplicating it.

At closeout report:
- BPI IDs consumed;
- BPI IDs updated or proposed;
- any newly discovered dependency;
- any unresolved owner/source question;
- any stage-specific execution blocker.

The register owns cross-business relationship requirements.

Dashboard standards own dashboard behavior/process only.

Database architecture later owns structural implementation.

## 8. Owner Routing Matrix

| Approved concept | Canonical owner / target | Action | Alternate-owner exclusion | Conflict | Confidence |
| --- | --- | --- | --- | --- | --- |
| Dashboard authority/lineage routing | Dashboard System Authority & Lifecycle Map | CREATE or normalize strongest existing governance-map owner | MTR/OPS004 route execution context, not dashboard doctrine | NO | HIGH |
| End-to-end dashboard creation/lifecycle | Dashboard Creation & Lifecycle Standard | CREATE or normalize strongest existing lifecycle owner | INSTALL011 may contribute but must not remain competing full-system authority | NO | HIGH |
| Sanitized Site Capability Model / variable schema / evidence binding | Site Capability, Evidence & Binding Standard | CREATE | Raw HA extraction and Quote/CRM owners remain source authorities only | NO | HIGH |
| Customer/installer/service functional dashboard behavior | INSTALL006 REV02 successor/current owner | MODIFY / normalize | Visual standard does not own functional state semantics | NO | HIGH |
| Visual/component/interaction rules | DESIGN001 REV02 successor/current owner | MODIFY / normalize | Functional architecture does not own visual primitives | NO | HIGH |
| HA-native prototype/delivery/validation/acceptance | DASHBOARD001 REV02 successor/current owner | MODIFY / normalize | Generic HTML prototype evidence is secondary, not approval authority | NO | HIGH |
| Cross-business dependencies | WNYHS Business Process Interdependency Register | REFERENCE / MODIFY only when new evidence requires | Dashboard docs must not create a parallel dependency registry | NO | HIGH |
| Notification behavior | Notification Engine owner | REFERENCE ONLY | Dashboard only presents/consumes notification state | NO | HIGH |
| Automation behavior | AUTOMATION001 | REFERENCE ONLY | Dashboard only invokes authorized governed actions | NO | HIGH |
| Camera/media privacy | Camera/Media Privacy owner | REFERENCE ONLY | Dashboard must not redefine retention/consent policy | NO | HIGH |
| Remote access/service support | INSTALL010 + remote-access owners | REFERENCE ONLY | Dashboard does not own tunnel/security architecture | NO | HIGH |
| HA evidence extraction | HA-BACKUP owner | REFERENCE ONLY | Capability model consumes sanitized output | NO | HIGH |
| Commissioning/handoff | INSTALL008/INSTALL009 and applicable current owners | REFERENCE ONLY | Dashboard lifecycle consumes gates/evidence but does not own field procedure | NO | HIGH |
| Spatial/3D property model | Existing/future Floorplan/Property owner | REFERENCE ONLY / identify unresolved owner | Dashboard may link/display spatial artifacts; it does not own spatial truth | NO | MEDIUM |
| Approved decision record | KAOS001 Decision Register | MODIFY | Decision Register records approved decision lineage but does not replace owner standards | NO | HIGH |
| Task bookkeeping | Master Task Register | MODIFY exact task record only | Do not rewrite unrelated MTR content | NO | HIGH |

If any matrix row proves materially wrong during reconciliation, stop for work-order revision rather than silently reroute.

## 9. Allowed scope

Allowed:
- dashboard-governance/standard documentation;
- dashboard-related decision-register promotion;
- exact BPI records when new reconciliation evidence requires an update;
- exact task record in MTR;
- historical dashboard predecessor renames only when retirement requirements are satisfied;
- reference migration needed for approved retirement;
- docs-only lineage/index references directly required by the resulting canonical owner set.

No source/runtime implementation.

## 10. Forbidden scope / protected systems

Do not change:
- live Home Assistant/customer configuration;
- customer dashboards at runtime;
- Cloudflare/DNS/Tunnel/Access;
- HubSpot/CRM runtime/schema/properties;
- Stripe/payment;
- scheduling/calendar authority;
- APIs;
- secrets/environment;
- website/public funnel;
- customer-facing marketing claims;
- dependencies/package lock;
- physical database schema;
- database migrations;
- inventory/procurement runtime;
- support/warranty runtime;
- Gaussian-splat/3D runtime implementation.

Do not merge.

## 11. Additive/destructive posture

Default additive and dependency-safe.

Destructive documentation action includes retirement/rename/supersession of an active-looking predecessor.

Before any retirement:
- verify inbound references;
- migrate current references;
- confirm successor owns surviving concepts;
- preserve lineage;
- use mandatory `RETIRED_` prefix;
- report exact files retired.

If dependency safety cannot be proven, leave the predecessor in place with explicit unresolved disposition and report it.

## 12. Validation

Tier: governance / docs-only.

Required:
- `git diff --check`;
- exact changed-file audit;
- no unexpected deletions;
- no protected/runtime files;
- current OPS004 primary-workstream exact match;
- one bounded task only;
- canonical owner map contains one primary owner per dashboard concept;
- every predecessor disposition is recorded or evident in the reconciliation output;
- every retirement has inbound-reference check and successor mapping;
- BPI register consumed and no competing dependency registry created;
- current/manual/future/unresolved source distinctions preserved;
- raw HA evidence does not become direct dashboard authority;
- quoted/proposed state remains distinct from installed/verified;
- customer-safe and internal-only information remain separable;
- generic HTML is not promoted as preferred approval surface;
- no physical database schema design;
- docs-only governed build skip unless repository tooling explicitly requires otherwise.

## 13. Git / delivery

Branch:
`task/dashboard-system-canonicalization-001-rebuild`

Codex must:
- continue this branch;
- add only the exact MTR task record if absent;
- perform the reconciliation;
- commit authorized changes;
- push;
- open one draft PR to `main`;
- do not merge;
- identify this as the clean replacement for the dashboard portions previously stranded in PR #611;
- do not import unrelated #611 history.

## 14. Required closeout

Report:
- branch and commit;
- draft PR URL/state;
- exact files created/modified/renamed;
- final canonical dashboard owner set;
- predecessor disposition summary;
- retired files, if any;
- decisions promoted;
- BPI IDs consumed/updated/proposed;
- unresolved governance or data-source issues;
- any REQUIRED_FOR_EXECUTION blocker;
- validation results;
- confirmation of no runtime/protected-system changes;
- governed build decision;
- concise context/RSI findings;
- no-merge confirmation.

## 15. Stop conditions

Stop and report before destructive action if:
- a higher-authority conflict exists;
- a canonical owner cannot be selected without an operator decision;
- a planned retirement has active unresolved inbound dependencies;
- an Owner Routing Matrix row must materially change;
- a required source is missing and its absence prevents truthful reconciliation;
- the work would require runtime/protected-system mutation;
- the task would need to design physical database architecture;
- scope would expand beyond Dashboard canonicalization.

## 16. Exit criteria

Task is complete when:
- the dashboard corpus has been traversed newest-to-oldest within concept clusters;
- lost-value checks are complete;
- one compact canonical dashboard owner set exists;
- approved decisions are promoted into durable repository authority;
- cross-system authorities remain separate;
- the BPI register is consumed;
- predecessor conflicts are resolved or explicitly left unresolved with reason;
- dependency-safe retirements are complete where justified;
- validation passes;
- one draft PR exists;
- no merge/runtime deployment occurred.
