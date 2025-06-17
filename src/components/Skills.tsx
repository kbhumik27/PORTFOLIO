import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Eye, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "ML/DL Frameworks",
      skills: ["TensorFlow", "Keras", "PyTorch", "scikit-learn", "WaveVec2"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision & NLP",
      skills: ["OpenCV", "Mediapipe", "NLTK", "DLib", "librosa"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Web & Cloud",
      skills: ["React.js", "Flask", "REST APIs", "Git", "Node.js"],
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases & Tools",
      skills: ["MySQL", "Oracle", "PySpark", "pandas", "matplotlib"],
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "Software Engineering", "Deep Learning"],
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning machine learning, computer vision, web development, 
            and software engineering fundamentals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-6 text-white`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: (index * 0.1) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + (skillIndex * 3)}%` }}
                        transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Specializations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["AI/ML", "Computer Vision", "NLP", "Generative AI", "Deep Learning", "Data Science"].map((spec, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-200 cursor-default"
              >
                {spec}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;