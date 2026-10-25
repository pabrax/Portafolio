import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { profile, contactLinks } from "@/data/profile";
import { HeroBackdrop } from "./HeroBackdrop";

const socialIcons = { mail: Mail, linkedin: Linkedin, github: Github } as const;

export function HeroSection() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <HeroBackdrop />

      <div className="mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <p className="mb-6 animate-fade-up text-sm font-semibold uppercase tracking-widest text-muted-foreground [animation-delay:0.05s]">
          {profile.role} · {profile.company}
        </p>

        <h1 id="hero-title" className="font-display-tight text-display-xl">
          <span className="block overflow-hidden pb-[0.08em]">
            <span translate="no" className="block animate-rise [animation-delay:0.1s]">{first}</span>
          </span>
          <span className="-mt-[0.08em] block overflow-hidden pb-[0.08em]">
            <span className="block animate-rise [animation-delay:0.22s]">{rest.join(" ")}</span>
          </span>
        </h1>

        <p className="font-display-tight mt-8 max-w-3xl text-balance animate-fade-up text-display-md [animation-delay:0.4s]">
          Datos, <span className="mark-lemon">automatización</span> y backend
        </p>

        <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:0.5s]">
          {profile.summary} Fuera del trabajo construyo APIs, interfaces y mi propio entorno Linux.
        </p>

        <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:0.6s]">
          <Button asChild size="xl">
            <a href="#projects">Ver proyectos</a>
          </Button>
          <Button asChild size="xl" variant="outline">
            <a href="#contact">Contacto</a>
          </Button>
          <ul className="ml-1 flex gap-1" aria-label="Enlaces de contacto">
            {contactLinks.map(({ name, href, icon }) => {
              const Icon = socialIcons[icon];
              const external = href.startsWith("http");
              return (
                <li key={name}>
                  <a
                    href={href}
                    aria-label={name}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
