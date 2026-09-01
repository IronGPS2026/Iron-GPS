import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { Icon, IconName } from '../Icon';

type Cap = { icon: IconName; title: string; desc: string };

export function HomeCapabilities() {
  const t = useTranslations('capabilities');
  const items = t.raw('items') as Cap[];
  return (
    <section className="sec sec-navy" id="capacidades">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} />
        <div className="cap-grid">
          {items.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.06}>
              <div className="cap">
                <div className="ic"><Icon name={c.icon} /></div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
