import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';

type Step = { title: string; desc: string };

export function HomeService() {
  const t = useTranslations('service');
  const steps = t.raw('steps') as Step[];
  return (
    <section className="sec sec-dark" id="servicio">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} center />
        <div className="steps-grid">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <div className="step">
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
