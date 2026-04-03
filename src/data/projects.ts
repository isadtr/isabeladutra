import type { Project } from '@/types/project.types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    shortDescription: 'Plataforma completa de e-commerce com carrinho, pagamento Stripe e painel admin.',
    fullDescription: 'Desenvolvida com React + Next.js, Node.js, TypeScript e PostgreSQL. Inclui autenticação JWT, upload de imagens com Cloudinary, busca full-text e dashboard analítico.',
    thumbnail: '/assets/images/projects/ecommerce-thumb.jpg',
    images: [
      '/assets/images/projects/ecommerce-1.jpg',
      '/assets/images/projects/ecommerce-2.jpg',
      '/assets/images/projects/ecommerce-3.jpg'
    ],
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    category: 'fullstack',
    githubUrl: 'https://github.com/username/ecommerce',
    deployUrl: 'https://ecommerce.example.com',
    featured: true,
    year: 2024
  },
  {
    id: '2',
    slug: 'task-manager',
    title: 'Task Manager',
    shortDescription: 'Aplicativo de gerenciamento de tarefas com drag & drop e sincronização real-time.',
    fullDescription: 'React + Vite com Zustand para state management, integração Socket.io para real-time e Firebase para autenticação e storage.',
    thumbnail: '/assets/images/projects/taskmanager-thumb.jpg',
    images: ['/assets/images/projects/taskmanager-1.jpg'],
    tags: ['React', 'Vite', 'Zustand', 'Socket.io', 'Firebase'],
    category: 'frontend',
    githubUrl: 'https://github.com/username/taskmanager',
    deployUrl: 'https://taskmanager.example.com',
    featured: true,
    year: 2023
  },
  {
    id: '3',
    slug: 'portfolio-site',
    title: 'Portfolio Website',
    shortDescription: 'Este site! Portfólio moderno com animações e TypeScript.',
    fullDescription: 'Desenvolvido com React 18, TailwindCSS, Framer Motion e Vite. Totalmente responsivo com dark mode e otimização de performance.',
    thumbnail: '/assets/images/projects/portfolio-thumb.jpg',
    images: [],
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'],
    category: 'frontend',
    githubUrl: 'https://github.com/username/portfolio',
    deployUrl: null,
    featured: false,
    year: 2024
  }
]
