import { useTranslations } from 'next-intl';
import { Icon } from '../Icon';

/** Barra de confianza: diferenciadores factuales, justo debajo del hero. */
export function TrustBar() {
  const t = useTranslations('trust');
  const items = t.raw('items') as string[];
  return (
    <section className="trustbar" aria-label="Diferenciadores">
      <div className="container-wrap tb-grid">
        {items.map((item) => (
          <div key={item} className="tb-item">
            <span className="tb-ic"><Icon name="check" /></span>
            {item}
          </div>
        ))}
      </div>
      <style>{`
        .trustbar { background: var(--navy-950); border-bottom: 1px solid var(--line-dark); }
        .tb-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; padding-top: 20px; padding-bottom: 20px; }
        .tb-item { display: flex; align-items: center; gap: 10px; color: #cdd8e2; font-size: 14.5px; font-weight: 500; }
        .tb-ic { flex: 0 0 auto; width: 26px; height: 26px; border-radius: 7px; background: rgba(21,128,245,.14); color: var(--signal-soft); display: flex; align-items: center; justify-content: center; }
        .tb-ic :global(svg) { width: 15px; height: 15px; }
        @media (max-width: 760px) { .tb-grid { grid-template-columns: 1fr 1fr; gap: 14px; } .tb-item { font-size: 13.5px; } }
      `}</style>
    </section>
  );
}
