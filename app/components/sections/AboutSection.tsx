import { Card } from "../ui/card";
import { Code2, Brain, Zap } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-foreground">
        Sobre Mí
      </h2>
      
      <Card className="border-border/50 bg-card/50 p-8 backdrop-blur card-hover-gentle">
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          {/* Imagen/Avatar Section */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                  <Image
                    src="/images/about_me_pic.png"
                    alt="Pabrax - Full Stack Developer & AI Specialist"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover object-center rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Brain className="w-5 h-5 text-purple-500" />
                <span className="gradient-text-ai font-semibold">IA Developer</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" />
                <span className="gradient-text font-semibold">Python Backend Developer</span>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Soy <span className="gradient-text font-semibold">Pablo Espinosa</span>, un desarrollador{" "}
              <span className="gradient-text font-semibold">Full Stack con enfoque en backend</span>, especializado en{" "}
              <span className="gradient-text-secondary font-semibold">Python, Node.js y FastAPI</span>, con más de dos años de experiencia 
              construyendo proyectos freelance y personales. Disfruto transformar ideas en soluciones funcionales, combinando{" "}
              <span className="gradient-text-accent font-semibold">creatividad técnica con un enfoque en la eficiencia y el código limpio</span>.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              He participado en el desarrollo de proyectos completos, colaborando en etapas de{" "}
              <span className="gradient-text font-semibold">planificación, arquitectura y despliegue</span>, utilizando{" "}
              <span className="gradient-text-secondary font-semibold">C#, PostgreSQL, SQL Server y Docker</span>, y complementando con{" "}
              <span className="gradient-text font-semibold">Astro, Angular y Next.js</span> para ofrecer{" "}
              <span className="gradient-text-accent font-semibold">interfaces modernas y bien estructuradas</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Tengo experiencia aplicada en <span className="gradient-text-ai font-semibold">Inteligencia Artificial</span>, especialmente en el desarrollo de{" "}
              <span className="gradient-text-ai font-semibold">sistemas RAG, bots inteligentes y automatizaciones basadas en IA</span>. 
              Me interesa explorar cómo la IA puede integrarse de manera práctica en proyectos web y flujos de trabajo reales.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Durante mi experiencia en <span className="gradient-text-secondary font-semibold">Colcafé S.A.S.</span>, participé en proyectos de{" "}
              <span className="gradient-text-accent font-semibold">transformación digital</span>, implementando{" "}
              <span className="gradient-text-ai font-semibold">procesos ETL, automatizaciones con Google Apps Script y dashboards analíticos</span>. 
              Estas experiencias reforzaron mi interés por la{" "}
              <span className="gradient-text font-semibold">optimización y la calidad del código</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Fuera del código, me apasiona{" "}
              <span className="gradient-text font-semibold">aprender, experimentar con nuevas tecnologías y compartir conocimiento</span>. 
              Busco seguir creciendo como profesional mientras desarrollo{" "}
              <span className="gradient-text-accent font-semibold">soluciones eficientes, sostenibles y con un impacto tangible</span>.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
