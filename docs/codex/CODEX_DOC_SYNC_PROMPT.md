# CODEX DOC SYNC PROMPT

Use these instructions whenever syncing canvas-created documentation into the repository.

---

## Required Sync Instructions

1. Add canvas-created docs to the repository under the correct docs folder.
2. Preserve document titles exactly as authored unless an explicit revision instruction requires title updates.
3. Convert document names to kebab-case filenames.
4. If `/docs/DOCUMENT_CATALOG.md` is present, update it to include any new synced document entries.
5. Check for duplicate filenames before creating any new file.
6. Run `git status --short` immediately after sync to verify expected changes only.

---

## Safety Checks

- Do not create alternate or duplicate versions (no `-v2`, `-copy`, or date-suffixed duplicates unless explicitly directed).
- If a target file exists, update it instead of creating a parallel file.
- Keep sync operations documentation-only unless explicitly instructed otherwise.
