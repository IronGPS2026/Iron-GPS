import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { SectorCard, Sector } from '../SectorCard';

export function HomeSectors() {
  const t = useTranslations('sectors');
  const items = t.raw('items') as Sector[];
  return (
    <section className="sec sec-white" id="sectores">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} dark />
        <div className="sec-grid">
          {items.map((s, i) => (
            <SectorCard key={s.slug} s={s} cta={t('seeSolution')} delay={(i % 3) * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
