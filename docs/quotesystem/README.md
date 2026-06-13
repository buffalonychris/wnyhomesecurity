# WNYHS Quote System Governance

Status: ACTIVE
Customer-facing: No
Implementation authority: No

## Purpose

`/docs/quotesystem/` is the repository home for WNYHS quoting-system governance.

This folder defines the standards and placeholder contracts for future quote-system work. It does not authorize app code, routes, UI changes, pricing-engine implementation, customer proposal generation, Home Assistant dashboard generation, HubSpot changes, Stripe changes, scheduling changes, or runtime behavior changes.

## Quote-System Goal

The WNYHS quote system is intended to support a controlled operator workflow that can:

- Import exterior photos.
- Import interior photos.
- Import a customer or operator floorplan sketch.
- Preserve compass direction and source orientation.
- Generate a workable professional floorplan from approved capture inputs.
- Support planning for security, automation, safety, eldertech, lighting, environmental, and access-control work.
- Generate BOM-backed customer proposals after approved hardware selection.
- Prepare Home Assistant dashboard requirements from finalized hardware.

## Current Document Set

The first fully developed quote-system topic is floorplan capture and professional redraw. Other quote-system areas are intentionally represented as clear placeholders or skeletons for future controlled passes.

Use `QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md` to identify each document, its purpose, and its maturity.

## Governance Boundary

The documents in this folder are planning and governance artifacts only. Future implementation requires a separate bounded task, updated task-register authority, and validation appropriate to the affected system.
