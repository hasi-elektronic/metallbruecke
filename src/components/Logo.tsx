type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * MetallBrücke logo
 * - Sol: köprü kafes yapısı simgesi (çelik kiriş + dikey destekler + çapraz)
 * - Sağ: "MetallBrücke" wordmark
 *
 * Sembolizm: Türkiye-Almanya köprüsü, çelik/metal işleme,
 *   Alman mühendislik geometrisi (Truss-Brücke / kafes köprü)
 */
export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "#0A2540" : "#FFFFFF";
  const accent = "#F4A024";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Köprü simgesi */}
      <svg
        viewBox="0 0 56 40"
        width="44"
        height="32"
        fill="none"
        aria-hidden="true"
      >
        {/* Üst kiriş */}
        <rect x="2" y="10" width="52" height="3" fill={accent} />
        {/* Alt kiriş */}
        <rect x="2" y="29" width="52" height="3" fill={accent} />
        {/* Dikey destekler */}
        <rect x="6" y="10" width="2" height="22" fill={accent} />
        <rect x="16" y="10" width="2" height="22" fill={accent} />
        <rect x="27" y="10" width="2" height="22" fill={accent} />
        <rect x="38" y="10" width="2" height="22" fill={accent} />
        <rect x="48" y="10" width="2" height="22" fill={accent} />
        {/* Çapraz kafes elemanları */}
        <line x1="8" y1="29" x2="16" y2="13" stroke={accent} strokeWidth="1.5" />
        <line x1="18" y1="29" x2="27" y2="13" stroke={accent} strokeWidth="1.5" />
        <line x1="29" y1="29" x2="38" y2="13" stroke={accent} strokeWidth="1.5" />
        <line x1="40" y1="29" x2="48" y2="13" stroke={accent} strokeWidth="1.5" />
      </svg>

      {/* Wordmark */}
      <span
        className="font-display font-extrabold text-xl md:text-2xl tracking-tight leading-none"
        style={{ color: textColor }}
      >
        Metall<span style={{ color: accent }}>Brücke</span>
      </span>
    </div>
  );
}
