# Contributing to gameengine.js

Thanks for helping build the vibe-coded future.

## Getting started
1. **Clone & install**
   ```bash
   git clone https://github.com/Th3Ya0vi/gameenginejs
   cd gameenginejs
   pnpm install
   ```
2. **Run dev server**
   ```bash
   pnpm dev
   ```
   This boots the placeholder editor at <http://localhost:4321>.
3. **Lint & test**
   ```bash
   pnpm lint
   pnpm test   # (coming soon)
   ```

## Branch & PR conventions
- Squash-merge preferred.
- Branch naming: `feat/<short-desc>`, `fix/<issue-number>`, `docs/<topic>`.
- Reference issues in commit/PR descriptions (`Closes #12`).
- Include before/after screenshots or screen recordings for UI changes.

## Code style
- TypeScript strict mode everywhere.
- Prefer functional React components + hooks.
- Keep packages isolated (editor ↔ runtime ↔ ai communicate via published APIs).
- Use the shared ESLint + Prettier config (`pnpm lint --fix`).

## Docs & prompts
- Update relevant docs (`docs/*.md`, prompt library) when changing UX.
- For AI prompt changes, document examples and expected outputs.

## Communication
- Issues are the source of truth.
- Discussions tab → roadmap proposals, template ideas, asset submissions.
- Be excellent to each other. Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Release checklist (future)
- [ ] Update CHANGELOG
- [ ] Tag release `vX.Y.Z`
- [ ] Publish templates/assets if applicable

Questions? Open a discussion or ping the maintainers via issues.
