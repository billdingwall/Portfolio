# Product Lifecycle Checklist

This document tracks the operational state of the project through the 3-phase Zero Two One lifecycle.

**Current phase: 2 — Growth.** The portfolio shipped before the framework was installed, so Phases 0 and 1 are recorded retroactively: the product exists and is live, but the requirements docs that would normally have produced it are still being backfilled. Unticked boxes below are genuine gaps, not pending work on an unbuilt product.

## Phase 0: Planning (Zero — Planning & Refinement)
- [x] Initialize repository
- [ ] Fill out `requirements/01-PRD.md` — *baseline written; needs a refinement round*
- [ ] Fill out `requirements/02-EDD.md` — *not started*
- [ ] Fill out `requirements/03-TDD.md` — *not started; architecture is currently implicit in the codebase*
- [ ] Fill out `requirements/04-BACKLOG.md` and `requirements/05-ROADMAP.md` — *not started*
- [ ] Define `DESIGN.md` tokens — *real tokens live in `packages/design-system/src/tokens/`; `DESIGN.md` still holds template placeholders*
- [ ] (Optional) Build a static prototype in `prototype/` via `021-prototype` — *not applicable; the real site exists*
- [ ] Refine via review loops in `requirements/_refinement/` — *not started*
- [ ] Pass the Planning sign-off milestone — *deferred; this is retro-documentation*

## Phase 1: MVP Build (One)
- [ ] Generate Spec Kit artifacts in `specs/` — *Spec Kit not yet installed*
- [x] Implement features against specs — *implemented, but pre-framework and without specs*
- [ ] QA and accessibility validation — *no automated test suite; the `021 qa` a11y check is mocked*
- [x] MVP Release — *live at billdingwall.com via Netlify*

## Phase 2: Growth
- [ ] Gather user feedback
- [ ] Feed data back into the refinement loop
- [ ] Ship enhancements via Spec Kit

## Immediate next steps
1. Install Spec Kit (`uv tool install specify-cli --from git+https://github.com/github/spec-kit.git`, then `specify init --here --ai claude`) so `specs/` and the `/speckit-*` pipeline become available.
2. Register the existing design system: `021 design set portfolio-ds`, then map the `--sys-*` roles into `DESIGN.md`.
3. Backfill `requirements/02-EDD.md` and `03-TDD.md` from the shipped architecture.
4. Decide whether a test suite is worth adding, or whether `021 qa`'s expectations should be tuned for a static content site.
