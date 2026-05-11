import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Projeto 1',
    description: 'Uma aplicação web moderna com React e TypeScript. Adicione aqui a descrição do seu projeto.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    github: '#',
    live: '#',
    gradient: 'from-indigo-600/20 to-purple-600/20',
  },
  {
    title: 'Projeto 2',
    description: 'Plataforma full-stack com autenticação, dashboard e API REST. Substitua pela descrição real.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    github: '#',
    live: '#',
    gradient: 'from-purple-600/20 to-pink-600/20',
  },
  {
    title: 'Projeto 3',
    description: 'Aplicativo mobile-first com design system próprio e animações avançadas.',
    tags: ['React', 'Framer Motion', 'CSS'],
    github: '#',
    live: '#',
    gradient: 'from-cyan-600/20 to-indigo-600/20',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projetos" className="py-28 px-6 bg-[#0d0d15]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Meus projetos</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Uma seleção dos projetos que desenvolvi com dedicação e aprendizado contínuo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, tags, github, live, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group relative flex flex-col rounded-2xl bg-[#12121a] border border-white/5 hover:border-indigo-500/30 transition-all overflow-hidden"
            >
              <div className={`h-40 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <span className="text-4xl font-bold text-white/10">{String(i + 1).padStart(2, '0')}</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={github}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={15} /> Código
                  </a>
                  <a
                    href={live}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={15} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
