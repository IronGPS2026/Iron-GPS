import { useTranslations } from 'next-intl';
import { Reveal } from '../Reveal';
import { Icon } from '../Icon';
import { CTA } from '../CTA';
import { AnalyticsMockup } from '../DashboardMockup';

type Feature = { title: string; desc: string };

export function HomeEfficiency() {
  const t = useTranslations('efficiency');
  const features = t.raw('features') as Feature[];
  return (
    <section className="sec sec-paper" id="eficiencia">
      <div className="container-wrap">
        <div className="split rev">
          <Reveal className="split-media">
            <AnalyticsMockup />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow dark"><span className="tick" />// {t('eyebrow')}</span>
            <h2 style={{ marginTop: 16, fontSize: 'clamp(28px,3.4vw,44px)' }}>{t('title')}</h2>
            <p className="sub" style={{ marginTop: 16, fontSize: 17, color: 'var(--muted)' }}>{t('sub')}</p>
            <ul className="feature-list">
              {features.map((f) => (
                <li key={f.title}>
                  <span className="fi"><Icon name="chart" /></span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, color: 'var(--ink)', marginTop: 22 }}>
              {t('closing')}
            </p>
            <div style={{ marginTop: 18 }}>
              <CTA href="/soluciones" variant="ghost" event="advisory_click" eventParams={{ from: 'efficiency' }} arrow>
                {t('callout')}
              </CTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
