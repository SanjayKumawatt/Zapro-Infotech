import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TerminalSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#0d2b5e]">
      {/* Abstract Background Design Element */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#pattern-squares)" className="text-[#00b4d8]" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 border border-white/10 p-10 lg:p-14 rounded-sm backdrop-blur-sm">
          
          {/* Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <TerminalSquare className="text-[#00b4d8]" size={24} />
              <span className="text-[#00b4d8] font-semibold tracking-wider text-sm uppercase">
                Open for Development
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Define Your Digital Infrastructure?
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-0">
              Zapro Infotech is actively engaging with businesses to plan and construct robust technological solutions. We focus on clear requirements, clean code, and scalable architecture.
            </p>
          </motion.div>

          {/* Button Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <Link
              to="/reach-us"
              className="group flex items-center justify-center gap-3 bg-[#00b4d8] text-white px-8 py-5 rounded-sm font-bold text-lg hover:bg-white hover:text-[#0d2b5e] transition-all duration-300 shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              Start the Conversation
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;