import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const themeColor = "#64ffda";

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"] },
    { category: "Tools & Others", items: ["Git", "VS Code", "Postman", "Linux", "JWT"] }
  ];
  const mouseLightRef = useRef(null);

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
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} px-4 pt-24 pb-12`}>
      {isDark && (
        <div
          ref={mouseLightRef}
          className="pointer-events-none fixed opacity-20 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-400 to-blue-500"
        />
      )}
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl sm:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>
            About Me
          </h1>
        </motion.div>
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Education Section */}
          <motion.div
            className="col-span-2 md:col-span-1"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg`}>
              <div className="text-4xl mb-4" style={{ color: themeColor }}>
                <FaGraduationCap />
              </div>
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium" style={{ color: themeColor }}>BCA</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Dispur College</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2021 - Present</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="col-span-2"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={`rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg`}>
              <div className="text-4xl mb-4" style={{ color: themeColor }}>
                <FaLaptopCode />
              </div>
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium" style={{ color: themeColor }}>Full Stack Developer</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Freelance</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2023 - Present</p>
                  <ul className={`mt-2 space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Building full-stack web applications using React and Node.js</li>
                    <li>• Implementing responsive designs and user authentication</li>
                    <li>• Working with databases like MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={`rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg`}>
            <div className="text-4xl mb-4" style={{ color: themeColor }}>
              <FaUserTie />
            </div>
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 * index }}
                >
                  <h3 className="font-medium mb-3" style={{ color: themeColor }}>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-sm ${isDark
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          } rounded-full transition-colors duration-300`}
                        style={{ ':hover': { color: themeColor } }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto`}>
            I'm passionate about creating robust and user-friendly applications.
            Always eager to learn new technologies and solve complex problems.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;