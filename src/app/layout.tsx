import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

// Fuentes auto-hospedadas (Fontsource): funcionan sin depender de Google Fonts
// en build ni en runtime — mejor performance y privacidad.
import '@fontsource/archivo/500.css';
import '@fontsource/archivo/600.css';
import '@fontsource/archivo/700.css';
import '@fontsource/archivo/800.css';
import '@fontsource/archivo/900.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
};

// Root layout pass-through: el <html> y <body> reales viven en app/[locale]/layout.tsx
// (patrón recomendado por next-intl para enrutamiento por idioma).
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
