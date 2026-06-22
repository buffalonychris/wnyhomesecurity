# WNYHS Image Generation Pipeline

This folder contains the repo-side scaffold for future category image candidate generation using the OpenAI Image API.

Current scope:

- dry-run prompt preview by default
- Home Security config only
- single-category selection
- single-asset selection
- explicit `--write` gate before API use
- candidate output limited to `public/images/category-pages/<category>/drafts/` or `review/`
- no approved production asset replacement
- no `.env` file handling
- no committed secrets

## Commands

```bash
npm run images:generate -- --category home-security --dry-run
npm run images:generate -- --category home-security --asset hero-home-security.jpg --dry-run
npm run images:generate -- --category home-security --write
```

`npm run images:generate:dry-run` is a convenience alias for the Home Security category dry run.

## Environment

Required only for `--write`:

- `OPENAI_API_KEY`

Optional:

- `OPENAI_IMAGE_MODEL`
- `OPENAI_IMAGE_SIZE`
- `OPENAI_IMAGE_OUTPUT_FORMAT`
- `OPENAI_IMAGE_QUALITY`
- `WNYHS_IMAGE_GENERATION_DRY_RUN`

Dry-run mode does not require `OPENAI_API_KEY` and does not call the API.

## Source Model

The structured config in `image-generation-config.mjs` is derived from:

- `docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md`
- `docs/design-system/IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01.md`
- `docs/design-system/IMG-PIPELINE001_OPENAI_IMAGE_GENERATION_PIPELINE_SETUP_PLAN_REV01.md`

The script intentionally avoids Markdown table parsing. Future category support should add explicit structured config from an approved category generation plan.

## Safety Rules

Default behavior is dry-run. Write mode requires `--write` and `OPENAI_API_KEY`.

Generated candidates, when a future task authorizes write mode, are written only under draft/review folders. The scaffold never writes directly into the approved production category folder and will suffix candidate filenames when a candidate path already exists.
