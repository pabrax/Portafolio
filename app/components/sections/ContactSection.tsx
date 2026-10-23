import { Github, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "@/data/profile";
import { Button } from "../ui/button";
import { SectionHeading } from "../common/SectionHeading";

const icons = { mail: Mail, linkedin: Linkedin, github: Github } as const;

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mb-16 scroll-mt-20">
      <SectionHeading id="contact-title">Contacto</SectionHeading>

      <div className="surface grid gap-8 p-6 md:grid-cols-2 md:p-8">
        <div>
          <h3 className="mb-3 text-lg font-semibold">Hablemos</h3>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Si quieres conversar sobre datos, automatización, backend o IA aplicada, escríbeme.
          </p>
          <Button asChild>
            <a href="mailto:soypablo0420@gmail.com">
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Enviar mensaje
            </a>
          </Button>
        </div>

        <ul className="space-y-4">
          {contactLinks.map(({ name, value, href, icon }) => {
            const Icon = icons[icon];
            const external = href.startsWith("http");
            return (
              <li key={name}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block text-xs uppercase tracking-wider">{name}</span>
                    <span className="text-foreground">{value}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
