# GOVFOUNDFREEZE001 Work Order — REV01

## 1. Repository and controlling context

- Repository: `buffalonychris/wnyhomesecurity`
- Local path: `C:\dev\wnyhomesecurity`
- Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

## 2. Task

- ID: `GOVFOUNDFREEZE001`
- Name: Verify and Freeze GOVFOUND002 Source Authority
- Status: `ACTIVE`
- Category: `GOV`

## 3. Workstreams

- Primary: Project Governance
- Related: Codex Execution

## 4. Read mode

`READ MODE: FULL`

Justification: Establishing immutable source authority requires complete authority-chain review, whole-file byte verification, exact provenance, and exact tracked-scope validation.

## 5. Objective

Independently verify the conditionally approved candidate identity, create an exact byte-for-byte frozen repository source at the operator-approved path, create its provenance and fingerprint record, and preserve GOVFOUND002 as unauthorized.

## 6. Authorization and required precheck

Operator authorization date: `2026-07-25`.

Before changing tracked files:

- confirm repository identity;
- confirm clean synchronized `main`;
- confirm GOVFOUNDRECON001 is `DONE` and PR #533 is merged;
- confirm GOVFOUND002 has no MTR entry;
- confirm the intake source exists;
- independently calculate source byte size and SHA-256;
- stop unless the values are exactly `73785` and `6ac70f8044704cb66fe6d92016ad52c70e80d6b4c6ed879e89a2e4c0e128524a`;
- confirm both approved destination files are absent;
- confirm no branch or PR collision exists.

## 7. Required authority and owner documents

1. `docs/system/project.md`
2. `docs/system/guardrails.md`
3. `docs/system/agent.md`
4. `docs/system/plan.md`
5. `docs/system/step-current.md`
6. `docs/system/master-task-register.md`
7. `docs/codex/CODEX_TASK_REGISTER_RULES.md`
8. `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
9. `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
10. `docs/governance/GOVFOUNDRECON001_GOVFOUND002_AUTHORITY_RECONCILIATION_REV01.md`
11. `docs/codex/work-orders/GOVFOUNDRECON001_WORK_ORDER_REV01.md`

## 8. Required work

1. Add this task to the MTR using the current schema.
2. Copy the intake source byte-for-byte to the approved frozen-source path.
3. Verify source and destination byte sizes, SHA-256 values, and direct byte identity.
4. Create the approved provenance and fingerprint record.
5. Create this canonical work order.
6. Add only the required Document Catalog and Markdown Manifest entries.
7. Set only this task record to `DONE` after every validation and exit criterion passes.

## 9. Allowed scope and target files

Exactly:

1. `docs/system/master-task-register.md`
2. `docs/codex/work-orders/GOVFOUNDFREEZE001_WORK_ORDER_REV01.md`
3. `docs/governance/source-authority/GOVFOUND002_APPROVED_PROMOTION_SPEC_REV01_1.md`
4. `docs/governance/source-authority/GOVFOUND002_APPROVED_PROMOTION_SPEC_REV01_1_PROVENANCE.md`
5. `docs/DOCUMENT_CATALOG.md`
6. `docs/MARKDOWN_MANIFEST.md`

## 10. Reference-only inputs

- `.local-intake/Pasted markdown(16).md`
- `.local-review/GOVFOUND002-operator-decision-package-rev01.md`
- merged GOVFOUNDRECON001 authority and PR #533

The intake source is immutable and must remain outside Git.

## 11. Forbidden scope and protected systems

Do not modify, normalize, reformat, rename, move, delete, or overwrite the intake source. Do not edit or normalize the frozen copy after copying.

Do not create, activate, authorize, or execute GOVFOUND002. Do not promote other governance material. Do not create the Authority and Systems of Record standard or Business Bible.

Do not modify runtime, payment, funnel, scheduling, customer-facing, deployment, infrastructure, configuration, secret, external-system, dependency, or package-lock files. Do not change a seventh tracked path. Do not merge or deploy.

## 12. Change posture and version

Additive governance source-authority work only. No runtime version change. The frozen source must preserve exact bytes.

## 13. Validation

Tier: Governance and exact-source integrity.

- verify source and frozen-copy byte sizes are both `73785`;
- verify both SHA-256 values are `6ac70f8044704cb66fe6d92016ad52c70e80d6b4c6ed879e89a2e4c0e128524a`;
- verify the staged Git blob is also `73785` bytes with the approved SHA-256, without text-filter normalization;
- perform direct byte-sequence comparison;
- recalculate source identity after all operations;
- confirm source last-modified timestamp remains unchanged;
- confirm exactly six allowlisted tracked files changed;
- confirm GOVFOUNDFREEZE001 occurs once with the current MTR schema;
- confirm GOVFOUND002 remains absent from the MTR;
- confirm no unexpected deletion, runtime, or protected-system file;
- run `git diff --check` on the five authored files; exclude only the immutable frozen source from whitespace-style validation because normalization would break its approved bytes;
- governed docs-only build skip under `CODEX_EXECUTION_STANDARD_REV01.md`.

## 14. Git and delivery

- Branch: `codex/govfoundfreeze001`
- Commit: `governance: freeze GOVFOUND002 source authority`
- One bounded commit containing exactly the six allowlisted files.
- Push the task branch.
- Open a draft PR to `main`.
- Do not push directly to `main`, merge, enable auto-merge, mark ready, or deploy.

## 15. Closeout

Report branch, commit, draft PR, independently calculated identity, frozen and provenance paths, byte-identity result, exact files, MTR status, validation, protected-system posture, no-merge/no-deployment confirmation, and context efficiency.

## 16. Stop conditions and exit criteria

Stop on any identity mismatch, source-read failure, source timestamp change, unclean or unsynchronized base, authority conflict, destination collision, branch/PR collision, seventh tracked file, protected-system change, or failed validation.

Exit only when source identity matches, the frozen copy is byte-identical, provenance is complete, exactly six files are validated and committed, a draft PR is open, GOVFOUND002 remains unauthorized, and the worktree is clean.
