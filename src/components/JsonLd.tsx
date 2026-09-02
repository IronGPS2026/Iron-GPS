import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/lib/config';

/** Datos estructurados Schema.org: Organization + Service. Solo hechos verificables. */
export async function JsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'meta' });

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    logo: `${siteConfig.url}/icon.png`,
    description: t('description'),
    email: siteConfig.contactEmail,
    areaServed: { '@type': 'Country', name: 'Colombia' },
    // Cuando tengas redes sociales confirmadas, agrégalas en "sameAs":
    // sameAs: ['https://www.linkedin.com/company/...'],
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: locale === 'es' ? 'Gestión integral de movilidad y rastreo GPS' : 'Integral mobility management and GPS tracking',
    provider: { '@type': 'Organization', name: siteConfig.name },
    areaServed: { '@type': 'Country', name: 'Colombia' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    </>
  );
}
