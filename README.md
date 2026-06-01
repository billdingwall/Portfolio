# William Dingwall's Portfolio

Welcome to my personal portfolio website. This project has been migrated from a legacy Metalsmith static site generator configuration to a modern, performant web application powered by **Astro** and **React**.

---

## 🛠️ Tech Stack & Dependencies

The project uses the following major technologies and dependencies:

*   **Framework**: [Astro (v6.x)](https://astro.build/) - A modern static site generator optimized for speed.
*   **UI Library**: [React (v19.x)](https://react.dev/) - Integrated into Astro for components (via `@astrojs/react`).
*   **Styling**: [Sass (v1.x)](https://sass-lang.com/) - Used for modular styling and SCSS compilations.
*   **Language**: [TypeScript](https://www.typescriptlang.org/) - Provides static type checking for components and scripts.

---

## 📋 Prerequisites

Before setting up the project locally, ensure you have the following installed on your machine:

1.  **Node.js**: Recommended version is `stable` (managed via `.nvmrc`).
2.  **npm** (Node Package Manager): Bundled with Node.js.

---

## 🚀 Installation & Getting Started

Follow these steps to set up and run the portfolio locally:

### 1. Clone the Repository
```bash
git clone git@github.com:williamdingwall/portfolio-metalsmith.git
cd portfolio-metalsmith
```

### 2. Set Up Node.js Version
If you use [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm), automatically use the correct Node version defined in `.nvmrc`:
```bash
nvm use
```
*If you don't have the configured version installed, run `nvm install` first.*

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
To start the local development server with hot-reloading:
```bash
npm start
```
*Note: The `npm start` script has a `prestart` hook that automatically runs `npm install` for you.*

Once the server is running, open [http://localhost:4321/](http://localhost:4321/) in your browser to view the site.

---

## 🏗️ Production Build

To compile the site into static HTML/CSS/JS for production deployment:

### 1. Build the Site
```bash
npm run build
```
This generates the optimized static files inside the `dist/` directory.

### 2. Preview the Production Build Locally
To test the production build locally before deploying:
```bash
npx astro preview
```

---

## 🔄 How to Update

### 1. Updating the Codebase
To fetch and merge the latest changes from the remote repository:
```bash
git pull origin main
```

### 2. Updating Dependencies
To check for and update the project's dependencies:

*   **Safe Updates (within semver constraints)**:
    ```bash
    npm update
    ```
*   **Major Updates**:
    To upgrade Astro or other packages to their latest major/minor releases, use `npm install` targeting the latest versions:
    ```bash
    npm install astro@latest @astrojs/react@latest react@latest react-dom@latest typescript@latest
    ```
    Alternatively, you can use `npm-check-updates` to interactively view and apply updates:
    ```bash
    npx npm-check-updates -u
    npm install
    ```

---

## ⚠️ Legacy Files Notice

The repository contains some files from the original Metalsmith setup:
*   `local.js` and `build.js` at the root.
*   Legacy layout files (`.html` files) under `src/layouts/`.

These files are retained for reference but are **not** used by the active Astro configuration. Development and build scripts run exclusively through Astro.
