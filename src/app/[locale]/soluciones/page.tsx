import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/PageHeader';
import { SolutionCard, Solution } from '@/components/SolutionCard';
import { Reveal } from '@/components/Reveal';
import { FinalCTA } from '@/components/FinalCTA';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'solutions' });
  return { title: t('pageTitle'), description: t('sub') };
}

export default function SolucionesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <SolucionesContent />;
}

const LINE_ORDER: { key: 'Fleet' | 'Vision' | 'Security' | 'Iot' | 'Smart' | 'Safe'; cls: string }[] = [
  { key: 'Fleet', cls: 'fleet' },
  { key: 'Vision', cls: 'vision' },
  { key: 'Security', cls: 'security' },
  { key: 'Iot', cls: 'iot' },
  { key: 'Smart', cls: 'smart' },
  { key: 'Safe', cls: 'safe' },
];

function SolucionesContent() {
  const t = useTranslations('solutions');
  const items = t.raw('items') as Solution[];
  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('pageTitle')} intro={t('pageIntro')} />

      <section className="sec sec-paper">
        <div className="container-wrap">
          <div className="lines-grid">
            {LINE_ORDER.map((line, i) => (
              <Reveal key={line.key} delay={i * 0.05}>
                <div className={`line-card ${line.cls}`}>
                  <span className={`line-badge ${line.cls}`}>{t(`line${line.key}` as any)}</span>
                  <p>{t(`line${line.key}Desc` as any)}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="sol-grid" style={{ marginTop: 28 }}>
            {items.map((s, i) => (
              <SolutionCard key={s.name} s={s} delay={(i % 2) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .lines-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
        .line-card { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; }
        .line-card p { color: var(--ink-2); font-size: 15.5px; margin-top: 14px; }
        .line-card .line-badge { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .12em; padding: 5px 11px; border-radius: 20px; }
        .line-card.fleet .line-badge { background: rgba(53,198,232,.12); color: #0f7a94; }
        .line-card.vision .line-badge { background: rgba(124,92,255,.12); color: #6a45e6; }
        .line-card.security .line-badge { background: rgba(21,128,245,.12); color: var(--signal); }
        .line-card.iot .line-badge { background: rgba(22,163,74,.12); color: var(--ok); }
        .line-card.smart .line-badge { background: rgba(245,158,11,.14); color: #b06f04; }
        .line-card.safe .line-badge { background: rgba(229,50,59,.10); color: var(--signal-deep); }
        @media (max-width: 980px) { .lines-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .lines-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
