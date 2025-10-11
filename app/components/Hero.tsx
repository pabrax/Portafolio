"use client";

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground mb-6">
            Desarrollador Full Stack
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6">
          Construyendo experiencias
          <span className="block text-muted-foreground">digitales únicas</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Desarrollador apasionado por crear soluciones web modernas y funcionales.
          Especializado en React, TypeScript y diseño centrado en el usuario.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <Button onClick={scrollToProjects} size="lg">
            Ver proyectos
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:tu@email.com">
              Contáctame
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:tu@email.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
}
