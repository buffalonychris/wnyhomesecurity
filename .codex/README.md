# WNYHS Repo-Local Codex Hooks

Status: Repo-local hook implementation notes
Task ID: KAOS-HOOK005
Customer-facing: No

## Purpose

This `.codex/` area contains the first WNYHS repo-local Codex advisory hook implementation:

- `KAOS-HOOK-ARTIFACT-AUTHORITY-001` - Candidate artifact authority-boundary check

The hook is intended to help operators notice candidate-artifact documents or registers that may lack clear authority-boundary labels.

## Advisory-Only Behavior

The hook is advisory-only and non-blocking.

It does not:

- approve candidate artifacts
- promote repository authority
- grant implementation authority
- create an Active KAOS Rule
- rewrite files
- activate tasks
- deny, block, or enforce tool use

The hook emits an advisory system message only when candidate-artifact paths visible in Codex hook input appear to need review.

## Configuration

Configuration file:

- `.codex/hooks.json`

Hook script:

- `.codex/hooks/artifact_authority_advisory.py`

Configured event and matcher:

- Event: `PostToolUse`
- Matcher: `Bash`

The first implementation uses the safest single matcher. It may not inspect every edit surface if the active Codex platform exposes `apply_patch`, `Edit`, or `Write` under different matcher names.

## Windows Command

The configured Windows command is:

```text
py -3 .codex/hooks/artifact_authority_advisory.py
```

The hook is repo-local and does not depend on Desktop, Downloads, temp folders, hidden user folders, network access, or shared hook utilities.

## Trust Review

After merge, the operator must run Codex in this repository and use:

```text
/hooks
```

to review and trust the repo-local hook before it can run as trusted.

This PR does not claim the hook is trusted or active. Any script or configuration change requires renewed `/hooks` trust review.

## Disable or Roll Back

To disable the hook, remove or comment out the `PostToolUse` entry in `.codex/hooks.json`, then run Codex `/hooks` again to review the changed hook state.

To roll back the implementation, revert the bounded KAOS-HOOK005 commit or remove only:

- `.codex/hooks.json`
- `.codex/hooks/artifact_authority_advisory.py`
- `.codex/README.md`

Do not add blocking behavior without a later bounded task and explicit operator approval.
