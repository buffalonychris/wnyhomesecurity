# Referral Payout Review SOP  REV01

Task ID: REFERRAL-SOP001  
Status: Internal operations SOP  
Customer-facing: No  
Implementation authority: No  
Runtime behavior changed: No  
HubSpot schema changed: No  
Stripe behavior changed: No  
Payout automation approved: No

## 1. Purpose
Define the internal manual operating procedure for reviewing, approving, declining, disputing, and recording referral payout status.

This SOP gives WNYHS operators a controlled referral review process before any referral-aware leadflow, HubSpot mapping, quote-awareness, or payout handling implementation is approved.

## 2. Non-Implementation Boundary
This document does not:

- implement referral capture
- implement payout automation
- create HubSpot properties
- write to HubSpot
- change `/api/lead-signal`
- change API payloads
- change quote behavior
- change Stripe behavior
- change forms, routes, UI, QRLanding, lead-signal, or tests
- create customer-facing referral copy, discounts, fees, or terms

All referral payout handling remains manual-review only until a future bounded task explicitly approves implementation.

## 3. Referral Program Operating Principle
Referral payout is an internal business decision, not a customer-facing promise.

Operating rules:

- Referral payout is manual-review only.
- No automatic payout approval is allowed.
- No automatic Stripe payout is allowed.
- No customer-visible discount is created by referral status.
- No customer-visible referral fee is created by referral status.
- Referral fee is an internal business cost.
- Operator decides eligibility.

## 4. Referral Eligibility Review
Operators may consider a referral payout only when there is enough evidence to connect the referral context to a real WNYHS job opportunity.

Eligibility review should consider:

- whether a manual referral claim exists
- whether named QR source attribution exists
- whether the source or referrer is known and approved for review
- whether the lead resulted in a completed job
- whether the referral was visible internally before quote finalization when applicable
- whether duplicate or conflicting claims exist
- whether the claim violates privacy, customer-facing, or payout policy boundaries

Manual referral claim does not automatically make a payout eligible. Named QR source does not automatically make a payout eligible.

## 5. Referral Evidence Required
Before approving payout, operators should verify available internal evidence:

| Evidence | Required posture |
|---|---|
| Lead/deal record | Required before payout review. |
| Server `requestId` | Required when available for correlation. |
| Manual referral fields | Required for manual referral payout consideration unless a separate operator-approved source process applies. |
| Named QR source fields | Supporting evidence only; not automatic eligibility. |
| HubSpot notes/tasks | Supporting internal review evidence. |
| Quote context | Referral should be visible internally before quote finalization when applicable. |
| Job completion evidence | Required before payout approval can move past pending completion. |
| Operator decision note | Required for approve, decline, or dispute outcomes. |

If required evidence is missing, keep status at `NEEDS_REVIEW` or `DISPUTED` until resolved.

## 6. Manual Review Statuses
Operators must use the approved referral review status model:

| Status | Meaning | Operator action |
|---|---|---|
| `NOT_APPLICABLE` | No referral payout review applies. | No payout review required. |
| `NEEDS_REVIEW` | Referral or source context exists and has not been resolved. | Review evidence and decide next status. |
| `ELIGIBLE_PENDING_JOB_COMPLETION` | Referral appears eligible, but the job is not complete. | Wait for completion evidence. |
| `APPROVED_PENDING_PAYMENT` | Operator approved payout after job completion, but payout has not been recorded as paid. | Record payout details and payment evidence manually when paid. |
| `PAID` | Payout was manually recorded as paid. | Preserve final note and do not automate further action. |
| `DECLINED` | Operator declined payout. | Record reason in internal note. |
| `DISPUTED` | Claim is conflicting, unclear, or contested. | Preserve evidence and require operator resolution. |

These statuses are internal only and do not create customer-facing eligibility, discount, or fee language.

## 7. Payout Timing Rule
Referral payout is only considered after job completion.

Before job completion:

- a possible referral may be marked `NEEDS_REVIEW`
- a likely eligible referral may be marked `ELIGIBLE_PENDING_JOB_COMPLETION`
- no payout should be approved as payable
- no Stripe payout or automatic payment action may occur

After job completion, the operator may move a valid review to `APPROVED_PENDING_PAYMENT` or decline/dispute it.

## 8. Payout Percentage Handling
Any payout percentage is an internal policy value controlled by the operator.

Rules:

- No automatic payout percentage assignment.
- No public payout percentage claim.
- No customer-facing discount calculation.
- No payable commitment until operator approval.
- Percentage values, if used later, must align with the HubSpot mapping contract and any approved quote-awareness spec.

If no approved percentage policy exists, operators must leave percentage blank or record only narrative review context.

## 9. Contract Amount Definition
For referral review, contract amount means the internally approved final job amount used by operators for payout review after job completion.

Contract amount does not mean:

- public package estimate
- initial rough quote
- deposit amount
- Stripe checkout amount by itself
- customer-visible referral discount

Future implementation must define the exact source of final contract amount before any calculation field or report uses it.

## 10. Duplicate / Conflicting Referral Claims
When multiple referral claims exist, operators must not approve payout automatically.

Required handling:

- Preserve all known referral/source evidence.
- Compare manual referral fields, named QR source, notes, requestId, and timeline.
- Mark the review `DISPUTED` when claims conflict.
- Record the resolution reason before approval or decline.
- Do not split or duplicate payout unless an operator-approved policy exists.

Duplicate claims should remain internal review context and must not be surfaced to the customer.

## 11. Named QR Source vs Manual Referral
Named QR source attribution and manual referral are separate.

Example:

- `sourceId = mike-contractor-qr`
- `referredByName = Uncle Joe`

Both values must be preserved separately. The named QR source may explain where the lead came from, while the manual referral may identify who the customer says referred them.

Neither value automatically makes a payout eligible. Operator review controls eligibility.

## 12. Operator Review Workflow
Manual workflow:

1. Identify referral/source context on the lead or deal.
2. Confirm the server `requestId` and related HubSpot record when available.
3. Determine whether referral review applies.
4. Set or confirm `referralReviewStatus`.
5. If review is needed before completion, use `NEEDS_REVIEW`.
6. If likely eligible but not complete, use `ELIGIBLE_PENDING_JOB_COMPLETION`.
7. After job completion, review final evidence and policy.
8. Move to `APPROVED_PENDING_PAYMENT`, `DECLINED`, or `DISPUTED`.
9. When paid manually, record payment evidence and set `PAID`.
10. Preserve notes explaining the operator decision.

Operators must not rely on source attribution alone as payout proof.

## 13. HubSpot Recording Expectations
HubSpot recording expectations are governed by `hubspot_referral_property_mapping_rev01`.

Internal expectations:

- Use approved referral review statuses only.
- Keep payout fields internal only.
- Use notes for narrative evidence, dispute explanations, and manual payment evidence.
- Preserve requestId in notes/tasks when available.
- Do not create properties from this SOP.
- Do not write new referral fields until a future implementation and schema task approves them.
- Do not use HubSpot workflows to approve payouts.

HubSpot remains protected. All future CRM writes must remain API-mediated through `/api/lead-signal` or another explicitly approved server boundary.

## 14. Quote Awareness Boundary
Referral must be visible internally before quote finalization when applicable so the operator can account for internal business cost.

This SOP does not approve:

- quote UI changes
- quote automation
- automatic discounts
- customer-visible referral fee display
- customer-facing referral terms
- public pricing changes

`QUOTE-REFERRAL001` must define any future internal quote-visible referral awareness before implementation.

## 15. Stripe / Payment Boundary
Stripe is not a referral payout engine for this SOP.

Rules:

- No automatic Stripe payout.
- No Stripe webhook changes.
- No payment-state changes from referral review.
- No payout recording from customer payment redirect.
- Deposit/payment verification remains server-side and webhook-authoritative.

If a referral payout is made, it is recorded manually under an approved internal process. This SOP does not implement that process in Stripe or any payment system.

## 16. Customer-Facing Restrictions
Referral payout review is not customer-facing.

Operators and future tasks must not create:

- customer-visible referral fee language
- customer-visible referral discount language
- customer-facing payout eligibility language
- public referral program claims
- customer emails promising referral payout
- quote or receipt language showing internal referral cost

Any customer-facing referral copy requires a separate approved copy/spec task and guardrails review.

## 17. Dispute Handling
Use `DISPUTED` when:

- two or more referrers claim the same job
- named QR source conflicts with manual referral claim
- referral was entered after quote finalization and policy is unclear
- referrer identity or relationship is unclear
- evidence is insufficient or contradictory
- payout was challenged after a decline or payment

Dispute notes should capture the reason, evidence reviewed, operator decision, and final resolution. Do not delete dispute history.

## 18. Reporting Requirements
Future reporting should support internal review by:

- referral review status
- manual referral name/context where approved
- named QR `sourceId`
- source type/campaign when approved
- requestId correlation
- quote/job completion state
- approved/declined/disputed/paid counts
- payout amount totals only after policy approval

Reporting must distinguish scan/source attribution from closed-job attribution. Attribution remains directional until tied to lead, quote, and completed job evidence.

## 19. Future Automation Gate
No referral payout automation is approved by this SOP.

Future implementation gates:

| Task ID | Gate |
|---|---|
| `QUOTE-REFERRAL001` | Define internal quote-visible referral awareness before quote workflow changes. |
| `LEADFLOW002` | Implement approved leadflow/referral/source behavior only after contracts and mappings are approved. |
| `QA-LEADFLOW001` | Validate referral/source/requestId/HubSpot behavior and protected-system no-regression checks before release. |

Any future automation requires explicit bounded scope, operator approval, updated runtime contracts, and validation.

## 20. Open Questions
| Question | Owner / future task |
|---|---|
| What exact payout percentage policy is approved, if any? | Operator / `QUOTE-REFERRAL001` |
| What final contract amount source should be used for payout calculation? | Operator / `QUOTE-REFERRAL001` |
| Should payout evidence be recorded only in HubSpot notes or also in a separate internal ledger? | Operator / future ops task |
| How should partner/referrer QR relationships be approved before distribution? | `ATTRIBUTION002` |
| What dispute appeal or escalation process should operators use? | Future ops task |

## 21. Related Future Tasks
| Task ID | Relationship |
|---|---|
| `QUOTE-REFERRAL001` | Defines internal quote-visible referral awareness and cost boundary. |
| `LEADFLOW002` | Future implementation task for approved referral/source leadflow behavior. |
| `QA-LEADFLOW001` | Future validation plan for referral/source/requestId/HubSpot behavior. |
| `ATTRIBUTION002` | Future named QR source registry. |
| `ATTRIBUTION003` | Future source parameter validation implementation. |
| Future HubSpot schema approval task | Required before runtime writes to actual referral/source properties. |
