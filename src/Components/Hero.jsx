import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ✅ RED FLAGS REMOVED: No "being designed", no WordPress, no SEO, no Graphic Design.
// ✅ GREEN FLAGS ADDED: Focus on Core SaaS, API, Cloud Infrastructure, and active deployments.
const slides = [
  {
    id: 1,
    title: "High-Performance Cloud Infrastructure",
    description: "We operate secure, low-latency deployment stacks serving active user workflows. Our core SaaS platform provides the stability required to run enterprise-grade applications today.",
    ctaText: "View Deployment Stack",
    ctaLink: "/platform/core",
    // Image of server infrastructure / cloud
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 2,
    title: "Active AI Infrastructure & Workflows",
    description: "Skip the prototypes. We process and route data through live AI infrastructure. Our systems are actively testing, deploying, and serving real user workloads without bottlenecks.",
    ctaText: "Explore AI Infrastructure",
    ctaLink: "/platform/ai-infrastructure",
    // Image of dark mode code / data dashboard
    image: "https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg",
  },
  {
    id: 3,
    title: "Developer Tools & API Access",
    description: "Production-ready APIs and robust developer environments. We provide concrete technical implementation details and access tokens required to scale your application logic instantly.",
    ctaText: "Access Technical Docs",
    ctaLink: "/platform/developer-tools",
    // Image of clean code / terminal
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[100vh] min-h-[600px] w-full overflow-hidden bg-[#0d2b5e]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Deep Navy/Cyan Overlay matching your theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e]/95 via-[#0d2b5e]/80 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Animated Cyan Line */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-[#00b4d8] mb-6"
              />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-xl">
                {slides[currentSlide].description}
              </p>
              
              {/* CTA Button */}
              <Link
                to={slides[currentSlide].ctaLink}
                className="group inline-flex items-center gap-3 bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-[#0d2b5e] transition-all duration-300"
              >
                {slides[currentSlide].ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute z-20 bottom-10 right-10 flex items-center gap-4">
        {/* Indicators */}
        <div className="flex items-center gap-2 mr-6 hidden md:flex">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-8 h-2 bg-[#00b4d8]' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button 
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/30 rounded-full text-white hover:bg-white hover:text-[#0d2b5e] transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/30 rounded-full text-white hover:bg-white hover:text-[#0d2b5e] transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;