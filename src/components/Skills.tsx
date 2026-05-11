import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML & CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST API', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Ferramentas',
    skills: ['Git & GitHub', 'Vite', 'Docker', 'Figma', 'VS Code'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Tecnologias</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Minhas skills</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            As tecnologias e ferramentas que utilizo no meu dia a dia para construir produtos incríveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map(({ category, skills }, groupIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * groupIndex }}
              className="p-6 rounded-2xl bg-[#12121a] border border-white/5"
            >
              <h3 className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-5">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 * groupIndex + 0.05 * i }}
                    className="px-3 py-1.5 rounded-full bg-[#1a1a27] border border-white/8 text-slate-300 text-sm hover:border-indigo-500/40 hover:text-indigo-300 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
