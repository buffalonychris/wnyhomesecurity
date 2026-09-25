# TEST-RUNNER-FIX001 — Vitest Collection and Operator Navbar Baseline Correction

**Revision:** REV02  
**Status:** OPERATOR-AUTHORIZED FOR EXECUTION  
**Supersedes:** `docs/codex/work-orders/TEST-RUNNER-FIX001_WORK_ORDER_REV01.md` for execution  
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01  
**Repository:** buffalonychris/wnyhomesecurity  
**Local Repo:** C:\dev\wnyhomesecurity  
**Expected Branch:** codex/test-runner-fix001-vitest-baseline  
**Task Type:** QA / test-infrastructure baseline correction only  
**Category:** QA  
**Primary Workstream:** Project Governance  
**Related Workstreams:** Site Architecture; Infrastructure / Deployment System

READ MODE: TARGETED  
Search exact IDs/headings first; load only applicable authority and owner sections.

## 1. Objective

Restore the repository-wide Vitest validation command to the intended Vitest test surface and correct stale operator-navbar test expectations that already fail on clean `main`.

This task exists only to remove pre-existing validation blockers discovered during LEAD-FIX002.

It does not authorize any production/runtime behavior change.

## 2. Authorization and required precheck

Operator authorization is granted for this bounded QA correction.

Before implementation:

1. Confirm working tree is clean.
2. Confirm current branch is `main`.
3. Confirm `HEAD == origin/main`.
4. Confirm merge commit `4959b282da7f12f137934309111c743f15069064` is an ancestor of current `main` or current `main` is exactly that commit.
5. Create and switch to:
   `codex/test-runner-fix001-vitest-baseline`
6. Confirm current context remains `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`.
7. If `TEST-RUNNER-FIX001` is absent from the MTR, add it as `ACTIVE` using the current full MTR schema before implementation.
8. If it exists as `READY`, promote only this task to `ACTIVE`.
9. If it already exists as `ACTIVE`, continue.
10. If higher-authority governance conflicts with this REV02 work order, STOP and report the conflict.

## 3. Required authority / owner documents

Load only the minimum applicable sections from:

- `AGENTS.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV02.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md` only for the registered `Project Governance` workstream definition and routing table
- this REV02 work order
- `package.json`
- `vite.config.ts`
- `playwright.config.*` if present
- `src/pages/__tests__/operatorNavbar.test.tsx`
- only the current route/navbar production source needed to establish stable current test expectations

Do not broadly hydrate unrelated governance, historical task, runtime, CRM, payment, or site documents.

## 4. Clean-main verification basis

Clean-main evidence established before this REV02 work order:

1. `package.json` defines:
   - `test`: `vitest`
   - `qa:site`: `playwright test`
2. `vite.config.ts` configures Vitest without explicitly excluding `tests/site-qa/**`.
3. `tests/site-qa/**` is a separate Playwright QA tree.
4. The exact marketing-copy expectations in `src/pages/__tests__/operatorNavbar.test.tsx` exist in the test but not in current application source on clean `main`.
5. LEAD-FIX002 focused tests pass; the baseline failures are outside the LEAD-FIX002 changed surface.

## 5. Operator-approved Owner Routing Matrix

| Approved concept | Current canonical owner | Exact target file | Section / target behavior | Action | Reason owner is correct | Why not another plausible owner | Authority conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Vitest must not collect Playwright site-QA suites | Repository test-runner configuration | `vite.config.ts` | `test` configuration / collection boundary | MODIFY | This file currently owns Vitest configuration for the repo | `package.json` only invokes the runner; Playwright config owns Playwright execution, not Vitest collection | NO | HIGH |
| Preserve separate Playwright ownership of `tests/site-qa/**` | Existing Playwright QA configuration | `playwright.config.*` if present | Test discovery only | REFERENCE ONLY | Playwright already owns the site-QA suite | Vitest config must exclude this tree rather than rewriting Playwright tests | NO | HIGH |
| Correct stale operator-navbar assertions | Existing test owner | `src/pages/__tests__/operatorNavbar.test.tsx` | Route/navbar expectations | MODIFY | The defect is stale test expectation, not production behavior | Production route/navbar source must not be changed merely to satisfy stale tests | NO | HIGH |
| Establish current route/navbar semantics for replacement assertions | Production route/navbar source | Exact current source discovered by targeted search | Current intended behavior only | REFERENCE ONLY | Current production behavior is the evidence source for test semantics | This QA task does not authorize production route/navbar implementation changes | NO | HIGH |
| Register task and validation evidence | Project Governance | `docs/system/master-task-register.md`; `docs/audits/test_runner_fix001_implementation_rev01.md` | Task lifecycle / audit evidence | MODIFY / CREATE | MTR and audit are the canonical execution/evidence surfaces | No other task or audit owner should be used for this bounded task | NO | HIGH |

Operator approval: this Owner Routing Matrix is approved as part of REV02. Codex may narrow a target to `REFERENCE ONLY` if current evidence shows no edit is required, but may not silently add a new implementation owner. A newly required implementation target outside this matrix requires a work-order revision and STOP.

## 6. Required work

### A. Vitest / Playwright collection boundary

Correct Vitest configuration so:

`npm test -- --run`

does not collect:

`tests/site-qa/**`

Requirements:

- preserve Vitest's normal/default exclusion behavior;
- explicitly exclude the Playwright site-QA tree;
- do not disable legitimate Vitest tests;
- do not move or delete Playwright tests;
- do not convert Playwright tests to Vitest;
- do not alter Playwright QA behavior solely to satisfy Vitest;
- if custom Vitest `exclude` replaces framework defaults, preserve the defaults using the supported Vitest configuration mechanism.

### B. Operator-navbar baseline tests

Correct only stale assertions in:

`src/pages/__tests__/operatorNavbar.test.tsx`

Requirements:

- validate actual intended routing/navbar behavior;
- prefer stable semantic selectors or route-specific behavior over brittle marketing-copy assertions;
- preserve the core assertion that operator navigation appears where intended and does not leak onto customer/public routes;
- do not change production source merely to make tests pass;
- inspect current source first.

### C. Package scripts

Do not rename or repurpose:

- `npm test`
- `npm run qa:site`

Change `package.json` only if strictly required. Prefer the existing runner configuration owner.

## 7. Allowed scope / target files

Implementation edits are limited to:

- `docs/system/master-task-register.md`
- `vite.config.ts`
- `src/pages/__tests__/operatorNavbar.test.tsx`
- `package.json` only if strictly required and justified
- one test-only config file only if current architecture clearly requires it
- `docs/audits/test_runner_fix001_implementation_rev01.md`

Reference-only:

- `playwright.config.*`
- current production route/navbar source
- LEAD-FIX002 PR #584 and its audit only as evidence of the initiating blocker

## 8. Forbidden scope / protected systems

Do not modify:

- production route behavior;
- production navbar/components merely to satisfy tests;
- lead-signal code;
- any LEAD-FIX002 runtime implementation file;
- Stripe/payment;
- HubSpot/CRM;
- scheduling/calendar;
- Resend/email runtime;
- QR attribution;
- requestId behavior;
- pricing/packages;
- visual styling/tokens;
- public customer copy;
- Cloudflare/runtime configuration;
- environment variables/secrets;
- dependencies/package lock unless separately authorized;
- Playwright site-QA test behavior beyond proving runner ownership;
- unrelated failing tests;
- unrelated refactors.

Do not merge.
Do not deploy.

## 9. Additive / destructive posture and version rule

Posture: minimal corrective QA change.

- no destructive deletion of test suites;
- no production feature change;
- no dependency churn;
- no route/copy/runtime rewrite;
- preserve existing test families and their intended runner ownership.

Site/runtime version bump: NOT APPLICABLE unless the current repository delivery standard explicitly requires a visible version change for a test-only/config-only correction. If such a rule is found, report it before modifying version files.

## 10. Validation

Validation Tier: QA

### Before-change reproduction

On the task branch before implementation, reproduce the baseline failure if practical:

```
npm test -- --run
```

Record the failure signature only; do not expand scope to unrelated defects.

### After-change required checks

Run:

```
npm test -- --run
npm run typecheck:test
npm run build
git diff --check
```

Prove Playwright ownership remains intact using the lightest supported discovery command, preferably:

```
npm run qa:site -- --list
```

or the equivalent supported Playwright list command.

Also inspect:

```
git status --short
git diff --name-only main...HEAD
rg -n "<<<<<<<|=======|>>>>>>>" vite.config.ts src/pages/__tests__/operatorNavbar.test.tsx docs/system/master-task-register.md docs/audits/test_runner_fix001_implementation_rev01.md
```

Required result:

- Vitest does not collect `tests/site-qa/**`;
- Playwright still discovers the site-QA suites;
- operator-navbar tests pass;
- repository-wide `npm test -- --run` passes unless a different unrelated baseline defect is discovered;
- `npm run typecheck:test` passes;
- `npm run build` passes;
- `git diff --check` passes.

If another unrelated baseline failure appears:
- do not expand scope;
- report it;
- leave this task truthfully BLOCKED/PARTIAL according to current lifecycle rules.

## 11. Git / branch / commit / draft-PR requirements

Use exactly one implementation branch:

`codex/test-runner-fix001-vitest-baseline`

Do not reuse another task branch.

After successful bounded implementation and validation:

1. commit only TEST-RUNNER-FIX001 files;
2. push the branch;
3. open one DRAFT PR to `main` if GitHub auth permits.

Preferred PR title:

`TEST-RUNNER-FIX001 - Restore Vitest validation baseline`

Do not merge.
Do not deploy.

## 12. Required audit / MTR evidence

Create:

`docs/audits/test_runner_fix001_implementation_rev01.md`

Record:

- initiating LEAD-FIX002 blocker;
- clean-main baseline evidence;
- exact Vitest collection defect;
- exact stale operator-navbar assertions;
- before/after validation;
- exact files changed;
- confirmation no production/runtime source changed;
- confirmation Playwright ownership remains intact;
- confirmation LEAD-FIX002 runtime implementation remained untouched;
- any remaining unrelated baseline failure.

MTR minimum identity:

- Task ID: `TEST-RUNNER-FIX001`
- Task Name: `Vitest Collection and Operator Navbar Baseline Correction`
- Status during implementation: `ACTIVE`
- Category: `QA`
- Controlling Context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`
- Primary Workstream: `Project Governance`
- Related Workstreams: `Site Architecture; Infrastructure / Deployment System`

Use the current complete MTR schema. Do not omit required lifecycle/evidence fields; use explicit pending/not-applicable values where evidence does not yet exist.

## 13. Required closeout and RSI report

Final Codex summary must include:

1. task status;
2. branch;
3. commit SHA;
4. draft PR number/URL;
5. exact files changed;
6. clean-main failure signature;
7. Vitest collection correction;
8. operator-navbar test correction;
9. full `npm test -- --run` result;
10. Playwright discovery result;
11. typecheck:test/build/diff-check results;
12. confirmation production/runtime source untouched;
13. confirmation LEAD-FIX002 runtime files untouched;
14. protected-system confirmation;
15. any remaining unrelated blocker;
16. OPS004 routing confirmation;
17. Context Efficiency / RSI report:
   - essential reads;
   - redundant reads;
   - retries/failed commands;
   - context pressure;
   - one concrete prompt/work-order improvement if applicable.

## 14. Stop conditions

STOP without implementation if:

- Primary Workstream `Project Governance` is not registered in current OPS004;
- current context conflicts;
- MTR/task lifecycle conflicts;
- a required target falls outside the approved Owner Routing Matrix;
- a production/runtime source change becomes necessary;
- dependency/package-lock modification becomes necessary;
- protected-system scope becomes implicated;
- a new implementation owner is required;
- working tree or branch state is unsafe.

STOP after the bounded task is validated, committed, pushed, and draft PR is created.

## 15. Exit criteria

Complete only when:

1. `npm test -- --run` no longer collects `tests/site-qa/**`;
2. Playwright still owns/discovers `tests/site-qa/**`;
3. operator-navbar tests pass using stable current semantics;
4. no production runtime source was changed to satisfy tests;
5. `npm run typecheck:test` passes;
6. `npm run build` passes;
7. `git diff --check` passes;
8. audit and MTR evidence are truthful;
9. one task branch is committed/pushed;
10. one DRAFT PR to `main` is created if GitHub auth permits;
11. no merge/deployment occurs.

STOP after TEST-RUNNER-FIX001.
