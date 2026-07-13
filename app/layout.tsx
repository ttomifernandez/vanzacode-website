import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vanzacode — Tu web profesional en 24 horas',
  description: 'Diseñamos y desarrollamos tu sitio web profesional en 24 horas. Si te gusta lo pagás, si no, nada.',
  keywords: 'diseño web, sitio web profesional, agencia web, web 24 horas, Córdoba',
  openGraph: {
    title: 'Vanzacode — Tu web profesional en 24 horas',
    description: 'Si te gusta lo pagás. Diseño profesional, entrega en 24hs.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030712] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
