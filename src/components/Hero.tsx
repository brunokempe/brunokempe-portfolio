import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../icons'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px]" />
      </div>

      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Disponível para novos projetos
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Olá, eu sou{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bruno Kempe
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Desenvolvedor Fullstack Sênior com +6 anos de experiência, especializado em{' '}
          <span className="text-indigo-300">.NET e APIs RESTful</span> no setor de{' '}
          <span className="text-indigo-300">logística e transporte de cargas</span>,
          atuando também no frontend com Angular e React.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projetos"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="px-6 py-3 rounded-full border border-white/10 hover:border-white/30 text-slate-300 font-medium transition-all hover:text-white"
          >
            Entre em contato
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.65)} className="flex items-center justify-center gap-5">
          {[
            { icon: GitHubIcon, href: 'https://github.com/brunokempe', label: 'GitHub' },
            { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/brunokempe', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:brunobkmacedo@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.9)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  )
}
