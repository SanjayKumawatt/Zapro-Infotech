import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// All 8 active services with unique, compliant copy
const slides = [
  {
    id: 1,
    // Opening Device: Contrast Statement
    title: "Engineering the Next Generation of Web Infrastructure",
    description: "Legacy systems slow down growth. Zapro Infotech is focused on building modern, high-performance web architectures designed to scale with your future ambitions.",
    ctaText: "Start Your Project",
    ctaLink: "/reach-us",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
  },
  {
    id: 2,
    // Opening Device: Rhetorical Question
    title: "Does Your Interface Reflect Your Ambition?",
    description: "We are creating digital experiences focused on clarity and conversion. Our web design approach targets the gap between complex software and intuitive user journeys.",
    ctaText: "Explore Our Design Approach",
    ctaLink: "/solutions/web-design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 3,
    // Opening Device: Layers Metaphor
    title: "Visual Identity That Speaks Before You Do",
    description: "Good design is more than aesthetics; it is a structural layer of communication. We are designing brand assets aimed at conveying your core values instantly.",
    ctaText: "Shape Your Identity",
    ctaLink: "/solutions/graphic-design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 4,
    // Opening Device: Future Readiness
    title: "Preparing Your Business for the Handheld Future",
    description: "The modern audience is mobile-first. Our application development solutions are being engineered to put your business directly in the pockets of your target market.",
    ctaText: "Discuss App Requirements",
    ctaLink: "/solutions/mobile-app-development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 5,
    // Opening Device: Stance-based
    title: "Content Management Should Empower, Not Restrict",
    description: "We build flexible, scalable WordPress architectures. The focus is on delivering systems that remain ready to adapt as your content needs evolve over time.",
    ctaText: "Plan Your Architecture",
    ctaLink: "/solutions/wordpress-development",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 6,
    // Opening Device: Industry Critique
    title: "Visibility is a Structural Requirement",
    description: "Search presence is not an accident. We are developing optimization frameworks designed to align naturally with evolving search engine algorithms.",
    ctaText: "Start Your Optimization",
    ctaLink: "/solutions/seo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
  },
  {
    id: 7,
    // Opening Device: Dual Requirement
    title: "Performance Requires Both Speed and Stability",
    description: "We are setting up hosting environments focused on delivering secure, uninterrupted digital operations for modern web platforms.",
    ctaText: "Secure Your Space",
    ctaLink: "/solutions/web-hosting",
    image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg",
  },
  {
    id: 8,
    // Opening Device: Forward-looking Intent
    title: "Building Storefronts for Tomorrow's Retail",
    description: "Our e-commerce solutions are being designed to integrate secure transactions with seamless inventory flows, preparing you for modern digital retail.",
    ctaText: "Discuss Your Platform",
    ctaLink: "/solutions/e-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Changes every 6 seconds
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
              
              {/* Named CTA Button as per guidelines */}
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