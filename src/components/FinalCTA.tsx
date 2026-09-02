import { useTranslations } from 'next-intl';
import { CTA } from './CTA';

export function FinalCTA() {
  const t = useTranslations('cta');
  return (
    <section className="bigcta" id="empezar">
      <div className="grid-bg-hero" style={{ WebkitMaskImage: 'radial-gradient(circle at 50% 50%,#000 30%,transparent 80%)', maskImage: 'radial-gradient(circle at 50% 50%,#000 30%,transparent 80%)' }} />
      <div className="container-wrap bigcta-inner">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          <span className="tick" />{t('eyebrow')}
        </span>
        <h2>{t('title')}</h2>
        <p>{t('sub')}</p>
        <div className="cta-row">
          <CTA href="/contacto" size="lg" event="advisory_click" eventParams={{ from: 'final_cta' }} arrow>
            {t('btn1')}
          </CTA>
          <CTA href="/demo" variant="ghost" size="lg" onDark event="demo_request" eventParams={{ from: 'final_cta' }}>
            {t('btn2')}
          </CTA>
        </div>
        <p className="cta-note">{t('note')}</p>
      </div>
      <style>{`
        .bigcta .cta-note { margin-top: 18px; font-family: var(--font-mono); font-size: 12.5px; color: #8fa4b6; letter-spacing: .01em; }
      `}</style>
    </section>
  );
}
