import { Project, Skill, Achievement, Education } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN application with payment integration, user authentication, and admin dashboard. Features include shopping cart, order tracking, and inventory management.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    githubUrl: 'https://github.com/AnkitSwarnkar1122',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['#MERN', '#FullStack', '#Responsive', '#Payment']
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/ankitswarnkar',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['#React', '#TypeScript', '#RealTime', '#Collaboration']
  },
  {
    id: '3',
    title: 'Learning Management System',
    description: 'Educational platform for Saan Academy with course management, student progress tracking, and interactive learning modules.',
    techStack: ['React', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    githubUrl: 'https://github.com/ankitswarnkar',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['#Education', '#MERN', '#JWT', '#Academy']
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with smooth animations, contact forms, and dynamic content management.',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    githubUrl: 'https://github.com/ankitswarnkar',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['#Portfolio', '#Animation', '#Responsive', '#Modern']
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', icon: 'Code', level: 95, category: 'frontend' },
  { name: 'CSS', icon: 'Palette', level: 90, category: 'frontend' },
  { name: 'JavaScript', icon: 'Zap', level: 88, category: 'frontend' },
  { name: 'React', icon: 'Atom', level: 85, category: 'frontend' },
  { name: 'TypeScript', icon: 'FileCode', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'Wind', level: 90, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'Server', level: 85, category: 'backend' },
  { name: 'Express', icon: 'Zap', level: 80, category: 'backend' },
  { name: 'MongoDB', icon: 'Database', level: 82, category: 'backend' },
  
  // Tools
  { name: 'Git', icon: 'GitBranch', level: 88, category: 'tools' },
  { name: 'GitHub', icon: 'Github', level: 90, category: 'tools' },
  { name: 'Postman', icon: 'Send', level: 85, category: 'tools' },
  { name: 'VS Code', icon: 'Code2', level: 95, category: 'tools' },
  
  // Other
  { name: 'Communication', icon: 'MessageCircle', level: 95, category: 'other' },
  { name: 'Team Management', icon: 'Users', level: 88, category: 'other' },
  { name: 'Teaching', icon: 'GraduationCap', level: 90, category: 'other' },
  { name: 'English Fluency', icon: 'Languages', level: 95, category: 'other' }
];

export const achievements: Achievement[] = [
  {
    title: 'IELTS Band 7.5',
    description: 'Achieved excellent English proficiency with Band 7.5 in IELTS examination',
    date: '2023',
    icon: 'Award'
  },
  {
    title: 'Team Leadership',
    description: 'Successfully led multiple project teams and organized tech events',
    date: '2023',
    icon: 'Users'
  },
  {
    title: 'Teaching Excellence',
    description: 'Mentored 100+ students at Saan Academy in web development',
    date: '2023',
    icon: 'GraduationCap'
  }
];

export const education: Education = {
  institution: 'Rajershi University',
  degree: 'Bachelor\'s Degree',
  location: 'Janakpur-14, Nepal',
  period: '2022 - Present',
  status: 'Currently Pursuing'
};