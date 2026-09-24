import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/PageHeader';
import { SolutionCard, Solution } from '@/components/SolutionCard';
import { FinalCTA } from '@/components/FinalCTA';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'solutions' });
  return { title: t('pageTitle'), description: t('sub') };
}

export default function SolucionesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <SolucionesContent />;
}

function SolucionesContent() {
  const t = useTranslations('solutions');
  const items = t.raw('items') as Solution[];
  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('pageTitle')} intro={t('pageIntro')} />

      <section className="sec sec-paper">
        <div className="container-wrap">
          <div className="sol-grid">
            {items.map((s, i) => (
              <SolutionCard key={s.name} s={s} delay={(i % 2) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
