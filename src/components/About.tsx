import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Users, Globe, Heart, MapPin, Gem } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Teacher at Saan Coaching Center',
      description: 'Teaching and mentoring students in a supportive environment'
    },
    {
      icon: Gem,
      title: 'Entrepreneur',
      description: 'Managing our family jewelry shop and business'
    },
    {
      icon: Globe,
      title: 'English Skills',
      description: 'Fluent English communication, IELTS 7.5 Band'
    },
    {
      icon: Users,
      title: 'Team Leader',
      description: 'Leading and organizing educational activities'
    },
    {
      icon: Heart,
      title: 'Family Business',
      description: 'Supporting our gold shop legacy with modern ideas'
    },
    {
      icon: MapPin,
      title: 'Based in Nepal',
      description: 'Janakpur-14, embracing local culture'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
              About <span className="text-indigo-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-yellow-400 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto  rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="ankit.jpg"
                    alt="Ankit Swarnkar"
                    className="transition-transform duration-300 ease-in-out scale-125 hover:scale-150 w-full h-full object-cover rounded-full shadow-lg object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg">
                  <GraduationCap className="text-black" size={24} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a dedicated teacher at <span className="font-semibold text-indigo-600">Saan Coaching Center</span> in Janakpur-14, Nepal. I enjoy helping students grow and succeed in their studies.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As an entrepreneur, I manage our family's jewelry shop, combining tradition with new ideas to serve our community.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My strong English skills (IELTS 7.5 Band) help me communicate and teach effectively, making learning accessible for everyone.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Problem Solver', 'Quick Learner', 'Team Player', 'Innovation Driven'].map((trait, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    <highlight.icon className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;