import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { SolutionCard, Solution } from '../SolutionCard';

export function HomeSolutions() {
  const t = useTranslations('solutions');
  const items = t.raw('items') as Solution[];
  return (
    <section className="sec sec-paper" id="soluciones">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} dark />
        <div className="sol-grid">
          {items.map((s, i) => (
            <SolutionCard key={s.name} s={s} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
