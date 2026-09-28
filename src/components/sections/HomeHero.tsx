import { useTranslations } from 'next-intl';
import { CTA } from '../CTA';
import { HeroVisual } from '../HeroVisual';

export function HomeHero() {
  const t = useTranslations('hero');
  return (
    <section className="hero" id="top">
      <div className="hero-photo" style={{ backgroundImage: 'url(/images/hero-truck.jpg)' }} />
      <div className="grid-bg-hero" />
      <div className="container-wrap hero-inner">
        <div>
          <span className="eyebrow"><span className="tick" />{t('eyebrow')}</span>
          <h1>
            {t('titleA')}<span className="hl">{t('titleHl1')}</span>{t('titleB')}<span className="hl">{t('titleHl2')}</span>{t('titleC')}
          </h1>
          <p className="lead">{t('lead')}</p>
          <div className="cta-row">
            <CTA href="/contacto" size="lg" event="advisory_click" eventParams={{ from: 'hero' }} arrow>{t('cta1')}</CTA>
            <CTA href="/soluciones" variant="ghost" size="lg" onDark>{t('cta2')}</CTA>
          </div>
          <div className="microtrust">
            <span className="bar" />
            {t('trust')}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
