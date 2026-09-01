import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';
import { WhatsAppInline } from '@/components/WhatsAppInline';
import { siteConfig } from '@/lib/config';
import { Icon } from '@/components/Icon';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.contact' });
  return { title: t('title'), description: t('intro') };
}

export default function ContactoPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <ContactoContent locale={locale} />;
}

function ContactoContent({ locale }: { locale: string }) {
  const t = useTranslations('pages.contact');
  const f = useTranslations('form');
  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('heading')} intro={t('intro')} />
      <section className="sec sec-paper">
        <div className="container-wrap conv-grid">
          <div className="contact-cards">
            <div className="cc">
              <div className="cc-ic wa"><Icon name="check" /></div>
              <h4>{t('whatsappTitle')}</h4>
              <p>{t('whatsappDesc')}</p>
              <WhatsAppInline label={t('whatsappBtn')} />
            </div>
            <div className="cc">
              <div className="cc-ic"><Icon name="chart" /></div>
              <h4>{t('emailTitle')}</h4>
              <p><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></p>
            </div>
            <div className="cc">
              <div className="cc-ic"><Icon name="lock" /></div>
              <h4>{t('portalTitle')}</h4>
              <p>{t('portalDesc')}</p>
              <a className="cc-link" href={siteConfig.clientPortalUrl} target="_blank" rel="noopener noreferrer">{t('portalBtn')} ↗</a>
            </div>
            <div className="cc">
              <div className="cc-ic"><Icon name="pin" /></div>
              <h4>{t('locationTitle')}</h4>
              <p>{t('locationDesc')}</p>
            </div>
          </div>

          <div className="form-card">
            <h2 style={{ fontSize: 24 }}>{f('title')}</h2>
            <p style={{ color: 'var(--muted)', marginTop: 8, marginBottom: 24 }}>{f('sub')}</p>
            <ContactForm source="contacto" />
          </div>
        </div>
      </section>

      <style>{`
        .conv-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 40px; align-items: start; }
        .contact-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .cc { background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 22px; }
        .cc-ic { width: 44px; height: 44px; border-radius: 10px; background: var(--navy-950); color: var(--data); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
        .cc-ic.wa { background: #25D366; color: #062b14; }
        .cc-ic :global(svg) { width: 22px; height: 22px; }
        .cc h4 { font-size: 16px; color: var(--ink); }
        .cc p { color: var(--muted); font-size: 14px; margin-top: 6px; }
        .cc p a, .cc-link { color: var(--signal); font-weight: 600; font-size: 14px; }
        .cc-link { display: inline-block; margin-top: 10px; }
        .form-card { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 32px; box-shadow: var(--shadow-1); }
        @media (max-width: 980px) { .conv-grid { grid-template-columns: 1fr; gap: 28px; } }
        @media (max-width: 520px) { .contact-cards { grid-template-columns: 1fr; } .form-card { padding: 24px; } }
      `}</style>
    </>
  );
}
