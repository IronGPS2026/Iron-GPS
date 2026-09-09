import { Reveal } from './Reveal';

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="page-header">
      <div className="grid-bg-hero" />
      <div className="container-wrap ph-inner">
        <Reveal>
          <span className="eyebrow"><span className="tick" />// {eyebrow}</span>
          <h1>{title}</h1>
          {intro ? <p className="ph-intro">{intro}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}
