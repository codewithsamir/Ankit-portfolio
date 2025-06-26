export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  status: string;
}