import { useRef, type ElementType, type ReactNode } from 'react';
import { gsap, useGSAP, EASE } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: ReactNode;
  /** which HTML tag to render (default: div) */
  as?: ElementType;
  className?: string;
  /** stagger children instead of animating the wrapper as one block */
  stagger?: boolean;
  /** seconds to delay the start */
  delay?: number;
  /** distance (px) the element travels up into place */
  y?: number;
}

/**
 * Scroll-triggered entrance. Wrap any block (or a group of cards with
 * `stagger`) and it fades + rises into view once, when it scrolls in.
 * Honors prefers-reduced-motion by rendering everything visible at rest.
 *
 *   <Reveal><h2>Title</h2></Reveal>
 *   <Reveal stagger className="grid">{cards}</Reveal>
 */
export function Reveal({
  children,
  as,
  className,
  stagger = false,
  delay = 0,
  y = 40,
}: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const scope = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !scope.current) return;

      const targets = stagger
        ? (Array.from(scope.current.children) as HTMLElement[])
        : [scope.current];

      gsap.fromTo(
  targets,
  { opacity: 0, y },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: EASE,
    stagger: stagger ? 0.12 : 0,
    scrollTrigger: {
      trigger: scope.current,
      start: 'top bottom',
      once: true,
    },
  },
);
    },
    { scope, dependencies: [reduced] },
  );

  return (
    <Tag ref={scope} className={className}>
      {children}
    </Tag>
  );
}
