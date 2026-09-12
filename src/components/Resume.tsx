import { useRef, useState } from "react";
import { education, experience, skills, type TimelineItem } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type TabKey = "education" | "experience" | "skills";

const TABS: { key: TabKey; label: string }[] = [
  { key: "education", label: "Education" },
  { key: "experience", label: "Experience" },
  { key: "skills", label: "Skills" },
];

/**
 * Tabbed resume. Switching a tab cross-fades the panel in; the Skills
 * panel animates its progress bars from 0 whenever it becomes visible.
 */
export function Resume() {
  const [tab, setTab] = useState<TabKey>("education");
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  /* Re-run the entrance whenever the active tab changes. */
  useGSAP(
    () => {
      if (!panelRef.current) return;

      if (!reduced) {
        gsap.from(panelRef.current.children, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
        });
      }

      if (tab === "skills") {
        const bars = panelRef.current.querySelectorAll<HTMLElement>("[data-bar]");
        bars.forEach((bar) => {
          const target = bar.dataset.bar ?? "0";
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${target}%`,
              duration: reduced ? 0 : 1,
              ease: "power2.out",
              delay: reduced ? 0 : 0.15,
            }
          );
        });
      }
    },
    { scope: panelRef, dependencies: [tab, reduced] }
  );

  return (
    <section id="resume" className="py-20 sm:py-28">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionHeading eyebrow="7 Years of Experience" title="My Resume" />

        {/* Tab switcher */}
        <Reveal className="mx-auto mb-10 flex max-w-md items-center gap-1 rounded-full border border-line bg-ground-card p-1.5 shadow-card">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                tab === t.key ? "bg-accent text-white" : "text-ink-muted hover:text-ink"
              }`}
              aria-pressed={tab === t.key}
            >
              {t.label}
            </button>
          ))}
        </Reveal>

        {/* Panels */}
        <div ref={panelRef}>
          {tab === "education" && <Timeline items={education} />}
          {tab === "experience" && <Timeline items={experience} />}
          {tab === "skills" && <Skills />}
        </div>
      </div>
    </section>
  );
}

/* ── Education / Experience timeline (two-column on desktop) ──── */

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={`${item.title}-${item.period}`}
          className="rounded-xl2 border border-line bg-ground-card p-6 shadow-card"
        >
          <div className="mb-3 flex items-start justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {item.period}
            </span>
            {item.badge && (
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">
                {item.badge}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mb-3 text-sm font-medium text-ink-muted">{item.place}</p>
          <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

/* ── Skills panel with animated bars ─────────────────────────── */

function Skills() {
  return (
    <div className="mx-auto grid max-w-2xl gap-6">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-soft">{skill.name}</span>
            <span className="text-sm font-semibold text-accent">{skill.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-line">
            <div
              data-bar={skill.level}
              className="h-full rounded-full bg-accent"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
