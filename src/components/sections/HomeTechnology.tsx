import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { Icon, IconName } from '../Icon';

type Pillar = { icon: IconName; title: string; desc: string };

export function HomeTechnology() {
  const t = useTranslations('technology');
  const pillars = t.raw('pillars') as Pillar[];
  const techList = t.raw('techList') as string[];
  return (
    <section className="sec sec-navy" id="tecnologia">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} />
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.06}>
              <div className="pillar">
                <div className="ic"><Icon name={p.icon} /></div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="tech-chips-wrap">
          <span className="tech-chips-label">{t('techListTitle')}</span>
          <div className="tech-chips">
            {techList.map((tech) => (
              <span key={tech} className="tech-chip">{tech}</span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="tech-reports-note">{t('reportsNote')}</p>
          <p className="tech-closing">{t('closing')}</p>
        </Reveal>
      </div>

      <style>{`
        .tech-chips-wrap { margin-top: 44px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,.1); }
        .tech-chips-label { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: #7f93a6; }
        .tech-chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
        .tech-chip { font-family: var(--font-mono); font-size: 13px; color: #cdd8e2; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.14); padding: 8px 14px; border-radius: 20px; }
        .tech-reports-note { margin-top: 22px; color: #a9bccc; font-size: 14.5px; line-height: 1.6; max-width: 60ch; }
        .tech-closing { margin-top: 16px; font-family: var(--font-display); font-weight: 700; font-size: clamp(18px,2.2vw,23px); color: #fff; }
      `}</style>
    </section>
  );
}
