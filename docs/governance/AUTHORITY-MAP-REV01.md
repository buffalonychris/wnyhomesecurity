# AUTHORITY-MAP-REV01

Status: ACTIVE AUTHORITY-ROUTING REFERENCE
Task ID: `T-GOVEXEC001`
Owner: Project Governance
Authority posture: Supporting role and routing display; the authority chain in `/docs/system/project.md` controls
Customer-facing: No
Implementation authority: No
Predecessor/successor: Promotes this proposed REV01 in place; no predecessor is deleted and no parallel authority owner is created

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
| Management | Operator as business owner and final approver |
| Architecture Steward / Dispatcher | ChatGPT as governance impact assessor, bounded dispatcher, and closeout reviewer |
| Dispatch board | `/docs/system/master-task-register.md` |
| Durable work order | Repository-owned task work order; external prompts are minimal pointers |
| Company policy | Governance, guardrails, standards, runtime contracts |
| Support technician | Codex |
| Review and evidence | GitHub branch, diff, draft PR, review, and merge evidence |
| Production evidence | Cloudflare deployment evidence when separately authorized and relevant |

## Conflict Rule

If a lower authority conflicts with a higher authority, the higher authority controls.

If two same-level authority docs conflict, stop and create a governance reconciliation task.

## Project KB Role

Project KB controls ChatGPT behavior only.

It does not authorize Codex to implement features.

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

Eligible completed history moves to the canonical Completed Task Register through weekly repository stewardship after merge, relevant deployment verification, and main synchronization are evidenced. The Completed Task Register is historical evidence and never authorizes implementation.

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
