# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Type-check (tsc -b) then build to dist/
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

Always run `npm run build` after changes to confirm zero TypeScript errors before committing. There are no tests.

## Stack

- **React 19** + **TypeScript 6** via **Vite 8**
- **Tailwind CSS v4** — configured via `@tailwindcss/vite` plugin; theme tokens defined with `@theme` in `src/index.css` (no `tailwind.config.js`)
- **Framer Motion 12** — stricter types than v11; `ease` values in `transition` must be typed `as const` (e.g. `ease: 'easeOut' as const`)
- **lucide-react v1.14** — brand icons (`Github`, `Linkedin`) were removed; use `src/icons.tsx` which exports `GitHubIcon` and `LinkedInIcon` as inline SVGs

## Architecture

Single-page portfolio with no routing. Entry: `src/main.tsx` → `src/App.tsx` → seven section components rendered in order.

```
src/
  icons.tsx          # GitHubIcon and LinkedInIcon SVG components (brand icons absent from lucide-react v1.14)
  index.css          # Tailwind import + @theme custom tokens + global styles
  components/
    Navbar.tsx       # Fixed nav with scroll-blur effect, mobile menu via AnimatePresence
    Hero.tsx         # Full-height landing, fadeUp() helper applies Framer Motion props via spread
    About.tsx        # Bio cards + journey + stats grid
    Skills.tsx       # Six skill category cards (Backend, Frontend, BD/ORMs, Mensageria, Ferramentas, Idiomas)
    Projects.tsx     # Two sub-sections: professional (private, Praxio) and personal (GitHub links)
    Contact.tsx      # Contact info cards + form (client-side only, no backend)
    Footer.tsx       # Static footer
```

Scroll-based section navigation uses anchor `id` attributes (`#sobre`, `#projetos`, `#skills`, `#contato`).

All scroll-triggered animations use `useInView` from Framer Motion with `{ once: true, margin: '-100px' }`.

## Owner context

Bruno Kempe — Fullstack Sênior Developer, +6 years, specialised in .NET and RESTful APIs in the logistics/freight sector (Praxio). Also works in frontend with Angular and React. Contacts: brunobkmacedo@gmail.com, github.com/brunokempe, linkedin.com/in/brunokempe.
