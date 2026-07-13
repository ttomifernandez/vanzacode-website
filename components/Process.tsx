'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Code2, CreditCard } from 'lucide-react'

const steps = [
  { icon: MessageSquare, title: 'Nos contás tu negocio', description: 'Charlamos por WhatsApp o completás el formulario. Nos contás qué hace tu negocio, qué te gusta y qué necesitás mostrar.', badge: 'Hoy', accent: 'orange' },
  { icon: Code2, title: 'Diseñamos y construimos', description: 'Nuestro equipo trabaja las próximas 24 horas. Diseño, desarrollo, contenido y SEO. Todo incluido, sin costo todavía.', badge: 'En 24hs', accent: 'green' },
  { icon: CreditCard, title: 'Ves el resultado y decidís', description: 'Te mandamos el link de tu sitio listo. Si te convence, acordamos el pago. Si no te convence, no te cobramos absolutamente nada.', badge: 'Sin presión', accent: 'orange' },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="proceso" className="py-28 bg-[#060d1e] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(30,41,59,0.8), transparent)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-20">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 text-slate-400 text-sm mb-5">El proceso</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }} className="text-3xl sm:text-4xl font-black mb-5">Tu web en <span className="gradient-text">3 pasos simples</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.16 }} className="text-slate-400 text-lg max-w-2xl mx-auto">Un proceso pensado para que no tengas que preocuparte por nada. Nosotros nos encargamos de todo.</motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[2.75rem] left-[calc(16.67%+3rem)] right-[calc(16.67%+3rem)] h-px" style={{ background: 'linear-gradient(to right, rgba(249,115,22,0.4), rgba(34,197,94,0.4), rgba(249,115,22,0.4))' }} />
          {steps.map((s, i) => { const Icon = s.icon; const isOrange = s.accent === 'orange'; return (
            <motion.div key={s.title} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.12 * i }} className="flex flex-col items-center text-center">
              <div className={`relative z-10 w-[5.5rem] h-[5.5rem] rounded-2xl flex items-center justify-center mb-6 border-2 ${isOrange ? 'bg-orange-500/15 border-orange-500/30' : 'bg-green-500/15 border-green-500/30'}`}>
                <Icon size={30} className={isOrange ? 'text-orange-400' : 'text-green-400'} />
                <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white ${isOrange ? 'bg-orange-500' : 'bg-green-500'}`}>{i + 1}</span>
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 ${isOrange ? 'bg-orange-500/15 text-orange-400' : 'bg-green-500/15 text-green-400'}`}>{s.badge}</span>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed">{s.description}</p>
            </motion.div>
          )})
          }
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="text-center mt-20">
          <a href="https://wa.me/5493515929043?text=Hola%2C%20quiero%20empezar%20con%20mi%20sitio%20web" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/25">
            Empezar ahora — es gratis
          </a>
          <p className="mt-4 text-slate-500 text-sm">Sin tarjeta. Sin anticipo. Solo resultados.</p>
        </motion.div>
      </div>
    </section>
  )
}
