'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const inp = 'w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/20 transition-all'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ nombre: '', email: '', negocio: '', mensaje: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errMsg, setErrMsg] = useState('')
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('loading'); setErrMsg('')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error al enviar')
      setStatus('success'); setForm({ nombre: '', email: '', negocio: '', mensaje: '' })
    } catch (err) { setStatus('error'); setErrMsg(err instanceof Error ? err.message : 'Error desconocido') }
  }
  return (
    <section id="contacto" className="py-28 bg-[#060d1e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/5 rounded-full blur-3xl" /></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={ref}>
            <motion.span initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 text-slate-400 text-sm mb-5">Contacto</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }} className="text-3xl sm:text-4xl font-black mb-6">¿Listo para tener tu web <span className="gradient-text">mañana?</span></motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.16 }} className="text-slate-400 text-lg leading-relaxed mb-10">Contános de tu negocio y arrancamos hoy. En 24 horas tenés tu sitio listo para verlo. Sin compromiso.</motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.24 }}>
              <p className="text-slate-400 text-sm mb-4">¿Preféris por WhatsApp?</p>
              <a href="https://wa.me/5493515929043?text=Hola%2C%20quiero%20una%20web%20para%20mi%20negocio" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0f172a] border border-slate-700 text-white hover:border-green-500/50 hover:bg-green-500/5 transition-all group">
                <MessageCircle size={20} className="text-green-400 shrink-0" />
                <span className="font-semibold">Chatear por WhatsApp</span>
                <span className="ml-auto text-slate-500 group-hover:text-green-400 transition-colors">→</span>
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.2 }}>
            {status === 'success' ? (
              <div className="p-10 rounded-2xl border border-green-500/30 bg-green-500/8 text-center">
                <CheckCircle size={52} className="text-green-400 mx-auto mb-5" />
                <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-400">Te respondemos en menos de 2 horas. También podés escribirnos por WhatsApp.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 px-6 py-2 text-sm text-slate-400 hover:text-white border border-slate-700 rounded-lg transition-colors">Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5 p-7 sm:p-9 rounded-2xl border border-slate-800 bg-[#0b1525]">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-2">Nombre <span className="text-orange-500">*</span></label><input id="nombre" name="nombre" type="text" required value={form.nombre} onChange={set} placeholder="Tu nombre" className={inp} /></div>
                  <div><label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email <span className="text-orange-500">*</span></label><input id="email" name="email" type="email" required value={form.email} onChange={set} placeholder="tu@email.com" className={inp} /></div>
                </div>
                <div><label htmlFor="negocio" className="block text-sm font-medium text-slate-300 mb-2">¿Qué hace tu negocio?</label><input id="negocio" name="negocio" type="text" value={form.negocio} onChange={set} placeholder="Ej: Taller mecánico, restaurante, estudio contable..." className={inp} /></div>
                <div><label htmlFor="mensaje" className="block text-sm font-medium text-slate-300 mb-2">¿Qué necesitás? <span className="text-orange-500">*</span></label><textarea id="mensaje" name="mensaje" required rows={4} value={form.mensaje} onChange={set} placeholder="Contános un poco de tu negocio y qué te gustaría mostrar en el sitio..." className={`${inp} resize-none`} /></div>
                {status === 'error' && <div className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-500/10 rounded-xl border border-red-500/20"><AlertCircle size={16} className="shrink-0" />{errMsg || 'Hubo un error. Intentá de nuevo o escribínos por WhatsApp.'}</div>}
                <button type="submit" disabled={status === 'loading'} className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-xl shadow-orange-500/20">
                  {status === 'loading' ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Enviando...</> : <><Send size={18} />Quiero mi web en 24hs</>}
                </button>
                <p className="text-center text-slate-500 text-xs">Sin anticipo. Ves el resultado antes de pagar.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
