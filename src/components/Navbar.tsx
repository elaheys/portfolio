import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/data/content";
import { scrollToSection } from "@/lib/scroll";
import { CloseIcon, MenuIcon } from "./ui/icons";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Fixed top navigation. Highlights the section currently in view,
 * collapses to a slide-down menu on mobile, and gains a subtle
 * background once the page is scrolled.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>(navLinks[0].id);
  const navRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  /* Background + shadow appear after a small scroll. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track which section is in view to highlight the matching link. */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Slide the navbar down once on first load. */
  useGSAP(
    () => {
      if (reduced || !navRef.current) return;
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    },
    { scope: navRef, dependencies: [reduced] }
  );

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ground/85 shadow-[0_10px_30px_-20px_rgba(33,36,61,0.4)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-shell items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2 text-lg font-bold text-ink"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-bold text-white">
            {profile.name.charAt(0)}
          </span>
          {profile.name}
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  active === link.id ? "text-accent" : "text-ink-muted"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-ground/95 backdrop-blur transition-[max-height] duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors hover:bg-ground-tint ${
                  active === link.id ? "text-accent" : "text-ink-soft"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
