'use client';

import { Link } from '@/i18n/routing';
import { ReactNode } from 'react';
import { trackEvent, ConversionEvent } from '@/lib/analytics';

/** Botón/enlace interno con tracking opcional de conversión. */
export function CTA({
  href,
  children,
  variant = 'primary',
  size = 'md',
  onDark = false,
  event,
  eventParams,
  arrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'md' | 'lg';
  onDark?: boolean;
  event?: ConversionEvent;
  eventParams?: Record<string, any>;
  arrow?: boolean;
}) {
  const cls = [
    'btn',
    variant === 'primary' ? 'btn-primary' : 'btn-ghost',
    onDark && variant === 'ghost' ? 'on-dark' : '',
    size === 'lg' ? 'btn-lg' : '',
  ].filter(Boolean).join(' ');

  return (
    <Link href={href} className={cls} onClick={() => event && trackEvent(event, eventParams)}>
      {children}
      {arrow ? <span className="arrow" aria-hidden="true">→</span> : null}
    </Link>
  );
}
