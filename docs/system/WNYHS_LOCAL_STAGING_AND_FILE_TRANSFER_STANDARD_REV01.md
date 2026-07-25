# WNYHS Local Staging and File-Transfer Standard REV01

Status: Active system operating standard
Customer-facing: No
Implementation authority: No
Task: OPSLOCAL001

## 1. Purpose

This standard defines the controlled bridge between:

- ChatGPT Project conversations, instructions, and uploaded sources;
- local Codex repository execution;
- locally generated outputs awaiting review; and
- approved repository promotion.

ChatGPT Projects and Codex project roots are paired operating environments, not one shared filesystem. A ChatGPT attachment path such as `/mnt/data/...` must never be assumed to exist inside a Windows Codex workspace.

## 2. Required Local Directories

Every participating WNYHS engineering repository may provision these repository-local directories:

```text
.local-intake/
.local-output/
.local-review/
```

They are local working areas only and must remain ignored by Git.

### `.local-intake/`

Use for exact source files deliberately transferred into the local execution environment, including approved Markdown, PDFs, CSVs, images, sanitized exports, or other task inputs.

### `.local-output/`

Use for locally generated files that are not yet approved repository artifacts.

### `.local-review/`

Use for review copies, comparisons, validation evidence, previews, and operator-approval packages that have not been promoted.

## 3. Authority Rules

1. Moving a file into `.local-intake/` does not promote it into repository authority.
2. A file in `.local-output/` or `.local-review/` is not an approved deliverable merely because a tool created it.
3. Repository promotion requires the applicable authority, bounded task, validation, and review process.
4. Exact-byte work must use the actual mapped local file, not copied chat text, regenerated Markdown, rendered content, or normalized text.
5. The task or work order must identify the authoritative source and its exact local path before byte-level processing begins.

## 4. Security and Customer-Data Boundary

Ignored staging directories reduce accidental Git inclusion; they do not create permission to store sensitive material.

Do not place any of the following into a staging directory unless a separately authorized process defines access, retention, encryption, and deletion:

- customer credentials or tokens;
- raw Home Assistant backups;
- private keys or certificates;
- payment information;
- unredacted customer exports;
- private camera or network information;
- secrets, passwords, or environment files.

Before any Git operation, verify that staged local material remains ignored.

## 5. Provisioning Command

From the WNYHS repository:

```powershell
pwsh -NoProfile -File .\scripts\repository\provision-local-staging.ps1 -RepositoryPath .
```

For another local repository:

```powershell
pwsh -NoProfile -File "C:\dev\wnyhomesecurity\scripts\repository\provision-local-staging.ps1" -RepositoryPath "C:\dev\<repository-name>"
```

Preview without writing:

```powershell
pwsh -NoProfile -File .\scripts\repository\provision-local-staging.ps1 -RepositoryPath . -WhatIf
```

The script:

- requires an existing Git working tree;
- accepts paths containing spaces;
- creates only missing staging directories;
- appends only missing `.gitignore` entries;
- preserves existing `.gitignore` content;
- is safe to run repeatedly; and
- supports PowerShell `-WhatIf`.

## 6. Standard Transfer Workflow

```text
Identify authoritative source
→ make the exact source locally accessible
→ place it in .local-intake/
→ verify the exact Windows path
→ execute the bounded task
→ write unapproved outputs to .local-output/
→ place review artifacts in .local-review/
→ validate and obtain approval
→ promote only authorized artifacts into tracked repository paths
```

## 7. Required Prechecks

Before local execution:

1. Confirm the repository identity.
2. Confirm the controlling context and task authorization.
3. Confirm the authoritative input source.
4. Confirm the exact local path.
5. Confirm staging directories are ignored by Git.
6. Confirm no existing file will be overwritten without authorization.
7. Confirm protected systems and forbidden scope.

## 8. Validation

Use:

```powershell
git check-ignore .local-intake .local-output .local-review
git status --short
```

The three directories must be ignored, and their contents must not appear as tracked or untracked Git changes.

For exact copies or fingerprints, independently verify the source and output bytes using the method required by the controlling task.

## 9. Failure and Stop Conditions

Stop when:

- the authoritative source cannot be located;
- only copied or regenerated text is available for an exact-byte task;
- the local path is ambiguous;
- a staging path is occupied by a non-directory item;
- the target is not a Git working tree;
- `.gitignore` cannot be updated without overwriting existing content;
- sensitive-data handling is not authorized; or
- promotion authority is missing.

Report the exact blocker. Do not substitute another source silently.

## 10. Relationship to Worktrees

These staging directories solve file intake, output, and review. They do not replace Git worktrees.

A permanent or task-specific worktree may be used only when separately justified and authorized. Creating another worktree does not automatically mount ChatGPT cloud attachments or `/mnt/data` paths.

## 11. Repository Bootstrap Requirement

Future WNYHS repository bootstraps should invoke this process or an approved successor so that every engineering repository receives a deterministic local intake, output, and review boundary.
