# SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01

## Status

Working Standard

## Owner

WNY Home Security

## Document Type

Solution Media Standard

## Purpose

Define required image assets, image roles, image-generation guidance, accessibility expectations, and image interaction behavior for WNY Home Security Solution pages and Solution Objects.

Images are not decorative assets.

Images are explanatory content.

Each required image exists to answer a specific homeowner question and improve customer understanding.

---

# Authority

This standard supports:

```text
SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md
```

This standard does not authorize implementation by itself.

Implementation requires a bounded task and Codex work order.

---

# Required Image Assets

Every production-ready Solution Object must include four required image assets.

1. Hero Image
2. Outcome Image
3. Hardware Example Image
4. Dashboard / App Example Image

A Solution Object is not production-ready without all four required images.

---

# Optional Image Assets

Optional assets may be included where useful.

1. Placement / Coverage Image
2. Before / After Image

Optional images should be used when they improve homeowner understanding.

---

# Image Role Standards

## 1. Hero Image

Purpose:

Show the homeowner problem, concern, situation, or desired outcome.

The Hero Image establishes context.

Requirements:

- Outcome-focused
- Human/property-focused
- Not hardware-focused
- Visually calm and professional
- Suitable for public homepage/category/package/solution visual style
- Used in the Hero section
- Not clickable
- No zoom required

The Hero Image should not interrupt the visitor's initial reading experience.

---

## 2. Outcome Image

Purpose:

Show the real-world result of the Solution.

The Outcome Image answers:

```text
What changes for the homeowner?
```

Examples:

- Package status successfully surfaced
- Homeowner receiving awareness notification
- Family member checking in remotely
- Water issue detected before damage
- Exterior lighting improving visibility
- Garage/entry status awareness

Requirements:

- Outcome-focused
- Homeowner understandable
- Supports example scenario or outcome section
- Clickable
- Opens modal/lightbox

---

## 3. Hardware Example Image

Purpose:

Answer:

```text
What will they install?
```

Requirements:

- Shows representative hardware examples
- Clearly illustrative
- Not treated as an assured configuration
- Supports Practical Setup / Possible Pieces of the Plan
- Clickable
- Opens modal/lightbox

Allowed examples:

- Video doorbell
- Smart lock
- Leak sensor
- Sump activity sensor
- Camera placement example
- Lighting control device
- Dashboard-connected device

Hardware images must avoid making unsupported manufacturer/model promises unless explicitly approved.

---

## 4. Dashboard / App Example Image

Purpose:

Answer:

```text
What will I actually see and use?
```

Requirements:

- Shows representative dashboard, phone, tablet, or app experience
- Demonstrates awareness, alerts, automations, controls, or status
- Prefer WNYHS Core / Home Assistant-style examples where appropriate
- Clearly illustrative
- Clickable
- Opens modal/lightbox

Examples:

- Property status dashboard
- Water alert dashboard
- Camera/doorbell event view
- Lighting scene controls
- Family awareness dashboard
- Environmental status tiles

Dashboard examples should not promise exact screen layouts unless the layout is part of an approved implementation standard.

---

# Optional Image Standards

## Placement / Coverage Image

Purpose:

Show placement concepts or coverage examples.

Examples:

- Camera field of view
- Sensor placement
- Driveway visibility
- Utility room awareness layout
- Lighting coverage
- Entry/access layout

Clickable:

Required when included.

## Before / After Image

Purpose:

Show improvement in awareness, protection, convenience, safety, or control.

Examples:

- Before: unknown package status
- After: package arrival notification and visible record
- Before: basement leak discovered late
- After: early alert and dashboard status
- Before: dark exterior walkway
- After: automated lighting scene

Clickable:

Required when included.

---

# Image Interaction Rules

## Static Image

The Hero Image is static.

It should not be clickable.

It should not open a modal.

It should not change route.

## Clickable Supporting Images

The following images must be clickable:

- Outcome Image
- Hardware Example Image
- Dashboard / App Example Image
- Placement / Coverage Image, when included
- Before / After Image, when included

---

# Modal / Lightbox Behavior

Supporting images must open in a modal/lightbox interaction.

Required behavior:

- No route change
- No new tab
- No full page navigation
- Preserve page scroll position
- Mobile-friendly
- Desktop-friendly
- Close button required
- ESC close on desktop where practical
- Tap outside close on mobile where practical
- Accessible keyboard navigation where practical
- Accessible image labels
- Caption support

Implementation specifics are not governed here.

This standard does not prescribe:

- React component names
- CSS class names
- Animation library
- Modal package
- Exact implementation method

Those are implementation details.

---

# Caption Requirements

Each clickable supporting image should support:

- Image Title
- Short Description

Example:

```text
Representative Dashboard Example

Example awareness dashboard showing water alerts,
temperature awareness, sump activity, and property status.
```

Captions must clarify whether the image is representative, illustrative, or an exact approved example.

---

# Alt Text Requirements

Every image must include accessible alt text.

Alt text should describe the content and purpose of the image.

Alt text should not be stuffed with keywords.

Good example:

```text
Homeowner receiving a package delivery notification on a phone.
```

Bad example:

```text
Best smart home security camera system Buffalo NY.
```

---

# Image Generation Guidance

Generated images must follow the approved visual direction from DESIGN002.

Images should look:

- Realistic
- Premium but approachable
- Residential
- Clean
- Calm
- Local-service appropriate
- Outcome-focused

Images should avoid:

- Fake readable UI text
- Distorted devices
- Overly futuristic smart-home visuals
- Fear-based crime scenes
- Manufacturer-specific branding unless approved
- Claims implied by emergency vehicles, public-safety response, fire-response authority, or medical-response authority

Generated dashboard examples should be treated as representative unless an implementation task later creates exact approved UI screenshots.

---

# Image Content Rules

Images should support WNYHS's outcome-first business model.

Preferred image subjects:

- Homes
- Families
- Property
- Homeowner situations
- Alerts
- Dashboards
- Installed systems
- Representative hardware
- Practical coverage examples

Images should avoid:

- Generic stock-photo tech clutter
- Alarm-company fear imagery
- Aggressive crime imagery
- Overly futuristic smart-home visuals
- Unsupported emergency-response implications
- Manufacturer-specific promises unless approved

---

# Suggested File Naming Pattern

Future implementation may use a consistent naming pattern.

Recommended pattern:

```text
solution-slug__image-role__short-description.ext
```

Examples:

```text
water-damage-prevention__hero__homeowner-utility-room.webp
water-damage-prevention__hardware__leak-sensor-examples.webp
water-damage-prevention__dashboard__water-alert-status.webp
```

Exact asset naming is an implementation detail but should remain predictable.

---

# Production Readiness Rule

A Solution Object is not production-ready unless it contains:

```text
Hero Image
Outcome Image
Hardware Example Image
Dashboard / App Example Image
```

The required image set must be reviewed as part of Solution content readiness.

---

# Relationship To Solution Object Standard

SOLUTION001 governs the Solution Object.

This document governs the Solution Object media layer.

If this document conflicts with SOLUTION001, stop and create a governance reconciliation task.

---

# Implementation Boundary

This standard does not authorize:

- UI changes
- Route changes
- Runtime changes
- Image generation
- Asset replacement
- Application code changes
- Modal implementation
- Lightbox implementation

Implementation requires an approved bounded task and Codex work order.
