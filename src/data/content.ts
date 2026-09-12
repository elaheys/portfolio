/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — single source of truth
 * ─────────────────────────────────────────────────────────────
 *  This is the ONLY file you need to edit to update the site.
 *  Everything (hero text, services, projects, resume) reads from
 *  the typed objects below. Add a project = add an object to
 *  `projects`. Add a service = add an object to `services`. Etc.
 *
 *  Placeholders are marked with `TODO:` — search for that to find
 *  everything that still needs your real details.
 * ─────────────────────────────────────────────────────────────
 */

export interface SocialLink {
  label: string;
  href: string;
  /** key used to pick the icon in <SocialIcon /> */
  icon: 'github' | 'linkedin' | 'email';
}

// export interface Service {
//   title: string;
//   description: string;
//   /** key used to pick the icon in <ServiceIcon /> */
//   icon: 'code' | 'layout' | 'mobile' | 'palette' | 'speed' | 'accessibility';
// }

export interface Project {
  title: string;
  category: string;
  description: string;
  /** external link to the live project or repo */
  href: string;
  /** image URL — put files in /public and reference as "/projects/name.jpg" */
  image: string;
  /** small tag color accents rotate automatically; nothing to set */
}

export interface TimelineItem {
  title: string;
  place: string;
  period: string;
  description: string;
  /** optional score badge shown in the design (e.g. "4.75/5"). Omit to hide. */
  badge?: string;
}

export interface Skill {
  name: string;
  /** 0–100 */
  level: number;
}

/* ── Personal / hero ─────────────────────────────────────────── */

export const profile = {
  // TODO: your real details
  name: 'Elahe',
  /** shown as the coral highlighted role in the hero */
  role: 'a Front-End Developer',
  greeting: "Hi, I'm",
  eyebrow: 'Welcome to my world',
  intro:
    'I build clean, accessible, and performant web interfaces with React and TypeScript. I care about the small details that make a product feel effortless to use.',
  /** hero portrait — replace with your photo in /public */
  portrait: '/portrait.jpg',
  /** used in the "available now" badge and contact */
  availability: 'Available for work',
  location: 'Iran',
  email: 'elahe.ys74@gmail.com', // TODO
  resumeUrl: '/resume.pdf', // TODO: drop your CV in /public, or remove the button
};

/* ── Social links ────────────────────────────────────────────── */

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/elaheys', icon: 'github' }, // TODO
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/elahe-yousefi-9851a31a3/', icon: 'linkedin' }, // TODO
];


/* ── Portfolio projects ──────────────────────────────────────── */
// Add a new project by copying one block. Order here = order on the page.

export const projects: Project[] = [
  {
    title: 'GraphQL Blog Application',
    category: 'React & GraphQL App',
    description: 'Responsive blog application with dynamic data fetching and reusable components.',
    href: 'https://graphql-weblog-ell.netlify.app/',
    image:
      'https://github.com/elaheys/GraphQl-Blog/assets/112415062/e5c62bae-62c8-4882-9dd6-0ec4db30faf9',
  },
  {
    title: 'Shopping Cart Application',
    category: 'React.js, Redux',
    description: 'E-commerce application with state management and reusable UI components.',
    href: 'https://redux-shopping-cart-ell.netlify.app/',
    image:
      'https://github.com/elaheys/Redux-Shopping-Cart/assets/112415062/5a305079-b832-4897-ba5f-03cd8c1521ea',
  },
  {
    title: 'Music Player Application',
    category: 'Music Player',
    description: 'Interactive web-based music player interface.',
    href: 'https://playerell.netlify.app/',
    image:
      'https://github.com/elaheys/React-Music-Player/assets/112415062/534bbd15-bd1f-482b-959b-310b6744cb75',
  },
];

/* ── Resume ──────────────────────────────────────────────────── */

export const education: TimelineItem[] = [
  {
    title: 'B.Sc. in Cellular and Molecular Biology (Microbiology)',
    place: 'Azad University, Gorgan, Iran',
    period: '2014 — 2018',
    description:
      '',
    badge: '4.75/5',
  },
  {
    title: 'Front-End Development',
    place: 'Course / Bootcamp',
    period: '2020 — 2022',
    description:
      'at Botostart company learn and practice front-end development with React, TypeScript, and modern web technologies.',
    badge: '4.50/5',
  },
];

export const experience: TimelineItem[] = [
  {
    title: 'Front-End Developer',
    place: 'PantoHealth International',
    period: '2024 — Present',
    description:
      'Develop and maintain frontend features for an international railway technology platform.',
    badge: '4.90/5',
  },
  {
    title: 'Junior Developer',
    place: 'Raspina Company',
    period: '2023 — 2024',
    description:
      'Developed core features using React.js.Created reusable components and responsive user interfaces.',
    badge: '4.65/5',
  },
];

export const skills: Skill[] = [
  { name: 'React & TypeScript', level: 92 },
  { name: 'HTML & CSS / Tailwind', level: 95 },
  { name: 'JavaScript (ES2023+)', level: 90 },
  { name: 'UI / Animation (GSAP)', level: 80 },
  { name: 'Testing & Tooling', level: 78 },
];

/* ── Navigation ──────────────────────────────────────────────── */
// `id` must match the section's id in App.tsx.

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Resume', id: 'resume' },
] as const;
