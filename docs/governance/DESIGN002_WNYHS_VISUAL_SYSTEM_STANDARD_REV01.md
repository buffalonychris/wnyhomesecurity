# DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01

## Status

Working Standard

## Owner

WNY Home Security

## Document Type

Visual System Standard

## Purpose

Define the approved visual identity, presentation rules, accessibility expectations, image-generation direction, and user-interface standards for the next-generation WNY Home Security website.

This standard governs visual consistency across:

- Homepage
- QR Landing
- Category Pages
- Package Pages
- Solution Pages
- Navigation
- Search
- Calls to action
- Cards
- Image/media presentations

---

# Authority

This standard is subordinate to repository governance, the Master Task Register, active bounded work orders, and higher-authority system documents.

This standard does not authorize implementation by itself.

Implementation requires a bounded task and Codex work order.

---

# Brand Positioning

WNY Home Security should present as:

- Trustworthy
- Professional
- Premium
- Local
- Modern
- Homeowner-focused
- Calm
- Practical
- Built around customer ownership

The site must avoid:

- Alarm-company fear tactics
- Aggressive sales presentation
- Fake urgency
- Excessive technical jargon
- Commodity-device-first marketing
- Overly futuristic smart-home imagery
- Cluttered contractor-site design

---

# Visual Direction

Approved visual direction:

```text
Light Theme Primary
+
Charcoal / Black Structural Contrast
+
Antique Gold Accent
+
Premium Residential Photography
+
Existing WNYHS Shield/Eagle Logo
```

The visual system should feel like a premium local smart-property company, not a generic camera/security installer.

---

# Theme Strategy

## Primary Theme

Light Theme is the canonical WNYHS experience.

All redesigned public pages should be rebuilt to work first in the Light Theme.

## Secondary Theme

Dark Theme is a user-selectable secondary presentation mode after Light Theme completion.

Dark Mode must preserve the same brand identity, content hierarchy, accessibility, and CTA clarity.

Dark Mode is not the brand identity by itself.

---

# Color System

All implementation should use semantic color tokens.

Do not hardcode one-off colors in components when a semantic token can be used.

## Light Theme Tokens

| Token | Suggested Value | Purpose |
|---|---:|---|
| `background.primary` | `#F8F6F1` | Warm primary page background |
| `background.secondary` | `#FFFFFF` | Main surface/card background |
| `background.elevated` | `#FDFBF7` | Raised light panels |
| `text.primary` | `#111111` | Primary text |
| `text.secondary` | `#4A4A4A` | Secondary text |
| `text.muted` | `#6B6B6B` | Muted/supporting text |
| `border.subtle` | `#D9D6CF` | Subtle borders |
| `border.strong` | `#BEB8AC` | Stronger borders |
| `brand.charcoal` | `#111111` | Premium dark sections |
| `brand.gold` | `#B88A2E` | Primary gold accent |
| `brand.gold.dark` | `#8C671D` | Pressed/strong gold |
| `brand.gold.light` | `#E8D7A8` | Soft gold highlight |
| `brand.navy` | `#0E2745` | Deep blue CTA/support color |
| `state.success` | `#2F6F4E` | Positive states |
| `state.warning` | `#B88A2E` | Attention states |
| `state.danger` | `#A63A32` | Error states |

## Dark Theme Tokens

| Token | Suggested Value | Purpose |
|---|---:|---|
| `background.primary` | `#0B0D0E` | Dark page background |
| `background.secondary` | `#141719` | Dark surface |
| `background.elevated` | `#1E2225` | Raised dark panels |
| `text.primary` | `#F7F3EA` | Primary text |
| `text.secondary` | `#CFC7B8` | Secondary text |
| `text.muted` | `#AFA79A` | Muted/supporting text |
| `border.subtle` | `#34302A` | Subtle dark borders |
| `border.strong` | `#5A4A2C` | Strong dark borders |
| `brand.gold` | `#C9972F` | Gold accent |
| `brand.gold.light` | `#E8D7A8` | Highlight |
| `brand.navy` | `#173A5E` | Deep blue accent |

---

# Color Usage Rules

Gold should be used for:

- Primary CTA emphasis
- Accent labels
- Small visual highlights
- Icon badges
- Premium brand emphasis

Gold should not be overused as body text.

Charcoal/black should be used for:

- Header/nav contrast
- Select premium sections
- WNYHS Core panels
- Footer
- Dark accent blocks

Light backgrounds should dominate public pages.

---

# Typography

## Heading Font

Preferred heading font:

```text
Merriweather
```

Fallback:

```text
Georgia, serif
```

Headings should feel premium, readable, and local-business appropriate.

## Body Font

Preferred body font:

```text
Inter
```

Fallback:

```text
system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Body copy must prioritize readability over personality.

## Typography Rules

- Use large, clear headlines.
- Avoid tiny body text.
- Maintain strong line height.
- Avoid dense paragraph blocks.
- Use plain homeowner language.
- Avoid jargon-first language.

---

# Logo Standards

The existing WNYHS shield/eagle logo remains the primary brand mark.

Logo rules:

- Preserve original proportions.
- Do not stretch, squash, recolor, or distort.
- Use as a premium mark, not oversized decoration.
- Logo should appear in primary navigation and footer.
- Logo may appear in WNYHS Core or trust sections when visually appropriate.
- Logo should not overwhelm content.

Desktop navigation target:

```text
Logo mark prominent but restrained.
Company name readable.
CTA remains visually stronger than decorative branding.
```

---

# Iconography

Icon style should be:

- Simple
- Professional
- Consistent
- Homeowner-friendly
- Circular or badge-based where appropriate
- Compatible with gold, charcoal, navy, and category accents

Preferred icon subjects:

- Shield
- Home
- Family
- Water
- Lighting
- Awareness
- Awareness
- Automation
- Tools/service
- Location/local presence

Icons should support comprehension, not decorate randomly.

---

# Category Accent Guidance

Categories may use accent associations for scanning and recognition.

Suggested associations:

| Category | Accent Direction |
|---|---|
| Home Security | Shield / deep blue / charcoal |
| Aging-In-Place | Family / green / warm neutral |
| Environmental Safety | Water / blue |
| Home Automation | Home/dashboard / purple or navy |
| Home Lighting | Light / gold |

Category accents must remain subordinate to the core WNYHS brand palette.

---

# Photography Standards

Hero imagery should emphasize:

- Homes
- Families
- Property
- Outcomes
- Real homeowner situations
- Western New York residential relevance where possible

Hero imagery should not primarily feature devices.

Devices should appear as supporting imagery.

Avoid:

- Fear-based crime scenes
- Generic hacker/security clichés
- Overly futuristic glass-house smart home imagery
- Stock-photo tech clutter
- Unrealistic luxury-only homes
- Unsupported emergency-response implications

---

# Image Generation Direction

AI-generated imagery may be used for planning or production only when reviewed and approved.

Image generation prompts should aim for:

- Premium local residential feel
- Realistic Western New York home context
- Natural lighting
- Clean composition
- Homeowner outcome focus
- No fake readable UI text unless specifically designed later
- No exaggerated devices
- No cluttered tech fantasy scenes
- Consistent warm-light / charcoal / gold design language

Generated website mockups are directional references.

They are not exact implementation specifications.

Text visible inside generated mockups is not authoritative copy.

---

# Card Design

Cards should:

- Use generous spacing
- Maintain strong readability
- Prioritize homeowner outcomes
- Support both light and dark themes
- Use consistent border radius and shadow rules
- Avoid cramped feature lists
- Pair image + outcome + short description
- Include clear next-action affordance

Card hierarchy should support:

```text
Category Card
↓
Package Card
↓
Solution Card
```

---

# Button Standards

## Primary CTA

Purpose:

Drive estimate requests.

Preferred visual direction:

- Gold or deep navy background depending on section context
- High contrast text
- Strong visual weight
- Clear action language

Example labels:

- Request Estimate
- Request A Local Estimate
- Request Smart Property Estimate

## Secondary CTA

Purpose:

Call/text or browse.

Preferred visual direction:

- Outline style
- Lower visual weight
- Clear icon when useful

Example labels:

- Call / Text
- Explore Solutions
- View Packages

---

# Search Visual Standard

Search must be clear, visible, and accessible.

Search should not feel like a hidden utility.

Search should support:

- Navigation bar access
- Homepage access
- QR Landing access
- Mobile access

Search UI must clearly indicate that visitors can search for:

- Categories
- Packages
- Solutions
- Contact/help pages

---

# Navigation Standards

Approved primary navigation pattern:

- Home
- Explore
- Packages
- Solutions
- Why WNYHS
- How It Works
- About
- Contact
- Search

Primary actions:

- Request Estimate
- Call / Text

Navigation should remain simple and homeowner-focused.

If visual space is limited, secondary links may move into a menu, but search and primary CTA should remain easy to find.

---

# Accessibility

All redesigned public pages must prioritize:

- High contrast
- Mobile readability
- Keyboard accessibility
- Visible focus states
- Accessible image alt text
- Legible type sizes
- Clear form labels
- Touch-friendly controls
- Search accessibility
- Modal/lightbox accessibility where implemented

Accessibility must not be sacrificed for visual style.

---

# Homepage Visual Structure

Homepage should visually communicate:

```text
Premium local company
+
Broad smart-property capability
+
Clear discovery paths
```

Homepage visual order:

1. Hero
2. Trust Bar
3. Category Explorer
4. Featured Packages / Solutions
5. WNYHS Core
6. Why WNYHS
7. CTA
8. Footer

Homepage should feel complete, polished, and educational.

---

# QR Landing Visual Structure

QR Landing should visually communicate:

```text
You scanned the right company.
We are local.
We can help.
Request an estimate or call/text now.
```

QR Landing should be shorter and more direct than Homepage.

QR Landing should not attempt to become a full site browsing experience.

---

# Visual Hierarchy Rule

Present information from:

```text
Category
→ Package
→ Solution
```

Avoid leading with devices or technical specifications.

---

# Implementation Boundary

This document defines visual standards only.

It does not authorize:

- UI implementation
- Route changes
- Runtime changes
- HubSpot changes
- Stripe changes
- Scheduling changes
- Cloudflare changes
- Email changes
- Image generation
- Asset replacement
- Application code changes

Implementation requires an approved bounded task and Codex work order.
