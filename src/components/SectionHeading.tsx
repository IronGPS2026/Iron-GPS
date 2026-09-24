import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={`sec-head ${center ? 'center' : ''}`}>
      <span className={`eyebrow ${dark ? 'dark' : ''}`} style={center ? { justifyContent: 'center' } : undefined}>
        <span className="tick" />// {eyebrow}
      </span>
      <h2>{title}</h2>
      {sub ? <p className="sub">{sub}</p> : null}
    </Reveal>
  );
}
