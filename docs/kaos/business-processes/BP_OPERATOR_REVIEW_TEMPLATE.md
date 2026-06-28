# BP Operator Review Template

Status: Template
Customer-facing: No
Implementation authority: No
Task ID: KAOS-BP001
Workflow Detail Added By: KAOS-BP003

Use this template to review one candidate business process before approval or activation.

This template records review only. Completing it can move a candidate to `Approved Candidate`, `Operator Revision Requested`, `Rejected`, `Deferred`, `Superseded`, `Deprecated`, or `Retired`, but it does not create an `Active KAOS Rule`. Active KAOS Rule status requires a separate bounded activation task.

## Candidate Process Summary

- **Process ID:**
- **Process Name:**
- **Domain:**
- **Business Capability:**
- **Business Function:**
- **Source Artifact:**
- **Source Confidence:**
- **Current Lifecycle Stage:** Candidate
- **Current Status:**
- **Owner / Owner Document:**
- **Related Runtime Contracts:**
- **Related QA Candidates:**
- **Related Hook Candidates:**
- **Related SOP Candidates:**
- **Review Record ID:**
- **Review Stage:**
- **Activation Required:** Yes
- **Activation Task / Owner-Document Path:** Not created

## ChatGPT Interpretation

Summarize the candidate process in plain language.

```text
Interpretation:
Assumptions:
Unclear points:
Existing repo authority checked:
Potential conflicts:
```

## Operator Review

```text
What is accurate:
What is inaccurate:
What is missing:
What should be narrowed:
What should be expanded in a later task:
Protected-system concerns:
Public-claim concerns:
Owner-document concerns:
```

## Operator Decision

Select one:

- Approve
- Approve with edits
- Edit / Revise
- Request revision
- Reject
- Defer
- Supersede
- Deprecate
- Retire

Decision notes:

```text

```

## Required Edits

List exact edits required before approval or promotion.

```text

```

## Approval / Rejection Notes

```text
Approval status:
Approval date:
Approved by:
Rejection reason:
Deferral reason:
Revision reason:
Supersession target:
Deprecation reason:
```

## Evidence Reviewed

```text
Source artifacts:
Repository authority checked:
Owner documents checked:
Runtime contracts checked:
Protected-system evidence:
Public-claim evidence:
Conflicts found:
Evidence gaps:
```

## Related QA Candidates

```text
QA candidate IDs:
Required validation:
Evidence artifacts:
QA owner document:
```

## Related Hook Candidates

```text
Hook candidate IDs:
Hook category:
Event triggers:
Allowed candidate outputs:
Forbidden hook behavior:
Hook owner document:
```

## Related SOP Candidates

```text
SOP candidate IDs:
SOP owner:
Manual steps:
Training or handoff notes:
Forbidden SOP behavior:
```

## Runtime Contract Impact

```text
HubSpot / CRM:
Stripe / payment:
Scheduling:
Resend / email:
Lead Signal:
requestId:
QR attribution:
APIs / runtime:
Cloudflare:
Secrets / env:
Quote / payment flow:
Planner:
Dashboard:
SEO / sitemap / robots:
Dependencies / package-lock:
Impact review required:
```

## Register Update Requirements

Record the decision in `BP_CANDIDATE_INTAKE_REGISTER.md` or a later approved successor register.

```text
Prior lifecycle stage:
New lifecycle stage:
Operator decision:
Decision date:
Evidence reviewed:
Required edits:
Approval status:
Activation required:
Activation task:
Supersedes:
Superseded by:
Deprecation / retirement reason:
Register notes:
```

## Final Approved Text

Use this section only after operator approval or approval with edits.

```text

```

## Change / Supersession Notes

```text
Current version:
Supersedes:
Superseded by:
Change reason:
Retirement reason:
Historical notes:
```

## Promotion Checklist

- [ ] Operator decision recorded.
- [ ] Required edits applied.
- [ ] Evidence reviewed and summarized.
- [ ] Protected-system impact reviewed.
- [ ] Related runtime contracts listed or marked `None`.
- [ ] QA candidates listed or marked `None`.
- [ ] Hook candidates listed or marked `None`.
- [ ] SOP candidates listed or marked `None`.
- [ ] Final approved text captured, if approved.
- [ ] Promotion task or owner-document path identified.
- [ ] Candidate register update identified or completed.
- [ ] Approved Candidate not treated as Active KAOS Rule.
- [ ] Separate bounded activation required before Active KAOS Rule status.
- [ ] No active KAOS authority created by the review template alone.
