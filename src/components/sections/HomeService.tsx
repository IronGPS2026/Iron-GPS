import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { CTA } from '../CTA';

type Step = { title: string; desc: string };

export function HomeService() {
  const t = useTranslations('service');
  const steps = t.raw('steps') as Step[];
  return (
    <section className="sec sec-dark" id="servicio">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} center />
        <Reveal className="service-photo-strip">
          <div className="service-photo"><Image src="/images/gps-install.jpg" alt="" fill sizes="(max-width: 640px) 50vw, 360px" style={{ objectFit: 'cover' }} /></div>
          <div className="service-photo"><Image src="/images/driver-install.jpg" alt="" fill sizes="(max-width: 640px) 50vw, 360px" style={{ objectFit: 'cover' }} /></div>
        </Reveal>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <div className="step">
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(18px,2.2vw,23px)', color: '#fff', marginBottom: 20 }}>
            {t('closing')}
          </p>
          <CTA href="/contacto" variant="ghost" onDark event="advisory_click" eventParams={{ from: 'service' }} arrow>
            {t('callout')}
          </CTA>
        </Reveal>
      </div>

      <style>{`
        .service-photo-strip { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 720px; margin: 32px auto 0; }
        .service-photo { position: relative; height: 180px; border-radius: 14px; overflow: hidden; border: 1px solid rgba(255,255,255,.1); }
        @media (max-width: 640px) { .service-photo { height: 130px; } }
      `}</style>
    </section>
  );
}
