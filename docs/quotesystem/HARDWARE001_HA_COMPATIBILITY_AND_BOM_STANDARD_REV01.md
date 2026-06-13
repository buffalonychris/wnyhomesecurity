# HARDWARE001 HA Compatibility And BOM Standard REV01

Status: PLACEHOLDER
Customer-facing: No
Implementation authority: No

## Purpose

This placeholder defines the future hardware compatibility and BOM standard for the quote system.

## Current Standard

Standard hardware must be Home Assistant compatible and must support WNYHS control-plane expectations before it is treated as standard quote-system hardware.

## BOM Fields

A future quote-system BOM should include:

- Item.
- Quantity.
- Location reference.
- Reason.
- Customer-facing capability.
- Dashboard prep notes.

## Property Model And Inventory Link

The BOM should connect to the Property Model chain:

Customer Goal -> WNYHS Solution -> Placed Hardware -> Capabilities -> BOM -> Inventory -> Installer Tasks -> Dashboard Features

Hardware remains the implementation layer for a WNYHS solution or outcome. BOM entries should trace to placed hardware, customer-facing capabilities, inventory readiness, installer packet tasks, and future dashboard prep.

Inventory readiness is governed by `INVENTORY001_Quote_System_Inventory_Readiness_REV01.md`.

## Unsupported Or Specialty Hardware

Unsupported, specialty, pilot, custom, or exception hardware must require a disclosure and approval path before proposal use.

## Future Expansion

Future controlled passes should define hardware maturity labels, approved control-plane expectations, exception handling, and BOM validation rules.
