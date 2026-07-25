# Codex Local Staging Bootstrap Work Order Template REV01

Status: Active reusable work-order template
Customer-facing: No
Implementation authority: No by itself
Owner standard: `docs/system/WNYHS_LOCAL_STAGING_AND_FILE_TRANSFER_STANDARD_REV01.md`
Task: OPSLOCAL001

## Use

Copy this template into a bounded prompt-created work order or task-specific work order. Replace every bracketed value before execution.

## Work Order

```text
Task ID:
[TASK-ID]

Task Name:
Provision Local Staging Directories for [REPOSITORY-NAME]

Repository:
[GITHUB-OWNER/REPOSITORY-NAME]

Local Repository:
[EXACT-WINDOWS-REPOSITORY-PATH]

Controlling Context:
[CURRENT-CONTEXT-ID]

Purpose:
Provision the standard ignored local intake, output, and review directories
without changing application behavior or protected systems.

Authority:
This work order is executable only when [TASK-ID] is ACTIVE in the applicable
Master Task Register or higher repository governance explicitly permits this
bounded prompt-created work order.

Allowed Scope:
- Run the approved local-staging provisioning script against the exact repository.
- Create .local-intake/, .local-output/, and .local-review/ when missing.
- Append only missing standard exclusions to .gitignore.
- Preserve all existing files and .gitignore rules.
- Validate ignore behavior and idempotence.

Forbidden Scope:
- No application, runtime, API, route, dependency, external-system, customer-data,
  secret, worktree, repository-creation, destructive, merge, deployment, or
  unrelated documentation changes.
- Do not overwrite an existing non-directory staging path.
- Do not modify another task.

Approved Script:
C:\dev\wnyhomesecurity\scripts\repository\provision-local-staging.ps1

Preview Command:
pwsh -NoProfile -File "C:\dev\wnyhomesecurity\scripts\repository\provision-local-staging.ps1" -RepositoryPath "[EXACT-WINDOWS-REPOSITORY-PATH]" -WhatIf

Execution Command:
pwsh -NoProfile -File "C:\dev\wnyhomesecurity\scripts\repository\provision-local-staging.ps1" -RepositoryPath "[EXACT-WINDOWS-REPOSITORY-PATH]"

Required Prechecks:
1. Confirm the exact repository identity and path.
2. Confirm the path is an existing Git working tree.
3. Confirm the task and current context authorize the change.
4. Inspect .gitignore without modifying it.
5. Stop if any staging path is occupied by a non-directory item.
6. Confirm no protected system is in scope.

Validation:
1. Run the preview command.
2. Run the execution command.
3. Run the execution command a second time.
4. Confirm .gitignore contains each standard entry exactly once.
5. Run:
   git check-ignore .local-intake .local-output .local-review
6. Run:
   git diff --check
7. Run:
   git status --short
8. Confirm no staging directory or staged local content appears in Git status.
9. Confirm no file outside .gitignore changed.

Exit Criteria:
- All three local directories exist.
- All three directories are ignored.
- Repeated execution is idempotent.
- Existing .gitignore content is preserved.
- No protected system or application behavior changed.

Closeout:
Report the repository path, directories created or already present, .gitignore
entries added, validation results, changed tracked files, protected-system
confirmation, and unresolved issues.
```

## One-Line Codex Request

After the task-specific placeholders and authority are established:

```text
Execute the approved local staging bootstrap work order for [TASK-ID] against [EXACT-WINDOWS-REPOSITORY-PATH], using the active WNYHS local staging standard and its approved PowerShell script. Preserve existing files, prove idempotence, and stop on any scope or authority conflict.
```
