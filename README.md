# Isolated Component Library — Storybook + Next.js

This is a drop-in structure for **Phase 1 (Base MVP)** and **Phase 2 (Variants & Theming)**.
Copy the folders below into your existing Next.js repo (or use this as the repo root),
then install and run.

# LIVE DEMO :  https://6a5652a798a79bc7fedbcd0e-rrslpldxfa.chromatic.com/

```
.storybook/
  main.js        → registers @storybook/nextjs framework + addons (a11y, themes, controls)
  preview.js      → imports global Tailwind styles, wires the light/dark toolbar toggle
src/components/
  Button/         → Button.jsx + Button.stories.jsx
  Input/          → Input.jsx + Input.stories.jsx
  ProductCard/    → ProductCard.jsx + ProductCard.stories.jsx
styles/globals.css
tailwind.config.js  (darkMode: 'class')
postcss.config.js
next.config.js
package.json
```

## 1. Install

If merging into an existing repo, copy `.storybook/`, `src/components/`, `styles/`,
`tailwind.config.js`, and `postcss.config.js` in, then install the added dev
dependencies from `package.json`:

```bash
npm install
```

(If this is a fresh setup rather than a merge, `npx storybook@latest init` would
normally scaffold `.storybook/` for you — it's included here already, pre-configured
for Next.js + Tailwind + theming, so you can skip straight to `npm install`.)

## 2. Run Storybook — isolated from the Next.js app

```bash
npm run storybook
```

Opens `http://localhost:6006`. This is a **separate dev server** from `npm run dev`
(port 3000) — components render inside Storybook's own iframe, with zero dependency
on your app's `_app.js`, routing, or providers. That decoupling is the whole point:
a component can be built, tested, and visually approved before anything imports it
into a page.

## 3. What you'll see per component

Each story exposes a **Controls** panel (bottom/side tab) driven by `argTypes`,
letting you toggle props live without touching code:

- **Button** — `variant` (primary / secondary / danger), `size`, `disabled`, `label`
- **Input** — `type`, `required`, `error` text, `disabled`
- **ProductCard** — `title`, `price`, `badge`, `outOfStock`

Predefined variants (`Primary`, `Secondary`, `Disabled`, etc.) show up as separate
entries in the left sidebar under each component.

## 4. Light / Dark theming

A paintbrush icon appears in the Storybook toolbar (top bar), added by
`@storybook/addon-themes` in `preview.js`. Switching it toggles a `dark` class on
`<html>` inside the preview iframe — the same mechanism Tailwind's
`darkMode: 'class'` strategy expects in your real app, so what you see in Storybook
matches production behavior exactly.

## Why the FAQ answers matter here

- **Global CSS**: Tailwind only applies because `styles/globals.css` is explicitly
  imported in `.storybook/preview.js` — Storybook's iframe doesn't inherit anything
  from a Next.js `_app.js`.
- **`next/image`**: `ProductCard` uses `next/image`. This only resolves because
  `.storybook/main.js` sets `framework: '@storybook/nextjs'`, which patches Next-only
  APIs (`next/image`, `next/router`, `next/font`) for the isolated environment.
- **One `.stories.jsx` per component**: each component folder is self-contained —
  component + story + (optionally) tests, so it can be reused or extracted into a
  published package independently of the app.

## Next steps toward Phase 3 (not included here)

- Publish to Chromatic or run `build-storybook` in CI for visual regression diffing.
- Add `@storybook/test` interaction tests per story.
- Extract `src/components` into a versioned internal package once stable.
