"""Advisory KAOS candidate-artifact authority-boundary hook.

Reads Codex hook JSON from stdin, inspects only candidate-artifact paths that
appear in the hook input, and emits a non-blocking advisory system message when
the referenced file appears to be missing authority-boundary labels.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any, Iterable


HOOK_ID = "KAOS-HOOK-ARTIFACT-AUTHORITY-001"
CANDIDATE_PATH_RE = re.compile(
    r"docs[\\/](?:kaos[\\/])?(?:business-processes[\\/])?"
    r"(?:candidate-artifacts|BP_CANDIDATE_INTAKE_REGISTER\.md|README\.md)|"
    r"docs[\\/]kaos[\\/]hooks[\\/]HOOK_CANDIDATE_REGISTRY\.md",
    re.IGNORECASE,
)
PATH_RE = re.compile(r"(?P<path>(?:\.?[/\\])?docs[/\\][^\s\"'`<>|]+\.md)", re.IGNORECASE)
REQUIRED_LABELS = (
    ("Candidate Only", re.compile(r"\bCandidate Only\b", re.IGNORECASE)),
    ("not repository authority", re.compile(r"not\s+repository\s+authority", re.IGNORECASE)),
    ("not implementation authority", re.compile(r"not\s+implementation\s+authority", re.IGNORECASE)),
    (
        "not active KAOS rule",
        re.compile(r"(not\s+active\s+KAOS\s+rules?|no\s+Active\s+KAOS\s+Rule)", re.IGNORECASE),
    ),
    (
        "operator review required before promotion",
        re.compile(r"operator\s+review.*(?:before|prior to).*promotion", re.IGNORECASE),
    ),
)


def main() -> int:
    event = _read_event()
    if not isinstance(event, dict):
        return 0

    repo_root = _repo_root(event)
    findings = []

    for raw_path in _candidate_paths(event):
        path = _safe_repo_path(repo_root, raw_path)
        if path is None or not path.is_file():
            continue
        missing = _missing_labels(path)
        if missing:
            findings.append((path, missing))

    if findings:
        print(json.dumps({"systemMessage": _message(repo_root, findings)}, separators=(",", ":")))

    return 0


def _read_event() -> Any:
    try:
        raw = sys.stdin.read()
    except OSError:
        return None
    if not raw.strip():
        return None
    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        return None


def _repo_root(event: dict[str, Any]) -> Path:
    cwd = event.get("cwd")
    if isinstance(cwd, str) and cwd:
        return Path(cwd).resolve()
    return Path.cwd().resolve()


def _candidate_paths(event: dict[str, Any]) -> list[str]:
    paths: list[str] = []
    for text in _string_values(event):
        if not CANDIDATE_PATH_RE.search(text):
            continue
        paths.extend(match.group("path") for match in PATH_RE.finditer(text))
    return sorted(set(paths))


def _string_values(value: Any) -> Iterable[str]:
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for child in value.values():
            yield from _string_values(child)
    elif isinstance(value, list):
        for child in value:
            yield from _string_values(child)


def _safe_repo_path(repo_root: Path, raw_path: str) -> Path | None:
    normalized = raw_path.strip().strip("\"'")
    try:
        path = (repo_root / normalized).resolve()
    except (OSError, RuntimeError):
        return None
    try:
        path.relative_to(repo_root)
    except ValueError:
        return None
    if not CANDIDATE_PATH_RE.search(path.as_posix()):
        return None
    return path


def _missing_labels(path: Path) -> list[str]:
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return []
    return [label for label, pattern in REQUIRED_LABELS if not pattern.search(text)]


def _message(repo_root: Path, findings: list[tuple[Path, list[str]]]) -> str:
    lines = [
        f"KAOS advisory ({HOOK_ID}): candidate artifact authority labels may need review.",
        "This is advisory only; no approval, activation, blocking, or rewrite was performed.",
    ]
    for path, missing in findings[:5]:
        display = _display_path(repo_root, path)
        lines.append(f"- {display}: missing or unclear labels: {', '.join(missing)}")
    if len(findings) > 5:
        lines.append(f"- {len(findings) - 5} additional candidate path(s) omitted.")
    return "\n".join(lines)


def _display_path(repo_root: Path, path: Path) -> str:
    try:
        return path.relative_to(repo_root).as_posix()
    except ValueError:
        return path.name


if __name__ == "__main__":
    raise SystemExit(main())
