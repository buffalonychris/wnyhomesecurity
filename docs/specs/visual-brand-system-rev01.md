# WNY Home Security Visual Brand System — REV01

## 1. Purpose
Define the canonical tactical visual identity for all customer-facing WNY Home Security experiences.

## 2. Authority role
This document is the canonical visual identity contract for DESIGN-SKINNING work and applies unless superseded by a later explicit revision.

## 3. Applies-to scope
Homepage, main funnel, QR funnel, fit check, planner/quote/review/agreement/deposit/schedule pages, shared nav/footer, buttons/cards/forms, plus customer-facing email/document templates present in repo.

## 4. Core visual principle
Premium tactical security: matte black + forged steel environment, restrained metallic-gold accents, high-contrast readable typography, serious local authority tone.

## 5. Color system
Canonical palette uses wny-black, wny-steel, wny-bronze, wny-gold, wny-edge, and wny-text scales.

## 6. Semantic token mapping
Use semantic tokens: `--background`, `--foreground`, `--card`, `--card-foreground`, `--popover`, `--popover-foreground`, `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--muted`, `--muted-foreground`, `--accent`, `--accent-foreground`, `--border`, `--input`, `--ring`, `--destructive`, `--success`, `--warning`.

## 7. Typography system
Headings: condensed bold display (Oswald-family direction). Body: Inter/system sans for readability. Section labels: uppercase + letter spacing. Avoid thin/script/futuristic gimmicks.

## 8. Background system
Matte black / dark graphite base with subtle cinematic gradients only; no busy textures behind paragraph text.

## 9. Surface/card system
Dark steel cards, restrained depth, thin structure borders, featured-card gold edge optional.

## 10. Border and edge-lighting system
Use steel baseline borders and selective warm edge-light accents (`--primary` / `--accent`) for emphasis.

## 11. Button system
Primary CTA: metallic gold treatment with dark text and accessible focus ring. Secondary CTA: steel surface with high-contrast text.

## 12. Navigation treatment
Dark tactical header, thin divider/edge line, high-contrast links, restrained gold active/hover states.

## 13. Footer treatment
Dark footer, thin separators, clean high-contrast utility links, local authority tone.

## 14. Form/input treatment
Dark input surfaces, steel borders, gold focus ring, legible labels/placeholder contrast, clear error state coloring.

## 15. QR landing treatment
Mobile-first, high-confidence tactical skin tied visually to the main brand and conversion CTA.

## 16. Main funnel treatment
Same tokenized system as QR, with slightly richer informational hierarchy while preserving conversion priority.

## 17. Email/document treatment if present
Apply typography hierarchy + restrained brand accents, preserve readability/printability/deliverability.

## 18. Motion/animation rules
Subtle and purposeful only; no neon glows, strobing, or decorative-only animation overload.

## 19. Logo/image usage rules
Use emblem intentionally and sparingly; avoid repeated watermark-style logo backgrounds.

## 20. Accessibility requirements
Maintain readable contrast for text/controls, visible focus indicators, and mobile legibility.

## 21. Forbidden visual patterns
No cyberpunk/neon/gaming UI/rainbow gradients/playful cartoon styling/glassmorphism-heavy styling/generic SaaS blue treatments.

## 22. Implementation boundaries
Visual-only changes: tokens/theme/layout/component styling. No route/API/lead/HubSpot/Stripe/scheduling behavior modifications.

## 23. Validation checklist
- Version badge bumped.
- Tokenized palette applied.
- Nav/footer/buttons/cards/forms aligned.
- QR + main funnel visual parity achieved.
- Lint/build/typecheck completed where available.
- Hardcoded color audit reviewed and remediated when in scope.

## 24. Related docs
`/docs/system/project.md`, `/docs/system/guardrails.md`, `/docs/specs/funnel-spec.md`, `/docs/specs/full-stack-spec.md`.

## 25. Last verified placeholder
Last verified: `TBD`.
