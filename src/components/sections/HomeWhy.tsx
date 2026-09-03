import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';

type Why = { k: string; title: string; desc: string };

export function HomeWhy() {
  const t = useTranslations('why');
  const items = t.raw('items') as Why[];
  return (
    <section className="sec sec-white" id="nosotros">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} dark />
        <div className="why-grid">
          {items.map((w, i) => (
            <Reveal key={w.k} delay={(i % 3) * 0.06}>
              <div className="why">
                <div className="k">{w.k}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
