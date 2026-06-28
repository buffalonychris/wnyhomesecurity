# Codex Windows Hook Runtime Standard REV01

Status: Governance runtime standard
Task ID: KAOS-HOOK002
Customer-facing: No
Implementation authority: No

## 1. Purpose

This standard defines the Windows-aware runtime rules for future Codex hook work in the WNYHS repository.

It documents hook locations, configuration boundaries, Windows command requirements, trust review, advisory-first behavior, safe path rules, and future implementation constraints before any hook scripts or Codex hook configuration are created.

This document does not implement hooks, create `.codex/`, create `hooks.json`, create `config.toml`, create scripts, approve enforcement, activate automation, or make any hook blocking.

## 2. Authority Boundary

This standard sits below the current repository authority chain:

- `/docs/system/project.md`
- `/docs/system/guardrails.md`
- `/docs/system/agent.md`
- `/docs/system/plan.md`
- `/docs/system/step-current.md`
- `/docs/system/master-task-register.md`
- `/docs/codex/CODEX_RUN_CONTRACT.md`
- `/docs/kaos/HOOK001_KAOS_HOOK_SUBSCRIPTION_ARCHITECTURE_REV01.md`
- `/docs/kaos/HOOKCAT001_KAOS_HOOK_CATALOG_REV01.md`
- `/docs/kaos/hooks/HOOK_LIFECYCLE_STANDARD_REV01.md`
- `/docs/kaos/hooks/HOOK_CANDIDATE_REGISTRY.md`

If this standard conflicts with higher-authority repository governance, protected-system contracts, active task scope, Codex platform requirements, or an explicit operator decision, the higher-authority source controls.

## 3. Repo-Local Hook Location

WNYHS-specific Codex hooks should live under the repository-local hook area:

```text
C:\dev\wnyhomesecurity\.codex\
```

Repo-local hooks are preferred for WNYHS-specific rules because they keep hook behavior close to the repository governance, task records, owner docs, validation evidence, and branch/PR review history they evaluate.

Future implementation tasks may create this directory only when explicitly authorized. This task does not create it.

## 4. Shared Hook Utility Location

Reusable cross-project hook utilities may live under:

```text
C:\dev\codex\
```

Use the shared location only for utilities that are intentionally reusable across projects and are not WNYHS-specific policy, task, or protected-system logic.

Shared utilities must not become a hidden path for bypassing WNYHS task scope, trust review, or repository governance. WNYHS-specific configuration should remain repo-local unless a future bounded task explicitly approves otherwise.

## 5. Prohibited Hook Locations

Future WNYHS hook implementations must not run from or depend on:

- Downloads folders
- Desktop folders
- random temp folders
- ad hoc scratch directories
- hidden user folders unless the Codex platform requires that location
- paths outside a reviewed repository-local or approved shared utility location

Hooks must use stable, reviewable paths so operators can inspect what will run before trusting it.

## 6. Configuration Locations

Allowed future repo-local configuration locations are:

- `.codex/hooks.json`
- `.codex/config.toml`

Prefer one representation per layer. Do not duplicate the same hook definition in both files unless a future Codex platform requirement or bounded migration task explicitly requires it.

Configuration files must remain reviewed, committed, and trust-reviewed before use. This standard does not create either file.

## 7. Windows Command Requirements

Future hook definitions must be Windows-aware.

When declaring platform-specific commands, use the Codex-supported Windows command field expected by the active platform version:

- `commandWindows`
- `command_windows`

Prefer:

```text
py -3
```

for Python entrypoints on Windows unless the future implementation task documents a safer project-local runtime.

Future hook commands must avoid:

- Linux-only absolute paths
- shell assumptions that only work on macOS/Linux
- unreviewed user-profile paths
- path separators or quoting that fail under Windows shells
- network-dependent command startup unless explicitly authorized

Where practical, hook commands should resolve paths relative to the git root rather than relying on the current working directory.

## 8. Safe Path Rules

Hook implementations must use stable path resolution:

- Resolve the repository root with git-root-stable logic when possible.
- Treat hook paths as literals instead of constructing destructive commands from untrusted strings.
- Keep generated or temporary files inside approved workspace locations.
- Never recursively delete or move paths unless a future bounded task explicitly authorizes the action and verifies the resolved absolute path is inside the intended workspace.
- Do not read or print secret values, private URLs, token values, or environment variable values.

Hook output may identify environment variable names only when already established in repository contracts. It must not output values.

## 9. Trust Review Requirements

Codex hooks require operator review and trust through the Codex `/hooks` review flow before they run as trusted hooks.

Changed hooks require renewed trust review.

Future hook tasks must document:

- hook file paths
- configuration paths
- command strings
- trigger events
- expected inputs
- expected outputs
- failure behavior
- protected-system sensitivity
- trust-review status
- rollback or disable path

Initial WNYHS hook implementations should be advisory, even after trust review.

## 10. Runtime Behavior Constraints

Future hook specifications and implementations must account for these runtime constraints:

- Multiple matching hooks may run for the same event.
- Matching hooks may run concurrently.
- Hooks cannot be assumed to fully enforce every shell path, tool path, external integration, or manually executed action.
- A `PostToolUse` hook cannot undo side effects that already happened.
- Hook output is not repository authority by itself.
- Hook output must route findings to operator review, task records, or future bounded remediation work instead of silently changing behavior.

Hooks are guardrail aids. They do not replace repository governance, task scope, human review, validation, or protected-system contracts.

## 11. Initial WNYHS Enforcement Posture

WNYHS hook maturity must progress in this order unless a future bounded task explicitly documents a different approved path:

1. Candidate hook
2. Advisory hook
3. Approved hook spec
4. Implemented advisory hook
5. Blocking hook only after explicit operator approval

No candidate, approved spec, or implemented hook may become blocking by implication.

Blocking approval must identify the hook ID, exact blocked action, false-positive handling, operator override path, validation evidence, trust-review status, and rollback/disable procedure.

## 12. Future Implementation Guidance

The first WNYHS hook implementation should be advisory.

Future implementation tasks must not:

- add blocking behavior without explicit operator approval
- store or output secret values
- depend on network access unless explicitly authorized
- run repo-destructive commands
- modify source, runtime, routes, UI, protected systems, dependencies, package-lock, Cloudflare config, or environment files unless separately authorized
- bypass `/api/lead-signal`, HubSpot REV03, Stripe server-side verification, scheduling ownership, or other protected runtime contracts
- treat hook warnings as automatic task approval, copy approval, PR approval, deployment approval, or merge approval

## 13. Prohibited Behavior

This standard must not be used to:

- create `.codex/`
- create hook scripts
- create `hooks.json`
- create `config.toml`
- approve a hook spec
- implement a hook
- enforce a hook
- make any hook blocking
- activate a KAOS rule
- add QA checks
- change source/runtime/UI/routes
- change HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, API, environment, secrets, dependencies, or package-lock

Any future movement from documentation to implementation requires a separate bounded task, allowed files, validation requirements, trust review, and operator approval.
