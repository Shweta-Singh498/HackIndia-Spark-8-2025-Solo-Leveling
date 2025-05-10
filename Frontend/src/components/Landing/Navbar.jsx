// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-black  py-1 shadow-md rounded-3xl border-1 border-b-cyan-400">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Left side: Logo */}
//         <div className="text-white font-normal text-2xl pl-2">
//             <span className='text-purple-700 font-bold'>Campus </span>
//             Copilot
//             </div>

//         {/* Right side: Navigation links */}
//         <div className="hidden md:flex items-center">
//           <a href="#" className="px-4 py-2 text-gray-100 hover:text-purple-400 font-semibold">
//             Home
//           </a>
//           <a href="#" className="px-4 py-2 text-gray-100 hover:text-purple-400 font-semibold">
//             Feature
//           </a>
//           <a href="#" className="px-4 py-2 text-gray-100 hover:text-purple-400 font-semibold">
//             Services
//           </a>
//           <a href="#" className="px-4 py-2 text-gray-100 hover:text-purple-400 font-semibold">
//             Contact
//           </a>
//           {/* <Link to='/login' >
//           <button className="px-4 py-2 text-gray-300 hover:text-white">Login</button>
//           </Link> */}
//           {/* <Link to='/register'>
//           <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mt-1 mb-1 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-700 dark:focus:ring-purple-900">Register</button>
//           </Link> */}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMobileMenu}
//             className="px-4 py-2 rounded focus:outline-none text-gray-100 hover:text-blue-600"
//           >
//             {isMobileMenuOpen ? 'Close' : 'Menu'}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Content (appears when mobile menu is open) */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-dark shadow-md py-4">
//           <div className="container mx-auto px-4">
//             <ul className="flex flex-col items-center">
//               <li>
//                 <a href="#" className="block px-4 py-2 text-gray-200 hover:text-white">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 text-gray-200 hover:text-white">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 text-gray-200 hover:text-white">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 text-gray-200 hover:text-white">
//                   Contact
//                 </a>
//               </li>
//               {/* <Link to='/login' >
//           <button className="px-4 py-2 text-gray-300 hover:text-white">Login</button>
//           </Link>
//           <Link to='/register' >
//           <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Register</button>
//           </Link> */}
//             </ul>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// "use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { Link } from "react-router-dom";

import Signup from "../login_register/Signup"
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ["home", "projects", "about", "skills", "contact"];
      const sectionElements = sections.map((id) => document.getElementById(id));

      const currentPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", section: "home" },
    { name: "Projects", href: "#projects", section: "projects" },
    { name: "About", href: "#about", section: "about" },
    { name: "Skills", href: "#skills", section: "skills" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 backdrop-blur-lg bg-black/50" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-2xl font-bold relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
              Campus Copilot
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"
              layoutId="underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === link.section
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === link.section && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {link.name}
              </a>
            ))}
            <MagneticButton>
             <Link to="/register">
    <div className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-medium text-sm cursor-pointer">
      Register
    </div>
  </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden flex flex-col justify-center"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="flex flex-col items-center space-y-8 px-6"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  className={`text-2xl font-medium ${
                    activeSection === link.section
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div variants={itemVariants}>
               <Link to="/register">
    <div className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-medium text-sm cursor-pointer">
      Register
    </div>
  </Link>

              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
