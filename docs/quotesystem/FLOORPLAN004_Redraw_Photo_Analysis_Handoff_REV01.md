# FLOORPLAN004 REV01 — Redraw + Photo Analysis Workflow Handoff

Status: ACTIVE  
Owner: WNYHS Quote System  
Scope: Governance for manual redraw/photo-analysis handoff notes that support quote creation.

## 1. Purpose

This standard defines how WNYHS uses hand-drawn floorplans, exterior/interior photos, compass/orientation notes, Google/street/property photos, measurements, and limited-evidence inputs to create a professional redraw/property-analysis handoff. It does not authorize image processing, AI redraw generation, computer vision, uploads, LiDAR capture, durable backend storage, automated hardware placement, inventory automation, ordering, scheduling, HubSpot writes, or Stripe/payment changes.

## 2. Source Hierarchy

### Primary sources

1. Hand-drawn floorplan/sketch when provided by WNYHS, the customer, or an operator.
2. Approved LiDAR/digital-twin geometry when available in a future approved workflow.

### Validation sources

- Exterior photos.
- Interior photos.
- Compass/orientation notes.
- Google/street/property photos.
- Known dimensions or measurements.

### Source rule

Photos validate, annotate, and flag contradictions. Photos do not silently override the source floorplan geometry during trace mode. Any override requires explicit WNYHS review and an ambiguity/risk note.

## 3. Professional Redraw Requirements

A professional redraw must preserve the source sketch as a professional trace, not a redesign. It must preserve:

- Original sketch orientation.
- Compass orientation when shown.
- Exterior wall shape.
- Wall relationships.
- Offsets and jogs.
- Hallways.
- Door, opening, and threshold locations.
- Window count and approximate side/location.
- Garage doors.
- Customer room/area names.
- Furniture and fixtures when relevant.
- Bathrooms, sinks, toilets, tables, chairs, counters, fridges, offices, hallways, and common home/business elements.

Door symbols must remain distinct from thresholds/open passages. Window markers must remain distinct from garage-door markers. Ambiguous items must be flagged in notes and not invented.

## 4. Photo-Analysis Checklist

The handoff should record checks for:

- Exterior side mapping: north, south, east, west, or unknown.
- Entry door type.
- Lock type and likely lock-compatibility concern.
- Door material/frame concern when visible.
- Garage door type when present.
- Window type.
- Window opening notes: slider, double-hung, casement, or unknown when visible.
- Glass-break relevance.
- Sensor type considerations.
- Camera placement opportunities.
- MAST-purpose camera opportunity.
- Lighting, environmental, and safety considerations.
- Obstructions, mounting-height concerns, and visible power/wiring concerns.
- Photo confidence level.

## 5. Limited-Evidence Fallback

Limited evidence may support a rough estimate when risk is documented. Examples include hand floorplan only, floorplan plus Google/street photo only, exterior photos only, no interior photos, or no measurements.

Install-ready quote work requires WNYHS approval or onsite verification when risk is high. Uncertainty must appear in ambiguity/risk notes. Hidden rooms, door hardware, window types, and mounting conditions must not be fabricated.

## 6. Required Handoff Outputs

A complete handoff should include:

- Professional redraw reference/status.
- Exterior side/photo map.
- Property rooms/areas map.
- Door/opening/threshold inventory.
- Window inventory.
- Garage/opening inventory when applicable.
- Likely lock compatibility notes.
- Likely sensor compatibility notes.
- Likely camera placement notes.
- Ambiguity list.
- Quote-risk notes.
- Onsite verification list.
- Hardware placement implications.

## 7. Protected Boundaries

This standard is manual governance only. It does not change HubSpot, Stripe/payment, protected runtime systems, quote payment authority, scheduling authority, inventory purchase authority, or public-site claims.
