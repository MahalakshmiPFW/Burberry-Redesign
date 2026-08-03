# Hi-Fi Prototype — React + TypeScript

The hi-fi prototype for the [Burberry Trench Coat Navigation
Redesign](../README.md), a self-directed PM case study (research →
[comparative analysis](../comparative-analysis.html) →
[PRD](../prd.html) → [wireframes](../wireframes.html) → this prototype).

A heritage homepage, a comparison of all six trench silhouettes, and a
product page per style. Client-side routed with `react-router-dom`;
responsive for phone, tablet, and desktop.

## Run it

```bash
npm install
npm run dev
```

## Routes

- `/` — homepage
- `/trench-coats` — six-silhouette comparison
- `/trench-coats/:slug` — product page (`mayfair`, `kensington`, `waterloo`, `chelsea`, `fitzrovia`, `camden`)

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check (`tsc -b`) and build for production
- `npm run lint` — run Oxlint
- `npm run preview` — preview the production build locally
