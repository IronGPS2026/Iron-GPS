'use client';

import { useTranslations } from 'next-intl';
import { whatsappLink } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';

export function WhatsAppButton({ locale }: { locale: string }) {
  const t = useTranslations('whatsapp');
  return (
    <a
      className="wa-float"
      href={whatsappLink(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { from: 'float' })}
    >
      <span className="wa-ic">
        <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2.1c1.8 1 3.9 1.5 6 1.5 7 0 12.5-5.5 12.5-12.5S23 3 16 3Zm0 22.7c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4.4 1.2 1.2-4.3-.3-.4a10 10 0 0 1-1.6-5.5C5.4 9.7 10.1 5 16 5s10.6 4.7 10.6 10.5S21.9 25.7 16 25.7Zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-1.9-.9-3.1-1.7-4.3-3.8-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-1.4 1.5-1.1 3.3.9 5.9 1.6 2 3.2 3.4 5.6 4.3 2.9 1.1 2.9.7 3.5.7.5 0 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
        </svg>
      </span>
      <span className="wa-txt">{t('float')}</span>

      <style jsx>{`
        .wa-float { position: fixed; right: 20px; bottom: 20px; z-index: 90; display: flex; align-items: center; background: #25D366; color: #062b14; border-radius: 30px; box-shadow: 0 12px 32px rgba(37,211,102,.4); overflow: hidden; transition: .25s; }
        .wa-ic { width: 56px; height: 56px; flex: 0 0 auto; display: flex; align-items: center; justify-content: center; }
        .wa-ic svg { width: 30px; height: 30px; }
        .wa-txt { max-width: 0; white-space: nowrap; overflow: hidden; font-weight: 700; font-size: 14.5px; transition: max-width .3s ease, padding .3s ease; padding: 0; }
        .wa-float:hover .wa-txt, .wa-float:focus-visible .wa-txt { max-width: 240px; padding-right: 20px; }
        @media (max-width: 520px) { .wa-float { right: 16px; bottom: 16px; } .wa-ic { width: 52px; height: 52px; } }
      `}</style>
    </a>
  );
}
