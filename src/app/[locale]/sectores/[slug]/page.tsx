import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { PageHeader } from '@/components/PageHeader';
import { SolutionCard, Solution } from '@/components/SolutionCard';
import { Reveal } from '@/components/Reveal';
import { Icon, IconName } from '@/components/Icon';
import { CTA } from '@/components/CTA';
import { FinalCTA } from '@/components/FinalCTA';

type Sector = { icon: IconName; slug: string; title: string; desc: string };

// Soluciones recomendadas por sector (referencia a los 4 productos reales).
const RECOMMENDED: Record<string, string[]> = {
  'vehiculos-particulares': ['IRON TRACK', 'IRON SECURE'],
  'flotas-de-carga': ['IRON CONTROL', 'IRON SECURE'],
  'vehiculos-comerciales': ['IRON TRACK', 'IRON CONTROL'],
  'flotas-empresariales': ['IRON CONTROL', 'IRON VISION'],
  'transporte-logistica': ['IRON CONTROL', 'IRON VISION'],
  'activos-maquinaria': ['IRON TRACK', 'IRON SECURE'],
};

// Capacidades destacadas por sector (íconos del set existente).
const CAPS: Record<string, IconName[]> = {
  'vehiculos-particulares': ['pin', 'shield', 'bell', 'lock'],
  'flotas-de-carga': ['route', 'pulse', 'shield', 'chart'],
  'vehiculos-comerciales': ['pin', 'user', 'route', 'bell'],
  'flotas-empresariales': ['chart', 'wrench', 'user', 'pulse'],
  'transporte-logistica': ['route', 'video', 'shield', 'chart'],
  'activos-maquinaria': ['box', 'pin', 'wrench', 'bell'],
};

export function generateStaticParams() {
  const slugs = Object.keys(RECOMMENDED);
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

async function getSector(locale: string, slug: string): Promise<Sector | undefined> {
  const t = await getTranslations({ locale, namespace: 'sectors' });
  const items = t.raw('items') as Sector[];
  return items.find((s) => s.slug === slug);
}

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const sector = await getSector(locale, slug);
  if (!sector) return {};
  return { title: sector.title, description: sector.desc };
}

export default async function SectorDetail({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  setRequestLocale(locale);
  const sector = await getSector(locale, slug);
  if (!sector) notFound();
  return <SectorContent slug={slug} sector={sector!} />;
}

function SectorContent({ slug, sector }: { slug: string; sector: Sector }) {
  const t = useTranslations('sectors');
  const c = useTranslations('common');
  const st = useTranslations('solutions');
  const allSolutions = st.raw('items') as Solution[];
  const recommended = allSolutions.filter((s) => (RECOMMENDED[slug] || []).includes(s.name));
  const caps = CAPS[slug] || ['pin', 'shield', 'chart', 'bell'];

  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={sector.title} intro={sector.desc} />

      <section className="sec sec-paper">
        <div className="container-wrap">
          <Reveal className="sec-head">
            <span className="eyebrow dark"><span className="tick" />// {t('seeSolution')}</span>
            <h2 style={{ marginTop: 16 }}>{c('relatedSolutions')}</h2>
          </Reveal>
          <div className="sol-grid">
            {recommended.map((s, i) => (
              <SolutionCard key={s.name} s={s} delay={(i % 2) * 0.08} />
            ))}
          </div>

          <div className="mini-caps">
            {caps.map((name) => (
              <div key={name} className="mini-cap">
                <span className="mc-ic"><Icon name={name} /></span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <CTA href="/contacto" size="lg" event="advisory_click" eventParams={{ from: `sector_${slug}` }} arrow>
              {c('requestAdvisory')}
            </CTA>
            <CTA href="/sectores" variant="ghost" size="lg">{c('allSectors')}</CTA>
          </div>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .mini-caps { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
        .mini-cap { width: 52px; height: 52px; border-radius: 12px; background: var(--navy-950); color: var(--data); display: flex; align-items: center; justify-content: center; }
        .mini-cap :global(svg) { width: 24px; height: 24px; }
      `}</style>
    </>
  );
}
