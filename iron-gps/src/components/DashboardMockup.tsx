import { useTranslations } from 'next-intl';

/** Mockup ilustrativo del centro de control (variante seguridad). */
export function SecurityMockup() {
  const t = useTranslations('security');
  const c = useTranslations('common');
  return (
    <div className="dash">
      <span className="illus-tag">{c('illustrative')}</span>
      <div className="db-top">
        <span className="db-dot" style={{ background: '#E5323B' }} />
        <span className="db-dot" style={{ background: '#F59E0B' }} />
        <span className="db-dot" style={{ background: '#16A34A' }} />
        <span className="db-title">iron.command — centro de control</span>
      </div>
      <div className="db-body">
        <div className="db-map">
          <svg viewBox="0 0 240 250" style={{ width: '100%', height: '100%' }} aria-hidden="true">
            <g stroke="rgba(255,255,255,.05)"><path d="M0 60H240M0 120H240M0 180H240M60 0V250M120 0V250M180 0V250" /></g>
            <circle cx="150" cy="90" r="52" fill="rgba(229,50,59,.10)" stroke="rgba(229,50,59,.4)" strokeDasharray="3 5" />
            <path d="M20 210 C70 170 90 150 140 140 S200 90 220 50" fill="none" stroke="#35C6E8" strokeWidth="2.5" />
            <circle cx="140" cy="140" r="5" fill="#16A34A" />
            <circle cx="150" cy="90" r="6" fill="#E5323B" />
            <circle cx="20" cy="210" r="4" fill="#35C6E8" />
          </svg>
        </div>
        <div className="db-side">
          <div className="db-stat"><div className="l">{t('dbResponse')}</div><div className="v">1:12<small> min</small></div></div>
          <div className="db-row"><span>TRK-014</span><span className="st mov">{t('dbMoving')}</span></div>
          <div className="db-row"><span>TRK-021</span><span className="st stp">{t('dbStopped')}</span></div>
          <div className="db-row"><span>TRK-033</span><span className="st alr">{t('dbAlert')}</span></div>
        </div>
      </div>
    </div>
  );
}

/** Mockup ilustrativo de analítica / productividad. */
export function AnalyticsMockup() {
  const t = useTranslations('efficiency');
  const c = useTranslations('common');
  return (
    <div className="dash">
      <span className="illus-tag">{c('illustrative')}</span>
      <div className="db-top">
        <span className="db-dot" style={{ background: '#E5323B' }} />
        <span className="db-dot" style={{ background: '#F59E0B' }} />
        <span className="db-dot" style={{ background: '#16A34A' }} />
        <span className="db-title">iron.analytics — productividad</span>
      </div>
      <div className="db-body" style={{ gridTemplateColumns: '1fr' }}>
        <div className="db-side" style={{ gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div className="db-stat"><div className="l">{t('km')}</div><div className="v">1,284</div></div>
            <div className="db-stat"><div className="l">{t('idle')}</div><div className="v">8.4<small>%</small></div></div>
          </div>
          <div className="db-stat">
            <div className="l">{t('util')}</div>
            <svg viewBox="0 0 300 70" style={{ width: '100%', height: 60, marginTop: 8 }} aria-hidden="true">
              <polyline points="0,55 40,48 80,50 120,36 160,40 200,26 240,22 300,12" fill="none" stroke="#35C6E8" strokeWidth="2.5" />
              <polygon points="0,55 40,48 80,50 120,36 160,40 200,26 240,22 300,12 300,70 0,70" fill="rgba(53,198,232,.12)" />
              <circle cx="300" cy="12" r="4" fill="#35C6E8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
