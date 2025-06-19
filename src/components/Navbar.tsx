// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI Button
import { Menu, X, Shield, BookOpen } from 'lucide-react'; // Added Shield for the logo icon
import { Link, NavLink } from 'react-router-dom'; // React Router

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Handles scroll event to apply different styles when scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Sets isScrolled to true if scrolled more than 20px
    };
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Clean up on unmount
  }, []);

  // Define navigation links for both desktop and mobile menus
  // NOTE: Per user's request, content/text/value in navLinks are NOT changed.
  const navLinks = [
    { to: "/courses", label: "Courses", isExternal: false },
    { href: "/#earn", label: "Earn", isExternal: false }, // Assuming earn is a section on homepage
    { href: "/#about", label: "About", isExternal: false }, // Assuming about is a section on homepage
    { to: "/mint-creator-domain", label: "Mint Domain", isExternal: false },
  ];

  // Tailwind CSS classes for active navigation links (replacing activeLinkStyle object)
  const activeLinkClasses = "text-yellow-400 font-semibold";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation to visible state
      transition={{ duration: 0.7, ease: "easeOut" }} // Animation transition properties
      // Adjusted background color to the specific hex code #141b33
      className={`fixed top-4 left-0 right-0 max-w-7xl mx-auto z-50 transition-all duration-300 px-1 sm:px-6 lg:px-8
                  ${isScrolled || mobileMenuOpen ? 'bg-[#141b33] py-3 shadow-xl' : 'bg-[#141b33] py-1 shadow-lg'}
                  rounded-lg // Subtle rounded corners all around for the desktop nav
                 `}
    >
      {/* Container for main navbar content, stretching to full width of the parent nav */}
      <div className="flex justify-between items-center h-14">
        {/* Left group: Hamburger Icon + Logo */}
        {/* Adjusted spacing to make them very close, as in the image */}
        <div className="flex items-center gap-2"> {/* Used gap for consistent spacing */}
          {/* Desktop Hamburger Icon (removed circular background, just icon) */}
          <div className="hidden md:flex items-center">
            <Button variant="ghost" size="icon" className="text-gray-200 hover:text-yellow-400">
              <Menu size={28} /> {/* Using Menu icon for the hamburger, slightly larger */}
            </Button>
          </div>

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-1.5"> {/* Adjusted gap for close elements */}
            {/* Shield Icon (replacing L3 text, styled with yellow stroke/fill) */}
            <Shield className="w-8 h-8 text-yellow-400 fill-yellow-400/20" /> {/* Shield icon for the logo */}
            {/* Level3 Text (styled to be yellow) */}
            <span className="text-2xl font-bold text-yellow-400">Level3</span>
          </Link>
        </div>

        {/* Right group: Desktop Navigation Links & Button */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map(link => (
            link.isExternal || link.href ? (
              // External or anchor links
              <a
                key={link.label}
                href={link.href || link.to}
                className="text-gray-200 hover:text-yellow-400 transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)} // Close mobile menu if open
              >
                {link.label}
              </a>
            ) : (
              // Internal NavLinks (for React Router)
              <NavLink
                key={link.label}
                to={link.to}
                // Apply activeLinkClasses if the link is active
                className={({ isActive }) =>
                  `text-gray-200 hover:text-yellow-400 transition-colors duration-200 font-medium ${isActive ? activeLinkClasses : ''}`
                }
                onClick={() => setMobileMenuOpen(false)} // Close mobile menu if open
              >
                {link.label}
              </NavLink>
            )
          ))}
          {/* "View Courses" Button (solid yellow, changed from rounded-full to rounded-lg to match image) */}
          <Link to="/courses">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900 font-semibold px-6 py-2.5 rounded-lg shadow-md transition-all duration-300">
              <BookOpen className="w-4 h-4 mr-2" />
              View Courses
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button (Hamburger/X icon) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-200 hover:text-yellow-400">
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }} // Initial animation state for dropdown
          animate={{ opacity: 1, height: 'auto' }} // Animation to expanded state
          exit={{ opacity: 0, height: 0 }} // Animation to collapsed state (requires AnimatePresence from framer-motion)
          // Apply the specific hex code #141b33 to mobile menu as well for consistency
          className="md:hidden bg-[#141b33] py-3 shadow-lg rounded-lg" // Apply rounded-lg here too for all corners
        >
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              link.isExternal || link.href ? (
                // External or anchor links in mobile menu
                <a
                  key={link.label}
                  href={link.href || link.to}
                  className="text-gray-200 hover:text-yellow-400 transition-colors duration-200 font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                // Internal NavLinks in mobile menu
                <NavLink
                  key={link.label}
                  to={link.to}
                  // Apply activeLinkClasses if the link is active
                  className={({ isActive }) =>
                    `text-gray-200 hover:text-yellow-400 transition-colors duration-200 font-medium text-lg ${isActive ? activeLinkClasses : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              )
            ))}
            {/* "View Courses" Button in mobile menu (full width, solid yellow, rounded-lg) */}
            <Link to="/courses" className="w-3/4">
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-zinc-900 font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
                <BookOpen className="w-4 h-4 mr-2" />
                View Courses
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
