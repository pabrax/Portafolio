import { cn } from "../ui/utils";

const tones = {
  paper: "bg-background text-foreground",
  tint: "bg-cobalt-soft text-foreground",
  ink: "theme-ink",
  primary: "bg-primary text-primary-foreground",
} as const;

export type SectionTone = keyof typeof tones;

type SectionProps = {
  id: string;
  titleId: string;
  tone?: SectionTone;
  className?: string;
  children: React.ReactNode;
};

/** Full-bleed band with a centered container; each section picks a tone. */
export function Section({ id, titleId, tone = "paper", className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={titleId} className={cn("scroll-mt-16 py-20 sm:py-28", tones[tone], className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
