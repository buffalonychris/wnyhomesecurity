# BP Operator Review Template

Status: Template
Customer-facing: No
Implementation authority: No
Task ID: KAOS-BP001

Use this template to review one candidate business process before approval or activation.

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
- Request revision
- Reject
- Defer
- Supersede
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
- [ ] Protected-system impact reviewed.
- [ ] Related runtime contracts listed or marked `None`.
- [ ] QA candidates listed or marked `None`.
- [ ] Hook candidates listed or marked `None`.
- [ ] SOP candidates listed or marked `None`.
- [ ] Final approved text captured, if approved.
- [ ] Promotion task or owner-document path identified.
- [ ] No active KAOS authority created by the review template alone.
