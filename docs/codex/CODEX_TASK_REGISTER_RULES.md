# CODEX TASK REGISTER RULES

Status: Active

---

## Execution Boundaries

- Codex may only execute Active Tasks.
- Active Tasks must map to the current controlling Step.
- Backlog and Next Tasks are not executable.

---

## Task State Handling

- Completed work must be moved to Completed Tasks.
- Blocked work must be moved to Blocked Tasks with reason.

---

## Stop Rule

- Codex must stop if asked to execute a task not listed as Active.
- When stopped, Codex must state the conflict and request task promotion or Step revision.
