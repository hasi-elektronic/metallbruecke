import { ArrowUpRight, FileText, Download, BookOpen, ArrowRight } from "lucide-react";
import { Container, Section, SectionEyebrow, SectionTitle } from "../components/ui/Layout";
import { LeadMagnetForm } from "../components/Forms";
import { Button } from "../components/ui/Button";
import { useT, r } from "../i18n/useTranslation";
import { useSeo } from "../lib/seo";

export function Resources() {
  const { t, lang } = useT();
  useSeo({
    title: `${t.resources.title} — MetallBrücke`,
    description: t.resources.subtitle,
  });

  return (
    <>
      <section className="bg-navy text-white">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              {t.resources.title}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 leading-relaxed">
              {t.resources.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Lead magnet block */}
      <Section className="bg-offwhite">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionEyebrow>{t.leadMagnet.eyebrow}</SectionEyebrow>
            <SectionTitle>{t.leadMagnet.title}</SectionTitle>
            <p className="mt-5 text-anthracite/80 leading-relaxed">
              {t.leadMagnet.description}
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm text-anthracite/70">
              <Download className="h-4 w-4 text-amber" />
              <span>{lang === "tr" ? "PDF · ~ 2 MB · Türkçe" : "PDF · ~ 2 MB · auf Deutsch"}</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-7 md:p-8 border-2 border-navy-100">
            <LeadMagnetForm />
          </div>
        </div>
      </Section>

      {/* Standards Teaser */}
      <Section className="bg-white">
        <div className="bg-gradient-to-br from-navy to-navy-700 text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <pattern id="std-teaser-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20 L40 20 M20 0 L20 40" stroke="#F4A024" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="200" fill="url(#std-teaser-grid)" />
            </svg>
          </div>
          <div className="relative grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-amber/10 border border-amber/30 rounded-full">
                <BookOpen className="h-3.5 w-3.5 text-amber-300" />
                <span className="text-amber-300 font-semibold text-xs uppercase tracking-widest">
                  {t.resources.standardsTeaser.eyebrow}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight mb-5">
                {t.resources.standardsTeaser.title}
              </h2>
              <p className="text-white/85 leading-relaxed text-lg max-w-2xl">
                {t.resources.standardsTeaser.desc}
              </p>
              {/* Standard code chips */}
              <div className="mt-7 flex flex-wrap gap-2">
                {["EN 1090", "ISO 3834", "ISO 5817", "ISO 1101", "EN ISO 9606", "DIN EN ISO 22553"].map((code) => (
                  <span
                    key={code}
                    className="px-3 py-1 bg-white/10 border border-white/15 rounded-md text-xs font-mono text-white/90"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:text-right">
              <Button href={r("standards", lang)} variant="primary" size="lg">
                {t.resources.standardsTeaser.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Blog placeholder */}
      <Section className="bg-offwhite">
        <div className="max-w-3xl mb-10">
          <SectionEyebrow>
            {lang === "tr" ? "Blog" : "Blog"}
          </SectionEyebrow>
          <SectionTitle>{t.resources.blogTitle}</SectionTitle>
        </div>

        <div className="bg-white border-2 border-dashed border-navy-100 rounded-2xl p-12 text-center">
          <FileText className="h-12 w-12 text-amber mx-auto mb-4" />
          <h3 className="font-display font-bold text-xl text-navy mb-2">
            {t.resources.comingSoon}
          </h3>
          <p className="text-anthracite/70 max-w-md mx-auto leading-relaxed">
            {t.resources.comingSoonDesc}
          </p>
        </div>
      </Section>

      {/* Useful links */}
      <Section className="bg-white">
        <div className="max-w-3xl mb-10">
          <SectionEyebrow>
            {lang === "tr" ? "Bağlantılar" : "Links"}
          </SectionEyebrow>
          <SectionTitle>{t.resources.linksTitle}</SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {t.resources.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-offwhite rounded-xl p-6 border-2 border-navy-100 hover:border-amber transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-bold text-lg text-navy mb-1.5">
                    {link.name}
                  </h3>
                  <p className="text-anthracite/75 text-sm leading-relaxed">
                    {link.desc}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-amber-500 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
