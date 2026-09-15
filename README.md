# Descubre tu Camino Digital

## Descripción

Crea una página de ventas para "Descubre tu Camino Digital" de Renacer Digital. DIRECCIÓN VISUAL: Identidad minimalista, cálida y femenina, con estética limpia y serena. Paleta de tonos beige, crema, blanco cálido y rosa pálido. Evita colores intensos, degradados llamativos y estética corporativa o de "gurú digital". La página debe transmitir calma, claridad, cercanía y sensación de comenzar algo 

## Stack

React 19 · TypeScript · Vite · Tailwind CSS · PWA

## Estructura

- `/src/App.tsx` — punto de entrada
- `/src/components/HeroSection.tsx` — Hero principal con headline, subheadline, CTA, microtexto y espacio reservado para mockup del producto.
- `/src/components/ProblemSection.tsx` — Sección de identificación con el problema: headline y cuerpo que conectan con la confusión del usuario.
- `/src/components/TransformationSection.tsx` — Sección de transformación prometida: recorrido visual de 4 pasos (Confusión → Claridad → Elección → Acción).
- `/src/components/SolutionSection.tsx` — Sección de solución y mecanismo: las 4 piezas del producto presentadas como tarjetas secuenciales.
- `/src/components/TransitionSection.tsx` — Sección de transición: barreras que superas con las herramientas.
- `/src/components/AudienceSection.tsx` — Sección de audiencia: para quién es y para quién no es.

## Instalación

```bash
npm install
npm run dev    # desarrollo (Vite)
npm run build  # build de producción → dist/
```

## Variables de entorno

Copia `.env.example` a `.env.local` y completa:

- `VITE_SUPABASE_URL` — URL de tu proyecto Supabase (Settings → API).
- `VITE_SUPABASE_ANON_KEY` — anon/publishable key del mismo proyecto.

Las variables `VITE_*` son públicas en el navegador: **nunca** pongas la `service_role` ni otros secretos aquí.

## Deploy en Vercel

1. Importa el repositorio en [vercel.com](https://vercel.com) (framework: Vite).
2. Build command `npm run build`, output `dist/`.
3. Carga las variables `VITE_*` de `.env.example` en Settings → Environment Variables.
4. En Supabase → Auth → URL Configuration agrega el dominio de Vercel a los redirects si tu app usa login.

## Integración continua

El workflow `.github/workflows/cosmos-build.yml` valida el build en cada push y, si falta `package-lock.json`, lo genera y propone un PR con el lockfile.

## Navegación

SPA con React Router y fallback de navegación para publicación.

---

_Generado con Cosmos Code_
