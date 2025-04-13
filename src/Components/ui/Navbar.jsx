import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = "block py-2 px-4 text-gray-700 font-sans scroll-smooth dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition";

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] border border-gray-700 rounded-4xl z-50 transition-colors duration-300
  ${isScrolled
          ? ' backdrop-blur-md shadow-lg'
          : 'bg-black/90 dark:bg-black/90 border-gray-800'
        }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={navLinkClasses}>Home</a>
            <a href="#about" className={navLinkClasses}>About</a>
            <a href="#skills" className={navLinkClasses}>Skills</a>
            <a href="#projects" className={navLinkClasses}>Projects</a>
            <Link to={'/contact'} className={navLinkClasses}>Contact</Link>
          </div>

          

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-gray-800 dark:text-white focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white dark:bg-[#040508] transition-all duration-300 space-y-2 rounded-b-3xl">
          <a href="#home" onClick={toggleMenu} className={navLinkClasses}>Home</a>
          <a href="#projects" onClick={toggleMenu} className={navLinkClasses}>Projects</a>
          <a href="#skills" onClick={toggleMenu} className={navLinkClasses}>Skills</a>
          {/* <a href="#contact" onClick={toggleMenu} className={navLinkClasses}>Contact</a> */}
          <Link to={'/contact'} className={navLinkClasses}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
