import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

type QA = { q: string; a: string };

export function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as QA[];

  return (
    <section className="sec sec-paper" id="faq">
      <div className="container-wrap">
        <SectionHeading eyebrow="FAQ" title={t('title')} center dark />
        <div className="faq-list">
          {items.map((qa, i) => (
            <Reveal key={i} as="div">
              <details className="qa" open={i === 0}>
                <summary>
                  {qa.q}
                  <span className="pm" aria-hidden="true">+</span>
                </summary>
                <div className="ans">{qa.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
