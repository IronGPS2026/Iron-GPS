import Image from 'next/image';
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
          <Image src="/images/trucks-sunset.jpg" alt="" fill sizes="(max-width: 640px) 100vw, 1180px" style={{ objectFit: 'cover' }} />
        </Reveal>
        <div className="sec-grid">
          {items.map((s, i) => (
            <SectorCard key={s.slug} s={s} cta={t('seeSolution')} delay={(i % 3) * 0.06} />
          ))}
        </div>
      </div>

      <style>{`
        .sectors-banner { position: relative; margin: 8px 0 36px; border-radius: 18px; overflow: hidden; height: 260px; }
        @media (max-width: 640px) { .sectors-banner { height: 170px; } }
      `}</style>
    </section>
  );
}
