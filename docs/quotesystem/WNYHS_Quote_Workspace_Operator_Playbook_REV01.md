# WNYHS Quote Workspace Operator Playbook — REV01

Status: Active internal SOP
Customer-facing: No
Runtime authority: No runtime implementation authority
Primary users: Chris and Lou
System: WNYHS Quote Workspace / Property Model
Reference implementation: Brian Lewis Funeral Home quote workflow

## Purpose

This document defines the repeatable WNY Home Security quote workflow from customer evidence intake through internal review and customer estimate delivery.

The purpose of this playbook is to make quote creation repeatable, reviewable, and independent of chat history.

This workflow applies to:

- residential properties
- commercial properties
- religious facilities
- funeral homes
- offices
- retail locations
- mixed-use properties

The quote workspace is not a simple pricing calculator. It is a controlled design workspace used to produce:

- property model
- floorplan baseline
- customer requirement summary
- dashboard concept
- solution architecture
- hardware BOM
- customer estimate packet
- installer preparation context

## Core Principle

WNY Home Security does not primarily sell sensors, locks, thermostats, or cameras.

WNY Home Security sells:

- a local-first control plane
- a unified customer dashboard
- property awareness
- access management
- practical automation
- expansion-ready smart-property infrastructure

Hardware exists to support those outcomes.

## Operating Rule

Do not skip from customer concern directly to hardware.

Correct sequence:

```text
Evidence -> Property Model -> Floorplan Baseline -> Customer Requirements -> Solution Design -> Dashboard Design -> Hardware BOM -> Pricing -> Estimate Packet -> Internal Review -> Customer Delivery
```

If a step is incomplete, document the gap and decide whether the estimate is:

- final
- onsite-needed
- rough / limited-evidence

## Phase 1 — Evidence Collection

### Required Evidence Package

Collect the following before design work begins whenever available.

### Exterior Evidence

- north wall photos
- south wall photos
- east wall photos
- west wall photos
- closeups of every exterior door
- photo notes for fixed glass, operable windows, and unusual openings

### Opening Inventory

Record by side of building:

- exterior doors
- operable windows
- fixed windows / picture glass
- garage doors if present
- basement or secondary openings if relevant

### Interior Evidence

At least one of:

- hand-drawn floorplan
- existing floorplan
- architectural drawing
- LiDAR scan
- realtor/property plan
- customer sketch with room names

### Customer Context

Capture in the customer’s own language:

- security concerns
- access-control concerns
- camera/visibility concerns
- environmental/HVAC concerns
- elder-care or family-awareness concerns if residential
- operational workflows such as opening, closing, service prep, vacation mode, or away mode

### Measurements

Capture when available:

- room dimensions
- hallway dimensions
- building orientation
- opening widths
- special mounting conditions
- power/network availability

## Phase 2 — Property Model Creation

The Property Model is the operational record that connects evidence, customer goals, floorplan, solution design, BOM, and quote language.

### Two-Pass Rule

Property modeling always occurs in two passes.

### Pass 1 — Interior Topology

Source:

- sketch
- floorplan
- measurements
- interior notes

Capture:

- rooms
- hallways
- interior doors
- open thresholds
- customer room names
- room relationships
- circulation path

### Pass 2 — Exterior Inventory

Source:

- exterior photos
- door closeups
- customer notes

Capture:

- doors by side
- operable windows by side
- fixed glass by side
- special openings
- photo conflicts

### Reconciliation

Interior topology and exterior inventory must be reconciled before quote planning begins.

No hardware planning occurs before reconciliation unless Chris or Lou explicitly mark the estimate as rough / limited-evidence.

## Phase 3 — Floorplan Baseline

### Required Statuses

Use the exact status language below.

### TOPOLOGY LOCKED

Interior layout has been reviewed and approved for quote use.

### EXTERIOR INVENTORY LOCKED

Exterior doors, windows, and fixed glass inventory have been reviewed and approved for quote use.

### READY FOR ROOM DETAIL PASS

The floorplan baseline is stable enough for device placement, dashboard planning, and quote generation.

### Baseline Artifact

Preferred source format:

```text
SVG
```

Acceptable review/export formats:

```text
PNG
PDF
```

The approved floorplan becomes the authoritative property baseline for the estimate.

Future layers should not redraw the building from scratch. They should layer onto the approved baseline.

## Phase 4 — Customer Requirements

Translate customer concerns into outcome categories.

### Security Requirements

Examples:

- monitor exterior doors
- monitor operable windows
- detect motion after hours
- detect glass attack
- create local audible alerts
- send immediate owner notifications

### Access-Control Requirements

Examples:

- remote lock / unlock
- PIN code access
- mobile-assisted entry
- arrival confirmation unlock
- access history
- automatic relock logic
- future multi-user expansion

For business installs, prefer confirmation-based unlock over fully automatic unlock unless explicitly approved.

### Environmental Requirements

Examples:

- remote thermostat control
- away-mode energy savings
- window-open HVAC hold logic
- building preparation mode
- freeze/leak/power monitoring if relevant

### Awareness Requirements

Examples:

- dashboard status
- doorbell video
- camera tile
- recent activity
- alert history
- owner mobile notifications

## Phase 5 — Solution Design

Start with the customer outcome, not the hardware.

For each concern, document:

```text
Concern -> WNYHS Solution -> Customer Outcome -> Hardware Support
```

Example:

```text
Concern: Owner needs to unlock the building remotely.
Solution: Smart Entry & Access Management.
Outcome: Owner can verify visitor, unlock the south entry, and review access history from Home Assistant.
Hardware Support: Z-Wave smart lock, video doorbell, dashboard controls.
```

## Phase 6 — Dashboard Design

Dashboard preview is mandatory for every customer estimate.

The dashboard is the visible product experience.

### Desktop / Tablet Dashboard

Show the customer how the system will feel on a larger screen.

Typical cards:

- security status
- armed / away controls
- doorbell video
- remote lock control
- door status
- window status
- motion status
- glass attack / glass break status
- thermostat controls
- special building mode
- alert history

### Mobile Dashboard

Show the customer how the system will work from their phone.

Priority order:

1. security status
2. doorbell / visitor interaction
3. remote lock control
4. alerts
5. thermostat / environmental controls
6. recent activity

### Customer-Specific Workflow Examples

Funeral home:

- Funeral Preparation Mode
- visitor delivery unlock workflow
- after-hours armed-away mode

Residence:

- Vacation Mode
- Night Mode
- package protection
- family awareness

Retail / office:

- Opening Mode
- Closing Mode
- staff arrival awareness

## Phase 7 — Hardware Selection

### Hardware Rules

Prefer hardware that is:

- Home Assistant compatible
- local-first where practical
- visible and controllable from Home Assistant
- supportable by WNYHS
- expansion-ready

Avoid standardizing hardware that:

- requires daily use of a manufacturer app
- depends on a locked cloud ecosystem
- cannot expose useful entities to Home Assistant
- creates support burden disproportionate to customer value

### BOM Requirements

For every line item include:

- quantity
- make
- model
- purpose
- estimated part cost
- integration path
- quote confidence

### Compatibility Review

Before final quote:

- verify current pricing
- verify availability
- verify Home Assistant integration
- verify device limitations
- identify required substitutions

## Phase 8 — Pricing

Separate:

- parts cost
- consumables
- labor / install compensation
- configuration value
- dashboard value
- margin
- optional add-ons

Do not let hardware cost alone define customer price.

The customer is paying for the finished WNYHS control plane experience, not only the device list.

## Phase 9 — Estimate Packet Structure

Default customer proposal structure:

### Page 1 — Executive Summary

Include:

- customer name
- property address
- project objective
- recommended solution
- investment summary
- WNYHS contact information

### Page 2 — Property Baseline + Solution Strategy

Include:

- approved floorplan
- floorplan status
- property concerns
- proposed solution strategy

### Page 3 — Coverage Plan + Dashboard Experience

Include:

- room-by-room coverage plan
- desktop/tablet dashboard preview
- mobile dashboard preview
- key customer workflows

### Page 4 — Hardware Schedule

Include:

- make/model list
- quantities
- purpose
- customer-friendly hardware explanation

### Page 5 — Investment + Acceptance

Include:

- project price
- deposit terms
- exclusions
- acceptance/signature block

## Phase 10 — Internal Review

Before delivery, Chris or Lou must confirm:

- evidence package exists
- floorplan baseline exists
- topology is locked or estimate is explicitly marked rough
- exterior inventory is locked or gaps are documented
- customer requirements are captured
- dashboard preview exists
- BOM is coherent
- hardware is supportable
- price is intentional
- quote language is claim-safe
- exclusions are clear

## Phase 11 — Customer Delivery

Customer packet should include:

- PDF estimate
- floorplan image
- dashboard preview image(s)
- hardware schedule
- pricing and payment terms

Optional internal packet may include:

- DOCX source
- editable floorplan source
- BOM spreadsheet
- installer notes
- research notes

## Success Criteria

A quote is complete when:

- evidence package is collected
- property model is created
- floorplan is locked or explicitly marked rough / limited-evidence
- customer concerns are documented
- dashboard is designed
- solution architecture is documented
- hardware BOM is validated
- pricing is completed
- estimate packet is generated
- internal review is completed

Only then should the estimate be sent to the customer.

## Brian Lewis Funeral Home Reference

The Brian Lewis Funeral Home quote is the first complete working example of this playbook.

It established the following repeatable workflow:

```text
Hand sketch + exterior photos
-> reconciled topology
-> REV08 frozen geometry baseline
-> customer requirements
-> dashboard-first solution design
-> Home Assistant hardware architecture
-> BOM validation
-> customer estimate packet
```

Future quote workflows should improve the procedure while preserving:

- evidence-first design
- property-model authority
- vector/SVG floorplan baseline discipline
- dashboard-first solution presentation
- Home Assistant control plane philosophy
- repeatable quote packet generation

## Boundaries

This playbook does not authorize runtime implementation, HubSpot writes, Stripe/payment changes, scheduling changes, public website changes, durable storage changes, or automated quote generation.

Implementation requires a separate bounded task in the Master Task Register and a task-specific work order.
