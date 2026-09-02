import { Reveal } from './Reveal';

export type Solution = {
  line: 'fleet' | 'security';
  name: string;
  who: string;
  desc: string;
  tags: string[];
};

export function SolutionCard({ s, delay = 0 }: { s: Solution; delay?: number }) {
  return (
    <Reveal delay={delay} className={`sol ${s.line}`}>
      <span className="accent" />
      <span className="line-badge">{s.line === 'fleet' ? 'IRON FLEET' : 'IRON SECURITY'}</span>
      <h3>{s.name}</h3>
      <div className="who">{s.who}</div>
      <p className="desc">{s.desc}</p>
      <ul className="tags">
        {s.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </Reveal>
  );
}
