import { useTranslations } from 'next-intl';
import { PageHeader } from './PageHeader';

type Section = { h: string; p: string };

export function LegalPage({ ns }: { ns: 'pages.privacy' | 'pages.terms' }) {
  const t = useTranslations(ns);
  const sections = t.raw('sections') as Section[];
  const updated = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long' });

  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />
      <section className="sec sec-white">
        <div className="container-wrap legal-wrap">
          <p className="legal-updated">{t('updated')}: {updated}</p>
          <p className="legal-intro">{t('intro')}</p>
          {sections.map((s) => (
            <div key={s.h} className="legal-sec">
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .legal-wrap { max-width: 760px; }
        .legal-updated { font-family: var(--font-mono); font-size: 12.5px; color: var(--muted-2); text-transform: uppercase; letter-spacing: .06em; }
        .legal-intro { color: var(--ink-2); font-size: 16px; margin: 16px 0 40px; }
        .legal-sec { margin-bottom: 28px; }
        .legal-sec h2 { font-size: 20px; color: var(--ink); margin-bottom: 8px; }
        .legal-sec p { color: var(--muted); font-size: 15px; }
      `}</style>
    </>
  );
}
