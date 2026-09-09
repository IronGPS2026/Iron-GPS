import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/PageHeader';
import { CapabilitiesFull } from '@/components/sections/CapabilitiesFull';
import { FinalCTA } from '@/components/FinalCTA';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'platform' });
  return { title: t('pageTitle'), description: t('sub') };
}

export default async function PlataformaPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'platform' });
  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('pageTitle')} intro={t('pageIntro')} />
      <CapabilitiesFull withHeading={false} />
      <FinalCTA />
    </>
  );
}
