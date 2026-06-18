# AUTHORITY-MAP-REV01

Status: Proposed
Target location: `/docs/system/authority_map_rev01.md` after governance approval.

## Purpose

Define the practical authority chain for WNY Home Security work across ChatGPT Project KB, repository governance, standards, runtime contracts, and implementation tasks.

## Simple Authority Chain

```text
ChatGPT Project KB / Project Instructions
↓
Repository system governance
↓
Current operational context
↓
Master Task Register
↓
Active bounded task / work order
↓
Locked standards and specs
↓
Runtime contracts
↓
Implementation code
↓
GitHub PR review
↓
Cloudflare deployment validation
```

## Execution Rule

Codex does not decide the work.

Codex executes one assigned work order.

The work order must point Codex to the correct authority docs and define allowed scope, forbidden scope, target files, validation, and exit criteria.

## Dispatch Model

| Role | Project Equivalent |
|---|---|
| Management | Operator + ChatGPT decision layer |
| Dispatcher | ChatGPT operating through Master Task Register |
| Dispatch board | `/docs/system/master-task-register.md` |
| Work order | Task-specific prompt/spec |
| Company policy | Governance, guardrails, standards, runtime contracts |
| Support technician | Codex |
| Closed ticket | GitHub PR summary + merge record |
| Field verification | Cloudflare deployment review |

## Conflict Rule

If a lower authority conflicts with a higher authority, the higher authority controls.

If two same-level authority docs conflict, stop and create a governance reconciliation task.

## Project KB Role

Project KB controls ChatGPT behavior only.

It does not authorize Codex to implement features.

Chat-derived context becomes implementation authority only after it is promoted into repository docs, the Master Task Register, or an active bounded work order that is permitted by higher-authority governance.

## ChatGPT GitHub Connector Role

When user-authorized and governance-compliant, ChatGPT may use available GitHub connector tools to inspect repository files, read governance docs, create or update repository documentation, create branches, open pull requests, add pull-request comments, and inspect pull-request metadata.

Connector access does not change the authority chain. Repository docs remain the durable implementation authority, operator review remains required, and Cloudflare deployment review remains manual.

ChatGPT must not use connector access to bypass protected-system controls or expand Codex scope beyond a bounded work order.

## Repository Role

Repository docs are the durable source of truth for:

- governance
- standards
- runtime contracts
- current operational context
- Master Task Register
- implementation tasks

## Task Register Role

The Master Task Register is the dispatch board, not merely a historical log.

A valid active task must route Codex to:

- controlling context
- controlling docs
- relevant standards
- relevant runtime contracts
- allowed scope
- forbidden scope
- validation requirements
- exit criteria

## Codex Role

Codex is a technician.

Codex must not:

- invent strategy
- create priorities
- expand scope
- infer missing business rules from chat history
- modify protected systems without explicit task authorization
