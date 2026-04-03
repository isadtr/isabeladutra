export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  thumbnail: string
  images: string[]
  tags: string[]
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'other'
  githubUrl: string | null
  deployUrl: string | null
  featured: boolean
  year: number
}
