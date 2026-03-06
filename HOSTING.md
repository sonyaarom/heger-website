# Hosting this site on GitHub Pages (MVP)

## Option A: GitHub Pages (static, free)

The project is set up for **static export** and can be deployed to GitHub Pages.

### 1. Push the repo to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Enable GitHub Pages

- Open your repo on GitHub → **Settings** → **Pages**.
- Under **Build and deployment**, set **Source** to **GitHub Actions**.

### 3. Deploy

Every push to `main` will build and deploy. The site will be at:

- **Project site:** `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- The workflow uses `BASE_PATH=/${{ github.event.repository.name }}` so links work correctly.

### 4. If you use a user/org site (`username.github.io`)

If the repo name is `username.github.io`, the site is served at the root. Edit `.github/workflows/deploy-gh-pages.yml` and change the build step to:

```yaml
- name: Build static export
  run: npm run build
```

(Remove the `env: BASE_PATH: ...` so `BASE_PATH` is empty.)

### Local build (same as CI)

```bash
# Project site (repo name as base path)
BASE_PATH=/PashaWebsite npm run build

# User site or local (no base path)
npm run build
```

Then open `out/index.html` or serve the `out` folder with any static server.

---

## Option B: Vercel (even simpler for Next.js)

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import your repo.
3. Deploy. No `basePath` or static export needed; Vercel runs Next.js as-is.

Use this if you prefer one-click deploy and don’t need GitHub Pages.
