import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/lib/config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Analytics } from '@/components/Analytics';
import { JsonLd } from '@/components/JsonLd';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const isEs = locale === 'es';
  return {
    title: {
      default: t('titleDefault'),
      template: t('titleTemplate'),
    },
    description: t('description'),
    applicationName: siteConfig.name,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
        'x-default': '/es',
      },
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: isEs ? 'es_CO' : 'en_US',
      url: `${siteConfig.url}/${locale}`,
      title: t('titleDefault'),
      description: t('description'),
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: t('ogAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('titleDefault'),
      description: t('description'),
      images: ['/og-image.png'],
    },
    icons: {
      icon: [
        { url: '/icon.png', type: 'image/png', sizes: '512x512' },
        { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      ],
      apple: '/apple-icon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <JsonLd locale={locale} />
          <Header locale={locale} />
          <main id="contenido">{children}</main>
          <Footer locale={locale} />
          <WhatsAppButton locale={locale} />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
