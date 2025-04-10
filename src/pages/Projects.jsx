import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const themeColor = "#64ffda";

  // State for filtering projects
  const [filter, setFilter] = useState('all');

  // Project data
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with React, Next.js and Tailwind CSS featuring dark mode and animations.",
      image: "/images/portfolio.jpg", // Replace with your image path
      technologies: ["React", "Next.js", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/username/portfolio",
      live: "https://portfolio.example.com",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product catalog, and payment processing.",
      image: "/images/ecommerce.jpg", // Replace with your image path
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "https://github.com/username/ecommerce",
      live: "https://ecommerce.example.com",
      featured: true
    },
    {
      id: 3,
      title: "Task Management API",
      description: "RESTful API for task management with user authentication and authorization.",
      image: "/images/task-api.jpg", // Replace with your image path
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "backend",
      github: "https://github.com/username/task-api",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard that displays current weather and forecast data from a public API.",
      image: "/images/weather.jpg", // Replace with your image path
      technologies: ["React", "Redux", "OpenWeather API"],
      category: "frontend",
      github: "https://github.com/username/weather-app",
      live: "https://weather.example.com",
      featured: false
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
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
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl sm:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>
            My Projects
          </h1>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: themeColor }}></div>
          <p className={`mt-6 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Here are some of the projects I've worked on. Each one represents different skills and technologies I've mastered.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['all', 'featured', 'frontend', 'backend', 'fullstack'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                ? `text-gray-900 ${isDark ? 'bg-opacity-90' : 'bg-opacity-80'}`
                : `${isDark ? 'text-gray-300 bg-gray-800' : 'text-gray-700 bg-gray-200'} hover:opacity-80`
                }`}
              style={filter === category ? { backgroundColor: themeColor } : {}}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className={`rounded-lg overflow-hidden shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 hover:-translate-y-2`}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-900 bg-opacity-30" />
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  {/* Placeholder - replace with your actual image */}
                  <FaCode className="text-4xl text-white opacity-30" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}>
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:scale-110 transition-transform"
                        style={{ color: themeColor }}
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:scale-110 transition-transform"
                        style={{ color: themeColor }}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs rounded-full ${isDark
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-100 text-gray-800'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          className={`mt-20 p-8 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Interested in working together?
          </h3>
          <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-full font-medium text-gray-900 transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: themeColor }}
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;