Este es un proyecto [Next.js](https://nextjs.org/) iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Empezando

Antes de nada, debes crear un archivo `.env` en la raíz del proyecto y añadir la siguiente variable de entorno:

```
URL_BACKEND=http://url_donde_se_esta_ejecutando_el_backend/v1/agenda
```

Reemplaza `http://url_donde_se_esta_ejecutando_el_backend/v1/agenda` con la URL real de tu backend.

Luego, puedes iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.
