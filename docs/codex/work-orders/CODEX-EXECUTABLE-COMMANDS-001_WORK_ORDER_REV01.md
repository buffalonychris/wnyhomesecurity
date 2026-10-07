# CODEX-EXECUTABLE-COMMANDS-001 — Establish Codex Executable-Command Posture for Work Orders

Status: ACTIVE
Category: GOVERNANCE
Primary Workstream: Project Governance
Related Workstreams: Context Efficiency; Operator Workflow; RSI
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
Owner: Project Governance / Codex
Implementation Authority: This bounded prompt-created work order only

READ MODE: TARGETED
REASONING POSTURE: ADAPTIVE
EXECUTION POSTURE: DIRECT

- LOW: convergence confirmation, exact searches, deterministic edits, validation, Git, PR evidence, and closeout.
- MEDIUM: interpretation and drafting of the execution-command doctrine.
- HIGH: only if a genuine authority conflict or tool-execution ambiguity changes the governance outcome.
- Return to LOW after drafting or interpretation is resolved.

## 1. Objective

Amend the sole canonical Codex execution standard so future WNYHS work orders distinguish directly executable operations, surface-dependent capabilities, operator-interactive UI controls, and session-control commands. Work orders must prefer deterministic executable operations and report command availability and outcomes truthfully.

## 2. Authorization and precheck

This is one prompt-created, bounded governance task permitted by the current authority chain and GOV002 prompt-created-task gate.

Before editing:

1. confirm the repository is `buffalonychris/wnyhomesecurity` at `C:\Dev\wnyhomesecurity`;
2. confirm `main`, a clean working tree, and local `HEAD` equal to `origin/main` at `e6f802e5b5114062fd3decce235187d5c2b8fffb`;
3. do not perform another sync unless convergence has changed;
4. confirm the exact current context identifier;
5. confirm `Project Governance` routing in OPS004;
6. confirm the task ID is absent before adding its record; and
7. confirm `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` remains the sole active detailed execution owner.

## 3. Required targeted reads

- `docs/system/step-current.md` — exact current context identifier and bounded governance permission.
- `docs/system/master-task-register.md` — GOV002 prompt-created-task gate, applicable Codex governance campaign, and exact task record.
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` §§6, 8, 9, 14, 17, 18, 19, 20, and 21.
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md` — exact `Project Governance` routing and sole-owner boundary only.

Do not broad-read the full Master Task Register, catalog, manifest, superseded standards, historical task docs, or unrelated workstreams unless an actual authority conflict requires it.

## 4. Owner Routing Matrix

| Approved concept | Canonical owner | Action | Reason | Alternate-owner exclusion | Authority conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| Codex executable-command posture for bounded work orders | `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` | MODIFY | Sole active detailed owner for execution surfaces and work-order mechanics | OPS003 owns context efficiency; Skills and Project KB do not become execution owners; UI capability is not repository authority; historical standards remain lineage | None unless targeted verification proves otherwise | HIGH |

## 5. Required work

1. Add a concise execution-command doctrine to the canonical standard.
2. Define directly executable/preferred, surface-dependent/conditional, operator-interactive/UI, and session-control command classes.
3. Add the deterministic-operation preference order, command-truthfulness states, and failure/fallback rule.
4. Keep reasoning posture independent from execution posture.
5. Add `EXECUTION POSTURE: [DIRECT | MIXED | OPERATOR-MEDIATED]` near the existing read-mode and reasoning-posture fields.
6. Require exact handoff points and justification for `MIXED` and `OPERATOR-MEDIATED` work orders.
7. Update only the exact matching Master Task Register record from `ACTIVE` to `DONE` after validation and draft-PR delivery.

## 6. Command classes

### Directly executable / preferred

Authorized and available shell, Git, targeted-search, PowerShell, Bash, Node, npm, Python, repository-script, authenticated GitHub CLI, MCP/tool, browser/application automation, build, test, lint, typecheck, and validation operations may be normal work-order primitives. Examples are illustrative, never an unrestricted authorization list.

### Surface-dependent / conditional

A capability exposed only by a particular client, CLI version, desktop app, terminal, plugin, MCP, or environment may be used only when it is actually exposed, task-authorized, verifiable, and does not conceal an operator selection.

### Operator-interactive / UI

Slash commands or controls that open selectors, menus, configuration panels, dialogs, or other operator-choice surfaces are handoffs or capability checks, not assumed autonomous operations. They must not replace an appropriate deterministic executable equivalent.

### Session control

Commands that affect session state, conversation structure, context, worktrees, background terminals, or agent surfaces are operational controls separate from repository execution. They do not create authority, expand scope, or change protected-system permissions.

Do not encode the complete current slash-command inventory or current UI keyboard shortcuts in durable governance.

## 7. Preference and truthfulness rules

Prefer, in order:

1. deterministic executable CLI/tool operation;
2. repository-owned script;
3. authenticated authorized tool/MCP/API action;
4. verified surface-dependent direct command; and
5. operator-interactive UI handoff only when no appropriate autonomous mechanism exists.

Distinguish `requested`, `available`, `executed`, `succeeded`, `failed`, `skipped`, and `required operator interaction`. A phase marker, textual intention, opened menu, or suggested slash command is not execution evidence.

## 8. Work-order template change

```text
READ MODE: TARGETED

REASONING POSTURE: [STANDARD | ADAPTIVE | ELEVATED]

EXECUTION POSTURE: [DIRECT | MIXED | OPERATOR-MEDIATED]

For MIXED / OPERATOR-MEDIATED:
- identify exact operator/surface handoffs
- identify why direct execution is unavailable or inappropriate
```

- `READ MODE` controls context breadth.
- `REASONING POSTURE` controls reasoning depth.
- `EXECUTION POSTURE` controls how actions are performed.
- Default execution posture is `DIRECT` unless task requirements prove otherwise.

## 9. Reasoning integration

Reasoning and execution postures remain independent. LOW, MEDIUM, or HIGH reasoning may accompany DIRECT execution when justified. A MIXED execution posture does not itself require higher reasoning, and interactive controls must not be equated with reasoning depth.

## 10. Failure and fallback

If a planned executable command is unavailable:

1. verify the limitation once;
2. use an approved equivalent that preserves scope and evidence;
3. use an operator handoff only when necessary; and
4. stop when no safe equivalent exists.

Never silently replace a deterministic operation with destructive action, broad automation, or a UI action.

## 11. Exact file allowlist

The final PR may contain only:

1. `docs/codex/work-orders/CODEX-EXECUTABLE-COMMANDS-001_WORK_ORDER_REV01.md`
2. `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
3. `docs/system/master-task-register.md`

If another file appears necessary, stop and request work-order revision.

## 12. Forbidden scope and protected systems

Do not:

- edit OPS003, `AGENTS.md`, Skills, Project KB, historical/superseded Codex standards, or any file outside the allowlist;
- create a separate command standard or duplicate execution owner;
- hard-code the complete current slash-command inventory, current UI keyboard shortcuts, or a model-specific name;
- assume an operator selector or menu is autonomous;
- change source/runtime/application files, website behavior, Home Assistant, Cloudflare, CRM/payment/scheduling/email, dependencies, package-lock, environment, secrets, or customer data;
- reset, prune, delete branches, merge, deploy, enable auto-merge, or mark the draft PR ready.

## 13. Change posture and version

Additive, surgical governance amendment only. No site version bump applies because this is documentation-only governance work.

## 14. Validation

Governance/docs-only checks:

1. confirm starting convergence and exact current context;
2. confirm the exact three-file allowlist and zero deleted files;
3. confirm exactly one task record and update it to `DONE` only after validation and draft-PR delivery;
4. confirm the canonical standard remains the sole active detailed execution owner;
5. confirm read mode, reasoning posture, and execution posture are explicitly distinct;
6. confirm `DIRECT` is the normal default;
7. confirm surface/UI controls are never treated as automatically executable;
8. confirm command truthfulness and failure/fallback rules exist;
9. confirm no complete slash-command inventory, model-specific name, keyboard shortcut, or duplicate owner was introduced;
10. run `git diff --check` and changed-file/deletion audits; and
11. record the governed docs-only build skip under §16 because no source or build configuration changes.

## 15. Git and delivery

- Use branch `codex/codex-executable-commands-001`.
- Commit and push only the authorized files.
- Open one draft PR to `main`.
- Do not merge, deploy, enable auto-merge, or mark ready for review.

## 16. Required closeout

Report branch, commits, draft PR, exact files and canonical sections changed, doctrine and template result, validation, protected-system confirmation, slash-command/UI inventory boundary, actual reasoning and execution posture, operator handoffs, RSI/context-efficiency notes, and no merge/deployment.

## 17. Stop conditions and exit criteria

Stop for any authority conflict, changed convergence before branch creation, out-of-allowlist requirement, protected-system ambiguity, destructive requirement, secret risk, or inability to validate truthfully.

Exit only when the doctrine and template field are present in the canonical owner, the exact task record is `DONE`, validation passes, only the three allowed files changed, commits are pushed, and one draft PR is open without merge or deployment.
