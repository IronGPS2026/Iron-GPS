import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { Icon, IconName } from './Icon';

export type SolutionLine = 'tracking' | 'fleet' | 'fuel' | 'video' | 'operations';

export type Solution = {
  line: SolutionLine;
  name: string;
  who: string;
  desc: string;
  tags: string[];
};

const LINE_ICON: Record<SolutionLine, IconName> = {
  tracking: 'pin',
  fleet: 'wrench',
  fuel: 'pulse',
  video: 'video',
  operations: 'route',
};

export function SolutionCard({ s, delay = 0 }: { s: Solution; delay?: number }) {
  const t = useTranslations('solutions');
  const categories = t.raw('categoryLabels') as Record<SolutionLine, string>;

  return (
    <Reveal delay={delay} className={`sol ${s.line}`}>
      <div className="sol-head">
        <span className="sol-ic"><Icon name={LINE_ICON[s.line]} /></span>
        <span className="sol-cat">{categories[s.line]}</span>
      </div>

      <h3>{s.name}</h3>
      <div className="who">{s.who}</div>
      <p className="desc">{s.desc}</p>

      <div className="sol-specs">
        <span className="specs-label">{t('includes')}</span>
        <ul>
          {s.tags.map((tag) => (
            <li key={tag}>
              <span className="specs-check"><Icon name="check" /></span>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
