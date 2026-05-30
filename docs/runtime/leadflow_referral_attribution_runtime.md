# Leadflow Referral Attribution Runtime Contract  REV01

Task ID: LEADFLOW001
Status: Draft / Runtime Contract
Customer-facing: No
Implementation authority: No
Runtime behavior changed: No
CRM schema changed: No
Quote behavior changed: No
Referral payout automation approved: No

## 1. Purpose
Define the future-safe runtime contract for lead intake modernization, manual referral capture, named QR source attribution, HubSpot referral mapping, quote-visible referral awareness, and manual referral payout review posture.

This contract exists so future implementation tasks can extend leadflow behavior without bypassing the protected `/api/lead-signal` architecture, requestId correlation rules, QR attribution contracts, Scheduling confirmation boundary, HubSpot REV03, Stripe protections, or customer-facing claims guardrails.

## 2. Non-Implementation Boundary
LEADFLOW001 is documentation-only. It does not:

- change forms, routes, UI, CSS, pages, or customer-facing copy
- change `/api/lead-signal` runtime behavior
- change API payload validation or response envelopes
- create or use HubSpot properties
- change HubSpot schema, pipeline, workflow, or API write behavior
- implement named QR parsing, source parameter parsing, or QRLanding behavior
- change quote behavior, quote UI, pricing, discounts, packages, or automations
- approve or implement referral payout automation
- change Scheduling or Google Calendar behavior
- change Stripe behavior

All field names and models in this document are proposed contract names until approved by future implementation and mapping tasks.

## 3. Source Inputs
| Source | Role |
|---|---|
| `AGENTS.md` | Root execution, HubSpot, Stripe, claims, branch, PR, and build rules. |
| `docs/system/project.md` | Authority chain and protected project scope. |
| `docs/system/guardrails.md` | Protected chain, no unsupported claims, no Stripe bypass. |
| `docs/system/step-current.md` | Current operational context and protected runtime locks. |
| `docs/system/master-task-register.md` | Task status and future placeholder governance. |
| `docs/system/document_status_reconciliation_rev01.md` | LEADFLOW001 gap definition and focused review set. |
| `docs/runtime/lead_signal_contract.md` | Existing `/api/lead-signal` boundary and payload behavior. |
| `docs/runtime/request_id_contract.md` | Server requestId and QR attribution requestId distinction. |
| `docs/runtime/hubspot_properties.md` | HubSpot property ownership and no-new-property rule. |
| `docs/runtime/hubspot_sync_contract.md` | API-mediated HubSpot sync and partial-failure behavior. |
| `docs/runtime/qrlanding_runtime.md` | `/qrlanding` attribution model and future source-parameter model. |
| `docs/runtime/qr_attribution_reporting.md` | QR reporting and review SOP. |
| `docs/specs/main_funnel_contract_rev01.md` | Main funnel route and CTA contract. |
| `docs/specs/public_funnel_standards_rev01.md` | Public funnel and claims boundaries. |
| `docs/specs/qr_funnel_standards_rev01.md` | QR funnel source and form protection rules. |
| `docs/runtime/google_calendar_runtime.md` | Read-only availability and post-confirmation calendar write boundary. |
| `docs/runtime/scheduling_ownership.md` | Request-first Scheduling ownership and confirmation rules. |
| `docs/runtime/resend_runtime.md` | Outbound email/operator notification boundary. |
| `docs/runtime/cloudflare_email_routing.md` | Inbound email routing boundary. |
| `docs/crm/hubspot/hubspot_kb_rev03.md` | Locked HubSpot executable spec. |
| `docs/crm/hubspot/crm_pipeline_architecture_rev01.md` | Canonical pipeline, stage ownership, and internal ID rules. |

## 4. Authority Chain
1. Root execution rules and system governance control all future work.
2. HubSpot REV03 controls CRM architecture and write-path authority.
3. Runtime contracts control current behavior until a future bounded task explicitly updates them.
4. This LEADFLOW001 contract defines future-safe extension rules only.
5. Future implementation tasks must update this contract and downstream owner docs before changing behavior.

If this contract conflicts with HubSpot REV03, Stripe runtime rules, Scheduling ownership, or `/api/lead-signal` protected behavior, the higher-authority document controls and implementation must stop.

## 5. Existing Systems That Must Not Be Bypassed
Future leadflow work must preserve:

- `/api/lead-signal` as the protected server-side lead intake boundary
- server-generated requestId authority
- existing QR attribution event behavior: `qrlanding_view`, `estimate_form_started`, `estimate_form_submitted`
- QRLanding route fallback and existing shared `/qrlanding` destination
- API-mediated HubSpot writes only
- HubSpot partial-failure reporting when sync fails
- Resend/operator notification boundaries when notification behavior is involved
- Scheduling request/pending-confirmation/owner-confirmation model
- Stripe webhook/server-side payment verification authority
- current funnel route order and protected Quote Review to Schedule chain

## 6. Lead Entry Path Model
Future leadflow may support two lead entry paths. Both must eventually route through the protected intake architecture if implemented.

| Path | Purpose | Minimum Conceptual Inputs | Must Not Imply |
|---|---|---|---|
| Call Me Back / Talk To Us First | Low-friction callback lead path. | name, phone, optional preferred callback time, optional notes, optional referred-by field. | confirmed appointment, quote, Scheduling commitment, payment, or customer-visible referral terms. |
| Request On-Site Estimate | Full estimate request path. | existing estimate information plus optional referred-by field and optional requested/preferred appointment window. | customer-authoritative booking, final quote, automatic referral payout, or Stripe/payment state. |

Both paths must preserve source attribution, requestId correlation, QR attribution context when present, HubSpot sync boundaries, and Scheduling confirmation rules.

## 7. Callback Request Path Contract
The future callback path is a low-friction lead path for customers who want contact before a full estimate request.

Conceptual fields:

- customer name
- phone
- optional email
- optional preferred callback time
- optional notes
- optional referred-by context
- source attribution context when available

Contract rules:

- It does not create a confirmed appointment.
- It does not create a quote.
- It does not authorize payment, Scheduling, or package changes.
- It should create operator-visible context only after future implementation approval.
- It should route through `/api/lead-signal` or a future explicitly approved server intake boundary aligned with `/api/lead-signal`.
- It must not write directly to HubSpot from frontend/client logic.

## 8. On-Site Estimate Request Path Contract
The future on-site estimate path remains the fuller estimate path.

Conceptual inputs:

- existing estimate/request fields already supported by current intake
- optional `referredByName`
- optional referral context fields
- source attribution context when available
- optional requested/preferred appointment date or window under existing Scheduling request rules

Contract rules:

- Requested appointment windows remain requests only.
- No customer-authoritative booking is created.
- Owner/operator confirmation remains required before any confirmed appointment state.
- requestId, source attribution, QR attribution, and HubSpot sync boundaries must be preserved.
- Future implementation must not break `estimate_form_started` or `estimate_form_submitted` behavior.

## 9. Manual Referral Capture Contract
Manual referral capture records what the customer or operator says about a human/entity referral.

Proposed contract field names:

| Field | Purpose |
|---|---|
| `referredByName` | Human-readable name of the referrer. |
| `referredByRelationship` | Customer-stated relationship to the referrer. |
| `referredByContact` | Optional referrer contact context, if voluntarily provided and approved for capture. |
| `referralNotes` | Operator/customer notes about the referral context. |
| `referralEnteredBy` | Who entered or confirmed the referral context. |
| `referralCaptureMethod` | How the referral was captured, such as form, phone, operator entry, or imported note. |
| `referralCaptureTimestamp` | Timestamp when referral context was captured. |

Exact field names are proposed contract names only until implementation approval and HubSpot mapping approval.

## 10. Named QR Source Attribution Contract
Named QR source attribution records the controlled source of a scan or inbound path, such as a contractor card, placard batch, flyer, event, or partner placement.

Proposed contract field names:

| Field | Purpose |
|---|---|
| `sourceId` | Stable machine-readable source identifier. |
| `sourceName` | Human-readable display name. |
| `sourceType` | Category such as placard, flyer, contractor QR, event QR, referral card, or website. |
| `sourceCampaign` | Campaign grouping for reporting. |
| `sourceMedium` | Medium such as QR, direct, print, call, or web. |
| `sourceLocation` | Placement or region context when appropriate. |
| `sourceOwner` | Internal operator or external relationship owner. |
| `sourceActive` | Whether the source is currently valid for new attribution. |
| `sourceCreatedAt` | Timestamp/date when the source record was created. |

Named QR source implementation is future work and must not be added by this task.

## 11. Manual Referral vs Automatic Source Attribution
Manual referral and automatic source attribution are separate concepts.

- Manual referral describes who the customer says referred them.
- Automatic source attribution describes where the lead came from according to controlled source metadata.
- One must not overwrite the other.
- Both may exist on the same lead.

Example:

- `sourceId = mike-contractor-qr`
- `sourceName = Mike Contractor QR`
- `referredByName = Uncle Joe`

In this example, the QR source and the human referral are both retained for operator review.

## 12. Lead Lifecycle State Model
The following lifecycle states are conceptual. They do not create runtime or CRM workflow behavior until approved by future tasks.

| State | Intended Meaning | Implementation Status |
|---|---|---|
| `LEAD_RECEIVED` | Lead accepted by protected intake. | Future mapping only. |
| `CALLBACK_REQUESTED` | Customer requested low-friction callback. | Future CRM/workflow state. |
| `ESTIMATE_REQUESTED` | Customer requested an estimate. | Future mapping to current intake model. |
| `OPERATOR_REVIEW_NEEDED` | Human operator review required. | Aligns conceptually with current pipeline architecture. |
| `APPOINTMENT_REQUESTED` | Customer requested/preferred an appointment window. | Future mapping only; not confirmed booking. |
| `PENDING_OWNER_CONFIRMATION` | Owner/operator confirmation required. | Existing Scheduling posture; preserve. |
| `CONFIRMED` | Owner/operator confirmed appointment or next step. | Existing Scheduling meaning only where current contracts allow. |
| `QUOTE_IN_PROGRESS` | Internal quote preparation. | Future workflow state. |
| `QUOTE_SENT` | Quote delivered through approved process. | Future mapping only. |
| `CLOSED_WON` | Opportunity closed successfully. | Future CRM workflow state. |
| `CLOSED_LOST` | Opportunity closed unsuccessfully or not fit. | Future CRM workflow state. |
| `REFERRAL_REVIEW_NEEDED` | Referral requires operator review. | Future referral SOP state. |
| `REFERRAL_APPROVED` | Referral payout approved manually. | Future referral SOP state. |
| `REFERRAL_PAID` | Referral payout recorded manually. | Future referral SOP state; no automation approved. |
| `REFERRAL_DECLINED` | Referral payout declined manually. | Future referral SOP state. |

Future CRM/workflow states must not be implemented until approved by HubSpot mapping, referral SOP, and QA tasks.

## 13. Required Data Field Definitions
Future implementation should define fields in four groups before code changes.

| Group | Proposed Fields | Notes |
|---|---|---|
| Lead type | `leadType`, `leadEntryPath` | Distinguish callback request from estimate request. |
| Manual referral | `referredByName`, `referredByRelationship`, `referredByContact`, `referralNotes`, `referralEnteredBy`, `referralCaptureMethod`, `referralCaptureTimestamp` | Proposed names only. |
| Source attribution | `sourceId`, `sourceName`, `sourceType`, `sourceCampaign`, `sourceMedium`, `sourceLocation`, `sourceOwner`, `sourceActive`, `sourceCreatedAt` | Proposed names only. |
| Referral review | `referralReviewStatus`, `referralPayoutPercentage`, `referralPayoutAmount`, `referralPayoutNotes` | Internal only; no automation approved. |

Field definitions must specify owner, type, allowed values, retention posture, HubSpot mapping, and whether the field is customer-provided, operator-entered, or system-derived.

## 14. HubSpot Mapping Requirements
Future HubSpot mapping must define, without creating properties in this task:

- contact-level referral context
- deal-level referral context
- source attribution fields
- lead type field
- referral review status field
- referral payout percentage field
- referral payout amount field
- referral payout notes field
- whether each field belongs on contact, deal, note, task, or reporting-only records
- whether each value is customer-provided, operator-entered, system-derived, or calculated
- allowed values and enum constraints before runtime writes

No HubSpot property may be created or used until approved in a future HubSpot property mapping task.

## 15. HubSpot Property Approval Gate
Before implementation, `HUBSPOT-REFERRAL001` must:

1. list exact proposed HubSpot property internal names
2. identify contact vs deal vs note/task placement
3. define field type and allowed enum values
4. verify schema compatibility in HubSpot
5. update `docs/runtime/hubspot_properties.md`
6. update `docs/runtime/hubspot_sync_contract.md` if sync behavior changes
7. confirm HubSpot REV03 compliance
8. preserve `/api/lead-signal` as the only CRM write path

Until that task is approved and completed, referral/source fields may be contract-only names, not runtime writes.

## 16. Lead Signal Payload Future Extension Rules
Any future lead-signal implementation must:

- preserve the existing `/api/lead-signal` boundary
- preserve server requestId correlation
- preserve existing QR attribution event names and behavior
- avoid breaking `estimate_form_started` and `estimate_form_submitted`
- avoid direct frontend CRM writes
- avoid direct HubSpot writes outside the API layer
- maintain partial-failure behavior if HubSpot sync fails
- preserve structured notification and HubSpot status reporting
- keep Stripe untouched
- keep Scheduling request/pending-confirmation semantics unchanged
- treat referral and named-source fields as optional unless future validation explicitly says otherwise
- avoid blocking lead submission solely because optional referral/source attribution is absent

## 17. requestId and Attribution Correlation Rules
Correlation rules:

- Server-generated `requestId` from `/api/lead-signal` remains authoritative for backend lead records, logs, operator notifications, and HubSpot sync.
- QRLanding session-scoped attribution requestId remains directional funnel telemetry until associated with submitted lead context.
- Future referral/source fields should be captured with the server requestId when a lead is submitted.
- If callback and estimate paths both exist later, both must preserve requestId response visibility and downstream correlation.
- If HubSpot sync fails, requestId must remain available for manual reconciliation.
- `sourceId` and referral fields must not replace requestId.

## 18. QRLanding / Named Source Rules
Named source governance rules:

- Named QR source IDs must be controlled and documented before use.
- No blind or unmanaged QR source creation is allowed.
- Printed QR assets must be documented before distribution.
- `sourceId` values should be stable and machine-readable.
- `sourceName` values should be human-readable.
- Source attribution should survive through lead intake, HubSpot mapping, quote review context, and reporting after future implementation approval.
- Existing `/qrlanding` must not be bypassed unless a future task explicitly approves a new route.
- Legacy/shared `/qrlanding` traffic must remain supported.
- Source parameters must degrade safely when absent or invalid.

## 19. Scheduling Boundary Rules
LEADFLOW001 does not change Scheduling behavior.

Future leadflow implementation must preserve:

- no direct customer-authoritative booking
- customer may request or prefer an appointment window
- operator/owner confirms
- calendar events only follow the approved confirmation flow
- appointment request state remains distinct from confirmed appointment state
- Scheduling errors or unavailable availability lookup must degrade to manual confirmation posture

Referral/source attribution must not move a Scheduling request into `CONFIRMED`.

## 20. Operator Notification Requirements
Future operator notifications should make referral and source context visible when available, subject to implementation approval.

Internal notification context may include:

- lead entry path: callback or estimate
- sourceId/sourceName/sourceType when available
- manual referral fields when available
- requestId
- Scheduling request/preferred window, if supplied
- HubSpot sync status if included by existing response/diagnostics patterns

Operator notification changes must preserve Resend outbound boundaries and must not expose secrets or imply unsupported appointment/quote/payment states.

## 21. Customer Acknowledgement Requirements
Future customer acknowledgements must stay conservative.

They may acknowledge:

- request received
- callback requested
- estimate request received
- preferred window received as a request only
- operator will review and follow up according to approved copy

They must not claim:

- confirmed appointment unless owner/operator confirmation has occurred through approved Scheduling flow
- confirmed quote
- payment or deposit status
- referral payout eligibility
- referral terms
- customer-visible referral fee or discount

## 22. Quote Visibility Requirements
Referral/source context may be visible internally during quote preparation after future approval.

Internal-only requirements:

- Referral source visible to operator.
- Referral percentage visible internally only.
- Referral payout estimate visible internally only.
- Referral cost can be considered before final quote approval.
- Referral terms must not be customer-facing.
- No automatic discounting.
- No automatic payout.
- No customer-visible referral fee language.
- Quote-visible context must not alter public pricing, package copy, or customer-facing claims without explicit future scope.

## 23. Referral Payout Review Status Model
Manual referral payout review statuses:

| Status | Meaning |
|---|---|
| `NOT_APPLICABLE` | No referral payout review applies. |
| `NEEDS_REVIEW` | Referral context exists and operator review is needed. |
| `ELIGIBLE_PENDING_JOB_COMPLETION` | Referral appears eligible but job completion is not confirmed. |
| `APPROVED_PENDING_PAYMENT` | Operator approved payout, but payment is not recorded. |
| `PAID` | Payout was manually recorded as paid. |
| `DECLINED` | Operator declined payout. |
| `DISPUTED` | Referral is disputed or requires further review. |

Payout automation is not approved. These statuses are manual-review concepts until `REFERRAL-SOP001` and implementation tasks approve handling.

## 24. Forbidden Automation
Future tasks must not introduce without explicit approval:

- automatic referral payout
- automatic payout percentage assignment
- automatic payout amount calculation as a payable commitment
- automatic referral approval
- automatic customer discounting
- customer-visible referral fee language
- HubSpot workflow automation for referral payout
- direct Stripe payments for referral payout
- appointment confirmation from referral/source context
- quote approval without operator review
- source creation from untrusted arbitrary URL parameters
- direct frontend HubSpot writes

## 25. Reporting / Review Requirements
Future reporting should support operator review without treating attribution as final truth by itself.

Reporting should distinguish:

- manual referral context
- automatic named source attribution
- QRLanding event chain
- callback vs estimate lead path
- requestId correlation
- HubSpot sync status
- Scheduling requested vs confirmed status
- quote sent vs job completed status
- referral payout review status

QR traffic and source attribution are directional until tied to lead, quote, and closed-job evidence.

## 26. Future Implementation Gates
Required future tasks before implementation:

| Task ID | Purpose |
|---|---|
| `LEADFLOW001-IMPLEMENTATION` or `LEADFLOW002` | Implement approved lead intake and referral/source behavior. |
| `HUBSPOT-REFERRAL001` | Approve exact HubSpot referral/source properties and mapping. |
| `ATTRIBUTION001` | Define named QR source attribution schema and source governance. |
| `QUOTE-REFERRAL001` | Define internal quote-visible referral awareness behavior. |
| `REFERRAL-SOP001` | Define manual referral payout review SOP. |
| `QA-LEADFLOW001` | Define end-to-end validation plan before release. |

## 27. Validation Requirements For Future Implementation
Any future implementation must validate:

- only approved files changed
- `/api/lead-signal` remains the protected intake path
- server requestId is returned and propagated
- QR attribution events still work
- callback path does not imply appointment, quote, payment, or payout
- estimate path preserves existing estimate fields
- Scheduling request remains pending owner confirmation
- HubSpot sync remains API-layer only
- missing HubSpot config still returns structured partial status
- no HubSpot properties are written before approval
- no direct frontend HubSpot writes exist
- no Stripe behavior changed
- no quote automation or public referral fee copy exists
- named QR source parameters degrade safely
- source and referral fields do not overwrite each other
- build and relevant regression checks pass or pre-existing unrelated failures are documented

## 28. Open Questions
| Question | Owner / Future Task |
|---|---|
| Should callback requests create deals immediately or contact/task/note only until qualified? | `LEADFLOW002`, `HUBSPOT-REFERRAL001` |
| Which referral fields belong at contact level vs deal level? | `HUBSPOT-REFERRAL001` |
| Should named source IDs be stored in repo docs, HubSpot, KV, or another controlled registry? | `ATTRIBUTION001` |
| What exact referral payout policy, percentage, timing, and eligibility rules are allowed? | `REFERRAL-SOP001` |
| Should referral payout percentage ever appear on a quote artifact internally, or only in operator notes? | `QUOTE-REFERRAL001` |
| How should disputes, duplicate referrers, and multiple source claims be resolved? | `REFERRAL-SOP001` |
| What is the canonical relationship between QR session requestId and server requestId in reporting? | `ATTRIBUTION001`, `QA-LEADFLOW001` |

## 29. Related Future Tasks
| Task ID | Status |
|---|---|
| `LEADFLOW002` | Future implementation task; not approved by this contract. |
| `HUBSPOT-REFERRAL001` | Future HubSpot property mapping task. |
| `ATTRIBUTION001` | Future named QR source attribution schema task. |
| `QUOTE-REFERRAL001` | Future quote-visible referral awareness spec. |
| `REFERRAL-SOP001` | Future manual referral payout review SOP. |
| `QA-LEADFLOW001` | Future end-to-end QA plan. |

This contract must be reviewed before any implementation task touching callback lead intake, referral fields, HubSpot referral mapping, named QR source attribution, quote-visible referral context, or referral payout review behavior.
