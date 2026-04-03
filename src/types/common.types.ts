export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'other'
  url: string
  label: string
}

export interface SectionId {
  id: string
  label: string
}
