import { profile, socials, navLinks } from '@/data/content';
import { scrollToSection } from '@/lib/scroll';
import { SocialIcon } from './ui/icons';

/** Simple closing footer with contact CTA, nav, and socials. */
export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Let&apos;s work together
          </p>
          <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">
            Have a project in mind? Let&apos;s make it happen.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {profile.email}
          </a>

          {/* nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* socials */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>

          <p className="mt-4 text-xs text-white/40">
            © {new Date().getFullYear()} {profile.name}. Built with React,
            TypeScript &amp; GSAP.
          </p>
        </div>
      </div>
    </footer>
  );
}
