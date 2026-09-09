import { Reveal } from './Reveal';

export type SolutionLine = 'fleet' | 'vision' | 'security' | 'iot' | 'smart' | 'safe';

export type Solution = {
  line: SolutionLine;
  name: string;
  who: string;
  desc: string;
  tags: string[];
};

const LINE_LABEL: Record<SolutionLine, string> = {
  fleet: 'IRON FLEET',
  vision: 'IRON VISION',
  security: 'IRON SECURITY',
  iot: 'IRON CONNECT',
  smart: 'IRON SMART',
  safe: 'IRON SAFE',
};

export function SolutionCard({ s, delay = 0 }: { s: Solution; delay?: number }) {
  return (
    <Reveal delay={delay} className={`sol ${s.line}`}>
      <span className="accent" />
      <span className="line-badge">{LINE_LABEL[s.line]}</span>
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
