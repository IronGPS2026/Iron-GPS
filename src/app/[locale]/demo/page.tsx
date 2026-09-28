import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';
import { Icon } from '@/components/Icon';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.demo' });
  return { title: t('title'), description: t('intro') };
}

export default function DemoPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <DemoContent />;
}

function DemoContent() {
  const t = useTranslations('pages.demo');
  const f = useTranslations('form');
  const bullets = t.raw('bullets') as string[];
  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('heading')} intro={t('intro')} />
      <section className="sec sec-paper">
        <div className="container-wrap conv-grid">
          <div>
            <ul className="conv-bullets">
              {bullets.map((b) => (
                <li key={b}><span className="cb-ic"><Icon name="check" /></span>{b}</li>
              ))}
            </ul>
          </div>
          <div className="form-card">
            <h2 style={{ fontSize: 24 }}>{f('title')}</h2>
            <p style={{ color: 'var(--muted)', marginTop: 8, marginBottom: 24 }}>{f('sub')}</p>
            <ContactForm source="demo" />
          </div>
        </div>
      </section>

      <style>{`
        .conv-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 40px; align-items: start; }
        .conv-bullets { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
        .conv-bullets li { display: flex; gap: 12px; align-items: flex-start; font-size: 16px; color: var(--ink-2); }
        .cb-ic { flex: 0 0 auto; width: 28px; height: 28px; border-radius: 8px; background: rgba(22,163,74,.12); color: var(--ok); display: flex; align-items: center; justify-content: center; }
        .cb-ic :global(svg) { width: 16px; height: 16px; }
        .form-card { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 32px; box-shadow: var(--shadow-1); }
        @media (max-width: 860px) { .conv-grid { grid-template-columns: 1fr; gap: 28px; } .form-card { padding: 24px; } }
      `}</style>
    </>
  );
}
