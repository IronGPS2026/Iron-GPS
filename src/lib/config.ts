/**
 * Configuración central del sitio.
 * Todo lo que cambia entre entornos vive aquí, leído de variables de entorno.
 * Cambia los valores en tu archivo .env.local (ver .env.example).
 */

export const siteConfig = {
  name: 'IRON GPS',
  domain: 'iron-gps.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.iron-gps.com',

  // WhatsApp: número internacional sin "+" ni espacios (ej: 573000000000).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573003383042',

  // Contacto
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'comercial@iron-gps.com',
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+57 300 338 3042',

  // Portal de clientes (plataforma de rastreo).
  clientPortalUrl:
    process.env.NEXT_PUBLIC_CLIENT_PORTAL_URL || 'https://plataforma.iron-gps.com',

  // Analytics (vacío = desactivado).
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',

  country: 'Colombia',
} as const;

/** Mensajes prellenados de WhatsApp por idioma. */
const waMessages: Record<string, string> = {
  es: 'Hola, quiero conocer las soluciones de IRON GPS para mi empresa.',
  en: "Hi, I'd like to know more about IRON GPS solutions for my company.",
};

/** Construye el enlace de WhatsApp con mensaje prellenado. */
export function whatsappLink(locale: string = 'es', customMessage?: string) {
  const text = customMessage || waMessages[locale] || waMessages.es;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
