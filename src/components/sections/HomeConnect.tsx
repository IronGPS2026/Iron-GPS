import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { Icon, IconName } from '../Icon';

type Group = { icon: IconName; title: string; items: string[] };

export function HomeConnect() {
  const t = useTranslations('connect');
  const groups = t.raw('groups') as Group[];
  return (
    <section className="sec sec-white" id="conectamos">
      <div className="container-wrap">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} dark />
        <div className="connect-grid">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 5) * 0.05}>
              <div className="connect-card">
                <span className="connect-ic"><Icon name={g.icon} /></span>
                <h4>{g.title}</h4>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="connect-note">{t('note')}</p>
      </div>

      <style>{`
        .connect-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
        .connect-card { background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius); padding: 22px 18px; height: 100%; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
        .connect-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-1); border-color: var(--signal); }
        .connect-ic { width: 40px; height: 40px; border-radius: 10px; background: var(--navy-950); color: var(--data); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
        .connect-ic :global(svg) { width: 20px; height: 20px; }
        .connect-card h4 { font-size: 15.5px; color: var(--ink); margin-bottom: 10px; letter-spacing: -.01em; }
        .connect-card ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
        .connect-card li { font-size: 13px; color: var(--ink-2); line-height: 1.4; }
        .connect-note { margin-top: 22px; font-family: var(--font-mono); font-size: 12px; color: var(--muted-2); }
        @media (max-width: 980px) { .connect-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 640px) { .connect-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  );
}
