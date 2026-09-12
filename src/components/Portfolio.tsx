import { projects } from '@/data/content';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight } from './ui/icons';

/** Portfolio grid. Each card links out to the live project or repo. */
export function Portfolio() {
  return (
    <section id="portfolio" className="bg-ground-tint py-20 sm:py-28">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visit my portfolio and keep your feedback"
          title="My Portfolio"
        />

        <Reveal
          stagger
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl2 bg-ground-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              {/* image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-ground-card/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent backdrop-blur">
                  {project.category}
                </span>
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="flex items-start justify-between gap-3 text-lg font-semibold text-ink">
                  {project.title}
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-faint transition-colors group-hover:text-accent" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {project.description || ""}
                </p>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
