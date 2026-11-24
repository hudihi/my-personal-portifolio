export interface Project {
  id: string;
  title: string;
  role: string;
  category: 'Full-Stack & DevOps' | 'Mobile & AI' | 'Client Platforms' | 'Machine Learning';
  description: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}
