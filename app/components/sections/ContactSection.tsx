import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Mail, Linkedin, Github, Twitter, Globe, Star } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "soypablo0420@gmail.com",
    href: "mailto:soypablo0420@gmail.com",
    icon: Mail
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/pabrax",
    href: "https://linkedin.com/in/pabrax",
    icon: Linkedin
  },
  {
    name: "Fiverr",
    value: "fiverr.com/pabrax",
    href: "https://fiverr.com/pabrax",
    icon: Star
  },
  {
    name: "X (Twitter)",
    value: "@pxbrax",
    href: "https://twitter.com/pxbrax",
    icon: Twitter
  }
];
// Sección de plataformas eliminada por ser redundante

export function ContactSection() {
  return (
    <section id="contact" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-foreground">
        Contacto & Redes
      </h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/50 bg-card/50 p-6 backdrop-blur card-shadow">
          <h3 className="mb-6 text-lg font-bold">
            <span className="gradient-text-secondary">Información de Contacto</span>
          </h3>
          
          <div className="space-y-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground contact-link-hover"
                >
                  <Icon className="h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">{link.name}</p>
                    <p>{link.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </Card>

        <Card className="border-border/50 bg-card/50 p-6 backdrop-blur card-shadow">
          <h3 className="mb-6 text-lg font-bold">
            <span className="gradient-text-ai">¡Trabajemos Juntos!</span>
          </h3>
          
          <div className="mb-6">
            <p className="mb-4 text-muted-foreground">
              ¿Buscas un <span className="gradient-text font-semibold">desarrollador Full Stack con enfoque en IA y automatización</span> para tu próximo proyecto? 
              Tengo experiencia creando <span className="gradient-text-accent font-semibold">soluciones web completas</span> e integrando{" "}
              <span className="gradient-text-ai font-semibold">componentes inteligentes</span> en entornos reales.
            </p>
            <p className="mb-6 text-muted-foreground">
              Desde <span className="gradient-text-secondary font-semibold">APIs RESTful escalables</span> hasta{" "}
              <span className="gradient-text font-semibold">interfaces modernas con React o Angular</span>, pasando por{" "}
              <span className="gradient-text-ai font-semibold">sistemas RAG, bots y automatizaciones con IA</span>. 
              Disponible para <span className="gradient-text-accent font-semibold">proyectos freelance y colaboraciones</span>.
            </p>
            <Button className="w-full btn-primary-hover border-2 border-primary/20 hover:border-primary/40" asChild>
              <a href="mailto:soypablo0420@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Enviar Mensaje
              </a>
            </Button>
          </div>

        </Card>
      </div>

      <div className="mt-20 border-t border-border/50 pt-12 text-center text-muted-foreground">
        <p>© Pabrax 2025. Desarrollado con Next.js y Tailwind CSS.</p>
      </div>
    </section>
  );
}
