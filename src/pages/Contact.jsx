/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const themeColor = "#64ffda";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);

  const [titleRef, titleInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [infoRef, infoInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formViewRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const pathControls = useAnimation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setFormStatus('success');

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormStatus(null);
    }, 3000);
  };

  useEffect(() => {
    if (infoInView) {
      pathControls.start({
        pathLength: 1,
        transition: { duration: 2, ease: "easeInOut" }
      });
    }
  }, [infoInView, pathControls]);

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const titleLetters = "Get In Touch".split("");

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} px-4 pt-24 pb-12 relative overflow-hidden`}>
      {isDark && (
        <div 
          ref={mouseLightRef}
          className="pointer-events-none fixed opacity-20 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-400 to-blue-500"
        />
      )}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill={themeColor} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${themeColor}15 0%, transparent 70%)`,
            top: '15%',
            right: '5%'
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, ${themeColor}10 0%, transparent 70%)`,
            bottom: '10%',
            left: '10%'
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block">
            {titleLetters.map((letter, index) => (
              <motion.span
                key={index}
                className={`text-5xl sm:text-6xl font-bold inline-block ${letter === " " ? "mr-4" : "mr-1"} ${isDark ? 'text-white' : 'text-gray-800'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="w-24 h-1 mx-auto mt-4"
            style={{ backgroundColor: themeColor }}
            initial={{ width: 0 }}
            animate={titleInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Section */}
          <motion.div
            ref={infoRef}
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className={`rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-8 shadow-lg h-full`}>
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
                Contact Information
              </h2>

              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  { icon: FaMapMarkerAlt, title: "Location", content: "New York, NY" },
                  { icon: FaEnvelope, title: "Email", content: "hello@example.com" },
                  { icon: FaPhone, title: "Phone", content: "+1 (123) 456-7890" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} flex items-start space-x-4`}
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    custom={index}
                  >
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${themeColor}20` }}
                    >
                      <item.icon
                        className="text-xl"
                        style={{ color: themeColor }}
                      />
                    </div>
                    <div>
                      <h3 className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.title}
                      </h3>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className={`font-medium mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: FaLinkedinIn, url: "https://linkedin.com" },
                    { icon: FaGithub, url: "https://github.com" },
                    { icon: FaTwitter, url: "https://twitter.com" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: themeColor,
                        color: isDark ? '#1a202c' : '#ffffff'
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <social.icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative animated path */}
              <div className="mt-10 relative">
                <svg
                  width="100%"
                  height="80"
                  viewBox="0 0 300 80"
                  className="opacity-30"
                >
                  <motion.path
                    d="M10,40 C50,10 100,80 150,40 C200,0 250,60 290,40"
                    fill="transparent"
                    stroke={themeColor}
                    strokeWidth="2"
                    variants={pathVariants}
                    initial="hidden"
                    animate={pathControls}
                    custom={1}
                  />
                  <motion.circle
                    cx="10"
                    cy="40"
                    r="4"
                    fill={themeColor}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                  <motion.circle
                    cx="290"
                    cy="40"
                    r="4"
                    fill={themeColor}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2 } }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            ref={formViewRef}
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              ref={formRef}
              className={`rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-8 shadow-lg`}
            >
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
                Send Me a Message
              </h2>

              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${themeColor}20` }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        delay: 0.2
                      }}
                    >
                      <FaPaperPlane
                        className="text-3xl"
                        style={{ color: themeColor }}
                      />
                    </motion.div>
                    <motion.h3
                      className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      Message Sent!
                    </motion.h3>
                    <motion.p
                      className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      Thanks for reaching out. I'll get back to you soon!
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <label
                          htmlFor="name"
                          className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300 ${isDark
                            ? 'bg-gray-700 text-white focus:ring-teal-500/50'
                            : 'bg-gray-100 text-gray-900 focus:ring-teal-500/30'
                            }`}
                          placeholder="John Doe"
                          required
                        />
                      </motion.div>

                      {/* Email Field */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <label
                          htmlFor="email"
                          className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300 ${isDark
                            ? 'bg-gray-700 text-white focus:ring-teal-500/50'
                            : 'bg-gray-100 text-gray-900 focus:ring-teal-500/30'
                            }`}
                          placeholder="john@example.com"
                          required
                        />
                      </motion.div>
                    </div>

                    {/* Subject Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <label
                        htmlFor="subject"
                        className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300 ${isDark
                          ? 'bg-gray-700 text-white focus:ring-teal-500/50'
                          : 'bg-gray-100 text-gray-900 focus:ring-teal-500/30'
                          }`}
                        placeholder="How can I help you?"
                        required
                      />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300 ${isDark
                          ? 'bg-gray-700 text-white focus:ring-teal-500/50'
                          : 'bg-gray-100 text-gray-900 focus:ring-teal-500/30'
                          }`}
                        placeholder="Your message here..."
                        required
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="pt-4"
                    >
                      <motion.button
                        type="submit"
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                        className="px-8 py-3 rounded-full font-medium text-gray-900 relative overflow-hidden group"
                        style={{ backgroundColor: themeColor }}
                        disabled={isSubmitting}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <span className="h-4 w-4 rounded-full border-2 border-gray-900 border-t-transparent animate-spin"></span>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              Send Message
                              <FaPaperPlane className="text-sm" />
                            </>
                          )}
                        </span>
                        <motion.span
                          className="absolute inset-0 bg-black bg-opacity-10"
                          initial={{ scale: 0, x: "100%", y: "-100%" }}
                          whileHover={{ scale: 1.5, x: 0, y: 0 }}
                          transition={{ duration: 0.4 }}
                        />
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            type: "spring",
            stiffness: 100
          }}
        >
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Looking forward to hearing from you!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;