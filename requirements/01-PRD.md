# Product Requirements Document (PRD)

*Instructions for AI:* This document must remain highly structured, modular, and easy to parse. Use clear headings, bullet points, and avoid large blocks of unstructured text. This file acts as the primary source of truth for "What" we are building and "Why".

> **Status: baseline, written retroactively.** The portfolio shipped before the Zero Two One framework was installed. This describes the product as it exists today rather than a forward plan. It has not yet been through a refinement round — treat unverified claims (particularly §7 metrics) as assumptions to confirm.

## 1. Problem Statement
**What is the user-facing problem we are solving?**
* Hiring managers, recruiters, and prospective clients evaluating a senior product designer need evidence of depth — process, decisions, and outcomes — not a grid of thumbnails. Generic portfolio platforms optimise for visual browsing and flatten the reasoning that actually differentiates candidates.
* A résumé alone cannot carry case-study depth; a slide deck cannot be indexed, linked, or skimmed in 90 seconds.
* Urgency: the portfolio is the primary professional front door and must stay current as roles and work change. Content updates need to be cheap enough to happen, or the site rots.

## 2. Target Audience
**Who are we building this for?**
* **Primary Persona:** Hiring manager / design lead — time-poor, scanning for scope, seniority, and evidence of impact. Wants to reach a relevant case study in one or two clicks and judge depth quickly.
* **Secondary Persona:** Recruiter or prospective client — less design-literate, screening for role fit, industry experience, and credibility signals (referrals, tenure, breadth).
* **Tertiary Persona:** The maintainer (Bill) — needs to add a case study or update experience by writing one Markdown file, without touching component code.
* *Constraints:* Content is read on desktop and mobile, often on the first visit with no prior context. Must load fast on unreliable connections and remain fully readable without JavaScript where possible.

## 3. Value Proposition
**What is the core benefit?**
* **Core Improvement:** Long-form case studies presented with enough structure to be skimmed *or* read in depth, backed by corroborating signals (work history, referrals, skill breakdown) on the same domain.
* **Differentiator:** Owned domain and full control of presentation; content-as-Markdown keeps the cost of staying current near zero; a real design system underneath demonstrates the systems-thinking the case studies claim.

## 4. Modules & Core Functionality
**What are the main components of the product?**
* **Module 1: Home / Landing** (`src/pages/index.astro`, `src/layouts/HomeLayout.astro`)
  * Featured case studies surfaced via the `featured` flag.
  * Skills summary grid driven by the `experienceOverview` frontmatter shape.
  * Referrals and social links.
* **Module 2: Case Studies** (`src/posts/case-study-*.md`, `src/pages/posts/[slug].astro`, `CaseStudyLayout.astro`)
  * Long-form Markdown per project, tagged by work type (`type_productStrategy`, `type_productDesign`, `type_designSystem`, `type_research`, `type_leadership`, `type_dev`).
* **Module 3: About** (`src/pages/about.astro`, `AboutLayout.astro`, `src/about.md`)
  * Biography, work experience timeline, downloadable résumé.
* **Module 4: Gallery** (`src/posts/gallery/`, `GalleryItem.astro`, `PhotoSwipeShell.astro`)
  * Personal art, design, and photography in a PhotoSwipe lightbox.
* **Module 5: Design System** (`packages/design-system/`)
  * `@portfolio/design-system` — reference tokens → semantic tokens → component CSS.

## 5. User Scenarios
* **Scenario 1:** A hiring manager wants to assess design-systems experience so that they can decide whether to schedule a call.
  * *Flow:* Land on home → scan featured work → open the TeamSnap design system case study → read process and outcomes → follow LinkedIn/résumé link.
* **Scenario 2:** A recruiter wants to confirm years of experience and industry fit so that they can screen against a brief.
  * *Flow:* Land on home → skills summary grid → About → work experience timeline → referrals.
* **Scenario 3:** The maintainer wants to publish a new case study so that recent work is represented.
  * *Flow:* Add `src/posts/case-study-<name>.md` with schema-valid frontmatter → `npm run start` to check locally → commit → Netlify builds and deploys.

## 6. Data Model Requirements (High-Level)
All entities are Markdown collections defined in `src/content.config.ts` and validated by Zod.
* **caseStudies:** `title`, `intro`, `thumb`, `collection` (literal `portfolioWork`), `collection_label`, `id`, `featured`, `date`, six `type_*` booleans, optional `project_link`.
* **workExperience:** two frontmatter shapes in one collection — `company`/`location`/`role`/`duration` for roles, `type`/`years` for the skills summary. Both carry six numeric skill weightings (`productdesign`, `designsystems`, `researchandanalysis`, `leadershipandmentorship`, `productandstrategy`, `frontenddevelopment`) plus `collection` and `date`.
* **referrals:** `title`, `intro`, `collection` (literal `referral`), `featured`, `date`.
* **gallery:** `thumb`, `collection`, `date`, optional `title`, `intro`, `collection_label`, `featured`.
* **profilePics:** `thumb`, optional `title`, `featured`.
* **socialMedia:** `title`, `link`, optional `collection`.

## 7. Success Metrics
*Unverified — no analytics are currently wired up. These are the metrics that would matter, not measured results.*
* Inbound contact quality: proportion of enquiries referencing a specific case study.
* Engagement depth: case-study read-through rate, versus bounce from the landing page.
* Maintenance cost: time to publish a new case study (target: content-only change, under 30 minutes).
* Performance: build stays under ~5s; pages remain usable without JavaScript.
* *Open question:* is any analytics collection wanted at all, given the privacy trade-off? Resolve before treating these as live targets.

## 8. Scope Boundaries
**Explicitly not being built:**
* A CMS or admin UI — Markdown in the repository is the authoring interface.
* Comments, accounts, or any authenticated surface.
* A blog or regular publishing cadence — case studies are the content type.
* Server-side rendering or dynamic endpoints; the site is statically generated and served by Netlify.
* Internationalisation.

## 9. UX & Design Alignment
* **Figma Links:** *(not recorded — add if source files should be referenced here)*
* **Design System Components:** `@portfolio/design-system` — `article`, `divider`, `experience-card`, `experience-item`, `grid`, `icon`, `list`, `portfolio-item`, `progress`, `section`, `slider`. Tokens layer `--ref-*` → `--sys-*` → component CSS.
* **UI Flows:** See §5. No separate flowchart exists.

---
## Changelog
* 2026-07-27 - 0.1 - Baseline PRD written retroactively during the Zero Two One framework install (phase: growth). Not yet refined.
