import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"] },
    { category: "Tools & Others", items: ["Git", "VS Code", "Postman", "Firebase", "Vercel"] }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} px-4 pt-24 pb-12`}>
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
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
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
              <FaGraduationCap className="text-4xl text-indigo-600 mb-4" />
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-indigo-600">BCA</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>NEF Law College</p>
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
              <FaLaptopCode className="text-4xl text-indigo-600 mb-4" />
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-indigo-600">Full Stack Developer</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Freelance</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2023 - Present</p>
                  <ul className={`mt-2 space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Building full-stack web applications using React and Node.js</li>
                    <li>• Implementing responsive designs and user authentication</li>
                    <li>• Working with databases like MongoDB and MySQL</li>
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
            <FaUserTie className="text-4xl text-indigo-600 mb-4" />
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 * index }}
                >
                  <h3 className="font-medium text-indigo-600 mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-sm ${
                          isDark 
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        } rounded-full hover:text-indigo-600 transition-colors duration-300`}
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