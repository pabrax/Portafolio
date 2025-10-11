import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const skillCategories = [
  {
    title: "Lenguajes",
    skills: ["Python", "Node.js", "Go", "C#", "Bash", "TypeScript"],
    badgeClass: "badge-primary"
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "Astro", "HTML", "CSS", "JavaScript"],
    badgeClass: "badge-secondary"
  },
  {
    title: "Bases de Datos",
    skills: ["MySQL", "SQL Server", "MongoDB", "PostgreSQL"],
    badgeClass: "badge-accent"
  },
  {
    title: "IA & Automatización",
    skills: ["Agentes de IA", "Automatizaciones", "Bots", "Machine Learning", "OpenAI API", "Langchain"],
    badgeClass: "badge-ai"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-foreground">
        Skills & Tecnologías
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.title} className="border-border/50 bg-card/50 p-6 backdrop-blur card-shadow">
            <h3 className="mb-4 font-semibold text-lg">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <a
                  key={skill}
                  href={`#${skill.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                  className="inline-block"
                >
                  <Badge 
                    variant="outline"
                    className={`${category.badgeClass} cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-md`}
                  >
                    {skill}
                  </Badge>
                </a>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
