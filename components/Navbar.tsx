'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Cómo funciona', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <span className="text-white font-black text-sm">V</span>
            </div>
            <span className="font-black text-lg tracking-tight">Vanza<span className="gradient-text">code</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="https://wa.me/5493515929043?text=Hola%2C%20quiero%20una%20web%20profesional%20para%20mi%20negocio" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-md shadow-green-500/20">
              Empezar ahora →
            </a>
          </div>
          <button className="md:hidden text-slate-400 hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a1628] border-b border-slate-800 overflow-hidden">
            <div className="px-4 py-5 space-y-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-white py-2 transition-colors">{l.label}</a>
              ))}
              <a href="https://wa.me/5493515929043?text=Hola%2C%20quiero%20una%20web%20profesional%20para%20mi%20negocio" target="_blank" rel="noopener noreferrer"
                className="block text-center mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold">Empezar ahora →</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
