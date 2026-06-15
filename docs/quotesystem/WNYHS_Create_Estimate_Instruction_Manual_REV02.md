# WNYHS Create Estimate Instruction Manual — REV02

Status: Active internal working procedure
Customer-facing: No
Runtime authority: No runtime implementation authority
Supersedes: REV01 for future internal estimate preparation procedure
Source lineage: REV01 Create Estimate instruction manual, updated under `docs/quotesystem/FLOORPLAN_QUOTE_WORKFLOW_GOVERNANCE_REV01.md`
Internal workflow reference example: **FLOORPLAN REV08 — Frozen First Floor Geometry Baseline**

---

## 1. Purpose

This manual defines the internal working procedure for moving from customer discovery to a deposit-ready quote. REV02 preserves the REV01 purpose while adding the mandatory controlled floorplan evidence and vector baseline workflow required before GPT-supported analysis, security placement planning, hardware drafting, or bill-of-materials drafting.

This manual is procedural only. It does not authorize quote runtime code changes, HubSpot changes, Stripe/payment changes, scheduling changes, support/contact form changes, catalog schema changes, package pricing/data changes, authentication changes, durable storage changes, dependency changes, package-lock changes, image processing, AI redraw generation, uploads, LiDAR capture, or computer vision.

---

## 2. Authority and Required References

Use this manual with the current repository authority chain and the quote-system floorplan governance standard:

- `docs/quotesystem/FLOORPLAN_QUOTE_WORKFLOW_GOVERNANCE_REV01.md`
- Current system governance and active task context before any repository work
- Current approved package, solution, hardware, and quote documentation when preparing internal quote artifacts

The generic internal example for this workflow is **FLOORPLAN REV08 — Frozen First Floor Geometry Baseline**. Do not include sensitive customer details when referencing the example.

---

## 3. End-to-End Estimate Procedure

### Step 1 — Intake and Discovery

Collect the customer’s contact information, property context, customer-facing room usage, stated concerns / needs, timing, access constraints, and any existing notes from prior conversations.

### Step 2 — Confirm Scope Boundaries

Identify whether the request is for a full quote, limited quote, onsite-needed quote, or rough/limited-evidence quote. Record any exclusions, unknowns, or scope assumptions.

### Step 3 — Collect Package and Solution Inputs

Map customer needs to approved WNYHS solution and package concepts only. Do not invent unapproved packages, unsupported service promises, or final placements.

### Step 4 — Confirm Operational Constraints

Record property access constraints, interior/exterior access limitations, installation timing constraints, and any customer-provided limitations that may affect the scope.

### Step 5 — Prepare Evidence Workspace

Create an internal evidence workspace for notes, photos, sketches, existing plans, and quote-prep artifacts. Keep raw evidence, working assumptions, floorplan baselines, security overlays, and quote/BOM notes separated where practical.

### Step 6 — Floorplan Evidence, Reconstruction, Reconciliation, and Readiness

Step 6 is mandatory before GPT analysis. No estimate design may begin until topology and exterior inventory are reconciled. No hardware/BOM drafting may begin until the floorplan baseline is locked or explicitly marked rough/limited-evidence and approved by Chris/Lou.

#### 6.1 Collect floorplan/property evidence

Collect the minimum evidence package where available:

- Exterior photos for north, south, east, and west sides
- Closeups of each exterior door
- First-floor window count by side
- Interior hand sketch, existing floorplan, LiDAR scan, or equivalent
- Room names and customer-facing usage
- Rough dimensions where available
- Customer concerns / needs
- Compass/orientation notes

If evidence is unavailable, record the evidence gap instead of filling it with guesses.

#### 6.2 Build exterior opening inventory

Inventory exterior openings from photos before quote planning. Record exterior doors and first-floor windows by side, approximate location, and evidence quality. Identify photo gaps, obstructed sides, and any openings that cannot be confidently associated with interior rooms.

#### 6.3 Build interior topology

Build the interior topology from the hand sketch, interior evidence, existing plan, LiDAR scan, walkthrough notes, or equivalent source. Record room adjacency, circulation, customer-facing room usage, rough dimensions where available, and unresolved topology questions.

#### 6.4 Apply two-pass reconstruction rule

Use the required two-pass model:

- Pass 1: interior topology from hand sketch/interior evidence
- Pass 2: exterior openings from photos

Reconcile both passes before quote planning. Door/window counts, exterior-side openings, room relationships, orientation, and rough dimensions must either align or be explicitly flagged as unresolved.

#### 6.5 Use controlled vector workflow

Replace loose “floorplan/redraw if available” handling with this controlled workflow:

Hand sketch / photos / field evidence
→ interior topology pass
→ exterior opening inventory pass
→ reconciliation
→ topology SVG
→ frozen geometry baseline
→ room detail pass
→ security overlay
→ quote/BOM generation

The authoritative working artifact must be an editable SVG/vector floorplan baseline or equivalent editable vector geometry when a floorplan is needed to support the scope.

#### 6.6 Generate vector/SVG floorplan baseline

Create or update the topology SVG and frozen geometry baseline when floorplan-supported quote planning is required. Keep geometry, labels, annotations, security overlay, and quote/BOM notes separable where practical.

#### 6.7 Set floorplan readiness status

Use these exact lock statuses when conditions are satisfied:

- TOPOLOGY LOCKED
- EXTERIOR INVENTORY LOCKED
- READY FOR ROOM DETAIL PASS

If the baseline is not fully locked, set the appropriate rough/limited-evidence status and obtain explicit Chris/Lou approval before allowing GPT-supported analysis to proceed.

#### 6.8 Record evidence gaps and rough/limited-evidence status

Document missing photos, unclear orientation, uncertain room relationships, rough dimensions, unverified openings, inaccessible sides, or any other limitations. Rough quote notes must clearly state what remains unverified.

### Step 7 — GPT Proposed Analysis

GPT analysis may begin only after one of the following is true:

1. The floorplan baseline is locked; or
2. Rough/limited-evidence status is explicitly approved by Chris/Lou.

Treat all GPT output as **GPT Proposed**. GPT may assist with organization, draft recommendations, question lists, and internal review notes only. GPT must not finalize, price, schedule, purchase inventory, send anything, or create a customer-ready commitment.

### Step 8 — Draft Security Concept and Room Detail Pass

After the readiness gate, complete room-level details, customer-facing usage notes, concerns / needs, and security-relevant planning concepts. Do not present security placement as final if geometry is not locked.

### Step 9 — Draft Quote/BOM Support Notes

Draft hardware and BOM support notes only against approved locations or explicitly rough locations. If the estimate is rough/limited-evidence, tie every tentative item to the relevant evidence limitation.

### Step 10 — Internal Review

Review scope, assumptions, evidence status, hardware notes, customer language, exclusions, and quote readiness. Do not lock final quote if floorplan status does not support the scope being sold.

### Step 11 — Customer Quote Output Preparation

Prepare the customer quote output only after internal review. Section 1 must include:

- Floorplan baseline status
- Evidence reviewed
- Assumptions
- Unresolved evidence gaps
- Whether quote is final, onsite-needed, or rough/limited-evidence

### Step 12 — Deposit-Ready Confirmation

A quote is deposit-ready only when customer-facing scope, assumptions, final/onsite/rough status, evidence limitations, and internal review outcomes are aligned. Payment and scheduling procedures remain governed by their own protected workflows.

---

## 4. Field-by-Field Instructions

### Floorplan Evidence Status

Records whether the minimum evidence package is complete, partial, missing, or not applicable for the requested scope. Include notes for unavailable sides, missing door closeups, missing window counts, missing interior evidence, or missing orientation details.

### Topology Status

Records the interior topology state. Use draft, needs reconciliation, **TOPOLOGY LOCKED**, or rough/limited-evidence approved when applicable.

### Exterior Inventory Status

Records whether exterior doors and first-floor windows have been reviewed by side. Use draft, needs reconciliation, **EXTERIOR INVENTORY LOCKED**, or rough/limited-evidence approved when applicable.

### Geometry Baseline Status

Records whether no baseline is needed, topology SVG is in progress, frozen geometry baseline is ready, **READY FOR ROOM DETAIL PASS**, or rough/limited-evidence approved.

### Evidence Gaps

Lists unresolved evidence limitations, including missing building-side photos, missing closeups, unclear room associations, unclear dimensions, uncertain compass/orientation notes, or inaccessible areas.

### Rough Estimate Allowed

Records whether a rough/limited-evidence quote is allowed. This must be explicitly approved by Chris/Lou, and the customer quote output must clearly state what remains unverified.

---

## 5. Review and Lock Rules

- Do not lock final quote if floorplan status does not support the scope being sold.
- Do not present security placement as final if geometry is not locked.
- Rough quote must clearly state what remains unverified.
- Hardware/BOM notes must be tied only to approved locations or explicitly rough locations.
- Evidence gaps must remain visible through internal review and customer quote output.

---

## 6. Customer Quote Output Requirements

Section 1 of every customer quote output prepared under this workflow must state:

- Floorplan baseline status
- Evidence reviewed
- Assumptions
- Unresolved evidence gaps
- Quote posture: final, onsite-needed, or rough/limited-evidence

If rough/limited-evidence status is used, the output must avoid final placement language and must describe what remains unverified before final installation planning.

---

## 7. Quality Checklist

Before a quote is considered ready for internal approval, confirm:

- Exterior inventory reviewed by side
- Topology reviewed
- SVG/vector baseline created when needed
- Floorplan status locked or rough/limited-evidence approved
- Evidence gaps documented
- Hardware/BOM tied only to approved or explicitly rough locations
- Section 1 of the customer quote output includes baseline status, evidence reviewed, assumptions, gaps, and final/onsite/rough posture
- GPT output, if used, is clearly treated as GPT Proposed
- Protected systems remain untouched unless a separate authorized task controls them

---

## Appendix A — GPT Prompt for Estimate Prep Support

Use this prompt only after the floorplan evidence gate has been satisfied.

```text
You are assisting WNY Home Security with internal estimate preparation. Treat all output as GPT Proposed.

Before analysis, confirm whether the floorplan baseline is locked or rough/limited-evidence status has been explicitly approved by Chris/Lou. Do not draft hardware or BOM unless geometry baseline is locked or rough/limited-evidence status is approved.

Use the provided customer discovery notes, evidence summary, floorplan readiness fields, topology status, exterior inventory status, geometry baseline status, evidence gaps, and rough-estimate approval status.

Do not finalize the quote. Do not price. Do not schedule. Do not purchase inventory. Do not send anything to the customer. Do not create final security placement language if geometry is not locked.

Provide:
1. A concise internal summary of customer needs.
2. Evidence reviewed.
3. Floorplan baseline status and unresolved gaps.
4. Assumptions that must remain visible.
5. Questions for Chris/Lou or onsite verification.
6. GPT Proposed room-detail notes.
7. GPT Proposed security concept notes only where the baseline supports them.
8. GPT Proposed hardware/BOM discussion only for approved or explicitly rough locations.
9. A clear warning if the evidence status does not support final quote lock.
```

---

## Appendix B — REV02 Self-Check

- REV02 created as a new full document version.
- REV08 workflow embedded as mandatory quote-prep procedure.
- Evidence gate added before GPT analysis.
- Two-pass reconstruction added.
- Vector/SVG baseline workflow added.
- Lock statuses added exactly: **TOPOLOGY LOCKED**, **EXTERIOR INVENTORY LOCKED**, **READY FOR ROOM DETAIL PASS**.
- Appendix GPT prompt updated.
- Protected systems remain outside this manual’s authority.
- REV01 must remain preserved and not overwritten.
