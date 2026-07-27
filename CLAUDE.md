# AI Assistant Instructions

## Context
- The project is currently in **Phase 2: Growth** (`phase: growth` in `.zero-two-one.json`). The site is built, live, and being refined — it is not a greenfield build.
- This is a personal portfolio for Bill Dingwall (billdingwall.com), built with Astro + React and deployed to Netlify.

## Project specifics

**Stack**
- Astro 6 static site generation with the React integration; TypeScript.
- Node `>=22.12.0` (see `.node-version` / `.nvmrc`).
- Sass for the site's own styles (`src/scss/`), plain CSS custom properties for the design system.
- `npm run start` (dev), `npm run build` (static build to `dist/`).

**Content**
- All content is Markdown under `src/posts/`, typed by Zod schemas in `src/content.config.ts`: `caseStudies`, `workExperience`, `referrals`, `gallery`, `profilePics`, `socialMedia`.
- Adding content means adding a Markdown file that satisfies the matching schema — not writing components.
- Note the two frontmatter shapes in `workExperience` (`company`/`role`/`duration` vs `type`/`years`); fields unique to each are `.optional()`.

**Design system**
- Lives in `packages/design-system/` (`@portfolio/design-system`), extracted in commit `bc2437b`.
- Strict token layering — respect it: `src/tokens/reference.css` (raw `--ref-*` values) → `src/tokens/semantic.css` (`--sys-*` roles referencing `--ref-*`) → `src/components/*.css` (consume `--sys-*` only).
- Never hardcode a raw colour or size in a component stylesheet, and never point a component at a `--ref-*` token directly.
- The framework's `tools.design` is `none`; the design system is not yet registered via `021 design set`. The `DESIGN.md` frontmatter tokens are therefore placeholders, not the real palette — the real values live in `packages/design-system/src/tokens/`.

**Deployment**
- Netlify, configured by `netlify.toml`. Pushes to the default branch trigger `npm run build` and publish `dist/`.

## Framework instructions
- Verify lifecycle state from `.zero-two-one.json` first; confirm with `npm run 021-status`.
- **CLI invocation:** the documented `npx 021 …` / `npx zero-two-one-init` forms do **not** resolve here — npm looks for packages literally named `021` / `zero-two-one-init` and 404s, because the framework is not a local dependency. Use either the npm script aliases (`npm run 021-status`, `npm run 021-qa`, `npm run 021-spec:verify`) or the package-qualified form `npx -p zero-two-one 021 <command>`.
- Respect the dual workflow: project-level changes go through the refinement loop in `requirements/_refinement/`; feature-level implementation goes through the Spec Kit workflow on `NNN-feature-name` branches.
- Before implementing a feature, run `021 spec context` and load `.ai/context/NNN-feature-name.md`. Do not write implementation code unless the spec status is `Approved` or `Ready for Dev`.
- After generating code, run `021 spec verify` and follow `skills/verify-spec-compliance.md` before marking work complete.
- Framework installs and re-runs follow `workflow/specific-workflows/init-and-migration.md`: user-owned files are never overwritten (create-if-missing); always dry-run before re-running init.

## Known gaps
- No automated test suite — `021 qa` prints "Running Unit Tests…" and proceeds with nothing to run.
- No `specs/` yet, so `021 qa` exits non-zero on the spec-compliance check. Expected until the first feature spec lands.
- Spec Kit (`specify-cli`) is not installed; the `/speckit-*` commands are unavailable until it is.
