import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/Button'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/utils/cn'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { id: 'home', label: 'Início', href: '#hero' },
    { id: 'about', label: 'Sobre', href: '#about' },
    { id: 'projects', label: 'Projetos', href: '#projects' },
    { id: 'contact', label: 'Contato', href: '#contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass fixed top-0 left-0 w-full z-50 px-6 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-rose-500 bg-clip-text text-transparent">
          Isabela Dutra
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'text-sm font-medium hover:text-rose-500 dark:hover:text-rose-400 transition-colors',
                location.pathname === '/' && 'text-rose-500 dark:text-rose-400'
              )}
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline" size="sm" onClick={toggleTheme}>
            {isDark ? <Sun className="w-4 h-4 text-rose-400" /> : <Moon className="w-4 h-4 text-teal-600" />}
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={toggleTheme}>
            {isDark ? <Sun className="w-4 h-4 text-rose-400" /> : <Moon className="w-4 h-4 text-teal-600" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-8 max-w-7xl mx-auto"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block py-2 text-sm font-medium hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
