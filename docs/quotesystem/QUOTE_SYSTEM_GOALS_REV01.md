# Quote System Goals REV01

Status: ACTIVE
Customer-facing: No
Implementation authority: No

## Purpose

The WNYHS quote system is intended to turn field capture, customer goals, approved hardware planning, and business quote requirements into a controlled quote package.

This document defines the initial governance goals for the quote system. It does not authorize quote automation, pricing automation, payment flow changes, scheduling changes, HubSpot changes, Stripe changes, or Home Assistant dashboard generation.

## Inputs

The quote system may consume these governed inputs after future bounded implementation approval:

- Exterior photos.
- Interior photos.
- Customer or operator floorplan sketch.
- Compass direction and orientation notes.
- Customer goals, constraints, and accommodation needs.
- Approved hardware candidates.
- Location references from the approved floorplan.
- Scope assumptions, exclusions, and change-order notes.

## Outputs

The quote system should support these future governed outputs:

- Workable floorplan or property plan.
- Customer goals and WNYHS accommodation plan.
- BOM-backed hardware plan.
- Customer-accessible feature and capability explanation.
- Formal business quote with deposit and install-payment terms.
- Future Home Assistant dashboard prep packet from finalized hardware.

## Quote Package Structure

The standard quote package has three parts:

1. Floorplan / property plan.
2. Customer goals plus WNYHS accommodation plan.
3. Formal quote / deposit / install-payment section.

## Hardware Compatibility Rule

All standard hardware must be Home Assistant compatible and appropriate for the WNYHS control plane before it is treated as standard quote-system hardware.

Unsupported, specialty, pilot, custom, or exception hardware requires a disclosure and approval path before customer proposal use.

## Customer Capability Rule

Hardware features must be translated into customer-accessible capabilities. A quote package should explain what the customer can view, control, receive notices for, or use in everyday terms without exposing internal BOM strategy or implementation detail.

## Dashboard Prep Rule

Finalized hardware should feed a future Home Assistant Dashboard Generator prep packet. The prep packet should capture device names, areas, user-facing controls, notices, automations, modes, and permission needs after hardware and quote scope are finalized.

No dashboard generation is authorized by this document.

## Liability And Compliance Note

Quote language must be reviewed before customer use.

Do not claim final New York legal compliance without attorney or operator approval. Legal and compliance language in quote materials is a placeholder until approved for customer use.
