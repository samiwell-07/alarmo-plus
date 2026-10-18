<#
.SYNOPSIS
  Releases Alarmo Card Plus for HACS: bumps CARD_VERSION, builds, commits, tags, pushes and creates the GitHub release
  with dist/alarmo-card-plus.js attached.

.EXAMPLE
  pwsh .github/skills/hacs-release/scripts/release.ps1 -NotesFile notes.md -DryRun
  pwsh .github/skills/hacs-release/scripts/release.ps1 -NotesFile notes.md -Add src/new-file.ts
#>
[CmdletBinding()]
param(
  # Tag to create, e.g. v1.6.9-plus.5. Default: latest v*-plus.N tag with N + 1.
  [string]$Version,
  # Markdown file with the release notes.
  [string]$NotesFile,
  # Commit title. Default: "Release <version>".
  [string]$Message,
  # Untracked files to commit (tracked changes are always committed).
  [string[]]$Add = @(),
  # Commit every untracked file.
  [switch]$IncludeUntracked,
  # The release commit and tag already exist on HEAD: only push and create the GitHub release.
  [switch]$SkipCommit,
  # Show what would happen without changing anything.
  [switch]$DryRun
)

$ErrorActionPreference = 'Stop'
$Repo = 'samiwell-07/alarmo-plus'
$AssetPath = 'dist/alarmo-card-plus.js'
$AssetName = 'alarmo-card-plus.js'
$ConstFile = 'src/const.ts'
$Trailer = 'Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>'
$Utf8 = New-Object System.Text.UTF8Encoding $false

function Invoke-Git {
  & git @args
  if ($LASTEXITCODE) { throw "git $($args -join ' ') failed." }
}

Set-Location (git rev-parse --show-toplevel)

$branch = git rev-parse --abbrev-ref HEAD
if ($branch -ne 'main') { throw "Not on main (current branch: $branch)." }
Invoke-Git fetch --tags --quiet origin

if (-not $Version) {
  if ($SkipCommit) { throw '-SkipCommit needs -Version.' }
  $latest = git tag --list 'v*-plus.*' |
    ForEach-Object {
      if ($_ -match '^v(\d+)\.(\d+)\.(\d+)-plus\.(\d+)$') {
        [pscustomobject]@{
          Key  = [version]"$($Matches[1]).$($Matches[2]).$($Matches[3]).$($Matches[4])"
          Base = "v$($Matches[1]).$($Matches[2]).$($Matches[3])"
          N    = [int]$Matches[4]
        }
      }
    } |
    Sort-Object Key | Select-Object -Last 1
  if (-not $latest) { throw 'No v*-plus.N tag found; pass -Version.' }
  $Version = "$($latest.Base)-plus.$($latest.N + 1)"
}
if ($Version -notmatch '^v\d+\.\d+\.\d+-plus\.\d+$') { throw "Invalid version '$Version' (expected vX.Y.Z-plus.N)." }
if (-not $Message) { $Message = "Release $Version" }
$notes = if ($NotesFile) { [IO.File]::ReadAllText((Resolve-Path $NotesFile)) } else { "Release $Version" }

$tagExists = [bool](git tag --list $Version)
if ($SkipCommit) {
  if (-not $tagExists) { throw "Tag $Version does not exist." }
  if ((git rev-list -n 1 $Version) -ne (git rev-parse HEAD)) { throw "Tag $Version does not point to HEAD." }
} elseif ($tagExists) {
  throw "Tag $Version already exists."
}

# GitHub token from the git credential manager (never printed).
$credential = "protocol=https`nhost=github.com`n`n" | git credential fill 2>$null
$token = ($credential | Where-Object { $_ -like 'password=*' }) -replace '^password=', ''
if (-not $token) { throw 'No GitHub credentials found in the git credential manager.' }
$headers = @{ Authorization = "Bearer $token"; Accept = 'application/vnd.github+json'; 'X-GitHub-Api-Version' = '2022-11-28' }

function Get-ReleaseForTag {
  # Drafts only appear in the release list. API errors (authentication, network) are not treated as "no release".
  $page = 1
  while ($true) {
    $list = @(Invoke-RestMethod -Uri "https://api.github.com/repos/$Repo/releases?per_page=100&page=$page" -Headers $headers |
        ForEach-Object { $_ })
    $match = $list | Where-Object { $_.tag_name -eq $Version } | Select-Object -First 1
    if ($match -or $list.Count -lt 100) { return $match }
    $page++
  }
}

function Get-ReleaseAsset($release) {
  @($release.assets) | Where-Object { $_.name -eq $AssetName } | Select-Object -First 1
}

function Export-TaggedAsset {
  # The uploaded file is the exact blob committed under the tag, never the working-tree file.
  $blob = git rev-parse --verify --quiet "${Version}:$AssetPath"
  if (-not $blob) { throw "$AssetPath is not committed in tag $Version." }
  $file = Join-Path ([IO.Path]::GetTempPath()) "alarmo-release-$Version-$AssetName"
  if ($IsWindows) { & $env:ComSpec /c "git cat-file blob $blob > `"$file`"" }
  else { & sh -c "git cat-file blob $blob > '$file'" }
  if ($LASTEXITCODE) { throw "Could not extract $AssetPath from tag $Version." }
  if ((git hash-object --no-filters -- $file) -ne $blob) { throw "The extracted $AssetName does not match tag $Version." }
  if (-not (Select-String -Path $file -SimpleMatch $Version -Quiet)) { throw "The tagged $AssetPath does not contain $Version." }
  return $file
}

$existing = Get-ReleaseForTag
$existingAsset = if ($existing) { Get-ReleaseAsset $existing } else { $null }
if ($existing) {
  if (-not $existing.draft -and $existingAsset -and $existingAsset.state -eq 'uploaded') {
    throw "A complete GitHub release for $Version already exists: $($existing.html_url)"
  }
  if (-not $SkipCommit) {
    throw "An incomplete GitHub release for $Version exists ($($existing.html_url)). Resume it with -SkipCommit -Version $Version."
  }
}

# On the resume path the artifact comes from the existing tag: check it before anything is published.
$assetFile = if ($SkipCommit) { Export-TaggedAsset } else { $null }

$untracked = @(git ls-files --others --exclude-standard)
# Accept "a,b" (pwsh -File passes a single string) and folders.
$Add = @($Add | ForEach-Object { $_ -split ',' } | ForEach-Object { $_.Trim().Replace('\', '/').TrimEnd('/') } | Where-Object { $_ })
$isAdded = { param($path) [bool]($Add | Where-Object { $path -eq $_ -or $path.StartsWith("$_/") }) }
$leftOut = if ($IncludeUntracked) { @() } else { @($untracked | Where-Object { -not (& $isAdded $_) }) }

if ($DryRun) {
  Write-Host "Version:      $Version"
  Write-Host "Commit:       $(if ($SkipCommit) { '(skipped, using existing tag)' } else { $Message })"
  if (-not $SkipCommit) {
    Write-Host "Changes:"
    git --no-pager status --short | ForEach-Object { Write-Host "  $_" }
    if ($leftOut) { Write-Host "Untracked, NOT committed:`n  $($leftOut -join "`n  ")" }
  }
  Write-Host "Credentials:  found"
  if ($existing) {
    Write-Host "Release:      resume existing $(if ($existing.draft) { 'draft' } else { 'published' }) release, asset $(if ($existingAsset) { $existingAsset.state } else { 'missing' })"
  } else {
    Write-Host 'Release:      new draft, published after the asset is uploaded and verified'
  }
  if ($assetFile) {
    Write-Host "Asset:        $AssetName from tag $Version ($((Get-Item $assetFile).Length) bytes)"
    Remove-Item $assetFile
  }
  Write-Host "Release notes:`n$notes"
  Write-Host '[dry run] nothing was changed.'
  return
}

if (-not $SkipCommit) {
  $const = [IO.File]::ReadAllText((Resolve-Path $ConstFile))
  if ($const -notmatch "CARD_VERSION = '[^']*'") { throw "CARD_VERSION not found in $ConstFile." }
  [IO.File]::WriteAllText((Resolve-Path $ConstFile), ($const -replace "CARD_VERSION = '[^']*'", "CARD_VERSION = '$Version'"), $Utf8)

  npm run build:plus
  if ($LASTEXITCODE) { throw 'Build failed; nothing was committed.' }
  if (-not (Select-String -Path $AssetPath -SimpleMatch $Version -Quiet)) { throw "$AssetPath does not contain $Version." }

  Invoke-Git add -u
  if ($IncludeUntracked) { Invoke-Git add -A }
  elseif ($Add.Count) { Invoke-Git add -- @Add }
  if ($leftOut) { Write-Host "Untracked, not committed:`n  $($leftOut -join "`n  ")" }

  Invoke-Git commit --quiet -m $Message -m $Trailer
  Invoke-Git tag $Version
  $assetFile = Export-TaggedAsset
}

Invoke-Git push --quiet origin main
Invoke-Git push --quiet origin $Version

try {
  # Draft first: the release only becomes visible to HACS once its asset is uploaded and verified.
  $release = $existing
  if (-not $release) {
    $body = @{ tag_name = $Version; name = $Version; body = $notes; draft = $true } | ConvertTo-Json
    $release = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$Repo/releases" -Headers $headers `
      -Body ([Text.Encoding]::UTF8.GetBytes($body)) -ContentType 'application/json; charset=utf-8'
  }

  $asset = Get-ReleaseAsset $release
  if ($asset -and $asset.state -ne 'uploaded') {
    throw "Release $Version has an unfinished '$AssetName' upload (state: $($asset.state)). Delete that asset on GitHub, then run again with -SkipCommit -Version $Version."
  }
  if (-not $asset) {
    $uploadUrl = ($release.upload_url -replace '\{.*\}', '') + "?name=$AssetName"
    $asset = Invoke-RestMethod -Method Post -Uri $uploadUrl -Headers $headers -InFile $assetFile -ContentType 'text/javascript'
  }

  $size = (Get-Item $assetFile).Length
  $digest = 'sha256:' + (Get-FileHash $assetFile -Algorithm SHA256).Hash.ToLowerInvariant()
  if ($asset.state -ne 'uploaded') { throw "Asset upload failed (state: $($asset.state))." }
  if ($asset.size -ne $size) { throw "The release asset ($($asset.size) bytes) differs from the tagged file ($size bytes)." }
  if ($asset.digest -and $asset.digest -ne $digest) { throw "The release asset digest $($asset.digest) differs from the tagged file ($digest)." }

  if ($release.draft) {
    $release = Invoke-RestMethod -Method Patch -Uri "https://api.github.com/repos/$Repo/releases/$($release.id)" -Headers $headers `
      -Body (@{ draft = $false } | ConvertTo-Json) -ContentType 'application/json'
  }
} catch {
  Write-Host "Release not finished: $($_.Exception.Message)"
  Write-Host "The commit and tag are pushed. Fix the cause, then resume with: -SkipCommit -Version $Version"
  throw
} finally {
  if ($assetFile -and (Test-Path $assetFile)) { Remove-Item $assetFile }
}

Write-Host "Released $Version with $AssetName ($digest)"
Write-Host $release.html_url
