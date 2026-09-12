# Portfolio — Front-End Developer

A minimal, animated personal portfolio built with **React + TypeScript**, styled with **Tailwind CSS**, and animated with **GSAP** (ScrollTrigger). Clean, responsive, and structured so it's easy to keep up to date.

## Quick start

```bash
npm install       # install dependencies
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check + production build into /dist
npm run preview   # preview the production build locally
```

Requires Node 18+.

## Updating content — start here

**You almost never need to touch the components.** Everything on the page reads
from one typed file:

```
src/data/content.ts
```

Open it and edit the objects. It's fully typed, so your editor will tell you if
a field is missing.

| Want to change…          | Edit this in `content.ts`        |
| ------------------------ | -------------------------------- |
| Name, role, intro, email | `profile`                        |
| Social links             | `socials`                        |
| "What I Do" cards        | `services`                       |
| Portfolio projects       | `projects` (copy a block to add) |
| Education / Experience   | `education` / `experience`       |
| Skill bars               | `skills`                         |
| Nav menu items           | `navLinks`                       |

Search the file for `TODO:` to find every placeholder that still needs your
real details.

### Adding a project

Add an object to the `projects` array:

```ts
{
  title: 'My New App',
  category: 'React App',
  description: 'What it does in one line.',
  href: 'https://github.com/you/my-new-app',
  image: '/projects/my-new-app.jpg', // put the image in /public/projects
}
```

### Images & CV

Drop static files in `/public` and reference them with a leading slash:

- `public/portrait.jpg` → your hero photo
- `public/resume.pdf` → downloadable CV
- `public/projects/*.jpg` → project screenshots

See `public/README.txt` for details.

## Project structure

```
src/
├── data/
│   └── content.ts        ← ALL editable content lives here
├── components/
│   ├── Navbar.tsx        section navigation (scroll-spy + mobile menu)
│   ├── Hero.tsx          intro + portrait
│   ├── WhatIDo.tsx       services grid
│   ├── Portfolio.tsx     project grid
│   ├── Resume.tsx        tabbed education / experience / skills
│   ├── Footer.tsx        contact + socials
│   └── ui/
│       ├── Reveal.tsx        reusable scroll-triggered entrance
│       ├── SectionHeading.tsx
│       └── icons.tsx         inline SVG icon set (no icon library)
├── hooks/
│   └── useReducedMotion.ts   respects prefers-reduced-motion
├── lib/
│   ├── gsap.ts           GSAP + ScrollTrigger registration (one place)
│   └── scroll.ts         smooth scroll-to-section helper
├── App.tsx               page composition
├── main.tsx              entry point
└── index.css             Tailwind + base styles
```

## Animations

GSAP is set up once in `src/lib/gsap.ts`. The reusable `<Reveal>` component
handles most scroll-in effects — wrap a block (or a group of cards with the
`stagger` prop) and it fades and rises into view. The hero uses a dedicated
timeline. **Every animation respects `prefers-reduced-motion`**: visitors who
ask their OS to reduce motion see the content appear instantly, with no movement.

To adjust the feel globally, edit `EASE` and `DURATION` in `src/lib/gsap.ts`.

## Theme

Colors, fonts, shadows, and spacing tokens live in `tailwind.config.js` under
`theme.extend`. Change the `accent` color there to re-skin the whole site.

## Adding a new section

1. Build a component in `src/components/`.
2. Import and drop it into `src/App.tsx`.
3. Give the section an `id` and add a matching `{ label, id }` to `navLinks`
   in `content.ts` so it appears in the nav and scroll-spy.

---

Built with React, TypeScript, Tailwind CSS & GSAP.
