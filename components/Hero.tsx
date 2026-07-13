'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, CheckCircle, Star, Zap } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-grid">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
              <CheckCircle size={14} />
              Sin anticipo · Pagás solo si te gusta
            </motion.div>
            <motion.h1 {...fadeUp(0.08)} className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              Tu web profesional{' '}<span className="gradient-text">en 24 horas</span>
            </motion.h1>
            <motion.p {...fadeUp(0.16)} className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Diseñamos y desarrollamos tu sitio desde cero. Te lo entregamos en un link de prueba.{' '}
              <span className="text-white font-semibold">Si te convence, lo pagás. Si no, no te cobramos nada.</span>
            </motion.p>
            <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="https://wa.me/5493515929043?text=Hola%2C%20quiero%20una%20web%20profesional%20para%20mi%20negocio" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/25">
                Quiero mi web gratis <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#proceso" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-semibold text-lg transition-all">Cómo funciona</a>
            </motion.div>
            <motion.div {...fadeUp(0.32)} className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
                <span>+50 clientes satisfechos</span>
              </div>
              <div className="flex items-center gap-2"><Clock size={14} className="text-green-400" /><span>Entrega garantizada en 24hs</span></div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/60">
              <div className="bg-[#1e293b] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-yellow-500/70" /><div className="w-3 h-3 rounded-full bg-green-500/70" /></div>
                <div className="flex-1"><div className="bg-[#0f172a] rounded-md px-3 py-1 text-xs text-slate-500 flex items-center gap-2 max-w-xs mx-auto"><div className="w-2 h-2 rounded-full bg-green-500" />tunegocio.com</div></div>
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#030712] p-8 min-h-[340px] space-y-5">
                <div className="flex items-center justify-between"><div className="w-24 h-5 bg-slate-700/70 rounded" /><div className="flex gap-2"><div className="w-12 h-4 bg-slate-700/50 rounded" /><div className="w-12 h-4 bg-slate-700/50 rounded" /><div className="w-20 h-6 bg-orange-500/40 rounded-lg" /></div></div>
                <div className="pt-4 space-y-3"><div className="w-48 h-3 bg-orange-500/25 rounded-full" /><div className="w-64 h-8 bg-slate-600/60 rounded" /><div className="w-56 h-8 bg-orange-500/20 rounded" /><div className="w-72 h-4 bg-slate-700/50 rounded mt-2" /><div className="w-60 h-4 bg-slate-700/40 rounded" /><div className="mt-4 w-36 h-10 bg-gradient-to-r from-orange-500/70 to-orange-600/70 rounded-xl" /></div>
                <div className="pt-4 grid grid-cols-3 gap-3">{[0,1,2].map(i => <div key={i} className="bg-slate-800/50 rounded-xl p-3 space-y-2 border border-slate-700/40"><div className="w-7 h-7 bg-orange-500/30 rounded-lg" /><div className="w-full h-2 bg-slate-700/60 rounded" /><div className="w-3/4 h-2 bg-slate-700/40 rounded" /></div>)}</div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-10 top-1/3 bg-[#0f172a] border border-slate-700 rounded-2xl p-4 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0"><Zap size={20} className="text-orange-400" /></div><div><div className="text-xs text-slate-400">Tiempo de entrega</div><div className="text-sm font-bold text-white">24 horas</div></div></div>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute -right-6 bottom-1/3 bg-[#0f172a] border border-slate-700 rounded-2xl p-4 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0"><CheckCircle size={20} className="text-green-400" /></div><div><div className="text-xs text-slate-400">Modelo único</div><div className="text-sm font-bold text-white">Si te gusta, pagás</div></div></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
