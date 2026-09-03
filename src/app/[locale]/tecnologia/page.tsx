import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/PageHeader';
import { HomeTechnology } from '@/components/sections/HomeTechnology';
import { Reveal } from '@/components/Reveal';
import { FinalCTA } from '@/components/FinalCTA';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'technology' });
  return { title: t('pageTitle'), description: t('sub') };
}

export default function TecnologiaPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <TecnologiaContent />;
}

type Layer = { name: string; desc: string };

function TecnologiaContent() {
  const t = useTranslations('technology');
  const layers = t.raw('layers') as Layer[];
  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('pageTitle')} intro={t('sub')} />
      <HomeTechnology />

      <section className="sec sec-white">
        <div className="container-wrap">
          <Reveal className="sec-head">
            <span className="eyebrow dark"><span className="tick" />// {t('layersTitle')}</span>
            <h2 style={{ marginTop: 16 }}>{t('layersTitle')}</h2>
            <p className="sub">{t('layersSub')}</p>
          </Reveal>
          <div className="layers">
            {layers.map((l, i) => (
              <Reveal key={l.name} delay={(i % 5) * 0.05}>
                <div className="layer">
                  <div className="layer-num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h4>{l.name}</h4>
                    <p>{l.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .layers { display: flex; flex-direction: column; gap: 12px; }
        .layer { display: flex; gap: 20px; align-items: center; background: var(--paper); border: 1px solid var(--line); border-radius: 12px; padding: 20px 24px; }
        .layer-num { font-family: var(--font-mono); font-size: 22px; font-weight: 600; color: var(--data); background: var(--navy-950); width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex: 0 0 auto; }
        .layer h4 { font-size: 18px; color: var(--ink); }
        .layer p { color: var(--muted); font-size: 14.5px; margin-top: 4px; }
        @media (max-width: 520px) { .layer { flex-direction: row; padding: 16px; gap: 14px; } .layer-num { width: 46px; height: 46px; font-size: 18px; } }
      `}</style>
    </>
  );
}
