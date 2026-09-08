'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { whatsappLink } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';

const VEHICLE_RANGES = ['1', '2–10', '11–50', '51–100', '101–250', '251–500', '500+'];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm({ source = 'contacto' }: { source?: string }) {
  const t = useTranslations('form');
  const params = useParams();
  const locale = (params.locale as string) || 'es';
  const [status, setStatus] = useState<Status>('idle');
  const vehicleTypes = t.raw('vehicleTypes') as string[];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale, source }),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus('success');
      trackEvent('lead_submit', { source });
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-result ok" role="status">
        <div className="fr-ic" aria-hidden="true">✓</div>
        <h3>{t('successTitle')}</h3>
        <p>{t('successBody')}</p>
        <a className="btn btn-primary" href={whatsappLink(locale)} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_click', { from: 'form_success' })}>
          WhatsApp
        </a>
        <style jsx>{resultStyles}</style>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate>
      <div className="grid2">
        <div className="field">
          <label htmlFor="name">{t('name')} <span className="req">*</span></label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="company">{t('company')}</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="role">{t('role')}</label>
          <input id="role" name="role" autoComplete="organization-title" />
        </div>
        <div className="field">
          <label htmlFor="email">{t('email')} <span className="req">*</span></label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">{t('phone')} <span className="req">*</span></label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="city">{t('city')}</label>
          <input id="city" name="city" autoComplete="address-level2" />
        </div>
        <div className="field">
          <label htmlFor="vehicles">{t('vehicles')}</label>
          <select id="vehicles" name="vehicles" defaultValue="">
            <option value="" disabled>{t('vehiclesSelect')}</option>
            {VEHICLE_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="vehicleType">{t('vehicleType')}</label>
          <select id="vehicleType" name="vehicleType" defaultValue="">
            <option value="" disabled>{t('vehicleTypeSelect')}</option>
            {vehicleTypes.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="manage">{t('manage')}</label>
        <input id="manage" name="manage" />
      </div>

      <div className="field">
        <label htmlFor="message">{t('message')} <span className="opt">({t('optional')})</span></label>
        <textarea id="message" name="message" rows={4} />
      </div>

      {status === 'error' ? (
        <div className="form-error" role="alert">
          <strong>{t('errorTitle')}</strong> {t('errorBody')}{' '}
          <a href={whatsappLink(locale)} target="_blank" rel="noopener noreferrer">WhatsApp →</a>
        </div>
      ) : null}

      <div className="form-actions">
        <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? t('submitting') : t('submit')}
        </button>
        <span className="req-note">{t('requiredNote')}</span>
      </div>

      <style jsx>{`
        .lead-form { display: flex; flex-direction: column; gap: 18px; }
        .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .opt { color: var(--muted-2); font-weight: 400; font-size: 12.5px; }
        .form-actions { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-top: 4px; }
        .req-note { font-size: 12.5px; color: var(--muted-2); font-family: var(--font-mono); }
        .form-error { background: rgba(220,38,38,.08); border: 1px solid rgba(220,38,38,.3); color: #b42318; border-radius: 10px; padding: 12px 14px; font-size: 14px; }
        .form-error a { color: #b42318; font-weight: 600; }
        @media (max-width: 600px) { .grid2 { grid-template-columns: 1fr; } }
      `}</style>
    </form>
  );
}

const resultStyles = `
  .form-result { text-align: center; padding: 40px 24px; border: 1px solid var(--line); border-radius: var(--radius); background: #fff; }
  .form-result .fr-ic { width: 56px; height: 56px; border-radius: 50%; background: rgba(22,163,74,.12); color: var(--ok); display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 18px; }
  .form-result h3 { font-size: 22px; color: var(--ink); }
  .form-result p { color: var(--muted); margin: 10px auto 20px; max-width: 42ch; }
`;
