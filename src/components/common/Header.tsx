// src/components/common/Header.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/common/Button";
import { generateNavigationSchema, generateJSONLD } from "@/utils/seoUtils";

// Define TypeScript interface for menu items
interface DropdownItem {
  name: string;
  path: string;
  description?: string;
}

interface NavItem {
  name: string;
  path: string;
  dropdown?: DropdownItem[];
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation items with dropdown menus
  const navItems = [
    {
      name: "Products",
      path: "#",
      dropdown: [
        { name: "Docurate", path: "/products/docurate", description: "AI-powered document processing & extraction" },
        { name: "VisionTech", path: "/coming-soon/visiontech", description: "Computer vision for advanced image analysis" },
        { name: "Fusio", path: "/coming-soon/fusio", description: "Data integration platform with AI capabilities" },
        { name: "Rae", path: "/coming-soon/rae", description: "Conversational AI assistant for enterprises" },
        { name: "Notei", path: "/coming-soon/notei", description: "AI note-taking and knowledge management" }
      ]
    },
    {
      name: "Solutions",
      path: "#",
      dropdown: [
        { name: "Healthcare", path: "/coming-soon/healthcare", description: "AI diagnostics and patient care optimization" },
        { name: "Finance", path: "/coming-soon/finance", description: "Intelligent document processing for finance" },
        { name: "Retail", path: "/coming-soon/retail", description: "Customer insights and inventory management" },
        { name: "Manufacturing", path: "/solutions/manufacturing", description: "Quality control and predictive maintenance" }
      ]
    },
    {
      name: "Developers",
      path: "#",
      dropdown: [
        { name: "Documentation", path: "/coming-soon/docs", description: "Comprehensive guides for our AI platforms" },
        { name: "API References", path: "/coming-soon/api", description: "Technical specifications for integration" },
        { name: "SDK", path: "/coming-soon/sdk", description: "Development kits for building with our AI" }
      ]
    },
    {
      name: "Resources",
      path: "#",
      dropdown: [
        { name: "Blog", path: "/blog", description: "Latest AI insights and company updates" },
        { name: "Case Studies", path: "/coming-soon/case-studies", description: "Real-world AI implementation stories" },
        { name: "Whitepapers", path: "/coming-soon/whitepapers", description: "In-depth research on AI technologies" }
      ]
    },
    {
      name: "Company",
      path: "#",
      dropdown: [
        { name: "About Us", path: "/company/about", description: "Our mission and AI expertise" },
        { name: "Careers", path: "/company/careers", description: "Join our team of AI innovators" },
        { name: "Contact", path: "/company/contact", description: "Get in touch with our specialists" }
      ]
    },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Generate structured data JSON
  const navStructuredData = generateNavigationSchema(navItems);

  return (
    <motion.header
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-md py-2 shadow-lg'
          : 'bg-black/20 backdrop-blur-sm py-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Add structured data script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJSONLD(navStructuredData)
        }}
      />
      <div className="container max-w-[90rem] mx-auto px-5">
        <Navbar
          className="bg-transparent border-0 shadow-none py-0 flex items-center"
          rounded={false}
        >
          <Navbar.Brand as={Link} href="/">
            <motion.img
              src="/image/white-logo.png"
              className="h-12 md:h-16 lg:h-19"
              alt="DeeCogs Logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
          </Navbar.Brand>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8 ml-auto">
            {navItems.map((item, index) => (
              <div key={`desktop-${item.name}`} className="relative group dropdown-container">
                <motion.div
                  className="relative"
                  onHoverStart={() => toggleDropdown(index)}
                  onHoverEnd={() => toggleDropdown(null)}
                >
                  <button
                    aria-expanded={activeDropdown === index}
                    aria-controls={`dropdown-menu-${item.name}`}
                    aria-haspopup="true"
                    className="text-white hover:text-primary transition-colors font-normal text-base py-2 flex items-center group focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1 focus:ring-offset-transparent rounded-md px-2"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    {item.name}
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                
                  {/* Dropdown Menu (Desktop) */}
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        id={`dropdown-menu-${item.name}`}
                        className="absolute top-full left-0 mt-2 w-72 rounded-md shadow-lg bg-black/80 backdrop-blur-md border border-gray-700 overflow-hidden z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem, itemIndex) => (
                            <motion.div
                              key={`desktop-dropdown-${item.name}-${dropdownItem.name}`}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: itemIndex * 0.05, duration: 0.2 }}
                              whileHover={{
                                backgroundColor: "rgba(254, 102, 35, 0.2)",
                                x: 5
                              }}
                            >
                              <Link
                                href={dropdownItem.path}
                                className="group flex flex-col px-4 py-3 text-sm text-gray-200 hover:text-primary transition-colors duration-200 focus:outline-none focus:bg-gray-800/50 focus:text-primary"
                                role="menuitem"
                                title={`${dropdownItem.name} - ${dropdownItem.description}`}
                                aria-label={`${dropdownItem.name}: ${dropdownItem.description}`}
                              >
                                <div className="flex items-center">
                                  <span className="h-1 w-0 bg-primary rounded-full mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-200"></span>
                                  <span className="font-medium">{dropdownItem.name}</span>
                                </div>
                                {dropdownItem.description && (
                                  <span className="text-xs text-gray-400 mt-1 pl-5 group-hover:text-gray-300 transition-colors">
                                    {dropdownItem.description}
                                  </span>
                                )}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
            
            <div className="ml-6 flex items-center space-x-4">
              <Button
                text="Login"
                variant="outline"
                size="sm"
                href="/login"
                className="text-white border-white hover:bg-primary hover:border-primary px-10"
                target="_blank"
              />
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="xl:hidden ml-auto z-[100]">
            <button 
              onClick={handleMobileMenuToggle}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
              className="xl:hidden fixed inset-0 w-screen h-screen bg-gradient-to-b from-black/95 to-black/90 z-[9999] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              >
                {/* Close button */}
                <motion.button
                  className="absolute top-6 right-6 text-white p-2 z-[10000]"
                  onClick={handleMobileMenuToggle}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                
                <motion.ul
                  className="flex flex-col p-8 pt-24 text-base w-full items-start space-y-8 h-full overflow-y-auto"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                >
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={`mobile-${item.name}`} 
                      className="w-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="text-white hover:text-primary transition-colors font-normal flex items-center justify-between w-full py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1 focus:ring-offset-black/20 rounded-md p-2"
                          aria-expanded={activeDropdown === index}
                          aria-controls={`mobile-dropdown-menu-${item.name}`}
                          aria-haspopup="true"
                        >
                          {item.name}
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 ml-2"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                        
                        {/* Dropdown Menu (Mobile) */}
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              id={`mobile-dropdown-menu-${item.name}`}
                              className="mt-3 pl-4 space-y-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-4 border-l-2 border-primary/50"
                              initial={{ opacity: 0, height: 0, scale: 0.95 }}
                              animate={{ opacity: 1, height: "auto", scale: 1 }}
                              exit={{ opacity: 0, height: 0, scale: 0.9 }}
                              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                              role="menu"
                              aria-orientation="vertical"
                            >
                              {item.dropdown.map((dropdownItem, itemIndex) => (
                                <motion.div
                                  key={`mobile-dropdown-${item.name}-${dropdownItem.name}`}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: itemIndex * 0.07 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Link
                                    href={dropdownItem.path}
                                    className="flex flex-col py-2 text-sm text-gray-200 hover:text-primary transition-colors group focus:outline-none focus:text-primary focus:underline"
                                    onClick={handleMobileMenuToggle}
                                    role="menuitem"
                                    title={`${dropdownItem.name} - ${dropdownItem.description}`}
                                    aria-label={`${dropdownItem.name}: ${dropdownItem.description}`}
                                  >
                                    <div className="flex items-center">
                                      <span className="block h-1.5 w-1.5 rounded-full bg-gray-400 group-hover:bg-primary mr-2 transition-colors"></span>
                                      <span className="font-medium">{dropdownItem.name}</span>
                                    </div>
                                    {dropdownItem.description && (
                                      <span className="text-xs text-gray-400 mt-1 ml-4 group-hover:text-gray-300 transition-colors">
                                        {dropdownItem.description}
                                      </span>
                                    )}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.li>
                  ))}

                  <motion.li
                    className="mt-8 pt-4 border-t border-gray-700/50 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href="/login"
                      className="text-white font-normal text-sm border border-[#fe6623] py-3 px-6 rounded-full hover:bg-[#fe6623] transition-all duration-300 inline-block"
                      onClick={handleMobileMenuToggle}
                      target="_blank"
                    >
                      Login
                    </Link>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </Navbar>
      </div>
    </motion.header>
  );
};

export default Header;