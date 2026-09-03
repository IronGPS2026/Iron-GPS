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

function SolucionesContent() {
  const t = useTranslations('solutions');
  const items = t.raw('items') as Solution[];
  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('pageTitle')} intro={t('pageIntro')} />

      <section className="sec sec-paper">
        <div className="container-wrap">
          <div className="lines-grid">
            <Reveal>
              <div className="line-card fleet">
                <span className="line-badge data">IRON FLEET</span>
                <p>{t('lineFleetDesc')}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="line-card security">
                <span className="line-badge sig">IRON SECURITY</span>
                <p>{t('lineSecurityDesc')}</p>
              </div>
            </Reveal>
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
        .lines-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .line-card { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; }
        .line-card p { color: var(--ink-2); font-size: 15.5px; margin-top: 14px; }
        .line-card .line-badge { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .12em; padding: 5px 11px; border-radius: 20px; }
        .line-card .line-badge.data { background: rgba(53,198,232,.12); color: #0f7a94; }
        .line-card .line-badge.sig { background: rgba(229,50,59,.10); color: var(--signal); }
        @media (max-width: 760px) { .lines-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
