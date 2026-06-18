# Quote Internal SOW Packet Standard REV01

Status: ACTIVE
Customer-facing: No
Implementation authority: No
Task: QUOTE-SYSTEM-STANDARD-001

## Purpose

This standard defines the WNYHS internal planning and technical fulfillment packet format. The Internal SOW Packet preserves the earlier technical estimate/SOW approach as an operator, ordering, compatibility, dashboard-planning, and install-prep artifact.

Key rule: **Customer-facing estimate = proposal/acceptance packet. Internal SOW = technical planning and fulfillment packet.**

The Internal SOW Packet is not customer-facing unless explicitly cleaned, converted, and approved under the Customer Estimate Packet standard.

## Required Packet Use

Use this packet for:

- Operator/internal planning.
- Install prep.
- BOM and parts research.
- Compatibility validation.
- Order planning.
- Installer packet support.
- Dashboard planning.
- Automation planning.
- Change-order baseline.
- Quote-system QA source.
- Technical fulfillment detail that should not appear in a customer proposal.

## Required Internal Sections

The Internal SOW Packet must support sections for:

- Customer/property identity.
- Quote/project status.
- Floorplan/property evidence.
- Opening inventory.
- Customer expectations/scope baseline.
- Proposed system architecture.
- Device schedule.
- Working BOM.
- Compatibility/research notes.
- Automation matrix.
- Dashboard concept.
- Installer notes.
- Assumptions/exclusions.
- Unresolved decisions.
- Next steps before customer-ready quote.
- Pricing research if needed.
- Catalog/source references.
- Payment/scheduling gate notes.
- Operator review notes.

## Internal-Only Rules

The Internal SOW Packet may include:

- Draft or research-pending language.
- Planning unit costs.
- Candidate makes/models.
- Compatibility TBD notes.
- Unresolved hardware decisions.
- Internal-only installer notes.
- BOM/order readiness fields.
- Source references and research provenance.

If draft or unresolved, it must clearly label itself:

**INTERNAL / NOT CUSTOMER-FACING**

The Internal SOW Packet must never be sent to a customer without conversion to the Customer Estimate Packet standard and operator approval.

## Shared Quote-System Source Data

The Internal SOW Packet should eventually be generated from the same quote-system source data as the Customer Estimate Packet, while preserving fulfillment detail:

- Property Model.
- Customer concerns.
- Property rooms/areas.
- Evidence references.
- Redraw/photo-analysis handoff.
- Selected WNYHS solutions/packages.
- Canonical catalog data.
- Hardware/BOM reconciliation.
- Pricing/totals.
- Dashboard notes.
- Installer notes.
- Assumptions/exclusions.
- Payment/deposit gates.
- Acceptance state.
- Revision/version metadata.

## Output Separation Rule

The Internal SOW Packet may include technical, research, and installer fields that are excluded from the Customer Estimate Packet. It must preserve enough detail for fulfillment, ordering, compatibility validation, installation preparation, dashboard planning, and change-order comparison.

Customer-facing estimate output must not expose internal installer notes, margin, research uncertainty, internal BOM pricing, unresolved compatibility, or draft-only language.

## Relationship to Customer Estimate Packet

Both artifacts should be generated from shared quote-system source data, but they serve different audiences:

- Customer Estimate Packet: proposal, acceptance, pricing, customer-readable scope, and approved visuals.
- Internal SOW Packet: technical planning, BOM/order readiness, compatibility validation, installer preparation, and internal QA.

The quote system should treat the Customer Estimate Packet as the clean external artifact and the Internal SOW Packet as the fulfillment artifact.

## Future Generator Guidance

Future Quote Workspace work should support generating/exporting both Customer Estimate Packet and Internal SOW Packet. Installer Packet and future SOW routes should align with this internal standard. Durable storage/HQ sync should preserve revision metadata for both outputs, including source-data revision, export revision, approval state, and operator notes. Customer-facing PDFs require operator review before sending.

## Protected Systems Confirmation

This standard is documentation-only. It does not authorize runtime UI changes, React/TS/TSX changes, quote generator code, PDF generator code, Quote Preview route changes, Installer Packet route changes, import/export changes, pricing engine implementation, durable storage, HubSpot changes, Stripe/payment changes, scheduling changes, Resend/email changes, lead-signal/requestId changes, catalog schema changes, package data/pricing changes, auth changes, dependencies, package-lock changes, or public website changes.
