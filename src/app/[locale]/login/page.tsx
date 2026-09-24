import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { LoginForm } from '@/components/LoginForm';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'login' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function LoginPage() {
  return <LoginForm />;
}
