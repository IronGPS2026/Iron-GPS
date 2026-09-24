# IRON GPS — Sitio web oficial

Sitio web corporativo y generador de leads de **IRON GPS** — *Gestión integral de movilidad*.
Construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS + next-intl (ES/EN) + Framer Motion**.

> **Diseño:** identidad oficial de IRON GPS — **azul eléctrico + plata metálica sobre negro**, con el logo real integrado (`public/logo-mark.png`, `public/logo-full.png`). Estilo *dark technology + premium corporate*. Tipografías Archivo / IBM Plex Sans / IBM Plex Mono **auto-hospedadas** vía Fontsource (no dependen de Google Fonts en build ni en runtime).
> **Contenido:** basado exclusivamente en la documentación entregada. No se inventaron clientes, cifras, certificaciones ni funcionalidades. Los datos de contacto y el portal son **variables configurables**.

---

## Tabla de contenido

1. [Qué se entrega](#1-qué-se-entrega)
2. [Requisitos](#2-requisitos)
3. [Ejecutar en local](#3-ejecutar-en-local)
4. [Variables de entorno](#4-variables-de-entorno)
5. [Desplegar en Vercel](#5-desplegar-en-vercel)
6. [Conectar el dominio www.iron-gps.com](#6-conectar-el-dominio-wwwiron-gpscom)
7. [Cómo cambiar cosas frecuentes](#7-cómo-cambiar-cosas-frecuentes)
8. [Conectar el formulario a un CRM](#8-conectar-el-formulario-a-un-crm)
9. [Analytics y eventos de conversión](#9-analytics-y-eventos-de-conversión)
10. [SEO](#10-seo)
11. [Estructura del proyecto](#11-estructura-del-proyecto)
12. [Notas de contenido y marca](#12-notas-de-contenido-y-marca)

---

## 1. Qué se entrega

- Sitio bilingüe **Español (principal) / Inglés**, con URLs `/es/...` y `/en/...` y selector `ES | EN`.
- **Páginas:** Home, Soluciones, Tecnología, Sectores (+ detalle por sector), Nosotros, Por qué IRON, Solicitar demo/asesoría, Contacto, Política de privacidad, Términos y condiciones.
- **Generación de leads:** formulario con segmentación (nº de vehículos, tipo, qué gestionar) + endpoint `/api/lead` listo para conectar a un CRM/webhook o email.
- **WhatsApp flotante** con mensaje prellenado y número configurable.
- **SEO técnico:** metadatos por idioma, Open Graph/Twitter, `hreflang`, `sitemap.xml`, `robots.txt`, JSON-LD (Organization + Service).
- **Performance:** componentes ligeros, fuentes optimizadas (`next/font`), animaciones con `prefers-reduced-motion`, imágenes en AVIF/WebP.
- **Accesibilidad:** HTML semántico, foco visible, `alt`/`aria` donde corresponde, contraste cuidado.

---

## 2. Requisitos

- **Node.js 18.17+** (recomendado 20 LTS).
- npm (incluido con Node). También funciona con pnpm o yarn.

---

## 3. Ejecutar en local

```bash
# 1. Instalar dependencias
npm install

# 2. Crear tu archivo de variables (a partir del ejemplo)
cp .env.example .env.local
#   luego edita .env.local con tus valores reales

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abre **http://localhost:3000** — te redirige a `/es`.
Prueba también **http://localhost:3000/en**.

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # linter
```

---

## 4. Variables de entorno

Todas están documentadas en **`.env.example`**. Copia a `.env.local` (local) o configúralas en Vercel (producción).

| Variable | Para qué sirve | Ejemplo |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública (SEO, sitemap, OG) | `https://www.iron-gps.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp (internacional, **sin `+`**) | `573001234567` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email comercial mostrado en el sitio | `comercial@iron-gps.com` |
| `NEXT_PUBLIC_CONTACT_PHONE` | Teléfono (opcional) | `+57 ...` |
| `NEXT_PUBLIC_CLIENT_PORTAL_URL` | URL del portal de clientes (plataforma de rastreo) | `https://plataforma.iron-gps.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (opcional) | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel (opcional) | `123456789012345` |
| `CRM_WEBHOOK_URL` | Webhook para recibir leads (HubSpot/Zapier/Make/CRM) | `https://...` |
| `RESEND_API_KEY` | (Alternativa) API key de Resend para recibir leads por email | `re_...` |
| `LEAD_NOTIFY_EMAIL` | Email que recibe los leads (si usas Resend) | `comercial@iron-gps.com` |

> Las variables `NEXT_PUBLIC_*` se leen en el navegador; las demás solo en el servidor.
> Si dejas vacías las de analytics, simplemente no se cargan esos scripts. Si dejas vacías las del CRM, el lead se registra en los logs del servidor y el formulario responde con éxito (útil para probar).

---

## 5. Desplegar en Vercel

Vercel es la opción recomendada (creadores de Next.js). Es gratis para este tipo de sitio.

**Opción A — desde GitHub (recomendada):**

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repositorio.
3. Vercel detecta Next.js automáticamente (no cambies el framework preset).
4. En **Environment Variables**, agrega las de la tabla de arriba (al menos `NEXT_PUBLIC_SITE_URL` y `NEXT_PUBLIC_WHATSAPP_NUMBER`).
5. Clic en **Deploy**. En ~1 minuto tendrás una URL `*.vercel.app`.

**Opción B — desde la terminal:**

```bash
npm i -g vercel
vercel            # primer deploy (preview)
vercel --prod     # deploy a producción
```

Cada push a la rama principal vuelve a desplegar automáticamente.

---

## 6. Conectar el dominio www.iron-gps.com

El dominio fue adquirido/configurado mediante **Google** (Google Domains / Squarespace Domains o Google Cloud DNS). Los pasos:

1. En Vercel: **Project → Settings → Domains → Add** e ingresa `iron-gps.com` (agrega también `www.iron-gps.com`). Vercel te mostrará los registros DNS exactos a crear.
2. En el panel de tu dominio (Google), crea los registros DNS que Vercel indique. Normalmente son:

   | Tipo | Nombre / Host | Valor |
   |---|---|---|
   | `A` | `@` (raíz `iron-gps.com`) | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   > Usa **exactamente** los valores que muestre tu panel de Vercel (pueden variar). Si tu proveedor no permite `CNAME` en la raíz, usa el registro `A` para la raíz y `CNAME` para `www`, como arriba.

3. Elige el dominio principal en Vercel (recomendado **`www.iron-gps.com`**) y deja que redirija la raíz a `www`.
4. Espera la propagación DNS (minutos a algunas horas). Vercel emite el **certificado HTTPS** automáticamente.
5. Asegúrate de que `NEXT_PUBLIC_SITE_URL=https://www.iron-gps.com` esté configurada en Vercel y **vuelve a desplegar** para que el sitemap y los metadatos usen el dominio correcto.

---

## 7. Cómo cambiar cosas frecuentes

**Cambiar el número de WhatsApp**
`.env.local` (o Vercel) → `NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567` (sin `+`, sin espacios). Afecta al botón flotante, al formulario y a las tarjetas de contacto. El mensaje prellenado se edita en `src/lib/config.ts` (objeto `waMessages`).

**Cambiar el email**
`.env.local` → `NEXT_PUBLIC_CONTACT_EMAIL=comercial@iron-gps.com`.

**Cambiar el portal de clientes**
`.env.local` → `NEXT_PUBLIC_CLIENT_PORTAL_URL=https://tu-plataforma...`. Afecta al botón "Acceso clientes" del header, footer y contacto.

**Actualizar textos / copy**
Todo el contenido vive en `src/messages/es.json` y `src/messages/en.json`. Edita el idioma correspondiente (ambos archivos tienen la misma estructura de claves). No necesitas tocar componentes.

**Reemplazar los mockups de dashboard por capturas reales**
Los tableros son ilustrativos (marcados como *"Visualización ilustrativa"*). Cuando tengas capturas reales, edita `src/components/DashboardMockup.tsx` y reemplaza los SVG por `<Image />` con tus imágenes en `public/`, y quita la etiqueta ilustrativa.

**Cambiar la imagen para redes (Open Graph)**
Reemplaza `public/og-image.png` (1200×630 px) por la tuya.

---

## 8. Conectar el formulario a un CRM

El endpoint `src/app/api/lead/route.ts` ya está listo. Elige una opción (**no necesitas tocar el frontend**):

- **Webhook (recomendado):** define `CRM_WEBHOOK_URL`. El lead se reenvía como JSON. Funciona con **HubSpot** (workflows), Zapier, Make, n8n o tu propio endpoint.
- **Email vía Resend:** define `RESEND_API_KEY` y `LEAD_NOTIFY_EMAIL`.
- **Sin configurar:** el lead se registra en los logs (modo desarrollo) y el formulario responde con éxito.

Campos que envía cada lead: `name, company, role, email, phone, city, vehicles, vehicleType, manage, message, locale, source, receivedAt`.

---

## 9. Analytics y eventos de conversión

- Define `NEXT_PUBLIC_GA_MEASUREMENT_ID` y/o `NEXT_PUBLIC_META_PIXEL_ID`. Si están vacíos, no se carga nada.
- Eventos de conversión ya instrumentados (en `src/lib/analytics.ts`): `whatsapp_click`, `lead_submit`, `demo_request`, `advisory_click`, `client_portal_click`, `language_change`.
- **Google Search Console:** verifica la propiedad `https://www.iron-gps.com` y envía `https://www.iron-gps.com/sitemap.xml`.

---

## 10. SEO

- Metadatos y descripciones por idioma en `src/messages/*.json` (namespace `meta`) y `src/app/[locale]/layout.tsx`.
- `hreflang` (es / en / x-default) y `canonical` por página.
- `sitemap.xml` y `robots.txt` se generan automáticamente (`src/app/sitemap.ts`, `src/app/robots.ts`).
- JSON-LD `Organization` y `Service` en `src/components/JsonLd.tsx` (agrega tus redes sociales en `sameAs` cuando las tengas).
- Keywords objetivo (Colombia): GPS para vehículos, rastreo GPS Colombia, GPS vehicular, monitoreo/gestión de flotas, telemetría vehicular, GPS para camiones/transporte, software de gestión de flotas, seguridad vehicular. Están reflejadas de forma natural en el copy, sin *keyword stuffing*.

---

## 11. Estructura del proyecto

```
iron-gps/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # root (pass-through)
│   │   ├── not-found.tsx           # 404 global
│   │   ├── robots.ts / sitemap.ts  # SEO técnico
│   │   ├── api/lead/route.ts       # endpoint del formulario
│   │   └── [locale]/               # rutas por idioma (es/en)
│   │       ├── layout.tsx          # <html>, fuentes, header/footer, metadatos
│   │       ├── page.tsx            # Home
│   │       ├── soluciones/
│   │       ├── tecnologia/
│   │       ├── sectores/ + [slug]/
│   │       ├── nosotros/
│   │       ├── por-que-iron/
│   │       ├── demo/
│   │       ├── contacto/
│   │       ├── privacidad/
│   │       └── terminos/
│   ├── components/                 # UI reutilizable (Header, Footer, cards, secciones…)
│   │   └── sections/               # bloques de la Home
│   ├── i18n/                       # configuración next-intl (routing, request)
│   ├── lib/                        # config del sitio + analytics
│   ├── messages/                   # es.json / en.json (TODO el copy)
│   └── middleware.ts               # enrutamiento por idioma
├── public/                         # favicon, og-image
├── .env.example                    # variables de entorno documentadas
├── tailwind.config.ts              # tokens de color / tipografía
└── next.config.mjs
```

---

## 12. Notas de contenido y marca

- **IRON GPS es la marca protagonista.** La tecnología del proveedor externo se presenta como *infraestructura / technology partner*, sin nombres de módulos técnicos del proveedor en la comunicación al cliente.
- **No se inventó información.** Clientes, testimonios, cifras de ahorro, certificaciones (p. ej. ISO 27001 / SOC 2), oficinas y precios **no** se afirman. La sección de prueba social se dejó lista para activarse cuando existan casos reales.
- **Claims técnicos respaldados por la documentación:** más de 1.000 dispositivos homologados de múltiples fabricantes, apps nativas iOS/Android, API REST y web services, video telemática (ADAS/DMS), control de combustible, cadena de frío, +70 reportes.
- **Seguridad con enfoque responsable:** se comunica "mayor visibilidad y capacidad de respuesta", nunca "evita el 100 % de los robos".
- **Dashboards ilustrativos:** los mockups están marcados como *"Visualización ilustrativa"*. Reemplázalos por capturas reales cuando estén disponibles.

---

© IRON GPS. Todos los derechos reservados.
