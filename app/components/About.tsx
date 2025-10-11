import { Code2, Palette, Rocket } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Código limpio, mantenible y escalable siguiendo las mejores prácticas."
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Interfaces intuitivas con atención al detalle y experiencia de usuario."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Aplicaciones optimizadas y rápidas que ofrecen la mejor experiencia."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Sobre mí</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soy un desarrollador full stack apasionado por transformar ideas en
            soluciones digitales que marcan la diferencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            Me especializo en el desarrollo de aplicaciones web utilizando tecnologías
            modernas como React, TypeScript, Node.js y bases de datos SQL/NoSQL. Mi
            enfoque se centra en crear productos que no solo funcionen bien, sino que
            también ofrezcan una experiencia excepcional al usuario. Cada proyecto es
            una oportunidad para aprender, innovar y superar expectativas.
          </p>
        </div>
      </div>
    </section>
  );
}
