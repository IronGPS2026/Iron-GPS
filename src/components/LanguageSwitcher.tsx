'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

/** Selector ES | EN que conserva la ruta actual al cambiar de idioma. */
export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const current = (params.locale as string) || 'es';

  function change(locale: 'es' | 'en') {
    if (locale === current) return;
    trackEvent('language_change', { to: locale });
    // pathname es la ruta sin prefijo de idioma; router.replace re-agrega el locale.
    router.replace(pathname, { locale });
  }

  return (
    <div className="lang" role="group" aria-label="Idioma / Language">
      <button type="button" onClick={() => change('es')} aria-pressed={current === 'es'} className={current === 'es' ? 'active' : ''}>
        ES
      </button>
      <button type="button" onClick={() => change('en')} aria-pressed={current === 'en'} className={current === 'en' ? 'active' : ''}>
        EN
      </button>
      <style jsx>{`
        .lang { display: flex; align-items: center; font-family: var(--font-mono); font-size: 13px; border: 1px solid rgba(255,255,255,.18); border-radius: 9px; overflow: hidden; }
        .lang button { background: transparent; border: 0; color: #8fa4b6; padding: 7px 11px; cursor: pointer; font-family: var(--font-mono); font-size: 13px; font-weight: 500; transition: .15s; }
        .lang button.active { background: #35C6E8; color: #060F1A; font-weight: 600; }
      `}</style>
    </div>
  );
}
