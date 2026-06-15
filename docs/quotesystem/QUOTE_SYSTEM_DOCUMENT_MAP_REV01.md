# Quote System Document Map REV01

Status: ACTIVE
Customer-facing: No
Implementation authority: No

## Purpose

This document maps the initial WNYHS quote-system governance document set created by `QUOTESYSTEM-001`.

## Maturity Definitions

- ACTIVE: Current governance standard for the scoped topic.
- PARTIAL: Usable governance content exists, but future controlled expansion is expected before the topic is complete.
- PLACEHOLDER: Skeleton standard created for future controlled expansion.
- FUTURE: Reserved concept not yet represented by a dedicated standard.

## Document Map

| Document | Purpose | Maturity |
| --- | --- | --- |
| `README.md` | Defines `/docs/quotesystem/` as the repository home for quote-system governance and summarizes the quote-system goal. | ACTIVE |
| `QUOTE_SYSTEM_GOALS_REV01.md` | Defines quote-system purpose, inputs, outputs, quote package structure, Home Assistant compatibility, capability mapping, dashboard prep, and compliance review boundaries. | ACTIVE |
| `FLOORPLAN000_Field_Capture_Standard_REV01.md` | Defines required capture inputs, sketch primacy, exact orientation preservation, compass rules, exterior and interior photo expectations, field symbol language, door/threshold interpretation, and unambiguous sketch requirements. | ACTIVE |
| `FLOORPLAN001_Professional_Redraw_Reconstruction_Standard_REV01.md` | Defines Trace Mode, professional replica rules, no redesign/inference/rotation/normalization rules, required preservation, overlay validation, redraw rejection, and base-redraw approval before overlays. | ACTIVE |
| `FLOORPLAN002_Property_Photo_Validation_Standard_REV01.md` | Defines property photo validation during Trace Mode, compass-aware side mapping, conflict documentation, and photo limits before future expansion. | ACTIVE |
| `FLOORPLAN003_Redraw_Fidelity_Calibration_REV01.md` | Defines the redraw fidelity calibration standard, overlay test, acceptance/rejection criteria, funeral-home pilot lessons, and downstream gate before placement, BOM, automation, or quote generation. | ACTIVE |
| `PROPERTY001_Property_Model_Architecture_REV01.md` | Defines the Property Model as the central operational record connecting field evidence, customer goals, solution translation, placement, BOM, inventory, quote, installer packet, and dashboard prep. | ACTIVE |
| `GATES001_Quote_To_Install_Operational_Gates_REV01.md` | Defines deposit, inventory-purchase, scheduling, final-payment, payment-method, and legal/compliance gates for quote-to-install governance. | ACTIVE |
| `INVENTORY001_Quote_System_Inventory_Readiness_REV01.md` | Defines inventory readiness philosophy, standing inventory targets, startup exception, Vault exclusion, Control Plane Kit tracking, deposit-triggered inventory workflow, and buffer purpose. | ACTIVE |
| `INSTALLER001_Installer_Packet_Standard_REV01.md` | Defines installer packet readiness, onsite time target, task ownership buckets, default installer roles, required packet contents, and warehouse departure gate. | ACTIVE |
| `IMPLEMENTATION004_Property_Model_Storage_Admin_Intake_REV01.md` | Records the bounded QUOTESYSTEM-004 implementation of a local-storage Property Model type, operator intake/edit route, and explicit non-production persistence limitations. | PARTIAL |
| `IMPLEMENTATION005_Draft_Quote_Workspace_REV01.md` | Records the bounded QUOTESYSTEM-005 extension of the operator Property Model prototype into a local-storage draft quote workspace for goals, WNYHS solutions, BOM line items, and a visible draft quote structure. | PARTIAL |
| `IMPLEMENTATION006_Quote_Workspace_Structure_Styling_REV01.md` | Records the bounded QUOTESYSTEM-006 refactor of `/operator/property-model` into a WNYHS quote workspace with HubSpot-owned CRM framing, customer concerns, source-backed solution/package selects, draft BOM status, quote preview alignment, and WNYHS token-based styling. | PARTIAL |
| `IMPLEMENTATION007_Floorplan_Evidence_Attachments_REV01.md` | Records the bounded QUOTESYSTEM-007 extension of `/operator/property-model` with repeatable local-storage floorplan/property evidence items, controlled evidence type/orientation/status options, WNYHS workflow guidance, and Draft Quote Preview Section 1 evidence summary. | PARTIAL |
| `IMPLEMENTATION008_Hardware_Placement_Reconciliation_REV01.md` | Records the bounded QUOTESYSTEM-008 extension of Draft Hardware / BOM line items with placement reconciliation fields, reconciliation summary, Section 3 preview integration, and non-blocking MAST camera reminder. | PARTIAL |
| `IMPLEMENTATION009_Quote_Preview_Print_View_REV01.md` | Records the bounded QUOTESYSTEM-009 browser-print quote preview route for local Property Model draft records, including the three-section customer-facing structure and print styling boundaries. | PARTIAL |
| `IMPLEMENTATION010_Installer_Packet_View_REV01.md` | Records the bounded QUOTESYSTEM-010 installer packet preview route for local Property Model draft records, including pick list, task ownership, checklists, open items, and browser-print boundaries. | PARTIAL |
| `IMPLEMENTATION011_Local_Import_Export_REV01.md` | Records the bounded QUOTESYSTEM-011 local JSON import/export workflow for browser-only Property Model backups, including single-record export, full-collection export, import normalization, collision-as-copy handling, and operator data-handling guidance. | PARTIAL |
| `IMPLEMENTATION013_Pricing_Totals_Placeholder_REV01.md` | Records the bounded QUOTESYSTEM-013 manual pricing/totals placeholder for local Property Model quote subtotal, discount, tax/fees, deposit, balance due, quote preview, installer packet gate guidance, and import/export normalization. | PARTIAL |
| `SOLUTION_PLACEMENT001_Hardware_Placement_Standard_REV01.md` | Placeholder for future hardware placement onto approved floorplans after redraw approval. | PLACEHOLDER |
| `HARDWARE001_HA_COMPATIBILITY_AND_BOM_STANDARD_REV01.md` | Placeholder for Home Assistant compatibility, WNYHS control-plane fit, BOM fields, and unsupported hardware disclosure/approval. | PLACEHOLDER |
| `FEATURES001_CUSTOMER_CAPABILITY_MAPPING_STANDARD_REV01.md` | Placeholder for translating BOM hardware into customer-accessible capabilities and future dashboard requirements. | PLACEHOLDER |
| `QUOTE001_CUSTOMER_PROPOSAL_STRUCTURE_REV01.md` | Placeholder for customer proposal sections, deposit/install-payment terms, scope assumptions, exclusions, change orders, and New York legal/compliance review placeholder. | PLACEHOLDER |
| `DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md` | Placeholder for future Home Assistant dashboard requirements from finalized hardware and quote scope. | PLACEHOLDER |

## Future Reserved Areas

Future controlled tasks may add or expand standards for:

- Quote data model.
- Operator review workflow.
- Proposal approval workflow.
- Pricing-input governance.
- Customer-facing language approval.
- Dashboard generator implementation requirements.
- Quote-system QA plan.

None of those future areas are implemented or authorized by this map.
- `IMPLEMENTATION012_Quote_Workspace_Usability_Pass_REV01.md` — implemented usability/layout pass for the internal Property Model Quote Workspace.
