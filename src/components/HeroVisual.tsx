import { useTranslations } from 'next-intl';
import { AnimatedNumber } from './AnimatedNumber';

/** Composición "torre de control": mapa + telemetría flotante en vivo. */
export function HeroVisual() {
  const t = useTranslations('hero');
  return (
    <div className="opsviz">
      <div className="map">
        <svg viewBox="0 0 460 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="route" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#35C6E8" />
              <stop offset="1" stopColor="#7FDDF2" />
            </linearGradient>
            <radialGradient id="geo" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="rgba(53,198,232,.18)" />
              <stop offset="1" stopColor="rgba(53,198,232,0)" />
            </radialGradient>
          </defs>
          <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
            <path d="M0 90 H460 M0 180 H460 M0 270 H460 M0 360 H460" />
            <path d="M90 0 V440 M180 0 V440 M270 0 V440 M360 0 V440" />
          </g>
          <circle cx="300" cy="150" r="86" fill="url(#geo)" />
          <circle cx="300" cy="150" r="86" fill="none" stroke="rgba(53,198,232,.35)" strokeDasharray="4 6" />
          <path d="M40 380 C120 300 130 250 210 230 S330 210 420 120" fill="none" stroke="url(#route)" strokeWidth="3" strokeLinecap="round" strokeDasharray="520" strokeDashoffset="520">
            <animate attributeName="stroke-dashoffset" from="520" to="0" dur="2.4s" fill="freeze" />
          </path>
          <circle r="5" fill="#fff">
            <animateMotion dur="4s" repeatCount="indefinite" path="M40 380 C120 300 130 250 210 230 S330 210 420 120" />
          </circle>
          <circle cx="40" cy="380" r="4" fill="#35C6E8" />
          <circle cx="420" cy="120" r="6" fill="#E5323B" />
        </svg>
      </div>
      <span className="hud-corner tl" /><span className="hud-corner tr" /><span className="hud-corner bl" /><span className="hud-corner br" />

      <div className="veh-chip ok vc-1">● TRK-014 · 62 km/h</div>
      <div className="veh-chip data vc-2">◐ TRK-021 · {t('vizIdle')}</div>
      <div className="veh-chip vc-3">▲ {t('vizAlert')}</div>

      <div className="float-card fc-a">
        <div className="fc-label">{t('vizActive')}</div>
        <div className="fc-value"><AnimatedNumber value={248} /><small> / 260</small></div>
      </div>
      <div className="float-card fc-b">
        <div className="fc-label">{t('vizTemp')}</div>
        <div className="fc-value">-4.2<small> °C</small></div>
      </div>
      <div className="float-card fc-c">
        <div>
          <div className="fc-label">{t('vizFuel')}</div>
          <div className="fc-value"><AnimatedNumber value={97} suffix="%" /></div>
        </div>
        <div className="spark">
          {[40, 65, 45, 80, 60, 95].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
