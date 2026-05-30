# Referral Compensation Policy  REV01

Task ID: REFERRAL-POLICY001  
Status: Internal operations policy  
Customer-facing: No  
Implementation authority: No  
Tax/legal filing authority: No  
Payout automation approved: No

## 1. Purpose
Define WNYHS internal referral compensation policy for customer referrals, casual partners, strategic partners, purchased hot leads, vendor leads, and installer/contractor relationships.

This policy gives operators a compensation and documentation standard before any future referral payout implementation, LEADFLOW002 work, contractor onboarding work, or payment tracking work is approved.

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
- change scheduling behavior
- change forms, routes, UI, QRLanding, lead-signal, runtime code, tests, or public files
- create customer-facing referral copy, discounts, fees, or terms
- implement legal, accounting, tax, 1099, or payee filing workflows

All referral compensation handling remains manual-review only until a future bounded task explicitly approves implementation.

## 3. Referral Compensation Principles
- Referral compensation is an internal business decision.
- Referral compensation is not customer-facing.
- Referral compensation does not create a customer discount.
- Referral compensation does not create automatic payout approval.
- Referral compensation does not override operator review.
- Referral compensation is separate from Stripe customer payment verification.
- Referral compensation is separate from installer or contractor payment for work performed.
- Referral compensation must be documented before payment.
- WNYHS should not absorb tax or documentation risk caused by a referrer refusing to provide required documentation.

## 4. Referral Relationship Types
Approved internal relationship types:

- `CUSTOMER_REFERRAL`
- `CASUAL_PARTNER`
- `STRATEGIC_PARTNER`
- `PURCHASED_LEAD_VENDOR`
- `INSTALLER_OR_CONTRACTOR`
- `OTHER`

Relationship type describes the referrer/payee relationship. It does not by itself approve payout or set the compensation amount.

## 5. Compensation Model Types
Approved internal compensation model types:

- `PERCENT_OF_COMPLETED_CONTRACT`
- `FLAT_FEE_PER_COMPLETED_JOB`
- `FLAT_FEE_PER_QUALIFIED_LEAD`
- `CUSTOM_AGREEMENT`
- `NO_COMPENSATION`

Compensation model type must be documented before payment. A model type is not a payable commitment until operator review approves the payout.

## 6. Default Customer Referral Policy
Standard customer referral compensation is 10% of final completed contract amount.

Rules:

- This is internal-only.
- It is not customer-facing.
- It does not create a customer discount.
- It does not create automatic payout approval.
- It does not override operator review.
- It applies only after job completion, final payment clearance, payee documentation review, and operator approval.
- Operator may decline, dispute, hold, or override payout when evidence, documentation, or policy requires it.

## 7. Strategic / High-Volume Referrer Policy
High-volume referrers may use custom rates.

Rules:

- Custom rates may be lower or higher than 10%.
- Example: 7% for frequent recurring referrers.
- Example: 12% for unusually valuable strategic partners.
- Custom rates must be approved and documented before payout.
- High-volume referrers may require onboarding before first payout.
- Strategic partner terms should identify relationship type, compensation model type, rate or fee, qualifying event, payment timing, required documentation, and operator approval owner.

## 8. Purchased Hot Lead / Vendor Lead Policy
WNYHS may buy or receive prequalified hot leads from marketing companies or lead vendors.

Rules:

- Compensation may be `FLAT_FEE_PER_QUALIFIED_LEAD`, `FLAT_FEE_PER_COMPLETED_JOB`, `PERCENT_OF_COMPLETED_CONTRACT`, or `CUSTOM_AGREEMENT`.
- Preferred posture: no payment unless the lead converts under the agreed terms.
- Lead vendor compensation is separate from customer referral compensation.
- Vendor/referral source must be documented before payment.
- Purchased hot lead and vendor lead records should identify the vendor, source, agreed compensation model, qualifying event, conversion requirement, and payment hold conditions.
- A vendor lead does not automatically create customer referral payout.

## 9. Installer / Contractor Separation
Installers and subcontractors are not governed only by referral policy.

Rules:

- Installers require contractor onboarding policy.
- Installer payments are separate from referral payouts.
- A person may be both a referrer and installer, but each relationship must be tracked separately.
- Installer payments should require onboarding before work assignment or payment.
- Referral payout status must not replace contractor onboarding status.
- Contractor onboarding should be handled in `CONTRACTOR-ONBOARDING001`.

## 10. Final Contract Amount Rule
For percentage-based referral compensation, final completed contract amount means the internally approved final job amount after job completion.

It does not mean:

- public package estimate
- early rough estimate
- quote signed alone
- deposit amount
- Stripe checkout amount by itself
- customer-visible discount or referral fee

Future implementation must define the exact source of final contract amount before any calculation field or report uses it.

## 11. Payment Timing Rule
No referral payout is made until the customer job is complete and final payment has cleared.

Rules:

- Deposit alone is not enough.
- Quote signed alone is not enough.
- Stripe/payment success remains governed by existing Stripe runtime rules.
- Referral payout review remains manual.
- Final payment clearance must be verified through the approved business process before payout.
- Referral payout payment method does not change the documentation threshold rule.

## 12. Documentation Threshold Rule
WNYHS must track cumulative annual payments to each referrer/payee.

Rules:

- An operator-defined documentation threshold controls when required payee/tax documentation must be collected.
- Default internal planning threshold may be $600 unless changed by current tax/accounting guidance.
- Before issuing additional payment that would bring cumulative annual payouts over the documentation threshold, required documentation must be on file and approved.
- If documentation is missing, payout is held.
- The threshold applies to cumulative annual payouts to the payee, not only to a single job.
- Cash payouts, check payouts, electronic payouts, and other payout methods count toward annual totals.

## 13. Payee Documentation Hold Rule
If required payee/tax documentation is missing, incomplete, outdated, rejected, or not approved, payout must be held until documentation is complete and approved.

Hold rules:

- Do not issue additional payout over the documentation threshold without approved documentation.
- Record the hold reason internally.
- Preserve the approved/eligible referral review status separately from payment release status.
- Do not use cash payment to bypass documentation requirements.
- Do not treat referrer refusal to provide required documentation as WNYHS risk to absorb.

Scenario:

Contractor A has received $500 in referral payouts this year from three completed jobs. Contractor A refers another job that would generate an additional payout and push cumulative annual payouts over the documentation threshold. WNYHS must not issue the additional payout until required payee/tax documentation is complete and approved.

## 14. High-Volume Pre-Onboarding Rule
High-volume referrers may require payee/tax documentation and onboarding before the first payout.

Scenario:

Contractor B or a professional referrer is expected to send recurring business. WNYHS may require payee/tax documentation and onboarding before the first payout to avoid year-end compliance problems.

This rule is especially important for strategic partners, contractors, lead vendors, professional referrers, and any payee likely to cross the documentation threshold.

## 15. Cash Payment Acknowledgement Rule
Cash payouts, if allowed by operator, must still be recorded.

Rules:

- Cash payment does not bypass documentation thresholds.
- Payee must acknowledge payment.
- Annual totals must still be tracked.
- Required tax/payee documentation still applies when threshold rules require it.
- Cash payout evidence should include payee, amount, date, related job/deal, relationship type, compensation model type, operator approval, and payee acknowledgement.

## 16. Annual Payment Tracking Rule
WNYHS must maintain cumulative annual payment totals for each referrer/payee.

Tracking should include:

- payee legal or business name when available
- relationship type
- compensation model type
- job/deal reference
- payment date
- payment amount
- payment method
- cumulative annual total after payment
- documentation threshold status
- required documentation status
- operator approval record

Annual tracking is required even when the payee receives only occasional referral payouts.

## 17. Tax / 1099 Governance Boundary
This policy is not tax or legal advice.

Rules:

- The current threshold and filing requirements must be verified with current IRS/accountant guidance before year-end reporting.
- Use required payee/tax documentation rather than hardcoding only one form.
- 1099 and other filing obligations must be handled through current tax/accounting guidance.
- This policy does not implement tax filing, legal review, or accountant workflow.
- WNYHS should not issue payments in a way that avoids required documentation or reporting.

## 18. Operator Override Rules
Operator may approve, decline, dispute, adjust, or hold referral payout within this policy.

Allowed override examples:

- use a lower custom rate for a high-volume referrer
- use a higher custom rate for a strategic partner
- use a flat fee instead of a percentage
- decline payout when evidence is insufficient
- hold payout when payee documentation is missing
- separate vendor lead payment from customer referral payment
- separate installer work payment from referral payout

Operator override must be documented before payout and must not create customer-facing copy, quote behavior changes, payout automation, HubSpot schema changes, or Stripe changes.

## 19. Examples / Scenarios
### Standard customer referral
A past customer refers a new customer. The referred job completes and final payment clears. The default internal referral compensation is 10% of final completed contract amount, subject to operator review, annual payment tracking, documentation threshold rules, and payee documentation approval.

### Strategic recurring referrer
A recurring partner sends steady qualified referrals. WNYHS may document a custom 7% rate, require onboarding before first payout, and hold payment if required payee/tax documentation is missing.

### High-value strategic partner
A strategic partner sends unusually valuable business. WNYHS may document a custom 12% rate before payout. The rate does not create automatic approval and does not become customer-facing.

### Purchased hot lead
A lead vendor provides a prequalified hot lead. WNYHS may pay a flat fee per qualified lead, flat fee per completed job, percentage of completed contract, or custom agreement, but preferred posture is no payment unless the lead converts under agreed terms.

### Contractor above threshold
Contractor A has received $500 in referral payouts this year from three completed jobs. Contractor A refers another job that would generate an additional payout and push cumulative annual payouts over the documentation threshold. WNYHS must not issue the additional payout until required payee/tax documentation is complete and approved.

### Installer who also refers business
A person installs equipment for WNYHS and also refers a customer. Installer payment must follow contractor onboarding and work-payment rules. Referral compensation must follow this referral policy. Each relationship is tracked separately.

### Cash payout
An operator allows a cash referral payout. The payout must still be recorded, acknowledged by the payee, counted toward annual totals, and held if documentation threshold rules require missing documentation.

## 20. Relationship To Existing Contracts
This policy supports and does not override:

- `/docs/runtime/leadflow_referral_attribution_runtime.md`
- `/docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md`
- `/docs/runtime/named_qr_source_attribution_schema_rev01.md`
- `/docs/ops/referral_payout_review_sop_rev01.md`
- `/docs/specs/quote_referral_awareness_spec_rev01.md`
- `/docs/codex/CODEX_RUN_CONTRACT.md`

If this policy conflicts with HubSpot REV03, `/api/lead-signal` runtime boundaries, Stripe runtime rules, Scheduling ownership, or higher system governance, the higher-authority document controls and implementation must stop for revision.

## 21. Future Implementation Gates
Future implementation requires separate bounded tasks before any runtime behavior changes.

Required gates:

- operator approval of this policy
- payee documentation process approval
- contractor onboarding policy in `CONTRACTOR-ONBOARDING001`
- source registry approval before named partner/vendor QR implementation
- HubSpot schema/property approval before any CRM writes
- LEADFLOW002 activation before referral/source leadflow implementation
- QA plan approval before release
- payment tracking design approval before any payout ledger or automation work

No future implementation task is approved by this policy.

## 22. Open Questions
| Question | Owner / future task |
|---|---|
| What exact required payee/tax documentation package should WNYHS use for each payee type? | Operator / accountant guidance |
| Should the documentation threshold remain $600 or be changed by current tax/accounting guidance? | Operator / accountant guidance |
| Where should annual referrer/payee payment totals be tracked before automation exists? | Future payment tracking task |
| What onboarding steps are required before installer work assignment? | `CONTRACTOR-ONBOARDING001` |
| Should strategic partner rates require written agreement before the first referred job or before first payout? | Operator / future ops task |
| What evidence is required for a purchased hot lead to count as qualified? | Operator / vendor agreement |
| Are cash payouts allowed at all, and who may approve them? | Operator decision |

## 23. Related Future Tasks
| Task ID | Relationship |
|---|---|
| `CONTRACTOR-ONBOARDING001` | Define contractor/installer payee onboarding before work assignment or payment. |
| `LEADFLOW002` | Future referral/source leadflow implementation; not approved here. |
| `QA-LEADFLOW001` | Future validation plan for referral/source/requestId/HubSpot behavior. |
| `ATTRIBUTION002` | Future named QR source registry. |
| `ATTRIBUTION003` | Future source parameter validation implementation. |
| Future payment tracking task | Define annual payee totals, documentation threshold holds, and manual/automated tracking rules. |
| Future HubSpot schema approval task | Required before actual referral/source/payout fields are written to HubSpot. |
