import { motion } from 'framer-motion'
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Sobre mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-teal-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Sou uma <span className="font-semibold text-rose-500 dark:text-rose-400">desenvolvedora full-stack</span> com{' '}
              <span className="font-semibold">2 anos de experiência</span> criando aplicações web modernas.
            </p>
            
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Focando em <span className="font-semibold text-teal-600 dark:text-teal-400">React, Node.js e TypeScript</span>, 
              amo transformar ideias complexas em experiências intuitivas e performáticas.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 p-4 glass rounded-2xl">
                <div className="p-3 bg-rose-100 dark:bg-rose-900/30 rounded-xl">
                  <MapPin className="w-6 h-6 text-rose-500 dark:text-rose-400" />
                </div>
                <div>
                  <p className="font-semibold">Localização</p>
                  <p className="text-sm text-gray-500">Parnaíba-PI</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 glass rounded-2xl">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                  <Calendar className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="font-semibold">Disponível</p>
                  <p className="text-sm text-gray-500">Próximos 3 meses</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Experiência Profissional */}
            <div className="glass p-6 rounded-3xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight">Estágio em Desenvolvimento Web</h3>
                  <p className="text-rose-500 dark:text-rose-400 text-sm font-medium mt-1">RGM Tecnologia e Processos • 2024 - Atualmente</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                Desenvolvimento e manutenção de sistemas web focados em gestão organizacional e otimização de processos.
              </p>
              <div className="flex flex-wrap gap-2">
                {['PHP', 'Python', 'TypeScript', 'Docker', 'Azure', 'PostgreSQL'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-semibold rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Formação Acadêmica */}
            <div className="glass p-6 rounded-3xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Formação Acadêmica</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Análise e Desenvolvimento de Sistemas</h4>
                  <p className="text-sm text-rose-500 dark:text-rose-400">Uninter • 2023 - 2025</p>
                </div>
                <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Odontologia</h4>
                  <p className="text-sm text-rose-500 dark:text-rose-400">Uespi • 2017 - 2022</p>
                </div>
              </div>
            </div>

            {/* <div className="flex gap-4">
              <Button className="flex-1">Ver Projetos</Button>
              <Button variant="outline" className="flex-1">Contato</Button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
