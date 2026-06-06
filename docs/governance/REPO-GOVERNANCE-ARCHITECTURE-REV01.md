# REPO-GOVERNANCE-ARCHITECTURE-REV01

## Purpose

Define what belongs in WNY Home Security repository governance and how authority should be owned.

This document is a proposed repo-side governance architecture for reconciliation. It is not active until committed into the repository through a bounded governance task.

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
| Dispatch Board | `/docs/system/master-task-register.md` | Active task queue and task status |
| Task Rules | `/docs/codex/CODEX_TASK_REGISTER_RULES.md`, `CODEX_RUN_CONTRACT.md` | Defines how Codex receives work |
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
