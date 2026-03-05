/**
 * Configuration constants for the Softyanix application
 */

export const APP_CONFIG = {
  name: 'Softyanix',
  tagline: 'Digital Solutions Agency',
  description: 'Modern digital solutions agency specializing in MERN stack development, AI chatbots, mobile apps, and UI/UX design',
  email: import.meta.env.VITE_EMAIL || 'contact@softyanix.com',
  phone: import.meta.env.VITE_PHONE || '+92 340 257 3560',
  whatsapp: import.meta.env.VITE_WHATSAPP_PHONE || '923402573560',
  address: 'Lahore, Pakistan',
  social: {
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/infosamyanix-inc',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/company/softyanix',
    twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/softyanix',
  },
} as const;

export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  endpoints: {
    whatsappRedirect: '/api/whatsapp/redirect',
    whatsappInfo: '/api/whatsapp/info',
  },
  timeout: 10000,
} as const;

export const ROUTES = {
  home: '/',
  services: '/services',
  projects: '/projects',
  about: '/about',
  contact: '/contact',
} as const;

export const SERVICE_CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'AI Solutions',
  'UI/UX Design',
  'Cloud Services',
  'Consulting',
] as const;

export const PROJECT_CATEGORIES = [
  'All',
  'Web App',
  'Mobile App',
  'AI/ML',
  'E-commerce',
  'Dashboard',
] as const;
