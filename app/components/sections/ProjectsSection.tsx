import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "../ui/button";
import { SectionHeading } from "../common/SectionHeading";
import { TechList } from "../common/TechBadge";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mb-24 scroll-mt-20">
      <SectionHeading id="projects-title">Proyectos</SectionHeading>

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title} className="surface flex flex-col overflow-hidden">
            <div className="relative aspect-[16/9] border-b bg-muted">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-5">
                <TechList items={project.technologies} label={`Tecnologías de ${project.title}`} />
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Código de ${project.title} en GitHub`}
                    >
                      <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                      Código
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Demo de ${project.title}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
