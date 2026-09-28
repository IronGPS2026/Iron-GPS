import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/lib/config';

const ROUTES = [
  '',
  '/soluciones',
  '/plataforma',
  '/tecnologia',
  '/sectores',
  '/sectores/vehiculos-particulares',
  '/sectores/flotas-de-carga',
  '/sectores/vehiculos-comerciales',
  '/sectores/flotas-empresariales',
  '/sectores/transporte-logistica',
  '/sectores/activos-maquinaria',
  '/nosotros',
  '/por-que-iron',
  '/demo',
  '/contacto',
  '/privacidad',
  '/terminos',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return ROUTES.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${base}/${locale}${route}`,
      lastModified: now,
      changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: route === '' ? 1 : route.startsWith('/soluciones') || route === '/contacto' || route === '/demo' ? 0.9 : 0.7,
      alternates: {
        languages: {
          es: `${base}/es${route}`,
          en: `${base}/en${route}`,
        },
      },
    }))
  );
}
