# vanzacode-website

Sitio web de [Vanzacode](https://vanzacode.com.ar) — webs profesionales en 24 horas.

**Live:** https://vanzacode-website.vercel.app

## Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Framer Motion
- Resend (formulario de contacto)

## Auto-deploy

Cada push a `main` triggerlea un deploy automático a Vercel via cron en el servidor (cada 5 min).

## Desarrollo local

```bash
npm install
cp .env.example .env.local  # agregar RESEND_API_KEY
npm run dev
```
