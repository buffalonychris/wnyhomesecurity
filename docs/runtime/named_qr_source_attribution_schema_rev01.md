# Named QR Source Attribution Schema Contract  REV01

Task ID: ATTRIBUTION001  
Status: Draft / Runtime Schema Contract  
Customer-facing: No  
Implementation authority: No  
Runtime behavior changed: No  
QR codes created: No  
HubSpot schema changed: No

## 1. Purpose
Define the future schema for named QR source tracking across partner-specific, location-specific, campaign-specific, and print-asset-specific QR sources.

This contract defines how source IDs should be named, registered, validated, preserved, reviewed, and mapped through future leadflow, HubSpot, and reporting work. It does not implement source tracking.

## 2. Non-Implementation Boundary
This task does not:

- create QR codes
- create print assets
- create a source registry file
- implement URL parsing
- modify `/qrlanding`
- modify `/api/lead-signal`
- create HubSpot properties
- write to HubSpot
- implement referral capture
- implement payout logic
- change quote behavior
- change customer-facing copy
- change runtime code, UI, routes, forms, Stripe, Scheduling, QRLanding, lead-signal, public files, or tests

All source fields and URL parameters below are schema proposals until a future bounded task approves implementation.

## 3. Source Inputs
| Source | Role |
|---|---|
| `/docs/runtime/leadflow_referral_attribution_runtime.md` | Defines manual referral vs named source separation and future leadflow gates. |
| `/docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md` | Defines proposed HubSpot mapping relationship for source fields. |
| `/docs/runtime/qrlanding_runtime.md` | Defines current shared `/qrlanding` attribution model and future source-parameter posture. |
| `/docs/runtime/qr_attribution_reporting.md` | Defines directional reporting and review rules. |
| `/docs/runtime/lead_signal_contract.md` | Defines protected `/api/lead-signal` boundary. |
| `/docs/runtime/request_id_contract.md` | Defines server requestId and QR session requestId distinction. |
| `/docs/runtime/hubspot_properties.md` | Defines HubSpot property governance and no-new-property boundary. |
| `/docs/runtime/hubspot_sync_contract.md` | Defines HubSpot sync and partial failure behavior. |
| `/docs/specs/qr_funnel_standards_rev01.md` | Protects QR form, source tracking, and lead API boundaries. |
| `/docs/brand/print_assets/qr_placard_system_rev01.md` | Defines QR placard print rules and `/qrlanding` destination expectations. |
| `/public/brand/print-assets/qr-placards/README.md` | Documents current local QR placard print package. |
| `/docs/system/document_status_reconciliation_rev01.md` | Identifies named QR attribution as a required pre-implementation gap. |

## 4. Authority Rules
- `/docs/codex/CODEX_RUN_CONTRACT.md` controls Codex execution.
- `/docs/runtime/qrlanding_runtime.md` controls current QRLanding attribution behavior.
- `/docs/runtime/lead_signal_contract.md` controls the `/api/lead-signal` boundary.
- `/docs/runtime/request_id_contract.md` controls requestId correlation.
- `/docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md` controls proposed HubSpot source-field mapping.
- This contract does not override HubSpot REV03, QR funnel standards, print asset standards, or protected runtime locks.
- If there is a conflict, the higher-authority governance/runtime contract controls and implementation must stop.

## 5. Existing QR Attribution Model
The current production-safe model is shared-route attribution:

- Physical QR placards route to `/qrlanding`.
- `/qrlanding` traffic is directional placard-attribution signal, not absolute proof of scan origin.
- QR attribution events are directional until tied to submitted lead data.
- `/api/lead-signal` remains the submission boundary.
- Server-generated requestId remains authoritative for backend correlation.
- No per-source named QR parameter behavior is approved by this task.

## 6. Named Source Attribution Purpose
Named source attribution should allow future reporting by:

- specific partner/referrer QR placement
- specific business counter placement
- specific location or town batch
- specific campaign
- specific printed asset type/version
- specific placard/flyer/referral-card batch

Named source attribution must improve operator review and reporting without creating customer-facing claims, payout automation, or untrusted attribution truth.

## 7. Source ID Naming Rules
Every future `sourceId` must be:

- lowercase only
- kebab-case
- stable once printed
- unique in the source registry
- understandable to operators
- short enough for practical reporting
- safe to appear in URLs and logs

Every future `sourceId` must avoid:

- spaces
- private personal information
- phone numbers
- email addresses
- customer names
- sensitive attributes
- secrets
- random unmanaged values
- one-off values not present in the approved registry

Allowed examples:

- `mike-contractor-qr`
- `abc-hardware-counter-qr`
- `williamsville-placard-batch-001`
- `hamburg-flyer-spring-2026`
- `orchard-park-referral-card-001`

Source IDs must not be renamed after printing. If a printed source is no longer active, retire it rather than changing its ID.

## 8. Source Type Taxonomy
Proposed `sourceType` enum candidates:

- `placard`
- `flyer`
- `contractor-qr`
- `partner-qr`
- `referral-card`
- `event`
- `business-counter`
- `yard-sign`
- `website`
- `unknown`

Future implementation must normalize unknown, blank, or unsupported values to `unknown` or ignore unsafe source metadata.

## 9. Source Registry Required Fields
A future source registry must define these fields:

| Field | Required | Purpose |
|---|---:|---|
| `sourceId` | Yes | Stable machine-readable identifier. |
| `sourceName` | Yes | Operator-readable source name. |
| `sourceType` | Yes | Controlled source type taxonomy value. |
| `sourceCampaign` | Yes | Campaign grouping for reporting. |
| `sourceMedium` | Yes | Medium such as QR, print, web, or partner placement. |
| `sourceLocation` | Conditional | Placement/town/business/event location where appropriate. |
| `sourceOwner` | Yes | Operator-visible owner or relationship owner. |
| `sourceActive` | Yes | Whether the source is active for new attribution. |
| `sourceCreatedAt` | Yes | Registry creation timestamp/date. |
| `sourceRetiredAt` | Conditional | Retirement timestamp/date when source is retired. |
| `printedAssetType` | Conditional | Placard, flyer, referral card, yard sign, counter card, etc. |
| `printedAssetVersion` | Conditional | Version or batch reference for printed asset. |
| `qrDestination` | Yes | Destination URL, normally `/qrlanding?src=<sourceId>`. |
| `notes` | No | Internal notes for operator/reporting context. |

This task does not create the actual registry file. A future ATTRIBUTION002 task must approve and create the registry.

## 10. Source URL Parameter Contract
Preferred future URL pattern:

```text
/qrlanding?src=<sourceId>
```

Optional future parameters, only if approved:

- `campaign`
- `medium`
- `batch`

Arbitrary URL parameters must not become trusted attribution fields automatically. Future implementation must validate any source-related parameter against the approved source registry and preserve safe fallback behavior.

## 11. Allowed Source Parameter Names
Allowed future source parameter names:

| Parameter | Status | Rule |
|---|---|---|
| `src` | Preferred | Must match a registered `sourceId`. |
| `campaign` | Optional future | Must match or derive from the registered source record. |
| `medium` | Optional future | Must match approved source medium values. |
| `batch` | Optional future | Must match a registered printed asset batch or be ignored. |

Preferred implementation should treat `src` as the registry lookup key and use registry values as canonical, rather than trusting redundant URL values.

## 12. Disallowed / Unsafe Source Parameters
Future implementation must not trust or persist arbitrary parameters such as:

- names, emails, phone numbers, addresses, or customer identifiers
- freeform referrer names
- payout amounts or percentages
- deal stages, quote values, or payment state
- secrets or tokens
- unregistered partner IDs
- raw URL blobs
- unbounded UTM values copied directly into HubSpot properties

Unsupported parameters may be ignored or captured only as bounded diagnostic context if a future task explicitly approves that behavior.

## 13. Source Validation Rules
Future source validation must:

- parse only approved source parameter names
- validate `src` against the approved registry
- require lowercase kebab-case source IDs
- reject or ignore values containing spaces, uppercase letters, unsafe punctuation, secrets, emails, phone numbers, or sensitive data
- load canonical source metadata from the registry, not from untrusted URL text
- preserve legacy `/qrlanding` behavior when no source is present
- not block lead submission because optional source metadata is absent or invalid
- log/diagnose invalid source metadata in a bounded, non-secret way if implemented

## 14. Invalid / Missing Source Fallback Rules
Fallback rules:

- Missing source = generic QRLanding source.
- Invalid source = `unknown_source` or ignored source metadata.
- Retired source = record if safe, but mark as retired-source context.
- Source validation failure must not block lead submission.
- Unknown source values must not create registry records automatically.
- Unknown source values must not create HubSpot properties or enum values automatically.

Legacy printed QR assets without source parameters must continue to work through `/qrlanding`.

## 15. Named Source vs Manual Referral
Named source attribution and manual referral are separate.

- Named source answers: where did this lead come from according to a controlled asset/source registry?
- Manual referral answers: who did the customer or operator say referred them?
- One must not overwrite the other.
- Both may exist on the same lead/deal.

Example:

- `sourceId = mike-contractor-qr`
- `referredByName = Uncle Joe`

Both values must be preserved separately through future leadflow, HubSpot, and reporting work.

## 16. QR Asset Registration Rules
Every printed named QR must have a documented `sourceId` before distribution.

Registration rules:

- Printed QR destination must remain `/qrlanding` unless future route approval exists.
- Preferred destination is `/qrlanding?src=<sourceId>`.
- Print asset type/version should be recorded.
- Source owner should be operator-visible.
- Source registry must support retired sources without deleting history.
- Printed asset batches should remain traceable after retirement.
- QR scan testing must verify that the destination loads the expected QR landing funnel.

This contract does not create QR codes or print assets.

## 17. Partner / Referrer QR Rules
Partner/referrer QR source IDs must:

- use safe business/operator labels, not private personal information
- avoid personal phone/email/customer names
- be approved before printing
- map to a registry owner
- not imply automatic referral payout
- not expose customer-facing referral terms
- not bypass manual referral capture

Example safe pattern:

- `mike-contractor-qr`
- `abc-hardware-counter-qr`

If a partner QR and manual referral both exist, preserve both separately.

## 18. Location-Specific QR Rules
Location-specific QR source IDs must describe public/non-sensitive placement context.

Allowed examples:

- `williamsville-placard-batch-001`
- `hamburg-flyer-spring-2026`

Rules:

- avoid private residential addresses
- avoid customer names
- use town/region/business placement labels only when approved
- preserve batch numbering for printed assets
- retire sources when placement is removed or campaign ends

## 19. Campaign-Specific QR Rules
Campaign-specific source IDs should capture a bounded campaign, asset type, and time window.

Rules:

- campaign names must be internally clear and claim-safe
- campaign source IDs must be stable after printing
- campaign metadata should support reporting by sourceId, campaign, medium, sourceType, and printed batch
- campaign changes after printing require a new sourceId or updated registry status, not sourceId mutation

## 20. HubSpot Mapping Relationship
HubSpot source mapping is governed by `/docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md`.

Rules:

- No HubSpot properties are created by this task.
- Source fields are future mapping candidates only.
- Source attribution should be deal-visible when approved.
- Customer-facing display is not approved.
- HubSpot enum/property creation requires a separate approved schema task.
- Future HubSpot writes must remain API-mediated through `/api/lead-signal`.

Candidate source fields include `sourceId`, `sourceName`, `sourceType`, `sourceCampaign`, `sourceMedium`, `sourceLocation`, `sourceOwner`, `sourceActive`, and `sourceCreatedAt`, subject to the HubSpot mapping contract.

## 21. Lead Signal Future Extension Rules
Future `/api/lead-signal` extensions must:

- preserve existing endpoint and response behavior
- preserve server requestId generation
- preserve QR attribution event behavior
- treat source attribution as optional metadata
- not block submission when source metadata is missing, invalid, or retired
- validate source metadata server-side before any CRM write
- avoid direct frontend HubSpot writes
- avoid changing quote, payment, payout, or Scheduling authority
- preserve partial failure diagnostics when HubSpot mapping fails

## 22. requestId Correlation Rules
- Server-generated requestId remains authoritative for submitted lead correlation.
- Client QR session requestId remains directional pre-submission attribution telemetry.
- `sourceId` must not replace requestId.
- Source registry metadata should be joined to submitted lead context only after a valid submission.
- Failed/partial HubSpot sync must still preserve requestId for manual reconciliation.
- Reporting should distinguish QR session attribution from submitted lead requestId.

## 23. Reporting / Review Rules
Future reporting should support:

- report by `sourceId`
- report by `sourceType`
- report by campaign
- report by printed asset batch
- report by active vs retired source
- distinguish scan/source attribution from closed-job attribution
- distinguish directional QR events from submitted lead records
- distinguish submitted leads from booked quotes and closed jobs

Attribution remains directional until tied to lead, quote, and closed job evidence.

## 24. Privacy / Customer-Facing Rules
Named source attribution is internal.

Rules:

- Do not expose `sourceId`, source owner, source registry details, or partner/referrer attribution to customers without future approval.
- Do not put private personal information in source IDs.
- Do not store emails, phone numbers, customer names, private addresses, or sensitive traits in source IDs.
- Do not use source metadata to make customer-facing payout, discount, or referral eligibility claims.
- Customer-facing display of source attribution is not approved.

## 25. Forbidden Automation
This contract does not approve:

- automatic source registry creation from URL parameters
- automatic referral capture
- automatic payout eligibility
- automatic payout calculation
- automatic HubSpot property creation
- automatic HubSpot workflow creation
- automatic quote changes
- automatic discounts
- automatic appointment confirmation
- automatic source trust from arbitrary URL text

## 26. Future Implementation Gates
Future implementation requires:

1. ATTRIBUTION002 Named QR Source Registry.
2. ATTRIBUTION003 Source Parameter Validation Implementation.
3. HUBSPOT-REFERRAL001 implementation/schema approval task.
4. LEADFLOW002 activation with exact implementation files.
5. QA-LEADFLOW001 validation plan.
6. Operator approval for any partner QR, campaign QR, or print asset QR creation.

## 27. Open Questions
| Question | Future owner / task |
|---|---|
| Should the source registry live in repo docs, runtime config, KV, or another managed store? | ATTRIBUTION002 |
| Should `campaign`, `medium`, and `batch` ever be accepted from URL, or only derived from registry? | ATTRIBUTION003 |
| How should retired sources appear in operator reports? | ATTRIBUTION002 / QR reporting follow-up |
| What is the approval flow for partner-specific QR creation? | ATTRIBUTION002 / operator process |
| Should source owner be mapped into HubSpot or kept reporting-only? | HUBSPOT-REFERRAL001 follow-up |
| How should duplicate manual referral and named source claims be resolved? | REFERRAL-SOP001 |

## 28. Related Future Tasks
| Task ID | Purpose |
|---|---|
| `ATTRIBUTION002` | Create the named QR source registry. |
| `ATTRIBUTION003` | Implement source parameter validation and preservation. |
| `HUBSPOT-REFERRAL001` implementation/schema approval task | Create/approve actual HubSpot source properties only if authorized. |
| `LEADFLOW002` | Future leadflow implementation after contracts and QA are approved. |
| `QA-LEADFLOW001` | Validate source attribution, referral separation, requestId correlation, and no protected-system regressions. |
