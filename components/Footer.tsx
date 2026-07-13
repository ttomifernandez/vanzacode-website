import { Instagram } from 'lucide-react'

const navLinks = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Cómo funciona', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30"><span className="text-white font-black text-sm">V</span></div>
              <span className="font-black text-lg tracking-tight">Vanza<span className="gradient-text">code</span></span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-xs text-sm">Webs profesionales en 24 horas. Si te gusta lo pagás, si no, nada. Así de simple.</p>
            <div className="flex gap-3 mt-6"><a href="https://instagram.com/vanzacode" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Vanzacode" className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all"><Instagram size={16} /></a></div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Navegación</h4>
            <ul className="space-y-3">{navLinks.map(l => <li key={l.href}><a href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm">{l.label}</a></li>)}</ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:hola@vanzacode.com.ar" className="text-slate-400 hover:text-white transition-colors">hola@vanzacode.com.ar</a></li>
              <li><a href="https://wa.me/5493515929043" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">+54 9 351 592-9043</a></li>
              <li className="text-slate-500">Córdoba, Argentina</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 Vanzacode. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado en Córdoba, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
