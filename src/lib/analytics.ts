'use client';

import { siteConfig } from './config';

/**
 * Eventos de conversión.
 * Envía a Google Analytics 4 (gtag) y a Meta Pixel (fbq) si están configurados.
 * Si no hay IDs, no hace nada (fail-safe).
 */
export type ConversionEvent =
  | 'whatsapp_click'
  | 'lead_submit'
  | 'demo_request'
  | 'advisory_click'
  | 'client_portal_click'
  | 'language_change';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(event: ConversionEvent, params?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (siteConfig.gaMeasurementId && typeof window.gtag === 'function') {
    window.gtag('event', event, params || {});
  }

  // Meta Pixel — mapeo a eventos estándar donde aplica.
  if (siteConfig.metaPixelId && typeof window.fbq === 'function') {
    const standard: Partial<Record<ConversionEvent, string>> = {
      lead_submit: 'Lead',
      demo_request: 'Lead',
      whatsapp_click: 'Contact',
      advisory_click: 'Contact',
    };
    const mapped = standard[event];
    if (mapped) window.fbq('track', mapped, params || {});
    else window.fbq('trackCustom', event, params || {});
  }
}
