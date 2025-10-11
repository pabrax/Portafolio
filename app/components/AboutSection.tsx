import { Card } from "./ui/card";
import { Code2, Brain, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-foreground">
        Sobre Mí
      </h2>
      
      <Card className="border-border/50 bg-card/50 p-8 backdrop-blur card-hover-gentle">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Imagen/Avatar Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Brain className="w-5 h-5 text-purple-500" />
                <span className="gradient-text-ai font-semibold">IA Specialist</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" />
                <span className="gradient-text font-semibold">Automation Expert</span>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="md:col-span-2 space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Soy un desarrollador <span className="gradient-text font-semibold">Full Stack especializado en Inteligencia Artificial</span> 
              con sólida experiencia tanto en backend como frontend. Domino tecnologías como 
              <span className="gradient-text-secondary font-semibold"> Python, Node.js, Go y C#</span> para el backend, y 
              <span className="gradient-text font-semibold">React, Angular y Astro</span> para el frontend, creando 
              <span className="gradient-text-accent font-semibold">APIs RESTful robustas</span> y 
              interfaces de usuario modernas.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Mi especialización en <span className="gradient-text-ai font-semibold">Inteligencia Artificial</span> incluye 
              desarrollo de <span className="gradient-text-ai font-semibold">sistemas RAG, bots inteligentes, automatizaciones con IA</span> 
              y integración de LLMs en aplicaciones web. También manejo herramientas no-code como AppSheet y tengo experiencia 
              en <span className="gradient-text-accent font-semibold">procesos ETL, análisis de datos</span> y 
              <span className="gradient-text font-semibold">optimización de flujos de trabajo</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Durante mis prácticas profesionales en <span className="gradient-text-secondary font-semibold">Colcafé S.A.S.</span>, 
              desarrollé soluciones Full Stack que redujeron significativamente los tiempos operativos mediante 
              <span className="gradient-text-ai font-semibold">Google Apps Script, procesos ETL con Python</span> 
              y dashboards interactivos. Trabajo con <span className="gradient-text font-semibold">Linux, Docker, Git</span> 
              y herramientas de gestión como Jira, siempre aplicando principios de 
              <span className="gradient-text-accent font-semibold">código limpio y arquitectura bien estructurada</span>.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
