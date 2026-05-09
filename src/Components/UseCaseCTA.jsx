import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, GitMerge, Terminal, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const UseCasesAndCTA = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const useCases = [
    {
      icon: Activity,
      title: "High-Volume Data Routing",
      description: "Applications process continuous data streams through our edge nodes, ensuring low-latency synchronization across distributed user bases without packet loss.",
    },
    {
      icon: GitMerge,
      title: "Automated AI Pipelines",
      description: "Teams route raw, unstructured inputs directly into our live AI infrastructure, converting it into structured JSON responses for immediate frontend deployment.",
    },
    {
      icon: Terminal,
      title: "Headless System Integration",
      description: "Enterprises utilize our secure access tokens and RESTful APIs to bypass backend development, connecting their custom interfaces directly to our core logic.",
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION: Live Use-Cases */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#00b4d8] rounded-full animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-[#00b4d8] uppercase">Live in Production</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b5e] mb-6">
              How Teams Operate on Zapro
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Our infrastructure is actively supporting diverse technical workloads. Here is how applications are currently utilizing our core platform resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#eaf6f9]/50 border border-gray-100 p-8 rounded-sm hover:bg-[#eaf6f9] transition-colors duration-300"
              >
                <div className="mb-6">
                  <useCase.icon size={32} className="text-[#0d2b5e]" />
                </div>
                <h3 className="text-xl font-bold text-[#0d2b5e] mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Direct Final CTA (Matte Finish) */}
      <section className="py-20 bg-[#0d2b5e] relative overflow-hidden">
        {/* Subtle geometric pattern instead of shiny gradients */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00b4d8]/10 rounded-full mb-8">
              <Zap size={32} className="text-[#00b4d8]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Deploy Your Infrastructure Today
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop planning your backend architecture. Access our documentation, generate your API keys, and start routing your application data through our operational platform immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/platform/developer-tools"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00b4d8] text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-[#0d2b5e] transition-colors duration-300 group"
              >
                Access API Keys
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/reach-us"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Review Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UseCasesAndCTA;