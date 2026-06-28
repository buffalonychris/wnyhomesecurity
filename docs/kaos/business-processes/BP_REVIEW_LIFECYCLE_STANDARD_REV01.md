# BP Review Lifecycle Standard REV01

Status: Active review standard
Customer-facing: No
Implementation authority: No
Task ID: KAOS-BP001

## 1. Purpose

This standard defines the WNYHS business-process candidate review lifecycle before any candidate process can become active KAOS authority.

It creates review structure only. It does not approve candidate processes, activate process rules, create SOPs, create QA specs, create hook specs, implement automation, or change runtime/source systems.

## 2. Non-Authority Rule

No candidate business process may be treated as an active KAOS rule until it has explicit operator approval and has been promoted through repository governance.

Candidate artifacts, extracted summaries, draft process rows, review templates, and intake notes are not authority by themselves.

## 3. Lifecycle Statuses

| Status | Meaning |
| --- | --- |
| Candidate | A process or process package has been identified but has not been reviewed for approval. |
| Needs Operator Review | The candidate is ready for operator review and decision. |
| Operator Revision Requested | The operator requested edits, clarification, scope correction, or evidence before approval. |
| Approved Candidate | The operator approved the candidate content for promotion planning, but it is not yet an active KAOS rule. |
| Active KAOS Rule | The approved process has been promoted through repository governance into the appropriate owner document or authority path. |
| Superseded | A newer approved process or rule replaces this candidate or active rule. |
| Deprecated | The process should no longer be used for new work but is retained for lineage until final retirement. |
| Retired | The process has been removed from active consideration or use and is retained only for historical traceability. |

## 4. Required Metadata

Each process candidate or reviewed process record must include:

| Field | Requirement |
| --- | --- |
| Process ID | Stable process identifier. |
| Process Name | Human-readable process name. |
| Domain | Primary operating or workstream domain. |
| Business Capability | Capability the process supports. |
| Business Function | Function performed by the process. |
| Lifecycle Stage | Current lifecycle stage from this standard. |
| Source Artifact | Source package, file, task, chat, audit, or evidence reference. |
| Source Confidence | Confidence rating or reasoned confidence note. |
| Status | Current record status. |
| Owner | Person, role, owner document, or `Owner missing`. |
| Operator Approval Status | Approval state: pending, approved, approved with edits, revision requested, rejected, deferred, superseded, or retired. |
| Approval Date | Date of operator approval, or `Not approved`. |
| Current Version | Current process version or candidate package version. |
| Supersedes | Prior process or rule replaced by this record, or `None`. |
| Superseded By | Later process or rule that replaces this record, or `None`. |
| Change Reason | Reason for creation, revision, approval, supersession, deprecation, or retirement. |
| Retirement Reason | Reason for retirement, or `Not retired`. |
| Related Runtime Contracts | Runtime contracts implicated by the process, or `None`. |
| Related QA Candidates | QA candidates related to this process, or `None`. |
| Related Hook Candidates | Hook candidates related to this process, or `None`. |
| Related SOP Candidates | SOP candidates related to this process, or `None`. |

Unknown values must be marked `Unknown`, not invented.

## 5. Operator Review Actions

Allowed operator actions are:

| Action | Meaning |
| --- | --- |
| Approve | Candidate content is accepted as written for promotion planning. |
| Approve with edits | Candidate content is accepted after named edits are applied. |
| Request revision | Candidate needs changes or more evidence before approval. |
| Reject | Candidate should not be promoted. |
| Defer | Candidate remains pending for a later review window or dependency. |
| Supersede | Candidate or rule is replaced by a newer candidate or rule. |
| Retire | Candidate or rule is removed from active consideration or active use. |

## 6. Promotion Requirements

Before a candidate can become an Active KAOS Rule:

1. The candidate must have a complete review record.
2. Existing object and owner-document checks must be completed.
3. Protected-system impacts must be identified.
4. Related runtime contracts, QA candidates, hook candidates, and SOP candidates must be listed or marked `None`.
5. The operator must explicitly approve the final text.
6. Promotion must happen through repository governance and the correct owner document or task record.

Approval alone does not change source/runtime behavior, create automation, or authorize protected-system work.

## 7. Protected-System Review

Any candidate process that touches or could affect HubSpot, Stripe/payment, scheduling, Resend/email, APIs/runtime, Lead Signal, requestId, QR attribution, Cloudflare, secrets/env, quote/payment flow, planner, dashboard behavior, sitemap/robots, public claims, dependencies, or package-lock requires relevant owner-doc and runtime-contract review before promotion.

If impact is unclear, set the candidate to `Needs Operator Review` or `Operator Revision Requested`.

## 8. Prohibited Behavior

This standard must not be used to:

- approve a business process without operator decision
- activate a candidate as an Active KAOS Rule by implication
- create SOP, QA, hook, automation, runtime, source, public-site, dependency, or deployment work
- import full candidate package contents without a bounded task
- bypass the Master Task Register
- supersede active authority silently
- treat candidate BP001A-BP001K artifacts as repository authority

## 9. Relationship To Existing KAOS Docs

This standard extends the manual review structure around existing KAOS intake and business-process registry documents:

- `/docs/kaos/KAOS001_INTAKE_AND_PROMOTION_WORKFLOW_REV01.md`
- `/docs/kaos/KAOS001_BUSINESS_PROCESS_REGISTRY_REV01.md`
- `/docs/kaos/KAOS001_RELATIONSHIP_AND_DEPENDENCY_MODEL_REV01.md`
- `/docs/kaos/HOOKCAT001_KAOS_HOOK_CATALOG_REV01.md`

Those documents remain governed by the higher repository authority chain. This standard does not override them.
