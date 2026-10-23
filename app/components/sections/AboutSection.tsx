import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionHeading } from "../common/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="mb-24 scroll-mt-20">
      <SectionHeading id="about-title">Sobre mí</SectionHeading>

      <div className="grid gap-10 md:grid-cols-[16rem_1fr]">
        <div className="space-y-6">
          <Image
            src="/images/about_me_pic.png"
            alt={`Retrato de ${profile.name}`}
            width={256}
            height={256}
            sizes="(min-width: 768px) 256px, 192px"
            className="h-48 w-48 rounded-full border object-cover md:h-64 md:w-64"
          />
          <dl className="space-y-3 text-sm">
            {profile.facts.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-4 leading-relaxed text-muted-foreground">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
