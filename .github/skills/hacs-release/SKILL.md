---
name: hacs-release
description: 'Release Alarmo Card Plus so HACS in Home Assistant sees the new version: bump CARD_VERSION, build dist/alarmo-card-plus.js, commit, push, create the vX.Y.Z-plus.N tag and the GitHub release with the JS asset. Use when the user asks to commit and push for HACS, publish, release, tag a new version, or make an update show up in HACS.'
argument-hint: 'Optional: version (e.g. v1.6.9-plus.5) and short release notes'
---

# HACS release for Alarmo Card Plus

HACS only offers **GitHub releases** of `samiwell-07/alarmo-plus`. Each release must have the tag `v<upstream>-plus.<N>` and
the asset `alarmo-card-plus.js` (the file named in [hacs.json](../../../hacs.json)). A pushed commit or a bare tag is not
enough.

The [release script](./scripts/release.ps1) does every step: version bump in `src/const.ts`, `npm run build:plus`, commit
(with the Copilot co-author trailer), tag, push of `main` and the tag, GitHub release, asset upload. It uses the GitHub
login stored in the git credential manager and never prints the token.

## Procedure

1. **Check the working tree.** Run `git status --short` and `git --no-pager diff --stat`.
   - Tracked changes are always committed. Untracked files are committed only when listed with `-Add <path>...` (e.g.
     a new source file) or with `-IncludeUntracked` (all of them). If unrelated files are present (notes, reviews,
     scratch files), leave them out; ask the user when unsure.
   - If nothing changed since the last tag, ask before releasing.
2. **Pick the version.** By default the script bumps the latest `v*-plus.N` tag to `plus.N+1`. Only pass `-Version`
   when the user asks for a specific one (e.g. a new upstream base like `v1.7.0-plus.1`).
3. **Write release notes** in the style of earlier releases: a `### Changes` list in plain words, plus an
   `**After updating:**` line if users must change something. Save them to a file in the session folder (not the repo).
   Look at the commits since the last tag to write them:
   `git --no-pager log --oneline $(git describe --tags --abbrev=0)..HEAD` plus the uncommitted diff.
4. **Dry run first**, then the real run, from the repo root:
   ```powershell
   pwsh .github/skills/hacs-release/scripts/release.ps1 -NotesFile <notes.md> -DryRun
   pwsh .github/skills/hacs-release/scripts/release.ps1 -NotesFile <notes.md> [-Message "<commit title>"] [-Add <new files>]
   ```
   `-Message` defaults to `Release <version>`.
5. **Report** the release URL the script prints, and tell the user to run *HACS → Alarmo Card Plus → ⋮ → Update
   information*, update, then hard-refresh the browser.

## If something fails

- **Build fails:** nothing has been committed; fix the build and run again.
- **Push fails:** the commit and tag exist locally. Fix the cause (e.g. `git pull --rebase`), then run the script again
  with `-SkipCommit -Version <tag>`: it pushes `main` and the tag and creates the release.
- **No token from the credential manager:** ask the user to sign in to GitHub with git (e.g. push once from VS Code), or
  to create the release by hand on GitHub with `dist/alarmo-card-plus.js` attached.
- **Release already exists for the tag:** the script stops; do not delete releases without asking the user.
