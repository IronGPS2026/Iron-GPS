import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { SectorCard, Sector } from '../SectorCard';
import { Reveal } from '../Reveal';

export function HomeSectors() {
  const t = useTranslations('sectors');
  const items = t.raw('items') as Sector[];
  return (
    <section className="sec sec-white" id="sectores">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} dark />
        <Reveal className="sectors-banner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/trucks-sunset.jpg" alt="" loading="lazy" />
        </Reveal>
        <div className="sec-grid">
          {items.map((s, i) => (
            <SectorCard key={s.slug} s={s} cta={t('seeSolution')} delay={(i % 3) * 0.06} />
          ))}
        </div>
      </div>

      <style>{`
        .sectors-banner { margin: 8px 0 36px; border-radius: 18px; overflow: hidden; }
        .sectors-banner img { width: 100%; height: 260px; object-fit: cover; display: block; }
        @media (max-width: 640px) { .sectors-banner img { height: 170px; } }
      `}</style>
    </section>
  );
}
