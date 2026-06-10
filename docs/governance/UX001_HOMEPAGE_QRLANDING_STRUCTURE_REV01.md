# UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01

## Status

Working Standard

## Owner

WNY Home Security

## Document Type

UX / Page Structure Standard

## Purpose

Define the authoritative user experience, information architecture, search requirements, and structural requirements for the WNY Home Security Homepage and QR Landing pages.

This document governs page purpose, content hierarchy, search behavior, navigation expectations, and customer discovery flow.

---

# Authority

This standard is subordinate to repository governance, the Master Task Register, active bounded work orders, and higher-authority system documents.

This standard does not authorize implementation by itself.

Implementation requires a bounded task and Codex work order.

---

# Guiding Principle

Homepage and QR Landing serve different purposes.

They should not be treated as the same page.

Homepage is discovery-oriented.

QR Landing is conversion-oriented.

---

# Public Site Hierarchy

Approved public-site hierarchy:

```text
Homepage / QR Landing
↓
Category
↓
Package
↓
Solution
```

Content inheritance:

```text
Solution
↓
Package
↓
Category
↓
Homepage
↓
QR Landing
```

---

# Homepage Purpose

The Homepage exists to:

- Introduce WNYHS
- Explain WNYHS Core
- Help homeowners discover possibilities
- Present Categories
- Present Packages
- Present Solutions
- Support search
- Build trust
- Drive estimate requests

Homepage visitors may not know what they need.

Homepage should support browsing, learning, comparison, search, and exploration.

---

# QR Landing Purpose

The QR Landing page exists to:

- Establish trust
- Confirm legitimacy
- Acknowledge that the visitor scanned WNYHS material
- Explain WNYHS Core concisely
- Show examples of what is possible
- Encourage estimate requests and calls/texts

QR visitors have already taken action by scanning a placard, sign, flyer, yard sign, or referral material.

QR Landing should prioritize conversion over exploration.

QR Landing should not become a duplicate Homepage.

---

# Global Search Requirement

Search is required.

Search should be available from:

- Homepage
- QR Landing
- Primary navigation

Search should be visible enough that homeowners understand they can search for problems, products, categories, or help topics.

---

# Search Scope

Search should return only approved public content.

Allowed result types:

## Categories

Examples:

- Home Security
- Aging-In-Place
- Environmental Safety
- Home Automation
- Home Lighting

## Packages

Examples:

- Property Awareness
- Family Confidence
- Holiday Lighting

## Solutions

Examples:

- Package Protection
- Driveway Watch
- Water Damage Prevention

## Public Information Pages

Examples:

- About Us
- Contact
- Support
- How It Works

---

# Search Behavior

Search should support homeowner language and common product terms.

Examples:

A search for:

```text
doorbell camera
```

may return:

- Package Protection
- Smart Entry
- Property Awareness Cameras

A search for:

```text
basement leak
```

may return:

- Water Damage Prevention
- Sump Pump Awareness
- Utility Room Protection
- Environmental Safety

A search for:

```text
mom living alone
```

may return:

- Aging-In-Place
- Family Awareness
- Safer Night Movement
- Caregiver Access

---

# Search Restrictions

Search should not return:

- Hidden routes
- Runtime pages
- Internal system pages
- Administrative pages
- Technical implementation pages
- Draft-only content

Search should prioritize customer-facing content.

---

# Homepage Structure

Homepage should contain:

1. Navigation
2. Search Access
3. Hero
4. Trust Bar
5. Category Explorer
6. Featured Packages
7. Featured Solutions
8. WNYHS Core Section
9. How It Works
10. Why WNYHS
11. Primary CTA
12. Footer

---

# Homepage Hero

Homepage Hero should:

- Establish overall positioning
- Explain the broad value proposition
- Introduce smart property solutions
- Include primary CTA
- Include Call / Text option
- Support search access nearby or in navigation

Homepage Hero should not focus on a single category.

Approved positioning direction:

```text
Protect what matters.
Simplify your life.
```

or equivalent outcome-first messaging.

---

# Trust Bar

Homepage should include trust indicators such as:

- Locally Owned
- Customer-Owned
- No Required Monthly Fees
- Professional Installation
- Built To Expand

Trust indicators should be concise and scannable.

---

# Category Explorer

Homepage should prominently display the five approved Categories.

Categories should be presented before Packages and Solutions.

Categories are the highest-level homeowner discovery tool.

---

# Featured Packages

Homepage may include Featured Packages when Packages help clarify buying paths.

Featured Packages should not overwhelm the page.

Homepage should avoid forcing every Category to appear as a Package.

---

# Featured Solutions

Homepage should include Featured Solutions drawn from the approved Solution catalog.

Featured Solutions should represent multiple Categories.

Homepage should not attempt to display the entire Solution catalog.

---

# WNYHS Core Section

Homepage must include a dedicated WNYHS Core section.

The section should communicate:

- Unified dashboard
- Home Assistant foundation
- Local-first operation
- Customer-owned equipment
- Customer-owned data
- No vendor lock-in
- Future expansion readiness

This section represents a primary WNYHS differentiator.

---

# How It Works

Homepage should include a simple process explanation.

Recommended flow:

1. Explore Solutions
2. Request Estimate
3. We Build The Right Plan

The goal is to reduce uncertainty and clarify next steps.

---

# Why WNYHS

Homepage should explain:

- Local ownership
- Professional installation
- Ongoing support
- Expansion capability
- Customer ownership
- No required monthly fees

---

# Homepage CTA

Homepage should contain strong estimate-request calls to action.

CTA options may include:

- Request Estimate
- Call / Text
- Contact Us

---

# QR Landing Structure

QR Landing should contain:

1. Navigation
2. Search Access
3. Hero
4. Trust Bar
5. Popular Solutions
6. WNYHS Core Section
7. Why People Choose WNYHS
8. Primary CTA
9. Footer

---

# QR Landing Hero

QR Landing Hero should:

- Acknowledge the scan
- Quickly explain WNYHS
- Establish trust
- Present estimate CTA immediately
- Present Call / Text CTA immediately

The QR Hero should be more direct than the Homepage Hero.

Approved scan acknowledgement pattern:

```text
Thank you for scanning.
```

or equivalent.

---

# Popular Solutions Section

QR Landing should display a limited number of popular Solutions.

Recommended focus:

- Package Protection
- Driveway Watch
- Water Damage Prevention
- Sump Pump Awareness
- Smart Lighting / Security Lighting
- Family Awareness

The purpose is to provide examples, not full browsing.

---

# Why People Choose WNYHS

QR Landing should include a compact trust section highlighting:

- Customer-Owned
- No Required Monthly Fees
- Built To Expand
- Local Support

This section should reinforce differentiation immediately before conversion actions.

---

# QR Landing CTA

QR Landing should prioritize:

- Request Estimate
- Call / Text

The CTA should remain visible and easy to access.

---

# Navigation Expectations

Primary navigation should support:

- Home
- Explore
- Packages
- Solutions
- Why WNYHS
- How It Works
- About
- Contact
- Search

Navigation should remain simple and homeowner-focused.

On QR Landing, navigation may be simplified as long as search, request estimate, and call/text remain available.

---

# Visual Alignment

Homepage and QR Landing should follow:

```text
DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01
```

Light Theme is primary.

Dark Theme is user-selectable after the redesigned page system is complete.

---

# Mockup Reference Rule

Mockup images may be used as directional references for:

- General structure
- Visual hierarchy
- Logo integration
- Light / charcoal / gold brand direction
- Section order
- Relative emphasis

Mockup images are not authoritative for:

- Exact copy
- Exact spacing
- Exact component implementation
- Exact image assets
- Exact navigation labels
- Exact icon set

---

# Relationship To Other Standards

This document works with:

- SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01
- MASTER_SOLUTION_CATALOG_V1
- SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02
- SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01
- PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01
- CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01
- DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01

---

# Implementation Boundary

This document defines UX and structure governance only.

It does not authorize:

- UI implementation
- Route changes
- Runtime changes
- HubSpot changes
- Stripe changes
- Scheduling changes
- Cloudflare changes
- Email changes
- Application code changes

Implementation requires an approved bounded task and Codex work order.
