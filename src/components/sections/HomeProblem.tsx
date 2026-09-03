import { useTranslations } from 'next-intl';
import { Reveal } from '../Reveal';
import { CTA } from '../CTA';
import { Icon, IconName } from '../Icon';

type ProblemItem = { icon: IconName; title: string; desc: string };

export function HomeProblem() {
  const t = useTranslations('problem');
  const items = t.raw('items') as ProblemItem[];

  return (
    <section className="sec sec-white" id="problema">
      <div className="container-wrap">
        <Reveal className="sec-head">
          <span className="eyebrow dark"><span className="tick" />{t('eyebrow')}</span>
          <h2>{t('title')}</h2>
        </Reveal>

        <div className="problem-intro-split">
          <Reveal className="problem-intro">
            <p className="pi-lead">{t('lead')}</p>
            <p className="pi-body">{t('body')}</p>
            <p className="pi-challenge">
              <span className="dim">{t('challenge1')}</span> <span className="bright">{t('challenge2')}</span>
            </p>
          </Reveal>
          <Reveal delay={0.08} className="problem-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/fleet-lineup.jpg" alt="" loading="lazy" />
          </Reveal>
        </div>

        <div className="problem-grid">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 5) * 0.05}>
              <div className="problem-card">
                <div className="ic"><Icon name={it.icon} /></div>
                <h4>{it.title}</h4>
                <p>{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 32 }}>
          <CTA href="/contacto" variant="ghost" event="advisory_click" eventParams={{ from: 'problem' }} arrow>
            {t('ctaLabel')}
          </CTA>
        </Reveal>
      </div>

      <style>{`
        .problem-intro-split { display: grid; grid-template-columns: 1.3fr 1fr; gap: 40px; align-items: center; margin: 8px 0 40px; }
        .problem-photo img { width: 100%; height: 100%; max-height: 260px; object-fit: cover; border-radius: 16px; display: block; }
        @media (max-width: 860px) { .problem-intro-split { grid-template-columns: 1fr; } .problem-photo { order: -1; } .problem-photo img { max-height: 220px; } }
        .problem-intro { max-width: 720px; margin: 0; }
        .pi-lead { font-family: var(--font-display); font-weight: 700; font-size: clamp(19px,2.4vw,24px); color: var(--ink); }
        .pi-body { color: var(--ink-2); font-size: 15.5px; margin-top: 12px; line-height: 1.7; }
        .pi-challenge { margin-top: 18px; font-family: var(--font-mono); font-size: 14px; }
        .pi-challenge .dim { color: var(--muted); }
        .pi-challenge .bright { color: var(--signal, #1580F5); font-weight: 700; }

        .problem-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 14px; }
        .problem-card { background: var(--paper); border: 1px solid var(--line); border-radius: 14px; padding: 20px; height: 100%; }
        .problem-card .ic { width: 38px; height: 38px; border-radius: 10px; background: rgba(21,128,245,.1); color: var(--signal, #1580F5); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
        .problem-card .ic svg { width: 18px; height: 18px; }
        .problem-card h4 { font-size: 14.5px; color: var(--ink); line-height: 1.3; }
        .problem-card p { color: var(--ink-2); font-size: 13px; margin-top: 8px; line-height: 1.5; }

        @media (max-width: 1000px) { .problem-grid { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 620px) { .problem-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 420px) { .problem-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
