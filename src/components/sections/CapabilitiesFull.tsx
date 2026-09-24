import { useTranslations } from 'next-intl';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { Icon, IconName } from '../Icon';

type Group = { icon: IconName; title: string; items: string[] };

/** Ecosistema completo de capacidades, agrupado en categorías comerciales. */
export function CapabilitiesFull({ withHeading = true }: { withHeading?: boolean }) {
  const t = useTranslations('platform');
  const groups = t.raw('groups') as Group[];
  return (
    <section className="sec sec-paper" id="plataforma">
      <div className="container-wrap">
        {withHeading ? (
          <SectionHeading eyebrow={t('eyebrow')} title={t('title')} sub={t('sub')} dark />
        ) : null}
        <div className="plat-grid">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.06}>
              <div className="plat-card">
                <div className="plat-head">
                  <span className="plat-ic"><Icon name={g.icon} /></span>
                  <h3>{g.title}</h3>
                </div>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>
                      <span className="pl-check"><Icon name="check" /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .plat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .plat-card { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 24px; height: 100%; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
        .plat-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-2); border-color: var(--signal); }
        .plat-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .plat-ic { flex: 0 0 auto; width: 44px; height: 44px; border-radius: 11px; background: var(--navy-950); color: var(--data); display: flex; align-items: center; justify-content: center; }
        .plat-ic :global(svg) { width: 22px; height: 22px; }
        .plat-head h3 { font-size: 17px; color: var(--ink); letter-spacing: -.01em; }
        .plat-card ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .plat-card li { display: flex; gap: 10px; align-items: flex-start; font-size: 14px; color: var(--ink-2); line-height: 1.45; }
        .pl-check { flex: 0 0 auto; width: 20px; height: 20px; border-radius: 6px; background: rgba(21,128,245,.12); color: var(--signal); display: flex; align-items: center; justify-content: center; margin-top: 1px; }
        .pl-check :global(svg) { width: 13px; height: 13px; }
        @media (max-width: 900px) { .plat-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .plat-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
