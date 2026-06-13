# FLOORPLAN003 Redraw Fidelity Calibration REV01

Status: ACTIVE
Customer-facing: No
Implementation authority: No

## Purpose

This is the calibration standard for testing whether a hand-drawn WNYHS field sketch can be converted into an estimate-ready professional redraw without geometry drift.

The calibration target is a professional-looking replica that preserves the original layout closely enough to support later quote planning after operator approval.

## Calibration Principle

The hand sketch remains the source of truth until operator approval changes it.

The redraw is judged by fidelity, not beauty.

## Calibration Inputs

Each calibration packet should include:

- Hand-drawn floorplan.
- Compass orientation.
- Exterior photos by side.
- Interior photos if available.
- Operator corrections.
- Symbol legend.

## Required Redraw Outputs

The redraw output must include:

- Base floorplan.
- Same orientation.
- Same layout.
- Same exterior wall shape.
- Same hallway geometry.
- Same openings, doors, and windows.
- Same fixtures and furniture where shown.
- Ambiguity notes.

## Overlay Validation

The overlay test should place the source sketch and redraw over each other, then compare:

- Major walls.
- Hallway path.
- Openings.
- Window positions and count.
- Door and threshold locations.
- Room relationships.
- Furniture and fixture relative locations.

## Acceptance Criteria

The redraw is accepted only if:

- Geometry aligns materially with the source sketch.
- Orientation is unchanged.
- Doors, windows, and openings are not invented or removed.
- Hallway geometry is preserved.
- Room relationships are preserved.
- Operator confirms it is usable for quoting.

## Rejection Criteria

Reject the redraw if:

- Rooms are rearranged.
- Hallway path is changed.
- Bathrooms or rooms are reoriented without approval.
- Main entrance opens into the wrong space.
- Double doors become single doors.
- Open thresholds become hinged doors.
- Windows are added, removed, or redistributed.
- Exterior photos override sketch geometry without approval.
- The drawing looks professional but no longer matches the sketch.

## Funeral Home Calibration Notes

The first real-world calibration case is an operating funeral-home quote. This note is intentionally generic and does not include customer-identifying private details.

Known issues discovered:

- AI/image-generation redraws may reinterpret layout.
- Hallways and offsets are frequently lost.
- Open thresholds may be mistaken for doors.
- Room relationships may be normalized incorrectly.
- Exterior photos are helpful but should not override sketch geometry during trace mode.

This case proves the need for trace-first reconstruction before security overlay.

## Downstream Gate

No camera placement, sensor placement, hardware BOM, automation planning, or customer quote generation should proceed until the base floorplan redraw is approved.
