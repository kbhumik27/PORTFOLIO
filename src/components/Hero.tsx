import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "AI/ML Engineer & Computer Vision Specialist";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Simplified floating particles
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl opacity-50" />
        
        {/* Floating Particles */}
        <FloatingParticles />
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <motion.span 
                  className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Bhumik Kumar
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  Kapoor
                </motion.span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div variants={itemVariants}>
              <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12 flex items-center justify-center">
                <span className="font-light">{displayText}</span>
                <motion.span 
                  className="ml-1 w-0.5 h-8 bg-blue-400 rounded-full"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed">
                Electronics & Communication Engineering student specializing in{' '}
                <span className="text-blue-300 font-medium">Machine Learning</span>,{' '}
                <span className="text-purple-300 font-medium">Computer Vision</span>, and{' '}
                <span className="text-cyan-300 font-medium">Natural Language Processing</span>.
                <br />
                Passionate about creating innovative AI solutions that solve real-world problems.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
                  <MapPin size={18} className="text-blue-400" />
                  <span className="text-gray-300">New Delhi, India</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
                  <Mail size={18} className="text-purple-400" />
                  <span className="text-gray-300">bhumikkapoor27@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <div className="flex justify-center space-x-6">
                {[
                  { 
                    icon: Github, 
                    href: "https://github.com/kbhumik27", 
                    color: "hover:text-gray-300"
                  },
                  { 
                    icon: Linkedin, 
                    href: "https://linkedin.com/in/bhumik-kumar-kapoor", 
                    color: "hover:text-blue-400"
                  },
                  { 
                    icon: Mail, 
                    href: "mailto:bhumikkapoor27@gmail.com", 
                    color: "hover:text-purple-400"
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.icon !== Mail ? "_blank" : undefined}
                    rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                    className={`p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 text-gray-400 transition-all duration-300 ${social.color}`}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(31, 41, 55, 0.8)"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center text-gray-500 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm mb-2 font-light">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <ArrowDown size={16} className="mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;