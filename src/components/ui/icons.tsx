import type { SVGProps } from 'react';
import type { Service, SocialLink } from '@/data/content';

/**
 * Small inline-SVG icon set. No external icon library — keeps the
 * bundle lean and every icon inherits `currentColor`, so color is
 * controlled with Tailwind text-* classes on the parent.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/* ── Service icons ───────────────────────────────────────────── */

const serviceIcons: Record<Service['icon'], (p: IconProps) => JSX.Element> = {
  code: (p) => (
    <svg {...base} {...p}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  layout: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  mobile: (p) => (
    <svg {...base} {...p}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  palette: (p) => (
    <svg {...base} {...p}>
      <circle cx="13.5" cy="6.5" r="1.2" />
      <circle cx="17.5" cy="10.5" r="1.2" />
      <circle cx="8.5" cy="7.5" r="1.2" />
      <circle cx="6.5" cy="12.5" r="1.2" />
      <path d="M12 2a10 10 0 1 0 0 20 2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 1 2-4h1a4 4 0 0 0 4-4 10 10 0 0 0-9-8Z" />
    </svg>
  ),
  speed: (p) => (
    <svg {...base} {...p}>
      <path d="M12 21a9 9 0 1 0-9-9" />
      <path d="M12 12l4-3" />
      <path d="M3 12H1M12 3V1" />
    </svg>
  ),
  accessibility: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="4" r="1.6" />
      <path d="M4 8h16M12 8v6m0 0-3 6m3-6 3 6" />
    </svg>
  ),
};

export function ServiceIcon({
  name,
  ...props
}: { name: Service['icon'] } & IconProps) {
  const Icon = serviceIcons[name];
  return <Icon {...props} />;
}

/* ── Social icons ────────────────────────────────────────────── */

const socialIcons: Record<SocialLink['icon'], (p: IconProps) => JSX.Element> = {
  github: (p) => (
    <svg {...base} {...p}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19 5.8 4.9 4.9 0 0 0 18.9 2S17.7 1.6 15 3.5a13.4 13.4 0 0 0-7 0C5.3 1.6 4.1 2 4.1 2A4.9 4.9 0 0 0 4 5.8a5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 8 18.7V22" />
    </svg>
  ),
  linkedin: (p) => (
    <svg {...base} {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-10h4v1.5A4 4 0 0 1 16 8Z" />
      <rect x="2" y="9" width="4" height="11" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  email: (p) => (
    <svg {...base} {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  ),
};

export function SocialIcon({
  name,
  ...props
}: { name: SocialLink['icon'] } & IconProps) {
  const Icon = socialIcons[name];
  return <Icon {...props} />;
}

/* ── Misc UI icons ───────────────────────────────────────────── */

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const DownloadIcon = (p: IconProps) => (
  <svg 
    {...p}
    fill='none'
    stroke='currentColor'
    width="800" 
    height="800" 
    viewBox="-5 -5 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    // preserveAspectRatio="xMinYMin" 
  >
    <path d="m8 6.641 1.121-1.12a1 1 0 0 1 1.415 1.413L7.707 9.763a.997.997 0 0 1-1.414 0L3.464 6.934A1 1 0 1 1 4.88 5.52L6 6.641V1a1 1 0 1 1 2 0zM1 12h12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2"/>
  </svg>
)
