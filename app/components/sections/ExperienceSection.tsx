import { experiences } from "@/data/experience";
import { SectionHeading } from "../common/SectionHeading";
import { TechList } from "../common/TechBadge";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mb-24 scroll-mt-20">
      <SectionHeading id="experience-title">Experiencia</SectionHeading>

      <ol className="relative space-y-8 border-l pl-6 sm:pl-8">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full border-2 border-background sm:-left-[2.4rem] ${
                exp.current ? "bg-primary" : "bg-muted-foreground/50"
              }`}
            />
            <article className="surface p-6">
              <header className="mb-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">{exp.position}</h3>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <p className="font-medium text-primary">{exp.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {exp.location} · {exp.mode} · {exp.duration}
                </p>
              </header>

              <p className="mb-4 leading-relaxed text-muted-foreground">{exp.summary}</p>

              <ul className="mb-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <TechList items={exp.technologies} label={`Tecnologías en ${exp.company}`} />
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
