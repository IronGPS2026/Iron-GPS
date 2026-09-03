import { useTranslations } from 'next-intl';
import { Reveal } from '../Reveal';
import { Icon } from '../Icon';
import { CTA } from '../CTA';
import { SecurityMockup } from '../DashboardMockup';

type Feature = { title: string; desc: string };

export function HomeSecurity() {
  const t = useTranslations('security');
  const features = t.raw('features') as Feature[];
  return (
    <section className="sec sec-dark" id="seguridad">
      <div className="container-wrap">
        <div className="split">
          <Reveal>
            <span className="eyebrow"><span className="tick" />// {t('eyebrow')}</span>
            <h2 style={{ marginTop: 16, fontSize: 'clamp(28px,3.4vw,44px)', color: '#fff' }}>{t('title')}</h2>
            <p className="sub" style={{ color: '#a9bccc', marginTop: 16, fontSize: 17 }}>{t('sub')}</p>
            <ul className="feature-list">
              {features.map((f) => (
                <li key={f.title}>
                  <span className="fi"><Icon name="shield" /></span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="credibility">{t('credibility')}</p>
            <div style={{ marginTop: 20 }}>
              <CTA href="/soluciones" variant="ghost" onDark event="advisory_click" eventParams={{ from: 'security' }} arrow>
                {t('callout')}
              </CTA>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="split-media">
            <SecurityMockup />
            <div className="sec-photo-strip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/ops-center.jpg" alt="" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/dashcam.jpg" alt="" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .credibility { margin-top: 22px; padding: 16px 18px; border-left: 3px solid rgba(21,128,245,.5); background: rgba(255,255,255,.03); border-radius: 0 10px 10px 0; color: #cdd8e2; font-size: 14px; line-height: 1.6; max-width: 52ch; }
        .sec-photo-strip { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; }
        .sec-photo-strip img { width: 100%; height: 140px; object-fit: cover; border-radius: 12px; border: 1px solid rgba(255,255,255,.1); display: block; }
        @media (max-width: 640px) { .sec-photo-strip img { height: 110px; } }
      `}</style>
    </section>
  );
}
