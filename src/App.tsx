import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail.tsx'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<div>404 - Página não encontrada</div>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
