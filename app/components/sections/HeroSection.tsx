import { Github, Linkedin, Mail, Code2, Star } from "lucide-react";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section id="home" className="mb-24 flex min-h-screen flex-col items-center justify-center text-center pt-16">
      <div className="mb-6 inline-flex items-center gap-2 text-muted-foreground">
        <Code2 className="h-5 w-5" />
        <span>Desarrollador Full Stack | Automatizaciones & Herramientas de IA</span>
      </div>
      
      <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
        Hola, soy <span className="gradient-text">Pablo</span>
      </h1>
      
      <p className="mb-8 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
        <span className="gradient-text-secondary font-semibold">+2 años de experiencia</span> como Desarrollador{" "}
        <span className="gradient-text font-semibold">Full Stack especializado en Python y Automatización</span>. 
        Enfocado en crear <span className="gradient-text-accent font-semibold">soluciones web personalizadas</span> y{" "}
        <span className="gradient-text-ai font-semibold">herramientas que faciliten la vida de las personas</span>.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild className="btn-primary-hover">
          <a href="#contact">Contacto</a>
        </Button>
        <Button variant="outline" asChild className="btn-secondary-hover">
          <a href="#projects">Ver Proyectos</a>
        </Button>
      </div>

      <div className="mt-8 flex gap-4 justify-center">
        <a 
          href="https://github.com/pabrax" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
        >
          <Github className="h-6 w-6" />
        </a>
        <a 
          href="https://linkedin.com/in/pabrax" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a 
          href="https://fiverr.com/pabrax" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
        >
          <Star className="h-6 w-6" />
        </a>
        <a 
          href="mailto:soypablo0420@gmail.com"
          className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
