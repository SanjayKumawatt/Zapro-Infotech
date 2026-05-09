import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown,
  Code, Layout, Server, 
  Cloud, Cpu, Terminal, Shield, Layers // Naye startup-focused icons
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    setDesktopDropdownOpen(false);
  }, [location]);

  const topNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Company', path: '/company' },
    { name: 'Reach Us', path: '/reach-us' },
  ];

  // ✅ RED FLAGS REMOVED: No generic SEO, WordPress, or Graphic Design.
  // ✅ GREEN FLAGS ADDED: Focused on SaaS, AI Infrastructure, Cloud, and Developer Tools.
  const platformList = [
    { name: 'Core SaaS Platform', path: '/platform/core', icon: Layout },
    { name: 'AI Infrastructure', path: '/platform/ai-infrastructure', icon: Cpu },
    { name: 'Cloud Deployments', path: '/platform/cloud', icon: Cloud },
    { name: 'Developer Tools & APIs', path: '/platform/developer-tools', icon: Terminal },
    { name: 'Operational Workflows', path: '/platform/workflows', icon: Layers },
    { name: 'Security & Infrastructure', path: '/platform/security', icon: Shield },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-[#eaf6f9] py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group z-50">
            <img src={logo} className="h-10 w-auto object-contain" alt="Zapro Logo" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-[#0d2b5e] tracking-wide">
                ZAPRO INFOTECH
              </span>
              <span className="text-[10px] text-[#00b4d8] font-bold uppercase tracking-widest">
                Private Limited
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
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

            {/* Changed "Our Solutions" to "Platform" for a more Product-startup feel */}
            <div
              className="relative flex items-center group"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-semibold transition-colors duration-200 relative pb-1 ${location.pathname.includes('/platform') ? 'text-[#00b4d8]' : 'text-[#0d2b5e] hover:text-[#00b4d8]'
                  }`}
              >
                Platform Ecosystem
                <ChevronDown size={16} className={`transition-transform duration-300 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
                {location.pathname.includes('/platform') && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00b4d8]"></span>
                )}
              </button>

              <AnimatePresence>
                {desktopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden"
                  >
                    <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                    {/* Grid layout adjusted to look like a modern SaaS dropdown */}
                    <div className="grid grid-cols-2 p-3 gap-2">
                      {platformList.map((feature) => (
                        <Link
                          key={feature.name}
                          to={feature.path}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#0d2b5e] hover:bg-[#eaf6f9] hover:text-[#00b4d8] rounded-md transition-colors group"
                        >
                          <feature.icon size={18} className="text-[#00b4d8] group-hover:scale-110 transition-transform" />
                          <span>{feature.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <span className="text-[#0d2b5e]/30 text-xs ml-6">◆</span>
            </div>

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

              <div className="rounded-md overflow-hidden bg-gray-50/50">
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 font-semibold text-[#0d2b5e]"
                >
                  Platform Ecosystem
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
                      {platformList.map((feature) => (
                        <Link
                          key={feature.name}
                          to={feature.path}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#00b4d8] hover:bg-[#eaf6f9]/50"
                        >
                          <feature.icon size={16} className="text-[#00b4d8]" />
                          {feature.name}
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