# Floorplan Quote Workflow Governance — REV01

Status: Active governance standard
Customer-facing: No
Runtime authority: No runtime implementation authority
Applies to: Future WNYHS quote planning that uses floorplan evidence, property-model records, quote planning artifacts, installer-facing planning layers, and related internal review notes.

---

## 1. Purpose

This governance document formalizes the controlled floorplan quote workflow proven by the generic funeral-home test case. Future WNYHS quote work must expect a controlled vector floorplan workflow rather than treating AI image redraw output as the authoritative planning source.

The standard is documentation-only. It does not authorize runtime code changes, uploads, image processing, LiDAR capture, computer vision, quote automation, CRM writes, payment changes, scheduling changes, package/pricing changes, catalog-schema changes, durable storage, or customer-facing publication of private floorplan details.

---

## 2. Privacy and Customer-Sensitive Detail Boundary

Floorplan quote artifacts may include sensitive property information. Repository documentation must avoid embedding customer-sensitive details beyond generic test-case references unless an existing governed repository document already permits those details.

The funeral-home reference in this document is limited to the generic test-case lineage and the current working artifact name:

**FLOORPLAN REV08 — Frozen First Floor Geometry Baseline**

Do not add room-by-room private details, customer identities, addresses, security device placements, or quote-specific bill of materials into governance docs unless a future bounded task explicitly authorizes that disclosure and the higher-authority privacy/security posture allows it.

---

## 3. Evidence Collection Standard

Each quote-floorplan reconstruction package should collect and label enough evidence to support a controlled two-pass reconstruction. When available, the evidence package should include:

1. **Exterior photos by building side**
   - North side
   - South side
   - East side
   - West side
2. **Closeups of every exterior door**
   - Include the door location, swing/entry context when visible, and any relevant adjacent openings.
3. **Visible first-floor window inventory**
   - Count and locate visible first-floor windows by side, elevation, or room association when known.
4. **Interior layout source**
   - Interior hand sketch, existing plan, LiDAR scan, or equivalent interior layout evidence.
5. **Room names and customer-facing usage**
   - Use clear room labels and plain customer-facing usage language, not internal-only shorthand.
6. **Customer concerns / needs**
   - Capture the customer’s stated priorities, pain points, usage patterns, and areas of concern.
7. **Known rough dimensions where available**
   - Record approximate dimensions only when supplied or reasonably supported by evidence.

Missing evidence should be tracked as an open review item. Do not invent exterior openings, room relationships, dimensions, or security-planning assumptions to fill gaps.

---

## 4. Two-Pass Reconstruction Model

Future floorplan quote work should use a two-pass reconstruction model before quote planning begins.

### Pass 1: Interior Topology

Pass 1 reconstructs the interior topology from the hand sketch, existing plan, LiDAR scan, walkthrough notes, or equivalent interior evidence.

Pass 1 should establish:

- Room relationships and adjacency.
- Circulation paths and major openings between rooms.
- Room names and customer-facing room usage.
- Known or approximate dimensions when supported by evidence.
- Unresolved topology questions.

Pass 1 is not complete merely because a floorplan image looks plausible. It must be traceable to interior evidence.

### Pass 2: Exterior Openings

Pass 2 inventories exterior openings from the exterior photo evidence.

Pass 2 should establish:

- Exterior doors by side and approximate location.
- Visible first-floor windows by side and approximate location.
- Exterior-side evidence gaps.
- Conflicts between exterior evidence and the interior topology draft.

### Reconciliation Before Quote Planning

The interior topology and exterior openings must be reconciled before security planning, bill of materials planning, or quote generation.

Reconciliation should resolve or explicitly flag:

- Door/window counts that do not match the interior topology.
- Exterior openings that appear to map to unclear rooms.
- Interior rooms that imply missing exterior evidence.
- Any dimensions or room relationships that remain uncertain.

---

## 5. Vector Floorplan Workflow

The authoritative working artifact for quote-floorplan planning must be editable SVG/vector geometry or an equivalent editable vector representation.

### Required Workflow Posture

- Build editable SVG/vector geometry as the controlled source.
- Keep floorplan geometry, annotations, security overlay, and quote/installer layers separable where practical.
- Maintain revisions with clear status labels and review notes.
- Treat AI-assisted image output only as a non-authoritative visual reference unless a future governance standard explicitly changes that rule.

### Prohibited Authoritative Source

AI image redraw must not be treated as the authoritative source for topology, geometry, exterior opening placement, device planning, quote generation, or installer layers.

AI-generated visual redraws can misplace walls, doors, windows, labels, proportions, and room relationships. They may be useful as rough visual inspiration, but the controlled quote workflow must anchor decisions in collected evidence and editable vector geometry.

### Revision Sequence

Future floorplan quote artifacts should move through these revision stages:

1. **Topology draft**
   - Interior room relationships and adjacency from interior evidence.
2. **Geometry baseline**
   - Editable vector walls, room shapes, openings, labels, and known rough dimensions.
3. **Security overlay**
   - Planning layer for security-relevant areas, device concepts, and review notes.
4. **Quote/installer layers**
   - Quote-supporting and installer-facing layers derived from the locked geometry baseline.

---

## 6. Approval Gates

Floorplan quote planning should not advance directly from raw evidence to quote generation. The following approval gates define the controlled progression.

### Gate 1: Topology Review

Confirm room relationships, room names, circulation, and customer-facing usage are represented correctly enough for the next pass.

### Gate 2: Exterior Inventory Review

Confirm exterior doors and visible first-floor windows have been inventoried from building-side photos and closeups.

### Gate 3: Geometry Lock

Confirm the editable vector geometry baseline is stable enough to serve as the source for planning overlays and quote/installer layers.

### Gate 4: Room Detail Pass

Confirm room-level notes, room usage, customer concerns / needs, and known rough dimensions are complete enough for planning.

### Gate 5: Security Planning Overlay

Confirm security-relevant planning concepts are layered on top of locked geometry and reconciled evidence, not on an unreconciled image redraw.

### Gate 6: BOM / Quote Generation

Generate bill of materials or quote-supporting outputs only after topology, exterior inventory, geometry, room details, and security overlay review are complete enough for the bounded quote task.

---

## 7. Locked Baseline Status Language

Use the following exact status model for floorplan baseline readiness when the conditions are satisfied:

- TOPOLOGY LOCKED
- EXTERIOR INVENTORY LOCKED
- READY FOR ROOM DETAIL PASS

These labels indicate that the interior topology and exterior opening inventory have been reconciled enough to begin the room detail pass. They do not, by themselves, authorize quote publication, payment collection, scheduling, CRM writes, public disclosure, or runtime implementation.

---

## 8. Funeral Home Test-Case Artifact Reference

The current funeral-home working artifact reference is:

**FLOORPLAN REV08 — Frozen First Floor Geometry Baseline**

This reference records the proven workflow lineage only. It does not embed customer-sensitive details and does not authorize publication of private floorplan content.

---

## 9. Protected-System Boundaries

This governance standard does not modify or authorize modification of:

- Runtime quote-system code.
- HubSpot schema, properties, pipeline, workflows, or write paths.
- Stripe/payment verification or payment state.
- Scheduling behavior.
- Support or contact forms.
- Catalog schema.
- Package pricing or package data.
- Authentication.
- Durable storage.
- Dependencies or lockfiles.
- Image processing, AI redraw generation, uploads, LiDAR capture, or computer vision.

All future implementation must be separately authorized by the current operational context and a bounded task.
