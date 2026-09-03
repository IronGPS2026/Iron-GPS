import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { CTA } from '../CTA';
import { Icon, IconName } from '../Icon';

type ValueProp = { icon: IconName; tag: string; title: string; desc: string; ctaLabel: string };

export function HomeValueProps() {
  const t = useTranslations('valueProps');
  const items = t.raw('items') as ValueProp[];

  return (
    <section className="sec sec-navy" id="propuesta-de-valor">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} />
        <div className="vp-grid">
          {items.map((v, i) => (
            <Reveal key={v.tag} delay={(i % 4) * 0.06}>
              <div className="vp-card">
                <div className="vp-top">
                  <div className="ic"><Icon name={v.icon} /></div>
                  <span className="vp-tag">{v.tag}</span>
                </div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
                <CTA href="/soluciones" variant="ghost" onDark>{v.ctaLabel}</CTA>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .vp-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .vp-card { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.1); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px; height: 100%; }
        .vp-top { display: flex; align-items: center; gap: 10px; }
        .vp-card .ic { width: 38px; height: 38px; border-radius: 10px; background: rgba(21,128,245,.16); color: #4DA0FF; display: flex; align-items: center; justify-content: center; flex: 0 0 auto; }
        .vp-card .ic svg { width: 18px; height: 18px; }
        .vp-tag { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #93a6b6; font-weight: 700; }
        .vp-card h4 { color: #fff; font-size: 17px; line-height: 1.35; }
        .vp-card p { color: #93a6b6; font-size: 13.5px; line-height: 1.6; flex: 1; }
        .vp-card :global(.btn) { align-self: flex-start; margin-top: 4px; }

        @media (max-width: 1000px) { .vp-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .vp-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
