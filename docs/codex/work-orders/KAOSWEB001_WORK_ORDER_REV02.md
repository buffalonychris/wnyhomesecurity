# KAOSWEB001 — Establish Canonical Online KAOS Command Center — Work Order REV02

Status: PROMPT-CREATED / OPERATOR AUTHORIZED
Task ID: `KAOSWEB001`
Category: `GOV`
Primary workstream: `KAOS Application`
Related workstreams: Project Governance; KAOS Governance; Visual System; Dashboard / Interactive Experience System; Approved Offerings; Procurement; HubSpot Readiness; Governance Viewer
Controlling context: `/docs/system/step-current.md`
Customer-facing: No
Runtime impact: Yes — additive internal KAOS application routes only
Implementation authority: Yes, only for the exact bounded scope defined by REV01 plus the amendments in this REV02
Predecessor work order: `docs/codex/work-orders/KAOSWEB001_WORK_ORDER_REV01.md`
Routing authority update: `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV02.md`

---

## 1. Purpose of REV02

This revision exists only to reconcile the OPS004 workstream conflict that blocked REV01 before implementation.

The operator has explicitly approved:

1. registering `KAOS Application` as an exact OPS004 workstream;
2. defining its purpose narrowly as the internal KAOS Command Center/application surface;
3. defining its default routing, owners, and protected boundaries;
4. checking OPS004 workstream validity immediately after the work-order header; and
5. re-dispatching the same KAOSWEB001 implementation without broadening scope.

**All substantive implementation requirements, protections, module scope, Owner Routing Matrix decisions, validation requirements, closeout requirements, protected-system exclusions, and RSI requirements from `KAOSWEB001_WORK_ORDER_REV01.md` remain controlling unless this REV02 explicitly changes them.**

No new KAOS architecture exercise is authorized.

---

## 2. Mandatory first precheck — fail fast

Before deeper authority reads or implementation discovery:

1. read this work-order header;
2. load `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV02.md`;
3. confirm the exact primary workstream label `KAOS Application` exists;
4. if present, continue immediately with the targeted REV01 precheck;
5. if absent or contradicted by higher authority, STOP immediately.

Do not spend additional context attempting to rediscover or re-prove workstream registration after this check passes.

Canonical sequence:

`Work Order Header -> OPS004 exact workstream check -> targeted authority/routing precheck -> implementation`

---

## 3. Reconciled primary workstream

The approved primary workstream is:

**KAOS Application**

Its narrow purpose is the durable internal KAOS Command Center/application surface, including:

- KAOS-specific application shell;
- `/kaos` route namespace;
- KAOS internal navigation;
- presentation/orchestration of governed KAOS modules;
- integration of the existing Governance Viewer into the KAOS shell;
- preservation of underlying capability ownership.

It does **not** own the business logic or data authority of the modules it displays.

Do not reclassify this task as Project Governance or Dashboard / Interactive Experience System merely to avoid the new registered workstream.

---

## 4. Product / Application / Surface / Deployment boundary — unchanged

| Field | Controlling value |
|---|---|
| Product/System | KAOS — Kick Ass Operating System |
| Application | KAOS Command Center |
| Primary workstream | KAOS Application |
| Target surface | Online internal KAOS command center |
| Canonical namespace | `/kaos` |
| Deployment boundary | Existing WNYHS deployable web application, logically separated as the KAOS application surface |
| Public customer website relationship | KAOS is not the WNYHS customer website; public routes/navigation remain untouched |
| Visual reference | Existing Sites KAOS prototype supplied by operator |
| Governance relationship | KAOS consumes governed sources; display does not create authority |

A correct file in the wrong product/application/surface remains a failed routing decision.

---

## 5. Protected capability boundaries — unchanged and reaffirmed

### Approved Offerings

`REFERENCE / PRESERVE ONLY` except for a verified minimal shell/navigation wrapper required to expose the existing capability inside KAOS.

Do not change:

- business logic;
- approval/promotion rules;
- source Sheets/contracts;
- controlled lists;
- capability intelligence;
- solution composition relationships;
- SOW/quote/install/support relationships;
- canonical data ownership.

If underlying changes are required, STOP.

### Procurement

`REFERENCE / PRESERVE ONLY` except for a verified minimal shell/navigation wrapper required to expose the existing capability inside KAOS.

Do not change:

- procurement workflow;
- readiness logic;
- inventory/procurement calculations;
- supplier/vendor logic;
- source-of-truth ownership;
- established business-process governance.

If underlying changes are required, STOP.

### Governance Viewer

Reuse GOVUI001 functionality under `/kaos/governance` and preserve its read-only contract. Do not create mutation paths or a parallel governance schema.

---

## 6. Implementation scope — unchanged from REV01

Execute the implementation defined in:

`docs/codex/work-orders/KAOSWEB001_WORK_ORDER_REV01.md`

including, subject to verified current implementation owners:

- establish the canonical `/kaos` namespace;
- create/extend a KAOS-specific shell and navigation using the Sites prototype as the UX reference;
- expose Today, Leads, Customers, Approved Offerings, Procurement, Installations, Money, Automations, Business Overview, and Governance according to verified operational/prototype posture;
- preserve real governed capabilities and source ownership;
- label prototype/demo data honestly;
- integrate Governance at `/kaos/governance`;
- create the consolidated KAOS Module Governance Registry only if no canonical equivalent exists;
- create governance records for every exposed KAOS menu module without inventing missing business rules;
- preserve the future customer-journey / owner-business-journey extensibility without implementing the full future architecture;
- use existing semantic tokens and accessibility requirements;
- perform the required version bump;
- update only the bounded MTR task evidence;
- open exactly one draft PR.

---

## 7. Explicitly still deferred

Do not add or implement:

- Cloudflare Access;
- authentication;
- email allowlists;
- trusted-device/location policies;
- custom KAOS hostname;
- HubSpot properties/schema/workflows/API writes;
- new CRM architecture;
- new database;
- new API;
- automatic public website publishing;
- public website redesign;
- new dependencies without STOP and operator approval;
- Approved Offerings or Procurement redesign;
- unrelated lint repair.

---

## 8. Owner Routing Matrix reconciliation

The REV01 Owner Routing Matrix remains operator-approved.

This REV02 changes only the application-level owner classification:

| Approved concept | Current canonical owner | Exact target | Action | Reason | Why not elsewhere | Conflict | Confidence |
|---|---|---|---|---|---|---|---|
| KAOS Command Center application surface | OPS004 `KAOS Application` workstream + existing KAOS architecture | Verified existing app/router/KAOS implementation owners discovered under targeted precheck | IMPLEMENT within REV01 scope | OPS004 now explicitly registers the durable KAOS application surface | Not Project Governance: governance owns repository/process rules. Not Dashboard / Interactive Experience System: that workstream owns separate dashboard/demo experiences, not KAOS application identity | NO after OPS004 REV02 registration | HIGH |

All other REV01 matrix rows remain unchanged, especially Approved Offerings and Procurement as `REFERENCE / PRESERVE ONLY`.

---

## 9. Context-efficiency requirement added by RSI

Once the following facts are positively established, stop governance discovery and begin bounded implementation:

- exact task/work order is valid;
- `main` is clean and synchronized;
- exact OPS004 primary workstream is registered;
- Product -> Application -> Surface -> Deployment Boundary is confirmed;
- Owner Routing Matrix has no same-level conflict;
- Approved Offerings and Procurement protection boundaries are confirmed;
- no higher-authority contradiction exists.

Additional repository searching after convergence requires a named unresolved question. Do not continue searching for hypothetical conflicts after all required precheck conditions pass.

---

## 10. Required reads for redispatch

Use `READ MODE: TARGETED`.

Read first:

1. `docs/codex/work-orders/KAOSWEB001_WORK_ORDER_REV02.md`
2. `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV02.md`
3. `docs/codex/work-orders/KAOSWEB001_WORK_ORDER_REV01.md`
4. current context and authority files required by REV01

Do not repeat the prior failed run's broad searches unless a specific unresolved issue requires them.

The prior blocked run already established:

- base was clean/synchronized;
- GOVUI001 / PR #563 was present;
- no duplicate KAOSWEB001 branch/open PR existed;
- Product/Application/Surface/Deployment identity was coherent;
- the sole blocker was missing OPS004 registration.

Reverify current Git state because the repository has changed, but do not redo resolved architectural analysis.

---

## 11. Validation and delivery — unchanged

Run all applicable validation, visual review, protected-capability audits, route audits, dependency audits, tests, build, token checks, version checks, and Governance Viewer checks required by REV01.

Delivery remains:

- one fresh task branch;
- one bounded implementation;
- one draft PR to `main`;
- no merge;
- no ready-for-review transition;
- no deployment;
- full closeout;
- token/context utilization report;
- mandatory RSI.

The RSI must specifically report whether the new early OPS004 validation and convergence rule reduced precheck time/context compared with the blocked REV01 run.

---

## 12. Dispatch instruction

Execute `KAOSWEB001` using this REV02 as the controlling work-order revision and REV01 as the unchanged detailed implementation body.

Primary workstream must resolve exactly to `KAOS Application` under `OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV02.md` before implementation begins.

After that check passes, execute the existing bounded KAOSWEB001 implementation without expanding scope.
