import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, GraduationCap, Users, Globe, Heart, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Developer',
      description: 'MERN Stack specialist with passion for clean code'
    },
    {
      icon: GraduationCap,
      title: 'Educator at Saan Academy',
      description: 'Teaching and mentoring future developers'
    },
    {
      icon: Globe,
      title: 'IELTS 7.5 Band',
      description: 'Fluent English communication skills'
    },
    {
      icon: Users,
      title: 'Team Leader',
      description: 'Leading projects and organizing tech events'
    },
    {
      icon: Heart,
      title: 'Family Business',
      description: 'Helping manage our gold shop legacy'
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
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full overflow-hidden shadow-2xl">
                  <img
                    // src="/ankit.jpg"
                    src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/480260986_3536418889994179_7004838434107165283_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGKMhi4vH9_8dReb9yUF7xv4ewxlfK47_Th7DGV8rjv9FBl44RuYVBfOg2kzQrw50sByDZk2WZlz7rBqGo6d-C8&_nc_ohc=8007urUfseAQ7kNvwFgnesF&_nc_oc=AdkfaQ5mNmxTO1chTVVCPS0F55RP2nkgIaBMV-yakqaHcajoCGENGKGI0by7jycbQuH3oVTcLem5xOt78V_68jvk&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=QcpYmCIpbUofHskNsfLI0g&oh=00_AfOXjt4-gQdk17vJIk_xTcjfDZGuA9PM97yO6ArLJOUnbA&oe=68633D92"
                    alt="Ankit Swarnkar"
                    className="transition-transform duration-300 ease-in-out scale-125 hover:scale-150 w-full h-full object-cover rounded-full shadow-lg object-top"

                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg">
                  <Code className="text-black" size={24} />
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
                I'm a passionate Full Stack Developer currently pursuing my Bachelor's degree at 
                <span className="font-semibold text-indigo-600"> Rajershi University</span> in 
                Janakpur-14, Nepal. My journey in tech is driven by curiosity and a desire to 
                create meaningful digital experiences.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As an educator at <span className="font-semibold text-indigo-600">Saan Academy</span>, 
                I've had the privilege of mentoring over 100 students in web development. With my 
                IELTS 7.5 band score, I bridge language barriers to make technology accessible to everyone.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond coding, I'm actively involved in our family's gold shop business, where I 
                apply my organizational and leadership skills. I believe in balancing tradition 
                with innovation, bringing modern solutions to established practices.
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