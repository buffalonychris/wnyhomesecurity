# OPS009 Codex Workflow and RSI Governance REV01

Task ID: OPS009
Status: Active governance standard after merge
Customer-facing: No
Implementation authority: No
Controlling Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

## 1. Purpose

This document records the WNYHS Codex workflow and recursive self-improvement governance lessons from the DESIGN, VISUALFREEZE, and VISPARITY009 through VISPARITY015 execution series.

This is workflow governance only. It does not authorize source, route, runtime, public copy, visual implementation, theme implementation, installer implementation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependencies, package-lock, assets, hooks, automation, or merge behavior.

## 2. Working Model

The WNYHS execution model has five surfaces:

- **Operator/user:** decides priority, approves prompts, reviews outcomes, manually merges PRs, and manually verifies deployments.
- **ChatGPT execution dispatcher:** reviews Codex summaries and PRs, inspects GitHub PR metadata/diff/changed files when available, gives approve/hold guidance, and prepares the next bounded prompt.
- **Codex implementation technician:** executes only the assigned bounded work order, follows repository authority, opens draft PRs, and reports validation and protected-system status.
- **GitHub PR review surface:** provides the diff, checks, review comments, and final manual merge surface.
- **Cloudflare/deployment review surface:** provides deployment outcome and production verification evidence when a task affects the deployed site.

The operator remains the final priority, merge, and deployment-readiness authority. ChatGPT may recommend merge or hold, but does not merge. Codex must not invent business priority, expand scope, merge PRs, mark draft PRs ready, bypass owner docs, or treat access to tools as authorization.

## 3. Operator Responsibilities

The operator should run one Codex prompt at a time.

The next prompt should wait until the prior PR is reviewed, approved when appropriate, merged manually, deployed manually when applicable, and local `main` is intended to be synced.

The operator should provide ChatGPT the Codex completion summary and report any GitHub, deployment, validation, or production drift back into chat before the next bounded prompt is dispatched.

## 4. ChatGPT Responsibilities

ChatGPT should:

- review the Codex completion summary for scope compliance, validation evidence, protected-system compliance, context efficiency, and prompt-improvement lessons
- use GitHub PR access, when available, to inspect PR metadata, diff, and changed files before recommending merge
- provide an approve/hold recommendation and the PR merge link only when review posture is safe
- create the next bounded Codex prompt only after the prior PR review posture supports continuing
- keep prompts efficient by referencing repository docs instead of restating stable governance
- enforce protected-system, claims, scope, and owner-document boundaries

ChatGPT must not create product strategy, roadmap direction, merge approval authority, deployment approval authority, or task scope beyond the operator-approved bounded work order.

## 5. Codex Responsibilities

Codex must:

- follow the active work order and repository authority chain
- confirm the current operational context and task authorization before edits
- keep file scope bounded
- avoid scope expansion and unrelated cleanup
- preserve copy, routes, assets, runtime, protected systems, and public behavior unless explicitly authorized
- open draft PRs only
- report changed files, validation, protected-system status, RSI/context-efficiency findings, and token/context usage categories when available

For docs-only governance tasks, Codex must not bump the public site version unless the bounded task explicitly requires it.

## 6. GitHub / Codex Access Assumptions

This workflow assumes:

- ChatGPT has GitHub PR review access for inspecting PR metadata, diffs, and changed files when the operator asks for review.
- Codex has local repository access.
- Codex may have GitHub CLI and PR creation ability when locally authenticated.
- The operator remains final merge and deployment authority.
- PR links are the review and merge control surface.

If GitHub CLI auth, network access, or PR creation fails, Codex should report the failure and leave the branch/commit state clear.

## 7. Windows Codex Hooks

Windows Codex hooks are available as workflow helpers where they reduce repeated manual checks.

Appropriate hook candidates include:

- branch creation
- staging
- commit creation
- push
- PR creation
- validation wrappers
- status checks

Hooks must not bypass governance, protected-system review, validation, operator approval, or PR review. Hooks are helpers for repeatable mechanics, not authority to create tasks, mark tasks complete, approve reviews, merge PRs, deploy, change protected systems, expose secrets, or expand scope.

## 8. Lightweight Prerequisite Verification

The operator handoff assumption is that the next prompt is only run after the prior PR is approved, merged manually, deployed if applicable, and local `main` is intended to be synced.

Under that assumption, future Codex runs should normally use lightweight prerequisite verification:

```powershell
git status --short
git switch main
git pull --ff-only origin main
git switch -c <task-branch>
```

Extended prerequisite investigation should be reserved for these cases:

- lightweight checks fail
- branch or `main` state is ambiguous
- the prompt explicitly requires extended verification
- repository state conflicts with the operator handoff
- GitHub, PR, merge, or deployment facts are missing or disputed

## 9. Targeted Read Policy

Before OPS009 is merged, the current `CODEX_RUN_CONTRACT.md` full-read behavior remains authoritative.

After OPS009 is merged and the run contract points to this policy, targeted reads are allowed only when all conditions are true:

- higher-authority governance does not require a full-file read
- the active task is bounded and names the relevant task ID or owner document
- the relevant large file can be searched precisely with `rg` or equivalent
- targeted search finds the required section
- Codex reports the targeted-read approach in the closeout

Use targeted Master Task Register reads around relevant task IDs and Active Tasks. Avoid full Master Task Register reads unless targeted search fails, task status is ambiguous, or the active run contract still explicitly requires a full read.

Prefer targeted owner-doc sections when the required section is known. Large catalogs, manifests, and inventories should be loaded only when materially needed, required by the current contract, or relevant to the active task.

Targeted reads do not weaken authority. If context efficiency conflicts with governance, governance wins.

## 10. Missing-Task Handling

If a bounded prompt-created work order is permitted by higher-authority governance but the Master Task Register does not yet contain the task, Codex may add a bounded tracking record for that task only.

Codex must not stop solely because the task is missing when the prompt explicitly authorizes adding the missing task record and higher-authority governance permits prompt-created bounded work orders.

Codex must not add unrelated tasks, activate adjacent tasks, mark unrelated tasks done, or infer a roadmap sequence from the missing-task record. The status must reflect the actual work state.

## 11. RSI / Context Efficiency Report

Codex closeouts should include an RSI / Context Efficiency Report with:

- essential docs loaded
- unnecessary or redundant docs loaded
- context pressure: low, medium, or high
- targeted-read opportunities
- prompt-shortening recommendations
- chat-derived context promoted into repository docs
- recommended next prompt pattern

RSI means recursive self-improvement for the execution workflow. RSI findings are candidates for future governance improvement unless the active task explicitly promotes them into repository docs.

## 12. Codex Token / Context Usage Categories

When available, Codex should report token/context usage by category:

- prompt payload size
- governance overhead
- docs loaded
- redundant reads
- repeated governance text
- high-volume manifests/catalogs
- diff size
- validation output volume
- tool-call volume
- avoidable context churn
- opportunities for hooks/scripts
- recommended compression for the next prompt

The repository does not need to store every token count unless a bounded task explicitly requests a durable audit record.

## 13. Semantic Token / Visual Governance Reporting

For future visual work, Codex should report:

- semantic token adoption quality
- whether raw hex values were added
- whether raw hex values are pre-existing
- whether components consume semantic variables
- whether theme swapping remains possible
- whether component styles are tied to tokens instead of page-specific hardcoded colors
- redundant token aliases or consolidation opportunities

This reporting does not authorize visual implementation. It is a closeout requirement for visual tasks that are otherwise authorized.

## 14. Theme Readiness Reporting

Future THEME tasks should be separate from VISPARITY tasks unless a bounded work order explicitly combines them.

For visual work, Codex should report:

- whether changes remain theme-ready
- whether theme switching could be implemented by swapping token values
- whether new styles would block dark mode or seasonal themes
- whether a future THEME task should be created

Theme-readiness reporting is not permission to create THEME tasks or implement theme switching.

## 15. Future Workstreams

After VISPARITY015:

- OPS009 is the workflow governance update.
- INSTALL workstream is the likely next implementation focus.
- THEME workstream is deferred until after installer/dashboard priorities unless the operator chooses otherwise.

Possible future planning notes only:

- INSTALL001 - Installer Platform Architecture
- INSTALL002 - Golden Home Assistant Build
- INSTALL003 - Device Naming Standard
- INSTALL004 - Entity & Area Standards
- INSTALL005 - Dashboard Architecture
- THEME001 - Theme Architecture Standard
- THEME002 - Dark Mode Theme

These are not active implementation tasks until separately authorized by the current operational context and Master Task Register or a permitted bounded prompt-created work order.

## 16. Closeout Standard Additions

OPS009 closeouts and future governance closeouts should explicitly confirm:

- one bounded task only
- docs/governance-only when applicable
- no source, runtime, style, route, page copy, public asset, dependency, package-lock, Cloudflare config, HubSpot, Stripe/payment, scheduling, or Resend/email changes unless explicitly authorized
- build and validation results
- final git status
- draft PR link when created
