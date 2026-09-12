import { useRef, type SyntheticEvent } from 'react';
import { profile, socials } from '@/data/content';
import { scrollToSection } from '@/lib/scroll';
import { gsap, useGSAP } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowUpRight, DownloadIcon, SocialIcon } from './ui/icons';

/** Organic "blob" shape used behind the hero portrait. */
const BLOB_RADIUS = '42% 58% 60% 40% / 45% 45% 55% 55%';

/**
 * Landing hero: intro text on the left, portrait on the right.
 * A single GSAP timeline reveals the pieces in sequence on load.
 */
export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeUrl.replace(/^\//, '')}`;

  useGSAP(
    () => {
      if (reduced || !root.current) return;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
      tl.from('[data-hero="text"] > *', { y: 30, opacity: 0, stagger: 0.12 })
        .from('[data-hero="portrait"]', { scale: 0.92, opacity: 0, duration: 1 }, '-=0.6')
        .from('[data-hero="badge"]', { y: 20, opacity: 0, stagger: 0.15 }, '-=0.5');
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent-soft/40 to-transparent" />

      <div
        ref={root}
        className="mx-auto grid max-w-shell items-center gap-12 px-5 sm:px-8 lg:grid-cols-2"
      >
        {/* ── Text ── */}
        <div data-hero="text" className="order-2 lg:order-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {profile.eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.greeting}{' '}
            <span className="text-accent">{profile.name}</span>,
            <br className="hidden sm:block" /> {profile.role}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            {profile.intro}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              View my work
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <a
              href={resumeHref}
              download="Elahe-Resume.pdf"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon className="mr-2 inline h-6 w-6 hover:text-accent" />
              My resume
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-ink-faint">
              Find me
            </span>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Portrait ── */}
        <div className="order-1 flex justify-center lg:order-2">
          <div data-hero="portrait" className="relative w-full max-w-sm">
            {/* coral blob behind the photo */}
            <div
              className="absolute inset-0 -z-10 translate-y-4 scale-105 bg-accent"
              style={{ borderRadius: BLOB_RADIUS }}
            />
            <div
              className="overflow-hidden bg-ground-tint"
              style={{ borderRadius: BLOB_RADIUS }}
            >
              <img
                src={profile.portrait}
                alt={`${profile.name}, ${profile.role}`}
                className="h-full w-full object-cover"
                onError={(e: SyntheticEvent<HTMLImageElement>) => {
                  // graceful fallback if no portrait added yet
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* availability badge */}
            <div
              data-hero="badge"
              className="absolute -left-2 top-8 flex items-center gap-2 rounded-full bg-ground-card px-4 py-2 shadow-card sm:-left-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-ink-soft">
                {profile.availability}
              </span>
            </div>

            {/* location badge */}
            <div
              data-hero="badge"
              className="absolute -right-2 bottom-10 rounded-2xl bg-ground-card px-4 py-3 shadow-card sm:-right-6"
            >
              <p className="text-[10px] font-medium uppercase tracking-widest text-ink-faint">
                Based in
              </p>
              <p className="text-sm font-semibold text-ink-soft">
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
