import { createContext, useContext, type ReactNode } from "react";
import { useLocation } from "wouter";
import { tr } from "./tr";
import { de } from "./de";

export type Lang = "tr" | "de";

const dictionaries = { tr, de } as const;

type Ctx = {
  lang: Lang;
  t: typeof tr;
};

const I18nContext = createContext<Ctx | null>(null);

/**
 * URL'den dil tespit eder. `/de/...` → de, diğer her şey → tr (default).
 * Root path `/` Türkçe ana sayfa.
 */
export function detectLang(pathname: string): Lang {
  return pathname.startsWith("/de") ? "de" : "tr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const lang = detectLang(location);
  const t = dictionaries[lang];

  // <html lang="..."> attribute güncelle (SEO + accessibility)
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }

  return (
    <I18nContext.Provider value={{ lang, t }}>{children}</I18nContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used inside I18nProvider");
  return ctx;
}

/**
 * Mevcut dil için aynı sayfada karşı dile geçiş URL'i.
 * /hizmetler → /de/leistungen gibi route translation
 */
export function translatePath(currentPath: string, targetLang: Lang): string {
  // Path mappings
  const routes: Record<string, { tr: string; de: string }> = {
    home: { tr: "/", de: "/de" },
    services: { tr: "/hizmetler", de: "/de/leistungen" },
    certification: {
      tr: "/hizmetler/belge-yol-haritasi",
      de: "/de/leistungen/zertifizierung",
    },
    drawings: {
      tr: "/hizmetler/teknik-resim",
      de: "/de/leistungen/zeichnungsinterpretation",
    },
    representation: {
      tr: "/hizmetler/temsil",
      de: "/de/leistungen/vertretung",
    },
    about: { tr: "/hakkimizda", de: "/de/ueber-uns" },
    resources: { tr: "/kaynaklar", de: "/de/ressourcen" },
    standards: { tr: "/standartlar", de: "/de/normen" },
    contact: { tr: "/iletisim", de: "/de/kontakt" },
    impressum: { tr: "/impressum", de: "/de/impressum" },
    datenschutz: { tr: "/gizlilik", de: "/de/datenschutz" },
  };

  for (const r of Object.values(routes)) {
    if (currentPath === r.tr) return r[targetLang];
    if (currentPath === r.de) return r[targetLang];
  }
  // Bilinmiyor → root
  return targetLang === "tr" ? "/" : "/de";
}

/**
 * Route helper — bir route key'i mevcut dile çevirir.
 * Nav linklerinde kullanılır.
 */
export function r(
  key:
    | "home"
    | "services"
    | "certification"
    | "drawings"
    | "representation"
    | "about"
    | "resources"
    | "standards"
    | "contact"
    | "impressum"
    | "datenschutz",
  lang: Lang,
): string {
  const routes: Record<typeof key, { tr: string; de: string }> = {
    home: { tr: "/", de: "/de" },
    services: { tr: "/hizmetler", de: "/de/leistungen" },
    certification: {
      tr: "/hizmetler/belge-yol-haritasi",
      de: "/de/leistungen/zertifizierung",
    },
    drawings: {
      tr: "/hizmetler/teknik-resim",
      de: "/de/leistungen/zeichnungsinterpretation",
    },
    representation: {
      tr: "/hizmetler/temsil",
      de: "/de/leistungen/vertretung",
    },
    about: { tr: "/hakkimizda", de: "/de/ueber-uns" },
    resources: { tr: "/kaynaklar", de: "/de/ressourcen" },
    standards: { tr: "/standartlar", de: "/de/normen" },
    contact: { tr: "/iletisim", de: "/de/kontakt" },
    impressum: { tr: "/impressum", de: "/de/impressum" },
    datenschutz: { tr: "/gizlilik", de: "/de/datenschutz" },
  };
  return routes[key][lang];
}
