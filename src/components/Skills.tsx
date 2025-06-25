import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = {
    frontend: { title: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    backend: { title: 'Backend', color: 'from-green-500 to-emerald-500' },
    tools: { title: 'Tools', color: 'from-purple-500 to-pink-500' },
    other: { title: 'Other Skills', color: 'from-orange-500 to-red-500' }
  };

  const renderSkillCard = (skill: any, index: number) => {
    const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
    
    return (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg mr-3">
              <IconComponent className="text-indigo-600" size={20} />
            </div>
            <h3 className="font-semibold text-gray-900">{skill.name}</h3>
          </div>
          <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-indigo-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit built through hands-on experience in development, 
              teaching, and continuous learning.
            </p>
          </div>

          {/* Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {['MERN Stack', 'TypeScript', 'Tailwind CSS', 'Git', 'Teaching', 'Leadership'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {Object.entries(skillCategories).map(([category, config]) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${config.color} bg-clip-text text-transparent mb-2`}>
                      {config.title}
                    </h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${config.color} rounded-full`}></div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categorySkills.map((skill, index) => renderSkillCard(skill, index))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              methodologies, and best practices to stay at the forefront of web development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;