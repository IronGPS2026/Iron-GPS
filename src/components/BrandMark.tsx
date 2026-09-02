import Image from 'next/image';

/** Isotipo oficial de IRON GPS (monograma IR + pin). */
export function BrandMark({ height = 36 }: { height?: number }) {
  const width = Math.round(height * (426 / 328));
  return (
    <Image
      src="/logo-mark.png"
      alt="IRON GPS"
      width={width}
      height={height}
      priority
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}

/** Logotipo completo (isotipo + wordmark + tagline). Ideal para el footer. */
export function BrandLockup({ height = 64 }: { height?: number }) {
  const width = Math.round(height * (1038 / 545));
  return (
    <Image
      src="/logo-full.png"
      alt="IRON GPS — Gestión inteligente de vehículos y flotas"
      width={width}
      height={height}
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}

/** Wordmark tipográfico: IRON en plata + GPS en azul (para el header, junto al isotipo). */
export function BrandWordmark() {
  return (
    <span className="brand-wordmark" aria-hidden="true">
      IRON<span className="bw-gps">GPS</span>
      <style>{`
        .brand-wordmark { font-family: var(--font-display); font-weight: 900; font-size: 21px; letter-spacing: .04em; line-height: 1; display: inline-flex; gap: 8px;
          background: linear-gradient(180deg, var(--silver-1), var(--silver-2) 60%, var(--silver-3));
          -webkit-background-clip: text; background-clip: text; color: transparent; }
        .brand-wordmark .bw-gps { background: linear-gradient(180deg, var(--signal-soft), var(--signal)); -webkit-background-clip: text; background-clip: text; color: transparent; }
      `}</style>
    </span>
  );
}
