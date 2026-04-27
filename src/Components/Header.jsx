import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown,
  Code, Layout, Palette, Smartphone,
  LayoutTemplate, Search, Server, ShoppingCart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.png"


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    setDesktopDropdownOpen(false);
  }, [location]);

  // Unique page names as per Part 4 of guidelines
  const topNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Company', path: '/company' },
    { name: 'Reach Us', path: '/reach-us' },
  ];

  // Updated Services: Removed the 3 specific ones and added Lucide Icons
  const servicesList = [
    { name: 'Web Development', path: '/solutions/web-development', icon: Code },
    { name: 'Web Design', path: '/solutions/web-design', icon: Layout },
    { name: 'Graphic Design', path: '/solutions/graphic-design', icon: Palette },
    { name: 'Mobile Application Development', path: '/solutions/mobile-app-development', icon: Smartphone },
    { name: 'WordPress Development', path: '/solutions/wordpress-development', icon: LayoutTemplate },
    { name: 'Search Engine Optimization', path: '/solutions/seo', icon: Search },
    { name: 'Web Hosting and Domain', path: '/solutions/web-hosting', icon: Server },
    { name: 'E-Commerce Solution', path: '/solutions/e-commerce', icon: ShoppingCart },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-[#eaf6f9] py-4' // Light cyan background matching reference
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group z-50">
            {/* Logo */}
            <img src={logo} className="h-10 w-auto object-contain" alt="logo" />

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-[#0d2b5e] tracking-wide">
                ZAPRO INFOTECH
              </span>
              <span className="text-[10px] text-[#00b4d8] font-bold uppercase tracking-widest">
                Private Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">

            {/* Standard Link: Home */}
            <div className="flex items-center">
              <Link
                to={topNavLinks[0].path}
                className={`font-semibold transition-colors duration-200 relative pb-1 ${location.pathname === topNavLinks[0].path ? 'text-[#00b4d8]' : 'text-[#0d2b5e] hover:text-[#00b4d8]'
                  }`}
              >
                {topNavLinks[0].name}
                {location.pathname === topNavLinks[0].path && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00b4d8]"></span>
                )}
              </Link>
              <span className="text-[#0d2b5e]/30 text-xs ml-6">◆</span>
            </div>

            {/* Dropdown Link: Our Solutions */}
            <div
              className="relative flex items-center group"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-semibold transition-colors duration-200 relative pb-1 ${location.pathname.includes('/solutions') ? 'text-[#00b4d8]' : 'text-[#0d2b5e] hover:text-[#00b4d8]'
                  }`}
              >
                Our Solutions
                <ChevronDown size={16} className={`transition-transform duration-300 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
                {location.pathname.includes('/solutions') && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00b4d8]"></span>
                )}
              </button>

              {/* Desktop Mega Menu Dropdown with Icons */}
              <AnimatePresence>
                {desktopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[550px] bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden"
                  >
                    {/* Invisible bridge to prevent hover loss */}
                    <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>

                    <div className="grid grid-cols-2 p-3 gap-2">
                      {servicesList.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#0d2b5e] hover:bg-[#eaf6f9] hover:text-[#00b4d8] rounded-md transition-colors group"
                        >
                          <service.icon size={18} className="text-[#00b4d8] group-hover:scale-110 transition-transform" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <span className="text-[#0d2b5e]/30 text-xs ml-6">◆</span>
            </div>

            {/* Standard Links: The Company, Reach Us */}
            {topNavLinks.slice(1).map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <div key={link.name} className="flex items-center">
                  <Link
                    to={link.path}
                    className={`font-semibold transition-colors duration-200 relative pb-1 ${isActive ? 'text-[#00b4d8]' : 'text-[#0d2b5e] hover:text-[#00b4d8]'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00b4d8]"></span>
                    )}
                  </Link>
                  {index < topNavLinks.slice(1).length - 1 && (
                    <span className="text-[#0d2b5e]/30 text-xs ml-6">◆</span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#0d2b5e] p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[72px] left-0 w-full bg-white overflow-y-auto shadow-xl pb-24"
          >
            <div className="px-4 py-6 space-y-2">
              <Link
                to={topNavLinks[0].path}
                className="block px-4 py-3 rounded-md font-semibold text-[#0d2b5e] hover:bg-gray-50"
              >
                {topNavLinks[0].name}
              </Link>

              {/* Mobile Services Accordion with Icons */}
              <div className="rounded-md overflow-hidden bg-gray-50/50">
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 font-semibold text-[#0d2b5e]"
                >
                  Our Solutions
                  <ChevronDown size={20} className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180 text-[#00b4d8]' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white border-l-2 border-[#00b4d8] ml-4 mb-2"
                    >
                      {servicesList.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#00b4d8] hover:bg-[#eaf6f9]/50"
                        >
                          <service.icon size={16} className="text-[#00b4d8]" />
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {topNavLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-3 rounded-md font-semibold text-[#0d2b5e] hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;