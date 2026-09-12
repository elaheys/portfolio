import { services } from '@/data/content';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { ServiceIcon } from './ui/icons';

/** "What I Do" — a responsive grid of service cards. */
export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 sm:py-28">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionHeading eyebrow="Features" title="What I Do" />

        <Reveal
          stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-xl2 border border-line bg-ground-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
