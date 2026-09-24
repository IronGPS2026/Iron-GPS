'use client';

import { useParams } from 'next/navigation';
import { whatsappLink } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';

/** Enlace de WhatsApp en línea (para tarjetas de contacto). */
export function WhatsAppInline({ label }: { label: string }) {
  const params = useParams();
  const locale = (params.locale as string) || 'es';
  return (
    <a
      className="btn btn-primary"
      style={{ marginTop: 12, background: '#25D366', color: '#062b14', boxShadow: '0 8px 20px rgba(37,211,102,.3)' }}
      href={whatsappLink(locale)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('whatsapp_click', { from: 'contact_card' })}
    >
      {label}
    </a>
  );
}
