# REPO-GOVERNANCE-ARCHITECTURE-REV01

Status: ACTIVE AND CANONICAL
Task ID: `T-GOVEXEC001`
Owner: Project Governance / Repository Governance Architecture
Authority posture: Canonical owner for repository governance architecture below the system authority chain
Customer-facing: No
Implementation authority: No
Predecessor/successor: Promotes this proposed REV01 in place; no predecessor is deleted and no parallel owner is created

## Purpose

Define what belongs in WNY Home Security repository governance and how authority should be owned.

This document owns the repository-side governance architecture. It routes to higher system authority and domain owners; it does not replace them or authorize implementation.

## Repository Governance Responsibilities

Repo governance should define:

- authority chain
- current operational context model
- Master Task Register model
- Codex execution rules
- protected systems
- additive/destructive discipline
- claims and copy guardrails
- semantic token / visual enforcement references
- runtime contract ownership model
- task activation rules
- validation requirements

## What Does Not Belong In Repo Governance

Repo governance should not contain:

- random chat history
- temporary brainstorming
- duplicate full runtime contracts
- duplicate full design standards
- one-off Codex summaries unless filed as audit/evidence docs
- business ideas not approved for execution

## Recommended Governance Layers

| Layer | Owner Docs | Purpose |
|---|---|---|
| System Governance | `/docs/system/project.md`, `guardrails.md`, `agent.md`, `plan.md` | Highest-level operating rules |
| Current Context | `/docs/system/step-current.md` or successor | Single live execution frame |
| Dispatch Board | `/docs/system/master-task-register.md` | Live task queue and pre-archive lifecycle evidence |
| Completed History | `/docs/system/completed-task-register.md` | Minimal post-completion proof-of-work history; non-authorizing |
| Task Rules | `/docs/codex/CODEX_TASK_REGISTER_RULES.md`, `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` | Task schema and canonical Codex/work-order mechanics |
| Standards | `/docs/design-system/`, `/docs/solution-system/`, `/docs/specs/`, `/docs/brand/`, `/docs/content/` | Design, page, copy, funnel, brand rules |
| Runtime Contracts | `/docs/runtime/` | Canonical owner docs for integrations/runtime behavior |
| Historical Evidence | `/docs/audits/`, `/docs/steps/` | Lineage and verification evidence |

## Authority Ownership Model

Each operational domain should have exactly one canonical owner document.

Examples:

| Domain | Canonical Owner |
|---|---|
| Overall authority chain | `/docs/system/project.md` |
| Execution behavior | `/docs/system/agent.md` |
| Current operational frame | `/docs/system/step-current.md` or successor |
| Task dispatch | `/docs/system/master-task-register.md` |
| Visual design standard | `/docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md` |
| Solution page standard | latest active `SOLUTION001` document |
| HubSpot properties | `/docs/runtime/hubspot_properties.md` plus locked HubSpot KB reference |
| HubSpot sync behavior | `/docs/runtime/hubspot_sync_contract.md` |
| Stripe runtime | `/docs/runtime/stripe_runtime.md` |
| Email runtime | `/docs/runtime/resend_runtime.md` and `/docs/runtime/cloudflare_email_routing.md` |
| Scheduling runtime | `/docs/runtime/scheduling_ownership.md` and calendar runtime docs |
| Deployment validation | `/docs/runtime/deployment_validation.md` |

## Architecture Steward and Dispatcher Model

- The Operator is the business owner and final approver.
- ChatGPT is the Architecture Steward, governance impact assessor, dispatcher, and closeout reviewer.
- The repository is durable authority and the work-order source.
- Codex is the bounded implementation technician.
- GitHub is the branch, diff, PR, review, merge-evidence, and implementation-evidence surface.
- Cloudflare is a deployment/production-evidence surface only when separately authorized and relevant.

Capability access does not create authority. The steward reconciles before creating, extends existing owners when possible, keeps work bounded, and routes approved improvements into durable authority.

## Master Task Register Standard

The Master Task Register is the dispatch board.

It should not be treated as only a historical log.

Every active task must route Codex to:

- controlling context
- controlling authority docs
- standards docs
- runtime contracts
- task-specific spec/work order
- allowed scope
- forbidden scope
- validation
- exit criteria

The MTR remains the live dispatch board through active, ready/planned, blocked/waiting/deferred, review, merged, deployed when applicable, and main-synced evidence states pending scheduled archival. Existing status fields and evidence fields may represent those facts; labels do not create implementation authority. Routine task closeout must not purge history.

## Completed Task Register Relationship

`/docs/system/completed-task-register.md` is the canonical completed-history owner. It preserves only the minimum proof-of-work fields needed for audit and later KAOS Mission History / Operational History views. It does not duplicate full PR or implementation history retained in GitHub and never authorizes execution.

Existing completed records embedded in the MTR remain preserved until a weekly, evidence-checked archival pass can move eligible records without losing lineage. This task creates no bulk migration.

## Weekly Repository Stewardship

Once per week, the Architecture Steward should:

1. archive eligible completed tasks from MTR to CTR only after merge, applicable deployment verification, and main synchronization are evidenced;
2. preserve PR, merge, deployment, and sync identifiers;
3. compact the active register without deleting lineage;
4. detect stale references, duplicate owners, broken links, and unresolved status drift;
5. review RSI promotion candidates; and
6. produce a concise repository-health result.

This cadence does not authorize product, source, runtime, deployment, or protected-system changes. Those require separate bounded tasks.

## Standing Campaign Authorization

Standing Campaign Authorization is category-level permission to create and sequence bounded tasks inside an operator-approved campaign. It does not authorize edits, protected work, or multi-task bundling. Every implementation requires its own bounded task and work order.

## Desired Outcome and Favorable Variance

Where useful, define a minimum acceptable outcome and a desired realistic outcome. The desired outcome is a satisfaction threshold, not an exact maximum. Favorable variance above it is acceptable only while all governing risk, ethics, quality, customer, architectural, and legal constraints remain satisfied. Additional performance obtained by violating constraints is not success, and evidence that does not justify action must not force action.

## Historical Docs Standard

Historical Step docs and audits should remain available as lineage/evidence.

They do not authorize new implementation unless explicitly promoted by current operational context and task register.

## Reconciliation Rule

Do not rewrite everything at once.

Create bounded GOV tasks:

1. reconcile authority chain
2. reconcile current-context model
3. reconcile Master Task Register format
4. classify docs/catalog
5. add OPS001
6. update Project KB after repo governance is stable
