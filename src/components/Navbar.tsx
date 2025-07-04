// src/components/Navbar.tsx
// @ts-nocheck
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming Shadcn UI Button
import { Menu, X, Shield, BookOpen } from "lucide-react";
import { Link, NavLink } from "react-router-dom"; // React Router

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define navigation links for both desktop and mobile menus
  const navLinks = [
    { to: "/coming-soon", label: "Courses", isExternal: false }, // Links to Coming Soon Page
    { to: "/coming-soon", label: "Earn", isExternal: false },     // Links to Coming Soon Page
    { href: "/#about", label: "About", isExternal: false },
    { to: "/coming-soon", label: "Mint Domain", isExternal: false }, // Links to Coming Soon Page
  ];

  // Tailwind CSS classes for active navigation links
  const activeLinkClasses = "text-yellow-400 font-semibold";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-4 left-0 right-0 max-w-7xl mx-auto z-50 transition-all duration-300 px-1 sm:px-6 lg:px-8
                  ${
                    isScrolled || mobileMenuOpen
                      ? "bg-[#141b33] py-3 shadow-xl"
                      : "bg-[#141b33] py-1 shadow-lg"
                  }
                  rounded-lg
                  `}
    >
      <div className="flex justify-between items-center h-14">
        <div className="flex items-center gap-2">
          {/* Desktop Hamburger Icon (hidden on small screens) */}
          <div className="hidden md:flex items-center">
            <div className="bg-slate-900 rounded-full p-3 flex flex-col justify-center w-12 h-12 cursor-pointer">
              <div className="border-[#FFB000] border-b-[2px] w-6"></div>
              <div className="border-[#FFB000] border-b-[2px] w-4 mt-3"></div>
            </div>
          </div>
          <Link to="/" className="flex items-center gap-1.5">
            <Shield className="w-8 h-8 text-yellow-400 fill-yellow-400/20" />
            <span className="text-2xl font-bold text-yellow-400">Level3</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) =>
            link.isExternal || link.href ? (
              <a
                key={link.label}
                href={link.href || link.to}
                className="text-gray-200 hover:text-yellow-400 transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-200 hover:text-yellow-400 transition-colors duration-200 font-medium ${
                    isActive ? activeLinkClasses : ""
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            )
          )}
          {/* "View Courses" button */}
          <Link to="/coming-soon"> {/* Links to Coming Soon Page */}
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900 font-semibold px-6 py-2.5 rounded-lg shadow-md transition-all duration-300">
              <BookOpen className="w-4 h-4 mr-2" />
              View Courses
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-200 hover:text-yellow-400"
          >
            {mobileMenuOpen ? (
              <X size={26} />
            ) : (
              <div className="items-center">
                <div className="bg-slate-900 rounded-full p-3 flex flex-col justify-center w-12 h-12 cursor-pointer">
                  <div className="border-[#FFB000] border-b-[2px] w-6"></div>
                  <div className="border-[#FFB000] border-b-[2px] w-4 mt-3"></div>
                </div>
              </div>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Content (conditionally rendered) */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#141b33] py-3 shadow-lg rounded-lg"
        >
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) =>
              link.isExternal || link.href ? (
                <a
                  key={link.label}
                  href={link.href || link.to}
                  className="text-gray-200 hover:text-yellow-400 transition-colors duration-200 font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-gray-200 hover:text-yellow-400 transition-colors duration-200 font-medium text-lg ${
                      isActive ? activeLinkClasses : ""
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              )
            )}
            {/* "View Courses" button in mobile menu */}
            <Link to="/coming-soon" className="w-3/4"> {/* Links to Coming Soon Page */}
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