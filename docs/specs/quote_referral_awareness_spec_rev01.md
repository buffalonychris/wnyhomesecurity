# Quote Referral Awareness Spec  REV01

Task ID: QUOTE-REFERRAL001  
Status: Draft / Internal Spec  
Customer-facing: No  
Implementation authority: No  
Runtime behavior changed: No  
Quote behavior changed: No  
Pricing changed: No  
Referral payout automation approved: No

## 1. Purpose
Define how referral and named-source attribution may become visible to operators during future quote preparation without creating customer-facing referral language, automatic discounting, payout automation, quote automation, Stripe changes, or HubSpot runtime changes.

This specification is an internal boundary document for future implementation planning only.

## 2. Non-Implementation Boundary
This document does not:

- implement quote UI changes
- implement quote automation
- implement pricing changes
- implement discounts
- implement payout automation
- create HubSpot properties
- change HubSpot sync
- change Stripe or payment behavior
- change customer-facing copy
- change package or pricing copy
- change request estimate behavior
- change `/api/lead-signal`, QRLanding, routes, forms, runtime code, tests, or public files

Future implementation must be separately approved through a bounded task with exact files and validation.

## 3. Source Inputs
| Source | Role |
|---|---|
| `/docs/runtime/leadflow_referral_attribution_runtime.md` | Defines future-safe referral/source/quote-awareness posture. |
| `/docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md` | Defines proposed HubSpot field mapping and approval gates. |
| `/docs/runtime/named_qr_source_attribution_schema_rev01.md` | Defines named QR source schema, validation, and reporting posture. |
| `/docs/ops/referral_payout_review_sop_rev01.md` | Controls manual referral payout review policy. |
| `/docs/runtime/lead_signal_contract.md` | Protects `/api/lead-signal` as the lead intake boundary. |
| `/docs/runtime/request_id_contract.md` | Defines requestId correlation and diagnostics. |
| `/docs/runtime/hubspot_sync_contract.md` | Defines HubSpot sync and partial-failure boundaries. |
| `/docs/runtime/hubspot_properties.md` | Defines HubSpot property governance and no-new-property boundary. |
| `/docs/crm/hubspot/hubspot_kb_rev03.md` | Locked HubSpot architecture and API-only write path. |
| `/docs/crm/hubspot/crm_pipeline_architecture_rev01.md` | Pipeline stage, operator workflow, and protected runtime constraints. |
| `/docs/audits/quote_gen001_rev01.md` | Quote generation and send-quote lineage. |
| `/docs/audits/quote_gen001b_rev01.md` | Quote review routing and query-context lineage. |
| `/docs/audits/quote_send001_rev01.md` | Quote send runtime hardening lineage. |

## 4. Authority Rules
- System governance and the Codex run contract control task execution.
- HubSpot REV03 controls CRM architecture and write-path authority.
- HubSpot referral mapping controls proposed CRM field placement.
- REFERRAL-SOP001 controls payout review policy.
- This document does not override lead-signal, requestId, HubSpot sync, Stripe, Scheduling, QRLanding, or quote runtime contracts.
- If a future implementation conflicts with protected-system contracts, implementation must stop for revision.

## 5. Internal-Only Quote Awareness Principle
Referral/source context may be visible to operators during quote preparation after future approval.

The purpose is operator judgment, not automatic customer pricing behavior.

Internal quote awareness must:

- help operators see relevant attribution before quote finalization when available
- preserve manual referral and named-source context separately
- preserve requestId and HubSpot correlation context
- support internal cost-awareness review
- avoid customer-facing referral terms, fees, discounts, or payout conclusions

## 6. Referral Context To Surface Internally
Future approved quote-preparation surfaces may show these manual referral fields to operators:

| Field | Internal use | Customer-facing |
|---|---|---|
| `referredByName` | Identify the stated referrer. | No |
| `referredByRelationship` | Help operator judge relationship context. | No |
| `referralCaptureMethod` | Show whether referral was captured by form, phone, operator entry, or another approved method. | No |
| `referralCaptureTimestamp` | Show when referral context was captured. | No |
| `referralReviewStatus` | Show current internal review status. | No |
| `referralNotes` | Show only if operator-entered and approved for internal quote review. | No |

Referral context is informational. It does not automatically authorize payout, pricing changes, discounting, or quote approval.

## 7. Named Source Context To Surface Internally
Future approved quote-preparation surfaces may show these named-source fields to operators:

| Field | Internal use | Customer-facing |
|---|---|---|
| `sourceId` | Stable source identifier for attribution and reporting. | No |
| `sourceName` | Operator-readable source name. | No |
| `sourceType` | Source category such as placard, flyer, contractor QR, partner QR, referral card, event, business counter, yard sign, website, or unknown. | No |
| `sourceCampaign` | Campaign grouping for internal review. | No |
| `sourceMedium` | Medium such as QR, print, web, call, direct, or operator entry. | No |
| `sourceLocation` | Internal placement or location context when approved. | No |
| `sourceOwner` | Internal owner or relationship owner. | No |

Named source context is directional until tied to lead, quote, and completed job evidence.

## 8. Lead Entry Path Context
Future quote-preparation views may show:

- `leadType`
- `leadEntryPath`
- `requestId`
- HubSpot contact reference, if available
- HubSpot deal reference, if available

Lead entry path context must not alter route behavior, request estimate behavior, Scheduling status, quote approval, payment state, or customer-facing copy.

## 9. requestId / HubSpot / Lead Correlation
Server-generated `requestId` remains the authoritative correlation key for lead intake records, logs, operator review, and HubSpot sync context.

Future quote awareness should:

- display or link requestId internally when available
- correlate manual referral and named source fields to the same submitted lead/deal context
- preserve HubSpot contact/deal references only when they are available through approved server/API-mediated paths
- tolerate missing HubSpot sync by preserving requestId for manual reconciliation
- never replace requestId with `sourceId`, referral name, quote reference, or HubSpot record ID

## 10. Operator Quote Review Requirements
Future operator quote review must follow these rules:

- operator should see referral/source context before quote finalization when available
- referral/source context is informational, not automatically authoritative
- referral cost may be considered internally before final quote approval
- no automatic margin adjustment
- no automatic customer discount
- no automatic payout
- no automatic quote approval
- no customer-visible referral fee language
- conflicting referral/source evidence must be flagged for operator review rather than resolved automatically

Quote preparation remains an operator-controlled workflow.

## 11. Referral Cost Awareness Boundary
Referral cost awareness may exist only as internal operator context.

Allowed future internal posture:

- show that referral review may affect internal business cost
- show referral review status
- show policy-approved payout percentage or amount only if a future task approves it for internal quote review
- show notes that help the operator decide whether the quote needs manual review before finalization

Not allowed:

- customer-visible referral fee line item
- automatic price increase or margin adjustment
- automatic customer discount
- automatic payout amount commitment
- automatic quote approval or send

## 12. Customer-Facing Restrictions
The customer must not see:

- referral payout percentage
- referral payout amount
- referral approval status
- internal `sourceOwner`
- internal source notes
- internal payout notes
- referral fee included language
- commission language
- automatic discount language tied to referral
- HubSpot internal property names
- source registry details
- referral dispute or decline reasons

Customer-facing quote artifacts, emails, pages, forms, receipts, and package/pricing copy must remain free of internal referral/source/payout review details unless a future approved copy/spec task explicitly changes that posture.

## 13. Pricing / Discount Restrictions
This spec does not approve pricing changes.

Future quote-awareness implementation must not:

- change package pricing
- change add-on pricing
- change quote totals automatically
- create referral-based discounts
- create referral-based markup
- expose internal margin math
- expose internal referral cost math
- alter public package or pricing copy

Any pricing, discount, package, or quote-total change requires a separate bounded task and guardrails review.

## 14. Stripe / Payment Boundary
Stripe is protected and out of scope.

Rules:

- no Stripe changes
- no payout through Stripe
- no payment verification changes
- no deposit/payment success inference from quote awareness
- no payment state changes from referral/source context
- no webhook changes
- no customer redirect authority changes

Stripe payment success remains server-side and webhook-verified under existing runtime rules.

## 15. HubSpot Boundary
HubSpot mapping is governed by `hubspot_referral_property_mapping_rev01`.

Rules:

- no HubSpot properties are created here
- no HubSpot sync behavior is changed here
- quote visibility must not require direct frontend HubSpot writes
- future HubSpot writes must remain API-mediated through `/api/lead-signal` or another explicitly approved server boundary
- missing or partial HubSpot sync must not block quote review if requestId and local context are available
- HubSpot workflow automation must not approve payout, adjust quote, alter payment state, or bypass operator review

## 16. Quote Artifact Boundary
Quote artifact means any customer-visible quote review, quote print, quote email, agreement handoff, or payment-adjacent artifact.

Future internal quote awareness must not leak into quote artifacts unless a future approved task explicitly creates an internal-only operator artifact.

Customer-visible quote artifacts must not include:

- referral payout details
- referral review status
- internal source ownership
- payout notes
- commission or referral fee language
- referral-based discount language
- HubSpot internal IDs or property names

## 17. Payout Review Relationship
Payout review remains governed by REFERRAL-SOP001.

Rules:

- quote awareness does not approve payout
- job completion remains required before payout eligibility review can move past pending completion
- named QR source alone does not make payout eligible
- manual referred-by entry alone does not make payout eligible
- operator decision controls payout review status
- quote-preparation visibility must not create a payable commitment

## 18. Conflict / Duplicate Referral Handling
When referral/source context conflicts:

- preserve manual referral and named source context separately
- show the conflict internally if future implementation supports it
- use `DISPUTED` or `NEEDS_REVIEW` under REFERRAL-SOP001 when evidence is incomplete or conflicting
- do not resolve conflicts automatically
- do not split payout automatically
- do not adjust quote automatically
- do not surface the conflict to the customer

Operator review and documented notes are required before final payout decisions.

## 19. Reporting / Audit Expectations
Future reporting and audit trails should support:

- quote-preparation visibility of referral/source context
- requestId correlation
- HubSpot contact/deal reference when available
- manual referral vs named source separation
- quote finalized vs quote sent status
- job completion dependency for payout review
- referral review status counts
- sourceId/sourceType/sourceCampaign reporting
- audit notes for conflict or dispute handling

Reporting must distinguish internal quote awareness from customer-facing quote content.

## 20. Future Implementation Gates
Future implementation requires:

1. `LEADFLOW002` activation with exact implementation files.
2. A HubSpot schema/property approval task before any actual referral/source property writes.
3. `ATTRIBUTION002` and `ATTRIBUTION003` if named source implementation is involved.
4. REFERRAL-SOP001 as the controlling payout review SOP.
5. `QA-LEADFLOW001` validation plan before release.
6. Operator approval for internal quote-awareness UI/visibility scope.

This spec does not mark future implementation tasks complete.

## 21. Validation Requirements For Future Implementation
Future implementation must validate:

- no customer-facing referral/payout/source details appear in quote artifacts
- no automatic discounting, pricing change, margin change, payout, or quote approval occurs
- `/api/lead-signal` remains protected
- requestId remains authoritative and visible internally
- HubSpot writes remain API-mediated and use approved properties only
- missing HubSpot sync degrades to manual review without blocking quote work
- Stripe behavior remains unchanged
- QRLanding behavior remains unchanged unless a separate QR implementation task approves it
- named source and manual referral fields remain separate
- conflicting referral/source context requires operator review
- build and scoped regression checks pass or pre-existing unrelated failures are documented

## 22. Open Questions
| Question | Owner / future task |
|---|---|
| Which operator surface should show referral/source context: quote review, internal admin panel, HubSpot task, or a separate internal quote checklist? | LEADFLOW002 / operator decision |
| Should payout percentage ever appear during quote preparation, or only referral review status and notes? | Operator / REFERRAL-SOP001 follow-up |
| What exact final contract amount source should payout review use after job completion? | Operator / future payout policy task |
| Should sourceOwner remain registry-only or be mapped into HubSpot later? | ATTRIBUTION002 / HubSpot schema task |
| How should quote review handle partial HubSpot sync when local referral context exists? | QA-LEADFLOW001 |

## 23. Related Future Tasks
| Task ID | Relationship |
|---|---|
| `LEADFLOW002` | Future implementation for approved leadflow/referral/source behavior. |
| Future HubSpot schema/property approval task | Required before actual HubSpot referral/source property writes. |
| `ATTRIBUTION002` | Future named QR source registry. |
| `ATTRIBUTION003` | Future source parameter validation implementation. |
| `REFERRAL-SOP001` | Controlling manual referral payout review SOP. |
| `QA-LEADFLOW001` | Future end-to-end validation plan. |

