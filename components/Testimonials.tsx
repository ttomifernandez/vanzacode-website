'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { initials: 'MR', name: 'Marcos Rodríguez', business: 'Taller Mecánico Belgrano', accent: 'orange', quote: 'Me dejaron el sitio en 24 horas y recién pagué cuando lo vi y me encantó. Hoy el 40% de mis clientes nuevos me encuentran por la web.' },
  { initials: 'VS', name: 'Valentina Sosa', business: 'Pastelería La Dulce', accent: 'green', quote: 'Tenía miedo de meterme en esto, pero fue super fácil. Me explicaron todo, el diseño quedó hermoso y ahora recibo pedidos por el sitio todos los días.' },
  { initials: 'LF', name: 'Luis Fernández', business: 'Distribuidora del Centro', accent: 'orange', quote: 'El sitio quedó mejor que el de mi competencia que pagó cinco veces más. Y lo tuve listo en un día. Increíble la relación calidad-precio.' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="testimonios" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 text-slate-400 text-sm mb-5">Lo que dicen nuestros clientes</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }} className="text-3xl sm:text-4xl font-black">Negocios reales, <span className="gradient-text">resultados reales</span></motion.h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => { const isOrange = t.accent === 'orange'; return (
            <motion.div key={t.name} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex flex-col p-7 rounded-2xl border border-slate-800 bg-[#0b1525]">
              <Quote size={22} className="text-slate-700 mb-5" />
              <div className="flex gap-1 mb-5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />)}</div>
              <p className="text-slate-300 leading-relaxed flex-1 mb-6 text-[0.95rem]">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-800">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border ${isOrange ? 'bg-orange-500/15 text-orange-400 border-orange-500/25' : 'bg-green-500/15 text-green-400 border-green-500/25'}`}>{t.initials}</div>
                <div><div className="font-semibold text-white text-sm">{t.name}</div><div className="text-xs text-slate-400">{t.business}</div></div>
              </div>
            </motion.div>
          )})
          }
        </div>
      </div>
    </section>
  )
}
