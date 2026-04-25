# DSA Architecture (Optimized)

This repository contains a single-page website built with Vite + React. I developed and optimized this website because I enjoy improving website performance and layout; the content and structure were adjusted to suit an architecture/design studio.

Project info (developer note)
- Purpose: Portfolio / corporate website for an architecture & design studio.
- Author: Site developed and optimized by the repository owner — "I developed this website because I like optimizing all websites; I optimized this site to be better."

Quick start

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

Deployment to GitHub Pages (Actions)

This repo includes a GitHub Actions workflow that builds the site and publishes the `dist` folder to the `gh-pages` branch. To enable automatic deploys:

1. Create a GitHub repository and push this project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2. The workflow runs on pushes to `main` and publishes the build to the `gh-pages` branch. Then enable GitHub Pages in the repository Settings → Pages and select the `gh-pages` branch.

Notes
- If you host under a repo sub-path (username.github.io/repo), set `base` in `vite.config.js` to `'/repo/'` before building.
- The build output is the `dist` directory.

Next steps I can help with:
- Add `base` handling in `vite.config.js` for repo sub-paths.
- Replace text social links with SVG icons.
- Wire the contact form to Formspree or your API endpoint.


