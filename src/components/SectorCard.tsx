import { Link } from '@/i18n/routing';
import { Reveal } from './Reveal';
import { Icon, IconName } from './Icon';

export type Sector = {
  icon: IconName;
  slug: string;
  title: string;
  desc: string;
};

export function SectorCard({ s, cta, delay = 0 }: { s: Sector; cta: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/sectores/${s.slug}`} className="sector">
        <span className="ic"><Icon name={s.icon} /></span>
        <h4>{s.title}</h4>
        <p>{s.desc}</p>
        <span className="go">{cta} →</span>
      </Link>
    </Reveal>
  );
}
