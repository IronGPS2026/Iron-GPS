import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { siteConfig } from '@/lib/config';
import { BrandLockup } from './BrandMark';

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const cta = useTranslations('cta');
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-wrap">
        <div className="foot-grid">
          <div>
            <Link href="/" className="brand" aria-label="IRON GPS">
              <BrandLockup height={72} />
            </Link>
            <p className="tagline">{t('tagline')}</p>
            <p className="foot-meta">
              📍 {t('country')} · <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            </p>
          </div>

          <div>
            <h5>{t('nav')}</h5>
            <ul>
              <li><Link href="/soluciones">{nav('solutions')}</Link></li>
              <li><Link href="/tecnologia">{nav('technology')}</Link></li>
              <li><Link href="/sectores">{nav('sectors')}</Link></li>
              <li><Link href="/nosotros">{nav('about')}</Link></li>
            </ul>
          </div>

          <div>
            <h5>{t('solutions')}</h5>
            <ul>
              <li><Link href="/soluciones">IRON TRACK</Link></li>
              <li><Link href="/soluciones">IRON CONTROL</Link></li>
              <li><Link href="/soluciones">IRON VISION</Link></li>
              <li><Link href="/soluciones">IRON SECURE</Link></li>
            </ul>
          </div>

          <div>
            <h5>{t('contact')}</h5>
            <ul>
              <li><Link href="/contacto">{cta('btn1')}</Link></li>
              <li><Link href="/demo">{cta('btn2')}</Link></li>
              <li><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></li>
              <li><a href={siteConfig.clientPortalUrl} target="_blank" rel="noopener noreferrer">{nav('clients')}</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {year} IRON GPS · {t('rights')}</span>
          <div className="legal">
            <Link href="/privacidad">{t('privacy')}</Link>
            <Link href="/terminos">{t('terms')}</Link>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer { background: var(--navy-950); color: #93a6b6; padding: 64px 0 28px; border-top: 1px solid var(--line-dark); }
        .site-footer .foot-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 32px; }
        .site-footer .brand { display: inline-flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .site-footer .tagline { color: #93a6b6; font-size: 14.5px; max-width: 34ch; }
        .site-footer .foot-meta { margin-top: 16px; font-family: var(--font-mono); font-size: 12.5px; color: #7f93a6; }
        .site-footer .foot-meta a:hover { color: #fff; }
        .site-footer h5 { color: #fff; font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; margin: 0 0 16px; }
        .site-footer ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .site-footer ul a { color: #93a6b6; font-size: 14.5px; }
        .site-footer ul a:hover { color: #fff; }
        .site-footer .foot-bottom { margin-top: 48px; padding-top: 22px; border-top: 1px solid var(--line-dark); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 13px; font-family: var(--font-mono); }
        .site-footer .legal { display: flex; gap: 18px; flex-wrap: wrap; }
        .site-footer .legal a:hover { color: #fff; }
        @media (max-width: 860px) { .site-footer .foot-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .site-footer .foot-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
}
