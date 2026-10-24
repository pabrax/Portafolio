import { Github, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "@/data/profile";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";

const icons = { mail: Mail, linkedin: Linkedin, github: Github } as const;

export function ContactSection() {
  return (
    <Section id="contact" titleId="contact-title" tone="primary" className="pb-24 sm:pb-32">
      <SectionHeading id="contact-title" className="!mb-6 !text-display-xl">
        Hablemos
      </SectionHeading>

      <p className="mb-10 max-w-xl text-xl leading-snug sm:text-2xl">
        Si quieres conversar sobre datos, automatización, backend o IA aplicada, escríbeme.
      </p>

      <a
        href="mailto:soypablo0420@gmail.com"
        className="inline-flex min-h-12 items-center gap-3 rounded-full bg-primary-foreground px-7 py-3 text-base font-semibold text-primary transition-transform hover:-translate-y-0.5"
      >
        <Mail className="h-5 w-5" aria-hidden="true" />
        Enviar mensaje
      </a>

      <ul className="mt-14 grid gap-6 border-t border-primary-foreground pt-8 sm:grid-cols-3">
        {contactLinks.map(({ name, value, href, icon }) => {
          const Icon = icons[icon];
          const external = href.startsWith("http");
          return (
            <li key={name}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-3"
              >
                <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-widest">{name}</span>
                  <span className="underline decoration-2 underline-offset-4 group-hover:decoration-4">{value}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
