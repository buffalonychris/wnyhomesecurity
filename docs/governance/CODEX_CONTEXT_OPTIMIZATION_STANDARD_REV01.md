# CODEX_CONTEXT_OPTIMIZATION_STANDARD_REV01

Status: Active
Customer-facing: No
Document Type: Governance Standard

## Purpose

This standard defines how WNYHS ChatGPT and Codex workflows should use available repository access, GitHub connector capabilities, command formatting, post-merge sync guidance, and Codex Context Usage Reports to reduce repeated prompt text while preserving repository authority.

The goal is a recursive improvement loop: every Codex run should leave behind enough context-usage feedback to make the next work order shorter, clearer, and more repo-native.

## Authority Boundary

Project KB and chat instructions guide ChatGPT behavior. They do not authorize implementation by themselves.

Repository documents control implementation. A chat-derived decision becomes implementation authority only after it is promoted into repository docs, the Master Task Register, or an active bounded work order that is permitted by higher-authority governance.

Codex remains a bounded implementation technician unless the task explicitly authorizes ChatGPT or Codex to perform a repository documentation/governance update.

## GitHub Connector Workflow

When user-authorized and governance-compliant, ChatGPT may use available GitHub connector tools to:

- Inspect repository files.
- Read governance documents.
- Create or update repository documentation.
- Create branches.
- Open pull requests.
- Add pull-request comments.
- Inspect pull-request metadata.

Connector usage does not change the repository authority chain. Repo docs remain the implementation authority.

ChatGPT must not use connector tools to bypass protected-system controls, alter runtime behavior outside a bounded task, merge pull requests, or replace operator review.

The operator still reviews and merges pull requests manually. Cloudflare deployments remain manually reviewed by the operator.

## Command Formatting

When ChatGPT gives commands that the operator is expected to copy and run, commands must be formatted as copy-friendly fenced code blocks.

Rules:

- Provide each logical command group in its own fenced code block.
- Prefer `powershell` fencing for Windows commands.
- Avoid long inline command sequences when copy/paste execution is expected.
- Keep commands concise and executable.
- State what the command group does before the fenced block when helpful.

Example:

```powershell
cd C:\dev\wnyhomesecurity
git status
```

## Prompt Delivery Standard

ChatGPT should deliver Codex work orders in a format that survives copy/paste into Codex without manual cleanup.

Requirements:

- Entire Codex work orders should be delivered inside a single copyable code block whenever practical.
- Avoid nested markdown code fences inside larger prompts because they break copy/paste fidelity.
- Example shell commands embedded inside a larger work order should be represented as plain text or clearly escaped examples.
- Prefer prompt formats that support one-click copy behavior.
- Do not require the operator to manually remove wrapper text, nested fences, or formatting artifacts before pasting into Codex.

When a work order must include command examples, use plain indented command lines or short labels rather than nested fenced blocks.

## Prompt Reuse Rule

Before generating a new Codex work order, ChatGPT should prefer existing repository sources over repeated pasted explanation.

Preferred source order:

1. Existing repository governance documents.
2. Existing standards.
3. Existing runtime contracts.
4. Existing work-order templates.
5. Existing authority maps.

The goal is to reduce token consumption, increase consistency, increase repo-native execution, and reduce prompt drift.

## Future Prompt Minimization Direction

Future work orders should move toward source-map routing instead of long repeated read lists.

Instead of:

```text
Read these 12 documents...
```

Prefer:

```text
Load governance source map and task-referenced standards.
```

The governance source map should become the primary routing mechanism for loading context. Until that source map is formalized, work orders may continue to list required docs explicitly, but repeated doc lists should be candidates for repo-native routing improvements.

## Post-Merge Sync Guidance

After a pull request is merged, ChatGPT should tell the operator whether `mainsync.bat` can be used as the sync shortcut.

Default option when the helper is appropriate:

```powershell
.\mainsync.bat
```

Manual fallback:

```powershell
cd C:\dev\wnyhomesecurity
git checkout main
git pull origin main
git status
```

If there are pending local changes, branch uncertainty, or helper behavior is unclear, use the manual commands and inspect `git status` before continuing.

## Codex Context Usage Report

Every Codex final summary must include a `Context Usage Report` with these fields:

- Approximate prompt/context load:
- Docs actually used:
- Docs loaded but not useful:
- Repeated instructions that should move into repo docs:
- Prompt sections that can be shortened next time:
- Missing repo docs that would reduce future prompt size:
- Suggested reusable validation/script improvements:

The report should be concise, factual, and useful for improving future work orders. It should not be a long retrospective.

## Required Report Purpose

The Context Usage Report exists to:

- Reduce pasted context over time.
- Increase reliance on repo-native governance and standards.
- Identify repeated instructions that should become durable docs.
- Identify stale or missing repository docs.
- Improve accuracy while minimizing token use.
- Suggest reusable validation scripts when repeated manual checks appear.

## Protected-System Boundary

This standard does not authorize app code changes, runtime behavior changes, HubSpot changes, Stripe/payment changes, scheduling changes, email/Resend changes, Cloudflare/runtime/env changes, quote-system behavior changes, dependency changes, route changes, UI changes, or public-site implementation.

Future work must still follow the current operational context, Master Task Register, active bounded work order, and protected-system guardrails.
