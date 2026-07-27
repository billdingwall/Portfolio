# Coding Standards

## 0. Project Conventions (Portfolio)

**Astro / React split**
- Default to `.astro` components. Reach for `.tsx` only where client-side interactivity is genuinely needed (`Header.tsx`, `HeaderNavigation.tsx`, `ExperienceItem.tsx`, `ReferralItem.tsx`).
- Layouts live in `src/layouts/`, routes in `src/pages/`, shared components in `src/components/`.

**Content over code**
- New portfolio entries, experience, referrals, and gallery items are Markdown files under `src/posts/` — not new components.
- Frontmatter must satisfy the Zod schema in `src/content.config.ts`. If content needs a new field, change the schema first.

**Design tokens**
- Component CSS in `packages/design-system/src/components/` consumes `--sys-*` semantic tokens only.
- Raw values belong in `tokens/reference.css` as `--ref-*`; semantic roles in `tokens/semantic.css` map `--sys-*` → `--ref-*`.
- Never hardcode a colour or size in a component stylesheet, and never reference a `--ref-*` token from one.
- Site-level styles use Sass in `src/scss/` (`base/`, `components/`, `config/`, `sections/`, `utils/`, entry `main.scss`).

**Build**
- Node `>=22.12.0`. `npm run build` must stay clean — the Netlify deploy runs exactly that.
- `dist/` and `build/` are generated. Never edit them.

## 1. Spec-Driven First
- **No code without an approved spec.** The pre-commit hook enforces this.
- If a requirement is ambiguous, update the spec in `specs/NNN-feature-name/spec.md` or ask the user. Do not invent requirements in code.

## 2. Modularity & Clarity
- Explain the "why" in comments, not the "what".
- Prefer clarity over cleverness.
- Do not edit build artifacts or generated bundles directly.

## 3. Refinement Loop
- Before implementing major architectural changes, discuss them in the refinement loop via `requirements/_refinement/`.

## 4. Framework Naming Convention
- Zero Two One framework commands and installed artifacts are namespaced `021-<name>` (lowercase kebab-case after the prefix; `:` for npm subcommand grouping, e.g. `021-spec:status`). Framework files never claim un-namespaced names in shared directories — project-owned names stay yours.
