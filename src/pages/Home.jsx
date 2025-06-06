import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/images/Profile.jpg';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const mouseLightRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mouseLightRef.current && isDark) {
        const x = e.clientX;
        const y = e.clientY;
        mouseLightRef.current.style.left = `${x}px`;
        mouseLightRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDark]);
  return (
    <div className="min-h-screen bg-primary px-4 pt-20 pb-12">
      {isDark && (
        <div
          ref={mouseLightRef}
          className="pointer-events-none fixed opacity-20 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-400 to-blue-500"
        />
      )}
      <div className="max-w-7xl mx-auto">
        {/* Mobile Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6 mb-8 md:hidden"
        >
          <a
            href="https://github.com/farhandotme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-[#64ffda] transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:princeofficial355@gmail.com"
            className="text-text-secondary hover:text-[#64ffda] transition-all duration-300"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="tel:+919707998677"
            className="text-text-secondary hover:text-[#64ffda] transition-all duration-300 font-mono"
          >
            +91
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-first relative max-w-[280px] sm:max-w-[320px] mx-auto md:order-last"
          >
            <div className="relative z-10">
              <img
                src={profilePic}
                alt="Farhan Hussain"
                className="w-full rounded-md grayscale hover:grayscale-0 transition-all duration-500
                  hover:shadow-xl hover:shadow-[#64ffda]/20"
              />
              <div className="absolute -inset-4 border-2 border-[#64ffda]/50 rounded-md -z-10 
                transform hover:translate-x-2 hover:translate-y-2 transition-all duration-300
                hover:border-[#64ffda]/80 hover:shadow-lg hover:shadow-[#64ffda]/10"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-[#64ffda] font-mono mb-3 sm:mb-5">Hi, I'm</p>
            <h1 className="text-3xl sm:text-7xl font-bold text-text-primary mb-2 sm:mb-4">
              Farhan Hussain.
            </h1>
            <h2 className="text-3xl sm:text-7xl font-bold text-text-secondary mb-6 sm:mb-8">
              Full Stack Developer
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto md:mx-0 mb-8 sm:mb-12 text-base sm:text-lg">
              I'm a motivated and self-taught developer currently pursuing BCA.
              Specializing in building full-stack web applications using modern technologies.
              Based in Guwahati, Assam, India.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                to="/projects"
                className="btn btn-outline font-mono text-sm sm:text-base"
              >
                View My Projects
              </Link>
              <Link
                to="/contact"
                className="btn btn-primary font-mono text-sm sm:text-base"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 sm:mt-16 text-text-secondary"
            >
              <h3 className="text-lg sm:text-xl font-mono text-[#64ffda] mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Python', 'C++', 'Java', 'Ejs', "Docker", "Git"]
                  .map((skill, index) => (
                    <span key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-light rounded-full text-xs sm:text-sm
                      hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="fixed left-10 bottom-0 hidden md:block"
        >
          <div className="flex flex-col space-y-6 after:w-[1px] after:h-32 after:bg-text-secondary after:mx-auto after:mt-6">
            <div className="flex flex-col space-y-6 after:w-[1px] after:h-32 after:bg-text-secondary after:mx-auto after:mt-6">
              <a
                href="https://github.com/farhandotme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-secondary hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:princeofficial355@gmail.com"
                className="text-text-secondary hover:text-secondary hover:-translate-y-1 transition-all duration-300"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="tel:+919707998677"
                className="text-text-secondary hover:text-secondary hover:-translate-y-1 transition-all duration-300 font-mono"
              >
                +91
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;