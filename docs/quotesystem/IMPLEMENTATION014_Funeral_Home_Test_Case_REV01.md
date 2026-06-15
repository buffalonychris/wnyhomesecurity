# IMPLEMENTATION014 Funeral Home Test Case REV01

Status: Implemented / partial local-storage prototype
Task: QUOTESYSTEM-014
Customer-facing: No
Implementation authority: No

## Purpose

This note records the QUOTESYSTEM-014 funeral home local test case for the Property Model quote workflow.

The test case gives WNYHS a realistic commercial first-floor funeral home scenario that can be loaded into the internal Quote Workspace and validated through the current Property Model workflow.

## Runtime Behavior

The `/operator/property-model` workspace includes a clearly labeled `Load Funeral Home Test Case` action.

The action:

- Creates a new local Property Model record every time it is clicked.
- Does not overwrite existing local records.
- Saves to browser `localStorage` only.
- Does not call network APIs.
- Does not upload images or evidence files.
- Does not create real customer storage, HubSpot sync, payment processing, inventory automation, ordering automation, scheduling automation, auth, or durable backend persistence.

## Scenario Contents

The sample record represents a first-floor funeral home / commercial property with:

- Public viewing room.
- Reception / office area.
- Family / service area.
- Kitchen / service area.
- Restrooms.
- Hallway circulation.
- Multiple exterior doors.
- First-floor windows.
- A recent break-in involving a forced-open window and broken window glass.

Customer concerns cover:

- Recent break-in.
- Forced-open window.
- Broken window glass.
- Window/opening awareness.
- Glass-break awareness.
- Exterior door awareness.
- Controlled locks.
- Ring-style doorbell replacement.
- Remote viewing and approved remote unlock option.
- Reliable Home Assistant-based local control.

## Evidence Packet

The sample evidence set includes placeholders for:

- Hand-drawn floorplan.
- Professional redraw pending.
- Exterior north photo.
- Exterior south photo.
- Exterior east photo.
- Exterior west photo.
- Interior/supporting photos.
- Compass/orientation note.

## Redraw Reminder

The test-case floorplan note states that the source hand drawing is authoritative. The professional redraw must be a faithful trace, not a redesign.

The note requires preservation of orientation, offsets, hallways, openings, windows, thresholds, doors, furniture, and customer room names.

Exterior and interior photos are validation references only and do not override the hand sketch unless WNYHS approves.

## Areas To Cover

The sample creates these room/area records:

- Main Entrance.
- Viewing Room.
- Reception / Office.
- Rear Entrance.
- Rear Parking Lot.
- Family / Service Area.
- Kitchen / Service Area.
- Restroom Hallway.
- Main Hallway.
- First-Floor Windows.

## Selected Solutions

The sample uses catalog-aligned solution names where available and freehand fallbacks where the current catalog does not have an exact item.

Solution intent covers:

- Intrusion Awareness.
- Entry & Perimeter Awareness.
- Glass-Break Awareness.
- Door / Window Left-Open Awareness.
- Smart Entry / Smart Lock & Guest Access.
- Front Door Package Protection as front-entry/video doorbell awareness.
- Local Control Plane.

## Draft Hardware / BOM

The rough BOM includes:

- Home Assistant Green / control plane kit.
- Z-Wave or Zigbee coordinator/radio placeholder.
- Video doorbell.
- Controlled smart lock(s).
- Three exterior door sensors.
- First-floor window sensors placeholder line.
- Two audible glass-break detectors.
- Siren/chime.
- Optional front-entry camera/video placeholder.

Each BOM item includes:

- Room/area reference.
- Concern served.
- Selected solution reference.
- Evidence reference.
- Installer note.
- Dashboard prep note.
- Reconciliation status (`GPT Proposed` or `WNYHS Modified`).

Manual pricing remains zero with notes because this task does not add exact pricing or automated totals.

## Compatibility

The sample uses the existing normalized `PropertyModelRecord` shape, so it is compatible with:

- `/operator/property-model`.
- `/operator/property-model/quote-preview`.
- `/operator/property-model/installer-packet`.
- Existing local JSON export and import flows.

No special-case preview or packet logic was added.

## Protected Systems

This task does not touch HubSpot, Stripe/payment, protected lead APIs, email sending, uploads, inventory automation, ordering automation, scheduling automation, auth, PDF generation, or durable production storage.
