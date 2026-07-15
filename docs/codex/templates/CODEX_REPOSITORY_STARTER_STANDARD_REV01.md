# Codex Repository Starter Standard REV01

Status: PORTABLE STARTER TEMPLATE
Authority: None until adopted and customized by a repository
Origin: WNYHS T-CODEXGOVCONSOL001

This template helps another repository establish a compact Codex governance layer. WNYHS governance does not automatically control another repository. Each repository must review, customize, approve, and commit its own adopted standard and authority chain.

## 1. Minimal root AGENTS.md outline

```text
# [Repository] Codex Rules
Repository: [owner/name and expected path]
Canonical detailed execution standard: [path]

Authority chain: [ordered paths]
Current context/task gate: [owner paths and rules]
One bounded task per run/branch/PR.
READ MODE: TARGETED by default; FULL only with explicit reason.
Allowed files and protected systems: [rules/placeholders].
Validation: task-scaled; docs-only build policy stated.
Git: fresh branch, draft PR, no merge.
Closeout: changed files, validation, protected systems, RSI report.
Stop on authority, scope, secret, protected-system, or validation conflict.
```

## 2. Authority-chain placeholder

Define a single ordered chain, for example:

1. project governance
2. guardrails/security
3. agent/execution rules
4. current context or release authority
5. task register
6. bounded work order
7. domain owner standards/contracts
8. implementation evidence
9. historical lineage

Name exact repository paths and conflict behavior. Do not copy WNYHS paths unless the adopting repository truly uses them.

## 3. Targeted-read rules

- Search exact task IDs, headings, statuses, file paths, and references first.
- Read only located authority, scope, owner, and validation sections.
- Do not fully load large registers, catalogs, manifests, audits, inventories, or status boards by default.
- Use FULL only for explicit whole-file audits/reconciliation, higher-authority requirements, failed targeted search, or unresolved authority/protected-system ambiguity.
- Declare the read mode and FULL justification in each work order.
- Retry a failed/stalled read or command once; then use a smaller targeted fallback or stop.
- Do not repeat broad read batches.

## 4. Task/work-order template

```text
REPOSITORY / CONTEXT
[Repo, path, exact controlling context]

TASK
[ID, name, status, category, primary/related workstreams]

READ MODE: TARGETED
[Or FULL with explicit justification]

OBJECTIVE
[One bounded outcome]

PRECHECK / REQUIRED DOCS
[Authority, task, owner, branch/PR, protected-scope checks]

REQUIRED WORK
[Exact operations]

ALLOWED SCOPE / TARGET FILES
[Exact files and behavior]

REFERENCE ONLY
[Read-only inputs]

FORBIDDEN SCOPE / PROTECTED SYSTEMS
[Explicit exclusions]

CHANGE POSTURE / VERSION
[Additive/destructive authority and version rule]

VALIDATION
[Tier and exact checks; build decision]

GIT / DELIVERY
[Fresh branch, commit, draft PR, no merge]

CLOSEOUT / EXIT
[Evidence, RSI, stop conditions, objective exit criteria]
```

## 5. Protected-system placeholder

List repository-specific protected systems, owners, contracts, and mandatory stop/review rules:

- identity/auth/secrets: [owner/path]
- payments/billing: [owner/path]
- CRM/customer data: [owner/path]
- production infrastructure/deployment: [owner/path]
- APIs/runtime/data integrity: [owner/path]
- regulated or claim-sensitive content: [owner/path]
- critical routes/workflows: [owner/path]

Capability access is not authorization. Protected-system changes require explicit bounded scope and task-specific validation.

## 6. Validation tiers

- Docs-only: diff/content/link checks; build skipped unless justified.
- Governance: docs-only plus authority/status/supersession/conflict checks.
- Source/UI: focused tests, type/lint as applicable, build, route/visual checks.
- Runtime/API: contracts, behavior/failure tests, build/typecheck, secret safety.
- Protected system: explicit owner review and higher-risk evidence.
- QA: named evidence only; fixes require separate authority.
- Hosted prototype: source/version/deployment traceability and production-boundary proof.

## 7. Git and PR rules

- Begin from clean synchronized default branch.
- Use one task per branch and PR.
- Stage only authorized files.
- Push the task branch and open a draft PR to the default branch.
- Do not merge, auto-merge, mark ready, deploy, or push to the default branch without explicit repository authority and operator instruction.

## 8. RSI closeout block

```text
TOKEN UTILIZATION / RSI REPORT
Exact metrics: [report if visible; otherwise state unavailable]
Files read / essential: [...]
Full or broad reads and justification: [...]
Files modified: [...]
Commands / validation: [...]
Retries / failures: [...]
Redundant reads: [...]
Elapsed time: [...]
Context pressure: [low | medium | high]
Prompt compression lesson: [...]
Chat context promoted to repo docs: [...]
Recommended shorter prompt: [...]
```

## 9. Adoption instructions

Before treating this template as authority, the adopting repository must:

1. replace every placeholder;
2. reconcile existing governance and identify one canonical owner;
3. name protected systems and validation tiers;
4. define prompt-created task and Git/PR rules;
5. add a concise root `AGENTS.md` pointer;
6. mark displaced standards superseded without losing lineage;
7. validate references and obtain repository-owner approval.

Do not present the uncustomized template as active policy.
