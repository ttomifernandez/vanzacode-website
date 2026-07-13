'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Shield, Palette, Smartphone, Search, HeartHandshake } from 'lucide-react'

const features = [
  { icon: Clock, title: 'Entrega en 24 horas', description: 'Tu sitio web listo al día siguiente. Sin esperas de semanas ni procesos eternos.', accent: 'orange' },
  { icon: Shield, title: 'Sin anticipo', description: 'Primero ves el resultado completo. Pagás solo cuando el diseño te convence.', accent: 'green' },
  { icon: Palette, title: 'Diseño premium', description: 'Moderno, limpio y adaptado a tu rubro. Nada de templates genéricos.', accent: 'orange' },
  { icon: Smartphone, title: 'Mobile-first', description: 'Perfecta en celular, tablet y escritorio. El 70% de tus clientes navegan desde el teléfono.', accent: 'green' },
  { icon: Search, title: 'SEO incluido', description: 'Optimizado para que Google te encuentre y aparezcas antes que la competencia.', accent: 'orange' },
  { icon: HeartHandshake, title: 'Soporte garantizado', description: 'Te acompañamos después del lanzamiento. Cambios rápidos sin costo extra el primer mes.', accent: 'green' },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="beneficios" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 text-slate-400 text-sm mb-5">Por qué elegirnos</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }} className="text-3xl sm:text-4xl font-black mb-5">Todo lo que tu negocio necesita, <span className="gradient-text">sin riesgos</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.16 }} className="text-slate-400 text-lg max-w-2xl mx-auto">Combinamos diseño profesional, tecnología de punta y un modelo de negocio que pone al cliente primero.</motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => { const Icon = f.icon; const isOrange = f.accent === 'orange'; return (
            <motion.div key={f.title} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.06 * i }}
              className="group p-6 rounded-2xl border border-slate-800 bg-[#0b1525] hover:border-slate-600 hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${isOrange ? 'bg-orange-500/15' : 'bg-green-500/15'}`}><Icon size={24} className={isOrange ? 'text-orange-400' : 'text-green-400'} /></div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-[0.95rem]">{f.description}</p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}
