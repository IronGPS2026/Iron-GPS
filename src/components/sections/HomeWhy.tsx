import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { CTA } from '../CTA';

type Why = { k: string; title: string; desc: string };

export function HomeWhy() {
  const t = useTranslations('why');
  const items = t.raw('items') as Why[];
  return (
    <section className="sec sec-white" id="nosotros">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} dark />
        <Reveal className="why-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/ops-room.jpg" alt="" loading="lazy" />
        </Reveal>
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
        <Reveal style={{ marginTop: 32 }}>
          <CTA href="/soluciones" variant="ghost" event="advisory_click" eventParams={{ from: 'why' }} arrow>
            {t('callout')}
          </CTA>
        </Reveal>
      </div>

      <style>{`
        .why-photo { margin: 8px 0 36px; border-radius: 18px; overflow: hidden; }
        .why-photo img { width: 100%; height: 300px; object-fit: cover; display: block; }
        @media (max-width: 640px) { .why-photo img { height: 190px; } }
      `}</style>
    </section>
  );
}
