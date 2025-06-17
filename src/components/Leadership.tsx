import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Trophy, Calendar, MapPin } from 'lucide-react';

const Leadership = () => {
  const positions = [
    {
      title: "President",
      organization: "IOSC BVP",
      duration: "Sep 2023–Present",
      location: "New Delhi, India",
      achievements: [
        "Conducted 7+ AI/ML workshops for 200+ participants, emphasizing deep learning",
        "Guided 100+ students in open-source projects via GitHub contributions",
        "Organized 3 hackathons for 150+ participants to foster technical innovation"
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Finvest Head",
      organization: "ENACTUS BVCOE",
      duration: "Sep 2024–Present",
      location: "New Delhi, India",
      achievements: [
        "Managed budgeting and strategy for 3 tech-driven social impact initiatives"
      ],
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  const achievements = [
    {
      title: "Intel Student Ambassador (Level 2)",
      description: "Delivered 3+ AI/ML bootcamps, training 350+ attendees in TensorFlow and cloud integration",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "3rd Runner-Up, Hackblocks Hackathon",
      description: "Created AI-based waste management solution, impacting 500+ community members",
      icon: <Trophy className="w-8 h-8" />
    },
    {
      title: "Judge, Intel Impact Gen AI Hackathon",
      description: "Assessed 80+ AI/ML projects for innovation and scalability",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const certifications = [
    "IBM Data Science Professional Certificate",
    "TensorFlow and Keras Bootcamp",
    "DataCamp: Deep Learning in Python",
    "DataCamp: Data Analyst with Python",
    "Coding Ninjas: Advanced DSA"
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Leadership & Achievements
            </span>
          </h2>
        </motion.div>

        {/* Leadership Positions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Leadership Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">{position.icon}</div>
                  <h4 className="text-xl font-bold text-white">{position.title}</h4>
                </div>
                
                <h5 className="text-lg font-semibold text-blue-400 mb-4">{position.organization}</h5>
                
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{position.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {position.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="text-yellow-400 mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-bold text-white mb-3">{achievement.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/50 p-4 rounded-lg border border-gray-600/30 hover:border-blue-500/50 transition-all duration-200"
                >
                  <p className="text-gray-300 text-sm leading-relaxed">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;