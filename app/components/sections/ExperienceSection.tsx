import { experiences } from "@/data/experience";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { TechList } from "../common/TechBadge";

export function ExperienceSection() {
  return (
    <Section id="experience" titleId="experience-title">
      <SectionHeading id="experience-title">Experiencia</SectionHeading>

      <ol className="space-y-16 sm:space-y-20">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`}>
            <article className="grid gap-6 md:grid-cols-[15rem_1fr] md:gap-12">
              {/* Period column stays pinned while its (long) content scrolls past. */}
              <header className="md:sticky md:top-24 md:self-start">
                {exp.current && (
                  <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary-foreground" />
                    Rol actual
                  </p>
                )}
                <p className="font-display-tight text-2xl leading-tight">{exp.period}</p>
                <p className="mt-2 font-semibold text-cobalt">{exp.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {exp.location} · {exp.mode} · {exp.duration}
                </p>
              </header>

              <div
                className={
                  exp.current
                    ? "rounded-3xl border-2 border-primary bg-card p-6 shadow-sm sm:p-8"
                    : "border-t-2 border-border pt-6"
                }
              >
                <h3 className={`font-display-tight ${exp.current ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{exp.position}</h3>
                <p className={`mt-4 leading-relaxed ${exp.current ? "text-lg" : "text-muted-foreground"}`}>{exp.summary}</p>

                <ul className="mb-6 mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <TechList items={exp.technologies} label={`Tecnologías en ${exp.company}`} />
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
