/** Smoothly scroll to a section by id, accounting for the fixed navbar. */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NAV_OFFSET = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

  window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
}
