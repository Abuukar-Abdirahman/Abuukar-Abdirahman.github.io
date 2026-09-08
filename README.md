# Abukar Abdirahman Ibrahim — Portfolio

Live at **[abukar.me](https://abukar.me)**.

React + Vite + Tailwind v4, deployed to GitHub Pages automatically on every push to `main`.

## Edit your content

Everything the site says (name, bio, skills, projects, experience, links) lives in
**`src/data.js`**. In normal use that is the only file you need to touch.

Search that file for `TODO` to find the details that are still missing.

- Replace `public/portrait.png` with your own photo. A PNG with the background
  removed looks best — the hero is designed around a cut-out portrait.
- Replace `public/Abukar_Abdirahman_CV.pdf` when you update your CV.
- Re-theme the whole site by changing the tokens at the top of `src/index.css`
  (`--color-accent`, `--color-ink`, the fonts, and so on). Both the light and the
  dark palette are defined there.

## Run locally

```bash
npm install
npm run dev
```

## Custom domain

`public/CNAME` holds `abukar.me`. Vite copies everything in `public/` to the build
output, so the domain is re-applied on every deploy — do not delete that file.

DNS for `abukar.me` must point at GitHub Pages:

| Type  | Name | Value                     |
| ----- | ---- | ------------------------- |
| A     | `@`  | `185.199.108.153`         |
| A     | `@`  | `185.199.109.153`         |
| A     | `@`  | `185.199.110.153`         |
| A     | `@`  | `185.199.111.153`         |
| CNAME | `www`| `abuukar-abdirahman.github.io` |

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.

One-time setup, if it is not already done:
**Settings → Pages → Build and deployment → Source: GitHub Actions**.
