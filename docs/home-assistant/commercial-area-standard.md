# WNYHS Commercial Home Assistant Area and Dashboard Standard

Status: Active
Scope: Reusable commercial Home Assistant deployment documentation standard

---

## Purpose

This document defines the reusable WNY Home Security commercial Home Assistant area and dashboard structure for small commercial deployments.

The standard is intended for documentation, planning, and operator handoff. It does not authorize app code changes, website route changes, customer-facing copy changes, pricing changes, CRM changes, payment changes, or dashboard implementation work.

---

## Standard Area Model

Commercial Home Assistant deployments should organize the building into three top-level operational groups:

- Exterior
- Interior
- Infrastructure

These groups should be reflected in both the area naming plan and the dashboard organization so installers and owners can reason about the system by building location and operational responsibility.

---

## Exterior Standard

Exterior areas represent the building envelope and outside-facing device locations.

Standard exterior wall areas:

- North Wall
- South Wall
- East Wall
- West Wall

Exterior wall areas are used for building-envelope devices, including:

- Exterior doors
- Operable windows
- Exterior cameras
- Wall-mounted exterior sensors
- Exterior entry hardware

Exterior areas should be named by wall orientation unless a future site-specific plan explicitly authorizes more granular exterior areas.

---

## Interior Standard

Interior areas represent rooms, hallways, and support spaces inside the building.

Interior areas may include:

- Rooms
- Hallways
- Utility areas
- Support areas
- Site-specific interior zones as needed

Interior room areas are used for:

- Interior motion sensors
- Room-specific sensors
- Room dashboards
- Owner-facing interior status views

Interior areas should be named by the terms used by the owner or installer for day-to-day navigation, while remaining clear enough for future service work.

---

## Infrastructure Standard

Infrastructure represents the operational hardware that supports the Home Assistant deployment.

Standard infrastructure area:

- Network Closet

Infrastructure may include:

- Home Assistant controller
- Z-Wave radio
- Zigbee radio
- Router
- Network switch
- UPS
- PoE hardware
- USB extension hardware
- Other support hardware

Infrastructure is shown operationally as its own dashboard section even when it is physically located inside another room.

If the network closet is physically inside a room, document both facts:

- Operational area: Network Closet
- Physical location: the room where the equipment is installed

---

## Dashboard Standard

A commercial Home Assistant dashboard should use the same organizing model as the area plan.

Recommended dashboard sections:

- Overview
- Exterior
- Entrances
- Cameras
- Security
- Activity
- Infrastructure / Administration

The dashboard should favor operational clarity over physical perfection. A device may be physically inside one room but belong operationally to Infrastructure if it supports the system as a whole.

---

## Scope Boundaries

This standard does not create or imply:

- Customer-facing website copy
- Public route changes
- Dashboard implementation code
- Payment or scheduling changes
- CRM write behavior
- New device requirements
- New automation requirements
- Claims that a system prevents break-ins, theft, property damage, or other events
- Any third-party response-center service
- Any public-safety agency response workflow

Owner-managed notifications, local device behavior, and remote access should be documented only when included in a site-specific deployment plan.
