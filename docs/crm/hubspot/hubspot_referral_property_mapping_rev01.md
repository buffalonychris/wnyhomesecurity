# HubSpot Referral Property Mapping Contract  REV01

Task ID: HUBSPOT-REFERRAL001  
Status: Internal CRM mapping contract  
Customer-facing: No  
Implementation authority: No  
HubSpot properties created: No  
Runtime behavior changed: No  
Required before: LEADFLOW002, ATTRIBUTION001, QUOTE-REFERRAL001, and referral-aware HubSpot sync changes

## 1. Purpose
Define the proposed HubSpot contact, deal, note, and task placement for referral attribution, named QR source attribution, lead entry path, and referral payout review fields before any LEADFLOW002 implementation.

This contract gives future implementation tasks a reviewable field map, internal property naming model, enum model, ownership boundary, approval checklist, and sync rules.

## 2. Non-Implementation Boundary
This document does not:

- create HubSpot properties
- write to HubSpot
- change HubSpot schema, pipeline, workflow, contact records, deals, notes, or tasks
- change `/api/lead-signal`
- change API payloads
- implement referral fields
- implement named QR source attribution
- implement payout automation
- change quote behavior
- change customer-facing copy
- change routes, forms, UI, Stripe, Scheduling, QRLanding, or tests

All internal names below are proposed until an explicitly approved implementation task verifies and creates/updates the HubSpot schema.

## 3. Source Inputs
| Source | Role |
|---|---|
| `/docs/runtime/leadflow_referral_attribution_runtime.md` | Conceptual referral, named source, lead path, payout review, and future gate model. |
| `/docs/runtime/hubspot_properties.md` | Existing HubSpot property ownership and no-new-property boundary. |
| `/docs/runtime/hubspot_sync_contract.md` | API-mediated sync, partial failure, note/task, and diagnostic behavior. |
| `/docs/runtime/lead_signal_contract.md` | Protected `/api/lead-signal` intake boundary and response envelope. |
| `/docs/runtime/request_id_contract.md` | Server requestId correlation authority. |
| `/docs/runtime/qrlanding_runtime.md` | QRLanding attribution and future source-parameter model. |
| `/docs/runtime/qr_attribution_reporting.md` | Directional QR reporting and evidence rules. |
| `/docs/crm/hubspot/hubspot_kb_rev03.md` | Locked HubSpot architecture and API-only write path. |
| `/docs/crm/hubspot/crm_pipeline_architecture_rev01.md` | Canonical pipeline/stage ownership and operator workflow. |
| `/docs/system/document_status_reconciliation_rev01.md` | Documentation gap map and required review posture. |

## 4. Authority Rules
- HubSpot REV03 controls CRM architecture.
- All CRM writes must remain server/API mediated through `/api/lead-signal`.
- HubSpot stage writes must use internal stage IDs only.
- Runtime contracts control current behavior until an approved implementation task updates them.
- This mapping contract is not implementation authority.
- If this contract conflicts with HubSpot REV03, the runtime HubSpot contracts, Stripe protections, Scheduling ownership, or the run contract, the higher-authority source controls.

## 5. Existing HubSpot Constraints
- HubSpot is the CRM source of truth for contacts, deals, notes, tasks, and lifecycle context.
- The frontend must not write directly to HubSpot.
- `/api/lead-signal` is the only approved CRM write path.
- No new HubSpot properties are currently authorized by this document.
- Current sync can return partial status and can skip failing properties.
- Contact/deal writes must avoid invalid enum values and missing-property failures.
- Pipeline/stage changes are out of scope.
- Stripe payment state remains webhook/server authoritative and out of scope.
- Scheduling confirmation state remains owner/operator authoritative and out of scope.

## 6. Mapping Principles
- Store durable customer/referrer facts on contacts only when they are stable across opportunities.
- Store opportunity-specific attribution, review, and payout context on deals.
- Store freeform, sensitive, unverified, or long narrative detail in notes rather than structured properties.
- Use tasks for operator review actions, not as durable field storage.
- Keep manual referral and named source attribution separate.
- Keep source attribution optional and non-blocking.
- Keep payout fields internal only and manual-review only.
- Preserve requestId as the correlation key for every referral/source write.

## 7. Contact-Level Field Candidates
Contact-level candidates are limited to stable, high-level context that may apply across future deals.

| Conceptual field | Classification | Rationale |
|---|---|---|
| `referredByName` | Contact | Stable human-readable referrer name may help future contact context. |
| `referredByRelationship` | Contact | Stable relationship context may help operator review. |
| `referralCaptureTimestamp` | Contact | Last referral capture timestamp can support latest-context review. |
| `leadType` | Contact | Latest known lead type can support segmentation, but deal remains authoritative per opportunity. |
| `leadEntryPath` | Contact | Latest known entry path can support segmentation, but deal remains authoritative per opportunity. |

Contact-level values should be latest-known context only. Deal-level values remain the source for opportunity-specific reporting.

## 8. Deal-Level Field Candidates
Deal-level fields are the primary structured storage target for referral/source review because attribution and payout context are opportunity-specific.

| Conceptual field group | Classification | Rationale |
|---|---|---|
| Manual referral fields | Deal | Referral context can differ per opportunity. |
| Named source fields | Deal | Source attribution is tied to a lead/deal event. |
| Lead path fields | Deal | Callback vs estimate path is opportunity-specific. |
| Referral review fields | Deal | Review status and payout review belong to the revenue opportunity. |
| requestId correlation | Deal | Existing runtime uses requestId for lead/deal reconciliation. |

## 9. Note / Task Field Candidates
Notes and tasks should support operator review without forcing every detail into schema.

| Conceptual field | Classification | Placement rule |
|---|---|---|
| `referredByContact` | Note | Store in note by default because it may contain freeform contact detail. |
| `referralNotes` | Note | Store full narrative in note; optional short internal deal summary only if later approved. |
| `sourceLocation` | Note and Reporting-only | Freeform placement context belongs in note; controlled future source registry can support reporting. |
| `sourceOwner` | Note and Reporting-only | Use note/registry until source ownership schema is approved. |
| `referralPayoutNotes` | Note | Internal payout review narrative belongs in note. |
| `referralReviewStatus` | Task and Deal | Deal stores status; task prompts operator action when status requires review. |

## 10. Fields Not Approved For Customer-Facing Use
These fields are internal only and must not appear in customer-facing copy, quote artifacts, public pages, forms, emails, or receipts without a future approved copy/spec task:

- `referralPayoutPercentage`
- `referralPayoutAmount`
- `referralPayoutNotes`
- `referralReviewStatus`
- `referredByContact`
- source-owner/source-placement internals
- HubSpot internal property names
- payout eligibility conclusions

## 11. Proposed Internal Property Names
Proposed HubSpot property names use the existing `wny_` custom-property pattern.

| Conceptual field | Proposed internal name | Display label | Object type | Classification | Field type | Allowed values | Source of value | Write timing | Required | Customer-facing | Implementation approval status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `referredByName` | `wny_referral_referred_by_name` | Referral - Referred By Name | Contact | Contact | Single-line text | N/A | Customer/operator | On lead submission or operator update | No | No | Proposed only |
| `referredByRelationship` | `wny_referral_relationship` | Referral - Relationship | Contact | Contact | Enumeration | See section 13 | Customer/operator | On lead submission or operator update | No | No | Proposed only |
| `referralCaptureTimestamp` | `wny_referral_captured_at` | Referral - Captured At | Contact | Contact | Date/time | N/A | System/operator | On lead submission or operator update | No | No | Proposed only |
| `leadType` | `wny_lead_type_latest` | Lead Type - Latest | Contact | Contact | Enumeration | See section 13 | System | On lead submission | No | No | Proposed only |
| `leadEntryPath` | `wny_lead_entry_path_latest` | Lead Entry Path - Latest | Contact | Contact | Enumeration | See section 13 | System | On lead submission | No | No | Proposed only |
| `referredByName` | `wny_deal_referral_referred_by_name` | Deal Referral - Referred By Name | Deal | Deal | Single-line text | N/A | Customer/operator | On deal create/update | No | No | Proposed only |
| `referredByRelationship` | `wny_deal_referral_relationship` | Deal Referral - Relationship | Deal | Deal | Enumeration | See section 13 | Customer/operator | On deal create/update | No | No | Proposed only |
| `referralEnteredBy` | `wny_deal_referral_entered_by` | Deal Referral - Entered By | Deal | Deal | Enumeration | See section 13 | Operator/system | On deal create/update or operator edit | No | No | Proposed only |
| `referralCaptureMethod` | `wny_deal_referral_capture_method` | Deal Referral - Capture Method | Deal | Deal | Enumeration | See section 13 | System/operator | On deal create/update | No | No | Proposed only |
| `referralCaptureTimestamp` | `wny_deal_referral_captured_at` | Deal Referral - Captured At | Deal | Deal | Date/time | N/A | System/operator | On deal create/update | No | No | Proposed only |
| `sourceId` | `wny_source_id` | Source ID | Deal | Deal | Single-line text | Controlled registry values | System | On lead submission | No | No | Proposed only |
| `sourceName` | `wny_source_name` | Source Name | Deal | Deal | Single-line text | Controlled registry values | System/operator | On lead submission or operator correction | No | No | Proposed only |
| `sourceType` | `wny_source_type` | Source Type | Deal | Deal | Enumeration | See section 13 | System/operator | On lead submission | No | No | Proposed only |
| `sourceCampaign` | `wny_source_campaign` | Source Campaign | Deal | Deal | Single-line text | Controlled registry values | System/operator | On lead submission | No | No | Proposed only |
| `sourceMedium` | `wny_source_medium` | Source Medium | Deal | Deal | Enumeration | See section 13 | System | On lead submission | No | No | Proposed only |
| `sourceActive` | `wny_source_active_at_capture` | Source Active At Capture | Deal | Deal | Boolean | `true`, `false` | System | On lead submission | No | No | Proposed only |
| `sourceCreatedAt` | `wny_source_created_at` | Source Created At | Deal | Deal | Date/time | N/A | System/registry | On lead submission from registry | No | No | Proposed only |
| `leadType` | `wny_lead_type` | Lead Type | Deal | Deal | Enumeration | See section 13 | System | On deal create/update | No | No | Proposed only |
| `leadEntryPath` | `wny_lead_entry_path` | Lead Entry Path | Deal | Deal | Enumeration | See section 13 | System | On deal create/update | No | No | Proposed only |
| `referralReviewStatus` | `wny_referral_review_status` | Referral Review Status | Deal | Deal | Enumeration | See section 13 | Operator/system default | On deal create/update and operator review | No | No | Proposed only |
| `referralPayoutPercentage` | `wny_referral_payout_percentage` | Referral Payout Percentage | Deal | Deal | Number | 0-100, policy-bound | Operator/calculated after approval | Operator review only | No | No | Proposed only |
| `referralPayoutAmount` | `wny_referral_payout_amount` | Referral Payout Amount | Deal | Deal | Currency/number | Non-negative, policy-bound | Operator/calculated after approval | Operator review only | No | No | Proposed only |

## 12. Proposed Field Types
| Field type | Use |
|---|---|
| Single-line text | Stable IDs, display names, campaign codes, short names. |
| Multi-line text / note body | Narrative details, contact detail, payout notes, source placement notes. |
| Enumeration | Bounded status, lead type, entry path, source type, source medium, capture method. |
| Boolean | Source active at capture. |
| Date/time | Capture and source-created timestamps. |
| Number | Referral payout percentage. |
| Currency/number | Referral payout amount, if HubSpot account configuration supports currency cleanly. |

## 13. Proposed Enum Values
### `wny_referral_relationship` and `wny_deal_referral_relationship`
- `UNKNOWN`
- `FRIEND`
- `FAMILY`
- `NEIGHBOR`
- `CUSTOMER`
- `CONTRACTOR`
- `BUSINESS_PARTNER`
- `COMMUNITY_CONTACT`
- `OTHER`

### `wny_deal_referral_entered_by`
- `CUSTOMER`
- `OPERATOR`
- `SYSTEM`
- `IMPORTED`

### `wny_deal_referral_capture_method`
- `FORM`
- `PHONE`
- `TEXT`
- `EMAIL`
- `OPERATOR_ENTRY`
- `IMPORTED_NOTE`
- `UNKNOWN`

### `wny_source_type`
- `QR_PLACARD`
- `FLYER`
- `CONTRACTOR_QR`
- `REFERRAL_CARD`
- `EVENT_QR`
- `WEBSITE`
- `DIRECT`
- `OTHER`
- `UNKNOWN`

### `wny_source_medium`
- `QR`
- `PRINT`
- `CALL`
- `WEB`
- `DIRECT`
- `OPERATOR_ENTRY`
- `UNKNOWN`

### `wny_lead_type` and `wny_lead_type_latest`
- `CALLBACK_REQUEST`
- `ESTIMATE_REQUEST`
- `SUPPORT_REQUEST`
- `UNKNOWN`

### `wny_lead_entry_path` and `wny_lead_entry_path_latest`
- `MAIN_SITE`
- `QRLANDING`
- `PACKAGE_FLOW`
- `CONTACT_PAGE`
- `DISCOVERY`
- `PHONE`
- `OPERATOR_ENTRY`
- `UNKNOWN`

### `wny_referral_review_status`
- `NOT_APPLICABLE`
- `NEEDS_REVIEW`
- `ELIGIBLE_PENDING_JOB_COMPLETION`
- `APPROVED_PENDING_PAYMENT`
- `PAID`
- `DECLINED`
- `DISPUTED`

## 14. Manual Referral Field Mapping
| Conceptual field | Primary classification | Proposed HubSpot placement | Sync rule |
|---|---|---|---|
| `referredByName` | Contact and Deal | Contact latest + deal-specific property | Write optional value when provided; never block lead if absent. |
| `referredByRelationship` | Contact and Deal | Contact latest + deal-specific enum | Normalize to approved enum or `UNKNOWN`. |
| `referredByContact` | Note | HubSpot note body only | Do not map to structured property until privacy/retention policy is approved. |
| `referralNotes` | Note | HubSpot note body only | Append to request note; do not expose to customer. |
| `referralEnteredBy` | Deal | Deal enum | System default may be `CUSTOMER` for form capture or `OPERATOR` for manual entry. |
| `referralCaptureMethod` | Deal | Deal enum | Normalize to approved enum. |
| `referralCaptureTimestamp` | Contact and Deal | Contact latest + deal-specific date/time | Use server-side timestamp when captured by intake. |

## 15. Named QR Source Field Mapping
| Conceptual field | Primary classification | Proposed HubSpot placement | Sync rule |
|---|---|---|---|
| `sourceId` | Deal | Deal text property | Must come from controlled registry or approved parser; do not create from untrusted arbitrary values. |
| `sourceName` | Deal | Deal text property | Human-readable registry value. |
| `sourceType` | Deal | Deal enum | Normalize to approved enum or `UNKNOWN`. |
| `sourceCampaign` | Deal | Deal text property | Controlled campaign/grouping value. |
| `sourceMedium` | Deal | Deal enum | Normalize to approved enum. |
| `sourceLocation` | Note / Reporting-only | Note now; future registry/reporting field later | Avoid unbounded property values until source registry is approved. |
| `sourceOwner` | Note / Reporting-only | Note now; future registry/reporting field later | Avoid structured CRM ownership field until owner model is approved. |
| `sourceActive` | Deal | Boolean snapshot | Store source active state at capture time only if registry provides it. |
| `sourceCreatedAt` | Deal | Date/time snapshot | Store source registry creation date only if registry provides it. |

## 16. Lead Entry Path Mapping
| Conceptual field | Contact mapping | Deal mapping | Rule |
|---|---|---|---|
| `leadType` | `wny_lead_type_latest` | `wny_lead_type` | Deal is authoritative for opportunity; contact is latest-known segmentation only. |
| `leadEntryPath` | `wny_lead_entry_path_latest` | `wny_lead_entry_path` | Deal is authoritative for opportunity; contact is latest-known segmentation only. |

Lead entry path must not change funnel route behavior or Scheduling state.

## 17. Referral Review Status Mapping
| Conceptual field | Primary classification | Proposed HubSpot placement | Rule |
|---|---|---|---|
| `referralReviewStatus` | Deal and Task | Deal enum + optional task | Default `NOT_APPLICABLE` when no referral; `NEEDS_REVIEW` when referral context exists and no review has occurred. |

Task usage is allowed only as future implementation design: create/maintain one operator task for review when status requires action. This document does not create tasks.

## 18. Referral Payout Field Mapping
| Conceptual field | Primary classification | Proposed HubSpot placement | Rule |
|---|---|---|---|
| `referralPayoutPercentage` | Deal | Deal number | Internal only; operator/calculated after approved policy. |
| `referralPayoutAmount` | Deal | Deal currency/number | Internal only; no payable commitment without manual approval. |
| `referralPayoutNotes` | Note | HubSpot note body | Internal payout review narrative only. |

No payout automation is approved. Stripe payout behavior is out of scope.

## 19. Sync Behavior Requirements
Future referral-aware sync must:

- preserve `/api/lead-signal` as the only CRM write path
- keep all referral/source fields optional unless a future validation contract says otherwise
- normalize enum values before HubSpot writes
- omit empty optional fields rather than writing blanks
- keep manual referral and named source attribution separate
- preserve existing contact/deal/note/task sync behavior
- preserve existing HubSpot partial-status response shape
- never write payment state or Scheduling confirmation from referral/source data
- not block lead submission solely because optional referral/source mapping fails

## 20. Partial Failure Handling
If a referral/source property fails during future HubSpot sync:

- Preserve the lead submission response and requestId.
- Use existing property skip/retry behavior where applicable.
- Surface failing property diagnostics through existing HubSpot status patterns.
- Preserve note/task attempts where safe.
- Do not retry with guessed enum values.
- Do not downgrade the customer-facing intake result solely because optional attribution fields failed.
- Require operator remediation when schema drift or missing properties are detected.

## 21. requestId Correlation Rules
- Server-generated requestId from `/api/lead-signal` remains authoritative.
- Client QR attribution requestId remains directional session telemetry until joined to a submitted lead.
- Every future referral/source write should include requestId in deal, note, or task context.
- requestId must not be replaced by `sourceId`.
- If HubSpot sync partially fails, requestId remains the manual reconciliation key.
- requestId should appear in referral review notes/tasks when those are created by future implementation.

## 22. HubSpot Workflow Automation Boundary
This document does not approve HubSpot workflow automation.

Future workflow automation must not:

- approve referral payouts
- calculate payable amounts as commitments
- send customer-facing referral terms
- move payment stages
- confirm appointments
- create calendar events
- bypass operator review
- bypass `/api/lead-signal`

Any workflow automation requires a separate bounded task, operator approval, and updated HubSpot/runtime contracts.

## 23. Property Approval Checklist
Before LEADFLOW002 or referral-aware sync implementation, the operator or future task must verify:

- [ ] each proposed internal property name is approved or revised
- [ ] object type is approved for each property
- [ ] field type exists in HubSpot and matches this contract
- [ ] enum values are created exactly as approved
- [ ] required/optional posture is approved
- [ ] customer-facing exposure is confirmed as `No`
- [ ] privacy/retention posture for `referredByContact` is decided
- [ ] source registry ownership is decided before named QR implementation
- [ ] payout policy is approved before payout percentage/amount writes
- [ ] `/api/lead-signal` remains the only CRM write path
- [ ] `docs/runtime/hubspot_properties.md` is updated before runtime writes
- [ ] `docs/runtime/hubspot_sync_contract.md` is updated if sync behavior changes
- [ ] QA covers missing property and invalid enum partial failures

## 24. Future Implementation Gate
Implementation remains blocked until:

1. This mapping is approved or revised by the operator.
2. HubSpot properties/enums are created through an explicitly approved HubSpot schema task.
3. ATTRIBUTION001 defines source registry and named QR source governance.
4. REFERRAL-SOP001 defines payout review policy.
5. QUOTE-REFERRAL001 defines any internal quote visibility.
6. QA-LEADFLOW001 defines end-to-end validation.
7. LEADFLOW002 is activated with exact allowed implementation files.

## 25. Open Questions
| Question | Required owner / future task |
|---|---|
| Should callback requests create deals immediately, or contact/note/task only until qualified? | LEADFLOW002 / operator decision |
| Should contact-level referral fields be latest-known only or first-touch preserved? | HUBSPOT-REFERRAL001 approval follow-up |
| Is `referredByContact` allowed in HubSpot notes, and what retention policy applies? | Operator / privacy review |
| Should `sourceLocation` and `sourceOwner` remain registry/reporting-only rather than HubSpot properties? | ATTRIBUTION001 |
| What payout percentage policy, if any, is approved? | REFERRAL-SOP001 |
| Should payout amount be stored as currency or calculated only in reports? | REFERRAL-SOP001 / QUOTE-REFERRAL001 |
| Which HubSpot workflow actions, if any, are allowed after operator approval? | Future workflow task |

## 26. Related Future Tasks
| Task ID | Relationship |
|---|---|
| `LEADFLOW002` | Future implementation; not approved or completed by this document. |
| `ATTRIBUTION001` | Must define named QR source registry and source governance. |
| `QUOTE-REFERRAL001` | Must define internal quote-visible referral context boundaries. |
| `REFERRAL-SOP001` | Must define manual referral payout review SOP before payout fields are used. |
| `QA-LEADFLOW001` | Must validate referral/source/requestId/HubSpot behavior before release. |
| Future HubSpot schema task | Must create/verify actual properties and enums before runtime writes. |
