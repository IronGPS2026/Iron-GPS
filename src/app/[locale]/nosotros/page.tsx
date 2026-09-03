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

      {/* Narrativa */}
      <section className="sec sec-paper">
        <div className="container-wrap narrow">
          <Reveal>
            <blockquote className="big-quote">{t('narrativeQuote')}</blockquote>
          </Reveal>
          <div className="narrative-body">
            {narrative.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Propósito / Misión */}
      <section className="sec sec-white">
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
                <h3>{t('missionTitle')}</h3>
                <p>{t('mission')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visión 2030 */}
      <section className="sec sec-dark">
        <div className="container-wrap">
          <Reveal className="sec-head">
            <span className="eyebrow" style={{ color: '#4DA0FF' }}><span className="tick" />{t('visionTitle')}</span>
            <p className="vision-lead">{t('vision')}</p>
          </Reveal>
          <div className="region-grid">
            {visionExpansion.map((r, i) => (
              <Reveal key={r.code} delay={i * 0.08}>
                <div className="region-card">
                  <span className="region-code">{r.code}</span>
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="vision-note">{t('visionNote')}</p>
        </div>
      </section>

      {/* Valores */}
      <section className="sec sec-white">
        <div className="container-wrap">
          <Reveal className="sec-head">
            <span className="eyebrow dark"><span className="tick" />{t('valuesTitle')}</span>
            <h2>{t('valuesSub')}</h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.06}>
                <div className="value-card">
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
              <Reveal key={m.initials} delay={(i % 2) * 0.08}>
                <div className="team-card">
                  <div className="team-mono">{m.initials}</div>
                  <div>
                    <h4>{m.name}</h4>
                    <div className="team-role">{m.role}</div>
                    <p>{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomeWhy />
      <FinalCTA />

      <style>{`
        .narrow { max-width: 780px; }
        .big-quote { font-family: var(--font-display); font-weight: 800; font-size: clamp(21px,3vw,29px); color: var(--ink); letter-spacing: -.01em; line-height: 1.35; border-left: 4px solid var(--signal, #1580F5); padding-left: 22px; margin: 0 0 30px; }
        .narrative-body { display: flex; flex-direction: column; gap: 18px; }
        .narrative-body p { color: var(--ink-2); font-size: 16px; line-height: 1.75; }

        .pv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .pv-card { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 28px; }
        .pv-card h3 { font-size: 20px; color: var(--ink); }
        .pv-card p { color: var(--ink-2); font-size: 15.5px; margin-top: 12px; }

        .sec-dark { background: var(--navy-950); color: #fff; }
        .sec-dark .sec-head { max-width: 760px; }
        .vision-lead { font-family: var(--font-display); font-weight: 700; font-size: clamp(19px,2.6vw,25px); color: #fff; margin-top: 14px; letter-spacing: -.01em; }
        .region-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 32px; }
        .region-card { display: flex; gap: 16px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1); border-radius: 14px; padding: 22px; }
        .region-code { flex: 0 0 auto; width: 44px; height: 44px; border-radius: 10px; background: rgba(21,128,245,.16); color: #4DA0FF; font-family: var(--font-mono); font-weight: 700; font-size: 13px; display: flex; align-items: center; justify-content: center; }
        .region-card h4 { color: #fff; font-size: 16.5px; }
        .region-card p { color: #93a6b6; font-size: 14px; margin-top: 6px; }
        .vision-note { margin-top: 20px; font-family: var(--font-mono); font-size: 12.5px; color: #7f93a6; }

        .values-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 32px; }
        .value-card { background: var(--paper); border: 1px solid var(--line); border-radius: 14px; padding: 22px; }
        .value-num { font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--signal, #1580F5); background: rgba(21,128,245,.1); width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 12px; }
        .value-card h4 { font-size: 16.5px; color: var(--ink); }
        .value-card p { color: var(--ink-2); font-size: 14.5px; margin-top: 8px; }

        .team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 32px; }
        .team-card { display: flex; gap: 16px; background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 22px; }
        .team-mono { flex: 0 0 auto; width: 58px; height: 58px; border-radius: 14px; background: linear-gradient(160deg, var(--navy-900), var(--navy-800, #131B29)); color: #fff; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 800; font-size: 19px; }
        .team-card h4 { font-size: 17px; color: var(--ink); }
        .team-role { font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; text-transform: uppercase; color: var(--signal, #1580F5); font-weight: 600; margin: 3px 0 8px; }
        .team-card p { color: var(--ink-2); font-size: 14px; }

        @media (max-width: 860px) {
          .pv-grid, .region-grid, .team-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 520px) {
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
