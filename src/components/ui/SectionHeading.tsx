import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}

/** Consistent section header: small coral eyebrow + large title. */
export function SectionHeading({ eyebrow, title, align = "center" }: SectionHeadingProps) {
  return (
    <Reveal
      className={align === "center" ? "mx-auto mb-12 max-w-2xl text-center" : "mb-12 max-w-2xl"}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
