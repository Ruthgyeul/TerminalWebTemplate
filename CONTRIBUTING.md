# Contributing

Thanks for contributing! This document defines the branch, commit, PR and merge
rules for the project. They exist to keep history readable and `main` always
releasable.

## Getting started

```bash
nvm use            # Node 24 (.nvmrc)
npm install
cp .env.example .env.local
npm run dev
```

Before pushing, run the full local gate (the same checks CI runs):

```bash
npm run lint && npm run typecheck && npm test && npm run build
```

## Branch rules

- **Never commit directly to `main`.** `main` is protected and only changes via
  a merged pull request.
- Branch off the latest `main` and name branches `<type>/<short-description>`:

  | Prefix      | Use for                                   |
  | ----------- | ----------------------------------------- |
  | `feat/`     | New features                              |
  | `fix/`      | Bug fixes                                 |
  | `docs/`     | Documentation only                        |
  | `chore/`    | Tooling, deps, config, no product change  |
  | `refactor/` | Code change with no behavior change       |
  | `test/`     | Tests only                                |

  Examples: `feat/contact-page`, `fix/sitemap-lastmod`.

- Keep branches short-lived; rebase on `main` if they fall behind:
  `git fetch origin && git rebase origin/main`.

## Commit rules

Commits follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(optional scope): <subject>

<optional body — the "why", wrapped at ~72 cols>
```

- **Types**: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `perf`, `ci`,
  `build`, `style`.
- Subject: imperative mood, lowercase, no trailing period
  (e.g. `feat: add contact page`, not `Added a contact page.`).
- A breaking change adds `!` after the type/scope (`feat!: …`) and a
  `BREAKING CHANGE:` footer.
- Keep each commit focused and green — don't mix a refactor with a feature.

## Pull request rules

- Open PRs against `main`, filling in the PR template.
- Title uses the same Conventional Commits format as commits — it becomes the
  squash-merge commit subject.
- A PR must pass CI (lint, typecheck, test, build) and get at least one approving
  review before merge.
- Link related issues (`Closes #NN`). Keep PRs small and reviewable.

## Merge rules

- **Squash and merge** is the default — one tidy commit per PR keeps `main`
  linear and each change atomic/revertable.
- The squash commit message must be a valid Conventional Commit (the PR title).
- Delete the branch after merge.
- Don't merge your own PR without a passing CI run.

## Placeholder discipline

This is a template. Never commit real domains, names, emails, tokens or other
secrets — use neutral placeholders (`example.com`, `Example Author`). Real values
belong in `.env.local`, which is gitignored.
