import { ArrowRight, BookOpen, Layers, Wrench, Boxes } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Container, Section, SectionEyebrow, SectionTitle } from "../components/ui/Layout";
import { useT, r } from "../i18n/useTranslation";
import { useSeo } from "../lib/seo";

const categoryIcons = {
  system: Layers,
  process: Wrench,
  product: Boxes,
};

export function Standards() {
  const { t, lang } = useT();
  useSeo({
    title: `${t.standards.title} — MetallBrücke`,
    description: t.standards.subtitle,
  });

  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 400">
            <defs>
              <pattern id="grid-std" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30 L60 30 M30 0 L30 60" stroke="#F4A024" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="1200" height="400" fill="url(#grid-std)" />
          </svg>
        </div>
        <Container className="relative py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-amber/10 border border-amber/30 rounded-full">
              <BookOpen className="h-3.5 w-3.5 text-amber-300" />
              <span className="text-amber-300 font-semibold text-xs uppercase tracking-widest">
                {lang === "tr" ? "Hızlı referans" : "Schnellreferenz"}
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              {t.standards.title}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 leading-relaxed">
              {t.standards.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO + LEGEND */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Intro */}
          <div>
            <SectionEyebrow>
              {lang === "tr" ? "Genel bakış" : "Überblick"}
            </SectionEyebrow>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy leading-tight tracking-tight mb-5">
              {t.standards.intro.title}
            </h2>
            <p className="text-anthracite/85 leading-relaxed">
              {t.standards.intro.body}
            </p>
          </div>

          {/* Legend */}
          <div className="bg-offwhite border border-navy-100 rounded-2xl p-7">
            <h3 className="font-display font-bold text-lg text-navy mb-5">
              {t.standards.legend.title}
            </h3>
            <dl className="space-y-4">
              {t.standards.legend.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <dt className="flex-shrink-0 w-20 font-display font-bold text-amber-600 text-sm uppercase tracking-wider">
                    {item.k}
                  </dt>
                  <dd className="text-anthracite/85 text-sm leading-relaxed">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* CATEGORY NAV (sticky on desktop) */}
      <div className="bg-offwhite border-y border-navy-100 sticky top-16 md:top-20 z-20 backdrop-blur-sm bg-offwhite/95">
        <Container>
          <nav className="flex items-center gap-2 md:gap-4 overflow-x-auto py-3 -mx-2 px-2 scrollbar-thin">
            {t.standards.categories.map((cat) => {
              const Icon = categoryIcons[cat.key as keyof typeof categoryIcons] ?? Layers;
              return (
                <a
                  key={cat.key}
                  href={`#${cat.key}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-navy-100 rounded-full text-sm font-semibold text-navy hover:border-amber hover:text-amber-600 whitespace-nowrap transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.title}
                </a>
              );
            })}
          </nav>
        </Container>
      </div>

      {/* CATEGORIES */}
      {t.standards.categories.map((cat, ci) => {
        const Icon = categoryIcons[cat.key as keyof typeof categoryIcons] ?? Layers;
        return (
          <Section
            key={cat.key}
            id={cat.key}
            className={ci % 2 === 0 ? "bg-white" : "bg-offwhite"}
          >
            <div className="max-w-3xl mb-10 md:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-amber">
                  <Icon className="h-5 w-5" />
                </span>
                <SectionEyebrow>
                  {lang === "tr" ? `Kategori ${ci + 1}` : `Kategorie ${ci + 1}`}
                </SectionEyebrow>
              </div>
              <SectionTitle>{cat.title}</SectionTitle>
              <p className="mt-5 text-lg text-anthracite/80 leading-relaxed">{cat.desc}</p>
            </div>

            <div className="grid gap-5 lg:gap-6">
              {cat.items.map((std) => (
                <article
                  key={std.code}
                  className="bg-white border-2 border-navy-100 rounded-2xl p-6 md:p-8 hover:border-amber/50 transition-colors"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5 pb-5 border-b border-navy-100">
                    <div>
                      <div className="font-display font-extrabold text-2xl md:text-3xl text-navy leading-tight">
                        {std.code}
                      </div>
                      <div className="mt-1 text-amber-600 font-semibold">
                        {std.name}
                      </div>
                    </div>
                  </div>

                  {/* 3 columns: Ne / Kim için / Kimden */}
                  <div className="grid md:grid-cols-3 gap-5 md:gap-7">
                    <StdField label={t.standards.legend.items[0].k} value={std.what} />
                    <StdField label={t.standards.legend.items[1].k} value={std.forWhom} />
                    <StdField label={t.standards.legend.items[2].k} value={std.issuer} />
                  </div>
                </article>
              ))}
            </div>
          </Section>
        );
      })}

      {/* DISCLAIMER */}
      <Section className="bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/85 leading-relaxed text-base md:text-lg">
            {t.standards.disclaimer}
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-amber py-14 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy leading-tight">
              {t.standards.cta}
            </h2>
            <div className="mt-8">
              <Button href={r("contact", lang)} variant="secondary" size="lg">
                {t.cta.bottom.button}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function StdField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-2">
        {label}
      </div>
      <p className="text-anthracite/85 text-sm leading-relaxed">{value}</p>
    </div>
  );
}
