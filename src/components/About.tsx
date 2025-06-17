import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Eye, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Expertise",
      description: "Specialized in deep learning, neural networks, and advanced machine learning algorithms"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Expert in OpenCV, image processing, and real-time computer vision applications"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in React.js, Flask, and building end-to-end AI-powered applications"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Research & Innovation",
      description: "Published research work and innovative solutions in AI/ML domain"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Electronics & Communication Engineering student with a deep focus on 
            Artificial Intelligence and Machine Learning. My journey involves creating innovative 
            solutions that bridge the gap between cutting-edge research and real-world applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50"
            >
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">My Mission</h3>
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            To leverage the power of Artificial Intelligence and Machine Learning to solve complex 
            real-world problems, while contributing to the advancement of technology through research, 
            innovation, and community engagement. I believe in the transformative potential of AI to 
            create a better future for everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;