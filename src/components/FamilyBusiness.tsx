import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, Heart, Users, TrendingUp, Star, Calendar } from 'lucide-react';

const FamilyBusiness: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const businessHighlights = [
    {
      icon: Crown,
      title: 'Gold Legacy',
      description: 'Three generations of trust and quality in precious metals'
    },
    {
      icon: Users,
      title: 'Community Trust',
      description: 'Building lasting relationships with customers across Nepal'
    },
    {
      icon: TrendingUp,
      title: 'Modern Management',
      description: 'Bringing digital solutions to traditional business practices'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Maintaining the highest standards in every transaction'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
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
              <span className="text-yellow-600">Gold</span> Legacy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond technology, I'm proud to be part of our family's gold business - 
              where tradition meets modern management and customer service excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/844923/pexels-photo-844923.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Gold Shop"
                    className="w-full h-80 object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Crown className="text-yellow-600" size={24} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-red-500" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Family Heritage</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our family's gold shop has been a cornerstone of trust in our community for 
                generations. I bring my organizational skills and modern approach to help 
                manage operations, customer relationships, and digital presence.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                This experience has taught me valuable lessons in customer service, 
                attention to detail, and the importance of maintaining trust - skills 
                that directly translate to my work in technology and education.
              </p>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6 border-l-4 border-yellow-500">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-yellow-600" size={18} />
                  <span className="font-semibold text-gray-900">Since 1980</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Three generations of excellence in precious metals and jewelry
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {businessHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="p-3 bg-yellow-100 rounded-lg w-fit mx-auto mb-4">
                  <highlight.icon className="text-yellow-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Bridging Tradition & Innovation</h3>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                Working in our family business has given me a unique perspective on combining 
                traditional values with modern efficiency. I apply the same principles of 
                trust, quality, and customer satisfaction to every project I undertake.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Trust</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Quality</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Heritage</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Innovation</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyBusiness;