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

type Region = { code: string; title: string; desc: string };
type Value = { title: string; desc: string };
type Member = { initials: string; name: string; role: string; desc: string };

function NosotrosContent() {
  const t = useTranslations('pages.about');
  const narrative = t.raw('narrative') as string[];
  const visionExpansion = t.raw('visionExpansion') as Region[];
  const values = t.raw('values') as Value[];
  const team = t.raw('team') as Member[];

  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('heading')} intro={t('intro')} />

      {/* Narrativa — asimétrica: cita grande a la izquierda, texto corto a la derecha */}
      <section className="sec sec-white">
        <div className="container-wrap">
          <div className="narrative-split">
            <Reveal>
              <blockquote className="big-quote">{t('narrativeQuote')}</blockquote>
            </Reveal>
            <div className="narrative-body">
              {narrative.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Propósito / Misión */}
      <section className="sec sec-paper">
        <div className="container-wrap">
          <div className="pv-grid">
            <Reveal>
              <div className="pv-card">
                <span className="pv-tag">{t('purposeTitle')}</span>
                <p>{t('purpose')}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="pv-card">
                <span className="pv-tag">{t('missionTitle')}</span>
                <p>{t('mission')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visión 2030 — número grande + texto corto */}
      <section className="sec sec-dark">
        <div className="container-wrap">
          <div className="vision-split">
            <Reveal>
              <div className="vision-year">2030</div>
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow" style={{ color: '#4DA0FF' }}><span className="tick" />{t('visionTitle')}</span>
                <p className="vision-lead">{t('vision')}</p>
              </Reveal>
              <div className="region-row">
                {visionExpansion.map((r, i) => (
                  <Reveal key={r.code} delay={0.1 + i * 0.06}>
                    <div className="region-pill">
                      <span className="region-code">{r.code}</span>
                      <span className="region-title">{r.title}</span>
                      <span className="region-desc">{r.desc}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="vision-note">{t('visionNote')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores — lista técnica, no cajas repetidas */}
      <section className="sec sec-white">
        <div className="container-wrap">
          <Reveal className="sec-head">
            <span className="eyebrow dark"><span className="tick" />{t('valuesTitle')}</span>
            <h2>{t('valuesSub')}</h2>
          </Reveal>
          <div className="values-list">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.05}>
                <div className="value-row">
                  <span className="value-num">{String(i + 1).padStart(2, '0')}</span>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="sec sec-paper">
        <div className="container-wrap">
          <Reveal className="sec-head">
            <span className="eyebrow dark"><span className="tick" />{t('teamTitle')}</span>
            <h2>{t('teamIntro')}</h2>
          </Reveal>
          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal key={m.initials} delay={(i % 4) * 0.06}>
                <div className="team-card">
                  <div className="team-mono">{m.initials}</div>
                  <h4>{m.name}</h4>
                  <div className="team-role">{m.role}</div>
                  <p>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomeWhy />
      <FinalCTA />

      <style>{`
        /* Narrativa */
        .narrative-split { display: grid; grid-template-columns: 1.1fr 1fr; gap: 48px; align-items: start; }
        .big-quote { font-family: var(--font-display); font-weight: 800; font-size: clamp(24px,3.2vw,34px); color: var(--ink); letter-spacing: -.02em; line-height: 1.3; border-left: 4px solid var(--signal, #1580F5); padding-left: 22px; margin: 0; }
        .narrative-body { display: flex; flex-direction: column; gap: 16px; padding-top: 4px; }
        .narrative-body p { color: var(--ink-2); font-size: 15px; line-height: 1.7; }

        /* Propósito / Misión */
        .pv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .pv-card { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; }
        .pv-tag { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--signal, #1580F5); font-weight: 700; }
        .pv-card p { color: var(--ink); font-size: 17px; font-weight: 500; margin-top: 12px; line-height: 1.55; }

        /* Visión 2030 */
        .sec-dark { background: var(--navy-950); color: #fff; }
        .vision-split { display: grid; grid-template-columns: auto 1fr; gap: 40px; align-items: start; }
        .vision-year { font-family: var(--font-display); font-weight: 900; font-size: clamp(56px,9vw,120px); line-height: 1; color: transparent; -webkit-text-stroke: 1.5px rgba(77,160,255,.55); letter-spacing: -.03em; }
        .vision-lead { font-family: var(--font-display); font-weight: 700; font-size: clamp(18px,2.2vw,23px); color: #fff; margin-top: 14px; letter-spacing: -.01em; max-width: 56ch; }
        .region-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }
        .region-pill { display: flex; flex-direction: column; gap: 3px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1); border-radius: 12px; padding: 14px 18px; min-width: 220px; flex: 1 1 240px; }
        .region-code { font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: #4DA0FF; letter-spacing: .08em; }
        .region-title { color: #fff; font-weight: 700; font-size: 15px; }
        .region-desc { color: #93a6b6; font-size: 13px; line-height: 1.5; }
        .vision-note { margin-top: 18px; font-family: var(--font-mono); font-size: 12px; color: #7f93a6; }

        /* Valores */
        .values-list { margin-top: 30px; border-top: 1px solid var(--line); }
        .value-row { display: grid; grid-template-columns: 40px 220px 1fr; gap: 20px; align-items: baseline; padding: 18px 0; border-bottom: 1px solid var(--line); }
        .value-num { font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--signal, #1580F5); }
        .value-row h4 { font-size: 16.5px; color: var(--ink); }
        .value-row p { color: var(--ink-2); font-size: 14.5px; }

        /* Equipo */
        .team-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 32px; }
        .team-card { background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 22px; }
        .team-mono { width: 46px; height: 46px; border-radius: 12px; background: linear-gradient(160deg, var(--navy-900), var(--navy-800, #131B29)); color: #fff; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 800; font-size: 15px; margin-bottom: 14px; }
        .team-card h4 { font-size: 15.5px; color: var(--ink); }
        .team-role { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .05em; text-transform: uppercase; color: var(--signal, #1580F5); font-weight: 600; margin: 4px 0 10px; }
        .team-card p { color: var(--ink-2); font-size: 13.5px; line-height: 1.5; }

        @media (max-width: 900px) {
          .narrative-split { grid-template-columns: 1fr; gap: 24px; }
          .vision-split { grid-template-columns: 1fr; gap: 16px; }
          .vision-year { font-size: 64px; }
          .pv-grid { grid-template-columns: 1fr; }
          .team-grid { grid-template-columns: 1fr 1fr; }
          .value-row { grid-template-columns: 30px 1fr; }
          .value-row h4 { grid-column: 2; }
          .value-row p { grid-column: 2; }
        }
        @media (max-width: 520px) {
          .team-grid { grid-template-columns: 1fr; }
          .region-pill { min-width: 100%; }
        }
      `}</style>
    </>
  );
}
