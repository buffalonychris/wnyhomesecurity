[CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = 'Low')]
param(
    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$RepositoryPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$resolvedRepository = (Resolve-Path -LiteralPath $RepositoryPath).Path
$gitMarker = Join-Path $resolvedRepository '.git'

if (-not (Test-Path -LiteralPath $gitMarker)) {
    throw "RepositoryPath is not a Git working tree: $resolvedRepository"
}

$stagingDirectories = @(
    '.local-intake',
    '.local-output',
    '.local-review'
)

$ignoreEntries = @(
    '.local-intake/',
    '.local-output/',
    '.local-review/'
)

$createdDirectories = [System.Collections.Generic.List[string]]::new()
$existingDirectories = [System.Collections.Generic.List[string]]::new()

foreach ($directoryName in $stagingDirectories) {
    $directoryPath = Join-Path $resolvedRepository $directoryName

    if (Test-Path -LiteralPath $directoryPath) {
        if (-not (Test-Path -LiteralPath $directoryPath -PathType Container)) {
            throw "A non-directory item blocks the staging path: $directoryPath"
        }

        $existingDirectories.Add($directoryPath)
        continue
    }

    if ($PSCmdlet.ShouldProcess($directoryPath, 'Create local staging directory')) {
        $null = New-Item -ItemType Directory -Path $directoryPath
        $createdDirectories.Add($directoryPath)
    }
}

$gitIgnorePath = Join-Path $resolvedRepository '.gitignore'
$existingGitIgnore = if (Test-Path -LiteralPath $gitIgnorePath) {
    [System.IO.File]::ReadAllText($gitIgnorePath)
}
else {
    ''
}

$existingLines = @(
    $existingGitIgnore -split '\r?\n' |
        ForEach-Object { $_.Trim() } |
        Where-Object { $_ -ne '' }
)

$missingEntries = @(
    $ignoreEntries | Where-Object { $existingLines -notcontains $_ }
)

$gitIgnoreUpdated = $false

if ($missingEntries.Count -gt 0 -and $PSCmdlet.ShouldProcess($gitIgnorePath, 'Append missing local staging exclusions')) {
    $newline = if ($existingGitIgnore.Contains("`r`n")) { "`r`n" } else { "`n" }
    $appendText = ''

    if ($existingGitIgnore.Length -gt 0 -and -not $existingGitIgnore.EndsWith("`n")) {
        $appendText += $newline
    }

    if ($existingLines -notcontains '# Local agent staging (never commit)') {
        if ($existingGitIgnore.Length -gt 0) {
            $appendText += $newline
        }
        $appendText += "# Local agent staging (never commit)$newline"
    }

    $appendText += ($missingEntries -join $newline)
    $appendText += $newline

    $utf8NoBom = [System.Text.UTF8Encoding]::new($false)
    [System.IO.File]::AppendAllText($gitIgnorePath, $appendText, $utf8NoBom)
    $gitIgnoreUpdated = $true
}

[pscustomobject]@{
    RepositoryPath       = $resolvedRepository
    CreatedDirectories   = @($createdDirectories)
    ExistingDirectories  = @($existingDirectories)
    MissingIgnoreEntries = @($missingEntries)
    GitIgnoreUpdated     = $gitIgnoreUpdated
    PreviewOnly          = [bool]$WhatIfPreference
}
