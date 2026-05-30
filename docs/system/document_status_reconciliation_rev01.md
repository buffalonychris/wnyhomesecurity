# Documentation Status Reconciliation REV01

Task ID: DOCSTATUS001
Status: Internal governance / document reconciliation / status map
Customer-facing: No
Implementation authority: No

## 1. Purpose
This document reconciles the current documentation map after creation of `docs/MARKDOWN_MANIFEST.md` and `docs/catalogs/wnyhs_capability_catalog_rev03.md`.

It identifies active authoritative documents, supporting historical audit records, superseded candidates, unknown documents needing future review, and focused review sets for LEADFLOW001, HubSpot, QR attribution, Stripe, Scheduling, Capability Catalog, BOM001, and PACKAGE001 work.

This is documentation/governance only. It does not implement LEADFLOW001, referral logic, named QR attribution, request estimate changes, HubSpot changes, Stripe changes, Scheduling changes, route changes, UI changes, or runtime behavior changes.

## 2. Source Inputs
| Source | Classification | Notes |
|---|---|---|
| `AGENTS.md` | Active Authoritative | Root execution rules and stop conditions. |
| `docs/system/project.md` | Active Authoritative | Authority chain and execution gates. |
| `docs/system/agent.md` | Active Authoritative | Codex operating standard. |
| `docs/system/plan.md` | Active Authoritative | Planning and validation requirements. |
| `docs/system/guardrails.md` | Active Authoritative | Protected systems and claims boundaries. |
| `docs/system/step-current.md` | Active Authoritative | Current operational context. |
| `docs/system/master-task-register.md` | Active Authoritative | Task execution driver. |
| `docs/DOCUMENT_CATALOG.md` | Active Supporting | Catalog of known documentation, not a replacement for source docs. |
| `docs/MARKDOWN_MANIFEST.md` | Active Supporting | Repo-wide markdown inventory and review-set index. |
| `docs/runtime/README.md` | Active Supporting | Runtime documentation foundation. |
| `docs/runtime/runtime_ownership_map.md` | Active Supporting | Runtime owner/status map; several entries remain partial. |
| `docs/runtime/lead_signal_contract.md` | Active Authoritative | `/api/lead-signal` intake boundary. |
| `docs/runtime/request_id_contract.md` | Active Authoritative | Server requestId contract. |
| `docs/runtime/hubspot_properties.md` | Active Authoritative | HubSpot property contract. |
| `docs/runtime/hubspot_sync_contract.md` | Active Authoritative | HubSpot sync contract. |
| `docs/runtime/qrlanding_runtime.md` | Active Authoritative | `/qrlanding` runtime attribution contract. |
| `docs/runtime/qr_attribution_reporting.md` | Active Supporting | QR attribution review/reporting SOP. |
| `docs/runtime/google_calendar_runtime.md` | Active Authoritative | Read-only availability and manual confirmation calendar model. |
| `docs/runtime/scheduling_ownership.md` | Active Authoritative | Scheduling ownership and confirmation contract. |
| `docs/runtime/stripe_runtime.md` | Active Authoritative | Stripe server-side verification and outstanding issue map. |
| `docs/specs/main_funnel_contract_rev01.md` | Active Authoritative | Main funnel route and CTA contract. |
| `docs/specs/public_funnel_standards_rev01.md` | Active Authoritative | Public funnel roles and claim boundaries. |
| `docs/specs/qr_funnel_standards_rev01.md` | Active Authoritative | QR funnel standards and protected form boundaries. |
| `docs/crm/hubspot/hubspot_kb_rev03.md` | Active Authoritative | Locked HubSpot architecture. |
| `docs/crm/hubspot/crm_pipeline_architecture_rev01.md` | Active Authoritative | Canonical pipeline architecture and stage ID lock. |
| `docs/catalogs/wnyhs_capability_catalog_rev03.md` | Active Authoritative | Internal capability validation source for BOM001 and PACKAGE001. |

## 3. Authority Rules
- The authority chain starts with root execution rules, then `/docs/system/project.md`, `/docs/system/agent.md`, `/docs/system/plan.md`, `/docs/system/guardrails.md`, `/docs/system/step-current.md`, and the active task scope.
- HubSpot REV03 is the controlling CRM source. All CRM writes must remain API-layer mediated through `/api/lead-signal`.
- Runtime contracts in `docs/runtime/` control implementation boundaries for lead intake, requestId, HubSpot sync, QR attribution, Scheduling, Stripe, and email-adjacent flows.
- Historical audits explain why past changes were made. They are not permission to repeat or expand behavior.
- `docs/MARKDOWN_MANIFEST.md` is an index. It does not supersede runtime contracts, HubSpot REV03, active specifications, or task-specific instructions.
- `docs/catalogs/wnyhs_capability_catalog_rev03.md` governs internal capability validation, launch suitability, and BOM priority. It is not a public package, price, or final hardware approval document.
- If classification is uncertain, use `Unknown / Needs Review` and do not delete, rename, consolidate, or rewrite the source document.

## 4. Active Authoritative Documents
| Document | Status Label | Controls |
|---|---|---|
| `AGENTS.md` | Active Authoritative | Root execution rules, branch/PR/build expectations, protected-system stop conditions. |
| `docs/system/project.md` | Active Authoritative | Authority chain and task gates. |
| `docs/system/agent.md` | Active Authoritative | Agent execution discipline. |
| `docs/system/plan.md` | Active Authoritative | Validation and completion requirements. |
| `docs/system/guardrails.md` | Active Authoritative | Protected workflows and forbidden claims. |
| `docs/system/step-current.md` | Active Authoritative | Current operational context. |
| `docs/system/master-task-register.md` | Active Authoritative | Task state and bounded work definitions. |
| `docs/crm/hubspot/hubspot_kb_rev03.md` | Active Authoritative | HubSpot API-layer-only architecture. |
| `docs/crm/hubspot/crm_pipeline_architecture_rev01.md` | Active Authoritative | Pipeline movement policy and stage ID lock. |
| `docs/runtime/lead_signal_contract.md` | Active Authoritative | Lead intake boundary and event payload rules. |
| `docs/runtime/request_id_contract.md` | Active Authoritative | Server requestId generation and propagation. |
| `docs/runtime/hubspot_properties.md` | Active Authoritative | HubSpot property governance. |
| `docs/runtime/hubspot_sync_contract.md` | Active Authoritative | HubSpot sync behavior and partial-status reporting. |
| `docs/runtime/qrlanding_runtime.md` | Active Authoritative | `/qrlanding` runtime attribution and current source limitations. |
| `docs/runtime/google_calendar_runtime.md` | Active Authoritative | Read-only availability model. |
| `docs/runtime/scheduling_ownership.md` | Active Authoritative | Request, owner review, confirmation, and calendar-event ownership. |
| `docs/runtime/stripe_runtime.md` | Active Authoritative | Stripe server-side verification and payment authority. |
| `docs/specs/main_funnel_contract_rev01.md` | Active Authoritative | Main funnel route sequence and estimate handoff. |
| `docs/specs/public_funnel_standards_rev01.md` | Active Authoritative | Public funnel role boundaries. |
| `docs/specs/qr_funnel_standards_rev01.md` | Active Authoritative | QR funnel form and source-tracking protections. |
| `docs/catalogs/wnyhs_capability_catalog_rev03.md` | Active Authoritative | Capability validation, launch suitability, and BOM priority. |
| `docs/brand/brand_asset_authority_rev01.md` | Active Authoritative | Approved brand and QR asset authority. |
| `docs/brand/print_assets/qr_placard_system_rev01.md` | Active Authoritative | QR placard system and `/qrlanding` destination rule. |
| `docs/brand/print_assets/half_sheet_flyer_system_rev01.md` | Active Authoritative | Half-sheet flyer production system. |

## 5. Supporting Historical Documents
| Document Set | Status Label | Use |
|---|---|---|
| `docs/audits/*_implementation_rev01.md` | Historical Audit | Past implementation evidence and regression context. |
| `docs/audits/*_rev01.md` funnel, QR, payment, email, CRM, quote, and support audits | Historical Audit | Useful lineage for future review sets, but not standalone implementation authority. |
| `docs/crm/hubspot/hubspot_kb_rev01.md` and `docs/crm/hubspot/hubspot_kb_rev02.md` | Historical Audit | Historical CRM context only; REV03 controls. |
| `docs/system/step_101_foundation.md`, `docs/system/step_102_governance_baseline.md`, `docs/system/step_201_branch_2_home_security.md` | Historical Audit | Step lineage; current control comes from `step-current.md`. |
| `docs/audits/funnel_ops001_next_task_sequence_rev01.md` | Active Supporting | Queue normalization and sequencing context. |
| `docs/audits/crm_deal002a_partial_completion_rev01.md` | Active Supporting | CRM hardening lineage; use with active runtime contracts. |
| `docs/audits/qrlanding_crm_notification_inventory_rev01.md` | Active Supporting | QRLanding and CRM notification lineage. |

## 6. Superseded Candidate Documents
| Document | Status Label | Reason |
|---|---|---|
| `docs/crm/hubspot/hubspot_kb_rev01.md` | Superseded Candidate | HubSpot REV03 is locked and authoritative. |
| `docs/crm/hubspot/hubspot_kb_rev02.md` | Superseded Candidate | HubSpot REV03 is locked and authoritative. |
| `docs/catalogs/wnyhs_capability_catalog_rev02.md` | Superseded Candidate | REV03 preserves the REV02 feature universe and adds validation fields. Keep for lineage. |
| `docs/catalogs/wnyhs_capability_catalog_rev02.csv` | Superseded Candidate | Source input to REV03. Keep for lineage and row-count checks. |
| `docs/implementation-plan.md` | Superseded Candidate | Likely superseded by current system plan and step-control process. |
| `docs/stripe-cloudflare.md` | Superseded Candidate | Useful history, but `docs/runtime/stripe_runtime.md` and deployment governance should control current Stripe behavior. |
| `docs/specs/funnel-spec.md` | Superseded Candidate | Main, public, and QR funnel contracts now appear more specific. |
| `docs/specs/full-stack-spec.md` | Superseded Candidate | Runtime contracts and system governance are more current. |
| `docs/specs/control-plane-spec.md` | Superseded Candidate | Needs review against WNYHS Core and Capability Catalog REV03 before reuse. |

## 7. Unknown / Needs Review Documents
| Document | Status Label | Review Need |
|---|---|---|
| `docs/state_handoff_contract_rev_01.md` | Unknown / Needs Review | Determine whether it still affects runtime ownership or task handoff. |
| `docs/core_vs_vertical_separation_rev_01.md` | Unknown / Needs Review | Potentially important for multi-vertical HubSpot and funnel planning. |
| `docs/funnel_completion_qa_rev_01.md` | Unknown / Needs Review | Confirm whether it is still active QA guidance or historical audit. |
| `docs/system/gpt_os_doctrine_rev_01.md` | Unknown / Needs Review | Governance relevance needs confirmation against current system docs. |
| `docs/system/assistant_behavior.md` | Unknown / Needs Review | May be superseded by `agent.md`; review before relying on it. |
| `public/images/home-security/README.md` | Unknown / Needs Review | Manifest detected a non-WNYHS title; image library first-pass appears complete in task history, but asset status needs a clearer WNYHS manifest. |

## 8. Current Runtime Contract Map
| Runtime Area | Primary Document | Current Status | Reality Captured | Open Concern |
|---|---|---|---|---|
| Lead intake | `docs/runtime/lead_signal_contract.md` | Active Authoritative | `/api/lead-signal` is the sole lead-signal intake boundary. | LEADFLOW001 runtime contract is still missing for referral-aware lead changes. |
| Request ID | `docs/runtime/request_id_contract.md` | Active Authoritative | Server requestId is generated by API runtime and used for correlation. | Keep distinct from client QR session IDs. |
| HubSpot properties | `docs/runtime/hubspot_properties.md` | Active Authoritative | Property changes require explicit scoped approval. | Referral property mapping is not defined. |
| HubSpot sync | `docs/runtime/hubspot_sync_contract.md` | Active Authoritative | Sync is API-layer mediated and can report partial success. | Future workflow automation is not yet documented as implementation-ready. |
| QRLanding | `docs/runtime/qrlanding_runtime.md` | Active Authoritative | Local placards/signs route to `/qrlanding`; current attribution is route-level. | Named source IDs and referral-aware QR attribution remain future work. |
| QR attribution reporting | `docs/runtime/qr_attribution_reporting.md` | Active Supporting | Review process exists and must not be bypassed. | Follow-up implementation is still needed. |
| Scheduling | `docs/runtime/google_calendar_runtime.md`, `docs/runtime/scheduling_ownership.md` | Active Authoritative | Shared Google Calendar availability uses read-only secret iCal for MVP; customers request times, operators confirm. | Direct customer-authoritative booking is not approved. |
| Stripe | `docs/runtime/stripe_runtime.md` | Active Authoritative | Payment success must be server-side and webhook verified. | Outstanding Stripe issue summary may need refresh before payment work. |
| Runtime ownership | `docs/runtime/runtime_ownership_map.md` | Active Supporting | Central map exists. | Several runtime docs are marked partial and need operator verification. |

## 9. Current HubSpot / CRM Documentation Status
| Reality | Status Label | Source Docs | Notes |
|---|---|---|---|
| HubSpot is CRM/deal flow/advertising management across funnels and verticals, not only WNYHS. | Active Authoritative | `docs/crm/hubspot/hubspot_kb_rev03.md`, `docs/runtime/hubspot_sync_contract.md`, `docs/crm/hubspot/crm_pipeline_architecture_rev01.md` | Future tasks must preserve multi-funnel CRM scope. |
| All CRM writes go through `/api/lead-signal`. | Active Authoritative | `docs/crm/hubspot/hubspot_kb_rev03.md`, `docs/runtime/lead_signal_contract.md` | Frontend/client direct writes remain forbidden. |
| Pipeline architecture and stage IDs are documented. | Active Authoritative | `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`, `docs/runtime/hubspot_properties.md` | Runtime must use internal IDs, not stage labels. |
| HubSpot workflow automation is a future core workstream. | Future Work Item | `docs/crm/hubspot/hubspot_kb_rev03.md`, `docs/system/master-task-register.md` | Needs separate contract before implementation. |
| Referral property mapping is not defined. | Future Work Item | `docs/runtime/hubspot_properties.md` | Must be defined before referral capture touches CRM. |

## 10. Current Request / Estimate / Lead Intake Documentation Status
| Reality | Status Label | Source Docs | Notes |
|---|---|---|---|
| LEADFLOW001 is planned but not implemented. | Future Work Item | `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md` | This reconciliation prepares the review map only. |
| `/api/lead-signal` is the protected lead intake path. | Active Authoritative | `docs/runtime/lead_signal_contract.md`, `docs/crm/hubspot/hubspot_kb_rev03.md` | Do not bypass or duplicate this path. |
| Main funnel estimate route is documented. | Active Authoritative | `docs/specs/main_funnel_contract_rev01.md` | Review before changing estimate entry or CTA behavior. |
| Public funnel role and claims boundaries exist. | Active Authoritative | `docs/specs/public_funnel_standards_rev01.md` | Preserve claim-safe language. |
| Estimate/request audit lineage exists. | Historical Audit | `docs/audits/estimate_flow001_rev01.md`, `docs/audits/estimate_email001_rev01.md`, funnel audits | Use selectively for regression context. |
| Quote-visible referral awareness is planned but not implemented. | Future Work Item | This reconciliation | Needs LEADFLOW001 or related contract before code work. |

## 11. Current QR / Attribution Documentation Status
| Reality | Status Label | Source Docs | Notes |
|---|---|---|---|
| QR placards/signs have been distributed locally and route to `/qrlanding`. | Active Authoritative | `docs/brand/print_assets/qr_placard_system_rev01.md`, `public/brand/print-assets/qr-placards/README.md`, `docs/runtime/qrlanding_runtime.md` | `/qrlanding` remains the approved QR destination. |
| QR attribution runtime documentation exists and must not be bypassed. | Active Authoritative | `docs/runtime/qrlanding_runtime.md`, `docs/runtime/qr_attribution_reporting.md` | Future attribution implementation must extend existing contracts. |
| QR attribution follow-up implementation is still needed. | Future Work Item | `docs/runtime/qr_attribution_reporting.md`, `docs/MARKDOWN_MANIFEST.md` | Do not implement without a scoped task. |
| Referral capture and named QR source attribution are planned but not implemented. | Future Work Item | `docs/runtime/qrlanding_runtime.md`, this reconciliation | Needs schema and source-governance contract. |
| Referral payout automation is not approved. | Future Work Item | This reconciliation | Requires SOP and operator approval before any automation. |

## 12. Current Scheduling Documentation Status
| Reality | Status Label | Source Docs | Notes |
|---|---|---|---|
| Shared Google Calendar Scheduling architecture uses read-only secret iCal availability for MVP. | Active Authoritative | `docs/runtime/google_calendar_runtime.md` | Availability is read-only. |
| Scheduling flow is request, pending confirmation, operator ownership, confirmation, calendar event. | Active Authoritative | `docs/runtime/scheduling_ownership.md`, `docs/runtime/google_calendar_runtime.md` | Calendar writes happen only after owner/operator confirmation. |
| Direct customer-authoritative booking is not approved yet. | Active Authoritative | `docs/runtime/scheduling_ownership.md` | Do not introduce direct booking authority without step revision. |
| Scheduling docs must be reviewed before estimate intake changes. | Active Supporting | `docs/MARKDOWN_MANIFEST.md` | LEADFLOW001 must preserve this stage boundary. |

## 13. Current Stripe / Payment Documentation Status
| Reality | Status Label | Source Docs | Notes |
|---|---|---|---|
| Stripe payment success is server-side and webhook verified. | Active Authoritative | `docs/runtime/stripe_runtime.md`, `docs/crm/hubspot/hubspot_kb_rev03.md` | Redirect URLs are not authoritative. |
| Stripe work has outstanding issues. | Active Authoritative | `docs/runtime/stripe_runtime.md` | Refresh issue summary before any Stripe task. |
| Payment/deposit audit lineage exists. | Historical Audit | `docs/audits/payment_fix001_implementation_rev01.md`, payment-related funnel audits | Use for regression context only. |
| LEADFLOW001 must not change Stripe. | Active Authoritative | `docs/system/guardrails.md`, `docs/runtime/stripe_runtime.md` | Keep payment behavior untouched. |

## 14. Current Catalog / Capability / BOM Documentation Status
| Reality | Status Label | Source Docs | Notes |
|---|---|---|---|
| WNYHS positioning expanded toward local smart-property integration. | Active Authoritative | `docs/catalogs/wnyhs_capability_catalog_rev03.md`, `docs/system/master-task-register.md` | REV03 validates the internal capability universe. |
| Capability Catalog REV03 exists and controls capability validation, launch suitability, and BOM priority. | Active Authoritative | `docs/catalogs/wnyhs_capability_catalog_rev03.md` | REV02 remains lineage, not current planning control. |
| BOM001 must not begin without REV03 and claims boundaries. | Future Work Item | `docs/catalogs/wnyhs_capability_catalog_rev03.md`, `docs/system/master-task-register.md` | CLAIMS001 should precede or run with BOM planning. |
| PACKAGE001 must use validated capabilities only. | Future Work Item | `docs/catalogs/wnyhs_capability_catalog_rev03.md` | No customer-facing packages from unvalidated rows. |
| Catalog references may still be REV02-only. | Unknown / Needs Review | `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, older task entries | Needs catalog-reference sync pass. |

## 15. Current Website / Brand / Print Asset Documentation Status
| Reality | Status Label | Source Docs | Notes |
|---|---|---|---|
| Brand asset authority exists. | Active Authoritative | `docs/brand/brand_asset_authority_rev01.md`, `docs/brand/brand_asset_standards_rev01.md` | Controls approved visual asset usage. |
| QR placard and flyer systems exist. | Active Authoritative | `docs/brand/print_assets/qr_placard_system_rev01.md`, `docs/brand/print_assets/half_sheet_flyer_system_rev01.md` | Print assets must keep approved QR destination rules. |
| Website image library first-pass appears complete from task history. | Active Supporting | `docs/system/master-task-register.md`, `public/images/home-security/README.md` | README title/status needs review; create asset status manifest if needed. |
| Public website/funnel standards exist. | Active Authoritative | `docs/specs/public_funnel_standards_rev01.md`, `docs/specs/main_funnel_contract_rev01.md` | Use before website copy or CTA changes. |

## 16. Before LEADFLOW001 Required Review Set
Focused short-list for writing the LEADFLOW001 runtime contract before any implementation:

| Priority | Document | Why Review |
|---|---|---|
| 1 | `AGENTS.md` | Root stop conditions and protected-system rules. |
| 1 | `docs/system/project.md` | Authority chain and additive/destructive discipline. |
| 1 | `docs/system/guardrails.md` | Claims, funnel, HubSpot, Stripe, and Scheduling boundaries. |
| 1 | `docs/system/step-current.md` | Current operational context. |
| 1 | `docs/system/master-task-register.md` | Task status and dependency constraints. |
| 1 | `docs/crm/hubspot/hubspot_kb_rev03.md` | Locked HubSpot architecture. |
| 1 | `docs/runtime/lead_signal_contract.md` | `/api/lead-signal` request/response and event boundary. |
| 1 | `docs/runtime/request_id_contract.md` | requestId semantics and correlation rules. |
| 1 | `docs/runtime/hubspot_properties.md` | Existing CRM property contract and no-new-property rule. |
| 1 | `docs/runtime/hubspot_sync_contract.md` | HubSpot sync behavior and partial-status handling. |
| 1 | `docs/runtime/qrlanding_runtime.md` | QRLanding route/source/event behavior. |
| 1 | `docs/runtime/qr_attribution_reporting.md` | Attribution review process and follow-up gap. |
| 1 | `docs/specs/main_funnel_contract_rev01.md` | Main estimate route sequence. |
| 1 | `docs/specs/public_funnel_standards_rev01.md` | Public funnel boundaries. |
| 1 | `docs/specs/qr_funnel_standards_rev01.md` | QR funnel source and payload protections. |
| 2 | `docs/runtime/google_calendar_runtime.md` | Availability and calendar write boundaries. |
| 2 | `docs/runtime/scheduling_ownership.md` | Pending-confirmation and operator-confirmation model. |
| 2 | `docs/runtime/resend_runtime.md` | Email runtime behavior if LEADFLOW001 includes acknowledgement or operator notice context. |
| 2 | `docs/runtime/cloudflare_email_routing.md` | Email routing context if recipient or sender paths are affected. |
| 3 | `docs/audits/estimate_flow001_rev01.md` | Estimate flow lineage. |
| 3 | `docs/audits/estimate_email001_rev01.md` | Estimate email lineage. |
| 3 | `docs/audits/qrlanding_crm_notification_inventory_rev01.md` | QRLanding CRM/notification inventory lineage. |

## 17. Before Implementation Required Review Sets
### Before HubSpot Changes
- `AGENTS.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/request_id_contract.md`
- `docs/system/master-task-register.md`

### Before QR / Source Attribution Changes
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/brand/print_assets/qr_placard_system_rev01.md`
- `public/brand/print-assets/qr-placards/README.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/request_id_contract.md`

### Before Stripe Changes
- `AGENTS.md`
- `docs/system/guardrails.md`
- `docs/runtime/stripe_runtime.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/specs/main_funnel_contract_rev01.md`

### Before Scheduling Changes
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`

### Before BOM001 / PACKAGE001
- `docs/catalogs/wnyhs_capability_catalog_rev03.md`
- `docs/catalogs/deep-research-report.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.csv`
- `docs/system/master-task-register.md`
- `docs/system/guardrails.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/brand/brand_asset_standards_rev01.md`

### Before Public Website / Brand / Print Asset Changes
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/print_assets/qr_placard_system_rev01.md`
- `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`

## 18. Known Documentation Gaps
| Gap | Why It Matters | Related Existing Docs | Recommended Task ID | Priority | Notes |
|---|---|---|---|---|---|
| LEADFLOW001 runtime contract missing | Needed before referral-aware lead intake, quote-visible referral awareness, or source mapping changes. | `docs/runtime/lead_signal_contract.md`, `docs/runtime/request_id_contract.md`, `docs/crm/hubspot/hubspot_kb_rev03.md` | LEADFLOW001 | High | Contract first; implementation later. |
| Referral attribution runtime contract missing | Current QR attribution is route/event oriented, not referral-aware. | `docs/runtime/qrlanding_runtime.md`, `docs/runtime/qr_attribution_reporting.md` | LEADFLOW001 | High | Define payload and ownership before code changes. |
| Named QR source attribution schema missing | Distributed QR assets currently route to `/qrlanding`; named source IDs need controlled schema. | `docs/runtime/qrlanding_runtime.md`, `docs/specs/qr_funnel_standards_rev01.md`, `docs/brand/print_assets/qr_placard_system_rev01.md` | ATTRIBUTION001 | High | Must preserve existing QRLanding path. |
| Referral payout review SOP missing | Payout automation is not approved; operator review policy is needed first. | This reconciliation, `docs/MARKDOWN_MANIFEST.md` | REFERRAL-SOP001 | Medium | Manual SOP before any automation. |
| Quote-visible referral awareness spec missing | Quote context may need visibility without creating payout automation. | `docs/audits/quote_gen001_rev01.md`, `docs/audits/quote_gen001b_rev01.md`, `docs/runtime/lead_signal_contract.md` | QUOTE-REFERRAL001 | Medium | Define visible/internal boundaries first. |
| HubSpot referral property mapping not yet defined | CRM schema cannot be extended casually. | `docs/runtime/hubspot_properties.md`, `docs/runtime/hubspot_sync_contract.md`, `docs/crm/hubspot/hubspot_kb_rev03.md` | HUBSPOT-REFERRAL001 | High | Requires explicit HubSpot property approval path. |
| Website image manifest/status may need update | Image library first-pass appears done, but status is not clearly reconciled. | `public/images/home-security/README.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` | ASSETSTATUS001 | Medium | Current README title appears stale. |
| Stripe outstanding issue summary may need refresh | Payment tasks must start from current server-side verification posture. | `docs/runtime/stripe_runtime.md`, `docs/audits/payment_fix001_implementation_rev01.md` | STRIPE-STATUS001 | High | No Stripe implementation in DOCSTATUS001. |
| Capability Catalog REV03 should be reflected wherever catalog references are still REV02-only | Future BOM/package tasks should use REV03 validation, not REV02 baseline alone. | `docs/catalogs/wnyhs_capability_catalog_rev03.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md` | CATALOG-SYNC001 | Medium | Keep REV02 for lineage. |
| Document catalog vs markdown manifest relationship should be clarified | Both docs index repository docs and can drift without ownership rules. | `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md` | DOCSYNC001 | High | Decide whether catalog is curated and manifest is exhaustive. |

## 19. Recommended Next Documentation Tasks
| Task ID | Status Label | Purpose |
|---|---|---|
| DOCSYNC001 | Future Work Item | Decide and document the relationship between `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md`. |
| DOCSTATUS002 | Future Work Item | Review stale, superseded, duplicate, and unclear documents for promotion, archival labeling, or status correction without deletion. |
| LEADFLOW001 | Future Work Item | Create the lead intake, referral attribution, and quote-aware CRM workflow runtime contract before implementation. |
| ATTRIBUTION001 | Future Work Item | Define named QR source attribution schema and source ownership. |
| HUBSPOT-REFERRAL001 | Future Work Item | Define approved HubSpot referral property mapping, if approved by operator. |
| CLAIMS001 | Future Work Item | Create claims boundary notes for life-safety, health, security, savings, and capability claims before BOM/package copy work. |
| STRIPE-STATUS001 | Future Work Item | Refresh outstanding Stripe issue summary against `docs/runtime/stripe_runtime.md`. |
| ASSETSTATUS001 | Future Work Item | Create WNYHS website image and asset status manifest. |
| CATALOG-SYNC001 | Future Work Item | Update catalog references so REV03 is the default validation source where appropriate. |

## 20. Recommended Next Implementation Tasks
No implementation task should begin from DOCSTATUS001 alone.

After LEADFLOW001 and related contracts are approved, future implementation tasks may be scoped for:

| Candidate Task | Status Label | Prerequisites |
|---|---|---|
| Named QR source capture implementation | Future Work Item | LEADFLOW001, ATTRIBUTION001, HubSpot mapping approval if CRM fields are involved. |
| Referral-aware quote context implementation | Future Work Item | LEADFLOW001 and quote-visible referral awareness spec. |
| HubSpot workflow automation | Future Work Item | HubSpot workflow contract, property mapping approval, and operator process approval. |
| QR attribution reporting implementation follow-up | Future Work Item | QR attribution implementation contract and source schema. |
| BOM001 | Future Work Item | Capability Catalog REV03, CLAIMS001, and bench validation targets. |
| PACKAGE001 | Future Work Item | REV03, BOM001, and claims boundaries. |
