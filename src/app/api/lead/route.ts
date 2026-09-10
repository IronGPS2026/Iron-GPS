import { NextRequest, NextResponse } from 'next/server';

/**
 * Endpoint del formulario de leads.
 *
 * Está preparado para conectarse a tu CRM/automatización SIN cambiar el frontend:
 *  - Opción A (recomendada): define CRM_WEBHOOK_URL y reenviamos el lead como JSON.
 *    Funciona con HubSpot (workflows), Zapier, Make, n8n o tu propio endpoint.
 *  - Opción B: define RESEND_API_KEY + LEAD_NOTIFY_EMAIL para recibir el lead por email.
 *
 * Si no configuras nada, el lead se registra en los logs del servidor (útil en desarrollo)
 * y el formulario responde con éxito para no bloquear al usuario.
 */

type Lead = {
  name?: string;
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
  city?: string;
  vehicles?: string;
  vehicleType?: string;
  manage?: string;
  message?: string;
  locale?: string;
  source?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let lead: Lead;
  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Validación mínima del lado del servidor.
  if (!lead.name || !lead.email || !lead.phone || !isValidEmail(lead.email)) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 422 });
  }

  const payload = { ...lead, receivedAt: new Date().toISOString() };

  // --- Opción A: Webhook a CRM / automatización ---
  const webhook = process.env.CRM_WEBHOOK_URL;
  if (webhook) {
    try {
      const r = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error(`webhook status ${r.status}`);
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error('[lead] webhook error:', err);
      return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 });
    }
  }

  // --- Opción B: Email vía Resend ---
  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notify) {
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'IRON GPS <leads@iron-gps.com>',
          to: [notify],
          subject: `Nuevo lead · ${lead.name} (${lead.company || 's/empresa'})`,
          text: Object.entries(payload).map(([k, v]) => `${k}: ${v ?? ''}`).join('\n'),
        }),
      });
      if (!r.ok) throw new Error(`resend status ${r.status}`);
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error('[lead] resend error:', err);
      return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 });
    }
  }

  // --- Sin backend configurado: registrar y responder OK (modo desarrollo) ---
  console.log('[lead] (sin CRM_WEBHOOK_URL ni RESEND) nuevo lead:', payload);
  return NextResponse.json({ ok: true, note: 'logged_only' });
}
