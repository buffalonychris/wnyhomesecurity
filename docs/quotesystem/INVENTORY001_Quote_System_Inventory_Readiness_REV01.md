# INVENTORY001 Quote System Inventory Readiness REV01

Status: ACTIVE
Customer-facing: No
Implementation authority: No

## Purpose

This standard defines quote-system inventory readiness governance.

It is documentation only. It does not authorize inventory software, purchasing automation, BOM/pricing implementation, quote generation, payment implementation, scheduling implementation, runtime changes, or vendor commitments.

## Inventory Philosophy

Customer buys solutions and packages.

Inventory tracks reusable components.

The Property Model should connect customer goals, WNYHS solutions, placed hardware, BOM needs, inventory reservation, installer tasks, and dashboard prep without making the customer-facing sale hardware-first.

## Standing Inventory Target

Standard standing inventory should support 5 consecutive business days of installs at 1 package/install per day.

Startup exception is allowed. The target state should be reached after approximately one month of installs.

Only the five standard categories and their package combinations drive standing inventory.

Vault items are never part of standing onsite inventory.

## Control Plane Kit

The Control Plane Kit is tracked separately from standard package inventory.

Planning cost is approximately $300 per Control Plane Kit when Home Assistant Green plus Matter, Zigbee, and Z-Wave radios are included.

This planning cost is an internal readiness estimate and does not authorize public pricing, supplier commitments, or customer-facing price publication.

## Deposit-Triggered Inventory Workflow

Deposit verification should trigger:

- Inventory check.
- Inventory reservation.
- Missing-item purchase.
- Replenishment logic.

No job-specific inventory purchase may occur before deposit verification.

## Inventory Buffer Purpose

Inventory buffer should enable:

- Home Assistant preconfiguration.
- Dashboard prep.
- Device naming.
- Device testing.
- Pairing where appropriate.
- Shortage detection.
- Substitution planning.

## Boundary

This standard defines readiness expectations only. It does not create inventory counts, purchase orders, vendor relationships, software implementation, payment logic, scheduling logic, or warehouse operating procedures beyond the stated governance rules.
