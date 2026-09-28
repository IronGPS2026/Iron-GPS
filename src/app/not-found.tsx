import Link from 'next/link';

// not-found global. Como el root layout es pass-through, aquí renderizamos el <html>.
export default function NotFound() {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: '#060F1A', color: '#fff', fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: 24 }}>
          <p style={{ fontFamily: 'monospace', color: '#35C6E8', letterSpacing: '.2em' }}>ERROR 404</p>
          <h1 style={{ fontSize: 40, margin: '12px 0' }}>Página no encontrada</h1>
          <p style={{ color: '#a9bccc', marginBottom: 24 }}>La ruta que buscas no existe o fue movida.</p>
          <Link href="/es" style={{ background: '#E5323B', color: '#fff', padding: '14px 24px', borderRadius: 11, textDecoration: 'none', fontWeight: 600 }}>
            Volver al inicio
          </Link>
        </div>
      </body>
    </html>
  );
}
