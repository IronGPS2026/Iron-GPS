'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { siteConfig } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';
import { BrandMark, BrandWordmark } from './BrandMark';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Icon } from './Icon';

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const tb = useTranslations('topbar');
  const [shrink, setShrink] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { href: '/soluciones', label: t('solutions') },
    { href: '/plataforma', label: t('platform') },
    { href: '/sectores', label: t('sectors') },
    { href: '/tecnologia', label: t('technology') },
    { href: '/nosotros', label: t('about') },
  ] as const;

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div className="container-wrap tb-inner">
          <span className="live">
            <span className="dot-live" />
            {tb('live')} <span className="hide-sm">· {siteConfig.country}</span>
          </span>
          <div className="tb-right">
            <Link href="/contacto">{tb('demo')}</Link>
            <a
              href={siteConfig.clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('client_portal_click')}
            >
              {tb('portal')} ↗
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`site ${shrink ? 'shrink' : ''}`}>
        <div className="container-wrap hd-inner">
          <Link href="/" className="brand" aria-label="IRON GPS">
            <BrandMark />
            <span>
              <BrandWordmark />
              <span className="brand-sub">Gestión inteligente de vehículos y flotas</span>
            </span>
          </Link>

          <nav className="main" aria-label="Principal">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>

          <div className="hd-cta">
            <LanguageSwitcher />
            <a
              href={siteConfig.clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="client-access desktop-only"
              onClick={() => trackEvent('client_portal_click')}
            >
              <Icon name="lock" width={15} height={15} />
              {t('clients')}
            </a>
            <Link
              href="/demo"
              className="btn btn-primary desktop-only"
              onClick={() => trackEvent('advisory_click', { from: 'header' })}
            >
              {t('cta')}
            </Link>
            <button className="burger" aria-label={t('menu')} aria-expanded={open} onClick={() => setOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`scrim ${open ? 'show' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside className={`mobile-menu ${open ? 'open' : ''}`} aria-label="Menú móvil" aria-hidden={!open}>
        <button className="mclose" aria-label={t('close')} onClick={() => setOpen(false)}>×</button>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="mlink" onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <a href={siteConfig.clientPortalUrl} target="_blank" rel="noopener noreferrer" className="mlink" onClick={() => setOpen(false)}>{t('clients')}</a>
        <Link href="/demo" className="btn btn-primary btn-lg" style={{ marginTop: 18 }} onClick={() => setOpen(false)}>{t('cta')}</Link>
      </aside>

      <style jsx>{`
        .topbar { background: var(--navy-950); color: #8fa4b6; font-family: var(--font-mono); font-size: 12px; border-bottom: 1px solid var(--line-dark); }
        .tb-inner { display: flex; align-items: center; justify-content: space-between; height: 36px; gap: 16px; }
        .live { display: inline-flex; align-items: center; gap: 8px; letter-spacing: .04em; }
        .dot-live { width: 7px; height: 7px; border-radius: 50%; background: var(--data); box-shadow: 0 0 0 0 rgba(53,198,232,.6); animation: pulse 2.4s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(53,198,232,.55); } 70% { box-shadow: 0 0 0 8px rgba(53,198,232,0); } 100% { box-shadow: 0 0 0 0 rgba(53,198,232,0); } }
        .tb-right { display: flex; align-items: center; gap: 18px; }
        .tb-right a:hover { color: #fff; }

        .site { position: sticky; top: 0; z-index: 60; background: rgba(6,15,26,.72); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid var(--line-dark); }
        .hd-inner { display: flex; align-items: center; justify-content: space-between; height: 76px; transition: height .25s ease; }
        .site.shrink .hd-inner { height: 62px; }
        .brand { display: flex; align-items: center; gap: 12px; }
        .brand-sub { font-family: var(--font-mono); font-size: 9px; letter-spacing: .22em; color: #7f93a6; text-transform: uppercase; display: block; margin-top: 3px; }
        .main { display: flex; align-items: center; gap: 6px; }
        .main :global(a) { color: #cdd8e2; font-weight: 500; font-size: 15px; padding: 9px 14px; border-radius: 9px; transition: color .18s ease, background .18s ease; }
        .main :global(a:hover) { color: #fff; background: rgba(255,255,255,.06); }
        .hd-cta { display: flex; align-items: center; gap: 10px; }
        .client-access { color: #cdd8e2; font-weight: 500; font-size: 14px; padding: 9px 12px; border-radius: 9px; display: inline-flex; align-items: center; gap: 7px; }
        .client-access:hover { color: #fff; background: rgba(255,255,255,.06); }
        .burger { display: none; background: transparent; border: 1px solid rgba(255,255,255,.18); border-radius: 9px; width: 44px; height: 44px; cursor: pointer; color: #fff; align-items: center; justify-content: center; }
        .burger svg { width: 22px; height: 22px; }
        @media (max-width: 1000px) { .main, .desktop-only { display: none; } .burger { display: inline-flex; } }
        @media (max-width: 720px) { .hide-sm { display: none; } }

        .mobile-menu { position: fixed; inset: 0 0 0 auto; width: min(360px,86vw); background: var(--navy-900); z-index: 80; transform: translateX(105%); transition: transform .3s cubic-bezier(.4,0,.2,1); padding: 26px 24px; display: flex; flex-direction: column; gap: 6px; border-left: 1px solid var(--line-dark); overflow-y: auto; }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu :global(.mlink) { color: #cdd8e2; font-size: 18px; font-weight: 600; padding: 14px 8px; border-bottom: 1px solid var(--line-dark); }
        .mclose { align-self: flex-end; background: transparent; border: 0; color: #fff; font-size: 26px; cursor: pointer; margin-bottom: 8px; line-height: 1; }
        .scrim { position: fixed; inset: 0; background: rgba(3,8,14,.6); z-index: 70; opacity: 0; pointer-events: none; transition: opacity .3s; }
        .scrim.show { opacity: 1; pointer-events: auto; }
      `}</style>
    </>
  );
}
