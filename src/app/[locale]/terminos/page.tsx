import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalPage } from '@/components/LegalPage';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.terms' });
  return { title: t('title'), robots: { index: true, follow: true } };
}

export default function TerminosPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <LegalPage ns="pages.terms" />;
}
