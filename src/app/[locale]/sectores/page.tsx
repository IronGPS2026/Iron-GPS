import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/PageHeader';
import { SectorCard, Sector } from '@/components/SectorCard';
import { FinalCTA } from '@/components/FinalCTA';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'sectors' });
  return { title: t('pageTitle'), description: t('sub') };
}

export default function SectoresPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <SectoresContent />;
}

function SectoresContent() {
  const t = useTranslations('sectors');
  const items = t.raw('items') as Sector[];
  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('pageTitle')} intro={t('pageIntro')} />
      <section className="sec sec-paper">
        <div className="container-wrap">
          <div className="sec-grid">
            {items.map((s, i) => (
              <SectorCard key={s.slug} s={s} cta={t('seeSolution')} delay={(i % 3) * 0.06} />
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
