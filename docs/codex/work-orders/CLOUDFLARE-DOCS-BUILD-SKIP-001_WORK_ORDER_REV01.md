# CLOUDFLARE-DOCS-BUILD-SKIP-001 — Skip Cloudflare Pages Builds for Docs-Only Changes

**Revision:** REV01
**Status:** PREPARED — NOT DISPATCHED OR EXECUTED
**Category:** DEPLOYMENT / CLOUDFLARE / WORKFLOW
**Primary Workstream:** Deployment / Cloudflare
**Related Workstreams:** Project Governance; Codex Execution; Dashboard / Interactive Experience System
**Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01

**READ MODE:** TARGETED
**REASONING POSTURE:** STANDARD
**EXECUTION POSTURE:** DIRECT, with OPERATOR-MEDIATED fallback only if no authorized Cloudflare interface exists

---

## 1. Objective

Stop unnecessary Cloudflare Pages builds/deployments for repository changes that are documentation/governance-only, while preserving automatic preview and production deployment for actual site/runtime changes.

Implement the smallest safe rule:

- retain Cloudflare Pages Git integration;
- retain automatic production deployments for `main`;
- retain automatic preview deployments for eligible branches;
- retain `path_includes = ["*"]`;
- change only the Pages Git source build-watch exclusion so `docs/*` does not trigger a Pages build;
- do not broaden the exclusion beyond `docs/*` in REV01.

Expected result:

- a commit/merge whose changed files are entirely under `docs/` produces no Cloudflare Pages build/deployment;
- any commit containing at least one non-`docs/` changed path remains eligible for the existing Cloudflare Pages build/deployment behavior.

This task changes Cloudflare configuration and is therefore protected-system work. The operator has explicitly authorized this bounded workflow change only.

---

## 2. Verified Starting Baseline

Repository synchronized main:

`def276f3b042ceaab8103f1dc2a5c61db6b1e096`

Cloudflare Pages project:

- Account: current authorized WNYHS Cloudflare account
- Project: `wnyhomesecurity`
- Git provider: GitHub
- Repository: `buffalonychris/wnyhomesecurity`
- Production branch: `main`
- Production deployments: enabled
- Preview deployment setting: all
- Preview branch includes: `["*"]`
- Preview branch excludes: `[]`
- Build watch includes: `["*"]`
- Build watch excludes: `[]`
- Build command: `npm run build`
- Destination directory: `dist`

Do not copy, print, store, or expose Cloudflare tokens, analytics tokens, API tokens, secrets, credentials, environment-variable values, or unrelated project configuration.

---

## 3. External Platform Semantics

Cloudflare Pages Build Watch Paths currently evaluates changed paths so that:

1. excluded paths are ignored first;
2. remaining paths are tested against include paths;
3. a build runs when at least one remaining path matches an include rule;
4. otherwise the build is skipped.

The intended configuration for this task is therefore:

- Include paths: `*`
- Exclude paths: `docs/*`

Do not use a broad `*.md` exclusion in REV01 because Markdown outside `docs/` has not been proven non-runtime.

Do not disable production deployments or preview deployments.

---

## 4. Required Pre-Mutation Gate

Before changing Cloudflare:

1. confirm local repository is `C:\dev\wnyhomesecurity`;
2. confirm branch is `main`;
3. confirm working tree is clean;
4. confirm local HEAD equals `origin/main`;
5. confirm starting SHA is the dispatched synchronized SHA;
6. confirm this task is ACTIVE in the Master Task Register;
7. read this work order;
8. read only the Cloudflare/deployment governance required for this bounded change;
9. inspect the current Cloudflare Pages project source configuration;
10. confirm the starting values relevant to this task still match Section 2.

If any relevant Cloudflare value materially differs, stop before mutation and report the drift.

Do not reconstruct unrelated Cloudflare configuration.

---

## 5. Authorized Cloudflare Mutation

Change only the `wnyhomesecurity` Pages project's Git source build-watch exclusion:

**Before**

`path_includes = ["*"]`

`path_excludes = []`

**After**

`path_includes = ["*"]`

`path_excludes = ["docs/*"]`

All other Pages project source/build/deployment settings must remain unchanged.

Preserve at minimum:

- Git repository owner/name;
- production branch;
- production-deployments-enabled state;
- preview-deployment setting;
- preview branch include/exclude controls;
- PR comment posture;
- build command;
- destination directory;
- root directory;
- environment/deployment configuration;
- domains;
- Functions behavior;
- secrets and environment variables.

Do not perform a whole-project rewrite if a narrowly scoped update is supported.

---

## 6. Authorized Repository Changes

This execution may modify only:

1. `docs/system/master-task-register.md` — exact `CLOUDFLARE-DOCS-BUILD-SKIP-001` record for execution state, validation evidence, and closeout.

The work order is already repository-owned before dispatch and must not be edited during execution unless a true execution-blocking defect is found. If such a defect exists, stop and report it rather than silently expanding scope.

No source/runtime file change is authorized.

---

## 7. Validation

After Cloudflare mutation:

### A. Configuration read-back

Read the Pages project configuration again and confirm:

- `path_includes = ["*"]`;
- `path_excludes = ["docs/*"]`;
- production branch remains `main`;
- production deployments remain enabled;
- preview deployment setting remains unchanged;
- preview branch include/exclude settings remain unchanged;
- build command remains `npm run build`;
- destination remains `dist`.

Do not print secret/token values.

### B. Repository closeout proof

Update only the exact MTR record with:

- status DONE;
- changed Cloudflare field;
- before/after build-watch values;
- read-back PASS;
- rollback value;
- protected-system scope confirmation.

Commit and push that docs-only MTR closeout on the execution branch.

Because the only repository change is under `docs/`, use that commit as the first real skipped-build proof.

Confirm after GitHub receives the pushed commit:

- no Cloudflare Pages build/deployment is created for that docs-only commit;
- absence of a Cloudflare check/deployment is interpreted as expected skip behavior only after confirming the configuration read-back;
- do not create a fake source/runtime change merely to test the positive path.

If Cloudflare still builds that docs-only commit, stop and report FAILURE; do not broaden exclusions or disable deployments.

### C. Static safety

Confirm:

- only the exact MTR record changed in the execution commit;
- zero deleted files;
- `git diff --check` passes;
- no source/runtime/package/config file changed;
- no Cloudflare setting other than `path_excludes` changed;
- no secrets were displayed or stored.

---

## 8. Rollback

If the change produces incorrect behavior, rollback is exactly:

`path_excludes = []`

while preserving:

`path_includes = ["*"]`

and all other existing Pages source/build/deployment settings.

Do not use "disable deployments" as rollback.

---

## 9. Explicit Non-Goals

Do not:

- disable Cloudflare Pages Git integration;
- disable production deployments;
- disable preview deployments;
- change branch controls;
- change build command;
- change output directory;
- change root directory;
- change Node/npm settings;
- change environment variables;
- change Pages Functions;
- change domains/DNS;
- change SSL/TLS;
- change tunnels;
- change Access;
- change caching;
- change redirects/headers;
- change repository source/runtime files;
- add a custom CI/CD pipeline;
- add GitHub Actions;
- change commit-message conventions;
- use `[CF-Pages-Skip]` as the normal solution;
- exclude `*.md` globally;
- add additional excluded paths without a separate bounded task;
- touch Home Assistant, HubSpot, Stripe, scheduling, Resend/email, or secrets;
- merge the PR.

---

## 10. Failure / Fallback Rules

If no authorized Cloudflare API/MCP/direct tool is available in the execution environment:

1. do not request credentials;
2. do not create or expose an API token;
3. do not attempt browser automation against Cloudflare;
4. stop before mutation;
5. report the exact dashboard path and exact values the operator must apply:
   - Workers & Pages
   - `wnyhomesecurity`
   - Settings / Build
   - Build watch paths
   - Include: `*`
   - Exclude: `docs/*`
6. after operator applies it, resume only for read-back and validation if an authorized read interface is available.

If the API requires a broader project payload, first read the current project configuration and preserve all untouched values exactly. Never reconstruct secret-bearing fields from logs or memory.

---

## 11. Exit Criteria

Complete only when:

- Cloudflare Pages `wnyhomesecurity` has `path_includes=["*"]` and `path_excludes=["docs/*"]`;
- all other relevant deployment settings are unchanged;
- read-back passes;
- a docs-only MTR closeout push does not trigger a Cloudflare Pages build/deployment;
- the execution PR contains only the exact MTR record change;
- zero files are deleted;
- `git diff --check` passes;
- rollback is recorded;
- no secrets are exposed;
- no unrelated protected system is touched;
- one draft PR is open;
- no merge occurs.

---

## 12. Delivery

Execution branch:

`task/cloudflare-docs-build-skip-001-execution`

Suggested commit:

`ops: skip Cloudflare builds for docs-only changes`

Open one draft PR to `main`.

Do not merge.

Closeout must report:

- Cloudflare field changed;
- before/after values;
- read-back result;
- docs-only skipped-build proof;
- whether any Cloudflare check/deployment appeared for the closeout commit;
- exact repository file changed;
- execution branch/head;
- draft PR number and direct URL;
- rollback value;
- protected-system confirmation;
- any environment/tool limitation encountered.
