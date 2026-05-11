import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Lock } from 'lucide-react'
import { GitHubIcon } from '../icons'

const professionalProjects = [
  {
    title: 'Integração com Plataformas de Gestão de Risco',
    description:
      'Desenvolvimento de APIs e microsserviços para integração com plataformas de gerenciamento de risco de carga — Buonny, Opentech e MKRisk — garantindo conformidade e segurança nas operações logísticas.',
    tags: ['C#', '.NET Core', 'APIs RESTful', 'RabbitMQ', 'Oracle'],
    gradient: 'from-indigo-600/20 to-purple-600/20',
    company: 'Praxio',
    isPrivate: true,
  },
  {
    title: 'Integração com Meios de Pagamento para Motoristas',
    description:
      'Sistema de integração com plataformas de pagamento destinadas a motoristas de caminhão — Rodocred, Pamcard, Target e e-Frete — automatizando repasses e conciliação financeira no ERP.',
    tags: ['C#', '.NET Core', 'Entity Framework', 'PostgreSQL', 'Azure Service Bus'],
    gradient: 'from-purple-600/20 to-pink-600/20',
    company: 'Praxio',
    isPrivate: true,
  },
  {
    title: 'Integração com Plataformas de Rastreamento',
    description:
      'Integração com plataformas de tracking de carga — uMov e Comprovei — permitindo monitoramento em tempo real de entregas e comprovação eletrônica, integrado ao ERP principal.',
    tags: ['C#', 'ASP.NET MVC', 'NHibernate', 'Oracle', 'Dapper'],
    gradient: 'from-cyan-600/20 to-indigo-600/20',
    company: 'Praxio',
    isPrivate: true,
  },
]

const personalProjects = [
  {
    title: 'Portfolio Pessoal',
    description:
      'Este portfólio desenvolvido com as tecnologias mais modernas do ecossistema web. Design dark com animações fluidas, responsivo e com estrutura de componentes escalável.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    gradient: 'from-indigo-600/20 to-cyan-600/20',
    github: 'https://github.com/brunokempe/portfolio',
    live: '#',
    isPrivate: false,
  },
  {
    title: 'API RESTful com .NET Core',
    description:
      'API RESTful com autenticação JWT, arquitetura limpa, injeção de dependência e testes unitários. Aplicando Clean Code e SOLID na prática com C# e PostgreSQL.',
    tags: ['C#', '.NET Core', 'PostgreSQL', 'JWT', 'Clean Architecture'],
    gradient: 'from-purple-600/20 to-indigo-600/20',
    github: 'https://github.com/brunokempe',
    live: null,
    isPrivate: false,
  },
  {
    title: 'Dashboard Angular',
    description:
      'Aplicação SPA desenvolvida em Angular com consumo de APIs REST, gerenciamento de estado reativo com RxJS e componentes reutilizáveis com TypeScript.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'HTML & CSS'],
    gradient: 'from-pink-600/20 to-purple-600/20',
    github: 'https://github.com/brunokempe',
    live: null,
    isPrivate: false,
  },
]

function ProjectCard({
  title,
  description,
  tags,
  gradient,
  index,
  inView,
  isPrivate,
  github,
  live,
  company,
}: {
  title: string
  description: string
  tags: string[]
  gradient: string
  index: number
  inView: boolean
  isPrivate: boolean
  github?: string
  live?: string | null
  company?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.12 * index }}
      className="group relative flex flex-col rounded-2xl bg-[#12121a] border border-white/5 hover:border-indigo-500/30 transition-all overflow-hidden"
    >
      <div className={`h-36 bg-gradient-to-br ${gradient} flex items-center justify-between px-6`}>
        <span className="text-4xl font-bold text-white/10">{String(index + 1).padStart(2, '0')}</span>
        {company && (
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">
            {company}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-base mb-2 leading-snug">{title}</h3>
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
          {isPrivate ? (
            <span className="flex items-center gap-1.5 text-slate-600 text-xs">
              <Lock size={13} /> Código privado (empresa)
            </span>
          ) : (
            <>
              {github && (
                <a
                  href={github}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon size={15} /> Código
                </a>
              )}
              {live && (
                <a
                  href={live}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={15} /> Demo
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

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
            Projetos desenvolvidos ao longo da carreira — tanto no ambiente corporativo quanto por iniciativa própria.
          </p>
        </motion.div>

        {/* Projetos Profissionais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-white font-semibold text-lg">Projetos Profissionais</span>
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-slate-500 text-xs px-3 py-1 rounded-full border border-white/5">Praxio · Logística & Transporte</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>

        {/* Projetos Pessoais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-white font-semibold text-lg">Projetos Pessoais</span>
            <div className="flex-1 h-px bg-white/5" />
            <a
              href="https://github.com/brunokempe"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-500 hover:text-indigo-400 text-xs px-3 py-1 rounded-full border border-white/5 hover:border-indigo-500/30 transition-all"
            >
              <GitHubIcon size={12} /> Ver GitHub
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
