# Historia de Guatavita — guatavitadorada.com

Página larga de una sola ruta (React + Vite + TypeScript + Tailwind). Español en `/`, inglés en `/en/`.

- Textos: `src/content/sections.ts` (es/en), líneas de tiempo: `src/content/timeline.ts`, textos de imágenes: `src/content/images.ts`.
- Imágenes: `npm run images` descarga de Wikimedia Commons, verifica licencia, genera WebP en `public/img` y `src/content/credits.ts` (no editar a mano).
- SEO: `index.html` y `en/index.html`.
- `npm run build` → `dist/`; `npm start` sirve `dist` con `serve`.
