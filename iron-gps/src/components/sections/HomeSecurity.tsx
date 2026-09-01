import { useTranslations } from 'next-intl';
import { Reveal } from '../Reveal';
import { Icon } from '../Icon';
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
            <div className="callout">{t('callout')}</div>
          </Reveal>
          <Reveal delay={0.1} className="split-media">
            <SecurityMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
