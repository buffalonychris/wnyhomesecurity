# MASTER TASK REGISTER DISPATCH STANDARD — REV01

Status: Proposed
Target location: `/docs/system/master-task-register.md` section or `/docs/codex/CODEX_TASK_REGISTER_RULES.md` after governance approval.

## Purpose

Define the Master Task Register as the dispatch board for Codex execution.

## Principle

The task register is not merely a historical record.

It is the live control surface for what Codex is allowed to work on.

## Valid Task Requirements

A task is valid for Codex execution only when it includes:

```text
Task ID:
Task Name:
Status:
Priority:
Category:
Controlling Context:
Controlling Docs:
Task-Specific Spec / Work Order:
Purpose:
Allowed Scope:
Forbidden Scope:
Target Files:
Runtime Systems Affected:
Documentation Updates Required:
Validation Required:
Exit Criteria:
Dependencies:
Operator Decision Required:
Required Codex Summary Fields:
```

## Dispatch Rule

Codex must receive one task at a time.

Codex may not choose work from the backlog.

Codex may not make a task active unless the operator/dispatcher explicitly does so.

## Task Status Values

```text
BACKLOG
READY
ACTIVE
BLOCKED
IN REVIEW
DONE
ARCHIVED
```

## Work Order Relationship

The Master Task Register routes work.

The task-specific work order gives Codex the detailed execution instructions.

The work order must reference:

- universal governance
- relevant standards
- relevant runtime contracts
- protected-system constraints
- validation commands
- exact expected output

## Closeout Rule

A task is not DONE just because Codex changed files.

A task is DONE only after:

1. Codex summary is reviewed.
2. Scope compliance is confirmed.
3. Validation evidence is accepted.
4. PR is reviewed/merged by operator.
5. Deployment validation is completed when applicable.
6. Task status is updated with evidence.
