import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Users, Star, BookOpen, Award, TrendingUp } from 'lucide-react';

const Teaching: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, label: 'Students Taught', value: '100+' },
    { icon: BookOpen, label: 'Courses Delivered', value: '15+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' },
    { icon: Award, label: 'Certifications', value: '5+' }
  ];

  const courses = [
    {
      title: 'JavaScript Fundamentals',
      description: 'Complete introduction to JavaScript programming',
      students: 45,
      rating: 4.9
    },
    {
      title: 'React Development',
      description: 'Building modern web applications with React',
      students: 38,
      rating: 4.8
    },
    {
      title: 'Full Stack MERN',
      description: 'End-to-end web development with MERN stack',
      students: 25,
      rating: 5.0
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
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
              Teaching at <span className="text-indigo-600">Saan Academy</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about sharing knowledge and helping the next generation of developers 
              build their skills and confidence in web development.
            </p>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                  <GraduationCap size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Saan Academy Instructor</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    As a dedicated instructor at Saan Academy, I've had the privilege of 
                    mentoring over 100 students in web development. My teaching philosophy 
                    focuses on practical, hands-on learning that prepares students for 
                    real-world challenges.
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg">
                  <Award className="text-black" size={24} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="p-3 bg-indigo-100 rounded-lg w-fit mx-auto mb-3">
                      <stat.icon className="text-indigo-600" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Courses Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Courses</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <BookOpen className="text-indigo-600" size={24} />
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{course.students} students</span>
                    <span>Active</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Teaching Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <TrendingUp size={48} className="mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">My Teaching Philosophy</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              "I believe in learning by doing. Every concept is taught through practical examples, 
              real-world projects, and hands-on coding sessions. My goal is not just to teach 
              syntax, but to develop problem-solving skills and confidence in my students."
            </p>
            <div className="mt-8">
              <span className="font-semibold">- Ankit Swarnkar, Senior Instructor</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Teaching;