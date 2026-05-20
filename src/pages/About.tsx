import { MapPin } from "lucide-react";
import { Container, Section, SectionEyebrow, SectionTitle } from "../components/ui/Layout";
import { useT } from "../i18n/useTranslation";
import { useSeo } from "../lib/seo";

export function About() {
  const { t, lang } = useT();
  useSeo({
    title: `${t.about.title} — MetallBrücke`,
    description: t.about.subtitle,
  });

  return (
    <>
      <section className="bg-navy text-white">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              {t.about.title}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>
            {lang === "tr" ? "Hikaye" : "Geschichte"}
          </SectionEyebrow>
          <SectionTitle className="mb-8">{t.about.story.title}</SectionTitle>
          <div className="space-y-5 text-lg text-anthracite/85 leading-relaxed">
            {t.about.story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-offwhite">
        <div className="max-w-3xl mb-12">
          <SectionEyebrow>{t.team.eyebrow}</SectionEyebrow>
          <SectionTitle>{t.team.title}</SectionTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.team.members.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 md:p-8 border border-navy-100">
              <div className="h-16 w-16 rounded-full bg-navy text-amber font-display font-bold text-2xl flex items-center justify-center mb-5">
                {member.name.split(" ").map((p) => p[0]).join("")}
              </div>
              <h3 className="font-display font-bold text-lg text-navy">{member.name}</h3>
              <div className="text-amber-500 font-semibold text-sm mt-1">{member.role}</div>
              <p className="mt-4 text-anthracite/80 text-[15px] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <div className="max-w-3xl mb-12">
          <SectionEyebrow>
            {lang === "tr" ? "Değerlerimiz" : "Werte"}
          </SectionEyebrow>
          <SectionTitle>{t.about.values.title}</SectionTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.about.values.items.map((item, i) => (
            <div key={i}>
              <div className="font-display font-extrabold text-5xl text-amber/30 leading-none">
                0{i + 1}
              </div>
              <h3 className="mt-4 font-display font-bold text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-anthracite/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section className="bg-offwhite">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionEyebrow>
              {lang === "tr" ? "Konumlar" : "Standorte"}
            </SectionEyebrow>
            <SectionTitle>{t.about.location.title}</SectionTitle>
            <div className="mt-7 p-6 bg-navy text-white rounded-xl">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-amber flex-shrink-0 mt-1" />
                <div>
                  <div className="font-display font-bold text-lg">
                    {lang === "tr" ? "Operasyon Merkezi" : "Operationszentrum"}
                  </div>
                  <div className="mt-1 text-white/85">
                    Vaihingen an der Enz, {lang === "tr" ? "Almanya" : "Deutschland"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl text-navy mb-5">
              {t.about.location.serviceArea}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {t.about.location.cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-navy-100"
                >
                  <MapPin className="h-5 w-5 text-amber flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm md:text-base">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
