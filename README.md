# Portfolio

A personal portfolio built using **Astro** and **React**. It utilizes Astro's static site generation and content collections for managing case studies, work experience, gallery items, and referrals via Markdown.

## 🚀 Getting Started

To get started with the repository locally:

1. **Clone the repository** and navigate to the project directory:
   ```bash
   git clone git+ssh://git@github.com/billdingwall/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   *(Note: This project uses Node >=22.12.0)*

3. **Run the development server**:
   ```bash
   npm run start
   ```
   This will start the local Astro dev server. Open the localhost link provided in your terminal to see the site.

4. **Build for production** (optional):
   ```bash
   npm run build
   ```
   This will generate a static build of the site in the `dist` directory.

## 📄 Adding Pages & Posts

The portfolio uses Astro's file-based routing and Content Collections.

### Pages
To add a new page (e.g., `/about`), create an `.astro` or `.md` file inside the `src/pages/` directory.

### Posts (Content Collections)
Posts and other content are managed using Markdown files (`.md`) inside the `src/posts/` directory. Frontmatter schemas are defined in `src/content.config.ts` using Zod for type safety.

- **Case Studies**: Add `case-study-[name].md` directly inside `src/posts/`.
- **Work Experience**: Add Markdown files inside `src/posts/experience/`.
- **Referrals**: Add Markdown files inside `src/posts/referral/`.
- **Gallery**: Add Markdown files inside `src/posts/gallery/`.

Ensure you match the frontmatter variables required by the schemas in `src/content.config.ts` when creating new content!

## 🌐 Publishing to Netlify

The site is configured to easily deploy to Netlify using the `netlify.toml` file in the root directory.

- **Build Command:** `npm run build` (which runs `astro build`)
- **Publish Directory:** `dist`

### How it works:
1. Connect your GitHub repository to your Netlify account.
2. Netlify will automatically detect the `netlify.toml` configuration.
3. Every time you push to your default branch (usually `main` or `master`), Netlify will automatically trigger a build, run `npm run build`, and deploy the contents of the `dist` directory.
