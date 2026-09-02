import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/PageHeader';
import { HomeWhy } from '@/components/sections/HomeWhy';
import { FinalCTA } from '@/components/FinalCTA';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'why' });
  return { title: t('pageTitle'), description: t('sub') };
}

export default function PorQueIronPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations('why');
  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('pageTitle')} intro={t('sub')} />
      <HomeWhy />
      <FinalCTA />
    </>
  );
}
