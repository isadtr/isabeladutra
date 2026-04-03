import { motion } from 'framer-motion'

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'TailwindCSS' },
      { name: 'Vite' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'PHP' },
      { name: 'Python' },
      { name: 'Node.js' }
    ]
  },
  {
    category: 'Banco de Dados',
    skills: [
      { name: 'PostgreSQL' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Docker' },
      { name: 'Azure' },
      { name: 'Git/GitHub' }
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-teal-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-teal-100 text-teal-800 text-sm font-semibold rounded-full dark:bg-teal-900/40 dark:text-teal-300 transition-all hover:scale-105"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
