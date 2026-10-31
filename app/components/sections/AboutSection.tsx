import Image from "next/image";
import { profile } from "@/data/profile";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";

export function AboutSection() {
  const [lead, ...rest] = profile.about;

  return (
    <Section id="about" titleId="about-title">
      <SectionHeading id="about-title">Sobre mí</SectionHeading>

      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-64 sm:w-72 lg:mx-0 lg:-ml-6 lg:w-80">
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-[2rem] bg-primary" />
            <Image
              src="/images/about_me_pic.png"
              alt={`Retrato de ${profile.name}`}
              width={320}
              height={320}
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 256px"
              className="relative aspect-square w-full -rotate-2 rounded-[2rem] border-4 border-background object-cover"
            />
          </div>

          <dl className="mt-12 space-y-4 border-l-4 border-primary pl-5 text-sm">
            {profile.facts.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="max-w-prose space-y-5 lg:col-span-7">
          <p className="text-xl font-medium leading-snug sm:text-2xl">{lead}</p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
