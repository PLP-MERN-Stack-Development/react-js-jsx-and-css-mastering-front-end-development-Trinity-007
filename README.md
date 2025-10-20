# Week 3 React App — Vite + React + Tailwind

This repository contains a Week 3 React assignment built with Vite, React, Tailwind CSS and React Router. It demonstrates component architecture, hooks (useState/useEffect/useContext), localStorage persistence, and simple API integration (JSONPlaceholder posts).

Contents
- `src/` — application source (components, pages, hooks, context)
- `public/` — static site assets and the Vite project root for this workspace (contains `package.json` used to run the dev server)

IMPORTANT: This project currently uses the `package.json` found in the `public/` folder. If you prefer running from the repo root, see "Project structure (optional cleanup)" below.

Prerequisites
- Node.js v18+ (I used Node v22 in dev)
- npm (comes with Node)

1) Install dependencies

Open PowerShell in the `public` folder (where `package.json` currently lives) and run:

```powershell
cd 'c:\Users\tosin.aladesae\Desktop\week3-react-app-ready\public'
npm install
```

Note: the dev environment requires Tailwind+PostCSS which are already added in `public/postcss.config.cjs` and `public/tailwind.config.cjs`. If you ever recreate the project root, run:

```powershell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2) Run the dev server

From the same `public` folder:

```powershell
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173/`).

3) What to test quickly
- Theme toggle: click "Toggle Theme" in the navbar (or the small sun icon on mobile); theme persists across reloads.
- Task Manager: go to `/tasks` (Navbar → Tasks), add tasks, mark complete, delete, and filter.
- Posts: go to `/posts`, verify posts load, search filters titles/body, and pagination Prev/Next works.

Project structure notes
- `src/components` — Button, Card, Navbar, Footer, Spinner
- `src/pages` — Home, TaskManager, Posts
- `src/context` — ThemeContext (light/dark persisted)
- `src/hooks` — useLocalStorage

Project structure (optional cleanup)
If you want a more standard project layout (so `package.json` is at repo root and `public/` only contains static files), I can:

1. Move `public/package.json` to `./package.json` (repo root)
2. Run `npm install` at the repo root
3. Remove duplicated `public/src` files and ensure `public/index.html` references `/src/main.jsx`

This makes the project cleaner for deployment and CI. Tell me if you want me to do this move.

Tests & linting
- No unit tests are included yet. For autograding or CI you may add a simple test using Jest + React Testing Library.

Troubleshooting
- PostCSS/Tailwind errors: make sure Tailwind and PostCSS are installed in the same folder where `package.json` is located. If you see "Cannot find module 'tailwindcss'", run the install commands shown above in the correct folder.
- Import errors (React not found): ensure `node_modules` were installed where `package.json` lives.

Author: Aladesae Tosin (Trinity)