import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      navbar ? 'bg-white/95 dark:bg-[#0a192f]/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-2xl font-bold text-[#64ffda]">
              Farhan hussain
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-[#64ffda]'
                        : 'text-gray-600 dark:text-gray-300 hover:text-[#64ffda] hover:scale-105'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Theme Toggle Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full transition-colors duration-300
                  text-gray-600 dark:text-gray-300 hover:text-[#64ffda]"
              >
                {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-[#0a192f]/95 shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-[#64ffda]'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#64ffda]'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium
              text-gray-600 dark:text-gray-300 hover:text-[#64ffda]
              transition-colors duration-300 flex items-center gap-2"
          >
            {theme === 'dark' ? (
              <>
                <FaSun size={16} /> Light Mode
              </>
            ) : (
              <>
                <FaMoon size={16} /> Dark Mode
              </>
            )}
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;