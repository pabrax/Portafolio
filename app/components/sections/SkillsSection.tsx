import { skillCategories } from "@/data/skills";
import { SectionHeading } from "../common/SectionHeading";
import { TechList } from "../common/TechBadge";

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mb-24 scroll-mt-20">
      <SectionHeading id="skills-title">Skills y tecnologías</SectionHeading>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className="surface p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {category.title}
            </h3>
            <TechList items={category.skills} label={category.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
