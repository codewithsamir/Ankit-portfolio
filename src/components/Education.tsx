import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, Globe, Users } from 'lucide-react';
import { education, achievements } from '../data/portfolio';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
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
              Education & <span className="text-indigo-600">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey and professional achievements that have shaped my 
              expertise in technology and education.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <GraduationCap className="text-indigo-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Current Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{education.degree}</h4>
                    <div className="flex items-center gap-2 text-indigo-600 mb-2">
                      <BookOpen size={16} />
                      <span className="font-medium">{education.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin size={16} />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Calendar size={16} />
                      <span>{education.period}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {education.status}
                    </span>
                  </div>
                </div>

                <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-3">Academic Focus</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Computer Science', 'Software Engineering', 'Web Development', 'Data Structures'].map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Award className="text-yellow-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Key Achievements</h3>
                </div>
                
                <div className="space-y-6">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon === 'Award' ? Award : 
                                        achievement.icon === 'Users' ? Users :
                                        GraduationCap;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="bg-white rounded-lg p-4 shadow-sm"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-yellow-100 rounded-lg shrink-0">
                            <IconComponent className="text-yellow-600" size={20} />
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">{achievement.title}</h5>
                            <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                            <span className="text-xs text-gray-500 font-medium">{achievement.date}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* IELTS Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Globe size={48} />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">IELTS Band 7.5</h3>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                Achieved excellent English proficiency, enabling me to communicate effectively 
                with international clients, teach in English, and contribute to global 
                development communities.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">7.5</div>
                  <div className="text-sm opacity-75">Overall</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">8.0</div>
                  <div className="text-sm opacity-75">Listening</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">7.5</div>
                  <div className="text-sm opacity-75">Reading</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">7.0</div>
                  <div className="text-sm opacity-75">Writing</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;