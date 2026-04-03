import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/Button'
import { Download, Mail } from 'lucide-react'
import { projects } from '@/data/projects'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const Hero = () => {
  const { isDark } = useTheme()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
        
          <motion.h1 
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Desenvolvedora
            <br />
            <span className="bg-gradient-to-r from-rose-400 via-orange-300 to-teal-400 bg-clip-text text-transparent">
              Full-Stack
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Construo aplicações web modernas e escaláveis com{' '}
            <span className="font-semibold text-teal-600 dark:text-teal-400">React, Node.js</span> e{' '}
            <span className="font-semibold text-teal-600 dark:text-teal-400">TypeScript</span>.
            Apaixonada por código limpo e experiências incríveis para os usuários.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="group"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/assets/curriculo.pdf' // Caminho do arquivo na pasta public
                link.download = 'Isabela_Dutra_CV.pdf' // Nome que o arquivo terá ao ser baixado
                link.click()
              }}
            >
              <Download className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Baixar CV
            </Button>
            {/* <Button variant="outline" size="lg">
              Ver Projetos
            </Button> */}
          </motion.div>

          <motion.div 
            className="flex justify-center md:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://github.com/isadtr" target="_blank" rel="noopener noreferrer" className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all group">
              <GithubIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/isabela-dutra-344503159/" target="_blank" rel="noopener noreferrer" className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all group">
              <LinkedinIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:isabeladutrar@gmail.com" className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all group">
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end w-full max-w-md mx-auto md:max-w-none"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Efeito de brilho no fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-teal-400 rounded-full blur-3xl opacity-30 dark:opacity-40 animate-pulse" />
            
            {/* Container da imagem */}
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img 
                src="/assets/profile.jpg"
                alt="Foto de Perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Hero
