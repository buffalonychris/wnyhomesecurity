# CODEX MULTIMODAL REFERENCE STANDARD REV01

Status: Active Codex / KAOS governance standard
Customer-facing: No
Implementation authority: No
Task ID: CODEX-MULTIMODAL-REFERENCE-STANDARD-001

## 1. Purpose

This standard defines how WNYHS / KAOS Codex work orders should attach, identify, and use visual or formatted reference artifacts when output appearance, formatting, layout, or visual parity matters.

The purpose is to prevent text-only prompts from becoming the sole appearance authority when a screenshot, mockup, rendered artifact, formatted document, or comparable reference is available and relevant.

## 2. Core Rule

If visual parity, formatting, layout, design quality, or customer-facing presentation matters, text alone is insufficient when a reference artifact is available.

Codex work orders should treat the available reference artifact as the visual/formatting authority for the appearance expectations described in the task, while preserving repository governance, task scope, and protected-system boundaries.

## 3. Authority Model

- Repository governance controls what may be changed.
- The bounded Codex work order controls scope.
- Reference artifacts control visual/layout/formatting expectations.
- Text instructions control content, constraints, validation, and forbidden scope.
- Codex must not infer business strategy from images alone.

Reference artifacts can clarify how an output should look. They do not override repository governance, runtime contracts, locked standards, claims rules, or the allowed files named by a bounded task.

## 4. Reference Artifact Types

Reference artifacts include:

- screenshots
- mockup images
- design boards
- before/after comparison images
- PDFs
- DOCX templates
- proposal samples
- agreement samples
- invoice samples
- brand boards
- icon sheets
- image sets
- floor plans
- annotated screenshots
- rendered webpage screenshots

## 5. When Required

Reference artifacts are required when available for:

- website redesigns
- landing pages
- dashboard UI
- customer portals
- proposals
- agreements
- invoices
- PDFs
- labels/packaging
- email templates
- sales decks
- brand/image generation tasks
- formatted customer-facing documents

If an available reference artifact is intentionally not used, the work order or completion summary should state why it was not controlling for the task.

## 6. When Optional

Reference artifacts are optional for:

- pure backend/runtime work
- small copy edits
- docs-only governance
- bug fixes without visible UI
- validation-only tasks

Optional does not mean forbidden. If a reference artifact reduces ambiguity without expanding scope, a work order may still include it.

## 7. Prompt Language Standard

Reusable prompt language:

```text
Attached reference artifacts are visual/formatting authority for layout, hierarchy, spacing, proportions, typography feel, color mood, and presentation style. Text instructions control scope, content, constraints, validation, and forbidden changes. Repository governance remains the durable source of truth.
```

Work orders should pair this language with explicit allowed files, forbidden scope, validation requirements, and protected-system confirmations.

## 8. Acceptance Criteria Standard

For visual/formatting tasks, Codex summaries must report:

- which reference artifacts were used
- how closely the implementation matches the references
- what could not be matched and why
- whether deviations were due to platform constraints, missing assets, or scope limits
- screenshots or preview artifacts when possible

When the task produces a document, deck, PDF, webpage, dashboard, or other formatted surface, validation should include the strongest practical rendered-preview check available within the task scope.

## 9. File Handling Rules

- Do not commit reference artifacts unless the task explicitly requires it.
- If artifacts must become durable authority, promote them into the correct repo docs/assets location.
- Avoid storing customer-private images unless explicitly approved.
- Do not expose secrets, tokens, private customer data, or protected information in reference files.
- Use sanitized/redacted examples for contracts, proposals, invoices, dashboards, and customer records.

Temporary reference files may be used during a Codex run when needed, but they should not become tracked repository artifacts unless the task explicitly authorizes that outcome.

## 10. Visual vs Business Authority

Images can define appearance.

Images do not authorize:

- new features
- pricing
- claims
- protected-system changes
- legal terms
- integrations
- customer promises

unless text/spec/repo docs explicitly authorize those decisions.

Codex must treat visual references as appearance evidence, not product strategy, legal authority, customer commitment, runtime authority, or integration approval.

## 11. KAOS Reusability

This standard is intended to become reusable KAOS operating-system practice across WNYHS and future businesses.

The reusable principle is that formatted or visual work needs a durable way to separate appearance authority from scope authority. Reference artifacts can answer appearance questions, while the repository, task register, work order, and locked standards continue to control what may actually be changed.

## 12. WNYHS Immediate Use Cases

Immediate WNYHS use cases include:

- BKLF dashboard styling
- WNYHS website landing page redesign
- customer proposals
- customer agreements
- sales PDFs
- dashboard screenshots
- generated website image sets

Each use case still requires its own bounded task before implementation, generation, source changes, dashboard changes, document-template creation, or asset promotion.

## 13. Non-Goals

- This task does not implement any UI.
- This task does not generate images.
- This task does not change dashboard YAML.
- This task does not change website pages.
- This task does not create templates for legal/customer documents.

This standard documents how future work orders should use reference artifacts. It does not perform the future work.
