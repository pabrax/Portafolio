import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { profile, contactLinks } from "@/data/profile";

const socialIcons = { mail: Mail, linkedin: Linkedin, github: Github } as const;

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="flex min-h-[85vh] flex-col justify-center pb-16 pt-28"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {profile.role} · {profile.company}
      </p>

      <h1 id="hero-title" className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Hola, soy <span className="gradient-text">Pablo</span>
      </h1>

      <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {profile.summary} Fuera del trabajo construyo APIs, interfaces y mi propio entorno Linux.
      </p>

      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg">
          <a href="#projects">Ver proyectos</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#contact">Contacto</a>
        </Button>
      </div>

      <ul className="mt-8 flex gap-2" aria-label="Enlaces de contacto">
        {contactLinks.map(({ name, href, icon }) => {
          const Icon = socialIcons[icon];
          const external = href.startsWith("http");
          return (
            <li key={name}>
              <a
                href={href}
                aria-label={name}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
