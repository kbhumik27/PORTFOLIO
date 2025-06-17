import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Feature-Based AI Music Generator",
      description: "Constructed BiLSTM-based AI for melody synthesis, retaining 85% musical patterns. Formulated MIDI preprocessing pipeline using librosa for MFCC/chroma extraction.",
      technologies: ["TensorFlow", "Python", "MIDI Processing", "BiLSTM", "Librosa"],
      year: "2025",
      accuracy: "85%",
      github: "http://github.com/kbhumik27/CHORUS.AI",
      featured: true
    },
    {
      title: "REPSY - Computer Vision Gym Trainer",
      description: "Designed real-time posture correction system for 5+ exercises via pose estimation. Enhanced performance with multithreading for seamless operation.",
      technologies: ["OpenCV", "Mediapipe", "Python", "Flask", "Pose Estimation"],
      year: "2024",
      accuracy: "Real-time",
      github: "https://github.com/kbhumik27/Repsy--AI-GYM-TRAINER",
      featured: true
    },
   {
      title: "Wakeup Awareness Detector",
      description: "Developed real-time drowsiness detection system using facial landmark analysis and eye aspect ratio monitoring. Implemented alert mechanisms to prevent fatigue-related incidents.",
      technologies: ["OpenCV", "Python", "Facial Recognition", "Computer Vision", "Alert System"],
      year: "2024",
      accuracy: "Real-time",
      github: "https://github.com/kbhumik27/Wakeup-awareness-detector-",
      featured: true
    },
    {
      title: "Peer to Peer Chat Application",
      description: "Built decentralized chat application using WebRTC for direct peer-to-peer communication. Implemented secure messaging with end-to-end encryption and file sharing capabilities.",
      technologies: ["WebRTC", "JavaScript", "Node.js", "Socket.io", "Encryption", "P2P"],
      year: "2024",
      accuracy: "Real-time",
      github: "https://github.com/kbhumik27/peer-to-peer-video-chat-application",
      featured: true
    },
    {
      title: "Grammar Scoring ASR System",
      description: "Engineered ASR system with grammar scoring, achieving 90% speech-to-text accuracy. Utilized WaveVec2 for transcription and NLTK for grammar analysis.",
      technologies: ["Python", "WaveVec2", "NLTK", "ASR", "NLP"],
      year: "2023",
      accuracy: "90%",
      github: "https://github.com/kbhumik27/Grammer-scoring-ASR"
    },
    {
      title: "Predictive Analytics - California House Price Model",
      description: "Developed Random Forest and Lasso models with 0.82 R² via feature engineering. Performed EDA using pandas/seaborn to identify patterns.",
      technologies: ["Python", "SQL", "scikit-learn", "Pandas", "Machine Learning"],
      year: "2023",
      accuracy: "R² 0.82",
      github: "https://github.com/kbhumik27/loan-predictio"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative AI/ML projects demonstrating expertise in computer vision, 
            natural language processing, and deep learning applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group ${
                project.featured 
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30' 
                  : 'bg-gray-800/50 border-gray-700/50'
              } backdrop-blur-sm p-8 rounded-xl border hover:border-blue-500/50 transition-all duration-300`}
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full">
                  <Star className="w-4 h-4 text-white" />
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
                <div className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">
                  {project.accuracy}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 hover:border-blue-500/50 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;