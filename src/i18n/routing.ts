import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Idiomas soportados. El español es el idioma principal.
  locales: ['es', 'en'],
  defaultLocale: 'es',
  // Siempre mostrar el prefijo de idioma en la URL: /es/... y /en/...
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];

// Wrappers de navegación conscientes del idioma (Link, useRouter, etc.)
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
