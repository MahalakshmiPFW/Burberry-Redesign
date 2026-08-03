# Burberry — Trench Coat Navigation Redesign

A self-directed product case study, built to practice the end-to-end PM
workflow — research, PRD, wireframes, hi-fi prototype — while I look for
entry-level / new-grad Product Manager roles.

**The problem:** Burberry's trench coat is reachable through two
inconsistent nav paths — one under Women → Coats & Jackets → Trench Coats
with no style breakdown, and a separate standalone "Trench" item that
reveals 6 distinct silhouettes (Mayfair, Kensington, Waterloo, Chelsea,
Fitzrovia, Camden) by name only, with no visual way to compare them.
Shoppers on the first path may never discover the styles exist; shoppers
on the second can't tell what's different without clicking into each one.

## Artifacts, in the order they were made

1. **[Comparative Analysis](comparative-analysis.html)** — research phase:
   how competing luxury e-commerce sites handle "one product, many
   silhouettes" navigation.
2. **[PRD](prd.html)** — problem statement, personas, and the proposed
   redesign.
3. **[Wireframes](wireframes.html)** — low-fidelity structure for the three
   key screens (homepage, comparison, product page), mobile through
   desktop.
4. **[Hi-Fi Prototype](react-prototype/)** — the visual design implemented
   as a working React + TypeScript app: a heritage-led homepage, a single
   unified comparison of all six trench silhouettes, and a product page per
   style. See [react-prototype/README.md](react-prototype/README.md) for
   how to run it.

## Repo layout

```
prd.html                   PRD
comparative-analysis.html  Comparative analysis
wireframes.html            Low-fidelity wireframes
react-prototype/           Hi-fi prototype (React + TypeScript, Vite)
index.html                 Landing page linking the static artifacts
```
