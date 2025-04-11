import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { FaHome, FaUser, FaLaptopCode, FaEnvelope } from "react-icons/fa";

const MacDockNavbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigation = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "About", path: "/about", icon: FaUser },
    { name: "Projects", path: "/projects", icon: FaLaptopCode },
    { name: "Contact", path: "/contact", icon: FaEnvelope },
  ];

  // Add theme icon based on current theme
  const ThemeIcon = theme === "dark" ? FaSun : FaMoon;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pb-2">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`rounded-full px-2 flex items-center space-x-1 sm:space-x-2 md:space-x-3
          bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg
          border border-gray-200 dark:border-slate-700`}
      >
        {navigation.map((item, index) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredItem === index;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link to={item.path}>
                <motion.div
                  className={`flex flex-col items-center justify-center p-1 rounded-full
                    transition-all duration-100 ease-in-out
                    ${isActive
                      ? "text-[#64ffda]"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#64ffda]"
                    }`}
                  whileHover={{ scale: 1.2, y: -10 }}
                >
                  <motion.div
                    className={`relative z-10 p-2 rounded-full
                      ${isActive ? "bg-teal-500/20" : "bg-transparent"}`}
                  >
                    <item.icon
                      size={isHovered || isActive ? 28 : 24}
                      className="transition-all duration-300"
                    />
                  </motion.div>

                  {/* Label that appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : -5,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-0 transform -translate-y-full mt-1 text-xs font-medium"
                  >
                    <span
                      className={`px-2 py-1 rounded-md 
                      bg-white/90 dark:bg-slate-700/90 
                      text-gray-800 dark:text-white
                      shadow-md`}
                    >
                      {item.name}
                    </span>
                  </motion.div>

                  {/* Dot indicator for active item */}
                  {isActive && (
                    <motion.div
                      className="w-1 h-1 bg-[#64ffda] rounded-full mt-1"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.div>
              </Link>
            </motion.div>
          );
        })}

        {/* Theme toggle button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
          className="relative"
          onMouseEnter={() => setHoveredItem("theme")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <motion.button
            onClick={toggleTheme}
            className={`flex flex-col items-center justify-center p-2 rounded-full
              transition-all duration-300 ease-in-out
              text-gray-600 dark:text-gray-300 hover:text-[#64ffda]`}
            whileHover={{ scale: 1.2, y: -10 }}
          >
            <motion.div className="relative z-10 p-2 rounded-full">
              <ThemeIcon
                size={hoveredItem === "theme" ? 28 : 24}
                className="transition-all duration-300"
              />
            </motion.div>

            {/* Label that appears on hover */}
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{
                opacity: hoveredItem === "theme" ? 1 : 0,
                y: hoveredItem === "theme" ? 0 : -5,
              }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 transform -translate-y-full mt-1 text-xs font-medium"
            >
              <span
                className={`px-2 py-1 rounded-md 
                bg-white/90 dark:bg-slate-700/90 
                text-gray-800 dark:text-white
                shadow-md`}
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MacDockNavbar;
