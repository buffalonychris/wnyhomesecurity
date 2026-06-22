# IMG-PIPELINE001_OPENAI_IMAGE_GENERATION_PIPELINE_SETUP_PLAN_REV01

## Document Header

- **Title:** OpenAI Image Generation Pipeline Setup Plan
- **Revision:** REV01
- **Status:** ACTIVE / PLANNING FOR REVIEW
- **Task:** T-IMG-PIPELINE001-001 - Image Generation Pipeline Setup Plan
- **Owner:** WNY Home Security category-level image generation workflow
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Document Type:** Docs-only setup plan for a future repo-side image generation pipeline
- **Customer-Facing:** No
- **Implementation Authority:** No

## 1. Purpose

IMG-PIPELINE001 defines a docs-only setup plan for a future repo-side image generation pipeline that uses the OpenAI Image API to create candidate WNY Home Security category assets.

The planned pipeline will consume governed category asset manifests and category-specific generation plans, preview prompts before paid generation, write outputs into review-safe folders, and preserve operator review before approved production use.

This task does not implement API calls, create scripts, add package scripts, generate images, add image files, replace image files, or wire assets into public pages.

## 2. Authority

IMG-PIPELINE001 operates under:

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY001_WNYHS_CATEGORY_ASSET_PRODUCTION_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY002_WNYHS_CATEGORY_ASSET_MANIFEST_STANDARD_REV01.md`
- `docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md`
- `docs/design-system/IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01.md`

If this document conflicts with higher-authority repository governance, the higher-authority document controls.

## 3. Relationship to IMG-CATEGORY001/002/003/004

IMG-CATEGORY001 defines category asset production, review, organization, export, acceptance, rejection, and protected-system boundaries.

IMG-CATEGORY002 defines the category asset inventory model, required asset classes, filename patterns, category requirements, priority levels, and manifest field expectations.

IMG-CATEGORY003 defines planned source records for current category assets, including asset IDs, filenames, folders, category requirements, approval status, and generation status.

IMG-CATEGORY004-style generation plans define category-specific prompt packages, output filenames, folder paths, review criteria, and generation sequence for a bounded category.

IMG-PIPELINE001 defines how a future local pipeline should connect those documents to OpenAI Image API generation without weakening review, overwrite, cost, claims, or visual standards.

## 4. Provider decision

The planned default provider is the OpenAI Image API.

The future implementation task should use official OpenAI SDK/API guidance available at implementation time. This document intentionally avoids locking request syntax, model names, payload fields, response formats, or SDK details because those may change before implementation.

No API call is implemented by this planning task.

## 5. Required environment variables

Minimum required future environment variable:

- `OPENAI_API_KEY`

Optional future environment variables may include:

- `OPENAI_IMAGE_MODEL`
- `OPENAI_IMAGE_SIZE`
- `OPENAI_IMAGE_OUTPUT_FORMAT`
- `OPENAI_IMAGE_QUALITY`
- `WNYHS_IMAGE_GENERATION_DRY_RUN`

Rules:

- Do not commit real secrets.
- Do not add real secrets to docs.
- Do not modify `.env` files in this planning task.
- Future implementation should read secrets from local environment variables only.
- Future implementation should fail clearly when `OPENAI_API_KEY` is required but missing.

## 6. Proposed script location

Recommended future script folder:

```text
/scripts/image-generation/
```

Potential future scripts:

```text
/scripts/image-generation/generate-category-assets.mjs
/scripts/image-generation/build-prompts-from-manifest.mjs
/scripts/image-generation/validate-generated-assets.mjs
```

This planning task does not create these scripts. A later implementation task must decide the final script structure after reviewing current repo tooling.

## 7. Input source model

Future generation should consume:

- `IMG-CATEGORY003` for asset records, filenames, folder paths, status fields, asset classes, category requirements, hardware cluster requirements, dashboard/Core requirements, and priority.
- `IMG-CATEGORY004`-style category generation plans for asset-specific prompt text, avoid lists, review notes, and generation sequence.
- `IMG-CATEGORY001` for visual production, review, approval, rejection, and folder organization rules.
- `IMG-CATEGORY002` for inventory expectations, naming patterns, category-specific requirements, manifest fields, and priority model.

Future implementation may use structured local config derived from these docs if direct Markdown parsing is too brittle. Any derived config must preserve the governing document source path and asset ID mapping.

## 8. Output folder model

Draft generation output:

```text
/public/images/category-pages/{category-slug}/drafts/
```

Review candidates:

```text
/public/images/category-pages/{category-slug}/review/
```

Approved production assets:

```text
/public/images/category-pages/{category-slug}/
```

Generated images must not go directly into the approved production location by default. Operator review is required before any generated asset is copied, renamed, or moved into the approved production folder unless a later bounded task explicitly authorizes a narrower exception.

## 9. Draft/review/approved asset workflow

Expected future workflow:

1. Build prompt package from the source manifest and category generation plan.
2. Preview prompts in dry-run mode.
3. Generate candidate files into the category `drafts/` folder only when write mode is explicitly requested.
4. Promote selected candidates from `drafts/` to `review/` after local inspection.
5. Run visual and claim-safety validation on review candidates.
6. Move or copy only operator-approved assets into the approved production folder under a separate authorized task or explicit replace operation.
7. Record output summary, candidate filenames, prompt source, and review status.

Generated candidates remain drafts until reviewed. Draft or review files are not production assets.

## 10. No-auto-overwrite rule

Future scripts must not overwrite existing approved production image files by default.

If a target filename already exists in the approved production folder, future scripts must either:

- stop with a clear message,
- write to `drafts/` or `review/` with a timestamp or candidate suffix, or
- require an explicit replace flag authorized by the active bounded task.

Default behavior must protect approved production filenames.

## 11. Prompt assembly model

Future prompt assembly should combine:

- asset ID
- category slug
- asset class
- planned filename
- folder path
- required visual content
- hardware cluster requirement
- dashboard/Core content requirement
- category-specific visual standard
- asset-specific full prompt from the category generation plan
- asset-specific avoid list
- global visual standard from IMG-CATEGORY001
- claim-safe language rules from repository guardrails

Prompt preview should show the final assembled prompt before generation. The preview should include asset ID, planned output filename, output folder, and whether the run is dry-run or write mode.

## 12. Claim-safe language enforcement

Future scripts must enforce repository claim rules before generation.

Prompt text, filenames, summary reports, and generated UI labels should avoid forbidden terms from repository guardrails and root execution instructions.

Use safe substitutes such as:

- awareness
- status
- visibility
- condition status
- property status
- water status
- environmental status
- leak awareness
- freeze protection status
- utility awareness

The pipeline must not weaken or revise repository guardrails. If a prompt source contains unsupported language, future scripts should stop or produce a validation failure before any image generation call.

## 13. Visual standard enforcement

Future scripts should validate prompt sources and generated candidate metadata against:

- residential realism
- category relevance
- calm local WNYHS tone
- compatibility with the WNYHS dark/gold visual system
- readable dashboard and mobile dashboard requirements
- hero hardware cluster requirements where applicable
- thumbnail readability expectations
- visual parity with the approved Home Automation reference page
- no panic-based imagery
- no fake customer-install implication
- no large text overlays, slogans, pricing, CTA buttons, or watermarks

Automated validation can only assist review. Operator review remains required for approval.

## 14. Cost controls

Future implementation must include these cost controls:

- dry-run mode is required.
- category-scoped generation is required.
- single-asset generation is supported.
- asset-count limit per run is required.
- all-category generation is not allowed unless explicitly authorized by the active bounded task.
- prompt preview must run before paid generation.
- output summary must include generated image count.
- write mode must be explicit.
- optional max-cost planning may be added if the provider/API supports reliable cost estimation at implementation time.

Default execution should be dry-run.

## 15. Local execution workflow

Expected future command shapes:

```text
npm run images:generate -- --category home-security --dry-run
npm run images:generate -- --category home-security --asset hero-home-security --dry-run
npm run images:generate -- --category home-security --write
```

Command intent:

- `--category` scopes a run to one category.
- `--asset` scopes a run to one asset within a category.
- `--dry-run` previews prompts and planned outputs without API calls.
- `--write` permits generation and file writes only within authorized draft/review output folders.

This planning task documents command intent only. It does not add package scripts.

## 16. Git/repository safety rules

Future implementation must:

- keep scripts under the authorized script folder.
- avoid committing generated image assets unless explicitly authorized.
- avoid modifying approved production image files by default.
- avoid modifying `.env` files.
- avoid committing secrets.
- avoid package/dependency changes unless the bounded implementation task explicitly authorizes them.
- avoid application source, CSS, token, route, layout, and public page changes unless separately authorized.
- keep generated candidates separated from approved production assets.
- report all files written by each run.

Generated binary assets should remain out of commits unless the active task explicitly says to commit specific reviewed assets.

## 17. Validation requirements

Future implementation validation should include:

- dry-run prompt preview for a category.
- dry-run prompt preview for a single asset.
- write-mode test only when explicitly authorized and only to draft/review folders.
- no-auto-overwrite test against an existing approved filename.
- claim-safe language scan against prompt sources and generated summaries.
- output path validation for category slug and asset filename.
- generated image count summary.
- `git diff --check`.
- protected-system changed-file scan.
- `npm run build` when repository guidance or the active work order requires it.

This setup-plan task requires only documentation validation and repository diff checks.

## 18. Failure handling

Future scripts should fail closed.

Stop before generation when:

- required environment variables are missing.
- category is missing or unknown.
- asset ID is missing or unknown.
- source manifest row is incomplete.
- generation plan is missing for the selected category.
- prompt validation finds forbidden or unsupported language.
- output path resolves outside the expected category image folder.
- approved production filename already exists and no authorized replace flag is present.
- asset-count limit would be exceeded.
- provider response does not include a usable image output.

Failure output should include the asset ID, category, intended filename, failure reason, and whether any file was written.

## 19. Future implementation task

Next task:

```text
T-IMG-PIPELINE001-002 - Implement OpenAI Image Generation Pipeline
```

That future task should:

- add scripts under `/scripts/image-generation/`.
- add safe npm scripts if appropriate and explicitly authorized.
- read/consume manifest and generation-plan data or a structured local config derived from those docs.
- support dry-run prompt preview.
- support single-category generation.
- support single-asset generation.
- write outputs only to draft/review folders by default.
- prevent overwriting approved production assets.
- produce a summary report.
- avoid committing generated assets unless explicitly authorized.
- use official OpenAI SDK/API guidance available at implementation time.

## 20. Codex restrictions

Codex must not use IMG-PIPELINE001 to:

- implement OpenAI API calls.
- generate image assets.
- add, remove, or replace image files.
- add scripts or package scripts without a later bounded implementation task.
- modify public category pages.
- modify CSS, tokens, components, routes, or layouts.
- modify Stripe/payment logic.
- modify HubSpot logic.
- modify scheduling, planner, quote, runtime, environment, deployment, API/backend, Resend/email, dependency, package-lock, or protected-system files.
- modify `.env` files.
- add secrets.
- change approved category strategy.
- weaken repository guardrails.

Codex may use this document only as a setup plan for a later bounded implementation task.

## 21. Success criteria

IMG-PIPELINE001 is successful when:

- the setup plan exists as a docs-only REV01 artifact.
- OpenAI Image API is identified as the planned default provider.
- required and optional environment variables are documented without secrets.
- proposed script location is documented without creating scripts.
- manifest and generation-plan input sources are defined.
- draft, review, and approved output folders are separated.
- no-auto-overwrite behavior is defined.
- prompt assembly model is defined.
- claim-safe language enforcement is defined.
- visual standard enforcement is defined.
- cost controls are defined.
- local command intent is documented without package-script changes.
- git and repository safety rules are defined.
- validation and failure handling expectations are defined.
- future implementation task `T-IMG-PIPELINE001-002` is defined.
- Codex restrictions prevent this plan from becoming implementation authority.
- no API calls, image generation, image file changes, application/runtime changes, environment changes, or protected-system changes occur in this planning task.

## Protected systems boundary

This document does not authorize changes to:

- application source code
- CSS or semantic tokens
- image files
- public category pages
- HubSpot
- Stripe/payment
- scheduling/calendar
- planner flows
- quote/estimate runtime
- APIs/backend
- Resend/email
- Cloudflare config
- package dependencies
- environment variables
- secrets

Public site version remains unchanged for this docs-only planning task.
