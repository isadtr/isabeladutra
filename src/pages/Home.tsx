import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
// import { Projects } from '@/components/sections/Projects'
// import { Experience } from '@/components/sections/Experience'
// import { Contact } from '@/components/sections/Contact'

const Home = () => {
  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      className="container mx-auto px-6 py-24 lg:px-8 max-w-7xl"
    >
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
    </motion.main>
  )
}

export default Home
