import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Button } from "../ui/button";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { TechList } from "../common/TechBadge";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.demo && (
        <Button size="sm" asChild>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Demo de ${project.title}`}>
            <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
            Demo
          </a>
        </Button>
      )}
      {project.github && (
        <Button variant="outline" size="sm" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Código de ${project.title} en GitHub`}>
            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
            Código
          </a>
        </Button>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden rounded-3xl border bg-card transition-colors duration-300 hover:border-primary lg:grid-cols-[1.25fr_1fr]">
      <div className="relative aspect-[16/10] overflow-hidden border-b bg-muted lg:aspect-auto lg:min-h-[22rem] lg:border-b-0 lg:border-r">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Proyecto destacado</p>
        <h3 className="font-display-tight text-display-md">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="my-6">
          <TechList items={project.technologies} label={`Tecnologías de ${project.title}`} />
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary">
      <div className="relative aspect-[16/9] overflow-hidden border-b bg-muted">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display-tight text-2xl">{project.title}</h3>
        <p className="mb-4 mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mb-5">
          <TechList items={project.technologies} label={`Tecnologías de ${project.title}`} />
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => project !== featured);

  return (
    <Section id="projects" titleId="projects-title" tone="ink">
      <SectionHeading id="projects-title">Proyectos</SectionHeading>

      <div className="space-y-6">
        {featured && <FeaturedCard project={featured} />}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
