import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/PageHeader';
import { HomeWhy } from '@/components/sections/HomeWhy';
import { Reveal } from '@/components/Reveal';
import { FinalCTA } from '@/components/FinalCTA';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.about' });
  return { title: t('title'), description: t('intro') };
}

export default function NosotrosPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <NosotrosContent />;
}

type Pillar = { title: string; desc: string };

function NosotrosContent() {
  const t = useTranslations('pages.about');
  const pillars = t.raw('pillars') as Pillar[];
  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('heading')} intro={t('intro')} />

      <section className="sec sec-paper">
        <div className="container-wrap">
          <div className="pv-grid">
            <Reveal>
              <div className="pv-card">
                <h3>{t('purposeTitle')}</h3>
                <p>{t('purpose')}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="pv-card">
                <h3>{t('visionTitle')}</h3>
                <p>{t('vision')}</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="value-phrase">
            <span className="eyebrow dark" style={{ justifyContent: 'center' }}><span className="tick" />{t('valueTitle')}</span>
            <p className="vp">{t('valuePhrase')}</p>
          </Reveal>

          <Reveal className="sec-head" style={{ marginTop: 8 }}>
            <h2>{t('pillarsTitle')}</h2>
          </Reveal>
          <div className="pillars-plain">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 0.06}>
                <div className="pp">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomeWhy />
      <FinalCTA />

      <style>{`
        .pv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .pv-card { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 28px; }
        .pv-card h3 { font-size: 20px; color: var(--ink); }
        .pv-card p { color: var(--ink-2); font-size: 15.5px; margin-top: 12px; }
        .value-phrase { text-align: center; margin: 56px 0; }
        .value-phrase .vp { font-family: var(--font-display); font-weight: 800; font-size: clamp(22px,3vw,34px); color: var(--ink); letter-spacing: -.02em; margin-top: 14px; }
        .pillars-plain { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .pp { background: var(--paper); border: 1px solid var(--line); border-radius: 12px; padding: 20px; }
        .pp h4 { font-size: 16px; color: var(--ink); }
        .pp p { color: var(--muted); font-size: 14px; margin-top: 6px; }
        @media (max-width: 860px) { .pv-grid { grid-template-columns: 1fr; } .pillars-plain { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 460px) { .pillars-plain { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
