# KAOS Hook Lifecycle Standard REV01

Status: Candidate hook governance standard
Task ID: KAOS-HOOK001
Customer-facing: No
Implementation authority: No

## 1. Purpose

This standard defines how KAOS hook ideas are described, reviewed, prioritized, and promoted before any implementation or enforcement work occurs.

This document is governance only. It does not create hook scripts, Codex hook configuration, QA checks, runtime behavior, source changes, protected-system changes, or active KAOS rules.

## 2. Definitions

### KAOS Hook

A KAOS hook is a governed subscriber or future subscriber that may evaluate a Codex lifecycle event, repository event, validation event, or WNYHS workflow event and produce structured warnings, candidate records, or review requests.

A hook is not authority by itself. A hook cannot approve a candidate, activate a task, merge a PR, approve deployment, or change protected systems.

### Hook Candidate

A hook candidate is a documented hook idea that has not yet been approved, specified, implemented, trusted, validated, enforced, or retired.

Hook candidates are used to capture possible future guardrails without blocking current production work.

## 3. Candidate Hook vs Later States

| State | Meaning | Authority |
| --- | --- | --- |
| Candidate hook | A named hook idea with initial purpose, category, risk, owner, and source references. | Candidate only; no implementation authority. |
| Approved hook spec | Operator-approved hook specification with owner docs, inputs, outputs, failure handling, and implementation boundaries. | Specification authority only; no script/config unless separately authorized. |
| Implemented hook | Hook code or configuration exists from a bounded implementation task. | Implementation exists but may still be advisory or disabled. |
| Enforced hook | Hook is active in a workflow at an approved enforcement level. | Enforcement authority exists only at the approved level and scope. |
| Retired hook | Hook is no longer active or recommended. | Historical record only. |

## 4. Hook Lifecycle States

| Lifecycle State | Meaning | Allowed Movement |
| --- | --- | --- |
| Candidate | Initial candidate record exists. | May move to Needs Owner Review, Rejected, Superseded, or Retired. |
| Needs Owner Review | Candidate requires owner-doc review, operator review, or protected-system review. | May return to Candidate, move to Approved Hook Spec, or be Rejected. |
| Approved Hook Spec | Operator approved the specification, but no implementation is authorized by this state alone. | May move to Implementation Task Candidate or Retired. |
| Implementation Task Candidate | A future bounded implementation task may be created. | May move to Implemented only through a separate bounded task. |
| Implemented | Hook script/config exists from an authorized implementation task. | May move to Trusted, Disabled, Superseded, or Retired. |
| Trusted | Hook source/config has trust review and safe failure behavior. | May move to Validated, Disabled, Superseded, or Retired. |
| Validated | Hook has validation evidence showing expected behavior. | May move to Enforced only after operator approval for the enforcement level. |
| Enforced Advisory | Hook runs or reports in advisory mode. | May stay advisory, move to warning, or be disabled by bounded approval. |
| Enforced Warning | Hook produces warnings requiring attention but does not block work. | May stay warning, move to blocking, or be disabled by bounded approval. |
| Enforced Blocking | Hook can block supported flows inside an explicitly approved scope. | Requires explicit operator approval before entry. |
| Disabled | Hook is not active but retained for reference. | May be revised through a bounded task. |
| Superseded | Hook was replaced by a newer candidate/spec/implementation. | Historical only unless reactivated by bounded task. |
| Rejected | Hook was reviewed and declined. | Historical only unless reconsidered by bounded task. |
| Retired | Hook is closed and no longer recommended. | Historical only. |

## 5. Required Candidate Fields

Every hook candidate must include:

- `hook_id`
- `hook_name`
- `status`
- `lifecycle_state`
- `category`
- `risk_level`
- `enforcement_level`
- `operator_blocking_approval`
- `source_artifacts`
- `source_confidence`
- `purpose`
- `trigger_or_event`
- `candidate_inputs`
- `candidate_outputs`
- `prohibited_outputs`
- `owner_document`
- `owner_document_status`
- `protected_systems`
- `protected_system_sensitivity`
- `implementation_status`
- `trust_review_required`
- `validation_required_before_promotion`
- `promotion_requirements`
- `failure_modes`
- `related_bp_candidates`
- `related_kaos_docs`
- `notes`

Unknown values must be marked `Unknown`, not inferred.

## 6. Allowed Hook Categories

Hook candidates must use one primary category from this list:

- copy / claims
- visual / token
- route / sitemap / SEO
- payment / Stripe
- CRM / HubSpot
- runtime / environment
- docs / governance
- QA / evidence
- Codex workflow

Related categories may be listed in notes, but related categories do not expand scope or authorize implementation.

## 7. Hook Risk Levels

| Risk Level | Meaning |
| --- | --- |
| Low | Advisory documentation or context-only hook with no protected-system sensitivity. |
| Medium | Hook may affect task flow, documentation routing, validation evidence, or operator workload. |
| High | Hook evaluates public copy, source/runtime files, protected workflows, or release-sensitive evidence. |
| Protected | Hook evaluates HubSpot, Stripe/payment, scheduling, runtime/API, secrets, Cloudflare config, dependencies, package-lock, destructive actions, or other protected systems. |

Risk level is not an enforcement level. A high-risk candidate may still remain advisory.

## 8. Hook Enforcement Levels

| Enforcement Level | Meaning |
| --- | --- |
| advisory | Hook output is informational or a candidate record only. |
| warning | Hook output requires human attention or operator review but does not block work. |
| blocking | Hook may block a supported flow inside an explicitly approved scope. |

All KAOS-HOOK001 seed entries are `advisory`.

## 9. Blocking Approval Rule

No hook may become blocking without explicit operator approval in a later bounded task.

Blocking approval must identify:

- hook ID
- owner document
- protected systems reviewed
- exact blocked event or action
- false-positive handling
- operator override path
- validation evidence
- trust review status
- rollback or disable procedure

Absent that approval, every hook candidate and approved hook spec remains non-blocking.

## 10. Promotion Requirements

Before a candidate hook can become an approved hook spec, a later bounded task must:

1. Confirm the candidate still matches current repository governance.
2. Identify the owner document and authority boundary.
3. Define inputs, outputs, prohibited outputs, and failure modes.
4. Identify protected systems and required runtime contracts.
5. Define trust review requirements.
6. Define validation requirements.
7. Confirm whether the hook is advisory, warning, or proposed blocking.
8. Obtain explicit operator approval for any blocking behavior.

Before implementation, a separate bounded implementation task must authorize files, scripts, config, validation, and rollback.

## 11. Prohibited Behavior

This standard must not:

- implement hooks
- create hook scripts
- create Codex hook config
- create QA checks
- approve enforcement
- make any hook blocking
- activate KAOS rules
- change source/runtime/UI/routes
- modify package files or dependencies
- change HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, runtime/API, environment, or secret behavior
