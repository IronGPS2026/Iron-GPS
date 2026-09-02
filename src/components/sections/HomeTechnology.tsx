import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { Icon, IconName } from '../Icon';
import { AnimatedNumber } from '../AnimatedNumber';

type Pillar = { icon: IconName; title: string; desc: string };
type Stat = { value: number; suffix: string; label: string };

export function HomeTechnology() {
  const t = useTranslations('technology');
  const pillars = t.raw('pillars') as Pillar[];
  const stats = t.raw('stats') as Stat[];
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
        <Reveal className="statband">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="st-v"><AnimatedNumber value={s.value} suffix={s.suffix} /></div>
              <div className="st-l">{s.label}</div>
            </div>
          ))}
          <div>
            <div className="st-v">{t('statApi')}<span className="u">{t('statApiUnit')}</span></div>
            <div className="st-l">{t('statApiLabel')}</div>
          </div>
          <div>
            <div className="st-v">{t('statApps')}<span className="u">{t('statAppsUnit')}</span></div>
            <div className="st-l">{t('statAppsLabel')}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
