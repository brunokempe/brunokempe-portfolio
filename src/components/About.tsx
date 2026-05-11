import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Layers, Rocket } from 'lucide-react'

const cards = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Escrevo código legível, escalável e bem estruturado seguindo as melhores práticas.',
  },
  {
    icon: Layers,
    title: 'UI/UX Moderno',
    desc: 'Foco em interfaces bonitas e experiências fluidas que encantam os usuários.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    desc: 'Otimização de performance e boas práticas de web vitals em todo projeto.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Sobre mim</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Quem sou eu</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Sou um desenvolvedor Fullstack apaixonado por transformar ideias em produtos digitais.
            Trabalho com .NET, Angular, React e Node.js, atuando tanto no backend quanto no frontend
            para entregar soluções completas e de alta qualidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="p-6 rounded-2xl bg-[#12121a] border border-white/5 hover:border-indigo-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600/15 flex items-center justify-center mb-4 group-hover:bg-indigo-600/25 transition-all">
                <Icon size={22} className="text-indigo-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-10 items-center p-8 rounded-3xl bg-[#12121a] border border-white/5"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Minha jornada</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Minha jornada no desenvolvimento começou pela curiosidade de entender como
              sistemas funcionam de ponta a ponta. Hoje atuo como Fullstack, desenvolvendo
              APIs robustas com .NET e Node.js e interfaces modernas com Angular e React.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Acredito que bom software é aquele que resolve problemas reais com
              simplicidade, escalabilidade e elegância.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '10+', label: 'Projetos entregues' },
              { value: '2+', label: 'Anos de experiência' },
              { value: '100%', label: 'Dedicação' },
              { value: '∞', label: 'Vontade de aprender' },
            ].map(({ value, label }) => (
              <div key={label} className="p-4 rounded-xl bg-[#1a1a27] text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {value}
                </p>
                <p className="text-slate-400 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
