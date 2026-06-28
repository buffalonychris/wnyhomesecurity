# BP Review Lifecycle Standard REV01

Status: Active review standard
Customer-facing: No
Implementation authority: No
Task ID: KAOS-BP001
Workflow Detail Added By: KAOS-BP003

## 1. Purpose

This standard defines the WNYHS business-process candidate review lifecycle before any candidate process can become active KAOS authority.

It creates review structure only. It does not approve candidate processes, activate process rules, create SOPs, create QA specs, create hook specs, implement automation, or change runtime/source systems.

## 2. Non-Authority Rule

No candidate business process may be treated as an active KAOS rule until it has explicit operator approval and has been promoted through repository governance.

Candidate artifacts, extracted summaries, draft process rows, review templates, and intake notes are not authority by themselves.

An `Approved Candidate` is not the same as an `Active KAOS Rule`.

Approved Candidate means the operator accepts the candidate content for controlled promotion planning. Active KAOS Rule means a later bounded activation task has promoted the approved process into the correct repository authority path.

Active KAOS Rule status requires separate bounded activation. Operator approval during review does not create active authority, change runtime behavior, approve SOP/QA/hook work, or modify any protected system.

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

## 4. Required Review Stages

Every candidate business-process artifact must move through explicit review stages before activation:

```text
Candidate
-> Needs Operator Review
-> Operator Revision Requested
-> Approved Candidate
-> Active KAOS Rule
-> Superseded
-> Deprecated
-> Retired
```

Stage movement rules:

1. `Candidate` records may be intake placeholders, package rows, or unreviewed candidate artifacts.
2. `Needs Operator Review` means the candidate has enough metadata for a decision pass.
3. `Operator Revision Requested` means the operator requires edits, narrower scope, conflict resolution, or more evidence before approval.
4. `Approved Candidate` means review approval is complete, but activation has not occurred.
5. `Active KAOS Rule` can be assigned only by a separate bounded activation task that identifies the owner document, exact active text, validation, protected-system review, and task-register authority.
6. `Superseded`, `Deprecated`, and `Retired` may apply to candidates, approved candidates, or active rules, but the register must identify what replaces the record or why it is being removed from future use.

No stage may be skipped unless the operator records the reason and the next bounded task has authority for that move.

## 5. Required Metadata

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
| Review Record ID | Stable review record identifier or `Not created`. |
| Review Stage | Current stage from this lifecycle standard. |
| Operator Decision | Latest operator decision or `Pending`. |
| Decision Date | Date of latest operator decision or `Pending`. |
| Decision By | Operator name, role, or `Operator`. |
| Evidence Reviewed | Source artifacts, repo docs, task records, runtime contracts, or `None reviewed`. |
| Required Edits | Edits required before approval or activation, or `None`. |
| Activation Required | `Yes` unless the record is rejected, retired, or never eligible for active authority. |
| Activation Task | Bounded task ID required for active KAOS promotion, or `Not created`. |
| Register Update Date | Date the candidate register was updated for the latest decision. |

Unknown values must be marked `Unknown`, not invented.

## 6. Operator Review Workflow

Operator review is a record-first workflow:

1. Select exactly one candidate process or one clearly bounded candidate package row for review.
2. Confirm the current lifecycle stage in `BP_CANDIDATE_INTAKE_REGISTER.md`.
3. Complete `BP_OPERATOR_REVIEW_TEMPLATE.md` with the candidate summary, interpretation, conflicts, evidence, protected-system impacts, and decision fields.
4. Compare the candidate against higher-authority repository governance, owner documents, runtime contracts, protected-system boundaries, and active task scope.
5. Record one allowed operator decision.
6. Apply required edits only when the active task authorizes editing the candidate review record or owner document.
7. Update the candidate register with the decision, lifecycle stage, evidence summary, required edits, activation requirement, and follow-up task path.
8. Stop after review unless the same bounded task explicitly authorizes a separate activation step.

Review notes must distinguish:

- source artifact content
- ChatGPT/Codex interpretation
- operator corrections
- repo authority checked
- protected-system concerns
- final approved text, if any
- future activation task, if any

## 7. Allowed Operator Decisions

Allowed operator actions are:

| Action | Meaning |
| --- | --- |
| Approve | Candidate content is accepted as written for promotion planning. |
| Approve with edits | Candidate content is accepted after named edits are applied. |
| Edit / Revise | Candidate content may continue only after the review record captures required edits or revised text. |
| Request revision | Candidate needs changes or more evidence before approval. |
| Reject | Candidate should not be promoted. |
| Defer | Candidate remains pending for a later review window or dependency. |
| Supersede | Candidate or rule is replaced by a newer candidate or rule. |
| Deprecate | Candidate or active rule should not be used for new work but remains retained for lineage and possible retirement. |
| Retire | Candidate or rule is removed from active consideration or active use. |

Decision effects:

| Decision | Required lifecycle result |
| --- | --- |
| Approve | Move to `Approved Candidate`; do not mark Active KAOS Rule. |
| Approve with edits | Move to `Approved Candidate` only after the named edits are recorded or applied. |
| Edit / Revise | Move to or remain in `Operator Revision Requested`. |
| Request revision | Move to or remain in `Operator Revision Requested`. |
| Reject | Keep candidate inactive and record rejection reason. |
| Defer | Keep candidate inactive and record dependency or later review trigger. |
| Supersede | Move to `Superseded` and identify the replacement candidate or rule. |
| Deprecate | Move to `Deprecated` and record why new use should stop. |
| Retire | Move to `Retired` and record the retirement reason. |

## 8. Required Evidence Before Approval

Before any candidate can move to `Approved Candidate`, the review record must include:

1. Source artifact or source package reference.
2. Candidate process summary.
3. Existing repository authority checked, including higher-authority governance and any owner document relevant to the process domain.
4. Known conflicts, or `None found`.
5. Protected-system impact review, or `None`.
6. Public-claim impact review when the candidate could affect public language.
7. Related runtime contracts, QA candidates, hook candidates, and SOP candidates, or `None`.
8. Required edits, or `None`.
9. Final approved text or exact approval scope.
10. Operator decision, decision date, and decision notes.
11. Activation requirement and proposed activation task or owner-document path.

Evidence must be specific enough that a later activation task can determine what was approved and what remained out of scope.

## 9. Promotion Requirements

Before a candidate can become an Active KAOS Rule:

1. The candidate must have a complete review record.
2. Existing object and owner-document checks must be completed.
3. Protected-system impacts must be identified.
4. Related runtime contracts, QA candidates, hook candidates, and SOP candidates must be listed or marked `None`.
5. The operator must explicitly approve the final text.
6. Promotion must happen through repository governance and the correct owner document or task record.
7. A separate bounded activation task must authorize the activation.
8. The activation task must update the candidate register from `Approved Candidate` to `Active KAOS Rule` only after the active text is placed in the correct authority path.

Approval alone does not change source/runtime behavior, create automation, or authorize protected-system work.

## 10. Candidate Register Recording Rules

Review decisions must be recorded in `BP_CANDIDATE_INTAKE_REGISTER.md` or a later approved successor register.

Each register update must capture:

1. Process ID or artifact ID.
2. Prior lifecycle stage.
3. New lifecycle stage.
4. Operator decision.
5. Decision date.
6. Evidence reviewed.
7. Required edits or revision request.
8. Approval status.
9. Activation required.
10. Activation task or owner-document path.
11. Supersedes / superseded-by relationship, if applicable.
12. Deprecation or retirement reason, if applicable.
13. Notes confirming that no Active KAOS Rule was created unless a separate activation task completed.

If the candidate register cannot represent a required field, the review task must add the missing field before recording the decision.

## 11. BP001A-K Review Pilot Rule

Future BP001A-K review pilots must use this workflow one candidate at a time, or one explicitly bounded subset at a time.

Pilot tasks must not:

- approve multiple unrelated candidates by implication
- activate any BP001A-K candidate in the same review step unless a separate bounded activation is explicitly authorized
- convert candidate artifacts into SOPs, QA checks, hooks, automation, runtime behavior, or public authority
- bypass protected-system review for CRM, payment, scheduling, runtime/API, Cloudflare, dependencies, source files, routes, UI, or public claims

The pilot output must include the completed review record, register update, decision result, evidence summary, and recommended next bounded task.

## 12. Protected-System Review

Any candidate process that touches or could affect HubSpot, Stripe/payment, scheduling, Resend/email, APIs/runtime, Lead Signal, requestId, QR attribution, Cloudflare, secrets/env, quote/payment flow, planner, dashboard behavior, sitemap/robots, public claims, dependencies, or package-lock requires relevant owner-doc and runtime-contract review before promotion.

If impact is unclear, set the candidate to `Needs Operator Review` or `Operator Revision Requested`.

## 13. Prohibited Behavior

This standard must not be used to:

- approve a business process without operator decision
- activate a candidate as an Active KAOS Rule by implication
- create SOP, QA, hook, automation, runtime, source, public-site, dependency, or deployment work
- import full candidate package contents without a bounded task
- bypass the Master Task Register
- supersede active authority silently
- treat candidate BP001A-BP001K artifacts as repository authority

## 14. Relationship To Existing KAOS Docs

This standard extends the manual review structure around existing KAOS intake and business-process registry documents:

- `/docs/kaos/KAOS001_INTAKE_AND_PROMOTION_WORKFLOW_REV01.md`
- `/docs/kaos/KAOS001_BUSINESS_PROCESS_REGISTRY_REV01.md`
- `/docs/kaos/KAOS001_RELATIONSHIP_AND_DEPENDENCY_MODEL_REV01.md`
- `/docs/kaos/HOOKCAT001_KAOS_HOOK_CATALOG_REV01.md`

Those documents remain governed by the higher repository authority chain. This standard does not override them.
