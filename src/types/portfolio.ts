export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone?: string;
  linkedinUrl: string;
  githubUrl?: string;
  resumeUrl: string;
  yearsOfExperience: string;
  status: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface HighlightItem {
  metric: string;
  label: string;
  detail: string;
}

export interface CorePrinciple {
  title: string;
  description: string;
  icon: string;
}

export interface AboutData {
  bioParagraphs: string[];
  highlights: HighlightItem[];
  principles: CorePrinciple[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  workMode?: "On-site" | "Hybrid" | "Remote";
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  description?: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  companyUrl?: string;
}

export interface SkillItem {
  name: string;
  category: string;
  featured?: boolean;
  notes?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export type ProjectCategory = "All" | "Enterprise Systems" | "Web Applications" | "E-Commerce & Portals";

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemSolved?: string;
  category: ProjectCategory;
  technologies: string[];
  responsibilities?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  confidential?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  field?: string;
  details?: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  duration: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

export interface PortfolioData {
  profile: Profile;
  navigation: NavigationItem[];
  about: AboutData;
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
  trainings: TrainingItem[];
  socialLinks: SocialLink[];
}
