import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contato" className="py-28 px-6 bg-[#0d0d15]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Vamos conversar</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tem um projeto em mente? Quer colaborar ou apenas trocar uma ideia? Me manda uma mensagem!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Informações</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'brunobkmacedo@gmail.com', href: 'mailto:brunobkmacedo@gmail.com' },
                { icon: Github, label: 'GitHub', value: 'github.com/brunokempe', href: 'https://github.com/brunokempe' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/brunokempe', href: 'https://www.linkedin.com/in/brunokempe' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#12121a] border border-white/5 hover:border-indigo-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/15 flex items-center justify-center group-hover:bg-indigo-600/25 transition-all">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{label}</p>
                    <p className="text-slate-300 text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            <div>
              <input
                required
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/8 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
              />
            </div>
            <div>
              <input
                required
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/8 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
              />
            </div>
            <div>
              <textarea
                required
                rows={5}
                placeholder="Sua mensagem..."
                className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/8 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all hover:scale-[1.02] shadow-lg shadow-indigo-600/25"
            >
              {sent ? 'Mensagem enviada!' : (<><Send size={16} /> Enviar mensagem</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
