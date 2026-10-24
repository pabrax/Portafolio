import { skillCategories, type SkillCategory } from "@/data/skills";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { TechList } from "../common/TechBadge";

const tileLayout: Record<string, string> = {
  Datos: "lg:col-span-2 lg:row-span-2",
  Cloud: "lg:col-span-1",
  Backend: "lg:col-span-1",
  Frontend: "lg:col-span-2",
  Automatización: "lg:col-span-2",
  "Infra y herramientas": "lg:col-span-2",
};

function LeadTile({ category }: { category: SkillCategory }) {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-primary p-7 text-primary-foreground sm:p-9 lg:col-span-2 lg:row-span-2">
      <h3 className="text-sm font-bold uppercase tracking-widest">{category.title}</h3>
      <ul aria-label={category.title} className="font-display-tight mt-10 flex flex-wrap gap-x-5 gap-y-1 text-4xl leading-tight sm:text-5xl">
        {category.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" titleId="skills-title" tone="tint">
      <SectionHeading id="skills-title">Skills y tecnologías</SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) =>
          category.weight === "lead" ? (
            <LeadTile key={category.title} category={category} />
          ) : (
            <div
              key={category.title}
              className={`rounded-3xl p-6 ${tileLayout[category.title] ?? ""} ${
                category.title === "Cloud" ? "bg-cobalt text-background" : "border bg-card"
              }`}
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest">{category.title}</h3>
              {category.title === "Cloud" ? (
                <ul aria-label={category.title} className="font-display-tight space-y-1 text-2xl leading-tight">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              ) : (
                <TechList items={category.skills} label={category.title} />
              )}
            </div>
          ),
        )}
      </div>
    </Section>
  );
}
